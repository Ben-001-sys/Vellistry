---
id: HIS-20261010-002
title: Owner accepts research recommendations and product requirements for Waves 1 through 3
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
  - "Fiction Writing Project conversation, 2026-10-10: owner wrote: I agree to all this wave 1 to 3. Original conversation permalink not archived in repository."
  - "docs/research/OPTION-B-WAVE01-R01-260-SOURCE-MAPPING-REVIEW-2026-10-10.md"
  - "docs/research/OPTION-B-WAVE01-R02-R03-ONE-PASS-AUTHOR-EVIDENCE-2026-10-10.md"
  - "docs/research/OPTION-B-WAVE02-R05-R16-EDITOR-ACCESSIBILITY-2026-10-10.md"
  - "docs/research/OPTION-B-WAVE02-R11-DOCX-AND-PORTABLE-RESTORE-2026-10-10.md"
  - "docs/research/OPTION-B-WAVE03-R15-K2B-MANUSCRIPT-PRIVACY-2026-10-10.md"
  - "docs/research/OPTION-B-WAVE03-R07-TEMPORAL-PROFILES-EXTRACTION-2026-10-10.md"
evidence:
  - "Exact owner statement: I agree to all this wave 1 to 3."
  - "Agreement applies to Wave 1–3 findings and their proposed product-direction recommendations, not claims that unrun experiments passed."
  - "Approval does not authorize Figma, paid services, production code activation, deployment or release."
related_adrs:
  - ADR-0004
  - ADR-0007
related_requirements: []
related_events:
  - HIS-20261010-001
corrects: []
corrected_by: []
commit_refs: []
---

# Owner decision — accept Wave 1, Wave 2 and Wave 3 findings and recommendations

## Exact authority and limits

> I agree to all this wave 1 to 3.

Recorded on **2026-10-10** as an explicit broad **owner endorsement of the findings and recommended product direction** delivered for Waves 1–3. This does not mean the owner individually inspected every original guidance text, completed an interview, viewed an experiment, signed a legal opinion, approved a paid service, accepted a quality metric as representative, or ordered changes to the production app. No clock time or missing permalink is invented.

## Accepted product direction: Wave 1

- **Author workflow:** Manual-first, AI-independent drafting, chapter organization, continuity and story records, visible saved/unsaved/recovered/conflicted state, reliable export, control of authorial voice, and inspectable optional AI requests and reversible changes. Public first-person reports are supporting *secondary* evidence—not Vellistry interviews.
- **Immutable guidance:** Retain all **260 original source records** (130 compact and 130 expanded) unchanged under ADR-0007. Keep source/variant/hash identity separate from operational toggles.
- **Operational rules mapping:** Accept the proposed **134 versioned operational control identities** for future specification: **130 expanded-primary** entries, plus separately addressable compact **AR-02, AR-04, AR-06 and AR-09**. The remaining original compact records stay intact and traceable.
- **Default policy:** Accept **130 expanded-primary catalog entries ON**, and **four independent compact extra entries OFF** as future library defaults. **AI use itself remains OFF/optional by default**. A rule enabled in a catalog is NOT automatically injected into every request; select only author-visible operation-relevant approved guidance, allow author overrides/disable/inherit, do not leak disabled rules, and do not silently rewrite text or canon.
- **Important distinction:** These policy/default choices are **owner-accepted as design requirements**, **not technically enabled**, frozen to app schema, or deployed. A final implementation migration still requires change review and exact-source mapping/traceability.

## Accepted product direction: Wave 2

- **Accessible editor requirements:** Keyboard-first editing, visible focus, accessible editor name and save/conflict status, undo/reject, no interfering shortcut during composition, correct Unicode and bidirectional writing, and measurable chapter-sized performance. The actual research editor has role=textbox but lacks explicit aria-label/aria-labelledby in the measured fixture.
- **Format policy:** Keep editable Word DOCX and publication EPUB workflows distinct. Prefer a **loss-aware semantic DOCX** path preserving supported Heading/paragraph/inline marks with explicit unsupported-feature handling; Calibre remains an EPUB/publication research direction, not lossless DOCX roundtrip. Keep an independent portable full-project backup for chapters, revisions, story profiles and rules. The precise **production converter/hosting language remains unselected**; the Python study does not amend the approved Next/Nest architecture.
- **Evidence limits:** Pandoc's measured loss of one empty paragraph and Calibre's Heading-style loss are accepted *observations*, not waived defects. Real native OS IME, screen readers, arbitrary Word fidelity and operational recovery remain unverified.

## Accepted product direction: Wave 3

- **Manuscript privacy:** Favor **live-session-aware, author-owned server enforcement** on manuscript and sensitive profile/export operations. An unexpired JWT or issued signed link alone cannot be described as immediately revoked. Prevent an alternate direct PostgREST/Storage route from bypassing sensitive-session controls, require private Storage and short-lived download capability with accurate TTL disclosure, and scope cross-account caches, browser drafts, SSR, Storage, exports and deletion.
- **Draft recovery tradeoff:** Require an explicit user-facing retain/delete-local-copy choice where possible on logout/account switching; never silently destroy unsynced original writing, and never claim IndexedDB is secure from same-origin scripts or device access. The exact UX and retention period still require specification and validation.
- **Deletion truth:** Distinguish immediate access denial, main database/Storage purge, downloadable exports, cached local copies, provider logs and backup retention. Never promise immediate irreversible global erasure without measured evidence.
- **Living Story Profiles:** Separate *story time* from *chapter/discourse order*. Author-manual edits work without AI. Model/parser-produced facts are always **pending and source-linked** until explicit author approval; accepting prose does NOT approve a profile change. Unknown time, dreams, unreliable testimony, rumors, retcons, old source revisions and future knowledge require abstention, qualification or renewed author review. Do not autogenerate objective canon based on a surface match.
- **Extractor baseline:** The 24-synthetic-example naive regex score (**6 TP, 10 FP, 4 TN, 4 FN; 37.5% precision, 60% recall**) is accepted as an **illustration of errors**, not a statement about an LLM's accuracy or a product quality target.

## Not approved, not tested, and remaining separate gates

- No statement that recruited author interviews, actual screen-reader/native IME sessions, authenticated production security/Storage/SSR/export/delete checks, full Word fidelity, real model extraction, or backup encryption/offsite restore have been completed. Never upgrade **NOT RUN**, **FAILED**, **BLOCKED** or **OWNER REVIEW** test statuses merely because this direction was accepted.
- No deployment of 134 rule defaults, edit to immutable source bodies, adoption of production Python conversion service, real customer/manuscript transfer, external inference, paid services, compliance attestation, legal sign-off, or new application feature coding.
- **Owner's earlier accepted Option B still controls sequencing**: dedicated Figma Make/Lovable and editable Figma Design exploration remain blocked until a **separate explicit design-entry decision after pre-design closeout**. Wave 4 remains the only active research pair (R08/R21 optional provider privacy/cost and R14/R21 author-rights/licensing/operations); subsequent Waves 5–6 queued.
- Actual user-selected session wording, detailed draft retention/storage duration, country-specific legal terms, final license/vendor/provider choice, availability and RPO/RTO remain owner/qualified-review questions; this umbrella acceptance **does not invent a missing clock value, contract or technical guarantee**.

**Disposition:** Owner-accepted research-to-product **direction and default policy** for Waves 1–3; no test certification, no implementation or design-stage authorization. Keep the research source documents as original evidence; refer to this dated owner event for the subsequent acceptance.
