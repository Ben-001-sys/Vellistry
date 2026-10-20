---
id: VEL-CP-0023
title: 'Context for VEL-TASK-0023: LANG-DECISIONS: source-grounded15-ID disposition
  matrix without feature/approval promotion'
type: context-pack
status: prepared
created_at: '2026-10-19'
version: 0.1.0
task_id: VEL-TASK-0023
base_commit: b56f14134039f8e5e09b6fd5a20d0ed5680c1eff
task_blob_sha: 29a2ce8ec86e4164fef0c2355073728844394f9b
inputs:
- path: PROJECT-CONSTITUTION.md
  role: language-evidence
  git_blob_sha: 61f79c4dcb47bd99291c16490e8c00692e2ab23b
  source_status: accepted
- path: SOURCE-OF-TRUTH.md
  role: language-evidence
  git_blob_sha: d5bec6f59108ac84715d77b65836f4499194c3f1
  source_status: accepted
- path: AGENTS.md
  role: language-evidence
  git_blob_sha: 2feca4ec9ee0f11f5b6ac089c1d5c826d0e043ce
  source_status: active
- path: docs/agent-workflow/PR-COMPLIANCE.md
  role: language-evidence
  git_blob_sha: 5f4845623aef3abb15fba7fbe8e78474902cca00
  source_status: unrecorded
- path: apps/web/src/app/books/page.tsx
  role: language-evidence
  git_blob_sha: 64352dc27e657b4a078c0ffc3d6f2153942fa572
  source_status: unrecorded
- path: apps/web/src/app/login/page.tsx
  role: language-evidence
  git_blob_sha: 2c499b7259d75a3bebfe780122b30aa51439e7ea
  source_status: unrecorded
- path: apps/web/src/lib/library/book-library-state.ts
  role: language-evidence
  git_blob_sha: a4bbb94660928bc886df66a81fd57bec6bae746f
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0023/OWNER-SCOPE.md
  role: owner-authorized-bounded-language-scope
  git_blob_sha: 775b054a221d44dc31198f24e44ccf4afbafb566
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0023/MANDATE-EXCERPTS.md
  role: owner-authorized-bounded-language-scope
  git_blob_sha: b7159033a4c671cf43d141d1c9a4d5e805998d54
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0023/SOURCE-REFS.json
  role: owner-authorized-bounded-language-scope
  git_blob_sha: a17923bceb89981d1204420dae54c515bb360902
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0023/LANGUAGE-TASK-EXCERPTS.md
  role: task-selected-exact-source-excerpts
  git_blob_sha: 279df86189dc24522b2b7d0ec3cd73a83127876b
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0023/ACCEPTED-DECISION-EXCERPTS.md
  role: task-selected-exact-source-excerpts
  git_blob_sha: c1240fa41f0c02787d210b5fc22ba0c1832e698c
  source_status: unrecorded
source_gaps:
- id: APPROVAL
  limitation: Master authorizes supported ordinary terminology;15 proposals are not
    blanket owner approval; final adoption/merge remains owner.
- id: RUNTIME
  limitation: No hostedAuth/signup/email settings, legal clearance, certified rule
    mapping, provider availability/pricing or author usability observations.
- id: PROVENANCE
  limitation: Merged language source inherited ChatGPT PR77 through PR80; this task
    authors only a separate Codex review matrix.
prepared_by: agent_workflow.py
---

# VEL-CP-0023 — LANG-DECISIONS: source-grounded15-ID disposition matrix without feature/approval promotion

## Objective
Reconcile all LANG-P01–P15 decisions against verified merged source; distinguish supported terminology from proposed labels and unverified runtime guarantees.

## Scope
**In:** docs/reports/VEL-LANG-DECISIONS-*; docs/reports/evidence/VEL-LANG-DECISIONS/*; docs/agent-workflow/tasks/VEL-TASK-0023.yaml; docs/agent-workflow/context-packs/VEL-CP-0023.md; docs/agent-workflow/execution-bundles/VEL-EB-0023.md; docs/agent-workflow/inputs/VEL-TASK-0023/*; docs/agent-workflow/PR-COMPLIANCE.yaml
**Out:** LANGUAGE.md/application/UI/API/SQL/CI/acceptedADR or historical source modifications; Hosted/auth/secret/private/paid/admin/production/merge operations or authority changes

## Evidence and authority constraints
The text below is a readable rendering of pinned Git blobs; exact raw bytes remain recoverable from the recorded commit/blob SHAs. Recorded source statuses remain in force: draft research is not accepted requirements. Original unarchived uploads are not independently verified merely by being mentioned.

**Known source gaps:**
- APPROVAL: Master authorizes supported ordinary terminology;15 proposals are not blanket owner approval; final adoption/merge remains owner.
- RUNTIME: No hostedAuth/signup/email settings, legal clearance, certified rule mapping, provider availability/pricing or author usability observations.
- PROVENANCE: Merged language source inherited ChatGPT PR77 through PR80; this task authors only a separate Codex review matrix.

## Permissions and acceptance
**Allowed:** Read committed source and owner-named mandate, record exact hashes, Commit task/source and validated immutablepack before scoped docs/evidence, Run safe synthetic tests and governance checks, publishdraftPR/fullCI and advisoryreview
**Owner approval required:** Owner adoption/merge, new canonical branded labels or policychanges; Any hosted/auth/SQL/private/paid/admin/production or scopeexpansion
**Acceptance criteria:**
- Exactly15 unique LANG IDs and all eight requested matrix fields
- Source pinned to actualmain and languageauthorship preserved, nofile/surface implementation implied
- Existing unknown-save/explicitduplicate-risk protections and conditional signup wording represented accurately
- Legal/rulecatalog/hosted/AIcost/backup/IME acceptance unknowns explicit; LANGUAGE remains proposed-owner-review
- Actual source/consistency tests and exact-head CI/review reported, no self-approval

## Deliverables
- CommittedTask/source then immutableCP before report implementation
- 15-row matrix withcurrent/recommendation/evidence/status/surface/verification/authority and negative claim checks
- ExecutionBundle with actual tests/sourceSHA, draftPR/fullCI and distinct review

## Pinned source snapshots
Git commit: `b56f14134039f8e5e09b6fd5a20d0ed5680c1eff`. Read source statuses independently from task intent.

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

### `apps/web/src/app/books/page.tsx` @ `64352dc27e657b4a078c0ffc3d6f2153942fa572`

~~~~~~markdown
"use client";
import Link from "next/link";
import {useEffect,useState} from "react";
import {libraryRegion} from "@/lib/library/book-library-state";
import {EXPECTED_USER_HEADER} from "@/lib/library/book-create-document";
import {createLibrarySession,type LibrarySession,type LibrarySessionSnapshot} from "@/lib/library/book-library-session";
import {ownerFromGetUser} from "@/lib/library/owner-from-auth";
import {getBrowserSupabase} from "@/lib/supabase/browser";

function createPageSession(): LibrarySession {
  return createLibrarySession({
    fetchBooks: (signal) => fetch("/api/books", {cache:"no-store", signal}),
    createBook: (title, ownerKey, signal) => fetch("/api/books", {
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        [EXPECTED_USER_HEADER]:ownerKey,
      },
      body:JSON.stringify({title}),
      cache:"no-store",
      signal,
    }),
    readOwner: async () => ownerFromGetUser(await getBrowserSupabase().auth.getUser()),
    signOut: async () => {
      const {error} = await getBrowserSupabase().auth.signOut();
      return {error:error != null};
    },
    goToLogin: () => { window.location.assign("/login"); },
  });
}

export default function Books(){
  const [session] = useState(createPageSession);
  const [snap,setSnap] = useState<LibrarySessionSnapshot>(() => session.snapshot());

  useEffect(() => session.subscribe(setSnap), [session]);

  useEffect(() => {
    let supabase: ReturnType<typeof getBrowserSupabase>;
    try {
      supabase = getBrowserSupabase();
    } catch {
      session.failConfiguration();
      return;
    }
    const detach = session.attachAuth((notify) => {
      const {data:{subscription}} = supabase.auth.onAuthStateChange((event, authSession) => {
        notify(event, authSession?.user?.id ?? null);
      });
      return () => {
        subscription.unsubscribe();
        session.dispose();
      };
    });
    return detach;
  }, [session]);

  const region = libraryRegion(snap.model);
  return <main className="mx-auto max-w-3xl p-8 space-y-5" aria-busy={region.phase === "loading"}>
    <header className="flex items-center justify-between gap-4">
      <h1 className="text-3xl font-semibold">Your books</h1>
      <Link href="/">Home</Link>
    </header>
    <form onSubmit={(event) => { event.preventDefault(); void session.submitCreate(); }} className="flex gap-3">
      <label className="grow" htmlFor="new-book-title">New book title
        <input id="new-book-title" className="mt-1 block w-full rounded border p-2" maxLength={120}
          value={snap.draftTitle} onChange={(event) => session.setDraftTitle(event.target.value)} required disabled={!region.canCreate}/>
      </label>
      <button type="submit" disabled={!region.canCreate} className="self-end rounded border px-4 py-2">Create</button>
    </form>
    <p role="status" aria-live="polite">{region.status}</p>
    {region.emptyCopy ? <p>{region.emptyCopy}</p> : null}
    {region.showSignIn ? <Link href="/login">Sign in</Link> : null}
    {region.books.length > 0 ? <ul aria-label="Your books" className="space-y-2">
      {region.books.map((book) => <li key={book.id} className="rounded border p-3">{book.title}</li>)}
    </ul> : null}
    <div className="flex gap-4">
      {region.showRefresh ? <button type="button" className="underline" onClick={() => { void session.refresh(); }}>Refresh</button> : null}
      {region.showRetry ? <button type="button" className="underline" onClick={() => { void session.refresh(); }}>Try again</button> : null}
      {region.showRiskRetry ? <button type="button" className="underline" onClick={() => { void session.retryUncertainCreate(); }}>Save again anyway</button> : null}
      <button type="button" className="underline" onClick={() => { void session.signOut(); }}>Sign out</button>
    </div>
  </main>;
}
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

### `apps/web/src/lib/library/book-library-state.ts` @ `a4bbb94660928bc886df66a81fd57bec6bae746f`

~~~~~~markdown
/**
 * Account-scoped Book Library view model.
 * Late responses apply only when both the request generation and owner still match.
 * Book rows are omitted from every non-populated phase.
 */

