---
id: VEL-EB-0037
title: Reconcile offline setup guidance and remaining ChatGPT preflight wording
type: execution-bundle
status: proposed-for-review
created_at: '2026-10-20'
version: 0.1.0
task_id: VEL-TASK-0037
context_pack_id: VEL-CP-0037
base_commit: 477f83678e6026d211b97112b60f52cbdb1cb0d5
agent:
  name: Codex
  model: GPT-6; exact build unavailable
  runner: Codex desktop Windows isolated current-main worktree
  role: selective-integrator
sources:
- PROJECT-CONSTITUTION.md
- SOURCE-OF-TRUTH.md
- AGENTS.md
- docs/agent-workflow/PR-COMPLIANCE.md
- docs/agent-workflow/authorizations/VEL-REM-INTEGRATION-20261019.yaml
- README.md
- scripts/hosted_supabase_preflight.mjs
- tests/hosted_supabase_preflight.test.mjs
- apps/web/src/lib/supabase/browser.ts
- docs/agent-workflow/inputs/VEL-TASK-0037/OWNER-SCOPE.md
- docs/agent-workflow/inputs/VEL-TASK-0037/PR65-SOURCE-MAP.json
- docs/agent-workflow/inputs/VEL-TASK-0037/PR65-PLACEHOLDER-AND-BROWSER-SOURCES.md
- docs/agent-workflow/inputs/VEL-TASK-0037/PUBLIC-DOCS.md
evidence:
- docs/reports/evidence/VEL-INTEGRATION-0037/commands.json
- docs/reports/evidence/VEL-INTEGRATION-0037/PR65-DISPOSITIONS.json
review:
  status: pending
  approved_by: null
  evidence: null
implementation_source_commit: 618c18070a2a006b492a383791787f62bd00516e
execution:
  status: completed
  executor: Codex
  model: GPT-6; exact build unavailable
  tests:
  - command: Verify10source hashes,exactbrowser,two-helper-literals,originaltestnames
      and unchangedCI/lock/package/legacyexample
    exit_code: 0
    status: PASS
    source_commit: 618c18070a2a006b492a383791787f62bd00516e
    evidence: docs/reports/evidence/VEL-INTEGRATION-0037/source-preservation.txt
  - command: corepack pnpm install --frozen-lockfile --offline
    status: PASS
    exit_code: 0
    source_commit: 618c18070a2a006b492a383791787f62bd00516e
    duration_seconds: 0.672
    evidence: docs/reports/evidence/VEL-INTEGRATION-0037/install.txt
  - command: corepack pnpm test:hosted-preflight
    status: PASS
    exit_code: 0
    source_commit: 618c18070a2a006b492a383791787f62bd00516e
    duration_seconds: 1.109
    evidence: docs/reports/evidence/VEL-INTEGRATION-0037/preflight23.txt
  - command: corepack pnpm test:library-isolation
    status: PASS
    exit_code: 0
    source_commit: 618c18070a2a006b492a383791787f62bd00516e
    duration_seconds: 1.782
    evidence: docs/reports/evidence/VEL-INTEGRATION-0037/library67.txt
  - command: corepack pnpm check
    status: PASS
    exit_code: 0
    source_commit: 618c18070a2a006b492a383791787f62bd00516e
    duration_seconds: 4.968
    evidence: docs/reports/evidence/VEL-INTEGRATION-0037/check.txt
  - command: corepack pnpm build
    status: PASS
    exit_code: 0
    source_commit: 618c18070a2a006b492a383791787f62bd00516e
    duration_seconds: 20.125
    evidence: docs/reports/evidence/VEL-INTEGRATION-0037/build.txt
  - command: python scripts/check_knowledge_metadata.py
    status: PASS
    exit_code: 0
    source_commit: 618c18070a2a006b492a383791787f62bd00516e
    duration_seconds: 0.266
    evidence: docs/reports/evidence/VEL-INTEGRATION-0037/metadata.txt
  - command: python scripts/check_implementation_readiness.py
    status: PASS
    exit_code: 0
    source_commit: 618c18070a2a006b492a383791787f62bd00516e
    duration_seconds: 0.156
    evidence: docs/reports/evidence/VEL-INTEGRATION-0037/readiness.txt
  - command: python scripts/spec_traceability.py validate
    status: PASS
    exit_code: 0
    source_commit: 618c18070a2a006b492a383791787f62bd00516e
    duration_seconds: 0.313
    evidence: docs/reports/evidence/VEL-INTEGRATION-0037/spec.txt
  - command: python scripts/agent_workflow.py validate
    status: PASS
    exit_code: 0
    source_commit: 618c18070a2a006b492a383791787f62bd00516e
    duration_seconds: 78.078
    evidence: docs/reports/evidence/VEL-INTEGRATION-0037/handoff.txt
owner_disposition: pending
---

# Offline setup reconciliation

## Work performed

Canonical offline setup guidance, two diagnostic corrections, original browser-source adoption and regression evidence.

## Facts and evidence

FACT:Task0037 and immutable CP0037 were committed before implementation. Tested source is 618c18070a2a006b492a383791787f62bd00516e. The interrupted verification process subsequently returned exit0; all ten recorded checks completed. Frozen offline install, 23 preflight tests, 67 Library tests, typechecks, builds, metadata, readiness, traceability and handoff validation passed. Commands, exits, durations and outputs are retained in commands.json and linked files. Full local governance was not rerun for this task; previous Task0036 results remain historical.

Regression-first dce8d65171f7d15f9f6c760d7b7be39a86e48209 produced 22 passing tests and one expected failure on misleading missing-file guidance. The fix replaces exactly two diagnostic literals with a real README anchor. No preflight validation logic changed. The README now provides all seven placeholder variables, correct package commands and explicit hosted authorization boundaries. No actual environment files were accessed or added.

The browser source is byte-identical to ChatGPT-authored PR65 source 604e1ebfd0baab930ee4dc39aecf7289dc64188a. Codex integrated it and did not author that original change. The ten-file source disposition and original hashes are recorded in VEL-INTEGRATION-0037-DISPOSITIONS.md and PR65-DISPOSITIONS.json. Existing CI, package/lockfile and legacy root example remain unchanged. Original ContextPacks and historical evidence are preserved.

## Interpretations

INTERPRETATION:The changes correct offline setup instructions without changing authentication, security or write-outcome semantics. Synthetic tests establish repository behavior, not hosted Supabase acceptance. Original PR65 can be superseded only after verified integration of this successor.

## Proposals

PROPOSAL:Obtain distinct trusted Codex review of the final evidence head, actual ready-state CI, delegated repository integration and successful post-main CI. Record exact review and run links in the PR evidence ledger after those operations occur. Close PR65 as superseded only afterward, retaining its branch and authorship. Reconcile CURRENT-STATE and the 44-item ledger in the bounded final reconciliation task.

## Risks
Independent review, final-head CI and merge are pending at this evidence commit. No human approval is fabricated: structured owner disposition remains pending, with any later integration governed separately by the recorded one-time owner delegation. No hosted access, SQL execution, private manuscripts, settings, paid services or new feature implementation occurred. Third-migration SQL remains planning-only; hosted acceptance and signed-out JWT risk remain external gates.

## Tests
All ten recorded commands completed with exit0 at the implementation source SHA; 23 preflight and 67 Library tests passed. The regression-before failure is retained separately.

## Artifacts
Task0037, immutable CP0037, this bundle, per-source disposition, original source hashes and command outputs are retained in the listed paths.

## Reviewer disposition
Pending distinct exact-head review and actual CI. Later external review/integration evidence will be linked in the PR ledger without rewriting this historical snapshot.
