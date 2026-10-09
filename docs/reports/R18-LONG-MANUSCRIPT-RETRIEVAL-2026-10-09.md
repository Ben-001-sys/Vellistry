---
id: VEL-RPT-R18-RETRIEVAL-20261009-001
type: experiment-report
status: experiment-committed-results-await-ci
created_at: 2026-10-09
updated_at: 2026-10-09
author: project-research
version: 0.1.0
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

**Executable synthetic benchmark committed; exact-head CI not yet verified.** Do not claim numerical scores before reading the actual run log and result JSON. This study uses no paid inference or real author manuscripts.

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
