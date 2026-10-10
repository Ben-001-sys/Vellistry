---
id: VEL-DES-UX-HANDOFF-20261010-001
title: Vellistry synthetic design exploration and unified UX handoff
type: proposed-design-handoff
status: proposed-owner-and-author-review
created_at: 2026-10-10
updated_at: 2026-10-10
owner: project_owner
version: 0.1.0
sources:
  - docs/requirements/MVP-SCOPE-DECISION-2026-10-09.md
  - docs/requirements/MVP-USER-JOURNEYS-AND-ACCEPTANCE-2026-10-09.md
  - docs/research/OPTION-B-WAVE06-G10-FINAL-CLOSEOUT-MVP-DESIGN-ENTRY-2026-10-10.md
  - docs/history/2026-10-10-owner-delegated-mvp-design-entry.md
  - docs/agent-workflow/IMPLEMENTATION-TASK-DEPENDENCIES.yaml
  - docs/architecture/IMPLEMENTATION-BOUNDARIES-2026-10-10.md
---

# Vellistry — synthetic UX exploration and design-to-code handoff (PROPOSED)

## Authority, nonauthorization and evidence

This is a **design specification draft**, not approved Figma design, a released prototype, author-research evidence, or permission to implement product features. The eight MVP areas and the Wave 5 bounded AI behavior are accepted; the specific layout, screen names, color values, transitions and IA here are **proposals** that require design validation and the project owner's acceptance. Keep `G_DESIGN`, `G_CODE`, `G_PRIVATE_PILOT` and `G_RELEASE` pending. The owner authorized bounded synthetic UI exploration after Wave 6, not paid Figma functionality, real unpublished manuscripts, live BYOK model calls, product code, database migrations or deployment.

