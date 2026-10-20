---
id: VEL-EB-0036
title: Correct rejected-session copy with source-backed uncertainty regression
type: execution-bundle
status: proposed-for-review
created_at: '2026-10-20'
version: 0.1.0
task_id: VEL-TASK-0036
context_pack_id: VEL-CP-0036
base_commit: 73375db5159cc551df64fb74d7fc67192aebf8f7
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
- docs/agent-workflow/inputs/VEL-TASK-0036/OWNER-SCOPE.md
- docs/agent-workflow/inputs/VEL-TASK-0036/SOURCE-MAP.json
- docs/agent-workflow/inputs/VEL-TASK-0036/CORRECTION-PLAN.json
- docs/agent-workflow/inputs/VEL-TASK-0036/PR100-independent-review.txt
- docs/agent-workflow/inputs/VEL-TASK-0036/PR100-review-command.json
- apps/web/src/lib/library/book-create-document.ts
- apps/web/src/lib/library/book-library-session.ts
- apps/web/src/app/api/books/route.ts
- docs/agent-workflow/inputs/VEL-TASK-0036/EXISTING-TEST-EXCERPTS.md
evidence:
- docs/agent-workflow/inputs/VEL-TASK-0036/SOURCE-MAP.json
- docs/reports/evidence/VEL-INTEGRATION-0036/commands.json
review:
  status: pending
  approved_by: null
  evidence: null
implementation_source_commit: 3a17ee854bf3f8cad710f91d6f470e7fa18f45af
execution:
  status: completed
  executor: Codex
  model: GPT-6; exact build unavailable
  tests:
  - command: Run fenced Python in docs/reports/evidence/VEL-LANG-DECISIONS/REPRODUCE.md
    status: PASS
    exit_code: 0
    source_commit: 3a17ee854bf3f8cad710f91d6f470e7fa18f45af
    evidence: docs/reports/evidence/VEL-INTEGRATION-0036/original-matrix.txt
  - command: Run fenced Python in docs/reports/evidence/VEL-LANGUAGE-DISPOSITIONS-2026-10-20/REPRODUCE.md
    status: PASS
    exit_code: 0
    source_commit: 3a17ee854bf3f8cad710f91d6f470e7fa18f45af
    evidence: docs/reports/evidence/VEL-INTEGRATION-0036/current-matrix.txt
  - command: corepack pnpm install --frozen-lockfile --offline
    status: PASS
    exit_code: 0
    source_commit: 3a17ee854bf3f8cad710f91d6f470e7fa18f45af
    duration_seconds: 0.844
    evidence: docs/reports/evidence/VEL-INTEGRATION-0036/frozen-install.txt
  - command: corepack pnpm test:library-isolation
    status: PASS
    exit_code: 0
    source_commit: 3a17ee854bf3f8cad710f91d6f470e7fa18f45af
    duration_seconds: 2.328
    evidence: docs/reports/evidence/VEL-INTEGRATION-0036/library67.txt
  - command: corepack pnpm test:hosted-preflight
    status: PASS
    exit_code: 0
    source_commit: 3a17ee854bf3f8cad710f91d6f470e7fa18f45af
    duration_seconds: 1.656
    evidence: docs/reports/evidence/VEL-INTEGRATION-0036/preflight22.txt
  - command: corepack pnpm check
    status: PASS
    exit_code: 0
    source_commit: 3a17ee854bf3f8cad710f91d6f470e7fa18f45af
    duration_seconds: 7.563
    evidence: docs/reports/evidence/VEL-INTEGRATION-0036/check.txt
  - command: corepack pnpm build
    status: PASS
    exit_code: 0
    source_commit: 3a17ee854bf3f8cad710f91d6f470e7fa18f45af
    duration_seconds: 25.937
    evidence: docs/reports/evidence/VEL-INTEGRATION-0036/build.txt
  - command: python scripts/check_knowledge_metadata.py
    status: PASS
    exit_code: 0
    source_commit: 3a17ee854bf3f8cad710f91d6f470e7fa18f45af
    duration_seconds: 0.281
    evidence: docs/reports/evidence/VEL-INTEGRATION-0036/metadata.txt
  - command: python scripts/check_implementation_readiness.py
    status: PASS
    exit_code: 0
    source_commit: 3a17ee854bf3f8cad710f91d6f470e7fa18f45af
    duration_seconds: 0.188
    evidence: docs/reports/evidence/VEL-INTEGRATION-0036/readiness.txt
  - command: python scripts/spec_traceability.py validate
    status: PASS
    exit_code: 0
    source_commit: 3a17ee854bf3f8cad710f91d6f470e7fa18f45af
    duration_seconds: 0.187
    evidence: docs/reports/evidence/VEL-INTEGRATION-0036/spec.txt
  - command: python scripts/agent_workflow.py validate
    status: PASS
    exit_code: 0
    source_commit: 3a17ee854bf3f8cad710f91d6f470e7fa18f45af
    duration_seconds: 84.844
    evidence: docs/reports/evidence/VEL-INTEGRATION-0036/handoff.txt
  - command: python scripts/ci_governance.py
    status: PASS
    exit_code: 0
    source_commit: 3a17ee854bf3f8cad710f91d6f470e7fa18f45af
    duration_seconds: 531.313
    evidence: docs/reports/evidence/VEL-INTEGRATION-0036/governance.txt
owner_disposition: pending
---

# Current-main selective integration amendment

## Work performed
One-time owner delegation, 19 Oct 2026, remediation-only. Prepared unique VEL-TASK-0036/immutableCP on verifiedbase 326f5e4c385644f864348d008c46c1aa54c7b616 after previousmainCI pass. Adopted 54 exact source paths and4explicitly corrected current paths from PR100 head49cf6f88316831ccff12fae869baf00a09e6c8d8 only after newpack. Original Task/CP/EB/provenance and oldsourcebranches preserved; sharedper-PRmanifest refreshed, not oldpack.

