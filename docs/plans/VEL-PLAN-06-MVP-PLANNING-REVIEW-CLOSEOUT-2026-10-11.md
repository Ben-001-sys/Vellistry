---
id: VEL-PLAN-06-REVIEW-CLOSEOUT-20261011-001
title: PLAN-06 — full MVP implementation planning consistency review and owner handoff
type: planning-review-and-decision-register
status: review-ready-proposal-not-independent-human-approval
created_at: 2026-10-11
updated_at: 2026-10-11
owner: project_owner
version: 0.1.0
sources:
  - docs/plans/VEL-IMPLEMENTATION-MASTER-PLAN-2026-10-11.md
  - docs/plans/VEL-PLAN-01-SCOPE-AND-BASELINE-INVENTORY-2026-10-11.md
  - docs/plans/VEL-PLAN-01-149-FEATURE-TO-TEST-CROSSWALK-2026-10-11.md
  - docs/plans/VEL-PLAN-02-ARCHITECTURE-DATA-CONTRACTS-2026-10-11.md
  - docs/plans/VEL-PLAN-03-UX-NAVIGATION-STATES-2026-10-11.md
  - docs/plans/VEL-PLAN-04-TEST-SECURITY-RECOVERY-2026-10-11.md
  - docs/plans/VEL-PLAN-05-CURSOR-AGENT-WORKFLOW-2026-10-11.md
  - docs/plans/VEL-CURSOR-DESKTOP-SETUP-PLAN-2026-10-11.md
  - docs/agent-workflow/IMPLEMENTATION-TASK-DEPENDENCIES.yaml
---

# PLAN-06 — planning synthesis, decisions and exact next-phase handoff

**Current status:** This is the sixth and last **documentation planning package** for the user's instruction to complete PLAN-01..06 **at once** after PR #60 merged. This record is a consolidated self-review against linked source artifacts, **not a separate external human review, actual desktop baseline, architecture ADR approval, acceptance test run or feature-code authorization**. A full planning package may be *ready for owner approval* while some high-risk implementation details are held behind their own future phase gates.

## 1. Six planning packages and source-to-output trace

| Plan | Output committed for review | Coverage achieved | Explicitly not claimed |
|---|---|---|---|
| PLAN-01 | [Baseline source inventory](VEL-PLAN-01-SCOPE-AND-BASELINE-INVENTORY-2026-10-11.md) + [149-ID feature/test crosswalk](VEL-PLAN-01-149-FEATURE-TO-TEST-CROSSWALK-2026-10-11.md) | all 396 sourced horizon classifications accounted for in counts; 149 included mapped ID-by-ID; existing repo read-only files inventoried; source status preserved | 149 executable tests or original 396-feature owner approval |
| PLAN-02 | [Domain and API blueprint](VEL-PLAN-02-ARCHITECTURE-DATA-CONTRACTS-2026-10-11.md) | accepted stack separated from proposed entities/CRUD/CAS/Story Profiles/rules/provider/deletion; owner/security decision log | production schema/RPC/migration is approved or implemented |
| PLAN-03 | [Routes/states/author interactions](VEL-PLAN-03-UX-NAVIGATION-STATES-2026-10-11.md) | twelve view families, critical state machines, Figma master and negative prototype behaviors | interactive UI or pixel-perfect designs |
| PLAN-04 | [Tests, threat model and recovery](VEL-PLAN-04-TEST-SECURITY-RECOVERY-2026-10-11.md) | multi-layer tests, negative risk matrix, lost-ACK/two-tab, DOCX/backup/provider/a11y/private-pilot gates | any integrated tests were run or security/cost/legal verified |
| PLAN-05 | [Cursor/Desktop workflow](VEL-PLAN-05-CURSOR-AGENT-WORKFLOW-2026-10-11.md) | worktree/task/ContextPack/ExecutionBundle policy, human checkpoints, no-paid default and merge evidence | Cursor Desktop installed/configured, Agent dispatched, local builds passed |
| PLAN-06 | This synthesis and review | dependency graph, critical open decisions, gate separation, planning vs next setup handoff | global G_DESIGN/G_CODE/PILOT/RELEASE approval |

## 2. Full MVP implementation order and dependencies

```text
PLAN-01..06 complete as reviewable documents  [this planning package]
      │ Owner accepts planning baseline / approves setup phase separately
      ▼
DESK-01..08: Windows/Cursor/Git/Node/pnpm/Python/Docker/local Supabase
      │ no-feature-change baseline and synthetic-only safe environment
      │ Owner approves the first scoped code task
      ▼
IMP-001: Authenticated Library and account isolation
      ▼
IMP-002: Owned books/chapters, stable order and planning notes
      ▼
IMP-003a: Manual Tiptap3 editor, AI OFF
      ▼
IMP-003b: Atomic accepted revision CAS, autosave, local recovery
      ├───────────────┬──────────────────────┐
      ▼               ▼                      ▼
IMP-005a/b Story   IMP-006 Rules           IMP-004a TXT/DOCX
Profiles & canon   certified source        import/export
      └──────────┬───────┘                     │
                 ▼                             │
         IMP-004b complete archive + clean restore
                 │
                 ▼
        IMP-007 optional OpenRouter BYOK, consent,
              Continue at caret, Rewrite selection
                 ▼
        IMP-008 explicit Accept/Reject/Edit,
            version CAS, Undo, separate canon
                 ▼
        VAL-001 integrated JRN-001..011 security/restore/a11y
                 ▼
        G_PRIVATE_PILOT → controlled real-writer pilot
                 ▼
        G_RELEASE → initial public MVP
```

