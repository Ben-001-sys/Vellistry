---
id: VEL-CP-0036
title: 'Context for VEL-TASK-0036: Correct rejected-session copy with source-backed
  uncertainty regression'
type: context-pack
status: prepared
created_at: '2026-10-20'
version: 0.1.0
task_id: VEL-TASK-0036
base_commit: 73375db5159cc551df64fb74d7fc67192aebf8f7
task_blob_sha: e991951b556ea43dc6e77a4ada1a57f88a00833e
inputs:
- path: PROJECT-CONSTITUTION.md
  role: current-authority-exact-predecessor-source
  git_blob_sha: 61f79c4dcb47bd99291c16490e8c00692e2ab23b
  source_status: accepted
- path: SOURCE-OF-TRUTH.md
  role: current-authority-exact-predecessor-source
  git_blob_sha: d5bec6f59108ac84715d77b65836f4499194c3f1
  source_status: accepted
- path: AGENTS.md
  role: current-authority-exact-predecessor-source
  git_blob_sha: 2feca4ec9ee0f11f5b6ac089c1d5c826d0e043ce
  source_status: active
- path: docs/agent-workflow/PR-COMPLIANCE.md
  role: current-authority-exact-predecessor-source
  git_blob_sha: 5f4845623aef3abb15fba7fbe8e78474902cca00
  source_status: unrecorded
- path: docs/agent-workflow/authorizations/VEL-REM-INTEGRATION-20261019.yaml
  role: current-authority-exact-predecessor-source
  git_blob_sha: 8023094b20f65e44b6ea6a002f4e2808b3e92be6
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0036/OWNER-SCOPE.md
  role: current-authority-exact-predecessor-source
  git_blob_sha: e813abae27dc17833ed10fa51a33938adda11337
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0036/SOURCE-MAP.json
  role: current-authority-exact-predecessor-source
  git_blob_sha: bde39cbdd3db2b61cdd610008aa2a8a8b8c5e98e
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0036/CORRECTION-PLAN.json
  role: review-correction-scope
  git_blob_sha: f729c5d19ddfaa56f24caf82530a0e902fed387c
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0036/PR100-independent-review.txt
  role: review-correction-scope
  git_blob_sha: 3e914e577c22cf3d61eec980871e60f33c41f0ad
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0036/PR100-review-command.json
  role: review-correction-scope
  git_blob_sha: ffa89d84b6d9c7f43888df95b55ac1b44183786e
  source_status: unrecorded
- path: apps/web/src/lib/library/book-create-document.ts
  role: existing-rejection-unknown-control-contract
  git_blob_sha: dc094926f3f1237d784f71645c635fe41c54102a
  source_status: unrecorded
- path: apps/web/src/lib/library/book-library-session.ts
  role: existing-rejection-unknown-control-contract
  git_blob_sha: 1aff020ffa9db807abf41cdd34de138dd07af294
  source_status: unrecorded
- path: apps/web/src/app/api/books/route.ts
  role: existing-rejection-unknown-control-contract
  git_blob_sha: 34b70aed9ae8fd5a4033c9a1db615e03a3902231
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0036/EXISTING-TEST-EXCERPTS.md
  role: bounded-original-test-source-excerpts
  git_blob_sha: c23c9c5fd931276cd11fb009030f299ea351358d
  source_status: unrecorded
source_gaps:
- id: PROVENANCE
  limitation: Original Task/CP/EB remain historical; current source-map is exactselectiveadoption,
    not originalauthorship or retroactiveapproval.
- id: GATES
  limitation: Real separate trusted Codex review and ready/postmerge CI required;
    nohosted/coldstartimplementation inference.
prepared_by: agent_workflow.py
---

# VEL-CP-0036 — Correct rejected-session copy with source-backed uncertainty regression

## Objective
Adopt the reviewed PR100 language source, preserve all historical Task35 evidence, correct the demonstrated session-mismatch wording P2, and prove definite rejection versus uncertain dispatched writes without changing runtime behavior.

