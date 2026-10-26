---
id: VEL-CP-0063
title: 'Context for VEL-TASK-0063: Prepare gated owner-only synthetic Auth evidence
  protocol'
type: context-pack
status: prepared
created_at: '2026-10-26'
version: 0.1.0
task_id: VEL-TASK-0063
base_commit: ee43879c7a2c5ee7cf975949f531b81c7a2ce027
task_blob_sha: d24fcbc091d1327eea66cdaf3c0c77b778e1686e
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
  git_blob_sha: f92ae501f472ddf753691e35ebf4165b5d8e9ab5
  source_status: active
- path: docs/agent-workflow/PR-COMPLIANCE.md
  role: governing-source
  git_blob_sha: 5f4845623aef3abb15fba7fbe8e78474902cca00
  source_status: unrecorded
- path: docs/reports/VEL-PRINCIPAL-READINESS-0062.md
  role: governing-source
  git_blob_sha: 83c522e7c44326e2ed72185b98f8d0627f4b4fb8
  source_status: proposed-for-review
- path: docs/agent-workflow/inputs/VEL-TASK-0059/SDK-BOUNDARY-SOURCES.md
  role: governing-source
  git_blob_sha: 24cfde996e425813fcbd6e311fd47007bc0b56e0
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0062/FACTOR-SOURCE.md
  role: governing-source
  git_blob_sha: ef35bd75d4b782c489d90c1430bb3a9e759efa04
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0063/OWNER-AUTHORIZATION.json
  role: governing-source
  git_blob_sha: 7ea2cbc3550f8eb8a6e6094cb0bcf82e7abdf444
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0063/FIXTURE-STATUS.json
  role: governing-source
  git_blob_sha: 8d103b65708c4527b2d9751e9e5582cd9833480a
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0063/SDK-PROTOCOL-SOURCE.md
  role: governing-source
  git_blob_sha: 113bfd0d540dbe89aebe8cc01f80ba75ac1d1354
  source_status: unrecorded
source_gaps:
- id: FIXTURES-UNKNOWN
  limitation: Owner confirms all three fixture prerequisites UNKNOWN26October2026;
    no fixture existence/control/session evidence. Hosted probe blocked.
- id: EXECUTION-NOT-REVIEWED
  limitation: Exact protocol not yet reviewed; no executable runner or live operation
    authorized by this documentation Task.
prepared_by: agent_workflow.py
---

# VEL-CP-0063 — Prepare gated owner-only synthetic Auth evidence protocol

## Objective
Prepare exact owner-only probe protocol, endpoints/redaction/cleanup/evidence schema while unknown fixtures and pre-execution review block hosted work

