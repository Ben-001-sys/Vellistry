---
id: VEL-DES-MISSING-SCREENS-20261010-001
title: Vellistry remaining author screens — behavioral and responsive blueprint
type: proposed-screen-blueprint
status: proposed-not-rendered-or-tested
created_at: 2026-10-10
updated_at: 2026-10-10
owner: project_owner
version: 0.1.0
sources:
  - docs/requirements/MVP-USER-JOURNEYS-AND-ACCEPTANCE-2026-10-09.md
  - docs/design/VEL-DES-002-JOURNEY-AND-STATE-MATRIX-2026-10-10.md
  - docs/design/VEL-DES-001-DUAL-PROTOTYPE-EXPERIMENT-2026-10-10.md
---

# Remaining UI/UX screen blueprint — DRAFT

This file completes **screen-level instructions only** where Figma editor calls were restricted. It is not evidence that these frames or interactive flows exist. Do not add a "built" marker until an actual Figma Make, Lovable or editable Figma artifact is observed and reviewed. These screen families are part of the accepted M1–M8 scope, not an authorization to expand it.

## Screen family 1 — Library, empty library, new book and organization

**Writer question:** "Where are my books, and how do I begin writing without connecting AI?"

**Wide composition:** quiet left workspace rail (Library / current book / settings); header with "Your library", Create book; book cards list title, last edited, total words and valid *confirmed* save state. Empty library state has a prominent "Create your first book" button and one sentence "You can write without an AI provider." No false saved metadata on a new unsaved book.

**Interaction:** Create book sheet requests working title (optional placeholder), creates in-memory synthetic book in prototypes; open book goes to Chapter Organizer or editor. Author can rename without changing stable book identity. Import appears but must disclose limitations; no covert AI onboarding gate.

**Failures:** blank title allowed/validated per eventual spec; duplicate names remain unique entities; session expiry/denied state; network save pending versus persisted; switch account does not show prior account book.

**Medium/small:** grid → vertical cards; create button remains obvious; no horizontal overflow.

**Trace:** JRN-001, JRN-011 / M1 M8.

## Screen family 2 — Chapter Organizer, notes and safe navigation

**Layout:** manuscript-first with chapter names, drag affordance **and** keyboard move up/down actions, optional per-chapter notes separate from prose. Show chapter word count and explicit unsaved marker adjacent to a chapter when needed.

**Critical test:** author adds three similarly titled chapters, edits one, reorders and reopens each; content must remain with the correct chapter identity. During saving, navigation should preserve local text, permit recoverable status and not imply the old chapter saved.

**States:** chapter empty, create, rename, reorder confirmation (if needed), unsaved pending, offline, conflict.

**Trace:** JRN-001/002/003.

## Screen family 3 — Rules Studio and effective request preview

**Layout:** left section list (catalog / book overrides / personal rules); center rule rows with title, small source-ID badge, enabled status and scope; right "Effective for this request" inspector.

**Source fidelity:** display only user-permitted synopsis/IDs, not recreated/confidential 260 source bodies. Direction states **134 logical identities**: 130 expanded-primary catalog defaults ON, 4 distinct compact extras OFF; user overrides apply. The prototype may use 5–8 plainly invented example rows while labeling the complete catalog as unimplemented.

**Actions:** toggle a rule, add personal rule, scope to book, restore source default, preview effective rules for a specific mock Continue or Rewrite request. Disabled entries never reappear in complete effective mock prompt. Conflicting exceptions demand an explicit interpretation/disclosure, not hidden precedence.

**States:** catalog not loaded, personal rule edited but unsaved, conflicting scope, empty applicable subset, reset confirmation.

**Trace:** JRN-006/007 / M5.

## Screen family 4 — Optional BYOK setup and exact consent

**Layout:** card "AI is optional" and visible "Keep writing without AI"; provider menu with curated-model *demonstration options only*, masked key placeholder, "Session only" explanation, no real submit; consent drawer previews selected excerpt, task-relevant enabled rules, any approved story-context snippet, provider/recipient, cost/rate caveat, and clear Send/Cancel.

