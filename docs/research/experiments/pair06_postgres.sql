-- PAIR 06: disposable actual PostgreSQL transaction/restore research fixture.
-- Deliberately NOT an authenticated product API, production migration or Supabase security policy.
DROP SCHEMA IF EXISTS pair06 CASCADE;
CREATE SCHEMA pair06;
CREATE TABLE pair06.books (
 id text PRIMARY KEY, author_id text NOT NULL
);
CREATE TABLE pair06.chapters (
 id text PRIMARY KEY, book_id text NOT NULL REFERENCES pair06.books(id),
 revision integer NOT NULL DEFAULT 1 CHECK (revision >= 1),
 document jsonb NOT NULL
);
CREATE TABLE pair06.revisions (
 chapter_id text NOT NULL REFERENCES pair06.chapters(id),
 revision integer NOT NULL, document jsonb NOT NULL,
 PRIMARY KEY(chapter_id,revision)
);
CREATE TABLE pair06.applied_requests (
 request_id text PRIMARY KEY,
 author_id text NOT NULL, book_id text NOT NULL, chapter_id text NOT NULL,
 expected_revision integer NOT NULL, document_hash text NOT NULL,
 accepted_revision integer NOT NULL
);
CREATE FUNCTION pair06.revise_chapter(
 actor text, target_book text, target_chapter text, expected integer,
 next_document jsonb, request_key text, inject_fail boolean DEFAULT false
) RETURNS integer LANGUAGE plpgsql AS $$
DECLARE prior pair06.applied_requests%ROWTYPE;
        new_revision integer;
        fingerprint text;
BEGIN
 IF actor IS NULL OR actor='' OR target_book IS NULL OR target_book='' OR
    target_chapter IS NULL OR target_chapter='' OR request_key IS NULL OR request_key='' OR
    expected<1 OR next_document IS NULL OR next_document->>'type'<>'doc' THEN
    RAISE EXCEPTION 'invalid_input';
 END IF;
 fingerprint:=md5(next_document::text);
 -- Request-key lock serializes retries. A DIFFERENT key for the same stale
 -- revision is still rejected by the optimistic chapter revision WHERE clause.
 PERFORM pg_advisory_xact_lock(hashtextextended(request_key,0));
 SELECT * INTO prior FROM pair06.applied_requests WHERE request_id=request_key;
 IF FOUND THEN
   IF prior.author_id<>actor OR prior.book_id<>target_book OR
      prior.chapter_id<>target_chapter OR prior.expected_revision<>expected OR
      prior.document_hash<>fingerprint THEN
      RAISE EXCEPTION 'idempotency_key_conflict';
   END IF;
   RETURN prior.accepted_revision;
 END IF;
 UPDATE pair06.chapters c
 SET revision=c.revision+1,document=next_document
 FROM pair06.books b
 WHERE b.id=c.book_id AND b.author_id=actor AND
       c.book_id=target_book AND c.id=target_chapter AND c.revision=expected
 RETURNING c.revision INTO new_revision;
 IF NOT FOUND THEN RAISE EXCEPTION 'stale_or_unauthorized'; END IF;
 -- An injected failure after the mutation but before the journal must
 -- rollback the whole enclosing PostgreSQL transaction.
 IF inject_fail THEN RAISE EXCEPTION 'fault_injected_after_update'; END IF;
 INSERT INTO pair06.revisions(chapter_id,revision,document)
 VALUES(target_chapter,new_revision,next_document);
 INSERT INTO pair06.applied_requests
 (request_id,author_id,book_id,chapter_id,expected_revision,document_hash,accepted_revision)
 VALUES(request_key,actor,target_book,target_chapter,expected,fingerprint,new_revision);
 RETURN new_revision;
END; $$;
-- Research-only seed: two authors and two synthetic chapters, no real secrets.
INSERT INTO pair06.books VALUES ('book-a','alice'),('book-b','bob');
INSERT INTO pair06.chapters(id,book_id,revision,document)
 VALUES('chapter-a','book-a',1,'{"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","text":"Mara waited."}]}]}'::jsonb),
       ('chapter-b','book-b',1,'{"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","text":"Iven returned."}]}]}'::jsonb);
INSERT INTO pair06.revisions SELECT id,revision,document FROM pair06.chapters;
