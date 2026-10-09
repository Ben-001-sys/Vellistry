---
id: VEL-RES-R01-13-CONFLICT-MAPPING-20261009-001
type: research-review-matrix
status: p1-approved-active-meaning-unresolved
created_at: 2026-10-09
updated_at: 2026-10-09
author: project-research
version: 0.1.0
sources:
  - "Original Branch · Research AI Writing Problems.md (raw SHA-256 fda917550811ccf44fe2fa7993d14a0f4f64d6dde5299d0c5b078865c4f0f965), compact and expanded sections."
  - "docs/research/R01-SOURCE-INTEGRITY-AND-AR-VARIANT-AUDIT-2026-10-09.md"
  - "docs/decisions/ADR-0007-immutable-compact-expanded-guidance-sources.md"
related_research:
  - R01
  - R06
related_adrs:
  - ADR-0007
---

# R01 — Thirteen source-title differences: detailed mapping review

## Scope and authority

This is an **analyst comparison**, **not** the owner's selection of active instructions or new/revised lens meanings. The original compact/expanded wording, headings and entire section bodies remain unchanged in the privately uploaded source. All 13 divergent-title pairs are kept as **two immutable records**, in accordance with owner-approved P1 (ADR-0007). No `AR-04` or other bare printed code uniquely identifies a deployable rule until a versioned mapping is approved. Both source versions exist for **all 130** IDs, not merely these thirteen.

The `comparison` column is a **semantic hypothesis** from the compact one-line guidance and expanded first **Core principle** paragraph, rather than a comprehensive equivalence judgment of all downstream sections. `related-extension` does **not** authorize merging the two originals. `different-subject` means their primary guidance is non-interchangeable.

## Source-derived comparison (compact vs expanded headings verbatim)

| Code | Compact title | Expanded title | Preliminary relationship | Evidence-based interpretation |
|---|---|---|---|---|
| DS-09 | Generic-body-language awareness | GENERIC BODY-LANGUAGE AWARENESS | same-subject | Same named concept; expanded text elaborates list of repeated gestures |
| PV-05 | Narrator-character separation | NARRATOR–CHARACTER SEPARATION | related-extension | Same separation concern; expanded material also addresses analytical voice drift |
| PV-10 | Metafictional leakage awareness | METAFICTIONAL KNOWLEDGE LEAKAGE | related-extension | Both forbid character foreknowledge; expansion describes plot-driven anticipation |
| AR-01 | Emergent theme | THEME THROUGH EMBODIMENT | related-extension | Both emphasize theme arising from choices, patterns and consequences |
| AR-02 | Thematic restraint | THEMATIC MULTIPLICITY | distinct-emphasis | Compact discourages overt lessons; expansion addresses one-theme domination versus multiple arguments |
| AR-03 | Symbolic accumulation | SYMBOLIC RESTRAINT | related-extension | Compact favors accruing meaning without decoding; expansion warns against over-explained symbolism |
| AR-04 | Moral complexity | MOTIF EVOLUTION | different-subject | Compact concerns moral ambiguity; expansion concerns changed significance of recurring motifs |
| AR-05 | Genre intelligence | GENRE-PROMISE AWARENESS | related-extension | Both treat genre as understood reader expectations rather than surface defaults |
| AR-06 | Work-specific obsessions | CONVENTION WITH SPECIFICITY | distinct-emphasis | Compact concerns an individual book's preoccupations; expansion concerns specific rather than generic trope execution |
| AR-07 | Authorial attention | AESTHETIC COHERENCE | related-extension | Both concern recurring selective attention/aesthetic priorities of a work |
| AR-08 | Productive eccentricity | IDIOSYNCRASY PRESERVATION | related-extension | Both protect coherent unusual voice and structure from normalization |
| AR-09 | Homogenization resistance | INTENTIONAL OMISSION & UNRESOLVED SPACE | different-subject | Compact protects stylistic differences against generic smoothing; expansion concerns unsolved questions and deliberate non-explanation |
| AR-10 | Artistic coherence | WORK-SPECIFIC ARTISTIC IDENTITY | related-extension | Both concern unified work-specific aesthetic/sensibility, with expanded focus on selections |

### Most important distinctions

**AR-04** — compact `Moral complexity` directs against neat moral interpretation of events. Expanded `MOTIF EVOLUTION` concerns changing meaning of repeated images, objects, situations or sensory patterns. **These are separate writing controls**, not alternate titles for one control.

**AR-09** — compact `Homogenization resistance` protects unusual authorial prose from universal smoothing. Expanded `INTENTIONAL OMISSION & UNRESOLVED SPACE` protects meaningful open questions and deliberate lack of resolution. **Neither instruction can replace the other**.

**AR-02** — compact `Thematic restraint` discourages explaining lessons of every event. Expanded `THEMATIC MULTIPLICITY` encourages coexisting viewpoints rather than one interpretive answer. Related in theme, but not the same action or test.

**AR-06** — compact `Work-specific obsessions` makes recurring concerns specific to a novel. Expanded `CONVENTION WITH SPECIFICITY` addresses making tropes distinctive through concrete execution. Both defend artistic individuality but operate on different objects.

**DS-09/PV-05/PV-10** — title casing/punctuation varies, and the expanded explanations add examples/nuance. This comparison does not certify that bodies are byte-equivalent; even near-equal headings keep separate source identities.

## Approved invariant and not-yet-approved mapping decisions

- **Approved under P1:** preserve both, keep source SHA / variant / code provenance, never overwrite originals or collapse identities in storage, review active mapping explicitly.
- **Not approved:** which variant(s), if any, should execute as the default guidance for each printed code; whether related pairs will be shown as one UI group; whether different-subject pairs should receive new canonical IDs; precedence when rules differ; final versioned Rule Pack export.
- **Recommended safe default while unresolved:** `active_mapping: null`, and fail closed when a request attempts to activate `AR-04` or any bare ambiguous code. Display each source version separately in any **research-only** preview.

## Proposed owner review order (NOT a conclusion)

1. Decide AR-04 and AR-09, where the two versions plainly refer to different subjects.
2. Decide AR-02 and AR-06, where the subjects or operational checks diverge despite common artistic intent.
3. Review the remaining six AR codes and the three DS/PV codes to approve exact active mappings individually or adopt an explicit whole-domain policy.
4. Keep both originals archived regardless of choice, with a versioned change log and tests that prohibit silent reinterpretation.

## Gate and testing

A subsequent owner mapping decision must be captured in a new versioned mapping record with `code`, `active_source_variant` or explicitly multiple *distinct* approved identities, `reviewed_by`, date, and rationale, and must check that every referenced immutable source record exists. No model, editor, or Rules Studio code should infer active identity from printed code or title similarity. Compare actual complete original bodies before publishing a pack; this document is based on first core principle and compact guidance.

**R01 status:** Source presence: VERIFIED; P1 preservation: APPROVED; individual active mapping: **PENDING**; deployable rule pack: **NOT CERTIFIED**.
