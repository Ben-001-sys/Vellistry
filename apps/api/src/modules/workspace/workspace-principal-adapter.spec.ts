import {evaluateSyntheticPrincipalClaimPolicy} from "./workspace-principal-verification-policy";
import assert from "node:assert/strict";
import {test} from "node:test";
import {createWorkspaceSupabaseResponseBridge, MockSupabaseAuthClient} from "./workspace-supabase-response-bridge";
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

// SDK-shaped mock composition only: these objects never instantiate an SDK client.
function sdkUser(id=AUTHOR_A){return {data:{user:{id,email:"synthetic@example.invalid",user_metadata:{sub:AUTHOR_B}}},error:null};}
function sdkClaims(id=AUTHOR_A,session=SESSION_A,exp=200){return {data:{claims:{sub:id,session_id:session,exp,role:"authenticated"},header:{alg:"synthetic"},signature:new Uint8Array()},error:null};}
function mockClient(user:unknown=sdkUser(),claims:unknown=sdkClaims()):MockSupabaseAuthClient {
 return {getUser:async()=>user,getClaims:async()=>claims};
}
const tick=()=>new Promise<void>(resolve=>setImmediate(resolve));

test("SB-01: complete SDK-shaped responses compose into the existing frozen principal",async()=>{
 const bridge=createWorkspaceSupabaseResponseBridge(mockClient(),()=>NOW);
 const result=await createWorkspacePrincipalProvider(bridge,TOKEN_A,()=>NOW).verify();
 assert.deepEqual(result,{authorId:AUTHOR_A,sessionId:SESSION_A,tokenExpiresAt:200000,verifiedAt:NOW});
 assert.ok(Object.isFrozen(result));
});

test("SB-02: both injected operations receive exactly the same explicit token and no options",async()=>{
 const calls:unknown[][]=[];
 const bridge=createWorkspaceSupabaseResponseBridge({getUser:async(...args)=>{calls.push(args);return sdkUser();},getClaims:async(...args)=>{calls.push(args);return sdkClaims();}},()=>NOW);
 const result=await bridge.verify(TOKEN_A);assert.ok(result);
 assert.deepEqual(calls,[[TOKEN_A],[TOKEN_A]]);
});

test("SB-03: invalid tokens and incomplete clients deny without a session or network fallback",async()=>{
 let calls=0;const client={getUser:async()=>{calls++;return sdkUser();},getClaims:async()=>{calls++;return sdkClaims();}};
 for(const token of [null,undefined,[],123,""," ","x".repeat(8193)])assert.equal(await createWorkspaceSupabaseResponseBridge(client,()=>NOW).verify(token as string),null);
 assert.equal(calls,0);
 for(const invalid of [null,{}, {getUser:client.getUser},{getClaims:client.getClaims}]){
  assert.equal(await createWorkspaceSupabaseResponseBridge(invalid as unknown as MockSupabaseAuthClient,()=>NOW).verify(TOKEN_A),null);
 }
});

test("SB-04: either SDK error, including falsy non-null errors, rejects the whole proof",async()=>{
 for(const error of [{message:"synthetic authentication error"},false,undefined,0,""]){
  assert.equal(await createWorkspaceSupabaseResponseBridge(mockClient({...sdkUser(),error}),()=>NOW).verify(TOKEN_A),null);
  assert.equal(await createWorkspaceSupabaseResponseBridge(mockClient(sdkUser(),{...sdkClaims(),error}),()=>NOW).verify(TOKEN_A),null);
 }
});

test("SB-05: missing, partial and malformed SDK responses fail closed",async()=>{
 for(const value of [null,undefined,[],"response",{}, {data:{},error:null},{data:null,error:null},{data:{user:null},error:null},{data:{claims:null},error:null}]){
  assert.equal(await createWorkspaceSupabaseResponseBridge({getUser:async()=>value,getClaims:async()=>sdkClaims()},()=>NOW).verify(TOKEN_A),null);
  assert.equal(await createWorkspaceSupabaseResponseBridge({getUser:async()=>sdkUser(),getClaims:async()=>value},()=>NOW).verify(TOKEN_A),null);
 }
});

