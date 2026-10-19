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

## 9. Transition gate: remediation to production MVP implementation

After closure of truly prerequisite governance and repository-only security checks, **begin actual implementation** in a separately authorized sequence. This master assignment authorizes offline code implementation; hosted migration gates may remain pending. Do not let unrelated optional checklist work permanently block code slices proven safe in local/disposable environments. Conversely, do not represent locally passing functionality as hosted acceptance.

### IMP-002 — authenticated book/chapter workspace

Develop against the merged Next.js16/React19 + NestJS11 architecture. User can sign in; create/open/switch books; list/add/rename/reorder/select chapters; separate planning notes from prose; see accurate auth/loading/empty/error/unknown-save states; switch without content contamination; and use desktop/narrow keyboard-accessible layouts. Reuse existing author-scoped APIs and schema; introduce only reviewed minimally privileged chapter mutation contracts and versioned SQL **on repository branches**, not broad browser DML grants. Confirm chapter position concurrency, immutable revision ownership and stable IDs. Negative tests: unauthenticated and forged owner requests, cross-author CRUD, duplicate order/concurrent reorder, fast book/account switching, stale response, lost create ACK, unrelated book access, keyboard and 390/900/1440 layout. Honest note: the merged schema has chapter SELECT but intentionally revokes author direct INSERT/UPDATE/DELETE until protected transactions exist.

### IMP-003A — manual-first Tiptap3/ProseMirror editor

Use ADR-0003 and actual Tiptap3 transactions/doc positions, not Lovable's raw contentEditable/`execCommand`. Support author-owned chapter document load, prose typing, paragraphs/headings/basic formatting, bold/italic/underline/lists, keyboard undo/redo, search/Find Next cycling+wrap, word count, focus mode, accessible controls, non-destructive chapter switching and accurate unsaved-state UX. AI OFF by default; no API key, real AI call or provider spend required for writing.

**Mandatory synthetic Lovable QA regressions brought into production tests (not imported code):**

1. Whitespace-loss: selected `The ` replaced by approved `QA revised ` must yield `QA revised orchard…`, not `QA revisedorchard…`. Do not call `trim()` on author-approved text; verify exact leading/trailing spaces, inline selections, punctuation, undo and boundary handling.
2. First-line selection: type `Alpha omega.`, Enter, `Second paragraph.`; selecting `Alpha ` on the first line and applying a deterministic replace must succeed. Real cross-paragraph selection remains discernible. Verify collapsed caret at 0 and 4, formatted inline ranges, wrap search, pasted text and IME where feasible.
3. When eventually exposing AI mock/real statuses, derive all labels from authoritative state; avoid contradictory header/footer `AI OFF` indicators.
4. Do not hardcode a sample book subtitle for newly created/renamed books; derive active book identity.
5. The Lovable host badge overlapping Journey Coverage is a **sandbox host-specific** issue; do not insert a Lovable workaround into production. Retain equivalent accessibility/overlap testing for actual production navigation.

Do not attempt to silently fix the separate Lovable project from this GitHub assignment; its previously observed five issues and 11-journey browser test are test design inputs only.

### IMP-003B — durable revisions and recovery

Implement scoped chapter load and transactional save using accepted version/CAS + idempotency contract, append-only accepted revisions, optimistic conflict detection, unknown acknowledgement verification and explicit durable receipt, and separately isolated local draft recovery if accepted design allows it. Distinguish Unsaved, Saving, Saved, Save status unknown, Conflict and Recovered draft. No unversioned direct chapter DML to browser. Test duplicate keys, changed payload with reused key, lost ACK after DB commit, stale revision, two sessions editing, cross-author access, rollback/fault injection, stale responses after book switch, reconnect/reload and restoration. Reuse existing real PG CAS/restore experiments but add actual application integration and browser tests. Avoid claiming production/hosted durability until run there.

**Later MVP components**—Story Profiles/fact approval, Rules Studio, BYOK AI consent/context/proposal accept+undo, export/backup—remain distinct scoped milestones. Add honest dependencies and tests without falsely marking unimplemented work complete; respect all eleven journeys and 149-ID crosswalk.

## 10. Test and review matrix

For every candidate and merged revision, run all applicable actual checks, recording command, environment, exit and artifact link:

