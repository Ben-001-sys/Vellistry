---
id: VEL-RPT-IMP-001B-MIGRATION-20261014
title: IMP-001B Phase A read-only migration and hosted acceptance review
type: security-and-migration-review
status: proposed-owner-review-cloud-operations-blocked
created_at: 2026-10-14
updated_at: 2026-10-14
version: 0.1.0
task_id: VEL-TASK-0005
sources:
  - https://github.com/Ben-001-sys/Vellistry/issues/67
  - supabase/migrations/20261009000000_initial_author_books.sql
  - supabase/migrations/20261009010000_restrict_accepted_manuscript_dml.sql
  - https://supabase.com/docs/guides/deployment/database-migrations
  - https://supabase.com/docs/reference/cli/supabase-db-push
---

# Read-only review; no cloud operation has been performed

**FACT.** This Codex review examines the two unchanged Git migration files at main
`4b3996ef7cda878e1af3d679454bd1bb873a79c2`. It does not run SQL, establish
current cloud health/emptiness, apply migrations or create users. Prior healthy,
zero-table/zero-history observations of `vellistry-dev` are reported inputs from
Issue #67 and ChatGPT PR #65, not independently rechecked Phase A facts.

**Target for a future authorization only:** Supabase Cloud `vellistry-dev`,
project `lflkcrnriitrbclangyr`, eu-west-2,
`https://lflkcrnriitrbclangyr.supabase.co`. Local config.toml project_id
`vellistry`, local ports, or a generic database name such as `postgres` do not
identify that hosted project. Confirm the dashboard organization/ref/region
and the explicit CLI target together before any authorized operation.

## Exact migration scope and source review

1. `20261009000000_initial_author_books.sql`:
   creates pgcrypto if absent, books/chapters/chapter_revisions, UUID and composite
   foreign keys, title/position/revision checks, owner/date and position indexes.
   Books owner defaults to auth.uid(); authenticated SELECT/INSERT/UPDATE/DELETE
   policies all constrain owner identity, and UPDATE includes WITH CHECK.
   Chapters/revisions SELECT traverses the owned book. RLS and FORCE RLS apply
   to all three tables; anon table privileges are explicitly revoked.
   Authenticated books CRUD and chapter/revision SELECT are granted.
2. `20261009010000_restrict_accepted_manuscript_dml.sql`:
   explicitly revokes all authenticated chapter/revision privileges then grants
   SELECT only, and revokes anon privileges again. This closes reliance on
   missing write policies where inherited/default DML privileges might exist.
   No transactional save RPC or chapter write permission is supplied.

The worktree SHA-256 values observed on Windows (CRLF checkout bytes, not a
cross-platform canonical hash) were respectively
`17d544949d81b937eb4d21287c7fbfb6bbaa9c220ac2f4d33a04119616fb4c39` and
`cae63e488455928a41bb4e2882a7273efa133f6b7af30a2d75ca22ad70f9635c`.
Commit plus Git blob identities in the ContextPack are authoritative across
line-ending conversions. Both migrations must remain byte-identical in Git
to that reviewed input; rerun review if either changes.

**INTERPRETATION.** The row policies express per-author isolation and the second
migration deliberately keeps accepted manuscript content read-only. This is
source analysis, not a hosted RLS PASS.

**Unresolved pre-apply review conditions:**

- The first migration grants books CRUD without first revoking all possible
  authenticated/PUBLIC book privileges. Effective cloud default ACLs and role
  inheritance are unknown here. An inherited TRUNCATE grant, for example, is
  not constrained by row policies. Do not assume absence of extra privileges:
  inspect default ACLs before application and effective privileges after it.
  If they are excessive, obtain approval for a separately reviewed SQL
  hardening change before hosted acceptance; Phase A changes no migration.
- FORCE RLS does not constrain superusers/BYPASSRLS roles. No service or secret
  role may be used for ordinary acceptance requests.
