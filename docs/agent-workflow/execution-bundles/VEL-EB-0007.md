---
id: VEL-EB-0007
title: Bounded draft-aware CI correction evidence for VEL-CI-OPT-001
type: execution-bundle
status: proposed-for-review
created_at: '2026-10-16'
version: 0.1.0
task_id: VEL-TASK-0007
context_pack_id: VEL-CP-0007
base_commit: 1a4f190f6a62caa34b6e74d561f4b3df7c210a4a
parent_task_id: VEL-TASK-0006
parent_bundle_id: VEL-EB-0006
final_evidence_ledger: https://github.com/Ben-001-sys/Vellistry/pull/70#issuecomment-6224103593
agent:
  name: Codex
  model: GPT-6
  model_precision: System family identity; exact build not exposed.
  runner: Existing isolated Windows Codex worktree; GitHub Ubuntu CI
  role: primary-implementer under owner-selected ADR0008
sources:
- PROJECT-CONSTITUTION.md
- SOURCE-OF-TRUTH.md
- docs/agent-workflow/README.md
- docs/agent-workflow/tasks/VEL-TASK-0006.yaml
- docs/agent-workflow/inputs/VEL-TASK-0007-AUTHORIZATION-REVIEW.md
- docs/reports/VEL-CI-OPT-001-AMENDMENT-01.md
- scripts/ci_policy.py
- .github/workflows/ci.yml
- tests/test_ci_policy.py
- docs/agent-workflow/execution-bundles/VEL-EB-0006.md
evidence:
- docs/reports/evidence/VEL-CI-OPT-001/draft-policy-before-fix.txt
- docs/reports/evidence/VEL-CI-OPT-001/draft-policy-after-fix.txt
- https://github.com/Ben-001-sys/Vellistry/pull/70#issuecomment-6224103593
review:
  status: pending
  approved_by: null
  evidence: null
---

# VEL-EB-0007 — child correction, not a restarted task

## Work performed

Read the live owner correction and ChatGPT independent review of b713d94, actual
PR/main/worktree state, accepted authority, existing handoff and CI scripts.
Existing codex/vel-ci-opt-001 checkout was clean at
b713d945aa06a5fce6a5b9f63a0a9fdcaa4b88ee; remote main remained
4b3996ef7cda878e1af3d679454bd1bb873a79c2. No outside work was overwritten.

The direct user dispatch authorizes the bounded correction; the GitHub owner
comment is explicitly coordinator-relayed approval, not independently human-
authored. The AI review is advisory, not another human approval. Reserved IDs
0007 were unused across85 refs. This child task amends canonical0006 under
amendment01. Sources/task committed at1a4f190 before CI edits; actual generator
pinned CP0007 there, validator passed (5 tasks/3 packs/2 bundles) and pack was
committed at9e5f912. Original CP0006 remains byte-identical in Git. The schema
and validator were not relaxed. This is a same-session continuation.

Implemented strict event-mode handling: ordinary draft PR updates defer builds,
containers and application/security tests while retaining governance, provenance,
negative CI tests, source-deletion guards and verified workflow lint. Ready PRs
classify the whole diff conservatively; ready_for_review, ready synchronize and
ready edited/base changes cannot use draft deferral. Unknown paths remain
security-sensitive before merge. Missing/malformed/contradictory draft/activity
metadata fails closed; converted_to_draft is handled explicitly.

The stable Vellistry CI gate name is unchanged. It fetches full history and
independently derives the expected mode/flags from the real event and exact
head. It rejects classifier-plan forgery and failed/cancelled/missing/applicable-
skipped results. Successful draft governance returns an advisory-only internal
result; the actual merge gate completes FAILURE/BLOCKED, never skipped/pending
or merge-eligible green. A full manual dispatch may verify a draft head but does
not change the draft state; ready activity still gets its own applicable checks.

Added checksum-pinned actionlint1.7.12 in primary governance using official
Linux asset SHA256 8aca8db96f1b94770f1b0d72b6dddcb1ebb8123cb3712530b08cc387b349a3d8.
No framework/lockfile change. All25 original archive job bodies and existing
K2/K2B probe order, local-only guards, SQL availability/deletion checks and
least-privilege read-only/exact-head rules remain intact. Future PR68 source
still must be reconciled separately; it is not imported or falsely passed.

## Facts and evidence

