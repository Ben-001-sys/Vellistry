---
id: VEL-PRODUCT-SCOPE-20261009-001
title: Initial Vellistry MVP product-scope decision
type: product-scope-decision
status: accepted
created_at: 2026-10-09
updated_at: 2026-10-09
decided_at: 2026-10-09
owner: project_owner
approved_by: project_owner
author: project-research
version: 1.0.0
sources:
  - "Owner message on 2026-10-09 in Fiction Writing Project: 'I agree', immediately replying to the R04 Vellistry MVP recommendation, its eight feature areas, and the explicit request to defer full Cover Studio and professional publishing. Original conversation permalink not archived."
  - "docs/research/R04-SPECIFIC-MVP-RECOMMENDATION-2026-10-09.md"
  - "docs/features/FEATURE-INVENTORY.md on PR #9 (396 discussed entries)"
  - "docs/requirements/PRODUCT-DIRECTION-FROZEN-DEFAULT-GUIDANCE-2026-10-08.md"
  - "docs/requirements/PRODUCT-DIRECTION-LIVE-STORY-PROFILES-2026-10-08.md on PR #9"
evidence:
  - "The preceding assistant offered one recommended eight-area MVP and asked for explicit owner agreement with delaying full cover design and professional EPUB/print. The project owner replied: 'I agree'."
  - "Approval covers product scope and approved deferral, but does not assert implementation, technology selection beyond ADR-0003, resolved research gates, or product readiness."
related_research:
  - R01
  - R02
  - R04
  - R05
  - R06
  - R07
  - R08
  - R10
  - R11
  - R13
  - R15
  - R16
  - R19
  - R21
related_adrs:
  - ADR-0003
related_features:
  - VEL-FEAT-02-001
  - VEL-FEAT-04-001
  - VEL-FEAT-08-021
  - VEL-FEAT-08-022
  - VEL-FEAT-09-027
supersedes: []
superseded_by: []
implementation_refs: []
---

# Accepted product-scope decision — Vellistry's first MVP

## Approval, authority, and meaning

On **2026-10-09**, the project owner answered **“I agree”** to the specific [eight-area MVP recommendation](../research/R04-SPECIFIC-MVP-RECOMMENDATION-2026-10-09.md). The recommendation ended by asking for explicit approval of **postponing the complete Cover Studio and professional EPUB/print publishing** until after the first writing-focused release. This reply is **explicit approval of the proposed product scope and that trade-off**.

**This is an accepted product-target and sequencing decision, not an assertion that a release has been built, tested, launched, priced or scheduled.** The original approval remains in project conversation; a stable transcript URL has not been archived. The record must not invent one.

## Accepted first MVP — one author-centered product with eight areas

| Area | Approved product behavior and narrow first-release boundary |
|---|---|
| **M1 — Books and chapters** | Create, reopen, rename and organize books with a simple chapter list, chapter creation/reordering, simple planning notes and useful word counts. Solo author first; no shared-series management requirement. |
| **M2 — Professional non-AI manuscript editor** | Tiptap 3/ProseMirror foundation (already separately approved under ADR-0003), headings, paragraphs, emphasis, basic lists, selection/clipboard, search, keyboard shortcuts, undo/redo, chapter navigation and distraction-free writing. Works with AI disabled. |
| **M3 — Durable drafts and portability** | Account-protected manuscript storage, honest autosave state, recovery/revisions, export and deletion; basic TXT and ordinary DOCX interchange subject to genuine fidelity testing; portable backup of manuscript plus selected approved story profiles and active rule settings. Not a publishing/layout engine. |
| **M4 — Live Story Profiles** | Character and Storyline/Thread profiles visible near the manuscript; manual create/edit without AI; candidate source-linked profile changes detected from human-written or AI-generated/accepted scenes at review boundaries; author can inspect, change, accept or dismiss; no silent promotion of uncertain AI-generated information into canon. |
| **M5 — Simplified Rules Studio** | Genuine frozen historic fiction guidance remains unchanged and initially enabled **after a separately approved non-destructive R01 packaging decision**; domain-level browsing, rule enable/disable/restore, personal rules, simple workspace/book scope, artistic exceptions, preview of effective instructions and real exclusion of disabled creative instructions. |
| **M6 — Optional bounded AI** | Familiar **Continue Writing** and **Rewrite Selection** actions using one evaluated BYOK provider initially. Which provider/model, API terms, secrets design, costs and UI are future decisions. AI connection is not needed to write manually. |
| **M7 — Author approval and reversibility** | Show alternatives/diffs; author accepts, revises, rejects or undoes changes; stale suggestions cannot overwrite later writing. Generated proposals and candidate profile changes remain distinct from approved manuscript and canon. Keep a trace of relevant rules/context and the model used. |
| **M8 — Trust and comfortable use** | Private account/book isolation, secure secrets, permission/consent for external text transfer, backup/export/deletion, keyboard/accessibility fundamentals, reliable error/save states and a desktop-primary writing experience with appropriately responsive presentation. |