test("SB-06: contradictory subjects and invalid session or expiry cannot produce a proof",async()=>{
 const claims=sdkClaims();
 for(const value of [sdkClaims(AUTHOR_B),{...claims,data:{claims:{...claims.data.claims,session_id:"bad"}}},
  {...claims,data:{claims:{...claims.data.claims,session_id:undefined}}},
  {...claims,data:{claims:{...claims.data.claims,sub:[AUTHOR_A]}}},
  ...[null,undefined,"200",true,0,100,200.5,Infinity,NaN,Number.MAX_SAFE_INTEGER].map(exp=>({...claims,data:{claims:{...claims.data.claims,exp}}}))]){
  assert.equal(await createWorkspaceSupabaseResponseBridge({getUser:async()=>sdkUser(),getClaims:async()=>value},()=>NOW).verify(TOKEN_A),null);
 }
 assert.equal(await createWorkspaceSupabaseResponseBridge(mockClient(sdkUser("bad")),()=>NOW).verify(TOKEN_A),null);
});

test("SB-07: required accessors and inherited response data are rejected without invoking them",async()=>{
 let reads=0;const user=sdkUser();Object.defineProperty(user.data.user,"id",{get(){reads++;return AUTHOR_A;}});
 assert.equal(await createWorkspaceSupabaseResponseBridge(mockClient(user),()=>NOW).verify(TOKEN_A),null);assert.equal(reads,0);
 assert.equal(await createWorkspaceSupabaseResponseBridge(mockClient(Object.create(sdkUser())),()=>NOW).verify(TOKEN_A),null);
});

test("SB-08: claims may complete before user without mixing or trusting metadata",async()=>{
 const u=deferred(),c=deferred();
 const result=createWorkspaceSupabaseResponseBridge({getUser:()=>u.promise,getClaims:()=>c.promise},()=>NOW).verify(TOKEN_A);
 c.resolve(sdkClaims());await tick();u.resolve(sdkUser());
 assert.deepEqual(await result,{token:TOKEN_A,userId:AUTHOR_A,claims:{sub:AUTHOR_A,session_id:SESSION_A,exp:200},verifiedAt:NOW});
});

test("SB-09: the user response is snapshotted before a later claims response",async()=>{
 const u=deferred(),c=deferred(),user=sdkUser();
 const result=createWorkspaceSupabaseResponseBridge({getUser:()=>u.promise,getClaims:()=>c.promise},()=>NOW).verify(TOKEN_A);
 u.resolve(user);await tick();user.data.user.id=AUTHOR_B;c.resolve(sdkClaims());
 assert.equal((await result as {userId:string}).userId,AUTHOR_A);
});

test("SB-10: early claims and returned proof are immutable snapshots",async()=>{
 const u=deferred(),c=deferred(),claims=sdkClaims();
 const result=createWorkspaceSupabaseResponseBridge({getUser:()=>u.promise,getClaims:()=>c.promise},()=>NOW).verify(TOKEN_A);
 c.resolve(claims);await tick();claims.data.claims.sub=AUTHOR_B;u.resolve(sdkUser());
 const value=await result as {claims:{sub:string}};assert.equal(value.claims.sub,AUTHOR_A);
 assert.ok(Object.isFrozen(value));assert.ok(Object.isFrozen(value.claims));assert.equal(Reflect.set(value.claims,"sub",AUTHOR_B),false);
});

