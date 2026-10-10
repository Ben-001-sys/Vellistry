---
id: VEL-RPT-PAIR04-05-RESEARCH-20261009-001
type: research-handoff
status: bounded-tests-complete-release-gates-open
created_at: 2026-10-09
related_research: [R06, R08, R10, R19, R21]
---

# Pair 04 / 05 evidence and dependent PR handoff

Owner instruction: "check the repo and branch and pr and continue 4 and 5." This authorized research, not final provider, paid API, R01 mapping, production engineering, design, or deployment approval.

## Current branch and PR graph

- PR #39 — independent alternative research and original fixture package, draft/open, based on main. Contains 14 original R19 fiction cases and 15 R10 edit specifications.
- PR #40 — Pair 04 research, draft/open, based on PR #39's independent-alternatives research branch, not main. Source comparison and offline protocol. Exact research commit e1582a614f52fd63a2d0abe85cbb18931bdebd58 passed GitHub Actions #38005616031: 14/14 new R08/R19 offline tests. Original 14 R19 and 15 R10 fixture records also passed STRUCTURAL validation, not outcome tests.
- PR #41 — Pair 05 research, draft/open, based on PR #39's branch, not main. Exact research commit 182dc994265762cb155cdd6c42d88114aef5a5c5 passed GitHub Actions #38005776932: R06 synthetic guidance 12/12 and R10 real Tiptap 3 + jsdom 10/10. Historical Tiptap regression CI #38005776861 also passed 7/7.
- PR #37 — Pair 02, draft/open. PR #38 — Pair 03, merged. PR #28 — app scaffold, draft/unmerged.

Dependencies: PR #39 must be reviewed before treating #40 and #41 as independently mergeable. Branch reconciliation/conflicts and exact-head CI need verification; these results do not promote research code to production.

## FACT: What passed

Pair 04 tested a simulated zero-spend consent and request boundary, failure status handling (401, 403, 429, timeout, cancellation, partial stream), no automatic manuscript changes and the original synthetic corpus structure. No real model output, provider enrollment, real author-data transfer, quality metrics, billing or retention tests.

Pair 05 tested only invented SYN-* rule instructions, per-scope disable/restore, explicit author exceptions, author-canon separation, excluded text absent from effective request, context-bound failure and changed cache hash; no claim of R01 source pack certification. The real Tiptap 3 engine verified selected-text proposals, reject/accept, stale document and mark guard, book/chapter/revision check, local undo/redo, cancellation and unapproved profile candidates. Not Supabase CAS, browser/multi-tab tests, persisted undo or all 15 source scenario records.

## NOT RUN and still blocking real MVP decisions

- Owner approval of authentic 130/134 rule mappings and enabled defaults.
- Real provider model/region/privacy/key feasibility under zero mandatory paid-service policy.
- Labeled output evaluation and blinded human ratings of literary quality.
- Production Tiptap selection anchoring, transactional revision-safe acceptance, idempotency and persisted undo.
- Remaining Pair 01 manuscript/session/storage boundary, Pair 02 author and screen reader research, Pair 03 DOCX heading styles and story extraction quality.
- Pair 06 legal/operational study, then Figma Make/Lovable alternatives and editable owner-approved Figma Design before product implementation.

Sources:
- https://github.com/Ben-001-sys/Vellistry/pull/39
- https://github.com/Ben-001-sys/Vellistry/pull/40
- https://github.com/Ben-001-sys/Vellistry/pull/41
- https://github.com/Ben-001-sys/Vellistry/actions/runs/38005616031
- https://github.com/Ben-001-sys/Vellistry/actions/runs/38005776932
- https://github.com/Ben-001-sys/Vellistry/actions/runs/38005776861

No production application implementation, paid services, merge or deployment.