## Scope
**In:** LANGUAGE.md; apps/web/src/app/books/page.tsx; apps/web/src/lib/library/book-library-state.ts; docs/agent-workflow/context-packs/VEL-CP-0023.md; docs/agent-workflow/context-packs/VEL-CP-0035.md; docs/agent-workflow/execution-bundles/VEL-EB-0023.md; docs/agent-workflow/execution-bundles/VEL-EB-0035.md; docs/agent-workflow/inputs/VEL-TASK-0023/ACCEPTED-DECISION-EXCERPTS.md; docs/agent-workflow/inputs/VEL-TASK-0023/ID-SCAN.txt; docs/agent-workflow/inputs/VEL-TASK-0023/LANGUAGE-PART-01.md; docs/agent-workflow/inputs/VEL-TASK-0023/LANGUAGE-PART-02.md; docs/agent-workflow/inputs/VEL-TASK-0023/LANGUAGE-PART-03.md; docs/agent-workflow/inputs/VEL-TASK-0023/LANGUAGE-PART-04.md; docs/agent-workflow/inputs/VEL-TASK-0023/LANGUAGE-TASK-EXCERPTS.md; docs/agent-workflow/inputs/VEL-TASK-0023/MANDATE-EXCERPTS.md; docs/agent-workflow/inputs/VEL-TASK-0023/OWNER-SCOPE.md; docs/agent-workflow/inputs/VEL-TASK-0023/SOURCE-REFS.json; docs/agent-workflow/inputs/VEL-TASK-0035/AMENDMENT-SCOPE.md; docs/agent-workflow/inputs/VEL-TASK-0035/COPY-PLAN.json; docs/agent-workflow/inputs/VEL-TASK-0035/ID-SCAN.txt; docs/agent-workflow/inputs/VEL-TASK-0035/LANGUAGE-EXCERPTS.md; docs/agent-workflow/inputs/VEL-TASK-0035/OWNER-SCOPE.md; docs/agent-workflow/inputs/VEL-TASK-0035/SOURCE-MAP.json; docs/agent-workflow/inputs/VEL-TASK-0035/previous-main-evidence-manifest.yaml; docs/agent-workflow/tasks/VEL-TASK-0023.yaml; docs/agent-workflow/tasks/VEL-TASK-0035.yaml; docs/reports/VEL-INTEGRATION-0035.md; docs/reports/VEL-LANG-DECISIONS-2026-10-19.md; docs/reports/VEL-LANGUAGE-DISPOSITIONS-2026-10-20.md; docs/reports/evidence/VEL-INTEGRATION-0035/additional-commands.json; docs/reports/evidence/VEL-INTEGRATION-0035/build.txt; docs/reports/evidence/VEL-INTEGRATION-0035/check.txt; docs/reports/evidence/VEL-INTEGRATION-0035/commands.json; docs/reports/evidence/VEL-INTEGRATION-0035/current-language-checks.txt; docs/reports/evidence/VEL-INTEGRATION-0035/focused.txt; docs/reports/evidence/VEL-INTEGRATION-0035/frozen-install.txt; docs/reports/evidence/VEL-INTEGRATION-0035/handoff.txt; docs/reports/evidence/VEL-INTEGRATION-0035/library66.txt; docs/reports/evidence/VEL-INTEGRATION-0035/metadata.txt; docs/reports/evidence/VEL-INTEGRATION-0035/preflight22.txt; docs/reports/evidence/VEL-INTEGRATION-0035/readiness.txt; docs/reports/evidence/VEL-INTEGRATION-0035/source-identity.txt; docs/reports/evidence/VEL-INTEGRATION-0035/spec.txt; docs/reports/evidence/VEL-LANG-DECISIONS/REPRODUCE.md; docs/reports/evidence/VEL-LANG-DECISIONS/commands.json; docs/reports/evidence/VEL-LANG-DECISIONS/frozen-install-network.txt; docs/reports/evidence/VEL-LANG-DECISIONS/frozen-install.txt; docs/reports/evidence/VEL-LANG-DECISIONS/handoff.txt; docs/reports/evidence/VEL-LANG-DECISIONS/library66-network.txt; docs/reports/evidence/VEL-LANG-DECISIONS/library66.txt; docs/reports/evidence/VEL-LANG-DECISIONS/matrix-source-assertions.json; docs/reports/evidence/VEL-LANG-DECISIONS/matrix.json; docs/reports/evidence/VEL-LANG-DECISIONS/metadata.txt; docs/reports/evidence/VEL-LANG-DECISIONS/readiness.txt; docs/reports/evidence/VEL-LANG-DECISIONS/reproduce-result.txt; docs/reports/evidence/VEL-LANG-DECISIONS/spec.txt; docs/reports/evidence/VEL-LANGUAGE-DISPOSITIONS-2026-10-20/REPRODUCE.md; docs/reports/evidence/VEL-LANGUAGE-DISPOSITIONS-2026-10-20/matrix.json; docs/agent-workflow/tasks/VEL-TASK-0036.yaml; docs/agent-workflow/context-packs/VEL-CP-0036.md; docs/agent-workflow/execution-bundles/VEL-EB-0036.md; docs/agent-workflow/inputs/VEL-TASK-0036/*; docs/agent-workflow/PR-COMPLIANCE.yaml; docs/reports/VEL-INTEGRATION-0036*; docs/reports/evidence/VEL-INTEGRATION-0036/*; apps/web/src/lib/library/book-library-session.test.ts
**Out:** Old Task/CP/input/EB mutation; runtime request/state/security changes; any new feature/SQL/CI/dependency modification; Hosted/auth/credentials/private/paid/admin/production/merge in implementation

## Evidence and authority constraints
The text below is a readable rendering of pinned Git blobs; exact raw bytes remain recoverable from the recorded commit/blob SHAs. Recorded source statuses remain in force: draft research is not accepted requirements. Original unarchived uploads are not independently verified merely by being mentioned.

**Known source gaps:**
- PROVENANCE: Original Task/CP/EB remain historical; current source-map is exactselectiveadoption, not originalauthorship or retroactiveapproval.
- GATES: Real separate trusted Codex review and ready/postmerge CI required; nohosted/coldstartimplementation inference.

## Permissions and acceptance
**Allowed:** Readlivecurrentmain/predecessor andsourcepins; commitTask/source thenvalidatedimmutableCP, Adoptexactlistedsource,runactualsafechecks,writefactualEB/newperPRevidencebinding,publishreadyPR/trustedreview, After immutable CP36, correct only the approved session copy and current language report/matrix/replay semantics; add meaningful definite-rejection/unknown-write regression before copy correction.
**Owner approval required:** Outsideone-timeprogramorhosted/private/paid/admin/production/newfeatures; Unreviewedsecurity/SQLcontent change or missingactualdistinctreview/readyCI remainsblocking
**Acceptance criteria:**
- All predecessor sources remain byte-exact except state.ts single approved literal, new session regression, and current language report/matrix/replay reconciliation. Historical Task35/CP35/inputs35/EB35 and original23 sources unchanged.
- Regression-first test demonstrates old wording fails for pre-forward identity rejection; corrected wording passes. Genuine dispatched unknown write remains uncertain and blocks ordinary retry.
- Existing66Library plus new regression,22preflight,check,bothbuilds,full governance and distinct review/ready/postmain CI; no hosted/browser acceptance claim.

## Deliverables
- CommittedcurrentTask/source,validatedimmutableCP beforeadoption
- Listedpredecessorsource/provenance retained without stale sharedmanifest
- Actual source/evidence/focused checks and EB; realreadyCI/separatereview; verifiedsuccessor disposition

## Pinned source snapshots
Git commit: `73375db5159cc551df64fb74d7fc67192aebf8f7`. Read source statuses independently from task intent.

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

### `docs/agent-workflow/inputs/VEL-TASK-0036/OWNER-SCOPE.md` @ `e813abae27dc17833ed10fa51a33938adda11337`

~~~~~~markdown
# Current-main selective integration amendment VEL-TASK-0036
One-time owner delegation, 19 Oct 2026, remediation-only. Owner updatedmandate is archived by merged Task0025 SHA2568129384277fe67f3490fd29955e78ded028c035d1dbf43b468b69bf75815e35c. Formalrecord docs/agent-workflow/authorizations/VEL-REM-INTEGRATION-20261019.yaml. Currentmain 326f5e4c385644f864348d008c46c1aa54c7b616; predecessor PR100 exacthead 49cf6f88316831ccff12fae869baf00a09e6c8d8. Materialbase/authority change requires thisnewTask/CP beforeadoption, never rewriting originalTask/CP orforcepushing sourcebranch. Adopt only listed originalsourcefiles byte-exact excluding sharedper-PRmanifest; preserve originalTask/CP/EB and originalsource/authorship in lineage. Integrationcommit is Codex source adoption, not newauthorship of inheritedChatGPT/Cursor source. Oldproposals/permissions/results remain historical source data, not currentauthority. No newapplicationfeatures/SQL/CI changes beyondexactboundedpredecessor; no hosted/Auth/private/paid/admin/production ormergesinsideimplementation. Actualsubsequentserialmerge is separate owner-delegatedoperation requiring distincttrustedCodex finalheadreview/realreadyCI andpostmergeCI beforedependentwork. Keeporiginalbranches/evidence. Do not manufacture source approval, new hostedstate, ChatGPT/humanreview orfreshcoldstartimplementation. Original source refs mustremain retrievable; finalbackup checks dependency closure.

AMENDMENT: PR100 separate review found the Task35 exact pinned session copy conflated definite pre-forward409 rejection with dispatched uncertain writes. New Task36/CP36 expressly supersedes only that incorrect assumption, not old evidence. Correction-plan names one approved new literal. Allowed exceptions to exact adoption: state.ts literal, session test, and current language report/matrix/replay. Preserve old35Task/CP/inputs/EB/reports as historical failed-review evidence. No new application logic or feature.
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0036/SOURCE-MAP.json` @ `bde39cbdd3db2b61cdd610008aa2a8a8b8c5e98e`

~~~~~~markdown
{
  "pr": 100,
  "source": "49cf6f88316831ccff12fae869baf00a09e6c8d8",
  "base": "326f5e4c385644f864348d008c46c1aa54c7b616",
  "paths": [
    {
      "path": "LANGUAGE.md",
      "source_commit": "49cf6f88316831ccff12fae869baf00a09e6c8d8",
      "blob": "1b8a700218c8f93bfb4ca7972b90c00d03c673c0",
      "sha256": "1cd6e00e64ed923cfd596c9b50cc50b77ef9e4712a687ca90fad8465742b81b3"
    },
    {
      "path": "apps/web/src/app/books/page.tsx",
      "source_commit": "49cf6f88316831ccff12fae869baf00a09e6c8d8",
      "blob": "1bada32dd1b1d38d9d07577d4a11e672e3fb9f74",
      "sha256": "8ebd093d658d6870265c88e83c3de43eaeb81be92c8a0a0e797edbd290cfbfc6"
    },
    {
      "path": "apps/web/src/lib/library/book-library-state.ts",
      "source_commit": "49cf6f88316831ccff12fae869baf00a09e6c8d8",
      "blob": "510f35099fd9feac7bb3956ffe3ad0502db5fa87",
      "sha256": "c24ce6fcff1a1c578808edaafaafa54458f7442d095f40878f6d1348498058ec"
    },
    {
      "path": "docs/agent-workflow/context-packs/VEL-CP-0023.md",
      "source_commit": "49cf6f88316831ccff12fae869baf00a09e6c8d8",
      "blob": "af6119b89f8f207d0f2820c447457d2e4dc96c7c",
      "sha256": "faef9c1d85704cb7e99b25e7dccecd62a87860a34a1792ec000439a17ea98d38"
    },
    {
      "path": "docs/agent-workflow/context-packs/VEL-CP-0035.md",
      "source_commit": "49cf6f88316831ccff12fae869baf00a09e6c8d8",
      "blob": "4f9102a0ce2b8bedb5fe483e5b4c23f7c396334b",
      "sha256": "97073f671f443e5d4ab974087a285c2e34cd0c519abb9f5cd7bf052de4547e7e"
    },
    {
      "path": "docs/agent-workflow/execution-bundles/VEL-EB-0023.md",
      "source_commit": "49cf6f88316831ccff12fae869baf00a09e6c8d8",
      "blob": "40966533f9d3f2ff831d7f9342b9ebf36189f986",
      "sha256": "dc7c6d371b02e2d6e1664c15209b6e3676159455791e75b787ec167c461a6891"
    },
    {
      "path": "docs/agent-workflow/execution-bundles/VEL-EB-0035.md",
      "source_commit": "49cf6f88316831ccff12fae869baf00a09e6c8d8",
      "blob": "5eddf9d183d456676cced1e1468de6f325a1f4cd",
      "sha256": "45217b7aa21f4c1c04c4cf3f43eaa40c3792a97a4ed366557a3381554ddbcbbd"
    },
    {
      "path": "docs/agent-workflow/inputs/VEL-TASK-0023/ACCEPTED-DECISION-EXCERPTS.md",
      "source_commit": "49cf6f88316831ccff12fae869baf00a09e6c8d8",
      "blob": "c1240fa41f0c02787d210b5fc22ba0c1832e698c",
      "sha256": "ffac194816a155a645bcc68013c08514fa1255419e3ac436a96bdf4c35c052f4"
    },
    {
      "path": "docs/agent-workflow/inputs/VEL-TASK-0023/ID-SCAN.txt",
      "source_commit": "49cf6f88316831ccff12fae869baf00a09e6c8d8",
      "blob": "1a29eb0e855d6177e414c86198e13c49df46d09c",
      "sha256": "f23d4c8a08776a090b908b9be4465b7bac0038d49ea56863ef2e8506e7579ce2"
    },
    {
      "path": "docs/agent-workflow/inputs/VEL-TASK-0023/LANGUAGE-PART-01.md",
      "source_commit": "49cf6f88316831ccff12fae869baf00a09e6c8d8",
      "blob": "ce6855a343a38d92c15f0582804c3d46ae81b723",
      "sha256": "c3a8260b902238d82b46e5a91b8d16385e6d73fffc9e18f6f08ef2210b137539"
    },
    {
      "path": "docs/agent-workflow/inputs/VEL-TASK-0023/LANGUAGE-PART-02.md",
      "source_commit": "49cf6f88316831ccff12fae869baf00a09e6c8d8",
      "blob": "444d9083d4a1b5539c9b730908284abe26d92a5e",
      "sha256": "06218beefcce8aa889be5cb235e7f5f606661dd5732174d3f9fadb45a0afc8d7"
    },
    {
      "path": "docs/agent-workflow/inputs/VEL-TASK-0023/LANGUAGE-PART-03.md",
      "source_commit": "49cf6f88316831ccff12fae869baf00a09e6c8d8",
      "blob": "561d6180568d7d8f1c0467001fe75d120d550840",
      "sha256": "8cc9546d9c53c7fd155dc8d36dabfef3decf73e3e170c3c8cb945f4aebb0e1d9"
    },
    {
      "path": "docs/agent-workflow/inputs/VEL-TASK-0023/LANGUAGE-PART-04.md",
      "source_commit": "49cf6f88316831ccff12fae869baf00a09e6c8d8",
      "blob": "0fb646876e5173eef782cacf70d7f7901de4ff3d",
      "sha256": "d5f678119f414486c3f182dbfbb1040c585c4801d86a1d91c6180efb9ca95cdf"
    },
    {
      "path": "docs/agent-workflow/inputs/VEL-TASK-0023/LANGUAGE-TASK-EXCERPTS.md",
      "source_commit": "49cf6f88316831ccff12fae869baf00a09e6c8d8",
      "blob": "279df86189dc24522b2b7d0ec3cd73a83127876b",
      "sha256": "e9e39f8c531e4b3ff2b6e8e104a830431ef1397d2327fdef234c089a8817bb93"
    },
    {
      "path": "docs/agent-workflow/inputs/VEL-TASK-0023/MANDATE-EXCERPTS.md",
      "source_commit": "49cf6f88316831ccff12fae869baf00a09e6c8d8",
      "blob": "b7159033a4c671cf43d141d1c9a4d5e805998d54",
      "sha256": "fd974e2ff23e7b771509dcd5683d1a6b4e2284b7a91cb709d96c2f998fea25eb"
    },
    {
      "path": "docs/agent-workflow/inputs/VEL-TASK-0023/OWNER-SCOPE.md",
      "source_commit": "49cf6f88316831ccff12fae869baf00a09e6c8d8",
      "blob": "775b054a221d44dc31198f24e44ccf4afbafb566",
      "sha256": "f79e3dfde739d3a3de73b163ce9fdb30915d05e38496f7b804cf2afa1d93cf24"
    },
    {
      "path": "docs/agent-workflow/inputs/VEL-TASK-0023/SOURCE-REFS.json",
      "source_commit": "49cf6f88316831ccff12fae869baf00a09e6c8d8",
      "blob": "a17923bceb89981d1204420dae54c515bb360902",
      "sha256": "112452b60b2485b5fc8a7603374c6081638cbbb755e70d40df7ed731ac537934"
    },
    {
      "path": "docs/agent-workflow/inputs/VEL-TASK-0035/AMENDMENT-SCOPE.md",
      "source_commit": "49cf6f88316831ccff12fae869baf00a09e6c8d8",
      "blob": "6fd8524efab3b203d2b02cf0226b4c00ebc0116b",
      "sha256": "911465641c22c96255a438deea1e596d6443ee6d6899a8f10f16773dee48a48b"
    },
    {
      "path": "docs/agent-workflow/inputs/VEL-TASK-0035/COPY-PLAN.json",
      "source_commit": "49cf6f88316831ccff12fae869baf00a09e6c8d8",
      "blob": "b0dcbd708b493dc9e6fa99c802b1edd6da13abab",
      "sha256": "cac2061fdccd9b0125c2de8c7f39c98d5007fb8467756a4bd021612aef18f427"
    },
    {
      "path": "docs/agent-workflow/inputs/VEL-TASK-0035/ID-SCAN.txt",
      "source_commit": "49cf6f88316831ccff12fae869baf00a09e6c8d8",
      "blob": "3f275c30ebb692392195ae1db63e44c0f0486ffc",
      "sha256": "517f51d9c969f246319373f43130ba156ccb5034080abae4216367e3274136d6"
    },
    {
      "path": "docs/agent-workflow/inputs/VEL-TASK-0035/LANGUAGE-EXCERPTS.md",
      "source_commit": "49cf6f88316831ccff12fae869baf00a09e6c8d8",
      "blob": "844984742bc3c5829a29b13ba11c86e4cfc9b17a",
      "sha256": "4e8697652076b81cc53cf93c06f4c4d95fa2427674f1ffca2d3f20c392ecdc21"
    },
    {
      "path": "docs/agent-workflow/inputs/VEL-TASK-0035/OWNER-SCOPE.md",
      "source_commit": "49cf6f88316831ccff12fae869baf00a09e6c8d8",
      "blob": "9409c4e7c9a85ac0ff164ebdc5ae180352fe9deb",
      "sha256": "ccd31f04620ece197113d80e0f6e04f574d064244d277f288d6d972cb0e700cf"
    },
    {
      "path": "docs/agent-workflow/inputs/VEL-TASK-0035/SOURCE-MAP.json",
      "source_commit": "49cf6f88316831ccff12fae869baf00a09e6c8d8",
      "blob": "0023b551c449f5da0ff552269693d60858edd47d",
      "sha256": "53a7310503307c7da7cb59f33dcb226bb2bc9c539b8e39969a40d269770ff8fc"
    },
    {
      "path": "docs/agent-workflow/inputs/VEL-TASK-0035/previous-main-evidence-manifest.yaml",
      "source_commit": "49cf6f88316831ccff12fae869baf00a09e6c8d8",
      "blob": "ea30b342fcff019fcdf71a84532517768b61708e",
      "sha256": "de9a8ce51b2388b3fe9e608e4d56aa06b8b44a1f96beba16859649e121887a20"
    },
    {
      "path": "docs/agent-workflow/tasks/VEL-TASK-0023.yaml",
      "source_commit": "49cf6f88316831ccff12fae869baf00a09e6c8d8",
      "blob": "29a2ce8ec86e4164fef0c2355073728844394f9b",
      "sha256": "b0c91df4071e15a0c015aa7796bead248f5ba14e787a5827814ed44559e9e0af"
    },
    {
      "path": "docs/agent-workflow/tasks/VEL-TASK-0035.yaml",
      "source_commit": "49cf6f88316831ccff12fae869baf00a09e6c8d8",
      "blob": "565decb77f8770efc3106aea2a8ddde01588edec",
      "sha256": "14029fb01ec44cc21c9d6876daeccf3c36c05d2e1140991902278fd86f686424"
    },
    {
      "path": "docs/reports/VEL-INTEGRATION-0035.md",
      "source_commit": "49cf6f88316831ccff12fae869baf00a09e6c8d8",
      "blob": "cd47c5af0ef32ee217c7fefc1f6fd8c662feb5f6",
      "sha256": "d10094c8b9f458f79713a03aafc50895038e5084b06adcb71eaedf2f3fb6fa33"
    },
    {
      "path": "docs/reports/VEL-LANG-DECISIONS-2026-10-19.md",
      "source_commit": "49cf6f88316831ccff12fae869baf00a09e6c8d8",
      "blob": "85c2470b6d309ec39b094f2b3672f3a678043009",
      "sha256": "b8f721285e6a31a92f2a6f762b2de0110fd859abae3134dd210f5ac0b37b7afe"
    },
    {
      "path": "docs/reports/VEL-LANGUAGE-DISPOSITIONS-2026-10-20.md",
      "source_commit": "49cf6f88316831ccff12fae869baf00a09e6c8d8",
      "blob": "26838c11ec13616c20e4219c883b9b395b2afe1b",
      "sha256": "b61aff234d3556a9c5e7c568f466cecf33a0b0122633de0fa86fb01187b9505d"
    },
    {
      "path": "docs/reports/evidence/VEL-INTEGRATION-0035/additional-commands.json",
      "source_commit": "49cf6f88316831ccff12fae869baf00a09e6c8d8",
      "blob": "46b6e2573f720a5c7a3801aef22a172009d70b23",
      "sha256": "1f91d51fe140d9478c327508f632f0398b07ca1047934521f4af09952270c823"
    },
    {
      "path": "docs/reports/evidence/VEL-INTEGRATION-0035/build.txt",
      "source_commit": "49cf6f88316831ccff12fae869baf00a09e6c8d8",
      "blob": "6076a139827a3e9e4e5b6d149e296e9a3c9daf94",
      "sha256": "13532c214d1ce0a580eccdd844d90aced0ce72e3b025fb8def62307cd196a93b"
    },
    {
      "path": "docs/reports/evidence/VEL-INTEGRATION-0035/check.txt",
      "source_commit": "49cf6f88316831ccff12fae869baf00a09e6c8d8",
      "blob": "377de383cfbaa24bbd338728f63d9afb458f0ede",
      "sha256": "9d4940bb5c7ba3deca7a790248732983322dcefd8c483d0c1863e9ab00294327"
    },
    {
      "path": "docs/reports/evidence/VEL-INTEGRATION-0035/commands.json",
      "source_commit": "49cf6f88316831ccff12fae869baf00a09e6c8d8",
      "blob": "936431f8db559646bb5afdeca0c9811d5e17b739",
      "sha256": "3d3dfc5542ce28b59e9dbc15c4b86d4fd6a502ce46ff2447eaa37476a8e0649c"
    },
    {
      "path": "docs/reports/evidence/VEL-INTEGRATION-0035/current-language-checks.txt",
      "source_commit": "49cf6f88316831ccff12fae869baf00a09e6c8d8",
      "blob": "b269c47f8fecb7abb33f4e62bfecbecfc06a41f3",
      "sha256": "0a30ed825d5983a761e95e0b1b291b0dfdbbd50e34dcff2c4933ff240df5a1c9"
    },
    {
      "path": "docs/reports/evidence/VEL-INTEGRATION-0035/focused.txt",
      "source_commit": "49cf6f88316831ccff12fae869baf00a09e6c8d8",
      "blob": "daf4d053802820549c92fd619b2a105b0e9bd312",
      "sha256": "a830bbfc673ebf9facd4461f062f88cefcb840768f7f1c35d38f25c07736b4ed"
    },
    {
      "path": "docs/reports/evidence/VEL-INTEGRATION-0035/frozen-install.txt",
      "source_commit": "49cf6f88316831ccff12fae869baf00a09e6c8d8",
      "blob": "8a94c4c63c6b37dbdafad9a289253390c9f3413d",
      "sha256": "d13f5dd877a15b06fc2b2fbe0bc0f73fe8604e52dd98a851752e7a111ae308be"
    },
    {
      "path": "docs/reports/evidence/VEL-INTEGRATION-0035/handoff.txt",
      "source_commit": "49cf6f88316831ccff12fae869baf00a09e6c8d8",
      "blob": "5fb457edd633e405c2f004f892d5c2cad6e125b3",
      "sha256": "4c1a584c382d134fceb4807d650dcfc6f62b7eaf4d79f2ef3fb40a905733189e"
    },
    {
      "path": "docs/reports/evidence/VEL-INTEGRATION-0035/library66.txt",
      "source_commit": "49cf6f88316831ccff12fae869baf00a09e6c8d8",
      "blob": "fbb4dc3d8b1949672a2eb49ee29032fcdb6a4460",
      "sha256": "7d6073139af7af02769ccfded27eee4531ec599d527439e2b33ee20c661c077b"
    },
    {
      "path": "docs/reports/evidence/VEL-INTEGRATION-0035/metadata.txt",
      "source_commit": "49cf6f88316831ccff12fae869baf00a09e6c8d8",
      "blob": "940063efd38b84b7a3e5cfb25516a95a215b732c",
      "sha256": "4423d0179232fe933d37cd2f42bc585e490f89273e3f9054d82879f81e4b06a5"
    },
    {
      "path": "docs/reports/evidence/VEL-INTEGRATION-0035/preflight22.txt",
      "source_commit": "49cf6f88316831ccff12fae869baf00a09e6c8d8",
      "blob": "656af550101424bb2e7aabed1a4a9dc4c09d2ac9",
      "sha256": "713d7ae2cb178b74646396e4219fa2ad40c57c9922cf751864e22359859418b9"
    },
    {
      "path": "docs/reports/evidence/VEL-INTEGRATION-0035/readiness.txt",
      "source_commit": "49cf6f88316831ccff12fae869baf00a09e6c8d8",
      "blob": "e4080f22adfe2b711527a9c6187331802f24d4db",
      "sha256": "77a2897bb7f252e76ff34c9ea2686332d0fd6623eb4a8dfcef4fc4ef4ca5b6e2"
    },
    {
      "path": "docs/reports/evidence/VEL-INTEGRATION-0035/source-identity.txt",
      "source_commit": "49cf6f88316831ccff12fae869baf00a09e6c8d8",
      "blob": "e133475da83524816d9bd9e544c0414ce9939582",
      "sha256": "d1cfddd442255f49ac56aaccb93fbad9ccca0c904f8c9af9f05eb6df169c0e2b"
    },
    {
      "path": "docs/reports/evidence/VEL-INTEGRATION-0035/spec.txt",
      "source_commit": "49cf6f88316831ccff12fae869baf00a09e6c8d8",
      "blob": "c9fd75f35077ea1f3a615adc4bc689bf38f07bdd",
      "sha256": "eb47c0e32579bde7c78fd5e85c9c541190c0e4322586ef08cd38a457d638a2bd"
    },
    {
      "path": "docs/reports/evidence/VEL-LANG-DECISIONS/REPRODUCE.md",
      "source_commit": "49cf6f88316831ccff12fae869baf00a09e6c8d8",
      "blob": "7b44523b3ab43cff91c484fd842889855281d4b1",
      "sha256": "20ff24614d0a4018cd319e4cf7b703e5c8f905a161ecc5ffef13f42eadd3d562"
    },
    {
      "path": "docs/reports/evidence/VEL-LANG-DECISIONS/commands.json",
      "source_commit": "49cf6f88316831ccff12fae869baf00a09e6c8d8",
      "blob": "7ad16c331a878e858bebb0a2c1453923063132eb",
      "sha256": "3dd9ed86eb74d22e448f75c9bed71b28d7ef81acedcad28a1582ec1004edcda1"
    },
    {
      "path": "docs/reports/evidence/VEL-LANG-DECISIONS/frozen-install-network.txt",
      "source_commit": "49cf6f88316831ccff12fae869baf00a09e6c8d8",
      "blob": "65f05e45498ff161adf1ade1aed542c5f7800319",
      "sha256": "161df81cd835594617ebf97d20ab1a76c953a148143be2865c65c2f29fc90c0f"
    },
    {
      "path": "docs/reports/evidence/VEL-LANG-DECISIONS/frozen-install.txt",
      "source_commit": "49cf6f88316831ccff12fae869baf00a09e6c8d8",
      "blob": "8514016f606e5053cd651aef82d89ed09431de3f",
      "sha256": "40a33fc97d07a31771dcaa56f9a14a6ccbbadf65e76d1e9806ac690fa8b26505"
    },
    {
      "path": "docs/reports/evidence/VEL-LANG-DECISIONS/handoff.txt",
      "source_commit": "49cf6f88316831ccff12fae869baf00a09e6c8d8",
      "blob": "85506f5469105efefda3c4e9bb32bfceba1dbd42",
      "sha256": "90597c3efad9c7b66974ef6c13f2e70ccb9523145cdc934eb2c14681f696e514"
    },
    {
      "path": "docs/reports/evidence/VEL-LANG-DECISIONS/library66-network.txt",
      "source_commit": "49cf6f88316831ccff12fae869baf00a09e6c8d8",
      "blob": "b0a36666430b1b4c390ccc614128302c41bb6287",
      "sha256": "c010fa4c78782c45a7b83fe04ca875706b2450ffe4fc74db09ff8fe6b0bdda90"
    },
    {
      "path": "docs/reports/evidence/VEL-LANG-DECISIONS/library66.txt",
      "source_commit": "49cf6f88316831ccff12fae869baf00a09e6c8d8",
      "blob": "8514016f606e5053cd651aef82d89ed09431de3f",
      "sha256": "40a33fc97d07a31771dcaa56f9a14a6ccbbadf65e76d1e9806ac690fa8b26505"
    },
    {
      "path": "docs/reports/evidence/VEL-LANG-DECISIONS/matrix-source-assertions.json",
      "source_commit": "49cf6f88316831ccff12fae869baf00a09e6c8d8",
      "blob": "8e96679caf976a4d3d7cf06d9937ee4e0c27915a",
      "sha256": "1c5cc10f586bf0a8c35a6a611351561ddf7eba5b163413b8eadc0b59c2ae5dfe"
    },
    {
      "path": "docs/reports/evidence/VEL-LANG-DECISIONS/matrix.json",
      "source_commit": "49cf6f88316831ccff12fae869baf00a09e6c8d8",
      "blob": "6b52b7ee636efc7dc85202e1e8a7c8f46a3307aa",
      "sha256": "292c1bcdaf417cb798cd731e3786e61cb9e8296e488214ee711572d8a51a4697"
    },
    {
      "path": "docs/reports/evidence/VEL-LANG-DECISIONS/metadata.txt",
      "source_commit": "49cf6f88316831ccff12fae869baf00a09e6c8d8",
      "blob": "940063efd38b84b7a3e5cfb25516a95a215b732c",
      "sha256": "4423d0179232fe933d37cd2f42bc585e490f89273e3f9054d82879f81e4b06a5"
    },
    {
      "path": "docs/reports/evidence/VEL-LANG-DECISIONS/readiness.txt",
      "source_commit": "49cf6f88316831ccff12fae869baf00a09e6c8d8",
      "blob": "e4080f22adfe2b711527a9c6187331802f24d4db",
      "sha256": "77a2897bb7f252e76ff34c9ea2686332d0fd6623eb4a8dfcef4fc4ef4ca5b6e2"
    },
    {
      "path": "docs/reports/evidence/VEL-LANG-DECISIONS/reproduce-result.txt",
      "source_commit": "49cf6f88316831ccff12fae869baf00a09e6c8d8",
      "blob": "daf4d053802820549c92fd619b2a105b0e9bd312",
      "sha256": "a830bbfc673ebf9facd4461f062f88cefcb840768f7f1c35d38f25c07736b4ed"
    },
    {
      "path": "docs/reports/evidence/VEL-LANG-DECISIONS/spec.txt",
      "source_commit": "49cf6f88316831ccff12fae869baf00a09e6c8d8",
      "blob": "c9fd75f35077ea1f3a615adc4bc689bf38f07bdd",
      "sha256": "eb47c0e32579bde7c78fd5e85c9c541190c0e4322586ef08cd38a457d638a2bd"
    },
    {
      "path": "docs/reports/evidence/VEL-LANGUAGE-DISPOSITIONS-2026-10-20/REPRODUCE.md",
      "source_commit": "49cf6f88316831ccff12fae869baf00a09e6c8d8",
      "blob": "a422dd4f478e1ff7e4710582d1f4452f72889787",
      "sha256": "d028c20175a43d8e1b9610a9ac2b8bb4c7e0e4cd175cd7e0ee6c12ccc781ee0c"
    },
    {
      "path": "docs/reports/evidence/VEL-LANGUAGE-DISPOSITIONS-2026-10-20/matrix.json",
      "source_commit": "49cf6f88316831ccff12fae869baf00a09e6c8d8",
      "blob": "a4f93c9ed84f9a0beab495079fcb5329047f93bd",
      "sha256": "54cc32051d277a205881f7c79fdd6cf3588e73aca414758b8770f87db312ace7"
    }
  ]
}
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0036/CORRECTION-PLAN.json` @ `f729c5d19ddfaa56f24caf82530a0e902fed387c`

~~~~~~markdown
{
  "previous_source": "49cf6f88316831ccff12fae869baf00a09e6c8d8",
  "review_session": "01a159f6-1541-7a61-bae0-763daaccc0e9",
  "path": "apps/web/src/lib/library/book-library-state.ts",
  "before": "Your session changed. The creation result is unverified and may have completed for the original account.",
  "after": "Your session changed. This book creation request was rejected."
}
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0036/PR100-independent-review.txt` @ `3e914e577c22cf3d61eec980871e60f33c41f0ad`

~~~~~~markdown
The session-mismatch wording incorrectly describes a definitely rejected request as a potentially completed write. Test execution was blocked by sandbox spawn EPERM errors.

Review comment:

- [P2] Distinguish rejected session mismatches from unknown writes — H:\cursor\cursor\Vellistry\.worktrees\vel-language-adoption\apps\web\src\lib\library\book-library-state.ts:24-24
  When a create receives HTTP 409, this message now suggests that a book may have been created for the original account. However, `decideBookPost` returns that response on an identity mismatch before forwarding any write, and `submitCreate` uses `sessionChanged` specifically for that response. Actual uncertain writes use `createUnknown`. Preserve the definite rejection here rather than misleading authors into checking for a potentially created book. This also follows [AGENTS.md:23](AGENTS.md#L23), which requires behavioral claims to match the interface and backend.
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0036/PR100-review-command.json` @ `ffa89d84b6d9c7f43888df95b55ac1b44183786e`

~~~~~~markdown
{
  "command": [
    "C:\\Users\\admin\\AppData\\Local\\OpenAI\\Codex\\bin\\896a0166b774037a\\codex.exe",
    "-s",
    "read-only",
    "-a",
    "never",
    "-c",
    "mcp_servers.composio.enabled=false",
    "review",
    "--base",
    "326f5e4c385644f864348d008c46c1aa54c7b616"
  ],
  "head": "49cf6f88316831ccff12fae869baf00a09e6c8d8",
  "base": "326f5e4c385644f864348d008c46c1aa54c7b616",
  "authoring_conversation_supplied": false,
  "auth": "ExistingChatGPT; APIkeyenvironmentexcluded; ComposioMCPdisabled"
}
~~~~~~

### `apps/web/src/lib/library/book-create-document.ts` @ `dc094926f3f1237d784f71645c635fe41c54102a`

~~~~~~markdown
/** Header naming the user the browser believes is signed in. Never an owner override. */
export const EXPECTED_USER_HEADER = "x-vellistry-expected-user";

