import {Inject,Injectable} from "@nestjs/common";
import {operation,receipt,uuid,workspace,Operation,Receipt,Workspace} from "./workspace-contract";
import {checkedPrincipal,VerifiedPrincipal,WORKSPACE_PRINCIPAL,WorkspacePrincipalProvider} from "./workspace-principal";
import {WORKSPACE_PERSISTENCE,WorkspacePersistencePort} from "./workspace-persistence-port";
export type WorkspaceResult={status:"ready";workspace:Workspace}|{status:"confirmed"|"rejected";receipt:Receipt}|{status:"unknown"|"unavailable"|"denied"|"invalid"};
type Pending={operation:Operation;terminal?:Receipt};
/** Experimental headless service only: deliberately absent from AppModule/routes.
 * Unknown writes remain locked per verified author/book until terminal reconciliation
 * and a coherent readback. This is process-local safety, not a shipping draft store. */
@Injectable()
export class WorkspaceService {
 private readonly pending=new Map<string,Pending>();
 private readonly floors=new Map<string,number>();
 constructor(@Inject(WORKSPACE_PRINCIPAL) private readonly principals:WorkspacePrincipalProvider,
 @Inject(WORKSPACE_PERSISTENCE) private readonly port:WorkspacePersistencePort){}
 private async principal(){return checkedPrincipal(await this.principals.verify());}
 private key(p:VerifiedPrincipal,book:string){return p.authorId+":"+book;}
 private async still(p:VerifiedPrincipal){const next=await this.principal();return next?.authorId===p.authorId&&next.sessionId===p.sessionId;}
 async read(book:string):Promise<WorkspaceResult>{
  try{book=uuid(book);const p=await this.principal();if(!p)return {status:"denied"};const key=this.key(p,book);
   const result=workspace(await this.port.read(p,book),book);if(!await this.still(p))return {status:"unavailable"};
   if(result.version<(this.floors.get(key)??0))return {status:"unavailable"};
   this.floors.set(key,Math.max(this.floors.get(key)??0,result.version));
   const pending=this.pending.get(key);if(pending?.terminal?.outcome==="confirmed"&&result.version>=pending.terminal.version)this.pending.delete(key);
   return {status:"ready",workspace:result};
  }catch{return {status:"unavailable"};}
 }
 async apply(book:string,raw:unknown):Promise<WorkspaceResult>{
  let op:Operation;try{book=uuid(book);op=operation(raw);}catch{return {status:"invalid"};}
  let p:VerifiedPrincipal|null;try{p=await this.principal();}catch{return {status:"unavailable"};}if(!p)return {status:"denied"};
  const key=this.key(p,book);if(this.pending.has(key))return {status:"unknown"};
  const pending:Pending={operation:op};this.pending.set(key,pending);
  try{const r=receipt(await this.port.apply(p,book,op),book,op.operationId);
   if(r.outcome==="confirmed"&&r.version!==op.expectedVersion+1)return {status:"unknown"};
   if(!await this.still(p))return {status:"unknown"};return this.terminal(key,pending,r);
  }catch{return {status:"unknown"};}
 }
 async reconcile(book:string,operationId:string):Promise<WorkspaceResult>{
  try{book=uuid(book);operationId=uuid(operationId);const p=await this.principal();if(!p)return {status:"denied"};const key=this.key(p,book);
   const pending=this.pending.get(key);const raw=await this.port.lookup(p,book,operationId);
   if(!await this.still(p))return {status:"unavailable"};
   const r=receipt(raw,book,operationId);
   if(pending&&pending.operation.operationId!==operationId)return {status:"unknown"};
   if(pending&&r.outcome==="confirmed"&&r.version!==pending.operation.expectedVersion+1)return {status:"unknown"};
   if(pending)return this.terminal(key,pending,r);
   this.floors.set(key,Math.max(this.floors.get(key)??0,r.version));return {status:r.outcome,receipt:r};
  }catch{return {status:"unknown"};}
 }
 private terminal(key:string,pending:Pending,r:Receipt):WorkspaceResult {
  // A delayed response must not mutate a newer operation's reconciliation lock.
  if(this.pending.get(key)!==pending)return {status:"unknown"};
  pending.terminal=r;if(r.outcome==="rejected")this.pending.delete(key);
  else this.floors.set(key,Math.max(this.floors.get(key)??0,r.version));
  return {status:r.outcome,receipt:r};
 }
}
