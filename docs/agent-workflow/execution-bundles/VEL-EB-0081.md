---
id: VEL-EB-0081
title: Offline owner Auth tooling design and implementation contract
type: execution-bundle
status: proposed-for-review
created_at: '2026-11-19'
version: 0.1.0
task_id: VEL-TASK-0081
context_pack_id: VEL-CP-0081
base_commit: 30eadae5b41a271390ac21ecec0a43ec9f3b268f
agent:
  name: Codex
  model: Codex runtime model not independently reported
  runner: Windows isolated Task0081 documentation worktree
  role: primary bounded implementer
sources:
- docs/agent-workflow/inputs/VEL-TASK-0081/OWNER-SCOPE.md
- docs/agent-workflow/inputs/VEL-TASK-0081/CONTRACT.md
- docs/agent-workflow/inputs/VEL-TASK-0081/CANONICAL-CONTRACT.json
- docs/agent-workflow/inputs/VEL-TASK-0081/OWNER-G1-ACCEPTANCE.md
- docs/agent-workflow/inputs/VEL-TASK-0081/SOURCE-REFERENCES.json
evidence:
- docs/reports/VEL-OWNER-AUTH-RUNNER-CONTRACT-0081.md
- docs/reports/evidence/VEL-TASK-0081/summary.json
review:
  status: pending
  approved_by: null
  evidence: null
