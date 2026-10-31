---
id: VEL-CP-0073
title: 'Context for VEL-TASK-0073: Prepare exact IMP003B disposable SQL-path owner
  record'
type: context-pack
status: prepared
created_at: '2026-10-31'
version: 0.1.0
task_id: VEL-TASK-0073
base_commit: 007f5a2a324fe063aa2e3093c4d0e846a231a7fd
task_blob_sha: 737e1db286ab34153eb3f082e47320d669f28a53
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
  git_blob_sha: 4d15b79a32069871feaf659c8cb9791f6be20653
  source_status: active
- path: docs/agent-workflow/PR-COMPLIANCE.md
  role: governing-source
  git_blob_sha: 5f4845623aef3abb15fba7fbe8e78474902cca00
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0073/OWNER-SCOPE.md
  role: governing-source
  git_blob_sha: de5f43f10d4558503f6354467fbf489f92b25651
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0073/BOUNDARY.md
  role: governing-source
  git_blob_sha: 3e5f4c883a639e60dda65b2a9a96f42624c734f8
  source_status: unrecorded
- path: scripts/pr_compliance.py
  role: governing-source
  git_blob_sha: d6112a087c4616c59774239e381132e8ea33af8e
  source_status: unrecorded
source_gaps:
- id: SQL-BASE
  limitation: Current main lacks the required owner-reviewed Task0071 SQL-path record.
    Candidate cannot confer its own SQL permission. Task0071/CP0071 must be established
    after prerequisite integration.
prepared_by: agent_workflow.py
---

# VEL-CP-0073 — Prepare exact IMP003B disposable SQL-path owner record

## Objective
Implement only the necessary approval-record prerequisite for reserved future Task0071; no executable SQL or feature code; owner retains record integration and feature merge.

