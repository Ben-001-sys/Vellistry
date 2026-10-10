---
id: HIS-20261010-046
title: Owner explicitly confirms integrated Vellistry direction for the MVP
type: historical-event
status: recorded
occurred_on: 2026-10-10
recorded_on: 2026-10-10
time_precision: day
created_at: 2026-10-10
updated_at: 2026-10-10
author: project-research
actor: project_owner
version: 1.0.0
sources:
  - "Fiction Writing Project conversation, 2026-10-10: owner wrote 'I approve this for mvp' following confirmation that all six Option B research PRs were merged to main; conversation permalink not archived in repository."
  - docs/requirements/MVP-SCOPE-DECISION-2026-10-09.md
  - docs/plans/OPTION-B-WAVE05-MVP-FINAL-DECISION-2026-10-10.md
  - docs/history/2026-10-10-owner-delegated-mvp-design-entry.md
evidence:
  - "Exact owner text: I approve this for mvp"
  - "Approval applies to the integrated research-informed MVP product direction and the already selected bounded MVP feature scope."
  - "The owner did not explicitly sign off on a completed Figma design, authorize production deployment, certify security/usability, or approve transferring real private manuscripts."
related_adrs: []
related_requirements: []
related_events:
  - HIS-20261010-001
  - HIS-20261010-002
  - HIS-20261010-003
  - HIS-20261010-004
corrects: []
corrected_by: []
commit_refs: []
---

# Explicit owner confirmation — Vellistry MVP direction

## Exact owner approval

> I approve this for mvp

The project owner stated this on 2026-10-10 after the complete six-PR research/governance chain merged into `main`. This is **explicit confirmation of the recommended Vellistry MVP direction**, not a claim that the underlying research experiments constitute production-ready features.

## Approved direction and intended implementation target

- Retain the previously accepted eight MVP areas: books/chapters, manual Tiptap-based editor, durable drafts/portability, author-controlled Story Profiles, source-preserving Rules Studio, optional bounded AI, author review/reversibility, and privacy/accessibility/trust.
- Retain Wave 5 narrow AI scope: **Continue Writing** and **Rewrite a single contiguous selected span in one paragraph**, curated initial OpenRouter BYOK adapter, users' own **free or paid keys**, fully functional manual AI-OFF writing, review-before-accept, revision-safe acceptance and compensating undo; no silent profile canon approval.
- Retain the already owner-accepted 134 operational guidance identities/130 expanded-primary default ON/four compact extras OFF for future author-controllable specification, without altering 260 historic compact/expanded source bodies.
- Retain the previously selected Next.js/NestJS/Supabase and Tiptap/ProseMirror application foundation as the current development baseline; treat research implementations and synthetic fixtures according to their actual validation status.
- Proceed with bounded MVP design/specification and implementation planning. The earlier Wave 6 delegated choice permits two invented-data concept directions, an editable Figma Design and consenting author validation.

## Approval boundaries and remaining signoffs

This message **does not expressly approve a finished design, authorize starting unrestricted product feature implementation, approve private manuscript transfer or paid Vellistry-funded services, or authorize staging/production deployment**. A final owner-reviewed design and an engineering execution decision should be recorded before moving from concept/specification into feature implementation. It is not a demand to redo all six completed bounded research waves.

Still unverified as release gates: real novelist task tests, native IME and assistive-technology checks, stable cross-block keyboard editing, production Auth/session/SSR/Storage isolation and account switching, real revision CAS/recovery/deletion and encrypted backups, actual provider request/privacy and model evaluation, Word fidelity, licensing/legal obligations and provider cost constraints. No previous negative finding is silently marked PASS.

**Decision state:** MVP direction **OWNER APPROVED**; design **NOT YET SIGNED OFF**; product implementation/release authorization **NOT INFERRED**.