test("SB-11: reversed completions for concurrent authors stay request-isolated",async()=>{
 const ua=deferred(),ub=deferred(),ca=deferred(),cb=deferred();const seen:string[]=[];
 const bridge=createWorkspaceSupabaseResponseBridge({getUser:t=>{seen.push("user:"+t);return t===TOKEN_A?ua.promise:ub.promise;},getClaims:t=>{seen.push("claims:"+t);return t===TOKEN_A?ca.promise:cb.promise;}},()=>NOW);
 const a=createWorkspacePrincipalProvider(bridge,TOKEN_A,()=>NOW).verify(),b=createWorkspacePrincipalProvider(bridge,TOKEN_B,()=>NOW).verify();
 cb.resolve(sdkClaims(AUTHOR_B,SESSION_B));ua.resolve(sdkUser());await tick();ub.resolve(sdkUser(AUTHOR_B));ca.resolve(sdkClaims());
 assert.equal((await a)?.authorId,AUTHOR_A);assert.equal((await b)?.sessionId,SESSION_B);
 assert.deepEqual(seen.sort(),["user:"+TOKEN_A,"user:"+TOKEN_B,"claims:"+TOKEN_A,"claims:"+TOKEN_B].sort());
});

test("SB-12: thrown/rejected clients never yield partial proof or unhandled fallback",async()=>{
 for(const side of ["getUser","getClaims"] as const){
  for(const sync of [true,false]){
   const client=mockClient();client[side]=()=>{if(sync)throw new Error("synthetic throw");return Promise.reject(new Error("synthetic rejection"));};
   assert.equal(await createWorkspaceSupabaseResponseBridge(client,()=>NOW).verify(TOKEN_A),null);
  }
 }
});

test("SB-13: expiry is checked after both async responses",async()=>{
 let now=NOW;const user=deferred();const bridge=createWorkspaceSupabaseResponseBridge({getUser:()=>user.promise,getClaims:async()=>sdkClaims()},()=>now);
 const result=bridge.verify(TOKEN_A);await tick();now=200000;user.resolve(sdkUser());assert.equal(await result,null);
});

test("SB-14: waiting cannot launder stale verification into a fresh timestamp",async()=>{
 for(const delay of [30000,30001]){
  let now=NOW;const claims=deferred();
  const result=createWorkspaceSupabaseResponseBridge({getUser:async()=>sdkUser(),getClaims:()=>claims.promise},()=>now).verify(TOKEN_A);
  await tick();now=NOW+delay;claims.resolve(sdkClaims());
  const value=await result as {verifiedAt:number}|null;
  if(delay===30000)assert.equal(value?.verifiedAt,NOW);else assert.equal(value,null);
 }
});

test("SB-15: invalid or regressing clocks deny after asynchronous composition",async()=>{
 for(const end of [NaN,Infinity,-1,NOW-1,NOW+0.5]){
  let now=NOW;const user=deferred();const result=createWorkspaceSupabaseResponseBridge({getUser:()=>user.promise,getClaims:async()=>sdkClaims()},()=>now).verify(TOKEN_A);
  await tick();now=end;user.resolve(sdkUser());assert.equal(await result,null);
 }
 assert.equal(await createWorkspaceSupabaseResponseBridge(mockClient(),()=>NaN).verify(TOKEN_A),null);
});

test("SB-16: token reassignment/method replacement cannot redirect an in-flight bridge request",async()=>{
 let token=TOKEN_A;const u=deferred(),c=deferred(),seen:string[]=[];
 const client={getUser:(t:string)=>{seen.push(t);return u.promise;},getClaims:(t:string)=>{seen.push(t);return c.promise;}};
 const bridge=createWorkspaceSupabaseResponseBridge(client,()=>NOW),result=bridge.verify(token);token=TOKEN_B;
 client.getUser=async()=>sdkUser(AUTHOR_B);client.getClaims=async()=>sdkClaims(AUTHOR_B,SESSION_B);
 u.resolve(sdkUser());c.resolve(sdkClaims());assert.equal((await result as {token:string}).token,TOKEN_A);assert.deepEqual(seen,[TOKEN_A,TOKEN_A]);
});

test("SB-17: composition preserves existing immutable session binding and does not cache proofs",async()=>{
 let session=SESSION_A,calls=0;const bridge=createWorkspaceSupabaseResponseBridge({getUser:async()=>{calls++;return sdkUser();},getClaims:async()=>sdkClaims(AUTHOR_A,session)},()=>NOW);
 const p=createWorkspacePrincipalProvider(bridge,TOKEN_A,()=>NOW);assert.ok(await p.verify());session=SESSION_B;assert.equal(await p.verify(),null);
 session=SESSION_A;assert.ok(await p.verify());assert.equal(calls,3);
});

