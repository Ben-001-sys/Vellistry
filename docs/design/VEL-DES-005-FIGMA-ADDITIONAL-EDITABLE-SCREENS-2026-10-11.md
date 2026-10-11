---
id: VEL-DES-FIGMA-ADDITIONAL-SCREENS-20261011-001
title: Seven additional editable Vellistry Figma screens
type: actual-figma-artifact-inventory
status: created-structure-audited-not-approved
created_at: 2026-10-11
updated_at: 2026-10-11
owner: project_owner
version: 0.2.0
sources:
  - docs/design/VEL-DES-001-002-UX-HANDOFF-2026-10-10.md
  - docs/design/VEL-DES-004-MAKE-LIVE-WALKTHROUGH-2026-10-11.md
  - docs/requirements/MVP-USER-JOURNEYS-AND-ACCEPTANCE-2026-10-09.md
---

# Seven real editable Figma screens completed with newly connected hb4 account

The owner connected a second Figma MCP account **hb4** which can access the existing original editable [Vellistry Design](https://www.figma.com/design/krXupCfSLUnOQxEOjIlp9U). The connection reported Starter / View seat but `get_metadata` and `use_figma` confirmed file read and write access; previous account quota issues were not bypassed via a paid plan. The original file and its existing frames were **preserved**. Work remains on the original page `01 — Concept alternatives (synthetic)` rather than creating a separate competing final design.

## Preflight

- Two original concept direction frames: `1:2`, `1:3`.
- Four unified candidate frames on page `02`: `6:2`, `6:47`, `6:98`, `6:148`.
- Three more existing expanded editable frames were discovered on page `01`: `15:558` **Manuscript Editor**, `15:676` **Story Workspace**, `15:791` **Settings & BYOK Illustration**. They had not appeared in the earlier PR #55 inventory. **No duplicates of these three were created.**
- Existing file contained 18 local variables; new screens reuse its restrained ivory/green/warm-neutral visual language and remain editably structured Figma frames, text and auto-layout containers.

## Created screen IDs and exact links

| New editable frame | ID | Design intention |
|---|---|---|
| [Library & new book](https://www.figma.com/design/krXupCfSLUnOQxEOjIlp9U?node-id=27-10) | `27:10` | **Visual QA defect open:** populated book and empty-state copy shown together; correct into conditional variants before treating as implementation reference |
| [Chapter organizer](https://www.figma.com/design/krXupCfSLUnOQxEOjIlp9U?node-id=27-44) | `27:44` | Chapter identity, reorder, create, unsaved navigation |
| [Rules Studio](https://www.figma.com/design/krXupCfSLUnOQxEOjIlp9U?node-id=27-80) | `27:80` | Scoped sample controls, effective-rule preview, personal rule creation |
| [Continue at insertion point](https://www.figma.com/design/krXupCfSLUnOQxEOjIlp9U?node-id=27-113) | `27:113` | Selected collapsed caret and version, consent, stale/invalid refusal |
| [Export, backup & privacy](https://www.figma.com/design/krXupCfSLUnOQxEOjIlp9U?node-id=27-145) | `27:145` | Format-loss notices, deletion confirmation, truthful JWT caveat |
| [Profile & fact author decisions](https://www.figma.com/design/krXupCfSLUnOQxEOjIlp9U?node-id=27-179) | `27:179` | New profile/thread, pending fact, source link, edit/dismiss/approve, reversal/identity |
| [Save reconciliation](https://www.figma.com/design/krXupCfSLUnOQxEOjIlp9U?node-id=27-213) | `27:213` | Unacknowledged vs conflict, two simulated revisions, keep-both decision |

All seven were placed on the original first page at positions below existing concept frames. Frame size `1440 × 920`. Every new screen uses editable text and nested auto-layout structures; no screenshot was imported as the design.

## PR #57 visual reviewer finding — Library conditional state (UNRESOLVED IN FIGMA)

The exact-head PR review independently observed [Library frame `27:10`](https://www.figma.com/design/krXupCfSLUnOQxEOjIlp9U?node-id=27-10) and found **the populated `The Glass Orchard` book card is shown alongside the label `No books yet. Create your first book...`**, with no indication that the latter is an alternate illustration. These states are mutually exclusive in the intended product; this is an actual **static design inconsistency**, not a running-app defect.

**Approved correction target when Figma tool quota allows:**
- **Preferred:** preserve populated `27:10` as an explicit `Library / Populated` screen; create an editable `Library / Empty` companion frame (separate state) with no real book card, clear primary `Create first book` action, AI OFF default and the synthetic-only disclaimer. In the populated screen remove or replace the “No books yet” panel with a meaningful populated-state section.
- **Minimum acceptable:** visibly label the existing empty-state panel `ALTERNATE STATE — only when the library contains zero books` and explicitly indicate it is **not displayed alongside a real book card** in a production view. This must be evident visually, not only described here.
- **Acceptance evidence:** Figma screenshot/structure readback after the actual canvas mutation; verify neither state misleads an implementer about conditional rendering. Record exact changed/new node IDs.

**Current outcome:** Direct `hb4` Figma `use_figma` call to inspect/edit the Library returned **Starter MCP rate limit reached**. Consequently, **NO canvas correction was performed**. The review thread remains unresolved; documentation of intended UI logic is not equivalent to fixing the design layer. **Do not claim PR #57 is fully review-ready** until this is corrected or the owner explicitly decides to defer the visual contradiction with an implementation-safe handoff.

## Validation evidence

- The Figma write tool returned all new created/mutated node IDs and the above seven frame IDs.
- A read-only Figma structural audit retrieved all seven frame IDs, confirmed `1440 × 920` size and respectively `22,24,22,21,22,22,22` text nodes.
- No text node had an absolute bounding box outside its parent screen's bounds in that audit (**0 out-of-frame text nodes for each screen**). This does **not** prove no internal container overlap, truncation, contrast defects or accessibility failures.
- The screenshot service provided a Library image earlier, and PR #57's reviewer **subsequently independently viewed the Library screenshot**, identifying the empty/populated contradiction. **The other six new screens have not been pixel-reviewed**. Narrower desktop/mobile variants and accessibility QA remain open.

## Scope limits

These are **static, editable design screens**, not functioning application controls or tested Figma prototype interactions. Buttons and text depict author decisions; clicking them does not necessarily trigger changes. The owner explicitly directed not to require UI perfection before implementation, so remaining visual polish and responsive variants can be iterated in parallel with a separately approved coding slice. No real books, key, AI provider, database, exports, author documents or auth data were created, and no Figma Make/Lovable credits were used.

The observed Make defects (profile/fact leakage between Writer A/B, valid collapsed caret rejected) and the independent Lovable source-level deficiencies are **design/engineering rejection cases**, not features copied into the master. In particular, the fake `Saved` state may only be used as explicit *mock server accepted* context; real product implementation requires acknowledged durable revision receipt.

**G_DESIGN, G_CODE, G_PRIVATE_PILOT and G_RELEASE remain pending**. This addition alone does not authorize coding, security claims or pilot manuscripts.
