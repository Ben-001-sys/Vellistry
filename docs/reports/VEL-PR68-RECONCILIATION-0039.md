# PR68 source reconciliation and historical verification

## FACT — source and completed predecessors
Current verified base ebb214197da2d1c293993cd08976db1627907e64 follows PR103 and successful post-main39565845574. Original PR68 remains cbb379fa4a4eaa9f576f3abcce2c2258d22cc551; inherited ChatGPT PR65 source is604e1ebfd0baab930ee4dc39aecf7289dc64188a. No original branch is rewritten. Task0039 snapshots precede validated immutable CP0039 at365ed8cd301a348a0629fff198c9439aceb6d8c5. Initial oversized source selection was rejected before implementation; a new pre-pack source commit b3e33bc18b3b2a10b2843c9e6d05f004264e30e2 replaced duplicated map content with its exact Git/hash reference. No existing ContextPack was modified.

PR93 integrated the useful preflight lineage with demonstrated parser/override corrections; PR102 integrated canonical README guidance and byte-exact ChatGPT browser wording. All19 PR68 preflight test names remain in the23-test suite. PR91 preserved the complete38path map, independent offline review and durable original PG17 artifact. Those integrations received distinct reviews, ready CI and post-main verification. The old PR68 branch is not a safe wholesale integration source: its CI, current-state claims and permission envelope predate merged governance.

## Current per-source disposition
The machine-readable PR68-DISPOSITIONS.json retains every original Git blob,SHA256,authorship and current-base relation. Original historical reports/tasks stay retrievable at the pinned branch and in the recovery dependency set, not reissued as current permissions.

