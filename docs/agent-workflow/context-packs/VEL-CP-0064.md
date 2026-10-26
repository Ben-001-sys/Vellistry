---
id: VEL-CP-0064
title: 'Context for VEL-TASK-0064: Implement bounded Next.js password and TOTP MFA
  interface'
type: context-pack
status: prepared
created_at: '2026-10-26'
version: 0.1.0
task_id: VEL-TASK-0064
base_commit: 8836111ad85307409464a55c1696b42f5645e18d
task_blob_sha: 263348d942037fea35b7f0d7514018b2f0b2074d
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
  git_blob_sha: 2e2e37f60843b8e6b883e711c4a4dd1ae2572911
  source_status: active
- path: docs/agent-workflow/inputs/VEL-TASK-0064/LANGUAGE-CONTEXT.md
  role: governing-source
  git_blob_sha: e7b31a1d340c59cd5a4ef28919f0c7b3695a9df3
  source_status: unrecorded
- path: docs/agent-workflow/PR-COMPLIANCE.md
  role: governing-source
  git_blob_sha: 5f4845623aef3abb15fba7fbe8e78474902cca00
  source_status: unrecorded
- path: docs/decisions/ADR-0008-codex-primary-agentic-implementation-workflow.md
  role: governing-source
  git_blob_sha: 08b9a563fb79ebb91f20d0f84e0d752c1bb6709d
  source_status: accepted
- path: apps/web/src/app/login/page.tsx
  role: governing-source
  git_blob_sha: 2c499b7259d75a3bebfe780122b30aa51439e7ea
  source_status: unrecorded
- path: apps/web/src/lib/supabase/browser.ts
  role: governing-source
  git_blob_sha: 4f84f7605f66e3e0dad5f686a6687c4a90a1b507
  source_status: unrecorded
- path: apps/web/src/lib/supabase/server.ts
  role: governing-source
  git_blob_sha: 861257950cf82fed2cacd4f1d24e24574fe8ea72
  source_status: unrecorded
- path: apps/api/src/modules/auth/supabase-auth.service.ts
  role: governing-source
  git_blob_sha: 77bbb0b76943a6a67cbb52beb7b074430753c655
  source_status: unrecorded
- path: apps/api/src/modules/auth/supabase-auth.guard.ts
  role: governing-source
  git_blob_sha: 7d40c0782a7ce7676343bb1d24aea8fe3c896ec1
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0062/FACTOR-SOURCE.md
  role: governing-source
  git_blob_sha: ef35bd75d4b782c489d90c1430bb3a9e759efa04
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0064/OWNER-AUTHORIZATION.json
  role: governing-source
  git_blob_sha: fe99817f22eed4509ca789ee312a5abcbd7ce8ca
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0064/BOUNDED-SCOPE.md
  role: governing-source
  git_blob_sha: ee82fed3a6370724c0dc0663cb699d4bb92a2590
  source_status: unrecorded
source_gaps:
- id: BACKEND-TRUST
  limitation: Frontend MFA is not authorization. PRINCIPAL conditional; SESSION/N12
    blocked; target configuration/factor completeness unverified.
- id: HOSTED-NOT-RUN
  limitation: No hosted execution or fixtures; all3 prerequisites UNKNOWN; R01-R08
    NOT_RUN, historical EPERM BLOCKED.
prepared_by: agent_workflow.py
---

# VEL-CP-0064 — Implement bounded Next.js password and TOTP MFA interface

## Objective
Implement approved browser-only login/MFA continuation and explicit optional enrollment, with offline synthetic tests and no backend security approval

