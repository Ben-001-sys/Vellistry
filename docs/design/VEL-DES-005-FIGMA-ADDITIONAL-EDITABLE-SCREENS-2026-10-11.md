---
id: VEL-DES-FIGMA-ADDITIONAL-SCREENS-20261011-001
title: Seven additional editable Vellistry Figma screens
type: actual-figma-artifact-inventory
status: created-structure-audited-not-approved
created_at: 2026-10-11
updated_at: 2026-10-11
owner: project_owner
version: 0.1.0
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
| [Library & new book](https://www.figma.com/design/krXupCfSLUnOQxEOjIlp9U?node-id=27-10) | `27:10` | Empty library, existing book card, synthetic create-book and account ownership |
| [Chapter organizer](https://www.figma.com/design/krXupCfSLUnOQxEOjIlp9U?node-id=27-44) | `27:44` | Chapter identity, reorder, create, unsaved navigation |
| [Rules Studio](https://www.figma.com/design/krXupCfSLUnOQxEOjIlp9U?node-id=27-80) | `27:80` | Scoped sample controls, effective-rule preview, personal rule creation |
| [Continue at insertion point](https://www.figma.com/design/krXupCfSLUnOQxEOjIlp9U?node-id=27-113) | `27:113` | Selected collapsed caret and version, consent, stale/invalid refusal |
| [Export, backup & privacy](https://www.figma.com/design/krXupCfSLUnOQxEOjIlp9U?node-id=27-145) | `27:145` | Format-loss notices, deletion confirmation, truthful JWT caveat |
| [Profile & fact author decisions](https://www.figma.com/design/krXupCfSLUnOQxEOjIlp9U?node-id=27-179) | `27:179` | New profile/thread, pending fact, source link, edit/dismiss/approve, reversal/identity |
| [Save reconciliation](https://www.figma.com/design/krXupCfSLUnOQxEOjIlp9U?node-id=27-213) | `27:213` | Unacknowledged vs conflict, two simulated revisions, keep-both decision |

All seven were placed on the original first page at positions below existing concept frames. Frame size `1440 × 920`. Every new screen uses editable text and nested auto-layout structures; no screenshot was imported as the design.

## Validation evidence

- The Figma write tool returned all new created/mutated node IDs and the above seven frame IDs.
- A read-only Figma structural audit retrieved all seven frame IDs, confirmed `1440 × 920` size and respectively `22,24,22,21,22,22,22` text nodes.
- No text node had an absolute bounding box outside its parent screen's bounds in that audit (**0 out-of-frame text nodes for each screen**). This does **not** prove no internal container overlap, truncation, contrast defects or accessibility failures.
- The screenshot service provided an image URL for Library frame `27:10`, `1440 × 920`; no independently viewed pixel-level screenshot inspection has been completed. Full visual QA and narrower desktop/mobile variants remain open.

## Scope limits

These are **static, editable design screens**, not functioning application controls or tested Figma prototype interactions. Buttons and text depict author decisions; clicking them does not necessarily trigger changes. The owner explicitly directed not to require UI perfection before implementation, so remaining visual polish and responsive variants can be iterated in parallel with a separately approved coding slice. No real books, key, AI provider, database, exports, author documents or auth data were created, and no Figma Make/Lovable credits were used.

The observed Make defects (profile/fact leakage between Writer A/B, valid collapsed caret rejected) and the independent Lovable source-level deficiencies are **design/engineering rejection cases**, not features copied into the master. In particular, the fake `Saved` state may only be used as explicit *mock server accepted* context; real product implementation requires acknowledged durable revision receipt.

**G_DESIGN, G_CODE, G_PRIVATE_PILOT and G_RELEASE remain pending**. This addition alone does not authorize coding, security claims or pilot manuscripts.
