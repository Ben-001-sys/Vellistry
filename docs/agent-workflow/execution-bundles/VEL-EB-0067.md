---
id: VEL-EB-0067
title: Local MFA route and tsx Nest injection repair
type: execution-bundle
status: proposed-for-review
created_at: '2026-10-28'
version: 0.1.0
task_id: VEL-TASK-0067
context_pack_id: VEL-CP-0067
base_commit: 5ada2cd5c06353102deb250a17b5002275b8857c
agent:
  name: Codex
  model: Codex runtime model not independently reported
  runner: Codex desktop isolated Windows local-auth-runtime worktree
  role: primary bounded implementation agent
sources:
- PROJECT-CONSTITUTION.md
- AGENTS.md
- CURRENT-STATE.md
- SOURCE-OF-TRUTH.md
- docs/agent-workflow/PR-COMPLIANCE.md
- docs/agent-workflow/README.md
- docs/decisions/ADR-0008-codex-primary-agentic-implementation-workflow.md
- apps/api/src/modules/auth/supabase-auth.guard.ts
- apps/api/src/modules/auth/supabase-auth.service.ts
- apps/api/src/modules/auth/auth.module.ts
- apps/api/src/modules/app.module.ts
- apps/api/src/modules/books/books.service.ts
- apps/api/src/modules/books/books.controller.ts
- apps/api/src/main.ts
- apps/api/tsconfig.json
- apps/api/package.json
- apps/web/src/app/account/mfa/page.tsx
- package.json
- docs/agent-workflow/inputs/VEL-TASK-0067/OWNER-AUTHORIZATION.json
- docs/agent-workflow/inputs/VEL-TASK-0067/DIAGNOSIS.md
evidence:
- docs/reports/VEL-LOCAL-AUTH-RUNTIME-0067.md
- docs/reports/evidence/VEL-TASK-0067/build.txt
- docs/reports/evidence/VEL-TASK-0067/check.txt
- docs/reports/evidence/VEL-TASK-0067/compiled-final-build.txt
- docs/reports/evidence/VEL-TASK-0067/compiled-final.txt
- docs/reports/evidence/VEL-TASK-0067/design-corrected.txt
- docs/reports/evidence/VEL-TASK-0067/entrypoints-corrected.txt
- docs/reports/evidence/VEL-TASK-0067/library-final.txt
- docs/reports/evidence/VEL-TASK-0067/live-local.txt
- docs/reports/evidence/VEL-TASK-0067/metadata.txt
- docs/reports/evidence/VEL-TASK-0067/mfa.txt
- docs/reports/evidence/VEL-TASK-0067/preflight.txt
- docs/reports/evidence/VEL-TASK-0067/readiness.txt
- docs/reports/evidence/VEL-TASK-0067/runtime-smoke.json
- docs/reports/evidence/VEL-TASK-0067/traceability.txt
review:
  status: pending
  approved_by: null
  evidence: null
owner_disposition: pending
implementation_source_commit: 2009c8f33f422d05a35778243a3f8214ba1a58a7
execution:
  status: completed
  executor: Codex
  model: Codex runtime model not independently reported
  tests:
  - command: corepack pnpm check
    source_commit: 18174d2aa96aa2653bfb11b413d6d867ecba9e73
    exit_code: 0
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0067/check.txt
    reused_for_source: 2009c8f33f422d05a35778243a3f8214ba1a58a7
    reuse_basis: Production Auth/Books/web/package/lock behavior unchanged; only test
      assertion diagnostics and documentation encoding corrected; final actual CI
      must rerun at head
  - command: corepack pnpm build
    source_commit: 18174d2aa96aa2653bfb11b413d6d867ecba9e73
    exit_code: 0
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0067/build.txt
    reused_for_source: 2009c8f33f422d05a35778243a3f8214ba1a58a7
    reuse_basis: Production Auth/Books/web/package/lock behavior unchanged; only test
      assertion diagnostics and documentation encoding corrected; final actual CI
      must rerun at head
  - command: corepack pnpm test:auth-mfa
    source_commit: 18174d2aa96aa2653bfb11b413d6d867ecba9e73
    exit_code: 0
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0067/mfa.txt
    reused_for_source: 2009c8f33f422d05a35778243a3f8214ba1a58a7
    reuse_basis: Production Auth/Books/web/package/lock behavior unchanged; only test
      assertion diagnostics and documentation encoding corrected; final actual CI
      must rerun at head
  - command: corepack pnpm test:library-isolation
    source_commit: 2009c8f33f422d05a35778243a3f8214ba1a58a7
    exit_code: 0
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0067/library-final.txt
  - command: corepack pnpm test:hosted-preflight
    source_commit: 18174d2aa96aa2653bfb11b413d6d867ecba9e73
    exit_code: 0
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0067/preflight.txt
    reused_for_source: 2009c8f33f422d05a35778243a3f8214ba1a58a7
    reuse_basis: Production Auth/Books/web/package/lock behavior unchanged; only test
      assertion diagnostics and documentation encoding corrected; final actual CI
      must rerun at head
  - command: corepack pnpm --filter @vellistry/api exec tsc -p tsconfig.json --outDir
      .runtime-test
    source_commit: 2009c8f33f422d05a35778243a3f8214ba1a58a7
    exit_code: 0
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0067/compiled-final-build.txt
  - command: node --test apps/api/.runtime-test/modules/auth/auth-runtime.spec.js
    source_commit: 2009c8f33f422d05a35778243a3f8214ba1a58a7
    exit_code: 0
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0067/compiled-final.txt
  - command: python .submission/runtime-smoke.py
    source_commit: 2009c8f33f422d05a35778243a3f8214ba1a58a7
    exit_code: 0
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0067/runtime-smoke.json
  - command: Playwright local MFA DOM assertions and loopback route/transport smoke
    source_commit: 2009c8f33f422d05a35778243a3f8214ba1a58a7
    exit_code: 0
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0067/live-local.txt
  - command: python -m unittest discover -s tests -p test_governance_entrypoints.py
      -v
    source_commit: 2009c8f33f422d05a35778243a3f8214ba1a58a7
    exit_code: 0
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0067/entrypoints-corrected.txt
  - command: python -m unittest discover -s tests -p test_research_design_gate.py
      -v
    source_commit: 2009c8f33f422d05a35778243a3f8214ba1a58a7
    exit_code: 0
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0067/design-corrected.txt
  - command: python scripts/check_knowledge_metadata.py
    source_commit: 2009c8f33f422d05a35778243a3f8214ba1a58a7
    exit_code: 0
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0067/metadata.txt
  - command: python scripts/check_implementation_readiness.py
    source_commit: 2009c8f33f422d05a35778243a3f8214ba1a58a7
    exit_code: 0
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0067/readiness.txt
  - command: python scripts/spec_traceability.py validate
    source_commit: 2009c8f33f422d05a35778243a3f8214ba1a58a7
    exit_code: 0
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0067/traceability.txt
---