export type BookPostDecision =
  | { action: "reject"; status: 400 | 401 | 409; error: "invalid_document" | "unauthenticated" | "session_changed" }
  | { action: "forward"; document: string };

export function expectedUserMatchesSession(expected: string | null, sessionUserId: string): boolean {
  if (expected === null) return false;
  if (expected.length === 0 || expected.length > 128) return false;
  if (expected.trim() !== expected) return false;
  if (expected.includes("\r") || expected.includes("\n")) return false;
  return expected === sessionUserId;
}

export function bookCreateDocument(raw: string):
  | { ok: true; document: string }
  | { ok: false; error: "invalid_document" } {
  if (raw.length > 10000) return { ok: false, error: "invalid_document" };
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw) as unknown;
  } catch {
    return { ok: false, error: "invalid_document" };
  }
  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
    return { ok: false, error: "invalid_document" };
  }
  const title = (parsed as Record<string, unknown>).title;
  if (typeof title !== "string") return { ok: false, error: "invalid_document" };
  const trimmed = title.trim();
  if (trimmed.length < 1 || trimmed.length > 120) return { ok: false, error: "invalid_document" };
  return { ok: true, document: JSON.stringify({ title: trimmed }) };
}

/**
 * Decide a book create before any upstream call.
 * A mismatched expected user rejects the write. The forwarded document contains title only.
 */
