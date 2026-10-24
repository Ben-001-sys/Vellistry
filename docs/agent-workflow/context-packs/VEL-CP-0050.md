---
id: VEL-CP-0050
title: 'Context for VEL-TASK-0050: Reconcile PR112 source provenance on current main
  and prepare execution authorization'
type: context-pack
status: prepared
created_at: '2026-10-24'
version: 0.1.0
task_id: VEL-TASK-0050
base_commit: eccbcaeb2b9f622fb29297e0a478d19b4ee84243
task_blob_sha: a9ee381d967c652a16eba59a458dde81b200700a
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
  git_blob_sha: 9fa7d481760dfc464c8dc0107b2edb9fbd2db959
  source_status: active
- path: docs/agent-workflow/PR-COMPLIANCE.md
  role: governing-source
  git_blob_sha: 5f4845623aef3abb15fba7fbe8e78474902cca00
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0050/OWNER-SCOPE.md
  role: governing-source
  git_blob_sha: ae23ad7cb0b319c9805f45d9d5fdeedbf39471ea
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0050/BOUNDARY.md
  role: governing-source
  git_blob_sha: 261ce7aceb1c4453ae657983ad10a5f4d7c3bb4c
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0050/ORIGINAL49-INVENTORY.json
  role: governing-source
  git_blob_sha: 36dc84802d4e97b0f5fa903e1dc322dbc68b73fb
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0050/ORIGINAL49-CONTRACT.md
  role: governing-source
  git_blob_sha: 329c286e064b013acac01c724e25543a6974bee2
  source_status: proposed
- path: docs/agent-workflow/inputs/VEL-TASK-0050/ORIGINAL49-CASES.json
  role: governing-source
  git_blob_sha: 5233e2f5ec7ea2ed0c18608393559ad4d3c412ef
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0050/ORIGINAL49-HANDOFF.md
  role: governing-source
  git_blob_sha: b2ac643505a968270c7f382ce6a1e2bf602f58b3
  source_status: unrecorded
source_gaps:
- id: HOSTED
  limitation: Hosted metadata/schema/session and SQL acceptance remain separately
    gated.
prepared_by: agent_workflow.py
---

# VEL-CP-0050 — Reconcile PR112 source provenance on current main and prepare execution authorization

## Objective
Preserve exact Task49 source/evidence, prepare governed current-main PR112 and concrete local persistence authorization packet without implementing or approving security choices.

