# Stage 4 — Synthetic manuscript chapter contract pilot

**Research-only fixture.** This is not Vellistry's application, not Tiptap, not a production authentication boundary, not persistent storage, and not evidence of an approved backend architecture.

## Scope and provenance

- Task: [VEL-TASK-0002](../../../agent-workflow/tasks/VEL-TASK-0002.yaml) / generated `VEL-CP-0002`.
- Proposed spec: [VEL-SPEC-001](../../../specs/VEL-SPEC-001-CHAPTER-SAVE-CONTRACT.md), SC-001–SC-008.
- Accepted *product areas*: M1 books/chapters, M2 AI-independent editing, M3 recoverable drafting, M8 author-data trust.
- Scenario and engineering implementation details in the spec remain **proposed**. This sample provides conditional, deterministic checks only.
- The current repo's architecture decisions are authoritative for actual implementation; the in-memory Python fixture is **not** an application-framework or database choice.

## Run

From the repository root, using Python 3.12 or later:

```bash
python -m unittest discover -s tests -p 'test_stage4_chapter_contract.py' -v
```

Zero third-party packages, accounts, keys, network calls or real manuscripts are used.

## What the model actually checks

The model maintains invented authors/books/chapters in a single Python process and provides explicit `unsaved`, `saving`, `saved`, and `error` transitions. Versioned writes reject stale clients; synthetic ownership checks deny mismatched caller/book/chapter IDs and ignore any `claimed_author` argument. Fault injection before a commit leaves existing content intact. Fault injection after a commit intentionally returns an ambiguous error rather than claiming the save succeeded. A simulated session can retain **in-memory pending** content while alive, but has no crash recovery or disk persistence.

| Spec criterion | Synthetic coverage | Still unverified |
|---|---|---|
| SC-001 | Invented book/chapter create, navigation and same-process reopen | Real authenticated account and database |
| SC-002 | Formatted Tiptap-shaped JSON round-trip without AI key | **Real Tiptap editor interactions, IME, paste, keyboard, no-AI UI** |
| SC-003 | Fake store acknowledges revised content before `saved` | Actual durable/atomic disk or database commit |
| SC-004 | Before/after-commit faults, no false `saved`, in-memory pending copy | Crash survival and real network interruption |
| SC-005 | Two in-memory editors, stale revision rejection, newer content preserved | Multi-process/DB transaction behavior |
| SC-006 | Synthetic denial of unrelated users, ignored spoofed actor hint | Real session authentication, RLS, HTTP authorization |
| SC-007 | ID-based book isolation despite matching chapter titles | Real SQL scoping, route parameter security |
| SC-008 | **Not executable in the model**; must be reviewed as agent-governance evidence | Human review/owner approval of proposed technologies |

## Authority limitations

`Principal("synthetic-id")` can be constructed directly by test code. **That is not secure authentication.** The in-memory `_books` / `_chapters` dictionary is not a durable database. A passing result cannot certify RLS, encrypted storage, backups, data recovery, browser correctness, or user permission isolation.

This pilot intentionally does not introduce Next.js, NestJS, Supabase, a web server, production schema, or AI provider. It cannot alter the owner's existing architecture choices.

The actual test status and exact GitHub Actions evidence belong in the linked execution report. An additional independent Cursor/Codex agent handoff remains a separate gate in Issue #27.
