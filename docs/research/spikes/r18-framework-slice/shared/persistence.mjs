// R18 synthetic session + revision contract. Not a production auth system.
import crypto from "node:crypto";
import pg from "pg";

const {Pool}=pg;
const pool=new Pool({connectionString: process.env.DATABASE_URL,
  max:4, connectionTimeoutMillis:3000, idleTimeoutMillis:8000});
const originPattern=process.env.VELLISTRY_TEST_ORIGIN ?? "http://127.0.0.1";
const sha=s=>crypto.createHash("sha256").update(s).digest("hex");

export function normalizePayload(p) {
  if(!p || typeof p !== "object" || Array.isArray(p) ||
     !Number.isSafeInteger(p.expectedRevision) || p.expectedRevision < 1)
    return null;
  const doc=p.document;
  if(!doc || doc.type!=="doc" || !Array.isArray(doc.content) ||
     doc.content.length>100 || JSON.stringify(doc).length>120000)
    return null;
  // Pair 02 research boundary: allow a small, explicit subset of the
  // already-selected Tiptap 3 JSON document schema, never silently strip
  // unsupported marks/attributes. This is NOT the shipping validation schema.
  for(const node of doc.content){
    if(!node || typeof node!=="object" || Array.isArray(node) ||
      !["paragraph","heading"].includes(node.type) ||
      !Array.isArray(node.content) || node.content.length>100)return null;
    if(node.type==="heading"){
      if(!node.attrs || !Number.isInteger(node.attrs.level) ||
        node.attrs.level<1 || node.attrs.level>3 ||
        Object.keys(node.attrs).some(k=>k!=="level"))return null;
    }else if(Object.hasOwn(node,"attrs"))return null;
    if(Object.keys(node).some(k=>!["type","content","attrs"].includes(k)))return null;
    for(const part of node.content){
      if(!part || part.type!=="text" || typeof part.text!=="string" ||
        !part.text.length || part.text.length>30000)return null;
      if(Object.keys(part).some(k=>!["type","text","marks"].includes(k)))return null;
      if(part.marks!==undefined){
        if(!Array.isArray(part.marks) || part.marks.length>3)return null;
        const seen=new Set();
        for(const mark of part.marks){
          if(!mark || !["bold","italic","strike","code"].includes(mark.type) ||
            Object.keys(mark).some(k=>k!=="type") || seen.has(mark.type))return null;
          seen.add(mark.type);
        }
      }
    }
  }
  if(Object.keys(doc).some(k=>k!=="type"&&k!=="content"))return null;
  return {expected:p.expectedRevision,document:doc};
}

export function checkOrigin(origin) {
  // Strict for this test: every mutation must supply explicit same-site origin.
  // Production CSRF/cookie/SameSite/Origin policies need independent design.
  return [3100,3101,5173].some(port=>origin===originPattern+":"+port);
}

export async function sessionUser(headers) {
  // Clients cannot set an x-user-id. Identity follows only an opaque token
  // whose hash matches an unexpired server-side session row.
  const cookie=headers.get("cookie")??"";
  const token=cookie.split(";").map(s=>s.trim()).find(s=>s.startsWith("vsid="))?.slice(5);
  if(!token || !/^[a-f0-9]{64}$/.test(token))return null;
  const result=await pool.query(
   "SELECT user_id FROM r18_http.sessions WHERE token_hash=$1 AND expires_at > now()",
   [sha(token)]);
  return result.rows[0]?.user_id??null;
}

export async function getChapter(userId,bookId,chapterId) {
  const rows=await pool.query(
   `SELECT c.revision,c.document FROM r18_http.chapters c
     JOIN r18_http.books b ON b.id=c.book_id
     WHERE b.owner_id=$1 AND c.book_id=$2 AND c.id=$3`,
    [userId,bookId,chapterId]);
  return rows.rows[0]??null;
}

export async function saveChapter(userId,bookId,chapterId,payload){
  const client=await pool.connect();
  try{
    await client.query("BEGIN");
    const r=await client.query(
      `UPDATE r18_http.chapters c SET revision=revision+1,document=$5::jsonb
       FROM r18_http.books b WHERE b.id=c.book_id AND b.owner_id=$1
         AND c.book_id=$2 AND c.id=$3 AND c.revision=$4
       RETURNING c.revision,c.document`,
       [userId,bookId,chapterId,payload.expected,JSON.stringify(payload.document)]);
    if(!r.rows[0]){
      await client.query("ROLLBACK");
      const existing=await getChapter(userId,bookId,chapterId);
      return existing?{status:409,body:{error:"revision_conflict",revision:existing.revision}}:
        {status:404,body:{error:"not_found"}};
    }
    await client.query(
     `INSERT INTO r18_http.revisions(book_id,chapter_id,revision,document)
       VALUES($1,$2,$3,$4::jsonb)`,
     [bookId,chapterId,r.rows[0].revision,JSON.stringify(payload.document)]);
    await client.query("COMMIT");
    return {status:200,body:{ok:true,revision:r.rows[0].revision}};
  }catch(error){
    await client.query("ROLLBACK").catch(()=>{});
    throw error;
  }finally{client.release();}
}

export async function closePool(){await pool.end();}

export async function handleRequest(method,params,headers,body){
  const user=await sessionUser(headers);
  if(!user)return {status:401,body:{error:"unauthenticated"}};
  const {bookId,chapterId}=params;
  if(typeof bookId!=="string"||typeof chapterId!=="string" ||
    !/^[a-z0-9-]{1,60}$/i.test(bookId)||!/^[a-z0-9-]{1,60}$/i.test(chapterId))
    return {status:404,body:{error:"not_found"}};
  if(method==="GET"){
    const c=await getChapter(user,bookId,chapterId);
    return c?{status:200,body:{ownerId:user,revision:c.revision,document:c.document}}:
      {status:404,body:{error:"not_found"}};
  }
  if(method==="PUT"){
    if(!checkOrigin(headers.get("origin")))return {status:403,body:{error:"origin_denied"}};
    const payload=normalizePayload(body);
    if(!payload)return {status:400,body:{error:"invalid_document"}};
    return saveChapter(user,bookId,chapterId,payload);
  }
  return {status:405,body:{error:"method_not_allowed"}};
}
