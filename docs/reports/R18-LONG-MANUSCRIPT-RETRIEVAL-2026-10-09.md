---
id: VEL-RPT-R18-RETRIEVAL-20261009-001
type: experiment-report
status: initial-experiment-passed-extended-controls-await-ci
created_at: 2026-10-09
updated_at: 2026-10-09
author: project-research
version: 0.2.0
related_research:
  - R07
  - R08
  - R15
  - R18
related_adrs:
  - ADR-0005
---

# R18 — Long-fiction FTS, vector and hybrid source retrieval

## Evidence status

**Initial exact-head CI PASSED**, using BAAI local inference and PostgreSQL 17.11 / pgvector 0.8.6 on [run 37977706332](https://github.com/Ben-001-sys/Vellistry/actions/runs/37977706332), commit 7a9b88702e920b26b9c3eb32f9074cc1912cdcaa. The initial naive all-terms lexical baseline reached 2/10 Recall@5; exact local-vector retrieval reached 9/10, as did strict-keyword/vector RRF. Query data remained synthetic and all returned citation IDs passed the eligibility filters. **The follow-up term-OR lexical and RRF control is added but NOT_YET_RUN at this documentation revision.** This study uses no paid inference or real author manuscripts.

## Test design

- Deterministic 160-chapter x 12-passage synthetic book (>100k accepted words) plus a separate author's book and hand-constructed future/stale/rejected/POV decoys.
- Twelve fixed questions, ten with pre-defined relevant passage IDs. Ground-truth targets do not come from an AI model or the retrieval engine.
- PostgreSQL 17 indexed English tsvector/ts_rank_cd baseline vs public MIT-licensed BAAI/bge-small-en-v1.5 locally computed vectors (FastEmbed ONNX, 384d, pgvector exact cosine), and RRF fusion.
- Identical SQL book, author, approval, source revision, story-time, POV eligibility predicates applied BEFORE ranking; fail if any returned passage violates these.
- Measures recall@5, MRR@5, embedding/insertion/query runtime, and explicit safety gates.
- Two separate Actions jobs allow FTS baseline to succeed independently if model download or CPU embedding fails.

## External verified references

- https://www.postgresql.org/docs/17/textsearch.html
- https://github.com/pgvector/pgvector
- https://qdrant.tech/documentation/fastembed/fastembed-quickstart/
- https://huggingface.co/BAAI/bge-small-en-v1.5

## Interpretation limits

The corpus and labels are invented and repetitive; a high benchmark score is **not** evidence of full-novel continuity, temporal inference by the model, independent author approval, SQL injection resistance or broad genre coverage. The tested filters rely on trusted metadata. No experimental result can justify accepting the complete application stack, model provider or vector indexing without further evidence. This report will be amended with an exact-head workflow run and observed numbers.

## Initial measured data and pending stronger controls

| Run configuration (original first run) | Recall@5 | MRR@5 | Verified |
|---|---:|---:|---|
| Strict all-terms FTS | 0.20 (2/10) | 0.20 | YES, original exact-head run |
| Exact 384d cosine vector, locally embedded | 0.90 (9/10) | 0.90 | YES, original exact-head run |
| RRF strict FTS + vector | 0.90 (9/10) | 0.90 | YES, original exact-head run |
| FTS content-term OR | not run | not run | PENDING |
| RRF OR FTS + vector | not run | not run | PENDING |

The model produced embeddings for 1,974 total passages and 12 questions in 45.41 seconds on the run, with zero external inference API calls. Query latency and actual memory footprint are not summarized here; review the JSON artifact before interpreting operational cost. The original strict FTS query uses AND semantics for unquoted terms, which is not a fair *sole* keyword baseline against paraphrase queries. The follow-up query uses broad OR of content terms without manual synonym construction. This is still not BM25 or tuned full-text relevance search, and the set has only 10 gold-source questions.

**Safety nuance:** the SQL safety checks validate supplied story-time/POV/approval/revision metadata. They do not show that an AI extractor can label those fields correctly in a novel.
