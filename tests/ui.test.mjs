import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,writeFile,unlink} from 'node:fs/promises';
import {course} from '../public/course-data.js';
test('UI: alle Seiten und Fragetypen erzeugen ohne JS-Laufzeitfehler',async()=>{
 let html='';const app={set innerHTML(x){html=x},get innerHTML(){return html}};
 globalThis.localStorage={getItem:()=>null,setItem:()=>{}};
 globalThis.window={scrollTo(){}};
 globalThis.document={querySelector:x=>x==='#app'?app:null,addEventListener(){}};
 globalThis.fetch=async()=>({ok:true,async json(){return {user:null}}});
 const source=new URL('../public/app.js',import.meta.url),temp=new URL('../public/app.testing.js',import.meta.url);
 await writeFile(temp,(await readFile(source,'utf8'))+'\nexport {homePage,pathPage,lessonPage,labPage,labMarkup,shopPage,teacherPage,glossaryPage,checklistPage,journalPage,inputFor,route,state};\n');
 try{
  const ui=await import(temp.href+'?test='+Date.now());
  assert(ui.homePage().includes('Die Preisgrenzen-Mission'));
  assert(ui.pathPage().includes('Lernpfad'));
  assert(ui.lessonPage().includes('Musterlösung'));
  for(const q of course.questions)assert(ui.inputFor(q).length>20,'Fragetyp fehlerhaft: '+q.id);
  assert(ui.shopPage().includes('XP-Shop'));
  assert(ui.glossaryPage().includes('Begriffslexikon'));
  assert(ui.checklistPage().includes('Selbsteinschätzung'));
  assert(ui.journalPage().includes('PDF-Druckansicht'));
  for(const lab of ['betrieb','preis','kosten','split','kalk']){ui.state.lab=lab;assert(ui.labPage().includes('Kostenlabor'));assert(ui.labMarkup().length>150,'Labor '+lab)}
  ui.route('lesson','kurz');assert(html.includes('Kurzfristige Preisuntergrenze'));
 }finally{await unlink(temp)}
});
