---
id: VEL-RPT-R18-BROWSER-20261009-001
type: experiment-report
status: browser-suite-proposed-not-run
created_at: 2026-10-09
updated_at: 2026-10-09
author: project-research
version: 0.1.0
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

**Execution initially NOT_RUN.** This report is a test protocol, not a claim that a real browser or IndexedDB was validated. Use the exact-head GitHub Actions result to determine outcomes; update after a successful run, preserving failures and any fixes.

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
