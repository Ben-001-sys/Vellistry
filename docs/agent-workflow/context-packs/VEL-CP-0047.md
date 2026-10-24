---
id: VEL-CP-0047
title: 'Context for VEL-TASK-0047: IMP002 local-only Book Workspace controller, organizer
  and synthetic verification'
type: context-pack
status: prepared
created_at: '2026-10-24'
version: 0.1.0
task_id: VEL-TASK-0047
base_commit: aa94627434c13c0ac592a0d6f77d6b604884acc7
task_blob_sha: 359b01f65d3779a0c837f85705df3aa3d5a0b3c7
inputs:
- path: PROJECT-CONSTITUTION.md
  role: governing-source
  git_blob_sha: 61f79c4dcb47bd99291c16490e8c00692e2ab23b
  source_status: accepted
- path: AGENTS.md
  role: governing-source
  git_blob_sha: 3058d51c0e15db54d6271ecbcffcfeb0aaf54e6f
  source_status: active
- path: CURRENT-STATE.md
  role: governing-source
  git_blob_sha: beed115cbbce69b7c8b7a055c80d46f6b03d2ac3
  source_status: active
- path: docs/agent-workflow/PR-COMPLIANCE.md
  role: governing-source
  git_blob_sha: 5f4845623aef3abb15fba7fbe8e78474902cca00
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0047/OWNER-SCOPE.md
  role: governing-source
  git_blob_sha: 8246f63f480b08b1c81c72d44b36d7d11c565d49
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0047/APPROVED-HANDOFF.md
  role: governing-source
  git_blob_sha: 5307ba702ee40f77b389b18478c89d0c96dd13eb
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0047/SOURCE-EXCERPTS.md
  role: governing-source
  git_blob_sha: a2c3897a6769e876f146171e26fd44cc9ddb42bd
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0047/WORKSPACE-CONTRACT.md
  role: governing-source
  git_blob_sha: 0418e035f65677fd056a2d87d88acf17da657acd
  source_status: unrecorded
- path: docs/reports/VEL-LANGUAGE-DISPOSITIONS-2026-10-20.md
  role: governing-source
  git_blob_sha: 1be5adef09998beb818c3521b88c6a70298e97e6
  source_status: proposed-for-review
source_gaps:
- id: PERSISTENCE
  limitation: Only local synthetic adapter; protected hosted chapter/reorder/notes
    persistence and security acceptance require separate contracts/permissions.
prepared_by: agent_workflow.py
---

# VEL-CP-0047 — IMP002 local-only Book Workspace controller, organizer and synthetic verification

## Objective
Implement and verify the specifically owner-authorized local-only organizer slice, not another proposal; submit independently reviewed feature PR for owner merge.

