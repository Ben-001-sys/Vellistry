---
id: VEL-CP-0035
title: 'Context for VEL-TASK-0035: Scoped language dispositions and truthful existing
  Library creation copy'
type: context-pack
status: prepared
created_at: '2026-10-20'
version: 0.1.0
task_id: VEL-TASK-0035
base_commit: 90e45c97bb77de93eab43473869051d7d3070416
task_blob_sha: 565decb77f8770efc3106aea2a8ddde01588edec
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
- path: docs/agent-workflow/inputs/VEL-TASK-0035/OWNER-SCOPE.md
  role: current-authority-exact-predecessor-source
  git_blob_sha: 9409c4e7c9a85ac0ff164ebdc5ae180352fe9deb
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0035/SOURCE-MAP.json
  role: current-authority-exact-predecessor-source
  git_blob_sha: 0023b551c449f5da0ff552269693d60858edd47d
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0035/COPY-PLAN.json
  role: current-language-scope-or-existing-copy-source
  git_blob_sha: b0dcbd708b493dc9e6fa99c802b1edd6da13abab
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0035/LANGUAGE-EXCERPTS.md
  role: current-language-scope-or-existing-copy-source
  git_blob_sha: 844984742bc3c5829a29b13ba11c86e4cfc9b17a
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0035/AMENDMENT-SCOPE.md
  role: current-language-scope-or-existing-copy-source
  git_blob_sha: 6fd8524efab3b203d2b02cf0226b4c00ebc0116b
  source_status: unrecorded
- path: apps/web/src/app/books/page.tsx
  role: current-language-scope-or-existing-copy-source
  git_blob_sha: 64352dc27e657b4a078c0ffc3d6f2153942fa572
  source_status: unrecorded
- path: apps/web/src/lib/library/book-library-state.ts
  role: current-language-scope-or-existing-copy-source
  git_blob_sha: a4bbb94660928bc886df66a81fd57bec6bae746f
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

# VEL-CP-0035 — Scoped language dispositions and truthful existing Library creation copy

## Objective
Integrate original PR88 evidence with unchanged provenance, decide all15ordinary language proposals within owner delegation, and implement only truthful existing Library creation copy without new features or security-state changes.

