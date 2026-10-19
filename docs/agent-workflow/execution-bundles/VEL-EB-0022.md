---
id: VEL-EB-0022
title: Offline complete Git source/evidence recovery and first workflow metrics
type: execution-bundle
status: proposed-for-review
created_at: '2026-10-19'
version: 0.1.1
task_id: VEL-TASK-0022
context_pack_id: VEL-CP-0022
base_commit: 49207289de2a752042915361f636e379e88ae4c4
agent:
  name: Codex
  model: GPT-6; exact build unavailable
  runner: Codex desktop Windows; new owned disposable clones on same host
  role: recovery-verifier
sources:
- PROJECT-CONSTITUTION.md
- AGENTS.md
- SOURCE-OF-TRUTH.md
- docs/agent-workflow/PR-COMPLIANCE.md
- package.json
- docs/agent-workflow/inputs/VEL-TASK-0022/SOURCE-REFS.json
- docs/agent-workflow/inputs/VEL-TASK-0022/OWNER-SCOPE.md
evidence:
- docs/reports/evidence/VEL-RECOVERY-PROOF/commands.json
- docs/reports/evidence/VEL-RECOVERY-PROOF/recovery-summary.json
- docs/reports/evidence/VEL-RECOVERY-PROOF/dependency-closure.json
- docs/reports/VEL-RECOVERY-PROOF-2026-10-19.md
review:
  status: pending
  approved_by: null
  evidence: null
