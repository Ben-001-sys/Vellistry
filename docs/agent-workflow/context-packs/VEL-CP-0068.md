---
id: VEL-CP-0068
title: 'Context for VEL-TASK-0068: IMP-003A AI-off chapter-aware Tiptap3 editor foundation'
type: context-pack
status: prepared
created_at: '2026-10-29'
version: 0.1.0
task_id: VEL-TASK-0068
base_commit: 2b363a36b0f7fe6e26db64763edaf86acd238f16
task_blob_sha: e596ed061529bcc5460575431be62046162c599d
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
  git_blob_sha: 844af834780106cb06d61f9d3fe1c794fea7eeaf
  source_status: active
- path: docs/agent-workflow/PR-COMPLIANCE.md
  role: governing-source
  git_blob_sha: 5f4845623aef3abb15fba7fbe8e78474902cca00
  source_status: unrecorded
- path: docs/decisions/ADR-0003-use-tiptap-3-prosemirror-for-manuscript-editor.md
  role: governing-source
  git_blob_sha: 6d53dd79bd9e71cc410d78aeddf4345c0922260e
  source_status: accepted
- path: docs/decisions/ADR-0008-codex-primary-agentic-implementation-workflow.md
  role: governing-source
  git_blob_sha: 08b9a563fb79ebb91f20d0f84e0d752c1bb6709d
  source_status: accepted
- path: apps/web/src/lib/workspace/book-workspace-contract.ts
  role: governing-source
  git_blob_sha: 63b6a79d36cbfb253ba2fbd1e2ea5984b16c4734
  source_status: unrecorded
- path: apps/web/src/components/workspace/book-workspace-organizer.tsx
  role: governing-source
  git_blob_sha: 48904cb78a581c00fd6f61b0db8f8aed447b35b0
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0068/OWNER-AUTHORIZATION.json
  role: governing-source
  git_blob_sha: 421085b933701c60ff05e43086941dfa4051da76
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0068/SOURCE-EXCERPTS.md
  role: governing-source
  git_blob_sha: 40d49b70c340d7cebbe015f3d0200639c5d111e6
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0068/IMPLEMENTATION-CONTRACT.md
  role: governing-source
  git_blob_sha: 963c5e0c0af9359a595a5967018bab253a3dcc72
  source_status: unrecorded
- path: apps/web/package.json
  role: governing-source
  git_blob_sha: 46a7e911b4034f811ac71b266fb6018234814258
  source_status: unrecorded
- path: package.json
  role: governing-source
  git_blob_sha: 6c901eb277e031dcd2b576ba4d65d763dfdde343
  source_status: unrecorded
source_gaps:
- id: LOCAL-PERSISTENCE-GATED
  limitation: Memory-only editor preview, not durable chapter writes, real principal/session/gateway
    acceptance, complete author journeys or hosted schema acceptance.
- id: MFA-DEFERRED
  limitation: Owner-reported basic login, not independent acceptance. R01-R08 NOT_RUN,
    N12/historical EPERM BLOCKED; interactive MFA deferred without security-policy
    change.
prepared_by: agent_workflow.py
---

# VEL-CP-0068 — IMP-003A AI-off chapter-aware Tiptap3 editor foundation

## Objective
Implement and verify bounded reusable manual editor using existing workspace interfaces, without production persistence or security gate promotion

