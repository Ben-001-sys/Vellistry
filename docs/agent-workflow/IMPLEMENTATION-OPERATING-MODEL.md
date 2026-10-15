---
id: VEL-GOV-IMPLEMENTATION-OPERATING-MODEL-20261010-001
title: Agentic implementation operating model and handoff controls
type: proposed-operating-protocol
status: proposed-owner-review
created_at: 2026-10-10
updated_at: 2026-10-15
owner: project_owner
version: 0.1.3
source_refs:
  - PROJECT-CONSTITUTION.md
  - SOURCE-OF-TRUTH.md
  - docs/agent-workflow/README.md
  - docs/agent-workflow/STAGE4-INDEPENDENT-DISPATCH.md
  - docs/agent-workflow/handoff-evaluations/VEL-HO-0003.md
  - docs/history/2026-10-10-owner-delegated-mvp-design-entry.md
---

# Vellistry — agentic coding execution and review (proposed)

**Accepted tool-role override (2026-10-14):** [ADR-0008](../decisions/ADR-0008-codex-primary-agentic-implementation-workflow.md) selects **Codex as the default implementation agent**. This document's historical Cursor evidence remains valid, but older blanket references to Cursor as the current implementer are superseded. ChatGPT coordinates and reviews, Codex implements bounded approved tasks, GitHub records provenance, and the owner authorizes high-impact changes. This override does not approve cloud database writes, migrations, real author data, paid calls or release.

## Goal and current permission boundary

**Current-status correction (2026-10-15):** The immediately following preparation-only wording records the earlier project stage. It is **not** a blanket prohibition overriding later explicitly authorized implementation slices such as merged IMP-001 (#64) and the unmerged, Codex-executed IMP-001B (#68). Each new coding or hosted-database action still requires its own bounded authorization, source revision and evidence. This operating-model proposal is not itself an authorization.

**Historical preparation-stage boundary:** This was the **preparation of future agentic implementation**; it did not authorize agents to start shipping features. Research Waves 1–6 are bounded-closed; a **synthetic-only UI concept exploration** is authorized, followed by editable canonical Figma Design, real consented writer validation and explicit owner design signoff. **Feature coding, new production migrations, paid API calls, real unpublished-manuscript processing and deployment remain blocked.**

Reuse the successful *bounded* Stage 4 clean-room handoff pattern and Git-pinned source authority. The Stage 4 Cursor Grok 4.7 synthetic 17/17 run verifies **one task's reproducible evidence**, not a standing claim that every new task or tool is independent or production-ready. Stage 3 Issue #18 is still separately open.

## Roles and approval

| Role | Accountable actions | Boundaries |
|---|---|---|
| **Project owner** | Final MVP/design signoff, source-rule and security policy decisions, task approval, PR acceptance and merge, production spend/release | Self-review permitted under accepted constitution; never fabricate another approver |
| **ChatGPT — architect/coordinator** | Parse owner goals, inspect repo/CI, maintain specs, dependency plan and ContextPack proposals, assess agent outputs and risks, prepare PR reviews | No authority to change accepted direction or mark tests/owner decisions PASS without evidence; no background execution claims |
| **Codex — default implementer (ADR-0008)** | Single approved ticket in isolated worktree/branch; implement and test changes, produce actual terminal evidence and ExecutionBundle | No unsolicited migrations/secrets, architecture rewrite, destructive operation, merge or deployment; Cursor only by explicit task reassignment |
| **Independent reviewer** (can be another model/tool) | Read diff, challenge security/edge cases, independently reproduce checks, report FACT/INTERPRETATION/PROPOSAL | Advisory, not independent human approval; same-agent review is not an independent rerun |
| **CI runner** | Reproduce deterministic contracts on pinned SHA, compare source and artifacts, show regressions | Green checks are not author usability, privacy certification, original-source inspection or successful release |

Tools are **roles, not licenses or subscriptions**; no new paid agent/MCP service is approved. An agent's tool/model/version, exact permissions and execution environment belong in each task report.

## Source authority and initialization sequence

Before an agent starts, coordinator must read in order:
1. `PROJECT-CONSTITUTION.md` and `SOURCE-OF-TRUTH.md`.
2. Latest **top** section of `CURRENT-STATE.md` plus merged Git SHA and current open PR/issues (historical lower sections may be superseded).
3. Accepted MVP scope, ADR-0003/0006/0007/**0008**, Wave 5 MVP decision and Wave 6 G10 (observe provisional vs accepted status and gated evidence).
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
