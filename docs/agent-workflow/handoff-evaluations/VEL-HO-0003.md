---
id: VEL-HO-0003
title: Cursor Stage 4 independent execution — reproduced synthetic evidence
type: handoff-evaluation
status: partial
created_at: 2026-10-10
updated_at: 2026-10-10
owner: project_owner
version: 0.2.0
task_id: VEL-TASK-0002
context_pack_id: VEL-CP-0002
reported_base_commit: e9516f1b8dcb202319c1060c404536acd3c5190f
agent:
  name: Cursor
  model: "Grok 4.7"
  model_evidence: "Cursor screenshot shows Grok 4.7 High; report attributes Grok 4.7 to SpaceXAI"
  fresh_session: owner_and_agent_attested_not_technically_proven
  independent_execution: original_submitted_files_received_and_tests_reproduced
  reported_python: "3.10.10"
  reported_tests: 17
  reported_failures: 0
  reported_exit_code: 0
  reported_runtime_seconds: 0.002
input_evidence:
  supplied_files_reported:
    - PROMPT.md
    - VEL-CP-0002.md
  packet_expected_sha256: 8b6fe502fc09ff507f2e06863271a03651e6e11e9971389ed4a95f4bc15861df
  packet_verification: "CI verified source packet; local original two-file workspace and hidden Cursor context are supported by screenshot and owner/agent testimony, not independently inspected"
output:
  report_filename: VEL-EB-0002-INDEPENDENT.md
  report_sha256_claimed: 4365f4ff676e5e272409ed913a2b2c003e69451a75a331aad176243c5eb36578
  report_sha256_verified: true
  report_bytes_received: true
  raw_report_in_git: false
  python_files_received: true
  reproducible_tests_independently_run: true
  source_sha256_claimed:
    synthetic_chapter_contract.py: 74705667484e5a9f0969f9ca37760da252fb11e76f3b3cb98c3b8a0fcc410c15
    test_synthetic_chapter_contract.py: 9790507cc129abc01ee4cabba063ee20cc038564d3ffa77c19c31668726d2194
verification:
  date: 2026-10-10
  runtime: "Python 3.13.5"
  process_exit_code: 0
  actual_tests: 17
  failures: 0
  errors: 0
  source_hashes_verified: true
  reproduction_in_independent_container: true
  embedded_source_text_matches_uploaded_files: true
  python_bytecode_compile_passed: true
  original_report_sha256: 4365f4ff676e5e272409ed913a2b2c003e69451a75a331aad176243c5eb36578
  synthetic_code_sha256: 74705667484e5a9f0969f9ca37760da252fb11e76f3b3cb98c3b8a0fcc410c15
  test_code_sha256: 9790507cc129abc01ee4cabba063ee20cc038564d3ffa77c19c31668726d2194
  evidence_archive: "VEL-STAGE4-INDEPENDENT-VERIFIED-20261010.zip, available as a verified conversation artifact; not yet added to Git"
  approval_status: pending_owner_decision
screenshot:
  source: "User-submitted Cursor screenshot in chat, 2026-10-10"
  image_sha256: 6ab0cf0c9797c54ad23f4222e914a30c24180de31e47c75331de4c684c000a6f
  image_bytes: 155607
  dimensions_pixels: "1365x738"
  archived_to_git: false
review:
  status: pending
  approved_by: null
  evidence: null
related_prs:
  - 45
related_issues:
  - 27
---

# VEL-HO-0003 — Cursor Stage 4, independently reproduced technical evidence

**Verification result: PASS for the narrow synthetic test evidence; overall evaluation remains PARTIAL pending formal owner acceptance and full evidence archival into Git.** The operator supplied original, unedited Cursor files after the initial screenshot: `VEL-EB-0002-INDEPENDENT.md`, `synthetic_chapter_contract.py` and `test_synthetic_chapter_contract.py`. All three **actual uploaded byte hashes exactly match** their previously reported SHA-256. This supersedes version 0.1.0's claims that code/test/report files had not been received.

## Verified facts

