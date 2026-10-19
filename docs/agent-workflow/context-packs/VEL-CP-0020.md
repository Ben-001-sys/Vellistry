---
id: VEL-CP-0020
title: 'Context for VEL-TASK-0020: Selective no-network preflight adoption preserving
  PR65/68 origins'
type: context-pack
status: prepared
created_at: '2026-10-19'
version: 0.1.0
task_id: VEL-TASK-0020
base_commit: 5674ab345b82d864b2252dcad1de09dd8f05a9e7
task_blob_sha: 58a3d0d038edec153a5dc43b7d5d0b61c179c43c
inputs:
- path: PROJECT-CONSTITUTION.md
  role: scope-and-exact-source
  git_blob_sha: 61f79c4dcb47bd99291c16490e8c00692e2ab23b
  source_status: accepted
- path: AGENTS.md
  role: scope-and-exact-source
  git_blob_sha: 2feca4ec9ee0f11f5b6ac089c1d5c826d0e043ce
  source_status: active
- path: docs/agent-workflow/PR-COMPLIANCE.md
  role: scope-and-exact-source
  git_blob_sha: 5f4845623aef3abb15fba7fbe8e78474902cca00
  source_status: unrecorded
- path: package.json
  role: scope-and-exact-source
  git_blob_sha: c9560dac41c1c1d68b596393c0fa2de65fdef7d2
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0020/hosted_supabase_preflight.mjs.txt
  role: scope-and-exact-source
  git_blob_sha: 0a225d44bc247a8b27ef120fb1e18dd8ace4c152
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0020/hosted_supabase_preflight.test.mjs.txt
  role: scope-and-exact-source
  git_blob_sha: dfb48d0c4a7782ebfa0aa2879b29d2ecf4f8716c
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0020/OWNER-SCOPE.md
  role: scope-and-exact-source
  git_blob_sha: c30f030ac576a5e4605b81543e1f048dedb39dfd
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0020/SOURCE-MAP.json
  role: scope-and-exact-source
  git_blob_sha: b97bc6585e29c5f7b570d90c43e3e1b40505463e
  source_status: unrecorded
source_gaps:
- id: AUTH
  limitation: Direct owner mandate/continuation authorizes scoped adoption; Issue71
    index not authenticated owner identity.
- id: HOSTED
  limitation: Configuration consistency only; doesnot test cloud/Auth/RLS/migration
    state.
- id: EXAMPLES
  limitation: Env examples excluded by trusted path policy; separate governed correction
    if needed, no bypass.
prepared_by: agent_workflow.py
---

# VEL-CP-0020 — Selective no-network preflight adoption preserving PR65/68 origins

## Objective
Adopt safe local-only preflight and synthetic negative tests on current main; activate existing focused CI coverage without hosted access or SQL changes.

