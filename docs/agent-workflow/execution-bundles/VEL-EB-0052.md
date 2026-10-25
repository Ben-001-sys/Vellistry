---
id: VEL-EB-0052
title: Actual bounded workspace persistence experiment on disposable PostgreSQL17
type: execution-bundle
status: proposed-for-review
created_at: '2026-10-24'
version: 0.1.2
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
implementation_source_commit: 5887db7525b2f37619d562345a1970b6ca8304ac
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
  - command: corepack.cmd pnpm --filter @vellistry/api exec tsx --test src/modules/workspace/workspace-contract.spec.ts
    source_commit: ee475585d09575ea4126e2c1cb6a49a57778327b
    exit_code: 0
    status: PASS
    seconds: 3.8
    evidence: docs/reports/evidence/VEL-TASK-0052/review-unit.txt
  - command: corepack.cmd pnpm build
    source_commit: ee475585d09575ea4126e2c1cb6a49a57778327b
    exit_code: 0
    status: PASS
    seconds: 36.91
    evidence: docs/reports/evidence/VEL-TASK-0052/review-build.txt
  - command: corepack.cmd pnpm check
    source_commit: ee475585d09575ea4126e2c1cb6a49a57778327b
    exit_code: 0
    status: PASS
    seconds: 19.18
    evidence: docs/reports/evidence/VEL-TASK-0052/review-check.txt
  - command: corepack.cmd pnpm --filter @vellistry/api exec tsx --test src/modules/workspace/workspace-contract.spec.ts
    source_commit: ea83e7d6bbaa671cbe7f9b2b13d17cc2b78a645d
    exit_code: 0
    status: PASS
    seconds: 5.72
    evidence: docs/reports/evidence/VEL-TASK-0052/corrected-unit.txt
  - command: corepack.cmd pnpm build
    source_commit: ea83e7d6bbaa671cbe7f9b2b13d17cc2b78a645d
    exit_code: 0
    status: PASS
    seconds: 24.93
    evidence: docs/reports/evidence/VEL-TASK-0052/corrected-build.txt
  - command: corepack.cmd pnpm check
    source_commit: ea83e7d6bbaa671cbe7f9b2b13d17cc2b78a645d
    exit_code: 0
    status: PASS
    seconds: 9.72
    evidence: docs/reports/evidence/VEL-TASK-0052/corrected-check.txt
  - command: corepack.cmd pnpm --filter @vellistry/api exec tsx --test src/modules/workspace/workspace-contract.spec.ts
    source_commit: 5f8e0254c8664dafeb6d74b05e1465d848d14281
    exit_code: 0
    status: PASS
    seconds: 3.5
    evidence: docs/reports/evidence/VEL-TASK-0052/final-corrected-unit.txt
  - command: corepack.cmd pnpm check
    source_commit: 5f8e0254c8664dafeb6d74b05e1465d848d14281
    exit_code: 0
    status: PASS
    seconds: 10.99
    evidence: docs/reports/evidence/VEL-TASK-0052/final-corrected-types.txt
  - command: python tests/workspace/persistence/run_pg17.py --disposable --cases docs/contracts/VEL-IMP002-PERSISTENCE-CASES.json
    source_commit: 5f8e0254c8664dafeb6d74b05e1465d848d14281
    exit_code: 0
    status: PASS
    test_count: 32
    evidence: docs/reports/evidence/VEL-TASK-0052/6cf33351aa624104ba28def20b034560-runtime.json
  - command: corepack.cmd pnpm --filter @vellistry/api exec tsx --test src/modules/workspace/workspace-contract.spec.ts
    source_commit: 5887db7525b2f37619d562345a1970b6ca8304ac
    exit_code: 0
    status: PASS
    seconds: 7.4
    evidence: docs/reports/evidence/VEL-TASK-0052/receipt-fixed-unit.txt
  - command: corepack.cmd pnpm build
    source_commit: 5887db7525b2f37619d562345a1970b6ca8304ac
    exit_code: 0
    status: PASS
    seconds: 28.84
    evidence: docs/reports/evidence/VEL-TASK-0052/receipt-fixed-build.txt
  - command: corepack.cmd pnpm check
    source_commit: 5887db7525b2f37619d562345a1970b6ca8304ac
    exit_code: 0
    status: PASS
    seconds: 11.01
    evidence: docs/reports/evidence/VEL-TASK-0052/receipt-fixed-types.txt
  - command: python tests/workspace/persistence/run_pg17.py --disposable --cases docs/contracts/VEL-IMP002-PERSISTENCE-CASES.json
    source_commit: 5887db7525b2f37619d562345a1970b6ca8304ac
    exit_code: 0
    status: PASS
    test_count: 32
    evidence: docs/reports/evidence/VEL-TASK-0052/2d2b081ca9d64a07850f7751f8400774-runtime.json
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
- evidence: docs/reports/evidence/VEL-TASK-0052/review-negative-before-fix.txt
  exit_code: 1
  cause: Three independent P2 regressions reproduced before correction
