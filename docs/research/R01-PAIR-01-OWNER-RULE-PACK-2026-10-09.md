---
id: VEL-RES-R01-SOURCE-PAIRS-20261009-001
type: source-variant-research-report
status: verified-source-structure-decision-pending
created_at: 2026-10-09
updated_at: 2026-10-09
author: project-research
version: 0.1.0
sources:
  - "Original uploaded Branch · Research AI Writing Problems.md — SHA-256 fda917550811ccf44fe2fa7993d14a0f4f64d6dde5299d0c5b078865c4f0f965"
  - "docs/research/R01-SOURCE-INTEGRITY-AND-AR-VARIANT-AUDIT-2026-10-09.md"
  - "Original uploaded AI Writing App Blueprint.md — SHA-256 9b2840cd65310802f9495c426ea8820ece4635d7f1ee503a3e055e30bfe2be24"
  - "Original uploaded Research AI Writing Problems.md — SHA-256 f011fd1e65de076f5f35bda18625dced3627a26968a3a48c9d05700d46355aeb"
related_research:
  - R01
  - R06
related_requirements:
  - VEL-REQ-001
  - VEL-PRODUCT-SCOPE-20261009-001
---

# R01 Pair 01 — Source-faithful audit and owner packaging decision

## Reproducible evidence

Read **the user's original uploaded bytes** of \`Branch · Research AI Writing Problems.md\` without modification. Local reproducibility: \`python scripts/r01_manifest.py "/path/to/Branch · Research AI Writing Problems.md" --out source-manifest.json\`. The source is intentionally **not** copied into Git by this research PR.

- Original source bytes: **986,553**, raw SHA-256 **fda917550811ccf44fe2fa7993d14a0f4f64d6dde5299d0c5b078865c4f0f965**.
- Exactly **130 unique codes**, each appearing once in the compact taxonomy and once in the full expansion (**260 headings**). Exactly **13 domains × 10 lenses** in both.
- Case-insensitive title differences: **13/130** — all ten AR codes, \`DS-09\`, \`PV-05\` and \`PV-10\`.
- The prior R01 source-integrity audit reported the same 13; this independent extraction rechecks structure and prints **all 130 paired variants** with actual source line numbers and per-heading hashes.
- This script's CI synthetic tests verify cardinality/duplicate/missing behavior, but **do not** constitute an external verification of absent historical originals or an owner-selected canonical pack.

## The 13 differences (verbatim headings, original line numbers)

| Code | Compact taxonomy | Expanded section |
|---|---|---|
| DS-09 | Generic-body-language awareness (2010) | GENERIC BODY-LANGUAGE AWARENESS (5076) |
| PV-05 | Narrator-character separation (2134) | NARRATOR–CHARACTER SEPARATION (10086) |
| PV-10 | Metafictional leakage awareness (2149) | METAFICTIONAL KNOWLEDGE LEAKAGE (10482) |
| AR-01 | Emergent theme (2326) | THEME THROUGH EMBODIMENT (18179) |
| AR-02 | Thematic restraint (2329) | THEMATIC MULTIPLICITY (18289) |
| AR-03 | Symbolic accumulation (2332) | SYMBOLIC RESTRAINT (18373) |
| AR-04 | Moral complexity (2335) | MOTIF EVOLUTION (18455) |
| AR-05 | Genre intelligence (2338) | GENRE-PROMISE AWARENESS (18539) |
| AR-06 | Work-specific obsessions (2341) | CONVENTION WITH SPECIFICITY (18630) |
| AR-07 | Authorial attention (2344) | AESTHETIC COHERENCE (18718) |
| AR-08 | Productive eccentricity (2347) | IDIOSYNCRASY PRESERVATION (18821) |
| AR-09 | Homogenization resistance (2350) | INTENTIONAL OMISSION & UNRESOLVED SPACE (18915) |
| AR-10 | Artistic coherence (2353) | WORK-SPECIFIC ARTISTIC IDENTITY (19008) |

### Material divergence examples: do not resolve silently

**AR-04:** compact source says "Moral complexity" (avoid neat moral interpretation); expansion concerns the evolution of recurring motifs. **AR-09:** compact says "Homogenization resistance" (do not smooth all prose toward bland generic writing); expansion concerns intentional omissions/unresolved space. These are different creative checks, not safe cosmetic aliases. Other AR codes often redistribute or qualify themes rather than precisely match.

## Safe invariant and packaging proposal

Do not key storage or toggles with \`AR-04\` alone before choosing the canonical user-facing mapping.

Use immutable source records with composite identity \`source_sha256 + section_variant + code\` and exact source title/body/line position. Preserve both compact and expanded original wording for author inspection. Keep editable author preferences in separate tables and user-selected active rules in a **versioned mapping** to approved canonical IDs. An AI request snapshot must record the exact selected source revision and effective enabled/disabled rules. Neither the parser nor model may infer which disagreeing meaning "wins".

## Owner decision required — not yet made

| Option | Meaning | Consequences |
|---|---|---|
| **P1 (recommended for evidence preservation)** | Archive compact and expanded text separately and require explicit owner choice for the active/default meaning of every conflicting ID. No automatic rewrite. | Faithful and reversible; R01 deployment gate stays blocked until conflicts resolved. |
| **P2** | Owner explicitly selects **compact** as active default for each conflict; expanded content remains a separately labeled archived alternate. | Preserves 130 compact entries but may omit substantial long-form expanded instruction content. |
| **P3** | Owner explicitly selects **expanded** as active default for each conflict; compact remains archived. | Preserves long-form detail but alters the compact code's expected subject (most visible for AR-04/AR-09). |
| **P4** | Owner commissions a **new reviewed mapping** with unique additional IDs, no deletion or silent rewriting of originals. | More capable but a *new author-owned creative decision*, not recoverable mechanically from original source. |

P1 is a safety-oriented **proposal**, not user approval. The owner must choose the deployable mapping and decide what to do with truly divergent code semantics. Claim **R01 SOURCE AUDIT PASSED; DEFAULT PACK CERTIFICATION BLOCKED ON OWNER**. No default rules or provenance can be silently published.

## Other unresolved source provenance

The raw historical 20-section/42-requirement standalone artifact and certain origin timestamps were not independently recovered. The three uploaded originals and archive hashes prove identity of available copies, not completeness of the original research lineage. Keep that evidence gap separate from the R01 default-rule meaning decision.

## Gate to next research pair

R01 structural inventory: **PASS** based on exact uploaded source. R01 canonical default packaging: **BLOCKED** pending explicit owner decision and final source-preserving pack test. Paired track R15/K2B progresses independently; Batch 01 does not close until both complete.
