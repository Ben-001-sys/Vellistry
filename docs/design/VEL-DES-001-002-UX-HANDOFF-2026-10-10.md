---
id: VEL-DES-UX-HANDOFF-20261010-001
title: Vellistry synthetic design exploration and unified UX handoff
type: proposed-design-handoff
status: proposed-owner-and-author-review
created_at: 2026-10-10
updated_at: 2026-10-11
owner: project_owner
version: 0.4.0
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

## Owner-confirmed three-artifact refinement strategy (2026-10-11)

The owner clarified that **the editable Figma Design created for Vellistry is the artifact to IMPROVE**, using **Figma Make** and **Lovable** as complementary prototype references. These are not three equal final product designs to maintain or independently approve.

**Artifact roles and access evidence:**
- **Master editable design:** [Figma Design](https://www.figma.com/design/krXupCfSLUnOQxEOjIlp9U), six previously created editable frames; retain A/B alternatives as comparison history, iterate the four unified candidate frames and add missing screen families. The initial Figma screenshots were inspected previously, but currently the Starter MCP call quota blocks further design read/write access; **no canvas modifications are claimed in this checkpoint**.
- **Make exploratory reference:** [Figma Make prototype](https://www.figma.com/make/ayQhoFZLnAUn9212mxaYpw/Vellistry-Writing-App-Prototype), and owner-supplied [figma.site preview](https://repo-buzz-33870082.figma.site/). Direct assistant browser/MCP access remains unavailable, **but the owner has now provided a detailed eleven-journey live walkthrough**. Treat its observed results as [reviewer-reported evidence](VEL-DES-004-MAKE-LIVE-WALKTHROUGH-2026-10-11.md), **not as independent assistant verification**. Do not infer anything about inaccessible screens beyond those observations.
- **Lovable behavioral/layout reference:** [isolated synthetic UX Lab](https://lovable.dev/projects/ff8ff817-87a7-49d2-af25-a4e018cd0787), **source-inspected** at `e0a7fd3003c6a392742c0ac7e111073252c65fb3`; its code contains a narrow `max-width: 640px` manuscript column, chapter navigator, contextual story rail, mobile drawers, library/story destination and demo controls. These are **candidate patterns from source**, not independently user-tested wins. See [four behavior defects](VEL-DES-LOVABLE-INITIAL-CODE-REVIEW-2026-10-11.md) and [11-journey comparison](VEL-DES-003-CROSS-TOOL-EVIDENCE-AND-DECISION-2026-10-11.md).

**Specific improvements to apply to our editable Figma canvas (priority order, not yet built):**

| Target existing frame | Retain from our original design | Examine from Lovable and optionally inspected Make | Concrete refinement/variants needed |
|---|---|---|---|
| `6:2` Manual-first editor | Uninterrupted manuscript and chapter rail; AI OFF first | Code-level `640px` reading measure, separated story context, on-demand left/right drawers | Improve chapter selection and status hierarchy; add unsaved/saving/confirmed/lost-ACK labels and keyboard focus; responsive `900px` and `390px` variants; no default AI interruptions |
| `6:47` Save recovery | Compare local candidate and accepted server revision | Lovable's dual synthetic revision comparison and six distinct statuses | Separate `unknown after lost acknowledgment` from actual conflict; explicit keep-both/compare/reconcile; prohibit false “Saved” when unconfirmed |
| `6:98` Rewrite review | Side-by-side original and candidate, explicit accept/reject | Lovable source-level proposal drawer and request preview, **not its defective selection logic** | Add invalid selection, pending, stale-source, and undo-conflict states; acceptance only for a selected one-paragraph span; visible source revision |
| `6:148` Canon review | Provenance, story-time, independent approve/edit/dismiss | Lovable's source-linked proposal inspector and pending vs approved fact treatments, **not its mismatched quote or broken undo provenance** | Exact source quotation, evidence-not-found and source-retracted variants; proposal approved separately from prose; undo marks linked candidate unapprovable |
| New screen families, beside original frames | Maintain typography, color tokens, `Vellistry / Action Button` variants | Lovable's book library, manual Story Workspace, illustrative Rules Studio, demo consent and privacy affordances | Design editable Library/Chapter Organizer; manual profile/thread forms; Rules Studio and effective-rule inspector; BYOK consent; Continue at selected caret; exports/revisions/privacy, prioritized by the eleven accepted journeys |

**Review gates before drawing from a third-party prototype:** verify observed frame or source, check against accepted eight-area manual-first scope and eleven journeys, reject known unsafe behavior, preserve the original Figma visual identity unless a change is supported by tests, then incorporate as editable semantic Figma nodes/components. No flattened screenshot as deliverable. Improvements may combine patterns; neither Make nor Lovable should overwrite the master design wholesale.

**Cost discipline:** inspect existing prototypes, reuse actual source and previews without generative reruns, and batch visual changes when Figma MCP quota permits. Never upgrade paid plans, publish, or trigger new Lovable/Make generation just to solve an access problem. No real manuscripts or credentials. All owners' gates remain pending.

## Figma master refinement from reported Make walkthrough (2026-10-11)

A live-site walkthrough supplied by the owner now provides practical feedback for Make (see [VEL-DES-004](VEL-DES-004-MAKE-LIVE-WALKTHROUGH-2026-10-11.md)). **Preserve our original six editable frames and design language**; use the live prototype only for the observed strengths and documented gaps. This is no longer only a conceptual comparison.

| Priority | Editable Figma target | Reported interaction insight | Next minimum design change |
|---|---|---|---|
| **P0** | Account-context and Story Workspace states (new `DES-SCR-13`, context for `6:2`/`6:148`) | Writer B profile marker and fact status persisted into Writer A despite separate manuscript text | Specify persona/book scoped profile, thread, fact, proposal, undo, recovery and consent state; account-switch clearing and visible target identity. This defect does not prove real backend insecurity |
| **P0** | Continue source selection/consent view (`DES-SCR-10`) | Correct collapsed caret at offset 4 was rejected as if no caret existed | Show caret capture, active chapter + revision, insertion preview and valid/invalid/stale caret variants; no silent append |
| **P0** | Existing save recovery `6:47` | Six status labels distinguished lost ACK vs true conflict, but no recovery interaction | Retain truthful labels; design side-by-side local/server revisions, explicit keep-both / reconcile and non-destructive recovery acknowledgment, while real persistence remains an engineering concern |
| **P1** | Existing rewrite `6:98` and canon `6:148` | Exact-span Rewrite/reject/undo, stale editing guard, independent fact candidate and post-undo review worked locally | Preserve these interaction semantics, add source/story-time inspection and separate Edit/Dismiss; verify disabled approvals on stale/retracted evidence |
| **P1** | Library / chapter organizer and manual editor | Chapter switching/reorder preserved text; book/chapter creation missing; Bold no visible result; search absent | Add create actions and empty states; define formatting feedback and search control, with keyboard selection retained |
| **P1** | Story Workspace / Rules Studio | Only one editable profile; no character/thread creation; disabled rules omitted from effective prompt but scope/add rule missing | Add manual author controls, rule scope, restore and personal-rule creation; do not invent source text for the full 134 catalog |
| **Later by slice** | Portability/privacy / narrow-screen variants | Export/delete preview buttons yielded no dialog; no mobile or assistive-tech testing reported | Design honest confirmation/warning states, then iterate responsive/accessible details during implementation and genuine testing |

**Minimum implementable UX now:** chapter/library/editor interactions can be specified without a complete thirteen-screen visual system, provided the scoped implementation tests explicitly account for book/account identity and avoid copying Make's profile/canon leakage. Design and feature coding remain separately owner-gated (`G_DESIGN`, `G_CODE`). The stronger privacy/pilot/release gates are unaffected. Avoid exhausting Figma/Lovable free credits on presentation polish.

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

## Owner clarification — implementation may start before pixel-perfect UI (2026-10-11)

**Owner directive:** The editable Figma Design is a **living implementation reference**, not a requirement to finish or polish every UI screen before development begins. Figma Make and Lovable are bounded sources of reusable ideas. We may implement **approved vertical slices** from a sufficiently clear UX contract, refine the Figma canvas in parallel with the app, and learn from real browser tests. A fully polished thirteen-screen-family deck, all visual variants, final color/typography, and completed broad usability study are **not prerequisites to authorizing the first slice**.

**Minimum design/engineering handoff for each slice:**

1. **Stable functional scope:** The accepted eight-area MVP boundaries and relevant `VEL-JRN-001..011` use cases are mapped; exactly two optional AI actions (Continue at insertion point, one-paragraph-span Rewrite); manual AI-OFF editing remains first-class.
2. **Safety-sensitive behavior is specified:** Save receipt vs uncertain/lost ACK vs conflict; non-destructive recovery; chapter/book/account isolation; author-reviewed AI proposal and safe stale/Undo; source-linked, separately approved canon; explicit AI recipient/context/cost consent. These must be **specified and testable before implementing a risky flow**, but exhaustive pixel-perfect mockups are not required.
3. **Enough UI direction for the chosen slice:** The editor/workspace IA, relevant existing editable Figma frame(s), interaction states, rough responsive treatment and basic keyboard/error semantics are documented. Unknown noncritical polish stays in an explicit UI backlog; no fabricated Figma or user-test success.
4. **Explicit bounded owner gates:** A **scoped, sufficiently specified design baseline** may receive `G_DESIGN` approval even with unfinished noncritical screens and visual refinements. **`G_CODE` remains a separate explicit approval**, after that scoped design baseline and implementable acceptance criteria are recorded. This owner clarification alone does **not** mark either gate approved or authorize product coding.
5. **Ongoing iteration:** Build one small end-to-end manual-first slice, run actual unit/integration/browser tests, correct defects, and refine the canonical Figma alongside code. New workflows need their own acceptance states before construction; shipping claims require demonstrated behavior, not a Lovable/Make generator summary.
6. **No weakening of privacy/release gates:** The known signed-out unexpired Supabase JWT/direct PostgREST exposure blocks real private manuscripts/pilots until its security boundary is actually resolved and tested. Auth isolation, durable recovery, legal/provider review, real DOCX fidelity, keyboard/IME accessibility and secure backup/restore still require evidence before the relevant pilot/release decisions.

**Prioritization:** Begin with manual library/chapter creation and editor fundamentals, then acknowledged save/recovery and profiles, then rules and optional AI/canon actions as their contracts become implementable. This is an **implementation order proposal**, not a start-coding command. Defer cosmetic polish and noncritical design variants; never defer author-trust correctness inside the feature being implemented.

## Revised design-to-code gate (not a perfection gate)

- **Before scoped `G_DESIGN`:** record the targeted user journey(s), interaction contract, critical negative states, working Figma reference, evidence known/missing and the visual/UI work that can be deferred. Owner approves that **bounded** baseline explicitly; the whole product's UI need not be finished.
- **Before separate scoped `G_CODE`:** implementation task/acceptance tests and contracts for that same slice are adequately specified; owner explicitly authorizes coding. Draft PR #55, CI passing or an existing prototype do not themselves grant permission.
- **During implementation:** maintain the canonical editable design as changes are validated; run genuine interaction/accessibility/security tests at meaningful integration points, collect participant feedback where appropriate, and iterate.
- **Before private pilot/release:** apply the stronger production safety, confidentiality, recovery, model-provider, accessibility, and real-author validation requirements for the affected features. Do not treat provisional UI or synthetic fixtures as proof.

## Traceability / non-claims

- Source journeys: `VEL-JRN-001..011`; see [journey matrix](VEL-DES-002-JOURNEY-AND-STATE-MATRIX-2026-10-10.md).
- Test design and evidence protocol: [writer validation plan](VEL-DES-002-WRITER-VALIDATION-PLAN-2026-10-10.md).
- This handoff **does not** certify writer preference for A over B, live save UX, provider quality, accessibility, legal readiness, authenticated account isolation, or Figma prototype interactivity.
