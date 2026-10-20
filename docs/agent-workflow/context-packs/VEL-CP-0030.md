---
id: VEL-CP-0030
title: 'Context for VEL-TASK-0030: Correct two demonstrated Windows governance fixture
  portability defects'
type: context-pack
status: prepared
created_at: '2026-10-20'
version: 0.1.0
task_id: VEL-TASK-0030
base_commit: 9bd47e5bef9029da6d178d667f71bad7d9d755e0
task_blob_sha: 6dc48d8d40c25dfba69cda1002df0a91fc0a21fc
inputs:
- path: PROJECT-CONSTITUTION.md
  role: authority-or-demonstrated-portability-regression
  git_blob_sha: 61f79c4dcb47bd99291c16490e8c00692e2ab23b
  source_status: accepted
- path: SOURCE-OF-TRUTH.md
  role: authority-or-demonstrated-portability-regression
  git_blob_sha: d5bec6f59108ac84715d77b65836f4499194c3f1
  source_status: accepted
- path: AGENTS.md
  role: authority-or-demonstrated-portability-regression
  git_blob_sha: 2feca4ec9ee0f11f5b6ac089c1d5c826d0e043ce
  source_status: active
- path: docs/agent-workflow/PR-COMPLIANCE.md
  role: authority-or-demonstrated-portability-regression
  git_blob_sha: 5f4845623aef3abb15fba7fbe8e78474902cca00
  source_status: unrecorded
- path: docs/agent-workflow/authorizations/VEL-REM-INTEGRATION-20261019.yaml
  role: authority-or-demonstrated-portability-regression
  git_blob_sha: 8023094b20f65e44b6ea6a002f4e2808b3e92be6
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0030/OWNER-SCOPE.md
  role: authority-or-demonstrated-portability-regression
  git_blob_sha: b787b817f78b76dc2d4ee9ac052c5a1bf2049148
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0030/red-commands.json
  role: authority-or-demonstrated-portability-regression
  git_blob_sha: ea0953f4f7a38f10ed2d5d7e4ff1401daf77070b
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0030/SOURCE-MAP.json
  role: authority-or-demonstrated-portability-regression
  git_blob_sha: c1413c6b2d7a3f6eba5d2192e68f06bfba116502
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0030/test_knowledge_metadata.py.before.txt
  role: authority-or-demonstrated-portability-regression
  git_blob_sha: 69255dcb792cc7210bedbe8721dc5585b24da4de
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0030/test_knowledge_metadata.py.txt
  role: authority-or-demonstrated-portability-regression
  git_blob_sha: 0af327cc6c452ff0fd7f0a9dd472075e91674499
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0030/test_r01_manifest.py.before.txt
  role: authority-or-demonstrated-portability-regression
  git_blob_sha: 879643f0e55e0b90d03dcc2c22cdf950c1e1a01c
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0030/test_r01_manifest.py.txt
  role: authority-or-demonstrated-portability-regression
  git_blob_sha: 35ca9c34bee84d0979c2d7ab33d48e774c1d772e
  source_status: unrecorded
source_gaps:
- id: HOST-SCOPE
  limitation: Windows3.10 fixture behavior plus real Linux CI; no clean OS, hosted
    or general portability guarantee inferred.
prepared_by: agent_workflow.py
---

# VEL-CP-0030 — Correct two demonstrated Windows governance fixture portability defects

## Objective
Make existing UTF8 metadata and temporary-file negative tests reliably execute on supported Windows development host without weakening assertions or changing application/policy.

