---
id: VEL-CP-0058
title: 'Context for VEL-TASK-0058: Implement local mock Supabase SDK-response bridge'
type: context-pack
status: prepared
created_at: '2026-10-25'
version: 0.1.0
task_id: VEL-TASK-0058
base_commit: 080c9ef9080cdfbcd740fc40a26554707b1acce3
task_blob_sha: f693da35c5ab1ea3fac121c6adc7372ce6fb5d9e
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
  git_blob_sha: 73a7d7fb9cfe5d71fa03b53ec03d2b99a7771871
  source_status: active
- path: docs/agent-workflow/PR-COMPLIANCE.md
  role: governing-source
  git_blob_sha: 5f4845623aef3abb15fba7fbe8e78474902cca00
  source_status: unrecorded
- path: apps/api/src/modules/workspace/workspace-principal-adapter.ts
  role: governing-source
  git_blob_sha: 5084cc167b9f69865aee58aa9ea212c6f4f08ac0
  source_status: unrecorded
- path: apps/api/src/modules/workspace/workspace-principal-adapter.spec.ts
  role: governing-source
  git_blob_sha: 0c89f4fe462a963ad8ec539071114501ac2bce5c
  source_status: unrecorded
- path: apps/api/src/modules/workspace/workspace-principal.ts
  role: governing-source
  git_blob_sha: 56b41b1a61599624569d4bb32f164fbb066f2cff
  source_status: unrecorded
- path: apps/api/src/modules/workspace/workspace-contract.ts
  role: governing-source
  git_blob_sha: 346aa008fab312ded99998a28db43ca2e0854f94
  source_status: unrecorded
- path: apps/api/src/modules/auth/supabase-auth.service.ts
  role: governing-source
  git_blob_sha: 77bbb0b76943a6a67cbb52beb7b074430753c655
  source_status: unrecorded
- path: apps/api/package.json
  role: governing-source
  git_blob_sha: fc07a6cc2702d47fa352e2a484651fcea28f3fd0
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0058/SDK-CONTRACT.md
  role: governing-source
  git_blob_sha: 494e36c0a00ec4baab5168f667cc1d855af9fc19
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0058/OWNER-SCOPE.md
  role: governing-source
  git_blob_sha: 257bcea8cc0e16a4fbe9c295ee1d3668da372c72
  source_status: unrecorded
source_gaps:
- id: MOCK-ONLY
  limitation: SDK-shaped mocks do not verify real JWT signatures, live SDK/network
    behavior, revocation or active sessions. Production decisions remain pending.
prepared_by: agent_workflow.py
---

# VEL-CP-0058 — Implement local mock Supabase SDK-response bridge

## Objective
Compose injected mock SDK responses into existing synthetic verification port, validate complete same-token proof and preserve immutable isolated principal binding