## Scope
**In:** apps/web/src/app/login/page.tsx; apps/web/src/app/account/mfa/page.tsx; apps/web/src/components/auth/auth-panel.tsx; apps/web/src/lib/auth/mfa-flow.ts; apps/web/src/lib/auth/mfa-flow.test.ts; apps/web/src/lib/auth/auth-panel.test.tsx; package.json; CURRENT-STATE.md; docs/agent-workflow/tasks/VEL-TASK-0064.yaml; docs/agent-workflow/context-packs/VEL-CP-0064.md; docs/agent-workflow/execution-bundles/VEL-EB-0064.md; docs/agent-workflow/inputs/VEL-TASK-0064/*; docs/reports/VEL-NEXTJS-MFA-0064.md; docs/reports/evidence/VEL-TASK-0064/*; docs/agent-workflow/PR-COMPLIANCE.yaml
**Out:** Hosted Auth/accounts/enrollment/JWT/JWKS/credentials/SQL/migrations/settings; Backend/Auth policy/API/books behavior/manuscript writes/dependency/CI changes; Production gate decisions, deployment, paid/private operations and merge

## Evidence and authority constraints
The text below is a readable rendering of pinned Git blobs; exact raw bytes remain recoverable from the recorded commit/blob SHAs. Recorded source statuses remain in force: draft research is not accepted requirements. Original unarchived uploads are not independently verified merely by being mentioned.

**Known source gaps:**
- BACKEND-TRUST: Frontend MFA is not authorization. PRINCIPAL conditional; SESSION/N12 blocked; target configuration/factor completeness unverified.
- HOSTED-NOT-RUN: No hosted execution or fixtures; all3 prerequisites UNKNOWN; R01-R08 NOT_RUN, historical EPERM BLOCKED.

## Permissions and acceptance
**Allowed:** Implement only approved paths after committed validated CP, Run offline synthetic tests and existing CI disposable fixtures; public docs/source reads only, Distinct trusted source review, publish Draft and promote Ready after evidence/CI
**Owner approval required:** PR merge and successor scope; Any hosted/actual Auth operation or backend policy/security decision
**Acceptance criteria:**
- Reuse existing browser client and preserve signup/library/backend/auth boundaries
- Enrolled AAL1 must challenge and verify; unsupported/malformed/unavailable/contradictory state fails closed
- Explicit TOTP enrollment and challenge/verify, transient QR/secret only; no raw errors or unsafe SVG insertion
- Handle duplicate submission, pending, errors, incomplete/unknown enrollment and stale identity/session responses
- Deterministic offline controller/component tests including accessibility/focus/copy and negative cases
- Run focused/existing tests, frozen install/build/typechecks/governance, distinct exact-head source review and actual CI
- Keep R01-R08 NOT_RUN, N12/historical EPERM BLOCKED, Issue108 OPEN, owner merge required

## Deliverables
- Scoped controller, reused login, explicit enrollment screen and synthetic tests
- Immutable CP before code, EB/provenance/raw execution/source review and Draft PR
- Ready only after actual evidence and CI; separate owner merge

## Pinned source snapshots
Git commit: `8836111ad85307409464a55c1696b42f5645e18d`. Read source statuses independently from task intent.

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

### `CURRENT-STATE.md` @ `2e2e37f60843b8e6b883e711c4a4dd1ae2572911`

~~~~~~markdown
---
id: VEL-STATE-001
type: current-state
status: active
created_at: 2026-10-08
updated_at: 2026-10-26
owner: project_owner
version: 0.2.2
---

# Vellistry — current verified state

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

### `docs/agent-workflow/inputs/VEL-TASK-0064/LANGUAGE-CONTEXT.md` @ `e7b31a1d340c59cd5a4ef28919f0c7b3695a9df3`

~~~~~~markdown
# Bounded language source excerpt

Full source remains LANGUAGE.md at main33812f87a896574f245d37793d8d7f74403a2aea, blob 1b8a700218c8f93bfb4ca7972b90c00d03c673c0. Its full69KB exceeds the ContextPack per-source35KB limit. This excerpt preserves scope/status and applicable copy safeguards, not a new language decision.

---
id: VEL-LANG-001
title: Vellistry Product Language, Terminology, and UX Content Standard
type: product-language-standard
status: proposed-owner-review
version: 1.0.2-candidate
created_at: 2026-10-17
updated_at: 2026-10-20
owner: project_owner
repository: Ben-001-sys/Vellistry
baseline_main_sha: f371448538dafa92faebbef9bcda2a36c6ca1fa9
scope: user-facing product language; not programming-language rules
approval_required: true
related_adrs: [ADR-0003, ADR-0004, ADR-0006, ADR-0007, ADR-0008]
related_journeys: [VEL-JRN-001, VEL-JRN-002, VEL-JRN-003, VEL-JRN-004, VEL-JRN-005, VEL-JRN-006, VEL-JRN-007, VEL-JRN-008, VEL-JRN-009, VEL-JRN-010, VEL-JRN-011]
---

# LANGUAGE.md — Vellistry product language and terminology

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

## 1. Purpose, authority, and applicability

### 1.1 What this file governs

This standard covers visible navigation, feature and page names, menus, breadcrumbs, tab names, buttons, form fields, helper text, tooltips, search and filters, confirmation dialogs, errors, empty states, saving and AI progress, notices, accessibility names, onboarding, author-visible revision provenance, export and privacy language, and future localized content. It also defines the semantic boundaries agents must preserve when writing content.

It **does not** standardize TypeScript/Python style, rename internal API or database artifacts, choose visual styling, decide new backend behaviors, authorize subscriptions, certify third-party rights, or approve extra MVP features. UI wording must follow tested behavior and accessibility requirements.

### 1.2 Authority and precedence

Apply authority in this order:

1. Explicitly owner-approved product scope, owner decisions, `PROJECT-CONSTITUTION.md`, accepted ADRs and security/privacy boundaries.
2. Verified code, real integration results and actual enabled features for truthful behavioral claims. Code does not automatically overrule the approved product goal; discrepancies are recorded as implementation gaps.
3. Once approved: **this document** for visible words that do not conflict with levels 1–2; source-of-truth change control applies.
4. Dated user-journey and design specifications (`VEL-JRN-001..011`, PLAN-03, editable Figma master) where not superseded; they are not all accepted routes/copy.
5. Competitor terminology, style guides and analyst proposals as supporting research, not independent authority.

Consult `CURRENT-STATE.md` and live GitHub status before claiming something is integrated or complete. Do not treat a proposed Figma route, a synthetic demonstration, or a historical PR as a production capability. The exact repository snapshot used to prepare this candidate is `f371448` on 2026-10-16; re-audit when adopting.

### 1.3 Status codes for this vocabulary

| Code | Interpretation | Implementation rule |
|---|---|---|
| `EXISTING_UI` | Exact or near-exact string verified in `main` application code | Preserve unless independently reviewed; it may still need refinement |
| `APPROVED_CONCEPT` | The named behavior/concept is supported by owner-approved scope, ADR, or later decision | Preserve meaning; suggested exact title-case/display capitalization may still be proposed |
| `PROPOSED_LABEL` | Recommended visible wording informed by evidence | Candidate to adopt; **not** pre-approved merely because listed here |
| `FUTURE_RESERVED` | Useful name for an explicitly deferred feature, not an MVP menu item | No enabled UI, marketing claim, or new scope without separate approval |
| `PENDING_DECISION` | Name or semantic mapping unresolved or dependent on unverified behavior | Do not enforce as final or show as enabled without review |
| `INTERNAL_ONLY` | Engineering/process name, not a suitable general UI label | May remain unchanged in code, data, logs and engineering docs |

Use `status` **per term** and, for high-impact changes, **per specific UI label**. A product concept's approval does not make every draft string official.

## 12. Voice, tone, writing conventions and accessibility

### 12.1 Vellistry voice

**Clear, composed, respectful of the creative process, quietly encouraging, never promotional during essential work.** The product should sound like a capable writing assistant and editor, not an autonomous novelist, an enterprise admin console, or an excitable AI chatbot.

| Situation | Tone | Example |
|---|---|---|
| Routine navigation | Neutral, concise | **Your books** |
| First use | Helpful and choice-oriented | **Create a book to begin. AI is optional.** |
| Creative guidance | Suggestive, non-prescriptive | **Consider whether this exchange adds something new.** |
| Continuity warning | Specific, evidence-led | **This scene says Mara knows the secret, but the approved profile places that discovery later. Review both sources.** |
| Save interruption | Precise, calm | **We couldn't confirm that the last save completed.** |
| Irreversible action | Serious, explicit | **Delete book** plus affected content explanation |
| AI consent | Transparent, non-coercive | **Review what will be sent to AI.** |

Do not write “Your novel is bad,” “Fix your AI slop,” “AI detected,” “Guaranteed human-sounding prose,” “Magically perfected,” or “The AI understands your entire world.” The researched fiction lenses support context-dependent diagnosis and legitimate artistic exceptions; no isolated style device proves AI authorship.

### 12.2 Grammar and microcopy conventions

- **Sentence case** for navigation, headings, actions, errors and field labels, except exact product names and user-created names.
- Use **you/your** to address authors; avoid “user”, “tenant”, “consumer” and “the end-user” in UI.
- Prefer active verbs, positive specific instructions and natural contractions where appropriate: **Couldn't save your changes.** Do not use jokes or decorative exclamation marks for errors.
- Buttons/short labels normally have **no terminal period**. Complete help/warning sentences end with periods. Use one ellipsis glyph `…` for ongoing status, e.g. **Saving…**, not three periods; this is a proposed UI polish, not a forced code migration.
- Sentence fragments are fine as statuses: **Unsaved changes**, **Review needed**. The grammar must not hide uncertainty.
- Display acronym expansions at first encounter if the writer must understand them: **API key** can be introduced as a provider access key; **DOCX** and **TXT** are recognizable filename formats with accessible descriptions. Keep **BYOK**, **CAS**, **JWT**, **RLS**, **JSON**, **MCP**, **RPC** out of ordinary screens unless the context is explicitly technical setup/help.
- Write interface instructions describing outcomes, not mechanics: **Choose a book and start writing** rather than **Invoke the chapter-write operation**.
- Avoid gender assumptions; use character names/pronouns supplied by the author. No forced gender labels, ethnicity or genre stereotypes. Never normalize character names in manuscript prose.
- Do not hardcode author locale, time zone or currency. Format with locale-aware libraries and verified provider-supplied values. Currency estimates must include unit and source.
- For time-relative information, provide an accessible exact timestamp when ambiguity matters; use **Updated [localized date/time]** only with actual data.
- Accessibility: all controls have visible labels or equivalent accessible names; error summaries point to affected fields, feedback is textual and not color-only, headings form a logical hierarchy, focus returns appropriately after dialogs, and live regions are measured rather than spammed.
- Icons need labels if their meaning is not determinable from context: **Show chapter list**, **Close Story Workspace**, **More book options**. Tooltip cannot replace accessible name.
- Avoid emoji as a substitute for essential status. Do not rely on icons to convey whether an action is approved, saved, disabled, stale or safe.

### 12.3 Language and localization boundaries

Current source copy is English and the app marks document language `en`. No translated catalog or chosen locale set was found in the reviewed main tree. Before adding localization, externalize content, preserve grammatical placeholders, respect plural rules and content expansion, design RTL/IME/keyboard tests, and get author-region research. Do not bake British or American spelling choices into database values or assume Ghanaian users all prefer one format. Keep literary wording flexible across cultures and genres.

## 13. Domain-specific language safeguards

### 13.1 Fiction truth is not ordinary factual truth

Authors may intentionally write unreliable narrators, false beliefs, deception, paradoxes, out-of-order reveals or revisions of earlier events. Calling a passage **incorrect** requires evidence and appropriate caveats. Prefer **Possible continuity issue**, **Check this detail**, **Character knowledge may differ here**, and link to the source. For small MVP, such automated audits may not yet exist; these are not enabled features by virtue of having proposed labels.

### 13.2 Rules are guidance, not censorship

The historical 13-domain fiction framework distinguishes reusable diagnostic lenses from rigid prohibitions. A writing rule's inclusion in a prompt is measurable; model obedience and literary merit are separate. A user disabling a particular rule changes active instructions, not the immutable original archive or the probability the model may use an overlapping literary idea. Do not promise impossible exclusion of all semantic overlaps.

**Critical R01 source identity:** ADR-0007 accepts preserving 260 compact/expanded source records with identity `(raw_source_sha256, variant, printed_code)`. Some apparent duplicate IDs, especially `AR-04` and `AR-09`, have different meanings. A printed `AR-04` alone is not a safe operational rule ID. The Wave 5 draft mentions 134 logical aliases, 130 enabled expanded defaults and 4 additional compact entries; ADR-0007 expressly says the deployable active mapping remains subject to explicit owner review/certification. **Do not manufacture a resolved label catalog** or claim complete default activation before verifying the actual approved mapping. Keep the frozen source unchanged.

### 13.3 AI ownership and request transparency

The user controls the original manuscript, model selection and what proposed changes they accept. Model connection does not transfer authorship automatically. Vellistry's MVP selects OpenRouter as first BYOK integration route, with a small verified model menu, session-only in-memory key custody under the approved plan, and explicit request transfer preview. Do not say a private key is never visible to the server during authorized inference: the approved server proxy may receive it transiently. Do not say an author must pay Vellistry to write manually; free/paid provider offerings and real cost are separate.

### 13.4 Revision acceptance and undo semantics

A valid suggestion may target only the current authorized chapter revision/selection. The accepted Wave 5 concept requires revision-safe, idempotent acceptance and compensated Undo. **Accepted suggestion** must mean persisted and acknowledged; **Undo** is not permission to erase later author edits. If the author edited while AI was responding, describe the suggestion as **out of date**, keep accepted prose unchanged, and request a new suggestion.

### 13.5 Format, print and backup vocabulary

`TXT` and ordinary `DOCX` are selected MVP interchange; fidelity warnings may be necessary. A Vellistry project backup is intended to preserve supported manuscript and story configuration, not plaintext API keys. EPUB, print-ready PDF and professional cover design are **deferred**, and must not appear as delivered buttons. **Book cover** is an asset; **Cover Studio** is the future editable design workflow, not an automatic image generation feature or ordinary manuscript export.

## 15. Agent instructions and integration rules

### 15.1 Mandatory pre-change checklist

For any task touching navigation, visible copy, UI states, status mapping, onboarding, accessibility text, dialogs, toasts, emails, files named for users or provider-consent wording:

1. Read `AGENTS.md`, `PROJECT-CONSTITUTION.md`, `SOURCE-OF-TRUTH.md`, current `CURRENT-STATE.md`, the affected accepted scope/spec/ADR, and this document's relevant sections.
2. Identify whether the feature is `EXISTING_UI`, approved but not implemented, proposed or deferred. Inspect actual component/source and API/error/DB state semantics **before** choosing words.
3. Reuse preferred terms precisely; determine whether this is the same concept, a contextual abbreviation or a distinct domain object.
4. Build a small copy mapping: surface/path, existing copy, proposed copy, semantic condition, expected action/result, accessibility name, associated test.
5. Flag unknown terminology or conflict as `PENDING_DECISION`; do not rewrite product names, owner decisions, immutable fiction-guidance records or technical schemas independently.
6. If wording implies a behavioral guarantee, identify the test/receipt/authorization evidence. If unverified, use qualified truthful wording or block the claim.
7. Implement only within an owner-authorized coding task and existing Codex ContextPack/ExecutionBundle workflow. **This document does not authorize implementation.**
8. Include copy and state coverage in tests and review evidence; update this record through separate owner-reviewed change control when adopting a new canonical term.

### 15.2 Do not change without explicit approval

- Approved M1–M8 scope, eleven journey IDs, the selected AI boundary and BYOK semantics.
- Product name/trademark claims, major module names such as **Rules Studio** and **Story Profiles**, or default source-language content that would alter authored rules.
- R01 compact/expanded frozen sources, their provenance IDs and owner mapping decisions.
- Internal SQL/table/column names (`owner_id`, `accepted_document`, `chapter_revisions`), API routes (`/v1/books`), typed enums/response codes (`acknowledgment_unknown`, `session_changed`), TypeScript symbols, provider names, contractual record IDs, or migration history **solely to align with UI labels**.
- Security, deletion, retention, cost, consent, export fidelity or save guarantees without appropriate verified implementation and owner approval.
- An unimplemented future feature's navigation/CTA as if it worked.

### 15.3 Enforcement and automated checks

Human review is primary for semantics; regex cannot decide whether **Accept** and **Approve** mean the same thing in a new context. Pragmatic checks, when separately authorized, can:

- inventory literals in `apps/web/src` (JSX text, attributes, `aria-label`, errors and constants) and compare against this vocabulary;
- flag known high-risk display phrases (`Saved` without receipt context; `Save failed` on unknown ACK; `Canon updated` before approval; `free AI` with no verified basis);
- test consent disclosure and actual transmitted context, including disabled rule exclusion;
- test exact sign-in/library/empty/error states, retry uncertainty and duplicate risk;
- test AI suggestion accept/reject/stale behavior and fact approval independence;
- test export/backup and destructive confirmation distinctions;
- run keyboard/screen-reader checks alongside visual copy checks.

Do not automatically replace all instances of “create”, “accept”, “version”, “story”, “rule” or “save”: many contextual uses are legitimate. A string-check suite cannot replace evidence of underlying authorization and data durability. Any new enforcement job must follow the project's CI/task governance and owner authorization.

### 15.4 Exact `AGENTS.md` insertion candidate

Originally proposed for insertion after `## Read in order` and before the operational workflow. **PR #77 now includes this snippet in `AGENTS.md` on its review branch; it is not yet merged into `main`.** This integration does not approve proposed product labels or alter existing owner/Codex authority.

```markdown
## Product language and UX copy (LANGUAGE.md)

- Before any change to user-facing navigation, page names, buttons, forms, dialogs, status messages, errors, tooltips, accessibility labels, onboarding, AI consent or export wording, read root `LANGUAGE.md` alongside the relevant accepted product requirements and current implementation.
- Follow `LANGUAGE.md` for owner-approved product terminology. Reuse canonical names consistently while allowing explicitly documented contextual short labels; preserve distinct concepts such as manuscript vs notes, AI suggestion vs accepted revision, suggested fact vs approved canon, and local recovery vs confirmed save.
- Verify what the interface and backend actually do before using success, save, privacy, cost, cancellation, deletion or provider-availability claims. Do not expose internal transport codes as author-facing text or mark proposed/future features as implemented.
- If a needed term is absent, proposed, disputed or inconsistent with approved scope, record the current wording, candidate, affected surfaces and supporting evidence for owner review. Do not silently make a new canonical decision or rename unrelated concepts.
- `LANGUAGE.md` governs visible words, not database fields, API routes, internal identifiers, source archives, accepted ADRs, or integration contracts. Do not change those solely to match display labels.
- Include user-facing copy/state checks and relevant accessibility/negative tests in the task ExecutionBundle. Do not change the language contract or add automation enforcing it outside the owner-authorized Task → ContextPack → implementation → review workflow.
```
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

### `apps/web/src/app/login/page.tsx` @ `2c499b7259d75a3bebfe780122b30aa51439e7ea`

~~~~~~markdown
"use client";
import {useState,type FormEvent} from "react";
import Link from "next/link";
import {getBrowserSupabase} from "@/lib/supabase/browser";

export default function Login(){
 const [email,setEmail]=useState("");
 const [password,setPassword]=useState("");
 const [status,setStatus]=useState("");
 const [pending,setPending]=useState(false);
 async function submit(mode:"signin"|"signup"){
  if(!email.trim()||password.length<6){setStatus("Enter a valid email and a password of at least six characters.");return;}
  setPending(true);setStatus("");
  try{
   const auth=getBrowserSupabase().auth;
   const {error}=mode==="signin"
    ? await auth.signInWithPassword({email,password})
    : await auth.signUp({email,password});
   if(error)throw new Error(error.message);
   if(mode==="signin")window.location.assign("/books");
   else setStatus("Account requested. Check your email if confirmation is enabled.");
  }catch(err){setStatus(err instanceof Error?err.message:"Sign-in failed");}
  finally{setPending(false);}
 }
 return <main className="mx-auto max-w-md p-8 space-y-5">
  <h1 className="text-2xl font-semibold">Sign in to Vellistry</h1>
  <form className="space-y-4" onSubmit={(e:FormEvent)=>{e.preventDefault();void submit("signin");}}>
   <label className="block">Email
    <input className="mt-1 block w-full rounded border p-2" type="email" autoComplete="email" required value={email} onChange={e=>setEmail(e.target.value)}/>
   </label>
   <label className="block">Password
    <input className="mt-1 block w-full rounded border p-2" type="password" autoComplete="current-password" minLength={6} required value={password} onChange={e=>setPassword(e.target.value)}/>
   </label>
   <div className="flex gap-3">
    <button className="rounded bg-black px-4 py-2 text-white disabled:opacity-50" type="submit" disabled={pending}>Sign in</button>
    <button className="rounded border px-4 py-2 disabled:opacity-50" type="button" disabled={pending}
      onClick={()=>{void submit("signup");}}>Create account</button>
   </div>
  </form>
  <p aria-live="polite" role="status">{status}</p>
  <Link href="/">Back to home</Link>
 </main>;
}
~~~~~~

### `apps/web/src/lib/supabase/browser.ts` @ `4f84f7605f66e3e0dad5f686a6687c4a90a1b507`

~~~~~~markdown
"use client";
import {createBrowserClient} from "@supabase/ssr";
export function getBrowserSupabase(){
 const url=process.env.NEXT_PUBLIC_SUPABASE_URL;
 const key=process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
 if(!url||!key)throw new Error("Supabase project configuration is missing");
 return createBrowserClient(url,key);
}
~~~~~~

### `apps/web/src/lib/supabase/server.ts` @ `861257950cf82fed2cacd4f1d24e24574fe8ea72`

~~~~~~markdown
import {cookies} from "next/headers";
import {createServerClient} from "@supabase/ssr";
export async function getServerSupabase(){
 const url=process.env.NEXT_PUBLIC_SUPABASE_URL;
 const key=process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
 if(!url||!key)throw new Error("Supabase environment is missing");
 const cookieStore=await cookies();
 return createServerClient(url,key,{
  cookies:{
   getAll(){return cookieStore.getAll();},
   setAll(toSet){
    // Mutations are allowed in route handlers; server page renders remain read only.
    try{toSet.forEach(({name,value,options})=>cookieStore.set(name,value,options));}
    catch {/* Never claim a token was refreshed in a Server Component. */}
   }
  }
 });
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

