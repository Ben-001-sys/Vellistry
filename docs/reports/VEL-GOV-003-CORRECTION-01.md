---
id: VEL-REP-GOV-003-CORRECTION-01
type: execution-report
status: proposed-for-review
created_at: 2026-10-17
updated_at: 2026-10-17
version: 0.1.0
---

# VEL-GOV-003 correction01 — bounded continuation, not a scope amendment

FACT: independent review6235794783 targets head64ba4c505fbebe5b067377480a04da4c006d82cc. Direct owner dispatch authorizes the two static-contract corrections and negative regressions. Local branch was clean at that exact PR head; main remains f371448538dafa92faebbef9bcda2a36c6ca1fa9.

Existing Task0010 already includes scripts/pr_compliance.py, tests/test_pr_compliance.py, CI policy/workflow, effective contract docs, evidence and self-editing/missing-check/event negative tests. Gate invocation/CI_NEEDS and mandatory PR/main coverage checks refine those existing acceptance criteria; they introduce no new path permissions, phase, executor, prohibited-action exception or external action. Therefore governing scope does not materially change. No new amendment task/pack is required under the owner's instruction; original Task contract and CP0010 remain unchanged. This dated note records the reasoning, not a new owner decision or replacement handoff.

Plan: add negative synthetic workflow mutations first and record failure against the reviewed checker; implement precise final-command/environment and required event/job/step coverage; retain one automatic workflow, original security/draft routing and immutable CP0010. Explicitly preserve owner-protected review for candidate ci_policy.py/workflow/loader code, since structural checks do not prove malicious code semantics or actual actor identity. Record new source commit and final exact-head full/draft CI in canonical EB/ledger.

## Demonstrated findings and smallest correction

Reviewed checker: six new workflow-data test methods produced33 missing-rejection
failures across35 mutations; the two already-detected softened compliance steps
remained negative passes. No malicious workflow ran outside disposable Git data.
Corrected checker: all six methods/35mutations pass, and all37existing CI-policy
contracts pass. Raw before/after outputs and command exits are committed under
evidence/VEL-GOV-003/correction01-*. Exact operative source: `2f8a067c926653a4913f1e32470af30ac11640a6`.

The checker now requires the terminal gate-policy command and complete CI_NEEDS
expression, forbids skipping/softening/shell-directory/default overrides of
mandatory execution, preserves all six PR activities with no path/base filter,
and requires unfiltered push-main/manual verification. Classification/governance
and applicable security job guards remain canonical. The actual workflow and
all security test bodies are unchanged by this correction.

Candidate ci_policy.py, evaluator, loader and workflow semantics still require
owner-protected independent source review. A trusted gate-policy loader was
considered; adding one is unnecessary to these targeted shape-contract fixes and
would need a separately reviewed design. No cryptographic or malicious-contributor
prevention claim. Initial bootstrap, actor identity, actual protection and
merge-strategy limitations remain as documented; no owner setting is changed.

Final local54-case compliance suite and final exact-head draft/full CI are
recorded after completion in EB0010 and the existing append-only PR76 evidence
ledger. Prior64ba4c5/355-test and48-case results remain historical.

Correction01 local completion: full54 compliance cases and37 CI-policy cases PASS, exit0, on operative source `2f8a067c926653a4913f1e32470af30ac11640a6`. Metadata28records, handoff8tasks/6committed packs/6bundles, readiness14nodes/4pending gates and spec8scenarios validate. Actual final submitted SHA and new full/draft runs are appended to the existing ledger after commit. Historical results remain labeled; no actual PR ready/main transition is claimed.
