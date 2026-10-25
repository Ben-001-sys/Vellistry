---
id: VEL-EB-0056
title: Synthetic request-isolated principal-binding adapter and real local test evidence
type: execution-bundle
status: proposed-for-review
created_at: '2026-10-25'
version: 0.1.0
task_id: VEL-TASK-0056
context_pack_id: VEL-CP-0056
base_commit: 151e26ebf2f745876d7152cb3da1922eda402792
agent:
  name: Codex
  model: Codex runtime model not independently reported
  runner: Codex desktop isolated Windows worktree, Node24.13.0/Python3.10.10/pnpm10.18.0
  role: primary bounded code implementer
sources:
- PROJECT-CONSTITUTION.md
- AGENTS.md
- CURRENT-STATE.md
- docs/agent-workflow/PR-COMPLIANCE.md
- docs/agent-workflow/proposals/VEL-IMP002-PRINCIPAL-BINDING-HANDOFF-0055.json
- apps/api/src/modules/workspace/workspace-principal.ts
- apps/api/src/modules/workspace/workspace.service.ts
- apps/api/src/modules/workspace/workspace-contract.ts
- apps/api/package.json
- apps/api/tsconfig.json
- docs/agent-workflow/inputs/VEL-TASK-0056/OWNER-SCOPE.md
evidence:
- docs/reports/VEL-PRINCIPAL-BINDING-0056.md
- docs/reports/evidence/VEL-TASK-0056/commands.json
- docs/reports/evidence/VEL-TASK-0056/governance-result.json
- docs/reports/evidence/VEL-TASK-0056/post-main-summary.json
- docs/reports/evidence/VEL-TASK-0056/before-adapter.txt
- docs/reports/evidence/VEL-TASK-0056/install-summary.json
- docs/reports/evidence/VEL-TASK-0056/adapter.txt
- docs/reports/evidence/VEL-TASK-0056/persistence-unit.txt
- docs/reports/evidence/VEL-TASK-0056/workspace.txt
- docs/reports/evidence/VEL-TASK-0056/library.txt
- docs/reports/evidence/VEL-TASK-0056/preflight.txt
- docs/reports/evidence/VEL-TASK-0056/build.txt
- docs/reports/evidence/VEL-TASK-0056/check.txt
- docs/reports/evidence/VEL-TASK-0056/governance.txt
- docs/reports/evidence/VEL-TASK-0056/scope-integrity.json
review:
  status: pending
  approved_by: null
  evidence: null
owner_disposition: pending
implementation_source_commit: b63128262c6440cec3a20488ee4327292c177732
execution:
  status: completed
  executor: Codex
  model: Codex runtime model not independently reported
  tests:
  - command: corepack.cmd pnpm install --frozen-lockfile
    source_commit: 32bf568463fde3423f210d94072a2661ea17daa9
    exit_code: 0
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0056/install-summary.json
  - command: corepack.cmd pnpm --filter @vellistry/api exec tsx --test src/modules/workspace/workspace-principal-adapter.spec.ts
    source_commit: b63128262c6440cec3a20488ee4327292c177732
    exit_code: 0
    status: PASS
    seconds: 1.24
    evidence: docs/reports/evidence/VEL-TASK-0056/adapter.txt
  - command: corepack.cmd pnpm --filter @vellistry/api exec tsx --test src/modules/workspace/workspace-contract.spec.ts
    source_commit: b63128262c6440cec3a20488ee4327292c177732
    exit_code: 0
    status: PASS
    seconds: 2.75
    evidence: docs/reports/evidence/VEL-TASK-0056/persistence-unit.txt
  - command: corepack.cmd pnpm test:workspace-contract
    source_commit: b63128262c6440cec3a20488ee4327292c177732
    exit_code: 0
    status: PASS
    seconds: 2.5
    evidence: docs/reports/evidence/VEL-TASK-0056/workspace.txt
  - command: corepack.cmd pnpm test:library-isolation
    source_commit: b63128262c6440cec3a20488ee4327292c177732
    exit_code: 0
    status: PASS
    seconds: 2.52
    evidence: docs/reports/evidence/VEL-TASK-0056/library.txt
  - command: corepack.cmd pnpm test:hosted-preflight
    source_commit: b63128262c6440cec3a20488ee4327292c177732
    exit_code: 0
    status: PASS
    seconds: 1.75
    evidence: docs/reports/evidence/VEL-TASK-0056/preflight.txt
  - command: corepack.cmd pnpm build
    source_commit: b63128262c6440cec3a20488ee4327292c177732
    exit_code: 0
    status: PASS
    seconds: 24.28
    evidence: docs/reports/evidence/VEL-TASK-0056/build.txt
  - command: corepack.cmd pnpm check
    source_commit: b63128262c6440cec3a20488ee4327292c177732
    exit_code: 0
    status: PASS
    seconds: 10.97
    evidence: docs/reports/evidence/VEL-TASK-0056/check.txt
  - command: python scripts/ci_governance.py
    source_commit: b63128262c6440cec3a20488ee4327292c177732
    exit_code: 0
    status: PASS
    count: 421
    evidence: docs/reports/evidence/VEL-TASK-0056/governance.txt
  - command: Inline PB09/PB10 exact scope/history/mandatory workflow assertions
    source_commit: b63128262c6440cec3a20488ee4327292c177732
    exit_code: 0
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0056/scope-integrity.json
---

