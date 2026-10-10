---
id: VEL-DES-JOURNEY-STATE-MATRIX-20261010-001
title: Vellistry 11-journey screen and interaction-state coverage matrix
type: proposed-ux-acceptance-matrix
status: proposed-not-executed
created_at: 2026-10-10
updated_at: 2026-10-10
owner: project_owner
version: 0.1.0
sources:
  - docs/requirements/MVP-USER-JOURNEYS-AND-ACCEPTANCE-2026-10-09.md
  - docs/requirements/MVP-SCOPE-DECISION-2026-10-09.md
  - docs/plans/OPTION-B-WAVE05-MVP-FINAL-DECISION-2026-10-10.md
  - docs/architecture/IMPLEMENTATION-BOUNDARIES-2026-10-10.md
---

# Vellistry — journey, screen and state trace (PROPOSED)

## Coverage semantics

This matrix translates **all eleven existing VEL-JRN-001–011** from the accepted-scope research into **proposed** editable Figma screens, UI interactions and writer-test assertions. A journey may use multiple screens. A single static mock is not an executable end-to-end journey. No author test, product API or actual recovery has been executed by creating this matrix.

**Frame IDs currently present in Figma:** `1:2` writing-first concept; `1:3` story-workspace concept; `6:2` unified editor; `6:47` save conflict; `6:98` rewrite review; `6:148` canon review. The two concept directions must be compared; the four unified candidate screens remain unapproved. Present evidence: **six editable frames**, not eleven completed flows. Remaining rows are backlog, not fabricated Figma artifacts.

| Journey | Proposed user task / primary screen(s) | Existing Figma evidence | Essential states to design and test | Completion |
|---|---|---|---|---|
| **VEL-JRN-001** | Create a book; two chapters; edit, reorder and return to correct chapter | editor `6:2`, A `1:2` illustrate chapter rail | empty library, create book/chapter, reorder preview, pending-save navigation, duplicate names | **PARTIAL STATIC** — create/reorder unbuilt |
| **VEL-JRN-002** | Edit, format, search, paste, undo and navigate keyboard-only without AI key | editor `6:2`, A `1:2` illustrate manual focus | empty chapter, 500+ words, keyboard focus, IME/RTL, formatting toolbar, no-key state | **PARTIAL STATIC** — interaction unbuilt |
| **VEL-JRN-003** | Close/reopen, interrupted save, compare draft, export TXT/DOCX and restore supported state | recovery `6:47` illustrates conflict | saving, lost ACK, offline, local/server compare, recovery decision, export loss report, backup/restore, deletion | **PARTIAL STATIC** — functional export/restore unbuilt |
| **VEL-JRN-004** | Create, locate and edit manual character/thread profiles | B `1:3`, A `1:2`, canon `6:148` show profile presence | empty characters, new character, new thread, edit, timeline field, out-of-date facts | **PARTIAL STATIC** — profile editing unbuilt |
| **VEL-JRN-005** | Review suggested profile fact and separately approve, edit, dismiss | canon decision `6:148`, B `1:3` | unapproved, evidence missing, source stale, story-time mismatch, approved/dismissed history | **PARTIAL STATIC** — action semantics untested |
| **VEL-JRN-006** | Browse 134 mapped controls, disable/restore and add a scoped rule | B `1:3` mentions rules but not editable catalog | initial defaults, overrides, disabled rule, scope conflict, effective-request preview, personal rule edit | **NOT BUILT** — design Rules Studio |
| **VEL-JRN-007** | Connect a vetted BYOK route, preview recipient/excerpt/rules/cost and request Continue | A/B concept AI OFF notes only | provider unconnected, key masked, consent denied, route verified, request pending, timeout, no-charge claim avoided, preview | **NOT BUILT** — no provider screen/flow |
| **VEL-JRN-008** | Rewrite one contiguous span in one paragraph, reject/accept and undo persisted change | rewrite review `6:98` | invalid multi-paragraph selection, source changed, success receipt, reject, persisted undo, previous revision | **PARTIAL STATIC** — no real interaction/undo |
| **VEL-JRN-009** | Accept AI text, then independently evaluate fact proposal | rewrite `6:98` + canon `6:148` separate concepts | proposal accepted but canon pending; candidate dismissed/edit approved; provenance links | **PARTIAL STATIC** — linking/interactions unbuilt |
| **VEL-JRN-010** | Keep editing during AI request; receive stale result; recover safely | rewrite `6:98` suggests original revision, recovery `6:47` distinct conflict | pending provider, local edit, stale response, prevent apply, continue manually, cancel/regen prompt | **NOT BUILT** — stale proposal UI distinct from save conflict |
| **VEL-JRN-011** | Switch accounts; verify isolation; retrieve/export/delete own data and see residual session warning | none | unauthorized ID/API path, signed-out JWT limitation disclosure, confirm delete, export ownership, account-scoped local drafts, no cross-book cache | **NOT BUILT** — actual authorization requires backend testing |

**Do not mark any of the above `PASS`** from Figma alone. `NOT BUILT` and `PARTIAL STATIC` describe **design coverage**, not application functionality or research outcomes.

## Screen inventory and production-code boundary

This is the next *design* inventory. Screen IDs `DES-SCR-xx` are **proposed design identifiers**, not existing routes, React components or Figma IDs.

