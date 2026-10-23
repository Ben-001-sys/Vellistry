---
id: VEL-CP-0045
title: 'Context for VEL-TASK-0045: VEL-DEV-001 Phase A synthetic foundation verification
  and bounded handoff'
type: context-pack
status: prepared
created_at: '2026-10-23'
version: 0.1.0
task_id: VEL-TASK-0045
base_commit: c0c691fbc0a5d9ce7528f88cbc7aa7d5af57463d
task_blob_sha: 0d211c21a058a4f3dc3fc8e72b6567c437060898
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
  git_blob_sha: 2ee5a45d39e365540d2183ce587e0d0ce288c433
  source_status: active
- path: docs/agent-workflow/PR-COMPLIANCE.md
  role: governing-source
  git_blob_sha: 5f4845623aef3abb15fba7fbe8e78474902cca00
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0045/OWNER-SCOPE.md
  role: governing-source
  git_blob_sha: 8c22e9de819b394643d407df78724e4817155341
  source_status: unrecorded
- path: README.md
  role: governing-source
  git_blob_sha: 2e54176baf6fbba212193f7b99432e629a94bc92
  source_status: unrecorded
- path: docs/plans/VEL-PLAN-02-ARCHITECTURE-DATA-CONTRACTS-2026-10-11.md
  role: governing-source
  git_blob_sha: 9b33b80ea4ba047ac054c00ccc05287b6f6a2c89
  source_status: proposed-owner-review-no-schema-approval
- path: docs/plans/VEL-PLAN-03-UX-NAVIGATION-STATES-2026-10-11.md
  role: governing-source
  git_blob_sha: 99d016a057617b71c0810bc04ea258449ab01cfb
  source_status: proposed-planning-only
- path: docs/plans/VEL-PLAN-04-TEST-SECURITY-RECOVERY-2026-10-11.md
  role: governing-source
  git_blob_sha: d95dd6f53395ed41495651816ac1c00a83799102
  source_status: proposed-planning-only
- path: docs/reports/VEL-PR68-RECONCILIATION-0039-DECISION-PACKET.md
  role: governing-source
  git_blob_sha: 79ec346fe20dcf65c62db8f2e90140435b4e15ee
  source_status: unrecorded
source_gaps:
- id: HOSTED
  limitation: Exact current project reference and hosted state not verified; permission
    absent.
- id: DESIGN
  limitation: PLAN-02/03/04 are proposed contracts, not blanket schema or implementation
    approval.
prepared_by: agent_workflow.py
---

# VEL-CP-0045 — VEL-DEV-001 Phase A synthetic foundation verification and bounded handoff

## Objective
Verify existing merged foundation with no real credentials or hosted calls; prepare precise separately authorizable hosted and IMP-002 proposals.

