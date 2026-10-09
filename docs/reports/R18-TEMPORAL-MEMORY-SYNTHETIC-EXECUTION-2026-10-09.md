---
id: VEL-RPT-R18-MEMORY-20261009-001
type: experiment-report
status: synthetic-local-passed-integration-not-run
created_at: 2026-10-09
updated_at: 2026-10-09
author: project-research
version: 0.1.0
related_research:
  - R07
  - R15
  - R18
related_adrs:
  - ADR-0005
---

# R18 — First executable temporal AI-memory context experiment

## Purpose and isolation

The project owner agreed to **prove the story-memory architecture before accepting the full stack**. This research-only spike tests the most dangerous fiction context errors using synthetic data and zero paid services. It does not approve Next.js, choose a PostgreSQL schema, select a generative model or complete product implementation.

**Code:** [R18 memory spike](../research/spikes/r18-fiction-memory/README.md), with `memory.mjs` and `memory.test.mjs`.

## Execution evidence

- Execution date: **2026-10-09**.
- Runner: local container, **Node v22.16.0**, `node --test`; npm dependencies: **none**.
- Result: **23 passing, 0 failing**, all tests completed (TAP runner output inspected).
- Syntax and tests exercise this *exact* research module and fixture in isolation. GitHub Actions check is configured separately; **do not imply CI completed until the exact PR head is green**.
- File hashes (SHA-256, local executed files):
  - `memory.mjs`: `5c3a024494529f1c6b597cb8b2844d3efc4f41a5152f98e9b6f51ce0e026973a`
  - `memory.test.mjs`: `eef01afbe1d708234cf115072f29785c89502284b4798c3be7da02b5ca8ed4b5`

## Verified in synthetic fixture

| Gate | Local synthetic observation | Limits |
|---|---|---|
| MEM-01 | Other owner/book and same-name cross-book evidence excluded | In-memory equality checks, not SQL/RLS |
| MEM-02/03 | Injury/recovery and flashback use fictional event time rather than narrative chapter order | Simple integer timeline |
| MEM-04 | Elias cannot access an injury before explicitly annotated acquisition | Incomplete full POV/reader knowledge system |
| MEM-05 | Rejected candidate death and in-story belief not objective canon | No actual model and approval UX |
| MEM-06 | Revision-changed evidence/fact excluded and warning surfaced | No production reindexing pipeline |
| MEM-07 | Disabled and wrong-action rules excluded from context | Synthetic rules, not R01-certified source |
| MEM-08 | Lexical source citations are book, story-time and revision aware | No Postgres FTS/vector recall benchmark |
| MEM-09 | Stale source revision fails closed, including simulated later revision | No concurrent database session |
| MEM-10 | Zero external calls and no dependency on Ollama/embeddings | Generation quality not tested |
| MEM-11/12 | Foreign POV, cross-book forged evidence and invalid scope rejected | No untrusted HTTP parser tested |

Additional checks include deterministic same-time sequence precedence, future-evidence omission, and no mutation of input state.

## What this does NOT prove

The code does not run Tiptap, Next.js, PostgreSQL, Drizzle, Better Auth, Graphile Worker, Calibre, any model, or any file import/export. It does not guarantee authorization against real malicious users, timeline correctness for ambiguous fictional history, a useful lexical search over long novels, or safe production concurrency.

**Decision impact:** evidence supports keeping **typed, approved, story-time-gated memory with explicit source revision and POV checks** as a strong behavioral hypothesis. ADR-0005 remains **PROPOSED**; the owner asked for validation-first work, not automatic acceptance of a previously named package list.

## Next bounded experiments

1. A tiny PostgreSQL transaction/revision demo with two book owners and direct authorization negative tests.
2. Compare exact lexical search and Postgres FTS against local-vector retrieval, measuring source relevance and spoiler leakage on a *long* synthetic manuscript.
3. Compare editor/save/auth/worker vertical slices under the two credible web/API designs before accepting the full stack.
4. Browser crash/unsynced draft recovery, ZIP restore, Calibre roundtrip and model-less author workflows.
5. Optional local model extraction and author-review UX benchmark; no paid services.
