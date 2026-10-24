---
id: VEL-CP-0049
title: 'Context for VEL-TASK-0049: Prepare protected IMP002 chapter and planning-note
  persistence contract'
type: context-pack
status: prepared
created_at: '2026-10-24'
version: 0.1.0
task_id: VEL-TASK-0049
base_commit: 59371c80abeb640d8eb9004c6d1bf6de37e6cc54
task_blob_sha: b46f15c2cd80654d8ed8fe86db76fadaee7d3da3
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
  git_blob_sha: af3eb0508c797ddf5ba18dc02876386c28270f11
  source_status: active
- path: docs/agent-workflow/PR-COMPLIANCE.md
  role: governing-source
  git_blob_sha: 5f4845623aef3abb15fba7fbe8e78474902cca00
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0049/OWNER-SCOPE.md
  role: governing-source
  git_blob_sha: 349d613babdaf94f687ac38a648dad42ccb127ff
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0049/BOUNDARY.md
  role: governing-source
  git_blob_sha: 8b45f9de4e5801db79723dd0e047a56df1a167f2
  source_status: unrecorded
- path: supabase/migrations/20261009000000_initial_author_books.sql
  role: governing-source
  git_blob_sha: 192a736d1a5d6ffc6f239c74ed61e7b8d2528b3b
  source_status: unrecorded
- path: supabase/migrations/20261009010000_restrict_accepted_manuscript_dml.sql
  role: governing-source
  git_blob_sha: 0670a60f1c2e299e9771b9af1c677d97712174d9
  source_status: unrecorded
- path: apps/web/src/lib/workspace/book-workspace-contract.ts
  role: governing-source
  git_blob_sha: 63b6a79d36cbfb253ba2fbd1e2ea5984b16c4734
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0049/SOURCE-EXCERPTS.md
  role: governing-source
  git_blob_sha: 492df5764c397ed93aea3ea1feccdc96a52566fb
  source_status: unrecorded
source_gaps:
- id: HOSTED
  limitation: Hosted metadata/schema/session and SQL acceptance remain separately
    gated.
prepared_by: agent_workflow.py
---

# VEL-CP-0049 — Prepare protected IMP002 chapter and planning-note persistence contract

## Objective
Prepare protected IMP002 chapter and planning-note persistence contract; preserve ordinary owner approval boundaries.

