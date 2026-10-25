---
id: VEL-CP-0059
title: 'Context for VEL-TASK-0059: Prepare real Supabase principal verification boundary
  decision packet'
type: context-pack
status: prepared
created_at: '2026-10-25'
version: 0.1.0
task_id: VEL-TASK-0059
base_commit: e00f904f81678f57f7339e1a0028a3d64cd17566
task_blob_sha: f67abf66e6b5cff2e8fc924ab0ce52db18b8463f
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
  git_blob_sha: 6d4ce48526e8c1adca6dfaaf3faae7dc4e412046
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
- path: apps/api/src/modules/workspace/workspace-supabase-response-bridge.ts
  role: governing-source
  git_blob_sha: c114fa51328b965b8daa4022066a6d6d61b1e9f5
  source_status: unrecorded
- path: apps/api/src/modules/workspace/workspace-principal-adapter.ts
  role: governing-source
  git_blob_sha: 5084cc167b9f69865aee58aa9ea212c6f4f08ac0
  source_status: unrecorded
- path: apps/api/src/modules/workspace/workspace-principal.ts
  role: governing-source
  git_blob_sha: 56b41b1a61599624569d4bb32f164fbb066f2cff
  source_status: unrecorded
- path: docs/agent-workflow/proposals/VEL-SUPABASE-WORKSPACE-READINESS-0054.json
  role: governing-source
  git_blob_sha: a964e42067da33e4b3662d6d04adf81088d9a05b
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0059/SDK-BOUNDARY-SOURCES.md
  role: governing-source
  git_blob_sha: 24cfde996e425813fcbd6e311fd47007bc0b56e0
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0059/OWNER-SCOPE.md
  role: governing-source
  git_blob_sha: 3f98982befe31a1267f34c2133d349b7d039eb83
  source_status: unrecorded
source_gaps:
- id: TARGET-UNVERIFIED
  limitation: Target signing mode, issuer/audience, deployed Auth/session semantics
    and catalog remain unobserved; no real token experiment permitted.
prepared_by: agent_workflow.py
---

# VEL-CP-0059 — Prepare real Supabase principal verification boundary decision packet

## Objective
Prepare source-pinned real-principal boundary requirements and smallest proposed local policy test task, no Auth implementation or security decision approval

