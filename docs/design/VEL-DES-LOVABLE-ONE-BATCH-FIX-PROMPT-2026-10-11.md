---
id: VEL-DES-LOVABLE-FIX-BATCH-20261011-001
title: Lovable UX Lab zero-waste corrective generation brief
type: prepared-external-prototype-fix
status: prepared-not-submitted-credit-exhausted
created_at: 2026-10-11
updated_at: 2026-10-11
owner: project_owner
version: 0.1.0
sources:
  - docs/design/VEL-DES-LOVABLE-INITIAL-CODE-REVIEW-2026-10-11.md
  - docs/design/VEL-DES-003-CROSS-TOOL-EVIDENCE-AND-DECISION-2026-10-11.md
  - docs/requirements/MVP-USER-JOURNEYS-AND-ACCEPTANCE-2026-10-09.md
---

# Lovable UX Lab — single corrective batch prompt (NOT YET SENT)

**Purpose:** Prepare exactly one high-value in-place correction if free Lovable credits become available. **Do not** buy credits, subscribe, clone/recreate the prototype, or send while insufficient credits. At the time of drafting, Lovable rejected a prior repair message as out-of-credits before running; the inspected prototype remains at `e0a7fd3003c6a392742c0ac7e111073252c65fb3`. This brief supersedes that unexecuted message by covering all **four** observed defects.

Existing project: https://lovable.dev/projects/ff8ff817-87a7-49d2-af25-a4e018cd0787

## Preflight before spending a free credit

- Verify existing project and commit have not changed. If edited since `e0a7fd3...`, re-read only changed source and reconcile this prompt before sending.
- Current free credit balance must actually permit the correction; **never assume a reset date**. Do not use Max mode/paid plan, and do not enable Cloud, database, Supabase, auth, APIs, telemetry, GitHub sync, public publishing or external storage.
- Copy only the prompt between markers, not private repository content. Keep invented `The Glass Orchard` fixtures and no real manuscript/API key.
- The only target is the existing disposable Lovable lab, **not** `Ben-001-sys/Vellistry` runtime code. `G_CODE` remains pending.
- A finished generator response is not automatically a verified UI test. Read changed source and test outputs separately.

## BEGIN SINGLE CORRECTIVE PROMPT

Repair the existing **Vellistry UX Lab synthetic frontend-only prototype** in place. Preserve all existing visual structure, navigation, no-AI manual writing, in-memory fixtures, six simulated save states, story profiles, illustrative Rules Studio, optional dummy-key consent, and eleven design-journey labels. Do not regenerate or replace the project. No real API, storage, browser content persistence, auth, database, provider, telemetry, publishing, or production GitHub synchronization. Never accept real keys or manuscripts.

An independent review of exact source commit `e0a7fd3003c6a392742c0ac7e111073252c65fb3` found four interaction correctness defects in `src/components/lab/Lab.tsx`, `ManuscriptEditor.tsx` and `src/lib/lab/model.ts`. Repair **all four in one batch**, add regression tests, and run the existing tests and build.

**1. Continue at real insertion point (P0):** The current Continue branch in `accept()` appends a paragraph at document end. Capture a non-stale caret position within the active chapter editor (show a clear preview of where insertion will occur), alongside persona, bookId, chapterId and chapter/version identity. Require valid caret, stable source chapter/content, and fixed fabricated plain-text suggestion. On Accept, insert at the chosen caret—not append to end—and create only a new in-memory synthetic revision. If the caret is missing, moved outside current editor, another chapter/persona was selected or the manuscript changed while pending, mark proposal stale or block submission without modifying text. Keep manual editing available during pending state.

**2. Rewrite selection + stale Range hardening (P0):** `singleParagraphSelection(start,end,text)` must reject both indices `-1/-1`, null/unknown blocks, empty/whitespace selection, collapsed range, any newline/multi-paragraph or noncontiguous selection. Restrict to one known paragraph in current editor. Snapshot exact selected text, chapter/book/persona and local content version. Before Accept, check the stored Range still belongs to current active editor, is not detached/cross-block, still selects identical text, and source version/content are unchanged; otherwise disable Accept and present `stale` with a retry path. Never mutate wrong chapter DOM. Do not add an extra AI action.

**3. Generated fact provenance when AI prose is undone (P0):** Each synthetic candidate generated from accepted AI prose has its own source/accept-revision link. When author undoes that prose, transition the corresponding **pending** candidate to `source retracted` / unapprovable and say why. Do not silently remove or overwrite manually created/approved facts. If a generated-source fact was **already explicitly approved**, keep the author's explicit canon decision but flag `source reversed — review needed` and require a conscious follow-up. Editing the source or deleting the chapter must also prevent an unverified source proposal becoming canon. The Approve control must enforce these states, not only the badge.

**4. Canon evidence quote must match the actual source (P0):** The seeded `fixture-lock` candidate currently quotes `Someone had replaced the lock.` although that exact wording is not present in the seeded accepted Chapter 7 prose. Either change the synthetic fixture anchor to a genuine exact quote in the pinned accepted text (and preserve intended uncertainty about **who** changed the lock) OR mark `source unverified` and prevent approval until matched. Merely matching revision numbers is insufficient. For later candidate approvals, require existing source chapter, accepted-source snapshot/quote match, correct story time, and a readable provenance path. The source must never imply who replaced the lock without evidence.

**Regression checks** (write tests against actual logic, not only static strings):
- Continue inserted in the **middle** of synthetic paragraph, not at end; invalid caret and stale-version continue rejected.
- Rewrite unknown indices `-1/-1`, empty/multi-paragraph and changed Range rejected without edit.
- Author edits while fake provider pending → result cannot be applied.
- Accept fictitious prose → separate candidate pending → Undo → candidate cannot be approved.
- Previously explicit approved/manual character facts survive undo but show source-reversal review if applicable.
- Fact quote absent from accepted source → cannot approve even if chapter version matches; genuine exact quote and story-time context can pass.
- Writer A/B and book/chapter switching never applies a previous account's proposal or local recovery to the new target.
- AI OFF still allows manuscript typing, profile editing, rule toggles and simulated export.
- No secret storage, network/API calls, real auth, DB, telemetry or publisher configuration added.

Run `npm test`, `npm run build` and lint if available. Report **actual outputs**, exact changed paths, new prototype commit SHA and any remaining unverified interactive behavior. If browser interaction checks are not run, state that explicitly. Do not claim the product is production ready, real backend secure, or all eleven journeys pass from source inspection alone. Do not publish.

## END SINGLE CORRECTIVE PROMPT

## Manual follow-up after a successful run

1. Record actual Lovable message response, commit, changed files and tests; verify generator did not add external integrations.
2. Re-read the revised model / selection / proposal / fact source to confirm the correction was applied, not merely narrated.
3. Execute eight P0 scenarios in the [Make review worksheet](VEL-DES-FIGMA-MAKE-ARTIFACT-REVIEW-2026-10-11.md) against Lovable as well, recording observed behavior by platform.
4. Keep Figma Make comparison independent. A corrected Lovable design is not automatically canonical Figma or production implementation.
5. Preserve `G_DESIGN`, `G_CODE`, `G_PRIVATE_PILOT`, and `G_RELEASE` as pending until separately authorized.