## Scope
**In:** docs/contracts/VEL-IMP002-PERSISTENCE-CONTRACT.md; docs/contracts/VEL-IMP002-PERSISTENCE-CASES.json; docs/agent-workflow/proposals/VEL-IMP002-PERSISTENCE-HANDOFF.md; docs/reports/VEL-IMP002-PERSISTENCE-0049.md; docs/agent-workflow/tasks/VEL-TASK-0049.yaml; docs/agent-workflow/context-packs/VEL-CP-0049.md; docs/agent-workflow/execution-bundles/VEL-EB-0049.md; docs/agent-workflow/inputs/VEL-TASK-0049/*; docs/agent-workflow/PR-COMPLIANCE.yaml; docs/reports/evidence/VEL-TASK-0049/*
**Out:** Hosted/credentials/private/paid/deployment/settings/merge and unrelated product work; Application/SQL/Auth/dependency changes; CI changes excluded from0049

## Evidence and authority constraints
The text below is a readable rendering of pinned Git blobs; exact raw bytes remain recoverable from the recorded commit/blob SHAs. Recorded source statuses remain in force: draft research is not accepted requirements. Original unarchived uploads are not independently verified merely by being mentioned.

**Known source gaps:**
- HOSTED: Hosted metadata/schema/session and SQL acceptance remain separately gated.

## Permissions and acceptance
**Allowed:** Read pinned sources and implement only authorized paths in isolated worktree, Run existing synthetic tests, governance/metadata validators and actual GitHub draft/ready CI, Use a fresh trusted read-only Codex CLI source review and submit/promote PR for owner decision
**Owner approval required:** Any scope expansion, hosted/security-sensitive operation and successor PR merge
**Acceptance criteria:**
- Precise proposed request/result/receipt contracts, verified ownership, cross-book denial and fail-closed authorization
- Collision-safe transactional ordering under existing immediate uniqueness and position constraints; stable IDs and version CAS
- Scoped durable idempotency/unknown-outcome reconciliation, separate note storage and immutable manuscript/revision invariants
- Indexed negative/recovery acceptance cases with expected outcomes and implementation-ready bounded handoff
- No application/SQL/CI/Auth/grant/config changes, hosted calls or fabricated persistence test results

## Deliverables
- Committed Task and validated immutable ContextPack before implementation
- docs/contracts/VEL-IMP002-PERSISTENCE-CONTRACT.md
- docs/contracts/VEL-IMP002-PERSISTENCE-CASES.json
- docs/agent-workflow/proposals/VEL-IMP002-PERSISTENCE-HANDOFF.md
- docs/reports/VEL-IMP002-PERSISTENCE-0049.md
- Actual applicable tests/EB/provenance, distinct exact-head review and submitted PR; no merge

## Pinned source snapshots
Git commit: `59371c80abeb640d8eb9004c6d1bf6de37e6cc54`. Read source statuses independently from task intent.

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

### `CURRENT-STATE.md` @ `af3eb0508c797ddf5ba18dc02876386c28270f11`

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

## Current local-only implementation — 2026-10-24

FACT: PR110 merged as18c770ff6fce7401f7529667a37d7fb523cc55d9;
[post-main40090741803](https://github.com/Ben-001-sys/Vellistry/actions/runs/40090741803)
SUCCESS. Metadata queries remain unexecuted; remediation delegation EXPIRED.

Owner-authorized Task0047/immutable CP0047 implements only the local controller,
organizer and synthetic fixture: stable chapter IDs, create/rename/reorder and
separate notes.41 unit/33 Chromium checks PASS at1ff1098cd73066c8bfd1084b72d076b4284896e1.
[Report/evidence](docs/reports/VEL-IMP002-LOCAL-WORKSPACE-0047.md) retain exact sources.
No production route, database writes, SQL/Auth/dependency changes or hosted access.
Persistence needs a separate contract; broad G_DESIGN/G_CODE stay pending outside
this slice. Final verification/distinct review/CI precede the owner's feature merge
decision. This is not completed hosted IMP002/JRN001.

## Historical query preparation — 2026-10-24

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

### `docs/agent-workflow/inputs/VEL-TASK-0049/OWNER-SCOPE.md` @ `349d613babdaf94f687ac38a648dad42ccb127ff`

~~~~~~markdown
# Direct owner authorization relay — 2026-10-24

https://github.com/Ben-001-sys/Vellistry/issues/108#issuecomment-6386727275

Owner directly approved exact-head PR111 merge and separately authorized two bounded successors in this conversation. This is Codex's relay, not a fabricated human GitHub approval. Ordinary owner merge rules apply; expired remediation delegation stays EXPIRED.

Verified merged main a9e7c48bc7198f6f23f7be5bb77ad54f1f27e2e4, exact tree da9bf02eefadeeeae0156685d92ff2523824c291 equals reviewed ccbf8bb. Post-main40111872132 SUCCESS. Historical41workspace/33browser cases are local, not earlier CI coverage; independent runtime EPERM is not PASS. Task47/CP47/EB47 remain preserved.

Decision3 authorizes repository-only preparation of an implementation-ready protected chapter/planning-note persistence contract and negative/recovery acceptance handoff. This does not authorize persistence application code, SQL source changes/execution, Auth changes, credentials, hosted test users or JWT experiments.

No hosted access, credentials, private manuscripts, paid APIs, deployment, settings, broad gate promotion or automatic successor merge. Keep Issue108 open.
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0049/BOUNDARY.md` @ `8b45f9de4e5801db79723dd0e047a56df1a167f2`

~~~~~~markdown
# Bounded contract

Prepare a concrete proposed HTTP/transaction/storage contract, acceptance-case JSON and next implementation handoff; all remain proposed for owner review. Reuse Next BFF and Nest independent Supabase identity verification. Current authenticated chapter/revision DML remains revoked. No public service-role client, new Auth integration, migration, or production persistence is approved. Separate protected gateway/role/session decisions from implementation mechanics. Include exact lock/order/CAS/journal algorithms, error/receipt semantics, limits, initial blank revision atomics, separately stored notes, failure injection, cross-author/book and forged-owner negatives. Hosted observations and SQL acceptance are UNKNOWN, not inferred from local fixtures. Future SQL-path permissions and hosted actions need separate owner decisions; do not assign an authorized implementation Task ID prematurely.
~~~~~~

### `supabase/migrations/20261009000000_initial_author_books.sql` @ `192a736d1a5d6ffc6f239c74ed61e7b8d2528b3b`

~~~~~~markdown
-- Vellistry first implementation migration. Requires Supabase auth schema.
-- Intended for local Supabase CLI testing; not yet executed against live Auth/RLS.
-- No seed author IDs, tokens, real manuscripts or service keys in this file.
create extension if not exists pgcrypto;

create table public.books (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  title text not null check (char_length(btrim(title)) between 1 and 120),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index books_owner_created_idx on public.books(owner_id,created_at desc);

create table public.chapters (
  id uuid primary key default gen_random_uuid(),
  book_id uuid not null references public.books(id) on delete cascade,
  title text not null check(char_length(btrim(title)) between 1 and 180),
  position integer not null check(position>=0),
  current_revision integer not null default 1 check(current_revision>=1),
  accepted_document jsonb not null default '{"type":"doc","content":[{"type":"paragraph"}]}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(book_id,position),
  unique(book_id,id)
);
create index chapters_book_position_idx on public.chapters(book_id,position);

create table public.chapter_revisions (
  book_id uuid not null,
  chapter_id uuid not null,
  revision integer not null check(revision>=1),
  document jsonb not null,
  recorded_at timestamptz not null default now(),
  primary key(book_id,chapter_id,revision),
  foreign key(book_id,chapter_id) references public.chapters(book_id,id) on delete cascade
);

-- Deny unauthenticated and cross-author access on all three relations.
alter table public.books enable row level security;
alter table public.chapters enable row level security;
alter table public.chapter_revisions enable row level security;
alter table public.books force row level security;
alter table public.chapters force row level security;
alter table public.chapter_revisions force row level security;

create policy author_can_read_books on public.books for select to authenticated
  using (owner_id=(select auth.uid()));
create policy author_can_create_books on public.books for insert to authenticated
  with check (owner_id=(select auth.uid()));
create policy author_can_update_books on public.books for update to authenticated
  using (owner_id=(select auth.uid())) with check (owner_id=(select auth.uid()));
create policy author_can_delete_books on public.books for delete to authenticated
  using (owner_id=(select auth.uid()));

create policy author_can_read_chapters on public.chapters for select to authenticated
 using (exists(
  select 1 from public.books b where b.id=chapters.book_id and b.owner_id=(select auth.uid())
 ));
create policy author_can_read_revisions on public.chapter_revisions for select to authenticated
 using (exists(
  select 1 from public.books b where b.id=chapter_revisions.book_id and b.owner_id=(select auth.uid())
 ));

-- IMPORTANT: No direct chapter INSERT/UPDATE or revision INSERT policy is granted.
-- A later versioned, audited create/save RPC must append revisions transactionally.
-- Do not prematurely grant broad chapter writes.
revoke all on public.books,public.chapters,public.chapter_revisions from anon;
grant select,insert,update,delete on public.books to authenticated;
grant select on public.chapters,public.chapter_revisions to authenticated;
~~~~~~

### `supabase/migrations/20261009010000_restrict_accepted_manuscript_dml.sql` @ `0670a60f1c2e299e9771b9af1c677d97712174d9`

~~~~~~markdown
-- K2 hardening: Supabase may have default table privileges granting DML on
-- new public tables. Absence of an UPDATE RLS policy must not be mistaken for
-- SQL-level revocation. Make chapter/revision tables read-only to author role
-- until the K3 audited transactional revision RPC is built.
-- Do not grant direct INSERT/UPDATE/DELETE on accepted manuscript content.
revoke all on table public.chapters, public.chapter_revisions from authenticated;
grant select on table public.chapters, public.chapter_revisions to authenticated;
revoke all on table public.chapters, public.chapter_revisions from anon;
~~~~~~

### `apps/web/src/lib/workspace/book-workspace-contract.ts` @ `63b6a79d36cbfb253ba2fbd1e2ea5984b16c4734`

~~~~~~markdown
/** Local organizer contract. This is not a chapter persistence or Auth implementation. */
export type WorkspaceChapter = Readonly<{id: string; bookId: string; title: string; notes: string}>;
export type WorkspaceDocument = Readonly<{
  bookId: string; bookTitle: string; version: number; notes: string;
  chapters: readonly WorkspaceChapter[];
}>;
export type WorkspaceCommand =
  | Readonly<{kind: "create"; title: string}>
  | Readonly<{kind: "rename"; chapterId: string; title: string}>
  | Readonly<{kind: "reorder"; chapterIds: readonly string[]}>
  | Readonly<{kind: "notes"; chapterId?: string; body: string}>;
