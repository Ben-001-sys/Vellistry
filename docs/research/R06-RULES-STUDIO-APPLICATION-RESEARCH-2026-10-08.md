---
id: VEL-RES-R06-20261008-001
type: research-finding
status: draft
created_at: 2026-10-08
updated_at: 2026-10-08
author: project-research
version: 0.1.0
sources:
  - "docs/requirements/PRODUCT-DIRECTION-FROZEN-DEFAULT-GUIDANCE-2026-10-08.md"
  - "SRC-001 (author product intent)"
  - "SRC-003 (preserved fiction guidance and audit material)"
  - "Official public vendor/model documentation in source table, checked 2026-10-08"
related_requirements:
  - VEL-REQ-001
  - VEL-REQ-005
  - VEL-REQ-006
related_research:
  - R06
  - R07
  - R08
  - R10
related_experiments:
  - VEL-EXP-R06-001
related_decisions: []
---

# R06 — Rules Studio, effective instructions, and fiction-generation behavior

**Status: EVIDENCE-BACKED FEASIBILITY RESEARCH + PROPOSALS; NO PRODUCT/ARCHITECTURE APPROVAL.**
**As-of:** 2026-10-08. Current provider, vendor, pricing, and support capabilities can change.
**Related evaluation protocol:** [R06-RULE-APPLICATION-EVALUATION-PROTOCOL.md](R06-RULE-APPLICATION-EVALUATION-PROTOCOL.md).

## 1. Owner-approved product direction (source-derived)

The **existing** long-form fiction-writing guidance system is a **frozen/default-enabled foundation** in the proposed application; authors control whether rules are active in their own writing and can add their own. Active rules should shape AI generation, continuations, rewriting and appropriate editorial operations. Defaults are guidance, not compulsory machine-enforced bans; preserve deliberate artistic exceptions and writer intent. A disabled default rule must not be included covertly as an active instruction in a generated request. A user can restore a default. Non-AI manuscript editing remains first-class.

**Important freeze boundary:** SRC-003's 13 domains, 130 named lenses, 40 governing principles and writing/audit material are preserved in their present source form. The R01-A analysis found meaning collisions among short/expanded AR entries; this report does **not** choose the canonical variant, rewrite any AR lens, renumber IDs, or assert that the historical original module ZIP has been recovered. The currently identified source hash is an *archive fingerprint*, not a deployable ready-to-ship rule-pack version. Packaging remains a separate unresolved source-audit gate.

## 2. Market evidence: components already exist

