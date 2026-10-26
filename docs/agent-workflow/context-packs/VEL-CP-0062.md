---
id: VEL-CP-0062
title: 'Context for VEL-TASK-0062: Prepare conditional MVP PRINCIPAL implementation
  readiness'
type: context-pack
status: prepared
created_at: '2026-10-25'
version: 0.1.0
task_id: VEL-TASK-0062
base_commit: 8857c1f7f4567e8f499170bf4403143c3f62a7b5
task_blob_sha: 3096f367083d3aff725f3e042d020f42e126c45d
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
  git_blob_sha: 146fc455d89882704673dc430e51115e3e6c19bc
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
- path: apps/api/src/modules/workspace/workspace-principal-adapter.ts
  role: governing-source
  git_blob_sha: 5084cc167b9f69865aee58aa9ea212c6f4f08ac0
  source_status: unrecorded
- path: apps/api/src/modules/workspace/workspace-principal.ts
  role: governing-source
  git_blob_sha: 56b41b1a61599624569d4bb32f164fbb066f2cff
  source_status: unrecorded
- path: docs/reports/VEL-REAL-AUTH-HANDOFF-0061.md
  role: governing-source
  git_blob_sha: 15368063325853c3576d900c883e79d07a28c036
  source_status: proposed-for-review
- path: docs/agent-workflow/inputs/VEL-TASK-0059/SDK-BOUNDARY-SOURCES.md
  role: governing-source
  git_blob_sha: 24cfde996e425813fcbd6e311fd47007bc0b56e0
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0062/OWNER-AUTHORIZATION.json
  role: governing-source
  git_blob_sha: 79620a9c361485fbfec07e4325f9de733caedd06
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0062/FACTOR-SOURCE.md
  role: governing-source
  git_blob_sha: ef35bd75d4b782c489d90c1430bb3a9e759efa04
  source_status: unrecorded
source_gaps:
- id: TARGET-RUNTIME-UNVERIFIED
  limitation: Owner Dashboard observations do not prove issued claims/verification
    path/factor-state/session behavior; no hosted inspection authorized.
prepared_by: agent_workflow.py
---

# VEL-CP-0062 — Prepare conditional MVP PRINCIPAL implementation readiness

## Objective
Reconcile owner-approved conditional design and owner-observed target settings, expose assurance/MFA blockers and future two-path handoff without code

