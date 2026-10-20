# Vellistry — Master Codex Remediation and Repository Integration Mandate

**One-time owner-authorized completion directive — 19 October 2026**  
**Supersedes the execution scope and merge-authority wording of the 18 October 2026 unified mandate.** It is a continuation/amendment, not a new or retrospective authorization for historical work.  
**Repository:** https://github.com/Ben-001-sys/Vellistry  
**Live `main` checkpoint (verified 19 October 2026):** `fca0d96fd071f1165e3e16658d821a3d36a20293`  
**Last observed merged-main CI:** https://github.com/Ben-001-sys/Vellistry/actions/runs/39136089610  
**Remediation tracker:** https://github.com/Ben-001-sys/Vellistry/issues/71  
**Offline Supabase/PR68 task:** https://github.com/Ben-001-sys/Vellistry/issues/81  
**Reference inputs:** Original 44-item checklist (unaltered Appendix A); original unified mandate; 19 October 2026 Codex remediation ledger and live PR/CI records.  

**Scope correction:** This mandate is **remediation and integration ONLY**. IMP-002, IMP-003A and IMP-003B are future **separately dispatched feature tasks**, NOT tasks to start under this directive. Prior requirements about their design, security and Lovable QA are retained only as *future handoff criteria*, not deliverables for this phase. Do not quietly broaden this mandate.

## 0. Mission, priority, and required outcome

You are **Codex, Vellistry's primary implementation agent** under accepted ADR-0008. The owner is instructing you to **finish the existing remediation program**, not restart its research cycle and not begin new author-facing application features.

**Complete the following in dependency order:**

1. Revalidate and resolve as much of the **original 44-item agentic-coding remediation checklist** as the existing evidence and expressly authorized actions permit. For unavailable original sources, unavailable fresh-agent environments, or separately controlled hosted actions, record precise unresolved gates; never invent completion.
2. **Review, fix, merge, or close/supersede every existing remediation PR** using the owner's one-time, time-limited repository integration delegation in §1. An old draft must not remain open merely because the general operating model ordinarily says an owner performs final merges. The owner has granted that specific authority for this program, subject to real review/CI/security checks.
3. Correct source-of-truth drift, product-language decisions LANG-P01–P15 within supported evidence, governance/CI, provenance, evidence preservation, handoff and recovery requirements.
4. Safely integrate the still-needed repository-level Supabase preflight/security sources while leaving **hosted development execution separately controlled**. Never merge obsolete CI definitions from PR68 or confuse committing SQL with applying it.
5. Verify final merged `main`, exact-head and post-merge CI, artifact integrity, dependency reconciliation, tracked issue outcomes and next-step readiness. Return a concrete, trustworthy handoff for **separately authorized** MVP implementation.

**Meaning of “finish all PRs”:** Provide each PR a source-based final disposition—`MERGED`, `CLOSED_SUPERSEDED`, `CLOSED_REJECTED_WITH_REASON`, or `REMAINS_BLOCKED_WITH_EXACT_EXTERNAL_GATE`. It does **not** mean blindly merging duplicate/stale branches. Keep the backlog small and do the integrations rather than collecting additional draft planning PRs.

The accepted Vellistry project constitution, ADRs, original 44-item acceptance requirements and application security design remain controlling evidence. Historical snapshots are not current implementation. The existing eleven journeys, 149-feature crosswalk, eight MVP areas and Lovable synthetic QA are relevant for **readiness assessment and future handoff**, not permission to build additional MVP features now.

**Execute now.** This is one continuous, owner-authorized remediation effort using individually scoped Task/ContextPack/ExecutionBundle records—not one giant PR and not one retrospective blanket Task permission.

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

## 2. Mandatory live preflight and source precedence

Fetch `origin/main`, all PRs (open/draft/merged/closed), current issues, branch relationships, recent CI runs, protections/rulesets and the exact current code. Record actual SHAs and dates; the checkpoint above is historical. Do not discard uncommitted Windows/worktree changes or replace a collaborator/agent branch.

Read, in authority order:

- `PROJECT-CONSTITUTION.md`, `PROJECT.md`, `SOURCE-OF-TRUTH.md`, `CURRENT-STATE.md`, `AGENTS.md`, accepted ADRs (especially ADR-0003 Tiptap, ADR-0004 portability, ADR-0006 stack, ADR-0007 guidance provenance, ADR-0008 Codex roles).
- `LANGUAGE.md` as a **merged proposed-owner-review candidate**, not 15 already-approved UI decisions.
- `docs/agent-workflow/README.md`, `IMPLEMENTATION-OPERATING-MODEL.md`, `PR-COMPLIANCE.md`, effective compliance/CI scripts and tests, existing Task/ContextPack/ExecutionBundle conventions, original authorization and provenance evidence.
- MVP-scope decision, master implementation plan, PLAN-01 149-feature crosswalk, PLAN-02 data architecture, PLAN-03 UX navigation/states, PLAN-04 security/recovery, eleven journeys, chapter-save specification, latest acceptance and research evidence.
- Actual production `apps/web`, `apps/api`, `supabase/migrations`, and existing disposable security experiments. Read any applicable framework docs from authoritative sources if APIs have changed.
- Original **44-item checklist in the appendix below** (a source transcription supplied with this mandate). Search for the actual owner-provided `.md` original and verify its bytes/hashes if accessible; do not misrepresent a transcription as an original-byte archive. Read relevant original fiction-writing research/blueprint as *product research*, with accepted scope taking precedence.

