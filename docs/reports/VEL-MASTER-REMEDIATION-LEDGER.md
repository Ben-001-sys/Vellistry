# Vellistry master remediation ledger — 2026-10-18

**FACT:** baseline `fca0d96fd071f1165e3e16658d821a3d36a20293`; auditor Codex GPT-6 desktop, exact build unavailable. This candidate is not owner checkbox sign-off. Original12,016-byte checklist SHA256: `10e5323de6d524f5a381e845b2859a966f0b89c8d85685c5f19eebd480459890`.

[Original checklist](../agent-workflow/inputs/VEL-TASK-0017/ORIGINAL-CHECKLIST.md), [owner-adopted mandate](../agent-workflow/inputs/VEL-TASK-0017/MASTER-MANDATE.md), [raw issue/PR/run evidence](../agent-workflow/inputs/VEL-TASK-0017/), [Issue71 index](https://github.com/Ben-001-sys/Vellistry/issues/71).

**Derived counts:** BLOCKED=4, DONE=14, IN_VERIFICATION=4, NOT_STARTED=1, PARTIAL=21; total44. IN_VERIFICATION is candidate correction, not integrated DONE.

All entries use the date/base above and Task0017 as audit executor. PR references are Ben-001-sys/Vellistry. Evidence is source inspection or cited actual run, never a newly executed test unless explicitly recorded. Original source wording below is retained. Common negative requirement: reject unsupported DONE, missing exact-head evidence, source/proposal conflation and implied hosted/merge authority. Item-specific negative acceptance remains the original text. Owner gates apply to all sensitive actions; successor task IDs are allocated only at dispatch.

## 01. Restore GitHub Actions execution

**Original acceptance (verbatim):**

Restore GitHub Actions execution
   Resolve the account payment/spending-limit restriction reported in PR #68's execution evidence. Rerun the failed workflows at their exact commit SHAs; do not classify runner-start failures as code-test failures.

**Status:** PARTIAL. **Beginning/current evidence:** Main CI39136089610 runs successfully; historical failed-SHA reruns/payment resolution remain unverified.
**Dependencies / next work / limitation:** Historical reruns; no billing changes.
**Tracking:** Task0017 audit; Issue71 index. Final result remains the status above until a reviewed successor records actual evidence.

## 02. Complete the Codex-primary governance transition

**Original acceptance (verbatim):**

Complete the Codex-primary governance transition
   Review and integrate ADR-0008 in PR #66 after applicable verification. Ensure the effective default workflow is ChatGPT coordinator → Codex implementer → independent review → owner approval, with Cursor retained as an optional alternate.

**Status:** DONE. **Beginning/current evidence:** ADR0008/AGENTS effective through PR75 select Codex, preserving ChatGPT PR66 origins.
**Dependencies / next work / limitation:** PR66 disposition separately under35.
**Tracking:** Task0017 audit; Issue71 index. Final result remains the status above until a reviewed successor records actual evidence.

## 03. Resolve competing implementation PRs

**Original acceptance (verbatim):**

Resolve competing implementation PRs
   Decide how to supersede or close the ChatGPT-authored PR #65 after reviewing its reuse in Codex PR #68. Preserve authorship and cherry-pick provenance. Do not blindly merge both branches.

**Status:** PARTIAL. **Beginning/current evidence:** PR65/68 remain open; PR84 maps38 source paths and corrected lineage; Draft PR85 selectively adopts safe preflight helper/tests with original ChatGPT/Codex attribution and passing19 tests/fullCI. Adoption is not merged.
**Dependencies / next work / limitation:** Source comparison/selective adoption before supersession; depends04/35.
**Tracking:** Task0017 audit; Issue71 index. Final result remains the status above until a reviewed successor records actual evidence.

## 04. Independently review Codex PR #68

**Original acceptance (verbatim):**

Independently review Codex PR #68
   Inspect actual code, SQL, test fixtures, task permissions, evidence and changed paths. Verify that its new Phase B work is separately authorized and reviewed, rather than accepting the Codex report alone.

**Status:** PARTIAL. **Beginning/current evidence:** Issue74 SQL review plus Task0019/PR84 full38-path provenance/conflict review and13 evidence assertions are complete; distinct Codex review fixed a P2 lineage finding. ChatGPT exact-head/owner acceptance and dependent integration remain pending.
**Dependencies / next work / limitation:** Issue81 provenance/conflict map and review of all code, not SQL alone.
**Tracking:** Task0017 audit; Issue71 index. Final result remains the status above until a reviewed successor records actual evidence.

## 05. Verify the database privilege defect

**Original acceptance (verbatim):**

Verify the database privilege defect
   Run the proposed PostgreSQL 17 regression on an isolated disposable database. Confirm the original books-table privilege behavior and prove that the proposed grant correction removes inappropriate TRUNCATE and other excess privileges.

**Status:** DONE. **Beginning/current evidence:** Run39135149678 SUCCESS for an isolated regression with deliberately injected broad grants; review6250984828 records PG17.11, BEFORE P0001/exit3, AFTER48ACL,42501 probes and cleanup. This does not reproduce observed hosted default grants.
**Dependencies / next work / limitation:** Artifact12139701246 retained in PR84 with independently verified ZIP/member hashes; no hosted inference, owner integration pending.
**Tracking:** Task0017 audit; Issue71 index. Final result remains the status above until a reviewed successor records actual evidence.

## 06. Approve the additional privilege-hardening migration

**Original acceptance (verbatim):**

Approve the additional privilege-hardening migration
   Obtain an explicit owner decision for the newly proposed third SQL migration. Earlier authorization for the original two migrations does not automatically approve a new one.

**Status:** DONE. **Beginning/current evidence:** Owner6251764080 approves exact third SQL definition blob230b1540bb5b8962fd2b797d4f8a467d3c035978 only.
**Dependencies / next work / limitation:** Changed bytes, integration and hosted actions remain separately gated.
**Tracking:** Task0017 audit; Issue71 index. Final result remains the status above until a reviewed successor records actual evidence.

## 07. Establish safe hosted migration access

**Original acceptance (verbatim):**

Establish safe hosted migration access
   Authenticate the Supabase CLI securely, verify the exact vellistry-dev target, preserve correct migration versions/history, perform a reviewed dry run and exclude unrelated Vault, roles, seed and reset operations.

**Status:** BLOCKED. **Beginning/current evidence:** Mandate forbids hosted access including read-only/auth/dry-run.
**Dependencies / next work / limitation:** Exact target/action owner packet; depends04/06.
**Tracking:** Task0017 audit; Issue71 index. Final result remains the status above until a reviewed successor records actual evidence.

## 08. Run authorized hosted development acceptance

**Original acceptance (verbatim):**

Run authorized hosted development acceptance
   After approval and successful isolated SQL verification, apply the reviewed migrations and test two disposable authors, book persistence, account isolation, forged ownership, RLS and prohibited operations. Clean up fixtures.

**Status:** BLOCKED. **Beginning/current evidence:** No hosted development acceptance result.
**Dependencies / next work / limitation:** Separate migration and two disposable author authorization; depends07.
**Tracking:** Task0017 audit; Issue71 index. Final result remains the status above until a reviewed successor records actual evidence.

## 09. Resolve the signed-out JWT security risk

**Original acceptance (verbatim):**

Resolve the signed-out JWT security risk
   Test whether an unexpired access token can still read private data directly through PostgREST after sign-out. Choose and verify a mitigation or explicitly approved security boundary before any real private-manuscript pilot.

**Status:** BLOCKED. **Beginning/current evidence:** Existing signed-out JWT experiments show residual direct Data API access.
**Dependencies / next work / limitation:** Disposable mitigation and owner security boundary; private pilot blocked.
**Tracking:** Task0017 audit; Issue71 index. Final result remains the status above until a reviewed successor records actual evidence.

## 10. Complete exact-head and merged-main verification

**Original acceptance (verbatim):**

Complete exact-head and merged-main verification
   Only merge reviewed work after applicable checks actually execute. Verify the final merged file tree and rerun or inspect post-merge checks. Record remaining NOT_RUN/BLOCKED conditions accurately.

**Status:** DONE. **Beginning/current evidence:** Live main fca0d96 CI39136089610 SUCCESS; PR76/78/80 merged states fetched.
**Dependencies / next work / limitation:** Repeat exact-head and post-merge checks for every candidate; depends32.
**Tracking:** Task0017 audit; Issue71 index. Final result remains the status above until a reviewed successor records actual evidence.

## 11. Make CURRENT-STATE.md genuinely current

**Original acceptance (verbatim):**

Make CURRENT-STATE.md genuinely current
   Create a compact authoritative current snapshot. Move dated detail into historical records without deleting evidence; eliminate obsolete statements presented as current.

**Status:** IN_VERIFICATION. **Beginning/current evidence:** Task0017 corrects stale main CURRENT-STATE and archives prior bytes.
**Dependencies / next work / limitation:** Review/test/integrate candidate; no fresh cloud inventory.
**Tracking:** Task0017 audit; Issue71 index. Final result remains the status above until a reviewed successor records actual evidence.

## 12. Reconcile repository entrypoints

**Original acceptance (verbatim):**

Reconcile repository entrypoints
   Update AGENTS.md, README.md, PROJECT.md, SOURCE-OF-TRUTH.md and affected setup documents to reflect merged architecture, hosted Supabase, and the Codex role.

**Status:** IN_VERIFICATION. **Beginning/current evidence:** Task0017 corrects AGENTS/workflow/operating-model/README claims; authority retained.
**Dependencies / next work / limitation:** Link and boundary verification; depends11.
**Tracking:** Task0017 audit; Issue71 index. Final result remains the status above until a reviewed successor records actual evidence.

## 13. Separate current truth from historical truth

**Original acceptance (verbatim):**

Separate current truth from historical truth
   Clearly distinguish accepted decisions, active implementation, unmerged proposals, earlier decisions, synthetic results and archived experiments.

**Status:** IN_VERIFICATION. **Beginning/current evidence:** Task0017 separates merged code, proposed language, definition approval, disposable and hosted evidence.
**Dependencies / next work / limitation:** Review archive byte checks and no false approval; depends11.
**Tracking:** Task0017 audit; Issue71 index. Final result remains the status above until a reviewed successor records actual evidence.

## 14. Create one authoritative onboarding entrypoint

**Original acceptance (verbatim):**

Create one authoritative onboarding entrypoint
   A newly connected agent should be able to locate the current SHA, effective instructions, active tasks, accepted ADRs, security holds and task-specific context without reading the entire archive.

**Status:** IN_VERIFICATION. **Beginning/current evidence:** README routes to compact CURRENT-STATE, authority and task/CP/ledger.
**Dependencies / next work / limitation:** Fresh-agent reconstruction separate; depends27/38.
**Tracking:** Task0017 audit; Issue71 index. Final result remains the status above until a reviewed successor records actual evidence.

## 15. Repair contradictory approval and gate states

**Original acceptance (verbatim):**

Repair contradictory approval and gate states
   Reconcile G_DESIGN, G_CODE, G_PRIVATE_PILOT and G_RELEASE with explicit owner-approved individual task exceptions. Approval of one slice must never be misrepresented as global product approval.

**Status:** PARTIAL. **Beginning/current evidence:** Operating model retains pending broad gates with bounded exceptions.
**Dependencies / next work / limitation:** Mandate authorizes offline slices, not global DAG promotion; depends40.
**Tracking:** Task0017 audit; Issue71 index. Final result remains the status above until a reviewed successor records actual evidence.

## 16. Finish original research-source preservation

**Original acceptance (verbatim):**

Finish original research-source preservation
   Archive or provide immutable, access-controlled retrieval references for SRC-001 through SRC-004; verify hashes and reference the actual original bytes, not only research summaries.

**Status:** BLOCKED. **Beginning/current evidence:** SOURCE-REGISTER has four hashes but no original archives; named Downloads search found none.
**Dependencies / next work / limitation:** Exact SRC001–004 bytes/retrieval needed; recovered checklist is distinct.
**Tracking:** Task0017 audit; Issue71 index. Final result remains the status above until a reviewed successor records actual evidence.

## 17. Strengthen source-to-requirement traceability

**Original acceptance (verbatim):**

Strengthen source-to-requirement traceability
   Keep original user intent, research findings, proposals, accepted requirements, feature IDs and test evidence separate. Fix missing or ambiguous links.

**Status:** PARTIAL. **Beginning/current evidence:** PLAN01 has149-ID crosswalk; spec validator covers8 synthetic scenarios.
**Dependencies / next work / limitation:** Audit actual app/test mapping and source anchors; depends16/40.
**Tracking:** Task0017 audit; Issue71 index. Final result remains the status above until a reviewed successor records actual evidence.

## 18. Maintain ADR lifecycle and supersession

**Original acceptance (verbatim):**

Maintain ADR lifecycle and supersession
   Reconcile proposed/accepted/implemented states, dated owner approval, alternatives, implementation references and explicit supersession without rewriting historical decisions.

**Status:** PARTIAL. **Beginning/current evidence:** Accepted ADR0008 retains origin/rationale; historical implementation paragraphs stale.
**Dependencies / next work / limitation:** Scoped lifecycle follow-up preserving alternatives and decisions; depends35.
**Tracking:** Task0017 audit; Issue71 index. Final result remains the status above until a reviewed successor records actual evidence.

## 19. Reduce documentation duplication

**Original acceptance (verbatim):**

Reduce documentation duplication
   Keep one canonical location per current fact or contract. Use links and generated indexes rather than copying full explanations into many plans, reports and agent prompts.

**Status:** PARTIAL. **Beginning/current evidence:** Current-state archive and canonical index reduce active duplication.
**Dependencies / next work / limitation:** Audit remaining active duplicates without rewriting history; depends11/12.
**Tracking:** Task0017 audit; Issue71 index. Final result remains the status above until a reviewed successor records actual evidence.

## 20. Make formal handoffs the normal coding path

**Original acceptance (verbatim):**

Make formal handoffs the normal coding path
   Require a unique task and ContextPack for consequential coding tasks, plus a traceable ExecutionBundle afterward. PR #68 demonstrates the mechanism; make it standard for future work.

**Status:** DONE. **Beginning/current evidence:** PR76 requires new Task/pre-edit CP/EB. Task0017 failed compliance; amendment Task0018 is undergoing verification, not claimed compliant until exact-head checks pass.
**Dependencies / next work / limitation:** Ongoing control, not authenticated identity.
**Tracking:** Task0017 audit; Issue71 index. Final result remains the status above until a reviewed successor records actual evidence.

## 21. Prevent task-scope drift

**Original acceptance (verbatim):**

Prevent task-scope drift
   When new approval extends a task—such as Phase B after the Phase A-only VEL-TASK-0005—record an approved amendment or create a newly pinned task/ContextPack. Never silently reuse the original permission envelope.

**Status:** DONE. **Beginning/current evidence:** Compliance checks pinned scope/phase; Task0015 preserves CP0014 through new amendment.
**Dependencies / next work / limitation:** Material scope needs new pin; depends25.
**Tracking:** Task0017 audit; Issue71 index. Final result remains the status above until a reviewed successor records actual evidence.

## 22. Standardize task acceptance and permissions

**Original acceptance (verbatim):**

Standardize task acceptance and permissions
   Every task should contain a bounded objective, source revision, dependencies, allowed paths/actions, forbidden operations, positive and negative tests, owner checkpoints and clear completion criteria.

**Status:** DONE. **Beginning/current evidence:** Schema/compliance require objective, allowlist, forbidden actions, acceptance and expiry.
**Dependencies / next work / limitation:** Review semantic adequacy of each new task.
**Tracking:** Task0017 audit; Issue71 index. Final result remains the status above until a reviewed successor records actual evidence.

## 23. Make agent identity and code provenance reliable

**Original acceptance (verbatim):**

Make agent identity and code provenance reliable
   Record which tool/model actually performed each action. Preserve original authorship when cherry-picking or adopting code produced by ChatGPT, Codex, Cursor or another contributor.

**Status:** PARTIAL. **Beginning/current evidence:** PR80 manifest preserves ChatGPT PR77 origins; Codex runtime declared.
**Dependencies / next work / limitation:** Git metadata cannot authenticate model identity; depends27/44.
**Tracking:** Task0017 audit; Issue71 index. Final result remains the status above until a reviewed successor records actual evidence.

## 24. Enforce branch and worktree isolation

**Original acceptance (verbatim):**

Enforce branch and worktree isolation
   One assigned executor per task branch, verified starting SHA, preserved local changes, no silent branch takeover and no simultaneous uncontrolled edits to shared files.

**Status:** PARTIAL. **Beginning/current evidence:** Task0017 isolated main worktree; original dirty root preserved.
**Dependencies / next work / limitation:** No universal prevention of uncontrolled shared writes; one executor per branch.
**Tracking:** Task0017 audit; Issue71 index. Final result remains the status above until a reviewed successor records actual evidence.

## 25. Make ContextPacks immutable and current

**Original acceptance (verbatim):**

Make ContextPacks immutable and current
   Validate the task blob and source blob hashes against the pinned commit. Generate a new pack when authoritative inputs or permissions change; do not overwrite dispatched historical packs.

**Status:** DONE. **Beginning/current evidence:** Pack validator checks task/source blobs and rendered body; CP0017 committed pre-edit.
**Dependencies / next work / limitation:** Historical0012 collisions preserved, new IDs scanned across refs.
**Tracking:** Task0017 audit; Issue71 index. Final result remains the status above until a reviewed successor records actual evidence.

## 26. Standardize complete ExecutionBundles

**Original acceptance (verbatim):**

Standardize complete ExecutionBundles
   Require actual commands, exit codes, changed files, environment, exact source/head SHA, test fixtures, security findings, unresolved risks and FACT/INTERPRETATION/PROPOSAL separation.

**Status:** DONE. **Beginning/current evidence:** Merged EB0010/15/16 record commands/exits/source/limitations; code binding enforced.
**Dependencies / next work / limitation:** Task0017 EB still requires current checks; attestations are not independent proof.
**Tracking:** Task0017 audit; Issue71 index. Final result remains the status above until a reviewed successor records actual evidence.

## 27. Verify genuine agent independence

**Original acceptance (verbatim):**

Verify genuine agent independence
   Repeat a real implementation handoff in a fresh Codex or alternative-agent session using only the approved task context. PR #68 proves task packaging and execution, but its own report calls the handoff same-session, not independent cold-start verification.

**Status:** NOT_STARTED. **Beginning/current evidence:** Issue18 prior screenshot lacks proof of fresh conversation; current root has inherited history.
**Dependencies / next work / limitation:** Fresh isolated runtime, minimal packet, raw response/rubric and owner disposition.
**Tracking:** Task0017 audit; Issue71 index. Final result remains the status above until a reviewed successor records actual evidence.

## 28. Prohibit silent implementation-role substitutions

**Original acceptance (verbatim):**

Prohibit silent implementation-role substitutions
   Direct feature coding by ChatGPT or switching away from Codex should require an explicit task-specific exception. Planning, reviewing and small governance edits can have proportionate policies.

**Status:** DONE. **Beginning/current evidence:** ADR0008 and compliance reject alternate executor without reviewed-base exception.
**Dependencies / next work / limitation:** Coordinator cannot claim Codex execution; preserve historical origins.
**Tracking:** Task0017 audit; Issue71 index. Final result remains the status above until a reviewed successor records actual evidence.

## 29. Add PR-to-task compliance validation

**Original acceptance (verbatim):**

Add PR-to-task compliance validation
   Automatically check task identity, ContextPack reference, ExecutionBundle reference, evidence fields and required owner checkpoints for qualifying implementation PRs; allow documented low-risk exemptions.

**Status:** DONE. **Beginning/current evidence:** PR76 integrated trusted-base task/CP/EB/provenance/scope validation.
**Dependencies / next work / limitation:** Declared identity only; no protected GitHub settings claim.
**Tracking:** Task0017 audit; Issue71 index. Final result remains the status above until a reviewed successor records actual evidence.

## 30. Check merged-main artifact integrity

**Original acceptance (verbatim):**

Check merged-main artifact integrity
   Ensure every accepted PR's required files survive integration. Detect missing tests and artifacts, including zero-test discovery, to prevent recurrence of the 21-file research recovery incident.

**Status:** PARTIAL. **Beginning/current evidence:** Runner requires suites and archive hashes; PR43 recovery report exists.
**Dependencies / next work / limitation:** Clean tree/reconstruction drill and zero-test protection evidence; depends38/41.
**Tracking:** Task0017 audit; Issue71 index. Final result remains the status above until a reviewed successor records actual evidence.

## 31. Audit workflow triggers and test coverage

**Original acceptance (verbatim):**

Audit workflow triggers and test coverage
   Ensure implementation, SQL, validator, task, metadata and relevant documentation changes trigger applicable checks. Passing unrelated tests must not mask untested changed surfaces.

**Status:** DONE. **Beginning/current evidence:** ci.yml event/gate contract and37CI-policy/57compliance tests are merged.
**Dependencies / next work / limitation:** New changed surfaces still need applicable tests; no extra automatic workflow.
**Tracking:** Task0017 audit; Issue71 index. Final result remains the status above until a reviewed successor records actual evidence.

## 32. Establish dependable review evidence

**Original acceptance (verbatim):**

Establish dependable review evidence
   Make exact-head source inspection, focused negative tests, advisory AI/CodeRabbit review where available and owner disposition explicit. A Draft-skipped CodeRabbit result is not an independent review.

**Status:** PARTIAL. **Beginning/current evidence:** Prior PR76/78 independent reviews exist; new task review pending.
**Dependencies / next work / limitation:** Exact-head distinct review/owner disposition; draft-skipped review is not acceptance.
**Tracking:** Task0017 audit; Issue71 index. Final result remains the status above until a reviewed successor records actual evidence.

## 33. Protect integration against bypass

**Original acceptance (verbatim):**

Protect integration against bypass
   Assess branch-protection/ruleset availability on the private repository. Where GitHub plan limits prevent required checks, use documented owner-controlled merge procedures and verification evidence.

**Status:** PARTIAL. **Beginning/current evidence:** Read-only main protection404 and rulesets[]; owner deferral documented.
**Dependencies / next work / limitation:** Manual gate remains technically bypassable; no settings changes.
**Tracking:** Task0017 audit; Issue71 index. Final result remains the status above until a reviewed successor records actual evidence.

## 34. Separate CI failures from infrastructure failures

**Original acceptance (verbatim):**

Separate CI failures from infrastructure failures
   Report runner-not-started, account restrictions, unavailable Docker/PostgreSQL, actual failed assertions and missing configuration as distinct conditions. None should be mislabeled PASS.

**Status:** DONE. **Beginning/current evidence:** Evidence distinguishes draft-blocked, SQL-skipped, runner and assertion failures.
**Dependencies / next work / limitation:** Classify actual outcome for each run; no skipped PASS.
**Tracking:** Task0017 audit; Issue71 index. Final result remains the status above until a reviewed successor records actual evidence.

## 35. Close and reconcile completed or superseded work

**Original acceptance (verbatim):**

Close and reconcile completed or superseded work
   Review paused PR #59 and old Issue #58, continuing Issue #63, outstanding Stage 3 Issue #18, and the newer #65/#66/#68. Close, retain or supersede with accurate links and decisions.

**Status:** PARTIAL. **Beginning/current evidence:** Task0021/PR86 independently reviewed source comparisons and passed fullCI39321788645; PR59/66/82 actually CLOSED unmerged2026-10-19 under the mandate supersession instruction, original sources preserved. PR65/68 and Issues18/58/63/81 remain OPEN; Draft83–87 unmerged.
**Dependencies / next work / limitation:** Compare scope then eligible dispositions; do not close unmet acceptance.
**Tracking:** Task0017 audit; Issue71 index. Final result remains the status above until a reviewed successor records actual evidence.

## 36. Apply least-privilege agent permissions

**Original acceptance (verbatim):**

Apply least-privilege agent permissions
   Limit repository, credential, filesystem, network, paid API, database and deployment access by task. Preserve explicit owner checkpoints for destructive or high-impact operations.

**Status:** PARTIAL. **Beginning/current evidence:** Read-only workflow tokens and forbidden task actions present.
**Dependencies / next work / limitation:** Broad tools still require execution discipline; no privileged settings authorization.
**Tracking:** Task0017 audit; Issue71 index. Final result remains the status above until a reviewed successor records actual evidence.

## 37. Strengthen secret and private-data protections

**Original acceptance (verbatim):**

Strengthen secret and private-data protections
   Keep local .env files ignored; use secret checks and sanitized logs/artifacts. Never store author manuscripts, access tokens or service-role keys in Git handoff packets.

**Status:** PARTIAL. **Beginning/current evidence:** Env ignore/examples and security tests exist; no real data used here.
**Dependencies / next work / limitation:** Full secret-history audit not performed; sanitize evidence imports.
**Tracking:** Task0017 audit; Issue71 index. Final result remains the status above until a reviewed successor records actual evidence.

## 38. Test full project recovery from a clean environment

**Original acceptance (verbatim):**

Test full project recovery from a clean environment
   Clone the repository without prior ChatGPT context, set up the pinned tooling, reconstruct the active project state and execute a synthetic task. Record everything that cannot be recovered.

**Status:** PARTIAL. **Beginning/current evidence:** Task0022/PR87 clean Git-bundle restore recovered43 required immutable/provenance commits; pinned tooling/frozen install,15 handoff+8 entrypoint+66 Library+19 preflight tests, builds/checks pass. First missing-pin failure and corruption/missing-file negatives preserved.
**Dependencies / next work / limitation:** Same Windows host/root context; fresh independent AI/cleanOS NOT_RUN, so original acceptance is not complete. Retained anchored bundle survives owned-clone GC; exact final CI/review in PR87.
**Tracking:** Task0017 audit; Issue71 index. Final result remains the status above until a reviewed successor records actual evidence.

## 39. Make CI reproducible without unsafe cloud dependencies

**Original acceptance (verbatim):**

Make CI reproducible without unsafe cloud dependencies
   Maintain disposable PostgreSQL/Auth test paths, predictable tool versions, safe fixture cleanup and offline-capable checks. Hosted tests should require their own explicit authorization.

**Status:** PARTIAL. **Beginning/current evidence:** Consolidated disposable Supabase/CAS and manual PG17 checks actually run.
**Dependencies / next work / limitation:** Fresh reproducibility and durable evidence remain; depends38/41.
**Tracking:** Task0017 audit; Issue71 index. Final result remains the status above until a reviewed successor records actual evidence.

## 40. Link actual implementation to acceptance status

**Original acceptance (verbatim):**

Link actual implementation to acceptance status
   Map delivered features and test results back to the 149-ID MVP crosswalk. Update PASS/FAIL/BLOCKED/NOT_RUN only from observed behavior, not from planning documents.

**Status:** PARTIAL. **Beginning/current evidence:** Library implemented and crosswalk exists; production chapter/editor/save absent.
**Dependencies / next work / limitation:** Map real tests to149IDs/11journeys/eightareas; no MVP completion claim.
**Tracking:** Task0017 audit; Issue71 index. Final result remains the status above until a reviewed successor records actual evidence.

## 41. Establish repository recovery and backup checks

**Original acceptance (verbatim):**

Establish repository recovery and backup checks
   Verify that source, evidence, relevant artifacts and migration history can be recovered, including after bad merges or lost agent worktrees. Keep secrets outside backup copies of the knowledge repository.

**Status:** PARTIAL. **Beginning/current evidence:** Task0019/PR84 now retains the original PG17 archive and result in Git with independently verified archive/member hashes,13 evidence checks and source identities. Task0022/PR87 now also demonstrates bounded43-pin Git source/evidence recovery, negative checks and GC-safe retained bundle; complete hosted/product recovery remains unverified.
**Dependencies / next work / limitation:** Retained PG evidence verified at PR84 head8a4e526bdf1f21da68ea4e631e68cbd07d2477bc; bounded source/evidence drill recorded in PR87. Hosted migration history/data and broader retention remain unverified; no comprehensive historical secret audit. Owner integration pending.
**Tracking:** Task0017 audit; Issue71 index. Final result remains the status above until a reviewed successor records actual evidence.

## 42. Measure agentic workflow effectiveness

**Original acceptance (verbatim):**

Measure agentic workflow effectiveness
   Track compliant handoffs, cold-start success, verification time, escaped defects, context size, review rework, cost and false claims to determine whether the workflow actually improves delivery.

**Status:** PARTIAL. **Beginning/current evidence:** Task0022/PR87 records4 actual successful fullCI timing samples (147–178wall seconds,204–236 summed job seconds),4 immutable context byte/hash measurements and1 observed recovery failure/correction.
**Dependencies / next work / limitation:** No billing API/model token counts/counterfactual savings/escaped-defect rate or independent cold-start series; repeated effectiveness measurement remains pending.
**Tracking:** Task0017 audit; Issue71 index. Final result remains the status above until a reviewed successor records actual evidence.

## 43. Delay additional orchestration infrastructure

**Original acceptance (verbatim):**

Delay additional orchestration infrastructure
   Introduce a custom MCP knowledge server, vector search, knowledge graph or automated multi-agent orchestration only if measured retrieval/coordination problems remain after the Git-first workflow is stabilized.

**Status:** DONE. **Beginning/current evidence:** Git-first control plane retained without new orchestration infrastructure.
**Dependencies / next work / limitation:** Revisit only with measured coordination/retrieval need.
**Tracking:** Task0017 audit; Issue71 index. Final result remains the status above until a reviewed successor records actual evidence.

## 44. Enforce agentic role boundaries at task dispatch and repository write time (CRITICAL)

**Original acceptance (verbatim):**

Enforce agentic role boundaries at task dispatch and repository write time (CRITICAL)
   Prevent ChatGPT, acting as architect/coordinator/reviewer, from directly implementing code or modifying CI/application files just because it has GitHub write access. Require an owner-authorized, uniquely identified task and immutable ContextPack before Codex begins implementation; record the actual executor in the PR and ExecutionBundle. If Codex cannot be dispatched through the available tools, stop at a reviewable handoff and report NOT_STARTED—do not silently become the implementer. Add a documented exception process for explicitly reassigned tasks or narrowly scoped governance edits; verify role compliance during review and with applicable automated PR-to-task checks. Audit prior coordinator-authored implementation work for provenance and any missing handoff evidence.
   Acceptance: a coordinator-only session cannot claim Codex execution or merge-ready implementation; a CI/PR check flags missing authorized task/ContextPack/executor evidence for qualifying changes, and a real Codex handoff is independently verified. Related existing items: #20, #21, #23, #28 and #29.

**Status:** PARTIAL. **Beginning/current evidence:** PR76 declared role/task/pack checks integrated; current pre-edit pack verified.
**Dependencies / next work / limitation:** Runtime identity/cold-start limits and coordinator audit remain; depends23/27/28/29.
**Tracking:** Task0017 audit; Issue71 index. Final result remains the status above until a reviewed successor records actual evidence.

## Programme disposition

**FACT:** Task0017 changes documentation only. No PR has been closed or merged by this task. IMP-002/003A/003B production implementation remains NOT_IMPLEMENTED.

**INTERPRETATION:** continued bounded offline development GO; hosted-dev data acceptance, real-author private pilot and production release NO-GO pending distinct gates.

**PROPOSAL:** review Task0017; progress PR hygiene, Issue81 retention/readiness, language decisions and clean recovery in separate tasks; then chapter/editor/save slices with reviewed SQL path authorization where needed. Current effective governance reserves merge to owner despite conditional mandate delegation.

## Resumption checkpoint — 2026-10-19

PR82 bd4f440 failed governance (Task0017 remained ready and used an unsupported authorization-provenance value). Application/security and PostgreSQL recovery passed in run39149292469; full verification did not pass. No independent review result survived the interruption. New conformant Task/CP0018 precedes re-adoption of the same Codex documentation patch; CP0017/PR82 remain historical. Counts unchanged; no interrupted work promoted.

## Verified continuation ledger — 2026-10-19

Historical starting counts14DONE/18PARTIAL/4BLOCKED/4IN_VERIFICATION/4NOT_STARTED are preserved in the earlier checkpoint; they were not an owner checkbox sign-off. The sole current count change is41 NOT_STARTED→PARTIAL because durable PG17 artifact retention is now implemented, committed/pushed, independently checked and full-CI verified in PR84. Full repository restore is still missing, so41 is not DONE. Current totals:14DONE/19PARTIAL/4BLOCKED/4IN_VERIFICATION/3NOT_STARTED=44.

- **State amendment:** PR83 head3428365cea9ef28d27a9acc979b9e97758604022 received distinct Codex advisory source review with no blockers and fullCI39221895264 SUCCESS (383 governance tests, application/security and CAS/restore PASS; integrated SQL absent/SKIPPED). Ordinary draft39221900743 governance PASS, merge gate deliberately blocked. These are historical verified candidate results; this ledger update will receive its own final-head CI. No merge acceptance inferred.
- **Issue81 offline stage:** PR84 head8a4e526bdf1f21da68ea4e631e68cbd07d2477bc, source93fa373, fullCI39320128393 SUCCESS; ordinary draft39320135449 governance PASS with designed blocked gate. Reviewer P2 ambiguous PR65 lineage fixed:5 unchanged ChatGPT paths,6 inherited with Codex changes,27 new PR68 paths. Final distinct Codex reviewer found no remaining actionable findings and independently reproduced ZIP/member hashes and13 evidence checks. Offline preparation is technically review-ready; issue acceptance/owner merge and hosted07/08/JWT09 remain separate. No claim of ChatGPT/human approval.
- **Artifact retention:** archive SHA256 d426612fbb1197e8e80b8b5a7cd8cfa97e24c2307af3fe786485cf0e416fbf62; member fb1fefddde801315d661a6248d138473d0bb2ae9b525f2033c9b8c9d1f3f25cf. Original synthetic run39135149678 remains historical, not rerun. Main remainsfca0d96fd071f1165e3e16658d821a3d36a20293.
- **Preflight continuation:** Task/CP/EB0020 separately adopts pinned safe preflight helper/tests with ChatGPT/Codex provenance;19 synthetic preflight and66 Library tests plus builds/typechecks PASS locally. It is not integrated main or hosted acceptance; finalCI/review is tracked in that draft candidate. PR65/68 disposition stays PARTIAL until successor adoption and remaining decisions.

**Owner gates:** Current accepted authority reserves merge to owner. These drafts remain unmerged. Third SQL definition approval is planning only; no hosted inventory/login/dry-run/apply/Auth fixture, private manuscripts, paid model call, settings or release permission. IMP002/003A/003B remain not implemented in production; SQL mutation paths need separately reviewed-base authority and repository prerequisites before dependent application acceptance.

## Reconciled recovered-review checkpoint — 2026-10-19

Previous continuation totals14DONE/19PARTIAL/4BLOCKED/4IN_VERIFICATION/3NOT_STARTED above are historical. Only38 and42 now advance NOT_STARTED→PARTIAL from actual Task0022 recovery and measured metadata. No DONE added: **14DONE/21PARTIAL/4BLOCKED/4IN_VERIFICATION/1NOT_STARTED=44**. Item27 is the sole NOT_STARTED; source-review subagents are not its fresh independent implementation handoff.

- Recovered distinct reviews: state82a83ea and offline-readiness8a4e526 had no remaining actionable findings. FullCI39320774241 and39320128393 passed respectively; PR84 retained PG17 ZIP/member hashes and13 evidence assertions were independently reproduced. Issue81 offline readiness is documented/review-ready, not formal acceptance or hosted verification.
- Safe preflight candidate PR85cb6b5d0 received distinct Codex review and fullCI39320829746 SUCCESS, including19 preflight/66 Library tests. No original helper authorship claimed by the integrating agent.
- Source disposition PR86 at6feb8d8 received distinct review and fullCI39321788645 SUCCESS. Actual closures:59 at20:50:57Z,66 at20:51:02Z,82 at20:51:08Z on2026-10-19, all unmerged. [Disposition evidence](https://github.com/Ben-001-sys/Vellistry/pull/86#issuecomment-6277076424) preserves comparison and closure records. No source branch deleted.
- Recovery PR87 prior c02069e fullCI39323878707 SUCCESS and distinct source review had no actionable findings; dangling-pin durability was a disclosed limitation. New e56eead77d6b52705ed18418200128d80ffccbcc anchors43 refs and durably retains2,620,689-byte bundle SHA256984a99d0148fe041ee888c0fcc968adf277b7e48be8cd6662a88d3aa07b87465. Fresh owned clone GC/fsck/handoff all exit0. Its fullCI39324704564 and final delta review are tracked externally; no result presumed here. No runtime ownerenv data copied, and no exhaustive Git-history secret audit claimed.
- The mandate source and all44 acceptance blocks remain unchanged. Main reverified fca0d96fd071f1165e3e16658d821a3d36a20293; Draft83–87 remain unmerged, PR65/68 OPEN. Earlier no-closure and pending-recovery statements describe their original checkpoints.

**Next authorized work / decision boundary:** final exact-head state/recovery review and CI, then ChatGPT independent review and owner-controlled integration. Continue separately scoped offline work as prerequisites permit; IMP002/003A/003B are not claimed implemented. No hosted access, migration execution, private manuscripts, paid calls, repository settings or delegated merge authority inferred.
