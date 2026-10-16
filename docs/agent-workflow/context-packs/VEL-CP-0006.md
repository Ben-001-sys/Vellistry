---
id: VEL-CP-0006
title: 'Context for VEL-TASK-0006: VEL-CI-OPT-001 consolidate CI without weakening
  required verification'
type: context-pack
status: prepared
created_at: '2026-10-16'
version: 0.1.0
task_id: VEL-TASK-0006
base_commit: dcd9843d536ba9146e4b422f4a33554132961de5
task_blob_sha: cc8954a02b219f8793fc1ef65f16928e14429e4f
inputs:
- path: PROJECT-CONSTITUTION.md
  role: accepted-governance
  git_blob_sha: 61f79c4dcb47bd99291c16490e8c00692e2ab23b
  source_status: accepted
- path: SOURCE-OF-TRUTH.md
  role: accepted-source-authority
  git_blob_sha: b5ba9bc2ddcd198054d4cf5fb3b24f6c1b0056c4
  source_status: accepted
- path: AGENTS.md
  role: agent-instructions
  git_blob_sha: 2674ee8b20f281b07062749d9b130668b5a71966
  source_status: active
- path: docs/agent-workflow/README.md
  role: operational-handoff-contract
  git_blob_sha: 4a4615435db303d68e42b164c1967bc51849f868
  source_status: proposed
- path: docs/agent-workflow/IMPLEMENTATION-OPERATING-MODEL.md
  role: proposed-protocol-subject-to-owner-dispatch
  git_blob_sha: 9236c03e20b2c97506f2bb3f33548223d4d1a102
  source_status: proposed-owner-review
- path: docs/decisions/ADR-0006-next-nest-supabase-implementation-foundation.md
  role: accepted-architecture
  git_blob_sha: d53724d08d065a9e354a95d5953068fd497b5cfb
  source_status: accepted
- path: docs/agent-workflow/inputs/VEL-TASK-0006-ISSUE-69.md
  role: explicit-owner-task-snapshot
  git_blob_sha: 964a30a527ebc555ffaf1fbbc13b3832899c1012
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0006-ADR-0008.md
  role: owner-selected-ADR-from-unmerged-PR66
  git_blob_sha: 62da0f1baffbf898ec936b7bea667b69e27d3484
  source_status: accepted
- path: docs/reports/VEL-CI-OPT-001-COVERAGE-2026-10-16.md
  role: pre-edit-coverage-audit
  git_blob_sha: afa2a30205cdefa82e9f13da0df54f1b0d4d4d71
  source_status: proposed-for-owner-review
- path: .github/workflows/agent-workflow.yml
  role: original-provenance-jobs
  git_blob_sha: 6528ae05ea8a351b66a9ee5a06553ded345d6ce5
  source_status: unrecorded
- path: .github/workflows/combined-main-baseline.yml
  role: original-integrated-baseline
  git_blob_sha: c093a8cc91a35c6fc80babf9e73556e9b125eeb9
  source_status: unrecorded
- path: .github/workflows/k2-supabase-auth-rls.yml
  role: original-required-security-probes
  git_blob_sha: c36559d27ead732ca310b97e5113efef560192ae
  source_status: unrecorded
source_gaps:
- id: BILLING
  limitation: Usage API unavailable without extra user scope; blocked starts are not
    billed minutes.
- id: HOSTED
  limitation: Hosted acceptance and signed-out unexpired JWT risk remain unverified
    and outside scope.
- id: CROSS-PR
  limitation: PR68 SQL privilege regression/preflight are not on main; preserve future
    wiring, do not import schema fix.
- id: IDENTITY
  limitation: Codex system identifies GPT-6; precise build not exposed; same-session
    pack is not independent cold-start evidence.
prepared_by: agent_workflow.py
---

# VEL-CP-0006 — VEL-CI-OPT-001 consolidate CI without weakening required verification

## Objective
Execute Issue #69: replace redundant automatic CI with one conservatively classified primary workflow, preserve meaningful security/governance/negative coverage and manual historical reproducibility, measure only actual available evidence, and submit a draft PR without merging.

