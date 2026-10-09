---
id: VEL-HO-0001
title: Detached ContextPack recovery pilot — automated evidence
type: handoff-evaluation
status: partial
created_at: 2026-10-09
updated_at: 2026-10-09
owner: project_owner
version: 0.1.0
context_pack_id: VEL-CP-0001
task_id: VEL-TASK-0001
evaluated_commit: ad3601c04daeab7158b5c613fb25605209e5c752
agent:
  name: GitHub Actions deterministic probe
  independent_ai_agent: false
  model: null
input_refs:
  - docs/agent-workflow/context-packs/VEL-CP-0001.md
  - scripts/handoff_recovery.py
evidence:
  - https://github.com/Ben-001-sys/Vellistry/actions/runs/37939089572
  - https://github.com/Ben-001-sys/Vellistry/actions/runs/37939089562
rubric_result:
  detached_reconstruction: pass
  independent_ai_handoff: not-tested
  original_source_authentication: not-tested
  human_authorization: not-tested
approved_by: null
approval_evidence: null
---

# VEL-HO-0001 — Detached technical reconstruction evidence

## Test and method

This is **Level A** of the [cold-start protocol](../HANDOFF-REPRODUCIBILITY-PROTOCOL.md). GitHub Actions copied `VEL-CP-0001.md` and a standalone reader into a temporary directory containing **no Git repository** and ran the reader in a subprocess.

The reader's only source is the copied ContextPack. It uses no previous ChatGPT conversation context, original task file, or original research uploads. Its output is a *structural report*, not a second agent's research judgment.

## Verified results (initial PR head)

On commit `ad3601c04daeab7158b5c613fb25605209e5c752`:

- [Agent workflow CI run](https://github.com/Ben-001-sys/Vellistry/actions/runs/37939089572): **passed**. Included 15 existing workflow tests and 5 new detached reconstruction tests, plus ContextPack/ExecutionBundle validation.
- [Knowledge metadata CI run](https://github.com/Ben-001-sys/Vellistry/actions/runs/37939089562): **passed**. Included 8 metadata regression tests and ADR/history validation.
- Detached input recovered the task ID, ContextPack ID, historical commit, objective, in/out scope, allowed actions, owner approval gates, criteria, deliverables, and five source references with their draft/accepted statuses.
- Negative tests verified failure on changed permission markers, missing snapshot blocks, and falsified displayed source status.
- The output explicitly retained the SRC-001 archival gap and did not claim independent AI completion, original-source verification or Git authentication inside the detached environment.

## Limitations

- This was deterministic Python parsing, **not** an independent Cursor/Codex/other-agent execution.
- Full Git integrity checks require a separate checkout and `agent_workflow.py validate`; a detached reader cannot authenticate the original source files.
- Even a correctly parsed ContextPack could be misunderstood by an AI model. No LLM continuation, reasoning quality evaluation, or author approval of independent agent output has yet occurred.
- The packet is a **historical fixture** predating the owner-selected Tiptap 3/ProseMirror direction; it must not be used to revoke newer decisions.

## Next gate

Conduct [Level B](../HANDOFF-REPRODUCIBILITY-PROTOCOL.md) in a genuinely separate AI-agent session using only the pinned ContextPack and the protocol prompt. Store its actual response and a filled evidence/rubric review; do not backfill a fictional result.

**Disposition:** Level A complete at the cited initial CI head; Level B pending. This report is awaiting owner acceptance, and it does not authorize a merge.
