---
id: VEL-IMP-002-HANDOFF-PROPOSAL
type: task-proposal
status: proposed-not-authorized
created_at: 2026-10-23
updated_at: 2026-10-23
owner: project_owner
version: 0.1.0
---

# IMP-002 first bounded implementation handoff

## PROPOSAL: Book Workspace local interaction and ownership contract slice
This is one task proposal, not an executable canonical Task or a Phase A feature dispatch. Allocate the next unique Task/ContextPack only after owner approval and rechecking main. Codex implements; distinct review advises; owner decides merge. No remediation delegation applies.

Objective: implement and verify the Book Workspace organizer against an explicitly synthetic, in-memory test adapter, while reusing the existing Auth/BFF/Nest boundaries for future integration. Cover opening an author-owned book, chapter list/create/rename/reorder and simple book/chapter planning notes with stable IDs. Do not claim durable chapter writes or completed IMP-002/JRN-001. Keep the synthetic adapter in test fixtures; do not expose a production route that silently simulates persistence. A usable hosted chapter endpoint is a later separately authorized persistence slice.

## Sources and authority
Accepted M1 in `docs/requirements/MVP-SCOPE-DECISION-2026-10-09.md`; accepted stack ADR0006 and Codex roles ADR0008; Tiptap choice ADR0003 remains for later editor work. Reference `docs/plans/VEL-PLAN-02-ARCHITECTURE-DATA-CONTRACTS-2026-10-11.md`, PLAN03 UX and PLAN04 security/testing. Those plans are proposed contracts, not accepted SQL or blanket code authority. PLAN03 Book organizer frame27:44 and Library27:10 provide existing direction; static frames are not tested UI. Read LANGUAGE.md and approved terminology dispositions before visible copy changes.

Use `docs/requirements/MVP-USER-JOURNEYS-AND-ACCEPTANCE-2026-10-09.md`: ACC-M1-01/02/03, ACC-M8-01/04/05. Primary journey JRN001 and isolation subset JRN011; JRN002/003 await editor/durability, JRN004/005 profiles, JRN006 rules, JRN007/008/009/010 AI/review remain out of this slice. None of all11 journeys is declared fully passing by a mock adapter.

## Proposed bounded paths and exclusions
At dispatch, pin exact new component/controller/test filenames within `apps/web/src/lib/workspace/`, `apps/web/src/components/workspace/` and synthetic workspace tests. Existing Library source is read-only unless the owner explicitly includes minimal navigation wiring. No production fake-persistence route. Reuse existing auth helpers without another authentication integration. Do not alter apps/api auth/books, Supabase migrations, accepted-document/revision writes, dependency versions, CI, governance policy or unrelated features. One focused existing-runner test entry may be authorized explicitly in package.json; no dependency changes assumed.

## Contract and acceptance/negative tests
- Adapter requests carry verified actor context, book ID and stable chapter ID; owner IDs in payload never grant access. The synthetic adapter independently validates ownership and chapter membership. Production authorization must later repeat these checks server-side and in DB/RLS.
- Open owned book: loading, empty list, populated, error and unauthorized states are mutually accurate. A guessed foreign book, foreign chapter under an owned book and own chapter under a different book all deny without exposing titles/notes. A→B→A and book-switch late results are discarded before rendering.
- Create two chapters with duplicate display titles: distinct stable IDs. Rename validates trimmed1–180 characters and never changes ID or manuscript. Reorder is a complete same-book ID permutation; reject duplicate/omitted/foreign IDs and stale expected order version with conflict. Test three chapters retain synthetic manuscript/notes identity while moving. Keyboard move controls, focus retention and live result announcements are required.
- Notes are separate data from accepted manuscript and revisions; switching away/back in the same synthetic session preserves their association. Label local/unconfirmed state honestly. No promise of reload persistence, autosave or server Saved. Test owner/book change, interrupted request and failed notes update without silent loss.
- Mutation responses distinguish confirmed adapter receipt, definite validation/authorization failure, conflict and unknown outcome. No ordinary automatic retry after ambiguous creation; explicit reconciliation/risk choice required. Reuse Library tests as protection, not proof of new chapter coverage.
- Test adapter failures, malformed list, session verification failure, stale success/error responses, no AI requirement and no hosted/network credential use. Real browser keyboard/focus testing is required for the component harness; record browser/version and synthetic fixture. No private prose.

## Prerequisites and completion boundary
Owner must explicitly authorize this exact local-only slice and finalize path list. Broad G_DESIGN/G_CODE remain pending; a bounded exception cannot promote them. Tests: frozen install, existing23 preflight/67 Library regressions, new focused workspace positives/negatives, build/check, governance and exact-head CI; Task/immutableCP/EB and distinct review before owner merge.

Full IMP-002 persistence is blocked on an accepted chapter mutation/reorder concurrency contract and notes storage design, reviewed SQL permission and appropriate disposable integration tests. Existing chapter/revision DML revocation must remain intact; no direct-write shortcut. A protected transactional path must preserve manuscript/revision invariants. Hosted target use additionally needs the separate decision packet. Delete-confirm and word-count behavior from the full master plan remain explicitly deferred, not removed or claimed complete. IMP-003 editor, save/recovery, AI, pilot and release are excluded.
