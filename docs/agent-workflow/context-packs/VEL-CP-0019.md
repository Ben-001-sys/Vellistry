---
id: VEL-CP-0019
title: 'Context for VEL-TASK-0019: Issue81 offline PR68 readiness and durable PG17
  evidence'
type: context-pack
status: prepared
created_at: '2026-10-19'
version: 0.1.0
task_id: VEL-TASK-0019
base_commit: cc3203b2aed6beb18da07905a7eacf1c6b4aeed3
task_blob_sha: bc56e5e1f51fdf02c9c574e5b170d35745445412
inputs:
- path: PROJECT-CONSTITUTION.md
  role: governing-source
  git_blob_sha: 61f79c4dcb47bd99291c16490e8c00692e2ab23b
  source_status: accepted
- path: AGENTS.md
  role: governing-source
  git_blob_sha: 2feca4ec9ee0f11f5b6ac089c1d5c826d0e043ce
  source_status: active
- path: SOURCE-OF-TRUTH.md
  role: governing-source
  git_blob_sha: d5bec6f59108ac84715d77b65836f4499194c3f1
  source_status: accepted
- path: docs/agent-workflow/PR-COMPLIANCE.md
  role: governing-source
  git_blob_sha: 5f4845623aef3abb15fba7fbe8e78474902cca00
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0019/OWNER-SCOPE.md
  role: governing-source
  git_blob_sha: b9920e2c7f38813611de13503fb4b06a3350d834
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0019/ISSUE81.md
  role: governing-source
  git_blob_sha: cb32e0ab0f5d2aa0bc6ba5350859841fe83bc7a4
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0019/DEFINITION-DECISION.md
  role: governing-source
  git_blob_sha: 958e9b5cd0a29030cf8de7ca7b28def3b48105a9
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0019/pg17-artifact.json
  role: governing-source
  git_blob_sha: d770ba151960ce770ef008143ff41af77f95ff5a
  source_status: unrecorded
source_gaps:
- id: HOSTED
  limitation: No fresh hosted inventory authorized; synthetic defaults are not real
    grants.
- id: AUTHOR
  limitation: Declared ChatGPT/Codex origins from source records, not model authentication.
- id: CLI
  limitation: Only local version/help and public documentation allowed; remote commands
    proposals only.
prepared_by: agent_workflow.py
---

# VEL-CP-0019 — Issue81 offline PR68 readiness and durable PG17 evidence

## Objective
Produce exact-source offline integration map, sanitized PG17 retention and separate action-specific owner decision packets without cloud access.

