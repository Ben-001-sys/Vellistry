---
id: VEL-CP-0042
title: 'Context for VEL-TASK-0042: Final bounded recovery, reconciliation and remediation
  closure'
type: context-pack
status: prepared
created_at: '2026-10-22'
version: 0.1.0
task_id: VEL-TASK-0042
base_commit: 63105185054d991b8a659e6ccd531c0b7dee74f8
task_blob_sha: ff0890ebfdab0fb6973412523bc158b96eac83c1
inputs:
- path: PROJECT-CONSTITUTION.md
  role: governing-source-and-evidence
  git_blob_sha: 61f79c4dcb47bd99291c16490e8c00692e2ab23b
  source_status: accepted
- path: AGENTS.md
  role: governing-source-and-evidence
  git_blob_sha: 503905f6d817da8aa50e7c2dbb1c2f2be1ca9c93
  source_status: active
- path: docs/agent-workflow/PR-COMPLIANCE.md
  role: governing-source-and-evidence
  git_blob_sha: 5f4845623aef3abb15fba7fbe8e78474902cca00
  source_status: unrecorded
- path: docs/agent-workflow/authorizations/VEL-REM-INTEGRATION-20261019.yaml
  role: governing-source-and-evidence
  git_blob_sha: 8023094b20f65e44b6ea6a002f4e2808b3e92be6
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0042/OWNER-SCOPE.md
  role: governing-source-and-evidence
  git_blob_sha: 36c865a7d7c9f969094648d204abadce3a7b73be
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0041/ORIGINAL-CHECKLIST.md
  role: governing-source-and-evidence
  git_blob_sha: 9d11d06da304fb0db37192708c763e99e65e0035
  source_status: unrecorded
- path: docs/reports/evidence/VEL-RECOVERY-PROOF/dependency-closure.json
  role: governing-source-and-evidence
  git_blob_sha: 9793895dd1d89fc33e7e543e5651dfcfb15c8aa0
  source_status: unrecorded
- path: docs/reports/evidence/VEL-INTEGRATION-0031/REPRODUCE.md
  role: governing-source-and-evidence
  git_blob_sha: 68afc126085e07925010de5b66f7f9170b77cb96
  source_status: unrecorded
- path: CURRENT-STATE.md
  role: governing-source-and-evidence
  git_blob_sha: 1986ad9f0d02acf1cfca2ed1b51f60f3fc0b51af
  source_status: active
source_gaps:
- id: EXTERNAL
  limitation: SRC004 missing; fresh independent filesystem execution blocked; LevelB
    owner acceptance unset; SQL planning-only and hosted/private/release gates remain
    excluded
- id: FINITE_BACKUP
  limitation: Backup cut cannot include its own future evidence/report commit; final
    integration is separately attested by exact-head CI and post-main PR ledger
prepared_by: agent_workflow.py
---

# VEL-CP-0042 — Final bounded recovery, reconciliation and remediation closure

## Objective
Verify a dependency-closed repository backup at the PR106 merged cut, reconcile all44 acceptance rows and live issues, and integrate a final readiness report with precise external blockers and conditional delegation closure.

