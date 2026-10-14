---
id: VEL-EB-0005
title: Codex IMP-001B repository-only Phase A verification
type: execution-bundle
status: proposed-for-review
created_at: '2026-10-14'
version: 0.1.0
task_id: VEL-TASK-0005
context_pack_id: VEL-CP-0005
base_commit: 237e41824012c1c1136eefcee6a5d11f5f974c77
verified_source_head: a6dee3edd37ab05b2607e716e375f0d216b5066a
main_base: 4b3996ef7cda878e1af3d679454bd1bb873a79c2
reviewed_pr65_head: 604e1ebfd0baab930ee4dc39aecf7289dc64188a
reviewed_pr66_head: 808699879b69c912b779522fe063db9385925e56
agent:
  name: Codex
  model: GPT-6
  model_precision: System identifies GPT-6; a more specific model build/variant is not exposed.
  runner: Codex desktop; Windows PowerShell; isolated managed Git worktree
  role: primary-implementer-for-owner-authorized-Phase-A
sources:
  - PROJECT-CONSTITUTION.md
  - SOURCE-OF-TRUTH.md
  - docs/decisions/ADR-0006-next-nest-supabase-implementation-foundation.md
  - docs/requirements/MVP-SCOPE-DECISION-2026-10-09.md
  - docs/agent-workflow/inputs/VEL-TASK-0005-ISSUE-67.md
  - docs/agent-workflow/inputs/VEL-TASK-0005-ADR-0008.md
  - scripts/hosted_supabase_preflight.mjs
  - tests/hosted_supabase_preflight.test.mjs
  - docs/plans/VEL-IMP-001B-HOSTED-CLOUD-ACCEPTANCE-2026-10-14.md
  - supabase/migrations/20261009000000_initial_author_books.sql
  - supabase/migrations/20261009010000_restrict_accepted_manuscript_dml.sql
evidence:
  - Actual source-head command outputs and source-manifest.json under docs/reports/evidence/VEL-IMP-001B-PHASE-A-20261014/
  - Original eleven preflight tests passed; four new regressions failed before the bounded fix; all nineteen then passed.
  - No cloud requests or credentials were used; migration/hosted observations are source review or historical inputs.
  - Exact final report-head renewed command outputs and CI links are recorded in the draft PR after its commit exists.
review:
  status: pending
  approved_by: null
  evidence: null
---

# VEL-EB-0005 — Phase A only

## Work performed

**FACT.** Read Issue #67, actual main, all ten PR #65 changed files, ADR-0008
from unmerged PR #66, AGENTS, PROJECT/constitution/source authority, latest
current state, accepted MVP/ADR-0006, PLAN-02/04 and the IMP-001 report.
No scope or acceptance decision was silently changed.

The original checkout at `78f80bb33a27db362202b81d04db05919fd77a52` was clean.
Fetched main `4b3996ef7cda878e1af3d679454bd1bb873a79c2`.
Because no takeover of #65 was explicitly authorized, created isolated branch
`codex/vel-imp-001b-phase-a` from fresh main in the managed worktree.
Cherry-picked all eleven #65 commits with -x; imported tree
`212ea83882928c323c11e2b38eb684daf2fe7642` exactly matched #65
`604e1ebfd0baab930ee4dc39aecf7289dc64188a` before Codex changes.

**Authorship:** PR #65's original preflight, eleven tests, templates, CI step,
copy and plan remain **ChatGPT-authored**, as Issue #67/ADR-0008 explicitly
identify them. Git actor metadata alone does not identify the AI author.
Original/copy SHA mappings and raw issue text are retained in the evidence
directory. Codex authored the bounded corrections/eight new tests and this
verification/migration-review/task/pack/bundle work. Neither #65 nor #66 was
changed, merged or relabeled.

Unused IDs VEL-TASK-0005 / VEL-CP-0005 / VEL-EB-0005 were checked and used.
Task/source commit `237e41824012c1c1136eefcee6a5d11f5f974c77` pins the immutable
ContextPack. This is a same-session reproducibility packet, not an independent
cold-start execution. The issue snapshot is readable text; raw JSON evidence
also retains the original body line breaks.

## Facts and evidence

**Original ten-file review:**

