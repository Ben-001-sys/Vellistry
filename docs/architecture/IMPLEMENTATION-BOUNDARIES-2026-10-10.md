---
id: VEL-ARCH-IMPLEMENTATION-BOUNDARIES-20261010-001
title: MVP implementation boundaries and contract ownership
type: proposed-engineering-boundaries
status: proposed-for-design-and-owner-review
created_at: 2026-10-10
updated_at: 2026-10-10
owner: project_owner
version: 0.1.0
source_refs:
  - docs/decisions/ADR-0003-use-tiptap-3-prosemirror-for-manuscript-editor.md
  - docs/decisions/ADR-0006-next-nest-supabase-implementation-foundation.md
  - docs/requirements/MVP-SCOPE-DECISION-2026-10-09.md
  - docs/plans/OPTION-B-WAVE05-MVP-FINAL-DECISION-2026-10-10.md
  - docs/research/OPTION-B-WAVE06-G10-FINAL-CLOSEOUT-MVP-DESIGN-ENTRY-2026-10-10.md
  - docs/history/2026-10-10-owner-delegated-mvp-design-entry.md
---

# Vellistry — implementation architecture preparation

**Classification:** Existing accepted decisions are reiterated; *route names, interfaces, storage shapes and implementation partitions below are proposals*, not newly accepted ADRs. No feature code, migrations or deployment are authorized by this file. UI concept exploration with invented data is already permitted; implementation still requires approved canonical editable Figma Design and explicit owner signoff.

## Accepted constraints, not reopened

- **Product:** eight author-centered MVP areas M1–M8. Manual AI-OFF writing works without a key.
- **Editor:** Tiptap 3 / ProseMirror (ADR-0003); chapter content stored as validated Tiptap-compatible JSON, with accepted revisions authoritative. Browser drafts are *recovery candidates*, never implicit accepted canon.
- **App:** Next.js 16 + React 19 web (`apps/web`), NestJS 11 API (`apps/api`), Supabase Auth/Postgres/RLS (`supabase`) per ADR-0006. Stay on the existing scaffold instead of starting a second framework.
- **Guidance:** immutable 260-source compact/expanded origins; future 134 logical controls (130 expanded-primary catalog defaults ON, four distinct compact extras OFF), author overrides and **only relevant effective rules** included in a user-approved AI request. AI itself OFF by default.
- **Profiles:** manual characters/story threads, source/revision- and story-time-aware suggested facts, **separate affirmative canon approval**; accepting AI prose never approves canon automatically.
- **AI MVP:** exactly two optional actions: Continue at insertion point and Rewrite one contiguous span inside a single paragraph. First candidate provider integration OpenRouter with curated pinned downstream routes and user-owned free *or* paid BYOK key, kept in session memory for MVP. No real model quality claim or provider connection approved yet.
- **Portability:** TXT, loss-disclosed editable DOCX, independent book backup/restore; keep EPUB/publishing conversion conceptually separate and Calibre's measured semantic-heading loss explicit.
- **Recovery:** provisional *internal* 24h RPO / 48h RTO **targets**, not demonstrated SLAs or approved public guarantees.

## Proposed responsibility boundaries

| Layer | Owns | Must not do |
|---|---|---|
| **Next web** | Author UX, editable Tiptap state, chapter navigation, browser recovery UX, consent/request-preview, proposal diff and keyboard/a11y affordances | Assert a server save succeeded before acknowledgment; expose BYOK key in URL, persistent storage, telemetry or server-rendered HTML; silently promote local drafts to canon |
| **Nest application API** | Authenticated author operations, validated input/permission checks, orchestrated chapter-save RPC, revision/undo idempotency, provider proxy, server-side filtering | Trust submitted `owner_id`; log manuscript text/secrets; accept stale writes; claim instant logout not demonstrated |
| **Supabase Auth + Postgres** | Identity and author/book RLS, transactional chapter revisions, immutable revision provenance, story profiles, idempotent receipts | Permit cross-author access; conflate client current draft with committed source; bypass RLS via unrestricted service role |
| **Supabase Storage (future)** | Scoped import/export/backup objects with signed-access/retention constraints | Treat signed URLs as instantly revoked by logout; expose public buckets for private books |
| **Local browser recovery** | Per-account/per-book/per-chapter unacknowledged draft with revision pin, conflict/recovery decision | Replace an acknowledged server revision without explicit user choice; leak one account's offline drafts to another |
| **AI adapter** | Author-initiated, route-pinned HTTPS request, excerpt/rule/canon preview, masked key and bounded response handling | Unannounced fallback/provider change, cross-book context, provider-funded credits, direct client secret persistence or silent edits |

