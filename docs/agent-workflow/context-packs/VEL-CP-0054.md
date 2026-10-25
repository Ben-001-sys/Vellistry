---
id: VEL-CP-0054
title: 'Context for VEL-TASK-0054: Prepare protected workspace Supabase integration
  security decision packet'
type: context-pack
status: prepared
created_at: '2026-10-25'
version: 0.1.0
task_id: VEL-TASK-0054
base_commit: 6fa1cb3c6dd4aba2ae732ab6664e455a9e327ee1
task_blob_sha: 66a775115b84649ad98e0d2bcc5ca10a44332ff8
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
- path: apps/api/src/modules/auth/supabase-auth.service.ts
  role: governing-source
  git_blob_sha: 77bbb0b76943a6a67cbb52beb7b074430753c655
  source_status: unrecorded
- path: apps/api/src/modules/auth/supabase-auth.guard.ts
  role: governing-source
  git_blob_sha: 7d40c0782a7ce7676343bb1d24aea8fe3c896ec1
  source_status: unrecorded
- path: apps/api/src/modules/workspace/workspace-principal.ts
  role: governing-source
  git_blob_sha: 56b41b1a61599624569d4bb32f164fbb066f2cff
  source_status: unrecorded
- path: apps/api/src/modules/workspace/workspace.service.ts
  role: governing-source
  git_blob_sha: 5c76937699f1c1318b76ea503c91fe6f8ba3b8ac
  source_status: unrecorded
- path: apps/web/src/app/api/books/route.ts
  role: governing-source
  git_blob_sha: 34b70aed9ae8fd5a4033c9a1db615e03a3902231
  source_status: unrecorded
- path: docs/contracts/VEL-IMP002-PERSISTENCE-CONTRACT.md
  role: governing-source
  git_blob_sha: 329c286e064b013acac01c724e25543a6974bee2
  source_status: proposed
- path: docs/agent-workflow/proposals/VEL-IMP002-PERSISTENCE-EXECUTION-PACKET.json
  role: governing-source
  git_blob_sha: 2e51e23b881ffd22cc8df8876b0365f748a47cb9
  source_status: unrecorded
- path: docs/reports/evidence/VEL-HOSTED-METADATA-0046/query-manifest.json
  role: governing-source
  git_blob_sha: 79ecaa12fb3bd5e66d2ec1159db423b5c8bdd7ce
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0054/OWNER-SCOPE.md
  role: governing-source
  git_blob_sha: d5cca086e626e7898cd5e54474877d7cc796e2a5
  source_status: unrecorded
source_gaps:
- id: HOSTED-BOUNDARY
  limitation: Synthetic tests do not prove real Supabase logout/hosted acceptance;
    access channel and target-specific operations remain separately gated.
prepared_by: agent_workflow.py
---

# VEL-CP-0054 — Prepare protected workspace Supabase integration security decision packet

## Objective
Prepare protected workspace Supabase integration security decision packet