| Original path | Disposition |
|---|---|
| .env.example | SUPERSEDED_BY_CANONICAL_GUIDANCE |
| .github/workflows/implementation-foundation.yml | EXCLUDED_OBSOLETE_CI |
| CURRENT-STATE.md | EXCLUDED_STALE_SNAPSHOT |
| README.md | SUPERSEDED_BY_CANONICAL_GUIDANCE |
| apps/api/.env.example | SUPERSEDED_BY_CANONICAL_GUIDANCE |
| apps/web/.env.example | SUPERSEDED_BY_CANONICAL_GUIDANCE |
| apps/web/src/lib/supabase/browser.ts | ADOPTED_EXACT |
| docs/agent-workflow/context-packs/VEL-CP-0005.md | HISTORICAL_PIN_RETAINED |
| docs/agent-workflow/execution-bundles/VEL-EB-0005.md | HISTORICAL_PIN_RETAINED |
| docs/agent-workflow/inputs/VEL-TASK-0005-ADR-0008.md | HISTORICAL_PIN_RETAINED |
| docs/agent-workflow/inputs/VEL-TASK-0005-ISSUE-67.md | HISTORICAL_PIN_RETAINED |
| docs/agent-workflow/tasks/VEL-TASK-0005.yaml | HISTORICAL_PIN_RETAINED |
| docs/plans/VEL-IMP-001B-HOSTED-CLOUD-ACCEPTANCE-2026-10-14.md | HISTORICAL_PIN_RETAINED |
| docs/reports/VEL-IMP-001B-PHASE-A-MIGRATION-REVIEW-2026-10-14.md | HISTORICAL_PIN_RETAINED |
| docs/reports/VEL-IMP-001B-PHASE-B-PRECHECK-2026-10-15.md | HISTORICAL_PIN_RETAINED |
| docs/reports/evidence/VEL-IMP-001B-PHASE-A-20261014/agent-workflow.txt | HISTORICAL_PIN_RETAINED |
| docs/reports/evidence/VEL-IMP-001B-PHASE-A-20261014/build.txt | HISTORICAL_PIN_RETAINED |
| docs/reports/evidence/VEL-IMP-001B-PHASE-A-20261014/check.txt | HISTORICAL_PIN_RETAINED |
| docs/reports/evidence/VEL-IMP-001B-PHASE-A-20261014/ci-f29d65e-annotations.json | HISTORICAL_PIN_RETAINED |
| docs/reports/evidence/VEL-IMP-001B-PHASE-A-20261014/ci-f29d65e-foundation-jobs.json | HISTORICAL_PIN_RETAINED |
| docs/reports/evidence/VEL-IMP-001B-PHASE-A-20261014/ci-f29d65e-runs.json | HISTORICAL_PIN_RETAINED |
| docs/reports/evidence/VEL-IMP-001B-PHASE-A-20261014/f29d65e-verification.txt | HISTORICAL_PIN_RETAINED |
| docs/reports/evidence/VEL-IMP-001B-PHASE-A-20261014/hosted-preflight.txt | HISTORICAL_PIN_RETAINED |
| docs/reports/evidence/VEL-IMP-001B-PHASE-A-20261014/install.txt | HISTORICAL_PIN_RETAINED |
| docs/reports/evidence/VEL-IMP-001B-PHASE-A-20261014/issue-67.json | HISTORICAL_PIN_RETAINED |
| docs/reports/evidence/VEL-IMP-001B-PHASE-A-20261014/library-isolation.txt | HISTORICAL_PIN_RETAINED |
| docs/reports/evidence/VEL-IMP-001B-PHASE-A-20261014/missing-environment.txt | HISTORICAL_PIN_RETAINED |
| docs/reports/evidence/VEL-IMP-001B-PHASE-A-20261014/phase-b-readonly-precheck-20261015.json | HISTORICAL_PIN_RETAINED |
| docs/reports/evidence/VEL-IMP-001B-PHASE-A-20261014/phase-b-source-0f41a27-ci-annotations.json | HISTORICAL_PIN_RETAINED |
| docs/reports/evidence/VEL-IMP-001B-PHASE-A-20261014/phase-b-source-0f41a27-verification.txt | HISTORICAL_PIN_RETAINED |
| docs/reports/evidence/VEL-IMP-001B-PHASE-A-20261014/provenance.json | HISTORICAL_PIN_RETAINED |
| docs/reports/evidence/VEL-IMP-001B-PHASE-A-20261014/source-manifest.json | HISTORICAL_PIN_RETAINED |
| docs/reports/evidence/VEL-IMP-001B-PHASE-A-20261014/workflow-tests.txt | HISTORICAL_PIN_RETAINED |
| package.json | CURRENT_EQUIVALENT |
| scripts/hosted_supabase_preflight.mjs | ADOPTED_WITH_REVIEWED_CORRECTIONS |
| supabase/migrations/20261015171325_restrict_book_privileges.sql | PLANNING_ONLY_NOT_ADOPTED |
| tests/book_privileges_regression.sql | PLANNING_ONLY_NOT_ADOPTED |
| tests/hosted_supabase_preflight.test.mjs | ADOPTED_WITH_REVIEWED_CORRECTIONS |

## Historical CI evidence
Twenty-two original runs across f29d65ea079cdab9fda7417470f8633331fb16a1,942f8da7969aeb351786f25bc464ea296ae78969 and0f41a27a2de879f6d75c86c21b0d47d1d783f0c9 are pinned in the ContextPack inputs. All original attempt1 job records were retained before reruns:30jobs,zero executed steps. Original platform annotations report payment/spending-related startup restrictions. These were not code-test failures. No billing or account settings were read or changed.

Rerun requests and actual attempt2 records are separate evidence. K2 requests are serialized because the historical workflow cancels overlapping runs. Current automatic CI is unchanged. Original workflows retain their historical dependency/runner labels and cleanup behavior; rerun source identity does not prove identical dependency versions or runner images. Sanitized records retain job steps,test-count lines and checkout identities; raw service startup/credential logs are not committed.

