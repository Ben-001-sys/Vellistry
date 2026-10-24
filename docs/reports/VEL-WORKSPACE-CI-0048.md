---
id: VEL-WORKSPACE-CI-0048
title: Workspace regression CI coverage
type: implementation-report
status: proposed-for-review
created_at: 2026-10-24
owner: project_owner
version: 0.1.0
---

# FACT: bounded CI coverage

Base main a9e7c48bc7198f6f23f7be5bb77ad54f1f27e2e4 integrates owner-approved PR111;
merged/reviewed tree da9bf02eefadeeeae0156685d92ff2523824c291 equals its reviewed head.
Post-main40111872132 SUCCESS. Task47/CP47/EB47 and original local41workspace/33browser
records remain unchanged; the independent runtime EPERM is not PASS.

Task0048/CP0048 were committed and validated before tests/workflow edits. One new
unconditional `pnpm test:workspace-contract` step runs in the existing applicable
application job after frozen installation and before build. No new workflow, token
permission, dependency, application source, auth/SQL or routing policy changed.
Draft advisory behavior, original security diagnostics, CAS/restore and final gate
remain intact. CURRENT-STATE reconciles integration without exceeding its size bound.

Before workflow correction, committed CI tests ran39cases with38PASS/1FAIL because
the actual workspace step was absent. After adding it,39/39 PASS, including12synthetic
removal/replacement/duplicate/skip/masking/environment/shell/directory/order mutations
that must be rejected. Actual frozen install and41workspace cases PASS at aa92cba;
metadata/readiness and8entrypoint guards PASS, all exits0. Raw source-specific evidence
is in evidence/VEL-TASK-0048. Builds and real application/security/recovery are covered
by final exact-head CI; no unrelated research or prior browser suite is rerun locally.

# INTERPRETATION

Coverage becomes automatic on subsequent applicable application PRs only after owner
merge. This branch does not claim main already invokes the suite. A failing workspace
command propagates through the existing job/final gate. Tests guard accidental removal
or bypass; existing lack-of-protected-settings limits are not changed or solved here.

# PROPOSAL

Review exact diff/EB/provenance and actual draft/ready CI, then separately decide merge.
Owner authority is ordinary governance; remediation delegation stays expired. No hosted
acceptance, persistence capability, broad gate promotion or automatic merge follows.

## Direct-runner correction

First distinct source review found no actionable CI defect; its read-only fixture
limitations are preserved. Primary inspection found the existing unittest.main guard
preceded the appended class: direct execution ran37old tests, while CI discovery
correctly ran39. Move the guard after all classes so both invocation forms execute
the new coverage contract. Raw before/after outputs retain actual counts. This
changes no workflow behavior, security gate, task scope or immutable pack.