## Scope
**In:** CURRENT-STATE.md; docs/agent-workflow/tasks/VEL-TASK-0054.yaml; docs/agent-workflow/context-packs/VEL-CP-0054.md; docs/agent-workflow/execution-bundles/VEL-EB-0054.md; docs/agent-workflow/inputs/VEL-TASK-0054/*; docs/agent-workflow/PR-COMPLIANCE.yaml; docs/reports/VEL-SUPABASE-WORKSPACE-READINESS-0054.md; docs/reports/evidence/VEL-TASK-0054/*; docs/agent-workflow/proposals/VEL-SUPABASE-WORKSPACE-READINESS-0054.json
**Out:** Hosted operations/credentials/cloud migrations/real users/private data/paid/deployment/settings; Successor merge, expired remediation delegation and broad gate promotion; SQL/Auth/application/dependency changes; no production registration

## Evidence and authority constraints
The text below is a readable rendering of pinned Git blobs; exact raw bytes remain recoverable from the recorded commit/blob SHAs. Recorded source statuses remain in force: draft research is not accepted requirements. Original unarchived uploads are not independently verified merely by being mentioned.

**Known source gaps:**
- HOSTED-BOUNDARY: Synthetic tests do not prove real Supabase logout/hosted acceptance; access channel and target-specific operations remain separately gated.

## Permissions and acceptance
**Allowed:** Read repository and public official documentation; edit only scoped files after committed validated pack, Run synthetic local and GitHub Actions disposable tests, owned loopback PG17 only; preserve original checks, Publish draft, obtain review, promote ready and verify exact-head CI; no merge
**Owner approval required:** Any hosted or security-sensitive operation; unresolved production security decisions; dependencies or scope expansion; successor PR merge
**Acceptance criteria:**
- Document existing source facts separately from interpretations and unapproved proposals with exact source SHAs
- Pin historical target and reviewed15query manifest; no new observations or hosted execution
- Specify fail-closed real principal/session, revoked-session locking, private capability and managed-schema privilege decisions pending owner/provider review
- Exclude synthetic Auth/users/fault hooks and global fixture ACL operations from future shipping migration; future exact SQL paths require reviewed-base owner record
- Specify durable unknown-outcome/idempotency/restart/reconciliation and transport security acceptance; smallest separately authorized next local task, no code

## Deliverables
- Committed validated immutable pack before implementation
- docs/reports/VEL-SUPABASE-WORKSPACE-READINESS-0054.md
- ExecutionBundle, exact source/test evidence, manifest and distinct review; successor PR without merge

## Pinned source snapshots
Git commit: `6fa1cb3c6dd4aba2ae732ab6664e455a9e327ee1`. Read source statuses independently from task intent.

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

### `apps/api/src/modules/auth/supabase-auth.service.ts` @ `77bbb0b76943a6a67cbb52beb7b074430753c655`

~~~~~~markdown
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
~~~~~~

### `apps/api/src/modules/auth/supabase-auth.guard.ts` @ `7d40c0782a7ce7676343bb1d24aea8fe3c896ec1`

~~~~~~markdown
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
~~~~~~

### `apps/api/src/modules/workspace/workspace-principal.ts` @ `56b41b1a61599624569d4bb32f164fbb066f2cff`

~~~~~~markdown
import {uuid} from "./workspace-contract";
export type VerifiedPrincipal=Readonly<{authorId:string;sessionId:string;tokenExpiresAt:number;verifiedAt:number}>;
/** Implementations must verify identity at the existing trusted server boundary.
 * This experiment injects synthetic principals; it adds no Auth/JWT implementation. */
export interface WorkspacePrincipalProvider {verify():Promise<VerifiedPrincipal|null>}
export const WORKSPACE_PRINCIPAL=Symbol("WORKSPACE_PRINCIPAL");
export function checkedPrincipal(p:VerifiedPrincipal|null,now=Date.now()):VerifiedPrincipal|null {
 if(!p)return null;
 if(!Number.isFinite(p.tokenExpiresAt)||!Number.isFinite(p.verifiedAt)||p.tokenExpiresAt<=now||p.verifiedAt>now||now-p.verifiedAt>30000)return null;
 return Object.freeze({...p,authorId:uuid(p.authorId),sessionId:uuid(p.sessionId)});
}
~~~~~~

### `apps/api/src/modules/workspace/workspace.service.ts` @ `5c76937699f1c1318b76ea503c91fe6f8ba3b8ac`

~~~~~~markdown
import {Inject,Injectable} from "@nestjs/common";
import {operation,receipt,uuid,workspace,Operation,Receipt,Workspace} from "./workspace-contract";
import {checkedPrincipal,VerifiedPrincipal,WORKSPACE_PRINCIPAL,WorkspacePrincipalProvider} from "./workspace-principal";
import {WORKSPACE_PERSISTENCE,WorkspacePersistencePort} from "./workspace-persistence-port";
export type WorkspaceResult={status:"ready";workspace:Workspace}|{status:"confirmed"|"rejected";receipt:Receipt}|{status:"unknown"|"unavailable"|"denied"|"invalid"};
type Pending={operation:Operation;terminal?:Receipt};
/** Experimental headless service only: deliberately absent from AppModule/routes.
 * Unknown writes remain locked per verified author/book until terminal reconciliation
 * and a coherent readback. This is process-local safety, not a shipping draft store. */
