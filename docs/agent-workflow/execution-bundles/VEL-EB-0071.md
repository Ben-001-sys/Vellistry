---
id: VEL-EB-0071
title: IMP003B manuscript revisions and synthetic recovery
type: execution-bundle
status: proposed-for-review
created_at: '2026-10-31'
version: 0.1.0
task_id: VEL-TASK-0071
context_pack_id: VEL-CP-0071
base_commit: a4d128257cbb5f1a6e30707ce439e07a7f97b4cd
agent:
  name: Codex
  model: Codex runtime model not independently reported
  runner: Windows isolated worktree
  role: primary bounded implementer
sources:
- docs/agent-workflow/inputs/VEL-TASK-0071/OWNER-SCOPE.md
- docs/agent-workflow/inputs/VEL-TASK-0071/CONTRACT.md
- docs/agent-workflow/inputs/VEL-TASK-0071/HISTORICAL-PREPARATION.json
evidence:
- docs/reports/VEL-IMP003B-CONTRACTS-0071.md
- docs/reports/evidence/VEL-TASK-0071/summary.json
review:
  status: pending
  approved_by: null
  evidence: null
implementation_source_commit: daed575f6eb42eda5c09abff07e7e5e747e6dbeb
execution:
  status: completed
  executor: Codex
  model: Codex runtime model not independently reported
  tests:
  - command: corepack.cmd pnpm check
    source_commit: b5fe318850dab53332636128f7a64f53c22ad481
    exit_code: 0
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0071/check.log
  - command: corepack.cmd pnpm build
    source_commit: b5fe318850dab53332636128f7a64f53c22ad481
    exit_code: 0
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0071/build.log
  - command: corepack.cmd pnpm test:workspace-contract
    source_commit: b5fe318850dab53332636128f7a64f53c22ad481
    exit_code: 0
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0071/test-workspace-contract.log
  - command: corepack.cmd pnpm test:library-isolation
    source_commit: b5fe318850dab53332636128f7a64f53c22ad481
    exit_code: 0
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0071/test-library-isolation.log
  - command: corepack.cmd pnpm test:auth-mfa
    source_commit: b5fe318850dab53332636128f7a64f53c22ad481
    exit_code: 0
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0071/test-auth-mfa.log
  - command: corepack.cmd pnpm test:hosted-preflight
    source_commit: b5fe318850dab53332636128f7a64f53c22ad481
    exit_code: 0
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0071/test-hosted-preflight.log
  - command: corepack pnpm --filter @vellistry/api exec tsx --test src/modules/workspace/workspace-contract.spec.ts
    source_commit: b5fe318850dab53332636128f7a64f53c22ad481
    exit_code: 0
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0071/persistence-units-corrected.log
    note: Final daed575 changes only the existing remote-context test copy list; corrected21unit
      test ran with that working-tree edit before its commit. Database/application
      executable code and fixtures unchanged.
  - command: corepack pnpm --filter @vellistry/api exec tsx --test src/modules/workspace/workspace-principal-adapter.spec.ts
    source_commit: b5fe318850dab53332636128f7a64f53c22ad481
    exit_code: 0
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0071/principal.log
    note: Final daed575 changes only the existing remote-context test copy list; corrected21unit
      test ran with that working-tree edit before its commit. Database/application
      executable code and fixtures unchanged.
  - command: python tests/workspace/persistence/run_pg17.py --disposable --cases docs/contracts/VEL-IMP002-PERSISTENCE-CASES.json
    source_commit: b5fe318850dab53332636128f7a64f53c22ad481
    exit_code: 0
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0071/fa626a893794456fb35058f28be229b0-runtime.json
    note: Final daed575 changes only the existing remote-context test copy list; corrected21unit
      test ran with that working-tree edit before its commit. Database/application
      executable code and fixtures unchanged.
---

# IMP003B implementation evidence

## Work performed
FACT: Task0071 rebuilt on reviewed main857b686 after PR132. Original0190a22 and undispatched pack preserved separately with hashes in governing inputs. New CP committed a15da105 before code. Only approved new SQL fixture is modified; no operative migration, Auth, route, dependency or workflow changes.

