---
id: VEL-HO-0000
title: Independent ContextPack handoff evaluation template
type: agent-template
status: template
created_at: 2026-10-09
updated_at: 2026-10-09
version: 0.1.0
---

# Independent-agent handoff evaluation template

Copy this into `docs/agent-workflow/handoff-evaluations/VEL-HO-XXXX.md` **only after an independent agent has actually executed**. Replace the template identity, and retain original raw output separately if appropriate.

## Required metadata
- `id`: distinct permanent evaluation ID
- `type: handoff-evaluation`
- `status`: partial / passed / failed / not-tested
- `created_at`, `updated_at`, `owner`, `version`
- `task_id`, `context_pack_id`, `evaluated_commit`
- `agent`: tool/model/session reference and whether truly independent
- `input_refs`: exact packet and any other supplied inputs; **should be only the packet for Level B**
- `evidence`: actual response/session/commit links
- `rubric_result`: each protocol criterion pass/fail/not-assessed
- `approved_by`, `approval_evidence`: null until explicit owner disposition

## Method
Describe how prior conversation/model context was excluded, what was provided to the independent agent, and whether any retrieval/search was possible.

## Verbatim agent response
Preserve the model's actual words or an immutable retrieval reference, not a reconstructed or improved answer.

## Findings and rubric
Score the criteria in `HANDOFF-REPRODUCIBILITY-PROTOCOL.md`, with quotes or evidence references. Differentiate correctness of scope reconstruction from accuracy of the original research.

## Tests and reproducibility
Record actual Git commit, packet ID, run details, tested model identity, costs if known, and the limits of observed behavior.

## Owner disposition
Accept/reject/request changes and link an owner-authored review comment. An AI agent must not approve itself.
