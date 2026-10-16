---
id: VEL-EB-0006
title: Codex CI optimization implementation and verification
type: execution-bundle
status: proposed-for-review
created_at: '2026-10-16'
version: 0.1.0
task_id: VEL-TASK-0006
context_pack_id: VEL-CP-0006
base_commit: dcd9843d536ba9146e4b422f4a33554132961de5
main_base: 4b3996ef7cda878e1af3d679454bd1bb873a79c2
verified_implementation_head: 4259620ad0f4207bf1aa720c3809f32c93b59314
agent:
  name: Codex
  model: GPT-6
  model_precision: System family identity; exact model build is not exposed.
  runner: Codex desktop, isolated Windows PowerShell worktree; GitHub Ubuntu runners
  role: primary-implementer-under-owner-selected-ADR-0008
sources:
  - PROJECT-CONSTITUTION.md
  - SOURCE-OF-TRUTH.md
  - AGENTS.md
  - docs/agent-workflow/README.md
  - docs/agent-workflow/IMPLEMENTATION-OPERATING-MODEL.md
  - docs/agent-workflow/inputs/VEL-TASK-0006-ISSUE-69.md
  - docs/agent-workflow/inputs/VEL-TASK-0006-ADR-0008.md
  - docs/reports/VEL-CI-OPT-001-COVERAGE-2026-10-16.md
evidence:
  - docs/reports/evidence/VEL-CI-OPT-001
  - https://github.com/Ben-001-sys/Vellistry/actions/runs/38956662940
  - https://github.com/Ben-001-sys/Vellistry/pull/70
review:
  status: pending
  approved_by: null
  evidence: null
---

# VEL-EB-0006 — proposed for ChatGPT review and owner approval

## Authority, isolation and immutable handoff

**FACT.** Owner dispatched Issue #69; its scoped CI authorization supersedes
older planning-only instructions for this task alone. Original checkout remained
clean at 78f80bb33a27db362202b81d04db05919fd77a52 on the old library branch.
Fetched main 4b3996ef7cda878e1af3d679454bd1bb873a79c2 and created isolated branch
codex/vel-ci-opt-001. PR #65 and #68 were read as references, not edited or merged;
no proposed SQL fix was imported. PR #66 owner-selected ADR snapshot is from
36da413fea67179ac8395af1cececd477fd193a2, still an unmerged documentation PR.
Codex implemented this task; prior ChatGPT/other-agent authorship is preserved.

Verified reserved IDs 0006 absent across fetched local/remote active refs before
creation (ref count and collision scan in preflight.json). Task, issue/ADR source
snapshots and the explicit 25-workflow old-to-new coverage audit were committed
BEFORE CI edits at dcd9843d536ba9146e4b422f4a33554132961de5. Existing generator
created immutable VEL-CP-0006 with that base and real Git blob pins. Validator
passed (4 tasks/2 committed packs/1 existing bundle); all 15 handoff tests passed.
Pack was committed separately at 20ec5dd24f6c3d54e5ddfe6abcf72ca109e45488.
This is same-session provenance, **not an independent cold-start evaluation**.
Pack content was never patched after dispatch. Live task status can advance to
verification without rewriting its historical pinned contract.

## Work performed

- New primary ci.yml: unfiltered PR events including draft-to-ready and base-edit
  events; one full push-main baseline; full workflow_dispatch. No feature pushes.
- Original 25 workflows: triggers changed to manual-only; jobs, commands, service
  versions, artifacts and original evidence remain intact. All job bodies are
  compared with the source baseline in regression tests. A Windows locale issue
  in the initial audit reader was corrected to explicit UTF-8 when reading raw
  main blobs; the correction is visible in history and does not change jobs.
- ci_policy.py: exact event-head check; merge-base PR diff with NUL-separated,
  non-renamed path entries; rename/deletion cannot hide a security path. Missing
  base/invalid SHA/event or deleted existing integrated regressions fail closed.
  Docs/provenance/ADR and inert report evidence run governance only. Inert web
  style/assets build without containers; all frontend code/shared helpers,
  backend, auth/library/session, SQL, lockfiles, CI and unknown executable/config
  paths require applicable real security and recovery. Main/manual run full.
- ci_governance.py: one root Python discovery, accepted metadata/readiness/spec
  and pinned-handoff validators, existing offline contracts, independent archive
  hashes/17 tests, generated Stage4/5 packs and exported ZIP artifacts. Required
  negative suite files cannot disappear into zero-test discovery.