## Scope
**In:** docs/reports/VEL-DB-READINESS-001-*.md; docs/reports/evidence/VEL-DB-READINESS-001/*; docs/agent-workflow/tasks/VEL-TASK-0019.yaml; docs/agent-workflow/context-packs/VEL-CP-0019.md; docs/agent-workflow/execution-bundles/VEL-EB-0019.md; docs/agent-workflow/inputs/VEL-TASK-0019/*; docs/agent-workflow/PR-COMPLIANCE.yaml
**Out:** App/SQL/CI/tests/settings/accepted authority edits; Hosted/credentials/private data/paid/production/merge/PR68 mutation

## Evidence and authority constraints
The text below is a readable rendering of pinned Git blobs; exact raw bytes remain recoverable from the recorded commit/blob SHAs. Recorded source statuses remain in force: draft research is not accepted requirements. Original unarchived uploads are not independently verified merely by being mentioned.

**Known source gaps:**
- HOSTED: No fresh hosted inventory authorized; synthetic defaults are not real grants.
- AUTHOR: Declared ChatGPT/Codex origins from source records, not model authentication.
- CLI: Only local version/help and public documentation allowed; remote commands proposals only.

## Permissions and acceptance
**Allowed:** Read repository andGitHub source/artifact evidence, Commit source/task then generate validate commitCP, Write only scoped sanitizedreports/evidence; run localhelp/governance andexistingfullCI; draftPR
**Owner approval required:** Any hosted access orCLIlogin/dryrun/apply/Authfixture; Migration integration, merge, privatepilot, production orscopeexpansion
**Acceptance criteria:**
- Exact third SQL blob/SHA256 unchanged; no SQL file integration
- Artifact archive digest matchesGitHub metadata; retained evidence contains only synthetic data and no credentials
- Separate BEFORE expectedfail andAFTERpass with version/commands/exits/cleanup
- Hosted actions remain NOT_RUN and OWNER_DECISION_PENDING; no unapproved merge
- Actual governance and source-integrity checks with fullCI

## Deliverables
- CommittedTask and immutableCP before reports
- Exactfile/blob/hash provenance and exclude/adopt matrix
- Hash-checked sanitized retained PG17 proof and cleanup summary
- Exact hosted action packets and factual EB with tests/CI/review

## Pinned source snapshots
Git commit: `cc3203b2aed6beb18da07905a7eacf1c6b4aeed3`. Read source statuses independently from task intent.

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

### `AGENTS.md` @ `2feca4ec9ee0f11f5b6ac089c1d5c826d0e043ce`

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

No automatic PR-to-task enforcement is claimed as authenticated identity or owner approval; [Issue #73](https://github.com/Ben-001-sys/Vellistry/issues/73) now has a proposed [static compliance contract](docs/agent-workflow/PR-COMPLIANCE.md) under Task0010. Its base-anchored checks, provisional bootstrap and owner-protected review limits must be inspected before adoption. Read the current [operating model](docs/agent-workflow/IMPLEMENTATION-OPERATING-MODEL.md) for design/coding task exceptions versus private-pilot/release gates.

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
~~~~~~

### `SOURCE-OF-TRUTH.md` @ `d5bec6f59108ac84715d77b65836f4499194c3f1`

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

### `docs/agent-workflow/inputs/VEL-TASK-0019/OWNER-SCOPE.md` @ `b9920e2c7f38813611de13503fb4b06a3350d834`

~~~~~~markdown
# Owner-authorized Issue81 offline readiness task, 2026-10-19
Authority: direct master-mandate dispatch and continuation in this Codex chat; full original mandate preserved in PR82. Issue81 and its owner-follow-on relay are source context, not authenticated human approval. Scope: inspect PR65/68 exact source, current-main conflict/provenance matrix, preserve sanitized real PG17 artifact with hash verification, and prepare exact separate hosted-action decision packets. No app/SQL/CI edits, hosted connections (even read-only), credential retrieval, migration application, fixtures, merge, settings or deployment. Third SQL definition approved only for planning; no integration approval inferred. NewTask0019 and immutableCP before report/evidence writes. Source files only read with Git; original PRs untouched. All author origins retained.
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0019/ISSUE81.md` @ `cb32e0ab0f5d2aa0bc6ba5350859841fe83bc7a4`

~~~~~~markdown
## Proposed next safe remediation task — #07 preparation only (NOT hosted-access authorization)

**Status: PREPARED FOR OWNER-SCOPED CODEX DISPATCH / NOT_STARTED.** Owner has approved **only** the *exact definition* of the third books privilege migration for a future bounded development plan, and explicitly withheld *all hosted Supabase access, dry-run, SQL execution and PR merges*. This issue is a **repository-only planning/handoff proposal**, not execution authority or a claim that Codex has begun. Owner wording/precise scope: [PR68 comment #6251764080](https://github.com/Ben-001-sys/Vellistry/pull/68#issuecomment-6251764080). Parent 44-item tracker: [Issue #71](https://github.com/Ben-001-sys/Vellistry/issues/71); regression evidence: [Issue #74](https://github.com/Ben-001-sys/Vellistry/issues/74#issuecomment-6250984828).

### Current verified baseline
- Latest `main` at issue preparation: `fca0d96fd071f1165e3e16658d821a3d36a20293` (**PR80 merged**), [post-merge CI run #39136089610](https://github.com/Ben-001-sys/Vellistry/actions/runs/39136089610) SUCCESS; **refetch current main before work**.
- [PR68](https://github.com/Ben-001-sys/Vellistry/pull/68) is **OPEN / DRAFT / UNMERGED** at `cbb379fa4a4eaa9f576f3abcce2c2258d22cc551` with `mergeable_state: dirty`; it includes legacy CI changes and borrowed original [ChatGPT-authored PR65](https://github.com/Ben-001-sys/Vellistry/pull/65) material; **do not cherry-pick or rebase the whole PR**.
- Exact *definition-only* approved third SQL file: `supabase/migrations/20261015171325_restrict_book_privileges.sql`, Git blob `230b1540bb5b8962fd2b797d4f8a467d3c035978`, SHA256 `c7c384b6192d31e4e17c4f6e00978a16a4e15e2feeacfe148aaf1e2cd2853e81`. Source ref `cbb379...`. If bytes differ, **STOP; new owner decision**.
- Original two migration source files:
  - `20261009000000_initial_author_books.sql`, blob `192a736d1a5d6ffc6f239c74ed61e7b8d2528b3b`.
  - `20261009010000_restrict_accepted_manuscript_dml.sql`, blob `0670a60f1c2e299e9771b9af1c677d97712174d9`.
- Independent **disposable PostgreSQL17.11** run [#39135149678](https://github.com/Ben-001-sys/Vellistry/actions/runs/39135149678) passed both before/after privilege evidence (specific BEFORE `P0001` error; AFTER 48 ACL cases and supplemental SQLSTATE42501 actual DDL/RLS probes/cleanup). Evidence [artifact #12139701246](https://github.com/Ben-001-sys/Vellistry/actions/runs/39135149678/artifacts/12139701246) **expires on 2026-11-01** and should be retained as a sanitized durable digest if later authorized. Synthetic broad-default fixtures are not real hosted ACL state.

### Work design — strictly OFFLINE, repository-only (future Codex task if owner authorizes implementation)

1. **Inventory & pin current Git truth:** read merged `main`, `PR68` exact SQL + provenance, `PR65` inherited source, accepted ADR0008/constitutional instructions, `docs/agent-workflow/PR-COMPLIANCE.md`, existing CI workflow contract and static migration names, and Issue74's observed artifact. No direct Supabase API/CLI/db connection, even read-only.
2. **Prepare a concise integration *plan* (not code changes)**: identify exactly which changes in PR68 are absent from merged main; separate (a) original PR65-authored safe preflight elements, (b) original migrations, (c) owner-approved byte-pinned proposed third SQL, (d) old automatic CI workflow edits to **exclude**, and (e) stale CURRENT-STATE/provenance material to reconcile. Never overwrite merged `AGENTS.md`, `LANGUAGE.md`, current CI or accepted governance. Specify any required new Codex implementation Task/CP/EB and post-main PR before code edits, with unique global IDs and owner path allowlist/merge gates.
3. **Prepare the prospective *hosted-dev* preflight checklist WITHOUT executing it**: exact project name/ref, migration-version comparison, real grant/role-membership/default-privilege queries, related dependent objects, safe CLI authentication strategy, remote history guardrails, expected `db push --dry-run` output, `--skip-vault`, no roles/seed/reset, stop-on-drift conditions, clean credential handling, scope/rollback/escalation. **Commands are documentation examples only.** Do not run Supabase CLI auth, `migration list`, dry-run, catalog SELECT, or access `vellistry-dev`.
4. **Evidence retention proposal (time-sensitive)**: hash-check the real PG17 artifact, create a sanitized fact matrix with run/job ID, original SQL SHA/blob pins, PostgreSQL version, before/after exits/SQLSTATE, supplemental negatives and cleanup; identify what to retain durably before the Nov1 artifact expiry. Never commit unsanitized logs, credentials, private author data or run extraneous network calls. Any repository file write requires its own authorized Task/CP; this preparatory issue alone does not grant it.
5. **Future gate proposal**: explicitly separate owner decision (i) hosted read-only inventory, (ii) hosted dev CLI login+dry-run, (iii) dev migration application + synthetic two-author acceptance, (iv) PR integration/merge, and (v) production/security/pilot. Approval of SQL **definition** is not approval of *any* of these actions. Signed-out JWT direct PostgREST risk (#09) remains open and blocks private pilot.

### Hard prohibitions
- **NO Supabase hosted access, including read-only access; NO hosted CLI auth, `migration list`, `db push --dry-run`, SQL apply, test-account creation, key retrieval, real manuscript data, project billing/settings, deployment or production operations.**
- **NO unapproved SQL edit, PR68 merge/rebase/cherry-pick, historical provenance rewriting, new automatic CI workflow or governance gate alteration.**
- **NO implementation by ChatGPT coordinator.** If owner separately dispatches Codex for repository file edits: first allocate a genuinely unused Task/ContextPack/ExecutionBundle identity across active refs; commit source snapshot/task, validate and commit *immutable current-main Git-pinned CP before implementation*, work isolated, report actual FACT/INTERPRETATION/PROPOSAL, exact-head CI and independent review; owner separately merges. This issue is not such a dispatched Task/CP.
- Approval from owner is file-hash-specific, **not** blanket permission for migration #3 modifications, hosted operations, or PR68.

### Completion / owner decision gates
- **This issue is a ready handoff, not a completed remediation #07.** A task would complete its offline stage only after a source-pinned inventory, conflict/provenance map, reviewable hosted-dev procedure (NOT executed), sanitized artifact-retention plan, and explicit future owner authorizations checklist. If source drift, hash mismatch, governance conflicts or missing evidence occur, label BLOCKED with exact facts.
- Current status: #06 **DONE (SQL definition only)**; #07 **NOT AUTHORIZED for hosted use**; #08 **NOT AUTHORIZED for hosted acceptance**; #09 JWT/private-pilot **OPEN**. Any later execution requires the owner's distinct explicit instruction.

**Prepared by ChatGPT as coordinating GitHub issue from the owner's direct instruction to “record this decision and prepare the next safe task.” No Codex task has been launched or repo/code/CI/Supabase modifications performed here.**
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0019/DEFINITION-DECISION.md` @ `958e9b5cd0a29030cf8de7ca7b28def3b48105a9`

~~~~~~markdown
## Explicit owner decision — Checklist #06 / exact third SQL migration definition approved (2026-10-18)

**OWNER AUTHORIZATION — relayed verbatim from the owner's direct ChatGPT instruction (not an independently owner-authored GitHub comment):**

> As Vellistry owner, I explicitly approve only the exact proposed SQL migration definition 20261015171325_restrict_book_privileges.sql, Git blob 230b1540bb5b8962fd2b797d4f8a467d3c035978, SHA256 c7c384b6192d31e4e17c4f6e00978a16a4e15e2feeacfe148aaf1e2cd2853e81, for a future bounded development migration plan. I do not authorize hosted Supabase access, dry-run, migration execution or PR merge. Record this decision and prepare the next safe task.

### Precisely approved definition — no source change

- File: `supabase/migrations/20261015171325_restrict_book_privileges.sql`.
- Exact source: unmerged, draft [PR #68](https://github.com/Ben-001-sys/Vellistry/pull/68) head `cbb379fa4a4eaa9f576f3abcce2c2258d22cc551`.
- Confirmed Git blob: `230b1540bb5b8962fd2b797d4f8a467d3c035978`.
- Confirmed SHA-256: `c7c384b6192d31e4e17c4f6e00978a16a4e15e2feeacfe148aaf1e2cd2853e81`.
- Exact reviewed SQL:
```sql
revoke all privileges on table public.books from public, anon, authenticated;
grant select, insert, update, delete on table public.books to authenticated;
```
- Evidentiary basis: [independently reviewed actual GitHub-hosted PG17 17.11 BEFORE/AFTER tests](https://github.com/Ben-001-sys/Vellistry/issues/74#issuecomment-6250984828), [run #39135149678](https://github.com/Ben-001-sys/Vellistry/actions/runs/39135149678), 48 case fixture and supplemental negative privilege/RLS operations passing. That **synthetic** result does not constitute hosted database acceptance.

### Approved vs. withheld authority

**APPROVED:** The **exact bytes** of this third migration as a *design/source definition for a future, separately bounded hosted-development migration plan*. This clears the narrow owner **definition decision** in remediation #06.

**NOT APPROVED:** ANY connection, catalog read or other access to hosted Supabase (including `vellistry-dev`), Supabase CLI login, `migration list`, `db push --dry-run`, remote data/auth/user access, actual SQL apply, migrations #1–#3 to hosted dev/prod, reset/seed/roles/vault, secrets/tokens, project settings, paid resources, PR merge or deployment. A future offline task may **write up proposed commands** but must not execute them or require credentials. This approval is not a production authorization or blanket permission for modified SQL blobs.

**Still pending:** PR #68 remains **DRAFT/UNMERGED**, head `cbb379...`; GitHub reports merge conflict/dirty against today's advanced `main fca0d96fd071f1165e3e16658d821a3d36a20293` (post-PR80). Its historical automatic `implementation-foundation.yml` changes are incompatible with the merged single automatic CI contract, and original ChatGPT-authored PR65 provenance must be preserved. A new owner-scoped Codex task with fresh current-main ContextPack is required before any source/integration edits. New SQL definition hash or scope change requires a new **explicit owner SQL decision**.

### Decision and status discipline
**#06: DONE — exact SQL definition approved; HOSTED MIGRATION NOT AUTHORIZED.** #07 safe hosted migration access, #08 actual hosted acceptance and #09 signed-out JWT remain NOT_AUTHORIZED / OPEN. No code, CI, PR state, cloud service, settings or database changed by recording this decision. Connected-account GitHub comment authorship is not cryptographic evidence that the owner wrote this comment directly; the owner statement above came from the ongoing ChatGPT instruction.
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0019/pg17-artifact.json` @ `d770ba151960ce770ef008143ff41af77f95ff5a`

~~~~~~markdown
{"id":12139701246,"node_id":"MDg6QXJ0aWZhY3QxMjEzOTcwMTI0Ng==","name":"vel-sec-001-pg17-evidence","size_in_bytes":7626,"url":"https://api.github.com/repos/Ben-001-sys/Vellistry/actions/artifacts/12139701246","archive_download_url":"https://api.github.com/repos/Ben-001-sys/Vellistry/actions/artifacts/12139701246/zip","expired":false,"digest":"sha256:d426612fbb1197e8e80b8b5a7cd8cfa97e24c2307af3fe786485cf0e416fbf62","created_at":"2026-10-18T14:15:31Z","updated_at":"2026-10-18T14:15:31Z","expires_at":"2026-11-01T14:15:31Z","workflow_run":{"id":39135149678,"repository_id":1409992361,"head_repository_id":1409992361,"head_branch":"main","head_sha":"098ab06a40a84eaba5880223f02e80fab3bf9e86"}}
~~~~~~

## Execution reporting
Return an ExecutionBundle with FACT / INTERPRETATION / PROPOSAL sections,
tests actually performed, changes, evidence gaps, and pending owner approval.
