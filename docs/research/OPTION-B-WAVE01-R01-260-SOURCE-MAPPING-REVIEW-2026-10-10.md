---
id: VEL-RES-OPTIONB-WAVE01-R01-20261010-001
type: source-preserving-full-record-evaluation
status: review-packet-prepared-owner-activation-not-approved
created_at: 2026-10-10
updated_at: 2026-10-10
owner: project_owner
version: 1.0.0
sources:
  - "Private project source: Branch · Research AI Writing Problems.md; SHA-256 fda917550811ccf44fe2fa7993d14a0f4f64d6dde5299d0c5b078865c4f0f965; 48,369 lines"
  - "docs/decisions/ADR-0007-immutable-compact-expanded-guidance-sources.md"
  - "docs/research/R01-134-CONTROL-OWNER-MAPPING-PROPOSAL-2026-10-09.md"
  - "https://github.com/Ben-001-sys/Vellistry/pull/33"
related_research: [R01, R06]
related_adrs: [ADR-0007]
---

# Option B Wave 1, Track B — complete 130-pair source inventory, comparison and default proposal

**Scope and confidentiality:** Re-examined the private original supplied in the Fiction Writing Project, not a synthesized replacement guide. Original source SHA-256 is **fda917550811ccf44fe2fa7993d14a0f4f64d6dde5299d0c5b078865c4f0f965**; **48,369 lines**. All 130 compact records and 130 expanded records were retrieved by their previously audited original line numbers, with complete original body passages, individual content hashes and line spans in the **user-delivered private research bundle**, **not committed to GitHub**. The full private bundle also contains 130-row CSV and 134-alias activation proposal. Repo notes avoid pushing unpublished guidance text to a new remote by inference.

## Exhaustive per-pair disposition (not a false semantic certificate)

| Measure | Result |
|---|---|
| Stable domain distribution | **13 original domains x 10 codes = 130** |
| Original compact/source records | **130** |
| Original expanded/source records | **130** |
| Immutable original source identities | **260**, never rewritten or deduplicated |
| Full private compact-and-expanded body extractions with SHA/line span | **130 of 130 paired source entries** |
| Paired headings with same normalized topic label | **117** |
| Different printed headings reviewed | **13** |
| Distinct-control meaning conflicts flagged | **4** (AR-02, AR-04, AR-06, AR-09) |
| Other related/reworded heading differences | **9** |
| Versioned operational aliases **proposed** | **134** = 130 expanded-primary + four additional compact-only aliases |
| Active mapping/version approval | **NONE**; owner activation decision pending |

**Critical meaning distinction:** The 117 title-aligned pairs are **same-topic expansions**, not bit-for-bit equivalent text, proven model equivalence, or a claim that every long example is identical to the compact sentence. The private packet contains both complete texts and an extracted expanded "Core principle" for every code so the owner can inspect the actual difference. No source line was promoted to active AI instructions.

## Thirteen title differences — exact compact versus expanded intent

| Printed code | Compact original heading | Expanded original heading | Semantic treatment / suggested operational identity |
|---|---|---|---|
| **AR-01** | Emergent theme | THEME THROUGH EMBODIMENT | Same focus through choices and outcomes; expanded-primary |
| **AR-02** | Thematic restraint | THEMATIC MULTIPLICITY | **SPLIT:** don't over-explain moral of events versus sustain plural serious thematic perspectives; compact and expanded independent |
| **AR-03** | Symbolic accumulation | SYMBOLIC RESTRAINT | Related meanings: accumulate symbol meaning without explaining; expanded-primary, compact preserved |
| **AR-04** | Moral complexity | MOTIF EVOLUTION | **SPLIT:** resist neat moral interpretation versus evolve recurring motif meanings; independent compact + expanded |
| **AR-05** | Genre intelligence | GENRE-PROMISE AWARENESS | Genre conventions/expectations used knowingly; expanded-primary, compact preserved |
| **AR-06** | Work-specific obsessions | CONVENTION WITH SPECIFICITY | **SPLIT:** particular novel's recurring concern versus distinctive execution of familiar tropes; separate controls |
| **AR-07** | Authorial attention | AESTHETIC COHERENCE | Related aesthetic selection; expanded-primary while preserving compact |
| **AR-08** | Productive eccentricity | IDIOSYNCRASY PRESERVATION | Related protection of odd but coherent literary choices; expanded-primary |
| **AR-09** | Homogenization resistance | INTENTIONAL OMISSION & UNRESOLVED SPACE | **SPLIT:** resist generic prose smoothing versus author-chosen explanatory omission/ambiguity; preserve both independently |
| **AR-10** | Artistic coherence | WORK-SPECIFIC ARTISTIC IDENTITY | Related governing sensibility of unique book; expanded-primary |
| **DS-09** | Generic-body-language awareness | GENERIC BODY-LANGUAGE AWARENESS | Orthographic/case difference; expanded-primary |
| **PV-05** | Narrator-character separation | NARRATOR–CHARACTER SEPARATION | Orthographic/hyphen distinction; expanded-primary |
| **PV-10** | Metafictional leakage awareness | METAFICTIONAL KNOWLEDGE LEAKAGE | Related plot-knowledge leak; expanded-primary; preserve compact warning |

