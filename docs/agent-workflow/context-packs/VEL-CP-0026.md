---
id: VEL-CP-0026
title: 'Context for VEL-TASK-0026: Current-main amendment: integrate PR84 offline
  readiness and retained PG17 proof'
type: context-pack
status: prepared
created_at: '2026-10-20'
version: 0.1.0
task_id: VEL-TASK-0026
base_commit: f140b98c9a30a7e8e2f3385f4d1ff74968e801a3
task_blob_sha: 8885d4a5df6fea66b6e5daff894a2a531869bdc6
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
- path: docs/agent-workflow/inputs/VEL-TASK-0026/OWNER-SCOPE.md
  role: current-authority-exact-predecessor-source
  git_blob_sha: 8457b3cef2a76253be369e3439600669586e26ea
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0026/SOURCE-MAP.json
  role: current-authority-exact-predecessor-source
  git_blob_sha: 37253f99f07a313e74bbc6c9d1a049e59af6e42c
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

# VEL-CP-0026 — Current-main amendment: integrate PR84 offline readiness and retained PG17 proof

## Objective
Selectively integrate exact PR84 remediation source at 8a4e526bdf1f21da68ea4e631e68cbd07d2477bc on actual main 411a9bc0f2d08c8187bc0b1a6eccc5a05d9c2fc4, preserving oldauthorship/evidence and usingnewimmutable currentauthority context.