@Injectable()
export class WorkspaceService {
 private readonly pending=new Map<string,Pending>();
 private readonly floors=new Map<string,number>();
 constructor(@Inject(WORKSPACE_PRINCIPAL) private readonly principals:WorkspacePrincipalProvider,
 @Inject(WORKSPACE_PERSISTENCE) private readonly port:WorkspacePersistencePort){}
 private async principal(){return checkedPrincipal(await this.principals.verify());}
 private key(p:VerifiedPrincipal,book:string){return p.authorId+":"+book;}
 private async still(p:VerifiedPrincipal){const next=await this.principal();return next?.authorId===p.authorId&&next.sessionId===p.sessionId;}
 async read(book:string):Promise<WorkspaceResult>{
  try{book=uuid(book);const p=await this.principal();if(!p)return {status:"denied"};const key=this.key(p,book);
   const result=workspace(await this.port.read(p,book),book);if(!await this.still(p))return {status:"unavailable"};
   if(result.version<(this.floors.get(key)??0))return {status:"unavailable"};
   this.floors.set(key,Math.max(this.floors.get(key)??0,result.version));
   const pending=this.pending.get(key);if(pending?.terminal?.outcome==="confirmed"&&result.version>=pending.terminal.version)this.pending.delete(key);
   return {status:"ready",workspace:result};
  }catch{return {status:"unavailable"};}
 }
 async apply(book:string,raw:unknown):Promise<WorkspaceResult>{
  let op:Operation;try{book=uuid(book);op=operation(raw);}catch{return {status:"invalid"};}
  let p:VerifiedPrincipal|null;try{p=await this.principal();}catch{return {status:"unavailable"};}if(!p)return {status:"denied"};
  const key=this.key(p,book);if(this.pending.has(key))return {status:"unknown"};
  const pending:Pending={operation:op};this.pending.set(key,pending);
  try{const r=receipt(await this.port.apply(p,book,op),book,op.operationId);
   if(r.outcome==="confirmed"&&r.version!==op.expectedVersion+1)return {status:"unknown"};
   if(!await this.still(p))return {status:"unknown"};return this.terminal(key,pending,r);
  }catch{return {status:"unknown"};}
 }
 async reconcile(book:string,operationId:string):Promise<WorkspaceResult>{
  try{book=uuid(book);operationId=uuid(operationId);const p=await this.principal();if(!p)return {status:"denied"};const key=this.key(p,book);
   const pending=this.pending.get(key);const raw=await this.port.lookup(p,book,operationId);
   if(!await this.still(p))return {status:"unavailable"};
   const r=receipt(raw,book,operationId);
   if(pending&&pending.operation.operationId!==operationId)return {status:"unknown"};
   if(pending&&r.outcome==="confirmed"&&r.version!==pending.operation.expectedVersion+1)return {status:"unknown"};
   if(pending)return this.terminal(key,pending,r);
   this.floors.set(key,Math.max(this.floors.get(key)??0,r.version));return {status:r.outcome,receipt:r};
  }catch{return {status:"unknown"};}
 }
 private terminal(key:string,pending:Pending,r:Receipt):WorkspaceResult {
  // A delayed response must not mutate a newer operation's reconciliation lock.
  if(this.pending.get(key)!==pending)return {status:"unknown"};
  pending.terminal=r;this.floors.set(key,Math.max(this.floors.get(key)??0,r.version));
  if(r.outcome==="rejected")this.pending.delete(key);
  return {status:r.outcome,receipt:r};
 }
}
~~~~~~

### `apps/web/src/app/api/books/route.ts` @ `34b70aed9ae8fd5a4033c9a1db615e03a3902231`

~~~~~~markdown
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
~~~~~~

### `docs/contracts/VEL-IMP002-PERSISTENCE-CONTRACT.md` @ `329c286e064b013acac01c724e25543a6974bee2`

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

### `docs/agent-workflow/proposals/VEL-IMP002-PERSISTENCE-EXECUTION-PACKET.json` @ `2e51e23b881ffd22cc8df8876b0365f748a47cb9`