## Scope
**In:** apps/web/src/lib/editor/manuscript-search.ts; apps/web/src/lib/editor/manuscript-session.ts; apps/web/src/lib/editor/manuscript-editor.test.mjs; apps/web/src/components/editor/manuscript-editor.tsx; apps/web/package.json; package.json; pnpm-lock.yaml; tests/editor/manuscript-editor-fixture-page.tsx; tests/editor/manuscript-editor.browser.mjs; CURRENT-STATE.md; docs/agent-workflow/tasks/VEL-TASK-0068.yaml; docs/agent-workflow/context-packs/VEL-CP-0068.md; docs/agent-workflow/execution-bundles/VEL-EB-0068.md; docs/agent-workflow/inputs/VEL-TASK-0068/*; docs/agent-workflow/PR-COMPLIANCE.yaml; docs/reports/VEL-IMP003A-MANUAL-EDITOR-0068.md; docs/reports/evidence/VEL-TASK-0068/*
**Out:** Auth/backend/workspace persistence service or existing organizer/controller changes; Hosted Auth/SQL/settings/enrollment/JWT/JWKS/credentials/private manuscripts/AI/paid/deployment/merge; Production routes, simulated durable persistence, storage-schema approval, broad gate promotion, historical evidence rewriting, unrelated dependencies/CI changes

## Evidence and authority constraints
The text below is a readable rendering of pinned Git blobs; exact raw bytes remain recoverable from the recorded commit/blob SHAs. Recorded source statuses remain in force: draft research is not accepted requirements. Original unarchived uploads are not independently verified merely by being mentioned.

**Known source gaps:**
- LOCAL-PERSISTENCE-GATED: Memory-only editor preview, not durable chapter writes, real principal/session/gateway acceptance, complete author journeys or hosted schema acceptance.
- MFA-DEFERRED: Owner-reported basic login, not independent acceptance. R01-R08 NOT_RUN, N12/historical EPERM BLOCKED; interactive MFA deferred without security-policy change.

## Permissions and acceptance
**Allowed:** Commit Task/governing sources, validate/commit immutable pack before operative edits in isolated worktree, Scoped editor/dependency/lock/test-command implementation; offline/synthetic/owned loopback browser fixtures; temporary test-only Next wrapper removed before production build/commit, Existing CI/disposable fixtures and distinct trusted read-only review; Draft then Ready only after evidence; separate stacked PR, no merge
**Owner approval required:** Merge, new hosted/security-sensitive operations, production persistence/SQL/gateway/session/route implementation, AI/paid/private/release or unrelated scope
**Acceptance criteria:**
- Implement E01-E12 in pinned implementation contract with actual tests, preserving whitespace, first-paragraph/middle selections, search/caret/history and stable chapter scope
- Reuse existing organizer/workspace ownership/notes/unknown state contracts unchanged; fail closed on invalid/stale/unverified identity and chapter membership
- AIoff no key/network; honest session-only draft status; no production route or durable persistence claim
- Exact Tiptap3.32.1 OSS deps/jsdom26.1.0 dev-only; no unrelated upgrades, SQL, Auth or workflow changes
- Actual focused plus existing regressions/check/build/governance/security/recovery CI, real-browser keyboard/responsive checks, distinct completed-head review and owner merge boundary

## Deliverables
- Reusable Tiptap session/search/component, exact OSS deps and offline tests in mandatory workspace suite
- Synthetic-only organizer/editor browser fixture and executed browser regression evidence
- EB/per-commit provenance, distinct exact-head review, actual CI and stacked PR for separate owner merge

## Pinned source snapshots
Git commit: `2b363a36b0f7fe6e26db64763edaf86acd238f16`. Read source statuses independently from task intent.

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

### `CURRENT-STATE.md` @ `844af834780106cb06d61f9d3fe1c794fea7eeaf`

~~~~~~markdown
---
id: VEL-STATE-001
type: current-state
status: active
created_at: 2026-10-08
updated_at: 2026-10-28
owner: project_owner
version: 0.2.2
---

# Vellistry — current verified state

## Local Auth runtime repair — 2026-10-28

FACT: PR127 merged main `5e3aeec95a34c0a9564067632655a0549a824c9d`;
[post-main40476240880](https://github.com/Ben-001-sys/Vellistry/actions/runs/40476240880)
SUCCESS;55MFA tests now mandatory alongside existing security/recovery gates.
Task65/CP65/EB65 history and activeTask66/CP66/EB66 preserved.

Task0067/CP0067 reproduces missing Nest constructor injection under tsx;
explicit runtime tokens and offline HTTP regressions are proposed for review.
Root78f80bb checkout was stale, missing MFA route and serving Next16.4.0.
Isolated current worktree serves existing AuthPanel at /account/mfa on16.4.1.
[Report](docs/reports/VEL-LOCAL-AUTH-RUNTIME-0067.md). No env files copied,
Auth policy/SQL/dependency/CI changes or hosted requests. Configured real Auth,
backend MFA enforcement and hosted Books persistence remain unverified.

R01-R08 NOT_RUN; N12/historical independent spawn EPERM BLOCKED. PRINCIPAL/SESSION
and other production gates unchanged; hosted fixtures UNKNOWN/G1-G4 unsatisfied.
Issue108OPEN; remediation delegation EXPIRED; separate owner merge required.
Earlier paragraphs are dated history, not new security or implementation authority.

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

### `docs/decisions/ADR-0003-use-tiptap-3-prosemirror-for-manuscript-editor.md` @ `6d53dd79bd9e71cc410d78aeddf4345c0922260e`

~~~~~~markdown
---
id: ADR-0003
title: Use Tiptap 3 on ProseMirror as the manuscript editor foundation
type: architecture-decision
status: accepted
created_at: 2026-10-08
updated_at: 2026-10-08
decided_at: 2026-10-08
author: project-research
approved_by: project_owner
version: 1.0.0
sources:
  - "Fiction Writing Project owner confirmation on 2026-10-08: 'okay, we are using it', replying to the specific Tiptap 3 / ProseMirror recommendation; permalink pending archival"
  - "https://tiptap.dev/docs/editor/getting-started/overview"
  - "https://tiptap.dev/docs/editor/getting-started/install/react"
  - "https://github.com/Ben-001-sys/Vellistry/blob/research/r05-editor-license-capability-scan-v0.1/docs/research/R05-MANUSCRIPT-EDITOR-LICENSING-CAPABILITY-SCAN-2026-10-08.md (research branch; drafted before the owner selected the editor)"
evidence:
  - "Owner explicitly accepted Tiptap 3 built on ProseMirror as Vellistry's manuscript editor foundation in the 2026-10-08 Fiction Writing Project conversation."
  - "The preceding recommendation limited acceptance to the open-source editor core, excluding paid conversion/pagination features and all remaining application-stack decisions."
  - "Tiptap's official documentation identifies its headless editor as ProseMirror-based and its open-source editor as MIT-licensed."
  - "Primary original conversation URL not yet archived; record exact owner reply and the preceding technology referent without inventing a permalink."
related_requirements:
  - VEL-REQ-002
related_features: []
related_contracts: []
related_adrs: []
supersedes: []
superseded_by: []
implementation_refs: []
---

# ADR-0003 — Use Tiptap 3 / ProseMirror for Vellistry's manuscript editor

## Context and problem statement

Vellistry is intended to be a serious, author-focused long-form fiction editor that remains useful without AI. The author requested substantial word-processing interactions and full control of AI-generated or suggested changes, without rebuilding every basic editing primitive from scratch.

R05 investigated ProseMirror, Tiptap, Lexical, Slate, Plate, CKEditor 5 and TinyMCE 8, their core license positions and the separate complexities of book exports. R05's study was first written while the editor was **not yet chosen**; that chronology is preserved.

## Decision

**Adopt Tiptap major version 3 as the manuscript rich-text editor foundation, using ProseMirror underneath through Tiptap.** This was explicitly selected by the project owner on **2026-10-08**, after the recommendation: “Tiptap 3, built on ProseMirror.” The owner responded, “okay, we are using it.”

The intended editor foundation is the **open-source Tiptap 3 editor and its appropriately licensed dependencies**, not an automatic commitment to the paid Tiptap product suite.

This is a binding **technology choice for the manuscript editing subsystem**, but is **not a claim that an editor has been built, tested or deployed**.

### Explicitly outside this decision

- No selection of React, Next.js, Vue or any overall application frontend framework, despite Tiptap providing integration guides for several.
- No choice of backend, database, authentication, storage, cloud hosting or repository folder structure.
- No purchase or adoption of Tiptap Pro, Pages, Conversion, Tracked Changes, collaboration services or a vendor cloud account.
- No decision about EPUB, DOCX or print-PDF generators, cover design, professional typesetting or a publication pipeline.
- No selection of AI provider, model, API gateway, BYOK design, MCP topology or a rule-evaluation engine.
- No approval of any precise Tiptap 3 patch release or dependency pin until an implementation experiment establishes a supported combination.
- No rewriting, renumbering or selection between disputed versions of the frozen fiction-guidance source.

## Alternatives considered

- **Direct ProseMirror:** permissive and flexible, but more basic editor integration, commands and UI behavior must be assembled by Vellistry.
- **Lexical:** MIT-licensed extensible editor with a strong plugin/event model; considered but not chosen as the manuscript editor foundation.
- **Slate / Plate:** customizable editor approaches with permissive-core elements; considered but not chosen.
- **CKEditor 5:** extensive rich-document feature set but GPL/commercial and premium-service licensing require deeper commercial assessment.
- **TinyMCE 8:** familiar editor with commercial/self-hosted license considerations.
- **Build an editor from scratch:** adds difficult selection, IME, undo, paste, accessibility and rich-text correctness work unrelated to Vellistry's differentiating Rules Studio.

These research alternatives remain documented, not banned from use in other unrelated contexts.

## Rationale

- Tiptap 3 uses ProseMirror's structured editing mechanics without requiring the team to operate two independent editors.
- Headless, extension-based APIs support an independently designed novel-writing interface, chapter-aware operations and proposed AI selection/rewrite workflows.
- The documented open-source editor core uses MIT licensing; third-party extension and paid product licenses must be individually checked.
- The choice reuses mature editing primitives while preserving room to evaluate long-form performance, author-specific interface controls and manuscript import/export separately.

See the [official overview](https://tiptap.dev/docs/editor/getting-started/overview), [ProseMirror dependency description](https://tiptap.dev/docs/editor/getting-started/install/react) and independent [R05 research report](https://github.com/Ben-001-sys/Vellistry/blob/research/r05-editor-license-capability-scan-v0.1/docs/research/R05-MANUSCRIPT-EDITOR-LICENSING-CAPABILITY-SCAN-2026-10-08.md) on its separate draft research branch.

## Consequences and trade-offs

- Future editor feasibility prototypes should use **Tiptap 3 / ProseMirror** rather than re-open engine selection without a documented reason or superseding owner decision.
- The application will still need its own author-facing UI, chapter/scene structure, persistence boundary, accessibility testing, large-manuscript performance work, and safe accept/reject editing behavior for AI proposals.
- The editor's JSON/structured representation is **not** an approved application storage schema or full manuscript interchange specification.
- MIT licensing of the core does **not** imply that pagination, professional DOCX round trips, EPUB, print PDF, tracked changes or hosted conversion are free or bundled.
- Existing R05 comparison material is retained as pre-decision evidence and its tests remain useful as verification gates.
- If core performance or essential author workflows fail, record the evidence and propose an explicit change or superseding ADR; do not silently replace this accepted choice.

## Evidence and verification limits

**Owner approval:** In the Fiction Writing Project conversation on 2026-10-08, the assistant proposed “Tiptap 3, built on ProseMirror” as the manuscript editor, explicitly stating that it was only a recommendation until owner approval. The owner asked for an explanation and subsequently stated **“okay, we are using it.”** This is direct approval of the precisely identified editor choice. The original conversation permalink is **not yet available in the repository**; do not invent one or imply a GitHub approval comment was posted.

**Independent vendor documentation:** Tiptap's official [overview](https://tiptap.dev/docs/editor/getting-started/overview) describes a ProseMirror-based headless editor and MIT-licensed open-source packages, with paid offerings separate. The [Tiptap 3 update guide](https://tiptap.dev/docs/guides/upgrade-tiptap-v2) documents the major-version boundary and migration differences.

**Approval is not implementation:** No Tiptap integration or manuscript trial is claimed by this ADR. A future implementation PR and test results will be separate evidence.

## Implementation status

**Not implemented.** Next bounded engineering validation: prototype a Tiptap 3 manuscript editing session; test long chapters, paste/format preservation, selection anchoring for AI rewrites, author acceptance/rejection, undo, non-AI writing, and accessibility. Evaluate document conversion and pagination **as separate decisions**. Exact scope and experimental deployment remain to be planned and reviewed.
~~~~~~

### `docs/decisions/ADR-0008-codex-primary-agentic-implementation-workflow.md` @ `08b9a563fb79ebb91f20d0f84e0d752c1bb6709d`

~~~~~~markdown
---
id: ADR-0008
title: Use Codex as the primary implementation agent in Vellistry's governed agentic coding workflow
type: architecture-decision
status: accepted
created_at: 2026-10-14
updated_at: 2026-10-16
decided_at: 2026-10-14
author: project-research
approved_by: project_owner
version: 1.0.2
sources:
  - "Fiction Writing Project owner message, 2026-10-14: 'make it an adr we are using codex now'. Direct reply to the previously explained ChatGPT architect/coordinator, Cursor implementation, GitHub source-of-truth workflow. Original conversation permalink pending archival."
  - docs/agent-workflow/IMPLEMENTATION-OPERATING-MODEL.md
  - docs/plans/VEL-PLAN-05-CURSOR-AGENT-WORKFLOW-2026-10-11.md
  - PROJECT-CONSTITUTION.md
  - SOURCE-OF-TRUTH.md
evidence:
  - "Owner explicitly selected Codex as the active coding agent and instructed that the change be formalized as an ADR on 2026-10-14."
  - "The earlier role assignment in PLAN-05 selected Cursor as the primary bounded coding agent; this ADR replaces only that default execution-tool assignment."
  - "Owner did not authorize the new agent to merge without review, deploy, apply cloud migrations, use secrets or paid services, handle real manuscripts, or bypass project approval gates."
related_requirements:
  - VEL-PRODUCT-SCOPE-20261009-001
  - VEL-PRODUCT-CONSTRAINT-20261009-001
related_features: []
related_contracts:
  - docs/agent-workflow/IMPLEMENTATION-OPERATING-MODEL.md
  - docs/agent-workflow/README.md
related_adrs:
  - ADR-0001
  - ADR-0002
  - ADR-0006
supersedes: []
superseded_by: []
implementation_refs:
  - AGENTS.md
  - docs/agent-workflow/IMPLEMENTATION-OPERATING-MODEL.md
  - docs/plans/VEL-PLAN-05-CURSOR-AGENT-WORKFLOW-2026-10-11.md
  - CURRENT-STATE.md
---

# ADR-0008 — Codex-primary governed agentic implementation

## Context and problem statement

Vellistry uses Git and Markdown as the canonical engineering knowledge/control plane. The accepted project constitution separates evidence, design decisions, implementation and owner approval. The planned workflow had ChatGPT prepare bounded tasks and ContextPacks while **Cursor Agent** performed implementation; its outputs were independently reviewed and reconciled through GitHub PRs and CI.

After PR #64 merged, direct GitHub editing by ChatGPT produced draft PR #65 for hosted Supabase preflight. The owner then reconfirmed that Vellistry follows an **agentic coding** workflow and explicitly said **"make it an adr we are using codex now"**. The agent responsible for normal implementation must therefore be updated without rewriting past Cursor execution history or implying any broader authorization.

This is a **development operating model decision**, not a product stack, deployment, licensing, security-gate or production-readiness decision.

## Decision

**Codex is Vellistry's default primary code implementation agent starting 2026-10-14**, for each newly authorized bounded coding task. Preserve the existing role-based control plane:

| Role | Responsibility | Authority boundary |
|---|---|---|
| **Project owner** | Select/approve scope, consequential changes, security posture, spending, database operations, PR acceptance/merge and release | Sole final decision maker; permitted to self-review under the constitution |
| **ChatGPT — architect/coordinator** | Read current repository evidence and accepted ADRs; define requirements, task IDs, ContextPacks, acceptance/negative tests, path allowlists and exclusions; assess Codex reports, diff and CI; advise owner | Does **not** make owner decisions, treat its assessment as independent human review, or act as the default feature-coding executor |
| **Codex — primary implementer** | On an explicitly scoped task, inspect pinned source, implement code/tests in an isolated Git branch/worktree, run valid checks, produce a factual ExecutionBundle and proposed PR | No self-authorization to change scope/ADRs, merge, deploy, perform cloud SQL/migrations/resets, incur paid costs, use real manuscripts or disclose secrets |
| **GitHub — source of truth and review ledger** | Host code, authoritative docs, versioned ADRs, task/ContextPack/ExecutionBundle artifacts, PRs, CI, decision history and current state | PR creation and green CI do **not** equal owner acceptance or deployment readiness |
| **Independent verifier (optional)** | Challenge the source diff, independently rerun tests and negative scenarios when possible | Advisory; the same agent's self-review is not an independent execution, and no second human is mandated |

**Default work loop:**

1. **Observe:** ChatGPT inspects the merged `main` SHA, current PRs, accepted requirements/ADRs and latest top of `CURRENT-STATE.md`; distinguish verified facts from older historical status.
2. **Authorize a specific slice:** The owner approves the bounded objective and sensitive actions. ChatGPT prepares a unique task/ContextPack with source SHA, intended changes, allowed/forbidden paths, behavioral acceptance checks, security and cost restrictions. A prepared packet does not grant approval on its own.
3. **Dispatch to Codex:** Codex executes in a dedicated branch/worktree against the designated SHA, without reusing old task/pack IDs or overwriting another agent's in-progress branch. Agent may use the existing repository tools/CI and must declare tool/model/runtime in its evidence.
4. **Report evidence:** Codex supplies an ExecutionBundle with base/head SHA, changed paths, actual commands and exit codes, unit/integration/browser results with real environment and fixture descriptions, `PASS|FAIL|BLOCKED|NOT_RUN`, original artifacts and `FACT|INTERPRETATION|PROPOSAL`.
5. **Review:** ChatGPT reviews the exact submitted code, contracts, tests, workflow behavior, known risks and evidence. The owner determines corrections, rejection or PR acceptance/merge. CI success alone cannot waive human acceptance/security/recovery testing.
6. **Reconcile:** After an approved merge, verify files on merged `main` and post-merge checks; update `CURRENT-STATE.md` and issue/task status, preserving past decisions and results. Proceed to a new slice only after its own authorization.

Codex is a **role assignment**, not a mandatory IDE or subscription. Cursor may continue as an editor, historical test environment or explicitly assigned alternate agent, but **Cursor Agent is no longer the default implementer**. Other agents may implement a task only when the owner explicitly reassigns that task; do not silently switch providers or claim that a ChatGPT-side GitHub change was executed by Codex.

**Existing work:** PR #64 remains a valid merged Cursor-era implementation and its recorded verification evidence does not change. Draft [PR #65](https://github.com/Ben-001-sys/Vellistry/pull/65) is a **ChatGPT-authored, not Codex-executed** implementation proposal; do not relabel its origin, auto-merge it or treat its tests as Codex evidence. It may be reviewed, adopted via a fresh bounded Codex handoff, revised or closed by the owner, with its actual provenance preserved.

**Security boundary:** The owner selected hosted **Supabase Cloud** project `vellistry-dev`, not a locally self-hosted Supabase installation. All hosted schema migrations, Auth fixture creation, remote resets, real manuscript use, deployment and paid provider calls remain subject to separate explicit task-level authorization and appropriate testing. In particular, the historical signed-out-but-still-valid JWT/direct PostgREST concern remains a private-pilot blocker until mitigated and verified.

## Alternatives considered

1. **Continue Cursor Agent as default:** keeps earlier environment but contradicts the latest explicit owner tool selection. Preserve Cursor-era history instead.
2. **Let ChatGPT directly commit all feature changes through GitHub:** convenient for small edits but bypasses the chosen Codex execution role and muddies agent provenance. ChatGPT may maintain planning/decision records, not silently act as the default code implementer.
3. **Allow unrestricted, interchangeable coding agents:** flexible but weakens permission isolation and reproducibility when task ownership changes implicitly.
4. **Codex primary under the existing governed task/PR loop (selected):** retains traceability, single-task ownership and verifiable outputs while honoring the updated owner direction.

## Rationale

The owner's instruction identifies Codex as the current implementation tool. Keeping architecture, execution, independent review and approval responsibilities separate avoids silently treating agent-produced code, CI results or a prior conversation as accepted authority. The Git-centred knowledge and task packet approach permits future tool changes without changing the Next/Nest/Supabase/Tiptap architecture.

No performance, reliability or cost superiority between Codex and Cursor is asserted. This choice is an **owner workflow preference and accountability decision**, not a benchmark result.

## Consequences and trade-offs

- Future default implementation prompts, agent handoff references and code-owner descriptions should name **Codex**. Older Cursor artifacts remain intact and labelled as historical; do not rewrite them as if Codex produced them.
- Codex needs a verified workspace/Git access method and clear approval/tool permission boundaries for each task. The specific Codex interface (web, desktop, CLI or connected agent) is **not established by this ADR**.
- ChatGPT should deliver **specification, acceptance tests, task packet, review and decision support**, rather than directly creating ordinary feature code/PRs without an explicit exception.
- Existing ContextPack/ExecutionBundle schemas and Git/CI controls remain in force until independently amended and validated; do not claim automatic Codex integration if the current workflow does not support it.
- The single-owner self-review policy remains effective. Independent agent review helps but cannot replace required owner approvals.
- Migration, production/deployment, private manuscript, provider-spending, security and release gates are unchanged. No new subscriptions or paid API use is approved.

## Evidence and verification limits

The owner's direct 2026-10-14 message is the decision source; the conversation permalink has not been archived. It approves **the default implementer change and ADR record**, not a particular Codex runtime, verified Codex GitHub connection, successful task handoff or a security-gate transition. This documentation PR itself is **not Codex implementation evidence**.

Record status is **accepted by the owner as a workflow decision**. Repository enforcement via docs and completed Codex task evidence are distinct, separately verifiable steps. A future switch of the default implementation agent should be recorded through a new dated owner decision/ADR, with links to this record and history preserved.

## Implementation status

### Historical integration clarification — 2026-10-16 (Codex, Issue #72)

Original ADR text and owner-history record are **ChatGPT-authored** in draft
[PR #66](https://github.com/Ben-001-sys/Vellistry/pull/66), source
`36da413fea67179ac8395af1cececd477fd193a2`. Codex adopted that record here,
preserving its author, owner decision, alternatives and rationale. This dated
clarification replaces only its stale implementation-status paragraph; the
[original seven-file source snapshot](../agent-workflow/inputs/VEL-TASK-0008/pr66/)
retains the previous wording, including historical runner-start failures.

The owner-selected role decision is accepted; adoption of this reconciliation
PR and disposition of PR66 remain owner-only decisions. PR66 is still draft and
unmerged. Direct current owner dispatch authorizes bounded Issue72, not new
product gates. The original approval conversation permalink remains missing;
secondary PR metadata does not prove human authorship of coordinator comments.

Codex Task/CP/EB0006 and amendment0007 are now integrated through merged PR70,
main `a8751190073f682caabdc2897d8f64bc59ac9ebb`.
[Ready CI38970082388](https://github.com/Ben-001-sys/Vellistry/actions/runs/38970082388)
and [post-merge main CI38970500477](https://github.com/Ben-001-sys/Vellistry/actions/runs/38970500477)
both succeeded. This establishes actual bounded execution, not an independent
cold start or automatic PR-to-task/identity enforcement (separate Issue73).
PR68 remains a separate draft with Task/CP/EB0005 on its own branch; its prior
zero-step CI failures do not describe current main. Its third privilege migration
is unapproved; hosted migrations and two-author acceptance remain NOT_RUN.
The signed-out-JWT direct-PostgREST risk and private-pilot/release gates remain.
See [CURRENT-STATE](../../CURRENT-STATE.md) for the checked active facts and
[operating model](../agent-workflow/IMPLEMENTATION-OPERATING-MODEL.md) for bounded
task exceptions and lightweight-governance boundaries.

### Current implementation clarification — 2026-10-22

PR66 was superseded with its ChatGPT-authored decision, alternatives, rationale and owner-history preserved. PR65 and PR68 are closed through separately reviewed successors; PR102 preserves original browser wording and PR104 records every PR68 path and exact SQL references. Static compliance from Issue73 is merged, but is not runtime identity authentication. Third SQL definition remains planning-only and unadopted; hosted acceptance and signed-out JWT mitigation remain unverified. The [temporary owner delegation](../agent-workflow/authorizations/VEL-REM-INTEGRATION-20261019.yaml) permits only this remediation programme's eligible reviewed repository integrations; it does not change the accepted default role decision. Current status and evidence live in [CURRENT-STATE](../../CURRENT-STATE.md).
~~~~~~

### `apps/web/src/lib/workspace/book-workspace-contract.ts` @ `63b6a79d36cbfb253ba2fbd1e2ea5984b16c4734`

~~~~~~markdown
/** Local organizer contract. This is not a chapter persistence or Auth implementation. */
export type WorkspaceChapter = Readonly<{id: string; bookId: string; title: string; notes: string}>;
export type WorkspaceDocument = Readonly<{
  bookId: string; bookTitle: string; version: number; notes: string;
  chapters: readonly WorkspaceChapter[];
}>;
export type WorkspaceCommand =
  | Readonly<{kind: "create"; title: string}>
  | Readonly<{kind: "rename"; chapterId: string; title: string}>
  | Readonly<{kind: "reorder"; chapterIds: readonly string[]}>
  | Readonly<{kind: "notes"; chapterId?: string; body: string}>;
