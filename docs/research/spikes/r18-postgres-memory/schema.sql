-- R18 research only. Run only in a disposable PostgreSQL 17 test database.
-- SECURITY NOTICE: custom GUC 'r18.author' is a TRUSTED APPLICATION assertion,
-- NOT an authentication mechanism. It is settable by SQL clients. This spike
-- demonstrates RLS filtering under an app role, not end-user auth or SQLi defence.
BEGIN;
CREATE SCHEMA r18;
DO $role$
BEGIN
 IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname='r18_app') THEN
   CREATE ROLE r18_app NOLOGIN NOBYPASSRLS;
 END IF;
END $role$;
GRANT USAGE ON SCHEMA r18 TO r18_app;

CREATE TABLE r18.books (
 id text PRIMARY KEY,
 owner_id text NOT NULL
);
CREATE TABLE r18.chapters (
 id text PRIMARY KEY,
 book_id text NOT NULL REFERENCES r18.books(id),
 current_revision integer NOT NULL CHECK(current_revision >= 1),
 prose text NOT NULL
);
CREATE TABLE r18.events (
 id text PRIMARY KEY,
 book_id text NOT NULL REFERENCES r18.books(id),
 entity_id text NOT NULL,
 attribute text NOT NULL,
 value text NOT NULL,
 status text NOT NULL CHECK(status IN ('approved','pending','rejected','retracted')),
 epistemic text NOT NULL CHECK(epistemic IN ('objective','belief','plan','uncertain')),
 effective_at integer,
 sequence_id integer NOT NULL,
 source_chapter text NOT NULL REFERENCES r18.chapters(id),
 source_revision integer NOT NULL,
 known_by jsonb NOT NULL DEFAULT '{}'::jsonb
);
CREATE TABLE r18.evidence (
 id text PRIMARY KEY,
 book_id text NOT NULL REFERENCES r18.books(id),
 source_chapter text NOT NULL REFERENCES r18.chapters(id),
 source_revision integer NOT NULL,
 story_time integer,
 passage text NOT NULL,
 known_by jsonb NOT NULL DEFAULT '{}'::jsonb,
 search_document tsvector GENERATED ALWAYS AS (to_tsvector('english', passage)) STORED
);
CREATE INDEX evidence_search_gin ON r18.evidence USING gin (search_document);
CREATE INDEX events_temporal_lookup ON r18.events (book_id, entity_id, attribute, effective_at DESC);
CREATE TABLE r18.rules (
 id text PRIMARY KEY,
 book_id text NOT NULL REFERENCES r18.books(id),
 action text NOT NULL,
 enabled boolean NOT NULL,
 instruction text NOT NULL
);

-- The table owner is privileged; FORCE closes accidental owner bypass
-- for non-superusers, but superusers/BYPASSRLS always bypass.
ALTER TABLE r18.books ENABLE ROW LEVEL SECURITY;
ALTER TABLE r18.books FORCE ROW LEVEL SECURITY;
ALTER TABLE r18.chapters ENABLE ROW LEVEL SECURITY;
ALTER TABLE r18.chapters FORCE ROW LEVEL SECURITY;
ALTER TABLE r18.events ENABLE ROW LEVEL SECURITY;
ALTER TABLE r18.events FORCE ROW LEVEL SECURITY;
ALTER TABLE r18.evidence ENABLE ROW LEVEL SECURITY;
ALTER TABLE r18.evidence FORCE ROW LEVEL SECURITY;
ALTER TABLE r18.rules ENABLE ROW LEVEL SECURITY;
ALTER TABLE r18.rules FORCE ROW LEVEL SECURITY;

CREATE POLICY books_owner ON r18.books TO r18_app
 USING(owner_id=current_setting('r18.author',true))
 WITH CHECK(owner_id=current_setting('r18.author',true));
CREATE POLICY chapter_owner ON r18.chapters TO r18_app
 USING(EXISTS(SELECT 1 FROM r18.books b WHERE b.id=book_id AND b.owner_id=current_setting('r18.author',true)))
 WITH CHECK(EXISTS(SELECT 1 FROM r18.books b WHERE b.id=book_id AND b.owner_id=current_setting('r18.author',true)));
CREATE POLICY event_owner ON r18.events TO r18_app
 USING(EXISTS(SELECT 1 FROM r18.books b WHERE b.id=book_id AND b.owner_id=current_setting('r18.author',true)))
 WITH CHECK(EXISTS(SELECT 1 FROM r18.books b WHERE b.id=book_id AND b.owner_id=current_setting('r18.author',true)));
CREATE POLICY evidence_owner ON r18.evidence TO r18_app
 USING(EXISTS(SELECT 1 FROM r18.books b WHERE b.id=book_id AND b.owner_id=current_setting('r18.author',true)))
 WITH CHECK(EXISTS(SELECT 1 FROM r18.books b WHERE b.id=book_id AND b.owner_id=current_setting('r18.author',true)));
CREATE POLICY rules_owner ON r18.rules TO r18_app
 USING(EXISTS(SELECT 1 FROM r18.books b WHERE b.id=book_id AND b.owner_id=current_setting('r18.author',true)))
 WITH CHECK(EXISTS(SELECT 1 FROM r18.books b WHERE b.id=book_id AND b.owner_id=current_setting('r18.author',true)));

GRANT SELECT ON r18.books TO r18_app;
GRANT SELECT, INSERT, UPDATE ON r18.chapters TO r18_app;
GRANT SELECT ON r18.events, r18.evidence, r18.rules TO r18_app;

