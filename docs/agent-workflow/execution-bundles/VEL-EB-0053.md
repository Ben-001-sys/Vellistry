---
id: VEL-EB-0053
title: Mandatory existing protected persistence CI regression coverage
type: execution-bundle
status: proposed-for-review
created_at: '2026-10-25'
version: 0.1.0
task_id: VEL-TASK-0053
context_pack_id: VEL-CP-0053
base_commit: 352eaaf897dc3e19d595aa8284ce732d3cca4ff8
agent:
  name: Codex
  model: Codex runtime model not independently reported
  runner: Codex desktop isolated Windows worktree; applicable GitHub Actions Ubuntu
    runner
  role: primary bounded implementation agent
sources:
- PROJECT-CONSTITUTION.md
- AGENTS.md
- CURRENT-STATE.md
- docs/agent-workflow/PR-COMPLIANCE.md
- .github/workflows/ci.yml
- scripts/ci_policy.py
- tests/workspace/persistence/run_pg17.py
- apps/api/package.json
- docs/agent-workflow/inputs/VEL-TASK-0053/OWNER-SCOPE.md
evidence:
- docs/reports/VEL-PERSISTENCE-CI-0053.md
- docs/reports/evidence/VEL-TASK-0053/results.json
- docs/reports/evidence/VEL-TASK-0053/policy.txt
- docs/reports/evidence/VEL-TASK-0053/compliance.txt
- docs/reports/evidence/VEL-TASK-0053/governance.txt
- docs/reports/evidence/VEL-TASK-0053/previous-validator-negative.txt
review:
  status: pending
  approved_by: null
  evidence: null
owner_disposition: pending
implementation_source_commit: 2b44e2937bcc3f937126fa880446622325d2583c
execution:
  status: completed
  executor: Codex
  model: Codex runtime model not independently reported
  tests:
  - command: python -m unittest discover -s tests -p test_ci_policy.py -v
    source_commit: 2b44e2937bcc3f937126fa880446622325d2583c
    exit_code: 0
    status: PASS
    count: 42
    evidence: docs/reports/evidence/VEL-TASK-0053/policy.txt
  - command: python -m unittest discover -s tests -p test_pr_compliance.py -v
    source_commit: 2b44e2937bcc3f937126fa880446622325d2583c
    exit_code: 0
    status: PASS
    count: 60
    evidence: docs/reports/evidence/VEL-TASK-0053/compliance.txt
  - command: python scripts/ci_governance.py
    source_commit: 2b44e2937bcc3f937126fa880446622325d2583c
    exit_code: 0
    status: PASS
    count: 421
    evidence: docs/reports/evidence/VEL-TASK-0053/governance.txt
  - command: Inline previous-base validator against10 new negative Git workflow mutations
      (expected10 failures,0 errors)
    source_commit: 2b44e2937bcc3f937126fa880446622325d2583c
    exit_code: 0
    status: PASS
    count: 10
    evidence: docs/reports/evidence/VEL-TASK-0053/previous-validator-negative.txt
---

## Work performed
Added existing12-unit and32-case PG17 commands inside the existing applicable application job, explicit Python3.12, current-head-only result upload and strengthened static execution/order guards. Six jobs, one automatic workflow, read-only token, draft routing and original security/recovery/final gate preserved. No dependency, application, SQL or Auth changes. CP0053 committed after exact task/pack validation and before implementation; complete historical validation also passed. The preparation shell's later redundant pack commit returned1 because the pack was already committed, not because validation failed.

## Facts and evidence
PR115 merged at c577cc5ecf5fb92fda63977bade60ce4cf2d45df with exact approved-tree equality; post-main40184254095 SUCCESS, recorded in Issue108. Task52/CP52/EB52, original32-case acceptance and failed runtime history untouched. The independently blocked runtime is not PASS. New mandatory commands reuse the unchanged pinned PG17 runner and frozen dependencies; no new SQL approval is inferred.

## Interpretations
Mandatory exact commands plus positive/negative contracts guard accidental execution bypass, not malicious control-file edits or authenticated provenance. Linux portability and32-case execution must be established by actual ready-state CI; the old local experiment is not current-head CI evidence.

## Proposals
Separate owner merge after distinct exact-head review and actual ready-state CI. Task0054 is a separate same-base preparation PR; integrating either first requires governed base reconciliation of the other. Remediation delegation EXPIRED; no automatic successor merge.

## Tests
42 policy and60 compliance tests PASS on the candidate blobs subsequently committed as source; full governance executed at the committed source and passed282 current+139 archived=421 tests, metadata/readiness, both artifact validations, provenance/export checks. Raw outputs retained. The previous exact-base validator missed10 negative workflow mutations with0 errors; the corrected validator rejects them. Initial test-import and pre-workflow missing-step setup failures are retained separately and are not production regressions or valid negative proof. Existing app tests/build/typechecks are unchanged and will run through actual applicable CI, not relabeled Task52 results. Final CI links/counts are appended to the PR ledger at final exact head.

## Artifacts
Frontmatter links all raw policy/compliance/governance results and before-fix evidence. Source hashes are canonical Git bytes. Generated scratch CP0002/0003, caches and transport ZIPs are deliberately excluded from committed source. Current-head runtime artifacts retain their actual source SHA and cleanup outcomes, not historical result files.

## Risks
GitHub-hosted Docker/runtime availability may block actual acceptance; do not claim hosted Supabase behavior. Draft final gate intentionally fails. Legacy SQL privilege fixture skips are not SQL acceptance. Original security and recovery gates remain mandatory. No owner merge, credentials, private manuscript, shipping migration, hosted operation, deployment or broad gate promotion.

## Reviewer disposition
Distinct final-head source review and CI recorded in PR ledger; advisory AI review is not owner acceptance. Owner disposition pending.
