---
id: VEL-CP-0074
title: 'Context for VEL-TASK-0074: IMP003C local editor save recovery composition
  and loopback interruption'
type: context-pack
status: prepared
created_at: '2026-10-31'
version: 0.1.0
task_id: VEL-TASK-0074
base_commit: 5ae55a308e8550a7412e11fc4b4c4cd431243f19
task_blob_sha: 80c5b838266bf8680620ff3898e6cfaa867b7a95
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
  git_blob_sha: b5e8c49088ccde924ec6b5da2294485e1048abb5
  source_status: active
- path: docs/agent-workflow/PR-COMPLIANCE.md
  role: governing-source
  git_blob_sha: 5f4845623aef3abb15fba7fbe8e78474902cca00
  source_status: unrecorded
- path: apps/web/src/lib/editor/manuscript-session.ts
  role: governing-source
  git_blob_sha: 25583e9fbaf8826901cc85ea66cd4aed21418da5
  source_status: unrecorded
- path: apps/web/src/components/editor/manuscript-editor.tsx
  role: governing-source
  git_blob_sha: c869ff164d96407fb8320aa03f292291746e5f1a
  source_status: unrecorded
- path: apps/web/src/lib/editor/manuscript-recovery.ts
  role: governing-source
  git_blob_sha: eb653fe3ec0963d22a08df27fc6e1d0f6fed7d2b
  source_status: unrecorded
- path: apps/api/src/modules/workspace/manuscript-contract.ts
  role: governing-source
  git_blob_sha: 64f2889bfdac4f8af6546c3a206a9b91e0c5b1a4
  source_status: unrecorded
- path: apps/api/src/modules/workspace/manuscript.service.ts
  role: governing-source
  git_blob_sha: 7b98a05ecfa2d786c852c9ab440435cb047efb45
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0074/CONTRACT.md
  role: governing-source
  git_blob_sha: fcf838a641c8788b08321aef59db9581635e4f87
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0074/OWNER-SCOPE.md
  role: governing-source
  git_blob_sha: 03fe36effa5a6bf9ef2f16614001fcf13bc73670
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0074/SOURCE-REFERENCES.json
  role: governing-source
  git_blob_sha: d4ada95f25c3452b6c91ea76555218e0150fcab6
  source_status: unrecorded
source_gaps:
- id: PRODUCTION
  limitation: Synthetic principals/session rows/storage; no hosted or real-session
    enforcement. R01-R08 NOT_RUN N12/EPERM BLOCKED.
prepared_by: agent_workflow.py
---

# VEL-CP-0074 — IMP003C local editor save recovery composition and loopback interruption

## Objective
Compose existing editor/save/recovery through synthetic transport and real loopback HTTP interruption against unchanged disposable PG17