## Scope
**In:** CURRENT-STATE.md; docs/agent-workflow/tasks/VEL-TASK-0059.yaml; docs/agent-workflow/context-packs/VEL-CP-0059.md; docs/agent-workflow/execution-bundles/VEL-EB-0059.md; docs/agent-workflow/inputs/VEL-TASK-0059/*; docs/agent-workflow/proposals/VEL-SUPABASE-PRINCIPAL-BOUNDARY-0059.json; docs/reports/VEL-SUPABASE-PRINCIPAL-BOUNDARY-0059.md; docs/reports/evidence/VEL-TASK-0059/*; docs/agent-workflow/PR-COMPLIANCE.yaml
**Out:** All app/Auth/dependency/CI/SQL/RLS/grant/route implementation; Hosted/credential/real Auth/JWT/signing/JWKS/users/private/paid/deployment/settings operations; Production decision resolution or automatic PR merge

## Evidence and authority constraints
The text below is a readable rendering of pinned Git blobs; exact raw bytes remain recoverable from the recorded commit/blob SHAs. Recorded source statuses remain in force: draft research is not accepted requirements. Original unarchived uploads are not independently verified merely by being mentioned.

**Known source gaps:**
- TARGET-UNVERIFIED: Target signing mode, issuer/audience, deployed Auth/session semantics and catalog remain unobserved; no real token experiment permitted.

## Permissions and acceptance
**Allowed:** Read Git/public official docs/frozen SDK source only; commit/validate immutable pack before preparation docs, Write only scoped packet/report/evidence/current-state and workflow artifacts; offline assertions and inherited actual CI, Submit Draft, obtain distinct trusted source review, promote Ready and record exact-head CI; no merge
**Owner approval required:** Any real principal/Auth/hosted/SDK/JWT/security implementation or production choice; Any app/CI/SQL/dependency/scope change or new PR merge
**Acceptance criteria:**
- Reverify merged-tree/post-main success,36/12/32 mandatory and unchanged, preserveTask58/CP58/EB58/failures/blocked runtime
- Analyze pinned SDK local signature/fallback/error/cache and existing Auth user-only/guard/bridge limits with exact source references, no broad live claims
- Require same exact token and subject/session/exp binding, trusted configuration/issuer/audience/claim schema and fail-closed errors; identify unresolved owner values without choosing production policy
- Explicitly distinguish cryptographic integrity, Auth-server identity and authoritative session/revocation/atomic write gating; no getUser/getClaims success conflation
- Recommend smallest unregistered local policy contract harness using injected mocks, exact two proposed app paths and negative cases; no app/Auth implementation now
- All six decisions OWNER_DECISION_PENDING, target UNVERIFIED, next TaskID unallocated/NOT_AUTHORIZED; separate owner scope before new code
- Run source/hash/packet integrity positives/negatives, metadata/readiness/traceability/trusted-base validation; distinct completed-head review and actual applicable readyCI, no merge

## Deliverables
- Committed validated immutable Task59/CP59 before packet
- Exact source/hash observations, three-evidence distinction and same-token trust/policy/session requirements
- Owner-decision table and implementation-ready local-only next Task proposal with exact paths/negative tests, NOT_AUTHORIZED
- Actual offline integrity/metadata/governance evidence, EB/provenance and distinct review; preparation PR for separate owner merge

## Pinned source snapshots
Git commit: `e00f904f81678f57f7339e1a0028a3d64cd17566`. Read source statuses independently from task intent.

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

### `CURRENT-STATE.md` @ `6d4ce48526e8c1adca6dfaaf3faae7dc4e412046`

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

## Local SDK-response composition candidate — 2026-10-25

FACT: PR119 merged at55690e9b707bc1bb9af6cadd761a916d6e5a6a37 with exact tree
match; [post-main40199221516](https://github.com/Ben-001-sys/Vellistry/actions/runs/40199221516) SUCCESS. Mandatory adapter/12unit/32PG CI is inherited.
Task0058/CP0058 adds an unregistered mock SDK-response bridge and extends the
mandatory spec:18old+18new cases. [Report](docs/reports/VEL-SDK-RESPONSE-BRIDGE-0058.md).
No real SDK client/Auth request, JWT signature/revocation or active-session proof.
Six production decisions remain OWNER_DECISION_PENDING; hosted data UNVERIFIED.
Auth/guard/route/SQL/deps/CI unchanged; separate owner feature merge pending.
Old independent runtime BLOCKED preserved; Issue108 OPEN, delegation EXPIRED;
broad gates unchanged.

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

### `apps/api/src/modules/workspace/workspace-supabase-response-bridge.ts` @ `c114fa51328b965b8daa4022066a6d6d61b1e9f5`

~~~~~~markdown
import {uuid} from "./workspace-contract";
import {checkedPrincipal} from "./workspace-principal";
import type {SyntheticWorkspaceVerificationPort} from "./workspace-principal-adapter";

/** Tests supply SDK-shaped mocks only. No SDK import/client construction, Auth
 * request or production wiring belongs to this compatibility experiment. */
export interface MockSupabaseAuthClient {
 getUser(token:string):Promise<unknown>;
 getClaims(token:string):Promise<unknown>;
}

function own(value:unknown,name:string):unknown {
 if(!value||typeof value!=="object"||Array.isArray(value))throw new Error("Invalid mock response");
 const prototype=Object.getPrototypeOf(value);
 if(prototype!==Object.prototype&&prototype!==null)throw new Error("Invalid mock response");
 const field=Object.getOwnPropertyDescriptor(value,name);
 if(!field||!("value" in field))throw new Error("Invalid mock response");
 return field.value;
}

function data(response:unknown):unknown {
 if(own(response,"error")!==null)throw new Error("Mock authentication failed");
 return own(response,"data");
}

function userId(response:unknown):string {
 return uuid(own(own(data(response),"user"),"id"));
}

function claims(response:unknown){
 const raw=own(data(response),"claims"),exp=own(raw,"exp");
 if(typeof exp!=="number"||!Number.isSafeInteger(exp)||exp<=0||!Number.isSafeInteger(exp*1000))throw new Error("Invalid mock expiry");
 return Object.freeze({sub:uuid(own(raw,"sub")),session_id:uuid(own(raw,"session_id")),exp});
}

const instant=(value:unknown):value is number=>typeof value==="number"&&Number.isSafeInteger(value)&&value>=0;