- Database owner default is not by itself authorization; WITH CHECK must reject
  a direct insert with another owner's UUID, and UPDATE must not transfer it.
- DDL is not an idempotent re-run script: CREATE TABLE/POLICY will conflict on
  existing objects. Stop on unexpected tables/history; do not mask errors with
  migration repair or pretend manually executed SQL has a recorded deployment.
- Cascades from auth.users to books to chapters/revisions are destructive.
  updated_at has a default but no update trigger; do not claim general update
  timestamp behavior. No chapters feature is accepted by this task.
- Direct PostgREST use of a still-valid signed-out JWT remains a known private
  pilot blocker. The Nest guard and these RLS policies do not prove immediate
  token revocation. Phase B must observe and report it, never waive it.

## Future auditable application method — NOT EXECUTED / approval required

The installed lockfile resolves Supabase CLI **2.120.0**. Only its version and
`db push --help` / `migration list --help` were inspected. Help explicitly
states db push may update Vault secrets before migrations unless --skip-vault
is used. Therefore a future two-file-only authorization must exclude Vault,
roles and seed operations, and use the explicit project-ref and --skip-vault
controls supported by that version. No dry-run was attempted in Phase A.

The owner/operator must first authorize read access and application to the exact
project, verify it is disposable development without private data, review the
two immutable files and default privilege conditions, inspect existing remote
migration history, approve a backout plan and control application traffic.
Use the CLI's supported migration application/history mechanism; preview the
pending versions under the same exact target, then apply only the reviewed two.
Do not use --include-all, --include-roles or --include-seed to bypass a mismatch.
Do not run a linked reset. Do not run K2B experiments against cloud: they
intentionally revoke grants or break the normal API.

After separately authorized application, capture the CLI result and remote
history versions `20261009000000`, `20261009010000`, then compare
tables/constraints/defaults/policies/privileges with the source. A SQL Dashboard
paste alone does not register the Git migration versions. Any history repair
requires its own reviewed explanation/authorization, not a fabricated PASS.

## Proposed read-only verification queries — NOT RUN

These are review material for the authorized operator, not Phase A commands.
Check to_regclass before querying a potentially absent history table.

```sql
select to_regclass('supabase_migrations.schema_migrations');
-- Only if present:
select version, name from supabase_migrations.schema_migrations order by version;

select c.relname, c.relrowsecurity, c.relforcerowsecurity,
       pg_get_userbyid(c.relowner) as table_owner
from pg_class c join pg_namespace n on n.oid=c.relnamespace
where n.nspname='public' and c.relname in ('books','chapters','chapter_revisions');

select tablename, policyname, roles, cmd, qual, with_check
from pg_policies where schemaname='public'
and tablename in ('books','chapters','chapter_revisions');

select conrelid::regclass, conname, pg_get_constraintdef(oid)
from pg_constraint where conrelid in
('public.books'::regclass,'public.chapters'::regclass,'public.chapter_revisions'::regclass);

select a.attrelid::regclass, a.attname, pg_get_expr(d.adbin,d.adrelid)
from pg_attribute a join pg_attrdef d on d.adrelid=a.attrelid and d.adnum=a.attnum
where a.attrelid in
('public.books'::regclass,'public.chapters'::regclass,'public.chapter_revisions'::regclass);

select r, t, p, has_table_privilege(r, 'public.' || t, p) as allowed
from (values ('anon'),('authenticated')) roles(r)
cross join (values ('books'),('chapters'),('chapter_revisions')) tables(t)
cross join (values ('SELECT'),('INSERT'),('UPDATE'),('DELETE'),
                   ('TRUNCATE'),('REFERENCES'),('TRIGGER')) privileges(p);

select defaclrole::regrole, defaclnamespace::regnamespace, defaclobjtype, defaclacl
from pg_default_acl;
select rolname, rolsuper, rolbypassrls from pg_roles
where rolname in ('anon','authenticated');
select roleid::regrole, member::regrole from pg_auth_members;
```

