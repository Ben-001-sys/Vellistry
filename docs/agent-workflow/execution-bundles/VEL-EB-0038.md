---
id: VEL-EB-0038
title: Preserve original research bytes and verify a fresh bounded implementation
  handoff
type: execution-bundle
status: proposed-for-review
created_at: '2026-10-21'
version: 0.1.0
task_id: VEL-TASK-0038
context_pack_id: VEL-CP-0038
base_commit: 8858c6cecff58ff515b3572110e1656d474c641e
agent:
  name: Codex
  model: GPT-6; exact build unavailable
  runner: Codex desktop Windows isolated current-main worktree
  role: primary integrator of separately generated Codex source
sources:
- PROJECT-CONSTITUTION.md
- SOURCE-OF-TRUTH.md
- AGENTS.md
- docs/agent-workflow/PR-COMPLIANCE.md
- docs/agent-workflow/authorizations/VEL-REM-INTEGRATION-20261019.yaml
- docs/research/SOURCE-REGISTER.md
- docs/agent-workflow/inputs/VEL-TASK-0038/OWNER-SCOPE.md
- docs/agent-workflow/inputs/VEL-TASK-0038/SOURCE-MANIFEST.json
- docs/agent-workflow/inputs/VEL-TASK-0038/SOURCE-GAPS.md
evidence:
- docs/reports/evidence/VEL-SOURCE-PRESERVATION-0038/commands.json
- docs/reports/evidence/VEL-SOURCE-PRESERVATION-0038/implementation-origins.json
- docs/reports/evidence/VEL-SOURCE-PRESERVATION-0038/attempt1-result.json
review:
  status: pending
  approved_by: null
  evidence: null
implementation_source_commit: c8c541eb0ff166825c0d6a444180ebfab01cf1c0
execution:
  status: completed
  executor: Codex
  model: GPT-6; exact build unavailable
  tests:
  - command: python -m unittest discover -s tests -p test_research_archive.py -v
    source_commit: c8c541eb0ff166825c0d6a444180ebfab01cf1c0
    exit_code: 0
    seconds: 1.046
    evidence: docs/reports/evidence/VEL-SOURCE-PRESERVATION-0038/archive-tests-source.txt
    status: PASS
  - command: python scripts/verify_research_archive.py --archive docs/agent-workflow/inputs/VEL-TASK-0038/original-research-export.zip
      --manifest docs/agent-workflow/inputs/VEL-TASK-0038/SOURCE-MANIFEST.json
    source_commit: c8c541eb0ff166825c0d6a444180ebfab01cf1c0
    exit_code: 0
    seconds: 0.172
    evidence: docs/reports/evidence/VEL-SOURCE-PRESERVATION-0038/archive-integrity-source.txt
    status: PASS
  - command: corepack.cmd pnpm install --frozen-lockfile --offline
    source_commit: c8c541eb0ff166825c0d6a444180ebfab01cf1c0
    exit_code: 0
    seconds: 156.391
    evidence: docs/reports/evidence/VEL-SOURCE-PRESERVATION-0038/install-source.txt
    status: PASS
  - command: corepack.cmd pnpm check
    source_commit: c8c541eb0ff166825c0d6a444180ebfab01cf1c0
    exit_code: 0
    seconds: 27.453
    evidence: docs/reports/evidence/VEL-SOURCE-PRESERVATION-0038/check-source.txt
    status: PASS
  - command: corepack.cmd pnpm build
    source_commit: c8c541eb0ff166825c0d6a444180ebfab01cf1c0
    exit_code: 0
    seconds: 19.203
    evidence: docs/reports/evidence/VEL-SOURCE-PRESERVATION-0038/build-source.txt
    status: PASS
  - command: python scripts/ci_governance.py
    source_commit: c8c541eb0ff166825c0d6a444180ebfab01cf1c0
    exit_code: 0
    seconds: 537.688
    evidence: docs/reports/evidence/VEL-SOURCE-PRESERVATION-0038/governance-source.txt
    status: PASS
owner_disposition: pending
---

# Research source preservation

## Work performed
Preserved the original transport ZIP and manifest before immutable CP0038, integrated two unchanged separate-worker source files, and updated the source register with exact retrieval and a precise remaining SRC004 gap.

## Facts and evidence
FACT: source c8c541eb0ff166825c0d6a444180ebfab01cf1c0; original source commit8858c6cecff58ff515b3572110e1656d474c641e; CP commit5fa545c8e0b870ff4370a064ade95462ee67e0af. The original ZIP hash and all three member hashes match the historical audit. Both implementation files match the worker's unedited output; primary authored the register/integration/evidence, not those returned source strings. Full findings and limitations are in docs/reports/VEL-SOURCE-PRESERVATION-0038.md.

## Interpretations
INTERPRETATION: byte preservation and offline integrity are verified. Fresh input-only code generation is demonstrated, but independent filesystem execution was blocked before input reads. No end-to-end independent implementation or checklist27 DONE is claimed. The worker JSON runner did not expose its exact model build, so none is invented. Research claims remain source data, not accepted requirements.

## Proposals
PROPOSAL: distinct final-head trusted review, ready-event CI, delegated repository integration, exact merged-tree/post-main CI. Continue remaining remediation and retain SRC004, historical LevelB and fresh execution gaps honestly. No repeated master plan or feature dispatch.

## Tests
Fourteen synthetic archive tests and real three-member archive verification PASS; frozen offline install, both application typechecks/builds and complete governance regressions PASS with exact source-bound outputs. commands.json records commands, exits and durations. Initial uncommitted checks are historical; the source-bound repeat supplies current evidence. Source-hashes.txt independently binds historical fingerprints, committed archive and generated implementation. Applicable CI results will be linked externally after final head exists.

## Artifacts
Task/CP0038, original ZIP and source manifest, both worker dispatches/events/outputs, blocked first-attempt record, implementation origins, source register, verifier/tests, actual command logs, report and this bundle. Historical packs and sources are unchanged.

## Risks
SRC004 exact original is unavailable in the bounded search. Full fresh implementation and clean-host recovery are not established by code generation or source review. No forensic hidden-context claim, source-truth certification, cloud/SQL/private/paid/settings/newMVP action or hosted acceptance. Default task exclusions and security gates remain intact.

## Reviewer disposition
Pending actual distinct exact-head review and CI at this evidence snapshot. Structured owner_disposition remains pending; any integration is a separate operation under the merged one-time owner delegation. Never fabricate human approval. External PR ledger records subsequent review, ready run and post-main verification.

Actual complete governance at c8c541eb0ff166825c0d6a444180ebfab01cf1c0: 401 Python tests (262 current plus139 archived experiments), exit0 in537.688seconds. Metadata, readiness, specification traceability, immutable packs and original independent-agent archive checks also passed. These are primary-run repository checks, not worker-run tests or hosted acceptance.
