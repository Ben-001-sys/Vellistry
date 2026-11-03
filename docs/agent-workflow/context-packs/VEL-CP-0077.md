---
id: VEL-CP-0077
title: 'Context for VEL-TASK-0077: PRINCIPAL SESSION offline evidence-readiness reconciliation'
type: context-pack
status: prepared
created_at: '2026-11-03'
version: 0.1.0
task_id: VEL-TASK-0077
base_commit: cc0bbf114546fb9d98ffbc4560d1eb28f74247f1
task_blob_sha: 62a0ab35875c443a91916d5654f0b6cb3af13eb0
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
- path: docs/reports/VEL-PRINCIPAL-READINESS-0062.md
  role: governing-source
  git_blob_sha: 83c522e7c44326e2ed72185b98f8d0627f4b4fb8
  source_status: proposed-for-review
- path: docs/reports/VEL-OWNER-PRINCIPAL-PROBE-PROTOCOL-0063.md
  role: governing-source
  git_blob_sha: 5eeda3b80818c0d5c0e0e2a0d2ba200fc0e74492
  source_status: proposed-for-review
- path: docs/research/K2B-SESSION-AND-MANUSCRIPT-EXPOSURE-2026-10-09.md
  role: governing-source
  git_blob_sha: fde534dd517cc398a124621bfb2b6df75781bda7
  source_status: real-local-session-probe-passed-decision-pending
- path: docs/agent-workflow/inputs/VEL-TASK-0063/FIXTURE-STATUS.json
  role: governing-source
  git_blob_sha: 8d103b65708c4527b2d9751e9e5582cd9833480a
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0077/OWNER-SCOPE.md
  role: governing-source
  git_blob_sha: 2ebee8bf37fcc69c2e063ef0b728e0c101d9c4de
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0077/CONTRACT.md
  role: governing-source
  git_blob_sha: 13249081981edcd00a85282213fc3a73387c7079
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0077/SOURCE-REFERENCES.json
  role: governing-source
  git_blob_sha: a59ed5b55c0dfbb8772a79f954b13d16bd8f8f9f
  source_status: unrecorded
source_gaps:
- id: FIXTURES-UNKNOWN
  limitation: Historical3UNKNOWN26October2026; new owner fixture confirmation pending.
    Record no invented fresh confirmation.
- id: NO-EXECUTABLE
  limitation: No owner-only runner/endpoint guard/sanitizer/environment review or
    execution; G2-G4 and hosted execution not established.
- id: PRODUCTION-AUTHORITY
  limitation: Conditional principal design and historical disposable session evidence
    do not establish production/session/hosted write acceptance. N12 and historicalEPERM
    BLOCKED;R01-R08 NOT_RUN.
prepared_by: agent_workflow.py
---

# VEL-CP-0077 — PRINCIPAL SESSION offline evidence-readiness reconciliation

## Objective
Reconcile fixture andG1-G4 blockers, frozen PRINCIPAL case schema and separate SESSION authority evidence into the smallest non-executable owner decision packet