## Scope
**In:** docs/agent-workflow/context-packs/VEL-CP-0049.md; docs/agent-workflow/execution-bundles/VEL-EB-0049.md; docs/agent-workflow/inputs/VEL-TASK-0049/BOUNDARY.md; docs/agent-workflow/inputs/VEL-TASK-0049/OWNER-SCOPE.md; docs/agent-workflow/inputs/VEL-TASK-0049/SOURCE-EXCERPTS.md; docs/agent-workflow/proposals/VEL-IMP002-PERSISTENCE-HANDOFF.md; docs/agent-workflow/tasks/VEL-TASK-0049.yaml; docs/contracts/VEL-IMP002-PERSISTENCE-CASES.json; docs/contracts/VEL-IMP002-PERSISTENCE-CONTRACT.md; docs/reports/VEL-IMP002-PERSISTENCE-0049.md; docs/reports/evidence/VEL-TASK-0049/checks.json; docs/reports/evidence/VEL-TASK-0049/metadata.txt; docs/reports/evidence/VEL-TASK-0049/packet.txt; docs/reports/evidence/VEL-TASK-0049/readiness.txt; docs/reports/evidence/VEL-TASK-0049/traceability.txt; CURRENT-STATE.md; docs/agent-workflow/tasks/VEL-TASK-0050.yaml; docs/agent-workflow/context-packs/VEL-CP-0050.md; docs/agent-workflow/execution-bundles/VEL-EB-0050.md; docs/agent-workflow/inputs/VEL-TASK-0050/*; docs/agent-workflow/PR-COMPLIANCE.yaml; docs/agent-workflow/proposals/VEL-IMP002-PERSISTENCE-EXECUTION-AUTHORIZATION.md; docs/agent-workflow/proposals/VEL-IMP002-PERSISTENCE-EXECUTION-PACKET.json; docs/reports/VEL-PR112-RECONCILIATION-0050.md; docs/reports/evidence/VEL-TASK-0050/*
**Out:** Application, SQL, Auth, dependencies, CI/workflow/control changes; Original Task49/CP49/evidence modification; hosted/credentials/liveJWT/private/paid/deploy/settings/merge

## Evidence and authority constraints
The text below is a readable rendering of pinned Git blobs; exact raw bytes remain recoverable from the recorded commit/blob SHAs. Recorded source statuses remain in force: draft research is not accepted requirements. Original unarchived uploads are not independently verified merely by being mentioned.

**Known source gaps:**
- HOSTED: Hosted metadata/schema/session and SQL acceptance remain separately gated.

## Permissions and acceptance
**Allowed:** Read pinned Git/GitHub sources; preserve old remote head under unique archive ref, Assemble exact old source blobs after CP50 commit and update only scoped preparation documents, Use frozen existing tools for offline/source/governance checks and trusted read-only distinct review, After concrete validation/review, lease-guarded replacement of only PR112 branch expecting b1c46df; stop on any change, Submit/promote PR112 and record actual CI; never merge
**Owner approval required:** Any executable application/SQL/Auth/CI implementation and unresolved security choice; Any hosted/credential/liveJWT/private/paid/deployment/settings action and PR112 merge
**Acceptance criteria:**
- 1. New main is actual change_base. New Task/CP committed before source adoption. All16old PR112 changed paths inventoried:15canonical blobs preserved exactly, old active manifest archived verbatim in inputs. Original commits, CP49 base/pack, evidence and review/CI references remain historical. No claims of new authorship for old content. New source-preserving assembly commits are Codex-authored under Task50, not falsely declared exact cherry-picks.
- 2. Old contract and case packet stay byte-identical;27cases all NOT_RUN. Keep explicit historical old base inside preserved records, with current-main relationship in amendment report. Current main's CI/workspace coverage remains inherited unchanged.
- 3. New execution authorization packet is PROPOSED/NOT_AUTHORIZED, not SQL code or an accepted architecture/security decision. Exact LOCAL SQL paths are candidate test assets, not invented approved migration filenames. Specify minimal gateway and role privileges, server-verified principal/session check, collision-safe ordering and durable journal, executable disposable17 tests/faults and explicit excluded hosted/JWT/production actions. Future Task ID unallocated.
- 4. Offline exact-blob/hash/status/packet validations and current metadata/traceability/entrypoint checks, distinct final diff review, actual ready CI and external PR ledger; no repeat of unchanged prior browser/research evidence. Ordinary owner separate merge only.
- 5. Push archive non-force first; final PR112 ref replacement only with expected-old-head lease, after concrete validated reviewable candidate exists. No reset/clean/stash of owner or old worktrees; preserve original local branch.
- 

## Deliverables
- New committed and validated immutable Task50 pack before adoption
- Exact source adoption inventory, historical artifacts and current-state reconciliation
- Proposed executable authorization packet, precise roles/session/SQL paths and disposable acceptance
- Actual checks, EB/provenance, distinct review and updated PR112 ready CI for separate owner merge

## Pinned source snapshots
Git commit: `eccbcaeb2b9f622fb29297e0a478d19b4ee84243`. Read source statuses independently from task intent.

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

### `CURRENT-STATE.md` @ `9fa7d481760dfc464c8dc0107b2edb9fbd2db959`

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

## Current integration and CI coverage — 2026-10-24

FACT: PR111 merged as a9e7c48bc7198f6f23f7be5bb77ad54f1f27e2e4; reviewed/merged
tree da9bf02eefadeeeae0156685d92ff2523824c291 matches. [Post-main40111872132](https://github.com/Ben-001-sys/Vellistry/actions/runs/40111872132)
SUCCESS. Task/CP/EB0047 preserved;41workspace/33browser checks were local evidence.
Independent runtime EPERM was not PASS. SQL privilege fixture SKIPPED, not accepted.

Task0048 adds the focused workspace command to existing applicable application CI;
its branch awaits separate owner merge, so automatic main coverage is not claimed.
Task0049 separately prepares a persistence contract, not SQL or feature writes.
Metadata queries remain unexecuted; remediation delegation EXPIRED. No production
workspace route or durable persistence. Broad G_DESIGN/G_CODE stay pending outside
scoped authorizations. [Task0047 report](docs/reports/VEL-IMP002-LOCAL-WORKSPACE-0047.md).

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

### `docs/agent-workflow/inputs/VEL-TASK-0050/OWNER-SCOPE.md` @ `ae23ad7cb0b319c9805f45d9d5fdeedbf39471ea`

~~~~~~markdown
# Owner-authorized reconciliation and packet preparation

https://github.com/Ben-001-sys/Vellistry/issues/108#issuecomment-6388790765

Direct owner instruction in this conversation approves PR113 exact-head merge, governed PR112 reconciliation preserving original Task0049 pack/evidence, and preparation-only of the next executable persistence authorization. This is a Codex relay, not fabricated human GitHub approval.

Verified main667084ef30ac00a96b205eb2c52c83083db121e3, reviewed/merged treef25a00c603e107e95dc3a0776207e4e5b359074e equal, post-main40126909449 SUCCESS. All original Task47/48 evidence preserved.

Use unique Task0050/CP0050 before adoption. Preserve old PR112 headb1c46df3942809b35f6cf4c650fe6c36f7cc60ab under the new non-overwriting archive ref and adopt every original Task49 blob exactly, except archive its old active selector as input and select new Task50 manifest. No old record is rewritten or self-approved. Build a linear current-main candidate; no merge commit/control weakening. After local verification and distinct review, update ONLY PR112 head ref using a lease expecting exact oldb1c46df; stop if changed. All original source commits remain reachable through archive. Do not overwrite evidence or archive refs.

After source reconciliation, prepare a concrete proposed local-only executable authorization packet: private gateway, writable session, exact SQL candidate paths/roles/functions, transaction/journal and disposable17 acceptance. Do not write SQL/application/Auth/CI code, approve choices, create hosted users/credentials or perform live JWT/hosted operations. A subsequent executable Task requires separate explicit owner scope and immutable pack.

PR112 remains separately owner-merge-controlled; expired remediation delegation stays closed. Broad gates and Issue108 OPEN unchanged.
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0050/BOUNDARY.md` @ `261ce7aceb1c4453ae657983ad10a5f4d7c3bb4c`

~~~~~~markdown
# Bounded amendment acceptance

1. New main is actual change_base. New Task/CP committed before source adoption. All16old PR112 changed paths inventoried:15canonical blobs preserved exactly, old active manifest archived verbatim in inputs. Original commits, CP49 base/pack, evidence and review/CI references remain historical. No claims of new authorship for old content. New source-preserving assembly commits are Codex-authored under Task50, not falsely declared exact cherry-picks.
2. Old contract and case packet stay byte-identical;27cases all NOT_RUN. Keep explicit historical old base inside preserved records, with current-main relationship in amendment report. Current main's CI/workspace coverage remains inherited unchanged.
3. New execution authorization packet is PROPOSED/NOT_AUTHORIZED, not SQL code or an accepted architecture/security decision. Exact LOCAL SQL paths are candidate test assets, not invented approved migration filenames. Specify minimal gateway and role privileges, server-verified principal/session check, collision-safe ordering and durable journal, executable disposable17 tests/faults and explicit excluded hosted/JWT/production actions. Future Task ID unallocated.
4. Offline exact-blob/hash/status/packet validations and current metadata/traceability/entrypoint checks, distinct final diff review, actual ready CI and external PR ledger; no repeat of unchanged prior browser/research evidence. Ordinary owner separate merge only.
5. Push archive non-force first; final PR112 ref replacement only with expected-old-head lease, after concrete validated reviewable candidate exists. No reset/clean/stash of owner or old worktrees; preserve original local branch.
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0050/ORIGINAL49-INVENTORY.json` @ `36dc84802d4e97b0f5fa903e1dc322dbc68b73fb`

~~~~~~markdown
{
  "source_head": "b1c46df3942809b35f6cf4c650fe6c36f7cc60ab",
  "source_base": "a9e7c48bc7198f6f23f7be5bb77ad54f1f27e2e4",
  "archive_ref": "refs/heads/codex/archive-pr112-task0049-b1c46df",
  "original_executor": "Codex",
  "paths": [
    {
      "path": "docs/agent-workflow/PR-COMPLIANCE.yaml",
      "git_blob": "cf6692c7193ad848ba2450a37055fe8ec2f010f2",
      "sha256": "e8f1e6eb00f260e46ef0dca317c821f53c52538942d55e5bb92d5a0de4b03517",
      "adoption": "archive-only active selector"
    },
    {
      "path": "docs/agent-workflow/context-packs/VEL-CP-0049.md",
      "git_blob": "4907073937fe92f0b17a5bb7d481db0608a88f3d",
      "sha256": "f5c37c2678918b90e833cc8190af6b6a91541ebe6d7458c51ec411adb9ba7887",
      "adoption": "exact canonical source adoption"
    },
    {
      "path": "docs/agent-workflow/execution-bundles/VEL-EB-0049.md",
      "git_blob": "d6f8a4e196b00f1af21b8f8b5d7fe2fb419b377b",
      "sha256": "50ba2ecd42a7a5d93c70f4747e870c59e68b6b0eca30db198bc7194083d707f1",
      "adoption": "exact canonical source adoption"
    },
    {
      "path": "docs/agent-workflow/inputs/VEL-TASK-0049/BOUNDARY.md",
      "git_blob": "8b45f9de4e5801db79723dd0e047a56df1a167f2",
      "sha256": "8eefe844fc10348067ebd0cc2a7e7378222714b604284b1d141264534cf78d90",
      "adoption": "exact canonical source adoption"
    },
    {
      "path": "docs/agent-workflow/inputs/VEL-TASK-0049/OWNER-SCOPE.md",
      "git_blob": "349d613babdaf94f687ac38a648dad42ccb127ff",
      "sha256": "e29ea7bc2725bf44e27dc41e411a122c81f1c5ae1d65d102045ffd32bffb2eb7",
      "adoption": "exact canonical source adoption"
    },
    {
      "path": "docs/agent-workflow/inputs/VEL-TASK-0049/SOURCE-EXCERPTS.md",
      "git_blob": "492df5764c397ed93aea3ea1feccdc96a52566fb",
      "sha256": "e572f9b0d9d99fd46c231385dfdb8a8e4254e44e6d45469499ab405516f9492b",
      "adoption": "exact canonical source adoption"
    },
    {
      "path": "docs/agent-workflow/proposals/VEL-IMP002-PERSISTENCE-HANDOFF.md",
      "git_blob": "b2ac643505a968270c7f382ce6a1e2bf602f58b3",
      "sha256": "d44870287cb7d610ae2abd9a7309da72233a02386be03884c0b188be87c78a72",
      "adoption": "exact canonical source adoption"
    },
    {
      "path": "docs/agent-workflow/tasks/VEL-TASK-0049.yaml",
      "git_blob": "b46f15c2cd80654d8ed8fe86db76fadaee7d3da3",
      "sha256": "9d66977ba343091de41bcd3254116a9c5d9d2b7639f87cc96b76be0d82eb58f5",
      "adoption": "exact canonical source adoption"
    },
    {
      "path": "docs/contracts/VEL-IMP002-PERSISTENCE-CASES.json",
      "git_blob": "5233e2f5ec7ea2ed0c18608393559ad4d3c412ef",
      "sha256": "9bd84fa3ed204f11332cdd5622397c523c9123ec0142ad60d546c2db01d2c193",
      "adoption": "exact canonical source adoption"
    },
    {
      "path": "docs/contracts/VEL-IMP002-PERSISTENCE-CONTRACT.md",
      "git_blob": "329c286e064b013acac01c724e25543a6974bee2",
      "sha256": "154ca1697a4cda5d8efbb71a0662efdf1ab7d11ef9c25313cf867229062ac90b",
      "adoption": "exact canonical source adoption"
    },
    {
      "path": "docs/reports/VEL-IMP002-PERSISTENCE-0049.md",
      "git_blob": "d666c7deff68a8d5128660b6f4e6a43b3f510dd6",
      "sha256": "75188c0301121a392c44a9749dadc28e1750c0ac9e40155abc5e9b5026f52386",
      "adoption": "exact canonical source adoption"
    },
    {
      "path": "docs/reports/evidence/VEL-TASK-0049/checks.json",
      "git_blob": "46ac2b3f441b673dfc58f208e9ee53c93057caa3",
      "sha256": "b5dd5791f8959494e9bc587c366bc8fa3bbac7bb4d235dec865af3cfb17f217d",
      "adoption": "exact canonical source adoption"
    },
    {
      "path": "docs/reports/evidence/VEL-TASK-0049/metadata.txt",
      "git_blob": "940063efd38b84b7a3e5cfb25516a95a215b732c",
      "sha256": "4423d0179232fe933d37cd2f42bc585e490f89273e3f9054d82879f81e4b06a5",
      "adoption": "exact canonical source adoption"
    },
    {
      "path": "docs/reports/evidence/VEL-TASK-0049/packet.txt",
      "git_blob": "72ab46c9fe9a0f98e7f2aefa9efd2b62765f131d",
      "sha256": "07162cbece3fb5617bede290aa4561c03faf5677d685fe257b642f78dd084bb1",
      "adoption": "exact canonical source adoption"
    },
    {
      "path": "docs/reports/evidence/VEL-TASK-0049/readiness.txt",
      "git_blob": "e4080f22adfe2b711527a9c6187331802f24d4db",
      "sha256": "77a2897bb7f252e76ff34c9ea2686332d0fd6623eb4a8dfcef4fc4ef4ca5b6e2",
      "adoption": "exact canonical source adoption"
    },
    {
      "path": "docs/reports/evidence/VEL-TASK-0049/traceability.txt",
      "git_blob": "c9fd75f35077ea1f3a615adc4bc689bf38f07bdd",
      "sha256": "eb47c0e32579bde7c78fd5e85c9c541190c0e4322586ef08cd38a457d638a2bd",
      "adoption": "exact canonical source adoption"
    }
  ]
}
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0050/ORIGINAL49-CONTRACT.md` @ `329c286e064b013acac01c724e25543a6974bee2`

~~~~~~markdown
---
id: VEL-CONTRACT-IMP002-PERSISTENCE-001
title: Protected chapter and planning-note persistence contract
type: specification
status: proposed
created_at: 2026-10-24
owner: project_owner
version: 0.1.0
---

# Protected workspace persistence, version 1

PROPOSAL for owner/source review, prepared under Task0049. This is an implementation
contract, not an implemented API, approved migration, hosted observation or gate promotion.
Base: `a9e7c48bc7198f6f23f7be5bb77ad54f1f27e2e4` (PR111, post-main40111872132 PASS).

## FACT: existing boundary and reuse

ADR0006 selects Next.js, NestJS and Supabase. Next's existing books BFF verifies
the user, forwards an access token and expected-user guard, disables caching, and
distinguishes errors before dispatch from unknown outcomes after dispatch. Nest's
SupabaseAuthService independently calls Auth.getUser(token); it does not prove an
active session row. Reuse those boundaries, not another login system.

The two operative migrations create books, chapters and chapter_revisions. Chapters
have immediate UNIQUE(book_id,position), nonnegative integer positions, stable UUIDs,
accepted_document and current_revision. The second migration explicitly revokes
authenticated chapter/revision DML and grants SELECT only. Neither planning notes,
workspace versions nor operation receipts exist. No SQL source changes are made here.
The retained third migration proposal is not a persistence grant or hosted approval.

Task0047's controller/organizer is synthetic only. Its safe-integer versions and
author/book/operation guards are reuse constraints; its adapter is never a server.

## P01 — verified principal and protected transport

Proposed route: Next BFF -> existing Nest guard -> protected workspace service ->
private transactional database gateway. Never use a browser service-role client or
restore author-role chapter/revision writes. Reject body/query owner_id, actor,
accepted_document, revision, position and arbitrary SQL/function selectors.

Every read, mutation and receipt lookup independently verifies the current author;
every database operation rechecks books.owner_id and requested chapter.book_id.
HTTP headers and payload IDs are not identity authority. An expected-author header
is a mismatch detector only. Verify identity again before publishing async client
results. No foreign titles, notes, receipts or existence details appear on denial.

Writable-session freshness is a blocking contract dependency. Existing getUser
verification alone must not be labelled immediate logout revocation. A separately
reviewed server check must establish a current writable session and fail closed on
denial/unavailability. No JWT/session experiment or Auth change is performed here.
Until that check and the private gateway are accepted, production mutation routes
remain unavailable. Local fixtures may inject verified/denied/unavailable principals.

Recommended database capability for later review: a dedicated server-only role with
EXECUTE only on named private functions, no direct table DML and no browser access.
If elevated functions are necessary, their owner must be a narrowly privileged
NOLOGIN/NOBYPASSRLS role, never postgres/service_role; apply appropriate forced-RLS
policies, fixed pg_catalog search_path, qualified objects, no dynamic SQL, and explicit
revocation of PUBLIC/anon/authenticated EXECUTE and schema access. Ownership derives
from transaction-scoped identity installed only by the verified server, never a caller
owner argument. Inspect inherited/default grants as well as direct grants. These are
proposed SQL/security requirements requiring separate path approval, not granted powers.
Enable and force RLS on every new state/note/journal table. Explicit function-owner
policies must bind each row to the verified author through books; do not assume
authenticated-role policies automatically cover that owner. Grant only the columns
needed: no UPDATE of accepted_document/current_revision or UPDATE/DELETE of revision
history, and no TRUNCATE/REFERENCES/TRIGGER capability. Empty chapter/revision1 INSERT
is reachable only through the audited initializer. Audit inherited/PUBLIC privileges.

## P02 — wire contract and validation

Proposed endpoints, not implemented:

| Method/path | Request | Success |
|---|---|---|
| GET /v1/books/:bookId/workspace | no owner payload | owned WorkspaceDocument |
| POST /v1/books/:bookId/workspace/operations | OperationV1 below | terminal receipt |
| GET /v1/books/:bookId/workspace/operations/:operationId | no mutation | owned receipt or unknown |

OperationV1 is exactly `{schemaVersion:1, operationId:UUID, expectedVersion:number,
command:Command}`. Commands are discriminated, unknown fields rejected:
`{kind:create,title}`, `{kind:rename,chapterId,title}`,
`{kind:reorder,chapterIds:[UUID...]}`, `{kind:book-notes,body}` or
`{kind:chapter-notes,chapterId,body}`. IDs identify records, never order.
Titles use existing trim semantics and 1..180 UTF-16 units; notes are plain text,
0..10000 UTF-16 units. Reject nonstrings/null, invalid UTF-8/lone surrogates and NUL.
No Unicode normalization that rewrites writer intent. Server/function validation
must agree on whitespace and astral characters; PostgreSQL char_length alone is
not the same UTF-16 bound. Maximum request128KiB, maximum1000chapters per book.
Versions are integers0..9007199254740991; reject increment overflow before mutation.
Database constraints/functions must enforce equivalent bounds, not just UI forms.

WorkspaceDocument retains `{bookId,bookTitle,version,notes,chapters:[{id,bookId,title,notes}]}`.
No manuscript or revision document is returned by this organizer contract. Read in
one consistent database snapshot so order/notes/version cannot come from different
commits. A readback older than an observed/confirmed version is not a writable baseline.
The transport adapter maps book-notes/chapter-notes to Task0047's notes command;
that mapping requires tests and does not silently replace its synthetic adapter.

## P03 — storage and manuscript invariants

Proposed private relations: workspace_state(book_id PK, workspace_version),
book_planning_notes(book_id PK, body), chapter_planning_notes(book_id,chapter_id PK,body),
and workspace_operations(owner_id,operation_id PK,book_id,request_hash,outcome,version,
created_chapter_id,recorded_at). Chapter-note composite FK must match chapters(book_id,id).
Book FKs preserve ownership through books; no duplicate mutable child owner field.
Do not use a nullable chapter key to distinguish book notes. No accepted_document
or revision payload belongs in notes or receipt storage. Receipts store a versioned
canonical request digest, not note text, tokens or manuscript bodies. Private data
and receipts are not log payloads. Retain operation identities/results for the
book's lifetime; no silent TTL/retention expiry that enables replay duplication.

Rename/reorder/notes may change only their permitted metadata, planning-note rows,
workspace version and receipt. Existing accepted_document, current_revision and all
chapter_revisions remain byte/JSON-equivalent. Chapter creation is the sole initializer:
generate a stable UUID server-side, append at n, and atomically insert the canonical
empty Tiptap document/current_revision1 AND matching revision1. No caller manuscript
payload. The blank document is the operative migration's existing canonical default;
its exact representation must be pinned by the future implementation task. No delete,
save/editor, history rewrite, book transfer or manuscript revision append beyond this
empty initialization is in scope. Existing direct chapter/revision grants remain revoked.

## P04 — transaction, collision-safe order and concurrency

For every operation: start transaction; lock the owned books row FOR UPDATE; recheck
ownership/session scope; reserve the owner+operation identity; compare canonical
request hash/book ID on duplicate; then check expectedVersion while holding the lock.
All workspace writers use this same book lock. Never lock multiple books in one
operation. Current book deletion competes with that lock; a deleted/inaccessible book
returns neutral not-available and cannot be implicitly recreated by retry.

Reserve the journal identity before effects. A competing duplicate waits for the
first transaction's commit/rollback, then returns its terminal result if identical.
Same identity with different book/payload/version rejects without effects. The exact
unique key, not a hash collision, is authoritative. Lock/statement timeout or deadlock
after dispatch is unknown to the client until reconciliation; do not invent failure.

Reorder requires an exact unique permutation of all current same-book IDs, matching
the locked version. Validate dense old positions0..n-1 (n<=1000); inconsistent legacy
positions fail closed for a separately reviewed repair, not silent rewriting.
First move every position to position+n, then assign final0..n-1 by requested IDs,
inside the SAME transaction. Each destination range is disjoint from the occupied
range, so the existing immediate unique constraint cannot collide; no negative ranks,
temporary deletion or deferrable-constraint assumption. Ranges stay within1999.
Empty reorder is valid for an empty book. Preserve stable IDs, notes and revisions.

Create appends n under the same lock after checking n<1000. Rename/notes validate
chapter membership under that lock. A fresh valid operation, including a semantic
no-op, advances workspace_version exactly once. Stale expectedVersion produces a
terminal conflict with current version and no content/order/note change. Client reload
retains drafts for author review; never silently rebase/replay stale commands.

## P05 — receipts and unknown acknowledgement

Atomic commit includes effects, workspace version and terminal journal outcome.
Receipt is `{schemaVersion:1,operationId,bookId,outcome,version,createdChapterId?}`;
outcome is confirmed or rejected with bounded reason invalid/conflict. A confirmed
fresh operation reports expectedVersion+1; replay returns the ORIGINAL result/version,
not a second change. Recheck current authorization before returning any stored result.
Authorized validation/conflict rejections may commit a terminal journal record with
no business effects; they do not advance the version. Unauthorized requests reveal
no journal or foreign existence. Infrastructure failure rolls back the whole transaction.

Loss after dispatch, timeout, malformed/mismatched receipt, or missing receipt is
UNKNOWN, never definite failure. GET receipt performs no mutation. Return missing as
`{status:unknown}` (not a safe-retry signal); revoked access conceals data but does
not prove an earlier write failed. Keep the exact pending identity/intent scoped to
the original verified author/book across A->B->A. Block ordinary mutation/new-key retry.
Reconciliation may unlock only a matching authoritative terminal result. A receipt
confirmed while readback is stale/unavailable remains confirmed, but the workspace
stays unwritable until an authorized snapshot at least that version is obtained.
No automatic resubmission; any future resume action must retain the exact identity
and payload and be separately reviewed against retention guarantees.

## P06 — recovery, tests and release boundary

Executable acceptance cases are specified in VEL-IMP002-PERSISTENCE-CASES.json;
all database/runtime cases are NOT_RUN in Task0049. Future disposable PostgreSQL17
tests must run against the two operative migrations plus separately approved new
SQL, prove existing direct DML remains denied, and inspect effective grants/functions.
Inject failure after first rank pass, chapter insert, initial revision insert, notes
write, journal reservation and before commit: no partial effect/version/receipt.
Kill the client after commit: exactly one durable change, matching receipt and safe
readback; process restart preserves that result. Compare full before/after manuscript,
revision and note identities, not counts alone. Restore a disposable backup and
prove order/notes/versions/receipts retain their relationships. Never run these
experiments on hosted Supabase, real users or private manuscripts under this task.

Separate approval remains required for exact SQL paths/roles, writable-session policy,
new implementation scope and eventual hosted target/channel/migration acceptance.
No production Saved/privacy guarantee follows from source review or synthetic tests.

## Sources

- Pinned Task0049 SOURCE-EXCERPTS and the two operative migrations at the base above.
- Task0047 contract/controller tests and PLAN02 proposed ARCH-02/session constraints.
- [Supabase RLS](https://supabase.com/docs/guides/database/postgres/row-level-security):
  public role membership is not row ownership; grants and RLS are separate controls.
- [Supabase sessions](https://supabase.com/docs/guides/auth/sessions): session controls
  and access-token lifetime require explicit security treatment.
- [PostgreSQL17 locking](https://www.postgresql.org/docs/17/explicit-locking.html):
  row locks serialize competing writers until transaction completion. Public docs
  are technical reference, not project authorization or observed hosted state.
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0050/ORIGINAL49-CASES.json` @ `5233e2f5ec7ea2ed0c18608393559ad4d3c412ef`

~~~~~~markdown
{
  "schema_version": 1,
  "status": "PROPOSED_NOT_EXECUTED",
  "task": "VEL-TASK-0049",
  "base_commit": "a9e7c48bc7198f6f23f7be5bb77ad54f1f27e2e4",
  "contract": "docs/contracts/VEL-IMP002-PERSISTENCE-CONTRACT.md",
  "requirements": [
    "P01",
    "P02",
    "P03",
    "P04",
    "P05",
    "P06"
  ],
  "sources": [
    {
      "path": "supabase/migrations/20261009000000_initial_author_books.sql",
      "commit": "a9e7c48bc7198f6f23f7be5bb77ad54f1f27e2e4",
      "sha256": "315e6a29f8072d4f556729784c07d4bf121666ef385b9cea4dfda36fded5ff74"
    },
    {
      "path": "supabase/migrations/20261009010000_restrict_accepted_manuscript_dml.sql",
      "commit": "a9e7c48bc7198f6f23f7be5bb77ad54f1f27e2e4",
      "sha256": "6786561dcb325e14adbadec7b3bf879b8ab769841c86bf790dfbd2f19c222a65"
    }
  ],
  "cases": [
    {
      "id": "IMP002-PERSIST-01",
      "name": "owned-read",
      "requirements": [
        "P01",
        "P02"
      ],
      "given": "Verified A owns bookA",
      "action": "Read one consistent snapshot",
      "expected": "Only A book/chapters/notes with coherent version",
      "status": "NOT_RUN",
      "required_environment": "disposable PostgreSQL17 and synthetic verified-principal fixtures; no hosted target"
    },
    {
      "id": "IMP002-PERSIST-02",
      "name": "foreign-book",
      "requirements": [
        "P01"
      ],
      "given": "B requests guessed A book/receipt",
      "action": "Read or mutate",
      "expected": "Neutral denial; no titles/notes/receipt/existence leak",
      "status": "NOT_RUN",
      "required_environment": "disposable PostgreSQL17 and synthetic verified-principal fixtures; no hosted target"
    },
    {
      "id": "IMP002-PERSIST-03",
      "name": "foreign-chapter",
      "requirements": [
        "P01",
        "P04"
      ],
      "given": "A owns two books",
      "action": "Rename/note bookA using chapter from bookA2 or B",
      "expected": "Deny, no state/journal/version effects",
      "status": "NOT_RUN",
      "required_environment": "disposable PostgreSQL17 and synthetic verified-principal fixtures; no hosted target"
    },
    {
      "id": "IMP002-PERSIST-04",
      "name": "forged-ownership",
      "requirements": [
        "P01",
        "P02"
      ],
      "given": "Untrusted actor/owner_id/x-user-id fields",
      "action": "Submit owned and foreign commands",
      "expected": "Reject payload fields; verified server principal remains sole authority",
      "status": "NOT_RUN",
      "required_environment": "disposable PostgreSQL17 and synthetic verified-principal fixtures; no hosted target"
    },
    {
      "id": "IMP002-PERSIST-05",
      "name": "unverified",
      "requirements": [
        "P01"
      ],
      "given": "Signed out, failed verification, or missing writable-session proof",
      "action": "Read/write/lookup",
      "expected": "Deny or unavailable; no dispatch/data; no getUser-only revocation claim",
      "status": "NOT_RUN",
      "required_environment": "disposable PostgreSQL17 and synthetic verified-principal fixtures; no hosted target"
    },
    {
      "id": "IMP002-PERSIST-06",
      "name": "create",
      "requirements": [
        "P03",
        "P04"
      ],
      "given": "Empty owned book at version0",
      "action": "Create with invented title",
      "expected": "Stable generated UUID position0; canonical empty doc/current_revision1 plus matching revision1 and receipt atomically; version1",
      "status": "NOT_RUN",
      "required_environment": "disposable PostgreSQL17 and synthetic verified-principal fixtures; no hosted target"
    },
    {
      "id": "IMP002-PERSIST-07",
      "name": "rename",
      "requirements": [
        "P03"
      ],
      "given": "Owned existing chapter with revisions/notes",
      "action": "Rename twice with distinct operations",
      "expected": "Only title/metadata/global version change; old accepted JSON/revisions/notes remain equivalent",
      "status": "NOT_RUN",
      "required_environment": "disposable PostgreSQL17 and synthetic verified-principal fixtures; no hosted target"
    },
    {
      "id": "IMP002-PERSIST-08",
      "name": "duplicate-title",
      "requirements": [
        "P02",
        "P03"
      ],
      "given": "Two same-title chapters",
      "action": "Create/rename/select",
      "expected": "IDs remain distinct and stable, never keyed by title",
      "status": "NOT_RUN",
      "required_environment": "disposable PostgreSQL17 and synthetic verified-principal fixtures; no hosted target"
    },
    {
      "id": "IMP002-PERSIST-09",
      "name": "reorder-swap",
      "requirements": [
        "P04"
      ],
      "given": "Dense positions0,1,2 under immediate uniqueness",
      "action": "Swap first/last via offset then final pass",
      "expected": "No collision; same stable IDs/note/prose associations, one version increment",
      "status": "NOT_RUN",
      "required_environment": "disposable PostgreSQL17 and synthetic verified-principal fixtures; no hosted target"
    },
    {
      "id": "IMP002-PERSIST-10",
      "name": "bad-permutation",
      "requirements": [
        "P02",
        "P04"
      ],
      "given": "Existing three chapters",
      "action": "Duplicate/omit/add foreign/guess ID or nonarray/null",
      "expected": "Reject before effects; unchanged version/order/revisions/notes",
      "status": "NOT_RUN",
      "required_environment": "disposable PostgreSQL17 and synthetic verified-principal fixtures; no hosted target"
    },
    {
      "id": "IMP002-PERSIST-11",
      "name": "legacy-order",
      "requirements": [
        "P04"
      ],
      "given": "Gapped/invalid positions",
      "action": "Attempt reorder",
      "expected": "Fail closed; no silent repair or destructive replacement",
      "status": "NOT_RUN",
      "required_environment": "disposable PostgreSQL17 and synthetic verified-principal fixtures; no hosted target"
    },
    {
      "id": "IMP002-PERSIST-12",
      "name": "concurrent-cas",
      "requirements": [
        "P04"
      ],
      "given": "Two clients share expectedVersion",
      "action": "Concurrent reorder/create/note operations",
      "expected": "One confirms; stale client conflicts without overwrite; drafts retained for explicit review",
      "status": "NOT_RUN",
      "required_environment": "disposable PostgreSQL17 and synthetic verified-principal fixtures; no hosted target"
    },
    {
      "id": "IMP002-PERSIST-13",
      "name": "duplicate-key",
      "requirements": [
        "P04",
        "P05"
      ],
      "given": "Concurrent identical owner+operationId",
      "action": "Send identical create twice including lost response",
      "expected": "One durable chapter/revision/version advance; replay original receipt",
      "status": "NOT_RUN",
      "required_environment": "disposable PostgreSQL17 and synthetic verified-principal fixtures; no hosted target"
    },
    {
      "id": "IMP002-PERSIST-14",
      "name": "altered-key",
      "requirements": [
        "P04",
        "P05"
      ],
      "given": "Existing operation identity",
      "action": "Reuse with altered command/book/expectedVersion",
      "expected": "Reject without applying; never disclose another author journal",
      "status": "NOT_RUN",
      "required_environment": "disposable PostgreSQL17 and synthetic verified-principal fixtures; no hosted target"
    },
    {
      "id": "IMP002-PERSIST-15",
      "name": "lost-commit",
      "requirements": [
        "P05"
      ],
      "given": "Commit succeeded, response lost",
      "action": "Check receipt then consistent readback",
      "expected": "Unknown blocks ordinary new-key retry; same terminal receipt resolves exactly once",
      "status": "NOT_RUN",
      "required_environment": "disposable PostgreSQL17 and synthetic verified-principal fixtures; no hosted target"
    },
    {
      "id": "IMP002-PERSIST-16",
      "name": "missing-receipt",
      "requirements": [
        "P05"
      ],
      "given": "No visible journal, in-flight or rolled-back transaction",
      "action": "Receipt lookup/reload",
      "expected": "Remain unknown; no inference that no write committed; no automatic mutation replay",
      "status": "NOT_RUN",
      "required_environment": "disposable PostgreSQL17 and synthetic verified-principal fixtures; no hosted target"
    },
    {
      "id": "IMP002-PERSIST-17",
      "name": "rejected-receipt",
      "requirements": [
        "P05"
      ],
      "given": "Authorized stale/invalid command rejection recorded atomically",
      "action": "Drop response and reconcile",
      "expected": "Terminal rejected result permits deliberate corrected retry; business version unchanged",
      "status": "NOT_RUN",
      "required_environment": "disposable PostgreSQL17 and synthetic verified-principal fixtures; no hosted target"
    },
    {
      "id": "IMP002-PERSIST-18",
      "name": "stale-readback",
      "requirements": [
        "P02",
        "P05"
      ],
      "given": "Receipt versionN, replica/snapshot older than N",
      "action": "Readback, reload, A->B->A",
      "expected": "Do not publish older writable baseline or another actor cache; reconcile only in verified original scope",
      "status": "NOT_RUN",
      "required_environment": "disposable PostgreSQL17 and synthetic verified-principal fixtures; no hosted target"
    },
    {
      "id": "IMP002-PERSIST-19",
      "name": "notes-separation",
      "requirements": [
        "P03"
      ],
      "given": "Book note and two chapter notes plus manuscript histories",
      "action": "Edit/reorder/navigate",
      "expected": "Only intended note row changes; distinct book/chapter keys; prose/revisions invariant",
      "status": "NOT_RUN",
      "required_environment": "disposable PostgreSQL17 and synthetic verified-principal fixtures; no hosted target"
    },
    {
      "id": "IMP002-PERSIST-20",
      "name": "validation",
      "requirements": [
        "P02"
      ],
      "given": "Null/nonstring/whitespace/astral/lone-surrogate/NUL and oversized payloads",
      "action": "Validate on client/server/function boundary",
      "expected": "Agreed UTF16/title/note and128KiB bounds; reject invalid strings without truncating or normalizing writer intent",
      "status": "NOT_RUN",
      "required_environment": "disposable PostgreSQL17 and synthetic verified-principal fixtures; no hosted target"
    },
    {
      "id": "IMP002-PERSIST-21",
      "name": "capacity-version",
      "requirements": [
        "P02",
        "P04"
      ],
      "given": "1000chapters or maximum safe version",
      "action": "Create/increment",
      "expected": "Reject before any journal confirmation/business mutation; no unreadable1001st document or overflow",
      "status": "NOT_RUN",
      "required_environment": "disposable PostgreSQL17 and synthetic verified-principal fixtures; no hosted target"
    },
    {
      "id": "IMP002-PERSIST-22",
      "name": "rollback-injection",
      "requirements": [
        "P03",
        "P04",
        "P05"
      ],
      "given": "Inject after reservation, rank pass, chapter/revision insert or notes write",
      "action": "Abort before commit at every fault point",
      "expected": "No partial chapter/revision/order/note/version/terminal receipt survives",
      "status": "NOT_RUN",
      "required_environment": "disposable PostgreSQL17 and synthetic verified-principal fixtures; no hosted target"
    },
    {
      "id": "IMP002-PERSIST-23",
      "name": "restart-restore",
      "requirements": [
        "P05",
        "P06"
      ],
      "given": "Durable committed receipt and notes/order",
      "action": "Restart adapter; restore disposable backup",
      "expected": "Original operation result and relationships survive; no replay duplication",
      "status": "NOT_RUN",
      "required_environment": "disposable PostgreSQL17 and synthetic verified-principal fixtures; no hosted target"
    },
    {
      "id": "IMP002-PERSIST-24",
      "name": "privileges",
      "requirements": [
        "P01",
        "P03",
        "P06"
      ],
      "given": "anon/authenticated/PUBLIC/inherited roles and private gateway",
      "action": "Try direct DML/TRUNCATE/REFERENCES/TRIGGER/function EXECUTE/schema access",
      "expected": "No new author chapter/revision writes or public elevated function; gateway only named execute, no direct DML",
      "status": "NOT_RUN",
      "required_environment": "disposable PostgreSQL17 and synthetic verified-principal fixtures; no hosted target"
    },
    {
      "id": "IMP002-PERSIST-25",
      "name": "book-delete",
      "requirements": [
        "P01",
        "P04"
      ],
      "given": "Owned book deletion races pending operation",
      "action": "Delete competes for same book row lock",
      "expected": "Serializable outcome; deleted book unavailable; no implicit recreation, foreign receipt or new-key duplicate",
      "status": "NOT_RUN",
      "required_environment": "disposable PostgreSQL17 and synthetic verified-principal fixtures; no hosted target"
    },
    {
      "id": "IMP002-PERSIST-26",
      "name": "timeout",
      "requirements": [
        "P04",
        "P05"
      ],
      "given": "Blocked duplicate/lock timeout/deadlock/disconnection",
      "action": "Lose terminal response",
      "expected": "Unknown until authorized terminal reconciliation; no automatic failure/new-key retry",
      "status": "NOT_RUN",
      "required_environment": "disposable PostgreSQL17 and synthetic verified-principal fixtures; no hosted target"
    },
    {
      "id": "IMP002-PERSIST-27",
      "name": "retention",
      "requirements": [
        "P05"
      ],
      "given": "Pending operation across long interruption/account switch",
      "action": "Attempt journal expiry/purge or new identity replay",
      "expected": "Book-lifetime identity guarantee preserved; no silent TTL permits duplicate; deletion does not recreate book",
      "status": "NOT_RUN",
      "required_environment": "disposable PostgreSQL17 and synthetic verified-principal fixtures; no hosted target"
    }
  ]
}
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0050/ORIGINAL49-HANDOFF.md` @ `b2ac643505a968270c7f382ce6a1e2bf602f58b3`

~~~~~~markdown
# Proposed next bounded implementation dispatch

Prepared under Task0049; NOT dispatched and no new implementation Task ID allocated.
This is the owner-review packet for implementing the version1 persistence contract,
not permission to modify SQL, Auth, hosted state or accepted manuscript data now.

Source contract: docs/contracts/VEL-IMP002-PERSISTENCE-CONTRACT.md (P01..P06).
Acceptance cases: adjacent VEL-IMP002-PERSISTENCE-CASES.json; every runtime case NOT_RUN.
Baseline: a9e7c48bc7198f6f23f7be5bb77ad54f1f27e2e4; recheck main at dispatch.

## Smallest implementation package after owner decisions

Implement one Nest workspace module with injected verified-principal and transaction
ports, strict request/result validation and the five organizer commands. Exercise it
against a disposable PostgreSQL17 transaction adapter with two invented authors,
not a production Next route. Reuse SupabaseAuthService/Guard and Task0047 controller
types; do not substitute a new authentication integration or synthetic persistence
in production. Separately connect the organizer only after persistence acceptance.

Proposed application paths: apps/api/src/modules/workspace/{workspace-contract.ts,
workspace.service.ts,workspace.controller.ts,workspace.module.ts,workspace-contract.spec.ts},
tests/workspace/persistence/ and the specific API module registration file established
by source inspection. Specify each concrete filename in the new Task, not this glob.
No dependencies are preapproved; inspect existing test/runtime drivers first.
New migration/function/role paths must be separately owner-approved and recorded
in reviewed base under the existing migration-path contract before a SQL PR qualifies.
Do not invent an approved migration filename or treat a markdown function proposal as SQL.

## Exact decisions before dispatch

1. Accept/revise P01's private execute-only server gateway, minimal function-owner
   role and writable-session freshness contract. Existing getUser is not proof of
   immediate logout revocation; an unaccepted session mechanism keeps routes closed.
2. Authorize the named local-only migration/function paths and disposable17 fixture
   setup. Preserve direct author chapter/revision revocations and public exposure limits.
3. Approve the request/receipt journal,1000chapter/safe-integer bounds and book-lifetime
   idempotency retention. No TTL/new-key replay exception is implied.

These decisions can authorize LOCAL implementation without any hosted access.
Credentials, hosted users, JWT experiments, migration execution and pilot/release
remain separate target-specific packets. Do not hold independent local code hostage
to the unexecuted metadata inventory, or bypass missing database/security decisions.

## Required implementation evidence

Allocate a unique authorized Task, commit exact source snapshots, generate/check/commit
its immutable CP before code. Implement all P01..P06 cases with real disposable DB
transactions and before/after negative evidence. Include concurrent clients, lost
acknowledgement/restart, forced rollback, cross-book/author/forged claims, unchanged
manuscript revisions and effective-role/EXECUTE tests. Run focused tests, existing
Library/workspace/preflight regressions, builds/types, governance, distinct exact-head
review and actual ready CI. EB must separate model tests, real disposable DB evidence
and hosted NOT_RUN. Submit for ordinary owner merge; no automatic merge or broad
G_DESIGN/G_CODE/private-pilot/release promotion.
~~~~~~

## Execution reporting
Return an ExecutionBundle with FACT / INTERPRETATION / PROPOSAL sections,
tests actually performed, changes, evidence gaps, and pending owner approval.
