---
id: VEL-CP-0037
title: 'Context for VEL-TASK-0037: Reconcile offline setup guidance and remaining
  ChatGPT preflight wording'
type: context-pack
status: prepared
created_at: '2026-10-20'
version: 0.1.0
task_id: VEL-TASK-0037
base_commit: 477f83678e6026d211b97112b60f52cbdb1cb0d5
task_blob_sha: 187176ea56e6d780eb06d6998df40a355ad2fe44
inputs:
- path: PROJECT-CONSTITUTION.md
  role: authority-or-exact-preflight-setup-source
  git_blob_sha: 61f79c4dcb47bd99291c16490e8c00692e2ab23b
  source_status: accepted
- path: SOURCE-OF-TRUTH.md
  role: authority-or-exact-preflight-setup-source
  git_blob_sha: d5bec6f59108ac84715d77b65836f4499194c3f1
  source_status: accepted
- path: AGENTS.md
  role: authority-or-exact-preflight-setup-source
  git_blob_sha: 2feca4ec9ee0f11f5b6ac089c1d5c826d0e043ce
  source_status: active
- path: docs/agent-workflow/PR-COMPLIANCE.md
  role: authority-or-exact-preflight-setup-source
  git_blob_sha: 5f4845623aef3abb15fba7fbe8e78474902cca00
  source_status: unrecorded
- path: docs/agent-workflow/authorizations/VEL-REM-INTEGRATION-20261019.yaml
  role: authority-or-exact-preflight-setup-source
  git_blob_sha: 8023094b20f65e44b6ea6a002f4e2808b3e92be6
  source_status: unrecorded
- path: README.md
  role: authority-or-exact-preflight-setup-source
  git_blob_sha: fde8ad19e23c3ae821cd5175d80bc3fe8a589daa
  source_status: unrecorded
- path: scripts/hosted_supabase_preflight.mjs
  role: authority-or-exact-preflight-setup-source
  git_blob_sha: 8d399f49103168b08ea152a52c30fa73f44f9c49
  source_status: unrecorded
- path: tests/hosted_supabase_preflight.test.mjs
  role: authority-or-exact-preflight-setup-source
  git_blob_sha: e6d3b584987122150c87164d13014686e1e9e277
  source_status: unrecorded
- path: apps/web/src/lib/supabase/browser.ts
  role: authority-or-exact-preflight-setup-source
  git_blob_sha: a88cf4f422969fcf2f8247e9b6c0b86946c27b60
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0037/OWNER-SCOPE.md
  role: authority-or-exact-preflight-setup-source
  git_blob_sha: 50c40ea08a41f250bbec0fb9661a3663c3a09116
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0037/PR65-SOURCE-MAP.json
  role: authority-or-exact-preflight-setup-source
  git_blob_sha: 7c2b7f4d3d7f81e6358aaea8373fb3b4be66e1e2
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0037/PR65-PLACEHOLDER-AND-BROWSER-SOURCES.md
  role: authority-or-exact-preflight-setup-source
  git_blob_sha: 49b0c5607c37490fee7b8474dddbcba2432df84b
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0037/PUBLIC-DOCS.md
  role: authority-or-exact-preflight-setup-source
  git_blob_sha: 447266b99b961134b7f7f19eea1b8997d2557b2e
  source_status: unrecorded
source_gaps:
- id: HOSTED
  limitation: No live project state or credentials inspected; setup and preflight
    are offline only; third SQL planning-only and JWT risks remain.
- id: APPROVAL
  limitation: Original ChatGPTPR65 work remains historical; updated owner one-time
    repository delegation is separate from hosted approval.
prepared_by: agent_workflow.py
---

# VEL-CP-0037 — Reconcile offline setup guidance and remaining ChatGPT preflight wording

## Objective
Provide canonical placeholder per-app setup guidance without adding env files or weakening guards, correct missing-file diagnostics, and adopt the exact ChatGPTPR65 cloud-neutral browser error; preserve source-based PR65 disposition.