test("SB-18: SDK-shaped composition never calls fetch/getSession or initializes a real client",async(t)=>{
 let sessions=0;const client={...mockClient(),getSession(){sessions++;throw new Error("No session fallback");}};
 const mock=t.mock.method(globalThis,"fetch",()=>{throw new Error("Network forbidden");});
 try{assert.ok(await createWorkspacePrincipalProvider(createWorkspaceSupabaseResponseBridge(client,()=>NOW),TOKEN_A,()=>NOW).verify());assert.equal(sessions,0);assert.equal(mock.mock.callCount(),0);}
 finally{t.mock.restoreAll();}
});

// Policy fixtures are deliberately not production issuer/audience/role defaults.
const fixturePolicy=()=>({issuer:"https://synthetic.invalid/auth/v1",audiences:["synthetic-author"],roles:["authenticated"]});
function policyResponse(patch:Record<string,unknown>={}){return {data:{claims:{sub:AUTHOR_A,session_id:SESSION_A,exp:200,iss:"https://synthetic.invalid/auth/v1",aud:"synthetic-author",role:"authenticated",is_anonymous:false,...patch}},error:null};}
function policyProvider(response:unknown,policy:unknown=fixturePolicy(),clock=()=>NOW,user:unknown=sdkUser()){
 const client={getUser:async()=>user,getClaims:async()=>evaluateSyntheticPrincipalClaimPolicy(response,policy,clock())};
 return createWorkspacePrincipalProvider(createWorkspaceSupabaseResponseBridge(client,clock),TOKEN_A,clock);
}

