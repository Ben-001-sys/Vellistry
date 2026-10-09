---
id: VEL-RES-R07-20261009-001
type: research-finding
status: candidate-concept-and-protocol-not-approved-implementation
created_at: 2026-10-09
updated_at: 2026-10-09
author: project-research
version: 0.1.0
sources:
  - "PRE-DEVELOPMENT-RESEARCH-REGISTER.md — R07.01–R07.10"
  - "docs/requirements/PRODUCT-DIRECTION-LIVE-STORY-PROFILES-2026-10-08.md — owner's exact live-profile direction, PR #9"
  - "docs/requirements/MVP-SCOPE-DECISION-2026-10-09.md — approved eight-area MVP, PR #10"
  - "docs/requirements/MVP-USER-JOURNEYS-AND-ACCEPTANCE-2026-10-09.md — candidate acceptance, PR #11"
  - "docs/features/FEATURE-INVENTORY.md — VEL-FEAT-08/09, PR #9"
  - "https://www.novelcrafter.com/features/codex"
  - "https://www.novelcrafter.com/courses/codex-cookbook/tracking-character-arcs"
  - "https://www.novelcrafter.com/help/faq/chat/chat-multiple-scenes"
  - "https://docs.novelai.net/en/text/lorebook/"
  - "https://docs.novelai.net/en/text/editor/advancedsettings/"
  - "https://docs.sudowrite.com/using-sudowrite/1ow1qkGqof9rtcyGnrWUBS/characters/a7tdE1ZB8KvAwMD3Mopwpd"
  - "https://arxiv.org/abs/2607.05577"
  - "https://arxiv.org/abs/2606.05724"
related_research:
  - R02
  - R04
  - R05
  - R07
  - R08
  - R10
  - R15
  - R18
  - R19
related_requirements:
  - VEL-PRODUCT-SCOPE-20261009-001
  - VEL-MVP-ACCEPTANCE-20261009-001
related_adrs:
  - ADR-0003
---

# R07 — Evolving Story Profiles: concept model, author workflow, evidence and validation

**Research status:** Versioned **proposal and synthetic verification plan**, **not** database schema, chosen AI extractor, authored UI, finished integration or production continuity accuracy. The owner's product direction and the eight-area MVP are already approved; the *mechanism* below is an analyst proposal pending validation.

## 1. What the owner actually requested

