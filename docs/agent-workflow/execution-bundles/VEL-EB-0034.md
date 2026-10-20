---
id: VEL-EB-0034
title: Integrate factual LANG-P15 merged-presence correction with proposal boundaries
  intact
type: execution-bundle
status: proposed-for-review
created_at: '2026-10-20'
version: 0.1.0
task_id: VEL-TASK-0034
context_pack_id: VEL-CP-0034
base_commit: 61c0d5429c8a2f5ed522b3337632a8d436687ed2
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
- docs/agent-workflow/inputs/VEL-TASK-0034/OWNER-SCOPE.md
- docs/agent-workflow/inputs/VEL-TASK-0034/SOURCE-MAP.json
evidence:
- docs/agent-workflow/inputs/VEL-TASK-0034/SOURCE-MAP.json
- docs/reports/evidence/VEL-INTEGRATION-0034/commands.json
review:
  status: pending
  approved_by: null
  evidence: null
implementation_source_commit: 2f298b56b634f0185308ceb06b9d5409293bf8f6
execution:
  status: completed
  executor: Codex
  model: GPT-6; exact build unavailable
  tests:
  - command: Compare all selected predecessor Git blobs and source SHA256 map
    status: PASS
    exit_code: 0
    source_commit: 2f298b56b634f0185308ceb06b9d5409293bf8f6
    evidence: docs/reports/evidence/VEL-INTEGRATION-0034/source-identity.txt
  - command: Execute retained fenced Python in docs/reports/evidence/VEL-LANG-P15/REPRODUCE.md
    status: PASS
    exit_code: 0
    source_commit: 2f298b56b634f0185308ceb06b9d5409293bf8f6
    evidence: docs/reports/evidence/VEL-INTEGRATION-0034/focused.txt
  - command: python scripts/check_knowledge_metadata.py
    status: PASS
    exit_code: 0
    source_commit: 2f298b56b634f0185308ceb06b9d5409293bf8f6
    evidence: docs/reports/evidence/VEL-INTEGRATION-0034/metadata.txt
    duration_seconds: 0.187
  - command: python scripts/check_implementation_readiness.py
    status: PASS
    exit_code: 0
    source_commit: 2f298b56b634f0185308ceb06b9d5409293bf8f6
    evidence: docs/reports/evidence/VEL-INTEGRATION-0034/readiness.txt
    duration_seconds: 0.141
  - command: python scripts/spec_traceability.py validate
    status: PASS
    exit_code: 0
    source_commit: 2f298b56b634f0185308ceb06b9d5409293bf8f6
    evidence: docs/reports/evidence/VEL-INTEGRATION-0034/spec.txt
    duration_seconds: 0.172
  - command: python scripts/agent_workflow.py validate
    status: PASS
    exit_code: 0
    source_commit: 2f298b56b634f0185308ceb06b9d5409293bf8f6
    evidence: docs/reports/evidence/VEL-INTEGRATION-0034/handoff.txt
    duration_seconds: 57.078
owner_disposition: pending
---

# Current-main selective integration amendment

## Work performed
One-time owner delegation, 19 Oct 2026, remediation-only. Prepared unique VEL-TASK-0034/immutableCP on verifiedbase 9ca7fc90ee642ffcaed927ca1cc792bf47ad14f1 after previousmainCI pass. Adopted 15 exact source paths from PR89 head310f96c1bee28fd24999523ae32dacdda4d07b0e only after newpack. Original Task/CP/EB/provenance and oldsourcebranches preserved; sharedper-PRmanifest refreshed, not oldpack.

## Facts and evidence
Source-map binds everyadopted Gitblob/SHA256; sourceidentity checks PASS at 2f298b56b634f0185308ceb06b9d5409293bf8f6. Oldreport/permissions/results remain historical, notlatestauthority or fabricatedauthorship. Currentownerexception is merged docs/agent-workflow/authorizations/VEL-REM-INTEGRATION-20261019.yaml with exactmandatearchive. No newfeature/hosted/SQL contentchange, securityCI weakening orpolicyupdate. Existing inheritedChatGPT/Cursororigin remains in predecessorrecords, never claimed newlyauthored byCodex.

## Interpretations
This is current-main integration, not wholesale stalebranchmerge or retroactiveapproval. Candidate implementationFORBIDDEN stays unchanged; actual merge will be a distinctowner-delegatedoperation only after finaltrustedreview/readyCI. Oldcoldstart/hosted/approvalgaps are not silently closed.

## Proposals
Genuinely separate trustedCodex source review atfinalhead and actualreadyPRCI, serialprovenance-preservingmerge, then mergedtree/postmergeCI verification before dependentintegration. Only then close predecessorPR89 as fullyadopted/superseded with exactlinks. Original sourcebranch retained. Reconcile finalstate/44ledger after actualadoptions.

## Tests
Actual sourceidentity/focused evidence/metadata/readiness/spec/handoff checks with commands/exits/sourceSHA retained in commands.json. Requiredtests all actualPASS0. Existing application/security/recovery suites run when applicable in ready/fullCI; finalhead/runs recorded externally afterlastcommit. No sourcehash/test result is owneridentity, humanreview, hosted acceptance or freshimplementationhandoff.

## Artifacts
NewTask/CP/EB, source-map/owner-scope, exactpredecessor original records/evidence, preservedprevious-mainmanifest andnewperPRevidencebinding. No lostsource or oldContextPackrewrite.

## Risks
No hosted/Auth/inventory/SQLexecution, realmanuscripts, paidcalls, settings ornewMVPfeatures. Prior evidence remains bounded/datable; finalindependentreview and readyCI must really execute. Git historicalpins need preservation; retain originalbranches and finaldependency recovery evidence. Defaultsecurity/privatepilot/release unchanged; ownerexception expiresprogramclosureorconservative2026-11-01.

## Reviewer disposition
Pending actualdistincttrustedreview/readyCI; structuredownerdisposition remains pending as CI requires. Currentdirectownerprogramauthority is separately documented, not a forged GitHubapproval. Actualmerges/postmerge results go to externalPR/Issue71 ledger; never guessed here.
