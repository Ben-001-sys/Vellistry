import assert from 'node:assert/strict';
import {randomUUID} from 'node:crypto';
import {readFileSync,writeFileSync} from 'node:fs';
import {connection,context} from '../../workspace/persistence/workspace-pg-adapter';
const [a,b,s,t,book,other,chapter,foreign]=Array.from({length:8},()=>randomUUID());
const doc={type:'doc',content:[{type:'paragraph',content:[{type:'text',text:'  café\n🦊  ',marks:[{type:'bold'}]}]}]};
const restartFile=process.env.VEL_CASE_RESULT+'.manuscript.json';
if(process.argv.includes('--verify-restart')){
 const state=JSON.parse(readFileSync(restartFile,'utf8'));const c=await connection();
 try{await c.query('begin');await context(c,{authorId:state.author,sessionId:state.session,tokenExpiresAt:Date.now()+60000,verifiedAt:Date.now()});const r=(await c.query('select vellistry_manuscript.read($1,$2) r',[state.book,state.chapter])).rows[0].r;assert.equal(r.revision,4);assert.deepEqual(r.document,state.document);const receipt=(await c.query('select vellistry_manuscript.receipt($1,$2,$3) r',[state.book,state.chapter,state.operation])).rows[0].r;assert.equal(receipt.revision,2);await c.query('commit');console.log(JSON.stringify({id:'real-owned-database-restart-reopen',status:'PASS'}));}finally{await c.end();}process.exit(0);
}
const admin=await connection('postgres');
const principal=(author=a,session=s)=>({authorId:author,sessionId:session,tokenExpiresAt:Date.now()+60000,verifiedAt:Date.now()});
async function tx(fn,p=principal(),user='workspace_test',fault=''){const c=await connection(user);try{await c.query('begin');await context(c,p);if(fault)await c.query("select set_config('vellistry.test_fault',$1,true)",[fault]);const r=await fn(c);await c.query('commit');return r;}catch(e){await c.query('rollback');throw e;}finally{await c.end();}}
const save=(id,v=1,d=doc,ch=chapter,bk=book,p=principal(),fault='')=>tx(async c=>(await c.query('select vellistry_manuscript.save($1,$2,$3,$4,$5::jsonb) r',[bk,ch,id,v,JSON.stringify(d)])).rows[0].r,p,'workspace_test',fault);
const read=(p=principal(),bk=book,ch=chapter)=>tx(async c=>(await c.query('select vellistry_manuscript.read($1,$2) r',[bk,ch])).rows[0].r,p);
const receipt=(id,p=principal())=>tx(async c=>(await c.query('select vellistry_manuscript.receipt($1,$2,$3) r',[book,chapter,id])).rows[0].r,p);
let passed=0;async function test(id,fn){await fn();passed++;console.log(JSON.stringify({id,status:'PASS'}));}
try{
 await admin.query('insert into auth.users values($1),($2)',[a,b]);await admin.query('insert into auth.sessions values($1,$2,null),($3,$4,null)',[s,a,t,b]);await admin.query("insert into public.books(id,owner_id,title) values($1,$2,'Synthetic'),($3,$4,'Other')",[book,a,other,b]);await admin.query("insert into public.chapters(id,book_id,title,position) values($1,$2,'One',0),($3,$4,'Other',0)",[chapter,book,foreign,other]);await admin.query('insert into public.chapter_revisions(book_id,chapter_id,revision,document) select book_id,id,current_revision,accepted_document from public.chapters where id=any($1::uuid[])',[[chapter,foreign]]);
 const op=randomUUID();
 await test('save-reopen-preservation',async()=>{assert.equal((await save(op)).outcome,'confirmed');assert.deepEqual((await read()).document,doc);});
 await test('atomic-revision-receipt',async()=>{assert.equal((await receipt(op)).revision,2);assert.deepEqual((await admin.query('select document from public.chapter_revisions where chapter_id=$1 and revision=2',[chapter])).rows[0].document,doc);});
 await test('duplicate-identical',async()=>{assert.equal((await save(op)).revision,2);assert.equal((await read()).revision,2);});
 await test('duplicate-changed',()=>assert.rejects(save(op,1,{type:'doc',content:[{type:'paragraph'}]})));
 await test('stale-CAS',async()=>{assert.equal((await save(randomUUID())).outcome,'conflicted');});
 await test('concurrent-CAS',async()=>{const rs=await Promise.all([save(randomUUID(),2),save(randomUUID(),2)]);assert.deepEqual(rs.map(x=>x.outcome).sort(),['confirmed','conflicted']);});
 await test('fault-rollback',async()=>{for(const fault of ['manuscript_journal','manuscript_document','manuscript_revision','manuscript_receipt']){const id=randomUUID();await assert.rejects(save(id,3,doc,chapter,book,principal(),fault));assert.equal(await receipt(id),null);assert.equal((await read()).revision,3);}});
 await test('lost-ACK-reconciliation',async()=>{const id=randomUUID();await save(id,3);assert.equal((await receipt(id)).revision,4);assert.equal((await save(id,3)).revision,4);});
 await test('foreign-read',()=>assert.rejects(read(principal(b,t))));
 await test('foreign-receipt',()=>assert.rejects(receipt(op,principal(b,t))));
 await test('cross-book-chapter',()=>assert.rejects(save(randomUUID(),1,doc,foreign,book)));
 await test('forged-principal-session',()=>assert.rejects(save(randomUUID(),4,doc,chapter,book,principal(b,s))));
 await test('direct-author-DML',()=>assert.rejects(tx(c=>c.query('update public.chapters set current_revision=99 where id=$1',[chapter]),principal(),'workspace_author_test')));
 await test('gateway-history-DML',()=>assert.rejects(tx(c=>c.query('delete from public.chapter_revisions where chapter_id=$1',[chapter]))));
 await test('invalid-document',()=>assert.rejects(save(randomUUID(),4,{type:'doc',content:[{type:'script'}]})));
 await test('append-only-history',async()=>{assert.equal((await admin.query('select count(*)::int n from public.chapter_revisions where chapter_id=$1',[chapter])).rows[0].n,4);assert.deepEqual((await read()).document,doc);});
 writeFileSync(restartFile,JSON.stringify({author:a,session:s,book,chapter,operation:op,document:doc}));
 console.log(JSON.stringify({manuscript_cases:passed,status:'PASS',restart:'separate --verify-restart execution required',ack_loss:'discarded response simulation'}));
}finally{await admin.end();}
