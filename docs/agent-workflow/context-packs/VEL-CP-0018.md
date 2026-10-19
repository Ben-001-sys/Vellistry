---
id: VEL-CP-0018
title: 'Context for VEL-TASK-0018: STATE-RECONCILE amendment: conformant handoff and
  exact-head review'
type: context-pack
status: prepared
created_at: '2026-10-19'
version: 0.1.0
task_id: VEL-TASK-0018
base_commit: 39c22ed4641583e745bc0cfc1e80f5461861ab36
task_blob_sha: cfdb4373b2ce842d6e8310f3a3cb701c35f643ad
inputs:
- path: PROJECT-CONSTITUTION.md
  role: governing-source
  git_blob_sha: 61f79c4dcb47bd99291c16490e8c00692e2ab23b
  source_status: accepted
- path: AGENTS.md
  role: governing-source
  git_blob_sha: 2feca4ec9ee0f11f5b6ac089c1d5c826d0e043ce
  source_status: active
- path: SOURCE-OF-TRUTH.md
  role: governing-source
  git_blob_sha: d5bec6f59108ac84715d77b65836f4499194c3f1
  source_status: accepted
- path: CURRENT-STATE.md
  role: governing-source
  git_blob_sha: f4a903a4e3867580a9bff6c35a3c306b26e43fe1
  source_status: active
- path: docs/agent-workflow/PR-COMPLIANCE.md
  role: governing-source
  git_blob_sha: 5f4845623aef3abb15fba7fbe8e78474902cca00
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0018/MANDATE-PART-1.md
  role: governing-source
  git_blob_sha: 98f548d8240d77d4fdf0450d890964a7b9441f80
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0018/MANDATE-PART-2.md
  role: governing-source
  git_blob_sha: cd007fcf3a5d9a323a90bdc7dddc2e20030ebfc6
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0018/OWNER-DISPATCH.md
  role: governing-source
  git_blob_sha: a15bf6b2bccb07bd2e6339e5708f3205e0695d34
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0018/AMENDMENT.md
  role: bounded-correction-and-provenance
  git_blob_sha: 778e67b46275efe882487be563b25963d2583b6e
  source_status: unrecorded
source_gaps:
- id: AUTH
  limitation: Direct owner chat authorization; no fabricated GitHub approval. Issue71
    is index, not human authentication.
- id: SOURCES
  limitation: Original44-item file recovered separately; SRC001-004 research originals
    remain distinct.
- id: REVIEW
  limitation: Exact-head independent review and owner integration still required;
    standing delegation conditional on effective governance.
prepared_by: agent_workflow.py
---

# VEL-CP-0018 — STATE-RECONCILE amendment: conformant handoff and exact-head review

## Objective
Reconcile current repository facts and establish evidence-based44-item ledger without changing app, SQL, CI or approval authority.

