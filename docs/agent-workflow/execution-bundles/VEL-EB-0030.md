---
id: VEL-EB-0030
title: Correct two demonstrated Windows governance fixture portability defects
type: execution-bundle
status: proposed-for-review
created_at: '2026-10-20'
version: 0.1.0
task_id: VEL-TASK-0030
context_pack_id: VEL-CP-0030
base_commit: 9bd47e5bef9029da6d178d667f71bad7d9d755e0
agent:
  name: Codex
  model: GPT-6; exact build unavailable
  runner: Codex desktop Windows isolated task worktree
  role: bounded-test-corrector
sources:
- PROJECT-CONSTITUTION.md
- SOURCE-OF-TRUTH.md
- AGENTS.md
- docs/agent-workflow/PR-COMPLIANCE.md
- docs/agent-workflow/authorizations/VEL-REM-INTEGRATION-20261019.yaml
- docs/agent-workflow/inputs/VEL-TASK-0030/OWNER-SCOPE.md
- docs/agent-workflow/inputs/VEL-TASK-0030/red-commands.json
- docs/agent-workflow/inputs/VEL-TASK-0030/SOURCE-MAP.json
- docs/agent-workflow/inputs/VEL-TASK-0030/test_knowledge_metadata.py.before.txt
- docs/agent-workflow/inputs/VEL-TASK-0030/test_knowledge_metadata.py.txt
- docs/agent-workflow/inputs/VEL-TASK-0030/test_r01_manifest.py.before.txt
- docs/agent-workflow/inputs/VEL-TASK-0030/test_r01_manifest.py.txt
evidence:
- docs/reports/evidence/VEL-WINDOWS-GOVERNANCE-0030/commands.json
- docs/reports/evidence/VEL-WINDOWS-GOVERNANCE-0030/assertion-preservation.json
review:
  status: pending
  approved_by: null
  evidence: null
implementation_source_commit: c8be4274fe6b4b8f3394567a984ac3235595bfb1
execution:
  status: completed
  executor: Codex
  model: GPT-6; exact build unavailable
  tests:
  - command: python -X utf8=0 -m unittest discover -s tests -p test_knowledge_metadata.py
      -v
    cwd: H:\cursor\cursor\Vellistry\.worktrees\vel-windows-governance-fixed-test
    source_commit: c8be4274fe6b4b8f3394567a984ac3235595bfb1
    exit_code: 0
    status: PASS
    duration_seconds: 0.953
    evidence: docs/reports/evidence/VEL-WINDOWS-GOVERNANCE-0030/metadata8.txt
  - command: python -X utf8=0 -m unittest discover -s tests -p test_r01_manifest.py
      -v
    cwd: H:\cursor\cursor\Vellistry\.worktrees\vel-windows-governance-fixed-test
    source_commit: c8be4274fe6b4b8f3394567a984ac3235595bfb1
    exit_code: 0
    status: PASS
    duration_seconds: 0.125
    evidence: docs/reports/evidence/VEL-WINDOWS-GOVERNANCE-0030/manifest2.txt
  - command: python scripts/ci_governance.py
    cwd: H:\cursor\cursor\Vellistry\.worktrees\vel-windows-governance-fixed-test
    source_commit: c8be4274fe6b4b8f3394567a984ac3235595bfb1
    exit_code: 0
    status: PASS
    duration_seconds: 401.609
    evidence: docs/reports/evidence/VEL-WINDOWS-GOVERNANCE-0030/full-governance.txt
owner_disposition: pending
---

# Windows governance fixture portability correction

## Work performed
One-time owner delegation,19Oct2026,remediation-only. UniqueTask0030/source committed before immutableCP0030; only then corrected two test fixtures. tests/test_knowledge_metadata.py writes its UTF8-read source as explicitUTF8. tests/test_r01_manifest.py closes its mkstemp descriptor before the Path fixture is written and removed. All original test assertions remain intact; these are Codex fixture corrections, not newly authored historical validators or source guidance.

## Facts and evidence
Verified current-main base ea6a2f25453e0a7ca436349fb8606075db7c0672. Operative corrected source c8be4274fe6b4b8f3394567a984ac3235595bfb1; ContextPack source 9bd47e5bef9029da6d178d667f71bad7d9d755e0. Before-fix observed head2e0365a443890f7e85a480e34cd55fe9d330e57a is tree-identical to mergedmain ea6a2f25453e0a7ca436349fb8606075db7c0672: metadata8tests/1FAIL (defaultcp1252 corruptsUTF8), manifest2tests/1ERROR (Windows open descriptor prevents unlink). Exact source blobs/snapshots and red commands/output preserved in inputs0030. Original defect reproduction is an actual failed test, not hosted acceptance or failing product behavior.

Corrected forcedUTF8mode0 tests: metadata8/8PASS, manifest2/2PASS, actualexit0. Full current governance executes [244, 18, 20, 14, 12, 8, 18, 12, 20, 17] tests, sum383, PASS/exit0 on Windows/Python3.10. It ran in the new owned disposable worktree at fixed c8be4274fe6b4b8f3394567a984ac3235595bfb1; HEAD did not advance there. Existing script-generated untracked CP0002/3 belong only to that disposable checkout; no tracked historical pack was rewritten. Child runtime credential variable names were excluded. AST checks verify all10test names and22unittestassert calls unchanged. Production validators, compliance policy, automatic workflow and security gates are byte-identical to base.

## Interpretations
The two defects were Windows fixture portability bugs, not a reason to weaken metadata or source-manifest checks. Earlier stale-packet failures correctly rejected local generated packets tied to a priorHEAD; a fixed-head isolated test checkout resolves that test setup contamination without changing the contract. Passing383 tests is bounded same-host verification, not cleanOS/new-agent implementation or hosted/private acceptance.

## Proposals
Obtain genuinely separate trusted Codex review at finalexacthead, realreadyPRCI, then owner-delegated serialintegration and mergedtree/postmain verification. Reconcile this outcome in the existing44ledger; no newfeatures or broad portability guarantee. Preserve red and green outputs and all historical source branches.

## Tests
commands.json has actual commands/cwd/source/exits/durations and full output evidence for8+2targeted and383fullgovernance; assertion-preservation.json records unchanged test contracts. Current Node/pnpm/application/security checks will execute when applicable in actualready/postmainCI; do not claim they ran locally in this Python-only task. Finalhead andCI URLs belong in the external PR evidence ledger after the lastcommit.

## Artifacts
VEL-TASK/CP/EB0030, exact oldsource/red snapshots, preserved previousmain evidence manifest, two minimal sourcefixes, assertion-preservation replay, actual Windows full output, this correction report and current perPR evidencebinding. No oldContextPack mutation, hidden skip or standingpolicy replacement.

## Risks
Windows3.10/cp1252 and actualLinuxCI establish their specific environments; no cleanOS or universalplatform claim. Same-host worktree is not checklist27freshimplementation. HostedSupabase,SQLexecution,private data,paidcalls,settings,deployment,newMVPfeatures remain unauthorized. No test or merge implies G_PRIVATE_PILOT/G_RELEASE approval.

## Reviewer disposition
Pending actual separate trusted Codex source review and exactheadreadyCI. Structured review/owner fields remain pending under defaultstaticcontract; currentdirectone-timeownerdelegation is separately recorded, not a fabricated humanreview. Anyactualmerge/postmainoutcome is recorded externally only after verification.
