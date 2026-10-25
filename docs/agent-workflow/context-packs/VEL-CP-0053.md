---
id: VEL-CP-0053
title: 'Context for VEL-TASK-0053: Mandatory existing workspace persistence regressions
  in consolidated application CI'
type: context-pack
status: prepared
created_at: '2026-10-25'
version: 0.1.0
task_id: VEL-TASK-0053
base_commit: 352eaaf897dc3e19d595aa8284ce732d3cca4ff8
task_blob_sha: 57d2a2b53098052b74dfd9c1221f3401d0c177e1
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
  git_blob_sha: c61a5c7e5e17a8432a95a8a74b1112b19545d27d
  source_status: active
- path: docs/agent-workflow/PR-COMPLIANCE.md
  role: governing-source
  git_blob_sha: 5f4845623aef3abb15fba7fbe8e78474902cca00
  source_status: unrecorded
- path: .github/workflows/ci.yml
  role: governing-source
  git_blob_sha: ec814f0bfc7b98ded641cde1ccbce533fad43be7
  source_status: unrecorded
- path: scripts/ci_policy.py
  role: governing-source
  git_blob_sha: 2a70169a607819b64d70d2a37871b09fe76709f8
  source_status: unrecorded
- path: tests/workspace/persistence/run_pg17.py
  role: governing-source
  git_blob_sha: 835f634f416bc0926ed902cd20b3e42cf7ee68b0
  source_status: unrecorded
- path: apps/api/package.json
  role: governing-source
  git_blob_sha: fc07a6cc2702d47fa352e2a484651fcea28f3fd0
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0053/OWNER-SCOPE.md
  role: governing-source
  git_blob_sha: 7e6e27354ce9592728e62cdb0473a271ce8b3966
  source_status: unrecorded
source_gaps:
- id: HOSTED-BOUNDARY
  limitation: Synthetic tests do not prove real Supabase logout/hosted acceptance;
    access channel and target-specific operations remain separately gated.
prepared_by: agent_workflow.py
---

# VEL-CP-0053 — Mandatory existing workspace persistence regressions in consolidated application CI

## Objective
Mandatory existing workspace persistence regressions in consolidated application CI