/** Compose mock responses into the existing synthetic port. Passing the same
 * token to two injected operations is not cryptographic verification or proof
 * of revocation/session liveness. The caller still creates a provider per request.
 * Snapshot each response independently; never retain mutable SDK data or metadata. */
export function createWorkspaceSupabaseResponseBridge(
 client:MockSupabaseAuthClient,
 clock:()=>number=Date.now,
):SyntheticWorkspaceVerificationPort {
 let getUser:MockSupabaseAuthClient["getUser"]|null=null;
 let getClaims:MockSupabaseAuthClient["getClaims"]|null=null;
 try{
  const user=client?.getUser,claim=client?.getClaims;
  if(typeof user==="function"&&typeof claim==="function"){
   getUser=user.bind(client);getClaims=claim.bind(client);
  }
 }catch{/* Invalid injected dependencies deny; there is no fallback client. */}
 return Object.freeze({
  async verify(token:string):Promise<unknown>{
   try{
    const requestToken=token;
    if(typeof requestToken!=="string"||!requestToken.length||requestToken.length>8192
     ||/[\u0000-\u0020\u007f]/u.test(requestToken)||!getUser||!getClaims)return null;
    const started=clock();if(!instant(started))return null;
    // Both operations receive only the captured token, with no session/options
    // fallback. Both rejection paths have handlers even if the other fails first.
    const [id,verifiedClaims]=await Promise.all([
     Promise.resolve().then(()=>getUser!(requestToken)).then(userId),
     Promise.resolve().then(()=>getClaims!(requestToken)).then(claims),
    ]);
    const now=clock();if(!instant(now)||now<started||id!==verifiedClaims.sub)return null;
    // Conservatively retain start time: waiting for the second response must not
    // refresh an earlier observation or hide expiry during asynchronous work.
    if(!checkedPrincipal({authorId:id,sessionId:verifiedClaims.session_id,
     tokenExpiresAt:verifiedClaims.exp*1000,verifiedAt:started},now))return null;
    return Object.freeze({token:requestToken,userId:id,claims:verifiedClaims,verifiedAt:started});
   }catch{return null;}
  },
 });
}
~~~~~~

### `apps/api/src/modules/workspace/workspace-principal-adapter.ts` @ `5084cc167b9f69865aee58aa9ea212c6f4f08ac0`

~~~~~~markdown
import {uuid} from "./workspace-contract";
import {checkedPrincipal, VerifiedPrincipal, WorkspacePrincipalProvider} from "./workspace-principal";

/** Trusted synthetic seam only. A response has own data fields:
 * {token, userId, claims:{sub, session_id, exp}, verifiedAt}.
 * exp is integral seconds; verifiedAt is integral milliseconds.
 * Echoing token is correlation, NOT signature verification or session liveness.
 * No real Auth client, request registration or production verifier is supplied. */
export interface SyntheticWorkspaceVerificationPort {
 verify(token:string):Promise<unknown>;
}

function fields(value:unknown, names:readonly string[]):Record<string,unknown>|null {
 if(!value||typeof value!=="object"||Array.isArray(value))return null;
 const prototype=Object.getPrototypeOf(value);
 if(prototype!==Object.prototype&&prototype!==null)return null;
 const keys=Reflect.ownKeys(value);
 if(keys.length!==names.length||keys.some(k=>typeof k!=="string"||!names.includes(k)))return null;
 const result:Record<string,unknown>=Object.create(null);
 for(const name of names){
  const descriptor=Object.getOwnPropertyDescriptor(value,name);
  if(!descriptor||!("value" in descriptor))return null;
  result[name]=descriptor.value;
 }
 return result;
}

const instant=(value:unknown):value is number=>typeof value==="number"&&Number.isSafeInteger(value)&&value>=0;

/** Create one provider per request with an immutable token and verification method.
 * Every call verifies afresh; successful calls pin subject/session/expiry for this
 * token. Failed calls never reset that binding. A refresh needs a new provider.
 * The injected verifier is trusted to authenticate its response; this adapter only
 * validates/binds that response. Arbitrary caller JSON is not authentication. */
