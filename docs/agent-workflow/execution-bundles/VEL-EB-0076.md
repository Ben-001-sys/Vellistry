---
id: VEL-EB-0076
title: IMP003E mandatory Chromium CI
type: execution-bundle
status: proposed-for-review
created_at: '2026-11-02'
version: 0.1.0
task_id: VEL-TASK-0076
context_pack_id: VEL-CP-0076
base_commit: 0750adea43d765b4718e496a31f08711f8483c46
agent:
  name: Codex
  model: Codex runtime model not independently reported
  runner: Windows isolated worktree and fresh GitHub-hosted ubuntu-latest full execution
  role: primary bounded implementer
sources:
- docs/agent-workflow/inputs/VEL-TASK-0076/OWNER-SCOPE.md
- docs/agent-workflow/inputs/VEL-TASK-0076/CONTRACT.md
evidence:
- docs/reports/VEL-IMP003E-CHROMIUM-CI-0076.md
- docs/reports/evidence/VEL-TASK-0076/local-summary.json
review:
  status: pending
  approved_by: null
  evidence: null
implementation_source_commit: e8a3b39b3e61b3e37e111c33c45ffd701d0d002c
execution:
  status: completed
  executor: Codex
  model: Codex runtime model not independently reported
  tests:
  - name: frozen
    command: corepack.cmd pnpm install --frozen-lockfile
    source_commit: 54c727b6bf99e1f9821275c02fa5faf1e385151f
    exit_code: 0
    seconds: 3.3
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0076/frozen.txt
  - name: policy
    command: python -m unittest discover -s tests -p test_ci_policy.py -v
    source_commit: 54c727b6bf99e1f9821275c02fa5faf1e385151f
    exit_code: 0
    seconds: 35.62
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0076/policy.txt
  - name: workspace
    command: corepack.cmd pnpm test:workspace-contract
    source_commit: 54c727b6bf99e1f9821275c02fa5faf1e385151f
    exit_code: 0
    seconds: 18.18
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0076/workspace.txt
  - name: library
    command: corepack.cmd pnpm test:library-isolation
    source_commit: 54c727b6bf99e1f9821275c02fa5faf1e385151f
    exit_code: 0
    seconds: 9.48
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0076/library.txt
  - name: mfa
    command: corepack.cmd pnpm test:auth-mfa
    source_commit: 54c727b6bf99e1f9821275c02fa5faf1e385151f
    exit_code: 0
    seconds: 3.45
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0076/mfa.txt
  - name: preflight
    command: corepack.cmd pnpm test:hosted-preflight
    source_commit: 54c727b6bf99e1f9821275c02fa5faf1e385151f
    exit_code: 0
    seconds: 3.37
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0076/preflight.txt
  - name: principal
    command: corepack.cmd pnpm --filter @vellistry/api exec tsx --test src/modules/workspace/workspace-principal-adapter.spec.ts
    source_commit: 54c727b6bf99e1f9821275c02fa5faf1e385151f
    exit_code: 0
    seconds: 2.14
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0076/principal.txt
  - name: units
    command: corepack.cmd pnpm --filter @vellistry/api exec tsx --test src/modules/workspace/workspace-contract.spec.ts
    source_commit: 54c727b6bf99e1f9821275c02fa5faf1e385151f
    exit_code: 0
    seconds: 2.19
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0076/units.txt
  - name: check
    command: corepack.cmd pnpm check
    source_commit: 54c727b6bf99e1f9821275c02fa5faf1e385151f
    exit_code: 0
    seconds: 15.27
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0076/check.txt
  - name: build
    command: corepack.cmd pnpm build
    source_commit: 54c727b6bf99e1f9821275c02fa5faf1e385151f
    exit_code: 0
    seconds: 36.55
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0076/build.txt
  - name: policy-final
    command: python -m unittest discover -s tests -p test_ci_policy.py -v
    source_commit: e8a3b39b3e61b3e37e111c33c45ffd701d0d002c
    exit_code: 0
    status: PASS
    tests: 53
    evidence: docs/reports/evidence/VEL-TASK-0076/policy-final.txt
  - command: Existing Vellistry CI full dispatch at exact6e1f5f5 (frozen install,
      native Chromium41, governance443, application/security, PG/recovery, build/check,
      final gate)
    source_commit: 6e1f5f5aa27a91e95e26af7053e85f710a70b564
    status: PASS
    exit_code: 0
    evidence: docs/reports/evidence/VEL-TASK-0076/fresh-full-summary.json
---

# IMP003E execution evidence