export type BookSummary = {
  id: string;
  title: string;
  created_at: string;
  updated_at: string;
};

export type LibraryPhase = "loading" | "empty" | "populated" | "error" | "unauthorized";

export const LIBRARY_COPY = {
  loading: "Loading your books...",
  empty: "No books yet. Create your first book.",
  unauthorized: "Please sign in to see your books.",
  loadError: "Unable to load books. Try again.",
  createError: "Could not save this book. Your title remains in the field.",
  createUnknown: "The save result is unknown. Refresh to check your books before trying again.",
  createAbsent: "This save is not confirmed by the refreshed list. Saving again may create a duplicate if the first save is still finishing.",
  sessionChanged: "Your session changed. The book was not saved to this account.",
  signingOut: "Signing out...",
  signOutError: "Sign-out did not complete. You may still be signed in. Try signing out again.",
} as const;

export type LibraryState = {
  phase: LibraryPhase;
  books: BookSummary[];
  status: string;
  ownerKey: string | null;
  generation: number;
  createPending: boolean;
  createOwnerKey: string | null;
  createGeneration: number | null;
  createUncertain: boolean;
};

export type LoadOutcome =
  | { kind: "ok"; books: unknown }
  | { kind: "unauthorized" }
  | { kind: "error" };

export type CreateOutcome = "ok" | "unauthorized" | "error" | "session_changed" | "unknown";

export type LibraryRegion = {
  phase: LibraryPhase;
  status: string;
  emptyCopy: string | null;
  books: BookSummary[];
  canCreate: boolean;
  showRefresh: boolean;
  showRetry: boolean;
  showRiskRetry: boolean;
  showSignIn: boolean;
};

export function initialLibraryState(): LibraryState {
  return {
    phase: "loading",
    books: [],
    status: LIBRARY_COPY.loading,
    ownerKey: null,
    generation: 0,
    createPending: false,
    createOwnerKey: null,
    createGeneration: null,
    createUncertain: false,
  };
}

export function normalizeBookList(value: unknown): BookSummary[] | null {
  if (!Array.isArray(value)) return null;
  const books: BookSummary[] = [];
  for (const item of value) {
    if (!item || typeof item !== "object" || Array.isArray(item)) return null;
    const row = item as Record<string, unknown>;
    if (typeof row.id !== "string" || typeof row.title !== "string") return null;
    if (typeof row.created_at !== "string" || typeof row.updated_at !== "string") return null;
    books.push({
      id: row.id,
      title: row.title,
      created_at: row.created_at,
      updated_at: row.updated_at,
    });
  }
  return books;
}

function clearedCreate(): Pick<LibraryState, "createPending" | "createOwnerKey" | "createGeneration"> {
  return { createPending: false, createOwnerKey: null, createGeneration: null };
}

/** Starts a load for one owner. A generation that is not newer is ignored. */
export function beginLoad(state: LibraryState, ownerKey: string | null, generation: number): LibraryState {
  if (!Number.isInteger(generation) || generation <= state.generation) return state;
  return {
    phase: "loading",
    books: [],
    status: LIBRARY_COPY.loading,
    ownerKey,
    generation,
    ...clearedCreate(),
    createUncertain: ownerKey === state.ownerKey && state.createUncertain,
  };
}

export function applyLoad(
  state: LibraryState,
  generation: number,
  ownerKey: string | null,
  outcome: LoadOutcome,
): LibraryState {
  if (generation !== state.generation || ownerKey !== state.ownerKey) return state;
  if (outcome.kind === "unauthorized") {
    return {
      ...state,
      phase: "unauthorized",
      books: [],
      status: LIBRARY_COPY.unauthorized,
      ...clearedCreate(),
    };
  }
  if (outcome.kind === "error") {
    return {
      ...state,
      phase: "error",
      books: [],
      status: LIBRARY_COPY.loadError,
      ...clearedCreate(),
    };
  }
  const books = normalizeBookList(outcome.books);
  if (!books) {
    return {
      ...state,
      phase: "error",
      books: [],
      status: LIBRARY_COPY.loadError,
      ...clearedCreate(),
    };
  }
  if (books.length === 0) {
    return {
      ...state,
      phase: "empty",
      books: [],
      status: LIBRARY_COPY.empty,
      ...clearedCreate(),
      createUncertain: false,
    };
  }
  return {
    ...state,
    phase: "populated",
    books,
    status: "",
    ...clearedCreate(),
    createUncertain: false,
  };
}