Default PR jobs checked out their original synthetic merge commits, while explicit-head/push jobs checked out the original heads. CHECKOUT-PROVENANCE.json verifies each synthetic merge parent and exact tree equality to its pinned head. This distinction prevents falsely labeling every job a direct-head checkout. Historical stop uses ||true, so job success alone is not cleanup proof; explicit local shutdown output is separately retained where present. GitHub runners and all database/Auth fixtures are disposable, never the hosted project.

All22 attempt2 reruns completed SUCCESS, across30 actual jobs. Five K2 runs include explicit local-service shutdown output. All historical run-level heads remained pinned; all observed checkout trees match their corresponding source heads. RUN-SUMMARY.json records actual step counts and job durations: summed job wall time1136.0seconds, not billable minutes or cost savings. No billing-state repair mechanism is inferred.

## INTERPRETATION
Useful repository work from PR68 has been integrated through governed successors or preserved as exact historical evidence. The two proposed SQL paths remain planning-only and unadopted. Historical exact-source reruns establish real execution now, not the mechanism of an account/billing change, hosted default privileges, or product release readiness.

## PROPOSAL and reserved decisions
After this successor's distinct exact-head review, ready CI, delegated integration and post-main verification, close obsolete PR68 as superseded without merging its old branch or deleting it. Keep exact SQL references and the separate security-sensitive decision packet for future owner action. Closing that branch does not close genuinely unmet hosted acceptance in Issue67/63 or approve SQL-path adoption, live target access or private pilot.

The final PR83 successor will reconcile current truth and all44 original acceptance statements. Third SQL definition remains planning-only; signed-out JWT direct Data API risk remains a private-pilot blocker. New MVP features are not dispatched.

## Actual verification and evidence correction
The offline evidence replay passed1positive and10negative cases covering missing paths/runs, changed hashes/heads, unsupported PASS, zero-step jobs, unknown/non-equivalent checkouts and missingSQL. Its initial failure correctly exposed two incomplete job metadata captures despite run-level success; those original captures and the failed output are retained. Refreshed actual completed job records passed the unchanged checker. This was evidence completion, not a source correction or weakened assertion.