## Scope
**In:** apps/api/src/modules/workspace/workspace-supabase-response-bridge.ts; apps/api/src/modules/workspace/workspace-principal-adapter.spec.ts; CURRENT-STATE.md; docs/agent-workflow/tasks/VEL-TASK-0058.yaml; docs/agent-workflow/context-packs/VEL-CP-0058.md; docs/agent-workflow/execution-bundles/VEL-EB-0058.md; docs/agent-workflow/inputs/VEL-TASK-0058/*; docs/agent-workflow/PR-COMPLIANCE.yaml; docs/reports/VEL-SDK-RESPONSE-BRIDGE-0058.md; docs/reports/evidence/VEL-TASK-0058/*
**Out:** Real Auth/client initialization/network/credentials/JWT signing/hosted probes; Existing Auth/guard/adapter implementation/module/route/SQL/grants/RLS/dependency/CI changes; Production principal/session/gateway/writable authorization or automatic merge

## Evidence and authority constraints
The text below is a readable rendering of pinned Git blobs; exact raw bytes remain recoverable from the recorded commit/blob SHAs. Recorded source statuses remain in force: draft research is not accepted requirements. Original unarchived uploads are not independently verified merely by being mentioned.

**Known source gaps:**
- MOCK-ONLY: SDK-shaped mocks do not verify real JWT signatures, live SDK/network behavior, revocation or active sessions. Production decisions remain pending.

## Permissions and acceptance
**Allowed:** Read pinned repository/frozen SDK source and public official docs, edit only approved paths after committed validated pack, Run injected mock/synthetic tests, frozen install/build/check/governance and inherited disposable CI; no live verifier, Publish Draft, obtain distinct trusted read-only source review, promote Ready and verify exact-head CI; no merge
**Owner approval required:** Any real client/Auth/hosted/credential/JWT/SQL/session grant/route/dependency/CI or scope change; Any production decision or feature PR merge
**Acceptance criteria:**
- Both injected methods receive exact same request-local immutable token; no getSession/decoded fallback, options override or real SDK init
- Require successful complete SDK-shaped own-data user/claims responses; reject mismatch/invalid UUID session/expiry/errors/partial/contradictory proof without coercion
- Snapshot each arriving response, handle reversed completion/client throw/rejection/mutation and concurrent authors without shared request state
- Validate expiry/freshness after both responses, retain conservative verification start timestamp; existing provider immutable author/session/expiry binding preserved
- All18existing cases unchanged except new import; append bridge mocks/negative async cases in mandatory spec; no real network/JWT/credential operations
- Only approved app paths change; Auth/guard/module/route/SQL/deps/CI and historical task/pack/bundle evidence unchanged
- Actual extended mandatory tests,12unit/32PG, existing app/security/recovery/governance/build/check pass; distinct final-head review and no auto merge

## Deliverables
- Unique committed Task and validated immutable CP before code
- One unregistered bridge, extended existing mandatory spec retaining18old cases
- Actual focused/12unit/regressions/frozen/build/check/governance/32PG readyCI evidence and EB/provenance
- Distinct exact-head review and new Ready PR for separate owner merge

## Pinned source snapshots
Git commit: `080c9ef9080cdfbcd740fc40a26554707b1acce3`. Read source statuses independently from task intent.

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

### `CURRENT-STATE.md` @ `73a7d7fb9cfe5d71fa03b53ec03d2b99a7771871`

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

## Principal binding integration and CI coverage candidate — 2026-10-25

FACT: PR118 merged at4792628b309560e7bd0fdebf371b939163733364 with exact
reviewed-tree equality; [post-main40195269872](https://github.com/Ben-001-sys/Vellistry/actions/runs/40195269872) SUCCESS.
Task56/CP56/EB56 and source-bound18local tests preserved; independent runtime
spawnEPERM remains BLOCKED. No production JWT/session verification is established.
Task0057/CP0057 proposes mandatory18adapter tests in existing application CI;
[report](docs/reports/VEL-PRINCIPAL-ADAPTER-CI-0057.md). Existing12unit/32PG and
security/recovery/governance checks are preserved. Successor owner merge pending.
No app/Auth/SQL/dependency/hosted change; six production choices remain pending.
Issue108 OPEN, remediation delegation EXPIRED; broad gates unchanged.

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

### `apps/api/src/modules/workspace/workspace-principal-adapter.spec.ts` @ `0c89f4fe462a963ad8ec539071114501ac2bce5c`

~~~~~~markdown
import assert from "node:assert/strict";
import {test} from "node:test";
import {checkedPrincipal} from "./workspace-principal";
import {createWorkspacePrincipalProvider, SyntheticWorkspaceVerificationPort} from "./workspace-principal-adapter";

const AUTHOR_A="aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa";
const AUTHOR_B="bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb";
const SESSION_A="11111111-1111-1111-1111-111111111111";
const SESSION_B="22222222-2222-2222-2222-222222222222";
const TOKEN_A="synthetic-token-A", TOKEN_B="synthetic-token-B", NOW=100000;
function proof(token=TOKEN_A, userId=AUTHOR_A, sessionId=SESSION_A, verifiedAt=NOW){
 return {token,userId,claims:{sub:userId,session_id:sessionId,exp:200},verifiedAt};
}
function provider(value:unknown, clock=()=>NOW){
 return createWorkspacePrincipalProvider({verify:async()=>value},TOKEN_A,clock);
}
function deferred(){
 let resolve!:(value:unknown)=>void;
 const promise=new Promise<unknown>(r=>{resolve=r;});
 return {promise,resolve};
}

test("PB-01: valid synthetic same-token proof yields the existing immutable principal shape",async()=>{
 const p=await provider(proof()).verify();
 assert.deepEqual(p,{authorId:AUTHOR_A,sessionId:SESSION_A,tokenExpiresAt:200000,verifiedAt:NOW});
 assert.ok(Object.isFrozen(p));assert.deepEqual(checkedPrincipal(p,NOW),p);
});

test("PB-02: invalid tokens deny without consulting the injected verifier",async()=>{
 for(const token of [undefined,null,0,{},[],""," ","bad token","bad\n", "x".repeat(8193)]){
  let calls=0;
  const p=createWorkspacePrincipalProvider({verify:async()=>{calls++;return proof();}},token,()=>NOW);
  assert.equal(await p.verify(),null);assert.equal(calls,0);
 }
});

test("PB-02: rejected, throwing and malformed verifier dependencies fail closed",async()=>{
 const ports:unknown[]=[null,{}, {verify:1},{verify(){throw new Error("synthetic failure");}},
  {verify:async()=>{throw new Error("synthetic rejection");}}];
 for(const port of ports){
  const p=createWorkspacePrincipalProvider(port as SyntheticWorkspaceVerificationPort,TOKEN_A,()=>NOW);
  assert.equal(await p.verify(),null);
 }
});

test("PB-02: malformed proofs never fall back to caller or decoded identity",async()=>{
 const original=proof();
 const malformed:unknown[]=[null,undefined,[],true,"proof",{...original,token:TOKEN_B},
  {...original,token:[TOKEN_A]},{...original,userId:undefined},{...original,claims:null},
  {...original,claims:[]},{...original,claims:{...original.claims,sub:undefined}},
  {...original,authorId:AUTHOR_B},{...original,claims:{...original.claims,owner_id:AUTHOR_B}},
  Object.create(original),new Date(),{...original,[Symbol("unexpected")]:true}];
 for(const key of Object.keys(original)){
  const missing:Record<string,unknown>={...original};delete missing[key];malformed.push(missing);
 }
 for(const value of malformed)assert.equal(await provider(value).verify(),null);
});

test("PB-02: accessors and inherited fields are not accepted as verification data",async()=>{
 let reads=0;
 const accessor={...proof()};Object.defineProperty(accessor,"userId",{get(){reads++;return AUTHOR_A;}});
 assert.equal(await provider(accessor).verify(),null);assert.equal(reads,0);
 const claims=Object.create(proof().claims);
 assert.equal(await provider({...proof(),claims}).verify(),null);
});

test("PB-03: verified user, subject and session must be valid matching UUID identities",async()=>{
 for(const value of [
  {...proof(),userId:AUTHOR_B},
  {...proof(),userId:[AUTHOR_A]},
  {...proof(),claims:{...proof().claims,sub:AUTHOR_B}},
  {...proof(),claims:{...proof().claims,session_id:undefined}},
  {...proof(),claims:{...proof().claims,session_id:[SESSION_A]}},
  {...proof(),claims:{...proof().claims,session_id:"invalid"}},
  {...proof(),claims:{...proof().claims,sub:"invalid"}},
 ])assert.equal(await provider(value).verify(),null);
 const uppercase=proof();uppercase.userId=AUTHOR_A.toUpperCase();
 assert.equal((await provider(uppercase).verify())?.authorId,AUTHOR_A);
});

test("PB-04: expiry is integral JWT seconds and cannot be coerced or overflow milliseconds",async()=>{
 for(const exp of [undefined,null,"200",true,NaN,Infinity,-1,0,100,200.5,Number.MAX_SAFE_INTEGER]){
  assert.equal(await provider({...proof(),claims:{...proof().claims,exp}}).verify(),null);
 }
 assert.ok(await provider({...proof(),claims:{...proof().claims,exp:101}}).verify());
});

test("PB-04: existing freshness boundary is preserved without future-skew tolerance",async()=>{
 for(const verifiedAt of [undefined,null,"100000",true,NaN,Infinity,-1,NOW+1,NOW-30001,100000.5]){
  assert.equal(await provider({...proof(),verifiedAt}).verify(),null);
 }
 assert.ok(await provider(proof(TOKEN_A,AUTHOR_A,SESSION_A,NOW-30000)).verify());
});

test("PB-04: invalid, throwing or regressing injected clocks deny",async()=>{
 for(const clock of [()=>NaN,()=>Infinity,()=>-1,()=>NOW+0.5,()=>{throw new Error("clock");}]){
  assert.equal(await provider(proof(),clock).verify(),null);
 }
 let reads=0;
 assert.equal(await provider(proof(TOKEN_A,AUTHOR_A,SESSION_A,NOW-100),()=>reads++===0?NOW:NOW-1).verify(),null);
});

test("PB-05: separate requests and reversed async completions cannot exchange authors",async()=>{
 const a=deferred(),b=deferred(),seen:string[]=[];
 const port={verify:(token:string)=>{seen.push(token);return token===TOKEN_A?a.promise:b.promise;}};
 const pa=createWorkspacePrincipalProvider(port,TOKEN_A,()=>NOW);
 const pb=createWorkspacePrincipalProvider(port,TOKEN_B,()=>NOW);
 const ra=pa.verify(),rb=pb.verify();
 b.resolve(proof(TOKEN_B,AUTHOR_B,SESSION_B));
 assert.equal((await rb)?.authorId,AUTHOR_B);
 a.resolve(proof());assert.equal((await ra)?.authorId,AUTHOR_A);
 assert.deepEqual(seen,[TOKEN_A,TOKEN_B]);
});

test("PB-05/PB-07: overlapping calls on one provider pin identity at first valid completion",async()=>{
 const first=deferred(),second=deferred();let calls=0;
 const p=createWorkspacePrincipalProvider({verify:()=>++calls===1?first.promise:second.promise},TOKEN_A,()=>NOW);
 const r1=p.verify(),r2=p.verify();
 second.resolve(proof());assert.equal((await r2)?.authorId,AUTHOR_A);
 first.resolve(proof(TOKEN_A,AUTHOR_B,SESSION_B));assert.equal(await r1,null);
});

test("PB-06: caller token reassignment and verifier method replacement do not redirect an existing provider",async()=>{
 let token=TOKEN_A;const seen:string[]=[];
 const port={verify:async(t:string)=>{seen.push(t);return proof(t,t===TOKEN_A?AUTHOR_A:AUTHOR_B,t===TOKEN_A?SESSION_A:SESSION_B);}};
 const a=createWorkspacePrincipalProvider(port,token,()=>NOW);token=TOKEN_B;
 port.verify=async()=>proof(TOKEN_B,AUTHOR_B,SESSION_B);
 assert.equal((await a.verify())?.authorId,AUTHOR_A);assert.deepEqual(seen,[TOKEN_A]);
 const b=createWorkspacePrincipalProvider(port,token,()=>NOW);
 assert.equal((await b.verify())?.authorId,AUTHOR_B);assert.equal((await a.verify())?.sessionId,SESSION_A);
});

test("PB-06/PB-07: same-token correlation, author, session or expiry changes deny",async()=>{
 for(const change of [proof(TOKEN_B),proof(TOKEN_A,AUTHOR_B,SESSION_B),proof(TOKEN_A,AUTHOR_A,SESSION_B),
  {...proof(),claims:{...proof().claims,exp:201}}]){
  let value:unknown=proof();const p=createWorkspacePrincipalProvider({verify:async()=>value},TOKEN_A,()=>NOW);
  assert.ok(await p.verify());value=change;assert.equal(await p.verify(),null);
 }
});

test("PB-07: an async response is denied if its token expires during verification",async()=>{
 let now=NOW;const d=deferred();
 const p=createWorkspacePrincipalProvider({verify:()=>d.promise},TOKEN_A,()=>now);
 const result=p.verify();now=200000;d.resolve(proof());assert.equal(await result,null);
});

test("PB-07: an async response is denied when its verification becomes stale",async()=>{
 let now=NOW;const d=deferred();
 const p=createWorkspacePrincipalProvider({verify:()=>d.promise},TOKEN_A,()=>now);
 const result=p.verify();now=NOW+30001;d.resolve(proof());assert.equal(await result,null);
});

test("PB-07: proof snapshots and returned principals cannot be mutated across requests",async()=>{
 const raw=proof();const p=provider(raw);const result=await p.verify();assert.ok(result);
 raw.userId=AUTHOR_B;raw.claims.sub=AUTHOR_B;raw.claims.session_id=SESSION_B;
 assert.equal(result.authorId,AUTHOR_A);assert.equal(result.sessionId,SESSION_A);
 assert.equal(Reflect.set(result,"authorId",AUTHOR_B),false);
 assert.equal(Reflect.set(p,"verify",async()=>null),false);
 assert.equal(await p.verify(),null);
});

test("PB-07: errors and rejected proofs never clear a previously bound identity",async()=>{
 let value:unknown=proof();let fail=false;
 const p=createWorkspacePrincipalProvider({verify:async()=>{if(fail)throw new Error("synthetic");return value;}},TOKEN_A,()=>NOW);
 assert.ok(await p.verify());fail=true;assert.equal(await p.verify(),null);
 fail=false;value=proof(TOKEN_A,AUTHOR_B,SESSION_B);assert.equal(await p.verify(),null);
 value=proof();assert.equal((await p.verify())?.authorId,AUTHOR_A);
});

test("PB-08/PB-09: successful binding uses only injected synthetic responses, never a network fallback",async(t)=>{
 const mock=t.mock.method(globalThis,"fetch",()=>{throw new Error("Network forbidden by synthetic test");});
 try{assert.ok(await provider(proof()).verify());assert.equal(mock.mock.callCount(),0);}
 finally{t.mock.restoreAll();}
});
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

### `docs/agent-workflow/inputs/VEL-TASK-0058/SDK-CONTRACT.md` @ `494e36c0a00ec4baab5168f667cc1d855af9fc19`

~~~~~~markdown
# Frozen SDK response-shape source

FACT: repository lock resolves supabase-js/auth-js2.117.3; inspected installed frozen SDK source only, no client invocation. GoTrueClient.ts SHA256 7552500e375665e28acf23fb552ccbf1ef11379afab15859b2f670f1ae9aee9f. Exact relevant source excerpts below, with original one-based line ranges; injected mocks only in this Task. No SDK implementation copied or imported at runtime.

Public references inspected2026-10-25: https://supabase.com/docs/reference/javascript/auth-getuser , https://supabase.com/docs/reference/javascript/auth-getclaims , https://supabase.com/changelog . Markdown changelog endpoint could not be parsed by web tool; HTML fallback used. These public docs are not target observations or permission to use real Auth.

## getUser3223-3231

```ts
  async getUser(jwt?: string): Promise<UserResponse> {
    if (jwt) {
      return await this._getUser(jwt)
    }

    await this.initializePromise

    let result: UserResponse
    if (this.lock != null) {
```

## getClaims6690-6773

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
```

INTERPRETATION: getUser returns data.user and error; getClaims returns data.claims and error, with optional metadata. Mock composition must pass explicit same token to both, require null error and complete valid user/claims, never omit token/getSession or pass allowExpired/JWKS overrides. Actual getClaims may use cached JWKS or getUser fallback; none of that is executed/tested by this mock experiment. Signature/revocation/active-session/production decisions remain pending.
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0058/OWNER-SCOPE.md` @ `257bcea8cc0e16a4fbe9c295ee1d3668da372c72`

~~~~~~markdown
# Direct owner local bridge authorization relay

Owner instruction2026-10-25 indexed at https://github.com/Ben-001-sys/Vellistry/issues/108#issuecomment-6398753206 . Codex relay of direct chat authorization, not fabricated human GitHub approval. Reviewed base main55690e9b707bc1bb9af6cadd761a916d6e5a6a37; post-main40199221516 SUCCESS. Exact app paths: new workspace-supabase-response-bridge.ts and extend existing mandatory workspace-principal-adapter.spec.ts. Normal new Task/CP/EB/inputs/report/evidence/provenance and required compact current-state update only.

Implement unregistered composition of injected mock SDK-shaped getUser(token)/getClaims(token) into existing synthetic verification-port contract. Exact immutable token to both; validate user/claims subject/session/expiry/errors/partial and contradictory responses; preserve existing provider immutable binding, post-async freshness and concurrent isolation. All18old cases retained; append automatically selected mock composition cases. Snapshot each response as it arrives so later mock mutations cannot change proof. Conservatively timestamp proof at verification start, validate again after both responses: waiting for one response cannot make earlier verification fresh again.

No real client initialization, network/Auth request, credentials, signing/JWT/hosted probes, existing SupabaseAuthService/Guard changes, deps/CI/SQL/migration/grant/RLS/routes/gateway/writable-session changes, private persistence/deployment/paid/settings or automatic feature merge. Test-only injected mocks are trusted seams, not real JWT/session proof. All six production decisions pending, Issue108 OPEN, remediation delegation EXPIRED, broad gates unchanged. New unique immutable ContextPack committed/validated before code; actual tests/build/check/governance/readyCI and distinct completed-head review; new Ready PR for separate owner merge.
~~~~~~

## Execution reporting
Return an ExecutionBundle with FACT / INTERPRETATION / PROPOSAL sections,
tests actually performed, changes, evidence gaps, and pending owner approval.