export function decideBookPost(input: {
  sessionUserId: string | null;
  expectedUserId: string | null;
  rawBody: string;
}): BookPostDecision {
  if (!input.sessionUserId) return { action: "reject", status: 401, error: "unauthenticated" };
  if (!expectedUserMatchesSession(input.expectedUserId, input.sessionUserId)) {
    return { action: "reject", status: 409, error: "session_changed" };
  }
  const parsed = bookCreateDocument(input.rawBody);
  if (!parsed.ok) return { action: "reject", status: 400, error: "invalid_document" };
  return { action: "forward", document: parsed.document };
}

/**
 * A thrown fetch after the upstream request was sent does not prove the write
 * never happened. Failures before that send are definite.
 */
export function forwardTransportFailure(attemptedUpstream: boolean): {
  status: 503;
  error: "acknowledgment_unknown" | "service_unavailable";
} {
  if (attemptedUpstream) return { status: 503, error: "acknowledgment_unknown" };
  return { status: 503, error: "service_unavailable" };
}

/**
 * Server errors after dispatch cannot prove that the database did not commit.
 * Only a named BFF pre-forward 503 is a definite failure.
 */
export function outcomeForCreateStatus(
  status: number,
  errorCode: string | null,
): "unknown" | "error" | null {
  if (status < 500) return null;
  if (status === 503 && (errorCode === "service_unavailable" || errorCode === "api_not_configured")) return "error";
  return "unknown";
}
~~~~~~

