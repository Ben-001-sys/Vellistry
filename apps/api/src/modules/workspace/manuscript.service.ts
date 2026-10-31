import {SaveOperation,saveOperation,identifier,document} from "./manuscript-contract";
import {checkedPrincipal,VerifiedPrincipal,WorkspacePrincipalProvider} from "./workspace-principal";
export type ManuscriptReceipt={operationId:string;bookId:string;chapterId:string;outcome:"confirmed"|"conflicted"|"rejected";revision:number};
export interface ManuscriptPort {
 save(principal:VerifiedPrincipal,operation:SaveOperation):Promise<unknown>;
 read(principal:VerifiedPrincipal,book:string,chapter:string,revision?:number):Promise<unknown>;
 lookup(principal:VerifiedPrincipal,book:string,chapter:string,operation:string):Promise<unknown>;
}
type Result={status:"confirmed"|"conflicted"|"rejected";receipt:ManuscriptReceipt}|{status:"unknown"|"denied"|"invalid"|"unavailable"}|{status:"ready";value:{bookId:string;chapterId:string;revision:number;document:unknown}};
/** Experimental request-principal-bound capability; deliberately unregistered. */
export class ManuscriptService {
 private readonly pending=new Map<string,SaveOperation>();
 private readonly floors=new Map<string,number>();
 constructor(private readonly principals:WorkspacePrincipalProvider,private readonly port:ManuscriptPort){}
 private async principal(){return checkedPrincipal(await this.principals.verify());}
 private key(p:VerifiedPrincipal,b:string,c:string){return JSON.stringify([p.authorId,b,c]);}
 private async still(p:VerifiedPrincipal){const next=await this.principal();return next?.authorId===p.authorId&&next.sessionId===p.sessionId;}
 private receipt(raw:unknown,op:SaveOperation):ManuscriptReceipt {
  if(!raw||typeof raw!=="object")throw new Error("Invalid receipt");const r=raw as ManuscriptReceipt;
  if(Object.keys(r).sort().join()!=="bookId,chapterId,operationId,outcome,revision"||r.operationId!==op.operationId||r.bookId!==op.bookId||r.chapterId!==op.chapterId||!["confirmed","conflicted","rejected"].includes(r.outcome)||!Number.isSafeInteger(r.revision)||r.revision<1||(r.outcome==="confirmed"&&r.revision!==op.expectedRevision+1))throw new Error("Invalid receipt");return Object.freeze({...r});
 }
 async save(raw:unknown):Promise<Result>{
  let op:SaveOperation;try{op=saveOperation(raw);}catch{return {status:"invalid"};}
  let p:VerifiedPrincipal|null;try{p=await this.principal();}catch{return {status:"unavailable"};}if(!p)return {status:"denied"};
  const k=this.key(p,op.bookId,op.chapterId);if(this.pending.has(k))return {status:"unknown"};
  this.pending.set(k,op);
  try{const receipt=this.receipt(await this.port.save(p,op),op);if(!await this.still(p))return {status:"unknown"};return this.terminal(k,op,receipt);}catch{return {status:"unknown"};}
 }
 private terminal(k:string,op:SaveOperation,r:ManuscriptReceipt):Result {
  if(this.pending.get(k)!==op)return {status:"unknown"};this.pending.delete(k);this.floors.set(k,Math.max(this.floors.get(k)??0,r.revision));return {status:r.outcome,receipt:r};
 }
 async reconcile(book:string,chapter:string):Promise<Result>{
  try{book=identifier(book);chapter=identifier(chapter);const p=await this.principal();if(!p)return {status:"denied"};const k=this.key(p,book,chapter),op=this.pending.get(k);if(!op)return {status:"unknown"};const r=this.receipt(await this.port.lookup(p,book,chapter,op.operationId),op);if(!await this.still(p))return {status:"unknown"};return this.terminal(k,op,r);}catch{return {status:"unknown"};}
 }
 async read(book:string,chapter:string,revision?:number):Promise<Result>{
  try{book=identifier(book);chapter=identifier(chapter);if(revision!==undefined&&(!Number.isSafeInteger(revision)||revision<1))return {status:"invalid"};const p=await this.principal();if(!p)return {status:"denied"};const r=await this.port.read(p,book,chapter,revision) as {bookId:string;chapterId:string;revision:number;document:unknown};
   if(!r||Object.keys(r).sort().join()!=="bookId,chapterId,document,revision"||r.bookId!==book||r.chapterId!==chapter||!Number.isSafeInteger(r.revision)||r.revision<1||(revision!==undefined&&r.revision!==revision))return {status:"unavailable"};const value={...r,document:document(r.document)};if(!await this.still(p))return {status:"unavailable"};const k=this.key(p,book,chapter);if(revision===undefined&&r.revision<(this.floors.get(k)??0))return {status:"unavailable"};if(revision===undefined)this.floors.set(k,r.revision);return {status:"ready",value};
  }catch{return {status:"unavailable"};}
 }
}