**Interpretation limit:** This approval is of *user-facing scope*. It is not carte blanche for every candidate row in each area; a linked feature-ID scope map specifies the narrow selected capabilities. Individual copy, toolbar design, data model and service boundaries still need prototype evidence.

## Approved release sequence

1. **A — Internal writing foundation:** book/chapter organization, usable editor, persistent/recoverable drafting, portable backup and manually editable visible profiles; assess non-AI writer value.
2. **B+ — Integrated writer-facing pilot:** source-verified simplified Rules Studio, controlled one-provider BYOK Continue and Rewrite, review/accept/undo of text proposals, and proposed live profile changes from author or accepted generated prose.
3. **Initial public MVP:** the coherent eight areas above **only after** real author usability, author-data protection, practical document portability, editor and model tests, accessibility and release-gate evidence. It is not ready for public release by virtue of this decision.

These are **three validation/delivery stages of one product**, not three different public editions. No calendar targets are approved.

## Specifically excluded from this MVP — preserved for later Vellistry work

- **Full native layered Cover Studio**, editable multiple cover directions, AI cover-generation/asset tools and full print-wrap layout. The owner stressed covers in the original vision. This decision **postpones, does not delete**, the feature.
- **Professional EPUB, print-ready PDF, publication page layout, detailed print profiles and book-production pipeline.** Basic DOCX/TXT manuscript interchange is retained as a different and narrower need.
- Deep knowledge/causality graphs, comprehensive cross-book timeline and automated POV firewall; keep manual/current live profiles and author approvals first.
- Broad AI provider routing, model comparisons, external assistant MCP/Canva integration, full-manuscript quality automation, complex collaboration and platform-billed AI credits/subscriptions.
- Any purchased editor-extension suite or product architecture beyond the selected Tiptap 3/ProseMirror foundation.

An **excluded-from-initial-MVP** item is **not canceled**: its eventual release order remains open to R02/R12/R13 research and later explicit owner decisions.

## Research, product-safety and implementation gates (still open)

- **R01:** Certify the authentic frozen guidance source and select a safe deployable packaging treatment for short/expanded AR disputes, without rewriting the source or fabricating authority.
- **R02:** Observe real authors and validate that these functions are useful, discoverable and migration-ready.
- **R05/R16:** Real-browser, long-writing keyboard, paste, focus, reading-comfort, IME and accessibility trials.
- **R06/R08:** Actual model request/response and quality checks, disabled-rule exclusion, a verified supported provider, user-consented text transfer, credential safety and cost caps.
- **R07:** Source-linked evolving character/storyline profile accuracy, overclaim/false positives, time boundaries, rejected AI draft isolation and retcons.
- **R11:** TXT/DOCX import/export fidelity, recoverability and no silent important formatting loss.
- **R14/R15:** Secure private manuscripts and backups, account isolation, data deletion and appropriate provider disclosure.
- **R19:** Reproducible acceptance tests with no observed silent loss of accepted manuscript or unapproved canon mutation.
- **R18/R21:** Architecture/cost research as prerequisites to full app-stack choices and any pricing/launch commitment.

The scope decision does not waive these release gates. If new evidence invalidates material requirements, bring the concern to the owner as a proposed scope revision rather than silently editing this accepted decision.

## Other decisions expressly not made

No Next.js/React/Vue application framework, database, persistence schema, storage platform, authentication implementation, job engine, hosting provider, actual LLM provider, commercial extension, EPUB/DOCX implementation library, pricing, release dates, paid subscription or finished UI design was approved.

## Feature mapping and evidence controls

- Source feature inventory is still in [draft PR #9](https://github.com/Ben-001-sys/Vellistry/pull/9) and retains historical feature IDs; don't rename or delete IDs while assigning scope.
- A companion **MVP feature-horizon map** classifies the exact included and explicitly deferred IDs. Any unclassified entry is not automatically approved for MVP.
- [R04 MVP recommendation](../research/R04-SPECIFIC-MVP-RECOMMENDATION-2026-10-09.md) remains **historical pre-approval research**, even though its proposal is now accepted. Don't erase its chronology or retrospectively label earlier experiments complete.
- [Approval history event](../history/2026-10-09-mvp-product-scope-approved.md) preserves the owner statement and boundary.

**Approval status: ACCEPTED. Implementation status: NOT IMPLEMENTED. Release status: NOT READY.**