## Scope
**In:** CURRENT-STATE.md; docs/agent-workflow/tasks/VEL-TASK-0077.yaml; docs/agent-workflow/context-packs/VEL-CP-0077.md; docs/agent-workflow/execution-bundles/VEL-EB-0077.md; docs/agent-workflow/inputs/VEL-TASK-0077/*; docs/agent-workflow/PR-COMPLIANCE.yaml; docs/agent-workflow/proposals/VEL-PRINCIPAL-SESSION-READINESS-0077.json; docs/reports/VEL-PRINCIPAL-SESSION-EVIDENCE-READINESS-0077.md; docs/reports/evidence/VEL-TASK-0077/*
**Out:** All application/test/runner/CI/dependency/evaluator/Auth/SQL implementations and production choices; Hosted/Auth/JWT/JWKS/private account/factor/session/credential/manuscript inspection or changes, creation/enrollment/deployment/paid/merge

## Evidence and authority constraints
The text below is a readable rendering of pinned Git blobs; exact raw bytes remain recoverable from the recorded commit/blob SHAs. Recorded source statuses remain in force: draft research is not accepted requirements. Original unarchived uploads are not independently verified merely by being mentioned.

**Known source gaps:**
- FIXTURES-UNKNOWN: Historical3UNKNOWN26October2026; new owner fixture confirmation pending. Record no invented fresh confirmation.
- NO-EXECUTABLE: No owner-only runner/endpoint guard/sanitizer/environment review or execution; G2-G4 and hosted execution not established.
- PRODUCTION-AUTHORITY: Conditional principal design and historical disposable session evidence do not establish production/session/hosted write acceptance. N12 and historicalEPERM BLOCKED;R01-R08 NOT_RUN.

## Permissions and acceptance
**Allowed:** Read fixed repository/GitHub source records and author new readiness documents after committed validated CP, Execute existing offline synthetic tests and source/schema/document assertions; preserve earlier exact-main CI evidence with explicit unchanged blob proof, Distinct trusted review, Draft/Ready CI and unmerged PR only
**Owner approval required:** Any live/owner-only runner/sanitizer or Auth/security implementation, hosted/account/MFA/JWT/JWKS/SQL/credential operation; Any operative code/test/CI/dependency/policy change or merge
**Acceptance criteria:**
- No historical source/pack mutation or invented fixture confirmation/target observation
- Canonical0063 labels/endpoints/closed schema/limits preserved; unknown factor visibility never authorizes absence
- Explicit identity-vs-session-vs-transaction separation and preserved historical PostgREST/Nest residual bearer finding
- New runtime runner/realAuth tests NOT_RUN;G1-G4 not promoted without evidence; all security/CI boundaries unchanged
- Actual tests/provenance/review/CI and owner merge pending

## Deliverables
- Dated non-secret fixture record;G1-G4 and case-specific PRINCIPAL/SESSION matrices with exact source pins
- Offline runner/sanitizer requirements and smallest separate owner-only decisions; no executable tooling
- Actual permitted regressions, inherited source-identity proof, EB, distinct final-head review, Draft/Ready CI and unmerged PR

## Pinned source snapshots
Git commit: `cc0bbf114546fb9d98ffbc4560d1eb28f74247f1`. Read source statuses independently from task intent.

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

### `docs/reports/VEL-PRINCIPAL-READINESS-0062.md` @ `83c522e7c44326e2ed72185b98f8d0627f4b4fb8`

~~~~~~markdown
---
id: VEL-PRINCIPAL-READINESS-0062
title: Conditional MVP PRINCIPAL implementation readiness
type: implementation-report
status: proposed-for-review
created_at: 2026-10-25
owner: project_owner
version: 0.1.0
---

## Scope, authority and source
FACT: base main88d8dbcb9e6ec21baf60deebb7004f7e2194b276, next unused Task0062. Unique Task/input8857c1f and validated immutableCP0062 commit4673ec992a1bc424db3438259868d090bd8c0509 precede this operative preparation. Existing [Task0061 handoff](VEL-REAL-AUTH-HANDOFF-0061.md), [frozen SDK evidence](../agent-workflow/inputs/VEL-TASK-0059/SDK-BOUNDARY-SOURCES.md), and [factor-source excerpt](../agent-workflow/inputs/VEL-TASK-0062/FACTOR-SOURCE.md) are read-only inputs.

[Owner authorization6404172728](https://github.com/Ben-001-sys/Vellistry/issues/108#issuecomment-6404172728) is preserved exactly in [source snapshot](../agent-workflow/inputs/VEL-TASK-0062/OWNER-AUTHORIZATION.json), including its coordinator-relay provenance. It conditionally approves MVP DESIGN, not production trust completion, implementation or hosted execution. Dashboard observations are owner-reported in that record; original screenshots are not supplied here and were not independently inspected. Record dates are25October2026; no undocumented observation timestamp is invented. Public docs/frozen SDK explain capabilities only, not actual target behavior. No application code or effective standing controls changed.

## Decision matrix (atomic entries, with explicit evidence class)
M01 — APPROVED DESIGN: PRINCIPAL_DESIGN_APPROVED_CONDITIONAL. Fixed owner-configured vellistry-dev endpoint https://lflkcrnriitrbclangyr.supabase.co; no caller/token-derived endpoint/issuer/JWKS/role overrides. Owner authorization is design authority, not deployed-runtime verification.

M02 — VERIFIED TARGET (OWNER-OBSERVED SETTINGS ONLY): owner confirms project URL/metadata and reports Dashboard anonymous sign-ins OFF, TOTP ON, SMS OFF, low-AAL15-minute restriction ON, current ECC P-256 key, previous HS256 key and no custom Auth Hooks displayed. Source is owner observation relayed6404172728, not this agent's hosted inspection. This category verifies the reported setting evidence at its stated scope, never actual issued token, user enrollment or effective enforcement. No key material or user/session records accessed.

M03 — APPROVED DESIGN: reject anonymous/service-role author identities; optional TOTP enrollment, no SMS requirement; aal1 allowed for authors with no verified enrolled factor, aal2 required for enrolled authors before protected workspace access.15-minute restriction stays ON pending separate behavioral acceptance. Separately scope sensitive actions needing aal2; no new MFA enrollment/UI/route work authorized.

M04 — INFERRED/UNCONFIRMED: expected issuer candidate https://lflkcrnriitrbclangyr.supabase.co/auth/v1 and author audience/role candidate authenticated. Owner conditionally approves their intended design, but exact effective issuer/audience/role/claim issuance still needs trustworthy target confirmation before production enforcement. Fixed endpoint approval does not establish issuer equality; no custom Hooks displayed does not establish all issued claims or absence of every possible integration.

M05 — APPROVED DESIGN: prefer current ECC P-256/ES256 trust; permit correctly attributed AUTH_SERVER_BACKED fallback through fixed trusted service, never equate it with local signature assurance. Unknown required algorithm/path assurance fails closed. Previous HS256 needs explicit handling; no key revocation/rotation/settings changes approved.

M06 — INFERRED/UNCONFIRMED: actual JWT alg/kid/current-key selection, exact verification path, previous-key acceptance window/legacy-token behavior, JWKS discovery/rotation/cache behavior. Dashboard ECC P-256 suggests ES256; it is not verified issued-token/header/path evidence. A previous key entry is not proof that it is still accepted or revoked.

M07 — APPROVED DESIGN: same immutable explicit token for getUser(token) and getClaims(token), strict canonical user/subject/session matching; claim/policy checks before lossy projection; safe required exp/iat, validated optional nbf, expiry/future/coercion/contradiction and clock-regression denial, post-await checks,30,000ms proof freshness. Zero skew remains the stated proposed value in authorization, not an observed target clock guarantee; exact field/schema choices must be pinned for future implementation.

M08 — INFERRED/UNCONFIRMED:3,600-second access-token lifetime is a recommendation, NOT current configuration. Token lifetime, proof freshness and session inactivity/max-lifetime are three different quantities. Current AAL/session downgrade timing and15-minute behavior remain unverified; never use that window as permission to accept enrolled aal1 workspace access.

M09 — BLOCKED: authoritative same-author factor-state completeness/visibility/freshness/schema and enrollment-race semantics. AAL claim alone cannot distinguish unenrolled from enrolled-but-not-stepped-up. TOTP enabled for the project does not mean every author enrolled. No user/factor/session inspection authorized now.

M10 — BLOCKED: concrete PRINCIPAL target-trust/assurance and implementation gate until issuer/audience/effective claims, key/legacy/path policy and factor-state prerequisites are accepted. SESSION/N-12/GATEWAY/PACKAGING/RECONCILIATION/TRANSPORT remain separate pending controls. Identity proof is not current writable-session/ownership/grant or write authority. Historical independent spawn EPERM remains BLOCKED. No broad design/pilot/release gate promoted.

## Conditional MFA: enforceable predicate and evidence boundary
INTERPRETATION of approved design: for otherwise valid same-token identity, complete authoritative factor state NONE admits aal1; state ENROLLED requires aal2 (aal1 denies/needs step-up); valid aal2 meets the assurance floor for either known state but does not prove present enrollment or authorize writes. Unknown/malformed/unavailable/stale/incomplete state must not be collapsed to NONE. Conservative proposed handling is deny protected workspace eligibility until trustworthy evidence exists, even when an identity object can be assembled. Missing/unknown AAL must not silently default to aal1 in this application contract.

A candidate source is the matching Auth-server getUser(explicitToken) response's complete factors collection, IF a separately verified target/API contract establishes that it is authoritative and complete for that caller/token/AAL. Validate same canonical user.id/sub, own plain data, well-formed complete factor collection, supported type/status schema and freshness. Count verified enrollments, not pending/unverified setup records. Any verified factor must not be ignored merely because the app currently offers TOTP only; unknown types/statuses/schema cannot justify an aal1 allow. Return only a derived state needed for policy, no factor IDs/secrets/person data in proof, logs or fixtures exported as evidence. No raw factor data is retrieved in Task0062.

The frozen SDK _listFactors() uses getUser() without explicit token. The explicit-jwt _getAuthenticatorAssuranceLevel(jwt) path decodes AAL and calls getUser(jwt), but defaults absent user.factors to an empty array; its non-jwt path consults getSession/session.user. These convenience methods are not substitutes for the stricter request-local verified claims + complete factor-state contract. Do not trust decoded-only currentLevel, nextLevel, AMR, user_metadata, cached session state or a client-provided enrollment boolean. SDK fallback-to-empty is NOT evidence of no enrollment.

[Public MFA documentation](https://supabase.com/docs/guides/auth/auth-mfa) distinguishes session assurance and opt-in enforcement. It does not attest to this project's factor visibility or enrolled-author behavior. No verified target response/schema was supplied; factor evidence remains BLOCKED. If the existing same-token getUser response cannot establish complete state, a separately authorized factor-state source/access scope is required. Do not invent an admin client, extra SQL/grants or third app path inside the two-file future task.

Snapshot trusted policy/client/token and arriving evidence per request, preserve immutable author/session/expiry binding and existing post-async30-second bound. Revalidate temporal eligibility after async work. Concurrent enrollment/unenrollment or restriction changes can invalidate an earlier observation; freshness is not atomic enrollment/session enforcement. Require defined observation/decision timing, no cross-author cache, and separately scoped race/outage/visibility acceptance. No immediate global MFA-enrollment linearization guarantee is claimed; no database transaction/locking semantics are approved here. N12's session/write race tests remain BLOCKED, not replaced by factor-policy unit tests.

## JWT assurance and the previous key
APPROVED DESIGN requires both trusted Auth-server user evidence and successful trusted-claims verification for the exact same captured token. Reuse existing SupabaseAuthService configuration/public client and preserve existing verify(token)->{id}/guard/Books behavior. No current fixture policy may become production defaults: Task60 intentionally denies all AAL fields and extra SDK fields, so it cannot enforce this real conditional-MFA design unchanged.

Distinguish assurance axes: current-key local cryptographic verification proves signature integrity under an approved key/algorithm/origin and checked claims; fixed-server getUser acceptance supplies Auth-server identity evidence; neither proves an active writable session. getClaims success can use local asymmetric WebCrypto/JWK verification or Auth-server fallback in frozen SDK2.117.3. Header alg/kid or Dashboard current-key label alone does not reveal whether an actual call used cached crypto, key fetch or server fallback. Do not report CRYPTOGRAPHIC_CURRENT_KEY unless the required path/key evidence is established.

A permissible minimum label proposal is AUTH_SERVER_BACKED when mandatory fixed-server same-token user verification succeeds AND trusted SDK claims/policy succeed. This describes proven minimum identity assurance, not a claim that getClaims specifically executed fallback. Actual claims-verification path is UNKNOWN unless observable proof exists; UNKNOWN cannot satisfy a policy requiring a particular local path/current key. Owner permission for fallback does not waive algorithm/issuer/audience/legacy policy. Require explicit error classes internally: invalid/expired/mismatched vs configuration/provider unavailable; both fail closed, no elevated or silent offline fallback, no token/claims leakage. External HTTP mapping remains TRANSPORT pending.

Previous HS256 is not current ECC assurance and is not auto-approved merely because Auth server accepts it. Two future dispositions require explicit owner selection/evidence: deny legacy author tokens, or allow a bounded documented legacy compatibility rule only as AUTH_SERVER_BACKED with confirmed permitted algorithm/key-era/limits. No default legacy grace period selected. Do not read a shared signing secret, locally verify HS256, revoke keys, rotate settings or manufacture legacy tokens in this task. No manual downgrade from failed ES256 verification to HS acceptance, no caller keys/JWKS/allowExpired overrides. Built-in SDK fallback behavior must be evaluated against approved assurance before acceptance; if current-vs-legacy provenance cannot be distinguished sufficiently, fail closed for that requirement.

## Future two-path implementation handoff — NOT_AUTHORIZED
New unique implementation Task/committed validated immutable CP at then-current approved main required. EXACT candidate app paths (no edits now):
- apps/api/src/modules/auth/supabase-auth.service.ts
- apps/api/src/modules/workspace/workspace-principal-adapter.spec.ts

Add only an additive verifyPrincipalEvidence method in the existing service and mandatory spec extensions, preserving52existing cases and existing Auth/guard ABI. No new Auth stack/synthetic bridge, dependencies/CI, routes/modules or SQL. Inject the existing publicClient boundary in tests; no real client initialization/network/token experiments in the proposed unit execution. Do not call the new method automatically from existing guards/routes. It may supply a minimal immutable server-private proof to the existing provider only after policy/factor/assurance validation, keeping original request binding. No returned writable/session-active permission or raw factor records; token correlation stays server request-local, not HTTP/cache/receipt/logs.

Implementation cannot honestly meet the conditional design until concrete issuer/audience/effective claim schema, current/legacy/fallback assurance and authoritative factor-state contract are resolved. Do not implement a guessed policy, silently accept all aal1 users, globally require MFA contrary to optional enrollment, or close a gate with mocked evidence. If a prerequisite needs new access, app path, dependency, SQL or live verification, stop that branch of work and obtain a bounded new authorization/pack. No shipping Auth implementation is authorized by this preparation PR.

## R01-R08 future acceptance matrix — every status NOT_RUN
R01 — NOT_RUN: explicit pinned owner config/issuer/audience/role/anonymous/AAL/time/key policy; missing/caller/token-derived policy, service-role author identity, mutated policy or implicit SDK session defaults deny. No production value inferred from Dashboard labels alone.

R02 — NOT_RUN: same immutable token and captured trusted client/policy for required getUser/getClaims; reversed responses, policy/token switching, concurrent authors and response mutation cannot mix evidence. No getSession/refresh or request options/key overrides.

R03 — NOT_RUN: canonical user/sub/session equality; exact approved issuer/audience/author role; anonymous false; strict safe NumericDate exp/iat/optionalnbf, unsupported/expired/future/coerced/contradictory/clock-regression denial.3,600s recommendation must not be treated as target lifetime.

R04 — NOT_RUN: current-key/allowed alg/path evidence, tampering represented as injected failure only in unit tests; previous HS256 allowed only under separately accepted legacy rule and AUTH_SERVER_BACKED attribution. Unknown required path denies; no key-error/crypto-failure downgrade or unsupported assurance claim. Real key/legacy/JWT experiments require separate target-specific permission.

R05 — NOT_RUN: SDK errors/partial/malformed/null/unavailable factor and claims/user evidence deny; internal provider/configuration unavailability distinct from invalid credentials; no sensitive proof/log disclosure or privileged/offline fallback. Existing verify/guard error ABI not silently changed.

R06 — NOT_RUN: complete authoritative matching-user factor-state NONE+aal1 allow, ENROLLED+aal1 deny, ENROLLED+aal2 allow, knownNONE+validhigheraal2 satisfies floor only. Missing factors must not become empty/NONE; A complete validated collection containing only known pending/unverified factors has no verified enrollment and may yield NONE; this is not an empty-default shortcut. Unknown schema/status/type, stale/foreign/mutated evidence or incomplete visibility denies. No AAL-only, Dashboard-project-enable or cached-session enrollment inference. Include response-delay, enrollment/unenrollment observation and15-minute restriction boundaries as synthetic contract cases; actual target behavior stays separately unverified. Factor completeness/race prerequisite unresolved means implementation BLOCKED, not passed with fixtures.

R07 — NOT_RUN: retain30000ms (30000 boundary vs30001 denial), expiry after awaits, immutable binding, all52existing mandatory bodies/12unit/32PG/CI/security/recovery and Auth/guard/Books ABI; no real SDK client/network/JWT/JWKS/SQL/route in this future local test slice.

R08 — NOT_RUN: valid identity and MFA policy still yield no writable/session-active/grant authority. SESSION_UNKNOWN cannot authorize writes; separate N12 tests remain BLOCKED. Demonstrate minimal immutable response/no factor/private record retention, no production request wiring.

These are proposed test requirements, not execution evidence. Task62 document assertions do not execute R01-R08 or establish factor-state/real-token acceptance. If future tests cannot observe an assurance property, mark the actual case BLOCKED rather than fabricating PASS.

## Remaining decisions and permitted next action
PRINCIPAL_DESIGN_APPROVED_CONDITIONAL; PRINCIPAL_TARGET_TRUST_PENDING and IMPLEMENTATION_NOT_AUTHORIZED. Confirm effective issuer/audience/role/anonymous/AAL/time issuance; obtain authoritative factor schema/completeness/visibility and observation timing; settle previous-key disposition and observable path/algorithm assurance; verify configured JWT lifetime and restriction/rotation/cache behavior. The15-minute setting must stay ON; no change granted. Existing target settings are not themselves application policy or behavioral acceptance.

Only separately authorized non-secret evidence/target verification may resolve these gaps. No JWT/JWKS/key material, Auth/user/session inspection, hosted query, credential, settings operation or factor enrollment allowed here. No blanket approval to rerun/extend the Task0046 query packet. Owner observes/accepts missing evidence under exact future scope, then explicitly authorizes the implementation Task and later merge. No successor automatic merge.

SESSION/GATEWAY/PACKAGING/RECONCILIATION/TRANSPORT remain pending; N12 and independent spawn EPERM BLOCKED, R01-R08 NOT_RUN. Task59-61 source/history/failures retained, Issue108 OPEN, expired remediation delegation stays closed; broad design/pilot/release gates unchanged.
~~~~~~

### `docs/reports/VEL-OWNER-PRINCIPAL-PROBE-PROTOCOL-0063.md` @ `5eeda3b80818c0d5c0e0e2a0d2ba200fc0e74492`

~~~~~~markdown
---
id: VEL-OWNER-PRINCIPAL-PROBE-PROTOCOL-0063
title: Gated owner-only synthetic Auth evidence protocol
type: implementation-report
status: proposed-for-review
created_at: 2026-10-26
owner: project_owner
version: 0.1.0
---

## Execution status and authorization
HOSTED_EXECUTION_BLOCKED. No hosted probe, authentication, token handling, factor inspection or JWKS request was performed by agents. No executable runner is supplied or tested in this documentation-only Task0063. This protocol is not an instruction to run copied console snippets or unreviewed tooling.

[Conditional owner authorization6411355004](https://github.com/Ben-001-sys/Vellistry/issues/108#issuecomment-6411355004) relays direct human permission for preparation and a subsequent OWNER-EXECUTED probe after prerequisites/protocol review. [Owner fixture response6411406349](https://github.com/Ben-001-sys/Vellistry/issues/108#issuecomment-6411406349): unenrolled synthetic author existence/control UNKNOWN; verified-TOTP synthetic author existence/control UNKNOWN; ability to obtain enrolled AAL1/AAL2 UNKNOWN, not confirmed26October2026. UNKNOWN is not absent or present. Account creation/enrollment changes and privileged/broad searches are excluded, so this task cannot repair that prerequisite itself.

Verified base17adbf96ae0a9187732ad3a7837ec0d2d9b62d03. Task0063 and exact owner/source snapshots were committed before validated committed immutableCP0063. Historical Task59-62/CPs/EBs/failures stay immutable. Existing52/12unit/32PG controls unchanged. Scope is protocol/evidence documentation only, no app/SDK/test/CI/dependency/SQL changes. Agent's standing forbidden hosted/merge actions remain; conditional owner permission is not agent access or production approval.

## Gates: all required before owner execution
G1 FIXTURE_PREREQUISITE_BLOCKED now: owner dated YES confirmation from already-held trustworthy fixture records for TWO existing owner-controlled synthetic accounts, one without verified MFA, one with existing verified TOTP and usable AAL1/AAL2. Do not include identifiers or authenticate blindly to discover whether they exist. No real author account or manuscript may substitute. If existing records cannot establish this, obtain separately scoped evidence permission; no creation, admin list or MFA enrollment permission is inferred.

G2 PRE_EXECUTION_REVIEW_PENDING: record exact reviewed protocol commit/hash, distinct source-review disposition, owner acknowledgement of endpoint/redaction/cleanup/stop rules, environment and SDK lock/version. If executable tooling is needed, a fresh execution/tooling Task and committed validated immutable pack must pin then-current fixture confirmation and exact runner/sanitizer sources before executable work. Current Task's pinned UNKNOWN input is historical and must not be rewritten to YES. Such a tooling Task may use the existing conditional authorization only within its exact bounds; material endpoint/operation expansion needs amended authority. No unknown or unreviewed runner may execute.

G3 OWNER_ENVIRONMENT_NOT_ATTESTED: owner alone operates private controlled process with frozen SDK2.117.3 and reviewed network guard/sanitizer. Credentials, public client key and tokens supplied privately in memory; no agent, chat, remote desktop, recorded terminal, shell arguments/history, saved .env, clipboard export, repository file, browser storage, SDK persistence or logs receive them. No service_role/secret/admin client. Disable session persistence/auto-refresh and debugging, HTTP tracing, crash dumps/telemetry that could capture payloads. If this cannot be assured, stop before login. No application client or real session reused.

G4 SANITIZER_AND_CLEANUP_NOT_VERIFIED: before any network work, offline no-network tests of the exact runner must prove closed output schema, nested/exception/URL/header redaction, deny-by-default endpoint guard, token capture and cleanup-local-scope behavior. Only synthetic strings in offline tests. Task0063 does not claim these executable tests exist or pass. Owner commits to reviewing the sanitized output before sharing. Local self-signout cleanup below must be included in the exact pre-execution review; if its narrow authority/implementation cannot be established, do not begin. Review is not satisfied merely by a green document check.

## Fixed trust boundary and endpoint allowlist
Only HTTPS origin https://lflkcrnriitrbclangyr.supabase.co, exact project reference lflkcrnriitrbclangyr. Normal TLS verification required; refuse redirects, user-supplied origins, proxies that record sensitive content, custom domain substitution or project mismatch. No arbitrary URL from issuer/kid/claims. Unknown request class fails BEFORE sending. The owner must approve this list as part of G2; this is not permission for an agent request.

E1 POST /auth/v1/token?grant_type=password — only two fixture logins, email/password in owner's private request body. No signup, recovery, OTP-email/SMS, OAuth, refresh_token or extra grant type. No login loops, brute-force or intentional invalid credential tests. A CAPTCHA/third-party redirect requirement is BLOCKED, not a new permitted origin.

E2 GET /auth/v1/user — exact captured case token for same-token user verification, plus bounded SDK-required fallback calls if any. Return data stays private; only matching/shape/factor aggregates may leave process. No /admin or listing, no other user/factor/session query.

E3 GET /auth/v1/.well-known/jwks.json — only if frozen SDK requires verification metadata. Public key response is private temporary SDK state: no raw JWK, modulus/coordinates, certificate, body or key material in reports/logs. No different origin/redirect or caller keys/JWKS/allowExpired override. Presence of a successful fetch is not proof the SDK used local crypto. No manual key retrieval or offline signature experiment.

E4 POST /auth/v1/factors/{existing_private_factor_id}/challenge and POST /auth/v1/factors/{same_existing_private_factor_id}/verify — solely existing TOTP-enrolled fixture step-up. Factor/challenge IDs and TOTP code stay private. No factor collection POST, enrollment, DELETE, recovery codes, SMS/phone challenge or unrecognized factor type. Choose only an existing owner-known verified TOTP; if not established, stop rather than enroll. Dynamic IDs must come from the privately verified own-fixture context, never untrusted external input, and must never appear in logs or exported URLs.

E5 CLEANUP ONLY: POST /auth/v1/logout?scope=local using ONLY each newly created probe session's own credential, via reviewed SDK signOut({scope:local}) or equivalent exact local-scope self-signout. Never default/global/others scope; no service/admin key or direct session-row access. This narrow cleanup is subject to exact G2 review before login; it is not key revocation, enrollment change, or a broad session-management test. If it is not covered/verified in the reviewed runner, block before execution. Logout success is cleanup evidence only, not proof old access JWTs become immediately unusable.

No SQL, PostgREST/storage/manuscript calls, /admin, broad user/session/factor lists, settings, key rotation, account creation or application routes. SDK initialization must not contact extra services. Request bounds proposed for review: at most2password logins,3case getUser calls,3case getClaims operations with bounded internal getUser/JWKS calls, one TOTP challenge and one verification,2local cleanup signouts;32total outbound requests maximum,15seconds/request and5minutes/run. No automatic refresh, application retries or cross-origin fallback. SDK internal retries count toward bounds; reaching a bound aborts measurement, then only reviewed cleanup is permitted. Limits are safety bounds, not a claim target timing is verified.

## Owner-only sequence after every gate is satisfied
S0 Confirm project, fixtures and runner/protocol version without identifiers in evidence. Prepare separate in-memory SDK state for each fixture; no disk or shared browser session. Do not export environment, request/response bodies, unfiltered SDK objects, stack traces, raw network logs or screenshots. Public client key/password/OTP are owner-only input, never arguments or stdout. New authentication necessarily creates owned Auth sessions; no settings/enrollment change is allowed.

S1 Case UNENROLLED_AAL1: owner signs into existing unenrolled fixture. Capture one immutable access token privately. As a REJECTION-ONLY preflight, a reviewed parser may inspect the bounded untrusted header in memory: anything other than expected current-key ES256, including HS256/missing/unknown, stops that sample BEFORE getUser/getClaims or manual crypto/fallback testing. This is sample routing, not authentication or production algorithm approval. Never seek an old token or alter/sign a JWT. An unexpected token leaves BLOCKED_UNEXPECTED_ALGORITHM; no legacy experiment continues.

S2 For the captured token, call getUser(token) and getClaims(token) explicitly, with no omitted-token/getSession/current-client-state substitute, no supplied verification options or key override. Snapshot arriving data, privately validate canonical user.id==verified claims.sub and claim session_id shape, evidence age/expiry after awaits. Do NOT claim getUser independently verified the session_id or writable session: that API returns user identity, not a protected transactional session witness. Keep conservative start timestamp/30000ms bound for observation correlation; this does not implement or accept PRINCIPAL.

S3 Inspect only allowed issuer/audience/role/anonymous/AAL/time and verified-header metadata, plus the private user response's factors-field presence/schema/verified-presence bucket. Compare against owner-known fixture ground truth without exporting identities. Missing/null/partial/unavailable/unknown statuses/schema remain UNKNOWN, not NONE. A complete-looking empty array is an observation only: authoritative completeness/visibility still needs a supported provider/API contract, which samples cannot prove. No extra factor/user/admin lookup to fill gaps.

S4 Case ENROLLED_AAL1: repeat login/capture/verification for existing enrolled fixture in its separate SDK state BEFORE challenge. If the provider refuses this state due to existing restriction, record BLOCKED/UNKNOWN with a fixed error class; do not disable15-minute restriction or repeat until it passes. AAL claim alone is not enrollment evidence.

S5 Case ENROLLED_AAL2: owner uses only existing verified TOTP challenge/verify endpoints E4, privately enters code, captures returned access token as a NEW immutable case token, then repeats S2-S3. It must not replace the token mid-case or relabel prior AAL1 observations as AAL2. No factor enrollment/deletion, refresh workaround, recovery bypass or key/settings changes. If the owner cannot obtain the required state, case BLOCKED rather than creating/enrolling a fixture.

S6 Derive only the closed sanitized record below. Minimum identity assurance may be AUTH_SERVER_BACKED only when fixed-server same-token user AND SDK claims verification succeeded. Claims path remains UNKNOWN unless separately reviewable observable evidence establishes it; header/key metadata and generic success do not prove local current-key cryptography. No production policy acceptance, eligibility or writable-session flag is produced. Unexpected role/service credentials, anonymous=true, mismatches, invalid/expired proof or extra endpoint aborts that case and stops further measurement; only reviewed cleanup follows. Do not deliberately generate these negative cases against hosted Auth.

S7 Perform reviewed E5 cleanup for newly created owned sessions, discard credentials/tokens/factors/OTP/raw responses from references, close isolated client/process and verify no files, storage, trace/HAR/clipboard/terminal capture were produced. Memory disposal/GC is not guaranteed cryptographic zeroization. SDK/public-JWKS memory may persist until process exit; never export it. If cleanup fails or cannot confirm affected session scope, report cleanup UNKNOWN/BLOCKED, stop; do not escalate to global signout or privileged session deletion. No log upload until owner manual redaction review passes.

## Closed sanitized output: no raw object copying
Only the listed keys and bounded values may be exported. All unknown keys/free text, nested raw payloads, unexpected string values, IDs, headers, URLs containing private path IDs and exception details must be dropped/rejected, never printed. Do not log a raw object then sanitize afterward. Emit only fixed-schema aggregate observations and fixed error categories. No token/user/session/factor hashes or fingerprints either.

Run fields: protocol_id=VEL-OWNER-PRINCIPAL-PROBE-0063; protocol_reviewed_commit (exact public Git SHA); run_date YYYY-MM-DD; project_ref=lflkcrnriitrbclangyr; fixtures_confirmed=YES/NO/UNKNOWN; execution=NOT_EXECUTED/BLOCKED/OBSERVED_WITH_LIMITATIONS; cleanup=NOT_STARTED/DONE/UNKNOWN/BLOCKED. A not-executed template is not findings.

Exactly3case labels: UNENROLLED_AAL1, ENROLLED_AAL1, ENROLLED_AAL2. Each may export ONLY:
- status NOT_RUN/OBSERVED/UNKNOWN/BLOCKED; error_class NONE/AUTH_DENIED/UNAVAILABLE/EXPIRED/MALFORMED/MISMATCH/UNEXPECTED_ALGORITHM/ENDPOINT_DENIED/LIMIT_REACHED/UNKNOWN (no raw messages).
- same_token_calls, auth_user_ok, sdk_claims_ok, user_subject_match, temporal_shape_valid, freshness_within_30000ms as TRUE/FALSE/UNKNOWN. No actual subject/session IDs. session_claim_shape UUID/MISSING/INVALID/UNKNOWN is not live-session verification.
- issuer_value is ONLY the fixed candidate https://lflkcrnriitrbclangyr.supabase.co/auth/v1 or UNEXPECTED_REDACTED/UNKNOWN; audience_value ONLY authenticated/UNEXPECTED_REDACTED/UNKNOWN; audience_shape STRING/SINGLETON_ARRAY/OTHER/UNKNOWN; role ONLY authenticated/anon/service_role/UNEXPECTED_REDACTED/UNKNOWN. Unexpected values require private owner review/new bounded evidence scope, not unrestricted echo.
- anonymous FALSE/TRUE/MISSING/INVALID/UNKNOWN; aal aal1/aal2/MISSING/INVALID/UNKNOWN; alg ES256/HS256/RS256/OTHER_REDACTED/MISSING/UNKNOWN (non-ES256 preflight stops, never verifies legacy); kid_present YES/NO/UNKNOWN; kid_matches_owner_confirmed_current YES/NO/UNKNOWN (no actual kid, key or JWKS output; absent owner evidence means UNKNOWN).
- observed_lifetime_seconds as safe integer1..86400 or OUT_OF_RANGE_REDACTED/UNKNOWN; optional_nbf ABSENT/VALID_PAST/FUTURE/INVALID/UNKNOWN. No exact expiry/issued timestamps. Observed exp-iat duration is NOT configured project JWT lifetime.
- factors_field ARRAY/MISSING/NULL/MALFORMED/UNAVAILABLE/UNKNOWN; factor_schema RECOGNIZED/UNRECOGNIZED/UNKNOWN; verified_factor_bucket ZERO/AT_LEAST_ONE/UNKNOWN; matches_owner_fixture_ground_truth YES/NO/UNKNOWN; factor_completeness NOT_ESTABLISHED (unless a separately reviewed authoritative API contract is supplied; no sample automatically upgrades it).
- assurance_minimum AUTH_SERVER_BACKED/NOT_ESTABLISHED; sdk_claim_path UNKNOWN (default; no path guessed from header/fetch); no PASS/ACCEPTED/PRODUCTION_READY or writable field.

No emails, usernames, user/session/factor/challenge IDs, raw JWT/token/password/OTP, API keys/secret/public-key material, signing secrets, connection strings, raw claims, arbitrary metadata or body/error/HTTP-header dumps may appear in repository/reports/logs. Owner manually reviews the closed record; if any forbidden data escaped, do not transmit it or ask an agent to inspect it; isolate privately, stop and report only the incident category/affected evidence-withheld flag under a separately reviewed response. Redaction is required even for synthetic accounts.

## Findings template and scope limits
Current sanitized findings: execution NOT_EXECUTED; fixtures_confirmed UNKNOWN; all3cases NOT_RUN; factor visibility/completeness UNKNOWN/NOT_ESTABLISHED; issuer/audience/role/AAL/verification path findings UNKNOWN; cleanup NOT_STARTED. These are statuses, not invented observations.

Approval of this documentation PR is NOT automatic execution readiness. Fixture confirmation, exact protocol and executable environment/runner/sanitizer review still required; owner alone executes conditionally authorized operations. Current UNKNOWN input/CP must be preserved; changed execution prerequisites belong in a fresh pinned execution record, not rewritten history. No agent-hosted credentials/JWT/JWKS or own-user inspection authorized. No automatic merge or production-gate approval.

R01-R08 remain NOT_RUN (implementation acceptance untouched). N12/session/write enforcement and historical independent spawn EPERM BLOCKED. All production decision gates remain pending as previously qualified; PRINCIPAL design conditional approval is not target verification. Existing research/regressions do not become hosted probe findings. Task59-62 histories preserved, Issue108 OPEN, remediation delegation EXPIRED. If prerequisites stay UNKNOWN, finish preparation honestly and keep hosted work BLOCKED.
~~~~~~

### `docs/research/K2B-SESSION-AND-MANUSCRIPT-EXPOSURE-2026-10-09.md` @ `fde534dd517cc398a124621bfb2b6df75781bda7`

~~~~~~markdown
---
id: VEL-RES-K2B-SESSION-PROBE-20261009-001
type: security-research-report
status: real-local-session-probe-passed-decision-pending
created_at: 2026-10-09
updated_at: 2026-10-09
author: project-research
version: 0.2.0
sources:
  - "https://supabase.com/docs/guides/auth/signout"
  - "https://supabase.com/docs/guides/auth/sessions"
  - "https://supabase.com/docs/guides/auth/server-side/creating-a-client"
  - "https://supabase.com/docs/guides/auth/server-side/advanced-guide"
  - "https://supabase.com/docs/guides/api/securing-your-api"
  - "https://github.com/Ben-001-sys/Vellistry/pull/29"
related_research:
  - R15
  - R18
related_adrs:
  - ADR-0006
---

# R15 / K2B — Session lifecycle and manuscript exposure (research track)

## Evidence already established

[Real local Auth+RLS K2A](https://github.com/Ben-001-sys/Vellistry/pull/29) passed 17 groups of two-user account and database isolation tests. On signout of a local session, Nest rejected an old JWT with 401 but direct PostgREST gave no error. That earlier test **did not measure returned row content**, leaving the actual manuscript-exposure question unanswered.

## Verified external behavior from authoritative documentation

- Supabase **signOut** terminates the selected session's refresh tokens but existing access JWTs normally remain usable until \`exp\`. The default signout scope is global; \`local\` revokes only that session, preserving other devices.
- Every JWT includes \`session_id\` (distinct per Auth session). Supabase documents checking actual active \`auth.sessions\` rows when immediate post-signout invalidation is essential; however such checks add database dependencies and may require carefully audited security definer code.
- \`getClaims\` verifies JWT signature and expiry, **not session database presence**. \`getUser\` queries the Auth server for updated user status. These are not equivalent to universal, immediate database-level revocation.
- For Next.js 16, \`@supabase/ssr\` requires a **\`proxy.ts\` cookie-refresh layer** that writes updated cookies on both request and response. The existing scaffold does not yet include this; not claiming tested SSR behavior.
- Exposed Supabase Data API tables may be callable **directly** by any browser holding a signed JWT. Routing UI operations through Nest is not sufficient if PostgREST grants/RLS allow the same data. Privilege revocation + exposed-schema design, or explicit session-liveness constraints on direct APIs, require a security choice and separate tests.

## New actual-runtime probe

Script: \`apps/api/tests/k2b-session-exposure.integration.mjs\` runs only with loopback Supabase and Nest, two generated Alice sessions plus Bob, synthetic book rows and a test-only fixture key for cleanup. It captures exact row counts/readability and Nest HTTP results after **local and global signout**, attempts a revoked refresh, verifies the other Alice session stays valid after local logout, verifies Bob remains isolated, and compares \`getClaims\` and \`getUser\` for the same old JWT. **Do not record credentials or token material in artifacts.**

The test does not yet implement a \`proxy.ts\`, real browser account switching, cookie refresh race, offline drafts encryption/erasure, storage object policies, expiry injection or live account deletion; those are distinct research experiments still required before closing K2B.

## Security decision alternatives (NO option selected)

| Option | Expected behavior | Tradeoff / verification |
|---|---|---|
| **S1 — bounded JWT validity** | Explicitly disclose that signout clears local auth and revokes refresh tokens, but an issued access token may remain valid until a short expiration. | Simpler and fewer auth/database calls; verify permitted maximum JWT lifetime, bearer theft exposure, direct Data API and storage access, cache keys and browser signout. |
| **S2 — high-sensitivity session liveness** | Reject already-issued tokens for manuscript reads/writes if their \`session_id\` was revoked. | Harder due to RLS/PostgREST and worker access. Requires formally reviewed SQL privilege checks, data API behavior tests, performance and outage safety. Do not expose \`auth.sessions\` or a service-role key to clients. |
| **S3 — Nest-only manuscripts** | Move private author tables to a non-exposed schema and remove direct Data API author grants; Nest uses verified tokens and restricted DB access. | Stronger single-gateway control, higher API/SQL authorization burden; must deliberately implement scoped database queries and backups. Other Supabase services may remain separately exposed. |

S3 and S2 can be combined in a later approved design; neither is a no-cost automatic fix. Before implementing one, choose the desired post-logout security semantics for private unpublished manuscript data. A direct Data API read that still returns private rows post-signout is a valid test finding even if documented behavior explains it.

## Pair 01 gate

K2A identity/RLS: **PASSED** on disposable local runtime. K2B access-token expiry, direct data exposure, SSR refresh, and logout scope: **PARTIAL until all probes are actually observed**. This record must not be promoted to complete simply because a synthetic test or application build passes. No hosted Supabase project or actual author data required.

## Actual CI evidence — 2026-10-09

**Tested code:** `f9448df3e619614d9d6956247b985cf15313b187`. [Real local Supabase workflow #37993494329](https://github.com/Ben-001-sys/Vellistry/actions/runs/37993494329) completed **SUCCESS**. The existing K2A **17/17 groups** ran first, followed by **K2B 9/9 test/observation groups**, using two genuine Alice sessions, one Bob session, generated test accounts, actual NestJS, local Auth and real PostgREST/PostgreSQL. The [foundation build regression #37993494393](https://github.com/Ben-001-sys/Vellistry/actions/runs/37993494393) also succeeded.

**Exact critical log observation:**
```text
OBSERVED K2B local signout: old JWT PostgREST rows 1 Nest status 401 old access JWT reads own book true
```

This **proves** that the previously signed access JWT could read Alice's synthetic book after local signout through direct PostgREST, even while Nest `getUser` refused that JWT. This is **not** another-author leakage: Bob was correctly denied Alice's data. It is **same-user revoked-session residual bearer access**, significant for stolen or retained tokens and author expectations about logout. The revoked primary refresh token could not obtain a replacement; the separate Alice session continued working; Bob's valid session was unaffected by Alice signout; global signout revoked the then-current session's refresh token. Verification of actual JWT expiry and the contents returned after global logout beyond the logged local-signout probe remains for a subsequent targeted experiment; the test artifact records additional diagnostic booleans and row counts.

**Risk/decision status:** R15/K2B real session token exposure **CONFIRMED**, not remediated. Do **not** promise immediate manuscript access termination on logout while PostgREST exposes author tables with valid signed JWTs. The three previously documented S1/S2/S3 options require an owner decision, deeper SSR/storage/grant tests and an explicit security acceptance contract. Avoid emergency privilege changes that would break existing Nest author-scoped PostgREST operations without a reviewed substitute.

**Still NOT RUN:** Actual Next.js 16 SSR Proxy cookie refresh in a real browser, cookies/CSRF/response caching, file Storage RLS, full session expiry clock test, account switching on a shared device and local IndexedDB data erasure, account/data deletion and restore. Pair 01 cannot close on this run alone.
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0063/FIXTURE-STATUS.json` @ `8d103b65708c4527b2d9751e9e5582cd9833480a`

~~~~~~markdown
{
  "date": "2026-10-26",
  "source": "Owner direct response in current conversation, relayed in Issue108; no account inspection",
  "unenrolled_fixture_exists_and_owner_controlled": "UNKNOWN",
  "verified_totp_fixture_exists_and_owner_controlled": "UNKNOWN",
  "enrolled_fixture_aal1_aal2_obtainable": "UNKNOWN",
  "status": "FIXTURE_PREREQUISITE_BLOCKED",
  "hosted_probe_executed": false
}
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0077/OWNER-SCOPE.md` @ `2ebee8bf37fcc69c2e063ef0b728e0c101d9c4de`

~~~~~~markdown
# Owner dispatch

Owner authorization relayed by Codex,3November2026. The owner explicitly answered “Approve and dispatch offline Task0077” after the proposed-status clarification. This dispatch authorizes the bounded repository-only PRINCIPAL/SESSION evidence-readiness preparation from mainad5e723aa746f695da547a1feefd950801e324ab: reconcile historical Task0062/0063/0059/0061 and K2A/K2B, prepare dated YES/NO/UNKNOWN fixture status, G1-G4/three-case PRINCIPAL/separate SESSION matrices, offline sanitizer/runner acceptance requirements, actual permitted regressions and an unmerged reviewed PR. No live runner or Auth implementation is needed or authorized in this smallest documentation-only milestone.

The second non-secret fixture-confirmation question has not yet been answered. Do not invent new owner confirmation: historical3UNKNOWN26October2026 remain unconfirmed, G1/hosted execution BLOCKED. Do not modify that historical record or immutable packs. Owner may later supply only YES/NO/UNKNOWN and date, without IDs/secrets/screenshots.

No agent-hosted Auth/queries/JWKS, credentials/raw tokens/private IDs/factors/manuscripts, account/MFA changes, SQL, production policy/route/writes, dependencies/CI/evaluator changes, deployment, paid services or merge. No new networked executable runner. Existing source and mandatory CI coverage remain unchanged. R01-R08 NOT_RUN, N12/historical EPERM BLOCKED, legacy privileges SKIPPED; Issues108/131 OPEN; remediation delegation EXPIRED. Future owner-only execution still requires allG1-G4 and separately reviewed exact runner/sanitizer/environment scope. This records direct owner conversation dispatch through a Codex relay, not Codex granting itself authority.


Evidence: https://github.com/Ben-001-sys/Vellistry/issues/108#issuecomment-6591664009
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0077/CONTRACT.md` @ `13249081981edcd00a85282213fc3a73387c7079`

~~~~~~markdown
# Task0077 bounded documentation contract

FACT: current mainad5e723/PR136 post-main41534118617 PASS. Existing main browser41, PostgreSQL32+16+8HTTP/restart/12CAS,443governance and all application/security regressions are inherited actual source-bound evidence, not new target Auth findings. No production source, CI, dependency, SQL, test or live runner edits are required.

Prepare a dated new fixture record (only YES/NO/UNKNOWN, source/date and no identifying data). All3historical Task0063 statuses UNKNOWN26October2026 are preserved. Absent new owner reply, report UNKNOWN and no current confirmation date; never misattribute today's reconciliation as fresh owner confirmation. Any later non-secret response may be recorded within this already authorized documentation scope without rewriting earlier evidence.

G1-G4 are separate blocking gates. G1 requires3YES; G2 distinguishes merged protocol/source review from exact executable/protocol/environment owner review; G3 owner environment attestation UNKNOWN; G4 no actual runner/sanitizer => NOT_VERIFIED, not PASS. Preserve canonical0063 three labels, fixed E1-E5 endpoint/method/query bounds, closed fields and enumerations and cleanup scope. New JSON is a readiness matrix, not an executable probe or sanitized findings instance. Do not expand the0063 exported schema with SESSION/live session fields or extra endpoints. Whole-source hash and source references tie every matrix to the reviewed protocol.

PRINCIPAL rows separately specify same-token user/claims/subject/expiry/freshness, policy/role/anonymous/AAL, factor visibility vs completeness, verification-path attribution, unavailability. Empty observed factors never establish authoritative NONE. Expected issuer/audience/role values remain unconfirmed candidates; algorithm labels/header/fetch do not establish crypto path. No legacy-HS256 sample experiments. AUTH_SERVER_BACKED minimum is not getClaims-path attribution or writable authority.

SESSION rows cover local/global signout and oldJWT directPostgREST/Nest divergence, authoritative row/user link and deadlines, revocation/refresh/enrollment races and protected transaction boundary. Cite exact historical K2A17/K2B9 real-local observations, frozen sourcef9448df and recent accepted-main evidence; neither proves hosted behavior or production policy. Keep N12 BLOCKED. Existing disposable lock-helper tests are experiments, not deployment grants. Owner must separately decide guarantee/linearization/grant/API exposure and mechanism.

G4 requirements only: offline deny-by-default URL/method/query/redirect guard, bounded request/timer/cleanup-local-only budget, snapshot/same-token handling, closed output schema/redaction/forbidden fields/error laundering, failure/timeout and resource disposal tests, owner manual sanitized-output review. No new live runner or sanitizer implementation is supplied or claimed tested. A future owner-only executable requires new explicit scoped Task/CP with exact reviewed sources before network access. Record every new runtime R01-R08 and runner-specific test NOT_RUN; existing52synthetic principal tests are not their execution.

Verify existing frozen dependencies and offline principal52/MFA55/Library81/preflight23/workspace101/persistence21, build/check and document/source assertions; current-source governance in existing CI. Preserve mandatory Chromium/PG CI unchanged. Reuse authentic mainad5 browser/security/PG results only after proving code/dependency/test/workflow blob identity; no new Auth account/session work or environment access. Ready doc-only CI may legitimately skip application according to unchanged classifier; do not call skipped tests fresh PASS. Independent final-head source review, Draft/Ready CI and unmerged PR. No merge/hosted/credentials/JWT/JWKS/SQL/production/paid/private data or feature work.
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0077/SOURCE-REFERENCES.json` @ `a59ed5b55c0dfbb8772a79f954b13d16bd8f8f9f`

~~~~~~markdown
{
  "reference_kind": "Exact read-only source pins; not hosted observations or permission",
  "sources": [
    {
      "path": "PROJECT.md",
      "commit": "ad5e723aa746f695da547a1feefd950801e324ab",
      "sha256": "530c02ddede4a2904b97a44790a398b3de64020798dcbd728367d77feeaec3d7",
      "bytes": 3595
    },
    {
      "path": "SOURCE-OF-TRUTH.md",
      "commit": "ad5e723aa746f695da547a1feefd950801e324ab",
      "sha256": "530a26f2ccbcdbfa37614a79684ecbbf4788506af5936a0c25ad7d74efe5bacb",
      "bytes": 5516
    },
    {
      "path": "CURRENT-STATE.md",
      "commit": "ad5e723aa746f695da547a1feefd950801e324ab",
      "sha256": "243a9cc338ab369712bf53062dc916eb35abb14cdd8734a813cff4f84bdd4f26",
      "bytes": 10978
    },
    {
      "path": "docs/decisions/ADR-0008-codex-primary-agentic-implementation-workflow.md",
      "commit": "ad5e723aa746f695da547a1feefd950801e324ab",
      "sha256": "fdd3d879dbef08e2e8f37b84859e29cdfa8e98467cf295085245ed417c0b2b16",
      "bytes": 13806
    },
    {
      "path": "docs/reports/VEL-REAL-AUTH-HANDOFF-0061.md",
      "commit": "ad5e723aa746f695da547a1feefd950801e324ab",
      "sha256": "ea9a17a559fcfb6c46152f4a3957ba0dc4f75b9a93febe99a68019e397c9223b",
      "bytes": 13905
    },
    {
      "path": "docs/agent-workflow/proposals/VEL-SUPABASE-PRINCIPAL-BOUNDARY-0059.json",
      "commit": "ad5e723aa746f695da547a1feefd950801e324ab",
      "sha256": "8125d19b78ca9ad19bb58e39c80957eec8ac4db5236da42c60ff6b7317618634",
      "bytes": 15582
    },
    {
      "path": "docs/agent-workflow/inputs/VEL-TASK-0059/SDK-BOUNDARY-SOURCES.md",
      "commit": "ad5e723aa746f695da547a1feefd950801e324ab",
      "sha256": "38fa3e412dac40b57c5596fab07577d8413222e7f635f5798d5b256c9cf6bf3a",
      "bytes": 9559
    },
    {
      "path": "docs/agent-workflow/inputs/VEL-TASK-0062/FACTOR-SOURCE.md",
      "commit": "ad5e723aa746f695da547a1feefd950801e324ab",
      "sha256": "f87438a7f5fcad95f2e8064e93d50dfe971c51e5274fe522e18b085487849170",
      "bytes": 3872
    },
    {
      "path": "docs/agent-workflow/inputs/VEL-TASK-0062/OWNER-AUTHORIZATION.json",
      "commit": "ad5e723aa746f695da547a1feefd950801e324ab",
      "sha256": "de25d5392aca052e29caead6fdcfd253bfa14e722d5292915621ba925db271cf",
      "bytes": 9101
    },
    {
      "path": "docs/agent-workflow/inputs/VEL-TASK-0063/OWNER-AUTHORIZATION.json",
      "commit": "ad5e723aa746f695da547a1feefd950801e324ab",
      "sha256": "88f777d3817d86c93c326ead2fc6a14ea38e151f3675985754df4a3047af8483",
      "bytes": 5392
    },
    {
      "path": "docs/agent-workflow/inputs/VEL-TASK-0063/SDK-PROTOCOL-SOURCE.md",
      "commit": "ad5e723aa746f695da547a1feefd950801e324ab",
      "sha256": "f2ff0fd2064591fbd562e6db187d31bf92cd9aa6e6aaf00d53041255ca82c3d1",
      "bytes": 5349
    },
    {
      "path": "apps/api/src/modules/auth/supabase-auth.service.ts",
      "commit": "ad5e723aa746f695da547a1feefd950801e324ab",
      "sha256": "e2ddcdf05608019b3d5aa22e94113a9816731bbf5f870c62071f4f831e0097e5",
      "bytes": 1411
    },
    {
      "path": "apps/api/src/modules/auth/supabase-auth.guard.ts",
      "commit": "ad5e723aa746f695da547a1feefd950801e324ab",
      "sha256": "0bf90359488a5d76d6869f26fb525b1ad6db7b961f589aab7844fb346076ae0f",
      "bytes": 896
    },
    {
      "path": "apps/api/src/modules/workspace/workspace-principal-adapter.ts",
      "commit": "ad5e723aa746f695da547a1feefd950801e324ab",
      "sha256": "386a763ef30939c25149ed6e96845699f6a3158f733af86f12bbbdd22a2aa8c9",
      "bytes": 3903
    },
    {
      "path": "apps/api/src/modules/workspace/workspace-principal-adapter.spec.ts",
      "commit": "ad5e723aa746f695da547a1feefd950801e324ab",
      "sha256": "042dd68dc6ab02f89428f43c2a28be9bde8681b779245b53179f1d2b92c5f951",
      "bytes": 29407
    },
    {
      "path": "apps/api/tests/supabase-auth-rls.integration.mjs",
      "commit": "ad5e723aa746f695da547a1feefd950801e324ab",
      "sha256": "58ee3a375131f957712def75c3a590fb837ea98af5ed338573b83ddee7da8219",
      "bytes": 11661
    },
    {
      "path": "apps/api/tests/k2b-session-exposure.integration.mjs",
      "commit": "ad5e723aa746f695da547a1feefd950801e324ab",
      "sha256": "0746004a589f5a6b9d3abfe0490753d429a0fe2db9c864a90d1810f364361c13",
      "bytes": 7693
    },
    {
      "path": "apps/api/tests/k2b-active-session-row.integration.mjs",
      "commit": "ad5e723aa746f695da547a1feefd950801e324ab",
      "sha256": "87ba30beed733cc67de4c14b75a6adeb811dc43c2d6e61220482c8d22f4ece73",
      "bytes": 6930
    },
    {
      "path": ".github/workflows/ci.yml",
      "commit": "ad5e723aa746f695da547a1feefd950801e324ab",
      "sha256": "ad3730e993677d80ba01f8abf053a7999845076cf0c4af6b1291c16995fff638",
      "bytes": 14242
    },
    {
      "path": "tests/editor/durable-draft-browser.mjs",
      "commit": "ad5e723aa746f695da547a1feefd950801e324ab",
      "sha256": "c8df2743910b7f0e53f352dd23c717c810c2b4d80e7bd38d8f35d4a3a2fbd305",
      "bytes": 35303
    },
    {
      "path": "package.json",
      "commit": "ad5e723aa746f695da547a1feefd950801e324ab",
      "sha256": "b28791926b38d5cb421bb58dcfc7dabf86994c9cbdee46f8b33d4f06c376cab3",
      "bytes": 1741
    },
    {
      "path": "pnpm-lock.yaml",
      "commit": "ad5e723aa746f695da547a1feefd950801e324ab",
      "sha256": "dd7935789540de5c850f9980fb6c546e2289a5b5da0579198494aa8476d2a77f",
      "bytes": 110242
    }
  ],
  "owner_decisions": [
    {
      "url": "https://github.com/Ben-001-sys/Vellistry/issues/108#issuecomment-6404172728",
      "body_sha256": "8432cbef2dc0ca563d8d5516472e47116b00975ce7d046069f1f9befc189a630"
    },
    {
      "url": "https://github.com/Ben-001-sys/Vellistry/issues/108#issuecomment-6411355004",
      "body_sha256": "f082ca6b0e88545ea63239e6ee9aa0ddbe56a09ecbb43fa92fc2d56c6c86ab5e"
    },
    {
      "url": "https://github.com/Ben-001-sys/Vellistry/issues/108#issuecomment-6411406349",
      "body_sha256": "207d57a9b7aa3cde68e7870bc9c88b16c9fbb308e1c43172d36bfb27b1c243f1"
    }
  ]
}
~~~~~~

## Execution reporting
Return an ExecutionBundle with FACT / INTERPRETATION / PROPOSAL sections,
tests actually performed, changes, evidence gaps, and pending owner approval.