## Scope
**In:** tests/test_knowledge_metadata.py; tests/test_r01_manifest.py; docs/agent-workflow/tasks/VEL-TASK-0030.yaml; docs/agent-workflow/context-packs/VEL-CP-0030.md; docs/agent-workflow/execution-bundles/VEL-EB-0030.md; docs/agent-workflow/inputs/VEL-TASK-0030/*; docs/agent-workflow/PR-COMPLIANCE.yaml; docs/reports/VEL-WINDOWS-GOVERNANCE-0030.md; docs/reports/evidence/VEL-WINDOWS-GOVERNANCE-0030/*
**Out:** Production validator/CI/application/dependency/SQL/settings changes; skipped or weakened negative tests; Hosted/Auth/secrets/private/paid/deploy/mergeinsideimplementation; tracked historical pack rewriting

## Evidence and authority constraints
The text below is a readable rendering of pinned Git blobs; exact raw bytes remain recoverable from the recorded commit/blob SHAs. Recorded source statuses remain in force: draft research is not accepted requirements. Original unarchived uploads are not independently verified merely by being mentioned.

**Known source gaps:**
- HOST-SCOPE: Windows3.10 fixture behavior plus real Linux CI; no clean OS, hosted or general portability guarantee inferred.

## Permissions and acceptance
**Allowed:** CommitTask/source,generate/validate/commitimmutableCP beforecode, Modify only2listedtestfixture setup details,runoffline synthetic tests/newownedcheckout,reportactualevidence, PublishPR/trustedreview/readyCI; keep sourcebranches andhistory
**Owner approval required:** Outsideone-timeprogram/securitysensitivehosted/private/paid/admin/production/features; Unreviewedchange/failingapplicableCI or missingdistinctreview blocksintegration
**Acceptance criteria:**
- All8metadata and2manifest tests pass with PythonUTF8mode disabled; oldsource failures retained separately
- No removed/skipped/weakened assertions, no production/security/CI/code/dependency change
- Full governance actually executes at fixedHEAD in clean owned worktree with no stale generatedpack; zero-test discovery never accepted
- Actual trustedbasecompliance, separatefinalheadreview, ready/mainCI andmergedtree verification

## Deliverables
- UniqueTask/source then immutableCP before minimal2testcorrections
- Observedred/green and fullgovernance output, exact source/head/exits/testcounts
- EB plus distincttrustedreview/actualreadyCI andpostmain underseparateownerdelegation

## Pinned source snapshots
Git commit: `9bd47e5bef9029da6d178d667f71bad7d9d755e0`. Read source statuses independently from task intent.

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

### `docs/agent-workflow/inputs/VEL-TASK-0030/OWNER-SCOPE.md` @ `b787b817f78b76dc2d4ee9ac052c5a1bf2049148`

~~~~~~markdown
# Windows governance test portability correction
One-time owner delegation,19Oct2026,remediation-only; existing program mandate authorizes demonstrated bounded test/remediation fixes. Formal record docs/agent-workflow/authorizations/VEL-REM-INTEGRATION-20261019.yaml. Read-only observations at PR94head2e0365a443890f7e85a480e34cd55fe9d330e57a (identical to mergedmain) reproduced8metadata tests with1failure and2manifest tests with1error on Windows/Python3.10/cp1252. First test writes UTF8-read source with platform-default encoding; second leaks mkstemp descriptor and fails unlink on Windows. Only correct explicitUTF8 fixture writing and temporary descriptor lifetime in these2testfiles. Preserve all assertions, negative cases and discovery; no production validator/security policy/CI/app/dependencies/SQL changes. Tests should execute with -X utf8=0 and no skipped assertions. Validate complete current governance from a new owned worktree at fixedHEAD with only generated disposable CP0002/3, never rewrite tracked historical packs; do not advanceHEAD while testing. Preserve earlier failures and source snapshots. NewTask/immutableCP before code; EB, distinct trusted Codex review, actualreadyCI/postmain before dependentwork. No hosted/auth/private/paid/settings/feature or mergeinsideimplementation. Any actual later merge is a separate owner-delegatedoperation after requiredgates.
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0030/red-commands.json` @ `ea0953f4f7a38f10ed2d5d7e4ff1401daf77070b`

~~~~~~markdown
[
  {
    "command": [
      "python",
      "-X",
      "utf8=0",
      "-m",
      "unittest",
      "discover",
      "-s",
      "tests",
      "-p",
      "test_knowledge_metadata.py",
      "-v"
    ],
    "exit_code": 1,
    "source_sha": "2e0365a443890f7e85a480e34cd55fe9d330e57a"
  },
  {
    "command": [
      "python",
      "-X",
      "utf8=0",
      "-m",
      "unittest",
      "discover",
      "-s",
      "tests",
      "-p",
      "test_r01_manifest.py",
      "-v"
    ],
    "exit_code": 1,
    "source_sha": "2e0365a443890f7e85a480e34cd55fe9d330e57a"
  }
]
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0030/SOURCE-MAP.json` @ `c1413c6b2d7a3f6eba5d2192e68f06bfba116502`

~~~~~~markdown
{
  "base": "ea6a2f25453e0a7ca436349fb8606075db7c0672",
  "paths": [
    {
      "path": "tests/test_knowledge_metadata.py",
      "source": "ea6a2f25453e0a7ca436349fb8606075db7c0672",
      "blob": "69255dcb792cc7210bedbe8721dc5585b24da4de",
      "sha256": "af842f6b5f5ef7975571ce176ca3080d1e30e3bed80454546a8d6b05f0ab385c",
      "snapshot": "docs/agent-workflow/inputs/VEL-TASK-0030/test_knowledge_metadata.py.before.txt"
    },
    {
      "path": "tests/test_r01_manifest.py",
      "source": "ea6a2f25453e0a7ca436349fb8606075db7c0672",
      "blob": "879643f0e55e0b90d03dcc2c22cdf950c1e1a01c",
      "sha256": "ab8089504d6ec9dd074c6f85d9180b0dbe4b9b54c283cfd81988f0532a67b8e9",
      "snapshot": "docs/agent-workflow/inputs/VEL-TASK-0030/test_r01_manifest.py.before.txt"
    }
  ],
  "red_observation_head": "2e0365a443890f7e85a480e34cd55fe9d330e57a"
}
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0030/test_knowledge_metadata.py.before.txt` @ `69255dcb792cc7210bedbe8721dc5585b24da4de`

~~~~~~markdown
"""Regression tests for the Vellistry decision/history metadata gate.

All negative tests build temporary copies of real repository records.
"""
from __future__ import annotations

import shutil
import sys
import tempfile
import unittest
from pathlib import Path

REPOSITORY = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(REPOSITORY / "scripts"))

import check_knowledge_metadata as validator  # noqa: E402


class KnowledgeMetadataValidationTests(unittest.TestCase):
    def setUp(self) -> None:
        self.tempdir = tempfile.TemporaryDirectory()
        self.addCleanup(self.tempdir.cleanup)
        self.root = Path(self.tempdir.name)
        for group in ("decisions", "history"):
            destination = self.root / "docs" / group
            destination.mkdir(parents=True)
            for source in (REPOSITORY / "docs" / group).glob("*.md"):
                if source.name != "README.md":
                    shutil.copyfile(source, destination / source.name)

    def audit(self):
        return validator.audit_records(self.root)

    def expected_record_count(self) -> int:
        """Record count is derived from fixtures, not frozen to the original seed."""
        return sum(
            1
            for group in ("decisions", "history")
            for path in (self.root / "docs" / group).glob("*.md")
            if path.name != "README.md"
        )

    def test_real_records_pass_when_unmodified(self):
        count, errors = self.audit()
        self.assertEqual(count, self.expected_record_count())
        self.assertEqual(errors, [])

    def test_malformed_adr_filename_is_not_skipped(self):
        original = next((self.root / "docs/decisions").glob("ADR-0001-*.md"))
        original.rename(original.parent / "misc-decision.md")
        count, errors = self.audit()
        self.assertEqual(count, self.expected_record_count())
        self.assertTrue(any("invalid adr filename" in e for e in errors), errors)

    def test_malformed_history_filename_is_not_skipped(self):
        original = next((self.root / "docs/history").glob("2026-*.md"))
        original.rename(original.parent / "history_notes.md")
        count, errors = self.audit()
        self.assertEqual(count, self.expected_record_count())
        self.assertTrue(any("invalid history filename" in e for e in errors), errors)

    def test_invalid_frontmatter_is_rejected(self):
        path = next((self.root / "docs/decisions").glob("ADR-0001-*.md"))
        path.write_text("# A document without metadata\n", encoding="utf-8")
        _, errors = self.audit()
        self.assertTrue(any("missing YAML front matter" in e for e in errors), errors)

    def test_duplicate_identifier_is_rejected(self):
        source = next((self.root / "docs/decisions").glob("ADR-0001-*.md"))
        (source.parent / "ADR-0003-duplicate.md").write_text(source.read_text(encoding="utf-8"))
        _, errors = self.audit()
        self.assertTrue(any("duplicate ID" in e for e in errors), errors)

    def test_accepted_adr_without_approver_is_rejected(self):
        path = next((self.root / "docs/decisions").glob("ADR-0001-*.md"))
        body = path.read_text(encoding="utf-8").replace(
            "approved_by: project_owner", "approved_by: null"
        )
        path.write_text(body, encoding="utf-8")
        _, errors = self.audit()
        self.assertTrue(any("accepted ADR requires approved_by" in e for e in errors), errors)

    def test_mismatched_history_id_date_is_rejected(self):
        path = next((self.root / "docs/history").glob("2026-10-08-knowledge-foundation-approved.md"))
        body = path.read_text(encoding="utf-8").replace(
            "id: HIS-20261008-001", "id: HIS-20261007-001"
        )
        path.write_text(body, encoding="utf-8")
        _, errors = self.audit()
        self.assertTrue(any("history ID date must match occurred_on" in e for e in errors), errors)

    def test_no_records_fails_closed(self):
        for path in (self.root / "docs").rglob("*.md"):
            path.unlink()
        count, errors = self.audit()
        self.assertEqual(count, 0)
        self.assertTrue(any("no ADR/history records" in e for e in errors), errors)


if __name__ == "__main__":
    unittest.main()
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0030/test_knowledge_metadata.py.txt` @ `0af327cc6c452ff0fd7f0a9dd472075e91674499`

~~~~~~markdown
test_accepted_adr_without_approver_is_rejected (test_knowledge_metadata.KnowledgeMetadataValidationTests) ... ok
test_duplicate_identifier_is_rejected (test_knowledge_metadata.KnowledgeMetadataValidationTests) ... FAIL
test_invalid_frontmatter_is_rejected (test_knowledge_metadata.KnowledgeMetadataValidationTests) ... ok
test_malformed_adr_filename_is_not_skipped (test_knowledge_metadata.KnowledgeMetadataValidationTests) ... ok
test_malformed_history_filename_is_not_skipped (test_knowledge_metadata.KnowledgeMetadataValidationTests) ... ok
test_mismatched_history_id_date_is_rejected (test_knowledge_metadata.KnowledgeMetadataValidationTests) ... ok
test_no_records_fails_closed (test_knowledge_metadata.KnowledgeMetadataValidationTests) ... ok
test_real_records_pass_when_unmodified (test_knowledge_metadata.KnowledgeMetadataValidationTests) ... ok

======================================================================
FAIL: test_duplicate_identifier_is_rejected (test_knowledge_metadata.KnowledgeMetadataValidationTests)
----------------------------------------------------------------------
Traceback (most recent call last):
  File "H:\cursor\cursor\Vellistry\.worktrees\vel-integrate-86\tests\test_knowledge_metadata.py", line 72, in test_duplicate_identifier_is_rejected
    self.assertTrue(any("duplicate ID" in e for e in errors), errors)
AssertionError: False is not true : ["docs\\decisions\\ADR-0003-duplicate.md: 'utf-8' codec can't decode byte 0x97 in position 1228: invalid start byte"]

----------------------------------------------------------------------
Ran 8 tests in 0.751s

FAILED (failures=1)
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0030/test_r01_manifest.py.before.txt` @ `879643f0e55e0b90d03dcc2c22cdf950c1e1a01c`

~~~~~~markdown
"""Synthetic-fixture tests. Real original source is never committed to Git."""
import importlib.util
import tempfile
import unittest
from pathlib import Path

SPEC=importlib.util.spec_from_file_location("audit",Path(__file__).resolve().parents[1]/"scripts"/"r01_manifest.py")
mod=importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(mod)

class ManifestTests(unittest.TestCase):
    def test_complete_pair_and_clash_detection(self):
        path=Path(tempfile.mkstemp(suffix=".md")[1])
        try:
            lines=[]
            for prefix in mod.DOMAINS:
                for number in range(1,11):
                    code=f"{prefix}-{number:02d}"
                    lines.extend([f"### {code} — Original {code}","Source short statement."])
            lines.append("# BEGIN EXPANSION")
            for prefix in mod.DOMAINS:
                for number in range(1,11):
                    code=f"{prefix}-{number:02d}"
                    if prefix=="AR" or code in {"DS-09","PV-05","PV-10"}:
                        title=f"Different title for {code}"
                    else:title=f"ORIGINAL {code}"
                    lines.extend([f"# {code} — {title}","Expanded source text."])
            path.write_text("\n".join(lines),encoding="utf-8")
            out=mod.audit(path)
            self.assertEqual((out["unique_codes"],out["heading_count"],out["divergent_titles"]),(130,260,13))
            self.assertEqual(out["all_source_variants"][0]["code"],"AR-01")
            self.assertIn("unresolved",out["status"])
            self.assertIn("P1",out["status"])
            self.assertEqual(out["active_default_mapping_status"],"not approved")
            entries=out["all_source_variants"]
            keys=[entry[v]["record_id"] for entry in entries for v in ("compact","expanded")]
            self.assertEqual(len(keys),260)
            self.assertEqual(len(set(keys)),260)
            self.assertTrue(all(entry["active_default_mapping"] is None for entry in entries))
            self.assertNotEqual(entries[0]["compact"]["record_id"],entries[0]["expanded"]["record_id"])
        finally:path.unlink(missing_ok=True)
    def test_missing_headings_are_not_silently_accepted(self):
        with tempfile.TemporaryDirectory() as d:
            p=Path(d)/"missing.md"
            p.write_text("### AR-04 — moral complexity\n",encoding="utf-8")
            with self.assertRaises(ValueError):mod.audit(p)

if __name__=="__main__":unittest.main()
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0030/test_r01_manifest.py.txt` @ `35ca9c34bee84d0979c2d7ab33d48e774c1d772e`

~~~~~~markdown
test_complete_pair_and_clash_detection (test_r01_manifest.ManifestTests) ... ERROR
test_missing_headings_are_not_silently_accepted (test_r01_manifest.ManifestTests) ... ok

======================================================================
ERROR: test_complete_pair_and_clash_detection (test_r01_manifest.ManifestTests)
----------------------------------------------------------------------
Traceback (most recent call last):
  File "H:\cursor\cursor\Vellistry\.worktrees\vel-integrate-86\tests\test_r01_manifest.py", line 41, in test_complete_pair_and_clash_detection
    finally:path.unlink(missing_ok=True)
  File "C:\Program Files\Python310\lib\pathlib.py", line 1206, in unlink
    self._accessor.unlink(self)
PermissionError: [WinError 32] The process cannot access the file because it is being used by another process: 'C:\\Users\\admin\\AppData\\Local\\Temp\\tmpenixske7.md'

----------------------------------------------------------------------
Ran 2 tests in 0.010s

FAILED (errors=1)
~~~~~~

## Execution reporting
Return an ExecutionBundle with FACT / INTERPRETATION / PROPOSAL sections,
tests actually performed, changes, evidence gaps, and pending owner approval.
