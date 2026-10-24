---
id: VEL-EB-0045
title: VEL-DEV-001 repository-only synthetic foundation verification
type: execution-bundle
status: proposed-for-review
created_at: '2026-10-23'
version: 0.1.0
task_id: VEL-TASK-0045
context_pack_id: VEL-CP-0045
base_commit: c0c691fbc0a5d9ce7528f88cbc7aa7d5af57463d
agent:
  name: Codex
  model: GPT-6; exact primary build unavailable
  runner: Codex desktop Windows isolated worktree
  role: primary Phase A verification executor
sources:
- PROJECT-CONSTITUTION.md
- AGENTS.md
- CURRENT-STATE.md
- docs/agent-workflow/PR-COMPLIANCE.md
- docs/agent-workflow/inputs/VEL-TASK-0045/OWNER-SCOPE.md
- README.md
- docs/plans/VEL-PLAN-02-ARCHITECTURE-DATA-CONTRACTS-2026-10-11.md
- docs/plans/VEL-PLAN-03-UX-NAVIGATION-STATES-2026-10-11.md
- docs/plans/VEL-PLAN-04-TEST-SECURITY-RECOVERY-2026-10-11.md
- docs/reports/VEL-PR68-RECONCILIATION-0039-DECISION-PACKET.md
evidence:
- docs/reports/evidence/VEL-DEV-001/baseline-results.json
- docs/reports/evidence/VEL-DEV-001/governance-result.json
- docs/reports/evidence/VEL-DEV-001/source-identity.json
- docs/reports/evidence/VEL-DEV-001/scope-verification.json
- docs/reports/evidence/VEL-DEV-001/initial-review.txt
review:
  status: pending
  approved_by: null
  evidence: null
owner_disposition: pending
implementation_source_commit: a2251cffd8e0b2074966845e494589cbf27855a2
execution:
  status: completed
  executor: Codex
  model: GPT-6; exact primary build unavailable
  tests:
  - command: corepack.cmd pnpm install --frozen-lockfile
    source_commit: c0c691fbc0a5d9ce7528f88cbc7aa7d5af57463d
    exit_code: 0
    seconds: 17.66
    evidence: docs/reports/evidence/VEL-DEV-001/baseline-03.txt
    status: PASS
  - command: corepack.cmd pnpm test:hosted-preflight
    source_commit: c0c691fbc0a5d9ce7528f88cbc7aa7d5af57463d
    exit_code: 0
    seconds: 2.52
    evidence: docs/reports/evidence/VEL-DEV-001/baseline-04.txt
    status: PASS
  - command: corepack.cmd pnpm test:library-isolation
    source_commit: c0c691fbc0a5d9ce7528f88cbc7aa7d5af57463d
    exit_code: 0
    seconds: 4.6
    evidence: docs/reports/evidence/VEL-DEV-001/baseline-05.txt
    status: PASS
  - command: corepack.cmd pnpm check
    source_commit: c0c691fbc0a5d9ce7528f88cbc7aa7d5af57463d
    exit_code: 0
    seconds: 11.22
    evidence: docs/reports/evidence/VEL-DEV-001/baseline-06.txt
    status: PASS
  - command: corepack.cmd pnpm build
    source_commit: c0c691fbc0a5d9ce7528f88cbc7aa7d5af57463d
    exit_code: 0
    seconds: 31.26
    evidence: docs/reports/evidence/VEL-DEV-001/baseline-07.txt
    status: PASS
  - command: python scripts/ci_governance.py
    source_commit: a2251cffd8e0b2074966845e494589cbf27855a2
    exit_code: 0
    seconds: 701.44
    evidence: docs/reports/evidence/VEL-DEV-001/governance-utf8.txt
    status: PASS
---

# Phase A execution evidence

## Work performed
Verified live main, preserved owner worktrees/configuration, created Task0045 and validated/committed CP0045 before report/current-state edits. Inspected existing Next/Nest/Supabase auth and books flow, ran frozen local synthetic verification, and prepared bounded hosted metadata and local IMP-002 proposals. No application, dependency, SQL, CI, test or tooling changes.

## Facts and evidence
Main be69e5b249f57253e726bfcca00f5e81c0c60623 and historical post-main39961186197 SUCCESS were rechecked. Task source c0c691fbc0a5d9ce7528f88cbc7aa7d5af57463d; CP commit b24bed98961c4b1e75bbe1bddcac91eb7bb995cb; operative current-state source a2251cffd8e0b2074966845e494589cbf27855a2. Frozen dependencies and23/67 regression tests, check/build passed at the task source with identical application/lock/test bytes to main. Full governance at operative source passed415 tests (276current+139archived), metadata28 records, readiness14nodes/four pending gates, specification traceability and historical Task/CP/EB validation; complete exit0 in701.44seconds. Version/source identity and exact command logs are linked above. Generated scratch packs0002/0003, export ZIPs, caches and review scratch are not committed.

## Interpretations
These facts support reusing the existing foundation for separately authorized local development. They do not establish live Auth, hosted configuration, database application, browser E2E, RLS acceptance or private-pilot readiness. The current third migration remains unadopted and planning-only. An existing Supabase Auth integration should be reused; no alternate login system is justified.

## Proposals
The smallest hosted step is exact-target read-only metadata inventory only after explicit owner target/access authorization. IMP-002 proposal is a test-adapter/component slice, not production simulated persistence or completed chapter durability. Chapter/revision direct DML remains revoked. Owner must approve a new implementation Task and exact paths; broad design/code gates stay pending.

## Tests
See structured entries and complete logs. Current application source was not modified after baseline tests. Historical remediation security/recovery evidence is not relabeled a new run. Auxiliary sandbox DNS failures were environmental; authorized frozen installation succeeded. Original governance log uses Windows cp1252; original bytes and SHA256 are retained beside a UTF-8 rendering. Its first auxiliary UTF-8 inspection failed decoding, not tests.

## Artifacts
Phase A report, hosted decision packet, IMP-002 proposed handoff, current-state clarification, Task/CP0045, command/source/scope evidence and per-PR manifest. The manifest changes selectors only, preserving protocol, executor, exclusions and pending owner disposition. It records all three preceding original Codex commits. No historical task/pack/EB or policy was rewritten.

## Risks
Hosted target/reference and effective grants/history unknown; no real configuration inspection. Auth refresh/cookie/session/direct Data API evidence remains separate. Signed-out unexpired JWT private-data exposure is unresolved. Notes storage and protected chapter mutation/reorder contracts require future approval. Original SRC004/LevelB/end-to-end acceptance gaps are unchanged and do not become this task's authorization.

## Reviewer disposition
Initial distinct read-only Codex review at a2251cffd8e0b2074966845e494589cbf27855a2 found missing Task0045 manifest/EB (P1), reproduced against main. This commit supplies both; static validation and a final exact-head distinct review must confirm resolution. Final review and actual CI links belong in the PR evidence ledger without self-referential evidence commits. Human acceptance remains pending; the remediation delegation is expired and no merge is authorized.