- One application install/build/typecheck path using frozen pnpm and dependency
  cache only; retains all 66 library tests and all five K2/K2B probe scripts in
  their original sequence. Their disposable localhost guard and cleanup remain.
  No linked/hosted Supabase command is added.
- Conditional PostgreSQL CAS/restore remains mandatory for security/SQL/unknown
  changes. Future PR68 preflight/privilege source is invoked when integrated;
  deletion of an existing regression fails classification. Its current absence
  is explicit NOT_RUN, never a privilege-test PASS or an adopted schema fix.
- Stable final name Vellistry CI gate uses always() and validates every required
  result/output. Applicable skips, failure, cancellation, absent jobs or malformed
  routing cannot produce success. Nonapplicable skips are accepted.
- PR-only cancellation groups use PR number. Main/manual use unique run IDs and
  are never cancelled by later main pushes. Read-only token; exact-head checkout
  and persist-credentials=false in all primary jobs. No pull_request_target.

## Tests and demonstrated corrections

Implementation commit 4259620ad0f4207bf1aa720c3809f32c93b59314 completed real
GitHub run 38956662940: classification, governance, application/security,
PostgreSQL recovery and final gate **PASS**. SQL privilege job is **SKIPPED /
NOT_APPLICABLE** because its proposed source is not in merged main. One workflow
started, zero feature-push workflows started. No billing setting was changed.

| Check | Actual outcome |
|---|---|
| python scripts/agent_workflow.py validate, before CI edits | PASS, 4 tasks/2 committed packs/1 bundle, exit 0 |
| python -m unittest discover -s tests -p test_agent_workflow.py -v, pre-edit | PASS, 15/15, exit 0 |
| python -X utf8 -m unittest discover -s tests -p test_ci_policy.py -v | PASS, 24/24, exit 0 |
| actionlint 1.7.12 -shellcheck=, all 26 workflows | PASS, exit 0 |
| corepack pnpm install --frozen-lockfile | PASS, exit 0; lockfile unchanged |
| corepack pnpm test:library-isolation | PASS, 66/66, exit 0; also real Linux job |
| corepack pnpm build; corepack pnpm check | PASS, each exit 0; also Linux job |
| GitHub consolidated governance | PASS, 147 root + 122 offline + 17 archive = 286 tests, plus validators/exporters |
| GitHub PostgreSQL CAS/restore | PASS, 12/12 real disposable PostgreSQL tests |
| Five K2/K2B integration scripts | PASS in real disposable Supabase/Nest; safe excerpts/step metadata retained |
| SQL privilege regression proposed in PR68 | NOT_RUN, source not on main; future conditional hook tested |
| Hosted database acceptance | NOT_RUN, forbidden by Issue69 |

Official actionlint release archive SHA-256 was verified against its GitHub
asset digest: 6e7241b51e6817ea6a047693d8e6fed13b31819c9a0dd6c5a726e1592d22f6e9.
Only the disposable ignored local tool was downloaded; no dependency/lockfile
or framework upgrade occurred. Windows Node 24.13.0, pnpm 10.18.0, Python 3.10.10;
GitHub uses Node24/Python3.12 per workflow, not a claimed identical machine.

**Failures retained, not hidden.** Initial workflow test failed before ci.yml
existed. Job-body comparison exposed Windows locale decoding and passed after
explicit UTF-8. Actionlint caught a quoted numeric copied timeout; corrected.
First consolidated governance run exposed six exporter failures due to packet
setup ordering; fixed by preparing packs before discovery and adding a regression.
UTF-8 local run then had only an inherited R01 mkstemp descriptor leak: 146 tests,
one Windows PermissionError; no skip was added. The current Linux root suite
passes all 147 tests. That pre-existing Windows fixture issue is outside this
bounded path allowlist; it remains disclosed instead of editing unrelated tests.

Exact final reporting-head renewal, command exits, SHA and CI link are recorded
in PR #70 after the reporting commit exists. Source logs are separately labeled;
no earlier run is relabeled as final-head evidence.

## Facts and evidence: measured usage and limits

**FACT.** Automatic definitions: 25 to 1 (96%). This CI-edit source run actually
invoked one workflow; old filter replay for the same broad diff selects 41 starts
(25 PR +16 feature push), a **projection**, not measured historical savings.
The last-300 historical mix groups to 78 PR/main head cohorts (74% coarse
projection); the general >=75% target and 90% aspiration are **not proven**.

