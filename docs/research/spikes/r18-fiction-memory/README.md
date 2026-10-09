# R18 — Synthetic temporal story-memory proof (experiment v0.1)

**Status: research executable, NOT production application code.** This is a deterministic Node ESM prototype, intentionally isolated from Next.js, Drizzle, Graphile, PostgreSQL, Ollama, user files and network calls. It tests R07/R18 behavioral invariants before choosing any persistence schema or accepting the full app stack.

## Run

Requires Node.js 22 or later, no npm install:
```sh
node --test docs/research/spikes/r18-fiction-memory/memory.test.mjs
```

Local execution on **2026-10-09, Node.js v22.16.0: 23 tests, 23 passed, 0 failed**. GitHub Actions also runs this exact command and is a *separate* validation gate.

## What the synthetic fixture represents

- Two isolated books/owners sharing a character name; four chapters in the first book and one in the second.
- Injury effective at story time 3, recovery at 17, separate narrative-order flashback to 1 and unknown time.
- Character POV that acquires knowledge of an injury only at time 11; objective canon vs in-story belief.
- Accepted, rejected and pending candidate changes, source revision IDs, scene evidence chunks and action-scoped enabled/disabled author rules.
- Context preview with canonical projection, evidence citations (book/chapter/revision ID), disabled-rule exclusion, warnings and source-revision conflict rejection.

## Guarantees demonstrated within the fixture only

Book scoping, source revision staleness rejection, basic event-time state projection, POV knowledge filtering, no promotion of candidate/belief to objective canon, rule exclusion, simple revision-aware lexical evidence lookup and memory preview without a model or external service.

## Important limitations

1. In-memory JavaScript objects supplied to the function are **trusted synthetic input**; production data authorization, SQL transactions, RLS, concurrency, ownership grants, cryptographic signatures and untrusted input schema validation are not tested.
2. Story time is represented as simple ordered integers, not a production calendar, nonlinear timeline or ambiguous event ordering solver. Unknown time is excluded, not inferred.
3. POV access is conservative: explicit knowledge annotations only; it does not model reader/narrator disclosure or distinguish all forms of unreliable testimony.
4. Event field projection assumes later effectiveAt+sequence overrides earlier values. It does not solve conflicting authorship, partial order, multi-valued attributes or supporting-evidence reapproval.
5. Evidence retrieval is a tiny **lexical match only**, not PostgreSQL FTS, pgvector, embeddings, reranking, chunking or a long-book quality benchmark.
6. Rules are artificial stand-ins and do not certify Vellistry's owner-frozen default pack.
7. No AI extractor or model is called; no actual manuscript import, autosave, DOCX conversion, backup/restore or multi-account web app is exercised.
8. Node v22 tests do **not** validate the proposed Node 24 + Next.js/React integration or compare that stack against Vite/NestJS.

**Current ADR boundary:** ADR-0005 remains **proposed** on draft PR #17; this spike provides only the first MEM-01…MEM-10 style contract evidence. No application architecture is approved solely because a pure function passed.

Next: SQL-backed book/auth/revisions and FTS validation, then compare optional embeddings; measure real editor+worker integration and recovery before stack decision.
