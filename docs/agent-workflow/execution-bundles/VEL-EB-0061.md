---
id: VEL-EB-0061
title: Real Auth decision and additive existing-service handoff preparation
type: execution-bundle
status: proposed-for-review
created_at: '2026-10-25'
version: 0.1.0
task_id: VEL-TASK-0061
context_pack_id: VEL-CP-0061
base_commit: 653c1bc994a543d718a8988dd99b653420829816
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
- apps/api/src/modules/workspace/workspace-principal-adapter.ts
- apps/api/src/modules/workspace/workspace-supabase-response-bridge.ts
- apps/api/src/modules/workspace/workspace-principal-verification-policy.ts
- docs/agent-workflow/proposals/VEL-SUPABASE-PRINCIPAL-BOUNDARY-0059.json
- docs/agent-workflow/inputs/VEL-TASK-0059/SDK-BOUNDARY-SOURCES.md
- docs/reports/VEL-SYNTHETIC-CLAIM-POLICY-0060.md
- docs/agent-workflow/inputs/VEL-TASK-0061/OWNER-SCOPE.md
evidence:
- docs/reports/VEL-REAL-AUTH-HANDOFF-0061.md
- docs/reports/evidence/VEL-TASK-0061/metadata.txt
- docs/reports/evidence/VEL-TASK-0061/pr122-post-main.json
- docs/reports/evidence/VEL-TASK-0061/preparation-checks.json
- docs/reports/evidence/VEL-TASK-0061/readiness.txt
- docs/reports/evidence/VEL-TASK-0061/traceability.txt
review:
  status: pending
  approved_by: null
  evidence: null
owner_disposition: pending
implementation_source_commit: 1f72022039b92d3bee8ef46fabaf31927000f3a8
execution:
  status: completed
  executor: Codex
  model: Codex runtime model not independently reported
  tests:
  - command: Inline9source hashes, scope/history/pending-decision/proposed-case and
      own immutable Task/ContextPack assertions
    source_commit: 1f72022039b92d3bee8ef46fabaf31927000f3a8
    exit_code: 0
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0061/preparation-checks.json
  - command: python scripts/check_knowledge_metadata.py
    source_commit: 1f72022039b92d3bee8ef46fabaf31927000f3a8
    exit_code: 0
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0061/metadata.txt
  - command: python scripts/check_implementation_readiness.py
    source_commit: 1f72022039b92d3bee8ef46fabaf31927000f3a8
    exit_code: 0
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0061/readiness.txt
  - command: python scripts/spec_traceability.py validate
    source_commit: 1f72022039b92d3bee8ef46fabaf31927000f3a8
    exit_code: 0
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0061/traceability.txt
---

## Work performed
Prepared bounded real-Auth decision/handoff using Task59 security packet and Task60 limits. No new synthetic layer or app implementation. Unique Task0061 and validated committed immutableCP0061 preceded effective preparation documents.

## Facts and evidence
PR122 merged db3c7e92375c984f2730e720b1a23cadb5437934; full tree dfaada375f02b06fe7f57f5aacedb81d6cafeeca equals approved reviewed head. Actual post-main40220684442 SUCCESS. Exact-main32PG17.11 artifact/15source hashes/owned cleanup verified, summary retained.52adapter/12unit/32PG remain mandatory. Task60/CP60/EB60/failures and historical NOT_RUN unchanged. All app/SQL/CI/dependency files unchanged by this preparation.

## Interpretations
Trusted signature/key claims, trusted Auth-server user identity, and authoritative active-session/write enforcement are separate authorities. SDK fallback/path/cache behavior must be accounted for, not inferred from generic getClaims success. Task60 fixture-only policy must not become production defaults. No positive AAL/target signing/audience policy is approved. Successful identity outside transaction is not writable-session authority or a lock held through commit.

## Proposals
Smallest next decision: owner approves explicit PRINCIPAL target/issuer/audience/role/anonymous/AAL/time/key/fallback policy envelope and separately scopes an additive existing SupabaseAuthService.verifyPrincipalEvidence method plus extension of existing mandatory principal spec. Preserve existing verify/guard/Books ABI; no new bridge/Auth stack, client in tests, routes, grants or write scope. Candidate method never called automatically. Future R01-R08 are NOT_RUN_PROPOSED, next Task unallocated/NOT_AUTHORIZED. All six production decisions pending. Session choice requires separately authorized catalog/provider/revocation/race/privilege evidence; N12BLOCKED, no grant selected.

## Tests
Actual offline9source-hash/scope/history/pending/proposed-case/immutablepack assertions PASS. Metadata/readiness/traceability PASS, commands/source/exits recorded. Unchanged app/local research tests not rerun just for this preparation. Full applicable exact-head CI must actually execute52/12/32, governance/security/recovery/build/check; final links/counts go in external PR ledger. No future identity/session runtime case executed by document assertions.

## Artifacts
Task/immutableCP/owner relay/report/provenance/EB and actual preparation evidence; exact PR122 post-main summary. Scratch/cache/download/review output kept outside committed source. Report gives exact two proposed app paths and negative acceptance for a separately authorized new Task; preparation itself grants no implementation authority.

## Risks
No hosted queries/credentials/JWT probes/Auth implementation/SQL/grants/routes/CI/dependencies/private change. N12 and historical independent spawn EPERM BLOCKED, never PASS. Legacy SQL privilege skip not acceptance. All six decisions OWNER_DECISION_PENDING; hosted UNVERIFIED; Issue108 OPEN; remediation delegation EXPIRED; broad gates unchanged. No automatic successor merge.

## Reviewer disposition
Distinct completed-head trusted advisory review and actual readyCI required; final evidence appended externally after head exists. Owner merge and separate next implementation scope remain pending; AI review is not owner approval or real runtime acceptance.
