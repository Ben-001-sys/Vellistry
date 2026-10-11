---
id: VEL-PLAN-03-UX-STATES-20261011-001
title: PLAN-03 — screen-route-state author journey UX implementation contract
type: proposed-ux-functional-handoff
status: proposed-planning-only
created_at: 2026-10-11
updated_at: 2026-10-11
owner: project_owner
version: 0.1.0
sources:
  - docs/design/VEL-DES-001-002-UX-HANDOFF-2026-10-10.md
  - docs/design/VEL-DES-002-JOURNEY-AND-STATE-MATRIX-2026-10-10.md
  - docs/design/VEL-DES-004-MAKE-LIVE-WALKTHROUGH-2026-10-11.md
  - docs/design/VEL-DES-005-FIGMA-ADDITIONAL-EDITABLE-SCREENS-2026-10-11.md
  - docs/design/VEL-DES-LOVABLE-INITIAL-CODE-REVIEW-2026-10-11.md
  - docs/requirements/MVP-USER-JOURNEYS-AND-ACCEPTANCE-2026-10-09.md
  - docs/plans/VEL-PLAN-02-ARCHITECTURE-DATA-CONTRACTS-2026-10-11.md
---

# PLAN-03 — Functional UX, navigation, states and cross-feature composition

This is **an implementation-state contract proposal, not a redesign or validated functioning app**. The editable master Figma file contains **16 known static editable frames** (2 A/B original alternatives, 4 unified candidates, 3 earlier expanded, 7 additions), NOT 16 tested app pages. The actual prototype Make walkthrough was **owner-supplied observation**; Lovable had **source-inspected** four defects, not a confirmed working integration. The Figma Library composite empty/populated inconsistency was owner-accepted for deferral to runtime conditional rendering. Minor visual polish may evolve while implementing; account leakage, loss of text, unsafe AI acceptance and missing keyboard access are **not** cosmetic.

## 1. Proposed navigation hierarchy

```text
Public/sign-in
  → Authenticated Library /books
    → Book workspace /books/:bookId (owner only)
      → Chapter manuscript /books/:bookId/chapters/:chapterId
         left: chapter rail / organizer
         middle: manual Tiptap editor
         right: Story Workspace inspector (optional drawer)
         toolbar: formatting, find, save status, history
      → Story Workspace /books/:bookId/story
      → Rules Studio /books/:bookId/rules
      → Export / backup / privacy for owned book
  → Author settings (account session, optional AI connection)
  → Contextual modals/drawers: unsaved navigation, save recovery,
      revision compare, fact review, AI consent, proposal review,
      export/delete confirmation
```

These paths are **candidates** except existing `/`, `/login`, `/books`, `/api/books`. Do not generate routes solely because pictured in Figma. Book ID/Chapter ID always scoped and access-checked; no sensitive content in URL query or preview caches.

## 2. Screen-by-screen implementable states

