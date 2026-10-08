---
id: VEL-RES-R01-20261008-001
type: research-finding
status: draft
created_at: 2026-10-08
updated_at: 2026-10-08
owner: project_owner
version: 0.1.0
related_research:
  - R01.01
  - R01.02
  - R01.03
  - R01.04
  - R01.05
  - R01.06
  - R01.07
sources:
  - SRC-001
  - SRC-002
  - SRC-003
  - SRC-004
  - "FIction writing App Google Doc (secondary synthesis)"
evidence:
  - "SHA-256 and ZIP CRC read-only checks on available attachments, 2026-10-08"
  - "Line-anchored comparison of SRC-003 taxonomy and expanded-manual headings"
  - "Google Docs connector readback of the current consolidated document"
---

# R01 — First source audit: verified inventory, taxonomy drift and evidence gaps

**Research status: PARTIAL; not approved as a finalized canonical source map.**  
**Application architecture, development stack and project scope: UNDECIDED.**  
**Audited on:** 2026-10-08 (day precision only).

## 1. Boundaries and methodology

This is evidence-gathering from the user's accessible original files, archive contents, Google Doc and current GitHub knowledge branch. It does not independently validate claims in external web pages cited by the source conversations. It does not reconstruct missing files, select preferred product technologies, normalize changed fiction guidance, or declare any manuscript data model. Source line numbers below refer to the current unmodified Markdown source text, using 1-based lines. Original files have not been committed to the GitHub repository.

Read-only methods: SHA-256 checks of available files; ZIP central-directory listing, CRC verification and exact byte comparison against standalone Markdown; regex enumeration of taxonomy codes and detailed-heading titles; section spot checks; comparison with the current Google Doc's domain-index wording; inspection of research source records on this branch. No original source was modified.

## 2. Exact source inventory and provenance

The current Git source register has the following identities; hashes were independently reproduced from the attached bytes:

| ID | Original accessible source | Size, bytes | SHA-256 | Classification |
|---|---|---:|---|---|
| SRC-001 | `AI Writing App Blueprint.md` | 30,455 | `9b2840cd65310802f9495c426ea8820ece4635d7f1ee503a3e055e30bfe2be24` | Product/user intent and **assistant-proposed** technologies / claims |
| SRC-002 | `Research AI Writing Problems.md` | 65,926 | `f011fd1e65de076f5f35bda18625dced3627a26968a3a48c9d05700d46355aeb` | Original reader-problem research conversation |
| SRC-003 | `Branch · Research AI Writing Problems.md` | 986,553 | `fda917550811ccf44fe2fa7993d14a0f4f64d6dde5299d0c5b078865c4f0f965` | Expanded reader research, 13-domain taxonomy, fiction guidance manuals and operational templates |
| SRC-004 | `Getting Better With Agentic Coding - Copy.zip` | 176,660 | `ff1c2bd398833fd4d1a4b8b05440589ce8d941a224cea3b05bf302b9293a03b8` | Nine Markdown items on agentic coding and engineering knowledge governance; **not** application architecture authority |

**Extra transport archive:** `chatgpt-exported-chats-md-3.zip` (351,996 bytes; SHA-256 `7832d584f62e0c159e38d9d85f9da9bb84f721b74404091482dd217fc12af65b`) contains exactly SRC-001, SRC-002 and SRC-003 as individual Markdown entries. ZIP CRC verification passed, and every archived entry was byte-identical to the corresponding separately mounted original. This ZIP is a transport/duplicate grouping, **not three new sources**.

**Duplicate attachments:** `AI Writing App Blueprint.md`, `AI Writing App Blueprint(1).md`, `AI Writing App Blueprint(2).md` and `AI Writing App Blueprint(3).md` are byte-identical SHA-256 copies of SRC-001. Preserve only one logical source identity while retaining original upload provenance.

**SRC-004 archive:** contains nine Markdown members (plus the archive directory entry); ZIP CRC verification passed. The `AGENTIC_CODING_PROJECT_SOURCE_DECISIONS.md` member has its own source governance assertions for a broader agentic-coding initiative. Treat it as **background on research/governance methods** unless the Vellistry owner explicitly adopts a specific point. Never import source-specific infrastructure decisions as Vellistry technical commitments.