### `docs/agent-workflow/inputs/VEL-TASK-0064/OWNER-AUTHORIZATION.json` @ `fe99817f22eed4509ca789ee312a5abcbd7ce8ca`

~~~~~~markdown
{
  "html_url": "https://github.com/Ben-001-sys/Vellistry/issues/108#issuecomment-6427502671",
  "id": 6427502671,
  "created_at": "2026-10-26T21:15:32Z",
  "updated_at": "2026-10-26T21:15:32Z",
  "body": "### Owner direct-chat dispatch \u2014 begin bounded Vellistry MFA UI implementation (26 October 2026)\n\n**Provenance:** In the continuing owner conversation, after reviewing the existing Vellistry login and comparing the isolated temporary probe with implementation in the real app, the owner instructed: **\u201clets go\u201d**. This is a coordinator relay of that bounded instruction, not independent identity attestation. It authorizes preparing a **new, unique, repository-only implementation Task/immutable ContextPack** and proposing the *existing-app* Next.js MFA/login continuation under ordinary owner-governed Codex execution. It does **not** authorize a PR merge, hosted operations, broad production access, or rewriting prior Task0063 authority.\n\n**Verified starting point:** current main `33812f87a896574f245d37793d8d7f74403a2aea` at this dispatch; re-verify immediately before creation. Task0064 appears unused at dispatch (re-check). Existing UI `apps/web/src/app/login/page.tsx` signs in with Supabase and redirects directly to `/books`; `apps/web/src/lib/supabase/browser.ts` supplies browser client; existing `apps/web/src/lib/supabase/server.ts` supplies server client. Existing NestJS `apps/api/src/modules/auth/supabase-auth.service.ts` and guard verify user ID but do **not** implement the pending trusted conditional MFA/PRINCIPAL boundary or N-12 writable-session authorization.\n\n**Permitted bounded implementation direction (proposal to be pinned precisely in new Task):**\n- Reuse the existing Vellistry Next.js login and Supabase browser integration. Create reviewable author-facing TOTP step-up/challenge and optional TOTP enrollment UI in Vellistry itself, using the project's frozen SDK behavior and the official Supabase MFA enrol/challenge/verify API contract.\n- No standalone throwaway login/testing app. Explain AAL1 versus AAL2 transitions and error/recovery handling; don't rely on `getAuthenticatorAssuranceLevel()` convenience results, decoded AAL, or `listFactors()` alone as authoritative **backend** factor-state/permission proof.\n- Fail closed in frontend transitions if MFA status/factor state is unavailable or contradictory; do not redirect an enrolled AAL1 author to protected writing UI as if MFA was done. Equally, do not claim that a frontend redirect/guard enforces server authorization; preserve the current separate PRINCIPAL/SESSION/N-12 blocks.\n- Include scoped deterministic offline UI/component-flow tests with synthetic mock SDK responses (no real accounts/tokens, no hosted requests). Preserve existing library behavior, backend/Books ABI and CI tests. New routes/screens must be explicitly scoped and reviewable, with accurate product language and no claims of production security acceptance.\n- Write new Task + source inputs, **commit validated immutable ContextPack before operative source edits**, then implementation, ExecutionBundle, provenance/status evidence, distinct completed-head review, actual CI, and separate owner merge decision. Codex remains the designated implementer; coordinator does not impersonate Codex/executor or bypass Task/CP.\n- Source review should specifically prevent sign-in AAL1 bypass through the UI flow and prevent unsafe QR / TOTP secret disclosure via logs/repo/telemetry; restrict raw auth errors appropriately. Respect frozen deps and `LANGUAGE.md` approval status.\n\n**Explicit exclusions:** No Supabase hosted Auth/JWT/JWKS/user/factor/session operations, no credentials/key material or live synthetic-auth probe, no account provisioning/enrollment on target yet, no SQL/grants/RLS or backend Auth/principal/guard policy changes, no manuscript writes, production/pilot rollout, paid services, CI/manifest bypass, MFA policy downgrade, legacy HS256 testing, or automatic merge. Owner's previously reported creation of a test user does not establish both synthetic fixture states. Exact live application MFA test requires separate owner-run target permissions and reviewed execution safeguards.\n\n**Status retained:** PRINCIPAL_DESIGN_APPROVED_CONDITIONAL; target factor-state completeness, issuer/audience/claims/current/legacy-key verification assurance still unresolved. R01\u2013R08 NOT_RUN, N-12 and historical independent `spawn EPERM` BLOCKED; Issue #108 OPEN; old remediation delegation EXPIRED. Prior Task0059\u20130063/CP/EB/history unchanged. This task is **UI implementation preparation/development only**, not completion of Auth security or hosted verification.\n"
}
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0064/BOUNDED-SCOPE.md` @ `ee82fed3a6370724c0dc0663cb699d4bb92a2590`

~~~~~~markdown
# Task0064 bounded UI dispatch — 26 October 2026

FACT: direct owner dispatch authorizes Next.js login continuation, TOTP enrollment screen, challenge/verify UI, deterministic offline mock-SDK tests and reviewable PR. Repository main33812f87a896574f245d37793d8d7f74403a2aea. Task0064 absent. Existing login directly redirects after signInWithPassword; existing browser/server clients retained. Existing signup UI retained, not exercised against hosted Auth. Actual account creation/enrollment and Auth calls are forbidden during agent execution.

DECISION: UI uses existing browser client through an injected controller. Explicit getUser factor-array presence, SDK AAL and same-session checks route UI only; none is authoritative backend authorization. Verified unsupported factor types or contradictory/incomplete states block continuation. Unenrolled authors can continue to the existing library or explicitly start optional TOTP setup; enrolled AAL1 requires challenge, no bypass. No /books, API or Nest changes or new write privileges. Direct URL/backend access remains an unresolved security boundary, not silently accepted for enrolled AAL1. Enrollment at /account/mfa requires identity check; no automatic enroll on mount. QR/secret stays transient in component/controller memory, never logs/telemetry/storage; no raw SVG HTML. Unknown enrollment results block blind retries until status recheck/sign-in. No automatic deletion/unenrollment.

PROPOSAL: clear English MFA wording, recorded in report for owner review; LANGUAGE remains proposed. Tests cover successful/failed/incomplete/unavailable/pending transitions, factor/AAL contradictions, stale identities/responses, enrollment and secret cleanup, duplicate-submit prevention, accessibility/form/focus behavior. No backend acceptance or gate promotion. R01-R08 NOT_RUN; N12/historical independent spawn EPERM BLOCKED; hosted fixture prerequisites UNKNOWN and G1-G4 unsatisfied; Issue108 OPEN, expired delegation unchanged.

Official source: https://supabase.com/docs/guides/auth/auth-mfa/totp inspected26October2026. Frozen auth-js2.117.3 source is the API compatibility authority. Public changelog inspected (no project access); TLS cipher deprecation is external transport context, no dependency/configuration upgrade authorized.
~~~~~~

## Execution reporting
Return an ExecutionBundle with FACT / INTERPRETATION / PROPOSAL sections,
tests actually performed, changes, evidence gaps, and pending owner approval.