/** Clears visible titles while a sign-out attempt is in flight. The owner is unchanged. */
export function concealBooksForSignOut(state: LibraryState): LibraryState {
  return {
    ...state,
    phase: "loading",
    books: [],
    status: LIBRARY_COPY.signingOut,
    ...clearedCreate(),
    // Aborting the client request cannot cancel a POST already accepted by Nest.
    // If sign-out fails, retain the uncertainty lock for the same author.
    createUncertain: state.createUncertain || state.createPending,
  };
}

/** Keeps the list cleared and does not describe the author as signed out. */
export function failSignOut(state: LibraryState): LibraryState {
  return {
    ...state,
    phase: "error",
    books: [],
    status: LIBRARY_COPY.signOutError,
    ...clearedCreate(),
  };
}

export function requestCreate(
  state: LibraryState,
  ownerKey: string | null,
): { ok: true; state: LibraryState } | { ok: false; state: LibraryState } {
  if (state.createPending || state.createUncertain) return { ok: false, state };
  if (ownerKey === null || state.phase === "loading" || state.phase === "unauthorized") {
    return { ok: false, state };
  }
  if (ownerKey !== state.ownerKey) return { ok: false, state };
  return {
    ok: true,
    state: {
      ...state,
      createPending: true,
      createOwnerKey: ownerKey,
      createGeneration: state.generation,
      createUncertain: false,
    },
  };
}

export function applyCreate(
  state: LibraryState,
  generation: number,
  ownerKey: string | null,
  outcome: CreateOutcome,
): LibraryState {
  if (!state.createPending) return state;
  if (state.createGeneration !== generation || state.createOwnerKey !== ownerKey) return state;
  if (state.ownerKey !== ownerKey || state.generation !== generation) return state;
  if (outcome === "ok") {
    return { ...state, ...clearedCreate(), createUncertain: false };
  }
  if (outcome === "unknown") {
    return {
      ...state,
      status: LIBRARY_COPY.createUnknown,
      ...clearedCreate(),
      createUncertain: true,
    };
  }
  if (outcome === "unauthorized") {
    return {
      ...state,
      phase: "unauthorized",
      books: [],
      status: LIBRARY_COPY.unauthorized,
      ...clearedCreate(),
    };
  }
  if (outcome === "session_changed") {
    return {
      ...state,
      status: LIBRARY_COPY.sessionChanged,
      ...clearedCreate(),
    };
  }
  return {
    ...state,
    status: LIBRARY_COPY.createError,
    ...clearedCreate(),
  };
}

/** Keeps a missing title uncertain. A list that omits it does not prove the save finished. */
export function noteMissingUncertainTitle(state: LibraryState): LibraryState {
  return {
    ...state,
    createUncertain: true,
    status: LIBRARY_COPY.createAbsent,
  };
}

export function libraryRegion(state: LibraryState): LibraryRegion {
  const showBooks = state.phase === "populated";
  const showEmpty = state.phase === "empty";
  const statusIsEmpty = state.status === LIBRARY_COPY.empty;
  let status = state.status;
  if (statusIsEmpty && !showEmpty) status = "";
  return {
    phase: state.phase,
    status,
    emptyCopy: showEmpty && !statusIsEmpty ? LIBRARY_COPY.empty : null,
    books: showBooks ? state.books : [],
    canCreate:
      (state.phase === "empty" || state.phase === "populated" || state.phase === "error") &&
      state.ownerKey !== null &&
      !state.createPending &&
      !state.createUncertain,
    showRefresh: state.phase !== "loading" && !state.createPending,
    showRetry: (state.phase === "error" || state.phase === "unauthorized") && !state.createPending,
    showRiskRetry:
      state.createUncertain &&
      !state.createPending &&
      (state.phase === "empty" || state.phase === "populated"),
    showSignIn: state.phase === "unauthorized",
  };
}

export function regionShowsEmptySentence(region: LibraryRegion): boolean {
  return region.status === LIBRARY_COPY.empty || region.emptyCopy === LIBRARY_COPY.empty;
}
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0023/OWNER-SCOPE.md` @ `775b054a221d44dc31198f24e44ccf4afbafb566`

~~~~~~markdown
# Owner dispatch interpretation — LANG-DECISIONS,2026-10-19
Direct owner conversation adopted the master mandate and instructed continued dependency-ordered governed tasks. Master sections7/11 authorize a15-ID grounded language matrix and supported ordinary terminology. Issue71 is the index, not proof of authenticated approval. Current mainfca0d96fd071f1165e3e16658d821a3d36a20293 is reverified. This bounded task documents all15 decisions from committed source only; original LANGUAGE.md remains proposed-owner-review and byte unchanged. No application/UI copy changes, acceptedADR/source changes, invented clearance, active134rule claims, hosted/signup settings or provider pricing. Ordinary recommendations preserve accepted book/chapter/manual-writing concepts; exact new brand/module labels remain provisional. No deployment/hosted/auth/SQL/cloudtests/private/paid/admin/merge. Source review is not browser acceptance or a fresh independent implementation handoff. Distinct Codex advisory reviewer and exact-headCI; owner retains adoption/merge.
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0023/MANDATE-EXCERPTS.md` @ `b7159033a4c671cf43d141d1c9a4d5e805998d54`

~~~~~~markdown
# Exact excerpts from owner-adopted master mandate

Original bytes SHA256 6fac506c72091cc5e35ff788ed8a6659a79de1d2354208761643bc06f8812366. Sections1 and7 below are source data; direct owner request adopted the mandate. Omitted sections remain in original preserved PR83 source; no new permission inferred.

## 1. Explicit owner authorization and operational limits

I, the Vellistry owner, explicitly authorize you for this assignment to make well-supported, routine engineering, language, architecture-within-accepted-ADRs, refactoring, prioritization and implementation decisions; create and update scoped repository tasks, immutable packs, ExecutionBundles, branches, tests, docs and issues; run local and disposable CI tests; push branches; request actual independent review; and correct/retry implementation until verifiable. Do **not** interrupt for ordinary reversible details such as naming a component, resolving a local test failure, selecting a verified Tiptap extension or creating a new valid Task ID.

**Repository-only integration delegation:** The owner wishes eligible, reviewed remediation PRs to be merged and obsolete PRs closed, not left indefinitely as drafts. You may perform repository-only merges/closures under this standing instruction **only if** the effective GitHub/project governance permits delegated execution, the exact merged source is independently reviewed, all applicable non-advisory checks genuinely pass at exact SHA, the changed scope is within an authorized Task, no additional owner-reserved decision is implicated, and the merge commit plus post-merge CI are verified. Otherwise leave the PR ready for the single required owner decision and continue the queue. Do not treat Codex's own self-review as independent. Do not convert a draft-advisory red run into a passing ready-state gate or temporarily weaken checks merely to merge. Do not force-push another executor's branch.

