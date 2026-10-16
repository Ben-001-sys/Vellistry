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
Use the existing [Task → immutable ContextPack → ExecutionBundle workflow](docs/agent-workflow/README.md)
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

The owner-selected desktop development target is **Supabase Cloud**. A local
Supabase/Docker stack is **not required** for that connection. Follow the
[historical hosted setup plan](docs/plans/VEL-CURSOR-DESKTOP-SETUP-PLAN-2026-10-11.md)
with the current AGENTS role contract; do not execute its old Cursor assignment.
Runtime environment values belong in untracked local configuration. Do not print
or commit keys/tokens, use service-role authority in normal author paths, or run
remote migration/reset/fixture commands without separate authorization.

Disposable local Supabase/PostgreSQL services are used for isolated CI tests;
those fixtures do not replace the selected hosted development target or establish
hosted acceptance. Local resets are destructive and permitted only on explicitly
disposable instances. This documentation task does not authorize cloud operations.

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
reference environment; a historical Windows R01 fixture descriptor issue remains).
Green checks do not prove hosted RLS acceptance, direct signed-out JWT revocation,
author usability, billing savings, branch-protection enforcement or release readiness.
Owner-only approval remains necessary before merge and consequential operations.

Historical integration: PR #43 **merged on 2026-10-10**, restoring21 research files. Its seven passing workflows were research evidence; see the [recovery report](docs/reports/REPOSITORY-INTEGRITY-RECOVERY-2026-10-10.md), not a fresh current-head result.