### `apps/web/src/lib/library/book-library-session.ts` @ `1aff020ffa9db807abf41cdd34de138dd07af294`

~~~~~~markdown
/**
 * Auth-event controller for the Book Library page.
 * Same-author events do not restart a load or drop an in-flight create.
 * Same-author Refresh during a create does not abort that POST or bump generation.
 * A lost create response, a lost upstream acknowledgement, or a successful response
 * followed by a failed owner lookup is an unknown outcome. It does not say the book
 * was saved or that the save failed. A pre-forward 503 is a definite failure.
 * A later list that omits the title does not make another create safe.
 * An unverified identity conceals the draft and its uncertain-save flag, and
 * restores both only for that same author. An owner change clears them.
 */

import {
  applyCreate,
  applyLoad,
  beginLoad,
  concealBooksForSignOut,
  failSignOut,
  initialLibraryState,
  noteMissingUncertainTitle,
  requestCreate,
  type LibraryState,
  type LoadOutcome,
} from "./book-library-state";
import { outcomeForCreateStatus } from "./book-create-document";

export type SignOutResult = { error: boolean };

export type LibrarySessionDeps = {
  fetchBooks: (signal: AbortSignal) => Promise<Response>;
  createBook: (title: string, ownerKey: string, signal: AbortSignal) => Promise<Response>;
  readOwner: () => Promise<string | null>;
  signOut: () => Promise<SignOutResult>;
  goToLogin: () => void;
};

