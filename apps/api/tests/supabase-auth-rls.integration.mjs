#!/usr/bin/env node
/**
 * K2 security research against the REAL local Supabase stack + REAL Nest API.
 * Two real Auth accounts. CI-only privileged fixture key, never passed to Nest.
 * All manuscript content and credentials are synthetic.
 */
import assert from "node:assert/strict";
import crypto from "node:crypto";
import fs from "node:fs";
import { createClient } from "@supabase/supabase-js";

const url=process.env.SUPABASE_URL;
const anonKey=process.env.SUPABASE_PUBLISHABLE_KEY;
const privilegedFixtureKey=process.env.SUPABASE_TEST_SERVICE_KEY;
const api=process.env.VELLISTRY_TEST_API_URL ?? "http://127.0.0.1:4100";
const resultPath=process.env.K2_REPORT_PATH ?? "k2-auth-rls-results.json";
if(!url||!anonKey||!privilegedFixtureKey)throw new Error("Local Supabase environment not configured");
if(!/^http:\/\/(localhost|127\.0\.0\.1):\d+$/.test(url) ||
   !/^http:\/\/(localhost|127\.0\.0\.1):\d+$/.test(api))
 throw new Error("K2 integration may only use localhost Supabase and API endpoints");

const client=(key=anonKey,token=null)=>createClient(url,key,{
  global:token?{headers:{Authorization:"Bearer "+token}}:undefined,
  auth:{persistSession:false,autoRefreshToken:false,detectSessionInUrl:false}
});
const fixture=client(privilegedFixtureKey);
const alice=client(),bob=client(),anonymous=client();
const runTag=crypto.randomBytes(5).toString("hex");
const emailA="vellistry-k2-a-"+runTag+"@example.com";
const emailB="vellistry-k2-b-"+runTag+"@example.com";
const password="Synthetic-only!9-"+crypto.randomBytes(7).toString("hex");
const checks=[];
const observations={};
const createdUserIds=[];
const record=(name)=>{checks.push(name);console.log("PASS K2-"+String(checks.length).padStart(2,"0"),name)};
const document=text=>({type:"doc",content:[{type:"paragraph",content:[{type:"text",text}]}]});
const jsonHeaders=(token)=>({...token?{Authorization:"Bearer "+token}:{},
   "content-type":"application/json","x-user-id":"forged-arbitrary-user-id"});

async function request(method,token,body,headers={}){
 const response=await fetch(new URL("/v1/books",api),{
  method,headers:{...jsonHeaders(token),...headers},
  ...(body!==undefined?{body:JSON.stringify(body)}:{})
 });
 let data=null;try{data=await response.json()}catch{}
 return {status:response.status,data};
}