implementation_source_commit: 4aa118ec0cfd38020de12ffa033f6719967401e3
execution:
  status: completed
  executor: Codex
  model: Codex runtime model not independently reported
  tests:
  - command: node C:/Users/admin/AppData/Local/node/corepack/v1/pnpm/10.18.0/bin/pnpm.cjs
      install --frozen-lockfile --offline
    source_commit: 4aa118ec0cfd38020de12ffa033f6719967401e3
    status: PASS
    exit_code: 0
    evidence: docs/reports/evidence/VEL-TASK-0081/frozen81.txt
  - command: node C:/Users/admin/AppData/Local/node/corepack/v1/pnpm/10.18.0/bin/pnpm.cjs
      --filter @vellistry/api exec tsx --test src/modules/workspace/workspace-principal-adapter.spec.ts
    source_commit: 4aa118ec0cfd38020de12ffa033f6719967401e3
    status: PASS
    exit_code: 0
    evidence: docs/reports/evidence/VEL-TASK-0081/principal81.txt
  - command: node C:/Users/admin/AppData/Local/node/corepack/v1/pnpm/10.18.0/bin/pnpm.cjs
      test:auth-mfa
    source_commit: 4aa118ec0cfd38020de12ffa033f6719967401e3
    status: PASS
    exit_code: 0
    evidence: docs/reports/evidence/VEL-TASK-0081/mfa81.txt
  - command: node C:/Users/admin/AppData/Local/node/corepack/v1/pnpm/10.18.0/bin/pnpm.cjs
      test:library-isolation
    source_commit: 4aa118ec0cfd38020de12ffa033f6719967401e3
    status: PASS
    exit_code: 0
    evidence: docs/reports/evidence/VEL-TASK-0081/library81.txt
  - command: node C:/Users/admin/AppData/Local/node/corepack/v1/pnpm/10.18.0/bin/pnpm.cjs
      test:hosted-preflight
    source_commit: 4aa118ec0cfd38020de12ffa033f6719967401e3
    status: PASS
    exit_code: 0
    evidence: docs/reports/evidence/VEL-TASK-0081/preflight81.txt
  - command: node C:/Users/admin/AppData/Local/node/corepack/v1/pnpm/10.18.0/bin/pnpm.cjs
      test:workspace-contract
    source_commit: 4aa118ec0cfd38020de12ffa033f6719967401e3
    status: PASS
    exit_code: 0
    evidence: docs/reports/evidence/VEL-TASK-0081/workspace81.txt
  - command: node C:/Users/admin/AppData/Local/node/corepack/v1/pnpm/10.18.0/bin/pnpm.cjs
      --filter @vellistry/api exec tsx --test src/modules/workspace/workspace-contract.spec.ts
    source_commit: 4aa118ec0cfd38020de12ffa033f6719967401e3
    status: PASS
    exit_code: 0
    evidence: docs/reports/evidence/VEL-TASK-0081/units81.txt
  - command: node C:/Users/admin/AppData/Local/node/corepack/v1/pnpm/10.18.0/bin/pnpm.cjs
      check
    source_commit: 4aa118ec0cfd38020de12ffa033f6719967401e3
    status: PASS
    exit_code: 0
    evidence: docs/reports/evidence/VEL-TASK-0081/check81.txt
  - command: node C:/Users/admin/AppData/Local/node/corepack/v1/pnpm/10.18.0/bin/pnpm.cjs
      build
    source_commit: 4aa118ec0cfd38020de12ffa033f6719967401e3
    status: PASS
    exit_code: 0
    evidence: docs/reports/evidence/VEL-TASK-0081/build81-retry.txt
  - command: python .submission/spec81-assertions.py
    source_commit: 4aa118ec0cfd38020de12ffa033f6719967401e3
    status: PASS
    exit_code: 0
    evidence: docs/reports/evidence/VEL-TASK-0081/spec81-results.json
  - command: python -m unittest discover -s tests -p test_governance_entrypoints.py
      -v
    source_commit: 4aa118ec0cfd38020de12ffa033f6719967401e3
    status: PASS
    exit_code: 0
    evidence: docs/reports/evidence/VEL-TASK-0081/entrypoints81.txt
  - command: python -m unittest discover -s tests -p test_research_design_gate.py
      -v
    source_commit: 4aa118ec0cfd38020de12ffa033f6719967401e3
    status: PASS
    exit_code: 0
    evidence: docs/reports/evidence/VEL-TASK-0081/research81.txt
  - command: python scripts/check_knowledge_metadata.py
    source_commit: 4aa118ec0cfd38020de12ffa033f6719967401e3
    status: PASS
    exit_code: 0
    evidence: docs/reports/evidence/VEL-TASK-0081/metadata81.txt
  - command: python scripts/check_implementation_readiness.py
    source_commit: 4aa118ec0cfd38020de12ffa033f6719967401e3
    status: PASS
    exit_code: 0
    evidence: docs/reports/evidence/VEL-TASK-0081/readiness81.txt
  - command: python scripts/spec_traceability.py validate
    source_commit: 4aa118ec0cfd38020de12ffa033f6719967401e3
    status: PASS
    exit_code: 0
    evidence: docs/reports/evidence/VEL-TASK-0081/trace81.txt
---

# Offline tooling preparation

## Work performed
FACT: owner expressly dispatched Task0081 for documentation/design only. Unique across78worktrees/230refs, registry/history/reservations; isolated exactmaine0468ed. Initial preparation2db8130 and failed uncommitted pack preserved; corrected preparation30eadae and validated committed immutableCP1eec3c9 precede operative docs4aa118e. Four new design/specification artifacts plus bounded current-state checkpoint; no executable/Auth/test/CI/dependency/SQL/policy change.

## Facts and evidence
Eight boundaries each specify inputs/outputs, decision ownership, errors/stop, cleanup and trust. Exact0063origin/E1-E5/method/path/query/operation limits,7run keys/3labels/27fields/enums preserved. Conservative30measurement+2cleanupslots and240measurement+60cleanup/teardown seconds stay inside32requests/15seconds/request/300seconds/run. No shared/cached-token or factor/crypto/session inference, no raw output. Ten one-to-one OR specifications include exacttestnames, components, syntheticfixtures, positives/negatives, required evidence and PASS/FAIL/BLOCKED rules; every executionNOT_RUN. G2exactcode checklist and six UNKNOWN nonsecret G3conditions remainBLOCKED. Nine exact future paths are proposalonly and absent from Git; no livebootstrap/CLI authorized.