export type WorkspaceReceipt = Readonly<{operationId: string; bookId: string; version: number}>;
export type WorkspaceRequest = Readonly<{
  actor: string; bookId: string; operationId: string; expectedVersion: number; command: WorkspaceCommand;
}>;
export type ReadResult = {kind: "ok"; document: WorkspaceDocument} | {kind: "denied" | "unavailable"};
export type MutationResult = {kind: "confirmed"; receipt: WorkspaceReceipt}
  | {kind: "denied" | "invalid" | "conflict" | "unknown"};
export type ReceiptResult = {kind: "confirmed"; receipt: WorkspaceReceipt} | {kind: "missing" | "denied"};
export type WorkspacePort = {
  read: (actor: string, bookId: string) => Promise<ReadResult>;
  mutate: (request: WorkspaceRequest) => Promise<MutationResult>;
  receipt: (actor: string, bookId: string, operationId: string) => Promise<ReceiptResult>;
};

export function validId(value: unknown): value is string {
  return typeof value === "string" && value.length > 0 && value.length <= 128 &&
    value.trim() === value && !/[\x00-\x1f\x7f]/.test(value);
}
export function chapterTitle(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const title = value.trim();
  return title.length > 0 && title.length <= 180 ? title : null;
}
export function validNotes(value: unknown): value is string {
  return typeof value === "string" && value.length <= 10000;
}
export function parseCommand(value: unknown): WorkspaceCommand | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  const c = value as Record<string, unknown>;
  const keys = Object.keys(c);
  if (c.kind === "create" && keys.every(k => ["kind", "title"].includes(k))) {
    const title = chapterTitle(c.title);
    return title ? {kind: "create", title} : null;
  }
  if (c.kind === "rename" && keys.every(k => ["kind", "chapterId", "title"].includes(k))) {
    const title = chapterTitle(c.title);
    return title && validId(c.chapterId) ? {kind: "rename", chapterId: c.chapterId, title} : null;
  }
  if (c.kind === "notes" && keys.every(k => ["kind", "chapterId", "body"].includes(k))) {
    if (!validNotes(c.body) || (c.chapterId !== undefined && !validId(c.chapterId))) return null;
    return c.chapterId === undefined ? {kind: "notes", body: c.body}
      : {kind: "notes", chapterId: c.chapterId, body: c.body};
  }
  if (c.kind === "reorder" && keys.every(k => ["kind", "chapterIds"].includes(k)) &&
      Array.isArray(c.chapterIds) && c.chapterIds.length <= 1000 && c.chapterIds.every(validId) &&
      new Set(c.chapterIds).size === c.chapterIds.length) {
    return {kind: "reorder", chapterIds: [...c.chapterIds]};
  }
  return null;
}
export function parseDocument(value: unknown, bookId: string): WorkspaceDocument | null {
  if (!value || typeof value !== "object") return null;
  const d = value as Record<string, unknown>;
  if (d.bookId !== bookId || !validId(d.bookId) || typeof d.bookTitle !== "string" ||
      !d.bookTitle.trim() || d.bookTitle.length > 120 || !validNotes(d.notes) ||
      !Number.isSafeInteger(d.version) || (d.version as number) < 0 ||
      !Array.isArray(d.chapters) || d.chapters.length > 1000) return null;
  const chapters: WorkspaceChapter[] = [];
  for (const row of d.chapters) {
    if (!row || typeof row !== "object" || !validId(row.id) || row.bookId !== bookId || typeof row.title !== "string" ||
        chapterTitle(row.title) !== row.title || !validNotes(row.notes)) return null;
    chapters.push({id: row.id, bookId, title: row.title, notes: row.notes});
  }
  if (new Set(chapters.map(c => c.id)).size !== chapters.length) return null;
  return {bookId, bookTitle: d.bookTitle, version: d.version as number, notes: d.notes, chapters};
}
export function matchingReceipt(value: unknown, request: WorkspaceRequest): value is WorkspaceReceipt {
  if (!value || typeof value !== "object") return false;
  const r = value as Record<string, unknown>;
  return r.operationId === request.operationId && r.bookId === request.bookId &&
    Number.isSafeInteger(r.version) && (r.version as number) > request.expectedVersion;
}
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0049/SOURCE-EXCERPTS.md` @ `492df5764c397ed93aea3ea1feccdc96a52566fb`

~~~~~~markdown
# Exact existing foundation sources

Git source a9e7c48bc7198f6f23f7be5bb77ad54f1f27e2e4; PLAN02 is proposed, not SQL approval.

## docs/decisions/ADR-0006-next-nest-supabase-implementation-foundation.md

```text
---
id: ADR-0006
title: Implement Vellistry using Next.js web, NestJS API and Supabase foundation
type: architecture-decision
status: accepted
created_at: 2026-10-09
updated_at: 2026-10-09
decided_at: 2026-10-09
author: project-research
approved_by: project_owner
version: 1.0.0
sources:
  - "2026-10-09 Fiction Writing Project conversation: assistant proposed Next.js + NestJS + Supabase as preferred candidate; owner replied 'agreed', then directed completing planning by 10:30 and beginning implementation. Original conversation permalink pending."
  - "https://github.com/Ben-001-sys/Vellistry/pull/23 — shared Next/Nest manuscript contract, 30 passing API assertions and both frontend builds."
  - "https://github.com/Ben-001-sys/Vellistry/pull/25 — draft, eight passing Chromium editor and draft-recovery checks."
  - "https://github.com/Ben-001-sys/Vellistry/pull/22 — merged, PostgreSQL FTS vs vector benchmark."
  - "https://supabase.com/docs/guides/local-development"
  - "https://supabase.com/docs/guides/auth/jwts"
