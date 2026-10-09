---
id: VEL-EB-R07-20261009-001
type: execution-bundle
status: research-deterministic-tests-passed-production-gates-open
created_at: 2026-10-09
updated_at: 2026-10-09
author: project-research
version: 0.1.0
sources:
  - "docs/research/R07-LIVE-STORY-PROFILES-CONCEPT-MODEL-2026-10-09.md"
  - "docs/research/experiments/r07_story_state_contract.py"
  - "docs/research/experiments/test_r07_story_state_contract.py"
  - "https://github.com/Ben-001-sys/Vellistry/actions/runs/37919046053"
  - "https://www.novelcrafter.com/features/codex"
  - "https://docs.novelai.net/en/text/lorebook/"
  - "https://docs.sudowrite.com/using-sudowrite/1ow1qkGqof9rtcyGnrWUBS/characters/a7tdE1ZB8KvAwMD3Mopwpd"
  - "https://arxiv.org/abs/2607.05577"
related_research:
  - R02
  - R04
  - R07
  - R08
  - R10
  - R15
  - R18
  - R19
related_requirements:
  - VEL-PRODUCT-SCOPE-20261009-001
  - VEL-MVP-ACCEPTANCE-20261009-001
---

# R07 execution evidence — author-approved live Character and Storyline profiles

## Objective

Convert the owner's explicitly approved live-profile feature into a **bounded, testable story-state authority and chronology contract**. Investigate existing products/research instead of claiming the idea is unique, and preserve full-app, AI, security and UI architectural decisions for separately reviewed evidence.

## FACT — sources and work performed

- Read the exact owner-origin live-profile direction and owner-approved M1–M8 MVP scope on still-draft PR #9/#10, candidate author acceptance on draft PR #11, and existing pre-development R07.01–R07.10 research questions.
- Consulted current official Novelcrafter Codex/progression documentation, NovelAI Lorebook/context viewer, Sudowrite character cards and June/July 2026 narrative-memory research preprints. Those sources describe related capabilities; no hands-on competitor accounts were tested.
- Created [R07 concept and evidence report](../research/R07-LIVE-STORY-PROFILES-CONCEPT-MODEL-2026-10-09.md) covering author/manual profiles, pending candidate changes, objective versus claimed/uncertain information, immutable approval history as a *concept*, separate story/event/discourse/revision time, source invalidation, future-context filtering and UI review hypotheses.
- Added [stdlib-only Python simulated policy contract](../research/experiments/r07_story_state_contract.py), [20 unit cases](../research/experiments/test_r07_story_state_contract.py) and [GitHub Actions workflow](../../.github/workflows/r07-story-state-contract.yml).
- **Exact execution:** [GitHub Actions #37919046053](https://github.com/Ben-001-sys/Vellistry/actions/runs/37919046053) on code/workflow commit `248f0560f792eee79a45a141941dc80843ca95d3`: **20/20 tests PASSED** in a Python 3.12 Linux CI runner. Log reports `Ran 20 tests in 0.002s`, `OK`. This is a policy/state fixture test, not model extraction.
- No modifications to the frozen 13-domain writing guidance, the 396-item feature inventory, approved MVP scope, Tiptap ADR or source originals. No actual manuscript, model key or external user data handled.

## INTERPRETATION

- A **source-linked author approval gate** between changing manuscripts and confirmed evolving profiles is important because text can contain dreams, uncertain characters, lies and AI alternatives.
- Treating writing order, story-event order and revision order as distinct prevents simplistic “latest seen” memory errors in flashbacks.
- For a useful **small MVP**, character cards and plot-thread status can be manually maintained with AI disabled and supplemented by *reviewed* extraction proposals, without first building a full temporal graph.
- Passing the deterministic contract demonstrates internal consistency under hand-authored test cases, **not** correct NLP extraction, calibrated confidence, responsive UI, privacy protection or novel-scale scalability.

## PROPOSAL — research and implementation sequencing, not approved design

1. Validate a low-friction **Story Profiles panel + Pending changes inbox** using actual author tasks and synthetic text. Measure interruptions, willingness to review, ease of manual profile editing, and preferred trigger (manual analysis vs optional scene completion).
2. Prepare independently annotated synthetic fiction benchmark (approximately 20–40 scenes) for ambiguous belief, story-time order, causality, retcons, chapter edits, AI alternatives and repeated entities. Measure extraction precision, recall, abstention, review burden and costs once R08/R15 allow actual model trials.
3. Test accepted-manuscript revision and profile-record relationships in a disposable persistence experiment, including crash recovery, stale source, and interaction with chapter-scoped Tiptap editing, without selecting backend/database prematurely.
4. Compare candidate architecture approaches (manual ledger, source-backed state deltas, retrieval-based mentions, typed graph) with observed author and correctness evidence; only later record an approved schema/ADR.
5. Keep unapproved candidate facts out of effective future AI context; preserve meaningful audit history and allow explicit retcons.
6. Continue R07.03/04/05/06/08/09 research beyond the bounded two-entity MVP first slice, without declaring those domains completed.

## Validation and important limits

| Claim | Status |
|---|---|
| Author-origin requirement recorded in scope | **Owner-approved product direction**, previously |
| 20 deterministic story state checks on synthetic fixtures | **PASS** in CI #37919046053 |
| Candidate source revision/explicit approval policy in synthetic state machine | **PASS under tested cases only** |
| Real AI detects character facts, progressions and plot events | **NOT TESTED** |
| Writer review workload and profile-panel usability | **NOT TESTED** |
| Durable profile database, author security/access permissions, actual UI | **NOT BUILT / NOT TESTED** |
| True model context selection, token costs, privacy consent | **NOT TESTED** |
| Complete long novel chronological consistency or narrative reasoning | **NOT VALIDATED** |

## Review boundary

This work belongs in a standalone **draft PR**, separate from still-open documentation PRs #9/#10/#11. Successful synthetic checks allow further experiments, but **do not close the entire R07 gate, approve an AI provider, install a database, or clear public release**. The requested future research can proceed with R07 usability and extraction measurements.
