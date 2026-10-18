---
id: VEL-EB-0015
title: VEL-SEC-001 owner-authorized manual PG17 harness
type: execution-bundle
status: proposed-for-review
created_at: '2026-10-18'
version: 0.1.0
task_id: VEL-TASK-0015
context_pack_id: VEL-CP-0015
base_commit: 9cb137fabae7f82491258eda918439c84c320db0
agent:
  name: Codex
  model: GPT-6; exact build not exposed
  runner: Windows isolated worktree; ordinary GitHub CI after submission
  role: primary-implementer
sources:
- PROJECT-CONSTITUTION.md
- AGENTS.md
- docs/agent-workflow/README.md
- docs/agent-workflow/PR-COMPLIANCE.md
- .github/workflows/ci.yml
- tests/test_ci_policy.py
- docs/agent-workflow/inputs/VEL-TASK-0015/OWNER-AMENDMENT.md
- docs/agent-workflow/inputs/VEL-TASK-0015/architecture-review.json
- docs/agent-workflow/inputs/VEL-TASK-0015/sources.json
- docs/agent-workflow/inputs/VEL-TASK-0015/collision.json
- docs/agent-workflow/inputs/VEL-TASK-0015/DESIGN.md
evidence:
- docs/reports/VEL-SEC-001-GH-ACTIONS-HARNESS.md
- https://github.com/Ben-001-sys/Vellistry/issues/74#issuecomment-6250236013
- docs/reports/evidence/VEL-SEC-001-GH-ACTIONS/harness19-final.txt
- docs/reports/evidence/VEL-SEC-001-GH-ACTIONS/policy37-final.txt
- docs/reports/evidence/VEL-SEC-001-GH-ACTIONS/compliance-command.json
- docs/reports/evidence/VEL-SEC-001-GH-ACTIONS/actionlint-local.txt
- docs/reports/evidence/VEL-SEC-001-GH-ACTIONS/preservation.json
review:
  status: pending
  approved_by: null
  evidence: null
implementation_source_commit: 17087f3fe6246beb3237fd075c01b4be6448f945
execution:
  status: completed
  executor: Codex
  model: GPT-6; exact build not exposed
  tests:
  - command: python -X utf8 -m unittest discover -s tests -p test_pg17_action_harness.py
      -v
    status: PASS
    exit_code: 0
    source_commit: 17087f3fe6246beb3237fd075c01b4be6448f945
    evidence: docs/reports/evidence/VEL-SEC-001-GH-ACTIONS/harness19-final.txt
  - command: python -X utf8 -m unittest discover -s tests -p test_ci_policy.py -v
    status: PASS
    exit_code: 0
    source_commit: 17087f3fe6246beb3237fd075c01b4be6448f945
    evidence: docs/reports/evidence/VEL-SEC-001-GH-ACTIONS/policy37-final.txt
manual_pg17_execution:
  status: NOT_RUN
  before: NOT_RUN
  after: NOT_RUN
  requires: owner review/merge then separate manual dispatch
final_evidence_ledger: https://github.com/Ben-001-sys/Vellistry/issues/74#issuecomment-6250236013
---

# VEL-SEC-001 harness evidence

## Work performed
FACT: direct owner-authorized new Task0015/CP0015 precedes implementation. Added only exact named manual workflow, service-only Python helper,19 safety tests and specifically authorized CI inventory exception. ci.yml/gates/policy/baseline/apps/SQL unchanged. Historical0012/0014 records preserved.

## Facts and evidence
Main021379856d07611752832b44bfe951d6ae36f0b2; PR68cbb379fa4a4eaa9f576f3abcce2c2258d22cc551. Source9cb137fabae7f82491258eda918439c84c320db0; packa68642b836f45ad89d0793e993acd3066f31e466; operative implementation17087f3fe6246beb3237fd075c01b4be6448f945. Raw local tests/lint/preservation and final ledger linked. Exact final evidence SHA and actual CI appended after commit.

## Interpretations
Strict full workflow-shape comparison and mutation tests admit one named manual harness without arbitrary workflow bypass. Static/mocked tests do not establish actual PG17 SQL or hosted compatibility. Synthetic default/PUBLIC assumptions and current PostgREST transport limitations remain explicit.

## Proposals
ChatGPT reviews exact head; owner separately merges harness, then manually dispatches reviewed ref. Only then record actual version/SQL/before/after/cleanup. Third migration decision remains separate; no merge/dispatch/hosted approval inferred.

## Tests
Current-source harness19 and CI-policy37 PASS/exit0. Complete local compliance57 PASS on unchanged checker subjects, with precise start/completion checkpoint metadata; final exact-head CI independently required.27workflows lint PASS. Metadata/handoff/readiness/spec validations pass; EB revalidated after creation. Actual new manual PG17, BEFORE/AFTER and real SQL behavior NOT_RUN.

## Artifacts
Task/CP/EB0015, pinned owner amendment/review/collision/source inputs, manual workflow/helper/tests, report and raw evidence. Canonical ledger: https://github.com/Ben-001-sys/Vellistry/issues/74#issuecomment-6250236013.

## Risks
Manual workflow cannot run until default-branch integration and owner dispatch. First actual PG17 run may expose SQL/runtime defects; mocks/lint are not acceptance. JWT/private-pilot, hosted rights, real service/PostgREST and migration holds remain. No settings/protection change.

## Reviewer disposition
Independent exact-head ChatGPT review pending; owner integration/migration decisions pending. PR must remain Draft/unmerged. Original authorship preserved; no self-approval or hosted action.
