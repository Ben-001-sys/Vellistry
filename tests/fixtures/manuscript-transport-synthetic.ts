/** Test-only memory transport. Not durable storage, Auth or a production adapter. */
import {saveOperation,type SaveOperation,document as validateDocument} from '../../apps/api/src/modules/workspace/manuscript-contract';
import type {CompositionScope,ManuscriptTransport} from '../../apps/web/src/lib/editor/manuscript-composition';
export type SyntheticMode='success'|'conflict'|'reject'|'delay'|'fail-before'|'drop-after'|'missing'|'delay-fail';
export function createSyntheticManuscriptTransport(seed:{author:string;bookId:string;chapterId:string;document:unknown;revision:number}[]){
 const rows=new Map(seed.map(x=>[x.chapterId,{...x,document:validateDocument(x.document)}]));const receipts=new Map<string,{payload:string;receipt:unknown}>();
 let next:SyntheticMode='success';let release:(()=>void)|null=null;let writes=0;
 function owned(s:CompositionScope){const r=rows.get(s.chapterId);if(!r||r.author!==s.author||r.bookId!==s.bookId)throw Error('Synthetic ownership denied');return r;}
 const port:ManuscriptTransport={
  async read(s){const r=owned(s);return {status:'ready',value:{bookId:s.bookId,chapterId:s.chapterId,revision:r.revision,document:validateDocument(r.document)}};},
  async save(s,raw){const op=saveOperation(raw);if(op.bookId!==s.bookId||op.chapterId!==s.chapterId)throw Error('Target mismatch');const r=owned(s);const mode=next;next='success';if(mode==='fail-before')throw Error('Synthetic precommit transport loss');if(mode==='missing')return undefined;
   const k=JSON.stringify([s.author,op.operationId]),payload=JSON.stringify(op);const prior=receipts.get(k);if(prior){if(prior.payload!==payload)throw Error('Operation reused');return prior.receipt;}
   if(mode==='conflict'){r.revision++;r.document={type:'doc',content:[{type:'paragraph',content:[{type:'text',text:'Competing synthetic edit'}]}]};}
   const outcome=mode==='reject'?'rejected':r.revision!==op.expectedRevision?'conflicted':'confirmed';if(outcome==='confirmed'){r.document=validateDocument(op.document);r.revision++;writes++;}
   const result={status:outcome,receipt:{operationId:op.operationId,bookId:op.bookId,chapterId:op.chapterId,outcome,revision:r.revision}};receipts.set(k,{payload,receipt:result});
   if(mode==='drop-after')throw Error('Synthetic discarded response after memory commit');if(mode==='delay'||mode==='delay-fail')await new Promise<void>(resolve=>{release=()=>{release=null;resolve();};});if(mode==='delay-fail')throw Error('Synthetic delayed rejection');return result;
  },
  async lookup(s,op){owned(s);const result=receipts.get(JSON.stringify([s.author,op.operationId]));if(!result||result.payload!==JSON.stringify(op))return {status:'unknown'};return result.receipt;},
 };
 return {port,fault(mode:SyntheticMode){next=mode;},release(){release?.();},writes:()=>writes,peek(s:CompositionScope){return structuredClone(owned(s));}};
}