## Scope
**In:** CURRENT-STATE.md; docs/agent-workflow/tasks/VEL-TASK-0062.yaml; docs/agent-workflow/context-packs/VEL-CP-0062.md; docs/agent-workflow/execution-bundles/VEL-EB-0062.md; docs/agent-workflow/inputs/VEL-TASK-0062/*; docs/reports/VEL-PRINCIPAL-READINESS-0062.md; docs/reports/evidence/VEL-TASK-0062/*; docs/agent-workflow/PR-COMPLIANCE.yaml
**Out:** All app/Auth/dependency/CI/SQL/RLS/grant/route implementation; Hosted/credential/real Auth/JWT/signing/JWKS/users/private/paid/deployment/settings operations; Production decision resolution or automatic PR merge

## Evidence and authority constraints
The text below is a readable rendering of pinned Git blobs; exact raw bytes remain recoverable from the recorded commit/blob SHAs. Recorded source statuses remain in force: draft research is not accepted requirements. Original unarchived uploads are not independently verified merely by being mentioned.

**Known source gaps:**
- TARGET-RUNTIME-UNVERIFIED: Owner Dashboard observations do not prove issued claims/verification path/factor-state/session behavior; no hosted inspection authorized.

## Permissions and acceptance
**Allowed:** Read pinned repository/source evidence, prepare scoped documents after committed validated immutable pack, Run offline document/source assertions and validators; inherit mandatory actual CI, no live operations, Publish Draft, distinct trusted source review, promote Ready/verify exact-head CI; no merge
**Owner approval required:** Any real principal/Auth/hosted/SDK/JWT/security implementation or production choice; Any app/CI/SQL/dependency/scope change or new PR merge
**Acceptance criteria:**
- Main and unique Task0062 verified; preserve Task59-61 immutable history and constraints
- Owner design conditionally approved does not close production PRINCIPAL target/implementation gate or other five gates
- Owner-observed Dashboard settings attributed/date preserved, not relabeled independently verified token behavior
- aal1 only for authoritative no verified enrolled factor, aal2 required for enrolled; unknown/malformed/stale/incomplete factor evidence denies; no AAL-only inference
- Current ECCP256 preference/previousHS256 explicitly separated from actual JWT alg/path/legacy acceptance; correct AUTH_SERVER_BACKED vs cryptographic/UNKNOWN attribution
- Issuer/audience/role issued claims and3600second lifetime remain unverified;30second evidence freshness preserved
- Future Authservice plus existing mandatoryspec only; R01-R08 new runtime checks allNOT_RUN, N12/independentEPERM BLOCKED
- No app/tests/Auth/SQL/CI/deps/hosted/JWT/JWKS/users/credentials/routes changes or operations; review/CI and separate owner merge

## Deliverables
- Committed Task and validated committed immutable CP before operative edits
- Matrix APPROVED DESIGN/VERIFIED TARGET owner-observation/INFERRED-UNCONFIRMED/BLOCKED, each with provenance and limits
- Conditional MFA authoritative factor-state/freshness/schema/race requirements; JWT current/legacy/fallback attribution blockers
- Future exact two-file existing-service/spec handoff and R01-R08 matrix allNOT_RUN
- Actual offline docs/source/metadata/readiness/traceability/pack/bundle/compliance checks, EB, distinct review, applicableCI and reviewable PR without merge

## Pinned source snapshots
Git commit: `8857c1f7f4567e8f499170bf4403143c3f62a7b5`. Read source statuses independently from task intent.

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

### `CURRENT-STATE.md` @ `146fc455d89882704673dc430e51115e3e6c19bc`

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

## Real Auth handoff preparation — 2026-10-25

FACT: PR122 mergeddb3c7e92375c984f2730e720b1a23cadb5437934 with reviewed-tree
match; [post-main40220684442](https://github.com/Ben-001-sys/Vellistry/actions/runs/40220684442) SUCCESS, artifact/source/cleanup verified.
52adapter/12unit/32PG remain mandatory; Task60/CP60/EB60/history preserved.
Task0061/CP0061 prepares [real-Auth handoff](docs/reports/VEL-REAL-AUTH-HANDOFF-0061.md).
Smallest next decision: explicit trusted PRINCIPAL policy, then separately
scope an additive existing Auth-service method and mandatory spec extension.
No new synthetic layer or app/Auth/SQL/CI/dependency implementation here.
All six production choices pending; hosted UNVERIFIED; N12 and independent
runtime EPERM BLOCKED. Preparation owner merge/next code authorization pending.
Issue108 OPEN; delegation EXPIRED; broad design/pilot/release gates unchanged.

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

### `docs/reports/VEL-REAL-AUTH-HANDOFF-0061.md` @ `15368063325853c3576d900c883e79d07a28c036`

~~~~~~markdown
---
id: VEL-REAL-AUTH-HANDOFF-0061
title: Real Auth identity boundary decision and bounded implementation handoff
type: implementation-report
status: proposed-for-review
created_at: 2026-10-25
owner: project_owner
version: 0.1.0
---

## FACT: integrated source and limits
Baseline main db3c7e92375c984f2730e720b1a23cadb5437934 is owner-approved PR122 integration. Complete tree dfaada375f02b06fe7f57f5aacedb81d6cafeeca equals reviewed head93914f3c8c049d19b5a40684a6510c613e62acfa. [Post-main40220684442](https://github.com/Ben-001-sys/Vellistry/actions/runs/40220684442) actual SUCCESS, including52adapter/12units/32PG and governance/security/recovery/final gate. Downloaded exact-main32casePG artifact and all15source hashes/owned cleanup verified; raw summary in evidence. Legacy privilege fixture SKIPPED, not acceptance. Task60/immutableCP60/EB60, initial failures and all historical NOT_RUN/BLOCKED evidence remain unchanged.

[Task0059 packet](../agent-workflow/proposals/VEL-SUPABASE-PRINCIPAL-BOUNDARY-0059.json) and [frozen SDK excerpts](../agent-workflow/inputs/VEL-TASK-0059/SDK-BOUNDARY-SOURCES.md) already establish supabase-js/auth-js2.117.3 behavior. No repeated SDK research or real request is needed for this preparation. [Task0060](VEL-SYNTHETIC-CLAIM-POLICY-0060.md) proves only fixture-policy composition:52mandatory tests (36old+16new),12units/32disposablePG plus retained controls. Its hardcoded synthetic issuer/audience/role, anonymous:false and denial of every AAL field are NOT production defaults or a production SDK-response validator. It deliberately rejects additional SDK response fields; do not wire it into real Auth.

Current SupabaseAuthService.publicClient() uses existing SUPABASE_URL/SUPABASE_PUBLISHABLE_KEY configuration names with persistSession:false/autoRefreshToken:false. No values were read. verify(token) calls getUser(explicitToken), denies missing/error user and returns only{id}. Guard extracts one Bearer token and stores author{id}/accessToken. Neither currently establishes a verified session/expiry/policy evidence contract for workspace writes. Existing Auth service/guard, Books ABI, provider/bridge, all app tests/CI/dependencies remain unchanged in Task0061.

## INTERPRETATION: three separate authorities
Cryptographic verification establishes signature/key trust plus explicitly checked claims. Frozen SDK getClaims may use asymmetric WebCrypto/JWK verification or Auth-server getUser fallback; cache/key lookup may perform network. Success is not explicit application issuer/audience/role policy in the inspected method body, and does not establish current writable session.

Auth-server identity means the configured trusted Auth server accepts the exact bearer and returns a matching user. getUser may report session-related errors; do not assert it always accepts revoked tokens or never consults sessions. Target behavior remains unobserved. A successful call is not a lock held through a later database commit.

Active writable-session enforcement requires authoritative session/user/deadline/revocation semantics, failure-closed availability and a reviewed race/linearization boundary with ownership in the protected transaction. No client signature result or two successful Auth calls independently provides that. N-12 remains BLOCKED. Identity can be valid while writable-session status is UNKNOWN; no write operation may infer permission from that state.

## PROPOSAL: smallest actionable owner decision
Review the PRINCIPAL identity contract and supply/confirm a non-secret trusted configuration policy before authorizing implementation. This document records NO decision as approved. All six production decisions remain OWNER_DECISION_PENDING.

1. TARGET: independently confirm allowed server endpoint, exact expected issuer and accepted audiences. Historical owner-confirmed vellistry-dev reference lflkcrnriitrbclangyr/organization pulyacnozzggwfgqdgdl/region eu-west-2 is an earlier metadata record, not current issuer/audience/signing-mode evidence. Never derive a trusted endpoint/JWKS target or allowlist from bearer claims, request headers, body or user metadata. Use an owner-supplied non-secret record or the separately approved sanitized catalog/export channel; no query/export is authorized here. Do not request secrets.
2. CLAIMS: explicitly choose permitted author token roles, anonymous-user handling, AAL requirements and missing/unknown-value handling; NumericDate exp/iat/nbf requirements, issuer/audience type rules and any bounded clock tolerance. Recommend deny service-role author identity and unapproved anonymous/AAL claims. No role/audience/AAL/clock values are approved by this recommendation, and Task0060 fixture settings must not supply defaults. Keep current30000ms proof freshness unless separately changed.
3. KEYS: confirm actual signing mode, permitted algorithms and trusted key origin/discovery/cache/rotation behavior for frozen SDK. Prefer a supported asymmetric verification path as a proposal, but do not change project signing settings or assume target already uses it. Decide whether a configured Auth-server fallback is permitted; if cryptographic verification is specifically required, a server fallback cannot be misreported as local signature verification. Never expose allowExpired, caller keys/JWKS overrides, token-selected algorithm/URL or a silent unverifiable fallback. Target-specific key/SDK/rotation evidence still required; no probes or JWKS fetch here.
4. PROTOCOL: recommend same immutable explicit token to getUser and getClaims on the same owner-configured client instance per verification attempt, with no getSession/omitted-token state or automatic refresh path. Both required outcomes must succeed; canonical user.id==claims.sub, valid session_id and safe expiration. Reject contradictory, partial or malformed evidence. Claims policy must run before projection drops issuer/aud/time/role/header evidence. Record chosen SDK verification path accurately, without inventing evidence the SDK does not expose; if path attribution cannot be established, it is UNKNOWN and cannot satisfy an assurance requirement for a particular path.
5. FAILURE: internally separate invalid/authentication-denied from configuration/provider-unavailable/timeouts without retaining token/claims/private payload. Recommend fail closed in both classes; do not retry an author request with service-role privileges. External HTTP mapping and timeout/retry policy remain TRANSPORT decisions. Existing verify()->{id} error/ABI behavior is not silently changed by the proposed additive method.

The immediate requested decision is approval of this explicit PRINCIPAL contract/policy envelope and a separate two-file local implementation scope below. It does not resolve SESSION/GATEWAY/PACKAGING/RECONCILIATION/TRANSPORT, authorize hosted access, or enable writes. Until the owner makes it, implementation is NOT_AUTHORIZED.

## PROPOSAL: bounded next implementation handoff, NOT_AUTHORIZED
Task ID unallocated; new unique Task plus committed validated immutable ContextPack at then-current main required. Exactly proposed application paths:

- apps/api/src/modules/auth/supabase-auth.service.ts
- apps/api/src/modules/workspace/workspace-principal-adapter.spec.ts

Recommend an additive verifyPrincipalEvidence(token, trustedPolicy) method on the EXISTING service, preserving verify(token), forUser(), publicClient() and current guard/Books behavior. No competing Auth integration, new synthetic bridge/provider, dependency or CI layer. Tests append to the existing mandatory principal spec, retain all52current bodies and substitute the existing service's publicClient boundary with SDK-shaped test doubles; no real client initialization or Auth call in the authorized test execution. A new method is not automatically invoked by existing protected routes. No module, guard or workspace route registration in this smallest slice.

After separately approved production policy/schema is pinned, method obtains same-token user/claims via the existing configured public client, performs strict explicit-policy and evidence validation, snapshots a minimal frozen server-private proof matching the existing provider port {token,userId,claims:{sub,session_id,exp},verifiedAt}. Proof token stays request-local and never goes to HTTP, logs, caches or receipts. Keep conservative start-time evidence age and post-await checks. Future request wiring can feed this proof into the existing immutable per-request provider; wiring is a separate authorization, not hidden in this two-file task. Do not silently make stateful WorkspaceService request-scoped and lose pending reconciliation maps.

Tests use injected existing-service publicClient doubles only. Proposed runtime security cases are NOT_RUN_PROPOSED in Task0061: no passing real-Auth experiment is claimed. New implementation must run these tests, existing52/12unit/32PG/regressions/build/check/governance and actual exact-head CI, obtain distinct review, then request separate owner merge.

- R01 explicit trusted policy required; no caller/token-derived endpoint or policy override, omitted-token/session fallback or service-role author path.
- R02 exact immutable token to both required SDK operations with no options override; out-of-order response snapshots, concurrent authors and account switching remain isolated.
- R03 invalid/expired/coerced/overflow expiry, wrong/missing issuer/audience/role/anonymous/AAL and malformed sub/session deny under owner-selected schema. Task0060 fixture defaults cannot accept a real target.
- R04 user/subject/session/expiry conflicts, partial/null/error responses, injected signature/key/algorithm failures and SDK throws deny; no trust in decoded-only claims, user_metadata, x-user-id or request body author.
- R05 provider outage/configuration failure differs internally from invalid evidence, fails closed; no raw error/token/claims leakage or elevated fallback. No real JWT creation/verification in tests; failure outcomes injected.
- R06 after awaits recheck expiry/freshness and clock regressions; preserve current30000ms and immutable provider author/session/expiry pinning, without laundering early observations.
- R07 existing verify()/guard/Books ABI and old52tests remain unchanged; no production calls during tests, no client initialization from the test seam; no network, credential or log payload.
- R08 valid identity proof contains no writable/session-active authority; SESSION_UNKNOWN cannot authorize workspace writes. This is not a real revoked-session acceptance test.

## PROPOSAL: evidence needed before selecting session/revocation mechanism
SESSION remains pending, N12 BLOCKED. Require exact-target catalog/export evidence for authoritative session schema, user linkage, effective grants/role inheritance/function privileges, API exposure and auth-provider version/configuration. The reviewed15-query Task0046 packet remains a separate access-channel/owner-approval gate; this task executes none of it. Static historical local fixtures do not establish live auth.sessions shape or allowed grants.

Require documented owner-selected logout scopes, token lifetime/refresh/session deadlines/inactivity/not_after semantics and real provider behavior. Later separately authorized target-specific tests must distinguish unexpired token after sign-out, revoked/missing/user-mismatched sessions, disabled/deleted users, refresh/logout races and outage/timeout behavior. Use disposable/synthetic sources first; no credentials/users/live JWT probe is authorized by this report.

For the proposed session-row lock experiment, prove which actor revokes/updates rows, compatible lock ordering and privilege confinement, timeout/deadlock/rollback/retry semantics and session-then-book transaction ordering. Task0052's disposable NOLOGIN helper/UPDATE(id) experiment is evidence only, not permission to grant access to Supabase auth.sessions. A mirrored registry alternative needs its own authoritative synchronization/revocation race/recovery proof; do not infer it is safer merely because it avoids one grant. Auth lookup before transaction leaves a TOCTOU gap; serializing revocation after a committed write is not equivalent to denying every request racing with logout. Owner must select the security guarantee and boundary explicitly.

GATEWAY must choose an enforceable private capability and author ownership boundary; PACKAGING must separately approve exact shipping SQL/role/function scope; RECONCILIATION must prove durable idempotency/journal/unknown-outcome handling across process/session changes; TRANSPORT must choose request registration/error mapping. None is decided or implemented here. No production workspace write route until their acceptance is supported. N12's real session/gateway race cases cannot be relabeled PASS using R08 or Task0060 identity tests.

## FACT: preparation verification and review boundary
Task0061/immutableCP0061 committed before handoff edits. Exact source pins and their normalized/canonical source hashes, absence of app/SQL/CI/dependency changes, preservation of Task60/CP60/EB60, explicit six-pending decisions, blocked N12/runtime and proposed-not-run R01-R08 are checked offline. Metadata/readiness/traceability/pack/bundle/compliance and distinct completed-head review/actual applicable CI are recorded in EB and external PR ledger with actual outcomes. No local app test/research rerun is required just for unchanged app blobs; inherited actual CI runs them independently.

Issue108 remains OPEN; expired remediation delegation stays closed; broad design/pilot/production gates unchanged. No hosted operations, credentials, real JWT/Auth experiment, SQL/grants/routes/private manuscripts or implementation performed. Successor preparation PR requires separate owner merge; its integration would still not authorize the next proposed code task.
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

### `docs/agent-workflow/inputs/VEL-TASK-0062/OWNER-AUTHORIZATION.json` @ `79620a9c361485fbfec07e4325f9de733caedd06`

~~~~~~markdown
{"url":"https://api.github.com/repos/Ben-001-sys/Vellistry/issues/comments/6404172728","html_url":"https://github.com/Ben-001-sys/Vellistry/issues/108#issuecomment-6404172728","issue_url":"https://api.github.com/repos/Ben-001-sys/Vellistry/issues/108","id":6404172728,"node_id":"IC_kwDOVArGqc8AAAABfbfruA","user":{"login":"Ben-001-sys","id":195976052,"node_id":"U_kgDOC65bdA","avatar_url":"https://avatars.githubusercontent.com/u/195976052?u=1cd203089a200a11d6c8af59210f59192a08ea67&v=4","gravatar_id":"","url":"https://api.github.com/users/Ben-001-sys","html_url":"https://github.com/Ben-001-sys","followers_url":"https://api.github.com/users/Ben-001-sys/followers","following_url":"https://api.github.com/users/Ben-001-sys/following{/other_user}","gists_url":"https://api.github.com/users/Ben-001-sys/gists{/gist_id}","starred_url":"https://api.github.com/users/Ben-001-sys/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/Ben-001-sys/subscriptions","organizations_url":"https://api.github.com/users/Ben-001-sys/orgs","repos_url":"https://api.github.com/users/Ben-001-sys/repos","events_url":"https://api.github.com/users/Ben-001-sys/events{/privacy}","received_events_url":"https://api.github.com/users/Ben-001-sys/received_events","type":"User","user_view_type":"public","site_admin":false},"created_at":"2026-10-25T22:20:04Z","updated_at":"2026-10-25T22:20:04Z","author_association":"OWNER","body":"### Owner direct-chat decision — MVP PRINCIPAL design approved conditionally (25 October 2026)\n\n**Provenance:** The project owner explicitly stated in the current ChatGPT conversation: “I explicitly approve the proposed Vellistry MVP PRINCIPAL policy as a design decision only, subject to its outstanding target verification requirements. I do not authorize Auth implementation, hosted operations, session grants, or workspace writes yet. Proceed with the next bounded preparation step.” This is a relay of that decision, not independent human-identity attestation or an application/merge delegation.\n\n**Disposition:** `PRINCIPAL_DESIGN_APPROVED_CONDITIONAL`; **concrete target values, effective assurance evidence, and implementation remain PENDING/NOT_AUTHORIZED**. Do not mark the six production decision gates fully closed or accepted.\n\n#### Approved design requirements (conditional on trustworthy target verification)\n\n- Trust only owner-configured `vellistry-dev` project endpoint `https://lflkcrnriitrbclangyr.supabase.co`; expected issuer **candidate** `https://lflkcrnriitrbclangyr.supabase.co/auth/v1`, and candidate author audience/role `authenticated`. Exact issuer/audience and effective claims still require target verification before production enforcement. No token/request-derived endpoint, issuer, JWKS or role overrides.\n- Reject anonymous and service-role author identities. Normal author access may use `aal1` if *no verified factor is enrolled* or `aal2` after MFA; for enrolled factors require `aal2` before protected workspace access. TOTP enrollment optional, SMS MFA not required. Keep the Dashboard's 15-minute AAL1 restriction **ON** pending separately authorized behavioral acceptance. **AAL claim alone does not prove factor enrollment**; conditional enforcement needs authoritative factor-state evidence or must remain unimplemented/blocked. Select separate `aal2`-protected sensitive actions in their own scope.\n- Prefer verified ECC P-256/ES256 current-key trust; handle the observed `HS256` previous key explicitly, **never silently equate legacy verification with current-key assurance or revoke keys**. Permit a correctly attributed **AUTH_SERVER_BACKED** fallback through the fixed trusted service, not falsely reported as local cryptographic signature assurance; if required verification path/algorithm attribution cannot be established, fail closed against assurance requirements. No live JWKS fetch or JWT experiment authorized.\n- For each attempt use the **same immutable explicit access token** in existing `SupabaseAuthService` `getUser(token)` and `getClaims(token)`, with strict canonical user/subject/session matching; verify issuer/audience/role/anonymous/AAL and time claims **before lossy projection**. Required safe numeric `exp`, `iat`; validated optional `nbf`; reject expiry, future-invalid/coerced/contradictory evidence and clock regression, with proposed zero skew and post-await checks. **3,600-second JWT lifetime is a target recommendation, NOT confirmed current configuration**. Preserve 30,000-ms proof-freshness bound. Fail closed without token/claims disclosure or privileged fallback.\n- PRINCIPAL identity is **not** active writable-session evidence, manuscript ownership, gateway privilege or permission to commit writes. SESSION/N-12 and remaining GATEWAY/PACKAGING/RECONCILIATION/TRANSPORT controls are separate.\n\n#### Evidence still outstanding\n\nCurrent project URL and target metadata are confirmed; owner-observed Dashboard showed anonymous sign-ins disabled, TOTP enabled, SMS disabled, low-AAL 15-minute limit enabled, current ECC P-256 key and previous HS256 key, and no custom Auth Hooks displayed. These are observations, not verified token/claim issuance semantics.\n\nDo **not** promote to VERIFIED: effective exact issuer/audience/role claims; current JWT `alg`/verification path and legacy-token behavior; configured access-token lifetime; precise MFA factor enrollment evidence/low-AAL session behavior; target key-discovery/rotation/cache behavior. Record source, date, uncertainty and test authority for each.\n\n#### Next bounded step — PREPARATION ONLY\n\nPrepare a new **unique**, narrowly scoped **documentation-only** Task, committed validated immutable ContextPack before operative documentation edits, EB, source/provenance/status record and evidence/reconciliation matrix based on merged `main` `88d8dbcb9e6ec21baf60deebb7004f7e2194b276` (re-verify main/Task uniqueness first). Separate: approved design choices, observed non-secret target settings, proposed but unconfirmed target facts, and blocked assurance/factor-state requirements. Preserve Task0059–0061 history. Define a future separately approvable **two-path** additive existing-service `verifyPrincipalEvidence`/mandatory-spec implementation and R01–R08 checks, but **DO NOT implement it** or infer conditional factor-state proof from an `aal` claim. Follow existing PR-compliance/immutable-pack process, distinct final-head review, applicable CI and **separate owner merge decision** for any resulting documentation PR.\n\n**Explicit exclusions:** no Auth/guard/provider/bridge code, tests, dependencies, SQL/grants/RLS, CI, routes, writes, JWT/user/session/credential/key material, JWKS fetch, hosted operation, paid services, settings changes, production/pilot release, or automatic merge.\n\nIssue #108 remains **OPEN**; SESSION/GATEWAY/PACKAGING/RECONCILIATION/TRANSPORT production decisions pending; the PRINCIPAL design has conditional approval but PRINCIPAL target trust/implementation gate stays pending. N-12 and independent `spawn EPERM` remain **BLOCKED**; R01–R08 remain **NOT_RUN**. Expired remediation delegation remains expired.","reactions":{"url":"https://api.github.com/repos/Ben-001-sys/Vellistry/issues/comments/6404172728/reactions","total_count":0,"+1":0,"-1":0,"laugh":0,"hooray":0,"confused":0,"heart":0,"rocket":0,"eyes":0},"performed_via_github_app":{"id":1144995,"slug":"chatgpt-codex-connector","node_id":"A_kwHOAOQ6Gs4AEXij","owner":{"login":"openai","id":14957082,"node_id":"MDEyOk9yZ2FuaXphdGlvbjE0OTU3MDgy","avatar_url":"https://avatars.githubusercontent.com/u/14957082?v=4","gravatar_id":"","url":"https://api.github.com/users/openai","html_url":"https://github.com/openai","followers_url":"https://api.github.com/users/openai/followers","following_url":"https://api.github.com/users/openai/following{/other_user}","gists_url":"https://api.github.com/users/openai/gists{/gist_id}","starred_url":"https://api.github.com/users/openai/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/openai/subscriptions","organizations_url":"https://api.github.com/users/openai/orgs","repos_url":"https://api.github.com/users/openai/repos","events_url":"https://api.github.com/users/openai/events{/privacy}","received_events_url":"https://api.github.com/users/openai/received_events","type":"Organization","user_view_type":"public","site_admin":false},"name":"ChatGPT Codex Connector","description":"Bring ChatGPT and Codex to your GitHub repositories.","external_url":"https://www.chatgpt.com","html_url":"https://github.com/apps/chatgpt-codex-connector","created_at":"2025-02-14T01:37:05Z","updated_at":"2026-09-23T18:52:59Z","permissions":{"actions":"write","checks":"read","contents":"write","emails":"read","issues":"write","metadata":"read","pull_requests":"write","statuses":"read","workflows":"write"},"events":["check_run","check_suite","commit_comment","issues","issue_comment","pull_request","pull_request_review","pull_request_review_comment","pull_request_review_thread","repository","status","sub_issues"]},"minimized":null,"pin":null}
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0062/FACTOR-SOURCE.md` @ `ef35bd75d4b782c489d90c1430bb3a9e759efa04`

~~~~~~markdown
# Frozen factor-state evidence, source inspection only

GoTrueClient.ts auth-js2.117.3 SHA256 7552500e375665e28acf23fb552ccbf1ef11379afab15859b2f670f1ae9aee9f. Original lines6048-6170; no SDK method, user/session/JWT or hosted endpoint accessed.

```ts
   * {@link GoTrueMFAApi#listFactors}
   */
  private async _listFactors(): Promise<AuthMFAListFactorsResponse> {
    const {
      data: { user },
      error: userError,
    } = await this.getUser()
    if (userError) {
      return { data: null, error: userError }
    }

    const data: AuthMFAListFactorsResponse['data'] = {
      all: [],
      phone: [],
      totp: [],
      webauthn: [],
      recovery_code: [],
    }

    // loop over the factors ONCE
    for (const factor of user?.factors ?? []) {
      data.all.push(factor)
      // Types that are not recognized are pushed to `all` bucket.
      if (
        factor.status === 'verified' &&
        factor.factor_type in data &&
        Array.isArray(data[factor.factor_type])
      ) {
        ;(data[factor.factor_type] as (typeof factor)[]).push(factor)
      }
    }

    return {
      data,
      error: null,
    }
  }

  /**
   * {@link GoTrueMFAApi#getAuthenticatorAssuranceLevel}
   */
  private async _getAuthenticatorAssuranceLevel(
    jwt?: string
  ): Promise<AuthMFAGetAuthenticatorAssuranceLevelResponse> {
    if (jwt) {
      try {
        const { payload } = decodeJWT(jwt)

        let currentLevel: AuthenticatorAssuranceLevels | null = null
        if (payload.aal) {
          currentLevel = payload.aal
        }

        let nextLevel: AuthenticatorAssuranceLevels | null = currentLevel

        const {
          data: { user },
          error: userError,
        } = await this.getUser(jwt)

        if (userError) {
          return this._returnResult({ data: null, error: userError })
        }

        const verifiedFactors =
          user?.factors?.filter((factor: Factor) => factor.status === 'verified') ?? []

        if (verifiedFactors.length > 0) {
          nextLevel = 'aal2'
        }

        const currentAuthenticationMethods = payload.amr || []

        return { data: { currentLevel, nextLevel, currentAuthenticationMethods }, error: null }
      } catch (error) {
        if (isAuthError(error)) {
          return this._returnResult({ data: null, error })
        }
        throw error
      }
    }

    const {
      data: { session },
      error: sessionError,
    } = await this.getSession()

    if (sessionError) {
      return this._returnResult({ data: null, error: sessionError })
    }
    if (!session) {
      return {
        data: { currentLevel: null, nextLevel: null, currentAuthenticationMethods: [] },
        error: null,
      }
    }

    const { payload } = decodeJWT(session.access_token)

    let currentLevel: AuthenticatorAssuranceLevels | null = null

    if (payload.aal) {
      currentLevel = payload.aal
    }

    let nextLevel: AuthenticatorAssuranceLevels | null = currentLevel

    const verifiedFactors =
      session.user.factors?.filter((factor: Factor) => factor.status === 'verified') ?? []

    if (verifiedFactors.length > 0) {
      nextLevel = 'aal2'
    }

    const currentAuthenticationMethods = payload.amr || []

    return { data: { currentLevel, nextLevel, currentAuthenticationMethods }, error: null }
  }

  /**
   * {@link AuthMFARecoveryCodesApi#getStatus}
   */
  private async _getRecoveryCodesStatus(): Promise<AuthMFARecoveryCodesStatusResponse> {
```

Public documentation https://supabase.com/docs/guides/auth/auth-mfa read2026-10-25: describes AAL as assurance of a session and opt-in enforcement for enrolled users. Factor availability in project settings is not evidence of enrollment for an individual. Documentation behavior is not target acceptance. SDK paths and assumptions must be checked against exact target/schema before use.
~~~~~~

## Execution reporting
Return an ExecutionBundle with FACT / INTERPRETATION / PROPOSAL sections,
tests actually performed, changes, evidence gaps, and pending owner approval.
