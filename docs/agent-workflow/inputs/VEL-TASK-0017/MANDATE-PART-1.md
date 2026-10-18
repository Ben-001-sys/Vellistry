# Vellistry — Unified Codex Remediation, PR Integration, Supabase Readiness and MVP Implementation Mandate

**Owner-authorized master assignment — 18 October 2026**  
**Repository:** https://github.com/Ben-001-sys/Vellistry  
**Last verified `main` checkpoint:** `fca0d96fd071f1165e3e16658d821a3d36a20293`  
**Last verified post-merge CI:** https://github.com/Ben-001-sys/Vellistry/actions/runs/39136089610  
**Master tracker:** https://github.com/Ben-001-sys/Vellistry/issues/71  
**Offline PR68 reconciliation:** https://github.com/Ben-001-sys/Vellistry/issues/81

## 0. Mission and authoritative interpretation

You are **Codex, Vellistry's primary code implementer** under ADR-0008. The owner instructs you to complete the work of BOTH prior mandates as **one continuous program of small, governed, verified tasks**:

1. Revalidate and finish the **44-item agentic coding remediation checklist**, not just its prior estimated status counts.
2. Resolve **every currently open PR and relevant stale issue** by evidence-based merge, selective adoption, or documented supersession/closure. **Resolve does not mean merge every branch.**
3. Reconcile canonical project knowledge, current-state documents, agent instructions, and product-language decisions LANG-P01–P15.
4. Reconcile PR68's hosted Supabase preflight and precisely pinned third privilege-hardening migration; preserve the real PostgreSQL17 security evidence and independently handle hosted and JWT gates.
5. After the repository-remediation prerequisites are truly met, implement the **next production author experience**, including book/chapter organization (IMP-002), AI-off Tiptap/ProseMirror editing (IMP-003A), and durable save/revision/recovery (IMP-003B) in bounded slices.
6. Convert the independent **Lovable synthetic UX QA findings** into relevant negative production tests. Keep Lovable independent from the GitHub production app.
7. Finish with exact-head and merged-main evidence, honest readiness decisions, and a complete handoff so development can continue safely.

The existing Git-first knowledge/control plane, accepted Vellistry MVP, eleven author journeys, 149-ID crosswalk, security boundaries and eight MVP areas control scope. Do not invent features because an early AI-writing blueprint mentioned a publishing studio, collaboration, cover generation or series functionality. Distinguish the long-term product vision from the narrower approved MVP.

**Start work, not just planning.** Work serially through dependent PRs and continue independent eligible work if one is blocked. This is **one mandate, not one giant PR**, not one immutable ContextPack, and not permission to skip normal governance.

## 1. Explicit owner authorization and operational limits

I, the Vellistry owner, explicitly authorize you for this assignment to make well-supported, routine engineering, language, architecture-within-accepted-ADRs, refactoring, prioritization and implementation decisions; create and update scoped repository tasks, immutable packs, ExecutionBundles, branches, tests, docs and issues; run local and disposable CI tests; push branches; request actual independent review; and correct/retry implementation until verifiable. Do **not** interrupt for ordinary reversible details such as naming a component, resolving a local test failure, selecting a verified Tiptap extension or creating a new valid Task ID.

**Repository-only integration delegation:** The owner wishes eligible, reviewed remediation PRs to be merged and obsolete PRs closed, not left indefinitely as drafts. You may perform repository-only merges/closures under this standing instruction **only if** the effective GitHub/project governance permits delegated execution, the exact merged source is independently reviewed, all applicable non-advisory checks genuinely pass at exact SHA, the changed scope is within an authorized Task, no additional owner-reserved decision is implicated, and the merge commit plus post-merge CI are verified. Otherwise leave the PR ready for the single required owner decision and continue the queue. Do not treat Codex's own self-review as independent. Do not convert a draft-advisory red run into a passing ready-state gate or temporarily weaken checks merely to merge. Do not force-push another executor's branch.

**Not authorized merely by this broad mandate:** any hosted Supabase connection (even read-only), CLI authentication or cloud dry-run, migration application or reset, creation of cloud Auth fixtures, credential retrieval, production deployment, domain/billing/account/security-setting changes, paid model calls, private manuscript access, destructive real-data operations, or waiving G_PRIVATE_PILOT/G_RELEASE. Existing narrower past authorizations must be inspected, not expanded by inference; if a specific action still requires new explicit target/action approval, prepare the exact action-specific decision packet and mark that action **OWNER_DECISION_PENDING**. Keep progressing offline. Do not ask for a single sweeping approval that obscures exact SQL and target.

