---
id: VEL-CP-0031
title: 'Context for VEL-TASK-0031: Integrate retained recovery bundle and dated verification
  evidence on current main'
type: context-pack
status: prepared
created_at: '2026-10-20'
version: 0.1.0
task_id: VEL-TASK-0031
base_commit: 1b4eaa9cf9d130ace5d482c09815b7b6408080ee
task_blob_sha: f45ce5773bac2565dfa24a57d77d05d1c157ba94
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
- path: docs/agent-workflow/inputs/VEL-TASK-0031/OWNER-SCOPE.md
  role: current-authority-exact-predecessor-source
  git_blob_sha: cbd8937476fc91c9b33331994c6da76628377654
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0031/SOURCE-MAP.json
  role: current-authority-exact-predecessor-source
  git_blob_sha: 456c80758bcebdac7df31b8e2f21a2e4934fe70b
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

# VEL-CP-0031 — Integrate retained recovery bundle and dated verification evidence on current main

## Objective
Selectively integrate exact PR87 remediation source at e08a3f6e4cfab606f7c45224626d682c9658b81e on actual main 0c42799f32cc75963d31a37e5457fab4905ccdc0, preserving oldauthorship/evidence and usingnewimmutable currentauthority context.

## Scope
**In:** docs/agent-workflow/context-packs/VEL-CP-0022.md; docs/agent-workflow/execution-bundles/VEL-EB-0022.md; docs/agent-workflow/inputs/VEL-TASK-0022/ID-SCAN.txt; docs/agent-workflow/inputs/VEL-TASK-0022/OWNER-SCOPE.md; docs/agent-workflow/inputs/VEL-TASK-0022/SOURCE-REFS.json; docs/agent-workflow/tasks/VEL-TASK-0022.yaml; docs/reports/VEL-RECOVERY-PROOF-2026-10-19.md; docs/reports/evidence/VEL-RECOVERY-PROOF/anchored-bundle-clone.txt; docs/reports/evidence/VEL-RECOVERY-PROOF/anchored-bundle-create.txt; docs/reports/evidence/VEL-RECOVERY-PROOF/anchored-bundle-verify.txt; docs/reports/evidence/VEL-RECOVERY-PROOF/anchored-clone-gc.txt; docs/reports/evidence/VEL-RECOVERY-PROOF/anchored-fsck.txt; docs/reports/evidence/VEL-RECOVERY-PROOF/anchored-handoff-after-gc.txt; docs/reports/evidence/VEL-RECOVERY-PROOF/bundle-clone.txt; docs/reports/evidence/VEL-RECOVERY-PROOF/bundle-create.txt; docs/reports/evidence/VEL-RECOVERY-PROOF/bundle-verify.txt; docs/reports/evidence/VEL-RECOVERY-PROOF/ci-39320128393.json; docs/reports/evidence/VEL-RECOVERY-PROOF/ci-39320774241.json; docs/reports/evidence/VEL-RECOVERY-PROOF/ci-39320829746.json; docs/reports/evidence/VEL-RECOVERY-PROOF/ci-39321788645.json; docs/reports/evidence/VEL-RECOVERY-PROOF/clean-frozen-install.txt; docs/reports/evidence/VEL-RECOVERY-PROOF/commands.json; docs/reports/evidence/VEL-RECOVERY-PROOF/complete-build.txt; docs/reports/evidence/VEL-RECOVERY-PROOF/complete-bundle-clone.txt; docs/reports/evidence/VEL-RECOVERY-PROOF/complete-bundle-create.txt; docs/reports/evidence/VEL-RECOVERY-PROOF/complete-bundle-verify.txt; docs/reports/evidence/VEL-RECOVERY-PROOF/complete-candidate-handoff.txt; docs/reports/evidence/VEL-RECOVERY-PROOF/complete-entrypoint-tests.txt; docs/reports/evidence/VEL-RECOVERY-PROOF/complete-final-tree.txt; docs/reports/evidence/VEL-RECOVERY-PROOF/complete-frozen-install.txt; docs/reports/evidence/VEL-RECOVERY-PROOF/complete-handoff-tests.txt; docs/reports/evidence/VEL-RECOVERY-PROOF/complete-handoff.txt; docs/reports/evidence/VEL-RECOVERY-PROOF/complete-library66.txt; docs/reports/evidence/VEL-RECOVERY-PROOF/complete-metadata.txt; docs/reports/evidence/VEL-RECOVERY-PROOF/complete-preflight19.txt; docs/reports/evidence/VEL-RECOVERY-PROOF/complete-readiness.txt; docs/reports/evidence/VEL-RECOVERY-PROOF/complete-restore-main.txt; docs/reports/evidence/VEL-RECOVERY-PROOF/complete-restored-fsck.txt; docs/reports/evidence/VEL-RECOVERY-PROOF/complete-reviewed-preflight.txt; docs/reports/evidence/VEL-RECOVERY-PROOF/complete-traceability.txt; docs/reports/evidence/VEL-RECOVERY-PROOF/complete-tree-equality.txt; docs/reports/evidence/VEL-RECOVERY-PROOF/complete-typecheck.txt; docs/reports/evidence/VEL-RECOVERY-PROOF/context-metrics.json; docs/reports/evidence/VEL-RECOVERY-PROOF/corrupt-bundle-rejected.txt; docs/reports/evidence/VEL-RECOVERY-PROOF/dependency-closure.json; docs/reports/evidence/VEL-RECOVERY-PROOF/main-handoff.txt; docs/reports/evidence/VEL-RECOVERY-PROOF/main-metadata.txt; docs/reports/evidence/VEL-RECOVERY-PROOF/main-readiness.txt; docs/reports/evidence/VEL-RECOVERY-PROOF/main-traceability.txt; docs/reports/evidence/VEL-RECOVERY-PROOF/main-tree-equality.txt; docs/reports/evidence/VEL-RECOVERY-PROOF/missing-file-restored.txt; docs/reports/evidence/VEL-RECOVERY-PROOF/missing-required-file-detected.txt; docs/reports/evidence/VEL-RECOVERY-PROOF/node-version.txt; docs/reports/evidence/VEL-RECOVERY-PROOF/object-10.txt; docs/reports/evidence/VEL-RECOVERY-PROOF/object-11.txt; docs/reports/evidence/VEL-RECOVERY-PROOF/object-5.txt; docs/reports/evidence/VEL-RECOVERY-PROOF/object-6.txt; docs/reports/evidence/VEL-RECOVERY-PROOF/object-7.txt; docs/reports/evidence/VEL-RECOVERY-PROOF/object-8.txt; docs/reports/evidence/VEL-RECOVERY-PROOF/object-9.txt; docs/reports/evidence/VEL-RECOVERY-PROOF/pnpm-version.txt; docs/reports/evidence/VEL-RECOVERY-PROOF/recovery-assertions.txt; docs/reports/evidence/VEL-RECOVERY-PROOF/recovery-pinned.bundle; docs/reports/evidence/VEL-RECOVERY-PROOF/recovery-summary.json; docs/reports/evidence/VEL-RECOVERY-PROOF/restore-main.txt; docs/reports/evidence/VEL-RECOVERY-PROOF/restored-fsck.txt; docs/reports/evidence/VEL-RECOVERY-PROOF/restored-source-evidence.txt; docs/reports/evidence/VEL-RECOVERY-PROOF/workflow-metrics.json; docs/agent-workflow/tasks/VEL-TASK-0031.yaml; docs/agent-workflow/context-packs/VEL-CP-0031.md; docs/agent-workflow/execution-bundles/VEL-EB-0031.md; docs/agent-workflow/inputs/VEL-TASK-0031/*; docs/agent-workflow/PR-COMPLIANCE.yaml; docs/reports/VEL-INTEGRATION-0031*; docs/reports/evidence/VEL-INTEGRATION-0031/*
**Out:** Unlisted/new appfeatures/SQL/CI/standingpolicy edits; oldContextPack mutation; Hosted/auth/credentials/private/paid/admin/production/merge in implementation

## Evidence and authority constraints
The text below is a readable rendering of pinned Git blobs; exact raw bytes remain recoverable from the recorded commit/blob SHAs. Recorded source statuses remain in force: draft research is not accepted requirements. Original unarchived uploads are not independently verified merely by being mentioned.

**Known source gaps:**
- PROVENANCE: Original Task/CP/EB remain historical; current source-map is exactselectiveadoption, not originalauthorship or retroactiveapproval.
- GATES: Real separate trusted Codex review and ready/postmerge CI required; nohosted/coldstartimplementation inference.

## Permissions and acceptance
**Allowed:** Readlivecurrentmain/predecessor andsourcepins; commitTask/source thenvalidatedimmutableCP, Adoptexactlistedsource,runactualsafechecks,writefactualEB/newperPRevidencebinding,publishreadyPR/trustedreview
**Owner approval required:** Outsideone-timeprogramorhosted/private/paid/admin/production/newfeatures; Unreviewedsecurity/SQLcontent change or missingactualdistinctreview/readyCI remainsblocking
**Acceptance criteria:**
- Everyadoptedpath matches pinnedoriginalGitblob/SHA256; no unauthorizedpath oroldCPmutation
- Originalauthorship/proposal/evidence status preserved; currentdelegation separatelyreferenced
- Actualvalidators/focusedsuite and trustedbasecompliance; finalreadyCI anddistinctreview; no fabricatedacceptance

## Deliverables
- CommittedcurrentTask/source,validatedimmutableCP beforeadoption
- Listedpredecessorsource/provenance retained without stale sharedmanifest
- Actual source/evidence/focused checks and EB; realreadyCI/separatereview; verifiedsuccessor disposition

## Pinned source snapshots
Git commit: `1b4eaa9cf9d130ace5d482c09815b7b6408080ee`. Read source statuses independently from task intent.

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

### `docs/agent-workflow/inputs/VEL-TASK-0031/OWNER-SCOPE.md` @ `cbd8937476fc91c9b33331994c6da76628377654`

~~~~~~markdown
# Current-main selective integration amendment VEL-TASK-0031
One-time owner delegation, 19 Oct 2026, remediation-only. Owner updatedmandate is archived by merged Task0025 SHA2568129384277fe67f3490fd29955e78ded028c035d1dbf43b468b69bf75815e35c. Formalrecord docs/agent-workflow/authorizations/VEL-REM-INTEGRATION-20261019.yaml. Currentmain 0c42799f32cc75963d31a37e5457fab4905ccdc0; predecessor PR87 exacthead e08a3f6e4cfab606f7c45224626d682c9658b81e. Materialbase/authority change requires thisnewTask/CP beforeadoption, never rewriting originalTask/CP orforcepushing sourcebranch. Adopt only listed originalsourcefiles byte-exact excluding sharedper-PRmanifest; preserve originalTask/CP/EB and originalsource/authorship in lineage. Integrationcommit is Codex source adoption, not newauthorship of inheritedChatGPT/Cursor source. Oldproposals/permissions/results remain historical source data, not currentauthority. No newapplicationfeatures/SQL/CI changes beyondexactboundedpredecessor; no hosted/Auth/private/paid/admin/production ormergesinsideimplementation. Actualsubsequentserialmerge is separate owner-delegatedoperation requiring distincttrustedCodex finalheadreview/realreadyCI andpostmergeCI beforedependentwork. Keeporiginalbranches/evidence. Do not manufacture source approval, new hostedstate, ChatGPT/humanreview orfreshcoldstartimplementation. Original source refs mustremain retrievable; finalbackup checks dependency closure.
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0031/SOURCE-MAP.json` @ `456c80758bcebdac7df31b8e2f21a2e4934fe70b`

~~~~~~markdown
{
  "pr": 87,
  "source": "e08a3f6e4cfab606f7c45224626d682c9658b81e",
  "base": "0c42799f32cc75963d31a37e5457fab4905ccdc0",
  "paths": [
    {
      "path": "docs/agent-workflow/context-packs/VEL-CP-0022.md",
      "source_commit": "e08a3f6e4cfab606f7c45224626d682c9658b81e",
      "blob": "ab96503039f31c522f8a77c575898ac964bad0db",
      "sha256": "0a6956026ac80aef45a8ddc1472af585278ea6814cb9ba7c6c971eda5f81d192"
    },
    {
      "path": "docs/agent-workflow/execution-bundles/VEL-EB-0022.md",
      "source_commit": "e08a3f6e4cfab606f7c45224626d682c9658b81e",
      "blob": "8716ae62cad25dccd71366734765f69ce4abbe5f",
      "sha256": "d08b1c18303d1f4020a0cf6f101ab18904d550f9e42856ada60a2fd771cbc0de"
    },
    {
      "path": "docs/agent-workflow/inputs/VEL-TASK-0022/ID-SCAN.txt",
      "source_commit": "e08a3f6e4cfab606f7c45224626d682c9658b81e",
      "blob": "26cadbf19e96d768a0da2f844058dc7950e71565",
      "sha256": "573ded14b8188fdb77abe077dae7d7810b24956edfb4ecd2b40fb6c892803561"
    },
    {
      "path": "docs/agent-workflow/inputs/VEL-TASK-0022/OWNER-SCOPE.md",
      "source_commit": "e08a3f6e4cfab606f7c45224626d682c9658b81e",
      "blob": "509a2ed3f49d45c28981ad6813f93767ffadde09",
      "sha256": "109bc607e03612acc9df72a25df77d4a240dfd579160d127bb695322678f3f9b"
    },
    {
      "path": "docs/agent-workflow/inputs/VEL-TASK-0022/SOURCE-REFS.json",
      "source_commit": "e08a3f6e4cfab606f7c45224626d682c9658b81e",
      "blob": "7f15aacb4be059f7d5c009a851851ca5f9f5652a",
      "sha256": "6691330e9e29bf5483a4ed1eb9398b73fe385e9e9ec3d1f3920d9de9155991c8"
    },
    {
      "path": "docs/agent-workflow/tasks/VEL-TASK-0022.yaml",
      "source_commit": "e08a3f6e4cfab606f7c45224626d682c9658b81e",
      "blob": "0829efd472319c2a614b8e8c5a8aa04fafd4da83",
      "sha256": "9e955e0b15dde5226b47ef11c9954f60728264bfc3f2e8146e175789d4282667"
    },
    {
      "path": "docs/reports/VEL-RECOVERY-PROOF-2026-10-19.md",
      "source_commit": "e08a3f6e4cfab606f7c45224626d682c9658b81e",
      "blob": "4c60716cb1794f2b15798c8c89d4ce040f68ff71",
      "sha256": "202a59145496e8dc1d51a6304aea9993836de43dccafc8b6c83f692e77fd5b22"
    },
    {
      "path": "docs/reports/evidence/VEL-RECOVERY-PROOF/anchored-bundle-clone.txt",
      "source_commit": "e08a3f6e4cfab606f7c45224626d682c9658b81e",
      "blob": "a16ab1db14a122aca4a2af87be40faafa7cc41aa",
      "sha256": "f777cafb33f77a6e44371fa4abbad0e73863a02d5c7f02f041bac7516d22b7fe"
    },
    {
      "path": "docs/reports/evidence/VEL-RECOVERY-PROOF/anchored-bundle-create.txt",
      "source_commit": "e08a3f6e4cfab606f7c45224626d682c9658b81e",
      "blob": "e69de29bb2d1d6434b8b29ae775ad8c2e48c5391",
      "sha256": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
    },
    {
      "path": "docs/reports/evidence/VEL-RECOVERY-PROOF/anchored-bundle-verify.txt",
      "source_commit": "e08a3f6e4cfab606f7c45224626d682c9658b81e",
      "blob": "68642dd41a84735af7831d2d305c13613c1146e3",
      "sha256": "51098a859d9003c77e00e1d25c49267416ee1f1bb4f52efa341fe9531cf3e8f5"
    },
    {
      "path": "docs/reports/evidence/VEL-RECOVERY-PROOF/anchored-clone-gc.txt",
      "source_commit": "e08a3f6e4cfab606f7c45224626d682c9658b81e",
      "blob": "e69de29bb2d1d6434b8b29ae775ad8c2e48c5391",
      "sha256": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
    },
    {
      "path": "docs/reports/evidence/VEL-RECOVERY-PROOF/anchored-fsck.txt",
      "source_commit": "e08a3f6e4cfab606f7c45224626d682c9658b81e",
      "blob": "e69de29bb2d1d6434b8b29ae775ad8c2e48c5391",
      "sha256": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
    },
    {
      "path": "docs/reports/evidence/VEL-RECOVERY-PROOF/anchored-handoff-after-gc.txt",
      "source_commit": "e08a3f6e4cfab606f7c45224626d682c9658b81e",
      "blob": "5a2a309fdf9b618316331abf36b1d70536e7d7e3",
      "sha256": "82ad530f871dbc01c12760d6cb85c4f9dc8628ec5389dcd1b2ade6c8ab66d6d2"
    },
    {
      "path": "docs/reports/evidence/VEL-RECOVERY-PROOF/bundle-clone.txt",
      "source_commit": "e08a3f6e4cfab606f7c45224626d682c9658b81e",
      "blob": "b57b3d2497098c0e3b5519346571ecbee3815160",
      "sha256": "0e92f79d8aa9c57f18a4de525daa9294c4352eae6993db94d9d4814d491f6e99"
    },
    {
      "path": "docs/reports/evidence/VEL-RECOVERY-PROOF/bundle-create.txt",
      "source_commit": "e08a3f6e4cfab606f7c45224626d682c9658b81e",
      "blob": "e69de29bb2d1d6434b8b29ae775ad8c2e48c5391",
      "sha256": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
    },
    {
      "path": "docs/reports/evidence/VEL-RECOVERY-PROOF/bundle-verify.txt",
      "source_commit": "e08a3f6e4cfab606f7c45224626d682c9658b81e",
      "blob": "bdd85f69d2a58b0fd044075097b798e945e3cc24",
      "sha256": "84da4aacf1826bbdafa520a5d0fd858df35c8c3890c650a095778563cb0b441f"
    },
    {
      "path": "docs/reports/evidence/VEL-RECOVERY-PROOF/ci-39320128393.json",
      "source_commit": "e08a3f6e4cfab606f7c45224626d682c9658b81e",
      "blob": "29e8037fec133df407132110f50116b3f80bd5c2",
      "sha256": "5e2e2e294ccf34b62d2f39e7e591c862a2675181b6e3857c032442845878971f"
    },
    {
      "path": "docs/reports/evidence/VEL-RECOVERY-PROOF/ci-39320774241.json",
      "source_commit": "e08a3f6e4cfab606f7c45224626d682c9658b81e",
      "blob": "6225e16624515ce716a8345f2988a68a91a31c10",
      "sha256": "5277d33bc58c8769ac586cfc89729cd61f9466f5cc77c548bf0d6f516916f19a"
    },
    {
      "path": "docs/reports/evidence/VEL-RECOVERY-PROOF/ci-39320829746.json",
      "source_commit": "e08a3f6e4cfab606f7c45224626d682c9658b81e",
      "blob": "fb2a9fa6b6443f45b11c4a3519bc291a03cedb1b",
      "sha256": "ee98e89bb4aed10fc375d76c65e887d862fd53b35319f4744ec63a7591418c00"
    },
    {
      "path": "docs/reports/evidence/VEL-RECOVERY-PROOF/ci-39321788645.json",
      "source_commit": "e08a3f6e4cfab606f7c45224626d682c9658b81e",
      "blob": "9094c0be9605be46d1fc8124701e12d78e36eeec",
      "sha256": "05588d80432a33ffa2b7f1c2a962c71cc788a011b19a8e180638d2557410d512"
    },
    {
      "path": "docs/reports/evidence/VEL-RECOVERY-PROOF/clean-frozen-install.txt",
      "source_commit": "e08a3f6e4cfab606f7c45224626d682c9658b81e",
      "blob": "7887dfa1feb399c6b4e2591d8bfe4c44ac7f62bf",
      "sha256": "b929634a25dacf6d32597ebb0c145ac41fc05b9b4b02f4ca66cbfd1ee7cc7c21"
    },
    {
      "path": "docs/reports/evidence/VEL-RECOVERY-PROOF/commands.json",
      "source_commit": "e08a3f6e4cfab606f7c45224626d682c9658b81e",
      "blob": "ec7facc93d1f3b7ae50ed18c7a0d0c7a91e9f791",
      "sha256": "3c42218267d742bc0d78fe7f8809147f81eb45ddb6cfaf517c253f31fcbf58e0"
    },
    {
      "path": "docs/reports/evidence/VEL-RECOVERY-PROOF/complete-build.txt",
      "source_commit": "e08a3f6e4cfab606f7c45224626d682c9658b81e",
      "blob": "57775309568d3802b094822fc04778188cd5da6f",
      "sha256": "9b47cfd68bff6c07cbcfbe5ea8f277e7a167d5d1038abeed0e62e1dedb5ee897"
    },
    {
      "path": "docs/reports/evidence/VEL-RECOVERY-PROOF/complete-bundle-clone.txt",
      "source_commit": "e08a3f6e4cfab606f7c45224626d682c9658b81e",
      "blob": "060879d8e80d9148f509591a5f8379e776487ac3",
      "sha256": "9591077481c69cef9b216a2aa95340f6e1c4d340e163e1251d442e248c609f59"
    },
    {
      "path": "docs/reports/evidence/VEL-RECOVERY-PROOF/complete-bundle-create.txt",
      "source_commit": "e08a3f6e4cfab606f7c45224626d682c9658b81e",
      "blob": "e69de29bb2d1d6434b8b29ae775ad8c2e48c5391",
      "sha256": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
    },
    {
      "path": "docs/reports/evidence/VEL-RECOVERY-PROOF/complete-bundle-verify.txt",
      "source_commit": "e08a3f6e4cfab606f7c45224626d682c9658b81e",
      "blob": "6a1117b11c72ceef178648ff87ea76e3f7fadacd",
      "sha256": "5ff6e3cf47f16df1d62badf1ae18bcf98c191b9d628e20c0765027fe16dbcac1"
    },
    {
      "path": "docs/reports/evidence/VEL-RECOVERY-PROOF/complete-candidate-handoff.txt",
      "source_commit": "e08a3f6e4cfab606f7c45224626d682c9658b81e",
      "blob": "5a2a309fdf9b618316331abf36b1d70536e7d7e3",
      "sha256": "82ad530f871dbc01c12760d6cb85c4f9dc8628ec5389dcd1b2ade6c8ab66d6d2"
    },
    {
      "path": "docs/reports/evidence/VEL-RECOVERY-PROOF/complete-entrypoint-tests.txt",
      "source_commit": "e08a3f6e4cfab606f7c45224626d682c9658b81e",
      "blob": "f782ea1251a202286f5e65c3d7685fa7ecd749f6",
      "sha256": "4464b4f4587c6ca33fa3424cd0ff9f9414939250238ab28be5807446d484466b"
    },
    {
      "path": "docs/reports/evidence/VEL-RECOVERY-PROOF/complete-final-tree.txt",
      "source_commit": "e08a3f6e4cfab606f7c45224626d682c9658b81e",
      "blob": "e69de29bb2d1d6434b8b29ae775ad8c2e48c5391",
      "sha256": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
    },
    {
      "path": "docs/reports/evidence/VEL-RECOVERY-PROOF/complete-frozen-install.txt",
      "source_commit": "e08a3f6e4cfab606f7c45224626d682c9658b81e",
      "blob": "6bf39254f0e5250bd985b7dd99e6ad79d703efc4",
      "sha256": "de5568ee2469945e78ff8fc364555d8aab8ca95a3a2ad0074426b10ee60e6caa"
    },
    {
      "path": "docs/reports/evidence/VEL-RECOVERY-PROOF/complete-handoff-tests.txt",
      "source_commit": "e08a3f6e4cfab606f7c45224626d682c9658b81e",
      "blob": "38756fa76b3f502f0bab4129b02589949b48b69a",
      "sha256": "034cb0764f09b8769ed5939468cd898483915910dd727ce64215e3bfa74209e6"
    },
    {
      "path": "docs/reports/evidence/VEL-RECOVERY-PROOF/complete-handoff.txt",
      "source_commit": "e08a3f6e4cfab606f7c45224626d682c9658b81e",
      "blob": "430a3e2669e37c686f483ba0fc4a6f5117660fac",
      "sha256": "4161a4477a4e69210eb1b26cc9c0d14f285507299a0b6c7f38efdd80dceb18b2"
    },
    {
      "path": "docs/reports/evidence/VEL-RECOVERY-PROOF/complete-library66.txt",
      "source_commit": "e08a3f6e4cfab606f7c45224626d682c9658b81e",
      "blob": "d289705050f1d6ad84d71b95c6daf061a558e4eb",
      "sha256": "12d9791f5c43ade9e942e1de0a3334321537dc23b481ead7f24bc759891117f2"
    },
    {
      "path": "docs/reports/evidence/VEL-RECOVERY-PROOF/complete-metadata.txt",
      "source_commit": "e08a3f6e4cfab606f7c45224626d682c9658b81e",
      "blob": "940063efd38b84b7a3e5cfb25516a95a215b732c",
      "sha256": "4423d0179232fe933d37cd2f42bc585e490f89273e3f9054d82879f81e4b06a5"
    },
    {
      "path": "docs/reports/evidence/VEL-RECOVERY-PROOF/complete-preflight19.txt",
      "source_commit": "e08a3f6e4cfab606f7c45224626d682c9658b81e",
      "blob": "884b0a8fa984e2c40cabb1030146886d85d76748",
      "sha256": "4b59659c36f8eb3929f72693b1f64ff1a2064d119a95028f47ebbe03478148f7"
    },
    {
      "path": "docs/reports/evidence/VEL-RECOVERY-PROOF/complete-readiness.txt",
      "source_commit": "e08a3f6e4cfab606f7c45224626d682c9658b81e",
      "blob": "e4080f22adfe2b711527a9c6187331802f24d4db",
      "sha256": "77a2897bb7f252e76ff34c9ea2686332d0fd6623eb4a8dfcef4fc4ef4ca5b6e2"
    },
    {
      "path": "docs/reports/evidence/VEL-RECOVERY-PROOF/complete-restore-main.txt",
      "source_commit": "e08a3f6e4cfab606f7c45224626d682c9658b81e",
      "blob": "9879f591d83b2bc11816befb720f6d66c243b52e",
      "sha256": "7c3846ed9b312b91d953060cfd778c5d8c765b337ce3fbca9467b881a478b94f"
    },
    {
      "path": "docs/reports/evidence/VEL-RECOVERY-PROOF/complete-restored-fsck.txt",
      "source_commit": "e08a3f6e4cfab606f7c45224626d682c9658b81e",
      "blob": "62e12cc550291cfca8529b07730030ebd30101d5",
      "sha256": "1007bb96879293788a521995d3050939f90e1a0bb3d81471dd63758c5b91d6c1"
    },
    {
      "path": "docs/reports/evidence/VEL-RECOVERY-PROOF/complete-reviewed-preflight.txt",
      "source_commit": "e08a3f6e4cfab606f7c45224626d682c9658b81e",
      "blob": "64f19de8d0d4f4e938fb7322501cd46dd0c7c508",
      "sha256": "8664fe34777f105ca3e21c1ece555d9ae68f8dc65e72066b8a1651cd994e49b9"
    },
    {
      "path": "docs/reports/evidence/VEL-RECOVERY-PROOF/complete-traceability.txt",
      "source_commit": "e08a3f6e4cfab606f7c45224626d682c9658b81e",
      "blob": "77d029c339ddf26d849bc2fed09fcf59c7c96748",
      "sha256": "cc4bade326da114c0dcbc372071e1040f9d04129a29c864413316c7bf31218d8"
    },
    {
      "path": "docs/reports/evidence/VEL-RECOVERY-PROOF/complete-tree-equality.txt",
      "source_commit": "e08a3f6e4cfab606f7c45224626d682c9658b81e",
      "blob": "e69de29bb2d1d6434b8b29ae775ad8c2e48c5391",
      "sha256": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
    },
    {
      "path": "docs/reports/evidence/VEL-RECOVERY-PROOF/complete-typecheck.txt",
      "source_commit": "e08a3f6e4cfab606f7c45224626d682c9658b81e",
      "blob": "8908912f60b6a0405cc8e9e13276270284f1cc69",
      "sha256": "7e127fdaef6f12b7fcd672b998f30171316dbdf336c01fe69500dd74d9552e3d"
    },
    {
      "path": "docs/reports/evidence/VEL-RECOVERY-PROOF/context-metrics.json",
      "source_commit": "e08a3f6e4cfab606f7c45224626d682c9658b81e",
      "blob": "a2eead611a75ac3f6ace6e126e1ec027ac7124e0",
      "sha256": "f0b071f0df04dd3cd995f11e9d582d2be11dbc7a09641a671756da8fe2c6e7a8"
    },
    {
      "path": "docs/reports/evidence/VEL-RECOVERY-PROOF/corrupt-bundle-rejected.txt",
      "source_commit": "e08a3f6e4cfab606f7c45224626d682c9658b81e",
      "blob": "9c6f2c23285be12b9a08f96e1f9f742d7a218946",
      "sha256": "fac42961e6f35e2ba543fa13152b4eecece991f7d6615825be525ac54cc86f7f"
    },
    {
      "path": "docs/reports/evidence/VEL-RECOVERY-PROOF/dependency-closure.json",
      "source_commit": "e08a3f6e4cfab606f7c45224626d682c9658b81e",
      "blob": "9793895dd1d89fc33e7e543e5651dfcfb15c8aa0",
      "sha256": "24f18ea4418a49344fee44eff2438de693b84707e09f61297178638fcc2468fd"
    },
    {
      "path": "docs/reports/evidence/VEL-RECOVERY-PROOF/main-handoff.txt",
      "source_commit": "e08a3f6e4cfab606f7c45224626d682c9658b81e",
      "blob": "fbab322d8b01927cd0e2acb491c859d59c9ef183",
      "sha256": "1efaba3cda7b179b65b057789bfbe4e107d5501a6f446568cbe799715f9c940c"
    },
    {
      "path": "docs/reports/evidence/VEL-RECOVERY-PROOF/main-metadata.txt",
      "source_commit": "e08a3f6e4cfab606f7c45224626d682c9658b81e",
      "blob": "940063efd38b84b7a3e5cfb25516a95a215b732c",
      "sha256": "4423d0179232fe933d37cd2f42bc585e490f89273e3f9054d82879f81e4b06a5"
    },
    {
      "path": "docs/reports/evidence/VEL-RECOVERY-PROOF/main-readiness.txt",
      "source_commit": "e08a3f6e4cfab606f7c45224626d682c9658b81e",
      "blob": "e4080f22adfe2b711527a9c6187331802f24d4db",
      "sha256": "77a2897bb7f252e76ff34c9ea2686332d0fd6623eb4a8dfcef4fc4ef4ca5b6e2"
    },
    {
      "path": "docs/reports/evidence/VEL-RECOVERY-PROOF/main-traceability.txt",
      "source_commit": "e08a3f6e4cfab606f7c45224626d682c9658b81e",
      "blob": "77d029c339ddf26d849bc2fed09fcf59c7c96748",
      "sha256": "cc4bade326da114c0dcbc372071e1040f9d04129a29c864413316c7bf31218d8"
    },
    {
      "path": "docs/reports/evidence/VEL-RECOVERY-PROOF/main-tree-equality.txt",
      "source_commit": "e08a3f6e4cfab606f7c45224626d682c9658b81e",
      "blob": "e69de29bb2d1d6434b8b29ae775ad8c2e48c5391",
      "sha256": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
    },
    {
      "path": "docs/reports/evidence/VEL-RECOVERY-PROOF/missing-file-restored.txt",
      "source_commit": "e08a3f6e4cfab606f7c45224626d682c9658b81e",
      "blob": "e69de29bb2d1d6434b8b29ae775ad8c2e48c5391",
      "sha256": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
    },
    {
      "path": "docs/reports/evidence/VEL-RECOVERY-PROOF/missing-required-file-detected.txt",
      "source_commit": "e08a3f6e4cfab606f7c45224626d682c9658b81e",
      "blob": "aed6fbf540a9d9da14c7b3670aae02ed5ed59376",
      "sha256": "ae11dc1384da59ea0744343765882848174a53b835ce346249ccff811186e908"
    },
    {
      "path": "docs/reports/evidence/VEL-RECOVERY-PROOF/node-version.txt",
      "source_commit": "e08a3f6e4cfab606f7c45224626d682c9658b81e",
      "blob": "e8416a151f88d9d25de09b3cf31342a68473428c",
      "sha256": "3ebea09fcbed81499165f8bb4d650d8307e4a759136e5411b9a726504b8fc2ac"
    },
    {
      "path": "docs/reports/evidence/VEL-RECOVERY-PROOF/object-10.txt",
      "source_commit": "e08a3f6e4cfab606f7c45224626d682c9658b81e",
      "blob": "e69de29bb2d1d6434b8b29ae775ad8c2e48c5391",
      "sha256": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
    },
    {
      "path": "docs/reports/evidence/VEL-RECOVERY-PROOF/object-11.txt",
      "source_commit": "e08a3f6e4cfab606f7c45224626d682c9658b81e",
      "blob": "e69de29bb2d1d6434b8b29ae775ad8c2e48c5391",
      "sha256": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
    },
    {
      "path": "docs/reports/evidence/VEL-RECOVERY-PROOF/object-5.txt",
      "source_commit": "e08a3f6e4cfab606f7c45224626d682c9658b81e",
      "blob": "e69de29bb2d1d6434b8b29ae775ad8c2e48c5391",
      "sha256": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
    },
    {
      "path": "docs/reports/evidence/VEL-RECOVERY-PROOF/object-6.txt",
      "source_commit": "e08a3f6e4cfab606f7c45224626d682c9658b81e",
      "blob": "e69de29bb2d1d6434b8b29ae775ad8c2e48c5391",
      "sha256": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
    },
    {
      "path": "docs/reports/evidence/VEL-RECOVERY-PROOF/object-7.txt",
      "source_commit": "e08a3f6e4cfab606f7c45224626d682c9658b81e",
      "blob": "e69de29bb2d1d6434b8b29ae775ad8c2e48c5391",
      "sha256": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
    },
    {
      "path": "docs/reports/evidence/VEL-RECOVERY-PROOF/object-8.txt",
      "source_commit": "e08a3f6e4cfab606f7c45224626d682c9658b81e",
      "blob": "e69de29bb2d1d6434b8b29ae775ad8c2e48c5391",
      "sha256": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
    },
    {
      "path": "docs/reports/evidence/VEL-RECOVERY-PROOF/object-9.txt",
      "source_commit": "e08a3f6e4cfab606f7c45224626d682c9658b81e",
      "blob": "e69de29bb2d1d6434b8b29ae775ad8c2e48c5391",
      "sha256": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
    },
    {
      "path": "docs/reports/evidence/VEL-RECOVERY-PROOF/pnpm-version.txt",
      "source_commit": "e08a3f6e4cfab606f7c45224626d682c9658b81e",
      "blob": "06c9b9d30634876847c28210c0b445d549f03807",
      "sha256": "c6475fc58e69de8a119f10bd312b307b0c32357f962487b35990c1d18cd00a0b"
    },
    {
      "path": "docs/reports/evidence/VEL-RECOVERY-PROOF/recovery-assertions.txt",
      "source_commit": "e08a3f6e4cfab606f7c45224626d682c9658b81e",
      "blob": "44703195278e115d4d18fe3be8966b4c0c7c2902",
      "sha256": "c1bfe504edaf2f105f0467287bae4df2e88e43a46563130c62b7580a396fd352"
    },
    {
      "path": "docs/reports/evidence/VEL-RECOVERY-PROOF/recovery-pinned.bundle",
      "source_commit": "e08a3f6e4cfab606f7c45224626d682c9658b81e",
      "blob": "13c28dab7eee3bd3c2b47578ca601a09608ccfd7",
      "sha256": "984a99d0148fe041ee888c0fcc968adf277b7e48be8cd6662a88d3aa07b87465"
    },
    {
      "path": "docs/reports/evidence/VEL-RECOVERY-PROOF/recovery-summary.json",
      "source_commit": "e08a3f6e4cfab606f7c45224626d682c9658b81e",
      "blob": "e13e6fb388e7fb06b2e9e1cc68596e05c2df5227",
      "sha256": "26ac546fd5dc255b81661f182962241d823f31468ae8c4747ef79754f96bbdc2"
    },
    {
      "path": "docs/reports/evidence/VEL-RECOVERY-PROOF/restore-main.txt",
      "source_commit": "e08a3f6e4cfab606f7c45224626d682c9658b81e",
      "blob": "9879f591d83b2bc11816befb720f6d66c243b52e",
      "sha256": "7c3846ed9b312b91d953060cfd778c5d8c765b337ce3fbca9467b881a478b94f"
    },
    {
      "path": "docs/reports/evidence/VEL-RECOVERY-PROOF/restored-fsck.txt",
      "source_commit": "e08a3f6e4cfab606f7c45224626d682c9658b81e",
      "blob": "e666d7b942564b54005374a339ce405b8b25cfaf",
      "sha256": "e694ace37c7035c30396bb42b1529a30108d73a4587cca2fb92d116d7e88133a"
    },
    {
      "path": "docs/reports/evidence/VEL-RECOVERY-PROOF/restored-source-evidence.txt",
      "source_commit": "e08a3f6e4cfab606f7c45224626d682c9658b81e",
      "blob": "93d8400530903ec63a2c692add966a8082e10a65",
      "sha256": "b87f6b3f4c1c488074d2ae62ffc6f8f961847e57b24cf061e75ae98d5ee7091b"
    },
    {
      "path": "docs/reports/evidence/VEL-RECOVERY-PROOF/workflow-metrics.json",
      "source_commit": "e08a3f6e4cfab606f7c45224626d682c9658b81e",
      "blob": "1e8b107b79f9301f92ab7da5f5002e514cb1acdf",
      "sha256": "27b369091172ebea285ceed2d5ad1c471b109fcf883547c5f2451df81957f4b9"
    }
  ]
}
~~~~~~

## Execution reporting
Return an ExecutionBundle with FACT / INTERPRETATION / PROPOSAL sections,
tests actually performed, changes, evidence gaps, and pending owner approval.