evidence:
  - "Owner's 'agreed' unambiguously answered the proposal to proceed with the Next.js + NestJS + Supabase preferred architecture, with validation still required."
  - "Owner then directed a 10:30 implementation-planning cutoff and beginning implementation."
  - "Evidence from the framework and story-memory experiments supports feasibility, not production security, reliability or superiority."
  - "Approval does not decide managed versus self-hosted Supabase production deployment, complete account security, job engine, AI model, or a paid service."
related_requirements:
  - VEL-PRODUCT-SCOPE-20261009-001
  - VEL-PRODUCT-CONSTRAINT-20261009-001
related_features: []
related_contracts: []
related_adrs:
  - ADR-0001
  - ADR-0003
  - ADR-0004
  - ADR-0005
supersedes: []
superseded_by: []
implementation_refs:
  - apps/web/
  - apps/api/
  - supabase/
  - docs/plans/MVP-ENGINEERING-IMPLEMENTATION-KICKOFF-2026-10-09.md
---

# ADR-0006 — Next.js + NestJS + Supabase implementation baseline

## Context and problem statement

Vellistry's eight MVP feature areas were approved before choosing the full application stack. R18's 23 synthetic JS memory checks, 12 PostgreSQL checks, 140k-word retrieval comparison, 30 Next/Nest HTTP checks and eight Chromium authoring/recovery tests established bounded feasibility. Those tests did **not** prove production readiness or a decisive framework performance advantage. The author now authorizes beginning development, with planning completed by 22:30 Ghana time on 2026-10-09.