**Temporary security decision:** The owner elected to continue with Supabase Auth + RLS/PostgREST initially and *defer* the restricted Nest-only gateway and strict immediate JWT revocation. Research documented that an unexpired signed-out JWT could still access a private row through direct PostgREST in a local test. This is a **known, accepted development-stage limitation**, not a passed production security control. Record explicit residual JWT TTL, direct-API exposure, device/logout and Storage implications in all security handoffs; no real private-author pilot or public release until the appropriate risk/security review and owner acceptance. Do not present the old restricted gateway experiment as shipped code.

## Contract candidates — need design and owner review before binding tasks

1. **Session and library:** `POST /auth/*` remains Supabase-owned (not duplicate Nest password auth). Candidate `GET/POST /v1/books`, `GET /v1/books/:bookId` and chapter-list/create operations through the existing authenticated API. Exact REST shape and error codes to be frozen with product spec before implementation.
2. **Transactional chapter save:** candidate `saveChapter({bookId,chapterId,expectedRevision,idempotencyKey,document})` -> `{acceptedRevision,savedAt,acknowledgedDocumentHash}` or explicit `CONFLICT|DENIED|VALIDATION_ERROR|RETRYABLE_FAILURE`. A stable receipt must represent DB-committed content, not merely a request queued in browser memory. Validate Tiptap nodes and marks, payload limits, tenant boundaries and unchanged CAS on retry.
3. **Draft recovery:** `unsaved → saving → saved|error|conflict`, with separate `local draft exists` state. Reopen after interrupted writes/lost acknowledgment; compare server revision, local revision base, and content before author chooses recover/discard/reconcile.
4. **Story Profiles:** source quote + accepted manuscript revision + story-time interval + subject + provenance + approval state; proposed facts may be rejected/revised, and edited source marks supported facts stale rather than silently rewriting them.
5. **Rules:** source ID, compact/expanded variant provenance, effective scope, per-book/character exception and audit-ready active/inactive toggle. **Catalog activation is not a blanket AI prompt**.
6. **AI proposal:** author-selected provider/model, visible exact excerpt and effective rules, cancellation/failure safety, untrusted plain-text output, proposal referencing source revision and selection span, comparison and explicit accept/reject. Acceptance and compensating undo must be transactionally revisioned, not in-memory only.
7. **Portability/privacy:** import validation and loss report, account-scoped clean restore for DB **and** Storage objects where applicable; delete/export and retention semantics in acceptance specs. Do not derive production routes from the synthetic research fixture.

## Cross-cutting invariants and negative checks

- Alice cannot read, enumerate, mutate, export or restore Bob's books/chapters/profile content, including after account switch; forged `owner_id` ignored. Evaluate *both* Nest and direct PostgREST access.
- Stale revision, duplicate idempotency key with mismatched payload, competing tabs, lost ACK, interrupted commit and missing source quote must fail closed or preserve acknowledged content.
- No `saved` UI on noncommitted data; no duplicate revision on safe retry; no destructive restore of unrelated book/account content.
- AI OFF must pass all manual author journeys. No key in persistent storage/telemetry; no generated suggestion modifies manuscript/canon until user approval.
- Baseline a11y: discoverable editor accessible name, keyboard-only tasks, paste/composition, genuine native IME/RTL/screen-reader observations before user acceptance. A DOM simulation is not a native assistive-tech test.
- Explicit export/backup ownership and restore provenance; source-text hashing and supported DOCX feature/loss warnings.

## Architecture decisions still requiring approval

The approved technology combination does **not** settle the exact chapter-save RPC schema, client recovery protocol, author-session expiry behavior, Storage object policy, DB migration plan, model privacy/region and vendor terms, operational legal duties or production runbook. Open an ADR/spec amendment where changes materially alter accepted design. All author-facing interaction contracts wait for design signoff; reviewers must not use this document as implicit approval.

See [the dependency DAG](../agent-workflow/IMPLEMENTATION-TASK-DEPENDENCIES.yaml) and [operator protocol](../agent-workflow/IMPLEMENTATION-OPERATING-MODEL.md).
