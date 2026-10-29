import { getStore } from '@netlify/blobs';
import { randomBytes, scryptSync, timingSafeEqual, createHash } from 'node:crypto';
import { course } from '../../public/course-data.js';
import { checkAnswer, emptyProgress, xpFor, coinsFor, awardsSummary, levelFromXP } from '../../public/logic.js';

export const config={path:'/api/:action'};
const users=()=>getStore({name:'preisgrenzen-users-v1',consistency:'strong'});
const sessions=()=>getStore({name:'preisgrenzen-sessions-v1',consistency:'strong'});
const rates=()=>getStore({name:'preisgrenzen-rates-v1',consistency:'strong'});
const questions=new Map(course.questions.map(q=>[q.id,q]));
const products=new Map(course.items.map(x=>[x.id,x]));
const publicUser=u=>({nickname:u.nickname,schoolClass:u.schoolClass,role:u.role,progress:u.progress,createdAt:u.createdAt});
const className=s=>String(s||'').trim().replace(/\s+/g,' ').toLocaleUpperCase('de-DE');
const nickName=s=>String(s||'').trim().replace(/\s+/g,' ');
const accountKey=(cl,nick)=>'c/'+encodeURIComponent(className(cl))+'/n/'+encodeURIComponent(nickName(nick).toLocaleLowerCase('de-DE'));
const hashToken=s=>createHash('sha256').update(s).digest('hex');
const hashPassword=p=>{let salt=randomBytes(16).toString('hex');return {salt,hash:scryptSync(p,salt,64).toString('hex')}};
const checkPassword=(p,u)=>{if(!u?.hash||!u?.salt)return false;let b=scryptSync(p,u.salt,64);let a=Buffer.from(u.hash,'hex');return b.length===a.length&&timingSafeEqual(b,a)};
const equalSecrets=(a,b)=>{const aa=Buffer.from(a),bb=Buffer.from(b);return aa.length===bb.length&&timingSafeEqual(aa,bb)};
const fail=(msg,status=400)=>Response.json({error:msg},{status,headers:{'Cache-Control':'no-store'}});
const ok=(val,status=200,headers={})=>Response.json(val,{status,headers:{'Cache-Control':'no-store',...headers}});
const parseCookies=req=>Object.fromEntries((req.headers.get('cookie')||'').split(';').map(v=>v.trim().split('=').map(x=>x.trim())).filter(x=>x.length===2));
const secure=req=>new URL(req.url).protocol==='https:'?'; Secure':'';
const setCookie=(req,t)=>`pg_session=${t}; Path=/; HttpOnly; SameSite=Lax; Max-Age=1209600${secure(req)}`;
const clearCookie=req=>`pg_session=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0${secure(req)}`;
async function auth(req){
 const token=parseCookies(req).pg_session; if(!token||!/^[\w-]{32,}$/.test(token))return null;
 const rec=await sessions().get(hashToken(token),{type:'json'});
 if(!rec||rec.expires<Date.now())return null;
 const u=await users().get(rec.key,{type:'json'});
 if(!u||u.authVersion!==rec.authVersion)return null;
 return {user:u,key:rec.key,sessionKey:hashToken(token)};
}
async function issueSession(req,key,u){
 const token=randomBytes(36).toString('base64url');
 await sessions().setJSON(hashToken(token),{key,authVersion:u.authVersion,expires:Date.now()+14*86400000});
 return setCookie(req,token);
}
async function updateUser(key,changer){
 for(let i=0;i<6;i++){
  const old=await users().getWithMetadata(key,{type:'json',consistency:'strong'}); if(!old)return null;
  let obj=structuredClone(old.data); const result=changer(obj); if(result===false)return false;
  const written=await users().setJSON(key,obj,{onlyIfMatch:old.etag});
  if(written.modified)return obj;
 }
 throw Error('Gleichzeitige Änderung: Bitte erneut versuchen.');
}
async function throttle(req,kind,limit=200){
 const id=hashToken((req.headers.get('x-nf-client-connection-ip')||req.headers.get('x-forwarded-for')||'unknown').split(',')[0].trim()+kind);
 const key=`lim/${id}`; let rec=await rates().get(key,{type:'json'}); const now=Date.now();
 if(!rec||rec.until<now)rec={count:0,until:now+15*60000};
 if(rec.count>=limit)return false;
 rec.count++;await rates().setJSON(key,rec);return true;
}
async function jsonBody(req){
 if(Number(req.headers.get('content-length')||'0')>24000)throw Error('Anfrage zu groß.');
 const text=await req.text();if(text.length>24000)throw Error('Anfrage zu groß.');
 return text?JSON.parse(text):{};
}
export default async function(req){
 try{
 const action=new URL(req.url).pathname.split('/').filter(Boolean).at(-1);
 const origin=req.headers.get('origin');if(req.method!=='GET'&&origin&&new URL(origin).host!==new URL(req.url).host)return fail('Ungültige Anfragequelle.',403);
 if(!['GET','POST'].includes(req.method))return fail('Methode nicht erlaubt.',405);
 if(action==='health'&&req.method==='GET')return ok({ready:true,storage:'Netlify Blobs'});
 if(action==='me'&&req.method==='GET'){
  const a=await auth(req);return ok({user:a?publicUser(a.user):null});
 }
 if(action==='register'&&req.method==='POST'){
  if(!await throttle(req,'register'))return fail('Zu viele Versuche. Versuchen Sie es später erneut.',429);
  const b=await jsonBody(req); const nickname=nickName(b.nickname), schoolClass=className(b.schoolClass),password=String(b.password||''),role=b.role==='teacher'?'teacher':'student';
  if(!/^[\p{L}\p{N} _.-]{3,24}$/u.test(nickname))return fail('Nicknamen mit 3–24 Buchstaben, Zahlen, Leerzeichen, Punkt, _ oder - angeben.');
  if(!/^[\p{L}\p{N} _.-]{2,30}$/u.test(schoolClass))return fail('Klassenbezeichnung mit 2–30 Zeichen angeben.');
  if(password.length<8||password.length>120)return fail('Passwort mit mindestens 8 und höchstens 120 Zeichen angeben.');
  if(role==='teacher'){
   const configured=process.env.TEACHER_INVITE_CODE||'';
   if(configured.length<10)return fail('Lehrerzugang ist noch nicht auf Netlify eingerichtet.',503);
   if(!await throttle(req,'teacherInvite',10))return fail('Zu viele Lehrercode-Versuche.',429);
   if(!equalSecrets(String(b.teacherCode||''),configured))return fail('Lehrercode ungültig.',403);
  }
  const key=accountKey(schoolClass,nickname),{salt,hash}=hashPassword(password);
  const user={nickname,schoolClass,role,salt,hash,authVersion:1,progress:emptyProgress(),createdAt:new Date().toISOString()};
  const made=await users().setJSON(key,user,{onlyIfNew:true});
  if(!made.modified)return fail('Nickname in dieser Klasse bereits vergeben.',409);
  return ok({user:publicUser(user)},201,{'Set-Cookie':await issueSession(req,key,user)});
 }
 if(action==='login'&&req.method==='POST'){
  const b=await jsonBody(req), key=accountKey(b.schoolClass,b.nickname);
  if(!await throttle(req,'login:'+key,12))return fail('Zu viele Anmeldeversuche für dieses Konto. Versuchen Sie es später erneut.',429);
  const u=await users().get(key,{type:'json'});
  if(!u||!checkPassword(String(b.password||''),u)||u.role!==(b.role==='teacher'?'teacher':'student'))return fail('Anmeldedaten oder Rolle nicht korrekt.',401);
  return ok({user:publicUser(u)},200,{'Set-Cookie':await issueSession(req,key,u)});
 }
 if(action==='logout'&&req.method==='POST'){
  const a=await auth(req);if(a)await sessions().delete(a.sessionKey);
  return ok({ok:true},200,{'Set-Cookie':clearCookie(req)});
 }
 const a=await auth(req);if(!a)return fail('Bitte zuerst anmelden.',401);
 if(action==='answer'&&req.method==='POST'){
  const b=await jsonBody(req),q=questions.get(String(b.id||''));if(!q)return fail('Aufgabe unbekannt.');
  if(typeof b.answer==='string'&&b.answer.length>3000)return fail('Antwort zu lang.');
  const result=checkAnswer(q,b.answer);
  if(q.type==='text'&&!['correct','revise'].includes(b.selfCheck||'')){
   const saved=await updateUser(a.key,u=>{u.progress.answers[q.id]={answer:String(b.answer||'').slice(0,3000),status:'draft',at:Date.now()};});
   return ok({correct:null,user:publicUser(saved)});
  }
  let correct=q.type==='text'?b.selfCheck==='correct':result===true;
  const saved=await updateUser(a.key,u=>{
   const p=u.progress,previous=p.answers[q.id];
   p.answers[q.id]={answer:b.answer,status:correct?(q.type==='text'?'self':'correct'):((previous&&['correct','self'].includes(previous.status))?previous.status:(q.type==='text'?'draft':'wrong')),attempts:(previous?.attempts||0)+1,at:Date.now()};
   if(correct&&!p.awards[q.id])p.awards[q.id]={xp:xpFor(q),coins:coinsFor(q),self:q.type==='text'};
  });
  return ok({correct,user:publicUser(saved)});
 }
 if(action==='import'&&req.method==='POST'){
  const b=await jsonBody(req);
  if(!Array.isArray(b.entries)||b.entries.length>8)return fail('Maximal acht Aufgaben je Übertragung.');
  const saved=await updateUser(a.key,u=>{
   for(const entry of b.entries){
    const q=questions.get(String(entry.id||''));if(!q)continue;
    const answer=entry.answer;
    if(typeof answer==='string'&&answer.length>3000)continue;
    const correct=q.type==='text'?entry.selfChecked===true:checkAnswer(q,answer)===true;
    const existing=u.progress.answers[q.id];
    if(existing&&['correct','self'].includes(existing.status))continue;
    u.progress.answers[q.id]={answer,status:correct?(q.type==='text'?'self':'correct'):(q.type==='text'?'draft':'wrong'),attempts:1,at:Date.now()};
    if(correct&&!u.progress.awards[q.id])u.progress.awards[q.id]={xp:xpFor(q),coins:coinsFor(q),self:q.type==='text'};
   }
  });
  return ok({user:publicUser(saved)});
 }
 if(action==='checklist'&&req.method==='POST'){
  const b=await jsonBody(req),i=Number(b.index),val=Number(b.value),done=!!b.done;
  if(!Number.isInteger(i)||i<0||i>=course.checklist.length||!Number.isInteger(val)||val<1||val>5)return fail('Ungültige Selbsteinschätzung.');
  const saved=await updateUser(a.key,u=>{u.progress.checklist[i]={value:val,done};});
  return ok({user:publicUser(saved)});
 }
 if(action==='shop'&&req.method==='POST'){
  const b=await jsonBody(req),item=products.get(String(b.id||'')); if(!item||item.id==='base')return fail('Unbekannter Artikel.');
  let err='';const saved=await updateUser(a.key,u=>{
   const p=u.progress,earned=awardsSummary(p),spent=(p.owned||[]).reduce((v,id)=>v+(products.get(id)?.cost||0),0);
   if((p.owned||[]).includes(item.id)){err='Bereits freigeschaltet.';return false;}
   if(levelFromXP(earned.xp)<item.level){err='Das benötigte Level ist noch nicht erreicht.';return false;}
   if(earned.earnedCoins-spent<item.cost){err='Nicht genügend Münzen.';return false;}
   p.owned.push(item.id);
  });
  if(saved===false)return fail(err);
  return ok({user:publicUser(saved)});
 }
 if(action==='equip'&&req.method==='POST'){
  const b=await jsonBody(req),item=products.get(String(b.id||''));
  if(!item)return fail('Artikel unbekannt.');
  const saved=await updateUser(a.key,u=>{if(!u.progress.owned.includes(item.id))return false;u.progress.equipped[item.kind]=item.id;});
  return saved===false?fail('Artikel noch nicht freigeschaltet.'):ok({user:publicUser(saved)});
 }
 if(action==='password'&&req.method==='POST'){
  const b=await jsonBody(req);if(!checkPassword(String(b.oldPassword||''),a.user))return fail('Altes Passwort falsch.',403);
  if(String(b.newPassword||'').length<8||String(b.newPassword||'').length>120)return fail('Neues Passwort: 8–120 Zeichen.');
  const saved=await updateUser(a.key,u=>{Object.assign(u,hashPassword(String(b.newPassword)));u.authVersion++;});
  return ok({user:publicUser(saved),notice:'Bitte erneut anmelden.'},200,{'Set-Cookie':clearCookie(req)});
 }
 if(a.user.role!=='teacher')return fail('Nur für Lehrkräfte.',403);
 if(action==='roster'&&req.method==='GET'){
  const {blobs}=await users().list({prefix:'c/'+encodeURIComponent(a.user.schoolClass)+'/n/'});
  const roster=await Promise.all(blobs.map(async v=>{
   const u=await users().get(v.key,{type:'json'});if(!u)return null;
   return {nickname:u.nickname,schoolClass:u.schoolClass,role:u.role,createdAt:u.createdAt,progress:u.progress};
  }));
  return ok({users:roster.filter(Boolean)});
 }
 if(action==='teacher'&&req.method==='POST'){
  const b=await jsonBody(req),mode=String(b.mode||'');
  if(mode==='resetClass'){
   const {blobs}=await users().list({prefix:'c/'+encodeURIComponent(a.user.schoolClass)+'/n/'});
   for(const rec of blobs)await updateUser(rec.key,u=>{u.progress=emptyProgress();});
   return ok({notice:'Fortschritte dieser Klasse zurückgesetzt.'});
  }
  const key=accountKey(a.user.schoolClass,b.nickname); const target=await users().get(key,{type:'json'});
  if(!target||target.role!=='student')return fail('Schülerkonto in dieser Klasse nicht gefunden.');
  if(mode==='remove'){
   await users().delete(key);return ok({notice:'Schülerkonto gelöscht.'});
  }
  if(mode==='resetProgress'){
   await updateUser(key,u=>{u.progress=emptyProgress();});return ok({notice:'Schülerfortschritt gelöscht.'});
  }
  if(mode==='resetPassword'){
   const temp=randomBytes(12).toString('base64url');
   await updateUser(key,u=>{Object.assign(u,hashPassword(temp));u.authVersion++;});
   return ok({temporaryPassword:temp,notice:'Temporäres Passwort nur einmal anzeigen und sicher weitergeben.'});
  }
  return fail('Aktion unbekannt.');
 }
 return fail('Pfad unbekannt.',404);
 }catch(e){console.error(e);return fail('Speichern oder Verarbeiten fehlgeschlagen. Bitte erneut versuchen.',500)}
}
