-- R18 synthetic PostgreSQL assertions. Fail-fast under psql -v ON_ERROR_STOP=1.
-- Groups are transactions. Exceptions inside DO blocks prove expected denial.
\echo 'R18-PG-01: missing trusted identity sees no private book/chapter'
BEGIN;
SET LOCAL ROLE r18_app;
DO $t$
BEGIN
 IF (SELECT count(*) FROM r18.books) <> 0 OR (SELECT count(*) FROM r18.chapters) <> 0
 THEN RAISE EXCEPTION 'unauthenticated session can read private rows'; END IF;
END $t$;
COMMIT;
\echo 'PASS R18-PG-01';

\echo 'R18-PG-02: owner scope and same-name other-book facts isolated'
BEGIN;
SET LOCAL ROLE r18_app;
SELECT set_config('r18.author','alice',true);
DO $t$
BEGIN
 IF (SELECT count(*) FROM r18.books)<>1 THEN RAISE EXCEPTION 'owner book scope failed'; END IF;
 IF (SELECT count(*) FROM r18.chapters)<>4 THEN RAISE EXCEPTION 'chapter RLS count failed'; END IF;
 IF (SELECT count(*) FROM r18.events WHERE book_id='B')<>0 THEN RAISE EXCEPTION 'foreign event leaked'; END IF;
 IF (SELECT count(*) FROM r18.evidence WHERE book_id='B')<>0 THEN RAISE EXCEPTION 'foreign evidence leaked'; END IF;
 IF (SELECT count(*) FROM r18.rules WHERE book_id='B')<>0 THEN RAISE EXCEPTION 'foreign rule leaked'; END IF;
 IF (SELECT count(*) FROM r18.canon_asof('B',20,NULL))<>0 THEN RAISE EXCEPTION 'foreign function result leaked'; END IF;
 IF (SELECT count(*) FROM r18.search_evidence('B',20,NULL,'wrist'))<>0 THEN RAISE EXCEPTION 'foreign search result leaked'; END IF;
END $t$;
COMMIT;
\echo 'PASS R18-PG-02';

\echo 'R18-PG-03: forbidden chapter INSERT and UPDATE are denied'
BEGIN;
SET LOCAL ROLE r18_app;
SELECT set_config('r18.author','alice',true);
DO $t$
DECLARE blocked boolean:=false;
BEGIN
 BEGIN
   INSERT INTO r18.chapters(id,book_id,current_revision,prose)
   VALUES('attack','B',1,'This is not my book.');
 EXCEPTION WHEN insufficient_privilege THEN blocked:=true;
 END;
 IF NOT blocked THEN RAISE EXCEPTION 'foreign chapter insertion unexpectedly succeeded'; END IF;
 IF r18.save_chapter_cas('B','b1',1,'Unauthorized overwrite.')
 THEN RAISE EXCEPTION 'foreign chapter optimistic update succeeded'; END IF;
END $t$;
ROLLBACK;
\echo 'PASS R18-PG-03';

\echo 'R18-PG-04: compare-and-swap save accepts one revision, rejects stale retry'
BEGIN;
SET LOCAL ROLE r18_app;
SELECT set_config('r18.author','alice',true);
DO $t$
BEGIN
 IF NOT r18.save_chapter_cas('A','c2',2,'Revised scene by Alice.')
 THEN RAISE EXCEPTION 'valid conditional save failed'; END IF;
 IF r18.save_chapter_cas('A','c2',2,'Old tab should lose.')
 THEN RAISE EXCEPTION 'stale conditional save succeeded'; END IF;
 IF NOT EXISTS (SELECT 1 FROM r18.chapters WHERE id='c2'
                 AND current_revision=3 AND prose='Revised scene by Alice.')
 THEN RAISE EXCEPTION 'accepted revision was corrupted'; END IF;
END $t$;
ROLLBACK;
\echo 'PASS R18-PG-04';

