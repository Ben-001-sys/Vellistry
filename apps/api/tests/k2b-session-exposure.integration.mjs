#!/usr/bin/env node
/**
 * K2B: Real local Supabase session exposure study, NOT app feature code.
 * Uses two sign-in sessions for Alice and one for Bob, synthetic content.
 * A test-admin key is used only to delete generated accounts after tests.
 */
import assert from "node:assert/strict";
import crypto from "node:crypto";
import fs from "node:fs";
import {createClient} from "@supabase/supabase-js";

const url=process.env.SUPABASE_URL;
const key=process.env.SUPABASE_PUBLISHABLE_KEY;
const fixtureKey=process.env.SUPABASE_TEST_SERVICE_KEY;
const api=process.env.VELLISTRY_TEST_API_URL??"http://127.0.0.1:4100";
if(!url||!key||!fixtureKey)throw new Error("Missing local disposable Supabase variables");
if(!/^http:\/\/(localhost|127\.0\.0\.1):\d+$/.test(url)
 ||!/^http:\/\/(localhost|127\.0\.0\.1):\d+$/.test(api))
 throw new Error("Refusing to test non-local Supabase or Nest API");
const options={auth:{persistSession:false,autoRefreshToken:false,detectSessionInUrl:false}};
const client=(token=null,k=key)=>createClient(url,k,{
 ...options,...(token?{global:{headers:{Authorization:"Bearer "+token}}}:{})
});
const setup=client(null,fixtureKey);
const alicePrimary=client(),aliceSecondary=client(),bob=client();
const tag=crypto.randomBytes(5).toString("hex");
const password="FixtureOnly!-"+crypto.randomBytes(12).toString("hex");
const emailA="vellistry-k2b-a-"+tag+"@example.com",emailB="vellistry-k2b-b-"+tag+"@example.com";
const ids=[];
const observations={};
const groups=[];
const group=(name)=>{groups.push(name);console.log("PASS K2B-"+String(groups.length).padStart(2,"0"),name)};
const claims=(jwt)=>JSON.parse(Buffer.from(jwt.split(".")[1],"base64url").toString("utf-8"));
const read=async(jwt)=>client(jwt).from("books").select("id,title");
const viaNest=async(jwt)=>fetch(new URL("/v1/books",api),{
 headers:{Authorization:"Bearer "+jwt},cache:"no-store"
}).then(r=>r.status);
const sanitized=(value)=>({error:!!value.error,rows:value.data?.length??null});

