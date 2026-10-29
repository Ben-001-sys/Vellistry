---
id: VEL-EB-0068
title: IMP003A manual Tiptap editor foundation
type: execution-bundle
status: proposed-for-review
created_at: '2026-10-29'
version: 0.1.0
task_id: VEL-TASK-0068
context_pack_id: VEL-CP-0068
base_commit: 2b363a36b0f7fe6e26db64763edaf86acd238f16
agent:
  name: Codex
  model: Codex runtime model not independently reported
  runner: Codex desktop isolated Windows editor worktree
  role: primary bounded implementation agent
sources:
- PROJECT-CONSTITUTION.md
- AGENTS.md
- CURRENT-STATE.md
- docs/agent-workflow/PR-COMPLIANCE.md
- docs/decisions/ADR-0003-use-tiptap-3-prosemirror-for-manuscript-editor.md
- docs/decisions/ADR-0008-codex-primary-agentic-implementation-workflow.md
- apps/web/src/lib/workspace/book-workspace-contract.ts
- apps/web/src/components/workspace/book-workspace-organizer.tsx
- docs/agent-workflow/inputs/VEL-TASK-0068/OWNER-AUTHORIZATION.json
- docs/agent-workflow/inputs/VEL-TASK-0068/SOURCE-EXCERPTS.md
- docs/agent-workflow/inputs/VEL-TASK-0068/IMPLEMENTATION-CONTRACT.md
- apps/web/package.json
- package.json
evidence:
- docs/reports/VEL-IMP003A-MANUAL-EDITOR-0068.md
- docs/reports/evidence/VEL-TASK-0068/check.txt
- docs/reports/evidence/VEL-TASK-0068/build.txt
- docs/reports/evidence/VEL-TASK-0068/editor.txt
- docs/reports/evidence/VEL-TASK-0068/workspace.txt
- docs/reports/evidence/VEL-TASK-0068/library.txt
- docs/reports/evidence/VEL-TASK-0068/mfa.txt
- docs/reports/evidence/VEL-TASK-0068/preflight.txt
- docs/reports/evidence/VEL-TASK-0068/browser-summary.json
- docs/reports/evidence/VEL-TASK-0068/browser-cleanup.txt
- docs/reports/evidence/VEL-TASK-0068/metadata.txt
- docs/reports/evidence/VEL-TASK-0068/readiness.txt
- docs/reports/evidence/VEL-TASK-0068/traceability.txt
- docs/reports/evidence/VEL-TASK-0068/entrypoints.txt
- docs/reports/evidence/VEL-TASK-0068/preservation.json
- docs/reports/evidence/VEL-TASK-0068/check-review-final.txt
- docs/reports/evidence/VEL-TASK-0068/build-review-final.txt
- docs/reports/evidence/VEL-TASK-0068/editor-review-final.txt
- docs/reports/evidence/VEL-TASK-0068/workspace-review-final.txt
- docs/reports/evidence/VEL-TASK-0068/browser-review-final.json
- docs/reports/evidence/VEL-TASK-0068/browser-review-cleanup.txt
- docs/reports/evidence/VEL-TASK-0068/metadata-review-final.txt
- docs/reports/evidence/VEL-TASK-0068/readiness-review-final.txt
- docs/reports/evidence/VEL-TASK-0068/traceability-review-final.txt
- docs/reports/evidence/VEL-TASK-0068/entrypoints-review-final.txt
- docs/reports/evidence/VEL-TASK-0068/review-first.txt
- docs/reports/evidence/VEL-TASK-0068/search-scroll-before.txt
- docs/reports/evidence/VEL-TASK-0068/browser-scroll-initial-failed.txt
- docs/reports/evidence/VEL-TASK-0068/browser-review-final.txt
review:
  status: pending
  approved_by: null
  evidence: null