export type WorkspaceReceipt = Readonly<{operationId: string; bookId: string; version: number}>;
export type WorkspaceRequest = Readonly<{
  actor: string; bookId: string; operationId: string; expectedVersion: number; command: WorkspaceCommand;
}>;
export type ReadResult = {kind: "ok"; document: WorkspaceDocument} | {kind: "denied" | "unavailable"};
export type MutationResult = {kind: "confirmed"; receipt: WorkspaceReceipt}
  | {kind: "denied" | "invalid" | "conflict" | "unknown"};
export type ReceiptResult = {kind: "confirmed"; receipt: WorkspaceReceipt} | {kind: "missing" | "denied"};
export type WorkspacePort = {
  read: (actor: string, bookId: string) => Promise<ReadResult>;
  mutate: (request: WorkspaceRequest) => Promise<MutationResult>;
  receipt: (actor: string, bookId: string, operationId: string) => Promise<ReceiptResult>;
};

export function validId(value: unknown): value is string {
  return typeof value === "string" && value.length > 0 && value.length <= 128 &&
    value.trim() === value && !/[\x00-\x1f\x7f]/.test(value);
}
export function chapterTitle(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const title = value.trim();
  return title.length > 0 && title.length <= 180 ? title : null;
}
export function validNotes(value: unknown): value is string {
  return typeof value === "string" && value.length <= 10000;
}
export function parseCommand(value: unknown): WorkspaceCommand | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  const c = value as Record<string, unknown>;
  const keys = Object.keys(c);
  if (c.kind === "create" && keys.every(k => ["kind", "title"].includes(k))) {
    const title = chapterTitle(c.title);
    return title ? {kind: "create", title} : null;
  }
  if (c.kind === "rename" && keys.every(k => ["kind", "chapterId", "title"].includes(k))) {
    const title = chapterTitle(c.title);
    return title && validId(c.chapterId) ? {kind: "rename", chapterId: c.chapterId, title} : null;
  }
  if (c.kind === "notes" && keys.every(k => ["kind", "chapterId", "body"].includes(k))) {
    if (!validNotes(c.body) || (c.chapterId !== undefined && !validId(c.chapterId))) return null;
    return c.chapterId === undefined ? {kind: "notes", body: c.body}
      : {kind: "notes", chapterId: c.chapterId, body: c.body};
  }
  if (c.kind === "reorder" && keys.every(k => ["kind", "chapterIds"].includes(k)) &&
      Array.isArray(c.chapterIds) && c.chapterIds.length <= 1000 && c.chapterIds.every(validId) &&
      new Set(c.chapterIds).size === c.chapterIds.length) {
    return {kind: "reorder", chapterIds: [...c.chapterIds]};
  }
  return null;
}
export function parseDocument(value: unknown, bookId: string): WorkspaceDocument | null {
  if (!value || typeof value !== "object") return null;
  const d = value as Record<string, unknown>;
  if (d.bookId !== bookId || !validId(d.bookId) || typeof d.bookTitle !== "string" ||
      !d.bookTitle.trim() || d.bookTitle.length > 120 || !validNotes(d.notes) ||
      !Number.isSafeInteger(d.version) || (d.version as number) < 0 ||
      !Array.isArray(d.chapters) || d.chapters.length > 1000) return null;
  const chapters: WorkspaceChapter[] = [];
  for (const row of d.chapters) {
    if (!row || typeof row !== "object" || !validId(row.id) || row.bookId !== bookId || typeof row.title !== "string" ||
        chapterTitle(row.title) !== row.title || !validNotes(row.notes)) return null;
    chapters.push({id: row.id, bookId, title: row.title, notes: row.notes});
  }
  if (new Set(chapters.map(c => c.id)).size !== chapters.length) return null;
  return {bookId, bookTitle: d.bookTitle, version: d.version as number, notes: d.notes, chapters};
}
export function matchingReceipt(value: unknown, request: WorkspaceRequest): value is WorkspaceReceipt {
  if (!value || typeof value !== "object") return false;
  const r = value as Record<string, unknown>;
  return r.operationId === request.operationId && r.bookId === request.bookId &&
    Number.isSafeInteger(r.version) && (r.version as number) > request.expectedVersion;
}
~~~~~~

