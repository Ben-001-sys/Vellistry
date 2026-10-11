---
id: VEL-PLAN-02-ARCH-DATA-20261011-001
title: PLAN-02 — architecture, data, authorization and API/RPC contract proposal
type: proposed-implementation-contract
status: proposed-owner-review-no-schema-approval
created_at: 2026-10-11
updated_at: 2026-10-11
owner: project_owner
version: 0.1.0
sources:
  - docs/decisions/ADR-0003-use-tiptap-3-prosemirror-for-manuscript-editor.md
  - docs/decisions/ADR-0006-next-nest-supabase-implementation-foundation.md
  - docs/decisions/ADR-0007-immutable-compact-expanded-guidance-sources.md
  - docs/architecture/IMPLEMENTATION-BOUNDARIES-2026-10-10.md
  - docs/specs/VEL-SPEC-001-CHAPTER-SAVE-CONTRACT.md
  - docs/research/OPTION-B-WAVE03-R07-TEMPORAL-PROFILES-EXTRACTION-2026-10-10.md
  - docs/research/OPTION-B-WAVE03-R15-K2B-MANUSCRIPT-PRIVACY-2026-10-10.md
  - docs/plans/OPTION-B-WAVE05-MVP-FINAL-DECISION-2026-10-10.md
  - docs/plans/VEL-IMPLEMENTATION-MASTER-PLAN-2026-10-11.md
---

# PLAN-02 — architecture and contract blueprint (proposed, not a migration)

## 1. Accepted foundation vs proposed engineering specifics

**ACCEPTED**: TypeScript/pnpm monorepo; Next.js 16/React 19 author-facing frontend and BFF, NestJS 11 protected API, Supabase Auth as **sole login authority**, PostgreSQL with per-author/book RLS, Tiptap 3/ProseMirror document JSON, accepted server revisions rather than browser state as source of truth, manual-first AI OFF, optional bounded user-owned BYOK. ADR-0006 permits local Supabase without paid cloud services. An eventual worker engine/production hosting choice is **not decided**. Do not introduce another auth system, mandatory Redis/vector service, cloud-only dependency or new frontend stack under this plan.

**PROPOSED BELOW**: entity/table names after the three existing SQL tables; route and RPC signatures; retry/collision semantics; storage formats and deletion transitions; temporal source representations. They require separately reviewed spec/ADR/migration before coding. A roadmap is not an accepted SQL definition or permission to expose real author data.

## 2. Domain boundaries and ownership model

```text
Supabase Author identity (auth.users)
  ├── author preferences / optional BYOK *session-only* client state
  └── books [existing; owner_id=auth.uid()]
       ├── chapters [existing; book_id, stable UUID, position]
       │    ├── chapter_revisions [existing; accepted JSON history]
       │    ├── planning_notes [proposed]
       │    └── local_draft recovery [client only; not canonical]
       ├── character_profiles / storyline_profiles [proposed manual entities]
       │    └── approved_fact_events + source_refs [proposed author-approved canon]
       ├── candidate_fact_events + review_decisions [proposed, never auto-canon]
       ├── rule_scope_overrides + author_rules [proposed; immutable source pack separate]
       ├── ai_requests + proposal_decisions + undo_links [proposed]
       └── import/export/backup manifests [proposed short-lived scoped records]
```

Every record containing sensitive manuscript, profile, fact, rules/preferences, prompt context, backup metadata or decision must prove the **authenticated owner AND book membership**, not merely accept a book UUID from the caller. The original schema has `books`, `chapters`, `chapter_revisions`; SQL migrations explicitly **revoke direct authenticated chapter/revision writes** until protected atomic RPC. Keep this safety property. No new DML migration during planning.

| Bounded entity | Minimum proposed fields / relation | Authority and invariant |
|---|---|---|
| `books` **existing** | `id`, `owner_id`, `title`, timestamps | owner comes from Auth/DB, not submitted JSON |
| `chapters` **existing** | `id`, `book_id`, `title`, `position`, `current_revision`, `accepted_document` | stable ID independent of order; nested owner permission |
| `chapter_revisions` **existing** | `book_id`, `chapter_id`, `revision`, `document`, timestamp | append-only accepted sequence; not autosave queue |
| Planning note **proposed** | `book_id`, optional `chapter_id`, body, changed_at | distinct from accepted manuscript and chapter revision |
| Profile **proposed** | character/thread kind, `book_id`, manual fields, approved baseline, updated_at | author's manual state; no model needed |
| Canonical fact event **proposed** | fact subject/predicate/value, approved author decision, applicable story-time interval, provenance | only separately author-approved; uncertain facts explicitly typed |
| Fact candidate **proposed** | `book_id`, source chapter + accepted revision, **exact quote** and location, narrative scene time, proposed fact, pending/edit/dismiss/approve or stale | a candidate never becomes canon by accepting AI prose |
| Rule origin/alias **proposed package** | immutable origin ID/compact or expanded variant/body hash + 134 logical aliases version | real private corpus must not be hallucinated or committed without permission |
| Rule preference **proposed** | inherited/overridden enabled flag, author rule version, scope `workspace|book`, exception reason | disable excludes rule from actual effective request |
| AI request & proposal **proposed** | actor, book/chapter, base revision, selection anchor, effective rules version, provider/model route, state, limited proposed plain text, consent evidence | unaccepted text is never accepted manuscript |
| Proposal decision **proposed** | accept/reject/edit, idempotency key, before/after accepted revision, author/time | CAS commit only; reject leaves source byte-equivalent |
| Export/backup manifest **proposed** | book owner, format, schema version, contents hashes, declared omissions, scoped Storage object reference if any | no raw BYOK keys; clean restore to authorized target proves backup |

