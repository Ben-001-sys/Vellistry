---
id: VEL-RPT-R18-PG-20261009-001
type: experiment-report
status: synthetic-postgresql-ci-passed
created_at: 2026-10-09
updated_at: 2026-10-09
author: project-research
version: 0.2.0
related_research:
  - R07
  - R15
  - R18
related_adrs:
  - ADR-0005
---

# R18 — PostgreSQL synthetic story-memory research: security, revision and FTS

## Experiment and evidence status

**Verified synthetic PostgreSQL 17 CI: 12 of 12 named assertion groups passed on the tested code commit b7eb6d91f4a8cb68c566c22954c3457e234161e3**, with zero SQL errors. The initial code run failed while creating the search function because an ORDER BY expression used an undefined score output alias; the next commit explicitly sorted by ts_rank and passed. Neither run involved a real account/session or a large manuscript. See [the exact-head passing GitHub Actions run](https://github.com/Ben-001-sys/Vellistry/actions/runs/37976536671). Only synthetic invented author/books and manuscript prose are used.

The SQL fixture contains books, current chapter prose/revision, canonical and rejected events, source-linked evidence chunks and writing rules. The execution script contains 12 fail-fast assertion groups. GitHub Actions runs the schema and assertions against fresh PostgreSQL 17. At initial drafting, the local container had no PostgreSQL server or psql binary. Execution was subsequently verified in the isolated GitHub Actions PostgreSQL 17.11 service, with psql 16.15 as the client. The run logs contain all 12 success markers and the final suite-complete marker. This report commit contains only documentation/workflow-trigger changes; confirm the new PR exact-head workflow independently before merge.

## Intended gates

| Group | Claim being tested |
|---|---|
| PG01 | No trusted author scope reveals no private data |
| PG02 | RLS isolates chapters, events, evidence and rules between books |
| PG03 | Foreign chapter insert/update denied |
| PG04 | Optimistic revision check accepts current writer and rejects stale |
| PG05 | Transaction rollback preserves previous manuscript |
| PG06 | Approved events projected by story time, excluding rejected/belief |
| PG07 | POV filter requires explicit knowledge acquisition |
| PG08 | Full-text GIN evidence search respects book/revision/time/POV |
| PG09 | Changed manuscript revision invalidates supporting citations |
| PG10 | Only enabled applicable rules included |
| PG11 | Second account views only its own story state |
| PG12 | App role cannot directly change rejected candidate into canon |

## Critical negative scope

This test setting r18.author is **not an authentication control**; any SQL-capable actor can change a custom setting. Production authentication must use server-verified identity and a verified request trust boundary. Superusers bypass RLS. No real multi-account browser, SQL injection prevention, auth library, concurrency test, long-novel retrieval, embedding model, paid service, generated fiction evaluation, or complete recovery has been tested.

## Primary documentation

- PostgreSQL 17 RLS: https://www.postgresql.org/docs/17/ddl-rowsecurity.html
- PostgreSQL 17 UPDATE/RETURNING: https://www.postgresql.org/docs/17/sql-update.html
- PostgreSQL 17 PL/pgSQL row count: https://www.postgresql.org/docs/17/plpgsql-statements.html
- PostgreSQL 17 FTS and GIN indexes: https://www.postgresql.org/docs/17/textsearch-tables.html
- PostgreSQL 17 websearch query syntax: https://www.postgresql.org/docs/17/textsearch-controls.html

## ADR status

ADR-0005 stays **PROPOSED**. Database feasibility evidence, if successful, must not be conflated with approval of Next.js, Drizzle, Better Auth, Graphile, a specific app schema, or AI retrieval correctness.
