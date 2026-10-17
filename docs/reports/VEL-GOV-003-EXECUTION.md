---
id: VEL-REP-GOV-003-20261017-001
title: PR compliance implementation and exact-head review evidence
type: execution-report
status: proposed-for-review
created_at: 2026-10-17
updated_at: 2026-10-17
version: 0.1.0
owner: project_owner
---

# VEL-GOV-003 execution report

## FACT — authorization and provenance

Owner directly dispatched Issue73 to Codex. Handoff comment6226100456 is explicitly
coordinator-relayed continuation, not independently authenticated human authorship.
Main checked at `f371448538dafa92faebbef9bcda2a36c6ca1fa9`, ready run38973835858 and
main run38974225858 SUCCESS. PR65/66/68/59 remained distinct and untouched.
Unique0010 verified across89refs. Task and selected source/authorization snapshots
committed at `5bc27535c768998554ee60b7bcb66fa5be12e1d0`; generated/validated CP0010
committed at `d0cf7c5d3618bf616e5ddd60bbde5ca8154d600f` before any implementation.
Existing pack/bundle schema not relaxed. Start was2026-10-16; completion evidence
continues2026-10-17. Same-session execution is not an independent cold start.

## FACT — coverage, paths and trust

[Committed pre-code design](../agent-workflow/inputs/VEL-TASK-0010/COVERAGE-TRUST-DESIGN.md)
and [policy/attack/exception matrix](../agent-workflow/PR-COMPLIANCE.md) map every
issue/handoff scenario to checks and their trust limits.

| Changed surface | Purpose / authorization boundary |
|---|---|
| scripts/pr_compliance.py | Static Git task/pack/phase/scope/expiry/provenance/source-head/EB validation; source pins via trusted existing verifier. |
| scripts/run_pr_compliance.py | Load reviewed-base evaluator and pack verifier; one exact-base/Task0010/pack bootstrap flagged provisional. Candidate code not imported on normal base path. |
| scripts/ci_policy.py | Require compliance output even if every security job succeeds; retain original security/draft flags and gate name. Require compliance test discovery. |
| .github/workflows/ci.yml | Cheap compliance in existing governance and independent final gate, read-only pull_request; no parallel workflow or duplicate build. All original app/security/recovery/manual jobs preserved. |
| tests/test_pr_compliance.py | Real synthetic local Git fixtures for required positive/negative cases and loader/main merge boundaries. No malicious live PR. |
| tests/test_ci_policy.py | Existing gate fixtures include required compliance output; add fail-closed missing/BLOCKED/NOT_RUN test. Original isolation, routing and manual workflow assertions preserved. |
| AGENTS, workflow README, CURRENT-STATE | Proposed contract, actual merged baseline/holds and protected-review limitation, not new owner decisions. |
| Task/CP/EB0010, manifest, report/raw evidence | Immutable authorization/scope and honest execution/code/head provenance; no reattribution of existing work. |

No application/auth implementation, SQL/migration, lockfile/dependency, original
security/PG fixtures, accepted ADR, other PR branch, hosted read/write, secret,
private manuscript, paid call, deployment, merge or owner setting change.

## FACT — enforcement visibility and owner checkpoint

Read-only GitHub inspection returned HTTP404 `Branch not protected` for classic
main protection, and rulesets endpoint returned[]. Raw response/exit codes are
in [protection-readonly.json](evidence/VEL-GOV-003/protection-readonly.json).
No account setting, protection rule, billing/auth scope or permission changed.
Plan eligibility was not queried and is not inferred.

CI can reject inconsistent/missing evidence when this workflow runs; it cannot
prevent an owner/unprotected contributor bypassing a changed workflow/loader or
merging without a required check. Owner must independently review first adoption
and decide actual stable-check/protected-control enforcement. Manual fallback:
inspect trusted-base controls/diff, pinned task/scope, linked owner authorization,
actual exact-head test runs, inherited origins and pending owner disposition
before any merge. This remains a rollout limitation, not a reason to fake PASS.

