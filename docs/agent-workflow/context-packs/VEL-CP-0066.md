---
id: VEL-CP-0066
title: 'Context for VEL-TASK-0066: Reconcile Task0065 provenance while preserving
  the bounded MFA CI scope'
type: context-pack
status: prepared
created_at: '2026-10-26'
version: 0.1.0
task_id: VEL-TASK-0066
base_commit: 79accffc9e99d0eff3ff43b9a765503c63e6675f
task_blob_sha: a265d8e99c5a9334333d9bc4a896bb34a4137f35
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
  git_blob_sha: b812715de3853db0ed0067a697bfe0acc6d346cc
  source_status: active
- path: docs/agent-workflow/PR-COMPLIANCE.md
  role: governing-source
  git_blob_sha: 5f4845623aef3abb15fba7fbe8e78474902cca00
  source_status: unrecorded
- path: .github/workflows/ci.yml
  role: governing-source
  git_blob_sha: b653b637692cbf42e9a4727f397849e006d9bef6
  source_status: unrecorded
- path: scripts/pr_compliance.py
  role: governing-source
  git_blob_sha: 38b758b90d0ae5c67264f49403a1c35df02c391e
  source_status: unrecorded
- path: scripts/ci_policy.py
  role: governing-source
  git_blob_sha: 2a70169a607819b64d70d2a37871b09fe76709f8
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0066/OWNER-AUTHORIZATION.json
  role: governing-source
  git_blob_sha: c4b16c6470e122719d7e54fa285d92325eba82d8
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0066/AMENDMENT.md
  role: governing-source
  git_blob_sha: 1cdb49c202b39afb2376627ac2b6104876f55481
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0066/TASK0065-HISTORY.json
  role: governing-source
  git_blob_sha: 7f8dfa50c797bb1c36a1b42078e2c12b2b19740d
  source_status: unrecorded
source_gaps:
- id: SYNTHETIC-ONLY
  limitation: MFA suite uses mock SDK results, not hosted Auth acceptance; R01-R08
    NOT_RUN, N12/independent EPERM BLOCKED, production decisions unchanged.
- id: TASK65-STRUCTURAL-FAILURE
  limitation: Original pack had unsupported provenance enum; Task66 reconciles only
    that schema error under unchanged direct owner scope. Original records/evidence
    remain historical and blocked, not trusted-base certified.
prepared_by: agent_workflow.py
---

# VEL-CP-0066 — Reconcile Task0065 provenance while preserving the bounded MFA CI scope

## Objective
Complete unchanged owner-authorized mandatory55MFA CI integration through a valid fresh immutable handoff; preserve structurally invalid Task65 history without rewriting it

