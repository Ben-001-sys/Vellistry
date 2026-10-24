---
id: VEL-EB-0046
title: Exact-target hosted metadata query preparation; no hosted execution
type: execution-bundle
status: proposed-for-review
created_at: '2026-10-24'
version: 0.1.0
task_id: VEL-TASK-0046
context_pack_id: VEL-CP-0046
base_commit: 1a8cf8e50dc1809b8308a5f2436095df96350750
agent:
  name: Codex
  model: gpt-6.1-sol
  runner: Codex desktop Windows isolated repository worktree
  role: primary query-packet preparation executor
sources:
- PROJECT-CONSTITUTION.md
- AGENTS.md
- docs/decisions/ADR-0008-codex-primary-agentic-implementation-workflow.md
- docs/agent-workflow/PR-COMPLIANCE.md
- CURRENT-STATE.md
- docs/agent-workflow/inputs/VEL-TASK-0046/OWNER-SCOPE.md
- docs/agent-workflow/inputs/VEL-TASK-0046/TARGET.json
- docs/agent-workflow/inputs/VEL-TASK-0046/CHANNEL-CONTRACT.md
- docs/agent-workflow/inputs/VEL-TASK-0046/THIRD-MIGRATION-SOURCE.md
- supabase/migrations/20261009000000_initial_author_books.sql
- supabase/migrations/20261009010000_restrict_accepted_manuscript_dml.sql
- docs/reports/VEL-PR68-RECONCILIATION-0039-DECISION-PACKET.md
evidence:
- docs/reports/evidence/VEL-HOSTED-METADATA-0046/query-manifest.json
- docs/reports/evidence/VEL-HOSTED-METADATA-0046/offline-review.json
- docs/reports/evidence/VEL-HOSTED-METADATA-0046/checks.json
- docs/reports/evidence/VEL-HOSTED-METADATA-0046/acl-correction.json
review:
  status: pending
  approved_by: null
  evidence: null
owner_disposition: pending
implementation_source_commit: 564518119f4c56b87990bb4fc2c107b0d5307089
execution:
  status: completed
  executor: Codex
  model: gpt-6.1-sol
  tests:
  - command: python scripts/check_knowledge_metadata.py
    source_commit: ffefde5d8b34e09b4805ecd5fdb69e629182f935
    exit_code: 0
    seconds: 0.16
    evidence: docs/reports/evidence/VEL-HOSTED-METADATA-0046/metadata.txt
    status: PASS
  - command: python scripts/check_implementation_readiness.py
    source_commit: ffefde5d8b34e09b4805ecd5fdb69e629182f935
    exit_code: 0
    seconds: 0.1
    evidence: docs/reports/evidence/VEL-HOSTED-METADATA-0046/readiness.txt
    status: PASS
  - command: python scripts/spec_traceability.py validate
    source_commit: ffefde5d8b34e09b4805ecd5fdb69e629182f935
    exit_code: 0
    seconds: 0.12
    evidence: docs/reports/evidence/VEL-HOSTED-METADATA-0046/traceability.txt
    status: PASS
  - command: python scripts/agent_workflow.py validate
    source_commit: ffefde5d8b34e09b4805ecd5fdb69e629182f935
    exit_code: 0
    seconds: 94.04
    evidence: docs/reports/evidence/VEL-HOSTED-METADATA-0046/workflow.txt
    status: PASS
  - command: python - (offline packet structure, forbidden-query negatives, target/hash/channel
      fixtures and source-hash verification)
    source_commit: b1a10c6a133cd4b496b19f0d2e10ab4bd6b20592
    exit_code: 0
    evidence: docs/reports/evidence/VEL-HOSTED-METADATA-0046/offline-review.txt
    status: PASS
  - command: python - (previous/current query-shape regressions and NULL/empty/populated
      ACL counterexamples)
    source_commit: 564518119f4c56b87990bb4fc2c107b0d5307089
    exit_code: 0
    evidence: docs/reports/evidence/VEL-HOSTED-METADATA-0046/acl-correction.txt
    status: PASS
---

# Task0046 preparation evidence

