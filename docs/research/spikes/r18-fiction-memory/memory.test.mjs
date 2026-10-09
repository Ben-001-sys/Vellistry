import test from 'node:test';
import assert from 'node:assert/strict';
import {assembleMemoryContext as assemble,MemoryError} from './memory.mjs';

function fixture(){
 return {
  books:[{id:'A',ownerId:'alice'},{id:'B',ownerId:'bob'}],
  chapters:[{id:'c1',bookId:'A',currentRevisionId:'r1'},{id:'c2',bookId:'A',currentRevisionId:'r2'},
    {id:'c3',bookId:'A',currentRevisionId:'r3'},{id:'c4',bookId:'A',currentRevisionId:'r4'},
    {id:'b1',bookId:'B',currentRevisionId:'rb1'}],
  scenes:[{id:'injury',bookId:'A',chapterId:'c1',storyTime:3},{id:'between',bookId:'A',chapterId:'c2',storyTime:8},
   {id:'after',bookId:'A',chapterId:'c3',storyTime:20},{id:'flashback',bookId:'A',chapterId:'c4',storyTime:1},
   {id:'unknown',bookId:'A',chapterId:'c4',storyTime:null},{id:'bscene',bookId:'B',chapterId:'b1',storyTime:8}],
  entities:[{id:'mara',bookId:'A',kind:'character'},{id:'elias',bookId:'A',kind:'character'},
   {id:'mara',bookId:'B',kind:'character'}],
  events:[
   {id:'e1',bookId:'A',entityId:'mara',attribute:'wrist',value:'injured',effectiveAt:3,sequence:1,status:'approved',epistemic:'objective',source:{bookId:'A',chapterId:'c1',revisionId:'r1'},knownBy:[{entityId:'mara',at:3},{entityId:'elias',at:11}]},
   {id:'e2',bookId:'A',entityId:'mara',attribute:'wrist',value:'healed',effectiveAt:17,sequence:2,status:'approved',epistemic:'objective',source:{bookId:'A',chapterId:'c3',revisionId:'r3'},knownBy:[{entityId:'mara',at:17},{entityId:'elias',at:17}]},
   {id:'e3',bookId:'A',entityId:'mara',attribute:'fate',value:'dead',effectiveAt:7,sequence:3,status:'rejected',epistemic:'objective',source:{bookId:'A',chapterId:'c2',revisionId:'r2'},knownBy:[{entityId:'mara',at:7}]},
   {id:'e4',bookId:'A',entityId:'mara',attribute:'identity',value:'secret heir',effectiveAt:2,sequence:4,status:'approved',epistemic:'belief',source:{bookId:'A',chapterId:'c1',revisionId:'r1'},knownBy:[{entityId:'elias',at:2}]},
   {id:'e5',bookId:'B',entityId:'mara',attribute:'wrist',value:'mechanical',effectiveAt:1,sequence:1,status:'approved',epistemic:'objective',source:{bookId:'B',chapterId:'b1',revisionId:'rb1'},knownBy:[{entityId:'mara',at:1}]},
  ],
  chunks:[
   {id:'k1',bookId:'A',chapterId:'c1',revisionId:'r1',text:'Mara broke her left wrist during the battle.',storyTime:3,status:'current',knownTo:[{entityId:'mara',at:3},{entityId:'elias',at:11}]},
   {id:'k2',bookId:'A',chapterId:'c3',revisionId:'r3',text:'Mara healed her left wrist.',storyTime:17,status:'current',knownTo:[{entityId:'mara',at:17},{entityId:'elias',at:17}]},
   {id:'k3',bookId:'B',chapterId:'b1',revisionId:'rb1',text:'Mara has a mechanical left wrist.',storyTime:1,status:'current',knownTo:[{entityId:'mara',at:1}]},
  ],
  rules:[{id:'w1',bookId:'A',enabled:true,action:'continue',text:'Maintain selected POV.'},
   {id:'w2',bookId:'A',enabled:false,action:'all',text:'Never describe the weather.'},
   {id:'b1',bookId:'B',enabled:true,action:'all',text:'Only B instructions.'}],
  candidates:[{id:'p1',bookId:'A',status:'pending',value:'Mara is secretly dead.'}]
 };
}
const req=(changes={})=>({userId:'alice',bookId:'A',sceneId:'between',revisionId:'r2',action:'continue',query:'Mara wrist',...changes});
function stateAt(ctx,entity,attribute){return ctx.canon.find(x=>x.entityId===entity&&x.attribute===attribute)?.value ?? null;}
function mustThrow(code,fn){assert.throws(fn,err=>err instanceof MemoryError && err.code===code);}

