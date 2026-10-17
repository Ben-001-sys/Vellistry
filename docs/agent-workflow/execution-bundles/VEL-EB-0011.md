---
id: VEL-EB-0011
title: Vellistry PR77 language handoff and ID collision correction evidence
type: execution-bundle
status: proposed-for-review
created_at: '2026-10-17'
version: 0.1.0
task_id: VEL-TASK-0011
context_pack_id: VEL-CP-0011
base_commit: 5d164015bc7640f40e7d00aa619eb7ed0afba85e
agent:
  name: ChatGPT
  model: GPT-6
  runner: Connected GitHub repository operations and exact-source comparisons
  role: owner-exception direct executor for bounded PR77 documentation correction
sources:
- PROJECT-CONSTITUTION.md
- SOURCE-OF-TRUTH.md
- AGENTS.md
- docs/agent-workflow/README.md
- docs/requirements/MVP-SCOPE-DECISION-2026-10-09.md
- docs/decisions/ADR-0007-immutable-compact-expanded-guidance-sources.md
- docs/agent-workflow/inputs/VEL-TASK-0011/PR77-CORRECTION-SOURCE-MAP.md
evidence:
- https://github.com/Ben-001-sys/Vellistry/pull/77
- https://github.com/Ben-001-sys/Vellistry/pull/76
- docs/agent-workflow/inputs/VEL-TASK-0011/PR77-CORRECTION-SOURCE-MAP.md
review:
  status: pending
  approved_by: null
  evidence: null
implementation_source_commit: 999b5e81873071292099020f818a76dd017dce86
amends_historical_task_commit: e4c31a8b27e086fd50a9aca7782a3ad3a0d2955e
---

# PR77 unique language handoff and cross-PR remediation

## Work performed

FACT: Following the owner's 2026-10-17 instruction to fix reviewed PR77, documented the collision and historical sources in a committed source map, committed new `VEL-TASK-0011` in `5d164015bc7640f40e7d00aa619eb7ed0afba85e`, and committed new pinned `VEL-CP-0011` in `2c31eb8f8314d0d0673cf608e7f378d1b41dda95` **before** the 0011-scoped corrective edits. Compared its entire rendered task contract and all seven pinned source blocks against GitHub source/commit blobs before editing. Removed the three conflicting `0010` files only from PR77's current tree. They remain in Git history, and PR76's separate `0010` records remain untouched. Updated the stale section15.4 status sentence in root LANGUAGE.md. The original AGENTS.md language insertion remains intact; other PR branches not edited.

## Facts and evidence