| View / proposed path | Master Figma reference | Runtime states & events | Negative / accessibility requirement | Implemented by |
|---|---|---|---|---|
| Sign-in `/login` | Existing web page; privacy context `15:791` | signed-out, credential errors, session checking, ready, sign-out, switch author | old-user content must disappear; error is not no-books | IMP-001 |
| Library `/books` | [`27:10`](https://www.figma.com/design/krXupCfSLUnOQxEOjIlp9U?node-id=27-10) | loading, empty ONLY when zero results, populated ONLY when >0 results, create busy/error, retry, 401 | do not show “No books yet” with real card; cancel prior-user fetch; focus/create keyboard | IMP-001 |
| Book organizer | [`27:44`](https://www.figma.com/design/krXupCfSLUnOQxEOjIlp9U?node-id=27-44) | create, rename, select, reorder, optimistic pending, persistence ack, delete confirmation | stable IDs, keyboard reorder, wrong-book denial; no silent draft drop | IMP-002 |
| Manuscript editor | [`15:558`](https://www.figma.com/design/krXupCfSLUnOQxEOjIlp9U?node-id=15-558), [`6:2`](https://www.figma.com/design/krXupCfSLUnOQxEOjIlp9U?node-id=6-2) | AI OFF, caret/selection, typing, rich marks, find, local undo, chapter switch, save states | real Bold response (Make defect); preserve IME/focus, never force key | IMP-003a/003b |
| Save/recovery/revision | [`6:47`](https://www.figma.com/design/krXupCfSLUnOQxEOjIlp9U?node-id=6-47), [`27:213`](https://www.figma.com/design/krXupCfSLUnOQxEOjIlp9U?node-id=27-213) | clean, dirty, saving, acknowledged, offline, **unknown ACK**, proven 409 conflict, local draft, compare, keep-both, reconcile | six labels are not recovery; explicit safe source comparison; no false Saved | IMP-003b |
| Story workspace | [`15:676`](https://www.figma.com/design/krXupCfSLUnOQxEOjIlp9U?node-id=15-676), [`27:179`](https://www.figma.com/design/krXupCfSLUnOQxEOjIlp9U?node-id=27-179) | no profiles, author-created characters/threads, editing, history, relevant context, pending changes | no account/book bleed of profile notes/fact status (observed Make defect) | IMP-005 |
| Fact-review inspector | [`6:148`](https://www.figma.com/design/krXupCfSLUnOQxEOjIlp9U?node-id=6-148), [`27:179`](https://www.figma.com/design/krXupCfSLUnOQxEOjIlp9U?node-id=27-179) | pending, edit, dismiss, approve, wrong quote, stale/retracted source, story-time ambiguity | accept AI prose ≠ approve canon; exact accepted quote; accessible evidence link | IMP-005/008 |
| Rules Studio | [`27:80`](https://www.figma.com/design/krXupCfSLUnOQxEOjIlp9U?node-id=27-80) | source cert pending, browse/search, enabled/disabled/restore, scope, personal add/edit, preview | mock 3 rules ≠ 134; disabled actual context exclusion, no cross-book settings | IMP-006 |
| Settings / BYOK | [`15:791`](https://www.figma.com/design/krXupCfSLUnOQxEOjIlp9U?node-id=15-791) | AI OFF, attach user key (free or paid), masked active session, route selection, disconnect/retest | no raw key in browser persisted store or logs; manual features independent | IMP-007 |
| Continue consent | [`27:113`](https://www.figma.com/design/krXupCfSLUnOQxEOjIlp9U?node-id=27-113) | selected valid **collapsed caret**, consent/context/cost preview, pending, proposal, cancel, stale/invalid | caret at offset 4 valid; no append-to-end; no silent full-book transfer | IMP-007/008 |
| Rewrite review | [`6:98`](https://www.figma.com/design/krXupCfSLUnOQxEOjIlp9U?node-id=6-98) | nonempty within-paragraph selection, compare, edit proposal, accept/reject, undo, stale refusal | no `-1` guessed range, detached DOM/cross-paragraph, or lost manual edit | IMP-007/008 |
| Export/backup/privacy | [`27:145`](https://www.figma.com/design/krXupCfSLUnOQxEOjIlp9U?node-id=27-145) | requested format, support/loss warning, progress, download receipt, restore preview, delete confirmation | no fake export or delete button; no other-owner data, no key in archive | IMP-004 |

**Screen completion requirement:** A static frame is sufficient design direction to begin a scoped approved task. Functional completion needs real UI behavior, proper dialog/focus, authorization, persistence and tests. Any unknown visual details are design backlog items, not generic blockers to local coding.

## 3. Author interaction / state transition contracts

### Library / account
`checking-session→loading→empty|populated|error|unauthenticated`. On auth identity change, clear or partition **all** account-scoped caches, pending requests and local context (books, chapters, profiles, facts, rules, proposals, recovery); late responses from A are ignored when B is current. On sign-out with unsynced draft, show an explicit retain/delete-on-device choice based on approved local-draft policy instead of silently destroying work.

### Editor / revision receipt
`confirmed_rev(N)→local_dirty(N)→saving(N)→confirmed_rev(N+1)|unknown_ack|conflict|retryable_error`. Browser-only draft remains advisory. `unknown_ack` can mean server committed but reply was lost; lookup/retry idempotently and disclose uncertainty until durable receipt. Recovery comparison must expose local/base/current source and keep-both/reconcile decision; do not use conflict label for uncertain ACK.

### Profiles / canon
Manual authored state is valid without extraction. After accepted draft boundary, candidate `pending→author_edit→approved|dismissed|stale`. Rejected/generated unaccepted prose never supports canon; after Undo/retraction, pending candidates become unapprovable and prior approved author decision becomes review-required rather than silently reversed. Every source has owner/book/chapter/revision exact quote and story-time context.

### Rules
Source package not certified→simulated clearly labelled, not genuine Rules Studio. Source certified→aliases/default inheritance→workspace and book overrides→visible exception→effective active subset. Disabled rule must remain absent from **entire** outgoing instruction context and cached summaries. Preserve actual corpus source body/variants.

### AI
`AI_OFF→key_session_only→action_with_valid_caret_or_span→consent_preview→pending→proposal_ready|failed|cancelled|stale→review_edit|reject|acceptCAS→compensatingUndoIfLatest`. Continue must permit a valid collapsed caret (offset 0 and 4 are test positions) and insert at the target; Rewrite only contiguous inside a paragraph. Every context/cost recipient disclosure precedes transfer. No model response mutates accepted prose or approved profiles by itself.

### Import/export/deletion
`request→validate ownership+format→show loss/retention warnings→author confirm→perform→receipt|error`. Backup `export→verify manifest→clean authorized restore→integrity compare` is not complete until actually restored. Deletion confirmation must explain local drafts/backup retention; no false immediate purge of separately retained copies.

## 4. UX composition rules and visual-defer policy

- Desktop-first manuscript column, chapter rail, context inspector; full-width UI not a requirement. Reuse restrained original design tokens, avoid replacing them wholesale with Lovable.
- Keyboard-first selectable action controls, visible focus and 44-ish pixel practical touch targets where feasible; screen-reader live announcements for save/AI and role/name for controls. Exact dimensions/contrast targets are **implementation/accessibility decisions**, not proven measured design compliance.
- Breakpoint examples 1440, 900, 390 are **test viewport candidates**; mockups don't prove mobile success. No mandatory mobile app.
- Provider/AI UI never captures typing focus unexpectedly or disrupts manual text selection. Model key entered only when requested, not onboarding blocker.
- UI and engineering align on what “Saved,” “Approved canon,” “Export complete,” “Account deleted” mean; no simulated success badges in actual app.
- **Prioritized defects from prototype evidence:** Make's cross-persona profile/fact leakage and collapsed-caret rejection; Lovable's append-at-end Continue, unsafe rewrite selection, orphan facts after Undo and mismatched source quote; Make's non-responsive Bold and missing recovery actions. These become explicit regression cases. Some Make UI safeguards are reviewer-observed local only, not production proof.

## 5. Implementation-ready design minimum for a future Cursor task

1. Source-specific author journey and scope M1–M8.
2. Existing master Figma frame or clearly documented interaction where no frame exists; no pixel-perfect signoff required.
3. Functional happy, empty, loading, error, unauthorized, stale, cancel and recovery states **as relevant to the slice**.
4. Keyboard/focus/ARIA behavior for affected controls.
5. Data owner, revision, idempotency and destructive-change semantics.
6. Acceptance test mapping to journey/ACC and negative cases; do not treat Figma screenshot as test.
7. A separate scoped owner code authorization after planning and Cursor setup.

## 6. PLAN-03 disposition

**Planning coverage complete:** all twelve route/view families and the major cross-feature state transitions are specified at a **candidate implementation level**. **Not completed:** actual Figma variant edits, real accessibility audits, browser tests, and release-quality responsive QA. Those belong to implementation and validation, not a blocker to planning review.
