---
id: VEL-EB-0060
title: Pure synthetic claim policy and mandatory negative acceptance
type: execution-bundle
status: proposed-for-review
created_at: '2026-10-25'
version: 0.1.0
task_id: VEL-TASK-0060
context_pack_id: VEL-CP-0060
base_commit: 854342a5453a784f13b3ec79cf26185c02d8faee
agent:
  name: Codex
  model: Codex runtime model not independently reported
  runner: Codex desktop isolated Windows worktree, frozen dependencies and injected
    mock policy evidence
  role: primary bounded implementation agent
sources:
- PROJECT-CONSTITUTION.md
- AGENTS.md
- CURRENT-STATE.md
- docs/agent-workflow/PR-COMPLIANCE.md
- apps/api/src/modules/workspace/workspace-principal-adapter.ts
- apps/api/src/modules/workspace/workspace-principal-adapter.spec.ts
- apps/api/src/modules/workspace/workspace-principal.ts
- apps/api/src/modules/workspace/workspace-supabase-response-bridge.ts
- apps/api/src/modules/workspace/workspace-contract.ts
- docs/agent-workflow/proposals/VEL-SUPABASE-PRINCIPAL-BOUNDARY-0059.json
- docs/agent-workflow/inputs/VEL-TASK-0060/OWNER-SCOPE.md
- docs/agent-workflow/inputs/VEL-TASK-0060/POLICY-CONTRACT.md
evidence:
- docs/reports/VEL-SYNTHETIC-CLAIM-POLICY-0060.md
- docs/reports/evidence/VEL-TASK-0060/adapter-corrected.txt
- docs/reports/evidence/VEL-TASK-0060/adapter-initial.txt
- docs/reports/evidence/VEL-TASK-0060/adapter.txt
- docs/reports/evidence/VEL-TASK-0060/before-helper-permitted.txt
- docs/reports/evidence/VEL-TASK-0060/before-helper.txt
- docs/reports/evidence/VEL-TASK-0060/build.txt
- docs/reports/evidence/VEL-TASK-0060/check-initial.txt
- docs/reports/evidence/VEL-TASK-0060/check.txt
- docs/reports/evidence/VEL-TASK-0060/governance.txt
- docs/reports/evidence/VEL-TASK-0060/install.txt
- docs/reports/evidence/VEL-TASK-0060/library.txt
- docs/reports/evidence/VEL-TASK-0060/persistence-unit.txt
- docs/reports/evidence/VEL-TASK-0060/pr121-post-main.json
- docs/reports/evidence/VEL-TASK-0060/preflight.txt
- docs/reports/evidence/VEL-TASK-0060/preservation.json
- docs/reports/evidence/VEL-TASK-0060/results.json
- docs/reports/evidence/VEL-TASK-0060/workspace.txt
review:
  status: pending
  approved_by: null
  evidence: null
owner_disposition: pending
implementation_source_commit: ad7919dbc99c36e4f0474956fdac2960f4145702
execution:
  status: completed
  executor: Codex
  model: Codex runtime model not independently reported
  tests:
  - command: corepack.cmd pnpm install --frozen-lockfile
    source_commit: a5aef56a9ee069080e9e3781e5c8b62125ffed19
    exit_code: 0
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0060/install.txt
  - command: corepack.cmd pnpm --filter @vellistry/api exec tsx --test src/modules/workspace/workspace-principal-adapter.spec.ts
    source_commit: ad7919dbc99c36e4f0474956fdac2960f4145702
    exit_code: 0
    status: PASS
    seconds: 1.12
    evidence: docs/reports/evidence/VEL-TASK-0060/adapter.txt
  - command: corepack.cmd pnpm --filter @vellistry/api exec tsx --test src/modules/workspace/workspace-contract.spec.ts
    source_commit: ad7919dbc99c36e4f0474956fdac2960f4145702
    exit_code: 0
    status: PASS
    seconds: 2.0
    evidence: docs/reports/evidence/VEL-TASK-0060/persistence-unit.txt
  - command: corepack.cmd pnpm test:workspace-contract
    source_commit: ad7919dbc99c36e4f0474956fdac2960f4145702
    exit_code: 0
    status: PASS
    seconds: 1.92
    evidence: docs/reports/evidence/VEL-TASK-0060/workspace.txt
  - command: corepack.cmd pnpm test:library-isolation
    source_commit: ad7919dbc99c36e4f0474956fdac2960f4145702
    exit_code: 0
    status: PASS
    seconds: 2.05
    evidence: docs/reports/evidence/VEL-TASK-0060/library.txt
  - command: corepack.cmd pnpm test:hosted-preflight
    source_commit: ad7919dbc99c36e4f0474956fdac2960f4145702
    exit_code: 0
    status: PASS
    seconds: 1.64
    evidence: docs/reports/evidence/VEL-TASK-0060/preflight.txt
  - command: corepack.cmd pnpm build
    source_commit: ad7919dbc99c36e4f0474956fdac2960f4145702
    exit_code: 0
    status: PASS
    seconds: 25.06
    evidence: docs/reports/evidence/VEL-TASK-0060/build.txt
  - command: corepack.cmd pnpm check
    source_commit: ad7919dbc99c36e4f0474956fdac2960f4145702
    exit_code: 0
    status: PASS
    seconds: 9.41
    evidence: docs/reports/evidence/VEL-TASK-0060/check.txt
  - command: Inline exact old36 prefix/app-scope/history/CI/Auth/SQL/dependency preservation
      assertions
    source_commit: ad7919dbc99c36e4f0474956fdac2960f4145702
    exit_code: 0
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0060/preservation.json
  - command: python scripts/ci_governance.py
    source_commit: ad7919dbc99c36e4f0474956fdac2960f4145702
    exit_code: 0
    status: PASS
    count: 423
    evidence: docs/reports/evidence/VEL-TASK-0060/governance.txt
