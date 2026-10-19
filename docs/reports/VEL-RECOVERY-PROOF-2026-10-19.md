# Offline source/evidence recovery proof — 2026-10-19

## FACT — scope, preserved sources and environment

Task/CP0022 precede the drill. A clean disposable clone was restored from a local Git bundle, not from copied working files. Main source is `fca0d96fd071f1165e3e16658d821a3d36a20293`; four reviewed candidate refs and read-only historical PR65/68 sources are listed in [recovery-summary.json](evidence/VEL-RECOVERY-PROOF/recovery-summary.json). The original immutable pack source/provenance commits are explicitly included; no old pack is rewritten.

This is the same Windows host and existing Codex root context. Node v24.13.0 and pnpm10.18.0 were actually observed. Frozen dependency install passed without lockfile upgrades. Child test/build processes use a minimal system/tooling environment; runtime Supabase/public app configuration variables are excluded. Owner env files, credentials, .git/config, ignored caches and untracked manuscripts are not bundle inputs. No hosted database/Auth/Storage or migration history was accessed. Git history has not been exhaustively secret-audited, so this is not a universal secret-free-history claim.

## FACT — real failure, correction and negative checks

The initial branch-tip bundle passed Git verification and restored source files, but main handoff validation exited1 because CP0001 references non-ancestor commit `d14261ce6bab2aea6550454f089c48859eb0a3ee`, absent from that bundle. That is an actual recovery-completeness failure, not a PASS or infrastructure outage. Its bundle, clone and failed command record remain available locally; no test was weakened.

The corrected bundle adds43 required commit pins derived from immutable CP base commits and active manifest/provenance records. Branch tips alone are insufficient. All43 commits and main tree recover; Git fsck and working-tree equality pass. Corrected bundle: 2617627bytes, SHA256 `dbdd63311331296b963ef7cbf8eed2be8d9d7b7b79ce4f374b66e29d2b938404`. Local backup and both disposable clones remain under the task worktree in ignored .log paths. No external services were created; no destructive cleanup was needed.

Negative checks: byte corruption of an owned disposable bundle caused clone exit128; deleting a required compliance-test source only inside the owned disposable clone caused tree verification exit1; restoring its saved bytes returned exit0. Absolute target containment and absence were checked before fault injection. These intended failures are separate from the initial unexpected missing-pin failure. Exact commands, working directories, return codes and durations: [commands.json](evidence/VEL-RECOVERY-PROOF/commands.json).

Retained PG17 archive was recovered from the candidate Git objects and matches `d426612fbb1197e8e80b8b5a7cd8cfa97e24c2307af3fe786485cf0e416fbf62`. All four original SQL/fixture blob/SHA256 identities are recoverable, including proposed third migration bytes. This is source recovery, not SQL execution or hosted migration history acceptance.

## FACT — final clean-clone checks

| Check | Actual result |
|---|---|
| Main metadata/readiness/spec/handoff validation | PASS, exit0 |
| Handoff workflow unit tests |15PASS, exit0 |
| Governance entrypoint tests |8PASS, exit0 |
| Library isolation suite |66PASS, exit0 |
| Next/Nest builds and typechecks | Both PASS, exit0 |
| Restored reviewed preflight candidate |19PASS, exit0; synthetic temp env fixtures only |
| Candidate immutable handoff validation and final tracked-tree check | PASS, exit0 |
| Database, real author and fresh AI runtime acceptance | NOT_RUN |

The candidate checkout is an exact reviewed preflight revision; main verification is recorded separately before switching. The entire383-test Linux governance suite is still required by each PR CI; these targeted Windows checks do not impersonate that suite. Existing public/local package dependencies were installed; this is not a clean OS or independent-runtime benchmark.

## FACT — first workflow measurements, no billing claim

These are four observed final successful full runs, not a complete programme sample. Elapsed job time includes runner setup; it is not billable minutes. No billing/settings API was used.

| Run | Started jobs | Skipped jobs | Wall seconds | Sum of started-job elapsed seconds |
|---|---:|---:|---:|---:|
|39320774241|5|1|178.0|225.0|
|39320128393|5|1|147.0|204.0|
|39320829746|5|1|151.0|209.0|
|39321788645|5|1|163.0|236.0|

All four have5 actual started jobs and1 absent-source SQL privilege skip. Billed minutes/cost, counterfactual savings, model tokens, author-quality benefit and escaped-defect rates remain UNVERIFIED. The drill observed1 unexpected first-attempt recovery failure and a concrete fix; it doesnot establish a general reliability rate.

| Immutable context | Serialized Git bytes |
|---|---:|
|VEL-CP-0018|88347|
|VEL-CP-0019|44001|
|VEL-CP-0020|48008|
|VEL-CP-0021|58053|

Exact context hashes and run metadata are retained alongside metrics. Bytes are not model token counts. These measurements start checklist42 at PARTIAL; continuous trend/cost/cold-start/review effectiveness work remains.

## INTERPRETATION

Repository source/evidence recovery is demonstrated for these pinned revisions after correcting the transitive-source gap. Checklist38 is PARTIAL: clone/tooling/test recovery passed, but a genuinely fresh independent agent/OS task handoff did not run. Checklist41 remains PARTIAL at programme level: selected Git source/evidence recovery passes; complete product operational backup/retention and hosted state are not certified. Checklist27 remains NOT_STARTED; separate source-review subagents do not substitute for its specified implementation handoff.

## PROPOSAL — reproducible safe recipe and remaining gates

1. Reverify authorized source refs and record exact SHAs; enumerate every committed immutable CP base plus active manifest pack/source/original commit pin. Keep blobs and source semantics unchanged.
2. Create a new owned bundle and clone path, refusing pre-existing targets. Bundle selected refs plus all required commit objects. Run git bundle verify, clone with an explicit advertised branch, then detach at the pinned main SHA. Check each required commit, git fsck and tracked tree.
3. Confirm no owner runtime env/auth/config files were copied. Install only Node24/pnpm10.18 frozen dependencies in the new clone with runtime credential variables excluded; execute the recorded focused checks/builds. No hosted commands or real manuscripts.
4. Recover retained evidence and migration source from exact Git objects and compare hashes. Exercise corruption/missing-file negatives only in newly owned disposable copies and restore them.
5. Preserve actual failures and corrected results. Request distinct exact-head source/CI review; owner decides integration. Future backup automation or policy changes require their own bounded task, not a new server.

No merge, deployment, cloud access, real private-author test, immediate JWT revocation or release approval is inferred. Fresh runtime handoff, original SRC001–004 recovery, hosted acceptance and owner integration remain separate. This drill report is produced after the backed-up source refs and is not falsely claimed to include itself in the earlier bundle.