**Not authorized merely by this broad mandate:** any hosted Supabase connection (even read-only), CLI authentication or cloud dry-run, migration application or reset, creation of cloud Auth fixtures, credential retrieval, production deployment, domain/billing/account/security-setting changes, paid model calls, private manuscript access, destructive real-data operations, or waiving G_PRIVATE_PILOT/G_RELEASE. Existing narrower past authorizations must be inspected, not expanded by inference; if a specific action still requires new explicit target/action approval, prepare the exact action-specific decision packet and mark that action **OWNER_DECISION_PENDING**. Keep progressing offline. Do not ask for a single sweeping approval that obscures exact SQL and target.

Do not change the approved Next.js16/React19 + NestJS11 + Supabase Auth/PostgreSQL/RLS + Tiptap3 architecture; introduce another authentication authority; add unnecessary microservices, vector DBs, orchestration engines, paid tools or vendor lock-in; handle real writing content; publish/deploy Lovable; or alter production by claiming that synthetic UX is production code.

If a fresh owner decision is granted later, record its exact statement, target, prohibited actions and source before the sensitive task. Never fabricate a GitHub approval URL, actual model identity, reviewer session or CI result.

## 7. Wave: LANGUAGE.md decision reconciliation (LANG-P01–P15)

Review each unresolved decision; produce a grounded matrix **ID | current | recommendation | evidence | adopted/provisional/deferred/blocked | affected surface | verification | unresolved authority**. Under this owner mandate you may choose **supported ordinary terminology** consistent with accepted MVP concepts, but may not fabricate trademark clearance, certified original rule-source mappings, user research, exact provider pricing or deployed functions.

Review all 15 explicitly:

- P01 brand clearance: working name remains Vellistry; legal/trademark clearance only with real evidence.
- P02 immutable guidance pack mapping: no unverified public 130/134-active claims.
- P03 Story Workspace / Story Profiles / Story Bible distinction.
- P04 story threads vs storylines.
- P05 chapter vs scene (currently chapters authoritative).
- P06 unknown book-create acknowledgement and duplicate-risk retry copy.
- P07 actual signup/email-confirmation behavior, not assumed settings.
- P08 optional BYOK, session-only key/privacy/cost disclosures (future AI).
- P09 editor Undo vs accepted AI change Undo.
- P10 Unsaved/Saving/Saved/Save status unknown/Conflict/Recovered draft aligned with real receipts.
- P11 download manuscript vs portable book backup, restore/deletion honesty.
- P12 source English, locale/IME/RTL deferred unless verified.
- P13 account, AI settings and export navigation as *future* where absent.
- P14 provider/model route and cost estimates only if verified.
- P15 document merged into main but status remains proposed-owner-review until owner-approved dispositions; do not leave stale claim 'not present on default branch'.

Fix existing production UI copy only where its effects are verifiable, including unknown-save/retry semantics; test state transitions and accessibility labels. Do not rename SQL/API identifiers, invent screens or turn synthetic copy into live functionality. Record owner-adopted labels separately from still-proposed labels; continue development without claiming the fifteen are automatically accepted just because text merged.
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0023/SOURCE-REFS.json` @ `a17923bceb89981d1204420dae54c515bb360902`

~~~~~~markdown
{
  "base": "fca0d96fd071f1165e3e16658d821a3d36a20293",
  "files": [
    {
      "path": "PROJECT-CONSTITUTION.md",
      "blob": "61f79c4dcb47bd99291c16490e8c00692e2ab23b",
      "sha256": "ea17eba04dc5027dcca3e6f696260e3837248bbfb14bb3a2a87e7df1c479ec9e"
    },
    {
      "path": "SOURCE-OF-TRUTH.md",
      "blob": "d5bec6f59108ac84715d77b65836f4499194c3f1",
      "sha256": "689537a2fdf51b9d75202d639035534ec91fb4867e4c9623683c77fc3deec69d"
    },
    {
      "path": "AGENTS.md",
      "blob": "2feca4ec9ee0f11f5b6ac089c1d5c826d0e043ce",
      "sha256": "f44909a73dd80a9c8b34558f44805445bb66da4d66caad3a54522b926e358fd3"
    },
    {
      "path": "LANGUAGE.md",
      "blob": "badc4f189286740736a26b0f58a38bcfb05b0884",
      "sha256": "a8347a2149ba0cca7c0315a75712f7149f46eaa99947583c5f406c417d1e19c2"
    },
    {
      "path": "docs/agent-workflow/PR-COMPLIANCE.md",
      "blob": "5f4845623aef3abb15fba7fbe8e78474902cca00",
      "sha256": "3ce6deae856b0d272b199bf8cc48ed2ad198f64293c05bb14715c013e3da0b1e"
    },
    {
      "path": "docs/decisions/ADR-0003-use-tiptap-3-prosemirror-for-manuscript-editor.md",
      "blob": "6d53dd79bd9e71cc410d78aeddf4345c0922260e",
      "sha256": "213dcbe80b371b210ca9a80132d3afea3b11d7eebc03f4b7c8aef0480de9c7af"
    },
    {
      "path": "docs/decisions/ADR-0004-free-calibre-document-conversion-and-portable-recovery.md",
      "blob": "e2192cd7bf1e2eec9b94d82ff92b4927d9aa6deb",
      "sha256": "cefbabc961db78f8cc26c23287fc2ba5427ddd2a8c269b8da3371b45bf20630e"
    },
    {
      "path": "docs/decisions/ADR-0007-immutable-compact-expanded-guidance-sources.md",
      "blob": "5f0ef63888a6046b12811feb1e8f0b322bcec2ad",
      "sha256": "231f26669a22e7a0028327d24bc2eeaf5f8b9f33b0e865623392d46734944cb2"
    },
    {
      "path": "docs/plans/OPTION-B-WAVE05-MVP-FINAL-DECISION-2026-10-10.md",
      "blob": "f185bbdd0e39358fb302a159f803571151b05a7e",
      "sha256": "ce941195b76e6fb2b6b0a84cd27c29bb390e17486b0b8f75f08264b2b85f3a5e"
    },
    {
      "path": "docs/history/2026-10-10-owner-byok-free-or-paid-clarification.md",
      "blob": "8c881e790b0d4b4f727246093e476af94ac11187",
      "sha256": "b10fd6bdfe5b690b9282e15d06859ee101bc997cbcec1699720b932c03c0d3c7"
    },
    {
      "path": "apps/web/src/app/books/page.tsx",
      "blob": "64352dc27e657b4a078c0ffc3d6f2153942fa572",
      "sha256": "bbef05d421b658e6863b1844bdb06fb70019eda2b977736c0d66e2ba3ee9fb78"
    },
    {
      "path": "apps/web/src/app/login/page.tsx",
      "blob": "2c499b7259d75a3bebfe780122b30aa51439e7ea",
      "sha256": "b6a84723d0925c430428f16abc66cf4addcd584311d3d270c72c2986d66a07fb"
    },
    {
      "path": "apps/web/src/lib/library/book-library-state.ts",
      "blob": "a4bbb94660928bc886df66a81fd57bec6bae746f",
      "sha256": "aa50f446f69d0979a422b66a21a3ef0f37f8c2a75ab351e178c2b61728b4e4b8"
    }
  ]
}
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0023/LANGUAGE-TASK-EXCERPTS.md` @ `279df86189dc24522b2b7d0ec3cd73a83127876b`