## Scope
**In:** CURRENT-STATE.md; docs/agent-workflow/tasks/VEL-TASK-0063.yaml; docs/agent-workflow/context-packs/VEL-CP-0063.md; docs/agent-workflow/execution-bundles/VEL-EB-0063.md; docs/agent-workflow/inputs/VEL-TASK-0063/*; docs/reports/VEL-OWNER-PRINCIPAL-PROBE-PROTOCOL-0063.md; docs/reports/evidence/VEL-TASK-0063/*; docs/agent-workflow/PR-COMPLIANCE.yaml
**Out:** All app/Auth/dependency/CI/SQL/RLS/grant/route implementation; Hosted/credential/real Auth/JWT/signing/JWKS/users/private/paid/deployment/settings operations; Production decision resolution or automatic PR merge

## Evidence and authority constraints
The text below is a readable rendering of pinned Git blobs; exact raw bytes remain recoverable from the recorded commit/blob SHAs. Recorded source statuses remain in force: draft research is not accepted requirements. Original unarchived uploads are not independently verified merely by being mentioned.

**Known source gaps:**
- FIXTURES-UNKNOWN: Owner confirms all three fixture prerequisites UNKNOWN26October2026; no fixture existence/control/session evidence. Hosted probe blocked.
- EXECUTION-NOT-REVIEWED: Exact protocol not yet reviewed; no executable runner or live operation authorized by this documentation Task.

## Permissions and acceptance
**Allowed:** Read pinned repository/source evidence, prepare scoped documents after committed validated immutable pack, Run offline document/source assertions and validators; inherit mandatory actual CI, no live operations, Publish Draft, distinct trusted source review, promote Ready/verify exact-head CI; no merge
**Owner approval required:** Any real principal/Auth/hosted/SDK/JWT/security implementation or production choice; Any app/CI/SQL/dependency/scope change or new PR merge
**Acceptance criteria:**
- Verify main17adbf9 and uniqueTask63, preserve all historical sources
- Pin owner conditional permission and UNKNOWN fixture response before operative preparation
- Only owner acts after fixture and exact protocol/runner review; no agent credentials/Auth/JWT/JWKS/hosted operations
- Allow fixed HTTPS origin and exact endpoints/methods only, deny redirects/arbitrary origins/privileged/list/create/enroll/recovery/SQL
- Same captured token user/claims per case; no automatic token refresh/legacy experiments; label SDK path/factor completeness UNKNOWN unless proven
- No raw JWT/password/user/session/factor IDs/API keys/secrets/key material in outputs/repo/logs; closed sanitized scalar schema and manual owner audit
- Define no-creation/reenrollment/session-change boundaries, cleanup/stop gates, no false memory erasure claims or unapproved logout
- All three fixture preconditions UNKNOWN => hosted BLOCKED; findings NOT_OBSERVED, R01-R08 NOT_RUN, N12/EPERM BLOCKED
- Actual offline source/scope/schema/document checks, distinct final source review and applicable CI; no automatic merge or production approval

## Deliverables
- Unique Task and committed validated immutable CP before operative prep
- Exact owner-only target/endpoint/operation/case protocol with fixture and review gates
- Credential/token isolation, allowlist-only sanitization/schema, resource bounds, stop and cleanup rules
- Explicit UNKNOWN/BLOCKED/no hosted findings and no implementation/gate approval
- EB/provenance/actual offline docs/source validators, distinct source review, applicable CI and reviewable PR, no merge

## Pinned source snapshots
Git commit: `ee43879c7a2c5ee7cf975949f531b81c7a2ce027`. Read source statuses independently from task intent.

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

### `CURRENT-STATE.md` @ `f92ae501f472ddf753691e35ebf4165b5d8e9ab5`

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

## Conditional PRINCIPAL readiness — 2026-10-25

FACT: PR123 merged88d8dbcb9e6ec21baf60deebb7004f7e2194b276; reviewed tree equals
merge; [post-main40222904201](https://github.com/Ben-001-sys/Vellistry/actions/runs/40222904201) SUCCESS. Task59-61 history preserved.
Owner6404172728 conditionally approves MVP PRINCIPAL DESIGN, not target trust
completion or implementation. Task0062/CP0062 [readiness matrix](docs/reports/VEL-PRINCIPAL-READINESS-0062.md)
separates owner-observed Dashboard settings from unverified claims/key paths.
Conditional aal1/aal2 needs authoritative complete factor state; AAL alone is
insufficient. Previous HS256 cannot silently become current-key assurance.
PRINCIPAL target/implementation gate and other five production decisions pending.
No app/Auth/SQL/CI/dependency/hosted change; N12 and independent EPERM BLOCKED;
R01-R08 NOT_RUN. Docs review/CI/owner merge pending. Issue108 OPEN; expired
remediation delegation closed; broad gates unchanged.

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

### `docs/reports/VEL-PRINCIPAL-READINESS-0062.md` @ `83c522e7c44326e2ed72185b98f8d0627f4b4fb8`

~~~~~~markdown
---
id: VEL-PRINCIPAL-READINESS-0062
title: Conditional MVP PRINCIPAL implementation readiness
type: implementation-report
status: proposed-for-review
created_at: 2026-10-25
owner: project_owner
version: 0.1.0
---

## Scope, authority and source
FACT: base main88d8dbcb9e6ec21baf60deebb7004f7e2194b276, next unused Task0062. Unique Task/input8857c1f and validated immutableCP0062 commit4673ec992a1bc424db3438259868d090bd8c0509 precede this operative preparation. Existing [Task0061 handoff](VEL-REAL-AUTH-HANDOFF-0061.md), [frozen SDK evidence](../agent-workflow/inputs/VEL-TASK-0059/SDK-BOUNDARY-SOURCES.md), and [factor-source excerpt](../agent-workflow/inputs/VEL-TASK-0062/FACTOR-SOURCE.md) are read-only inputs.

[Owner authorization6404172728](https://github.com/Ben-001-sys/Vellistry/issues/108#issuecomment-6404172728) is preserved exactly in [source snapshot](../agent-workflow/inputs/VEL-TASK-0062/OWNER-AUTHORIZATION.json), including its coordinator-relay provenance. It conditionally approves MVP DESIGN, not production trust completion, implementation or hosted execution. Dashboard observations are owner-reported in that record; original screenshots are not supplied here and were not independently inspected. Record dates are25October2026; no undocumented observation timestamp is invented. Public docs/frozen SDK explain capabilities only, not actual target behavior. No application code or effective standing controls changed.

## Decision matrix (atomic entries, with explicit evidence class)
M01 — APPROVED DESIGN: PRINCIPAL_DESIGN_APPROVED_CONDITIONAL. Fixed owner-configured vellistry-dev endpoint https://lflkcrnriitrbclangyr.supabase.co; no caller/token-derived endpoint/issuer/JWKS/role overrides. Owner authorization is design authority, not deployed-runtime verification.

M02 — VERIFIED TARGET (OWNER-OBSERVED SETTINGS ONLY): owner confirms project URL/metadata and reports Dashboard anonymous sign-ins OFF, TOTP ON, SMS OFF, low-AAL15-minute restriction ON, current ECC P-256 key, previous HS256 key and no custom Auth Hooks displayed. Source is owner observation relayed6404172728, not this agent's hosted inspection. This category verifies the reported setting evidence at its stated scope, never actual issued token, user enrollment or effective enforcement. No key material or user/session records accessed.

M03 — APPROVED DESIGN: reject anonymous/service-role author identities; optional TOTP enrollment, no SMS requirement; aal1 allowed for authors with no verified enrolled factor, aal2 required for enrolled authors before protected workspace access.15-minute restriction stays ON pending separate behavioral acceptance. Separately scope sensitive actions needing aal2; no new MFA enrollment/UI/route work authorized.

M04 — INFERRED/UNCONFIRMED: expected issuer candidate https://lflkcrnriitrbclangyr.supabase.co/auth/v1 and author audience/role candidate authenticated. Owner conditionally approves their intended design, but exact effective issuer/audience/role/claim issuance still needs trustworthy target confirmation before production enforcement. Fixed endpoint approval does not establish issuer equality; no custom Hooks displayed does not establish all issued claims or absence of every possible integration.

M05 — APPROVED DESIGN: prefer current ECC P-256/ES256 trust; permit correctly attributed AUTH_SERVER_BACKED fallback through fixed trusted service, never equate it with local signature assurance. Unknown required algorithm/path assurance fails closed. Previous HS256 needs explicit handling; no key revocation/rotation/settings changes approved.

M06 — INFERRED/UNCONFIRMED: actual JWT alg/kid/current-key selection, exact verification path, previous-key acceptance window/legacy-token behavior, JWKS discovery/rotation/cache behavior. Dashboard ECC P-256 suggests ES256; it is not verified issued-token/header/path evidence. A previous key entry is not proof that it is still accepted or revoked.

M07 — APPROVED DESIGN: same immutable explicit token for getUser(token) and getClaims(token), strict canonical user/subject/session matching; claim/policy checks before lossy projection; safe required exp/iat, validated optional nbf, expiry/future/coercion/contradiction and clock-regression denial, post-await checks,30,000ms proof freshness. Zero skew remains the stated proposed value in authorization, not an observed target clock guarantee; exact field/schema choices must be pinned for future implementation.

M08 — INFERRED/UNCONFIRMED:3,600-second access-token lifetime is a recommendation, NOT current configuration. Token lifetime, proof freshness and session inactivity/max-lifetime are three different quantities. Current AAL/session downgrade timing and15-minute behavior remain unverified; never use that window as permission to accept enrolled aal1 workspace access.

M09 — BLOCKED: authoritative same-author factor-state completeness/visibility/freshness/schema and enrollment-race semantics. AAL claim alone cannot distinguish unenrolled from enrolled-but-not-stepped-up. TOTP enabled for the project does not mean every author enrolled. No user/factor/session inspection authorized now.

M10 — BLOCKED: concrete PRINCIPAL target-trust/assurance and implementation gate until issuer/audience/effective claims, key/legacy/path policy and factor-state prerequisites are accepted. SESSION/N-12/GATEWAY/PACKAGING/RECONCILIATION/TRANSPORT remain separate pending controls. Identity proof is not current writable-session/ownership/grant or write authority. Historical independent spawn EPERM remains BLOCKED. No broad design/pilot/release gate promoted.

## Conditional MFA: enforceable predicate and evidence boundary
INTERPRETATION of approved design: for otherwise valid same-token identity, complete authoritative factor state NONE admits aal1; state ENROLLED requires aal2 (aal1 denies/needs step-up); valid aal2 meets the assurance floor for either known state but does not prove present enrollment or authorize writes. Unknown/malformed/unavailable/stale/incomplete state must not be collapsed to NONE. Conservative proposed handling is deny protected workspace eligibility until trustworthy evidence exists, even when an identity object can be assembled. Missing/unknown AAL must not silently default to aal1 in this application contract.

A candidate source is the matching Auth-server getUser(explicitToken) response's complete factors collection, IF a separately verified target/API contract establishes that it is authoritative and complete for that caller/token/AAL. Validate same canonical user.id/sub, own plain data, well-formed complete factor collection, supported type/status schema and freshness. Count verified enrollments, not pending/unverified setup records. Any verified factor must not be ignored merely because the app currently offers TOTP only; unknown types/statuses/schema cannot justify an aal1 allow. Return only a derived state needed for policy, no factor IDs/secrets/person data in proof, logs or fixtures exported as evidence. No raw factor data is retrieved in Task0062.

The frozen SDK _listFactors() uses getUser() without explicit token. The explicit-jwt _getAuthenticatorAssuranceLevel(jwt) path decodes AAL and calls getUser(jwt), but defaults absent user.factors to an empty array; its non-jwt path consults getSession/session.user. These convenience methods are not substitutes for the stricter request-local verified claims + complete factor-state contract. Do not trust decoded-only currentLevel, nextLevel, AMR, user_metadata, cached session state or a client-provided enrollment boolean. SDK fallback-to-empty is NOT evidence of no enrollment.

[Public MFA documentation](https://supabase.com/docs/guides/auth/auth-mfa) distinguishes session assurance and opt-in enforcement. It does not attest to this project's factor visibility or enrolled-author behavior. No verified target response/schema was supplied; factor evidence remains BLOCKED. If the existing same-token getUser response cannot establish complete state, a separately authorized factor-state source/access scope is required. Do not invent an admin client, extra SQL/grants or third app path inside the two-file future task.

Snapshot trusted policy/client/token and arriving evidence per request, preserve immutable author/session/expiry binding and existing post-async30-second bound. Revalidate temporal eligibility after async work. Concurrent enrollment/unenrollment or restriction changes can invalidate an earlier observation; freshness is not atomic enrollment/session enforcement. Require defined observation/decision timing, no cross-author cache, and separately scoped race/outage/visibility acceptance. No immediate global MFA-enrollment linearization guarantee is claimed; no database transaction/locking semantics are approved here. N12's session/write race tests remain BLOCKED, not replaced by factor-policy unit tests.

## JWT assurance and the previous key
APPROVED DESIGN requires both trusted Auth-server user evidence and successful trusted-claims verification for the exact same captured token. Reuse existing SupabaseAuthService configuration/public client and preserve existing verify(token)->{id}/guard/Books behavior. No current fixture policy may become production defaults: Task60 intentionally denies all AAL fields and extra SDK fields, so it cannot enforce this real conditional-MFA design unchanged.

Distinguish assurance axes: current-key local cryptographic verification proves signature integrity under an approved key/algorithm/origin and checked claims; fixed-server getUser acceptance supplies Auth-server identity evidence; neither proves an active writable session. getClaims success can use local asymmetric WebCrypto/JWK verification or Auth-server fallback in frozen SDK2.117.3. Header alg/kid or Dashboard current-key label alone does not reveal whether an actual call used cached crypto, key fetch or server fallback. Do not report CRYPTOGRAPHIC_CURRENT_KEY unless the required path/key evidence is established.

A permissible minimum label proposal is AUTH_SERVER_BACKED when mandatory fixed-server same-token user verification succeeds AND trusted SDK claims/policy succeed. This describes proven minimum identity assurance, not a claim that getClaims specifically executed fallback. Actual claims-verification path is UNKNOWN unless observable proof exists; UNKNOWN cannot satisfy a policy requiring a particular local path/current key. Owner permission for fallback does not waive algorithm/issuer/audience/legacy policy. Require explicit error classes internally: invalid/expired/mismatched vs configuration/provider unavailable; both fail closed, no elevated or silent offline fallback, no token/claims leakage. External HTTP mapping remains TRANSPORT pending.

Previous HS256 is not current ECC assurance and is not auto-approved merely because Auth server accepts it. Two future dispositions require explicit owner selection/evidence: deny legacy author tokens, or allow a bounded documented legacy compatibility rule only as AUTH_SERVER_BACKED with confirmed permitted algorithm/key-era/limits. No default legacy grace period selected. Do not read a shared signing secret, locally verify HS256, revoke keys, rotate settings or manufacture legacy tokens in this task. No manual downgrade from failed ES256 verification to HS acceptance, no caller keys/JWKS/allowExpired overrides. Built-in SDK fallback behavior must be evaluated against approved assurance before acceptance; if current-vs-legacy provenance cannot be distinguished sufficiently, fail closed for that requirement.

## Future two-path implementation handoff — NOT_AUTHORIZED
New unique implementation Task/committed validated immutable CP at then-current approved main required. EXACT candidate app paths (no edits now):
- apps/api/src/modules/auth/supabase-auth.service.ts
- apps/api/src/modules/workspace/workspace-principal-adapter.spec.ts

Add only an additive verifyPrincipalEvidence method in the existing service and mandatory spec extensions, preserving52existing cases and existing Auth/guard ABI. No new Auth stack/synthetic bridge, dependencies/CI, routes/modules or SQL. Inject the existing publicClient boundary in tests; no real client initialization/network/token experiments in the proposed unit execution. Do not call the new method automatically from existing guards/routes. It may supply a minimal immutable server-private proof to the existing provider only after policy/factor/assurance validation, keeping original request binding. No returned writable/session-active permission or raw factor records; token correlation stays server request-local, not HTTP/cache/receipt/logs.

Implementation cannot honestly meet the conditional design until concrete issuer/audience/effective claim schema, current/legacy/fallback assurance and authoritative factor-state contract are resolved. Do not implement a guessed policy, silently accept all aal1 users, globally require MFA contrary to optional enrollment, or close a gate with mocked evidence. If a prerequisite needs new access, app path, dependency, SQL or live verification, stop that branch of work and obtain a bounded new authorization/pack. No shipping Auth implementation is authorized by this preparation PR.

## R01-R08 future acceptance matrix — every status NOT_RUN
R01 — NOT_RUN: explicit pinned owner config/issuer/audience/role/anonymous/AAL/time/key policy; missing/caller/token-derived policy, service-role author identity, mutated policy or implicit SDK session defaults deny. No production value inferred from Dashboard labels alone.

R02 — NOT_RUN: same immutable token and captured trusted client/policy for required getUser/getClaims; reversed responses, policy/token switching, concurrent authors and response mutation cannot mix evidence. No getSession/refresh or request options/key overrides.

R03 — NOT_RUN: canonical user/sub/session equality; exact approved issuer/audience/author role; anonymous false; strict safe NumericDate exp/iat/optionalnbf, unsupported/expired/future/coerced/contradictory/clock-regression denial.3,600s recommendation must not be treated as target lifetime.

R04 — NOT_RUN: current-key/allowed alg/path evidence, tampering represented as injected failure only in unit tests; previous HS256 allowed only under separately accepted legacy rule and AUTH_SERVER_BACKED attribution. Unknown required path denies; no key-error/crypto-failure downgrade or unsupported assurance claim. Real key/legacy/JWT experiments require separate target-specific permission.

R05 — NOT_RUN: SDK errors/partial/malformed/null/unavailable factor and claims/user evidence deny; internal provider/configuration unavailability distinct from invalid credentials; no sensitive proof/log disclosure or privileged/offline fallback. Existing verify/guard error ABI not silently changed.

R06 — NOT_RUN: complete authoritative matching-user factor-state NONE+aal1 allow, ENROLLED+aal1 deny, ENROLLED+aal2 allow, knownNONE+validhigheraal2 satisfies floor only. Missing factors must not become empty/NONE; A complete validated collection containing only known pending/unverified factors has no verified enrollment and may yield NONE; this is not an empty-default shortcut. Unknown schema/status/type, stale/foreign/mutated evidence or incomplete visibility denies. No AAL-only, Dashboard-project-enable or cached-session enrollment inference. Include response-delay, enrollment/unenrollment observation and15-minute restriction boundaries as synthetic contract cases; actual target behavior stays separately unverified. Factor completeness/race prerequisite unresolved means implementation BLOCKED, not passed with fixtures.

R07 — NOT_RUN: retain30000ms (30000 boundary vs30001 denial), expiry after awaits, immutable binding, all52existing mandatory bodies/12unit/32PG/CI/security/recovery and Auth/guard/Books ABI; no real SDK client/network/JWT/JWKS/SQL/route in this future local test slice.

R08 — NOT_RUN: valid identity and MFA policy still yield no writable/session-active/grant authority. SESSION_UNKNOWN cannot authorize writes; separate N12 tests remain BLOCKED. Demonstrate minimal immutable response/no factor/private record retention, no production request wiring.

These are proposed test requirements, not execution evidence. Task62 document assertions do not execute R01-R08 or establish factor-state/real-token acceptance. If future tests cannot observe an assurance property, mark the actual case BLOCKED rather than fabricating PASS.

## Remaining decisions and permitted next action
PRINCIPAL_DESIGN_APPROVED_CONDITIONAL; PRINCIPAL_TARGET_TRUST_PENDING and IMPLEMENTATION_NOT_AUTHORIZED. Confirm effective issuer/audience/role/anonymous/AAL/time issuance; obtain authoritative factor schema/completeness/visibility and observation timing; settle previous-key disposition and observable path/algorithm assurance; verify configured JWT lifetime and restriction/rotation/cache behavior. The15-minute setting must stay ON; no change granted. Existing target settings are not themselves application policy or behavioral acceptance.

Only separately authorized non-secret evidence/target verification may resolve these gaps. No JWT/JWKS/key material, Auth/user/session inspection, hosted query, credential, settings operation or factor enrollment allowed here. No blanket approval to rerun/extend the Task0046 query packet. Owner observes/accepts missing evidence under exact future scope, then explicitly authorizes the implementation Task and later merge. No successor automatic merge.

SESSION/GATEWAY/PACKAGING/RECONCILIATION/TRANSPORT remain pending; N12 and independent spawn EPERM BLOCKED, R01-R08 NOT_RUN. Task59-61 source/history/failures retained, Issue108 OPEN, expired remediation delegation stays closed; broad design/pilot/release gates unchanged.
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

### `docs/agent-workflow/inputs/VEL-TASK-0063/OWNER-AUTHORIZATION.json` @ `7ea2cbc3550f8eb8a6e6094cb0bcf82e7abdf444`

~~~~~~markdown
{"url":"https://api.github.com/repos/Ben-001-sys/Vellistry/issues/comments/6411355004","html_url":"https://github.com/Ben-001-sys/Vellistry/issues/108#issuecomment-6411355004","issue_url":"https://api.github.com/repos/Ben-001-sys/Vellistry/issues/108","id":6411355004,"node_id":"IC_kwDOVArGqc8AAAABfiWDfA","user":{"login":"Ben-001-sys","id":195976052,"node_id":"U_kgDOC65bdA","avatar_url":"https://avatars.githubusercontent.com/u/195976052?u=1cd203089a200a11d6c8af59210f59192a08ea67&v=4","gravatar_id":"","url":"https://api.github.com/users/Ben-001-sys","html_url":"https://github.com/Ben-001-sys","followers_url":"https://api.github.com/users/Ben-001-sys/followers","following_url":"https://api.github.com/users/Ben-001-sys/following{/other_user}","gists_url":"https://api.github.com/users/Ben-001-sys/gists{/gist_id}","starred_url":"https://api.github.com/users/Ben-001-sys/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/Ben-001-sys/subscriptions","organizations_url":"https://api.github.com/users/Ben-001-sys/orgs","repos_url":"https://api.github.com/users/Ben-001-sys/repos","events_url":"https://api.github.com/users/Ben-001-sys/events{/privacy}","received_events_url":"https://api.github.com/users/Ben-001-sys/received_events","type":"User","user_view_type":"public","site_admin":false},"created_at":"2026-10-26T08:16:05Z","updated_at":"2026-10-26T08:16:05Z","author_association":"OWNER","body":"### Owner direct-dispatch relay — bounded owner-only PRINCIPAL probe preparation (26October2026)\n\nHuman owner authorizes preparation and a subsequent OWNER-EXECUTED synthetic Auth probe only after prerequisites and exact protocol review. Target vellistry-dev/ref lflkcrnriitrbclangyr. Purpose: effective issuer/audience/role/AAL claims and authoritative MFA factor-state visibility using TWO EXISTING owner-controlled synthetic authors (unenrolled AAL1, enrolled AAL1, enrolled AAL2).\n\nConditional owner operations: authenticate those fixtures; handle their tokens ephemerally in owner's environment; same-token getUser/getClaims; inspect only sanitized claims/factor structure; SDK-required public JWKS retrieval from fixed trusted project origin if needed. Agents receive no credentials/raw tokens and execute no hosted operations.\n\nPrerequisites: confirm existing fixtures/owner control, unique governed Task and committed validated immutable CP before executable work, exact endpoint/credential/redaction/cleanup protocol review. No hosted probe until satisfied. No account creation, enrollment/signing changes, SQL/grants/application/routes/deployment, real authors/manuscripts/broad users/privileged inspection, raw JWT/password/user/session/factor IDs/API keys/secrets/key material in reports/repo/logs; no HS256 experiment/automatic acceptance. Unsupported results UNKNOWN/BLOCKED. R01-R08 NOT_RUN, N12 and independent EPERM BLOCKED, Issue108 OPEN; no automatic merge or production approval.\n\nCodex is establishing unique Task0063 for DOCUMENTATION-ONLY protocol/evidence preparation at verified main17adbf96ae0a9187732ad3a7837ec0d2d9b62d03. No executable harness/Auth code or hosted execution in preparation. Owner fixture confirmation has been requested without identifiers. If executable tooling is later needed, it requires exact reviewed scope/pack before code; current pre-execution review is not yet satisfied. This relay records direct owner chat, not independent human identity attestation.","reactions":{"url":"https://api.github.com/repos/Ben-001-sys/Vellistry/issues/comments/6411355004/reactions","total_count":0,"+1":0,"-1":0,"laugh":0,"hooray":0,"confused":0,"heart":0,"rocket":0,"eyes":0},"performed_via_github_app":{"id":1144995,"slug":"chatgpt-codex-connector","node_id":"A_kwHOAOQ6Gs4AEXij","owner":{"login":"openai","id":14957082,"node_id":"MDEyOk9yZ2FuaXphdGlvbjE0OTU3MDgy","avatar_url":"https://avatars.githubusercontent.com/u/14957082?v=4","gravatar_id":"","url":"https://api.github.com/users/openai","html_url":"https://github.com/openai","followers_url":"https://api.github.com/users/openai/followers","following_url":"https://api.github.com/users/openai/following{/other_user}","gists_url":"https://api.github.com/users/openai/gists{/gist_id}","starred_url":"https://api.github.com/users/openai/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/openai/subscriptions","organizations_url":"https://api.github.com/users/openai/orgs","repos_url":"https://api.github.com/users/openai/repos","events_url":"https://api.github.com/users/openai/events{/privacy}","received_events_url":"https://api.github.com/users/openai/received_events","type":"Organization","user_view_type":"public","site_admin":false},"name":"ChatGPT Codex Connector","description":"Bring ChatGPT and Codex to your GitHub repositories.","external_url":"https://www.chatgpt.com","html_url":"https://github.com/apps/chatgpt-codex-connector","created_at":"2025-02-14T01:37:05Z","updated_at":"2026-09-23T18:52:59Z","permissions":{"actions":"write","checks":"read","contents":"write","emails":"read","issues":"write","metadata":"read","pull_requests":"write","statuses":"read","workflows":"write"},"events":["check_run","check_suite","commit_comment","issues","issue_comment","pull_request","pull_request_review","pull_request_review_comment","pull_request_review_thread","repository","status","sub_issues"]},"minimized":null,"pin":null}
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0063/FIXTURE-STATUS.json` @ `8d103b65708c4527b2d9751e9e5582cd9833480a`

~~~~~~markdown
{
  "date": "2026-10-26",
  "source": "Owner direct response in current conversation, relayed in Issue108; no account inspection",
  "unenrolled_fixture_exists_and_owner_controlled": "UNKNOWN",
  "verified_totp_fixture_exists_and_owner_controlled": "UNKNOWN",
  "enrolled_fixture_aal1_aal2_obtainable": "UNKNOWN",
  "status": "FIXTURE_PREREQUISITE_BLOCKED",
  "hosted_probe_executed": false
}
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0063/SDK-PROTOCOL-SOURCE.md` @ `113bfd0d540dbe89aebe8cc01f80ba75ac1d1354`

~~~~~~markdown
# Fixed SDK endpoint source, no invocation

Auth-js2.117.3 GoTrueClient.ts SHA256 7552500e375665e28acf23fb552ccbf1ef11379afab15859b2f670f1ae9aee9f. Source inspection only. Auth operations/key/user/token methods NOT invoked. Existing SDK user/claims/JWKS path evidence in Task59; factor visibility limitations in Task62. Endpoint source may describe operations not permitted by this preparation; no authority inferred from source.

## Original lines 1227-1265
```ts
   *   email: 'example@email.com',
   *   password: 'example-password',
   * })
   * if (error) {
   *   console.error(error)
   *   return
   * }
   * ```
   */
  async signInWithPassword(
    credentials: SignInWithPasswordCredentials
  ): Promise<AuthTokenResponsePassword> {
    try {
      let res: AuthResponsePassword
      if ('email' in credentials) {
        const { email, password, options } = credentials
        res = await _request(this.fetch, 'POST', `${this.url}/token?grant_type=password`, {
          headers: this.headers,
          body: {
            email,
            password,
            gotrue_meta_security: { captcha_token: options?.captchaToken },
          },
          xform: _sessionResponsePassword,
        })
      } else if ('phone' in credentials) {
        const { phone, password, options } = credentials
        res = await _request(this.fetch, 'POST', `${this.url}/token?grant_type=password`, {
          headers: this.headers,
          body: {
            phone,
            password,
            gotrue_meta_security: { captcha_token: options?.captchaToken },
          },
          xform: _sessionResponsePassword,
        })
      } else {
        throw new AuthInvalidCredentialsError(
          'You must provide either an email or phone number and a password'
```

## Original lines 5865-5910
```ts
                  webauthn: Prettify<
                    StrictOmit<MFAVerifyWebauthnParamFields['webauthn'], 'credential_response'> & {
                      credential_response: PublicKeyCredentialJSON
                    }
                  >
                }
              >,
            /*  Exclude challengeId because the backend expects snake_case, and exclude factorId since it's passed in the path params */
            'challengeId' | 'factorId'
          > & {
            challenge_id: string
          } = {
            challenge_id: params.challengeId,
            ...('webauthn' in params
              ? {
                  webauthn: {
                    ...params.webauthn,
                    credential_response:
                      params.webauthn.type === 'create'
                        ? serializeCredentialCreationResponse(
                            params.webauthn.credential_response as RegistrationCredential
                          )
                        : serializeCredentialRequestResponse(
                            params.webauthn.credential_response as AuthenticationCredential
                          ),
                  },
                }
              : { code: params.code }),
          }

          const { data, error } = await _request(
            this.fetch,
            'POST',
            `${this.url}/factors/${params.factorId}/verify`,
            {
              body,
              headers: this.headers,
              jwt: sessionData?.session?.access_token,
            }
          )
          if (error) {
            return this._returnResult({ data: null, error })
          }

          await this._saveSession({
            expires_at: Math.round(Date.now() / 1000) + data.expires_in,
```

## Original lines 5925-5975
```ts
    if (this.lock != null) {
      // TODO(v3): remove legacy lock path
      return this._acquireLock(this.lockAcquireTimeout, run)
    }
    return run()
  }

  /**
   * {@link GoTrueMFAApi#challenge}
   */
  private async _challenge(
    params: MFAChallengeTOTPParams
  ): Promise<Prettify<AuthMFAChallengeTOTPResponse>>
  private async _challenge(
    params: MFAChallengePhoneParams
  ): Promise<Prettify<AuthMFAChallengePhoneResponse>>
  private async _challenge(
    params: MFAChallengeWebauthnParams
  ): Promise<Prettify<AuthMFAChallengeWebauthnResponse>>
  private async _challenge(params: MFAChallengeParams): Promise<AuthMFAChallengeResponse> {
    const run = async (): Promise<AuthMFAChallengeResponse> => {
      try {
        return await this._useSession(async (result) => {
          const { data: sessionData, error: sessionError } = result
          if (sessionError) {
            return this._returnResult({ data: null, error: sessionError })
          }

          const response = (await _request(
            this.fetch,
            'POST',
            `${this.url}/factors/${params.factorId}/challenge`,
            {
              body: params,
              headers: this.headers,
              jwt: sessionData?.session?.access_token,
            }
          )) as
            | Exclude<AuthMFAChallengeResponse, AuthMFAChallengeWebauthnResponse>
            /** The server will send `serialized` data, so we assert the serialized response */
            | AuthMFAChallengeWebauthnServerResponse

          if (response.error) {
            return response
          }

          const { data } = response

          if (data.type !== 'webauthn') {
            return { data, error: null }
          }
```
~~~~~~

## Execution reporting
Return an ExecutionBundle with FACT / INTERPRETATION / PROPOSAL sections,
tests actually performed, changes, evidence gaps, and pending owner approval.