## Work performed
Restored current local Next instance without MFA redesign; fixed three Nest constructor runtime tokens and added14offline real-Nest HTTP tests to existing mandatory Library command. Task0067/source commit5ada2cd5c06353102deb250a17b5002275b8857c and immutableCP4de1cda precede code; see exact manifest/Git references (short Task prefix in prose is informational, full base_commit above is authoritative).

## Facts and evidence
Root stale78f80bb branch was serving Next16.4.0 and lacked route; initial/account/mfa404 confirmed. Current main5e3aeec has route and frozen16.4.1; actual current loopback route200 and Playwright3DOM assertions PASS. No owner dirty files or env values copied/read. Only identified obsolete web/API trees stopped; corrected isolated processes at3000/4100 deliberately have no Supabase configuration. Live health200/Books401; BFF503 distinctly means absent config, not a guard crash or missing-table diagnosis.

## Interpretations
Module registration/exports already correct. tsx omits design:paramtypes, so Nest constructed guard, service and controller with undefined dependencies; actual baseline14cases5PASS/9FAIL. tsc-emitted runtime14PASS even before correction, but initial compilation exit1 due a new test structural-cast type error; preserved, not certified as successful compilation. @Inject concrete tokens resolve the cause in both development and compiled paths, preserving Auth checks. Initial frontend smoke401 expectation was incorrect for unconfigured BFF503; raw HTML also carries embedded not-found templates, so actual rendered DOM was verified.

## Proposals
Distinct completed-head review and actual Draft/Ready CI, then separate owner merge decision. No production/hosted assurance or successor implementation approval.

## Tests
81Library/runtime (67existing+14new),55MFA,23preflight PASS; typechecks/builds PASS. Final compiled14tests PASS with clean compilation. Actual main.ts tsx-watch and compiled loopback smoke health200/books401/unconfigured synthetic bearer503; cleanup only temporary owned processes. Synthetic verified-token GET/POST success and sanitized DB500 exercised using mocked SDK objects in actual Nest HTTP tests; no hosted calls.

Full local governance at18174d2 exit1 after288current tests (283PASS,5UTF8 decode errors); raw output preserved in governance-initial-failed.txt. Corrected newly introduced CP1252 em dashes in CURRENT-STATE/report to UTF8. Affected8entrypoint+16design tests PASS; metadata/readiness/traceability PASS. Full corrected governance and139archived fixtures still require actual final CI at this bundle cut; do not relabel local failed run PASS. Tests with unchanged runtime inputs reuse authentic earlier evidence explicitly. Exact-head review/CI evidence appended to PR after final SHA exists.

## Artifacts
Task0067/CP0067/EB0067, scoped source/provenance manifest, report and raw before/after evidence. Historical Task65/66 and older records unchanged. Scratch packs0002/0003, temporary compiled files, generated Next AGENTS/next-env/cache and .submission are excluded. Process/log checkpoint retained locally.

## Risks
No AuthService/guard policy, enrollment, backend MFA enforcement, SQL/grants/dependency/CI changes. Tests are injected synthetic or credential-free local checks, not hosted tables/Auth/RLS/session acceptance. Unconfigured servers cannot sign in; owner environment files remain in original checkout. R01-R08 NOT_RUN; N12/historical independent EPERM BLOCKED; PRINCIPAL/SESSION and other pending gates unchanged. Issue108OPEN; old remediation delegationEXPIRED. Real configured application/hosted persistence, MFA enrollment or private data require separate scope. No merge authorized.

## Reviewer disposition
Pending distinct completed-head source review and actual final-head CI. owner_disposition pending; not self-approved. Any blocked independent runtime check will remain BLOCKED.
