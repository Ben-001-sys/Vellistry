import {createManuscriptComposition,type ManuscriptTransport} from './manuscript-composition';
import {type AsyncDraftStore,type LocalScope,localKey,DraftStorageError} from './manuscript-indexeddb';
import {saveOperation} from '../../../../api/src/modules/workspace/manuscript-contract';
import type {WorkspaceSnapshot} from '../workspace/book-workspace-session';

export type LocalPhase='not-stored'|'storing'|'stored'|'unavailable'|'blocked'|'quota'|'aborted'|'corrupt'|'incompatible'|'conflict'|'recovery'|'unverified';
/** Test-only composition. The existing recovery map is memory; IndexedDB is a separate async port. */
export function createDurableManuscriptComposition(options:{readOwner:()=>Promise<string|null>;transport:ManuscriptTransport;store:AsyncDraftStore;clientId:string;nextOperationId:()=>string;now?:()=>number}){
 let epoch=0,disposed=false,active:LocalScope|null=null,sequence=0,write=0,blocked=false;
 let lastWorkspace:WorkspaceSnapshot|null=null;let queue=Promise.resolve();const memory=new Map<string,unknown>(),hidden=new Set<string>(),mismatched=new Set<string>(),known=new Map<string,number>(),dirty=new Set<string>(),listeners=new Set<()=>void>();
 let state:Readonly<{phase:LocalPhase;message:string}>=Object.freeze({phase:'unverified' as LocalPhase,message:'Identity unavailable. Local recovery is concealed.'});
 function publish(phase:LocalPhase,message:string){if(disposed)return;state=Object.freeze({phase,message});listeners.forEach(f=>f());}
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
 const transport:ManuscriptTransport={...options.transport,async save(s,operation){const e=epoch,scope=active;if(!scope||!await current(e,scope))throw Error('Identity unavailable');await queue;if(!await current(e,scope)||blocked)throw Error('Pending operation not stored');const durable=await options.store.read(scope);if(!await current(e,scope)||!durable?.pending||JSON.stringify(durable.pending)!==JSON.stringify(operation))throw Error('Pending operation not stored');return options.transport.save(s,operation);},async read(s){
  const readEpoch=epoch,readScope=active;
  const result=await options.transport.read(s) as {status:string;value?:{revision:number;document:unknown}};
  if(readScope&&await current(readEpoch,readScope)&&active&&s.author===active.author&&s.bookId===active.book&&s.chapterId===active.chapter){
   const k=localKey(active),entry=memory.get(k) as {base:number;text:string;pending?:{base:number;text:string}}|undefined;
   if(entry&&result.status==='ready'&&result.value){
    const accepted=result.value;
    const ackLost=entry.pending&&accepted.revision===entry.pending.base+1&&JSON.stringify(accepted.document)===entry.pending.text;
    if(entry.base!==accepted.revision&&!ackLost){hidden.add(k);mismatched.add(k);blocked=true;publish('conflict','A recovery copy has a different accepted revision. It was retained without replacing accepted text.');}
    else if(!entry.pending&&entry.text===JSON.stringify(accepted.document))hidden.add(k);
   }
  }
  return result;
 }};
 const controller=createManuscriptComposition({...options,transport,storage:{get:k=>hidden.has(k)?undefined:memory.get(k),set(k,v){hidden.delete(k);memory.set(k,v);schedule(v);}}});
 // Existing memory key ordering is [author,book,chapter,client], identical to localKey.
 function pause(){epoch++;active=null;blocked=true;controller.pause();publish('unverified','Identity unavailable. Local recovery is concealed.');}
 async function bind(workspace:WorkspaceSnapshot){
  lastWorkspace=workspace;const e=++epoch;active=null;blocked=true;controller.pause();publish('unverified','Checking identity and accepted revision before local recovery...');
  let owner:string|null;try{owner=await options.readOwner();}catch{owner=null;}
  if(disposed||e!==epoch)return;
  if(!owner||!workspace.document||!workspace.selectedChapterId){pause();return;}
  const s=Object.freeze({author:owner,book:workspace.document.bookId,chapter:workspace.selectedChapterId,client:options.clientId});
  active=s;sequence=0;write=0;blocked=false;hidden.delete(localKey(s));mismatched.delete(localKey(s));
  try{
   const candidate=await options.store.read(s);if(!await current(e,s))return;
   sequence=candidate?.sequence??0;const k=localKey(s);if(!known.has(k))known.set(k,sequence);if(memory.has(k)&&dirty.has(k)){if(known.has(k)&&known.get(k)!==sequence){failure(new DraftStorageError('conflict'));}else{blocked=true;publish('not-stored','A newer in-memory recovery copy is available. It has not been stored.');}}else{known.set(k,sequence);memory.delete(k);if(candidate&&!candidate.discarded)memory.set(localKey(s),{scope:{author:s.author,book:s.book,chapter:s.chapter},text:JSON.stringify(candidate.document),base:candidate.base,phase:'recoverable',...(candidate.pending?{pending:{id:candidate.pending.operationId,text:JSON.stringify(candidate.pending.document),base:candidate.pending.expectedRevision}}:{})});}
  }catch(error){if(!await current(e,s))return;failure(error);}
  if(!await current(e,s))return;await controller.bind(workspace);if(!await current(e,s))return;if(mismatched.has(localKey(s)))controller.editorSession.snapshot().editor?.setEditable(false,false);
  if(!blocked)publish(controller.snapshot().canRecover?'recovery':'not-stored',controller.snapshot().canRecover?'Recovery copy available. Choose explicitly; accepted text is unchanged.':'Local changes not yet stored.');
 }
 async function discard(){
  if(!active||disposed)return;const s=active,e=epoch,n=write;
  const operation=queue.then(async()=>{
   if(!await current(e,s))return;
   if(controller.snapshot().operationId||n!==write){publish('conflict','An unresolved save or newer edit prevents discarding this recovery copy.');return;}
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
  if(!active||disposed||!controller.snapshot().canRecover)return;const s=active,e=epoch;
  const operation=queue.then(async()=>{
   if(!await current(e,s)||!controller.snapshot().canRecover||mismatched.has(localKey(s)))return;
   try{
    const observed=await options.store.read(s);if(!await current(e,s))return;
    if((observed?.sequence??0)!==(known.get(localKey(s))??0))throw new DraftStorageError('conflict');
    sequence=observed?.sequence??0;blocked=false;await controller.recover();
   }catch(error){if(await current(e,s))failure(error);}
  });
  queue=operation;await operation;
 }
 async function flush(){let observed:Promise<void>;do{observed=queue;await observed;}while(observed!==queue);}
 return {controller,bind,pause,discard,recover,flush,snapshot:()=>state,subscribe(fn:()=>void){listeners.add(fn);return()=>{listeners.delete(fn);};},
  dispose(){if(disposed)return;epoch++;active=null;controller.dispose();options.store.close();listeners.clear();memory.clear();disposed=true;}};
}
export type DurableManuscriptComposition=ReturnType<typeof createDurableManuscriptComposition>;
