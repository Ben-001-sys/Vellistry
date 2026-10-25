import assert from "node:assert/strict";
import {test} from "node:test";
import {checkedPrincipal} from "./workspace-principal";
import {createWorkspacePrincipalProvider, SyntheticWorkspaceVerificationPort} from "./workspace-principal-adapter";

const AUTHOR_A="aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa";
const AUTHOR_B="bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb";
const SESSION_A="11111111-1111-1111-1111-111111111111";
const SESSION_B="22222222-2222-2222-2222-222222222222";
const TOKEN_A="synthetic-token-A", TOKEN_B="synthetic-token-B", NOW=100000;
function proof(token=TOKEN_A, userId=AUTHOR_A, sessionId=SESSION_A, verifiedAt=NOW){
 return {token,userId,claims:{sub:userId,session_id:sessionId,exp:200},verifiedAt};
}
function provider(value:unknown, clock=()=>NOW){
 return createWorkspacePrincipalProvider({verify:async()=>value},TOKEN_A,clock);
}
function deferred(){
 let resolve!:(value:unknown)=>void;
 const promise=new Promise<unknown>(r=>{resolve=r;});
 return {promise,resolve};
}

test("PB-01: valid synthetic same-token proof yields the existing immutable principal shape",async()=>{
 const p=await provider(proof()).verify();
 assert.deepEqual(p,{authorId:AUTHOR_A,sessionId:SESSION_A,tokenExpiresAt:200000,verifiedAt:NOW});
 assert.ok(Object.isFrozen(p));assert.deepEqual(checkedPrincipal(p,NOW),p);
});

test("PB-02: invalid tokens deny without consulting the injected verifier",async()=>{
 for(const token of [undefined,null,0,{},[],""," ","bad token","bad\n", "x".repeat(8193)]){
  let calls=0;
  const p=createWorkspacePrincipalProvider({verify:async()=>{calls++;return proof();}},token,()=>NOW);
  assert.equal(await p.verify(),null);assert.equal(calls,0);
 }
});

test("PB-02: rejected, throwing and malformed verifier dependencies fail closed",async()=>{
 const ports:unknown[]=[null,{}, {verify:1},{verify(){throw new Error("synthetic failure");}},
  {verify:async()=>{throw new Error("synthetic rejection");}}];
 for(const port of ports){
  const p=createWorkspacePrincipalProvider(port as SyntheticWorkspaceVerificationPort,TOKEN_A,()=>NOW);
  assert.equal(await p.verify(),null);
 }
});

test("PB-02: malformed proofs never fall back to caller or decoded identity",async()=>{
 const original=proof();
 const malformed:unknown[]=[null,undefined,[],true,"proof",{...original,token:TOKEN_B},
  {...original,token:[TOKEN_A]},{...original,userId:undefined},{...original,claims:null},
  {...original,claims:[]},{...original,claims:{...original.claims,sub:undefined}},
  {...original,authorId:AUTHOR_B},{...original,claims:{...original.claims,owner_id:AUTHOR_B}},
  Object.create(original),new Date(),{...original,[Symbol("unexpected")]:true}];
 for(const key of Object.keys(original)){
  const missing:Record<string,unknown>={...original};delete missing[key];malformed.push(missing);
 }
 for(const value of malformed)assert.equal(await provider(value).verify(),null);
});

test("PB-02: accessors and inherited fields are not accepted as verification data",async()=>{
 let reads=0;
 const accessor={...proof()};Object.defineProperty(accessor,"userId",{get(){reads++;return AUTHOR_A;}});
 assert.equal(await provider(accessor).verify(),null);assert.equal(reads,0);
 const claims=Object.create(proof().claims);
 assert.equal(await provider({...proof(),claims}).verify(),null);
});

test("PB-03: verified user, subject and session must be valid matching UUID identities",async()=>{
 for(const value of [
  {...proof(),userId:AUTHOR_B},
  {...proof(),userId:[AUTHOR_A]},
  {...proof(),claims:{...proof().claims,sub:AUTHOR_B}},
  {...proof(),claims:{...proof().claims,session_id:undefined}},
  {...proof(),claims:{...proof().claims,session_id:[SESSION_A]}},
  {...proof(),claims:{...proof().claims,session_id:"invalid"}},
  {...proof(),claims:{...proof().claims,sub:"invalid"}},
 ])assert.equal(await provider(value).verify(),null);
 const uppercase=proof();uppercase.userId=AUTHOR_A.toUpperCase();
 assert.equal((await provider(uppercase).verify())?.authorId,AUTHOR_A);
});

test("PB-04: expiry is integral JWT seconds and cannot be coerced or overflow milliseconds",async()=>{
 for(const exp of [undefined,null,"200",true,NaN,Infinity,-1,0,100,200.5,Number.MAX_SAFE_INTEGER]){
  assert.equal(await provider({...proof(),claims:{...proof().claims,exp}}).verify(),null);
 }
 assert.ok(await provider({...proof(),claims:{...proof().claims,exp:101}}).verify());
});

test("PB-04: existing freshness boundary is preserved without future-skew tolerance",async()=>{
 for(const verifiedAt of [undefined,null,"100000",true,NaN,Infinity,-1,NOW+1,NOW-30001,100000.5]){
  assert.equal(await provider({...proof(),verifiedAt}).verify(),null);
 }
 assert.ok(await provider(proof(TOKEN_A,AUTHOR_A,SESSION_A,NOW-30000)).verify());
});