[Final correction ledger](https://github.com/Ben-001-sys/Vellistry/pull/70#issuecomment-6224103593) is the authoritative latest exact-head/run
reference, appended after the final source commit exists. The parent EB0006 and
usage report link it prominently, avoiding the report/SHA self-reference cycle.
Parent metadata no longer calls4259620 the verified current head. Its232-second
run remains historical; b713d94/run38958548133/184 seconds is reconciled as the
independently reviewed historical checkpoint (37.84% below296 observed seconds).
None is billed usage; >=75% general invocations and ~60% runner-minute targets
remain unproven. Actual registered dispatch on the unmerged branch succeeded
for old b713 head at run38962146340, correcting the previous assumption that
pre-merge manual verification could not be observed. That run does not verify
the new correction.

No active main protection/check-name requirement was returned by read-only
APIs; no required merge-check name or admin setting was changed. Draft blocked-gate
semantics are deliberate: advisory validation can be green, but merge eligibility
is completed red until ready/applicable or explicit full verification succeeds.
Do not summarize an advisory-only run as a fully passing security workflow.

## Tests

Before fix:34 test methods attempted;21 failing subcases and3 errors demonstrated
the missing draft policy/new gate interface, including an actual CLI that could
return green for a draft-only plan. After fix:36 methods pass (exit0), including
real temporary Git base-edit/deletion histories, malformed/contradictory event
metadata, ready unknown/security paths, forged draft flags and CLI recomputation,
draft governance failure, manual full mode, renamed/deleted sources, every
required failure/cancellation/skip case, original archive/probe preservation,
fixed gate identity and pinned automated lint. All26 workflows pass local
verified Windows actionlint1.7.12 (exit0). These are local synthetic event tests,
not fabricated GitHub ready/main transitions.

Actual final source SHA, ordinary draft run and explicitly invoked full run will
be appended to the linked ledger after commit/push. Full mode must run builds,
66 library regressions, applicable disposable Supabase probes and PostgreSQL
recovery on that SAME SHA. No test/result from b713 is relabeled as correction
verification. A failure must be corrected within scope before reporting success.
The inherited Windows R01 mkstemp descriptor error remains outside this correction;
Linux full-suite results are authoritative for that environment, not a native
Windows all-suite claim. Billable usage access remains unavailable/unmodified.

## Artifacts

Changed primary CI, ci_policy.py and test_ci_policy.py; Task0006 child cross-
reference; new Task/CP/EB0007 and authorization/review source snapshot; parent
EB0006 reconciliation; amendment01, usage/evidence and CURRENT-STATE checkpoint.
Original CP0006, all archived jobs, app code, SQL migrations and PR68 are unchanged.
Detailed raw before/after outputs and reviewed-checkpoint timestamps reside in
reports/evidence/VEL-CI-OPT-001. Latest final outputs/run links are in the ledger.

## Interpretations

Deferred draft integration reduces iteration cost without promoting incomplete
security evidence. Explicit completed blocking is preferable to a skipped or
perpetually absent required merge check. Recomputing event plans protects the
gate from accidental draft flags on ready events. Actual savings need new
representative usage; target percentages are not acceptance evidence themselves.

## Proposals

Submit this exact corrected head for ChatGPT independent review, then owner's
approval decision. After a separately approved merge, observe actual ready/main
and docs-only workloads and owner protection configuration. Keep PR68's trigger
reconciliation and hosted acceptance separate. No merge/readiness/admin/billing
or scope expansion is proposed as an automatic next action.

## Risks

Ordinary draft workflows intentionally conclude failure at the stable merge gate
with a clear BLOCKED advisory summary; governance itself should pass. This is
not a code regression and must not be hidden using continue-on-error. Full
verification can pass while the PR remains draft; GitHub still prevents draft
merge and ready transitions reverify relevant checks. Actual ready/main events
remain NOT_RUN because no state transition or merge is authorized; negative
scenario tests cover them. Current SQL source absence is NOT_APPLICABLE/NOT_RUN,
not a privilege-test PASS. Signed-out JWT/private-pilot issues remain separate.

Rollback only this bounded correction through owner review, preserving evidence
and CP history; that would restore expensive-draft behavior, not change database
state. No hosted reads/writes/users, app/migration features, private manuscript,
paid AI, PR68, protection/billing/auth-scope settings, deployment or merges changed.

## Reviewer disposition

New independent exact-head review: pending. Owner acceptance/merge: pending.
No approval or cold-start result is inferred from agent execution or green CI.
