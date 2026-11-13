---
id: VEL-EB-0079
title: Attributed new-main PRINCIPAL SESSION readiness adoption
type: execution-bundle
status: proposed-for-review
created_at: '2026-11-13'
version: 0.1.0
task_id: VEL-TASK-0079
context_pack_id: VEL-CP-0079
base_commit: 2b5931b51f64da76870b89ac4e711d960c427594
agent:
  name: Codex
  model: Codex runtime model not independently reported
  runner: Windows isolated Task0079 documentation worktree
  role: primary bounded implementer
sources:
- docs/agent-workflow/inputs/VEL-TASK-0079/OWNER-SCOPE.md
- docs/agent-workflow/inputs/VEL-TASK-0079/CONTRACT.md
- docs/agent-workflow/inputs/VEL-TASK-0079/SOURCE-REFERENCES.json
- docs/agent-workflow/inputs/VEL-TASK-0079/SOURCE-MATRIX.json
- docs/agent-workflow/inputs/VEL-TASK-0079/SOURCE-REPORT.md
evidence:
- docs/reports/VEL-PRINCIPAL-SESSION-NEW-MAIN-0079.md
- docs\reports\evidence\VEL-TASK-0079\summary.json
review:
  status: pending
  approved_by: null
  evidence: null
implementation_source_commit: cc8868cc515ce93c83e8161e5ab1ddef0e3e479f
execution:
  status: completed
  executor: Codex
  model: Codex runtime model not independently reported
  tests:
  - command: corepack pnpm --filter @vellistry/api exec tsx --test src/modules/workspace/workspace-principal-adapter.spec.ts
    source_commit: c5f324e78d05f2f9afde91e6f58970de021fffb6
    exit_code: 0
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0079/principal79.txt
  - command: corepack pnpm test:auth-mfa
    source_commit: c5f324e78d05f2f9afde91e6f58970de021fffb6
    exit_code: 0
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0079/mfa79.txt
  - command: corepack pnpm test:library-isolation
    source_commit: c5f324e78d05f2f9afde91e6f58970de021fffb6
    exit_code: 0
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0079/library79.txt
  - command: corepack pnpm test:hosted-preflight
    source_commit: c5f324e78d05f2f9afde91e6f58970de021fffb6
    exit_code: 0
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0079/preflight79.txt
  - command: corepack pnpm test:workspace-contract
    source_commit: 2b5931b51f64da76870b89ac4e711d960c427594
    exit_code: 0
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0079/workspace79.txt
  - command: corepack pnpm --filter @vellistry/api exec tsx --test src/modules/workspace/workspace-contract.spec.ts
    source_commit: 2b5931b51f64da76870b89ac4e711d960c427594
    exit_code: 0
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0079/units79.txt
  - command: corepack pnpm check
    source_commit: 2b5931b51f64da76870b89ac4e711d960c427594
    exit_code: 0
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0079/check79.txt
  - command: corepack pnpm build
    source_commit: e0d2865f5625385ab7e9f3badb01d3d85abd4f0d
    exit_code: 0
    status: PASS
    evidence: docs/reports/evidence/VEL-TASK-0079/build79.txt
  - command: python .submission/document-assertions79.py
    source_commit: cc8868cc515ce93c83e8161e5ab1ddef0e3e479f
    status: PASS
    exit_code: 0
    evidence: docs/reports/evidence/VEL-TASK-0079/document-assertions79.json
  - command: python scripts/check_knowledge_metadata.py
    source_commit: cc8868cc515ce93c83e8161e5ab1ddef0e3e479f
    status: PASS
    exit_code: 0
    evidence: docs/reports/evidence/VEL-TASK-0079/metadata79.txt
  - command: python scripts/check_implementation_readiness.py
    source_commit: cc8868cc515ce93c83e8161e5ab1ddef0e3e479f
    status: PASS
    exit_code: 0
    evidence: docs/reports/evidence/VEL-TASK-0079/readiness79.txt
  - command: python scripts/spec_traceability.py validate
    source_commit: cc8868cc515ce93c83e8161e5ab1ddef0e3e479f
    status: PASS
    exit_code: 0
    evidence: docs/reports/evidence/VEL-TASK-0079/trace79.txt
---

# New-main readiness adoption

