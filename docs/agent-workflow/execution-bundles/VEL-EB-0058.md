---
id: VEL-EB-0058
title: Mock SDK-response bridge local composition and actual test evidence
type: execution-bundle
status: proposed-for-review
created_at: '2026-10-25'
version: 0.1.0
task_id: VEL-TASK-0058
context_pack_id: VEL-CP-0058
base_commit: 080c9ef9080cdfbcd740fc40a26554707b1acce3
agent:
  name: Codex
  model: Codex runtime model not independently reported
  runner: Codex desktop isolated Windows worktree, frozen Node/pnpm dependencies and
    injected mocks
  role: primary bounded implementation agent
sources:
- PROJECT-CONSTITUTION.md
- AGENTS.md
- CURRENT-STATE.md
- docs/agent-workflow/PR-COMPLIANCE.md
- apps/api/src/modules/workspace/workspace-principal-adapter.ts
- apps/api/src/modules/workspace/workspace-principal-adapter.spec.ts
- apps/api/src/modules/workspace/workspace-principal.ts
- apps/api/src/modules/workspace/workspace-contract.ts
- apps/api/src/modules/auth/supabase-auth.service.ts
- apps/api/package.json
- docs/agent-workflow/inputs/VEL-TASK-0058/SDK-CONTRACT.md
- docs/agent-workflow/inputs/VEL-TASK-0058/OWNER-SCOPE.md
evidence:
- docs/reports/VEL-SDK-RESPONSE-BRIDGE-0058.md
- docs/reports/evidence/VEL-TASK-0058/results.json
- docs/reports/evidence/VEL-TASK-0058/before-bridge.txt
- docs/reports/evidence/VEL-TASK-0058/adapter-initial.txt
- docs/reports/evidence/VEL-TASK-0058/check-initial.txt
- docs/reports/evidence/VEL-TASK-0058/adapter-corrected.txt
- docs/reports/evidence/VEL-TASK-0058/check-corrected.txt
- docs/reports/evidence/VEL-TASK-0058/install.txt
- docs/reports/evidence/VEL-TASK-0058/adapter.txt
- docs/reports/evidence/VEL-TASK-0058/persistence-unit.txt
- docs/reports/evidence/VEL-TASK-0058/workspace.txt
- docs/reports/evidence/VEL-TASK-0058/library.txt
- docs/reports/evidence/VEL-TASK-0058/preflight.txt
- docs/reports/evidence/VEL-TASK-0058/build.txt
- docs/reports/evidence/VEL-TASK-0058/check.txt
- docs/reports/evidence/VEL-TASK-0058/governance.txt
- docs/reports/evidence/VEL-TASK-0058/preservation.json
review:
  status: pending
  approved_by: null
  evidence: null
owner_disposition: pending
implementation_source_commit: 2fffad89d0b0ced568f90adcb38b59ec297b35d0
execution:
  status: completed
  executor: Codex
  model: Codex runtime model not independently reported
  tests:
  - command: corepack.cmd pnpm install --frozen-lockfile
    source_commit: ee29b2acdf1c3d5e86d36cfd4bd7f45e1f62cf29
    exit_code: 0
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0058/install.txt
  - command: corepack.cmd pnpm --filter @vellistry/api exec tsx --test src/modules/workspace/workspace-principal-adapter.spec.ts
    source_commit: 2fffad89d0b0ced568f90adcb38b59ec297b35d0
    exit_code: 0
    status: PASS
    seconds: 1.19
    evidence: docs/reports/evidence/VEL-TASK-0058/adapter.txt
  - command: corepack.cmd pnpm --filter @vellistry/api exec tsx --test src/modules/workspace/workspace-contract.spec.ts
    source_commit: 2fffad89d0b0ced568f90adcb38b59ec297b35d0
    exit_code: 0
    status: PASS
    seconds: 1.76
    evidence: docs/reports/evidence/VEL-TASK-0058/persistence-unit.txt
  - command: corepack.cmd pnpm test:workspace-contract
    source_commit: 2fffad89d0b0ced568f90adcb38b59ec297b35d0
    exit_code: 0
    status: PASS
    seconds: 1.62
    evidence: docs/reports/evidence/VEL-TASK-0058/workspace.txt
  - command: corepack.cmd pnpm test:library-isolation
    source_commit: 2fffad89d0b0ced568f90adcb38b59ec297b35d0
    exit_code: 0
    status: PASS
    seconds: 1.77
    evidence: docs/reports/evidence/VEL-TASK-0058/library.txt
  - command: corepack.cmd pnpm test:hosted-preflight
    source_commit: 2fffad89d0b0ced568f90adcb38b59ec297b35d0
    exit_code: 0
    status: PASS
    seconds: 1.61
    evidence: docs/reports/evidence/VEL-TASK-0058/preflight.txt
  - command: corepack.cmd pnpm build
    source_commit: 2fffad89d0b0ced568f90adcb38b59ec297b35d0
    exit_code: 0
    status: PASS
    seconds: 17.05
    evidence: docs/reports/evidence/VEL-TASK-0058/build.txt
  - command: corepack.cmd pnpm check
    source_commit: 2fffad89d0b0ced568f90adcb38b59ec297b35d0
    exit_code: 0
    status: PASS
    seconds: 6.28
    evidence: docs/reports/evidence/VEL-TASK-0058/check.txt
  - command: python scripts/ci_governance.py
    source_commit: 2fffad89d0b0ced568f90adcb38b59ec297b35d0
    exit_code: 0
    status: PASS
    count: 423
    evidence: docs/reports/evidence/VEL-TASK-0058/governance.txt
  - command: Inline approved-path/old18case-prefix/history/Auth/CI/SQL/dependency
      preservation assertions
    source_commit: 2fffad89d0b0ced568f90adcb38b59ec297b35d0
    exit_code: 0
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0058/preservation.json
---

