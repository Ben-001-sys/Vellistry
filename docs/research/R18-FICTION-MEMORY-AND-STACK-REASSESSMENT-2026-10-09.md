---
id: VEL-RES-R18-20261009-002
type: architecture-comparison
status: source-research-not-implemented
created_at: 2026-10-09
updated_at: 2026-10-09
author: project-research
version: 0.1.0
sources:
  - "docs/research/R07-LIVE-STORY-PROFILES-CONCEPT-MODEL-2026-10-09.md"
  - "docs/research/R15-MANUSCRIPT-PRIVACY-AND-BYOK-THREAT-MODEL-2026-10-09.md"
  - "https://www.novelcrafter.com/features/codex"
  - "https://docs.langchain.com/oss/javascript/concepts/memory"
  - "https://www.postgresql.org/docs/current/textsearch.html"
  - "https://github.com/pgvector/pgvector"
  - "https://orm.drizzle.team/docs/extensions"
  - "https://docs.ollama.com/capabilities/embeddings"
  - "https://arxiv.org/abs/2607.05577"
  - "https://arxiv.org/abs/2606.05724"
related_research:
  - R05
  - R06
  - R07
  - R08
  - R15
  - R18
  - R19
related_adrs:
  - ADR-0003
  - ADR-0005
---

# R18 — Architecture reassessment: AI memory for long-form fiction

**As-of 2026-10-09; source-based research and design hypothesis, NOT a deployed memory implementation, measured benchmark, accepted database schema or newly approved stack.** ADR-0005's earlier accepted status was premature and corrected to proposed pending owner confirmation and tests.

## 1. Vellistry-specific required memory

Vellistry's R07 owner-requested Live Story Profiles and approved MVP require: AI-off human writing; accepted and versioned chapter prose; visible Character + Storyline profiles, manually editable; source-linked candidate state changes; separate author approval for AI prose and extracted profile deltas; safe retcons; story-time vs reader-chapter order; and author-controlled active/disabled writing guidance.

R07 defines five epistemic states: accepted manuscript, planned future/outline, candidate extraction, author-approved canon, and subjective/uncertain claims. A character asserting a rumor does not establish objective world fact. No outside model or retrieval service can silently convert provisional material to canon.

## 2. Technology evidence and limitations

- Novelcrafter publicly documents Codex automatic character-name/alias mentions and chronology-dependent Progressions; useful product baseline, NOT visibility into its private architecture: https://www.novelcrafter.com/features/codex
- PostgreSQL has native ranked, indexable full-text search: https://www.postgresql.org/docs/current/textsearch.html
- pgvector adds exact/approximate semantic similarity search in Postgres, with filtered ANN recall and multitenant concerns: https://github.com/pgvector/pgvector
- Drizzle supports pgvector columns/indexes and custom migration to install extension: https://orm.drizzle.team/docs/extensions
- Ollama offers local embedding generation and documents representative embedding models; local hardware, licensing and quality still need tests: https://docs.ollama.com/capabilities/embeddings
- LangGraph's memory taxonomy separates short-term sessions from long-term semantic facts, episodic history and procedural instructions; conceptual inspiration NOT mandatory framework adoption: https://docs.langchain.com/oss/javascript/concepts/memory
- Narrative World Model (July 2026) and Narrative Knowledge Weaver (June 2026) are **preprints** proposing evidence-grounded temporal structures for long-form story recall; results are research signals, not Vellistry validation: https://arxiv.org/abs/2607.05577 and https://arxiv.org/abs/2606.05724

## 3. Alternatives compared

| Pattern | Advantage | Vellistry failure risk | Assessment |
|---|---|---|---|
| Pass entire book or growing AI chat | Simple first prompt | Context limit, distracting text, spoiler and stale data | Reject as primary memory |
| Rolling summaries only | Compact | Hallucinated or outdated canon without evidence | Noncanonical derived cache only |
| Vector-only RAG | Retrieves paraphrased distant prose | Matches future chapters, rejected drafts, unreliable dialogue | Supplement, never authority |
| Automatic knowledge graph as truth | Multi-hop relations | False facts propagate; expensive annotation, review | Defer graph-first MVP |
| Manual profiles + exact keyword/source retrieval | Safe, inspectable, AI-independent | Author effort, limited paraphrase recall | Essential fallback/baseline |
| **Author-approved temporal event ledger + lexical/optional vector evidence** | Explicit approvals, scene/POV timeline and citations | Needs tested status/time/revision logic | Preferred research hypothesis |

## 4. Proposed six-layer architecture

1. **Source manuscript:** chapter-scoped Tiptap JSON with immutable accepted revision ID, book/author identity, scene boundaries and audit history. Authoritative prose lives in durable storage and is unaffected by an LLM rejecting/producing alternatives.
2. **Canonical story state:** manually authored or explicitly approved Character/Thread properties and event ledger with effective story time, known-by, source scene/revision/span, status, epistemic type, supersession/retraction history. This is the authoritative state for story facts.
3. **Scene/event context:** scene and chapter synopsis, narrative order, optional fictional story-time order, unresolved thread/goal references and involved characters. AI-generated synopses are labeled derived and not promoted to canon without review.
4. **Evidence retrieval:** names/aliases + full-text search across authorized current book excerpts. Optionally index version-bound chunks with local embeddings in pgvector, after measured benefit. Chunk at scene/paragraph boundaries and retain cited exact source range, NOT anonymous bare vectors.
5. **Writing policy memory:** certified original frozen guidance rules, author enabled/disabled settings, creative exceptions, style preferences and task-specific context preview. These are instructions, not story facts.
6. **Conversation/task memory:** temporary session intent and selected prose, generated alternatives, proposal approval history; a chat message never becomes canonical story truth merely because it is in context.