## Decision

**Accept the following as the implementation baseline, not an irrevocable forever stack:** a TypeScript/pnpm workspace holding **Next.js 16 / React 19** for author-facing UI and **NestJS 11** for protected application API and domain modules. Keep the author writing experience on **Tiptap 3** with PostgreSQL-acknowledged chapter revisions and best-effort local Dexie recovery.

Use **Supabase Auth** as the only user sign-in authority; **Supabase PostgreSQL** as the durable relational store with per-author/book Row Level Security; and optional private Supabase Storage for authorized import/export files when that surface is implemented. **No Better Auth alongside Supabase Auth**.

Start with **Supabase CLI local development**, no production credentials and no paid service. Managed Supabase Free versus properly self-hosted production Supabase/PostgreSQL is still open. Do not make cloud deployment a condition for offline/no-paid development. The Nest API must validate Supabase access credentials before serving author data, use RLS-scoped non-service database calls, never accept client-supplied owner IDs as authority and never expose privileged keys to browsers. Next.js is frontend/BFF, not an unguarded duplicate backend.

For Story Memory, retain author-approved temporal canon events and PostgreSQL full-text retrieval as the initial memory system. pgvector/embeddings are **optional** after realistic fiction-quality evidence. Background execution is a separate worker boundary, with specific provider (Graphile Worker versus Supabase Queues) **undecided**. Generative AI remains optional, consented and provider-neutral; no paid model required or secretly selected.

## Alternatives considered

1. **Next.js alone + Supabase**: fewer deployables and valid tested authoring contracts; less explicit backend isolation as the Story Memory, review, and conversion engine expands.
2. **React/Vite + NestJS + Supabase**: valid and tested; a separate frontend/router pattern rather than the owner's chosen Next.js.
3. **Next.js + NestJS + independently managed PostgreSQL/Auth**: potentially leaner runtime; requires more authentication and infrastructure work than requested now.
4. **Microservices with Redis/vector SaaS**: adds overhead and unnecessary paid-service exposure for MVP.

## Rationale

NestJS module boundaries suit protected book/chapter operations, canon review and future AI orchestration, while Next.js supports an integrated author-facing web UI. Supabase provides local Auth and PostgreSQL development, private storage and RLS. Earlier tests proved basic manuscript semantics on both transports. No measured speed superiority is claimed.

## Consequences and trade-offs

- Two runtime applications (+ eventual worker) require separate builds, API contracts, origin/cookie trust design, and operational monitoring.
- Supabase Free hosted quotas/inactivity and manuscript backup risk mean production hosting must be explicitly reviewed before public use.
- Local Supabase development requires a Docker-compatible runtime and must never be exposed as a production service.
- RLS and verified JWT/user sessions must be tested across two actual users. Server secret/service keys must not bypass author isolation.
- Maintain one writing source of truth: accepted revisioned Tiptap JSON in PostgreSQL. IndexedDB is temporary recovery, not an authority on accepted content.
- User's no-paid-service mandate remains binding. Compute/storage and maintenance may still incur real costs.

## Evidence and verification limits

Approval is documented by the two owner messages in the source conversation, not an invented URL. The architecture approval is specific to **beginning MVP implementation**. It does not authorize production deployment, published auth/security claims, a paid service, real-manuscript test data, or merging unrelated draft PRs. PR #17 contains an **earlier proposed Next-only modular-monolith ADR-0005**; that unmerged proposal is not an accepted architecture. This ADR is a distinct owner-directed selection, not an undocumented rewrite of ADR-0005.

