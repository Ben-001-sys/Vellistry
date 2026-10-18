---
id: VEL-EB-0016
title: VEL-LANG-001 provenance-preserving PR77 integration
type: execution-bundle
status: proposed-for-review
created_at: '2026-10-18'
version: 0.1.0
task_id: VEL-TASK-0016
context_pack_id: VEL-CP-0016
base_commit: 36db6ab2e38c83d00ce767cf33672d30b28c19fc
agent:
  name: Codex
  model: GPT-6; exact build not exposed
  runner: Codex desktop, isolated Windows worktree; GitHub CI after submission
  role: integration-implementer
sources:
- PROJECT-CONSTITUTION.md
- SOURCE-OF-TRUTH.md
- AGENTS.md
- CURRENT-STATE.md
- docs/decisions/ADR-0008-codex-primary-agentic-implementation-workflow.md
- docs/agent-workflow/README.md
- docs/agent-workflow/PR-COMPLIANCE.md
- docs/agent-workflow/inputs/VEL-TASK-0016/DESIGN.md
- docs/agent-workflow/inputs/VEL-TASK-0016/id-scan.json
- docs/agent-workflow/inputs/VEL-TASK-0016/issue79.json
- docs/agent-workflow/inputs/VEL-TASK-0016/OWNER-DISPATCH.md
- docs/agent-workflow/inputs/VEL-TASK-0016/PR77-PR77-HANDOFF-SUPERSESSION.md
- docs/agent-workflow/inputs/VEL-TASK-0016/source-map.json
- docs/agent-workflow/inputs/VEL-TASK-0016/LANGUAGE-REVIEW-EXCERPT.md
evidence:
- docs/agent-workflow/inputs/VEL-TASK-0016/OWNER-DISPATCH.md
- docs/agent-workflow/inputs/VEL-TASK-0016/source-map.json
- docs/agent-workflow/inputs/VEL-TASK-0016/chronology.json
- docs/agent-workflow/inputs/VEL-TASK-0016/integration-verification.json
- docs/agent-workflow/inputs/VEL-TASK-0016/documentation-tests.json
- docs/agent-workflow/inputs/VEL-TASK-0016/compliance-tests.json
- docs/agent-workflow/inputs/VEL-TASK-0016/compliance57.txt
- docs/agent-workflow/inputs/VEL-TASK-0016/bundle-handoff-validation.txt
- docs/agent-workflow/inputs/VEL-TASK-0016/trusted-compliance-isolated-runtime.json
- docs/agent-workflow/inputs/VEL-TASK-0016/final-trusted-compliance.json
review:
  status: pending
  approved_by: null
  evidence: null
implementation_source_commit: fab4fe0748a72348193f9cf233a302fb359969c3
execution:
  status: completed
  executor: Codex
  model: GPT-6; exact build not exposed
  tests:
  - command: python scripts/agent_workflow.py validate
    exit_code: 0
    status: PASS
    duration_seconds: 23.344
    evidence: docs/agent-workflow/inputs/VEL-TASK-0016/documentation-check-1.txt
    source_commit: fab4fe0748a72348193f9cf233a302fb359969c3
  - command: python scripts/check_knowledge_metadata.py
    exit_code: 0
    status: PASS
    duration_seconds: 0.219
    evidence: docs/agent-workflow/inputs/VEL-TASK-0016/documentation-check-2.txt
    source_commit: fab4fe0748a72348193f9cf233a302fb359969c3
  - command: python scripts/check_implementation_readiness.py
    exit_code: 0
    status: PASS
    duration_seconds: 0.156
    evidence: docs/agent-workflow/inputs/VEL-TASK-0016/documentation-check-3.txt
    source_commit: fab4fe0748a72348193f9cf233a302fb359969c3
  - command: python scripts/spec_traceability.py validate
    exit_code: 0
    status: PASS
    duration_seconds: 0.141
    evidence: docs/agent-workflow/inputs/VEL-TASK-0016/documentation-check-4.txt
    source_commit: fab4fe0748a72348193f9cf233a302fb359969c3
  - command: 'Python assertions: exact source blob/status/15 decisions; AGENTS reconciliation;
      three adopted patch IDs; pack chronology; changed-path and protected-source
      preservation'
    status: PASS
    exit_code: 0
    source_commit: fab4fe0748a72348193f9cf233a302fb359969c3
    evidence: docs/agent-workflow/inputs/VEL-TASK-0016/integration-verification.json
  - command: python -m unittest discover -s tests -p test_pr_compliance.py -v
    exit_code: 0
    status: PASS
    duration_seconds: 270.015
    evidence: docs/agent-workflow/inputs/VEL-TASK-0016/compliance57.txt
    source_commit: fab4fe0748a72348193f9cf233a302fb359969c3
  - command: C:/Users/admin/.codex/worktrees/vel-gov-003/Vellistry/.compliance-venv.log/Scripts/python.exe
      -I scripts/run_pr_compliance.py
    exit_code: 0
    status: PASS
    source_commit: fab4fe0748a72348193f9cf233a302fb359969c3
    evaluated_head: 6ccf4469d877fd522b6dcb574107dd3fe049f1a4
    evidence: docs/agent-workflow/inputs/VEL-TASK-0016/trusted-compliance-isolated-runtime.json
