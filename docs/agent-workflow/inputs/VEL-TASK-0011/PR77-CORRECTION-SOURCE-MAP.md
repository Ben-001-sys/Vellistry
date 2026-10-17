---
id: VEL-LANG-PR77-CORR-001
title: PR77 language integration correction source and provenance map
type: task-input
status: proposed
created_at: 2026-10-17
updated_at: 2026-10-17
owner: project_owner
---
# PR77 correction — original facts and explicit limits

## Owner instruction
The owner originally said "I am giving you explicit permission to implement dirrectly in the repo" and subsequently directed "do the fixes" after receiving the independent PR77 review. This authorizes a bounded correction proposal on PR77, not a new product naming decision or automatic owner merge.

## Current repository and cross-PR state checked
- Checked main at `f371448538dafa92faebbef9bcda2a36c6ca1fa9`.
- [PR76](https://github.com/Ben-001-sys/Vellistry/pull/76) current head `fb164bf72f01745a9547949a90f0d32212cee1e3`, proposed PR compliance, owns `VEL-TASK-0010`, `VEL-CP-0010`, `VEL-EB-0010`, and edits `AGENTS.md`.
- [PR77](https://github.com/Ben-001-sys/Vellistry/pull/77) reviewed head `6868ad1b2ba64379701b199419c0c4683313ed39` contains DIFFERENT `0010` files, a 786-line proposed language standard and a scoped `AGENTS.md` insertion.
- [PR77 independent exact-head review](https://github.com/Ben-001-sys/Vellistry/pull/77#pullrequestreview-5559054640) identifies duplicate Task/CP/EB IDs, pre-edit CP validation chronology and prospective PR76 compatibility. If the permalink changes, use the dated 17 October 2026 PR review.
- Confirmed Task0011 file not found on main and both open PR branch heads at correction start. IDs are reserved only by this correction PR proposal until owner merge.
- Earlier ChatGPT integration source commits: `e4c31a8b27e086fd50a9aca7782a3ad3a0d2955e` (original 0010 task), `4ecb2f48fe16b0ab20bbcc2f2d881c853eb1f0c2` (initial *not validated* CP), `3118e601f7860250fc7a5c73dc8c263963ca25a1` (LANGUAGE.md), `dc7e206924074d06714debad6b4ac17c9e6857fd` (AGENTS.md), `de515a7a6b675f1640345e4ac4e5853bde3c8378` (later CP repair), and `6868ad1b2ba64379701b199419c0c4683313ed39` (reviewed original PR77 head).
- Original candidate language Git blob `c42e0fd813644a7718a1b5ae279c962bdd966e08`. It was source-equivalent to the delivered artifact at review; any forthcoming section 15.4 edit is a separately disclosed correction and changes this blob.
- CI [39053325233](https://github.com/Ben-001-sys/Vellistry/actions/runs/39053325233) SUCCESS against then-ready PR77 head `6868ad1`, with application/SQL jobs not applicable. This predates correction and PR76's checker.

## Authority constraints and repair plan
This is a corrective **new task**, NOT a renaming/backdating of the old CP or an assertion that the original 0010 pack was validated before its original implementation. The prior source commits remain reachable through Git history and linked above. Do not rewrite them, attribute the old ChatGPT work to Codex, or mark it owner-accepted.

Use unique `VEL-TASK-0011`, `VEL-CP-0011`, `VEL-EB-0011` records. First commit this source and Task0011; prepare and verify a new pinned CP0011 *before corrective changes*. Only then remove the conflicting 0010 files from the **PR77 branch**, retaining PR76's separate canonical records. Document the original and corrective stages in EB0011. Update misleading language section 15.4 to indicate the prior candidate has been inserted in AGENTS.md, without approving proposed terms.

## Integration dependency
Do not merge either PR automatically. PR76 introduces new static provenance checks, scoped authorization and verified-base executor-exception requirements. The available owner chat dispatch does not automatically constitute an owner-verified authorization file on reviewed base. No candidate PR may silently self-grant that exception. If PR76 merges first, rebase/reconcile PR77 to new main and obtain applicable reviewed-base task/authorization evidence, or use a separately owner-approved Codex continuation retaining original ChatGPT provenance. If PR77 merges first, PR76's fixed first-adoption bootstrap needs review against the new merged main. Report the sequence as an unresolved merge choice, not green CI proof of both merge orders.

## Limitations
No secret, hosted Supabase, author manuscript, paid service, SQL, app code, CI policy or automatic merge changes are authorized. Owner determines future semantic adoption of LANGUAGE.md and final PR dispositions.