test("N-01/N-14: explicit fixture policy composes through unchanged bridge and principal",async()=>{
 const p=await policyProvider(policyResponse()).verify();assert.deepEqual(p,{authorId:AUTHOR_A,sessionId:SESSION_A,tokenExpiresAt:200000,verifiedAt:NOW});assert.ok(Object.isFrozen(p));
 assert.ok(evaluateSyntheticPrincipalClaimPolicy(policyResponse({aud:["synthetic-author"],iat:90,nbf:99}),fixturePolicy(),NOW));
});
test("N-01: absent, malformed or token-derived policy cannot supply trusted defaults",async()=>{
 for(const policy of [null,undefined,{},[],{...fixturePolicy(),issuer:"https://another.invalid/auth/v1"},{...fixturePolicy(),audiences:[]},{...fixturePolicy(),roles:["service_role"]},{...fixturePolicy(),extra:true},Object.create(fixturePolicy())])assert.equal(evaluateSyntheticPrincipalClaimPolicy(policyResponse(),policy,NOW),null);
});
test("N-02: wrong issuer, malformed or expanded audience denies before projection",async()=>{
 for(const patch of [{iss:undefined},{iss:"https://evil.invalid"},{aud:undefined},{aud:1},{aud:[]},{aud:["synthetic-author","other"]},{aud:["synthetic-author","synthetic-author"]},{aud:[1]},{aud:"other"}])assert.equal(await policyProvider(policyResponse(patch)).verify(),null);
});
test("N-03: malformed subject/session or mismatched Auth-server user denies",async()=>{
 for(const patch of [{sub:"bad"},{sub:null},{session_id:undefined},{session_id:[]},{session_id:"bad"},{sub:AUTHOR_B}])assert.equal(await policyProvider(policyResponse(patch)).verify(),null);
 assert.equal(await policyProvider(policyResponse(),fixturePolicy(),()=>NOW,sdkUser(AUTHOR_B)).verify(),null);
});
test("N-04: roles, anonymous, unapproved AAL and metadata cannot elevate",async()=>{
 for(const patch of [{role:"service_role"},{role:undefined},{role:["authenticated"]},{is_anonymous:true},{is_anonymous:undefined},{is_anonymous:"false"},{aal:"aal1"},{aal:"aal2"},{aal:undefined},{user_metadata:{role:"authenticated"}},{app_metadata:{role:"authenticated"}}])assert.equal(await policyProvider(policyResponse(patch)).verify(),null);
});
test("N-05: unsafe, expired or coerced expiry denies",async()=>{
 for(const exp of [undefined,null,"200",true,0,-1,100,200.5,NaN,Infinity,Number.MAX_SAFE_INTEGER])assert.equal(await policyProvider(policyResponse({exp})).verify(),null);
});
test("N-05: unsupported/malformed/future or inconsistent time claims deny",async()=>{
 for(const patch of [{iat:undefined},{iat:null},{iat:"90"},{iat:100.1},{iat:101},{iat:-1},{nbf:101},{nbf:NaN},{iat:100,nbf:99},{auth_time:90},{expires_at:200}])assert.equal(await policyProvider(policyResponse(patch)).verify(),null);
 for(const now of [NaN,Infinity,-1,100000.1])assert.equal(evaluateSyntheticPrincipalClaimPolicy(policyResponse(),fixturePolicy(),now),null);
});
test("N-06/N-10: partial results and injected signature/key/algorithm failures deny",async()=>{
 for(const response of [null,undefined,[],{}, {data:null,error:null},{data:{claims:null},error:null},...['signature','key','algorithm'].map(reason=>({...policyResponse(),error:{reason}})),... [false,undefined,0,""] .map(error=>({...policyResponse(),error}))])assert.equal(await policyProvider(response).verify(),null);
 for(const method of ['getUser','getClaims'] as const){const client={getUser:async()=>sdkUser(),getClaims:async()=>evaluateSyntheticPrincipalClaimPolicy(policyResponse(),fixturePolicy(),NOW)};client[method]=async()=>{throw new Error('injected failed verification');};assert.equal(await createWorkspacePrincipalProvider(createWorkspaceSupabaseResponseBridge(client,()=>NOW),TOKEN_A,()=>NOW).verify(),null);}
});
test("N-07: composition preserves exact captured token and never adds SDK options",async()=>{
 const seen:unknown[][]=[];let token=TOKEN_A;
 const client={getUser:async(...args:unknown[])=>{seen.push(args);return sdkUser();},getClaims:async(...args:unknown[])=>{seen.push(args);return evaluateSyntheticPrincipalClaimPolicy(policyResponse(),fixturePolicy(),NOW);}};
 const p=createWorkspacePrincipalProvider(createWorkspaceSupabaseResponseBridge(client,()=>NOW),token,()=>NOW);token=TOKEN_B;assert.ok(await p.verify());assert.deepEqual(seen,[[TOKEN_A],[TOKEN_A]]);
});
test("N-08: reversed policy responses for concurrent authors stay isolated",async()=>{
 const ua=deferred(),ub=deferred(),ca=deferred(),cb=deferred();
 const client={getUser:(t:string)=>t===TOKEN_A?ua.promise:ub.promise,getClaims:async(t:string)=>evaluateSyntheticPrincipalClaimPolicy(await(t===TOKEN_A?ca.promise:cb.promise),fixturePolicy(),NOW)};
 const bridge=createWorkspaceSupabaseResponseBridge(client,()=>NOW);const a=createWorkspacePrincipalProvider(bridge,TOKEN_A,()=>NOW).verify(),b=createWorkspacePrincipalProvider(bridge,TOKEN_B,()=>NOW).verify();
 cb.resolve(policyResponse({sub:AUTHOR_B,session_id:SESSION_B}));ua.resolve(sdkUser());await tick();ub.resolve(sdkUser(AUTHOR_B));ca.resolve(policyResponse());assert.equal((await a)?.authorId,AUTHOR_A);assert.equal((await b)?.sessionId,SESSION_B);
});
test("N-08: policy success cannot reset pinned subject/session/expiry binding",async()=>{
 let response=policyResponse();let user=sdkUser();const p=createWorkspacePrincipalProvider(createWorkspaceSupabaseResponseBridge({getUser:async()=>user,getClaims:async()=>evaluateSyntheticPrincipalClaimPolicy(response,fixturePolicy(),NOW)},()=>NOW),TOKEN_A,()=>NOW);
 assert.ok(await p.verify());response=policyResponse({sub:AUTHOR_B,session_id:SESSION_B});user=sdkUser(AUTHOR_B);assert.equal(await p.verify(),null);response=policyResponse({exp:201});user=sdkUser();assert.equal(await p.verify(),null);response=policyResponse();assert.ok(await p.verify());
});
test("N-09: policy checks cannot launder 30-second freshness or expiry after await",async()=>{
 for(const end of [NOW+30000,NOW+30001,200000,NOW-1]){
  let now=NOW;const u=deferred();const client={getUser:()=>u.promise,getClaims:async()=>evaluateSyntheticPrincipalClaimPolicy(policyResponse(),fixturePolicy(),now)};
  const result=createWorkspacePrincipalProvider(createWorkspaceSupabaseResponseBridge(client,()=>now),TOKEN_A,()=>now).verify();await tick();now=end;u.resolve(sdkUser());const p=await result;if(end===NOW+30000)assert.equal(p?.verifiedAt,NOW);else assert.equal(p,null);
 }
});
test("N-11: passing identity policy never supplies session or writable authorization",async()=>{
 const mockedSession={revoked:true};const p=await policyProvider(policyResponse()).verify();assert.ok(p);assert.equal(mockedSession.revoked,true);assert.deepEqual(Object.keys(p).sort(),['authorId','sessionId','tokenExpiresAt','verifiedAt'].sort());assert.equal('writable' in p,false);assert.equal('activeSession' in p,false);
 // Active/revoked state remains UNKNOWN to this identity helper. N-12 is BLOCKED.
});
test("N-13: immutable snapshots retain neither caller policy mutation nor response references",async()=>{
 const policy=fixturePolicy(),response=policyResponse({aud:["synthetic-author"]});const result=evaluateSyntheticPrincipalClaimPolicy(response,policy,NOW);assert.ok(result);response.data.claims.sub=AUTHOR_B;policy.audiences[0]='other';assert.equal(result.data.claims.sub,AUTHOR_A);assert.deepEqual(result.data.claims.aud,['synthetic-author']);assert.ok(Object.isFrozen(result)&&Object.isFrozen(result.data)&&Object.isFrozen(result.data.claims)&&Object.isFrozen(result.data.claims.aud));assert.equal(Reflect.set(result.data.claims,'sub',AUTHOR_B),false);
});
test("N-13: accessors, inherited fields, symbols and sparse audience cannot execute policy data",async()=>{
 let reads=0;const response=policyResponse();Object.defineProperty(response.data.claims,'iss',{get(){reads++;return 'https://synthetic.invalid/auth/v1';}});assert.equal(evaluateSyntheticPrincipalClaimPolicy(response,fixturePolicy(),NOW),null);assert.equal(reads,0);
 const policy=fixturePolicy();Object.defineProperty(policy,'issuer',{get(){reads++;return 'https://synthetic.invalid/auth/v1';}});assert.equal(evaluateSyntheticPrincipalClaimPolicy(policyResponse(),policy,NOW),null);assert.equal(reads,0);
 for(const response of [Object.create(policyResponse()),policyResponse({[Symbol('extra')]:true}),policyResponse({aud:new Array(1)})])assert.equal(evaluateSyntheticPrincipalClaimPolicy(response,fixturePolicy(),NOW),null);
});
test("N-13: mock-only composition performs no network and logs no token or claims",async(t)=>{
 const fetch=t.mock.method(globalThis,'fetch',()=>{throw new Error('Network prohibited');});const log=t.mock.method(console,'log',()=>{});const error=t.mock.method(console,'error',()=>{});
 try{assert.ok(await policyProvider(policyResponse()).verify());assert.equal(await policyProvider(policyResponse({iss:'wrong'})).verify(),null);assert.equal(fetch.mock.callCount(),0);assert.equal(log.mock.callCount(),0);assert.equal(error.mock.callCount(),0);}finally{t.mock.restoreAll();}
});