owner_disposition: pending
---

# VEL-LANG-001 — clean main-based recovery of PR77

## Work performed

**FACT:** new `codex/vel-lang-001-main-integration` starts from actual main `098ab06a40a84eaba5880223f02e80fab3bf9e86` (merged PR78), not historical PR77. Task0016 was unused across fetched artifact histories0001–0015 before reservation. Task sources were committed and actual generated CP0016 validated/committed BEFORE all operative edits. Integrates LANGUAGE.md and only the product-language subsection into latest main AGENTS.md. No original PR77 branch mutation or imported historical task records.

## Facts and evidence

Direct owner dispatch in this conversation plus linked Issue79 is recorded in OWNER-DISPATCH.md. Issue79 is expressly a coordinator relay, not independently human-posted approval; no Git author identity or separate owner semantic/merge acceptance is inferred. Existing contract permits this provenance form. Codex is the new executor; no alternate-executor exception is fabricated.

- Current base: `098ab06a40a84eaba5880223f02e80fab3bf9e86`.
- Task/source initial preparation: `5a2ce41bba374ad1b3e6e7579de9c7d85901b9fb`; actual task snapshot pinned by pack: `36db6ab2e38c83d00ce767cf33672d30b28c19fc`.
- Immutable pack: `e52ede9c52e0b2be843f023e477df742c6268a07`, after actual validator exit0 (10 tasks/8 packs/7 bundles before EB0016).
- Operative source: `fab4fe0748a72348193f9cf233a302fb359969c3`. Final evidence head is recorded in the new Draft PR description after commit; it is not invented as a self-reference here.
- Original ChatGPT PR77 source head: `3cb1030ae4c636fc18245ed8ae23ebb967e5407d`.
- LANGUAGE blob unchanged: `badc4f189286740736a26b0f58a38bcfb05b0884`; SHA256 `a8347a2149ba0cca7c0315a75712f7149f46eaa99947583c5f406c417d1e19c2`.

New adoption commits `79b5af904967f2f0af3dd81b20d30828fd41ea69`, `e515d99f13c1111e2348af6b64d9f5251c7e7014`, `2c49dbdc7620c635a24364aff830ba349ebe4260` apply ONLY original ChatGPT LANGUAGE commits `7bc7a6f239901733fbe10aa71159d2ab991bf037`, `3118e601f7860250fc7a5c73dc8c263963ca25a1`, `999b5e81873071292099020f818a76dd017dce86`, respectively. Stable patch IDs match; original trailers and authorship remain. Manifest declares `origin: adopted`, `original_executor: ChatGPT`, exact source commits and PR URL; new adoption executor is Codex. Commit wording containing historical "approved-upload" is preserved as history, not proof of terminology approval.

Codex reconciliation `fab4fe0...` reuses the six original language bullets from ChatGPT AGENTS commit `dc7e206924074d06714debad6b4ac17c9e6857fd`, inserting them into current main. The removal-of-section/metadata-normalization assertion reconstructs base AGENTS exactly. Metadata alone changes to2026-10-18/version0.1.7. This adapted patch is correctly declared original Codex integration with credited ChatGPT content; it is not asserted to match the entire historical AGENTS patch. No editorial change to LANGUAGE text or its historical baseline/date claims.

Historical PR77 CP0010/CP0011 were not validated pre-edit; original0012 has only disclosed deterministic source-review evidence and collides with the independent security0012 lineage. All remain on original historical branches; none renamed/recycled/retroactively validated. Actual historical run39125899080 fails missing run_pr_compliance.py at exit2, before compliance evaluation. The main-based branch inherits the real loader/evaluator without editing them.

