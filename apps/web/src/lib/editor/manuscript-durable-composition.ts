import {createManuscriptComposition,type ManuscriptTransport} from './manuscript-composition';
import {type AsyncDraftStore,type LocalScope,localKey,DraftStorageError} from './manuscript-indexeddb';
import {saveOperation} from '../../../../api/src/modules/workspace/manuscript-contract';
import type {WorkspaceSnapshot} from '../workspace/book-workspace-session';

export type LocalPhase='not-stored'|'storing'|'stored'|'unavailable'|'blocked'|'quota'|'aborted'|'corrupt'|'incompatible'|'conflict'|'recovery'|'unverified';
/** Test-only composition. The existing recovery map is memory; IndexedDB is a separate async port. */
export function createDurableManuscriptComposition(options:{readOwner:()=>Promise<string|null>;transport:ManuscriptTransport;store:AsyncDraftStore;clientId:string;nextOperationId:()=>string;now?:()=>number}){
 let epoch=0,disposed=false,active:LocalScope|null=null,sequence=0,write=0,blocked=false;
 let lastWorkspace:WorkspaceSnapshot|null=null;let queue=Promise.resolve();const memory=new Map<string,unknown>(),listeners=new Set<()=>void>();
 let state:Readonly<{phase:LocalPhase;message:string}>=Object.freeze({phase:'unverified' as LocalPhase,message:'Identity unavailable. Local recovery is concealed.'});
 function publish(phase:LocalPhase,message:string){if(disposed)return;state=Object.freeze({phase,message});listeners.forEach(f=>f());}
 async function current(e:number,s:LocalScope){if(disposed||epoch!==e||!active||localKey(active)!==localKey(s))return false;let owner:string|null;try{owner=await options.readOwner();}catch{owner=null;}if(disposed||epoch!==e)return false;if(owner!==s.author){pause();return false;}return true;}
 function failure(e:unknown){const kind=e instanceof DraftStorageError?e.kind:'unavailable';blocked=true;publish(kind,kind==='conflict'?'Another tab changed this recovery copy. Your writing remains in memory; choose the copy explicitly.':'Unable to store a recovery copy. Your current writing remains in memory.');}
 function schedule(raw:unknown){
  if(!active||blocked||disposed)return;const s=active,e=epoch,n=++write;
  // Clone at dispatch, before any asynchronous work or later editor mutation.
  const d=structuredClone(raw) as {text:string;base:number;pending?:{id:string;text:string;base:number}};
  publish('storing','Storing a recovery copy on this device...');
  queue=queue.then(async()=>{
   if(!await current(e,s)||blocked)return;
   try{
    const pending=d.pending?saveOperation({operationId:d.pending.id,bookId:s.book,chapterId:s.chapter,expectedRevision:d.pending.base,document:JSON.parse(d.pending.text)}):null;
    const result=await options.store.write(s,sequence,{schema:1,scope:s,timestamp:(options.now??Date.now)(),base:d.base,document:JSON.parse(d.text),pending});
    if(!await current(e,s))return;sequence=result.sequence;
    if(n===write)publish('stored','Saved on this device, not synced.');
   }catch(error){if(await current(e,s))failure(error);}
  });
 }
 const transport:ManuscriptTransport={...options.transport,async read(s){
  const result=await options.transport.read(s) as {status:string;value?:{revision:number;document:unknown}};
  if(active&&s.author===active.author&&s.bookId===active.book&&s.chapterId===active.chapter){
   const k=localKey(active),entry=memory.get(k) as {base:number;text:string;pending?:{base:number;text:string}}|undefined;
   if(entry&&result.status==='ready'&&result.value){
    const accepted=result.value;
    const ackLost=entry.pending&&accepted.revision===entry.pending.base+1&&JSON.stringify(accepted.document)===entry.pending.text;
    if(entry.base!==accepted.revision&&!ackLost){memory.delete(k);blocked=true;publish('conflict','A recovery copy has a different accepted revision. It was retained without replacing accepted text.');}
    else if(!entry.pending&&entry.text===JSON.stringify(accepted.document))memory.delete(k);
   }
  }
  return result;
 }};
 const controller=createManuscriptComposition({...options,transport,storage:{get:k=>memory.get(k),set(k,v){memory.set(k,v);schedule(v);}}});
 // Existing memory key ordering is [author,book,chapter,client], identical to localKey.
 function pause(){epoch++;active=null;blocked=true;controller.pause();publish('unverified','Identity unavailable. Local recovery is concealed.');}
 async function bind(workspace:WorkspaceSnapshot){
  lastWorkspace=workspace;const e=++epoch;active=null;blocked=true;controller.pause();publish('unverified','Checking identity and accepted revision before local recovery...');
  let owner:string|null;try{owner=await options.readOwner();}catch{owner=null;}
  if(disposed||e!==epoch)return;
  if(!owner||!workspace.document||!workspace.selectedChapterId){pause();return;}
  const s=Object.freeze({author:owner,book:workspace.document.bookId,chapter:workspace.selectedChapterId,client:options.clientId});
  active=s;sequence=0;write=0;blocked=false;memory.clear();
  try{
   const candidate=await options.store.read(s);if(!await current(e,s))return;
   if(candidate){sequence=candidate.sequence;if(!candidate.discarded)memory.set(localKey(s),{scope:{author:s.author,book:s.book,chapter:s.chapter},text:JSON.stringify(candidate.document),base:candidate.base,phase:'recoverable',...(candidate.pending?{pending:{id:candidate.pending.operationId,text:JSON.stringify(candidate.pending.document),base:candidate.pending.expectedRevision}}:{})});}
  }catch(error){if(!await current(e,s))return;failure(error);}
  if(!await current(e,s))return;await controller.bind(workspace);if(!await current(e,s))return;
  if(!blocked)publish(controller.snapshot().canRecover?'recovery':'not-stored',controller.snapshot().canRecover?'Recovery copy available. Choose explicitly; accepted text is unchanged.':'Local changes not yet stored.');
 }
 async function discard(){
  if(!active||disposed)return;const s=active,e=epoch,n=write;
  await queue;if(!await current(e,s))return;
  if(controller.snapshot().operationId||n!==write){publish('conflict','An unresolved save or newer edit prevents discarding this recovery copy.');return;}
  try{await options.store.discard(s,sequence);if(!await current(e,s))return;sequence++;memory.delete(localKey(s));blocked=false;if(controller.snapshot().canRecover&&lastWorkspace)await controller.bind(lastWorkspace);if(!await current(e,s))return;publish('not-stored','Local recovery copy discarded. Current in-memory writing is unchanged.');}catch(error){if(await current(e,s))failure(error);}
 }
 return {controller,bind,pause,discard,flush:()=>queue,snapshot:()=>state,subscribe(fn:()=>void){listeners.add(fn);return()=>{listeners.delete(fn);};},
  dispose(){if(disposed)return;epoch++;active=null;controller.dispose();options.store.close();listeners.clear();memory.clear();disposed=true;}};
}
export type DurableManuscriptComposition=ReturnType<typeof createDurableManuscriptComposition>;
