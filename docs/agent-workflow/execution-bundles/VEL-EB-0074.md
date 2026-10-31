---
id: VEL-EB-0074
title: IMP003C editor save recovery composition and real HTTP interruption
type: execution-bundle
status: proposed-for-review
created_at: '2026-10-31'
version: 0.1.0
task_id: VEL-TASK-0074
context_pack_id: VEL-CP-0074
base_commit: 5ae55a308e8550a7412e11fc4b4c4cd431243f19
agent:
  name: Codex
  model: Codex runtime model not independently reported
  runner: Windows isolated worktree
  role: primary bounded implementer
sources:
- docs/agent-workflow/inputs/VEL-TASK-0074/OWNER-SCOPE.md
- docs/agent-workflow/inputs/VEL-TASK-0074/CONTRACT.md
- docs/agent-workflow/inputs/VEL-TASK-0074/SOURCE-REFERENCES.json
evidence:
- docs/reports/VEL-IMP003C-COMPOSITION-0074.md
- docs/reports/evidence/VEL-TASK-0074/summary.json
review:
  status: pending
  approved_by: null
  evidence: null
implementation_source_commit: 44fb62768cb1adc88087d83b69369bc7acb1ba1b
execution:
  status: completed
  executor: Codex
  model: Codex runtime model not independently reported
  tests:
  - command: corepack.cmd pnpm check
    source_commit: 44fb62768cb1adc88087d83b69369bc7acb1ba1b
    status: PASS
    exit_code: 0
    evidence: docs/reports/evidence/VEL-TASK-0074/check.txt
  - command: corepack.cmd pnpm build
    source_commit: 44fb62768cb1adc88087d83b69369bc7acb1ba1b
    status: PASS
    exit_code: 0
    evidence: docs/reports/evidence/VEL-TASK-0074/build.txt
  - command: corepack.cmd pnpm test:workspace-contract
    source_commit: 44fb62768cb1adc88087d83b69369bc7acb1ba1b
    status: PASS
    exit_code: 0
    evidence: docs/reports/evidence/VEL-TASK-0074/workspace.txt
  - command: corepack.cmd pnpm test:library-isolation
    source_commit: 44fb62768cb1adc88087d83b69369bc7acb1ba1b
    status: PASS
    exit_code: 0
    evidence: docs/reports/evidence/VEL-TASK-0074/library.txt
  - command: corepack.cmd pnpm test:auth-mfa
    source_commit: 44fb62768cb1adc88087d83b69369bc7acb1ba1b
    status: PASS
    exit_code: 0
    evidence: docs/reports/evidence/VEL-TASK-0074/mfa.txt
  - command: corepack.cmd pnpm test:hosted-preflight
    source_commit: 44fb62768cb1adc88087d83b69369bc7acb1ba1b
    status: PASS
    exit_code: 0
    evidence: docs/reports/evidence/VEL-TASK-0074/preflight.txt
  - command: corepack.cmd pnpm --filter @vellistry/api exec tsx --test src/modules/workspace/workspace-contract.spec.ts
    source_commit: 44fb62768cb1adc88087d83b69369bc7acb1ba1b
    status: PASS
    exit_code: 0
    evidence: docs/reports/evidence/VEL-TASK-0074/persistence-units.txt
  - command: corepack.cmd pnpm --filter @vellistry/api exec tsx --test src/modules/workspace/workspace-principal-adapter.spec.ts
    source_commit: 44fb62768cb1adc88087d83b69369bc7acb1ba1b
    status: PASS
    exit_code: 0
    evidence: docs/reports/evidence/VEL-TASK-0074/principal.txt
  - command: python scripts/check_knowledge_metadata.py
    status: PASS
    exit_code: 0
    evidence: docs/reports/evidence/VEL-TASK-0074/metadata.txt
    source_commit: 44fb62768cb1adc88087d83b69369bc7acb1ba1b
  - command: python scripts/check_implementation_readiness.py
    status: PASS
    exit_code: 0
    evidence: docs/reports/evidence/VEL-TASK-0074/readiness.txt
    source_commit: 44fb62768cb1adc88087d83b69369bc7acb1ba1b
  - command: python scripts/spec_traceability.py validate
    status: PASS
    exit_code: 0
    evidence: docs/reports/evidence/VEL-TASK-0074/traceability.txt
    source_commit: 44fb62768cb1adc88087d83b69369bc7acb1ba1b
  - command: python tests/workspace/persistence/run_pg17.py --disposable --cases docs/contracts/VEL-IMP002-PERSISTENCE-CASES.json
    source_commit: 44fb62768cb1adc88087d83b69369bc7acb1ba1b
    status: PASS
    exit_code: 0
    evidence: docs/reports/evidence/VEL-TASK-0074/ffc905a81bce4294bbdc4fe86d3c4b3a-runtime.json
---

# IMP003C local composition evidence

