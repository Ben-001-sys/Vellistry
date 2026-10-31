---
id: VEL-CP-0071
title: 'Context for VEL-TASK-0071: IMP003B disposable manuscript revisions and synthetic
  draft recovery'
type: context-pack
status: prepared
created_at: '2026-10-31'
version: 0.1.0
task_id: VEL-TASK-0071
base_commit: a4d128257cbb5f1a6e30707ce439e07a7f97b4cd
task_blob_sha: 29d25d8efedcfab0e6b7bc219fffed4f6f62f7a3
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
  git_blob_sha: 4d15b79a32069871feaf659c8cb9791f6be20653
  source_status: active
- path: SOURCE-OF-TRUTH.md
  role: governing-source
  git_blob_sha: 50a3034f72727b141ae2c897b1c1424efcc332d5
  source_status: accepted
- path: docs/agent-workflow/PR-COMPLIANCE.md
  role: governing-source
  git_blob_sha: 5f4845623aef3abb15fba7fbe8e78474902cca00
  source_status: unrecorded
- path: docs/agent-workflow/authorizations/VEL-TASK-0071.yaml
  role: governing-source
  git_blob_sha: 3648651697945b5269e18ea8e43625c4239b39b1
  source_status: unrecorded
- path: apps/api/src/modules/workspace/workspace-principal.ts
  role: governing-source
  git_blob_sha: 56b41b1a61599624569d4bb32f164fbb066f2cff
  source_status: unrecorded
- path: apps/api/src/modules/workspace/workspace.service.ts
  role: governing-source
  git_blob_sha: 5c76937699f1c1318b76ea503c91fe6f8ba3b8ac
  source_status: unrecorded
- path: apps/web/src/lib/editor/manuscript-session.ts
  role: governing-source
  git_blob_sha: 25583e9fbaf8826901cc85ea66cd4aed21418da5
  source_status: unrecorded
- path: tests/workspace/persistence/run_pg17.py
  role: governing-source
  git_blob_sha: 835f634f416bc0926ed902cd20b3e42cf7ee68b0
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0071/CONTRACT.md
  role: governing-source
  git_blob_sha: 1690ce66c562151c77d05d3cdf4be49866f57693
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0071/HISTORICAL-PREPARATION.json
  role: governing-source
  git_blob_sha: 7e7b4a00074f896d3b6c460b3c46efdfc1eb110d
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0071/OWNER-SCOPE.md
  role: governing-source
  git_blob_sha: 1bb1c0b32b09b5f4878eb283818ffcf619a83e30
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0071/SOURCE-REFERENCES.json
  role: governing-source
  git_blob_sha: a1838a969b803de8cf5da51976625026689541a5
  source_status: unrecorded
source_gaps:
- id: PRODUCTION-SECURITY
  limitation: Synthetic principal/session/storage only; R01-R08NOT_RUN N12/EPERMBLOCKED;
    hosted/gateway/session acceptance unresolved
prepared_by: agent_workflow.py
---

# VEL-CP-0071 — IMP003B disposable manuscript revisions and synthetic draft recovery

## Objective
Implement executable isolated revision save and recovery contracts without production persistence

