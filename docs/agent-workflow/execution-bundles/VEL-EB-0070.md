---
id: VEL-EB-0070
title: Trusted stacked-merge post-main compliance correction
type: execution-bundle
status: proposed-for-review
created_at: '2026-10-29'
version: 0.1.0
task_id: VEL-TASK-0070
context_pack_id: VEL-CP-0070
base_commit: 12f2cbcab08f0abd11e2f86170b2d31b81d63908
agent:
  name: Codex
  model: Codex runtime model not independently reported
  runner: Codex desktop isolated Windows worktree
  role: primary bounded implementation agent
sources:
- PROJECT-CONSTITUTION.md
- AGENTS.md
- docs/agent-workflow/PR-COMPLIANCE.md
- scripts/pr_compliance.py
- scripts/run_pr_compliance.py
- docs/agent-workflow/inputs/VEL-TASK-0070/OWNER-AUTHORIZATION.json
- docs/agent-workflow/inputs/VEL-TASK-0070/SOURCE-EXCERPTS.md
- docs/agent-workflow/inputs/VEL-TASK-0070/IMPLEMENTATION-CONTRACT.md
evidence:
- docs/reports/VEL-STACKED-MERGE-COMPLIANCE-0070.md
- docs/reports/evidence/VEL-TASK-0070/stacked-before.txt
- docs/reports/evidence/VEL-TASK-0070/historical-before.json
- docs/reports/evidence/VEL-TASK-0070/historical-after.json
- docs/reports/evidence/VEL-TASK-0070/compliance-first.txt
- docs/reports/evidence/VEL-TASK-0070/frozen-install.txt
- docs/reports/evidence/VEL-TASK-0070/build.txt
- docs/reports/evidence/VEL-TASK-0070/check.txt
- docs/reports/evidence/VEL-TASK-0070/preservation.json
- docs/reports/evidence/VEL-TASK-0070/test-preservation.json
implementation_source_commit: 8c2b7dff9bfeed07b5a2dbed8404826852884a15
execution:
  status: completed
  executor: Codex
  model: Codex runtime model not independently reported
  tests:
  - command: python -m unittest discover -s tests -p test_pr_compliance.py -v
    source_commit: 8194b60fff777428d4405daa248b72082767de10
    exit_code: 0
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0070/compliance-first.txt
    test_count: 71
  - command: corepack pnpm install --frozen-lockfile
    source_commit: 8194b60fff777428d4405daa248b72082767de10
    exit_code: 0
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0070/frozen-install.txt
  - command: corepack pnpm build
    source_commit: 8194b60fff777428d4405daa248b72082767de10
    exit_code: 0
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0070/build.txt
  - command: corepack pnpm check
    source_commit: 8194b60fff777428d4405daa248b72082767de10
    exit_code: 0
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0070/check.txt
  - command: 'python - (corrected evaluate_event: push before1c544261 head6d9ce61;
      full workflow and immutable evidence checks)'
    source_commit: 8194b60fff777428d4405daa248b72082767de10
    exit_code: 0
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0070/historical-after.json
review:
  status: pending
  approved_by: null
  evidence: null
---

## Work performed
Minimal change to evaluate_event: require literal trusted before as first parent, preserve exact two-parent and complete implementation-tree checks, then derive actual git merge-base(trusted before, reviewed implementation). Preserve actual merge head, implementation_head and verifier_base separately. No loader/workflow/gate-policy/accepted governance/security changes. Fixture optional stacked prerequisite plus nine new test methods; all62existing retained. Necessary CURRENT-STATE correction reflects PR128/129 integration and genuine failed post-main.

## Facts and evidence
Task0070 governing source precedes fully validated immutable CP0070 commitb72a3f2d1a4b35d44b280791f2b32fbdda6021c0, which precedes operative8194b60. Source commit above binds operative blobs. Focused71PASS, build/check/frozen0. Before synthetic test exit1 and historical evaluation exit1 reproduced unchanged evaluator failure. After local full historical evaluation PASS with all Task68/pack/source/EB/origin/workflow checks retained; historical40951100355 remains FAILURE. Exact refs/hashes and raw output in evidence. Task69/CP69 at584b778 preserved undispatched on separate local branch, unsupported provenance label caught before code; Task70 starts clean main with supported owner-linked-dispatch. No immutable pack rewritten.

## Interpretations
This is a topology correction, not approval/provenance relaxation. Trusted loader still executes source from reviewed event base; candidate historical evaluation is a separately attributed experiment. New PR branches normally from main6d9ce61, so unchanged trusted evaluator can validate its Task70 range. No claim that a candidate checker substitutes for that trusted source. Primary review remains separate from owner merge authority.

## Proposals
Distinct completed-head source review, actual Draft advisory and Ready CI, then separate owner merge approval. No merge authority. Exact final head/review/trusted-base/CI results belong in PR evidence ledger after commit exists. No new feature work.

## Tests
Actual completed commands/counts/exits listed above; raw logs include actual compiler output and EXIT0. Focused71methods (62retained+9new), including real disposable ordinary/stacked topology and mandatory negative guards. Negative control deliberately fails before code, not disguised as a passing execution. Full local current+archived governance started and is still in progress at this evidence cut; it is NOT claimed PASS. CI must run full required governance and applicable app/security/PG/recovery/build/typecheck at exact final head before Ready recommendation. Existing browser33 unchanged-source evidence historical only, not rerun here.

## Artifacts
Task/CP/EB, per-commit manifest, report, exact historical before/after JSON, focused71raw log, frozen/build/check logs, source/test preservation JSON. Scratch packs0002/0003, caches, local verification processes/transcripts are not committed. Source executable paths exactly scripts/pr_compliance.py and tests/test_pr_compliance.py.

## Risks
Historical failed40951100355 remains FAIL. Full local governance/actual CI pending at evidence cut; no owner acceptance inferred. Loader/protected-control limitations remain unchanged. R01-R08 NOT_RUN; N12 and historical independent spawn EPERM BLOCKED. No hostedAuth/MFA/SQL/settings/credentials/private manuscripts/production/deploy/editor/persistence/IMP003B. PRINCIPAL/SESSION and hosted acceptance pending; Issue108OPEN; remediation delegationEXPIRED.

## Reviewer disposition
Pending distinct completed-head source review and actual CI; owner alone decides integration. Final evidence appended externally without rewriting historical Task67/68 or dispatched pack70.