| Reference | Verified documented capability | Research implication and limits |
|---|---|---|
| Novelcrafter, [prompt types](https://www.novelcrafter.com/help/docs/prompts/prompt-types) | Custom prompts for scene-beat completions, summaries, text replacements and workshop chats. | The idea of custom story-related AI prompts is **not novel**. Study familiar action flows rather than inventing prose-generation mechanics. |
| Novelcrafter, [prompt preview](https://www.novelcrafter.com/help/docs/prompts/prompt-preview) | Users may inspect the material about to be sent for scene completions, text replacements, summaries and chats. Some flows bypass the preview when there is only one model/preset unless configured. | A visible "effective request" is technically and competitively plausible; investigate whether Vellistry can make preview consistently discoverable. |
| Plotdrive, [features](https://www.plotdrive.com/features) | 30+ pre-built AI actions, custom AI tools, content toggles and a prompt preview. | Customizable AI actions and context visibility exist commercially; their end-user value remains to be validated independently. |
| NovelAI, [Lorebook](https://docs.novelai.net/en/text/lorebook/) | Lorebook entries have enable/disable switches, trigger-based activation, and context/token controls; disabled entries are not inserted merely because activation words match. | Entry toggles and conditional inclusion have a documented precedent. A lore record is not automatically an editorial rule. |
| AI Dungeon, [context assembly](https://help.aidungeon.com/faq/what-goes-into-the-context-sent-to-the-ai) | Instructions, essentials, summary, author note, story history and story cards enter context with priority/trim rules when space is limited. | Users may not receive the entire context even when a component is configured. Token limits and omission visibility are central to a trustworthy experience. |
| OpenAI API, [instruction semantics](https://platform.openai.com/docs/api-reference/responses-streaming/response/refusal?lang=python) | The Responses API supports developer/system instructions; when using previous-response references, previous `instructions` are not automatically carried over. | Provider conversation-state behavior needs direct per-provider tests; do not infer identical behavior across APIs. |
| OpenAI API, [compatibility](https://platform.openai.com/docs/api-reference/backward-compatibility?lang=ruby) | Model snapshots can change prompting behavior; pinned versions and evaluations are recommended. | A passing sample today does not guarantee a future model revision behaves the same. |
| Google Gemini, [context caching](https://ai.google.dev/gemini-api/docs/generate-content/caching?hl=en) | Explicit and implicit caching reuse prompt content under different semantics and retention properties. Cached content is still part of model context. | A disabled rule must be audited against **every effective context source**, including existing cached content when the integration uses it. |
| Google Gemini, [long context](https://ai.google.dev/gemini-api/docs/long-context) | Larger input contexts still have cost, latency and multi-fact recall limitations. | Sending all 130 lenses and every note to every operation is not justified simply because a model accepts large context. |
| OpenAI API, [Evals](https://platform.openai.com/docs/api-reference/evals/deleteRun?lang=python) | Evaluation structures support datasets and graders across models/parameters. | Repeated comparisons and explicit grading are preferable to one attractive generated example. |

**Research classification:** Statements about the products above are **vendor-documented capabilities**, not hands-on trial results. The design implications are analyst proposals. No benchmark run or paid subscription trial was performed for this note.

## 3. Model of the product behavior — a proposed acceptance contract, not a chosen engine

For a single AI operation, an author should be able to answer:

1. **What is my action?** Continue, rewrite selected text, draft from a beat, brainstorm, summarize, or audit.
2. **What guidance is eligible?** Which frozen defaults and personal rules are enabled and relevant to this action?
3. **What context is in scope?** Which book, scene, narrator knowledge and manuscript excerpts were selected or omitted?
4. **What overrides apply?** Has the author explicitly disabled a default or set an intentional exception (e.g., refrain, unreliable narrator, stylized repetition)?
5. **What was sent?** Can the author inspect a legible effective-request preview, including omissions and reasons?
6. **What can be accepted?** Does the AI propose text without silently overwriting author-approved prose or canon?

Illustrative functional rule-set calculation (not a persistence format, precedence algorithm or implementation instruction):

`eligible guidance = enabled preserved defaults + enabled applicable author rules - explicitly excluded defaults + applicable exceptions`

Then independently: `actual request guidance = eligible guidance constrained by selected action, context policy, provider limits and disclosed omission rules`.

An enabled rule is not proof it reached a model. A rule included in the model request is not proof the output complied.

## 4. Research questions and candidate UI workflow

**Proposed screen organization; not an approved UI design:**
- **Writing guidance overview:** "Vellistry defaults — On" with descriptive categories; authors can inspect and disable individual guidance, turn a category off, or restore defaults. Exact packaging/category labels remain source-governance dependent.
- **My rules:** add a name, plain-language instruction, examples, and an optional reason. Toggle an author rule on/off, edit its text, duplicate, and remove from personal configuration.
- **Applicable to:** choose where a custom rule matters. The owner named at least book-specific and all-project contexts; whether workspace, series, chapter, scene and operation scopes belong in an initial release is still open.
- **Before generation:** an easily reachable **"View instructions for this action"** showing active default/custom rules, scope, selected manuscript/canon context, inferred omission, and potentially contradictory rules. Provide a simple view first and an advanced view for exact source material.
- **After generation:** label what the model was asked to do, note limits, and allow keep, retry, edit, compare or reject. No silent substitution of the author's original rich-text.
- **Restoration/version note:** authors may revert to the frozen defaults of the referenced version. Re-enable and "reset" must not replace user manuscripts or erase personal rules without consent.
- **Optional AI-off mode:** ordinary editing, notes and exports remain functional; no AI key required to draft manually.

**Key interaction research questions:** Are 130 individual toggles overwhelming? Will authors prefer 13 expandable categories, suggested presets, search, a "show only customized" view, or a rule-by-rule advanced view? Can writers tell whether a rule is active for the *current chapter* versus active in the workspace generally? Should a rule be generated from examples or entered directly? How will users know if a feature affects only generation, post-draft criticism, or both?

## 5. Separations that must remain explicit

**Guidance versus factual canon:** "Avoid unintentional exposition" is a general writing-quality instruction; "Mira's left hand is burned" is a story fact, not a stylistic preference. Turning off editorial guidance must never erase story facts or overwrite the manuscript. Conversely, presenting a guessed character fact as authoritative canon needs author approval.

**User rule versus platform operational constraints:** The author should be able to disable a *creative default*, but that does not imply bypassing platform security, permissions or API-provider policy. No app-level safety policy or instruction hierarchy has been chosen.

**Generation guidance versus audits:** The frozen fiction system includes draft-time guidance as well as long-range and post-draft checks. Not every audit checklist belongs verbatim in every generation request. Research selective application while preserving the underlying content, not rewriting the creative system.

**Rule enablement versus instruction visibility:** A disabled default must not be slipped in via a hidden preset, an old assistant session, provider-held conversation state, a summary written from old instructions, or a reused cached prompt. An earlier manuscript passage can of course resemble a disabled rule stylistically; exclusion is a *request-assembly* guarantee, not a guarantee that a generative model will never independently produce related prose.

**Prompt visibility versus author privacy:** Reviewable prompt/context previews must not accidentally expose secret keys or unrelated projects. A readable, redacted preview and an advanced inspectable instruction list may be preferable to dumping raw provider credentials or hidden infrastructure settings.

**Instructions versus obedience:** Rule inclusion is deterministic and testable at the app boundary; model compliance and narrative quality are empirical. OpenAI notes snapshot-to-snapshot behavior changes; model and prompt versions must be logged for reproducible evaluations.

## 6. Proposed behavior priority and conflict approach — pending user validation

Some rules can be compatible, e.g., "avoid generic metaphor" and "use vivid specific imagery." Others conflict by design:
- Frozen quality guidance preferring restraint versus author instruction "repeat the refrain exactly four times in this ritual."
- Workspace preference for third-person limited versus an explicitly first-person interlude in one book.
- "Do not explain feelings" versus the author choosing a deliberately analytical narrator.
- A writer's new stylistic instruction versus an unverified story-memory claim.

**Recommended for study:** show the effective scope and any obvious conflict before generation; prefer the author's explicit, specific literary choice over optional broad creative defaults while respecting any separate platform permissions and safety constraints. Never silently "solve" contradictions by changing frozen source text. Whether priority is represented as overrides, exceptions, profiles or warnings is an unapproved product design choice.

## 7. Failure modes and engineering questions worth validating before architecture

| Failure | Observable symptom | Research response |
|---|---|---|
| Switch does not affect actual request | Disabled rule still present as active text | Compare active-setting snapshot with post-resolution provider request, not UI alone |
| Prompt context overflows | Relevant enabled guidance is silently dropped | Inspect token allocation and provider-specific truncation; show omission reason |
| Model ignores custom rule | Instruction present; prose violates it | Repeated outputs, rule-specific rubric, provider comparison; distinguish system from model error |
| Cross-book leakage | Instructions from Book A influence Book B | Test boundaries and connection/session isolation |
| Old rule sticks after a toggle | A reused thread, summary or explicit cache includes stale guidance | Audit every carried-over history/cache component; do not assume a fresh instruction field removes older influence |
| Contradictory instructions | Output oscillates or becomes generic | Present conflict clearly and test author exception semantics |
| Long default pack worsens voice | All outputs sound alike despite genre differences | Human-rated specificity, intentional eccentricity, genre fit, blind comparisons |
| False continuity corrections | AI flags valid unreliable narration or intended ambiguity | Separate guidance from verified canon; measure false positives |
| Cost inflation | Default pack disproportionately raises token usage | Measure cost/latency per action and compare selective application |
| Editing destroys intent | AI rewrite changes POV, factual meaning or manuscript formatting | Selection-level proposals, diff acceptance, restore and undo evaluation |

## 8. Proposed research disposition (not MVP approval)

**Test first:** rule visibility/default-on, custom entry, enable/disable, preview, one scene-generation action, selected-text rewriting, scope isolation and restoration. They provide direct evidence for the owner-approved point of difference.

**Comparatively straightforward prototypes:** familiar Continue/Rewrite/Expand/Brainstorm operations using externally provided models. These interactions already exist in Novelcrafter, Plotdrive and other incumbents; this does not make production-grade editing and model integration trivial.

**Defer actual commitment until measured:** broad advanced scope hierarchy, semantically reconciled guidance IDs, automatic canon acceptance, long-context "memory" claims, hard-style-enforcement promises, and full provider/MCP interoperability.

## 9. Current limits and next step

**Completed in this research pass:** source-derived product contract, public vendor pattern verification, failure-mode inventory, measurable questions, evidence source table and [test protocol](R06-RULE-APPLICATION-EVALUATION-PROTOCOL.md).

**Not completed:** actual default-pack build, source-semantic certification, account-level competitor trials, UI user studies, API model comparisons, LLM generations, cost measurement, performance figures, privacy penetration testing or acceptance/approval of an architecture.

**Next:** run the [evaluation protocol](R06-RULE-APPLICATION-EVALUATION-PROTOCOL.md) with consented/synthetic prose after picking test providers and a nonproduction trial mechanism. Collect evidence before asserting improvement. Follow R02 with writer interviews and R05 with author-grade editor trials as separate workstreams.

**Explicit non-decisions:** no application stack, editor framework, database, API gateway, caching provider, MCP architecture, schema, hosting arrangement, pricing, scope hierarchy or model vendor selected.