test("PB-04: invalid, throwing or regressing injected clocks deny",async()=>{
 for(const clock of [()=>NaN,()=>Infinity,()=>-1,()=>NOW+0.5,()=>{throw new Error("clock");}]){
  assert.equal(await provider(proof(),clock).verify(),null);
 }
 let reads=0;
 assert.equal(await provider(proof(TOKEN_A,AUTHOR_A,SESSION_A,NOW-100),()=>reads++===0?NOW:NOW-1).verify(),null);
});

test("PB-05: separate requests and reversed async completions cannot exchange authors",async()=>{
 const a=deferred(),b=deferred(),seen:string[]=[];
 const port={verify:(token:string)=>{seen.push(token);return token===TOKEN_A?a.promise:b.promise;}};
 const pa=createWorkspacePrincipalProvider(port,TOKEN_A,()=>NOW);
 const pb=createWorkspacePrincipalProvider(port,TOKEN_B,()=>NOW);
 const ra=pa.verify(),rb=pb.verify();
 b.resolve(proof(TOKEN_B,AUTHOR_B,SESSION_B));
 assert.equal((await rb)?.authorId,AUTHOR_B);
 a.resolve(proof());assert.equal((await ra)?.authorId,AUTHOR_A);
 assert.deepEqual(seen,[TOKEN_A,TOKEN_B]);
});

test("PB-05/PB-07: overlapping calls on one provider pin identity at first valid completion",async()=>{
 const first=deferred(),second=deferred();let calls=0;
 const p=createWorkspacePrincipalProvider({verify:()=>++calls===1?first.promise:second.promise},TOKEN_A,()=>NOW);
 const r1=p.verify(),r2=p.verify();
 second.resolve(proof());assert.equal((await r2)?.authorId,AUTHOR_A);
 first.resolve(proof(TOKEN_A,AUTHOR_B,SESSION_B));assert.equal(await r1,null);
});

test("PB-06: caller token reassignment and verifier method replacement do not redirect an existing provider",async()=>{
 let token=TOKEN_A;const seen:string[]=[];
 const port={verify:async(t:string)=>{seen.push(t);return proof(t,t===TOKEN_A?AUTHOR_A:AUTHOR_B,t===TOKEN_A?SESSION_A:SESSION_B);}};
 const a=createWorkspacePrincipalProvider(port,token,()=>NOW);token=TOKEN_B;
 port.verify=async()=>proof(TOKEN_B,AUTHOR_B,SESSION_B);
 assert.equal((await a.verify())?.authorId,AUTHOR_A);assert.deepEqual(seen,[TOKEN_A]);
 const b=createWorkspacePrincipalProvider(port,token,()=>NOW);
 assert.equal((await b.verify())?.authorId,AUTHOR_B);assert.equal((await a.verify())?.sessionId,SESSION_A);
});

test("PB-06/PB-07: same-token correlation, author, session or expiry changes deny",async()=>{
 for(const change of [proof(TOKEN_B),proof(TOKEN_A,AUTHOR_B,SESSION_B),proof(TOKEN_A,AUTHOR_A,SESSION_B),
  {...proof(),claims:{...proof().claims,exp:201}}]){
  let value:unknown=proof();const p=createWorkspacePrincipalProvider({verify:async()=>value},TOKEN_A,()=>NOW);
  assert.ok(await p.verify());value=change;assert.equal(await p.verify(),null);
 }
});

test("PB-07: an async response is denied if its token expires during verification",async()=>{
 let now=NOW;const d=deferred();
 const p=createWorkspacePrincipalProvider({verify:()=>d.promise},TOKEN_A,()=>now);
 const result=p.verify();now=200000;d.resolve(proof());assert.equal(await result,null);
});

test("PB-07: an async response is denied when its verification becomes stale",async()=>{
 let now=NOW;const d=deferred();
 const p=createWorkspacePrincipalProvider({verify:()=>d.promise},TOKEN_A,()=>now);
 const result=p.verify();now=NOW+30001;d.resolve(proof());assert.equal(await result,null);
});

test("PB-07: proof snapshots and returned principals cannot be mutated across requests",async()=>{
 const raw=proof();const p=provider(raw);const result=await p.verify();assert.ok(result);
 raw.userId=AUTHOR_B;raw.claims.sub=AUTHOR_B;raw.claims.session_id=SESSION_B;
 assert.equal(result.authorId,AUTHOR_A);assert.equal(result.sessionId,SESSION_A);
 assert.equal(Reflect.set(result,"authorId",AUTHOR_B),false);
 assert.equal(Reflect.set(p,"verify",async()=>null),false);
 assert.equal(await p.verify(),null);
});

test("PB-07: errors and rejected proofs never clear a previously bound identity",async()=>{
 let value:unknown=proof();let fail=false;
 const p=createWorkspacePrincipalProvider({verify:async()=>{if(fail)throw new Error("synthetic");return value;}},TOKEN_A,()=>NOW);
 assert.ok(await p.verify());fail=true;assert.equal(await p.verify(),null);
 fail=false;value=proof(TOKEN_A,AUTHOR_B,SESSION_B);assert.equal(await p.verify(),null);
 value=proof();assert.equal((await p.verify())?.authorId,AUTHOR_A);
});

test("PB-08/PB-09: successful binding uses only injected synthetic responses, never a network fallback",async(t)=>{
 const mock=t.mock.method(globalThis,"fetch",()=>{throw new Error("Network forbidden by synthetic test");});
 try{assert.ok(await provider(proof()).verify());assert.equal(mock.mock.callCount(),0);}
 finally{t.mock.restoreAll();}
});