## Scope
**In:** scripts/hosted_supabase_preflight.mjs; tests/hosted_supabase_preflight.test.mjs; package.json; docs/agent-workflow/tasks/VEL-TASK-0020.yaml; docs/agent-workflow/context-packs/VEL-CP-0020.md; docs/agent-workflow/execution-bundles/VEL-EB-0020.md; docs/agent-workflow/inputs/VEL-TASK-0020/*; docs/agent-workflow/PR-COMPLIANCE.yaml; docs/reports/VEL-PREFLIGHT-ADOPTION-*; docs/reports/evidence/VEL-PREFLIGHT-ADOPTION/*
**Out:** SQL/app/CI/accepted authority/env files and secret retrieval; Hosted/paid/private/production/settings/merge and old PR branch mutation

## Evidence and authority constraints
The text below is a readable rendering of pinned Git blobs; exact raw bytes remain recoverable from the recorded commit/blob SHAs. Recorded source statuses remain in force: draft research is not accepted requirements. Original unarchived uploads are not independently verified merely by being mentioned.

**Known source gaps:**
- AUTH: Direct owner mandate/continuation authorizes scoped adoption; Issue71 index not authenticated owner identity.
- HOSTED: Configuration consistency only; doesnot test cloud/Auth/RLS/migration state.
- EXAMPLES: Env examples excluded by trusted path policy; separate governed correction if needed, no bypass.

## Permissions and acceptance
**Allowed:** Read exact source/history and currentmain, Commit bounded task/source then generate validate commit pack, Adopt only scoped files; frozen pinned dependency install, synthetic tests, build/typecheck/library and fullCI, Push isolated branch anddraftPR; reportevidence
**Owner approval required:** Merge, SQL paths/integration, any hosted action, secrets/private/paid/production/admin or scopeexpansion
**Acceptance criteria:**
- No network/DB calls in preflight; tests use only disposable invented files
- Reject wrong target, public secret key, runtime precedence overrides; sanitized diagnostics
- Retain original ChatGPT origin and Codex corrections; preserve currentpackage/CI/security
- No real env files opened/printed/modified; SQL and hosted behavior NOT_TESTED
- Exact-head compliance, fullCI and review with owner pending

## Deliverables
- Task/source and immutable validated committed CP before implementation
- Preserved exact PR65/68 helper/tests with attributed changes if needed
- Focused actual negative tests, app/library checks/build and fullCI
- Source-bound EB, draftPR and independent review

## Pinned source snapshots
Git commit: `5674ab345b82d864b2252dcad1de09dd8f05a9e7`. Read source statuses independently from task intent.

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

### `AGENTS.md` @ `2feca4ec9ee0f11f5b6ac089c1d5c826d0e043ce`

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

No automatic PR-to-task enforcement is claimed as authenticated identity or owner approval; [Issue #73](https://github.com/Ben-001-sys/Vellistry/issues/73) now has a proposed [static compliance contract](docs/agent-workflow/PR-COMPLIANCE.md) under Task0010. Its base-anchored checks, provisional bootstrap and owner-protected review limits must be inspected before adoption. Read the current [operating model](docs/agent-workflow/IMPLEMENTATION-OPERATING-MODEL.md) for design/coding task exceptions versus private-pilot/release gates.

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

### `package.json` @ `c9560dac41c1c1d68b596393c0fa2de65fdef7d2`

~~~~~~markdown
{
  "name": "vellistry",
  "private": true,
  "packageManager": "pnpm@10.18.0",
  "scripts": {
    "build": "pnpm --filter @vellistry/api build && pnpm --filter @vellistry/web build",
    "check": "pnpm --filter @vellistry/api typecheck && pnpm --filter @vellistry/web typecheck",
    "test:library-isolation": "pnpm --filter @vellistry/api exec tsx --test src/modules/books/book-create-input.spec.ts ../web/src/lib/library/book-library-state.test.ts ../web/src/lib/library/book-library-session.test.ts",
    "dev:web": "pnpm --filter @vellistry/web dev",
    "dev:api": "pnpm --filter @vellistry/api dev",
    "supabase:start": "supabase start",
    "supabase:stop": "supabase stop",
    "supabase:status": "supabase status",
    "supabase:reset": "supabase db reset"
  },
  "devDependencies": {
    "supabase": "^2.0.0",
    "typescript": "^5.8.0"
  }
}
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0020/hosted_supabase_preflight.mjs.txt` @ `0a225d44bc247a8b27ef120fb1e18dd8ace4c152`

~~~~~~markdown
#!/usr/bin/env node
/**
 * Vellistry hosted-development configuration preflight.
 *
 * Reads only ignored local env files; makes NO network calls or DB changes.
 * Does not print project keys, credentials, or file contents. Never use this
 * result as proof of a connected database, RLS, schema, or login.
 */
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { parseEnv } from "node:util";
import { pathToFileURL } from "node:url";

export const WEB_ENV = "apps/web/.env.local";
export const API_ENV = "apps/api/.env";
const VALID_REF = /^[a-z0-9]{20}$/;
const PUBLISHABLE = /^sb_publishable_[A-Za-z0-9_-]{8,}$/;

function correctCloudUrl(value, projectRef) {
  if (typeof value !== "string" || !VALID_REF.test(projectRef)) return false;
  try {
    const url = new URL(value);
    return url.protocol === "https:"
      && url.hostname === projectRef + ".supabase.co"
      && url.port === ""
      && url.pathname === "/"
      && url.search === ""
      && url.hash === ""
      && url.username === ""
      && url.password === "";
  } catch {
    return false;
  }
}