## Scope
**In:** CURRENT-STATE.md; AGENTS.md; README.md; PROJECT.md; SOURCE-OF-TRUTH.md; docs/agent-workflow/README.md; docs/agent-workflow/IMPLEMENTATION-OPERATING-MODEL.md; docs/agent-workflow/PR-COMPLIANCE.md; docs/agent-workflow/tasks/VEL-TASK-0018.yaml; docs/agent-workflow/context-packs/VEL-CP-0018.md; docs/agent-workflow/execution-bundles/VEL-EB-0018.md; docs/agent-workflow/inputs/VEL-TASK-0018/*; docs/agent-workflow/PR-COMPLIANCE.yaml; docs/reports/VEL-MASTER-*; docs/reports/CURRENT-STATE-ARCHIVE-2026-10-18.md; docs/agent-workflow/inputs/VEL-TASK-0017/*
**Out:** App/SQL/CI/tests/dependencies and historical pack mutation; Hosted/secrets/private data/paid/admin/deployment/merge

## Evidence and authority constraints
The text below is a readable rendering of pinned Git blobs; exact raw bytes remain recoverable from the recorded commit/blob SHAs. Recorded source statuses remain in force: draft research is not accepted requirements. Original unarchived uploads are not independently verified merely by being mentioned.

**Known source gaps:**
- AUTH: Direct owner chat authorization; no fabricated GitHub approval. Issue71 is index, not human authentication.
- SOURCES: Original44-item file recovered separately; SRC001-004 research originals remain distinct.
- REVIEW: Exact-head independent review and owner integration still required; standing delegation conditional on effective governance.

## Permissions and acceptance
**Allowed:** Read live repository/issues/PRs/protections and local named original sources, Create task/source and pack commits before scoped documentation edits, Run validators and fullCI; push isolated branch, draftPR and evidence index
**Owner approval required:** Owner merge under current governing authority; no self-approval; Hosted/production/private/paid/admin/SQL/security operations and scope expansion
**Acceptance criteria:**
- Original checklist bytes/hash unchanged; exactly44 numbered entries, no invented DONE
- Current facts use live main and actualCI; historical status archived
- No new scope/permission or false hosted/JWT acceptance; all existing workflows untouched
- Actual governance checks and exact-headCI; distinct reviewer evidence or NOT_RUN

## Deliverables
- Committed source/task then immutable validatedCP before edits
- Compact current state with byte-preserved prior snapshot
- 44 individually numbered evidence entries preserving original acceptance and derived counts
- ExecutionBundle, actual checks, draft PR and independent review request

## Pinned source snapshots
Git commit: `39c22ed4641583e745bc0cfc1e80f5461861ab36`. Read source statuses independently from task intent.

### `PROJECT-CONSTITUTION.md` @ `61f79c4dcb47bd99291c16490e8c00692e2ab23b`

~~~~~~markdown
---
id: VEL-GOV-001
type: governance
status: accepted
created_at: 2026-10-08
updated_at: 2026-10-08
owner: project_owner
version: 0.1.1
evidence:
  - "User approval of the Git-plus-app knowledge approach, 2026-10-08; conversation reference pending archival."
related_adrs:
  - ADR-0001
  - ADR-0002
---

# Vellistry Project Constitution

1. **Preserve authorship and intent.** Support writers' decisions, distinctive voices, stylistic irregularities, and deliberate exceptions; avoid indiscriminate generic polishing.
2. **Preserve original sources.** Research summaries do not replace underlying documents; record provenance and distinguish direct quotations, supported findings, inference, and proposals.
3. **Separate evidence from decisions.** AI recommendations and research candidates never become authoritative simply by being recorded.
4. **Require traceability.** Requirements, ADRs, historical events, research records, and experiments receive stable IDs and linked sources or explicit evidence gaps.
5. **Require metadata for decisions and history.** Use YAML front matter, timestamps/date precision, lifecycle states, author/approval attribution, relationships, and supersession links.
6. **Maintain current state.** Update CURRENT-STATE.md whenever a task materially changes agreed progress, decisions, blockers, or next steps.
7. **Use controlled knowledge promotion.** Read authoritative context; submit proposed changes with evidence; verify and approve before marking accepted.
8. **Retain history.** Correct errors through traceable revisions or new corrective events; do not erase prior decisions or rewrite an event as though it never happened.
9. **Remain vendor-neutral.** Models, tools, and orchestrators should be replaceable where practical; document genuine constraints and trade-offs.
10. **Use least-privilege agent access.** Keep secrets out of Git, isolate sensitive/runtime author data, review consequential actions, and require human approval for high-impact changes.
11. **Keep systems proportionate.** Begin with Git/Markdown, lightweight templates, and repeatable manual research; add automated context assembly, durable workflows, and additional stores only if tests justify them.
12. **Version code and knowledge together where appropriate.** Application and its engineering knowledge belong in one repository, while user manuscripts and runtime personal information require separate application storage.

## Status hierarchy
Accepted and effective decisions take precedence over proposals. Superseding decisions must explicitly reference what they replace. Research notes are evidence, not approval.

## Solo-maintainer review policy
Vellistry currently has one human contributor: the project owner. The owner may review and merge their own pull requests after appropriate inspection and required automated checks. A separate human reviewer is **not** a standing requirement during this phase. AI-agent review may provide independent analysis but is advisory, not another human approval. For consequential architecture, security, or production changes, the owner's explicit approval remains required. Revisit the policy when collaborators join. See HIS-20261008-002.

## Change control
Propose amendments in version control with rationale and evidence. Material changes require owner approval, an updated changelog/history event, and a corresponding CURRENT-STATE update.
~~~~~~

### `AGENTS.md` @ `2feca4ec9ee0f11f5b6ac089c1d5c826d0e043ce`

~~~~~~markdown
---
id: VEL-AGENT-001
type: agent-instructions
status: active
created_at: 2026-10-08
updated_at: 2026-10-18
version: 0.1.7
---

# Instructions for Vellistry Research and Development Agents

## Read in order
1. PROJECT.md and PROJECT-CONSTITUTION.md.
2. SOURCE-OF-TRUTH.md and CURRENT-STATE.md.
3. Relevant accepted ADRs and requirements.
4. Task-specific ContextPack and original sources.
5. Related history, experiments, and execution reports if relevant.

## Product language and UX copy (LANGUAGE.md)

- Before any change to user-facing navigation, page names, buttons, forms, dialogs, status messages, errors, tooltips, accessibility labels, onboarding, AI consent or export wording, read root `LANGUAGE.md` alongside the relevant accepted product requirements and current implementation.
- Follow `LANGUAGE.md` for owner-approved product terminology. Reuse canonical names consistently while allowing explicitly documented contextual short labels; preserve distinct concepts such as manuscript vs notes, AI suggestion vs accepted revision, suggested fact vs approved canon, and local recovery vs confirmed save.
- Verify what the interface and backend actually do before using success, save, privacy, cost, cancellation, deletion or provider-availability claims. Do not expose internal transport codes as author-facing text or mark proposed/future features as implemented.
- If a needed term is absent, proposed, disputed or inconsistent with approved scope, record the current wording, candidate, affected surfaces and supporting evidence for owner review. Do not silently make a new canonical decision or rename unrelated concepts.
- `LANGUAGE.md` governs visible words, not database fields, API routes, internal identifiers, source archives, accepted ADRs, or integration contracts. Do not change those solely to match display labels.
- Include user-facing copy/state checks and relevant accessibility/negative tests in the task ExecutionBundle. Do not change the language contract or add automation enforcing it outside the owner-authorized Task → ContextPack → implementation → review workflow.

## Primary agentic implementation workflow (ADR-0008, owner-selected 2026-10-14)

**Codex is the default bounded code implementer.** ChatGPT is the architect/task coordinator and exact-head reviewer; GitHub is the source of truth; the owner approves consequential scope, cloud database operations, PR merge and release. Read [ADR-0008](docs/decisions/ADR-0008-codex-primary-agentic-implementation-workflow.md) and the latest `CURRENT-STATE.md` before preparing/accepting new code tasks. Older Cursor workflows are historical; Cursor may be an editor or explicitly reassigned agent, never silently the default.

Default sequence: **owner-approved task → ChatGPT ContextPack/spec/negative checks → Codex in isolated branch/worktree → actual tests + ExecutionBundle → ChatGPT source/CI review → owner merge decision → verify merged `main` and update state**. Record the actual executor; do not reattribute a ChatGPT-made PR to Codex or invent a successful Codex dispatch. Never let Codex self-approve remote migrations, secrets, real manuscripts, costs or deployment.

## Operational task handoff

Use [the merged operational workflow](docs/agent-workflow/README.md): unique owner-authorized Task → committed governing sources → generated, validated, committed immutable ContextPack **before implementation** → isolated work → actual tests and ExecutionBundle → ChatGPT independent source/CI review → owner decision → verify merged main. Never overwrite a dispatched pack; material scope changes require an authorized amendment/new pinned ID. Current examples include merged PR70 Task/CP/EB0006–0007; PR68's0005 remain a distinct draft.

**Qualifying implementation** includes application, tests, SQL, CI, executable tooling and changes to effective agent instructions/approval contracts. Codex implements these through the bounded handoff. Coordinator write access is not coding approval. Another executor requires an **explicit owner task exception**, identifying scope and executor; record provenance. Commit author strings do not authenticate runtime identity.

**Lightweight governance** means coordinator triage, source indexing, draft task preparation and review/evidence comments that do not implement executable changes, alter effective instructions or promote decisions. These remain attributed, source-linked and reviewable; task preparation is not dispatch or owner acceptance. This exception cannot be used to alter CI, tests, security, agent authority or accepted decisions.

No automatic PR-to-task enforcement is claimed as authenticated identity or owner approval; [Issue #73](https://github.com/Ben-001-sys/Vellistry/issues/73) now has a proposed [static compliance contract](docs/agent-workflow/PR-COMPLIANCE.md) under Task0010. Its base-anchored checks, provisional bootstrap and owner-protected review limits must be inspected before adoption. Read the current [operating model](docs/agent-workflow/IMPLEMENTATION-OPERATING-MODEL.md) for design/coding task exceptions versus private-pilot/release gates.

## Duties
- Report what is **FACT**, what is **INTERPRETATION**, and what is **PROPOSAL**.
- Preserve source framing and provenance; do not invent missing requirements or infer approvals.
- Respect accepted decisions; flag conflicts instead of silently resolving them.
- Use stable IDs and YAML metadata for ADRs, history events, research and reports where schemas apply.
- Keep original reasoning and options visible when an ADR becomes superseded.
- Produce ExecutionBundles with work completed, evidence, limitations, changed files, tests, and proposed knowledge updates.
- The project currently has **one human contributor**, the owner. Before consequential changes are merged, present evidence, risks, and a review checklist for the **owner's self-review and explicit approval**. Do not request a second human review as a hard requirement; optional AI review is advisory, not human approval. Do not modify accepted decisions silently.
- Never place API keys, passwords, manuscript personal data, or secrets in the repository.
- Avoid overengineering. Do not create code, services, or new architecture merely because an archived research document mentioned them.
- When revising user-authored creative material, prioritize writer intent and context over a mechanical set of anti-AI rules.

## Done means
A task is done only when its deliverables are present, evidence and metadata are supplied, verification status is accurately described, and CURRENT-STATE.md has been adjusted if project status changed.
~~~~~~

### `SOURCE-OF-TRUTH.md` @ `d5bec6f59108ac84715d77b65836f4499194c3f1`

~~~~~~markdown
---
id: VEL-GOV-002
type: governance
status: accepted
created_at: 2026-10-08
updated_at: 2026-10-16
owner: project_owner
version: 0.1.3
related_adrs:
  - ADR-0001
  - ADR-0002
---

# Source of Truth and Knowledge Ownership

## Engineering authority
- **Git repository:** canonical engineering documents, code, accepted project decisions, research evidence references, specifications, and change history.
- **CURRENT-STATE.md:** compact, current working status; not a substitute for full evidence.
- **ADRs:** accepted or proposed technical and knowledge-governance decisions, with rationale, alternatives, approval and supersession lineage.
- **Source register:** where original research came from and where an immutable/retrievable copy can be found.
- **Feature inventory:** [docs/features/FEATURE-INVENTORY.md](docs/features/FEATURE-INVENTORY.md) is the reviewable index of discussed feature candidates and source/status links. **It is not an accepted product backlog, release plan, substitute for original source evidence, or approval of proposed features.**
- **Git history and pull requests:** revision provenance; do not substitute automatically for semantic record metadata.
- **ChatGPT and other agents:** analysis and proposal tools, not an independent source of architectural authority.

## Separate runtime authority
Future authors' manuscripts, story canon, application settings, credentials, and stored assets belong in purpose-selected runtime storage, not automatically in the Git engineering knowledge base. The accepted Next.js/NestJS/Supabase baseline is recorded in ADR-0006; the owner subsequently selected Supabase Cloud for development. This is not production hosting or real-manuscript approval; no live database state is inferred from old records.

## Five knowledge layers
1. Authoritative accepted project and implementation knowledge.
2. Current verified implementation/research state.
3. Historical rationale, experiments, rejected/superseded alternatives.
4. Temporary task-local agent context and unapproved hypotheses.
5. Evidence, provenance, authorship, validity, confidence, and traceability.

## Read → Propose → Review → Commit
1. Read the relevant accepted records and source citations.
2. Clearly label new assumptions, findings, recommendations, and uncertainties.
3. Review source fidelity and factual verification independently.
4. Promote material changes only after owner approval; update linked records and current state.
5. When superseding an ADR, preserve the older file and connect both sides of the lineage.

## PR review and sole owner authority
At present the project has a single human contributor. The owner performs self-review and makes the final merge/acceptance decision. A distinct human PR approval is not required. Automated CI and optional AI-agent reviews provide evidence and feedback; agents do not have approval authority. For significant changes, document the owner's review and decision in the PR or associated provenance record. GitHub does not count self-review as a separate approving reviewer; this workflow must not assume otherwise. If branch-protection settings require other human approvals, review the protection policy rather than fabricate reviewers. See HIS-20261008-002.

## Metadata and history
See [docs/governance/RECORD-SCHEMAS.md](docs/governance/RECORD-SCHEMAS.md). All ADR and historical-event records require YAML front matter and meaningful content.

## No silent conflation
The terms *verified evidence*, *accepted requirement*, *approved decision*, *implemented*, and *tested* are different. Never mark one as another without supporting evidence.

## Current task authority and provenance

[AGENTS.md](AGENTS.md) and [ADR-0008](docs/decisions/ADR-0008-codex-primary-agentic-implementation-workflow.md)
express the owner-selected execution roles: ChatGPT coordinates and reviews;
Codex implements authorized bounded tasks; the owner alone approves consequential
scope, adoption and merge. Coordinator write access is not coding permission.
Lightweight triage/indexing/review does not grant authority to change effective
instructions or executable behavior. Any alternate implementer requires an
explicit owner task exception. Git commit author names do not prove runtime identity.

Use the compact [current checkpoint](CURRENT-STATE.md); its dated historical
archive is evidence, not active dispatch. Original source gaps remain gaps.
PR66's prior ChatGPT records are adopted with per-file source SHA attribution,
not relabeled Codex execution. This reconciliation proposes no semantic change
to accepted architecture or owner authority.
~~~~~~

### `CURRENT-STATE.md` @ `f4a903a4e3867580a9bff6c35a3c306b26e43fe1`

~~~~~~markdown
---
id: VEL-STATE-001
type: current-state
status: active
created_at: 2026-10-08
updated_at: 2026-10-17
owner: project_owner
version: 0.1.63
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
read-only main protection returned404 `Branch not protected` and rulesets[]; settings are not changed. The owner explicitly deferred branch protection for the sole-maintainer phase, accepting that enforcement risk; it is not an additional blocker for this bounded review. Independent source/CI review and owner merge decision remain pending. Draft remains red advisory; mandatory
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
~~~~~~

### `docs/agent-workflow/PR-COMPLIANCE.md` @ `5f4845623aef3abb15fba7fbe8e78474902cca00`

~~~~~~markdown
# PR-to-task compliance v1 — proposed under Issue73

This is repository evidence validation, not authenticated LLM identity or owner
approval. The owner still decides adoption, exceptions, final acceptance and
merge. No branch-protection/admin change is made by this implementation.

## Required evidence for qualifying changes

All paths qualify except narrowly inert `.md/.txt/.rst` research/report triage
under `docs/research/` or `docs/reports/`. Unknown files, application/auth/SQL,
tests/tools/CI, root instructions, decisions, tasks, approval records and policy
always qualify. Add/delete/rename paths are inspected without rename elision.

A qualifying range must add one new Task ID absent from its change base, with
`compliance` metadata pinned into the existing ContextPack before implementation:

| Task field | Required meaning |
|---|---|
| change_base | Exact evaluated merge-base SHA, not an arbitrary old phase. Rebase/base drift requires an authorized fresh amendment/pack. |
| phase | Exact phase matched by manifest. PhaseA cannot silently authorize PhaseB. |
| executor | Codex by default; explicit alternate requires an owner-verifiable record already in reviewed base. |
| allow_paths | Explicit relative paths/globs, constrained independently from prohibited secret/SQL operations. |
| authorization | Linked repository issue/comment; source provenance; authorized status and expiry date. Superseded/expired/missing fails. Linked text is not human identity proof. |
| forbidden_actions | hosted, production, private-manuscripts, paid-services, admin, merge. A role exception cannot waive these. |

The existing task/pack/bundle schema is preserved. The compliance checker loads
`agent_workflow.py` from reviewed base to validate task/source blob SHAs and the
complete immutable rendered pack. Live task may advance lifecycle/updated date;
material permission, scope, phase or source changes require new task/pack, not
editing the dispatched artifact. Qualifying old PRs are not grandfathered: prepare
a new bounded task and retain externally authored origins.

## Manifest, code binding and self-reference

`docs/agent-workflow/PR-COMPLIANCE.yaml` selects the task, pack commit, source
commit, bundle, phase and executor. It declares each prior range commit by exact
SHA and original/adopted origin, plus an explicit `current_head` declaration
resolved by CI to the actual event HEAD. Adopted records retain original executor,
original commit, linked source and matching Git patch. Git author names are not
used to infer who ran an agent. Undeclared cherry-pick trailers or contradictions
fail; a coordinated false declaration still requires human/source investigation.

The pack must already exist in an ancestor commit before every operative edit.
The EB's implementation_source_commit equals the manifest source commit, and
all operative blobs at current HEAD must still match that source. A source
commit followed by report/manifest-only evidence avoids requiring a commit to
contain its own SHA. Report artifacts exclude executable/config extensions.
CI prints actual head/base/source; final run evidence is appended to the PR
ledger after the last commit exists. A later code change needs fresh tests and
new source evidence. Missing EB/head evidence, empty/failed/NOT_RUN/BLOCKED tests
or contradictory declared execution are non-passing.

Tests/executor entries are attestations with linked raw evidence, not a proof
that arbitrary commands actually ran. The independent reviewer checks artifacts
and actual CI runs. `owner_disposition: pending`, proposed-for-review bundle and
pending owner review are mandatory during implementation CI. Green review alone
cannot set accepted state. Owner acceptance is external to this pre-merge gate;
follow-up record promotion is reviewed separately, never forged by the agent.

## Owner-verifiable exceptions and SQL

A coordinator may index sources or prepare an inert research/report review
without implementation evidence. That exception cannot change effective agent
instructions, tasks, CI, tests, SQL or approval contracts.

For an alternate executor, the owner first records an explicit task-scoped
exception in reviewed main at `docs/agent-workflow/authorizations/VEL-TASK-NNNN.yaml`:
`task_id`, `status: owner-verified`, `approved_by: project_owner`,
`kind: executor-exception`, exact `executor`, and linked `evidence`.
Codex cannot create that record in its own implementation candidate and thereby
approve itself. The owner independently verifies the linked authorization and
adopts it through the existing review process. No protected setting is altered.

Any SQL path also requires a separate reviewed-base owner record with
`kind: migration-path-approval`, exact `paths` and linked `evidence`; explicit
allowlist alone does not suffice. This is permission to propose those files,
not to execute hosted migrations. The third PR68 migration remains unapproved.
Changing a scoped task or adding a record is not a grant of database execution,
private manuscripts, paid calls, production, admin changes or merge.

## CI placement, evaluated trust and bootstrap

The ONE automatic Vellistry CI retains all original app/security/recovery jobs,
25 manual historical workflows and draft-aware routing. Cheap static validation
runs in governance and independently at the final gate; governance emits a
required `compliance=pass` result. Missing/failing evidence cannot be hidden by
green security jobs. Draft governance may pass, but the stable gate deliberately
blocks until ready/full verification, as before. No privileged PR target event,
extra token, API scope, duplicate build, service or orchestrator is introduced.

The loader extracts evaluator and existing pack validator from PR event base,
not candidate Python imports. Candidate contents are treated as data. Push-main
uses before; a two-parent owner merge must have an unchanged implementation tree,
which is validated at its branch head and reported separately from the merge SHA; manual feature runs use fetched origin/main. Same-head manual main
is unchanged baseline, with required control-source/workflow presence checked.
No retroactive recertification of all historical merged tasks is attempted.

The initial base `f371448538dafa92faebbef9bcda2a36c6ca1fa9` lacks the evaluator.
Only that baseline with Task0010 and its exact committed pack permits candidate bootstrap, visibly PROVISIONAL and subject
to owner first-adoption review; existing pack verifier still comes from base.
Subsequent unknown/missing baseline evaluators fail. This initial task is not
blocked by a requirement to have already merged itself. Changing this bootstrap
or loader is a security-sensitive control change requiring independent review.

A PR can change its workflow/loader and tests. Required file presence, unconditional
step contracts, negative-test discovery, task scope and code binding detect
accidental/suspicious weakening when the checker runs; they do not make an
unprotected workflow malicious-contributor-proof. The owner must require the
stable check and protect/review control changes using available repository
settings. Read-only inspection on2026-10-17 returned HTTP404 `Branch not protected`
for classic main protection and an empty ruleset list. We do not change settings.
The owner must decide/configure actual required-check and protected-control review
before claiming repository-level merge prevention; plan eligibility was not queried. Manual fallback: owner verifies trusted-base checker/diff, immutable
pack and scope, actual exact-head CI, provenance and linked authorization before
any merge. STOP for owner decision if a future requirement needs privileged
scopes or protection changes. This is the explicit remaining enforcement limit.

## Acceptance / attack matrix

| Case | Expected result |
|---|---|
| Missing task/pack/EB, changed rendered pack/source pin | Fail |
| Wrong base, reused task, phase extension, retroactive allowlist | Fail; new authorized amendment |
| Unauthorized app/CI/SQL path; SQL without base approval | Fail |
| Missing/expired/superseded authorization; alternate without base exception | Fail |
| ChatGPT implementation mislabeled Codex; missing model/origin/head | Fail on detectable contradiction |
| Adopted ChatGPT commit with actual origin/patch retained | Pass structural evidence; authorship preserved |
| Failed/NOT_RUN/BLOCKED execution; review promoted to owner acceptance | Fail |
| Inert docs-only triage | Pass documented exemption; no owner acceptance inferred |
| Deleted/empty compliance test/checker, skipped check or missing gate output | Fail when trusted check executes |
| Candidate replaces evaluator | Base evaluator executes; workflow/loader bypass still requires protected review |
| Draft / ready / main / full | Same evidence rules; original draft/security semantics preserved |

Local fixtures are synthetic repository tests, not a malicious live PR, hosted
security acceptance or independent human approval. Actual final-head runs and
review limitations belong in VEL-EB-0010 and its linked evidence ledger.

## Review correction01 — final invocation and event coverage

The static contract now requires the actual final `python scripts/ci_policy.py gate`
step, exact complete `CI_NEEDS: ${{ toJSON(needs) }}` input and terminal position.
Mandatory steps cannot be skipped or softened by continue-on-error, custom shell,
working directory or injected execution defaults. Foundational governance must
execute, and expensive job guards retain their existing classification conditions.
All six PR activities and unfiltered push-main/manual coverage must remain;
removing a ready/synchronize event or adding event path/base filters fails.

The gate-policy implementation `scripts/ci_policy.py` still executes from the
candidate checkout. Structural invocation checks do not establish the semantics
of maliciously rewritten Python. Owner-protected independent source review is
explicitly required for that file, the evaluator, loader and calling workflow,
including first-adoption bootstrap. A future trusted gate-policy loader would
need a separately reviewed design; none is silently introduced by this correction.
No branch protection, actor authentication or cryptographic tamper-proof claim.

## Review correction02 — token permissions and regression runner

All jobs must inherit workflow-level `contents: read`; any job `permissions`
override is rejected, including read-only/empty mappings and OIDC write access.
Governance must contain exactly one `python scripts/ci_governance.py` regression
step. Its command is exact and unconditional: no conditional, continue-on-error,
alternate shell, working directory or injected environment is permitted. Duplicate
invocations, including under another name, fail. Actual workflow is unchanged.

The owner explicitly deferred branch protection for the sole-maintainer phase,
accepting the enforcement risk. Earlier protection observations above are history;
settings are not an additional rollout blocker for this bounded review. No claim
of enforced repository-level merge prevention follows. Owner source/CI self-review
and the final merge decision remain required; this task changes no settings.
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0018/MANDATE-PART-1.md` @ `98f548d8240d77d4fdf0450d890964a7b9441f80`

~~~~~~markdown
# Vellistry — Unified Codex Remediation, PR Integration, Supabase Readiness and MVP Implementation Mandate

**Owner-authorized master assignment — 18 October 2026**  
**Repository:** https://github.com/Ben-001-sys/Vellistry  
**Last verified `main` checkpoint:** `fca0d96fd071f1165e3e16658d821a3d36a20293`  
**Last verified post-merge CI:** https://github.com/Ben-001-sys/Vellistry/actions/runs/39136089610  
**Master tracker:** https://github.com/Ben-001-sys/Vellistry/issues/71  
**Offline PR68 reconciliation:** https://github.com/Ben-001-sys/Vellistry/issues/81

## 0. Mission and authoritative interpretation

You are **Codex, Vellistry's primary code implementer** under ADR-0008. The owner instructs you to complete the work of BOTH prior mandates as **one continuous program of small, governed, verified tasks**:

1. Revalidate and finish the **44-item agentic coding remediation checklist**, not just its prior estimated status counts.
2. Resolve **every currently open PR and relevant stale issue** by evidence-based merge, selective adoption, or documented supersession/closure. **Resolve does not mean merge every branch.**
3. Reconcile canonical project knowledge, current-state documents, agent instructions, and product-language decisions LANG-P01–P15.
4. Reconcile PR68's hosted Supabase preflight and precisely pinned third privilege-hardening migration; preserve the real PostgreSQL17 security evidence and independently handle hosted and JWT gates.
5. After the repository-remediation prerequisites are truly met, implement the **next production author experience**, including book/chapter organization (IMP-002), AI-off Tiptap/ProseMirror editing (IMP-003A), and durable save/revision/recovery (IMP-003B) in bounded slices.
6. Convert the independent **Lovable synthetic UX QA findings** into relevant negative production tests. Keep Lovable independent from the GitHub production app.
7. Finish with exact-head and merged-main evidence, honest readiness decisions, and a complete handoff so development can continue safely.

The existing Git-first knowledge/control plane, accepted Vellistry MVP, eleven author journeys, 149-ID crosswalk, security boundaries and eight MVP areas control scope. Do not invent features because an early AI-writing blueprint mentioned a publishing studio, collaboration, cover generation or series functionality. Distinguish the long-term product vision from the narrower approved MVP.

**Start work, not just planning.** Work serially through dependent PRs and continue independent eligible work if one is blocked. This is **one mandate, not one giant PR**, not one immutable ContextPack, and not permission to skip normal governance.

## 1. Explicit owner authorization and operational limits

I, the Vellistry owner, explicitly authorize you for this assignment to make well-supported, routine engineering, language, architecture-within-accepted-ADRs, refactoring, prioritization and implementation decisions; create and update scoped repository tasks, immutable packs, ExecutionBundles, branches, tests, docs and issues; run local and disposable CI tests; push branches; request actual independent review; and correct/retry implementation until verifiable. Do **not** interrupt for ordinary reversible details such as naming a component, resolving a local test failure, selecting a verified Tiptap extension or creating a new valid Task ID.

**Repository-only integration delegation:** The owner wishes eligible, reviewed remediation PRs to be merged and obsolete PRs closed, not left indefinitely as drafts. You may perform repository-only merges/closures under this standing instruction **only if** the effective GitHub/project governance permits delegated execution, the exact merged source is independently reviewed, all applicable non-advisory checks genuinely pass at exact SHA, the changed scope is within an authorized Task, no additional owner-reserved decision is implicated, and the merge commit plus post-merge CI are verified. Otherwise leave the PR ready for the single required owner decision and continue the queue. Do not treat Codex's own self-review as independent. Do not convert a draft-advisory red run into a passing ready-state gate or temporarily weaken checks merely to merge. Do not force-push another executor's branch.

**Not authorized merely by this broad mandate:** any hosted Supabase connection (even read-only), CLI authentication or cloud dry-run, migration application or reset, creation of cloud Auth fixtures, credential retrieval, production deployment, domain/billing/account/security-setting changes, paid model calls, private manuscript access, destructive real-data operations, or waiving G_PRIVATE_PILOT/G_RELEASE. Existing narrower past authorizations must be inspected, not expanded by inference; if a specific action still requires new explicit target/action approval, prepare the exact action-specific decision packet and mark that action **OWNER_DECISION_PENDING**. Keep progressing offline. Do not ask for a single sweeping approval that obscures exact SQL and target.

Do not change the approved Next.js16/React19 + NestJS11 + Supabase Auth/PostgreSQL/RLS + Tiptap3 architecture; introduce another authentication authority; add unnecessary microservices, vector DBs, orchestration engines, paid tools or vendor lock-in; handle real writing content; publish/deploy Lovable; or alter production by claiming that synthetic UX is production code.

If a fresh owner decision is granted later, record its exact statement, target, prohibited actions and source before the sensitive task. Never fabricate a GitHub approval URL, actual model identity, reviewer session or CI result.

## 2. Mandatory live preflight and source precedence

Fetch `origin/main`, all PRs (open/draft/merged/closed), current issues, branch relationships, recent CI runs, protections/rulesets and the exact current code. Record actual SHAs and dates; the checkpoint above is historical. Do not discard uncommitted Windows/worktree changes or replace a collaborator/agent branch.

Read, in authority order:

- `PROJECT-CONSTITUTION.md`, `PROJECT.md`, `SOURCE-OF-TRUTH.md`, `CURRENT-STATE.md`, `AGENTS.md`, accepted ADRs (especially ADR-0003 Tiptap, ADR-0004 portability, ADR-0006 stack, ADR-0007 guidance provenance, ADR-0008 Codex roles).
- `LANGUAGE.md` as a **merged proposed-owner-review candidate**, not 15 already-approved UI decisions.
- `docs/agent-workflow/README.md`, `IMPLEMENTATION-OPERATING-MODEL.md`, `PR-COMPLIANCE.md`, effective compliance/CI scripts and tests, existing Task/ContextPack/ExecutionBundle conventions, original authorization and provenance evidence.
- MVP-scope decision, master implementation plan, PLAN-01 149-feature crosswalk, PLAN-02 data architecture, PLAN-03 UX navigation/states, PLAN-04 security/recovery, eleven journeys, chapter-save specification, latest acceptance and research evidence.
- Actual production `apps/web`, `apps/api`, `supabase/migrations`, and existing disposable security experiments. Read any applicable framework docs from authoritative sources if APIs have changed.
- Original **44-item checklist in the appendix below** (a source transcription supplied with this mandate). Search for the actual owner-provided `.md` original and verify its bytes/hashes if accessible; do not misrepresent a transcription as an original-byte archive. Read relevant original fiction-writing research/blueprint as *product research*, with accepted scope taking precedence.

When claims conflict, distinguish **owner decision / accepted source / checked merged main / PR proposal / historical checkpoint / synthetic experiment / real hosted acceptance**. Document contradictions before changing code. A green CI job verifies only what it actually ran.

## 3. Governance execution protocol, repeated for EACH scoped task

Use the effective process, not a hypothetical one:

**Owner-scoped objective -> globally unique VEL-TASK -> pre-edit committed sources -> generated/validated/committed immutable Git-pinned VEL-CP -> isolated Codex worktree -> real implementation and negative tests -> VEL-EB factual evidence -> exact-head full CI and independent review -> permitted merge -> post-merge full CI / tree integrity -> issue/ledger/current-state reconciliation.**

- Allocate IDs absent from current main and all relevant active/historical refs. Historical Task/CP0012 collisions are NOT to be erased or reused. Inspect ID collisions with PR77, blocked security branches and Task0013–0016.
- Do not mutate or retrodate an immutable ContextPack. New material scope or permission needs a recorded amendment and newly pinned pack.
- Name explicit file/path allowlists, forbidden operations, dependencies, acceptance/negative tests, and time-limited authorizations. Treat code, CI, validators, SQL, root agent instructions and decisions as qualifying implementation, not exempt cosmetic docs.
- Preserve original ChatGPT, Cursor and Codex provenance on adopted/cherry-picked content. Commit author labels are NOT authenticated evidence of a model's execution; record actual tool/runtime and limits.
- Exact commands, return codes, fixtures, test counts, final SHA, CI URLs, changed files, constraints, rollback, FACT / INTERPRETATION / PROPOSAL and PASS/FAIL/BLOCKED/NOT_RUN are mandatory. Do not claim cold-start independence from a same-session check or independent approval from Codex itself.
- CI remains consolidated, with intentionally blocked draft merge gates, conservative applicable ready-PR checks, full main/manual verification and historical workflows manual-only. Do not resurrect obsolete automatic workflows or silently skip security/recovery.
- Inspect merged tree after every PR. Correct failed main post-merge tests before dependent merges.

## 4. Program control: full 44-item audit and remediation

The second prior mandate supplied an **unverified checkpoint** of DONE14, PARTIAL21, BLOCKED5, NOT_STARTED4. Its purported completed numbers (02,05,06,10,20,21,22,25,26,28,29,31,34,43) are **candidate historical assessments, not truth**. For instance #05 was demonstrated by a real disposable PG17 run; #06 concerns a narrow **SQL definition** approval and not a hosted apply.

Audit EACH of the 44 original numbered requirements in the annex, preserving wording and numbering. Create a canonical durable ledger on a new governed branch and keep Issue #71 as its index. For every entry: original acceptance text, exact beginning evidence, current status, branch/issue/PR, dependencies, executor, original source links, expected negative tests, actual command/run evidence, proposed work, owner gate, final result/limitation and date/SHA. Derive counts from observed evidence, not from the supplied estimates. Use DONE/PARTIAL/BLOCKED/NOT_STARTED/IN_VERIFICATION consistently.

Group execution by dependency, not numerical order:

- Governance/CI/current truth: 01,02,10–15,17–26,28–35,44.
- PR conflicts, security/hosted readiness: 03–09,36,37,39.
- Original sources, independent cold-start, recovery: 16,27,30,38,41.
- Product acceptance traceability and workflow metrics: 40,42.
- Orchestration restraint: 43.

Avoid a 44-file paper exercise: implement demonstrably missing checks, produce real negative evidence, and retain already functional controls. Respect the owner's earlier solo-maintainer branch-protection deferral; record what remains technically bypassable instead of pretending static compliance authenticates humans. Do not touch GitHub account/payment/security settings without specific authorization.

## 5. PR closure and integration policy — complete ALL live PR dispositions

At preflight, inspect live PRs, but as of this mandate the open set was **#59, #65, #66, #68**. PR75/76/78/80 are merged and PR77 is closed-unmerged, with the source of PR77 adopted through #80. Verify status again rather than relying on this sentence.

**#59 — paused Cursor Library kickoff:** compare actual unique scope against merged #64 and current main. Do not merge stale implementation for the sake of closure. If superseded, retain source links and close with a truthful explanation; reconcile Issue #58 and dependent #63.

**#65 — ChatGPT-authored hosted configuration proposal:** inspect all its source, tests, env examples and any currently missing safe configuration guard. Adopt valid still-needed parts into a fresh Codex-owned main-based implementation branch, preserving ChatGPT origin in commits/manifest/EB. Close #65 as superseded only AFTER successful adoption or a documented decision that remaining contents are unnecessary. Never hide the source relationship with #68.

**#66 — original ChatGPT Codex ADR:** compare every significant paragraph with merged ADR-0008 and effective `AGENTS.md` from #75. Adopt any genuinely missing, approved unique content through a scoped governed PR; otherwise close #66 as superseded, preserving history and approval distinction.

**#68 — PR of greatest security sensitivity:** do NOT merge, rebase, cherry-pick or squash its entire old branch. Start with offline Issue #81; compare exact code, PR65 inherited sections, migrations/tests, obsolete `implementation-foundation.yml`, and current `ci.yml`. Map what to *preserve*, *selectively adopt* or *exclude*. Use a new current-main Codex task and PR(s) for valid hosted preflight, third migration definition, regression source and accurate evidence. Preserve original SQL bytes/provenance; exclude stale automatic-workflow edits and stale CURRENT-STATE snapshots. Run actual full current CI and focused negative privilege/preflight tests. Close/supersede #68 only once successor adoption and residual hosted execution holds are separately recorded. For migration-sensitive repository integration, respect any owner-reserved distinct merge decision.

**#77/#80:** confirm #77 closed without merging and #80 is integrated. Do not reopen or duplicate historical language content. Preserve proposed status pending LANG decision dispositions.

**Other older/newer PRs:** list every actual open PR and make a source-based disposition, including any discovered after task start. Close issues only when all issue acceptance checks—not merely the associated PR—are actually satisfied. Resolve Stage3 #18, paused #58 and progressing #63 accurately.

**Merge quality gate:** correct task/pack/EB, independently reviewed exact submitted code, actual eligible ready PR CI success (not red draft advisory), checked no sensitive cloud operation, preserve history, true owner-delegated authority, normal merge strategy, verified post-merge main run, then issue+state reconciliation. If any gate cannot be met, leave the PR review-ready and record precise remaining approval; continue another eligible workstream. Never do a mass merge to get to zero open PRs.

## 6. Wave: authoritative source-of-truth, agent readiness and documentation integrity

Fix active `CURRENT-STATE.md` first, distinguishing live statuses from dated archives. Integrate evidence for #76 PR compliance, #78 harness, #80 LANGUAGE proposal, real PG17 run, #68 unapproved hosted migration, remaining signed-out JWT blocker, and actual open PRs. Remove stale *active* claims, but archive historical context intact. Align `AGENTS.md`, `README.md`, `PROJECT.md`, `SOURCE-OF-TRUTH.md`, ADR indexes and onboarding entrypoints without copying the same state repeatedly. Do not rewrite old decisions or modify historical immutable packets.

Recover actual original SRC-001–SRC-004 research-source bytes with controlled retrieval references, hashes and provenance. If inaccessible, document SOURCE_GAP and exact owner-provided source needed; summaries are not originals.

Perform a genuine independent cold-start agent handoff in a **fresh runtime/context**, when an actual second session is available, using only a task, pinned ContextPack and explicit minimum setup; record who/what did the work and the result. If no separate runtime, mark NOT_RUN—not an invented PASS. Run a clean clone/Node24/pnpm10.18 setup, source reconstruction, offline test and synthetic task recovery, and verify reproducible source/evidence backup and restore excluding secrets. Keep realistic CI metrics for runner starts vs billable minutes, verification time, rework, context overhead, failures vs infrastructure and escaped defects. No new servers until measurement supports the need.

## 7. Wave: LANGUAGE.md decision reconciliation (LANG-P01–P15)

Review each unresolved decision; produce a grounded matrix **ID | current | recommendation | evidence | adopted/provisional/deferred/blocked | affected surface | verification | unresolved authority**. Under this owner mandate you may choose **supported ordinary terminology** consistent with accepted MVP concepts, but may not fabricate trademark clearance, certified original rule-source mappings, user research, exact provider pricing or deployed functions.

Review all 15 explicitly:

- P01 brand clearance: working name remains Vellistry; legal/trademark clearance only with real evidence.
- P02 immutable guidance pack mapping: no unverified public 130/134-active claims.
- P03 Story Workspace / Story Profiles / Story Bible distinction.
- P04 story threads vs storylines.
- P05 chapter vs scene (currently chapters authoritative).
- P06 unknown book-create acknowledgement and duplicate-risk retry copy.
- P07 actual signup/email-confirmation behavior, not assumed settings.
- P08 optional BYOK, session-only key/privacy/cost disclosures (future AI).
- P09 editor Undo vs accepted AI change Undo.
- P10 Unsaved/Saving/Saved/Save status unknown/Conflict/Recovered draft aligned with real receipts.
- P11 download manuscript vs portable book backup, restore/deletion honesty.
- P12 source English, locale/IME/RTL deferred unless verified.
- P13 account, AI settings and export navigation as *future* where absent.
- P14 provider/model route and cost estimates only if verified.
- P15 document merged into main but status remains proposed-owner-review until owner-approved dispositions; do not leave stale claim 'not present on default branch'.

Fix existing production UI copy only where its effects are verifiable, including unknown-save/retry semantics; test state transitions and accessibility labels. Do not rename SQL/API identifiers, invent screens or turn synthetic copy into live functionality. Record owner-adopted labels separately from still-proposed labels; continue development without claiming the fifteen are automatically accepted just because text merged.
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0018/MANDATE-PART-2.md` @ `cd007fcf3a5d9a323a90bdc7dddc2e20030ebfc6`

~~~~~~markdown
## 8. Wave: Supabase development readiness and PR68 security

**Selected development architecture:** local Windows Codex worktree -> Next.js UI/BFF + private loopback NestJS API -> `vellistry-dev` hosted Supabase Auth/PostgreSQL after specifically approved hosted setup. GitHub is canonical source; code push is not hosted deployment, and committed migration SQL is not executed migration history. Disposable local/CI Supabase or PG tests are permitted for offline proofs even though developer's normal database target is Supabase Cloud. Supabase CLI operations must be discovered from installed `--help` and current official docs, not memory.

**Existing main migrations (source pins):**

- `supabase/migrations/20261009000000_initial_author_books.sql`, Git blob `192a736d1a5d6ffc6f239c74ed61e7b8d2528b3b`.
- `supabase/migrations/20261009010000_restrict_accepted_manuscript_dml.sql`, Git blob `0670a60f1c2e299e97712174d9`.

**Third PR68 migration:** `supabase/migrations/20261015171325_restrict_book_privileges.sql`, Git blob `230b1540bb5b8962fd2b797d4f8a467d3c035978`, SHA256 `c7c384b6192d31e4e17c4f6e00978a16a4e15e2feeacfe148aaf1e2cd2853e81`. Source branch checked at `cbb379fa4a4eaa9f576f3abcce2c2258d22cc551`. The earlier owner disposition **approved the precise third SQL definition for repository-only planning**; this is NOT authorization for hosted application, remote inventory or different migration bytes. Any byte change needs renewed decision.

**Real disposable security evidence:** GitHub Actions #39135149678, job 117698049994, PostgreSQL17.11, artifact 12139701246, expires **2026-11-01**. Observed original expected `P0001` books TRUNCATE failure under deliberately modeled risky grants, corrected 48 ACL assertions passing plus SQLSTATE42501 denial probes and cleanup. Preserve a sanitized, hash-checked durable evidence digest before expiration when repository evidence-write permission exists. Do not represent synthetic defaults as live Supabase default ACL state.

**Before any hosted work:** deliver a precise current-main PR68 integration/review packet: three exact files/version history, actual app transport/permissions, RLS, inherited grants and PUBLIC/anon/authenticated effective rights, schema/default privileges, triggers/references/truncate, auth roles, grant inheritance, privileged bypass/SECURITY DEFINER risks, PostgREST exposure, legacy CI exclusion, rollback/backout, after-apply verifications, and target `vellistry-dev` (`lflkcrnriitrbclangyr`, eu-west-2), with a signed-out JWT risk register. Any hosted state previously observed as healthy/zero tables/zero migration history is *dated*, not a fresh authorized inventory.

**Do NOT access hosted Supabase under this mandate.** Record distinct decisions for (a) repository code integration, (b) exact-target read-only inventory, (c) CLI login/versioned dry-run, (d) exact reviewed dev migration application, (e) two synthetic disposable Auth writers plus cleanup, (f) JWT mitigation and private pilot, and (g) production. Prior narrow authorization of original two migrations and two-user tests does not authorize the extra SQL execution or override later explicit holds. Prepare commands as proposals only. The user has local `.env` files for publishable keys if they choose; never fetch, print, overwrite or commit them. `apps/web/.env.local` and `apps/api/.env` must be ignored; only placeholder `.env.example` goes in Git. Reject browser `service_role`/`sb_secret_`; treat `NEXT_PUBLIC_` values as public.

**JWT/private author protection:** Existing experiments indicate sign-out can leave an unexpired JWT useful at the direct Data API. Explore mitigation with genuine disposable tests (e.g. a restricted Nest/Postgres gateway with session revocation enforcement and Data API grant lockdown) without prematurely changing current BookService or making unsupported immediate-revocation claims. Do not imply that RLS or third books grant migration fixes token revocation. G_PRIVATE_PILOT remains blocked until verified.

## 9. Transition gate: remediation to production MVP implementation

After closure of truly prerequisite governance and repository-only security checks, **begin actual implementation** in a separately authorized sequence. This master assignment authorizes offline code implementation; hosted migration gates may remain pending. Do not let unrelated optional checklist work permanently block code slices proven safe in local/disposable environments. Conversely, do not represent locally passing functionality as hosted acceptance.

### IMP-002 — authenticated book/chapter workspace

Develop against the merged Next.js16/React19 + NestJS11 architecture. User can sign in; create/open/switch books; list/add/rename/reorder/select chapters; separate planning notes from prose; see accurate auth/loading/empty/error/unknown-save states; switch without content contamination; and use desktop/narrow keyboard-accessible layouts. Reuse existing author-scoped APIs and schema; introduce only reviewed minimally privileged chapter mutation contracts and versioned SQL **on repository branches**, not broad browser DML grants. Confirm chapter position concurrency, immutable revision ownership and stable IDs. Negative tests: unauthenticated and forged owner requests, cross-author CRUD, duplicate order/concurrent reorder, fast book/account switching, stale response, lost create ACK, unrelated book access, keyboard and 390/900/1440 layout. Honest note: the merged schema has chapter SELECT but intentionally revokes author direct INSERT/UPDATE/DELETE until protected transactions exist.

### IMP-003A — manual-first Tiptap3/ProseMirror editor

Use ADR-0003 and actual Tiptap3 transactions/doc positions, not Lovable's raw contentEditable/`execCommand`. Support author-owned chapter document load, prose typing, paragraphs/headings/basic formatting, bold/italic/underline/lists, keyboard undo/redo, search/Find Next cycling+wrap, word count, focus mode, accessible controls, non-destructive chapter switching and accurate unsaved-state UX. AI OFF by default; no API key, real AI call or provider spend required for writing.

**Mandatory synthetic Lovable QA regressions brought into production tests (not imported code):**

1. Whitespace-loss: selected `The ` replaced by approved `QA revised ` must yield `QA revised orchard…`, not `QA revisedorchard…`. Do not call `trim()` on author-approved text; verify exact leading/trailing spaces, inline selections, punctuation, undo and boundary handling.
2. First-line selection: type `Alpha omega.`, Enter, `Second paragraph.`; selecting `Alpha ` on the first line and applying a deterministic replace must succeed. Real cross-paragraph selection remains discernible. Verify collapsed caret at 0 and 4, formatted inline ranges, wrap search, pasted text and IME where feasible.
3. When eventually exposing AI mock/real statuses, derive all labels from authoritative state; avoid contradictory header/footer `AI OFF` indicators.
4. Do not hardcode a sample book subtitle for newly created/renamed books; derive active book identity.
5. The Lovable host badge overlapping Journey Coverage is a **sandbox host-specific** issue; do not insert a Lovable workaround into production. Retain equivalent accessibility/overlap testing for actual production navigation.

Do not attempt to silently fix the separate Lovable project from this GitHub assignment; its previously observed five issues and 11-journey browser test are test design inputs only.

### IMP-003B — durable revisions and recovery

Implement scoped chapter load and transactional save using accepted version/CAS + idempotency contract, append-only accepted revisions, optimistic conflict detection, unknown acknowledgement verification and explicit durable receipt, and separately isolated local draft recovery if accepted design allows it. Distinguish Unsaved, Saving, Saved, Save status unknown, Conflict and Recovered draft. No unversioned direct chapter DML to browser. Test duplicate keys, changed payload with reused key, lost ACK after DB commit, stale revision, two sessions editing, cross-author access, rollback/fault injection, stale responses after book switch, reconnect/reload and restoration. Reuse existing real PG CAS/restore experiments but add actual application integration and browser tests. Avoid claiming production/hosted durability until run there.

**Later MVP components**—Story Profiles/fact approval, Rules Studio, BYOK AI consent/context/proposal accept+undo, export/backup—remain distinct scoped milestones. Add honest dependencies and tests without falsely marking unimplemented work complete; respect all eleven journeys and 149-ID crosswalk.

## 10. Test and review matrix

For every candidate and merged revision, run all applicable actual checks, recording command, environment, exit and artifact link:

- Node24/pinned pnpm10.18 frozen install, both TypeScript checks/builds, existing 66 Library tests and hosted preflight negative tests when source exists.
- Python governance/metadata/readiness/spec traceability + PR compliance/negative workflow tests, pinned checks and exact-head final gate.
- Real disposable Supabase Auth/RLS author isolation and permitted DB tests; real PG CAS/recovery; isolated PG17 privilege test only when source is present and harness permits it.
- New API/editor unit/integration/browser checks at desktop/tablet/mobile (1440px/900px/390px), keyboard, screen-reader-relevant labels, IME where feasible, undo/redo/selection/provenance/security negatives.
- Distinguish intended failures (original regression BEFORE) from unanticipated failures, runner-not-started/payment failures, draft advisory red, skipped nonapplicable jobs and NOT_RUN.
- Secret-sanitized evidence, reviewed SQL/approval paths and no unapproved hosted connections.

Review source and CI at exact final SHA; secure an actually distinct reviewer/handoff if required; independently verify merge and full main run. CI green alone never certifies product usability or release readiness.

## 11. Work packages and sequencing

Recommended narrow PR queue; adjust based on actual dependency inventory and unique Task IDs:

1. **STATE-RECONCILE:** live current truth, original source/44-item ledger, issue classification; no history erasure.
2. **PR-HYGIENE:** resolve/supersede #59 and #66, reconcile #65, map all other open PRs and tasks; avoid arbitrary merges.
3. **LANG-DECISIONS:** LANG-P01–P15 supported decisions + only verified existing UI copy changes.
4. **SEC-PR68-INTEGRATION:** Issue81 offline review, selective main-based hosted-preflight + exact migration definition/negative regression + evidence retention; do not merge stale workflow.
5. **GOV-CI-RECOVERY:** unresolved 44-item static/checkpoint/source/clean recovery/cold-start/metrics work, as dependency requires.
6. **IMP-002:** real secure book/chapter workspace.
7. **IMP-003A:** Tiptap manual editor and all relevant Lovable-derived negative tests.
8. **IMP-003B:** actual transactional save/revision/recovery integration.

Do not run eight parallel PRs mutating `CURRENT-STATE.md` and `AGENTS.md`. Plan ownership of shared files, rebase only your own new branches after verifying main, and batch independent tests. Close each eligible bounded milestone before its dependent slice. If an owner-only gate blocks one lane, record it and work an independent lane.

## 12. Definition of completion and mandatory handoff

Deliver a comprehensive **Vellistry Master Remediation and MVP Continuation Report**, committed in a governed report location and summarized back to the owner:

1. Start/end main SHA, final verified current tree and CI link; all authored PRs, Task/CP/EB identifiers and true merge/closure dates.
2. **44 original items**, individually evidenced, with derived DONE/PARTIAL/BLOCKED/NOT_STARTED counts and next dependencies (not predetermined 44 DONE).
3. Every open PR's final disposition: MERGED, SUPERSEDED/CLOSED, REMAINS_OPEN/BLOCKED, or READY_FOR_OWNER_MERGE, with URLs and why; include stale #59/#65/#66/#68 and #77/#80 history.
4. P01–P15 decision matrix; distinguish ADOPTED from PROVISIONAL/DEFERRED/BLOCKED and language file adoption status.
5. Exact PR68 SQL/provenance and historical migration hashes, PG17 evidence and retention, precise hosted authorization matrix, observed versus unverified cloud behavior, separate JWT/private pilot blocker.
6. Which real application operations are actually implemented and verified for IMP-002, IMP-003A, IMP-003B; map to 149 IDs, eight MVP areas and eleven author journeys. Separate offline/disposable, hosted, synthetic Lovable, and future features.
7. Negative tests, real commands/counts, CI/readiness/clean-room evidence, release/rollback implications, remaining risk and reproducibility instructions for Windows Codex worktree + Cloud Supabase dev (without secrets).
8. Unresolved original research/source gaps, independently verified cold-start or NOT_RUN, recoverability, costs/usage evidence when available.
9. Separate go/no-go for (i) safe continued development, (ii) hosted-dev data acceptance, (iii) real-author private pilot, and (iv) production release. Do not conflate them.
10. Minimal next actionable task, dependencies and any **exact, narrow** owner-sensitive permission still needed.

**Execution:** Begin by inspecting live `main` and open PRs; create the first governed work package; implement, test, review and integrate eligible steps. Continue through the permitted queue. Do not substitute a plan for source changes or claim a merger/test/independent review that did not happen. A blocked hosted action must not prevent safe offline implementation. Preserve author intent and manuscript integrity over artificial progress numbers.

---

# Appendix A — Owner-provided 44-item checklist (text transcription)

The following material is a text transcription of the owner-provided `Vellistry-Agentic-Coding-Remediation-Checklist-44-Items(1).md` found in the project file library. It is included for self-contained task interpretation. **Do not claim an original-byte cryptographic archive or author provenance solely from this transcription.** If the true original `.md` bytes are available, verify and retain their hash in an authorized record.

# Vellistry — Agentic Coding Remediation Checklist

44 items. Item 44 is a critical new control added after the coordinator-role breach; items 1–43 preserve the original checklist wording and numbering.

[ ] 01. Restore GitHub Actions execution
   Resolve the account payment/spending-limit restriction reported in PR #68's execution evidence. Rerun the failed workflows at their exact commit SHAs; do not classify runner-start failures as code-test failures.

[ ] 02. Complete the Codex-primary governance transition
   Review and integrate ADR-0008 in PR #66 after applicable verification. Ensure the effective default workflow is ChatGPT coordinator → Codex implementer → independent review → owner approval, with Cursor retained as an optional alternate.

[ ] 03. Resolve competing implementation PRs
   Decide how to supersede or close the ChatGPT-authored PR #65 after reviewing its reuse in Codex PR #68. Preserve authorship and cherry-pick provenance. Do not blindly merge both branches.

[ ] 04. Independently review Codex PR #68
   Inspect actual code, SQL, test fixtures, task permissions, evidence and changed paths. Verify that its new Phase B work is separately authorized and reviewed, rather than accepting the Codex report alone.

[ ] 05. Verify the database privilege defect
   Run the proposed PostgreSQL 17 regression on an isolated disposable database. Confirm the original books-table privilege behavior and prove that the proposed grant correction removes inappropriate TRUNCATE and other excess privileges.

[ ] 06. Approve the additional privilege-hardening migration
   Obtain an explicit owner decision for the newly proposed third SQL migration. Earlier authorization for the original two migrations does not automatically approve a new one.

[ ] 07. Establish safe hosted migration access
   Authenticate the Supabase CLI securely, verify the exact vellistry-dev target, preserve correct migration versions/history, perform a reviewed dry run and exclude unrelated Vault, roles, seed and reset operations.

[ ] 08. Run authorized hosted development acceptance
   After approval and successful isolated SQL verification, apply the reviewed migrations and test two disposable authors, book persistence, account isolation, forged ownership, RLS and prohibited operations. Clean up fixtures.

[ ] 09. Resolve the signed-out JWT security risk
   Test whether an unexpired access token can still read private data directly through PostgREST after sign-out. Choose and verify a mitigation or explicitly approved security boundary before any real private-manuscript pilot.

[ ] 10. Complete exact-head and merged-main verification
   Only merge reviewed work after applicable checks actually execute. Verify the final merged file tree and rerun or inspect post-merge checks. Record remaining NOT_RUN/BLOCKED conditions accurately.

[ ] 11. Make CURRENT-STATE.md genuinely current
   Create a compact authoritative current snapshot. Move dated detail into historical records without deleting evidence; eliminate obsolete statements presented as current.

[ ] 12. Reconcile repository entrypoints
   Update AGENTS.md, README.md, PROJECT.md, SOURCE-OF-TRUTH.md and affected setup documents to reflect merged architecture, hosted Supabase, and the Codex role.

[ ] 13. Separate current truth from historical truth
   Clearly distinguish accepted decisions, active implementation, unmerged proposals, earlier decisions, synthetic results and archived experiments.

[ ] 14. Create one authoritative onboarding entrypoint
   A newly connected agent should be able to locate the current SHA, effective instructions, active tasks, accepted ADRs, security holds and task-specific context without reading the entire archive.

[ ] 15. Repair contradictory approval and gate states
   Reconcile G_DESIGN, G_CODE, G_PRIVATE_PILOT and G_RELEASE with explicit owner-approved individual task exceptions. Approval of one slice must never be misrepresented as global product approval.

[ ] 16. Finish original research-source preservation
   Archive or provide immutable, access-controlled retrieval references for SRC-001 through SRC-004; verify hashes and reference the actual original bytes, not only research summaries.

[ ] 17. Strengthen source-to-requirement traceability
   Keep original user intent, research findings, proposals, accepted requirements, feature IDs and test evidence separate. Fix missing or ambiguous links.

[ ] 18. Maintain ADR lifecycle and supersession
   Reconcile proposed/accepted/implemented states, dated owner approval, alternatives, implementation references and explicit supersession without rewriting historical decisions.

[ ] 19. Reduce documentation duplication
   Keep one canonical location per current fact or contract. Use links and generated indexes rather than copying full explanations into many plans, reports and agent prompts.

[ ] 20. Make formal handoffs the normal coding path
   Require a unique task and ContextPack for consequential coding tasks, plus a traceable ExecutionBundle afterward. PR #68 demonstrates the mechanism; make it standard for future work.

[ ] 21. Prevent task-scope drift
   When new approval extends a task—such as Phase B after the Phase A-only VEL-TASK-0005—record an approved amendment or create a newly pinned task/ContextPack. Never silently reuse the original permission envelope.

[ ] 22. Standardize task acceptance and permissions
   Every task should contain a bounded objective, source revision, dependencies, allowed paths/actions, forbidden operations, positive and negative tests, owner checkpoints and clear completion criteria.

[ ] 23. Make agent identity and code provenance reliable
   Record which tool/model actually performed each action. Preserve original authorship when cherry-picking or adopting code produced by ChatGPT, Codex, Cursor or another contributor.

[ ] 24. Enforce branch and worktree isolation
   One assigned executor per task branch, verified starting SHA, preserved local changes, no silent branch takeover and no simultaneous uncontrolled edits to shared files.

[ ] 25. Make ContextPacks immutable and current
   Validate the task blob and source blob hashes against the pinned commit. Generate a new pack when authoritative inputs or permissions change; do not overwrite dispatched historical packs.

[ ] 26. Standardize complete ExecutionBundles
   Require actual commands, exit codes, changed files, environment, exact source/head SHA, test fixtures, security findings, unresolved risks and FACT/INTERPRETATION/PROPOSAL separation.

[ ] 27. Verify genuine agent independence
   Repeat a real implementation handoff in a fresh Codex or alternative-agent session using only the approved task context. PR #68 proves task packaging and execution, but its own report calls the handoff same-session, not independent cold-start verification.

[ ] 28. Prohibit silent implementation-role substitutions
   Direct feature coding by ChatGPT or switching away from Codex should require an explicit task-specific exception. Planning, reviewing and small governance edits can have proportionate policies.

[ ] 29. Add PR-to-task compliance validation
   Automatically check task identity, ContextPack reference, ExecutionBundle reference, evidence fields and required owner checkpoints for qualifying implementation PRs; allow documented low-risk exemptions.

[ ] 30. Check merged-main artifact integrity
   Ensure every accepted PR's required files survive integration. Detect missing tests and artifacts, including zero-test discovery, to prevent recurrence of the 21-file research recovery incident.

[ ] 31. Audit workflow triggers and test coverage
   Ensure implementation, SQL, validator, task, metadata and relevant documentation changes trigger applicable checks. Passing unrelated tests must not mask untested changed surfaces.

[ ] 32. Establish dependable review evidence
   Make exact-head source inspection, focused negative tests, advisory AI/CodeRabbit review where available and owner disposition explicit. A Draft-skipped CodeRabbit result is not an independent review.

[ ] 33. Protect integration against bypass
   Assess branch-protection/ruleset availability on the private repository. Where GitHub plan limits prevent required checks, use documented owner-controlled merge procedures and verification evidence.

[ ] 34. Separate CI failures from infrastructure failures
   Report runner-not-started, account restrictions, unavailable Docker/PostgreSQL, actual failed assertions and missing configuration as distinct conditions. None should be mislabeled PASS.

[ ] 35. Close and reconcile completed or superseded work
   Review paused PR #59 and old Issue #58, continuing Issue #63, outstanding Stage 3 Issue #18, and the newer #65/#66/#68. Close, retain or supersede with accurate links and decisions.

[ ] 36. Apply least-privilege agent permissions
   Limit repository, credential, filesystem, network, paid API, database and deployment access by task. Preserve explicit owner checkpoints for destructive or high-impact operations.

[ ] 37. Strengthen secret and private-data protections
   Keep local .env files ignored; use secret checks and sanitized logs/artifacts. Never store author manuscripts, access tokens or service-role keys in Git handoff packets.

[ ] 38. Test full project recovery from a clean environment
   Clone the repository without prior ChatGPT context, set up the pinned tooling, reconstruct the active project state and execute a synthetic task. Record everything that cannot be recovered.

[ ] 39. Make CI reproducible without unsafe cloud dependencies
   Maintain disposable PostgreSQL/Auth test paths, predictable tool versions, safe fixture cleanup and offline-capable checks. Hosted tests should require their own explicit authorization.

[ ] 40. Link actual implementation to acceptance status
   Map delivered features and test results back to the 149-ID MVP crosswalk. Update PASS/FAIL/BLOCKED/NOT_RUN only from observed behavior, not from planning documents.

[ ] 41. Establish repository recovery and backup checks
   Verify that source, evidence, relevant artifacts and migration history can be recovered, including after bad merges or lost agent worktrees. Keep secrets outside backup copies of the knowledge repository.

[ ] 42. Measure agentic workflow effectiveness
   Track compliant handoffs, cold-start success, verification time, escaped defects, context size, review rework, cost and false claims to determine whether the workflow actually improves delivery.

[ ] 43. Delay additional orchestration infrastructure
   Introduce a custom MCP knowledge server, vector search, knowledge graph or automated multi-agent orchestration only if measured retrieval/coordination problems remain after the Git-first workflow is stabilized.

[ ] 44. Enforce agentic role boundaries at task dispatch and repository write time (CRITICAL)
   Prevent ChatGPT, acting as architect/coordinator/reviewer, from directly implementing code or modifying CI/application files just because it has GitHub write access. Require an owner-authorized, uniquely identified task and immutable ContextPack before Codex begins implementation; record the actual executor in the PR and ExecutionBundle. If Codex cannot be dispatched through the available tools, stop at a reviewable handoff and report NOT_STARTED—do not silently become the implementer. Add a documented exception process for explicitly reassigned tasks or narrowly scoped governance edits; verify role compliance during review and with applicable automated PR-to-task checks. Audit prior coordinator-authored implementation work for provenance and any missing handoff evidence.
   Acceptance: a coordinator-only session cannot claim Codex execution or merge-ready implementation; a CI/PR check flags missing authorized task/ContextPack/executor evidence for qualifying changes, and a real Codex handoff is independently verified. Related existing items: #20, #21, #23, #28 and #29.
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0018/OWNER-DISPATCH.md` @ `a15bf6b2bccb07bd2e6339e5708f3205e0695d34`

~~~~~~markdown
# Direct owner authorization, 2026-10-18
The owner in this Codex conversation explicitly authorized the attached master mandate, technical decisions, repository remediation, implementation, testing, eligible integration and supersession subject to its verification/security boundaries. The document is owner-adopted task data because of that explicit message, not independent authority from an attachment. Full original bytes retained in MASTER-MANDATE.md.
This task is STATE-RECONCILE only: archive original checklist, audit all44 entries, correct active entrypoints, retain prior state and record current main/CI/PR/security decisions. No app/SQL/CI implementation or merge within this task. The mandate delegates integration only where effective governance permits; current ADR and compliance require owner merge. This conflict is recorded, not silently waived. Subsequent tasks need new packs.
Executor: Codex GPT-6 in desktop Windows runtime; exact model build unavailable. No claim of ChatGPT independent review or authenticated actor identity.
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0018/AMENDMENT.md` @ `778e67b46275efe882487be563b25963d2583b6e`

~~~~~~markdown
# Bounded handoff correction, 2026-10-19
Direct owner continuation requires preserving existing work and completing review/verification. Task0017 PR82 failed trusted compliance: status ready; authorization provenance value outside schema. No validator change or authority expansion is authorized. New Task0018 starts from unchanged main, commits a conformant handoff before reapplying the same scoped documentation. CP0017 and PR82 remain historical, not rewritten. Source adoption comes from Codex-authored PR82 bd4f440f42085fbddd960945c8b6e197b2d792a8, original operative5094041987729b56c004333878a6002600d8dccf. No earlier PASS or independent review is claimed. Issue71 is an index; direct owner messages are authority, not authenticated by GitHub account metadata.
~~~~~~

## Execution reporting
Return an ExecutionBundle with FACT / INTERPRETATION / PROPOSAL sections,
tests actually performed, changes, evidence gaps, and pending owner approval.