| Screen ID | Working screen/pattern | User-facing coverage | Planned artifact |
|---|---|---|---|
| DES-SCR-01 | Book library / create / empty | JRN-001,011 | editable desktop + small-view frames |
| DES-SCR-02 | Chapter organizer and book notes | JRN-001 | reorder/unsaved navigation overlays |
| DES-SCR-03 | AI-OFF manuscript editor | JRN-001,002 | refine existing `6:2`; toolbar and a11y focus variants |
| DES-SCR-04 | Save state and draft reconciliation | JRN-003,010 | refine `6:47`; lost-ACK separate from definite conflict |
| DES-SCR-05 | TXT/DOCX export, warnings, backup/restore | JRN-003,011 | export loss report + verification/confirm states |
| DES-SCR-06 | Story workspace / character / thread editor | JRN-004 | expand B concept into real editable flow |
| DES-SCR-07 | Canon suggestion with source/story-time review | JRN-005,009 | refine `6:148`, include missing/stale evidence |
| DES-SCR-08 | Rules Studio and effective-preview inspector | JRN-006,007 | catalog, scope, disabled behavior; avoid sending all rules |
| DES-SCR-09 | Optional BYOK setup and exact-request consent | JRN-007 | free/paid author-owned key; route status, text transfer, error states |
| DES-SCR-10 | Continue writing proposal and review | JRN-007,009,010 | insertion-point proposal, no silent manuscript edit |
| DES-SCR-11 | Rewrite one-paragraph-span review | JRN-008,009,010 | refine `6:98`, stale/undo/receipt variants |
| DES-SCR-12 | Revision history, undo and source provenance | JRN-003,008,009 | accepted immutable revision vs candidate |
| DES-SCR-13 | Privacy/account/sessions/export/delete | JRN-011 | explicit residual token warning and ownership boundaries |

There are thirteen *proposed screen families*, not a promise of thirteen separate navigational pages; overlays and dialogs may share components. Screen IDs are design-only, for traceability. Avoid treating proposed screen count as accepted MVP feature expansion.

## Interaction-state contract

### S1. Chapter editor / acknowledged state

| State | Status message to design | Forbidden inference |
|---|---|---|
| Clean committed | `Saved • revision {n}` only on acknowledged durable commit | Do not infer from local draft or timeout |
| Dirty | `Unsaved changes` | Do not display green success icon |
| Saving | `Saving…` with pending indicator | Do not guarantee delivery |
| Offline | `Offline. Saved on this device for recovery.` only if local persistence is actually confirmed | Do not call this server-saved |
| Unknown after timeout/lost ACK | `Checking whether your last save completed…` | Do not immediately resubmit non-idempotent write or declare lost |
| Conflict | `A newer server revision exists. Review both versions.` | Do not silently overwrite |
| Recovered | `Recovered draft — review before replacing accepted text.` | Do not auto-promote to accepted canon |

Exact copy must be validated during UX design and later matched to actual API semantics. Last-revision number and server timestamp must come from a genuine server receipt in the implemented product.

### S2. AI proposal lifecycle

`AI OFF/unconnected → consent & request preview → requested → pending → proposal available | cancelled | failed → author compares → accepted (committed CAS receipt) | rejected | stale`.

- **Continue** inserts only at the author's explicitly chosen insertion point.
- **Rewrite** rejects noncontiguous or multi-paragraph selection in MVP; do not auto-expand the range.
- A proposal must be visibly distinguished from accepted writing. Plain-text-only output, visible model/recipient, failure and credit uncertainty, ability to keep writing while pending.
- If source revision/selection changes, `stale` is non-accepting; offer compare/retry, not silent rebase.
- `Undo` is a persisted compensating revision; if later edits exist, show conflict rather than erasing them.
- A generated story fact after prose acceptance is a **new, separate candidate**, not an automatic canon update.

### S3. Privacy/consent lifecycle

`AI unavailable → optional connection → inspect explicit request payload and recipient → user consents per task → inference attempt`. The author must be able to cancel without losing writing. Show that the selected provider processes submitted text; do not suggest Vellistry cannot see a plaintext key on the authorized server proxy. No external provider operation until real model/terms/privacy/region review. For sign-out, do not claim server-side immediate invalidation of an unexpired direct PostgREST token.

## Negative design test probes

| Probe | What the writer must recognize/do |
|---|---|
| Two tabs editing revision 11; server accepted revision 12 | Observe mismatch and choose a non-destructive comparison path |
| Edited selection while rewrite request pending | Stale proposal cannot be accepted through outdated offsets |
| Changed a rule after preview, before generation | Current effective request is refreshed/confirmed, not hidden stale rules |
| Rejected generated alternative contains character fact | Canon stays unchanged |
| DOCX has unsupported table/section marks | Warning identifies unsupported features before accepting potentially lossy import/export |
| Lost save ACK | Status remains uncertain until receipt/server revision reconciled |
| Provider unavailable/expired key | Manual editing and local recovery stay usable |
| User signs out then tests previously issued unexpired JWT | UI does not misrepresent sign-out as guaranteed immediate token revocation; production security unresolved |

## Required observational evidence to move beyond draft

Each journey needs: Figma node link(s), task script, platform/browser, participant consent ID (not identifying personal information), observation date, actual actions/results, bugs, accessibility notes, usability interpretation, designer revision, reviewer/owner decision. Do not store recordings, unpublished prose, email addresses, API secrets or sensitive identifiers in GitHub. See [writer validation plan](VEL-DES-002-WRITER-VALIDATION-PLAN-2026-10-10.md).

The design-stage result can be marked complete only when genuine consenting authors have exercised representative journeys and the owner accepts the revised editable design. This still does not establish operational security, production persistence, DOCX, native assistive tech or AI-model effectiveness.