## Scope
**In:** .github/workflows/ci.yml; scripts/pr_compliance.py; tests/test_ci_policy.py; tests/test_pr_compliance.py; CURRENT-STATE.md; docs/agent-workflow/tasks/VEL-TASK-0053.yaml; docs/agent-workflow/context-packs/VEL-CP-0053.md; docs/agent-workflow/execution-bundles/VEL-EB-0053.md; docs/agent-workflow/inputs/VEL-TASK-0053/*; docs/agent-workflow/PR-COMPLIANCE.yaml; docs/reports/VEL-PERSISTENCE-CI-0053.md; docs/reports/evidence/VEL-TASK-0053/*
**Out:** Hosted operations/credentials/cloud migrations/real users/private data/paid/deployment/settings; Successor merge, expired remediation delegation and broad gate promotion; SQL/Auth/application/dependency changes; no production registration

## Evidence and authority constraints
The text below is a readable rendering of pinned Git blobs; exact raw bytes remain recoverable from the recorded commit/blob SHAs. Recorded source statuses remain in force: draft research is not accepted requirements. Original unarchived uploads are not independently verified merely by being mentioned.

**Known source gaps:**
- HOSTED-BOUNDARY: Synthetic tests do not prove real Supabase logout/hosted acceptance; access channel and target-specific operations remain separately gated.

## Permissions and acceptance
**Allowed:** Read repository and public official documentation; edit only scoped files after committed validated pack, Run synthetic local and GitHub Actions disposable tests, owned loopback PG17 only; preserve original checks, Publish draft, obtain review, promote ready and verify exact-head CI; no merge
**Owner approval required:** Any hosted or security-sensitive operation; unresolved production security decisions; dependencies or scope expansion; successor PR merge
**Acceptance criteria:**
- Exactly one unconditional 12-unit and32-case command inside existing applicable application job, after frozen install; PG after build/typecheck before existing Supabase security steps
- Preserve six jobs, single automatic workflow, draft advisory, readonly permissions, mandatory security/recovery/final governance gates
- Static positive and negative regressions reject removed/replaced/conditional/duplicated/masked commands and alternate shell/directory/environment/runtime/order bypasses
- Capture actual current-head synthetic PG evidence and verified owned cleanup without secrets or relabeling historical results
- Run policy/compliance/governance and actual applicable ready CI; distinct final-head review and separate owner merge

## Deliverables
- Committed validated immutable pack before implementation
- docs/reports/VEL-PERSISTENCE-CI-0053.md
- ExecutionBundle, exact source/test evidence, manifest and distinct review; successor PR without merge

## Pinned source snapshots
Git commit: `352eaaf897dc3e19d595aa8284ce732d3cca4ff8`. Read source statuses independently from task intent.

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

### `CURRENT-STATE.md` @ `c61a5c7e5e17a8432a95a8a74b1112b19545d27d`

~~~~~~markdown
---
id: VEL-STATE-001
type: current-state
status: active
created_at: 2026-10-08
updated_at: 2026-10-24
owner: project_owner
version: 0.2.2
---

# Vellistry — current verified state

## Disposable persistence experiment — 2026-10-24

FACT: PR112/114 merged with exact reviewed-tree equality; post-main40132823005/
40133719513 SUCCESS. Main47de4306bc3fe963afc1aabbf3cebba217f3b24b contains the
owner-reviewed Task0052 four-path LOCAL SQL record. SQL privilege CI skip is not acceptance.

Task0052/CP0052 adds an unregistered Nest service and disposable PG17.11 private
capability. Actual27original+5extension cases PASS, with verified owned cleanup.
[Report](docs/reports/VEL-IMP002-DISPOSABLE-PERSISTENCE-0052.md). Original Task49
cases remain historical NOT_RUN. Distinct final review/CI and separate owner feature
merge pending. No production route/Auth/CI/dependency/migration or hosted change;
synthetic sessions do not establish Supabase logout. Broad gates unchanged;
remediation delegation EXPIRED. Issue108 stays OPEN.

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

### `.github/workflows/ci.yml` @ `ec814f0bfc7b98ded641cde1ccbce533fad43be7`

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
    - name: Workspace controller and organizer contract regressions
      run: pnpm test:workspace-contract
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

### `scripts/ci_policy.py` @ `2a70169a607819b64d70d2a37871b09fe76709f8`

~~~~~~markdown
#!/usr/bin/env python3
"""Conservative CI routing and fail-closed final gate. No external API or secrets."""
from __future__ import annotations
import argparse
import json
import os
from pathlib import Path
import re
import subprocess

ROOT = Path(__file__).resolve().parents[1]
FLAGS = ('application', 'security', 'recovery', 'privileges')
GOVERNANCE = {
    'agent_workflow.py', 'handoff_recovery.py', 'export_level_b_handoff.py',
    'export_stage4_independent_packet.py', 'spec_traceability.py',
    'check_implementation_readiness.py', 'check_knowledge_metadata.py',
    'r01_manifest.py', 'r01_mapping_gate.py', 'r01_mapping_proposal.py', 'r01_review_packet.py',
}
GOV_TESTS = {
    'test_agent_workflow.py', 'test_handoff_recovery.py', 'test_level_b_export.py',
    'test_stage4_independent_packet.py', 'test_spec_traceability.py',
    'test_implementation_readiness.py', 'test_knowledge_metadata.py',
    'test_r01_manifest.py', 'test_r01_mapping_gate.py', 'test_r01_mapping_proposal.py',
    'test_r01_review_packet.py', 'test_research_design_gate.py', 'test_stage4_chapter_contract.py',
    'test_pr_compliance.py',
}
PRIVILEGE_TEST = 'tests/book_privileges_regression.sql'
PREFLIGHT_TEST = 'tests/hosted_supabase_preflight.test.mjs'

def classify(paths: list[str], *, full: bool = False, privilege_present: bool = False) -> dict[str, str]:
    app = security = recovery = full
    for p in paths:
        # Git paths are data, never interpolated into a shell or expression.
        if not p or p.startswith('/') or '..' in p.split('/'):
            raise ValueError('Unsafe diff path')
        if p.startswith(('.github/', 'apps/api/', 'supabase/')) or p in (
            'package.json', 'pnpm-lock.yaml', 'pnpm-workspace.yaml',
        ) or p.startswith('.env') or p in (PRIVILEGE_TEST, PREFLIGHT_TEST) or p.startswith('scripts/ci_') or p.startswith('tests/test_ci_'):
            app = security = recovery = True
        elif p.startswith('apps/web/'):
            app = True
            # Shared helpers/pages can affect identity without an auth-like name.
            # Only inert presentation assets may omit live integration.
            if not p.endswith(('.css', '.png', '.jpg', '.jpeg', '.webp', '.ico', '.svg')):
                security = recovery = True
        elif p.startswith('scripts/') and p.split('/')[-1] in GOVERNANCE:
            pass
        elif p.startswith('tests/') and p.split('/')[-1] in GOV_TESTS:
            pass
        elif p.startswith('docs/agent-workflow/') and p.endswith(('.yaml', '.yml')):
            pass  # Always-required governance validates these.
        elif p.startswith('docs/reports/') and p.endswith(('.json', '.csv')):
            pass  # Inert review evidence, never runtime configuration.
        elif p.startswith('docs/') and p.endswith(('.md', '.txt', '.rst')):
            if 'ADR-0006-' in p:
                app = security = recovery = True
        elif '/' not in p and p.endswith(('.md', '.txt')):
            pass
        else:
            # New executable/config/test paths cannot silently opt out.
            app = security = recovery = True
    return dict(zip(FLAGS, map(lambda b: str(b).lower(), (app or security, security, recovery, security and privilege_present))))

def git(*args: str, cwd: Path = ROOT) -> bytes:
    return subprocess.check_output(['git', *args], cwd=cwd, stderr=subprocess.DEVNULL)

def changed_paths(base: str, head: str, *, pr: bool, cwd: Path = ROOT) -> list[str]:
    for value in (base, head):
        if not re.fullmatch(r'[0-9a-fA-F]{40}', value):
            raise ValueError('Expected full Git SHA')
    if pr:
        base = git('merge-base', base, head, cwd=cwd).decode().strip()
    raw = git('diff', '--no-renames', '--name-only', '-z', base, head, '--', cwd=cwd)
    return [p.decode('utf-8', errors='strict') for p in raw.split(b'\0') if p]

def event_mode(event_name: str, event: dict) -> str:
    if event_name in ('push', 'workflow_dispatch'):
        return 'full'
    if event_name != 'pull_request':
        raise ValueError('Unsupported event')
    pr = event.get('pull_request', {})
    draft = pr.get('draft')
    action = event.get('action')
    activities = {'opened', 'synchronize', 'reopened', 'ready_for_review', 'edited', 'converted_to_draft'}
    if type(draft) is not bool or action not in activities:
        raise ValueError('Missing or malformed PR draft/activity metadata')
    if (action == 'ready_for_review' and draft) or (action == 'converted_to_draft' and not draft):
        raise ValueError('Contradictory PR draft/activity metadata')
    return 'draft' if draft else 'ready'

def plan_event(event_name: str, event: dict, head: str, *, cwd: Path = ROOT) -> dict[str, str]:
    expected = event.get('pull_request', {}).get('head', {}).get('sha') if event_name == 'pull_request' else os.environ.get('GITHUB_SHA', head)
    if expected != head:
        raise ValueError('Checkout is not exact event head')
    mode = event_mode(event_name, event)
    full = mode == 'full'
    if event_name not in ('pull_request', 'push', 'workflow_dispatch'):
        raise ValueError('Unsupported event')
    if event_name == 'push' and event.get('ref') != 'refs/heads/main':
        raise ValueError('Only main push baseline is supported')
    base = event.get('pull_request', {}).get('base', {}).get('sha') if event_name == 'pull_request' else event.get('before')
    paths = []
    # Dispatch has no before/base field. Compare required-source presence with
    # main so a manual green check cannot bypass a failed PR deletion guard.
    if event_name == 'workflow_dispatch':
        base = git('rev-parse', 'refs/remotes/origin/main', cwd=cwd).decode().strip()
    # Main/manual select full checks; manual needs no path diff.
    if event_name != 'workflow_dispatch' and base and base != '0' * 40:
        paths = changed_paths(base, head, pr=event_name == 'pull_request', cwd=cwd)
    elif event_name == 'pull_request':
        raise ValueError('PR base missing')
    for test in (PRIVILEGE_TEST, PREFLIGHT_TEST):
        if base and base != '0' * 40:
            existed = subprocess.run(['git','cat-file','-e',f'{base}:{test}'],cwd=cwd,capture_output=True).returncode == 0
            if existed and not (cwd / test).is_file():
                raise ValueError('Existing required integration regression was removed')
    plan = classify(paths, full=full, privilege_present=(cwd / PRIVILEGE_TEST).is_file())
    if mode == 'draft':
        # Preserve all diff/deletion validation; defer only execution, never merge eligibility.
        plan = {flag: 'false' for flag in FLAGS}
    return {**plan, 'mode': mode}

def check_gate(needs: dict, *, expected_plan: dict) -> str:
    required = {'classify','governance','application','recovery','privileges'}
    if set(needs) != required:
        raise ValueError('Incomplete required job results')
    for job in ('classify', 'governance'):
        if needs[job].get('result') != 'success':
            raise ValueError(f'Required {job} did not succeed')
    if needs['governance'].get('outputs', {}).get('compliance') != 'pass':
        raise ValueError('Missing or failed required PR compliance evidence')
    outputs = needs['classify'].get('outputs', {})
    if expected_plan.get('mode') not in ('draft', 'ready', 'full'):
        raise ValueError('Invalid expected event mode')
    if set(outputs) != set(expected_plan) or outputs != expected_plan:
        raise ValueError('Classifier plan differs from independently verified event/head')
    if any(outputs.get(f) not in ('true','false') for f in FLAGS):
        raise ValueError('Missing or malformed routing outputs')
    if outputs['security'] == 'true' and outputs['application'] != 'true':
        raise ValueError('Security cannot bypass application integration')
    if outputs['security'] == 'true' and outputs['recovery'] != 'true':
        raise ValueError('Security cannot bypass recovery integration')
    if outputs['privileges'] == 'true' and outputs['security'] != 'true':
        raise ValueError('Privilege integration cannot bypass security')
    for job in ('application','recovery','privileges'):
        result = needs[job].get('result')
        allowed = {'success'} if outputs[job] == 'true' else {'success','skipped'}
        if result not in allowed:
            raise ValueError(f'Applicable or failed {job}: {result}')
    return 'draft-advisory' if outputs['mode'] == 'draft' else 'merge-eligible'

def main() -> int:
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('mode',choices=('classify','gate'))
    args=parser.parse_args()
    head=git('rev-parse','HEAD').decode().strip()
    event=json.loads(Path(os.environ['GITHUB_EVENT_PATH']).read_text(encoding='utf-8'))
    outputs=plan_event(os.environ['GITHUB_EVENT_NAME'],event,head)
    if args.mode == 'gate':
        result=check_gate(json.loads(os.environ['CI_NEEDS']), expected_plan=outputs)
        if result == 'draft-advisory':
            message='ADVISORY PASS: draft governance succeeded. BLOCKED: merge verification requires ready-for-review or explicit full verification.'
            print(message)
            if os.environ.get('GITHUB_STEP_SUMMARY'):
                with open(os.environ['GITHUB_STEP_SUMMARY'],'a',encoding='utf-8') as stream:
                    stream.write('## Draft advisory only; merge gate BLOCKED\n'+message+'\n')
            # A skipped check can count as success for branch protection. Complete
            # the stable merge gate with failure instead of publishing a false green.
            return 1
        print('PASS: merge-eligible applicable required CI jobs succeeded at '+head)
    else:
        print(json.dumps(outputs,sort_keys=True))
        if outputs['security']=='true' and outputs['privileges']=='false':
            print('NOTICE: proposed PR68 privilege regression is not on this checkout; no privilege-test PASS claimed.')
        with open(os.environ['GITHUB_OUTPUT'],'a',encoding='utf-8') as stream:
            for key,value in outputs.items(): stream.write(f'{key}={value}\n')
    return 0

if __name__ == '__main__':
    raise SystemExit(main())
~~~~~~

### `tests/workspace/persistence/run_pg17.py` @ `835f634f416bc0926ed902cd20b3e42cf7ee68b0`

~~~~~~markdown
"""Owned, loopback-only disposable PG17 acceptance; never accepts external DSNs."""
import argparse
import hashlib
import json
import os
from pathlib import Path
import secrets
import subprocess
import sys
import time
import uuid

ROOT = Path(__file__).resolve().parents[3]
IMAGE = "postgres@sha256:eee6c6e1b0894fa4fe0075eb054af9fd1cf39a35321c2d4110626cfe506411fb"
SQL = ["tests/workspace/persistence/sql/00_fixture_auth.sql", "supabase/migrations/20261009000000_initial_author_books.sql", "supabase/migrations/20261009010000_restrict_accepted_manuscript_dml.sql", *["tests/workspace/persistence/sql/" + name for name in ["10_workspace_schema.sql", "20_workspace_roles.sql", "30_workspace_functions.sql"]]]

def local_engine(endpoint):
    return isinstance(endpoint,str) and endpoint.startswith(("npipe://", "unix:///"))

def loopback_binding(ports):
    return isinstance(ports,list) and len(ports)==1 and ports[0].get("HostIp")=="127.0.0.1" and str(ports[0].get("HostPort", "")).isdigit() and 0<int(ports[0]["HostPort"])<=65535

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--disposable", action="store_true", required=True)
    parser.add_argument("--cases", required=True)
    args = parser.parse_args()
    if args.cases != "docs/contracts/VEL-IMP002-PERSISTENCE-CASES.json":
        parser.error("Only the pinned acceptance source is permitted")
    evidence = ROOT / "docs/reports/evidence/VEL-TASK-0052"
    evidence.mkdir(parents=True, exist_ok=True)
    run_id = uuid.uuid4().hex
    name = "vel-imp002-" + run_id
    volume = name + "-data"
    label = "vellistry.disposable.owner"
    env = {k:v for k,v in os.environ.items() if not k.upper().startswith(("PG", "DOCKER_", "VEL_")) and not any(s in k.upper() for s in ["SUPABASE", "DATABASE", "TOKEN", "SECRET", "PASSWORD", "CREDENTIAL", "SERVICE_ROLE"])}
    password = secrets.token_hex(24)
    fixture_password = secrets.token_hex(24)
    env["POSTGRES_PASSWORD"] = password
    commands = []
    def command(argv, data=None, check=True, timeout=120):
        started = time.monotonic()
        r = subprocess.run(argv, input=data, capture_output=True, cwd=ROOT, env=env, timeout=timeout)
        commands.append(dict(argv=argv, exit_code=r.returncode, seconds=round(time.monotonic()-started,3), stderr=r.stderr.decode(errors="replace").replace(password,"[REDACTED]").replace(fixture_password,"[REDACTED]")[-1200:] if r.returncode else ""))
        if check and r.returncode:
            # Never include SQL strings/passwords in diagnostic reports.
            raise RuntimeError("Disposable command failed: " + argv[0])
        return r.stdout
    def admin(sql, database="workspace"):
        return command(["docker","exec","-i",name,"psql","-X","-v","ON_ERROR_STOP=1","-U","postgres","-d",database,"-At"],sql.encode())
    cases = json.loads((ROOT / args.cases).read_text())["cases"]
    extensions = json.loads((ROOT / "docs/agent-workflow/proposals/VEL-IMP002-PERSISTENCE-EXECUTION-PACKET.json").read_text())["extensions"]
    implementation = ["apps/api/src/modules/workspace/"+p for p in ["workspace-contract.ts","workspace-principal.ts","workspace-persistence-port.ts","workspace.service.ts","workspace-contract.spec.ts"]]+["tests/workspace/persistence/"+p for p in ["workspace-pg-adapter.ts","workspace-pg17.integration.mjs","run_pg17.py"]]
    result = dict(run_id=run_id, source_commit=subprocess.check_output(["git","rev-parse","HEAD"],cwd=ROOT,text=True).strip(), image=IMAGE, checkout_sha256={p:hashlib.sha256((ROOT/p).read_bytes()).hexdigest() for p in SQL+[args.cases]+implementation}, applied_sql_sha256={p:hashlib.sha256((ROOT/p).read_text(encoding="utf-8").encode()).hexdigest() for p in SQL}, commands=commands, cases=[dict(id=c["id"],status="BLOCKED",reason="runtime not completed") for c in cases+extensions], cleanup={})
    exit_code = 1
    local_validated = False
    try:
        assert local_engine("unix:///var/run/docker.sock") and local_engine("npipe:////./pipe/dockerDesktopLinuxEngine")
        assert all(not local_engine(e) for e in ["ssh://remote", "tcp://127.0.0.1:2375", "https://remote", None])
        assert loopback_binding([dict(HostIp="127.0.0.1",HostPort="54321")])
        assert all(not loopback_binding(b) for b in [[],[dict(HostIp="0.0.0.0",HostPort="5432")],[dict(HostIp="::",HostPort="5432")],[dict(HostIp="127.0.0.1",HostPort="0")]])
        result["guard_probes"] = dict(positive=3,negative=8)
        endpoint=json.loads(command(["docker","context","inspect","--format","{{json .Endpoints.docker.Host}}"],timeout=30))
        if not local_engine(endpoint):raise RuntimeError("Remote Docker endpoint rejected")
        result["docker_endpoint"]=endpoint
        result["inherited_docker_overrides_removed"]=dict(host_present="DOCKER_HOST" in os.environ, context_present="DOCKER_CONTEXT" in os.environ)
        # Pin the validated local endpoint, even if the user's default context changes.
        env["DOCKER_HOST"]=endpoint
        local_validated = True
        command(["docker","version","--format","{{.Server.Version}}"],timeout=30)
        command(["docker","volume","create","--label",label+"="+run_id,volume])
        command(["docker","run","-d","--name",name,"--label",label+"="+run_id,"-e","POSTGRES_PASSWORD","-e","POSTGRES_DB=workspace","-p","127.0.0.1::5432","-v",volume+":/var/lib/postgresql/data",IMAGE])
        deadline = time.monotonic()+90
        while time.monotonic()<deadline:
            # The official image briefly starts a Unix-socket-only init server.
            # TCP readiness avoids racing its shutdown before the real server.
            r=subprocess.run(["docker","exec",name,"pg_isready","-h","127.0.0.1","-U","postgres","-d","workspace"],capture_output=True,env=env)
            if r.returncode==0:break
            time.sleep(0.4)
        else:raise RuntimeError("Owned PostgreSQL startup timeout")
        info=json.loads(command(["docker","inspect",name]))[0]
        ports=info["NetworkSettings"]["Ports"]["5432/tcp"]
        if not loopback_binding(ports):raise RuntimeError("Non-loopback binding rejected")
        result["postgres_version"]=admin("select version()").decode().strip()
        if not result["postgres_version"].startswith("PostgreSQL 17."):raise RuntimeError("Wrong PostgreSQL major")
        result["image_id"]=info["Image"]
        for path in SQL:
            admin((ROOT/path).read_text(encoding="utf-8"))
            commands[-1]["sql_source"] = path
        # Only generated hexadecimal credentials enter this stdin; never command args/logs.
        admin("create role workspace_test login password '"+fixture_password+"'; grant vellistry_workspace_gateway to workspace_test; create role workspace_author_test login password '"+fixture_password+"'; grant authenticated to workspace_author_test; create role workspace_anon_test login password '"+fixture_password+"'; grant anon to workspace_anon_test;")
        admin("alter table fixture_probe.gateway owner to workspace_test; alter table fixture_probe.author owner to workspace_author_test; alter table fixture_probe.anonymous owner to workspace_anon_test; grant usage on schema fixture_probe to workspace_test,workspace_author_test,workspace_anon_test;")
        env.update(VEL_PG_HOST="127.0.0.1",VEL_PG_PORT=ports[0]["HostPort"],VEL_FIXTURE_PASSWORD=fixture_password,VEL_ADMIN_PASSWORD=password,VEL_PG_CONTAINER=name,VEL_PG_OWNER=run_id,VEL_CASE_RESULT=str(evidence/(run_id+"-cases.json")))
        cmd=["corepack.cmd" if os.name=="nt" else "corepack","pnpm","--filter","@vellistry/api","exec","tsx",str(ROOT/"tests/workspace/persistence/workspace-pg17.integration.mjs")]
        # tsx runs in API cwd. The test adapter resolves pg from the frozen API installation.
        r=subprocess.run(cmd,capture_output=True,cwd=ROOT,env=env,timeout=600)
        commands.append(dict(argv=cmd,exit_code=r.returncode))
        case_file=Path(env["VEL_CASE_RESULT"])
        if case_file.exists():result["cases"]=json.loads(case_file.read_text())
        else:result["harness_error"]=(r.stderr or r.stdout).decode(errors="replace").replace(password,"[REDACTED]").replace(fixture_password,"[REDACTED]")[-2500:]
        expected={c["id"] for c in cases+extensions}
        assert {c["id"] for c in result["cases"]}==expected and len(result["cases"])==32
        exit_code=0 if r.returncode==0 and all(c["status"]=="PASS" for c in result["cases"]) else 1
    except (RuntimeError,AssertionError,subprocess.SubprocessError,OSError) as e:
        result["runtime_error"]=str(e).replace(password,"[REDACTED]").replace(fixture_password,"[REDACTED]")[:300]
    finally:
        for kind,resource in [("container",name),("volume",volume)]:
            if not local_validated:
                # Validation precedes every creation command. Do not even inspect
                # an unvalidated daemon in the rejected-startup cleanup path.
                result["cleanup"][kind]=dict(created_by_run=False,reason="No creation dispatched: local daemon not validated")
                continue
            try:
                inspect=subprocess.run(["docker",kind,"inspect",resource],capture_output=True,env=env)
            except OSError:
                result["cleanup"][kind]="BLOCKED: Docker unavailable; absence unconfirmed";exit_code=1;continue
            if inspect.returncode==0:
                item=json.loads(inspect.stdout)[0]
                labels=item["Config"].get("Labels",{}) if kind=="container" else item.get("Labels",{})
                if labels.get(label)!=run_id:
                    result["cleanup"][kind]="REFUSED: owner label mismatch";exit_code=1;continue
                argv=["docker","rm","-f","-v",resource] if kind=="container" else ["docker","volume","rm",resource]
                removed=subprocess.run(argv,capture_output=True,env=env)
                listing=subprocess.run(["docker",kind,"ls", "--all", "--format", "{{.Names}}"] if kind=="container" else ["docker","volume","ls","--format","{{.Name}}"],capture_output=True,text=True,env=env)
                gone=listing.returncode==0 and resource not in listing.stdout.splitlines()
                result["cleanup"][kind]=dict(exit_code=removed.returncode,verified_absent=gone)
                if removed.returncode or not gone:exit_code=1
            else:
                listing=subprocess.run(["docker",kind,"ls", "--all", "--format", "{{.Names}}"] if kind=="container" else ["docker","volume","ls","--format","{{.Name}}"],capture_output=True,text=True,env=env)
                gone=listing.returncode==0 and resource not in listing.stdout.splitlines()
                result["cleanup"][kind]=dict(created=False,verified_absent=gone)
                if not gone:exit_code=1
        result["exit_code"]=exit_code
        (evidence/(run_id+"-runtime.json")).write_text(json.dumps(result,indent=2),encoding="utf-8")
        print(json.dumps(dict(run_id=run_id,exit_code=exit_code,passed=sum(c["status"]=="PASS" for c in result["cases"]),cases=len(result["cases"]),cleanup=result["cleanup"])))
    return exit_code

if __name__ == "__main__":
    raise SystemExit(main())
~~~~~~

### `apps/api/package.json` @ `fc07a6cc2702d47fa352e2a484651fcea28f3fd0`

~~~~~~markdown
{
  "name": "@vellistry/api",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "dev": "tsx watch src/main.ts",
    "build": "tsc -p tsconfig.build.json",
    "start": "node dist/main.js",
    "typecheck": "tsc --noEmit -p tsconfig.json"
  },
  "dependencies": {
    "@nestjs/common": "^11.0.0",
    "@nestjs/core": "^11.0.0",
    "@nestjs/platform-express": "^11.0.0",
    "@supabase/supabase-js": "^2.0.0",
    "reflect-metadata": "^0.2.2",
    "rxjs": "^7.8.0",
    "dotenv": "^16.0.0"
  },
  "devDependencies": {
    "@types/node": "^24.0.0",
    "typescript": "^5.8.0",
    "tsx": "^4.19.0",
    "pg": "^8.16.3"
  }
}
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0053/OWNER-SCOPE.md` @ `7e6e27354ce9592728e62cdb0473a271ce8b3966`

~~~~~~markdown
# Owner scope relay for VEL-TASK-0053

FACT: Owner directly authorized on2026-10-25; indexed at https://github.com/Ben-001-sys/Vellistry/issues/108#issuecomment-6396483689. Main c577cc5ecf5fb92fda63977bade60ce4cf2d45df; PR115 merged with identical reviewed tree; post-main40184254095 SUCCESS. Original Task52/CP52/EB52 and32case history remain unchanged; independently blocked runtime is not passing.

Owner authorizes mandatory automatic coverage of the existing12 focused units and32 protected persistence cases using disposable PostgreSQL17. Modify the existing application job and strengthen its static regression contracts only. Reuse frozen dependencies and existing pinned-image owned-resource runner. No SQL, production, Auth, dependency, alternate automatic workflow or settings changes. Submit successor PR for separate owner merge approval.
~~~~~~

## Execution reporting
Return an ExecutionBundle with FACT / INTERPRETATION / PROPOSAL sections,
tests actually performed, changes, evidence gaps, and pending owner approval.