implementation_source_commit: 30ccb8566d0eeeba93f40e6ce60bb90f5ba96323
execution:
  status: completed
  executor: Codex
  model: GPT-6; exact build unavailable
  tests:
  - command: git bundle verify H:\cursor\cursor\Vellistry\.worktrees\vel-recovery-proof\.recovery-complete.bundle.log
    status: PASS
    exit_code: 0
    duration_seconds: 0.062
    source_commit: fca0d96fd071f1165e3e16658d821a3d36a20293
    report_source_commit: 30ccb8566d0eeeba93f40e6ce60bb90f5ba96323
    evidence: docs/reports/evidence/VEL-RECOVERY-PROOF/complete-bundle-verify.txt
  - command: git clone --branch codex/vel-db-readiness H:\cursor\cursor\Vellistry\.worktrees\vel-recovery-proof\.recovery-complete.bundle.log
      H:\cursor\cursor\Vellistry\.worktrees\vel-recovery-proof\.recovery-complete.log
    status: PASS
    exit_code: 0
    duration_seconds: 0.813
    source_commit: fca0d96fd071f1165e3e16658d821a3d36a20293
    report_source_commit: 30ccb8566d0eeeba93f40e6ce60bb90f5ba96323
    evidence: docs/reports/evidence/VEL-RECOVERY-PROOF/complete-bundle-clone.txt
  - command: git checkout --detach fca0d96fd071f1165e3e16658d821a3d36a20293
    status: PASS
    exit_code: 0
    duration_seconds: 0.156
    source_commit: fca0d96fd071f1165e3e16658d821a3d36a20293
    report_source_commit: 30ccb8566d0eeeba93f40e6ce60bb90f5ba96323
    evidence: docs/reports/evidence/VEL-RECOVERY-PROOF/complete-restore-main.txt
  - command: git fsck --full
    status: PASS
    exit_code: 0
    duration_seconds: 0.266
    source_commit: fca0d96fd071f1165e3e16658d821a3d36a20293
    report_source_commit: 30ccb8566d0eeeba93f40e6ce60bb90f5ba96323
    evidence: docs/reports/evidence/VEL-RECOVERY-PROOF/complete-restored-fsck.txt
  - command: H:\BEN\program files\corepack.CMD pnpm install --frozen-lockfile
    status: PASS
    exit_code: 0
    duration_seconds: 6.625
    source_commit: fca0d96fd071f1165e3e16658d821a3d36a20293
    report_source_commit: 30ccb8566d0eeeba93f40e6ce60bb90f5ba96323
    evidence: docs/reports/evidence/VEL-RECOVERY-PROOF/complete-frozen-install.txt
  - command: C:\Program Files\Python310\python.EXE scripts/check_knowledge_metadata.py
    status: PASS
    exit_code: 0
    duration_seconds: 0.156
    source_commit: fca0d96fd071f1165e3e16658d821a3d36a20293
    report_source_commit: 30ccb8566d0eeeba93f40e6ce60bb90f5ba96323
    evidence: docs/reports/evidence/VEL-RECOVERY-PROOF/complete-metadata.txt
  - command: C:\Program Files\Python310\python.EXE scripts/check_implementation_readiness.py
    status: PASS
    exit_code: 0
    duration_seconds: 0.125
    source_commit: fca0d96fd071f1165e3e16658d821a3d36a20293
    report_source_commit: 30ccb8566d0eeeba93f40e6ce60bb90f5ba96323
    evidence: docs/reports/evidence/VEL-RECOVERY-PROOF/complete-readiness.txt
  - command: C:\Program Files\Python310\python.EXE scripts/spec_traceability.py validate
    status: PASS
    exit_code: 0
    duration_seconds: 0.125
    source_commit: fca0d96fd071f1165e3e16658d821a3d36a20293
    report_source_commit: 30ccb8566d0eeeba93f40e6ce60bb90f5ba96323
    evidence: docs/reports/evidence/VEL-RECOVERY-PROOF/complete-traceability.txt
  - command: C:\Program Files\Python310\python.EXE scripts/agent_workflow.py validate
    status: PASS
    exit_code: 0
    duration_seconds: 24.188
    source_commit: fca0d96fd071f1165e3e16658d821a3d36a20293
    report_source_commit: 30ccb8566d0eeeba93f40e6ce60bb90f5ba96323
    evidence: docs/reports/evidence/VEL-RECOVERY-PROOF/complete-handoff.txt
  - command: C:\Program Files\Python310\python.EXE -m unittest discover -s tests -p
      test_agent_workflow.py -v
    status: PASS
    exit_code: 0
    duration_seconds: 38.609
    source_commit: fca0d96fd071f1165e3e16658d821a3d36a20293
    report_source_commit: 30ccb8566d0eeeba93f40e6ce60bb90f5ba96323
    evidence: docs/reports/evidence/VEL-RECOVERY-PROOF/complete-handoff-tests.txt
  - command: C:\Program Files\Python310\python.EXE -m unittest discover -s tests -p
      test_governance_entrypoints.py -v
    status: PASS
    exit_code: 0
    duration_seconds: 0.235
    source_commit: fca0d96fd071f1165e3e16658d821a3d36a20293
    report_source_commit: 30ccb8566d0eeeba93f40e6ce60bb90f5ba96323
    evidence: docs/reports/evidence/VEL-RECOVERY-PROOF/complete-entrypoint-tests.txt
  - command: H:\BEN\program files\corepack.CMD pnpm test:library-isolation
    status: PASS
    exit_code: 0
    duration_seconds: 2.359
    source_commit: fca0d96fd071f1165e3e16658d821a3d36a20293
    report_source_commit: 30ccb8566d0eeeba93f40e6ce60bb90f5ba96323
    evidence: docs/reports/evidence/VEL-RECOVERY-PROOF/complete-library66.txt
  - command: H:\BEN\program files\corepack.CMD pnpm build
    status: PASS
    exit_code: 0
    duration_seconds: 22.593
    source_commit: fca0d96fd071f1165e3e16658d821a3d36a20293
    report_source_commit: 30ccb8566d0eeeba93f40e6ce60bb90f5ba96323
    evidence: docs/reports/evidence/VEL-RECOVERY-PROOF/complete-build.txt
  - command: H:\BEN\program files\corepack.CMD pnpm check
    status: PASS
    exit_code: 0
    duration_seconds: 7.25
    source_commit: fca0d96fd071f1165e3e16658d821a3d36a20293
    report_source_commit: 30ccb8566d0eeeba93f40e6ce60bb90f5ba96323
    evidence: docs/reports/evidence/VEL-RECOVERY-PROOF/complete-typecheck.txt
  - command: git checkout --detach cb6b5d0ea9fc6861ff50c1e4fea94bb0b9c9fbe4
    status: PASS
    exit_code: 0
    duration_seconds: 0.391
    source_commit: cb6b5d0ea9fc6861ff50c1e4fea94bb0b9c9fbe4
    report_source_commit: 30ccb8566d0eeeba93f40e6ce60bb90f5ba96323
    evidence: docs/reports/evidence/VEL-RECOVERY-PROOF/complete-reviewed-preflight.txt
  - command: H:\BEN\program files\corepack.CMD pnpm test:hosted-preflight
    status: PASS
    exit_code: 0
    duration_seconds: 1.344
    source_commit: cb6b5d0ea9fc6861ff50c1e4fea94bb0b9c9fbe4
    report_source_commit: 30ccb8566d0eeeba93f40e6ce60bb90f5ba96323
    evidence: docs/reports/evidence/VEL-RECOVERY-PROOF/complete-preflight19.txt
  - command: C:\Program Files\Python310\python.EXE scripts/agent_workflow.py validate
    status: PASS
    exit_code: 0
    duration_seconds: 27.953
    source_commit: cb6b5d0ea9fc6861ff50c1e4fea94bb0b9c9fbe4
    report_source_commit: 30ccb8566d0eeeba93f40e6ce60bb90f5ba96323
    evidence: docs/reports/evidence/VEL-RECOVERY-PROOF/complete-candidate-handoff.txt
  - command: Python complete-phase/pin/source-evidence and expected-failure assertions
    status: PASS
    exit_code: 0
    source_commit: 258103604269d68c4642b6306c5bec5b57943584
    evidence: docs/reports/evidence/VEL-RECOVERY-PROOF/recovery-assertions.txt
  - command: git bundle create H:\cursor\cursor\Vellistry\.worktrees\vel-recovery-proof\docs\reports\evidence\VEL-RECOVERY-PROOF\recovery-pinned.bundle
      --all
    status: PASS
    exit_code: 0
    duration_seconds: 0.157
    source_commit: 8a4e526bdf1f21da68ea4e631e68cbd07d2477bc
    report_source_commit: 30ccb8566d0eeeba93f40e6ce60bb90f5ba96323
    evidence: docs/reports/evidence/VEL-RECOVERY-PROOF/commands.json
  - command: git bundle verify H:\cursor\cursor\Vellistry\.worktrees\vel-recovery-proof\docs\reports\evidence\VEL-RECOVERY-PROOF\recovery-pinned.bundle
    status: PASS
    exit_code: 0
    duration_seconds: 0.062
    source_commit: 8a4e526bdf1f21da68ea4e631e68cbd07d2477bc
    report_source_commit: 30ccb8566d0eeeba93f40e6ce60bb90f5ba96323
    evidence: docs/reports/evidence/VEL-RECOVERY-PROOF/anchored-bundle-verify.txt
  - command: git clone --branch codex/vel-db-readiness H:\cursor\cursor\Vellistry\.worktrees\vel-recovery-proof\docs\reports\evidence\VEL-RECOVERY-PROOF\recovery-pinned.bundle
      H:\cursor\cursor\Vellistry\.worktrees\vel-recovery-proof\.recovery-anchored.log
    status: PASS
    exit_code: 0
    duration_seconds: 0.75
    source_commit: 8a4e526bdf1f21da68ea4e631e68cbd07d2477bc
    report_source_commit: 30ccb8566d0eeeba93f40e6ce60bb90f5ba96323
    evidence: docs/reports/evidence/VEL-RECOVERY-PROOF/anchored-bundle-clone.txt
  - command: git gc --prune=now
    status: PASS
    exit_code: 0
    duration_seconds: 0.344
    source_commit: 8a4e526bdf1f21da68ea4e631e68cbd07d2477bc
    report_source_commit: 30ccb8566d0eeeba93f40e6ce60bb90f5ba96323
    evidence: docs/reports/evidence/VEL-RECOVERY-PROOF/commands.json
  - command: git fsck --full
    status: PASS
    exit_code: 0
    duration_seconds: 0.234
    source_commit: 8a4e526bdf1f21da68ea4e631e68cbd07d2477bc
    report_source_commit: 30ccb8566d0eeeba93f40e6ce60bb90f5ba96323
    evidence: docs/reports/evidence/VEL-RECOVERY-PROOF/commands.json
  - command: python scripts/agent_workflow.py validate
    status: PASS
    exit_code: 0
    duration_seconds: 31.453
    source_commit: 8a4e526bdf1f21da68ea4e631e68cbd07d2477bc
    report_source_commit: 30ccb8566d0eeeba93f40e6ce60bb90f5ba96323
    evidence: docs/reports/evidence/VEL-RECOVERY-PROOF/anchored-handoff-after-gc.txt
