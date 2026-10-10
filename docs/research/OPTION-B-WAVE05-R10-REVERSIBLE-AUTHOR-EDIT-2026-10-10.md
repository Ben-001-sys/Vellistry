---
id: VEL-RES-OPTIONB-WAVE05-R10-20261010-001
title: One-pass reversible selected prose, author approval, server CAS and undo research
type: research-evidence-and-decision-options
status: bounded-local-state-tests-passed-real-server-not-run
created_at: 2026-10-10
updated_at: 2026-10-10
author: project-research
version: 1.0.0
sources:
  - docs/research/PAIR-05-SYNTHETIC-RULES-REVERSIBLE-EDIT-2026-10-09.md
  - docs/research/spikes/tiptap3-headless/pair05_patch.test.mjs
  - docs/research/OPTION-B-WAVE02-R05-R16-EDITOR-ACCESSIBILITY-2026-10-10.md
  - https://tiptap.dev/docs/editor/api/commands/content/insert-content-at
  - https://prosemirror.net/docs/ref/
related_research: [R10, R05, R18]
---

# Option B Wave 5, Track 2 — one-pass reversible-edit and author-acceptance contract

## Evidence classes and scope

Existing merged Pair 05 **10/10** Tiptap 3/ProseMirror+jsdom tests passed a bounded in-memory edit review flow on exact prior PR head. They establish editor-engine feasibility for selection, reject, explicit accept, stale proposal denial after a text or rich-mark change, unrelated formatting survival, incomplete stream cancellation, and local editor undo. They **do not** establish integrated Nest/Supabase persistency, author authentication, cross-tab consistency or durable undo after reload.

**New local research:** An independent disposable Python state-machine simulation was executed in the current response, included in `vellistry_wave05_single_pass_research_fixture.zip` (SHA256 **98579f6bf9ac4d8b659723503faa878af49343c97ce846283e2176aea67adf63**) supplied privately to the owner; **18 of 18 unit cases passed**. It is not committed to this repository and its execution is not asserted as GitHub CI. It models author/book/chapter ownership, exact selection, base revision and SHA, pending proposals, idempotent accept/reject receipts, append-only revision history, and an inverse/compensating *new* revision undo.

## Actual 18-case Python simulation results

| Scenario | Result / scope |
|---|---|
| Proposal captured without mutation | PASS, source unchanged |
| Rejection without manuscript or canon change | PASS |
| Accept changes only selected substring | PASS; no structural marks in this Python fixture |
| Retry with same acceptance request ID | PASS; idempotent response, no duplicate revision |
| Reused request ID for different decision | Denied |
| Another browser tab edits first / stale response | Denied; no automatic rebase |
| Different author issues or accepts proposal | Denied in synthetic model (not RLS proof) |
| Wrong book/chapter scope | Denied |
| Selected text changes without revision | Denied by document SHA / content comparison |
| Partial stream or invalid replacement | Denied |
| Undo after accepted proposal | Restores old chapter and **increments** revision, does not rewind version |
| Rehydrate research state then undo | PASS in Python object-copy simulation, **not** DB process restart/backup restore |
| Attempt undo after later manual edit | Denied to protect newly authored content |
| Retried undo with same request ID | Idempotent |
| Approved Story Profile canon on prose accept/undo | Unchanged |
| Duplicate proposal ID | Denied |
| Rejected proposal later accepted | Denied |

**Source limitation:** These 18 passing local cases are deterministic contract checks, not a live server, ProseMirror rich-text integration, real authentication/RLS, HTTP concurrency test, transaction or streaming provider implementation. In particular, **the simulated 'reload' copied state in memory; it did not persist and reload a database journal**. Exact tested Python source and JSON results are in the user-delivered bundle, not GitHub, so do not claim GitHub workflows executed them.

## Official editor mechanism and stronger release requirements

[Tiptap `insertContentAt`](https://tiptap.dev/docs/editor/api/commands/content/insert-content-at) can replace a ProseMirror range with text or structured content. A model response must be inserted as **plain text**, not blindly parsed as HTML, and the selection must be resolved against the **accepted base revision**. [ProseMirror mapping](https://prosemirror.net/docs/ref/) can translate positions across known transactions, but MVP **does not silently auto-rebase stale model proposals**; conflict or changed rich marks make the proposal stale and author must regenerate/review. This is simpler, safer and explicit.

**Chosen MVP author workflow:**

1. Author selects contiguous **text within one paragraph** and chooses **Rewrite**, or chooses **Continue** at chapter end/insertion point. UI records owner/book/chapter, immutable base revision/structured-document hash, selection anchor/range and exact selected source text. Rich multi-block AI replacement is deferred.
2. Preview recipient/provider/model, selected excerpt, specifically included approved canon, relevant enabled rule IDs plus author exceptions, approximate usage and billing/consent. No automatic content send; user starts the action.
3. Provider returns a **plain-text proposal**, not a manuscript write; UI shows original and candidate in a small diff/review card. Rejection, provider failure, cancellation, stream interruption, wrong user or wrong scope leaves accepted text untouched.
4. On **Accept**, perform an authenticated **Nest-controlled atomic compare-and-swap** against the latest chapter revision and document hash (plus known text/range) with a unique acceptance idempotency key. If old revision or selection differs, **show stale/conflict and deny automatic overwrite**.
5. Record immutable before/after revision and proposal acceptance event. **Undo** after reload is a server-side compensating **new version**, not only ProseMirror local `undo()` state. It succeeds only if the accepted proposal is still the current revision; if the writer has edited afterwards, show conflict and offer normal revision history recovery rather than silently replace their work.
6. Maintain author-approved Story Profiles separately. Accepting prose never confirms generated character or plot facts; it cannot modify Rules Studio defaults or expose another book.

## Mandatory first implementation acceptance cases (not completed in research)

Actual Supabase/Postgres transactional compare-and-swap + idempotency; multiple browsers/tabs and cross-account denial; crash/network interruption after database commit but before response; idempotent request replay; persisted revision journal and restore on fresh auth session; rich-text mark and selection correctness with Tiptap; user-facing accessible diff/announcement; failure injection around cancellation and prompt injection; no stale authority from JWT/session; real author comprehension. Previous R18/Pair06 fixture tests are **not equivalent** to a fully integrated revision-safe author flow.

## MVP scope and non-goals

**Include:** one selected-text rewrite, one continue action, author-visible comparison, reject, accept, server-side CAS, idempotent replay, history-backed undo-after-reload, author-chosen AI OFF, BYOK model selector, no auto-canon.

**Exclude for MVP:** multi-paragraph rich generative replace, automatic agentic book writing, batch chapter overwrite, background canon mutation, real-time multi-writer coediting, silent position remapping, paid subscription/billing by Vellistry, model-specific quality guarantees and 'undo everything forever'.

**Decision and handoff:** The request delegated a one-pass final MVP choice, so the controlled editing contract above is **chosen as a design/acceptance target** without another option review. Option B research-only governance persists: no new production code, Figma/Lovable design, public deployment, or user-visible guarantee was authorized. Wave 5 research is closed; advance to **Wave 6 R18 operational recovery and final closeout synthesis** while preserving unrun integrated acceptance cases as release gates.