Successful old-main cohort: 7 allocated jobs, 296 observed execution seconds.
New full-security source run: 5 allocated jobs, 232 seconds; **21.62% less**.
Three workspace installs become one, Nest builds three to one, Next two to one.
This is one cross-day comparison, not controlled billing evidence. ~60% actual
runner-minute reduction is not established. Read-only usage API lacked user
scope; billable minutes and costs are UNAVAILABLE. No scope refresh/billing
change was attempted. See the usage report and exact job metadata.

## Risks, security, rollback and proposed knowledge updates

- Owner merge approval and ChatGPT exact-head independent review remain pending.
  All-main protection read returned "Branch not protected" and effective rules
  returned []; no check-name administrative change was needed or performed.
  The owner may later require Vellistry CI gate; this PR does not alter settings.
- Ready/base-edit, main/manual, docs-only, malformed results and failed jobs are
  tested scenarios. Live source CI proves applicable real integration and a
  final gate with a nonapplicable skip. No merged-main/manual-dispatch/cancelled
  replacement run was fabricated to claim live coverage of those cases.
- No private-pilot or release gate changed; real local Supabase is not hosted
  acceptance. Signed-out JWT/direct PostgREST risk and PR68 books-grant hardening
  remain separate unresolved security work, not waived by this CI change.
- PR65/68 must reconcile their old foundation workflow changes when rebased onto
  this proposal: integrated hooks exist, but old automatic triggers must not be
  reintroduced. Original-job-body regression deliberately exposes such conflicts.
- Historical manual benchmarks retain original dynamic install commands; keeping
  source/commands intact does not guarantee identical future dependency resolution.
- No app/migration/product files, hosted data/users, secrets, manuscripts, billing,
  protection, deployment, paid AI, merges, PR59 or IMP002 were changed.
- Rollback: revert the implementation commit (and later scoped routing adjustment)
  through owner review; restores prior triggers/job configuration without touching
  application/database state. Owner must reassess required-check name if they
  configure protection after acceptance. Leave historical evidence intact.
- CURRENT-STATE adds a factual unmerged CI checkpoint; no ADR/requirements/gate
  is promoted. Task status moves to verification. Canonical pack remains immutable.

Changed paths: all 26 workflow files; scripts/ci_policy.py and ci_governance.py;
tests/test_ci_policy.py; CURRENT-STATE; VEL-TASK/CP/EB-0006; two scoped source
snapshots; coverage/usage reports and evidence directory. Git diff against actual
origin/main is the exact file list; stale local main is not used as the base.


## Interpretations

Consolidation removes redundant workflows/install/build paths while retaining
real security and negative governance coverage. The measured single-run
execution-span improvement is useful directional evidence, not proof of the
billing or general usage targets. Unknown code paths deliberately select more
checks; routing savings are subordinate to security and provenance.

## Proposals

ChatGPT should review the exact final diff/run independently, then the owner
may approve or reject this draft. No automatic merge or gate promotion follows.
After a separately approved merge, observe representative docs/app/security
and main workloads before revising the cost claims or considering tighter
classification. Do not change billing or protections under this task.

## Artifacts

The coverage report links each original workflow/check to primary or manual
coverage. The usage report separates source counts, replay projections,
observed runner spans and unavailable billable metrics. Evidence directory
contains original trigger/job JSON, source snapshots, pinned Git refs, actual
local outputs/failures, safe Linux logs and per-job timestamps. Final SHA and
renewed final-head run/output are recorded in the draft PR after commit creation.

## Reviewer disposition

ChatGPT independent exact-head review: pending. Owner approval/merge: pending.
This Codex implementation/self-review is advisory and not an independent human
approval. Hosted database acceptance, private pilot and release remain outside
scope. No source-authority or approval evidence URL was invented.


### Final bounded correction: manual regression-deletion guard

Final source review found that workflow_dispatch has no diff base, so the
future required-regression presence guard covered PR/main events but could be
bypassed by manually dispatching a branch that deleted an already-integrated
regression. A real temporary Git-history test demonstrated the missing error
(23 pass/1 fail among the 24 routing tests). Dispatch now checks required-source
presence against refs/remotes/origin/main, fetched by the full-history exact-head
classifier checkout. Missing main fails closed. Manual remains full verification;
it does not use a last-commit-only path shortcut. All 24 tests pass after the
correction. Before/after outputs are retained in the evidence directory; final
SHA/run supersede earlier checkpoints only after actual verification.
