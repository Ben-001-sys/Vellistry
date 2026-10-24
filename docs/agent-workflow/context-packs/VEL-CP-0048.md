---
id: VEL-CP-0048
title: 'Context for VEL-TASK-0048: Execute workspace contract tests in the existing
  application CI job'
type: context-pack
status: prepared
created_at: '2026-10-24'
version: 0.1.0
task_id: VEL-TASK-0048
base_commit: bc67164fbe7aaa758ef26aedb4ab36e855f9126c
task_blob_sha: 48421adbf64d58b2ea6d5934401fcfe2e9f6e16b
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
- path: docs/agent-workflow/inputs/VEL-TASK-0048/OWNER-SCOPE.md
  role: governing-source
  git_blob_sha: 09457fb26838e54b799be2aacd47909f7ad32138
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0048/BOUNDARY.md
  role: governing-source
  git_blob_sha: 04857b335d35c4f21494a433641cfe471dd4e682
  source_status: unrecorded
- path: .github/workflows/ci.yml
  role: governing-source
  git_blob_sha: 3adc3cd406f7575885f5f436a47b9feec6ec2d06
  source_status: unrecorded
- path: tests/test_ci_policy.py
  role: governing-source
  git_blob_sha: 7c81c94ca087c2c37a4dd0cfb1bfdbda5bef10d3
  source_status: unrecorded
- path: package.json
  role: governing-source
  git_blob_sha: 198ed5ba86f87396405d9bd0a7de9f20fb22c15d
  source_status: unrecorded
source_gaps:
- id: HOSTED
  limitation: Hosted metadata/schema/session and SQL acceptance remain separately
    gated.
prepared_by: agent_workflow.py
---

# VEL-CP-0048 — Execute workspace contract tests in the existing application CI job

## Objective
Execute workspace contract tests in the existing application CI job; preserve ordinary owner approval boundaries.