- `.env.example`: map-only root guidance is appropriate; it exposed that README
  still instructed copying that now-comment-only root file and starting/resetting
  local Supabase. Codex corrected the active README to hosted, gated setup,
  preserving the old bootstrap as explicitly historical.
- `apps/web/.env.example` and `apps/api/.env.example`: placeholder-only, correct
  runtime names, no real values, intended loopback Nest and matching publishable
  key. No ignored env files were created or overwritten in either checkout.
- `apps/web/src/lib/supabase/browser.ts`: cloud-neutral missing-config copy;
  no authorization change required.
- `package.json`: pinned pnpm 10.18.0 and two scripts are appropriate; no new
  dependency/version change. Frozen install succeeds.
- `scripts/hosted_supabase_preflight.mjs`: Node 24 parseEnv actually works.
  Original validator correctly rejects wrong/local URLs, mismatched keys,
  secret/legacy key shapes and exposed Nest configuration, without network.
  However it ignored runtime overrides and competing Next files.
- `tests/hosted_supabase_preflight.test.mjs`: original eleven are valid synthetic
  tests, but did not cover runtime precedence or actual CLI output. Added eight
  tests including actual Next loader and Windows Node subprocesses.
- `.github/workflows/implementation-foundation.yml`: existing test step is
  correct; missing script/test/root-template path triggers were added to both
  PR and push filters. Existing frozen install/library suite/build retained.
- `docs/plans/VEL-IMP-001B-HOSTED-CLOUD-ACCEPTANCE-2026-10-14.md`: corrected
  runtime/file-layout limits, explicit Next loopback hostname and owner-spoof
  expectations (app strips owner_id; direct DB spoof must be denied), and linked
  the read-only migration/security review. Full ACC-M1-01 includes chapters.
- `CURRENT-STATE.md`: imported merged-#64 history is retained, and the newest
  Codex Phase A checkpoint separates original authorship, current results and
  blocked hosted acceptance.

**Demonstrated findings and fixes:**

1. P1: file-only success could hide inherited API/project/key/host overrides.
   The corrected preflight blocks known inherited app/dotenv override names
   without reading or printing their values.
2. P1: higher-priority Next env files could supply an unsafe key/project despite
   a passing .env.local check. Actual installed @next/env reproduced precedence.
   The bounded guard rejects competing files by presence; it never loads,
   deletes or overwrites them. NODE_ENV=test is rejected because .env.local
   is ignored in that mode. These produced four failing new regression cases
   on the original code: **15 pass / 4 fail**, exit 1; now **19/19 pass**.
3. P2: future script/test-only commits could miss foundation CI. Both trigger
   filters now include the preflight script, tests and root template.
4. P2 documentation: README used obsolete local bootstrap/root-template copy,
   and the plan promised loopback startup while Next defaults to 0.0.0.0.
   Installed CLI help confirms this; documented startup now supplies hostname.
5. P2 documentation: forged owner_id is ignored by app input adapters, not an
   HTTP rejection contract. Future direct Data API tests must separately prove
   RLS rejects cross-owner insert/update.

The corrections do not change database SQL, runtime authorization, frameworks,
lockfile or dependencies. `git diff --quiet origin/main -- pnpm-lock.yaml
supabase/migrations` exited 0. A Windows pnpm inline -p probe had quoting failure;
a file-based Node invocation then confirmed the actual apps/api working
directory (exit 0). This was tooling syntax, not a runtime defect.

## Interpretations

The repository-only Phase A deliverables are prepared for ChatGPT/coordinator
and owner review. The same agent's source review and tests are not independent
human approval. ADR-0008 role selection is owner-directed, but its documentation
PR #66 remains separately unmerged; this task does not import its enforcement
changes or claim that historical ChatGPT/other-agent work was Codex-produced.

A passing preflight validates only the documented single-file layout at that
moment. It cannot prove key/project membership, cloud connectivity, actual port
binding, migration application, auth behavior, RLS or durable saves. Restart
and rebuild after public configuration changes; do not change configuration
after checking and treat that as the same verified state.

## Proposals

