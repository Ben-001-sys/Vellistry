# Vellistry canonical remediation ledger — 22 October 2026

FACT: baseline `67e48d1fa821fe5e3e94ab7457f554720b676106`, [post-main39743512586](https://github.com/Ben-001-sys/Vellistry/actions/runs/39743512586) SUCCESS. Task0041 changes are IN_VERIFICATION until their own integration gates pass. This is technical status, not owner checkbox sign-off. Original checklist SHA256 `10e5323de6d524f5a381e845b2859a966f0b89c8d85685c5f19eebd480459890`.

[Original exact source](../agent-workflow/inputs/VEL-TASK-0041/ORIGINAL-CHECKLIST.md); [historical PR83 ledger](../agent-workflow/inputs/VEL-TASK-0041/PR83-LEDGER.md); [machine-readable current rows](evidence/VEL-CURRENT-TRUTH-0041/ledger.json). All44 acceptance blocks below are preserved verbatim. Counts: BLOCKED=4, DONE=22, IN_VERIFICATION=11, PARTIAL=7; total44.

Each source is at the baseline unless a linked report records a more precise implementation SHA. [PR/CI register](VEL-CURRENT-TRUTH-0041-DISPOSITIONS.md) supplies integration and test links. DONE means the bounded original repository requirement has supporting evidence, not product or hosted acceptance. PARTIAL retains unmet parts; IN_VERIFICATION is not integrated completion.

## 01 — DONE

```text
[ ] 01. Restore GitHub Actions execution
   Resolve the account payment/spending-limit restriction reported in PR #68's execution evidence. Rerun the failed workflows at their exact commit SHAs; do not classify runner-start failures as code-test failures.
```

**Evidence:** Task0039 reran all22 exact-source workflows successfully; original30 zero-step failures retained. Runtime execution is restored; billing repair mechanism and account settings were not inspected. [Source](../../docs/reports/VEL-PR68-RECONCILIATION-0039.md).

**Outstanding / next action:** None for repository execution; do not infer a billing change. **Control:** none.

## 02 — DONE

```text
[ ] 02. Complete the Codex-primary governance transition
   Review and integrate ADR-0008 in PR #66 after applicable verification. Ensure the effective default workflow is ChatGPT coordinator → Codex implementer → independent review → owner approval, with Cursor retained as an optional alternate.
```

**Evidence:** PR75 adopted original ChatGPT ADR0008; PR94 preserved seven original files and superseded PR66. Default role decision unchanged. [Source](../../docs/decisions/ADR-0008-codex-primary-agentic-implementation-workflow.md).

**Outstanding / next action:** Maintain explicit task exceptions and provenance. **Control:** none.

## 03 — DONE

```text
[ ] 03. Resolve competing implementation PRs
   Decide how to supersede or close the ChatGPT-authored PR #65 after reviewing its reuse in Codex PR #68. Preserve authorship and cherry-pick provenance. Do not blindly merge both branches.
```

**Evidence:** PR102 adopted exact ChatGPT browser wording and corrected setup; PR65 closed. PR104 mapped all38 PR68 paths, excluded obsolete CI, retained SQL gates and closed68 after post-main PASS. [Source](../../docs/reports/VEL-INTEGRATION-0037-DISPOSITIONS.md).

**Outstanding / next action:** No competing implementation PR remains; preserve source branches. **Control:** none.

## 04 — DONE

```text
[ ] 04. Independently review Codex PR #68
   Inspect actual code, SQL, test fixtures, task permissions, evidence and changed paths. Verify that its new Phase B work is separately authorized and reviewed, rather than accepting the Codex report alone.
```

**Evidence:** PR91 retained38-path source/security review; PR104 distinct exact-head review and22 historical reruns verified successor evidence. Old PhaseB permission is not reissued. [Source](../../docs/reports/VEL-PR68-RECONCILIATION-0039.md).

**Outstanding / next action:** Future SQL or hosted work needs the separate decision packet. **Control:** none.

## 05 — DONE

```text
[ ] 05. Verify the database privilege defect
   Run the proposed PostgreSQL 17 regression on an isolated disposable database. Confirm the original books-table privilege behavior and prove that the proposed grant correction removes inappropriate TRUNCATE and other excess privileges.
```

**Evidence:** Disposable PG17.11 run39135149678 records before P0001/exit3 and after48 ACL checks, denied excess privileges, RLS and cleanup. Injected broad grants are explicit. [Source](../../docs/reports/VEL-DB-READINESS-001-OFFLINE-REVIEW.md).

**Outstanding / next action:** Do not represent synthetic grants as observed hosted defaults. **Control:** none.

## 06 — PARTIAL

```text
[ ] 06. Approve the additional privilege-hardening migration
   Obtain an explicit owner decision for the newly proposed third SQL migration. Earlier authorization for the original two migrations does not automatically approve a new one.
```

**Evidence:** Exact third SQL definition has planning-only owner approval. Operative repository SQL paths remain unadopted; no hosted execution approval follows. [Source](../../docs/reports/VEL-PR68-RECONCILIATION-0039-DECISION-PACKET.md).

**Outstanding / next action:** External owner decision on exact SQL-path adoption and later separate execution gates. **Control:** external.

## 07 — BLOCKED

```text
[ ] 07. Establish safe hosted migration access
   Authenticate the Supabase CLI securely, verify the exact vellistry-dev target, preserve correct migration versions/history, perform a reviewed dry run and exclude unrelated Vault, roles, seed and reset operations.
```

**Evidence:** Current mandate forbids hosted access, including read-only inventory, CLI authentication and dry run. [Source](../../docs/reports/VEL-PR68-RECONCILIATION-0039-DECISION-PACKET.md).

**Outstanding / next action:** External exact-target security-sensitive authorization required. **Control:** external.

## 08 — BLOCKED

```text
[ ] 08. Run authorized hosted development acceptance
   After approval and successful isolated SQL verification, apply the reviewed migrations and test two disposable authors, book persistence, account isolation, forged ownership, RLS and prohibited operations. Clean up fixtures.
```

**Evidence:** No authorized hosted two-author migration/persistence acceptance has executed; disposable CI is not that acceptance. [Source](../../docs/reports/VEL-PR68-RECONCILIATION-0039-DECISION-PACKET.md).

**Outstanding / next action:** External hosted approval, reviewed migration state, synthetic accounts and cleanup authorization. **Control:** external.

## 09 — BLOCKED

```text
[ ] 09. Resolve the signed-out JWT security risk
   Test whether an unexpired access token can still read private data directly through PostgREST after sign-out. Choose and verify a mitigation or explicitly approved security boundary before any real private-manuscript pilot.
```

**Evidence:** Unexpired signed-out JWT direct Data API access remains a documented security boundary; no approved verified private-pilot mitigation. [Source](../../docs/reports/VEL-PR68-RECONCILIATION-0039-DECISION-PACKET.md).

**Outstanding / next action:** External security decision and separately scoped mitigation verification before private manuscripts. **Control:** external.

## 10 — DONE

```text
[ ] 10. Complete exact-head and merged-main verification
   Only merge reviewed work after applicable checks actually execute. Verify the final merged file tree and rerun or inspect post-merge checks. Record remaining NOT_RUN/BLOCKED conditions accurately.
```

**Evidence:** Serial reviewed integrations throughPR105 had ready CI, exact merged-tree comparisons and successful post-main. Latest baseline67e48d1/post39743512586 verified. [Source](../../docs/reports/VEL-CURRENT-TRUTH-0041-DISPOSITIONS.md).

**Outstanding / next action:** Repeat these gates for this successor and final recovery report. **Control:** none.

## 11 — IN_VERIFICATION

```text
[ ] 11. Make CURRENT-STATE.md genuinely current
   Create a compact authoritative current snapshot. Move dated detail into historical records without deleting evidence; eliminate obsolete statements presented as current.
```

**Evidence:** Task0041 replaces stale current snapshot with compact dated verified facts and preserves original Git bytes. [Source](../../CURRENT-STATE.md).

**Outstanding / next action:** Executable: review, ready CI, integrate and verify this successor. **Control:** repository.

## 12 — IN_VERIFICATION

```text
[ ] 12. Reconcile repository entrypoints
   Update AGENTS.md, README.md, PROJECT.md, SOURCE-OF-TRUTH.md and affected setup documents to reflect merged architecture, hosted Supabase, and the Codex role.
```

**Evidence:** Task0041 reconciles six entrypoints, effective compliance and temporary delegation without changing accepted role decisions. [Source](../../AGENTS.md).

**Outstanding / next action:** Executable: focused contracts and independent integration review. **Control:** repository.

## 13 — IN_VERIFICATION

```text
[ ] 13. Separate current truth from historical truth
   Clearly distinguish accepted decisions, active implementation, unmerged proposals, earlier decisions, synthetic results and archived experiments.
```

**Evidence:** Current snapshot separates accepted direction, implemented Library, historical proposals, disposable results and hosted holds. [Source](../../CURRENT-STATE.md).

**Outstanding / next action:** Executable: verify claims and integrate successor. **Control:** repository.

## 14 — IN_VERIFICATION

```text
[ ] 14. Create one authoritative onboarding entrypoint
   A newly connected agent should be able to locate the current SHA, effective instructions, active tasks, accepted ADRs, security holds and task-specific context without reading the entire archive.
```

**Evidence:** README routes to compact state, task/pack, ledger, dispositions and security decision packet. [Source](../../README.md).

**Outstanding / next action:** Executable: resolve links and integrate successor. **Control:** repository.

## 15 — IN_VERIFICATION

```text
[ ] 15. Repair contradictory approval and gate states
   Reconcile G_DESIGN, G_CODE, G_PRIVATE_PILOT and G_RELEASE with explicit owner-approved individual task exceptions. Approval of one slice must never be misrepresented as global product approval.
```

**Evidence:** Pending G_DESIGN/G_CODE/G_PRIVATE_PILOT/G_RELEASE remain unchanged; bounded task and temporary repository integration exception are explicit. [Source](../../docs/agent-workflow/IMPLEMENTATION-OPERATING-MODEL.md).

**Outstanding / next action:** Executable: validate no DAG promotion and integrate clarification. **Control:** repository.

## 16 — BLOCKED

```text
[ ] 16. Finish original research-source preservation
   Archive or provide immutable, access-controlled retrieval references for SRC-001 through SRC-004; verify hashes and reference the actual original bytes, not only research summaries.
```

**Evidence:** Task0038 preserves exact original transport and SRC001/002/003 matching historical hashes; SRC004 exact archive remains missing after bounded search. [Source](../../docs/research/SOURCE-REGISTER.md).

**Outstanding / next action:** External original SRC004 bytes or authentic immutable retrieval reference required; do not reconstruct. **Control:** external.

## 17 — IN_VERIFICATION

```text
[ ] 17. Strengthen source-to-requirement traceability
   Keep original user intent, research findings, proposals, accepted requirements, feature IDs and test evidence separate. Fix missing or ambiguous links.
```

**Evidence:** Original author intent, proposed requirement and accepted horizon remain separate; Task0041 adds all149-ID observed-evidence overlay without treating planned tests as executed. [Source](../../docs/reports/VEL-CURRENT-TRUTH-0041-FEATURES.md).

**Outstanding / next action:** Executable: validate exact ID coverage and evidence semantics, then integrate. **Control:** repository.

## 18 — IN_VERIFICATION

```text
[ ] 18. Maintain ADR lifecycle and supersession
   Reconcile proposed/accepted/implemented states, dated owner approval, alternatives, implementation references and explicit supersession without rewriting historical decisions.
```

**Evidence:** ADR0008 decision/alternatives/rationale and original owner event retained; dated implementation clarification distinguishes closed predecessors and current enforcement. [Source](../../docs/decisions/ADR-0008-codex-primary-agentic-implementation-workflow.md).

**Outstanding / next action:** Executable: compare immutable decision sections and integrate. **Control:** repository.

## 19 — IN_VERIFICATION

```text
[ ] 19. Reduce documentation duplication
   Keep one canonical location per current fact or contract. Use links and generated indexes rather than copying full explanations into many plans, reports and agent prompts.
```

**Evidence:** Canonical current facts move to compact state and ledger; historical snapshots retained and linked rather than silently overwritten. [Source](../../CURRENT-STATE.md).

**Outstanding / next action:** Executable: complete successor links/review; later final report references this ledger. **Control:** repository.

## 20 — DONE

```text
[ ] 20. Make formal handoffs the normal coding path
   Require a unique task and ContextPack for consequential coding tasks, plus a traceable ExecutionBundle afterward. PR #68 demonstrates the mechanism; make it standard for future work.
```

**Evidence:** Merged compliance requires unique Task, committed pre-edit immutable CP and source-bound EB; successive Tasks25–40 demonstrate actual chain. [Source](../../docs/agent-workflow/PR-COMPLIANCE.md).

**Outstanding / next action:** Continue same chain for41 and any final bounded recovery task. **Control:** none.

## 21 — DONE

```text
[ ] 21. Prevent task-scope drift
   When new approval extends a task—such as Phase B after the Phase A-only VEL-TASK-0005—record an approved amendment or create a newly pinned task/ContextPack. Never silently reuse the original permission envelope.
```

**Evidence:** Material source/scope changes used unique amendments; CP0014 and historical packs retained. Task39 oversized input rejected before implementation. [Source](../../docs/agent-workflow/tasks/VEL-TASK-0039.yaml).

**Outstanding / next action:** Maintain immutable permission envelope; no silent scope reuse. **Control:** none.

## 22 — DONE

```text
[ ] 22. Standardize task acceptance and permissions
   Every task should contain a bounded objective, source revision, dependencies, allowed paths/actions, forbidden operations, positive and negative tests, owner checkpoints and clear completion criteria.
```

**Evidence:** Task schema and trusted-base compliance validate objective, paths, permissions, authorization expiry and source/pack/bundle binding with negative tests. [Source](../../docs/agent-workflow/PR-COMPLIANCE.md).

**Outstanding / next action:** Preserve existing defaults and reserved checkpoints. **Control:** none.

## 23 — DONE

```text
[ ] 23. Make agent identity and code provenance reliable
   Record which tool/model actually performed each action. Preserve original authorship when cherry-picking or adopting code produced by ChatGPT, Codex, Cursor or another contributor.
```

**Evidence:** Per-source manifests preserve ChatGPT65/66, Cursor-era and Codex changes; actual fresh sessions recorded with unknown model builds explicitly unknown. [Source](../../docs/reports/VEL-PR68-RECONCILIATION-0039.md).

**Outstanding / next action:** Do not infer runtime identity from Git author names. **Control:** none.

## 24 — DONE

```text
[ ] 24. Enforce branch and worktree isolation
   One assigned executor per task branch, verified starting SHA, preserved local changes, no silent branch takeover and no simultaneous uncontrolled edits to shared files.
```

**Evidence:** Tasks use isolated named branches/worktrees and verified bases; original dirty owner checkout preserved, no silent takeover. [Source](../../docs/agent-workflow/execution-bundles/VEL-EB-0038.md).

**Outstanding / next action:** Continue single executor per task and explicit source checks. **Control:** none.

## 25 — DONE

```text
[ ] 25. Make ContextPacks immutable and current
   Validate the task blob and source blob hashes against the pinned commit. Generate a new pack when authoritative inputs or permissions change; do not overwrite dispatched historical packs.
```

**Evidence:** Pack validator compares pinned task/source blobs and rendered body; all dispatched packs remain immutable and committed before edits. [Source](../../docs/agent-workflow/README.md).

**Outstanding / next action:** New authoritative scope requires a new pack. **Control:** none.

## 26 — DONE

```text
[ ] 26. Standardize complete ExecutionBundles
   Require actual commands, exit codes, changed files, environment, exact source/head SHA, test fixtures, security findings, unresolved risks and FACT/INTERPRETATION/PROPOSAL separation.
```

**Evidence:** Source-bound bundles retain actual commands, exits, fixtures, limitations and fact/interpretation/proposal sections; historical results separately bound. [Source](../../docs/agent-workflow/execution-bundles/VEL-EB-0040.md).

**Outstanding / next action:** Complete EB0041 after actual tests; no copied old results as current. **Control:** none.

## 27 — PARTIAL

```text
[ ] 27. Verify genuine agent independence
   Repeat a real implementation handoff in a fresh Codex or alternative-agent session using only the approved task context. PR #68 proves task packaging and execution, but its own report calls the handoff same-session, not independent cold-start verification.
```

**Evidence:** Task0038 fresh filesystem attempt blocked before input reads; separate input-only generation was integrated/tested by primary. Task40 historical reasoning10PASS is not end-to-end implementation. [Source](../../docs/reports/VEL-SOURCE-PRESERVATION-0038.md).

**Outstanding / next action:** External usable fresh implementation environment and complete original acceptance; do not mark DONE. **Control:** external.

## 28 — DONE

```text
[ ] 28. Prohibit silent implementation-role substitutions
   Direct feature coding by ChatGPT or switching away from Codex should require an explicit task-specific exception. Planning, reviewing and small governance edits can have proportionate policies.
```

**Evidence:** ADR0008 and compliance require Codex unless an explicit task-specific reviewed exception exists; coordinator write access is not permission. [Source](../../AGENTS.md).

**Outstanding / next action:** Keep alternate roles explicit and preserve original authorship. **Control:** none.

## 29 — DONE

```text
[ ] 29. Add PR-to-task compliance validation
   Automatically check task identity, ContextPack reference, ExecutionBundle reference, evidence fields and required owner checkpoints for qualifying implementation PRs; allow documented low-risk exemptions.
```

**Evidence:** Merged trusted-base PR-to-task validator checks authorization, pack, EB, source/scope and executor provenance; negative bypass tests retained. [Source](../../docs/agent-workflow/PR-COMPLIANCE.md).

**Outstanding / next action:** Static evidence is not human/runtime identity authentication. **Control:** none.

## 30 — DONE

```text
[ ] 30. Check merged-main artifact integrity
   Ensure every accepted PR's required files survive integration. Detect missing tests and artifacts, including zero-test discovery, to prevent recurrence of the 21-file research recovery incident.
```

**Evidence:** Each integration compares reviewed and merged tree; governance runner rejects missing/zero tests and verifies research/independent artifacts. [Source](../../scripts/ci_governance.py).

**Outstanding / next action:** Final dependency-closed backup remains separately IN_VERIFICATION under41. **Control:** none.

## 31 — DONE

```text
[ ] 31. Audit workflow triggers and test coverage
   Ensure implementation, SQL, validator, task, metadata and relevant documentation changes trigger applicable checks. Passing unrelated tests must not mask untested changed surfaces.
```

**Evidence:** Single automatic workflow, mandatory events/main push, final gate inputs/command, read-only job permissions and unconditional governance runner are protected by negative contracts. [Source](../../tests/test_ci_policy.py).

**Outstanding / next action:** Preserve draft-aware behavior and security/recovery gates. **Control:** none.

## 32 — DONE

```text
[ ] 32. Establish dependable review evidence
   Make exact-head source inspection, focused negative tests, advisory AI/CodeRabbit review where available and owner disposition explicit. A Draft-skipped CodeRabbit result is not an independent review.
```

**Evidence:** Distinct trusted Codex sessions reviewed each successor exact head; review findings produced bounded corrections and red/green tests. Draft-skipped CodeRabbit never counted. [Source](../../docs/reports/VEL-CURRENT-TRUTH-0041-DISPOSITIONS.md).

**Outstanding / next action:** Repeat distinct review for41/final recovery; preserve owner acceptance boundaries. **Control:** none.

## 33 — DONE

```text
[ ] 33. Protect integration against bypass
   Assess branch-protection/ruleset availability on the private repository. Where GitHub plan limits prevent required checks, use documented owner-controlled merge procedures and verification evidence.
```

**Evidence:** Historical protection404/rulesets empty and owner sole-maintainer deferral are documented; serial evidence-controlled merge procedure used. [Source](../../docs/agent-workflow/authorizations/VEL-REM-INTEGRATION-20261019.yaml).

**Outstanding / next action:** Residual authorized-writer bypass risk accepted only within recorded deferral; no setting change. **Control:** none.

## 34 — DONE

```text
[ ] 34. Separate CI failures from infrastructure failures
   Report runner-not-started, account restrictions, unavailable Docker/PostgreSQL, actual failed assertions and missing configuration as distinct conditions. None should be mislabeled PASS.
```

**Evidence:** Evidence distinguishes zero-step infrastructure failure, draft gate refusal, skipped SQL, blocked worker filesystem, real assertion failure and PASS. [Source](../../docs/reports/VEL-PR68-RECONCILIATION-0039.md).

**Outstanding / next action:** Continue exact classifications; no billing or skip-to-PASS inference. **Control:** none.

## 35 — IN_VERIFICATION

```text
[ ] 35. Close and reconcile completed or superseded work
   Review paused PR #59 and old Issue #58, continuing Issue #63, outstanding Stage 3 Issue #18, and the newer #65/#66/#68. Close, retain or supersede with accurate links and decisions.
```

**Evidence:** PR59/65/66/68/82 and obsolete successors closed with source retention; Issue58 NOT_PLANNED, Issue81 offline-only closed. PR83 successor still verifying. [Source](../../docs/reports/VEL-CURRENT-TRUTH-0041-DISPOSITIONS.md).

**Outstanding / next action:** Executable: integrate41 then close83; retain genuinely unmet hosted/owner issues. **Control:** repository.

## 36 — DONE

```text
[ ] 36. Apply least-privilege agent permissions
   Limit repository, credential, filesystem, network, paid API, database and deployment access by task. Preserve explicit owner checkpoints for destructive or high-impact operations.
```

**Evidence:** Read-only workflow permissions, job-override rejection, task forbidden actions and scoped isolated operations preserved. No hosted/private/paid/settings work performed. [Source](../../docs/agent-workflow/PR-COMPLIANCE.md).

**Outstanding / next action:** Reserved actions need exact separate owner authorization. **Control:** none.

## 37 — PARTIAL

```text
[ ] 37. Strengthen secret and private-data protections
   Keep local .env files ignored; use secret checks and sanitized logs/artifacts. Never store author manuscripts, access tokens or service-role keys in Git handoff packets.
```

**Evidence:** Ignored environment paths, safe placeholders, case-insensitive ENV/GIT guards and sanitized fixture artifacts are merged. No exhaustive history secret audit is claimed. [Source](../../docs/agent-workflow/execution-bundles/VEL-EB-0033.md).

**Outstanding / next action:** Executable: bounded committed-source/backup inventory check in final recovery; external private-data policy remains separate. **Control:** mixed.

## 38 — PARTIAL

```text
[ ] 38. Test full project recovery from a clean environment
   Clone the repository without prior ChatGPT context, set up the pinned tooling, reconstruct the active project state and execute a synthetic task. Record everything that cannot be recovered.
```

**Evidence:** Task31 reconstructed43 pinned commits in owned clone with GC/fsck, frozen install/tests/build; not a new OS or independent implementation environment. [Source](../../docs/agent-workflow/execution-bundles/VEL-EB-0031.md).

**Outstanding / next action:** Executable latest-source recovery; external genuinely fresh environment remains unverified. **Control:** mixed.

## 39 — PARTIAL

```text
[ ] 39. Make CI reproducible without unsafe cloud dependencies
   Maintain disposable PostgreSQL/Auth test paths, predictable tool versions, safe fixture cleanup and offline-capable checks. Hosted tests should require their own explicit authorization.
```

**Evidence:** Disposable Auth/RLS/logout/CAS and manual PG17 paths actually pass; frozen application lock/tool versions used. Historical reruns do not guarantee identical runner images/dependencies. [Source](../../.github/workflows/ci.yml).

**Outstanding / next action:** Document remaining runner/image variability; no hosted dependency introduced. **Control:** mixed.

## 40 — IN_VERIFICATION

```text
[ ] 40. Link actual implementation to acceptance status
   Map delivered features and test results back to the 149-ID MVP crosswalk. Update PASS/FAIL/BLOCKED/NOT_RUN only from observed behavior, not from planning documents.
```

**Evidence:** Task0041 maps all149 included IDs to observed evidence;67 Library tests do not execute149 named planned acceptance tests or deliver chapters/editor. [Source](../../docs/reports/VEL-CURRENT-TRUTH-0041-FEATURES.md).

**Outstanding / next action:** Executable validate/integrate overlay; future feature tests require new scope. **Control:** repository.

## 41 — IN_VERIFICATION

```text
[ ] 41. Establish repository recovery and backup checks
   Verify that source, evidence, relevant artifacts and migration history can be recovered, including after bad merges or lost agent worktrees. Keep secrets outside backup copies of the knowledge repository.
```

**Evidence:** PG17 original archive durable and hash-verified; Task31 retained43 pins and GC-safe backup. Later source commits need final dependency-closed recovery cut. [Source](../../docs/agent-workflow/execution-bundles/VEL-EB-0031.md).

**Outstanding / next action:** Executable final bounded recovery after41 integration; do not call old archive latest. **Control:** repository.

## 42 — PARTIAL

```text
[ ] 42. Measure agentic workflow effectiveness
   Track compliant handoffs, cold-start success, verification time, escaped defects, context size, review rework, cost and false claims to determine whether the workflow actually improves delivery.
```

**Evidence:** Actual command durations, context sizes, review rework, red/green corrections and historical1136 summed job seconds retained. No API/billing cost or causal effectiveness claim. [Source](../../docs/reports/VEL-PR68-RECONCILIATION-0039.md).

**Outstanding / next action:** Executable consolidate observed metrics in final report; unavailable cost/causal comparison remains unknown. **Control:** mixed.

## 43 — DONE

```text
[ ] 43. Delay additional orchestration infrastructure
   Introduce a custom MCP knowledge server, vector search, knowledge graph or automated multi-agent orchestration only if measured retrieval/coordination problems remain after the Git-first workflow is stabilized.
```

**Evidence:** Git-first control plane retained without new knowledge server, graph, vector database or orchestration service. [Source](../../PROJECT-CONSTITUTION.md).

**Outstanding / next action:** Reconsider only with separately evidenced need; no new service now. **Control:** none.

## 44 — PARTIAL

```text
[ ] 44. Enforce agentic role boundaries at task dispatch and repository write time (CRITICAL)
   Prevent ChatGPT, acting as architect/coordinator/reviewer, from directly implementing code or modifying CI/application files just because it has GitHub write access. Require an owner-authorized, uniquely identified task and immutable ContextPack before Codex begins implementation; record the actual executor in the PR and ExecutionBundle. If Codex cannot be dispatched through the available tools, stop at a reviewable handoff and report NOT_STARTED—do not silently become the implementer. Add a documented exception process for explicitly reassigned tasks or narrowly scoped governance edits; verify role compliance during review and with applicable automated PR-to-task checks. Audit prior coordinator-authored implementation work for provenance and any missing handoff evidence.
   Acceptance: a coordinator-only session cannot claim Codex execution or merge-ready implementation; a CI/PR check flags missing authorized task/ContextPack/executor evidence for qualifying changes, and a real Codex handoff is independently verified. Related existing items: #20, #21, #23, #28 and #29.
```

**Evidence:** Static unauthorized executor/task/pack/scope bypass checks merged and prior coordinator sources audited. Runtime identity cannot be authenticated by Git and fresh end-to-end implementation remains blocked. [Source](../../docs/agent-workflow/PR-COMPLIANCE.md).

**Outstanding / next action:** External fresh implementation verification; preserve static checks and explicit exception process. **Control:** external.