**Documented dependency nuance:** The existing proposed DAG lists IMP-004 after 003 and IMP-005/006 after 003; the incremental `004a/004b` subdivision is a **recommended delivery split** because a complete archive must contain profiles/rule settings. Workstreams after 003 may overlap ONLY if shared schema/authorization contracts are frozen and Git branches do not overwrite one another. Real model calls remain disabled until proposal acceptance/Undo protections are integrated. The accepted source authority, not this diagram, governs scope.

## 3. Concrete feature/task milestones and completion proof

| Task | Mandatory feature outcome | Test required before merge | Prerequisite |
|---|---|---|---|
| IMP-001 | owned Book Library, correct empty/populated/error/401, identity-switch cleanup | two real local Alice/Bob, direct Nest+PostgREST, client races | Desktop baseline + scoped code gate |
| IMP-002 | chapter CRUD/reorder stable UUID, notes and counts | reorder + reopen retains correct chapters; cross-book denial | IMP-001 |
| IMP-003a | manual Tiptap editor keyboard/search/format, AI OFF | 500+ synthetic words, browser clipboard/IME/focus, supported JSON | IMP-002 |
| IMP-003b | revision CAS, true save ack, idempotent lost-ACK recover/compare | real DB transaction + two-tab/offline/reopen conflict and receipt | IMP-003a; reviewed RPC schema |
| IMP-005a/b | manual profiles, threads and source-backed author fact decisions | exact quote, book + scene-time, approve/edit/dismiss, retcon and Undo-source | IMP-003b |
| IMP-006 | original 260-source verified 134-alias rules with scopes and disabled exclusion | hash/source parity, override/restore, exact effective request, no hidden rules | source pack actual certification |
| IMP-004a | TXT + supported DOCX roundtrip with truthful loss report | supported formatting and corrupt/unsupported fixture cases | IMP-003b |
| IMP-004b | versioned whole-book archive and clean authorized restore/deletion | chapters + accepted profiles + rules restored, no leaked secrets | IMP-005/006 plus base import |
| IMP-007 | optional consented BYOK and only two model-text proposals | no send before consent, caret offset 4, within-paragraph selection, 401/429 | save, profiles, rules; route/privacy check |
| IMP-008 | durable alternative review, transactional Accept/Reject/Undo | stale edits, double accept, reject no mutation, source-reversal review | IMP-007 + CAS |
| VAL-001 | full eight-area integrated release candidate | all JRN-001..011 PASS/FAIL logs on exact code+real browser, data/security/restore/AT | all enabled MVP slices |
| PILOT/RELEASE | protected real author pilot, then public MVP decision | signed-out JWT/private gateway risk, Auth+DB+Storage restore, legal/provider/author consent and operations | explicit separate owner gates |

## 4. Open decision register — planning recommendations, not guessed approvals

| Decision | Current known fact/source basis | Recommended default to be reviewed later | Deadline/blocker |
|---|---|---|---|
| D-01 Auth/session privacy | research observed old signed-out JWT direct PostgREST access; owner tolerated dev-only risk | prefer protecting sensitive manuscript/fact/export via live-session-aware restricted transport; re-test any direct grants; promise immediate revocation only if proven | **Before real manuscript ingestion / private pilot**, review as IMP-001 security invariant |
| D-02 Save transaction | existing RLS chapter/revision DML is read-only; proposed `saveChapter` CAS | protected atomic RPC with expectedRevision, idempotency, immutable accepted history, receipt lookup | Before IMP-002/003 mutation PR |
| D-03 Recovery retention | local draft may be valuable yet private on shared device | explicit retain/discard, per-author/book/chapter/revision scope; sensitive draft protection and expiry reviewed | Before IMP-003b complete |
| D-04 Rules source activation | 260 originals and 134-alias intended ON/OFF policy owner accepted; body pack remains sensitive | versioned certified original manifest/hash + safe distribution; don't substitute synthesized text | Before IMP-006 real source activation |
| D-05 Story time/candidate extraction | distinct narrative order and scene chronology; synthetic extraction errs sometimes | exact-quote/provenance/story-time author review, no canon auto-approval | Before IMP-005b |
| D-06 DOCX subset | Calibre roundtrip lost heading styles; direct semantic research subset works in bounded tests | direct semantic converter for supported styles, loss report, leave unsupported cases visible | Before IMP-004a |
| D-07 Backup/delete | portable book state includes approved profiles, rules, revisions; Auth/DB/Storage broader ops distinct | versioned manifest/hashes with clean restore, documented retention/backup lag | Before IMP-004b and real pilot |
| D-08 AI provider | selected OpenRouter-first BYOK, downstream route not verified | minimal pinned evaluated route with current provider privacy, cost, locale and key handling | Before IMP-007 real model calls |
| D-09 Hosting/worker | cloud choice/job worker not accepted | begin no-paid local, defer worker/host selection until operational need verified | Before hosted private pilot |
| D-10 Actual writer validation | synthetic prototypes are not real writer evidence | consented multi-journey tasks with real keyboard/AT observations | Before private pilot/public MVP |
| D-11 Gate policy/UX maturity | owner permits UI improvements during development | approve bounded implementation-ready flows, do not require whole Figma perfect; separate scoped G_DESIGN/G_CODE | Before first code task |
| D-12 Cost/paid external services | no mandatory paid service approved; author's BYOK may itself be paid | no app-funded inference/subscription; explicit owner approval on any external spend | Every paid integration |