Owner reviews this separate draft against original #65 and decides integration
or supersession; do not merge both blindly. Decide #66 separately. Hosted
acceptance remains BLOCKED until exact-project Phase B authorization covers
both reviewed migration versions/content, auditable history with Vault/seed/
roles excluded, effective privileges, two disposable Auth accounts, allowed
synthetic book/security probes, credential handling and cleanup/backout.

## Tests

Executed on committed source `a6dee3edd37ab05b2607e716e375f0d216b5066a`,
Windows PowerShell, Node 24.13.0, Corepack 0.34.5, pnpm 10.18.0,
Python 3.10.10; no hosted credentials. Full output, UTC starts and exits:
[evidence](../../reports/evidence/VEL-IMP-001B-PHASE-A-20261014/source-manifest.json).

- PASS, exit 0: `corepack pnpm install --frozen-lockfile` (176 pinned packages;
  first isolated install downloaded them, no version/lock changes).
- PASS, exit 0: `corepack pnpm test:hosted-preflight` — **19/19**, zero skipped.
- PASS, exit 0: `corepack pnpm test:library-isolation` — **66/66**, zero skipped.
- PASS, exit 0: `corepack pnpm check` — Nest and Next typechecks.
- PASS, exit 0: `corepack pnpm build` — Nest and Next 16.4 production builds.
- PASS, exit 0: `python scripts/agent_workflow.py validate` — 4 tasks, 2 packs,
  1 bundle at that source head, before this new bundle was committed.
- PASS, exit 0: `python -m unittest discover -s tests -p 'test_agent_workflow.py' -v`
  — **15/15** workflow regressions.
- PASS negative probe, **expected/actual exit 1**:
  `corepack pnpm check:hosted-env` — clean worktree lacks both env files and
  reports BLOCKED without values or network. This is not configured-cloud PASS.

Final report-head commands are rerun after this bundle is committed; its exact
SHA and complete output/CI links are recorded in the draft PR, avoiding a
self-referential Git SHA here. Final validator must count **2 bundles**.
All cloud acceptance cases and verification SQL in the migration review:
**BLOCKED / NOT_RUN**. No logged-in product browser acceptance is claimed.

## Artifacts

- Task/pack/bundle: VEL-TASK-0005 / VEL-CP-0005 / VEL-EB-0005 in their standard
  docs/agent-workflow directories.
- [Read-only migration review and future matrix](../../reports/VEL-IMP-001B-PHASE-A-MIGRATION-REVIEW-2026-10-14.md).
- Source outputs/manifest, provenance mapping and raw Issue #67 under
  `docs/reports/evidence/VEL-IMP-001B-PHASE-A-20261014/`.
- Codex-only changed paths: preflight script/tests, foundation trigger filters,
  README, plan addendum, current-state checkpoint, task/input snapshots/pack/
  bundle, migration-review report and evidence. The original ten-file PR #65
  proposal is transparently included via eleven provenance-marked cherry-picks.
- Exact final submitted head and CI: draft PR linked by the final task response.
  The reporting-only commit after a6dee3e leaves tested code/workflow unchanged.

## Risks

- No cloud state was rechecked; prior healthy/empty observations can change.
- First SQL file does not explicitly eliminate excess inherited/default books
  privileges. Effective ACLs, including TRUNCATE (which bypasses RLS), require
  pre-apply review/authorized verification. Do not silently assume hosted
  defaults or edit the migrations under Phase A.
- CLI 2.120.0 db push help describes Vault updates unless --skip-vault.
  Only help/version were inspected; no dry-run/application/history query ran.
- Old signed-out JWT direct PostgREST access remains a private-pilot blocker.
- Library in-memory unknown-save recovery is not durable idempotency; the
  inherited IMP-001 limitations are not fixed or waived by preflight.
- No private manuscripts, cloud Auth users, cloud SQL/migrations, secrets,
  provider calls, deployment, merge or IMP-002 work occurred.
- Exact model variant beyond the system GPT-6 identity was not exposed.

## Reviewer disposition

**PROPOSED FOR REVIEW.** Phase A repository work is verified within the listed
tests; owner acceptance and separate ChatGPT review remain pending. No agent
approval or CI result grants hosted acceptance permission. PRs #65/#66 remain
unmerged and preserve their original provenance. Stop before Phase B.