export function createWorkspacePrincipalProvider(
 verificationPort:SyntheticWorkspaceVerificationPort,
 requestToken:unknown,
 clock:()=>number=Date.now,
):WorkspacePrincipalProvider {
 const token=typeof requestToken==="string"&&requestToken.length>0&&requestToken.length<=8192
  &&!/[\u0000-\u0020\u007f]/u.test(requestToken)?requestToken:null;
 let verifyToken:((token:string)=>Promise<unknown>)|null=null;
 try{
  const method=verificationPort?.verify;
  if(typeof method==="function")verifyToken=method.bind(verificationPort);
 }catch{/* Invalid dependency must deny, never select another verification path. */}
 let bound:Readonly<Pick<VerifiedPrincipal,"authorId"|"sessionId"|"tokenExpiresAt">>|null=null;
 return Object.freeze({
  async verify():Promise<VerifiedPrincipal|null>{
   try{
    if(!token||!verifyToken)return null;
    const started=clock();if(!instant(started))return null;
    const response=await verifyToken(token);
    const now=clock();if(!instant(now)||now<started)return null;
    const proof=fields(response,["token","userId","claims","verifiedAt"]);
    if(!proof||proof.token!==token||!instant(proof.verifiedAt))return null;
    const claims=fields(proof.claims,["sub","session_id","exp"]);
    if(!claims||!instant(claims.exp)||claims.exp===0||!Number.isSafeInteger(claims.exp*1000))return null;
    const authorId=uuid(proof.userId);
    if(authorId!==uuid(claims.sub))return null;
    const principal=checkedPrincipal({authorId,sessionId:uuid(claims.session_id),
     tokenExpiresAt:claims.exp*1000,verifiedAt:proof.verifiedAt},now);
    if(!principal)return null;
    if(bound&&(bound.authorId!==principal.authorId||bound.sessionId!==principal.sessionId
     ||bound.tokenExpiresAt!==principal.tokenExpiresAt))return null;
    // No await between checking and pinning: overlapping completions share this
    // request's binding, never a mutable global actor or another request's token.
    bound??=Object.freeze({authorId:principal.authorId,sessionId:principal.sessionId,tokenExpiresAt:principal.tokenExpiresAt});
    return principal;
   }catch{return null;}
  },
 });
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

### `docs/agent-workflow/proposals/VEL-SUPABASE-WORKSPACE-READINESS-0054.json` @ `a964e42067da33e4b3662d6d04adf81088d9a05b`

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

### `docs/agent-workflow/inputs/VEL-TASK-0059/SDK-BOUNDARY-SOURCES.md` @ `24cfde996e425813fcbd6e311fd47007bc0b56e0`

~~~~~~markdown
# Frozen SDK boundary source evidence

FACT: lock resolves supabase-js/auth-js2.117.3. Read source only, no SDK/client invocation or token/JWT experiment. GoTrueClient.ts SHA256 7552500e375665e28acf23fb552ccbf1ef11379afab15859b2f670f1ae9aee9f, lib/helpers.ts SHA256 82025113a07125f319380ec5a510e58544a04f6e3bcf82c6eb8ce3a2cc6b07c5.

## getUser explicit-token path, original lines3223-3291

```ts
  async getUser(jwt?: string): Promise<UserResponse> {
    if (jwt) {
      return await this._getUser(jwt)
    }

    await this.initializePromise

    let result: UserResponse
    if (this.lock != null) {
      // TODO(v3): remove legacy lock path
      result = await this._acquireLock(this.lockAcquireTimeout, async () => {
        return await this._getUser()
      })
    } else {
      result = await this._getUser()
    }

    if (result.data.user) {
      this.suppressGetSessionWarning = true
    }

    return result
  }

  private async _getUser(jwt?: string): Promise<UserResponse> {
    try {
      if (jwt) {
        return await _request(this.fetch, 'GET', `${this.url}/user`, {
          headers: this.headers,
          jwt: jwt,
          xform: _userResponse,
        })
      }

      return await this._useSession(async (result) => {
        const { data, error } = result
        if (error) {
          throw error
        }

        // returns an error if there is no access_token or custom authorization header
        if (!data.session?.access_token && !this.hasCustomAuthorizationHeader) {
          return { data: { user: null }, error: new AuthSessionMissingError() }
        }

        return await _request(this.fetch, 'GET', `${this.url}/user`, {
          headers: this.headers,
          jwt: data.session?.access_token ?? undefined,
          xform: _userResponse,
        })
      })
    } catch (error) {
      if (isAuthError(error)) {
        if (isAuthSessionMissingError(error)) {
          // JWT contains a `session_id` which does not correspond to an active
          // session in the database, indicating the user is signed out.

          await this._removeSession()
        }

        return this._returnResult({ data: { user: null }, error })
      }

      throw error
    }
  }

  /**
   * Updates user data for a logged in user.
```

## JWK lookup/cache, original lines6587-6648

```ts
  private async fetchJwk(kid: string, jwks: { keys: JWK[] } = { keys: [] }): Promise<JWK | null> {
    // try fetching from the supplied jwks
    let jwk = jwks.keys.find((key) => key.kid === kid)
    if (jwk) {
      return jwk
    }

    const now = Date.now()

    // try fetching from cache
    jwk = this.jwks.keys.find((key) => key.kid === kid)

    // jwk exists and jwks isn't stale
    if (jwk && this.jwks_cached_at + JWKS_TTL > now) {
      return jwk
    }
    // jwk isn't cached in memory so we need to fetch it from the well-known endpoint
    const { data, error } = await _request(this.fetch, 'GET', `${this.url}/.well-known/jwks.json`, {
      headers: this.headers,
    })
    if (error) {
      throw error
    }
    if (!data.keys || data.keys.length === 0) {
      return null
    }

    this.jwks = data
    this.jwks_cached_at = now

    // Find the signing key
    jwk = data.keys.find((key: any) => key.kid === kid)
    if (!jwk) {
      return null
    }
    return jwk
  }

  /**
   * Extracts the JWT claims present in the access token by first verifying the
   * JWT against the server's JSON Web Key Set endpoint
   * `/.well-known/jwks.json` which is often cached, resulting in significantly
   * faster responses. Prefer this method over {@link GoTrueClient.getUser} which always
   * sends a request to the Auth server for each JWT.
   *
   * If the project is not using an asymmetric JWT signing key (like ECC or
   * RSA) it always sends a request to the Auth server (similar to
   * {@link GoTrueClient.getUser}) to verify the JWT.
   *
   * @param jwt An optional specific JWT you wish to verify, not the one you
   *            can obtain from {@link GoTrueClient.getSession}.
   * @param options Various additional options that allow you to customize the
   *                behavior of this method.
   *
   * @category Auth
   *
   * @remarks
   * - Parses the user's [access token](/docs/guides/auth/sessions#access-token-jwt-claims) as a [JSON Web Token (JWT)](/docs/guides/auth/jwts) and returns its components if valid and not expired.
   * - If your project is using asymmetric JWT signing keys, then the verification is done locally usually without a network request using the [WebCrypto API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API).
   * - A network request is sent to your project's JWT signing key discovery endpoint `https://project-id.supabase.co/auth/v1/.well-known/jwks.json`, which is cached locally. If your environment is ephemeral, such as a Lambda function that is destroyed after every request, a network request will be sent for each new invocation. Supabase provides a network-edge cache providing fast responses for these situations.
   * - If the user's access token is about to expire when calling this function, the user's session will first be refreshed before validating the JWT.
   * - If your project is using a symmetric secret to sign the JWT, it always sends a request similar to `getUser()` to validate the JWT at the server before returning the decoded token. This is also used if the WebCrypto API is not available in the environment. Make sure you polyfill it in such situations.
```

## getClaims verification paths, original lines6690-6802

```ts
  async getClaims(
    jwt?: string,
    options: {
      /**
       * @deprecated Please use options.jwks instead.
       */
      keys?: JWK[]

      /** If set to `true` the `exp` claim will not be validated against the current time. */
      allowExpired?: boolean

      /** If set, this JSON Web Key Set is going to have precedence over the cached value available on the server. */
      jwks?: { keys: JWK[] }
    } = {}
  ): Promise<
    | {
        data: { claims: JwtPayload; header: JwtHeader; signature: Uint8Array }
        error: null
      }
    | { data: null; error: AuthError }
    | { data: null; error: null }
  > {
    try {
      let token = jwt
      if (!token) {
        const { data, error } = await this.getSession()
        if (error || !data.session) {
          return this._returnResult({ data: null, error })
        }
        token = data.session.access_token
      }

      const {
        header,
        payload,
        signature,
        raw: { header: rawHeader, payload: rawPayload },
      } = decodeJWT(token)

      if (!options?.allowExpired) {
        // Reject expired JWTs should only happen if jwt argument was passed.
        // Rethrow as AuthInvalidJwtError so the outer catch converts it to { data, error }.
        try {
          validateExp(payload.exp)
        } catch (e) {
          throw new AuthInvalidJwtError(e instanceof Error ? e.message : 'JWT validation failed')
        }
      }

      const signingKey =
        !header.alg ||
        header.alg.startsWith('HS') ||
        !header.kid ||
        !('crypto' in globalThis && 'subtle' in globalThis.crypto)
          ? null
          : await this.fetchJwk(header.kid, options?.keys ? { keys: options.keys } : options?.jwks)

      // If symmetric algorithm or WebCrypto API is unavailable, fallback to getUser()
      if (!signingKey) {
        const { error } = await this.getUser(token)
        if (error) {
          throw error
        }
        // getUser succeeds so the claims in the JWT can be trusted
        return {
          data: {
            claims: payload,
            header,
            signature,
          },
          error: null,
        }
      }

      const algorithm = getAlgorithm(header.alg)

      // Convert JWK to CryptoKey
      const publicKey = await crypto.subtle.importKey('jwk', signingKey, algorithm, true, [
        'verify',
      ])

      // Verify the signature
      const isValid = await crypto.subtle.verify(
        algorithm,
        publicKey,
        signature,
        stringToUint8Array(`${rawHeader}.${rawPayload}`)
      )

      if (!isValid) {
        throw new AuthInvalidJwtError('Invalid JWT signature')
      }

      // If verification succeeds, decode and return claims
      return {
        data: {
          claims: payload,
          header,
          signature,
        },
        error: null,
      }
    } catch (error) {
      if (isAuthError(error)) {
        return this._returnResult({ data: null, error })
      }
      throw error
    }
  }

  // --- Passkey Methods ---

  /**
```

## validateExp, original helper lines534-551

```ts
export function validateExp(exp: number) {
  if (!exp) {
    throw new Error('Missing exp claim')
  }
  const timeNow = Math.floor(Date.now() / 1000)
  if (exp <= timeNow) {
    throw new Error('JWT has expired')
  }
}

export function getAlgorithm(
  alg: 'HS256' | 'RS256' | 'ES256' | (string & {})
): RsaHashedImportParams | EcKeyImportParams {
  switch (alg) {
    case 'RS256':
      return {
        name: 'RSASSA-PKCS1-v1_5',
        hash: { name: 'SHA-256' },
```

INTERPRETATION: getClaims has local signature and Auth-server fallback paths, neither establishes atomic writable-session authorization. In this method body there is no explicit issuer/audience/nbf check; application policy must not infer those from a successful call. SDK handling of a server SessionMissing error is not an observation of current target logout behavior.
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0059/OWNER-SCOPE.md` @ `3f98982befe31a1267f34c2133d349b7d039eb83`

~~~~~~markdown
# Owner principal-boundary packet authorization relay

Direct owner instruction2026-10-25 indexed at https://github.com/Ben-001-sys/Vellistry/issues/108#issuecomment-6399215201 . Codex relay, not fabricated human approval. PR120 approved exact8faeae4be12d70bdd071bbf83a3465e71c682da6 and mergedacf7f796014907cc08dfc25ccab5763caa002d1b with identical tree688f7dd4c663675e1344bff6910c0b696d5bac22. Post-main40204760911 pending at source preparation; require actual success before final delivery and record separately, not change immutable input.

Owner authorizes preparation-only implementation-ready decision packet for real Supabase principal boundary: frozen SDK, existing Auth service/guard and synthetic bridge; same-token subject/session/expiration, cryptographic versus Auth-server versus active-session/revocation distinctions, smallest local-only next Task/exact paths/negative cases/owner decisions. No implementation or resolution of six pending production decisions. New unique Task/CP before effective docs; sources and findings FACT/INTERPRETATION/PROPOSAL separate.

Only Task/CP/EB/inputs, proposal packet, report/evidence, active manifest and required current-state record. No app/Auth/guard/SDK/dependency/CI/SQL/RLS/grant/route change; no credentials/hosted queries, real Auth/JWT/signing/JWKS experiments/users, private/paid/deployment/settings or automatic PR merge. Public docs and frozen installed SDK source may be read as evidence, no actual SDK methods or project endpoints invoked. Proposed next Task unallocated and NOT_AUTHORIZED until owner approves exact local scope and fresh immutable pack. All six production decisions pending, hosted observations UNVERIFIED, Issue108 OPEN, remediation delegation EXPIRED; broad gates unchanged.
~~~~~~

## Execution reporting
Return an ExecutionBundle with FACT / INTERPRETATION / PROPOSAL sections,
tests actually performed, changes, evidence gaps, and pending owner approval.