- evidence: docs/reports/evidence/VEL-TASK-0052/startup-cleanup-negative-before.txt
  exit_code: 1
  cause: Rejected context still reached daemon cleanup, proven with mocks only
- evidence: docs/reports/evidence/VEL-TASK-0052/e64428d940254df7a32652789e607d36-runtime.json
  exit_code: 1
  cause: Legitimate fixture operations denied after Docker restart; clock diagnostic
    run9d9a32 confirms host24-28msahead; strictpolicyunchanged
- evidence: docs/reports/evidence/VEL-TASK-0052/d7c24cefa8814e129a2d979a358ec716-runtime.json
  exit_code: 1
  cause: All32 BLOCKED at temporary init-server readiness; fixed by final TCP readiness
- command: corepack.cmd pnpm --filter @vellistry/api exec tsx --test src/modules/workspace/workspace-contract.spec.ts
  source_commit: b70222dfbb89ec764cabe23dd5e8f4cae8f7f664
  exit_code: 1
  evidence: docs/reports/evidence/VEL-TASK-0052/receipt-negative-before-fix.txt
  cause: Two additional independent P2 receipt regressions reproduced10PASS2FAIL before
    correction
updated_at: '2026-10-25'
---

# Bounded experimental implementation

## Work performed
Owner-approved PR112/114 merged, exact trees and post-main success verified; scoped SQL record is in reviewed base. Unique Task0052 and immutable CP0052 committed/validated before code. Added unregistered Nest service, principal/port/validation, test-only driver, four exact local SQL fixtures and32-case executable acceptance. No production route/Auth/CI/dependency/shipping migration changes.

## Facts and evidence
Initial pre-review checkpoint (historical):27original+5extension cases PASS on owned PostgreSQL17.11, pinned digest eee6c6e1b0894fa4fe0075eb054af9fd1cf39a35321c2d4110626cfe506411fb. Initial run3f1b78dd3ff34440800df8ac43933b1a at3b557ec1a00feeb91e640d0611adf40360a4b506. Genuine two-client locks/CAS/idempotency,6fault rollbacks,55P03/40P01/backend termination, child exit79 after COMMIT, restart/independent restore, Unicode/UTF8, post-response identity and owned cleanup recorded. Applied operative migration hashes match original packet. Task49/CP49/contract/cases/evidence unchanged, historical NOT_RUN statuses preserved. Actual source/hash matrices and raw results in linked report/evidence.

## Interpretations
This verifies only the local experimental server capability. Injected principals/session rows are not Supabase logout/JWT proof. Trusted SQL credential compromise is outside this confinement claim. Pending service state is process-local, not a shipping durable browser draft/transport adapter. Controlled stale snapshot injection is not hosted replica acceptance. Local32DB tests are not new automatic CI coverage.

## Proposals
Owner reviews final implementation head and CI, then separately decides feature merge. Later real principal/session binding, production packaging/routes/client adapter, secure credential provisioning and hosted metadata/migration/RLS/JWT acceptance need separate scope/approval. No broad gates or remediation delegation reopened.

## Tests
Initial pre-review checkpoint (historical): frozen install PASS;6new unit,41workspace,67Library,23preflight, builds/typechecks PASS on unchanged application/dependency assets at c0f9634. Final DB assets unchanged from tested3b557ec; current-state/report-only source581f8be, equivalence verified. Metadata/readiness/traceability and8entrypoint checks PASS;6exporter cases PASS with HEAD frozen. Historical full local governance attempt exited1 because HEAD advanced during scratch CP validation; raw failure preserved, never labelled full local PASS. Final actual CI must run all current/archived governance. Initial sandbox Corepack cache denial resolved using required execution permission without dependency changes. Before-fix SQL and harness failures retained separately.

## Artifacts
Task/CP/EB0052, owner/boundary inputs, exact12code/test/SQL assets, current state/report, full acceptance matrix, all failed/successful runtime JSONs with source/SQL/image hashes and cleanup, source-preservation/equivalence proof, tests/build/type outputs, manifest with base migration approval. Scratch CP0002/0003/caches/export files excluded.