export type LibrarySessionSnapshot = {
  model: LibraryState;
  draftTitle: string;
};

export type AuthListen = (notify: (event: string, nextOwner: string | null) => void) => () => void;

async function createFailureCode(response: Response): Promise<string | null> {
  try {
    const payload: unknown = await response.json();
    if (!payload || typeof payload !== "object" || Array.isArray(payload)) return null;
    const error = (payload as { error?: unknown }).error;
    return typeof error === "string" ? error : null;
  } catch {
    return null;
  }
}

/**
 * After the first load, reload only when the authenticated author changes.
 * SIGNED_IN, TOKEN_REFRESHED, and USER_UPDATED for the same author do not.
 */
export function shouldReloadForAuthEvent(input: {
  event: string;
  currentOwner: string | null;
  nextOwner: string | null;
  hasLoaded: boolean;
}): boolean {
  if (!input.hasLoaded) return true;
  const sameAuthor = input.nextOwner === input.currentOwner;
  if (sameAuthor && (
    input.event === "INITIAL_SESSION" ||
    input.event === "SIGNED_IN" ||
    input.event === "TOKEN_REFRESHED" ||
    input.event === "USER_UPDATED"
  )) return false;
  return !sameAuthor;
}

export type LibrarySession = {
  snapshot: () => LibrarySessionSnapshot;
  subscribe: (listener: (snapshot: LibrarySessionSnapshot) => void) => () => void;
  setDraftTitle: (value: string) => void;
  onAuthEvent: (event: string, nextOwner: string | null) => Promise<void>;
  attachAuth: (listen: AuthListen) => () => void;
  refresh: () => Promise<void>;
  retryUncertainCreate: () => Promise<void>;
  submitCreate: () => Promise<void>;
  signOut: () => Promise<void>;
  failConfiguration: () => void;
  dispose: () => void;
};