owner_disposition: pending
---

# Recovery proof submission

## Work performed
Committed Task/CP0022 before creating owned local Git bundles and clean disposable clones. Recovered pinned main, four review candidates and necessary historical read-only source; corrected branch-tip-only backup incompleteness by including43 immutable/provenance commit pins. No application, SQL, CI or policy source changes.

## Facts and evidence
First handoff validation failed exit1 for absent CP0001 non-ancestor source commit; preserved as actual failure. Complete corrected bundle SHA256 dbdd63311331296b963ef7cbf8eed2be8d9d7b7b79ce4f374b66e29d2b938404,2,617,627bytes, restores all required commits. Deliberate corruption clone exit128 and missing-test tree exit1 are intended negatives; restored tree then exits0. Original synthetic PG17 ZIP and four SQL/fixture source identities recover from exact Git objects. No SQL executed.

## Interpretations
This demonstrates bounded Git source/evidence recovery after real failure correction. Same Windows host/root agent context; fresh independent AI runtime and cleanOS NOT_RUN. Hosted data/Auth/Storage/migration history NOT_RUN. Checklist38/41/42 remain PARTIAL rather than completed product recovery or cost-effectiveness claims. No ignored runtime env or .git/config included; Git history is not exhaustively secret-audited.

## Proposals
Independent exact-head source/CI review and owner integration. Preserve required-pin dependency closure in any future backup recipe. Original research sources, real independent implementation handoff, hosted/JWT/private-pilot and release still need separate evidence/owner decisions. No new service or orchestrator proposed.