---

## Work performed
Added pure unregistered synthetic claim-policy helper and appended16cases to the existing mandatory principal spec, retaining36old bodies. Explicit fixture policy only, before bridge projection. No real SDK/Auth integration or changes to provider/bridge/Auth/guard. Task0060 and validated committed immutableCP0060 preceded code.

## Facts and evidence
PR121 merged9b492262026287152af7fb0a5981efda1524d059 with exact full-tree equality0feb8f9faf0a1011edbdb883535a4f5198916c8b and actual post-main40215639714 SUCCESS. Synthetic32case artifact/source/cleanup verified. Task59/CP59/EB59 and old failures/NOT_RUN unchanged. Source ad7919dbc99c36e4f0474956fdac2960f4145702 changes only two authorized app files plus current-state. Report maps all14acceptance IDs accurately.

## Interpretations
Matching injected claims is NOT signature/Auth-server/active-session verification. No positive AAL approved: any aal field denies. Minimal mock schema rejects unknown data, not a claim of live SDK compatibility. Explicit anonymous:false and safe exp/optional iat/nbf checked; trusted synthetic issuer/aud/role are not production defaults. Snapshots freeze all returned layers. Existing30000msfreshness and request/token/author/session/expiry binding remain enforced after async composition.

## Proposals
After distinct completed-head trusted source review and actual readyCI, present PR for separate owner merge. All six production decisions remain OWNER_DECISION_PENDING; no automatic merge, production policy, Auth client, writable-session gate or gateway registration. Future real integration requires new scoped owner decision.

## Tests
At committed source52mandatory tests (36old+16new),12units,41workspace,67Library,23preflight, frozen install/build/check PASS, all exit0. Raw commands/source/exits/durations preserved. Scope/history/prefix assertions PASS. Full governance outcome and final-head Actions evidence recorded when actual execution completes, not inferred. N01-N11/N13 executable mock acceptance passes; N14local preservation passes and actual final32PG/security/recovery CI remains required. N12 BLOCKED, not executed; N11 only absence of writable authority, not real revoked-token rejection.

Historical failures: sandbox Corepack request/cache unavailable exit1 before-helper.txt; permitted pre-helper retry genuinely missing module exit1; first adapter51/52PASS due fixture default replacing explicit undefined, fixed in test harness only; corrected52PASS and initial typecheckPASS retained. Failed candidate uncommitted at CP head, no invented immutable failed-source SHA. Historical independent runtime spawn EPERM remains BLOCKED.

## Artifacts
Task/immutable CP/input contract, exact two-file implementation, acceptance report, raw evidence and provenance. Scratch packs0002/0003/temp Git/repos/caches/generated exports not committed. Source/input framing preserved; all proposed future/runtime evidence limits explicit.

## Risks
No hosted access/credentials, new real JWT/Auth/JWKS experiment, SQL/grant/session lock, production route/write, dependency/CI or private manuscript change. Unchanged mandatory disposable CI security checks are separate inherited local fixtures, not real-helper Auth acceptance. All six decisions pending; N12BLOCKED, hosted UNVERIFIED, Issue108 OPEN, expired remediation delegation closed, broad gates unchanged. Legacy privilege fixture skip is not SQL acceptance.

## Reviewer disposition
Distinct completed-head advisory review and applicable readyCI required; final exact-head records appended to external PR ledger. Owner merge/acceptance pending; source review never substitutes for runtime/hosted or owner approval.

Full local governance completed exit0:423tests (284current+139archived), metadata/readiness/traceability, immutable pack/bundle validation and historical source/export checks PASS. Generated Level B ZIP is NOT a newly completed independent implementation.