Do not change the approved Next.js16/React19 + NestJS11 + Supabase Auth/PostgreSQL/RLS + Tiptap3 architecture; introduce another authentication authority; add unnecessary microservices, vector DBs, orchestration engines, paid tools or vendor lock-in; handle real writing content; publish/deploy Lovable; or alter production by claiming that synthetic UX is production code.

If a fresh owner decision is granted later, record its exact statement, target, prohibited actions and source before the sensitive task. Never fabricate a GitHub approval URL, actual model identity, reviewer session or CI result.

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

The second prior mandate supplied an **unverified checkpoint** of DONE14, PARTIAL21, BLOCKED5, NOT_STARTED4. Its purported completed numbers (02,05,06,10,20,21,22,25,26,28,29,31,34,43) are **candidate historical assessments, not truth**. For instance #05 was demonstrated by a real disposable PG17 run; #06 concerns a narrow **SQL definition** approval and not a hosted apply.

Audit EACH of the 44 original numbered requirements in the annex, preserving wording and numbering. Create a canonical durable ledger on a new governed branch and keep Issue #71 as its index. For every entry: original acceptance text, exact beginning evidence, current status, branch/issue/PR, dependencies, executor, original source links, expected negative tests, actual command/run evidence, proposed work, owner gate, final result/limitation and date/SHA. Derive counts from observed evidence, not from the supplied estimates. Use DONE/PARTIAL/BLOCKED/NOT_STARTED/IN_VERIFICATION consistently.

Group execution by dependency, not numerical order:

- Governance/CI/current truth: 01,02,10–15,17–26,28–35,44.
- PR conflicts, security/hosted readiness: 03–09,36,37,39.
- Original sources, independent cold-start, recovery: 16,27,30,38,41.
- Product acceptance traceability and workflow metrics: 40,42.
- Orchestration restraint: 43.

Avoid a 44-file paper exercise: implement demonstrably missing checks, produce real negative evidence, and retain already functional controls. Respect the owner's earlier solo-maintainer branch-protection deferral; record what remains technically bypassable instead of pretending static compliance authenticates humans. Do not touch GitHub account/payment/security settings without specific authorization.

## 5. PR closure and integration policy — complete ALL live PR dispositions

At preflight, inspect live PRs, but as of this mandate the open set was **#59, #65, #66, #68**. PR75/76/78/80 are merged and PR77 is closed-unmerged, with the source of PR77 adopted through #80. Verify status again rather than relying on this sentence.

**#59 — paused Cursor Library kickoff:** compare actual unique scope against merged #64 and current main. Do not merge stale implementation for the sake of closure. If superseded, retain source links and close with a truthful explanation; reconcile Issue #58 and dependent #63.

**#65 — ChatGPT-authored hosted configuration proposal:** inspect all its source, tests, env examples and any currently missing safe configuration guard. Adopt valid still-needed parts into a fresh Codex-owned main-based implementation branch, preserving ChatGPT origin in commits/manifest/EB. Close #65 as superseded only AFTER successful adoption or a documented decision that remaining contents are unnecessary. Never hide the source relationship with #68.

**#66 — original ChatGPT Codex ADR:** compare every significant paragraph with merged ADR-0008 and effective `AGENTS.md` from #75. Adopt any genuinely missing, approved unique content through a scoped governed PR; otherwise close #66 as superseded, preserving history and approval distinction.

**#68 — PR of greatest security sensitivity:** do NOT merge, rebase, cherry-pick or squash its entire old branch. Start with offline Issue #81; compare exact code, PR65 inherited sections, migrations/tests, obsolete `implementation-foundation.yml`, and current `ci.yml`. Map what to *preserve*, *selectively adopt* or *exclude*. Use a new current-main Codex task and PR(s) for valid hosted preflight, third migration definition, regression source and accurate evidence. Preserve original SQL bytes/provenance; exclude stale automatic-workflow edits and stale CURRENT-STATE snapshots. Run actual full current CI and focused negative privilege/preflight tests. Close/supersede #68 only once successor adoption and residual hosted execution holds are separately recorded. For migration-sensitive repository integration, respect any owner-reserved distinct merge decision.