- **Raw report:** 64,052 bytes, SHA-256 `4365f4ff676e5e272409ed913a2b2c003e69451a75a331aad176243c5eb36578`.
- **Original code:** 21,701 bytes, SHA-256 `74705667484e5a9f0969f9ca37760da252fb11e76f3b3cb98c3b8a0fcc410c15`.
- **Original tests:** 23,778 bytes, SHA-256 `9790507cc129abc01ee4cabba063ee20cc038564d3ffa77c19c31668726d2194`.
- **Source cross-check:** Both fenced Python listings in the original report match the uploaded executable source files **when trailing blank lines are normalized**; no code-body discrepancy found.
- **Independent reproduction:** Python **3.13.5**, `python -I -S -m py_compile` for both files PASS. `python -I -S -m unittest discover -s /mnt/data -p test_synthetic_chapter_contract.py -v` **exit 0, 17 tests, 0 failures, 0 errors**. All test methods report `ok`. The original Cursor report separately states Python **3.10.10**, 17/17 tests, exit 0. Different runtime version is explicitly documented.
- **Archival:** A deterministic evidence ZIP `VEL-STAGE4-INDEPENDENT-VERIFIED-20261010.zip` was produced in the conversation with unchanged originals, the independent run log and a JSON hash manifest. The original raw report and source code are **not yet Git blobs**; this evaluation records hashes and results, not a false claim that raw artifacts were committed.
- **Packet provenance:** [Agent workflow #38011745483](https://github.com/Ben-001-sys/Vellistry/actions/runs/38011745483) verified `VEL-CP-0002` pinned to PR #45 commit `e9516f1b8dcb202319c1060c404536acd3c5190f`. The actual uploaded Cursor report quotes that exact pin and task identity.

## Scenario evidence

| Scenario | Verified synthetic behavior and scope |
|---|---|
| SC-001 | Two authored chapters navigate/reopen with separate documents; synthetic PASS |
| SC-002 | AI-free, formatted inert document fixture and rejected unsupported shapes; **PARTIAL**, no browser Tiptap or real keyboard/IME/accessibility |
| SC-003 | Acknowledged in-memory save and reopen preserve revision/document/emphasis; synthetic PASS |
| SC-004 | Client cannot distinguish lost-before-commit from lost-after-commit until read-back; no false `saved` acknowledgement; synthetic PASS |
| SC-005 | Stale revision conflicts do not overwrite newer content; synthetic PASS; still analyst-proposed |
| SC-006 | Forged author claim and guessed chapter deny content in synthetic model; synthetic PASS; not real authentication/RLS |
| SC-007 | Same-title chapter isolation scoped by book/chapter identifiers; synthetic PASS |
| SC-008 | Read-only policy declaration remains proposed; **PARTIAL**, cannot prove ongoing governance compliance |

**Actual product acceptance for SC-001–SC-008 remains NOT TESTED.** Both model and tests were written by Cursor in one session; passing tests demonstrate internal consistency of that *fake store*, not correctness of a production system.

## Evidence boundary: session isolation vs technical reproduction

The screenshot shows Cursor Grok 4.7 High with generated report/code and two ContextPack input files; owner and agent attest the workspace initially held only the two inputs and that the agent chat was fresh. The independently executed tests and verified file hashes establish **actual technical reproducibility**. Neither source-code hashes nor the post-execution screenshot technically proves the initial workspace had no hidden rules, loaded memories, connectors or prior chat context. Record independence as **owner/agent attested** rather than claiming a forensic certificate.

## Scope, decisions and next steps

- No app architecture, provider, database or production private-manuscript authorization was selected by the Python experiment. The owner-approved MVP M1/M2/M3/M8 boundaries were distinguished from the proposed acceptance checks and `VEL-SPEC-001`.
- The **read-back-as-saved** and writer-facing conflict handling are proposals that require owner review before implementation.
- This evaluation's **technical evidence gate is now verified**. Remaining administrative gates: copy the evidence ZIP or original three raw files into permanent project archival storage, review the proposed spec/result, explicitly record owner acceptance or rejection, and decide whether Issue #27 can close.
- Do not infer owner design-entry approval, production implementation permission, G03/G08 closure, acceptance of Stage 3 historical [Issue #18](https://github.com/Ben-001-sys/Vellistry/issues/18), or automatic promotion of `VEL-SPEC-001`.

**Disposition:** Stage 4 external-agent synthetic execution **independently reproduced and hash-verified**; fresh-session separation **owner/agent-attested**; formal **owner acceptance pending**. Remain in evidence review rather than silently declaring Stage 4 and product acceptance complete.