### `apps/web/src/components/workspace/book-workspace-organizer.tsx` @ `48904cb78a581c00fd6f61b0db8f8aed447b35b0`

~~~~~~markdown
"use client";
import {useEffect, useRef, useState, useSyncExternalStore} from "react";
import type {WorkspaceSession} from "@/lib/workspace/book-workspace-session";

/** Reusable organizer; this slice has only synthetic local-session confirmation. */
export function BookWorkspaceOrganizer({session}: {session: WorkspaceSession}) {
  const state = useSyncExternalStore(session.subscribe, session.snapshot, session.snapshot);
  const document = state.document;
  const selected = document?.chapters.find(c => c.id === state.selectedChapterId);
  const [focusChapter, setFocusChapter] = useState<string | null>(null);
  const buttons = useRef(new Map<string, HTMLButtonElement>());
  useEffect(() => {
    if (!state.pending && focusChapter && state.phase === "ready") {
      // A receipt arriving while the writer types must not steal their caret.
      const element = window.document.activeElement;
      if (!(element instanceof HTMLTextAreaElement) && !(element instanceof HTMLInputElement)) {
        buttons.current.get(focusChapter)?.focus();
      }
      setFocusChapter(null);
    }
  }, [state.pending, state.phase, document?.version, focusChapter]);
  const locked = state.pending || state.uncertain || state.conflict;
  async function move(id: string, delta: number) {
    if (!document || locked) return;
    const ids = document.chapters.map(c => c.id);
    const from = ids.indexOf(id), to = from + delta;
    if (from < 0 || to < 0 || to >= ids.length) return;
    [ids[from], ids[to]] = [ids[to], ids[from]];
    const confirmed = await session.reorder(ids);
    if (confirmed && session.snapshot().document?.bookId === document.bookId) setFocusChapter(id);
  }
  async function create() {
    const previous = new Set(document?.chapters.map(c => c.id));
    const bookId = document?.bookId;
    if (!(await session.createChapter()) || session.snapshot().document?.bookId !== bookId) return;
    const added = session.snapshot().document?.chapters.find(c => !previous.has(c.id));
    if (added) { session.selectChapter(added.id); setFocusChapter(added.id); }
  }
  return <section className="space-y-5 rounded border p-5" aria-label="Book workspace local preview">
    <h1 className="text-2xl font-semibold">{document?.bookTitle ?? "Book workspace"}</h1>
    <p role="note">Synthetic local preview. Changes are confirmed only in this test session.
      They are not saved to a server or this device and disappear when the test session restarts.</p>
    <p role="status" aria-live="polite" aria-atomic="true">{state.message}</p>
    <button type="button" onClick={() => { void session.refresh(); }} disabled={state.pending}
      className="rounded border px-3 py-2">Reload local book</button>
    {state.uncertain ? <button type="button" onClick={() => { void session.checkOutcome(); }} disabled={state.pending}
      className="rounded border px-3 py-2">Check local result</button> : null}
    {document && state.phase === "ready" ? <div className="space-y-5" aria-busy={state.pending}>
      <h2 className="text-xl font-semibold">Chapters</h2>
      {document.chapters.length === 0 ? <p>No chapters in this local book yet.</p> : <ol aria-label="Chapters" className="space-y-2">
        {document.chapters.map((chapter, index) => <li key={chapter.id} className="flex flex-wrap items-center gap-2">
          <button type="button" ref={element => {
            if (element) buttons.current.set(chapter.id, element); else buttons.current.delete(chapter.id);
          }} aria-label={`Open chapter ${index + 1}: ${chapter.title}`}
            aria-current={selected?.id === chapter.id ? "true" : undefined}
            onClick={() => session.selectChapter(chapter.id)} className="rounded border px-3 py-2">
            {chapter.title}
          </button>
          <button type="button" aria-label={`Move chapter ${index + 1} up: ${chapter.title}`}
            disabled={locked || index === 0} onClick={() => { void move(chapter.id, -1); }} className="rounded border px-3 py-2">Move up</button>
          <button type="button" aria-label={`Move chapter ${index + 1} down: ${chapter.title}`}
            disabled={locked || index === document.chapters.length - 1} onClick={() => { void move(chapter.id, 1); }} className="rounded border px-3 py-2">Move down</button>
        </li>)}
      </ol>}
      <form onSubmit={event => { event.preventDefault(); void create(); }} className="space-x-2">
        <label htmlFor="workspace-create-title">New chapter title</label>
        <input id="workspace-create-title" value={state.createTitle} maxLength={180} required disabled={locked}
          onChange={event => session.setCreateTitle(event.target.value)} className="rounded border p-2"/>
        <button type="submit" disabled={locked} className="rounded border px-3 py-2">Add chapter</button>
      </form>
      {selected ? <form onSubmit={event => {
        event.preventDefault();
        const id = selected.id, bookId = document.bookId;
        void session.renameChapter(id, state.renameTitle).then(confirmed => {
          if (confirmed && session.snapshot().document?.bookId === bookId) setFocusChapter(id);
        });
      }} className="space-x-2">
        <label htmlFor="workspace-rename-title">Selected chapter title</label>
        <input id="workspace-rename-title" required maxLength={180} disabled={locked} value={state.renameTitle}
          onChange={event => session.setRenameTitle(event.target.value)} className="rounded border p-2"/>
        <button type="submit" disabled={locked} className="rounded border px-3 py-2">Rename chapter</button>
      </form> : null}
      <fieldset className="space-y-2">
        <legend>Book planning notes</legend>
        <label htmlFor="workspace-book-notes">Planning notes for this book</label>
        <textarea id="workspace-book-notes" maxLength={10000} value={state.bookNoteDraft}
          onChange={event => session.setNotes(event.target.value)} className="block w-full rounded border p-2"/>
        <p>{state.bookNoteDraft === document.notes ? "Notes match the local session." : "These notes have unconfirmed local edits."}</p>
        <button type="button" disabled={locked} onClick={() => { void session.applyNotes(); }} className="rounded border px-3 py-2">Apply book notes locally</button>
      </fieldset>
      {selected ? <fieldset className="space-y-2">
        <legend>Chapter planning notes</legend>
        <label htmlFor="workspace-chapter-notes">Planning notes for the selected chapter</label>
        <textarea id="workspace-chapter-notes" maxLength={10000} value={state.chapterNoteDraft}
          onChange={event => session.setNotes(event.target.value, selected.id)} className="block w-full rounded border p-2"/>
        <p>{state.chapterNoteDraft === selected.notes ? "Notes match the local session." : "These notes have unconfirmed local edits."}</p>
        <button type="button" disabled={locked} onClick={() => { void session.applyNotes(selected.id); }} className="rounded border px-3 py-2">Apply chapter notes locally</button>
      </fieldset> : null}
    </div> : null}
  </section>;
}
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0068/OWNER-AUTHORIZATION.json` @ `421085b933701c60ff05e43086941dfa4051da76`

~~~~~~markdown
{
  "source": "Direct owner chat 29 October 2026, Codex-attributed relay; no authenticated human GitHub authorship claim",
  "url": "https://github.com/Ben-001-sys/Vellistry/issues/108#issuecomment-6491360882",
  "scope": "Bounded local IMP-003A AI-off manual Tiptap3 editor; reuse IMP002; separate stacked PR after Task67 repair; no merges",
  "deferred": "Interactive MFA enrollment/acceptance; not a backend security-policy relaxation",
  "reported_not_verified": "Owner reports basic login success with synthetic development author; agent did not rerun hosted login"
}
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0068/SOURCE-EXCERPTS.md` @ `40d49b70c340d7cebbe015f3d0200639c5d111e6`

