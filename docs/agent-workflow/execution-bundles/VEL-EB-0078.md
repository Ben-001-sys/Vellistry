---
id: VEL-EB-0078
title: Compatible PostgreSQL16 recovery toolchain
type: execution-bundle
status: proposed-for-review
created_at: '2026-11-10'
version: 0.1.0
task_id: VEL-TASK-0078
context_pack_id: VEL-CP-0078
base_commit: 845f2ba87199de1c19d745c243e498f424488c2a
agent:
  name: Codex
  model: Codex runtime model not independently reported
  runner: Windows isolated CI-only Task0078 worktree
  role: primary bounded implementer
sources:
- docs/agent-workflow/inputs/VEL-TASK-0078/OWNER-SCOPE.md
- docs/agent-workflow/inputs/VEL-TASK-0078/CONTRACT.md
- docs/agent-workflow/inputs/VEL-TASK-0078/FAILURE-SOURCE.md
evidence:
- docs/reports/VEL-PG16-RECOVERY-CI-0078.md
- docs/reports/evidence/VEL-TASK-0078/summary.json
review:
  status: pending
  approved_by: null
  evidence: null
implementation_source_commit: a81683b9130a9fa937a01565c97f47468d4dcd7a
execution:
  status: completed
  executor: Codex
  model: Codex runtime model not independently reported
  tests:
  - command: python -m unittest discover -s tests -p test_ci_policy.py -v
    source_commit: a81683b9130a9fa937a01565c97f47468d4dcd7a
    status: PASS
    exit_code: 0
    evidence: docs/reports/evidence/VEL-TASK-0078/policy78-final.txt
  - command: python .submission/audit78.py
    source_commit: a81683b9130a9fa937a01565c97f47468d4dcd7a
    status: PASS
    exit_code: 0
    evidence: docs/reports/evidence/VEL-TASK-0078/audit78.json
  - command: python scripts/check_knowledge_metadata.py
    source_commit: a81683b9130a9fa937a01565c97f47468d4dcd7a
    status: PASS
    exit_code: 0
    evidence: docs/reports/evidence/VEL-TASK-0078/metadata78.txt
  - command: python scripts/check_implementation_readiness.py
    source_commit: a81683b9130a9fa937a01565c97f47468d4dcd7a
    status: PASS
    exit_code: 0
    evidence: docs/reports/evidence/VEL-TASK-0078/readiness78.txt
  - command: python scripts/spec_traceability.py validate
    source_commit: a81683b9130a9fa937a01565c97f47468d4dcd7a
    status: PASS
    exit_code: 0
    evidence: docs/reports/evidence/VEL-TASK-0078/trace78.txt
---

# Recovery CI repair

## Work performed
FACT: owner separately authorized this two-operative-path CI repair, relay6762155945 inIssue108. Currentmainad5e723 verified; unusedTask0078, isolatedbranchcodex/vel-pg16-recovery-ci. Initial Task/input80d4a0b preserved; source845f2ba split context before validated committed immutableCP8e0961b. Operative sourcea81683b comes after pack. No Task0077/CP0077/evidence mutation or cherry-pick; PR137 remains separate Draft.

Only ci.yml recovery job and tests/test_ci_policy.py changed. Recovery runnerubuntu-24.04; existing postgres16 service and synthetic environment unchanged. Installpostgresql-client-16; prepend /usr/lib/postgresql/16/bin viaGITHUB_PATH. New unconditional verification requires actual psql/pg_dump/pg_restore resolve exactly to that directory and reportmajor16; queries only existing disposable service SHOWserver_version_num and requiresmajor16. Errors/unavailable/mismatch fail closed. Structured non-secret client paths/versions and server version printed before the original12test command. No suppression/filtering of restore SQL/errors, no test removal or policy weakening.

## Facts and evidence
Actual prior Ready42777271966 failed recovery11/12 with1ERROR, pg_restore exit1; server16.15 rejected SETtransaction_timeout=0. Ubuntu26 installed postgresql-client18+ meta package; exact binary --version was not logged. Recovery code was unchanged in Task0077. Root-cause interpretation is incompatible newer tooling, not a documentation regression; real failure retained. Public Ubuntu24.04 package availability verified10November; actual runtime remains required. Links/source hashes in pinned inputs.

58existing+new policy tests PASS at exactsourcea81683b (53prior+5new functions,53negative matrix scenarios). Static and runtime injected negatives cover runner/service/package/path/unversioned/missing/incorrect client/server, guard/step omission/condition/masking/order/env/shell/cwd and unavailable subprocess. Injected guard responses are synthetic; they do not claim actual binaries/database acceptance. Audit confirms all12original recovery test bodies, all53oldpolicy bodies, allother jobs and top-level triggers/permissions/concurrency identical. App/SQL/dependencies/protected evaluator/loader/gate untouched.

## Interpretations
Explicit binary selection is required in addition to installing major16 because a runner may contain newer clients and a generic wrapper. Major16 matching avoids newer dump commands against older server; original restore assertion still must pass. Runtime evidence and independent review/CI are required; public package availability and mocked outputs are insufficient. No malicious-contributor-proof enforcement claim; owner reviews control changes under standing governance.

## Proposals
Owner separately reviews/merges this repair only after exact-head CI/review pass. No merge authority. Task0077/new-main reconciliation is a later governed owner action, not automatic branch mutation or pack rewrite. No hosted or production Auth/security decision selected.

## Tests
Local exactsource58policy tests, source/job/test integrity audit, metadata/readiness/traceability PASS exit0. Actual full governance, twelve real CAS/restore, mandatoryChromium41, app/security/build/check/PG32+16+8HTTP/restart and final gate await actual freshGitHubCI. Original app sources/test/lock blobs unchanged, so unrelated local application suites are not repeated; mandatory actualCI must execute them. Draft/full/Ready outcomes and real client/server versions will be appended to PR ledger after final head exists.

## Artifacts
Task/CP/EB0078, source inputs/failed-run excerpt/public references, report, local logs/audit/summary and PR manifest. No real credentials/tokens/private data. Existing disposable CI credentials/fixtures stay within the approved isolated runner. Source version guard never emits DSN/password or raw database error contents.

## Risks
Initial CP oversize generation failure and absent-pack validation remain historical FAIL; no pack/code existed then. Original Task0077 Ready recoveryFAIL remains FAIL. No direct local Linux/PG16 runtime acceptance performed; actual CI required. Prior localChromium/Docker and independentEPERM limitations retained as historical BLOCKED, not reclassified. Legacyprivileges SKIPPED, R01-R08 NOT_RUN, N12 BLOCKED. Production PRINCIPAL/SESSION/GATEWAY/PACKAGING/RECONCILIATION/TRANSPORT/hosted gates unchanged. Issues108/131 OPEN; remediation delegation EXPIRED.

## Reviewer disposition
Owner pending. Distinct final-head source review and actual Draft/ReadyCI required. No automatic merge. Final exactSHA/tree/versions/source/CI/results appended externally to avoid self-referential records; this EB reports only actually completed local checks and pending real runtime explicitly.
