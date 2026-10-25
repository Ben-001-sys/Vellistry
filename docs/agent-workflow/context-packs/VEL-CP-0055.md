---
id: VEL-CP-0055
title: 'Context for VEL-TASK-0055: Reconcile PR116 on mandatory persistence CI base
  preserving Task54 sources'
type: context-pack
status: prepared
created_at: '2026-10-25'
version: 0.1.0
task_id: VEL-TASK-0055
base_commit: 6cc43f985072f25aaa9773308c124bba6d8ac11a
task_blob_sha: b8dd75ded736f01a8dbd3462451b8359ce2af92f
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
  git_blob_sha: de6ec9dca05da5c1a98d1b0f715c28a111ff716f
  source_status: active
- path: docs/agent-workflow/PR-COMPLIANCE.md
  role: governing-source
  git_blob_sha: 5f4845623aef3abb15fba7fbe8e78474902cca00
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0055/OWNER-SCOPE.md
  role: governing-source
  git_blob_sha: 3202d820ca82b5275903cff239f98392dfb55c29
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0055/ORIGINAL54-INVENTORY.json
  role: governing-source
  git_blob_sha: 8552456c299eba3baf7bb7d9ae0728987c506d8d
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0055/ORIGINAL54-PR-COMPLIANCE.yaml
  role: governing-source
  git_blob_sha: 6f2bf9df547aadb57062c197dd0965db4f61473b
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0055/ORIGINAL54-PACKET.json
  role: governing-source
  git_blob_sha: a964e42067da33e4b3662d6d04adf81088d9a05b
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0055/ORIGINAL54-REPORT.md
  role: governing-source
  git_blob_sha: e79d87819c8c300288af91251bf1624d7ea8b137
  source_status: proposed
source_gaps:
- id: HOSTED-UNVERIFIED
  limitation: No target catalog/session/JWT/privilege observation. Historical metadata
    and query hashes are preserved, not hosted acceptance.
prepared_by: agent_workflow.py
---

# VEL-CP-0055 — Reconcile PR116 on mandatory persistence CI base preserving Task54 sources

## Objective
Linear current-main PR116 provenance reconciliation and proposed smallest synthetic principal-binding dispatch, no feature implementation or security approval

