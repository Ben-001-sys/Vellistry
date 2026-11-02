---
id: VEL-CP-0076
title: 'Context for VEL-TASK-0076: IMP003E mandatory native Chromium CI acceptance'
type: context-pack
status: prepared
created_at: '2026-11-02'
version: 0.1.0
task_id: VEL-TASK-0076
base_commit: 0750adea43d765b4718e496a31f08711f8483c46
task_blob_sha: 810558372ac369ccae337bc762e34ef88d36cc02
inputs:
- path: PROJECT-CONSTITUTION.md
  role: governing-source
  git_blob_sha: 61f79c4dcb47bd99291c16490e8c00692e2ab23b
  source_status: accepted
- path: AGENTS.md
  role: governing-source
  git_blob_sha: 3058d51c0e15db54d6271ecbcffcfeb0aaf54e6f
  source_status: active
- path: docs/agent-workflow/PR-COMPLIANCE.md
  role: governing-source
  git_blob_sha: 5f4845623aef3abb15fba7fbe8e78474902cca00
  source_status: unrecorded
- path: .github/workflows/ci.yml
  role: governing-source
  git_blob_sha: aaca687e9a2efd1e922a6f6978f9522a42957bc3
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0076/OWNER-SCOPE.md
  role: governing-source
  git_blob_sha: e21bfdd19e182591ec04786deee48f7a76a5fc62
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0076/CONTRACT.md
  role: governing-source
  git_blob_sha: 8a75d50c768c81763e33de404235b0a831a37ab3
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0076/SOURCE-REFERENCES.json
  role: governing-source
  git_blob_sha: 9624cf2dcc452ff02a7b988d6244e21bb1eac532
  source_status: unrecorded
source_gaps:
- id: PRODUCTION
  limitation: Synthetic principals/session rows/storage; no hosted or real-session
    enforcement. R01-R08 NOT_RUN N12/EPERM BLOCKED.
prepared_by: agent_workflow.py
---

# VEL-CP-0076 — IMP003E mandatory native Chromium CI acceptance

## Objective
Make all41 native durable-draft browser cases reproducible and mandatory in existing applicable application CI with complete source-bound evidence and cleanup

