-- Disposable vanilla PostgreSQL 17 only. NEVER use a Supabase project.
-- psql -v ON_ERROR_STOP=1 -f tests/book_privileges_regression.sql
-- Add -v skip_hardening=true to reproduce the defect in the original two files.
\set ON_ERROR_STOP on
begin;
do $$
begin
  if exists(select 1 from pg_namespace where nspname='auth')
     or to_regclass('public.books') is not null then
    raise exception 'Requires empty disposable PostgreSQL; Supabase targets forbidden';
  end if;
end $$;
create role anon nologin;
create role authenticated nologin;
create schema auth;
create table auth.users(id uuid primary key);
create function auth.uid() returns uuid language sql stable as
  'select nullif(current_setting(''request.jwt.claim.sub'',true),'''')::uuid';
grant usage on schema public,auth to anon,authenticated;
alter default privileges in schema public grant all on tables to anon,authenticated;
\ir ../supabase/migrations/20261009000000_initial_author_books.sql
\ir ../supabase/migrations/20261009010000_restrict_accepted_manuscript_dml.sql
do $$
begin
  if not has_table_privilege('authenticated','public.books','TRUNCATE') then
    raise exception 'Fixture failed to reproduce the dangerous default';
  end if;
end $$;
grant truncate on public.books to public;
\if :{?skip_hardening}
\else
\ir ../supabase/migrations/20261015171325_restrict_book_privileges.sql
\endif
do $$
declare r text; t text; p text; expected boolean;
begin
  foreach r in array array['anon','authenticated'] loop
    foreach t in array array['books','chapters','chapter_revisions'] loop
      foreach p in array array['SELECT','INSERT','UPDATE','DELETE','TRUNCATE','REFERENCES','TRIGGER','MAINTAIN'] loop
        expected := r='authenticated' and
          (p='SELECT' or (t='books' and p in ('INSERT','UPDATE','DELETE')));
        if has_table_privilege(r,'public.'||t,p) is distinct from expected then
          raise exception 'Privilege mismatch: role=% table=% privilege=% expected=%',r,t,p,expected;
        end if;
      end loop;
    end loop;
  end loop;
  if (select count(*) from pg_class where oid in
      ('public.books'::regclass,'public.chapters'::regclass,'public.chapter_revisions'::regclass)
      and relrowsecurity and relforcerowsecurity) <> 3 then
    raise exception 'RLS/FORCE RLS missing';
  end if;
end $$;
insert into auth.users values ('00000000-0000-4000-8000-000000000001'),
                              ('00000000-0000-4000-8000-000000000002');
set local role authenticated;
select set_config('request.jwt.claim.sub','00000000-0000-4000-8000-000000000001',true);
insert into public.books(id,title) values ('00000000-0000-4000-8000-000000000003','synthetic ACL regression');
select set_config('request.jwt.claim.sub','00000000-0000-4000-8000-000000000002',true);
do $$
begin
  if exists(select 1 from public.books) then raise exception 'Cross-author SELECT'; end if;
  update public.books set title='forbidden';
  if found then raise exception 'Cross-author UPDATE'; end if;
  delete from public.books;
  if found then raise exception 'Cross-author DELETE'; end if;
  begin
    truncate public.books cascade;
    raise exception 'TRUNCATE unexpectedly permitted';
  exception when insufficient_privilege then null;
  end;
  begin
    insert into public.books(owner_id,title)
    values ('00000000-0000-4000-8000-000000000001','forged owner');
    raise exception 'Forged-owner INSERT unexpectedly permitted';
  exception when insufficient_privilege then null;
  end;
end $$;
reset role;
do $$
begin
  if (select count(*) from public.books) <> 1 then
    raise exception 'Fixture was changed by a foreign author';
  end if;
end $$;
rollback;
\echo PASS: 48 privilege cases, RLS flags, owned insert, cross-author and TRUNCATE denials
