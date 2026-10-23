# Vellistry

Vellistry is an author-controlled fiction writing application with optional AI.
The Next.js/NestJS/Supabase foundation and author-isolated Book Library are
integrated. Full manuscript editing, hosted acceptance, private pilot and release
remain gated; this repository is not a deployed product.

Start with [CURRENT-STATE.md](CURRENT-STATE.md) for the checked main SHA, active
tasks/PRs, actual CI evidence, security holds and historical links. Then read
[PROJECT.md](PROJECT.md), [PROJECT-CONSTITUTION.md](PROJECT-CONSTITUTION.md),
[SOURCE-OF-TRUTH.md](SOURCE-OF-TRUTH.md) and [AGENTS.md](AGENTS.md).

## Governed implementation

The owner selects scope and approves consequential changes/merges. ChatGPT
coordinates and independently reviews evidence; Codex implements bounded tasks
under [ADR0008](docs/decisions/ADR-0008-codex-primary-agentic-implementation-workflow.md).
Use the existing [Task â†’ immutable ContextPack â†’ ExecutionBundle workflow](docs/agent-workflow/README.md)
in an isolated branch, with sources committed and pack validated before edits.
Planning, write access and passing CI do not grant implementation or release approval.
Original ChatGPT PR66/65 and Cursor-era work keep their provenance.

## Application foundation and development

- `apps/web`: Next.js16/React19; Supabase session clients, protected Library UI/BFF.
- `apps/api`: NestJS11; verified author-token books endpoints with RLS-scoped calls.
- `supabase/migrations`: schema and restrictive manuscript DML migration. Do not
  apply these to a hosted project without exact-target, scoped owner approval.
- Full Tiptap editor, revision-save RPC, Story Memory and optional AI are future
  bounded slices. No paid provider is required by the manual writing experience.

Use Node24 and repository-pinned pnpm10.18.0 through Corepack, with
`corepack pnpm install --frozen-lockfile`. `corepack pnpm check`,
`corepack pnpm build` and `corepack pnpm test:library-isolation` verify the
repository foundation without hosted writes.

The owner-selected desktop development target is **Supabase Cloud**. The
placeholder reference below is the canonical configuration guide. The
[earlier desktop plan](docs/plans/VEL-CURSOR-DESKTOP-SETUP-PLAN-2026-10-11.md)
is dated history; its Cursor assignment is not an active dispatch. Local
Supabase/Docker is used for disposable tests and is not required to connect
the desktop app to its separately authorized hosted target.

## Desktop configuration placeholder reference

**Reference only:** this remediation does not authorize hosted access, retrieving
keys, authenticating the CLI, applying migrations or creating cloud users. Do
not inspect or overwrite existing local configuration. The owner must separately
authorize target-specific setup before filling these placeholders. Configuration
preflight success alone proves no connection, schema, RLS, Auth or persistence.

For a separately authorized setup, the Web app reads ignored
apps/web/.env.local and the API reads ignored apps/api/.env. Create each file
only if absent; preserve and review an existing file instead of replacing it.
Replace YOUR_PROJECT_REF and REPLACE_WITH_SB_PUBLISHABLE_KEY locally with the
same authorized development project's values in both files. The project URL
uses HTTPS. Never paste keys into Git, chat, PRs or evidence. A publishable key
is public in browser bundles; it does not replace a verified user's token or RLS.
Do not use a secret/service_role key for either ordinary author path.

Web reference (apps/web/.env.local):

```dotenv
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=REPLACE_WITH_SB_PUBLISHABLE_KEY
VELLISTRY_API_BASE_URL=http://127.0.0.1:4100
```

API reference (apps/api/.env):

```dotenv
SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co
SUPABASE_PUBLISHABLE_KEY=REPLACE_WITH_SB_PUBLISHABLE_KEY
API_HOST=127.0.0.1
API_PORT=4100
```

The root .env.example is a **legacy disposable-local reference**, not the hosted
setup or a file automatically loaded by both apps. Per-app .env.example files
are not present on main; use this canonical reference. No env template or secret
path exception is added to the governance allowlist.

After separately authorized local configuration, use a clean shell without
inherited app variables, DOTENV_KEY or DOTENV_CONFIG_* overrides. Competing Web
env files are outside the bounded file-only preflight; review them without
printing confidential contents. From the repository root, replace
YOUR_PROJECT_REF before running the offline-only check:

```powershell
corepack pnpm check:hosted-config YOUR_PROJECT_REF
```

The preflight reads only the two local files and makes no network call. Do not
run it in a credential-bearing checkout as part of an unapproved agent task.
Its synthetic regression suite needs no configured files:

```powershell
corepack pnpm test:hosted-preflight
```

Normal development uses the existing dev:web and dev:api scripts only after
the applicable setup authorization; this guide does not grant hosted acceptance.
Disposable CI Supabase/PostgreSQL services remain separately scoped tests.
Local resets are permitted only on explicitly disposable instances. For offline
source/SQL evidence and the separate hosted gates, see the
[dated readiness review](docs/reports/VEL-DB-READINESS-001-OFFLINE-REVIEW.md).
The third privilege migration remains planning-only; signed-out JWT access is
still a private-pilot blocker.

## Verification and review

[Primary Vellistry CI](.github/workflows/ci.yml) runs exact-head governance on PRs,
conservative applicable application/security checks before merge, and full main
or manual verification. Draft advisory execution deliberately leaves the stable
merge gate blocked. The25 older workflows are **manual-only** historical jobs.

Run `python scripts/agent_workflow.py validate`,
`python scripts/check_knowledge_metadata.py`,
`python scripts/check_implementation_readiness.py`,
`python scripts/spec_traceability.py validate` and focused Python unit tests.
The integrated runner is `python scripts/ci_governance.py` (Linux is the CI
reference environment; the Windows fixture descriptor/encoding defects were
corrected through PR95 and full local governance has subsequently passed).
Green checks do not prove hosted RLS acceptance, direct signed-out JWT revocation,
author usability, billing savings, branch-protection enforcement or release readiness.
Standing owner governance applies to consequential operations. The temporary
[one-time remediation delegation](docs/agent-workflow/authorizations/VEL-REM-INTEGRATION-20261019.yaml)
permits only reviewed, verified repository remediation integrations and expires
at program completion; it grants no future feature or hosted authority.

Historical integration: PR #43 **merged on 2026-10-10**, restoring21 research files. Its seven passing workflows were research evidence; see the [recovery report](docs/reports/REPOSITORY-INTEGRITY-RECOVERY-2026-10-10.md), not a fresh current-head result.

## Current remediation authority

The default owner approval boundaries remain in force. The [recorded one-time delegation](docs/agent-workflow/authorizations/VEL-REM-INTEGRATION-20261019.yaml) permits only eligible repository remediation integrations during this unfinished assignment, with distinct trusted review and actual CI. It grants no hosted, private-manuscript, release or future-feature authority. [CURRENT-STATE.md](CURRENT-STATE.md) and the [original44-item ledger](docs/reports/VEL-MASTER-REMEDIATION-LEDGER.md) distinguish verified progress from remaining acceptance.

The temporary remediation delegation ends under its [recorded closure condition](docs/agent-workflow/authorizations/VEL-REM-INTEGRATION-20261019-CLOSURE.md). After the final merge/post-main attestation, ordinary owner-governed approval resumes; this exception grants no future feature authority.