~~~~~~markdown
{
  "id": "VEL-IMP002-PERSISTENCE-EXECUTION-PACKET",
  "status": "PROPOSED_NOT_AUTHORIZED",
  "current_base": "667084ef30ac00a96b205eb2c52c83083db121e3",
  "original_contract_source": "b1c46df3942809b35f6cf4c650fe6c36f7cc60ab",
  "original_cases_sha256": "9bd84fa3ed204f11332cdd5622397c523c9123ec0142ad60d546c2db01d2c193",
  "future_task_id": null,
  "sql_paths": [
    "tests/workspace/persistence/sql/00_fixture_auth.sql",
    "tests/workspace/persistence/sql/10_workspace_schema.sql",
    "tests/workspace/persistence/sql/20_workspace_roles.sql",
    "tests/workspace/persistence/sql/30_workspace_functions.sql"
  ],
  "implementation_paths": [
    "apps/api/src/modules/workspace/workspace-contract.ts",
    "apps/api/src/modules/workspace/workspace.service.ts",
    "apps/api/src/modules/workspace/workspace-persistence-port.ts",
    "apps/api/src/modules/workspace/workspace-principal.ts",
    "apps/api/src/modules/workspace/workspace-contract.spec.ts",
    "tests/workspace/persistence/workspace-pg-adapter.ts",
    "tests/workspace/persistence/workspace-pg17.integration.mjs",
    "tests/workspace/persistence/run_pg17.py"
  ],
  "excluded_paths": [
    "supabase/migrations/*",
    ".github/workflows/*",
    "apps/api/src/app.module.ts",
    "apps/api/src/modules/auth/*",
    "apps/web/src/app/*",
    "package.json",
    "apps/api/package.json",
    "pnpm-lock.yaml"
  ],
  "decisions": [
    {
      "id": "GATEWAY",
      "status": "OWNER_DECISION_PENDING",
      "proposal": "Private execute-only gateway; restricted NOLOGIN/NOBYPASSRLS owner; fixed qualified objects and RLS; no browser/service-role path"
    },
    {
      "id": "SESSION",
      "status": "OWNER_DECISION_PENDING",
      "proposal": "Injected verified principal; token expiry/verifiedAt freshness; matching session row FOR SHARE through transaction, session not_after deadline; synthetic stand-in only, no provider/JWT acceptance"
    },
    {
      "id": "SQL-SCOPE",
      "status": "OWNER_DECISION_PENDING",
      "proposal": "Reviewed-base owner migration-path-approval record for four exact local candidate SQL paths before executable Task; not an approval record here"
    },
    {
      "id": "RUNTIME",
      "status": "OWNER_DECISION_PENDING",
      "proposal": "Owned loopback disposable PostgreSQL17 image/version/digest recorded at dispatch; synthetic restricted login credentials only inside future test process; fail BLOCKED if unavailable, no cloud substitution"
    },
    {
      "id": "PROTOCOL",
      "status": "OWNER_DECISION_PENDING",
      "proposal": "P01..P06 request/CAS/order/init/notes/journal contracts, DB-verified canonical SHA256 format, book-lifetime replay identity and explicit unknown reconciliation"
    },
    {
      "id": "LOCK-PRIVILEGES",
      "status": "OWNER_DECISION_PENDING",
      "proposal": "Isolate required auth.sessions/books UPDATE(id) row-lock capabilities in NOLOGIN/NOBYPASSRLS lock helper owner, with scoped RLS and no runtime role membership; reject implementation if not owner-approved"
    }
  ],
  "roles": {
    "vellistry_workspace_gateway": "NOLOGIN NOBYPASSRLS; only named private EXECUTE; no direct DML",
    "vellistry_workspace_owner": "NOLOGIN NOBYPASSRLS; scoped book/chapter SELECT, private lock_owned_context EXECUTE, limited metadata/state/note/journal DML and canonical initializer; no raw session access or book/session UPDATE",
    "synthetic_fixture_login": "Disposable-only restricted login; gateway membership, no admin/BYPASSRLS/role creation; no production credential provisioning",
    "vellistry_workspace_lock_owner": "NOLOGIN NOBYPASSRLS; limited session/book SELECT and UPDATE(id) on auth.sessions and public.books solely for locking; no runtime login/membership or generic DML entrypoint"
  },
  "entrypoints": [
    "vellistry_workspace.read_workspace",
    "vellistry_workspace.apply_workspace_operation",
    "vellistry_workspace.lookup_workspace_operation"
  ],
  "transaction": {
    "lock_order": [
      "verified session FOR SHARE",
      "owned book FOR UPDATE",
      "exact owner+operation journal reservation"
    ],
    "session_check": "Recheck expiry, owner/session match and verification freshness after locks; provider behavior not verified by stand-in",
    "version": "Compare safe-integer expectedVersion under book lock; advance once only for confirmed fresh operation",
    "reorder": "Validate dense0..n-1 and exact unique same-book permutation; offset by n then assign0..n-1 atomically",
    "journal": "Unique verified author+operation ID; DB-verified versioned canonical request hash/book; committed effects/version/receipt or terminal authorized rejection together",
    "unknown": "Missing/mismatched reply stays unknown, no automatic new-key retry; readback must meet confirmed version floor"
  },
  "commands": [
    {
      "command": "python tests/workspace/persistence/run_pg17.py --disposable --cases docs/contracts/VEL-IMP002-PERSISTENCE-CASES.json",
      "status": "NOT_RUN",
      "availability": "Proposed future file; must own container, reject non-loopback and clean only its resources"
    },
    {
      "command": "corepack pnpm test:workspace-contract",
      "status": "FUTURE_REQUIRED_REGRESSION"
    },
    {
      "command": "corepack pnpm test:library-isolation",
      "status": "FUTURE_REQUIRED_REGRESSION"
    },
    {
      "command": "corepack pnpm test:hosted-preflight",
      "status": "FUTURE_REQUIRED_REGRESSION"
    },
    {
      "command": "corepack pnpm check",
      "status": "FUTURE_REQUIRED_REGRESSION"
    },
    {
      "command": "corepack pnpm build",
      "status": "FUTURE_REQUIRED_REGRESSION"
    }
  ],
  "original_acceptance": [
    {
      "id": "IMP002-PERSIST-01",
      "status": "NOT_RUN"
    },
    {
      "id": "IMP002-PERSIST-02",
      "status": "NOT_RUN"
    },
    {
      "id": "IMP002-PERSIST-03",
      "status": "NOT_RUN"
    },
    {
      "id": "IMP002-PERSIST-04",
      "status": "NOT_RUN"
    },
    {
      "id": "IMP002-PERSIST-05",
      "status": "NOT_RUN"
    },
    {
      "id": "IMP002-PERSIST-06",
      "status": "NOT_RUN"
    },
    {
      "id": "IMP002-PERSIST-07",
      "status": "NOT_RUN"
    },
    {
      "id": "IMP002-PERSIST-08",
      "status": "NOT_RUN"
    },
    {
      "id": "IMP002-PERSIST-09",
      "status": "NOT_RUN"
    },
    {
      "id": "IMP002-PERSIST-10",
      "status": "NOT_RUN"
    },
    {
      "id": "IMP002-PERSIST-11",
      "status": "NOT_RUN"
    },
    {
      "id": "IMP002-PERSIST-12",
      "status": "NOT_RUN"
    },
    {
      "id": "IMP002-PERSIST-13",
      "status": "NOT_RUN"
    },
    {
      "id": "IMP002-PERSIST-14",
      "status": "NOT_RUN"
    },
    {
      "id": "IMP002-PERSIST-15",
      "status": "NOT_RUN"
    },
    {
      "id": "IMP002-PERSIST-16",
      "status": "NOT_RUN"
    },
    {
      "id": "IMP002-PERSIST-17",
      "status": "NOT_RUN"
    },
    {
      "id": "IMP002-PERSIST-18",
      "status": "NOT_RUN"
    },
    {
      "id": "IMP002-PERSIST-19",
      "status": "NOT_RUN"
    },
    {
      "id": "IMP002-PERSIST-20",
      "status": "NOT_RUN"
    },
    {
      "id": "IMP002-PERSIST-21",
      "status": "NOT_RUN"
    },
    {
      "id": "IMP002-PERSIST-22",
      "status": "NOT_RUN"
    },
    {
      "id": "IMP002-PERSIST-23",
      "status": "NOT_RUN"
    },
    {
      "id": "IMP002-PERSIST-24",
      "status": "NOT_RUN"
    },
    {
      "id": "IMP002-PERSIST-25",
      "status": "NOT_RUN"
    },
    {
      "id": "IMP002-PERSIST-26",
      "status": "NOT_RUN"
    },
    {
      "id": "IMP002-PERSIST-27",
      "status": "NOT_RUN"
    }
  ],
  "extensions": [
    {
      "id": "EXEC-SESSION-LOCK-EXPIRY",
      "status": "NOT_RUN"
    },
    {
      "id": "EXEC-RESTRICTED-LOGIN-PRIVILEGES",
      "status": "NOT_RUN"
    },
    {
      "id": "EXEC-CANONICAL-DIGEST-VECTORS",
      "status": "NOT_RUN"
    },
    {
      "id": "EXEC-PROCESS-RESTART-RESTORE",
      "status": "NOT_RUN"
    },
    {
      "id": "EXEC-ROW-LOCK-PRIVILEGE-NEGATIVE",
      "status": "NOT_RUN"
    }
  ],
  "exclusions": [
    "hosted",
    "credentials-real",
    "live-jwt-probes",
    "cloud-migrations",
    "private-manuscripts",
    "paid-services",
    "production",
    "settings",
    "merge",
    "broad-gate-promotion"
  ],
  "evidence_required": [
    "exact source/SQL/image hashes and actual PostgreSQL version",
    "commands/exits/SQLSTATE and concurrent/fault barriers",
    "all27original cases and5extensions with real runtime outcomes",
    "unchanged existing manuscript/revisions and note/order/receipt identity",
    "owned resource cleanup; no token/password/manuscript logs",
    "fresh Task/immutable CP, EB, distinct review, ready CI, separate owner merge"
  ],
  "lock_helper": {
    "entrypoint": "vellistry_workspace.lock_owned_context",
    "execute_allowed_roles": [
      "vellistry_workspace_owner"
    ],
    "owner": "vellistry_workspace_lock_owner",
    "select_columns": {
      "auth.sessions": [
        "id",
        "user_id",
        "not_after"
      ],
      "public.books": [
        "id",
        "owner_id"
      ]
    },
    "update_columns": {
      "auth.sessions": [
        "id"
      ],
      "public.books": [
        "id"
      ]
    },
    "residual_capability": "UPDATE(id) is actual DML permission; no accepted grant. Confinement depends on private audited fixed helper, NOLOGIN and no runtime membership.",
    "acceptance": "42501 without either column UPDATE grant; locks succeed only with isolated candidate grants/RLS; gateway/login direct DML/helper/owner-role access still denied;42501without required schema USAGE; scoped SELECT/UPDATE RLS required, no RLS bypass",
    "status": "OWNER_DECISION_PENDING",
    "schema_usage": {
      "vellistry_workspace_gateway": [
        "vellistry_workspace"
      ],
      "vellistry_workspace_owner": [
        "vellistry_workspace",
        "public"
      ],
      "vellistry_workspace_lock_owner": [
        "vellistry_workspace",
        "auth",
        "public"
      ]
    },
    "runtime_schema_create": false
  }
}
~~~~~~