**#77/#80:** confirm #77 closed without merging and #80 is integrated. Do not reopen or duplicate historical language content. Preserve proposed status pending LANG decision dispositions.

**Other older/newer PRs:** list every actual open PR and make a source-based disposition, including any discovered after task start. Close issues only when all issue acceptance checks—not merely the associated PR—are actually satisfied. Resolve Stage3 #18, paused #58 and progressing #63 accurately.

**Merge quality gate:** correct task/pack/EB, independently reviewed exact submitted code, actual eligible ready PR CI success (not red draft advisory), checked no sensitive cloud operation, preserve history, true owner-delegated authority, normal merge strategy, verified post-merge main run, then issue+state reconciliation. If any gate cannot be met, leave the PR review-ready and record precise remaining approval; continue another eligible workstream. Never do a mass merge to get to zero open PRs.

## 6. Wave: authoritative source-of-truth, agent readiness and documentation integrity

Fix active `CURRENT-STATE.md` first, distinguishing live statuses from dated archives. Integrate evidence for #76 PR compliance, #78 harness, #80 LANGUAGE proposal, real PG17 run, #68 unapproved hosted migration, remaining signed-out JWT blocker, and actual open PRs. Remove stale *active* claims, but archive historical context intact. Align `AGENTS.md`, `README.md`, `PROJECT.md`, `SOURCE-OF-TRUTH.md`, ADR indexes and onboarding entrypoints without copying the same state repeatedly. Do not rewrite old decisions or modify historical immutable packets.

Recover actual original SRC-001–SRC-004 research-source bytes with controlled retrieval references, hashes and provenance. If inaccessible, document SOURCE_GAP and exact owner-provided source needed; summaries are not originals.

Perform a genuine independent cold-start agent handoff in a **fresh runtime/context**, when an actual second session is available, using only a task, pinned ContextPack and explicit minimum setup; record who/what did the work and the result. If no separate runtime, mark NOT_RUN—not an invented PASS. Run a clean clone/Node24/pnpm10.18 setup, source reconstruction, offline test and synthetic task recovery, and verify reproducible source/evidence backup and restore excluding secrets. Keep realistic CI metrics for runner starts vs billable minutes, verification time, rework, context overhead, failures vs infrastructure and escaped defects. No new servers until measurement supports the need.

## 7. Wave: LANGUAGE.md decision reconciliation (LANG-P01–P15)

Review each unresolved decision; produce a grounded matrix **ID | current | recommendation | evidence | adopted/provisional/deferred/blocked | affected surface | verification | unresolved authority**. Under this owner mandate you may choose **supported ordinary terminology** consistent with accepted MVP concepts, but may not fabricate trademark clearance, certified original rule-source mappings, user research, exact provider pricing or deployed functions.

Review all 15 explicitly:

- P01 brand clearance: working name remains Vellistry; legal/trademark clearance only with real evidence.
- P02 immutable guidance pack mapping: no unverified public 130/134-active claims.
- P03 Story Workspace / Story Profiles / Story Bible distinction.
- P04 story threads vs storylines.
- P05 chapter vs scene (currently chapters authoritative).
- P06 unknown book-create acknowledgement and duplicate-risk retry copy.
- P07 actual signup/email-confirmation behavior, not assumed settings.
- P08 optional BYOK, session-only key/privacy/cost disclosures (future AI).
- P09 editor Undo vs accepted AI change Undo.
- P10 Unsaved/Saving/Saved/Save status unknown/Conflict/Recovered draft aligned with real receipts.
- P11 download manuscript vs portable book backup, restore/deletion honesty.
- P12 source English, locale/IME/RTL deferred unless verified.
- P13 account, AI settings and export navigation as *future* where absent.
- P14 provider/model route and cost estimates only if verified.
- P15 document merged into main but status remains proposed-owner-review until owner-approved dispositions; do not leave stale claim 'not present on default branch'.

Fix existing production UI copy only where its effects are verifiable, including unknown-save/retry semantics; test state transitions and accessibility labels. Do not rename SQL/API identifiers, invent screens or turn synthetic copy into live functionality. Record owner-adopted labels separately from still-proposed labels; continue development without claiming the fifteen are automatically accepted just because text merged.

