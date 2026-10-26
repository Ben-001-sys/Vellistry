---
id: VEL-REPORT-0065
title: Mandatory existing Next.js MFA regressions in CI
status: proposed-for-review
created_at: 2026-10-26
owner: project_owner
---

# Task0065 — existing MFA suite becomes mandatory

## FACT

Verified main a902fdb36bb51e17a5c567787c6886b171ca50fe; uniqueTask0065/source
committed05291f8 before validated immutableCP0065 commit
ebc3fa036dd1fefc79ccf3fa495a523bc9e3c2e3. No operative edit preceded that pack.
[Owner direct-chat scope record](https://github.com/Ben-001-sys/Vellistry/issues/108#issuecomment-6428746261)
is attributed to Codex as a relay, not independently authenticated human authorship.

Adds one unconditional `pnpm test:auth-mfa` step after principal-adapter tests and
before build/typechecks/PG/security in the existing application job. The unchanged
package command executes the existing two Task0064 synthetic files (55tests).
No new dependencies, Auth behavior, workflow/job, permissions or provider access.

Strict static contract extends the existing required command/order tuple, including
exact step shape. Removal, replacement, skip, continue-on-error, alternate shell,
working directory, environment, duplicate/renamed duplicate, masked command and
wrong ordering are rejected. Existing regression loops also cover the MFA entry.
New source-path tests verify login, account MFA, AuthPanel, controller/test files,
browser/server clients and package changes select app/security/recovery. Ready/full
application failure/cancel/skip/missing/timeout cannot pass final gate. Draft
advisory routing remains unchanged.

## INTERPRETATION

The same final gate already rejects required application job failure. An exact
unconditional command with normal GitHub Actions failure semantics makes a failing
MFA command fail that job; later successful upload/cleanup cannot erase the job
failure. Offline gate-result regressions simulate these job results; they are not
a claim of an intentionally failing hosted workflow. Actual ready CI must show
this new step executes all55tests plus the existing suites at the exact head.

Static source/provenance checks are review evidence, not authenticated agent
identity or protection against an authorized malicious workflow editor. Existing
owner source review and merge rules remain. No branch-protection/settings change.
New mandatory mock-SDK coverage is not real MFA enrollment or target authorization.
Historical23browser assertions are retained local evidence, not newly added to CI.

## PROPOSAL / owner decision

Distinct completed-head source review, actual draft advisory and ready-state
application/security/32PG/recovery CI are required. Publish a reviewable PR; separate
owner merge approval. No automatic successor merge or hosted operation follows.
Task64 and earlier immutable evidence remain unchanged. R01-R08 NOT_RUN;
N12/historical independent spawn EPERM BLOCKED; PRINCIPAL target assurance/SESSION
and other production gates unchanged. Issue108 OPEN; remediation delegation EXPIRED.

## Evidence

New fourteen mutation subcases failed against the unchanged prior validator
(expected rejection was absent); complete raw negative output retained. Corrected
contract rejects them. Per-command source, actual exits, results and preservation
checks go in EB0065/evidence; final-head independent review/CI ledger appended to
PR to avoid SHA self-reference. No old failures or unverified runtime checks are
relabelled as PASS. No hosted Auth/MFA/JWT/JWKS/credentials/manual SQL/settings,
private manuscripts, deployment or application changes.
