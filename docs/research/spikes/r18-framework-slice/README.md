# R18 — Two actual framework adapters, one authoring contract

**Research-only experiment. NOT production authentication, manuscript storage, browser recovery, app launch, stack approval, or completed AI memory.**

This spike tests one shared PostgreSQL-backed, chapter-versioned, Tiptap-JSON-shaped manuscript contract through **Next.js 16 App Router API** and **NestJS 11 API**, with basic React/Tiptap 3 interfaces in Next.js and Vite 7.

## Why compare these two

Both are feasible TypeScript architectures for Vellistry. The important question is whether a single integrated Next.js application provides simpler, secure authoring operations than a separate Vite/React UI and NestJS API, **not whether either framework can remember story canon automatically**. Our R07/R18 story memory authorization, approval, timeline and retrieval contracts must remain framework-neutral.

## Shared domain boundary

Shared/persistence.mjs provides:
- Server-side opaque session token lookup against SHA-256 hashes and expiry in PostgreSQL (using **test-provisioned** sessions, not a real sign-in system).
- Every chapter SELECT, UPDATE and revision save checks the user/book authorization through joined book ownership.
- Compare-and-swap integer revision updates; immutable revision snapshots appended inside the same transaction.
- Conflict=409; masked foreign-book=404; unauthenticated=401; test Origin mismatch=403; malformed basic Tiptap JSON=400.
- All responses deny caching. Both adapters use identical domain functions, so difference in transport is testable without changing core rules.

## Synthetic HTTP test matrix

1. No cookie -> 401.
2. Alice may retrieve her own chapter, revision, basic document JSON, with no-store.
3. Alice cannot read Bob's book.
4. Forged x-user-id header is ignored.
5. Bob can access Bob's book.
6. Alice saves a valid chapter revision.
7. Stale retry rejects without overwriting accepted text or adding revision rows.
8. Cross-origin PUT denied.
9. Origin absent on PUT denied (research strictness).
10. Invalid Tiptap node rejected.
11. Invalid JSON rejected.
12. Alice cannot write Bob's chapter.
13. Two concurrent writes to same base revision: exactly one saves, other sees conflict; revision history consistent.
14. Expired session denied.
15. Forged request payload/path cannot save nonexistent chapter.

The script runs identical tests against Next.js at port 3100 and NestJS at port 3101, resetting Alice's synthetic manuscript state between architectures. A fail in either adapter fails CI. Vite frontend and Next app compile separately, and both use a shared open-source Tiptap 3 editor component.

## Run

All code is under docs/research/spikes/r18-framework-slice and is not part of a shipping app.

GitHub workflow: .github/workflows/r18-framework-comparison.yml, Node 24, PostgreSQL 17 service, npm install; no proprietary subscriptions or external AI calls. It starts the two API processes, runs HTTP tests, builds both clients and saves JSON evidence.

## Explicit exclusions

- **Not Better Auth:** The synthetic test session tokens are deterministic and fixture-provisioned solely for isolated CI, with no password, registration, MFA, account recovery, production session cookies or CSRF signoff. Never ship these tokens or test code. This measures actual bearer session validation+book authorization, not real interactive user login.
- Not a browser-level Playwright study: both interfaces are compiled and launchable, but no real typing, IME, paste, editor selection or crash-recovery trial is demonstrated.
- Basic Tiptap paragraph/text JSON only. Rich marks/headings/links, schema migrations, huge chapter stress and DOCX conversion require later tests.
- No IndexedDB/Dexie and no offline-safe autosave. Clicking Save sends one explicit revisioned PUT; crash recovery remains untested.
- No PostgreSQL RLS in this slice. Access is secured at the tested SQL query boundary using book ownership; RLS remains a separate defense-in-depth research item (PR #20). Real production should use least-privilege connections and auth middleware.
- Performance claims are NOT supported by this small single-worker CI exercise. Infrastructure setup and app startup are not compared under controlled measurement.
- npm semver-compatible versions are installed and logged by CI, but this initial research spike does not yet pin a complete audited lockfile. Not reproducible as an immutable production dependency graph.
- Backend framework comparison is partial: simultaneous two-user sessions, mature auth integration, production authorization, browser UX, SQL RLS integration, monitoring, persistent recovery, deployment/ops costs and security reviews remain.

## Decision status

Passing this spike would establish a **working shared versioned manuscript contract in both Next and Nest adapters**. It would not establish either framework as uniquely better. ADR-0005 remains PROPOSED, no full-stack approval/merge is implied.

## Verified synthetic CI checkpoint — 2026-10-09

[GitHub Actions run #37982170918](https://github.com/Ben-001-sys/Vellistry/actions/runs/37982170918) **SUCCEEDED** at implementation commit `62fbf26cf83116bc02cc86e7248ecf4adf9ea030`: 15/15 identical HTTP contracts on each framework and successful Vite and Next Tiptap frontend builds. Resolved packages: Next 16.4.0, React 19.3.0, Nest 11.2.7, Vite 7.3.7, Tiptap 3.31.4, Node 24, Postgres 17. Both platforms are technically feasible for this constrained authoring flow. No release-readiness, real login, full rich-text fidelity, real-browser recoverability or performance superiority follows from the suite. The full comparison report records two earlier runner assertion/reporting failures and their corrections.
