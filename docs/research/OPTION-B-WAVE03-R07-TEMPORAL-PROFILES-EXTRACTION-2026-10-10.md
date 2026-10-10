---
id: VEL-RES-OPTIONB-WAVE03-R07-20261010-001
type: temporal-story-profiles-extraction-error-research
status: bounded-synthetic-score-measured-python-ci-not-yet-verified
created_at: 2026-10-10
updated_at: 2026-10-10
owner: project_owner
version: 1.0.0
sources:
  - docs/research/R07-LIVE-STORY-PROFILES-CONCEPT-MODEL-2026-10-09.md
  - docs/research/PAIR-03-ACCELERATED-PORTABILITY-PROFILES-2026-10-09.md
  - docs/research/experiments/r07_story_state_contract.py
  - docs/research/experiments/test_r07_story_state_contract.py
  - docs/research/experiments/test_pair03_story_profiles.py
  - docs/research/experiments/wave03_extraction_probe.py
related_research: [R07, R19]
---

# Option B Wave 3, Track B — One-pass living Story Profiles, chronology and measured extraction errors

**Research authority:** The owner's 2026-10-10 instruction calls for a complete single research pass and progression, with no repeated decision rounds. **No actual hosted model, published novel, copyrighted manuscript, paid inference, real author participant, production database or prototype was used.**

## Temporal truth architecture distilled from existing evidence

**Distinct and noninterchangeable data objects:** chapter document and immutable accepted revision; scene's narrative/discourse order; separately author-placed chronological story time; character/thread baseline state; source-linked proposed fact with exact quote, entity, field, value, epistemic assertion/rumor/uncertainty, current source revision and provenance; separately recorded author approval event; derived story checkpoint snapshot.

| Situation | Required state treatment | Evidence or limit |
|---|---|---|
| Flashback shown late in book | Query state at **story time** rather than display/chapter order, so later injuries or discoveries do not leak backward | Existing 20 deterministic R07 + eight Pair03 tests; new Wave 3 tests reinforce both orders |
| Character learns secret in future chapter | Earlier chapters must not contain later knowledge, even if chapter was drafted/rearranged later | StoryContract.state_at story checkpoint only |
| Author writes a state fact directly | Author may update profile without AI generation | StoryContract.manual_update event with explicit story checkpoint |
| AI suggested text rejected | Candidate from unaccepted prose not eligible for canon approval | Existing acceptance guard tested, not real model generation |
| AI prose accepted | Does not automatically accept extracted character or thread facts | Explicit separate StoryContract.approve required |
| Revision removes previous supporting text | Invalidate source-current status and derived state until reconfirmed; maintain history | Existing event_valid and source revision comparisons |
| Rumor, dialogue, hypothetical, dream | Epistemic status must stay as a **claim**, uncertainty or abstention; cannot silently override objective fact | Existing claimed-event state separation; real NLP truth discrimination unproven |
| Unknown chronology | Ask/abstain; never guess story order or permit factual promotion at unknown checkpoint | Existing StoryContract prohibits story_order=None approval |
| Two unrelated books with same named character | Book/owner ID as isolation key, not display name | Tested synthetic book separation, not live RLS |
| Contradictory revision / retcon | Preserve event provenance, explain conflict, require human review rather than last-text-wins silently | Proposed product requirement; generic contradiction reasoner NOT RUN |

## NEW measured deterministic baseline (not a real model quality claim)

[24 labeled synthetic narrative snippets](experiments/wave03_extraction_probe.py) distinguish actual factual changes from negations, hypotheticals, rumors, dialogue, dreams, unaccepted AI prose, unknown story placement and paraphrased facts. An intentionally narrow **regex** extractor proposes three exact text patterns: Mara injured/sprained wrist, Elias learned cipher, courier returned. The test computes actual TP/FP/TN/FN and precision/recall against fixed labels.

**Why test an intentionally weak extractor?** It establishes that positive surface matches are not reliable literary facts, and that semantically equivalent paraphrases may be missed. Treating a deterministic bad baseline as though it were an LLM would be fabrication; the labeled failure taxonomy becomes a future real-model acceptance benchmark and research-input guide.

| Dimension | Measured method | Boundary |
|---|---|---|
| Precision | TP / (TP + FP) on 24 invented examples | No novelistic prose corpus validity, no human label agreement |
| Recall | TP / (TP + FN) | Limited three patterns; not an engine comparison |
| Epistemic risk | Cases with negation, quotation, hearsay, dream, hypothetical, accepted prose and story_time=None | Regex cannot understand speech/narrator authority |
| Author acceptance | Every extracted item has explicit pending_unapproved status; later acceptance uses separate R07 source-current/author-reviewed process | A status flag alone is not a UI or production permission check |
| False positive burden | Count mistaken pending proposals, do not auto-approve; quantify correction workload later with actual authors | Real author time, annoyance, reliability and model costs NOT RUN |
| False negatives | Annotate paraphrase/nonlocal references and mark abstention | No comprehensive named entity resolver |