\echo 'R18-PG-05: cancelled transaction leaves original accepted text unchanged'
BEGIN;
SET LOCAL ROLE r18_app;
SELECT set_config('r18.author','alice',true);
DO $t$
BEGIN
 IF NOT EXISTS (SELECT 1 FROM r18.chapters WHERE id='c2'
   AND current_revision=2 AND prose='Elias does not yet know of the injury.')
 THEN RAISE EXCEPTION 'rolled-back mutation escaped transaction'; END IF;
END $t$;
COMMIT;
\echo 'PASS R18-PG-05';

\echo 'R18-PG-06: approved objective state follows event time and rejected/belief excluded'
BEGIN;
SET LOCAL ROLE r18_app;
SELECT set_config('r18.author','alice',true);
DO $t$
BEGIN
 IF (SELECT value FROM r18.canon_asof('A',8,NULL) WHERE entity_id='mara' AND attribute='wrist') IS DISTINCT FROM 'injured'
 THEN RAISE EXCEPTION 'injury state absent during injured period'; END IF;
 IF (SELECT value FROM r18.canon_asof('A',20,NULL) WHERE entity_id='mara' AND attribute='wrist') IS DISTINCT FROM 'healed'
 THEN RAISE EXCEPTION 'recovery not applied at event time 20'; END IF;
 IF (SELECT count(*) FROM r18.canon_asof('A',1,NULL))<>0
 THEN RAISE EXCEPTION 'flashback leaked future canon'; END IF;
 IF (SELECT count(*) FROM r18.canon_asof('A',NULL,NULL))<>0
 THEN RAISE EXCEPTION 'unknown story time must not infer events'; END IF;
 IF (SELECT count(*) FROM r18.canon_asof('A',20,NULL) WHERE attribute IN ('fate','identity'))<>0
 THEN RAISE EXCEPTION 'rejected AI or belief promoted into objective canon'; END IF;
END $t$;
COMMIT;
\echo 'PASS R18-PG-06';

\echo 'R18-PG-07: POV explicit knowledge acquisition filters temporal canon'
BEGIN;
SET LOCAL ROLE r18_app;
SELECT set_config('r18.author','alice',true);
DO $t$
BEGIN
 IF (SELECT count(*) FROM r18.canon_asof('A',8,'elias'))<>0
 THEN RAISE EXCEPTION 'Elias learned injury too early'; END IF;
 IF (SELECT value FROM r18.canon_asof('A',12,'elias') WHERE attribute='wrist') IS DISTINCT FROM 'injured'
 THEN RAISE EXCEPTION 'known injury not available after acquisition'; END IF;
 IF (SELECT value FROM r18.canon_asof('A',20,'elias') WHERE attribute='wrist') IS DISTINCT FROM 'healed'
 THEN RAISE EXCEPTION 'Elias cannot use known recovery'; END IF;
END $t$;
COMMIT;
\echo 'PASS R18-PG-07';

\echo 'R18-PG-08: indexed lexical evidence respects book, source revision, time and POV'
BEGIN;
SET LOCAL ROLE r18_app;
SELECT set_config('r18.author','alice',true);
DO $t$
BEGIN
 IF (SELECT count(*) FROM r18.search_evidence('A',8,NULL,'wrist'))<>1
 THEN RAISE EXCEPTION 'injury point should have exactly one evidence chunk'; END IF;
 IF (SELECT chunk_id FROM r18.search_evidence('A',8,NULL,'wrist')) IS DISTINCT FROM 'injury-excerpt'
 THEN RAISE EXCEPTION 'wrong evidence chunk during injury'; END IF;
 IF (SELECT count(*) FROM r18.search_evidence('A',20,NULL,'wrist'))<>2
 THEN RAISE EXCEPTION 'later scene expected two cited passages'; END IF;
 IF (SELECT count(*) FROM r18.search_evidence('A',8,'elias','wrist'))<>0
 THEN RAISE EXCEPTION 'POV-safe evidence leaked unknown fact'; END IF;
 IF (SELECT count(*) FROM r18.search_evidence('A',12,'elias','wrist'))<>1
 THEN RAISE EXCEPTION 'known evidence not retrieved'; END IF;
 IF (SELECT count(*) FROM r18.search_evidence('A',1,NULL,'wrist'))<>0
 THEN RAISE EXCEPTION 'flashback evidence leaked from future'; END IF;
 IF (SELECT count(*) FROM r18.search_evidence('A',20,NULL,'nonexistent zeppelin'))<>0
 THEN RAISE EXCEPTION 'lexical retrieval invented relevant evidence'; END IF;