~~~~~~markdown
# Task-scoped language excerpts

Exact selected sections from merged LANGUAGE.md at fca0d96; full canonical bytes are preserved in sequential LANGUAGE-PART01–04 snapshots. Selection omits other sections, not source authority.

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


### 10.1 Book Library — present application code

| Internal/evidenced state | Display phrase | Allowed when | Don't say |
|---|---|---|---|
| `loading` | **Loading your books…** | Verified current-author list request is pending | No books yet |
| `empty` | **No books yet. Create your first book.** | Authorized request returned zero rows and no unresolved create state | No matching books if filters cause empty |
| `populated` | **Your books** (page); book list | Authorized list has rows | Empty-state text |
| `unauthorized` | **Sign in to see your books.** | Current session is not authenticated | Your books were deleted |
| `error` | **Couldn't load your books. Try again.** | Failed authorized load; no false list | No books yet |
| `createPending` | **Creating book…** | Create request actually in progress | Saved |
| `createError` | **Couldn't create this book. The title is still here.** | Definite pre-forward or other confirmed failure and draft preserved | Book lost; retry definitely safe if uncertain |
| `createUnknown` / `acknowledgment_unknown` | **We couldn't confirm whether the book was created. Check your books before trying again.** | Server acknowledgement genuinely unknown | Create failed; Book created |
| `createAbsent` | **We still can't confirm this book was created. Creating it again could make a duplicate.** | Refreshed list didn't prove the write; risk persists | Definitely absent / safe to retry |
| `session_changed` | **Your session changed. This book wasn't saved to this account.** | Verified identity change, not a generic timeout | Account data exposed |
| `signingOut` | **Signing out…** | Sign-out started | Signed out |
| `signOutError` | **Couldn't complete sign-out. You may still be signed in. Try again.** | Sign-out failure observed | Signed out everywhere |

The current exact `LIBRARY_COPY` strings in `apps/web/src/lib/library/book-library-state.ts` use a combination of “save” and “create” language. Proposed revisions above are **not permission to bypass the existing unknown-ack safety logic**. Prefer *create* for book creation as long as the implementation still performs POST creation. The intentionally cautious uncertainty semantics must be preserved.

### 10.2 Chapter manuscript save and recovery — approved intent, proposed UI

| Underlying condition | Author-visible status | Necessary behavior |
|---|---|---|
| No local changes since last confirmed persisted revision | **Saved** or **Saved · revision [n]** | Actual acknowledged durable server revision |
| Locally changed, not yet acknowledged | **Unsaved changes** | Never imply durability |
| Save request pending | **Saving…** | Actual request pending; keep editor responsive |
| Connectivity unavailable | **Offline** | Add **Saved on this device for recovery** *only* if IndexedDB local persistence was confirmed; otherwise disclose not yet safely stored |
| Request outcome unknown; acknowledgement possibly lost | **Checking save status…** or **Save status unknown** | Reconcile before risk of duplicate write; not falsely a 409 conflict |
| Proven concurrent different revision | **A newer saved version exists. Review both versions.** | Non-destructive compare/reconcile |
| Local recovery record found | **Recovered draft available** | Compare and explicitly choose, not automatic server replacement |
| Save definitely failed | **Couldn't save your changes. Your draft is still available [only if verified].** | Specific recovery action and no false local guarantee |

Do not show **All changes saved** while local edits remain unacknowledged. Never use **Synced** unless actual cross-device state is proven. Status is per affected chapter/book, not one blanket label copied from a different record.


## 18. Unresolved decisions — do not silently settle

