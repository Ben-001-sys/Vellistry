---
id: VEL-PRODUCT-DIRECTION-20261008-002
type: product-direction
status: owner-requested-for-feature-inventory
created_at: 2026-10-08
updated_at: 2026-10-08
owner: project_owner
version: 0.1.0
sources:
  - "Owner message in Fiction Writing Project on 2026-10-08: 'Can also while AI generation or Human writing the AI/peraon can build continu profiles of the characters, the storyline, etc and is visible in the ui'; original conversation permalink not yet archived"
related_research:
  - R02
  - R04
  - R05
  - R07
  - R10
  - R15
related_requirements:
  - VEL-REQ-005
related_features:
  - VEL-FEAT-08-021
  - VEL-FEAT-08-022
  - VEL-FEAT-08-023
  - VEL-FEAT-08-024
  - VEL-FEAT-08-025
  - VEL-FEAT-08-026
  - VEL-FEAT-08-027
  - VEL-FEAT-09-025
  - VEL-FEAT-09-026
  - VEL-FEAT-09-027
  - VEL-FEAT-09-028
  - VEL-FEAT-09-029
  - VEL-FEAT-09-030
---

# Owner-requested capability — Live and visible evolving story profiles

## Original user statement

> Can also while AI generation or Human writing the AI/peraon can build continu profiles of the characters, the storyline, etc and is visible in the ui

**Source status:** Direct new owner request in the current project conversation, 2026-10-08. The permalink has not been archived. Its words are preserved here, including the spelling. This statement is not present verbatim in earlier source extracts; do not attribute its exact wording to SRC-001, SRC-002 or SRC-003.

## Requested functional direction

As a fiction story develops through **human writing** or **AI-generated passages**, Vellistry should support the **ongoing creation and evolution** of profiles covering:
- characters — baseline traits and their changing situation, condition, knowledge, relationships and development;
- storyline — main plot and subplots, developments, turning points and active/resolved threads;
- other relevant story entities, such as locations, factions, objects or world rules where author context warrants tracking.

The author should be able to **see these profiles and relevant changes in the writing UI** and build/edit profile information directly, independently of AI. The system may assist by noticing potential additions or state changes from newly written text and surfacing them for author review.

## Author-control boundary

Preserve distinctions between:
1. **Human-authored accepted text** — story content the author has actually retained.
2. **AI-generated alternative text** — tentative content that may never be accepted.
3. **Detected profile update** — extraction or inference that can be incomplete or incorrect.
4. **Owner-approved story canon and state** — the authoritative profile used for continuity.

An AI-generated or extracted possibility is **not automatically canon**. Proposed changes need appropriate user review; accepted story events may update current profiles with links to their sources and story-time context. Corrections and retcons should allow historical states to be inspected rather than silently erase them.

This is consistent with the project's pre-existing author control, canon-state and provenance research. It should not weaken those safeguards.

## UI example (design illustration, not a locked screen)

An author writes that a character injured her left wrist and concealed it from a companion. In a visible Story Profiles panel, Vellistry could show:
- Character: proposed physical-state change: *left wrist injured*.
- Character knowledge: companion **not yet informed** (if explicit evidence supports that distinction).
- Evidence: chapter/scene and relevant passage.
- Controls: Review, Accept, Revise, Dismiss; a separate manual Edit action.
- After approval: the character's current state is shown along with earlier entries and its story-time relevance.

If the passage is merely an AI option, it must not automatically modify the approved profile. The exact panel location, user controls and update granularity are research questions, not selected implementation details.

## Deliberately unsettled

- Whether profile changes are offered on every paragraph, on save, scene completion, explicit request or a combination.
- Whether extraction uses local deterministic cues, an AI model, manual editing or a hybrid depending on privacy, cost and accuracy.
- When an accepted manuscript passage is enough evidence to promote extracted detail and when separate profile approval is necessary.
- Which entities need first-class profiles, how series-sharing works, and how author permissions and source provenance are stored.
- Any underlying database schema, prompt design, editor extension, task runner, model provider, subscription, autosave strategy or UI framework.
- **Release priority remains UNASSIGNED** until an explicit R04 scoping decision.

## Record and tests

The request is inventoried as [VEL-FEAT-08-021..027 and VEL-FEAT-09-025..030](../features/FEATURE-INVENTORY.md), within the existing Story Bible/continuity modules, not as an unrelated competing product.

Suggested later checks: manual character edits with AI off; candidate updates while human drafting; candidates from *unaccepted* AI text do not change canon; accepted scene update impacts only relevant book; timeline/POV knowledge remains time-scoped; revised source text can trigger review; existing approved profile history remains inspectable; UI remains useful without interrupting the writer.

**No actual live-profile tracking, AI extraction, UI prototype or user study has been implemented or passed by this record.**