test('MEM-01 foreign book is hidden even with guessed book/scene IDs',()=>{mustThrow('BOOK_NOT_ACCESSIBLE',()=>assemble(fixture(),req({bookId:'B',sceneId:'bscene',revisionId:'rb1'})));});
test('MEM-01 same-name B entity and passage excluded from A',()=>{const x=assemble(fixture(),req());assert.equal(stateAt(x,'mara','wrist'),'injured');assert.ok(!x.evidence.some(e=>e.chunkId==='k3'));assert.ok(!x.rules.some(r=>r.id==='b1'));});
test('MEM-02 injury applies before recovery',()=>{assert.equal(stateAt(assemble(fixture(),req()),'mara','wrist'),'injured');});
test('MEM-02 recovery supersedes injury after its effective story time',()=>{assert.equal(stateAt(assemble(fixture(),req({sceneId:'after',revisionId:'r3'})),'mara','wrist'),'healed');});
test('MEM-03 flashback uses earlier fictional time, not chapter order',()=>{let x=assemble(fixture(),req({sceneId:'flashback',revisionId:'r4'}));assert.equal(stateAt(x,'mara','wrist'),null);assert.equal(x.evidence.length,0);});
test('MEM-03 unknown story time fails closed on temporal canon and evidence',()=>{let x=assemble(fixture(),req({sceneId:'unknown',revisionId:'r4'}));assert.equal(x.canon.length,0);assert.equal(x.evidence.length,0);assert.ok(x.warnings.includes('UNKNOWN_STORY_TIME'));});
test('MEM-04 Elias cannot use injury before learning it',()=>{let x=assemble(fixture(),req({povEntityId:'elias'}));assert.equal(stateAt(x,'mara','wrist'),null);assert.equal(x.evidence.length,0);});
test('MEM-04 after explicit knowledge-acquisition checkpoint, Elias may access injury',()=>{let s=fixture();s.scenes.find(x=>x.id==='between').storyTime=13;let x=assemble(s,req({povEntityId:'elias'}));assert.equal(stateAt(x,'mara','wrist'),'injured');});
test('MEM-05 rejected AI candidate and event are never canon',()=>{let x=assemble(fixture(),req());assert.equal(stateAt(x,'mara','fate'),null);assert.doesNotMatch(JSON.stringify(x),/secretly dead|\"dead\"/);});
test('MEM-05 in-character claim is not promoted to objective state',()=>{let x=assemble(fixture(),req());assert.equal(stateAt(x,'mara','identity'),null);});
test('MEM-06 changed manuscript revision makes approved evidence stale',()=>{let s=fixture();s.chapters.find(x=>x.id==='c1').currentRevisionId='r1-new';let x=assemble(s,req());assert.equal(stateAt(x,'mara','wrist'),null);assert.ok(x.warnings.includes('STALE_FACT_EXCLUDED'));assert.ok(!x.evidence.some(e=>e.chunkId==='k1'));});
test('MEM-07 disabled rule is absent; action-scope respected',()=>{let x=assemble(fixture(),req());assert.deepEqual(x.rules.map(r=>r.id),['w1']);let y=assemble(fixture(),req({action:'rewrite'}));assert.deepEqual(y.rules,[]);});
test('MEM-08 source citation evidence is lexical and revision-bound',()=>{let x=assemble(fixture(),req());assert.deepEqual(x.evidence.map(e=>e.chunkId),['k1']);assert.equal(x.evidence[0].revisionId,'r1');});
test('MEM-08 zero lexical match means no invented citations',()=>{let x=assemble(fixture(),req({query:'orbital zeppelin'}));assert.deepEqual(x.evidence,[]);});
test('MEM-09 request with outdated source revision is rejected',()=>{mustThrow('STALE_SOURCE_REVISION',()=>assemble(fixture(),req({revisionId:'old-r2'})));});
test('MEM-09 retry after revision advances fails closed',()=>{let s=fixture();let old=req();s.chapters.find(x=>x.id==='c2').currentRevisionId='new-r2';mustThrow('STALE_SOURCE_REVISION',()=>assemble(s,old));});
test('MEM-10 memory assembly requires no AI, network or embedding engine',()=>{let x=assemble(fixture(),req());assert.equal(x.remoteCalls,0);assert.equal(x.status,'context-preview-only');});
test('MEM-11 forged POV from another book is rejected',()=>{mustThrow('POV_NOT_ACCESSIBLE',()=>assemble(fixture(),req({povEntityId:'unknown-foreign'})));});
test('MEM-11 an approved fact citing another book is rejected',()=>{let s=fixture();s.events[0].source.bookId='B';let x=assemble(s,req());assert.equal(stateAt(x,'mara','wrist'),null);});
test('MEM-12 limit and input validation fail closed',()=>{mustThrow('BAD_REQUEST',()=>assemble(fixture(),req({maxEvidence:500})));mustThrow('BAD_REQUEST',()=>assemble(fixture(),req({bookId:null})));});
test('Temporal tie-breaking selects the final author-approved event sequence',()=>{let s=fixture();s.events.push({...s.events[0],id:'e6',value:'splinted',sequence:6});let x=assemble(s,req());assert.equal(stateAt(x,'mara','wrist'),'splinted');});
test('Evidence never returns beyond target story time, including after recovery',()=>{let x=assemble(fixture(),req());assert.ok(!x.evidence.some(e=>e.chunkId==='k2'));});
test('Changes to source revision never mutate existing fixture or canonical events',()=>{let s=fixture();let before=JSON.stringify(s);assemble(s,req());assert.equal(JSON.stringify(s),before);});
