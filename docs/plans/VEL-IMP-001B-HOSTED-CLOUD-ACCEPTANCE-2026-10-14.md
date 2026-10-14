---
id: VEL-IMP-001B-HOSTED-CLOUD-20261014
title: IMP-001B — hosted Supabase development integration and Library acceptance
type: implementation-and-verification-handoff
status: partial-implementation-cloud-migration-blocked
created_at: 2026-10-14
updated_at: 2026-10-14
owner: project_owner
version: 0.1.0
sources:
  - docs/plans/VEL-PLAN-01-149-FEATURE-TO-TEST-CROSSWALK-2026-10-11.md
  - docs/plans/VEL-PLAN-02-ARCHITECTURE-DATA-CONTRACTS-2026-10-11.md
  - docs/plans/VEL-PLAN-04-TEST-SECURITY-RECOVERY-2026-10-11.md
  - docs/reports/VEL-IMP-001-LIBRARY-ISOLATION-2026-10-11.md
  - supabase/migrations/20261009000000_initial_author_books.sql
  - supabase/migrations/20261009010000_restrict_accepted_manuscript_dml.sql
---

# IMP-001B — hosted Supabase and real Library acceptance

**Authority and status (2026-10-14).** Owner instructed continuation after PR #64 merged to `main`. This narrowly permits implementation of safer configuration/preflight and preparation of acceptance evidence, **not automatic authorization to write/migrate/reset the connected Supabase Cloud project**, create cloud Auth users, deploy, run paid models or introduce private manuscripts. Cloud schema write actions must be reviewed and separately approved. The inherited MVP/Pilot release gates remain pending.

## Current verified facts