## Scope
**In:** README.md; scripts/hosted_supabase_preflight.mjs; tests/hosted_supabase_preflight.test.mjs; apps/web/src/lib/supabase/browser.ts; docs/agent-workflow/tasks/VEL-TASK-0037.yaml; docs/agent-workflow/context-packs/VEL-CP-0037.md; docs/agent-workflow/execution-bundles/VEL-EB-0037.md; docs/agent-workflow/inputs/VEL-TASK-0037/*; docs/agent-workflow/PR-COMPLIANCE.yaml; docs/reports/VEL-INTEGRATION-0037*; docs/reports/evidence/VEL-INTEGRATION-0037/*
**Out:** Any actual env file access, new env templates, SQL/CI/dependency/security/runtime behavior changes, original PR65/68 or ContextPack mutation; Hosted/auth/secrets/private/paid/admin/production/newMVP features/merge in implementation

## Evidence and authority constraints
The text below is a readable rendering of pinned Git blobs; exact raw bytes remain recoverable from the recorded commit/blob SHAs. Recorded source statuses remain in force: draft research is not accepted requirements. Original unarchived uploads are not independently verified merely by being mentioned.

**Known source gaps:**
- HOSTED: No live project state or credentials inspected; setup and preflight are offline only; third SQL planning-only and JWT risks remain.
- APPROVAL: Original ChatGPTPR65 work remains historical; updated owner one-time repository delegation is separate from hosted approval.

## Permissions and acceptance
**Allowed:** Read original pinned repository sources and public docs only; commitTask/source and validatedimmutableCP before edits, AfterCP, modify only listed README/message literals/browser wording and add synthetic missing-file regression; use only controlled synthetic temporary env fixtures, never owner config, Run actual repository checks/builds and produce factual EB/disposition; publish and independentlyreview draft then ready CI; delegated merge is a separate gated operation
**Owner approval required:** Hosted target/access/auth/dryrun/migration/fixtures/privatepilot or outside mandate scope; Unreviewed head, applicable failures, changed thirdSQL bytes or missing distinctreview prohibit integration
**Acceptance criteria:**
- Regression-first missing-file message test fails for absent example guidance then passes with an existing README anchor; helper logic unchanged except two message literals
- Browser source exactly matches original ChatGPTPR65 browser.ts; no API/auth semantics changed
- One canonical README section documents all7existing variables with obvious placeholders, correct pnpm commands, ignored files, no inherited overrides, separate hosted holds; legacy rootexample explicitly historical only and unchanged
- Full10-file PR65 disposition maps adopted/current-equivalent/excluded historical source without misleading authorship or missing coverage
- Actual67Library/updatedpreflight/check/build/frozeninstall and governance validators; independent trusted review and actualready/postmainCI; no hosted claims

## Deliverables
- Unique committed Task/source and validated committed immutableCP before operative changes
- Bounded README/helper/browser correction and regression-first evidence
- Complete EB and PR65source disposition plus exacthead independentreview/CI; delegated integration only after all gates

## Pinned source snapshots
Git commit: `477f83678e6026d211b97112b60f52cbdb1cb0d5`. Read source statuses independently from task intent.

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

### `README.md` @ `fde8ad19e23c3ae821cd5175d80bc3fe8a589daa`

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

The owner-selected desktop development target is **Supabase Cloud**. A local
Supabase/Docker stack is **not required** for that connection. Follow the
[historical hosted setup plan](docs/plans/VEL-CURSOR-DESKTOP-SETUP-PLAN-2026-10-11.md)
with the current AGENTS role contract; do not execute its old Cursor assignment.
Runtime environment values belong in untracked local configuration. Do not print
or commit keys/tokens, use service-role authority in normal author paths, or run
remote migration/reset/fixture commands without separate authorization.

Disposable local Supabase/PostgreSQL services are used for isolated CI tests;
those fixtures do not replace the selected hosted development target or establish
hosted acceptance. Local resets are destructive and permitted only on explicitly
disposable instances. This documentation task does not authorize cloud operations.

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
reference environment; a historical Windows R01 fixture descriptor issue remains).
Green checks do not prove hosted RLS acceptance, direct signed-out JWT revocation,
author usability, billing savings, branch-protection enforcement or release readiness.
Owner-only approval remains necessary before merge and consequential operations.

Historical integration: PR #43 **merged on 2026-10-10**, restoring21 research files. Its seven passing workflows were research evidence; see the [recovery report](docs/reports/REPOSITORY-INTEGRITY-RECOVERY-2026-10-10.md), not a fresh current-head result.
~~~~~~

### `scripts/hosted_supabase_preflight.mjs` @ `8d399f49103168b08ea152a52c30fa73f44f9c49`

~~~~~~markdown
#!/usr/bin/env node
/**
 * Vellistry hosted-development configuration preflight.
 *
 * Reads only ignored local env files; makes NO network calls or DB changes.
 * Does not print project keys, credentials, or file contents. Never use this
 * result as proof of a connected database, RLS, schema, or login.
 */
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { createRequire } from "node:module";
import { pathToFileURL } from "node:url";

// Resolve the same pinned dotenv parser used by the API runtime, not Node's
// different env-file grammar. Loader errors remain fail-closed and redacted.
const apiRequire = createRequire(new URL("../apps/api/package.json", import.meta.url));

export const WEB_ENV = "apps/web/.env.local";
export const API_ENV = "apps/api/.env";
const VALID_REF = /^[a-z0-9]{20}$/;
const PUBLISHABLE = /^sb_publishable_[A-Za-z0-9_-]{8,}$/;

function correctCloudUrl(value, projectRef) {
  if (typeof value !== "string" || !VALID_REF.test(projectRef)) return false;
  try {
    const url = new URL(value);
    return url.protocol === "https:"
      && url.hostname === projectRef + ".supabase.co"
      && url.port === ""
      && url.pathname === "/"
      && url.search === ""
      && url.hash === ""
      && url.username === ""
      && url.password === "";
  } catch {
    return false;
  }
}

