---
id: VEL-RPT-CI-OPT-001-USAGE
title: CI optimization measurements and comparison limits
type: ci-usage-evidence
status: proposed-for-owner-review
created_at: 2026-10-16
updated_at: 2026-10-16
version: 0.2.0
---

# Observations, projections and limits

## Reconciled reviewed checkpoint and latest correction ledger

The independently reviewed b713d945aa06a5fce6a5b9f63a0a9fdcaa4b88ee run
38958548133 completed with184 allocated-job execution seconds: classify4,
application/security133, governance14, recovery27, gate6; SQL not applicable.
Compared with296 historical seconds this is37.84% lower observed allocation,
not billed minutes or a controlled benchmark. Intermediate776ef84 run38958193334
used181 seconds. The initial4259620/run38956662940/232seconds observation below
is retained as HISTORICAL, not the final result. Raw reviewed checkpoint and
all three timing records are committed under evidence/VEL-CI-OPT-001.

Latest correction exact-head draft/full results are in the
[append-only external evidence ledger](https://github.com/Ben-001-sys/Vellistry/pull/70#issuecomment-6224103593), updated after the source commit
exists. This resolves the report/SHA cycle without relabeling earlier runs or
repeated report-only CI churn. Ordinary draft governance success is advisory;
its stable merge gate must finish blocked, so do not report that workflow as a
merge-eligible PASS. Ready/main/full verification preserves required security.
No new billable usage access or savings target claim is made.


**FACT.** Current main before this task is
4b3996ef7cda878e1af3d679454bd1bb873a79c2. The last 300 observed workflow starts
comprised combined baseline 73, foundation 50, metadata 69, readiness 69,
agent workflow 12 and K2 27. There are 249 PR starts over 70 distinct PR head
SHAs and 51 push starts (24 main, 27 feature-branch). Those main starts cover
8 distinct main heads. Raw data, exact IDs and restored push branch labels
are in evidence/VEL-CI-OPT-001. Starts include blocked runs, not billed minutes.

**FACT.** There are now 26 workflow files: 25 original workflows have manual
triggers only and unchanged job bodies; one primary workflow has automatic PR
and main-push events. Automatic definitions fall 25 to 1 (96%). This is a source
measurement, not a claim of 96% billing or actual invocation savings.

**Historical first source run.** Draft PR #70 head
4259620ad0f4207bf1aa720c3809f32c93b59314 generated exactly one automatic PR
workflow and no feature-branch push workflow:
https://github.com/Ben-001-sys/Vellistry/actions/runs/38956662940 .
Five allocated jobs passed; the sixth SQL-privilege job correctly skipped because
its proposed source is absent on main. The final required gate passed.

**Same-diff projection, not an executed old run.** Replaying the original
positive path/branch filters against that implementation diff selects 25 PR
workflows plus 16 feature-push workflows. The observed replacement is one PR
workflow and zero feature pushes: a 41-to-1 (97.56%) structural projection for
this unusually broad CI edit. Do not generalize that percentage to normal PRs.
The replay includes literal positive glob rules only; source JSON lists the
exact paths/workflows for independent inspection.

**Historical-mix projection, not savings.** One run for each of the 70 observed
PR heads and 8 main heads would be 78 instead of 300 starts (74% reduction).
That is only a coarse grouping: repeated events on one SHA, partial sampling,
ready/edited events and concurrency are not reconstructed from those records.
The >=75% general invocation target and aspirational 90% are therefore NOT
established by this sample. Preserving one required PR run and one main baseline
imposes a floor; do not weaken gates to manufacture the target.

## Actual runner execution spans (not billable minutes)

The five successful push-main workflows at the baseline SHA ran seven allocated
jobs, totaling 296 seconds from job started_at to completed_at. New full-security
PR run 38956662940 ran five allocated jobs, totaling 232 seconds. Skipped jobs
with runner_id=0 contribute no observed execution span.

| Component | Baseline seconds | Historical4259620 seconds |
|---|---:|---:|
| Governance/classification/final gate | 36 | 26 |
| Application builds and real security | 221 | 168 |
| PostgreSQL CAS/restore | 39 | 38 |
| Total | 296 | 232 |

Observed difference is 64 seconds / **21.62%**. App dependency installations
fall three to one; Nest builds three to one and Next builds two to one.
Security checks and 66 Library regressions are preserved, not removed.
Root governance plus offline/archived checks execute 286 tests, and recovery
executes 12 tests. The test-count and job-identity logs are retained.

This is one successful main cohort versus one PR cohort on different days,
with different runner/cache/image conditions and extra routing regressions.
It is not a controlled benchmark, a post-merge observation, a confidence
interval, or a billable-minute measurement. The ~60% runner-minute aspiration
is **not demonstrated**. Docs-only build/container avoidance is tested by
routing scenarios, not a live docs-only PR against an already-merged new CI.

**Billing gap.** Read-only consolidated user usage endpoint returned 404 with
an explicit missing user-scope notice. No auth scope refresh, token retrieval,
billing/spending mutation or old deprecated timing-endpoint workaround was
performed. Billable minutes and cost savings are UNAVAILABLE, never replaced
with allocated seconds or raw starts. Owner can supply a permitted usage export
or authorize a later read-only comparison after representative merged usage.

## Remaining behavioral verification

Main-push and full manual routing are unit-tested but cannot be live-proven
without a merge/default-branch workflow registration; no merge is authorized.
The final gate passed a real run with one nonapplicable job skipped; failure,
missing-output, missing-job, cancelled-job and skipped-applicable cases are
negative unit tests, not injected failures in GitHub. Superseded PR cancellation
is structurally validated; no redundant run was deliberately started solely to
prove cancellation. No private-pilot or release gate is promoted by green CI.
