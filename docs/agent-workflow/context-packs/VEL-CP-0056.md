---
id: VEL-CP-0056
title: 'Context for VEL-TASK-0056: Implement request-isolated synthetic principal-binding
  adapter'
type: context-pack
status: prepared
created_at: '2026-10-25'
version: 0.1.0
task_id: VEL-TASK-0056
base_commit: 151e26ebf2f745876d7152cb3da1922eda402792
task_blob_sha: 7f36f7ae2879ca1602d648824715d0d01e074d1b
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
  git_blob_sha: 3f22a64e2bf44f8204903e01e83dd026cd2d06b1
  source_status: active
- path: docs/agent-workflow/PR-COMPLIANCE.md
  role: governing-source
  git_blob_sha: 5f4845623aef3abb15fba7fbe8e78474902cca00
  source_status: unrecorded
- path: docs/agent-workflow/proposals/VEL-IMP002-PRINCIPAL-BINDING-HANDOFF-0055.json
  role: governing-source
  git_blob_sha: 71955335352ce1d16f0a4db39a5ae29367790f64
  source_status: unrecorded
- path: apps/api/src/modules/workspace/workspace-principal.ts
  role: governing-source
  git_blob_sha: 56b41b1a61599624569d4bb32f164fbb066f2cff
  source_status: unrecorded
- path: apps/api/src/modules/workspace/workspace.service.ts
  role: governing-source
  git_blob_sha: 5c76937699f1c1318b76ea503c91fe6f8ba3b8ac
  source_status: unrecorded
- path: apps/api/src/modules/workspace/workspace-contract.ts
  role: governing-source
  git_blob_sha: 346aa008fab312ded99998a28db43ca2e0854f94
  source_status: unrecorded
- path: apps/api/package.json
  role: governing-source
  git_blob_sha: fc07a6cc2702d47fa352e2a484651fcea28f3fd0
  source_status: unrecorded
- path: apps/api/tsconfig.json
  role: governing-source
  git_blob_sha: a3f85b82d25eafd312ca2e3836911262108136ef
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0056/OWNER-SCOPE.md
  role: governing-source
  git_blob_sha: 5f9b2c71470a206194bd9b5c7793acaa87e17906
  source_status: unrecorded
source_gaps:
- id: SYNTHETIC-ONLY
  limitation: Injected response correlation is not JWT verification, real session
    revocation, writable-session proof or hosted acceptance.
- id: CI-SELECTION
  limitation: Existing fixed-file CI does not select the new adapter spec; explicit
    local execution required, no CI change authorized.
prepared_by: agent_workflow.py
---

# VEL-CP-0056 — Implement request-isolated synthetic principal-binding adapter

## Objective
Implement and test PB01-10 in exactly two new application files with injected same-token verified responses only; no Auth/production integration

