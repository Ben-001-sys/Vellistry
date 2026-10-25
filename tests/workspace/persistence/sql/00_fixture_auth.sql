-- DISPOSABLE PG17 ONLY. Synthetic stand-in, NOT Supabase Auth implementation.
create role anon nologin nobypassrls;
create role authenticated nologin nobypassrls;
revoke create on schema public from public;
create schema auth;
create table auth.users(id uuid primary key);
create table auth.sessions(id uuid primary key,user_id uuid not null references auth.users(id),not_after timestamptz);
create function auth.uid() returns uuid language sql stable set search_path=pg_catalog
as $$select nullif(current_setting('request.jwt.claim.sub',true),'')::uuid$$;
grant usage on schema auth to authenticated;
grant execute on function auth.uid() to authenticated;
revoke all on auth.users,auth.sessions from public,anon,authenticated;
alter table auth.sessions enable row level security;
alter table auth.sessions force row level security;

-- Owned throwaway tables permit a real REFERENCES denial probe (TEMP FKs cannot target persistent tables).
create schema fixture_probe;
create table fixture_probe.gateway(id uuid);
create table fixture_probe.author(id uuid);
create table fixture_probe.anonymous(id uuid);