## Scope
**In:** .github/workflows/ci.yml; scripts/pr_compliance.py; tests/test_ci_policy.py; tests/test_pr_compliance.py; CURRENT-STATE.md; docs/agent-workflow/tasks/VEL-TASK-0065.yaml; docs/agent-workflow/context-packs/VEL-CP-0065.md; docs/agent-workflow/execution-bundles/VEL-EB-0065.md; docs/agent-workflow/inputs/VEL-TASK-0065/*; docs/agent-workflow/PR-COMPLIANCE.yaml; docs/reports/VEL-MFA-CI-0065.md; docs/reports/evidence/VEL-TASK-0065/*; docs/agent-workflow/tasks/VEL-TASK-0066.yaml; docs/agent-workflow/context-packs/VEL-CP-0066.md; docs/agent-workflow/execution-bundles/VEL-EB-0066.md; docs/agent-workflow/inputs/VEL-TASK-0066/*; docs/reports/VEL-MFA-CI-0066.md; docs/reports/evidence/VEL-TASK-0066/*
**Out:** Application/Auth/backend policy/SQL/Supabase/dependency changes; Hosted operations/MFA enrollment/credentials/JWT/JWKS/private/paid/deploy/settings; Task64 or earlier immutable/history rewriting and automatic merge

## Evidence and authority constraints
The text below is a readable rendering of pinned Git blobs; exact raw bytes remain recoverable from the recorded commit/blob SHAs. Recorded source statuses remain in force: draft research is not accepted requirements. Original unarchived uploads are not independently verified merely by being mentioned.

**Known source gaps:**
- SYNTHETIC-ONLY: MFA suite uses mock SDK results, not hosted Auth acceptance; R01-R08 NOT_RUN, N12/independent EPERM BLOCKED, production decisions unchanged.
- TASK65-STRUCTURAL-FAILURE: Original pack had unsupported provenance enum; Task66 reconciles only that schema error under unchanged direct owner scope. Original records/evidence remain historical and blocked, not trusted-base certified.

## Permissions and acceptance
**Allowed:** Prepare Task/source/immutable pack in isolated worktree and validate/commit before operative edits, Scoped workflow/static-contract/regression edits and offline synthetic verification; existing disposable CI fixtures only, Publish Draft, obtain distinct trusted read-only source review, promote Ready after evidence/CI and verify exact-head results; no merge
**Owner approval required:** Any app/backend/SQL/dependency/hosted/security decision scope extension; PR merge or successor work
**Acceptance criteria:**
- Existing pnpm test:auth-mfa command runs once unconditionally in application after frozen install/principal tests, before build/check/PG/security
- Reject missing/replaced/skipped/softened/masked/duplicated/reordered MFA step and shell/directory/env overrides; show old-contract negative gap then corrected PASS
- Every approved Next.js Auth source/test path selects required app/security/recovery verification in ready mode; application failure blocks final gate; Draft advisory unchanged
- Preserve single automatic workflow, six jobs, read-only permissions, existing tests/security/32PG/recovery/governance/final gate
- Auth source/package/dependencies/SQL/settings and Task59-64 histories unchanged; all unresolved gates and Issue108OPEN retained
- Actual focused/full governance and unchanged55MFA tests, distinct completed-head review and actual Draft/Ready CI; separate owner merge
- Retain original Task65/CP65/EB65/input/history bytes except permitted Task lifecycle; no weakening trusted-base evaluator or rewriting old immutable pack
- Adopt four operative code/test files only after committed validated CP66; their blobs match actual tested Task65 source; new Task66 provenance uses permitted owner-linked-dispatch category

## Deliverables
- Unique Task/source and validated committed immutable CP before edits
- Exactly one mandatory existing MFA command plus strict positive/negative contract, source-trigger and final-gate tests
- Actual offline/current CI evidence, EB/per-commit provenance, distinct source review and PR for owner merge decision

## Pinned source snapshots
Git commit: `79accffc9e99d0eff3ff43b9a765503c63e6675f`. Read source statuses independently from task intent.

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

### `CURRENT-STATE.md` @ `b812715de3853db0ed0067a697bfe0acc6d346cc`

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

## Bounded Next.js authentication/MFA UI — 2026-10-26

FACT: verified main33812f87a896574f245d37793d8d7f74403a2aea integrates PR125;
[post-main40294984494](https://github.com/Ben-001-sys/Vellistry/actions/runs/40294984494)
SUCCESS. Task0064/immutableCP0064 implements only the separately owner-authorized
Next.js password-sign-in continuation, TOTP step-up and explicit optional
`/account/mfa` enrollment UI with synthetic offline tests. Review/CI/owner merge
remain pending; no hosted Auth/enrollment was performed. See the
[report](docs/reports/VEL-NEXTJS-MFA-0064.md).

Frontend factor/AAL routing is not backend authorization. Existing `/books` and
NestJS Auth are unchanged; enrolled AAL1 backend acceptance is not approved or
fixed here. PRINCIPAL_DESIGN_APPROVED_CONDITIONAL and other production decisions
remain pending; R01-R08 NOT_RUN; N12/historical independent spawn EPERM BLOCKED.
All3 hosted fixture prerequisites UNKNOWN and G1-G4 unsatisfied; Issue108 OPEN;
remediation delegation EXPIRED. Prior paragraphs below are dated historical
submission records, not current merge authority or hosted permission.

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

### `.github/workflows/ci.yml` @ `b653b637692cbf42e9a4727f397849e006d9bef6`

~~~~~~markdown
# Primary automatic CI. Draft advisory is not a merge-eligible PASS.
name: Vellistry CI
'on':
  pull_request:
    types:
    - opened
    - synchronize
    - reopened
    - ready_for_review
    - edited
    - converted_to_draft
  push:
    branches:
    - main
  workflow_dispatch: {}
permissions:
  contents: read
concurrency:
  group: ${{ github.workflow }}-${{ github.event_name == 'pull_request' && github.event.pull_request.number || github.run_id }}
  cancel-in-progress: ${{ github.event_name == 'pull_request' }}
jobs:
  classify:
    name: Classify exact-head changes
    runs-on: ubuntu-latest
    timeout-minutes: 5
    outputs:
      application: ${{ steps.plan.outputs.application }}
      security: ${{ steps.plan.outputs.security }}
      recovery: ${{ steps.plan.outputs.recovery }}
      privileges: ${{ steps.plan.outputs.privileges }}
      mode: ${{ steps.plan.outputs.mode }}
    steps:
    - uses: actions/checkout@v4
      with:
        ref: ${{ github.event.pull_request.head.sha || github.sha }}
        persist-credentials: false
        fetch-depth: 0
    - name: Conservative change plan
      id: plan
      run: python scripts/ci_policy.py classify
  governance:
    outputs:
      compliance: ${{ steps.compliance.outputs.status }}
    name: ${{ needs.classify.outputs.mode == 'draft' && 'Draft advisory governance' || 'Governance and provenance' }}
    needs:
    - classify
    runs-on: ubuntu-latest
    timeout-minutes: 12
    steps:
    - uses: actions/checkout@v4
      with:
        ref: ${{ github.event.pull_request.head.sha || github.sha }}
        persist-credentials: false
        fetch-depth: 0
    - uses: actions/setup-python@v5
      with:
        python-version: '3.12'
    - name: Install YAML parser only
      run: python -m pip install 'PyYAML>=6,<7'
    - name: Lint all workflows with verified actionlint 1.7.12
      run: |
        curl --fail --silent --show-error --location --retry 3 \
          --output "$RUNNER_TEMP/actionlint.tar.gz" \
          https://github.com/rhysd/actionlint/releases/download/v1.7.12/actionlint_1.7.12_linux_amd64.tar.gz
        echo "8aca8db96f1b94770f1b0d72b6dddcb1ebb8123cb3712530b08cc387b349a3d8  $RUNNER_TEMP/actionlint.tar.gz" | sha256sum --check
        tar -xzf "$RUNNER_TEMP/actionlint.tar.gz" -C "$RUNNER_TEMP" actionlint
        "$RUNNER_TEMP/actionlint" -shellcheck=
    - name: Base-anchored PR compliance evidence
      id: compliance
      run: python -I scripts/run_pr_compliance.py
    - name: Run all current governance and negative contracts once
      run: python scripts/ci_governance.py
    - uses: actions/upload-artifact@v4
      with:
        name: vellistry-governed-handoff-packets
        path: |
          docs/agent-workflow/context-packs/VEL-CP-0002.md
          docs/agent-workflow/context-packs/VEL-CP-0003.md
          stage4-independent-agent-packet.zip
          level-b-test-packet.zip
        if-no-files-found: error
        retention-days: 14
  application:
    needs:
    - classify
    if: ${{ needs.classify.outputs.application == 'true' }}
    name: Application and applicable security
    runs-on: ubuntu-latest
    timeout-minutes: 40
    steps:
    - uses: actions/checkout@v4
      with:
        ref: ${{ github.event.pull_request.head.sha || github.sha }}
        persist-credentials: false
    - uses: pnpm/action-setup@v4
    - uses: actions/setup-node@v4
      with:
        node-version: '24'
        cache: pnpm
        cache-dependency-path: pnpm-lock.yaml
    - uses: actions/setup-python@v5
      with:
        python-version: '3.12'
    - name: Install one frozen workspace
      run: pnpm install --frozen-lockfile
    - name: Library isolation and unknown-save negative tests
      run: pnpm test:library-isolation
    - name: Workspace controller and organizer contract regressions
      run: pnpm test:workspace-contract
    - name: Protected workspace persistence unit regressions
      run: pnpm --filter @vellistry/api exec tsx --test src/modules/workspace/workspace-contract.spec.ts
    - name: Principal adapter binding regressions
      run: pnpm --filter @vellistry/api exec tsx --test src/modules/workspace/workspace-principal-adapter.spec.ts
    - name: Hosted preflight regressions when source is integrated
      run: 'if test -f tests/hosted_supabase_preflight.test.mjs; then node --test tests/hosted_supabase_preflight.test.mjs; else echo ''NOTICE:
        PR68 hosted preflight is not on this checkout; not tested''; fi'
    - name: Build both applications once
      env:
        NEXT_TELEMETRY_DISABLED: '1'
      run: pnpm build
    - name: Typecheck both applications once
      run: pnpm check
    - name: Disposable PostgreSQL17 protected workspace acceptance
      run: python tests/workspace/persistence/run_pg17.py --disposable --cases docs/contracts/VEL-IMP002-PERSISTENCE-CASES.json
    - name: Stage only current-head disposable persistence evidence
      if: ${{ always() }}
      run: |
        python - <<'PY'
        import json, os, shutil, subprocess
        from pathlib import Path
        head = subprocess.check_output(['git','rev-parse','HEAD'], text=True).strip()
        dest = Path(os.environ['RUNNER_TEMP']) / 'workspace-persistence'
        dest.mkdir(exist_ok=True)
        for path in Path('docs/reports/evidence/VEL-TASK-0052').glob('*-runtime.json'):
            data = json.loads(path.read_text(encoding='utf-8'))
            if data.get('source_commit') != head:
                continue
            shutil.copyfile(path, dest/path.name)
            cases = path.with_name(data['run_id']+'-cases.json')
            if cases.exists():
                shutil.copyfile(cases, dest/cases.name)
        PY
    - name: Attach current-head synthetic persistence results
      if: ${{ always() }}
      uses: actions/upload-artifact@v4
      with:
        name: workspace-persistence-results
        path: ${{ runner.temp }}/workspace-persistence/*.json
        if-no-files-found: ignore
        retention-days: '7'
    - name: Pick free, temporary CI-only Supabase API/DB ports
      run: |
        python3 - <<'PY'
        import socket
        from pathlib import Path
        ports = []
        for _ in range(2):
            with socket.socket() as sock:
                sock.bind(("127.0.0.1", 0))
                ports.append(sock.getsockname()[1])
        cfg = Path("supabase/config.toml")
        raw = cfg.read_text(encoding="utf-8")
        for old, new in zip((54321, 54322), ports):
            marker = f"port = {old}"
            if marker not in raw:
                raise SystemExit(f"Local Supabase CI port marker missing: {marker}")
            raw = raw.replace(marker, f"port = {new}", 1)
        cfg.write_text(raw, encoding="utf-8")
        print(f"Disposable local Supabase API/DB CI ports selected: {ports}")
        PY
      if: ${{ needs.classify.outputs.security == 'true' }}
    - name: Start real disposable local Supabase services
      run: |
        # Retain database, Auth, PostgREST, API gateway. Exclude unrelated services.
        # Do not use a linked cloud project or production credentials.
        pnpm exec supabase start --exclude realtime,storage-api,imgproxy,mailpit,studio,edge-runtime,logflare,vector,supavisor,postgres-meta
      if: ${{ needs.classify.outputs.security == 'true' }}
    - name: Validate actual sign-up, RLS, tokens, cross-author data and logout behavior
      shell: bash
      run: |
        set -euo pipefail
        # CLI output is trusted and local; NEVER print its secret values.
        set -a
        source <(pnpm exec supabase status -o env)
        set +a
        export SUPABASE_URL="${API_URL}"
        export SUPABASE_PUBLISHABLE_KEY="${PUBLISHABLE_KEY:-${ANON_KEY:-}}"
        export SUPABASE_TEST_SERVICE_KEY="${SERVICE_ROLE_KEY:-${SECRET_KEY:-}}"
        export API_PORT=4100
        export API_HOST=127.0.0.1
        export VELLISTRY_TEST_API_URL=http://127.0.0.1:4100
        test -n "${SUPABASE_URL}"
        test -n "${SUPABASE_PUBLISHABLE_KEY}"
        test -n "${SUPABASE_TEST_SERVICE_KEY}"
        node apps/api/dist/main.js >nest-k2.log 2>&1 &
        SERVER_PID=$!
        cleanup() {
          kill "$SERVER_PID" 2>/dev/null || true
          # Restrict diagnostic output to application startup/error lines.
          tail -30 nest-k2.log || true
        }
        trap cleanup EXIT
        ready=0
        for i in $(seq 1 60); do
          if curl --fail --silent -o /dev/null http://127.0.0.1:4100/v1/health; then ready=1; break; fi
          sleep 1
        done
        if [ "$ready" != "1" ]; then echo "Nest API unavailable"; exit 1; fi
        node apps/api/tests/supabase-auth-rls.integration.mjs
        node apps/api/tests/k2b-session-exposure.integration.mjs
        # Observe auth.sessions row removal under local/global logout, separately from JWT validity.
        node apps/api/tests/k2b-active-session-row.integration.mjs
        # This final experiment REVOKES grants and intentionally breaks Nest's
        # existing PostgREST book transport; run it last in disposable CI.
        node apps/api/tests/k2b-data-api-lockdown.integration.mjs
        # Research-only restricted Nest / Postgres route proof uses a separate role.
        # Run AFTER old route is deliberately broken by grant-lockdown diagnostic.
        test -n "${DB_URL:-}"
        node apps/api/tests/k2b-private-nest-gateway.integration.mjs
      if: ${{ needs.classify.outputs.security == 'true' }}
    - name: Attach synthetic-only results (no token or password)
      if: ${{ always() && needs.classify.outputs.security == 'true' }}
      uses: actions/upload-artifact@v4
      with:
        name: k2-supabase-auth-rls-results
        path: |
          k2-auth-rls-results.json
          k2b-session-observations.json
          k2b-live-session-row-observations.json
          k2b-lockdown-observations.json
          k2b-private-gateway-observations.json
        if-no-files-found: ignore
        retention-days: '7'
    - name: Shut down disposable local Supabase
      if: ${{ always() && needs.classify.outputs.security == 'true' }}
      run: pnpm exec supabase stop --no-backup || true
  recovery:
    name: Merged PostgreSQL CAS and restore contract
    runs-on: ubuntu-latest
    timeout-minutes: 16
    services:
      postgres:
        image: postgres:16
        env:
          POSTGRES_USER: postgres
          POSTGRES_PASSWORD: pair06synthetic
          POSTGRES_DB: pair06db
        ports:
        - 5432:5432
        options: --health-cmd "pg_isready -U postgres -d pair06db" --health-interval 5s --health-timeout 3s --health-retries 10
    env:
      PGPASSWORD: pair06synthetic
      PAIR06_DATABASE_URL: postgresql://postgres:pair06synthetic@127.0.0.1:5432/pair06db
    steps:
    - uses: actions/checkout@v4
      with:
        ref: ${{ github.event.pull_request.head.sha || github.sha }}
        persist-credentials: false
    - uses: actions/setup-python@v5
      with:
        python-version: '3.12'
    - name: Install PostgreSQL client binaries
      run: |
        sudo apt-get update -qq
        sudo apt-get install -y postgresql-client
    - name: Rerun disposable Pair 06 atomicity and independent restore
      run: python -m unittest discover -s docs/research/experiments -p 'test_pair06_postgres_operations.py' -v
    needs:
    - classify
    if: ${{ needs.classify.outputs.recovery == 'true' }}
  privileges:
    name: Integrated SQL privilege regression
    needs:
    - classify
    if: ${{ needs.classify.outputs.privileges == 'true' }}
    runs-on: ubuntu-latest
    timeout-minutes: 10
    container: postgres:17
    services:
      postgres:
        image: postgres:17
        env:
          POSTGRES_HOST_AUTH_METHOD: trust
        options: --health-cmd pg_isready --health-interval 5s --health-timeout 5s --health-retries 10
    env:
      PGHOST: postgres
      PGUSER: postgres
      PGDATABASE: postgres
    steps:
    - uses: actions/checkout@v4
      with:
        ref: ${{ github.event.pull_request.head.sha || github.sha }}
        persist-credentials: false
    - name: Original migrations must demonstrate the grant regression
      run: |
        if psql -X -v ON_ERROR_STOP=1 -v skip_hardening=true -f tests/book_privileges_regression.sql > before.log 2>&1; then
          cat before.log
          exit 1
        fi
        cat before.log
        grep -q 'Privilege mismatch: role=anon table=books privilege=TRUNCATE expected=f' before.log
    - name: Integrated correction must pass the privilege matrix
      run: psql -X -v ON_ERROR_STOP=1 -f tests/book_privileges_regression.sql
  gate:
    name: Vellistry CI gate
    needs:
    - classify
    - governance
    - application
    - recovery
    - privileges
    if: ${{ always() }}
    runs-on: ubuntu-latest
    timeout-minutes: 5
    steps:
    - uses: actions/checkout@v4
      with:
        ref: ${{ github.event.pull_request.head.sha || github.sha }}
        persist-credentials: false
        fetch-depth: 0
    - uses: actions/setup-python@v5
      with:
        python-version: '3.12'
    - name: Install YAML parser for static compliance
      run: python -m pip install 'PyYAML>=6,<7'
    - name: Recompute base-anchored PR compliance evidence
      id: compliance
      run: python -I scripts/run_pr_compliance.py
    - name: Reject failed, cancelled, missing or skipped applicable checks
      env:
        CI_NEEDS: ${{ toJSON(needs) }}
      run: python scripts/ci_policy.py gate
~~~~~~

### `scripts/pr_compliance.py` @ `38b758b90d0ae5c67264f49403a1c35df02c391e`

~~~~~~markdown
#!/usr/bin/env python3
"""Static PR evidence checks. Never authenticates an LLM, user or approval."""
from __future__ import annotations
import argparse
from datetime import date
import fnmatch
import hashlib
import json
import os
from pathlib import Path
import re
import subprocess
import sys
import yaml
import agent_workflow as aw

MANIFEST = 'docs/agent-workflow/PR-COMPLIANCE.yaml'
REQUIRED = ('scripts/pr_compliance.py', 'scripts/run_pr_compliance.py',
            'tests/test_pr_compliance.py', '.github/workflows/ci.yml')
FORBIDDEN = {'hosted', 'production', 'private-manuscripts', 'paid-services', 'admin', 'merge'}
BOOTSTRAP_BASE = 'f371448538dafa92faebbef9bcda2a36c6ca1fa9'
SHA = re.compile(r'[a-f0-9]{40}')
URL = re.compile(r'https://github.com/Ben-001-sys/Vellistry/(?:issues|pull)/[0-9]+(?:#(?:issuecomment|pullrequestreview)-[0-9]+)?')


def require(value, message):
    if not value:
        raise ValueError(message)


def git(repo, *args):
    return subprocess.check_output(['git', '-C', str(repo), *args], stderr=subprocess.DEVNULL)


def sha(value):
    require(isinstance(value, str) and SHA.fullmatch(value), 'Expected full commit/blob SHA')
    return value


def ancestor(repo, old, new):
    sha(old); sha(new)
    return subprocess.run(['git', '-C', str(repo), 'merge-base', '--is-ancestor', old, new], capture_output=True).returncode == 0


def blob(repo, ref, path, missing=False):
    aw.safe_path(path); sha(ref)
    try:
        mode = git(repo, 'ls-tree', ref, '--', path).split(None, 1)[0]
        require(mode == b'100644' or mode == b'100755', 'Nonregular/missing evidence file: '+path)
        return git(repo, 'show', ref+':'+path)
    except (subprocess.CalledProcessError, IndexError):
        if missing:
            return None
        raise ValueError('Missing evidence file: '+path)


def mapping(raw):
    data = yaml.safe_load(raw)
    require(isinstance(data, dict), 'Malformed metadata mapping')
    return data


def front(raw):
    return aw.frontmatter_from_text(raw.decode('utf-8'))[0]


def changes(repo, base, head):
    sha(base); sha(head)
    return [aw.safe_path(x.decode('utf-8')) for x in git(repo, 'diff', '--no-renames', '--name-only', '-z', base, head, '--').split(b'\0') if x]


def inert(path):
    # No exemption for authority/instructions, fixtures, executable extensions or
    # hidden/config paths. Unknown docs require evidence rather than guessing.
    return path.startswith(('docs/reports/', 'docs/research/')) and path.endswith(('.md', '.txt', '.rst'))


def artifact(path, task_id):
    n = task_id[-4:]
    return (path == MANIFEST or path == f'docs/agent-workflow/tasks/{task_id}.yaml'
            or path == f'docs/agent-workflow/context-packs/VEL-CP-{n}.md'
            or path == f'docs/agent-workflow/execution-bundles/VEL-EB-{n}.md'
            or path.startswith(f'docs/agent-workflow/inputs/{task_id}/')
            or (path.startswith('docs/reports/') and path.endswith(('.md','.txt','.rst','.json','.csv'))))


def allowed(path, patterns):
    # Glob wildcards are whole-repository relative; ../, absolute and secret
    # segments are rejected independently. Explicit scope does not waive SQL.
    aw.safe_path(path)
    require(not any(p in {'secrets', 'credentials'} or p.startswith('.env') for p in path.split('/')), 'Forbidden secret path')
    return any(fnmatch.fnmatchcase(path, p) for p in patterns)


def owner_record(repo, base, task_id, kind, url, paths=None, executor=None):
    # Only already reviewed BASE records can confer substitution/migration or
    # accepted-state assertions; candidate records cannot approve themselves.
    name = f'docs/agent-workflow/authorizations/{task_id}.yaml'
    raw = blob(repo, base, name, missing=True)
    require(raw is not None, 'Owner checkpoint requires base-anchored record')
    record = mapping(raw)
    require(record.get('task_id') == task_id and record.get('status') == 'owner-verified'
            and record.get('approved_by') == 'project_owner' and record.get('kind') == kind
            and record.get('evidence') == url and URL.fullmatch(str(url)), 'Invalid owner checkpoint')
    if executor:
        require(record.get('executor') == executor, 'Owner reassignment mismatch')
    if paths:
        require(set(paths) <= set(record.get('paths', [])), 'Owner migration scope mismatch')
    return record



PERSISTENCE_STEPS = (
    {'name': 'Protected workspace persistence unit regressions',
     'run': 'pnpm --filter @vellistry/api exec tsx --test src/modules/workspace/workspace-contract.spec.ts'},
    {'name': 'Principal adapter binding regressions',
     'run': 'pnpm --filter @vellistry/api exec tsx --test src/modules/workspace/workspace-principal-adapter.spec.ts'},
    {'name': 'Disposable PostgreSQL17 protected workspace acceptance',
     'run': 'python tests/workspace/persistence/run_pg17.py --disposable --cases docs/contracts/VEL-IMP002-PERSISTENCE-CASES.json'},
)


def persistence_coverage_contract(workflow):
    """Exact mandatory commands in the existing draft-aware application job."""
    job = workflow['jobs']['application']
    require(job.get('if') == "${{ needs.classify.outputs.application == 'true' }}"
            and job.get('needs') == ['classify'] and 'env' not in job,
            'Persistence application execution guard changed')
    steps = job['steps']
    positions = []
    for expected in PERSISTENCE_STEPS:
        matches = [s for s in steps if s.get('name') == expected['name'] or s.get('run') == expected['run']]
        require(len(matches) == 1 and matches[0] == expected,
                'Exactly one unconditional persistence regression step required: '+expected['name'])
        positions.append(steps.index(matches[0]))
    python = [s for s in steps if str(s.get('uses', '')).startswith('actions/setup-python@')]
    require(python == [{'uses': 'actions/setup-python@v5', 'with': {'python-version': '3.12'}}],
            'Persistence Python runtime contract changed')
    def at(command):
        matches = [i for i, s in enumerate(steps) if s.get('run') == command]
        require(len(matches) == 1, 'Persistence prerequisite missing: '+command)
        return matches[0]
    security = [i for i,s in enumerate(steps) if s.get('name') == 'Pick free, temporary CI-only Supabase API/DB ports']
    require(len(security) == 1 and steps.index(python[0]) < positions[0]
            and at('pnpm install --frozen-lockfile') < positions[0] < positions[1] < at('pnpm build')
            < at('pnpm check') < positions[2] < security[0],
            'Persistence regression/prerequisite/security ordering changed')


def workflow_contract(repo, head):
    for path in REQUIRED:
        blob(repo, head, path)
    workflow = yaml.load(blob(repo, head, '.github/workflows/ci.yml'), Loader=yaml.BaseLoader)
    events = workflow.get('on')
    require(isinstance(events, dict) and set(events) == {'pull_request', 'push', 'workflow_dispatch'}, 'Unsafe/absent CI events')
    pr = events['pull_request']
    activities = {'opened', 'synchronize', 'reopened', 'ready_for_review', 'edited', 'converted_to_draft'}
    require(isinstance(pr, dict) and set(pr) == {'types'} and isinstance(pr['types'], list)
            and len(pr['types']) == len(activities) and set(pr['types']) == activities, 'Required unfiltered PR activities missing')
    require(events['push'] == {'branches': ['main']}, 'Required unfiltered main push verification missing')
    require(events['workflow_dispatch'] == {}, 'Explicit full verification entrypoint changed')
    require(workflow.get('permissions') == {'contents': 'read'}, 'CI privilege escalation')
    require('defaults' not in workflow and 'env' not in workflow, 'Global execution override')
    jobs = workflow['jobs']
    require(set(jobs) == {'classify', 'governance', 'application', 'recovery', 'privileges', 'gate'}, 'Required CI jobs changed')
    for name, job in jobs.items():
        require('permissions' not in job, 'Job permission override: '+name)
        require(not ({'continue-on-error', 'defaults', 'strategy'} & set(job)), 'Weakened job execution guard: '+name)
    for name in ('classify', 'governance', 'gate'):
        require('env' not in jobs[name], 'Job execution environment override: '+name)
    require('if' not in jobs['classify'] and 'needs' not in jobs['classify'], 'Classification must execute unconditionally')
    require('if' not in jobs['governance'] and jobs['governance'].get('needs') == ['classify'], 'Governance must execute after classification')
    for name in ('application', 'recovery', 'privileges'):
        expected = "${{ needs.classify.outputs." + name + " == 'true' }}"
        require(jobs[name].get('needs') == ['classify'] and jobs[name].get('if') == expected, 'Applicable security guard changed: '+name)

    def execution_step(step, command, environment, message):
        # Prevent a correct-looking command from being skipped, softened or run
        # in an alternate shell/directory/environment that masks its result.
        require(set(step) <= {'name', 'id', 'run', 'env'} and step.get('run') == command
                and step.get('env', {}) == environment, message)

    for name in ('governance', 'gate'):
        matching = [step for step in jobs[name]['steps'] if step.get('id') == 'compliance']
        require(len(matching) == 1, 'Missing unconditional compliance step')
        execution_step(matching[0], 'python -I scripts/run_pr_compliance.py', {}, 'Missing unconditional compliance step')
    persistence_coverage_contract(workflow)
    regression_command = 'python scripts/ci_governance.py'
    regression = [step for step in jobs['governance']['steps']
                  if step.get('name') == 'Run all current governance and negative contracts once'
                  or step.get('run') == regression_command]
    require(len(regression) == 1, 'Exactly one unconditional governance regression step required')
    execution_step(regression[0], regression_command, {}, 'Unconditional governance regression command changed')
    require(jobs['governance'].get('outputs', {}).get('compliance') == '${{ steps.compliance.outputs.status }}', 'Missing compliance job output')
    gate = jobs['gate']
    require(gate.get('name') == 'Vellistry CI gate' and gate.get('if') == '${{ always() }}', 'Stable gate missing')
    require(set(gate['needs']) == {'classify', 'governance', 'application', 'recovery', 'privileges'}, 'Incomplete gate dependencies')
    final = [step for step in gate['steps'] if step.get('name') == 'Reject failed, cancelled, missing or skipped applicable checks']
    require(len(final) == 1 and final[0] is gate['steps'][-1], 'Final gate invocation missing or displaced')
    execution_step(final[0], 'python scripts/ci_policy.py gate', {'CI_NEEDS': '${{ toJSON(needs) }}'}, 'Final gate command/result-input contract changed')
    # A zero-test/comment-only replacement must not satisfy test discovery.
    source = blob(repo, head, 'tests/test_pr_compliance.py').decode('utf-8')
    require('class ' in source and 'unittest.TestCase' in source and source.count('def test_') >= 15, 'Deleted/empty compliance regression contract')


def evaluate(repo, base, head, *, today=None, check_workflow=True):
    repo = Path(repo).resolve(); sha(base); sha(head)
    today = today or date.today()
    require(ancestor(repo, base, head), 'Evaluation base is not ancestor')
    paths = changes(repo, base, head)
    if check_workflow:
        workflow_contract(repo, head)
    if not paths or all(inert(p) for p in paths):
        return dict(status='pass', disposition='docs-exempt' if paths else 'unchanged-baseline', head=head, base=base,
                    trust='structure-only; owner review required')
    m = mapping(blob(repo, head, MANIFEST))
    require(type(m.get('version')) is int and m['version'] == 1, 'Missing/unsupported manifest version')
    tid = m.get('task_id', '')
    require(re.fullmatch(r'VEL-TASK-\d{4}', tid) is not None, 'Missing task ID')
    number = tid[-4:]
    task_path = f'docs/agent-workflow/tasks/{tid}.yaml'
    task = mapping(blob(repo, head, task_path))
    require(task.get('id') == tid and task.get('status') in {'in-progress', 'verification'}, 'Task not executed')
    require(blob(repo, base, task_path, missing=True) is None, 'Task reused from base; create authorized amendment')
    contract = task.get('compliance', {})
    require(contract.get('change_base') == base, 'Wrong task/base; repin explicit amendment')
    require(isinstance(contract.get('phase'),str) and re.fullmatch(r'[a-z][a-z0-9-]{0,64}',contract['phase']) and contract['phase'] == m.get('phase'), 'Phase/scope expansion without amendment')
    auth = contract.get('authorization', {})
    require(auth.get('status') == 'authorized' and URL.fullmatch(str(auth.get('url', ''))), 'Missing/expired/superseded owner authorization')
    require(auth.get('provenance') in {'direct-owner-dispatch-with-coordinator-relay', 'owner-linked-dispatch'}, 'Missing authorization provenance')
    require(date.fromisoformat(str(auth.get('expires_on'))) >= today, 'Expired authorization')
    require(set(contract.get('forbidden_actions', [])) == FORBIDDEN and not m.get('performed_forbidden_actions'), 'Non-overridable action exclusions')
    allow = contract.get('allow_paths')
    require(isinstance(allow, list) and allow and all(isinstance(p, str) and p for p in allow), 'Missing path scope')
    for pattern in allow:
        aw.safe_path(pattern)
    for path in paths:
        require(allowed(path, allow), 'Disallowed changed path: '+path)
        # Reject symlinks even for optional data/new paths (deletions have no blob).
        blob(repo, head, path, missing=True)
    pack_path = f'docs/agent-workflow/context-packs/VEL-CP-{number}.md'
    pack_raw = blob(repo, head, pack_path); pack = front(pack_raw)
    pack_commit = sha(m.get('pack_commit'))
    source = sha(m.get('source_commit'))
    require(ancestor(repo, base, pack['base_commit']) and ancestor(repo, pack['base_commit'], pack_commit)
            and pack_commit != source and ancestor(repo, pack_commit, source) and ancestor(repo, source, head), 'Pack/source ancestry invalid')
    require(blob(repo, pack_commit, pack_path) == pack_raw, 'Mutated immutable pack')
    pinned_task = mapping(blob(repo, pack['base_commit'], task_path))
    require({k:v for k,v in task.items() if k not in {'status','updated_at'}} ==
            {k:v for k,v in pinned_task.items() if k not in {'status','updated_at'}}, 'Material task mutation after pin')
    # Existing trusted validator reconstructs all task/source blobs and whole body.
    oldroot = aw.ROOT
    try:
        aw.ROOT = repo
        aw.check_pack(repo/pack_path, {tid:task})
        eb_path = f'docs/agent-workflow/execution-bundles/VEL-EB-{number}.md'
        eb_raw = blob(repo, head, eb_path); eb = front(eb_raw)
        aw.check_bundle(repo/eb_path, {tid:task}, {pack['id']:pack})
    finally:
        aw.ROOT = oldroot
    require(eb.get('implementation_source_commit') == source and m.get('bundle_id') == eb.get('id'), 'Missing/wrong code-head bundle evidence')
    execution = eb.get('execution', {})
    require(execution.get('status') == 'completed' and execution.get('executor') == m.get('executor') == contract.get('executor')
            and eb.get('agent', {}).get('name') == m.get('executor'), 'Missing/contradictory actual executor')
    require(isinstance(execution.get('model'), str) and execution['model'].strip(), 'Missing model claim')
    if m['executor'] != 'Codex':
        owner_record(repo, base, tid, 'executor-exception', m.get('executor_exception'), executor=m['executor'])
    require(m.get('owner_disposition') == 'pending', 'CI cannot grant owner acceptance; external disposition required')
    require(eb.get('status') == 'proposed-for-review' and eb.get('review', {}).get('status') == 'pending', 'Forged completion/owner approval; keep pending for owner review')
    tests = execution.get('tests')
    require(isinstance(tests, list) and tests, 'Missing executed test evidence')
    for test in tests:
        require(test.get('status') == 'PASS' and type(test.get('exit_code')) is int and test['exit_code'] == 0
                and isinstance(test.get('command'), str) and test['command'].strip(), 'Required execution NOT_RUN/BLOCKED/failed')
        evidence = blob(repo, head, test.get('evidence', ''))
        require(evidence.strip(), 'Empty test evidence')
    # Source commit binds every non-report/artifact changed blob to actual HEAD.
    operative = [p for p in paths if not artifact(p, tid)]
    for path in operative:
        require(blob(repo, source, path, missing=True) == blob(repo, head, path, missing=True), 'Head changed after source evidence: '+path)
    # No operative change may predate committed handoff. Compare entire range,
    # including add/delete/revert histories, not just final net diff.
    commits = git(repo, 'rev-list', '--reverse', base+'..'+head).decode().splitlines()
    require(commits and all(len(git(repo,'rev-list','--parents','-n','1',c).split()) == 2 for c in commits), 'Merge commits require separately rebased bounded task')
    records = m.get('commits')
    require(isinstance(records, list), 'Missing per-commit provenance')
    declared = {r.get('commit'):r for r in records if isinstance(r,dict)}
    require(len(declared) == len(records) and set(declared) == set(commits[:-1]), 'Undeclared/duplicate inherited commit origins')
    current = m.get('current_head')
    require(isinstance(current,dict) and current.get('executor') == m['executor'] and current.get('origin') == 'original', 'Missing current-head provenance')
    declared[head] = current
    for commit in commits:
        row = declared[commit]
        require(row.get('executor') and row.get('origin') in {'original','adopted'}, 'Malformed commit provenance')
        message = git(repo, 'show', '-s', '--format=%B', commit).decode('utf-8')
        picked = re.findall(r'\(cherry picked from commit ([0-9a-f]{40})\)', message)
        if row['origin'] == 'adopted':
            require(row.get('original_executor') and URL.fullmatch(str(row.get('source_url','')))
                    and SHA.fullmatch(str(row.get('original_commit',''))), 'Missing adopted source origin')
            require(not picked or picked == [row['original_commit']], 'Cherry-pick provenance mismatch')
            require(row['executor'] == m['executor'], 'Adoption executor mismatch')
            original = sha(row['original_commit'])
            require(subprocess.run(['git','-C',str(repo),'cat-file','-e',original+'^{commit}'],capture_output=True).returncode == 0, 'Adopted original commit unavailable')
            def patch_id(ref):
                patch = git(repo,'show','--pretty=format:','--binary',ref)
                return subprocess.check_output(['git','patch-id','--stable'],input=patch).split()[:1]
            require(patch_id(original) == patch_id(commit), 'Adopted original patch mismatch')
        else:
            require(row['executor'] == m['executor'] and not picked, 'Role substitution / undeclared cherry-pick')
        changed = [p.decode('utf-8') for p in git(repo,'diff-tree','--no-commit-id','--name-only','--no-renames','-r','-z',commit).split(b'\0') if p and not artifact(p.decode('utf-8'),tid)]
        if changed:
            require(commit != pack_commit and ancestor(repo, pack_commit, commit), 'Implementation preceded immutable pack commit')
    sql = [p for p in paths if p.startswith('supabase/migrations/') or p.endswith('.sql')]
    if sql:
        owner_record(repo, base, tid, 'migration-path-approval', m.get('migration_approval'), paths=sql)
    return dict(status='pass', disposition='evidence-consistent', head=head, base=base, task_id=tid,
                source_commit=source, authorization=auth['url'], owner_disposition='pending',
                changed_paths=paths, trust='declared identity and linked authorization; owner verification required')


def event_base(repo, event_name, event, head):
    sha(head)
    if event_name == 'pull_request':
        pr = event.get('pull_request', {})
        require(pr.get('head', {}).get('sha') == head and type(pr.get('draft')) is bool
                and event.get('action') in {'opened','synchronize','reopened','ready_for_review','edited','converted_to_draft'}, 'Malformed/exact-head PR event')
        require(not (event['action']=='ready_for_review' and pr['draft']) and not (event['action']=='converted_to_draft' and not pr['draft']), 'Contradictory draft event')
        base = sha(pr.get('base', {}).get('sha'))
        return git(repo,'merge-base',base,head).decode().strip(), base
    require(event_name in {'push','workflow_dispatch'}, 'Unsupported compliance event')
    require(os.environ.get('GITHUB_SHA',head)==head, 'Wrong event head')
    if event_name == 'push':
        require(event.get('ref') == 'refs/heads/main', 'Only main push')
        base = sha(event.get('before'))
    else:
        base = git(repo,'rev-parse','refs/remotes/origin/main').decode().strip()
    require(base != '0'*40, 'Missing trusted baseline')
    return git(repo,'merge-base',base,head).decode().strip(), base


def evaluate_event(repo, event_name, event, head, *, check_workflow=True):
    base, trust = event_base(repo,event_name,event,head)
    implementation = head
    if event_name == 'push':
        parents = git(repo,'rev-list','--parents','-n','1',head).decode().split()
        if len(parents) > 2:
            require(len(parents)==3 and parents[1]==base, 'Unreviewed multi-parent/main integration base')
            implementation = parents[2]
            require(not changes(repo,implementation,head), 'Main merge changed implementation tree; new evidence required')
    result = evaluate(repo,base,implementation,check_workflow=check_workflow)
    result.update(head=head, implementation_head=implementation, verifier_base=trust)
    return result


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--repo', type=Path, default=Path.cwd())
    args = parser.parse_args()
    head = git(args.repo,'rev-parse','HEAD').decode().strip()
    event = json.loads(Path(os.environ['GITHUB_EVENT_PATH']).read_text(encoding='utf-8'))
    result = evaluate_event(args.repo, os.environ['GITHUB_EVENT_NAME'], event, head)
    print(json.dumps(result,sort_keys=True))
    if os.environ.get('GITHUB_OUTPUT'):
        with open(os.environ['GITHUB_OUTPUT'],'a',encoding='utf-8') as f:
            f.write('status=pass\nhead='+head+'\n')
    return 0


if __name__ == '__main__':
    try:
        raise SystemExit(main())
    except (ValueError,KeyError,TypeError,AttributeError,yaml.YAMLError) as exc:
        print('BLOCKED: PR compliance: '+str(exc),file=sys.stderr)
        raise SystemExit(1)
~~~~~~

### `scripts/ci_policy.py` @ `2a70169a607819b64d70d2a37871b09fe76709f8`

~~~~~~markdown
#!/usr/bin/env python3
"""Conservative CI routing and fail-closed final gate. No external API or secrets."""
from __future__ import annotations
import argparse
import json
import os
from pathlib import Path
import re
import subprocess

ROOT = Path(__file__).resolve().parents[1]
FLAGS = ('application', 'security', 'recovery', 'privileges')
GOVERNANCE = {
    'agent_workflow.py', 'handoff_recovery.py', 'export_level_b_handoff.py',
    'export_stage4_independent_packet.py', 'spec_traceability.py',
    'check_implementation_readiness.py', 'check_knowledge_metadata.py',
    'r01_manifest.py', 'r01_mapping_gate.py', 'r01_mapping_proposal.py', 'r01_review_packet.py',
}
GOV_TESTS = {
    'test_agent_workflow.py', 'test_handoff_recovery.py', 'test_level_b_export.py',
    'test_stage4_independent_packet.py', 'test_spec_traceability.py',
    'test_implementation_readiness.py', 'test_knowledge_metadata.py',
    'test_r01_manifest.py', 'test_r01_mapping_gate.py', 'test_r01_mapping_proposal.py',
    'test_r01_review_packet.py', 'test_research_design_gate.py', 'test_stage4_chapter_contract.py',
    'test_pr_compliance.py',
}
PRIVILEGE_TEST = 'tests/book_privileges_regression.sql'
PREFLIGHT_TEST = 'tests/hosted_supabase_preflight.test.mjs'

def classify(paths: list[str], *, full: bool = False, privilege_present: bool = False) -> dict[str, str]:
    app = security = recovery = full
    for p in paths:
        # Git paths are data, never interpolated into a shell or expression.
        if not p or p.startswith('/') or '..' in p.split('/'):
            raise ValueError('Unsafe diff path')
        if p.startswith(('.github/', 'apps/api/', 'supabase/')) or p in (
            'package.json', 'pnpm-lock.yaml', 'pnpm-workspace.yaml',
        ) or p.startswith('.env') or p in (PRIVILEGE_TEST, PREFLIGHT_TEST) or p.startswith('scripts/ci_') or p.startswith('tests/test_ci_'):
            app = security = recovery = True
        elif p.startswith('apps/web/'):
            app = True
            # Shared helpers/pages can affect identity without an auth-like name.
            # Only inert presentation assets may omit live integration.
            if not p.endswith(('.css', '.png', '.jpg', '.jpeg', '.webp', '.ico', '.svg')):
                security = recovery = True
        elif p.startswith('scripts/') and p.split('/')[-1] in GOVERNANCE:
            pass
        elif p.startswith('tests/') and p.split('/')[-1] in GOV_TESTS:
            pass
        elif p.startswith('docs/agent-workflow/') and p.endswith(('.yaml', '.yml')):
            pass  # Always-required governance validates these.
        elif p.startswith('docs/reports/') and p.endswith(('.json', '.csv')):
            pass  # Inert review evidence, never runtime configuration.
        elif p.startswith('docs/') and p.endswith(('.md', '.txt', '.rst')):
            if 'ADR-0006-' in p:
                app = security = recovery = True
        elif '/' not in p and p.endswith(('.md', '.txt')):
            pass
        else:
            # New executable/config/test paths cannot silently opt out.
            app = security = recovery = True
    return dict(zip(FLAGS, map(lambda b: str(b).lower(), (app or security, security, recovery, security and privilege_present))))

def git(*args: str, cwd: Path = ROOT) -> bytes:
    return subprocess.check_output(['git', *args], cwd=cwd, stderr=subprocess.DEVNULL)

def changed_paths(base: str, head: str, *, pr: bool, cwd: Path = ROOT) -> list[str]:
    for value in (base, head):
        if not re.fullmatch(r'[0-9a-fA-F]{40}', value):
            raise ValueError('Expected full Git SHA')
    if pr:
        base = git('merge-base', base, head, cwd=cwd).decode().strip()
    raw = git('diff', '--no-renames', '--name-only', '-z', base, head, '--', cwd=cwd)
    return [p.decode('utf-8', errors='strict') for p in raw.split(b'\0') if p]

def event_mode(event_name: str, event: dict) -> str:
    if event_name in ('push', 'workflow_dispatch'):
        return 'full'
    if event_name != 'pull_request':
        raise ValueError('Unsupported event')
    pr = event.get('pull_request', {})
    draft = pr.get('draft')
    action = event.get('action')
    activities = {'opened', 'synchronize', 'reopened', 'ready_for_review', 'edited', 'converted_to_draft'}
    if type(draft) is not bool or action not in activities:
        raise ValueError('Missing or malformed PR draft/activity metadata')
    if (action == 'ready_for_review' and draft) or (action == 'converted_to_draft' and not draft):
        raise ValueError('Contradictory PR draft/activity metadata')
    return 'draft' if draft else 'ready'

def plan_event(event_name: str, event: dict, head: str, *, cwd: Path = ROOT) -> dict[str, str]:
    expected = event.get('pull_request', {}).get('head', {}).get('sha') if event_name == 'pull_request' else os.environ.get('GITHUB_SHA', head)
    if expected != head:
        raise ValueError('Checkout is not exact event head')
    mode = event_mode(event_name, event)
    full = mode == 'full'
    if event_name not in ('pull_request', 'push', 'workflow_dispatch'):
        raise ValueError('Unsupported event')
    if event_name == 'push' and event.get('ref') != 'refs/heads/main':
        raise ValueError('Only main push baseline is supported')
    base = event.get('pull_request', {}).get('base', {}).get('sha') if event_name == 'pull_request' else event.get('before')
    paths = []
    # Dispatch has no before/base field. Compare required-source presence with
    # main so a manual green check cannot bypass a failed PR deletion guard.
    if event_name == 'workflow_dispatch':
        base = git('rev-parse', 'refs/remotes/origin/main', cwd=cwd).decode().strip()
    # Main/manual select full checks; manual needs no path diff.
    if event_name != 'workflow_dispatch' and base and base != '0' * 40:
        paths = changed_paths(base, head, pr=event_name == 'pull_request', cwd=cwd)
    elif event_name == 'pull_request':
        raise ValueError('PR base missing')
    for test in (PRIVILEGE_TEST, PREFLIGHT_TEST):
        if base and base != '0' * 40:
            existed = subprocess.run(['git','cat-file','-e',f'{base}:{test}'],cwd=cwd,capture_output=True).returncode == 0
            if existed and not (cwd / test).is_file():
                raise ValueError('Existing required integration regression was removed')
    plan = classify(paths, full=full, privilege_present=(cwd / PRIVILEGE_TEST).is_file())
    if mode == 'draft':
        # Preserve all diff/deletion validation; defer only execution, never merge eligibility.
        plan = {flag: 'false' for flag in FLAGS}
    return {**plan, 'mode': mode}

def check_gate(needs: dict, *, expected_plan: dict) -> str:
    required = {'classify','governance','application','recovery','privileges'}
    if set(needs) != required:
        raise ValueError('Incomplete required job results')
    for job in ('classify', 'governance'):
        if needs[job].get('result') != 'success':
            raise ValueError(f'Required {job} did not succeed')
    if needs['governance'].get('outputs', {}).get('compliance') != 'pass':
        raise ValueError('Missing or failed required PR compliance evidence')
    outputs = needs['classify'].get('outputs', {})
    if expected_plan.get('mode') not in ('draft', 'ready', 'full'):
        raise ValueError('Invalid expected event mode')
    if set(outputs) != set(expected_plan) or outputs != expected_plan:
        raise ValueError('Classifier plan differs from independently verified event/head')
    if any(outputs.get(f) not in ('true','false') for f in FLAGS):
        raise ValueError('Missing or malformed routing outputs')
    if outputs['security'] == 'true' and outputs['application'] != 'true':
        raise ValueError('Security cannot bypass application integration')
    if outputs['security'] == 'true' and outputs['recovery'] != 'true':
        raise ValueError('Security cannot bypass recovery integration')
    if outputs['privileges'] == 'true' and outputs['security'] != 'true':
        raise ValueError('Privilege integration cannot bypass security')
    for job in ('application','recovery','privileges'):
        result = needs[job].get('result')
        allowed = {'success'} if outputs[job] == 'true' else {'success','skipped'}
        if result not in allowed:
            raise ValueError(f'Applicable or failed {job}: {result}')
    return 'draft-advisory' if outputs['mode'] == 'draft' else 'merge-eligible'

def main() -> int:
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('mode',choices=('classify','gate'))
    args=parser.parse_args()
    head=git('rev-parse','HEAD').decode().strip()
    event=json.loads(Path(os.environ['GITHUB_EVENT_PATH']).read_text(encoding='utf-8'))
    outputs=plan_event(os.environ['GITHUB_EVENT_NAME'],event,head)
    if args.mode == 'gate':
        result=check_gate(json.loads(os.environ['CI_NEEDS']), expected_plan=outputs)
        if result == 'draft-advisory':
            message='ADVISORY PASS: draft governance succeeded. BLOCKED: merge verification requires ready-for-review or explicit full verification.'
            print(message)
            if os.environ.get('GITHUB_STEP_SUMMARY'):
                with open(os.environ['GITHUB_STEP_SUMMARY'],'a',encoding='utf-8') as stream:
                    stream.write('## Draft advisory only; merge gate BLOCKED\n'+message+'\n')
            # A skipped check can count as success for branch protection. Complete
            # the stable merge gate with failure instead of publishing a false green.
            return 1
        print('PASS: merge-eligible applicable required CI jobs succeeded at '+head)
    else:
        print(json.dumps(outputs,sort_keys=True))
        if outputs['security']=='true' and outputs['privileges']=='false':
            print('NOTICE: proposed PR68 privilege regression is not on this checkout; no privilege-test PASS claimed.')
        with open(os.environ['GITHUB_OUTPUT'],'a',encoding='utf-8') as stream:
            for key,value in outputs.items(): stream.write(f'{key}={value}\n')
    return 0

if __name__ == '__main__':
    raise SystemExit(main())
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0066/OWNER-AUTHORIZATION.json` @ `c4b16c6470e122719d7e54fa285d92325eba82d8`

~~~~~~markdown
{
  "id": 6428746261,
  "html_url": "https://github.com/Ben-001-sys/Vellistry/issues/108#issuecomment-6428746261",
  "created_at": "2026-10-26T22:23:04Z",
  "updated_at": "2026-10-26T22:23:04Z",
  "body": "### Task0065 owner direct-chat authorization \u2014 source record (26 October 2026)\n\nCodex records the owner's current direct-chat instruction, not independent identity attestation or agent approval: \u201cI approve preparation and implementation of a narrowly scoped Task0065 to integrate Vellistry's existing 55 MFA tests into mandatory GitHub Actions CI.\u201d Baseline a902fdb36bb51e17a5c567787c6886b171ca50fe reverified; Task0065 unused.\n\nAuthorized: new unique Task/committed validated immutable ContextPack before operative edits; run existing `pnpm test:auth-mfa` in the mandatory application job of `.github/workflows/ci.yml`; verify relevant Auth-source classification and final-gate failure propagation; preserve existing tests/security/PostgreSQL recovery/governance/workflow semantics; offline tests, distinct source review, exact-head CI and PR for separate owner merge. Narrow supporting static contract/regression paths are `scripts/pr_compliance.py`, `tests/test_ci_policy.py`, `tests/test_pr_compliance.py`, with current-state/Task/CP/EB/input/report/evidence/per-PR manifest records. No application, dependency, backend-policy, SQL, Supabase setting or credential changes.\n\nNo hosted Auth operation, MFA enrollment, deployment, automatic merge, production-gate promotion or remediation-delegation reactivation. Issue108 stays OPEN; R01\u2013R08 NOT_RUN; N12/historical independent spawn EPERM BLOCKED; PRINCIPAL target assurance/SESSION and other unresolved security gates unchanged. Original Task0064 and all immutable/historical evidence preserved."
}
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0066/AMENDMENT.md` @ `1cdb49c202b39afb2376627ac2b6104876f55481`

~~~~~~markdown
# Necessary Task0065 schema reconciliation, no scope expansion

FACT: original direct owner authorization is for existing55MFA tests in mandatory CI only, recorded at https://github.com/Ben-001-sys/Vellistry/issues/108#issuecomment-6428746261 . Original Task0065/CP0065 were committed before implementation and remain preserved on codex/vel-mfa-ci-coverage, history86770b23fd341422f9df5394c49b601a3164d8d6. Actual tests46policy/62compliance/55MFA passed at4549a72025ab367b623072de9bceded957ee0463. Original trusted-base evaluator subsequently rejected the invented provenance category direct-owner-dispatch-recorded-by-Codex. Valid categories are owner-linked-dispatch or direct-owner-dispatch-with-coordinator-relay. The allowed category does not authenticate a human writer.

CORRECTION: unique Task0066 is the necessary immutable governance reconciliation of that same authorized Task0065 implementation. No new feature, CI behavior, application, security authority or merge scope. Do not rewrite originalCP0065 or earlier evidence. Use owner-linked-dispatch with the same attributed authorization record and no human-approval fabrication. Commit/validateCP0066 before selective source adoption. Original Task65 lifecycle may become blocked as an historical structural failure, with every material field/CP/EB/input retained. Retain old branch so all original commit/blob pins are reachable in clean fetch-depth0 CI. Preserve manifests/digests and trusted-base rejection.

ADOPTION: copy only original tested workflow, pr_compliance and two regression test files after the new pack, keeping exact Git blobs. Reuse authentic original tests only for byte-identical implementation/test/runtime conditions; validate new Task/CP/EB/provenance and actual final-head governance/CI afresh. Original EB65 is historical, never current authority or a passing trusted-base claim. New manifest selectsTask66 and binds the adopted source. Obtain distinct completed reconciled-head review and Draft/Ready CI, publish one PR for separate owner merge.

BOUNDARIES: one existing automatic workflow/sixjobs/read-only token/draft routing/security/32PG/recovery/final gate unchanged except mandatory55MFA step. No application/backend/SQL/dependency/credentials/settings/hosted Auth/enrollment/JWT/JWKS/private/paid/deploy/merge. R01-R08 NOT_RUN, N12/historical independent EPERM BLOCKED, PRINCIPAL/SESSION and unresolved gates unchanged. Issue108OPEN; expired delegation remains closed.
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0066/TASK0065-HISTORY.json` @ `7f8dfa50c797bb1c36a1b42078e2c12b2b19740d`

~~~~~~markdown
{
  "original_history_head": "86770b23fd341422f9df5394c49b601a3164d8d6",
  "original_branch": "codex/vel-mfa-ci-coverage",
  "original_source": "4549a72025ab367b623072de9bceded957ee0463",
  "original_pack_commit": "ebc3fa036dd1fefc79ccf3fa495a523bc9e3c2e3",
  "base": "a902fdb36bb51e17a5c567787c6886b171ca50fe",
  "records": [
    {
      "path": "docs/agent-workflow/tasks/VEL-TASK-0065.yaml",
      "git_blob": "055a2e1300679bd6490dd2cdbf33996eed02c9c0",
      "sha256": "36510d2f3a7514a277a45262f4b2b1b6b96036a5dd8fd49daa671e5b3b85dc9c"
    },
    {
      "path": "docs/agent-workflow/context-packs/VEL-CP-0065.md",
      "git_blob": "b3e1882cac799f384a4075c7768556271832eb1f",
      "sha256": "6e1b818893bcc057f3a5274d55469a0f5fef08f9d782935535a30009619e42d9"
    },
    {
      "path": "docs/agent-workflow/execution-bundles/VEL-EB-0065.md",
      "git_blob": "8974c6b80b9fe41d7adc9a4aa1b80ecaafb64deb",
      "sha256": "d2a49ea5a4832e9e88a941c81593093a51efca9a77a7aa0b20e5955f2080a8ff"
    },
    {
      "path": "docs/agent-workflow/inputs/VEL-TASK-0065/OWNER-AUTHORIZATION.json",
      "git_blob": "c4b16c6470e122719d7e54fa285d92325eba82d8",
      "sha256": "72307f914d2a1b6f28fb473267e200cef42d35598e81e4c419ef73e8c3144e47"
    },
    {
      "path": "docs/agent-workflow/inputs/VEL-TASK-0065/SCOPE.md",
      "git_blob": "c6277d8a7597cadd64838224940aeed1e6edf231",
      "sha256": "1ac519b30b4e083e54e43866f47e49f910d03d7199e0e07ef85d430bf8b375a6"
    }
  ]
}
~~~~~~

## Execution reporting
Return an ExecutionBundle with FACT / INTERPRETATION / PROPOSAL sections,
tests actually performed, changes, evidence gaps, and pending owner approval.