/** Pure, synthetic-testable evaluation. Error text deliberately excludes input values. */
export function validateHostedConfig({ web, api, expectedProjectRef }) {
  const errors = [];
  if (!VALID_REF.test(expectedProjectRef ?? "")) {
    errors.push("Expected Supabase project reference must be 20 lowercase letters/digits.");
    return { ok: false, errors };
  }

  if (!correctCloudUrl(web.NEXT_PUBLIC_SUPABASE_URL, expectedProjectRef)) {
    errors.push("Web Supabase URL must be the HTTPS API URL of the selected development project.");
  }
  if (!correctCloudUrl(api.SUPABASE_URL, expectedProjectRef)) {
    errors.push("API Supabase URL must match the selected HTTPS development project.");
  }
  const webKey = web.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  const apiKey = api.SUPABASE_PUBLISHABLE_KEY;
  if (typeof webKey !== "string" || !PUBLISHABLE.test(webKey)) {
    errors.push("Web must use a modern sb_publishable_ key, never a secret/service_role key.");
  }
  if (typeof apiKey !== "string" || !PUBLISHABLE.test(apiKey)) {
    errors.push("API must use a modern sb_publishable_ key, never a secret/service_role key.");
  }
  if (typeof webKey === "string" && typeof apiKey === "string" && webKey !== apiKey) {
    errors.push("Web and API must use the same publishable key.");
  }
  if (web.VELLISTRY_API_BASE_URL !== "http://127.0.0.1:4100") {
    errors.push("Web BFF must target the loopback Nest API at http://127.0.0.1:4100.");
  }
  if (api.API_HOST !== "127.0.0.1" || api.API_PORT !== "4100") {
    errors.push("Nest API must listen on 127.0.0.1:4100 during desktop development.");
  }
  return { ok: errors.length === 0, errors };
}

function readLocalEnv(root, name) {
  const path = resolve(root, name);
  if (!existsSync(path)) return { missing: true, values: {} };
  try {
    return { missing: false, values: apiRequire("dotenv").parse(readFileSync(path, "utf8")) };
  } catch {
    // Never reflect a parser exception that may contain confidential source text.
    return { missing: false, parseError: true, values: {} };
  }
}


/**
 * This bounded guard supports one explicit file per app. Next and dotenv can
 * otherwise override those files. Inspect names/presence only: never load or
 * print inherited credential values or competing file contents.
 */
function runtimeLayoutErrors(root, environment) {
  const errors = [];
  const runtimeNames = ["NEXT_PUBLIC_SUPABASE_URL", "NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY",
    "VELLISTRY_API_BASE_URL", "SUPABASE_URL", "SUPABASE_PUBLISHABLE_KEY", "API_HOST", "API_PORT"];
  if (Object.hasOwn(environment, "DOTENV_KEY")
    || runtimeNames.some(name => Object.hasOwn(environment, name))
    || Object.keys(environment).some(name => name.toUpperCase().startsWith("DOTENV_CONFIG_"))) {
    errors.push("Inherited app or dotenv configuration can override the checked files. Use a clean shell for this file-only preflight; values were not read or printed.");
  }
  if (environment.NODE_ENV !== undefined && !["development", "production"].includes(environment.NODE_ENV)) {
    errors.push("This desktop preflight requires development or production mode; Next test mode does not load .env.local.");
  }
  for (const name of [".env.development.local", ".env.production.local", ".env.test.local",
    ".env.development", ".env.production", ".env.test", ".env"]) {
    if (existsSync(resolve(root, "apps/web", name))) {
      errors.push("Competing apps/web/" + name + " is outside this file-only preflight. Review it without overwriting existing files.");
    }
  }
  return errors;
}
/** Produces safe, non-secret stdout. Does not contact Supabase. */
export function checkLocalEnvironment(root, expectedProjectRef, { environment = process.env } = {}) {
  const web = readLocalEnv(root, WEB_ENV);
  const api = readLocalEnv(root, API_ENV);
  const errors = runtimeLayoutErrors(root, environment);
  if (web.missing) errors.push("Missing " + WEB_ENV + " (copy its .env.example locally).");
  if (api.missing) errors.push("Missing " + API_ENV + " (copy its .env.example locally).");
  if (web.parseError) errors.push("Could not parse " + WEB_ENV + ".");
  if (api.parseError) errors.push("Could not parse " + API_ENV + ".");
  if (errors.length === 0) {
    errors.push(...validateHostedConfig({
      web: web.values,
      api: api.values,
      expectedProjectRef,
    }).errors);
  }
  return {
    ok: errors.length === 0,
    messages: errors.length === 0
      ? ["PASS: local Web/API cloud settings are internally consistent.",
         "NOT TESTED: cloud connectivity, database schema, RLS, Auth, or real book saves."]
      : ["BLOCKED: hosted development configuration needs attention.", ...errors],
  };
}

