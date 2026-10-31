/** Owned loopback HTTP + unchanged disposable PostgreSQL. No production route. */
import assert from 'node:assert/strict';
import http from 'node:http';
import {randomUUID} from 'node:crypto';
import {createRequire} from 'node:module';
import path from 'node:path';
import {connection,context} from '../../workspace/persistence/workspace-pg-adapter';
import {ManuscriptService} from '../../../apps/api/src/modules/workspace/manuscript.service';
import {saveOperation} from '../../../apps/api/src/modules/workspace/manuscript-contract';
import {createManuscriptComposition} from '../../../apps/web/src/lib/editor/manuscript-composition';
const {JSDOM}=createRequire(new URL('../../../apps/web/package.json',import.meta.url))('jsdom');
const dom=new JSDOM('<!doctype html><html><body></body></html>',{pretendToBeVisual:true,url:'http://127.0.0.1/'});
for(const name of ['window','document','navigator','Node','HTMLElement','Element','DocumentFragment','MutationObserver','DOMParser','getComputedStyle'])Object.defineProperty(globalThis,name,{value:name==='getComputedStyle'?dom.window[name].bind(dom.window):dom.window[name],configurable:true});
globalThis.requestAnimationFrame=dom.window.requestAnimationFrame.bind(dom.window);globalThis.cancelAnimationFrame=dom.window.cancelAnimationFrame.bind(dom.window);globalThis.innerHeight=900;globalThis.innerWidth=1400;
dom.window.Range.prototype.getClientRects=()=>[];dom.window.Range.prototype.getBoundingClientRect=()=>({left:0,right:0,top:0,bottom:0,width:0,height:0});
const [a,b,sa,sb,bookA,bookB,chA,chOther,chB]=Array.from({length:9},()=>randomUUID());
const capA=randomUUID(),capB=randomUUID();const capabilities=new Map([[capA,{authorId:a,sessionId:sa}],[capB,{authorId:b,sessionId:sb}]]);
const doc=text=>({type:'doc',content:[{type:'paragraph',content:[{type:'text',text}]}]});
const admin=await connection('postgres');const held=[];const events=[];const connections=new Set();const controllers=[];
let listeningPort=0,mode='normal',lastRequest=null,operations=[];
const proof=identity=>({...identity,tokenExpiresAt:Date.now()+60000,verifiedAt:Date.now()});
async function transaction(p,fn,fault=''){const c=await connection();try{await c.query('begin');await context(c,p);if(fault)await c.query("select set_config('vellistry.test_fault',$1,true)",[fault]);const result=await fn(c);await c.query('commit');return result;}catch(e){await c.query('rollback');throw e;}finally{await c.end();}}
function port(fault=''){return {
 save:(p,op)=>transaction(p,async c=>(await c.query('select vellistry_manuscript.save($1,$2,$3,$4,$5::jsonb) r',[op.bookId,op.chapterId,op.operationId,op.expectedRevision,JSON.stringify(op.document)])).rows[0].r,fault),
 read:(p,book,chapter,revision)=>transaction(p,async c=>(await c.query('select vellistry_manuscript.read($1,$2,$3) r',[book,chapter,revision??null])).rows[0].r),
 lookup:(p,book,chapter,id)=>transaction(p,async c=>(await c.query('select vellistry_manuscript.receipt($1,$2,$3) r',[book,chapter,id])).rows[0].r),
};}
async function body(req){let bytes=0,text='';for await(const chunk of req){bytes+=chunk.length;if(bytes>524288)throw Error('Oversized test request');text+=chunk.toString('utf8');}return JSON.parse(text);}
const server=http.createServer(async(req,res)=>{
 try{
  if(req.socket.remoteAddress!=='127.0.0.1')throw Error('Loopback required');const identity=capabilities.get(req.headers['x-synthetic-capability']);if(!identity){res.writeHead(401);res.end('{}');return;}
  const principal=proof(identity),service=new ManuscriptService({verify:async()=>proof(identity)},port(req.url==='/save/fault'?'manuscript_document':''));let result;
  if(req.method==='POST'&&req.url.startsWith('/save/')){
   const op=saveOperation(await body(req));operations.push(op.operationId);result=await service.save(op);
   if(req.url==='/save/fault'){events.push({id:op.operationId,outcome:'rollback-observed'});res.destroy();return;}
   if(result.status==='confirmed'){events.push({id:op.operationId,outcome:'commit-observed'});}
   if(req.url==='/save/drop'&&result.status==='confirmed'){res.destroy();return;}
   if(req.url==='/save/delay')await new Promise(resolve=>held.push(resolve));
  }else if(req.method==='POST'&&req.url==='/lookup'){
   const op=saveOperation(await body(req));const receipt=await port().lookup(principal,op.bookId,op.chapterId,op.operationId);result=receipt?{status:receipt.outcome,receipt}:{status:'unknown'};
  }else if(req.method==='POST'&&req.url==='/read'){
   const target=await body(req);assert.deepEqual(Object.keys(target).sort(),['bookId','chapterId']);result=await service.read(target.bookId,target.chapterId);
  }else {res.writeHead(404);res.end('{}');return;}
  if(!res.destroyed){res.writeHead(200,{'content-type':'application/json','cache-control':'no-store'});res.end(JSON.stringify(result));}
 }catch{if(!res.destroyed){res.writeHead(400,{'content-type':'application/json'});res.end(JSON.stringify({status:'invalid'}));}}
});
server.on('connection',socket=>{connections.add(socket);socket.on('close',()=>connections.delete(socket));});
function request(route,payload,cap=capA){assert.ok(listeningPort>0);return new Promise((resolve,reject)=>{const data=JSON.stringify(payload);const req=http.request({hostname:'127.0.0.1',port:listeningPort,method:'POST',path:route,agent:false,headers:{'content-type':'application/json','content-length':Buffer.byteLength(data),'x-synthetic-capability':cap}},res=>{let data='';res.on('data',x=>data+=x);res.on('aborted',()=>reject(Error('Actual HTTP response aborted')));res.on('end',()=>{try{resolve(JSON.parse(data));}catch(e){reject(e);}});});lastRequest=req;req.setTimeout(10000,()=>req.destroy(Error('Owned HTTP timeout')));req.on('error',reject);req.end(data);});}
function snapshot(book,chapter,chapters=[chapter]){return {phase:'ready',document:{bookId:book,bookTitle:'Synthetic',version:0,notes:'',chapters:chapters.map(id=>({id,bookId:book,title:'Synthetic chapter',notes:''}))},selectedChapterId:chapter,pending:false,uncertain:false,conflict:false,createTitle:'',renameTitle:'',bookNoteDraft:'',chapterNoteDraft:'',message:''};}
async function controller(client){let owner=a;const memory=new Map();const transport={read:s=>request('/read',{bookId:s.bookId,chapterId:s.chapterId},owner===a?capA:capB),save:(s,op)=>request('/save/'+mode,op,owner===a?capA:capB),lookup:(s,op)=>request('/lookup',op,owner===a?capA:capB)};const c=createManuscriptComposition({readOwner:async()=>owner,transport,storage:{get:k=>memory.get(k),set:(k,v)=>memory.set(k,v)},clientId:client,nextOperationId:()=>randomUUID()});controllers.push(c);await c.bind(snapshot(bookA,chA,[chA,chOther]));return {c,editor:()=>c.editorSession.snapshot().editor,setOwner(v){c.pause();owner=v;}};}
async function committedSince(index){const deadline=Date.now()+5000;while(events.length<=index){if(Date.now()>deadline)throw Error('Commit fence timeout');await new Promise(r=>setTimeout(r,5));}assert.equal(events.at(-1).outcome,'commit-observed');}
let passed=0;async function test(id,fn){await fn();passed++;console.log(JSON.stringify({id,status:'PASS'}));}
try{
 await admin.query('insert into auth.users values($1),($2)',[a,b]);await admin.query('insert into auth.sessions values($1,$2,null),($3,$4,null)',[sa,a,sb,b]);await admin.query("insert into public.books(id,owner_id,title) values($1,$2,'HTTP A'),($3,$4,'HTTP B')",[bookA,a,bookB,b]);await admin.query("insert into public.chapters(id,book_id,title,position) values($1,$2,'One',0),($3,$2,'Two',1),($4,$5,'B',0)",[chA,bookA,chOther,chB,bookB]);await admin.query('insert into public.chapter_revisions(book_id,chapter_id,revision,document) select book_id,id,current_revision,accepted_document from public.chapters where id=any($1::uuid[])',[[chA,chOther,chB]]);
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));assert.equal(server.address().address,'127.0.0.1');listeningPort=server.address().port;
 await test('real-socket-loss-after-PG-commit-reconciles-original-ID-without-duplicate',async()=>{const {c,editor}=await controller('socket-loss');editor().commands.insertContent('  café 🦊  ');mode='drop';await c.save();assert.equal(c.snapshot().phase,'unknown');const id=c.snapshot().operationId;assert.ok(id);assert.equal((await admin.query('select current_revision from public.chapters where id=$1',[chA])).rows[0].current_revision,2);await c.reconcile();assert.equal(c.snapshot().phase,'confirmed');assert.equal(operations.filter(x=>x===id).length,1);assert.equal((await admin.query('select count(*)::int n from public.chapter_revisions where chapter_id=$1',[chA])).rows[0].n,2);});
 await test('real-before-commit-failure-remains-unknown-despite-server-observed-rollback',async()=>{const {c,editor}=await controller('rollback');editor().commands.insertContent('unsaved');mode='fault';await c.save();const id=c.snapshot().operationId;assert.equal(c.snapshot().phase,'unknown');await c.reconcile();assert.equal(c.snapshot().phase,'unknown');assert.equal(c.snapshot().operationId,id);assert.equal((await admin.query('select current_revision from public.chapters where id=$1',[chA])).rows[0].current_revision,2);});
 await test('competing-committed-edit-is-explicit-HTTP-conflict',async()=>{const {c,editor}=await controller('conflict');await port().save(proof(capabilities.get(capA)),saveOperation({operationId:randomUUID(),bookId:bookA,chapterId:chA,expectedRevision:2,document:doc('competing')}));editor().commands.insertContent('mine');mode='normal';await c.save();assert.equal(c.snapshot().phase,'conflicted');assert.equal((await admin.query('select current_revision from public.chapters where id=$1',[chA])).rows[0].current_revision,3);});
 await test('delayed-HTTP-response-cannot-resurrect-old-chapter',async()=>{const {c,editor}=await controller('chapter-delay');editor().commands.insertContent('delayed');mode='delay';const at=events.length,pending=c.save();await committedSince(at);await c.bind(snapshot(bookA,chOther,[chA,chOther]));held.splice(0).forEach(fn=>fn());await pending;assert.equal(c.snapshot().scope.chapterId,chOther);assert.equal(c.snapshot().revision,1);assert.equal(c.editorSession.snapshot().editor.getText(),'');});
 await test('actual-client-abort-after-commit-cannot-resurrect-old-author',async()=>{const {c,editor,setOwner}=await controller('author-abort');editor().commands.insertContent('authorA');mode='delay';const at=events.length,pending=c.save();await committedSince(at);lastRequest.destroy(Error('Actual test client abort'));setOwner(b);await c.bind(snapshot(bookB,chB));held.splice(0).forEach(fn=>fn());await pending;assert.equal(c.snapshot().scope.author,b);assert.equal(c.snapshot().scope.chapterId,chB);assert.equal(c.editorSession.snapshot().editor.getText(),'');});
 await test('HTTP-forged-owner-field-is-denied-before-dispatch',async()=>{const result=await request('/save/normal',{owner:a,operationId:randomUUID(),bookId:bookA,chapterId:chA,expectedRevision:5,document:doc('forged')});assert.equal(result.status,'invalid');});
 await test('HTTP-foreign-book-read-is-concealed',async()=>{const result=await request('/read',{bookId:bookA,chapterId:chA},capB);assert.notEqual(result.status,'ready');assert.equal(result.value,undefined);});
 console.log(JSON.stringify({http_cases:passed,actual_socket_interruption:true,actual_client_abort:true,backing_store:'disposable PostgreSQL17',listen_address:'127.0.0.1',claims:'No hosted/session or device durability acceptance.'}));
}finally{
 held.splice(0).forEach(fn=>fn());controllers.forEach(c=>c.dispose());for(const socket of connections)socket.destroy();if(server.listening)await new Promise(resolve=>server.close(resolve));await admin.end();await new Promise(resolve=>setImmediate(resolve));assert.equal(connections.size,0);dom.window.close();console.log(JSON.stringify({http_cleanup:'PASS',listening:server.listening,open_sockets:connections.size}));
}