- Source-of-truth Git `main` at merge `4b3996ef7cda878e1af3d679454bd1bb873a79c2` (PR #64 merged 2026-10-14 22:10 UTC).
- PR #64 source head passed 66 focused mocked tests, typecheck/build; five PR workflows and five post-merge main workflows passed. This is source-/disposable-CI evidence, NOT hosted cloud acceptance.
- Owner's Supabase Cloud project `vellistry-dev` (`lflkcrnriitrbclangyr`, `eu-west-2`, PG 17) returned `ACTIVE_HEALTHY` with **zero public tables and zero migration-history entries** on connected read-only checks on 2026-10-14.
- Local Next app lives under `apps/web`; local Nest app under `apps/api`. Browser login/account flows require working Supabase Cloud Auth. Existing real data remains prohibited.
- Current Git branch for this checkpoint: `feat/vel-imp-001b-hosted-cloud-preflight` (do not work directly on `main`).

## Changes in this proposed code PR

1. Per-runtime ignored environment templates (`apps/web/.env.example` and `apps/api/.env.example`) replace the prior misleading localhost Supabase root example.
2. `scripts/hosted_supabase_preflight.mjs` parses **only local env files** (not `process.env` secrets), validates expected dev project/URL, **sb_publishable_** key type and equality and loopback-only Nest. It makes **no remote requests**, prints only static, redacted check results and expressly distinguishes local configuration from real connectivity/schema security.
3. `tests/hosted_supabase_preflight.test.mjs` exercises coherent configuration, production/wrong project, localhost URL, secret/service-role key rejection, legacy anon JWT rejection, mismatched public keys, exposed Nest/wrong BFF upstream, invalid project ref, missing files and diagnostic redaction. CI executes synthetic checks without real credentials.
4. Existing client error copy is now cloud-neutral. **No client authorization/RLS, table SQL, frontend feature, network transport or cloud schema changed.**

## Workstation setup (no database operations)

Do this in a **clean local checkout** of the eventual reviewed branch/merged `main`, preserving existing work first:

```powershell
git fetch origin
git status --short --branch
git log -1 --oneline origin/main
corepack pnpm --version
```

The repository pins `pnpm@10.18.0`. **Do not reset or discard changes** just to synchronize. On an authorized updated checkout:

```powershell
if (-not (Test-Path apps/web/.env.local)) { Copy-Item apps/web/.env.example apps/web/.env.local }
if (-not (Test-Path apps/api/.env)) { Copy-Item apps/api/.env.example apps/api/.env }
```

**Existing local .env files are preserved, not overwritten.** Use the **same verified Cloud dev project** `https://lflkcrnriitrbclangyr.supabase.co` and its actual **modern publishable key** in both ignored files. Edit only locally. Obtain the key from [Supabase Dashboard for vellistry-dev](https://supabase.com/dashboard/project/lflkcrnriitrbclangyr) → Connect / API keys. **Never paste raw key values, service-role keys, passwords, bearer tokens or manuscripts in chat, Cursor prompts, PRs or Git.** `NEXT_PUBLIC_*` is browser-visible, so only the publishable key is allowed. The preflight validates formatting, not a key's actual validity.

Run:

```powershell
corepack pnpm install --frozen-lockfile
corepack pnpm test:hosted-preflight
corepack pnpm check:hosted-env
corepack pnpm test:library-isolation
corepack pnpm check
corepack pnpm build
```

With the cloud schema *still empty*, database-backed Library requests must be recorded **BLOCKED**, not faked as PASS. If beginning local frontend/API processes, use separate terminals for `corepack pnpm dev:api` and `corepack pnpm dev:web`; no port binding beyond loopback. Local env variables should never be printed in transcripts.

## Existing migrations — requested review before remote application

The Git repository already contains exactly two intended foundation migration files, in order:

1. `supabase/migrations/20261009000000_initial_author_books.sql`: `public.books`, `public.chapters`, `public.chapter_revisions`, UUID FK ownership, `auth.uid()` owner default, owner isolation policies, force RLS, limited grants.
2. `supabase/migrations/20261009010000_restrict_accepted_manuscript_dml.sql`: revoke direct chapter/revision DML from `anon` and `authenticated`, preserve read-only visibility subject to RLS.

**Security/code review required before apply:**

- Ensure `books.owner_id DEFAULT auth.uid()` and `WITH CHECK` prohibit client owner spoofing.
- Ensure `anon` has no data access to any authored table; authenticated `books` CRUD requires owner match; nested chapters/revisions SELECT require owning book. Inherited/default grants and exposed Data API settings must be inspected independently of row policies.
- Ensure direct `chapters` and `chapter_revisions` INSERT/UPDATE/DELETE remain revoked for authors. Do not enable chapters CRUD until the separately reviewed atomic save/RPC contract is designed and tested.
- Confirm `auth.users` reference, schema privileges, and the actual **migration history mechanism** before applying. Executing SQL manually in Dashboard would not by itself register the Git migration versions in Supabase migration history; keep deployment auditable/reproducible.
- **Do not** run `supabase db push`, `supabase db reset --linked`, any `supabase:reset` npm script, local K2B grant-revocation experiments, or create Auth fixtures against hosted project under this task.
- No public pilot: existing **signed-out but still-valid JWT direct PostgREST** access was observed in the prior disposable RLS investigation. A successful Nest guard does not secure a direct Data API route after logout. That issue requires independent owner-reviewed architecture/security mitigation.

**Hold point:** present exact reviewed migration list, target project reference, expected changes, rollback/backout limitations, and a clear approval request. Only the owner can authorize a Cloud database write. Because the cloud database is empty, its schema is not yet testable against the running app.

## Planned hosted-cloud acceptance test matrix (NOT RUN)

| Test | Expected evidence | Status |
|---|---|---|
| ENV-01 | Web/Nest .env key names, correct dev ref, matching publishable key, private backend; no secrets in logs | NOT RUN on owner's current workstation |
| DB-01 | Git migration history equals two reviewed versions; all three tables, constraints, grants and RLS present | BLOCKED pending cloud schema approval |
| AUTH-01 | Two new disposable Auth accounts can sign in through real browser | BLOCKED pending synthetic user authorization |
| LIB-01 / ACC-M1-01 | A creates book; refresh/reopen returns durable row owned by A | BLOCKED |
| LIB-02 / ACC-M8-01 | B sees none of A's books, cannot guess/read or write A's rows | BLOCKED |
| LIB-03 | Signing out hides rows, switching A→B never flashes A's titles | BLOCKED browser test |
| LIB-04 | Bad titles and forged `owner_id` denied; server assigns owner via auth | BLOCKED |
| SEC-01 | Reuse old JWT against direct Data API after logout and document exact scope; DO NOT mark private-pilot PASS until secure | BLOCKED |
| CRED-01 | Browser never receives `service_role`/`sb_secret_`; no raw keys or manuscript in evidence | NOT RUN |
| VAL-01 | Full `VEL-JRN-001` and `VEL-JRN-011` end-to-end | NOT RUN; IMP-001 alone cannot complete JRN-001 chapters |

**Exit:** merged and tested configuration guard; separately authorized cloud migrations with audited history and schema/RLS checks; real synthetic two-author app acceptance on exact code; security and future chapter save still appropriately gated. Until then, PR #64 merge only proves the bounded client/server implementation and synthetic/disposable tests.