## Work performed
New unregistered workspace-supabase-response-bridge.ts composes injected mock getUser/getClaims results into the existing synthetic verification-port contract. Existing mandatory principal-adapter.spec.ts retains18old cases and appends18SDK-shaped mock composition cases. Both injected operations receive the same immutable request token; strict complete user/subject/session/expiry/error validation, response-arrival snapshots and post-await time checks preserve existing provider isolation/binding. No real SDK import/init, Auth request, network fallback or production registration. Task58/validated committed immutable CP58 preceded code.

## Facts and evidence
Base55690e9b707bc1bb9af6cadd761a916d6e5a6a37 reverified after PR119/post-main40199221516 SUCCESS. Public docs and frozen SDK2.117.3 source were read only to establish mock response shape; exact snippets/hash pinned in inputs. Markdown changelog fetch could not be parsed, HTML fallback inspected. No target inspection or actual client invocation. Source-scope assertions establish exactly the two approved app paths and unchanged existing Auth/guard/principal implementation/module/route/SQL/CI/dependencies/history. Original18test bodies retained exactly except new import; all new cases execute via the existing mandatory spec command.

## Interpretations
SDK-shaped mock composition is not real SDK/authentication compatibility acceptance. Trusted mock responses may invent consistent identity data; echoing an explicit token and comparing user/claims does not verify signatures, revocation or active sessions. Proof timestamp at start conservatively avoids laundering an early response's age while another is delayed. Existing30000ms freshness/expiry/immutable author+session+expiry pinning remain unchanged. Metadata/header/signature/user attributes are not used as ownership or retained in proof.

## Proposals
After distinct completed-head review and actual readyCI, present new feature PR for separate owner merge. No automatic integration. All six production decisions remain OWNER_DECISION_PENDING, hosted observations UNVERIFIED. No real verifier, writable-session gate, roles, SQL packaging or production transport is authorized by this local slice.

## Tests
At committed source:36mandatory adapter/bridge cases (18old+18new),12existing persistence units,41Workspace,67Library,23preflight PASS; frozen install/build/typecheck PASS. Full governance423PASS (284current+139archived), metadata/readiness/full pin validation/traceability/provenance/export checks, exit0. Scope/preservation assertions PASS. Raw outputs/commands/exits/durations/source SHAs retained. Existing inherited readyCI must actually run36+12+32PG/security/recovery at final head; final links/counts appended in external PR ledger, not inferred from older local proof.

Historical failures retained: missing bridge module before implementation; initial35/36PASS with helper-default swallowing explicit undefined; initial typecheck exit2 for deliberate malformed-client cast. Corrections were to test harness only, not bridge validation. Initial failed candidate was uncommitted at CP head; no immutable failed-tree SHA is fabricated. Corrected36case/typecheck runs and pinned-source runs pass. No required execution is labeled passing based on these failures. Historical independent runtime BLOCKED remains BLOCKED; any new review runtime limit will be reported separately.

## Artifacts
New two-file slice, source-preserving test extension, report, Task/CP/EB/provenance and raw test/source evidence. Generated scratch packs, ZIPs, caches and local .submission records are not committed source. Frozen SDK excerpt is task data, not permission to invoke Auth. Current-state update records candidate status, not owner acceptance.

## Risks
No real client initialized, no new actual Auth/network/JWT/credential/hosted operation, SQL/grant/RLS/migration, route/controller/production gateway or private persistence. Inherited disposable CI security/recovery remains unchanged; local synthetic fixtures are not hosted acceptance. No dependency/CI changes. All six production choices pending, broad gates unchanged, remediation delegation EXPIRED; Issue108 OPEN. Any legacy privilege fixture skip is not acceptance. No claim of production principal or logout/session enforcement.

## Reviewer disposition
Distinct completed-head advisory source review and actual readyCI required; evidence recorded in PR ledger. Owner acceptance and feature merge remain pending. AI source review is not owner approval; blocked independent executions never promoted to PASS.