## Work performed
FACT: approved base e83022bf1f71746482bed832a894cdfac6dcc500 integrates PR133 with post-main41193526527 SUCCESS. Unique Task0074 and governing inputs committed5ae55a3; validated immutable CP37334da precedes all operative code. No Task0071/CP0071/EB0071 evidence changed.

Reusable unregistered controller composes existing ManuscriptSession/ManuscriptEditor, strict document/SaveOperation contracts and DraftRecovery through injected scope-bound transport and synthetic storage. It checks owner/generation after reads and both successful AND rejected save/lookup promises. Pending saves capture immutable documents/IDs/expected revision; later typing remains separate. Unknown states retain original IDs; lookup does not mutate. Recovery candidates require explicit choice, partition author/book/chapter/client and do not overwrite accepted server content. No device storage or production adapter/route.

The test-only React preview renders actual Tiptap, save/result/recover controls and polite status announcements with test-only wording. Eleven DOM tests cover real editor transactions, visible states, delayed typing/caret/Undo, chapter selection, conflicts/rejections, before/after transport failures, repeated recovery, account switching and async disposal. This is jsdom, not a new native-browser keyboard or assistive-technology acceptance run.

## Facts and evidence
All commands/exits/source pins in EB metadata and raw text evidence. At source44fb627, check/build,92workspace-editor,81Library,55MFA,23offlinepreflight,21persistence units,52principal PASS. Frozen install used pnpm10.18.0 and existing lock; no dependency changes. Metadata/readiness/traceability PASS.

Actual PG17.11 runner:8new HTTP cases,16unchanged manuscript cases,real owned-container restart/reopen,32existing persistence cases PASS; container and volume verified absent. HTTP server bound127.0.0.1:ephemeral, closed listener and zero owned sockets. Server performed private SQL transaction COMMIT then destroyed actual response socket; composition retained unknown/original ID; lookup found committed receipt without duplicate revision. Actual client abort after commit cannot resurrect previous author; delayed response cannot resurrect old chapter. Before-commit injected SQL fault rolls back, but missing receipt remains unknown to client. Competing committed edit yields conflict. Forged owner body/foreign read denied. Split UTF8 request bytes and a large Unicode response preserve exact prose. SQL fixtures unchanged; Task0071 SQL approval was not reused or extended.

## Interpretations
UI memory transport is synthetic; HTTP/PG evidence is actual socket interruption backed by disposable committed rows. Neither establishes production Auth, session revocation, hosted acceptance or browser/device durability. Capture/transport composition remains unregistered. Input capability->principal mapping is explicitly synthetic and never a proposed production Auth replacement. Before-commit rollback is server-side test evidence; receipt absence is not a safe client retry signal.

Initial distinct source review found oneP2: rejected transport promises bypassed owner revalidation. Two new DOM regressions reproduced it (90/92PASS before,92/92after); catch path now rechecks owner before settling/publishing. Initial reviewer runtime was BLOCKED by spawnEPERM, not PASS. Final completed-head review is external evidence after the final commit exists.

## Proposals
Owner separately decides integration after exact-head review and actual ReadyCI. No successor or merge authority follows. Production principal/session/gateway/transport/packaging/security decisions remain separate.

## Tests
Raw logs preserve initial type-fixture and Undo failures, review before/after regression and all actual runtime outputs. Exploratory first runtime captures are historical uncommitted-tree observations, not final source evidence. Final runtime ffc905a81bce4294bbdc4fe86d3c4b3a pins committed44fb627. Full governance/current+archived/security/recovery is required in Draft/ReadyCI; no local full-suitePASS claimed. All previous Task0071 failures remain untouched.

## Acceptance mapping
SC003/004 and ACC-M3-01/02: durable test receipt, real socket/abort failures, no false Saved and retained unknown identity. SC005: competing HTTP/PG revision conflict, newer typing preserved. SC006/007 and M8: owner/generation suppression, foreign read/forged owner denial, per-author/book/chapter/client recovery. JRN001-003: bounded editor/save/recovery composition only, not production journey completion. Proposed source acceptance remains proposed.

## Artifacts
Task0074, CP0074, EB0074, controller/preview, synthetic adapter, DOM and HTTP tests, unchanged-SQL runner extension, current-state preamble, exact source/failure/runtime evidence and per-commit provenance.

## Risks
No production editor/save route, hosted Supabase/Auth/MFA/SQL, operative RLS/grant change, real manuscripts, persistent browser storage, dependency/CI-policy change, paid call, deployment or merge. PRINCIPAL/SESSION/GATEWAY/TRANSPORT/PACKAGING/hosted acceptance unresolved. R01-R08 NOT_RUN; N12/historical spawnEPERM BLOCKED. Issues108/131 OPEN; remediation delegation EXPIRED.

## Reviewer disposition
Pending distinct completed-head source review, exact-head Draft/ReadyCI and separate owner merge. Agent does not self-promote owner acceptance.
