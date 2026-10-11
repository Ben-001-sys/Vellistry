---
id: VEL-DES-MAKE-LIVE-WALKTHROUGH-20261011-001
title: Figma Make live-prototype eleven-journey walkthrough evidence
type: owner-supplied-external-review-evidence
status: externally-observed-not-independently-reproduced
created_at: 2026-10-11
updated_at: 2026-10-11
owner: project_owner
version: 0.1.0
sources:
  - docs/requirements/MVP-USER-JOURNEYS-AND-ACCEPTANCE-2026-10-09.md
  - docs/design/VEL-DES-002-JOURNEY-AND-STATE-MATRIX-2026-10-10.md
  - docs/design/VEL-DES-FIGMA-MAKE-ARTIFACT-REVIEW-2026-10-11.md
  - docs/design/VEL-DES-003-CROSS-TOOL-EVIDENCE-AND-DECISION-2026-10-11.md
---

# Figma Make live walkthrough — owner-provided review evidence, not model-replayed tests

**Review received:** 2026-10-11.
**Reviewed artifact, by conversation context:** [owner-supplied Figma Make published-site preview](https://repo-buzz-33870082.figma.site/) associated with [the Make editor file](https://www.figma.com/make/ayQhoFZLnAUn9212mxaYpw/Vellistry-Writing-App-Prototype).
**Authority of observations:** The owner provided the text of a live walkthrough against `VEL-JRN-001..011` and PR #55's journey matrix. **The assistant could not independently open, drive, or visually verify the live site.** The results below are *externally reported review observations*, not an assistant-executed browser audit. The reviewer identity, browser/build revision, timestamp of each interaction, screenshots and device sizes were not supplied, and must not be invented. This is nevertheless stronger evidence than the previously mere URL-received state.

## Overall reported verdict

> A useful writing-interface concept with several working local safeguards, but incomplete journey coverage and two significant interaction defects. Its “Journey audit” overstates what I could verify.

**Scope:** Synthetic prototype only. Real persistence, authentication, AI calls and exports remain untested; mobile and assistive-technology behavior were not verified.

## Eleven-journey observations — faithfully transcribed into traceability rows

| Journey | Reviewer-reported behavior | Reviewer assessment | Implication (proposed, not yet implemented) |
|---|---|---|---|
| **VEL-JRN-001 — Create and organize a book** | Chapter switching retained the edit; chapter reordering preserved identity. No create-book or create-chapter controls available. | **Partial** | Keep keyed chapter navigation; design creation controls and empty state. |
| **VEL-JRN-002 — Write manually without AI** | Editing and keyboard text selection worked without a key; clicking Bold (B) produced no visible formatting change; no search control available. | **Partial** | Verify actual formatting command + visual feedback; add chapter search workflow. |
| **VEL-JRN-003 — Save, recover and export** | Six save states selectable; uncertain lost acknowledgement distinct from conflict. No draft comparison, reconciliation, reopen recovery or functional export/restore found. | **State illustration only** | Extend recovery from status illustration to non-destructive comparison/decision flow; simulated export must not claim real files. |
| **VEL-JRN-004 — Manage characters and threads** | One manual profile note editable; character/thread creation and broader profile editing missing. | **Partial** | Add create/edit character and plot-thread affordances. |
| **VEL-JRN-005 — Review suggested facts** | Acceptance produced a separate candidate containing the exact proposed passage; approval worked. Edit, dismiss, source navigation and story-time review missing. | **Partial** | Preserve prose/canon separation; complete evidence inspection and explicit author decisions. |
| **VEL-JRN-006 — Configure scoped rules** | Disabling a rule removed it from effective guidance and AI consent view. Only three representative controls; no complete catalog, scope editor or personal-rule creation. | **Partial** | Keep effective-rule filtering; design rule scope, restore and manual author-rule creation. Do not fabricate proprietary rule catalog bodies. |
| **VEL-JRN-007 — Provider + Continue** | Recipient/guidance/cost caveats illustrated, BYOK explicitly unavailable. Continue rejected confirmed collapsed caret, including character position 4, with “Place a collapsed caret…” guidance. | **Blocked in tested path** | Urgent UI/selection bug: correctly recognize valid collapsed caret; avoid arbitrary append/selection override. BYOK is intentional mock, not an integrated provider. |
| **VEL-JRN-008 — Rewrite/reject/accept/undo** | Valid selection produced proposal; acceptance replaced the exact selected span; rejection preserved original; cross-paragraph selection blocked; undo worked locally. | **Demonstrated locally; persistence untested** | Preserve these core safeguards; independently test revision/Undo before actual data. |
| **VEL-JRN-009 — Prose then canon** | Prose acceptance left fact candidate unapproved; after fact approval, undoing prose flagged retained canon for review and disabled approval. | **Core separation demonstrated** | Retain source-reversal review and no auto-canon; test previously approved fact history semantics in production design. |
| **VEL-JRN-010 — Editing during pending AI** | Editing while rewrite pending marked proposal stale, disabled Accept, preserved manual text. | **Guard demonstrated** | Keep stale result non-accepting; implement version-safe CAS contract. |
| **VEL-JRN-011 — Accounts and portability** | Writer B received separate manuscript text, but a Writer B synthetic profile note marker persisted when switching to Writer A; approved/retracted fact state also carried across. Export/Delete preview buttons yielded no visible dialog. | **Isolation defect; portability incomplete** | **Critical prototype isolation blocker:** scope *all* profiles, threads, candidates, canon, revisions, recovery and UI state to persona/book; add export/delete confirmation states. Not evidence of backend authorization security. |

**Important negative finding:** The prototype's own “Journey audit” reportedly labelled some coverage “Simulated functional” despite absent or ineffective controls. Treat its self-assessment as non-authoritative; status per journey above takes precedence until reproduced and reassessed.

## Preserve, repair and defer — not a request for new generation credits

### Keep in canonical editable Figma Design

- Restrained manuscript page, chapter navigation rail and separate Story Workspace as strong **reviewer-supported** writing-first visual direction, but not final usability signoff.
- Manual writing without a key; distinct save uncertainty/conflict labels; rule-disable filtering; one-paragraph Rewrite's local span replacement/reject/undo; separate prose/canon decisions and source-reversal warning; stale AI proposal rejection with manual edits intact.
- Preserve existing six editable frames as the **master**, not merely select Make or Lovable as a replacement. All copied features must become editable semantic Figma layers when quota permits.

### P0 defects to address *before relying on the affected synthetic interactions*

1. **MAKE-ISO-01 — In-memory account-state bleed (JRN-011).** Reproduce via Writer B profile marker → switch Writer A; inspect fact review state. Expected: per-account identity, profile content, threads, facts, approvals/retractions, suggestion state, draft/recovery and UI selections remain isolated. Also test A→B→A and new-book switching, not just manuscript text. Clear/revalidate sensitive pending actions on persona switch. Severity: **critical UX trust/isolation defect**, not proof of real backend security failure.
2. **MAKE-CONT-02 — Collapsed caret rejected (JRN-007).** Reproduce explicit `selectionStart=selectionEnd=4`, active editor inside Chapter 7, AI OFF→optional consent→Continue. Expected: accept a valid collapsed caret and capture its chapter/content revision, show insertion point in consent, allow fabricated proposal; reject missing, outside-editor, stale or cross-account caret. The observed rejection demonstrates the bug, **not the implementation root cause**.
3. **MAKE-REC-03 — Recovery is a label-only simulation (JRN-003).** Provide mock local/server revisions, uncertain ACK vs true conflict, two-way diff, keep local/keep server/keep both or explicit reconcile without destructive auto-overwrite. If reopen/restore cannot truly work with in-memory-only fixture, label those as **unimplemented** rather than pretending persistence. This is a missing *interaction*, not proof of defective backend persistence.
4. **MAKE-AUTHOR-04 — Missing author-facing decisions (JRN-004/005/006/011).** Add fact edit/dismiss/source/story-time review, character/thread creation, scoped author-rule creation and export/delete preview confirmations. Prioritize features needed by the first implementable slice, not pixel polish.
5. **MAKE-EDITOR-05 — Bold no visible effect, no search (JRN-002).** Verify editor formatting responds to selected text/toolbar focus and supports keyboard semantics; add bounded search, with no loss of manuscript selection.

### High-value focused retests with no generator calls

- `ISO-1`: Writer B sets distinct profile, thread and fact status → Writer A shows none → B returns intact; repeat for local drafts/recovery, consent and pending proposal.
- `CONT-1`: position collapsed caret at offset 4 and paragraph middle; request Continue and inspect fabricated proposal, accept at exact caret, then undo; repeat stale/edit/chapter switch.
- `REC-1`: edit locally at base 11 vs mock accepted 12; simulate lost ACK then compare, choose keep-both without data loss; verify status never falsely says saved.
- `FACT-1`: accept/reject prose, inspect fact evidence/source/story time, approve/edit/dismiss independently, undo prose and inspect source reversal.
- `EDITOR-1`: select phrase, click B and compare rich-text state; test keyboard shortcut and find text.
- `PORT-1`: use export/delete previews; verify actual dialog/confirmation is displayed (do not claim true export or deletion).

## Comparison with Lovable — separate products, separate defects

- **Make:** confirmed-by-reported-walkthrough P0 failures in **account state isolation** and **Continue valid collapsed-caret recognition**, with recovery/actions largely missing. Unlike Lovable, Make reportedly showed source-reversal handling and locally correct Rewrite selection.
- **Lovable:** prior independent *code-level* audit found Continue **appending to end**, permissive unknown-block rewrite selection, AI undo leaving orphan pending fact, and nonmatching source quote. Lovable's code evidence does not explain Make's cursor failure, and Make's observed strengths must not be credited to Lovable. See [Lovable audit](VEL-DES-LOVABLE-INITIAL-CODE-REVIEW-2026-10-11.md).
- **Original editable Figma Design:** hybrid candidate editor/recovery/rewrite/canon frames exist but await visual/state refinements; make it the one evolving design system and coding blueprint.

## Implementation timing and approval interpretation

The owner has clarified that **pixel-perfect, entire-app Figma screens are not a prerequisite to implementation**. These observations are enough to prioritize a small manual library/chapter/editor slice and to specify the account-isolation/recovery acceptance tests before its code is authorized. However, the Make prototype's isolation flaw **must not be copied** into application architecture. The source-authorized MVP, acceptance criteria and separate `G_DESIGN` / `G_CODE` owner decisions still apply; no runtime feature coding was performed by this evidence record. `G_PRIVATE_PILOT` and `G_RELEASE` remain pending; the known signed-out unexpired JWT/direct PostgREST private-record risk still bars real private manuscripts.

**Next:** use the results to update the canonical Figma refinement backlog; authorize only a sufficiently specified vertical slice after explicit scoped owner approval; revisit incomplete UI in parallel with development. Do not spend more Figma Make or Lovable generation credits solely to polish this synthetic demonstration.