## Wave 3 executable scenarios and regression reuse

[New twelve-case suite](experiments/test_wave03_story_profiles.py) checks two different timelines, future knowledge isolation, rejected AI prose, accepted prose still needing fact approval, stale proposal revision rejection, revocation of formerly valid source evidence after retcon, subjective rumor separation, unknown story checkpoint abstention, same-name different book isolation, manual thread progression, and actual labeled extractor FP/FN. Also rerun the existing **20 R07** and **8 Pair03** deterministic scenario tests unmodified. New 24-case labeled precision/recall values are recorded only after GitHub Actions executes the code.

## Recommended Story Profiles decision policy (proposed, not owner-selected)

- **Canon always manually controlled:** Author may directly edit a character or thread. AI/text parser can suggest changes, never silently promote or overwrite established facts. Accepted generated prose and accepted extracted facts must be **separate approvals**.
- **Every fact needs provenance:** book/entity, supporting scene/chapter ID and revision, quote or span, narrative/discourse index, story-order checkpoint, epistemic status, actor, approval time, and later source-validity flag. A newly revised source may mark dependent facts stale rather than silently deleting author history.
- **Unknown or conflicting facts:** Keep unresolved, request author interpretation, and allow author exceptions to intentional mystery, unreliable narrator, retcons and unconventional nonlinear structure. A literal named entity match does not prove facthood.
- **Temporal retrieval:** Assemble only facts the character could know at the requested story checkpoint and exclude later-revealed secrets, plus separate storyteller/narrator knowledge where deliberately configured. No future spoiler injection into old chronology.
- **Privacy and context:** Author Story Profiles are sensitive manuscript-derived data; use the same book/session/Storage/export/retention boundary as manuscript text. Approved facts may go to an AI provider only on author-visible, scoped consent and with same provider privacy conditions.
- **Extraction path:** Once a legitimate no-mandatory-paid model is selected, compare it against this fixed labeled 24-case corpus plus harder real consented synthetic multi-scene cases. Measure precision/recall by phenomenon, unsupported hallucinations, abstention, proposed edit clarity, correction effort and contradiction flags with human adjudication.

## Honest disposition and progression

**Research PASS if CI verifies:** deterministic temporal contract and an *actual measured weak baseline* showing real error cases. **Not PASSED:** actual LLM extraction accuracy, true-fiction inter-rater agreement, production source-span anchoring, safe multi-user Supabase app APIs, confusion-free author review UX or real author correction effort. This report permits a defensible interface requirement, not a product-quality promise.

**No back-and-forth:** Once source and CI result are committed, move **research-only Wave 4** to R08/R21 legitimate optional AI provider terms/privacy/cost and R14/R21 licensing, author rights and operations without reopening Wave 3 experiments. Owner-specific profile approval authority and privacy semantics remain recommendations until separately approved. **No design prototypes, production coding, paid inference or deployment.**

## Independently computed labeled-fixture baseline — 2026-10-10

The actual checked-in 24 invented Example records were parsed from `wave03_extraction_probe.py` and re-evaluated with the same three matching patterns using an independent JavaScript calculation in this research session. **This is not the Python GitHub Actions test suite and is not a real LLM benchmark.**

| Quantity | Observed |
|---|---|
| Labeled snippets | 24 (10 factual positive, 14 negative/uncertain/noncanonical) |
| True positives | **6** |
| False positives | **10** |
| True negatives | **4** |
| False negatives | **4** |
| Precision | **0.375 (37.5%)** |
| Recall | **0.600 (60%)** |

**Four omissions:** paraphrased injury, paraphrased cipher learning, paraphrased courier return, and cross-clause wrist injury. **Ten false proposals:** hypotheticals, hearsay, dialogue, counterfactual, uncertain rumor, dream, three unaccepted AI-manuscript cases, and an unplaced scene with unknown story chronology. These are exact classification outputs of a deliberately naive regex baseline on a hand-authored dataset, **not estimates of real-world percentages, true reader judgments, or a model's reliability**.

**Risk/decision:** No generated candidate becomes canon. The author should see a source quote, accepted manuscript revision, who asserted it, certainty, chronology and change preview, with reject/edit/approve. A character fact whose supporting accepted revision changes becomes source-stale, not silently retained as current truth. Unknown time and subjective claims abstain from objective-state promotion. The product cannot promise 37.5% model precision: no AI model was exercised.

**Execution boundary:** The source-backed independent score above is actually computed; the newly committed Python tests plus 20+8 historical tests require separate GitHub Actions verification. Do not call them PASS until their recorded run completes. No user participant scored output or correction time.
