/** Test-only driver. Not imported or registered by the production API. */
import {createRequire} from "node:module";
import path from "node:path";
import {Operation,requestDigest} from "../../../apps/api/src/modules/workspace/workspace-contract";
import {VerifiedPrincipal} from "../../../apps/api/src/modules/workspace/workspace-principal";
import {WorkspacePersistencePort} from "../../../apps/api/src/modules/workspace/workspace-persistence-port";
const {Client}=createRequire(path.resolve(__dirname,"../../../apps/api/package.json"))("pg");
export function configuration(user="workspace_test",database="workspace") {
 const host=process.env.VEL_PG_HOST;const port=Number(process.env.VEL_PG_PORT);
 if(host!=="127.0.0.1"||!Number.isInteger(port)||port<1||port>65535||!process.env.VEL_FIXTURE_PASSWORD)throw new Error("Disposable loopback configuration required");
 return {host,port,database,user,password:user==="postgres"?process.env.VEL_ADMIN_PASSWORD:process.env.VEL_FIXTURE_PASSWORD,connectionTimeoutMillis:5000};
}
export async function connection(user="workspace_test",database="workspace") {const c=new Client(configuration(user,database));await c.connect();return c;}
export async function context(c:any,p:VerifiedPrincipal) {
 await c.query("select set_config('vellistry.author_id',$1,true),set_config('vellistry.session_id',$2,true),set_config('vellistry.token_expires',$3,true),set_config('vellistry.verified_at',$4,true)",[p.authorId,p.sessionId,String(p.tokenExpiresAt),String(p.verifiedAt)]);
 await c.query("set local lock_timeout='5s'; set local statement_timeout='10s'");
}
export class WorkspacePgAdapter implements WorkspacePersistencePort {
 constructor(private readonly database="workspace",private readonly fault="",private readonly loseAcknowledgement=false){}
 async transaction(p:VerifiedPrincipal,run:(c:any)=>Promise<unknown>){
  const c=await connection("workspace_test",this.database);
  try{await c.query("begin");await context(c,p);if(this.fault)await c.query("select set_config('vellistry.test_fault',$1,true)",[this.fault]);const result=await run(c);await c.query("commit");
   if(this.loseAcknowledgement)throw new Error("Injected lost acknowledgement after commit");return result;
  }catch(e){await c.query("rollback").catch(()=>{});throw e;}finally{await c.end();}
 }
 read(p:VerifiedPrincipal,book:string){return this.transaction(p,async c=>(await c.query("select vellistry_workspace.read_workspace($1) result",[book])).rows[0].result);}
 apply(p:VerifiedPrincipal,book:string,op:Operation){return this.transaction(p,async c=>(await c.query("select vellistry_workspace.apply_workspace_operation($1,$2::jsonb,$3) result",[book,JSON.stringify(op),requestDigest(book,op)])).rows[0].result);}
 lookup(p:VerifiedPrincipal,book:string,id:string){return this.transaction(p,async c=>(await c.query("select vellistry_workspace.lookup_workspace_operation($1,$2) result",[book,id])).rows[0].result);}
}