Preparation pack attempts failed twice at35000 source-byte limit (one repeated after a UTF-8 preparation read error), then twice at90000 total-byte limit. Only pre-dispatch task input selection was revised; full original source remains and is hash-pinned. Failed attempts are not called PASS; chronology.json preserves them. Five split original source files were generated before selecting a smaller excerpt; retained as preparation artifacts. The DESIGN incorrectly says Section16 contains15 decisions; actual Section18 has LANG-P01–P15, all verified intact. This reference error changes no task permission or naming approval. Committed pack stays unchanged.

## Interpretations

**INTERPRETATION:** exact blob and patch-ID equality establishes faithful adoption of this source version; it does not authenticate runtime authorship, verify the owner's original upload, recertify external research, or approve the fifteen decisions. Original historical baseline statements are preserved source framing, not new current-environment guarantees. AGENTS instructions apply owner-approved terminology only and preserve current accepted authority and compliance guidance.

This is repository documentation/instruction integration. No UI strings/routes or runtime behavior are changed. No new feature, SQL, hosted acceptance, security-hold waiver, paid service, deployment, administrator or branch-protection action. CURRENT-STATE remains unchanged because this is an unmerged candidate; these task/EB and PR records carry pending facts rather than promote owner decisions.

## Proposals

**PROPOSAL:** independent ChatGPT exact-head source/CI review, then owner separately decides semantic adoption and merge. Review all LANG-P01–P15; integrating this candidate alone does not accept the labels. Keep new PR Draft/unmerged and original PR77 intact. Owner may later supersede/close PR77 only by separate instruction. No accepted ADR/architecture change.

## Tests

Actual command/exits and source bindings are in the execution metadata and raw input logs. Exact original LANGUAGE blob, proposal status, fifteen decisions, three stable patch IDs, current AGENTS preservation, pack chronology and protected-path equality pass. Handoff, knowledge metadata, readiness and spec traceability validators pass. Existing compliance suite:57 tests PASS, exit0 in270.015seconds at operative sourcefab4fe0. Bundle-inclusive actual handoff validation:10tasks/8packs/8bundles PASS, exit0. Trusted-base loader evaluated evidence head6ccf4469d877fd522b6dcb574107dd3fe049f1a4: PASS/exit0, with reviewed base098ab06 and source bindingfab4fe0. First system-python isolated invocation failed exit1 because -I hides user-installed PyYAML; unchanged loader passed using an existing isolated PyYAML6.0.3 environment. Both outputs retained. This following report-only commit declares the prior evidence head; final exact-head CI ledger is in the new Draft PR.

`git diff --check origin/main HEAD` reports three blank-EOF warnings in attributed context snapshots/excerpts, exit2. No operative LANGUAGE/AGENTS warning; pinned source formatting is preserved. This check is explicitly not reported PASS. Source-only/no-runtime changes need no new test implementation. Actual GitHub exact-head checks/results will be recorded in the new Draft PR description; a legitimate draft red gate is distinct from compliance/governance failure. No preexisting green run is substituted.

## Artifacts

Only LANGUAGE.md, AGENTS.md, new Task/CP/EB0016, canonical PR-COMPLIANCE.yaml and task-local source/evidence files. source-map.json enumerates original paths/blobs/SHA256; id-scan.json records reservation; integration-verification.json supplies actual adoption/preservation checks; chronology.json records failed preparation and successful handoff. Original PR: https://github.com/Ben-001-sys/Vellistry/pull/77 . Linked assignment: https://github.com/Ben-001-sys/Vellistry/issues/79 . New Draft PR description is the final-head CI ledger.

## Risks

Fifteen naming questions remain pending. Source candidate contains dated research, external links and unverified runtime claims expressly bounded by its own status. No new browser/author/interview/hosted or external-link research is performed. Structural compliance is not actor authentication or enforced protected-branch security; owner-deferred protection risk remains. Main drift requires re-evaluation/new authorized pack, not a silent rebase. PR68 migration, JWT/private-manuscript and release gates remain unchanged.

## Reviewer disposition

Pending independent exact-head review and owner decision. Owner disposition pending; no self-approval, Ready transition, merge or old-PR closure. Candidate integration is completed only with accurately reported checks; GitHub results must be inspected at final evidence head before review readiness is asserted.