## Scope
**In:** docs/agent-workflow/context-packs/VEL-CP-0019.md; docs/agent-workflow/execution-bundles/VEL-EB-0019.md; docs/agent-workflow/inputs/VEL-TASK-0019/DEFINITION-DECISION.md; docs/agent-workflow/inputs/VEL-TASK-0019/ISSUE81.md; docs/agent-workflow/inputs/VEL-TASK-0019/OWNER-SCOPE.md; docs/agent-workflow/inputs/VEL-TASK-0019/definition-decision.json; docs/agent-workflow/inputs/VEL-TASK-0019/issue81-comments.json; docs/agent-workflow/inputs/VEL-TASK-0019/issue81.json; docs/agent-workflow/inputs/VEL-TASK-0019/pg17-artifact.json; docs/agent-workflow/inputs/VEL-TASK-0019/pr65.json; docs/agent-workflow/inputs/VEL-TASK-0019/pr68.json; docs/agent-workflow/tasks/VEL-TASK-0019.yaml; docs/reports/VEL-DB-READINESS-001-OFFLINE-REVIEW.md; docs/reports/evidence/VEL-DB-READINESS-001/REPRODUCE.md; docs/reports/evidence/VEL-DB-READINESS-001/check-0.txt; docs/reports/evidence/VEL-DB-READINESS-001/check-1.txt; docs/reports/evidence/VEL-DB-READINESS-001/check-2.txt; docs/reports/evidence/VEL-DB-READINESS-001/check-3.txt; docs/reports/evidence/VEL-DB-READINESS-001/checks.json; docs/reports/evidence/VEL-DB-READINESS-001/cli-commands.json; docs/reports/evidence/VEL-DB-READINESS-001/cli-db-push-help.txt; docs/reports/evidence/VEL-DB-READINESS-001/cli-help.txt; docs/reports/evidence/VEL-DB-READINESS-001/cli-link-help.txt; docs/reports/evidence/VEL-DB-READINESS-001/cli-migration-list-help.txt; docs/reports/evidence/VEL-DB-READINESS-001/cli-version.txt; docs/reports/evidence/VEL-DB-READINESS-001/pg17-artifact.zip; docs/reports/evidence/VEL-DB-READINESS-001/pg17-result.json; docs/reports/evidence/VEL-DB-READINESS-001/retention-checks.txt; docs/reports/evidence/VEL-DB-READINESS-001/retention-final-checks.txt; docs/reports/evidence/VEL-DB-READINESS-001/retention.json; docs/reports/evidence/VEL-DB-READINESS-001/source-map.json; docs/agent-workflow/tasks/VEL-TASK-0026.yaml; docs/agent-workflow/context-packs/VEL-CP-0026.md; docs/agent-workflow/execution-bundles/VEL-EB-0026.md; docs/agent-workflow/inputs/VEL-TASK-0026/*; docs/agent-workflow/PR-COMPLIANCE.yaml; docs/reports/VEL-INTEGRATION-0026*; docs/reports/evidence/VEL-INTEGRATION-0026/*
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
Git commit: `f140b98c9a30a7e8e2f3385f4d1ff74968e801a3`. Read source statuses independently from task intent.

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

### `docs/agent-workflow/inputs/VEL-TASK-0026/OWNER-SCOPE.md` @ `8457b3cef2a76253be369e3439600669586e26ea`

~~~~~~markdown
# Current-main selective integration amendment VEL-TASK-0026
One-time owner delegation, 19 Oct 2026, remediation-only. Owner updatedmandate is archived by merged Task0025 SHA2568129384277fe67f3490fd29955e78ded028c035d1dbf43b468b69bf75815e35c. Formalrecord docs/agent-workflow/authorizations/VEL-REM-INTEGRATION-20261019.yaml. Currentmain 411a9bc0f2d08c8187bc0b1a6eccc5a05d9c2fc4; predecessor PR84 exacthead 8a4e526bdf1f21da68ea4e631e68cbd07d2477bc. Materialbase/authority change requires thisnewTask/CP beforeadoption, never rewriting originalTask/CP orforcepushing sourcebranch. Adopt only listed originalsourcefiles byte-exact excluding sharedper-PRmanifest; preserve originalTask/CP/EB and originalsource/authorship in lineage. Integrationcommit is Codex source adoption, not newauthorship of inheritedChatGPT/Cursor source. Oldproposals/permissions/results remain historical source data, not currentauthority. No newapplicationfeatures/SQL/CI changes beyondexactboundedpredecessor; no hosted/Auth/private/paid/admin/production ormergesinsideimplementation. Actualsubsequentserialmerge is separate owner-delegatedoperation requiring distincttrustedCodex finalheadreview/realreadyCI andpostmergeCI beforedependentwork. Keeporiginalbranches/evidence. Do not manufacture source approval, new hostedstate, ChatGPT/humanreview orfreshcoldstartimplementation. Original source refs mustremain retrievable; finalbackup checks dependency closure.
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0026/SOURCE-MAP.json` @ `37253f99f07a313e74bbc6c9d1a049e59af6e42c`

~~~~~~markdown
{
  "pr": 84,
  "source": "8a4e526bdf1f21da68ea4e631e68cbd07d2477bc",
  "base": "411a9bc0f2d08c8187bc0b1a6eccc5a05d9c2fc4",
  "paths": [
    {
      "path": "docs/agent-workflow/context-packs/VEL-CP-0019.md",
      "source_commit": "8a4e526bdf1f21da68ea4e631e68cbd07d2477bc",
      "blob": "b52a6585ab98d45ad39d10dc03016b89e99525c8",
      "sha256": "9b4b691c476f768aaa6d35c5f3353b097053d2e24ad8d24c7349f4518cbe4b2d"
    },
    {
      "path": "docs/agent-workflow/execution-bundles/VEL-EB-0019.md",
      "source_commit": "8a4e526bdf1f21da68ea4e631e68cbd07d2477bc",
      "blob": "693bb9ea63ddef6beba242e39997cce2d63840b0",
      "sha256": "94dc6a5ab677e277fe867dd9b629e6077a5969e8b034375d3a227fe1474c9573"
    },
    {
      "path": "docs/agent-workflow/inputs/VEL-TASK-0019/DEFINITION-DECISION.md",
      "source_commit": "8a4e526bdf1f21da68ea4e631e68cbd07d2477bc",
      "blob": "958e9b5cd0a29030cf8de7ca7b28def3b48105a9",
      "sha256": "e467bfedad0b0f81dd1c40f04759b0cea55648e60eba3381a2e2c50a81e42796"
    },
    {
      "path": "docs/agent-workflow/inputs/VEL-TASK-0019/ISSUE81.md",
      "source_commit": "8a4e526bdf1f21da68ea4e631e68cbd07d2477bc",
      "blob": "cb32e0ab0f5d2aa0bc6ba5350859841fe83bc7a4",
      "sha256": "415d4f1b502b6405442eb75d3df0ba6775961ae1535fb3daf990494dea4403d0"
    },
    {
      "path": "docs/agent-workflow/inputs/VEL-TASK-0019/OWNER-SCOPE.md",
      "source_commit": "8a4e526bdf1f21da68ea4e631e68cbd07d2477bc",
      "blob": "b9920e2c7f38813611de13503fb4b06a3350d834",
      "sha256": "331d84f45a0ce1ee1e1e19db5a46ce762413cd4487ae9e0344e7f788ec79bff3"
    },
    {
      "path": "docs/agent-workflow/inputs/VEL-TASK-0019/definition-decision.json",
      "source_commit": "8a4e526bdf1f21da68ea4e631e68cbd07d2477bc",
      "blob": "569a11d84a90575059ee47bf4410274cdb4cd4f9",
      "sha256": "2c7de1cac38bed21407b55d0f19f812bfcbdf4e41de79fdbddd1b6c70aac1888"
    },
    {
      "path": "docs/agent-workflow/inputs/VEL-TASK-0019/issue81-comments.json",
      "source_commit": "8a4e526bdf1f21da68ea4e631e68cbd07d2477bc",
      "blob": "e46bbb580e1b36c50cf802c6b3c236f5395779d2",
      "sha256": "c10b6ca8af0479fadfc1f18091fd0ac6babc00c99f8e7a7ad64de95332267824"
    },
    {
      "path": "docs/agent-workflow/inputs/VEL-TASK-0019/issue81.json",
      "source_commit": "8a4e526bdf1f21da68ea4e631e68cbd07d2477bc",
      "blob": "547f7258ff40b89c2af4c02fdceccce0a7046f0f",
      "sha256": "c378c8ae15bd50ee9c0c9006df9beed0661a418ebc705af1ba0e9930c3b9b8f4"
    },
    {
      "path": "docs/agent-workflow/inputs/VEL-TASK-0019/pg17-artifact.json",
      "source_commit": "8a4e526bdf1f21da68ea4e631e68cbd07d2477bc",
      "blob": "d770ba151960ce770ef008143ff41af77f95ff5a",
      "sha256": "02673a11c488fa6451f7b70b0a095c9f1ecb4278ab80c4a566d02d6ed77d2064"
    },
    {
      "path": "docs/agent-workflow/inputs/VEL-TASK-0019/pr65.json",
      "source_commit": "8a4e526bdf1f21da68ea4e631e68cbd07d2477bc",
      "blob": "bc95f80360ecd2dbfa0095b05c67f930d0659be5",
      "sha256": "2a59b6432f8c57982465b0645446e5c74faf59d3bad920f7aa9697b52632b4ca"
    },
    {
      "path": "docs/agent-workflow/inputs/VEL-TASK-0019/pr68.json",
      "source_commit": "8a4e526bdf1f21da68ea4e631e68cbd07d2477bc",
      "blob": "2bce1788fa62667dd05af520a9dc8764516c7387",
      "sha256": "d2cb79994a9265f17bffe9d9faa4cf5a5a373a7e41ce20b915381fe8c86b4b29"
    },
    {
      "path": "docs/agent-workflow/tasks/VEL-TASK-0019.yaml",
      "source_commit": "8a4e526bdf1f21da68ea4e631e68cbd07d2477bc",
      "blob": "bc56e5e1f51fdf02c9c574e5b170d35745445412",
      "sha256": "e21518724d5162e6d6c10d058bb2637d99a2fb0db972d7e9d2ed165d2a0629d3"
    },
    {
      "path": "docs/reports/VEL-DB-READINESS-001-OFFLINE-REVIEW.md",
      "source_commit": "8a4e526bdf1f21da68ea4e631e68cbd07d2477bc",
      "blob": "79a54d075c2b22faf98b68c723aa5939afe2fa6c",
      "sha256": "219e3c003094d8f8ed4e7301d68876ebd50f504729e356eefb04ee1b1748b2c5"
    },
    {
      "path": "docs/reports/evidence/VEL-DB-READINESS-001/REPRODUCE.md",
      "source_commit": "8a4e526bdf1f21da68ea4e631e68cbd07d2477bc",
      "blob": "209a0769f02a0888c34faf2e56b4a98db8467512",
      "sha256": "8c38d6925954a93bd9b670edec87c8129a96dd858c58b0a56be97501c3c78ee0"
    },
    {
      "path": "docs/reports/evidence/VEL-DB-READINESS-001/check-0.txt",
      "source_commit": "8a4e526bdf1f21da68ea4e631e68cbd07d2477bc",
      "blob": "940063efd38b84b7a3e5cfb25516a95a215b732c",
      "sha256": "4423d0179232fe933d37cd2f42bc585e490f89273e3f9054d82879f81e4b06a5"
    },
    {
      "path": "docs/reports/evidence/VEL-DB-READINESS-001/check-1.txt",
      "source_commit": "8a4e526bdf1f21da68ea4e631e68cbd07d2477bc",
      "blob": "e4080f22adfe2b711527a9c6187331802f24d4db",
      "sha256": "77a2897bb7f252e76ff34c9ea2686332d0fd6623eb4a8dfcef4fc4ef4ca5b6e2"
    },
    {
      "path": "docs/reports/evidence/VEL-DB-READINESS-001/check-2.txt",
      "source_commit": "8a4e526bdf1f21da68ea4e631e68cbd07d2477bc",
      "blob": "77d029c339ddf26d849bc2fed09fcf59c7c96748",
      "sha256": "cc4bade326da114c0dcbc372071e1040f9d04129a29c864413316c7bf31218d8"
    },
    {
      "path": "docs/reports/evidence/VEL-DB-READINESS-001/check-3.txt",
      "source_commit": "8a4e526bdf1f21da68ea4e631e68cbd07d2477bc",
      "blob": "85506f5469105efefda3c4e9bb32bfceba1dbd42",
      "sha256": "90597c3efad9c7b66974ef6c13f2e70ccb9523145cdc934eb2c14681f696e514"
    },
    {
      "path": "docs/reports/evidence/VEL-DB-READINESS-001/checks.json",
      "source_commit": "8a4e526bdf1f21da68ea4e631e68cbd07d2477bc",
      "blob": "3036c933b9d9d6217e0a27e01a0d1b97317b7126",
      "sha256": "c38aab1218b98e185c9e872073c245c08672367443aca8855fe768bd3d6946b1"
    },
    {
      "path": "docs/reports/evidence/VEL-DB-READINESS-001/cli-commands.json",
      "source_commit": "8a4e526bdf1f21da68ea4e631e68cbd07d2477bc",
      "blob": "da7cb98dc68b97e93466064aed974a71344dc90b",
      "sha256": "aa53cbda544ca82ee160b0a8cd60cfb7a75a73213f02fe297fdef8c7eafb245a"
    },
    {
      "path": "docs/reports/evidence/VEL-DB-READINESS-001/cli-db-push-help.txt",
      "source_commit": "8a4e526bdf1f21da68ea4e631e68cbd07d2477bc",
      "blob": "b49dd69eb6482c8bb80ccb69f74ca86e3d424ccb",
      "sha256": "00f0a672a8cc99b1cf4ecc0982a15306d1b1b165a553d9a03144edf5054d0107"
    },
    {
      "path": "docs/reports/evidence/VEL-DB-READINESS-001/cli-help.txt",
      "source_commit": "8a4e526bdf1f21da68ea4e631e68cbd07d2477bc",
      "blob": "ae3efafba5c2585adf0fbd6389dd947e0073f07e",
      "sha256": "c14fa31f46d84db92a4bd645f769c2c0c6b403ae95a1ee93c95fbd35ca88a70a"
    },
    {
      "path": "docs/reports/evidence/VEL-DB-READINESS-001/cli-link-help.txt",
      "source_commit": "8a4e526bdf1f21da68ea4e631e68cbd07d2477bc",
      "blob": "2015d94e8b5e1f7b16fd501aede24883853ff341",
      "sha256": "717abc178cb8757abeb0092b6c0c62ee66d5d2326c14d23d3b7ff9567532ff0f"
    },
    {
      "path": "docs/reports/evidence/VEL-DB-READINESS-001/cli-migration-list-help.txt",
      "source_commit": "8a4e526bdf1f21da68ea4e631e68cbd07d2477bc",
      "blob": "c66faac7b4001456f7f2518d16bbd6ea5e9bfb41",
      "sha256": "03b3e93229deb6a2501e6849c8fdb5046dccddae27bef947b8a63c4fa5d6cee6"
    },
    {
      "path": "docs/reports/evidence/VEL-DB-READINESS-001/cli-version.txt",
      "source_commit": "8a4e526bdf1f21da68ea4e631e68cbd07d2477bc",
      "blob": "67b717b47d2f44bb54a6659c4bd9b4970e4eab57",
      "sha256": "cdabe897e15c0981a65161ffd363c9bb7c379cba225a0b32e70437017346edf4"
    },
    {
      "path": "docs/reports/evidence/VEL-DB-READINESS-001/pg17-artifact.zip",
      "source_commit": "8a4e526bdf1f21da68ea4e631e68cbd07d2477bc",
      "blob": "f5d3ec7c74b3073c26b971b4091507c0c71a06f3",
      "sha256": "d426612fbb1197e8e80b8b5a7cd8cfa97e24c2307af3fe786485cf0e416fbf62"
    },
    {
      "path": "docs/reports/evidence/VEL-DB-READINESS-001/pg17-result.json",
      "source_commit": "8a4e526bdf1f21da68ea4e631e68cbd07d2477bc",
      "blob": "62987fb1a7a53d89bc5675b9de4dd8150cf7efd5",
      "sha256": "fb1fefddde801315d661a6248d138473d0bb2ae9b525f2033c9b8c9d1f3f25cf"
    },
    {
      "path": "docs/reports/evidence/VEL-DB-READINESS-001/retention-checks.txt",
      "source_commit": "8a4e526bdf1f21da68ea4e631e68cbd07d2477bc",
      "blob": "4037e2833cd23129cb367efca90ebfafa5425139",
      "sha256": "a3d3d8354162b7a5e9c5abebc1b7b483436bca8c55ef9489cfc2df08525d717d"
    },
    {
      "path": "docs/reports/evidence/VEL-DB-READINESS-001/retention-final-checks.txt",
      "source_commit": "8a4e526bdf1f21da68ea4e631e68cbd07d2477bc",
      "blob": "de95fa89d1aad580f02783ad13bca48bdaabd8c5",
      "sha256": "20700a012d31eacec109401f9cd2a4f84b529481483b2813962920ac34041651"
    },
    {
      "path": "docs/reports/evidence/VEL-DB-READINESS-001/retention.json",
      "source_commit": "8a4e526bdf1f21da68ea4e631e68cbd07d2477bc",
      "blob": "3701f5769297e552fa44061dc2487efd76576b14",
      "sha256": "8ca89050dc6973065b6fb47fdf680ef8ea93ff1a4499314496543d242b0f9e9b"
    },
    {
      "path": "docs/reports/evidence/VEL-DB-READINESS-001/source-map.json",
      "source_commit": "8a4e526bdf1f21da68ea4e631e68cbd07d2477bc",
      "blob": "1b36c17242f91abab45351026e41e1f85e03be8b",
      "sha256": "c4bdd90c874863b15f68cfafe91aeb0a6af15666bfad7961036432d89f97ef3f"
    }
  ]
}
~~~~~~

## Execution reporting
Return an ExecutionBundle with FACT / INTERPRETATION / PROPOSAL sections,
tests actually performed, changes, evidence gaps, and pending owner approval.
