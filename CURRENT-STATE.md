---
id: VEL-STATE-001
type: current-state
status: active
created_at: 2026-10-08
updated_at: 2026-10-17
owner: project_owner
version: 0.1.62
---

# Vellistry — current facts and next authorized work

## Issue73 compliance proposal checkpoint — 2026-10-17

**FACT:** checked main is `f371448538dafa92faebbef9bcda2a36c6ca1fa9` after
owner-merged PR75. Ready run38973835858 and actual main run38974225858 succeeded.
The a875119 checkpoint below is historical PR70 integration evidence. PR66 remains
open/draft and owner-disposition-only; PR65/68/59 heads remain unchanged.

Owner directly dispatched Issue73. Unique Task/CP0010 and source/trust design
were committed/validated before implementation; comment6226100456 is explicitly
coordinator-relayed authorization. Proposed [compliance policy](docs/agent-workflow/PR-COMPLIANCE.md)
adds static task/pack/scope/provenance/code checks to existing governance/final gate.
This is not actual LLM/human identity authentication or malicious-workflow-proof
protection. Initial fixed-base bootstrap is provisional pending owner adoption;
read-only main protection returned404 `Branch not protected` and rulesets[]; settings are not changed. Owner-controlled enforcement remains a rollout prerequisite. Draft remains red advisory; mandatory
ready/main security remains intact. [EB0010](docs/agent-workflow/execution-bundles/VEL-EB-0010.md)
will link actual final SHA/runs; independent review and owner acceptance pending.
No application/cloud/SQL execution, secret, paid call, merge or other PR edit.

## Historical checked repository checkpoint — 2026-10-16

