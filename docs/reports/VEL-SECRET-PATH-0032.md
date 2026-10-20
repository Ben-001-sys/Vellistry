
# Case-insensitive environment secret-path guard

## Work performed
One-time owner delegation, 19 October 2026, remediation-only. A new unique Task/source and immutable ContextPack were committed before regression tests or code. Corrected one guard expression in scripts/agent_workflow.py to casefold the .env prefix. Added one standalone regression to each existing handoff/compliance suite. No environment-example exception or production application change.

## Facts and evidence
Verified base 8963ace5b8a1d5f08cb55258c82b51e06cc5fb27; operative corrected source 4ebb6f5b7e0844fd685254b1531b5a79339c8b09; ContextPack source 22d1355c2d7cf23891baf376d547c9b0b58d6acc. Pure-name observation showed that .ENV and apps/web/.Env.local were accepted; no credential file was read or created. Full old source snapshots and observation are retained in inputs0032.

At regression-first commit858311ba7c15730a633c4ee2bc3f70950afa911f, both new test methods failed: 6 handoff subcases and12 PR subcases (six names under wildcard and exact scopes). Actual exits1 and raw outputs are retained separately. At corrected source, all16 handoff tests and the new PR method pass, exit0; normal paths remain accepted. Metadata/readiness/traceability pass. AST comparison proves every pre-existing test node unchanged. PR evaluator, workflow, dependencies and historical pack bytes are unchanged.

## Interpretations
Case-sensitive exclusion names do not cover Windows aliases. Casefolding closes this demonstrated filename gap without changing permissions, RLS, runtime identity or CI. It is a bounded static source/PR control, not a universal secret scanner or authenticated-actor guarantee. Existing traversal, .git, secret-directory and lowercase environment exclusions remain.

## Proposals
Obtain genuinely distinct trusted Codex exact-head review and actual required ready/main CI, including the complete compliance/governance suites. Only after those gates should the separate owner-delegated integration proceed, with identical merged tree and successful post-main verification. Any future strictly placeholder-only setup profile requires its own bounded Task/pack/review; this task admits no templates.

## Tests
commands.json records actual positive command/source/exits/durations/output; red-commands.json preserves the expected pre-fix failures. Complete local handoff16 and new PR method pass; full compliance/governance and existing application/security/recovery checks must actually execute in final-head CI. Their URLs/results are recorded externally after the last commit. No synthetic path assertion is hosted or private-data acceptance.

## Artifacts
VEL-TASK/CP/EB0032, exact old source snapshots, pure-name observation, committed regression-first tests, one-line guard correction, red/green logs and preservation checks. The previous main evidence manifest is archived; only its per-PR task/source/pack/bundle binding is refreshed.

## Risks
Filename controls cannot establish a secret-free entire history. No credentials were inspected or created. No hosted database, SQL execution, private manuscripts, paid calls, settings, deployment, new MVP feature or release approval. The original broader security boundaries remain separately gated.

## Reviewer disposition
Pending actual separate trusted source review and exact-head ready CI. Structured owner/review fields remain pending as the default checker requires. Current direct owner delegation is separately recorded; it is not a fabricated human review or permanent policy change. Merge/post-main outcomes are appended externally only after actual execution.
