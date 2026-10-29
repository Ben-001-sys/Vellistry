---
id: VEL-CP-0070
title: 'Context for VEL-TASK-0070: Correct trusted post-main compliance for exact-tree
  stacked merge commits'
type: context-pack
status: prepared
created_at: '2026-10-29'
version: 0.1.0
task_id: VEL-TASK-0070
base_commit: 12f2cbcab08f0abd11e2f86170b2d31b81d63908
task_blob_sha: 412e976e8d19a6e304f7a080d7bbc55bd3dcd5df
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
- path: scripts/pr_compliance.py
  role: governing-source
  git_blob_sha: 6091b7cf02d24c81a3d1925cdf1aa887f07fe949
  source_status: unrecorded
- path: scripts/run_pr_compliance.py
  role: governing-source
  git_blob_sha: 2a12144f225803e32f7dc0b62ff3999555e6f956
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0070/OWNER-AUTHORIZATION.json
  role: governing-source
  git_blob_sha: bfe71fb2809cee79d3bad5e1d321ac58f03250c5
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0070/SOURCE-EXCERPTS.md
  role: governing-source
  git_blob_sha: cb2962a72fa406ed1fe7d39fec36e92962d84ffc
  source_status: unrecorded
- path: docs/agent-workflow/inputs/VEL-TASK-0070/IMPLEMENTATION-CONTRACT.md
  role: governing-source
  git_blob_sha: c8f260ae46565211d8bad43d0634f928599c3c1a
  source_status: unrecorded
source_gaps:
- id: HISTORICAL-FAILURE
  limitation: Actual40951100355 remainsFAIL. No hosted acceptance, R01-R08NOT_RUN,
    N12/historicalEPERMBLOCKED.
prepared_by: agent_workflow.py
---

# VEL-CP-0070 — Correct trusted post-main compliance for exact-tree stacked merge commits

## Objective
Separate trusted evaluator base from genuine implementation change-base for legitimate stacked merges without weakening provenance