## Scope
**In:** apps/api/src/modules/workspace/workspace-principal-adapter.ts; apps/api/src/modules/workspace/workspace-principal-adapter.spec.ts; CURRENT-STATE.md; docs/agent-workflow/tasks/VEL-TASK-0056.yaml; docs/agent-workflow/context-packs/VEL-CP-0056.md; docs/agent-workflow/execution-bundles/VEL-EB-0056.md; docs/agent-workflow/inputs/VEL-TASK-0056/*; docs/agent-workflow/PR-COMPLIANCE.yaml; docs/reports/VEL-PRINCIPAL-BINDING-0056.md; docs/reports/evidence/VEL-TASK-0056/*
**Out:** Existing Auth/service/module/controller/route/SQL/grant/CI/dependency changes; Hosted access/credentials/liveJWT/users/private/paid/deployment/settings and production persistence; Six pending production security decisions and automatic feature merge

## Evidence and authority constraints
The text below is a readable rendering of pinned Git blobs; exact raw bytes remain recoverable from the recorded commit/blob SHAs. Recorded source statuses remain in force: draft research is not accepted requirements. Original unarchived uploads are not independently verified merely by being mentioned.

**Known source gaps:**
- SYNTHETIC-ONLY: Injected response correlation is not JWT verification, real session revocation, writable-session proof or hosted acceptance.
- CI-SELECTION: Existing fixed-file CI does not select the new adapter spec; explicit local execution required, no CI change authorized.

## Permissions and acceptance
**Allowed:** Read pinned sources and implement only scoped files after committed validated pack and successful post-main CI, Run frozen tools, injected synthetic tests, builds/typechecks/governance; actual inherited disposable CI only, Submit Draft PR, obtain distinct trusted review, promote Ready and verify exact-head CI; no merge
**Owner approval required:** Any Auth/production/hosted/SQL/CI/dependency/scope change; real security choices; feature PR merge
**Acceptance criteria:**
- PB-01: Valid injected same-token user/claims produces immutable principal under existing types/freshness policy
- PB-02: Missing token or verification failure/errors/malformed response denies; no decoded token fallback
- PB-03: Verified userId must equal verified claims subject; invalid/missing session id denies
- PB-04: Expired token, stale/future verifiedAt and invalid/nonfinite timestamps deny without relaxing existing checkedPrincipal
- PB-05: Concurrent and out-of-order requests for two authors remain isolated; verifier receives only its own immutable request token
- PB-06: Token switch/mismatched verification correlation denies; refresh creates a new request-scoped provider, never mutates another
- PB-07: Post-async verification rechecks time and identity; caller cannot mutate returned principal or influence another request
- PB-08: Unit tests use injected synthetic verification responses and clock only, no network/database/environment credentials/JWT signing
- PB-09: No module registration/controller/route/pool/SQL/managed-session privileges/real Auth implementation; no dependency or CI changes
- PB-10: Existing12focused/32PG and all applicable governance/security/recovery gates remain unchanged; distinct review and separate owner feature merge
- All existing production/application/Auth/SQL/CI/dependency sources unchanged; original54/55 and all historical evidence preserved

## Deliverables
- Committed validated immutable Task56/CP56 before code
- Two-file adapter and synthetic tests with PB01-10 evidence
- Actual frozen install/focused/regressions/build/typecheck/governance checks, EB/provenance
- Distinct exact-head review, actual readyCI and new PR for separate owner merge

## Pinned source snapshots
Git commit: `151e26ebf2f745876d7152cb3da1922eda402792`. Read source statuses independently from task intent.

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

### `CURRENT-STATE.md` @ `3f22a64e2bf44f8204903e01e83dd026cd2d06b1`

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

## Persistence CI integration and readiness reconciliation — 2026-10-25

FACT: PR117 merged at fd85deb9a31af8663c85977df896e79b0e370eec with exact
reviewed-tree equality. Task53's mandatory12unit+32PG coverage is inherited unchanged;
[post-main40188047497](https://github.com/Ben-001-sys/Vellistry/actions/runs/40188047497) SUCCESS verifies actual execution.
Task52's synthetic experiment and independently BLOCKED runtime history are preserved.
Task0055/CP0055 reconciles PR116, preserving Task54/CP54/EB54,8source/15query hashes
and six OWNER_DECISION_PENDING choices. [Report](docs/reports/VEL-PR116-RECONCILIATION-0055.md).
The next request-isolated synthetic principal-binding adapter is PROPOSED, not authorized.
No hosted observations, Auth/SQL/route/dependency/CI changes or real logout acceptance.
PR116 owner merge remains pending; broad gates unchanged; delegation EXPIRED; Issue108 OPEN.

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

### `docs/agent-workflow/proposals/VEL-IMP002-PRINCIPAL-BINDING-HANDOFF-0055.json` @ `71955335352ce1d16f0a4db39a5ae29367790f64`

~~~~~~markdown
{
  "id": "VEL-IMP002-PRINCIPAL-BINDING-HANDOFF-0055",
  "status": "PROPOSED_NOT_AUTHORIZED",
  "next_task_id": null,
  "title": "Request-isolated synthetic verified-principal binding adapter",
  "authorization_required": true,
  "source_base": "fd85deb9a31af8663c85977df896e79b0e370eec",
  "prerequisites": [
    "Owner authorizes exact two implementation files and synthetic scope",
    "Allocate new unique Task and commit/validate immutable ContextPack before code",
    "Recheck then-current main and preserve accepted Task52 contract and Auth architecture"
  ],
  "implementation_paths": [
    "apps/api/src/modules/workspace/workspace-principal-adapter.ts",
    "apps/api/src/modules/workspace/workspace-principal-adapter.spec.ts"
  ],
  "supporting_paths": "New task/pack/EB/inputs, report/evidence and PR manifest only; no existing production file changes",
  "design_proposal": {
    "factory": "createWorkspacePrincipalProvider(verificationPort, requestToken, clock)",
    "lifetime": "One immutable provider closure per request; no singleton actor/token state or mutable global request slot",
    "injected_verifier": "Trusted synthetic verificationPort.verify(exactToken) returns verified userId plus verified claims sub/session_id/exp and verification time from same-token verification. No caller-supplied identity; correlation with that exact request token is explicit at seam.",
    "validation": "Fail closed on absent/error/malformed proof, subject disagreement, invalid UUID/session, expired/future/stale evidence and nonfinite values; return immutable VerifiedPrincipal compatible with existing checkedPrincipal",
    "limits": "This is binding and validation of injected verification responses only, not JWT cryptography/getClaims/getUser integration or real session validation. The production verifier API remains OWNER_DECISION_PENDING; arbitrary JSON does not authenticate a user."
  },
  "acceptance": [
    {
      "id": "PB-01",
      "requirement": "Valid injected same-token user/claims produces immutable principal under existing types/freshness policy"
    },
    {
      "id": "PB-02",
      "requirement": "Missing token or verification failure/errors/malformed response denies; no decoded token fallback"
    },
    {
      "id": "PB-03",
      "requirement": "Verified userId must equal verified claims subject; invalid/missing session id denies"
    },
    {
      "id": "PB-04",
      "requirement": "Expired token, stale/future verifiedAt and invalid/nonfinite timestamps deny without relaxing existing checkedPrincipal"
    },
    {
      "id": "PB-05",
      "requirement": "Concurrent and out-of-order requests for two authors remain isolated; verifier receives only its own immutable request token"
    },
    {
      "id": "PB-06",
      "requirement": "Token switch/mismatched verification correlation denies; refresh creates a new request-scoped provider, never mutates another"
    },
    {
      "id": "PB-07",
      "requirement": "Post-async verification rechecks time and identity; caller cannot mutate returned principal or influence another request"
    },
    {
      "id": "PB-08",
      "requirement": "Unit tests use injected synthetic verification responses and clock only, no network/database/environment credentials/JWT signing"
    },
    {
      "id": "PB-09",
      "requirement": "No module registration/controller/route/pool/SQL/managed-session privileges/real Auth implementation; no dependency or CI changes"
    },
    {
      "id": "PB-10",
      "requirement": "Existing12focused/32PG and all applicable governance/security/recovery gates remain unchanged; distinct review and separate owner feature merge"
    }
  ],
  "commands": [
    "corepack pnpm --filter @vellistry/api exec tsx --test src/modules/workspace/workspace-principal-adapter.spec.ts",
    "corepack pnpm --filter @vellistry/api exec tsx --test src/modules/workspace/workspace-contract.spec.ts",
    "corepack pnpm test:workspace-contract",
    "corepack pnpm check",
    "corepack pnpm build",
    "python scripts/ci_governance.py",
    "Existing applicable ready-state CI including unchanged32-case disposable PG17 runner"
  ],
  "reserved_decisions": {
    "PRINCIPAL": "OWNER_DECISION_PENDING",
    "SESSION": "OWNER_DECISION_PENDING",
    "GATEWAY": "OWNER_DECISION_PENDING",
    "PACKAGING": "OWNER_DECISION_PENDING",
    "RECONCILIATION": "OWNER_DECISION_PENDING",
    "TRANSPORT": "OWNER_DECISION_PENDING"
  },
  "hosted_observations": "UNVERIFIED",
  "forbidden": [
    "Hosted queries/credentials/real Auth users/live JWT probes",
    "Real session UPDATE/lock grants and production credential provisioning",
    "Shipping SQL/migrations/grants/RLS",
    "Production routes/Auth rewiring",
    "Private manuscripts/paid APIs/deployment",
    "Automatic merge/broad gate promotion"
  ]
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

### `apps/api/src/modules/workspace/workspace-contract.ts` @ `346aa008fab312ded99998a28db43ca2e0854f94`

~~~~~~markdown
import {createHash} from "node:crypto";

export type Command = {kind:"create";title:string}|{kind:"rename";chapterId:string;title:string}|
 {kind:"reorder";chapterIds:string[]}|{kind:"book-notes";body:string}|{kind:"chapter-notes";chapterId:string;body:string};
export type Operation = {schemaVersion:1;operationId:string;expectedVersion:number;command:Command};
export type Receipt = {schemaVersion:1;operationId:string;bookId:string;outcome:"confirmed"|"rejected";version:number;createdChapterId?:string;reason?:"invalid"|"conflict"};
export type Workspace = {bookId:string;bookTitle:string;version:number;notes:string;chapters:{id:string;bookId:string;title:string;notes:string}[]};
export class InvalidWorkspaceInput extends Error {}
export function uuid(value:unknown):string {
 if(typeof value!=="string"||! /^[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}$/i.test(value))throw new InvalidWorkspaceInput("Invalid identifier");
 return value.toLowerCase();
}
export function text(value:unknown,max:number,trim=false):string {
 if(typeof value!=="string"||/\u0000|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?<![\uD800-\uDBFF])[\uDC00-\uDFFF]/u.test(value))throw new InvalidWorkspaceInput("Invalid text");
 const result=trim?value.trim():value;
 if(result.length>max||(trim&&!result.length))throw new InvalidWorkspaceInput("Text length");
 return result;
}
function object(value:unknown):Record<string,unknown> {
 if(!value||typeof value!=="object"||Array.isArray(value)||![Object.prototype,null].includes(Object.getPrototypeOf(value)))throw new InvalidWorkspaceInput("Invalid object");
 return value as Record<string,unknown>;
}
function keys(value:Record<string,unknown>,expected:string[]) {
 if(Object.keys(value).sort().join("|")!==expected.slice().sort().join("|"))throw new InvalidWorkspaceInput("Unexpected fields");
}
export function version(value:unknown):number {
 if(typeof value!=="number"||!Number.isSafeInteger(value)||value<0)throw new InvalidWorkspaceInput("Invalid version");
 return value;
}
export function operation(value:unknown):Operation {
 const raw=object(value);keys(raw,["schemaVersion","operationId","expectedVersion","command"]);
 if(raw.schemaVersion!==1)throw new InvalidWorkspaceInput("Invalid schema");
 const c=object(raw.command);let command:Command;
 switch(c.kind){
  case "create": keys(c,["kind","title"]);command={kind:c.kind,title:text(c.title,180,true)};break;
  case "rename": keys(c,["kind","chapterId","title"]);command={kind:c.kind,chapterId:uuid(c.chapterId),title:text(c.title,180,true)};break;
  case "reorder": keys(c,["kind","chapterIds"]);if(!Array.isArray(c.chapterIds)||c.chapterIds.length>1000)throw new InvalidWorkspaceInput("Invalid order");
   command={kind:c.kind,chapterIds:c.chapterIds.map(uuid)};if(new Set(command.chapterIds).size!==command.chapterIds.length)throw new InvalidWorkspaceInput("Duplicate chapter");break;
  case "book-notes": keys(c,["kind","body"]);command={kind:c.kind,body:text(c.body,10000)};break;
  case "chapter-notes": keys(c,["kind","chapterId","body"]);command={kind:c.kind,chapterId:uuid(c.chapterId),body:text(c.body,10000)};break;
  default: throw new InvalidWorkspaceInput("Unknown command");
 }
 const result:Operation={schemaVersion:1,operationId:uuid(raw.operationId),expectedVersion:version(raw.expectedVersion),command};
 if(Buffer.byteLength(JSON.stringify(value),"utf8")>131072)throw new InvalidWorkspaceInput("Request too large");
 return result;
}
export function canonicalRequest(bookId:string,op:Operation):string {
 return JSON.stringify({schemaVersion:1,bookId:uuid(bookId),expectedVersion:op.expectedVersion,command:op.command});
}
export function requestDigest(bookId:string,op:Operation):string {return createHash("sha256").update(canonicalRequest(bookId,op),"utf8").digest("hex");}
export function receipt(value:unknown,bookId:string,operationId:string):Receipt {
 const r=object(value);const expected=["schemaVersion","operationId","bookId","outcome","version"];
 if(r.createdChapterId!==undefined)expected.push("createdChapterId");if(r.reason!==undefined)expected.push("reason");keys(r,expected);
 if(r.schemaVersion!==1||r.bookId!==bookId||r.operationId!==operationId||typeof r.outcome!=="string"||!["confirmed","rejected"].includes(r.outcome))throw new InvalidWorkspaceInput("Invalid acknowledgement");
 version(r.version);if(r.createdChapterId!==undefined)uuid(r.createdChapterId);
 if(r.outcome==="rejected"&&(typeof r.reason!=="string"||!["invalid","conflict"].includes(r.reason)))throw new InvalidWorkspaceInput("Invalid rejection");
 if(r.outcome==="confirmed"&&r.reason!==undefined)throw new InvalidWorkspaceInput("Invalid confirmation");
 return r as unknown as Receipt;
}
export function workspace(value:unknown,bookId:string):Workspace {
 const w=object(value);keys(w,["bookId","bookTitle","version","notes","chapters"]);
 if(w.bookId!==bookId||!Array.isArray(w.chapters)||w.chapters.length>1000)throw new InvalidWorkspaceInput("Invalid snapshot");
 version(w.version);text(w.bookTitle,120,true);text(w.notes,10000);
 const ids=new Set<string>();for(const raw of w.chapters){const c=object(raw);keys(c,["id","bookId","title","notes"]);const id=uuid(c.id);
  if(ids.has(id)||c.bookId!==bookId)throw new InvalidWorkspaceInput("Invalid chapter scope");ids.add(id);text(c.title,180,true);text(c.notes,10000);}
 return w as unknown as Workspace;
}
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

### `apps/api/tsconfig.json` @ `a3f85b82d25eafd312ca2e3836911262108136ef`

~~~~~~markdown
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "CommonJS",
    "moduleResolution": "Node",
    "lib": [
      "ES2022",
      "DOM"
    ],
    "outDir": "./dist",
    "rootDir": "./src",
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true,
    "noImplicitAny": true,
    "forceConsistentCasingInFileNames": true
  }
}
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0056/OWNER-SCOPE.md` @ `5f9b2c71470a206194bd9b5c7793acaa87e17906`

~~~~~~markdown
# Task0056 owner implementation dispatch

Direct owner instruction2026-10-25 indexed at https://github.com/Ben-001-sys/Vellistry/issues/108#issuecomment-6397184398 . Codex relay, not fabricated human GitHub approval. PR116 exact33e6c404cb3630c2bc3325913f8704c716b52c02 approved and merged e2862c38d03e2bbb6fe4365c3c9074ee0c53e972 with identical tree88d37f88f2285284325dbdb550166f9f3a9fb902; post-main40189902635 pending at preparation, require success before feature-code implementation.

Owner authorizes exactly apps/api/src/modules/workspace/workspace-principal-adapter.ts and workspace-principal-adapter.spec.ts plus new Task/immutableCP/EB/inputs/report/evidence/manifest and required compact current-state update. Implement the handoff0055 PB01-10 using only injected synthetic same-token verification responses, request-isolated immutable token/provider, strict malformed/identity/session/time validation, concurrency and post-async revalidation/immutability. Reuse existing WorkspacePrincipalProvider/checkedPrincipal; no change to existing files or freshness semantics. Correlation at a trusted test seam is not JWT signature or actual Supabase session verification.

All six production security decisions remain OWNER_DECISION_PENDING. No existing Auth/service/module/route edits, SQL/migration/grants, credentials/hosted/liveJWT, dependency/CI/settings, private manuscript, paid/deployment or broad gate promotion. Existing fixed-file CI does not discover this new test file: execute the focused command explicitly locally; preserve inherited12unit/32PG CI, record actual ready results, do not claim new suite is automatic. New feature PR requires separate owner merge decision. Issue108 remains open; remediation delegation EXPIRED.
~~~~~~

## Execution reporting
Return an ExecutionBundle with FACT / INTERPRETATION / PROPOSAL sections,
tests actually performed, changes, evidence gaps, and pending owner approval.