## Scope
**In:** docs/agent-workflow/tasks/VEL-TASK-0073.yaml; docs/agent-workflow/context-packs/VEL-CP-0073.md; docs/agent-workflow/execution-bundles/VEL-EB-0073.md; docs/agent-workflow/inputs/VEL-TASK-0073/*; docs/agent-workflow/authorizations/VEL-TASK-0071.yaml; docs/agent-workflow/PR-COMPLIANCE.yaml; docs/reports/VEL-PERSISTENCE-SQL-PATH-0073.md; docs/reports/evidence/VEL-TASK-0073/*
**Out:** All application, executable SQL, Auth, dependencies, CI and standing control changes; Automatic merge; hosted, real credentials, migrations, live JWT, private manuscripts, deployment, settings

## Evidence and authority constraints
The text below is a readable rendering of pinned Git blobs; exact raw bytes remain recoverable from the recorded commit/blob SHAs. Recorded source statuses remain in force: draft research is not accepted requirements. Original unarchived uploads are not independently verified merely by being mentioned.

**Known source gaps:**
- SQL-BASE: Current main lacks the required owner-reviewed Task0071 SQL-path record. Candidate cannot confer its own SQL permission. Task0071/CP0071 must be established after prerequisite integration.

## Permissions and acceptance
**Allowed:** Prepare and commit sources, generate/validate/commit immutable CP, Create exact scoped candidate record relaying explicit owner dispatch; validate against trusted base code without editing it, Read-only distinct review, submit prerequisite PR, record actual CI and request owner adoption
**Owner approval required:** Prerequisite PR merge; subsequent feature merge; Task0071 executable code only after reviewed-base path record and separate immutable CP; All hosted, credentials-real, live JWT, production, paid, private and settings actions remain excluded
**Acceptance criteria:**
- Only exact tests/editor/persistence/sql/10_manuscript_contract.sql authorized for Task0071
- Trusted parser rejects incorrect task/kind/path/evidence/status/authority and absent/candidate-only base
- Unchanged evaluator, application, SQL, workflows, dependencies and historical evidence
- Actual governance, distinct completed-head review, Draft/ReadyCI and no merge

## Deliverables
- Committed Task and validated immutable CP before candidate authorization record
- Exact single-path record relaying explicit owner scope, without self-approval of its candidate integration
- Positive/negative trusted gate probes, source integrity and metadata evidence, EB and distinct review
- Draft/Ready prerequisite PR for ordinary owner decision; no automatic merge

## Pinned source snapshots
Git commit: `007f5a2a324fe063aa2e3093c4d0e846a231a7fd`. Read source statuses independently from task intent.

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

### `CURRENT-STATE.md` @ `4d15b79a32069871feaf659c8cb9791f6be20653`

~~~~~~markdown
---
id: VEL-STATE-001
type: current-state
status: active
created_at: 2026-10-08
updated_at: 2026-10-29
owner: project_owner
version: 0.2.2
---

# Vellistry — current verified state

## Stacked-merge compliance correction — 2026-10-29

FACT: main `6d9ce61fb560dd24e0646f6388ce38de3d87399d` integrates PR129,
exact reviewed tree187c8538. PR128 post-main40948274512 passed. PR129
post-main40951100355 FAILED: push compliance requires an invalid ancestry;
application/security/32PG17/12recovery passed. Governance suite skipped;
final gate FAILED. Historical failure remains FAIL, integration unverified.

Task0070/CP0070 proposes the bounded evaluator/test correction, preserving
trusted before, parent/tree checks and immutable implementation change-base.
[Report](docs/reports/VEL-STACKED-MERGE-COMPLIANCE-0070.md). Review/CI/owner merge
pending. Task0069 preparation is preserved undispatched, not rewritten.

Task0068's unregistered Tiptap editor reuses IMP002;30editor/33browser checks
are historical PASS. Memory-only drafts; no production route/durable save.
MFA acceptance deferred, not security waived. PRINCIPAL/SESSION/gateway and
persistence gated; R01-R08 NOT_RUN; N12/historical EPERM BLOCKED. Issue108OPEN;
remediation delegation EXPIRED. No hosted acceptance or new feature authority.
Earlier dated paragraphs remain historical records, not renewed authority.

## Owner-only PRINCIPAL probe preparation — 2026-10-26

FACT: PR124 merged17adbf96ae0a9187732ad3a7837ec0d2d9b62d03; tree match and
[post-main40289823029](https://github.com/Ben-001-sys/Vellistry/actions/runs/40289823029) SUCCESS. Task59-62 history preserved.
Owner conditionally authorizes an owner-executed two-existing-synthetic-fixture
probe after prerequisites/exact protocol review. Task0063/CP0063 prepares the
[protocol](docs/reports/VEL-OWNER-PRINCIPAL-PROBE-PROTOCOL-0063.md), not executable Auth code.
All3fixture prerequisites UNKNOWN26October2026; HOSTED_EXECUTION_BLOCKED.
No account creation/enrollment change or agent credentials/hosted operations.
Conditional PRINCIPAL design remains separate from target/implementation trust;
other production gates pending; R01-R08 NOT_RUN; N12/independent EPERM BLOCKED.
Docs review/CI/owner merge pending; Issue108 OPEN; delegation EXPIRED.

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

## Historical pre-integration checkpoint

Historical base `23fd8488df060e1591be70232abd70f4255e814d`, CI39868833625; VEL-CP-0041; PR #83, PR #65, PR #68, PR #59 were IN_VERIFICATION/superseded. Earlier snapshot: docs/reports/CURRENT-STATE-ARCHIVE-2026-10-22.md.

The exact pre-Task0064 state is retained in the
[main33812 snapshot](docs/reports/evidence/VEL-TASK-0064/CURRENT-STATE-main33812.txt),
Git and earlier immutable packs. Its Task0041-0044 pending-integration statements
are historical: PR106/107 merged, repository remediation closed and delegation
expired. See the [completion report](docs/reports/VEL-REMEDIATION-COMPLETION-0042.md),
[44-item ledger](docs/reports/VEL-MASTER-REMEDIATION-LEDGER.md),
[PR/source dispositions](docs/reports/VEL-CURRENT-TRUTH-0041-DISPOSITIONS.md)
and [149-ID overlay](docs/reports/VEL-CURRENT-TRUTH-0041-FEATURES.md).

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

### `docs/agent-workflow/inputs/VEL-TASK-0073/OWNER-SCOPE.md` @ `de5f43f10d4558503f6354467fbf489f92b25651`

~~~~~~markdown
Owner instruction relay from Codex chat, 31 October 2026. This is not independently authenticated owner authorship by Codex.

The owner explicitly approved exactly NEW tests/editor/persistence/sql/10_manuscript_contract.sql for future VEL-TASK-0071, disposable owned PostgreSQL17 synthetic fixtures only: private schema, restricted roles/grants, owner-bound RLS, fixed-path transactional functions, revision CAS, atomic accepted-document plus append-only revisions, idempotency journal/receipts, fault/rollback/concurrency/recovery tests. Retain direct author DML denial, injected trusted synthetic server principal, least privilege, no BYPASSRLS/superuser/service-role normal writing, safe qualified objects/search paths, no untrusted dynamic SQL, foreign receipt disclosure or partial effects, exact prose preservation and owned cleanup.

Task0073 may prepare the task-specific migration-path-approval record and supporting governance/evidence only, after committed validated CP0073. Owner-verified records this explicit decision, not agent self-approval. No application/SQL/evaluator/loader/CI/policy/dependency edits. No hosted/Auth/MFA/production/private/paid/deployment operations or merge. Separate owner integration required before implementation. Preserve original0190a22 preparation and uncommitted CP0071 unchanged; reconcile implementation only after verified prerequisite main. Issue108 OPEN; R01-R08 NOT_RUN; N12/historical spawn EPERM BLOCKED; PRINCIPAL/SESSION/hosted unresolved. Remediation delegation expired.
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0073/BOUNDARY.md` @ `3e5f4c883a639e60dda65b2a9a96f42624c734f8`

~~~~~~markdown
FACT: PR114 precedent requires record in reviewed base. This prerequisite authorizes no SQL execution. Only tests/editor/persistence/sql/10_manuscript_contract.sql for future Task0071. Preserve original0190a22 and never-committed CP0071; reconstruct implementation on new reviewed main. No record integration/feature merge authority.
~~~~~~

### `scripts/pr_compliance.py` @ `d6112a087c4616c59774239e381132e8ea33af8e`

~~~~~~markdown
#!/usr/bin/env python3
"""Static PR evidence checks. Never authenticates an LLM, user or approval."""
from __future__ import annotations
import argparse
from datetime import date
import fnmatch
import hashlib
import json
import os
from pathlib import Path
import re
import subprocess
import sys
import yaml
import agent_workflow as aw

MANIFEST = 'docs/agent-workflow/PR-COMPLIANCE.yaml'
REQUIRED = ('scripts/pr_compliance.py', 'scripts/run_pr_compliance.py',
            'tests/test_pr_compliance.py', '.github/workflows/ci.yml')
FORBIDDEN = {'hosted', 'production', 'private-manuscripts', 'paid-services', 'admin', 'merge'}
BOOTSTRAP_BASE = 'f371448538dafa92faebbef9bcda2a36c6ca1fa9'
SHA = re.compile(r'[a-f0-9]{40}')
URL = re.compile(r'https://github.com/Ben-001-sys/Vellistry/(?:issues|pull)/[0-9]+(?:#(?:issuecomment|pullrequestreview)-[0-9]+)?')


def require(value, message):
    if not value:
        raise ValueError(message)


def git(repo, *args):
    return subprocess.check_output(['git', '-C', str(repo), *args], stderr=subprocess.DEVNULL)


def sha(value):
    require(isinstance(value, str) and SHA.fullmatch(value), 'Expected full commit/blob SHA')
    return value


def ancestor(repo, old, new):
    sha(old); sha(new)
    return subprocess.run(['git', '-C', str(repo), 'merge-base', '--is-ancestor', old, new], capture_output=True).returncode == 0


def blob(repo, ref, path, missing=False):
    aw.safe_path(path); sha(ref)
    try:
        mode = git(repo, 'ls-tree', ref, '--', path).split(None, 1)[0]
        require(mode == b'100644' or mode == b'100755', 'Nonregular/missing evidence file: '+path)
        return git(repo, 'show', ref+':'+path)
    except (subprocess.CalledProcessError, IndexError):
        if missing:
            return None
        raise ValueError('Missing evidence file: '+path)


def mapping(raw):
    data = yaml.safe_load(raw)
    require(isinstance(data, dict), 'Malformed metadata mapping')
    return data


def front(raw):
    return aw.frontmatter_from_text(raw.decode('utf-8'))[0]


def changes(repo, base, head):
    sha(base); sha(head)
    return [aw.safe_path(x.decode('utf-8')) for x in git(repo, 'diff', '--no-renames', '--name-only', '-z', base, head, '--').split(b'\0') if x]


def inert(path):
    # No exemption for authority/instructions, fixtures, executable extensions or
    # hidden/config paths. Unknown docs require evidence rather than guessing.
    return path.startswith(('docs/reports/', 'docs/research/')) and path.endswith(('.md', '.txt', '.rst'))


def artifact(path, task_id):
    n = task_id[-4:]
    return (path == MANIFEST or path == f'docs/agent-workflow/tasks/{task_id}.yaml'
            or path == f'docs/agent-workflow/context-packs/VEL-CP-{n}.md'
            or path == f'docs/agent-workflow/execution-bundles/VEL-EB-{n}.md'
            or path.startswith(f'docs/agent-workflow/inputs/{task_id}/')
            or (path.startswith('docs/reports/') and path.endswith(('.md','.txt','.rst','.json','.csv'))))


def allowed(path, patterns):
    # Glob wildcards are whole-repository relative; ../, absolute and secret
    # segments are rejected independently. Explicit scope does not waive SQL.
    aw.safe_path(path)
    require(not any(p in {'secrets', 'credentials'} or p.startswith('.env') for p in path.split('/')), 'Forbidden secret path')
    return any(fnmatch.fnmatchcase(path, p) for p in patterns)


def owner_record(repo, base, task_id, kind, url, paths=None, executor=None):
    # Only already reviewed BASE records can confer substitution/migration or
    # accepted-state assertions; candidate records cannot approve themselves.
    name = f'docs/agent-workflow/authorizations/{task_id}.yaml'
    raw = blob(repo, base, name, missing=True)
    require(raw is not None, 'Owner checkpoint requires base-anchored record')
    record = mapping(raw)
    require(record.get('task_id') == task_id and record.get('status') == 'owner-verified'
            and record.get('approved_by') == 'project_owner' and record.get('kind') == kind
            and record.get('evidence') == url and URL.fullmatch(str(url)), 'Invalid owner checkpoint')
    if executor:
        require(record.get('executor') == executor, 'Owner reassignment mismatch')
    if paths:
        require(set(paths) <= set(record.get('paths', [])), 'Owner migration scope mismatch')
    return record



PERSISTENCE_STEPS = (
    {'name': 'Protected workspace persistence unit regressions',
     'run': 'pnpm --filter @vellistry/api exec tsx --test src/modules/workspace/workspace-contract.spec.ts'},
    {'name': 'Principal adapter binding regressions',
     'run': 'pnpm --filter @vellistry/api exec tsx --test src/modules/workspace/workspace-principal-adapter.spec.ts'},
    {'name': 'Next.js authentication and MFA regressions',
     'run': 'pnpm test:auth-mfa'},
    {'name': 'Disposable PostgreSQL17 protected workspace acceptance',
     'run': 'python tests/workspace/persistence/run_pg17.py --disposable --cases docs/contracts/VEL-IMP002-PERSISTENCE-CASES.json'},
)


def persistence_coverage_contract(workflow):
    """Exact mandatory commands in the existing draft-aware application job."""
    job = workflow['jobs']['application']
    require(job.get('if') == "${{ needs.classify.outputs.application == 'true' }}"
            and job.get('needs') == ['classify'] and 'env' not in job,
            'Persistence application execution guard changed')
    steps = job['steps']
    positions = []
    for expected in PERSISTENCE_STEPS:
        matches = [s for s in steps if s.get('name') == expected['name'] or s.get('run') == expected['run']]
        require(len(matches) == 1 and matches[0] == expected,
                'Exactly one unconditional persistence regression step required: '+expected['name'])
        positions.append(steps.index(matches[0]))
    python = [s for s in steps if str(s.get('uses', '')).startswith('actions/setup-python@')]
    require(python == [{'uses': 'actions/setup-python@v5', 'with': {'python-version': '3.12'}}],
            'Persistence Python runtime contract changed')
    def at(command):
        matches = [i for i, s in enumerate(steps) if s.get('run') == command]
        require(len(matches) == 1, 'Persistence prerequisite missing: '+command)
        return matches[0]
    security = [i for i,s in enumerate(steps) if s.get('name') == 'Pick free, temporary CI-only Supabase API/DB ports']
    require(len(security) == 1 and steps.index(python[0]) < positions[0]
            and at('pnpm install --frozen-lockfile') < positions[0] < positions[1] < positions[2] < at('pnpm build')
            < at('pnpm check') < positions[3] < security[0],
            'Persistence regression/prerequisite/security ordering changed')


def workflow_contract(repo, head):
    for path in REQUIRED:
        blob(repo, head, path)
    workflow = yaml.load(blob(repo, head, '.github/workflows/ci.yml'), Loader=yaml.BaseLoader)
    events = workflow.get('on')
    require(isinstance(events, dict) and set(events) == {'pull_request', 'push', 'workflow_dispatch'}, 'Unsafe/absent CI events')
    pr = events['pull_request']
    activities = {'opened', 'synchronize', 'reopened', 'ready_for_review', 'edited', 'converted_to_draft'}
    require(isinstance(pr, dict) and set(pr) == {'types'} and isinstance(pr['types'], list)
            and len(pr['types']) == len(activities) and set(pr['types']) == activities, 'Required unfiltered PR activities missing')
    require(events['push'] == {'branches': ['main']}, 'Required unfiltered main push verification missing')
    require(events['workflow_dispatch'] == {}, 'Explicit full verification entrypoint changed')
    require(workflow.get('permissions') == {'contents': 'read'}, 'CI privilege escalation')
    require('defaults' not in workflow and 'env' not in workflow, 'Global execution override')
    jobs = workflow['jobs']
    require(set(jobs) == {'classify', 'governance', 'application', 'recovery', 'privileges', 'gate'}, 'Required CI jobs changed')
    for name, job in jobs.items():
        require('permissions' not in job, 'Job permission override: '+name)
        require(not ({'continue-on-error', 'defaults', 'strategy'} & set(job)), 'Weakened job execution guard: '+name)
    for name in ('classify', 'governance', 'gate'):
        require('env' not in jobs[name], 'Job execution environment override: '+name)
    require('if' not in jobs['classify'] and 'needs' not in jobs['classify'], 'Classification must execute unconditionally')
    require('if' not in jobs['governance'] and jobs['governance'].get('needs') == ['classify'], 'Governance must execute after classification')
    for name in ('application', 'recovery', 'privileges'):
        expected = "${{ needs.classify.outputs." + name + " == 'true' }}"
        require(jobs[name].get('needs') == ['classify'] and jobs[name].get('if') == expected, 'Applicable security guard changed: '+name)

    def execution_step(step, command, environment, message):
        # Prevent a correct-looking command from being skipped, softened or run
        # in an alternate shell/directory/environment that masks its result.
        require(set(step) <= {'name', 'id', 'run', 'env'} and step.get('run') == command
                and step.get('env', {}) == environment, message)

    for name in ('governance', 'gate'):
        matching = [step for step in jobs[name]['steps'] if step.get('id') == 'compliance']
        require(len(matching) == 1, 'Missing unconditional compliance step')
        execution_step(matching[0], 'python -I scripts/run_pr_compliance.py', {}, 'Missing unconditional compliance step')
    persistence_coverage_contract(workflow)
    regression_command = 'python scripts/ci_governance.py'
    regression = [step for step in jobs['governance']['steps']
                  if step.get('name') == 'Run all current governance and negative contracts once'
                  or step.get('run') == regression_command]
    require(len(regression) == 1, 'Exactly one unconditional governance regression step required')
    execution_step(regression[0], regression_command, {}, 'Unconditional governance regression command changed')
    require(jobs['governance'].get('outputs', {}).get('compliance') == '${{ steps.compliance.outputs.status }}', 'Missing compliance job output')
    gate = jobs['gate']
    require(gate.get('name') == 'Vellistry CI gate' and gate.get('if') == '${{ always() }}', 'Stable gate missing')
    require(set(gate['needs']) == {'classify', 'governance', 'application', 'recovery', 'privileges'}, 'Incomplete gate dependencies')
    final = [step for step in gate['steps'] if step.get('name') == 'Reject failed, cancelled, missing or skipped applicable checks']
    require(len(final) == 1 and final[0] is gate['steps'][-1], 'Final gate invocation missing or displaced')
    execution_step(final[0], 'python scripts/ci_policy.py gate', {'CI_NEEDS': '${{ toJSON(needs) }}'}, 'Final gate command/result-input contract changed')
    # A zero-test/comment-only replacement must not satisfy test discovery.
    source = blob(repo, head, 'tests/test_pr_compliance.py').decode('utf-8')
    require('class ' in source and 'unittest.TestCase' in source and source.count('def test_') >= 15, 'Deleted/empty compliance regression contract')


def evaluate(repo, base, head, *, today=None, check_workflow=True):
    repo = Path(repo).resolve(); sha(base); sha(head)
    today = today or date.today()
    require(ancestor(repo, base, head), 'Evaluation base is not ancestor')
    paths = changes(repo, base, head)
    if check_workflow:
        workflow_contract(repo, head)
    if not paths or all(inert(p) for p in paths):
        return dict(status='pass', disposition='docs-exempt' if paths else 'unchanged-baseline', head=head, base=base,
                    trust='structure-only; owner review required')
    m = mapping(blob(repo, head, MANIFEST))
    require(type(m.get('version')) is int and m['version'] == 1, 'Missing/unsupported manifest version')
    tid = m.get('task_id', '')
    require(re.fullmatch(r'VEL-TASK-\d{4}', tid) is not None, 'Missing task ID')
    number = tid[-4:]
    task_path = f'docs/agent-workflow/tasks/{tid}.yaml'
    task = mapping(blob(repo, head, task_path))
    require(task.get('id') == tid and task.get('status') in {'in-progress', 'verification'}, 'Task not executed')
    require(blob(repo, base, task_path, missing=True) is None, 'Task reused from base; create authorized amendment')
    contract = task.get('compliance', {})
    require(contract.get('change_base') == base, 'Wrong task/base; repin explicit amendment')
    require(isinstance(contract.get('phase'),str) and re.fullmatch(r'[a-z][a-z0-9-]{0,64}',contract['phase']) and contract['phase'] == m.get('phase'), 'Phase/scope expansion without amendment')
    auth = contract.get('authorization', {})
    require(auth.get('status') == 'authorized' and URL.fullmatch(str(auth.get('url', ''))), 'Missing/expired/superseded owner authorization')
    require(auth.get('provenance') in {'direct-owner-dispatch-with-coordinator-relay', 'owner-linked-dispatch'}, 'Missing authorization provenance')
    require(date.fromisoformat(str(auth.get('expires_on'))) >= today, 'Expired authorization')
    require(set(contract.get('forbidden_actions', [])) == FORBIDDEN and not m.get('performed_forbidden_actions'), 'Non-overridable action exclusions')
    allow = contract.get('allow_paths')
    require(isinstance(allow, list) and allow and all(isinstance(p, str) and p for p in allow), 'Missing path scope')
    for pattern in allow:
        aw.safe_path(pattern)
    for path in paths:
        require(allowed(path, allow), 'Disallowed changed path: '+path)
        # Reject symlinks even for optional data/new paths (deletions have no blob).
        blob(repo, head, path, missing=True)
    pack_path = f'docs/agent-workflow/context-packs/VEL-CP-{number}.md'
    pack_raw = blob(repo, head, pack_path); pack = front(pack_raw)
    pack_commit = sha(m.get('pack_commit'))
    source = sha(m.get('source_commit'))
    require(ancestor(repo, base, pack['base_commit']) and ancestor(repo, pack['base_commit'], pack_commit)
            and pack_commit != source and ancestor(repo, pack_commit, source) and ancestor(repo, source, head), 'Pack/source ancestry invalid')
    require(blob(repo, pack_commit, pack_path) == pack_raw, 'Mutated immutable pack')
    pinned_task = mapping(blob(repo, pack['base_commit'], task_path))
    require({k:v for k,v in task.items() if k not in {'status','updated_at'}} ==
            {k:v for k,v in pinned_task.items() if k not in {'status','updated_at'}}, 'Material task mutation after pin')
    # Existing trusted validator reconstructs all task/source blobs and whole body.
    oldroot = aw.ROOT
    try:
        aw.ROOT = repo
        aw.check_pack(repo/pack_path, {tid:task})
        eb_path = f'docs/agent-workflow/execution-bundles/VEL-EB-{number}.md'
        eb_raw = blob(repo, head, eb_path); eb = front(eb_raw)
        aw.check_bundle(repo/eb_path, {tid:task}, {pack['id']:pack})
    finally:
        aw.ROOT = oldroot
    require(eb.get('implementation_source_commit') == source and m.get('bundle_id') == eb.get('id'), 'Missing/wrong code-head bundle evidence')
    execution = eb.get('execution', {})
    require(execution.get('status') == 'completed' and execution.get('executor') == m.get('executor') == contract.get('executor')
            and eb.get('agent', {}).get('name') == m.get('executor'), 'Missing/contradictory actual executor')
    require(isinstance(execution.get('model'), str) and execution['model'].strip(), 'Missing model claim')
    if m['executor'] != 'Codex':
        owner_record(repo, base, tid, 'executor-exception', m.get('executor_exception'), executor=m['executor'])
    require(m.get('owner_disposition') == 'pending', 'CI cannot grant owner acceptance; external disposition required')
    require(eb.get('status') == 'proposed-for-review' and eb.get('review', {}).get('status') == 'pending', 'Forged completion/owner approval; keep pending for owner review')
    tests = execution.get('tests')
    require(isinstance(tests, list) and tests, 'Missing executed test evidence')
    for test in tests:
        require(test.get('status') == 'PASS' and type(test.get('exit_code')) is int and test['exit_code'] == 0
                and isinstance(test.get('command'), str) and test['command'].strip(), 'Required execution NOT_RUN/BLOCKED/failed')
        evidence = blob(repo, head, test.get('evidence', ''))
        require(evidence.strip(), 'Empty test evidence')
    # Source commit binds every non-report/artifact changed blob to actual HEAD.
    operative = [p for p in paths if not artifact(p, tid)]
    for path in operative:
        require(blob(repo, source, path, missing=True) == blob(repo, head, path, missing=True), 'Head changed after source evidence: '+path)
    # No operative change may predate committed handoff. Compare entire range,
    # including add/delete/revert histories, not just final net diff.
    commits = git(repo, 'rev-list', '--reverse', base+'..'+head).decode().splitlines()
    require(commits and all(len(git(repo,'rev-list','--parents','-n','1',c).split()) == 2 for c in commits), 'Merge commits require separately rebased bounded task')
    records = m.get('commits')
    require(isinstance(records, list), 'Missing per-commit provenance')
    declared = {r.get('commit'):r for r in records if isinstance(r,dict)}
    require(len(declared) == len(records) and set(declared) == set(commits[:-1]), 'Undeclared/duplicate inherited commit origins')
    current = m.get('current_head')
    require(isinstance(current,dict) and current.get('executor') == m['executor'] and current.get('origin') == 'original', 'Missing current-head provenance')
    declared[head] = current
    for commit in commits:
        row = declared[commit]
        require(row.get('executor') and row.get('origin') in {'original','adopted'}, 'Malformed commit provenance')
        message = git(repo, 'show', '-s', '--format=%B', commit).decode('utf-8')
        picked = re.findall(r'\(cherry picked from commit ([0-9a-f]{40})\)', message)
        if row['origin'] == 'adopted':
            require(row.get('original_executor') and URL.fullmatch(str(row.get('source_url','')))
                    and SHA.fullmatch(str(row.get('original_commit',''))), 'Missing adopted source origin')
            require(not picked or picked == [row['original_commit']], 'Cherry-pick provenance mismatch')
            require(row['executor'] == m['executor'], 'Adoption executor mismatch')
            original = sha(row['original_commit'])
            require(subprocess.run(['git','-C',str(repo),'cat-file','-e',original+'^{commit}'],capture_output=True).returncode == 0, 'Adopted original commit unavailable')
            def patch_id(ref):
                patch = git(repo,'show','--pretty=format:','--binary',ref)
                return subprocess.check_output(['git','patch-id','--stable'],input=patch).split()[:1]
            require(patch_id(original) == patch_id(commit), 'Adopted original patch mismatch')
        else:
            require(row['executor'] == m['executor'] and not picked, 'Role substitution / undeclared cherry-pick')
        changed = [p.decode('utf-8') for p in git(repo,'diff-tree','--no-commit-id','--name-only','--no-renames','-r','-z',commit).split(b'\0') if p and not artifact(p.decode('utf-8'),tid)]
        if changed:
            require(commit != pack_commit and ancestor(repo, pack_commit, commit), 'Implementation preceded immutable pack commit')
    sql = [p for p in paths if p.startswith('supabase/migrations/') or p.endswith('.sql')]
    if sql:
        owner_record(repo, base, tid, 'migration-path-approval', m.get('migration_approval'), paths=sql)
    return dict(status='pass', disposition='evidence-consistent', head=head, base=base, task_id=tid,
                source_commit=source, authorization=auth['url'], owner_disposition='pending',
                changed_paths=paths, trust='declared identity and linked authorization; owner verification required')


def event_base(repo, event_name, event, head):
    sha(head)
    if event_name == 'pull_request':
        pr = event.get('pull_request', {})
        require(pr.get('head', {}).get('sha') == head and type(pr.get('draft')) is bool
                and event.get('action') in {'opened','synchronize','reopened','ready_for_review','edited','converted_to_draft'}, 'Malformed/exact-head PR event')
        require(not (event['action']=='ready_for_review' and pr['draft']) and not (event['action']=='converted_to_draft' and not pr['draft']), 'Contradictory draft event')
        base = sha(pr.get('base', {}).get('sha'))
        return git(repo,'merge-base',base,head).decode().strip(), base
    require(event_name in {'push','workflow_dispatch'}, 'Unsupported compliance event')
    require(os.environ.get('GITHUB_SHA',head)==head, 'Wrong event head')
    if event_name == 'push':
        require(event.get('ref') == 'refs/heads/main', 'Only main push')
        base = sha(event.get('before'))
    else:
        base = git(repo,'rev-parse','refs/remotes/origin/main').decode().strip()
    require(base != '0'*40, 'Missing trusted baseline')
    return git(repo,'merge-base',base,head).decode().strip(), base


def evaluate_event(repo, event_name, event, head, *, check_workflow=True):
    base, trust = event_base(repo,event_name,event,head)
    implementation = head
    if event_name == 'push':
        parents = git(repo,'rev-list','--parents','-n','1',head).decode().split()
        if len(parents) > 2:
            require(len(parents)==3 and parents[1]==trust, 'Unreviewed multi-parent/main integration base')
            implementation = parents[2]
            require(not changes(repo,implementation,head), 'Main merge changed implementation tree; new evidence required')
            # A reviewed stacked branch need not descend from the prerequisite's
            # main merge commit. Keep push.before as the trusted evaluator source,
            # but validate the immutable task against the genuine shared range.
            base = git(repo,'merge-base',trust,implementation).decode().strip()
    result = evaluate(repo,base,implementation,check_workflow=check_workflow)
    result.update(head=head, implementation_head=implementation, verifier_base=trust)
    return result


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--repo', type=Path, default=Path.cwd())
    args = parser.parse_args()
    head = git(args.repo,'rev-parse','HEAD').decode().strip()
    event = json.loads(Path(os.environ['GITHUB_EVENT_PATH']).read_text(encoding='utf-8'))
    result = evaluate_event(args.repo, os.environ['GITHUB_EVENT_NAME'], event, head)
    print(json.dumps(result,sort_keys=True))
    if os.environ.get('GITHUB_OUTPUT'):
        with open(os.environ['GITHUB_OUTPUT'],'a',encoding='utf-8') as f:
            f.write('status=pass\nhead='+head+'\n')
    return 0


if __name__ == '__main__':
    try:
        raise SystemExit(main())
    except (ValueError,KeyError,TypeError,AttributeError,yaml.YAMLError) as exc:
        print('BLOCKED: PR compliance: '+str(exc),file=sys.stderr)
        raise SystemExit(1)
~~~~~~

## Execution reporting
Return an ExecutionBundle with FACT / INTERPRETATION / PROPOSAL sections,
tests actually performed, changes, evidence gaps, and pending owner approval.