try{
 for(const [which,email] of [[alicePrimary,emailA],[bob,emailB]]){
  const {data,error}=await which.auth.signUp({email,password});
  assert.ifError(error);
  assert.ok(data.user?.id);
  ids.push(data.user.id);
 }
 const primary=await alicePrimary.auth.signInWithPassword({email:emailA,password});
 const secondary=await aliceSecondary.auth.signInWithPassword({email:emailA,password});
 const b=await bob.auth.signInWithPassword({email:emailB,password});
 assert.ifError(primary.error);assert.ifError(secondary.error);assert.ifError(b.error);
 const first=primary.data.session,second=secondary.data.session,bSession=b.data.session;
 assert.ok(first?.access_token&&first.refresh_token&&second?.access_token&&second.refresh_token);
 assert.ok(bSession?.access_token);
 assert.notEqual(first.access_token,second.access_token);
 const c1=claims(first.access_token),c2=claims(second.access_token),cb=claims(bSession.access_token);
 assert.equal(c1.sub,c2.sub);assert.notEqual(c1.sub,cb.sub);
 assert.ok(c1.session_id&&c2.session_id&&c1.session_id!==c2.session_id);
 group("two independent Alice sessions, one Bob session, unique signed session_ids");

 const aa=await client(first.access_token).from("books").insert({title:"Alice K2B synthetic"}).select("id").single();
 const bb=await client(bSession.access_token).from("books").insert({title:"Bob K2B synthetic"}).select("id").single();
 assert.ifError(aa.error);assert.ifError(bb.error);
 assert.ok(aa.data?.id&&bb.data?.id);
 const initial1=await read(first.access_token),initial2=await read(second.access_token),initialBob=await read(bSession.access_token);
 assert.ifError(initial1.error);assert.ifError(initial2.error);assert.ifError(initialBob.error);
 assert.deepEqual(initial1.data.map(x=>x.id),[aa.data.id]);
 assert.deepEqual(initial2.data.map(x=>x.id),[aa.data.id]);
 assert.deepEqual(initialBob.data.map(x=>x.id),[bb.data.id]);
 group("both Alice sessions authorized, Bob's data remains isolated");

 const logoutPrimary=await alicePrimary.auth.signOut({scope:"local"});
 assert.ifError(logoutPrimary.error);
 const afterLocal=await read(first.access_token);
 const afterLocalNest=await viaNest(first.access_token);
 const secondaryAfter=await read(second.access_token);
 const secondaryNest=await viaNest(second.access_token);
 observations.afterLocalSignOut={
  oldAccessJwtDirectPostgrest:sanitized(afterLocal),
  oldAccessJwtNestStatus:afterLocalNest,
  otherDevicePostgrest:sanitized(secondaryAfter),
  otherDeviceNestStatus:secondaryNest
 };
 assert.ifError(secondaryAfter.error);
 assert.deepEqual(secondaryAfter.data.map(x=>x.id),[aa.data.id]);
 assert.equal(secondaryNest,200);
 group("local signout does not terminate independently signed-in Alice session");

 const retryFirst=await client().auth.refreshSession({refresh_token:first.refresh_token});
 observations.revokedPrimaryRefreshDenied=!!retryFirst.error;
 assert.ok(retryFirst.error,"revoked local-session refresh token must not refresh");
 group("signed-out primary refresh token cannot renew session");

 // Diagnostic of the old issued JWT, not a claim that logout invalidates its signature.
 const firstReadable=!afterLocal.error&&afterLocal.data.some(x=>x.id===aa.data.id);
 observations.afterLocalSignOut.oldJwtReadsAliceBook=firstReadable;
 console.log("OBSERVED K2B local signout: old JWT PostgREST rows",
   afterLocal.data?.length??"ERROR","Nest status",afterLocalNest,
   "old access JWT reads own book",firstReadable);
 group("post-signout PostgREST row exposure measured, not assumed or hidden");

 const switchBob=await client(bSession.access_token).from("books").select("id");
 assert.ifError(switchBob.error);assert.deepEqual(switchBob.data.map(x=>x.id),[bb.data.id]);
 group("another account still cannot read signed-out Alice's private book");

 const logoutOthers=await aliceSecondary.auth.signOut({scope:"global"});
 assert.ifError(logoutOthers.error);
 const afterGlobal=await read(second.access_token);
 const afterGlobalNest=await viaNest(second.access_token);
 observations.afterGlobalSignOut={
  previouslyIssuedJwtDirectPostgrest:sanitized(afterGlobal),
  previouslyIssuedJwtNestStatus:afterGlobalNest,
  oldJwtReadsAliceBook:!afterGlobal.error&&afterGlobal.data.some(x=>x.id===aa.data.id)
 };
 const retrySecond=await client().auth.refreshSession({refresh_token:second.refresh_token});
 observations.revokedSecondaryRefreshDenied=!!retrySecond.error;
 assert.ok(retrySecond.error,"global signout must revoke second refresh token");
 group("global signout revokes refresh token, measures remaining signed access JWT");

 const stillBob=await read(bSession.access_token);
 assert.ifError(stillBob.error);assert.deepEqual(stillBob.data.map(x=>x.id),[bb.data.id]);
 group("another author's valid session remains unaffected by Alice logout");

 const untrusted=await client().auth.getClaims(first.access_token);
 const freshUser=await client().auth.getUser(first.access_token);
 observations.oldJwtVerification={
  getClaimsError:!!untrusted.error,getUserError:!!freshUser.error,
  note:"getClaims verifies cryptographic JWT and expiry, not ongoing session existence"
 };
 group("getClaims versus fresh getUser behavior measured without equating checks");

 console.log("K2B COMPLETE",groups.length,"test and observation groups");
}finally{
 for(const id of ids)try{await setup.auth.admin.deleteUser(id)}catch{}
 fs.writeFileSync("k2b-session-observations.json",JSON.stringify({
   experiment:"K2B real local Supabase Auth session-exposure study",
   groups,observations,
   noTestKeysOrTokensSaved:true,
   limitation:"Observations from disposable local Supabase only; no Next.js browser/SSR refresh or secure production session proof."
 },null,2)+"\n");
}
