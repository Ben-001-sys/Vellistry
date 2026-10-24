---
id: VEL-EB-0050
title: PR112 source-preserving reconciliation and executable authorization preparation
type: execution-bundle
status: proposed-for-review
created_at: '2026-10-24'
version: 0.1.0
task_id: VEL-TASK-0050
context_pack_id: VEL-CP-0050
base_commit: eccbcaeb2b9f622fb29297e0a478d19b4ee84243
agent:
  name: Codex
  model: gpt-6.1-sol
  runner: Codex desktop Windows isolated worktree
  role: primary source-adoption/preparation executor
sources:
- PROJECT-CONSTITUTION.md
- AGENTS.md
- CURRENT-STATE.md
- docs/agent-workflow/PR-COMPLIANCE.md
- docs/agent-workflow/inputs/VEL-TASK-0050/OWNER-SCOPE.md
- docs/agent-workflow/inputs/VEL-TASK-0050/BOUNDARY.md
- docs/agent-workflow/inputs/VEL-TASK-0050/ORIGINAL49-INVENTORY.json
- docs/agent-workflow/inputs/VEL-TASK-0050/ORIGINAL49-CONTRACT.md
- docs/agent-workflow/inputs/VEL-TASK-0050/ORIGINAL49-CASES.json
- docs/agent-workflow/inputs/VEL-TASK-0050/ORIGINAL49-HANDOFF.md
evidence:
- docs/reports/VEL-PR112-RECONCILIATION-0050.md
- docs/reports/evidence/VEL-TASK-0050/checks.json
- docs/reports/evidence/VEL-TASK-0050/archive-fetch.json
review:
  status: pending
  approved_by: null
  evidence: null
owner_disposition: pending
implementation_source_commit: f9e460fef9eb7d9c917256ff683f7be072c3864b
execution:
  status: completed
  executor: Codex
  model: gpt-6.1-sol
  tests:
  - command: python .submission/check_source_packet.py
    source_commit: f13dbbe3f9a942004fe12f13a964fd5f7d26dd2f
    exit_code: 0
    seconds: 2.72
    evidence: docs/reports/evidence/VEL-TASK-0050/source-packet.txt
    status: PASS
  - command: python scripts/check_knowledge_metadata.py
    source_commit: f13dbbe3f9a942004fe12f13a964fd5f7d26dd2f
    exit_code: 0
    seconds: 0.31
    evidence: docs/reports/evidence/VEL-TASK-0050/metadata.txt
    status: PASS
  - command: python scripts/check_implementation_readiness.py
    source_commit: f13dbbe3f9a942004fe12f13a964fd5f7d26dd2f
    exit_code: 0
    seconds: 0.2
    evidence: docs/reports/evidence/VEL-TASK-0050/readiness.txt
    status: PASS
  - command: python scripts/spec_traceability.py validate
    source_commit: f13dbbe3f9a942004fe12f13a964fd5f7d26dd2f
    exit_code: 0
    seconds: 0.23
    evidence: docs/reports/evidence/VEL-TASK-0050/traceability.txt
    status: PASS
  - command: python -m unittest discover -s tests -p test_governance_entrypoints.py
      -v
    source_commit: f13dbbe3f9a942004fe12f13a964fd5f7d26dd2f
    exit_code: 0
    seconds: 0.37
    evidence: docs/reports/evidence/VEL-TASK-0050/entrypoints.txt
    status: PASS
  - command: fresh git init/fetch archived PR112 source with blob:none; verify original
      Task49/CP49/head commits and CP bytes
    source_commit: f13dbbe3f9a942004fe12f13a964fd5f7d26dd2f
    exit_code: 0
    seconds: 4.1
    evidence: docs/reports/evidence/VEL-TASK-0050/archive-fetch.txt
    archive_ref: codex/archive-pr112-task0049-b1c46df
    archive_head: b1c46df3942809b35f6cf4c650fe6c36f7cc60ab
    original_pins_verified:
    - 59371c80abeb640d8eb9004c6d1bf6de37e6cc54
    - afbaf279a68d23fa4ed500021efa8c79aea078b2
    - b1c46df3942809b35f6cf4c650fe6c36f7cc60ab
    cp49_sha256: f5c37c2678918b90e833cc8190af6b6a91541ebe6d7458c51ec411adb9ba7887
    status: PASS
  - command: python .submission/check_source_packet.py
    source_commit: 61aa673c5ab34f458ccbb7c610babb11452a288b
    exit_code: 0
    seconds: 2.52
    evidence: docs/reports/evidence/VEL-TASK-0050/corrected-source.txt
    status: PASS
  - command: python scripts/check_knowledge_metadata.py
    source_commit: 61aa673c5ab34f458ccbb7c610babb11452a288b
    exit_code: 0
    seconds: 0.28
    evidence: docs/reports/evidence/VEL-TASK-0050/corrected-metadata.txt
    status: PASS
  - command: python .submission/check_source_packet.py
    source_commit: f9e460fef9eb7d9c917256ff683f7be072c3864b
    exit_code: 0
    seconds: 2.95
    evidence: docs/reports/evidence/VEL-TASK-0050/locking-packet.txt
    status: PASS
  - command: python scripts/check_knowledge_metadata.py
    source_commit: f9e460fef9eb7d9c917256ff683f7be072c3864b
    exit_code: 0
    seconds: 0.3
    evidence: docs/reports/evidence/VEL-TASK-0050/locking-metadata.txt
    status: PASS
---

# Source-preserving reconciliation evidence