if (process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url) {
  const ref = process.argv[2];
  const result = checkLocalEnvironment(process.cwd(), ref);
  for (const message of result.messages) console.log(message);
  if (!result.ok) process.exitCode = 1;
}
~~~~~~

### `tests/hosted_supabase_preflight.test.mjs` @ `e6d3b584987122150c87164d13014686e1e9e277`

~~~~~~markdown
import { spawnSync } from "node:child_process";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import assert from "node:assert/strict";
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { test } from "node:test";
import { checkLocalEnvironment, validateHostedConfig } from "../scripts/hosted_supabase_preflight.mjs";

const ref = "lflkcrnriitrbclangyr";
const url = "https://" + ref + ".supabase.co";
const key = "sb_publishable_synthetic_only_0123456789";
const good = () => ({
  expectedProjectRef: ref,
  web: {
    NEXT_PUBLIC_SUPABASE_URL: url,
    NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: key,
    VELLISTRY_API_BASE_URL: "http://127.0.0.1:4100",
  },
  api: {
    SUPABASE_URL: url,
    SUPABASE_PUBLISHABLE_KEY: key,
    API_HOST: "127.0.0.1",
    API_PORT: "4100",
  },
});

test("accepts coherent hosted project URL, modern publishable key and loopback Nest", () => {
  assert.deepEqual(validateHostedConfig(good()), { ok: true, errors: [] });
});

test("rejects another cloud project, even if Web and API agree on that project", () => {
  const cfg = good();
  cfg.web.NEXT_PUBLIC_SUPABASE_URL = "https://differentproject123.supabase.co";
  cfg.api.SUPABASE_URL = cfg.web.NEXT_PUBLIC_SUPABASE_URL;
  assert.equal(validateHostedConfig(cfg).ok, false);
});

test("rejects localhost Supabase URL; local containers are not the selected backend", () => {
  const cfg = good();
  cfg.web.NEXT_PUBLIC_SUPABASE_URL = "http://127.0.0.1:54321";
  assert.equal(validateHostedConfig(cfg).ok, false);
});

test("rejects secret/service-role key in browser and backend publishable slot", () => {
  const cfg = good();
  cfg.web.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY = "sb_secret_do_not_use_0123456789";
  cfg.api.SUPABASE_PUBLISHABLE_KEY = "sb_secret_do_not_use_0123456789";
  const result = validateHostedConfig(cfg);
  assert.equal(result.ok, false);
  assert.ok(result.errors.length >= 2);
  assert.equal(result.errors.join(" ").includes("do_not_use_0123456789"), false);
});

test("rejects legacy JWT key in the modern publishable-key slot", () => {
  const cfg = good();
  cfg.web.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiJ9.payload.signature";
  assert.equal(validateHostedConfig(cfg).ok, false);
});

test("rejects mismatched Web/API project publishable keys", () => {
  const cfg = good();
  cfg.api.SUPABASE_PUBLISHABLE_KEY = "sb_publishable_different_synthetic_123456";
  assert.equal(validateHostedConfig(cfg).ok, false);
});

test("rejects externally exposed API host and wrong BFF upstream", () => {
  const cfg = good();
  cfg.api.API_HOST = "0.0.0.0";
  cfg.web.VELLISTRY_API_BASE_URL = "https://api.example.test";
  assert.equal(validateHostedConfig(cfg).ok, false);
});

test("rejects invalid or omitted expected project reference", () => {
  assert.equal(validateHostedConfig({ ...good(), expectedProjectRef: "" }).ok, false);
  assert.equal(validateHostedConfig({ ...good(), expectedProjectRef: "production" }).ok, false);
});

