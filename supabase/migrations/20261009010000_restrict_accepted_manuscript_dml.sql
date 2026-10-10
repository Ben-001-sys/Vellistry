-- K2 hardening: Supabase may have default table privileges granting DML on
-- new public tables. Absence of an UPDATE RLS policy must not be mistaken for
-- SQL-level revocation. Make chapter/revision tables read-only to author role
-- until the K3 audited transactional revision RPC is built.
-- Do not grant direct INSERT/UPDATE/DELETE on accepted manuscript content.
revoke all on table public.chapters, public.chapter_revisions from authenticated;
grant select on table public.chapters, public.chapter_revisions to authenticated;
revoke all on table public.chapters, public.chapter_revisions from anon;