owner_disposition: pending
implementation_source_commit: 481eaf8a60ed12cc5edd70c601ceb1dc7dc52df4
execution:
  status: completed
  executor: Codex
  model: Codex runtime model not independently reported
  tests:
  - command: corepack pnpm check
    source_commit: c291b729698160fb795ad11ede5673b1d7f478a4
    reused_for_source: 481eaf8a60ed12cc5edd70c601ceb1dc7dc52df4
    reuse_basis: Exact runtime/editor/fixture/package/lock blobs identical between
      correctedc291 and evidence-source481; actual final CI must rerun
    exit_code: 0
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0068/check-review-final.txt
  - command: corepack pnpm build
    source_commit: c291b729698160fb795ad11ede5673b1d7f478a4
    reused_for_source: 481eaf8a60ed12cc5edd70c601ceb1dc7dc52df4
    reuse_basis: Exact runtime/editor/fixture/package/lock blobs identical between
      correctedc291 and evidence-source481; actual final CI must rerun
    exit_code: 0
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0068/build-review-final.txt
  - command: corepack pnpm test:manuscript-editor
    source_commit: c291b729698160fb795ad11ede5673b1d7f478a4
    reused_for_source: 481eaf8a60ed12cc5edd70c601ceb1dc7dc52df4
    reuse_basis: Exact runtime/editor/fixture/package/lock blobs identical between
      correctedc291 and evidence-source481; actual final CI must rerun
    exit_code: 0
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0068/editor-review-final.txt
  - command: corepack pnpm test:workspace-contract
    source_commit: c291b729698160fb795ad11ede5673b1d7f478a4
    reused_for_source: 481eaf8a60ed12cc5edd70c601ceb1dc7dc52df4
    reuse_basis: Exact runtime/editor/fixture/package/lock blobs identical between
      correctedc291 and evidence-source481; actual final CI must rerun
    exit_code: 0
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0068/workspace-review-final.txt
  - command: corepack pnpm test:library-isolation
    source_commit: e79db76e8469c55c8fa0a47de2c6b957d4583bfe
    reused_for_source: 481eaf8a60ed12cc5edd70c601ceb1dc7dc52df4
    reuse_basis: All files/dependencies executed by these existing Library/MFA/preflight
      commands unchanged by editor-only search correction; actual final CI repeats
      at final head
    exit_code: 0
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0068/library.txt
  - command: corepack pnpm test:auth-mfa
    source_commit: e79db76e8469c55c8fa0a47de2c6b957d4583bfe
    reused_for_source: 481eaf8a60ed12cc5edd70c601ceb1dc7dc52df4
    reuse_basis: All files/dependencies executed by these existing Library/MFA/preflight
      commands unchanged by editor-only search correction; actual final CI repeats
      at final head
    exit_code: 0
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0068/mfa.txt
  - command: corepack pnpm test:hosted-preflight
    source_commit: e79db76e8469c55c8fa0a47de2c6b957d4583bfe
    reused_for_source: 481eaf8a60ed12cc5edd70c601ceb1dc7dc52df4
    reuse_basis: All files/dependencies executed by these existing Library/MFA/preflight
      commands unchanged by editor-only search correction; actual final CI repeats
      at final head
    exit_code: 0
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0068/preflight.txt
  - command: Playwright browser_run_code_unsafe filename=tests/editor/manuscript-editor.browser.mjs
    source_commit: c291b729698160fb795ad11ede5673b1d7f478a4
    reused_for_source: 481eaf8a60ed12cc5edd70c601ceb1dc7dc52df4
    reuse_basis: Exact runtime/editor/fixture/package/lock blobs identical between
      correctedc291 and evidence-source481; actual final CI must rerun
    exit_code: 0
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0068/browser-review-final.json
  - command: Owned fixture shutdown, wrapper removal and production route verification
    source_commit: c291b729698160fb795ad11ede5673b1d7f478a4
    reused_for_source: 481eaf8a60ed12cc5edd70c601ceb1dc7dc52df4
    reuse_basis: Exact runtime/editor/fixture/package/lock blobs identical between
      correctedc291 and evidence-source481; actual final CI must rerun
    exit_code: 0
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0068/browser-review-cleanup.txt
  - command: python scripts/check_knowledge_metadata.py
    source_commit: 481eaf8a60ed12cc5edd70c601ceb1dc7dc52df4
    exit_code: 0
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0068/metadata-review-final.txt
  - command: python scripts/check_implementation_readiness.py
    source_commit: 481eaf8a60ed12cc5edd70c601ceb1dc7dc52df4
    exit_code: 0
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0068/readiness-review-final.txt
  - command: python scripts/spec_traceability.py validate
    source_commit: 481eaf8a60ed12cc5edd70c601ceb1dc7dc52df4
    exit_code: 0
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0068/traceability-review-final.txt
  - command: python -m unittest discover -s tests -p test_governance_entrypoints.py
      -v
    source_commit: 481eaf8a60ed12cc5edd70c601ceb1dc7dc52df4
    exit_code: 0
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0068/entrypoints-review-final.txt
  - command: Pinned base/direct-dependency/package and excluded-path assertions
    source_commit: 663886c8fc4fa855ccd7bb4d9fe6255c6e7157d9
    exit_code: 0
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0068/preservation.json
    reused_for_source: 481eaf8a60ed12cc5edd70c601ceb1dc7dc52df4
    reuse_basis: Excluded Auth/workspace/SQL/workflow/control paths and all original
      dependency resolutions/package records remain unchanged by editor-only correction
---

## Work performed
Implemented reusable client editor, headless chapter session and literal search plugin with exact MIT Tiptap3.32.1 and offline dev-onlyjsdom26.1.0. Reused existing organizer/controller/IDs/notes/ownership/unknown-state seams unchanged. No production editor route, persistence transport, Auth/SQL/workflow policy or unrelated feature. Root owner work preserved; separate stacked PR depends on reviewed Task67/PR128, not merged/self-approved.