/** Pure, synthetic-testable evaluation. Error text deliberately excludes input values. */
export function validateHostedConfig({ web, api, expectedProjectRef }) {
  const errors = [];
  if (!VALID_REF.test(expectedProjectRef ?? "")) {
    errors.push("Expected Supabase project reference must be 20 lowercase letters/digits.");
    return { ok: false, errors };
  }

  if (!correctCloudUrl(web.NEXT_PUBLIC_SUPABASE_URL, expectedProjectRef)) {
    errors.push("Web Supabase URL must be the HTTPS API URL of the selected development project.");
  }
  if (!correctCloudUrl(api.SUPABASE_URL, expectedProjectRef)) {
    errors.push("API Supabase URL must match the selected HTTPS development project.");
  }
  const webKey = web.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  const apiKey = api.SUPABASE_PUBLISHABLE_KEY;
  if (typeof webKey !== "string" || !PUBLISHABLE.test(webKey)) {
    errors.push("Web must use a modern sb_publishable_ key, never a secret/service_role key.");
  }
  if (typeof apiKey !== "string" || !PUBLISHABLE.test(apiKey)) {
    errors.push("API must use a modern sb_publishable_ key, never a secret/service_role key.");
  }
  if (typeof webKey === "string" && typeof apiKey === "string" && webKey !== apiKey) {
    errors.push("Web and API must use the same publishable key.");
  }
  if (web.VELLISTRY_API_BASE_URL !== "http://127.0.0.1:4100") {
    errors.push("Web BFF must target the loopback Nest API at http://127.0.0.1:4100.");
  }
  if (api.API_HOST !== "127.0.0.1" || api.API_PORT !== "4100") {
    errors.push("Nest API must listen on 127.0.0.1:4100 during desktop development.");
  }
  return { ok: errors.length === 0, errors };
}

function readLocalEnv(root, name) {
  const path = resolve(root, name);
  if (!existsSync(path)) return { missing: true, values: {} };
  try {
    return { missing: false, values: parseEnv(readFileSync(path, "utf8")) };
  } catch {
    // Never reflect a parser exception that may contain confidential source text.
    return { missing: false, parseError: true, values: {} };
  }
}


/**
 * This bounded guard supports one explicit file per app. Next and dotenv can
 * otherwise override those files. Inspect names/presence only: never load or
 * print inherited credential values or competing file contents.
 */
function runtimeLayoutErrors(root, environment) {
  const errors = [];
  const runtimeNames = ["NEXT_PUBLIC_SUPABASE_URL", "NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY",
    "VELLISTRY_API_BASE_URL", "SUPABASE_URL", "SUPABASE_PUBLISHABLE_KEY", "API_HOST", "API_PORT"];
  if (runtimeNames.some(name => Object.hasOwn(environment, name))
    || Object.keys(environment).some(name => name.toUpperCase().startsWith("DOTENV_CONFIG_"))) {
    errors.push("Inherited app or dotenv configuration can override the checked files. Use a clean shell for this file-only preflight; values were not read or printed.");
  }
  if (environment.NODE_ENV !== undefined && !["development", "production"].includes(environment.NODE_ENV)) {
    errors.push("This desktop preflight requires development or production mode; Next test mode does not load .env.local.");
  }
  for (const name of [".env.development.local", ".env.production.local", ".env.test.local",
    ".env.development", ".env.production", ".env.test", ".env"]) {
    if (existsSync(resolve(root, "apps/web", name))) {
      errors.push("Competing apps/web/" + name + " is outside this file-only preflight. Review it without overwriting existing files.");
    }
  }
  return errors;
}
/** Produces safe, non-secret stdout. Does not contact Supabase. */
export function checkLocalEnvironment(root, expectedProjectRef, { environment = process.env } = {}) {
  const web = readLocalEnv(root, WEB_ENV);
  const api = readLocalEnv(root, API_ENV);
  const errors = runtimeLayoutErrors(root, environment);
  if (web.missing) errors.push("Missing " + WEB_ENV + " (copy its .env.example locally).");
  if (api.missing) errors.push("Missing " + API_ENV + " (copy its .env.example locally).");
  if (web.parseError) errors.push("Could not parse " + WEB_ENV + ".");
  if (api.parseError) errors.push("Could not parse " + API_ENV + ".");
  if (errors.length === 0) {
    errors.push(...validateHostedConfig({
      web: web.values,
      api: api.values,
      expectedProjectRef,
    }).errors);
  }
  return {
    ok: errors.length === 0,
    messages: errors.length === 0
      ? ["PASS: local Web/API cloud settings are internally consistent.",
         "NOT TESTED: cloud connectivity, database schema, RLS, Auth, or real book saves."]
      : ["BLOCKED: hosted development configuration needs attention.", ...errors],
  };
}

