#!/usr/bin/env node
/** K2B disposable research fixture: restricted NestJS + PostgreSQL gateway.
 * Runs only after K2B grant-lockdown test; no production Nest modules/migrations changed.
 */
import "reflect-metadata";
import assert from "node:assert/strict";
import crypto from "node:crypto";
import fs from "node:fs";
import {execFileSync} from "node:child_process";
import nestCommon from "@nestjs/common";
import nestCore from "@nestjs/core";
import pg from "pg";
import {createClient} from "@supabase/supabase-js";

const {Controller,Get,Post,Req,Module,UnauthorizedException,BadRequestException}=nestCommon;
const {NestFactory}=nestCore;
const {Pool}=pg;
const sbUrl=process.env.SUPABASE_URL;
const key=process.env.SUPABASE_PUBLISHABLE_KEY;
const adminKey=process.env.SUPABASE_TEST_SERVICE_KEY;
const dbUrl=process.env.DB_URL;
const oldNestUrl=process.env.VELLISTRY_TEST_API_URL??"http://127.0.0.1:4100";
const local=/^http:\/\/(?:localhost|127\.0\.0\.1):\d+$/;
if(!sbUrl||!key||!adminKey||!dbUrl||!local.test(sbUrl)||!local.test(oldNestUrl))
  throw Error("Refusing missing or nonlocal disposable research configuration");
const pgUrl=new URL(dbUrl);
if(!["localhost","127.0.0.1"].includes(pgUrl.hostname)||!pgUrl.port)
  throw Error("Refusing nonlocal database transport");
const tag=crypto.randomBytes(6).toString("hex");
const role="k2b_gateway_"+tag;
const rolePass=crypto.randomBytes(22).toString("hex");
const emailA="gateway-a-"+tag+"@example.com",emailB="gateway-b-"+tag+"@example.com";
const password="Disposable!"+crypto.randomBytes(14).toString("hex");
const authOptions={auth:{persistSession:false,autoRefreshToken:false,detectSessionInUrl:false}};
const sb=(jwt=null,k=key)=>createClient(sbUrl,k,{
  ...authOptions,...(jwt?{global:{headers:{Authorization:"Bearer "+jwt}}}:{})
});
const admin=sb(null,adminKey),alice=sb(),aliceTwo=sb(),bob=sb(),auth=sb();
const created=[],checks=[];
const report={research:"Nest-only private gateway test with local Supabase",
  checks,observations:{},production_auth_implementation:false,
  limitations:["No production route or migration","Only basic book CRUD; not chapters, storage, backups, Next SSR"]};
const pass=(label)=>{checks.push(label);console.log("PASS K2B-GATE-"+String(checks.length).padStart(2,"0"),label)};
function sql(input){
  return execFileSync("docker",["exec","-i","supabase_db_vellistry","psql",
    "-X","-q","-A","-t","-U","postgres","-d","postgres","-v","ON_ERROR_STOP=1"],
    {input,encoding:"utf8",timeout:20000});
}
function claims(token){
  try{return JSON.parse(Buffer.from(token.split(".")[1],"base64url").toString("utf8"));}
  catch{throw new UnauthorizedException();}
}
const uuid=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
pgUrl.username=role;
pgUrl.password=rolePass;
const pool=new Pool({connectionString:pgUrl.toString(),max:1,connectionTimeoutMillis:5000});
let app;