## Scope
**In:** docs/agent-workflow/context-packs/VEL-CP-0054.md; docs/agent-workflow/execution-bundles/VEL-EB-0054.md; docs/agent-workflow/inputs/VEL-TASK-0054/OWNER-SCOPE.md; docs/agent-workflow/proposals/VEL-SUPABASE-WORKSPACE-READINESS-0054.json; docs/agent-workflow/tasks/VEL-TASK-0054.yaml; docs/reports/VEL-SUPABASE-WORKSPACE-READINESS-0054.md; docs/reports/evidence/VEL-TASK-0054/metadata.txt; docs/reports/evidence/VEL-TASK-0054/packet-integrity.json; docs/reports/evidence/VEL-TASK-0054/readiness.txt; docs/reports/evidence/VEL-TASK-0054/traceability.txt; CURRENT-STATE.md; docs/agent-workflow/tasks/VEL-TASK-0055.yaml; docs/agent-workflow/context-packs/VEL-CP-0055.md; docs/agent-workflow/execution-bundles/VEL-EB-0055.md; docs/agent-workflow/inputs/VEL-TASK-0055/*; docs/agent-workflow/PR-COMPLIANCE.yaml; docs/reports/VEL-PR116-RECONCILIATION-0055.md; docs/reports/evidence/VEL-TASK-0055/*; docs/agent-workflow/proposals/VEL-IMP002-PRINCIPAL-BINDING-HANDOFF-0055.json
**Out:** Original Task54/CP54/EB54/packet/report/evidence modification; Application/Auth/SQL/dependency/CI/control implementation; PR116 merge; hosted/credential/JWT/private/paid/deployment/settings and broad gate promotion

## Evidence and authority constraints
The text below is a readable rendering of pinned Git blobs; exact raw bytes remain recoverable from the recorded commit/blob SHAs. Recorded source statuses remain in force: draft research is not accepted requirements. Original unarchived uploads are not independently verified merely by being mentioned.

**Known source gaps:**
- HOSTED-UNVERIFIED: No target catalog/session/JWT/privilege observation. Historical metadata and query hashes are preserved, not hosted acceptance.

## Permissions and acceptance
**Allowed:** Read pinned sources and adopt only exact inventoried blobs after immutable pack commit, Write scoped reconciliation/report/proposed dispatch/current-state and evidence, Use frozen tooling for offline integrity, metadata/governance and actual CI; distinct trusted read-only Codex review, Preserve old archive and original local worktree; publish only PR116 branch through expected-old-head lease after review, promote ready and verify final head
**Owner approval required:** PR116 merge, principal adapter implementation or unresolved security choice; Any hosted/Auth/SQL/CI/dependency/scope change and externally sensitive operations
**Acceptance criteria:**
- All12originalPR116 paths inventoried;10canonical blobs and2archived snapshots byte-identical, source commits reachable through non-overwriting remote archive
- New change_base exact fd85deb9a31af8663c85977df896e79b0e370eec and linear range; new CP before operative adoption; no standing control change
- All8source hashes and15query hashes retain exact original values; six decisions OWNER_DECISION_PENDING, target observations unverified
- New smallest local adapter dispatch uses injected synthetic verified Auth responses, exact two proposed files, request isolation/token binding and fail-closed negative cases; NOT_AUTHORIZED, no code/privileges/routes/SQL
- Old independent runtime remains BLOCKED; current readyCI including mandatory12unit+32PG and security/recovery must actually pass; do not relabel historical results
- Archive first, only expected-old-head lease PR116 ref replacement after source review/checks; stop on drift; PR116 never auto-merged

## Deliverables
- New Task/committed validated immutable CP55 before adoption
- Exact all-path source disposition, old active snapshots preserved, new-base manifest and EB55
- Proposed local adapter task specification only, six existing security decisions remain pending
- Offline preservation/hash/negative checks, distinct final source review, actual ready CI on unchanged mandatory12/32 pipeline; owner separate merge

## Pinned source snapshots
Git commit: `6cc43f985072f25aaa9773308c124bba6d8ac11a`. Read source statuses independently from task intent.

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

### `CURRENT-STATE.md` @ `de6ec9dca05da5c1a98d1b0f715c28a111ff716f`

~~~~~~markdown
---
id: VEL-STATE-001
type: current-state
status: active
created_at: 2026-10-08
updated_at: 2026-10-25
owner: project_owner
version: 0.2.2
---

# Vellistry — current verified state

## Protected persistence and mandatory CI candidate — 2026-10-25

FACT: PR115 merged at c577cc5ecf5fb92fda63977bade60ce4cf2d45df with exact
reviewed-tree equality; [post-main40184254095](https://github.com/Ben-001-sys/Vellistry/actions/runs/40184254095) SUCCESS.
Task52's unregistered service/private PG17 experiment passed27original+5extensions;
[historical evidence](docs/reports/VEL-IMP002-DISPOSABLE-PERSISTENCE-0052.md) and
blocked independent runtime are preserved. Synthetic sessions are not hosted logout acceptance.
Task0053/CP0053 proposes mandatory12unit+32PG cases in the existing application job,
with negative bypass checks; [report](docs/reports/VEL-PERSISTENCE-CI-0053.md).
Owner successor merge remains pending. No Auth/SQL/dependency/route/hosted change.
Broad gates unchanged; remediation delegation EXPIRED; Issue108 OPEN.

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

### `docs/agent-workflow/inputs/VEL-TASK-0055/OWNER-SCOPE.md` @ `3202d820ca82b5275903cff239f98392dfb55c29`

~~~~~~markdown
# Direct owner continuation relay and bounded reconciliation

Owner instruction received2026-10-25, indexed at https://github.com/Ben-001-sys/Vellistry/issues/108#issuecomment-6396942291 . This is a Codex relay of the direct chat authorization, not invented human GitHub approval.

Owner approves merge of PR117 exact82176e809f45612c0d70aaf68c3f99e655033c2d after final gates; merged fd85deb9a31af8663c85977df896e79b0e370eec with identical tree6dce4b1aa7f91071909fc7eba25199a584442899. Post-main40188047497 was pending at this source preparation; require actual successful conclusion before final PR publication and record it separately rather than alter this historical input.

Owner separately authorizes PR116 new-base provenance reconciliation preserving Task0054/CP0054/evidence/source/query hashes, all six decisions pending, observations unverified, plus the smallest proposed local principal-binding adapter Task for separate authorization. Follow Task50 precedent: preserve old local worktree and push non-overwriting archive ref codex/archive-pr116-task0054-3ea34b5; prepare linear current-main Task0055, commit/validate immutable CP0055 before adopting any operative old blobs. Preserve every old changed blob exactly except archive old current-state/active selector verbatim and build current-state/new active manifest. No false cherry-pick or new authorship claim. After source checks and distinct completed-head review, lease-guard replacement of ONLY PR116 branch expecting exact3ea34b518b4e5d6fac6b4051389dac51c2af9272; stop on any remote change. Original commits remain on archive and original local branch.

No PR116 merge. No application/Auth/SQL/dependency/CI/control implementation; inherit new mandatory12/32CI unchanged. No hosted operations/credentials/migrations/users/JWT/private/paid/deployment/settings or broad gate promotion. Prior remediation delegation remains expired; Issue108 open. Preserve original blocked independent runtime as BLOCKED. All proposed principal adapter paths are authorization candidates, not permission to code.
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0055/ORIGINAL54-INVENTORY.json` @ `8552456c299eba3baf7bb7d9ae0728987c506d8d`

~~~~~~markdown
{
  "original_pr": 116,
  "head": "3ea34b518b4e5d6fac6b4051389dac51c2af9272",
  "base": "c577cc5ecf5fb92fda63977bade60ce4cf2d45df",
  "archive_ref": "codex/archive-pr116-task0054-3ea34b5",
  "original_executor": "Codex",
  "new_executor": "Codex",
  "source_commits": [
    "6fa1cb3c6dd4aba2ae732ab6664e455a9e327ee1",
    "c61fc0567bb6febb2c55564bce85617a8e6940a8",
    "57222edaaf29d203cee3f69d0de7045e18ba6627",
    "3ea34b518b4e5d6fac6b4051389dac51c2af9272"
  ],
  "paths": [
    {
      "path": "CURRENT-STATE.md",
      "git_blob": "9ed0a0b3b942ea51c0da32206ea6168b23baec33",
      "sha256": "6c732942594f3fa037e7336b0696701c44a9870a5d74ada2a8e48bb32e6ae9d2",
      "disposition": "historical snapshot in new task inputs",
      "destination": "docs/agent-workflow/inputs/VEL-TASK-0055/ORIGINAL54-CURRENT-STATE.md"
    },
    {
      "path": "docs/agent-workflow/PR-COMPLIANCE.yaml",
      "git_blob": "6f2bf9df547aadb57062c197dd0965db4f61473b",
      "sha256": "1450613fdd3fa4f60ea7456daf537a044ddb50d6887757412e593c3ca44c95b5",
      "disposition": "historical snapshot in new task inputs",
      "destination": "docs/agent-workflow/inputs/VEL-TASK-0055/ORIGINAL54-PR-COMPLIANCE.yaml"
    },
    {
      "path": "docs/agent-workflow/context-packs/VEL-CP-0054.md",
      "git_blob": "91a613dd368238f63cc54e9f8de0de1b8e9f83c9",
      "sha256": "6188e07a67c45abfb888349fa9da3232b046c8bb5374ca8b6de2a7e283604672",
      "disposition": "exact canonical preservation after CP55",
      "destination": "docs/agent-workflow/context-packs/VEL-CP-0054.md"
    },
    {
      "path": "docs/agent-workflow/execution-bundles/VEL-EB-0054.md",
      "git_blob": "8cef0df7da92e6fd458ca5253c1474cad53ea1c8",
      "sha256": "8ae82e2773da001fe1cb6fcad99560b50b7b327f23501c338f99f72f15ff5c03",
      "disposition": "exact canonical preservation after CP55",
      "destination": "docs/agent-workflow/execution-bundles/VEL-EB-0054.md"
    },
    {
      "path": "docs/agent-workflow/inputs/VEL-TASK-0054/OWNER-SCOPE.md",
      "git_blob": "d5cca086e626e7898cd5e54474877d7cc796e2a5",
      "sha256": "1d1a4f0072b2d9f85b380a8cb7b8af0b9dd91730dfebe64f0963e8b735cc2c62",
      "disposition": "exact canonical preservation after CP55",
      "destination": "docs/agent-workflow/inputs/VEL-TASK-0054/OWNER-SCOPE.md"
    },
    {
      "path": "docs/agent-workflow/proposals/VEL-SUPABASE-WORKSPACE-READINESS-0054.json",
      "git_blob": "a964e42067da33e4b3662d6d04adf81088d9a05b",
      "sha256": "37af89741613bd4b77056fea501938561f1eea39baebf753f04f61c4c37ce2d4",
      "disposition": "exact canonical preservation after CP55",
      "destination": "docs/agent-workflow/proposals/VEL-SUPABASE-WORKSPACE-READINESS-0054.json"
    },
    {
      "path": "docs/agent-workflow/tasks/VEL-TASK-0054.yaml",
      "git_blob": "66a775115b84649ad98e0d2bcc5ca10a44332ff8",
      "sha256": "b7bf0d1c10cd88c0e5ce2bddef97ca123af88a3660dc40f78762e7525bd9439c",
      "disposition": "exact canonical preservation after CP55",
      "destination": "docs/agent-workflow/tasks/VEL-TASK-0054.yaml"
    },
    {
      "path": "docs/reports/VEL-SUPABASE-WORKSPACE-READINESS-0054.md",
      "git_blob": "e79d87819c8c300288af91251bf1624d7ea8b137",
      "sha256": "49c4220112a3e8e5512f07a7f8784ba6ab000193ef1b7fab142f00a7dc1732ee",
      "disposition": "exact canonical preservation after CP55",
      "destination": "docs/reports/VEL-SUPABASE-WORKSPACE-READINESS-0054.md"
    },
    {
      "path": "docs/reports/evidence/VEL-TASK-0054/metadata.txt",
      "git_blob": "940063efd38b84b7a3e5cfb25516a95a215b732c",
      "sha256": "4423d0179232fe933d37cd2f42bc585e490f89273e3f9054d82879f81e4b06a5",
      "disposition": "exact canonical preservation after CP55",
      "destination": "docs/reports/evidence/VEL-TASK-0054/metadata.txt"
    },
    {
      "path": "docs/reports/evidence/VEL-TASK-0054/packet-integrity.json",
      "git_blob": "ca96de64fb32f07625d8c63ff1c2cca53b11b52a",
      "sha256": "84bec392683a3bd7982cb1c4bb9c7f00aa2f00547e12a42702f0c49f31158e1e",
      "disposition": "exact canonical preservation after CP55",
      "destination": "docs/reports/evidence/VEL-TASK-0054/packet-integrity.json"
    },
    {
      "path": "docs/reports/evidence/VEL-TASK-0054/readiness.txt",
      "git_blob": "e4080f22adfe2b711527a9c6187331802f24d4db",
      "sha256": "77a2897bb7f252e76ff34c9ea2686332d0fd6623eb4a8dfcef4fc4ef4ca5b6e2",
      "disposition": "exact canonical preservation after CP55",
      "destination": "docs/reports/evidence/VEL-TASK-0054/readiness.txt"
    },
    {
      "path": "docs/reports/evidence/VEL-TASK-0054/traceability.txt",
      "git_blob": "9e33ebab684d8b9bbc38e7a9f8438de99fbfc1dd",
      "sha256": "841d7d51e3519d10cd1c021082c02b85421ce1ebd48f615c335da901891a5900",
      "disposition": "exact canonical preservation after CP55",
      "destination": "docs/reports/evidence/VEL-TASK-0054/traceability.txt"
    }
  ]
}
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0055/ORIGINAL54-PR-COMPLIANCE.yaml` @ `6f2bf9df547aadb57062c197dd0965db4f61473b`

~~~~~~markdown
version: 1
task_id: VEL-TASK-0054
phase: repository-only
executor: Codex
pack_commit: c61fc0567bb6febb2c55564bce85617a8e6940a8
source_commit: 57222edaaf29d203cee3f69d0de7045e18ba6627
bundle_id: VEL-EB-0054
owner_disposition: pending
commits:
- commit: 6fa1cb3c6dd4aba2ae732ab6664e455a9e327ee1
  executor: Codex
  origin: original
- commit: c61fc0567bb6febb2c55564bce85617a8e6940a8
  executor: Codex
  origin: original
- commit: 57222edaaf29d203cee3f69d0de7045e18ba6627
  executor: Codex
  origin: original
current_head:
  executor: Codex
  origin: original
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0055/ORIGINAL54-PACKET.json` @ `a964e42067da33e4b3662d6d04adf81088d9a05b`

~~~~~~markdown
{
  "id": "VEL-SUPABASE-WORKSPACE-READINESS-0054",
  "status": "PROPOSAL_ONLY",
  "task_id": "VEL-TASK-0054",
  "base_commit": "c577cc5ecf5fb92fda63977bade60ce4cf2d45df",
  "owner_merge": "PENDING",
  "target": {
    "name": "vellistry-dev",
    "reference": "lflkcrnriitrbclangyr",
    "organization": "pulyacnozzggwfgqdgdl",
    "region": "eu-west-2",
    "observation": "Historical owner-confirmed metadata only; no current target inspection"
  },
  "hosted_queries_executed": false,
  "credentials_obtained": false,
  "production_routes_registered": false,
  "shipping_sql_paths": [],
  "metadata_packet_sha256": "dbae331cd58a7c5524d77fda8380233f19c25b3d0e8520a4b984bc3d58db4f08",
  "sources": [
    {
      "path": "apps/api/src/modules/auth/supabase-auth.service.ts",
      "commit": "c577cc5ecf5fb92fda63977bade60ce4cf2d45df",
      "sha256": "e2ddcdf05608019b3d5aa22e94113a9816731bbf5f870c62071f4f831e0097e5"
    },
    {
      "path": "apps/api/src/modules/auth/supabase-auth.guard.ts",
      "commit": "c577cc5ecf5fb92fda63977bade60ce4cf2d45df",
      "sha256": "e0dbe26a885ba14d7f15ec6c4401b1ad51ae49c2d4386d784e56820870979474"
    },
    {
      "path": "apps/api/src/modules/workspace/workspace-principal.ts",
      "commit": "c577cc5ecf5fb92fda63977bade60ce4cf2d45df",
      "sha256": "dd7ef61f110b7863638720a3d686550a94a3ee6b423543224ec2d7c183bad272"
    },
    {
      "path": "apps/api/src/modules/workspace/workspace.service.ts",
      "commit": "c577cc5ecf5fb92fda63977bade60ce4cf2d45df",
      "sha256": "670621f4867e43b6391dde6afb75ecf8596ea8e24365385a18473e3e259e72d4"
    },
    {
      "path": "apps/web/src/app/api/books/route.ts",
      "commit": "c577cc5ecf5fb92fda63977bade60ce4cf2d45df",
      "sha256": "bbb830fd18e318097853f3b3009d194070cd5509648a980f669f768d51a06208"
    },
    {
      "path": "docs/contracts/VEL-IMP002-PERSISTENCE-CONTRACT.md",
      "commit": "c577cc5ecf5fb92fda63977bade60ce4cf2d45df",
      "sha256": "154ca1697a4cda5d8efbb71a0662efdf1ab7d11ef9c25313cf867229062ac90b"
    },
    {
      "path": "docs/agent-workflow/proposals/VEL-IMP002-PERSISTENCE-EXECUTION-PACKET.json",
      "commit": "c577cc5ecf5fb92fda63977bade60ce4cf2d45df",
      "sha256": "c87b2e8825663ce9b6a6c3f82c9ea3e791fdcb3225ed4bc4b9064e96366a5749"
    },
    {
      "path": "docs/reports/evidence/VEL-HOSTED-METADATA-0046/query-manifest.json",
      "commit": "c577cc5ecf5fb92fda63977bade60ce4cf2d45df",
      "sha256": "14d638f3bdd5a418b7b5faa1e3d517f3e1e21681b1a921b63c492fe73b0fb4de"
    }
  ],
  "decisions": [
    {
      "id": "PRINCIPAL",
      "status": "OWNER_DECISION_PENDING",
      "required_contract": "Reuse existing server-side SupabaseAuthService/guard. Verify exact bearer token with existing Auth; derive subject/session_id/expiry from cryptographically verified claims bound to the same token. Never trust decoded-only claims, headers, user_metadata, a caller-selected session or body author. Request-isolated immutable principal, pre/post async verification.",
      "decision_required": "Select existing-SDK verified-claims binding and failure mapping after local tests; no Auth replacement or dependency change.",
      "acceptance": "Wrong subject/session, expired/future/stale proof, mismatched token, malformed UUID, concurrent requests cannot cross-contaminate."
    },
    {
      "id": "SESSION",
      "status": "OWNER_DECISION_PENDING",
      "required_contract": "A valid JWT/getUser alone does not establish an active writable session. Missing or unproven session must fail closed. Check matching session/user and expiry after lock acquisition, before book lock and operation commit.",
      "decision_required": "Owner/provider review is required before any real auth.sessions UPDATE(id) or locking grant. Evaluate managed-schema row-lock compatibility versus separately designed app-owned revocation registry; no option is approved here. Define inactivity/not_after semantics, clock policy, timeouts and revoke/commit linearization.",
      "acceptance": "Local/global/others logout, password/user revocation, expired sessions and cleanup lag, revoke-before-lock and revoke-after-lock, provider outage, refresh/key rotation, pool reuse. Hosted synthetic users/JWT probes need separate target authorization."
    },
    {
      "id": "GATEWAY",
      "status": "OWNER_DECISION_PENDING",
      "required_contract": "Private server-only SQL capability executes named entry points; no broad author-table writes, browser SQL credentials, service-role author path or public Data API RPC. NOLOGIN/NOBYPASSRLS function/lock owners remain experimental.",
      "decision_required": "Choose reviewed connection/pool/TLS/secret provisioning channel and exact role membership, scoped default ACL/ownership/search_path/RLS after metadata review. Never provision credentials now.",
      "acceptance": "Deny direct DML/TRUNCATE/REFERENCES/TRIGGER, role escalation and helper calls; verify forced RLS and cross-author/book isolation through each entry point and reused connections."
    },
    {
      "id": "PACKAGING",
      "status": "OWNER_DECISION_PENDING",
      "required_contract": "The four local SQL fixtures are not shipping migrations; preserve both operative migrations and separately retained third proposal.",
      "decision_required": "Shipping SQL paths UNALLOCATED. First review sanitized metadata via the existing15-query packet, then exact migration names/content and a separate reviewed-base owner SQL-path record before a new executable task. No third-migration deployment approval follows from this packet.",
      "acceptance": "Exclude synthetic auth.users/auth.sessions definitions, fixture users/passwords, fixture_probe/test_fault hooks and fixture-wide default ACL modifications; atomic function ownership/revoke setup and rollback/upgrade from both operative migrations."
    },
    {
      "id": "RECONCILIATION",
      "status": "OWNER_DECISION_PENDING",
      "required_contract": "Retain owner+book+operation idempotency identity, request hash, receipts and minimum-version owned readback. Unknown outcomes cannot become definite failures or new-key retries. Process-local pending state does not survive browser/server restart.",
      "decision_required": "Choose a durable per-author/book operation outbox with data-minimal metadata and explicit retention/privacy/encryption decision for any note payload; preserve book-lifetime server journal and rejection receipts. No unreviewed in-progress committed row or TTL.",
      "acceptance": "Lost ACK after commit, unknown-not-found, same key/different hash, restart/restore, multi-instance concurrency, stale reads/receipts, account switch and cancellation do not duplicate or leak operations."
    },
    {
      "id": "TRANSPORT",
      "status": "OWNER_DECISION_PENDING",
      "required_contract": "Preserve current Next BFF verified-token forwarding and Nest verification, no-store responses and identity isolation; workspace service remains unregistered.",
      "decision_required": "Future production controller/routes require separately scoped owner authorization after principal/session/gateway/reconciliation decisions. Define bounded body parsing, validation/errors/unknown acknowledgements, request-scoped provider and adapter lifetime. Do not register a route in this task.",
      "acceptance": "Cross-book routes, forged ownership, pre/post identity switch, upstream partial body/timeouts, no-store caching, rate/body limits, keyboard/focus existing UI behavior and manuscript/revision invariance."
    }
  ],
  "next_local_task": {
    "status": "PROPOSED_NOT_AUTHORIZED",
    "title": "Real-principal binding adapter contract with injected verified Auth responses only",
    "paths": [
      "apps/api/src/modules/workspace/workspace-principal-adapter.ts",
      "apps/api/src/modules/workspace/workspace-principal-adapter.spec.ts"
    ],
    "requirements": [
      "New unique task and immutable pack before code; owner chooses token-to-verified-claims binding API under frozen SDK",
      "No network, credentials, production registration, SQL or managed-session grants",
      "Synthetic verified-response tests cover wrong subject/session/token, expiry/freshness, concurrent request isolation and fail-closed provider errors",
      "Still cannot establish real revoked-session enforcement or authorize workspace writes until managed-session decision reviewed"
    ]
  }
}
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0055/ORIGINAL54-REPORT.md` @ `e79d87819c8c300288af91251bf1624d7ea8b137`

~~~~~~markdown
---
id: VEL-SUPABASE-WORKSPACE-READINESS-0054
title: Protected workspace Supabase integration readiness and reserved decisions
type: report
status: proposed
created_at: 2026-10-25
owner: project_owner
---

# Integration readiness decision packet

FACT: Base main `c577cc5ecf5fb92fda63977bade60ce4cf2d45df` contains reviewed PR115. Its merged tree equals the approved head and [post-main40184254095](https://github.com/Ben-001-sys/Vellistry/actions/runs/40184254095) succeeded. Task0054/CP0054 was committed and validated before preparation. This task makes no application, Auth, SQL, dependency, CI or production-route change. The expired remediation delegation stays closed. Issue108 remains open.

FACT: The existing Next Books BFF verifies session identity and forwards an access token; Nest independently invokes `SupabaseAuthService.verify(token)` through `SupabaseAuthGuard`. That method returns only a verified user id from `getUser`, not the session id or active writable-session proof required by the new workspace principal contract. WorkspaceService and its principal/port remain unregistered. Task52's synthetic PG17.11 tests passed27original+5extensions; its12 focused unit tests and blocked independent runtime history are preserved. Task0053 is a separate CI coverage candidate, not yet integrated coverage.

The [machine-readable packet](../agent-workflow/proposals/VEL-SUPABASE-WORKSPACE-READINESS-0054.json) pins each relevant Git source and hash. Original Task49 proposed contract and Task50 packet retain historical decision statuses; Task52's owner decisions approved a disposable experiment, not shipping grants or hosted acceptance. This packet does not retroactively edit them.

## Historical target and access boundary

FACT: Owner-confirmed target: `vellistry-dev`, reference `lflkcrnriitrbclangyr`, organization `pulyacnozzggwfgqdgdl`, region `eu-west-2`. Earlier ACTIVE_HEALTHY is historical, not a new observation. The unchanged15-query [Task46 packet](VEL-HOSTED-METADATA-0046-QUERY-PACKET.md) has canonical Git SHA256 `dbae331cd58a7c5524d77fda8380233f19c25b3d0e8520a4b984bc3d58db4f08`. Its [query manifest](evidence/VEL-HOSTED-METADATA-0046/query-manifest.json) preserves all exact query hashes/limits. No query, credential retrieval, CLI authentication or export occurred here.

PROPOSAL: The next hosted-metadata action remains owner-supplied sanitized export or an explicitly approved target-specific read-only channel for those exact queries. Confirm target/reference/organization/region; bounded catalog-only role, transaction read-only/timeout/row limits and sanitized output. Stop on wrong target, missing authority, secret/data fields, unexpectedly broad results or required privilege escalation. Do not query manuscripts, mint users, inspect JWTs or change settings. Metadata inspection does not approve migration execution or behavioral acceptance; owner must separately authorize exact future synthetic fixtures/probes and cleanup.

## Security decisions requiring separate resolution

### PRINCIPAL — OWNER_DECISION_PENDING

PROPOSAL: Reuse existing server-side SupabaseAuthService/guard. Verify exact bearer token with existing Auth; derive subject/session_id/expiry from cryptographically verified claims bound to the same token. Never trust decoded-only claims, headers, user_metadata, a caller-selected session or body author. Request-isolated immutable principal, pre/post async verification.

Decision required: Select existing-SDK verified-claims binding and failure mapping after local tests; no Auth replacement or dependency change.

Acceptance: Wrong subject/session, expired/future/stale proof, mismatched token, malformed UUID, concurrent requests cannot cross-contaminate.

### SESSION — OWNER_DECISION_PENDING

PROPOSAL: A valid JWT/getUser alone does not establish an active writable session. Missing or unproven session must fail closed. Check matching session/user and expiry after lock acquisition, before book lock and operation commit.

Decision required: Owner/provider review is required before any real auth.sessions UPDATE(id) or locking grant. Evaluate managed-schema row-lock compatibility versus separately designed app-owned revocation registry; no option is approved here. Define inactivity/not_after semantics, clock policy, timeouts and revoke/commit linearization.

Acceptance: Local/global/others logout, password/user revocation, expired sessions and cleanup lag, revoke-before-lock and revoke-after-lock, provider outage, refresh/key rotation, pool reuse. Hosted synthetic users/JWT probes need separate target authorization.

### GATEWAY — OWNER_DECISION_PENDING

PROPOSAL: Private server-only SQL capability executes named entry points; no broad author-table writes, browser SQL credentials, service-role author path or public Data API RPC. NOLOGIN/NOBYPASSRLS function/lock owners remain experimental.

Decision required: Choose reviewed connection/pool/TLS/secret provisioning channel and exact role membership, scoped default ACL/ownership/search_path/RLS after metadata review. Never provision credentials now.

Acceptance: Deny direct DML/TRUNCATE/REFERENCES/TRIGGER, role escalation and helper calls; verify forced RLS and cross-author/book isolation through each entry point and reused connections.

### PACKAGING — OWNER_DECISION_PENDING

PROPOSAL: The four local SQL fixtures are not shipping migrations; preserve both operative migrations and separately retained third proposal.

Decision required: Shipping SQL paths UNALLOCATED. First review sanitized metadata via the existing15-query packet, then exact migration names/content and a separate reviewed-base owner SQL-path record before a new executable task. No third-migration deployment approval follows from this packet.

Acceptance: Exclude synthetic auth.users/auth.sessions definitions, fixture users/passwords, fixture_probe/test_fault hooks and fixture-wide default ACL modifications; atomic function ownership/revoke setup and rollback/upgrade from both operative migrations.

### RECONCILIATION — OWNER_DECISION_PENDING

PROPOSAL: Retain owner+book+operation idempotency identity, request hash, receipts and minimum-version owned readback. Unknown outcomes cannot become definite failures or new-key retries. Process-local pending state does not survive browser/server restart.

Decision required: Choose a durable per-author/book operation outbox with data-minimal metadata and explicit retention/privacy/encryption decision for any note payload; preserve book-lifetime server journal and rejection receipts. No unreviewed in-progress committed row or TTL.

Acceptance: Lost ACK after commit, unknown-not-found, same key/different hash, restart/restore, multi-instance concurrency, stale reads/receipts, account switch and cancellation do not duplicate or leak operations.

### TRANSPORT — OWNER_DECISION_PENDING

PROPOSAL: Preserve current Next BFF verified-token forwarding and Nest verification, no-store responses and identity isolation; workspace service remains unregistered.

Decision required: Future production controller/routes require separately scoped owner authorization after principal/session/gateway/reconciliation decisions. Define bounded body parsing, validation/errors/unknown acknowledgements, request-scoped provider and adapter lifetime. Do not register a route in this task.

Acceptance: Cross-book routes, forged ownership, pre/post identity switch, upstream partial body/timeouts, no-store caching, rate/body limits, keyboard/focus existing UI behavior and manuscript/revision invariance.

## Provider evidence and remaining unknowns

FACT: Public documentation was consulted without accessing the target. [Supabase sessions](https://supabase.com/docs/guides/auth/sessions) describes the signed session_id relationship and delayed expiry cleanup. [Signing out](https://supabase.com/docs/guides/auth/signout) states that revoked-session access tokens retain validity until expiry. [getClaims](https://supabase.com/docs/reference/javascript/auth-getclaims) verifies JWT claims and may use cached JWKS; this is not an active-session lock. The [Auth changelog](https://supabase.com/changelog?tags=auth) and [Auth server changelog](https://github.com/supabase/auth/blob/master/CHANGELOG.md) were reviewed on2026-10-25. Their current content does not establish the target's deployed version, signing mode, schema or role privileges. No SDK/server upgrade is proposed.

INTERPRETATION: Reusing existing Auth and binding the same verified token to an immutable principal is the smallest adapter direction. A trusted server SQL login can set principal context, so compromise of that capability is outside the SQL forged-context protection; it must never reach the browser or public RPC. Use transaction-local settings and rollback/commit cleanup, qualified functions and isolated pooling. Existing process-local pending maps cannot establish durable distributed reconciliation. Injecting synthetic principals proves none of the real provider boundary.

PROPOSAL: Review the managed-schema lock/grant choice before packaging; the local NOLOGIN lock role's UPDATE(id) is an experiment, not deployment approval. A row's existence alone is insufficient for time-box/inactivity enforcement; inspect actual semantics and define fail-closed expiry after lock. The fixture's one-second-old synthetic timestamp is test clock accommodation, not a production clock-skew policy. Reads, receipts and acknowledgements need the same reviewed authorization boundary, including after asynchronous responses.

## Smallest next local implementation dispatch

PROPOSAL ONLY: Authorize a new bounded task for a request-isolated principal-binding adapter and synthetic tests using injected, already-verified Auth responses under the frozen SDK. Proposed exact two files are in the JSON packet. Before code, the owner selects the verified-claims binding API and approves those paths; allocate a unique Task/immutable pack. No network, Auth replacement, runtime route registration, SQL or credentials. Test token/subject/session disagreement, expiry/freshness, malformed proof, provider errors and parallel request isolation. This can proceed independently of inventory, but cannot unlock writable sessions or production persistence.

Subsequent SQL packaging requires exact owner-reviewed paths in reviewed base and its own implementation authorization; hosted acceptance additionally requires target/channel/fixture/security authorization. Never copy local auth fixtures or global postgres default-privilege changes into Supabase migrations. Durable outbox, transport and managed-session choices are not silently approved by this packet.

## Review and readiness

Local source preparation: reviewable. Real hosted persistence: NO-GO pending actual catalog inventory, approved session/gateway/privilege choices, executable packaging/negative tests and target-specific acceptance. Private pilot and production: NO-GO. Broad G_DESIGN/G_CODE gates remain unchanged beyond prior exact slices.

Owner review checklist: confirm principal binding API; session expiry/revocation and lock strategy; capability provisioning/role/RLS exposure; migration exclusion/path record; durable reconciliation/privacy policy; transport scope and acceptance environments. No successor automatic merge. Task0053 and0054 share a verified base: merging either first requires rechecking and governed reconciliation of the other, preserving both immutable packs and history. This is a decision packet, not consent to deploy or a passing hosted test.
~~~~~~

## Execution reporting
Return an ExecutionBundle with FACT / INTERPRETATION / PROPOSAL sections,
tests actually performed, changes, evidence gaps, and pending owner approval.