## Scope
**In:** scripts/pr_compliance.py; tests/test_pr_compliance.py; CURRENT-STATE.md; docs/agent-workflow/tasks/VEL-TASK-0070.yaml; docs/agent-workflow/context-packs/VEL-CP-0070.md; docs/agent-workflow/execution-bundles/VEL-EB-0070.md; docs/agent-workflow/inputs/VEL-TASK-0070/*; docs/agent-workflow/PR-COMPLIANCE.yaml; docs/reports/VEL-STACKED-MERGE-COMPLIANCE-0070.md; docs/reports/evidence/VEL-TASK-0070/*
**Out:** Change scripts/run_pr_compliance.py, ci.yml, ci_policy.py, accepted governance or security rules; Rewrite Tasks67/68/immutable packs/evidence or historical failure; Revert PR129, forcepush, disable governance, warning-only gate, settings/permissions; Hosted Auth/MFA/SQL/credentials/manuscripts/production/deployment/IMP003B/new feature; Merge this or successor PR

## Evidence and authority constraints
The text below is a readable rendering of pinned Git blobs; exact raw bytes remain recoverable from the recorded commit/blob SHAs. Recorded source statuses remain in force: draft research is not accepted requirements. Original unarchived uploads are not independently verified merely by being mentioned.

**Known source gaps:**
- HISTORICAL-FAILURE: Actual40951100355 remainsFAIL. No hosted acceptance, R01-R08NOT_RUN, N12/historicalEPERMBLOCKED.

## Permissions and acceptance
**Allowed:** Commit task/governing sources then generate/validate/commit immutable CP before operative edits, Two-file evaluator/test correction and listed supporting evidence/current state, Disposable local Git/fixture tests, existing full governance/frozen builds/typechecks and applicable automatic CI, Distinct trusted read-only source review; Draft then Ready only after evidence; no merge
**Owner approval required:** Merge, accepted governance/loader/workflow/gate-policy scope expansion, new security-sensitive/hosted/settings/feature operations
**Acceptance criteria:**
- Preserve first-parent trusted evaluator source and actual event head, derive genuine implementation merge-base only after exact parent/tree validation
- Positive ordinary and stacked two-parent exact reviewed-tree histories, historicalPR129 fully evaluated after reproduced old failure
- All mandatory negative provenance/scope/security/trust cases retained and topology-specific regressions added
- Full applicable checks actual exits/counts/source evidence, independent final source review and exact ReadyCI
- No immutable historical change, loader/workflow/gate-policy/dependency/app/SQL change or merge

## Deliverables
- Minimal evaluator correction, unchanged loader/workflow/security/gate-policy
- Synthetic positive/negative and exact historical before/after evidence
- EB, distinct completed-head review, Draft and ReadyCI, PR for separate owner decision

## Pinned source snapshots
Git commit: `12f2cbcab08f0abd11e2f86170b2d31b81d63908`. Read source statuses independently from task intent.

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

### `scripts/pr_compliance.py` @ `6091b7cf02d24c81a3d1925cdf1aa887f07fe949`

~~~~~~markdown
#!/usr/bin/env python3
"""Static PR evidence checks. Never authenticates an LLM, user or approval."""
from __future__ import annotations
import argparse
from datetime import date
import fnmatch
import hashlib
import json
import os
from pathlib import Path
import re
import subprocess
import sys
import yaml
import agent_workflow as aw

MANIFEST = 'docs/agent-workflow/PR-COMPLIANCE.yaml'
REQUIRED = ('scripts/pr_compliance.py', 'scripts/run_pr_compliance.py',
            'tests/test_pr_compliance.py', '.github/workflows/ci.yml')
FORBIDDEN = {'hosted', 'production', 'private-manuscripts', 'paid-services', 'admin', 'merge'}
BOOTSTRAP_BASE = 'f371448538dafa92faebbef9bcda2a36c6ca1fa9'
SHA = re.compile(r'[a-f0-9]{40}')
URL = re.compile(r'https://github.com/Ben-001-sys/Vellistry/(?:issues|pull)/[0-9]+(?:#(?:issuecomment|pullrequestreview)-[0-9]+)?')


def require(value, message):
    if not value:
        raise ValueError(message)


def git(repo, *args):
    return subprocess.check_output(['git', '-C', str(repo), *args], stderr=subprocess.DEVNULL)


def sha(value):
    require(isinstance(value, str) and SHA.fullmatch(value), 'Expected full commit/blob SHA')
    return value


def ancestor(repo, old, new):
    sha(old); sha(new)
    return subprocess.run(['git', '-C', str(repo), 'merge-base', '--is-ancestor', old, new], capture_output=True).returncode == 0


def blob(repo, ref, path, missing=False):
    aw.safe_path(path); sha(ref)
    try:
        mode = git(repo, 'ls-tree', ref, '--', path).split(None, 1)[0]
        require(mode == b'100644' or mode == b'100755', 'Nonregular/missing evidence file: '+path)
        return git(repo, 'show', ref+':'+path)
    except (subprocess.CalledProcessError, IndexError):
        if missing:
            return None
        raise ValueError('Missing evidence file: '+path)


def mapping(raw):
    data = yaml.safe_load(raw)
    require(isinstance(data, dict), 'Malformed metadata mapping')
    return data


def front(raw):
    return aw.frontmatter_from_text(raw.decode('utf-8'))[0]


def changes(repo, base, head):
    sha(base); sha(head)
    return [aw.safe_path(x.decode('utf-8')) for x in git(repo, 'diff', '--no-renames', '--name-only', '-z', base, head, '--').split(b'\0') if x]


def inert(path):
    # No exemption for authority/instructions, fixtures, executable extensions or
    # hidden/config paths. Unknown docs require evidence rather than guessing.
    return path.startswith(('docs/reports/', 'docs/research/')) and path.endswith(('.md', '.txt', '.rst'))


def artifact(path, task_id):
    n = task_id[-4:]
    return (path == MANIFEST or path == f'docs/agent-workflow/tasks/{task_id}.yaml'
            or path == f'docs/agent-workflow/context-packs/VEL-CP-{n}.md'
            or path == f'docs/agent-workflow/execution-bundles/VEL-EB-{n}.md'
            or path.startswith(f'docs/agent-workflow/inputs/{task_id}/')
            or (path.startswith('docs/reports/') and path.endswith(('.md','.txt','.rst','.json','.csv'))))


def allowed(path, patterns):
    # Glob wildcards are whole-repository relative; ../, absolute and secret
    # segments are rejected independently. Explicit scope does not waive SQL.
    aw.safe_path(path)
    require(not any(p in {'secrets', 'credentials'} or p.startswith('.env') for p in path.split('/')), 'Forbidden secret path')
    return any(fnmatch.fnmatchcase(path, p) for p in patterns)


def owner_record(repo, base, task_id, kind, url, paths=None, executor=None):
    # Only already reviewed BASE records can confer substitution/migration or
    # accepted-state assertions; candidate records cannot approve themselves.
    name = f'docs/agent-workflow/authorizations/{task_id}.yaml'
    raw = blob(repo, base, name, missing=True)
    require(raw is not None, 'Owner checkpoint requires base-anchored record')
    record = mapping(raw)
    require(record.get('task_id') == task_id and record.get('status') == 'owner-verified'
            and record.get('approved_by') == 'project_owner' and record.get('kind') == kind
            and record.get('evidence') == url and URL.fullmatch(str(url)), 'Invalid owner checkpoint')
    if executor:
        require(record.get('executor') == executor, 'Owner reassignment mismatch')
    if paths:
        require(set(paths) <= set(record.get('paths', [])), 'Owner migration scope mismatch')
    return record



PERSISTENCE_STEPS = (
    {'name': 'Protected workspace persistence unit regressions',
     'run': 'pnpm --filter @vellistry/api exec tsx --test src/modules/workspace/workspace-contract.spec.ts'},
    {'name': 'Principal adapter binding regressions',
     'run': 'pnpm --filter @vellistry/api exec tsx --test src/modules/workspace/workspace-principal-adapter.spec.ts'},
    {'name': 'Next.js authentication and MFA regressions',
     'run': 'pnpm test:auth-mfa'},
    {'name': 'Disposable PostgreSQL17 protected workspace acceptance',
     'run': 'python tests/workspace/persistence/run_pg17.py --disposable --cases docs/contracts/VEL-IMP002-PERSISTENCE-CASES.json'},
)


def persistence_coverage_contract(workflow):
    """Exact mandatory commands in the existing draft-aware application job."""
    job = workflow['jobs']['application']
    require(job.get('if') == "${{ needs.classify.outputs.application == 'true' }}"
            and job.get('needs') == ['classify'] and 'env' not in job,
            'Persistence application execution guard changed')
    steps = job['steps']
    positions = []
    for expected in PERSISTENCE_STEPS:
        matches = [s for s in steps if s.get('name') == expected['name'] or s.get('run') == expected['run']]
        require(len(matches) == 1 and matches[0] == expected,
                'Exactly one unconditional persistence regression step required: '+expected['name'])
        positions.append(steps.index(matches[0]))
    python = [s for s in steps if str(s.get('uses', '')).startswith('actions/setup-python@')]
    require(python == [{'uses': 'actions/setup-python@v5', 'with': {'python-version': '3.12'}}],
            'Persistence Python runtime contract changed')
    def at(command):
        matches = [i for i, s in enumerate(steps) if s.get('run') == command]
        require(len(matches) == 1, 'Persistence prerequisite missing: '+command)
        return matches[0]
    security = [i for i,s in enumerate(steps) if s.get('name') == 'Pick free, temporary CI-only Supabase API/DB ports']
    require(len(security) == 1 and steps.index(python[0]) < positions[0]
            and at('pnpm install --frozen-lockfile') < positions[0] < positions[1] < positions[2] < at('pnpm build')
            < at('pnpm check') < positions[3] < security[0],
            'Persistence regression/prerequisite/security ordering changed')


def workflow_contract(repo, head):
    for path in REQUIRED:
        blob(repo, head, path)
    workflow = yaml.load(blob(repo, head, '.github/workflows/ci.yml'), Loader=yaml.BaseLoader)
    events = workflow.get('on')
    require(isinstance(events, dict) and set(events) == {'pull_request', 'push', 'workflow_dispatch'}, 'Unsafe/absent CI events')
    pr = events['pull_request']
    activities = {'opened', 'synchronize', 'reopened', 'ready_for_review', 'edited', 'converted_to_draft'}
    require(isinstance(pr, dict) and set(pr) == {'types'} and isinstance(pr['types'], list)
            and len(pr['types']) == len(activities) and set(pr['types']) == activities, 'Required unfiltered PR activities missing')
    require(events['push'] == {'branches': ['main']}, 'Required unfiltered main push verification missing')
    require(events['workflow_dispatch'] == {}, 'Explicit full verification entrypoint changed')
    require(workflow.get('permissions') == {'contents': 'read'}, 'CI privilege escalation')
    require('defaults' not in workflow and 'env' not in workflow, 'Global execution override')
    jobs = workflow['jobs']
    require(set(jobs) == {'classify', 'governance', 'application', 'recovery', 'privileges', 'gate'}, 'Required CI jobs changed')
    for name, job in jobs.items():
        require('permissions' not in job, 'Job permission override: '+name)
        require(not ({'continue-on-error', 'defaults', 'strategy'} & set(job)), 'Weakened job execution guard: '+name)
    for name in ('classify', 'governance', 'gate'):
        require('env' not in jobs[name], 'Job execution environment override: '+name)
    require('if' not in jobs['classify'] and 'needs' not in jobs['classify'], 'Classification must execute unconditionally')
    require('if' not in jobs['governance'] and jobs['governance'].get('needs') == ['classify'], 'Governance must execute after classification')
    for name in ('application', 'recovery', 'privileges'):
        expected = "${{ needs.classify.outputs." + name + " == 'true' }}"
        require(jobs[name].get('needs') == ['classify'] and jobs[name].get('if') == expected, 'Applicable security guard changed: '+name)

    def execution_step(step, command, environment, message):
        # Prevent a correct-looking command from being skipped, softened or run
        # in an alternate shell/directory/environment that masks its result.
        require(set(step) <= {'name', 'id', 'run', 'env'} and step.get('run') == command
                and step.get('env', {}) == environment, message)

    for name in ('governance', 'gate'):
        matching = [step for step in jobs[name]['steps'] if step.get('id') == 'compliance']
        require(len(matching) == 1, 'Missing unconditional compliance step')
        execution_step(matching[0], 'python -I scripts/run_pr_compliance.py', {}, 'Missing unconditional compliance step')
    persistence_coverage_contract(workflow)
    regression_command = 'python scripts/ci_governance.py'
    regression = [step for step in jobs['governance']['steps']
                  if step.get('name') == 'Run all current governance and negative contracts once'
                  or step.get('run') == regression_command]
    require(len(regression) == 1, 'Exactly one unconditional governance regression step required')
    execution_step(regression[0], regression_command, {}, 'Unconditional governance regression command changed')
    require(jobs['governance'].get('outputs', {}).get('compliance') == '${{ steps.compliance.outputs.status }}', 'Missing compliance job output')
    gate = jobs['gate']
    require(gate.get('name') == 'Vellistry CI gate' and gate.get('if') == '${{ always() }}', 'Stable gate missing')
    require(set(gate['needs']) == {'classify', 'governance', 'application', 'recovery', 'privileges'}, 'Incomplete gate dependencies')
    final = [step for step in gate['steps'] if step.get('name') == 'Reject failed, cancelled, missing or skipped applicable checks']
    require(len(final) == 1 and final[0] is gate['steps'][-1], 'Final gate invocation missing or displaced')
    execution_step(final[0], 'python scripts/ci_policy.py gate', {'CI_NEEDS': '${{ toJSON(needs) }}'}, 'Final gate command/result-input contract changed')
    # A zero-test/comment-only replacement must not satisfy test discovery.
    source = blob(repo, head, 'tests/test_pr_compliance.py').decode('utf-8')
    require('class ' in source and 'unittest.TestCase' in source and source.count('def test_') >= 15, 'Deleted/empty compliance regression contract')


def evaluate(repo, base, head, *, today=None, check_workflow=True):
    repo = Path(repo).resolve(); sha(base); sha(head)
    today = today or date.today()
    require(ancestor(repo, base, head), 'Evaluation base is not ancestor')
    paths = changes(repo, base, head)
    if check_workflow:
        workflow_contract(repo, head)
    if not paths or all(inert(p) for p in paths):
        return dict(status='pass', disposition='docs-exempt' if paths else 'unchanged-baseline', head=head, base=base,
                    trust='structure-only; owner review required')
    m = mapping(blob(repo, head, MANIFEST))
    require(type(m.get('version')) is int and m['version'] == 1, 'Missing/unsupported manifest version')
    tid = m.get('task_id', '')
    require(re.fullmatch(r'VEL-TASK-\d{4}', tid) is not None, 'Missing task ID')
    number = tid[-4:]
    task_path = f'docs/agent-workflow/tasks/{tid}.yaml'
    task = mapping(blob(repo, head, task_path))
    require(task.get('id') == tid and task.get('status') in {'in-progress', 'verification'}, 'Task not executed')
    require(blob(repo, base, task_path, missing=True) is None, 'Task reused from base; create authorized amendment')
    contract = task.get('compliance', {})
    require(contract.get('change_base') == base, 'Wrong task/base; repin explicit amendment')
    require(isinstance(contract.get('phase'),str) and re.fullmatch(r'[a-z][a-z0-9-]{0,64}',contract['phase']) and contract['phase'] == m.get('phase'), 'Phase/scope expansion without amendment')
    auth = contract.get('authorization', {})
    require(auth.get('status') == 'authorized' and URL.fullmatch(str(auth.get('url', ''))), 'Missing/expired/superseded owner authorization')
    require(auth.get('provenance') in {'direct-owner-dispatch-with-coordinator-relay', 'owner-linked-dispatch'}, 'Missing authorization provenance')
    require(date.fromisoformat(str(auth.get('expires_on'))) >= today, 'Expired authorization')
    require(set(contract.get('forbidden_actions', [])) == FORBIDDEN and not m.get('performed_forbidden_actions'), 'Non-overridable action exclusions')
    allow = contract.get('allow_paths')
    require(isinstance(allow, list) and allow and all(isinstance(p, str) and p for p in allow), 'Missing path scope')
    for pattern in allow:
        aw.safe_path(pattern)
    for path in paths:
        require(allowed(path, allow), 'Disallowed changed path: '+path)
        # Reject symlinks even for optional data/new paths (deletions have no blob).
        blob(repo, head, path, missing=True)
    pack_path = f'docs/agent-workflow/context-packs/VEL-CP-{number}.md'
    pack_raw = blob(repo, head, pack_path); pack = front(pack_raw)
    pack_commit = sha(m.get('pack_commit'))
    source = sha(m.get('source_commit'))
    require(ancestor(repo, base, pack['base_commit']) and ancestor(repo, pack['base_commit'], pack_commit)
            and pack_commit != source and ancestor(repo, pack_commit, source) and ancestor(repo, source, head), 'Pack/source ancestry invalid')
    require(blob(repo, pack_commit, pack_path) == pack_raw, 'Mutated immutable pack')
    pinned_task = mapping(blob(repo, pack['base_commit'], task_path))
    require({k:v for k,v in task.items() if k not in {'status','updated_at'}} ==
            {k:v for k,v in pinned_task.items() if k not in {'status','updated_at'}}, 'Material task mutation after pin')
    # Existing trusted validator reconstructs all task/source blobs and whole body.
    oldroot = aw.ROOT
    try:
        aw.ROOT = repo
        aw.check_pack(repo/pack_path, {tid:task})
        eb_path = f'docs/agent-workflow/execution-bundles/VEL-EB-{number}.md'
        eb_raw = blob(repo, head, eb_path); eb = front(eb_raw)
        aw.check_bundle(repo/eb_path, {tid:task}, {pack['id']:pack})
    finally:
        aw.ROOT = oldroot
    require(eb.get('implementation_source_commit') == source and m.get('bundle_id') == eb.get('id'), 'Missing/wrong code-head bundle evidence')
    execution = eb.get('execution', {})
    require(execution.get('status') == 'completed' and execution.get('executor') == m.get('executor') == contract.get('executor')
            and eb.get('agent', {}).get('name') == m.get('executor'), 'Missing/contradictory actual executor')
    require(isinstance(execution.get('model'), str) and execution['model'].strip(), 'Missing model claim')
    if m['executor'] != 'Codex':
        owner_record(repo, base, tid, 'executor-exception', m.get('executor_exception'), executor=m['executor'])
    require(m.get('owner_disposition') == 'pending', 'CI cannot grant owner acceptance; external disposition required')
    require(eb.get('status') == 'proposed-for-review' and eb.get('review', {}).get('status') == 'pending', 'Forged completion/owner approval; keep pending for owner review')
    tests = execution.get('tests')
    require(isinstance(tests, list) and tests, 'Missing executed test evidence')
    for test in tests:
        require(test.get('status') == 'PASS' and type(test.get('exit_code')) is int and test['exit_code'] == 0
                and isinstance(test.get('command'), str) and test['command'].strip(), 'Required execution NOT_RUN/BLOCKED/failed')
        evidence = blob(repo, head, test.get('evidence', ''))
        require(evidence.strip(), 'Empty test evidence')
    # Source commit binds every non-report/artifact changed blob to actual HEAD.
    operative = [p for p in paths if not artifact(p, tid)]
    for path in operative:
        require(blob(repo, source, path, missing=True) == blob(repo, head, path, missing=True), 'Head changed after source evidence: '+path)
    # No operative change may predate committed handoff. Compare entire range,
    # including add/delete/revert histories, not just final net diff.
    commits = git(repo, 'rev-list', '--reverse', base+'..'+head).decode().splitlines()
    require(commits and all(len(git(repo,'rev-list','--parents','-n','1',c).split()) == 2 for c in commits), 'Merge commits require separately rebased bounded task')
    records = m.get('commits')
    require(isinstance(records, list), 'Missing per-commit provenance')
    declared = {r.get('commit'):r for r in records if isinstance(r,dict)}
    require(len(declared) == len(records) and set(declared) == set(commits[:-1]), 'Undeclared/duplicate inherited commit origins')
    current = m.get('current_head')
    require(isinstance(current,dict) and current.get('executor') == m['executor'] and current.get('origin') == 'original', 'Missing current-head provenance')
    declared[head] = current
    for commit in commits:
        row = declared[commit]
        require(row.get('executor') and row.get('origin') in {'original','adopted'}, 'Malformed commit provenance')
        message = git(repo, 'show', '-s', '--format=%B', commit).decode('utf-8')
        picked = re.findall(r'\(cherry picked from commit ([0-9a-f]{40})\)', message)
        if row['origin'] == 'adopted':
            require(row.get('original_executor') and URL.fullmatch(str(row.get('source_url','')))
                    and SHA.fullmatch(str(row.get('original_commit',''))), 'Missing adopted source origin')
            require(not picked or picked == [row['original_commit']], 'Cherry-pick provenance mismatch')
            require(row['executor'] == m['executor'], 'Adoption executor mismatch')
            original = sha(row['original_commit'])
            require(subprocess.run(['git','-C',str(repo),'cat-file','-e',original+'^{commit}'],capture_output=True).returncode == 0, 'Adopted original commit unavailable')
            def patch_id(ref):
                patch = git(repo,'show','--pretty=format:','--binary',ref)
                return subprocess.check_output(['git','patch-id','--stable'],input=patch).split()[:1]
            require(patch_id(original) == patch_id(commit), 'Adopted original patch mismatch')
        else:
            require(row['executor'] == m['executor'] and not picked, 'Role substitution / undeclared cherry-pick')
        changed = [p.decode('utf-8') for p in git(repo,'diff-tree','--no-commit-id','--name-only','--no-renames','-r','-z',commit).split(b'\0') if p and not artifact(p.decode('utf-8'),tid)]
        if changed:
            require(commit != pack_commit and ancestor(repo, pack_commit, commit), 'Implementation preceded immutable pack commit')
    sql = [p for p in paths if p.startswith('supabase/migrations/') or p.endswith('.sql')]
    if sql:
        owner_record(repo, base, tid, 'migration-path-approval', m.get('migration_approval'), paths=sql)
    return dict(status='pass', disposition='evidence-consistent', head=head, base=base, task_id=tid,
                source_commit=source, authorization=auth['url'], owner_disposition='pending',
                changed_paths=paths, trust='declared identity and linked authorization; owner verification required')


def event_base(repo, event_name, event, head):
    sha(head)
    if event_name == 'pull_request':
        pr = event.get('pull_request', {})
        require(pr.get('head', {}).get('sha') == head and type(pr.get('draft')) is bool
                and event.get('action') in {'opened','synchronize','reopened','ready_for_review','edited','converted_to_draft'}, 'Malformed/exact-head PR event')
        require(not (event['action']=='ready_for_review' and pr['draft']) and not (event['action']=='converted_to_draft' and not pr['draft']), 'Contradictory draft event')
        base = sha(pr.get('base', {}).get('sha'))
        return git(repo,'merge-base',base,head).decode().strip(), base
    require(event_name in {'push','workflow_dispatch'}, 'Unsupported compliance event')
    require(os.environ.get('GITHUB_SHA',head)==head, 'Wrong event head')
    if event_name == 'push':
        require(event.get('ref') == 'refs/heads/main', 'Only main push')
        base = sha(event.get('before'))
    else:
        base = git(repo,'rev-parse','refs/remotes/origin/main').decode().strip()
    require(base != '0'*40, 'Missing trusted baseline')
    return git(repo,'merge-base',base,head).decode().strip(), base


def evaluate_event(repo, event_name, event, head, *, check_workflow=True):
    base, trust = event_base(repo,event_name,event,head)
    implementation = head
    if event_name == 'push':
        parents = git(repo,'rev-list','--parents','-n','1',head).decode().split()
        if len(parents) > 2:
            require(len(parents)==3 and parents[1]==base, 'Unreviewed multi-parent/main integration base')
            implementation = parents[2]
            require(not changes(repo,implementation,head), 'Main merge changed implementation tree; new evidence required')
    result = evaluate(repo,base,implementation,check_workflow=check_workflow)
    result.update(head=head, implementation_head=implementation, verifier_base=trust)
    return result


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--repo', type=Path, default=Path.cwd())
    args = parser.parse_args()
    head = git(args.repo,'rev-parse','HEAD').decode().strip()
    event = json.loads(Path(os.environ['GITHUB_EVENT_PATH']).read_text(encoding='utf-8'))
    result = evaluate_event(args.repo, os.environ['GITHUB_EVENT_NAME'], event, head)
    print(json.dumps(result,sort_keys=True))
    if os.environ.get('GITHUB_OUTPUT'):
        with open(os.environ['GITHUB_OUTPUT'],'a',encoding='utf-8') as f:
            f.write('status=pass\nhead='+head+'\n')
    return 0


if __name__ == '__main__':
    try:
        raise SystemExit(main())
    except (ValueError,KeyError,TypeError,AttributeError,yaml.YAMLError) as exc:
        print('BLOCKED: PR compliance: '+str(exc),file=sys.stderr)
        raise SystemExit(1)
~~~~~~

### `scripts/run_pr_compliance.py` @ `2a12144f225803e32f7dc0b62ff3999555e6f956`

~~~~~~markdown
#!/usr/bin/env python3
"""Load a static evaluator from the reviewed event base, not PR imports.

The calling workflow/this loader still need protected owner review. This does
not turn an unprotected pull_request workflow into a trusted security boundary.
"""
import json
import os
from pathlib import Path
import runpy
import subprocess
import sys
import tempfile

BOOTSTRAP_BASE = 'f371448538dafa92faebbef9bcda2a36c6ca1fa9'


def run():
    repo = Path.cwd()
    def git(*args):
        return subprocess.check_output(['git', *args], cwd=repo, stderr=subprocess.DEVNULL)
    head = git('rev-parse', 'HEAD').decode().strip()
    event = json.loads(Path(os.environ['GITHUB_EVENT_PATH']).read_text(encoding='utf-8'))
    name = os.environ['GITHUB_EVENT_NAME']
    if name == 'pull_request':
        base = event.get('pull_request', {}).get('base', {}).get('sha')
    elif name == 'push':
        base = event.get('before')
    elif name == 'workflow_dispatch':
        base = git('rev-parse', 'refs/remotes/origin/main').decode().strip()
    else:
        raise ValueError('Unsupported event; no privileged PR target execution')
    import re
    if not isinstance(base,str) or not re.fullmatch('[a-f0-9]{40}',base) or base == '0'*40:
        raise ValueError('Missing full trusted base')
    verifier = 'scripts/pr_compliance.py'
    present = subprocess.run(['git','cat-file','-e',base+':'+verifier],cwd=repo,capture_output=True).returncode == 0
    source = base
    if not present:
        # One adoption baseline only. Never silently use arbitrary candidate
        # code after the validator has landed on main.
        if base != BOOTSTRAP_BASE:
            raise ValueError('Trusted compliance evaluator missing; owner decision required')
        import yaml
        manifest = yaml.safe_load(git('show',head+':docs/agent-workflow/PR-COMPLIANCE.yaml'))
        if not isinstance(manifest,dict) or manifest.get('task_id') != 'VEL-TASK-0010' or manifest.get('pack_commit') != 'd0cf7c5d3618bf616e5ddd60bbde5ca8154d600f':
            raise ValueError('Bootstrap limited to original pinned Task0010 adoption')
        source = head
        print('PROVISIONAL BOOTSTRAP: candidate evaluator on fixed pre-adoption base; owner review required',flush=True)
        if os.environ.get('GITHUB_STEP_SUMMARY'):
            with open(os.environ['GITHUB_STEP_SUMMARY'],'a',encoding='utf-8') as f:
                f.write('## Provisional compliance bootstrap\nBase lacks evaluator. Owner must review first adoption; no authenticated identity/approval claimed.\n')
    with tempfile.TemporaryDirectory(prefix='vellistry-trusted-compliance-') as directory:
        trusted = Path(directory)
        # Existing pack verifier is ALWAYS taken from base, even at bootstrap.
        (trusted/'agent_workflow.py').write_bytes(git('show',base+':scripts/agent_workflow.py'))
        (trusted/'pr_compliance.py').write_bytes(git('show',source+':'+verifier))
        sys.path.insert(0,str(trusted))
        sys.argv = [str(trusted/'pr_compliance.py'),'--repo',str(repo)]
        runpy.run_path(str(trusted/'pr_compliance.py'),run_name='__main__')


if __name__ == '__main__':
    try:
        run()
    except (ValueError,KeyError,TypeError,subprocess.CalledProcessError) as exc:
        print('BLOCKED: compliance loader: '+str(exc),file=sys.stderr)
        raise SystemExit(1)
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0070/OWNER-AUTHORIZATION.json` @ `bfe71fb2809cee79d3bad5e1d321ac58f03250c5`

~~~~~~markdown
{
  "source": "Direct owner instruction in current ChatGPT Work conversation, 2026-10-29; Codex issue relay, not authenticated human comment authorship",
  "authorization_url": "https://github.com/Ben-001-sys/Vellistry/issues/108#issuecomment-6508092481",
  "status": "authorized",
  "scope": "Repository-only stacked-merge post-main compliance correction",
  "approved_main": "6d9ce61fb560dd24e0646f6388ce38de3d87399d",
  "executable_paths": [
    "scripts/pr_compliance.py",
    "tests/test_pr_compliance.py"
  ],
  "supporting_paths": "New Task/immutable CP/EB/governing inputs/manifest/report/evidence and necessary CURRENT-STATE correction",
  "required": "Exact trusted pre-merge main source remains distinct from genuine shared change-base, reviewed implementation head and new two-parent merge. Preserve first-parent/two-parent/tree checks and all existing provenance/scope/security/authorization checks. Before/after historical and synthetic regressions; full governance; actual trusted-base Draft/Ready CI and distinct final review. No automatic merge.",
  "forbidden": [
    "Change scripts/run_pr_compliance.py, ci.yml, ci_policy.py, accepted governance or security rules",
    "Rewrite Tasks67/68/immutable packs/evidence or historical failure",
    "Revert PR129, forcepush, disable governance, warning-only gate, settings/permissions",
    "Hosted Auth/MFA/SQL/credentials/manuscripts/production/deployment/IMP003B/new feature",
    "Merge this or successor PR"
  ],
  "status_boundaries": "Issue108 OPEN; R01-R08 NOT_RUN; N12 and historical independent spawn EPERM BLOCKED; PRINCIPAL/SESSION unresolved; expired remediation delegation stays expired",
  "historical_diagnosis": "https://github.com/Ben-001-sys/Vellistry/issues/108#issuecomment-6507914924",
  "preparation_history": "Task69/CP69 preserved undispatched at584b778; unsupported provenance label caught before code; new Task70 same owner scope, supported existing enum. No policy or historical pack change."
}
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0070/SOURCE-EXCERPTS.md` @ `cb2962a72fa406ed1fe7d39fec36e92962d84ffc`

~~~~~~markdown
# Task0070 exact source excerpts

FACT: Excerpts retain the current main source framing; omitted text remains retrievable by exact Git SHA. These are task inputs, not new approvals.

## tests/test_pr_compliance.py
Source 6d9ce61fb560dd24e0646f6388ce38de3d87399d; canonical SHA256 9b049ab10366779921f64b684cbf269ee9f6d3876949760903584ce40a0f86ec.

Lines 1-70:
```text
"""Synthetic Git evidence/attack cases. No live identity or hosted acceptance."""
from datetime import date
import importlib.util
import json
import os
from pathlib import Path
import subprocess
import sys
import tempfile
import unittest
from unittest.mock import patch
import yaml

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0,str(ROOT/'scripts'))
import pr_compliance as policy
import agent_workflow as aw


class Fixture:
    def __init__(self):
        self.tmp = tempfile.TemporaryDirectory(); self.root = Path(self.tmp.name)
        self.git('init'); self.git('config','user.email','synthetic@example.invalid'); self.git('config','user.name','Synthetic fixture')
        self.put('README.md','synthetic governing source\n')
        self.put('apps/api/book.py','before\n')
        self.base = self.commit('base')
        self.tid = 'VEL-TASK-0099'
        self.task_path = 'docs/agent-workflow/tasks/'+self.tid+'.yaml'
        contract=dict(change_base=self.base,phase='phase-a',executor='Codex',allow_paths=['apps/api/book.py','docs/*'],
                      authorization=dict(url='https://github.com/Ben-001-sys/Vellistry/issues/73#issuecomment-6226100456',
                                         provenance='direct-owner-dispatch-with-coordinator-relay',status='authorized',expires_on='2099-12-31'),
                      forbidden_actions=sorted(policy.FORBIDDEN))
        self.task=dict(id=self.tid,title='Synthetic',type='implementation-task',status='verification',created_at='2026-10-16',updated_at='2026-10-16',owner='project_owner',context_pack_id='VEL-CP-0099',objective='Synthetic scope',in_scope=['test scope'],out_of_scope=['hosted'],inputs=[dict(path='README.md',role='synthetic-source')],source_gaps=[],deliverables=['evidence'],acceptance_criteria=['tests'],allowed_actions=['fixture'],approval_required_for=['merge'],compliance=contract)
        self.put(self.task_path,yaml.safe_dump(self.task)); self.task_commit=self.commit('task')
        self.pack_path='docs/agent-workflow/context-packs/VEL-CP-0099.md'
        old=aw.ROOT
        try:
            aw.ROOT=self.root
            self.put(self.pack_path,aw.render_pack(self.task,self.task_commit))
        finally:aw.ROOT=old
        self.pack_commit=self.commit('pack')
        self.put('apps/api/book.py','after\n');self.source=self.commit('implementation')
        self.eb_path='docs/agent-workflow/execution-bundles/VEL-EB-0099.md'
        self.log='docs/reports/results.txt';self.put(self.log,'fixture only: test command exit0\n')
        self.eb=dict(id='VEL-EB-0099',title='Synthetic',type='execution-bundle',status='proposed-for-review',created_at='2026-10-16',version='0.1.0',task_id=self.tid,context_pack_id='VEL-CP-0099',base_commit=self.task_commit,agent=dict(name='Codex'),sources=['README.md'],evidence=[self.log],review=dict(status='pending',approved_by=None,evidence=None),implementation_source_commit=self.source,
                     execution=dict(status='completed',executor='Codex',model='Synthetic model declaration',tests=[dict(command='synthetic-only',exit_code=0,status='PASS',evidence=self.log)]))
        self.manifest=dict(version=1,task_id=self.tid,phase='phase-a',pack_commit=self.pack_commit,source_commit=self.source,bundle_id='VEL-EB-0099',executor='Codex',owner_disposition='pending',commits=[],current_head=dict(executor='Codex',origin='original'))
        self.finish()
    def git(self,*args):return subprocess.check_output(['git',*args],cwd=self.root,stderr=subprocess.DEVNULL).decode().strip()
    def put(self,path,text):
        p=self.root/path;p.parent.mkdir(parents=True,exist_ok=True);p.write_text(text,encoding='utf-8')
    def commit(self,message):
        self.git('add','-A');self.git('commit','-m',message);return self.git('rev-parse','HEAD')
    def finish(self):
        self.put(self.eb_path,'---\n'+yaml.safe_dump(self.eb)+'---\n'+''.join('\n## '+h+'\nfixture\n' for h in ('Work performed','Facts and evidence','Interpretations','Proposals','Tests','Artifacts','Risks','Reviewer disposition')))
        self.manifest['commits']=[dict(commit=c,executor='Codex',origin='original') for c in self.git('rev-list','--reverse',self.base+'..HEAD').splitlines()]
        self.put(policy.MANIFEST,yaml.safe_dump(self.manifest));self.head=self.commit('evidence')
    def amend(self,path,text):self.put(path,text);self.head=self.commit('synthetic mutation')
    def evaluate(self):return policy.evaluate(self.root,self.base,self.head,today=date(2026,10,16),check_workflow=False)
    def close(self):self.tmp.cleanup()


class ComplianceGitTests(unittest.TestCase):
    def setUp(self):self.f=Fixture();self.addCleanup(self.f.close)
    def rejects(self,regex=None):
        with self.assertRaisesRegex((ValueError,subprocess.CalledProcessError),regex or '.'):
            self.f.evaluate()
    def test_valid_bounded_evidence_passes_without_claiming_acceptance(self):
        result=self.f.evaluate();self.assertEqual(result['status'],'pass');self.assertEqual(result['owner_disposition'],'pending');self.assertIn('owner verification',result['trust'])
    def test_missing_task(self):
```

Lines 160-265:
```text
        with self.assertRaises(ValueError):policy.evaluate(self.f.root,'a'*40,self.f.head,check_workflow=False)


class EventAndTrustTests(unittest.TestCase):
    def test_main_merge_keeps_owner_merge_distinct_from_agent_head(self):
        f=Fixture();self.addCleanup(f.close)
        implementation=f.head;f.git('checkout','-b','main-integration',f.base)
        f.git('merge','--no-ff',implementation,'-m','synthetic owner integration')
        head=f.git('rev-parse','HEAD')
        with patch.dict(os.environ,{'GITHUB_SHA':head}):
            result=policy.evaluate_event(f.root,'push',dict(ref='refs/heads/main',before=f.base),head,check_workflow=False)
        self.assertEqual(result['head'],head);self.assertEqual(result['implementation_head'],implementation)
    def test_main_merge_cannot_introduce_unverified_tree(self):
        f=Fixture();self.addCleanup(f.close)
        f.git('checkout','-b','main-integration',f.base);f.git('merge','--no-ff',f.head,'-m','synthetic integration')
        f.put('apps/api/book.py','unverified resolution');f.git('add','-A');f.git('commit','--amend','--no-edit');head=f.git('rev-parse','HEAD')
        with patch.dict(os.environ,{'GITHUB_SHA':head}),self.assertRaisesRegex(ValueError,'changed implementation tree'):
            policy.evaluate_event(f.root,'push',dict(ref='refs/heads/main',before=f.base),head,check_workflow=False)
    def test_reviewed_owner_exception_has_exact_role_and_scope(self):
        f=Fixture();self.addCleanup(f.close)
        url='https://github.com/Ben-001-sys/Vellistry/issues/73'
        path='docs/agent-workflow/authorizations/'+f.tid+'.yaml'
        f.put(path,yaml.safe_dump(dict(task_id=f.tid,status='owner-verified',approved_by='project_owner',kind='executor-exception',executor='Cursor',evidence=url)))
        reviewed=f.commit('synthetic reviewed owner record')
        policy.owner_record(f.root,reviewed,f.tid,'executor-exception',url,executor='Cursor')
        with self.assertRaisesRegex(ValueError,'reassignment'):policy.owner_record(f.root,reviewed,f.tid,'executor-exception',url,executor='ChatGPT')
        with self.assertRaisesRegex(ValueError,'checkpoint'):policy.owner_record(f.root,reviewed,f.tid,'migration-path-approval',url,paths=['supabase/migrations/new.sql'])
    def test_draft_ready_and_full_event_modes(self):
        f=Fixture();self.addCleanup(f.close);f.git('update-ref','refs/remotes/origin/main',f.base)
        for draft,action in ((True,'synchronize'),(False,'ready_for_review'),(False,'edited')):
            event=dict(action=action,pull_request=dict(draft=draft,head=dict(sha=f.head),base=dict(sha=f.base)))
            with self.subTest(draft=draft):self.assertEqual(policy.event_base(f.root,'pull_request',event,f.head),(f.base,f.base))
        with patch.dict(os.environ,{'GITHUB_SHA':f.head}):
            self.assertEqual(policy.event_base(f.root,'workflow_dispatch',{},f.head),(f.base,f.base))
            self.assertEqual(policy.event_base(f.root,'push',dict(ref='refs/heads/main',before=f.base),f.head),(f.base,f.base))
    def test_missing_malformed_wrong_head_and_privileged_events_fail(self):
        f=Fixture();self.addCleanup(f.close)
        for name,event in (('pull_request',{}),('pull_request_target',{}),('push',dict(ref='refs/heads/feature',before=f.base))):
            with self.subTest(name=name),self.assertRaises(ValueError):policy.event_base(f.root,name,event,f.head)
    def test_actual_workflow_contract_includes_both_checks(self):
        # Committed-head version is checked in real CI; working YAML here avoids
        # requiring the implementation to have been committed before tests.
        w=yaml.load((ROOT/'.github/workflows/ci.yml').read_text(),Loader=yaml.BaseLoader)
        for j in ('governance','gate'):
            step=next(s for s in w['jobs'][j]['steps'] if s.get('id')=='compliance')
            self.assertEqual(step['run'],'python -I scripts/run_pr_compliance.py');self.assertNotIn('if',step)
    def test_required_compliance_test_cannot_be_removed_from_discovery(self):
        import ci_governance
        with tempfile.TemporaryDirectory() as directory:
            root=Path(directory)
            for name in __import__('ci_policy').GOV_TESTS | {'test_ci_policy.py'}:
                p=root/'tests'/name;p.parent.mkdir(parents=True,exist_ok=True);p.write_text('fixture')
            ci_governance.validate_required_sources(root)
            (root/'tests/test_pr_compliance.py').unlink()
            with self.assertRaises(ValueError):ci_governance.validate_required_sources(root)
    def test_deleted_validator_or_empty_test_is_rejected_statically(self):
        f=Fixture();self.addCleanup(f.close)
        for name in policy.REQUIRED:f.put(name,(ROOT/name).read_text(encoding='utf-8'))
        head=f.commit('synthetic controls');policy.workflow_contract(f.root,head)
        f.put('tests/test_pr_compliance.py','# zero tests\n');head=f.commit('disable tests')
        with self.assertRaisesRegex(ValueError,'regression'):policy.workflow_contract(f.root,head)
        (f.root/'scripts/pr_compliance.py').unlink();head=f.commit('delete checker')
        with self.assertRaisesRegex(ValueError,'Missing evidence'):policy.workflow_contract(f.root,head)
    def test_skipping_compliance_or_escalating_workflow_fails(self):
        f=Fixture();self.addCleanup(f.close)
        for name in policy.REQUIRED:f.put(name,(ROOT/name).read_text(encoding='utf-8'))
        w=yaml.load((ROOT/'.github/workflows/ci.yml').read_text(),Loader=yaml.BaseLoader)
        step=next(s for s in w['jobs']['governance']['steps'] if s.get('id')=='compliance');step['if']='false'
        f.put('.github/workflows/ci.yml',yaml.safe_dump(w));head=f.commit('skip check')
        with self.assertRaisesRegex(ValueError,'unconditional'):policy.workflow_contract(f.root,head)
    def test_base_loader_does_not_execute_replaced_candidate_checker(self):
        f=Fixture();self.addCleanup(f.close)
        f.put('scripts/agent_workflow.py','# trusted fixture, no imports needed')
        f.put('scripts/pr_compliance.py','print("TRUSTED_BASE_SENTINEL")\n')
        trusted=f.commit('trusted base fixture')
        f.put('scripts/pr_compliance.py','raise RuntimeError("CANDIDATE_MUST_NOT_EXECUTE")\n')
        head=f.commit('candidate replaces checker')
        event=dict(action='synchronize',pull_request=dict(draft=True,head=dict(sha=head),base=dict(sha=trusted)))
        packet=f.root/'event.json';packet.write_text(json.dumps(event))
        env={**os.environ,'GITHUB_EVENT_NAME':'pull_request','GITHUB_EVENT_PATH':str(packet)}
        result=subprocess.run([sys.executable,'-I',str(ROOT/'scripts/run_pr_compliance.py')],cwd=f.root,env=env,capture_output=True,text=True)
        self.assertEqual(result.returncode,0,result.stderr);self.assertIn('TRUSTED_BASE_SENTINEL',result.stdout)
        self.assertNotIn('CANDIDATE_MUST_NOT_EXECUTE',result.stdout+result.stderr)
    def test_unknown_bootstrap_baseline_fails_closed(self):
        f=Fixture();self.addCleanup(f.close)
        event=dict(action='synchronize',pull_request=dict(draft=True,head=dict(sha=f.head),base=dict(sha=f.base)))
        packet=f.root/'event.json';packet.write_text(json.dumps(event))
        result=subprocess.run([sys.executable,'-I',str(ROOT/'scripts/run_pr_compliance.py')],cwd=f.root,env={**os.environ,'GITHUB_EVENT_NAME':'pull_request','GITHUB_EVENT_PATH':str(packet)},capture_output=True,text=True)
        self.assertEqual(result.returncode,1);self.assertIn('Trusted compliance evaluator missing',result.stderr)
    def test_candidate_owner_exception_cannot_self_authorize(self):
        f=Fixture();self.addCleanup(f.close)
        url='https://github.com/Ben-001-sys/Vellistry/issues/73'
        record=dict(task_id=f.tid,status='owner-verified',approved_by='project_owner',kind='executor-exception',executor='Cursor',evidence=url)
        f.put('docs/agent-workflow/authorizations/'+f.tid+'.yaml',yaml.safe_dump(record));f.commit('forged candidate exception')
        with self.assertRaisesRegex(ValueError,'base-anchored'):
            policy.owner_record(f.root,f.base,f.tid,'executor-exception',url,executor='Cursor')
    def test_report_python_is_not_unverified_artifact(self):
        self.assertFalse(policy.artifact('docs/reports/execute.py','VEL-TASK-0099'))
        self.assertTrue(policy.artifact('docs/reports/results.json','VEL-TASK-0099'))
    def test_loader_uses_base_not_candidate_imports_and_discloses_bootstrap(self):
        source=(ROOT/'scripts/run_pr_compliance.py').read_text()
        self.assertIn("base+':scripts/agent_workflow.py'",source)
        self.assertIn("source = base",source)
        self.assertIn('PROVISIONAL BOOTSTRAP',source)
        self.assertIn('base != BOOTSTRAP_BASE',source)
        self.assertNotIn('import pr_compliance',source)
```

## docs/decisions/ADR-0008-codex-primary-agentic-implementation-workflow.md
Source 6d9ce61fb560dd24e0646f6388ce38de3d87399d; canonical SHA256 fdd3d879dbef08e2e8f37b84859e29cdfa8e98467cf295085245ed417c0b2b16.

Lines 32-69:
```text
  - ADR-0006
supersedes: []
superseded_by: []
implementation_refs:
  - AGENTS.md
  - docs/agent-workflow/IMPLEMENTATION-OPERATING-MODEL.md
  - docs/plans/VEL-PLAN-05-CURSOR-AGENT-WORKFLOW-2026-10-11.md
  - CURRENT-STATE.md
---

# ADR-0008 — Codex-primary governed agentic implementation

## Context and problem statement

Vellistry uses Git and Markdown as the canonical engineering knowledge/control plane. The accepted project constitution separates evidence, design decisions, implementation and owner approval. The planned workflow had ChatGPT prepare bounded tasks and ContextPacks while **Cursor Agent** performed implementation; its outputs were independently reviewed and reconciled through GitHub PRs and CI.

After PR #64 merged, direct GitHub editing by ChatGPT produced draft PR #65 for hosted Supabase preflight. The owner then reconfirmed that Vellistry follows an **agentic coding** workflow and explicitly said **"make it an adr we are using codex now"**. The agent responsible for normal implementation must therefore be updated without rewriting past Cursor execution history or implying any broader authorization.

This is a **development operating model decision**, not a product stack, deployment, licensing, security-gate or production-readiness decision.

## Decision

**Codex is Vellistry's default primary code implementation agent starting 2026-10-14**, for each newly authorized bounded coding task. Preserve the existing role-based control plane:

| Role | Responsibility | Authority boundary |
|---|---|---|
| **Project owner** | Select/approve scope, consequential changes, security posture, spending, database operations, PR acceptance/merge and release | Sole final decision maker; permitted to self-review under the constitution |
| **ChatGPT — architect/coordinator** | Read current repository evidence and accepted ADRs; define requirements, task IDs, ContextPacks, acceptance/negative tests, path allowlists and exclusions; assess Codex reports, diff and CI; advise owner | Does **not** make owner decisions, treat its assessment as independent human review, or act as the default feature-coding executor |
| **Codex — primary implementer** | On an explicitly scoped task, inspect pinned source, implement code/tests in an isolated Git branch/worktree, run valid checks, produce a factual ExecutionBundle and proposed PR | No self-authorization to change scope/ADRs, merge, deploy, perform cloud SQL/migrations/resets, incur paid costs, use real manuscripts or disclose secrets |
| **GitHub — source of truth and review ledger** | Host code, authoritative docs, versioned ADRs, task/ContextPack/ExecutionBundle artifacts, PRs, CI, decision history and current state | PR creation and green CI do **not** equal owner acceptance or deployment readiness |
| **Independent verifier (optional)** | Challenge the source diff, independently rerun tests and negative scenarios when possible | Advisory; the same agent's self-review is not an independent execution, and no second human is mandated |

**Default work loop:**

1. **Observe:** ChatGPT inspects the merged `main` SHA, current PRs, accepted requirements/ADRs and latest top of `CURRENT-STATE.md`; distinguish verified facts from older historical status.
2. **Authorize a specific slice:** The owner approves the bounded objective and sensitive actions. ChatGPT prepares a unique task/ContextPack with source SHA, intended changes, allowed/forbidden paths, behavioral acceptance checks, security and cost restrictions. A prepared packet does not grant approval on its own.
3. **Dispatch to Codex:** Codex executes in a dedicated branch/worktree against the designated SHA, without reusing old task/pack IDs or overwriting another agent's in-progress branch. Agent may use the existing repository tools/CI and must declare tool/model/runtime in its evidence.
4. **Report evidence:** Codex supplies an ExecutionBundle with base/head SHA, changed paths, actual commands and exit codes, unit/integration/browser results with real environment and fixture descriptions, `PASS|FAIL|BLOCKED|NOT_RUN`, original artifacts and `FACT|INTERPRETATION|PROPOSAL`.
```

## SOURCE-OF-TRUTH.md
Source 6d9ce61fb560dd24e0646f6388ce38de3d87399d; canonical SHA256 530a26f2ccbcdbfa37614a79684ecbbf4788506af5936a0c25ad7d74efe5bacb.

Lines 17-54:
```text
- **Git repository:** canonical engineering documents, code, accepted project decisions, research evidence references, specifications, and change history.
- **CURRENT-STATE.md:** compact, current working status; not a substitute for full evidence.
- **ADRs:** accepted or proposed technical and knowledge-governance decisions, with rationale, alternatives, approval and supersession lineage.
- **Source register:** where original research came from and where an immutable/retrievable copy can be found.
- **Feature inventory:** [docs/features/FEATURE-INVENTORY.md](docs/features/FEATURE-INVENTORY.md) is the reviewable index of discussed feature candidates and source/status links. **It is not an accepted product backlog, release plan, substitute for original source evidence, or approval of proposed features.**
- **Git history and pull requests:** revision provenance; do not substitute automatically for semantic record metadata.
- **ChatGPT and other agents:** analysis and proposal tools, not an independent source of architectural authority.

## Separate runtime authority
Future authors' manuscripts, story canon, application settings, credentials, and stored assets belong in purpose-selected runtime storage, not automatically in the Git engineering knowledge base. The accepted Next.js/NestJS/Supabase baseline is recorded in ADR-0006; the owner subsequently selected Supabase Cloud for development. This is not production hosting or real-manuscript approval; no live database state is inferred from old records.

## Five knowledge layers
1. Authoritative accepted project and implementation knowledge.
2. Current verified implementation/research state.
3. Historical rationale, experiments, rejected/superseded alternatives.
4. Temporary task-local agent context and unapproved hypotheses.
5. Evidence, provenance, authorship, validity, confidence, and traceability.

## Read → Propose → Review → Commit
1. Read the relevant accepted records and source citations.
2. Clearly label new assumptions, findings, recommendations, and uncertainties.
3. Review source fidelity and factual verification independently.
4. Promote material changes only after owner approval; update linked records and current state.
5. When superseding an ADR, preserve the older file and connect both sides of the lineage.

## PR review and sole owner authority
At present the project has a single human contributor. The owner performs self-review and makes the final merge/acceptance decision. A distinct human PR approval is not required. Automated CI and optional AI-agent reviews provide evidence and feedback; agents do not have approval authority. For significant changes, document the owner's review and decision in the PR or associated provenance record. GitHub does not count self-review as a separate approving reviewer; this workflow must not assume otherwise. If branch-protection settings require other human approvals, review the protection policy rather than fabricate reviewers. See HIS-20261008-002.

## Metadata and history
See [docs/governance/RECORD-SCHEMAS.md](docs/governance/RECORD-SCHEMAS.md). All ADR and historical-event records require YAML front matter and meaningful content.

## No silent conflation
The terms *verified evidence*, *accepted requirement*, *approved decision*, *implemented*, and *tested* are different. Never mark one as another without supporting evidence.

## Current task authority and provenance

[AGENTS.md](AGENTS.md) and [ADR-0008](docs/decisions/ADR-0008-codex-primary-agentic-implementation-workflow.md)
express the owner-selected execution roles: ChatGPT coordinates and reviews;
```

## CURRENT-STATE.md
Source 6d9ce61fb560dd24e0646f6388ce38de3d87399d; canonical SHA256 bd8ec774640b303c7c334e847b96f14f6100516a7b13e56254d0d680c45aceec.

Lines 1-42:
```text
---
id: VEL-STATE-001
type: current-state
status: active
created_at: 2026-10-08
updated_at: 2026-10-29
owner: project_owner
version: 0.2.2
---

# Vellistry — current verified state

## Manual editor foundation — 2026-10-29

FACT: main5e3aeec95a34c0a9564067632655a0549a824c9d unchanged. Task0067/PR128
repair remains Ready/unmerged at1ff3e91, CI40838205911 SUCCESS. Root78f80bb
and owner changes preserved; current isolated local app uses Next16.4.1.

Owner defers interactive MFA acceptance, authorizes bounded local IMP003A only.
Task0068/CP0068 adds unregistered Tiptap3 editor, reusing IMP002 organizer/session:
manual formatting, history, caret, word count and chapter-local search;30offline
and33browser checks PASS. [Report](docs/reports/VEL-IMP003A-MANUAL-EDITOR-0068.md).
Drafts exist only in preview memory; no production route, writes, durable Saved
or hosted acceptance. Editor PR depends on128; review/CI/owner merge pending.

PRINCIPAL/SESSION/gateway and persistence remain gated. R01-R08 NOT_RUN;
N12/historical independent EPERM BLOCKED. Issue108OPEN; remediation delegation
EXPIRED. Owner-reported basic login is not agent-verified hosted acceptance.
Earlier dated paragraphs remain historical records, not renewed authority.

## Owner-only PRINCIPAL probe preparation — 2026-10-26

FACT: PR124 merged17adbf96ae0a9187732ad3a7837ec0d2d9b62d03; tree match and
[post-main40289823029](https://github.com/Ben-001-sys/Vellistry/actions/runs/40289823029) SUCCESS. Task59-62 history preserved.
Owner conditionally authorizes an owner-executed two-existing-synthetic-fixture
probe after prerequisites/exact protocol review. Task0063/CP0063 prepares the
[protocol](docs/reports/VEL-OWNER-PRINCIPAL-PROBE-PROTOCOL-0063.md), not executable Auth code.
All3fixture prerequisites UNKNOWN26October2026; HOSTED_EXECUTION_BLOCKED.
No account creation/enrollment change or agent credentials/hosted operations.
Conditional PRINCIPAL design remains separate from target/implementation trust;
other production gates pending; R01-R08 NOT_RUN; N12/independent EPERM BLOCKED.
Docs review/CI/owner merge pending; Issue108 OPEN; delegation EXPIRED.
```
~~~~~~

### `docs/agent-workflow/inputs/VEL-TASK-0070/IMPLEMENTATION-CONTRACT.md` @ `c8f260ae46565211d8bad43d0634f928599c3c1a`

~~~~~~markdown
# Task0070 bounded correction contract

FACT: main6d9ce61 has first parent1c544261 and reviewed second parent6fbd96a. Its complete tree equals187c8538. Historical push40951100355 FAILED; application/security/32PG17/12recovery passed. That failure remains historical.

Required algorithm: loader remains unchanged and reads evaluator/pack-validator from exact trusted event base (push before). For a two-parent push, keep first-parent==actual before, no extra parents, complete merged-tree==reviewed second-parent. Only after these guards derive the real git merge-base of trusted before and reviewed implementation. Evaluate original immutable Task against that genuine implementation range, never a caller-selected/fabricated base. Keep verifier_base=trusted before and actual event head=merge SHA; preserve implementation_head=reviewed second parent. Ordinary push/PR/manual validation and all existing tests remain enforced.

Acceptance: new synthetic ordinary and stacked histories including exact reviewed-tree success; negative wrong/ordered/extra parents, wrong before, resolution changes, fabricated/task change-base, reused/missing task, altered/missing/late pack, implementation before pack, missing/inconsistent EB, incorrect source/post-verification executable, scope/SQL/authorization/origin/cherry-pick, unrelated histories/malformed event/head and trusted-loader replacement. Reuse existing negative cases and add topology-specific tests rather than replacing them. Keep all existing fixtures and assertions.

Before correction run actual historical event through unchanged trusted evaluator and run new stacked regression against old implementation; preserve nonzero failure. After correction evaluate exact historical6d9ce61/1c544261/6fbd with full pack/provenance/workflow checks. This is a local re-evaluation, not a rerun or promotion of failed hosted CI. New PR branches from current main so unchanged trusted-base loader can evaluate its ordinary feature range; do not make candidate evaluator stand in for trusted source in CI. Test this explicitly with sentinels.

Run focused compliance, full current+archived governance, entrypoints/provenance, Task/CP/EB validation, metadata/readiness/traceability, frozen install/check/build and applicable CI app/security/PG17/recovery. Record actual commands/counts/exits/source hashes. Distinct read-only completed-head review, Draft advisory then Ready full CI before recommendation; no merge.

No changes outside exact executable two-file scope and listed supporting records. No accepted policy, loader, workflow, gate-policy, dependencies, app/Auth/SQL/security/settings/hosted or feature changes. Existing Task67/68 sources/packs/bundles/history immutable. Proposal only; owner separately decides integration. R01-R08 NOT_RUN; N12/historical EPERM BLOCKED; Issue108OPEN and remediation delegationEXPIRED.
~~~~~~

## Execution reporting
Return an ExecutionBundle with FACT / INTERPRETATION / PROPOSAL sections,
tests actually performed, changes, evidence gaps, and pending owner approval.
