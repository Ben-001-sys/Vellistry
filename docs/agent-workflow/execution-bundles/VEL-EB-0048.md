---
id: VEL-EB-0048
title: Bounded workspace CI coverage
type: execution-bundle
status: proposed-for-review
created_at: '2026-10-24'
version: 0.1.0
task_id: VEL-TASK-0048
context_pack_id: VEL-CP-0048
base_commit: bc67164fbe7aaa758ef26aedb4ab36e855f9126c
agent:
  name: Codex
  model: gpt-6.1-sol
  runner: Codex desktop Windows isolated worktree
  role: primary scoped executor
sources:
- PROJECT-CONSTITUTION.md
- AGENTS.md
- CURRENT-STATE.md
- docs/agent-workflow/PR-COMPLIANCE.md
- docs/agent-workflow/inputs/VEL-TASK-0048/OWNER-SCOPE.md
- docs/agent-workflow/inputs/VEL-TASK-0048/BOUNDARY.md
- .github/workflows/ci.yml
- tests/test_ci_policy.py
- package.json
evidence:
- docs/reports/VEL-WORKSPACE-CI-0048.md
- docs/reports/evidence/VEL-TASK-0048/checks.json
review:
  status: pending
  approved_by: null
  evidence: null
owner_disposition: pending
implementation_source_commit: e67f726b7cc51dc6b4e205d813e8d43e3180b76c
execution:
  status: completed
  executor: Codex
  model: gpt-6.1-sol
  tests:
  - command: corepack.cmd pnpm install --frozen-lockfile
    source_commit: aa92cba279058213517e5be2711bb7834f8a25a2
    exit_code: 0
    seconds: 11.09
    evidence: docs/reports/evidence/VEL-TASK-0048/install.txt
    status: PASS
  - command: corepack.cmd pnpm test:workspace-contract
    source_commit: aa92cba279058213517e5be2711bb7834f8a25a2
    exit_code: 0
    seconds: 2.01
    evidence: docs/reports/evidence/VEL-TASK-0048/workspace.txt
    status: PASS
  - command: python scripts/check_knowledge_metadata.py
    source_commit: aa92cba279058213517e5be2711bb7834f8a25a2
    exit_code: 0
    seconds: 0.16
    evidence: docs/reports/evidence/VEL-TASK-0048/metadata.txt
    status: PASS
  - command: python scripts/check_implementation_readiness.py
    source_commit: aa92cba279058213517e5be2711bb7834f8a25a2
    exit_code: 0
    seconds: 0.1
    evidence: docs/reports/evidence/VEL-TASK-0048/readiness.txt
    status: PASS
  - command: python -m unittest discover -s tests -p test_governance_entrypoints.py
      -v
    source_commit: aa92cba279058213517e5be2711bb7834f8a25a2
    exit_code: 0
    seconds: 0.18
    evidence: docs/reports/evidence/VEL-TASK-0048/state.txt
    status: PASS
  - command: python tests/test_ci_policy.py -v
    source_commit: e67f726b7cc51dc6b4e205d813e8d43e3180b76c
    exit_code: 0
    seconds: 7.78
    evidence: docs/reports/evidence/VEL-TASK-0048/direct-final.txt
    status: PASS
  - command: python -m unittest discover -s tests -p test_ci_policy.py -v
    source_commit: e67f726b7cc51dc6b4e205d813e8d43e3180b76c
    exit_code: 0
    seconds: 5.8
    evidence: docs/reports/evidence/VEL-TASK-0048/discovery-final.txt
    status: PASS
---

# Execution evidence

## Work performed
Added exactly one unconditional workspace test command to the existing applicable application job and positive/negative CI-preservation tests. Updated compact current state for verified PR111 integration. No dependencies, new workflows, routing/security/recovery/permission weakening or application source changes.

## Facts and evidence
Unique committed Task/validated immutable CP preceded deliverable edits. Base a9e7c48bc7198f6f23f7be5bb77ad54f1f27e2e4 integrates owner-approved PR111 with equal tree da9bf02eefadeeeae0156685d92ff2523824c291 and post-main40111872132 SUCCESS. Task47/CP47/EB47 preserved; independent runtime EPERM remains blocked, not PASS. 39CI-policy cases PASS including12bypass subcases;41workspace tests PASS after frozen install. Before workflow change39cases had38PASS/1FAIL because step was absent; failed evidence preserved. Metadata/readiness and8entrypoint guards PASS. Final exact-head Actions will execute the workspace suite; main automatic coverage is not claimed before owner merge. Source-specific commands/exits/times and raw evidence are in execution.tests and the linked report.

## Interpretations
Repository verification is distinct from owner acceptance. Existing or future synthetic/disposable tests cannot establish hosted acceptance. The proposed private gateway/session/SQL capabilities are not granted by these records.

## Proposals
Review completed diff, immutable sources, actual CI and limitations; owner separately decides this PR merge. For persistence, accept/revise P01..P06 and exact local SQL/security scope before dispatching a new implementation Task. No hosted or credential permission inferred.

## Tests
39CI-policy cases PASS including12bypass subcases;41workspace tests PASS after frozen install. Before workflow change39cases had38PASS/1FAIL because step was absent; failed evidence preserved. Metadata/readiness and8entrypoint guards PASS. Final exact-head Actions will execute the workspace suite; main automatic coverage is not claimed before owner merge. Actual final submitted-head CI/review references are appended to the PR/Issue108 ledger after execution. No unrelated completed browser/research tests are rerun.

## Artifacts
Task, original source snapshots, immutable pack, scoped deliverables/report, raw checks, EB and per-PR provenance. Source SHA binds every operative blob; subsequent evidence-only commit avoids SHA self-reference.

## Risks
Owner merge pending. Broad gates unchanged; remediation delegation EXPIRED. No hosted access, credentials, real manuscripts, paid calls, deployments, new migration or protection/settings changes. Current database/session state is unknown; SQL privilege fixture skips are not acceptance.

## Reviewer disposition
Pending distinct exact-head advisory source review and ordinary owner merge decision; CI cannot set accepted/approved owner state. Final review and CI links belong in the external PR evidence ledger.

## Direct invocation verification
Existing unittest.main preceded the appended coverage class. Direct invocation ran37old cases; the unchanged CI discovery command ran39. Moved the entrypoint after all classes; both direct and discovery now pass39at the operative source above. Historical output and the first distinct review are retained. No workflow/security semantics or immutable pack changed.
