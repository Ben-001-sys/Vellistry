import {createManuscriptSession} from './manuscript-session';
import {createDraftRecovery,type DraftStorage} from './manuscript-recovery';
import type {WorkspaceSnapshot} from '../workspace/book-workspace-session';
import {document as validateDocument,identifier,saveOperation,type SaveOperation} from '../../../../api/src/modules/workspace/manuscript-contract';
export type CompositionScope=Readonly<{author:string;bookId:string;chapterId:string}>;
export interface ManuscriptTransport {
 read(scope:CompositionScope):Promise<unknown>;
 save(scope:CompositionScope,operation:SaveOperation):Promise<unknown>;
 lookup(scope:CompositionScope,operation:SaveOperation):Promise<unknown>;
}
export type CompositionPhase='idle'|'loading'|'editing'|'saving'|'confirmed'|'conflicted'|'rejected'|'unknown'|'unverified'|'recovery';
export type CompositionSnapshot=Readonly<{phase:CompositionPhase;scope:CompositionScope|null;revision:number|null;message:string;operationId:string|null;canSave:boolean;canReconcile:boolean;canRecover:boolean}>;
/** Unregistered composition. Transport/storage/verified owner are explicit test seams. */
export function createManuscriptComposition(options:{readOwner:()=>Promise<string|null>;transport:ManuscriptTransport;storage:DraftStorage;clientId:string;nextOperationId:()=>string}) {
 const editorSession=createManuscriptSession(options.readOwner);
 const drafts=createDraftRecovery(options.storage,validateDocument,options.clientId);
 const floors=new Map<string,number>();const listeners=new Set<()=>void>();
 let generation=0,disposed=false,installing=false,needsRecovery=false,inFlight=false;
 let scope:CompositionScope|null=null;let detach=()=>{};
 let model:CompositionSnapshot=Object.freeze({phase:'idle',scope:null,revision:null,message:'Choose a chapter in this test environment.',operationId:null,canSave:false,canReconcile:false,canRecover:false});
 const key=(s:CompositionScope)=>JSON.stringify([s.author,s.bookId,s.chapterId]);
 function emit(phase:CompositionPhase,message:string){
  if(disposed)return;const d=drafts.snapshot();model=Object.freeze({phase,scope,revision:d?.base??null,message,operationId:d?.pending?.id??null,
   canSave:!!scope&&!needsRecovery&&!inFlight&&!d?.pending&&d?.phase==='unsaved',canReconcile:!!scope&&!needsRecovery&&!inFlight&&!!d?.pending,canRecover:!!scope&&needsRecovery});listeners.forEach(fn=>fn());
 }
 function conceal(message='Your identity is unavailable. This test editor is paused.'){
  generation++;detach();detach=()=>{};scope=null;inFlight=false;needsRecovery=false;drafts.pause();editorSession.pause();emit('unverified',message);
 }
 async function still(epoch:number,s:CompositionScope){
  if(disposed||epoch!==generation||!scope||key(scope)!==key(s))return false;
  let owner:string|null;try{owner=await options.readOwner();}catch{owner=null;}
  if(disposed||epoch!==generation)return false;if(owner!==s.author){conceal();return false;}return true;
 }
 function publishDraft(){const d=drafts.snapshot();if(!d)return;
  if(inFlight){emit('saving','Saving captured text in the test environment. New typing remains a separate draft.');return;}
  const phase=d.phase==='unsaved'?'editing':d.phase==='unverified'?'unverified':d.phase==='recoverable'?'recovery':d.phase;
  const copy:Record<string,string>={editing:'Local changes. No confirmed test revision yet.',confirmed:`Confirmed revision ${d.base} in this test environment only.`,unknown:'Save outcome unknown. Check the original operation; do not save again.',conflicted:'Revision conflict. Your local writing is retained.',rejected:'Save rejected. Your local writing is retained.',unverified:'Identity unavailable. Writing is paused.',recovery:'A synthetic recovery candidate needs your explicit choice.',saving:'Saving in this test environment.'};emit(phase,copy[phase]);
 }
 function install(value:unknown){const editor=editorSession.snapshot().editor;if(!editor)throw Error('Editor unavailable');const checked=validateDocument(value);if(JSON.stringify(editor.getJSON())===JSON.stringify(checked))return;installing=true;try{editor.chain().setContent(checked,{emitUpdate:false,parseOptions:{preserveWhitespace:'full'}}).command(({tr})=>{tr.setMeta('addToHistory',false);return true;}).run();}finally{installing=false;}}
 async function bind(workspace:WorkspaceSnapshot){
  if(disposed)return;const epoch=++generation;detach();detach=()=>{};scope=null;inFlight=false;needsRecovery=false;drafts.pause();editorSession.pause();emit('loading','Loading an owned accepted revision in this test environment...');
  if(workspace.phase!=='ready'||workspace.pending||workspace.uncertain||workspace.conflict||!workspace.document){conceal('The selected chapter is unavailable. Test writing is paused.');return;}
  let s:CompositionScope;
  try{const bookId=identifier(workspace.document.bookId),chapterId=identifier(workspace.selectedChapterId);if(!workspace.document.chapters.some(c=>c.id===chapterId&&c.bookId===bookId))throw Error();const author=await options.readOwner();if(disposed||epoch!==generation)return;if(!author)throw Error();s=Object.freeze({author,bookId,chapterId});}catch{if(epoch===generation)conceal();return;}
  scope=s;
  try{
   const result=await options.transport.read(s) as {status:string;value:{bookId:string;chapterId:string;revision:number;document:unknown}};
   if(!await still(epoch,s))return;
   const v=result?.value;if(result?.status!=='ready'||!v||v.bookId!==s.bookId||v.chapterId!==s.chapterId||!Number.isSafeInteger(v.revision)||v.revision<1||v.revision<(floors.get(key(s))??1))throw Error('Invalid/stale accepted revision');
   const accepted=validateDocument(v.document);await editorSession.bind(workspace);if(!await still(epoch,s))return;
   drafts.bind({author:s.author,book:s.bookId,chapter:s.chapterId},accepted,v.revision);floors.set(key(s),v.revision);install(accepted);
   needsRecovery=!!drafts.recovery();const editor=editorSession.snapshot().editor!;editor.setEditable(!needsRecovery,false);
   const changed=({transaction}:{transaction:{docChanged:boolean}})=>{if(installing||disposed||epoch!==generation||!transaction.docChanged||needsRecovery)return;try{drafts.edit(editor.getJSON());publishDraft();}catch{editor.setEditable(false,false);emit('rejected','The local draft could not be validated or retained. No save was dispatched.');}};
   editor.on('transaction',changed);detach=()=>editor.off('transaction',changed);
   if(needsRecovery)emit('recovery','A synthetic recovery candidate is available. Recover it explicitly before writing.');else emit('confirmed',`Accepted revision ${v.revision} loaded in this test environment only.`);
  }catch{if(epoch===generation&&!disposed)conceal('The accepted revision could not be verified. Test writing is paused.');}
 }
 function parseReceipt(raw:unknown,op:SaveOperation){
  const result=raw as {status:string;receipt:{operationId:string;bookId:string;chapterId:string;outcome:string;revision:number}};const r=result?.receipt;
  if(!r||!['confirmed','conflicted','rejected'].includes(result.status)||r.outcome!==result.status||r.operationId!==op.operationId||r.bookId!==op.bookId||r.chapterId!==op.chapterId||!Number.isSafeInteger(r.revision)||r.revision<1||(r.outcome==='confirmed'&&r.revision!==op.expectedRevision+1))throw Error('Unverified receipt');
  return r as typeof r&{outcome:'confirmed'|'conflicted'|'rejected'};
 }
 async function dispatch(reconcile:boolean){
  if(disposed||!scope||needsRecovery||inFlight)return;const epoch=generation,s=scope;
  if(!await still(epoch,s)||inFlight)return;const d=drafts.snapshot();if(!d)return;
  let op:SaveOperation;let ticket:NonNullable<ReturnType<typeof drafts.pendingTicket>>;
  try{
   if(reconcile){ticket=drafts.pendingTicket()!;if(!ticket||!d.pending)return;op=saveOperation({operationId:ticket.id,bookId:s.bookId,chapterId:s.chapterId,expectedRevision:d.pending.base,document:JSON.parse(d.pending.text)});}
   else {if(!model.canSave)return;op=saveOperation({operationId:options.nextOperationId(),bookId:s.bookId,chapterId:s.chapterId,expectedRevision:d.base,document:editorSession.snapshot().editor!.getJSON()});ticket=drafts.begin(op.operationId);}
  }catch{emit('rejected','The test save could not be prepared. No operation was dispatched.');return;}
  inFlight=true;emit(reconcile?'unknown':'saving',reconcile?'Checking the original test operation...':'Saving captured text in the test environment...');
  try{const raw=await (reconcile?options.transport.lookup(s,op):options.transport.save(s,op));if(!await still(epoch,s))return;const receipt=parseReceipt(raw,op);drafts.settle(ticket,receipt.outcome,receipt.revision);floors.set(key(s),Math.max(floors.get(key(s))??1,receipt.revision));}
  catch{if(await still(epoch,s))drafts.settle(ticket,'unknown');}
  finally{if(!disposed&&epoch===generation){inFlight=false;publishDraft();}}
 }
 async function recover(){if(disposed||!scope||!needsRecovery)return;const epoch=generation,s=scope;if(!await still(epoch,s))return;try{drafts.recover(drafts.recovery());needsRecovery=false;install(JSON.parse(drafts.snapshot()!.text));editorSession.snapshot().editor!.setEditable(true,false);publishDraft();}catch{emit('rejected','The recovery candidate is invalid. Accepted text was not changed.');}}
 return {editorSession,snapshot:()=>model,subscribe(fn:()=>void){listeners.add(fn);return()=>{listeners.delete(fn);};},bind,save:()=>dispatch(false),reconcile:()=>dispatch(true),recover,pause:()=>conceal(),
  dispose(){if(disposed)return;generation++;detach();listeners.clear();drafts.pause();editorSession.dispose();scope=null;disposed=true;model=Object.freeze({phase:'idle',scope:null,revision:null,message:'Test composition closed.',operationId:null,canSave:false,canReconcile:false,canRecover:false});}};
}
export type ManuscriptComposition=ReturnType<typeof createManuscriptComposition>;