## Scope
**In:** AGENTS.md; README.md; PROJECT.md; SOURCE-OF-TRUTH.md; CURRENT-STATE.md; docs/agent-workflow/README.md; docs/agent-workflow/IMPLEMENTATION-OPERATING-MODEL.md; tests/test_governance_entrypoints.py; tests/test_remediation_ledger.py; docs/agent-workflow/tasks/VEL-TASK-0042.yaml; docs/agent-workflow/context-packs/VEL-CP-0042.md; docs/agent-workflow/execution-bundles/VEL-EB-0042.md; docs/agent-workflow/inputs/VEL-TASK-0042/*; docs/agent-workflow/PR-COMPLIANCE.yaml; docs/agent-workflow/authorizations/VEL-REM-INTEGRATION-20261019-CLOSURE.md; docs/reports/VEL-MASTER-REMEDIATION-LEDGER.md; docs/reports/VEL-REMEDIATION-COMPLETION-0042.md; docs/reports/evidence/VEL-COMPLETION-0042/*
**Out:** Application, SQL, CI workflow, dependencies, repository settings and accepted decision semantics; Hosted/auth/private manuscripts/paid services/deployment/newMVP; Historical ContextPack or original source rewriting; fabricated acceptance or premature programme completion

## Evidence and authority constraints
The text below is a readable rendering of pinned Git blobs; exact raw bytes remain recoverable from the recorded commit/blob SHAs. Recorded source statuses remain in force: draft research is not accepted requirements. Original unarchived uploads are not independently verified merely by being mentioned.

**Known source gaps:**
- EXTERNAL: SRC004 missing; fresh independent filesystem execution blocked; LevelB owner acceptance unset; SQL planning-only and hosted/private/release gates remain excluded
- FINITE_BACKUP: Backup cut cannot include its own future evidence/report commit; final integration is separately attested by exact-head CI and post-main PR ledger

## Permissions and acceptance
**Allowed:** Read Git/GitHub, preserve exact evidence; use owned local bare/working clones for backup restore and corruption tests, Run existing focused/governance/source checks and frozen tooling setup/build in owned restore; no hosted services, Reconcile current ledger, documentation, issue/PR dispositions and conditional closure under existing delegation
**Owner approval required:** Allreservedhosted/SQL/private/securityacceptance/settings/paid/featureactionsremainexcluded; ActualdistinctreviewandapplicableCI;nohumanacceptancefabrication
**Acceptance criteria:**
- All44 original acceptance blocks unchanged; no false hosted/owner/fresh-agent acceptance
- Backup restores current cut and mandatory historical pins; all commands/exits/hash results preserved; secrets excluded from source selection
- Only authorized documentation/evidence/tests paths change; historical packs and evidence unchanged
- Review and actual CI pass before merge; delegation closure takes effect only after final post-main PASS and factual external-blocker disposition

## Deliverables
- Committed task and immutable ContextPack before edits
- Owned isolated bundle assembly, restore/GC/fsck, all pinned commits and exact archives; negative corruption evidence; no owner worktree cleanup
- Final44 ledger preserving original acceptance, complete live PR dispositions and issue outcomes, factual metrics and bounded secret inventory
- Final report, conditional delegation closure, EB, distinct final-head review, ready CI and exact merged-tree/post-main checks

## Pinned source snapshots
Git commit: `63105185054d991b8a659e6ccd531c0b7dee74f8`. Read source statuses independently from task intent.

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

### `AGENTS.md` @ `503905f6d817da8aa50e7c2dbb1c2f2be1ca9c93`

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

### `docs/agent-workflow/authorizations/VEL-REM-INTEGRATION-20261019.yaml` @ `8023094b20f65e44b6ea6a002f4e2808b3e92be6`

~~~~~~markdown
id: VEL-REM-INTEGRATION-20261019
type: one-time-owner-delegation
status: owner-delegated
title: One-time owner delegation, 19 Oct 2026, remediation-only
received_on: '2026-10-20'
mandate_date: '2026-10-19'
executor: Codex
owner: project_owner
authority:
  kind: direct-owner-message-adopting-exact-attached-mandate
  archive: docs/agent-workflow/inputs/VEL-TASK-0025/UPDATED-MANDATE.md
  sha256: 8129384277fe67f3490fd29955e78ded028c035d1dbf43b468b69bf75815e35c
  github_index: https://github.com/Ben-001-sys/Vellistry/issues/71
  github_index_is_human_review: false
  retroactive: false
program: VEL-REM-001
existing_prs:
- 65
- 68
- 83
- 84
- 85
- 86
- 87
- 88
- 89
eligible_successors: Only unique owner-mandated remediation amendment/integration
  Tasks linking actual predecessor exact sources; no new MVP feature scope.
allowed_operations:
- Repository-only remediation decisions and scoped corrections
- Mark eligible PR ready; obtain actual distinct trusted Codex review and ready-event
  CI
- Serial merge/closure/supersession after all objective gates; verify merged tree/postmerge
  CI
- Reconcile ledger/current state/issues; do not manufacture acceptance
merge_gates:
- Actual live main/head/base and conflict reconciliation
- Unique authorized bounded Task; immutable pre-edit ContextPack; factual complete
  EB
- Original authorship/source snapshots/historical evidence preserved
- Genuinely separate trusted review process/context at final exact head; selfreview/same-session
  advice not signoff
- Actual ready pull_request event all applicable gates PASS at exact head, not only
  draft/workflow_dispatch
- No unresolved P1/P2/security findings or unexpected workflow/SQL scope
- Use provenance-preserving merge; merged tree matches reviewed source; successful
  postmerge main CI before dependent integration
forbidden_actions:
- hosted Supabase including read-only/auth/dry-run/migrations/Authfixtures
- credentials/private manuscripts/paid model calls
- billing/account/security/protection settings/deployment/production
- new IMP-002/IMP-003A/IMP-003B or other MVP features
- waiving security/private-pilot/release or independent review gates
- retroactive authority/immutable pack rewriting/unrelated future merges
default_task_exclusions_unchanged:
- hosted
- production
- private-manuscripts
- paid-services
- admin
- merge
default_policy_changes: false
integration_is_separate_owner_delegated_operation: true
review_channel: Existing trusted Codex only; owner declined CodeRabbit on2026-10-20
expiry:
  program_completion_or_formal_closure: true
  conservative_implementation_cutoff: '2026-11-01'
  earliest_condition_ends_authority: true
  future_feature_authority: false
limitations:
- Record captures actual owner instruction; file/hash/staticCI cannot authenticate
  human/GitHub identity
- No hosted execution or new SQL-content approval; exact planning-only thirddefinition
  remains separately gated
- No guarantee review/runtime/access available; unmet actual gates block individual
  integration
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0042/OWNER-SCOPE.md` @ `36c865a7d7c9f969094648d204abadce3a7b73be`

~~~~~~markdown
# Owner-dispatched final bounded remediation

The owner explicitly continued Task0041 integration and all remaining recovery, issue reconciliation and final44-item readiness work under the archived19October one-time delegation. PR106 merged23fd8488df060e1591be70232abd70f4255e814d; post-main39868833625 is pending at task creation and must pass before dependent integration/PR83 closure. Task0042 adds no application/SQL/CI feature or standing policy. Preserve historical evidence and original44criteria. Exact final-main attestation is external to its self-referential report commit. Close delegation only after required final gates, retaining genuinely external blockers. No hosted access, private data, paid calls, settings or new MVP.

Original current ledger remains pinned at23fd8488df060e1591be70232abd70f4255e814d:docs/reports/evidence/VEL-CURRENT-TRUTH-0041/ledger.json. The first pack generation rejected embedding it above35000bytes; no pack or implementation existed. Read that exact Git source separately; original checklist is embedded.
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0041/ORIGINAL-CHECKLIST.md` @ `9d11d06da304fb0db37192708c763e99e65e0035`

~~~~~~markdown
# Vellistry — Agentic Coding Remediation Checklist

44 items. Item 44 is a critical new control added after the coordinator-role breach; items 1–43 preserve the original checklist wording and numbering.

[ ] 01. Restore GitHub Actions execution
   Resolve the account payment/spending-limit restriction reported in PR #68's execution evidence. Rerun the failed workflows at their exact commit SHAs; do not classify runner-start failures as code-test failures.

[ ] 02. Complete the Codex-primary governance transition
   Review and integrate ADR-0008 in PR #66 after applicable verification. Ensure the effective default workflow is ChatGPT coordinator → Codex implementer → independent review → owner approval, with Cursor retained as an optional alternate.

[ ] 03. Resolve competing implementation PRs
   Decide how to supersede or close the ChatGPT-authored PR #65 after reviewing its reuse in Codex PR #68. Preserve authorship and cherry-pick provenance. Do not blindly merge both branches.

[ ] 04. Independently review Codex PR #68
   Inspect actual code, SQL, test fixtures, task permissions, evidence and changed paths. Verify that its new Phase B work is separately authorized and reviewed, rather than accepting the Codex report alone.

[ ] 05. Verify the database privilege defect
   Run the proposed PostgreSQL 17 regression on an isolated disposable database. Confirm the original books-table privilege behavior and prove that the proposed grant correction removes inappropriate TRUNCATE and other excess privileges.

[ ] 06. Approve the additional privilege-hardening migration
   Obtain an explicit owner decision for the newly proposed third SQL migration. Earlier authorization for the original two migrations does not automatically approve a new one.

[ ] 07. Establish safe hosted migration access
   Authenticate the Supabase CLI securely, verify the exact vellistry-dev target, preserve correct migration versions/history, perform a reviewed dry run and exclude unrelated Vault, roles, seed and reset operations.

[ ] 08. Run authorized hosted development acceptance
   After approval and successful isolated SQL verification, apply the reviewed migrations and test two disposable authors, book persistence, account isolation, forged ownership, RLS and prohibited operations. Clean up fixtures.

[ ] 09. Resolve the signed-out JWT security risk
   Test whether an unexpired access token can still read private data directly through PostgREST after sign-out. Choose and verify a mitigation or explicitly approved security boundary before any real private-manuscript pilot.

[ ] 10. Complete exact-head and merged-main verification
   Only merge reviewed work after applicable checks actually execute. Verify the final merged file tree and rerun or inspect post-merge checks. Record remaining NOT_RUN/BLOCKED conditions accurately.

[ ] 11. Make CURRENT-STATE.md genuinely current
   Create a compact authoritative current snapshot. Move dated detail into historical records without deleting evidence; eliminate obsolete statements presented as current.

[ ] 12. Reconcile repository entrypoints
   Update AGENTS.md, README.md, PROJECT.md, SOURCE-OF-TRUTH.md and affected setup documents to reflect merged architecture, hosted Supabase, and the Codex role.

[ ] 13. Separate current truth from historical truth
   Clearly distinguish accepted decisions, active implementation, unmerged proposals, earlier decisions, synthetic results and archived experiments.

[ ] 14. Create one authoritative onboarding entrypoint
   A newly connected agent should be able to locate the current SHA, effective instructions, active tasks, accepted ADRs, security holds and task-specific context without reading the entire archive.

[ ] 15. Repair contradictory approval and gate states
   Reconcile G_DESIGN, G_CODE, G_PRIVATE_PILOT and G_RELEASE with explicit owner-approved individual task exceptions. Approval of one slice must never be misrepresented as global product approval.

[ ] 16. Finish original research-source preservation
   Archive or provide immutable, access-controlled retrieval references for SRC-001 through SRC-004; verify hashes and reference the actual original bytes, not only research summaries.

[ ] 17. Strengthen source-to-requirement traceability
   Keep original user intent, research findings, proposals, accepted requirements, feature IDs and test evidence separate. Fix missing or ambiguous links.

[ ] 18. Maintain ADR lifecycle and supersession
   Reconcile proposed/accepted/implemented states, dated owner approval, alternatives, implementation references and explicit supersession without rewriting historical decisions.

[ ] 19. Reduce documentation duplication
   Keep one canonical location per current fact or contract. Use links and generated indexes rather than copying full explanations into many plans, reports and agent prompts.

[ ] 20. Make formal handoffs the normal coding path
   Require a unique task and ContextPack for consequential coding tasks, plus a traceable ExecutionBundle afterward. PR #68 demonstrates the mechanism; make it standard for future work.

[ ] 21. Prevent task-scope drift
   When new approval extends a task—such as Phase B after the Phase A-only VEL-TASK-0005—record an approved amendment or create a newly pinned task/ContextPack. Never silently reuse the original permission envelope.

[ ] 22. Standardize task acceptance and permissions
   Every task should contain a bounded objective, source revision, dependencies, allowed paths/actions, forbidden operations, positive and negative tests, owner checkpoints and clear completion criteria.

[ ] 23. Make agent identity and code provenance reliable
   Record which tool/model actually performed each action. Preserve original authorship when cherry-picking or adopting code produced by ChatGPT, Codex, Cursor or another contributor.

[ ] 24. Enforce branch and worktree isolation
   One assigned executor per task branch, verified starting SHA, preserved local changes, no silent branch takeover and no simultaneous uncontrolled edits to shared files.

[ ] 25. Make ContextPacks immutable and current
   Validate the task blob and source blob hashes against the pinned commit. Generate a new pack when authoritative inputs or permissions change; do not overwrite dispatched historical packs.

[ ] 26. Standardize complete ExecutionBundles
   Require actual commands, exit codes, changed files, environment, exact source/head SHA, test fixtures, security findings, unresolved risks and FACT/INTERPRETATION/PROPOSAL separation.

[ ] 27. Verify genuine agent independence
   Repeat a real implementation handoff in a fresh Codex or alternative-agent session using only the approved task context. PR #68 proves task packaging and execution, but its own report calls the handoff same-session, not independent cold-start verification.

[ ] 28. Prohibit silent implementation-role substitutions
   Direct feature coding by ChatGPT or switching away from Codex should require an explicit task-specific exception. Planning, reviewing and small governance edits can have proportionate policies.

[ ] 29. Add PR-to-task compliance validation
   Automatically check task identity, ContextPack reference, ExecutionBundle reference, evidence fields and required owner checkpoints for qualifying implementation PRs; allow documented low-risk exemptions.

[ ] 30. Check merged-main artifact integrity
   Ensure every accepted PR's required files survive integration. Detect missing tests and artifacts, including zero-test discovery, to prevent recurrence of the 21-file research recovery incident.

[ ] 31. Audit workflow triggers and test coverage
   Ensure implementation, SQL, validator, task, metadata and relevant documentation changes trigger applicable checks. Passing unrelated tests must not mask untested changed surfaces.

[ ] 32. Establish dependable review evidence
   Make exact-head source inspection, focused negative tests, advisory AI/CodeRabbit review where available and owner disposition explicit. A Draft-skipped CodeRabbit result is not an independent review.

[ ] 33. Protect integration against bypass
   Assess branch-protection/ruleset availability on the private repository. Where GitHub plan limits prevent required checks, use documented owner-controlled merge procedures and verification evidence.

[ ] 34. Separate CI failures from infrastructure failures
   Report runner-not-started, account restrictions, unavailable Docker/PostgreSQL, actual failed assertions and missing configuration as distinct conditions. None should be mislabeled PASS.

[ ] 35. Close and reconcile completed or superseded work
   Review paused PR #59 and old Issue #58, continuing Issue #63, outstanding Stage 3 Issue #18, and the newer #65/#66/#68. Close, retain or supersede with accurate links and decisions.

[ ] 36. Apply least-privilege agent permissions
   Limit repository, credential, filesystem, network, paid API, database and deployment access by task. Preserve explicit owner checkpoints for destructive or high-impact operations.

[ ] 37. Strengthen secret and private-data protections
   Keep local .env files ignored; use secret checks and sanitized logs/artifacts. Never store author manuscripts, access tokens or service-role keys in Git handoff packets.

[ ] 38. Test full project recovery from a clean environment
   Clone the repository without prior ChatGPT context, set up the pinned tooling, reconstruct the active project state and execute a synthetic task. Record everything that cannot be recovered.

[ ] 39. Make CI reproducible without unsafe cloud dependencies
   Maintain disposable PostgreSQL/Auth test paths, predictable tool versions, safe fixture cleanup and offline-capable checks. Hosted tests should require their own explicit authorization.

[ ] 40. Link actual implementation to acceptance status
   Map delivered features and test results back to the 149-ID MVP crosswalk. Update PASS/FAIL/BLOCKED/NOT_RUN only from observed behavior, not from planning documents.

[ ] 41. Establish repository recovery and backup checks
   Verify that source, evidence, relevant artifacts and migration history can be recovered, including after bad merges or lost agent worktrees. Keep secrets outside backup copies of the knowledge repository.

[ ] 42. Measure agentic workflow effectiveness
   Track compliant handoffs, cold-start success, verification time, escaped defects, context size, review rework, cost and false claims to determine whether the workflow actually improves delivery.

[ ] 43. Delay additional orchestration infrastructure
   Introduce a custom MCP knowledge server, vector search, knowledge graph or automated multi-agent orchestration only if measured retrieval/coordination problems remain after the Git-first workflow is stabilized.

[ ] 44. Enforce agentic role boundaries at task dispatch and repository write time (CRITICAL)
   Prevent ChatGPT, acting as architect/coordinator/reviewer, from directly implementing code or modifying CI/application files just because it has GitHub write access. Require an owner-authorized, uniquely identified task and immutable ContextPack before Codex begins implementation; record the actual executor in the PR and ExecutionBundle. If Codex cannot be dispatched through the available tools, stop at a reviewable handoff and report NOT_STARTED—do not silently become the implementer. Add a documented exception process for explicitly reassigned tasks or narrowly scoped governance edits; verify role compliance during review and with applicable automated PR-to-task checks. Audit prior coordinator-authored implementation work for provenance and any missing handoff evidence.
   Acceptance: a coordinator-only session cannot claim Codex execution or merge-ready implementation; a CI/PR check flags missing authorized task/ContextPack/executor evidence for qualifying changes, and a real Codex handoff is independently verified. Related existing items: #20, #21, #23, #28 and #29.
~~~~~~

### `docs/reports/evidence/VEL-RECOVERY-PROOF/dependency-closure.json` @ `9793895dd1d89fc33e7e543e5651dfcfb15c8aa0`

~~~~~~markdown
{
  "required_commit_pins": [
    "15100b7300aa5c7c7f8c30fe9fd46d0b2415dfe5",
    "1a4f190f6a62caa34b6e74d561f4b3df7c210a4a",
    "2041699c9a9d988142fe5a68776740da88437c80",
    "237e41824012c1c1136eefcee6a5d11f5f974c77",
    "2c49dbdc7620c635a24364aff830ba349ebe4260",
    "3118e601f7860250fc7a5c73dc8c263963ca25a1",
    "3428365cea9ef28d27a9acc979b9e97758604022",
    "36db6ab2e38c83d00ce767cf33672d30b28c19fc",
    "39c22ed4641583e745bc0cfc1e80f5461861ab36",
    "3abf3a5c6296273ef9511289b6fafbb1ba2f9867",
    "3b21aea9f9d285270061b787a49bc767792bba16",
    "5094041987729b56c004333878a6002600d8dccf",
    "5674ab345b82d864b2252dcad1de09dd8f05a9e7",
    "5a2ce41bba374ad1b3e6e7579de9c7d85901b9fb",
    "5bc27535c768998554ee60b7bcb66fa5be12e1d0",
    "616587dabf1426748683d0d4289930ab4c915d30",
    "65f6c296c3669b9d2eb27a1e69a84e0b391b16fa",
    "6ccf4469d877fd522b6dcb574107dd3fe049f1a4",
    "79b5af904967f2f0af3dd81b20d30828fd41ea69",
    "7bc7a6f239901733fbe10aa71159d2ab991bf037",
    "8961d0206371e08c88e5b222b52de4d816d54559",
    "93fa3732f5a843d33c9e1a7356292e23aeb71ec0",
    "999b5e81873071292099020f818a76dd017dce86",
    "9cb137fabae7f82491258eda918439c84c320db0",
    "a67e4e3bd4feaecad0f906ae1be778f6b8774ab8",
    "b7dc894c5eb74788678fc4214f9a847c32d7a11f",
    "b8a1e72dbf3739fe98e57aa3be69d13b2cb42f23",
    "b9f4d3ffc1cc597b19671ec42c3641b584456177",
    "bb15c5be56ea94dcbbdd3af413071c6e83ef3112",
    "be45ae15899240fed74b14fb402605b14da26c18",
    "cc3203b2aed6beb18da07905a7eacf1c6b4aeed3",
    "ce8049fe817c8f2e77d21c185488a2953770cbe1",
    "d1205a108c80c82d1d36cb5e0f46798f52d5ad3f",
    "d14261ce6bab2aea6550454f089c48859eb0a3ee",
    "dcd9843d536ba9146e4b422f4a33554132961de5",
    "e256f4be9a7fb90160d72ce5b5e8fad514706af4",
    "e2bc93d733c1cebc49d0de3df386d555ab0945d6",
    "e515d99f13c1111e2348af6b64d9f5251c7e7014",
    "e52ede9c52e0b2be843f023e477df742c6268a07",
    "f69460c79416acbdb036004ff35b2ad531eca99f",
    "f70b3086391a4f43943dafdbdfbd386602cba990",
    "fa349d20bc2dfcda4bf3647bcc8426cd316cc105",
    "fab4fe0748a72348193f9cf233a302fb359969c3"
  ],
  "reason": "Immutable pack base commits and active manifest/provenance commits may be non-ancestors of selected branch tips; preserve exact objects, not runtime data."
}
~~~~~~

### `docs/reports/evidence/VEL-INTEGRATION-0031/REPRODUCE.md` @ `68afc126085e07925010de5b66f7f9170b77cb96`

~~~~~~markdown
# Preserved historical recovery bundle replay

The original report remains dated evidence. This replay verifies the retained bundle and its43pinned commits after source adoption. It does not claim that the historical bundle contains current main or that a new agent/OS performed the original drill. All fault injection and GC remain inside new owned local copies.

```python
from pathlib import Path
import subprocess,hashlib,json
workspace=Path.cwd().resolve()
assert workspace.is_relative_to(Path(r'H:\cursor\cursor\Vellistry\.worktrees').resolve())
bundle=workspace/'docs/reports/evidence/VEL-RECOVERY-PROOF/recovery-pinned.bundle'
data=bundle.read_bytes()
assert len(data)==2620689 and hashlib.sha256(data).hexdigest()=='984a99d0148fe041ee888c0fcc968adf277b7e48be8cd6662a88d3aa07b87465'
pins=json.loads((workspace/'docs/reports/evidence/VEL-RECOVERY-PROOF/dependency-closure.json').read_text())['required_commit_pins']
assert len(pins)==43 and len(set(pins))==43
out=workspace/'docs/reports/evidence/VEL-INTEGRATION-0031'
owned=workspace/'.bundle-replay.log'
assert owned.resolve().is_relative_to(workspace) and not owned.exists()
owned.mkdir()
records=[]
def command(args,cwd=workspace,expected=0):
 result=subprocess.run([str(v) for v in args],cwd=cwd,capture_output=True)
 index=len(records);file=out/f'bundle-command-{index}.txt';file.write_bytes(result.stdout+result.stderr)
 records.append(dict(command=[str(v) for v in args],cwd=str(cwd),exit_code=result.returncode,expected_exit=expected,evidence=file.relative_to(workspace).as_posix()))
 (out/'bundle-commands.json').write_text(json.dumps(records,indent=2)+'\n')
 assert result.returncode==expected,(args,result.returncode)
 return result.stdout
command(['git','bundle','verify',bundle])
heads=command(['git','bundle','list-heads',bundle]).decode().splitlines()
assert set(pins).issubset({line.split()[0] for line in heads})
restored=owned/'restored.git'
assert restored.resolve().is_relative_to(owned.resolve()) and not restored.exists()
command(['git','clone','--mirror',bundle,restored])
assert restored.resolve().is_relative_to(owned.resolve()) and (restored/'HEAD').is_file()
command(['git','gc','--prune=now'],cwd=restored)
for pin in pins:command(['git','cat-file','-e',pin+'^{commit}'],cwd=restored)
command(['git','fsck','--full'],cwd=restored)
bad=owned/'corrupted.bundle';bad.write_bytes(data[:-1]+bytes([data[-1]^1]))
rejected=owned/'corrupt-restore.git'
assert rejected.resolve().is_relative_to(owned.resolve()) and not rejected.exists()
command(['git','clone','--mirror',bad,rejected],expected=128)
(out/'bundle-result.json').write_text(json.dumps(dict(bundle_sha256=hashlib.sha256(data).hexdigest(),bundle_bytes=len(data),advertised_required_pins=43,pins_available_after_owned_clone_gc=43,fsck='PASS',corrupt_clone_exit=128,scope='Historical bundle revisions, not latest main or clean OS',cleanup='Only owned local copies created and retained for audit; no external resources'),indent=2)+'\n')
print('PASS: exact 2620689-byte bundle, 43 advertised pins survive owned mirror clone+GC, fsck succeeds, corrupt clone rejected128. Historical source only; no fresh agent or hosted acceptance.')
```
~~~~~~

### `CURRENT-STATE.md` @ `1986ad9f0d02acf1cfca2ed1b51f60f3fc0b51af`

~~~~~~markdown
---
id: VEL-STATE-001
type: current-state
status: active
created_at: 2026-10-08
updated_at: 2026-10-22
owner: project_owner
version: 0.2.0
---

# Vellistry — current verified state

## Verified baseline and active work

FACT: checked main is `67e48d1fa821fe5e3e94ab7457f554720b676106`, after PR #105.
[Post-main CI39743512586](https://github.com/Ben-001-sys/Vellistry/actions/runs/39743512586)
passed governance, application/security and PostgreSQL CAS/restore. Integrated SQL
privilege regression was SKIPPED because its proposed fixture is absent; no SQL
acceptance follows. Re-fetch main and open PRs before each new task; this is a dated
verified baseline, not a claim that a document can embed its own future commit.

Task0041 is the active repository-only reconciliation, with committed sources and
[immutable CP0041](docs/agent-workflow/context-packs/VEL-CP-0041.md). Its changes
remain IN_VERIFICATION until distinct review, ready-event CI, merge and post-main
verification. Original draft PR #83 is the only old open PR and will be superseded
only after this successor passes those gates. PR #65 and PR #68 are CLOSED as
superseded; their branches, authorship and exact source references remain preserved.
PR #59, PR #66 and PR #82 are also closed as superseded; Issue58 was closed NOT_PLANNED.

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

Finish Task0041 review/integration and reconcile PR83. Then verify a dependency-closed
current repository backup and publish final remediation/readiness evidence. Keep
unmet original-source, independent execution, owner acceptance and hosted gates
explicit; do not claim44/44 DONE. No new feature implementation is dispatched.

Continued local implementation: conditional on completion of remediation and a new
bounded owner-authorized task. Hosted acceptance: NO-GO pending exact separate
permissions/evidence. Private-author pilot: NO-GO. Production release: NO-GO.

## Retained product decision references

[Owner waves01–03 selections](docs/history/2026-10-10-owner-waves-01-03-recommendations-accepted.md),
[HIS-20261010-003 writer-owned free-or-paid BYOK clarification](docs/history/2026-10-10-owner-byok-free-or-paid-clarification.md)
and [bounded design-entry delegation](docs/history/2026-10-10-owner-delegated-mvp-design-entry.md)
retain their original scopes. They do not authorize paid calls, feature execution,
private manuscripts or deployment under this remediation mandate.
~~~~~~

## Execution reporting
Return an ExecutionBundle with FACT / INTERPRETATION / PROPOSAL sections,
tests actually performed, changes, evidence gaps, and pending owner approval.
