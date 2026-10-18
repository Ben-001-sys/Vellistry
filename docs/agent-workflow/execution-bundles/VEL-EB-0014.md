---
id: VEL-EB-0014
title: VEL-SEC-001 manual harness inventory blocker
type: execution-bundle
status: proposed-for-review
created_at: '2026-10-18'
version: 0.1.0
task_id: VEL-TASK-0014
context_pack_id: VEL-CP-0014
base_commit: 6279682ae4e576d8d910fa926672b0681b20398a
agent:
  name: Codex
  model: GPT-6; exact build not exposed
  runner: Windows isolated Codex worktree
  role: primary-implementer
sources:
- PROJECT-CONSTITUTION.md
- AGENTS.md
- docs/agent-workflow/README.md
- docs/agent-workflow/PR-COMPLIANCE.md
- .github/workflows/ci.yml
- docs/agent-workflow/inputs/VEL-TASK-0014/handoff.json
- docs/agent-workflow/inputs/VEL-TASK-0014/collision.json
- docs/agent-workflow/inputs/VEL-TASK-0014/sources.json
- docs/agent-workflow/inputs/VEL-TASK-0014/DESIGN.md
evidence:
- docs/reports/VEL-SEC-001-GH-ACTIONS-BLOCKER.md
- docs/reports/evidence/VEL-SEC-001-GH-ACTIONS/actual-command-exits.json
- docs/reports/evidence/VEL-SEC-001-GH-ACTIONS/workflow-inventory-negative-control.json
review:
  status: pending
  approved_by: null
  evidence: null
execution:
  status: BLOCKED
  executor: Codex
  model: GPT-6; exact build not exposed
  tests:
  - command: Existing inventory test against temporary unchanged inventory
    status: PASS
    exit_code: 0
  - command: Same test with one additional manual-only read-only workflow
    status: EXPECTED_FAILURE
    exit_code: 1
  - command: GitHub-hosted PG17 manual workflow
    status: NOT_RUN
    exit_code: null
---

# VEL-SEC-001 manual harness preparation checkpoint

## Work performed
FACT: verified main/PR68, scanned all committed artifact histories, preserved0012 collision and0013 reservation, committed Task/CP0014 before edits. Inspected existing manual workflows. Demonstrated new manual workflow is rejected by unchanged CI inventory contract in a temporary copy. No implementation changes.

## Facts and evidence
Main021379856d07611752832b44bfe951d6ae36f0b2; PR68cbb379fa4a4eaa9f576f3abcce2c2258d22cc551. Source6279682ae4e576d8d910fa926672b0681b20398a; pack329eaba16dbb94d8436aec8406a7960ae8a3695b. Full collision/pin records in immutable inputs; raw actual subprocess exits/report linked.

## Interpretations
Additional manual workflow conflicts with fixed25+ci inventory invariant. Handoff explicitly requires stopping for separate approval before invariant/policy changes; Task0014 does not authorize protected test edits.

## Proposals
Owner authorizes narrow tests/test_ci_policy.py amendment preserving all existing jobs/security/enforcement and allowing exactly one new read-only manual workflow, with new immutable task/pack. Proposed diff and negative coverage in report. No SQL approval requested or inferred.

## Tests
Unchanged inventory1test PASS exit0; added synthetic manual-only workflow1test ERROR exit1 (expected blocker proof). No PostgreSQL tests or hosted Actions run. No application build/CI acceptance claimed.

## Artifacts
Task/CP/EB0014, source/collision manifests, blocked report and temporary-test raw evidence. No workflow, test helper or SQL integration.

## Risks
Draft harness cannot honestly pass current contract without separately authorized amendment. Manual dispatch also awaits default-branch integration/owner dispatch. Hosted/migration/JWT restrictions unchanged.

## Reviewer disposition
ChatGPT review and owner invariant-amendment decision pending. No merge, SQL approval or source-policy change; Task blocked.
