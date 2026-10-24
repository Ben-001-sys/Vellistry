---
id: VEL-EB-0052
title: Actual bounded workspace persistence experiment on disposable PostgreSQL17
type: execution-bundle
status: proposed-for-review
created_at: '2026-10-24'
version: 0.1.0
task_id: VEL-TASK-0052
context_pack_id: VEL-CP-0052
base_commit: b98d2d0b0bed68a7cc0a65f6ed639def3540170e
agent:
  name: Codex
  model: Codex runtime model not independently reported
  runner: Codex desktop Windows isolated worktree; owned loopback Docker PG17
  role: primary bounded implementation executor
sources:
- PROJECT-CONSTITUTION.md
- AGENTS.md
- CURRENT-STATE.md
- docs/agent-workflow/PR-COMPLIANCE.md
- docs/agent-workflow/authorizations/VEL-TASK-0052.yaml
- docs/contracts/VEL-IMP002-PERSISTENCE-CONTRACT.md
- docs/contracts/VEL-IMP002-PERSISTENCE-CASES.json
- docs/agent-workflow/proposals/VEL-IMP002-PERSISTENCE-EXECUTION-PACKET.json
- supabase/migrations/20261009000000_initial_author_books.sql
- supabase/migrations/20261009010000_restrict_accepted_manuscript_dml.sql
- apps/api/src/modules/auth/supabase-auth.service.ts
- apps/api/src/modules/books/books.service.ts
- apps/api/package.json
- apps/api/tsconfig.json
- docs/agent-workflow/inputs/VEL-TASK-0052/OWNER-SCOPE.md
- docs/agent-workflow/inputs/VEL-TASK-0052/BOUNDARY.md
evidence:
- docs/reports/VEL-IMP002-DISPOSABLE-PERSISTENCE-0052.md
- docs/reports/evidence/VEL-TASK-0052/acceptance-results.json
- docs/reports/evidence/VEL-TASK-0052/tested-source-equivalence.json
- docs/reports/evidence/VEL-TASK-0052/source-preservation.json
review:
  status: pending
  approved_by: null
  evidence: null
owner_disposition: pending
implementation_source_commit: 581f8be7c9d1b83835d2690eae477e3350812506
execution:
  status: completed
  executor: Codex
  model: Codex runtime model not independently reported
  tests:
  - command: corepack.cmd pnpm install --frozen-lockfile
    source_commit: 6967ea31b418caf75defaf57a56b1d78eabdb640
    exit_code: 0
    seconds: 19.4
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0052/install.txt
  - command: corepack.cmd pnpm --filter @vellistry/api exec tsx --test src/modules/workspace/workspace-contract.spec.ts
    source_commit: c0f9634f63d9b37a54f7432aa477023ca29d8f2d
    exit_code: 0
    status: PASS
    seconds: 1.0
    evidence: docs/reports/evidence/VEL-TASK-0052/source-unit.txt
  - command: corepack.cmd pnpm test:workspace-contract
    source_commit: c0f9634f63d9b37a54f7432aa477023ca29d8f2d
    exit_code: 0
    status: PASS
    seconds: 1.91
    evidence: docs/reports/evidence/VEL-TASK-0052/source-workspace.txt
  - command: corepack.cmd pnpm test:library-isolation
    source_commit: c0f9634f63d9b37a54f7432aa477023ca29d8f2d
    exit_code: 0
    status: PASS
    seconds: 2.93
    evidence: docs/reports/evidence/VEL-TASK-0052/source-library.txt
  - command: corepack.cmd pnpm test:hosted-preflight
    source_commit: c0f9634f63d9b37a54f7432aa477023ca29d8f2d
    exit_code: 0
    status: PASS
    seconds: 2.08
    evidence: docs/reports/evidence/VEL-TASK-0052/source-preflight.txt
  - command: corepack.cmd pnpm build
    source_commit: c0f9634f63d9b37a54f7432aa477023ca29d8f2d
    exit_code: 0
    status: PASS
    seconds: 31.25
    evidence: docs/reports/evidence/VEL-TASK-0052/source-build.txt
  - command: corepack.cmd pnpm check
    source_commit: c0f9634f63d9b37a54f7432aa477023ca29d8f2d
    exit_code: 0
    status: PASS
    seconds: 10.12
    evidence: docs/reports/evidence/VEL-TASK-0052/source-check.txt
  - command: python scripts/check_knowledge_metadata.py
    source_commit: 581f8be7c9d1b83835d2690eae477e3350812506
    exit_code: 0
    status: PASS
    seconds: 0.21
    evidence: docs/reports/evidence/VEL-TASK-0052/final-metadata.txt
  - command: python scripts/check_implementation_readiness.py
    source_commit: 581f8be7c9d1b83835d2690eae477e3350812506
    exit_code: 0
    status: PASS
    seconds: 0.14
    evidence: docs/reports/evidence/VEL-TASK-0052/final-readiness.txt
  - command: python scripts/spec_traceability.py validate
    source_commit: 581f8be7c9d1b83835d2690eae477e3350812506
    exit_code: 0
    status: PASS
    seconds: 0.14
    evidence: docs/reports/evidence/VEL-TASK-0052/final-traceability.txt
  - command: python -m unittest discover -s tests -p test_governance_entrypoints.py
      -v
    source_commit: 581f8be7c9d1b83835d2690eae477e3350812506
    exit_code: 0
    status: PASS
    seconds: 0.24
    evidence: docs/reports/evidence/VEL-TASK-0052/final-entrypoints.txt
  - command: python scripts/agent_workflow.py pack docs/agent-workflow/tasks/VEL-TASK-0002.yaml
    source_commit: 581f8be7c9d1b83835d2690eae477e3350812506
    exit_code: 0
    status: PASS
    seconds: 0.96
    evidence: docs/reports/evidence/VEL-TASK-0052/scratch-pack.txt
  - command: python -m unittest discover -s tests -p test_stage4_independent_packet.py
      -v
    source_commit: 581f8be7c9d1b83835d2690eae477e3350812506
    exit_code: 0
    status: PASS
    seconds: 8.01
    evidence: docs/reports/evidence/VEL-TASK-0052/final-exporter.txt
  - command: python tests/workspace/persistence/run_pg17.py --disposable --cases docs/contracts/VEL-IMP002-PERSISTENCE-CASES.json
    source_commit: 3b557ec1a00feeb91e640d0611adf40360a4b506
    exit_code: 0
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0052/3f1b78dd3ff34440800df8ac43933b1a-runtime.json
    test_count: 32