export function createLibrarySession(deps: LibrarySessionDeps): LibrarySession {
  let model = initialLibraryState();
  let draftTitle = "";
  let owner: string | null = null;
  let createEvidence: { ownerKey: string; title: string; knownBookIds: Set<string> | null } | null = null;
  let concealedDraft: {
    ownerKey: string;
    title: string;
    createWasPending: boolean;
    createUncertain: boolean;
  } | null = null;
  let hasLoaded = false;
  let loadAbort: AbortController | null = null;
  let createAbort: AbortController | null = null;
  const listeners = new Set<(snapshot: LibrarySessionSnapshot) => void>();

  function snapshot(): LibrarySessionSnapshot {
    return { model, draftTitle };
  }

  function emit() {
    const next = snapshot();
    for (const listener of listeners) listener(next);
  }

  function subscribe(listener: (next: LibrarySessionSnapshot) => void) {
    listeners.add(listener);
    return () => { listeners.delete(listener); };
  }

  function setDraftTitle(value: string) {
    draftTitle = value;
    emit();
  }

  function startLoad(ownerKey: string | null): Promise<void> {
    const ownerChanged = ownerKey !== owner;
    if (ownerKey === null) {
      concealedDraft = null;
      createEvidence = null;
      draftTitle = "";
    }
    loadAbort?.abort();
    if (ownerChanged) createAbort?.abort();
    if (ownerChanged) {
      // Auth event payloads are hints, not independent identity verification.
      // Keep a matching concealed draft off-snapshot until runLoad verifies it.
      if (concealedDraft?.ownerKey !== ownerKey) {
        concealedDraft = null;
        createEvidence = null;
      }
      draftTitle = "";
    }
    const controller = new AbortController();
    loadAbort = controller;
    const generation = model.generation + 1;
    owner = ownerKey;
    hasLoaded = true;
    model = beginLoad(model, ownerKey, generation);
    emit();
    if (ownerKey === null) {
      model = applyLoad(model, generation, null, { kind: "unauthorized" });
      emit();
      return Promise.resolve();
    }
    return runLoad(ownerKey, generation, controller);
  }

  async function runLoad(ownerKey: string, generation: number, controller: AbortController) {
    // Resolve the HTTP outcome first, but do not publish any result until the
    // current author is verified. Failed GETs can also race an account switch.
    let outcome: LoadOutcome;
    try {
      const response = await deps.fetchBooks(controller.signal);
      if (controller.signal.aborted || model.generation !== generation || owner !== ownerKey) return;
      if (response.status === 401) {
        outcome = { kind: "unauthorized" };
      } else if (!response.ok) {
        outcome = { kind: "error" };
      } else {
        try {
          outcome = { kind: "ok", books: await response.json() };
        } catch {
          outcome = { kind: "error" };
        }
      }
    } catch {
      outcome = { kind: "error" };
    }
    if (controller.signal.aborted || model.generation !== generation || owner !== ownerKey) return;

    let liveOwner: string | null;
    try {
      liveOwner = await deps.readOwner();
    } catch {
      if (controller.signal.aborted || model.generation !== generation || owner !== ownerKey) return;
      concealForUnverifiedIdentity();
      return;
    }
    if (controller.signal.aborted || model.generation !== generation || owner !== ownerKey) return;
    if (liveOwner !== ownerKey) {
      // A failed GET is not proof the original author is still signed in.
      // Transition before emitting any status or exposing the previous draft.
      await startLoad(liveOwner);
      return;
    }

    if (concealedDraft?.ownerKey === liveOwner) {
      draftTitle = concealedDraft.title;
      model = { ...model, createUncertain: concealedDraft.createWasPending || concealedDraft.createUncertain };
      concealedDraft = null;
    }
    const uncertain = model.createUncertain;
    const trimmed = draftTitle.trim();
    model = applyLoad(model, generation, ownerKey, outcome);
    if (outcome.kind === "ok" && uncertain && model.phase !== "error") {
      // Titles are not unique. Only a new row relative to a known pre-create
      // list is reconciliation evidence. An unavailable baseline stays unknown.
      const evidence = createEvidence;
      const knownBookIds = evidence?.knownBookIds;
      const visible = evidence?.ownerKey === ownerKey && evidence.title === trimmed &&
        knownBookIds != null && model.books.some((item) =>
          item.title === trimmed && !knownBookIds.has(item.id));
      if (visible) draftTitle = "";
      else model = noteMissingUncertainTitle(model);
    }
    emit();
  }

  function onAuthEvent(event: string, nextOwner: string | null): Promise<void> {
    if (!shouldReloadForAuthEvent({ event, currentOwner: owner, nextOwner, hasLoaded })) {
      return Promise.resolve();
    }
    return startLoad(nextOwner);
  }

  function attachAuth(listen: AuthListen) {
    return listen((event, nextOwner) => { void onAuthEvent(event, nextOwner); });
  }

  function concealForUnverifiedIdentity() {
    // Keep the title and its uncertain-save flag off the visible snapshot.
    // Aborting the request does not reverse a server write. This path does
    // not say the save failed and does not treat the author as signed out.
    if (owner !== null && (draftTitle !== "" || model.createPending || model.createUncertain)) {
      concealedDraft = {
        ownerKey: owner,
        title: draftTitle,
        createWasPending: model.createPending,
        createUncertain: model.createUncertain,
      };
    }
    loadAbort?.abort();
    createAbort?.abort();
    draftTitle = "";
    const generation = model.generation + 1;
    owner = null;
    hasLoaded = true;
    model = applyLoad(beginLoad(model, null, generation), generation, null, { kind: "error" });
    emit();
  }

  async function refresh() {
    let nextOwner: string | null;
    try {
      nextOwner = await deps.readOwner();
    } catch {
      concealForUnverifiedIdentity();
      return;
    }
    // A same-author refresh must not discard an in-flight create acknowledgement.
    // The POST is left running. Success still reloads this author afterwards.
    if (model.createPending && nextOwner === owner) return;
    await startLoad(nextOwner);
  }

  async function retryUncertainCreate() {
    if (!model.createUncertain || draftTitle.trim() === "") return;
    await submitCreate(true);
  }

  async function submitCreate(acknowledgeRisk = false) {
    const trimmed = draftTitle.trim();
    if (!trimmed) return;
    let ownerKey: string | null;
    try {
      ownerKey = await deps.readOwner();
    } catch {
      concealForUnverifiedIdentity();
      return;
    }
    if (ownerKey !== owner) {
      await startLoad(ownerKey);
      return;
    }
    if (acknowledgeRisk) {
      if (!model.createUncertain) return;
      model = { ...model, createUncertain: false };
    }
    const opened = requestCreate(model, ownerKey);
    if (!opened.ok && acknowledgeRisk) {
      model = { ...model, createUncertain: true };
      emit();
    }
    if (!opened.ok || !ownerKey) return;
    const generation = opened.state.createGeneration;
    if (generation === null) return;
    createEvidence = {
      ownerKey,
      title: trimmed,
      knownBookIds: model.phase === "empty" || model.phase === "populated"
        ? new Set(model.books.map(item => item.id)) : null,
    };
    model = opened.state;
    emit();
    const controller = new AbortController();
    createAbort?.abort();
    createAbort = controller;
    try {
      const response = await deps.createBook(trimmed, ownerKey, controller.signal);
      if (controller.signal.aborted || model.generation !== generation || owner !== ownerKey) return;
      // Consume asynchronous error bodies before the final identity check.
      const transport = outcomeForCreateStatus(response.status,
        response.status === 503 ? await createFailureCode(response) : null);
      if (controller.signal.aborted || model.generation !== generation || owner !== ownerKey) return;
      let liveOwner: string | null = null;
      let ownerLookupFailed = false;
      try {
        liveOwner = await deps.readOwner();
      } catch {
        ownerLookupFailed = true;
      }
      if (controller.signal.aborted || model.generation !== generation || owner !== ownerKey) return;
      if (ownerLookupFailed) {
        // Neither a successful nor a failed HTTP response proves who is now
        // authenticated. Hide the private draft until identity is verified.
        // The pending POST is retained as uncertain for the original author.
        concealForUnverifiedIdentity();
        return;
      }
      if (!ownerLookupFailed && (liveOwner !== ownerKey || owner !== ownerKey)) {
        if (liveOwner !== ownerKey) await startLoad(liveOwner);
        return;
      }
      if (response.status === 401) {
        model = applyCreate(model, generation, ownerKey, "unauthorized");
        emit();
        return;
      }
      if (response.status === 409) {
        model = applyCreate(model, generation, ownerKey, "session_changed");
        emit();
        return;
      }
      if (transport !== null) {
        model = applyCreate(model, generation, ownerKey, transport === "error" ? "error" : "unknown");
        emit();
        return;
      }
      if (!response.ok) {
        model = applyCreate(model, generation, ownerKey, "error");
        emit();
        return;
      }
      draftTitle = "";
      model = applyCreate(model, generation, ownerKey, "ok");
      emit();
      await startLoad(ownerKey);
    } catch {
      if (controller.signal.aborted || model.generation !== generation || owner !== ownerKey) return;
      // A rejected POST can race a silent account switch. Never publish its
      // uncertain-save status or preserve the draft for an unverified author.
      let liveOwner: string | null;
      try {
        liveOwner = await deps.readOwner();
      } catch {
        if (controller.signal.aborted || model.generation !== generation || owner !== ownerKey) return;
        concealForUnverifiedIdentity();
        return;
      }
      if (controller.signal.aborted || model.generation !== generation || owner !== ownerKey) return;
      if (liveOwner !== ownerKey) {
        await startLoad(liveOwner);
        return;
      }
      model = applyCreate(model, generation, ownerKey, "unknown");
      emit();
    }
  }

  async function signOut() {
    const signOutOwner = owner;
    const signOutGeneration = model.generation;
    const isCurrent = () => owner === signOutOwner && model.generation === signOutGeneration;
    loadAbort?.abort();
    createAbort?.abort();
    model = concealBooksForSignOut(model);
    emit();
    let failed = false;
    try {
      const result = await deps.signOut();
      failed = result.error;
    } catch {
      failed = true;
    }
    if (!isCurrent()) return;
    if (failed) {
      let liveOwner: string | null;
      try {
        liveOwner = await deps.readOwner();
      } catch {
        if (isCurrent()) concealForUnverifiedIdentity();
        return;
      }
      if (!isCurrent()) return;
      if (liveOwner !== signOutOwner) {
        await startLoad(liveOwner);
        return;
      }
      model = failSignOut(model);
      emit();
      return;
    }
    await startLoad(null);
    deps.goToLogin();
  }

  function failConfiguration() {
    const generation = model.generation + 1;
    owner = null;
    hasLoaded = true;
    draftTitle = "";
    model = applyLoad(beginLoad(model, null, generation), generation, null, { kind: "error" });
    emit();
  }

  function dispose() {
    loadAbort?.abort();
    createAbort?.abort();
    hasLoaded = false;
  }

  return {
    snapshot,
    subscribe,
    setDraftTitle,
    onAuthEvent,
    attachAuth,
    refresh,
    retryUncertainCreate,
    submitCreate,
    signOut,
    failConfiguration,
    dispose,
  };
}
~~~~~~

