---
id: VEL-RPT-STAGE4-CHAPTER-001
title: First bounded synthetic chapter-save contract execution
type: experiment-report
status: synthetic-tests-passed-not-product-validated
created_at: 2026-10-09
updated_at: 2026-10-09
owner: project_owner
author: ChatGPT
version: 0.1.0
task_id: VEL-TASK-0002
context_pack_id: VEL-CP-0002
related_spec: VEL-SPEC-001
related_pr: 35
evidence:
  - https://github.com/Ben-001-sys/Vellistry/actions/runs/38002511826
  - tests/test_stage4_chapter_contract.py
  - docs/research/spikes/stage4-synthetic-chapter-contract/chapter_model.py
review:
  status: pending
  approved_by: null
  evidence: null
---

# Stage 4 chapter-save synthetic contract — execution evidence

**Scope:** A bounded, **in-memory synthetic model**, not the Vellistry application. The eight-area MVP user-facing scope is owner-approved, but `VEL-SPEC-001`'s scenario details remain proposed. No implementation technology choice, acceptance-spec promotion, deployment, external provider connection, real manuscripts or user data was authorized by these tests.

## Work performed

ChatGPT added a small Python model and real executable tests linked to `VEL-TASK-0002`, `VEL-SPEC-001`, and SC-001–SC-008. It models fabricated principals, books, chapter payloads, versioned save receipts, explicit error/unsaved/saved states, pre-/post-commit interruption, and denied cross-author/cross-book attempts.

**Agent attribution:** ChatGPT (GPT-6). This is **not** evidence that a separate Cursor/Codex agent independently consumed `VEL-CP-0002`. That handoff remains open in [Issue #27](https://github.com/Ben-001-sys/Vellistry/issues/27). CI used the committed repository model and tests; it did not consume the exported ContextPack as executable code.

## Facts and evidence

- **FACT (exact-head CI):** On PR #35 initial head `24f81eb1ce57f36b886851e46e96d9fdba46b4a8`, [GitHub Actions run #38002511826](https://github.com/Ben-001-sys/Vellistry/actions/runs/38002511826) completed successfully on 2026-10-09. Python 3.12 `unittest` ran **13 tests, 13 passed, 0 failed**; the module compiled without extra runtime dependencies.
- **FACT (simulation only):** The model's `Principal` stores an explicitly constructed string. It is **not** real login/session authentication; its dictionary is **not** persistent storage; document shapes are only Tiptap-like fixture JSON.
- **FACT (save ambiguity):** Fault injection before a synthetic write leaves the old chapter untouched; injection after the write causes an unacknowledged error despite a newer in-memory stored version. The client does **not** declare `saved` without an acknowledgment.
- **FACT (synthetic revision and scope):** A stale client cannot replace the newer in-memory revision; a different invented author or an incorrect book/chapter combination is denied in this Python model. These do not certify real HTTP authorization or Supabase RLS.

## Per-scenario results

| Scenario | Result in synthetic fixture | Actual product criterion status |
|---|---|---|
| SC-001 | **PASS (synthetic)** — book, two chapters, navigation and reopen inside one process | NOT TESTED with actual UI/authenticated persistence |
| SC-002 | **PARTIAL proxy** — formatted JSON survives fake save/reopen with no AI dependency | NOT TESTED in actual Tiptap editor, keyboard/paste/IME |
| SC-003 | **PASS (synthetic)** — fake revision ack required for `saved` | NOT TESTED for actual durable disk/database write |
| SC-004 | **PASS (synthetic)** — before/after-commit simulated interruptions do not create false saved states | NOT TESTED for network outage or crash recovery |
| SC-005 | **PASS (synthetic)** — obsolete expected revision rejected with newer content intact | NOT TESTED across real concurrent sessions/DB transactions |
| SC-006 | **PASS (synthetic)** — cross-author reads/writes denied and forged `claimed_author` ignored | NOT TESTED for actual authentication, REST endpoints, RLS |
| SC-007 | **PASS (synthetic)** — same-title chapters scoped to separate book IDs | NOT TESTED for real database isolation/routing |
| SC-008 | **NOT TESTED (human governance)** — proposed architectures cannot be declared accepted by running Python tests | Owner review of proposals remains required |

All eight spec IDs are accounted for. **The 13 passing unit tests are not eight passing production acceptance criteria.**

## Interpretations

The bounded fixture supports the feasibility of a minimum behavioral contract for save acknowledgments, conflict signals, and explicit resource scoping without requiring a particular production adapter. It also demonstrates why post-commit acknowledgment loss needs a recovery/reconciliation design rather than blind retry. These are engineering interpretations of synthetic evidence, **not** claims about production implementation adequacy.

## Proposals

1. Repeat SC-001–SC-007 against the owner-selected application stack once an appropriate test adapter and authenticated identity boundary exist. Never rely on test-code construction of `Principal` for access control.
2. Run browser-driven Tiptap tests for SC-002 and supported rich marks/blocks, including keyboard, clipboard and IME paths.
3. Test real interrupted/ambiguous save acknowledgments plus concurrent authoring and crash-restart behavior before accepting durability or recovery claims.
4. Have a genuinely separate Cursor/Codex agent consume the current `VEL-CP-0002` artifact and produce its **own** bounded, unedited ExecutionBundle with file/CI references, fact/interpretation/proposal separation and owner review.
5. Keep SC-008 a human governance review requirement, not a checkmark computed from the in-memory fixture.

## Tests

**Executed:** `python -m unittest discover -s tests -p 'test_stage4_chapter_contract.py' -v` on GitHub Actions Python 3.12; **13/13 PASS** at the cited initial PR head.

**Not executed:** browser Tiptap UI, provider AI requests, persistent database, real auth, RLS, crash/restart, multi-device/multi-process concurrency, actual author usability, manuscript import/export, or owner-approved production deployment.

Any later head must pass CI separately before it can inherit a green test status.

## Artifacts

- Implementation: `docs/research/spikes/stage4-synthetic-chapter-contract/chapter_model.py`
- Fixture limitations: `docs/research/spikes/stage4-synthetic-chapter-contract/README.md`
- Unit tests: `tests/test_stage4_chapter_contract.py`
- CI: `.github/workflows/stage4-synthetic-chapter-contract.yml`
- This execution-style report (not a canonical, Git-pinned VEL-EB file): `docs/reports/STAGE4-SYNTHETIC-CHAPTER-EXECUTION-2026-10-09.md`

## Risks

- Test code can create any `Principal`; no identity provenance is validated.
- In-memory commits are not durable, and the fake UI state is not a browser component.
- Document payloads receive minimal shape checks; malformed nested content and real ProseMirror schema validity are not tested.
- A post-commit lost acknowledgment can leave a session believing content is unsaved despite stored data; the model deliberately surfaces an error but does not implement an actual reconciliation UI.
- The owner's subsequent stack selections and requirements have their own decision records, which this adapter-neutral simulation cannot override.

## Reviewer disposition

**Pending owner review.** Do not mark `VEL-SPEC-001` accepted, Issue #27 complete, or real authoring functionality implemented from this experiment. The required independent-agent ExecutionBundle and real-stack/browser/security validation remain separate next steps.