Original0063 outer export packaging is unspecified: proposed in-memory pair RunRecord/CaseRecordSet does not add a cases field; exact future renderer needs G2ownerreview before liveoutput. FrozenSDKactualbranch evidence is required, fake events cannot substitute; unsupported coverageBLOCKED. Proxy/executable-object handling explicitly limited. Proposed implementation may exercise no-network components only after new ownerTask/pack; no implementation authority here.

G1acceptedexternally19November for13November self-attestation only; old0080pendingJSON andUNKNOWNsources unchanged. Source hashes prove bytes, not independently authenticated owner or hostedstate. Initial comment newline normalization preserves sourceURL/rawbodyhash and originalfailedpreparation; not retroactive history mutation.

## Interpretations
An implementation-ready offline contract is not OR runtime acceptance, an exact future executable approval or hosted readiness. Document consistency and existing CI do not satisfy G2-G4 or production session/transaction trust. Explicit remaining packaging/SDK-body/branch proof items must be reviewed with actual future sources, not inferred from these docs.

## Proposals
Owner reviews this unmerged design PR. A later separately authorized Task may implement only the exact proposed no-network component/spec paths with injected synthetic inputs, pinnedSDK and denied ambientI/O. Any executable/livebootstrap/outputpackaging or hostedpermission requires exact new review/ownerdecision. No successor Task allocated/dispatched; G3answers not invented.

## Tests
At fixed operative source: frozen offline install via existingcachedpnpm10.18.0 PASS;52principal/55MFA/81Library/23preflight/101workspace/21persistence units/typecheckPASS. Initial buildFAIL on Nextsecurity notice, unchanged retryPASS; advisory remains unresolved and no upgrade performed.35source/specification assertions incl12negative documentmutationsPASS;17sourcepins, full-renderCP, oldrecords/protocol and all9futurepathsabsence checked.8entrypoint/16research-design,metadata/readiness/traceabilityPASS. These are document/existingregression checks, NOT OR01-OR10execution. Commands/exits/source/logs in summary; failures in HISTORICAL-ATTEMPTS.

Actual completed-head review and Draft/Ready fullCI required after thisEB creation. Fullgovernance,Chromium41,PG16recovery12,PG17 32+16+8HTTP/restartcleanup andfinalgate must really run; no result assumed from prior main44492467128. Final actual head/tree/reviews/CI appendedexternally toavoid circularSHA.

## Artifacts
Task/CP/EB0081, owner/accepted-G1/canonical-contract/hash/uniqueness/failure inputs, architectureJSON/report, ORmatrix/G2G3checklist, source-bound test/evidence logs and per-commit manifest. Initial failed pack archive/scratch files/caches excluded from source. No credentials/raw Auth/private data or executable probe.

## Risks
Known Nextsecurity build notice remains a separate dependency-remediation concern; successful retry is not a fix, no unauthorized upgrade. Initial packFAIL, rejected OScommand, broken globalCorepackFAIL and harnessNameError preserved. Earlier Task77-80failures/cancellations/skips/reviewlimitations unchanged. G2-G4/N12/historicalruntimeBLOCKED; allOR01-10/R01-08/3hostedcasesNOT_RUN;legacyprivilegesSKIPPED. PRINCIPALtarget/SESSION/revocation/transaction/GATEWAY/TRANSPORT/PACKAGING/RECONCILIATION/hosted/pilot/release pending. Issues108/131OPEN;remediationEXPIRED.

## Reviewer disposition
Owner pending. Distinct completed-head review and actual fullReadyCI required; supplied-source analysis cannot be independent runtime/hash/owner authentication. No merge, deployment, liveAuth, ORexecution, branchdeletion or successor work. Final reviewer findings and CI outcomes appended to PR ledger.