## Scope
**In:** .github/workflows/** trigger consolidation and primary ci.yml; scripts/ci_*.py and tests/test_ci_*.py for routing, gates and governance orchestration; docs/agent-workflow/tasks/VEL-TASK-0006.yaml, immutable VEL-CP-0006.md and VEL-EB-0006.md; docs/agent-workflow/inputs/VEL-TASK-0006-* and docs/reports/VEL-CI-OPT-001* evidence; CURRENT-STATE.md material status update; dependency caches hold only non-secret package data
**Out:** PR65/68 edits, product features, application Auth or migration corrections; Hosted Supabase reads/writes, users, secrets, manuscripts, deployment; Billing/spending/auth-scope/protection/admin changes and PR merges; Accepted decision changes, waived release/private-pilot gates or paid provider calls

## Evidence and authority constraints
The text below is a readable rendering of pinned Git blobs; exact raw bytes remain recoverable from the recorded commit/blob SHAs. Recorded source statuses remain in force: draft research is not accepted requirements. Original unarchived uploads are not independently verified merely by being mentioned.

**Known source gaps:**
- BILLING: Usage API unavailable without extra user scope; blocked starts are not billed minutes.
- HOSTED: Hosted acceptance and signed-out unexpired JWT risk remain unverified and outside scope.
- CROSS-PR: PR68 SQL privilege regression/preflight are not on main; preserve future wiring, do not import schema fix.
- IDENTITY: Codex system identifies GPT-6; precise build not exposed; same-session pack is not independent cold-start evidence.

## Permissions and acceptance
**Allowed:** Read repo/GitHub issues, PR sources, run/job metadata, protection and billing metrics without mutation, Create isolated branch, canonical task and source snapshots; commit and generate/validate immutable pack, After handoff validation implement scoped CI/scripts/tests and execute disposable local/CI tests, Push task branch and open/update draft PR; report evidence for ChatGPT independent review and owner approval
**Owner approval required:** Merge, spending/billing, protection/admin or auth-scope changes; Hosted operations, secrets, private data, deployment, paid APIs or unrelated code; Any expansion beyond the Issue69 CI permission envelope
**Acceptance criteria:**
- One unfiltered primary automatic PR workflow and one main push baseline; full manual mode
- Preserve root governance/provenance/readiness/metadata/traceability and 66 library regressions
- Auth/backend ownership/SQL/migration/lockfile/CI changes mandate real disposable security checks
- Docs-only, rename/deletion, unknown paths, ready_for_review, main and manual classification covered
- Final gate fails missing, skipped-applicable, failed, cancelled or malformed required results
- No duplicate app install/build in automatic path; PR-only concurrency cancellation
- All original workflow job bodies intact and manually dispatchable; required current checks mapped before disable
- Actual run behavior and billing limitations disclosed; no synthetic savings claims
- Draft PR and owner/ChatGPT review pending; no merge or sensitive operations

## Deliverables
- Pre-edit old-to-new coverage audit and raw baseline metrics
- Unique task and committed validated immutable ContextPack before CI edits
- One automatic CI, conservative classifier and fail-closed final gate with regression tests
- ExecutionBundle with actual commands/exits/SHAs, limitations, rollback and draft PR

## Pinned source snapshots
Git commit: `dcd9843d536ba9146e4b422f4a33554132961de5`. Read source statuses independently from task intent.

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

### `SOURCE-OF-TRUTH.md` @ `b5ba9bc2ddcd198054d4cf5fb3b24f6c1b0056c4`

~~~~~~markdown
---
id: VEL-GOV-002
type: governance
status: accepted
created_at: 2026-10-08
updated_at: 2026-10-08
owner: project_owner
version: 0.1.2
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
Future authors' manuscripts, story canon, application settings, credentials, and stored assets belong in purpose-selected runtime storage, not automatically in the Git engineering knowledge base. No runtime architecture has been selected.

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
~~~~~~

### `AGENTS.md` @ `2674ee8b20f281b07062749d9b130668b5a71966`

~~~~~~markdown
---
id: VEL-AGENT-001
type: agent-instructions
status: active
created_at: 2026-10-08
updated_at: 2026-10-08
version: 0.1.2
---

# Instructions for Vellistry Research and Development Agents

## Read in order
1. PROJECT.md and PROJECT-CONSTITUTION.md.
2. SOURCE-OF-TRUTH.md and CURRENT-STATE.md.
3. Relevant accepted ADRs and requirements.
4. Task-specific ContextPack and original sources.
5. Related history, experiments, and execution reports if relevant.

## Operational task handoff (Stage 3 pilot)
Use [docs/agent-workflow/README.md](docs/agent-workflow/README.md) for task lifecycle, pinned ContextPack generation, ExecutionBundle reporting, and solo-maintainer review. This workflow remains a v0.1 proposal until owner-reviewed and merged. Do not confuse proposed task status with an accepted product decision.

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

### `docs/agent-workflow/README.md` @ `4a4615435db303d68e42b164c1967bc51849f868`

~~~~~~markdown
---
id: VEL-GOV-AGENTWF-001
title: Stage 3 agent task handoff contract
type: process
status: proposed
created_at: 2026-10-08
updated_at: 2026-10-09
owner: project_owner
version: 0.1.2
related_adrs:
  - ADR-0001
  - ADR-0002
---

# Agent Workflow v0.1 — Research and Engineering Handoffs

This is an **operational v0.1 pilot**, proposed for owner review. It implements small, repo-owned ContextPack and ExecutionBundle artifacts without a new service, MCP server, orchestrator, or project database. It applies to research tasks now and coding tasks later.

## Lifecycle (solo maintainer)

`proposed → ready → in-progress → verification → completed` with optional `blocked` or `cancelled`. Task state is not equivalent to evidence quality. Only the owner promotes consequential project decisions. An AI review is advisory; it is never falsely represented as an independent human approver.

1. **Plan:** create a YAML task in `docs/agent-workflow/tasks/`. Record objective, constraints, in/out scope, source gaps, accepted governing inputs, permitted actions and acceptance criteria.
2. **Prepare context:** run `python scripts/agent_workflow.py pack docs/agent-workflow/tasks/VEL-TASK-0001.yaml`. It pins a Git commit and Git blob IDs for explicitly selected files, and embeds the checked-in contents. No complete-chat dump or implicit source authority.
3. **Execute:** give an agent the committed ContextPack. Work in an isolated branch/worktree, not an uncontrolled shared working tree. Agent must not claim unarchived source material was independently verified.
4. **Report:** record a structured ExecutionBundle in `docs/agent-workflow/execution-bundles/`, separating facts, interpretations, proposals, tests, artifacts, and evidence gaps.
5. **Review:** validate the bundle, inspect evidence/tests/changes, capture the owner's disposition. Proposed knowledge changes are not automatically committed to accepted governance or requirements.
6. **Update:** once accepted, record material status changes in `CURRENT-STATE.md`, add linked ADR/history events when appropriate, and merge through the owner's PR process.

## Examples
- [First research task](tasks/VEL-TASK-0001.yaml): check traceability between first-pass author-intent extraction and proposed editor requirements; **do not select an editor**.
- [Example ContextPack](context-packs/VEL-CP-0001.md): task-scoped immutable Git inputs; records SRC-001 as a known missing original Git archive.
- [Example ExecutionBundle](execution-bundles/VEL-EB-0001.md): actual assessment of currently committed records; not independent source verification or completion of full migration.

## Stage 3 follow-up — cold-start verification (2026-10-09)

The owner merged the initial operational handoff implementation in [PR #5](https://github.com/Ben-001-sys/Vellistry/pull/5). The current follow-up is the [detached reconstruction and independent-agent protocol](HANDOFF-REPRODUCIBILITY-PROTOCOL.md).

- A CI-tested detached reader extracts objective, scope, permissions, approval gates, source authority, and disclosed gaps from **only** a copied ContextPack.
- This is a machine-readable *readability* test; it does not authenticate Git pins or prove that a second AI agent can reason from the material. Those are separate acceptance requirements.
- The original ContextPack VEL-CP-0001 is a **historical test fixture**. Later owner decisions, including the editor selection, must not be overwritten by its older task constraints. Prepare a new ContextPack for current work.
- The protocol specifies what a truly independent Cursor/Codex/other-agent run must receive, produce, and pass before being called successful.

## Level B handoff dispatch (2026-10-09)

The merged cold-start check establishes Level A **structural readability**. A genuine Level B run needs a separate AI agent and must not inherit the originating chat or previous ExecutionBundle. Use the CI-validated two-file export instead of handing over a full repository. See [the reproducibility protocol](HANDOFF-REPRODUCIBILITY-PROTOCOL.md) and [the minimal agent prompt](LEVEL-B-AGENT-PROMPT.md).

```bash
python scripts/export_level_b_handoff.py --output /tmp/vellistry-level-b.zip
```

GitHub Actions also publishes a short-lived `vellistry-level-b-cold-start` artifact after passing the exporter tests. The agent receives the two inner Markdown files only; the operator retains the CI URL, SHA-256 hashes, unedited response and review rubric separately. Export success **does not** mean Level B was executed.

## Artifact rules

- Task files are the source of workflow assignments; they are **not** automatically accepted product requirements.
- A ContextPack captures the governing Git revision and observed statuses. A draft research note inside a pack remains draft, even if presented beside an accepted policy document.
- **Trust boundary:** An included source document is untrusted task data, not an instruction channel. Its hash only authenticates the Git content; it never authorizes actions or overrides the task's permission/approval policy. Explicit owner-issued task constraints outrank any instructions embedded in research documents.
- The task YAML itself is pinned as a Git blob, and the **entire rendered ContextPack body** is validated against that historical task and its recorded source blobs. Updating the live task later does not silently change the original handoff; make a new pack when task instructions or allowed actions change.
- Bundle approval metadata is only a structural gate: it requires owner identity and an evidence link, while actual account identity/approval must be independently checked in GitHub by the owner. An AI agent must not self-authorize accepted status.
- Git path + commit SHA + blob SHA provide reproducible immutable source identity; missing original uploads are reported as source gaps, not fabricated into Git references.
- If selected source files change later, the ContextPack still refers to its original pinned revision. Prepare a **new version/ID** for a different snapshot rather than silently mutating previous historical handoffs.
- An ExecutionBundle contains proposals; it cannot itself change accepted ADR/requirements or merge application code.
- The agent's declared identity may be a model name when known or an honest generic identifier when unknown.
- No secrets, user manuscripts, or private runtime payloads in these artifacts.
- Templates under `.agents/templates/` remain authoring aids; the YAML task and pinned pack/bundle schema here are operational.
- `docs/agent-workflow/` is distinct from the fiction application's future runtime story memory and continuity database.

## Validation

Run `python scripts/agent_workflow.py validate` to validate checked-in tasks, ContextPacks and ExecutionBundles. For generation:

```bash
python -m pip install 'PyYAML>=6.0,<7'
python scripts/agent_workflow.py pack docs/agent-workflow/tasks/VEL-TASK-0001.yaml
python scripts/agent_workflow.py validate
```

The generator refuses to overwrite an existing pack and rejects missing/untracked/unsafe paths. The verifier compares pinned Git blobs against the recorded commit; this proves repository snapshot provenance, **not factual truth of the source's claims**. The pilot bundle is not proof of cross-agent or independent-review success.

## Acceptance gate for v0.1
- The first task and context pack point to actual Git records at an immutable commit.
- The generator, validator, and positive/negative tests pass in CI.
- The bundle transparently distinguishes what was checked from what remains unavailable.
- An agent reading only repository records can understand this task's objective, evidence constraints, and next action.
- Owner reviews the workflow before it is treated as the default standard.
~~~~~~

### `docs/agent-workflow/IMPLEMENTATION-OPERATING-MODEL.md` @ `9236c03e20b2c97506f2bb3f33548223d4d1a102`

~~~~~~markdown
---
id: VEL-GOV-IMPLEMENTATION-OPERATING-MODEL-20261010-001
title: Agentic implementation operating model and handoff controls
type: proposed-operating-protocol
status: proposed-owner-review
created_at: 2026-10-10
updated_at: 2026-10-10
owner: project_owner
version: 0.1.1
source_refs:
  - PROJECT-CONSTITUTION.md
  - SOURCE-OF-TRUTH.md
  - docs/agent-workflow/README.md
  - docs/agent-workflow/STAGE4-INDEPENDENT-DISPATCH.md
  - docs/agent-workflow/handoff-evaluations/VEL-HO-0003.md
  - docs/history/2026-10-10-owner-delegated-mvp-design-entry.md
---

# Vellistry — agentic coding execution and review (proposed)

## Goal and current permission boundary

This is the **preparation of future agentic implementation**; it is not an authorization for agents to start new shipping features. Research Waves 1–6 are bounded-closed; a **synthetic-only UI concept exploration** is authorized, followed by editable canonical Figma Design, real consented writer validation and explicit owner design signoff. **Feature coding, new production migrations, paid API calls, real unpublished-manuscript processing and deployment remain blocked.**

Reuse the successful *bounded* Stage 4 clean-room handoff pattern and Git-pinned source authority. The Stage 4 Cursor Grok 4.7 synthetic 17/17 run verifies **one task's reproducible evidence**, not a standing claim that every new task or tool is independent or production-ready. Stage 3 Issue #18 is still separately open.

## Roles and approval

| Role | Accountable actions | Boundaries |
|---|---|---|
| **Project owner** | Final MVP/design signoff, source-rule and security policy decisions, task approval, PR acceptance and merge, production spend/release | Self-review permitted under accepted constitution; never fabricate another approver |
| **ChatGPT — architect/coordinator** | Parse owner goals, inspect repo/CI, maintain specs, dependency plan and ContextPack proposals, assess agent outputs and risks, prepare PR reviews | No authority to change accepted direction or mark tests/owner decisions PASS without evidence; no background execution claims |
| **Cursor / Codex — assigned implementer** | Single ticket in isolated worktree/branch, tests, code/docs within allowed paths, original terminal outputs and ExecutionBundle | No unsolicited migrations/secrets, architecture rewrite, destructive operation, merge or deployment |
| **Independent reviewer** (can be another model/tool) | Read diff, challenge security/edge cases, independently reproduce checks, report FACT/INTERPRETATION/PROPOSAL | Advisory, not independent human approval; same-agent review is not an independent rerun |
| **CI runner** | Reproduce deterministic contracts on pinned SHA, compare source and artifacts, show regressions | Green checks are not author usability, privacy certification, original-source inspection or successful release |

Tools are **roles, not licenses or subscriptions**; no new paid agent/MCP service is approved. An agent's tool/model/version, exact permissions and execution environment belong in each task report.

## Source authority and initialization sequence

Before an agent starts, coordinator must read in order:
1. `PROJECT-CONSTITUTION.md` and `SOURCE-OF-TRUTH.md`.
2. Latest **top** section of `CURRENT-STATE.md` plus merged Git SHA and current open PR/issues (historical lower sections may be superseded).
3. Accepted MVP scope, ADR-0003/0006/0007, Wave 5 MVP decision and Wave 6 G10 (observe provisional vs accepted status and gated evidence).
4. This proposed operating protocol, current implementation architecture boundaries and dependency DAG.
5. **Only** the task-specific approved specification, assigned task, scope-limited ContextPack and necessary file paths.

Keep Git/Markdown the canonical knowledge store. Do not paste chat summaries into source-of-truth as if independently accepted; never include manuscripts, passwords, live BYOK keys or unarchived full private source corpus in a ContextPack. Link to pinned artifact hashes for private-source verification where applicable.

## Task lifecycle and strict isolation

`backlog → proposed → owner-ready → approved → dispatched → in-progress → evidence-review → merged/closed` is **planning vocabulary only**. The existing machine-readable task lifecycle remains `proposed|ready|in-progress|verification|completed|blocked|cancelled`. In particular, **a task marked ready does not lift product implementation gates**.

- One agent, one bounded objective, one branch/worktree, one Git base SHA. Never let multiple agents edit a shared branch or update the same file without coordination.
- Task YAML under `docs/agent-workflow/tasks/` follows existing schema, e.g. `VEL-TASK-0002.yaml`; use distinct ID and `context_pack_id` per independently dispatched task. No recycled `VEL-CP-0002`.
- `python scripts/agent_workflow.py pack <task>.yaml` binds `base_commit`, `task_blob_sha`, each source `git_blob_sha`, role and recorded source status. Ensure the task is committed first, checkout is clean/full-history and context stays under source limits. **Never overwrite a previously dispatched immutable pack.**
- CI can produce a **prepared ContextPack artifact**, but preparing/exporting it neither runs an external agent nor proves owner approval.
- Provide an explicit allowlist of editable paths, blocked paths/actions, acceptance conditions and test matrix. For implementation, relevant Figma spec and approved contract **must** exist; for design handoff, use invented data only.
- If new information changes the task or pinned sources, stop, report **BLOCKED**, revise task ID/version or issue a new packet from approved new HEAD. Do not silently patch a dispatched immutable ContextPack.
- Build agent receives scoped source files rather than all prior conversations, owner personal information or downstream production keys.

## Mandatory ExecutionBundle and integration loop

1. **Agent submission:** exact task/pack IDs and Git base+head; agent/model/version; list of changed files; raw commands, exit codes, logs/artifacts; scenario-by-scenario PASS/FAIL/BLOCKED/NOT RUN; source provenance and remaining unknowns; FACT versus INTERPRETATION versus PROPOSAL.
2. **Independent verification:** rerun tests on exact commit and compare changed paths to allowlist; check diff for privacy leaks, accidental destructive operations, unapproved packages/dependencies, unexpected cross-book access, test deletions and stale state references.
3. **CI PR:** baseline/build/typecheck, governance/traceability checks and **feature-level** negative tests appropriate to touched layers. CI paths must cover newly added task/validator/source files; avoid zero-test success.
4. **Review:** advisory AI/code review plus owner code/diff evidence review; owner records explicit disposition. No self-proclaimed independent human reviewer.
5. **Promotion:** merge only after owner approval; **check final `main` tree file presence and push CI after merging**, because prior stacked PRs marked merged while 21 expected files were missing. Update `CURRENT-STATE.md` top summary and issue/task state; preserve historical snapshots.

## Evidence and release gates

| Gate | Before agent dispatch/acceptance |
|---|---|
| **D — Design** | Two invented-data explorations, canonical editable Figma Design, actual writer walkthroughs and explicit owner design approval. Until then only research/spec/CI/agent-workflow preparation tasks |
| **A — Architecture** | Accepted stack held; proposed API/storage/DB schema and security deviations require owner-reviewed specs/ADR; do not interpret research tests as deployed modules |
| **S — Security** | Acknowledge initial Supabase Auth/RLS/PostgREST and previously observed signed-out-JWT residual exposure; no false instant revocation guarantee; real manuscripts/public pilot blocked pending explicit risk acceptance and appropriate controls |
| **V — Verification** | Required real repo code checks and negative tests, direct Data API boundaries, multi-tab CAS/retry/recovery, client/durable states; simulated/synthetic evidence labeled |
| **O — Operations** | Auth+DB+Storage recovery, backup retention/restore and legal/privacy/provider obligations are outstanding; 24h/48h targets are unverified |
| **H — Human review** | Owner approval on consequential changes; optional independent agent reviewer advisory only |

## Stage 5 gate-state transition procedure — explicit future review, no CI auto-promotion

The `IMPLEMENTATION-TASK-DEPENDENCIES.yaml` gate entries are deliberately all `pending`. The preparation validator rejects any non-pending state **even if an agent inserts an `approved_by` field or a green CI URL**. This prevents a preparatory task file from becoming implicit design/coding/release authorization. It does **not** mean the gates can never be opened.

**When an actual gate is satisfied later, make a separate, reviewed owner decision and upgrade the policy intentionally:**

1. Assemble the exact gate's required **real** evidence (editable Figma + genuine participant observations for G_DESIGN, scope/spec owner signoff for G_CODE, tested Auth/DB/Storage recovery and privacy acceptance for G_PRIVATE_PILOT, or real release validation for G_RELEASE). Record artifacts, Git SHAs, limitations, dates, genuine owner decision and any residual risk; a simulated pass or a prepared ContextPack is insufficient.
2. Add a dated, source-traced owner decision or ADR with scope, approved by, evidentiary references, and explicit gate ID. **Only the owner may approve.** Self-review is permitted under the Constitution, but CI, ChatGPT or another agent may not manufacture approval.
3. In a **separate, owner-reviewed governance PR**, revise the DAG's schema/version and validator to accept `approved` only for the explicitly named gate **and only with a verifiable approval record and evidence-linked contract**. Add positive and negative tests for absent/mismatched/stale/forged approval, and update downstream task-specific specs and packet permissions. Do not simply flip `state: pending` to `approved` in this preparation-only DAG.
4. Verify CI and author-specific acceptance on the PR head; owner reviews/merges; verify actual `main` content and push checks. Only **then** prepare a *new* task/ContextPack pinned to the accepted Git state. Old immutable packs are never rewritten or automatically promoted.
5. Treat G_DESIGN, G_CODE, G_PRIVATE_PILOT and G_RELEASE as **independent** gates. Passing one does not waive any other. A public release task still needs its own G_RELEASE permission; a private pilot task needs its own G_PRIVATE_PILOT permission. The validator enforces the correct gate across **every future task ID**, and prohibits coding from preparation, design, validation and release phases.

A green preparation CI run confirms that the authorization *boundaries* are preserved, **not** that an owner gate has been accepted or that runtime security/deployment is ready.

## Default quality conventions (proposed, enforce incrementally)

- TypeScript strict checks; pnpm 10 and Node 24; use existing Next/Nest workspace, feature-scoped modules, minimal dependencies, no bypass of DTO validation, RLS, or typed persistence contracts.
- Prefer small PRs with stable test IDs, honest error/save states, no silent background AI/canon updates. Avoid speculative migrations or generated code from Figma without inspection.
- Python standard-library tests for research and governance; real browser/DB tests for affected runtime work; Jest/other runner **not selected by this document**.
- Restrict logs: redact bearer tokens, model keys, personal data, manuscripts and full prompt bodies; simulated fixtures use invented characters/books and no paid provider.
- New features require positive + negative tests, a clear rollback/recovery plan, accessible keyboard behavior and explicit owner-scoped permission enforcement.
- Never call `supabase db reset` except on explicitly disposable local data. No direct production DDL, signed-in real-account test, deploy or paid request without owner-approved task.

## Entry and exit

**Preparation deliverable:** implementation boundary map, operating protocol, machine-checkable task DAG, first *design-spec* task and GitHub validator/CI. **Done means prepared for owner review, not ready to code product.** Next owner-approved design phase produces canonical Figma specs. Subsequent initial application vertical slice is sign-in → author-owned book/chapter → transactional save/recovery → portable output, followed by profiles, rules and opt-in AI.
~~~~~~

### `docs/decisions/ADR-0006-next-nest-supabase-implementation-foundation.md` @ `d53724d08d065a9e354a95d5953068fd497b5cfb`

~~~~~~markdown
---
id: ADR-0006
title: Implement Vellistry using Next.js web, NestJS API and Supabase foundation
type: architecture-decision
status: accepted
created_at: 2026-10-09
updated_at: 2026-10-09
decided_at: 2026-10-09
author: project-research
approved_by: project_owner
version: 1.0.0
sources:
  - "2026-10-09 Fiction Writing Project conversation: assistant proposed Next.js + NestJS + Supabase as preferred candidate; owner replied 'agreed', then directed completing planning by 10:30 and beginning implementation. Original conversation permalink pending."
  - "https://github.com/Ben-001-sys/Vellistry/pull/23 — shared Next/Nest manuscript contract, 30 passing API assertions and both frontend builds."
  - "https://github.com/Ben-001-sys/Vellistry/pull/25 — draft, eight passing Chromium editor and draft-recovery checks."
  - "https://github.com/Ben-001-sys/Vellistry/pull/22 — merged, PostgreSQL FTS vs vector benchmark."
  - "https://supabase.com/docs/guides/local-development"
  - "https://supabase.com/docs/guides/auth/jwts"
evidence:
  - "Owner's 'agreed' unambiguously answered the proposal to proceed with the Next.js + NestJS + Supabase preferred architecture, with validation still required."
  - "Owner then directed a 10:30 implementation-planning cutoff and beginning implementation."
  - "Evidence from the framework and story-memory experiments supports feasibility, not production security, reliability or superiority."
  - "Approval does not decide managed versus self-hosted Supabase production deployment, complete account security, job engine, AI model, or a paid service."
related_requirements:
  - VEL-PRODUCT-SCOPE-20261009-001
  - VEL-PRODUCT-CONSTRAINT-20261009-001
related_features: []
related_contracts: []
related_adrs:
  - ADR-0001
  - ADR-0003
  - ADR-0004
  - ADR-0005
supersedes: []
superseded_by: []
implementation_refs:
  - apps/web/
  - apps/api/
  - supabase/
  - docs/plans/MVP-ENGINEERING-IMPLEMENTATION-KICKOFF-2026-10-09.md
---

# ADR-0006 — Next.js + NestJS + Supabase implementation baseline

## Context and problem statement

Vellistry's eight MVP feature areas were approved before choosing the full application stack. R18's 23 synthetic JS memory checks, 12 PostgreSQL checks, 140k-word retrieval comparison, 30 Next/Nest HTTP checks and eight Chromium authoring/recovery tests established bounded feasibility. Those tests did **not** prove production readiness or a decisive framework performance advantage. The author now authorizes beginning development, with planning completed by 22:30 Ghana time on 2026-10-09.

## Decision

**Accept the following as the implementation baseline, not an irrevocable forever stack:** a TypeScript/pnpm workspace holding **Next.js 16 / React 19** for author-facing UI and **NestJS 11** for protected application API and domain modules. Keep the author writing experience on **Tiptap 3** with PostgreSQL-acknowledged chapter revisions and best-effort local Dexie recovery.

Use **Supabase Auth** as the only user sign-in authority; **Supabase PostgreSQL** as the durable relational store with per-author/book Row Level Security; and optional private Supabase Storage for authorized import/export files when that surface is implemented. **No Better Auth alongside Supabase Auth**.

Start with **Supabase CLI local development**, no production credentials and no paid service. Managed Supabase Free versus properly self-hosted production Supabase/PostgreSQL is still open. Do not make cloud deployment a condition for offline/no-paid development. The Nest API must validate Supabase access credentials before serving author data, use RLS-scoped non-service database calls, never accept client-supplied owner IDs as authority and never expose privileged keys to browsers. Next.js is frontend/BFF, not an unguarded duplicate backend.

For Story Memory, retain author-approved temporal canon events and PostgreSQL full-text retrieval as the initial memory system. pgvector/embeddings are **optional** after realistic fiction-quality evidence. Background execution is a separate worker boundary, with specific provider (Graphile Worker versus Supabase Queues) **undecided**. Generative AI remains optional, consented and provider-neutral; no paid model required or secretly selected.

## Alternatives considered

1. **Next.js alone + Supabase**: fewer deployables and valid tested authoring contracts; less explicit backend isolation as the Story Memory, review, and conversion engine expands.
2. **React/Vite + NestJS + Supabase**: valid and tested; a separate frontend/router pattern rather than the owner's chosen Next.js.
3. **Next.js + NestJS + independently managed PostgreSQL/Auth**: potentially leaner runtime; requires more authentication and infrastructure work than requested now.
4. **Microservices with Redis/vector SaaS**: adds overhead and unnecessary paid-service exposure for MVP.

## Rationale

NestJS module boundaries suit protected book/chapter operations, canon review and future AI orchestration, while Next.js supports an integrated author-facing web UI. Supabase provides local Auth and PostgreSQL development, private storage and RLS. Earlier tests proved basic manuscript semantics on both transports. No measured speed superiority is claimed.

## Consequences and trade-offs

- Two runtime applications (+ eventual worker) require separate builds, API contracts, origin/cookie trust design, and operational monitoring.
- Supabase Free hosted quotas/inactivity and manuscript backup risk mean production hosting must be explicitly reviewed before public use.
- Local Supabase development requires a Docker-compatible runtime and must never be exposed as a production service.
- RLS and verified JWT/user sessions must be tested across two actual users. Server secret/service keys must not bypass author isolation.
- Maintain one writing source of truth: accepted revisioned Tiptap JSON in PostgreSQL. IndexedDB is temporary recovery, not an authority on accepted content.
- User's no-paid-service mandate remains binding. Compute/storage and maintenance may still incur real costs.

## Evidence and verification limits

Approval is documented by the two owner messages in the source conversation, not an invented URL. The architecture approval is specific to **beginning MVP implementation**. It does not authorize production deployment, published auth/security claims, a paid service, real-manuscript test data, or merging unrelated draft PRs. PR #17 contains an **earlier proposed Next-only modular-monolith ADR-0005**; that unmerged proposal is not an accepted architecture. This ADR is a distinct owner-directed selection, not an undocumented rewrite of ADR-0005.

Official references: [Supabase local development](https://supabase.com/docs/guides/local-development), [Supabase JWT verification](https://supabase.com/docs/guides/auth/jwts) and [NestJS guards](https://docs.nestjs.com/guards).

## Implementation status

**Implementation authorized and initial scaffolding in progress, not production ready.** First testable slice: local auth token -> NestJS guard -> RLS-scoped book list/create -> Next.js user interface. Later: chapters, revisioned Tiptap editing, draft recovery, profiles, author approval and retrieval. See implementation kickoff plan. All integration test outcomes must be separately recorded and observed before being called complete.
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0006-ISSUE-69.md` @ `964a30a527ebc555ffaf1fbbc13b3832899c1012`

~~~~~~markdown
# Issue #69 owner-authorized task snapshot

Source: https://github.com/Ben-001-sys/Vellistry/issues/69
Fetched 2026-10-16. This is source data; authority is the explicit owner dispatch.

## Owner-authorized Codex handoff — 2026-10-16

**Owner instruction:** implement the previously agreed substantial CI-usage-reduction plan under Vellistry's **agentic coding** architecture. Role boundary: **ChatGPT architect/coordinator and exact-head reviewer; Codex primary implementer; GitHub authoritative source; project owner approves merge, spending and high-impact decisions.** This issue does not constitute a Codex execution or confer merge authority.

**Source baseline:** merged `main` observed at `4b3996ef7cda878e1af3d679454bd1bb873a79c2`. Re-verify prior to work; don't silently overwrite changes. ADR-0008 Codex governance is owner-selected but remains draft in [PR #66](https://github.com/Ben-001-sys/Vellistry/pull/66). Supabase PRs [#65](https://github.com/Ben-001-sys/Vellistry/pull/65) and [#68](https://github.com/Ben-001-sys/Vellistry/pull/68) are separate and not to be edited or merged.

**Reserved task IDs (verify uniqueness on all active branches):** `VEL-TASK-0006`, `VEL-CP-0006`, `VEL-EB-0006`; don't reuse task 0005 from PR #68.

### Objective and targets
- Consolidate redundant GitHub Actions checks into **one primary automatic CI workflow** with applicable conditional jobs, a stable required final gate, and `workflow_dispatch` full-verification mode; retain one suitable post-merge main baseline.
- Reduce automatic workflow invocations **>=75%, targeting 90% where practical**, and significantly reduce *actual runner minutes* (aspirational ~60% reduction), **without weakening security, provenance or release gates**. Goals are NOT measured savings.
- Keep historical/spike workflow files/tests/evidence reproducible but normally **manual-only**, after proving unique coverage is preserved elsewhere when essential.
- Add PR concurrency cancellation for superseded commits, not post-merge main verification; avoid redundant pnpm install, duplicated build/test suites, and expensive browser/container jobs on unrelated docs-only PRs.
- Security/database/auth/author-isolation/RLS/SQL privilege, agent provenance and migration code must continue to trigger meaningful negative tests and required disposable integration when relevant, regardless of budget targets.

### Existing verified baseline
There are **25** workflow files on merged main. Six high-frequency core workflows: `combined-main-baseline.yml`, `implementation-foundation.yml`, `knowledge-metadata.yml`, `implementation-readiness.yml`, `agent-workflow.yml`, `k2-supabase-auth-rls.yml`. Recent sample of 300 run records: respectively 73, 50, 69, 69, 12 and 27 starts. Raw starts include blocked runs and are **not** billable usage minutes. Verify the latest source and actual billing metrics before claiming cost savings.
Existing relevant CI includes historical research jobs, synthetic Python governance/Stage-3/4 contracts, Next/Nest build, focused 66 Book Library tests, K2 disposable Supabase security, and SQL privilege regression proposed in draft PR #68.

### Canonical source and prep instructions
Read actual `PROJECT.md`, `PROJECT-CONSTITUTION.md`, `SOURCE-OF-TRUTH.md`, top of `CURRENT-STATE.md`, `AGENTS.md`, `docs/agent-workflow/README.md`, `docs/agent-workflow/IMPLEMENTATION-OPERATING-MODEL.md`, ADR-0006, the owner-selected ADR-0008 from PR #66, and relevant Task/ContextPack/ExecutionBundle templates and validator. Inventory **all** `.github/workflows/*.yml`, relevant scripts/tests, package.json, lockfile, application/Auth/SQL test coverage.
**Before CI code edits:** In an isolated Codex worktree/branch, create canonical `VEL-TASK-0006.yaml` reflecting this issue's permission envelope, source pins and negative cases; commit task and source references; run `python scripts/agent_workflow.py pack docs/agent-workflow/tasks/VEL-TASK-0006.yaml` to create immutable `VEL-CP-0006.md` from committed Git blobs and validate it. If pack generation or source pins fail, STOP and report BLOCKED, not fake hashes. Do not call the same-session work an independent cold start. Record executor identity/provenance.

### Implementation sequence
1. Audit each automatic trigger, job, duplicated test/build, branch filter, runner usage/time and required-check setting; **produce an explicit old-check -> new-check coverage matrix** before disabling anything.
2. Build primary `.github/workflows/ci.yml` with change classification, lightweight governance validation, single focused app check/build path, conditional mandatory security integration, and reliable required final status. Use least privilege, exact-head checkout, safe untrusted-PR handling and cache only non-secret dependencies.
3. Shift historical research/spike workflows to manual dispatch ONLY where non-regressive and archive intact. Avoid duplicate feature-branch push triggers; leave manual full suite and one integrated `push main`.
4. Test path, workflow-event and job-condition scenarios: docs only; ADR metadata; agent YAML/pack/bundle; frontend; backend author ownership; auth/session; SQL migrations, grants/RLS; lockfile; CI edits; draft->ready-for-review; main merge; manual full verification; failed required job. Required checks must never remain perpetually pending, appear falsely successful when required jobs are skipped, or silently bypass important security tests.
5. Stage changes in small rollbackable commits. Prove YAML validation and actual GitHub run behavior. Do not change billing, GitHub admin protection rules, cloud SQL/data or open Supabase PRs. Stop for owner if protected-branch check-name settings must change.
6. Write `VEL-EB-0006.md`: changed files, exact SHAs, real commands/exits, PASS/FAIL/BLOCKED/NOT_RUN, observed run counts AND billable runner minutes when available, coverage preservation, security limits, rollback, FACT/INTERPRETATION/PROPOSAL and references to CI runs.
7. Open a **draft PR** referencing this issue; do not merge. Hand back to ChatGPT for exact-head review, then owner for approval.

### Acceptance and forbidden actions
- Typical applicable PR invokes **one primary workflow**, conditional jobs only; docs-only doesn't execute full app builds.
- Security-sensitive Auth/RLS/migration changes cannot evade relevant tests; book isolation, unknown saves, migration privilege regression and handoff integrity remain checkable.
- A required final gate fails if applicable required jobs fail or could not run; nonapplicable jobs can skip without false failure.
- Full manual suite stays usable, logs and sources reproducible; historical evidence retained.
- Measured historical-vs-new usage comparison does not mistake GitHub blocked starts for billable time.
- **Forbidden:** changing accepted architecture/product decisions, merging PRs, hosted migrations/resets, real manuscripts or cloud data, secrets, deployment, billing/spending, paid provider calls, and unrelated product features.
- If the scope requires extra approval, STOP and report, do not self-authorize.

**Status:** Owner-authorized implementation *request* prepared by ChatGPT coordinator. Codex dispatch/execution, pinned ContextPack creation, code changes, tests and merge **have not yet occurred merely by opening this issue**.
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0006-ADR-0008.md` @ `62da0f1baffbf898ec936b7bea667b69e27d3484`

~~~~~~markdown
---
id: ADR-0008
title: Use Codex as the primary implementation agent in Vellistry's governed agentic coding workflow
type: architecture-decision
status: accepted
created_at: 2026-10-14
updated_at: 2026-10-15
decided_at: 2026-10-14
author: project-research
approved_by: project_owner
version: 1.0.1
sources:
  - "Fiction Writing Project owner message, 2026-10-14: 'make it an adr we are using codex now'. Direct reply to the previously explained ChatGPT architect/coordinator, Cursor implementation, GitHub source-of-truth workflow. Original conversation permalink pending archival."
  - docs/agent-workflow/IMPLEMENTATION-OPERATING-MODEL.md
  - docs/plans/VEL-PLAN-05-CURSOR-AGENT-WORKFLOW-2026-10-11.md
  - PROJECT-CONSTITUTION.md
  - SOURCE-OF-TRUTH.md
evidence:
  - "Owner explicitly selected Codex as the active coding agent and instructed that the change be formalized as an ADR on 2026-10-14."
  - "The earlier role assignment in PLAN-05 selected Cursor as the primary bounded coding agent; this ADR replaces only that default execution-tool assignment."
  - "Owner did not authorize the new agent to merge without review, deploy, apply cloud migrations, use secrets or paid services, handle real manuscripts, or bypass project approval gates."
related_requirements:
  - VEL-PRODUCT-SCOPE-20261009-001
  - VEL-PRODUCT-CONSTRAINT-20261009-001
related_features: []
related_contracts:
  - docs/agent-workflow/IMPLEMENTATION-OPERATING-MODEL.md
  - docs/agent-workflow/README.md
related_adrs:
  - ADR-0001
  - ADR-0002
  - ADR-0006
supersedes: []
superseded_by: []
implementation_refs:
  - AGENTS.md
  - docs/agent-workflow/IMPLEMENTATION-OPERATING-MODEL.md
  - docs/plans/VEL-PLAN-05-CURSOR-AGENT-WORKFLOW-2026-10-11.md
  - CURRENT-STATE.md
---

# ADR-0008 — Codex-primary governed agentic implementation

## Context and problem statement

Vellistry uses Git and Markdown as the canonical engineering knowledge/control plane. The accepted project constitution separates evidence, design decisions, implementation and owner approval. The planned workflow had ChatGPT prepare bounded tasks and ContextPacks while **Cursor Agent** performed implementation; its outputs were independently reviewed and reconciled through GitHub PRs and CI.

After PR #64 merged, direct GitHub editing by ChatGPT produced draft PR #65 for hosted Supabase preflight. The owner then reconfirmed that Vellistry follows an **agentic coding** workflow and explicitly said **"make it an adr we are using codex now"**. The agent responsible for normal implementation must therefore be updated without rewriting past Cursor execution history or implying any broader authorization.

This is a **development operating model decision**, not a product stack, deployment, licensing, security-gate or production-readiness decision.

## Decision

**Codex is Vellistry's default primary code implementation agent starting 2026-10-14**, for each newly authorized bounded coding task. Preserve the existing role-based control plane:

| Role | Responsibility | Authority boundary |
|---|---|---|
| **Project owner** | Select/approve scope, consequential changes, security posture, spending, database operations, PR acceptance/merge and release | Sole final decision maker; permitted to self-review under the constitution |
| **ChatGPT — architect/coordinator** | Read current repository evidence and accepted ADRs; define requirements, task IDs, ContextPacks, acceptance/negative tests, path allowlists and exclusions; assess Codex reports, diff and CI; advise owner | Does **not** make owner decisions, treat its assessment as independent human review, or act as the default feature-coding executor |
| **Codex — primary implementer** | On an explicitly scoped task, inspect pinned source, implement code/tests in an isolated Git branch/worktree, run valid checks, produce a factual ExecutionBundle and proposed PR | No self-authorization to change scope/ADRs, merge, deploy, perform cloud SQL/migrations/resets, incur paid costs, use real manuscripts or disclose secrets |
| **GitHub — source of truth and review ledger** | Host code, authoritative docs, versioned ADRs, task/ContextPack/ExecutionBundle artifacts, PRs, CI, decision history and current state | PR creation and green CI do **not** equal owner acceptance or deployment readiness |
| **Independent verifier (optional)** | Challenge the source diff, independently rerun tests and negative scenarios when possible | Advisory; the same agent's self-review is not an independent execution, and no second human is mandated |

**Default work loop:**

1. **Observe:** ChatGPT inspects the merged `main` SHA, current PRs, accepted requirements/ADRs and latest top of `CURRENT-STATE.md`; distinguish verified facts from older historical status.
2. **Authorize a specific slice:** The owner approves the bounded objective and sensitive actions. ChatGPT prepares a unique task/ContextPack with source SHA, intended changes, allowed/forbidden paths, behavioral acceptance checks, security and cost restrictions. A prepared packet does not grant approval on its own.
3. **Dispatch to Codex:** Codex executes in a dedicated branch/worktree against the designated SHA, without reusing old task/pack IDs or overwriting another agent's in-progress branch. Agent may use the existing repository tools/CI and must declare tool/model/runtime in its evidence.
4. **Report evidence:** Codex supplies an ExecutionBundle with base/head SHA, changed paths, actual commands and exit codes, unit/integration/browser results with real environment and fixture descriptions, `PASS|FAIL|BLOCKED|NOT_RUN`, original artifacts and `FACT|INTERPRETATION|PROPOSAL`.
5. **Review:** ChatGPT reviews the exact submitted code, contracts, tests, workflow behavior, known risks and evidence. The owner determines corrections, rejection or PR acceptance/merge. CI success alone cannot waive human acceptance/security/recovery testing.
6. **Reconcile:** After an approved merge, verify files on merged `main` and post-merge checks; update `CURRENT-STATE.md` and issue/task status, preserving past decisions and results. Proceed to a new slice only after its own authorization.

Codex is a **role assignment**, not a mandatory IDE or subscription. Cursor may continue as an editor, historical test environment or explicitly assigned alternate agent, but **Cursor Agent is no longer the default implementer**. Other agents may implement a task only when the owner explicitly reassigns that task; do not silently switch providers or claim that a ChatGPT-side GitHub change was executed by Codex.

**Existing work:** PR #64 remains a valid merged Cursor-era implementation and its recorded verification evidence does not change. Draft [PR #65](https://github.com/Ben-001-sys/Vellistry/pull/65) is a **ChatGPT-authored, not Codex-executed** implementation proposal; do not relabel its origin, auto-merge it or treat its tests as Codex evidence. It may be reviewed, adopted via a fresh bounded Codex handoff, revised or closed by the owner, with its actual provenance preserved.

**Security boundary:** The owner selected hosted **Supabase Cloud** project `vellistry-dev`, not a locally self-hosted Supabase installation. All hosted schema migrations, Auth fixture creation, remote resets, real manuscript use, deployment and paid provider calls remain subject to separate explicit task-level authorization and appropriate testing. In particular, the historical signed-out-but-still-valid JWT/direct PostgREST concern remains a private-pilot blocker until mitigated and verified.

## Alternatives considered

1. **Continue Cursor Agent as default:** keeps earlier environment but contradicts the latest explicit owner tool selection. Preserve Cursor-era history instead.
2. **Let ChatGPT directly commit all feature changes through GitHub:** convenient for small edits but bypasses the chosen Codex execution role and muddies agent provenance. ChatGPT may maintain planning/decision records, not silently act as the default code implementer.
3. **Allow unrestricted, interchangeable coding agents:** flexible but weakens permission isolation and reproducibility when task ownership changes implicitly.
4. **Codex primary under the existing governed task/PR loop (selected):** retains traceability, single-task ownership and verifiable outputs while honoring the updated owner direction.

## Rationale

The owner's instruction identifies Codex as the current implementation tool. Keeping architecture, execution, independent review and approval responsibilities separate avoids silently treating agent-produced code, CI results or a prior conversation as accepted authority. The Git-centred knowledge and task packet approach permits future tool changes without changing the Next/Nest/Supabase/Tiptap architecture.

No performance, reliability or cost superiority between Codex and Cursor is asserted. This choice is an **owner workflow preference and accountability decision**, not a benchmark result.

## Consequences and trade-offs

- Future default implementation prompts, agent handoff references and code-owner descriptions should name **Codex**. Older Cursor artifacts remain intact and labelled as historical; do not rewrite them as if Codex produced them.
- Codex needs a verified workspace/Git access method and clear approval/tool permission boundaries for each task. The specific Codex interface (web, desktop, CLI or connected agent) is **not established by this ADR**.
- ChatGPT should deliver **specification, acceptance tests, task packet, review and decision support**, rather than directly creating ordinary feature code/PRs without an explicit exception.
- Existing ContextPack/ExecutionBundle schemas and Git/CI controls remain in force until independently amended and validated; do not claim automatic Codex integration if the current workflow does not support it.
- The single-owner self-review policy remains effective. Independent agent review helps but cannot replace required owner approvals.
- Migration, production/deployment, private manuscript, provider-spending, security and release gates are unchanged. No new subscriptions or paid API use is approved.

## Evidence and verification limits

The owner's direct 2026-10-14 message is the decision source; the conversation permalink has not been archived. It approves **the default implementer change and ADR record**, not a particular Codex runtime, verified Codex GitHub connection, successful task handoff or a security-gate transition. This documentation PR itself is **not Codex implementation evidence**.

Record status is **accepted by the owner as a workflow decision**. Repository enforcement via docs and completed Codex task evidence are distinct, separately verifiable steps. A future switch of the default implementation agent should be recorded through a new dated owner decision/ADR, with links to this record and history preserved.

## Implementation status

**Decision owner-accepted; documentation integration in this PR remains pending owner review.** Since this ADR was drafted, Codex has executed an initial repository-only authorized handoff under Issue #67 and proposed draft [PR #68](https://github.com/Ben-001-sys/Vellistry/pull/68), with `VEL-TASK-0005`, pinned `VEL-CP-0005`, and `VEL-EB-0005`. Original draft PR #65 remains ChatGPT-authored; its commits were carried into #68 with provenance rather than silently relabeled. PR #68 is **not merged**, its GitHub-hosted CI jobs are **BLOCKED by an account billing/spending restriction before runner execution**, and its same-session evidence is **not** an independent cold-start evaluation. A subsequent bounded Phase B authorization occurred, but a new proposed privileges SQL migration has an additional approval/verification hold. Hosted Supabase migrations and two-author acceptance are **NOT_RUN**. Review PRs #65, #66 and #68 separately and preserve the owner merge/security gates.
~~~~~~

### `docs/reports/VEL-CI-OPT-001-COVERAGE-2026-10-16.md` @ `afa2a30205cdefa82e9f13da0df54f1b0d4d4d71`

~~~~~~markdown
---
id: VEL-RPT-CI-OPT-001-COVERAGE
title: Pre-edit CI coverage audit and proposed replacement map
type: ci-coverage-audit
status: proposed-for-owner-review
created_at: 2026-10-16
updated_at: 2026-10-16
version: 0.1.0
---

# Pre-edit coverage audit

FACT: merged main is 4b3996ef7cda878e1af3d679454bd1bb873a79c2 with 25 workflows.
Every original parsed workflow, trigger, job, command, service and Git blob is
retained in evidence/VEL-CI-OPT-001/workflow-baseline.json. This matrix is
committed and pinned BEFORE CI edits. No trigger has yet been disabled.

PROPOSAL: one primary automatic workflow, unfiltered PR events (including
ready_for_review), push main full baseline, and workflow_dispatch full current
verification. All 25 originals become manual-only without changing their jobs.
Current governance checks run once on every PR. App/security/recovery use a
conservative classifier; unknown executable/config paths, CI, lockfile, auth,
SQL and migrations select security integration. Ordinary prose-only docs skip
builds/containers. PR cancellation never groups separate main commits.

| Old workflow | Original jobs | Coverage after consolidation |
|---|---|---|
| agent-workflow.yml | validate-handoffs | governance: all root Python tests, pinned validator, exact-head check, Stage 4/5 packs and ZIP artifacts |
| combined-main-baseline.yml | knowledge-and-synthetic, app-build, postgres-synthetic-recovery | governance: all root Python + existing Pair03-06 offline tests; application: one frozen install/build/check; recovery: Pair06 real PostgreSQL CAS/restore |
| implementation-foundation.yml | build | application: single library-isolation suite and Nest/Next build/check |
| implementation-readiness.yml | preparation-guard | governance: readiness validator, all negative root tests, Stage5 pack artifact |
| k2-supabase-auth-rls.yml | real-supabase-security | application (security conditional steps): same five real Auth/RLS/session/lockdown/private-gateway probes, local ephemeral services and cleanup |
| knowledge-metadata.yml | metadata | governance: metadata validator and positive/negative tests |
| option-b-wave02-docx-fidelity.yml | docx-structural-and-portable-recovery, pandoc-independent-word-style-measurement | Manual-only historical research; original jobs/steps/services/artifacts remain intact; no shipping app/release gate supplied by this spike |
| option-b-wave03-privacy-story-profiles.yml | scoped-security-threat-model, temporal-canon-extractor-errors | Manual-only historical research; original jobs/steps/services/artifacts remain intact; no shipping app/release gate supplied by this spike |
| option-b-wave06-recovery.yml | offline-failure-and-recovery-matrix | Manual-only historical research; original jobs/steps/services/artifacts remain intact; no shipping app/release gate supplied by this spike |
| pair03-r11-r07-research.yml | backup-text-and-temporal-profile, calibre-docx-fidelity | Manual-only historical research; original jobs/steps/services/artifacts remain intact; no shipping app/release gate supplied by this spike; duplicated offline tests stay in governance; Pair06 CAS/restore stays conditional in recovery |
| pair04-offline-provider-corpus.yml | no-network-research-contract | Manual-only historical research; original jobs/steps/services/artifacts remain intact; no shipping app/release gate supplied by this spike; duplicated offline tests stay in governance; Pair06 CAS/restore stays conditional in recovery |
| pair05-synthetic-rules-tiptap.yml | synthetic-scoped-guidance, tiptap-proposed-edits | Manual-only historical research; original jobs/steps/services/artifacts remain intact; no shipping app/release gate supplied by this spike; duplicated offline tests stay in governance; Pair06 CAS/restore stays conditional in recovery |
| pair06-legal-postgres-recovery.yml | license-privacy-evidence-index, postgres-cas-backup-restore | Manual-only historical research; original jobs/steps/services/artifacts remain intact; no shipping app/release gate supplied by this spike; duplicated offline tests stay in governance; Pair06 CAS/restore stays conditional in recovery |
| r01-manifest.yml | synthetic-parser | governance: root R01 tests |
| r01-review-packet.yml | review-packet-synthetic | governance: root R01 review/mapping tests |
| r05-tiptap3-spike.yml | editor-spike | Manual-only historical research; original jobs/steps/services/artifacts remain intact; no shipping app/release gate supplied by this spike |
| r06-synthetic-research.yml | synthetic-contract | Manual-only historical research; original jobs/steps/services/artifacts remain intact; no shipping app/release gate supplied by this spike |
| r07-story-state-contract.yml | story-state | governance: existing offline story-state tests |
| r18-browser-recovery.yml | browser-recovery | Manual-only historical research; original jobs/steps/services/artifacts remain intact; no shipping app/release gate supplied by this spike |
| r18-framework-comparison.yml | authoring | Manual-only historical research; original jobs/steps/services/artifacts remain intact; no shipping app/release gate supplied by this spike |
| r18-postgres-memory.yml | postgres-memory | Manual-only historical research; original jobs/steps/services/artifacts remain intact; no shipping app/release gate supplied by this spike |
| r18-retrieval-benchmark.yml | lexical, semantic | Manual-only historical research; original jobs/steps/services/artifacts remain intact; no shipping app/release gate supplied by this spike |
| r18-story-memory.yml | memory | Manual-only historical research; original jobs/steps/services/artifacts remain intact; no shipping app/release gate supplied by this spike |
| stage4-independent-cursor-evidence.yml | independently-reproduce | governance: original artifact hashes + 17 archived tests; manual original Python-version matrix retained |
| stage4-synthetic-chapter-contract.yml | chapter-contract | governance: root chapter tests; archived workflow retains compileall on manual dispatch |

Historical browser/Tiptap/semantic-vector/DOCX/Pandoc/Calibre research remains
reproducible by explicit dispatch of the preserved workflow, not an automatic
shipping-app security gate. This does not promote spike evidence to product
acceptance. Full primary dispatch runs all current core governance, application,
Auth/RLS/session and PostgreSQL recovery checks; it does not run every archived
research benchmark. Those manual jobs retain their original separate controls.

PR #68 proposed book_privileges_regression.sql and hosted preflight are NOT on
this main. Do not cherry-pick its product/schema changes. Primary CI will run
those checks when their source lands; removal of an existing integration test
must fail closed. Their absence on current main is a cross-PR coverage gap,
not a claimed privilege regression PASS. The known excess books-default grant
and hosted acceptance hold remain owned by PR #68, untouched by this task.

FACT: classic main protection returns 404 "Branch not protected" and effective
branch rules return []. No check-name admin update is currently required or
performed. Proposed stable final name is "Vellistry CI gate"; owner alone may
configure protection later. Existing names are preserved in manual archives.

FACT: fresh latest-300 run sample and counts are retained separately. Read-only
billing usage API returned 404 and explicitly required additional user scope.
No scope refresh or billing change is authorized/attempted. Actual billable
minutes/cost reduction is unavailable, never inferred from run starts or
wall-clock spans (which include blocked/queued runs). Local routing projections
must be labeled structural estimates until real post-merge observations exist.
~~~~~~

### `.github/workflows/agent-workflow.yml` @ `6528ae05ea8a351b66a9ee5a06553ded345d6ce5`

~~~~~~markdown
name: Agent workflow
on:
  workflow_dispatch:
  pull_request:
    paths:
      - 'docs/agent-workflow/**'
      - 'scripts/agent_workflow.py'
      - 'tests/test_agent_workflow.py'
      - 'tests/test_handoff_recovery.py'
      - 'scripts/handoff_recovery.py'
      - 'scripts/export_level_b_handoff.py'
      - 'tests/test_level_b_export.py'
      - 'docs/agent-workflow/LEVEL-B-AGENT-PROMPT.md'
      - 'docs/specs/**'
      - 'scripts/spec_traceability.py'
      - 'tests/test_spec_traceability.py'
      - 'scripts/export_stage4_independent_packet.py'
      - 'tests/test_stage4_independent_packet.py'
      - '.github/workflows/agent-workflow.yml'
  push:
    branches: [main, 'feat/agent-workflow-*']
    paths:
      - 'docs/agent-workflow/**'
      - 'scripts/agent_workflow.py'
      - 'tests/test_agent_workflow.py'
      - 'tests/test_handoff_recovery.py'
      - 'scripts/handoff_recovery.py'
      - 'scripts/export_level_b_handoff.py'
      - 'tests/test_level_b_export.py'
      - 'docs/agent-workflow/LEVEL-B-AGENT-PROMPT.md'
      - 'docs/specs/**'
      - 'scripts/spec_traceability.py'
      - 'tests/test_spec_traceability.py'
      - 'scripts/export_stage4_independent_packet.py'
      - 'tests/test_stage4_independent_packet.py'
      - '.github/workflows/agent-workflow.yml'
permissions:
  contents: read
jobs:
  validate-handoffs:
    name: Validate pinned agent handoffs
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
          # Pin exported task evidence to the stable PR head, never the synthetic
          # GitHub pull/<id>/merge ref that can disappear after merges.
          ref: ${{ github.event.pull_request.head.sha || github.sha }}
      - uses: actions/setup-python@v5
        with:
          python-version: '3.12'
      - name: Assert immutable packet source is exact event commit
        env:
          EXPECTED_PR_HEAD: ${{ github.event.pull_request.head.sha || github.sha }}
        run: |
          test "$(git rev-parse HEAD)" = "$EXPECTED_PR_HEAD"
          git cat-file -t "$EXPECTED_PR_HEAD" | grep -qx commit
      - name: Install metadata dependency
        run: python -m pip install 'PyYAML>=6.0,<7'
      - name: Test agent handoff generation and validation
        run: python -m unittest discover -s tests -p 'test_agent_workflow.py' -v
      - name: Validate agent task, ContextPack and ExecutionBundle
        run: python scripts/agent_workflow.py validate
      - name: Test detached cold-start reconstruction
        run: python -m unittest discover -s tests -p 'test_handoff_recovery.py' -v
      - name: Test Level B packet export and tamper rejection
        run: python -m unittest discover -s tests -p 'test_level_b_export.py' -v
      - name: Test Stage 4 spec traceability and negative cases
        run: python -m unittest discover -s tests -p 'test_spec_traceability.py' -v
      - name: Validate source-to-spec references
        run: python scripts/spec_traceability.py validate
      - name: Generate current-scope Stage 4 ContextPack
        run: python scripts/agent_workflow.py pack docs/agent-workflow/tasks/VEL-TASK-0002.yaml
      - name: Validate generated Stage 4 ContextPack
        run: python scripts/agent_workflow.py validate
      - name: Upload proposed Stage 4 ContextPack
        uses: actions/upload-artifact@v4
        with:
          name: vellistry-stage4-chapter-context
          path: docs/agent-workflow/context-packs/VEL-CP-0002.md
          retention-days: 14
          if-no-files-found: error
      - name: Test independent Stage 4 cold-start packet and tamper rejection
        run: python -m unittest discover -s tests -p 'test_stage4_independent_packet.py' -v
      - name: Export reproducible independent Stage 4 cold-start ZIP
        run: python scripts/export_stage4_independent_packet.py --output stage4-independent-agent-packet.zip
      - name: Upload isolated Stage 4 external-agent packet
        uses: actions/upload-artifact@v4
        with:
          name: vellistry-stage4-independent-agent-packet
          path: stage4-independent-agent-packet.zip
          retention-days: 14
          if-no-files-found: error
      - name: Export validated Level B agent packet
        run: python scripts/export_level_b_handoff.py --output level-b-test-packet.zip
      - name: Upload Level B agent packet
        uses: actions/upload-artifact@v4
        with:
          name: vellistry-level-b-cold-start
          path: level-b-test-packet.zip
          retention-days: 14
          if-no-files-found: error
~~~~~~

### `.github/workflows/combined-main-baseline.yml` @ `c093a8cc91a35c6fc80babf9e73556e9b125eeb9`

~~~~~~markdown
name: Combined research and application baseline

# Validates one integrated checkout after rapid research/stack PR merges.
# This is research-and-build evidence, NOT product security or release certification.
on:
  pull_request:
    paths:
      - 'CURRENT-STATE.md'
      - 'docs/research/SIX-PAIR-RESEARCH-TO-DESIGN-GATE-2026-10-09.md'
      - 'docs/plans/DESIGN-ENTRY-DECISION-2026-10-10.md'
      - 'docs/plans/RESEARCH-PAIR-AND-PREIMPLEMENTATION-DESIGN-2026-10-09.md'
      - '.github/workflows/combined-main-baseline.yml'
      - 'tests/test_research_design_gate.py'
      - 'apps/**'
      - 'supabase/**'
      - 'docs/research/experiments/**'
      - 'docs/research/spikes/**'
      - 'docs/specs/**'
      - 'scripts/**'
      - 'tests/**'
      - 'package.json'
      - 'pnpm-workspace.yaml'
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read

jobs:
  knowledge-and-synthetic:
    name: Current-gate integrity and merged Python contracts
    runs-on: ubuntu-latest
    timeout-minutes: 12
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - uses: actions/setup-python@v5
        with:
          python-version: '3.12'
      - name: Install YAML parser
        run: python -m pip install 'PyYAML>=6,<7'
      - name: Validate accepted decision and history metadata
        run: |
          python -m unittest discover -s tests -p 'test_knowledge_metadata.py' -v
          python scripts/check_knowledge_metadata.py
      - name: Verify six-pair research and approval boundaries
        run: python -m unittest discover -s tests -p 'test_research_design_gate.py' -v
      - name: Regress source-preserving R01 mapping gates
        run: |
          python -m unittest discover -s tests -p 'test_r01_*.py' -v
      - name: Regress Stage 3 agent provenance
        run: |
          python -m unittest discover -s tests -p 'test_agent_workflow.py' -v
          python -m unittest discover -s tests -p 'test_handoff_recovery.py' -v
          python -m unittest discover -s tests -p 'test_level_b_export.py' -v
          python scripts/agent_workflow.py validate
      - name: Regress Stage 4 source and synthetic chapter contracts
        run: |
          python -m unittest discover -s tests -p 'test_spec_traceability.py' -v
          python scripts/spec_traceability.py validate
          python -m unittest discover -s tests -p 'test_stage4_chapter_contract.py' -v
      - name: Regress merged Pair 03–06 offline research evidence
        run: |
          python -m unittest discover -s docs/research/experiments -p 'test_pair03_*.py' -v
          python -m unittest discover -s docs/research/experiments -p 'test_r07_story_state_contract.py' -v
          python -m unittest discover -s docs/research/experiments -p 'test_pair04_offline_provider.py' -v
          python -m unittest discover -s docs/research/experiments -p 'test_pair05_synthetic_rules.py' -v
          python -m unittest discover -s docs/research/experiments -p 'test_pair06_legal_registry.py' -v

  app-build:
    name: Integrated Next and Nest build / typecheck
    runs-on: ubuntu-latest
    timeout-minutes: 20
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '24'
      - name: Install merged pnpm workspace (no hosted keys)
        run: pnpm install --no-frozen-lockfile
      - name: Build and typecheck Nest API
        run: |
          pnpm --filter @vellistry/api build
          pnpm --filter @vellistry/api typecheck
      - name: Build and typecheck Next web
        env:
          NEXT_TELEMETRY_DISABLED: '1'
        run: |
          pnpm --filter @vellistry/web build
          pnpm --filter @vellistry/web typecheck

  postgres-synthetic-recovery:
    name: Merged PostgreSQL CAS and restore contract
    runs-on: ubuntu-latest
    timeout-minutes: 16
    services:
      postgres:
        image: postgres:16
        env:
          POSTGRES_USER: postgres
          POSTGRES_PASSWORD: pair06synthetic
          POSTGRES_DB: pair06db
        ports:
          - 5432:5432
        options: >-
          --health-cmd "pg_isready -U postgres -d pair06db"
          --health-interval 5s
          --health-timeout 3s
          --health-retries 10
    env:
      PGPASSWORD: pair06synthetic
      PAIR06_DATABASE_URL: postgresql://postgres:pair06synthetic@127.0.0.1:5432/pair06db
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: '3.12'
      - name: Install PostgreSQL client binaries
        run: |
          sudo apt-get update -qq
          sudo apt-get install -y postgresql-client
      - name: Rerun disposable Pair 06 atomicity and independent restore
        run: python -m unittest discover -s docs/research/experiments -p 'test_pair06_postgres_operations.py' -v
~~~~~~

### `.github/workflows/k2-supabase-auth-rls.yml` @ `c36559d27ead732ca310b97e5113efef560192ae`

~~~~~~markdown
name: K2 real local Supabase Auth + author RLS security

on:
  pull_request:
    paths:
      - "apps/api/**"
      - "supabase/**"
      - ".github/workflows/k2-supabase-auth-rls.yml"
      - "docs/research/K2-LOCAL-SUPABASE-AUTH-RLS-2026-10-09.md"
  push:
    paths:
      - "apps/api/**"
      - "supabase/**"
      - ".github/workflows/k2-supabase-auth-rls.yml"
      - "docs/research/K2-LOCAL-SUPABASE-AUTH-RLS-2026-10-09.md"
  workflow_dispatch:

# Avoid overlapping disposable Supabase stacks on repeated PR updates.
concurrency:
  group: vellistry-k2-supabase-${{ github.event.pull_request.number || github.ref }}
  cancel-in-progress: true

permissions:
  contents: read

jobs:
  real-supabase-security:
    runs-on: ubuntu-latest
    timeout-minutes: 30
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v4
      - uses: actions/setup-node@v4
        with:
          node-version: "24"
      - name: Install no-paid-service project dependencies
        run: pnpm install --no-frozen-lockfile
      - name: Pick free, temporary CI-only Supabase API/DB ports
        run: |
          python3 - <<'PY'
          import socket
          from pathlib import Path
          ports = []
          for _ in range(2):
              with socket.socket() as sock:
                  sock.bind(("127.0.0.1", 0))
                  ports.append(sock.getsockname()[1])
          cfg = Path("supabase/config.toml")
          raw = cfg.read_text(encoding="utf-8")
          for old, new in zip((54321, 54322), ports):
              marker = f"port = {old}"
              if marker not in raw:
                  raise SystemExit(f"Local Supabase CI port marker missing: {marker}")
              raw = raw.replace(marker, f"port = {new}", 1)
          cfg.write_text(raw, encoding="utf-8")
          print(f"Disposable local Supabase API/DB CI ports selected: {ports}")
          PY
      - name: Start real disposable local Supabase services
        run: |
          # Retain database, Auth, PostgREST, API gateway. Exclude unrelated services.
          # Do not use a linked cloud project or production credentials.
          pnpm exec supabase start --exclude realtime,storage-api,imgproxy,mailpit,studio,edge-runtime,logflare,vector,supavisor,postgres-meta
      - name: Compile genuine NestJS API
        run: pnpm --filter @vellistry/api build
      - name: Validate actual sign-up, RLS, tokens, cross-author data and logout behavior
        shell: bash
        run: |
          set -euo pipefail
          # CLI output is trusted and local; NEVER print its secret values.
          set -a
          source <(pnpm exec supabase status -o env)
          set +a
          export SUPABASE_URL="${API_URL}"
          export SUPABASE_PUBLISHABLE_KEY="${PUBLISHABLE_KEY:-${ANON_KEY:-}}"
          export SUPABASE_TEST_SERVICE_KEY="${SERVICE_ROLE_KEY:-${SECRET_KEY:-}}"
          export API_PORT=4100
          export API_HOST=127.0.0.1
          export VELLISTRY_TEST_API_URL=http://127.0.0.1:4100
          test -n "${SUPABASE_URL}"
          test -n "${SUPABASE_PUBLISHABLE_KEY}"
          test -n "${SUPABASE_TEST_SERVICE_KEY}"
          node apps/api/dist/main.js >nest-k2.log 2>&1 &
          SERVER_PID=$!
          cleanup() {
            kill "$SERVER_PID" 2>/dev/null || true
            # Restrict diagnostic output to application startup/error lines.
            tail -30 nest-k2.log || true
          }
          trap cleanup EXIT
          ready=0
          for i in $(seq 1 60); do
            if curl --fail --silent -o /dev/null http://127.0.0.1:4100/v1/health; then ready=1; break; fi
            sleep 1
          done
          if [ "$ready" != "1" ]; then echo "Nest API unavailable"; exit 1; fi
          node apps/api/tests/supabase-auth-rls.integration.mjs
          node apps/api/tests/k2b-session-exposure.integration.mjs
          # Observe auth.sessions row removal under local/global logout, separately from JWT validity.
          node apps/api/tests/k2b-active-session-row.integration.mjs
          # This final experiment REVOKES grants and intentionally breaks Nest's
          # existing PostgREST book transport; run it last in disposable CI.
          node apps/api/tests/k2b-data-api-lockdown.integration.mjs
          # Research-only restricted Nest / Postgres route proof uses a separate role.
          # Run AFTER old route is deliberately broken by grant-lockdown diagnostic.
          test -n "${DB_URL:-}"
          node apps/api/tests/k2b-private-nest-gateway.integration.mjs
      - name: Attach synthetic-only results (no token or password)
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: k2-supabase-auth-rls-results
          path: |
            k2-auth-rls-results.json
            k2b-session-observations.json
            k2b-live-session-row-observations.json
            k2b-lockdown-observations.json
            k2b-private-gateway-observations.json
          if-no-files-found: ignore
          retention-days: 7
      - name: Shut down disposable local Supabase
        if: always()
        run: pnpm exec supabase stop --no-backup || true
~~~~~~

## Execution reporting
Return an ExecutionBundle with FACT / INTERPRETATION / PROPOSAL sections,
tests actually performed, changes, evidence gaps, and pending owner approval.
