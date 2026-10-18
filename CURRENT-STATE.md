---
id: VEL-STATE-001
type: current-state
status: active
created_at: 2026-10-08
updated_at: 2026-10-18
owner: project_owner
version: 0.1.64
---

# Vellistry — current facts and next authorized work

## Checked repository checkpoint — 2026-10-18

**FACT:** live main is `fca0d96fd071f1165e3e16658d821a3d36a20293`.
[Post-merge CI39136089610](https://github.com/Ben-001-sys/Vellistry/actions/runs/39136089610)
is SUCCESS on that exact SHA. This is the starting checkpoint for Task0017,
not a prediction of its future merged SHA. Re-fetch main before each task.

PR75 governance (VEL-TASK-0008), PR76 compliance ([Issue #73](https://github.com/Ben-001-sys/Vellistry/issues/73)),
PR78 manual PG17 harness and PR80 language proposal are **MERGED**. PR77 is
closed without merge; its ChatGPT-authored language source was adopted through
PR80 with explicit provenance. LANGUAGE.md is present but proposed-owner-review;
its15 decisions are not all owner-approved.

| Open proposal | Current source / disposition |
|---|---|
| [PR #59](https://github.com/Ben-001-sys/Vellistry/pull/59) | Draft paused Cursor kickoff `5c7c8fb5d14020b2ef7ac3e8705ca06d9918cb85`; compare unique scope before supersession; do not reactivate. |
| [PR #65](https://github.com/Ben-001-sys/Vellistry/pull/65) | Draft ChatGPT preflight `604e1ebfd0baab930ee4dc39aecf7289dc64188a`; selective adoption/provenance review pending. |
| [PR #66](https://github.com/Ben-001-sys/Vellistry/pull/66) | Draft ChatGPT ADR `36da413fea67179ac8395af1cececd477fd193a2`; effective policy adopted through PR75; source comparison/disposition pending. |
| [PR #68](https://github.com/Ben-001-sys/Vellistry/pull/68) | Draft Codex continuation `cbb379fa4a4eaa9f576f3abcce2c2258d22cc551`; contains inherited PR65 source and obsolete CI edits. Never merge entire stale branch; Issue81 governs offline reconciliation. |

PR64 Library isolation is merged. Repository tests and disposable evidence do
not establish hosted acceptance. Issue63 remains open pending reconciliation of
its acceptance, Issue58 is paused, and Issue18 retains its independent-session
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
reviewer is advisory, never a second human approval. Task0017 covers state/ledger
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
  Artifact12139701246 expires2026-11-01; durable retention is upcoming scoped work.
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

## Historical evidence retained

The [2026-10-18 archive](docs/reports/CURRENT-STATE-ARCHIVE-2026-10-18.md) preserves
the prior main state byte-for-byte; its pending-PR claims are dated evidence.
The [2026-10-16 archive](docs/reports/CURRENT-STATE-ARCHIVE-2026-10-16.md) also remains.
Historical PR #70 integration: main `a8751190073f682caabdc2897d8f64bc59ac9ebb`,
ready38970082388 and main38970500477 SUCCESS. These are historical, not latest-head
results. Accepted ADRs and original ChatGPT/Cursor authorship remain unchanged.

**INTERPRETATION:** the integrated controls permit bounded offline development;
they do not certify hosted security or release. **PROPOSAL:** independently review
Task0017, resolve the conditional integration boundary, then advance separately
scoped dependent tasks using fresh verified main.
