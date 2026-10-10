---
id: VEL-PLAN-IMPLEMENTATION-READINESS-20261010-001
title: Stage 5 preparation from six-wave research to controlled agentic implementation
type: proposed-implementation-preparation-plan
status: proposed-owner-review
created_at: 2026-10-10
updated_at: 2026-10-10
owner: project_owner
version: 0.1.0
sources:
  - CURRENT-STATE.md
  - docs/requirements/MVP-SCOPE-DECISION-2026-10-09.md
  - docs/plans/OPTION-B-WAVE05-MVP-FINAL-DECISION-2026-10-10.md
  - docs/research/OPTION-B-WAVE06-G10-FINAL-CLOSEOUT-MVP-DESIGN-ENTRY-2026-10-10.md
  - docs/history/2026-10-10-owner-delegated-mvp-design-entry.md
  - docs/agent-workflow/handoff-evaluations/VEL-HO-0003.md
---

# Stage 5 preparation — implementation control plane

## Current position and what this stage delivers

Waves 1–6 have completed bounded research passes; owner-selected product scope and stack are recorded. The Stage 4 independent synthetic Cursor/ContextPack handoff is owner-accepted, but it did **not** produce a real product chapter editor. The later delegated research closeout explicitly permits **two synthetic-only concept-design explorations and editable Figma Design**, then actual consented author testing and owner design signoff. The current request authorizes **preparation** of coding agents, specifications, dependencies and CI here in chat; it does not by itself approve feature implementation, real-author beta, spending or public deployment.

**Deliverables of this PR:** architecture boundary map; agent role/approval protocol; typed, acyclic task DAG with explicit gates; executable first preparation task template; ContextPack generation using existing Git-pinned exporter; focused readiness validator, negative regression tests and GitHub CI; source-of-truth status update. No new runtime features or migrations.

## Authority hierarchy

1. Owner-accepted: Constitution, source-of-truth/governance, eight-area MVP, Tiptap 3, Next/Nest/Supabase, immutable source variants, accepted Waves 1–3 policies, owner free-or-paid BYOK clarification.
2. Bounded product/design policy: Wave 5's smallest AI scope, Wave 6's permitted synthetic design entry, specified but untested research failure modes and privacy/operating targets.
3. Proposed in this PR: endpoint/DTO names, task graph, workflow playbook and future build sequence. These do not override a design decision or count as independently approved code.
4. Historical/synthetic evidence: browser and PostgreSQL experiments, independent Cursor Stage 4, etc. Must not be relabeled as shipping product acceptance.

## Roadmap of explicitly gated handoffs

| Phase | Exit artifact | Authority to continue |
|---|---|---|
| **P0 — Preparation (this PR)** | Accepted implementation-role plan, dependency DAG, testable source-gated first prep task, green CI | Owner reviews/merges after checks; may continue research/spec maintenance but **not feature code** |
| **P1 — Synthetic concept UI** | Direction A writing-first and direction B story-workspace-first, exclusively invented books/stories/accounts | Limited design-entry choice from Wave 6; no real manuscripts, keys, paid tools or running product |
| **P2 — Canonical UX** | Editable Figma Design components, 11 task scenarios, genuine consented writer testing, keyboard/accessibility findings and owner final design approval | Design acceptance G_DESIGN, recorded by owner; no invented participants |
| **P3 — Explicit implementation kickoff** | Approved architecture/feature specs, revised acceptance criteria, security plan, ContextPack per coding task and owner authorization | G_CODE: new owner decision distinct from design-entry, even if design is signed off |
| **P4 — Vertical product slices** | Isolated author account/book → chapters → real Tiptap save/CAS/recover → portable interchange → temporal profiles/rules → optional two-action BYOK → persisted undo | Every slice gets task/pack/evidence PR and negative tests; DAG restricts parallel conflicting writes |
| **P5 — Pilot and release** | Actual user isolation, signed-out-token residual review, full Auth/DB/Storage encrypted restore, route-level privacy, legal and writer acceptance | G_PRIVATE_PILOT then G_RELEASE; **both pending**, RPO/RTO targets unverified |

The current Next/Nest scaffold is useful, but its original `/v1/books` route and research fixture do not prove an accepted production API. Do not carry K2 restricted-gateway research directly into production: the owner elected to keep Supabase Auth + RLS/PostgREST for now while acknowledging the residual short-lived JWT access window as a development-stage risk. Disclose that behavior; block real private manuscript release until explicit security/privacy approval.

## Agent dispatch pattern — no new proprietary control plane

- Coordinator checks exact `main`, approved UI/ADR/spec status, unresolved PR conflicts, and chooses a single DAG node.
- Write task `VEL-TASK-NNNN.yaml` with scope, denylist and approval-required actions; create in its own branch. Generate distinct immutable `VEL-CP-NNNN` on committed exact head using `scripts/agent_workflow.py`, not old Stage 4 packs. Tool exports are reproducible, but **do not execute** Cursor/Codex.
- An implementation agent works in one branch/worktree. Keep handoff context narrow; record agent/model/version and permission envelope, actual commands, exit codes, changed paths and tests in an unedited ExecutionBundle.
- Independent verifier reruns test scenarios, checks path/ownership/scope and file-presence after stacked merges. AI review is advisory; sole project owner approves meaningful choices and PR integration.
- After merge, inspect `main` and Actions, update top of `CURRENT-STATE.md`, preserve previous status as historical, and unblock dependent work only when testable criteria and human decision both exist.

## Engineering standards and quality minimum

- TypeScript/pnpm existing workspace; keep API contracts versioned and typechecked. No new dependency or platform switch without review.
- One data authority for accepted manuscripts: DB-committed chapter JSON+revision; local recovery drafts never auto-override the server. User-visible save must match acknowledged server commit.
- Book/author RLS, forged-owner rejection, same-name-book isolation and negative direct PostgREST checks. Current JWT revocation limitation disclosed rather than hidden.
- Stale CAS, idempotency, duplicate request, loss-of-ACK, concurrent tabs, accepted-diff undo and account switching need positive/negative tests with real persistence before product readiness.
- Manual AI-OFF and non-AI editing must always work; no AI silently changes source/canon. OpenRouter key memory-only for MVP, explicit preview, relevant rules, request failures and secure proxy route (future).
- Accessible name/keyboard/IME, DOCX semantic-loss disclosure, verified restore, no confidentiality/keys/prompt logging. CI fixture/data must be synthetic and test logs redact secrets.
- Preserve "fact / interpretation / proposal", actual run IDs and source digests; no fake 100% claims from synthetic tests.

## Owner-review checklist for this preparatory PR

- [ ] Confirm roadmap/DAG aligns with the accepted eight areas and two-action AI scope.
- [ ] Confirm the design-first and later owner-authorization boundaries remain visible and enforceable.
- [ ] Check the previous 21-lost-files incident has a regression/final-main-tree response.
- [ ] Review security risk deferral language (development only), restore/portability risks and provider privacy gate.
- [ ] Inspect new readiness CI on exact PR head and independently confirm task `VEL-TASK-0003` and ContextPack are **preparatory**, not automatically approved coding jobs.
- [ ] Approve or request changes and merge. PR passing CI is not owner approval.

## Next authorized hands-on work

Prepare **two synthetic-only Figma concept directions** (unless the owner gives a different instruction); study their effect on the accepted MVP journeys and make a canonical editable design. No product coding dispatch until final Figma UX signoff and a **separate** explicit kickoff authorization. Keep open Stage 3 Issue #18 distinct from Stage 4 acceptance.