## Scope
**In:** CURRENT-STATE.md; docs/agent-workflow/tasks/VEL-TASK-0045.yaml; docs/agent-workflow/context-packs/VEL-CP-0045.md; docs/agent-workflow/execution-bundles/VEL-EB-0045.md; docs/agent-workflow/inputs/VEL-TASK-0045/*; docs/agent-workflow/PR-COMPLIANCE.yaml; docs/reports/VEL-DEV-001-PHASE-A.md; docs/reports/VEL-DEV-001-HOSTED-PROPOSAL.md; docs/reports/VEL-IMP-002-HANDOFF-PROPOSAL.md; docs/reports/evidence/VEL-DEV-001/*
**Out:** Feature code, tests, executable tooling, dependencies, SQL, CI and policy changes; Hosted access, credentials, private data, deployment, paid services and merge; Reopening the expired remediation delegation or broad approval gates

## Evidence and authority constraints
The text below is a readable rendering of pinned Git blobs; exact raw bytes remain recoverable from the recorded commit/blob SHAs. Recorded source statuses remain in force: draft research is not accepted requirements. Original unarchived uploads are not independently verified merely by being mentioned.

**Known source gaps:**
- HOSTED: Exact current project reference and hosted state not verified; permission absent.
- DESIGN: PLAN-02/03/04 are proposed contracts, not blanket schema or implementation approval.

## Permissions and acceptance
**Allowed:** Read repository and GitHub source; create isolated worktree, Run existing synthetic tests and frozen public dependency installation without real app credentials, Write only scoped reports/current-state and task evidence; submit for independent and owner review
**Owner approval required:** All hosted, credential configuration, migration, private data and deployment actions; Feature implementation, broad gate changes and repository merge
**Acceptance criteria:**
- No credential-bearing file read or hosted request; no feature or SQL changes
- Actual commands and results distinguish synthetic readiness from hosted acceptance
- Reuses existing authentication and preserves all security gates
- Proposed next task specifies scope, negative cases, prerequisites and owner-only authorization

## Deliverables
- Immutable committed ContextPack before reporting changes
- Actual frozen install, synthetic tests, build/typecheck and governance evidence with exact SHA and exits
- Source/configuration trace, hosted decision packet and one bounded IMP-002 proposal
- ExecutionBundle and distinct review; owner retains merge decision

## Pinned source snapshots
Git commit: `c0c691fbc0a5d9ce7528f88cbc7aa7d5af57463d`. Read source statuses independently from task intent.

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

### `CURRENT-STATE.md` @ `2ee5a45d39e365540d2183ce587e0d0ce288c433`

~~~~~~markdown
---
id: VEL-STATE-001
type: current-state
status: active
created_at: 2026-10-08
updated_at: 2026-10-23
owner: project_owner
version: 0.2.1
---

# Vellistry — current verified state

## Verified baseline and active work

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

### `docs/agent-workflow/inputs/VEL-TASK-0045/OWNER-SCOPE.md` @ `8c22e9de819b394643d407df78724e4817155341`

~~~~~~markdown
# Phase A owner dispatch — 2026-10-23

Source: direct owner message in this Codex conversation, linked to Issue #108. Conversation permalink unavailable; no invented approval URL.

The owner declares the old remediation mandate COMPLETE and delegation EXPIRED. The owner authorizes repository-only synthetic verification and task preparation under VEL-DEV-001 Phase A: reuse existing Next/Nest/Supabase integration; frozen install, synthetic tests, builds/typechecks; documented configuration only; precise hosted blockers and a proposed smallest hosted step; bounded IMP-002 handoff referencing accepted architecture and proposed designs.

No feature code, hosted access (even read-only), CLI authentication, secrets, migrations, hosted users, private manuscripts or feature merge. Ordinary owner merge remains required. G_DESIGN/G_CODE remain broadly pending. This Task permits only reporting, current-state reconciliation and its own governance evidence, not executable application changes. Issue #108 prepared status predates this direct dispatch.

The task uses a conservative administrative expiry of 2026-10-30; it does not extend permission beyond this bounded verification assignment. All future hosted and implementation tasks need separate authorization.
~~~~~~

### `README.md` @ `2e54176baf6fbba212193f7b99432e629a94bc92`

~~~~~~markdown
# Vellistry

Vellistry is an author-controlled fiction writing application with optional AI.
The Next.js/NestJS/Supabase foundation and author-isolated Book Library are
integrated. Full manuscript editing, hosted acceptance, private pilot and release
remain gated; this repository is not a deployed product.

Start with [CURRENT-STATE.md](CURRENT-STATE.md) for the checked main SHA, active
tasks/PRs, actual CI evidence, security holds and historical links. Then read
[PROJECT.md](PROJECT.md), [PROJECT-CONSTITUTION.md](PROJECT-CONSTITUTION.md),
[SOURCE-OF-TRUTH.md](SOURCE-OF-TRUTH.md) and [AGENTS.md](AGENTS.md).

## Governed implementation

The owner selects scope and approves consequential changes/merges. ChatGPT
coordinates and independently reviews evidence; Codex implements bounded tasks
under [ADR0008](docs/decisions/ADR-0008-codex-primary-agentic-implementation-workflow.md).
Use the existing [Task → immutable ContextPack → ExecutionBundle workflow](docs/agent-workflow/README.md)
in an isolated branch, with sources committed and pack validated before edits.
Planning, write access and passing CI do not grant implementation or release approval.
Original ChatGPT PR66/65 and Cursor-era work keep their provenance.

## Application foundation and development

- `apps/web`: Next.js16/React19; Supabase session clients, protected Library UI/BFF.
- `apps/api`: NestJS11; verified author-token books endpoints with RLS-scoped calls.
- `supabase/migrations`: schema and restrictive manuscript DML migration. Do not
  apply these to a hosted project without exact-target, scoped owner approval.
- Full Tiptap editor, revision-save RPC, Story Memory and optional AI are future
  bounded slices. No paid provider is required by the manual writing experience.

Use Node24 and repository-pinned pnpm10.18.0 through Corepack, with
`corepack pnpm install --frozen-lockfile`. `corepack pnpm check`,
`corepack pnpm build` and `corepack pnpm test:library-isolation` verify the
repository foundation without hosted writes.

The owner-selected desktop development target is **Supabase Cloud**. The
placeholder reference below is the canonical configuration guide. The
[earlier desktop plan](docs/plans/VEL-CURSOR-DESKTOP-SETUP-PLAN-2026-10-11.md)
is dated history; its Cursor assignment is not an active dispatch. Local
Supabase/Docker is used for disposable tests and is not required to connect
the desktop app to its separately authorized hosted target.

## Desktop configuration placeholder reference

**Reference only:** this remediation does not authorize hosted access, retrieving
keys, authenticating the CLI, applying migrations or creating cloud users. Do
not inspect or overwrite existing local configuration. The owner must separately
authorize target-specific setup before filling these placeholders. Configuration
preflight success alone proves no connection, schema, RLS, Auth or persistence.

For a separately authorized setup, the Web app reads ignored
apps/web/.env.local and the API reads ignored apps/api/.env. Create each file
only if absent; preserve and review an existing file instead of replacing it.
Replace YOUR_PROJECT_REF and REPLACE_WITH_SB_PUBLISHABLE_KEY locally with the
same authorized development project's values in both files. The project URL
uses HTTPS. Never paste keys into Git, chat, PRs or evidence. A publishable key
is public in browser bundles; it does not replace a verified user's token or RLS.
Do not use a secret/service_role key for either ordinary author path.

Web reference (apps/web/.env.local):

```dotenv
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=REPLACE_WITH_SB_PUBLISHABLE_KEY
VELLISTRY_API_BASE_URL=http://127.0.0.1:4100
```

API reference (apps/api/.env):

```dotenv
SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co
SUPABASE_PUBLISHABLE_KEY=REPLACE_WITH_SB_PUBLISHABLE_KEY
API_HOST=127.0.0.1
API_PORT=4100
```

The root .env.example is a **legacy disposable-local reference**, not the hosted
setup or a file automatically loaded by both apps. Per-app .env.example files
are not present on main; use this canonical reference. No env template or secret
path exception is added to the governance allowlist.

After separately authorized local configuration, use a clean shell without
inherited app variables, DOTENV_KEY or DOTENV_CONFIG_* overrides. Competing Web
env files are outside the bounded file-only preflight; review them without
printing confidential contents. From the repository root, replace
YOUR_PROJECT_REF before running the offline-only check:

```powershell
corepack pnpm check:hosted-config YOUR_PROJECT_REF
```

The preflight reads only the two local files and makes no network call. Do not
run it in a credential-bearing checkout as part of an unapproved agent task.
Its synthetic regression suite needs no configured files:

```powershell
corepack pnpm test:hosted-preflight
```

Normal development uses the existing dev:web and dev:api scripts only after
the applicable setup authorization; this guide does not grant hosted acceptance.
Disposable CI Supabase/PostgreSQL services remain separately scoped tests.
Local resets are permitted only on explicitly disposable instances. For offline
source/SQL evidence and the separate hosted gates, see the
[dated readiness review](docs/reports/VEL-DB-READINESS-001-OFFLINE-REVIEW.md).
The third privilege migration remains planning-only; signed-out JWT access is
still a private-pilot blocker.

## Verification and review

[Primary Vellistry CI](.github/workflows/ci.yml) runs exact-head governance on PRs,
conservative applicable application/security checks before merge, and full main
or manual verification. Draft advisory execution deliberately leaves the stable
merge gate blocked. The25 older workflows are **manual-only** historical jobs.

Run `python scripts/agent_workflow.py validate`,
`python scripts/check_knowledge_metadata.py`,
`python scripts/check_implementation_readiness.py`,
`python scripts/spec_traceability.py validate` and focused Python unit tests.
The integrated runner is `python scripts/ci_governance.py` (Linux is the CI
reference environment; the Windows fixture descriptor/encoding defects were
corrected through PR95 and full local governance has subsequently passed).
Green checks do not prove hosted RLS acceptance, direct signed-out JWT revocation,
author usability, billing savings, branch-protection enforcement or release readiness.
Standing owner governance applies to consequential operations. The temporary
[one-time remediation delegation](docs/agent-workflow/authorizations/VEL-REM-INTEGRATION-20261019.yaml)
permits only reviewed, verified repository remediation integrations and expires
at program completion; it grants no future feature or hosted authority.

Historical integration: PR #43 **merged on 2026-10-10**, restoring21 research files. Its seven passing workflows were research evidence; see the [recovery report](docs/reports/REPOSITORY-INTEGRITY-RECOVERY-2026-10-10.md), not a fresh current-head result.

## Current remediation authority

The default owner approval boundaries remain in force. The [recorded one-time delegation](docs/agent-workflow/authorizations/VEL-REM-INTEGRATION-20261019.yaml) permits only eligible repository remediation integrations during this unfinished assignment, with distinct trusted review and actual CI. It grants no hosted, private-manuscript, release or future-feature authority. [CURRENT-STATE.md](CURRENT-STATE.md) and the [original44-item ledger](docs/reports/VEL-MASTER-REMEDIATION-LEDGER.md) distinguish verified progress from remaining acceptance.

The temporary remediation delegation ends under its [recorded closure condition](docs/agent-workflow/authorizations/VEL-REM-INTEGRATION-20261019-CLOSURE.md). After the final merge/post-main attestation, ordinary owner-governed approval resumes; this exception grants no future feature authority.
~~~~~~

### `docs/plans/VEL-PLAN-02-ARCHITECTURE-DATA-CONTRACTS-2026-10-11.md` @ `9b33b80ea4ba047ac054c00ccc05287b6f6a2c89`

~~~~~~markdown
---
id: VEL-PLAN-02-ARCH-DATA-20261011-001
title: PLAN-02 — architecture, data, authorization and API/RPC contract proposal
type: proposed-implementation-contract
status: proposed-owner-review-no-schema-approval
created_at: 2026-10-11
updated_at: 2026-10-11
owner: project_owner
version: 0.1.0
sources:
  - docs/decisions/ADR-0003-use-tiptap-3-prosemirror-for-manuscript-editor.md
  - docs/decisions/ADR-0006-next-nest-supabase-implementation-foundation.md
  - docs/decisions/ADR-0007-immutable-compact-expanded-guidance-sources.md
  - docs/architecture/IMPLEMENTATION-BOUNDARIES-2026-10-10.md
  - docs/specs/VEL-SPEC-001-CHAPTER-SAVE-CONTRACT.md
  - docs/research/OPTION-B-WAVE03-R07-TEMPORAL-PROFILES-EXTRACTION-2026-10-10.md
  - docs/research/OPTION-B-WAVE03-R15-K2B-MANUSCRIPT-PRIVACY-2026-10-10.md
  - docs/plans/OPTION-B-WAVE05-MVP-FINAL-DECISION-2026-10-10.md
  - docs/plans/VEL-IMPLEMENTATION-MASTER-PLAN-2026-10-11.md
---

# PLAN-02 — architecture and contract blueprint (proposed, not a migration)

## 1. Accepted foundation vs proposed engineering specifics

**ACCEPTED**: TypeScript/pnpm monorepo; Next.js 16/React 19 author-facing frontend and BFF, NestJS 11 protected API, Supabase Auth as **sole login authority**, PostgreSQL with per-author/book RLS, Tiptap 3/ProseMirror document JSON, accepted server revisions rather than browser state as source of truth, manual-first AI OFF, optional bounded user-owned BYOK. ADR-0006 permits local Supabase without paid cloud services. An eventual worker engine/production hosting choice is **not decided**. Do not introduce another auth system, mandatory Redis/vector service, cloud-only dependency or new frontend stack under this plan.

**PROPOSED BELOW**: entity/table names after the three existing SQL tables; route and RPC signatures; retry/collision semantics; storage formats and deletion transitions; temporal source representations. They require separately reviewed spec/ADR/migration before coding. A roadmap is not an accepted SQL definition or permission to expose real author data.

## 2. Domain boundaries and ownership model

```text
Supabase Author identity (auth.users)
  ├── author preferences / optional BYOK *session-only* client state
  └── books [existing; owner_id=auth.uid()]
       ├── chapters [existing; book_id, stable UUID, position]
       │    ├── chapter_revisions [existing; accepted JSON history]
       │    ├── planning_notes [proposed]
       │    └── local_draft recovery [client only; not canonical]
       ├── character_profiles / storyline_profiles [proposed manual entities]
       │    └── approved_fact_events + source_refs [proposed author-approved canon]
       ├── candidate_fact_events + review_decisions [proposed, never auto-canon]
       ├── rule_scope_overrides + author_rules [proposed; immutable source pack separate]
       ├── ai_requests + proposal_decisions + undo_links [proposed]
       └── import/export/backup manifests [proposed short-lived scoped records]
```

Every record containing sensitive manuscript, profile, fact, rules/preferences, prompt context, backup metadata or decision must prove the **authenticated owner AND book membership**, not merely accept a book UUID from the caller. The original schema has `books`, `chapters`, `chapter_revisions`; SQL migrations explicitly **revoke direct authenticated chapter/revision writes** until protected atomic RPC. Keep this safety property. No new DML migration during planning.

| Bounded entity | Minimum proposed fields / relation | Authority and invariant |
|---|---|---|
| `books` **existing** | `id`, `owner_id`, `title`, timestamps | owner comes from Auth/DB, not submitted JSON |
| `chapters` **existing** | `id`, `book_id`, `title`, `position`, `current_revision`, `accepted_document` | stable ID independent of order; nested owner permission |
| `chapter_revisions` **existing** | `book_id`, `chapter_id`, `revision`, `document`, timestamp | append-only accepted sequence; not autosave queue |
| Planning note **proposed** | `book_id`, optional `chapter_id`, body, changed_at | distinct from accepted manuscript and chapter revision |
| Profile **proposed** | character/thread kind, `book_id`, manual fields, approved baseline, updated_at | author's manual state; no model needed |
| Canonical fact event **proposed** | fact subject/predicate/value, approved author decision, applicable story-time interval, provenance | only separately author-approved; uncertain facts explicitly typed |
| Fact candidate **proposed** | `book_id`, source chapter + accepted revision, **exact quote** and location, narrative scene time, proposed fact, pending/edit/dismiss/approve or stale | a candidate never becomes canon by accepting AI prose |
| Rule origin/alias **proposed package** | immutable origin ID/compact or expanded variant/body hash + 134 logical aliases version | real private corpus must not be hallucinated or committed without permission |
| Rule preference **proposed** | inherited/overridden enabled flag, author rule version, scope `workspace|book`, exception reason | disable excludes rule from actual effective request |
| AI request & proposal **proposed** | actor, book/chapter, base revision, selection anchor, effective rules version, provider/model route, state, limited proposed plain text, consent evidence | unaccepted text is never accepted manuscript |
| Proposal decision **proposed** | accept/reject/edit, idempotency key, before/after accepted revision, author/time | CAS commit only; reject leaves source byte-equivalent |
| Export/backup manifest **proposed** | book owner, format, schema version, contents hashes, declared omissions, scoped Storage object reference if any | no raw BYOK keys; clean restore to authorized target proves backup |

**Index proposals:** owner+created_at for owned book listing; book+chapter position uniqueness with explicit reorder concurrency strategy; book+profile/fact status/story-time and chapter revision indices; scoped idempotency-key lookup unique per actor/action; storage object isolation. Actual index/query/explain performance measurements remain undone.

## 3. Boundary responsibility and proposed interfaces

| Component | Owns | Must not |
|---|---|---|
| Next web / Tiptap | controlled editor state, navigation, draft recovery candidate UX, full request-consent preview, local-only key lifecycle, accessible controls | report Saved without committed receipt; render another account's cached state; send prose invisibly |
| Next BFF | attach verified session to owned request; no-store and safe SSR/cookie/session handling | treat `getSession` alone as authority; embed tokens or prose in cache |
| Nest API | bearer validation, authorize resource, input schema, validated state transitions, effective context and optional AI proxy | trust `owner_id` in request; service-role shortcut; log raw manuscript/BYOK |
| Postgres RPC/RLS | atomic accepted revision CAS + immutable history/idempotent receipts, referential integrity and owner scope | allow direct client-initiated unversioned chapter UPDATE/DELETE |
| Local browser drafts | account/book/chapter/base-revision recovery candidates | override accepted revision silently; expose to next account on shared device |
| Private Storage (future) | short-lived authorized import/export/backup objects and expiry/retention | public manuscript buckets; promise signed URLs instantly expire on logout |
| AI adapter (future) | bounded OpenRouter downstream pinned model, consent, explicit author key, cost/rate limiting | hidden fallback, model output as committed canon, provider key persistence |

## 4. API/RPC contract candidates by delivery slice

These are **planning shapes only**, not endpoints currently implemented.

| Stage | Candidate request/interface | Expected result and safety envelope |
|---|---|---|
| IMP-001 | Existing `GET/POST /v1/books` + BFF `/api/books`; proposed owned `GET/PATCH/DELETE /v1/books/:id` | minimal allowed fields; 401/403/404 well-defined; no-store; 400 title validation; owner-only |
| IMP-002 | Proposed `GET/POST /v1/books/:bookId/chapters`, `PATCH .../:chapterId`, reorder transaction, notes | nest-chapter checks; stable ID; 409 conflicting reorder; non-destructive delete+confirmation |
| IMP-003 | `saveChapter({bookId,chapterId,expectedRevision,idempotencyKey,document,documentSchemaVersion})` | committed revision receipt `acceptedRevisionId,revisionNumber,documentHash,savedAt`; explicit `CONFLICT|DENIED|INVALID|UNAVAILABLE|UNKNOWN_TO_CLIENT` handling; exact schema/SQL decision pending |
| IMP-003 | Proposed `GET acceptedChapter + history`, draft recovery local state | server accepted vs local candidate separately represented; never optimistic Saved |
| IMP-005 | Proposed profile CRUD and candidate review endpoints | manual create/edit; candidate evidence linked to **accepted source revision** and **story time**; approve independently |
| IMP-006 | Proposed `GET /rules/catalog`, `PUT /rules/preferences`, effective preview | version-pinned certified source; account/book inherited scopes; no disabled rule |
| IMP-004 | Proposed import/export preparation, versioned backup manifest, restore/delete confirm | authorized streams, bounded size, loss report, clean restore and revocable scoped objects |
| IMP-007 | Proposed `POST /v1/ai/proposals` with author-controlled Continue/Rewrite | explicit excerpt/recipient/rules/cost consent; session-only BYOK supplied for that request; proposed plain text only |
| IMP-008 | Proposed `POST /v1/ai/proposals/:id/accept|reject`; undo with expected latest revision | transactional CAS; idempotent accept; compensating undo; proposal facts separate |

**HTTP 401 vs 403 vs 404:** choose a consistent resource-existence policy for guessed cross-owner IDs (often 404 externally to avoid enumeration), document it before tests; do not silently infer REST status from this blueprint. Use `409` only for genuine detected stale state and include safe expected/current revision metadata without leaking foreign manuscript. `Unknown after lost ACK` is **a client observation**, not proof DB rejected the commit. Request retries must produce same receipt when identical and never double-append.

### Chapter save atomicity and failure table

| Case | Required contract |
|---|---|
| Correct actor/book/chapter & `expectedRevision` | validate Tiptap JSON, commit accepted revision and advance current pointer in a **single transaction**, receipt only on durable success |
| Wrong actor/book/chapter | deny without data contents or accepted mutation; direct PostgREST also blocked |
| Stale expected revision / second tab | no overwrite, explicit recoverable conflict and current-version reference |
| Same idempotency key, identical payload and accepted outcome | same receipt, no duplicate revision |
| Same key but changed source/payload | explicit idempotency mismatch; no new write |
| Network drops after actual DB commit before reply | client marks **UNKNOWN**, resolves by server receipt lookup/replay, never “Saved” without confirmation |
| Invalid editor JSON / unsupported marks | predictable validation, preserve candidate and previous committed revision |
| Compensating Undo after intervening manual edits | refuse destructive inverse; author sees compare/reconcile |

**Order/revision coupling:** chapter reorder is not a manuscript-save update; do not tie identity to position. Valid accepted Tiptap schema/version changes require explicit migration/compatibility and historical document read support.

## 5. Story-time and canon proposal constraints

Distinguish narrative chapter display order from **in-story chronology**, including flashbacks; a fact has authored/confirmed `story_time`, not just insertion timestamp. A candidate citation requires exact accepted source quote and accepted chapter revision. Approved facts should be queryable `state_at(story_time)` without leaking later knowledge; ambiguity/rumor must remain labelled, not promoted to objective truth. If chapter content changes, evaluate citation staleness and flag affected approved author decisions rather than silently undoing them. Proposed human/AI extractor can surface candidates at review checkpoints, never write canon. Actual extraction model/method and quality threshold remain a later design decision; research fixtures are not proof of hallucination-free extraction.

## 6. Rule source/catalog decision checkpoint

Original guidance pack contains **260 immutable compact/expanded source records (130+130), 13 domains**. Owner's 2026-10-10 Wave 1–3 agreement subsequently accepted intended **134 logical control default policy** (130 expanded-primary ON, 4 semantically distinct compact AR extras OFF). **Remaining** before activation: verify private source-body/hash/aliases from actual corpus, approved license/hosting and rule description fidelity; define versioned activation manifest, import/rollback and measurable effective-selection test. Do not expose full private original corpus in public source or send all 130 expanded instructions to provider. Treat proposed `40 constitutional principles` feature as source-linked only where genuine source material supports it—do not invent additional texts.

## 7. Session/logout risk decision required before pilot

Existing Supabase guard verifies current user on each Nest call, and existing public books PostgREST grants scope by `auth.uid()`. **Research observed** signed-out, still unexpired JWT can sometimes read previously owned rows through **direct** PostgREST until expiry, bypassing Nest's live-session-aware checks. The owner allowed continuation of this as a *development-stage* limitation; no actual private manuscript pilot/public privacy guarantee is authorized.

**Planning recommendation (not selected):** for private manuscript/profile/Storage sensitive paths decide between a restricted Nest/DB live-session gate and a clearly disclosed token-expiry policy with additional controls; derive guarantees from tested direct PostgREST and logout outcomes. A strict immediate revocation promise needs real gate enforcement **including direct grants**; merely clearing browser cookies or an Auth session row is insufficient. Evaluate browser recovery on shared devices, link expiry, account deletion/retention, cached SSR responses and key transfer. Owner picks policy before feature data contracts are frozen for real private content.

## 8. Decisions for later owner/technical signoff

| Code | Open decision | First stage affected | Blocking strength |
|---|---|---|---|
| ARCH-01 | User/session direct-PostgREST private-data protection and exact logout promise | IMP-001 model; definitely private pilot | **BLOCKER for real manuscripts/pilot**, local synthetic scaffold okay |
| ARCH-02 | Final transactional create/reorder/save RPC, idempotency and schema version | IMP-002/003 | **BLOCKER for accepted data mutations** |
| ARCH-03 | Local recovery retention/encryption/shared-device disclosure | IMP-003 | **BLOCKER for recovery feature acceptance** |
| ARCH-04 | Private source pack delivery/activation manifest and versioned rules | IMP-006 | **BLOCKER for genuine Rules Studio** |
| ARCH-05 | Story-time representation, candidate extractor boundary, retraction semantics | IMP-005 | **BLOCKER for auto-candidate promotion claims**, manual profiles can start |
| ARCH-06 | Supported DOCX subset + backup archive/clean restore + retention | IMP-004 | **BLOCKER for portability acceptance** |
| ARCH-07 | Actual OpenRouter downstream route policy/key/consent/cost details | IMP-007 | **BLOCKER for provider enablement**, AI OFF remains functional |
| ARCH-08 | Production hosting/region, worker necessity, logging/legal ops | Private pilot/release | **BLOCKER for real data/launch**, not local synthetic build |

**Exit of PLAN-02 (planning deliverable, not code gate):** accepted stack preserved; domain responsibility/auth threats explicit; proposed API contracts and alternatives captured; high-risk decisions assigned to future spec/ADR tasks. No arbitrary service choice or executable migration approved.
~~~~~~

### `docs/plans/VEL-PLAN-03-UX-NAVIGATION-STATES-2026-10-11.md` @ `99d016a057617b71c0810bc04ea258449ab01cfb`

~~~~~~markdown
---
id: VEL-PLAN-03-UX-STATES-20261011-001
title: PLAN-03 — screen-route-state author journey UX implementation contract
type: proposed-ux-functional-handoff
status: proposed-planning-only
created_at: 2026-10-11
updated_at: 2026-10-11
owner: project_owner
version: 0.1.0
sources:
  - docs/design/VEL-DES-001-002-UX-HANDOFF-2026-10-10.md
  - docs/design/VEL-DES-002-JOURNEY-AND-STATE-MATRIX-2026-10-10.md
  - docs/design/VEL-DES-004-MAKE-LIVE-WALKTHROUGH-2026-10-11.md
  - docs/design/VEL-DES-005-FIGMA-ADDITIONAL-EDITABLE-SCREENS-2026-10-11.md
  - docs/design/VEL-DES-LOVABLE-INITIAL-CODE-REVIEW-2026-10-11.md
  - docs/requirements/MVP-USER-JOURNEYS-AND-ACCEPTANCE-2026-10-09.md
  - docs/plans/VEL-PLAN-02-ARCHITECTURE-DATA-CONTRACTS-2026-10-11.md
---

# PLAN-03 — Functional UX, navigation, states and cross-feature composition

This is **an implementation-state contract proposal, not a redesign or validated functioning app**. The editable master Figma file contains **16 known static editable frames** (2 A/B original alternatives, 4 unified candidates, 3 earlier expanded, 7 additions), NOT 16 tested app pages. The actual prototype Make walkthrough was **owner-supplied observation**; Lovable had **source-inspected** four defects, not a confirmed working integration. The Figma Library composite empty/populated inconsistency was owner-accepted for deferral to runtime conditional rendering. Minor visual polish may evolve while implementing; account leakage, loss of text, unsafe AI acceptance and missing keyboard access are **not** cosmetic.

## 1. Proposed navigation hierarchy

```text
Public/sign-in
  → Authenticated Library /books
    → Book workspace /books/:bookId (owner only)
      → Chapter manuscript /books/:bookId/chapters/:chapterId
         left: chapter rail / organizer
         middle: manual Tiptap editor
         right: Story Workspace inspector (optional drawer)
         toolbar: formatting, find, save status, history
      → Story Workspace /books/:bookId/story
      → Rules Studio /books/:bookId/rules
      → Export / backup / privacy for owned book
  → Author settings (account session, optional AI connection)
  → Contextual modals/drawers: unsaved navigation, save recovery,
      revision compare, fact review, AI consent, proposal review,
      export/delete confirmation
```

These paths are **candidates** except existing `/`, `/login`, `/books`, `/api/books`. Do not generate routes solely because pictured in Figma. Book ID/Chapter ID always scoped and access-checked; no sensitive content in URL query or preview caches.

## 2. Screen-by-screen implementable states

| View / proposed path | Master Figma reference | Runtime states & events | Negative / accessibility requirement | Implemented by |
|---|---|---|---|---|
| Sign-in `/login` | Existing web page; privacy context `15:791` | signed-out, credential errors, session checking, ready, sign-out, switch author | old-user content must disappear; error is not no-books | IMP-001 |
| Library `/books` | [`27:10`](https://www.figma.com/design/krXupCfSLUnOQxEOjIlp9U?node-id=27-10) | loading, empty ONLY when zero results, populated ONLY when >0 results, create busy/error, retry, 401 | do not show “No books yet” with real card; cancel prior-user fetch; focus/create keyboard | IMP-001 |
| Book organizer | [`27:44`](https://www.figma.com/design/krXupCfSLUnOQxEOjIlp9U?node-id=27-44) | create, rename, select, reorder, optimistic pending, persistence ack, delete confirmation | stable IDs, keyboard reorder, wrong-book denial; no silent draft drop | IMP-002 |
| Manuscript editor | [`15:558`](https://www.figma.com/design/krXupCfSLUnOQxEOjIlp9U?node-id=15-558), [`6:2`](https://www.figma.com/design/krXupCfSLUnOQxEOjIlp9U?node-id=6-2) | AI OFF, caret/selection, typing, rich marks, find, local undo, chapter switch, save states | real Bold response (Make defect); preserve IME/focus, never force key | IMP-003a/003b |
| Save/recovery/revision | [`6:47`](https://www.figma.com/design/krXupCfSLUnOQxEOjIlp9U?node-id=6-47), [`27:213`](https://www.figma.com/design/krXupCfSLUnOQxEOjIlp9U?node-id=27-213) | clean, dirty, saving, acknowledged, offline, **unknown ACK**, proven 409 conflict, local draft, compare, keep-both, reconcile | six labels are not recovery; explicit safe source comparison; no false Saved | IMP-003b |
| Story workspace | [`15:676`](https://www.figma.com/design/krXupCfSLUnOQxEOjIlp9U?node-id=15-676), [`27:179`](https://www.figma.com/design/krXupCfSLUnOQxEOjIlp9U?node-id=27-179) | no profiles, author-created characters/threads, editing, history, relevant context, pending changes | no account/book bleed of profile notes/fact status (observed Make defect) | IMP-005 |
| Fact-review inspector | [`6:148`](https://www.figma.com/design/krXupCfSLUnOQxEOjIlp9U?node-id=6-148), [`27:179`](https://www.figma.com/design/krXupCfSLUnOQxEOjIlp9U?node-id=27-179) | pending, edit, dismiss, approve, wrong quote, stale/retracted source, story-time ambiguity | accept AI prose ≠ approve canon; exact accepted quote; accessible evidence link | IMP-005/008 |
| Rules Studio | [`27:80`](https://www.figma.com/design/krXupCfSLUnOQxEOjIlp9U?node-id=27-80) | source cert pending, browse/search, enabled/disabled/restore, scope, personal add/edit, preview | mock 3 rules ≠ 134; disabled actual context exclusion, no cross-book settings | IMP-006 |
| Settings / BYOK | [`15:791`](https://www.figma.com/design/krXupCfSLUnOQxEOjIlp9U?node-id=15-791) | AI OFF, attach user key (free or paid), masked active session, route selection, disconnect/retest | no raw key in browser persisted store or logs; manual features independent | IMP-007 |
| Continue consent | [`27:113`](https://www.figma.com/design/krXupCfSLUnOQxEOjIlp9U?node-id=27-113) | selected valid **collapsed caret**, consent/context/cost preview, pending, proposal, cancel, stale/invalid | caret at offset 4 valid; no append-to-end; no silent full-book transfer | IMP-007/008 |
| Rewrite review | [`6:98`](https://www.figma.com/design/krXupCfSLUnOQxEOjIlp9U?node-id=6-98) | nonempty within-paragraph selection, compare, edit proposal, accept/reject, undo, stale refusal | no `-1` guessed range, detached DOM/cross-paragraph, or lost manual edit | IMP-007/008 |
| Export/backup/privacy | [`27:145`](https://www.figma.com/design/krXupCfSLUnOQxEOjIlp9U?node-id=27-145) | requested format, support/loss warning, progress, download receipt, restore preview, delete confirmation | no fake export or delete button; no other-owner data, no key in archive | IMP-004 |

**Screen completion requirement:** A static frame is sufficient design direction to begin a scoped approved task. Functional completion needs real UI behavior, proper dialog/focus, authorization, persistence and tests. Any unknown visual details are design backlog items, not generic blockers to local coding.

## 3. Author interaction / state transition contracts

### Library / account
`checking-session→loading→empty|populated|error|unauthenticated`. On auth identity change, clear or partition **all** account-scoped caches, pending requests and local context (books, chapters, profiles, facts, rules, proposals, recovery); late responses from A are ignored when B is current. On sign-out with unsynced draft, show an explicit retain/delete-on-device choice based on approved local-draft policy instead of silently destroying work.

### Editor / revision receipt
`confirmed_rev(N)→local_dirty(N)→saving(N)→confirmed_rev(N+1)|unknown_ack|conflict|retryable_error`. Browser-only draft remains advisory. `unknown_ack` can mean server committed but reply was lost; lookup/retry idempotently and disclose uncertainty until durable receipt. Recovery comparison must expose local/base/current source and keep-both/reconcile decision; do not use conflict label for uncertain ACK.

### Profiles / canon
Manual authored state is valid without extraction. After accepted draft boundary, candidate `pending→author_edit→approved|dismissed|stale`. Rejected/generated unaccepted prose never supports canon; after Undo/retraction, pending candidates become unapprovable and prior approved author decision becomes review-required rather than silently reversed. Every source has owner/book/chapter/revision exact quote and story-time context.

### Rules
Source package not certified→simulated clearly labelled, not genuine Rules Studio. Source certified→aliases/default inheritance→workspace and book overrides→visible exception→effective active subset. Disabled rule must remain absent from **entire** outgoing instruction context and cached summaries. Preserve actual corpus source body/variants.

### AI
`AI_OFF→key_session_only→action_with_valid_caret_or_span→consent_preview→pending→proposal_ready|failed|cancelled|stale→review_edit|reject|acceptCAS→compensatingUndoIfLatest`. Continue must permit a valid collapsed caret (offset 0 and 4 are test positions) and insert at the target; Rewrite only contiguous inside a paragraph. Every context/cost recipient disclosure precedes transfer. No model response mutates accepted prose or approved profiles by itself.

### Import/export/deletion
`request→validate ownership+format→show loss/retention warnings→author confirm→perform→receipt|error`. Backup `export→verify manifest→clean authorized restore→integrity compare` is not complete until actually restored. Deletion confirmation must explain local drafts/backup retention; no false immediate purge of separately retained copies.

## 4. UX composition rules and visual-defer policy

- Desktop-first manuscript column, chapter rail, context inspector; full-width UI not a requirement. Reuse restrained original design tokens, avoid replacing them wholesale with Lovable.
- Keyboard-first selectable action controls, visible focus and 44-ish pixel practical touch targets where feasible; screen-reader live announcements for save/AI and role/name for controls. Exact dimensions/contrast targets are **implementation/accessibility decisions**, not proven measured design compliance.
- Breakpoint examples 1440, 900, 390 are **test viewport candidates**; mockups don't prove mobile success. No mandatory mobile app.
- Provider/AI UI never captures typing focus unexpectedly or disrupts manual text selection. Model key entered only when requested, not onboarding blocker.
- UI and engineering align on what “Saved,” “Approved canon,” “Export complete,” “Account deleted” mean; no simulated success badges in actual app.
- **Prioritized defects from prototype evidence:** Make's cross-persona profile/fact leakage and collapsed-caret rejection; Lovable's append-at-end Continue, unsafe rewrite selection, orphan facts after Undo and mismatched source quote; Make's non-responsive Bold and missing recovery actions. These become explicit regression cases. Some Make UI safeguards are reviewer-observed local only, not production proof.

## 5. Implementation-ready design minimum for a future Cursor task

1. Source-specific author journey and scope M1–M8.
2. Existing master Figma frame or clearly documented interaction where no frame exists; no pixel-perfect signoff required.
3. Functional happy, empty, loading, error, unauthorized, stale, cancel and recovery states **as relevant to the slice**.
4. Keyboard/focus/ARIA behavior for affected controls.
5. Data owner, revision, idempotency and destructive-change semantics.
6. Acceptance test mapping to journey/ACC and negative cases; do not treat Figma screenshot as test.
7. A separate scoped owner code authorization after planning and Cursor setup.

## 6. PLAN-03 disposition

**Planning coverage complete:** all twelve route/view families and the major cross-feature state transitions are specified at a **candidate implementation level**. **Not completed:** actual Figma variant edits, real accessibility audits, browser tests, and release-quality responsive QA. Those belong to implementation and validation, not a blocker to planning review.
~~~~~~

### `docs/plans/VEL-PLAN-04-TEST-SECURITY-RECOVERY-2026-10-11.md` @ `d95dd6f53395ed41495651816ac1c00a83799102`

~~~~~~markdown
---
id: VEL-PLAN-04-TEST-SECURITY-20261011-001
title: PLAN-04 — integrated testing, threat model, data recovery and release-risk strategy
type: proposed-validation-and-security-contract
status: proposed-planning-only
created_at: 2026-10-11
updated_at: 2026-10-11
owner: project_owner
version: 0.1.0
sources:
  - docs/requirements/MVP-USER-JOURNEYS-AND-ACCEPTANCE-2026-10-09.md
  - docs/specs/VEL-SPEC-001-CHAPTER-SAVE-CONTRACT.md
  - docs/research/K2B-SESSION-AND-MANUSCRIPT-EXPOSURE-2026-10-09.md
  - docs/research/OPTION-B-WAVE03-R15-K2B-MANUSCRIPT-PRIVACY-2026-10-10.md
  - docs/research/OPTION-B-WAVE06-R18-RELIABILITY-RECOVERY-2026-10-10.md
  - docs/research/OPTION-B-WAVE02-R11-DOCX-AND-PORTABLE-RESTORE-2026-10-10.md
  - docs/research/OPTION-B-WAVE04-R08-R21-PROVIDER-PRIVACY-COST-2026-10-10.md
  - docs/plans/VEL-PLAN-02-ARCHITECTURE-DATA-CONTRACTS-2026-10-11.md
---

# PLAN-04 — Test, security, reliability, backup, privacy and release evidence

## 1. What is a test and what is only evidence planning?

All `ACC-M1-01..M8-05`, `NEG-01..` and JRN-001..011 have their status **NOT_RUN for the future integrated MVP unless current exact application execution proves otherwise**. Repo historical research/CI reports document their original code SHA and bounded fixture, not a current production/security PASS. The Make owner's live walkthrough is externally reported synthetic test evidence; Lovable findings were code-inspected, not live functional tests. This PLAN-04 creates no CI run and no real data/pilot authorization.

**Evidence tiers:**
- `DOC_SPEC`: accepted/proposed written expectation, no execution.
- `STATIC_SOURCE`: inspected committed source with exact SHA; code presence != behavior.
- `SYNTHETIC_RESEARCH`: bounded prior test of isolated algorithm/fixture; never promote as application PASS.
- `LOCAL_INTEGRATION`: actual signed-in disposable Supabase/Postgres + Nest/Next interactions at exact commit.
- `BROWSER_E2E`: actual browser actions on built app, with source code/revision/browser identified.
- `AT_HUMAN`: genuine keyboard/IME/screen reader and consenting author observations (include platform, no invented participants).
- `PILOT_OPERATIONS`: protected private deployment, isolated real-author consent, clean restore and incident verification.
Use `PASS`, `FAIL`, `BLOCKED`, `NOT_RUN` per case. Record exact command, exit/result, fixtures, actor, environment, SHA, and reproducible expected/actual.

## 2. Cross-layer test levels and future commands

| Layer | Planned tests | Primary owners | Scope/limits |
|---|---|---|---|
| Unit/contract | validator/owner bounds, Tiptap serialization/marks, state machines, rule selector, story-time resolution, import conversion, consent/selection and idempotency | Cursor feature slice | pure fixtures, no backend PASS |
| API/contract | Next BFF 401/503, Nest Auth/RLS, input schemas, 400/409/404/429 mappings, authorization probes, error redaction | feature backend PR | real signed in local disposable Auth when required |
| DB/integration | Auth/DB/Storage as applicable, Alice/Bob cross-owner, SQL transactional CAS, concurrent save, retry/revision receipts, source provenance, backup manifest/restore | data/integration PR | live disposable local Supabase; no production services |
| Browser E2E | Library, chapter changes, manual Tiptap editing, offline/reopen, session switch, fact review, Rule toggle, AI proposal lifecycle, export/delete confirmation | each UI PR and VAL-001 | Chromium first, explicit other agreed browsers later |
| Adversarial/security | direct PostgREST with logged-out still-valid JWT, guessed nested IDs, BFF cache/session, stolen link, payload/ZIP, provider prompt injection | security review | no real unpublished manuscripts |
| Accessibility/human | keyboard-only, focus, screen reader, IME composition, RTL, narrow/mobile/tablet, consenting story task studies | validation stage | automated axe-type tools are not a substitute for actual AT |
| Recovery/ops | lost ACK, two tabs, local draft, DB/Storage/Auth clean restore, migration rollback, incident drill | validation/pilot | exact synthetic fixture and actual restoration proof |

Before running future commands, inspect root `package.json`: presently `pnpm check`, `pnpm build`, `pnpm dev:web`, `pnpm dev:api` and Supabase CLI scripts exist, **but a root `pnpm test` command is not declared**. Feature PRs must explicitly create/invoke focused tests without fabricating a nonexistent root runner. Destructive `pnpm supabase:reset` requires a verified disposable DB and separate owner permission. Existing Docker/port status is NOT CHECKED in the planning phase.

## 3. Threat model and per-feature safeguards

| ID | Threat / observed source basis | Required control / future negative test | Gate |
|---|---|---|---|
| SEC-01 | **Known** signed-out, unexpired JWT may still read private books via direct PostgREST despite client sign-out | Test old token direct PostgREST after local/global sign-out, blocked/restricted sensitive routes or honest TTL policy; explicit owner security decision, no false immediate revocation | Critical before private manuscripts |
| SEC-02 | UI state of Writer A displayed under Writer B in synthetic Make profiles/facts; current library client can retain prior results on errors | Partition/clear client caches and late promises on identity change; A→B→A across books, profiles, facts, rules, proposals, local drafts | IMP-001 and each new feature |
| SEC-03 | Guessed book/chapter/profile/fact/revision IDs | Nest owner & book check plus direct PostgREST/Storage policy; no unauthorized data leak on 404/403 | Every data PR |
| SEC-04 | Service-role used for normal author requests | Keep author JWT and RLS for routine author query; privileged operations only explicitly constrained and never browser-exposed | Every DB/API PR |
| SEC-05 | SSR cookie/session mismatch or caching | Verify `getUser`, refresh/cookie behavior, no-store private responses, CSRF, tab switching and prefetch under two accounts | IMP-001 and pilot |
| SEC-06 | BYOK key, manuscript prose or prompt logged/exported | session-only masked key; no URL/localStorage/DB/backups/analytics; scrub request/exception logs; transport TLS | IMP-007 + pilot |
| SEC-07 | External model receives more content than author approved | exact preview of excerpt, approved book canon, relevant enabled rules; explicit recipient/route/cost consent; no default provider or hidden fallback | IMP-007 |
| SEC-08 | Imported malicious DOCX, HTML, source prompt injection or ZIP traversal | parse bounded supported subset, sanitization/size/path checks, original preservation, treat prose and extraction as *data* not developer instructions | IMP-004/007 |
| SEC-09 | Stale generation overwrites manual edit or shifts range | server CAS + exact revision/range/source anchor; reject stale, cross-paragraph, orphan `-1`, wrong book/persona | IMP-007/008 |
| SEC-10 | Author-approved canon silently mutated from generated text | independent fact review, exact quote, separate source/decision, story-time; source-reversal state after Undo | IMP-005/008 |
| SEC-11 | False Saved or accidental loss under network interruption | immutable server receipts and idempotency, uncertainty after lost ACK, local candidate recovery and compare/keep-both | IMP-003b |
| SEC-12 | Export/backups/deletion leaks or retains content secretly | scoped manifest and clean restore, private Storage links/expiry, tested deletion with honest backup retention | IMP-004 + pilot |
| SEC-13 | Unsafe retry generates duplicate provider charges or unlimited server proxy | bounded rate/usage gate, recipient/cost display, no auto-retry, explicit failure state | IMP-007 |
| SEC-14 | Accessible UI mislabels status or loses keyboard focus | real keyboard, AT, IME and viewport checks for writing, save, fact review, rules, consent, export and error states | Each UI slice + VAL-001 |

**The signed-out JWT issue is a prior bounded local research finding, not invented by this planning document, and not production penetration-test evidence.** Current architecture has both Nest bearer checks and direct PostgREST access path; risk must be evaluated at the correct boundary rather than assuming Nest guard solves direct grants.

## 4. Durable manuscript loss/recovery matrix

| Scenario | Expected observable behavior | Future evidence |
|---|---|---|
| Commit acknowledged | Saved only after committed revision id/hash returned and reopen matches | DB transaction + browser reopen |
| Save request fails before commit | Dirty/local candidate retained, explicit retry/error, no new accepted revision | injected transport failure |
| Server commits but ACK is dropped | UI shows UNKNOWN (not failed/not saved); retry/idempotency/receipt lookup detects actual accepted revision | controllable proxy failure |
| Two tabs edit same base revision | exactly one winning CAS, other visible conflict/compare; never silently overwrite | two real browser tabs + DB records |
| Duplicate idempotency key | identical replay returns original receipt; different payload same key rejects | SQL/API repeat tests |
| App reload/offline | local candidate reappears for correct account/book/chapter; user compares to server | browser reload, offline devtools |
| Navigation while dirty | no implicit discard; draft/recovery choice | click chapter and route away |
| Account change on shared device | local draft retention/deletion policy applied visibly; no foreign user draft shown | A→B→A fixture |
| Undo accepted AI then later human edit | refuse destructive undo or show reconciliation; no later prose loss | CAS+history test |
| Full project restore | Auth+DB+Storage references and source/profile/rule state reconstructed within declared scope | isolated clean restore exercise |

“Zero known data loss” means **no failure in actually executed defined cases**; it is not a guarantee that no bug can ever exist.

## 5. Portability and provider-risk acceptance

**DOCX/TXT:** research found a real Calibre DOCX→EPUB→DOCX round trip lost Heading styles (0 of 3 survived) despite preserving text. A separate bounded direct-semantic-DOCX research path preserved tested headings/marks but was *not integrated*. Select supported feature matrix (paragraphs, Heading1–3, bold/italic/strikethrough, basic lists, Unicode, empty paragraphs as negotiated); characterize Word metadata, comments, tables, page layout and RTL as unsupported or further-tested—not falsely guaranteed. Import non-destructively with visible loss report before commit.

**Backup:** a saved exported archive is **not** a demonstrated backup until clean restore. Versioned manifest should declare included accepted revisions/chapters, manual approved Story Profiles, rule preferences/author-created rules, schema version, hashes, storage/linked objects and excluded secrets. Test corruption/tampering, too-large ZIP, collision, foreign ownership and clean account reconstruction. Deletion/retention must account for local drafts, provider records, exported copies, backups and Storage links. A clean Auth+DB+Storage *operational* restore is distinct from author book ZIP restore; both must be tested before pilot.

**Provider:** selected OpenRouter-first user BYOK free or paid does **not** mean every downstream route has the same retention/terms/cost/region. Prior policy review was 2026-10-10; re-verify actual route, model availability, ZDR/logging policy, rights, Ghana account, cost limits before enabling real inference. No real manuscript or paid inference authorized in planning. If privacy policy cannot be met, keep provider route disabled without affecting manual writing.

## 6. Privacy, legal and author validation gates

Proposed stages:
- **Local feature PR:** synthetic fixtures only, exact unit/integration/browser tests for included functionality and negative owner cases.
- **Integrated internal candidate:** all M1–M8 and JRN-001..011 runnable; unresolved critical issues logged; full restore and no false save/canon/instruction leak.
- **G_PRIVATE_PILOT:** verified private-path auth/session/Storage exposure, real key/provider terms, author consent and privacy notice, retention/deletion and clean operational restore, reasonable rollback/incident runbook. Explicit owner gate.
- **Pilot evidence:** consenting real fiction authors perform meaningful writing/edit/canon/rules/export tasks in protected environment; observe actual confusion/failures; no invented participants, sample sizes, benchmark scores or unapproved target numbers.
- **G_RELEASE:** resolved critical privacy/data-loss/false-save/auto-canon defects, actual JRN passes, accessibility and author evidence, managed hosting/security/legal/backup operations, explicit owner approval.

## 7. Planning quality exits

- [x] Threat ledger including direct-PostgREST and key/source leak paths.
- [x] Real/no-run evidence taxonomy and source-specific test levels.
- [x] Recovery/lost ACK/two-tab, author-account, provenance and rule selector negative matrices.
- [x] DOCX/backup/privacy/provider gate and user validation expectations.
- [ ] Actual integrated tests: NOT_RUN (not permitted while planning).
- [ ] Provider contract/legal/security decisions: still pending, intentionally assigned to relevant slice/pilot.
- [ ] Real manuscript trial: NOT AUTHORIZED.

PLAN-04 is **planning-complete as a proposed test/security blueprint**, not security certification, privacy-law legal advice or owner acceptance of all policy trade-offs.
~~~~~~

### `docs/reports/VEL-PR68-RECONCILIATION-0039-DECISION-PACKET.md` @ `79ec346fe20dcf65c62db8f2e90140435b4e15ee`

~~~~~~markdown
# Reserved security-sensitive decisions — PR68 reconciliation

## FACT: authority and source
This packet requests no immediate action and records no new approval. The one-time repository remediation delegation excludes hosted Supabase access, including read-only inventory, CLI authentication, dry runs, migration execution and real/private manuscript use. The third migration definition is approved for planning only; that is not reviewed-base SQL-path authority. No such authority file is installed by Task0039.

Historical expected target is vellistry-dev. Its current identity, state, history and privileges have not been queried. The owner must explicitly confirm the intended project before any separately authorized connection. No credentials belong in the approval record or repository.

Exact source references, all at PR68 cbb379fa4a4eaa9f576f3abcce2c2258d22cc551:

| File | Git blob | SHA256 |
|---|---|---|
| supabase/migrations/20261009000000_initial_author_books.sql | 192a736d1a5d6ffc6f239c74ed61e7b8d2528b3b | 315e6a29f8072d4f556729784c07d4bf121666ef385b9cea4dfda36fded5ff74 |
| supabase/migrations/20261009010000_restrict_accepted_manuscript_dml.sql | 0670a60f1c2e299e9771b9af1c677d97712174d9 | 6786561dcb325e14adbadec7b3bf879b8ab769841c86bf790dfbd2f19c222a65 |
| supabase/migrations/20261015171325_restrict_book_privileges.sql | 230b1540bb5b8962fd2b797d4f8a467d3c035978 | c7c384b6192d31e4e17c4f6e00978a16a4e15e2feeacfe148aaf1e2cd2853e81 |
| tests/book_privileges_regression.sql | 5feac95772f93330b29150dbc135d766e7b0392e | bcba9b788151d27ee354f41aa658398f1ed0cbfe86cf0d97f7ae685cb0c54e6b |

The retained disposable PG17 proof is run39135149678 at098ab06a40a84eaba5880223f02e80fab3bf9e86, PostgreSQL17.11. BEFORE used explicitly injected broad grants and failed as expected; AFTER the unchanged proposal passed48ACL checks and supplemental RLS/forged-owner/forbidden-operation probes. Artifact ZIP SHA256d426612fbb1197e8e80b8b5a7cd8cfa97e24c2307af3fe786485cf0e416fbf62 and result SHA256fb1fefddde801315d661a6248d138473d0bb2ae9b525f2033c9b8c9d1f3f25cf are retained on main. These synthetic facts do not describe current hosted default grants.

## PROPOSAL: separate decisions, no automatic progression
1. **Repository SQL-source adoption:** owner reviews the exact third migration and fixture hashes and authorizes their exact paths through the existing reviewed-base mechanism. A new Task/immutable pack and distinct review/CI are required. This decision alone authorizes no hosted operation. Changed bytes need another review.
2. **Target and read-only inventory:** authorize the named development project and exact read-only observations: migration history/version ordering; books ownership and RLS/FORCE flags; table/sequence/schema/default privileges; PUBLIC,anon,authenticated and inherited memberships; privileged-role preservation; SECURITY DEFINER functions; Data API exposure and actual application transport. Record sanitized facts and detect drift before proposing execution. No unrelated schemas,Vault,seed/reset or role changes.
3. **CLI authentication and reviewed dry run:** separately authorize secure local authentication and target linking without recording credentials, followed by the exact three-version dry run. Stop for unknown history, conflicting versions, extra SQL or unexpected target. No push/reset follows merely because dry run succeeded.
4. **Migration execution:** authorize the exact target, source hashes, ordered versions and preconditions after review of the real inventory/dry-run evidence. Define a maintenance/rollback decision before execution: preserve schema/ACL/history evidence and an independently recoverable backup, stop on unexpected changes, and review any compensating privilege statement against the actual pre-state. Do not blindly restore excessive grants, drop tables, reset history or alter unrelated objects. Verification and rollback are distinct from deployment.
5. **Disposable hosted acceptance fixtures:** separately authorize exactly two synthetic Auth users and their owned test books, the minimum test credential access, permitted CRUD/RLS/forged ownership/TRUNCATE/REFERENCES/TRIGGER probes and explicit cleanup. Identify only owned fixture IDs; retain sanitized outcomes, not tokens,passwords or manuscripts. Prove cleanup rather than infer it from a script exit.
6. **Signed-out JWT and private-pilot boundary:** the grant correction does not revoke an already issued JWT. Existing disposable experiments demonstrate residual direct Data API access after logout. Before private-author data, choose and test a mitigation or explicitly approve a bounded residual-risk policy. A private gateway/session-check experiment is research evidence, not an implemented production transport or owner-approved security boundary. Private pilot stays NO-GO.
7. **Release/deployment:** production target, operations, monitoring, backup/recovery and release acceptance require separate owner authorization. Neither repository merge nor a development acceptance run opens G_RELEASE.

## INTERPRETATION and current disposition
Repository-only review and source preservation can finish while these external gates remain closed. Closing the obsolete PR68 integration branch as superseded does not approve its SQL or complete hosted Issue67/63 acceptance. Preserve its exact source branch and references for a future scoped decision. No current cloud state, migration execution, Auth fixture or private-pilot approval is inferred.
~~~~~~

## Execution reporting
Return an ExecutionBundle with FACT / INTERPRETATION / PROPOSAL sections,
tests actually performed, changes, evidence gaps, and pending owner approval.