try{
 // Authentic registration and password login, not inserted auth.users rows.
 for(const [who,email] of [[alice,emailA],[bob,emailB]]){
  const {data,error}=await who.auth.signUp({email,password});
  assert.ifError(error);
  assert.ok(data.user?.id,"signup must create genuine Auth identity");
  createdUserIds.push(data.user.id);
 }
 const aSignin=await alice.auth.signInWithPassword({email:emailA,password});
 const bSignin=await bob.auth.signInWithPassword({email:emailB,password});
 assert.ifError(aSignin.error);assert.ifError(bSignin.error);
 const aToken=aSignin.data.session?.access_token;
 const bToken=bSignin.data.session?.access_token;
 assert.ok(aToken&&bToken&&aToken!==bToken);
 const aId=aSignin.data.user.id,bId=bSignin.data.user.id;
 assert.notEqual(aId,bId);
 record("real Supabase signup, password login, two distinct JWTs");

 let r=await request("GET",aToken);
 assert.equal(r.status,200);assert.deepEqual(r.data,[]);
 r=await request("GET",bToken);
 assert.equal(r.status,200);assert.deepEqual(r.data,[]);
 record("Nest verifies genuine Supabase access token for both authors");

 r=await request("GET",null);
 assert.equal(r.status,401);
 r=await request("GET","not-a-real-jwt");
 assert.equal(r.status,401);
 const payload=aToken.split(".")[1];
 assert.ok(payload,"real access token should be a JWT");
 const segments=aToken.split(".");
 segments[1]=(payload[0]==="a"?"b":"a")+payload.slice(1);
 r=await request("GET",segments.join("."));
 assert.equal(r.status,401);
 record("missing, malformed, tampered tokens rejected");

 const aa=await request("POST",aToken,{title:"Alice's invented novel"});
 const bb=await request("POST",bToken,{title:"Bob's unrelated novel"});
 assert.equal(aa.status,201);assert.equal(bb.status,201);
 assert.ok(aa.data?.id&&bb.data?.id);
 const aBook=aa.data.id,bBook=bb.data.id;
 const seeded=await fixture.from("books").select("id,owner_id").in("id",[aBook,bBook]);
 assert.ifError(seeded.error);
 assert.equal(seeded.data?.length,2);
 assert.equal(seeded.data.find(x=>x.id===aBook)?.owner_id,aId);
 assert.equal(seeded.data.find(x=>x.id===bBook)?.owner_id,bId);
 record("server-side auth.uid sets owner identity on book creation");

 const aList=await request("GET",aToken);
 const bList=await request("GET",bToken);
 assert.equal(aList.status,200);assert.equal(bList.status,200);
 assert.deepEqual(aList.data.map(x=>x.id),[aBook]);
 assert.deepEqual(bList.data.map(x=>x.id),[bBook]);
 record("Nest list scoped to caller JWT, same-name books do not leak");

 r=await request("GET",aToken,undefined,{"x-user-id":bId});
 assert.equal(r.status,200);assert.deepEqual(r.data.map(x=>x.id),[aBook]);
 r=await request("POST",aToken,{title:"Alice stays Alice",owner_id:bId},
     {"x-user-id":bId});
 assert.equal(r.status,201);
 const created=await fixture.from("books").select("owner_id").eq("id",r.data.id).single();
 assert.ifError(created.error);assert.equal(created.data.owner_id,aId);
 record("forged owner_id payload and identity header cannot become another author");

 const aliceDirect=client(anonKey,aToken),bobDirect=client(anonKey,bToken);
 let q=await aliceDirect.from("books").select("id").eq("id",bBook);
 assert.ifError(q.error);assert.deepEqual(q.data,[]);
 q=await bobDirect.from("books").select("id").eq("id",aBook);
 assert.ifError(q.error);assert.deepEqual(q.data,[]);
 record("direct Data API cannot read cross-author books");

 q=await aliceDirect.from("books")
   .insert({title:"forbidden owner substitution",owner_id:bId}).select("id");
 assert.ok(q.error,"RLS must deny insertion with different owner");
 record("direct Data API rejects owner_id spoof on INSERT");

 q=await bobDirect.from("books").update({title:"FOREIGN MUTATION"}).eq("id",aBook).select();
 assert.ifError(q.error);assert.deepEqual(q.data,[]);
 q=await aliceDirect.from("books").update({owner_id:bId}).eq("id",aBook).select();
 assert.ok(q.error,"RLS must reject owner transfer");
 record("cross-book updates blocked; owner reassignment denied");

 q=await anonymous.from("books").select("id");
 assert.ok(q.error||!q.data?.length,"unauthenticated cannot read private books");
 q=await anonymous.from("books").insert({title:"unauthorized"}).select("id");
 assert.ok(q.error,"unauthenticated cannot create books");
 record("anon role cannot read or insert owner books");

 // privileged key is used ONLY by this test fixture for data seeding/cleanup.
 // The actual Nest author API receives only user access JWTs + publishable key.
 const chapterA=crypto.randomUUID(),chapterB=crypto.randomUUID();
 const cs=await fixture.from("chapters").insert([
  {id:chapterA,book_id:aBook,title:"Alice's secret",position:0,accepted_document:document("Alice's invented secret")},
  {id:chapterB,book_id:bBook,title:"Bob's secret",position:0,accepted_document:document("Bob's invented secret")}
 ]).select("id");
 assert.ifError(cs.error);assert.equal(cs.data?.length,2);
 const revs=await fixture.from("chapter_revisions").insert([
  {book_id:aBook,chapter_id:chapterA,revision:1,document:document("Alice's invented secret")},
  {book_id:bBook,chapter_id:chapterB,revision:1,document:document("Bob's invented secret")}
 ]);
 assert.ifError(revs.error);
 record("test-only privileged fixture creates synthetic chapters and revisions");

 const aChapters=await aliceDirect.from("chapters").select("id,book_id");
 const bChapters=await bobDirect.from("chapters").select("id,book_id");
 assert.ifError(aChapters.error);assert.ifError(bChapters.error);
 assert.deepEqual(aChapters.data.map(x=>x.id),[chapterA]);
 assert.deepEqual(bChapters.data.map(x=>x.id),[chapterB]);
 record("chapter read RLS isolates book-scoped manuscripts");

 const aRevs=await aliceDirect.from("chapter_revisions").select("chapter_id,revision");
 const bRevs=await bobDirect.from("chapter_revisions").select("chapter_id,revision");
 assert.ifError(aRevs.error);assert.ifError(bRevs.error);
 assert.deepEqual(aRevs.data.map(x=>x.chapter_id),[chapterA]);
 assert.deepEqual(bRevs.data.map(x=>x.chapter_id),[chapterB]);
 record("immutable accepted revision reads isolated across authors");

 const beforeChapter=await aliceDirect.from("chapters").select("title").eq("id",chapterA).single();
 assert.ifError(beforeChapter.error);
 q=await aliceDirect.from("chapters").update({title:"changed"}).eq("id",chapterA).select("id");
 assert.ok(q.error,"authenticated must lack direct chapter UPDATE privilege");
 const afterChapter=await aliceDirect.from("chapters").select("title").eq("id",chapterA).single();
 assert.ifError(afterChapter.error);
 assert.equal(afterChapter.data.title,beforeChapter.data.title,
   "a denied mutation must not change the accepted chapter");
 q=await aliceDirect.from("chapter_revisions")
   .insert({book_id:aBook,chapter_id:chapterA,revision:2,document:document("fake revision")});
 assert.ok(q.error,"author must not insert unapproved revision record");
 record("direct chapter and revision writes blocked pending transactional save RPC");

 const bad=await request("POST",aToken,{title:"   "});
 assert.equal(bad.status,400);
 const huge=await request("POST",aToken,{title:"T".repeat(121)});
 assert.equal(huge.status,400);
 record("Nest rejects malformed and oversized author data");

 q=await bobDirect.from("books").delete().eq("id",aBook).select("id");
 assert.ifError(q.error);assert.deepEqual(q.data,[]);
 const retained=await aliceDirect.from("books").select("id").eq("id",aBook);
 assert.ifError(retained.error);assert.equal(retained.data.length,1);
 record("cross-author DELETE cannot remove private book");

 // Diagnostic, NOT a pass/fail assertion of immediate revocation.
 // Official Supabase docs: an already issued access JWT may remain usable until exp.
 const signedOut=await alice.auth.signOut({scope:"local"});
 assert.ifError(signedOut.error);
 const after=await request("GET",aToken);
 const directAfter=await aliceDirect.from("books").select("id");
 observations.accessTokenAfterSignout={
  nestHttpStatus:after.status,
  directDataApiAccepted:!directAfter.error,
  oldAccessTokenStillReadsBooks:after.status===200,
  interpretation:"Diagnostic only: signed-out access JWT may remain valid until expiration. Extra session_id check needed if immediate revocation is a product requirement."
 };
 console.log("OBSERVED K2 logout old JWT: Nest HTTP",after.status,
      "direct Data API accepted",!directAfter.error);
 record("sign-out exposure measured without making false immediate-revocation guarantee");

 console.log("K2 COMPLETE",checks.length,"positive and negative test groups");
} finally {
  // Test-only privileged account cleanup. Never print the credential.
  for(const id of createdUserIds){
   try{await fixture.auth.admin.deleteUser(id)}catch{}
  }
  const report={
   experiment:"K2-local-supabase-auth-rls",
   fixture:"two generated Auth email/password accounts, synthetic books/chapters",
   groupsCompleted:checks.length,checks,
   observations,
   requiredFollowup:["Next.js SSR proxy/session refresh", "JWT signout/revocation security policy",
      "multiple browser sessions", "real chapter write RPC", "same-origin CSRF checks"],
   limitations:["local development stack only","test-only admin key used for fixture setup/cleanup",
      "no public deployment","no guarantees of immediate JWT invalidation after signout"]
  };
  fs.writeFileSync(resultPath,JSON.stringify(report,null,2));
}