## Scope
**In:** apps/web/src/lib/editor/manuscript-composition.ts; apps/web/src/components/editor/manuscript-composition-preview.tsx; apps/web/src/lib/editor/manuscript-composition.test.tsx; apps/web/src/lib/editor/manuscript-editor.test.mjs; tests/fixtures/manuscript-transport-synthetic.ts; tests/editor/persistence/manuscript-http.integration.mjs; tests/workspace/persistence/run_pg17.py; CURRENT-STATE.md; docs/agent-workflow/tasks/VEL-TASK-0074.yaml; docs/agent-workflow/context-packs/VEL-CP-0074.md; docs/agent-workflow/execution-bundles/VEL-EB-0074.md; docs/agent-workflow/inputs/VEL-TASK-0074/*; docs/agent-workflow/PR-COMPLIANCE.yaml; docs/reports/VEL-IMP003C-COMPOSITION-0074.md; docs/reports/evidence/VEL-TASK-0074/*
**Out:** Any SQL changes, dependencies, CI policy/workflows, Auth/session/production route/gateway registration; Hosted, production, private manuscripts, paid APIs, persistent browser storage, deployment, settings, merge and successor work

## Evidence and authority constraints
The text below is a readable rendering of pinned Git blobs; exact raw bytes remain recoverable from the recorded commit/blob SHAs. Recorded source statuses remain in force: draft research is not accepted requirements. Original unarchived uploads are not independently verified merely by being mentioned.

**Known source gaps:**
- PRODUCTION: Synthetic principals/session rows/storage; no hosted or real-session enforcement. R01-R08 NOT_RUN N12/EPERM BLOCKED.

## Permissions and acceptance
**Allowed:** Commit Task and governing sources then generate/validate/commit immutable CP before code, Implement exact listed paths; frozen install, synthetic DOM/UI and owned loopback Node HTTP harness, Execute unchanged SQL fixtures only through existing owned disposable PG17 runner; extend its required test execution without changing CI policy, Distinct read-only final source review, Draft then ReadyCI; no merge
**Owner approval required:** Scope expansion, SQL/dependency/CI/security/hosted/production changes, persistent device storage, merge or successor
**Acceptance criteria:**
- Capture immutable operation/revision/document; preserve newer writing and uncertain identity until authoritative receipt
- Suppress delayed/aborted results after identity/chapter change; explicit isolated recovery never automatic overwrite
- Actual DOM editor/status/controls tests preserve Unicode, marks, selection, Undo and listener cleanup
- Real127.0.0.1 ephemeral HTTP disconnect after disposable PG commit; receipt resolves without duplicate; missing receipt remains unknown; cleanup verified
- Existing regressions/build/check/full governance/PG security/recovery and exact-head ReadyCI; no SQL/CI/dependency/Auth changes

## Deliverables
- Reusable isolated composition controller and test-only preview with actual editor interactions
- Synthetic transport and actual loopback socket/response interruption, durable receipt/no-duplicate and rollback/conflict evidence
- EB, distinct final review, Draft then ReadyCI and unmerged PR

## Pinned source snapshots
Git commit: `5ae55a308e8550a7412e11fc4b4c4cd431243f19`. Read source statuses independently from task intent.

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

### `CURRENT-STATE.md` @ `b5e8c49088ccde924ec6b5da2294485e1048abb5`

~~~~~~markdown
---
id: VEL-STATE-001
type: current-state
status: active
created_at: 2026-10-08
updated_at: 2026-10-31
owner: project_owner
version: 0.2.2
---

# Vellistry — current verified state

## IMP003B disposable implementation — 2026-10-31

FACT: main857b686 integrates PR132; exact reviewed tree and post-main41184485735
PASS. Its Task0071 single SQL-path record is now reviewed-base input. PR130
previously repaired stacked compliance; original PR129 run40951100355 remainsFAIL.
Task0071 was reconstructed with a new committed validated CP, preserving original
0190a22 preparation and never-committed pack/archive separately. Candidate revision
CAS/idempotency/read contracts, synthetic recovery and one disposable PG17 fixture
are under verification; EB/report and final PR evidence govern actual results.
No production route, durable browser draft or hosted-save claim. Source review,
exact-head CI and separate owner merge remain required. Task0068 editor stays
local-only. R01-R08 NOT_RUN; N12/historical EPERM BLOCKED; PRINCIPAL/SESSION/gateway
and hosted/private-pilot acceptance pending. Issues108/131 OPEN; remediation
delegation EXPIRED. Historical reports retain earlier failures and limitations.

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

### `apps/web/src/lib/editor/manuscript-session.ts` @ `25583e9fbaf8826901cc85ea66cd4aed21418da5`

~~~~~~markdown
import {Editor} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import {TextSelection} from "@tiptap/pm/state";
import {parseDocument, validId} from "../workspace/book-workspace-contract";
import type {WorkspaceSnapshot} from "../workspace/book-workspace-session";
import {ManuscriptSearch, manuscriptSearchKey, manuscriptWordCount} from "./manuscript-search";

export type ManuscriptFormat = "paragraph" | "heading1" | "heading2" | "heading3" | "bold" | "italic" | "underline" | "bulletList" | "orderedList" | "undo" | "redo";
type Scope = Readonly<{owner: string; bookId: string; chapterId: string; key: string}>;
type Entry = {scope: Scope; editor: Editor};
export type ManuscriptSnapshot = Readonly<{
  phase: "idle" | "checking" | "ready" | "paused" | "unverified";
  editor: Editor | null; scope: Scope | null; words: number; query: string; matches: number; message: string;
}>;
/** Local UI state only. Never writes a WorkspacePort, server, localStorage or accepted revision. */
export function createManuscriptSession(readOwner: () => Promise<string | null>) {
  let active: Entry | null = null;
  let cacheOwner: string | null = null;
  let generation = 0;
  let disposed = false;
  const entries = new Map<string, Entry>();
  const listeners = new Set<() => void>();
  let model: ManuscriptSnapshot = Object.freeze({phase: "idle", editor: null, scope: null, words: 0, query: "", matches: 0,
    message: "Choose a chapter to write in this local preview."});
  function emit(next: ManuscriptSnapshot) { model = Object.freeze(next); listeners.forEach(fn => fn()); }
  function publish() {
    if (!active || disposed) return;
    const search = manuscriptSearchKey.getState(active.editor.state);
    emit({phase: "ready", editor: active.editor, scope: active.scope, words: manuscriptWordCount(active.editor.state.doc),
      query: search?.query ?? "", matches: search?.matches.length ?? 0, message: "Local draft only. Not saved to a server or this device."});
  }
  function hide(phase: ManuscriptSnapshot["phase"], message: string) {
    active = null;
    for (const entry of entries.values()) entry.editor.setEditable(false, false);
    emit({phase, editor: null, scope: null, words: 0, query: "", matches: 0, message});
  }
  function clear() { for (const entry of entries.values()) entry.editor.destroy(); entries.clear(); }
  async function bind(workspace: WorkspaceSnapshot) {
    if (disposed) return;
    const token = ++generation;
    hide("checking", "Checking the selected chapter for this local preview...");
    if (workspace.phase !== "ready" || workspace.pending || workspace.uncertain || workspace.conflict || !workspace.document) {
      hide("paused", "Writing is paused while the book is unavailable or being checked. Local text remains only in this preview."); return;
    }
    const document = parseDocument(workspace.document, workspace.document.bookId);
    const chapter = document?.chapters.find(c => c.id === workspace.selectedChapterId);
    if (!document || !chapter) { hide("paused", "Choose a chapter from the verified book."); return; }
    let owner: string | null;
    try {
      owner = await readOwner();
      if (disposed || token !== generation) return;
      const confirmed = await readOwner();
      if (disposed || token !== generation) return;
      if (!validId(owner) || confirmed !== owner) { hide("unverified", "Your account could not be verified. Writing is paused."); return; }
    } catch { if (!disposed && token === generation) hide("unverified", "Your account could not be verified. Writing is paused."); return; }
    if (cacheOwner !== null && cacheOwner !== owner) clear();
    cacheOwner = owner;
    const key = JSON.stringify([owner, document.bookId, chapter.id]);
    let entry = entries.get(key);
    if (!entry) {
      const scope = Object.freeze({owner, bookId: document.bookId, chapterId: chapter.id, key});
      const editor = new Editor({
        extensions: [StarterKit.configure({heading: {levels: [1, 2, 3]}, link: false, code: false, codeBlock: false,
          blockquote: false, strike: false, horizontalRule: false}), ManuscriptSearch],
        content: {type: "doc", content: [{type: "paragraph"}]},
        parseOptions: {preserveWhitespace: "full"}, injectCSS: false, autofocus: false,
        editorProps: {attributes: {role: "textbox", "aria-label": "Chapter manuscript", "aria-multiline": "true",
          style: "white-space:pre-wrap;min-height:20rem;padding:1rem;overflow-wrap:anywhere"}},
        onTransaction: ({editor: changed}) => { if (active?.editor === changed) publish(); },
      });
      entry = {scope, editor}; entries.set(key, entry);
    }
    active = entry;
    // Search is chapter-local and does not change the stored caret or Undo history.
    entry.editor.view.dispatch(entry.editor.state.tr.setMeta(manuscriptSearchKey, "").setMeta("addToHistory", false));
    entry.editor.setEditable(true, false); publish();
  }
  function format(kind: ManuscriptFormat) {
    if (!active || model.phase !== "ready" || !active.editor.isEditable) return false;
    const chain = active.editor.chain().focus(undefined, {scrollIntoView: false});
    switch (kind) {
      case "paragraph": return chain.setParagraph().run();
      case "heading1": return chain.setHeading({level: 1}).run();
      case "heading2": return chain.setHeading({level: 2}).run();
      case "heading3": return chain.setHeading({level: 3}).run();
      case "bold": return chain.toggleBold().run();
      case "italic": return chain.toggleItalic().run();
      case "underline": return chain.toggleUnderline().run();
      case "bulletList": return chain.toggleBulletList().run();
      case "orderedList": return chain.toggleOrderedList().run();
      case "undo": return chain.undo().run();
      case "redo": return chain.redo().run();
    }
  }
  function search(query: string) {
    if (!active || model.phase !== "ready" || query.length > 200) return;
    active.editor.view.dispatch(active.editor.state.tr.setMeta(manuscriptSearchKey, query).setMeta("addToHistory", false));
  }
  function find(direction: 1 | -1) {
    if (!active || model.phase !== "ready") return false;
    const editor = active.editor, matches = manuscriptSearchKey.getState(editor.state)?.matches ?? [];
    if (!matches.length) return false;
    const selection = editor.state.selection;
    const selected = matches.findIndex(m => m.from === selection.from && m.to === selection.to);
    let index = selected >= 0 ? (selected + direction + matches.length) % matches.length : direction === 1
      ? matches.findIndex(m => m.from >= selection.from) : matches.findLastIndex(m => m.to <= selection.to);
    if (index < 0) index = direction === 1 ? 0 : matches.length - 1;
    const match = matches[index];
    editor.view.dispatch(editor.state.tr.setSelection(TextSelection.create(editor.state.doc, match.from, match.to)).setMeta("addToHistory", false).scrollIntoView());
    editor.commands.focus(undefined, {scrollIntoView: true}); return true;
  }
  return {snapshot: () => model, subscribe(fn: () => void) { listeners.add(fn); return () => { listeners.delete(fn); }; },
    bind, format, search, find,
    pause() { if (!disposed) { generation++; hide("paused", "Writing is paused. Local text is not saved."); } },
    dispose() {
      if (disposed) return;
      generation++; disposed = true; active = null; clear();
      emit({phase: "idle", editor: null, scope: null, words: 0, query: "", matches: 0, message: "Local editor closed. Text was not saved."});
      listeners.clear();
    },
  };
}
export type ManuscriptSession = ReturnType<typeof createManuscriptSession>;
~~~~~~

