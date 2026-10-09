---
id: VEL-GOV-STAGE4-001
title: Stage 4 specification-to-task pilot
type: process
status: proposed
created_at: 2026-10-09
updated_at: 2026-10-09
owner: project_owner
version: 0.1.1
related_specs:
  - VEL-SPEC-001
related_tasks:
  - VEL-TASK-0002
---
# Stage 4 — From accepted product scope to bounded agent execution

This **proposed** process is an incremental addition to the merged Stage 3 task, ContextPack and ExecutionBundle workflow, not an orchestration service or new Vellistry architecture.

## Source authority and traceability

1. **Accepted product direction:** [eight-area MVP](../requirements/MVP-SCOPE-DECISION-2026-10-09.md), M1/M2/M3/M8, approved by the owner. A selected product behavior is not proof of working code or an accepted implementation mechanism.
2. **Proposed detailed tests:** [author journeys and acceptance plan](../requirements/MVP-USER-JOURNEYS-AND-ACCEPTANCE-2026-10-09.md), which remains `proposed-not-executed` even if a task quotes it.
3. **Proposed technology-neutral slice:** [VEL-SPEC-001](../specs/VEL-SPEC-001-CHAPTER-SAVE-CONTRACT.md), SC-001–SC-008.
4. **Agent assignment:** [VEL-TASK-0002](tasks/VEL-TASK-0002.yaml), with scope, permissions, decisions needing owner review and missing gates G03/G08.
5. **Reproducible handoff:** CI creates `VEL-CP-0002` pinned to one Git revision; the task and raw source blobs remain verifiable through Stage 3 tools. It does **not** replace historical `VEL-CP-0001`.
6. **Evidence backflow:** agent supplies an ExecutionBundle, code/test artifacts where applicable, negative tests and a proposed update. Owner reviews before accepted specification promotion or merge.

## Quality gates

Run these in the repository:

```bash
python -m pip install 'PyYAML>=6,<7'
python scripts/spec_traceability.py validate
python -m unittest discover -s tests -p 'test_spec_traceability.py' -v
python scripts/agent_workflow.py pack docs/agent-workflow/tasks/VEL-TASK-0002.yaml
python scripts/agent_workflow.py validate
```

The `pack` command refuses overwrite of an existing pack. When regenerating, use a fresh checkout or a **new ContextPack identity and task revision**—do not rewrite a previously dispatched immutable packet.

On the candidate PR, the Agent workflow action exports `vellistry-stage4-chapter-context` containing the generated `VEL-CP-0002.md`. The owner should verify its PR head, attached artifact and CI before sending to a new agent. Do not treat that artifact alone as an approved engineering implementation.

## Boundary: what is and is not tested

- **Tested by this CI:** metadata/source status, source path, feature-release-horizon and journey/acceptance ID references; eight declared scenarios; missing sections and out-of-scope feature rejection; Git-pinned ContextPack generation and validation.
- **Not yet tested:** real product UI, production authorization, post-crash draft recovery, browser Tiptap usage, end-user usability, real database durability, R01 source certification, or third-party AI behavior.
- **Decision boundary:** this Stage 4 pilot does not choose or change frameworks, authentication, persistence, deployment or AI provider. Subsequent project records identify an owner-selected Next.js + NestJS + Supabase direction in separate [PR #28](https://github.com/Ben-001-sys/Vellistry/pull/28), which remains subject to its own merge/review state. The synthetic chapter contract deliberately remains adapter-neutral and is not authority to reverse that direction. Provider/model and other implementation details still require their own decisions.
- **Owner approval needed:** promote `VEL-SPEC-001` from `proposed`, authorize an implementation plan beyond synthetic fixtures, and merge a consequential PR.

## Stage 4 milestone acceptance

- [ ] VEL-SPEC-001 maps an agreed chapter-save journey to accepted MVP areas without pretending proposed acceptance criteria were approved.
- [ ] VEL-TASK-0002 is independently understandable from a pinned ContextPack.
- [ ] CI both runs and rejects source/permission/schema tampering appropriately.
- [ ] A coding/research agent returns one evidence-bound ExecutionBundle, with actual test results and explicit remaining gaps.
- [ ] The owner reviews the spec/task/agent result; acceptance is not inferred from passing documentation checks.

**Status on authoring:** The spec and task are drafted. CI and agent execution results must be linked separately once they exist.
