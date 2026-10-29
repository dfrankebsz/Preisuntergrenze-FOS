// Shared by browser and Netlify Function. Answers are only awarded after validation.
export const xpFor = q => ({1:20,2:32,3:44}[q.afb]||20) + (q.bonus?12:0);
export const coinsFor = q => Math.round(xpFor(q)*0.6);
export function parseNumber(value){
 if(typeof value==='number') return Number.isFinite(value)?value:NaN;
 if(typeof value!=='string')return NaN;
 let s=value.trim().replace(/[€\s\u00a0]/g,'').replace(/(EUR|\/Stück|\/Set|\/Paar|\/Einheit|Stück|Paar|Set)/gi,'');
 if(s.includes(',')) s=s.replace(/\./g,'').replace(',','.');
 else if(/^[-+]?\d{1,3}(\.\d{3})+$/.test(s))s=s.replace(/\./g,'');
 if(!/^[-+]?(?:\d+\.?\d*|\.\d+)$/.test(s))return NaN;
 return Number(s);
}
export function checkAnswer(q, answer){
 if(!q)return false;
 if(q.type==='text') return null;
 if(q.type==='number')return Math.abs(parseNumber(answer)-q.answer) <= (q.tolerance??0.011);
 if(q.type==='truefalse')return answer===q.answer;
 if(q.type==='single')return answer===q.answer;
 if(q.type==='multi')return Array.isArray(answer)&&answer.length===q.answer.length&&q.answer.every(x=>answer.includes(x))&&new Set(answer).size===answer.length;
 if(q.type==='match'||q.type==='drag')return answer&&typeof answer==='object'&&!Array.isArray(answer)&&Object.keys(q.answer).length===Object.keys(answer).length&&Object.entries(q.answer).every(([k,v])=>answer[k]===v);
 if(q.type==='order')return Array.isArray(answer)&&answer.length===q.answer.length&&answer.every((v,i)=>v===q.answer[i]);
 return false;
}
export const emptyProgress = ()=>({answers:{},awards:{},owned:['base'],equipped:{avatar:'base',pet:null,outfit:null},checklist:{}});
export function awardsSummary(progress){
 const vals=Object.values(progress.awards||{});
 return {xp:vals.reduce((s,x)=>s+(x.xp||0),0),earnedCoins:vals.reduce((s,x)=>s+(x.coins||0),0)};
}
export function levelFromXP(xp){return Math.min(20,1+Math.floor(Math.sqrt(Math.max(0,xp)/150)));}
export const qIndex = course => new Map(course.questions.map(q=>[q.id,q]));
