---
id: HIS-20261009-002
title: Owner requested definitive free manuscript conversion decision
type: historical-event
status: recorded
occurred_on: 2026-10-09
recorded_on: 2026-10-09
time_precision: day
created_at: 2026-10-09
updated_at: 2026-10-09
author: project-research
actor: project_owner
version: 1.0.0
sources:
  - "Fiction Writing Project conversation on 2026-10-09; original permalink not archived"
  - "docs/requirements/PRODUCT-CONSTRAINT-NO-PAID-SERVICES-2026-10-09.md on PR #16"
  - "docs/research/R11-ZERO-PAID-OPEN-SOURCE-FORMAT-STACK-2026-10-09.md on PR #16"
evidence:
  - "Owner instructed: 'in this project right now and mvp we are not going to using any paying service'."
  - "Following comparative Calibre/Z-Library research the owner instructed: 'lets make a definitive decision here'."
  - "Assistant decision following this instruction: Calibre as sole primary free rich-format converter, native TXT path, editor JSON and independently restorable ZIP/JSON backup; exact owner quote does not name Calibre."
related_adrs:
  - ADR-0004
related_requirements:
  - VEL-PRODUCT-CONSTRAINT-20261009-001
  - VEL-PRODUCT-SCOPE-20261009-001
related_events: []
corrects: []
corrected_by: []
commit_refs: []
---

# R11 historical decision event — free manuscript conversion direction

## Event

On 2026-10-09, the owner had already set **no paid services** as a binding project/MVP constraint and explicitly requested open-source investigation of DOCX/TXT, possible EPUB and full manuscript recovery. After a tangent evaluating Z-Library-like many-format conversion and the verified modular Calibre approach, the owner said **“lets make a definitive decision here.”**

The assistant responded with the final R11 selection recorded in [ADR-0004](../decisions/ADR-0004-free-calibre-document-conversion-and-portable-recovery.md): **Calibre** as the primary no-paid-license rich-format engine, Tiptap 3 JSON as accepted chapter editing representation, native TXT handling, **JSZip/JSON versioned project archives** for complete recovery and **EPUBCheck** for any future EPUB exports.

## Prior state and resulting state

**Before:** R11 PR #16 listed Mammoth, docx.js, Pandoc, LibreOffice and Calibre as comparison candidates, excluded Tiptap paid services and had not chosen a converter.

**After:** The assistant recorded one definitive engine/backup design in response to the owner's request for a final choice. Selection does not imply software implementation, safe deployment, passed fidelity trials or expansion of approved post-MVP professional publishing.

## Evidence and provenance

The quoted phrases above are direct user statements in the project conversation, but a durable permalink has not been archived. **The owner's message does not literally say “I choose Calibre”; it requested a definitive decision in the immediate Calibre recommendation context.** That nuance must remain visible for owner review. No GitHub approval comment or invented second-level event time is claimed.

## Interpretation

The decision authorizes bounded synthetic research and establishes the default technology selection for R11. It does not select a full app stack, production storage, AI provider, hosted service, paid Tiptap package or publishing engine. Normal owner PR self-review/merge and R11 evidence gates still apply.

## Follow-up or correction links

- Confirm exact-head metadata CI and owner PR review.
- Execute synthetic DOCX/TXT conversion, ZIP restore, security and EPUB validation experiments before implementation/readiness claims.
- Preserve the historic candidate comparisons; supersede ADR-0004 explicitly if essential tests invalidate the selected path.