Pure validator supports bounded Tiptap paragraphs/headings/basic lists and bold/italic/underline, preserves Unicode/whitespace and rejects malformed/unsupported input. Unregistered service captures immutable operations, validates receipts and identity again after async work, retains unknown intents and version floors. Test-only SQL has NOLOGIN/NOBYPASSRLS owner and execute-only gateway, owner-bound forced RLS, fixed-qualified functions, CAS+append-only revisions+digest journal in one transaction. No direct author DML restored. Receipts contain no manuscript copy.

Synthetic recovery partitions author/book/chapter/client, keeps unknown IDs, protects newer edits and accepted versions from delayed ACKs, offers explicit recovery candidates and rejects corrupt data. Actual Tiptap numbered-list JSON roundtrips. No production save UI or route is registered; injected storage has no browser-reload/device durability promise.

## Facts and evidence
Final-source app check/build/workspace81/Library81/MFA55/preflight23 PASS. Principal52 and persistence units21 PASS (last unit dependency-only correction tested separately). PG17.11:16new cases plus1real restart probe and32original cases PASS; rollback at four transaction stages, CAS concurrency, same-key replay/different payload rejection, lost-ACK receipt reconciliation, foreign reads/receipts/writes/session mismatch and direct DML denial. Owned container/volume absent after cleanup. Earlier runtime32PASS with failed new port lookup remainsFAIL. Raw logs and source/runtime hashes retained.

## Interpretations
These are reusable repository contracts and real disposable database evidence, not hosted Supabase/session assurance. Lost ACK is a discarded successful response, not a real HTTP disconnect. SQL uses trusted synthetic server-installed principal settings; no user-supplied owner is accepted by the service operation. The server-only gateway is not registered in production. Initial source review found twoP2s: ordered-list attrs and repeated unknown recovery; both corrected with actual-editor/repeated-reopen regressions. Final completed-head review remains required externally.

## Proposals
Owner separately reviews/merges only after exact-head CI and distinct review. Production principal/session/gateway/transport and migration packaging remain separate decisions.

## Tests
All actual source pins/commands/exits and limitations are in summary.json and linked raw outputs. Local full governance was interrupted exit1 after source advanced; no local full-suite PASS claim. Exact final-head full CI must verify governance and existing security/recovery. Earlier pack-size, encoding, shell, review and runtime failures are retained rather than erased.

## Acceptance mapping
Owner cases1/2/19: save-reopen-preservation, actual Tiptap roundtrip, Unicode/whitespace validator tests.3: atomic-revision-receipt.4: fault-rollback at journal/document/revision/receipt.5/6: duplicate-identical/changed.7/8: stale/concurrent CAS.9/10: lost-ACK-reconciliation and service unknown lock.11: real-owned-database-restart-reopen.12: foreign-read/receipt.13: cross-book-chapter and partitioned recovery.14: forged-principal-session and extra-owner payload rejection.15: direct-author-DML/gateway-history-DML.16: account-switch and post-async identity service tests.17: delayed ACK/newer edits and newer accepted revision floors.18: malformed/oversized/corrupt validation/recovery.20: unknown/conflict/rejected no Saved.

Trace: proposed VEL-SPEC-001 SC001/003-007; VEL-JRN001-003; ACC-M3-01/02 and M8 isolation. These are bounded experimental evidence, not completion of original production journeys or private-pilot acceptance. Historical source statuses unchanged.

## Artifacts
Task0071, CP0071, EB0071, exact SQL fixture, test/service/recovery contracts, report, immutable historical provenance and per-commit manifest.

## Risks
R01-R08 NOT_RUN; N12/historical spawn EPERM BLOCKED. PRINCIPAL/SESSION/gateway/hosted/private pilot unresolved. Issues108/131 OPEN. No hosted Auth/SQL/MFA/private manuscripts/paid calls/deployment/merge. Remediation delegation EXPIRED.

## Reviewer disposition
Pending distinct completed-head review, exact-head Draft/Ready CI and separate owner merge decision. Agent does not promote owner acceptance.