### `apps/web/src/components/editor/manuscript-editor.tsx` @ `c869ff164d96407fb8320aa03f292291746e5f1a`

~~~~~~markdown
"use client";
import React, {useEffect, useState, useSyncExternalStore} from "react";
import {EditorContent} from "@tiptap/react";
import type {WorkspaceSession} from "../../lib/workspace/book-workspace-session";
import {createManuscriptSession, type ManuscriptFormat, type ManuscriptSession} from "../../lib/editor/manuscript-session";

const button = "rounded border px-3 py-2 disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2";
/** Reusable, unregistered local editor. Caller supplies the existing workspace session and verified-owner seam. */
export function ManuscriptWorkspace({workspace, readOwner}: {workspace: WorkspaceSession; readOwner: () => Promise<string | null>}) {
  const state = useSyncExternalStore(workspace.subscribe, workspace.snapshot, workspace.snapshot);
  const [session, setSession] = useState<ManuscriptSession | null>(null);
  useEffect(() => {
    const next = createManuscriptSession(readOwner); setSession(next);
    return () => next.dispose();
  }, [readOwner]);
  useEffect(() => {
    if (session) void session.bind(state);
    // Notes typing must not recreate the editor or overwrite its selection.
  }, [session, state.phase, state.document, state.selectedChapterId, state.pending, state.uncertain, state.conflict]);
  const allowed = state.phase === "ready" && !state.pending && !state.uncertain && !state.conflict;
  return session ? <ManuscriptEditor session={session} bookId={allowed ? state.document?.bookId ?? null : null}
    chapterId={allowed ? state.selectedChapterId : null}/>
    : <section aria-label="Manuscript editor"><p role="status">Preparing the local manuscript editor...</p></section>;
}
export function ManuscriptEditor({session, bookId, chapterId}: {session: ManuscriptSession; bookId: string | null; chapterId: string | null}) {
  const model = useSyncExternalStore(session.subscribe, session.snapshot, session.snapshot);
  const editor = model.phase === "ready" && model.scope?.bookId === bookId && model.scope.chapterId === chapterId ? model.editor : null;
  function control(label: string, command: ManuscriptFormat, active?: string) {
    return <button type="button" className={button} onMouseDown={event => event.preventDefault()}
      aria-pressed={active ? editor?.isActive(active) ?? false : undefined}
      disabled={!editor || (command === "undo" && !editor.can().undo()) || (command === "redo" && !editor.can().redo())}
      onClick={() => session.format(command)}>{label}</button>;
  }
  return <section className="manual-manuscript min-w-0 space-y-3 rounded border p-4" aria-label="Manuscript editor">
    <h2 className="text-xl font-semibold">Manuscript editor</h2>
    <p>AI off. Manual writing.</p>
    <p role="note">Local draft only. Not saved to a server or this device. Closing this preview loses its text.</p>
    <p role="status" aria-live="polite">{model.message}</p>
    {editor ? <>
      <div role="group" aria-label="Manuscript formatting" className="flex flex-wrap items-center gap-2">
        <label>Text style <select className={button} aria-label="Text style"
          value={editor.isActive("heading", {level: 1}) ? "heading1" : editor.isActive("heading", {level: 2}) ? "heading2" : editor.isActive("heading", {level: 3}) ? "heading3" : "paragraph"}
          onChange={event => session.format(event.target.value as ManuscriptFormat)}>
          <option value="paragraph">Paragraph</option><option value="heading1">Heading 1</option>
          <option value="heading2">Heading 2</option><option value="heading3">Heading 3</option>
        </select></label>
        {control("Bold", "bold", "bold")}{control("Italic", "italic", "italic")}{control("Underline", "underline", "underline")}
        {control("Bullet list", "bulletList", "bulletList")}{control("Numbered list", "orderedList", "orderedList")}
        {control("Undo", "undo")}{control("Redo", "redo")}
      </div>
      <div role="search" aria-label="Search selected chapter" className="flex flex-wrap items-center gap-2">
        <label>Search this chapter <input type="search" maxLength={200} value={model.query} className={button}
          onChange={event => session.search(event.target.value)}/></label>
        <button type="button" className={button} disabled={!model.matches} onClick={() => session.find(-1)}>Previous match</button>
        <button type="button" className={button} disabled={!model.matches} onClick={() => session.find(1)}>Next match</button>
        <button type="button" className={button} disabled={!model.query} onClick={() => session.search("")}>Clear search</button>
        <output aria-live="polite">{model.matches} matches in this chapter</output>
      </div>
      <p className="text-sm">Search matches text within a paragraph or heading, including formatted text.</p>
      <div className="rounded border bg-white text-slate-950"><EditorContent key={model.scope!.key} editor={editor}/></div>
      <button type="button" className={button} onClick={() => editor.commands.focus(undefined, {scrollIntoView: false})}>Resume writing</button>
      <output aria-label="Word count">{model.words} {model.words === 1 ? "word" : "words"}</output>
    </> : <p>Select an available chapter to write. Account or book changes pause this preview.</p>}
    <style>{`.manual-manuscript .tiptap p{margin:.5em 0}.manual-manuscript .tiptap h1{font-size:1.8em;font-weight:700}.manual-manuscript .tiptap h2{font-size:1.5em;font-weight:700}.manual-manuscript .tiptap h3{font-size:1.2em;font-weight:700}.manual-manuscript .tiptap ul{list-style:disc;padding-left:1.8em}.manual-manuscript .tiptap ol{list-style:decimal;padding-left:1.8em}.manual-manuscript .tiptap:focus-visible{outline:2px solid #2458a6;outline-offset:2px}`}</style>
  </section>;
}
~~~~~~