~~~~~~markdown
# Relevant exact original excerpts

## Exact excerpt: LANGUAGE.md lines20-34
Source 1ff3e91d49ab85cd3cd3f012fdf062bdd7dadc8f; blob1b8a700218c8f93bfb4ca7972b90c00d03c673c0; original status preserved, not new approval.

> **Adoption status:** Complete, implementation-ready **proposed language contract**, not an already approved owner decision. On explicit owner approval and repository integration, the `APPROVED_CONCEPT` terms below express already approved product meaning, and owner-approved `PROPOSED_LABEL` entries become the effective UI vocabulary. Before approval, do not retroactively relabel proposals as accepted or silently update application code. The file may guide reviews as a candidate immediately, but its presence alone does not change product scope, technical contracts, or owner authorization.

## 0. Quick reference for product designers, writers, and coding agents

1. **The author is in control.** Do not imply the application or AI independently authors, accepts, publishes, or establishes story truth.
2. **Use familiar writing words.** Prefer **book**, **chapter**, **manuscript**, **character**, **story thread**, and **writing rule** in general explanations; reserve **Story Profiles** and **Rules Studio** for the named Vellistry surfaces.
3. **Never collapse these boundaries:** manuscript / outline / notes; draft / saved revision; AI suggestion / accepted prose; suggested fact / approved story fact; AI prose acceptance / fact approval; local recovery / confirmed online save; exported document / full book backup.
4. **Actions name their effect:** **Create book**, **Add chapter**, **Continue writing**, **Rewrite selection**, **Accept suggestion**, **Reject suggestion**, **Approve fact**, **Dismiss suggestion**, **Download manuscript**, **Download book backup**, **Sign out**. Display-name choices identified as `PROPOSED_LABEL` need owner review before deployment.
5. **Status is evidence, not decoration.** Never display **Saved** without a server durability acknowledgement or **Saved on this device** without confirmed local persistence. A lost acknowledgement is **Save status unknown**, not necessarily **Save failed** or **Conflict**.
6. **AI is optional.** Never require an AI key for ordinary book writing, manual Story Profiles, rule editing, or supported export. Do not imply AI is free or that Vellistry pays provider bills.
7. **Current shipping boundary:** live implementation is login and a basic book library. Described chapter/editor/rules/AI UI is mainly approved product scope plus proposed UX, not verified deployed behavior.
8. **No silent renaming of technology:** labels here do not authorize changes to routes, SQL columns, RPCs, auth tokens, IDs, model/provider routing, source guidance files, or migration history.
9. **On an undefined or disputed term:** reuse a known semantic term where it fits exactly; otherwise add a proposed entry and request the owner's decision. Never invent another competing name.
10. **Check the exact affected screen and state** before using an example from this document. Example copy is a template conditioned on the specified behavior, never evidence that a feature works.