No separate graph DB, vector DB, paid memory SaaS or LangChain dependency is needed for this initial hypothesis. PostgreSQL can store structured relational state plus FTS, with pgvector optional.

## 5. One Complete/Rewrite context assembly flow

1. Author and book authenticated; ensure requested scene, source revision and action belong to that book. Deny cross-user/book access in API **and** jobs.
2. Load **current accepted selection/scene** and nearby accepted source prose. Load manual approved profiles + event deltas valid at the target **story-event time**, filtered for the chosen POV character's knowledge. Planned outlines stay explicitly marked as plans.
3. Retrieve citation-bearing passages by aliases/FTS and, if experimental vector indexing is enabled, semantic similarity. Apply scope, acceptance, time, POV and current-revision filters before context composition. Re-rank and deduplicate to a bounded token budget.
4. Resolve effective rules with default/on/off, user creative exceptions and request-snapshot provenance. Disabled rules must not re-enter via cached chat or prompt history.
5. Show author an inspection view of what will influence the local model; be honest about omissions and unknown chronology. Manual writing works with AI disabled and memory lookup without an embedding model.
6. Model response is a **proposed alternate passage**, not a database write. Author accepts/rejects/edits; source revision conflict check before adoption.
7. Model- or rule-extracted candidate profile changes are reviewed **separately**; only explicitly accepted changes enter canonical state.
8. On later author edits/retcons, invalidate stale summaries, dependent evidence chunks and associated embeddings and mark previously approved evidence as needing revalidation when its source disappears. Preserve audit history.

### Fiction chronology example

Chapter 3: Mara breaks her wrist. Chapter 17: Mara is healed. Chapter 24: author writes a flashback to before Chapter 3.

- Write Chapter 8 (chronologically between): wrist **injured**, if those source/event times are approved.
- Write Chapter 20: wrist **healed**.
- Write Chapter 24 flashback: no later injury or healing injected into earlier event-time.
- A POV protagonist who never learned of the injury cannot be treated as knowing it simply because the reader/narrator knows.
- A rejected AI continuation claiming Mara dies changes **neither** accepted manuscript nor approved canon.

Vector similarity alone could retrieve "Mara healed" when working on Chapter 8; the chronology, revision, POV and approval filters must prevent such a mistake.

## 6. R18 stack comparison after considering memory

| Candidate | Memory feasibility | Operational concerns | Decision state |
|---|---|---|---|
| Next.js/React + Postgres/Drizzle + Graphile Worker | Strong fit; typed SQL events, FTS, optional pgvector, async index jobs | SSR editor boundaries, auth/worker isolation and self-hosting | **Preferred untested proposal** |
| React/Vite + NestJS (or Express) API + same Postgres/worker | **Equally capable for memory**; separate backend can isolate long work | Extra deployable/auth/API scope, but potentially clearer service boundary | Serious alternative needing comparison |
| Offline-first SQLite + sync backend | Strong local manuscript ownership; independent app | Multi-device sync, session/auth, conflict policy become complex | Not current hosted-first candidate |
| Managed vector/LLM memory services | Available SDKs | Paid service, opaque privacy/retention, auto-memory risks | Excluded under owner constraint |

The correct memory **domain contracts** should be independently testable in either frontend framework. No benchmark yet establishes that Next is empirically superior to Vite+NestJS. Choosing PostgreSQL is more supported than choosing the exact API framework.

## 7. Zero-paid implementation options and phases

- **Phase 0:** manually maintained story profiles + SQL lookup and full-text search. Works with no AI model.
- **Phase 1:** chapter revision, events, story-time projections, candidate author review, clear context preview; deterministic fixtures.
- **Phase 2:** optional Ollama local embeddings, pgvector index and source-grounded hybrid ranking only if more effective than FTS; use same embedding model for indexing/query, version every vector and reindex on change.
- **Phase 3:** only after hardware, model-license/quality, latency and privacy tests, optional *local* fiction generation/extraction via model adapter. A no-fee inference service is not guaranteed at public-user scale.

No paid APIs/hosting/embeddings or mandatory AI at registration. Local models still have CPU/GPU, bandwidth and storage costs. Keep large-context requests scoped; do not send the whole novel for each rewrite.

## 8. Synthetic falsifiable gates — NOT_RUN

| ID | Test | Outcome required to accept design |
|---|---|---|
| MEM-01 | Two books share a character name | Zero cross-book retrieval or mutation |
| MEM-02 | Injury/healing at different story times | State changes correctly by chronology |
| MEM-03 | Late-written flashback | Future-story events not leaked |
| MEM-04 | POV learns secret later | No premature knowledge injected |
| MEM-05 | Rejected AI draft asserts death | No manuscript or approved canon change |
| MEM-06 | Author deletes original supporting passage | Stale evidence excluded pending review |
| MEM-07 | Disable writing rule in active project | Rule absent from full effective new request |
| MEM-08 | FTS vs pgvector vs hybrid over original synthetic long story | Record source correctness/recall, missed citations and spoiler leakage; no guessed scores |
| MEM-09 | Old extraction job finishes after revision change | Stale result not adopted; indexed source version checked |
| MEM-10 | No AI/embedding service running | Manual profiles and non-AI writer workflows fully operational |
| MEM-11 | Backup/export and restore into clean project | Chapters, approvals, rules and source revisions preserved without secrets |
| MEM-12 | Same three-chapter workflow on two app stack candidates | Measured editor+auth+worker complexity and save latency; not hypothetical rankings |

**Recommendation:** Keep Next/PostgreSQL/worker as the leading candidate, but require owner review and basic measured tests. The memory model should be approved by its behavior and safety, not by the presence of "RAG" in a framework list. No schema, model, deployment or AI accuracy claim is promoted by this document.