## Facts and evidence
New Task68 governing commits622c210/2b363a3 and committed validated immutableCP precede operative e79db76 source. First pack attempt exceeded size cap; no pack was created/dispatched. Exact excerpts bounded before valid pack, no validator/history rewrite. Code foundation supports manual500+word prose, paragraph/headings1-3/bold/italic/underline/lists, keyboard/toolbarUndoRedo, caret/selection and chapter-local word count/search. Per-owner/book/stablechapter Editor history, no cached author leakage, local-only message. Existing backend workspace/persistence/Auth remains unchanged and unregistered.

## Interpretations
This is actual Tiptap/ProseMirror code with executable DOM and real-browser checks, not a textarea simulation or durable accepted manuscript implementation. Search decorations preserve model selection/history; explicit navigation selects, edits recompute ranges. Blank local drafts are not server-loaded prose; notes and accepted revision markers remain separate. Owner-reported basic login is not independent hosted acceptance; MFA deferral does not weaken backend authorization.

## Proposals
Distinct exact-head review and full actual Draft/Ready governance/application/security/recovery CI, then owner-controlled integration128 before editor. Preserve source pins and verify evaluated merge-base when retargeting. No automatic merge. Next separately authorizable packet is protected chapter-document/revision and recovery contract using current editor seam, version/idempotency/unknown receipts and disposablePG17; not implemented here.

## Tests
At feature sourcee79:29editor/70workspace(41existing+29editor)/81Library/55MFA/23preflight PASS, check/build exit0. Actual Playwright32assertionsPASS, engine156.0.8078.48,1440/900/390px, no external origins. Temporary serverPID34460 stopped, route removed and3106listener absent; productionbuild has only baseline routes. Complete per-check invoked browser code pinned, result summary explicitly transcribed with source/script hash. No screenshots or independent execution invented.

Historical development failures preserved:2tests had duplicate-ID fixture; disposed snapshot remained visible (beforefix failure), initial cyclic Editor assertion produced diagnostic allocation RangeError before safe boolean assertion. Those uncommitted source stages have no invented immutable SHA. Missing API dependencies before full frozen install caused initialcheck2. After browser route removal, stale generated .next/dev types causedcheck2/build1; only owned cache removed, correctedcheck/build0. Frozen install0, no pre-existing dependency record/specifier/resolution changes. Eight entrypoint and metadata/readiness/traceability/preservation checks PASS. Local full Python suite not unnecessarily repeated; actual final427governance/security/recovery CI still pending at bundle cut and appended externally after head exists. Historical Task67 full-suite failures remain distinct, not relabelled.

## Artifacts
Task68/immutableCP68/EB68/manifest, implementation contract, exact source excerpts, report, before/after raw logs, browser invocation/summary/cleanup and preservation assertions. Generated NextAGENTS/cache, scratch outputs and temporary route excluded. Task67 and previous immutable source histories preserved. Runtime blobs identical between e79 and evidence source, narrowly enabling declared evidence reuse.

## Risks
No hosted operations, real Auth, enrollment/JWT/JWKS/credentials, SQL/grants/session privileges, production workspace route, private manuscripts, paid AI or deployment. No device/server persistence/reload recovery, approved JSON storage schema, complete IMP003/JRN001-003 acceptance, book-wide search, real IME/AT/large-manuscript or platform certification. PRINCIPAL/SESSION/GATEWAY/PACKAGING/RECONCILIATION/TRANSPORT and broad gates remain pending. R01-R08 NOT_RUN; N12/historical independent EPERM BLOCKED. Issue108OPEN; remediation delegationEXPIRED. Optional reviewer runtime restrictions must remain accurately BLOCKED.

## Reviewer disposition
Pending genuine distinct completed-head source review and actual exact-head CI; owner disposition pending. The owner alone decides PR integration. No external review service is authorized.


## Bounded review correction and current source
First distinct review at895fd842 returned one P2: off-screen search results were selected but not revealed; runtime rerun BLOCKED by spawnEPERM. Regression357d33c fails before correction. Initial90f5d6d scroll-intent change passed30unit tests but actual browser failed after16prior checks because asynchronous focus left the selection off-screen. Full failed browser transcript retained. Correctedc291b729698160fb795ad11ede5673b1d7f478a4 requests reveal on explicit navigation and after focus; search input remains non-scrolling/history-neutral. Actual final30editor/71workspace/check/build exit0 and full33browser PASS at that immutable runtime source. All runtime blobs identical in evidence-source481eaf8a60ed12cc5edd70c601ceb1dc7dc52df4. Earlier e79 tests and895Draft427governance are historical, not evidence of corrected-head CI. Fresh completed-head review and actual fullCI pending. Same approved E07/path scope; immutableCP68 unchanged, no amendment required.
