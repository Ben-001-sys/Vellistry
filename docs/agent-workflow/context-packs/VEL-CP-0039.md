---
id: VEL-CP-0039
title: 'Context for VEL-TASK-0039: Reconcile PR68 sources and rerun historical exact-SHA
  CI evidence'
type: context-pack
status: prepared
created_at: '2026-10-21'
version: 0.1.0
task_id: VEL-TASK-0039
base_commit: b3e33bc18b3b2a10b2843c9e6d05f004264e30e2
task_blob_sha: 7161b41c857832ac048e80ee2fb73362fb81a0ef
inputs:
- path: PROJECT-CONSTITUTION.md
  role: authority-historical-source-and-exact-run-disposition
  git_blob_sha: 61f79c4dcb47bd99291c16490e8c00692e2ab23b
  source_status: accepted
- path: SOURCE-OF-TRUTH.md
  role: authority-historical-source-and-exact-run-disposition
  git_blob_sha: d5bec6f59108ac84715d77b65836f4499194c3f1
  source_status: accepted
- path: AGENTS.md
  role: authority-historical-source-and-exact-run-disposition
  git_blob_sha: 2feca4ec9ee0f11f5b6ac089c1d5c826d0e043ce
  source_status: active
- path: docs/agent-workflow/PR-COMPLIANCE.md
  role: authority-historical-source-and-exact-run-disposition
  git_blob_sha: 5f4845623aef3abb15fba7fbe8e78474902cca00
  source_status: unrecorded
- path: docs/agent-workflow/authorizations/VEL-REM-INTEGRATION-20261019.yaml
  role: authority-historical-source-and-exact-run-disposition
  git_blob_sha: 8023094b20f65e44b6ea6a002f4e2808b3e92be6
  source_status: unrecorded
- path: docs/reports/VEL-DB-READINESS-001-OFFLINE-REVIEW.md
  role: authority-historical-source-and-exact-run-disposition
  git_blob_sha: 79a54d075c2b22faf98b68c723aa5939afe2fa6c
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0039/PR68-SOURCE-MAP-REFERENCE.json
  role: authority-historical-source-and-exact-run-disposition
  git_blob_sha: d3cedc310688d775ece179bcb80b050338e4e6e2
  source_status: unrecorded
- path: docs/reports/VEL-INTEGRATION-0037-DISPOSITIONS.md
  role: authority-historical-source-and-exact-run-disposition
  git_blob_sha: cce2f6904ebc9e256afb87806bf48e50b230669c
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0039/OWNER-SCOPE.md
  role: authority-historical-source-and-exact-run-disposition
  git_blob_sha: 47ce7bb34a1617c54fb735c6e21246eb03d6f326
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0039/WORKFLOW-SAFETY-REVIEW.md
  role: authority-historical-source-and-exact-run-disposition
  git_blob_sha: 2493974e2c7148e96349522da61bd122387a7eca
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0039/WORKFLOW-SOURCES.json
  role: authority-historical-source-and-exact-run-disposition
  git_blob_sha: 30ef14ad9162c840b01e4c43612e42b8fcc863ab
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0039/HISTORICAL-RUNS.json
  role: authority-historical-source-and-exact-run-disposition
  git_blob_sha: 9710b532af03c35dd4503025c86c8f4175373a50
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0039/PR68.json
  role: authority-historical-source-and-exact-run-disposition
  git_blob_sha: 2b44fda5897695a775e6b717792eab38d833aa1e
  source_status: unrecorded
source_gaps:
- id: HISTORICAL
  limitation: Original failures were reported as runner-start billing restrictions;
    actual rerun outcomes and checkout identities must be observed, not presumed.
- id: SQL
  limitation: Exact third definition planning-only; no operative SQL adoption or hosted
    access authorization. Hosted and signed-out JWT acceptance remain external gates.
prepared_by: agent_workflow.py
---

# VEL-CP-0039 — Reconcile PR68 sources and rerun historical exact-SHA CI evidence

## Objective
Resolve historical PR68 repository source disposition, preserve exact SQL/provenance and rerun the22 reported failed historical workflows at their original heads without modifying old sources or restoring obsolete CI.

