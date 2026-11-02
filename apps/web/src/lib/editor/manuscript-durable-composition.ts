import {createManuscriptComposition,type ManuscriptTransport} from './manuscript-composition';
import {type AsyncDraftStore,type LocalScope,localKey,DraftStorageError} from './manuscript-indexeddb';
import {saveOperation,type SaveOperation} from '../../../../api/src/modules/workspace/manuscript-contract';
import type {WorkspaceSnapshot} from '../workspace/book-workspace-session';

export type LocalPhase='not-stored'|'storing'|'stored'|'unavailable'|'blocked'|'quota'|'aborted'|'corrupt'|'incompatible'|'conflict'|'recovery'|'unverified'|'unknown';
/** Test-only composition. The existing recovery map is memory; IndexedDB is a separate async port. */
export function createDurableManuscriptComposition(options:{readOwner:()=>Promise<string|null>;transport:ManuscriptTransport;store:AsyncDraftStore;clientId:string;nextOperationId:()=>string;now?:()=>number}){
 let epoch=0,disposed=false,active:LocalScope|null=null,sequence=0,write=0,blocked=false,busy=false;
 const undispatched=new Map<string,SaveOperation>(),detached=new Map<string,SaveOperation>();
 let lastWorkspace:WorkspaceSnapshot|null=null;let queue=Promise.resolve();const memory=new Map<string,unknown>(),hidden=new Set<string>(),mismatched=new Set<string>(),known=new Map<string,number>(),dirty=new Set<string>(),listeners=new Set<()=>void>();
 let state:Readonly<{phase:LocalPhase;message:string;canRetry:boolean;canCheckPending:boolean;busy:boolean}>=Object.freeze({phase:'unverified',message:'Identity unavailable. Local recovery is concealed.',canRetry:false,canCheckPending:false,busy:false});
 function publish(phase:LocalPhase,message:string){if(disposed)return;const k=active?localKey(active):null,op=k?undispatched.get(k):null;state=Object.freeze({phase,message,busy,canRetry:!busy&&!!op&&(controller.snapshot().operationId===op.operationId||detached.get(k!)?.operationId===op.operationId),canCheckPending:!busy&&!!k&&detached.has(k)});listeners.forEach(f=>f());}
 async function current(e:number,s:LocalScope){if(disposed||epoch!==e||!active||localKey(active)!==localKey(s))return false;let owner:string|null;try{owner=await options.readOwner();}catch{owner=null;}if(disposed||epoch!==e)return false;if(owner!==s.author){pause();return false;}return true;}
 function failure(e:unknown){const kind=e instanceof DraftStorageError?e.kind:'unavailable';blocked=true;publish(kind,kind==='conflict'?'Another tab changed this recovery copy. Your writing remains in memory; choose the copy explicitly.':'Unable to store a recovery copy. Your current writing remains in memory.');}
 function schedule(raw:unknown){
  if(!active||disposed)return;const s=active,e=epoch,n=++write;dirty.add(localKey(active));if(blocked)return;
  // Clone at dispatch, before any asynchronous work or later editor mutation.
  const d=structuredClone(raw) as {text:string;base:number;pending?:{id:string;text:string;base:number}};
  publish('storing','Storing a recovery copy on this device...');
  queue=queue.then(async()=>{
   if(!await current(e,s)||blocked)return;
   try{
    const pending=d.pending?saveOperation({operationId:d.pending.id,bookId:s.book,chapterId:s.chapter,expectedRevision:d.pending.base,document:JSON.parse(d.pending.text)}):null;
    const result=await options.store.write(s,sequence,{schema:1,scope:s,timestamp:(options.now??Date.now)(),base:d.base,document:JSON.parse(d.text),pending});
    known.set(localKey(s),result.sequence);if(JSON.stringify(memory.get(localKey(s)))===JSON.stringify(d))dirty.delete(localKey(s));if(!await current(e,s))return;sequence=result.sequence;
    if(n===write)publish('stored','Saved on this device, not synced.');
   }catch(error){if(await current(e,s))failure(error);}
  });
 }
 const transport:ManuscriptTransport={...options.transport,async save(s,operation){
  const e=epoch,scope=active;
  try{if(!scope||!await current(e,scope))throw Error('Identity unavailable');await queue;if(!await current(e,scope)||blocked)throw Error('Pending operation not stored');const durable=await options.store.read(scope);if(!await current(e,scope)||!durable?.pending||JSON.stringify(durable.pending)!==JSON.stringify(operation))throw Error('Pending operation not stored');}
  catch(error){if(scope){undispatched.set(localKey(scope),operation);if(await current(e,scope))publish(state.phase,'No test save was dispatched. Restore storage, then explicitly send the original operation.');}throw error;}
  undispatched.delete(localKey(scope!));
  // Once invoked, even a rejected Promise is uncertain. Never restore no-dispatch proof.
  return options.transport.save(s,operation);
 },async read(s){
  const readEpoch=epoch,readScope=active;
  const result=await options.transport.read(s) as {status:string;value?:{revision:number;document:unknown}};
  if(readScope&&await current(readEpoch,readScope)&&active&&s.author===active.author&&s.bookId===active.book&&s.chapterId===active.chapter){
   const k=localKey(active),entry=memory.get(k) as {base:number;text:string;pending?:{id:string;base:number;text:string}}|undefined;
   if(entry&&result.status==='ready'&&result.value){
    const accepted=result.value;
    const ackLost=entry.pending&&accepted.revision===entry.pending.base+1&&JSON.stringify(accepted.document)===entry.pending.text;
    if(entry.base!==accepted.revision&&!ackLost){if(entry.pending)detached.set(k,saveOperation({operationId:entry.pending.id,bookId:s.bookId,chapterId:s.chapterId,expectedRevision:entry.pending.base,document:JSON.parse(entry.pending.text)}));hidden.add(k);mismatched.add(k);blocked=true;publish('conflict','A recovery copy has a different accepted revision. It was retained without replacing accepted text.');}
    else if(!entry.pending&&entry.text===JSON.stringify(accepted.document))hidden.add(k);
   }
  }
  return result;
 }};
 const controller=createManuscriptComposition({...options,transport,storage:{get:k=>hidden.has(k)?undefined:memory.get(k),set(k,v){hidden.delete(k);memory.set(k,v);schedule(v);}}});
 // Existing memory key ordering is [author,book,chapter,client], identical to localKey.
 function pause(){epoch++;active=null;blocked=true;busy=false;controller.pause();publish('unverified','Identity unavailable. Local recovery is concealed.');}
 async function bind(workspace:WorkspaceSnapshot){
  lastWorkspace=workspace;const e=++epoch;active=null;blocked=true;busy=false;controller.pause();publish('unverified','Checking identity and accepted revision before local recovery...');
  let owner:string|null;try{owner=await options.readOwner();}catch{owner=null;}
  if(disposed||e!==epoch)return;
  if(!owner||!workspace.document||!workspace.selectedChapterId){pause();return;}
  const s=Object.freeze({author:owner,book:workspace.document.bookId,chapter:workspace.selectedChapterId,client:options.clientId});
  active=s;sequence=0;write=0;blocked=false;hidden.delete(localKey(s));mismatched.delete(localKey(s));detached.delete(localKey(s));
  try{
   const candidate=await options.store.read(s);if(!await current(e,s))return;
   sequence=candidate?.sequence??0;const k=localKey(s);if(!known.has(k))known.set(k,sequence);if(memory.has(k)&&dirty.has(k)){if(known.has(k)&&known.get(k)!==sequence){failure(new DraftStorageError('conflict'));}else{blocked=true;publish('not-stored','A newer in-memory recovery copy is available. It has not been stored.');}}else{known.set(k,sequence);memory.delete(k);if(candidate&&!candidate.discarded)memory.set(localKey(s),{scope:{author:s.author,book:s.book,chapter:s.chapter},text:JSON.stringify(candidate.document),base:candidate.base,phase:'recoverable',...(candidate.pending?{pending:{id:candidate.pending.operationId,text:JSON.stringify(candidate.pending.document),base:candidate.pending.expectedRevision}}:{})});}
  }catch(error){if(!await current(e,s))return;failure(error);}
  if(!await current(e,s))return;await controller.bind(workspace);if(!await current(e,s))return;if(mismatched.has(localKey(s)))controller.editorSession.snapshot().editor?.setEditable(false,false);
  if(!blocked)publish(controller.snapshot().canRecover?'recovery':'not-stored',controller.snapshot().canRecover?'Recovery copy available. Choose explicitly; accepted text is unchanged.':'Local changes not yet stored.');
 }
 async function discard(){
  if(!active||disposed||busy)return;const s=active,e=epoch,n=write;
  const operation=queue.then(async()=>{
   if(!await current(e,s))return;
   if(controller.snapshot().operationId||detached.has(localKey(s))||n!==write){publish('conflict','An unresolved save or newer edit prevents discarding this recovery copy.');return;}
   try{
    const expected=sequence;await options.store.discard(s,expected);if(!await current(e,s))return;
    sequence=expected+1;known.set(localKey(s),sequence);blocked=false;
    if(n!==write){publish('not-stored','Newer writing remains in memory while its recovery copy is stored.');return;}
    memory.delete(localKey(s));dirty.delete(localKey(s));
    if((controller.snapshot().canRecover||mismatched.has(localKey(s)))&&lastWorkspace){hidden.delete(localKey(s));mismatched.delete(localKey(s));await controller.bind(lastWorkspace);}
    if(await current(e,s))publish('not-stored','Local recovery copy discarded. Current in-memory writing is unchanged.');
   }catch(error){if(await current(e,s))failure(error);}
  });
  queue=operation;await operation;
 }
 async function recover(){
  if(!active||disposed||busy||!controller.snapshot().canRecover)return;const s=active,e=epoch;
  const operation=queue.then(async()=>{
   if(!await current(e,s)||!controller.snapshot().canRecover||mismatched.has(localKey(s)))return;
   try{
    const observed=await options.store.read(s);if(!await current(e,s))return;
    if((observed?.sequence??0)!==(known.get(localKey(s))??0))throw new DraftStorageError('conflict');
    sequence=observed?.sequence??0;blocked=false;await controller.recover();
   }catch(error){
    if(!await current(e,s))return;failure(error);
    // Device failure does not revoke access to a verified memory copy. It must
    // remain explicitly recoverable without authorizing any persistence.
    const changedCopy=error instanceof DraftStorageError&&error.kind==='conflict';
    if(memory.has(localKey(s))&&(!changedCopy||dirty.has(localKey(s)))&&!mismatched.has(localKey(s))&&controller.snapshot().canRecover){
     await controller.recover();if(await current(e,s))failure(error);
    }
   }
  });
  queue=operation;await operation;
 }
 function receiptMatches(raw:unknown,op:SaveOperation){
  const result=raw as {status:string;receipt?:{operationId:string;bookId:string;chapterId:string;outcome:string;revision:number}};
  const r=result?.receipt;
  return !!r&&['confirmed','conflicted','rejected'].includes(result.status)&&r.outcome===result.status&&r.operationId===op.operationId&&r.bookId===op.bookId&&r.chapterId===op.chapterId&&Number.isSafeInteger(r.revision)&&r.revision>=1&&(r.outcome!=='confirmed'||r.revision===op.expectedRevision+1);
 }
 /** Receipt lookup stays read-only remotely, including when stale prose cannot be restored. */
 async function reconcile(){
  if(!active||disposed||busy)return;const s=active,e=epoch,k=localKey(s),op=detached.get(k);
  if(!op){await controller.reconcile();return;}
  busy=true;publish('unknown','Checking the original operation without restoring its old document...');
  try{
   await flush();if(!await current(e,s))return;
   const result=await options.transport.lookup({author:s.author,bookId:s.book,chapterId:s.chapter},op);
   if(!await current(e,s))return;
   if(!receiptMatches(result,op)){publish('unknown','Save status unknown. The original operation and recovery copy remain retained.');return;}
   const retirement=queue.then(async()=>{
    if(!await current(e,s))return;
    const observed=await options.store.read(s);if(!await current(e,s))return;
    let next=observed?.sequence??0;
    if(observed?.pending?.operationId===op.operationId){
     if(JSON.stringify(observed.pending)!==JSON.stringify(op))throw new DraftStorageError('conflict');
     const written=await options.store.write(s,observed.sequence,{schema:1,scope:s,base:observed.base,document:observed.document,pending:null,timestamp:(options.now??Date.now)()});next=written.sequence;
    }
    if(!await current(e,s))return;sequence=next;known.set(k,next);
    const entry=memory.get(k) as {pending?:{id:string}}|undefined;
    if(entry?.pending?.id===op.operationId){const retained=structuredClone(entry);delete retained.pending;memory.set(k,retained);}
    detached.delete(k);undispatched.delete(k);
    publish('conflict','Original operation resolved. Accepted text is unchanged; the older recovery copy still needs an explicit choice.');
   });
   queue=retirement.catch(()=>{});await retirement;
  }catch(error){if(await current(e,s)){if(error instanceof DraftStorageError)failure(error);else publish('unknown','Save status unknown. The original operation and recovery copy remain retained.');}}
  finally{if(!disposed&&e===epoch){busy=false;publish(state.phase,state.message);}}
 }
 /** Only runtime proof that the remote call NEVER began permits this explicit send. */
 async function retryUndispatched(){
  if(!active||disposed||busy)return;const s=active,e=epoch,k=localKey(s),op=undispatched.get(k);if(!op)return;
  busy=true;publish('storing','Storing the original undispatched operation before an explicit send...');
  let invoked=false;
  try{
   const preparation=queue.then(async()=>{
    if(!await current(e,s)||undispatched.get(k)!==op)return;
    const observed=await options.store.read(s);if(!await current(e,s))return;
    if((observed?.sequence??0)!==(known.get(k)??0))throw new DraftStorageError('conflict');
    const entry=memory.get(k) as {pending?:{id:string;base:number;text:string}}|undefined;
    if(!entry?.pending||JSON.stringify(saveOperation({operationId:entry.pending.id,bookId:s.book,chapterId:s.chapter,expectedRevision:entry.pending.base,document:JSON.parse(entry.pending.text)}))!==JSON.stringify(op))throw new DraftStorageError('conflict');
    sequence=observed?.sequence??0;blocked=false;schedule(entry);
   });
   queue=preparation.catch(()=>{});await preparation;await flush();if(!await current(e,s)||blocked||undispatched.get(k)!==op)return;
   const durable=await options.store.read(s);if(!await current(e,s))return;
   if(durable?.sequence!==sequence||JSON.stringify(durable.pending)!==JSON.stringify(op))throw new DraftStorageError('conflict');
   undispatched.delete(k);invoked=true;
   try{await options.transport.save({author:s.author,bookId:s.book,chapterId:s.chapter},op);}catch{/* Possible commit: only the original receipt can resolve it. */}
  }catch(error){if(await current(e,s))failure(error);}
  finally{if(!disposed&&e===epoch){busy=false;publish(state.phase,state.message);}}
  if(invoked&&await current(e,s))await reconcile();
 }
 async function flush(){let observed:Promise<void>;do{observed=queue;await observed;}while(observed!==queue);}
 return {controller,bind,pause,discard,recover,reconcile,retryUndispatched,flush,snapshot:()=>state,subscribe(fn:()=>void){listeners.add(fn);return()=>{listeners.delete(fn);};},
  dispose(){if(disposed)return;epoch++;active=null;controller.dispose();options.store.close();listeners.clear();memory.clear();disposed=true;}};
}
export type DurableManuscriptComposition=ReturnType<typeof createDurableManuscriptComposition>;