- Node24/pinned pnpm10.18 frozen install, both TypeScript checks/builds, existing 66 Library tests and hosted preflight negative tests when source exists.
- Python governance/metadata/readiness/spec traceability + PR compliance/negative workflow tests, pinned checks and exact-head final gate.
- Real disposable Supabase Auth/RLS author isolation and permitted DB tests; real PG CAS/recovery; isolated PG17 privilege test only when source is present and harness permits it.
- New API/editor unit/integration/browser checks at desktop/tablet/mobile (1440px/900px/390px), keyboard, screen-reader-relevant labels, IME where feasible, undo/redo/selection/provenance/security negatives.
- Distinguish intended failures (original regression BEFORE) from unanticipated failures, runner-not-started/payment failures, draft advisory red, skipped nonapplicable jobs and NOT_RUN.
- Secret-sanitized evidence, reviewed SQL/approval paths and no unapproved hosted connections.

Review source and CI at exact final SHA; secure an actually distinct reviewer/handoff if required; independently verify merge and full main run. CI green alone never certifies product usability or release readiness.

## 11. Work packages and sequencing

Recommended narrow PR queue; adjust based on actual dependency inventory and unique Task IDs:

1. **STATE-RECONCILE:** live current truth, original source/44-item ledger, issue classification; no history erasure.
2. **PR-HYGIENE:** resolve/supersede #59 and #66, reconcile #65, map all other open PRs and tasks; avoid arbitrary merges.
3. **LANG-DECISIONS:** LANG-P01–P15 supported decisions + only verified existing UI copy changes.
4. **SEC-PR68-INTEGRATION:** Issue81 offline review, selective main-based hosted-preflight + exact migration definition/negative regression + evidence retention; do not merge stale workflow.
5. **GOV-CI-RECOVERY:** unresolved 44-item static/checkpoint/source/clean recovery/cold-start/metrics work, as dependency requires.
6. **IMP-002:** real secure book/chapter workspace.
7. **IMP-003A:** Tiptap manual editor and all relevant Lovable-derived negative tests.
8. **IMP-003B:** actual transactional save/revision/recovery integration.

Do not run eight parallel PRs mutating `CURRENT-STATE.md` and `AGENTS.md`. Plan ownership of shared files, rebase only your own new branches after verifying main, and batch independent tests. Close each eligible bounded milestone before its dependent slice. If an owner-only gate blocks one lane, record it and work an independent lane.

## 12. Definition of completion and mandatory handoff

Deliver a comprehensive **Vellistry Master Remediation and MVP Continuation Report**, committed in a governed report location and summarized back to the owner:

1. Start/end main SHA, final verified current tree and CI link; all authored PRs, Task/CP/EB identifiers and true merge/closure dates.
2. **44 original items**, individually evidenced, with derived DONE/PARTIAL/BLOCKED/NOT_STARTED counts and next dependencies (not predetermined 44 DONE).
3. Every open PR's final disposition: MERGED, SUPERSEDED/CLOSED, REMAINS_OPEN/BLOCKED, or READY_FOR_OWNER_MERGE, with URLs and why; include stale #59/#65/#66/#68 and #77/#80 history.
4. P01–P15 decision matrix; distinguish ADOPTED from PROVISIONAL/DEFERRED/BLOCKED and language file adoption status.
5. Exact PR68 SQL/provenance and historical migration hashes, PG17 evidence and retention, precise hosted authorization matrix, observed versus unverified cloud behavior, separate JWT/private pilot blocker.
6. Which real application operations are actually implemented and verified for IMP-002, IMP-003A, IMP-003B; map to 149 IDs, eight MVP areas and eleven author journeys. Separate offline/disposable, hosted, synthetic Lovable, and future features.
7. Negative tests, real commands/counts, CI/readiness/clean-room evidence, release/rollback implications, remaining risk and reproducibility instructions for Windows Codex worktree + Cloud Supabase dev (without secrets).
8. Unresolved original research/source gaps, independently verified cold-start or NOT_RUN, recoverability, costs/usage evidence when available.
9. Separate go/no-go for (i) safe continued development, (ii) hosted-dev data acceptance, (iii) real-author private pilot, and (iv) production release. Do not conflate them.
10. Minimal next actionable task, dependencies and any **exact, narrow** owner-sensitive permission still needed.

**Execution:** Begin by inspecting live `main` and open PRs; create the first governed work package; implement, test, review and integrate eligible steps. Continue through the permitted queue. Do not substitute a plan for source changes or claim a merger/test/independent review that did not happen. A blocked hosted action must not prevent safe offline implementation. Preserve author intent and manuscript integrity over artificial progress numbers.

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