### `docs/reports/evidence/VEL-HOSTED-METADATA-0046/query-manifest.json` @ `79ecaa12fb3bd5e66d2ec1159db423b5c8bdd7ce`

~~~~~~markdown
{
  "packet_path": "docs/reports/VEL-HOSTED-METADATA-0046-QUERY-PACKET.md",
  "source_commit": "564518119f4c56b87990bb4fc2c107b0d5307089",
  "packet_sha256": "dbae331cd58a7c5524d77fda8380233f19c25b3d0e8520a4b984bc3d58db4f08",
  "canonicalization": "Exact UTF-8 Git blob; per-query bytes strictly between sql fence newline and closing fence, including final LF",
  "target": {
    "reference": "lflkcrnriitrbclangyr",
    "organization": "pulyacnozzggwfgqdgdl",
    "region": "eu-west-2"
  },
  "query_count": 15,
  "queries": [
    {
      "id": "Q01",
      "sha256": "cbfbbe10182146d34ee33650d9925a2a72213e0eb5e021004dd0ef1f0e2991ab",
      "limit": 2,
      "bytes": 577
    },
    {
      "id": "Q02",
      "sha256": "3274ca07764f768a0c33e9336fdb68771447f65ce6f0bbf0619f4b59bc06a1ab",
      "limit": 9,
      "bytes": 955
    },
    {
      "id": "Q03",
      "sha256": "cfb0d9c0ffe944915abcb2d655eeafeaf86bf6baaa0e618b1feaa87c00daae10",
      "limit": 101,
      "bytes": 705
    },
    {
      "id": "Q04",
      "sha256": "031bca63d037f77a747a01bf9de85021357a46419046c8bd4c802c7b4f383b5a",
      "limit": 101,
      "bytes": 732
    },
    {
      "id": "Q05",
      "sha256": "9b59c11c405aa2e374a9e30a770d174f81bc77bfe87a7e191d916b5111941151",
      "limit": 101,
      "bytes": 718
    },
    {
      "id": "Q06",
      "sha256": "84fea4786281371c1a1130bc981077d12f0d41ac536afc67f0dc43a2a2332887",
      "limit": 101,
      "bytes": 633
    },
    {
      "id": "Q07",
      "sha256": "cd6371465619bf0584109a5680718a5775eea9d440369b6b2bb0c49b4556606d",
      "limit": 201,
      "bytes": 861
    },
    {
      "id": "Q08",
      "sha256": "c68db0e2226af469dc449ff3278931c8647fcdb464848434728e34bbb82270d3",
      "limit": 201,
      "bytes": 1434
    },
    {
      "id": "Q09",
      "sha256": "73a1a86b4eb42a681b9b214364f1bacb69df85f15ae69a57fd513b5df8e86314",
      "limit": 201,
      "bytes": 905
    },
    {
      "id": "Q10",
      "sha256": "80a0482e3122de1b5c452d12e1b843d62483002ee56b79948af3f1a05b4ba38e",
      "limit": 101,
      "bytes": 1093
    },
    {
      "id": "Q11",
      "sha256": "7c96e9a211e650070a775aa378263d569ba8779b2d924da2fec2908d85dc44ae",
      "limit": 201,
      "bytes": 1282
    },
    {
      "id": "Q12",
      "sha256": "60abcea8ce0d67ff07764562f29786cc38c6e40fe32f229531065586d19301c6",
      "limit": 101,
      "bytes": 1549
    },
    {
      "id": "Q13",
      "sha256": "28dc3c940b4dd5b1fb2a6bf7b09a35bd8721e71c901bef73a7e37fc24250e285",
      "limit": 201,
      "bytes": 1118
    },
    {
      "id": "Q14",
      "sha256": "d7522975e90d4fa31904906b3a5eb39953f59fd5a3abc1f72ddc207a4f09397d",
      "limit": 201,
      "bytes": 1394
    },
    {
      "id": "Q15",
      "sha256": "4f34bd455d3961f2b2a68a21bf76b48abf4d42bd73915cd88e584760e04935a0",
      "limit": 33,
      "bytes": 1098
    }
  ],
  "executed_queries": 0,
  "execution_status": "NOT_RUN",
  "channel_status": "NOT_VERIFIED; generic execute_sql not approved",
  "owner_exact_query_review": "PENDING"
}
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0054/OWNER-SCOPE.md` @ `d5cca086e626e7898cd5e54474877d7cc796e2a5`

~~~~~~markdown
# Owner scope relay for VEL-TASK-0054

FACT: Owner directly authorized on2026-10-25; indexed at https://github.com/Ben-001-sys/Vellistry/issues/108#issuecomment-6396483689. Main c577cc5ecf5fb92fda63977bade60ce4cf2d45df; PR115 merged with identical reviewed tree; post-main40184254095 SUCCESS. Original Task52/CP52/EB52 and32case history remain unchanged; independently blocked runtime is not passing.

Owner authorizes repository-only preparation of exact implementation/security decisions for future vellistry-dev integration. Cover real verified principal/session and revocation, private gateway, migration packaging/grants/RLS, durable reconciliation, application transport. Preserve existing Auth. No hosted query, credential access, migration, production route, private manuscript or implementation of unresolved decisions. Submit separate preparation PR, no automatic merge.
~~~~~~

## Execution reporting
Return an ExecutionBundle with FACT / INTERPRETATION / PROPOSAL sections,
tests actually performed, changes, evidence gaps, and pending owner approval.