| Run / attempt2 | Source head | Workflow | Result |
|---|---|---|---|
| [38653713314](https://github.com/Ben-001-sys/Vellistry/actions/runs/38653713314/attempts/2) | f29d65ea079cdab9fda7417470f8633331fb16a1 | .github/workflows/combined-main-baseline.yml | SUCCESS |
| [38653713330](https://github.com/Ben-001-sys/Vellistry/actions/runs/38653713330/attempts/2) | f29d65ea079cdab9fda7417470f8633331fb16a1 | .github/workflows/agent-workflow.yml | SUCCESS |
| [38653713326](https://github.com/Ben-001-sys/Vellistry/actions/runs/38653713326/attempts/2) | f29d65ea079cdab9fda7417470f8633331fb16a1 | .github/workflows/knowledge-metadata.yml | SUCCESS |
| [38653713337](https://github.com/Ben-001-sys/Vellistry/actions/runs/38653713337/attempts/2) | f29d65ea079cdab9fda7417470f8633331fb16a1 | .github/workflows/implementation-readiness.yml | SUCCESS |
| [38653713416](https://github.com/Ben-001-sys/Vellistry/actions/runs/38653713416/attempts/2) | f29d65ea079cdab9fda7417470f8633331fb16a1 | .github/workflows/k2-supabase-auth-rls.yml | SUCCESS |
| [38653713344](https://github.com/Ben-001-sys/Vellistry/actions/runs/38653713344/attempts/2) | f29d65ea079cdab9fda7417470f8633331fb16a1 | .github/workflows/implementation-foundation.yml | SUCCESS |
| [38653615599](https://github.com/Ben-001-sys/Vellistry/actions/runs/38653615599/attempts/2) | f29d65ea079cdab9fda7417470f8633331fb16a1 | .github/workflows/implementation-foundation.yml | SUCCESS |
| [38653615619](https://github.com/Ben-001-sys/Vellistry/actions/runs/38653615619/attempts/2) | f29d65ea079cdab9fda7417470f8633331fb16a1 | .github/workflows/k2-supabase-auth-rls.yml | SUCCESS |
| [38653900723](https://github.com/Ben-001-sys/Vellistry/actions/runs/38653900723/attempts/2) | 942f8da7969aeb351786f25bc464ea296ae78969 | .github/workflows/k2-supabase-auth-rls.yml | SUCCESS |
| [38653900569](https://github.com/Ben-001-sys/Vellistry/actions/runs/38653900569/attempts/2) | 942f8da7969aeb351786f25bc464ea296ae78969 | .github/workflows/agent-workflow.yml | SUCCESS |
| [38653900613](https://github.com/Ben-001-sys/Vellistry/actions/runs/38653900613/attempts/2) | 942f8da7969aeb351786f25bc464ea296ae78969 | .github/workflows/implementation-readiness.yml | SUCCESS |
| [38653900378](https://github.com/Ben-001-sys/Vellistry/actions/runs/38653900378/attempts/2) | 942f8da7969aeb351786f25bc464ea296ae78969 | .github/workflows/combined-main-baseline.yml | SUCCESS |
| [38653900593](https://github.com/Ben-001-sys/Vellistry/actions/runs/38653900593/attempts/2) | 942f8da7969aeb351786f25bc464ea296ae78969 | .github/workflows/implementation-foundation.yml | SUCCESS |
| [38653900459](https://github.com/Ben-001-sys/Vellistry/actions/runs/38653900459/attempts/2) | 942f8da7969aeb351786f25bc464ea296ae78969 | .github/workflows/knowledge-metadata.yml | SUCCESS |
| [38776359354](https://github.com/Ben-001-sys/Vellistry/actions/runs/38776359354/attempts/2) | 0f41a27a2de879f6d75c86c21b0d47d1d783f0c9 | .github/workflows/combined-main-baseline.yml | SUCCESS |
| [38776359432](https://github.com/Ben-001-sys/Vellistry/actions/runs/38776359432/attempts/2) | 0f41a27a2de879f6d75c86c21b0d47d1d783f0c9 | .github/workflows/implementation-foundation.yml | SUCCESS |
| [38776359402](https://github.com/Ben-001-sys/Vellistry/actions/runs/38776359402/attempts/2) | 0f41a27a2de879f6d75c86c21b0d47d1d783f0c9 | .github/workflows/knowledge-metadata.yml | SUCCESS |
| [38776359361](https://github.com/Ben-001-sys/Vellistry/actions/runs/38776359361/attempts/2) | 0f41a27a2de879f6d75c86c21b0d47d1d783f0c9 | .github/workflows/k2-supabase-auth-rls.yml | SUCCESS |
| [38776359449](https://github.com/Ben-001-sys/Vellistry/actions/runs/38776359449/attempts/2) | 0f41a27a2de879f6d75c86c21b0d47d1d783f0c9 | .github/workflows/implementation-readiness.yml | SUCCESS |
| [38776359536](https://github.com/Ben-001-sys/Vellistry/actions/runs/38776359536/attempts/2) | 0f41a27a2de879f6d75c86c21b0d47d1d783f0c9 | .github/workflows/agent-workflow.yml | SUCCESS |
| [38776353650](https://github.com/Ben-001-sys/Vellistry/actions/runs/38776353650/attempts/2) | 0f41a27a2de879f6d75c86c21b0d47d1d783f0c9 | .github/workflows/implementation-foundation.yml | SUCCESS |
| [38776354022](https://github.com/Ben-001-sys/Vellistry/actions/runs/38776354022/attempts/2) | 0f41a27a2de879f6d75c86c21b0d47d1d783f0c9 | .github/workflows/k2-supabase-auth-rls.yml | SUCCESS |