The owner directly requested that profiles for **characters, storyline and related story facts evolve while either a human is writing or AI is generating**, remain **visible in the UI**, and be author-editable. The subsequent owner-approved MVP includes an initial **Characters + Storylines/Threads** surface, author-controlled candidate updates, source links and bounded history. **Writing without AI must work.** Source of exact wording: [live-profile owner direction](https://github.com/Ben-001-sys/Vellistry/blob/docs/complete-feature-inventory-v0.1/docs/requirements/PRODUCT-DIRECTION-LIVE-STORY-PROFILES-2026-10-08.md) on PR #9. The per-ID MVP horizon mapping is distinct from source provenance and must not be conflated with an independently approved design.

The first MVP does **not** promise graph-based series memory, all-object inventory tracking, complete timeline reconstruction, a perfect POV firewall or automatic contradiction detection. Those remain R07 research opportunities beyond the minimal live profile workflow.

## 2. Verified external approaches and non-unique capabilities

| Evidence | Verified reported behavior | Limitation / Vellistry implication |
|---|---|---|
| [Novelcrafter Codex](https://www.novelcrafter.com/features/codex), [progressions](https://www.novelcrafter.com/courses/codex-cookbook/tracking-character-arcs) | Vendor advertises automatic mentions/aliases and author-accessible character and story progressions; progressions can serve non-AI writers, too. | **Do not claim tracking/progressions are invented by Vellistry**; user friction and evolution quality not tested hands-on. |
| [Novelcrafter context](https://www.novelcrafter.com/help/faq/chat/chat-multiple-scenes) | Vendor says multi-scene context progresses Codex to the last included scene according to the book's plan. | Story order / chosen context checkpoint matters; does **not** prove Novelcrafter has an author-approval gate identical to this proposal. |
| [NovelAI Lorebook](https://docs.novelai.net/en/text/lorebook/) and [context viewer](https://docs.novelai.net/en/text/editor/advancedsettings/) | Explicit entry enablement, keyword-triggered context and visibility into which entries appear in a built model context. | Context activation/transparency are established competitor functions; keyword mentions **are not the same as accepted fact changes**. |
| [Sudowrite character documentation](https://docs.sudowrite.com/using-sudowrite/1ow1qkGqof9rtcyGnrWUBS/characters/a7tdE1ZB8KvAwMD3Mopwpd) | Structured character cards can be generated from a synopsis and edited; character records are used by Draft and other writing actions. | No demonstrated automatic post-writing, author-reviewed state-diff pipeline established by this documentation alone. |
| [Narrative World Model (Jul 2026)](https://arxiv.org/abs/2607.05577) and [Narrative Knowledge Weaver (Jun 2026)](https://arxiv.org/abs/2606.05724) | Research proposes typed, temporal, source-grounded character/episode/story structures for long-range questions and evidence selection; NWM distinguishes event from reveal order and chapter-safe information. | Preprints and their evaluation setups do not prove a real Vellistry extraction system, reproducible production accuracy, author acceptance, cost or the necessity of a knowledge graph **in MVP**. |

**Interpretation:** Vellistry may be differentiated by reliably **keeping accepted prose, provisional text, evidence-backed candidate state, and author-approved truth separate** and making their relationship visible and understandable. This is a product-positioning **hypothesis**, not a unique feature or validated market claim.

## 3. Five distinct kinds of story information — proposed invariant

1. **Accepted manuscript** — the text the author has actually retained in a specific book/scene and its **current revision**. Human-written saved text can be accepted prose; an AI-proposed draft is not.
2. **Planned future / outline** — author planning information, explicitly *not* a past event or a confirmed manuscript occurrence; may influence future generation only when appropriate and deliberately selected.
3. **Detected candidate** — an extractor's or user assistant's proposed fact/scene delta with **quoted evidence and its source revision**; its confidence is not authority.
4. **Approved profile fact/state** — a deliberately approved character or storyline update with its evidence/source/scope and effective story position.
5. **Claims, beliefs and uncertainty** — statements made by a character, unreliably narrated or merely hypothesized; **not automatically the objective state of the world**.

**Invariant:** A story *mention* identifies where an entity appears; it does not establish a new trait. An AI draft or hypothesis may be displayed as a possibility, but only approved, currently supported facts may be used as **canonical state**. Approval of AI-generated prose and approval of its extracted profile delta are **separate author decisions**.

## 4. Conceptual record shapes (NOT a database schema)

| Record | Minimum fields / responsibility | Scope rules |
|---|---|---|
| **Book** | stable book identity + authorized owner | No cross-book data access without explicit later sharing design |
| **Scene/checkpoint** | book, chapter/scene, accepted/provisional status, exact source revision, narrative placement, optional *story-time order* | Chapter position != necessarily event order (flashback); unknown order must remain unknown, not guessed |
| **Story entity** | book, opaque stable ID, `character` or `thread` (MVP), name/aliases, manual baseline/profile fields | Same name in two books != same entity |
| **Candidate change** | target entity, field/value, source revision, quote/range, extraction origin, epistemic type, affected story-time, review status | Only candidate until author approves it; cannot mutate accepted text |
| **Approved state event** | immutable approval decision, source/proposal link or explicit manual entry, state field delta, effective story-time, previous-event/supersession reference | Append-only approval history **conceptually**; current view is derived, not destructive replacement |
| **Current/view projection** | fields from author baseline and accepted applicable events, pending review count, visible evidence/history | Context for a scene excludes later story-time changes and unapproved/stale facts |
| **Future model-context snapshot** | approved applicable facts, visible included/excluded rationale, rule scope and proposal state | One *book*, one authorized task, bounded story checkpoint, user consent |

**Important distinction:** Human-written accepted prose is authoritative as **manuscript**, not automatically reliable as an objective truth of the fictional world: a character can lie, think wrongly, or recount a dream. Even an explicit narratorial sentence may be unreliable by author intent. A candidate update must therefore carry epistemic context and be reviewed.

For an MVP, the suggested *surface* is **character baseline/current fields** (e.g., identity, current injuries, immediate goal, known information) and **story thread status** (e.g., open, developing, resolved), with short approved progression/history and cited scenes. Adding locations/magic/world resources requires separate acceptance and evidence.

## 5. Temporal model: two axes, not one

- **Discourse / narrative position:** Which chapter/scene presents information to a *reader*. A reveal in chapter 8 may describe an event that occurred before chapter 2.
- **Story-event time:** When an event happened in the fictional chronology. Dates may be fictional, nonnumeric, or unknown; a fallback sequence can be author-defined rather than generated with false confidence.
- **Known-by-who and knowledge-acquired-at:** A character's knowledge is not interchangeable with narrator/reader knowledge. If Elias learns a secret in chapter 6, don't inject it into Elias's point of view in chapter 2.
- **Revision/recorded time:** When the author wrote, revised or approved the event; this is distinct from fictional time. An editor retcon can change the supposed event time without erasing the actual revision history.

**MVP safety rule:** If the temporal ordering or perspective cannot be established from author-provided context, **abstain/show uncertain** rather than fabricating “the latest fact” for earlier scenes. Avoid treating the manuscript's last chapter as the latest *world-state time* in the presence of flashbacks.

## 6. Proposed author interaction: visible, non-blocking, consented

1. **Write freely (human or AI-off):** Author types in Tiptap 3 normally. A collapsible Story Profiles area shows manual character/thread cards and current approved state. Typing is never blocked on extraction.
2. **Manual maintenance:** Author creates/edits profiles directly with AI disabled. Manual changes have a clear author attribution and may specify the effective scene/time; avoid hidden synthesis.
3. **Trigger an analysis:** Initially run **on explicit `Review scene updates` command**, and **optionally after scene/chapter completion** with a clear indicator. Avoid per-keystroke cloud model calls, unbounded expense, interruptions, and unauthorized transmission.
4. **Show a proposal inbox:** Group proposed deltas by character/thread; each card identifies proposed change, exact accepted passage, chapter/scene, source revision, effective story time (or `unknown`), whether a statement is **claimed/uncertain**, and why it is suggested.
5. **Review:** `Accept`, `Edit & accept`, `Dismiss`, or `Keep pending`. Bulk approval should **not** be a default for ambiguous, incompatible or provenance-free facts; manual profile edits remain available.
6. **If AI generates alternate prose:** Show it as a manuscript suggestion first. Until accepted, its implied character/story changes are **provisional only**. Even after accepting the passage, profile deltas require **separate review**.
7. **Changes/retcons:** When source revision changes or a passage disappears, show a source-staleness warning and remove dependent claims from the *approved current-context projection* pending review, while retaining approval history for audit.
8. **Next writing request:** Preview only **authorized, approved, relevant, nonstale, causally appropriate** facts; do not transmit the rest of the Story Bible by default. Author can inspect included facts and opt out of external AI entirely.

The MVP's “continuous” behavior is **evolution with each writing/review cycle**, not **one extractor request per keystroke**. Whether scene-save auto-suggestions are worth their frequency/cost is a separate R02/R07 trial.

## 7. Concrete fictional scenario and expectation

**Scene 1 (story order 1):** “Mara hurt her left wrist. She hid the injury from Elias.” `Mara.condition = left wrist injured` is a candidate with quoted evidence; `Elias.knows_injury = false` is **not necessarily warranted by omission alone**, because earlier unseen events may inform Elias. The candidate can say “Mara intends concealment,” not claim absolute Elias ignorance without appropriate evidence.

**Scene 2 (story order 2):** Elias says, “I knew about her injury yesterday.” A character's own statement **may be true or false**. Record it first as `claimed knowledge` and prompt author review; do not silently overwrite objective knowledge.

**Scene 3 (written as chapter 8 but a flashback to story order 0):** Shows Mara's hand uninjured. A strict reader-order 'latest profile' would be wrong. The context view for story order 0 should show uninjured/unknown, while later scene 1's accepted injury remains accessible.

**AI rewrites Scene 1 but author rejects:** New “Mara had healed” phrase in the rejected alternative has **no effect** on approved state.

**Author edits Scene 1 and removes wrist injury:** The fact previously approved from the old passage is **stale**. Retain its approval record but exclude from future approved facts until evidence is reaffirmed or corrected.

**Thread:** “The missing courier case is resolved” can be a proposed `thread.status = resolved` with explicit scene evidence; a scene merely mentioning the courier does not resolve a thread.

## 8. Candidate architecture patterns to compare, NOT choose prematurely

| Pattern | Strength | Risk / relevance |
|---|---|---|
| Static author-only notes | Straightforward, safe, no provider cost | Fails the requested evolving assisted profile experience |
| Blind auto-updated rolling summary | Easy to demo apparent continuity | Destroys provenance, merges plans/rejected drafts, introduces narrator/POV confusion — **not acceptable as canonical truth** |
| **Author-approved state delta ledger + source evidence + chapter-aware projection** | Small MVP conceptual boundary; explainable, reversible history and consent | Must test review fatigue, source revision invalidation, temporal ambiguity, storage correctness |
| Full typed temporal graph + multi-hop retrieval | Potentially robust at complex long-range narrative questions (supported as a research direction by NWM/NKW preprints) | More extraction/cost/schema risk; **not justified as minimum MVP without measured benefit** |
| Full-text/semantic retrieval without typed approved state | Good for locating mentions and evidence | A retrieved historical mention may be obsolete, imagined or from unaccepted text |

**Research recommendation:** Prototype the third pattern **as a behavior contract** (not a chosen persistence architecture), compare with manual-only and retrieval-first baselines. Treat graph schema/vector storage and extraction model as unresolved R18/R08 decisions.

## 9. R07 register coverage and status (honest partial coverage)

| R07 entry | What this document provides | What remains unverified |
|---|---|---|
| R07.01 | Separate accepted/planned/candidate/belief/approved/retcon states | Real author usability and complete book semantic policy |
| R07.02 | Character baseline versus state changes and story-time | Actual extraction accuracy, user-supplied chronology mapping |
| R07.03 | Character relationship/belief distinction | Comprehensive relationship autonomy, social network model **not researched deeply** |
| R07.04 | Injury example; temporal/source integrity | Geography, inventory, magic physics, quantitative tracking remain post-MVP research |
| R07.05 | Simple thread state/progression | Full cause/effect/promises/scene entry-exit analysis not benchmarked |
| R07.06 | Qualitative alternatives table | No measured retrieval speed, quality or token costs |
| R07.07 | Author-reviewed proposals and revision invalidation | Requires actual browser+AI integration and author feedback |
| R07.08 | Belief/uncertainty, flashback, retcon | Large-scale adversarial unreliable narrator/contradiction tests needed |
| R07.09 | Recognized out of initial MVP | Long-range repetition audit not tested |
| R07.10 | Evaluation plan below | No model precision/recall or actual writer trust metrics measured |

**Do not mark R07 complete** on this desk-research deliverable or synthetic tests alone.

## 10. Evaluation protocol — how to detect real usability and extraction failure

### A. Deterministic contract tests (no model, no user data)

Run a small **stdlib-only simulated state machine** with pre-authored fictional candidate deltas (not automatically extracted). Verify:
- AI-off manual creation and editing of character/thread profiles.
- Accepted human scene generates only a **candidate** and requires author approval.
- Unaccepted AI manuscript option cannot update approved state; accepted AI prose is a different decision.
- Reject vs accept, idempotence, wrong-book ownership, missing quote/source or stale revision.
- Flashback story order distinct from chapter display order.
- Ambiguous claimant statements never become objective state.
- Source revision invalidates derived facts and prevents stale-context reuse.
- Same-named characters in separate books stay isolated.
- Context at a story checkpoint returns only approved, relevant, current evidence.

These tests demonstrate **policy logic only**; they are not tests of natural-language extraction, Tiptap, UI, persistence, secure auth, or cloud providers.

### B. Model extraction benchmark (future, gated by R08/R15)

Create approximately 20–40 synthetic scenes with an independently authored gold table of:
`entity`, `kind`, `field`, `value`, `asserted/claimed/uncertain`, `source`, `time`, `approval expected`, `false-positive trap`. Include: dreams, quotations, narrator lies, plans vs events, mistaken aliases, flashbacks, edits/removals and AI alternatives. For each evaluated provider, record actual **precision, recall, abstention, chronology errors, cost per scene, latency, redaction and author review count**. Results must be marked **NOT RUN** until performed and no model may automatically approve canon.

### C. Real-writer UX trial (future, gated by R02)

Observe several authors performing AI-off profile creation, scene review, reject/edit/accept, a retcon, chronological inquiry and a later continuation. Capture **time to review, false-positive burden, ignored suggestions, errors in understanding 'approved vs suggested', willingness to leave panel open**, and preference for explicit or post-save triggers. Set owner-reviewed thresholds from actual baselines, **not invented numbers**.

### D. Release-level trust tests (future)

Verify authorization, durable source revisions, autosave races, provider consent, backup/recovery, model context previews and no cross-book leakage in the eventual real product. Any **silent canon promotion, false accepted-prose edit, cross-book source disclosure or future-state injection in test fixtures** is a blocking defect for initial MVP.

## 11. Unresolved decisions for owner/engineering review

1. Is the first default `Analyze chapter/scene` **manual only**, or does optional post-scene auto-suggestion merit user-testing?
2. Should a manually authored **planning/outline** fact be excluded from *canon* but offered as a separately labelled future-intent context for model generation?
3. When accepted passage evidence is revised, should affected approvals be **held pending revalidation automatically** with prominent warning (safe proposed default)?
4. How should author-selected fictional time markers work for nonlinear stories where no reliable total chronological order exists?
5. Which profile fields are truly necessary on an unobtrusive first-release card versus an advanced detail panel?
6. Which per-provider model/consent/cost criteria should govern extracting candidate deltas?
7. How will a single author undo an approved profile update, recover earlier states and avoid accidental bulk promotion?

**No change to approved eight-area scope, original 396 feature IDs, frozen creative-rule text, Tiptap 3 ADR or default provider is authorized by this research.**