-- SECURITY INVOKER functions inherit RLS and app-role privileges.
CREATE FUNCTION r18.save_chapter_cas(
 p_book text, p_chapter text, p_expected integer, p_new_prose text
) RETURNS boolean LANGUAGE plpgsql SECURITY INVOKER SET search_path = pg_catalog
AS $fn$
DECLARE n integer;
BEGIN
 UPDATE r18.chapters c
 SET prose=p_new_prose, current_revision=c.current_revision+1
 WHERE c.book_id=p_book AND c.id=p_chapter AND c.current_revision=p_expected;
 GET DIAGNOSTICS n=ROW_COUNT;
 RETURN n=1;
END $fn$;

CREATE FUNCTION r18.canon_asof(p_book text, p_at integer, p_pov text DEFAULT NULL)
RETURNS TABLE(entity_id text, attribute text, value text, event_id text, effective_at integer)
LANGUAGE sql STABLE SECURITY INVOKER SET search_path = pg_catalog
AS $fn$
 SELECT DISTINCT ON (e.entity_id,e.attribute)
   e.entity_id, e.attribute, e.value, e.id, e.effective_at
 FROM r18.events e
 JOIN r18.chapters c ON c.id=e.source_chapter AND c.book_id=e.book_id
 WHERE e.book_id=p_book AND e.status='approved' AND e.epistemic='objective'
   AND e.effective_at <= p_at
   AND c.current_revision=e.source_revision
   AND (p_pov IS NULL OR
        (e.known_by ? p_pov AND (e.known_by ->> p_pov)::integer <= p_at))
 ORDER BY e.entity_id,e.attribute,e.effective_at DESC,e.sequence_id DESC
$fn$;

CREATE FUNCTION r18.search_evidence(
 p_book text, p_at integer, p_pov text, p_query text
) RETURNS TABLE(chunk_id text, source_chapter text, source_revision integer, passage text, score real)
LANGUAGE sql STABLE SECURITY INVOKER SET search_path = pg_catalog
AS $fn$
 SELECT e.id,e.source_chapter,e.source_revision,e.passage,
        ts_rank(e.search_document,websearch_to_tsquery('english',p_query))
 FROM r18.evidence e
 JOIN r18.chapters c ON c.id=e.source_chapter AND c.book_id=e.book_id
 WHERE e.book_id=p_book AND e.source_revision=c.current_revision
   AND e.story_time <= p_at
   AND e.search_document @@ websearch_to_tsquery('english',p_query)
   AND (p_pov IS NULL OR
       (e.known_by ? p_pov AND (e.known_by ->> p_pov)::integer <= p_at))
 ORDER BY score DESC,e.id ASC
$fn$;

REVOKE ALL ON FUNCTION r18.save_chapter_cas(text,text,integer,text) FROM PUBLIC;
REVOKE ALL ON FUNCTION r18.canon_asof(text,integer,text) FROM PUBLIC;
REVOKE ALL ON FUNCTION r18.search_evidence(text,integer,text,text) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION r18.save_chapter_cas(text,text,integer,text) TO r18_app;
GRANT EXECUTE ON FUNCTION r18.canon_asof(text,integer,text) TO r18_app;
GRANT EXECUTE ON FUNCTION r18.search_evidence(text,integer,text,text) TO r18_app;

-- Privileged fixture setup; RLS checks below use SET ROLE r18_app.
INSERT INTO r18.books(id,owner_id) VALUES('A','alice'),('B','bob');
INSERT INTO r18.chapters(id,book_id,current_revision,prose) VALUES
 ('c1','A',1,'Mara injured her left wrist.'),
 ('c2','A',2,'Elias does not yet know of the injury.'),
 ('c3','A',3,'Mara recovered completely.'),
 ('c4','A',4,'Flashback to before the injury.'),
 ('b1','B',1,'This other Mara has a mechanical wrist.');
INSERT INTO r18.events
 (id,book_id,entity_id,attribute,value,status,epistemic,effective_at,sequence_id,source_chapter,source_revision,known_by)
 VALUES
 ('injury','A','mara','wrist','injured','approved','objective',3,1,'c1',1,'{"mara":3,"elias":11}'),
 ('recovery','A','mara','wrist','healed','approved','objective',17,2,'c3',3,'{"mara":17,"elias":17}'),
 ('ai-death','A','mara','fate','dead','rejected','objective',7,3,'c2',2,'{"mara":7}'),
 ('rumor','A','mara','identity','secret heir','approved','belief',2,4,'c1',1,'{"elias":2}'),
 ('other','B','mara','wrist','mechanical','approved','objective',1,1,'b1',1,'{"mara":1}');
INSERT INTO r18.evidence
 (id,book_id,source_chapter,source_revision,story_time,passage,known_by)
 VALUES
 ('injury-excerpt','A','c1',1,3,'Mara broke her left wrist in battle.','{"mara":3,"elias":11}'),
 ('recovery-excerpt','A','c3',3,17,'Her left wrist healed completely.','{"mara":17,"elias":17}'),
 ('foreign-excerpt','B','b1',1,1,'Mara has a mechanical left wrist.','{"mara":1}');
INSERT INTO r18.rules(id,book_id,action,enabled,instruction) VALUES
 ('poV','A','continue',true,'Maintain selected character perspective.'),
 ('disabled','A','all',false,'Do not describe weather.'),
 ('foreign','B','all',true,'Other book rules.');
COMMIT;
