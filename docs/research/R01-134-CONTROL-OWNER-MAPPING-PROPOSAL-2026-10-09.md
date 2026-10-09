---
id: VEL-RES-R01-CANDIDATE-MAPPING-20261009-001
type: research-mapping-proposal
status: proposed-not-author-approved
created_at: 2026-10-09
updated_at: 2026-10-09
author: project-research
version: 0.1.0
sources:
  - "Original uploaded Branch · Research AI Writing Problems.md (SHA-256 fda917550811ccf44fe2fa7993d14a0f4f64d6dde5299d0c5b078865c4f0f965)"
  - "docs/research/R01-CONFLICT-MAPPING-REVIEW-2026-10-09.md"
  - "docs/decisions/ADR-0007-immutable-compact-expanded-guidance-sources.md"
related_research:
  - R01
  - R06
related_adrs:
  - ADR-0007
---

# R01 — Operational guidance mapping proposal (130 source codes / 134 candidate controls)

**Proposal only. NOT an owner-approved mapping or deployable source pack.** The owner approved **developing** a versioned, distinct-meaning proposal. The owner explicitly reserved active rule selection, default enablement and final mappings for separate approval.

## Source identity

Preserve all **260 immutable** compact/expanded records: exactly two for each of 130 printed codes, identified by **raw-source SHA-256 + variant + printed code**. Retain exact original wording, line position, heading hash, full body, and original source. User custom rule state belongs elsewhere. No title-level deduplication, bare-code lookup, or reinterpretation of original source is permitted.

This proposal recommends a **provisional** operational reference to the expanded source for each of 130 codes, plus **four distinct additional compact-source candidates** where the original compact meaning is not interchangeable with the expanded source: AR-02, AR-04, AR-06, AR-09. Result: 134 candidate operational aliases, **zero approved/activated**. The other 126 compact sources remain visible as original archived variants, not deleted. The operational source list is not a proof that expanded bodies fully cover the compact intent; all 130 pair bodies require approval-grade semantic review.

## Thirteen heading divergences — source comparison and candidate treatment

| Printed code | Compact source (original line) | Expanded source (original line) | Research finding | Draft operational suggestion (NOT APPROVED) |
|---|---|---|---|---|
| DS-09 | Generic-body-language awareness (2010) | GENERIC BODY-LANGUAGE AWARENESS (5076) | Same broad concern; expanded examples and qualifications | Expanded candidate; preserve compact |
| PV-05 | Narrator-character separation (2134) | NARRATOR–CHARACTER SEPARATION (10086) | Related narrator/character information boundaries | Expanded candidate; preserve compact |
| PV-10 | Metafictional leakage awareness (2149) | METAFICTIONAL KNOWLEDGE LEAKAGE (10482) | Overlapping character-knowledge leakage; expanded text adds process concerns | Expanded candidate; preserve compact |
| AR-01 | Emergent theme (2326) | THEME THROUGH EMBODIMENT (18179) | Theme through choices/consequences/patterns | Expanded candidate; preserve compact |
| **AR-02** | Thematic restraint (2329) | THEMATIC MULTIPLICITY (18289) | Compact: avoid explained morals; expanded: protect competing viewpoints | **Two separate candidates** |
| AR-03 | Symbolic accumulation (2332) | SYMBOLIC RESTRAINT (18373) | Both concern earned symbolic meaning without forced explanation | Expanded candidate; preserve compact |
| **AR-04** | Moral complexity (2335) | MOTIF EVOLUTION (18455) | **Different primary subjects:** moral ambiguity versus changed meaning of recurring motifs | **Two separate candidates** |
| AR-05 | Genre intelligence (2338) | GENRE-PROMISE AWARENESS (18539) | Related genre convention/reader-expectation discernment | Expanded candidate; preserve compact |
| **AR-06** | Work-specific obsessions (2341) | CONVENTION WITH SPECIFICITY (18630) | Compact: work-specific recurring preoccupations; expanded: concrete trope execution | **Two separate candidates** |
| AR-07 | Authorial attention (2344) | AESTHETIC COHERENCE (18718) | Related aesthetic patterns and narrative attention | Expanded candidate; preserve compact |
| AR-08 | Productive eccentricity (2347) | IDIOSYNCRASY PRESERVATION (18821) | Both protect coherent unusual creative qualities | Expanded candidate; preserve compact |
| **AR-09** | Homogenization resistance (2350) | INTENTIONAL OMISSION & UNRESOLVED SPACE (18915) | **Different primary subjects:** generic prose normalization versus deliberately unanswered material | **Two separate candidates** |
| AR-10 | Artistic coherence (2353) | WORK-SPECIFIC ARTISTIC IDENTITY (19008) | Related cohesion of work-specific sensibility | Expanded candidate; preserve compact |

**Scope of comparison:** Original compact statements plus expanded headings and core principles, not guaranteed semantic identity of all paragraphs. In particular, same heading or similar intent across 117 other codes does **not** prove their entire source bodies are interchangeable. The review tool preserves both for future close reading.

## Example independent operational alias pairs — provisional, not frozen IDs

- **AR-04.compact** → source AR-04 compact, **Moral complexity**.
- **AR-04.expanded** → source AR-04 expanded, **Motif evolution**.
- **AR-09.compact** → source AR-09 compact, **Homogenization resistance**.
- **AR-09.expanded** → source AR-09 expanded, **Intentional omission and unresolved space**.

The suffixes are research-only alias suggestions. They **do not** rename original source codes, authorize activation, establish final UI naming, or bypass the final owner-reviewed mapping/version record.

## Why 134 is a candidate, not a commitment

A draft default pack that picks only 130 expanded entries could lose compact-source creative concerns for four distinct-emphasis/subject cases. Choosing both variants for **every** entry could expose 260 redundant author-facing toggles and overconstrain AI prose. Thus 134 is an explicit **candidate scope**, not a measured optimum or a replacement for the author's flexibility requirement. The user may retain separate, overlapping, disabled, custom or exception-scoped controls after final evaluation.

Where compact sources align closely with expanded versions, full-body semantic review must establish whether the expanded selection reasonably covers their intent. The 117 casefold-equal titles are not automatically certified equivalent.

## Reproducibility and gates

- Research-only proposal generator: [scripts/r01_mapping_proposal.py](../../scripts/r01_mapping_proposal.py).
- Validation tests: [tests/test_r01_mapping_proposal.py](../../tests/test_r01_mapping_proposal.py). Assertions cover 130/260/134 counts, four split pairs, nine other divergent headings, fail-closed source variants and absence of implicit activation.
- Existing source review generator: [scripts/r01_review_packet.py](../../scripts/r01_review_packet.py), and source fingerprint audit [scripts/r01_manifest.py](../../scripts/r01_manifest.py).
- Original confidential source and generated local review JSON stay outside Git.

### Still required before R01 closure

1. Complete an approval-grade comparison of the full source bodies for every compact/expanded pair, including other substantive differences that title comparison cannot detect.
2. Present the proposed operational choices plus explicit on/off defaults, rationales and exceptions for author review **without silently making selections**.
3. Record an explicit owner acceptance/revision decision for all included operational identities, mapping version and source hashes.
4. Validate the approved mapping against immutable original source sections, disallow unknown variant IDs or author-configuration changes to original text.
5. Verify Rules Studio effective-context generation and disabled-rule exclusion in a bounded test; an existing research-level proposal does not pass product integration.

**Status:** Candidate mapping specified; no operational pack certified, no AI instructions generated, and no app code deployed.