## Work performed
Rechecked owner-approved PR113 exact head, review and ready40114068986, merged by permitted method to667084ef30ac00a96b205eb2c52c83083db121e3, verified equal full treef25a00c603e107e95dc3a0776207e4e5b359074e and post-main40126909449 SUCCESS; recorded Issue108. Preserved original PR112 head under codex/archive-pr112-task0049-b1c46df. Committed/validated immutable Task0050 pack before copying15original Task49 paths exactly; archived the16th old active selector as input. Prepared proposed executable authorization packet, not SQL/code/security approval. Current-state summary reconciles integrated CI and pending persistence.

## Facts and evidence
Source inventory records exact old b1c46df3942809b35f6cf4c650fe6c36f7cc60ab blobs/hashes, original executorCodex and historical source/base. Original Task49/CP49/EB49/inputs/contract/cases/report/checks match all original Git bytes. All27runtime cases remain NOT_RUN; old49base references remain historical. Fresh disposable fetch of archive verifies original task59371c80abeb640d8eb9004c6d1bf6de37e6cc54, packafbaf279a68d23fa4ed500021efa8c79aea078b2 and head, including CP49 SHA256f5c37c2678918b90e833cc8190af6b6a91541ebe6d7458c51ec411adb9ba7887. Inherited apps/CI/SQL/dependencies unchanged from new main. New assembly commits are authored by Codex with exact original-source attribution, not falsely labelled whole-patch cherry-picks or newly authored Task49 content.

## Interpretations
A current-main linear amendment with new Task/pack preserves old observations better than rewriting CP49 or merging main into its old implementation range. The per-PR manifest selects Task50/current source and includes source-adoption detail; standing parser/policy/controls are unchanged. Remote branch ref may be lease-replaced only after archive, concrete checks and distinct review, expecting oldb1c46df; no evidence bytes or archive ref is overwritten. Any remote movement stops publication. Old local worktree remains untouched. Owner PR112 merge is separately required.

## Proposals
Owner reviews the reconciled source and proposed local executable packet. Exact four SQL candidate paths, eight service/test paths, private execute-only gateway/minimal owner, session-row FOR SHARE/expiry semantics, canonical journal digest and real disposable17 tests are proposals only. No future executable Task ID, shipping migration filename, approved role/session choice or owner-verified SQL approval is fabricated. Future code needs separate explicit authorization and immutable CP; SQL paths require the existing reviewed-base approval record. Provider session/JWT behavior is not established by stand-in tests.

## Tests
Actual source/packet verification:16blob+hash checks (15canonical plus archived selector),27unchanged NOT_RUN cases,1valid proposed authorization packet,12forged approval/path/status mutations rejected,4new runtime extensions remain NOT_RUN. Metadata/readiness/traceability and8current-state guards PASS. Fresh archive fetch/pins/hash PASS. These are offline source/governance checks, not SQL syntax/security/runtime acceptance. Unchanged prior41workspace/33browser and research studies are not rerun locally; current-main post CI already verifies inherited application baseline. Whole handoff validation, fresh exact-head review and actual submitted-head ready CI are recorded in the external ledger after the final SHA exists. No pending result is represented as passing.

## Artifacts
Task/inputs, immutable CP0050, unchanged original Task49 artifacts and original selector snapshot, source inventory, current-state correction, proposed executable MD/JSON packet, reconciliation report, raw checks, EB and active per-PR manifest. Original head/archive ref and previous review/CI stay historical. Executable packet command/file references are proposed future assets, not files or commands already implemented/run.

## Risks
No application/SQL/Auth/CI/dependency/settings change. No hosted access/credential retrieval, live JWT probe, private manuscript, paid API or deployment. SQL privilege skips are not acceptance. Local Docker/PG17 availability must be confirmed at future dispatch; no fallback to cloud without approval. Source approval, database execution and private-pilot security are distinct. Old remediation delegation remains EXPIRED; ordinary owner merge and broad gates unchanged; Issue108 stays OPEN.

## Reviewer disposition
Pending distinct completed-diff advisory review and ordinary owner PR112 merge. Bundle remains proposed-for-review/owner pending; actual final review and CI references belong to PR ledger after submission. The new branch and source must pass trusted-base evaluator before lease publication; no automatic merge authorized.

## Source wording correction and validation scope
First whole handoff validation at742553bc30fb7da144ef8ef0e900814c8cbb3776 passed42tasks/40packs/40bundles, exit0 in118.99seconds; first distinct review found no actionable defect. The packet then corrected a declared-versus-resolved pg version: range^8.16.3, unchanged frozen resolution8.23.1. Dependency observation, prior review and corrected source/metadata checks are retained; no package/lock or oldTask49 evidence changed. Final selected Task/pack/bundle is checked by trusted-base evaluation and actual new-head CI.

## Distinct review P2 correction: locking privileges
Review at871beaa6570efab78711596a370d1184d5d01ee1 identified SELECT-only session/book privileges as insufficient for required row locks. The new packet explicitly proposes a separate NOLOGIN/NOBYPASSRLS lock helper owner with narrow SELECT and UPDATE(id), schema USAGE and scoped RLS, callable only by workspace function owner. Real UPDATE capability and its confinement risks are named; acceptance is a sixth OWNER_DECISION_PENDING choice, never a grant. A fifth NOT_RUN extension requires42501without prerequisites, successful isolated locks only after candidate grants, and continued runtime-role denial. Corrected offline packet validation rejects14forged variants; original16blob hashes and27NOT_RUN cases still match. No SQL/runtime behavior is claimed verified.
