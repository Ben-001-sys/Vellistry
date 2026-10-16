# Bounded correction authority and independent review

Direct owner dispatch in the current Codex conversation authorizes the correction. The first GitHub comment is explicitly a ChatGPT coordinator relay of owner authorization, not independently human-authored approval. The second is an AI review, not a second human approval. No merge, billing/admin, hosted or PR68 authorization is inferred.

Source: https://github.com/Ben-001-sys/Vellistry/issues/69#issuecomment-6224002164
Created: 2026-10-16T20:23:08Z

## Owner go-ahead for Codex correction pass — 2026-10-16

**Authority provenance:** In the ChatGPT coordinator conversation, following the independent review of PR #70 and recommendation for a Codex revision, the project owner replied **"lets go"**. This is relayed by the coordinator, **not** a GitHub comment independently authored by the owner.

Proceed only with a **bounded Codex revision** of [draft PR #70](https://github.com/Ben-001-sys/Vellistry/pull/70) responding to [the exact-head review](https://github.com/Ben-001-sys/Vellistry/pull/70#issuecomment-6223732687). Current observed PR head: `b713d945aa06a5fce6a5b9f63a0a9fdcaa4b88ee`. Re-read live head before editing; don't overwrite outside changes.

Required correction:
1. Implement **draft-aware CI**: ordinary draft updates get inexpensive truthful validation, while ready-for-review PRs, relevant security/auth/database changes before merge, main pushes, and explicitly invoked full verification get required checks. Prove no draft advisory PASS can be treated as a merge-eligible security PASS; avoid a permanently pending required check. Cover `ready_for_review`, `synchronize` on ready PR, `edited`/base change, and unknown paths in negative regression tests.
2. Update `VEL-EB-0006` and usage evidence to make the latest observed exact-head run discoverable while preserving earlier 232-second observation as historical. Report measured seconds separately from actual billed minutes; do not claim the general usage targets are met.
3. Preserve all existing security, SQL privilege availability, author-isolation, governance and rollback safeguards; don't modify PR #68 or cloud Supabase. Any change to accepted decisions, billing/protection, live migrations, merge or unrelated features is OUT OF SCOPE.

**Delivery:** Codex uses the existing isolated branch, documents task-amendment authorization and any needed ContextPack re-pin as the governance contract requires (do not silently mutate immutable `VEL-CP-0006`), commits/tests changes, and returns a **new exact head**, live GitHub Actions links and updated ExecutionBundle. Keep PR **draft and unmerged**. ChatGPT then conducts another independent exact-head review; owner decides merging.

**Status:** authorization recorded for Codex; no Codex run is initiated by this GitHub comment and this comment is not implementation evidence.

Source: https://github.com/Ben-001-sys/Vellistry/pull/70#issuecomment-6223732687
Created: 2026-10-16T20:06:51Z

## ChatGPT coordinator — independent exact-head review (2026-10-16)

**Reviewed head:** `b713d945aa06a5fce6a5b9f63a0a9fdcaa4b88ee` against merged main `4b3996ef7cda878e1af3d679454bd1bb873a79c2`. **Disposition: targeted revisions requested; no merge/approval.** This is an AI source/evidence review, not a second human's approval. No source changes made by reviewer.

### Verified strengths (FACT)
- GitHub PR is draft and unmerged. Exactly **one primary auto workflow** is introduced; original 25 jobs are preserved behind manual dispatch. Reviewed full primary YAML and core Python classifier/governance/gate/tests plus trigger-only diff of the archived workflows.
- The pinned `VEL-CP-0006` identifies task blob `cc8954a02b219f8793fc1ef65f16928e14429e4f` and coverage blob `afa2a30205cdefa82e9f13da0df54f1b0d4d4d71` at `dcd9843d536ba9146e4b422f4a33554132961de5`; both blobs were verified against that commit's Git tree. Handoff created before implementation as reported; **same-session**, not a proven independent cold start.
- Exact-head run [38958548133](https://github.com/Ben-001-sys/Vellistry/actions/runs/38958548133) completed **success**: classify, governance, application/Supabase security, PostgreSQL recovery and final gate all succeeded. SQL privileges skipped because proposed PR #68 SQL source is not in merged main. The `check_gate` code fails on missing/malformed outputs, failed/cancelled jobs and skipped applicable jobs.
- Live job timestamps total **184 runner-execution seconds** (4+133+14+27+6) on this head, versus the recorded **296 seconds** in the historical old-main cohort: 37.84% lower observed allocation span. This is **not billable minutes**, nor evidence of >=75% generalized invocation savings or ~60% runner-minute savings.
- No application code, SQL migrations, billing or hosted Supabase project changes in this PR.

### Finding 1 — Draft PRs still launch expensive full integration (priority: reduce cost before accepting the optimization)
**Source:** `.github/workflows/ci.yml` `pull_request` includes opened/synchronize for drafts, while `application.if`, `recovery.if` and the security steps depend only on changed-path flags. Neither `scripts/ci_policy.py` nor the job guards distinguish `pull_request.draft`. This draft #70 itself ran all five disposable Supabase probes, both builds and PostgreSQL recovery.

The previously agreed optimization plan called for **cheap draft feedback** with all applicable checks enforced when marked `ready_for_review`, plus explicitly requested full verification when useful. The issue's one-workflow consolidation is met, but this specific cost-saving behavior remains absent, undermining repeat-commit usage savings.

**Request to Codex:** add and test an explicit draft-vs-ready policy (lightweight governance for ordinary draft iteration; ready-for-review, main and manual full verification). Make the final gate clearly differentiate a *draft-only advisory pass* from merge-eligible full PASS, and fail closed if ready-for-review attempts to skip any security test. Include negative cases, a real draft-head run and a ready/full run at the final source SHA. If implementation would require new GitHub owner approval or check-name changes, document and stop instead. Do not silently weaken any required security gate.

### Finding 2 — Final-head evidence is in PR text, not yet fully reconciled within canonical EB (documentation/evidence consistency)
**Source:** `docs/agent-workflow/execution-bundles/VEL-EB-0006.md` still lists `verified_implementation_head: 4259620...`, CI run `38956662940`, and the 232-second observation (21.62%) rather than final head `b713...`, run `38958548133` and 184 seconds. This is **not a fabricated result**: the bundle correctly labels earlier source evidence and PR body links the final run. However, users reading only the canonical bundle can miss the final checkpoint and mistakenly treat the earlier evidence as the current final result.

**Request to Codex:** reconcile the bundle's latest verifiable evidence via a dated addendum/cross-reference and update the usage report appropriately. Avoid an impossible self-referential commit SHA: the signed-off final commit and its live run can be an append-only PR comment or review ledger anchored externally. Preserve historical 232-second measurements as historical rather than rewriting them as final.

### Finding 3 — Future cross-PR trigger restoration (owner integration hold, no changes requested on PR68 here)
PR [#68](https://github.com/Ben-001-sys/Vellistry/pull/68) still changes the older foundation/K2 workflow definitions and includes `pull_request` and broad `push` triggers. **After #70 merges, #68 must be rebased/reconciled** before acceptance or it can reintroduce duplicated automatic CI. The proposed privileges regression is not present in `main`; its current skip is acceptable and is **not** a database privilege PASS. Keep security authorizations separate.

### Other unproven cases / acceptance holds
- Live docs-only run and draft->ready transition after replacement are not yet observed; 24 routing scenarios are local regression evidence, not all live triggers.
- New post-merge `main` job and manual-dispatch registration cannot be verified until default-branch integration. Owner should assess these explicitly.
- Automated actionlint-on-future-workflow-edits is not part of current primary workflow; today's local actionlint PASS does not prove future edits will receive the same analysis. Consider a lightweight guarded validation step without restoring CI fanout.
- CodeRabbit skipped review due draft status: not a positive review.
- No billable GitHub Actions usage data; savings targets remain unverified.

**Next:** Codex should make only the scoped correction(s) on its assigned worktree, update VEL-EB-0006 evidence and submit the new exact head for another ChatGPT review. **Do not merge or change billing, cloud data, PR #68 or owner protections.** Owner retains final decision.