historical_failures:
- evidence: docs/reports/evidence/VEL-TASK-0052/governance.txt
  exit_code: 1
  cause: HEAD advanced during generated exporter fixture validation;6affected tests
    rerun PASS at frozen581f8be; full final CI required
- evidence: docs/reports/evidence/VEL-TASK-0052/8253a318d216482fb6b922b5d2d73d9d-runtime.json
  exit_code: 1
  cause: Before-fix global default EXECUTE and nonfinite expiry regressions; corrected
    and32PASS later
- evidence: docs/reports/evidence/VEL-TASK-0052/0ad219bacba948898e85ca5049f3cd41-runtime.json
  exit_code: 1
  cause: Initial harness cache/restart defects
- evidence: docs/reports/evidence/VEL-TASK-0052/9fae723ee6e5455680e2aa34a9e2a9aa-runtime.json
  exit_code: 1
  cause: Invalid TEMP REFERENCES probe corrected
---

# Bounded experimental implementation

## Work performed
Owner-approved PR112/114 merged, exact trees and post-main success verified; scoped SQL record is in reviewed base. Unique Task0052 and immutable CP0052 committed/validated before code. Added unregistered Nest service, principal/port/validation, test-only driver, four exact local SQL fixtures and32-case executable acceptance. No production route/Auth/CI/dependency/shipping migration changes.

## Facts and evidence
Actual27original+5extension cases PASS on owned PostgreSQL17.11, pinned digest eee6c6e1b0894fa4fe0075eb054af9fd1cf39a35321c2d4110626cfe506411fb. Final run3f1b78dd3ff34440800df8ac43933b1a at3b557ec1a00feeb91e640d0611adf40360a4b506. Genuine two-client locks/CAS/idempotency,6fault rollbacks,55P03/40P01/backend termination, child exit79 after COMMIT, restart/independent restore, Unicode/UTF8, post-response identity and owned cleanup recorded. Applied operative migration hashes match original packet. Task49/CP49/contract/cases/evidence unchanged, historical NOT_RUN statuses preserved. Actual source/hash matrices and raw results in linked report/evidence.

## Interpretations
This verifies only the local experimental server capability. Injected principals/session rows are not Supabase logout/JWT proof. Trusted SQL credential compromise is outside this confinement claim. Pending service state is process-local, not a shipping durable browser draft/transport adapter. Controlled stale snapshot injection is not hosted replica acceptance. Local32DB tests are not new automatic CI coverage.

## Proposals
Owner reviews final implementation head and CI, then separately decides feature merge. Later real principal/session binding, production packaging/routes/client adapter, secure credential provisioning and hosted metadata/migration/RLS/JWT acceptance need separate scope/approval. No broad gates or remediation delegation reopened.

## Tests
Frozen install PASS;6new unit,41workspace,67Library,23preflight, builds/typechecks PASS on unchanged application/dependency assets at c0f9634. Final DB assets unchanged from tested3b557ec; current-state/report-only source581f8be, equivalence verified. Metadata/readiness/traceability and8entrypoint checks PASS;6exporter cases PASS with HEAD frozen. Historical full local governance attempt exited1 because HEAD advanced during scratch CP validation; raw failure preserved, never labelled full local PASS. Final actual CI must run all current/archived governance. Initial sandbox Corepack cache denial resolved using required execution permission without dependency changes. Before-fix SQL and harness failures retained separately.

## Artifacts
Task/CP/EB0052, owner/boundary inputs, exact12code/test/SQL assets, current state/report, full acceptance matrix, all failed/successful runtime JSONs with source/SQL/image hashes and cleanup, source-preservation/equivalence proof, tests/build/type outputs, manifest with base migration approval. Scratch CP0002/0003/caches/export files excluded.

## Risks
Default global PUBLIC EXECUTE and nonfinite session expiry defects reproduced by new tests before SQL correction; later32PASS. Earlier Windows implicit decoding distorted JS Unicode literals; final UTF8 reads and explicit escapes prove actual astral/UTF8 cases; earlier Unicode runs not substituted. Narrow UPDATE(id) lock privileges remain real confined experimental capabilities, never approved production grants. No third migration adoption, hosted access/real credential retrieval/users/JWT/private manuscripts/paid/deploy/settings changes. Issue108 OPEN, remediation delegation expired; feature merge owner-controlled.

## Reviewer disposition
Pending distinct final completed-head advisory review, actual ready CI and separate ordinary owner feature merge. Final exact SHA/review/CI are recorded externally after commit creation. No agent self-approval or fabricated acceptance.