## Tests
Final complete clone:15 workflow +8 entrypoint +66 Library +19 preflight tests PASS; both builds/typechecks, metadata/readiness/spec/handoff, Git fsck and final tree checks PASS. Test source_commit fields identify actual tested main or reviewed preflight revision; report_source_commit binds report evidence. Raw command list also preserves initial failure and intended negative exits, which are not falsely represented as required passing commands. Minimal system/tool environment excludes runtime app credentials. Recorded four prior successful fullCI timing samples and context serialized bytes; billed minutes/model tokens/savings/escaped-defect rates UNVERIFIED.

## Artifacts
Task/CP/EB0022, manifest, report, raw command evidence, dependency closure, recovery summary and measured workflow/context metadata. Final anchored recovery-pinned.bundle retained in Git evidence (SHA256984a99d0148fe041ee888c0fcc968adf277b7e48be8cd6662a88d3aa07b87465,2,620,689bytes);43 named pins survive fresh clone GC/fsck/handoff checks. Earlier bundles/clones retained in ignored .log paths under this worktree; no external resources created or destructively cleaned. Report itself postdates the backed-up refs and is not falsely claimed inside its earlier bundle.

## Risks
Same-host caches and installed Python/PyYAML are reused; not clean-machine independence. No exhaustive secret-history scan or hosted runtime restoration. Old sources are data, not action authority. Selected branch heads may drift; future execution must re-pin actual authorized sources. Rollback by discarding only verified owned disposable copies, leaving canonical branches untouched; no source/data rollback required.

## Reviewer disposition
Prior head c02069e received distinct Codex advisory review without actionable defects and successful fullCI39323878707. Its disclosed dangling-pin limitation is addressed by the anchored-bundle follow-up. Final delta source review/CI and owner decision remain pending. No ChatGPT/human approval, merge or private-pilot/release inference. Current metadata remains proposed-for-review.

## Evidence serialization correction
The first anchored-bundle evidence revision referenced empty stdout files for successful silent Git commands. Trusted compliance rejected empty test evidence; the zero exits remain actual results. Those entries now point to the nonempty structured commands.json containing their exact commands/exits/durations, retaining the raw empty stdout files as historical output. No test result changed.