### `apps/web/src/lib/editor/manuscript-recovery.ts` @ `eb653fe3ec0963d22a08df27fc6e1d0f6fed7d2b`

~~~~~~markdown
/** Deterministic synthetic recovery. Storage is injected; no browser/device durability claim. */
export type DraftScope=Readonly<{author:string;book:string;chapter:string}>;
export type DraftPhase="unsaved"|"saving"|"confirmed"|"rejected"|"conflicted"|"unknown"|"recoverable"|"unverified";
export type DraftStorage={get(key:string):unknown;set(key:string,value:unknown):void};
type Pending={id:string;text:string;base:number};
type Entry={scope:DraftScope;text:string;base:number;phase:DraftPhase;pending?:Pending};
export function createDraftRecovery(storage:DraftStorage,validate:(value:unknown)=>unknown,clientId:string){
 if(typeof clientId!=="string"||!clientId||clientId.length>100)throw new Error("Explicit synthetic client identity required");
 let active:Entry|null=null;let epoch=0;
 const key=(s:DraftScope)=>JSON.stringify([s.author,s.book,s.chapter,clientId]);
 function checked(s:DraftScope){if(!s||Object.keys(s).sort().join()!=="author,book,chapter"||Object.values(s).some(v=>typeof v!=="string"||!v||v.length>100))throw new Error("Invalid scope");return Object.freeze({...s});}
 function persist(){if(active)storage.set(key(active.scope),JSON.parse(JSON.stringify(active)));}
 function snapshot(){return active?JSON.parse(JSON.stringify(active)) as Entry:null;}
 return {
  snapshot,
  pendingTicket(){return active?.pending?Object.freeze({epoch,scope:active.scope,id:active.pending.id}):null;},
  bind(scope:DraftScope|null,accepted:unknown,revision:number){epoch++;active=null;if(!scope)return;const s=checked(scope);if(!Number.isSafeInteger(revision)||revision<1)throw new Error("Invalid revision");const text=JSON.stringify(validate(accepted));active={scope:s,text,base:revision,phase:"confirmed"};},
  pause(){epoch++;if(active)active.phase="unverified";active=null;},
  edit(value:unknown){if(!active)throw new Error("Unverified identity");active.text=JSON.stringify(validate(value));active.phase=active.pending?"unknown":"unsaved";persist();},
  begin(id:string){if(!active||active.pending||active.phase!=="unsaved"||typeof id!=="string"||!id||id.length>100)throw new Error("Save unavailable");active.pending={id,text:active.text,base:active.base};active.phase="saving";persist();return Object.freeze({epoch,scope:active.scope,...active.pending});},
  settle(ticket:{epoch:number;scope:DraftScope;id:string},outcome:"confirmed"|"rejected"|"conflicted"|"unknown",revision?:number){
   if(!active||ticket.epoch!==epoch||key(ticket.scope)!==key(active.scope)||active.pending?.id!==ticket.id)return false;
   const pending=active.pending;
   if(outcome==="confirmed"&&revision===pending.base+1){const stale=revision<active.base;active.base=Math.max(active.base,revision);active.phase=stale?"conflicted":active.text===pending.text?"confirmed":"unsaved";delete active.pending;}
   else if(outcome==="rejected"||outcome==="conflicted"){active.phase=outcome;delete active.pending;}
   else active.phase="unknown";persist();return true;
  },
  recovery(){if(!active)return null;try{const candidate=storage.get(key(active.scope)) as Entry;if(!candidate||key(checked(candidate.scope))!==key(active.scope)||!Number.isSafeInteger(candidate.base)||candidate.base<1||typeof candidate.text!=="string"||candidate.text.length>300000)return null;validate(JSON.parse(candidate.text));if(candidate.pending){if(typeof candidate.pending.id!=="string"||!candidate.pending.id||candidate.pending.id.length>100||(!Number.isSafeInteger(candidate.pending.base)||candidate.pending.base<1||candidate.pending.base>candidate.base)) return null;validate(JSON.parse(candidate.pending.text));}return JSON.parse(JSON.stringify({...candidate,phase:"recoverable"}));}catch{return null;}},
  recover(candidate:unknown){if(!active)throw new Error("Identity unavailable");const actual=this.recovery();if(!actual||JSON.stringify(actual)!==JSON.stringify(candidate))throw new Error("Invalid recovery candidate");active.text=actual.text;active.pending=actual.pending;active.phase=actual.pending?"unknown":"unsaved";/* retain current accepted base; never auto-save recovered content */persist();},
 };
}
~~~~~~