## Risks
Default global PUBLIC EXECUTE and nonfinite session expiry defects reproduced by new tests before SQL correction; later32PASS. Earlier Windows implicit decoding distorted JS Unicode literals; final UTF8 reads and explicit escapes prove actual astral/UTF8 cases; earlier Unicode runs not substituted. Narrow UPDATE(id) lock privileges remain real confined experimental capabilities, never approved production grants. No third migration adoption, hosted access/real credential retrieval/users/JWT/private manuscripts/paid/deploy/settings changes. Issue108 OPEN, remediation delegation expired; feature merge owner-controlled.

## Reviewer disposition
Pending distinct final completed-head advisory review, actual ready CI and separate ordinary owner feature merge. Final exact SHA/review/CI are recorded externally after commit creation. No agent self-approval or fabricated acceptance.

## Independent correction evidence, 2026-10-25

# Bounded independent-review correction — 2026-10-25

A fresh trusted read-only review at08cbe453451844a774b7476bbe8eed181b43ce62
reported three P2 defects. Its original output/metadata is preserved in evidence.
New regressions at9fcb3a4 demonstrated6PASS/3FAIL before correction: delayed rejection
could delete a newer unknown operation lock; observed reads did not advance the
minimum version; some readiness/cleanup Docker subprocesses inherited a different
environment. Fixee47558 checks pending-object identity, advances authorized read
floors, and uses/pins the validated local environment for every subprocess. The
actual database rejection/readback cases now also exercise those races.

A mocked-only negative test then proved rejected local-context validation could
still reach cleanup daemon calls (9PASS/1FAIL at481df0b). The startup guard now makes
no daemon calls if validation fails. Its initial mock construction error is separately
preserved, not mistaken for that demonstrated failure. No remote daemon was contacted.

After the interrupted session Docker restarted with host time24–28ms ahead of the
VM. Stricter legitimate-operation42501 failures are retained in runse64428/9d9a32,
with measured clocks. Synthetic principals now explicitly represent verification
completed1second before dispatch; expired-token fixtures use a clear1second-old
expiry. Strict future/stale/session checks in service/SQL were NOT relaxed. This is
fixture timing, not an approved production clock-tolerance policy. A subsequent
32PASS run543c05 verified the corrections with conflicting unreachable-loopback
Docker settings. Run d7c24c was BLOCKED before any case because pg_isready observed
the official image's temporary init socket before shutdown. Readiness now waits for
the final127.0.0.1 TCP listener; its regression guard is included in the focused suite.

Final corrected acceptance:32PASS at the source/run in the current matrix, including
two real post-reconciliation races and identical owned cleanup with deliberately
conflicting local-only inherited Docker settings. Final focused tests:10PASS. Renewed
builds at ea83e7d and final typechecks pass; shipping application files/dependencies
are byte-identical to that build. The41workspace/67Library/23preflight source assets
are unchanged from their recorded successful run; final ready CI reruns applicable
checks. All before-fix failures and all BLOCKED attempts remain in raw evidence.
Final exact-head review/CI references will be in PR115's external ledger. No immutable
pack, original Task49 evidence, production routes/Auth/dependencies/CI or hosted
scope changed. Separate owner feature merge remains required.

## Renewed review correction, 2026-10-25

## Second independent exact-head review and correction

A new trusted read-only review at1cfa08fcfb414534e7d81f5e6513889cfa039c30 independently
reproduced two remaining P2 issues: array-valued outcome/reason could pass String
coercion and release an unknown lock; rejected terminal receipts did not raise the
observed-version floor. Original review output/metadata is preserved. Atb70222d,
new regressions demonstrate10PASS/2FAIL before correction. Fix5887db7 requires real
string enums and updates the floor for every valid terminal receipt, while preserving
the pending-object identity guard. The actual database rejection case now also
corrupts a persisted rejection's reason and checks apply/lookup floor enforcement.

Current evidence:12focused tests PASS, fresh API/web builds/typechecks PASS, and
32genuine PostgreSQL17 cases PASS at the current matrix source. Run2d2b081ca9d64a07850f7751f8400774
verifies the new subcases plus all original recovery/privilege/concurrency checks,
with conflicting local-only Docker environment values and verified owned cleanup.
All12current CPU tests are local execution evidence, not newly added automatic CI.
Final exact-head source review and actual ready-state CI remain required and are
recorded in PR115's ledger after final SHA publication. No new scope/amended pack,
Auth/shipping SQL/dependency/workflow changes, hosted activity or feature merge.