## FACT — exact code/head evidence

The manifest and EB bind an immutable implementation source commit to every
operative blob at actual event HEAD. Later report/manifest-only evidence commits
have explicit current-head provenance resolved by CI, avoiding a commit containing
its own hash. Owner-created main merge SHA and implementation head remain separate;
a merge that changes the implementation tree fails. CI prints exact head/base
and implementation source; the final PR ledger records actual full SHA and run
links after the report commit exists. Earlier baseline/source results are never
relabeled as final-head results.

## FACT — tests

Actual local command/exit/count evidence is retained under evidence/VEL-GOV-003.
The initial43 synthetic Git tests passed; additional main-merge/owner-exception
cases are rerun before final source submission. Verified local actionlint1.7.12
passes all26 workflows (exit0). Existing metadata28records, readiness14nodes with
4pending gates and spec8scenarios validate. Final test counts and exact-head CI
are appended to the linked PR evidence ledger after final source/report commit.

## INTERPRETATION — remaining trust/acceptance limits

Authorization URL, executor/model labels, raw test evidence and Git author/account
metadata are declarations/evidence pointers, not authenticated owner or LLM
identity. Actual execution and provenance still require source/CI review. A
review alone cannot promote owner acceptance; pre-merge bundle stays proposed
with pending owner disposition. Candidate-created exceptions cannot approve
their own implementation. Explicit SQL path proposals need a separate reviewed-
base owner record; no exception grants hosted execution or sensitive actions.

Original44-item checklist/earlier approval permalinks remain missing, hosted
acceptance NOT_RUN, PR68 third migration unapproved, direct signed-out JWT risk
unresolved and billed savings unproved. Native Windows complete-root R01 fixture
limitation remains; focused UTF-8-mode tests and full Linux CI are distinguished.

## PROPOSAL — review and owner checklist

ChatGPT independently inspect exact diff, synthetic attacks, unchanged security
steps, immutable source/pack, explicit bootstrap, manifest source/head bindings
and final CI. Owner decides adoption/merge and protection/exception policy;
no such decision is made here. After any future approved merge, verify main tree
and actual post-merge CI. Issue74/PR68 and hosted acceptance remain separate.

## Source binding checkpoint

Operative implementation source `0d9ea3687383d01754b696081528a937e3a6e8a8` includes the bounded boolean-version/type correction. Before/after regression outputs retain the demonstrated failure and passing correction. Final exact head and all48 fixture cases will be independently exercised by final-head CI; pre-source outputs remain labeled checkpoints.

## Final submission evidence reference

[PR76 external ledger](https://github.com/Ben-001-sys/Vellistry/pull/76#issuecomment-6235609589) is authoritative for final exact SHA and
actual draft/full runs. It is linked before the final commit exists; later results
are appended there without a report-only SHA cycle. Both runs must use the same
final head. Draft advisory success still ends in intentionally blocked gate;
explicit full verification must pass application/security/recovery and all48
fixture cases. No ready promotion or merge is performed by Codex.

Local source checkpoints:47 Git cases pass before type correction; demonstrated
boolean-version failure then1passing regression; all37 CI-policy cases pass on
committed source/evidence;8entrypoint cases and28metadata records pass;
8tasks/6committed packs/6bundles validate;14DAG nodes/4pending gates and8spec
scenarios validate. Raw commands, exits, pass counts and before/after outputs
are committed under evidence/VEL-GOV-003. The default Windows `python -I`
bootstrap failed because PyYAML lived only in user-site; an ignored local venv
with PyYAML6.0.3 under existing>=6,<7 constraint passed actual isolated bootstrap.
No global/lockfile/framework upgrade occurred. CI installs its existing YAML
parser in setup-python before isolated checking.

Final independent ChatGPT review and owner adoption/enforcement decision are
pending. No claim of all44items complete, authenticated agent identity, protected
merge prevention, hosted acceptance or owner approval.