**Google Doc:** [FIction writing App](https://docs.google.com/document/d/10Pbsw5w0jNpthSL3_cnuOw2WiiUrtTBqmPUgWyPm18k/edit), a substantial organized synthesis in Parts I–X; it is **not** a verbatim archive of SRC-003. It currently indexes Domain 13 with short taxonomy labels, not the expanded manual's differing labels.

## 3. Core fiction-system coverage confirmed inside SRC-003

- The **13-domain master index** is visible around SRC-003 lines 1916–2355; every domain has 10 numbered lens IDs, from NI-01 through AR-10.
- Each of 130 unique codes has both an index heading and an expanded-heading occurrence (2 occurrences per code in the inspected heading patterns).
- Expanded Domain 1 starts at `## NI-01` around line 2364. Expanded Domain 13 starts at `# AR-01` around line 18179. Both are represented **in the exported conversation**.
- The Fiction Writing System Constitution begins near line 19922 and contains **40 consecutively numbered governing principles**, with `# 1.` at 19954 and `# 40.` at 21022.
- The reusable Story Bible template begins near line 23064, a continuity-ledger template near 25374, the expanded Post-Draft Audit near 34823, Anti-Repetition/Pattern Audit near 36521, Long-Range Narrative Audit near 39023 and Artistic Identity pass near 41760.
- This establishes **textual availability in the conversation**, not that the corresponding standalone module files or originally named fiction-system ZIP were built, validated, or are available now.

## 4. Confirmed mismatch: indexed lens headings versus expanded headings

Across the 130 unique lens IDs, **13 title strings differ** between the initial short index and the expanded manuals. **Ten are all ten AR (Domain 13) entries** and appear substantively rephrased or re-scoped; their semantic equivalence and correct mappings **must not be assumed**. The other three include typography-only differences and one wording difference. These are title-level comparisons, *not* judgments about whether prose inside the entries is substantively equivalent.

| ID | Short master taxonomy (line) | Expanded manual (line) |
|---|---|---|
| AR-01 | Emergent theme (2326) | Theme through embodiment (18179) |
| AR-02 | Thematic restraint (2329) | Thematic multiplicity (18289) |
| AR-03 | Symbolic accumulation (2332) | Symbolic restraint (18373) |
| AR-04 | Moral complexity (2335) | Motif evolution (18455) |
| AR-05 | Genre intelligence (2338) | Genre-promise awareness (18539) |
| AR-06 | Work-specific obsessions (2341) | Convention with specificity (18630) |
| AR-07 | Authorial attention (2344) | Aesthetic coherence (18718) |
| AR-08 | Productive eccentricity (2347) | Idiosyncrasy preservation (18821) |
| AR-09 | Homogenization resistance (2350) | Intentional omission & unresolved space (18915) |
| AR-10 | Artistic coherence (2353) | Work-specific artistic identity (19008) |
| DS-09 | Generic-body-language awareness (2010) | Generic body-language awareness (5076; only punctuation/spacing) |
| PV-05 | Narrator-character separation (2134) | Narrator–character separation (10086; punctuation) |
| PV-10 | Metafictional leakage awareness (2149) | Metafictional knowledge leakage (10482; wording) |

**Implication:** Do not let a future rules importer equate `AR-04` with a single definition just because the ID is the same; the index describes moral complexity, while the expanded manual heading describes motif evolution. Preserve both with provenance. Review full definitions, determine whether this is a deliberate revision or unintended title/identity collision, then seek author approval for an authoritative mapping. The **Google Doc currently reflects the short-label AR definitions** and should not be silently rewritten.

**Tentative severity:** AR-01 through AR-10 require semantic review before any authoritative automated Rule Studio import; the three non-AR differences appear lower risk but still need a wording/meaning check.

## 5. Missing independent artifacts and archive questions

These were **not present among files currently accessible in this session**:

- The older `FICTION-SYSTEM-COMPLETE.zip` or any original ZIP specifically containing one file per guidance module. Thus prior reports that separate Domain 1, Domain 13 and numbered Post-Draft Audit files were absent **cannot be independently verified against that ZIP here**.
- A standalone `Domain 13 — Theme, Symbolism, Genre & Artistic Identity.md` or `08 — Post-Draft Audit.md`.
- `Reusable Story Bible Template.pdf`, previously described in SRC-003 as only one page; its actual PDF page count was not verified here because the PDF was unavailable.
- A completed `FICTION-SYSTEM-COMPLETE.md` merged reference file. SRC-003 proposes making one but its existence has not been verified.
- A standalone `AI_WRITING_STUDIO_RESEARCH_AND_PRODUCT_BLUEPRINT_v0.1.md`, referenced in the blueprint export as a separate ~8,100-word / 20-section / 42-requirement download. The exported conversation's historical sandbox URL is **not evidence that the standalone bytes are available**.

**Disposition:** Original container completeness remains an evidence gap. Do **not** mark missing modules 'recovered' merely because extended text appears in SRC-003. Seek the actual historical ZIP/source file or explicitly approve a reconstruction project with versioned provenance.

## 6. Evidence quality / authority distinction

- SRC-001 contains the **user's product wish-list** but also assistant-written comparisons, prospective architecture, vendor availability claims and recommendations. The latter are **research hypotheses**, not user approval of an architecture.
- SRC-002 and SRC-003 are conversation exports mixing user instructions, assistant synthesis and external links. Many reader/community observations are anecdotal. Individual references must be retrieved and judged before a claim becomes independently 'verified'.
- SRC-001 has **11 empty citation-component placeholders**, so those sections do not carry usable resolved tool citations in the exported Markdown. It also includes sandbox download links that cannot be assumed to exist in this runtime.
- The feature requests to preserve voice, flexible guidance, author control, professional manuscript editing and differentiated publishing are from the user, but model/framework choices remain unapproved.
- Project/agentic governance decisions from accepted repo ADR-0001 and ADR-0002 concern **repository co-location and metadata**; they do not select any fiction application data architecture or technology.
- The Google Doc is a secondary planning synthesis and cannot replace original long-form sources when resolving an ambiguity.

## 7. R01 question-level progress (audit, not project decision)

| Question | State after this pass | Remaining work |
|---|---|---|
| R01.01 Inventory sources, duplicates and archives | PARTIAL / substantial inventory verified | Preserve durable copies and register all future references |
| R01.02 Reconcile missing standalone modules/ZIP | BLOCKED on original fiction-system ZIP | Examine actual ZIP; distinguish missing packaging versus missing prose |
| R01.03 Audit 13 domains, 130 lenses and 40 principles | PARTIAL / counts confirmed; **13 mismatched titles discovered** | Compare full definitions, exceptions, semantic scope and Google Doc paraphrases |
| R01.04 Recover 20-section/42-requirement blueprint | BLOCKED on standalone artifact | Obtain actual Markdown or mark claims as unaudited |
| R01.05 Verify research citations and industry claims | OPEN | Live official/vendor and community-source verification, with checked dates |
| R01.06 Source authority classification | PARTIAL | Passage-by-passage user instruction vs assistant suggestion vs external evidence |
| R01.07 Change/source version authority | PARTIAL | Add stable source snapshots and source-linked changes; preserve history |

## 8. Recommended next bounded research tasks (not implementation authorization)

1. **R01-A / priority high:** semantic comparison of each AR-01 through AR-10 master/expanded pair, preserving both texts and tagging `equivalent`, `overlapping`, `distinct`, or `cannot determine`. Do not silently select a winner.
2. **R01-B / priority high:** locate original module ZIP and the standalone research product blueprint; verify SHA-256, ZIP contents, and missing-file claims if obtained.
3. **R01-C / priority high:** begin detailed proposed-requirements extraction from **user-authored** text in SRC-001 before downstream assistant-proposed design; use exact line anchors.
4. **R01-D / priority high:** audit claims that influence major costs/rights, especially editor extension licenses, MCP host functionality, Canva restrictions and publishing rules against dated official sources.
5. **R01-E / priority medium:** connect source records to durable archival links or approved copies, consistent with repo governance and privacy review.
6. **R02/R03 after R01 entry point:** conduct interviews and competitor feature testing; do not infer confirmed demand from anecdotal online complaints alone.

## 9. Verification summary

**Verified:** source hashes, identical duplicate blueprints, three exact ZIP duplicates, both ZIPs passing CRC, 13 domains and 130 unique paired lens codes, 40 numbered constitutional principles, presence of expanded Domain 13 and Post-Draft Audit in conversation text, title mismatch matrix, absence of listed standalone files from presently accessible session assets, and the Google Doc's use of short AR labels.

**Not verified:** factual accuracy of external citations and licensing, full semantic alignment of 130 lenses, completeness of historical ZIP artifacts, actual file presence outside this workspace, author approval of any one of the competing AR definitions, full extraction of original requirements, commercial viability, or technical architecture.

**Review boundary:** Draft research on a documentation branch only; not merged, not a product/architecture decision. No original source bytes changed.
