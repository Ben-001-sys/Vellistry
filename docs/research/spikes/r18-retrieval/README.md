# R18 — Long-manuscript retrieval benchmark

**Synthetic research only. No paid service, real author manuscripts or accepted full-stack decision.**

## Corpus

The deterministic Python fixture generates 160 fictional chapters with 12 passages each (over 100,000 words) for Alice, plus 50 foreign-book passages for Bob and intentionally misleading future, stale, rejected and character-unknown passages. Twelve fixed author-style questions include exact terms and paraphrases. Ten have source-labeled correct answers and two test missing/unavailable knowledge. The original labels were authored before retrieval and are not model outputs.

## Compared retrieval methods

1. PostgreSQL 17 English full-text search (generated tsvector, GIN, websearch_to_tsquery, ts_rank_cd).
2. Real local BAAI/bge-small-en-v1.5 384-dimensional ONNX embeddings via open-source FastEmbed, stored in pgvector 0.8.6. **Exact cosine search**, not HNSW approximate search.
3. Reciprocal Rank Fusion of lexical and vector top-20 candidate lists with RRF k=60.

All three run within *the same* trusted author/book scope, chapter source revision, approved-status, fictional event-time and POV knowledge filters. Each returned citation must pass the safety assertions or the test fails.

## Reproduction

The workflow at .github/workflows/r18-retrieval-benchmark.yml launches disposable pgvector/pgvector:0.8.6-pg17 service containers. Two distinct jobs:
- lexical: psycopg client, no model download.
- semantic: fastembed==0.8.1; downloads the public MIT-licensed BAAI/bge-small-en-v1.5 model and performs inference on the runner CPU, with no paid embedding API.

Local commands, with DATABASE_URL pointing at a **disposable Postgres 17/pgvector database**, are:

    python docs/research/spikes/r18-retrieval/benchmark.py --mode lexical --output retrieval-lexical.json
    python docs/research/spikes/r18-retrieval/benchmark.py --mode full --output retrieval-full.json

Each job logs actual synthetic word count, library/server versions, label hit counts, recall@5, MRR@5, query and ingestion latency. JSON results (IDs and metrics only) are saved as short-lived GitHub Actions artifacts.

## Interpretation

- Recall@5: fraction of positive labeled questions with a correct evidence passage among the top five.
- MRR@5: reciprocal rank of the first labeled passage in top five, averaged over positive queries.
- Safety: any returned passage from another book, obsolete accepted revision, rejected AI output, future fictional time or character-unknown state fails the test.
- Numeric scores measured on invented, repetitive paragraphs are **not generalizable** to real long-form fiction, other languages or different embedding models. Small designed question sets may disproportionately favor or penalize particular methods.
- Query latency on GitHub Actions is a machine-specific observation. Local inference CPU requirements, model download and hosted deployment costs remain unverified.
- The benchmark is a **retrieval evidence** comparison, not an AI world-state truth test. Author-approved temporal canon still governs the memory system.
- Security here uses hard scope filters on a disposable research table, not actual authenticated sessions or RLS. Earlier PR #20 independently evaluated RLS on tiny synthetic fixtures.
- Current revision is simulated per stored excerpt; a production schema needs immutable revision records and safe atomic references.
- No HNSW/ANN tuning, reranker, model generation, auto-extraction, manuscript import, recovery or Next.js vs Vite comparison is included.

**Decision rule:** do not adopt embeddings solely because a vector extension exists. Require better ground-truth retrieval on representative fiction passages, no safety regression and acceptable local compute before adding embedding infrastructure. ADR-0005 stays PROPOSED.

## Primary technology sources

- https://www.postgresql.org/docs/17/textsearch.html
- https://github.com/pgvector/pgvector#hybrid-search
- https://qdrant.tech/documentation/fastembed/fastembed-quickstart/
- https://huggingface.co/BAAI/bge-small-en-v1.5