## Exact excerpt: LANGUAGE.md lines62-100
Source 1ff3e91d49ab85cd3cd3f012fdf062bdd7dadc8f; blob1b8a700218c8f93bfb4ca7972b90c00d03c673c0; original status preserved, not new approval.

| `FUTURE_RESERVED` | Useful name for an explicitly deferred feature, not an MVP menu item | No enabled UI, marketing claim, or new scope without separate approval |
| `PENDING_DECISION` | Name or semantic mapping unresolved or dependent on unverified behavior | Do not enforce as final or show as enabled without review |
| `INTERNAL_ONLY` | Engineering/process name, not a suitable general UI label | May remain unchanged in code, data, logs and engineering docs |

Use `status` **per term** and, for high-impact changes, **per specific UI label**. A product concept's approval does not make every draft string official.

## 2. Product context and audiences

**Product:** Vellistry, an author-controlled fiction writing and editing application. The approved first release is a manual-first writing environment with optional scoped AI suggestions, editable character/story-thread profiles, configurable fiction guidance and durable/portable manuscript handling. Later opportunities include series-level structure, deep story intelligence, collaboration, covers and professional publication output; these are **not** initial MVP features.

**Primary role:** **Author** — a signed-in person who owns and edits their own books, rules and approved story information. In user-facing first-person/system copy prefer **you**, **your books**, **your manuscript** over repeatedly saying “the author.” The existing system has one relevant product role. There is no approved collaborator, editor, publisher, staff, moderator or administrator role model for the MVP. Do not invent corresponding role switchers or access claims.

**Intended writers:** novelists, serialized/web-fiction writers, and writers in many genres. Expect users who know ordinary concepts such as books, chapters, drafts and characters, not necessarily APIs, tokens, source revisions, database row-level security or model context-window mechanics. Some writers avoid AI deliberately; this is a supported experience, not an onboarding failure.