**Index proposals:** owner+created_at for owned book listing; book+chapter position uniqueness with explicit reorder concurrency strategy; book+profile/fact status/story-time and chapter revision indices; scoped idempotency-key lookup unique per actor/action; storage object isolation. Actual index/query/explain performance measurements remain undone.

## 3. Boundary responsibility and proposed interfaces

| Component | Owns | Must not |
|---|---|---|
| Next web / Tiptap | controlled editor state, navigation, draft recovery candidate UX, full request-consent preview, local-only key lifecycle, accessible controls | report Saved without committed receipt; render another account's cached state; send prose invisibly |
| Next BFF | attach verified session to owned request; no-store and safe SSR/cookie/session handling | treat `getSession` alone as authority; embed tokens or prose in cache |
| Nest API | bearer validation, authorize resource, input schema, validated state transitions, effective context and optional AI proxy | trust `owner_id` in request; service-role shortcut; log raw manuscript/BYOK |
| Postgres RPC/RLS | atomic accepted revision CAS + immutable history/idempotent receipts, referential integrity and owner scope | allow direct client-initiated unversioned chapter UPDATE/DELETE |
| Local browser drafts | account/book/chapter/base-revision recovery candidates | override accepted revision silently; expose to next account on shared device |
| Private Storage (future) | short-lived authorized import/export/backup objects and expiry/retention | public manuscript buckets; promise signed URLs instantly expire on logout |
| AI adapter (future) | bounded OpenRouter downstream pinned model, consent, explicit author key, cost/rate limiting | hidden fallback, model output as committed canon, provider key persistence |

## 4. API/RPC contract candidates by delivery slice

These are **planning shapes only**, not endpoints currently implemented.

| Stage | Candidate request/interface | Expected result and safety envelope |
|---|---|---|
| IMP-001 | Existing `GET/POST /v1/books` + BFF `/api/books`; proposed owned `GET/PATCH/DELETE /v1/books/:id` | minimal allowed fields; 401/403/404 well-defined; no-store; 400 title validation; owner-only |
| IMP-002 | Proposed `GET/POST /v1/books/:bookId/chapters`, `PATCH .../:chapterId`, reorder transaction, notes | nest-chapter checks; stable ID; 409 conflicting reorder; non-destructive delete+confirmation |
| IMP-003 | `saveChapter({bookId,chapterId,expectedRevision,idempotencyKey,document,documentSchemaVersion})` | committed revision receipt `acceptedRevisionId,revisionNumber,documentHash,savedAt`; explicit `CONFLICT|DENIED|INVALID|UNAVAILABLE|UNKNOWN_TO_CLIENT` handling; exact schema/SQL decision pending |
| IMP-003 | Proposed `GET acceptedChapter + history`, draft recovery local state | server accepted vs local candidate separately represented; never optimistic Saved |
| IMP-005 | Proposed profile CRUD and candidate review endpoints | manual create/edit; candidate evidence linked to **accepted source revision** and **story time**; approve independently |
| IMP-006 | Proposed `GET /rules/catalog`, `PUT /rules/preferences`, effective preview | version-pinned certified source; account/book inherited scopes; no disabled rule |
| IMP-004 | Proposed import/export preparation, versioned backup manifest, restore/delete confirm | authorized streams, bounded size, loss report, clean restore and revocable scoped objects |
| IMP-007 | Proposed `POST /v1/ai/proposals` with author-controlled Continue/Rewrite | explicit excerpt/recipient/rules/cost consent; session-only BYOK supplied for that request; proposed plain text only |
| IMP-008 | Proposed `POST /v1/ai/proposals/:id/accept|reject`; undo with expected latest revision | transactional CAS; idempotent accept; compensating undo; proposal facts separate |

**HTTP 401 vs 403 vs 404:** choose a consistent resource-existence policy for guessed cross-owner IDs (often 404 externally to avoid enumeration), document it before tests; do not silently infer REST status from this blueprint. Use `409` only for genuine detected stale state and include safe expected/current revision metadata without leaking foreign manuscript. `Unknown after lost ACK` is **a client observation**, not proof DB rejected the commit. Request retries must produce same receipt when identical and never double-append.

### Chapter save atomicity and failure table

