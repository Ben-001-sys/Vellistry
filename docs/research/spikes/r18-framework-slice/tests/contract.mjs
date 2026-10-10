// HTTP contract comparison: one shared domain implementation, two framework adapters.
// Synthetic hashed session rows are NOT Better Auth, password login or production security.
import assert from "node:assert/strict";
import crypto from "node:crypto";
import fs from "node:fs";
import pg from "pg";

const token=user=>crypto.createHash("sha256").update("R18 NONPRODUCTION "+user).digest("hex");
const doc=text=>({type:"doc",content:[{type:"paragraph",content:[{type:"text",text}]}]});
const db=new pg.Pool({connectionString:process.env.DATABASE_URL});

async function reset(){
 await db.query("DELETE FROM r18_http.revisions WHERE revision > 1");
 await db.query("UPDATE r18_http.chapters SET revision=1,document=$1::jsonb WHERE book_id='book-a'",
  [JSON.stringify(doc("Initial alice story"))]);
 await db.query("UPDATE r18_http.sessions SET expires_at=now()+interval '1 hour'");
}
async function examine(name,base){
 const results=[];
 const url=base+"/api/books/";
 const auth=user=>({cookie:"vsid="+token(user),"x-user-id":"alice"});
 async function call(method,book,body,headers={},chapter="chapter-1"){
  const t=performance.now();
  const response=await fetch(url+book+"/chapters/"+chapter,{
   method,
   headers:{...auth("alice"),...(method==="PUT"?{"content-type":"application/json",origin:base}:{}),...headers},
   ...(body!==undefined?{body:typeof body==="string"?body:JSON.stringify(body)}:{})
  });
  let json=null;try{json=await response.json()}catch{}
  return {status:response.status,body:json,ms:Math.round((performance.now()-t)*100)/100,
    cache:response.headers.get("cache-control")};
 }
 const check=async (label,fn)=>{await fn();results.push(label);console.log(name,"PASS",label)};
 await reset();
 await check("01 missing session cannot read",async()=>{
   const r=await call("GET","book-a",undefined,{cookie:""});
   assert.equal(r.status,401);
 });
 await check("02 opaque hashed session reads own book",async()=>{
   const r=await call("GET","book-a");
   assert.equal(r.status,200);assert.equal(r.body.revision,1);
   assert.equal(r.body.document.content[0].content[0].text,"Initial alice story");
   assert.match(r.cache??"",/no-store/);
 });
 await check("03 foreign book masked as not-found",async()=>{
   const r=await call("GET","book-b");assert.equal(r.status,404);
 });
 await check("04 forged user header does not switch book",async()=>{
   const r=await call("GET","book-b",undefined,{"x-user-id":"bob"});
   assert.equal(r.status,404);
 });
 await check("05 Bob can access Bob book with Bob cookie",async()=>{
   const r=await call("GET","book-b",undefined,{cookie:"vsid="+token("bob")});
   assert.equal(r.status,200);
 });
 await check("06 valid versioned manuscript save",async()=>{
   const r=await call("PUT","book-a",{expectedRevision:1,document:doc("Revised from "+name)});
   assert.equal(r.status,200);assert.equal(r.body.revision,2);
 });
 await check("07 stale retry does not overwrite accepted manuscript",async()=>{
   const r=await call("PUT","book-a",{expectedRevision:1,document:doc("Bad stale write")});
   assert.equal(r.status,409);
   const after=await call("GET","book-a");
   assert.equal(after.status,200);assert.equal(after.body.document.content[0].content[0].text,"Revised from "+name);
   const versions=await db.query("SELECT count(*)::int AS n FROM r18_http.revisions WHERE book_id='book-a'");
   assert.equal(versions.rows[0].n,2);
 });
 await check("08 cross-site origin denied",async()=>{
   const r=await call("PUT","book-a",{expectedRevision:2,document:doc("attack")},{origin:"https://attacker.test"});
   assert.equal(r.status,403);
 });
 await check("09 missing origin denied",async()=>{
   const r=await call("PUT","book-a",{expectedRevision:2,document:doc("attack")},{origin:""});
   assert.equal(r.status,403);
 });
 await check("10 non-Tiptap document rejected",async()=>{
   const r=await call("PUT","book-a",{expectedRevision:2,document:{type:"doc",content:[{type:"script"}]}});
   assert.equal(r.status,400);
 });
 await check("11 invalid JSON rejected",async()=>{
   const r=await call("PUT","book-a","{invalid JSON");
   assert.equal(r.status,400);
 });
 await check("12 foreign write denied",async()=>{
   const r=await call("PUT","book-b",{expectedRevision:1,document:doc("illegal")});
   assert.equal(r.status,404);
 });
 await check("13 competing writers: exactly one revision wins",async()=>{
   const batch=await Promise.all([
     call("PUT","book-a",{expectedRevision:2,document:doc("racer-a")}),
     call("PUT","book-a",{expectedRevision:2,document:doc("racer-b")})
   ]);
   assert.deepEqual(batch.map(r=>r.status).sort(),[200,409]);
   const curr=await call("GET","book-a");
   assert.equal(curr.body.revision,3);
   const revisions=await db.query("SELECT revision FROM r18_http.revisions WHERE book_id='book-a' ORDER BY revision");
   assert.deepEqual(revisions.rows.map(x=>x.revision),[1,2,3]);
 });
 await check("14 expired synthetic session rejected",async()=>{
   await db.query("UPDATE r18_http.sessions SET expires_at=now()-interval '1 second' WHERE user_id='bob'");
   const r=await call("GET","book-b",undefined,{cookie:"vsid="+token("bob")});
   assert.equal(r.status,401);
 });
 await check("15 illegitimate input cannot alter chapter path",async()=>{
   const r=await call("PUT","book-a",{expectedRevision:3,document:doc("not saved"),bookId:"book-b"},{},"missing-chapter");
   assert.equal(r.status,404);
 });
 await check("16 rich heading and bold persist without stripped data",async()=>{
   const rich={type:"doc",content:[
     {type:"heading",attrs:{level:1},content:[{type:"text",text:"A Chapter"}]},
     {type:"paragraph",content:[{type:"text",text:"A "},
       {type:"text",text:"bold phrase",marks:[{type:"bold"}]}]}
   ]};
   const r=await call("PUT","book-a",{expectedRevision:3,document:rich});
   assert.equal(r.status,200);
   const back=await call("GET","book-a");
   assert.deepEqual(back.body.document,rich);
   const row=await db.query("SELECT document FROM r18_http.chapters WHERE book_id='book-a'");
   assert.deepEqual(row.rows[0].document,rich);
 });
 await check("17 unsupported marks rejected without normalization",async()=>{
   const invalid={type:"doc",content:[{type:"paragraph",content:[
     {type:"text",text:"Not silently normalized",marks:[{type:"html"}]}
   ]}]};
   const r=await call("PUT","book-a",{expectedRevision:4,document:invalid});
   assert.equal(r.status,400);
   const back=await call("GET","book-a");
   assert.equal(back.body.revision,4);
 });
 return {adapter:name,passed:results.length,total:17,checks:results};
}
const output={environment:"R18 synthetic disposable PostgreSQL sessions",adapters:[]};
try{
 for(const [name,port] of [["next",3100],["nest",3101]]){
  output.adapters.push(await examine(name,"http://127.0.0.1:"+port));
 }
 fs.writeFileSync("http-contract-results.json",JSON.stringify(output,null,2));
 console.log("R18 HTTP contract complete",output.adapters.map(a=>a.adapter+":"+a.passed+"/"+a.total).join(" "));
}finally{await db.end();}