## Work performed
Rechecked main d13deca2d6762d44f80035c6d89d2cb61d1ab1e8 and owner-linked comment6382899950. Created unique Task0046 with exact target, authorization limits and original SQL snapshots. Committed Task source before generating/checking/committing immutable CP0046, then prepared15 catalog SELECT proposals and current-state clarification. No prior Task/pack rewritten. No Supabase calls, credential/env reads, SQL execution/adoption, fixtures, settings or IMP002 code.

## Facts and evidence
Task source/CP pins are selected by the per-PR manifest. Owner/coordinator reported prior get_project identity for lflkcrnriitrbclangyr, organization pulyacnozzggwfgqdgdl, region eu-west-2; Task0046 did not recheck it. Visible generic execute_sql tool documentation offers no read-only/role/limit guarantee, so channel is NOT_VERIFIED and must not be probed. Current exact packet SHA256 is recorded in query-manifest.json with all15 query hashes. Initial hash is retained as historical; an in-scope tightening added fixed catalog-only resolution before submission. Source hashes match the two operative migrations and separately retained third planning-only proposal.

## Interpretations
Catalog metadata cannot establish runtime Data API/RLS enforcement or hosted application acceptance. Fingerprinted withheld defaults/policies do not prove semantic equivalence; unknown expressions require a separately reviewed sanitized definition export. Default ACLs affect object creation, not already-created object ACLs; inherited/column/PUBLIC privileges are inspected separately. No passing local fixture result is represented as a server query result.

## Proposals
Owner reviews exact packet/hash and output limits, then approves only a demonstrably isolated connected read-only observation channel or supplies a sanitized export. Minimum privileges: exact DB CONNECT, safe catalog-only resolution, required catalog visibility and SELECT only on migration version/name metadata. No role/config/credential changes are authorized to establish it. Q01 cannot be used through an unverified privileged channel as a capability probe. All future hosted execution remains outside this preparation Task and requires explicit bounded permission.

## Tests
Actual metadata, readiness, traceability and full historical workflow artifact validation PASS at ffefde5d8b34e09b4805ecd5fdb69e629182f935. Offline static review at the later report-only source passed15 query structural cases,9 forbidden-query negatives,6 synthetic envelope scenarios and3 source-hash checks. These are lexical/source checks, not PostgreSQL grammar/server validation or a deployed access-control mechanism. No new package/test/tooling code, dependency installation, application build or already-passing Task0045 suite rerun. Final CI will apply existing documentation/governance routing.

## Artifacts
Task0046, immutable CP0046, owner/target/channel snapshots, retained third SQL proposal in documentation, exact query packet, per-query/packet hash manifest, offline evidence and current-state clarification. Active PR manifest changes selectors/commit declarations only; standing policy and forbidden actions unchanged. Ordinary owner review/merge is required.

## Risks
No verified least-privilege connected channel yet; generic raw SQL is unsafe to assume approved. Database state/version/history and effective privileges remain UNKNOWN. Read-only SQL with a row LIMIT alone does not bound work or protect against secrets; external timeout/byte caps, fixed catalog resolution and withheld values are required. Runtime Data API config may override catalog settings. Depth/row/byte saturation and unsupported/missing metadata stop, not permit widening. Private pilot/session security and third-migration adoption remain separately gated. Expired remediation delegation supplies no authority.

## Reviewer disposition
Pending distinct final-diff advisory review and owner review of the exact query hash. Database execution remains NOT_RUN. A Draft repository PR and its CI provide preparation evidence, not authorization to query or merge. Final review/CI references are appended to the Issue108/PR ledger after the submitted head exists.

## Distinct-review bounded correction
Initial distinct review at3e8b6e02f731d158cd0edc33f2e1a034e32177fc identified a P2: empty ACL explosion could erase sequences/default overrides. Q08/Q10/Q11/Q12 now use left lateral expansion and explicit ACL-state fields; column ACL presence is recorded. Four previous query shapes fail offline preservation checks and four corrected shapes pass; three ACL-state counterexamples preserve the intended observations. This is source/fixture evidence, not server execution. Review output and prior hashes are preserved. Scope is unchanged; CP0046 is untouched. Exact packet hash was refreshed after correction and must be owner-reviewed.