**Experience constraints:** desktop-first authoring with responsive consideration; keyboard, screen reader, IME and RTL behavior require actual testing. Product English is the current source language (`<html lang="en">` in `apps/web/src/app/layout.tsx`); no locale rollout or Ghana-only formatting has been approved. Treat region, spelling preferences and date/currency format as localization decisions, not identity-based assumptions.

## 3. Fundamental language principles

1. **Describe the author's task, not an implementation artifact.** “Review changes” rather than “Resolve CAS conflict”; “Your books” rather than “books table”.
2. **Give one concept one primary name.** Shorter contextual labels are permitted if they cannot change the concept: **Rules Studio** (navigation) → **Rules** (short tab inside that studio), never “Prompts” for the same object.
3. **Do not merge neighboring concepts.** Book vs series; chapter vs scene; notes vs manuscript; outline vs accepted prose; rule vs canon; suggestion vs revision; connection vs selected model; download vs backup.
4. **Use specific action verbs.** “Create book” rather than “Create” outside an obvious create-book form. “Approve fact” rather than “Accept” when the choice changes approved story information.
5. **Show provenance and degree of certainty.** A proposed fact is **Suggested fact**, not **Fact added**; a saved draft needs an actual receipt.
6. **Preserve creative agency and style.** Language should explain choices, not score an author's prose as objectively “good/bad” or claim to detect AI-written text.
7. **Do not blame authors.** State the problem and practical recovery action; never imply a session/token/storage failure is their fault.
8. **No false reassurance.** Never say *permanently saved*, *fully secure*, *guaranteed original*, *always private*, *completely offline*, *lossless DOCX*, *zero cost*, or *immediately revoked* without specific verified guarantees.
9. **Don't promise availability.** An approved/future feature is not an active control until implemented, tested and authorized for its environment.
10. **Write for accessible interaction.** A meaningful visible label and matching accessible name must work without relying only on color, icon, placeholder, tooltip or pointer location.
11. **Use progressively disclosed detail.** Short labels for ordinary actions; precise explanatory copy for revisions, consent, data loss and security boundaries.
12. **Preserve author-supplied wording.** Names of books, chapters, characters, titles, custom rules and manuscript prose are the author's data, not strings agents should normalize automatically.

## 4. Canonical vocabulary and concept boundaries

**Reading the table:** `Primary UI term` is current where `EXISTING_UI`, describes an accepted *concept* where `APPROVED_CONCEPT`, and is a recommended display word requiring owner adoption where `PROPOSED_LABEL`. Entries can carry more than one category. Do not infer that a not-yet-built object has a live screen.

### 4.1 Authoring, documents and manuscript structure

| Primary UI term | Meaning and correct scope | Contextual alternative | Avoid / do not confuse with | Basis / status |
|---|---|---|---|---|

## Exact excerpt: docs/requirements/MVP-SCOPE-DECISION-2026-10-09.md lines1-42
Source 1ff3e91d49ab85cd3cd3f012fdf062bdd7dadc8f; blob7a25cf8ce88b3ddb221276c38203fc976cbeb3a9; original status preserved, not new approval.

---
id: VEL-PRODUCT-SCOPE-20261009-001
title: Initial Vellistry MVP product-scope decision
type: product-scope-decision
status: accepted
created_at: 2026-10-09
updated_at: 2026-10-09
decided_at: 2026-10-09
owner: project_owner
approved_by: project_owner
author: project-research
version: 1.0.0
sources:
  - "Owner message on 2026-10-09 in Fiction Writing Project: 'I agree', immediately replying to the R04 Vellistry MVP recommendation, its eight feature areas, and the explicit request to defer full Cover Studio and professional publishing. Original conversation permalink not archived."
  - "docs/research/R04-SPECIFIC-MVP-RECOMMENDATION-2026-10-09.md"
  - "docs/features/FEATURE-INVENTORY.md on PR #9 (396 discussed entries)"
  - "docs/requirements/PRODUCT-DIRECTION-FROZEN-DEFAULT-GUIDANCE-2026-10-08.md"
  - "docs/requirements/PRODUCT-DIRECTION-LIVE-STORY-PROFILES-2026-10-08.md on PR #9"
evidence:
  - "The preceding assistant offered one recommended eight-area MVP and asked for explicit owner agreement with delaying full cover design and professional EPUB/print. The project owner replied: 'I agree'."
  - "Approval covers product scope and approved deferral, but does not assert implementation, technology selection beyond ADR-0003, resolved research gates, or product readiness."
related_research:
  - R01
  - R02
  - R04
  - R05
  - R06
  - R07
  - R08
  - R10
  - R11
  - R13
  - R15
  - R16
  - R19
  - R21
related_adrs:
  - ADR-0003
related_features:
  - VEL-FEAT-02-001
  - VEL-FEAT-04-001
  - VEL-FEAT-08-021

## Exact excerpt: docs/requirements/MVP-USER-JOURNEYS-AND-ACCEPTANCE-2026-10-09.md lines72-94
Source 1ff3e91d49ab85cd3cd3f012fdf062bdd7dadc8f; blobb61aef6b9748382e1b173e52caf598178c389962; original status preserved, not new approval.


## Functional acceptance specifications (Given / When / Then)

Tests are **proposed for future automation/manual verification**. `MUST` below expresses a *candidate release contract*, not a tested claim. None is marked passed.

### M1 — Book/chapter organization

- **ACC-M1-01**: Given an authenticated author with no books, when they create a book and two chapters, then each item appears in that author's book navigation and can be reopened.
- **ACC-M1-02**: Given three differently titled chapters with saved content, when the author reorders them, then chapter order changes **without** moving prose to the wrong chapter or discarding an existing edit.
- **ACC-M1-03**: Given a note attached to a chapter, when the author navigates elsewhere and returns, then the note remains separate from accepted manuscript text.

### M2 — Editor operates fully without AI

- **ACC-M2-01**: Given no connected AI provider, when the author types 500+ invented words with paragraphs, headings, emphasis and basic lists, then the editor remains functional and does not display a forced model connection.
- **ACC-M2-02**: Given a formatted passage, when the author selects/copies/pastes, edits and uses undo/redo, then substantive text and supported semantic formatting remain intact.
- **ACC-M2-03**: Given a meaningful multi-chapter fixture, when the author searches for a phrase and uses keyboard navigation, then the intended result/selection is reachable without corrupting content.
- **ACC-M2-04**: Given real-browser tests across agreed target platforms, when users type, use IME/composition, move the caret and interact with screen-reader/keyboard controls, then significant focus, input loss and accessibility failures are documented and release-blocking defects resolved.

### M3 — Durable, portable author content

- **ACC-M3-01**: Given editing content and a visible save state, when a confirmed save completes and the document is reopened, then the editor restores all **supported** content and marks; false 'saved' indicators are release-blocking defects.
- **ACC-M3-02**: Given a simulated connection interruption during save, when service returns, then either the edits are recoverable or the app visibly identifies uncommitted edits and offers recovery; it must not silently acknowledge a write that was not durable.
- **ACC-M3-03**: Given a book with chapters, manually approved profiles and writing-rule settings, when a portable project backup is exported and restored into an authorized clean account/test environment, then the supported accepted state is reconstructed without cross-book leakage.

## Exact excerpt: apps/web/src/lib/workspace/book-workspace-session.ts lines1-26
Source 1ff3e91d49ab85cd3cd3f012fdf062bdd7dadc8f; blob9264cceaea7341ed3eec7d642680025ba4c947b8; original status preserved, not new approval.

