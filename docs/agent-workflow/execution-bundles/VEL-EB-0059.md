---
id: VEL-EB-0059
title: Source-pinned principal verification boundary preparation
type: execution-bundle
status: proposed-for-review
created_at: '2026-10-25'
version: 0.1.0
task_id: VEL-TASK-0059
context_pack_id: VEL-CP-0059
base_commit: e00f904f81678f57f7339e1a0028a3d64cd17566
agent:
  name: Codex
  model: Codex runtime model not independently reported
  runner: Codex desktop isolated Windows worktree; source inspection and offline document
    integrity only
  role: primary bounded implementation agent
sources:
- PROJECT-CONSTITUTION.md
- AGENTS.md
- CURRENT-STATE.md
- docs/agent-workflow/PR-COMPLIANCE.md
- apps/api/src/modules/auth/supabase-auth.service.ts
- apps/api/src/modules/auth/supabase-auth.guard.ts
- apps/api/src/modules/workspace/workspace-supabase-response-bridge.ts
- apps/api/src/modules/workspace/workspace-principal-adapter.ts
- apps/api/src/modules/workspace/workspace-principal.ts
- docs/agent-workflow/proposals/VEL-SUPABASE-WORKSPACE-READINESS-0054.json
- docs/agent-workflow/inputs/VEL-TASK-0059/SDK-BOUNDARY-SOURCES.md
- docs/agent-workflow/inputs/VEL-TASK-0059/OWNER-SCOPE.md
evidence:
- docs/reports/evidence/VEL-TASK-0059/packet-integrity.json
- docs/reports/evidence/VEL-TASK-0059/verify_packet.py
- docs/reports/evidence/VEL-TASK-0059/metadata.txt
- docs/reports/evidence/VEL-TASK-0059/readiness.txt
- docs/reports/evidence/VEL-TASK-0059/traceability.txt
- docs/reports/evidence/VEL-TASK-0059/workflow.txt
- docs/reports/evidence/VEL-TASK-0059/post-main-summary.json
review:
  status: pending
  approved_by: null
  evidence: null
owner_disposition: pending
implementation_source_commit: 8a3f8f85cbf01e5bbad994c6aed048d667b54f3d
execution:
  status: completed
  executor: Codex
  model: Codex runtime model not independently reported
  tests:
  - command: python docs/reports/evidence/VEL-TASK-0059/verify_packet.py
    source_commit: 8a3f8f85cbf01e5bbad994c6aed048d667b54f3d
    exit_code: 0
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0059/packet-integrity.json
  - command: python scripts/check_knowledge_metadata.py
    source_commit: e6d1353985a7c12d601170378bb7a085ce4970c6
    exit_code: 0
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0059/metadata.txt
  - command: python scripts/check_implementation_readiness.py
    source_commit: e6d1353985a7c12d601170378bb7a085ce4970c6
    exit_code: 0
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0059/readiness.txt
  - command: python scripts/spec_traceability.py validate
    source_commit: e6d1353985a7c12d601170378bb7a085ce4970c6
    exit_code: 0
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0059/traceability.txt
  - command: python scripts/agent_workflow.py validate
    source_commit: e6d1353985a7c12d601170378bb7a085ce4970c6
    exit_code: 0
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0059/workflow.txt
---

## Work performed
Prepared the real-principal verification boundary decision packet and a smallest separately authorizable local policy-helper proposal. No app/Auth/SQL/dependency/CI implementation. Task0059 and committed validated immutable CP0059 preceded preparation edits.

## Facts and evidence
PR120 merged at acf7f796014907cc08dfc25ccab5763caa002d1b, reviewed and merged trees identical688f7dd4c663675e1344bff6910c0b696d5bac22. Actual post-main40204760911 SUCCESS:36adapter/bridge,12persistence units,32PG17.11 cases; owned container/volume absence verified. Summary pins artifact hash. Task58/CP58/EB58 and historical failures unchanged. Nine source hashes verified against exact commits, frozen SDK2.117.3 inspected without invoking Auth. Issue108 integration record6399298352.

## Interpretations
Cryptographic integrity, Auth-server identity and authoritative active-session/write linearization are distinct evidence axes. Existing getUser may surface session errors; neither cached claims nor successful user lookup proves race-free writable-session enforcement. Current bridge drops policy fields, so policy validation must precede projection. Target behavior remains UNVERIFIED.

## Proposals
Packet0059 specifies PV01-PV10, six pending owner choices, all six production decisions pending, fourteen proposed negative cases and exact two-path next local helper proposal. Next Task ID unallocated and NOT_AUTHORIZED. Owner must separately authorize fixture behavior and implementation; no automatic merge.

## Tests
Offline document integrity: one valid packet,18 rejected document mutations,9 committed source hashes,3 historical records,zero protected implementation changes. These are document checks, not execution of N01-N14: every future security case remains NOT_RUN_PROPOSED. Metadata/readiness/traceability/agent workflow validators PASS, exit0 at recorded source. Final exact-head readyCI and trusted-base compliance results go in external PR evidence ledger. Unchanged application local tests not repeated; actual inherited applicable CI must execute them.

## Artifacts
Structured packet, Markdown decision report, source excerpts/hashes, Task/immutable CP/EB/provenance, actual offline evidence and actual PR120 post-main summary. Scratch/cache/downloads remain uncommitted.

## Risks
No hosted queries/credentials/JWT experiments/Auth changes/SQL/grants/routes/private data. No production policy selected. Historical independent runtime spawn EPERM remains BLOCKED, not PASS. Legacy SQL privilege fixture SKIP not acceptance. All six security decisions OWNER_DECISION_PENDING, Issue108 OPEN, remediation delegation EXPIRED, broad gates unchanged.

## Reviewer disposition
Distinct completed-head advisory source review and actual readyCI required before presenting preparation PR for separate owner merge. Source review is not independent runtime acceptance or owner approval. New implementation requires new authorization and immutable pack.

Historical trusted-base evaluation at 8a3f8f85cbf01e5bbad994c6aed048d667b54f3d failed exit1 because verify_packet.py is executable source and had not been included in the operative source commit. Corrected source pin includes the unchanged verifier; no validator or scope changes.
