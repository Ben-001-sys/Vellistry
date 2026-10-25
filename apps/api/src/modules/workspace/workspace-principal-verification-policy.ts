import {uuid} from "./workspace-contract";

type SyntheticClaims=Readonly<{sub:string;session_id:string;exp:number;iss:string;
 aud:string|readonly string[];role:string;is_anonymous:false;iat?:number;nbf?:number}>;
export type SyntheticPolicyResponse=Readonly<{data:Readonly<{claims:SyntheticClaims}>;error:null}>;

// Only plain own data is accepted; accessors, inherited fields and unknown claims
// are not a second trust channel. This schema is deliberately fixture-only.
function record(value:unknown,required:readonly string[],optional:readonly string[]=[]):Record<string,unknown>{
 if(!value||typeof value!=="object"||Array.isArray(value))throw new Error("Invalid fixture data");
 const prototype=Object.getPrototypeOf(value);
 if(prototype!==Object.prototype&&prototype!==null)throw new Error("Invalid fixture prototype");
 const result:Record<string,unknown>=Object.create(null);
 for(const key of Reflect.ownKeys(value)){
  if(typeof key!=="string"||(!required.includes(key)&&!optional.includes(key)))throw new Error("Unsupported fixture field");
  const descriptor=Object.getOwnPropertyDescriptor(value,key);
  if(!descriptor||!("value" in descriptor))throw new Error("Fixture accessor denied");
  result[key]=descriptor.value;
 }
 if(required.some(key=>!Object.hasOwn(result,key)))throw new Error("Incomplete fixture data");
 return result;
}
function single(value:unknown,expected:string):readonly string[]{
 if(!Array.isArray(value)||Object.getPrototypeOf(value)!==Array.prototype||value.length!==1
  ||Reflect.ownKeys(value).length!==2)throw new Error("Invalid fixture list");
 const first=Object.getOwnPropertyDescriptor(value,"0");
 if(!first||!("value" in first)||first.value!==expected)throw new Error("Unexpected fixture value");
 return Object.freeze([expected]);
}
const instant=(v:unknown):v is number=>typeof v==="number"&&Number.isSafeInteger(v)&&v>=0;
const seconds=(v:unknown):v is number=>instant(v)&&Number.isSafeInteger(v*1000);

/** Pure LOCAL experiment, NOT a verifier. Evidence must be injected already-
 * verified mock results; arbitrary JSON satisfying this function is not authentic.
 * Explicit policy is required, and only reviewed synthetic fixture values work.
 * No SDK, clock default, token, network, key, session or writable authorization.
 * Composition caller evaluates this at response arrival BEFORE bridge projection;
 * unchanged bridge/provider still enforce post-await expiry and 30000ms freshness.
 */
export function evaluateSyntheticPrincipalClaimPolicy(
 response:unknown, trustedSyntheticPolicy:unknown, nowMilliseconds:unknown,
):SyntheticPolicyResponse|null {
 try{
  if(!instant(nowMilliseconds))return null;
  const policy=record(trustedSyntheticPolicy,["issuer","audiences","roles"]);
  if(policy.issuer!=="https://synthetic.invalid/auth/v1")return null;
  const audiences=single(policy.audiences,"synthetic-author"),roles=single(policy.roles,"authenticated");
  const envelope=record(response,["data","error"]);if(envelope.error!==null)return null;
  const data=record(envelope.data,["claims"]);
  const raw=record(data.claims,["sub","session_id","exp","iss","aud","role","is_anonymous"],["iat","nbf"]);
  // No positive AAL policy was approved. Any aal field (like other unsupported
  // claims/time fields) is rejected by the strict schema, never defaulted.
  if(raw.iss!==policy.issuer||raw.role!==roles[0]||raw.is_anonymous!==false)return null;
  const aud=typeof raw.aud==="string"?raw.aud:single(raw.aud,audiences[0]);
  if(typeof aud==="string"&&aud!==audiences[0])return null;
  if(!seconds(raw.exp)||raw.exp===0||raw.exp*1000<=nowMilliseconds)return null;
  const claims:{sub:string;session_id:string;exp:number;iss:string;aud:string|readonly string[];
   role:string;is_anonymous:false;iat?:number;nbf?:number}={sub:uuid(raw.sub),session_id:uuid(raw.session_id),
    exp:raw.exp,iss:raw.iss as string,aud,role:raw.role as string,is_anonymous:false};
  for(const name of ["iat","nbf"] as const){
   if(Object.hasOwn(raw,name)){
    const time=raw[name];if(!seconds(time)||time*1000>nowMilliseconds||time>=raw.exp)return null;
    claims[name]=time;
   }
  }
  if(claims.iat!==undefined&&claims.nbf!==undefined&&claims.iat>claims.nbf)return null;
  return Object.freeze({data:Object.freeze({claims:Object.freeze(claims)}),error:null});
 }catch{return null;}
}
