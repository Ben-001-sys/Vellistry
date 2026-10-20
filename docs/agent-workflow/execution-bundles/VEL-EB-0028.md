---
id: VEL-EB-0028
title: 'Bounded correction amendment: align preflight parser/override checks with
  actual runtime'
type: execution-bundle
status: proposed-for-review
created_at: '2026-10-20'
version: 0.1.0
task_id: VEL-TASK-0028
context_pack_id: VEL-CP-0028
base_commit: c4a0a466c053f8552448b295021ca129edbf1cdb
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
- docs/agent-workflow/inputs/VEL-TASK-0028/OWNER-SCOPE.md
- docs/agent-workflow/inputs/VEL-TASK-0028/SOURCE-MAP.json
- docs/agent-workflow/inputs/VEL-TASK-0028/CORRECTION-SCOPE.md
- docs/agent-workflow/inputs/VEL-TASK-0028/PR92-P2-REVIEW.txt
- docs/agent-workflow/inputs/VEL-TASK-0028/PR92-REVIEW-COMMAND.json
evidence:
- docs/agent-workflow/inputs/VEL-TASK-0028/SOURCE-MAP.json
- docs/reports/evidence/VEL-INTEGRATION-0028/commands.json
review:
  status: pending
  approved_by: null
  evidence: null
implementation_source_commit: 0499c788f7d1ede25d935ee97066c9f953c618ad
execution:
  status: completed
  executor: Codex
  model: GPT-6; exact build unavailable
  tests:
  - command: Compare all selected predecessor Git blobs and source SHA256 map
    status: PASS
    exit_code: 0
    source_commit: 0499c788f7d1ede25d935ee97066c9f953c618ad
    evidence: docs/reports/evidence/VEL-INTEGRATION-0028/source-identity.txt
  - command: node --test tests/hosted_supabase_preflight.test.mjs
    status: PASS
    exit_code: 0
    source_commit: 0499c788f7d1ede25d935ee97066c9f953c618ad
    evidence: docs/reports/evidence/VEL-INTEGRATION-0028/preflight22.txt
  - command: python scripts/check_knowledge_metadata.py
    status: PASS
    exit_code: 0
    source_commit: 0499c788f7d1ede25d935ee97066c9f953c618ad
    evidence: docs/reports/evidence/VEL-INTEGRATION-0028/metadata.txt
    duration_seconds: 0.25
  - command: python scripts/check_implementation_readiness.py
    status: PASS
    exit_code: 0
    source_commit: 0499c788f7d1ede25d935ee97066c9f953c618ad
    evidence: docs/reports/evidence/VEL-INTEGRATION-0028/readiness.txt
    duration_seconds: 0.157
  - command: python scripts/spec_traceability.py validate
    status: PASS
    exit_code: 0
    source_commit: 0499c788f7d1ede25d935ee97066c9f953c618ad
    evidence: docs/reports/evidence/VEL-INTEGRATION-0028/spec.txt
    duration_seconds: 0.156
  - command: python scripts/agent_workflow.py validate
    status: PASS
    exit_code: 0
    source_commit: 0499c788f7d1ede25d935ee97066c9f953c618ad
    evidence: docs/reports/evidence/VEL-INTEGRATION-0028/handoff.txt
    duration_seconds: 47.406
  - command: corepack.cmd pnpm test:library-isolation
    status: PASS
    exit_code: 0
    duration_seconds: 2.968
    evidence: docs/reports/evidence/VEL-INTEGRATION-0028/library66.txt
  - command: corepack.cmd pnpm check
    status: PASS
    exit_code: 0
    duration_seconds: 10.266
    evidence: docs/reports/evidence/VEL-INTEGRATION-0028/check.txt
  - command: corepack.cmd pnpm build
    status: PASS
    exit_code: 0
    duration_seconds: 25.469
    evidence: docs/reports/evidence/VEL-INTEGRATION-0028/build.txt
owner_disposition: pending
---

# Current-main selective integration amendment

## Work performed
One-time owner delegation, 19 Oct 2026, remediation-only. Prepared unique VEL-TASK-0028/immutableCP on verifiedbase 8b2d36acb55f7346ae6eba72b1e7ff83b9f87ea5 after previousmainCI pass. Preserved104exact predecessor paths and corrected2 explicitlyauthorized parser/test paths from PR92 head71feb4a65fa159d79bc26d06f8d92b0e4a7412d4 only after newpack. Original Task/CP/EB/provenance and oldsourcebranches preserved; sharedper-PRmanifest refreshed, not oldpack.

## Facts and evidence
Source-map binds everyadopted Gitblob/SHA256; sourceidentity checks PASS at 0499c788f7d1ede25d935ee97066c9f953c618ad. Oldreport/permissions/results remain historical, notlatestauthority or fabricatedauthorship. Currentownerexception is merged docs/agent-workflow/authorizations/VEL-REM-INTEGRATION-20261019.yaml with exactmandatearchive. Bounded helper/test correction usesactualAPI-resolveddotenv.parse and rejectsDOTENV_KEY bypresence; regression-first22tests18PASS/4FAIL at27cd6f9, then22PASS at0499c78. No newfeature/hosted/SQL contentchange, securityCI weakening orpolicyupdate. Existing inheritedChatGPT/Cursororigin remains in predecessorrecords, never claimed newlyauthored byCodex.

## Interpretations
This is current-main integration, not wholesale stalebranchmerge or retroactiveapproval. Candidate implementationFORBIDDEN stays unchanged; actual merge will be a distinctowner-delegatedoperation only after finaltrustedreview/readyCI. Oldcoldstart/hosted/approvalgaps are not silently closed.

## Proposals
Genuinely separate trustedCodex source review atfinalhead and actualreadyPRCI, serialprovenance-preservingmerge, then mergedtree/postmergeCI verification before dependentintegration. Only then close predecessorPR92 as fullyadopted/superseded with exactlinks. Original sourcebranch retained. Reconcile finalstate/44ledger after actualadoptions.

## Tests
Actual sourceidentity/focused evidence/metadata/readiness/spec/handoff checks with commands/exits/sourceSHA retained in commands.json. Requiredtests all actualPASS0. Existing application/security/recovery suites run when applicable in ready/fullCI; finalhead/runs recorded externally afterlastcommit. No sourcehash/test result is owneridentity, humanreview, hosted acceptance or freshimplementationhandoff.

## Artifacts
NewTask/CP/EB, source-map/owner-scope, exactpredecessor original records/evidence, preservedprevious-mainmanifest andnewperPRevidencebinding. No lostsource or oldContextPackrewrite.

## Risks
No hosted/Auth/inventory/SQLexecution, realmanuscripts, paidcalls, settings ornewMVPfeatures. Prior evidence remains bounded/datable; finalindependentreview and readyCI must really execute. Git historicalpins need preservation; retain originalbranches and finaldependency recovery evidence. Defaultsecurity/privatepilot/release unchanged; ownerexception expiresprogramclosureorconservative2026-11-01.

## Reviewer disposition
Pending actualdistincttrustedreview/readyCI; structuredownerdisposition remains pending as CI requires. Currentdirectownerprogramauthority is separately documented, not a forged GitHubapproval. Actualmerges/postmerge results go to externalPR/Issue71 ledger; never guessed here.