async function verified(req){
  const match=/^Bearer ([A-Za-z0-9_.-]+)$/.exec(req.headers.authorization??"");
  if(!match)throw new UnauthorizedException();
  const c=claims(match[1]);
  const r=await auth.auth.getUser(match[1]);
  if(r.error||!r.data.user?.id||c.sub!==r.data.user.id||
    !uuid.test(c.sub)||!uuid.test(c.session_id??"")||
    typeof c.exp!=="number"||c.exp<=Date.now()/1000)throw new UnauthorizedException();
  return {author:c.sub,session:c.session_id};
}
async function onPrivateDb(req,action){
  const {author,session}=await verified(req);
  const conn=await pool.connect();
  try{
    await conn.query("BEGIN");
    const alive=await conn.query("select k2b_research.session_alive($1::uuid,$2::uuid) active",[author,session]);
    if(alive.rows[0]?.active!==true)throw new UnauthorizedException();
    await conn.query("select set_config('app.k2b_research_author',$1,true)",[author]);
    const data=await action(conn,author);
    await conn.query("COMMIT");
    return data;
  }catch(e){await conn.query("ROLLBACK");throw e;}
  finally{conn.release();}
}
class ResearchController{
  async list(req){return onPrivateDb(req,async conn=>{
    const r=await conn.query("select id,title from k2b_research.books order by title");
    return {rows:r.rows};
  });}
  async create(req){
    const title=req.body?.title;
    if(typeof title!=="string"||title.length>120||!title.trim())
      throw new BadRequestException("Invalid title");
    return onPrivateDb(req,async(conn,author)=>{
      const r=await conn.query("insert into k2b_research.books(owner_id,title) values($1,$2) returning id,title",[author,title.trim()]);
      return r.rows[0];
    });
  }
}
Controller("research")(ResearchController);
Get("books")(ResearchController.prototype,"list",Object.getOwnPropertyDescriptor(ResearchController.prototype,"list"));
Post("books")(ResearchController.prototype,"create",Object.getOwnPropertyDescriptor(ResearchController.prototype,"create"));
Req()(ResearchController.prototype,"list",0);
Req()(ResearchController.prototype,"create",0);
class ResearchModule{}
Module({controllers:[ResearchController]})(ResearchModule);
async function request(token,method="GET",title){
  const r=await fetch("http://127.0.0.1:4120/research/books",{
    method,headers:{...(token?{Authorization:"Bearer "+token}:{}),
      ...(title?{"Content-Type":"application/json"}:{})},
    ...(title?{body:JSON.stringify({title})}:{})
  });
  let payload={};try{payload=await r.json();}catch{}
  return {status:r.status,payload};
}
try{
  // All dynamic SQL identifiers are generated exclusively from lowercase hex.
  // The login role is not a superuser, owner, or BYPASSRLS, and the only
  // SECURITY DEFINER helper discloses a yes/no session-liveness result.
  sql([
    "create role "+role+" login password '"+rolePass+"' nosuperuser nocreatedb nocreaterole noinherit nobypassrls;",
    "create schema k2b_research;",
    "create table k2b_research.books (id uuid primary key default gen_random_uuid(),owner_id uuid not null,title text not null);",
    "alter table k2b_research.books enable row level security;",
    "alter table k2b_research.books force row level security;",
    "create policy own_select on k2b_research.books for select to "+role+" using (owner_id=nullif(current_setting('app.k2b_research_author',true),'')::uuid);",
    "create policy own_insert on k2b_research.books for insert to "+role+" with check (owner_id=nullif(current_setting('app.k2b_research_author',true),'')::uuid);",
    "grant usage on schema k2b_research to "+role+";",
    "grant select,insert on k2b_research.books to "+role+";",
    "create function k2b_research.session_alive(_author uuid,_session uuid) returns boolean language sql stable security definer set search_path='' as $fn$ select exists(select 1 from auth.sessions s where s.user_id=_author and s.id=_session) $fn$;",
    "revoke all on function k2b_research.session_alive(uuid,uuid) from public;",
    "grant execute on function k2b_research.session_alive(uuid,uuid) to "+role+";"
  ].join("\n"));
  const roleInfo=await pool.query("select rolsuper,rolbypassrls from pg_roles where rolname=current_user");
  assert.equal(roleInfo.rows[0].rolsuper,false);
  assert.equal(roleInfo.rows[0].rolbypassrls,false);
  await assert.rejects(pool.query("select count(*) from auth.sessions"),/permission denied/i);
  pass("restricted Postgres role cannot bypass RLS or directly inspect auth.sessions");

  for(const [c,email] of [[alice,emailA],[bob,emailB]]){
    const s=await c.auth.signUp({email,password});assert.ifError(s.error);
    assert.ok(s.data.user?.id);created.push(s.data.user.id);
  }
  const loginA=await alice.auth.signInWithPassword({email:emailA,password});
  const loginA2=await aliceTwo.auth.signInWithPassword({email:emailA,password});
  const loginB=await bob.auth.signInWithPassword({email:emailB,password});
  for(const login of [loginA,loginA2,loginB])assert.ifError(login.error);
  const aToken=loginA.data.session.access_token;
  const a2Token=loginA2.data.session.access_token;
  const bToken=loginB.data.session.access_token;
  assert.notEqual(claims(aToken).sub,claims(bToken).sub);
  pass("Alice two real sessions and Bob one real session created");

  app=await NestFactory.create(ResearchModule,{logger:false});
  await app.listen(4120,"127.0.0.1");
  assert.equal((await request(null)).status,401);
  assert.equal((await request("bad-jwt")).status,401);
  pass("isolated NestJS gateway rejects missing/invalid credentials");

  const aCreated=await request(aToken,"POST","Alice synthetic private");
  const bCreated=await request(bToken,"POST","Bob synthetic private");
  assert.equal(aCreated.status,201);assert.equal(bCreated.status,201);
  const aRead=await request(aToken),bRead=await request(bToken),a2Read=await request(a2Token);
  assert.equal(aRead.status,200);assert.equal(bRead.status,200);assert.equal(a2Read.status,200);
  assert.deepEqual(aRead.payload.rows.map(x=>x.id),[aCreated.payload.id]);
  assert.deepEqual(bRead.payload.rows.map(x=>x.id),[bCreated.payload.id]);
  assert.deepEqual(a2Read.payload.rows.map(x=>x.id),[aCreated.payload.id]);
  pass("restricted Nest Postgres path supports authorized books and cross-author isolation");

  // Existing PR32 test ran first and intentionally revoked old public.books grants.
  const publicDirect=await sb(aToken).from("books").select("id");
  const privateDirect=await sb(aToken).schema("k2b_research").from("books").select("id");
  const oldNest=await fetch(new URL("/v1/books",oldNestUrl),
    {headers:{Authorization:"Bearer "+aToken},cache:"no-store"});
  assert.ok(publicDirect.error);
  assert.ok(privateDirect.error);
  assert.equal(oldNest.status,500);
  assert.equal((await request(aToken)).status,200);
  report.observations.transport={directPublicDenied:true,privateSchemaDenied:true,
    oldNestStatus:500,restrictedNestStatus:200};
  pass("new restricted gateway works where current public-Data-API Nest route fails");

  const conn=await pool.connect();
  try{
    await conn.query("BEGIN");
    await conn.query("select set_config('app.k2b_research_author',$1,true)",[claims(bToken).sub]);
    const forbidden=await conn.query("select id from k2b_research.books where id=$1",[aCreated.payload.id]);
    assert.equal(forbidden.rowCount,0);
    await conn.query("COMMIT");
  }finally{conn.release();}
  assert.deepEqual((await request(aToken)).payload.rows.map(x=>x.id),[aCreated.payload.id]);
  assert.deepEqual((await request(bToken)).payload.rows.map(x=>x.id),[bCreated.payload.id]);
  pass("RLS author filtering survives pooled connection reuse");

  const tokenInfo=claims(aToken);
  const active=await pool.query("select k2b_research.session_alive($1::uuid,$2::uuid) active",
    [tokenInfo.sub,tokenInfo.session_id]);
  assert.equal(active.rows[0].active,true);
  assert.ifError((await alice.auth.signOut({scope:"local"})).error);
  assert.ok(tokenInfo.exp>Date.now()/1000);
  const dead=await pool.query("select k2b_research.session_alive($1::uuid,$2::uuid) active",
    [tokenInfo.sub,tokenInfo.session_id]);
  assert.equal(dead.rows[0].active,false);
  assert.equal((await request(aToken)).status,401);
  assert.equal((await request(a2Token)).status,200);
  assert.equal((await request(bToken)).status,200);
  report.observations.revocation={oldJwtUnexpired:true,dbSessionBefore:true,
    dbSessionAfter:false,oldJwtGatewayStatus:401,otherAliceGatewayStatus:200,bobStatus:200};
  pass("revoked unexpired JWT denied by Nest gateway; other active sessions retained");

  assert.ifError((await aliceTwo.auth.signOut({scope:"global"})).error);
  assert.equal((await request(a2Token)).status,401);
  assert.equal((await request(bToken)).status,200);
  pass("global logout denies other Alice session without affecting Bob");
  pass("research-only transport experiment completed; no production module or migration changed");
}finally{
  if(app)await app.close().catch(()=>{});
  await pool.end().catch(()=>{});
  for(const id of created){try{await admin.auth.admin.deleteUser(id);}catch{}}
  fs.writeFileSync("k2b-private-gateway-observations.json",JSON.stringify(report,null,2)+"\n","utf8");
}
