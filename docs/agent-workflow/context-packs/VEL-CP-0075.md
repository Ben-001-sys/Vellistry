---
id: VEL-CP-0075
title: 'Context for VEL-TASK-0075: IMP003D native IndexedDB local draft recovery'
type: context-pack
status: prepared
created_at: '2026-11-02'
version: 0.1.0
task_id: VEL-TASK-0075
base_commit: f46ca165d59f5ce4aeb9f5f159b3f7d204206907
task_blob_sha: c2592c68e2bc332ec686dea07e08a7d3d193e19d
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
  git_blob_sha: 13f4e12184fda806b75f340db07af6ebd3bcc697
  source_status: active
- path: docs/agent-workflow/PR-COMPLIANCE.md
  role: governing-source
  git_blob_sha: 5f4845623aef3abb15fba7fbe8e78474902cca00
  source_status: unrecorded
- path: apps/web/src/lib/editor/manuscript-recovery.ts
  role: governing-source
  git_blob_sha: eb653fe3ec0963d22a08df27fc6e1d0f6fed7d2b
  source_status: unrecorded
- path: apps/web/src/lib/editor/manuscript-composition.ts
  role: governing-source
  git_blob_sha: e17f8cf1382d3b97f9abf208ef850669da77a069
  source_status: unrecorded
- path: apps/api/src/modules/workspace/manuscript-contract.ts
  role: governing-source
  git_blob_sha: 64f2889bfdac4f8af6546c3a206a9b91e0c5b1a4
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0075/OWNER-SCOPE.md
  role: governing-source
  git_blob_sha: a7a046f6f5ebbe92bda92d9688386d31d2523c3f
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0075/CONTRACT.md
  role: governing-source
  git_blob_sha: e55e5de204812ae642a81e10583a6f1cd9700aaf
  source_status: unrecorded
source_gaps:
- id: PRODUCTION
  limitation: Synthetic principals/session rows/storage; no hosted or real-session
    enforcement. R01-R08 NOT_RUN N12/EPERM BLOCKED.
prepared_by: agent_workflow.py
---

# VEL-CP-0075 — IMP003D native IndexedDB local draft recovery

## Objective
Compose native asynchronous IndexedDB draft storage with isolated editor preview; prove real Chromium reload, explicit recovery, account isolation and transactional multi-tab conflicts

