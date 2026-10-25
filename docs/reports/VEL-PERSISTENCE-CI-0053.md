---
id: VEL-PERSISTENCE-CI-0053
title: Mandatory protected workspace persistence CI coverage
type: report
status: proposed
created_at: 2026-10-25
owner: project_owner
---

# Task0053 coverage candidate

FACT: Base main c577cc5ecf5fb92fda63977bade60ce4cf2d45df merged PR115 with identical reviewed tree. Post-main [40184254095](https://github.com/Ben-001-sys/Vellistry/actions/runs/40184254095) SUCCESS. Owner scope is [Issue108](https://github.com/Ben-001-sys/Vellistry/issues/108#issuecomment-6396483689). CP0053 was validated and committed before implementation.

FACT: Add exactly one existing12-unit command and one existing32-case disposable PG17 command to the existing applicable application job. Python3.12 setup is explicit; frozen installation remains once, followed by units, build, typecheck, PG acceptance, then original local Supabase security tests. No new dependency, SQL, production route or automatic workflow. All six jobs, read-only permissions, draft-aware routing, security/recovery and final gate remain. The separately skipped legacy privilege fixture is not SQL acceptance.

FACT: Current-head runtime/case artifacts are selected by actual source SHA; historical Task52 results are never presented as this run. Failed runtime results still upload where available; the mandatory runner's nonzero exit fails the job. Successful owned cleanup remains part of the runner result, including restart and independent restore. Original failed tests and independent runtime BLOCKED evidence remain untouched.

INTERPRETATION: The exact-command, runtime and ordering contract plus negative tests reduce accidental removal, masking or conditional bypass. These repository controls do not authenticate contributors or replace owner review of workflow changes. Ubuntu-hosted execution must actually pass before claiming portable CI coverage.

PROPOSAL: Adopt this candidate only after distinct final-head review, actual ready-state CI and separate owner merge. Task0054 prepares hosted integration decisions independently; neither branch authorizes credentials, hosted operations or production persistence. A later base change requires governed reconciliation, not mutation of CP0053.

## Verification

Actual commands, exits, tested revisions, counts, historical setup failures and final CI links are recorded in EB0053 and the PR evidence ledger. Unchanged application tests/builds are delegated to actual ready-state CI rather than rerunning Task52's completed local research. No passing independent runtime is claimed.