## Scope
**In:** docs/agent-workflow/context-packs/VEL-CP-0023.md; docs/agent-workflow/execution-bundles/VEL-EB-0023.md; docs/agent-workflow/inputs/VEL-TASK-0023/ACCEPTED-DECISION-EXCERPTS.md; docs/agent-workflow/inputs/VEL-TASK-0023/ID-SCAN.txt; docs/agent-workflow/inputs/VEL-TASK-0023/LANGUAGE-PART-01.md; docs/agent-workflow/inputs/VEL-TASK-0023/LANGUAGE-PART-02.md; docs/agent-workflow/inputs/VEL-TASK-0023/LANGUAGE-PART-03.md; docs/agent-workflow/inputs/VEL-TASK-0023/LANGUAGE-PART-04.md; docs/agent-workflow/inputs/VEL-TASK-0023/LANGUAGE-TASK-EXCERPTS.md; docs/agent-workflow/inputs/VEL-TASK-0023/MANDATE-EXCERPTS.md; docs/agent-workflow/inputs/VEL-TASK-0023/OWNER-SCOPE.md; docs/agent-workflow/inputs/VEL-TASK-0023/SOURCE-REFS.json; docs/agent-workflow/tasks/VEL-TASK-0023.yaml; docs/reports/VEL-LANG-DECISIONS-2026-10-19.md; docs/reports/evidence/VEL-LANG-DECISIONS/REPRODUCE.md; docs/reports/evidence/VEL-LANG-DECISIONS/commands.json; docs/reports/evidence/VEL-LANG-DECISIONS/frozen-install-network.txt; docs/reports/evidence/VEL-LANG-DECISIONS/frozen-install.txt; docs/reports/evidence/VEL-LANG-DECISIONS/handoff.txt; docs/reports/evidence/VEL-LANG-DECISIONS/library66-network.txt; docs/reports/evidence/VEL-LANG-DECISIONS/library66.txt; docs/reports/evidence/VEL-LANG-DECISIONS/matrix-source-assertions.json; docs/reports/evidence/VEL-LANG-DECISIONS/matrix.json; docs/reports/evidence/VEL-LANG-DECISIONS/metadata.txt; docs/reports/evidence/VEL-LANG-DECISIONS/readiness.txt; docs/reports/evidence/VEL-LANG-DECISIONS/reproduce-result.txt; docs/reports/evidence/VEL-LANG-DECISIONS/spec.txt; docs/agent-workflow/tasks/VEL-TASK-0035.yaml; docs/agent-workflow/context-packs/VEL-CP-0035.md; docs/agent-workflow/execution-bundles/VEL-EB-0035.md; docs/agent-workflow/inputs/VEL-TASK-0035/*; docs/agent-workflow/PR-COMPLIANCE.yaml; docs/reports/VEL-INTEGRATION-0035*; docs/reports/evidence/VEL-INTEGRATION-0035/*; LANGUAGE.md; apps/web/src/app/books/page.tsx; apps/web/src/lib/library/book-library-state.ts; docs/reports/VEL-LANGUAGE-DISPOSITIONS-2026-10-20.md; docs/reports/evidence/VEL-LANGUAGE-DISPOSITIONS-2026-10-20/*
**Out:** Original23pack/report/source modification; whole language-contract acceptance; new app behavior, routes, editor/chapters/AI, SQL/CI/dependency changes; Hosted/Auth/private/paid/settings/deploy/release or mergeinsideimplementation; unverifiable legal/provider/source/IME/RTL claims

## Evidence and authority constraints
The text below is a readable rendering of pinned Git blobs; exact raw bytes remain recoverable from the recorded commit/blob SHAs. Recorded source statuses remain in force: draft research is not accepted requirements. Original unarchived uploads are not independently verified merely by being mentioned.

**Known source gaps:**
- PROVENANCE: Original Task/CP/EB remain historical; current source-map is exactselectiveadoption, not originalauthorship or retroactiveapproval.
- GATES: Real separate trusted Codex review and ready/postmerge CI required; nohosted/coldstartimplementation inference.

## Permissions and acceptance
**Allowed:** Readlivecurrentmain/predecessor andsourcepins; commitTask/source thenvalidatedimmutableCP, Adoptexactlistedsource,runactualsafechecks,writefactualEB/newperPRevidencebinding,publishreadyPR/trustedreview, After newCP, add current scoped language matrix/document note and only seven exact existing-page/viewmodel copy literals; run safe actual regression/build checks
**Owner approval required:** Outsideone-timeprogramorhosted/private/paid/admin/production/newfeatures; Unreviewedsecurity/SQLcontent change or missingactualdistinctreview/readyCI remainsblocking
**Acceptance criteria:**
- All original PR88 source byte-exact including four source parts and old matrix; current15row/eightfield source-supported dispositions separately recorded
- App diff equals exactly7literal COPY-PLAN replacements; no state/handlers/identity/unknownwrite/risk-retry changes
- Root language remains proposed with approvalflag/historicalbaseline and original15rows preserved; current scoped decisions clearly bounded
- Actual66Library/22preflight/build/check/frozeninstall, originalmatrix/sourcehash/currentmatrixnegativechecks and governance; independenttrustedreview and actualready/postmainCI

## Deliverables
- CommittedcurrentTask/source,validatedimmutableCP beforeadoption
- Listedpredecessorsource/provenance retained without stale sharedmanifest
- Actual source/evidence/focused checks and EB; realreadyCI/separatereview; verifiedsuccessor disposition

## Pinned source snapshots
Git commit: `90e45c97bb77de93eab43473869051d7d3070416`. Read source statuses independently from task intent.

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

### `docs/agent-workflow/inputs/VEL-TASK-0035/OWNER-SCOPE.md` @ `9409c4e7c9a85ac0ff164ebdc5ae180352fe9deb`

~~~~~~markdown
# Current-main selective integration amendment VEL-TASK-0035
One-time owner delegation, 19 Oct 2026, remediation-only. Owner updatedmandate is archived by merged Task0025 SHA2568129384277fe67f3490fd29955e78ded028c035d1dbf43b468b69bf75815e35c. Formalrecord docs/agent-workflow/authorizations/VEL-REM-INTEGRATION-20261019.yaml. Currentmain 326f5e4c385644f864348d008c46c1aa54c7b616; predecessor PR88 exacthead 49edaa330184e4c8d54cc485dcdecbffe1057d65. Materialbase/authority change requires thisnewTask/CP beforeadoption, never rewriting originalTask/CP orforcepushing sourcebranch. Adopt only listed originalsourcefiles byte-exact excluding sharedper-PRmanifest; preserve originalTask/CP/EB and originalsource/authorship in lineage. Integrationcommit is Codex source adoption, not newauthorship of inheritedChatGPT/Cursor source. Oldproposals/permissions/results remain historical source data, not currentauthority. No newapplicationfeatures/SQL/CI changes beyondexactboundedpredecessor; no hosted/Auth/private/paid/admin/production ormergesinsideimplementation. Actualsubsequentserialmerge is separate owner-delegatedoperation requiring distincttrustedCodex finalheadreview/realreadyCI andpostmergeCI beforedependentwork. Keeporiginalbranches/evidence. Do not manufacture source approval, new hostedstate, ChatGPT/humanreview orfreshcoldstartimplementation. Original source refs mustremain retrievable; finalbackup checks dependency closure.

Scope amendment: preserve all original PR88 files exactly; additionally perform only the current language documentation and seven copy literals authorized in AMENDMENT-SCOPE/COPY-PLAN. Old source proposal permissions are historical, not current dispatch.
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0035/SOURCE-MAP.json` @ `0023b551c449f5da0ff552269693d60858edd47d`

~~~~~~markdown
{
  "pr": 88,
  "source": "49edaa330184e4c8d54cc485dcdecbffe1057d65",
  "base": "326f5e4c385644f864348d008c46c1aa54c7b616",
  "paths": [
    {
      "path": "docs/agent-workflow/context-packs/VEL-CP-0023.md",
      "source_commit": "49edaa330184e4c8d54cc485dcdecbffe1057d65",
      "blob": "af6119b89f8f207d0f2820c447457d2e4dc96c7c",
      "sha256": "faef9c1d85704cb7e99b25e7dccecd62a87860a34a1792ec000439a17ea98d38"
    },
    {
      "path": "docs/agent-workflow/execution-bundles/VEL-EB-0023.md",
      "source_commit": "49edaa330184e4c8d54cc485dcdecbffe1057d65",
      "blob": "40966533f9d3f2ff831d7f9342b9ebf36189f986",
      "sha256": "dc7c6d371b02e2d6e1664c15209b6e3676159455791e75b787ec167c461a6891"
    },
    {
      "path": "docs/agent-workflow/inputs/VEL-TASK-0023/ACCEPTED-DECISION-EXCERPTS.md",
      "source_commit": "49edaa330184e4c8d54cc485dcdecbffe1057d65",
      "blob": "c1240fa41f0c02787d210b5fc22ba0c1832e698c",
      "sha256": "ffac194816a155a645bcc68013c08514fa1255419e3ac436a96bdf4c35c052f4"
    },
    {
      "path": "docs/agent-workflow/inputs/VEL-TASK-0023/ID-SCAN.txt",
      "source_commit": "49edaa330184e4c8d54cc485dcdecbffe1057d65",
      "blob": "1a29eb0e855d6177e414c86198e13c49df46d09c",
      "sha256": "f23d4c8a08776a090b908b9be4465b7bac0038d49ea56863ef2e8506e7579ce2"
    },
    {
      "path": "docs/agent-workflow/inputs/VEL-TASK-0023/LANGUAGE-PART-01.md",
      "source_commit": "49edaa330184e4c8d54cc485dcdecbffe1057d65",
      "blob": "ce6855a343a38d92c15f0582804c3d46ae81b723",
      "sha256": "c3a8260b902238d82b46e5a91b8d16385e6d73fffc9e18f6f08ef2210b137539"
    },
    {
      "path": "docs/agent-workflow/inputs/VEL-TASK-0023/LANGUAGE-PART-02.md",
      "source_commit": "49edaa330184e4c8d54cc485dcdecbffe1057d65",
      "blob": "444d9083d4a1b5539c9b730908284abe26d92a5e",
      "sha256": "06218beefcce8aa889be5cb235e7f5f606661dd5732174d3f9fadb45a0afc8d7"
    },
    {
      "path": "docs/agent-workflow/inputs/VEL-TASK-0023/LANGUAGE-PART-03.md",
      "source_commit": "49edaa330184e4c8d54cc485dcdecbffe1057d65",
      "blob": "561d6180568d7d8f1c0467001fe75d120d550840",
      "sha256": "8cc9546d9c53c7fd155dc8d36dabfef3decf73e3e170c3c8cb945f4aebb0e1d9"
    },
    {
      "path": "docs/agent-workflow/inputs/VEL-TASK-0023/LANGUAGE-PART-04.md",
      "source_commit": "49edaa330184e4c8d54cc485dcdecbffe1057d65",
      "blob": "0fb646876e5173eef782cacf70d7f7901de4ff3d",
      "sha256": "d5f678119f414486c3f182dbfbb1040c585c4801d86a1d91c6180efb9ca95cdf"
    },
    {
      "path": "docs/agent-workflow/inputs/VEL-TASK-0023/LANGUAGE-TASK-EXCERPTS.md",
      "source_commit": "49edaa330184e4c8d54cc485dcdecbffe1057d65",
      "blob": "279df86189dc24522b2b7d0ec3cd73a83127876b",
      "sha256": "e9e39f8c531e4b3ff2b6e8e104a830431ef1397d2327fdef234c089a8817bb93"
    },
    {
      "path": "docs/agent-workflow/inputs/VEL-TASK-0023/MANDATE-EXCERPTS.md",
      "source_commit": "49edaa330184e4c8d54cc485dcdecbffe1057d65",
      "blob": "b7159033a4c671cf43d141d1c9a4d5e805998d54",
      "sha256": "fd974e2ff23e7b771509dcd5683d1a6b4e2284b7a91cb709d96c2f998fea25eb"
    },
    {
      "path": "docs/agent-workflow/inputs/VEL-TASK-0023/OWNER-SCOPE.md",
      "source_commit": "49edaa330184e4c8d54cc485dcdecbffe1057d65",
      "blob": "775b054a221d44dc31198f24e44ccf4afbafb566",
      "sha256": "f79e3dfde739d3a3de73b163ce9fdb30915d05e38496f7b804cf2afa1d93cf24"
    },
    {
      "path": "docs/agent-workflow/inputs/VEL-TASK-0023/SOURCE-REFS.json",
      "source_commit": "49edaa330184e4c8d54cc485dcdecbffe1057d65",
      "blob": "a17923bceb89981d1204420dae54c515bb360902",
      "sha256": "112452b60b2485b5fc8a7603374c6081638cbbb755e70d40df7ed731ac537934"
    },
    {
      "path": "docs/agent-workflow/tasks/VEL-TASK-0023.yaml",
      "source_commit": "49edaa330184e4c8d54cc485dcdecbffe1057d65",
      "blob": "29a2ce8ec86e4164fef0c2355073728844394f9b",
      "sha256": "b0c91df4071e15a0c015aa7796bead248f5ba14e787a5827814ed44559e9e0af"
    },
    {
      "path": "docs/reports/VEL-LANG-DECISIONS-2026-10-19.md",
      "source_commit": "49edaa330184e4c8d54cc485dcdecbffe1057d65",
      "blob": "85c2470b6d309ec39b094f2b3672f3a678043009",
      "sha256": "b8f721285e6a31a92f2a6f762b2de0110fd859abae3134dd210f5ac0b37b7afe"
    },
    {
      "path": "docs/reports/evidence/VEL-LANG-DECISIONS/REPRODUCE.md",
      "source_commit": "49edaa330184e4c8d54cc485dcdecbffe1057d65",
      "blob": "7b44523b3ab43cff91c484fd842889855281d4b1",
      "sha256": "20ff24614d0a4018cd319e4cf7b703e5c8f905a161ecc5ffef13f42eadd3d562"
    },
    {
      "path": "docs/reports/evidence/VEL-LANG-DECISIONS/commands.json",
      "source_commit": "49edaa330184e4c8d54cc485dcdecbffe1057d65",
      "blob": "7ad16c331a878e858bebb0a2c1453923063132eb",
      "sha256": "3dd9ed86eb74d22e448f75c9bed71b28d7ef81acedcad28a1582ec1004edcda1"
    },
    {
      "path": "docs/reports/evidence/VEL-LANG-DECISIONS/frozen-install-network.txt",
      "source_commit": "49edaa330184e4c8d54cc485dcdecbffe1057d65",
      "blob": "65f05e45498ff161adf1ade1aed542c5f7800319",
      "sha256": "161df81cd835594617ebf97d20ab1a76c953a148143be2865c65c2f29fc90c0f"
    },
    {
      "path": "docs/reports/evidence/VEL-LANG-DECISIONS/frozen-install.txt",
      "source_commit": "49edaa330184e4c8d54cc485dcdecbffe1057d65",
      "blob": "8514016f606e5053cd651aef82d89ed09431de3f",
      "sha256": "40a33fc97d07a31771dcaa56f9a14a6ccbbadf65e76d1e9806ac690fa8b26505"
    },
    {
      "path": "docs/reports/evidence/VEL-LANG-DECISIONS/handoff.txt",
      "source_commit": "49edaa330184e4c8d54cc485dcdecbffe1057d65",
      "blob": "85506f5469105efefda3c4e9bb32bfceba1dbd42",
      "sha256": "90597c3efad9c7b66974ef6c13f2e70ccb9523145cdc934eb2c14681f696e514"
    },
    {
      "path": "docs/reports/evidence/VEL-LANG-DECISIONS/library66-network.txt",
      "source_commit": "49edaa330184e4c8d54cc485dcdecbffe1057d65",
      "blob": "b0a36666430b1b4c390ccc614128302c41bb6287",
      "sha256": "c010fa4c78782c45a7b83fe04ca875706b2450ffe4fc74db09ff8fe6b0bdda90"
    },
    {
      "path": "docs/reports/evidence/VEL-LANG-DECISIONS/library66.txt",
      "source_commit": "49edaa330184e4c8d54cc485dcdecbffe1057d65",
      "blob": "8514016f606e5053cd651aef82d89ed09431de3f",
      "sha256": "40a33fc97d07a31771dcaa56f9a14a6ccbbadf65e76d1e9806ac690fa8b26505"
    },
    {
      "path": "docs/reports/evidence/VEL-LANG-DECISIONS/matrix-source-assertions.json",
      "source_commit": "49edaa330184e4c8d54cc485dcdecbffe1057d65",
      "blob": "8e96679caf976a4d3d7cf06d9937ee4e0c27915a",
      "sha256": "1c5cc10f586bf0a8c35a6a611351561ddf7eba5b163413b8eadc0b59c2ae5dfe"
    },
    {
      "path": "docs/reports/evidence/VEL-LANG-DECISIONS/matrix.json",
      "source_commit": "49edaa330184e4c8d54cc485dcdecbffe1057d65",
      "blob": "6b52b7ee636efc7dc85202e1e8a7c8f46a3307aa",
      "sha256": "292c1bcdaf417cb798cd731e3786e61cb9e8296e488214ee711572d8a51a4697"
    },
    {
      "path": "docs/reports/evidence/VEL-LANG-DECISIONS/metadata.txt",
      "source_commit": "49edaa330184e4c8d54cc485dcdecbffe1057d65",
      "blob": "940063efd38b84b7a3e5cfb25516a95a215b732c",
      "sha256": "4423d0179232fe933d37cd2f42bc585e490f89273e3f9054d82879f81e4b06a5"
    },
    {
      "path": "docs/reports/evidence/VEL-LANG-DECISIONS/readiness.txt",
      "source_commit": "49edaa330184e4c8d54cc485dcdecbffe1057d65",
      "blob": "e4080f22adfe2b711527a9c6187331802f24d4db",
      "sha256": "77a2897bb7f252e76ff34c9ea2686332d0fd6623eb4a8dfcef4fc4ef4ca5b6e2"
    },
    {
      "path": "docs/reports/evidence/VEL-LANG-DECISIONS/reproduce-result.txt",
      "source_commit": "49edaa330184e4c8d54cc485dcdecbffe1057d65",
      "blob": "daf4d053802820549c92fd619b2a105b0e9bd312",
      "sha256": "a830bbfc673ebf9facd4461f062f88cefcb840768f7f1c35d38f25c07736b4ed"
    },
    {
      "path": "docs/reports/evidence/VEL-LANG-DECISIONS/spec.txt",
      "source_commit": "49edaa330184e4c8d54cc485dcdecbffe1057d65",
      "blob": "c9fd75f35077ea1f3a615adc4bc689bf38f07bdd",
      "sha256": "eb47c0e32579bde7c78fd5e85c9c541190c0e4322586ef08cd38a457d638a2bd"
    }
  ],
  "current_edits": [
    {
      "path": "LANGUAGE.md",
      "base": "326f5e4c385644f864348d008c46c1aa54c7b616",
      "blob": "062c0648bebaf2738c3d8e1db2bdfe7c7cf46ada"
    },
    {
      "path": "apps/web/src/app/books/page.tsx",
      "base": "326f5e4c385644f864348d008c46c1aa54c7b616",
      "blob": "64352dc27e657b4a078c0ffc3d6f2153942fa572"
    },
    {
      "path": "apps/web/src/lib/library/book-library-state.ts",
      "base": "326f5e4c385644f864348d008c46c1aa54c7b616",
      "blob": "a4bbb94660928bc886df66a81fd57bec6bae746f"
    }
  ]
}
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0035/COPY-PLAN.json` @ `b0dcbd708b493dc9e6fa99c802b1edd6da13abab`

~~~~~~markdown
{
  "apps/web/src/app/books/page.tsx": [
    [
      ">Create</button>",
      ">Create book</button>"
    ],
    [
      ">Refresh</button>",
      ">Check your books</button>"
    ],
    [
      ">Save again anyway</button>",
      ">Create again anyway</button>"
    ]
  ],
  "apps/web/src/lib/library/book-library-state.ts": [
    [
      "Could not save this book. Your title remains in the field.",
      "Could not create this book. Your title remains in the field."
    ],
    [
      "The save result is unknown. Refresh to check your books before trying again.",
      "The book creation result is unknown. Check your books before trying again."
    ],
    [
      "This save is not confirmed by the refreshed list. Saving again may create a duplicate if the first save is still finishing.",
      "This book creation is not confirmed by the updated list. Creating it again may create a duplicate if the first request is still finishing."
    ],
    [
      "Your session changed. The book was not saved to this account.",
      "Your session changed. The creation result is unverified and may have completed for the original account."
    ]
  ]
}
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0035/LANGUAGE-EXCERPTS.md` @ `844984742bc3c5829a29b13ba11c86e4cfc9b17a`

~~~~~~markdown
# Exact current language excerpts
Source 326f5e4c385644f864348d008c46c1aa54c7b616; full blob in SOURCE-MAP. Sections below preserve current proposal metadata and all pending question rows.

---
id: VEL-LANG-001
title: Vellistry Product Language, Terminology, and UX Content Standard
type: product-language-standard
status: proposed-owner-review
version: 1.0.1-candidate
created_at: 2026-10-17
updated_at: 2026-10-19
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
| `LANG-P15` | **Whether the proposed LANGUAGE.md itself is effective:** `LANGUAGE.md` is present on merged main `fca0d96fd071f1165e3e16658d821a3d36a20293` via PR #80 (rechecked 2026-10-19); metadata remains `proposed-owner-review`. Repository presence is not owner approval of all15 decisions. | Adopt after owner review; keep `status: proposed-owner-review` meanwhile. | Owner approval and scoped documented repo integration. |
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0035/AMENDMENT-SCOPE.md` @ `6fd8524efab3b203d2b02cf0226b4c00ebc0116b`

~~~~~~markdown
# Delegated ordinary-language adoption scope
Owner updated19Octmandate section7 explicitly authorizes supported ordinary terminology and appropriate existing-screen copy, while excluding new MVP features and external factual certifications. Formal one-time authority record remains current. New Task/CP0035 is required because original23/PR88 was report-only and must remain historical unchanged.
After this new pack: adopt every listed PR88 source byte-exact, including original ChatGPT LANGUAGE4parts and dated matrix/checks. Add a separate current15-row/eight-field disposition matrix with ADOPT/PROVISIONAL/DEFER/BLOCKED, evidence/verification/external limits. Do not silently rewrite old matrix or its historical assertions. Resolve ordinary choices as delegated Codex decisions, not fabricated human approval. Working Vellistry/chapter/conditionalemail/sourceEnglish/presence and existing creation copy can be scoped adoptions; guidance mapping/provider facts remain blocked, future UI/capabilities deferred, uncertain story-view/record mapping provisional. No hosted/legal/provider/user-testing claim.
Only app changes are the seven exact literal replacements in COPY-PLAN.json. Preserve all state/control/request logic, author isolation, unknown outcome lock, distinct explicit duplicate-risk retry, GET-only checking, input retention and sign-out handling. Session-change wording must retain uncertainty, not assert a failed write. No new dialog/routes/features, model calls, SQL, dependencies or CI.
LANGUAGE.md stays proposed-owner-review with approval_required true and historicalbaseline unchanged. Add a current scoped-disposition link/note and dated changelog; preserve original15question rows as dated proposal history and original sources. Whole contract adoption, cloud settings, source130/134mapping, privacy/cost/IME/RTL/export guarantees are not certified. All code outside seven literal replacements must remain byte-exact to base. Run existing66Library and22preflight, builds/typechecks/frozeninstall, original8matrixchecks/sourcehashes plus currentmatrix negative assertions and governance. Preserve provenance; independent trusted exact-head review/actualreadyCI/mergedtree/postmain required. No hosted/private/paid/settings/deploy/newMVP or mergeinsideimplementation.
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

## Execution reporting
Return an ExecutionBundle with FACT / INTERPRETATION / PROPOSAL sections,
tests actually performed, changes, evidence gaps, and pending owner approval.