## Scope
**In:** .github/workflows/ci.yml; package.json; pnpm-lock.yaml; tests/editor/durable-draft-browser.mjs; tests/test_ci_policy.py; CURRENT-STATE.md; docs/agent-workflow/tasks/VEL-TASK-0076.yaml; docs/agent-workflow/context-packs/VEL-CP-0076.md; docs/agent-workflow/execution-bundles/VEL-EB-0076.md; docs/agent-workflow/inputs/VEL-TASK-0076/*; docs/agent-workflow/PR-COMPLIANCE.yaml; docs/reports/VEL-IMP003E-CHROMIUM-CI-0076.md; docs/reports/evidence/VEL-TASK-0076/*
**Out:** Application/SQL/Auth/production/hosted/private manuscripts/paid services/deployment/merge; protected evaluator/loader/ci_policy.py and other operative paths

## Evidence and authority constraints
The text below is a readable rendering of pinned Git blobs; exact raw bytes remain recoverable from the recorded commit/blob SHAs. Recorded source statuses remain in force: draft research is not accepted requirements. Original unarchived uploads are not independently verified merely by being mentioned.

**Known source gaps:**
- PRODUCTION: Synthetic principals/session rows/storage; no hosted or real-session enforcement. R01-R08 NOT_RUN N12/EPERM BLOCKED.

## Permissions and acceptance
**Allowed:** Implement exact paths after validated committed CP; install exact playwright1.64.0 dev dependency and matching Chromium, Execute synthetic tests/owned browsers/unchanged disposable PG fixtures and existing CI; unmerged PR
**Owner approval required:** Any scope expansion/protected control/dependency beyond exact Playwright/SQL/hosted/security/merge
**Acceptance criteria:**
- All41 original cases execute once and PASS; native browser source/version/bundle and cleanup evidence validates
- Mandatory steps cannot be skipped/masked/replaced and failures block existing gate; Draft remains advisory
- Fresh owned CI execution needs no developer cache; synthetic-only bounded artifacts; preserve all existing controls

## Deliverables
- Pinned test-only Playwright, matching native Chromium, mandatory workflow steps, complete evidence validator and negative tests
- Actual tests/EB/distinct final review/fresh-runner full and Ready CI/unmerged PR

## Pinned source snapshots
Git commit: `0750adea43d765b4718e496a31f08711f8483c46`. Read source statuses independently from task intent.

### `PROJECT-CONSTITUTION.md` @ `61f79c4dcb47bd99291c16490e8c00692e2ab23b`

~~~~~~markdown
---
id: VEL-GOV-001
type: governance
status: accepted
created_at: 2026-10-08
updated_at: 2026-10-08
owner: project_owner
version: 0.1.1
evidence:
  - "User approval of the Git-plus-app knowledge approach, 2026-10-08; conversation reference pending archival."
related_adrs:
  - ADR-0001
  - ADR-0002
---

# Vellistry Project Constitution

1. **Preserve authorship and intent.** Support writers' decisions, distinctive voices, stylistic irregularities, and deliberate exceptions; avoid indiscriminate generic polishing.
2. **Preserve original sources.** Research summaries do not replace underlying documents; record provenance and distinguish direct quotations, supported findings, inference, and proposals.
3. **Separate evidence from decisions.** AI recommendations and research candidates never become authoritative simply by being recorded.
4. **Require traceability.** Requirements, ADRs, historical events, research records, and experiments receive stable IDs and linked sources or explicit evidence gaps.
5. **Require metadata for decisions and history.** Use YAML front matter, timestamps/date precision, lifecycle states, author/approval attribution, relationships, and supersession links.
6. **Maintain current state.** Update CURRENT-STATE.md whenever a task materially changes agreed progress, decisions, blockers, or next steps.
7. **Use controlled knowledge promotion.** Read authoritative context; submit proposed changes with evidence; verify and approve before marking accepted.
8. **Retain history.** Correct errors through traceable revisions or new corrective events; do not erase prior decisions or rewrite an event as though it never happened.
9. **Remain vendor-neutral.** Models, tools, and orchestrators should be replaceable where practical; document genuine constraints and trade-offs.
10. **Use least-privilege agent access.** Keep secrets out of Git, isolate sensitive/runtime author data, review consequential actions, and require human approval for high-impact changes.
11. **Keep systems proportionate.** Begin with Git/Markdown, lightweight templates, and repeatable manual research; add automated context assembly, durable workflows, and additional stores only if tests justify them.
12. **Version code and knowledge together where appropriate.** Application and its engineering knowledge belong in one repository, while user manuscripts and runtime personal information require separate application storage.

## Status hierarchy
Accepted and effective decisions take precedence over proposals. Superseding decisions must explicitly reference what they replace. Research notes are evidence, not approval.

## Solo-maintainer review policy
Vellistry currently has one human contributor: the project owner. The owner may review and merge their own pull requests after appropriate inspection and required automated checks. A separate human reviewer is **not** a standing requirement during this phase. AI-agent review may provide independent analysis but is advisory, not another human approval. For consequential architecture, security, or production changes, the owner's explicit approval remains required. Revisit the policy when collaborators join. See HIS-20261008-002.

## Change control
Propose amendments in version control with rationale and evidence. Material changes require owner approval, an updated changelog/history event, and a corresponding CURRENT-STATE update.
~~~~~~

### `AGENTS.md` @ `3058d51c0e15db54d6271ecbcffcfeb0aaf54e6f`

~~~~~~markdown
---
id: VEL-AGENT-001
type: agent-instructions
status: active
created_at: 2026-10-08
updated_at: 2026-10-18
version: 0.1.7
---

# Instructions for Vellistry Research and Development Agents

## Read in order
1. PROJECT.md and PROJECT-CONSTITUTION.md.
2. SOURCE-OF-TRUTH.md and CURRENT-STATE.md.
3. Relevant accepted ADRs and requirements.
4. Task-specific ContextPack and original sources.
5. Related history, experiments, and execution reports if relevant.

## Product language and UX copy (LANGUAGE.md)

- Before any change to user-facing navigation, page names, buttons, forms, dialogs, status messages, errors, tooltips, accessibility labels, onboarding, AI consent or export wording, read root `LANGUAGE.md` alongside the relevant accepted product requirements and current implementation.
- Follow `LANGUAGE.md` for owner-approved product terminology. Reuse canonical names consistently while allowing explicitly documented contextual short labels; preserve distinct concepts such as manuscript vs notes, AI suggestion vs accepted revision, suggested fact vs approved canon, and local recovery vs confirmed save.
- Verify what the interface and backend actually do before using success, save, privacy, cost, cancellation, deletion or provider-availability claims. Do not expose internal transport codes as author-facing text or mark proposed/future features as implemented.
- If a needed term is absent, proposed, disputed or inconsistent with approved scope, record the current wording, candidate, affected surfaces and supporting evidence for owner review. Do not silently make a new canonical decision or rename unrelated concepts.
- `LANGUAGE.md` governs visible words, not database fields, API routes, internal identifiers, source archives, accepted ADRs, or integration contracts. Do not change those solely to match display labels.
- Include user-facing copy/state checks and relevant accessibility/negative tests in the task ExecutionBundle. Do not change the language contract or add automation enforcing it outside the owner-authorized Task → ContextPack → implementation → review workflow.

## Primary agentic implementation workflow (ADR-0008, owner-selected 2026-10-14)

**Codex is the default bounded code implementer.** ChatGPT is the architect/task coordinator and exact-head reviewer; GitHub is the source of truth; the owner approves consequential scope, cloud database operations, PR merge and release. Read [ADR-0008](docs/decisions/ADR-0008-codex-primary-agentic-implementation-workflow.md) and the latest `CURRENT-STATE.md` before preparing/accepting new code tasks. Older Cursor workflows are historical; Cursor may be an editor or explicitly reassigned agent, never silently the default.

Default sequence: **owner-approved task → ChatGPT ContextPack/spec/negative checks → Codex in isolated branch/worktree → actual tests + ExecutionBundle → ChatGPT source/CI review → owner merge decision → verify merged `main` and update state**. Record the actual executor; do not reattribute a ChatGPT-made PR to Codex or invent a successful Codex dispatch. Never let Codex self-approve remote migrations, secrets, real manuscripts, costs or deployment.

## Operational task handoff

Use [the merged operational workflow](docs/agent-workflow/README.md): unique owner-authorized Task → committed governing sources → generated, validated, committed immutable ContextPack **before implementation** → isolated work → actual tests and ExecutionBundle → ChatGPT independent source/CI review → owner decision → verify merged main. Never overwrite a dispatched pack; material scope changes require an authorized amendment/new pinned ID. Current examples include merged PR70 Task/CP/EB0006–0007; PR68's0005 remain a distinct draft.

**Qualifying implementation** includes application, tests, SQL, CI, executable tooling and changes to effective agent instructions/approval contracts. Codex implements these through the bounded handoff. Coordinator write access is not coding approval. Another executor requires an **explicit owner task exception**, identifying scope and executor; record provenance. Commit author strings do not authenticate runtime identity.

**Lightweight governance** means coordinator triage, source indexing, draft task preparation and review/evidence comments that do not implement executable changes, alter effective instructions or promote decisions. These remain attributed, source-linked and reviewable; task preparation is not dispatch or owner acceptance. This exception cannot be used to alter CI, tests, security, agent authority or accepted decisions.

Automatic PR-to-task compliance is implemented by the merged [static contract](docs/agent-workflow/PR-COMPLIANCE.md) from [Issue #73](https://github.com/Ben-001-sys/Vellistry/issues/73). It checks declared provenance and scope, not authenticated runtime identity or human approval. Preserve trusted-base evaluation and the mandatory security gates. See the [operating model](docs/agent-workflow/IMPLEMENTATION-OPERATING-MODEL.md) for bounded task exceptions.

## Duties
- Report what is **FACT**, what is **INTERPRETATION**, and what is **PROPOSAL**.
- Preserve source framing and provenance; do not invent missing requirements or infer approvals.
- Respect accepted decisions; flag conflicts instead of silently resolving them.
- Use stable IDs and YAML metadata for ADRs, history events, research and reports where schemas apply.
- Keep original reasoning and options visible when an ADR becomes superseded.
- Produce ExecutionBundles with work completed, evidence, limitations, changed files, tests, and proposed knowledge updates.
- The project currently has **one human contributor**, the owner. Before consequential changes are merged, present evidence, risks, and a review checklist for the **owner's self-review and explicit approval**. Do not request a second human review as a hard requirement; optional AI review is advisory, not human approval. Do not modify accepted decisions silently.
- Never place API keys, passwords, manuscript personal data, or secrets in the repository.
- Avoid overengineering. Do not create code, services, or new architecture merely because an archived research document mentioned them.
- When revising user-authored creative material, prioritize writer intent and context over a mechanical set of anti-AI rules.

## Done means
A task is done only when its deliverables are present, evidence and metadata are supplied, verification status is accurately described, and CURRENT-STATE.md has been adjusted if project status changed.

## Current bounded remediation delegation

The [one-time owner delegation](docs/agent-workflow/authorizations/VEL-REM-INTEGRATION-20261019.yaml) temporarily permits Codex to integrate eligible repository-only remediation after distinct trusted review, actual ready CI, exact merged-tree and post-main verification. This is a recorded owner decision, not agent self-approval or a default-policy change. It expires at programme completion/formal closure; new MVP tasks and all hosted/security-sensitive actions remain separately gated. See the current ledger and CURRENT-STATE.md.

The temporary remediation delegation ends under its [recorded closure condition](docs/agent-workflow/authorizations/VEL-REM-INTEGRATION-20261019-CLOSURE.md). After the final merge/post-main attestation, ordinary owner-governed approval resumes; this exception grants no future feature authority.
~~~~~~

### `docs/agent-workflow/PR-COMPLIANCE.md` @ `5f4845623aef3abb15fba7fbe8e78474902cca00`

~~~~~~markdown
# PR-to-task compliance v1 — proposed under Issue73

This is repository evidence validation, not authenticated LLM identity or owner
approval. The owner still decides adoption, exceptions, final acceptance and
merge. No branch-protection/admin change is made by this implementation.

## Required evidence for qualifying changes

All paths qualify except narrowly inert `.md/.txt/.rst` research/report triage
under `docs/research/` or `docs/reports/`. Unknown files, application/auth/SQL,
tests/tools/CI, root instructions, decisions, tasks, approval records and policy
always qualify. Add/delete/rename paths are inspected without rename elision.

A qualifying range must add one new Task ID absent from its change base, with
`compliance` metadata pinned into the existing ContextPack before implementation:

| Task field | Required meaning |
|---|---|
| change_base | Exact evaluated merge-base SHA, not an arbitrary old phase. Rebase/base drift requires an authorized fresh amendment/pack. |
| phase | Exact phase matched by manifest. PhaseA cannot silently authorize PhaseB. |
| executor | Codex by default; explicit alternate requires an owner-verifiable record already in reviewed base. |
| allow_paths | Explicit relative paths/globs, constrained independently from prohibited secret/SQL operations. |
| authorization | Linked repository issue/comment; source provenance; authorized status and expiry date. Superseded/expired/missing fails. Linked text is not human identity proof. |
| forbidden_actions | hosted, production, private-manuscripts, paid-services, admin, merge. A role exception cannot waive these. |

The existing task/pack/bundle schema is preserved. The compliance checker loads
`agent_workflow.py` from reviewed base to validate task/source blob SHAs and the
complete immutable rendered pack. Live task may advance lifecycle/updated date;
material permission, scope, phase or source changes require new task/pack, not
editing the dispatched artifact. Qualifying old PRs are not grandfathered: prepare
a new bounded task and retain externally authored origins.

## Manifest, code binding and self-reference

`docs/agent-workflow/PR-COMPLIANCE.yaml` selects the task, pack commit, source
commit, bundle, phase and executor. It declares each prior range commit by exact
SHA and original/adopted origin, plus an explicit `current_head` declaration
resolved by CI to the actual event HEAD. Adopted records retain original executor,
original commit, linked source and matching Git patch. Git author names are not
used to infer who ran an agent. Undeclared cherry-pick trailers or contradictions
fail; a coordinated false declaration still requires human/source investigation.

The pack must already exist in an ancestor commit before every operative edit.
The EB's implementation_source_commit equals the manifest source commit, and
all operative blobs at current HEAD must still match that source. A source
commit followed by report/manifest-only evidence avoids requiring a commit to
contain its own SHA. Report artifacts exclude executable/config extensions.
CI prints actual head/base/source; final run evidence is appended to the PR
ledger after the last commit exists. A later code change needs fresh tests and
new source evidence. Missing EB/head evidence, empty/failed/NOT_RUN/BLOCKED tests
or contradictory declared execution are non-passing.

Tests/executor entries are attestations with linked raw evidence, not a proof
that arbitrary commands actually ran. The independent reviewer checks artifacts
and actual CI runs. `owner_disposition: pending`, proposed-for-review bundle and
pending owner review are mandatory during implementation CI. Green review alone
cannot set accepted state. Owner acceptance is external to this pre-merge gate;
follow-up record promotion is reviewed separately, never forged by the agent.

## Owner-verifiable exceptions and SQL

A coordinator may index sources or prepare an inert research/report review
without implementation evidence. That exception cannot change effective agent
instructions, tasks, CI, tests, SQL or approval contracts.

For an alternate executor, the owner first records an explicit task-scoped
exception in reviewed main at `docs/agent-workflow/authorizations/VEL-TASK-NNNN.yaml`:
`task_id`, `status: owner-verified`, `approved_by: project_owner`,
`kind: executor-exception`, exact `executor`, and linked `evidence`.
Codex cannot create that record in its own implementation candidate and thereby
approve itself. The owner independently verifies the linked authorization and
adopts it through the existing review process. No protected setting is altered.

Any SQL path also requires a separate reviewed-base owner record with
`kind: migration-path-approval`, exact `paths` and linked `evidence`; explicit
allowlist alone does not suffice. This is permission to propose those files,
not to execute hosted migrations. The third PR68 migration remains unapproved.
Changing a scoped task or adding a record is not a grant of database execution,
private manuscripts, paid calls, production, admin changes or merge.

## CI placement, evaluated trust and bootstrap

The ONE automatic Vellistry CI retains all original app/security/recovery jobs,
25 manual historical workflows and draft-aware routing. Cheap static validation
runs in governance and independently at the final gate; governance emits a
required `compliance=pass` result. Missing/failing evidence cannot be hidden by
green security jobs. Draft governance may pass, but the stable gate deliberately
blocks until ready/full verification, as before. No privileged PR target event,
extra token, API scope, duplicate build, service or orchestrator is introduced.

The loader extracts evaluator and existing pack validator from PR event base,
not candidate Python imports. Candidate contents are treated as data. Push-main
uses before; a two-parent owner merge must have an unchanged implementation tree,
which is validated at its branch head and reported separately from the merge SHA; manual feature runs use fetched origin/main. Same-head manual main
is unchanged baseline, with required control-source/workflow presence checked.
No retroactive recertification of all historical merged tasks is attempted.

The initial base `f371448538dafa92faebbef9bcda2a36c6ca1fa9` lacks the evaluator.
Only that baseline with Task0010 and its exact committed pack permits candidate bootstrap, visibly PROVISIONAL and subject
to owner first-adoption review; existing pack verifier still comes from base.
Subsequent unknown/missing baseline evaluators fail. This initial task is not
blocked by a requirement to have already merged itself. Changing this bootstrap
or loader is a security-sensitive control change requiring independent review.

A PR can change its workflow/loader and tests. Required file presence, unconditional
step contracts, negative-test discovery, task scope and code binding detect
accidental/suspicious weakening when the checker runs; they do not make an
unprotected workflow malicious-contributor-proof. The owner must require the
stable check and protect/review control changes using available repository
settings. Read-only inspection on2026-10-17 returned HTTP404 `Branch not protected`
for classic main protection and an empty ruleset list. We do not change settings.
The owner must decide/configure actual required-check and protected-control review
before claiming repository-level merge prevention; plan eligibility was not queried. Manual fallback: owner verifies trusted-base checker/diff, immutable
pack and scope, actual exact-head CI, provenance and linked authorization before
any merge. STOP for owner decision if a future requirement needs privileged
scopes or protection changes. This is the explicit remaining enforcement limit.

## Acceptance / attack matrix

| Case | Expected result |
|---|---|
| Missing task/pack/EB, changed rendered pack/source pin | Fail |
| Wrong base, reused task, phase extension, retroactive allowlist | Fail; new authorized amendment |
| Unauthorized app/CI/SQL path; SQL without base approval | Fail |
| Missing/expired/superseded authorization; alternate without base exception | Fail |
| ChatGPT implementation mislabeled Codex; missing model/origin/head | Fail on detectable contradiction |
| Adopted ChatGPT commit with actual origin/patch retained | Pass structural evidence; authorship preserved |
| Failed/NOT_RUN/BLOCKED execution; review promoted to owner acceptance | Fail |
| Inert docs-only triage | Pass documented exemption; no owner acceptance inferred |
| Deleted/empty compliance test/checker, skipped check or missing gate output | Fail when trusted check executes |
| Candidate replaces evaluator | Base evaluator executes; workflow/loader bypass still requires protected review |
| Draft / ready / main / full | Same evidence rules; original draft/security semantics preserved |

Local fixtures are synthetic repository tests, not a malicious live PR, hosted
security acceptance or independent human approval. Actual final-head runs and
review limitations belong in VEL-EB-0010 and its linked evidence ledger.

## Review correction01 — final invocation and event coverage

The static contract now requires the actual final `python scripts/ci_policy.py gate`
step, exact complete `CI_NEEDS: ${{ toJSON(needs) }}` input and terminal position.
Mandatory steps cannot be skipped or softened by continue-on-error, custom shell,
working directory or injected execution defaults. Foundational governance must
execute, and expensive job guards retain their existing classification conditions.
All six PR activities and unfiltered push-main/manual coverage must remain;
removing a ready/synchronize event or adding event path/base filters fails.

The gate-policy implementation `scripts/ci_policy.py` still executes from the
candidate checkout. Structural invocation checks do not establish the semantics
of maliciously rewritten Python. Owner-protected independent source review is
explicitly required for that file, the evaluator, loader and calling workflow,
including first-adoption bootstrap. A future trusted gate-policy loader would
need a separately reviewed design; none is silently introduced by this correction.
No branch protection, actor authentication or cryptographic tamper-proof claim.

## Review correction02 — token permissions and regression runner

All jobs must inherit workflow-level `contents: read`; any job `permissions`
override is rejected, including read-only/empty mappings and OIDC write access.
Governance must contain exactly one `python scripts/ci_governance.py` regression
step. Its command is exact and unconditional: no conditional, continue-on-error,
alternate shell, working directory or injected environment is permitted. Duplicate
invocations, including under another name, fail. Actual workflow is unchanged.

The owner explicitly deferred branch protection for the sole-maintainer phase,
accepting the enforcement risk. Earlier protection observations above are history;
settings are not an additional rollout blocker for this bounded review. No claim
of enforced repository-level merge prevention follows. Owner source/CI self-review
and the final merge decision remain required; this task changes no settings.
~~~~~~

### `.github/workflows/ci.yml` @ `aaca687e9a2efd1e922a6f6978f9522a42957bc3`

~~~~~~markdown
# Primary automatic CI. Draft advisory is not a merge-eligible PASS.
name: Vellistry CI
'on':
  pull_request:
    types:
    - opened
    - synchronize
    - reopened
    - ready_for_review
    - edited
    - converted_to_draft
  push:
    branches:
    - main
  workflow_dispatch: {}
permissions:
  contents: read
concurrency:
  group: ${{ github.workflow }}-${{ github.event_name == 'pull_request' && github.event.pull_request.number || github.run_id }}
  cancel-in-progress: ${{ github.event_name == 'pull_request' }}
jobs:
  classify:
    name: Classify exact-head changes
    runs-on: ubuntu-latest
    timeout-minutes: 5
    outputs:
      application: ${{ steps.plan.outputs.application }}
      security: ${{ steps.plan.outputs.security }}
      recovery: ${{ steps.plan.outputs.recovery }}
      privileges: ${{ steps.plan.outputs.privileges }}
      mode: ${{ steps.plan.outputs.mode }}
    steps:
    - uses: actions/checkout@v4
      with:
        ref: ${{ github.event.pull_request.head.sha || github.sha }}
        persist-credentials: false
        fetch-depth: 0
    - name: Conservative change plan
      id: plan
      run: python scripts/ci_policy.py classify
  governance:
    outputs:
      compliance: ${{ steps.compliance.outputs.status }}
    name: ${{ needs.classify.outputs.mode == 'draft' && 'Draft advisory governance' || 'Governance and provenance' }}
    needs:
    - classify
    runs-on: ubuntu-latest
    timeout-minutes: 12
    steps:
    - uses: actions/checkout@v4
      with:
        ref: ${{ github.event.pull_request.head.sha || github.sha }}
        persist-credentials: false
        fetch-depth: 0
    - uses: actions/setup-python@v5
      with:
        python-version: '3.12'
    - name: Install YAML parser only
      run: python -m pip install 'PyYAML>=6,<7'
    - name: Lint all workflows with verified actionlint 1.7.12
      run: |
        curl --fail --silent --show-error --location --retry 3 \
          --output "$RUNNER_TEMP/actionlint.tar.gz" \
          https://github.com/rhysd/actionlint/releases/download/v1.7.12/actionlint_1.7.12_linux_amd64.tar.gz
        echo "8aca8db96f1b94770f1b0d72b6dddcb1ebb8123cb3712530b08cc387b349a3d8  $RUNNER_TEMP/actionlint.tar.gz" | sha256sum --check
        tar -xzf "$RUNNER_TEMP/actionlint.tar.gz" -C "$RUNNER_TEMP" actionlint
        "$RUNNER_TEMP/actionlint" -shellcheck=
    - name: Base-anchored PR compliance evidence
      id: compliance
      run: python -I scripts/run_pr_compliance.py
    - name: Run all current governance and negative contracts once
      run: python scripts/ci_governance.py
    - uses: actions/upload-artifact@v4
      with:
        name: vellistry-governed-handoff-packets
        path: |
          docs/agent-workflow/context-packs/VEL-CP-0002.md
          docs/agent-workflow/context-packs/VEL-CP-0003.md
          stage4-independent-agent-packet.zip
          level-b-test-packet.zip
        if-no-files-found: error
        retention-days: 14
  application:
    needs:
    - classify
    if: ${{ needs.classify.outputs.application == 'true' }}
    name: Application and applicable security
    runs-on: ubuntu-latest
    timeout-minutes: 40
    steps:
    - uses: actions/checkout@v4
      with:
        ref: ${{ github.event.pull_request.head.sha || github.sha }}
        persist-credentials: false
    - uses: pnpm/action-setup@v4
    - uses: actions/setup-node@v4
      with:
        node-version: '24'
        cache: pnpm
        cache-dependency-path: pnpm-lock.yaml
    - uses: actions/setup-python@v5
      with:
        python-version: '3.12'
    - name: Install one frozen workspace
      run: pnpm install --frozen-lockfile
    - name: Library isolation and unknown-save negative tests
      run: pnpm test:library-isolation
    - name: Workspace controller and organizer contract regressions
      run: pnpm test:workspace-contract
    - name: Protected workspace persistence unit regressions
      run: pnpm --filter @vellistry/api exec tsx --test src/modules/workspace/workspace-contract.spec.ts
    - name: Principal adapter binding regressions
      run: pnpm --filter @vellistry/api exec tsx --test src/modules/workspace/workspace-principal-adapter.spec.ts
    - name: Next.js authentication and MFA regressions
      run: pnpm test:auth-mfa
    - name: Hosted preflight regressions when source is integrated
      run: 'if test -f tests/hosted_supabase_preflight.test.mjs; then node --test tests/hosted_supabase_preflight.test.mjs; else echo ''NOTICE:
        PR68 hosted preflight is not on this checkout; not tested''; fi'
    - name: Build both applications once
      env:
        NEXT_TELEMETRY_DISABLED: '1'
      run: pnpm build
    - name: Typecheck both applications once
      run: pnpm check
    - name: Disposable PostgreSQL17 protected workspace acceptance
      run: python tests/workspace/persistence/run_pg17.py --disposable --cases docs/contracts/VEL-IMP002-PERSISTENCE-CASES.json
    - name: Stage only current-head disposable persistence evidence
      if: ${{ always() }}
      run: |
        python - <<'PY'
        import json, os, shutil, subprocess
        from pathlib import Path
        head = subprocess.check_output(['git','rev-parse','HEAD'], text=True).strip()
        dest = Path(os.environ['RUNNER_TEMP']) / 'workspace-persistence'
        dest.mkdir(exist_ok=True)
        for path in Path('docs/reports/evidence/VEL-TASK-0052').glob('*-runtime.json'):
            data = json.loads(path.read_text(encoding='utf-8'))
            if data.get('source_commit') != head:
                continue
            shutil.copyfile(path, dest/path.name)
            cases = path.with_name(data['run_id']+'-cases.json')
            if cases.exists():
                shutil.copyfile(cases, dest/cases.name)
        PY
    - name: Attach current-head synthetic persistence results
      if: ${{ always() }}
      uses: actions/upload-artifact@v4
      with:
        name: workspace-persistence-results
        path: ${{ runner.temp }}/workspace-persistence/*.json
        if-no-files-found: ignore
        retention-days: '7'
    - name: Pick free, temporary CI-only Supabase API/DB ports
      run: |
        python3 - <<'PY'
        import socket
        from pathlib import Path
        ports = []
        for _ in range(2):
            with socket.socket() as sock:
                sock.bind(("127.0.0.1", 0))
                ports.append(sock.getsockname()[1])
        cfg = Path("supabase/config.toml")
        raw = cfg.read_text(encoding="utf-8")
        for old, new in zip((54321, 54322), ports):
            marker = f"port = {old}"
            if marker not in raw:
                raise SystemExit(f"Local Supabase CI port marker missing: {marker}")
            raw = raw.replace(marker, f"port = {new}", 1)
        cfg.write_text(raw, encoding="utf-8")
        print(f"Disposable local Supabase API/DB CI ports selected: {ports}")
        PY
      if: ${{ needs.classify.outputs.security == 'true' }}
    - name: Start real disposable local Supabase services
      run: |
        # Retain database, Auth, PostgREST, API gateway. Exclude unrelated services.
        # Do not use a linked cloud project or production credentials.
        pnpm exec supabase start --exclude realtime,storage-api,imgproxy,mailpit,studio,edge-runtime,logflare,vector,supavisor,postgres-meta
      if: ${{ needs.classify.outputs.security == 'true' }}
    - name: Validate actual sign-up, RLS, tokens, cross-author data and logout behavior
      shell: bash
      run: |
        set -euo pipefail
        # CLI output is trusted and local; NEVER print its secret values.
        set -a
        source <(pnpm exec supabase status -o env)
        set +a
        export SUPABASE_URL="${API_URL}"
        export SUPABASE_PUBLISHABLE_KEY="${PUBLISHABLE_KEY:-${ANON_KEY:-}}"
        export SUPABASE_TEST_SERVICE_KEY="${SERVICE_ROLE_KEY:-${SECRET_KEY:-}}"
        export API_PORT=4100
        export API_HOST=127.0.0.1
        export VELLISTRY_TEST_API_URL=http://127.0.0.1:4100
        test -n "${SUPABASE_URL}"
        test -n "${SUPABASE_PUBLISHABLE_KEY}"
        test -n "${SUPABASE_TEST_SERVICE_KEY}"
        node apps/api/dist/main.js >nest-k2.log 2>&1 &
        SERVER_PID=$!
        cleanup() {
          kill "$SERVER_PID" 2>/dev/null || true
          # Restrict diagnostic output to application startup/error lines.
          tail -30 nest-k2.log || true
        }
        trap cleanup EXIT
        ready=0
        for i in $(seq 1 60); do
          if curl --fail --silent -o /dev/null http://127.0.0.1:4100/v1/health; then ready=1; break; fi
          sleep 1
        done
        if [ "$ready" != "1" ]; then echo "Nest API unavailable"; exit 1; fi
        node apps/api/tests/supabase-auth-rls.integration.mjs
        node apps/api/tests/k2b-session-exposure.integration.mjs
        # Observe auth.sessions row removal under local/global logout, separately from JWT validity.
        node apps/api/tests/k2b-active-session-row.integration.mjs
        # This final experiment REVOKES grants and intentionally breaks Nest's
        # existing PostgREST book transport; run it last in disposable CI.
        node apps/api/tests/k2b-data-api-lockdown.integration.mjs
        # Research-only restricted Nest / Postgres route proof uses a separate role.
        # Run AFTER old route is deliberately broken by grant-lockdown diagnostic.
        test -n "${DB_URL:-}"
        node apps/api/tests/k2b-private-nest-gateway.integration.mjs
      if: ${{ needs.classify.outputs.security == 'true' }}
    - name: Attach synthetic-only results (no token or password)
      if: ${{ always() && needs.classify.outputs.security == 'true' }}
      uses: actions/upload-artifact@v4
      with:
        name: k2-supabase-auth-rls-results
        path: |
          k2-auth-rls-results.json
          k2b-session-observations.json
          k2b-live-session-row-observations.json
          k2b-lockdown-observations.json
          k2b-private-gateway-observations.json
        if-no-files-found: ignore
        retention-days: '7'
    - name: Shut down disposable local Supabase
      if: ${{ always() && needs.classify.outputs.security == 'true' }}
      run: pnpm exec supabase stop --no-backup || true
  recovery:
    name: Merged PostgreSQL CAS and restore contract
    runs-on: ubuntu-latest
    timeout-minutes: 16
    services:
      postgres:
        image: postgres:16
        env:
          POSTGRES_USER: postgres
          POSTGRES_PASSWORD: pair06synthetic
          POSTGRES_DB: pair06db
        ports:
        - 5432:5432
        options: --health-cmd "pg_isready -U postgres -d pair06db" --health-interval 5s --health-timeout 3s --health-retries 10
    env:
      PGPASSWORD: pair06synthetic
      PAIR06_DATABASE_URL: postgresql://postgres:pair06synthetic@127.0.0.1:5432/pair06db
    steps:
    - uses: actions/checkout@v4
      with:
        ref: ${{ github.event.pull_request.head.sha || github.sha }}
        persist-credentials: false
    - uses: actions/setup-python@v5
      with:
        python-version: '3.12'
    - name: Install PostgreSQL client binaries
      run: |
        sudo apt-get update -qq
        sudo apt-get install -y postgresql-client
    - name: Rerun disposable Pair 06 atomicity and independent restore
      run: python -m unittest discover -s docs/research/experiments -p 'test_pair06_postgres_operations.py' -v
    needs:
    - classify
    if: ${{ needs.classify.outputs.recovery == 'true' }}
  privileges:
    name: Integrated SQL privilege regression
    needs:
    - classify
    if: ${{ needs.classify.outputs.privileges == 'true' }}
    runs-on: ubuntu-latest
    timeout-minutes: 10
    container: postgres:17
    services:
      postgres:
        image: postgres:17
        env:
          POSTGRES_HOST_AUTH_METHOD: trust
        options: --health-cmd pg_isready --health-interval 5s --health-timeout 5s --health-retries 10
    env:
      PGHOST: postgres
      PGUSER: postgres
      PGDATABASE: postgres
    steps:
    - uses: actions/checkout@v4
      with:
        ref: ${{ github.event.pull_request.head.sha || github.sha }}
        persist-credentials: false
    - name: Original migrations must demonstrate the grant regression
      run: |
        if psql -X -v ON_ERROR_STOP=1 -v skip_hardening=true -f tests/book_privileges_regression.sql > before.log 2>&1; then
          cat before.log
          exit 1
        fi
        cat before.log
        grep -q 'Privilege mismatch: role=anon table=books privilege=TRUNCATE expected=f' before.log
    - name: Integrated correction must pass the privilege matrix
      run: psql -X -v ON_ERROR_STOP=1 -f tests/book_privileges_regression.sql
  gate:
    name: Vellistry CI gate
    needs:
    - classify
    - governance
    - application
    - recovery
    - privileges
    if: ${{ always() }}
    runs-on: ubuntu-latest
    timeout-minutes: 5
    steps:
    - uses: actions/checkout@v4
      with:
        ref: ${{ github.event.pull_request.head.sha || github.sha }}
        persist-credentials: false
        fetch-depth: 0
    - uses: actions/setup-python@v5
      with:
        python-version: '3.12'
    - name: Install YAML parser for static compliance
      run: python -m pip install 'PyYAML>=6,<7'
    - name: Recompute base-anchored PR compliance evidence
      id: compliance
      run: python -I scripts/run_pr_compliance.py
    - name: Reject failed, cancelled, missing or skipped applicable checks
      env:
        CI_NEEDS: ${{ toJSON(needs) }}
      run: python scripts/ci_policy.py gate
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0076/OWNER-SCOPE.md` @ `e21bfdd19e182591ec04786deee48f7a76a5fc62`

~~~~~~markdown
# Owner authorization — IMP003E

FACT: Owner dispatch in the active conversation authorizes mandatory native Chromium acceptance in the existing application CI job. Relay: https://github.com/Ben-001-sys/Vellistry/issues/131#issuecomment-6580279431 . This is owner instruction relayed by Codex, not independent owner authentication.

Starting main20f4b5a4ab357dc0757678d689b79a67af687518 and tree172ee885446fa73d243db96333844eb1cda8bf01 verified; no open PRs. Task0076 absent from reviewed governance history. Owner root edits and all existing worktrees are preserved.

Authorize only .github/workflows/ci.yml, package.json, pnpm-lock.yaml, tests/editor/durable-draft-browser.mjs, tests/test_ci_policy.py, CURRENT-STATE.md and task-specific governance/evidence. Add exactly playwright1.64.0 as development dependency, frozen lockfile, matching Chromium with Linux dependencies. No extra automatic job/workflow. Preserve triggers, exact-head checkout, read-only permissions, draft advisory, security, PostgreSQL/recovery, builds/typechecks, governance and final gate. Do not change evaluator, loader or ci_policy.py.

Require all41 prior cases, real persistent Chromium, source-bound machine-readable results, cleanup, bounded synthetic-only artifacts, strict bypass negatives, fresh-runner full execution before Ready, distinct final-head review and unmerged PR. No filters/historical overrides in required acceptance; no continue-on-error or masking. No profile/database/cookie artifacts.

No hosted Supabase/Auth/SQL, production features/routes/security changes, private writing, credentials, deployment, paid services or merge. R01-R08 NOT_RUN; N12/historical EPERM BLOCKED; legacy privileges SKIPPED unless actual qualifying execution. Issues108/131 OPEN. Old remediation authority EXPIRED. New scope needs explicit amendment.
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0076/CONTRACT.md` @ `8a75d50c768c81763e33de404235b0a831a37ab3`

~~~~~~markdown
# Bounded contract

FACT: Task0075 baseline is the committed native-final-browser-results.json, not an inferred case count. Pin its exact41 names/hash and preserve the historical source/outcomes. Existing browser uses external Playwright and optional filters; replace required invocation with frozen project runtime and strict complete-evidence validation in the same allowed runner path. Preserve every actual editor test body.

IMPLEMENTATION: package script test:durable-drafts launches matching Playwright Chromium; validation-only CLI checks JSON without browser/dependency initialization. Exactly one unconditional install, full execution and validation step in existing application job after frozen install. Upload only two named synthetic files, retention7days. No cached developer runtime or arbitrary executable. Browser evidence includes exact HEAD, Playwright/browser/build/executable identity, bundle SHA256, case inventory, execution flags, result/failure classification and context/profile/socket/listener cleanup. All required cases PASS and cleanup complete before success.

NEGATIVES: removed/replaced/conditional/continued/masked run, absent install, historical/filter, duplicate/missing/failed case, missing file, wrong SHA, cleanup failure, incorrect app gate, false Ready and Draft eligibility. Existing tests discover new Python coverage automatically. No protected-control changes.

VERIFY: frozen install; actual matching Chromium install/version/full41; evidence validation; targeted policy negatives; all existing editor/workspace/Library/MFA/principal/preflight/persistence units; existing disposable PG/HTTP/CAS/restore when available; build/check; full governance and trusted-main loader. Local unavailable Docker and reviewer execution are BLOCKED, not PASS. Open Draft, obtain fresh GitHub full execution, review final head, then Ready exact-head CI. No merge.

PROPOSAL: owner reviews complete diff/evidence/risks and makes separate integration decision. Browser acceptance is local/CI synthetic evidence, not production privacy/session/persistence assurance.
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0076/SOURCE-REFERENCES.json` @ `9624cf2dcc452ff02a7b988d6244e21bb1eac532`

~~~~~~markdown
{
  "sources": [
    {
      "path": "tests/editor/durable-draft-browser.mjs",
      "commit": "20f4b5a4ab357dc0757678d689b79a67af687518",
      "sha256": "bebae8f0406c5b4ad7b77143eddd6296274120d62e22daae45339e520713bc94",
      "bytes": 31842
    },
    {
      "path": "tests/test_ci_policy.py",
      "commit": "20f4b5a4ab357dc0757678d689b79a67af687518",
      "sha256": "a833c779a3cce92b2427cc21386820e1c48f011db6e6771d76047dc19aa2c6eb",
      "bytes": 31226
    },
    {
      "path": "package.json",
      "commit": "20f4b5a4ab357dc0757678d689b79a67af687518",
      "sha256": "f7babe4ff35f0cfda692a7fe2870faa8737f2eb39c8ec6b7b1d9f5feef34838c",
      "bytes": 1509
    },
    {
      "path": "pnpm-lock.yaml",
      "commit": "20f4b5a4ab357dc0757678d689b79a67af687518",
      "sha256": "b2baacc150872cdcc65ba08838fdd5c84c73abf1979ecc6af939dcce4ca37da1",
      "bytes": 109685
    },
    {
      "path": "scripts/ci_policy.py",
      "commit": "20f4b5a4ab357dc0757678d689b79a67af687518",
      "sha256": "44ed7945b2e14e2fc2ee5d343553856d216e35f24dee383a15c4030c2609dc1c",
      "bytes": 10162
    },
    {
      "path": "scripts/pr_compliance.py",
      "commit": "20f4b5a4ab357dc0757678d689b79a67af687518",
      "sha256": "117eb9982c2935dbbcf2c42856c42c6eaec780fe6f2bb7bb1951a29d49d30452",
      "bytes": 23233
    },
    {
      "path": "scripts/run_pr_compliance.py",
      "commit": "20f4b5a4ab357dc0757678d689b79a67af687518",
      "sha256": "138c22d62272515f7fdf43c41a870414f393189185ba92cee139be8011a1db25",
      "bytes": 3357
    },
    {
      "path": "docs/reports/evidence/VEL-TASK-0075/native-final-browser-results.json",
      "commit": "20f4b5a4ab357dc0757678d689b79a67af687518",
      "sha256": "e2d4f3affcd8d10137f06a301c385d1c6aa41630cfb574847614dc779ce0aed9",
      "bytes": 5246
    }
  ],
  "playwright": {
    "version": "1.64.0",
    "node": ">=20",
    "registry_integrity": "sha512-kVzTnYFYEyQ9RGzBjNCd2+yEqWmVbxl3AHPynv3qQ6JTjv4a+kwRcnqQwIpuP3NnrnIrE/Q6wWAIAvMfIE2/Yg=="
  }
}
~~~~~~

## Execution reporting
Return an ExecutionBundle with FACT / INTERPRETATION / PROPOSAL sections,
tests actually performed, changes, evidence gaps, and pending owner approval.