### `apps/api/src/modules/workspace/manuscript-contract.ts` @ `64f2889bfdac4f8af6546c3a206a9b91e0c5b1a4`

~~~~~~markdown
/** Pure supported-document contract. No Auth, storage, normalization or network. */
export type ManuscriptNode = {type:string;content?:ManuscriptNode[];text?:string;attrs?:Record<string,number|null>;marks?:{type:string}[]};
export type SaveOperation = Readonly<{operationId:string;bookId:string;chapterId:string;expectedRevision:number;document:ManuscriptNode}>;
export function identifier(v:unknown):string {
 if(typeof v!=="string"||! /^[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}$/i.test(v))throw new Error("Invalid identifier");return v.toLowerCase();
}
function object(v:unknown):Record<string,unknown>{if(!v||typeof v!=="object"||Array.isArray(v)||![Object.prototype,null].includes(Object.getPrototypeOf(v)))throw new Error("Invalid object");return v as Record<string,unknown>;}
function exact(v:Record<string,unknown>,keys:string[]){if(Object.keys(v).sort().join()!==keys.sort().join())throw new Error("Unexpected fields");}
export function document(value:unknown):ManuscriptNode {
 let count=0;
 function visit(raw:unknown,parent:string,depth:number):ManuscriptNode {
  if(depth>32||++count>20000)throw new Error("Document complexity");const n=object(raw);const type=n.type;
  if(typeof type!=="string")throw new Error("Invalid node");
  const allowed:Record<string,string[]>={root:["doc"],doc:["paragraph","heading","bulletList","orderedList"],paragraph:["text","hardBreak"],heading:["text","hardBreak"],bulletList:["listItem"],orderedList:["listItem"],listItem:["paragraph","bulletList","orderedList"]};
  if(!allowed[parent]?.includes(type))throw new Error("Unsupported structure");
  const keys=["type"];if(n.content!==undefined)keys.push("content");if(n.attrs!==undefined)keys.push("attrs");if(n.text!==undefined)keys.push("text");if(n.marks!==undefined)keys.push("marks");exact(n,keys);
  if(type==="text"){
   if(typeof n.text!=="string"||!n.text.length||/\u0000|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?<![\uD800-\uDBFF])[\uDC00-\uDFFF]/u.test(n.text)||n.content!==undefined||n.attrs!==undefined)throw new Error("Invalid text");
   if(n.marks!==undefined){if(!Array.isArray(n.marks)||n.marks.length>3)throw new Error("Invalid marks");const seen=new Set();for(const mark of n.marks){const m=object(mark);exact(m,["type"]);if(!["bold","italic","underline"].includes(String(m.type))||seen.has(m.type))throw new Error("Invalid mark");seen.add(m.type);}}
  }else{
   if(n.text!==undefined||n.marks!==undefined)throw new Error("Invalid block");
   if(type==="heading"){const a=object(n.attrs);exact(a,["level"]);if(![1,2,3].includes(Number(a.level))||typeof a.level!=="number")throw new Error("Invalid heading");}
   else if(type==="orderedList"&&n.attrs!==undefined){const a=object(n.attrs);exact(a,a.type===undefined?["start"]:["start","type"]);if(a.type!==undefined&&a.type!==null)throw new Error("Unsupported list type");if(!Number.isSafeInteger(a.start)||Number(a.start)<1||Number(a.start)>2147483647)throw new Error("Invalid list start");}
   else if(n.attrs!==undefined)throw new Error("Unexpected attributes");
   if(type==="hardBreak"){if(n.content!==undefined)throw new Error("Invalid break");}
   else if(n.content!==undefined){if(!Array.isArray(n.content))throw new Error("Invalid children");n.content.forEach(x=>visit(x,type,depth+1));}
   if(["doc","bulletList","orderedList","listItem"].includes(type)&&(!Array.isArray(n.content)||!n.content.length))throw new Error("Missing children");
   if(type==="listItem"&&(n.content as ManuscriptNode[])[0].type!=="paragraph")throw new Error("List must start with paragraph");
  }
  return n as unknown as ManuscriptNode;
 }
 visit(value,"root",0);const json=JSON.stringify(value);if(new TextEncoder().encode(json).length>262144)throw new Error("Document too large");return JSON.parse(json) as ManuscriptNode;
}
export function saveOperation(raw:unknown):SaveOperation {
 const r=object(raw);exact(r,["operationId","bookId","chapterId","expectedRevision","document"]);
 if(typeof r.expectedRevision!=="number"||!Number.isSafeInteger(r.expectedRevision)||r.expectedRevision<1||r.expectedRevision>=2147483647)throw new Error("Invalid revision");
 const frozen=document(r.document);const freeze=(node:unknown):void=>{if(node&&typeof node==="object"){Object.values(node).forEach(freeze);Object.freeze(node);}};freeze(frozen);
 return Object.freeze({operationId:identifier(r.operationId),bookId:identifier(r.bookId),chapterId:identifier(r.chapterId),expectedRevision:r.expectedRevision,document:frozen});
}
~~~~~~

