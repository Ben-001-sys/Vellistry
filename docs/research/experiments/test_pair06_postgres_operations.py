#!/usr/bin/env python3
"""R18 local real PostgreSQL save/retry/restore tests. Disposable synthetic only.

Not an app or RLS/auth proof: 'actor' is a test-provided string; the function
MUST NOT be exposed publicly without a separately proven authenticated gateway.
"""
import hashlib
import json
import os
from pathlib import Path
import subprocess
import tempfile
import unittest
from concurrent.futures import ThreadPoolExecutor
from urllib.parse import urlparse

ROOT=Path(__file__).resolve().parent
DSN=os.environ.get("PAIR06_DATABASE_URL", "")
parsed=urlparse(DSN)
if (parsed.scheme not in ("postgresql","postgres") or
    parsed.hostname not in ("127.0.0.1","localhost") or
    parsed.path.strip("/") != "pair06db"):
    raise SystemExit("PAIR06 research refuses nonlocal/non-disposable database")
BASE=DSN

def command(args, *, input=None, good=True):
    out=subprocess.run(args, input=input, capture_output=True, text=True, timeout=30)
    if good and out.returncode:
        raise RuntimeError(f"PostgreSQL command failed (no confidential output): {args[0]} / {out.returncode}")
    return out

def psql(sql, *, dsn=BASE, good=True):
    return command(["psql",dsn,"-X","-q","-A","-t","-v","ON_ERROR_STOP=1","-c",sql],good=good)

DOC1='{"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","text":"Mara escaped safely."}]}]}'
DOC2='{"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","text":"Mara returned later."}]}]}'
def literal(v):
    # Only use generated synthetic values, but quote defensively for SQL.
    return "'"+str(v).replace("'","''")+"'"
def call(actor="alice",book="book-a",chapter="chapter-a",expected=1,
         document=DOC1,key="k1",fault=False,good=True):
    sql=f"SELECT pair06.revise_chapter({literal(actor)},{literal(book)},{literal(chapter)},"+\
        f"{expected},{literal(document)}::jsonb,{literal(key)},{'true' if fault else 'false'});"
    return psql(sql,good=good)
def reset():
    path=ROOT/"pair06_postgres.sql"
    return command(["psql",BASE,"-X","-q","-v","ON_ERROR_STOP=1","-f",str(path)])

def count(table):
    return int(psql(f"SELECT count(*) FROM pair06.{table};").stdout.strip())
def revision():
    return int(psql("SELECT revision FROM pair06.chapters WHERE id='chapter-a';").stdout.strip())
def data():
    return json.loads(psql("SELECT document FROM pair06.chapters WHERE id='chapter-a';").stdout.strip())

class RealPostgresTests(unittest.TestCase):
    def setUp(self): reset()
    def test_01_atomic_save_and_revision_history(self):
        self.assertEqual(call().stdout.strip(),"2")
        self.assertEqual(revision(),2)
        self.assertEqual(count("revisions"),3)
        self.assertEqual(count("applied_requests"),1)
        self.assertEqual(data(),json.loads(DOC1))
    def test_02_stale_version_denied_without_overwrite(self):
        call()
        out=call(document=DOC2,key="other",good=False)
        self.assertNotEqual(out.returncode,0)
        self.assertIn("stale_or_unauthorized",out.stderr)
        self.assertEqual((revision(),count("revisions")),(2,3))
        self.assertEqual(data(),json.loads(DOC1))
    def test_03_other_author_denied(self):
        out=call(actor="bob",good=False)
        self.assertNotEqual(out.returncode,0)
        self.assertEqual((revision(),count("applied_requests")),(1,0))
    def test_04_book_chapter_mismatch_denied(self):
        out=call(book="book-b",good=False)
        self.assertNotEqual(out.returncode,0)
        self.assertEqual((revision(),count("revisions")),(1,2))
    def test_05_fault_after_update_rolls_back_both_tables(self):
        out=call(fault=True,good=False)
        self.assertIn("fault_injected_after_update",out.stderr)
        self.assertEqual((revision(),count("revisions"),count("applied_requests")),(1,2,0))
    def test_06_lost_response_retry_is_idempotent(self):
        self.assertEqual(call().stdout.strip(),"2")
        self.assertEqual(call().stdout.strip(),"2")
        self.assertEqual((revision(),count("revisions"),count("applied_requests")),(2,3,1))
    def test_07_same_key_changed_payload_fails_closed(self):
        call()
        x=call(document=DOC2,good=False)
        self.assertIn("idempotency_key_conflict",x.stderr)
        self.assertEqual(data(),json.loads(DOC1))
    def test_08_same_key_different_actor_denied(self):
        call()
        x=call(actor="bob",good=False)
        self.assertIn("idempotency_key_conflict",x.stderr)
        self.assertEqual((revision(),count("applied_requests")),(2,1))
    def test_09_competing_revisions_have_one_winner(self):
        with ThreadPoolExecutor(max_workers=2) as ex:
            a=ex.submit(call,key="compete-a",good=False)
            b=ex.submit(call,document=DOC2,key="compete-b",good=False)
            results=(a.result(),b.result())
        self.assertEqual(sum(r.returncode==0 for r in results),1)
        self.assertEqual((revision(),count("revisions"),count("applied_requests")),(2,3,1))
    def test_10_failed_save_followed_by_new_key_recovers(self):
        call(fault=True,good=False)
        self.assertEqual(call(key="recover").stdout.strip(),"2")
        self.assertEqual((revision(),count("revisions")),(2,3))
    def test_11_restore_clean_database_is_content_identical(self):
        call()
        before=psql("SELECT md5(string_agg(t::text,'|' ORDER BY t::text)) FROM "
            "(SELECT 'b'::text label,id,author_id AS value FROM pair06.books "
            " UNION ALL SELECT 'c',id,document::text FROM pair06.chapters "
            " UNION ALL SELECT 'r',chapter_id||':'||revision::text,document::text FROM pair06.revisions) t;").stdout.strip()
        pgroot=BASE.rsplit("/",1)[0]
        restore_dsn=pgroot+"/pair06_restored"
        with tempfile.TemporaryDirectory() as tmp:
            backup=Path(tmp)/"pair06.backup"
            r=command(["pg_dump",BASE,"-Fc","--schema=pair06","-f",str(backup)])
            self.assertGreater(backup.stat().st_size,100)
            psql("DROP DATABASE IF EXISTS pair06_restored WITH (FORCE);",
                 dsn=pgroot+"/postgres")
            psql("CREATE DATABASE pair06_restored;",dsn=pgroot+"/postgres")
            command(["pg_restore","--no-owner","--no-privileges","-d",restore_dsn,str(backup)])
            after=psql("SELECT md5(string_agg(t::text,'|' ORDER BY t::text)) FROM "
                "(SELECT 'b'::text label,id,author_id AS value FROM pair06.books "
                " UNION ALL SELECT 'c',id,document::text FROM pair06.chapters "
                " UNION ALL SELECT 'r',chapter_id||':'||revision::text,document::text FROM pair06.revisions) t;",
                dsn=restore_dsn).stdout.strip()
            self.assertEqual(before,after)
            self.assertEqual(psql("SELECT count(*) FROM pair06.applied_requests;",dsn=restore_dsn).stdout.strip(),"1")
    def test_12_unconfirmed_write_not_acknowledged_by_db(self):
        self.assertNotEqual(call(fault=True,good=False).returncode,0)
        self.assertEqual(revision(),1)
        self.assertEqual(count("applied_requests"),0)

if __name__=="__main__":
    unittest.main()