### `apps/web/src/app/api/books/route.ts` @ `34b70aed9ae8fd5a4033c9a1db615e03a3902231`

~~~~~~markdown
import {NextRequest,NextResponse} from "next/server";
import {decideBookPost,EXPECTED_USER_HEADER,forwardTransportFailure} from "@/lib/library/book-create-document";
import {getServerSupabase} from "@/lib/supabase/server";
import {verifiedBookAccess} from "@/lib/library/owner-from-auth";

export const dynamic="force-dynamic";
export const runtime="nodejs";

function privateJson(body: {error: string}, status: number){
 return NextResponse.json(body,{status,headers:{"Cache-Control":"no-store"}});
}

/**
 * BFF forwards only a verified Supabase user access token.
 * Nest independently validates it against Supabase Auth for every request.
 * Book creates forward a title only, and only when the browser's expected user
 * still matches that verified session.
 * A failure after that forward is an unknown acknowledgement, not a definite
 * save failure. Authentication, validation, and session mismatch stay definite.
 */
async function forward(req:NextRequest,method:"GET"|"POST"){
 let attemptedUpstream=false;
 try{
  const supabase=await getServerSupabase();
  const access=await verifiedBookAccess(supabase.auth);
  if(!access)return privateJson({error:"unauthenticated"},401);
  const base=process.env.VELLISTRY_API_BASE_URL;
  if(!base)return privateJson({error:"api_not_configured"},503);
  const target=new URL("/v1/books",base);
  let content:string|undefined;
  if(method==="POST"){
   const decision=decideBookPost({
    sessionUserId:access.ownerKey,
    expectedUserId:req.headers.get(EXPECTED_USER_HEADER),
    rawBody:await req.text(),
   });
   switch(decision.action){
    case "reject":
     return privateJson({error:decision.error},decision.status);
    case "forward":
     content=decision.document;
     break;
    default:{
     const unreachable:never=decision;
     void unreachable;
     return privateJson({error:"service_unavailable"},503);
    }
   }
   attemptedUpstream=true;
  }
  const upstream=await fetch(target,{
   method,headers:{"Authorization":"Bearer "+access.accessToken,"Content-Type":"application/json"},
   body:content,cache:"no-store"
  });
  if(upstream.status===401)return privateJson({error:"unauthenticated"},401);
  let payload="";
  try{
   payload=await upstream.text();
  }catch{
   return new NextResponse(null,{status:upstream.status,headers:{"Cache-Control":"no-store"}});
  }
  return new NextResponse(payload,{status:upstream.status,headers:{"Content-Type":"application/json","Cache-Control":"no-store"}});
 }catch{
  const failure=forwardTransportFailure(attemptedUpstream);
  return privateJson({error:failure.error},failure.status);
 }
}
export async function GET(req:NextRequest){return forward(req,"GET");}
export async function POST(req:NextRequest){return forward(req,"POST");}
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0036/EXISTING-TEST-EXCERPTS.md` @ `c23c9c5fd931276cd11fb009030f299ea351358d`

~~~~~~markdown
# Existing pinned test excerpts
Original file is available at main326f5e4c385644f864348d008c46c1aa54c7b616; selected harness and unknown-write test only.
import assert from "node:assert/strict";
import {test} from "node:test";
import {LIBRARY_COPY, libraryRegion} from "./book-library-state";
import {
  createLibrarySession,
  shouldReloadForAuthEvent,
  type LibrarySessionDeps,
} from "./book-library-session";
import {ownerFromGetUser} from "./owner-from-auth";

const AUTHOR_A = "author-a";
const AUTHOR_B = "author-b";

function book(id: string, title: string) {
  return {
    id,
    title,
    created_at: "2026-10-11T00:00:00.000Z",
    updated_at: "2026-10-11T00:00:00.000Z",
  };
}

function jsonResponse(status: number, body: unknown): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

type Harness = {
  session: ReturnType<typeof createLibrarySession>;
  signedInAs: string | null;
  navigatedTo: string | null;
  fetchCount: number;
  ownerReads: number;
  failOwnerReadOn: number | null;
  authErrorOn: number | null;
  booksForA: ReturnType<typeof book>[];
  signOutImpl: () => Promise<{ error: boolean }>;
  createBook: LibrarySessionDeps["createBook"];
};

function harness(overrides: Partial<LibrarySessionDeps> = {}): Harness {
  const state: Harness = {
    session: undefined as unknown as Harness["session"],
    signedInAs: AUTHOR_A,
    navigatedTo: null,
    fetchCount: 0,
    ownerReads: 0,
    failOwnerReadOn: null,
    authErrorOn: null,
    booksForA: [book("a-1", "Amber notebook")],
    signOutImpl: async () => ({ error: false }),
    createBook: async () => jsonResponse(201, book("created", "Created")),
  };
  const deps: LibrarySessionDeps = {
    fetchBooks: async () => {
      state.fetchCount += 1;
      if (state.signedInAs === AUTHOR_A) return jsonResponse(200, state.booksForA);
      if (state.signedInAs === AUTHOR_B) return jsonResponse(200, [book("b-1", "Blue notebook")]);
      return jsonResponse(401, { error: "unauthenticated" });
    },
    createBook: (title, ownerKey, signal) => state.createBook(title, ownerKey, signal),
    readOwner: async () => {
      state.ownerReads += 1;
      if (state.failOwnerReadOn === state.ownerReads) throw new Error("owner lookup failed");
      const user = state.signedInAs ? { id: state.signedInAs } : null;
      const error = state.authErrorOn === state.ownerReads
        ? { message: "AuthRetryableFetchError" }
        : null;
      return ownerFromGetUser({ data: { user }, error });
    },
    signOut: () => state.signOutImpl(),
    goToLogin: () => { state.navigatedTo = "/login"; },
    ...overrides,
  };
  state.session = createLibrarySession(deps);
  return state;
}

async function signIn(env: Harness, owner: string) {
  env.signedInAs = owner;
  await env.session.onAuthEvent(owner === AUTHOR_A ? "INITIAL_SESSION" : "SIGNED_IN", owner);
}

test("server errors after dispatch preserve unknown save outcomes", async () => {
  for (const status of [500, 502, 504]) {
    const env = harness();
    let creates = 0;
    env.createBook = async () => { creates += 1; return jsonResponse(status, {}); };
    await signIn(env, AUTHOR_A);
    env.session.setDraftTitle("Potentially committed book");
    await env.session.submitCreate();
    assert.equal(env.session.snapshot().model.createUncertain, true);
    assert.equal(libraryRegion(env.session.snapshot().model).status, LIBRARY_COPY.createUnknown);
    await env.session.submitCreate();
    assert.equal(creates, 1);
  }
});
~~~~~~

## Execution reporting
Return an ExecutionBundle with FACT / INTERPRETATION / PROPOSAL sections,
tests actually performed, changes, evidence gaps, and pending owner approval.