### `apps/api/src/modules/workspace/manuscript.service.ts` @ `7b98a05ecfa2d786c852c9ab440435cb047efb45`

~~~~~~markdown
import {SaveOperation,saveOperation,identifier,document} from "./manuscript-contract";
import {checkedPrincipal,VerifiedPrincipal,WorkspacePrincipalProvider} from "./workspace-principal";
export type ManuscriptReceipt={operationId:string;bookId:string;chapterId:string;outcome:"confirmed"|"conflicted"|"rejected";revision:number};
export interface ManuscriptPort {
 save(principal:VerifiedPrincipal,operation:SaveOperation):Promise<unknown>;
 read(principal:VerifiedPrincipal,book:string,chapter:string,revision?:number):Promise<unknown>;
 lookup(principal:VerifiedPrincipal,book:string,chapter:string,operation:string):Promise<unknown>;
}
type Result={status:"confirmed"|"conflicted"|"rejected";receipt:ManuscriptReceipt}|{status:"unknown"|"denied"|"invalid"|"unavailable"}|{status:"ready";value:{bookId:string;chapterId:string;revision:number;document:unknown}};
/** Experimental request-principal-bound capability; deliberately unregistered. */
export class ManuscriptService {
 private readonly pending=new Map<string,SaveOperation>();
 private readonly floors=new Map<string,number>();
 constructor(private readonly principals:WorkspacePrincipalProvider,private readonly port:ManuscriptPort){}
 private async principal(){return checkedPrincipal(await this.principals.verify());}
 private key(p:VerifiedPrincipal,b:string,c:string){return JSON.stringify([p.authorId,b,c]);}
 private async still(p:VerifiedPrincipal){const next=await this.principal();return next?.authorId===p.authorId&&next.sessionId===p.sessionId;}
 private receipt(raw:unknown,op:SaveOperation):ManuscriptReceipt {
  if(!raw||typeof raw!=="object")throw new Error("Invalid receipt");const r=raw as ManuscriptReceipt;
  if(Object.keys(r).sort().join()!=="bookId,chapterId,operationId,outcome,revision"||r.operationId!==op.operationId||r.bookId!==op.bookId||r.chapterId!==op.chapterId||!["confirmed","conflicted","rejected"].includes(r.outcome)||!Number.isSafeInteger(r.revision)||r.revision<1||(r.outcome==="confirmed"&&r.revision!==op.expectedRevision+1))throw new Error("Invalid receipt");return Object.freeze({...r});
 }
 async save(raw:unknown):Promise<Result>{
  let op:SaveOperation;try{op=saveOperation(raw);}catch{return {status:"invalid"};}
  let p:VerifiedPrincipal|null;try{p=await this.principal();}catch{return {status:"unavailable"};}if(!p)return {status:"denied"};
  const k=this.key(p,op.bookId,op.chapterId);if(this.pending.has(k))return {status:"unknown"};
  this.pending.set(k,op);
  try{const receipt=this.receipt(await this.port.save(p,op),op);if(!await this.still(p))return {status:"unknown"};return this.terminal(k,op,receipt);}catch{return {status:"unknown"};}
 }
 private terminal(k:string,op:SaveOperation,r:ManuscriptReceipt):Result {
  if(this.pending.get(k)!==op)return {status:"unknown"};this.pending.delete(k);this.floors.set(k,Math.max(this.floors.get(k)??0,r.revision));return {status:r.outcome,receipt:r};
 }
 async reconcile(book:string,chapter:string):Promise<Result>{
  try{book=identifier(book);chapter=identifier(chapter);const p=await this.principal();if(!p)return {status:"denied"};const k=this.key(p,book,chapter),op=this.pending.get(k);if(!op)return {status:"unknown"};const r=this.receipt(await this.port.lookup(p,book,chapter,op.operationId),op);if(!await this.still(p))return {status:"unknown"};return this.terminal(k,op,r);}catch{return {status:"unknown"};}
 }
 async read(book:string,chapter:string,revision?:number):Promise<Result>{
  try{book=identifier(book);chapter=identifier(chapter);if(revision!==undefined&&(!Number.isSafeInteger(revision)||revision<1))return {status:"invalid"};const p=await this.principal();if(!p)return {status:"denied"};const r=await this.port.read(p,book,chapter,revision) as {bookId:string;chapterId:string;revision:number;document:unknown};
   if(!r||Object.keys(r).sort().join()!=="bookId,chapterId,document,revision"||r.bookId!==book||r.chapterId!==chapter||!Number.isSafeInteger(r.revision)||r.revision<1||(revision!==undefined&&r.revision!==revision))return {status:"unavailable"};const value={...r,document:document(r.document)};if(!await this.still(p))return {status:"unavailable"};const k=this.key(p,book,chapter);if(revision===undefined&&r.revision<(this.floors.get(k)??0))return {status:"unavailable"};if(revision===undefined)this.floors.set(k,r.revision);return {status:"ready",value};
  }catch{return {status:"unavailable"};}
 }
}
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0074/CONTRACT.md` @ `fcf838a641c8788b08321aef59db9581635e4f87`

~~~~~~markdown
# IMP003C composition contract

FACT: PR133 main e83022b and post-main41193526527 passed. Task0071 SQL approval is not transferable. No SQL changes or new SQL file permitted. Reuse existing disposable schema/functions and verified synthetic principal seams, never infer Auth/session acceptance.

Implement a reusable unregistered controller composing ManuscriptSession with existing pure document validator, immutable SaveOperation, injected scope-bound transport and DraftRecovery. Inject trusted-owner reader, synthetic storage/client identity/operation ID generator. All async continuations recheck scope generation and owner before showing data. Unavailable identity hides editor/save results; previous-author/chapter callbacks cannot resurrect state. Bind accepted owned revision before enabling editing. Track local document changes separately from search/selection transactions. Preserve newer edits, selection/search/Undo; do not replace document on delayed ACK. A matching terminal receipt advances only the acknowledged revision. Unknown retains original ID and prevents new-key dispatch. On return, recovery candidate is explicit, not automatic accepted replacement; pending outcomes reconcile only by original receipt, missing receipt never proves failure. Copy must qualify confirmation as test-environment only, never deployed/device Saved.

Synthetic adapter supplies success, conflict, definite nondispatched rejection, delayed response, before/after commit transport faults and receipt lookup. No production adapter/route registration. DOM test renders actual Tiptap editor/component and clickable controls/status announcements; cover chapter/account switching, pending typing, conflict, unknown, explicit/repeated recovery and disposal of async subscriptions. Existing synthetic organizer interfaces should be reused; no Auth replacement.

Node HTTP test server binds only127.0.0.1:0 and tracks/destroys owned sockets. Only injected synthetic server-side principal, parameterized calls via unchanged private SQL gateway. Use an opaque synthetic fixture capability mapped by server, not arbitrary owner payload authority. Record response.destroy after COMMIT as real HTTP interruption. Confirm unknown ID retained, authoritative matching receipt and revision count unchanged on reconciliation. Before-commit fault rolls back but missing receipt remains unknown to client. Test actual abort/delay and competing edits. Reuse owned PG17 runner with loopback/env/cleanup guards; extend its required test execution, not CI policy. No new SQL or dependencies.

Trace proposed SC003-007, JRN001-003, ACC-M3-01/02 and M8; synthetic/disposable evidence does not complete production journeys. Distinct review, exact source evidence, full Draft/Ready checks and separate owner merge. All previous failures/blocks remain historical.
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0074/OWNER-SCOPE.md` @ `03fe36effa5a6bf9ef2f16614001fcf13bc73670`

