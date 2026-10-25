import {uuid} from "./workspace-contract";
import {checkedPrincipal, VerifiedPrincipal, WorkspacePrincipalProvider} from "./workspace-principal";

/** Trusted synthetic seam only. A response has own data fields:
 * {token, userId, claims:{sub, session_id, exp}, verifiedAt}.
 * exp is integral seconds; verifiedAt is integral milliseconds.
 * Echoing token is correlation, NOT signature verification or session liveness.
 * No real Auth client, request registration or production verifier is supplied. */
export interface SyntheticWorkspaceVerificationPort {
 verify(token:string):Promise<unknown>;
}

function fields(value:unknown, names:readonly string[]):Record<string,unknown>|null {
 if(!value||typeof value!=="object"||Array.isArray(value))return null;
 const prototype=Object.getPrototypeOf(value);
 if(prototype!==Object.prototype&&prototype!==null)return null;
 const keys=Reflect.ownKeys(value);
 if(keys.length!==names.length||keys.some(k=>typeof k!=="string"||!names.includes(k)))return null;
 const result:Record<string,unknown>=Object.create(null);
 for(const name of names){
  const descriptor=Object.getOwnPropertyDescriptor(value,name);
  if(!descriptor||!("value" in descriptor))return null;
  result[name]=descriptor.value;
 }
 return result;
}

const instant=(value:unknown):value is number=>typeof value==="number"&&Number.isSafeInteger(value)&&value>=0;

/** Create one provider per request with an immutable token and verification method.
 * Every call verifies afresh; successful calls pin subject/session/expiry for this
 * token. Failed calls never reset that binding. A refresh needs a new provider.
 * The injected verifier is trusted to authenticate its response; this adapter only
 * validates/binds that response. Arbitrary caller JSON is not authentication. */
export function createWorkspacePrincipalProvider(
 verificationPort:SyntheticWorkspaceVerificationPort,
 requestToken:unknown,
 clock:()=>number=Date.now,
):WorkspacePrincipalProvider {
 const token=typeof requestToken==="string"&&requestToken.length>0&&requestToken.length<=8192
  &&!/[\u0000-\u0020\u007f]/u.test(requestToken)?requestToken:null;
 let verifyToken:((token:string)=>Promise<unknown>)|null=null;
 try{
  const method=verificationPort?.verify;
  if(typeof method==="function")verifyToken=method.bind(verificationPort);
 }catch{/* Invalid dependency must deny, never select another verification path. */}
 let bound:Readonly<Pick<VerifiedPrincipal,"authorId"|"sessionId"|"tokenExpiresAt">>|null=null;
 return Object.freeze({
  async verify():Promise<VerifiedPrincipal|null>{
   try{
    if(!token||!verifyToken)return null;
    const started=clock();if(!instant(started))return null;
    const response=await verifyToken(token);
    const now=clock();if(!instant(now)||now<started)return null;
    const proof=fields(response,["token","userId","claims","verifiedAt"]);
    if(!proof||proof.token!==token||!instant(proof.verifiedAt))return null;
    const claims=fields(proof.claims,["sub","session_id","exp"]);
    if(!claims||!instant(claims.exp)||claims.exp===0||!Number.isSafeInteger(claims.exp*1000))return null;
    const authorId=uuid(proof.userId);
    if(authorId!==uuid(claims.sub))return null;
    const principal=checkedPrincipal({authorId,sessionId:uuid(claims.session_id),
     tokenExpiresAt:claims.exp*1000,verifiedAt:proof.verifiedAt},now);
    if(!principal)return null;
    if(bound&&(bound.authorId!==principal.authorId||bound.sessionId!==principal.sessionId
     ||bound.tokenExpiresAt!==principal.tokenExpiresAt))return null;
    // No await between checking and pinning: overlapping completions share this
    // request's binding, never a mutable global actor or another request's token.
    bound??=Object.freeze({authorId:principal.authorId,sessionId:principal.sessionId,tokenExpiresAt:principal.tokenExpiresAt});
    return principal;
   }catch{return null;}
  },
 });
}