if (process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url) {
  const ref = process.argv[2];
  const result = checkLocalEnvironment(process.cwd(), ref);
  for (const message of result.messages) console.log(message);
  if (!result.ok) process.exitCode = 1;
}
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0020/hosted_supabase_preflight.test.mjs.txt` @ `dfb48d0c4a7782ebfa0aa2879b29d2ecf4f8716c`

~~~~~~markdown
import { spawnSync } from "node:child_process";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import assert from "node:assert/strict";
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { test } from "node:test";
import { checkLocalEnvironment, validateHostedConfig } from "../scripts/hosted_supabase_preflight.mjs";

const ref = "lflkcrnriitrbclangyr";
const url = "https://" + ref + ".supabase.co";
const key = "sb_publishable_synthetic_only_0123456789";
const good = () => ({
  expectedProjectRef: ref,
  web: {
    NEXT_PUBLIC_SUPABASE_URL: url,
    NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: key,
    VELLISTRY_API_BASE_URL: "http://127.0.0.1:4100",
  },
  api: {
    SUPABASE_URL: url,
    SUPABASE_PUBLISHABLE_KEY: key,
    API_HOST: "127.0.0.1",
    API_PORT: "4100",
  },
});

test("accepts coherent hosted project URL, modern publishable key and loopback Nest", () => {
  assert.deepEqual(validateHostedConfig(good()), { ok: true, errors: [] });
});

test("rejects another cloud project, even if Web and API agree on that project", () => {
  const cfg = good();
  cfg.web.NEXT_PUBLIC_SUPABASE_URL = "https://differentproject123.supabase.co";
  cfg.api.SUPABASE_URL = cfg.web.NEXT_PUBLIC_SUPABASE_URL;
  assert.equal(validateHostedConfig(cfg).ok, false);
});

test("rejects localhost Supabase URL; local containers are not the selected backend", () => {
  const cfg = good();
  cfg.web.NEXT_PUBLIC_SUPABASE_URL = "http://127.0.0.1:54321";
  assert.equal(validateHostedConfig(cfg).ok, false);
});

test("rejects secret/service-role key in browser and backend publishable slot", () => {
  const cfg = good();
  cfg.web.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY = "sb_secret_do_not_use_0123456789";
  cfg.api.SUPABASE_PUBLISHABLE_KEY = "sb_secret_do_not_use_0123456789";
  const result = validateHostedConfig(cfg);
  assert.equal(result.ok, false);
  assert.ok(result.errors.length >= 2);
  assert.equal(result.errors.join(" ").includes("do_not_use_0123456789"), false);
});

test("rejects legacy JWT key in the modern publishable-key slot", () => {
  const cfg = good();
  cfg.web.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiJ9.payload.signature";
  assert.equal(validateHostedConfig(cfg).ok, false);
});

test("rejects mismatched Web/API project publishable keys", () => {
  const cfg = good();
  cfg.api.SUPABASE_PUBLISHABLE_KEY = "sb_publishable_different_synthetic_123456";
  assert.equal(validateHostedConfig(cfg).ok, false);
});

test("rejects externally exposed API host and wrong BFF upstream", () => {
  const cfg = good();
  cfg.api.API_HOST = "0.0.0.0";
  cfg.web.VELLISTRY_API_BASE_URL = "https://api.example.test";
  assert.equal(validateHostedConfig(cfg).ok, false);
});

test("rejects invalid or omitted expected project reference", () => {
  assert.equal(validateHostedConfig({ ...good(), expectedProjectRef: "" }).ok, false);
  assert.equal(validateHostedConfig({ ...good(), expectedProjectRef: "production" }).ok, false);
});

test("missing local files are reported without consulting environment or network", () => {
  const root = mkdtempSync(join(tmpdir(), "vellistry-hosted-env-"));
  try {
    const result = checkLocalEnvironment(root, ref);
    assert.equal(result.ok, false);
    assert.ok(result.messages.join(" ").includes("apps/web/.env.local"));
    assert.ok(result.messages.join(" ").includes("apps/api/.env"));
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("reads ignored local files, never emits key values in success output", () => {
  const root = mkdtempSync(join(tmpdir(), "vellistry-hosted-env-"));
  try {
    mkdirSync(join(root, "apps/web"), { recursive: true });
    mkdirSync(join(root, "apps/api"), { recursive: true });
    writeFileSync(join(root, "apps/web/.env.local"),
      "NEXT_PUBLIC_SUPABASE_URL=" + url + "\n"
      + "NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=" + key + "\n"
      + "VELLISTRY_API_BASE_URL=http://127.0.0.1:4100\n");
    writeFileSync(join(root, "apps/api/.env"),
      "SUPABASE_URL=" + url + "\n"
      + "SUPABASE_PUBLISHABLE_KEY=" + key + "\n"
      + "API_HOST=127.0.0.1\nAPI_PORT=4100\n");
    const result = checkLocalEnvironment(root, ref);
    assert.equal(result.ok, true);
    assert.equal(result.messages.join(" ").includes(key), false);
    assert.match(result.messages[1], /NOT TESTED/);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("invalid local config never leaks the offending key in diagnostics", () => {
  const root = mkdtempSync(join(tmpdir(), "vellistry-hosted-env-"));
  const secret = "sb_secret_fake_private_123456789";
  try {
    mkdirSync(join(root, "apps/web"), { recursive: true });
    mkdirSync(join(root, "apps/api"), { recursive: true });
    writeFileSync(join(root, "apps/web/.env.local"),
      "NEXT_PUBLIC_SUPABASE_URL=" + url + "\n"
      + "NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=" + secret + "\n"
      + "VELLISTRY_API_BASE_URL=http://127.0.0.1:4100\n");
    writeFileSync(join(root, "apps/api/.env"),
      "SUPABASE_URL=" + url + "\n"
      + "SUPABASE_PUBLISHABLE_KEY=" + key + "\n"
      + "API_HOST=127.0.0.1\nAPI_PORT=4100\n");
    const result = checkLocalEnvironment(root, ref);
    assert.equal(result.ok, false);
    assert.equal(result.messages.join(" ").includes(secret), false);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});


function fixture(run) {
  const root = mkdtempSync(join(tmpdir(), "vellistry-preflight-codex-"));
  const cfg = good();
  try {
    mkdirSync(join(root, "apps/web"), { recursive: true });
    mkdirSync(join(root, "apps/api"), { recursive: true });
    for (const [app, values, file] of [["web", cfg.web, ".env.local"], ["api", cfg.api, ".env"]]) {
      writeFileSync(join(root, "apps", app, file),
        Object.entries(values).map(([name, value]) => name + "=" + value).join("\n") + "\n");
    }
    return run(root);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
}

test("does not pass file validation when inherited runtime settings override those files", () => fixture(root => {
  for (const name of ["NEXT_PUBLIC_SUPABASE_URL", "NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY",
    "VELLISTRY_API_BASE_URL", "SUPABASE_URL", "SUPABASE_PUBLISHABLE_KEY", "API_HOST", "API_PORT",
    "DOTENV_CONFIG_PATH"]) {
    const result = checkLocalEnvironment(root, ref, { environment: { [name]: "synthetic_override_never_print" } });
    assert.equal(result.ok, false, name);
    assert.equal(result.messages.join(" ").includes("synthetic_override_never_print"), false);
  }
}));

test("rejects competing Next env files that the actual runtime would also read", () => fixture(root => {
  for (const name of [".env.development.local", ".env.production.local", ".env.test.local",
    ".env.development", ".env.production", ".env.test", ".env"]) {
    const path = join(root, "apps/web", name);
    writeFileSync(path, "NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_secret_synthetic_never_print\n");
    const before = readFileSync(path, "utf8");
    const result = checkLocalEnvironment(root, ref, { environment: {} });
    assert.equal(result.ok, false, name);
    assert.equal(result.messages.join(" ").includes("sb_secret_synthetic_never_print"), false);
    assert.equal(readFileSync(path, "utf8"), before);
    rmSync(path);
  }
}));

test("rejects test mode because Next does not load the required .env.local there", () => fixture(root => {
  assert.equal(checkLocalEnvironment(root, ref, { environment: { NODE_ENV: "test" } }).ok, false);
}));

test("actual Next runtime precedence demonstrates why competing env files must block preflight", () => fixture(root => {
  const webRequire = createRequire(new URL("../apps/web/package.json", import.meta.url));
  const nextRequire = createRequire(webRequire.resolve("next/package.json"));
  const envLoader = nextRequire.resolve("@next/env");
  writeFileSync(join(root, "apps/web/.env.development.local"),
    "NEXT_PUBLIC_SUPABASE_URL=https://differentproject1234.supabase.co\n");
  const script = "const {loadEnvConfig}=require(process.argv[1]);"
    + "loadEnvConfig(process.argv[2],true,{info(){},error(){}},true);"
    + "if(process.env.NEXT_PUBLIC_SUPABASE_URL!=='https://differentproject1234.supabase.co') process.exit(2);";
  const observed = spawnSync(process.execPath, ["-e", script, envLoader, join(root, "apps/web")],
    { encoding: "utf8", env: cleanChildEnvironment() });
  assert.equal(observed.status, 0);
  assert.equal(checkLocalEnvironment(root, ref, { environment: {} }).ok, false);
}));

function cleanChildEnvironment() {
  return { PATH: process.env.PATH ?? "", SystemRoot: process.env.SystemRoot ?? "" };
}

test("actual CLI succeeds and rejects unsafe config without printing synthetic key values", () => fixture(root => {
  const script = fileURLToPath(new URL("../scripts/hosted_supabase_preflight.mjs", import.meta.url));
  const invoke = () => spawnSync(process.execPath, [script, ref],
    { cwd: root, encoding: "utf8", env: cleanChildEnvironment() });
  const beforeWeb = readFileSync(join(root, "apps/web/.env.local"), "utf8");
  const beforeApi = readFileSync(join(root, "apps/api/.env"), "utf8");
  const success = invoke();
  assert.equal(success.status, 0);
  assert.match(success.stdout, /NOT TESTED/);
  assert.equal(success.stdout.includes(key), false);
  assert.equal(readFileSync(join(root, "apps/web/.env.local"), "utf8"), beforeWeb);
  assert.equal(readFileSync(join(root, "apps/api/.env"), "utf8"), beforeApi);
  const fakeSecret = "sb_secret_synthetic_cli_never_print";
  writeFileSync(join(root, "apps/web/.env.local"),
    beforeWeb.replace(key, fakeSecret));
  const failure = invoke();
  assert.equal(failure.status, 1);
  assert.equal((failure.stdout + failure.stderr).includes(fakeSecret), false);
}));

test("actual CLI fails safely with absent env files", () => {
  const root = mkdtempSync(join(tmpdir(), "vellistry-missing-env-"));
  try {
    const script = fileURLToPath(new URL("../scripts/hosted_supabase_preflight.mjs", import.meta.url));
    const result = spawnSync(process.execPath, [script, ref],
      { cwd: root, encoding: "utf8", env: cleanChildEnvironment() });
    assert.equal(result.status, 1);
    assert.match(result.stdout, /BLOCKED/);
    assert.equal(result.stderr, "");
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("cloud URL rejects credentials, ports, lookalike hosts, path and query additions", () => {
  for (const bad of ["http://" + ref + ".supabase.co", url + ".example.test", url + ":444",
    "https://user:synthetic_password@" + ref + ".supabase.co", url + "/rest/v1",
    url + "?token=synthetic", url + "#fragment"]) {
    const cfg = good();
    cfg.web.NEXT_PUBLIC_SUPABASE_URL = bad;
    assert.equal(validateHostedConfig(cfg).ok, false);
    assert.equal(validateHostedConfig(cfg).errors.join(" ").includes("synthetic_password"), false);
  }
});

test("unreadable env paths fail without reflecting filesystem or parser errors", () => fixture(root => {
  rmSync(join(root, "apps/web/.env.local"));
  mkdirSync(join(root, "apps/web/.env.local"));
  const result = checkLocalEnvironment(root, ref, { environment: {} });
  assert.equal(result.ok, false);
  assert.match(result.messages.join(" "), /Could not parse/);
}));
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0020/OWNER-SCOPE.md` @ `c30f030ac576a5e4605b81543e1f048dedb39dfd`