import {chapterTitle, matchingReceipt, parseCommand, parseDocument, validId, validNotes,
  type WorkspaceCommand, type WorkspaceDocument, type WorkspacePort, type WorkspaceRequest} from "./book-workspace-contract";

export type WorkspaceSnapshot = Readonly<{
  phase: "idle" | "checking" | "loading" | "ready" | "denied" | "error" | "unverified";
  document: WorkspaceDocument | null; selectedChapterId: string | null;
  createTitle: string; renameTitle: string; bookNoteDraft: string; chapterNoteDraft: string;
  pending: boolean; uncertain: boolean; conflict: boolean; message: string;
}>;
type Scope = {owner: string; bookId: string; generation: number; key: string};
type Cache = {createTitle: string; drafts: Map<string, string>; renames: Map<string, string>; selected: string | null;
  operation: WorkspaceRequest | null; uncertain: boolean; conflict: boolean; minimumVersion: number};
export type WorkspaceSession = ReturnType<typeof createWorkspaceSession>;

function freeze<T>(value: T): T {
  if (value && typeof value === "object") {
    Object.values(value).forEach(v => { if (v && typeof v === "object") freeze(v); });
    Object.freeze(value);
  }
  return value;
}
const blank = (phase: WorkspaceSnapshot["phase"], message: string): WorkspaceSnapshot => ({
  phase, document: null, selectedChapterId: null, createTitle: "", renameTitle: "", bookNoteDraft: "", chapterNoteDraft: "",
  pending: false, uncertain: false, conflict: false, message,
});
const noteKey = (chapterId?: string) => chapterId === undefined ? "book" : JSON.stringify(["chapter", chapterId]);
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0068/IMPLEMENTATION-CONTRACT.md` @ `963c5e0c0af9359a595a5967018bab253a3dcc72`

~~~~~~markdown
# IMP-003A local manual editor contract

FACT: baseline main5e3aeec; reviewed repairPR128 head1ff3e91 and CI40838205911 PASS, owner merge not approved. Root78f80bb remains dirty/stale; corrected app serves3000/4100 from separate worktree. Existing IMP002 organizer/controller41tests, stable IDs, notes separation, ownership and pending/unknown handling are reused unchanged. WorkspaceService remains unregistered, direct writes restricted, six production decisions pending (PRINCIPAL conditional design is not target acceptance). MFA interactive testing deferred only. R01-R08 NOT_RUN; N12/historical EPERM BLOCKED.

Implementation: reusable client component plus headless Tiptap session and literal search decoration plugin. Bind only to existing ready, non-pending, non-uncertain workspace snapshot selected chapter, with injected verified-owner callback checked before/after async selection. Cache opened chapter Editor instances per owner/book/stable chapter ID to preserve document, selection and Undo history across reorder/rename/navigation. Hide and lock old text synchronously during verification/invalid workspace state; stale checks cannot expose editor. Clear former-owner editors on account switch. This is local UI isolation, not backend authorization. No production route, transport or server writes. Only test fixture mounts synthetic adapter/organizer/editor. No real manuscript, AI/model/key requirement.

Manual features: paragraphs; heading levels1-3; bold/italic/underline; ordered/bullet lists; native keyboard editing/Undo/Redo; toolbar keeps model selection; count words as Intl.Segmenter en word-like segments. Literal case-insensitive chapter search across inline marks within a textblock, no cross-paragraph match; decorative search does not change selection/history, explicit next/previous selects match; recompute ranges after edits and clear stale matches on chapter changes. Preserve leading/trailing/repeated spaces and Unicode, first-paragraph and middle-caret editing. Notes stay in existing separate controls, never imported into manuscript.

No persistence API: blank local drafts per newly opened chapter, retained only in current preview memory; banner explicitly says not saved to server or device, closing preview loses text. No Saved status, autosave, revision, durable recovery or completed JRN001-003 claims. Browser keyboard/render checks at desktop and390px; human AT/IME/long-manuscript performance and hosted durability remain NOT_RUN.

Dependency experiment: exact @tiptap/core, @tiptap/react, @tiptap/pm, @tiptap/starter-kit3.32.1 (registry matched/MIT); dev-only jsdom26.1.0 (MIT/Node>=18; latest30 requires Node24.15 and is unsuitable for local24.13). Existing Next16.4.1/React/Nest/Auth versions must stay fixed. No paid extensions/collaboration/cloud. Extend existing workspace test command with editor regressions; optional focused script. No workflow/governance-control change.

Official references inspected: https://tiptap.dev/docs/editor/getting-started/install/nextjs (client/SSR lifecycle), https://tiptap.dev/docs/editor/extensions/functionality/starterkit (v3 includes Underline/UndoRedo), https://tiptap.dev/docs/editor/getting-started/install/react. Verify pinned installed sources and actual tests; docs are not target acceptance.

Acceptance E01-E12: manual500word writing with AIoff; all required semantic formatting; keyboard Undo/Redo/caret; exact whitespace/Unicode; first-paragraph arbitrary selection replacement; middle insertion; literal search/inline marks/no selection theft/history pollution; stale match recomputation; stable chapter text/selection/history through rename/reorder and chapter switches; notes never alter prose; owner verification/mismatch/stale response/uncertain state concealment; accessible controls/responsive browser and honest local status. Synthetic fixtures only. Execute new focused/unit and real-browser checks plus existing Library/MFA/workspace/preflight, builds/checks and actual full governance/security/recovery CI.

PR strategy: stack editorPR on codex/vel-local-auth-runtime (reviewed1ff3e91) for bounded diff and accurate change_base. Do not modify or merge PR128. Owner integration order is128 then editor; retarget main only under applicable owner-governed provenance/CI process, preserving immutable packs. No automatic merge.
~~~~~~

### `apps/web/package.json` @ `46a7e911b4034f811ac71b266fb6018234814258`

~~~~~~markdown
{
  "name": "@vellistry/web",
  "private": true,
  "version": "0.0.1",
  "scripts": {
    "dev": "next dev --hostname 127.0.0.1 --port 3000",
    "build": "next build",
    "start": "next start",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "next": "16.4.1",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "@supabase/ssr": "^0.7.0",
    "@supabase/supabase-js": "^2.0.0",
    "tailwindcss": "^4.0.0"
  },
  "devDependencies": {
    "@types/node": "^24.0.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "@tailwindcss/postcss": "^4.0.0",
    "typescript": "^5.8.0"
  }
}
~~~~~~

### `package.json` @ `6c901eb277e031dcd2b576ba4d65d763dfdde343`

~~~~~~markdown
{
  "name": "vellistry",
  "private": true,
  "packageManager": "pnpm@10.18.0",
  "scripts": {
    "build": "pnpm --filter @vellistry/api build && pnpm --filter @vellistry/web build",
    "check": "pnpm --filter @vellistry/api typecheck && pnpm --filter @vellistry/web typecheck",
    "test:library-isolation": "pnpm --filter @vellistry/api exec tsx --test src/modules/auth/auth-runtime.spec.ts src/modules/books/book-create-input.spec.ts ../web/src/lib/library/book-library-state.test.ts ../web/src/lib/library/book-library-session.test.ts",
    "dev:web": "pnpm --filter @vellistry/web dev",
    "dev:api": "pnpm --filter @vellistry/api dev",
    "supabase:start": "supabase start",
    "supabase:stop": "supabase stop",
    "supabase:status": "supabase status",
    "supabase:reset": "supabase db reset",
    "test:hosted-preflight": "node --test tests/hosted_supabase_preflight.test.mjs",
    "test:auth-mfa": "pnpm --filter @vellistry/api exec tsx --test ../web/src/lib/auth/mfa-flow.test.ts ../web/src/lib/auth/auth-panel.test.tsx",
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
