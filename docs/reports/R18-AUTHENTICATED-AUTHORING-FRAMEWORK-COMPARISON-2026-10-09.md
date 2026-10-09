---
id: VEL-RPT-R18-FRAMEWORK-20261009-001
type: experiment-report
status: synthetic-framework-http-and-frontend-build-ci-passed
created_at: 2026-10-09
updated_at: 2026-10-09
author: project-research
version: 0.2.0
related_research:
  - R05
  - R07
  - R15
  - R18
related_adrs:
  - ADR-0003
  - ADR-0005
---

# R18 — Chapter authoring and session boundary: Next.js vs NestJS/Vite

## Goal

Compare identical, research-only session-scoped SQL chapter reads, transactional optimistic saves, and Tiptap JSON editor surfaces in two supported architectures without selecting either framework prematurely.

- **A:** Next.js 16 App Router Route Handler + React 19 + Tiptap 3.
- **B:** Separate NestJS 11 API + React/Vite 7 + same Tiptap component.
- **Shared:** PostgreSQL 17, one domain module, opaque synthetic hashed session-token records, two invented authors/books, fifteen HTTP assertion cases per adapter.
- **Execution:** GitHub Actions Node 24 / Postgres 17, npm open-source libraries, no paid services or private manuscripts.

## Evidence state

**Verified in GitHub Actions on 2026-10-09:** [run #37982170918](https://github.com/Ben-001-sys/Vellistry/actions/runs/37982170918), exact head `62fbf26cf83116bc02cc86e7248ecf4adf9ea030`, **SUCCESS**. Both adapters ran and passed the complete identical HTTP contract: **Next.js 15/15, NestJS 15/15, total 30/30**. The Vite/Tiptap frontend build and Next/Tiptap application build **both succeeded**. This is an executable smoke/security-behavior observation only, **not** a product launch or real browser authoring proof.

## Risk and scope

Synthetic session-provisioning is not a user login/authentication product. The test explicitly refuses forged user identity headers and checks stored opaque token hashes/expiry, but it cannot establish the security of Better Auth, production cookie settings, cross-site requests or a complete account lifecycle.

Versioned saves are committed atomically into a chapters table and revision history; this tests basic optimistic concurrency but not disconnection/crash recovery, long-manuscript perf, rich Tiptap schema, multi-device conflict UX, or backup/restore.

The UI modules are build/compile smoke targets, NOT real-browser author trial results. The permitted subset is paragraph+plain text JSON; Tiptap supports far more, but this experimental backend intentionally validates less.

**ADR-0005 remains PROPOSED** until honest direct evidence and owner approval.

## Verified exact-head environment and result matrix

| Observed item | Evidence |
|---|---|
| Runner | GitHub Actions Ubuntu, Node.js 24, PostgreSQL 17 service |
| Next.js | 16.4.0 |
| React | 19.3.0 |
| NestJS core | 11.2.7 |
| Vite | 7.3.7 |
| Tiptap React | 3.31.4 |
| Same session and chapter contract via Next Route Handler | **15/15 PASS** |
| Same session and chapter contract via NestJS Controller | **15/15 PASS** |
| Vite/React/Tiptap bundled production build | **PASS** |
| Next/React/Tiptap bundled application build | **PASS** |
| Version conflict and competing writers | **PASS in both paths** |
| Production login, BYOK, RLS, password reset, Tiptap rich marks, WebKit/IME, IndexedDB crash recovery | **NOT TESTED** |

Exact-head run: https://github.com/Ben-001-sys/Vellistry/actions/runs/37982170918

### Initial harness corrections preserved as evidence

- First run on `b9023be` stopped before any HTTP tests because the version-reporting script tried to import Tiptap's non-exported package.json. That script was corrected in `f4c750e`.
- Second run on `f4c750e` successfully installed all packages, seeded PostgreSQL, started both APIs, and passed first Next unauthorized check; it stopped because a Node `assert.match` assertion incorrectly supplied a string rather than a RegExp. Corrected in `62fbf26`.
- Final exact-head run confirmed all 30 contract assertions and both frontend builds without reported errors.

### Interpretation

**The same manuscript domain contract is viable behind both frameworks.** At this stage there is no measured quality, privacy, correctness or efficiency reason to claim Next.js is uniquely superior to Vite+NestJS. We should retain the preference for a smaller number of app deployables as a design consideration, not a proven performance advantage.

The next falsifiable comparison must run real browser-driven Tiptap typing, paste, selection and save/reload, including offline/disconnect and conflicting multi-tab edits, on both interfaces. It should also test a real auth integration with session revocation, least-privilege database connections/RLS, and recoverable IndexedDB drafts. **Neither is a substitute for model independent Story Memory correctness gates.**

Do not merge ADR-0005 as accepted from these results alone; its approval remains **proposed** and requires a separate owner review.
