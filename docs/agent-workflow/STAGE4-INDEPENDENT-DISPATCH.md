---
id: VEL-GOV-STAGE4-DISPATCH-001
title: Independent Stage 4 agent execution — operator handoff
type: process
status: proposed
created_at: 2026-10-10
updated_at: 2026-10-10
owner: project_owner
version: 0.1.0
task_id: VEL-TASK-0002
context_pack_id: VEL-CP-0002
related_issues:
  - 18
  - 27
---

# Independent Stage 4 agent dispatch — do not mistake export for execution

## Purpose

Run a **genuinely separate Cursor/Codex/other agent** through the current author-chapter task, record runnable synthetic evidence and an execution report, and seek owner review. This is **Stage 4 Issue #27**. The earlier historical Stage 3 Level B Issue #18 remains independent: successful Stage 4 reporting does not retroactively certify the earlier Cursor session.

The source-of-truth remains Git. **No autonomous orchestration or cross-agent execution has been performed by this packet exporter**; the operator must explicitly start and supervise the separate agent.

## Operator procedure

1. Open this PR's exact-head successful **Agent workflow** run in GitHub Actions. Download the artifact `vellistry-stage4-independent-agent-packet`. It contains one inner ZIP, `stage4-independent-agent-packet.zip`.
2. Extract only that inner ZIP into a **new otherwise empty workspace**. Verify there are **exactly two files**: `VEL-CP-0002.md` and `PROMPT.md`. The exporter prints SHA-256 for both and the ZIP in the workflow log; record them outside the target workspace.
3. Start a **new Cursor Agent chat** (or Codex session) against the empty workspace. No old Vellistry checkout, project-wide rules, previous ExecutionBundle, this chat, GitHub project link, prior transcript or unrelated connected sources. The selected agent may independently author new Python test files while executing.
4. Send this exact operator message (not a third file): **`Follow PROMPT.md. Read only the supplied VEL-CP-0002.md and PROMPT.md as prior project context. Execute the bounded synthetic task, run tests if possible, and return the raw VEL-EB-0002-INDEPENDENT.md report and runnable files. Do not infer prior project history.`**
5. Preserve the agent's **unaltered reply**, runnable files and test-console outputs, tool/model/settings, session-reference or owner-attested session-start method, exact ZIP/inputs/commit hashes and workspace inventory. Do not rewrite or improve the raw agent output before recording it.
6. Compare the supplied work with SC-001–SC-008. For each, distinguish **observed synthetic test PASS/FAIL**, untested real application behavior, prior/pinned source authority, unknowns and owner-only decisions. Independently rerun the submitted Python standard-library tests where practical. File/command evidence is required before making a test claim.
7. Open an **evidence-only PR** with the raw output, reproducible files, and a separate draft evaluator/ExecutionBundle using the accepted Vellistry template and link Issue #27. A reviewer checks the Git pins, no unauthorized changes, failing/negative tests, and source statuses. Only owner approval can mark the issue accepted/closed or promote specifications.

## What not to supply

- Do not hand over PR #35's existing `chapter_model.py` or the previous ChatGPT execution report as **prior context** in this independent test.
- Do not include Issue #27, the scoring rubric, a complete repository checkout, browser/account credentials or this conversation in the cold-start workspace.
- Do not use a prior Cursor conversation or Codex workspace; a model selector screenshot alone does not prove isolation.
- Do not treat historical VEL-CP-0001 as current VEL-CP-0002 or mistake the owner-approved **eight-area MVP** for approved detailed tests or release.

## Operator verification before accepting the result

| Check | Requirement |
|---|---|
| Provenance | Exact PR head, pack Git `base_commit`, ZIP/input SHA-256, visible two-file workspace and fresh-session explanation |
| Work | Agent independently reconstructs VEL-TASK-0002 from current packet and writes runnable synthetic test source |
| Evidence | Actual commands, exit codes, negative test results and scenario-by-scenario limitations |
| Scope | No production code, framework/database/auth selection, real manuscripts, paid API or deployment |
| Authority | Accepted M1–M8 **product scope** distinguished from proposed chapter-saving spec and draft acceptance tests |
| Closeout | Raw output retained; reviewer reproduces; owner decides accept/reject; Issue #27 remains open until those facts exist |

## Packet generation

For an **unmodified clean full-history checkout on the CI HEAD**:

```bash
python -m pip install 'PyYAML>=6,<7'
python scripts/agent_workflow.py pack docs/agent-workflow/tasks/VEL-TASK-0002.yaml
python scripts/agent_workflow.py validate
python -m unittest discover -s tests -p 'test_stage4_independent_packet.py' -v
python scripts/export_stage4_independent_packet.py --output stage4-independent-agent-packet.zip
```

The pack generator refuses overwrite. In a checkout where `VEL-CP-0002.md` already exists, use a **new clean checkout**, not deletion/replacement of a dispatched immutable packet. This exporter additionally rejects a `base_commit` other than the **checkout's HEAD**. The two-file ZIP does not contain a receipt, grading key, report, code from the prior pilot or source repository.

**What has been completed by this PR:** automated creation/validation/export and a reproducible operating procedure. **What remains unperformed:** real separate-agent execution, independent file/test inspection, true cross-agent recovery and owner's final acceptance. 