END $t$;
COMMIT;
\echo 'PASS R18-PG-08';

\echo 'R18-PG-09: unsupported source revision invalidates prior canon and citations'
BEGIN;
SET LOCAL ROLE r18_app;
SELECT set_config('r18.author','alice',true);
DO $t$
BEGIN
 UPDATE r18.chapters SET current_revision=2, prose='Retconned scene has no wrist injury.'
 WHERE id='c1' AND book_id='A' AND current_revision=1;
 IF (SELECT count(*) FROM r18.canon_asof('A',8,NULL) WHERE attribute='wrist')<>0
 THEN RAISE EXCEPTION 'stale canon survived source rewrite'; END IF;
 IF (SELECT count(*) FROM r18.search_evidence('A',8,NULL,'wrist'))<>0
 THEN RAISE EXCEPTION 'stale evidence survived source rewrite'; END IF;
END $t$;
ROLLBACK;
\echo 'PASS R18-PG-09';

\echo 'R18-PG-10: enabled action-scoped rules, other-book and disabled rules excluded'
BEGIN;
SET LOCAL ROLE r18_app;
SELECT set_config('r18.author','alice',true);
DO $t$
BEGIN
 IF (SELECT count(*) FROM r18.rules
     WHERE book_id='A' AND enabled AND action IN ('continue','all'))<>1
 THEN RAISE EXCEPTION 'active continue rules incorrect'; END IF;
 IF (SELECT count(*) FROM r18.rules
     WHERE book_id='A' AND enabled AND action IN ('rewrite','all'))<>0
 THEN RAISE EXCEPTION 'disabled or wrong-action rule included'; END IF;
 IF (SELECT count(*) FROM r18.rules WHERE id='foreign')<>0
 THEN RAISE EXCEPTION 'foreign rule leaked'; END IF;
END $t$;
COMMIT;
\echo 'PASS R18-PG-10';

\echo 'R18-PG-11: Bob sees only his book and cannot query Alice story memory'
BEGIN;
SET LOCAL ROLE r18_app;
SELECT set_config('r18.author','bob',true);
DO $t$
BEGIN
 IF (SELECT count(*) FROM r18.books)<>1 OR (SELECT count(*) FROM r18.chapters)<>1
 THEN RAISE EXCEPTION 'Bob scope incorrect'; END IF;
 IF (SELECT value FROM r18.canon_asof('B',8,NULL) WHERE attribute='wrist') IS DISTINCT FROM 'mechanical'
 THEN RAISE EXCEPTION 'Bob legitimate canon missing'; END IF;
 IF (SELECT count(*) FROM r18.canon_asof('A',20,NULL))<>0
 THEN RAISE EXCEPTION 'Bob accessed Alice canon'; END IF;
 IF (SELECT count(*) FROM r18.search_evidence('A',20,NULL,'wrist'))<>0
 THEN RAISE EXCEPTION 'Bob accessed Alice citations'; END IF;
END $t$;
COMMIT;
\echo 'PASS R18-PG-11';

\echo 'R18-PG-12: read role cannot silently approve candidate canon'
BEGIN;
SET LOCAL ROLE r18_app;
SELECT set_config('r18.author','alice',true);
DO $t$
DECLARE blocked boolean:=false;
BEGIN
 BEGIN
   UPDATE r18.events SET status='approved' WHERE id='ai-death';
 EXCEPTION WHEN insufficient_privilege THEN blocked:=true;
 END;
 IF NOT blocked THEN RAISE EXCEPTION 'app role can self-approve AI candidate'; END IF;
END $t$;
ROLLBACK;
\echo 'PASS R18-PG-12';
\echo 'ALL 12 synthetic PostgreSQL assertion groups passed';
