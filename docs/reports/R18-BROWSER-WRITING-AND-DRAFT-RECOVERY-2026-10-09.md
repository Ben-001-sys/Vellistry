---
id: VEL-RPT-R18-BROWSER-20261009-001
type: experiment-report
status: chromium-synthetic-browser-suite-passed
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

# R18 — Chromium Tiptap writing and unsynced-draft recovery

**Verified real-browser result:** GitHub Actions [run #37983426534](https://github.com/Ben-001-sys/Vellistry/actions/runs/37983426534), exact source commit `edb85162ae0218e1723ee48d22cd4e50c83cd80d`, completed **SUCCESS** with **8/8 Playwright Chromium tests passing** on synthetic PostgreSQL 17, Node 24, Next 16 / React-Tiptap 3 and Vite/NestJS. Four browser scenarios passed on each frontend. This verifies those narrow behavior tests, not public-user security or guaranteed crash-proof manuscript persistence.

## Systems under test

Two already-tested R18 adapters: Next 16 App Router and React 19, versus React/Vite 7 + NestJS 11, both with Tiptap 3 and a shared PostgreSQL 17 optimistic-save contract. Added Dexie 4 IndexedDB *unsynced draft safety copy* keyed by server-authorized user ID, book, chapter and sessionStorage tab ID. Explicit save calls a versioned PUT. Only acknowledged commits are 'saved'; rejected or unavailable writes retain local content. The client does not claim fully offline capabilities.

## Proposed real browser coverage

| ID | Scenario | Observable condition |
|---|---|---|
| BR-01 | Real keyboard typing, browser paste event and text selection | Tiptap reflects input; local dirty copy stored; server revision save survives reload |
| BR-02 | Interrupt network request after editing | Unsaved local draft retained, restored on reload after connectivity resumes, then successfully committed |
| BR-03 | Two tabs edit one base revision | Only first commit succeeds; losing tab sees explicit conflict, retains local text and cannot overwrite newer server state |
| BR-04 | Auth changes from Alice to Bob using synthetic fixture | Bob's request for Alice's chapter is denied; Alice's same-origin local copy is not restored to Bob |
| BR-05 | Repeat BR-01..04 for Vite/NestJS frontend | Same invariants rather than framework-dependent special cases |

## Evidence and limitations

- A simulated test session is created from synthetic deterministic tokens. It is NOT Better Auth, a production credential system, cookie security review or user registration.
- IndexedDB is best-effort and device-readable; it may be evicted, corrupted or accessible to same-origin scripts. It is not encrypted or a reliable offline manuscript store.
- Loading the UI while the network is fully down is NOT supported or tested. Recovery is specifically **after** an interrupted save once the app can authenticate online again.
- Local draft keyed by sessionStorage tab ID persists across reload in the same tab but not after all browser session state is lost. An author-facing multi-device recovery design remains open.
- A rich-text schema still requires headings, lists, formatting, IME, multilingual and long-session tests. This test only attempts plain paragraphs/text and a controlled paste.
- Local draft persistence is asynchronous and the test requires an explicit 'draft stored' indicator before reload. This does NOT prove survival of sudden power loss during an in-flight IndexedDB write.
- No background autosave, encryption-at-rest, real RLS/least-privilege author context, model, conversion or backup restore is provided.

## Decision boundary

A successful result would substantiate that both prototype architectures can support a simple best-effort local-draft recovery path. It would NOT mean one is faster, safer or production-ready. ADR-0005 remains **PROPOSED** pending explicit owner acceptance after broader verification.

## Measured execution and conclusions — 2026-10-09

| Chromium Playwright check | Next.js | Vite + NestJS |
|---|---|---|
| Keyboard typing, browser paste event, text selection, commit, reload | PASS | PASS |
| Simulated failed PUT; IndexedDB local draft restored after page reload/reauthorization | PASS | PASS |
| Two tabs modify same revision; one saves, other gets 409 and retains local work after reload | PASS | PASS |
| Swap Alice session for Bob; Bob denied book and cannot view Alice's local draft via unauthorized fetch | PASS | PASS |
| Total | **4/4** | **4/4** |

The exact [browser CI run](https://github.com/Ben-001-sys/Vellistry/actions/runs/37983426534) reported **8 passed in 13.2 seconds**, using real headless Chromium. The independent [existing framework-contract regression run](https://github.com/Ben-001-sys/Vellistry/actions/runs/37983426576) also succeeded on the same commit, with **Next 15/15, Nest 15/15 HTTP assertions**, both Vite/Tiptap and Next/Tiptap application builds passing.

### What these results actually validate

- The real browser processes Tiptap user text edits and a browser-dispatched paste event, and selection persists as expected.
- A local IndexedDB draft survives **reload in the same browser tab after a completed local write** and can be restored after simulated network-save failure.
- A competing server-accepted revision returns conflict and is **not** overwritten by the losing tab's local text; that unsaved copy remains inspectable.
- The test-only server author scope is checked before any local draft is loaded, preventing a different synthetic account from accessing the cached author prose through the test UI.

### Still NOT demonstrated

- Real power loss during an IndexedDB write, corrupted/evicted browser storage, fully offline page boot, cross-device restore, user-approved merge or automatic resolution of two versions.
- Production signup/login/session creation, revocation, password reset, CSRF defenses, content security policy, XSS on the same origin, encrypted local private manuscripts or local data erasure on logout/account removal.
- Full Tiptap schema, complex marks/heading/list paste, IME/composition, accessibility screen readers, Firefox/WebKit/mobile browsers, long-manuscript typing performance.
- Actual user experience study; this is a synthetic, controlled automated browser fixture, not an accepted release feature.
- A measured performance or operational advantage of either API framework. Both support the tested behavior.

**Architecture implication:** both proposed app shapes support the same basic recovery and write-conflict behavior. Keep ADR-0005 PROPOSED. Proceed to real authentication and secure server-authorized manuscript access; keep durable PostgreSQL revisioned saves as canonical and Dexie as best-effort local protection only.