## Scope
**In:** apps/api/src/modules/workspace/manuscript-contract.ts; apps/api/src/modules/workspace/manuscript.service.ts; apps/api/src/modules/workspace/manuscript-contract.spec.ts; apps/api/src/modules/workspace/workspace-contract.spec.ts; apps/web/src/lib/editor/manuscript-recovery.ts; apps/web/src/lib/editor/manuscript-recovery.test.ts; apps/web/src/lib/editor/manuscript-editor.test.mjs; tests/editor/persistence/sql/10_manuscript_contract.sql; tests/editor/persistence/manuscript-pg17.integration.mjs; tests/workspace/persistence/run_pg17.py; CURRENT-STATE.md; docs/agent-workflow/tasks/VEL-TASK-0071.yaml; docs/agent-workflow/context-packs/VEL-CP-0071.md; docs/agent-workflow/execution-bundles/VEL-EB-0071.md; docs/agent-workflow/inputs/VEL-TASK-0071/*; docs/agent-workflow/PR-COMPLIANCE.yaml; docs/reports/VEL-IMP003B-CONTRACTS-0071.md; docs/reports/evidence/VEL-TASK-0071/*
**Out:** Hosted/production/Auth/MFA/JWT/private/paid/deployment/settings/merge; Other SQL paths, operative migrations/grants/RLS, production routes, CI/dependency changes, historical evidence edits

## Evidence and authority constraints
The text below is a readable rendering of pinned Git blobs; exact raw bytes remain recoverable from the recorded commit/blob SHAs. Recorded source statuses remain in force: draft research is not accepted requirements. Original unarchived uploads are not independently verified merely by being mentioned.

**Known source gaps:**
- PRODUCTION-SECURITY: Synthetic principal/session/storage only; R01-R08NOT_RUN N12/EPERMBLOCKED; hosted/gateway/session acceptance unresolved

## Permissions and acceptance
**Allowed:** Commit governing inputs then validate/commit immutable CP before code, Implement listed paths, frozen dependencies, synthetic/unit tests and owned disposable PG17 on loopback, Existing runner additionally executes manuscript cases and applies exactly authorized fixture; preserve existing32cases, Distinct read-only review, Draft then Ready CI; no merge
**Owner approval required:** Any scope/SQL-path expansion, hosted/production/security gate change, dependencies/CI or merge
**Acceptance criteria:**
- All20owner scenarios mapped to actual evidence; unknown writes never definite failures; no false Saved
- Atomic append-only revision/CAS/idempotency/ownership tests on disposable PG17; rollback/restart/cleanup verified
- Exact document preservation; recovery isolates identities and retains newer edits
- Existing regressions/build/check/governance and exact-head CI; security limits explicit

## Deliverables
- Executable bounded contracts, SQL fixture and20scenario positive/negative evidence
- EB, actual tests, distinct completed-head review and Ready PR, no merge

## Pinned source snapshots
Git commit: `a4d128257cbb5f1a6e30707ce439e07a7f97b4cd`. Read source statuses independently from task intent.

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

### `CURRENT-STATE.md` @ `4d15b79a32069871feaf659c8cb9791f6be20653`

~~~~~~markdown
---
id: VEL-STATE-001
type: current-state
status: active
created_at: 2026-10-08
updated_at: 2026-10-29
owner: project_owner
version: 0.2.2
---

# Vellistry — current verified state

## Stacked-merge compliance correction — 2026-10-29

FACT: main `6d9ce61fb560dd24e0646f6388ce38de3d87399d` integrates PR129,
exact reviewed tree187c8538. PR128 post-main40948274512 passed. PR129
post-main40951100355 FAILED: push compliance requires an invalid ancestry;
application/security/32PG17/12recovery passed. Governance suite skipped;
final gate FAILED. Historical failure remains FAIL, integration unverified.

Task0070/CP0070 proposes the bounded evaluator/test correction, preserving
trusted before, parent/tree checks and immutable implementation change-base.
[Report](docs/reports/VEL-STACKED-MERGE-COMPLIANCE-0070.md). Review/CI/owner merge
pending. Task0069 preparation is preserved undispatched, not rewritten.

Task0068's unregistered Tiptap editor reuses IMP002;30editor/33browser checks
are historical PASS. Memory-only drafts; no production route/durable save.
MFA acceptance deferred, not security waived. PRINCIPAL/SESSION/gateway and
persistence gated; R01-R08 NOT_RUN; N12/historical EPERM BLOCKED. Issue108OPEN;
remediation delegation EXPIRED. No hosted acceptance or new feature authority.
Earlier dated paragraphs remain historical records, not renewed authority.

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

### `SOURCE-OF-TRUTH.md` @ `50a3034f72727b141ae2c897b1c1424efcc332d5`

~~~~~~markdown
---
id: VEL-GOV-002
type: governance
status: accepted
created_at: 2026-10-08
updated_at: 2026-10-16
owner: project_owner
version: 0.1.3
related_adrs:
  - ADR-0001
  - ADR-0002
---

# Source of Truth and Knowledge Ownership

## Engineering authority
- **Git repository:** canonical engineering documents, code, accepted project decisions, research evidence references, specifications, and change history.
- **CURRENT-STATE.md:** compact, current working status; not a substitute for full evidence.
- **ADRs:** accepted or proposed technical and knowledge-governance decisions, with rationale, alternatives, approval and supersession lineage.
- **Source register:** where original research came from and where an immutable/retrievable copy can be found.
- **Feature inventory:** [docs/features/FEATURE-INVENTORY.md](docs/features/FEATURE-INVENTORY.md) is the reviewable index of discussed feature candidates and source/status links. **It is not an accepted product backlog, release plan, substitute for original source evidence, or approval of proposed features.**
- **Git history and pull requests:** revision provenance; do not substitute automatically for semantic record metadata.
- **ChatGPT and other agents:** analysis and proposal tools, not an independent source of architectural authority.

## Separate runtime authority
Future authors' manuscripts, story canon, application settings, credentials, and stored assets belong in purpose-selected runtime storage, not automatically in the Git engineering knowledge base. The accepted Next.js/NestJS/Supabase baseline is recorded in ADR-0006; the owner subsequently selected Supabase Cloud for development. This is not production hosting or real-manuscript approval; no live database state is inferred from old records.

## Five knowledge layers
1. Authoritative accepted project and implementation knowledge.
2. Current verified implementation/research state.
3. Historical rationale, experiments, rejected/superseded alternatives.
4. Temporary task-local agent context and unapproved hypotheses.
5. Evidence, provenance, authorship, validity, confidence, and traceability.

## Read → Propose → Review → Commit
1. Read the relevant accepted records and source citations.
2. Clearly label new assumptions, findings, recommendations, and uncertainties.
3. Review source fidelity and factual verification independently.
4. Promote material changes only after owner approval; update linked records and current state.
5. When superseding an ADR, preserve the older file and connect both sides of the lineage.

## PR review and sole owner authority
At present the project has a single human contributor. The owner performs self-review and makes the final merge/acceptance decision. A distinct human PR approval is not required. Automated CI and optional AI-agent reviews provide evidence and feedback; agents do not have approval authority. For significant changes, document the owner's review and decision in the PR or associated provenance record. GitHub does not count self-review as a separate approving reviewer; this workflow must not assume otherwise. If branch-protection settings require other human approvals, review the protection policy rather than fabricate reviewers. See HIS-20261008-002.

## Metadata and history
See [docs/governance/RECORD-SCHEMAS.md](docs/governance/RECORD-SCHEMAS.md). All ADR and historical-event records require YAML front matter and meaningful content.

## No silent conflation
The terms *verified evidence*, *accepted requirement*, *approved decision*, *implemented*, and *tested* are different. Never mark one as another without supporting evidence.

## Current task authority and provenance

[AGENTS.md](AGENTS.md) and [ADR-0008](docs/decisions/ADR-0008-codex-primary-agentic-implementation-workflow.md)
express the owner-selected execution roles: ChatGPT coordinates and reviews;
Codex implements authorized bounded tasks; the owner alone approves consequential
scope, adoption and merge. Coordinator write access is not coding permission.
Lightweight triage/indexing/review does not grant authority to change effective
instructions or executable behavior. Any alternate implementer requires an
explicit owner task exception. Git commit author names do not prove runtime identity.

Use the compact [current checkpoint](CURRENT-STATE.md); its dated historical
archive is evidence, not active dispatch. Original source gaps remain gaps.
PR66's prior ChatGPT records are adopted with per-file source SHA attribution,
not relabeled Codex execution. This reconciliation proposes no semantic change
to accepted architecture or owner authority.

## Current remediation authority

The default owner approval boundaries remain in force. The [recorded one-time delegation](docs/agent-workflow/authorizations/VEL-REM-INTEGRATION-20261019.yaml) permits only eligible repository remediation integrations during this unfinished assignment, with distinct trusted review and actual CI. It grants no hosted, private-manuscript, release or future-feature authority. [CURRENT-STATE.md](CURRENT-STATE.md) and the [original44-item ledger](docs/reports/VEL-MASTER-REMEDIATION-LEDGER.md) distinguish verified progress from remaining acceptance.

The temporary remediation delegation ends under its [recorded closure condition](docs/agent-workflow/authorizations/VEL-REM-INTEGRATION-20261019-CLOSURE.md). After the final merge/post-main attestation, ordinary owner-governed approval resumes; this exception grants no future feature authority.
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

### `docs/agent-workflow/authorizations/VEL-TASK-0071.yaml` @ `3648651697945b5269e18ea8e43625c4239b39b1`

~~~~~~markdown
task_id: VEL-TASK-0071
kind: migration-path-approval
status: owner-verified
approved_by: project_owner
evidence: https://github.com/Ben-001-sys/Vellistry/issues/131#issuecomment-6540993396
paths:
- tests/editor/persistence/sql/10_manuscript_contract.sql
boundary: Disposable owned PostgreSQL17 synthetic fixture only. Retain direct author
  DML denial, trusted injected synthetic principal, owner/book/chapter isolation,
  least-privilege NOLOGIN/NOBYPASSRLS functions, safe fixed search paths, immutable
  revisions, exact prose, protected receipts and cleanup. No hosted, production, Auth,
  deployment or merge permission. Ineffective until reviewed-base integration.
provenance: Explicit owner exact-path authorization relayed from conversation; not
  Codex self-approval. See linked relay and governing OWNER-SCOPE.
created_at: '2026-10-31'
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

### `docs/agent-workflow/inputs/VEL-TASK-0071/CONTRACT.md` @ `1690ce66c562151c77d05d3cdf4be49866f57693`

~~~~~~markdown
# Bounded implementation contract
FACT: Issue131 and current direct owner continuation authorize local contracts only. Existing Task0071 is absent from reviewed base; old0190a22 remains separately preserved and is not cherry-picked. SQL authorization consumed from857b686, not candidate authority.

Implement strict supported Tiptap3 doc/paragraph/heading1..3/text/hardBreak/bulletList/orderedList/listItem with bold/italic/underline marks, exact Unicode/whitespace and shape/size/depth limits. No HTML normalization. Bind book/chapter/operation/expected revision, no owner body. Unregistered principal-aware service with revalidation after async reads/results and pinned pending identity. Private fixture: existing operative tables, atomic CAS+revision+journal, serialized owner+operation identity, same-payload replay, changed-payload rejection, author-scoped reads/receipts. Reuse synthetic session locking, add only approved new SQL file, no production adapter. Fault rollback and restart tests, direct author DML remains denied.

Deterministic synthetic draft storage with strict validated envelopes and author/book/chapter partition, pending operation retained across unknown results, delayed ACK advances acknowledged base without deleting newer prose; conflicting/failed/unknown/unverified outcomes never Saved. Explicit recovery candidate, never automatic overwrite of accepted content. No browser disk durability claim. Map20owner scenarios to executable evidence; proposed SC/JRN/ACC sources remain proposed, not hosted acceptance. Preserve old suites/statuses. No CI/dependency/Auth/production changes.
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0071/HISTORICAL-PREPARATION.json` @ `7e7b4a00074f896d3b6c460b3c46efdfc1eb110d`

~~~~~~markdown
{
  "commit": "0190a22bca8bb59b423be2f13223bc67c7227841",
  "branch": "codex/vel-imp003b-contracts",
  "status": "obsolete prerequisite preparation; never dispatched; no committed CP",
  "files": [
    {
      "path": "docs/agent-workflow/tasks/VEL-TASK-0071.yaml",
      "sha256": "3aa7b9723dec456caa3ca422e80c2dfaed553e6a36973ec4b9066d00993156b1"
    },
    {
      "path": "docs/agent-workflow/context-packs/VEL-CP-0071.md",
      "sha256": "5eb561e8718d371a4b5c8c8f1ae12b4d87f6efae589dcdf634c042dc7f59f173"
    },
    {
      "path": "docs/agent-workflow/inputs/VEL-TASK-0071/OWNER-AUTHORIZATION.json",
      "sha256": "4fd94d25d413b9554497cb42416ee54928cdd64cdfc8f03ee70a008fcdb53fce"
    },
    {
      "path": "docs/agent-workflow/inputs/VEL-TASK-0071/BOUNDARY.md",
      "sha256": "497452c0fe378d34a587c792433fbedc496844e96e8a392f360564856c5ab44d"
    }
  ]
}
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0071/OWNER-SCOPE.md` @ `1bb1c0b32b09b5f4878eb283818ffcf619a83e30`

~~~~~~markdown
Owner continuation relay, 31 October 2026, direct instruction in Codex chat. Not independently authenticated by this relay.

The owner authorizes reconstructed Task0071 IMP003B repository-only manuscript revision save and draft-recovery implementation from857b6862f7eba66a09f8fce2914f78cc4983683c. Exact SQL scope remains tests/editor/persistence/sql/10_manuscript_contract.sql per separately integrated owner record. New committed validated immutable CP before code. Preserve original0190a22 branch, Task and generated uncommitted CP/archive; do not reuse its obsolete prerequisite scope. Implement executable contracts and all20negative/recovery scenarios in the owner instruction and Issue131 using synthetic storage/disposable PG17. Reuse existing workspace/principal/editor/schema. No hosted, production, Auth/MFA, operative migrations/RLS/grants, routes, real manuscripts, deployment, paid APIs or merge. Distinct exact-head review, Draft then Ready CI and separate owner merge decision. Issue108/131 OPEN; R01-R08 NOT_RUN; N12/historical EPERM BLOCKED; production principal/session/gateway/hosted pending.
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0071/SOURCE-REFERENCES.json` @ `a1838a969b803de8cf5da51976625026689541a5`

~~~~~~markdown
[
  {
    "path": "docs/specs/VEL-SPEC-001-CHAPTER-SAVE-CONTRACT.md",
    "source": "857b6862f7eba66a09f8fce2914f78cc4983683c",
    "sha256": "2a4c62eaf29ff4a084d24d081b3bd35132735421016613c6a621dc6f06e7296d"
  },
  {
    "path": "docs/contracts/VEL-IMP002-PERSISTENCE-CONTRACT.md",
    "source": "857b6862f7eba66a09f8fce2914f78cc4983683c",
    "sha256": "154ca1697a4cda5d8efbb71a0662efdf1ab7d11ef9c25313cf867229062ac90b"
  },
  {
    "path": "docs/contracts/VEL-IMP002-PERSISTENCE-CASES.json",
    "source": "857b6862f7eba66a09f8fce2914f78cc4983683c",
    "sha256": "9bd84fa3ed204f11332cdd5622397c523c9123ec0142ad60d546c2db01d2c193"
  },
  {
    "path": "docs/requirements/MVP-USER-JOURNEYS-AND-ACCEPTANCE-2026-10-09.md",
    "source": "857b6862f7eba66a09f8fce2914f78cc4983683c",
    "sha256": "6cb974077574b4fe92dfa84077599ecdf4711411894bdcf71e73849ff3696023"
  },
  {
    "path": "docs/research/OPTION-B-WAVE06-R18-RELIABILITY-RECOVERY-2026-10-10.md",
    "source": "857b6862f7eba66a09f8fce2914f78cc4983683c",
    "sha256": "860ca2f3594a08e1197eaa7f5b7215c3441bd2e57069626737d68fd733d179b9"
  }
]
~~~~~~

## Execution reporting
Return an ExecutionBundle with FACT / INTERPRETATION / PROPOSAL sections,
tests actually performed, changes, evidence gaps, and pending owner approval.