## Scope
**In:** apps/web/src/lib/editor/manuscript-indexeddb.ts; apps/web/src/lib/editor/manuscript-durable-composition.ts; apps/web/src/lib/editor/manuscript-indexeddb.test.ts; apps/web/src/components/editor/manuscript-durable-preview.tsx; apps/web/src/lib/editor/manuscript-editor.test.mjs; tests/editor/durable-draft-fixture.tsx; tests/editor/durable-draft-browser.mjs; CURRENT-STATE.md; docs/agent-workflow/tasks/VEL-TASK-0075.yaml; docs/agent-workflow/context-packs/VEL-CP-0075.md; docs/agent-workflow/execution-bundles/VEL-EB-0075.md; docs/agent-workflow/inputs/VEL-TASK-0075/*; docs/agent-workflow/PR-COMPLIANCE.yaml; docs/reports/VEL-IMP003D-DURABLE-DRAFTS-0075.md; docs/reports/evidence/VEL-TASK-0075/*
**Out:** SQL/dependencies/CI-policy/Auth/production routes/hosted/private manuscripts/paid services/deployment/merge/successor work

## Evidence and authority constraints
The text below is a readable rendering of pinned Git blobs; exact raw bytes remain recoverable from the recorded commit/blob SHAs. Recorded source statuses remain in force: draft research is not accepted requirements. Original unarchived uploads are not independently verified merely by being mentioned.

**Known source gaps:**
- PRODUCTION: Synthetic principals/session rows/storage; no hosted or real-session enforcement. R01-R08 NOT_RUN N12/EPERM BLOCKED.

## Permissions and acceptance
**Allowed:** Implement listed paths after committed validated immutable CP; native browser IndexedDB only, Use existing dependencies and owned loopback/browser profiles; execute unchanged PG fixtures, Review/CI/unmerged PR only
**Owner approval required:** Scope expansion, dependencies/CI-policy/SQL/security/hosted/production/privacy-retention policy/merge/successor work
**Acceptance criteria:**
- Await transaction completion; versioned validated scope-bound records; CAS rejects multi-tab stale writes
- Explicit recovery only; revision baseline safety; immutable unknown operation; stale author/chapter results hidden
- Keep memory edits after unavailable/quota/abort; no false success; explicit local discard; listener/database/profile cleanup
- Actual Chromium Tiptap edit/Unicode/whitespace/format write-complete/reload/recover, cross-tab, author isolation, corruption and failures
- No production registration, no encryption/eviction/powerloss/crossdevice claims; preserve all historical classifications

## Deliverables
- Native async adapter, isolated composition/preview, synthetic unit and real Chromium durable profile tests
- Actual regressions/build/check/PG/governance, EB, distinct final review, Draft/Ready CI and unmerged PR

## Pinned source snapshots
Git commit: `f46ca165d59f5ce4aeb9f5f159b3f7d204206907`. Read source statuses independently from task intent.

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

### `CURRENT-STATE.md` @ `13f4e12184fda806b75f340db07af6ebd3bcc697`

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

## IMP003C — 2026-10-31

PR133 main `e83022b` post-main41193526527 PASS. Task0074 composition/HTTP tests
are in verification; no production registration. Dated snapshots below are historical.

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

### `apps/web/src/lib/editor/manuscript-composition.ts` @ `e17f8cf1382d3b97f9abf208ef850669da77a069`

~~~~~~markdown
import {createManuscriptSession} from './manuscript-session';
import {createDraftRecovery,type DraftStorage} from './manuscript-recovery';
import type {WorkspaceSnapshot} from '../workspace/book-workspace-session';
import {document as validateDocument,identifier,saveOperation,type SaveOperation} from '../../../../api/src/modules/workspace/manuscript-contract';
export type CompositionScope=Readonly<{author:string;bookId:string;chapterId:string}>;
export interface ManuscriptTransport {
 read(scope:CompositionScope):Promise<unknown>;
 save(scope:CompositionScope,operation:SaveOperation):Promise<unknown>;
 lookup(scope:CompositionScope,operation:SaveOperation):Promise<unknown>;
}
export type CompositionPhase='idle'|'loading'|'editing'|'saving'|'confirmed'|'conflicted'|'rejected'|'unknown'|'unverified'|'recovery';
export type CompositionSnapshot=Readonly<{phase:CompositionPhase;scope:CompositionScope|null;revision:number|null;message:string;operationId:string|null;canSave:boolean;canReconcile:boolean;canRecover:boolean}>;
/** Unregistered composition. Transport/storage/verified owner are explicit test seams. */
export function createManuscriptComposition(options:{readOwner:()=>Promise<string|null>;transport:ManuscriptTransport;storage:DraftStorage;clientId:string;nextOperationId:()=>string}) {
 const editorSession=createManuscriptSession(options.readOwner);
 const drafts=createDraftRecovery(options.storage,validateDocument,options.clientId);
 const floors=new Map<string,number>();const listeners=new Set<()=>void>();
 let generation=0,disposed=false,installing=false,needsRecovery=false,inFlight=false;
 let scope:CompositionScope|null=null;let detach=()=>{};
 let model:CompositionSnapshot=Object.freeze({phase:'idle',scope:null,revision:null,message:'Choose a chapter in this test environment.',operationId:null,canSave:false,canReconcile:false,canRecover:false});
 const key=(s:CompositionScope)=>JSON.stringify([s.author,s.bookId,s.chapterId]);
 function emit(phase:CompositionPhase,message:string){
  if(disposed)return;const d=drafts.snapshot();model=Object.freeze({phase,scope,revision:d?.base??null,message,operationId:d?.pending?.id??null,
   canSave:!!scope&&!needsRecovery&&!inFlight&&!d?.pending&&d?.phase==='unsaved',canReconcile:!!scope&&!needsRecovery&&!inFlight&&!!d?.pending,canRecover:!!scope&&needsRecovery});listeners.forEach(fn=>fn());
 }
 function conceal(message='Your identity is unavailable. This test editor is paused.'){
  generation++;detach();detach=()=>{};scope=null;inFlight=false;needsRecovery=false;drafts.pause();editorSession.pause();emit('unverified',message);
 }
 async function still(epoch:number,s:CompositionScope){
  if(disposed||epoch!==generation||!scope||key(scope)!==key(s))return false;
  let owner:string|null;try{owner=await options.readOwner();}catch{owner=null;}
  if(disposed||epoch!==generation)return false;if(owner!==s.author){conceal();return false;}return true;
 }
 function publishDraft(){const d=drafts.snapshot();if(!d)return;
  if(inFlight){emit('saving','Saving captured text in the test environment. New typing remains a separate draft.');return;}
  const phase=d.phase==='unsaved'?'editing':d.phase==='unverified'?'unverified':d.phase==='recoverable'?'recovery':d.phase;
  const copy:Record<string,string>={editing:'Local changes. No confirmed test revision yet.',confirmed:`Confirmed revision ${d.base} in this test environment only.`,unknown:'Save outcome unknown. Check the original operation; do not save again.',conflicted:'Revision conflict. Your local writing is retained.',rejected:'Save rejected. Your local writing is retained.',unverified:'Identity unavailable. Writing is paused.',recovery:'A synthetic recovery candidate needs your explicit choice.',saving:'Saving in this test environment.'};emit(phase,copy[phase]);
 }
 function install(value:unknown){const editor=editorSession.snapshot().editor;if(!editor)throw Error('Editor unavailable');const checked=validateDocument(value);if(JSON.stringify(editor.getJSON())===JSON.stringify(checked))return;installing=true;try{editor.chain().setContent(checked,{emitUpdate:false,parseOptions:{preserveWhitespace:'full'}}).command(({tr})=>{tr.setMeta('addToHistory',false);return true;}).run();}finally{installing=false;}}
 async function bind(workspace:WorkspaceSnapshot){
  if(disposed)return;const epoch=++generation;detach();detach=()=>{};scope=null;inFlight=false;needsRecovery=false;drafts.pause();editorSession.pause();emit('loading','Loading an owned accepted revision in this test environment...');
  if(workspace.phase!=='ready'||workspace.pending||workspace.uncertain||workspace.conflict||!workspace.document){conceal('The selected chapter is unavailable. Test writing is paused.');return;}
  let s:CompositionScope;
  try{const bookId=identifier(workspace.document.bookId),chapterId=identifier(workspace.selectedChapterId);if(!workspace.document.chapters.some(c=>c.id===chapterId&&c.bookId===bookId))throw Error();const author=await options.readOwner();if(disposed||epoch!==generation)return;if(!author)throw Error();s=Object.freeze({author,bookId,chapterId});}catch{if(epoch===generation)conceal();return;}
  scope=s;
  try{
   const result=await options.transport.read(s) as {status:string;value:{bookId:string;chapterId:string;revision:number;document:unknown}};
   if(!await still(epoch,s))return;
   const v=result?.value;if(result?.status!=='ready'||!v||v.bookId!==s.bookId||v.chapterId!==s.chapterId||!Number.isSafeInteger(v.revision)||v.revision<1||v.revision<(floors.get(key(s))??1))throw Error('Invalid/stale accepted revision');
   const accepted=validateDocument(v.document);await editorSession.bind(workspace);if(!await still(epoch,s))return;
   drafts.bind({author:s.author,book:s.bookId,chapter:s.chapterId},accepted,v.revision);floors.set(key(s),v.revision);install(accepted);
   needsRecovery=!!drafts.recovery();const editor=editorSession.snapshot().editor!;editor.setEditable(!needsRecovery,false);
   const changed=({transaction}:{transaction:{docChanged:boolean}})=>{if(installing||disposed||epoch!==generation||!transaction.docChanged||needsRecovery)return;try{drafts.edit(editor.getJSON());publishDraft();}catch{editor.setEditable(false,false);emit('rejected','The local draft could not be validated or retained. No save was dispatched.');}};
   editor.on('transaction',changed);detach=()=>editor.off('transaction',changed);
   if(needsRecovery)emit('recovery','A synthetic recovery candidate is available. Recover it explicitly before writing.');else emit('confirmed',`Accepted revision ${v.revision} loaded in this test environment only.`);
  }catch{if(epoch===generation&&!disposed)conceal('The accepted revision could not be verified. Test writing is paused.');}
 }
 function parseReceipt(raw:unknown,op:SaveOperation){
  const result=raw as {status:string;receipt:{operationId:string;bookId:string;chapterId:string;outcome:string;revision:number}};const r=result?.receipt;
  if(!r||!['confirmed','conflicted','rejected'].includes(result.status)||r.outcome!==result.status||r.operationId!==op.operationId||r.bookId!==op.bookId||r.chapterId!==op.chapterId||!Number.isSafeInteger(r.revision)||r.revision<1||(r.outcome==='confirmed'&&r.revision!==op.expectedRevision+1))throw Error('Unverified receipt');
  return r as typeof r&{outcome:'confirmed'|'conflicted'|'rejected'};
 }
 async function dispatch(reconcile:boolean){
  if(disposed||!scope||needsRecovery||inFlight)return;const epoch=generation,s=scope;
  if(!await still(epoch,s)||inFlight)return;const d=drafts.snapshot();if(!d)return;
  let op:SaveOperation;let ticket:NonNullable<ReturnType<typeof drafts.pendingTicket>>;
  try{
   if(reconcile){ticket=drafts.pendingTicket()!;if(!ticket||!d.pending)return;op=saveOperation({operationId:ticket.id,bookId:s.bookId,chapterId:s.chapterId,expectedRevision:d.pending.base,document:JSON.parse(d.pending.text)});}
   else {if(!model.canSave)return;op=saveOperation({operationId:options.nextOperationId(),bookId:s.bookId,chapterId:s.chapterId,expectedRevision:d.base,document:editorSession.snapshot().editor!.getJSON()});ticket=drafts.begin(op.operationId);}
  }catch{emit('rejected','The test save could not be prepared. No operation was dispatched.');return;}
  inFlight=true;emit(reconcile?'unknown':'saving',reconcile?'Checking the original test operation...':'Saving captured text in the test environment...');
  try{const raw=await (reconcile?options.transport.lookup(s,op):options.transport.save(s,op));if(!await still(epoch,s))return;const receipt=parseReceipt(raw,op);drafts.settle(ticket,receipt.outcome,receipt.revision);floors.set(key(s),Math.max(floors.get(key(s))??1,receipt.revision));}
  catch{if(await still(epoch,s))drafts.settle(ticket,'unknown');}
  finally{if(!disposed&&epoch===generation){inFlight=false;publishDraft();}}
 }
 async function recover(){if(disposed||!scope||!needsRecovery)return;const epoch=generation,s=scope;if(!await still(epoch,s))return;try{drafts.recover(drafts.recovery());needsRecovery=false;install(JSON.parse(drafts.snapshot()!.text));editorSession.snapshot().editor!.setEditable(true,false);publishDraft();}catch{emit('rejected','The recovery candidate is invalid. Accepted text was not changed.');}}
 return {editorSession,snapshot:()=>model,subscribe(fn:()=>void){listeners.add(fn);return()=>{listeners.delete(fn);};},bind,save:()=>dispatch(false),reconcile:()=>dispatch(true),recover,pause:()=>conceal(),
  dispose(){if(disposed)return;generation++;detach();listeners.clear();drafts.pause();editorSession.dispose();scope=null;disposed=true;model=Object.freeze({phase:'idle',scope:null,revision:null,message:'Test composition closed.',operationId:null,canSave:false,canReconcile:false,canRecover:false});}};
}
export type ManuscriptComposition=ReturnType<typeof createManuscriptComposition>;
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

