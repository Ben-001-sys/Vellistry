# Exact selected updated mandate sections1/3

Originalbytes inUPDATED-MANDATE.md SHA2568129384277fe67f3490fd29955e78ded028c035d1dbf43b468b69bf75815e35c. Directuseradoptedthisdocument; nopurportedGitHubhumanreview.

## 1. Explicit, one-time owner delegation: decisions, PR merges, closures

### 1.1 Owner's direct authority statement

I am the owner of Vellistry. **For this single, existing remediation-and-integration assignment, I explicitly delegate to Codex my owner decision-making and repository integration authority for eligible repository-only remediation work.** This is my current and operative owner instruction, superseding earlier ambiguities that Codex may prepare work but must request me to click Merge on every eligible PR.

**I authorize Codex to act without repeatedly seeking my permission for routine decisions:** select technically appropriate fixes and approved terminology; validate and resolve the 44-item backlog; amend/reconcile routine governance and documentation issues; create governed tasks, immutable ContextPacks and ExecutionBundles; repair code/tests/CI within the remediation scope; push isolated branches; mark review-ready PRs ready as appropriate; request and incorporate real independent review; **merge eligible repository-only PRs**; **close or supersede unnecessary, obsolete, duplicate, failed or fully adopted PRs**; close/retag satisfied or obsolete issues; resolve integration conflicts; update `CURRENT-STATE.md`, Issue #71 and related registers; and run/verify all applicable checks. Do not stop at “awaiting owner merge” when this paragraph already authorizes that exact safe repository-only operation.

### 1.2 Specific governance interpretation and narrow exception

- Where ADR-0008, the operating model, or past Task language ordinarily reserve the **final repository-only merge action** for the owner, **this explicit message IS the owner's one-time decision and delegation to execute that merge** for remediation PRs satisfying the objective gates in §1.3. Record the authority in each affected NEW Task/ExecutionBundle/PR disposition as *“One-time owner delegation, 19 Oct 2026, remediation-only.”* Preserve the effective policy itself; do not silently edit historical approvals or immutable ContextPacks.
- Treat this as a **bounded, auditable per-program owner exception**, not as unrestricted bypass of governance, role separation or independent review. If the current governance supports formal exception records, create and validate a single new, properly pinned record and link it in each affected integration; do not manufacture separate owner approvals or claim an authenticated GitHub review the owner did not leave.
- If a validator enforces a generic `owner-merge-only` invariant even after this real exception is documented, first determine whether it is enforcing genuine safety evidence versus simply a missing one-time-delegation representation. Repair the scope-specific policy/exception handling through its own governed and reviewed PR **only if strictly necessary**; preserve all default protections and add negative tests showing unrelated/future merges remain disallowed. Do not weaken/disable CI, branch checks, task/pack provenance, or security gates merely to make a merge pass.
- **Do not silently defer eligible repository-only merges back to the owner.** If a technical permissions error, lack of a genuinely independent review, a failing *applicable* check, task/path noncompliance or an unreviewed security change actually prevents a merge, name that exact blocker with a URL/evidence, fix it where possible, and proceed with other eligible PRs. “Owner merge approval pending” by itself is **not** a valid blocker for PRs within this delegated scope.
- Codex may make a recommendation and integrate only after observing the required checks. **Its own self-review is not independent review.** An advisory review by a same-session Codex subagent must be labeled honestly; it cannot be substituted for an independent reviewer when the accepted process requires one. Obtain a real separate reviewer/checking channel or clearly document that distinct gate rather than pretending it passed.

### 1.3 Mandatory conditions BEFORE each repository-only merge

For **each exact PR head**: inspect the diff and authority; verify Task/allowlist and immutable pre-edit ContextPack; preserve original authorship; validate ExecutionBundle and historical evidence; obtain genuinely distinct source review as applicable; run focused positive and negative tests and required full **ready-state** CI for the *final reviewed head*; verify there is no unexpected CI/workflow/security/migration scope; resolve conflicts against fresh `main`; use a merge method consistent with provenance; merge only when every applicable non-advisory gate is met; verify merge commit, merged tree and post-merge CI **before** beginning dependent integration. A draft advisory failure is not a PASS, and a `workflow_dispatch` success alone does not prove ready-PR policy.

A merge-bearing SQL file can be **committed and merged as source** only if exact contents, historical ordering, approval (where required), offline tests and reviewer disposition permit. That is **NOT hosted SQL execution**. Do not change approved third-migration bytes without a distinct content decision.

### 1.4 Actions NOT covered by this one-time delegation

**Not authorized here:** hosted Supabase access, **including read-only inventory**, CLI auth/remote dry-run, SQL application, Auth fixture creation, migration history editing/reset/seed, production release/deploy, domain/billing/account/security-setting changes, credentials or service keys retrieval, accessing actual private author manuscripts, destructive real-data operations, paid AI calls, changes to G_PRIVATE_PILOT/G_RELEASE acceptance, or newly implementing IMP-002/003A/003B or other MVP features. If a later phase requires such an operation, prepare a target- and action-specific decision packet but **do not execute it under this mandate**.

This exception cannot magically create GitHub permissions or authenticate a reviewer; record actual operational blocks accurately. Keep `.env` and credentials local and ignored, avoid printing or committing them, and retain repo-only/dummy-fixture tests as the safe path.

### 1.5 Expiry and closure

This delegation is **single-use and remediation-program-specific**. It ends automatically once the existing authorized remediation/integration program is completed or formally closed with exact unresolved external blockers. It must not become an enduring policy that Codex can merge arbitrary future PRs. Future MVP work returns to ordinary Task and owner-governance rules and must receive a new mandate. No retroactive authorization of already executed historical actions is implied.

## 3. Governance execution protocol, repeated for EACH scoped task

Use the effective process, not a hypothetical one:

**Owner-scoped objective -> globally unique VEL-TASK -> pre-edit committed sources -> generated/validated/committed immutable Git-pinned VEL-CP -> isolated Codex worktree -> real implementation and negative tests -> VEL-EB factual evidence -> exact-head full CI and independent review -> permitted merge -> post-merge full CI / tree integrity -> issue/ledger/current-state reconciliation.**

- Allocate IDs absent from current main and all relevant active/historical refs. Historical Task/CP0012 collisions are NOT to be erased or reused. Inspect ID collisions with PR77, blocked security branches and Task0013–0016.
- Do not mutate or retrodate an immutable ContextPack. New material scope or permission needs a recorded amendment and newly pinned pack.
- Name explicit file/path allowlists, forbidden operations, dependencies, acceptance/negative tests, and time-limited authorizations. Treat code, CI, validators, SQL, root agent instructions and decisions as qualifying implementation, not exempt cosmetic docs.
- Preserve original ChatGPT, Cursor and Codex provenance on adopted/cherry-picked content. Commit author labels are NOT authenticated evidence of a model's execution; record actual tool/runtime and limits.
- Exact commands, return codes, fixtures, test counts, final SHA, CI URLs, changed files, constraints, rollback, FACT / INTERPRETATION / PROPOSAL and PASS/FAIL/BLOCKED/NOT_RUN are mandatory. Do not claim cold-start independence from a same-session check or independent approval from Codex itself.
- CI remains consolidated, with intentionally blocked draft merge gates, conservative applicable ready-PR checks, full main/manual verification and historical workflows manual-only. Do not resurrect obsolete automatic workflows or silently skip security/recovery.
- Inspect merged tree after every PR. Correct failed main post-merge tests before dependent merges.