**FACT:** merged main checked at `a8751190073f682caabdc2897d8f64bc59ac9ebb`.
[PR #70](https://github.com/Ben-001-sys/Vellistry/pull/70) is **MERGED**;
[ready CI38970082388](https://github.com/Ben-001-sys/Vellistry/actions/runs/38970082388)
verified source `fb6eeccef43dce7b44b53f41baabc47d93e3caa8` and
[post-merge main CI38970500477](https://github.com/Ben-001-sys/Vellistry/actions/runs/38970500477)
verified the main SHA above, both SUCCESS. These runs started actual steps;
they are not the historical zero-step runner failures on PR66/68.
This is a dated inspection checkpoint; re-fetch main/open PRs before new work.
At that earlier checkpoint the governance PR was not merged; PR75 has since merged as recorded above.

**CI:** [.github/workflows/ci.yml](.github/workflows/ci.yml) is the single automatic
workflow. Drafts run governance/advisory checks with a deliberately blocked stable
merge gate. Ready PRs run conservative applicable checks; main/manual dispatch run
full. All25 historical workflows are manual-only. Security before merge remains
mandatory. SQL privilege regression is SKIPPED because its PR68 source is absent;
this is not SQL acceptance. Billed minutes and actual classic protection enforcement
remain unverified. CI is not owner approval, author validation or release acceptance.

## Effective roles and source authority

**Owner:** decides scope, consequential policy/security/cost/database operations,
adoption and merge. **ChatGPT:** coordinator and independent source/CI reviewer.
**Codex:** primary implementer through unique authorized Task → committed sources →
immutable pinned ContextPack before edits → isolated worktree → actual tests and
ExecutionBundle → review → owner decision → post-merge reconciliation.
Coordinator write access is not coding approval. Alternate agents require an
explicit owner task exception. No second human approval is a standing requirement.

[ADR-0008](docs/decisions/ADR-0008-codex-primary-agentic-implementation-workflow.md)
preserves the owner's2026-10-14 role selection from ChatGPT-authored PR #66;
its original conversation permalink is still missing. Owner-selected decision
and repository integration are distinct. The Issue72 reconciliation is now merged through PR75; PR66 is not overwritten, closed or silently accepted.
See [AGENTS.md](AGENTS.md), [workflow](docs/agent-workflow/README.md), and
[operating model](docs/agent-workflow/IMPLEMENTATION-OPERATING-MODEL.md).

Authority order: owner-approved constitution/accepted ADRs and scoped owner
dispatch control; current Git/CI observations supply evidence; proposed plans,
coordinator issues and AI reviews do not promote decisions. Original sources,
source gaps and [SOURCE-OF-TRUTH](SOURCE-OF-TRUTH.md) retain their distinctions.
Commit authorship is not proof of executor identity. Automated task/executor
compliance remains separate Issue #73 work.

## Active tasks and proposals at inspection

| Item | Verified status / next dependency |
|---|---|
| [Issue #71](https://github.com/Ben-001-sys/Vellistry/issues/71) | Secondary44-item remediation dependency ledger; original checklist attachment unavailable. No claim all44 are complete. |
| [Issue #72](https://github.com/Ben-001-sys/Vellistry/issues/72) / VEL-TASK-0008 | Merged governance reconciliation through [PR75](https://github.com/Ben-001-sys/Vellistry/pull/75); [CP0008](docs/agent-workflow/context-packs/VEL-CP-0008.md), [EB0008](docs/agent-workflow/execution-bundles/VEL-EB-0008.md); child Task/CP/EB0009 retains archive-test assertions. Adopted through merged PR75; historical task reports retained. |
| [Issue #73](https://github.com/Ben-001-sys/Vellistry/issues/73) | PR-to-task compliance enforcement; owner-dispatched Task0010; static evidence checks proposed here with trust limitations and pending review. |
| [Issue #74](https://github.com/Ben-001-sys/Vellistry/issues/74) | Disposable PG17 privilege proof; not executed here. No migration approval. |
| [PR #66](https://github.com/Ben-001-sys/Vellistry/pull/66) | ChatGPT-authored DRAFT/OPEN, `36da413fea67179ac8395af1cececd477fd193a2`; owner alone decides adoption/closure after this separate reconciliation. |
| [PR #65](https://github.com/Ben-001-sys/Vellistry/pull/65) | ChatGPT-authored DRAFT/OPEN, `604e1ebfd0baab930ee4dc39aecf7289dc64188a`; origin preserved, not imported here. |
| [PR #68](https://github.com/Ben-001-sys/Vellistry/pull/68) / [Issue #67](https://github.com/Ben-001-sys/Vellistry/issues/67) | Codex continuation DRAFT/OPEN, `cbb379fa4a4eaa9f576f3abcce2c2258d22cc551`; distinct task0005, independent review and privileges approval pending. |
| [PR #59](https://github.com/Ben-001-sys/Vellistry/pull/59) | PAUSED historical Cursor kickoff, DRAFT/OPEN, `5c7c8fb5d14020b2ef7ac3e8705ca06d9918cb85`; do not reactivate. |
| PR64 / Issue63 | Library isolation merged at `4b3996ef7cda878e1af3d679454bd1bb873a79c2`; hosted acceptance still NOT_RUN. |

## Security holds and independent gates

- **Hosted Supabase acceptance NOT_RUN.** Owner-selected dev target is
  `vellistry-dev`; old observations are historical, not a fresh cloud audit.
  Original two-migration bounded approval in PR68 does not approve its **third
  privilege migration**, which remains **unapproved** and unapplied. No migration,
  fixture user, hosted operation, secret, paid call or real manuscript is authorized here.
- Signed-out-but-unexpired **JWT** access through direct PostgREST remains a
  private-manuscript/pilot blocker. Frontend isolation and disposable tests do
  not prove immediate database token revocation or hosted isolation.
- **G_DESIGN / G_CODE:** broad gates not promoted by this work; existing bounded
  owner coding exceptions (Library, CI, this governance task) authorize their
  slices only. The preparation DAG/validator remain pending and unchanged.
- **G_PRIVATE_PILOT / G_RELEASE:** separate security/privacy/recovery, product,
  legal/operational evidence and explicit owner decisions required. No task
  exception, green CI or merged architecture grants real-manuscript/release permission.
- Design/writer/accessibility validation, reliable export/recovery, source
  completeness, billing and protection evidence remain scoped follow-up work.

## Dated history and original decision trail

The [historical current-state archive](docs/reports/CURRENT-STATE-ARCHIVE-2026-10-16.md)
preserves the entire previous main file byte-for-byte. Its old PR64/70 draft,
setup, billing and design-stage claims are dated history, not active facts or
instructions. Older immutable packs remain historical inputs, never new approval.

Accepted background: [stack ADR0006](docs/decisions/ADR-0006-next-nest-supabase-implementation-foundation.md),
[Stage4 bounded handoff acceptance](docs/history/2026-10-10-stage4-independent-handoff-owner-accepted.md),
[Waves1–3 owner recommendations](docs/history/2026-10-10-owner-waves-01-03-recommendations-accepted.md),
[Wave6 bounded design entry](docs/history/2026-10-10-owner-delegated-mvp-design-entry.md).
[BYOK owner clarification HIS-20261010-003](docs/history/2026-10-10-owner-byok-free-or-paid-clarification.md): writers supply their own free OR paid provider credentials; manual writing requires none. These approvals retain their original limits; synthetic results are not product acceptance.

**INTERPRETATION:** corrected entrypoints enable bounded implementation and review
without treating planning or old state as permission. **PROPOSAL:** ChatGPT reviews
this exact submitted head and evidence; the owner decides reconciliation adoption
and PR66 disposition, then verifies merged main before dependent Issue73 work.