~~~~~~markdown
Direct owner authorization relay from Codex conversation, 31 October 2026; not independent identity authentication.

Owner authorizes IMP003C repository-only composition of existing Tiptap manuscript session/component, revision service/contracts and synthetic recovery, from approved e83022bf1f71746482bed832a894cdfac6dcc500. New unused Task/committed validated immutable CP before code; isolated branch. Capture immutable document, operation ID, expected revision; typing after dispatch; accurate pending/confirmed/conflict/rejected/unknown/unverified states; no new-key uncertain retry; explicit isolated recovery. Unregistered synthetic preview with actual editor/UI DOM or browser tests. Owned127.0.0.1 ephemeral HTTP harness must prove real response/socket interruption after actual disposable PG17 commit, receipt reconciliation without duplicate revisions, conflicts, delayed/aborted identity/chapter suppression, rollback ambiguity. Reuse unchanged SQL fixtures and existing test infrastructure, no transferable Task0071 SQL permission. No SQL, dependencies, CI policy, hosted/Auth/MFA/JWT/session settings, production endpoints/privileges, private manuscripts, persistent browser storage, paid calls, deployment or merge. Final distinct review, actual Draft/ReadyCI, EB and unmerged PR. Update current-state leading snapshot without rewriting history. Issues108/131 OPEN; R01-R08 NOT_RUN; N12/historical spawn EPERM BLOCKED; PRINCIPAL/SESSION/GATEWAY/TRANSPORT/PACKAGING/hosted acceptance pending. No successor or merge delegation.
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0074/SOURCE-REFERENCES.json` @ `d4ada95f25c3452b6c91ea76555218e0150fcab6`

~~~~~~markdown
[
  {
    "path": "LANGUAGE.md",
    "commit": "e83022bf1f71746482bed832a894cdfac6dcc500",
    "sha256": "1cd6e00e64ed923cfd596c9b50cc50b77ef9e4712a687ca90fad8465742b81b3"
  },
  {
    "path": "docs/decisions/ADR-0003-use-tiptap-3-prosemirror-for-manuscript-editor.md",
    "commit": "e83022bf1f71746482bed832a894cdfac6dcc500",
    "sha256": "213dcbe80b371b210ca9a80132d3afea3b11d7eebc03f4b7c8aef0480de9c7af"
  },
  {
    "path": "docs/decisions/ADR-0006-next-nest-supabase-implementation-foundation.md",
    "commit": "e83022bf1f71746482bed832a894cdfac6dcc500",
    "sha256": "68b0e836960ec73b1d7a239f53633b1df96814909b6e4475b5d3969a6bab4ca0"
  },
  {
    "path": "docs/decisions/ADR-0008-codex-primary-agentic-implementation-workflow.md",
    "commit": "e83022bf1f71746482bed832a894cdfac6dcc500",
    "sha256": "fdd3d879dbef08e2e8f37b84859e29cdfa8e98467cf295085245ed417c0b2b16"
  },
  {
    "path": "docs/contracts/VEL-IMP002-PERSISTENCE-CONTRACT.md",
    "commit": "e83022bf1f71746482bed832a894cdfac6dcc500",
    "sha256": "154ca1697a4cda5d8efbb71a0662efdf1ab7d11ef9c25313cf867229062ac90b"
  },
  {
    "path": "docs/specs/VEL-SPEC-001-CHAPTER-SAVE-CONTRACT.md",
    "commit": "e83022bf1f71746482bed832a894cdfac6dcc500",
    "sha256": "2a4c62eaf29ff4a084d24d081b3bd35132735421016613c6a621dc6f06e7296d"
  },
  {
    "path": "docs/reports/VEL-IMP003B-CONTRACTS-0071.md",
    "commit": "e83022bf1f71746482bed832a894cdfac6dcc500",
    "sha256": "5ff99966b0c716f706a964ae4d777c17ffacf6719619e1e96aa2910701910177"
  }
]
~~~~~~

## Execution reporting
Return an ExecutionBundle with FACT / INTERPRETATION / PROPOSAL sections,
tests actually performed, changes, evidence gaps, and pending owner approval.
