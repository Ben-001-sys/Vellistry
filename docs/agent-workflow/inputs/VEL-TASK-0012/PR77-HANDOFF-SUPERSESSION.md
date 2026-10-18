---
id: VEL-LANG-PR77-CORR-002
title: PR77 invalid CP0011 and post-PR76 compliance integration source record
type: task-input
status: proposed
created_at: 2026-10-18
updated_at: 2026-10-18
owner: project_owner
---

# PR77 correction02: malformed pinned pack and changed main

## Verified timeline
- Owner requested "check pr77 and do the fixes", 2026-10-18 in current conversation; owner previously authorized bounded direct repo edits for the language integration and subsequent corrections. No durable link to this chat is available; it is NOT a GitHub-reviewed-base executor-exception record.
- The original language integration used conflicting `VEL-TASK/CP/EB-0010` identifiers, now permanently reserved by merged PR76. PR77 corrected its *current tree* to `0011` while preserving old history.
- PR77's Task0011 first committed in `5d164015bc7640f40e7d00aa619eb7ed0afba85e`, CP0011 first committed in `2c31eb8f8314d0d0673cf608e7f378d1b41dda95`, and Task0011-scoped changes followed. **New independent [review](https://github.com/Ben-001-sys/Vellistry/pull/77)** on 2026-10-17 found its task contract line 76 `**Acceptance criteria:` instead of exactly `**Acceptance criteria:**`. Under `scripts/agent_workflow.py` the complete render is byte-compared, so CP0011 **was NOT VALID** at implementation time. The prior ChatGPT self-comparison was defective, not independent script validation. Do not claim it passed. Preserve its complete original commit as an immutable historical record.
- Owner-merged [PR76](https://github.com/Ben-001-sys/Vellistry/pull/76) created new main `021379856d07611752832b44bfe951d6ae36f0b2`. PR77 head `8df7bed3c7e2ebb424a9c4d26a80423d8f345430` was branched from historical `f371448538dafa92faebbef9bcda2a36c6ca1fa9` and omits `scripts/run_pr_compliance.py`. [Actual PR77 CI](https://github.com/Ben-001-sys/Vellistry/actions/runs/39075869168) fails in required governance invocation because loader is absent; old green checks do not certify current main's policy.
- PR76's current policy `docs/agent-workflow/PR-COMPLIANCE.md` requires a task-specific owner-verified exception for an alternate executor anchored to reviewed `main`, a new task/validated pre-edit pinned pack after current baseline, a manifest, truthful inherited ChatGPT provenance and exact-head ready/full checks. No owner-verified authorization file for this language task was found on checked `main`; user direction in chat is not itself that repository checkpoint.
- The current root `LANGUAGE.md` retains `status: proposed-owner-review`. Its unchanged original content blob was `c42e0fd813644a7718a1b5ae279c962bdd966e08`; subsequent section15.4 correction belongs to PR77. Current PR77 `AGENTS.md` predates PR76's merged policy text and must not overwrite that newer text during eventual adoption.

## Task0012 repair boundary
Start a **new and distinct corrective task** to remove the *current tree* Task/CP/EB0011 files as an inconsistent handoff set, replacing them with unique Task/CP/EB0012 records. Commit Task0012 and this source map, commit and actually verify a pinned CP0012 before removing the 0011 paths or making other corrections. Do NOT alter the pinned contents of either the original CP0011 or its original commit, backdate verification, or claim a successful original pre-edit pack.

The earlier original ChatGPT commits and first malformed CP0010 are also historical. The corrective 0012 does not substitute for the **post-PR76 new-base** integration task/authorization required by merged policy. No automatic merge, CI bypass, change to repo owner identity, secret, hosted data, schema or app code is authorized.

## Pending, not agent-approved
An owner-reviewed base authorization and later new-base compliant integration (or independently owner-authorized Codex implementation retaining provenance) still requires separate owner action. Do not self-create a misleading `status: owner-verified` record from this agent session. This record is a source for the new correction, **not** a claim of final approval.