Official references: [Supabase local development](https://supabase.com/docs/guides/local-development), [Supabase JWT verification](https://supabase.com/docs/guides/auth/jwts) and [NestJS guards](https://docs.nestjs.com/guards).

## Implementation status

**Implementation authorized and initial scaffolding in progress, not production ready.** First testable slice: local auth token -> NestJS guard -> RLS-scoped book list/create -> Next.js user interface. Later: chapters, revisioned Tiptap editing, draft recovery, profiles, author approval and retrieval. See implementation kickoff plan. All integration test outcomes must be separately recorded and observed before being called complete.

```

## apps/api/src/modules/auth/supabase-auth.service.ts

```text
import {Injectable,ServiceUnavailableException,UnauthorizedException} from "@nestjs/common";
import {createClient,SupabaseClient} from "@supabase/supabase-js";

/**
 * A real Supabase Auth server verifies the access token. No trust in x-user-id.
 * Auth server calls are intentionally required per protected request in this first slice.
 * Do not initialize admin/service-role clients for author-facing requests.
 */
@Injectable()
export class SupabaseAuthService{
 private readonly url=process.env.SUPABASE_URL;
 private readonly publishableKey=process.env.SUPABASE_PUBLISHABLE_KEY;

 private config(){
  if(!this.url||!this.publishableKey)throw new ServiceUnavailableException("Supabase not configured");
  return {url:this.url,key:this.publishableKey};
 }
 publicClient():SupabaseClient{
  const {url,key}=this.config();
  return createClient(url,key,{auth:{persistSession:false,autoRefreshToken:false}});
 }
 async verify(token:string):Promise<{id:string}>{
  if(!token||token.length>8192)throw new UnauthorizedException();
  const {data,error}=await this.publicClient().auth.getUser(token);
  if(error||!data.user?.id)throw new UnauthorizedException();
  return {id:data.user.id};
 }
 forUser(token:string):SupabaseClient{
  const {url,key}=this.config();
  return createClient(url,key,{
   global:{headers:{Authorization:"Bearer "+token}},
   auth:{persistSession:false,autoRefreshToken:false}
  });
 }
}

```

## apps/api/src/modules/auth/supabase-auth.guard.ts

```text
import {CanActivate,ExecutionContext,Injectable,UnauthorizedException} from "@nestjs/common";
import {SupabaseAuthService} from "./supabase-auth.service";

export type AuthenticatedRequest={headers:{authorization?:string};author:{id:string};accessToken:string};

@Injectable()
export class SupabaseAuthGuard implements CanActivate{
 constructor(private readonly auth:SupabaseAuthService){}
 async canActivate(context:ExecutionContext){
  const req=context.switchToHttp().getRequest<AuthenticatedRequest>();
  const header=req.headers.authorization??"";
  const match=/^Bearer ([A-Za-z0-9_\-.]+)$/.exec(header);
  if(!match)throw new UnauthorizedException();
  const author=await this.auth.verify(match[1]);
  req.author=author;
  req.accessToken=match[1];
  return true;
 }
}

```

## apps/api/src/modules/books/books.service.ts

```text
import {Injectable,InternalServerErrorException} from "@nestjs/common";
import {SupabaseAuthService} from "../auth/supabase-auth.service";
import {bookInsertPayload} from "./book-create-input";
@Injectable()
export class BooksService{
 constructor(private readonly auth:SupabaseAuthService){}
 async list(token:string){
  const {data,error}=await this.auth.forUser(token).from("books")
    .select("id,title,created_at,updated_at").order("created_at",{ascending:false});
  if(error)throw new InternalServerErrorException("Unable to load books");
  return data??[];
 }
 async create(token:string,title:string){
  // owner_id is assigned by DEFAULT auth.uid() in the database; never from the client.
  const {data,error}=await this.auth.forUser(token).from("books")
    .insert(bookInsertPayload(title)).select("id,title,created_at,updated_at").single();
  if(error)throw new InternalServerErrorException("Unable to create book");
  return data;
 }
}

```

## apps/web/src/app/api/books/route.ts

```text
import {NextRequest,NextResponse} from "next/server";
import {decideBookPost,EXPECTED_USER_HEADER,forwardTransportFailure} from "@/lib/library/book-create-document";
import {getServerSupabase} from "@/lib/supabase/server";
import {verifiedBookAccess} from "@/lib/library/owner-from-auth";

export const dynamic="force-dynamic";
export const runtime="nodejs";

function privateJson(body: {error: string}, status: number){
 return NextResponse.json(body,{status,headers:{"Cache-Control":"no-store"}});
}

/**
 * BFF forwards only a verified Supabase user access token.
 * Nest independently validates it against Supabase Auth for every request.
 * Book creates forward a title only, and only when the browser's expected user
 * still matches that verified session.
 * A failure after that forward is an unknown acknowledgement, not a definite
 * save failure. Authentication, validation, and session mismatch stay definite.
 */
async function forward(req:NextRequest,method:"GET"|"POST"){
 let attemptedUpstream=false;
 try{
  const supabase=await getServerSupabase();
  const access=await verifiedBookAccess(supabase.auth);
  if(!access)return privateJson({error:"unauthenticated"},401);
  const base=process.env.VELLISTRY_API_BASE_URL;
  if(!base)return privateJson({error:"api_not_configured"},503);
  const target=new URL("/v1/books",base);
  let content:string|undefined;
  if(method==="POST"){
   const decision=decideBookPost({
    sessionUserId:access.ownerKey,
    expectedUserId:req.headers.get(EXPECTED_USER_HEADER),
    rawBody:await req.text(),
   });
   switch(decision.action){
    case "reject":
     return privateJson({error:decision.error},decision.status);
    case "forward":
     content=decision.document;
     break;
    default:{
     const unreachable:never=decision;
     void unreachable;
     return privateJson({error:"service_unavailable"},503);
    }
   }
   attemptedUpstream=true;
  }
  const upstream=await fetch(target,{
   method,headers:{"Authorization":"Bearer "+access.accessToken,"Content-Type":"application/json"},
   body:content,cache:"no-store"
  });
  if(upstream.status===401)return privateJson({error:"unauthenticated"},401);
  let payload="";
  try{
   payload=await upstream.text();
  }catch{
   return new NextResponse(null,{status:upstream.status,headers:{"Cache-Control":"no-store"}});
  }
  return new NextResponse(payload,{status:upstream.status,headers:{"Content-Type":"application/json","Cache-Control":"no-store"}});
 }catch{
  const failure=forwardTransportFailure(attemptedUpstream);
  return privateJson({error:failure.error},failure.status);
 }
}
export async function GET(req:NextRequest){return forward(req,"GET");}
export async function POST(req:NextRequest){return forward(req,"POST");}

```

## docs/plans/VEL-PLAN-02-ARCHITECTURE-DATA-CONTRACTS-2026-10-11.md

```text
## 2. Domain boundaries and ownership model

```text
Supabase Author identity (auth.users)
  ├── author preferences / optional BYOK *session-only* client state
  └── books [existing; owner_id=auth.uid()]
       ├── chapters [existing; book_id, stable UUID, position]
       │    ├── chapter_revisions [existing; accepted JSON history]
       │    ├── planning_notes [proposed]
       │    └── local_draft recovery [client only; not canonical]
       ├── character_profiles / storyline_profiles [proposed manual entities]
       │    └── approved_fact_events + source_refs [proposed author-approved canon]
       ├── candidate_fact_events + review_decisions [proposed, never auto-canon]
       ├── rule_scope_overrides + author_rules [proposed; immutable source pack separate]
       ├── ai_requests + proposal_decisions + undo_links [proposed]
       └── import/export/backup manifests [proposed short-lived scoped records]
```

Every record containing sensitive manuscript, profile, fact, rules/preferences, prompt context, backup metadata or decision must prove the **authenticated owner AND book membership**, not merely accept a book UUID from the caller. The original schema has `books`, `chapters`, `chapter_revisions`; SQL migrations explicitly **revoke direct authenticated chapter/revision writes** until protected atomic RPC. Keep this safety property. No new DML migration during planning.

| Bounded entity | Minimum proposed fields / relation | Authority and invariant |
|---|---|---|
| `books` **existing** | `id`, `owner_id`, `title`, timestamps | owner comes from Auth/DB, not submitted JSON |
| `chapters` **existing** | `id`, `book_id`, `title`, `position`, `current_revision`, `accepted_document` | stable ID independent of order; nested owner permission |
| `chapter_revisions` **existing** | `book_id`, `chapter_id`, `revision`, `document`, timestamp | append-only accepted sequence; not autosave queue |
| Planning note **proposed** | `book_id`, optional `chapter_id`, body, changed_at | distinct from accepted manuscript and chapter revision |
| Profile **proposed** | character/thread kind, `book_id`, manual fields, approved baseline, updated_at | author's manual state; no model needed |
| Canonical fact event **proposed** | fact subject/predicate/value, approved author decision, applicable story-time interval, provenance | only separately author-approved; uncertain facts explicitly typed |
| Fact candidate **proposed** | `book_id`, source chapter + accepted revision, **exact quote** and location, narrative scene time, proposed fact, pending/edit/dismiss/approve or stale | a candidate never becomes canon by accepting AI prose |
| Rule origin/alias **proposed package** | immutable origin ID/compact or expanded variant/body hash + 134 logical aliases version | real private corpus must not be hallucinated or committed without permission |
| Rule preference **proposed** | inherited/overridden enabled flag, author rule version, scope `workspace|book`, exception reason | disable excludes rule from actual effective request |
| AI request & proposal **proposed** | actor, book/chapter, base revision, selection anchor, effective rules version, provider/model route, state, limited proposed plain text, consent evidence | unaccepted text is never accepted manuscript |
| Proposal decision **proposed** | accept/reject/edit, idempotency key, before/after accepted revision, author/time | CAS commit only; reject leaves source byte-equivalent |
| Export/backup manifest **proposed** | book owner, format, schema version, contents hashes, declared omissions, scoped Storage object reference if any | no raw BYOK keys; clean restore to authorized target proves backup |

**Index proposals:** owner+created_at for owned book listing; book+chapter position uniqueness with explicit reorder concurrency strategy; book+profile/fact status/story-time and chapter revision indices; scoped idempotency-key lookup unique per actor/action; storage object isolation. Actual index/query/explain performance measurements remain undone.

## 3. Boundary responsibility and proposed interfaces

| Component | Owns | Must not |
|---|---|---|
| Next web / Tiptap | controlled editor state, navigation, draft recovery candidate UX, full request-consent preview, local-only key lifecycle, accessible controls | report Saved without committed receipt; render another account's cached state; send prose invisibly |
| Next BFF | attach verified session to owned request; no-store and safe SSR/cookie/session handling | treat `getSession` alone as authority; embed tokens or prose in cache |
| Nest API | bearer validation, authorize resource, input schema, validated state transitions, effective context and optional AI proxy | trust `owner_id` in request; service-role shortcut; log raw manuscript/BYOK |
| Postgres RPC/RLS | atomic accepted revision CAS + immutable history/idempotent receipts, referential integrity and owner scope | allow direct client-initiated unversioned chapter UPDATE/DELETE |
| Local browser drafts | account/book/chapter/base-revision recovery candidates | override accepted revision silently; expose to next account on shared device |
| Private Storage (future) | short-lived authorized import/export/backup objects and expiry/retention | public manuscript buckets; promise signed URLs instantly expire on logout |
| AI adapter (future) | bounded OpenRouter downstream pinned model, consent, explicit author key, cost/rate limiting | hidden fallback, model output as committed canon, provider key persistence |

## 4. API/RPC contract candidates by delivery slice

These are **planning shapes only**, not endpoints currently implemented.

| Stage | Candidate request/interface | Expected result and safety envelope |
|---|---|---|
| IMP-001 | Existing `GET/POST /v1/books` + BFF `/api/books`; proposed owned `GET/PATCH/DELETE /v1/books/:id` | minimal allowed fields; 401/403/404 well-defined; no-store; 400 title validation; owner-only |
| IMP-002 | Proposed `GET/POST /v1/books/:bookId/chapters`, `PATCH .../:chapterId`, reorder transaction, notes | nest-chapter checks; stable ID; 409 conflicting reorder; non-destructive delete+confirmation |
| IMP-003 | `saveChapter({bookId,chapterId,expectedRevision,idempotencyKey,document,documentSchemaVersion})` | committed revision receipt `acceptedRevisionId,revisionNumber,documentHash,savedAt`; explicit `CONFLICT|DENIED|INVALID|UNAVAILABLE|UNKNOWN_TO_CLIENT` handling; exact schema/SQL decision pending |
| IMP-003 | Proposed `GET acceptedChapter + history`, draft recovery local state | server accepted vs local candidate separately represented; never optimistic Saved |
| IMP-005 | Proposed profile CRUD and candidate review endpoints | manual create/edit; candidate evidence linked to **accepted source revision** and **story time**; approve independently |
| IMP-006 | Proposed `GET /rules/catalog`, `PUT /rules/preferences`, effective preview | version-pinned certified source; account/book inherited scopes; no disabled rule |
| IMP-004 | Proposed import/export preparation, versioned backup manifest, restore/delete confirm | authorized streams, bounded size, loss report, clean restore and revocable scoped objects |
| IMP-007 | Proposed `POST /v1/ai/proposals` with author-controlled Continue/Rewrite | explicit excerpt/recipient/rules/cost consent; session-only BYOK supplied for that request; proposed plain text only |
| IMP-008 | Proposed `POST /v1/ai/proposals/:id/accept|reject`; undo with expected latest revision | transactional CAS; idempotent accept; compensating undo; proposal facts separate |

**HTTP 401 vs 403 vs 404:** choose a consistent resource-existence policy for guessed cross-owner IDs (often 404 externally to avoid enumeration), document it before tests; do not silently infer REST status from this blueprint. Use `409` only for genuine detected stale state and include safe expected/current revision metadata without leaking foreign manuscript. `Unknown after lost ACK` is **a client observation**, not proof DB rejected the commit. Request retries must produce same receipt when identical and never double-append.

### Chapter save atomicity and failure table

| Case | Required contract |
|---|---|
| Correct actor/book/chapter & `expectedRevision` | validate Tiptap JSON, commit accepted revision and advance current pointer in a **single transaction**, receipt only on durable success |
| Wrong actor/book/chapter | deny without data contents or accepted mutation; direct PostgREST also blocked |
| Stale expected revision / second tab | no overwrite, explicit recoverable conflict and current-version reference |
| Same idempotency key, identical payload and accepted outcome | same receipt, no duplicate revision |
| Same key but changed source/payload | explicit idempotency mismatch; no new write |
| Network drops after actual DB commit before reply | client marks **UNKNOWN**, resolves by server receipt lookup/replay, never “Saved” without confirmation |
| Invalid editor JSON / unsupported marks | predictable validation, preserve candidate and previous committed revision |
| Compensating Undo after intervening manual edits | refuse destructive inverse; author sees compare/reconcile |

**Order/revision coupling:** chapter reorder is not a manuscript-save update; do not tie identity to position. Valid accepted Tiptap schema/version changes require explicit migration/compatibility and historical document read support.


```
~~~~~~

## Execution reporting
Return an ExecutionBundle with FACT / INTERPRETATION / PROPOSAL sections,
tests actually performed, changes, evidence gaps, and pending owner approval.