Also inspect PUBLIC/schema USAGE/CREATE and exposed Data API settings; compare
effective grants, not just explicit grants. Acceptance expects anon no table
privileges; authenticated books CRUD only and chapter/revision SELECT only.
A query error or unexpected result is a hold, not evidence that a permission
is safely absent. Never include tokens, passwords or connection strings in logs.

## Backout limits

Neither migration supplies a down migration. Do not drop shared pgcrypto or
auth.users. Dropping the new tables would destroy rows and cascaded manuscript
history; it needs explicit destructive approval and a verified backup/restore
plan if any data exists. Prefer a reviewed roll-forward fix. Stop before
application if target/history/default privileges differ from the approved
snapshot. A successful source build is not a rollback rehearsal.

## Future hosted acceptance matrix — every item BLOCKED / NOT RUN in Phase A

1. **ENV-01:** operator configures the ignored per-app files using the actual
   publishable key locally, verifies the exact project, supported file layout
   and loopback API. Restart both apps and rebuild Next when public build-time
   settings change. Preflight only checks formatting/consistency, never whether
   the supplied key belongs to that project or whether the database is reachable.
2. **DB-01:** after migration approval, verify both history versions and all
   reviewed schema/grants/RLS. Resolve any excess inherited/default privilege.
3. **AUTH-01:** separately authorize creation and cleanup of exactly two
   disposable synthetic Auth users A/B; approve confirmation/sign-in settings
   deliberately (local config.toml does not configure hosted Auth). Keep their
   passwords/tokens local and out of evidence.
4. **LIB-01:** through real browser Next BFF and Nest, A creates a synthetic book,
   refreshes, closes/reopens the page and signs back in. Verify one durable A
   row through approved checks. This covers the book subcase, **not full
   ACC-M1-01**, which includes two chapters and remains outside IMP-001B.
5. **LIB-02:** B lists no A rows; guessed A UUID SELECT/UPDATE/DELETE is denied
   or produces no row through authorized API/Data API paths. A/B switching and
   delayed GET/POST completion must never flash the other author's titles.
6. **LIB-03:** malformed/empty/oversized title, 401, load failures and POST
   acknowledgement loss must show the correct distinct states; unknown saves
   stay locked except explicit duplicate-risk retry. Do not create repeated
   real fixture writes to simulate this without explicit authorization.
7. **LIB-04:** the BFF/Nest intentionally **ignore/strip** client owner_id; they
   do not promise to reject the entire HTTP request. A valid app POST carrying
   a forged owner_id must create only as the authenticated actor. Separately,
   a direct Data API insert/update attempting another owner's UUID must fail
   WITH CHECK or otherwise mutate no foreign row. Record each path separately.
8. **SEC-01:** after scoped logout, retain the old JWT only in local process
   memory for separately authorized direct Data API/Nest checks. Record access,
   expiry and session-liveness observations without exposing the token. Any
   residual direct access blocks private-pilot acceptance pending an owner-
   reviewed mitigation; do not change grants with K2B diagnostic scripts.
9. **EVIDENCE/CLEANUP:** record exact code SHA, non-sensitive row/count/boolean
   observations, permission denials and fixture cleanup authorization/result.
   No real manuscripts, service keys or production-readiness claims. Full
   VEL-JRN-001/011 and chapters/deletion journeys are not passed by these book
   subcases.

## Owner hold point

**PROPOSAL, no approval inferred:** review this Phase A draft and the original
ChatGPT PR #65, separately decide PR #66, then explicitly authorize Phase B
against `vellistry-dev / lflkcrnriitrbclangyr`: exact migration versions/content,
approved history method excluding Vault/seed/roles, privilege conditions,
operator credential handling, two disposable Auth users, allowed synthetic
book operations/negative probes and cleanup/backout. Until then **STOP BEFORE
HOSTED ACCEPTANCE**. No merge, cloud read/write, users, migration or deployment
is authorized by this document.