### `docs/agent-workflow/inputs/VEL-TASK-0075/OWNER-SCOPE.md` @ `a7a046f6f5ebbe92bda92d9688386d31d2523c3f`

~~~~~~markdown
Owner instruction relayed from this conversation, 2 November 2026.

Owner explicitly approved and dispatched IMP-003D as written after the earlier DRAFT/NOT DISPATCHED packet. Implement bounded native IndexedDB durable local drafts with async transaction completion, existing editor/composition/recovery/contracts, synthetic identities and actual Chromium reload/cross-tab testing. Base e6242df9fc2fdb14817c2f6f58387e2844184664. Task0075 candidate verified unused; preserve Task0072 reservation and all historical evidence.

Records bind author/book/chapter/client/schema/accepted revision/document/pending operation/write sequence/time. Validate before exposure. Conceal on logout or uncertain identity; do not delete on logout. Explicit recovery only, accepted revision check, original unknown operation retained; never overwrite accepted/newer writing. No silent last-write-wins across tabs. Handle unavailable/blocked/quota/abort/corrupt/oversize/schema mismatch/stale async/competing tabs/reload/discard/cleanup. In-memory prose survives failures.

Only show Saved on this device after transaction completion; separate remote acceptance. Device storage may be lost, not cross-device backup/encryption/privacy against shared profile. Real Chromium/Tiptap edit/transaction/reload/recover/Unicode/marks/cross-tab/author denial/corruption/no false success; isolated disposable profiles removed. If unavailable classify BLOCKED, no mock durability claims.