- Current `VEL-TASK-0011` / `VEL-CP-0011` / `VEL-EB-0011` constitute a NEW corrective task. They do not rename, replace, or forge approval of the historical PR77 source commits.
- Prior ChatGPT `0010` integration commits (source task `e4c31a8`, initial malformed CP `4ecb2f4`, language `3118e60`, AGENTS `dc7e206`) remain traceable through unchanged Git ancestry. The original CP was **not validated before the original language/agent edits**; later `de515a7` fixed it. The source map records this chronology.
- PR76 `VEL-TASK/CP/EB-0010` is a different Codex task. PR77 no longer proposes canonical files with those names. AGENTS.md is edited by both PRs, so final merge order/reconciliation remains an independent owner-controlled step.
- Original language blob `c42e0fd813644a7718a1b5ae279c962bdd966e08` is preserved in Git. Current LANGUAGE.md modifies only one historical integration-status sentence, and still has `status: proposed-owner-review`, not accepted.
- PR77 reviewer identified the issues while PR77 exact original head `6868ad1` had a successful [CI run39053325233](https://github.com/Ben-001-sys/Vellistry/actions/runs/39053325233). That run predates the corrective work and PR76's pending compliance policy.

## Interpretations

The cross-PR canonical-ID collision is resolved on PR77's current branch without modifying PR76. This is not a claim that either PR is automatically mergeable after the other: PR76's new compliance policy, task-scoped alternate-executor authorization requirements, and possible rebase are separate material gates. Green checks on the old `main` baseline cannot certify future PR76-derived policy.

## Proposals

Owner decides PR sequence and semantic term adoption. The recommended integration is to merge/review PR76's governance policy first if that is the intended baseline, then prepare a fresh compliant task/authorization/rebase for remaining PR77 changes under the owner-reviewed policy. Do not self-create an owner-verified exception on the candidate branch or misattribute historical ChatGPT work to Codex. If the owner elects PR77 first, independently review PR76's fixed bootstrap/base dependence before its merge.

## Tests

- PASS (direct GitHub pinned-source comparison before corrections): `VEL-CP-0011` embedded all seven exact checked-source snapshots and exact task-contract rendering, with pinned Task0011 blob `4b4b01f8d07cb3252dfbc7b58305b85edb6d9c63` from `5d164015`.
- PASS (GitHub file mutations and ref inspection): three PR77-only 0010 files deleted in commits `7a456e4`, `1ae7214`, `905e20a`, preserving original Git history.
- PASS (scoped text edit): LANGUAGE.md section15.4 corrected in `999b5e8`; original proposal and AGENTS contents otherwise unchanged.
- Earlier original PR77 exact-head CI: SUCCESS for `6868ad1` (ready docs routing) as historical evidence.
- At initial execution-bundle commit: actual **new** exact-head CI and repository Python `scripts/agent_workflow.py validate` run are NOT YET verified; inspect the run attached to the final correction head, and do not infer PASS from this description. Direct local code checkout unavailable in this session.
- NOT RUN: current PR76 policy compliance against a merged/rebased trusted base, application/SQL/hosted tests, real-author usability tests, secrets, deployments or private manuscripts.

## Artifacts

- `LANGUAGE.md` — proposal preserved, one historical insertion sentence corrected
- `AGENTS.md` — retained existing PR77 scoped language guidance
- `docs/agent-workflow/inputs/VEL-TASK-0011/PR77-CORRECTION-SOURCE-MAP.md`
- `docs/agent-workflow/tasks/VEL-TASK-0011.yaml`
- `docs/agent-workflow/context-packs/VEL-CP-0011.md`
- `docs/agent-workflow/execution-bundles/VEL-EB-0011.md`

## Risks

- The original pre-implementation handoff chronology remains imperfect and cannot be retroactively rewritten.
- Neither current branch review nor this documentation PR confers authenticated owner acceptance, a verified PR76 alternate-executor exception or future merge eligibility.
- PR76 edits AGENTS.md and is built on the same initial main. PR76's bootstrap and PR77's future compliance must be reconciled sequentially. Main unprotected settings are not altered.

## Reviewer disposition

Pending independent exact-correction-head review and owner's explicit decision. Do not merge automatically.


## Post-PR76 merge checkpoint — 2026-10-17

**FACT:** While this corrective PR77 was in progress, [PR76](https://github.com/Ben-001-sys/Vellistry/pull/76) was merged into `main`; checked main is `021379856d07611752832b44bfe951d6ae36f0b2`. Its now-effective CI workflow invokes `python -I scripts/run_pr_compliance.py` and its current Task/CP/EB0010 are owned by PR76. PR77 is still on its original `f371448` fork and does not contain that runner.

**ACTUAL CI FAILURE:** At PR77 operative correction commit `999b5e81873071292099020f818a76dd017dce86`, [CI run39075585267](https://github.com/Ben-001-sys/Vellistry/actions/runs/39075585267) classified successfully but failed in the new governance stage because the PR76 runner file was **missing from the checked-out PR77 source branch**. This is not a failing product-language test or proof the new CP0011 is invalid. A fresh exact-head run must be checked after any next correction.

**BLOCKED, not auto-resolved:** New main's PR compliance requires `compliance.change_base` equal to the evaluated current merge base, pre-edit immutable pack after that base, source/manifest/EB matching and (for ChatGPT as an alternate executor) a task-specific **owner-verified record already present in reviewed main**. It cannot be satisfied by rewriting a historical pin, relabeling ChatGPT as Codex, self-granting exception inside PR77, or recording a fictitious PASS. The user explicitly requested the corrections; a repository-side verified-base authorization with durable link still requires the owner's separate documented action under merged PR76 policy. The next bounded integration must rebase onto the merged main after that owner checkpoint, create a new appropriately scoped pinned task/amendment, retain source ChatGPT provenance and validate actual exact-head checks. This bundle intentionally leaves that post-merge compliance step pending.

**INFERENCE:** The resolved duplicate-ID fix remains valid and should not be undone; the new blocker is sequential integration with subsequently merged PR76 governance.
