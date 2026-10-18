---
id: VEL-REP-SEC-001-GH-ACTIONS-BLOCKER
type: execution-report
status: proposed-for-review
created_at: 2026-10-18
updated_at: 2026-10-18
version: 0.1.0
---

# VEL-SEC-001 manual harness — existing CI inventory approval blocker

## FACT — verified scope and identity

Main `021379856d07611752832b44bfe951d6ae36f0b2`; PR68 `cbb379fa4a4eaa9f576f3abcce2c2258d22cc551`, OPEN/DRAFT, unchanged. Original checkout uncommitted work untouched. Isolated `codex/vel-sec-001-actions`. History scan across all refs/committed agent artifact paths found IDs0001–0013. New0014 unused; Task0014 source/authorization/collision record committed `6279682ae4e576d8d910fa926672b0681b20398a`; generated validated immutable CP0014 committed `329eaba16dbb94d8436aec8406a7960ae8a3695b` before implementation. No harness code/workflow has been added.

The two different historical0012 Task/CP/EB lineages remain on codex/vel-sec-001 and docs/vel-language-standard-20261017. Pinned collision.json records both full heads and individual blobs. Neither is renamed, overwritten, relabeled or imported as current scope. Coordinator-prepared0013 is reserved historical source, not claimed as Codex execution. Task/CP/EB0014 supersedes only the blocked security experiment's dispatch identity for this new preparation attempt, with a new runner permission envelope.

Existing manual workflows were inspected: r18-postgres-memory.yml executes unrelated temporal-memory SQL; implementation-foundation.yml builds apps; none fetches the exact unmerged PR68 artifacts or runs the required supplemental books checks without code changes. Existing privileges job in ci.yml only runs already-integrated SQL; its source is absent. ci.yml must remain unchanged.

## FACT — demonstrated blocker and exact commands

`tests/test_ci_policy.py::WorkflowContractTests.test_only_one_automatic_workflow_and_original_jobs_intact` (lines135–142 in this baseline) checks every non-ci workflow against a fixed25-workflow historical jobs map and then asserts exactly that map plus ci.yml. It does not permit an additional manual-only workflow.

An unchanged existing test was executed in a subprocess with ROOT pointing at a temporary exact workflow/baseline copy:

- Unchanged26-file inventory:1test PASS, process exit0.
- Add only synthetic `vel-sec-001-pg17-manual.yml`, workflow_dispatch-only, contents:read:1test ERROR, process exit1; exact error `KeyError: 'vel-sec-001-pg17-manual.yml'` at existing line140. The subsequent fixed-set assertion would also reject the27th file.

Full subprocess argument lists, probe text, stdout/stderr/exits in `actual-command-exits.json` and `reproduce-inventory-blocker.txt`; earlier in-process result also preserved in workflow-inventory-negative-control.json. Temporary copy cleaned up. Actual checkout workflows, CI/test/policy sources, migration tree, application and PR68 unchanged. This is a CI contract negative control, not a PG17 test. No GitHub run, PostgreSQL container/server/version, SQL before/after result, actual privilege/RLS negative or cleanup result is claimed.

## INTERPRETATION — why this requires separate owner authority

The new manual-only workflow is permitted in the requested architecture, but the current effective inventory test forbids adding it. Satisfying both requires a narrowly reviewed CI-test invariant amendment. Existing Task0014 excludes CI policy/invariant edits and does not allow tests/test_ci_policy.py. Handoff6249776555 explicitly says: “Any flow requiring modifying the CI invariant or policy must be stopped for separate owner approval.” Its negative-control instruction also requires BLOCKED rather than loosening the gate.

Therefore implementation stops here. No rename/extension loophole, baseline rewrite, test removal, extra automatic workflow or compliance waiver is attempted. A draft harness PR with passing applicable CI cannot honestly be supplied under the current scope. The source snapshots/report remain a reviewable evidence branch, not a completed implementation PR.

## PROPOSAL — concrete bounded amendment for owner review, NOT applied

Authorize a fresh amendment Task/immutable ContextPack from reverified main whose additional path is only `tests/test_ci_policy.py`, to allow exactly `vel-sec-001-pg17-manual.yml` as one supplemental manual workflow. Preserve all25 original historical job dictionaries, exact ci.yml contents/six jobs, stable gate/evaluator, draft behavior, security/recovery tests and read-only token policy. Do not change the historical baseline archive.

Proposed inventory-test shape (reviewable proposal only):

```diff
 def test_only_one_automatic_workflow_and_original_jobs_intact(self):
+    supplemental = 'vel-sec-001-pg17-manual.yml'
     for path in (ROOT/'.github/workflows').glob('*.yml'):
         d=yaml.load(path.read_text(encoding='utf-8'),Loader=yaml.BaseLoader)
         if path.name=='ci.yml': continue
         self.assertEqual(set(d['on']),{'workflow_dispatch'},path.name)
+        if path.name == supplemental:
+            self.assertEqual(d.get('permissions'), {'contents':'read'})
+            # Dedicated exact-shape safety tests required for this workflow.
+            continue
         self.assertEqual(d['jobs'],self.baseline[path.name]['workflow']['jobs'],path.name)
-    self.assertEqual({p.name for p in (ROOT/'.github/workflows').glob('*.yml')},set(self.baseline)|{'ci.yml'})
+    self.assertEqual({p.name for p in (ROOT/'.github/workflows').glob('*.yml')},set(self.baseline)|{'ci.yml',supplemental})
     self.assertEqual(len(self.baseline),25)
```

The amendment must also require negative tests for an unknown workflow, any automatic event on the allowed manual workflow, elevated workflow/job permissions, changed historical jobs, weakened checkout/timeout/service-only target and any original gate modification. No change to scripts/ci_policy.py, scripts/pr_compliance.py, ci_governance.py or ci.yml is proposed. This proposal is not a claim that changing this invariant is already authorized.

After explicit owner approval, prepare a new authorized amendment/pack (0014 remains immutable history), implement the harness/helper/tests, run local and unchanged consolidated full/draft CI, submit draft PR, then owner decides harness integration. The new workflow cannot actually dispatch until its file exists on the default branch, per GitHub docs. Owner then dispatches reviewed revision or separately delegates. Only real run logs can supply SQL before/after proof and a later independent review/migration decision packet.

## Review, status and limitations

Task0014 BLOCKED pending explicit invariant-amendment authorization; CP0014 unchanged. Actual manual PG17 NOT_RUN; proposed third migration NOT_APPROVED; hosted Supabase UNCHANGED. No SQL copied/applied, hosted credentials/data, billing/settings/deployment/merge, PR68 edit or enforcement weakening. This request does not require owner approval of SQL or permission for a hosted database operation; it requires a precise repository CI-test scope amendment.