When claims conflict, distinguish **owner decision / accepted source / checked merged main / PR proposal / historical checkpoint / synthetic experiment / real hosted acceptance**. Document contradictions before changing code. A green CI job verifies only what it actually ran.

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

## 4. Program control: full 44-item audit and remediation

The earlier second mandate supplied an **unverified initial checkpoint** of DONE14, PARTIAL21, BLOCKED5, NOT_STARTED4. The more recent Codex ledger (19 October 2026, unmerged PR #83) classifies **14 DONE / 21 PARTIAL / 4 BLOCKED / 4 IN_VERIFICATION / 1 NOT_STARTED = 44**; these are still author-Codex candidate classifications, **not** evidence of integration or final owner check-off. Revalidate current counts as merges occur. Historical initial counts are retained for traceability, not used as current metrics. Its purported completed numbers (02,05,06,10,20,21,22,25,26,28,29,31,34,43) are **candidate historical assessments, not truth**. For instance #05 was demonstrated by a real disposable PG17 run; #06 concerns a narrow **SQL definition** approval and not a hosted apply.

Audit EACH of the 44 original numbered requirements in the annex, preserving wording and numbering. **Reuse and integrate existing draft PR #83's 44-item ledger rather than creating a duplicate from scratch**, correcting only observed omissions/conflicts in a governed work package; keep Issue #71 as its index. For every entry: original acceptance text, exact beginning evidence, current status, branch/issue/PR, dependencies, executor, original source links, expected negative tests, actual command/run evidence, proposed work, owner gate, final result/limitation and date/SHA. Derive counts from observed evidence, not from the supplied estimates. Use DONE/PARTIAL/BLOCKED/NOT_STARTED/IN_VERIFICATION consistently.

Group execution by dependency, not numerical order:

- Governance/CI/current truth: 01,02,10–15,17–26,28–35,44.
- PR conflicts, security/hosted readiness: 03–09,36,37,39.
- Original sources, independent cold-start, recovery: 16,27,30,38,41.
- Product acceptance traceability and workflow metrics: 40,42.
- Orchestration restraint: 43.

Avoid a 44-file paper exercise: implement demonstrably missing checks, produce real negative evidence, and retain already functional controls. Respect the owner's earlier solo-maintainer branch-protection deferral; record what remains technically bypassable instead of pretending static compliance authenticates humans. Do not touch GitHub account/payment/security settings without specific authorization.

## 5. Live PR inventory, integration queue and closure rules

### 5.1 Verified GitHub snapshot — 19 October 2026

The latest connected GitHub check found `main` at `fca0d96fd071f1165e3e16658d821a3d36a20293`, with **nine open DRAFT PRs and no new merged remediation PR**. This is a checkpoint; re-fetch before action. It supersedes the historical four-open-PR inventory in the 18 October mandate.

| PR | Live state at this checkpoint | Intent and prescribed next action |
|---|---|---|
| [#83](https://github.com/Ben-001-sys/Vellistry/pull/83) | OPEN/DRAFT, `bae35db6` | Current state, immutable Task0018 and 44-item ledger. Validate on latest merged main, reconcile any subsequently integrated PRs, then independently review and integrate. This status document should not become stale on merge. |
| [#84](https://github.com/Ben-001-sys/Vellistry/pull/84) | OPEN/DRAFT, `8a4e526b` | PG17 artifact preservation; offline PR65/68 provenance/conflict review and Issue81 evidence. Review actual artifact hashes and integrate if valid. No hosted operation. |
| [#85](https://github.com/Ben-001-sys/Vellistry/pull/85) | OPEN/DRAFT, `cb6b5d0e` | Main-based selective adoption of safe preflight helper/tests from #65/#68. Verify the 19 focused tests, source attribution and current CI. Merge if eligible; do not merge old preflight PR wholesale. |
| [#86](https://github.com/Ben-001-sys/Vellistry/pull/86) | OPEN/DRAFT, `6feb8d84` | Auditable PR dispositions. #59, #66, #82 have already been closed unmerged; re-verify closure evidence, integrate disposition record and continue old issue reconciliation. |
| [#87](https://github.com/Ben-001-sys/Vellistry/pull/87) | OPEN/DRAFT, `e08a3f6e` | Tested bounded recovery bundle plus evidence. Verify final SHA, success #39324992456, negative cases, retained pins and repository size/security before integration. This is not a fresh independent agent/clean-OS claim. |
| [#88](https://github.com/Ben-001-sys/Vellistry/pull/88) | OPEN/DRAFT, `49edaa33` | LANG-P01–P15 evidence matrix; decide supported terminology under this owner delegation; preserve unresolved legal/source/provider/hosted claims. Reconcile with #89 after whichever is integrated first. |
| [#89](https://github.com/Ben-001-sys/Vellistry/pull/89) | OPEN/DRAFT, `310f96c1` | Corrects merged-presence LANG-P15 claim in candidate `LANGUAGE.md`, preserves proposed/owner-review status. Merge eligible factual correction without treating all 15 proposals as approved. |
| [#65](https://github.com/Ben-001-sys/Vellistry/pull/65) | OPEN/DRAFT, `604e1ebf` | Historical ChatGPT-authored preflight. Compare to #85 and any uniquely needed env examples. After verified selective adoption or justified omission, **close as superseded** with precise successor/provenance links. |
| [#68](https://github.com/Ben-001-sys/Vellistry/pull/68) | OPEN/DRAFT, `cbb379fa` | Historically stale, conflict-prone preflight/SQL proposal. Use #84 evidence and new governed, current-main *minimal* integration of any approved missing SQL/regression source; exclude obsolete CI/stale governance. Do **not** wholesale merge. Close/supersede only when adopted source or outstanding separate hosted gate is fully traced. |

**Already closed unmerged on 19 October:** [#59](https://github.com/Ben-001-sys/Vellistry/pull/59), [#66](https://github.com/Ben-001-sys/Vellistry/pull/66), failed [#82](https://github.com/Ben-001-sys/Vellistry/pull/82). **Do not reopen these** without new evidence. Earlier [#77](https://github.com/Ben-001-sys/Vellistry/pull/77) was closed and its approved source proposal adopted through merged #80; merged #75/#76/#78/#80 remain baseline facts.

### 5.2 Integration-first execution plan

1. **Inventory every existing head and its actual required CI state.** Audit changed-file overlaps, task/pack/provenance, security risks, and whether review requirements are met. Current heads have `workflow_dispatch` **full CI SUCCESS** for #83–#89 (e.g. #83: 39325133054; #84: 39320128393; #85: 39320829746; #86: 39321788645; #87: 39324992456; #88: 39327104380; #89: 39327407737). These are evidence of tests at those head SHAs, **not** proof of final ready-state gating or independent human approval. Some `pull_request` draft workflow runs intentionally failed at merge gate; examine job-level results rather than assuming either general code failure or overall success.
2. **Prioritize integration of already-tested bounded work**, not making another roadmap or mass reimplementing it. Suggested dependency grouping: (a) offline PR68 proof #84, (b) safe preflight #85, (c) historical PR disposition #86, (d) recovery evidence #87, (e) P15 factual correction #89, (f) language matrix #88, (g) final state/ledger #83. This is **not a fixed merge order**: recompute dependencies after each merge, especially shared `docs/agent-workflow/PR-COMPLIANCE.yaml` and time-sensitive `CURRENT-STATE.md`.
3. Where two branches modify the same governance registry or records, merge **serially**, refresh *your own* branch against current main, correctly reconcile changes, re-run compliance/review/CI on its resulting new head, and do not force-push someone else's branch. If a branch cannot be safely refreshed in place, create a new uniquely tasked current-main selective integration with explicit successor relationship and close the now-superseded draft. Keep immutable previous context/evidence unchanged.
4. For every eligible PR, **convert from DRAFT to ready** when appropriate and run the actual ready-PR required checks. Obtain distinct independent review as required. Invoke the one-time owner authority from §1 and **perform the merge**, then inspect the new `main` tree, PR record and post-merge CI. Never count a passing draft `workflow_dispatch` as automatic permission to merge.
5. Once successor source is verified on merged main, complete #65/#68 dispositions with precise notes and do not retain obsolete drafts indefinitely. If some #68 SQL/fixture remains intentionally unmerged, describe exactly why; separate source-merge permission from hosted application permission.
6. Update Issue #71, #81, issue #18/#58/#63 and all other relevant issues with actual merged commits and genuinely unmet criteria. Do not close partially satisfied issues or relabel proposed tests as passed.

### 5.3 No circular “permission pending” loops

A general “owner will merge” statement is **already answered** by §1 for eligible repository-only remediation work. Either merge after the objective gates pass or name the **specific** independently unresolved gate and evidence. This one-time exception does not resolve missing independent review, missing hosted authorization, incorrect SQL bytes, actual test failures, inaccessible original research sources or absent GitHub write permission.

**Definition of PR-backlog resolution:** every current/new remediation PR is merged, genuinely superseded/closed, or associated with a precise, externally controlled remaining gate; none remains a draft merely for indefinite coordination convenience.

## 6. Wave: authoritative source-of-truth, agent readiness and documentation integrity

Fix active `CURRENT-STATE.md` first, distinguishing live statuses from dated archives. Integrate evidence for #76 PR compliance, #78 harness, #80 LANGUAGE proposal, real PG17 run, #68 unapproved hosted migration, remaining signed-out JWT blocker, and actual open PRs. Remove stale *active* claims, but archive historical context intact. Align `AGENTS.md`, `README.md`, `PROJECT.md`, `SOURCE-OF-TRUTH.md`, ADR indexes and onboarding entrypoints without copying the same state repeatedly. Do not rewrite old decisions or modify historical immutable packets.

Recover actual original SRC-001–SRC-004 research-source bytes with controlled retrieval references, hashes and provenance. If inaccessible, document SOURCE_GAP and exact owner-provided source needed; summaries are not originals.

Perform a genuine independent cold-start agent handoff in a **fresh runtime/context**, when an actual second session is available, using only a task, pinned ContextPack and explicit minimum setup; record who/what did the work and the result. If no separate runtime, mark NOT_RUN—not an invented PASS. Run a clean clone/Node24/pnpm10.18 setup, source reconstruction, offline test and synthetic task recovery, and verify reproducible source/evidence backup and restore excluding secrets. Keep realistic CI metrics for runner starts vs billable minutes, verification time, rework, context overhead, failures vs infrastructure and escaped defects. No new servers until measurement supports the need.

## 7. Resolve LANGUAGE.md and LANG-P01–P15 within supported owner authority

Read the merged `LANGUAGE.md` as a **proposed** product-language standard and actual PR #88/#89 changes. Produce/merge a source-supported disposition matrix for all fifteen IDs: `ID | present wording | recommended wording | evidence | ADOPT/PROVISIONAL/DEFER/BLOCKED | affected surface | verification | unresolved external fact`. **This one-time owner delegation authorizes Codex to select and integrate normal in-scope terminology** whose meaning is established by accepted Vellistry requirements and existing application behavior. It does **not** magically certify trademark clearance, original 130/134 guidance-source provenance, email confirmation settings, actual cloud privacy assurances, paid provider costs or capabilities not built.

Handle individually:

- **P01:** Vellistry remains the working product name; legal clearance is a separately evidenced question.
- **P02:** Original writing guidance/lens package mapping stays pending unless actual original sources and hashes are available.
- **P03:** Separate Story Workspace (proposed view), Story Profiles (accepted capability), Story Bible (not an automatic rename).
- **P04:** Use consistent story-thread/storyline semantics, with any uncertain record mapping provisional.
- **P05:** Chapter is the accepted MVP editing unit; scene as distinct entity remains deferred.
- **P06:** Truthful unknown-acknowledgement create/retry labels and duplicate-risk confirmation; verify existing behavior.
- **P07:** Sign-up/email-confirmation wording matches actual behavior, not presumed Supabase settings.
- **P08:** BYOK AI is optional, future; key lifetime, disclosure and provider costs must not be asserted without proof.
- **P09:** Distinguish editing Undo/Redo from Undo accepted AI change.
- **P10:** Unsaved, Saving, Saved (acknowledged), Save status unknown, Conflict, Recovered draft must refer to real state semantics, not synthetic mock receipts.
- **P11:** Manuscript export is not portable book backup; deletion/recovery copy must reflect verified retention.
- **P12:** English source language; broader localization, IME and RTL claims depend on actual tests.
- **P13:** Account/AI/export settings headings are future until built; no fake active navigation.
- **P14:** Route/model/cost wording awaits real provider verification.
- **P15:** LANGUAGE.md already exists on merged `main` through #80, but its candidate status is **not blanket owner approval**; PR #89 repairs the stale presence statement.

Use the owner's delegated terminology decision to adopt only justified choices and actually integrate the decision/copy changes appropriate to existing screens. Integrate or supersede #88/#89 with source provenance, avoiding contradictory snapshots. For external unknowns, document an exact blocked fact—not a request for routine terminology permission. Do not rename SQL/API/internal IDs, implement future screens, import Lovable code or begin feature work.

## 8. Wave: Supabase development readiness and PR68 security

**Selected development architecture:** local Windows Codex worktree -> Next.js UI/BFF + private loopback NestJS API -> `vellistry-dev` hosted Supabase Auth/PostgreSQL after specifically approved hosted setup. GitHub is canonical source; code push is not hosted deployment, and committed migration SQL is not executed migration history. Disposable local/CI Supabase or PG tests are permitted for offline proofs even though developer's normal database target is Supabase Cloud. Supabase CLI operations must be discovered from installed `--help` and current official docs, not memory.

**Existing main migrations (source pins):**

- `supabase/migrations/20261009000000_initial_author_books.sql`, Git blob `192a736d1a5d6ffc6f239c74ed61e7b8d2528b3b`.
- `supabase/migrations/20261009010000_restrict_accepted_manuscript_dml.sql`, Git blob `0670a60f1c2e299e97712174d9`.

**Third PR68 migration:** `supabase/migrations/20261015171325_restrict_book_privileges.sql`, Git blob `230b1540bb5b8962fd2b797d4f8a467d3c035978`, SHA256 `c7c384b6192d31e4e17c4f6e00978a16a4e15e2feeacfe148aaf1e2cd2853e81`. Source branch checked at `cbb379fa4a4eaa9f576f3abcce2c2258d22cc551`. The earlier owner disposition **approved the precise third SQL definition for repository-only planning**; this is NOT authorization for hosted application, remote inventory or different migration bytes. Any byte change needs renewed decision.

**Real disposable security evidence:** GitHub Actions #39135149678, job 117698049994, PostgreSQL17.11, artifact 12139701246, expires **2026-11-01**. Observed original expected `P0001` books TRUNCATE failure under deliberately modeled risky grants, corrected 48 ACL assertions passing plus SQLSTATE42501 denial probes and cleanup. Preserve a sanitized, hash-checked durable evidence digest before expiration when repository evidence-write permission exists. Do not represent synthetic defaults as live Supabase default ACL state.

**Before any hosted work:** deliver a precise current-main PR68 integration/review packet: three exact files/version history, actual app transport/permissions, RLS, inherited grants and PUBLIC/anon/authenticated effective rights, schema/default privileges, triggers/references/truncate, auth roles, grant inheritance, privileged bypass/SECURITY DEFINER risks, PostgREST exposure, legacy CI exclusion, rollback/backout, after-apply verifications, and target `vellistry-dev` (`lflkcrnriitrbclangyr`, eu-west-2), with a signed-out JWT risk register. Any hosted state previously observed as healthy/zero tables/zero migration history is *dated*, not a fresh authorized inventory.

**Do NOT access hosted Supabase under this mandate.** Record distinct decisions for (a) repository code integration, (b) exact-target read-only inventory, (c) CLI login/versioned dry-run, (d) exact reviewed dev migration application, (e) two synthetic disposable Auth writers plus cleanup, (f) JWT mitigation and private pilot, and (g) production. Prior narrow authorization of original two migrations and two-user tests does not authorize the extra SQL execution or override later explicit holds. Prepare commands as proposals only. The user has local `.env` files for publishable keys if they choose; never fetch, print, overwrite or commit them. `apps/web/.env.local` and `apps/api/.env` must be ignored; only placeholder `.env.example` goes in Git. Reject browser `service_role`/`sb_secret_`; treat `NEXT_PUBLIC_` values as public.

**JWT/private author protection:** Existing experiments indicate sign-out can leave an unexpired JWT useful at the direct Data API. Explore mitigation with genuine disposable tests (e.g. a restricted Nest/Postgres gateway with session revocation enforcement and Data API grant lockdown) without prematurely changing current BookService or making unsupported immediate-revocation claims. Do not imply that RLS or third books grant migration fixes token revocation. G_PRIVATE_PILOT remains blocked until verified.

## 9. Remediation completion boundary and handoff to future MVP development

**DO NOT implement new author-facing product functionality in this assignment.** This is a deliberate correction to the 18 October combined mandate. Once the repository is remediated and verified, hand over to a **separately owner-authorized next implementation task**.

The next future product roadmap remains, in order:

1. **IMP-002 — authenticated book/chapter workspace**: real author-scoped book/chapter organization, protected mutations, negative RLS/API tests, responsive navigation.
2. **IMP-003A — manual AI-off Tiptap3/ProseMirror manuscript editor**: writing, formatting, selection/caret, undo/redo, find, word count, focus mode; no mandatory model/API key.
3. **IMP-003B — durable save/revision/recovery**: CAS, idempotency, conflicts, unknown acknowledgements, recovery and safe cross-author isolation.

The separately maintained **Lovable synthetic UX QA** supplies future production-editor acceptance cases only: exact whitespace preservation (`QA revised orchard…` versus `QA revisedorchard…`), valid first-line single-paragraph selection (`Alpha omega.` / `Second paragraph.`), contextual labels, active-book identity and responsive UI overlap. The Lovable sandbox is not the production editor. Retain these as **future test requirements**, not current implementation or proof of completed application functionality.

For this mandate, the existing app is inspected only as necessary to prove that remediation did not regress it, confirm development tooling/CI, and identify blockers. Existing merged Library functionality is not proof of chapters/editor/save. **Do not start, code, commit or open feature PRs for IMP-002/003A/003B merely because remediation work is nearly finished.** The owner will dispatch those features separately after the remediation handoff.

## 10. Mandatory validation and review — for THIS remediation scope

For every existing candidate, renewed reviewed head and eventual merge, record exact commands, versions, exit codes, test counts, affected files, review identity/evidence, CI run IDs and accepted limitations. Run applicable checks only, never cite a suite that was not actually executed:

- Pinned Node 24 / pnpm 10.18 frozen install, Next/Nest typechecks/builds and current 66 Book Library tests where applicable.
- PR-compliance/trusted-base checks, provenance and immutable ContextPack validation, metadata/readiness/spec/agent handoff tests, consolidated CI policy and negative tests.
- Synthetic 19-case hosted preflight regression if the helper is integrated; offline Supabase/PG/RLS/CAS test suites and PG17 privilege reproductions when the workflow permits, with genuine fixture cleanup.
- File/hash checks of retained PG17 evidence, recovery Git bundles, negative recovery cases, approved SQL exact bytes, source-root lineage and merged-main artifact presence.
- Only relevant existing production application smoke/security tests; **no new editor/browser feature suite is required under this remediation-only directive**.
- Source reviews at each **final exact head** by a genuinely distinct review channel where mandatory. Same-session Codex advice is disclosed as advice, not fabricated independent signoff.
- A real eligible **ready-state** PR CI run, not a deliberately blocked draft-only gate. Record both if helpful; never relabel failure/skip/infrastructure error as pass.
- After every merge: exact merged `main` tree, baseline security/gov checks, post-merge CI; stop/de-risk dependent merges if this fails.

**Truthfulness:** The original disposable PG17 result proves its modeled fixture, NOT the live hosted Supabase grant defaults or JWT revocation; SQL source in Git is NOT an applied migration. A clean same-host clone is NOT proof of an independent cold-start agent/clean OS. A passing CI job is NOT author-journey UX acceptance. Unverifiable original SRC-001–SRC-004 remain a source gap, not invented recovered files. Keep secret material out of committed evidence.

## 11. Execution queue: finish current work before creating more PRs

### Wave A — existing drafted remediation work and merge readiness (immediate)

1. Fetch fresh repo state/heads and resolve shared-file conflicts, outstanding checks and genuinely required external independent review for #83–#89.
2. **Integrate eligible current-main candidates under §1.** Use small serial merges and reverify each; do not stop to request another owner merge approval.
3. Resolve older #65/#68 only after source-by-source comparison and selective approved adoption. Close obsolete drafts with evidence, not unsupported bulk merges. Confirm already closed #59/#66/#82 stay properly archived as historical closed-unmerged records.
4. Update the 44-item tracker only from successfully merged acceptance evidence. Fix CI/provenance deficiencies that genuinely block integration instead of spinning up extra general planning PRs.

### Wave B — remaining safe, executable 44-item remediation

1. Source/ADR/status consistency; genuine missing governance/CI/security checks; supported LANG-P01–P15 decisions; current onboarding; repo evidence integrity.
2. Source preservation and clean recovery. If original SRC-001–SRC-004 are unavailable, record actual SOURCE_GAP. If no genuinely independent new agent/runtime is available, record item #27 appropriately rather than pretending.
3. Offline Supabase SQL definition/preflight evidence and the exact owner-gated hosted dev procedure. **Do not connect remotely**.
4. Reconcile issues #18/#58/#63/#71/#81 and the 149-ID crosswalk as an **implementation-status index**, not an instruction to build absent features.

### Wave C — final integrated verification and handoff

1. Review all remediation PR statuses one final time; no unneeded open/duplicate drafts.
2. Verify integrated `main` and security/governance tests, immutable source relationships, actual CI and the rollback/recovery handoff.
3. Update `CURRENT-STATE.md` *after* integrations, with remaining truly external blockers and the next distinct owner decision packets.
4. Report `GO` or `NO-GO` for **continued local implementation**, separate from **hosted-dev acceptance**, **real-author private pilot** and **production release**.
5. Deliver a concise **proposed next** IMP-002 task/context handoff only—do not code IMP-002 or expand this current execution envelope.

Keep one executor per isolated task branch; reserve common `CURRENT-STATE.md`, `PR-COMPLIANCE.yaml` and Task/ID index edits to one serial integration lane. Fix a rejected Task by new valid Task/CP; never rewrite immutable history, reuse conflicting 0012 identities, or forge a retroactive approval.

## 12. Definition of completion: remediation and integration (not MVP feature delivery)

Deliver a committed and owner-facing **Vellistry Remediation Completion and Repository Readiness Report** containing:

1. **Verified start and end `main` SHA**, per-merge commit/SHA, exact post-merge CI URLs and tree/security/CI verdict. Do not use a PR branch head as evidence that main advanced.
2. All **44 original items** with authentic `DONE / PARTIAL / BLOCKED / NOT_STARTED / IN_VERIFICATION` labels, actual evidence, owner-gate classification and derived counts. “Done” requires the original acceptance conditions, not merely a draft PR or passed unrelated tests.
3. **Every current PR**—including #65, #68 and #83–#89—its terminal disposition and actual GitHub URL, merge/closure time, source-preservation evidence, or narrow external blocker. Existing #59/#66/#82 closure history is reconciled; do not reopen to inflate activity.
4. Each unique Task/immutable ContextPack/ExecutionBundle, authentic executor/provenance, permitted exception record for **one-time owner merger delegation**, genuine independent review evidence and nonbypassed policy checks.
5. LANG-P01–P15 decisions and resulting integrated current status, with external/legal/factual unknowns deferred explicitly.
6. Exact migration files, contents/approved third blob, isolated PG17 tests/artifact retention, PR68 source disposition, precise `vellistry-dev` hosted-operation gate matrix and signed-out JWT/private-pilot risk. No hosted acceptance claim without actual hosted evidence.
7. Bounded clean clone/recovery and provenance evidence, the original SRC-001–SRC-004 preservation state, and any actual workflow metrics; unmet independent fresh-agent test as `NOT_RUN` if appropriate.
8. Accurate statuses for all eleven author journeys, eight MVP groups, 149 IDs, IMP-002/003A/003B **as future/not-yet-implemented work**. Do not count planned production editor tests or Lovable-only behavior as implementation.
9. **Four separate GO/NO-GO decisions:** (a) safe continued local development, (b) hosted-dev data acceptance, (c) real-author private pilot, (d) production release.
10. The smallest real remaining externally gated actions and the recommended **next separate** IMP-002 implementation task, without starting it.

**Success condition:** All safe, legitimately executable remediation has been *verified and integrated into main* (or definitively superseded); owner-delegated repository merges actually performed where eligible; remaining requirements blocked only by identified real review, access, independent evidence or security gates; no concealed pending work, no false PASS and no gratuitous feature-scope expansion. Avoid claiming 44/44 done if some are genuinely externally blocked.

**Expiry:** At this report's completion, the one-time merge delegation in §1 ends. The standing owner-governed process automatically resumes for all future application implementation work.

**EXECUTION ORDER: verify live GitHub → review current drafts → bring eligible PRs through ready-state checks and independent review → merge serially under this one-time owner delegation → verify merged main → complete genuinely actionable 44-item gaps → final readiness report. Do not answer only with a plan.**

---

# Appendix A — Owner-provided 44-item checklist (text transcription)

The following material is a text transcription of the owner-provided `Vellistry-Agentic-Coding-Remediation-Checklist-44-Items(1).md` found in the project file library. It is included for self-contained task interpretation. **Do not claim an original-byte cryptographic archive or author provenance solely from this transcription.** If the true original `.md` bytes are available, verify and retain their hash in an authorized record.

# Vellistry — Agentic Coding Remediation Checklist

44 items. Item 44 is a critical new control added after the coordinator-role breach; items 1–43 preserve the original checklist wording and numbering.

[ ] 01. Restore GitHub Actions execution
   Resolve the account payment/spending-limit restriction reported in PR #68's execution evidence. Rerun the failed workflows at their exact commit SHAs; do not classify runner-start failures as code-test failures.

[ ] 02. Complete the Codex-primary governance transition
   Review and integrate ADR-0008 in PR #66 after applicable verification. Ensure the effective default workflow is ChatGPT coordinator → Codex implementer → independent review → owner approval, with Cursor retained as an optional alternate.

[ ] 03. Resolve competing implementation PRs
   Decide how to supersede or close the ChatGPT-authored PR #65 after reviewing its reuse in Codex PR #68. Preserve authorship and cherry-pick provenance. Do not blindly merge both branches.

[ ] 04. Independently review Codex PR #68
   Inspect actual code, SQL, test fixtures, task permissions, evidence and changed paths. Verify that its new Phase B work is separately authorized and reviewed, rather than accepting the Codex report alone.

[ ] 05. Verify the database privilege defect
   Run the proposed PostgreSQL 17 regression on an isolated disposable database. Confirm the original books-table privilege behavior and prove that the proposed grant correction removes inappropriate TRUNCATE and other excess privileges.

[ ] 06. Approve the additional privilege-hardening migration
   Obtain an explicit owner decision for the newly proposed third SQL migration. Earlier authorization for the original two migrations does not automatically approve a new one.

[ ] 07. Establish safe hosted migration access
   Authenticate the Supabase CLI securely, verify the exact vellistry-dev target, preserve correct migration versions/history, perform a reviewed dry run and exclude unrelated Vault, roles, seed and reset operations.

[ ] 08. Run authorized hosted development acceptance
   After approval and successful isolated SQL verification, apply the reviewed migrations and test two disposable authors, book persistence, account isolation, forged ownership, RLS and prohibited operations. Clean up fixtures.

[ ] 09. Resolve the signed-out JWT security risk
   Test whether an unexpired access token can still read private data directly through PostgREST after sign-out. Choose and verify a mitigation or explicitly approved security boundary before any real private-manuscript pilot.

[ ] 10. Complete exact-head and merged-main verification
   Only merge reviewed work after applicable checks actually execute. Verify the final merged file tree and rerun or inspect post-merge checks. Record remaining NOT_RUN/BLOCKED conditions accurately.

[ ] 11. Make CURRENT-STATE.md genuinely current
   Create a compact authoritative current snapshot. Move dated detail into historical records without deleting evidence; eliminate obsolete statements presented as current.

[ ] 12. Reconcile repository entrypoints
   Update AGENTS.md, README.md, PROJECT.md, SOURCE-OF-TRUTH.md and affected setup documents to reflect merged architecture, hosted Supabase, and the Codex role.

[ ] 13. Separate current truth from historical truth
   Clearly distinguish accepted decisions, active implementation, unmerged proposals, earlier decisions, synthetic results and archived experiments.

[ ] 14. Create one authoritative onboarding entrypoint
   A newly connected agent should be able to locate the current SHA, effective instructions, active tasks, accepted ADRs, security holds and task-specific context without reading the entire archive.

[ ] 15. Repair contradictory approval and gate states
   Reconcile G_DESIGN, G_CODE, G_PRIVATE_PILOT and G_RELEASE with explicit owner-approved individual task exceptions. Approval of one slice must never be misrepresented as global product approval.

[ ] 16. Finish original research-source preservation
   Archive or provide immutable, access-controlled retrieval references for SRC-001 through SRC-004; verify hashes and reference the actual original bytes, not only research summaries.

[ ] 17. Strengthen source-to-requirement traceability
   Keep original user intent, research findings, proposals, accepted requirements, feature IDs and test evidence separate. Fix missing or ambiguous links.

[ ] 18. Maintain ADR lifecycle and supersession
   Reconcile proposed/accepted/implemented states, dated owner approval, alternatives, implementation references and explicit supersession without rewriting historical decisions.

[ ] 19. Reduce documentation duplication
   Keep one canonical location per current fact or contract. Use links and generated indexes rather than copying full explanations into many plans, reports and agent prompts.

[ ] 20. Make formal handoffs the normal coding path
   Require a unique task and ContextPack for consequential coding tasks, plus a traceable ExecutionBundle afterward. PR #68 demonstrates the mechanism; make it standard for future work.

[ ] 21. Prevent task-scope drift
   When new approval extends a task—such as Phase B after the Phase A-only VEL-TASK-0005—record an approved amendment or create a newly pinned task/ContextPack. Never silently reuse the original permission envelope.

[ ] 22. Standardize task acceptance and permissions
   Every task should contain a bounded objective, source revision, dependencies, allowed paths/actions, forbidden operations, positive and negative tests, owner checkpoints and clear completion criteria.

[ ] 23. Make agent identity and code provenance reliable
   Record which tool/model actually performed each action. Preserve original authorship when cherry-picking or adopting code produced by ChatGPT, Codex, Cursor or another contributor.

[ ] 24. Enforce branch and worktree isolation
   One assigned executor per task branch, verified starting SHA, preserved local changes, no silent branch takeover and no simultaneous uncontrolled edits to shared files.

[ ] 25. Make ContextPacks immutable and current
   Validate the task blob and source blob hashes against the pinned commit. Generate a new pack when authoritative inputs or permissions change; do not overwrite dispatched historical packs.

[ ] 26. Standardize complete ExecutionBundles
   Require actual commands, exit codes, changed files, environment, exact source/head SHA, test fixtures, security findings, unresolved risks and FACT/INTERPRETATION/PROPOSAL separation.

[ ] 27. Verify genuine agent independence
   Repeat a real implementation handoff in a fresh Codex or alternative-agent session using only the approved task context. PR #68 proves task packaging and execution, but its own report calls the handoff same-session, not independent cold-start verification.

[ ] 28. Prohibit silent implementation-role substitutions
   Direct feature coding by ChatGPT or switching away from Codex should require an explicit task-specific exception. Planning, reviewing and small governance edits can have proportionate policies.

[ ] 29. Add PR-to-task compliance validation
   Automatically check task identity, ContextPack reference, ExecutionBundle reference, evidence fields and required owner checkpoints for qualifying implementation PRs; allow documented low-risk exemptions.

[ ] 30. Check merged-main artifact integrity
   Ensure every accepted PR's required files survive integration. Detect missing tests and artifacts, including zero-test discovery, to prevent recurrence of the 21-file research recovery incident.

[ ] 31. Audit workflow triggers and test coverage
   Ensure implementation, SQL, validator, task, metadata and relevant documentation changes trigger applicable checks. Passing unrelated tests must not mask untested changed surfaces.

[ ] 32. Establish dependable review evidence
   Make exact-head source inspection, focused negative tests, advisory AI/CodeRabbit review where available and owner disposition explicit. A Draft-skipped CodeRabbit result is not an independent review.

[ ] 33. Protect integration against bypass
   Assess branch-protection/ruleset availability on the private repository. Where GitHub plan limits prevent required checks, use documented owner-controlled merge procedures and verification evidence.

[ ] 34. Separate CI failures from infrastructure failures
   Report runner-not-started, account restrictions, unavailable Docker/PostgreSQL, actual failed assertions and missing configuration as distinct conditions. None should be mislabeled PASS.

[ ] 35. Close and reconcile completed or superseded work
   Review paused PR #59 and old Issue #58, continuing Issue #63, outstanding Stage 3 Issue #18, and the newer #65/#66/#68. Close, retain or supersede with accurate links and decisions.

[ ] 36. Apply least-privilege agent permissions
   Limit repository, credential, filesystem, network, paid API, database and deployment access by task. Preserve explicit owner checkpoints for destructive or high-impact operations.

[ ] 37. Strengthen secret and private-data protections
   Keep local .env files ignored; use secret checks and sanitized logs/artifacts. Never store author manuscripts, access tokens or service-role keys in Git handoff packets.

[ ] 38. Test full project recovery from a clean environment
   Clone the repository without prior ChatGPT context, set up the pinned tooling, reconstruct the active project state and execute a synthetic task. Record everything that cannot be recovered.

[ ] 39. Make CI reproducible without unsafe cloud dependencies
   Maintain disposable PostgreSQL/Auth test paths, predictable tool versions, safe fixture cleanup and offline-capable checks. Hosted tests should require their own explicit authorization.

[ ] 40. Link actual implementation to acceptance status
   Map delivered features and test results back to the 149-ID MVP crosswalk. Update PASS/FAIL/BLOCKED/NOT_RUN only from observed behavior, not from planning documents.

[ ] 41. Establish repository recovery and backup checks
   Verify that source, evidence, relevant artifacts and migration history can be recovered, including after bad merges or lost agent worktrees. Keep secrets outside backup copies of the knowledge repository.

[ ] 42. Measure agentic workflow effectiveness
   Track compliant handoffs, cold-start success, verification time, escaped defects, context size, review rework, cost and false claims to determine whether the workflow actually improves delivery.

[ ] 43. Delay additional orchestration infrastructure
   Introduce a custom MCP knowledge server, vector search, knowledge graph or automated multi-agent orchestration only if measured retrieval/coordination problems remain after the Git-first workflow is stabilized.

[ ] 44. Enforce agentic role boundaries at task dispatch and repository write time (CRITICAL)
   Prevent ChatGPT, acting as architect/coordinator/reviewer, from directly implementing code or modifying CI/application files just because it has GitHub write access. Require an owner-authorized, uniquely identified task and immutable ContextPack before Codex begins implementation; record the actual executor in the PR and ExecutionBundle. If Codex cannot be dispatched through the available tools, stop at a reviewable handoff and report NOT_STARTED—do not silently become the implementer. Add a documented exception process for explicitly reassigned tasks or narrowly scoped governance edits; verify role compliance during review and with applicable automated PR-to-task checks. Audit prior coordinator-authored implementation work for provenance and any missing handoff evidence.
   Acceptance: a coordinator-only session cannot claim Codex execution or merge-ready implementation; a CI/PR check flags missing authorized task/ContextPack/executor evidence for qualifying changes, and a real Codex handoff is independently verified. Related existing items: #20, #21, #23, #28 and #29.