## Work performed
Implemented exactly two new application files, request-isolated principal adapter and synthetic spec, after committed/validated immutable CP56 and verified successful PR116 integration. Factory captures immutable token/verifier method, validates strict same-token user/claims/time data, pins author/session/expiry per provider, checks post-await freshness and returns frozen principal snapshots. No existing Auth/module/service/route/SQL/dependency/CI implementation change.

## Facts and evidence
Owner-approved PR116 head33e6c404cb3630c2bc3325913f8704c716b52c02 merged e2862c38d03e2bbb6fe4365c3c9074ee0c53e972 with identical tree88d37f88f2285284325dbdb550166f9f3a9fb902. Post-main40189902635 SUCCESS including actual32PG17.11, verified owned cleanup; downloaded exact-main artifact hash in evidence. Original Task54/55 and all historical sources/packs/evidence preserved. New Task56/CP56 pins the owner-authorized synthetic two-file scope; historical proposal statuses remain as originally recorded.

## Interpretations
Trusted injected verification responses are binding input, not proof of JWT signatures or actual Supabase session revocation. First valid synthetic response establishes this provider's identity; the factory cannot authenticate arbitrary JSON or independently validate the asserted first session. No runtime production verifier exists here. Request/session/token changes cannot silently repurpose an existing provider; errors never clear its binding.

## Proposals
Owner reviews new feature PR after distinct completed-head source review and actual readyCI. No automatic merge. All six production security decisions remain OWNER_DECISION_PENDING and hosted observations UNVERIFIED. A real verifier/session gateway/privilege/transport or CI-selection change requires separately scoped authorization.

## Tests
At committed implementation source:18adapter,12existing persistence,41workspace,67Library,23preflight tests PASS; build and typecheck PASS. Frozen installation used pinned pnpm10.18.0 and unchanged lockfile. Full governance421 tests (282current+139archived), metadata/readiness/pin validation/traceability/provenance/export checks PASS, exit0. Original session52637 completed during tool interruption and its output/exit were recovered, not assumed or rerun. PB09/PB10 scope/history/workflow integrity assertions PASS. Before-adapter missing-module failure retained as TDD history; misleading generic pnpm executable suffix is not a missing installed tool. Initial diagnostic AppModule path error was corrected to the actual src/modules/app.module.ts and preserved in scope evidence; no source defect or production regression. No required passing evidence is fabricated from either failure.

The new18adapter tests are explicit local execution; unchanged fixed-file CI does NOT select them. Actual inherited readyCI still builds/typechecks this source and must execute12existing units/32PG/security/recovery. Final exact-head run links and distinct review are appended to PR ledger, never relabelled old results. Independently blocked Task52 runtime remains BLOCKED; no independent runtime PASS claimed.

## Artifacts
Two-file code/spec, PB01-PB10 report, immutable Task/pack, raw command logs/exits/durations/source SHAs, scope/hash and post-main summaries. Before-code and diagnostic failure evidence retained. Generated scratch CP0002/0003, caches and transport ZIPs stay uncommitted. All modified source blobs bind implementation_source_commit; reports/manifest carry actual references without circular SHA claims.

## Risks
No real Auth, hosted access, credentials/users/JWT probe, shipping migration/grants/RLS, production route or manuscript persistence. Synthetic token correlation is not cryptographic proof or writable-session enforcement. Legacy SQL privilege skip is not acceptance. Six production choices and broader design/private-pilot/release gates remain pending; remediation delegation EXPIRED; Issue108 OPEN. No author-facing UI or language behavior changed. Feature PR requires separate owner merge decision.

## Reviewer disposition
Distinct completed-head advisory source review and actual readyCI are required and recorded in external PR ledger. Owner acceptance/merge remains pending; AI review is not human approval.
