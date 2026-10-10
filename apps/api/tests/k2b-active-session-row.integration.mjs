#!/usr/bin/env node
/**
 * RESEARCH ONLY: Inspect auth.sessions after local/global logout in disposable
 * local Supabase. This is not a production authorization mechanism or Nest patch.
 *
 * Never use hosted Supabase, real manuscript content, or log tokens/passwords.
 * Uses privileged SQL only in the throwaway CI fixture. Any candidate deployed
 * gateway needs an independently reviewed least-privilege server DB path.
 */
import assert from "node:assert/strict";
import crypto from "node:crypto";
import fs from "node:fs";
import {execFileSync} from "node:child_process";
import {createClient} from "@supabase/supabase-js";

const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_PUBLISHABLE_KEY;
const fixtureKey = process.env.SUPABASE_TEST_SERVICE_KEY;
const api = process.env.VELLISTRY_TEST_API_URL ?? "http://127.0.0.1:4100";
const LOCAL = /^http:\/\/(?:localhost|127\.0\.0\.1):\d+$/;
if (!url || !key || !fixtureKey || !LOCAL.test(url) || !LOCAL.test(api)) {
  throw new Error("Refusing nonlocal/missing disposable Supabase or Nest test configuration");
}
const options = {auth:{persistSession:false,autoRefreshToken:false,detectSessionInUrl:false}};
function makeClient(token=null, accessKey=key) {
  return createClient(url,accessKey,{
    ...options,...(token?{global:{headers:{Authorization:"Bearer "+token}}}:{})
  });
}
function claims(token) {
  const raw=token.split(".")[1];
  if(!raw) throw new Error("Test token has no JWT claims");
  return JSON.parse(Buffer.from(raw,"base64url").toString("utf8"));
}
const UUID=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
function sessionCount(token) {
  const c=claims(token);
  if(!UUID.test(c.session_id??"")||!UUID.test(c.sub??"")) throw Error("Unexpected JWT session identity");
  // The SQL is never exposed to an HTTP route, and interpolated values are
  // strictly validated UUID strings inside this disposable test runner only.
  const sql="select count(*) from auth.sessions where id = '"+c.session_id+"'::uuid and user_id = '"+c.sub+"'::uuid;";
  const out=execFileSync("docker",["exec","-i","supabase_db_vellistry",
    "psql","-X","-A","-t","-U","postgres","-d","postgres","-v","ON_ERROR_STOP=1","-c",sql],
    {encoding:"utf8",timeout:20000}).trim();
  if(!/^\d+$/.test(out))throw new Error("Unexpected session query result");
  return Number(out);
}
async function nestStatus(token) {
  const r=await fetch(new URL("/v1/books",api),
    {headers:{Authorization:"Bearer "+token},cache:"no-store"});
  return r.status;
}
const setup=makeClient(null,fixtureKey);
const aliceA=makeClient(),aliceB=makeClient(),bob=makeClient();
const tag=crypto.randomBytes(6).toString("hex");
const password="ProbeOnly!"+crypto.randomBytes(14).toString("hex");
const emailA="session-probe-a-"+tag+"@example.com";
const emailB="session-probe-b-"+tag+"@example.com";
const created=[];
const checks=[];
const evidence={experiment:"K2B session-row liveness against actual local Supabase Auth",
  prior_production_security_proof:false,checks,observations:{},
  limitation:"Privileged read only in disposable SQL fixture; not a Nest DB transport or production security gate."};
function pass(s){checks.push(s);console.log("PASS K2B-LIVE-"+String(checks.length).padStart(2,"0"),s);}

try{
  for(const [cl,email] of [[aliceA,emailA],[bob,emailB]]){
    const signed=await cl.auth.signUp({email,password});
    assert.ifError(signed.error);
    assert.ok(signed.data.user?.id);
    created.push(signed.data.user.id);
  }
  const a=await aliceA.auth.signInWithPassword({email:emailA,password});
  const aOther=await aliceB.auth.signInWithPassword({email:emailA,password});
  const b=await bob.auth.signInWithPassword({email:emailB,password});
  for(const login of [a,aOther,b]){assert.ifError(login.error);assert.ok(login.data.session?.access_token)}
  const aToken=a.data.session.access_token, otherToken=aOther.data.session.access_token;
  const bToken=b.data.session.access_token;
  const cA=claims(aToken), cOther=claims(otherToken);
  assert.equal(cA.sub,cOther.sub);
  assert.notEqual(cA.session_id,cOther.session_id);
  assert.ok(cA.exp>Date.now()/1000);
  const baseline=[sessionCount(aToken),sessionCount(otherToken),sessionCount(bToken)];
  evidence.observations.baselineSessionRows=baseline;
  assert.deepEqual(baseline,[1,1,1]);
  assert.equal(await nestStatus(aToken),200);
  assert.equal(await nestStatus(otherToken),200);
  pass("three live session IDs have exactly one database row each");

  const synthetic=await makeClient(aToken).from("books").insert({title:"Local session-liveness synthetic book"}).select("id").single();
  assert.ifError(synthetic.error);
  assert.ok(synthetic.data.id);
  pass("protected synthetic book created for authorized author");

  assert.ifError((await aliceA.auth.signOut({scope:"local"})).error);
  const primaryRows=sessionCount(aToken),otherRows=sessionCount(otherToken),bobRows=sessionCount(bToken);
  const oldNest=await nestStatus(aToken),otherNest=await nestStatus(otherToken);
  evidence.observations.afterLocalLogout={
    signedOutPrimarySessionRows:primaryRows,
    independentAliceSessionRows:otherRows,
    bobSessionRows:bobRows,
    oldJwtStillBeforeExpiry:claims(aToken).exp>Date.now()/1000,
    oldJwtNestStatus:oldNest,
    independentAliceNestStatus:otherNest
  };
  assert.equal(primaryRows,0,"Signed-out session should no longer exist in auth.sessions");
  assert.equal(otherRows,1,"Local logout must not remove other Alice session");
  assert.equal(bobRows,1);
  assert.equal(otherNest,200);
  assert.ok(claims(aToken).exp>Date.now()/1000);
  pass("local signout removes only the primary session database row while old JWT remains unexpired");

  const direct=await makeClient(aToken).from("books").select("id").eq("id",synthetic.data.id);
  evidence.observations.afterLocalLogout.oldJwtDirectPostgrest={
    returnedRows:direct.data?.length??null,error:!!direct.error
  };
  // Measure direct API residual access, not falsely assert it is protected.
  evidence.observations.afterLocalLogout.hypotheticalSessionCheckWouldReject=primaryRows===0;
  pass("measured old JWT direct API access separately from session-row liveness");

  assert.ifError((await aliceB.auth.signOut({scope:"global"})).error);
  const afterGlobal=[sessionCount(aToken),sessionCount(otherToken),sessionCount(bToken)];
  evidence.observations.afterGlobalLogoutSessionRows=afterGlobal;
  assert.deepEqual(afterGlobal,[0,0,1]);
  assert.equal(await nestStatus(bToken),200);
  pass("global logout removes both Alice session rows without revoking Bob's session");

  pass("session-row observation completed; no app role, grant or production code changed");
} finally {
  for(const id of created){
    try{await setup.auth.admin.deleteUser(id);}catch{/* disposable CI teardown */}
  }
  fs.writeFileSync("k2b-live-session-row-observations.json",
    JSON.stringify(evidence,null,2)+"\n",{encoding:"utf8"});
}
