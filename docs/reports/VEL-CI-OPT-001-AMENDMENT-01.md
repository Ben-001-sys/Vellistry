---
id: VEL-CI-OPT-001-AMENDMENT-01
title: Owner-authorized draft-aware correction to VEL-TASK-0006
type: task-amendment
status: authorized-for-bounded-implementation
created_at: 2026-10-16
updated_at: 2026-10-16
version: 0.1.0
parent_task: VEL-TASK-0006
correction_task: VEL-TASK-0007
authorization: https://github.com/Ben-001-sys/Vellistry/issues/69#issuecomment-6224002164
review: https://github.com/Ben-001-sys/Vellistry/pull/70#issuecomment-6223732687
---

# Bounded amendment; original handoff retained

FACT: existing isolated branch/head is b713d945aa06a5fce6a5b9f63a0a9fdcaa4b88ee;
remote main remains 4b3996ef7cda878e1af3d679454bd1bb873a79c2. Worktree was clean.
No outside commit is overwritten. The owner explicitly dispatches the reviewed
correction; GitHub's coordinator relay preserves its actual provenance.

The original VEL-CP-0006 is immutable. The existing validator maps exactly one
live task to a pack, so replacing task0006's context_pack_id would invalidate
the old pack. Use new, uniqueness-checked VEL-TASK/CP/EB-0007 as a child correction
handoff, not a restarted product task. Task0006 stays the canonical parent;
EB0006 will link the amendment, corrected evidence and final external ledger.
No validator/governance decision is changed to bypass pinning. Commit this
amendment and its sources, generate CP0007 with the existing generator and
validate BEFORE changing CI. This is a same-session continuation, not a cold start.

PROPOSAL within explicit correction authority:
- Strictly validate PR draft/activity metadata. Ordinary draft updates select
  inexpensive governance; the stable Vellistry CI gate completes BLOCKED/FAILURE
  after advisory validation. Its name is unchanged and it never reports a
  merge-eligible green merely because expensive jobs were deferred.
- Ready PRs, ready_for_review, ready synchronization/base edits use conservative
  path classification. Main and explicit workflow_dispatch always run full.
  Missing/malformed draft state or contradictory activity fails closed.
- The gate independently derives the expected plan from the exact event/head
  and full Git history, rather than trusting classifier mode/flags alone.
  Failed/cancelled/missing/applicable-skipped results still fail. Unknown paths,
  author isolation, SQL-availability and deletion guards remain intact.
- Current branch dispatch is registered and actually accepted before merging:
  gh workflow run ci.yml --ref codex/vel-ci-opt-001 returned run38962146340
  (old b713 head, availability checkpoint only). Earlier assumptions that
  pre-merge dispatch could not be proven are superseded. Final corrected SHA
  must have a real draft advisory run and a real explicit-full run. Do not
  mark PR ready merely to manufacture a ready event.
- Add verified pinned actionlint to the lightweight governance job, retaining
  all original archive job bodies and least privilege.
- Reconcile EB0006/usage to the independently verified b713 run38958548133:
  184 allocated-job seconds, versus 296 old-main (37.84% observed difference).
  Preserve initial4259620/232 seconds historically. Billable minutes unavailable;
  general75/60 percent goals remain unproven. Anchor final correction-head/run
  evidence in a stable append-only PR evidence ledger to avoid self-reference.

No GitHub check-name/protection/billing/auth-scope changes, PR68 edits, cloud
operations, app/SQL feature fixes, deployment or merges are authorized. Current
protection reads say Branch not protected / effective rules[]; none is changed.