| Case | Required contract |
|---|---|
| Correct actor/book/chapter & `expectedRevision` | validate Tiptap JSON, commit accepted revision and advance current pointer in a **single transaction**, receipt only on durable success |
| Wrong actor/book/chapter | deny without data contents or accepted mutation; direct PostgREST also blocked |
| Stale expected revision / second tab | no overwrite, explicit recoverable conflict and current-version reference |
| Same idempotency key, identical payload and accepted outcome | same receipt, no duplicate revision |
| Same key but changed source/payload | explicit idempotency mismatch; no new write |
| Network drops after actual DB commit before reply | client marks **UNKNOWN**, resolves by server receipt lookup/replay, never “Saved” without confirmation |
| Invalid editor JSON / unsupported marks | predictable validation, preserve candidate and previous committed revision |
| Compensating Undo after intervening manual edits | refuse destructive inverse; author sees compare/reconcile |

**Order/revision coupling:** chapter reorder is not a manuscript-save update; do not tie identity to position. Valid accepted Tiptap schema/version changes require explicit migration/compatibility and historical document read support.

## 5. Story-time and canon proposal constraints

Distinguish narrative chapter display order from **in-story chronology**, including flashbacks; a fact has authored/confirmed `story_time`, not just insertion timestamp. A candidate citation requires exact accepted source quote and accepted chapter revision. Approved facts should be queryable `state_at(story_time)` without leaking later knowledge; ambiguity/rumor must remain labelled, not promoted to objective truth. If chapter content changes, evaluate citation staleness and flag affected approved author decisions rather than silently undoing them. Proposed human/AI extractor can surface candidates at review checkpoints, never write canon. Actual extraction model/method and quality threshold remain a later design decision; research fixtures are not proof of hallucination-free extraction.

## 6. Rule source/catalog decision checkpoint

Original guidance pack contains **260 immutable compact/expanded source records (130+130), 13 domains**. Owner's 2026-10-10 Wave 1–3 agreement subsequently accepted intended **134 logical control default policy** (130 expanded-primary ON, 4 semantically distinct compact AR extras OFF). **Remaining** before activation: verify private source-body/hash/aliases from actual corpus, approved license/hosting and rule description fidelity; define versioned activation manifest, import/rollback and measurable effective-selection test. Do not expose full private original corpus in public source or send all 130 expanded instructions to provider. Treat proposed `40 constitutional principles` feature as source-linked only where genuine source material supports it—do not invent additional texts.

## 7. Session/logout risk decision required before pilot

Existing Supabase guard verifies current user on each Nest call, and existing public books PostgREST grants scope by `auth.uid()`. **Research observed** signed-out, still unexpired JWT can sometimes read previously owned rows through **direct** PostgREST until expiry, bypassing Nest's live-session-aware checks. The owner allowed continuation of this as a *development-stage* limitation; no actual private manuscript pilot/public privacy guarantee is authorized.

**Planning recommendation (not selected):** for private manuscript/profile/Storage sensitive paths decide between a restricted Nest/DB live-session gate and a clearly disclosed token-expiry policy with additional controls; derive guarantees from tested direct PostgREST and logout outcomes. A strict immediate revocation promise needs real gate enforcement **including direct grants**; merely clearing browser cookies or an Auth session row is insufficient. Evaluate browser recovery on shared devices, link expiry, account deletion/retention, cached SSR responses and key transfer. Owner picks policy before feature data contracts are frozen for real private content.

## 8. Decisions for later owner/technical signoff

| Code | Open decision | First stage affected | Blocking strength |
|---|---|---|---|
| ARCH-01 | User/session direct-PostgREST private-data protection and exact logout promise | IMP-001 model; definitely private pilot | **BLOCKER for real manuscripts/pilot**, local synthetic scaffold okay |
| ARCH-02 | Final transactional create/reorder/save RPC, idempotency and schema version | IMP-002/003 | **BLOCKER for accepted data mutations** |
| ARCH-03 | Local recovery retention/encryption/shared-device disclosure | IMP-003 | **BLOCKER for recovery feature acceptance** |
| ARCH-04 | Private source pack delivery/activation manifest and versioned rules | IMP-006 | **BLOCKER for genuine Rules Studio** |
| ARCH-05 | Story-time representation, candidate extractor boundary, retraction semantics | IMP-005 | **BLOCKER for auto-candidate promotion claims**, manual profiles can start |
| ARCH-06 | Supported DOCX subset + backup archive/clean restore + retention | IMP-004 | **BLOCKER for portability acceptance** |
| ARCH-07 | Actual OpenRouter downstream route policy/key/consent/cost details | IMP-007 | **BLOCKER for provider enablement**, AI OFF remains functional |
| ARCH-08 | Production hosting/region, worker necessity, logging/legal ops | Private pilot/release | **BLOCKER for real data/launch**, not local synthetic build |

**Exit of PLAN-02 (planning deliverable, not code gate):** accepted stack preserved; domain responsibility/auth threats explicit; proposed API contracts and alternatives captured; high-risk decisions assigned to future spec/ADR tasks. No arbitrary service choice or executable migration approved.
