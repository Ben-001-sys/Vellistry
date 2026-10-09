import crypto from "node:crypto";
import pg from "pg";
const pool=new pg.Pool({connectionString:process.env.DATABASE_URL});
const token=user=>crypto.createHash("sha256").update("R18 NONPRODUCTION "+user).digest("hex");
const hash=s=>crypto.createHash("sha256").update(s).digest("hex");
const doc=text=>({type:"doc",content:[{type:"paragraph",content:[{type:"text",text}]}]});
try{
 await pool.query("DROP SCHEMA IF EXISTS r18_http CASCADE");
 await pool.query("CREATE SCHEMA r18_http");
 await pool.query(`CREATE TABLE r18_http.books(id text PRIMARY KEY,owner_id text NOT NULL);
   CREATE TABLE r18_http.sessions(token_hash text PRIMARY KEY,user_id text NOT NULL,
     expires_at timestamptz NOT NULL);
   CREATE TABLE r18_http.chapters(id text NOT NULL,book_id text NOT NULL
     REFERENCES r18_http.books(id),revision integer NOT NULL CHECK(revision>0),
     document jsonb NOT NULL,PRIMARY KEY(book_id,id));
   CREATE TABLE r18_http.revisions(book_id text NOT NULL,chapter_id text NOT NULL,
     revision integer NOT NULL,document jsonb NOT NULL,
     PRIMARY KEY(book_id,chapter_id,revision));`);
 for (const user of ["alice","bob"]){
  await pool.query("INSERT INTO r18_http.books(id,owner_id) VALUES($1,$2)",
    [user==="alice"?"book-a":"book-b",user]);
  await pool.query(`INSERT INTO r18_http.sessions(token_hash,user_id,expires_at)
     VALUES($1,$2,now()+interval '1 hour')`,[hash(token(user)),user]);
  const book=user==="alice"?"book-a":"book-b",initial=doc("Initial "+user+" story");
  await pool.query("INSERT INTO r18_http.chapters(id,book_id,revision,document) VALUES($1,$2,1,$3)",
    ["chapter-1",book,initial]);
  await pool.query("INSERT INTO r18_http.revisions(book_id,chapter_id,revision,document) VALUES($1,$2,1,$3)",
    [book,"chapter-1",initial]);
 }
 console.log("R18 synthetic seeded; no real accounts and no production credentials");
}finally{await pool.end();}
export {token};