~~~~~~markdown
# Direct owner master-mandate implementation scope, 2026-10-19
Owner explicitly authorizes safe selective PR65/68 adoption and ordinary repository implementation through governed tasks. Latest continuation preserves no delegated merge assumption and all hosted/migration/private-data prohibitions. Task0020 adopts only the no-network local configuration preflight helper, synthetic tests and package script. Do not run it on owner env files; tests create disposable invented env fixtures. No .env example edits because current trusted validator forbids those paths; do not weaken validator to bypass. App/browser/SQL/CI/settings unchanged. Original ChatGPT feature and later Codex corrections retained with exact source/hash evidence, not claimed originally implemented here. Existing ci.yml already executes focused preflight tests when present. New tests if demonstrated safe-code defects appear, within these same paths. Separate Task/CP before edits; exact-head CI/review; owner merge pending.
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0020/SOURCE-MAP.json` @ `b97bc6585e29c5f7b570d90c43e3e1b40505463e`

~~~~~~markdown
[
  {
    "path": "scripts/hosted_supabase_preflight.mjs",
    "source": "cbb379fa4a4eaa9f576f3abcce2c2258d22cc551",
    "blob": "0a225d44bc247a8b27ef120fb1e18dd8ace4c152",
    "sha256": "79dfb0b66217437d20deeaf4a1df42675350abfb70543841fe5988374fbfd66f",
    "history": "a6dee3edd37ab05b2607e716e375f0d216b5066a fix(imp-001b): block unchecked runtime overrides and review migration hold\nfe3925cca6791ac7ef2fae3d30baaa4eaf6b85da feat(dev): add no-network hosted Supabase environment preflight\n",
    "origin": "ChatGPT PR65 initial feature (fe3925c/c04504b), Codex PR68 runtime-precedence correction a6dee3e; exact runtime identity not authenticated"
  },
  {
    "path": "tests/hosted_supabase_preflight.test.mjs",
    "source": "cbb379fa4a4eaa9f576f3abcce2c2258d22cc551",
    "blob": "dfb48d0c4a7782ebfa0aa2879b29d2ecf4f8716c",
    "sha256": "074854ef928bb63af0cad000a43d319fdb640e6c0ce120d78278a4e26f5900bf",
    "history": "a6dee3edd37ab05b2607e716e375f0d216b5066a fix(imp-001b): block unchecked runtime overrides and review migration hold\nb0014647da337635975d447491b24cdf31398e40 test(dev): cover cloud ref, public keys, loopback and redacted diagnostics\n",
    "origin": "ChatGPT PR65 initial feature (fe3925c/c04504b), Codex PR68 runtime-precedence correction a6dee3e; exact runtime identity not authenticated"
  }
]
~~~~~~

## Execution reporting
Return an ExecutionBundle with FACT / INTERPRETATION / PROPOSAL sections,
tests actually performed, changes, evidence gaps, and pending owner approval.
