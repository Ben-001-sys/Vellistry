---
id: VEL-RPT-IMP-001B-PHASE-B-PRECHECK-20261015
title: IMP-001B authorized Phase B precheck and additional migration hold
type: execution-checkpoint
status: blocked-before-hosted-mutations
created_at: 2026-10-15
updated_at: 2026-10-15
version: 0.1.0
task_id: VEL-TASK-0005
---

# Authorized continuation; no hosted mutations

**FACT — approval provenance.** In the direct owner conversation, the agent asked
whether approval covered Phase A only or also Phase B on vellistry-dev
(lflkcrnriitrbclangyr): the two reviewed migrations, two disposable Auth users,
synthetic acceptance and cleanup, explicitly excluding merges. The owner replied
"both". This authorizes those actions; it does not authorize merging or imply a
GitHub review by an account. No chat permalink is available. Historical Phase A
statements that approval had not yet been given remain historical.

**FACT — independent read-only precheck.** Connected Supabase verified project
name/ref, eu-west-2 and ACTIVE_HEALTHY. A fresh catalog query at
2026-10-15T17:14:10.749864Z found zero public application relations, zero Auth
users and no supabase_migrations.schema_migrations. anon/authenticated are not
superusers and do not bypass RLS. The earlier role-membership/schema query found
no memberships for either role and no public-schema CREATE permission.
Remote migration listing was empty. Raw non-sensitive catalog output is in
[evidence](evidence/VEL-IMP-001B-PHASE-A-20261014/phase-b-readonly-precheck-20261015.json).
These are catalog facts, not hosted behavioral acceptance.

**Demonstrated precondition failure.** For both postgres and supabase_admin,
public-table defaults grant anon/authenticated ALL (arwdDxtm), including
TRUNCATE, REFERENCES, TRIGGER and MAINTAIN. The existing first migration revokes
anon but only adds authenticated CRUD, leaving authenticated excess privileges.
The second migration restricts chapters/revisions, not books. Row policies do
not constrain TRUNCATE. Applying only the approved files would therefore leave
the books privilege condition unsatisfied. No tables have been created.

**PROPOSAL — additional object-scoped SQL, NOT APPLIED.** CLI 2.120.0 generated
supabase/migrations/20261015171325_restrict_book_privileges.sql. It contains:

```sql
revoke all privileges on table public.books from public, anon, authenticated;
grant select, insert, update, delete on table public.books to authenticated;
```

This changes only books grants for PUBLIC/anon/authenticated; it does not change
RLS, policies, role attributes, global defaults, service-role access, chapter
write access or data. Existing migrations remain unchanged. It is a third
migration beyond the two-file approval. The Phase A migration review explicitly
requires separate approval when excessive defaults require additional SQL.
Obtain that narrow approval before any hosted application; retain the existing
approval for the original two files and disposable acceptance.

**Regression status.** tests/book_privileges_regression.sql targets an empty
vanilla PostgreSQL 17 database, rejects an existing auth schema/books table,
creates synthetic roles/auth fixtures in a rollback-only transaction, applies
the unchanged original migrations, reproduces excessive TRUNCATE and PUBLIC
inheritance, and checks 48 role/table/privilege cases plus FORCE RLS, owned
insert, foreign SELECT/UPDATE/DELETE, forged owner and TRUNCATE denials.
Foundation CI now requires the expected before-fix failure and after-fix pass.
This is NOT_RUN: no psql/postgres executable is installed; Docker info failed
because dockerDesktopLinuxEngine was stopped. Started the installed Docker Desktop runtime; the subsequent engine probe has not completed. No local PostgreSQL PASS or
hosted fix verification is claimed. This finding is prepared, not resolved.

**Application method blocked.** The pinned CLI command
corepack pnpm exec supabase migration list --project-ref lflkcrnriitrbclangyr
exited 1 (AccessTokenRequiredError). Use a secure operator CLI login; never
paste credentials into chat or commit them. The connected MCP application tool
does not accept a migration version; its generated timestamps would not match
the reviewed Git versions 20261009000000 and 20261009010000. Do not silently
substitute versions or manually fabricate history. After authentication and
additional SQL approval, inspect an exact-project db push --dry-run using
--skip-vault, exclude seeds/roles and apply only the three reviewed files.
Confirm remote history and actual effective ACLs afterward. No down migration
or destructive backout is approved; stop on unexpected state and roll forward
only with reviewed scope.

**Remaining gates.** No cloud DDL/DML, Auth user creation, env-key retrieval,
acceptance fixtures, deployments or merges occurred. Signed-out unexpired JWT
direct access remains an acceptance/private-pilot risk to observe, not waive.
GitHub CI remains separately blocked by the previously captured account
payment/spending restriction. Phase A owner approval does not turn unexecuted
CI into a PASS. PR #65 remains ChatGPT-authored; this proposed hardening and
regression are Codex-authored. PRs #65/#66/#68 remain unmerged.