test("missing local files are reported without consulting environment or network", () => {
  const root = mkdtempSync(join(tmpdir(), "vellistry-hosted-env-"));
  try {
    const result = checkLocalEnvironment(root, ref);
    assert.equal(result.ok, false);
    assert.ok(result.messages.join(" ").includes("apps/web/.env.local"));
    assert.ok(result.messages.join(" ").includes("apps/api/.env"));
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("reads ignored local files, never emits key values in success output", () => {
  const root = mkdtempSync(join(tmpdir(), "vellistry-hosted-env-"));
  try {
    mkdirSync(join(root, "apps/web"), { recursive: true });
    mkdirSync(join(root, "apps/api"), { recursive: true });
    writeFileSync(join(root, "apps/web/.env.local"),
      "NEXT_PUBLIC_SUPABASE_URL=" + url + "\n"
      + "NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=" + key + "\n"
      + "VELLISTRY_API_BASE_URL=http://127.0.0.1:4100\n");
    writeFileSync(join(root, "apps/api/.env"),
      "SUPABASE_URL=" + url + "\n"
      + "SUPABASE_PUBLISHABLE_KEY=" + key + "\n"
      + "API_HOST=127.0.0.1\nAPI_PORT=4100\n");
    const result = checkLocalEnvironment(root, ref);
    assert.equal(result.ok, true);
    assert.equal(result.messages.join(" ").includes(key), false);
    assert.match(result.messages[1], /NOT TESTED/);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("invalid local config never leaks the offending key in diagnostics", () => {
  const root = mkdtempSync(join(tmpdir(), "vellistry-hosted-env-"));
  const secret = "sb_secret_fake_private_123456789";
  try {
    mkdirSync(join(root, "apps/web"), { recursive: true });
    mkdirSync(join(root, "apps/api"), { recursive: true });
    writeFileSync(join(root, "apps/web/.env.local"),
      "NEXT_PUBLIC_SUPABASE_URL=" + url + "\n"
      + "NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=" + secret + "\n"
      + "VELLISTRY_API_BASE_URL=http://127.0.0.1:4100\n");
    writeFileSync(join(root, "apps/api/.env"),
      "SUPABASE_URL=" + url + "\n"
      + "SUPABASE_PUBLISHABLE_KEY=" + key + "\n"
      + "API_HOST=127.0.0.1\nAPI_PORT=4100\n");
    const result = checkLocalEnvironment(root, ref);
    assert.equal(result.ok, false);
    assert.equal(result.messages.join(" ").includes(secret), false);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});


function fixture(run) {
  const root = mkdtempSync(join(tmpdir(), "vellistry-preflight-codex-"));
  const cfg = good();
  try {
    mkdirSync(join(root, "apps/web"), { recursive: true });
    mkdirSync(join(root, "apps/api"), { recursive: true });
    for (const [app, values, file] of [["web", cfg.web, ".env.local"], ["api", cfg.api, ".env"]]) {
      writeFileSync(join(root, "apps", app, file),
        Object.entries(values).map(([name, value]) => name + "=" + value).join("\n") + "\n");
    }
    return run(root);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
}

test("does not pass file validation when inherited runtime settings override those files", () => fixture(root => {
  for (const name of ["NEXT_PUBLIC_SUPABASE_URL", "NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY",
    "VELLISTRY_API_BASE_URL", "SUPABASE_URL", "SUPABASE_PUBLISHABLE_KEY", "API_HOST", "API_PORT",
    "DOTENV_CONFIG_PATH", "DOTENV_KEY"]) {
    const result = checkLocalEnvironment(root, ref, { environment: { [name]: "synthetic_override_never_print" } });
    assert.equal(result.ok, false, name);
    assert.equal(result.messages.join(" ").includes("synthetic_override_never_print"), false);
  }
}));

test("rejects competing Next env files that the actual runtime would also read", () => fixture(root => {
  for (const name of [".env.development.local", ".env.production.local", ".env.test.local",
    ".env.development", ".env.production", ".env.test", ".env"]) {
    const path = join(root, "apps/web", name);
    writeFileSync(path, "NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_secret_synthetic_never_print\n");
    const before = readFileSync(path, "utf8");
    const result = checkLocalEnvironment(root, ref, { environment: {} });
    assert.equal(result.ok, false, name);
    assert.equal(result.messages.join(" ").includes("sb_secret_synthetic_never_print"), false);
    assert.equal(readFileSync(path, "utf8"), before);
    rmSync(path);
  }
}));

test("rejects test mode because Next does not load the required .env.local there", () => fixture(root => {
  assert.equal(checkLocalEnvironment(root, ref, { environment: { NODE_ENV: "test" } }).ok, false);
}));

test("actual Next runtime precedence demonstrates why competing env files must block preflight", () => fixture(root => {
  const webRequire = createRequire(new URL("../apps/web/package.json", import.meta.url));
  const nextRequire = createRequire(webRequire.resolve("next/package.json"));
  const envLoader = nextRequire.resolve("@next/env");
  writeFileSync(join(root, "apps/web/.env.development.local"),
    "NEXT_PUBLIC_SUPABASE_URL=https://differentproject1234.supabase.co\n");
  const script = "const {loadEnvConfig}=require(process.argv[1]);"
    + "loadEnvConfig(process.argv[2],true,{info(){},error(){}},true);"
    + "if(process.env.NEXT_PUBLIC_SUPABASE_URL!=='https://differentproject1234.supabase.co') process.exit(2);";
  const observed = spawnSync(process.execPath, ["-e", script, envLoader, join(root, "apps/web")],
    { encoding: "utf8", env: cleanChildEnvironment() });
  assert.equal(observed.status, 0);
  assert.equal(checkLocalEnvironment(root, ref, { environment: {} }).ok, false);
}));

function cleanChildEnvironment() {
  return { PATH: process.env.PATH ?? "", SystemRoot: process.env.SystemRoot ?? "" };
}

test("actual CLI succeeds and rejects unsafe config without printing synthetic key values", () => fixture(root => {
  const script = fileURLToPath(new URL("../scripts/hosted_supabase_preflight.mjs", import.meta.url));
  const invoke = () => spawnSync(process.execPath, [script, ref],
    { cwd: root, encoding: "utf8", env: cleanChildEnvironment() });
  const beforeWeb = readFileSync(join(root, "apps/web/.env.local"), "utf8");
  const beforeApi = readFileSync(join(root, "apps/api/.env"), "utf8");
  const success = invoke();
  assert.equal(success.status, 0);
  assert.match(success.stdout, /NOT TESTED/);
  assert.equal(success.stdout.includes(key), false);
  assert.equal(readFileSync(join(root, "apps/web/.env.local"), "utf8"), beforeWeb);
  assert.equal(readFileSync(join(root, "apps/api/.env"), "utf8"), beforeApi);
  const fakeSecret = "sb_secret_synthetic_cli_never_print";
  writeFileSync(join(root, "apps/web/.env.local"),
    beforeWeb.replace(key, fakeSecret));
  const failure = invoke();
  assert.equal(failure.status, 1);
  assert.equal((failure.stdout + failure.stderr).includes(fakeSecret), false);
}));

test("actual CLI fails safely with absent env files", () => {
  const root = mkdtempSync(join(tmpdir(), "vellistry-missing-env-"));
  try {
    const script = fileURLToPath(new URL("../scripts/hosted_supabase_preflight.mjs", import.meta.url));
    const result = spawnSync(process.execPath, [script, ref],
      { cwd: root, encoding: "utf8", env: cleanChildEnvironment() });
    assert.equal(result.status, 1);
    assert.match(result.stdout, /BLOCKED/);
    assert.equal(result.stderr, "");
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("cloud URL rejects credentials, ports, lookalike hosts, path and query additions", () => {
  for (const bad of ["http://" + ref + ".supabase.co", url + ".example.test", url + ":444",
    "https://user:synthetic_password@" + ref + ".supabase.co", url + "/rest/v1",
    url + "?token=synthetic", url + "#fragment"]) {
    const cfg = good();
    cfg.web.NEXT_PUBLIC_SUPABASE_URL = bad;
    assert.equal(validateHostedConfig(cfg).ok, false);
    assert.equal(validateHostedConfig(cfg).errors.join(" ").includes("synthetic_password"), false);
  }
});

test("unreadable env paths fail without reflecting filesystem or parser errors", () => fixture(root => {
  rmSync(join(root, "apps/web/.env.local"));
  mkdirSync(join(root, "apps/web/.env.local"));
  const result = checkLocalEnvironment(root, ref, { environment: {} });
  assert.equal(result.ok, false);
  assert.match(result.messages.join(" "), /Could not parse/);
}));


// Exercise the same installed loaders as each app without starting a server.
function observeApi(root, name, expected) {
  const apiRequire = createRequire(new URL("../apps/api/package.json", import.meta.url));
  const script = "if(process.env[process.argv[1]]!==process.argv[2]) process.exit(2);";
  const observed = spawnSync(process.execPath,
    ["-r", apiRequire.resolve("dotenv/config"), "-e", script, name, expected],
    { cwd: join(root, "apps/api"), encoding: "utf8", env: cleanChildEnvironment() });
  assert.equal(observed.status, 0, "actual API loader must observe the synthetic override");
}

test("rejects colon-style API host override observed by actual dotenv runtime", () => fixture(root => {
  const path = join(root, "apps/api/.env");
  writeFileSync(path, readFileSync(path, "utf8") + "API_HOST: 0.0.0.0\n");
  observeApi(root, "API_HOST", "0.0.0.0");
  assert.equal(checkLocalEnvironment(root, ref, { environment: {} }).ok, false);
}));

test("rejects colon-style upstream override observed by actual Next runtime", () => fixture(root => {
  const path = join(root, "apps/web/.env.local");
  writeFileSync(path, readFileSync(path, "utf8") + "VELLISTRY_API_BASE_URL: https://outside.example.test\n");
  const webRequire = createRequire(new URL("../apps/web/package.json", import.meta.url));
  const nextRequire = createRequire(webRequire.resolve("next/package.json"));
  const script = "const {loadEnvConfig}=require(process.argv[1]);"
    + "loadEnvConfig(process.argv[2],true,{info(){},error(){}},true);"
    + "if(process.env.VELLISTRY_API_BASE_URL!=='https://outside.example.test') process.exit(2);";
  const observed = spawnSync(process.execPath,
    ["-e", script, nextRequire.resolve("@next/env"), join(root, "apps/web")],
    { encoding: "utf8", env: cleanChildEnvironment() });
  assert.equal(observed.status, 0, "actual Next loader must observe the synthetic override");
  assert.equal(checkLocalEnvironment(root, ref, { environment: {} }).ok, false);
}));

test("rejects colon-style unsafe key without leaking its synthetic value", () => fixture(root => {
  const path = join(root, "apps/api/.env");
  const synthetic = "sb_secret_synthetic_parser_never_print";
  writeFileSync(path, readFileSync(path, "utf8") + "SUPABASE_PUBLISHABLE_KEY: " + synthetic + "\n");
  observeApi(root, "SUPABASE_PUBLISHABLE_KEY", synthetic);
  const result = checkLocalEnvironment(root, ref, { environment: {} });
  assert.equal(result.ok, false);
  assert.equal(result.messages.join(" ").includes(synthetic), false);
}));
~~~~~~

### `apps/web/src/lib/supabase/browser.ts` @ `a88cf4f422969fcf2f8247e9b6c0b86946c27b60`

~~~~~~markdown
"use client";
import {createBrowserClient} from "@supabase/ssr";
export function getBrowserSupabase(){
 const url=process.env.NEXT_PUBLIC_SUPABASE_URL;
 const key=process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
 if(!url||!key)throw new Error("Local Supabase configuration is missing");
 return createBrowserClient(url,key);
}
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0037/OWNER-SCOPE.md` @ `50c40ea08a41f250bbec0fb9661a3663c3a09116`

~~~~~~markdown
One-time owner delegation,19Oct2026,remediation-only. Formal merged recordVEL-REM-INTEGRATION-20261019 applies. Verified main25f586b5373164dcf7173250300015091dea056e; postmain39455095647SUCCESS. This task corrects demonstrated setup/preflight guidance defects and adopts original ChatGPTPR65 browser error wording. Do not edit PR65/68 branches, original packs or SQL/CI/application behavior. Preserve strict env-path deny; canonical placeholder instructions replace absent example guidance, not a policy exception. No actual local env files are read/written. No hosted credentials/inventory/Auth/migration/private/paid/settings/deploy operations. Separate trusted review/actualready/postmainCI required before delegated repository integration. Historical source SHAs/authorship preserved; no retrospective Codex credit for ChatGPT code.
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0037/PR65-SOURCE-MAP.json` @ `7c2b7f4d3d7f81e6358aaea8373fb3b4be66e1e2`

~~~~~~markdown
[
  {
    "path": ".env.example",
    "source": "604e1ebfd0baab930ee4dc39aecf7289dc64188a",
    "blob": "40028ce40ffd0710c6583ba458158e5b98554605",
    "sha256": "5e34610415b08c0102654b5a9c8e52756bebab15f21b3f17e7845e69c0be179e",
    "authorship": "ChatGPT-authored PR65; not Codex original"
  },
  {
    "path": ".github/workflows/implementation-foundation.yml",
    "source": "604e1ebfd0baab930ee4dc39aecf7289dc64188a",
    "blob": "2d0005b7546f5a9ad2523012f2ab09467a82221d",
    "sha256": "2fd9037c04ba5344125de782359a7f52d0f73e3be11ef608650abe7a9765fa01",
    "authorship": "ChatGPT-authored PR65; not Codex original"
  },
  {
    "path": "CURRENT-STATE.md",
    "source": "604e1ebfd0baab930ee4dc39aecf7289dc64188a",
    "blob": "48e3cdb03270d87957a660b9fd53c7e4efcf645c",
    "sha256": "949d4c3acc7becd808b41d4ad07295b0bff180fff314c6ba77d394c2d512d4f5",
    "authorship": "ChatGPT-authored PR65; not Codex original"
  },
  {
    "path": "apps/api/.env.example",
    "source": "604e1ebfd0baab930ee4dc39aecf7289dc64188a",
    "blob": "a3c6cb46fea381e005009783e2f2dce10d687fde",
    "sha256": "80cd162f5a87e00e0c9e89bb61bbc41b21e7cdbb4f299ec18ac190dba29af9ec",
    "authorship": "ChatGPT-authored PR65; not Codex original"
  },
  {
    "path": "apps/web/.env.example",
    "source": "604e1ebfd0baab930ee4dc39aecf7289dc64188a",
    "blob": "f91cf4cf16ec59a96774b50b9715d7fdda6f4900",
    "sha256": "ffc4f869d744774d8c14fe1ac6d61bab8db0a58636b84a95afdac50ccbe0bc8d",
    "authorship": "ChatGPT-authored PR65; not Codex original"
  },
  {
    "path": "apps/web/src/lib/supabase/browser.ts",
    "source": "604e1ebfd0baab930ee4dc39aecf7289dc64188a",
    "blob": "4f84f7605f66e3e0dad5f686a6687c4a90a1b507",
    "sha256": "d34a8ec5807c101ebbec1adf8ef4c95e321d5db7b363559bc06b7900b16b9b68",
    "authorship": "ChatGPT-authored PR65; not Codex original"
  },
  {
    "path": "docs/plans/VEL-IMP-001B-HOSTED-CLOUD-ACCEPTANCE-2026-10-14.md",
    "source": "604e1ebfd0baab930ee4dc39aecf7289dc64188a",
    "blob": "3d17977aca69e5f16f7634ee08326e2a6fa93438",
    "sha256": "9c285d34c731d6d524e0c420e760f7ec794cdf1951bf74938d4934319a8a4762",
    "authorship": "ChatGPT-authored PR65; not Codex original"
  },
  {
    "path": "package.json",
    "source": "604e1ebfd0baab930ee4dc39aecf7289dc64188a",
    "blob": "df391930b07e1c1ce41d2aa4cb5d3030abd8d824",
    "sha256": "735428d8dcdb8101e4382bc3815811ac74fe681de49ea358b83b8f8c256ed2a6",
    "authorship": "ChatGPT-authored PR65; not Codex original"
  },
  {
    "path": "scripts/hosted_supabase_preflight.mjs",
    "source": "604e1ebfd0baab930ee4dc39aecf7289dc64188a",
    "blob": "b7f4d5a7a1529b4bb67fd84ac9512d9eb0c0caea",
    "sha256": "d562cd5df21338e7446307db058e0c898d31062bf2146ccb477101330d893f27",
    "authorship": "ChatGPT-authored PR65; not Codex original"
  },
  {
    "path": "tests/hosted_supabase_preflight.test.mjs",
    "source": "604e1ebfd0baab930ee4dc39aecf7289dc64188a",
    "blob": "9be2a35b0ab7bac972b67ffffe39c80770fdc42d",
    "sha256": "d2ffb28a40b3e4b0874edb7b11341db21415b4e5f44d7e01f0e720352497fd20",
    "authorship": "ChatGPT-authored PR65; not Codex original"
  }
]
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0037/PR65-PLACEHOLDER-AND-BROWSER-SOURCES.md` @ `49b0c5607c37490fee7b8474dddbcba2432df84b`

~~~~~~markdown
# .env.example at 604e1ebfd0baab930ee4dc39aecf7289dc64188a

# Reference map ONLY. Root .env is not automatically loaded by both apps.
# Copy the per-app samples instead:
#   apps/web/.env.example -> apps/web/.env.local (ignored by Git)
#   apps/api/.env.example -> apps/api/.env       (ignored by Git)
#
# Use the SAME vetted hosted Supabase Cloud development project in both.
# Modern sb_publishable_ API key ONLY. Never use sb_secret_ or service_role.
# Validate locally with: corepack pnpm check:hosted-env
#
# The runtime variable names are:
# Web: NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
#      VELLISTRY_API_BASE_URL=http://127.0.0.1:4100
# Nest: SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY,
#       API_PORT=4100, API_HOST=127.0.0.1

# apps/api/.env.example at 604e1ebfd0baab930ee4dc39aecf7289dc64188a

# Copy to apps/api/.env, then fill values on YOUR COMPUTER.
# Use the SAME hosted development project's publishable key as apps/web/.env.local.
# Never use the service_role or sb_secret_ key for ordinary author requests.
SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co
SUPABASE_PUBLISHABLE_KEY=REPLACE_WITH_SB_PUBLISHABLE_KEY

# Keep Nest private to the workstation.
API_PORT=4100
API_HOST=127.0.0.1

# apps/web/.env.example at 604e1ebfd0baab930ee4dc39aecf7289dc64188a

# Copy to apps/web/.env.local, then fill values on YOUR COMPUTER.
# Get the project URL and sb_publishable_ key from Supabase Dashboard > Connect.
# Vellistry's dev project is vellistry-dev; do not use a real-author/production project.
# Never paste keys into a GitHub issue, chat, PR, or agent prompt.
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=REPLACE_WITH_SB_PUBLISHABLE_KEY

# Browser calls same-origin /api/books; Next BFF forwards to local Nest.
VELLISTRY_API_BASE_URL=http://127.0.0.1:4100

# apps/web/src/lib/supabase/browser.ts at 604e1ebfd0baab930ee4dc39aecf7289dc64188a

"use client";
import {createBrowserClient} from "@supabase/ssr";
export function getBrowserSupabase(){
 const url=process.env.NEXT_PUBLIC_SUPABASE_URL;
 const key=process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
 if(!url||!key)throw new Error("Supabase project configuration is missing");
 return createBrowserClient(url,key);
}
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0037/PUBLIC-DOCS.md` @ `447266b99b961134b7f7f19eea1b8997d2557b2e`

~~~~~~markdown
Public documentation inspected20Oct2026, no authenticated project access. https://supabase.com/docs/guides/getting-started/api-keys distinguishes publishable keys from privileged secret keys, which bypass RLS. Vellistry retains its existing publishable-key plus verified-author-token path, never a privileged server key. https://supabase.com/changelog inspected for relevant breaking changes; DataAPI exposure is a separately verified hosted prerequisite, not inferred from existing SQL. The markdown endpoints failed in the browser tool; HTML official pages were opened successfully. No API/dependency/runtime changes are required for this wording-only task.
~~~~~~

## Execution reporting
Return an ExecutionBundle with FACT / INTERPRETATION / PROPOSAL sections,
tests actually performed, changes, evidence gaps, and pending owner approval.