**Privacy copy:** authors can own free or paid keys. The intended server-side inference proxy can see a plaintext key during an authorized request; never promise end-to-end opaque key custody. No user key storage or real API call in prototype. If the route privacy/region terms are unverified, show "Not available until verified", not an enabled live option.

**States:** no key, synthetically connected, invalid dummy entry, explicit consent absent, cancellation, mock timeout/401/429/rate limit; non-AI writing unaffected throughout.

**Trace:** JRN-007 / M6 M8.

## Screen family 5 — Continue proposal and revised Rewrite review

**Layout:** manuscript visible as authoritative source; in-editor selected insertion point for Continue, selection validator for Rewrite (one contiguous text span in one paragraph); proposal appears in a dedicated **unaccepted** pane/card, not inside accepted prose.

**Actions:** preview mock request, generate fabricated fixed result, compare, Accept/Reject, inspect provider/rule snapshot, view later compensating Undo (as distinct new simulated accepted revision). Proposals pinned to accepted revision and selection identity. If local edits happen while response is pending, disable Accept and explain why it is stale.

**States:** no selection, invalid multi-paragraph selection, pending, mocked success, provider failure, rejected, accepted after receipt, stale, undo conflict. No automatic profile candidate approval.

**Trace:** JRN-007/008/009/010 / M6 M7.

## Screen family 6 — Export, import warning and portable backup

**Layout:** separate choices: plain TXT, ordinary editable DOCX (limited supported semantics), independent book archive/restore; clear "Publishing-ready EPUB/PDF not in this MVP." Import flow contains file-origin disclosure, loss preview before user consent, recovery option retaining original file.

**Actions:** preview a synthetic report of supported headings/paragraph/marks and known unsupported examples (tables, sections, complex styling), choose continue/cancel. Backup pane enumerates manuscript + approved profiles + active rule settings and differentiates local from verified cloud/offsite storage. Restore requires explicit target account/book and cannot overwrite unrelated data without confirmation.

**States:** supported, lossy format, invalid file, interrupted operation, wrong account target, restore conflict.

**Claims prohibited:** no promise of lossless DOCX, encrypted backup or verified restore until independent product tests.

**Trace:** JRN-003/011 / M3 M8.

## Screen family 7 — Account, privacy, export/delete, sign-out

**Layout:** account-scoped library summary and export data; deletion confirmation with explicit affected data classes and retention-policy link; model consent/preferences; sign-out panel that does **not** promise immediate JWT invalidation.

**Exact risk notice for author/testing copy (must undergo legal review before shipping):** "Signing out on this device does not necessarily invalidate an already issued, unexpired access token immediately. This research implementation has not been certified for private manuscript production." The direct PostgREST token observation was a local experiment, not an acceptable final release.

**States:** account switch, no access, export request pending, deletion confirmation, deletion failure, local recovery quarantine, already-issued token warning. UX simulations do not establish real access control.

**Trace:** JRN-011 / M8.

## Cross-screen acceptance for design mockups

- Every primary action has actual semantic control type, keyboard focus, and visible response in the interactive prototype. Decorative buttons do not count as journey completion.
- Large view shows editorial column and optional adjacent inspector. Medium/narrow view keeps manuscript primary and uses keyboard accessible drawers for context/chapters.
- Status text is never color-only: unsaved, saving, confirmed, offline, unknown commit status and conflict are distinct.
- Proposed facts, accepted facts, draft prose, accepted prose and AI proposals are distinguishable in screen-reader names/text.
- All status text should use neutral plain language; avoid unsupported guarantees (secure, fully synced, lossless, instant token revocation, no provider access).
- Each screen must be linked to an observed Figma node/prototype route in the evidence matrix after it actually exists.

## Execution status

**PROPOSED / NOT RENDERED.** Use the separate Figma Make and Lovable briefs to explore these screen families with invented fixtures. Record the actual outcome and only then select interactions to carry into the editable Figma Design. The remaining genuine writer study and the separate G_DESIGN/G_CODE owner approvals are still pending.
