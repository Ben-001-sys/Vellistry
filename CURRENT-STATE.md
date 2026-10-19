---
id: VEL-STATE-001
type: current-state
status: active
created_at: 2026-10-08
updated_at: 2026-10-19
owner: project_owner
version: 0.1.65
---

# Vellistry — current facts and next authorized work

## Checked repository checkpoint — 2026-10-19

**FACT:** live main is `fca0d96fd071f1165e3e16658d821a3d36a20293`.
[Post-merge CI39136089610](https://github.com/Ben-001-sys/Vellistry/actions/runs/39136089610)
is SUCCESS on that exact SHA. This is the starting checkpoint for Task0018 (amending Task0017),
not a prediction of its future merged SHA. Re-fetch main before each task.

PR75 governance (VEL-TASK-0008), PR76 compliance ([Issue #73](https://github.com/Ben-001-sys/Vellistry/issues/73)),
PR78 manual PG17 harness and PR80 language proposal are **MERGED**. PR77 is
closed without merge; its ChatGPT-authored language source was adopted through
PR80 with explicit provenance. LANGUAGE.md is present but proposed-owner-review;
its15 decisions are not all owner-approved.

| Proposal | Verified disposition / source |
|---|---|
| [PR #59](https://github.com/Ben-001-sys/Vellistry/pull/59) | CLOSED unmerged2026-10-19; superseded kickoff, source5c7c8fb preserved. Task0021 proved no unique application/SQL/CI changes. |
| [PR #66](https://github.com/Ben-001-sys/Vellistry/pull/66) | CLOSED unmerged2026-10-19; original ChatGPT ADR source36da413 preserved byte-for-byte in main and adopted through PR75. |
| [PR #65](https://github.com/Ben-001-sys/Vellistry/pull/65) | Draft OPEN ChatGPT preflight604e1eb; safe helper/tests selectively adopted in Draft PR85, not merged. |
| [PR #68](https://github.com/Ben-001-sys/Vellistry/pull/68) | Draft OPEN Codex continuationcbb379f; includes PR65 source/obsolete CI. Never merge entire stale branch. Issue81 offline review is technically ready in PR84, owner/ChatGPT acceptance pending. |
| [PR82](https://github.com/Ben-001-sys/Vellistry/pull/82) | CLOSED unmerged; failed handoff preserved, superseded by conformant Task/CP0018 and Draft PR83. |

Draft candidates83–87 remain unmerged. Prior reviewed heads:83 `82a83ea` / fullCI39320774241;
84 `8a4e526` /39320128393;85 `cb6b5d0` /39320829746;86 `6feb8d8` /39321788645;
87 `c02069e` /39323878707, all SUCCESS. Subsequent state/recovery corrections require
new exact-head CI and review in their PR ledgers; these prior runs stay historical.
Codex advisory reviews are separate from ChatGPT review and owner approval.

PR64 Library isolation is merged. Repository tests and disposable evidence do
not establish hosted acceptance. Issue63 remains open pending reconciliation of
its acceptance, Issue58 remains open with superseded kickoff disposition, and Issue18 retains its independent-session
provenance/owner-disposition gap.

## Active mandate and onboarding

Start here, then [AGENTS](AGENTS.md), [constitution](PROJECT-CONSTITUTION.md),
[authority](SOURCE-OF-TRUTH.md), accepted ADRs, and the specific committed Task/CP.
[Original master mandate](docs/agent-workflow/inputs/VEL-TASK-0017/MASTER-MANDATE.md)
was explicitly adopted by the owner in the current Codex conversation.
[The44-item ledger](docs/reports/VEL-MASTER-REMEDIATION-LEDGER.md) preserves original
acceptance, evidence, status and remaining work; Issue71 is its external index.
Original checklist bytes are recovered; SRC001–004 research originals remain gaps.

Codex implements bounded isolated tasks; ChatGPT coordinates/reviews. A distinct
reviewer is advisory, never a second human approval. Task0018 covers state/ledger
only. Subsequent PR hygiene, language, security readiness, recovery and IMP-002 /
IMP-003A / IMP-003B require separate unique tasks and immutable packs. Offline
implementation is authorized by the mandate within accepted architecture; no
claim that these product slices are implemented yet.

The mandate conditionally delegates eligible integration. Current ADR0008 and
compliance still reserve merge to the owner and forbid merge inside task execution.
**OWNER_DECISION_PENDING:** reconcile that effective boundary or have the owner
merge exact reviewed passing candidates. No silent policy override. Continue
independent eligible work while integration waits.

## Actual verification and security boundaries

- `ci.yml` remains the single automatic pipeline. Draft governance/advisory runs
  deliberately block the merge gate; ready PRs run applicable checks; main/manual
  run full. All25 historical workflows remain manual-only, plus the named PG17
  manual harness. SQL privilege CI integration is skipped while PR68 fixture is
  absent; hosted preflight absence is NOT_RUN, never acceptance.
- [Issue #74 actual PG17 run39135149678](https://github.com/Ben-001-sys/Vellistry/actions/runs/39135149678)
  at `098ab06a40a84eaba5880223f02e80fab3bf9e86` succeeded. Independent review
  records PostgreSQL17.11, expected BEFORE P0001/exit3, AFTER48ACL checks and
  supplemental42501 denial probes, rollback and cleanup. Broad grants were
  deliberately injected. These are disposable synthetic results, not hosted ACLs.
  Artifact12139701246 expires2026-11-01; PR84 durably retains its original ZIP/result.
  Archive SHA256 d426612fbb1197e8e80b8b5a7cd8cfa97e24c2307af3fe786485cf0e416fbf62
  and member/source identities were independently reproduced (13 evidence checks).
- [Owner exact SQL definition decision](https://github.com/Ben-001-sys/Vellistry/pull/68#issuecomment-6251764080)
  covers only third migration blob `230b1540bb5b8962fd2b797d4f8a467d3c035978`
  for a future bounded plan. Earlier statements that this definition is unapproved
  are historical. Hosted apply, CLI login/dry-run, read-only inventory and Auth
  fixture creation remain **unapproved / OWNER_DECISION_PENDING**. No hosted access
  is authorized by the master mandate. Target remains vellistry-dev; no fresh
  cloud state has been observed.
- Signed-out unexpired **JWT** direct PostgREST exposure remains open. Grant
  hardening and frontend isolation do not prove immediate revocation.
- **G_DESIGN / G_CODE:** bounded coding exceptions do not promote global DAG gates.
  **G_PRIVATE_PILOT / G_RELEASE:** BLOCKED pending distinct security, recovery,
  product and owner decisions. No real manuscripts, paid calls or deployment.
- Read-only main protection inspection returned404; rulesets empty. Owner deferred
  settings for solo maintenance. Static provenance does not authenticate actors
  or prevent a malicious administrator bypass. No settings changed.

## Verified offline continuation — 2026-10-19

Issue81 offline readiness and corrected PR65/68 provenance are documented in
[PR84](https://github.com/Ben-001-sys/Vellistry/pull/84); all38 paths mapped:
5 unchanged ChatGPT paths,6 inherited with Codex changes,27 new PR68 paths.
A P2 provenance finding was fixed and independently rechecked. CLI version/help
could not run in the sandbox; no login/dry-run/hosted acceptance is claimed.
[PR85](https://github.com/Ben-001-sys/Vellistry/pull/85) preserves original authorship
while adopting only safe preflight helper/tests and package scripts;19 synthetic
preflight and66 Library tests/builds/checks passed locally and in fullCI. It does
not integrate SQL or application features. PR65/68 stay OPEN pending adoption.

[PR87 recovery proof](https://github.com/Ben-001-sys/Vellistry/pull/87) records an
actual missing non-ancestor commit failure, then corrected43-pin recovery. Clean
restored source passed15 handoff,8 entrypoint,66 Library and19 preflight tests plus
builds/checks. Corrupt-bundle and missing-file negatives failed as intended.
The retained anchored bundle survives fresh-clone GC/fsck/handoff verification.
Same host/root context: fresh independent AI/OS and hosted recovery NOT_RUN.
Four observed fullCI runs took147–178 wall seconds; job elapsed sums204–236s.
These are timings, not billable minutes, savings or model tokens.
Ledger38/42 now PARTIAL;41 remains PARTIAL;27 NOT_STARTED. Current totals:
**14 DONE /21 PARTIAL /4 BLOCKED /4 IN_VERIFICATION /1 NOT_STARTED =44**.
Full original acceptance blocks and earlier checkpoints remain in the ledger.

## Historical evidence retained

The [2026-10-18 archive](docs/reports/CURRENT-STATE-ARCHIVE-2026-10-18.md) preserves
the prior main state byte-for-byte; its pending-PR claims are dated evidence.
The [2026-10-16 archive](docs/reports/CURRENT-STATE-ARCHIVE-2026-10-16.md) also remains.
Historical PR #70 integration: main `a8751190073f682caabdc2897d8f64bc59ac9ebb`,
ready38970082388 and main38970500477 SUCCESS. These are historical, not latest-head
results. Accepted ADRs and original ChatGPT/Cursor authorship remain unchanged.

Accepted background remains linked:
[Waves1–3 owner recommendations](docs/history/2026-10-10-owner-waves-01-03-recommendations-accepted.md),
[bounded design entry](docs/history/2026-10-10-owner-delegated-mvp-design-entry.md),
and [BYOK HIS-20261010-003](docs/history/2026-10-10-owner-byok-free-or-paid-clarification.md).
Writers may supply free OR paid provider credentials; manual writing requires
none. These decisions do not certify hosted, pilot or release acceptance.

**INTERPRETATION:** the integrated controls permit bounded offline development;
they do not certify hosted security or release. **PROPOSAL:** independently review
Task0018, resolve the conditional integration boundary, then advance separately
scoped dependent tasks using fresh verified main.