Unique task, committed governing sources, validated immutable committed CP before code; isolated branch; tests/build/typecheck/governance, EB, distinct review, Draft then ReadyCI, unmerged PR. No dependencies, CI-policy, SQL, hosted/Auth/MFA/JWT/credentials, production route/security/write privileges, real manuscripts, paid APIs, deployments, successor work or merge. R01-R08 NOT_RUN; N12/historical EPERM BLOCKED. Issues108/131 OPEN, remediation delegation EXPIRED.
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0075/CONTRACT.md` @ `e55e5de204812ae642a81e10583a6f1cd9700aaf`

~~~~~~markdown
# IMP003D pinned implementation contract

Native IndexedDB database v1, draft store keyed by [author,book,chapter,client]. Record schema1 includes baseline, exact validated Tiptap JSON, pending immutable operation, monotonic record sequence, timestamp. Async load/write/delete settle only on transaction complete, CAS in one readwrite transaction. Mismatch never silently overwrites. Unavailable/blocked/quota/abort/corrupt/incompatible explicit failure states. No deletion on logout. No default identity or persistent credentials.

Compose existing synchronous recovery ONLY as an explicitly in-memory working copy; async adapter owns durable evidence separately. Queue snapshots; generation + owner revalidation prevent stale publication. Saved on this device only when latest sequence has committed, separate from remote receipt; unknown remote retains original ID. Baseline mismatch blocks restoration; accepted document never auto replaced. Multi-tab optimistic conflict pauses persistence until explicit selection/rebind/discard, retaining in-memory writing. Explicit local discard CAS cannot delete a competing record. Test-only preview shows storage loss/shared-profile/no backup notice. No production imports.

Unit tests validate strict schema/oversize/identity/pending and injected storage failures. Actual Chromium disposable-profile loopback fixture uses existing Tiptap components, bundle from existing esbuild tooling (no dependency change). Real reload/new tab/shared profile + commit, corruption, CAS competition, account/chapter switch, delayed/abort/quota failures and cleanup. Browser failure injection is labeled synthetic; native successful transactions/reload are real. Never claim quota disk exhaustion actually induced. Keep historical statuses; ready CI uses existing mandatory workspace suite; browser execution recorded separately without CI-policy change.

Language source: LANGUAGE.md at reviewed basee6242df; blob 1b8a700218c8f93bfb4ca7972b90c00d03c673c0. Full source read separately; exceeds pack35000byte source limit. Applicable requirements: distinguish local draft vs accepted revision; no Saved without authoritative server ACK, Saved on this device only after completed local transaction; accurate unknown/failure/recovery labels and storage-loss/shared-profile notice. No canonical language policy edits.
~~~~~~

## Execution reporting
Return an ExecutionBundle with FACT / INTERPRETATION / PROPOSAL sections,
tests actually performed, changes, evidence gaps, and pending owner approval.
