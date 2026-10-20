
# Sensitive-path case hardening amendment

## Work performed
One-time owner delegation, 19 October 2026, remediation-only. Task0032/PR97 fixed the environment prefix only. Primary synthetic-name inspection found the unchanged Git metadata comparison also accepted case aliases. New Task0033/source and immutableCP0033 were committed before adopting predecessor source or adding Git regressions. Preserved the environment correction and additionally casefolded the exact .git-part comparison. No template exception or unrelated policy/application change.

## Facts and evidence
Verified main base 8963ace5b8a1d5f08cb55258c82b51e06cc5fb27; predecessor da2be99ac00a70609c3791db9deda0237d16bc42; operative corrected source a1249a618280061b4599a2ad2b90db0abe3b8500; pack source bffa6c9e323131ff8f728e96981f821502a4aa5e. All23 non-correction predecessor paths match exactly; the three authorized guard/test paths preserve old code/assertions except the new Git exclusion and standalone tests. Original Task/CP/EB0032 and its source/red/green/review evidence remain historical, unchanged.

Environment regression-first858311ba7c15730a633c4ee2bc3f70950afa911f showed6workflow/12PR failures; corrected results remain preserved in Task0032. New Git regression-firstd5a0c299012c87621a04c86b60d48105d9576875 showed3workflow/6PR subcase failures, exits1; raw output retained here. Corrected source passes all17handoff tests and both PR alias methods (environment and Git), exits0, plus metadata/readiness/traceability. Positive .github/ordinary paths remain accepted. No credential or Git metadata contents were read or created by these pure-name tests.

## Interpretations
The original guard comparisons missed ASCII case aliases relevant to Windows. The two scoped casefold comparisons close the demonstrated environment/Git gaps. This is bounded filename validation, not a universal filesystem/secret scanner or actor authentication. The environment-only Task0032 scope was not silently expanded, and its distinct review remains evidence for that earlier head only.

## Proposals
Obtain genuinely separate trusted Codex review at final head and actual required ready/main CI, including complete compliance/governance and all existing applicable security/recovery checks. Then perform the separate owner-delegated integration, verify merged tree and post-main CI, and close97 as superseded only after source adoption is verified. Any later safe template profile requires another task and immutable pack.

## Tests
commands.json contains actual positive commands/source/exits/durations/output. red-commands.json preserves the Git-specific expected pre-fix failures; original environment failures remain in predecessor artifacts. Complete local handoff17 and two PR methods pass. Full compliance/governance suites must really execute in final-head CI; results/URLs belong in the external PR ledger after the last commit. No skipped gate is relabeled PASS.

## Artifacts
Unique Task/CP/EB0033, original0032Task/CP/EB and sources, new scope/finding/prior-review inputs, source map, two guard comparisons, four total added regression methods across both tasks, red/green and preservation checks. Previous main evidence manifest archived; only current per-PR task/pack/source/bundle binding refreshed.

## Risks
No sensitive files accessed by regressions. No universal history scan, hosted database, SQL execution, private manuscript, paid call, setting, deployment, new MVP feature or private-pilot/release approval. Default environment-like path denial remains, including examples. Git/source pin availability still depends on preserving original refs and final dependency closure.

## Reviewer disposition
Pending actual distinct trusted source review and exact-head ready CI. Structured review/owner fields remain pending under the static contract; the one-time direct owner delegation is separately recorded. No human review is fabricated. Actual integration/post-main evidence is appended externally only after execution.