## Facts and evidence
Source-map binds original predecessor Gitblob/SHA256;54unchanged paths and the approved single-literal correction checks PASS at 3a17ee854bf3f8cad710f91d6f470e7fa18f45af. Oldreport/permissions/results remain historical, notlatestauthority or fabricatedauthorship. Currentownerexception is merged docs/agent-workflow/authorizations/VEL-REM-INTEGRATION-20261019.yaml with exactmandatearchive. The only runtime-source correction is one status literal; a new semantic session regression distinguishes pre-forward rejection from dispatched unknown outcomes. No state/control/security logic changed. No newfeature/hosted/SQL contentchange, securityCI weakening orpolicyupdate. Existing inheritedChatGPT/Cursororigin remains in predecessorrecords, never claimed newlyauthored byCodex.

## Interpretations
This is current-main integration, not wholesale stalebranchmerge or retroactiveapproval. Candidate implementationFORBIDDEN stays unchanged; actual merge will be a distinctowner-delegatedoperation only after finaltrustedreview/readyCI. Oldcoldstart/hosted/approvalgaps are not silently closed.

## Proposals
Genuinely separate trustedCodex source review atfinalhead and actualreadyPRCI, serialprovenance-preservingmerge, then mergedtree/postmergeCI verification before dependentintegration. Only then close predecessorPR100 as fullyadopted/superseded with exactlinks. Original sourcebranch retained. Reconcile finalstate/44ledger after actualadoptions.

## Tests
Actual sourceidentity/focused evidence/metadata/readiness/spec/handoff checks with commands/exits/sourceSHA retained in commands.json. Requiredtests all actualPASS0. Existing application/security/recovery suites run when applicable in ready/fullCI; finalhead/runs recorded externally afterlastcommit. No sourcehash/test result is owneridentity, humanreview, hosted acceptance or freshimplementationhandoff.

## Artifacts
NewTask/CP/EB, source-map/owner-scope, exactpredecessor original records/evidence, preservedprevious-mainmanifest andnewperPRevidencebinding. No lostsource or oldContextPackrewrite.

## Risks
No hosted/Auth/inventory/SQLexecution, realmanuscripts, paidcalls, settings ornewMVPfeatures. Prior evidence remains bounded/datable; finalindependentreview and readyCI must really execute. Git historicalpins need preservation; retain originalbranches and finaldependency recovery evidence. Defaultsecurity/privatepilot/release unchanged; ownerexception expiresprogramclosureorconservative2026-11-01.

## Reviewer disposition
Pending actualdistincttrustedreview/readyCI; structuredownerdisposition remains pending as CI requires. Currentdirectownerprogramauthority is separately documented, not a forged GitHubapproval. Actualmerges/postmerge results go to externalPR/Issue71 ledger; never guessed here.

## Demonstrated review correction and actual tests
FACT: PR100 exact49cf6f88316831ccff12fae869baf00a09e6c8d8 received separate trusted review01a159f6-1541-7a61-bae0-763daaccc0e9, which identified a genuineP2. Its review exit0 was not approval; reviewer tests were blocked by spawnEPERM. The erroneous Task35 exact plan described an unforwarded identity-mismatch409 as possibly completed. This new Task/CP36 is a bounded amendment, preserving old35Task/CP/inputs/EB and failed review as history.

Regression-before at a552b3cbf42f363fa83e4787bcc90b0991cfb162:67tests,66PASS/1FAIL exit1 specifically on misleading status. The log includes pnpm's trailing tsx diagnostic after the actual failed assertion; this is not a zero-test infrastructure failure. Corrected source3a17ee854bf3f8cad710f91d6f470e7fa18f45af:67/67Library and22/22preflight PASS0, typecheck and bothbuilds PASS0; commands.json binds exact outputs/exits. The new test also proves zero forwarded writes on mismatch, retained draft, no uncertainty/risk retry for rejection; dispatched acknowledgement_unknown retains uncertainty, draft, risk retry and prevents ordinary duplicate submission. Existing session/control/request code is unchanged.

Original source reassembly95391bytes/SHA256 and1positive7negative oldmatrix PASS; current15rows/1positive8negative plus2control-flow/lock mutations rejected. Only Task36CORRECTION-PLAN overrides the one erroneous historical literal in current replay. All other six existing-copy replacements and original language/provenance/approval rows remain preserved. The metadata/readiness/spec/handoff/fullgovernance results are actual, not hosted or author UX acceptance.

INTERPRETATION: Definite rejected requests should not suggest possible completion. Lost acknowledgements after dispatch remain unknown and must not silently become definite failures. No change to either runtime classification was needed.

PROPOSAL: After genuinely separate final-head source review and real ready/full CI, merge this successor and verify post-main before closing PR100 and original88 as superseded unmerged, retaining source branches. Historical35evidence is not final readiness. Rollback is a source revert only; no database operation.

Full Windows governance completed exit0 in531.313seconds:248root tests plus139experiment/archive tests=387PASS. This includes compliance/CI-policy negative suites, archive17, metadata/readiness/spec, pinned pack validation and packet exporters. No SQL/hosted acceptance is inferred. Original initial Corepack restricted-network attempt failed before install; escalated pinned offline install reused176lockedpackages and completed usingpnpm10.18.0, followed by a recorded successful frozen repeat. One pre-adoption validator overlapped source adoption and reported a transient EB0023mismatch; the subsequent stable source validator and fullgovernance both passed. No test assertion or pack rule was weakened.
