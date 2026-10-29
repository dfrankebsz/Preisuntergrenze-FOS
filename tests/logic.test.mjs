import test from 'node:test';
import assert from 'node:assert/strict';
import { course } from '../public/course-data.js';
import {checkAnswer,parseNumber,xpFor,emptyProgress,awardsSummary,levelFromXP} from '../public/logic.js';
const qs=course.questions;
test('112 Aufgaben, 10 Lernkapitel und Abschlusstest',()=>{
 assert.equal(course.modules.length,11);assert.equal(qs.length,112);
 const base=qs.filter(q=>!q.bonus);
 assert.equal(base.filter(q=>q.afb===1).length,23);
 assert.equal(base.filter(q=>q.afb===2).length,46);
 assert.equal(base.filter(q=>q.afb===3).length,23);
 assert.equal(qs.filter(q=>q.bonus).length,20);
 for(const m of course.modules){const here=qs.filter(q=>q.module===m.id&&!q.bonus);for(const afb of [1,2,3])assert(here.some(q=>q.afb===afb),m.id+' has no afb '+afb)}
});
test('alle objektiv bewertbaren Musterantworten werden akzeptiert',()=>{
 for(const q of qs){assert(q.solution&&q.solution.length>10,'Musterlösung fehlt: '+q.id);assert(q.prompt,'Frage fehlt: '+q.id);if(q.type==='text')continue;assert.equal(checkAnswer(q,q.answer),true,q.id+' / '+q.type)}
});
test('Zahlenformat für deutsche und internationale Schreibweisen',()=>{
 for(const [s,expected] of [['12.345,67 €',12345.67],['12.345',12345],['-3,25',-3.25],['3.50',3.5],[' 1 200,00 ',1200],['20 €/Stück',20]])assert.equal(parseNumber(s),expected);
 assert(Number.isNaN(parseNumber('keine Lösung')));
});
test('falsche Antworten und teilweise richtige Mehrfachauswahl scheitern',()=>{
 const multi=qs.find(q=>q.type==='multi');assert.equal(checkAnswer(multi,[multi.answer[0]]),false);
 const numeric=qs.find(q=>q.type==='number');assert.equal(checkAnswer(numeric,numeric.answer+3),false);
 const s=qs.find(q=>q.type==='single');assert.equal(checkAnswer(s,'Falsche Option'),false);
});
test('XP- und Shop-Berechnungen',()=>{
 const q=qs[0];const p=emptyProgress();p.awards[q.id]={xp:xpFor(q),coins:12};
 assert.equal(awardsSummary(p).xp,xpFor(q));assert(levelFromXP(awardsSummary(p).xp)>=1);
});
test('Kontrolle ausgewählter Prüfungsmuster',()=>{
 let by=q=>qs.find(x=>x.prompt.includes(q));
 assert.equal(by('Fixkosten 6.400 €, Produktion 400').answer,16);
 assert.equal(by('Fixkosten 6.400 €, variable Stückkosten 22 €, Menge 800').answer,30);
 assert.equal(by('Einzelkosten 12.000 € (voll variabel)').answer,28);
 assert.equal(by('Selbstkosten 134,55 €').answer,98.91);
 assert.equal(by('Das Produkt wird gestrichen; Fixkosten').answer,-9000);
});
