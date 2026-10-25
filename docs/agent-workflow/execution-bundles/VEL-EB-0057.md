---
id: VEL-EB-0057
title: Mandatory principal-adapter CI coverage and actual governance evidence
type: execution-bundle
status: proposed-for-review
created_at: '2026-10-25'
version: 0.1.0
task_id: VEL-TASK-0057
context_pack_id: VEL-CP-0057
base_commit: 40b4d0509e33bd3058e181636fb5fab2aaf628bb
agent:
  name: Codex
  model: Codex runtime model not independently reported
  runner: Codex desktop Windows isolated CI worktree
  role: primary bounded implementation agent
sources:
- PROJECT-CONSTITUTION.md
- AGENTS.md
- CURRENT-STATE.md
- docs/agent-workflow/PR-COMPLIANCE.md
- .github/workflows/ci.yml
- scripts/pr_compliance.py
- apps/api/src/modules/workspace/workspace-principal-adapter.spec.ts
- docs/agent-workflow/inputs/VEL-TASK-0057/OWNER-SCOPE.md
evidence:
- docs/reports/VEL-PRINCIPAL-ADAPTER-CI-0057.md
- docs/reports/evidence/VEL-TASK-0057/results.json
- docs/reports/evidence/VEL-TASK-0057/post-main-summary.json
- docs/reports/evidence/VEL-TASK-0057/before-coverage.txt
- docs/reports/evidence/VEL-TASK-0057/policy.txt
- docs/reports/evidence/VEL-TASK-0057/governance.txt
- docs/reports/evidence/VEL-TASK-0057/previous-validator-negative.txt
- docs/reports/evidence/VEL-TASK-0057/preservation.json
review:
  status: pending
  approved_by: null
  evidence: null
owner_disposition: pending
implementation_source_commit: 1e1af3b37a0f5f12a8b9b0163dd89f95eb297ac5
execution:
  status: completed
  executor: Codex
  model: Codex runtime model not independently reported
  tests:
  - command: python -m unittest discover -s tests -p test_ci_policy.py -v
    source_commit: 1e1af3b37a0f5f12a8b9b0163dd89f95eb297ac5
    exit_code: 0
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0057/policy.txt
  - command: python scripts/ci_governance.py
    source_commit: 1e1af3b37a0f5f12a8b9b0163dd89f95eb297ac5
    exit_code: 0
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0057/governance.txt
  - command: Inline exact-base validator against10new adapter negative mutations;
      expected10failures0errors
    source_commit: 1e1af3b37a0f5f12a8b9b0163dd89f95eb297ac5
    exit_code: 0
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0057/previous-validator-negative.txt
  - command: Inline exact workflow-minus-new-step equality, scope and history integrity
      assertions
    source_commit: 1e1af3b37a0f5f12a8b9b0163dd89f95eb297ac5
    exit_code: 0
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0057/preservation.json
---

## Work performed
Added exactly one unconditional18-test principal-adapter command to existing application CI after frozen installation/12persistence units and before build/typecheck/32PG/security. Extended static contract and positive/negative tests. New Task0057/CP0057 committed and validated before edits. No application/Auth/SQL/dependency change.

## Facts and evidence
PR118 merged4792628b309560e7bd0fdebf371b939163733364 under exact-head owner approval, with tree27893ea4f14111683cbf45c0a5a633f52f6dfe6c equal to reviewed4648f34d8d6b3e1677d61159128c5fa65adb7c3d. Post-main40195269872 SUCCESS,32PG17.11 artifact names exact main and verifies owned cleanup. Task56/CP56/EB56 and source-bound evidence unchanged. Prior independent runtime spawnEPERM remains BLOCKED; primary local18tests are historical, not preexisting automatic CI coverage.

## Interpretations
Mandatory exact commands/ordering plus bypass negatives prevent accidental coverage loss when controls execute. This is not authenticated provenance or malicious-contributor-proof branch protection. The entire workflow equals reviewed base after removing just the new step; all original permissions/events/jobs/security/recovery/governance/gate steps preserved.

## Proposals
Adopt only after distinct completed-head review, actual readyCI with18adapter/12persistence/32PG and existing security/recovery/governance, then separate owner merge. No successor auto-merge. Real Supabase principal/session/gateway/packaging/reconciliation/transport choices remain pending.

## Tests
Corrected policy suite43PASS on candidate blobs subsequently committed as source. Full governance at committed source423PASS (284current+139archived), including43policy/61compliance tests, metadata/readiness, full pin validation/traceability/provenance/export checks; exit0. New positive before-coverage test failed as expected (43tests,1failure), retained raw. Exact previous-base validator missed10adapter bypass mutations with0errors; corrected new negative tests reject them. No unexpected failure relabeled passing. Preservation assertions verify whole-workflow-minus-new-step equality, no app/Auth/SQL/dependency change and historical Task54/55/56 pack/bundle equality.

Actual new18-test Ubuntu execution is required in final readyCI, not inferred from old local tests or blocked independent review. Links/counts/actual head are appended to external PR ledger after final commit exists. No unchanged app research/builds repeated locally for this CI-only change; applicable CI performs frozen install/build/typecheck and all mandatory runtime checks. No independent runtime PASS claimed.

## Artifacts
Raw policy/governance/before-fix outputs, exact source/count/exit summary and preservation/main artifact hashes. Generated scratch CP0002/0003, caches and ZIPs remain uncommitted; Task57 artifacts bind the new source, not an edited old pack.

## Risks
Synthetic18tests do not prove JWT signatures, Supabase revocation or hosted acceptance. Legacy privilege fixture skips are not acceptance. All six production security decisions OWNER_DECISION_PENDING, hosted observations UNVERIFIED. No real verifier/session grant, credentials, hosted query, migration, production route, private persistence, paid/deployment/settings or broad gate promotion. Remediation delegation EXPIRED; Issue108 OPEN.

## Reviewer disposition
Distinct completed-head advisory source review and actual readyCI will be recorded in PR ledger. Owner merge remains pending; no AI self-approval or automatic integration.
