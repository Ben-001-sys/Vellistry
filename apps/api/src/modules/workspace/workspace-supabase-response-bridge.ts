import {uuid} from "./workspace-contract";
import {checkedPrincipal} from "./workspace-principal";
import type {SyntheticWorkspaceVerificationPort} from "./workspace-principal-adapter";

/** Tests supply SDK-shaped mocks only. No SDK import/client construction, Auth
 * request or production wiring belongs to this compatibility experiment. */
export interface MockSupabaseAuthClient {
 getUser(token:string):Promise<unknown>;
 getClaims(token:string):Promise<unknown>;
}

function own(value:unknown,name:string):unknown {
 if(!value||typeof value!=="object"||Array.isArray(value))throw new Error("Invalid mock response");
 const prototype=Object.getPrototypeOf(value);
 if(prototype!==Object.prototype&&prototype!==null)throw new Error("Invalid mock response");
 const field=Object.getOwnPropertyDescriptor(value,name);
 if(!field||!("value" in field))throw new Error("Invalid mock response");
 return field.value;
}

function data(response:unknown):unknown {
 if(own(response,"error")!==null)throw new Error("Mock authentication failed");
 return own(response,"data");
}

function userId(response:unknown):string {
 return uuid(own(own(data(response),"user"),"id"));
}

function claims(response:unknown){
 const raw=own(data(response),"claims"),exp=own(raw,"exp");
 if(typeof exp!=="number"||!Number.isSafeInteger(exp)||exp<=0||!Number.isSafeInteger(exp*1000))throw new Error("Invalid mock expiry");
 return Object.freeze({sub:uuid(own(raw,"sub")),session_id:uuid(own(raw,"session_id")),exp});
}

const instant=(value:unknown):value is number=>typeof value==="number"&&Number.isSafeInteger(value)&&value>=0;

/** Compose mock responses into the existing synthetic port. Passing the same
 * token to two injected operations is not cryptographic verification or proof
 * of revocation/session liveness. The caller still creates a provider per request.
 * Snapshot each response independently; never retain mutable SDK data or metadata. */
export function createWorkspaceSupabaseResponseBridge(
 client:MockSupabaseAuthClient,
 clock:()=>number=Date.now,
):SyntheticWorkspaceVerificationPort {
 let getUser:MockSupabaseAuthClient["getUser"]|null=null;
 let getClaims:MockSupabaseAuthClient["getClaims"]|null=null;
 try{
  const user=client?.getUser,claim=client?.getClaims;
  if(typeof user==="function"&&typeof claim==="function"){
   getUser=user.bind(client);getClaims=claim.bind(client);
  }
 }catch{/* Invalid injected dependencies deny; there is no fallback client. */}
 return Object.freeze({
  async verify(token:string):Promise<unknown>{
   try{
    const requestToken=token;
    if(typeof requestToken!=="string"||!requestToken.length||requestToken.length>8192
     ||/[\u0000-\u0020\u007f]/u.test(requestToken)||!getUser||!getClaims)return null;
    const started=clock();if(!instant(started))return null;
    // Both operations receive only the captured token, with no session/options
    // fallback. Both rejection paths have handlers even if the other fails first.
    const [id,verifiedClaims]=await Promise.all([
     Promise.resolve().then(()=>getUser!(requestToken)).then(userId),
     Promise.resolve().then(()=>getClaims!(requestToken)).then(claims),
    ]);
    const now=clock();if(!instant(now)||now<started||id!==verifiedClaims.sub)return null;
    // Conservatively retain start time: waiting for the second response must not
    // refresh an earlier observation or hide expiry during asynchronous work.
    if(!checkedPrincipal({authorId:id,sessionId:verifiedClaims.session_id,
     tokenExpiresAt:verifiedClaims.exp*1000,verifiedAt:started},now))return null;
    return Object.freeze({token:requestToken,userId:id,claims:verifiedClaims,verifiedAt:started});
   }catch{return null;}
  },
 });
}
