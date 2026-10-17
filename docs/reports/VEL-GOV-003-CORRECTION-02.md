---
id: VEL-REP-GOV-003-CORRECTION-02
type: execution-report
status: proposed-for-review
created_at: 2026-10-17
updated_at: 2026-10-17
version: 0.1.0
---

# VEL-GOV-003 correction02

FACT: owner continuation targets independent review6236734859 of PR76 head `d1fcca8f4e9471dd9a049808c233a7ddade09b34`. Rechecked local/remote branch and clean worktree; main remains `f371448538dafa92faebbef9bcda2a36c6ca1fa9`. Review source is archived in inputs/VEL-TASK-0010/REVIEW-CORRECTION-02.json.

INTERPRETATION: job token permissions and the governance regression invocation refine Task0010's existing self-editing/missing-check acceptance criteria. Both checker/test paths and reports are already allowed. No phase, executor, path, permission or prohibited-action boundary changes. Task0010 and immutable CP0010 therefore remain unchanged; no amendment/re-pinning is necessary. This reasoning does not confer new authorization.

The owner explicitly deferred branch protection for the sole-maintainer phase and accepts the enforcement risk. No settings implementation or new protection approval is required by this bounded task. Static checks cannot authenticate actors or prevent malicious replacement of the entire workflow/loader. Independent source/CI review and the owner's final merge decision remain necessary.

Plan: demonstrate new negatives against the reviewed validator, reject every job permissions override, require exactly one unconditional canonical governance command using existing execution guards, then run complete compliance/policy suites and final-head full/draft CI. Preserve historical evidence and record actual results below.

## Demonstration and correction

Before: the three new methods on the reviewed validator produced40 missing-rejection failures (30 job permissions,10 runner mutations), exits1. After: all nine workflow methods pass, covering75 mutations in total, exit0. Raw before/after commands and outputs are retained under evidence/VEL-GOV-003/correction02-*. Synthetic workflow data is committed only to disposable local Git fixtures; hostile workflows are never executed.

Every job now inherits the read-only workflow token: any job permissions key fails, including contents-write, id-token-write, read-only, empty and read-all overrides across all six jobs. The governance job must contain exactly one exact regression command; duplicate invocations under different names fail as well. Existing execution-step guards reject removal/replacement, conditions, continue-on-error, custom shell/directory and environment injection. The actual consolidated workflow and application/security/recovery sources are byte-identical to reviewed d1fcca8. No task amendment or ContextPack change.

Operative source: `4ef442ee799831e72ce5f89ab949a89888ed8a83`. Final evidence commit and actual exact-head full/draft Actions results are appended to the [existing canonical ledger](https://github.com/Ben-001-sys/Vellistry/pull/76#issuecomment-6235609589) after the submitted SHA exists. Historical d1fcca8/361-governance/54-compliance results are retained as history, never relabeled latest.


## Reproduction commands

Using the existing ignored PyYAML virtualenv (no dependency changes):

- `.compliance-venv.log/Scripts/python.exe -X utf8 -m unittest discover -s tests -p test_pr_compliance.py -k test_all_job_permission -v`: before,1method/30failures, exit1.
- `.compliance-venv.log/Scripts/python.exe -X utf8 -m unittest discover -s tests -p test_pr_compliance.py -k test_governance_runner -v`: before,2methods/10failures, exit1.
- `.compliance-venv.log/Scripts/python.exe -X utf8 -m unittest discover -s tests -p test_pr_compliance.py -k WorkflowExecutionContractTests -v`: after,9methods/75mutations PASS, exit0.

Raw outputs preserve durations and exact unittest case names. Before tests imported the unchanged d1fcca8 validator; only new synthetic tests were present. Full suite results follow below after execution.

## Local completion

Complete compliance suite:57tests,292.134s,exit0. Complete CI-policy suite:37tests,6.331s,exit0. Commands and raw outputs are correction02-full57.txt and correction02-policy37.txt; these results bind to source4ef442ee799831e72ce5f89ab949a89888ed8a83. Metadata28records, handoff8tasks/6committed packs/6bundles, readiness14nodes/4pending gates and spec8scenarios all exit0 (correction02-governance.json). Preservation diff exits0 (correction02-preservation.json). No actual ready-for-review/main transition or hosted acceptance is claimed. Final full/draft runs and final submitted head belong to the canonical ledger linked above.
