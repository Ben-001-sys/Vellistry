import {document as validateDocument, saveOperation, type ManuscriptNode, type SaveOperation} from '../../../../api/src/modules/workspace/manuscript-contract';

export type LocalScope = Readonly<{author:string;book:string;chapter:string;client:string}>;
export type LocalDraft = Readonly<{schema:1;scope:LocalScope;sequence:number;timestamp:number;base:number;document:ManuscriptNode;pending:SaveOperation|null;discarded?:true}>;
export type StorageFailure = 'unavailable'|'blocked'|'quota'|'aborted'|'corrupt'|'incompatible'|'conflict';
export class DraftStorageError extends Error { constructor(public readonly kind:StorageFailure){super(kind);} }
const fields=(v:object,keys:string[])=>{if(Object.keys(v).sort().join()!==keys.sort().join())throw new DraftStorageError('corrupt');};
export function localKey(scope:LocalScope){
 if(!scope||typeof scope!=='object')throw new DraftStorageError('corrupt');
 fields(scope,['author','book','chapter','client']);
 if(Object.values(scope).some(v=>typeof v!=='string'||!v||v.length>100))throw new DraftStorageError('corrupt');
 return JSON.stringify([scope.author,scope.book,scope.chapter,scope.client]);
}
export function localDraft(raw:unknown,scope:LocalScope):LocalDraft {
 try {
  if(!raw||typeof raw!=='object'||Array.isArray(raw))throw Error();
  const d=raw as LocalDraft;
  if(d.schema!==1)throw new DraftStorageError('incompatible');
  fields(d,['schema','scope','sequence','timestamp','base','document','pending',...(d.discarded===true?['discarded']:[])]);
  if(localKey(d.scope)!==localKey(scope)||!Number.isSafeInteger(d.sequence)||d.sequence<1||!Number.isSafeInteger(d.base)||d.base<1||!Number.isSafeInteger(d.timestamp)||d.timestamp<0)throw Error();
  const document=validateDocument(d.document),pending=d.pending===null?null:saveOperation(d.pending);
  if(pending&&(pending.bookId!==scope.book||pending.chapterId!==scope.chapter||pending.expectedRevision>d.base))throw Error();
  return structuredClone({...d,document,pending});
 }catch(e){if(e instanceof DraftStorageError)throw e;throw new DraftStorageError('corrupt');}
}
export interface AsyncDraftStore {
 read(scope:LocalScope):Promise<LocalDraft|null>;
 write(scope:LocalScope,expected:number,value:Omit<LocalDraft,'sequence'>):Promise<LocalDraft>;
 discard(scope:LocalScope,expected:number):Promise<void>;
 close():void;
}
/** Native async storage. Only transaction.oncomplete is a successful write acknowledgement. */
export function createIndexedDraftStore(factory:IDBFactory|undefined,name='vellistry-local-drafts'):AsyncDraftStore {
 let db:IDBDatabase|null=null,closed=false,opening:Promise<IDBDatabase>|null=null;
 const failures=(e:DOMException|null):StorageFailure=>e?.name==='QuotaExceededError'?'quota':e?.name==='AbortError'?'aborted':'unavailable';
 function open():Promise<IDBDatabase>{
  if(closed||!factory)return Promise.reject(new DraftStorageError('unavailable'));
  if(db)return Promise.resolve(db);if(opening)return opening;
  opening=new Promise((resolve,reject)=>{
   let request:IDBOpenDBRequest,settled=false;
   try{request=factory.open(name,1);}catch{reject(new DraftStorageError('unavailable'));return;}
   request.onupgradeneeded=()=>{if(!request.result.objectStoreNames.contains('drafts'))request.result.createObjectStore('drafts');};
   request.onblocked=()=>{settled=true;reject(new DraftStorageError('blocked'));};
   request.onerror=()=>{settled=true;reject(new DraftStorageError(request.error?.name==='VersionError'?'incompatible':failures(request.error)));};
   request.onsuccess=()=>{const result=request.result;if(closed||settled){result.close();if(!settled)reject(new DraftStorageError('unavailable'));settled=true;return;}db=result;db.onversionchange=()=>{result.close();db=null;opening=null;};resolve(result);};
  });
  return opening;
 }
 async function transaction<T>(mode:IDBTransactionMode,scope:LocalScope,action:(store:IDBObjectStore,key:string,finish:(v:T)=>void,fail:(e:DraftStorageError)=>void)=>void):Promise<T>{
  const key=localKey(scope),connection=await open();if(closed)throw new DraftStorageError('unavailable');
  return new Promise<T>((resolve,reject)=>{
   let tx:IDBTransaction,value:T,error:DraftStorageError|undefined;
   try{tx=connection.transaction('drafts',mode);}catch{reject(new DraftStorageError('unavailable'));return;}
   tx.oncomplete=()=>error?reject(error):resolve(value);
   tx.onabort=()=>reject(error??new DraftStorageError(failures(tx.error)));
   tx.onerror=event=>{error??=new DraftStorageError(failures((event.target as IDBRequest).error??tx.error));};
   const fail=(e:DraftStorageError)=>{error=e;tx.abort();};
   try{action(tx.objectStore('drafts'),key,v=>{value=v;},fail);}catch(e){fail(e instanceof DraftStorageError?e:new DraftStorageError('corrupt'));}
  });
 }
 return {
  read:scope=>transaction('readonly',scope,(store,key,done,fail)=>{const r=store.get(key);r.onsuccess=()=>{try{done(r.result===undefined?null:localDraft(r.result,scope));}catch(e){fail(e as DraftStorageError);}};}),
  write:(scope,expected,value)=>transaction('readwrite',scope,(store,key,done,fail)=>{
   const draft=localDraft({...value,sequence:expected+1},scope),r=store.get(key);
   r.onsuccess=()=>{try{const previous=r.result===undefined?null:localDraft(r.result,scope);if((previous?.sequence??0)!==expected)throw new DraftStorageError('conflict');store.put(draft,key);done(draft);}catch(e){fail(e as DraftStorageError);}};
  }),
  discard:(scope,expected)=>transaction('readwrite',scope,(store,key,done,fail)=>{const r=store.get(key);r.onsuccess=()=>{try{const previous=r.result===undefined?null:localDraft(r.result,scope);if((previous?.sequence??0)!==expected)throw new DraftStorageError('conflict');if(previous?.pending)throw new DraftStorageError('conflict');store.put({schema:1,scope,sequence:expected+1,timestamp:Date.now(),base:1,document:{type:'doc',content:[{type:'paragraph'}]},pending:null,discarded:true},key);done(undefined);}catch(e){fail(e as DraftStorageError);}};}),
  close(){closed=true;db?.close();db=null;},
 };
}