## Work performed
FACT: owner dispatched Task0079 with linked relay6849146195. Verified main c5f324e and original PR137 Draft34048b2. Unique Task/input2b5931b and fully rendered committed CP e0d2865 precede implementation1811a99 and bounded state correctioncc8868c. New named report/matrix reconstruct original conclusions; exact original report/matrix and all28source blob/SHA256 pins retained as immutable inputs. No old task/pack/EB/PR rewritten, cherry-picked or reinterpreted. New commits declare original Codex reconstruction, never false patch-identical adopted origins.

## Facts and evidence
The new matrix differs only in packet id/date/base/authorization and explicit adoption metadata. All protocol0063/endpoints/closed fields/time/request limits, fixtures/gates/PRINCIPAL/SESSION/OR rows and security statuses are equal to original values. Fixture reconciliation dates remain historical, owner confirmation null; no target findings. Original local PostgREST old-bearer finding remains local residual access, not hosted/cross-author/production session acceptance. Exact original report/source references preserve authorship and historical test status.

All application/test/script/CI/SQL/dependency sources match verified main. PR138 repair and all12original cases remain; mandatoryChromium41 and PG17 suites unchanged. Local regression source heads span base/preparation/pack commits while only documentation changed; source_identity in summary pins each unchanged application blob. This is legitimate reuse of actual newly run application checks, not document assertions at the older source. Document assertions bind current operative source directly. No production runner, guard, Auth implementation or sanitizer added.

## Interpretations
Structural compliance and passing regressions establish lineage/document consistency; they do not establish hosted fixtures, factor completeness, issuer/key assurance, revocation or atomic writable-session authority. New reconstruction preserves conclusions without pretending different Git patches are identical. Original-source copied snapshots are historical quoted evidence, not independent new observations.

## Proposals
Owner separately considers this new unmerged PR and eventual original PR137 disposition. Smallest separate evidence step: dated non-secret3YES/NO/UNKNOWN confirmations from trustworthy existing records only. Any inspection/provisioning/owner-only tooling/network/production decision requires separate scope and immutable sources. No merge or successor authority.

## Tests
Frozen offline install PASS; pinned pnpm10.18.0 corrected nested PATH mismatch without dependency edits.52principal,55MFA,81Library,23preflight,101workspace/editor,21persistence units, build/typecheck PASS, exits0.18source/document assertions including exact28original-source pins, semantic matrix/protocol equality and full-render CP PASS at operative source. Metadata/readiness/traceability PASS. Logs/source proof/commands/exits in summary.json.

First nested-pnpm commands FAIL before test execution, preserved under first-*logs; initial compactness assertion FAIL due11000byte assumption versus10978byte baseline, corrected by bounded524byte snapshot and base+600check. This task-local check did not modify any standing validator. Local full governance was initiated; capture its actual outcome separately. Mandatory actual new-head Draft/ReadyCI must run governance, app/security/build/check, Chromium41, PG16recovery12 and PG17 32+16+8HTTP/restart/cleanup. Pending CI is not claimed PASS; final review/CI appended externally without circularSHA.

## Artifacts
Task0079/CP0079/EB0079, exact-source inputs/inventory, report, readiness JSON, new evidence/command logs, source-bound per-commit manifest. No secrets/IDs/private claims/token/account data. Scratch/generated0002/0003packs, caches and local tooling remain uncommitted. Original PR137 and Task77/78 evidence unchanged.

## Risks
All3fixturesUNKNOWN;G1-G4/N12/historical independent runtime restrictions BLOCKED;3hosted observations/R01-R08/OR01-10NOT_RUN; legacyprivilegesSKIPPED. Task77 Ready42777271966 remainsFAILURE11PASS1ERROR/gateFAIL. Historical Task78 failures and supplied-source-only review limits remain. Current newCI required, not substituted by oldmainrun43397610863. PRINCIPAL/SESSION/GATEWAY/TRANSPORT/PACKAGING/RECONCILIATION/hosted/pilot/release remain pending. Issues108/131OPEN; remediationEXPIRED.

## Reviewer disposition
Owner pending; distinct exact-head source review and full actual Draft/ReadyCI required before recommendation. AI review is advisory, not human approval or independent runtime acceptance. No automatic merge. Final head/tree/diff inventory, reviews and CI outcomes are PR-ledger appendices.