## Scope
**In:** docs/agent-workflow/tasks/VEL-TASK-0039.yaml; docs/agent-workflow/context-packs/VEL-CP-0039.md; docs/agent-workflow/execution-bundles/VEL-EB-0039.md; docs/agent-workflow/inputs/VEL-TASK-0039/*; docs/agent-workflow/PR-COMPLIANCE.yaml; docs/reports/VEL-PR68-RECONCILIATION-0039*; docs/reports/evidence/VEL-PR68-RECONCILIATION-0039/*
**Out:** Any application, SQL, workflow, dependency, branch-protection or standing-policy change; Hosted/auth/real data/private manuscripts/paid APIs/billing/settings/production/newMVP; Old PR68 branch rewrite, historical evidence overwrite, or base SQL approval self-installation

## Evidence and authority constraints
The text below is a readable rendering of pinned Git blobs; exact raw bytes remain recoverable from the recorded commit/blob SHAs. Recorded source statuses remain in force: draft research is not accepted requirements. Original unarchived uploads are not independently verified merely by being mentioned.

**Known source gaps:**
- HISTORICAL: Original failures were reported as runner-start billing restrictions; actual rerun outcomes and checkout identities must be observed, not presumed.
- SQL: Exact third definition planning-only; no operative SQL adoption or hosted access authorization. Hosted and signed-out JWT acceptance remain external gates.

## Permissions and acceptance
**Allowed:** Read pinned historical sources, capture run metadata/workflow snapshots, commitTask and immutableCP first, AfterCP rerun onlylisted original GitHubActions runs using disposable services, read sanitized results and classify actual outcomes, Write source-disposition/security decision packet and factualEB/manifest; publishreviewed successor and separately delegated integration/obsoletePRclosure after verifiedpostmain
**Owner approval required:** Hosted operations, SQLpathadoption, changed migration bytes, privatepilot/deployment or spending/settings remain outside scope; Actual independentreview and applicableCI are mandatory; no retroactive approval or fabricated outcomes
**Acceptance criteria:**
- Only22pinned historical IDs may rerun, sourceSHA/path unchanged, K2serial; preserve attempt1 and record actual attempt2 checkout/steps/conclusions
- No billing/hosted/settings operation or historical/current workflow modification; obsolete source failures do not become current-head failures or fabricated passes
- All38PR68paths dispositioned against currentmain as adopted/equivalent/excluded historical or separately gated SQL; source map/blob/SHA256 preserved
- Exact three migration and fixture hashes retained; explicit separate gates for repo SQL path, target inventory,auth/dryrun,apply,fixtures,JWTpilot and release; no approval inferred
- Evidence negative checks reject wrong source/missing path/unsupported pass; metadata/readiness/spec/handoff and actualready/postCI pass; distinct trusted review before integration

## Deliverables
- Unique committed Task/source snapshots and validated committed immutableCP before reruns or operative report
- Attempt1metadata and actual rerun command/exits/results with exact source identities, failures classified honestly
- Complete38path current disposition preserving original ChatGPT/Codex lineage and exactSQLreferences; precise security-sensitive decision packet
- EB, negative evidence consistency checks, current validators and distinctreview/ready/postCI before delegated successor integration and obsolete PR disposition

## Pinned source snapshots
Git commit: `b3e33bc18b3b2a10b2843c9e6d05f004264e30e2`. Read source statuses independently from task intent.

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

### `docs/reports/VEL-DB-READINESS-001-OFFLINE-REVIEW.md` @ `79a54d075c2b22faf98b68c723aa5939afe2fa6c`

~~~~~~markdown
# VEL-DB-READINESS-001 — offline reconciliation, 2026-10-19

## FACT — checked sources and authority

Main `fca0d96fd071f1165e3e16658d821a3d36a20293`; PR68 `cbb379fa4a4eaa9f576f3abcce2c2258d22cc551`; ChatGPT PR65 `604e1ebfd0baab930ee4dc39aecf7289dc64188a`. PR68 remains Draft/unmerged and is not an integration branch. Task0019/CP0019 precede this report. This report implements Issue81 offline preparation only. No hosted connection, CLI authentication, migration application, Auth fixture or repository settings operation occurred.

Owner definition decision: [PR68 comment6251764080](https://github.com/Ben-001-sys/Vellistry/pull/68#issuecomment-6251764080). Exact third SQL definition only is approved for future planning. It is not a reviewed-base migration-path approval or merge permission. Current compliance requires a separate reviewed-base authorization for any adopted SQL path. That approval record must be owner-reviewed; this task cannot self-install it as authority.

## FACT — provenance and conflict matrix

This table covers all38 paths changed by PR68 relative to its own base. Comparing entire old PR tree to main also shows later main files absent; those absences are ancestry drift, not intentional deletions to adopt. Preserve current ci.yml, all25 archived manual workflows, named PG17 harness, compliance tooling, LANGUAGE and accepted governance.

| Source path | Origin check | Current-main relation | Disposition |
|---|---|---|---|
| `.env.example` | ChatGPT PR65 source unchanged in PR68 | different | SELECTIVE ADOPTION candidate in new bounded implementation task; preserve current CI/package additions |
| `.github/workflows/implementation-foundation.yml` | ChatGPT PR65 original; subsequently modified by Codex PR68 continuation | different | EXCLUDE stale workflow/state; preserve current main |
| `CURRENT-STATE.md` | ChatGPT PR65 original; subsequently modified by Codex PR68 continuation | different | EXCLUDE stale workflow/state; preserve current main |
| `README.md` | ChatGPT PR65 original; subsequently modified by Codex PR68 continuation | different | SELECTIVE DOCUMENTATION reconciliation only; never replace current README |
| `apps/api/.env.example` | ChatGPT PR65 source unchanged in PR68 | absent | SELECTIVE ADOPTION candidate in new bounded implementation task; preserve current CI/package additions |
| `apps/web/.env.example` | ChatGPT PR65 source unchanged in PR68 | absent | SELECTIVE ADOPTION candidate in new bounded implementation task; preserve current CI/package additions |
| `apps/web/src/lib/supabase/browser.ts` | ChatGPT PR65 source unchanged in PR68 | different | SELECTIVE ADOPTION candidate in new bounded implementation task; preserve current CI/package additions |
| `docs/agent-workflow/context-packs/VEL-CP-0005.md` | New path in Codex PR68 continuation; no PR65 path | absent | PRESERVE historical evidence/source reference; not current approval or operative adoption |
| `docs/agent-workflow/execution-bundles/VEL-EB-0005.md` | New path in Codex PR68 continuation; no PR65 path | absent | PRESERVE historical evidence/source reference; not current approval or operative adoption |
| `docs/agent-workflow/inputs/VEL-TASK-0005-ADR-0008.md` | New path in Codex PR68 continuation; no PR65 path | absent | PRESERVE historical evidence/source reference; not current approval or operative adoption |
| `docs/agent-workflow/inputs/VEL-TASK-0005-ISSUE-67.md` | New path in Codex PR68 continuation; no PR65 path | absent | PRESERVE historical evidence/source reference; not current approval or operative adoption |
| `docs/agent-workflow/tasks/VEL-TASK-0005.yaml` | New path in Codex PR68 continuation; no PR65 path | absent | PRESERVE historical evidence/source reference; not current approval or operative adoption |
| `docs/plans/VEL-IMP-001B-HOSTED-CLOUD-ACCEPTANCE-2026-10-14.md` | ChatGPT PR65 original; subsequently modified by Codex PR68 continuation | absent | PRESERVE historical evidence/source reference; not current approval or operative adoption |
| `docs/reports/VEL-IMP-001B-PHASE-A-MIGRATION-REVIEW-2026-10-14.md` | New path in Codex PR68 continuation; no PR65 path | absent | PRESERVE historical evidence/source reference; not current approval or operative adoption |
| `docs/reports/VEL-IMP-001B-PHASE-B-PRECHECK-2026-10-15.md` | New path in Codex PR68 continuation; no PR65 path | absent | PRESERVE historical evidence/source reference; not current approval or operative adoption |
| `docs/reports/evidence/VEL-IMP-001B-PHASE-A-20261014/agent-workflow.txt` | New path in Codex PR68 continuation; no PR65 path | absent | PRESERVE historical evidence/source reference; not current approval or operative adoption |
| `docs/reports/evidence/VEL-IMP-001B-PHASE-A-20261014/build.txt` | New path in Codex PR68 continuation; no PR65 path | absent | PRESERVE historical evidence/source reference; not current approval or operative adoption |
| `docs/reports/evidence/VEL-IMP-001B-PHASE-A-20261014/check.txt` | New path in Codex PR68 continuation; no PR65 path | absent | PRESERVE historical evidence/source reference; not current approval or operative adoption |
| `docs/reports/evidence/VEL-IMP-001B-PHASE-A-20261014/ci-f29d65e-annotations.json` | New path in Codex PR68 continuation; no PR65 path | absent | PRESERVE historical evidence/source reference; not current approval or operative adoption |
| `docs/reports/evidence/VEL-IMP-001B-PHASE-A-20261014/ci-f29d65e-foundation-jobs.json` | New path in Codex PR68 continuation; no PR65 path | absent | PRESERVE historical evidence/source reference; not current approval or operative adoption |
| `docs/reports/evidence/VEL-IMP-001B-PHASE-A-20261014/ci-f29d65e-runs.json` | New path in Codex PR68 continuation; no PR65 path | absent | PRESERVE historical evidence/source reference; not current approval or operative adoption |
| `docs/reports/evidence/VEL-IMP-001B-PHASE-A-20261014/f29d65e-verification.txt` | New path in Codex PR68 continuation; no PR65 path | absent | PRESERVE historical evidence/source reference; not current approval or operative adoption |
| `docs/reports/evidence/VEL-IMP-001B-PHASE-A-20261014/hosted-preflight.txt` | New path in Codex PR68 continuation; no PR65 path | absent | PRESERVE historical evidence/source reference; not current approval or operative adoption |
| `docs/reports/evidence/VEL-IMP-001B-PHASE-A-20261014/install.txt` | New path in Codex PR68 continuation; no PR65 path | absent | PRESERVE historical evidence/source reference; not current approval or operative adoption |
| `docs/reports/evidence/VEL-IMP-001B-PHASE-A-20261014/issue-67.json` | New path in Codex PR68 continuation; no PR65 path | absent | PRESERVE historical evidence/source reference; not current approval or operative adoption |
| `docs/reports/evidence/VEL-IMP-001B-PHASE-A-20261014/library-isolation.txt` | New path in Codex PR68 continuation; no PR65 path | absent | PRESERVE historical evidence/source reference; not current approval or operative adoption |
| `docs/reports/evidence/VEL-IMP-001B-PHASE-A-20261014/missing-environment.txt` | New path in Codex PR68 continuation; no PR65 path | absent | PRESERVE historical evidence/source reference; not current approval or operative adoption |
| `docs/reports/evidence/VEL-IMP-001B-PHASE-A-20261014/phase-b-readonly-precheck-20261015.json` | New path in Codex PR68 continuation; no PR65 path | absent | PRESERVE historical evidence/source reference; not current approval or operative adoption |
| `docs/reports/evidence/VEL-IMP-001B-PHASE-A-20261014/phase-b-source-0f41a27-ci-annotations.json` | New path in Codex PR68 continuation; no PR65 path | absent | PRESERVE historical evidence/source reference; not current approval or operative adoption |
| `docs/reports/evidence/VEL-IMP-001B-PHASE-A-20261014/phase-b-source-0f41a27-verification.txt` | New path in Codex PR68 continuation; no PR65 path | absent | PRESERVE historical evidence/source reference; not current approval or operative adoption |
| `docs/reports/evidence/VEL-IMP-001B-PHASE-A-20261014/provenance.json` | New path in Codex PR68 continuation; no PR65 path | absent | PRESERVE historical evidence/source reference; not current approval or operative adoption |
| `docs/reports/evidence/VEL-IMP-001B-PHASE-A-20261014/source-manifest.json` | New path in Codex PR68 continuation; no PR65 path | absent | PRESERVE historical evidence/source reference; not current approval or operative adoption |
| `docs/reports/evidence/VEL-IMP-001B-PHASE-A-20261014/workflow-tests.txt` | New path in Codex PR68 continuation; no PR65 path | absent | PRESERVE historical evidence/source reference; not current approval or operative adoption |
| `package.json` | ChatGPT PR65 source unchanged in PR68 | different | SELECTIVE ADOPTION candidate in new bounded implementation task; preserve current CI/package additions |
| `scripts/hosted_supabase_preflight.mjs` | ChatGPT PR65 original; subsequently modified by Codex PR68 continuation | absent | SELECTIVE ADOPTION candidate in new bounded implementation task; preserve current CI/package additions |
| `supabase/migrations/20261015171325_restrict_book_privileges.sql` | New path in Codex PR68 continuation; no PR65 path | absent | RETAIN pinned proposal; separate reviewed-base SQL path/merge authorization required |
| `tests/book_privileges_regression.sql` | New path in Codex PR68 continuation; no PR65 path | absent | RETAIN pinned proposal; separate reviewed-base SQL path/merge authorization required |
| `tests/hosted_supabase_preflight.test.mjs` | ChatGPT PR65 original; subsequently modified by Codex PR68 continuation | absent | SELECTIVE ADOPTION candidate in new bounded implementation task; preserve current CI/package additions |

Exact per-file Git blob and SHA256: [source-map.json](evidence/VEL-DB-READINESS-001/source-map.json). Equality to PR65 proves retained bytes, not authenticated model identity. Changed inherited files must retain both ChatGPT origin and Codex correction provenance. Do not cherry-pick the entire old branch.

## FACT — retained actual disposable PG17 evidence

Run [39135149678](https://github.com/Ben-001-sys/Vellistry/actions/runs/39135149678), job117698049994, original artifact12139701246 (expires2026-11-01). Archive download SHA256 `d426612fbb1197e8e80b8b5a7cd8cfa97e24c2307af3fe786485cf0e416fbf62` matches GitHub metadata. Retained structured member SHA256 `fb1fefddde801315d661a6248d138473d0bb2ae9b525f2033c9b8c9d1f3f25cf`. [Exact synthetic result](evidence/VEL-DB-READINESS-001/pg17-result.json) contains52 actual command records, inputSQL where applicable, stdout/stderr/exits, source hashes and cleanup. No raw container environment/startup logs retained. Pattern screening and command/source inspection found no credential/connectionURI/real writing data. This is retention of an earlier execution, not a new database run.

Server: PostgreSQL 17.11 (Debian 17.11-1.pgdg13+2) on x86_64-pc-linux-gnu, compiled by gcc (Debian 14.2.0-19) 14.2.0, 64-bit. Runner LinuxX64 at `098ab06a40a84eaba5880223f02e80fab3bf9e86`; image digest `postgres@sha256:2d2b8998d31037bf721cfdf764d76ba74171b4fab3431b7f72c27c56ddbdf9e3`. No published ports.

| Stage | Actual result |
|---|---|
| BEFORE original migrations with explicitly injected broad grants | EXPECTED_FAILURE exit3; P0001: anon/books/TRUNCATE expected false. This models the privilege defect; it is not an observation of hosted default grants. |
| AFTER unchanged proposed third migration in separate database | PASS exit0;48 ACL assertion marker. |
| Supplemental actual operations | PASS: owner CRUD; TRUNCATE/REFERENCES/TRIGGER42501; cross-author SELECT/UPDATE/DELETE isolation; forged INSERT/UPDATE42501; inherited/PUBLIC and anon denials; RLS flags and privileged-role preservation. |
| Cleanup | Original fixture rollback PASS in both DBs; database removal PASS; owned runner/container files REMOVED; independent cleanup PASS. |

The artifact field migration_approval=NOT_GRANTED describes the experiment at execution time. Later definition-only approval does not rewrite that evidence. Hosted Supabase remains NOT_ACCESSED.

### Exact migration and fixture identities

| Path | Git blob | SHA256 |
|---|---|---|
| `supabase/migrations/20261009000000_initial_author_books.sql` | `192a736d1a5d6ffc6f239c74ed61e7b8d2528b3b` | `315e6a29f8072d4f556729784c07d4bf121666ef385b9cea4dfda36fded5ff74` |
| `supabase/migrations/20261009010000_restrict_accepted_manuscript_dml.sql` | `0670a60f1c2e299e9771b9af1c677d97712174d9` | `6786561dcb325e14adbadec7b3bf879b8ab769841c86bf790dfbd2f19c222a65` |
| `supabase/migrations/20261015171325_restrict_book_privileges.sql` | `230b1540bb5b8962fd2b797d4f8a467d3c035978` | `c7c384b6192d31e4e17c4f6e00978a16a4e15e2feeacfe148aaf1e2cd2853e81` |
| `tests/book_privileges_regression.sql` | `5feac95772f93330b29150dbc135d766e7b0392e` | `bcba9b788151d27ee354f41aa658398f1ed0cbfe86cf0d97f7ae685cb0c54e6b` |

The master mandate abbreviates the second migration blob incorrectly; the full verified blob above (`0670a60f1c2e299e9771b9af1c677d97712174d9`) is authoritative. No SQL bytes edited or integrated.

## INTERPRETATION — application and permission compatibility

Current BooksService uses verified user-token Supabase PostgREST SELECT and INSERT followed by SELECT RETURNING; authenticated SELECT/INSERT rights remain in the proposed grant correction. The correction grants authenticated UPDATE/DELETE as well, but current library service exposes only list/create. Owner_id comes from auth.uid default, not browser authority. Initial RLS owner policies and FORCE RLS remain unchanged. Chapters/revisions remain SELECT-only for authenticated pending protected transactional contracts.

The third file revokes direct books rights from PUBLIC/anon/authenticated, then grants authenticated CRUD. It does not change role memberships, schema USAGE/CREATE, default ACLs for future tables, existing triggers/constraints, privileged-role bypass, function EXECUTE or SECURITY DEFINER functions, Data API exposure settings, JWT/session revocation, or chapter/revision PUBLIC inheritance. Effective inherited grants and existing SECURITY DEFINER/search_path behavior need explicit hosted inspection before any apply. Synthetic service-role preservation is not proof of actual hosted service role semantics.

## PROPOSAL — exact separate owner decisions (all execution NOT_RUN)

Target for every future dev-only action: vellistry-dev, project ref `lflkcrnriitrbclangyr`, eu-west-2. Confirm target from owner-controlled UI before any connection; do not retrieve credentials through this task.

| Decision | Narrow requested action and stop conditions | Current status |
|---|---|---|
| A Repository integration | New current-main Task/CP for selected preflight code and tests; separate owner-reviewed base migration-path record for exact third SQL/fixture; review exact-head CI. Exclude stale CI/state. | OWNER_DECISION_PENDING for SQL adoption/merge; preflight implementation separately authorized by mandate but not implemented here. |
| B Read-only hosted inventory | Only catalog/migration-version/role-membership/default-ACL/schema/RLS/policy/trigger/constraint/function exposure metadata on named target; no user/manuscript rows, keys or mutations. Record least-privileged connection approach first. Stop for wrong target, unavailable auth or unexpected objects. | OWNER_DECISION_PENDING |
| C CLI authentication and dry-run | Owner supplies credentials securely outside logs; verify installed CLI help/version first, target link and migration history; preview exactly approved migration versions without include-all/roles/seed/reset/repair. Stop for any unrelated version or Vault operation. | OWNER_DECISION_PENDING |
| D Exact migration apply | Separate explicit authorization listing three filenames/hashes, reviewed preflight outcome, exact target and backout decision. Apply only missing approved versions; no reset/history repair. | OWNER_DECISION_PENDING |
| E Two synthetic Auth writers | Separate permission to create exactly two disposable fixtures, exercise owner/cross-owner/forged ownership and prohibited operations, then clean both Auth/data fixtures and verify absence. No real users. | OWNER_DECISION_PENDING |
| F JWT/private pilot | Disposable revocation mitigation proof plus explicit security boundary; test old unexpired bearer directly against Data API after sign-out. Third SQL is not mitigation. | BLOCKED |
| G Production | Independent release/security/recovery/legal acceptance and deployment authorization. | NOT_AUTHORIZED |

### Preflight procedure to review, not execute

1. Reverify main, exact approved source hashes and owner action-specific record. Confirm no extra migration files, no drift, original two applied-version history and third missing/present status; do not infer zero tables from old observations.
2. After B approval, inspect effective table privileges including PUBLIC, anon, authenticated, inherited memberships, owner/BYPASSRLS and service roles; inspect schema/default grants, RLS+FORCE flags, owner policies, references/triggers and exposed SECURITY DEFINER functions. Do not collect manuscripts or auth token values.
3. After C approval, use installed --help to discover valid version-specific commands. Local wrapper here is installed as2.120.0 but --version/--help exited1 before output because sandbox denied telemetry-file write; no confirmed CLI runtime version. Public docs describe db push --dry-run and exclude include-roles/include-seed. Issue81 mentions --skip-vault; current public db-push help does not document it. Do not invent or assume that flag. Resolve actual version/command support and prove Vault exclusion before dry-run; otherwise STOP.
4. Proposed command shape after explicit C approval only: `supabase db push --linked --dry-run` in a separately reviewed migration-only worktree. No credential literals, --db-url, --include-all, --include-roles, --include-seed, reset, repair or automatic --yes. Linking/authentication themselves require C authorization. This is a proposal, not a command executed here.
5. After separate D approval, require reviewed preview and owner go decision. Record version history, ACL/RLS/owner CRUD/forged/cross-author/DDL checks after apply, then E fixtures/cleanup if separately authorized. Failure stops acceptance; preserve evidence.
6. Backout is not blindly restoring broad grants. Stop author writes if necessary under separately authorized operational procedure; review exact previous ACL/history and choose a minimal forward correction. No destructive down/reset, fabricated migration-history repair or unapproved grant widening. Preserve schema/data backup evidence before any consequential apply.

Public reference checked2026-10-19: [CLI db push](https://supabase.com/docs/reference/cli/supabase-db-push), [API security](https://supabase.com/docs/guides/api/securing-your-api). Public changelog markdown fetch was unsupported by browsing tool; no claim of complete changelog verification. No Supabase project API was used.

## Verification and limitations

Task0019 validates retention/source consistency and existing governance; no new SQL/app implementation or hosted test. Retention assertions require exact digest/source/exit/cleanup markers and reject changed source hashes or relabeled BEFORE failure. Actual commands/exits appear in EB0019 and evidence files. Remaining original source gaps, owner merge boundary, global gates and language decisions are unchanged. Issue81 offline preparation can become review-ready; checklist07/08/09 cannot become DONE from this report.

## Independent review correction — 2026-10-19

Distinct Codex reviewer found P2: six changed inherited files were ambiguously classified. The matrix now identifies ChatGPT PR65 origin plus Codex PR68 modification for workflow, CURRENT-STATE, README, acceptance plan, preflight helper and tests. Unchanged PR65 paths and genuinely new PR68 paths are separate. Source map records PR65 blob/hash plus exact follow-up commit lists. Git author strings alone are not runtime authentication. Original PRs and historical packs remain untouched.

The exact original7,626-byte artifact ZIP is also retained after inspection confirmed its sole member is the synthetic result JSON: [pg17-artifact.zip](evidence/VEL-DB-READINESS-001/pg17-artifact.zip). Both archive and member hashes are reproducible. Retention13-check source transcript follows; no new database execution.
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0039/PR68-SOURCE-MAP-REFERENCE.json` @ `d3cedc310688d775ece179bcb80b050338e4e6e2`

~~~~~~markdown
{
  "path": "docs/reports/evidence/VEL-DB-READINESS-001/source-map.json",
  "source_commit": "ebb214197da2d1c293993cd08976db1627907e64",
  "blob": "1b36c17242f91abab45351026e41e1f85e03be8b",
  "sha256": "c4bdd90c874863b15f68cfafe91aeb0a6af15666bfad7961036432d89f97ef3f",
  "purpose": "Exact existing38path map remains committed in base; retrieve by pinned Git blob. Full duplicate omitted only to bound ContextPack size."
}
~~~~~~

### `docs/reports/VEL-INTEGRATION-0037-DISPOSITIONS.md` @ `cce2f6904ebc9e256afb87806bf48e50b230669c`

~~~~~~markdown
# PR65 repository source disposition — Task37

## FACT
Original ChatGPT-authored PR65 head604e1ebfd0baab930ee4dc39aecf7289dc64188a/base4b3996ef7cda878e1af3d679454bd1bb873a79c2 changes10paths. The committed input map binds all original blobs/SHA256. Per-path current choices are in evidence/VEL-INTEGRATION-0037/PR65-DISPOSITIONS.json. New Codex Task37/CP37 precede operative changes. Main25f586b5373164dcf7173250300015091dea056e was verified by postmain39455095647 before dispatch.

Original preflight code/tests were ChatGPT-authored, later corrected by Codex PR68 and governed successor PR93. This task preserves that lineage and adopts original browser.ts exactly. Canonical README placeholder instructions replace absent example guidance without admitting env paths or touching actual configuration. Existing root local sample remains byte-unchanged and expressly legacy. Consolidated CI/security/recovery and original SQL are unchanged.

## INTERPRETATION
Original65 should be superseded after this successor is independently reviewed, merged and post-main verified: still-useful code is adopted or corrected, equivalent safe placeholder guidance is current, obsolete CI/state are excluded, and historical hosted proposals remain sources rather than execution permission. The absence of three operative env examples is deliberate, documented source disposition; required runtime variable names and safe local paths remain provided.

## PROPOSAL
Close65 only after actual integration/verification. Do not close Issue67 as hosted acceptance: offline PhaseA and future PhaseB are distinct. Keep68 as a separately dispositioned historical proposal, never blindly merge its old CI/SQL/permission envelope. Final security packet must preserve exact3migration sources and planning-only third definition, plus distinct owner gates for inventory, auth/dryrun, migration application, disposable users, JWT mitigation and release. No hosted state was queried or implied here.

## Verification
Actual command logs, regression-before failure and corrected results are recorded by EB0037 and commands.json. Exact final-head review and ready/postmain CI must complete before integration. This source report does not fabricate those future results or formal approval.
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0039/OWNER-SCOPE.md` @ `47ce7bb34a1617c54fb735c6e21246eb03d6f326`

~~~~~~markdown
The renewed unfinished 19 October owner mandate authorizes exact historical failed-SHA CI reruns, source-by-source PR68 reconciliation and obsolete PR disposition after reviewed integration. This Task never changes original PR68/SQL/CI source. Preserve original run attempts and exact workflow snapshots before rerunning only the22 listed historical runs. Execute K2 sequentially to avoid its historical concurrency cancellation. No billing/settings changes or hosted access. Disposable local PG/Auth experiments are permitted evidence, not third SQL approval or hosted acceptance. Final PR68 disposition may supersede its obsolete branch after all useful source is adopted/equivalent or preserved with explicit external gates; retain original branch/hashes. No base SQL-path authorization is created.
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0039/WORKFLOW-SAFETY-REVIEW.md` @ `2493974e2c7148e96349522da61bd122387a7eca`

~~~~~~markdown
FACT: Read all7unique workflow contents across18source snapshots/22runs. All declare contents:read; no repository-secret expressions, deployment or cloud-linked commands. Governance/build jobs use repository tests, package installation and public dependencies. Combined baseline runs disposable PostgreSQL16 recovery. Foundation at0f41a27 additionally runs the exact proposed SQL fixture only on disposable PostgreSQL17; this is verification, not operative migration adoption. K2 starts local Supabase only, generates disposable credentials without repository secrets, runs synthetic Auth/RLS/logout/lockdown/private-gateway experiments, uploads synthetic-only results and stops the stack. It uses concurrency cancellation: serialize K2 runs. Historical no-frozen-lockfile and stop||true behavior are retained evidence, not adopted into current CI. Confirm actual rerun checkout source/steps and distinguish zero-step platform failure, genuine tests, dependency failure and cleanup limitations. No old automatic workflow is restored to main.
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0039/WORKFLOW-SOURCES.json` @ `30ef14ad9162c840b01e4c43612e42b8fcc863ab`

~~~~~~markdown
[
  {
    "source": "0f41a27a2de879f6d75c86c21b0d47d1d783f0c9",
    "path": ".github/workflows/agent-workflow.yml",
    "snapshot": "0f41a27-agent-workflow.yml.txt",
    "sha256": "1703e410e26d772217bd91799c5feae260e671f4235e169df7bdf9a0f54e837f",
    "blob": "6528ae05ea8a351b66a9ee5a06553ded345d6ce5"
  },
  {
    "source": "0f41a27a2de879f6d75c86c21b0d47d1d783f0c9",
    "path": ".github/workflows/combined-main-baseline.yml",
    "snapshot": "0f41a27-combined-main-baseline.yml.txt",
    "sha256": "d225e5038147eb077aa436ee79b95b65a1ea3638fabcf257a3d3f4ce2849b78e",
    "blob": "c093a8cc91a35c6fc80babf9e73556e9b125eeb9"
  },
  {
    "source": "0f41a27a2de879f6d75c86c21b0d47d1d783f0c9",
    "path": ".github/workflows/implementation-foundation.yml",
    "snapshot": "0f41a27-implementation-foundation.yml.txt",
    "sha256": "a0256423fd02b9d439000bd12067d03b0611f070159c48262265c50d59f2191c",
    "blob": "9d20a9175ead4fc61b8a75d8c0a8a0c90be6eb7e"
  },
  {
    "source": "0f41a27a2de879f6d75c86c21b0d47d1d783f0c9",
    "path": ".github/workflows/implementation-readiness.yml",
    "snapshot": "0f41a27-implementation-readiness.yml.txt",
    "sha256": "2e7258c66a47b12eb0f4b7098d50babfaeedebfabeae5c4020a62ef3ccb726a1",
    "blob": "f02f4cf87779db3190094b8c00699291b7485e3c"
  },
  {
    "source": "0f41a27a2de879f6d75c86c21b0d47d1d783f0c9",
    "path": ".github/workflows/k2-supabase-auth-rls.yml",
    "snapshot": "0f41a27-k2-supabase-auth-rls.yml.txt",
    "sha256": "0dc569b814726ef9b124e851e94493b13285ee170cffb5c3f6c0a8c5697cee2d",
    "blob": "c36559d27ead732ca310b97e5113efef560192ae"
  },
  {
    "source": "0f41a27a2de879f6d75c86c21b0d47d1d783f0c9",
    "path": ".github/workflows/knowledge-metadata.yml",
    "snapshot": "0f41a27-knowledge-metadata.yml.txt",
    "sha256": "d9f9f0603dd2a096aacb321a8c4c387bb225275f8cc03ad47baaf7bd96724f21",
    "blob": "ee78cd54f164461b6290b8c145bbc8b31054bdbb"
  },
  {
    "source": "942f8da7969aeb351786f25bc464ea296ae78969",
    "path": ".github/workflows/agent-workflow.yml",
    "snapshot": "942f8da-agent-workflow.yml.txt",
    "sha256": "1703e410e26d772217bd91799c5feae260e671f4235e169df7bdf9a0f54e837f",
    "blob": "6528ae05ea8a351b66a9ee5a06553ded345d6ce5"
  },
  {
    "source": "942f8da7969aeb351786f25bc464ea296ae78969",
    "path": ".github/workflows/combined-main-baseline.yml",
    "snapshot": "942f8da-combined-main-baseline.yml.txt",
    "sha256": "d225e5038147eb077aa436ee79b95b65a1ea3638fabcf257a3d3f4ce2849b78e",
    "blob": "c093a8cc91a35c6fc80babf9e73556e9b125eeb9"
  },
  {
    "source": "942f8da7969aeb351786f25bc464ea296ae78969",
    "path": ".github/workflows/implementation-foundation.yml",
    "snapshot": "942f8da-implementation-foundation.yml.txt",
    "sha256": "9f7fdadd40ed2e134ca1767180bdf3bacf32017321b6a547adefca9bae91464d",
    "blob": "eae4dffdc5a76e81abc1410fa40b4e5a101899e6"
  },
  {
    "source": "942f8da7969aeb351786f25bc464ea296ae78969",
    "path": ".github/workflows/implementation-readiness.yml",
    "snapshot": "942f8da-implementation-readiness.yml.txt",
    "sha256": "2e7258c66a47b12eb0f4b7098d50babfaeedebfabeae5c4020a62ef3ccb726a1",
    "blob": "f02f4cf87779db3190094b8c00699291b7485e3c"
  },
  {
    "source": "942f8da7969aeb351786f25bc464ea296ae78969",
    "path": ".github/workflows/k2-supabase-auth-rls.yml",
    "snapshot": "942f8da-k2-supabase-auth-rls.yml.txt",
    "sha256": "0dc569b814726ef9b124e851e94493b13285ee170cffb5c3f6c0a8c5697cee2d",
    "blob": "c36559d27ead732ca310b97e5113efef560192ae"
  },
  {
    "source": "942f8da7969aeb351786f25bc464ea296ae78969",
    "path": ".github/workflows/knowledge-metadata.yml",
    "snapshot": "942f8da-knowledge-metadata.yml.txt",
    "sha256": "d9f9f0603dd2a096aacb321a8c4c387bb225275f8cc03ad47baaf7bd96724f21",
    "blob": "ee78cd54f164461b6290b8c145bbc8b31054bdbb"
  },
  {
    "source": "f29d65ea079cdab9fda7417470f8633331fb16a1",
    "path": ".github/workflows/agent-workflow.yml",
    "snapshot": "f29d65e-agent-workflow.yml.txt",
    "sha256": "1703e410e26d772217bd91799c5feae260e671f4235e169df7bdf9a0f54e837f",
    "blob": "6528ae05ea8a351b66a9ee5a06553ded345d6ce5"
  },
  {
    "source": "f29d65ea079cdab9fda7417470f8633331fb16a1",
    "path": ".github/workflows/combined-main-baseline.yml",
    "snapshot": "f29d65e-combined-main-baseline.yml.txt",
    "sha256": "d225e5038147eb077aa436ee79b95b65a1ea3638fabcf257a3d3f4ce2849b78e",
    "blob": "c093a8cc91a35c6fc80babf9e73556e9b125eeb9"
  },
  {
    "source": "f29d65ea079cdab9fda7417470f8633331fb16a1",
    "path": ".github/workflows/implementation-foundation.yml",
    "snapshot": "f29d65e-implementation-foundation.yml.txt",
    "sha256": "9f7fdadd40ed2e134ca1767180bdf3bacf32017321b6a547adefca9bae91464d",
    "blob": "eae4dffdc5a76e81abc1410fa40b4e5a101899e6"
  },
  {
    "source": "f29d65ea079cdab9fda7417470f8633331fb16a1",
    "path": ".github/workflows/implementation-readiness.yml",
    "snapshot": "f29d65e-implementation-readiness.yml.txt",
    "sha256": "2e7258c66a47b12eb0f4b7098d50babfaeedebfabeae5c4020a62ef3ccb726a1",
    "blob": "f02f4cf87779db3190094b8c00699291b7485e3c"
  },
  {
    "source": "f29d65ea079cdab9fda7417470f8633331fb16a1",
    "path": ".github/workflows/k2-supabase-auth-rls.yml",
    "snapshot": "f29d65e-k2-supabase-auth-rls.yml.txt",
    "sha256": "0dc569b814726ef9b124e851e94493b13285ee170cffb5c3f6c0a8c5697cee2d",
    "blob": "c36559d27ead732ca310b97e5113efef560192ae"
  },
  {
    "source": "f29d65ea079cdab9fda7417470f8633331fb16a1",
    "path": ".github/workflows/knowledge-metadata.yml",
    "snapshot": "f29d65e-knowledge-metadata.yml.txt",
    "sha256": "d9f9f0603dd2a096aacb321a8c4c387bb225275f8cc03ad47baaf7bd96724f21",
    "blob": "ee78cd54f164461b6290b8c145bbc8b31054bdbb"
  }
]
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0039/HISTORICAL-RUNS.json` @ `9710b532af03c35dd4503025c86c8f4175373a50`

~~~~~~markdown
[
  {
    "id": 38653713314,
    "head_sha": "f29d65ea079cdab9fda7417470f8633331fb16a1",
    "event": "pull_request",
    "path": ".github/workflows/combined-main-baseline.yml",
    "run_attempt": 1,
    "status": "completed",
    "conclusion": "failure",
    "html_url": "https://github.com/Ben-001-sys/Vellistry/actions/runs/38653713314",
    "created_at": "2026-10-14T23:22:55Z"
  },
  {
    "id": 38653713330,
    "head_sha": "f29d65ea079cdab9fda7417470f8633331fb16a1",
    "event": "pull_request",
    "path": ".github/workflows/agent-workflow.yml",
    "run_attempt": 1,
    "status": "completed",
    "conclusion": "failure",
    "html_url": "https://github.com/Ben-001-sys/Vellistry/actions/runs/38653713330",
    "created_at": "2026-10-14T23:22:55Z"
  },
  {
    "id": 38653713326,
    "head_sha": "f29d65ea079cdab9fda7417470f8633331fb16a1",
    "event": "pull_request",
    "path": ".github/workflows/knowledge-metadata.yml",
    "run_attempt": 1,
    "status": "completed",
    "conclusion": "failure",
    "html_url": "https://github.com/Ben-001-sys/Vellistry/actions/runs/38653713326",
    "created_at": "2026-10-14T23:22:55Z"
  },
  {
    "id": 38653713337,
    "head_sha": "f29d65ea079cdab9fda7417470f8633331fb16a1",
    "event": "pull_request",
    "path": ".github/workflows/implementation-readiness.yml",
    "run_attempt": 1,
    "status": "completed",
    "conclusion": "failure",
    "html_url": "https://github.com/Ben-001-sys/Vellistry/actions/runs/38653713337",
    "created_at": "2026-10-14T23:22:55Z"
  },
  {
    "id": 38653713416,
    "head_sha": "f29d65ea079cdab9fda7417470f8633331fb16a1",
    "event": "pull_request",
    "path": ".github/workflows/k2-supabase-auth-rls.yml",
    "run_attempt": 1,
    "status": "completed",
    "conclusion": "failure",
    "html_url": "https://github.com/Ben-001-sys/Vellistry/actions/runs/38653713416",
    "created_at": "2026-10-14T23:22:55Z"
  },
  {
    "id": 38653713344,
    "head_sha": "f29d65ea079cdab9fda7417470f8633331fb16a1",
    "event": "pull_request",
    "path": ".github/workflows/implementation-foundation.yml",
    "run_attempt": 1,
    "status": "completed",
    "conclusion": "failure",
    "html_url": "https://github.com/Ben-001-sys/Vellistry/actions/runs/38653713344",
    "created_at": "2026-10-14T23:22:55Z"
  },
  {
    "id": 38653615599,
    "head_sha": "f29d65ea079cdab9fda7417470f8633331fb16a1",
    "event": "push",
    "path": ".github/workflows/implementation-foundation.yml",
    "run_attempt": 1,
    "status": "completed",
    "conclusion": "failure",
    "html_url": "https://github.com/Ben-001-sys/Vellistry/actions/runs/38653615599",
    "created_at": "2026-10-14T23:22:00Z"
  },
  {
    "id": 38653615619,
    "head_sha": "f29d65ea079cdab9fda7417470f8633331fb16a1",
    "event": "push",
    "path": ".github/workflows/k2-supabase-auth-rls.yml",
    "run_attempt": 1,
    "status": "completed",
    "conclusion": "failure",
    "html_url": "https://github.com/Ben-001-sys/Vellistry/actions/runs/38653615619",
    "created_at": "2026-10-14T23:22:00Z"
  },
  {
    "id": 38653900723,
    "head_sha": "942f8da7969aeb351786f25bc464ea296ae78969",
    "event": "pull_request",
    "path": ".github/workflows/k2-supabase-auth-rls.yml",
    "run_attempt": 1,
    "status": "completed",
    "conclusion": "failure",
    "html_url": "https://github.com/Ben-001-sys/Vellistry/actions/runs/38653900723",
    "created_at": "2026-10-14T23:24:40Z"
  },
  {
    "id": 38653900569,
    "head_sha": "942f8da7969aeb351786f25bc464ea296ae78969",
    "event": "pull_request",
    "path": ".github/workflows/agent-workflow.yml",
    "run_attempt": 1,
    "status": "completed",
    "conclusion": "failure",
    "html_url": "https://github.com/Ben-001-sys/Vellistry/actions/runs/38653900569",
    "created_at": "2026-10-14T23:24:39Z"
  },
  {
    "id": 38653900613,
    "head_sha": "942f8da7969aeb351786f25bc464ea296ae78969",
    "event": "pull_request",
    "path": ".github/workflows/implementation-readiness.yml",
    "run_attempt": 1,
    "status": "completed",
    "conclusion": "failure",
    "html_url": "https://github.com/Ben-001-sys/Vellistry/actions/runs/38653900613",
    "created_at": "2026-10-14T23:24:39Z"
  },
  {
    "id": 38653900378,
    "head_sha": "942f8da7969aeb351786f25bc464ea296ae78969",
    "event": "pull_request",
    "path": ".github/workflows/combined-main-baseline.yml",
    "run_attempt": 1,
    "status": "completed",
    "conclusion": "failure",
    "html_url": "https://github.com/Ben-001-sys/Vellistry/actions/runs/38653900378",
    "created_at": "2026-10-14T23:24:39Z"
  },
  {
    "id": 38653900593,
    "head_sha": "942f8da7969aeb351786f25bc464ea296ae78969",
    "event": "pull_request",
    "path": ".github/workflows/implementation-foundation.yml",
    "run_attempt": 1,
    "status": "completed",
    "conclusion": "failure",
    "html_url": "https://github.com/Ben-001-sys/Vellistry/actions/runs/38653900593",
    "created_at": "2026-10-14T23:24:39Z"
  },
  {
    "id": 38653900459,
    "head_sha": "942f8da7969aeb351786f25bc464ea296ae78969",
    "event": "pull_request",
    "path": ".github/workflows/knowledge-metadata.yml",
    "run_attempt": 1,
    "status": "completed",
    "conclusion": "failure",
    "html_url": "https://github.com/Ben-001-sys/Vellistry/actions/runs/38653900459",
    "created_at": "2026-10-14T23:24:39Z"
  },
  {
    "id": 38776359354,
    "head_sha": "0f41a27a2de879f6d75c86c21b0d47d1d783f0c9",
    "event": "pull_request",
    "path": ".github/workflows/combined-main-baseline.yml",
    "run_attempt": 1,
    "status": "completed",
    "conclusion": "failure",
    "html_url": "https://github.com/Ben-001-sys/Vellistry/actions/runs/38776359354",
    "created_at": "2026-10-15T17:19:23Z"
  },
  {
    "id": 38776359432,
    "head_sha": "0f41a27a2de879f6d75c86c21b0d47d1d783f0c9",
    "event": "pull_request",
    "path": ".github/workflows/implementation-foundation.yml",
    "run_attempt": 1,
    "status": "completed",
    "conclusion": "failure",
    "html_url": "https://github.com/Ben-001-sys/Vellistry/actions/runs/38776359432",
    "created_at": "2026-10-15T17:19:23Z"
  },
  {
    "id": 38776359402,
    "head_sha": "0f41a27a2de879f6d75c86c21b0d47d1d783f0c9",
    "event": "pull_request",
    "path": ".github/workflows/knowledge-metadata.yml",
    "run_attempt": 1,
    "status": "completed",
    "conclusion": "failure",
    "html_url": "https://github.com/Ben-001-sys/Vellistry/actions/runs/38776359402",
    "created_at": "2026-10-15T17:19:23Z"
  },
  {
    "id": 38776359361,
    "head_sha": "0f41a27a2de879f6d75c86c21b0d47d1d783f0c9",
    "event": "pull_request",
    "path": ".github/workflows/k2-supabase-auth-rls.yml",
    "run_attempt": 1,
    "status": "completed",
    "conclusion": "failure",
    "html_url": "https://github.com/Ben-001-sys/Vellistry/actions/runs/38776359361",
    "created_at": "2026-10-15T17:19:23Z"
  },
  {
    "id": 38776359449,
    "head_sha": "0f41a27a2de879f6d75c86c21b0d47d1d783f0c9",
    "event": "pull_request",
    "path": ".github/workflows/implementation-readiness.yml",
    "run_attempt": 1,
    "status": "completed",
    "conclusion": "failure",
    "html_url": "https://github.com/Ben-001-sys/Vellistry/actions/runs/38776359449",
    "created_at": "2026-10-15T17:19:23Z"
  },
  {
    "id": 38776359536,
    "head_sha": "0f41a27a2de879f6d75c86c21b0d47d1d783f0c9",
    "event": "pull_request",
    "path": ".github/workflows/agent-workflow.yml",
    "run_attempt": 1,
    "status": "completed",
    "conclusion": "failure",
    "html_url": "https://github.com/Ben-001-sys/Vellistry/actions/runs/38776359536",
    "created_at": "2026-10-15T17:19:23Z"
  },
  {
    "id": 38776353650,
    "head_sha": "0f41a27a2de879f6d75c86c21b0d47d1d783f0c9",
    "event": "push",
    "path": ".github/workflows/implementation-foundation.yml",
    "run_attempt": 1,
    "status": "completed",
    "conclusion": "failure",
    "html_url": "https://github.com/Ben-001-sys/Vellistry/actions/runs/38776353650",
    "created_at": "2026-10-15T17:19:20Z"
  },
  {
    "id": 38776354022,
    "head_sha": "0f41a27a2de879f6d75c86c21b0d47d1d783f0c9",
    "event": "push",
    "path": ".github/workflows/k2-supabase-auth-rls.yml",
    "run_attempt": 1,
    "status": "completed",
    "conclusion": "failure",
    "html_url": "https://github.com/Ben-001-sys/Vellistry/actions/runs/38776354022",
    "created_at": "2026-10-15T17:19:20Z"
  }
]
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0039/PR68.json` @ `2b44fda5897695a775e6b717792eab38d833aa1e`

~~~~~~markdown
{
  "baseRefOid": "4b3996ef7cda878e1af3d679454bd1bb873a79c2",
  "headRefOid": "cbb379fa4a4eaa9f576f3abcce2c2258d22cc551",
  "isDraft": true,
  "state": "OPEN",
  "url": "https://github.com/Ben-001-sys/Vellistry/pull/68"
}
~~~~~~

## Execution reporting
Return an ExecutionBundle with FACT / INTERPRETATION / PROPOSAL sections,
tests actually performed, changes, evidence gaps, and pending owner approval.
