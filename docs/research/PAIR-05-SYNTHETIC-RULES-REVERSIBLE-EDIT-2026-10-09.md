---
id: VEL-RES-PAIR05-20261009-001
type: bounded-research
status: tests-awaiting-ci
created_at: 2026-10-09
updated_at: 2026-10-09
sources:
  - "docs/plans/RESEARCH-PAIR-AND-PREIMPLEMENTATION-DESIGN-2026-10-09.md"
  - "docs/research/R06-RULE-APPLICATION-EVALUATION-PROTOCOL.md"
  - "docs/research/independent-alternatives/pairs-04-05/R10_REVERSIBLE_EDIT_CASES_v0.1.jsonl"
related_research: [R06, R10]
---

# Pair 05 — R06 synthetic effective guidance and R10 real Tiptap proposal safety

**Research only.** The owner asked to continue Pair 04 then 05 after checking the GitHub PRs. Pair 04 has recorded a bounded offline-provider/corpus test result; Pair 05 now takes the two active research tracks. Parent draft PR #39 supplies the 15 reversible-edit test *specifications*; this branch adds runnable Tiptap evidence. PR #39 is still an independent alternative proposal, not final design approval.

## Track A: R06 — exact effective request under author controls

Source fidelity constraint: frozen guidance has 130 printed codes, 260 immutable compact/expanded records and a **proposed**, not owner-approved, 134-control mapping. **No operational real default pack is deployed or certified here.** The executable test intentionally uses only SYN-* invented wording as SIMULATED GUIDANCE.

[Pair 05 guidance resolver](experiments/pair05_synthetic_rules.py) with [twelve tests](experiments/test_pair05_synthetic_rules.py) checks:

- Default on, disable book, restore at scene, workspace/book/chapter/scene scope order.
- All author rules off; custom per-book guidance excluded from unrelated books.
- Author literary exceptions kept explicit while injury canon remains separate.
- Changes to enabled rules change request hash/cache key; a previous prompt snapshot must not be reused.
- Complete effective provider-request preview contains no disabled rule text; overflow explicitly fails instead of silently truncating.
- Non-approved original source alias cannot be passed off as frozen certified rule; imported manuscript instructions are labeled as untrusted text.

**Not yet proved:** selected-provider output adherence, literary quality with blinded authors, true 130-lens effective pack, arbitrary cached conversation invalidation, UI comprehension, prompt-injection resistance of actual model. The simulated cache ID is NOT a deployed cache purge.

## Track B: R10 — reversible, review-only rewrite proposals using actual Tiptap 3

[ProseMirror/Tiptap 3 tests](../research/spikes/tiptap3-headless/pair05_patch.test.mjs) reuse the existing research-only MIT Tiptap packages and jsdom, but add independent runnable cases for:

- Capturing a selected text range plus original full structured JSON and source revision.
- Reject without mutation; accept only on explicit author action.
- Reject stale proposal after **any** author edit, including changing rich marks, as conservative safe behavior.
- Reject wrong book/chapter/revision, duplicate acceptance, canceled or incomplete stream.
- Keep unrelated bold/heading formatting intact, reject unsafe HTML-like proposals and maintain editor-only undo/redo.
- Separate approval of prose from character/profile candidates.

**Key limits:** This implementation uses conservative whole-JSON revision comparison and a synchronous in-memory command. No actual Supabase CAS, HTTP auth, concurrent browser tabs, production Tiptap selection mapping, server-idempotency key, streamed provider response, persisted undo compensation, XSS hardening or verified rich formatted replacement. The 15 original RE10-* source specification rows remain authored and marked NOT_RUN unless specifically represented by a newly passing executable experiment. Ten narrow new tests do not justify relabeling all 15 scenarios as PASS.

## Pair 05 acceptance/closure boundary

| Criterion | Needed evidence | Current research status |
|---|---|---|
| Rule source pack | Explicit owner-selected operational source mappings + on/off defaults | BLOCKED ON R01 |
| Rule inclusion | Synthetic disable/restore/custom/exception tests on complete provider-request preview | AWAIT CI |
| Rule efficacy | Actual controlled model generation C0–C3 and blinded human assessments | NOT RUN |
| Reversible Tiptap edits | Exact-head tests of safety and formatting in actual editor engine | AWAIT CI |
| Durable accepted undo | Supabase transaction/revision compare-and-swap and server-side idempotency | NOT RUN |
| Author comprehension | Actual novelists using prototype Rules Studio/rewrite cards | NOT RUN |

Pair 06 and dedicated Figma Design gate stay sequenced, not auto-started. No paid service, real author data, original source rewrite, merge of app scaffold, live provider call or deployment.


## Executed fixture verification — 2026-10-09

**Exact tested research commit:** 182dc994265762cb155cdd6c42d88114aef5a5c5.

- [Pair 05 GitHub Actions #38005776932](https://github.com/Ben-001-sys/Vellistry/actions/runs/38005776932) **SUCCESS**. Research-only R06 simulated source/override tests **12/12**, R10 actual Tiptap 3/ProseMirror+jsdom proposal tests **10/10**. The tests never activate R01 authentic sources or generate AI text.
- [Existing Tiptap headless CI #38005776861](https://github.com/Ben-001-sys/Vellistry/actions/runs/38005776861) **SUCCESS**, **7/7** historical smoke regressions, including formatting and synthetic undo.
- The original 15 RE10-* records in the independent PR #39 handoff are research test **specifications**, not automatically 15 executed passes. Count **ten** new executable R10 cases, not complete production control coverage.

**Actual still NOT RUN:** server-transactional acceptance and idempotency, browser tab conflicts, full rich text selection anchoring, full source-certified rules, provider-led literary quality evaluation, independent authors and UI acceptance. Pair 06 and dedicated owner-reviewed Figma design remain separate workflow gates.