## Work performed
FACT: Task0076 governing inputs0750ade; complete pack/source/render validation before immutable CP commit1a3220c. Exact source is recorded above. One exact development dependency playwright1.64.0, transitive playwright-core1.64.0, matching Chromium1248 /156.0.8078.4. Frozen pnpm10.18.0. Only six approved operative paths changed. No application, SQL, Auth, protected policy/evaluator/loader or production route changes.

Existing application job now installs matching native Chromium/Linux dependencies, executes all41 unchanged browser case bodies, validates current-source complete evidence and uploads only two named synthetic files for7days. Missing/duplicate/failed/filtered cases, source mismatch, incorrect pinned runtime/build, missing evidence and unsuccessful cleanup fail. No environment-based skip, softened outcome or alternate browser runtime. Source inventory is pinned to historical Task0075 JSON hash. Full execution rejects dirty application/browser/dependency inputs. Pure validation mode requires no browser initialization or project dependency import, so governance can exercise negative cases.

## Facts and evidence
Local source-bound results, commands, counts/exits and historical failures are in local-summary.json and logs. Existing application tests ran at54c727b; later changes affect only browser source-binding check and compact current-state text. Application, dependency and unit-test blobs remain identical. All41 case bodies remain byte-identical (hash recorded). 53 CI-policy tests PASS at current implementation source, with46 prior tests and7 new tests (counts corrected by actual discovery; no production browser execution is inferred from schema fixtures).

Initial clean distinct source review found no actionable defect; independent runtime blocked by read-only fixtures/subprocess EPERM. It preceded the final completed evidence head; a distinct review of the completed evidence head was subsequently CLEAN (see completed-head-review.txt). Local Chromium launch is BLOCKED (spawn UNKNOWN), zero cases executed, underlying command exit1 and FAIL result retained. Frozen install/matching browser download succeeded. Docker unavailable: local PG is BLOCKED, no resources created. Fresh Linux full execution41468644234 subsequently PASS, including real native41, complete source/cleanup validation, application/security/PG/recovery/build/check and final gate. Raw synthetic artifacts and source-hash verification are retained.

## Interpretations
New coverage is enforced by tests/test_ci_policy.py discovered by unchanged governance. Trusted-main evaluator/loader and gate policy remain unchanged. This detects the enumerated accidental/static bypasses; owner source review remains required and no claim of malicious-contributor-proof workflow enforcement is made. Native browser results are synthetic application evidence, not hosted security acceptance.

## Proposals
Owner review and separate merge decision only after fresh full execution, final-head source review and Ready CI. No automatic merge or successor scope.

## Tests
Actual local PASS: frozen install;53 policy tests (multiple synthetic negatives per test);101 workspace/editor;81 Library;55 MFA;23 preflight;52 principal;21 persistence units; build and typecheck. Logs preserve actual command/source/exit. Complete local governance is still running and is not counted as final-source PASS. Fresh exact6e1f5f5 GitHub full verification PASS:443governance (304current/139archived), browser41, PostgreSQL32+16+8HTTP/restart and cleanup,12CAS/restore, security, builds/typechecks and final gate. Final Ready CI remains required at the delivered head. Legacy integrated privileges remain SKIPPED unless separately executed. R01-R08 NOT_RUN; N12/historical EPERM BLOCKED.

## Artifacts
Task/CP/EB0076, report and bounded evidence directory. Automatic browser artifact contains only durable-browser-results.json and durable-browser-diagnostics.txt, never profiles/IndexedDB/cookies/credentials. No raw arbitrary browser errors in uploaded diagnostics. The browser profile and loopback sockets/listener are owned and removed; cleanup failure prevents PASS.

## Risks
Current Windows host cannot launch downloaded matching Chromium; independent runtime EPERM and local Docker unavailable. These do not count as acceptance. Prior Task0075 local41 evidence remains historical, not this CI milestone. No hosted or production security, privacy, encryption, eviction/power-loss/cross-device durability assurance. All production gates remain pending; Issues108/131 OPEN and remediation delegation EXPIRED.

## Reviewer disposition
Owner disposition pending. Initial advisory source review clean, runtime BLOCKED. Completed-head6e1f5f5 source review CLEAN; its runtime test attempt had5failures/27errors due read-only temporary fixtures and subprocess EPERM, remains BLOCKED. Original Draft41468645918 governance PASS and expected final gateFAIL (application/recovery/privileges SKIPPED). Full41468644234 PASS. A fresh distinct final-head review and actual Ready CI will be appended after the completed evidence commit. No merge authorization.