These decisions have owners/trigger points but are **not all preconditions to opening Cursor Desktop**: desktop preflight can proceed after the master plan is accepted, entirely with local synthetic data and no code change. D-01, D-02, D-04, D-06, D-08 can be resolved in design/spec PRs immediately before their risky implementation slices; high-impact migrations, private-data handling and provider spend cannot be inferred from plan adoption.

## 5. Review of authority, testing and internal consistency

1. **Product:** all eight M areas retained and no additional cover/EPUB/team subscription product silently added. Two optional AI actions only. Manual editor and exports independent of provider key.
2. **Feature catalog:** original 396 IDs preserved; 149 included/limited entries mapped individually to tasks and **proposed unique test IDs**. No renumbering or source-status promotion. 247 remain later unscheduled.
3. **Stack:** accepted Next16/React19/Nest11/Supabase Auth/RLS/Tiptap3; no unapproved second Auth, mandatory cloud, worker/provider or billing.
4. **Security:** dev-only signed-out JWT research limitation kept open; direct PostgREST vs Nest distinctions; no production/private manuscript test PASS claimed.
5. **Editor:** Tiptap actual app missing in inspected web package; chapter history SQL exists read-only. Plan does not mislabel this as functioning write path.
6. **Saves:** local draft, accepted revision, unknown ACK and true conflict remain separate; no implicit autosave acknowledgments.
7. **Canon:** pending candidates vs approved author facts distinct, exact source and story-time, Undo/retraction/retcon states defined.
8. **Rules:** owner agreement to default policy (not activated source) respected; no private rule bodies invented.
9. **Portability:** DOCX loss caveats preserved; complete backup requires clean restore and profile/rules included.
10. **AI:** no model quality guarantee, provider route vetting outstanding, no model call during planning.
11. **UX:** existing Figma master drives incremental UI; observed Make/Lovable defects become regressions; no pixel-perfect blocker.
12. **Agent governance:** PR #59 remains PAUSED; no Cursor Desktop or feature code execution on this planning branch; all gate states remain pending.
13. **Evidence:** documents are self-reviewed against source artifacts; this is not an external independent reviewer or live test run. Actual owner review/PR merge remains a separate action.

## 6. Evidence/approval classification by package

| Package | Document prepared | Source consistency review | Real code/desktop execution | Owner signoff |
|---|---|---|---|---|
| PLAN-01 baseline + crosswalk | YES | SOURCE-RECONCILED (149 of 149 unique IDs) | NOT_RUN | PENDING |
| PLAN-02 architecture | YES | MATCHES accepted stack; schema specifics proposed | NOT_RUN | PENDING |
| PLAN-03 UX | YES | MAPS 16 Figma frames and 11 journeys as relevant | NOT_RUN | PENDING |
| PLAN-04 tests/security | YES | THREAT/ACCEPTANCE MAP proposed | NOT_RUN | PENDING |
| PLAN-05 Cursor | YES | BOUNDED GIT WORKFLOW proposed | NOT_RUN | PENDING |
| PLAN-06 synthesis | YES | SELF-REVIEWED cross-document consistency | NOT_RUN | PENDING |

**Terms:** “Review-ready” means the documents are ready to be reviewed and accepted; it does **not** mean owner has approved every exact route/schema/migration or that independent GitHub reviewer has signed. Future plan amendments may be made under owner review; the first merged planning baseline is not frozen product code.

## 7. Immediate next phase after owner reviews the six packages

When the owner accepts the six-package plan (separately from a PR merge if required), the **only next activity** is [Cursor Desktop/local setup](VEL-CURSOR-DESKTOP-SETUP-PLAN-2026-10-11.md): actual Windows environment check → installed tools versions → GitHub personal repo access → open original repository in Cursor → Cursor privacy/terminal boundary configuration → local-only Supabase/env → **no-feature-change baseline** check/build/health/tests → factual report. **No Cursor Agent coding until a new scoped implementation task is approved**. No secret, production DB or real manuscript is required in this setup.

**Readiness recommendation:** packages are complete as a reviewable **planning deliverable**, with the explicitly marked high-risk design choices deferred to the correct implement/pilot gate. Do not present the MVP as engineered, validated or pilot-ready.