## Scope
**In:** .github/workflows/ci.yml; tests/test_ci_policy.py; CURRENT-STATE.md; docs/reports/VEL-WORKSPACE-CI-0048.md; docs/agent-workflow/tasks/VEL-TASK-0048.yaml; docs/agent-workflow/context-packs/VEL-CP-0048.md; docs/agent-workflow/execution-bundles/VEL-EB-0048.md; docs/agent-workflow/inputs/VEL-TASK-0048/*; docs/agent-workflow/PR-COMPLIANCE.yaml; docs/reports/evidence/VEL-TASK-0048/*
**Out:** Hosted/credentials/private/paid/deployment/settings/merge and unrelated product work; Application/SQL/Auth/dependency changes; CI changes excluded from0049

## Evidence and authority constraints
The text below is a readable rendering of pinned Git blobs; exact raw bytes remain recoverable from the recorded commit/blob SHAs. Recorded source statuses remain in force: draft research is not accepted requirements. Original unarchived uploads are not independently verified merely by being mentioned.

**Known source gaps:**
- HOSTED: Hosted metadata/schema/session and SQL acceptance remain separately gated.

## Permissions and acceptance
**Allowed:** Read pinned sources and implement only authorized paths in isolated worktree, Run existing synthetic tests, governance/metadata validators and actual GitHub draft/ready CI, Use a fresh trusted read-only Codex CLI source review and submit/promote PR for owner decision
**Owner approval required:** Any scope expansion, hosted/security-sensitive operation and successor PR merge
**Acceptance criteria:**
- Exactly one unconditional pnpm test:workspace-contract step after frozen install and before build in existing applicable application job
- Positive and negative regressions reject removal/replacement/duplicate/skip/masking/shell/environment/directory overrides
- Preserve single automatic workflow, all existing manual workflows, draft routing, read-only permissions and security/recovery/final gates
- Actual focused tests and draft/ready exact-head CI; owner separately decides merge

## Deliverables
- Committed Task and validated immutable ContextPack before implementation
- .github/workflows/ci.yml
- tests/test_ci_policy.py
- CURRENT-STATE.md
- docs/reports/VEL-WORKSPACE-CI-0048.md
- Actual applicable tests/EB/provenance, distinct exact-head review and submitted PR; no merge

## Pinned source snapshots
Git commit: `bc67164fbe7aaa758ef26aedb4ab36e855f9126c`. Read source statuses independently from task intent.

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

### `docs/agent-workflow/inputs/VEL-TASK-0048/OWNER-SCOPE.md` @ `09457fb26838e54b799be2aacd47909f7ad32138`

~~~~~~markdown
# Direct owner authorization relay — 2026-10-24

https://github.com/Ben-001-sys/Vellistry/issues/108#issuecomment-6386727275

Owner directly approved exact-head PR111 merge and separately authorized two bounded successors in this conversation. This is Codex's relay, not a fabricated human GitHub approval. Ordinary owner merge rules apply; expired remediation delegation stays EXPIRED.

Verified merged main a9e7c48bc7198f6f23f7be5bb77ad54f1f27e2e4, exact tree da9bf02eefadeeeae0156685d92ff2523824c291 equals reviewed ccbf8bb. Post-main40111872132 SUCCESS. Historical41workspace/33browser cases are local, not earlier CI coverage; independent runtime EPERM is not PASS. Task47/CP47/EB47 remain preserved.

Decision2 authorizes adding the existing pnpm test:workspace-contract command to applicable application CI, with regression tests, unique Task and committed immutable CP before edits. Preserve all security/governance/recovery checks and draft behavior; no dependencies or new workflows. Submit for separate owner merge.

No hosted access, credentials, private manuscripts, paid APIs, deployment, settings, broad gate promotion or automatic successor merge. Keep Issue108 open.
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0048/BOUNDARY.md` @ `04857b335d35c4f21494a433641cfe471dd4e682`

~~~~~~markdown
# Bounded contract

Only insert a named exact workspace test step in the existing application job, no conditional/masking execution fields. Add tests to the existing CI-policy suite exercising the live positive workflow and synthetic negative mutations. No validator weakening or workflow inventory expansion. CURRENT-STATE only reconciles PR111 integration and current scoped CI work; remain below11000UTF8 bytes. Preserve other historical content. Source review and real ready CI required; no dependency or application changes.
~~~~~~

### `.github/workflows/ci.yml` @ `3adc3cd406f7575885f5f436a47b9feec6ec2d06`

~~~~~~markdown
# Primary automatic CI. Draft advisory is not a merge-eligible PASS.
name: Vellistry CI
'on':
  pull_request:
    types:
    - opened
    - synchronize
    - reopened
    - ready_for_review
    - edited
    - converted_to_draft
  push:
    branches:
    - main
  workflow_dispatch: {}
permissions:
  contents: read
concurrency:
  group: ${{ github.workflow }}-${{ github.event_name == 'pull_request' && github.event.pull_request.number || github.run_id }}
  cancel-in-progress: ${{ github.event_name == 'pull_request' }}
jobs:
  classify:
    name: Classify exact-head changes
    runs-on: ubuntu-latest
    timeout-minutes: 5
    outputs:
      application: ${{ steps.plan.outputs.application }}
      security: ${{ steps.plan.outputs.security }}
      recovery: ${{ steps.plan.outputs.recovery }}
      privileges: ${{ steps.plan.outputs.privileges }}
      mode: ${{ steps.plan.outputs.mode }}
    steps:
    - uses: actions/checkout@v4
      with:
        ref: ${{ github.event.pull_request.head.sha || github.sha }}
        persist-credentials: false
        fetch-depth: 0
    - name: Conservative change plan
      id: plan
      run: python scripts/ci_policy.py classify
  governance:
    outputs:
      compliance: ${{ steps.compliance.outputs.status }}
    name: ${{ needs.classify.outputs.mode == 'draft' && 'Draft advisory governance' || 'Governance and provenance' }}
    needs:
    - classify
    runs-on: ubuntu-latest
    timeout-minutes: 12
    steps:
    - uses: actions/checkout@v4
      with:
        ref: ${{ github.event.pull_request.head.sha || github.sha }}
        persist-credentials: false
        fetch-depth: 0
    - uses: actions/setup-python@v5
      with:
        python-version: '3.12'
    - name: Install YAML parser only
      run: python -m pip install 'PyYAML>=6,<7'
    - name: Lint all workflows with verified actionlint 1.7.12
      run: |
        curl --fail --silent --show-error --location --retry 3 \
          --output "$RUNNER_TEMP/actionlint.tar.gz" \
          https://github.com/rhysd/actionlint/releases/download/v1.7.12/actionlint_1.7.12_linux_amd64.tar.gz
        echo "8aca8db96f1b94770f1b0d72b6dddcb1ebb8123cb3712530b08cc387b349a3d8  $RUNNER_TEMP/actionlint.tar.gz" | sha256sum --check
        tar -xzf "$RUNNER_TEMP/actionlint.tar.gz" -C "$RUNNER_TEMP" actionlint
        "$RUNNER_TEMP/actionlint" -shellcheck=
    - name: Base-anchored PR compliance evidence
      id: compliance
      run: python -I scripts/run_pr_compliance.py
    - name: Run all current governance and negative contracts once
      run: python scripts/ci_governance.py
    - uses: actions/upload-artifact@v4
      with:
        name: vellistry-governed-handoff-packets
        path: |
          docs/agent-workflow/context-packs/VEL-CP-0002.md
          docs/agent-workflow/context-packs/VEL-CP-0003.md
          stage4-independent-agent-packet.zip
          level-b-test-packet.zip
        if-no-files-found: error
        retention-days: 14
  application:
    needs:
    - classify
    if: ${{ needs.classify.outputs.application == 'true' }}
    name: Application and applicable security
    runs-on: ubuntu-latest
    timeout-minutes: 40
    steps:
    - uses: actions/checkout@v4
      with:
        ref: ${{ github.event.pull_request.head.sha || github.sha }}
        persist-credentials: false
    - uses: pnpm/action-setup@v4
    - uses: actions/setup-node@v4
      with:
        node-version: '24'
        cache: pnpm
        cache-dependency-path: pnpm-lock.yaml
    - name: Install one frozen workspace
      run: pnpm install --frozen-lockfile
    - name: Library isolation and unknown-save negative tests
      run: pnpm test:library-isolation
    - name: Hosted preflight regressions when source is integrated
      run: 'if test -f tests/hosted_supabase_preflight.test.mjs; then node --test tests/hosted_supabase_preflight.test.mjs; else echo ''NOTICE:
        PR68 hosted preflight is not on this checkout; not tested''; fi'
    - name: Build both applications once
      env:
        NEXT_TELEMETRY_DISABLED: '1'
      run: pnpm build
    - name: Typecheck both applications once
      run: pnpm check
    - name: Pick free, temporary CI-only Supabase API/DB ports
      run: |
        python3 - <<'PY'
        import socket
        from pathlib import Path
        ports = []
        for _ in range(2):
            with socket.socket() as sock:
                sock.bind(("127.0.0.1", 0))
                ports.append(sock.getsockname()[1])
        cfg = Path("supabase/config.toml")
        raw = cfg.read_text(encoding="utf-8")
        for old, new in zip((54321, 54322), ports):
            marker = f"port = {old}"
            if marker not in raw:
                raise SystemExit(f"Local Supabase CI port marker missing: {marker}")
            raw = raw.replace(marker, f"port = {new}", 1)
        cfg.write_text(raw, encoding="utf-8")
        print(f"Disposable local Supabase API/DB CI ports selected: {ports}")
        PY
      if: ${{ needs.classify.outputs.security == 'true' }}
    - name: Start real disposable local Supabase services
      run: |
        # Retain database, Auth, PostgREST, API gateway. Exclude unrelated services.
        # Do not use a linked cloud project or production credentials.
        pnpm exec supabase start --exclude realtime,storage-api,imgproxy,mailpit,studio,edge-runtime,logflare,vector,supavisor,postgres-meta
      if: ${{ needs.classify.outputs.security == 'true' }}
    - name: Validate actual sign-up, RLS, tokens, cross-author data and logout behavior
      shell: bash
      run: |
        set -euo pipefail
        # CLI output is trusted and local; NEVER print its secret values.
        set -a
        source <(pnpm exec supabase status -o env)
        set +a
        export SUPABASE_URL="${API_URL}"
        export SUPABASE_PUBLISHABLE_KEY="${PUBLISHABLE_KEY:-${ANON_KEY:-}}"
        export SUPABASE_TEST_SERVICE_KEY="${SERVICE_ROLE_KEY:-${SECRET_KEY:-}}"
        export API_PORT=4100
        export API_HOST=127.0.0.1
        export VELLISTRY_TEST_API_URL=http://127.0.0.1:4100
        test -n "${SUPABASE_URL}"
        test -n "${SUPABASE_PUBLISHABLE_KEY}"
        test -n "${SUPABASE_TEST_SERVICE_KEY}"
        node apps/api/dist/main.js >nest-k2.log 2>&1 &
        SERVER_PID=$!
        cleanup() {
          kill "$SERVER_PID" 2>/dev/null || true
          # Restrict diagnostic output to application startup/error lines.
          tail -30 nest-k2.log || true
        }
        trap cleanup EXIT
        ready=0
        for i in $(seq 1 60); do
          if curl --fail --silent -o /dev/null http://127.0.0.1:4100/v1/health; then ready=1; break; fi
          sleep 1
        done
        if [ "$ready" != "1" ]; then echo "Nest API unavailable"; exit 1; fi
        node apps/api/tests/supabase-auth-rls.integration.mjs
        node apps/api/tests/k2b-session-exposure.integration.mjs
        # Observe auth.sessions row removal under local/global logout, separately from JWT validity.
        node apps/api/tests/k2b-active-session-row.integration.mjs
        # This final experiment REVOKES grants and intentionally breaks Nest's
        # existing PostgREST book transport; run it last in disposable CI.
        node apps/api/tests/k2b-data-api-lockdown.integration.mjs
        # Research-only restricted Nest / Postgres route proof uses a separate role.
        # Run AFTER old route is deliberately broken by grant-lockdown diagnostic.
        test -n "${DB_URL:-}"
        node apps/api/tests/k2b-private-nest-gateway.integration.mjs
      if: ${{ needs.classify.outputs.security == 'true' }}
    - name: Attach synthetic-only results (no token or password)
      if: ${{ always() && needs.classify.outputs.security == 'true' }}
      uses: actions/upload-artifact@v4
      with:
        name: k2-supabase-auth-rls-results
        path: |
          k2-auth-rls-results.json
          k2b-session-observations.json
          k2b-live-session-row-observations.json
          k2b-lockdown-observations.json
          k2b-private-gateway-observations.json
        if-no-files-found: ignore
        retention-days: '7'
    - name: Shut down disposable local Supabase
      if: ${{ always() && needs.classify.outputs.security == 'true' }}
      run: pnpm exec supabase stop --no-backup || true
  recovery:
    name: Merged PostgreSQL CAS and restore contract
    runs-on: ubuntu-latest
    timeout-minutes: 16
    services:
      postgres:
        image: postgres:16
        env:
          POSTGRES_USER: postgres
          POSTGRES_PASSWORD: pair06synthetic
          POSTGRES_DB: pair06db
        ports:
        - 5432:5432
        options: --health-cmd "pg_isready -U postgres -d pair06db" --health-interval 5s --health-timeout 3s --health-retries 10
    env:
      PGPASSWORD: pair06synthetic
      PAIR06_DATABASE_URL: postgresql://postgres:pair06synthetic@127.0.0.1:5432/pair06db
    steps:
    - uses: actions/checkout@v4
      with:
        ref: ${{ github.event.pull_request.head.sha || github.sha }}
        persist-credentials: false
    - uses: actions/setup-python@v5
      with:
        python-version: '3.12'
    - name: Install PostgreSQL client binaries
      run: |
        sudo apt-get update -qq
        sudo apt-get install -y postgresql-client
    - name: Rerun disposable Pair 06 atomicity and independent restore
      run: python -m unittest discover -s docs/research/experiments -p 'test_pair06_postgres_operations.py' -v
    needs:
    - classify
    if: ${{ needs.classify.outputs.recovery == 'true' }}
  privileges:
    name: Integrated SQL privilege regression
    needs:
    - classify
    if: ${{ needs.classify.outputs.privileges == 'true' }}
    runs-on: ubuntu-latest
    timeout-minutes: 10
    container: postgres:17
    services:
      postgres:
        image: postgres:17
        env:
          POSTGRES_HOST_AUTH_METHOD: trust
        options: --health-cmd pg_isready --health-interval 5s --health-timeout 5s --health-retries 10
    env:
      PGHOST: postgres
      PGUSER: postgres
      PGDATABASE: postgres
    steps:
    - uses: actions/checkout@v4
      with:
        ref: ${{ github.event.pull_request.head.sha || github.sha }}
        persist-credentials: false
    - name: Original migrations must demonstrate the grant regression
      run: |
        if psql -X -v ON_ERROR_STOP=1 -v skip_hardening=true -f tests/book_privileges_regression.sql > before.log 2>&1; then
          cat before.log
          exit 1
        fi
        cat before.log
        grep -q 'Privilege mismatch: role=anon table=books privilege=TRUNCATE expected=f' before.log
    - name: Integrated correction must pass the privilege matrix
      run: psql -X -v ON_ERROR_STOP=1 -f tests/book_privileges_regression.sql
  gate:
    name: Vellistry CI gate
    needs:
    - classify
    - governance
    - application
    - recovery
    - privileges
    if: ${{ always() }}
    runs-on: ubuntu-latest
    timeout-minutes: 5
    steps:
    - uses: actions/checkout@v4
      with:
        ref: ${{ github.event.pull_request.head.sha || github.sha }}
        persist-credentials: false
        fetch-depth: 0
    - uses: actions/setup-python@v5
      with:
        python-version: '3.12'
    - name: Install YAML parser for static compliance
      run: python -m pip install 'PyYAML>=6,<7'
    - name: Recompute base-anchored PR compliance evidence
      id: compliance
      run: python -I scripts/run_pr_compliance.py
    - name: Reject failed, cancelled, missing or skipped applicable checks
      env:
        CI_NEEDS: ${{ toJSON(needs) }}
      run: python scripts/ci_policy.py gate
~~~~~~

### `tests/test_ci_policy.py` @ `7c81c94ca087c2c37a4dd0cfb1bfdbda5bef10d3`

~~~~~~markdown
import copy
import importlib.util
import json
import os
from pathlib import Path
import subprocess
import tempfile
import unittest
from unittest.mock import patch
import yaml

ROOT=Path(__file__).resolve().parents[1]
spec=importlib.util.spec_from_file_location('ci_policy',ROOT/'scripts/ci_policy.py')
policy=importlib.util.module_from_spec(spec); spec.loader.exec_module(policy)


# Owner-authorized Task0015: one exact supplemental manual workflow only.
PG17_MANUAL_NAME = 'vel-sec-001-pg17-manual.yml'
PG17_MANUAL_CONTRACT = yaml.load("""
name: VEL-SEC-001 disposable PG17 evidence (manual)
on:
  workflow_dispatch:
permissions:
  contents: read
jobs:
  pg17:
    runs-on: ubuntu-latest
    timeout-minutes: 15
    services:
      postgres:
        image: postgres:17
        env:
          POSTGRES_HOST_AUTH_METHOD: trust
        options: --health-cmd pg_isready --health-interval 5s --health-timeout 5s --health-retries 12
    steps:
      - name: Checkout exact reviewed revision
        uses: actions/checkout@11d5960a326750d5838078e36cf38b85af677262
        with:
          ref: ${{ github.sha }}
          persist-credentials: false
          fetch-depth: 1
      - name: Run pinned synthetic PG17 evidence
        run: python3 scripts/pg17_book_privilege_evidence.py
        env:
          PG17_SERVICE_ID: ${{ job.services.postgres.id }}
      - name: Independently verify disposable database cleanup
        if: ${{ always() }}
        run: python3 scripts/pg17_book_privilege_evidence.py --cleanup
        env:
          PG17_SERVICE_ID: ${{ job.services.postgres.id }}
      - name: Upload synthetic evidence only
        if: ${{ always() }}
        uses: actions/upload-artifact@ea165f8d65b6e75b540449e92b4886f43607fa02
        with:
          name: vel-sec-001-pg17-evidence
          path: ${{ runner.temp }}/vel-sec-001-pg17-evidence
          if-no-files-found: error
          retention-days: 14
""", Loader=yaml.BaseLoader)

def check_pg17_manual_contract(workflow):
    if workflow != PG17_MANUAL_CONTRACT:
        raise ValueError('PG17 manual workflow security/execution contract changed')

class RoutingTests(unittest.TestCase):
    def test_docs_and_governance_are_lightweight(self):
        for path in ('README.md','CURRENT-STATE.md','docs/reports/evidence/result.json','docs/reports/evidence/timings.csv','docs/decisions/ADR-0008-any.md','docs/agent-workflow/tasks/VEL-TASK-0006.yaml','docs/agent-workflow/context-packs/VEL-CP-0006.md','docs/agent-workflow/execution-bundles/VEL-EB-0006.md','scripts/agent_workflow.py','tests/test_handoff_recovery.py'):
            with self.subTest(path=path): self.assertEqual(set(policy.classify([path]).values()),{'false'})
    def test_frontend_build_without_unrelated_containers(self):
        self.assertEqual(policy.classify(['apps/web/src/app/globals.css']),dict(application='true',security='false',recovery='false',privileges='false'))
    def test_security_paths_cannot_evade_integration(self):
        for path in ('apps/api/src/modules/books/books.service.ts','apps/web/src/app/books/page.tsx','apps/web/src/lib/shared-utils.ts','apps/web/src/lib/library/book-library-state.ts','apps/web/src/lib/library/book-library-session.ts','apps/web/src/lib/supabase/browser.ts','apps/web/src/app/api/books/route.ts','supabase/migrations/new.sql','supabase/config.toml','pnpm-lock.yaml','pnpm-workspace.yaml','package.json','.github/workflows/ci.yml','scripts/ci_policy.py','tests/test_ci_policy.py','tests/book_privileges_regression.sql','tests/hosted_supabase_preflight.test.mjs','.env.example','docs/decisions/ADR-0006-any.md'):
            with self.subTest(path=path):
                plan=policy.classify([path],privilege_present=True)
                self.assertEqual(set(plan.values()),{'true'})
    def test_unknown_executable_and_config_are_conservative(self):
        for path in ('new/security.sh','new-config.json','scripts/new_validator.py','docs/research/probe.py','tests/new_case.py'):
            with self.subTest(path=path): self.assertEqual(policy.classify([path])['security'],'true')
    def test_full_manual_and_main_baseline(self):
        self.assertEqual(set(policy.classify([],full=True,privilege_present=True).values()),{'true'})
    def test_proposed_privilege_test_is_not_falsely_claimed(self):
        self.assertEqual(policy.classify(['supabase/schema.sql'])['privileges'],'false')
        self.assertEqual(policy.classify(['supabase/schema.sql'],privilege_present=True)['privileges'],'true')
    def test_unsafe_paths_fail(self):
        for path in ('','/absolute','docs/../escape'):
            with self.subTest(path=path),self.assertRaises(ValueError): policy.classify([path])
    def test_git_rename_delete_and_hostile_filename_are_data(self):
        with tempfile.TemporaryDirectory() as directory:
            root=Path(directory)
            def git(*args): return subprocess.check_output(['git',*args],cwd=root,stderr=subprocess.DEVNULL).decode().strip()
            git('init'); git('config','user.email','synthetic@example.invalid'); git('config','user.name','Synthetic test')
            old=root/'apps/api/auth.ts'; old.parent.mkdir(parents=True); old.write_text('before')
            (root/'tests').mkdir(); (root/policy.PRIVILEGE_TEST).write_text('synthetic')
            git('add','.'); git('commit','-m','before'); base=git('rev-parse','HEAD')
            old.rename(root/'docs.md'); (root/policy.PRIVILEGE_TEST).unlink()
            hostile='docs/$(never-run).md'; (root/'docs').mkdir(); (root/hostile).write_text('prose')
            git('add','-A'); git('commit','-m','after'); head=git('rev-parse','HEAD')
            paths=policy.changed_paths(base,head,pr=True,cwd=root)
            self.assertIn('apps/api/auth.ts',paths); self.assertIn(hostile,paths)
            self.assertEqual(policy.classify(paths)['security'],'true')
            event={'action':'synchronize','pull_request':{'draft':False,'head':{'sha':head},'base':{'sha':base}}}
            with self.assertRaisesRegex(ValueError,'removed'): policy.plan_event('pull_request',event,head,cwd=root)
            git('update-ref','refs/remotes/origin/main',base)
            with patch.dict(os.environ,{'GITHUB_SHA':head}):
                with self.assertRaisesRegex(ValueError,'removed'):
                    policy.plan_event('workflow_dispatch',{},head,cwd=root)
    def test_exact_head_and_missing_pr_base_fail(self):
        with self.assertRaisesRegex(ValueError,'exact event'): policy.plan_event('pull_request',{'action':'opened','pull_request':{'draft':False,'head':{'sha':'a'*40}}},'b'*40)
        with self.assertRaisesRegex(ValueError,'base missing'): policy.plan_event('pull_request',{'action':'opened','pull_request':{'draft':False,'head':{'sha':'a'*40}}},'a'*40)
    def test_main_manual_and_ready_event(self):
        head='a'*40
        with patch.dict(os.environ,{'GITHUB_SHA':head}):
            for name,event in (('push',{'ref':'refs/heads/main','before':'0'*40}),('workflow_dispatch',{})):
                with self.subTest(event=name): self.assertEqual(policy.plan_event(name,event,head)['security'],'true')
            with self.assertRaises(ValueError): policy.plan_event('push',{'ref':'refs/heads/feature'},head)
        with patch.object(policy,'changed_paths',return_value=['README.md']):
            event={'action':'ready_for_review','pull_request':{'draft':False,'head':{'sha':head},'base':{'sha':'b'*40}}}
            self.assertEqual(policy.plan_event('pull_request',event,head)['application'],'false')
    def test_bad_git_shas_and_events_fail(self):
        with self.assertRaises(ValueError): policy.changed_paths('main; echo bad','a'*40,pr=True)
        with self.assertRaises(ValueError): policy.plan_event('pull_request_target',{},'a'*40)

class FinalGateTests(unittest.TestCase):
    def plan(self, full=True):
        return {**policy.classify([],full=full,privilege_present=full),'mode':'full' if full else 'ready'}
    def check(self, needs, full=True):
        return policy.check_gate(needs,expected_plan=self.plan(full))
    def needs(self, full=True):
        plan=self.plan(full)
        return {'classify':{'result':'success','outputs':plan},'governance':{'result':'success','outputs':{'compliance':'pass'}},**{j:{'result':'success' if full else 'skipped'} for j in ('application','recovery','privileges')}}
    def test_green_security_cannot_hide_missing_compliance(self):
        for value in ({}, {'compliance':'NOT_RUN'}, {'compliance':'BLOCKED'}, {'compliance':'failure'}):
            needs=self.needs(); needs['governance']['outputs']=value
            with self.subTest(outputs=value), self.assertRaises(ValueError): self.check(needs)
    def test_success_and_nonapplicable_skips_pass(self):
        self.check(self.needs()); self.check(self.needs(False),False)
    def test_every_required_failure_skip_cancel_or_missing_fails(self):
        for job in self.needs():
            for result in ('failure','cancelled','skipped',None,'timed_out'):
                n=self.needs(); n[job]['result']=result
                with self.subTest(job=job,result=result),self.assertRaises(ValueError): self.check(n)
    def test_missing_or_invalid_outputs_and_jobs_fail(self):
        for flag in policy.FLAGS:
            n=self.needs(); del n['classify']['outputs'][flag]
            with self.subTest(flag=flag),self.assertRaises(ValueError): self.check(n)
        for flag in policy.FLAGS:
            n=self.needs(); n['classify']['outputs'][flag]='TRUE'
            with self.assertRaises(ValueError): self.check(n)
        n=self.needs(); del n['recovery']
        with self.assertRaises(ValueError): self.check(n)
    def test_inconsistent_security_cannot_pass(self):
        n=self.needs(); n['classify']['outputs']['application']='false'
        with self.assertRaises(ValueError): self.check(n)
    def test_security_recovery_cannot_be_skipped(self):
        n=self.needs(); n['classify']['outputs']['recovery']='false'
        with self.assertRaises(ValueError): self.check(n)

    def test_failure_of_nonapplicable_job_is_not_hidden(self):
        n=self.needs(False); n['application']['result']='failure'
        with self.assertRaises(ValueError): self.check(n,False)

class WorkflowContractTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.baseline=json.loads((ROOT/'docs/reports/evidence/VEL-CI-OPT-001/workflow-baseline.json').read_text(encoding='utf-8'))
        cls.workflow=yaml.load((ROOT/'.github/workflows/ci.yml').read_text(encoding='utf-8'),Loader=yaml.BaseLoader)

    def test_governance_generates_required_pack_before_exporter_tests(self):
        spec=importlib.util.spec_from_file_location('ci_governance',ROOT/'scripts/ci_governance.py')
        governance=importlib.util.module_from_spec(spec); spec.loader.exec_module(governance)
        # Direct import follows the same module search path as script execution.
        import sys
        with patch.dict(sys.modules,{'ci_policy':policy}): governance.validate_required_sources()
        governance.validate_required_sources=lambda:None
        observed=[]
        def fail_after_discovery(*args):
            observed.append('discovery')
            raise RuntimeError('stop after first test command')
        with patch.object(governance,'prepare_packets',side_effect=lambda:observed.append('pack')):
            with patch.object(governance,'python',side_effect=fail_after_discovery):
                with self.assertRaises(RuntimeError): governance.main()
        self.assertEqual(observed,['pack','discovery'])

    def test_only_one_automatic_workflow_and_original_jobs_intact(self):
        workflows = [p for p in (ROOT/'.github/workflows').iterdir() if p.suffix.lower() in {'.yml','.yaml'}]
        for path in workflows:
            d=yaml.load(path.read_text(encoding='utf-8'),Loader=yaml.BaseLoader)
            if path.name=='ci.yml': continue
            self.assertEqual(set(d['on']),{'workflow_dispatch'},path.name)
            if path.name == PG17_MANUAL_NAME:
                check_pg17_manual_contract(d)
            else:
                self.assertEqual(d['jobs'],self.baseline[path.name]['workflow']['jobs'],path.name)
        self.assertEqual({p.name for p in workflows},set(self.baseline)|{'ci.yml',PG17_MANUAL_NAME})
        self.assertEqual(len(self.baseline),25)
    def test_unfiltered_events_and_pr_only_cancellation(self):
        w=self.workflow
        self.assertEqual(set(w['on']),{'pull_request','push','workflow_dispatch'})
        self.assertIn('ready_for_review',w['on']['pull_request']['types'])
        self.assertNotIn('paths',w['on']['pull_request'])
        self.assertEqual(w['on']['push'],{'branches':['main']})
        self.assertEqual(w['concurrency']['cancel-in-progress'],"${{ github.event_name == 'pull_request' }}")
        self.assertIn('github.run_id',w['concurrency']['group'])
        self.assertEqual(w['permissions'],{'contents':'read'})
    def test_exact_head_no_persisted_credentials_in_all_jobs(self):
        for name,job in self.workflow['jobs'].items():
            checkout=next(s for s in job['steps'] if s.get('uses','').startswith('actions/checkout@'))
            self.assertEqual(checkout['with']['ref'],'${{ github.event.pull_request.head.sha || github.sha }}',name)
            self.assertEqual(checkout['with']['persist-credentials'],'false')
    def test_final_gate_always_includes_every_applicable_result(self):
        gate=self.workflow['jobs']['gate']
        self.assertEqual(gate['name'],'Vellistry CI gate')
        self.assertEqual(gate['if'],'${{ always() }}')
        self.assertEqual(set(gate['needs']),{'classify','governance','application','recovery','privileges'})
        self.assertIn('python scripts/ci_policy.py gate',[s.get('run') for s in gate['steps']])
    def test_k2_checks_are_preserved_and_cannot_skip_when_applicable(self):
        old=self.baseline['k2-supabase-auth-rls.yml']['workflow']['jobs']['real-supabase-security']['steps']
        app=self.workflow['jobs']['application']
        for previous in old:
            if previous.get('name','').startswith(('Pick free','Start real','Validate actual','Attach synthetic','Shut down')):
                step=next(s for s in app['steps'] if s.get('name')==previous['name'])
                for field in ('run','uses','with','shell'):
                    if field in previous: self.assertEqual(step[field],previous[field])
                self.assertIn("needs.classify.outputs.security == 'true'",step['if'])
        self.assertEqual(app['if'],"${{ needs.classify.outputs.application == 'true' }}")
        installs=[s for s in app['steps'] if 'pnpm install' in s.get('run','')]
        self.assertEqual(len(installs),1)
        self.assertEqual(installs[0]['run'],'pnpm install --frozen-lockfile')
        self.assertEqual(sum('pnpm build' == s.get('run') for s in app['steps']),1)
    def test_draft_mode_and_verified_linter_are_wired_without_renaming_merge_gate(self):
        w=self.workflow
        self.assertIn('converted_to_draft',w['on']['pull_request']['types'])
        self.assertEqual(w['jobs']['classify']['outputs']['mode'],'${{ steps.plan.outputs.mode }}')
        self.assertIn('Draft advisory',w['jobs']['governance']['name'])
        self.assertEqual(w['jobs']['gate']['steps'][0]['with']['fetch-depth'],'0')
        lint=next(s['run'] for s in w['jobs']['governance']['steps'] if s.get('name','').startswith('Lint all workflows'))
        self.assertIn('actionlint_1.7.12_linux_amd64.tar.gz',lint)
        self.assertIn('8aca8db96f1b94770f1b0d72b6dddcb1ebb8123cb3712530b08cc387b349a3d8',lint)
        self.assertIn('sha256sum --check',lint)
        self.assertIn('"$RUNNER_TEMP/actionlint" -shellcheck=',lint)

    def test_sql_regression_when_available_is_fail_fast(self):
        p=self.workflow['jobs']['privileges']
        self.assertEqual(p['if'],"${{ needs.classify.outputs.privileges == 'true' }}")
        self.assertIn('postgres:17',p['container'])
        self.assertTrue(any('psql -X -v ON_ERROR_STOP=1' in s.get('run','') for s in p['steps']))


class DraftPolicyTests(unittest.TestCase):
    def event(self, draft=True, action='synchronize'):
        return {'action':action,'pull_request':{'draft':draft,'head':{'sha':'a'*40},'base':{'sha':'b'*40}}}
    def plan(self, draft=True, action='synchronize', paths=None):
        with patch.object(policy,'changed_paths',return_value=paths or ['apps/api/auth.ts']):
            return policy.plan_event('pull_request',self.event(draft,action),'a'*40)
    def needs(self, plan):
        return {'classify':{'result':'success','outputs':dict(plan)},'governance':{'result':'success','outputs':{'compliance':'pass'}},**{j:{'result':'success' if plan[j]=='true' else 'skipped'} for j in ('application','recovery','privileges')}}
    def test_draft_unknown_security_and_ci_paths_are_advisory_only(self):
        for path in ('apps/api/auth.ts','supabase/migrations/new.sql','.github/workflows/ci.yml','new/unknown.py'):
            with self.subTest(path=path):
                plan=self.plan(paths=[path])
                self.assertEqual(plan.get('mode'),'draft')
                self.assertEqual({plan[f] for f in policy.FLAGS},{'false'})
    def test_all_ordinary_draft_activities_are_cheap(self):
        for action in ('opened','synchronize','reopened','edited','converted_to_draft'):
            with self.subTest(action=action): self.assertEqual(self.plan(action=action).get('mode'),'draft')
    def test_ready_for_review_and_ready_updates_require_security(self):
        for action in ('ready_for_review','synchronize','edited','reopened'):
            with self.subTest(action=action):
                plan=self.plan(False,action,paths=['new/unknown.py'])
                self.assertEqual(plan.get('mode'),'ready')
                self.assertEqual(plan['security'],'true')
                self.assertEqual(plan['recovery'],'true')
    def test_missing_malformed_or_contradictory_draft_metadata_fails(self):
        events=[self.event(None),self.event('false'),self.event(True,'ready_for_review'),self.event(False,'converted_to_draft'),self.event(True,'unknown_action')]
        missing=self.event(); del missing['pull_request']['draft']; events.append(missing)
        for event in events:
            with self.subTest(event=event),self.assertRaises(ValueError):
                with patch.object(policy,'changed_paths',return_value=['README.md']): policy.plan_event('pull_request',event,'a'*40)
    def test_gate_distinguishes_advisory_from_merge_eligibility(self):
        plan=self.plan()
        self.assertEqual(policy.check_gate(self.needs(plan),expected_plan=plan),'draft-advisory')
        ready=self.plan(False)
        self.assertEqual(policy.check_gate(self.needs(ready),expected_plan=ready),'merge-eligible')
    def test_forged_draft_flags_cannot_hide_a_ready_security_skip(self):
        ready=self.plan(False)
        fake=self.needs(self.plan())
        with self.assertRaises(ValueError): policy.check_gate(fake,expected_plan=ready)
        fake=self.needs(ready); fake['application']['result']='skipped'
        with self.assertRaises(ValueError): policy.check_gate(fake,expected_plan=ready)
    def test_draft_governance_failure_is_not_an_advisory_pass(self):
        plan=self.plan(); needs=self.needs(plan); needs['governance']['result']='failure'
        with self.assertRaises(ValueError): policy.check_gate(needs,expected_plan=plan)
    def test_cli_draft_advisory_cannot_publish_green_merge_gate(self):
        head=subprocess.check_output(['git','rev-parse','HEAD'],cwd=ROOT,text=True).strip()
        base=subprocess.check_output(['git','rev-parse','origin/main'],cwd=ROOT,text=True).strip()
        event={'action':'synchronize','pull_request':{'draft':True,'head':{'sha':head},'base':{'sha':base}}}
        plan={**{f:'false' for f in policy.FLAGS},'mode':'draft'}
        with tempfile.TemporaryDirectory() as directory:
            packet=Path(directory)/'event.json'; packet.write_text(json.dumps(event),encoding='utf-8')
            env={**os.environ,'GITHUB_EVENT_NAME':'pull_request','GITHUB_EVENT_PATH':str(packet),'CI_NEEDS':json.dumps(self.needs(plan))}
            result=subprocess.run([__import__('sys').executable,str(ROOT/'scripts/ci_policy.py'),'gate'],cwd=ROOT,env=env,capture_output=True,text=True)
            self.assertEqual(result.returncode,1,result.stdout+result.stderr)
            self.assertIn('ADVISORY PASS',result.stdout)
            self.assertIn('BLOCKED',result.stdout)
    def test_cli_recomputes_ready_plan_instead_of_trusting_draft_outputs(self):
        head=subprocess.check_output(['git','rev-parse','HEAD'],cwd=ROOT,text=True).strip()
        base=subprocess.check_output(['git','rev-parse','origin/main'],cwd=ROOT,text=True).strip()
        event={'action':'ready_for_review','pull_request':{'draft':False,'head':{'sha':head},'base':{'sha':base}}}
        fake={**{f:'false' for f in policy.FLAGS},'mode':'draft'}
        with tempfile.TemporaryDirectory() as directory:
            packet=Path(directory)/'event.json'; packet.write_text(json.dumps(event),encoding='utf-8')
            env={**os.environ,'GITHUB_EVENT_NAME':'pull_request','GITHUB_EVENT_PATH':str(packet),'CI_NEEDS':json.dumps(self.needs(fake))}
            result=subprocess.run([__import__('sys').executable,str(ROOT/'scripts/ci_policy.py'),'gate'],cwd=ROOT,env=env,capture_output=True,text=True)
            self.assertNotEqual(result.returncode,0)
            self.assertNotIn('merge-eligible applicable',result.stdout)
            self.assertIn('independently verified',result.stderr)

    def test_base_edit_reclassifies_unchanged_ready_head(self):
        with tempfile.TemporaryDirectory() as directory:
            root=Path(directory)
            def git(*args): return subprocess.check_output(['git',*args],cwd=root,stderr=subprocess.DEVNULL).decode().strip()
            git('init'); git('config','user.email','synthetic@example.invalid'); git('config','user.name','Synthetic')
            (root/'README.md').write_text('base'); git('add','.'); git('commit','-m','base'); base0=git('rev-parse','HEAD')
            (root/'apps/api').mkdir(parents=True); (root/'apps/api/auth.ts').write_text('security delta'); git('add','.'); git('commit','-m','security'); base1=git('rev-parse','HEAD')
            (root/'README.md').write_text('docs'); git('add','.'); git('commit','-m','docs'); head=git('rev-parse','HEAD')
            event={'action':'synchronize','pull_request':{'draft':False,'head':{'sha':head},'base':{'sha':base1}}}
            self.assertEqual(policy.plan_event('pull_request',event,head,cwd=root)['security'],'false')
            event['action']='edited'; event['pull_request']['base']['sha']=base0
            self.assertEqual(policy.plan_event('pull_request',event,head,cwd=root)['security'],'true')
    def test_manual_is_explicitly_full_even_on_draft_branch(self):
        with patch.dict(os.environ,{'GITHUB_SHA':'a'*40}):
            plan=policy.plan_event('workflow_dispatch',{},'a'*40)
            self.assertEqual(plan.get('mode'),'full')
            self.assertEqual(plan['security'],'true')

if __name__=='__main__': unittest.main()
~~~~~~

### `package.json` @ `198ed5ba86f87396405d9bd0a7de9f20fb22c15d`

~~~~~~markdown
{
  "name": "vellistry",
  "private": true,
  "packageManager": "pnpm@10.18.0",
  "scripts": {
    "build": "pnpm --filter @vellistry/api build && pnpm --filter @vellistry/web build",
    "check": "pnpm --filter @vellistry/api typecheck && pnpm --filter @vellistry/web typecheck",
    "test:library-isolation": "pnpm --filter @vellistry/api exec tsx --test src/modules/books/book-create-input.spec.ts ../web/src/lib/library/book-library-state.test.ts ../web/src/lib/library/book-library-session.test.ts",
    "dev:web": "pnpm --filter @vellistry/web dev",
    "dev:api": "pnpm --filter @vellistry/api dev",
    "supabase:start": "supabase start",
    "supabase:stop": "supabase stop",
    "supabase:status": "supabase status",
    "supabase:reset": "supabase db reset",
    "test:hosted-preflight": "node --test tests/hosted_supabase_preflight.test.mjs",
    "check:hosted-config": "node scripts/hosted_supabase_preflight.mjs",
    "test:workspace-contract": "pnpm --filter @vellistry/api exec tsx --test ../web/src/lib/workspace/book-workspace-session.test.ts"
  },
  "devDependencies": {
    "supabase": "^2.0.0",
    "typescript": "^5.8.0"
  }
}
~~~~~~

## Execution reporting
Return an ExecutionBundle with FACT / INTERPRETATION / PROPOSAL sections,
tests actually performed, changes, evidence gaps, and pending owner approval.