**Design artifact:** [Vellistry — MVP UI Concept Directions (Synthetic)](https://www.figma.com/design/krXupCfSLUnOQxEOjIlp9U). This is an editable Figma **Design** file; it is not Figma Make, a hosted application, or a tested interactive prototype. Invented story `The Glass Orchard`, `Mira Vale`, `Rowan` and `Elias` is demonstration-only. Any displayed `Saved`, revision number, AI proposal, fact extraction, profile approval or rules count is design copy, **not evidence that live storage, inference, or authorization occurred**.

### Figma evidence ledger (as observed in this conversation)

| Page | Frame/node link | State | What exists / limitation |
|---|---|---|---|
| 01 — Concept alternatives (synthetic) | [A Writing-first, node 1:2](https://www.figma.com/design/krXupCfSLUnOQxEOjIlp9U?node-id=1-2) | created, screenshot inspected | Quiet editor, chapter rail, story inspector, optional AI note, synthetic save status |
| 01 — Concept alternatives (synthetic) | [B Story-workspace-first, node 1:3](https://www.figma.com/design/krXupCfSLUnOQxEOjIlp9U?node-id=1-3) | created, screenshot inspected | Plot threads, temporal character context, separate canon candidate, editor entry |
| 02 — Unified UX candidate (NOT APPROVED) | [01 Manual-first editor, node 6:2](https://www.figma.com/design/krXupCfSLUnOQxEOjIlp9U?node-id=6-2) | created | Candidate unified editor: manual AI-OFF, chapters, verified-save *copy* (synthetic) |
| 02 — Unified UX candidate (NOT APPROVED) | [02 Save conflict / recovery, node 6:47](https://www.figma.com/design/krXupCfSLUnOQxEOjIlp9U?node-id=6-47) | created; visual QA incomplete | Local recovery candidate versus server-accepted revision; explicit compare choice |
| 02 — Unified UX candidate (NOT APPROVED) | [03 Rewrite review, node 6:98](https://www.figma.com/design/krXupCfSLUnOQxEOjIlp9U?node-id=6-98) | created, screenshot inspected | One-paragraph-span proposal, original/alternative, explicit accept/reject; visual mock, not live model |
| 02 — Unified UX candidate (NOT APPROVED) | [04 Canon decision, node 6:148](https://www.figma.com/design/krXupCfSLUnOQxEOjIlp9U?node-id=6-148) | created; visual QA incomplete | Evidence-backed candidate, separate approve/edit/dismiss and story-time context |

Figma also contains provisional `Vellistry / Candidate Foundation` light-mode color/spacing variables and `Vellistry / Action Button` component variants Primary, Secondary and Danger. These are **not finalized design tokens** and no alignment to app runtime CSS is claimed. The Next scaffold currently has only system-font styling; application typography, UI routes and API contracts must be agreed after design. Figma access last returned a **Starter-plan MCP tool-call limit**; further canvas work and remaining screenshots were blocked, not silently completed.

## Comparison and provisional structure

**A — Writing-first** makes the primary task writing without AI. It prioritizes manuscript focus, chapters, truthful save feedback, recoverable work and nearby author-maintained Story Profiles. Risk: deeper thread/rule work may become difficult to discover.

**B — Story-workspace-first** centers plot/character/time and candidate-canon oversight. Risk: author loses reading/writing focus and travels between panels too often, especially with smaller displays.

**Provisional hybrid to validate:** Library -> book -> chapter -> **writing-first editor** as daily home. Optional `Story workspace` exposes fuller threads/characters/time; context inspector provides essential same-scene references without commandeering manuscript. `Rules Studio`, exports/backups, AI connection/consent and history remain discoverable but secondary. This is a recommendation for testing, not an accepted design decision.

## Proposed information architecture and destinations

- **Authentication/access**: sign in, re-enter after expiry, sign out with accurate note that previously issued unexpired access tokens can remain valid; avoid claiming immediate direct-PostgREST revocation.
- **Library**: owned books; create/reopen/rename, book metadata and account-scoped import/export/delete.
- **Book workspace**: chapter order, per-chapter planning notes, manual author editor, chapter status. Changing chapters must not discard unsaved work.
- **Story workspace**: manually authored character and storyline/thread profiles; source-linked candidate facts; temporal context and approval history. Do not invent fully reliable timeline graph.
- **Rules Studio**: source-preserving 134 logical control catalog (130 expanded-primary defaults ON; four distinct compact extras OFF), author settings, scopes/exceptions and task-relevant effective-rule preview. Disabled guidance must not be passed to AI.
- **Optional AI overlay**: provider selection among later-reviewed pinned OpenRouter downstream routes, author-owned free or paid BYOK, session-only masked key, recipient/cost/context preview, exactly `Continue` at insertion point and `Rewrite` of a single contiguous span **inside one paragraph**.
- **Proposal/revision review**: original and suggested text, no automatic apply, explicit Accept/Reject, persisted acknowledged undo as new revision, stale-source rejection; accepting prose does not approve a profile change.
- **Recovery/portability/privacy**: local recovery candidates, accepted-server-revision comparison, TXT/DOCX feature-loss notice, scoped backup/restore, export/deletion/retention notices, account isolation.
- **Account/preferences**: keyboard behavior, responsive panel defaults, privacy and sign-out notices, optional AI connection management.

No URL paths, DTOs, tables or exact workflow engines are approved by the IA labels above.

## Interaction invariants (design must make the truth visible)

### Save and recovery
1. **Unsaved**: edits exist only in the editor/local recovery area; no success checkmark.
2. **Saving**: write in flight; navigation/close triggers a recoverable, accessible warning as needed, not silent loss.
3. **Saved / confirmed**: only after acknowledged server-committed revision. Show revision/time with accessible text.
4. **Offline or retryable failure**: show local recovery state, not `Saved`; offer retry and preserve local candidate.
5. **Conflict**: compare local base revision, proposed content and current committed server revision; explicit keep, reconcile, or discard, with the scope of each choice stated. Never default to overwrite.
6. **Lost acknowledgment**: distinguish `unknown whether saved` pending reconciliation from definitive failure; idempotent replay must not generate a duplicate accepted revision.
7. **Account/book switch and delete**: isolate recovery drafts by account/book/chapter; no content from another account, no background promotion of local text.

### AI request, proposals and canon
- AI is OFF by default. No-key manual writing, saving, story profiles, rules and basic export must remain available.
- The author previews the exact recipient, model, selected excerpt, approved relevant book-scoped context and enabled rules before requesting any provider transfer; no entire-book implicit transmission.
- The key is masked and held only in session memory for MVP. Free and paid author-owned keys are both permitted; no billing guarantee.
- Return proposals as **plain text**, clearly separate from the accepted manuscript. Cancellation, timeout, 401, 429, rate cap and route unavailability preserve the accepted document.
- A proposal is pinned to the source chapter, accepted revision and selected range. If the author edits meanwhile, display a stale-proposal recovery choice; never accept against changed offsets.
- Accept requires server-side revision CAS and idempotent confirmation before the UI calls the change committed. Rejection leaves accepted prose unchanged. Undo becomes a new accepted revision and cannot erase intervening edits.
- Character/thread suggestions always require **separate factual canon approval**, source quote and story-time awareness. Dismissed/unaccepted model prose cannot silently become fact.
- An authored profile and generated candidate must be visually distinguishable in every context.

## Responsive and accessibility intent (candidate, not verified)

| Context | Proposed editor arrangement | Safety requirement |
|---|---|---|
| Desktop wide (~1280+ CSS px) | Chapter rail + generous manuscript area + optional context inspector | Editor is never squeezed below a comfortable readable column; panel toggles persist per context |
| Laptop/tablet (~768–1279 CSS px) | Manuscript primary; chapter navigator and context inspector become accessible drawers/tabs | Panel transitions preserve selection and unsaved edits |
| Small viewport (<768 CSS px) | Manuscript first, drawers for chapters/context, bottom/overflow toolbar as needed | No horizontal clipping of editing actions, recovery messages or proposal decisions |
| Keyboard/screen reader | Landmark-labelled navigation, named textbox/editor, logical focus/announcement order, shortcuts optional | Critical confirmations, conflicts and selected rewrite spans perceivable without pointer |
| IME/RTL/zoom | Respect composition and caret behavior; support 200% zoom and logical reading order | Do not steal focus or alter incomplete composition; native assistive-tech testing required |

Widths are **design review targets**, not experimentally established device thresholds or app CSS requirements. Visual contrast, true screen-reader announcements, native IME, RTL and long-chapter performance remain unverified.

## Handoff completion criteria before `G_DESIGN`

1. Editable Figma components and all 11 journey paths, including empty, loading, save error, conflict, stale proposal, denied access and confirmation variants; clear approved/unapproved distinction.
2. Comprehensive design QA of actual frames and states at desktop, medium and narrow viewports, plus keyboard focus semantics and content overflow.
3. Prototype tasks and scripted research instrument in the companion plan; real consenting fiction writers tested **without invented evidence**; record observed failures and revisions.
4. The project owner reviews canonical UX, research findings and changed product interaction contracts. An evidence-backed, separately recorded signoff may transition `G_DESIGN` through a reviewed governance PR; no Figma file or CI test auto-approves the gate.
5. `G_CODE` is a separate owner decision **after** design acceptance and approved testable feature specs. Do not start VEL-IMP nodes by virtue of merging these design documents.
6. Production manuscript confidentiality, signed-out access token residual, storage, backup, restore, model-provider/legal, accessibility and release reviews remain their own pilot/release gates.

## Traceability / non-claims

- Source journeys: `VEL-JRN-001..011`; see [journey matrix](VEL-DES-002-JOURNEY-AND-STATE-MATRIX-2026-10-10.md).
- Test design and evidence protocol: [writer validation plan](VEL-DES-002-WRITER-VALIDATION-PLAN-2026-10-10.md).
- This handoff **does not** certify writer preference for A over B, live save UX, provider quality, accessibility, legal readiness, authenticated account isolation, or Figma prototype interactivity.
