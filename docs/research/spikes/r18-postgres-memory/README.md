# R18 — PostgreSQL temporal story memory research spike

**Synthetic evidence only. Not production code, an approved stack, or a final schema.**

This experiment follows the pure JavaScript R18 memory proof with a PostgreSQL 17 service. A fully disposable database is created, using an app role r18_app with RLS (including FORCE), manuscript compare-and-swap revision saves, approved objective temporal story-state projection, POV knowledge gating, and book/revision/time-scoped indexed PostgreSQL full-text evidence search.

## Run

Use a fresh disposable PostgreSQL 17 database with privileged test account and psql, then execute:

    psql -X -v ON_ERROR_STOP=1 -h localhost -U vellistry -d vellistry_memory -f docs/research/spikes/r18-postgres-memory/schema.sql -f docs/research/spikes/r18-postgres-memory/assertions.sql

The GitHub Actions workflow in .github/workflows/r18-postgres-memory.yml provides an isolated PostgreSQL 17 service and invokes these two files. Do not run against shared or production data. Fixtures are fictional and small.

## Twelve proposed fail-fast assertion groups

01. Missing author context sees no books/chapters.
02. Alice can access only her book, revisions, evidence, rules.
03. Foreign book insertion and conditional update denied.
04. Current revision saved once; same old revision rejected.
05. Rollback preserves original chapter.
06. Approved objective state applies at story time, excluded from flashbacks; belief/rejected proposals never canon.
07. Elias receives injury fact only after recorded knowledge acquisition.
08. Indexed English PostgreSQL full-text search returns only current, author-book/POV/story-time-appropriate evidence.
09. Stale accepted chapter revision invalidates previously derived canon and evidence.
10. Disabled and wrong-action rules excluded.
11. Bob can read his book only, not Alice's.
12. App role cannot directly approve rejected AI-proposed event.

## Critical limitations

- The connection setting r18.author is a **trusted application assertion**, not authentication. It is modifiable by SQL clients. This suite is NOT an SQL-injection/session security test. Any real user identity must be established by an actual verified session and never controlled by untrusted SQL/GUC input.
- Superusers and roles with BYPASSRLS bypass database RLS. The test role uses NOLOGIN and NOBYPASSRLS, while fixture setup uses the privileged postgres service user.
- The fixture has simplified integer fictional time and chapter text rather than the eventual Tiptap JSON, immutable revision log, editor conflict UI, and full approval transaction.
- No locally executed production Postgres app, Drizzle, Better Auth, Next.js, pgvector, Ollama, AI extraction, Calibre or backup/restore was tested.
- FTS over three passages does not establish retrieval accuracy across a real long manuscript.
- The application role has direct chapter update grants solely to test CAS and RLS; production write boundaries need separate privilege/design review.
- This app role is intentionally read-only on canon events. A secure author-approved write operation is a separate later task.

All results must be verified against an **exact commit workflow run**; tests and logs decide pass status, not an authored report.

Next research: Postgres FTS vs optional locally embedded pgvector on an extended synthetic novel; real auth + concurrent save tests; comparison of proposed app frameworks. ADR-0005 remains PROPOSED.