## Scope
**In:** CURRENT-STATE.md; apps/web/src/lib/workspace/book-workspace-contract.ts; apps/web/src/lib/workspace/book-workspace-session.ts; apps/web/src/lib/workspace/book-workspace-session.test.ts; apps/web/src/components/workspace/book-workspace-organizer.tsx; tests/fixtures/book-workspace-synthetic.ts; tests/workspace/book-workspace-fixture-page.tsx; tests/workspace/book-workspace-browser-checks.md; package.json; docs/agent-workflow/tasks/VEL-TASK-0047.yaml; docs/agent-workflow/context-packs/VEL-CP-0047.md; docs/agent-workflow/execution-bundles/VEL-EB-0047.md; docs/agent-workflow/inputs/VEL-TASK-0047/*; docs/agent-workflow/PR-COMPLIANCE.yaml; docs/reports/VEL-IMP002-LOCAL-WORKSPACE-0047.md; docs/reports/evidence/VEL-IMP002-0047/*
**Out:** Hosted operations/config/credentials/SQL/migrations/grants/RLS and direct chapter/revision writes; Production fixture routes, API/auth architecture, dependencies/CI/policy changes; Private data, paid services/deployments, feature merge and broad G_DESIGN/G_CODE promotion

## Evidence and authority constraints
The text below is a readable rendering of pinned Git blobs; exact raw bytes remain recoverable from the recorded commit/blob SHAs. Recorded source statuses remain in force: draft research is not accepted requirements. Original unarchived uploads are not independently verified merely by being mentioned.

**Known source gaps:**
- PERSISTENCE: Only local synthetic adapter; protected hosted chapter/reorder/notes persistence and security acceptance require separate contracts/permissions.

## Permissions and acceptance
**Allowed:** Read pinned sources and implement only allowed files in isolated worktree, Use frozen existing dependencies and synthetic unit tests/build/type/governance, Create owned disposable browser checkout; transient test route only there, loopback3105, installed Playwright, stripped credential env; stop owned service, Update scoped evidence/current-state/manifest; distinct review and submit/promote PR for owner decision
**Owner approval required:** All hosted/credential/SQL/private/paid/deployment/settings actions remain excluded; Any scope expansion and feature PR merge
**Acceptance criteria:**
- All scoped positive and negative cases in WORKSPACE-CONTRACT pass with actual evidence
- No production fixture route, hosted calls/credentials, SQL or accepted-document/revision mutation
- Pre/post identity verification, stale-response guards, scoped drafts and unknown-write retry lock retained
- Keyboard/focus/labels/status behavior checked in real local browser; no fake persistence
- Owner retains feature merge; broad gates pending; remediation authority expired

## Deliverables
- Committed Task/inputs and validated committed immutable pack before feature edits
- Headless controller/contract, reusable organizer, synthetic adapter and browser fixture with focused tests
- Actual unit/browser/build/type/governance evidence and honest local confirmation copy
- EB, distinct final-head review, applicable Draft/Ready CI and feature PR for owner decision

## Pinned source snapshots
Git commit: `aa94627434c13c0ac592a0d6f77d6b604884acc7`. Read source statuses independently from task intent.

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

### `AGENTS.md` @ `3058d51c0e15db54d6271ecbcffcfeb0aaf54e6f`

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

Automatic PR-to-task compliance is implemented by the merged [static contract](docs/agent-workflow/PR-COMPLIANCE.md) from [Issue #73](https://github.com/Ben-001-sys/Vellistry/issues/73). It checks declared provenance and scope, not authenticated runtime identity or human approval. Preserve trusted-base evaluation and the mandatory security gates. See the [operating model](docs/agent-workflow/IMPLEMENTATION-OPERATING-MODEL.md) for bounded task exceptions.

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

## Current bounded remediation delegation

The [one-time owner delegation](docs/agent-workflow/authorizations/VEL-REM-INTEGRATION-20261019.yaml) temporarily permits Codex to integrate eligible repository-only remediation after distinct trusted review, actual ready CI, exact merged-tree and post-main verification. This is a recorded owner decision, not agent self-approval or a default-policy change. It expires at programme completion/formal closure; new MVP tasks and all hosted/security-sensitive actions remain separately gated. See the current ledger and CURRENT-STATE.md.

The temporary remediation delegation ends under its [recorded closure condition](docs/agent-workflow/authorizations/VEL-REM-INTEGRATION-20261019-CLOSURE.md). After the final merge/post-main attestation, ordinary owner-governed approval resumes; this exception grants no future feature authority.
~~~~~~

### `CURRENT-STATE.md` @ `beed115cbbce69b7c8b7a055c80d46f6b03d2ac3`

~~~~~~markdown
---
id: VEL-STATE-001
type: current-state
status: active
created_at: 2026-10-08
updated_at: 2026-10-24
owner: project_owner
version: 0.2.1
---

# Vellistry — current verified state

## Current bounded task — 2026-10-24

FACT: PR109 merged under explicit ordinary owner approval. Main
`d13deca2d6762d44f80035c6d89d2cb61d1ab1e8` exactly matches its reviewed tree;
[post-main40083949671](https://github.com/Ben-001-sys/Vellistry/actions/runs/40083949671)
passed governance, application/security and disposable PostgreSQL CAS/restore.
SQL privilege fixture was SKIPPED, not accepted. Task0045 evidence is integrated;
its earlier pending-review wording below remains historical submission evidence.

Owner [confirmed the development target](https://github.com/Ben-001-sys/Vellistry/issues/108#issuecomment-6382899950):
project vellistry-dev, reference lflkcrnriitrbclangyr, organization
pulyacnozzggwfgqdgdl, region eu-west-2; prior connected metadata lookup reportedly
ACTIVE_HEALTHY. Task0046 has not repeated that lookup or observed the database.
Task0046/CP0046 prepares the [exact catalog query packet](docs/reports/VEL-HOSTED-METADATA-0046-QUERY-PACKET.md)
for owner review. No catalog queries may run before exact packet/hash approval
and proof of a least-privilege bounded read-only channel. Generic execute_sql
capabilities do not establish that proof; owner-sanitized export is an alternative.

Ordinary owner merge rules apply. The remediation delegation remains EXPIRED.
No credentials, hosted SQL, migration/source adoption, Auth fixtures, settings,
private data or IMP002 implementation is authorized by this preparation.

## Historical Phase A dispatch — 2026-10-23

FACT: main `be69e5b249f57253e726bfcca00f5e81c0c60623` integrates PR107;
[post-main39961186197](https://github.com/Ben-001-sys/Vellistry/actions/runs/39961186197)
passed. The [final Issue71 attestation](https://github.com/Ben-001-sys/Vellistry/issues/71#issuecomment-6366067398)
closed repository remediation with35DONE/5PARTIAL/4BLOCKED. The one-time delegation
is EXPIRED. Historical paragraphs below describe the earlier pre-integration cut,
not unfinished authority or permission to resume remediation.

Owner directly authorized [Issue108](https://github.com/Ben-001-sys/Vellistry/issues/108)
Phase A only: Task0045/CP0045 verifies the unchanged foundation locally with synthetic
data and prepares separately authorizable hosted and IMP-002 proposals.
[Phase A report](docs/reports/VEL-DEV-001-PHASE-A.md) records actual frozen installation,
23preflight/67Library tests, typechecks and build PASS. Review and owner acceptance
remain pending; no feature code, hosted connection or new merge authority follows.
The original broad G_DESIGN/G_CODE, private-pilot and release gates remain pending.

Next implementation proposal is the bounded local-only
[IMP-002 workspace handoff](docs/reports/VEL-IMP-002-HANDOFF-PROPOSAL.md), not dispatched.
Hosted access, local credential configuration, SQL adoption/execution and Auth fixtures
require the [separate target-specific packet](docs/reports/VEL-DEV-001-HOSTED-PROPOSAL.md).
Local synthetic preparation is GO within Task0045; hosted acceptance, private pilot
and production remain NO-GO. Ordinary owner merge governance applies.

## Historical pre-integration checkpoint (retained evidence)

FACT: checked main is `23fd8488df060e1591be70232abd70f4255e814d`, after PR #106.
[Post-main CI39868833625](https://github.com/Ben-001-sys/Vellistry/actions/runs/39868833625)
passed governance, application/security and PostgreSQL CAS/restore. Integrated SQL
privilege regression was SKIPPED because its proposed fixture is absent; no SQL
acceptance follows. Re-fetch main and open PRs before each new task; this is a dated
verified baseline, not a claim that a document can embed its own future commit.

Task0041/PR106 is integrated; original PR #83 was closed only after its successor’s
post-main PASS. Its [immutable CP0041](docs/agent-workflow/context-packs/VEL-CP-0041.md)
and historical evidence remain unchanged. PR #65, PR #68, PR #59, PR #66 and PR #82
are closed with source-preserving dispositions. Issues69/72/79 are closed for
repository delivery;18/63/67/74 retain external acceptance requirements.

Task0042 completed bounded420-pin recovery. Its clean restore found new Next16.4.0
security advisories, so [Task0043/CP0043](docs/agent-workflow/context-packs/VEL-CP-0043.md)
was pinned before the minimal16.4.1 dependency patch. Audit now reports zero findings;
23preflight/67Library tests, build/typecheck and patched offline restore passed.
The final [remediation report](docs/reports/VEL-REMEDIATION-COMPLETION-0042.md) and its
successor integration remain IN_VERIFICATION until actual final review, ready CI,
merge and post-main success. Candidate ledger:35DONE,5PARTIAL,4BLOCKED, never44DONE.

Use the [44-item ledger](docs/reports/VEL-MASTER-REMEDIATION-LEDGER.md),
[PR/source dispositions](docs/reports/VEL-CURRENT-TRUTH-0041-DISPOSITIONS.md) and
[149-ID observed evidence overlay](docs/reports/VEL-CURRENT-TRUTH-0041-FEATURES.md).
Earlier dated claims are retained in the [previous snapshot](docs/reports/CURRENT-STATE-ARCHIVE-2026-10-22.md),
not current dispatch instructions.

## Implementation and evidence

The Next.js/NestJS/Supabase foundation and author-isolated Book Library are merged.
Current regression coverage includes67 Library and23 preflight cases; synthetic
Auth/RLS/logout and PostgreSQL CAS/restore run in disposable CI environments.
These do not establish hosted persistence or complete the149 planned feature tests.
IMP-002, IMP-003A and IMP-003B are NOT_STARTED under this remediation mandate.
The accepted Tiptap3/ProseMirror direction does not mean a production editor exists.

[PR68 reconciliation](docs/reports/VEL-PR68-RECONCILIATION-0039.md) records all38
original paths and22 successful historical reruns at pinned sources. Original
zero-step infrastructure failures remain historical evidence. No billing repair
mechanism or savings is inferred. PR104 merged with post-main39661737567 SUCCESS.

[Source preservation](docs/reports/VEL-SOURCE-PRESERVATION-0038.md) retains the exact
original transport ZIP and SRC-001–SRC-003 hashes. SRC-004 remains missing; summaries
are not its original. [Source register](docs/research/SOURCE-REGISTER.md) is canonical.
[Level B evaluation](docs/agent-workflow/handoff-evaluations/VEL-HO-0004.md) has ten
technical PASS results and unset owner acceptance. Task0038 fresh code generation
is verified, but independent filesystem execution was blocked. Neither result
completes checklist item27's end-to-end implementation requirement.

## Effective authority and security holds

Default roles remain ChatGPT coordinator/reviewer, Codex implementer and owner
scope/acceptance authority under [ADR0008](docs/decisions/ADR-0008-codex-primary-agentic-implementation-workflow.md).
The [one-time owner delegation](docs/agent-workflow/authorizations/VEL-REM-INTEGRATION-20261019.yaml)
authorizes only this unfinished remediation's eligible repository integrations and
supersessions after distinct trusted review and actual CI. It does not authorize
future features or waive security gates, and ends at completion/formal closure.
Owner declined CodeRabbit: use existing trusted Codex review channels.

G_DESIGN and G_CODE remain pending broad gates; explicit bounded task exceptions
do not promote them. G_PRIVATE_PILOT and G_RELEASE remain unapproved. Branch
protection was explicitly deferred by the sole maintainer; no setting change or
technical prevention of a malicious authorized writer is claimed.

Hosted Supabase access (including read-only), CLI authentication, migration execution,
Auth users, real private manuscripts, production deployment and paid operations
remain separately controlled. Third SQL definition is planning-only, not adopted
into the operative migration tree. [Exact decision packet](docs/reports/VEL-PR68-RECONCILIATION-0039-DECISION-PACKET.md)
separates repository SQL adoption, target inventory, authentication/dry run, migration,
fixtures, signed-out JWT/direct Data API mitigation and release. Hosted acceptance is
BLOCKED/NOT_RUN. An unexpired signed-out JWT remains a private-pilot security blocker.

## Next permitted work and readiness

Finish only Task0044’s final exact-head review/integration/CI attestation. No new
feature implementation is dispatched. The [conditional closure record](docs/agent-workflow/authorizations/VEL-REM-INTEGRATION-20261019-CLOSURE.md)
ends the one-time delegation automatically after final post-main PASS and the exact
PR/Issue71 attestation. Thereafter ordinary owner-authorized Task/ContextPack,
review and merge governance applies; no further authority carries to features.

Continued local implementation: conditional GO after those final gates and a new
bounded owner-authorized task. Hosted acceptance: NO-GO pending separate permissions
and evidence. Private-author pilot: NO-GO. Production release: NO-GO.
Original SRC004, independent end-to-end execution, historical LevelB owner acceptance,
SQL adoption/hosted security and unavailable cost comparison remain explicit blockers.

## Retained product decision references

[Owner waves01–03 selections](docs/history/2026-10-10-owner-waves-01-03-recommendations-accepted.md),
[HIS-20261010-003 writer-owned free-or-paid BYOK clarification](docs/history/2026-10-10-owner-byok-free-or-paid-clarification.md)
and [bounded design-entry delegation](docs/history/2026-10-10-owner-delegated-mvp-design-entry.md)
retain their original scopes. They do not authorize paid calls, feature execution,
private manuscripts or deployment under this remediation mandate.

[Task0044/immutable CP0044](docs/agent-workflow/context-packs/VEL-CP-0044.md) selectively integrates the exact Task0042/0043 sources after a fresh current-main pack. Original source branch and historical packs remain preserved; no compliance rule is changed.
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

### `docs/agent-workflow/inputs/VEL-TASK-0047/OWNER-SCOPE.md` @ `8246f63f480b08b1c81c72d44b36d7d11c565d49`

~~~~~~markdown
# Direct owner dispatch — 2026-10-24

https://github.com/Ben-001-sys/Vellistry/issues/108#issuecomment-6383802475

PR110 was merged by Codex under the owner's explicit ordinary-governance approval in the current conversation, after rechecking exact head491771a47b6974d16bb2e2d7187b052b56dfa7be, compatible based13deca2d6762d44f80035c6d89d2cb61d1ab1e8, valid distinct review, ready CI40086733401 SUCCESS and no unresolved actionable findings.

Final main `18c770ff6fce7401f7529667a37d7fb523cc55d9`; reviewed and merged complete Git tree both `314df6ff61f0f63f50770baab1871d8413f2a73d`. [Post-main40090741803](https://github.com/Ben-001-sys/Vellistry/actions/runs/40090741803) SUCCESS. This integrates preparation records only; no hosted query/credential/export execution or SQL adoption authorized. Ordinary owner rules remain; remediation delegation expired.

The owner separately authorized the bounded local-only IMP002 controller/component/synthetic-fixture implementation described in comments6383215024 and6382833013. This new direct owner dispatch authorizes implementation/testing through a new unique Task and immutable CP before edits; it does not authorize feature merge, hosted operations, SQL/RLS/grants, direct chapter/revision writes, auth architecture, credentials, private data, paid services or deployment. Broad G_DESIGN/G_CODE remain pending outside the exact slice. Task0046 and all historical evidence remain preserved. New Task0047 preparation follows on the verified merged main; Issue108 stays OPEN.

This is a Codex record of the direct owner instruction, not a fabricated independent human GitHub approval or continuation of the expired delegation. Original conversation permalink unavailable.


Task0047 owns only this separately authorized local-only implementation. No feature merge authority. No hosted calls.
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0047/APPROVED-HANDOFF.md` @ `5307ba702ee40f77b389b18478c89d0c96dd13eb`

~~~~~~markdown
# Original bounded handoff; approved by later direct owner dispatch

Source https://github.com/Ben-001-sys/Vellistry/issues/108#issuecomment-6382833013
Its PROPOSED status is historical; only the direct owner Task0047 scope grants current bounded code permission.

## B — smallest local-only IMP-002 implementation dispatch, prepared for owner decision

**PROPOSED, NOT DISPATCHED; NO FEATURE CODE STARTED.** Prepared from merged main `d13deca2d6762d44f80035c6d89d2cb61d1ab1e8`, subject to successful post-main verification and rechecking main at dispatch. Existing [IMP-002 handoff](https://github.com/Ben-001-sys/Vellistry/blob/d13deca2d6762d44f80035c6d89d2cb61d1ab1e8/docs/reports/VEL-IMP-002-HANDOFF-PROPOSAL.md) is source context; acceptance below is a proposal requiring a bounded owner code authorization.

### Objective and deliverable
Implement a headless Book Workspace controller/state contract and reusable organizer component exercised only through explicit synthetic test fixtures. Owned-book opening; chapter list/create/rename/reorder; separate book/chapter planning notes; stable chapter IDs and accessible keyboard controls. No production route or implicit simulated persistence. All fixtures must be labelled synthetic/local/unconfirmed. Full IMP-002 durability and JRN001 completion remain deferred.

### Proposed exact path allowlist
- `apps/web/src/lib/workspace/book-workspace-contract.ts`
- `apps/web/src/lib/workspace/book-workspace-session.ts`
- `apps/web/src/lib/workspace/book-workspace-session.test.ts`
- `apps/web/src/components/workspace/book-workspace-organizer.tsx`
- `tests/fixtures/book-workspace-synthetic.ts` (test-only adapter)
- `tests/workspace/book-workspace-fixture-page.tsx` and `tests/workspace/book-workspace-browser-checks.md` (explicit synthetic fixture plus reproducible browser steps)
- `package.json`: only a focused `test:workspace-contract` script using existing tsx/node test tooling; no dependencies/version changes.
- A new unique Task/CP/EB and its owner-scope inputs, scoped workspace report/evidence and the existing per-PR manifest.

The eventual canonical task must enumerate these paths exactly and reserve its own unique ID. Do not create/overwrite a dispatched ContextPack or start an unpinned implementation.

**Fixed local browser harness proposal (no added dependency):** use a second owned disposable checkout of the task head containing tracked files only, no copied env files. Place the versioned synthetic fixture page at transient `apps/web/src/app/__workspace_fixture/page.tsx` **in that test checkout only**; never commit/expose that route in the PR or production. Start existing Next tooling with `corepack pnpm --filter @vellistry/web exec next dev --hostname 127.0.0.1 --port 3105`, render only invented controller/adapter data, and use the installed Playwright browser tool for `http://127.0.0.1:3105/__workspace_fixture` checks. Record browser version, actions/assertions, screenshot evidence without secrets, fixture/hash and exact checkout SHA; stop the owned process and verify the route is absent from the final Git diff. No Supabase client initialization, real session, hosted URL, CLI login or credentials in this harness. If the port/tool/runtime is unavailable, record BLOCKED; do not add packages, alter CI, inspect envs or substitute a hosted target. Temporary test checkout creation/file placement is an explicit allowed action of the proposed future Task, not an action executed by this preparation.

### Required sources and reuse
Accepted ADR0006 Next/Nest/Supabase foundation, ADR0008 execution roles, accepted M1 scope; PLAN02 data/contracts, PLAN03 organizer frame27:44/state behavior and PLAN04 security/recovery are proposed contracts, not SQL authorization. Read LANGUAGE.md and accepted terminology dispositions before visible copy. Preserve existing Supabase auth and Library isolation helpers/tests; do not introduce another login system, service-role client or database.

### Acceptance and negative matrix
1. Two synthetic authors with separate books; opening/loading/empty/populated/error/unauthorized states. Adapter independently checks actor, book ownership and chapter membership. Reject forged owner payload, guessed foreign IDs, foreign chapter under own book and own chapter under a different book without rendering private titles/notes.
2. Duplicate titles retain distinct stable IDs. Create/rename validate trimmed1–180-character titles. Reorder accepts only a complete same-book permutation; duplicate/omitted/foreign IDs and stale order versions reject. Three chapters preserve prose/note identity through reorder; accepted_document/current_revision never mutated.
3. Notes stay separate from manuscript/revisions and survive same-session navigation in the test adapter. No reload/server save claim. In-flight edits and failed/unknown mutations remain visible/recoverable; ordinary retry cannot duplicate an ambiguous create. Explicit risk/reconciliation decision required.
4. A→B→A/account and book changes conceal old data; discard stale success/error responses. Failed identity verification cannot publish results. Keyboard create/select/rename/move, focus retention and live announcements must be browser-checked against the real component with invented data; static markup/unit tests are not browser PASS.
5. No AI/key requirement, hosted connection, production fixture route, new cache leak or unlabelled fake save. Existing23preflight and67Library regressions remain protected.

Mapping: ACC-M1-01/02/03 and ACC-M8-01/04/05, partial JRN001/JRN011. All11 journeys remain tracked; editor/durable save/recovery (IMP003), profiles, rules, AI, delete-confirm and counts are outside this first slice, not silently removed from the full plan.

### Verification and owner workflow
After specific owner authorization: verify latest main/unique IDs; commit the canonical Task and exact source inputs; generate, validate and commit its immutable CP **before edits**; execute in a new isolated Codex worktree. Run existing frozen dependency/check/build baseline and new focused positive/negative/controller tests, actual synthetic browser checks, applicable governance/traceability and exact-head CI. Produce EB with precise PASS/FAIL/BLOCKED/NOT_RUN and source hashes; distinct review; owner decides merge. Existing broad G_DESIGN/G_CODE remain pending; a task exception covers only these paths/actions.

### Permission boundary
This packet requests local feature-code authorization only for the exact paths and harness above. It grants none now. Direct author chapter/revision DML remains revoked; no API, SQL/RLS/schema, dependency, CI, protected setting or accepted policy changes. A later protected persistence contract (including atomic reorder, notes storage and manuscript/revision invariants), reviewed SQL paths and disposable integration tests require separate approval. No hosted, credential, private-manuscript, paid, deployment or merge authority. The expired remediation delegation remains closed.

The next executable step is owner approval of this exact slice and its test-harness envelope, followed by a unique canonical Task/CP. No feature implementation is running.
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0047/SOURCE-EXCERPTS.md` @ `a2c3897a6769e876f146171e26fd44cc9ddb42bd`

~~~~~~markdown
# Exact source excerpts, not new authority

Accepted ADRs remain accepted; LANGUAGE and PLAN03 whole documents remain proposed except existing accepted concepts/scoped dispositions. Read full sources as required by AGENTS.

## Source LANGUAGE.md
Git base18c770ff6fce7401f7529667a37d7fb523cc55d9; blob 1b8a700218c8f93bfb4ca7972b90c00d03c673c0; exact heading range ## 0. to before ## 1..

## 0. Quick reference for product designers, writers, and coding agents

1. **The author is in control.** Do not imply the application or AI independently authors, accepts, publishes, or establishes story truth.
2. **Use familiar writing words.** Prefer **book**, **chapter**, **manuscript**, **character**, **story thread**, and **writing rule** in general explanations; reserve **Story Profiles** and **Rules Studio** for the named Vellistry surfaces.
3. **Never collapse these boundaries:** manuscript / outline / notes; draft / saved revision; AI suggestion / accepted prose; suggested fact / approved story fact; AI prose acceptance / fact approval; local recovery / confirmed online save; exported document / full book backup.
4. **Actions name their effect:** **Create book**, **Add chapter**, **Continue writing**, **Rewrite selection**, **Accept suggestion**, **Reject suggestion**, **Approve fact**, **Dismiss suggestion**, **Download manuscript**, **Download book backup**, **Sign out**. Display-name choices identified as `PROPOSED_LABEL` need owner review before deployment.
5. **Status is evidence, not decoration.** Never display **Saved** without a server durability acknowledgement or **Saved on this device** without confirmed local persistence. A lost acknowledgement is **Save status unknown**, not necessarily **Save failed** or **Conflict**.
6. **AI is optional.** Never require an AI key for ordinary book writing, manual Story Profiles, rule editing, or supported export. Do not imply AI is free or that Vellistry pays provider bills.
7. **Current shipping boundary:** live implementation is login and a basic book library. Described chapter/editor/rules/AI UI is mainly approved product scope plus proposed UX, not verified deployed behavior.
8. **No silent renaming of technology:** labels here do not authorize changes to routes, SQL columns, RPCs, auth tokens, IDs, model/provider routing, source guidance files, or migration history.
9. **On an undefined or disputed term:** reuse a known semantic term where it fits exactly; otherwise add a proposed entry and request the owner's decision. Never invent another competing name.
10. **Check the exact affected screen and state** before using an example from this document. Example copy is a template conditioned on the specified behavior, never evidence that a feature works.



## Source LANGUAGE.md
Git base18c770ff6fce7401f7529667a37d7fb523cc55d9; blob 1b8a700218c8f93bfb4ca7972b90c00d03c673c0; exact heading range ### 4.1 to before ### 4.2.

### 4.1 Authoring, documents and manuscript structure

| Primary UI term | Meaning and correct scope | Contextual alternative | Avoid / do not confuse with | Basis / status |
|---|---|---|---|---|
| **Vellistry** | Working product name used in current UI/repo | None | Generic “AI writer” as sole product name | `EXISTING_UI`; brand/trademark clearance unresolved |
| **Your books** | Signed-in author's book collection, existing page heading `/books` | **Books** in compact navigation; **Book library** in help text | Projects or dashboard when no project/dashboard entity exists | `EXISTING_UI` |
| **Book** | Author-owned manuscript container; an independently organized work | Novel in explanatory prose if genre appropriate | Project, series, document, chapter | `APPROVED_CONCEPT` |
| **Book title** | Name of one book, currently required 1–120 characters | Title within its book form | New book title as permanent field label, document name | `APPROVED_CONCEPT`; `PROPOSED_LABEL` |
| **Chapter** | Ordered component of a book; chapter identity independent of display order | Chapter number in contextual metadata | Scene; each may later be separate | `APPROVED_CONCEPT`; chapter UI not implemented |
| **Chapter title** | Author's label for a chapter | Title inside clearly scoped chapter form | Heading style, book title | `PROPOSED_LABEL` |
| **Manuscript** | Accepted prose organized into chapters; the text intended as the book | **Writing** as an action/short workspace heading | Outline, planning note, generated alternative, published edition | `APPROVED_CONCEPT` |
| **Manuscript editor** | The place to write and format the book without AI | **Editor** when surrounding context is clear | AI Studio, chat, layout/print editor | `APPROVED_CONCEPT` |
| **Writing workspace** | Work area combining manuscript and adjacent author tools | **Book workspace** for book-level shell | “Document management console” | `PROPOSED_LABEL`; route/layout proposed |
| **Planning notes** | Non-manuscript notes supporting a chapter/book | **Notes** inside scoped view | Canon, scene prose, revisions | `APPROVED_CONCEPT`; exact nav `PROPOSED_LABEL` |
| **Outline** | Planned structure or future events; can differ from what has happened | Story plan, only explanatory | Current story facts, manuscript | `FUTURE_RESERVED` as dedicated MVP module; concept distinct |
| **Scene** | A bounded narrative event/passage inside a chapter | Scene summary as a planning record | Chapter; scene-level route/schema is not approved for MVP | `FUTURE_RESERVED` / `PENDING_DECISION` |
| **Series** | Grouping of books and shared narrative continuity | Book series | Book or workspace; not a present first-MVP object | `FUTURE_RESERVED` |
| **Word count** | Number of words using the implementation's defined counting behavior | `1,234 words` as displayed value | Estimated pages or reading time | `APPROVED_CONCEPT`; counting rules to test |
| **Focus mode** | Reduced-distraction manual writing view | Distraction-free writing in help | Full-screen alone, read-only preview | `APPROVED_CONCEPT`; exact UI `PROPOSED_LABEL` |
| **Revision** | Persisted accepted version of a chapter/manuscript | **Version** in simpler explanations, if clearly a saved snapshot | Unsaved browser draft; AI suggestion; backup | `APPROVED_CONCEPT` |
| **Revision history** | Author-visible record of saved accepted revisions, subject to implemented retention | **History** within manuscript only | Browser Undo stack; generated proposal list | `APPROVED_CONCEPT`; `PROPOSED_LABEL` |
| **Recovered draft** | Local/recoverable writing not automatically accepted as newest server revision | Local draft if provenance requires it | Restored accepted revision; approved story fact | `APPROVED_CONCEPT`; `PROPOSED_LABEL` |



## Source LANGUAGE.md
Git base18c770ff6fce7401f7529667a37d7fb523cc55d9; blob 1b8a700218c8f93bfb4ca7972b90c00d03c673c0; exact heading range ## 10. to before ## 11..

## 10. Workflow and status language

**Critical implementation rule:** The author-visible labels below describe semantics for an approved or proposed workflow. They are **not** a claim that the statuses are implemented in the manuscript UI. Show a label only if an actual state/receipt supports it. Internal enum names may remain unchanged.

### 10.1 Book Library — present application code

| Internal/evidenced state | Display phrase | Allowed when | Don't say |
|---|---|---|---|
| `loading` | **Loading your books…** | Verified current-author list request is pending | No books yet |
| `empty` | **No books yet. Create your first book.** | Authorized request returned zero rows and no unresolved create state | No matching books if filters cause empty |
| `populated` | **Your books** (page); book list | Authorized list has rows | Empty-state text |
| `unauthorized` | **Sign in to see your books.** | Current session is not authenticated | Your books were deleted |
| `error` | **Couldn't load your books. Try again.** | Failed authorized load; no false list | No books yet |
| `createPending` | **Creating book…** | Create request actually in progress | Saved |
| `createError` | **Couldn't create this book. The title is still here.** | Definite pre-forward or other confirmed failure and draft preserved | Book lost; retry definitely safe if uncertain |
| `createUnknown` / `acknowledgment_unknown` | **We couldn't confirm whether the book was created. Check your books before trying again.** | Server acknowledgement genuinely unknown | Create failed; Book created |
| `createAbsent` | **We still can't confirm this book was created. Creating it again could make a duplicate.** | Refreshed list didn't prove the write; risk persists | Definitely absent / safe to retry |
| `session_changed` | **Your session changed. This book wasn't saved to this account.** | Verified identity change, not a generic timeout | Account data exposed |
| `signingOut` | **Signing out…** | Sign-out started | Signed out |
| `signOutError` | **Couldn't complete sign-out. You may still be signed in. Try again.** | Sign-out failure observed | Signed out everywhere |

The current exact `LIBRARY_COPY` strings in `apps/web/src/lib/library/book-library-state.ts` use a combination of “save” and “create” language. Proposed revisions above are **not permission to bypass the existing unknown-ack safety logic**. Prefer *create* for book creation as long as the implementation still performs POST creation. The intentionally cautious uncertainty semantics must be preserved.

### 10.2 Chapter manuscript save and recovery — approved intent, proposed UI

| Underlying condition | Author-visible status | Necessary behavior |
|---|---|---|
| No local changes since last confirmed persisted revision | **Saved** or **Saved · revision [n]** | Actual acknowledged durable server revision |
| Locally changed, not yet acknowledged | **Unsaved changes** | Never imply durability |
| Save request pending | **Saving…** | Actual request pending; keep editor responsive |
| Connectivity unavailable | **Offline** | Add **Saved on this device for recovery** *only* if IndexedDB local persistence was confirmed; otherwise disclose not yet safely stored |
| Request outcome unknown; acknowledgement possibly lost | **Checking save status…** or **Save status unknown** | Reconcile before risk of duplicate write; not falsely a 409 conflict |
| Proven concurrent different revision | **A newer saved version exists. Review both versions.** | Non-destructive compare/reconcile |
| Local recovery record found | **Recovered draft available** | Compare and explicitly choose, not automatic server replacement |
| Save definitely failed | **Couldn't save your changes. Your draft is still available [only if verified].** | Specific recovery action and no false local guarantee |

Do not show **All changes saved** while local edits remain unacknowledged. Never use **Synced** unless actual cross-device state is proven. Status is per affected chapter/book, not one blanket label copied from a different record.

### 10.3 AI suggestion lifecycle — approved semantics, future interface

| Condition | Suggested label | Action / distinction |
|---|---|---|
| AI not configured | **AI not connected** | Manual writing remains available; connect only if desired |
| Request preview awaiting author approval | **Review what will be sent** | Show provider, model, selected text, applicable context, rules and costs/limitations |
| Request accepted and running | **Generating suggestion…** | Do not alter manuscript yet |
| Valid response awaiting review | **Suggestion ready to review** | **Accept suggestion** / **Reject suggestion** |
| Author rejects | **Suggestion rejected** | Original accepted manuscript unchanged |
| Server commits accepted proposal | **Suggestion accepted** | Only after actual acknowledged revision |
| Source changed after request | **This suggestion is out of date. Your writing has changed.** | Disable Accept; ask for new request |
| Explicit cancellation succeeded | **Suggestion cancelled** | Only when cancellation handling is known; do not guarantee provider never charged |
| Provider request failed | **Couldn't generate a suggestion. Your manuscript hasn't changed.** | Show safe retry only when accepted text unaffected |
| Undo accepted and committed | **Change undone** | New compensating revision confirmed; not arbitrary history erasure |

**Not synonyms:** AI suggestion **out of date** ≠ server manuscript **save conflict**. Provider **timeout** ≠ text generation **cancelled**. **Accepted** prose ≠ **approved** profile facts.

### 10.4 Story fact lifecycle — approved semantics, future interface

| State/condition | Suggested label | How to explain it |
|---|---|---|
| Extracted/proposed fact | **Suggested fact** / **Needs review** | Not part of approved story state |
| Author changes candidate before deciding | **Edited suggestion** | Still unapproved until explicit approval |
| Author approves fact | **Approved fact** | Explain source and story-time association |
| Author dismisses | **Dismissed suggestion** | Does not establish story canon |
| Source text edited, withdrawn or no longer matches | **Source changed — review required** | Don't silently invalidate previous human decision or keep approving stale candidate |
| Source passage missing/uncertain | **Source unavailable** / **Needs review** | Never invent a quote or story time |
| Belief/claim, not established truth | **Character belief** / **Unconfirmed claim** if deliberately modeled | Do not label objective fact |

Do not promise the system automatically detects all contradictions, preserves all point-of-view knowledge, or understands every retcon in MVP.

### 10.5 Rule and connection states

| Object | Display states | Requirements |
|---|---|---|
| Writing rule | **Enabled**, **Disabled**, **Inherited** (if actual scope engine supports), **Overridden** (if actual override exists) | State describes applicability, not literary merit |
| Default rule pack | **Not available** / **Awaiting verified guidance** if uncertified | Don't show source-mismatched sample rules as real defaults |
| AI connection | **Not connected**, **Connected** only if actually verifiable in live session; **Connection unavailable** where known | No guarantee of persistent credential storage or provider availability |
| Provider/model | **Available for this request** only after route checks; **Unavailable** if vetted route disabled | Avoid pricing/privacy promises without verification |



## Source docs/decisions/ADR-0006-next-nest-supabase-implementation-foundation.md
Git base18c770ff6fce7401f7529667a37d7fb523cc55d9; blob d53724d08d065a9e354a95d5953068fd497b5cfb; exact heading range ## Decision to before ## Alternatives.

## Decision

**Accept the following as the implementation baseline, not an irrevocable forever stack:** a TypeScript/pnpm workspace holding **Next.js 16 / React 19** for author-facing UI and **NestJS 11** for protected application API and domain modules. Keep the author writing experience on **Tiptap 3** with PostgreSQL-acknowledged chapter revisions and best-effort local Dexie recovery.

Use **Supabase Auth** as the only user sign-in authority; **Supabase PostgreSQL** as the durable relational store with per-author/book Row Level Security; and optional private Supabase Storage for authorized import/export files when that surface is implemented. **No Better Auth alongside Supabase Auth**.

Start with **Supabase CLI local development**, no production credentials and no paid service. Managed Supabase Free versus properly self-hosted production Supabase/PostgreSQL is still open. Do not make cloud deployment a condition for offline/no-paid development. The Nest API must validate Supabase access credentials before serving author data, use RLS-scoped non-service database calls, never accept client-supplied owner IDs as authority and never expose privileged keys to browsers. Next.js is frontend/BFF, not an unguarded duplicate backend.

For Story Memory, retain author-approved temporal canon events and PostgreSQL full-text retrieval as the initial memory system. pgvector/embeddings are **optional** after realistic fiction-quality evidence. Background execution is a separate worker boundary, with specific provider (Graphile Worker versus Supabase Queues) **undecided**. Generative AI remains optional, consented and provider-neutral; no paid model required or secretly selected.



## Source docs/decisions/ADR-0008-codex-primary-agentic-implementation-workflow.md
Git base18c770ff6fce7401f7529667a37d7fb523cc55d9; blob 08b9a563fb79ebb91f20d0f84e0d752c1bb6709d; exact heading range ## Decision to before ## Alternatives.

## Decision

**Codex is Vellistry's default primary code implementation agent starting 2026-10-14**, for each newly authorized bounded coding task. Preserve the existing role-based control plane:

| Role | Responsibility | Authority boundary |
|---|---|---|
| **Project owner** | Select/approve scope, consequential changes, security posture, spending, database operations, PR acceptance/merge and release | Sole final decision maker; permitted to self-review under the constitution |
| **ChatGPT — architect/coordinator** | Read current repository evidence and accepted ADRs; define requirements, task IDs, ContextPacks, acceptance/negative tests, path allowlists and exclusions; assess Codex reports, diff and CI; advise owner | Does **not** make owner decisions, treat its assessment as independent human review, or act as the default feature-coding executor |
| **Codex — primary implementer** | On an explicitly scoped task, inspect pinned source, implement code/tests in an isolated Git branch/worktree, run valid checks, produce a factual ExecutionBundle and proposed PR | No self-authorization to change scope/ADRs, merge, deploy, perform cloud SQL/migrations/resets, incur paid costs, use real manuscripts or disclose secrets |
| **GitHub — source of truth and review ledger** | Host code, authoritative docs, versioned ADRs, task/ContextPack/ExecutionBundle artifacts, PRs, CI, decision history and current state | PR creation and green CI do **not** equal owner acceptance or deployment readiness |
| **Independent verifier (optional)** | Challenge the source diff, independently rerun tests and negative scenarios when possible | Advisory; the same agent's self-review is not an independent execution, and no second human is mandated |

**Default work loop:**

1. **Observe:** ChatGPT inspects the merged `main` SHA, current PRs, accepted requirements/ADRs and latest top of `CURRENT-STATE.md`; distinguish verified facts from older historical status.
2. **Authorize a specific slice:** The owner approves the bounded objective and sensitive actions. ChatGPT prepares a unique task/ContextPack with source SHA, intended changes, allowed/forbidden paths, behavioral acceptance checks, security and cost restrictions. A prepared packet does not grant approval on its own.
3. **Dispatch to Codex:** Codex executes in a dedicated branch/worktree against the designated SHA, without reusing old task/pack IDs or overwriting another agent's in-progress branch. Agent may use the existing repository tools/CI and must declare tool/model/runtime in its evidence.
4. **Report evidence:** Codex supplies an ExecutionBundle with base/head SHA, changed paths, actual commands and exit codes, unit/integration/browser results with real environment and fixture descriptions, `PASS|FAIL|BLOCKED|NOT_RUN`, original artifacts and `FACT|INTERPRETATION|PROPOSAL`.
5. **Review:** ChatGPT reviews the exact submitted code, contracts, tests, workflow behavior, known risks and evidence. The owner determines corrections, rejection or PR acceptance/merge. CI success alone cannot waive human acceptance/security/recovery testing.
6. **Reconcile:** After an approved merge, verify files on merged `main` and post-merge checks; update `CURRENT-STATE.md` and issue/task status, preserving past decisions and results. Proceed to a new slice only after its own authorization.

Codex is a **role assignment**, not a mandatory IDE or subscription. Cursor may continue as an editor, historical test environment or explicitly assigned alternate agent, but **Cursor Agent is no longer the default implementer**. Other agents may implement a task only when the owner explicitly reassigns that task; do not silently switch providers or claim that a ChatGPT-side GitHub change was executed by Codex.

**Existing work:** PR #64 remains a valid merged Cursor-era implementation and its recorded verification evidence does not change. Draft [PR #65](https://github.com/Ben-001-sys/Vellistry/pull/65) is a **ChatGPT-authored, not Codex-executed** implementation proposal; do not relabel its origin, auto-merge it or treat its tests as Codex evidence. It may be reviewed, adopted via a fresh bounded Codex handoff, revised or closed by the owner, with its actual provenance preserved.

**Security boundary:** The owner selected hosted **Supabase Cloud** project `vellistry-dev`, not a locally self-hosted Supabase installation. All hosted schema migrations, Auth fixture creation, remote resets, real manuscript use, deployment and paid provider calls remain subject to separate explicit task-level authorization and appropriate testing. In particular, the historical signed-out-but-still-valid JWT/direct PostgREST concern remains a private-pilot blocker until mitigated and verified.



## Source docs/plans/VEL-PLAN-03-UX-NAVIGATION-STATES-2026-10-11.md
Git base18c770ff6fce7401f7529667a37d7fb523cc55d9; blob 99d016a057617b71c0810bc04ea258449ab01cfb; exact heading range ## 1. to before ## 2..

## 1. Proposed navigation hierarchy

```text
Public/sign-in
  → Authenticated Library /books
    → Book workspace /books/:bookId (owner only)
      → Chapter manuscript /books/:bookId/chapters/:chapterId
         left: chapter rail / organizer
         middle: manual Tiptap editor
         right: Story Workspace inspector (optional drawer)
         toolbar: formatting, find, save status, history
      → Story Workspace /books/:bookId/story
      → Rules Studio /books/:bookId/rules
      → Export / backup / privacy for owned book
  → Author settings (account session, optional AI connection)
  → Contextual modals/drawers: unsaved navigation, save recovery,
      revision compare, fact review, AI consent, proposal review,
      export/delete confirmation
```

These paths are **candidates** except existing `/`, `/login`, `/books`, `/api/books`. Do not generate routes solely because pictured in Figma. Book ID/Chapter ID always scoped and access-checked; no sensitive content in URL query or preview caches.



## Source docs/plans/VEL-PLAN-03-UX-NAVIGATION-STATES-2026-10-11.md
Git base18c770ff6fce7401f7529667a37d7fb523cc55d9; blob 99d016a057617b71c0810bc04ea258449ab01cfb; exact heading range ### Library / account to before ### Editor / revision receipt.

### Library / account
`checking-session→loading→empty|populated|error|unauthenticated`. On auth identity change, clear or partition **all** account-scoped caches, pending requests and local context (books, chapters, profiles, facts, rules, proposals, recovery); late responses from A are ignored when B is current. On sign-out with unsynced draft, show an explicit retain/delete-on-device choice based on approved local-draft policy instead of silently destroying work.


## Exact acceptance/journey rows
Source docs/requirements/MVP-USER-JOURNEYS-AND-ACCEPTANCE-2026-10-09.md; blob b61aef6b9748382e1b173e52caf598178c389962; selected lines containing ACC-M1-, ACC-M8- or **VEL-JRN-.

| **VEL-JRN-001** | Start a book and move between chapters without losing writing | M1 M2 M3 M8 | 01-004, 01-006, 02-001, 02-015, 02-019 | R05 R15 R16 |
| **VEL-JRN-002** | Write and format normally with no model/account key configured | M2 M3 M8 | 02-001, 02-002, 02-013, 02-017, 02-021 | R05 R16 |
| **VEL-JRN-003** | Close, reopen, recover and export an author's manuscript | M3 M8 | 02-018, 02-019, 14-003, 14-015, 17-015 | R11 R15 R19 |
| **VEL-JRN-004** | Manually create and revise a visible character/storyline profile | M4 M8 | 08-021, 08-022, 08-023, 08-024, 08-025 | R07 R15 |
| **VEL-JRN-005** | After drafting, inspect and approve/revise/dismiss candidate profile changes | M2 M4 M7 | 08-026, 08-027, 09-025, 09-027, 09-030 | R07 R10 R19 |
| **VEL-JRN-006** | Browse, disable, restore and add an author creative rule | M5 M8 | 04-001..009; 04-011, 04-023 | R01 R06 |
| **VEL-JRN-007** | Connect an evaluated provider, preview context and request Continue | M5 M6 M7 M8 | 05-007, 06-001, 06-002, 11-001, 11-002 | R06 R08 R15 |
| **VEL-JRN-008** | Select prose, obtain a Rewrite suggestion, reject or accept it, and undo | M2 M5 M6 M7 | 05-008, 11-001..011 (bounded) | R05 R06 R08 R10 |
| **VEL-JRN-009** | Accept AI prose and review separate new profile candidates | M4 M6 M7 | 08-026, 09-026, 09-027, 09-029 | R07 R10 |
| **VEL-JRN-010** | Make edits while an AI request is pending, then handle stale suggestions safely | M2 M3 M7 | 11-011, 11-012; 02-017..019 | R05 R10 R19 |
| **VEL-JRN-011** | Verify two accounts/books remain isolated and author data can be retrieved/deleted | M3 M8 | 17-003, 17-004, 17-013..017 | R14 R15 R19 |
- **ACC-M1-01**: Given an authenticated author with no books, when they create a book and two chapters, then each item appears in that author's book navigation and can be reopened.
- **ACC-M1-02**: Given three differently titled chapters with saved content, when the author reorders them, then chapter order changes **without** moving prose to the wrong chapter or discarding an existing edit.
- **ACC-M1-03**: Given a note attached to a chapter, when the author navigates elsewhere and returns, then the note remains separate from accepted manuscript text.
- **ACC-M8-01**: Given Author A and Author B with separate books, when A attempts to access B's manuscript, approved profiles, exports or API-key state directly or through nested document endpoints, then unauthorized read/write is denied; tests cover guessed IDs and cross-account mutation.
- **ACC-M8-02**: Given manuscript text is about to be sent to an external AI provider, when the author has not permitted that provider/task transfer, then Vellistry does not send the manuscript.
- **ACC-M8-03**: Given secrets, logs, screenshots and backups, when an audit runs, then API credentials and private content are not exposed to unauthorized users or repository artifacts.
- **ACC-M8-04**: Given a keyboard-only writer, when navigating the primary editor, chapter list, profile panel, Rules Studio and accept/reject actions, then primary tasks can be completed without mouse-only controls.
- **ACC-M8-05**: Given degraded provider/network/storage states, when the application reports progress, then it does not falsely claim a successful write/generation/backup.
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0047/WORKSPACE-CONTRACT.md` @ `0418e035f65677fd056a2d87d88acf17da657acd`

~~~~~~markdown
# Task0047 bounded implementation contract

Only reusable local controller/component and explicit synthetic test adapter; no production route, API call or persistence. Verification callback readOwner is injected and must provide independently verified identity; reuse existing Auth semantics, never treat payload owner IDs as authority. No new login integration.

Document: owned book ID/title, synthetic workspace version, stable chapter ID/book ID/title/separate notes, separate book notes. Title1–180 trimmed chars; notes up to10000chars in this bounded synthetic contract; limits do not adopt a hosted schema. Mutation commands create/rename/reorder/notes carry an opaque operation ID and expected workspace version. Reorder is exact unique same-book permutation; every confirmed mutation advances a local adapter version, distinct from manuscript current_revision. Synthetic accepted-document/revision markers must remain unchanged through all organizer actions.

Adapter independently enforces actor/book/chapter ownership, validates documents/commands and returns confirmed receipt or definite denied/invalid/conflict. Lost reply/exception/unknown is ambiguous; controller keeps intent+operation ID, ordinary mutation/retry locked. An explicit receipt check can reconcile only a matching author/book/operation receipt; missing receipt never proves no commit. No automatic mutation replay. Duplicate same-ID/same-command replay returns original receipt; altered same-ID command rejects in adapter.

Controller rechecks identity before dispatch and after every async response, including failures/receipts. Generation and owner/book guards suppress stale responses. Switches/failed identity conceal visible documents/drafts immediately; private scope caches partitioned by author/book; old pending writes remain uncertain across A→B→A rather than becoming safe retries. Frozen snapshots cannot mutate internal state. Dispose hides and releases controller state. Notes drafts may keep later typing while a confirmation is pending; confirmed older payload must not erase newer edits. No unsignaled dirty draft discard on chapter navigation.

UI: semantic book heading, chapter list, labelled Add chapter/Rename chapter forms, book/chapter Planning notes, native keyboard-operable controls with unique accessible names and aria-current selection, live status, focus moved to the moved/created chapter's open control after local confirmation. Disable write dispatch while busy/unknown/conflict; retain editable note drafts when safe. Manual Reload local book preserves drafts and resolves known-version conflict for review; Check local result performs receipt lookup only. Always identify synthetic/local-session confirmation versus no server/device durability. Do not label results Saved. No AI requirement. Error messages never expose transport internals, foreign titles or actor IDs.

Fixture controls select synthetic AuthorA/B/books, sign-out/unverified identity, next lost-ACK/error, paused pending mutation/release and external version change. Fixture lives only in tests. Browser: second owned clean checkout of tested source, no copied env files; transient __workspace_fixture/page.tsx from approved versioned fixture only there; Next loopback3105 via existing tooling, installed Playwright, no new dependency. No hosted clients initialized; no app route in final feature diff. Stop fixture service after checks. Unit/browser outcomes report exact SHA, actual actions, failures and limitations; no hosted acceptance.

Acceptance: owned opening and distinct empty/error/denied; stable duplicate-title IDs; create/rename/reorder without changing notes/prose association; book/chapter notes separation; cross-owner/guessed/cross-book/forged-owner denial; invalid permutations and stale versions; A→B→A/stale success+failure/failed identity; unknown before/after commit, missing/wrong receipts/no duplicate create; newer drafts retained; keyboard create/select/rename/move, focus, labels/live announcements and no fake Saved. Existing Library/preflight protections preserved. Full persistence/editor/count/delete features remain deferred.
~~~~~~

### `docs/reports/VEL-LANGUAGE-DISPOSITIONS-2026-10-20.md` @ `1be5adef09998beb818c3521b88c6a70298e97e6`

~~~~~~markdown
---
id: VEL-LANG-DISPOSITIONS-20261020
type: scoped-language-disposition
status: proposed-for-review
created_at: '2026-10-20'
task_id: VEL-TASK-0035
decision_maker: Codex under one-time owner delegation,19October2026
human_review_claimed: false
whole_contract_adopted: false
new_feature_implementation: false
---

# Scoped language dispositions — 20 October 2026

## FACT — authority and limits
The owner explicitly delegated ordinary terminology decisions in the19October mandate. These are scoped Codex decisions for verified repository wording; their repository adoption takes effect only after actual independent review, required CI and delegated integration. They are not fabricated human approvals. The complete LANGUAGE.md contract remains proposed-owner-review with approval_required true and its historical audit baseline preserved.

Original PR88/Task23 matrix, source snapshots, assertions and provenance remain unchanged as dated history. This is the current disposition record. ADOPT means the named ordinary meaning/current copy is selected; PROVISIONAL preserves an uncertain future mapping; DEFER concerns absent functionality; BLOCKED lacks specific external evidence. None means hosted/private-pilot/release acceptance.

## FACT / scoped decision — fifteen rows

| ID | Present wording/state | Recommendation | Evidence | Disposition | Surface | Verification | External limit |
|---|---|---|---|---|---|---|---|
| LANG-P01 | Vellistry remains the working project name in existing layout/login. | Retain Vellistry as the working name; make no registered-mark or legal-clearance claim. | LANGUAGE.md §§0/18; apps/web/src/app/layout.tsx and login/page.tsx | ADOPT | Brand/headings | Existing source wording inspected; no legal clearance performed. | Trademark, domain and commercial clearance remain separate external facts. |
| LANG-P02 | ADR0007 preserves260 variant records; deployable active mapping is uncertified. | Preserve raw hashes, variants and printed codes. Publish no certified130/134active-default mapping. | ADR0007 Decision/Implementation status; LANGUAGE.md §13.2 | BLOCKED | Future Rules Studio/default-pack help | ADR0007 provenance rules retained; original guidance package certification NOT_VERIFIED. | Frozen writing-guidance source/version verification and the reviewed active mapping remain required; recovering a raw research export alone does not certify active defaults. |
| LANG-P03 | Story Profiles is accepted concept; Story Workspace is proposed shell, no current route. | Retain accepted Story Profiles for the capability; Story Workspace remains a proposed view. Story Bible is not an automatic rename. | LANGUAGE.md §§4.2/5/18; actual current routes | PROVISIONAL | Future story navigation/help | Source meanings inspected; no story workspace route or author usability acceptance. | Exact future shell/view and record mapping need the separately dispatched design/implementation evidence, not another routine terminology permission. |
| LANG-P04 | Storyline/thread terms coexist in approved intent; records/UI absent. | Use Story threads provisionally for recurring plot records; storyline may explain context. Do not rename schemas from terminology alone. | LANGUAGE.md §§4.2/18; accepted product meaning retained | PROVISIONAL | Future profile/story navigation | Accepted narrative intent retained; record/schema mapping and author tests NOT_RUN. | Future record mapping remains uncertain and outside this remediation code scope. |
| LANG-P05 | Current schema/specification uses chapters; no approved separate scene editing unit. | Retain chapter as the accepted MVP editing unit; a separate scene entity remains deferred. | LANGUAGE.md §§4.1/18; ADR0003; Wave5 chapter context | ADOPT | Existing domain references; future chapter workspace | Accepted scope/schema terminology inspected; chapter CRUD/editor implementation is not claimed. | Any new scene model or chapter feature needs a separate authorized feature task. |
| LANG-P06 | Existing Library now uses Create book, Check your books and Create again anyway; uncertain creation remains explicitly unverified. | Use creation-specific labels and retain the duplicate warning. Pre-forward session mismatch is a rejected request; genuinely unknown dispatched writes remain uncertain and block ordinary retries. | book-library-state.ts LIBRARY_COPY/libraryRegion; book-library-session.ts retryUncertainCreate; books/page.tsx | ADOPT | Existing library controls/status/accessible names | Task36 corrects the separate review P2 against Task35. Regression-before:67 tests,66PASS/1FAIL at a552b3cbf42f363fa83e4787bcc90b0991cfb162. Corrected verification is recorded in EB0036; hosted/browser/author acceptance NOT_RUN. | Real hosted persistence is unverified. No new confirmation dialog, receipt, retry behavior or accessibility acceptance is implied. |
| LANG-P07 | Existing signup says Account requested; check email if confirmation is enabled. | Retain conditional confirmation wording; assert definite delivery/sign-in only after observed behavior. | apps/web/src/app/login/page.tsx submit(signup) | ADOPT | Existing signup status/live region | Source conditional wording inspected; hosted settings, signup delivery and Auth fixtures NOT_RUN. | Only the wording is adopted. The actual hosted confirmation setting and delivery remain unverified and separately authorized. |
| LANG-P08 | Optional BYOK and session-only planned custody are selected intent; production AI settings absent. | Keep optional BYOK intent and manual writing without an AI key. Future key-recipient/custody/cost copy must match tested implementation. | Owner BYOK HIS20261010-003; Wave5 decision; LANGUAGE.md §13.3 | DEFER | Future AI settings/consent/privacy | Selected intent inspected; provider, retention, privacy and cost tests NOT_RUN. | Future AI settings/consent and verified custody/provider behavior are outside this scope. |
| LANG-P09 | No production manual editor or persisted AI-acceptance Undo exists. | Reserve Undo for editor history and Undo accepted change for verified persisted compensation, once implemented. | ADR0003; Wave5 transactional acceptance; LANGUAGE.md §13.4 | DEFER | Future editor and AI review controls | No production editor or persisted AI-acceptance Undo tested or implemented here. | Future transaction/UI evidence must prove later edits and ownership remain safe. |
| LANG-P10 | Book-create acknowledgement is implemented; chapter autosave/recovery receipts are not. | Tie Unsaved, Saving, Saved, Save status unknown, Conflict and Recovered draft to actual document state and receipts. Existing Library wording concerns book creation only. | LANGUAGE.md §10.1–10.2; book-library-state.ts; Wave5 acceptance | DEFER | Future chapter save/recovery indicators | Library creation semantics are source-reviewed; chapter autosave/recovery acceptance NOT_RUN. | No chapter save, recovery persistence or receipt guarantee is implemented by terminology. |
| LANG-P11 | ADR0004 records interchange/portable recovery intent; complete product export/restore/deletion absent. | Keep manuscript export distinct from portable book backup; deletion/recovery wording requires proven retention. | ADR0004; LANGUAGE.md §§4.4/13.5/18 | DEFER | Future export/restore/deletion dialogs | No production export/full-book backup/deletion recovery acceptance here. | Future export fidelity and actual retention/recovery evidence remain necessary. |
| LANG-P12 | Layout declares html lang=en and source UI is English; no localization system. | Retain source English and existing lang=en. Make no broader localization, IME or RTL support claim. | apps/web/src/app/layout.tsx; LANGUAGE.md §18 | ADOPT | Current source copy/language attribute | Current source language inspected; locale/dialect/IME/RTL acceptance NOT_RUN. | Broader language support and composition/accessibility tests remain future evidence. |
| LANG-P13 | Current implemented routes are /, /login, /books; no account/AI/export settings pages. | Treat Account settings, AI settings and Export and backup as future headings until actual routes exist. | apps/web/src/app route inventory; LANGUAGE.md §6/18 | DEFER | Future navigation/settings | No new settings route or active navigation added. | Future navigation implementation and acceptance remain separately dispatched. |
| LANG-P14 | OpenRouter first adapter is planned; live model menu, availability and cost not accepted. | Show no certified model route, availability, privacy or cost fact without actual provider evidence. | Wave5 decision; LANGUAGE.md §18 | BLOCKED | Future provider/model/cost indicators | Production provider route/usage/privacy/cost acceptance NOT_RUN; no provider call made. | Current provider facts and implementation tests remain missing; no paid call is authorized. |
| LANG-P15 | LANGUAGE.md is merged through PR80, with factual presence corrected through PR99; its whole-contract metadata stays proposed-owner-review. | Retain the proposed contract and historical baseline; use this separate record for bounded delegated dispositions, not blanket acceptance. | Git fca0d96:LANGUAGE.md; PR80 merge; original metadata/§18 | ADOPT | Current onboarding/review evidence | Merged-presence correction and seven preservation assertions verified; no whole-contract adoption. | External facts and future feature acceptance remain governed independently. |

## INTERPRETATION
Working-name/chapter/source-English terminology, conditional signup wording, factual presence and existing creation copy can be selected without certifying trademarks, cloud configuration, provider prices or unbuilt screens. The four Library status messages and three labels retain every existing state/request/identity control. The duplicate warning and explicit risk retry remain distinct from GET-only checking. CORRECTION36: the BFF session-mismatch409 rejects before forwarding, so its copy must describe rejection. Actual dispatched lost acknowledgements still use createUnknown and retain the duplicate-prevention lock. The prior Task35 wording was a demonstrated P2, not accepted semantics.

## PROPOSAL — verification and integration
Use the committed seven-literal COPY-PLAN and exact-code comparison, existing66Library/22preflight regressions, builds/typechecks, original matrix/source reassembly and current matrix negative assertions. Actual outputs and limitations belong in EB0035. Genuinely separate trusted source review and actual ready/post-main CI are required before adoption. No new dialog, route, schema, editor, AI, hosted operation, paid call, private manuscript, deployment or settings change is authorized.

The fifteen original question rows remain in LANGUAGE.md as dated proposal history; the added link points here for current scoped dispositions. Source authentication, missing SRC004, future functionality and security gates remain explicit. Rollback is a source revert of these bounded wording/documentation changes, not a database operation.

## Amendment36 review correction
Task35/CP35/COPY-PLAN and EB35 remain immutable historical source. Separate trusted review01a159f6-1541-7a61-bae0-763daaccc0e9 found the session-copyP2. New Task36/CP36 and CORRECTION-PLAN supersede only its erroneous session literal and this current evidence/replay. All six other application-copy changes, runtime state, identity verification and risk retry remain unchanged. Actual before/after tests and final review/CI are bound by EB0036. No hosted/browser acceptance is implied.
~~~~~~

## Execution reporting
Return an ExecutionBundle with FACT / INTERPRETATION / PROPOSAL sections,
tests actually performed, changes, evidence gaps, and pending owner approval.