| ID | Question and evidence | Recommended next decision | Approval condition |
|---|---|---|---|
| `LANG-P01` | **Is the working product name Vellistry fully cleared?** Current brand in UI and repo; earlier market/name review was provisional. | Retain Vellistry in existing build; do not claim registered mark. | Owner legal/trademark/domain check before commercial brand claim. |
| `LANG-P02` | **Which exact source-version mapping becomes installable default guidance?** ADR-0007 freezes compact+expanded variants, while Wave 5 specifies 134 logical aliases provisionally. | No public numeric “130/134 active” claim until certified mapping. | Owner approves versioned map and R01 validation. |
| `LANG-P03` | **Should story navigation be “Story Workspace”, “Story Profiles” or “Story Bible”?** Profile functionality accepted; design shell proposed; competitors commonly use Story Bible/Codex. | **Story Workspace** as shell and **Story Profiles** for relevant records; do not merge into Story Bible yet. | Owner UX naming decision plus real-author task tests. |
| `LANG-P04` | **Storyline vs story thread:** approved MVP says Characters + Storylines/Threads, drafts vary. | **Story threads** for recurring plotline records; allow storyline in help. | Author testing, schema/interaction clarification and owner sign-off. |
| `LANG-P05` | **Chapter vs scene as editing unit:** approved initial DB stores chapters; long-term vision includes scenes. | Keep **chapter** authoritative in current app. | Separate scoped scene model and design/owner approval. |
| `LANG-P06` | **“Create book” unknown-save retry:** current `Save again anyway` can create duplicate; guard semantics deliberate. | **Check your books** first; add warned **Create book again** confirmation if supported. | Reviewed UX flow, tests for unknown ACK and duplicate prevention. |
| `LANG-P07` | **Sign-up result:** current copy says confirmation email *if enabled*; hosted Auth setting unverified. | Use precise verified confirmation copy per configuration. | Hosted auth state and email confirmation test. |
| `LANG-P08` | **What should AI settings promise about connection persistence?** Wave 5 selected session-only key; runtime not built. | **Use your own API key**; disclose session-only behavior, possible provider cost, actual recipient. | Authorized implementation and route/privacy/cost tests. |
| `LANG-P09` | **How will “Undo” differ between editor keyboard undo and committed AI revision undo?** Revision transaction design selected; product UI not built. | **Undo** for immediate text edit; **Undo accepted change** for persisted reviewed AI edit if supported. | UI and transactional history implementation/approval. |
| `LANG-P10` | **Which save/recovery statuses are guaranteed?** Current book-create status is not chapter autosave; save CAS planned. | Keep explicit **Unsaved**, **Saving**, **Saved**, **Save status unknown**, **Conflict**, **Recovered draft** conditioned on evidence. | Browser/database/local-recovery acceptance tests. |
| `LANG-P11` | **What is included/retained on export, restore, deletion?** ADR-0004 defines target archive; no complete converter/restore verified. | Distinguish **Download manuscript** vs **Download book backup**. | Fidelity, restore, retention, privacy and consent evidence. |
| `LANG-P12` | **Locale, English variant and translation strategy?** Current `<html lang="en">`; no localization system selected. | Use clear source English and locale-aware formatting; defer dialect/translation default. | Audience research, accessibility/IME tests, owner decision. |
| `LANG-P13` | **What are the canonical account and nested-book settings screen labels/routes?** Current only `/`, `/login`, `/books`. | **Account settings**, **AI settings**, **Export and backup** as proposed labels. | Approved navigation design and actual routes. |
| `LANG-P14` | **Which model/provider route statuses and cost figures may be displayed?** OpenRouter first adapter chosen; live real-model acceptance not completed. | Unavailable when not verified; label monetary values as estimates with units. | Real provider route/privacy/usage tests and approval. |
| `LANG-P15` | **Whether the proposed LANGUAGE.md itself is effective:** no `LANGUAGE.md` on verified default branch. | Adopt after owner review; keep `status: proposed-owner-review` meanwhile. | Owner approval and scoped documented repo integration. |
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0023/ACCEPTED-DECISION-EXCERPTS.md` @ `c1240fa41f0c02787d210b5fc22ba0c1832e698c`

~~~~~~markdown
# Exact selected accepted decision excerpts

Source mainfca0d96. Metadata and decision/record body excerpts below remain source data; source identities in SOURCE-REFS.json; omitted sections do not grant authority.

## Source: docs/decisions/ADR-0003-use-tiptap-3-prosemirror-for-manuscript-editor.md

---
id: ADR-0003
title: Use Tiptap 3 on ProseMirror as the manuscript editor foundation
type: architecture-decision
status: accepted
created_at: 2026-10-08
updated_at: 2026-10-08
decided_at: 2026-10-08
author: project-research
approved_by: project_owner
version: 1.0.0
sources:
  - "Fiction Writing Project owner confirmation on 2026-10-08: 'okay, we are using it', replying to the specific Tiptap 3 / ProseMirror recommendation; permalink pending archival"
  - "https://tiptap.dev/docs/editor/getting-started/overview"
  - "https://tiptap.dev/docs/editor/getting-started/install/react"
  - "https://github.com/Ben-001-sys/Vellistry/blob/research/r05-editor-license-capability-scan-v0.1/docs/research/R05-MANUSCRIPT-EDITOR-LICENSING-CAPABILITY-SCAN-2026-10-08.md (research branch; drafted before the owner selected the editor)"
evidence:
  - "Owner explicitly accepted Tiptap 3 built on ProseMirror as Vellistry's manuscript editor foundation in the 2026-10-08 Fiction Writing Project conversation."
  - "The preceding recommendation limited acceptance to the open-source editor core, excluding paid conversion/pagination features and all remaining application-stack decisions."
  - "Tiptap's official documentation identifies its headless editor as ProseMirror-based and its open-source editor as MIT-licensed."
  - "Primary original conversation URL not yet archived; record exact owner reply and the preceding technology referent without inventing a permalink."
related_requirements:
  - VEL-REQ-002
related_features: []
related_contracts: []
related_adrs: []
supersedes: []
superseded_by: []
implementation_refs: []
---

## Decision

**Adopt Tiptap major version 3 as the manuscript rich-text editor foundation, using ProseMirror underneath through Tiptap.** This was explicitly selected by the project owner on **2026-10-08**, after the recommendation: “Tiptap 3, built on ProseMirror.” The owner responded, “okay, we are using it.”

The intended editor foundation is the **open-source Tiptap 3 editor and its appropriately licensed dependencies**, not an automatic commitment to the paid Tiptap product suite.

This is a binding **technology choice for the manuscript editing subsystem**, but is **not a claim that an editor has been built, tested or deployed**.

### Explicitly outside this decision

- No selection of React, Next.js, Vue or any overall application frontend framework, despite Tiptap providing integration guides for several.
- No choice of backend, database, authentication, storage, cloud hosting or repository folder structure.
- No purchase or adoption of Tiptap Pro, Pages, Conversion, Tracked Changes, collaboration services or a vendor cloud account.
- No decision about EPUB, DOCX or print-PDF generators, cover design, professional typesetting or a publication pipeline.
- No selection of AI provider, model, API gateway, BYOK design, MCP topology or a rule-evaluation engine.
- No approval of any precise Tiptap 3 patch release or dependency pin until an implementation experiment establishes a supported combination.
- No rewriting, renumbering or selection between disputed versions of the frozen fiction-guidance source.


## Source: docs/decisions/ADR-0004-free-calibre-document-conversion-and-portable-recovery.md

---
id: ADR-0004
title: Use free Calibre conversion with Tiptap manuscripts and independent portable backups
type: architecture-decision
status: accepted
created_at: 2026-10-09
updated_at: 2026-10-09
decided_at: 2026-10-09
author: project-research
approved_by: project_owner
version: 1.0.0
sources:
  - "Fiction Writing Project owner directive 2026-10-09: 'in this project right now and mvp we are not going to using any paying service'"
  - "Fiction Writing Project owner directive 2026-10-09 following Z-Library/Calibre research: 'lets make a definitive decision here'; no explicit named-Calibre quotation, original conversation permalink pending"
  - "docs/requirements/PRODUCT-CONSTRAINT-NO-PAID-SERVICES-2026-10-09.md"
  - "docs/research/R11-ZERO-PAID-OPEN-SOURCE-FORMAT-STACK-2026-10-09.md"
  - "https://manual.calibre-ebook.com/conversion.html"
  - "https://manual.calibre-ebook.com/generated/en/ebook-convert.html"
  - "https://manual.calibre-ebook.com/faq.html"
  - "https://github.com/kovidgoyal/calibre/blob/master/COPYRIGHT"
  - "https://tiptap.dev/docs/editor/core-concepts/persistence"
  - "https://github.com/Stuk/jszip"
  - "https://github.com/w3c/epubcheck"
evidence:
  - "Owner ruled out paying services for the project/MVP, requested free/open-source DOCX/TXT and possible EPUB/other formats and manuscript recovery."
  - "After an explanation of Calibre's no-license-fee modular conversion pipeline and suggested architecture, the owner asked for a definitive decision; this is delegated decision-making within that referent, not a false claim the owner literally said 'I approve Calibre'."
  - "Calibre official documentation confirms ebook-convert CLI, conversion pipeline, and DOCX/EPUB/TXT plus other format handling; upstream COPYRIGHT states GPL-3."
  - "Tiptap official documentation recommends JSON persistence; JSZip provides archive packaging and EPUBCheck provides EPUB conformance checking."
related_requirements:
  - VEL-PRODUCT-CONSTRAINT-20261009-001
  - VEL-PRODUCT-SCOPE-20261009-001
related_features:
  - VEL-FEAT-14-001
related_contracts: []
related_adrs:
  - ADR-0003
supersedes: []
superseded_by: []
implementation_refs: []
---

## Decision

**D1 — Primary free rich-document conversion engine: use the open-source Calibre `ebook-convert` command-line engine, as a separately invoked, resource-bounded converter, for rich-file imports/exports.** Do not embed Calibre into the browser editor or make it the author-data source of truth. The integration boundary should be a small, format-aware adapter with structured output, loss warnings and failure handling; a specific backend/container/queue/hosting product is **not** selected here.

**D2 — Native manuscript format: keep accepted, chapter-associated Tiptap 3/ProseMirror JSON as Vellistry's *editable manuscript serialization and author-facing interchange baseline*.** Convert external files to/from a restricted, schema-validated XHTML/HTML mapping and Tiptap nodes/marks. The editor's chapter JSON is authoritative for authored prose over generated files; the exact durable database/storage engine, synchronization and revision persistence implementation remain separate architecture decisions. Never silently replace accepted content after a partial conversion.

**D3 — TXT direct path: read/write UTF-8 text with explicit BOM and CRLF/LF rules without launching Calibre.** TXT inherently loses rich formatting; disclose this, never invent unapproved chapter structure, and preserve explicit text/paragraph boundaries.

**D4 — Native full-project backup and recovery: choose a versioned manifest + JSON files in a ZIP archive, packaged with the open-source JSZip library (MIT license option).** Snapshot accepted chapter manuscripts, immutable book/chapter IDs and ordering, approved Character/Storyline profiles (including source/story-time state), enabled/disabled author rules and custom rules, schema/version/checksums, and any explicitly authorized assets. Exclude plaintext API keys, access tokens, unapproved AI proposals and sensitive hidden prompts by default. A portable ZIP is a *recovery/export contract*, not a substitute for live durable autosave or version history. Restore into a safe staged preview with identity/authorization checks, integrity validation and explicit author approval.

**D5 — Optional ebook format and validation: select EPUBCheck as the open-source EPUB validation tool whenever EPUB output is experimentally produced or later publicly supported.** Calibre can handle EPUB and many other formats, but broad-format UI promises are **not part of initial MVP acceptance**. Professional EPUB/print remains deferred unless a separate owner-approved scope decision changes that.

**D6 — Keep converter dependencies lean: do not require Tiptap Pro Conversion, any paid SaaS, Mammoth.js, docx.js, Pandoc or LibreOffice in the MVP production path by default.** Keep those free/open-source components as *benchmarks and fallback candidates only* if the selected Calibre route fails a documented essential requirement. In that case record a bounded supplementary decision rather than silently introducing a second production pipeline.

### Explicit contract and scope exclusions

- This does **not** adopt a backend framework, database, infrastructure provider, frontend application framework, authentication library, streaming/job engine, model provider or paid extension.
- Calibre uses GPLv3 and has separately licensed bundled components. Use as an isolated external executable with its copyright notices and relevant obligations; **deployment/distribution/license compliance requires a recorded legal/technical check**. Do not claim that process separation automatically cures every potential copyleft concern. No GPLv3 fee or paid converter subscription is assumed.
- No DRM circumvention, copyrighted third-party library scraping, arbitrary PDF-to-editable-DOCX fidelity or pixel-perfect Word/EPUB guarantees are selected.
- Conversion jobs must not silently send private manuscripts to third parties. Permission-bound local/self-hosted execution is the intended **data-processing boundary**, but its actual deployment is undecided.
- No covert replacement of approved manuscript text, character canon or rules on import, export, restore or failed/retried background jobs.


## Source: docs/decisions/ADR-0007-immutable-compact-expanded-guidance-sources.md

---
id: ADR-0007
title: Preserve compact and expanded fiction guidance as immutable distinct source records
type: architecture-decision
status: accepted
created_at: 2026-10-09
updated_at: 2026-10-09
decided_at: 2026-10-09
author: project-research
approved_by: project_owner
version: 1.0.0
sources:
  - "Fiction Writing Project conversation, 2026-10-09: immediately after P1 was proposed as 'preserve both original versions ... without silently merging, deleting, or replacing either' and 'distinct source identities ... review which version becomes active for each conflicting ID', owner replied 'yes'. Original conversation permalink pending."
  - "docs/research/R01-PAIR-01-OWNER-RULE-PACK-2026-10-09.md"
  - "docs/research/R01-SOURCE-INTEGRITY-AND-AR-VARIANT-AUDIT-2026-10-09.md"
evidence:
  - "The original uploaded fiction guidance was structurally audited as 13 domains, 130 distinct lens codes and 260 total compact/expanded headings."
  - "Thirteen titles diverge, including materially different AR-04 and AR-09 subjects; simple ID or title deduplication would conflate separate original instructions."
  - "The owner's affirmative 'yes' explicitly approves P1's non-destructive preservation policy, not a choice of active default mapping."
related_requirements:
  - VEL-REQ-001
  - VEL-PRODUCT-SCOPE-20261009-001
related_features: []
related_contracts: []
related_adrs: []
supersedes: []
superseded_by: []
implementation_refs:
  - scripts/r01_manifest.py
  - tests/test_r01_manifest.py
---

## Decision

**P1 is accepted as the preservation and source-identity policy.**

1. Preserve the **compact** and **expanded** source records as separate, immutable, faithfully quoted provenance entries for **every** lens code, including the 117 with case-insensitively matching titles; never assume matching titles imply identical full bodies.
2. Identify each entry by **(raw_source_sha256, variant, printed_code)**, with `variant` explicitly `compact` or `expanded`. The shared printed code alone is **not** a storage, rule-toggle, audit, or AI context identity.
3. Retain the exact original wording, source file fingerprint and line/location. Subsequent interpretations, commentary, canonical display names and author-custom rules must be **separate, versioned derivatives**, never in-place edits of the frozen source.
4. If a future Rules Studio exposes an active/default rule, it must refer to an **explicit, owner-approved versioned mapping** to the frozen original. Enabled/disabled state and per-book overrides are separate author configuration, not mutations of original rules. Effective AI instruction snapshots must identify precisely which approved source variants were used.
5. Conflicting compact and expanded meanings—including AR-04 and AR-09—are **not** automatically reconciled, prioritized, combined or re-coded. Until reviewed, both remain preserved and unresolved.

This decision is a **data-preservation policy**, not approval of the actual 130 active default mappings or certification that the deployable Rules Studio source package is complete.


## Source: docs/plans/OPTION-B-WAVE05-MVP-FINAL-DECISION-2026-10-10.md

---
id: VEL-DECISION-WAVE05-MVP-20261010-001
title: Final MVP scope choice — two optional BYOK AI actions and revision-safe author control
type: owner-directed-product-scope-decision
status: selected-for-mvp-design-specification-not-implemented
created_at: 2026-10-10
updated_at: 2026-10-10
owner: project_owner
version: 1.0.0
sources:
  - "Owner 2026-10-10 message: complete both Wave 5 tracks in one response, move on and choose final MVP decision"
  - docs/history/2026-10-10-owner-byok-free-or-paid-clarification.md
  - docs/history/2026-10-10-owner-waves-01-03-recommendations-accepted.md
  - docs/research/OPTION-B-WAVE05-R19-R06-AI-QUALITY-AND-RULES-2026-10-10.md
  - docs/research/OPTION-B-WAVE05-R10-REVERSIBLE-AUTHOR-EDIT-2026-10-10.md
related_research: [R06, R10, R19, R21]
---

## Decision authority and scope

The owner requested: **'these are only going to be done once, no back and forth again do all the research you will need in one response and that is we continue to the next stage and land on a final decision in one response, choose this is just an MVP for now.'** The following is the assistant's **single scoped MVP selection under that delegation**, rather than an invented prior owner endorsement of a specific provider, a design-entry approval or production sign-off.

**Selected MVP behavior:** Vellistry is **manual-first and author-controlled**, with precisely **two optional AI text actions**: **Continue** a chapter at an insertion point and **Rewrite** one contiguous selected span. The user must explicitly generate and explicitly **Accept** or **Reject** a visible suggestion; if no AI key is connected, writing, Story Profiles, rules, chapter save and export remain available. Generated Story Profile facts are never accepted automatically.

### Binding product behavior chosen for MVP

| Dimension | Chosen MVP decision | Out of scope or condition |
|---|---|---|
| Provider and model menu | First adapter: **OpenRouter**, exposing a small curated/pinned list of supported actual downstream models/providers; architecture leaves room for other direct providers later | No mandatory default model, automatic router fallback or promise every model exists in every country; real provider policy check required before enabled route |
| Billing/key | **User BYOK**, credentials may be **free OR paid**; user pays own provider's bill | Vellistry pays no API charges, no free-only ban, no integrated platform subscription/billing |
| Key custody | **Session-only in-memory masked API key**; HTTPS transport to Nest inference proxy on user-initiated action; never store raw key in database, LocalStorage or analytics in MVP | Author must reenter after reload/session end; do not misrepresent server/proxy as unable to view plaintext key on each authorized inference request |
| Consent and request | Exact chosen excerpt and approved book-specific context, selected effective rules, provider/model, costs/limits/recipient disclosed before author-invoked generation | No silent entire-book upload, hidden cross-book context, unreviewed external fallback |
| Rules | Owner-approved **134 logical aliases**, 130 expanded catalog defaults ON, four compact extras OFF; only **task-relevant enabled subset** reaches request | Never inject 130 full expanded pages on every request; author overrides win and remain visible |
| AI outputs | **Plain-text review-only**; original-vs-proposal diff, errors/cancel leave accepted manuscript untouched | No HTML execution, auto-overwrite, autonomous novel writing, model edit tools or high-confidence quality claims |
| Revision acceptance | **Server-transactional chapter CAS** on actor/book/chapter/revision/document/selection; idempotent acceptance; immutable before/after snapshots | Reject stale, wrong-owner, incomplete-stream and repeated conflicting decisions; no silent rebase |
| Undo | History-backed **compensating new revision** after reload, only if accepted proposal is still latest; else require explicit conflict recovery | Do not let undo erase later author edits; no unlimited arbitrary inverse transforms |
| Rich text boundaries | Tiptap 3 manual editor; AI **Rewrite one contiguous text span within one paragraph**; Continue inserts at an author-selected point | Multi-block rich-mark AI transforms, automatic chapter restructure and collaborative editing deferred |
| Canon | Story Profiles manual-first; optional AI suggestions require distinct source-linked factual approval | Accepting prose never updates canon by itself |
| Scope of quality | No invented quality scores. Output is labeled a draft suggestion; route-level synthetic smoke before enabled real-model release | External real model and human scores **NOT RUN**, cannot promise voice preservation/hallucination-free result |


## Source: docs/history/2026-10-10-owner-byok-free-or-paid-clarification.md

---
id: HIS-20261010-003
title: Owner clarifies user-funded BYOK access across free and paid AI models
type: historical-event
status: recorded
occurred_on: 2026-10-10
recorded_on: 2026-10-10
time_precision: day
created_at: 2026-10-10
updated_at: 2026-10-10
author: project-research
actor: project_owner
version: 1.0.0
sources:
  - "Fiction Writing Project conversation, 2026-10-10: owner explicitly clarifies Vellistry supplies selectable AI model options and a place for users to enter their own API key, without restricting those keys to free or paid tiers. No conversation permalink archived."
  - "docs/research/OPTION-B-WAVE04-R08-R21-PROVIDER-PRIVACY-COST-2026-10-10.md"
  - "docs/requirements/PRODUCT-CONSTRAINT-NO-PAID-SERVICES-2026-10-09.md"
evidence:
  - "Exact owner wording: And also remember we are providing the AI models, we are providing a place where they place the AI API key so we don't care whether the API key they was a paid or free"
  - "User-owned BYOK free or paid eligibility is independent from Vellistry's no-mandatory-paid-services requirement for core AI-off functionality."
related_adrs: []
related_requirements:
  - VEL-PRODUCT-CONSTRAINT-20261009-001
related_events:
  - HIS-20261010-001
  - HIS-20261010-002
corrects: []
corrected_by: []
commit_refs: []
---

# Owner clarification — curated model choices and user-supplied API keys

## Owner's instruction

> And also remember we are providing the AI models, we are providing a place where they place the AI API key so we don't care whether the API key they was a paid or free

**Interpreted product requirement:** Vellistry presents supported AI model/provider choices and an API-key entry/configuration interface. Each writer supplies a credential for the chosen provider, using either the provider's **free** or **paid** plan. Vellistry does not reject a working key based on whether it is attached to free or paid billing. The user—not Vellistry's operator—is responsible for the account/provider's usage charges and contract, unless a separate future commercial agreement explicitly changes that relationship.

**This means Vellistry supplies selectable integration options, not that it owns the underlying model, guarantees free model access, or hosts every model.** Model compatibility, availability, context limit, region, rate limits and terms are independent of key price tier. The same model can have different limits or processing policies by account/plan.

## Requirements that this clarification changes

- The earlier research preference for only free cloud APIs or a local Ollama-first path is **not a product exclusion**. Local inference can remain an option, but supported paid provider models are equally eligible for the model menu where integrations are technically and legally appropriate.
- The earlier research phrase 'zero spending cap' or 'do not allow a fee-bearing provider' applies to **Vellistry spending its own funds without authorization**, not a ban on the user's separately billed provider key. Do not automatically impose a zero-dollar limit on all user-owned AI requests.
- Model/provider picker and BYOK entry must be linked: show connection status and model availability, allow replacing/removing a key, and handle invalid/expired credentials, 401/403, 429, network failure and unsupported model without modifying a manuscript.
- API keys are secrets. Protect credentials in a reviewed storage/transport design, mask in interface, never expose in logs, Git, analytics or other users' sessions, and provide disconnect/revoke guidance. Do not assume that BYOK prevents provider or Vellistry processing of selected text.
- Privacy notices/consent, manuscript-context preview, explicit author-initiated AI calls, user control of generated prose and Story Profile canon, and no hidden fallback remain required **regardless of whether the user's API key is paid or free**. Pricing notices can clarify that provider billing is external, but Vellistry should not require a specific free-tier plan.

## Boundaries unchanged

- **No mandatory paid service for the core application:** Writers may create books, write manually, save/export and manage their own story notes without any AI API credential. This constraint does not mean that a writer cannot voluntarily use a paid API with their own account.
- No Vellistry-funded credits, paid service purchase, universal provider selection, actual credential handling implementation, production inference, legal/privacy certification or product deployment is authorized by the owner's clarification.
- The original Option B research-before-prototype gate remains. This decision updates the **research/product requirements and Wave 5 evaluation scope only**. It does not authorize new Figma, Lovable, production coding or deployment.

**Current status:** Accepted owner product clarification, recorded as source-traced history; feature unimplemented. Future Wave 5 model evaluation should cover supported free AND paid user-supplied credentials where lawfully available, with honest BLOCKED status if credentials cannot be provided without violating current project constraints.
~~~~~~

## Execution reporting
Return an ExecutionBundle with FACT / INTERPRETATION / PROPOSAL sections,
tests actually performed, changes, evidence gaps, and pending owner approval.
