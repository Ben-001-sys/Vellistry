#!/usr/bin/env node
/** K2B research only. Disposable local Supabase; never apply to a production DB.
 * The second phase intentionally disables the existing Nest Data API transport.
 */
import assert from "node:assert/strict";
import crypto from "node:crypto";
import {execFileSync} from "node:child_process";
import fs from "node:fs";
import {createClient} from "@supabase/supabase-js";

const url=process.env.SUPABASE_URL,key=process.env.SUPABASE_PUBLISHABLE_KEY;
const testKey=process.env.SUPABASE_TEST_SERVICE_KEY;
const api=process.env.VELLISTRY_TEST_API_URL??"http://127.0.0.1:4100";
if(!url||!key||!testKey)throw Error("Missing local Supabase test variables");
for(const ep of [url,api])if(!/^http:\/\/(localhost|127\.0\.0\.1):\d+$/.test(ep))
 throw Error("Refuse nonlocal experiment");
const options={auth:{persistSession:false,autoRefreshToken:false,detectSessionInUrl:false}};
const make=(jwt=null,k=key)=>createClient(url,k,{
 ...options,...(jwt?{global:{headers:{Authorization:"Bearer "+jwt}}}:{})
});
const admin=make(null,testKey),alice=make(),bob=make();
const tag=crypto.randomBytes(6).toString("hex");
const password="ResearchOnly-9!"+crypto.randomBytes(9).toString("hex");
const created=[],checks=[];
const report={research:"K2B explicit table privilege lockdown",checks,observations:{},
 caveats:["Local disposable Supabase only","SQL is run only via the trusted test runner",
 "Second stage intentionally breaks the current Nest PostgREST implementation",
 "Not a production-ready implementation of Nest-only manuscript access"]};
const note=(s)=>{checks.push(s);console.log("PASS K2B-LOCK-"+String(checks.length).padStart(2,"0"),s)};
const query=(jwt,table)=>make(jwt).from(table).select("id");
const nest=(jwt)=>fetch(new URL("/v1/books",api),
 {headers:{Authorization:"Bearer "+jwt},cache:"no-store"}).then(r=>r.status);
function privilegedSQL(sql){
 // Database container name comes from the repo's local project_id = vellistry.
 const output=execFileSync("docker",["exec","-i","supabase_db_vellistry","psql",
  "-U","postgres","-d","postgres","-v","ON_ERROR_STOP=1"],
  {input:sql,encoding:"utf8",timeout:20000});
 assert.ok(output.includes("REVOKE"));
}
try{
 const tokens=[];
 for(const [who,email] of [[alice,"lock-a-"+tag+"@example.com"],[bob,"lock-b-"+tag+"@example.com"]]){
  const s=await who.auth.signUp({email,password});
  assert.ifError(s.error);assert.ok(s.data.user?.id);
  created.push(s.data.user.id);
  const l=await who.auth.signInWithPassword({email,password});
  assert.ifError(l.error);assert.ok(l.data.session?.access_token);
  tokens.push(l.data.session.access_token);
 }
 const [aToken,bToken]=tokens;
 const aBook=await make(aToken).from("books").insert({title:"Alice research manuscript"}).select("id").single();
 const bBook=await make(bToken).from("books").insert({title:"Bob research manuscript"}).select("id").single();
 assert.ifError(aBook.error);assert.ifError(bBook.error);
 const chapterId=crypto.randomUUID();
 const seed=await admin.from("chapters").insert({id:chapterId,book_id:aBook.data.id,
  title:"Synthetic secret chapter",position:0,
  accepted_document:{type:"doc",content:[{type:"paragraph",content:[{type:"text",text:"Synthetic secret"}]}]}});
 assert.ifError(seed.error);
 const before=await make(aToken).from("chapters").select("id,accepted_document").eq("id",chapterId);
 assert.ifError(before.error);assert.equal(before.data.length,1);
 assert.equal(await nest(aToken),200);
 note("before grant change, owner can read own chapter and Nest books API works");

 // Stage 1: deny only manuscript body tables to public Data API authenticated role.
 privilegedSQL("revoke select on table public.chapters,public.chapter_revisions from authenticated;\n");
 const blocked=await make(aToken).from("chapters").select("id,accepted_document").eq("id",chapterId);
 assert.ok(blocked.error,"Direct author manuscript read must be denied at SQL grant layer");
 const revBlocked=await make(aToken).from("chapter_revisions").select("revision");
 assert.ok(revBlocked.error);
 report.observations.stage1={chapterSelectDenied:true,revisionSelectDenied:true,
  chapterErrorCode:blocked.error.code,revisionErrorCode:revBlocked.error.code};
 note("stage 1: direct Data API chapter and revision reads denied by table grants");

 const bookStill=await query(aToken,"books");
 assert.ifError(bookStill.error);assert.ok(bookStill.data.some(x=>x.id===aBook.data.id));
 assert.equal(await nest(aToken),200);
 const bobData=await query(bToken,"books");
 assert.ifError(bobData.error);assert.deepEqual(bobData.data.map(x=>x.id),[bBook.data.id]);
 note("stage 1: owner books still work through Nest and two accounts remain isolated");

 const verified=await make().auth.getUser(aToken);
 assert.ifError(verified.error);assert.ok(verified.data.user?.id);
 note("Auth identity remains functional despite direct chapter table lockdown");

 // Stage 2: demonstrate the unavoidable integration break if books are also revoked
 // without replacing Nest's current supabase-js/PostgREST user transport.
 privilegedSQL("revoke select,insert,update,delete on table public.books from authenticated;\n");
 const booksBlocked=await query(aToken,"books");
 assert.ok(booksBlocked.error);
 const nestAfter=await nest(aToken);
 assert.equal(nestAfter,500,"Current Nest transport should fail when books grants are revoked");
 report.observations.stage2={directBookSelectDenied:true,nestBookHttpStatus:nestAfter,
  warning:"Nest needs a server-only least-privilege DB access redesign before changing books grants"};
 note("stage 2: revoking books protects direct Data API but BREAKS existing Nest books service");

 const stillAuth=await make().auth.getUser(bToken);
 assert.ifError(stillAuth.error);
 note("Auth server and independently signed-in Bob identity still available");
 console.log("K2B LOCKDOWN COMPLETE",checks.length,"verified groups");
}finally{
 for(const userId of created)try{await admin.auth.admin.deleteUser(userId)}catch{}
 fs.writeFileSync("k2b-lockdown-observations.json",JSON.stringify(report,null,2)+"\n");
}