**Other 117 codes:** source headings and primary themes align across the compact summary and expanded Core principle. **Do not infer full-body equivalence**: the latter contains examples, valid exceptions, diagnostic questions and task context absent from the one-sentence compact index. The full original bodies and per-code comparison notes are in the private owner packet, not merged into a single textual instruction.

## Suggested 134-alias identity and default/activation policy — NEEDS OWNER APPROVAL

**Policy reflects the recorded product vision of a default-enabled creative-writing guidance library while respecting author choice.** Do not replace that vision with an assistant-selected default-off catalog.

- **Primary 130 candidates:** `<original-code>.expanded` (e.g. `CT-10.expanded`), source-locked to each expanded original; **proposed "catalog enabled" = TRUE**. They remain **INACTIVE** for actual generation until the owner approves the mapping and an author deliberately invokes an optional AI writing action with consent and explicit context preview. Manual AI-OFF writing has no network/generation dependency.
- **Additional four independent aliases:** `AR-02.compact`, `AR-04.compact`, `AR-06.compact`, `AR-09.compact`, **proposed catalog enabled = FALSE**, available for individual opt-in after owner source approval. This avoids silently conflating their meanings with expanded IDs.
- **Relevance versus global enforcement:** A catalog rule may be enabled without injecting 130 full long-form documents into every call. Assemble only topic/task-relevant instruction excerpts, within author-visible bounded context, with explicit reasons and an effective request preview. In no case may the system falsely claim every enabled rule was sent when it was not. UI/product policy must distinguish *available/enabled* from *selected/included for this operation*.
- **Author precedence:** Author chooses AI off; explicit author exception or per-book/chapter/scene disabling cannot be overridden by an ambient default. State of a rule and its source variant must remain independently addressable, show inheritance, and be reversibly reset to inherited default.
- **Overconstraint risk:** Even when rules are on in a library, they are heuristic literary lenses, not universal objective quality laws. Preserve style anomalies, genre-appropriate devices, intentional ambiguity, voice, and deliberate repetition. No hidden automatic prose rewrite or canon mutation.
- **Proposed starter attention shortlist:** NI-01, NI-05, PR-01, PR-02, DG-01, CH-01/02/03/05, CT-01 through CT-07, CT-10, AR-08, AR-10 (**19** source-provenance references). This is a **relevance prioritization suggestion, not a second duplicate rule pack or evidence of model improvement**.
- **Audit, licensing and provenance:** Keep immutable original source IDs, code/title, content hash, author selected state, inherited scope, effective request version and explicit model response/suggestion audit separate. No private original body or manuscript transferred to an external model/provider by this study.

**Why 130+4 instead of conflated 130?** The four compact AR-02/04/06/09 meanings do not correspond directly to their expanded text under the same printed code; merging would silently drop valid creative constraints. The other nine title changes are sufficiently related to remain preserved as distinct source records while *provisionally* using one expanded operational rule. **All 260 originals remain addressable regardless of active operational alias count.**

## Owner decision packet (single review; do not presume approval)

**Proposed decision for one eventual owner signature:**

> Approve preserving 260 immutable original records under ADR-0007; provisionally choose the 130 expanded variants as primary operational meanings and four separate compact controls for AR-02, AR-04, AR-06 and AR-09; set 130 primary catalog defaults ON and four compact extras OFF, with AI usage itself opt-in, per-operation relevance filtering, effective-context preview and per-book override rights. Do not silently change originals. Allow a single versioned rule-mapping record only after my explicit confirmation.

**Present owner evidence:** The 2026-10-10 request authorizes a **single consolidated research pass and progression to the next research stage**, **NOT** selection of the specific 134 aliases or the 130 ON / four OFF source defaults. **Status: OWNER DECISION NEEDED.** No operational pack is activated, and no model-quality assertions arise from this proposal. No repeat research conversation is required to inspect the output; the full source-by-source packet is already prepared for offline inspection.

## Validation boundary

Private offline audit: source digest exactly matches earlier original, parsed **130/130** compact/expanded original pairs by known source lines, **130** original codes, **260** complete preserved source bodies, **134** candidate aliases, **4** split identities, **19** starter attention candidates, **no approved active mapping**. Classification is a source-grounded analytic review, **not a full human literary expert certification of all exceptions** or a direct author signoff.

Reproducibility without disclosing originals: [R01 research proposal already in main](R01-134-CONTROL-OWNER-MAPPING-PROPOSAL-2026-10-09.md) and historical [PR #33](https://github.com/Ben-001-sys/Vellistry/pull/33). The complete local private bundle is user-facing as a downloadable ZIP in this chat, not a new Git repository blob.

**Next stage:** Under the owner's no-back-and-forth sequencing instruction, Wave 1 is complete **as a bounded research deliverable**. It cannot be declared owner-approved Rule Pack or independent real-author interviews. Continue independent **Wave 2 R05/R16 editor/accessibility** and **R11 DOCX fidelity/backup** research, preserving owner mapping review as a tracked unresolved item. No Figma/Lovable prototypes or production feature implementation follow from this result.
