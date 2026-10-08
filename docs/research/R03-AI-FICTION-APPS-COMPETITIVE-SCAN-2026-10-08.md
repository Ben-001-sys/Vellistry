---
id: VEL-RES-R03-20261008-001
type: market-research
status: draft
created_at: 2026-10-08
updated_at: 2026-10-08
owner: project_owner
version: 0.1.0
sources:
  - "Current official documentation and vendor product pages, reviewed 2026-10-08"
  - "Sample Reddit consumer discussions dated 2025–2026, reviewed 2026-10-08"
related_research:
  - R02
  - R03
  - R04
  - R05
  - R06
  - R08
  - R21
related_requirements:
  - VEL-REQ-001
  - VEL-REQ-002
  - VEL-REQ-003
  - VEL-REQ-005
---

# R03 — AI fiction-writing competitors and user signals (first live market scan)

**Status: RESEARCH FINDINGS; NOT USER-VALIDATED, NOT AN APPROVED FEATURE LIST, NOT AN IMPLEMENTATION PLAN.**  
**As-of date:** 2026-10-08. Live/vendor claims and product policies change.

## Purpose, scope and key distinction

Owner direction: **do not reinvent basic AI generation**; study what existing fiction-writing tools already do, which capabilities users like or dislike, and which familiar features could be practical additions to Vellistry. Vellistry's main product emphasis is its **frozen, default-enabled fiction-quality guidance with author controls**, not invention of a new language model or a novel AI generation concept. Separate provider API and future permissioned MCP interoperability remain areas to evaluate.

This is a **representative competitor scan**, not an exhaustive census of every service on the market. Nine products are covered, with both direct AI novel-writing tools and adjacent conventional writer tools clearly differentiated. Evidence comprises current vendor documentation/claims plus selected Reddit anecdotes; **no accounts were logged into, no paid plans purchased, no end-to-end feature trials performed, and no representative user interviews conducted**.

The existence of custom instructions and prompts in Novelcrafter, Plotdrive, NovelAI and AI Dungeon means it would be inaccurate to market the idea of user-controlled AI instructions as wholly unprecedented. A more defensible **unverified positioning hypothesis** is: ready-to-use quality-oriented defaults + usable configuration + transparent application across familiar writing actions + meaningful author control without routine prompt engineering.

## Competitor feature matrix

| Product | Current official feature evidence | Worth investigating for Vellistry | Limits / separate validation |
|---|---|---|---|
| **Novelcrafter** | Manuscript writing/plan/review; story Codex and linked mentions; scenes and snippets; custom prompts for beat completion, summaries, selected-text replacement and chat; BYOK/OpenRouter | Strong comparison for granular author control and contextual story notes; study prompt customization and contextual detail selection | Review custom-prompt learning curve and whether lore is reliably included; customer anecdotes report confusion/missing context |
| **Sudowrite** | Story Bible moves from braindump to worldbuilding/outline/chapter prose; Write, Rewrite, Describe, Brainstorm, Expand, Chat, Canvas, Feedback, selection edits | Strong reference for low-friction idea-to-outline-to-chapter assistance, accessible writing actions and story-aware chat | Customer samples praise guided onboarding but report expensive usage and sometimes inadequate story/style retention |
| **Plotdrive** | 30+ AI action tools; user-created tools; inline Continue, Make Outline, grammar/depth actions; co-writer, toggle context, prompt preview and import | Excellent reference for 'explain what AI sees' and simple user-editable commands without forcing technical prompt engineering | Vendor claims of voice preservation need real comparison tests; customer enthusiasm not a verified effectiveness measure |
| **NovelAI** | Model selector; user Memory/Author's Note; Lorebook of characters, places, objects with context activation; export/import lore | Reference for transparent author notes and user-managed contextual lore for creative drafting | Lore activation/context limits and setup burden must be benchmarked; model quality reports are subjective |
| **Squibler** | Idea-to-outline/full draft claims; story elements, chapters/scenes, word goals and PDF/DOCX/EPUB export claims | Reference for guided draft start, content organization, one-click common operations and attractive scope packaging | Marketing statements about consistent voice and print-ready exports require hands-on verification; don't assume accuracy |
| **LivingWriter** | Author-oriented manuscript, plot boards, story elements, goals; optional AI chat, analysis, rewriting, outline, summaries, cover concepts | Reference for conventional authoring with optional AI and selection-based revisions | What is paid, exact AI model controls, suggestion fidelity and export limitations need trial |
| **AI Dungeon** | Interactive fiction rather than primarily novel production; AI Instructions, Story Summary, Plot Essentials, Author's Note, triggered Story Cards, context viewer, retry/edit | Reference for transparency about context assembly, active memory and fallback when context window is limited | Different audience/play mode; do not directly copy game UX into professional novel software |
| **Reedsy Studio** | Conventional manuscript editor, chapter navigation, boards for characters/research, import, formatting/typesetting, collaboration and writing goals; separate idea generators | Reference for non-AI first authoring and publication workflow; compare attainable editing quality against Vellistry aspirations | Not equivalent to a full AI novel-generation suite; helps evaluate when normal editing and export matter more |
| **Dabble Writer** | Novel/chapters/scenes organization; Plot Grid for subplots and arcs, goals, focus mode, synchronization; editing and note capabilities | Reference for drag-to-organize, visual plotting, goals and low-friction writing UX | Primarily a writing/plotting comparator; do not infer it offers general AI novel drafting |

### Official source links, per product

- **Novelcrafter:** Official [Codex](https://www.novelcrafter.com/features/codex), [prompt types](https://www.novelcrafter.com/help/docs/prompts/prompt-types), [OpenRouter connection](https://www.novelcrafter.com/help/docs/ai-connections/openrouter), [writing UI](https://www.novelcrafter.com/help/docs/write/the-write-interface).
- **Sudowrite:** Official [Story Bible](https://docs.sudowrite.com/using-sudowrite/1ow1qkGqof9rtcyGnrWUBS/what-is-story-bible/jmWepHcQdJetNrE991fjJC), [feature list](https://feedback.sudowrite.com/en/help/collections/5442133-features), [Canvas](https://docs.sudowrite.com/using-sudowrite/1ow1qkGqof9rtcyGnrWUBS/canvas/pQGLNzeYo1kLhGo14rdBy6).
- **Plotdrive:** Official [features](https://www.plotdrive.com/features).
- **NovelAI:** Official [story settings](https://docs.novelai.net/en/text/editor/storysettings/), [Lorebook](https://docs.novelai.net/en/text/lorebook/).
- **Squibler:** Official [novel writer](https://www.squibler.io/ai-novel-writer/), [book software](https://www.squibler.io/book-writing-software/).
- **LivingWriter:** Official [AI features](https://livingwriter.com/en/ai-features), [product](https://livingwriter.com/en/product).
- **AI Dungeon:** Official [Plot Essentials](https://help.aidungeon.com/faq/plot-essentials), [context assembly](https://help.aidungeon.com/faq/what-goes-into-the-context-sent-to-the-ai), [play basics](https://help.aidungeon.com/faq/the-basics).
- **Reedsy Studio:** Official [Studio](https://reedsy.com/studio/), [writing](https://reedsy.com/studio/write-a-book/), [generators](https://reedsy.com/studio/generators/).
- **Dabble Writer:** Official [overview](https://www.dabblewriter.com/docs/getting-started/what-is-dabble), [features](https://www.dabblewriter.com/features-2/dabble-features).

## Qualitative customer signals (not market-wide statistics)

| Signal | What a user actually reported / what is observed | Evidence | Caution |
|---|---|---|---|
| **Clear onboarding and guided planning** | An April 5, 2026 commenter preferred Sudowrite's brain-dump-to-outline automation to Novelcrafter's manual setup; another commenter noted that drafted prose can still lose initial tone/rules | [Reddit, 2026-04-05](https://www.reddit.com/r/WritingWithAI/comments/1sczcs4/sudowrite_is_better_than_novelcrafter/) | Small self-selected discussion; not a comparative user study |
| **Reliable story memory is more important than large lore fields** | A January 12, 2026 author said Sudowrite mixed up characters and Novelcrafter sometimes failed to use Codex details, despite available context settings | [Reddit, 2026-01-12](https://www.reddit.com/r/WritingWithAI/comments/1qaxcjk/for_those_that_use_ai_tools_think_sudowrite/) | Single account; reproduce with specific long-form manuscripts |
| **Effective, human-usable prompt controls** | Some authors appreciate Novelcrafter custom prompts but find their construction difficult; other commenters like Plotdrive's visible AI request and own action buttons | [Reddit, 2026-01-12](https://www.reddit.com/r/WritingWithAI/comments/1qaxcjk/for_those_that_use_ai_tools_think_sudowrite/), [Reddit, 2025-03-20](https://www.reddit.com/r/WritingWithAI/comments/1jfsgw2/plotdrive_vs_novelcrafter_vs_sudowrite/) | Preferences differ widely between advanced and novice authors |
| **Pricing predictability matters** | Users complained about exhausting Sudowrite credits after a small number of revisions/chapters; others reported liking its interface and organization | [Reddit, 2025-02-04](https://www.reddit.com/r/WritingWithAI/comments/1ihjo22/sudowrite_iskinda_expensive/), [Reddit, 2026-08-18](https://www.reddit.com/r/WritingWithAI/comments/1vrx7be/ive_hit_a_frustrating_dilemma/) | Anecdotes are not evidence of current price multipliers; validate latest official billing and real task costs |
| **Large-book drafting still fails in ordinary tools** | An August 10, 2026 writer reported that around 30,000 words AI began compressing/jumping ahead despite outlines, bible and instructions | [Reddit, 2026-08-10](https://www.reddit.com/r/WritingWithAI/comments/1vkqlz2/how_the_heck_do_you_write_a_longer_novel_with_ai/) | Specific setup unknown; cannot infer a universal context limit from one case |
| **Writers differ on desired AI amount** | Novelcrafter promotes both writing without AI and BYOK features; Reedsy/Dabble stress conventional writing; discussion preferences range from high automation to tools that only suggest | [Novelcrafter](https://www.novelcrafter.com/use-cases/romance-nsfw), [Reedsy](https://reedsy.com/studio/), [Dabble](https://www.dabblewriter.com/docs/getting-started/what-is-dabble) | Product messaging is not independent user validation; test real segments |

**Read these carefully:** Reddit thread comments are individual reported experiences, not representative satisfaction ratings, controlled accuracy tests, or proof that any vendor's implementation is universally flawed. The studies should be triangulated through more customers, unbiased interview recruitment and reproducible tests. Vendor testimonials on their own websites are also marketing evidence rather than independent validation.

## Candidate familiar features, categorized by *relative investigative difficulty*

These are **comparative research estimates for a small proof-of-concept**, *not effort commitments*. Actual delivery difficulty depends on editor choice, integration rights, security, application architecture, team and acceptance criteria—all still undecided.

| Feature cluster | Familiar pattern / candidate | Relative difficulty (hypothesis) | Rationale |
|---|---|---|---|
| Common inline AI actions | Continue a paragraph; expand/shorten/rephrase selected text; brainstorm alternatives; fix grammar; prompt from scene beat | **Low–medium relative** | Existing Novelcrafter, Sudowrite, Plotdrive, LivingWriter; familiar user interaction; generation through an existing provider, not a novel model |
| Outline and simple scene cards | Generate optional outline from premise, organize story beats, reorder scenes and chapters | **Low–medium** | Proven in Sudowrite, Squibler, Dabble; complexity increases with live cross-references |
| Writing basics that should not depend on AI | Word and chapter counts; chapter navigation; focus mode; notes and simple progress goals | **Low–medium in isolation** | Conventional author products provide these; whole-editor quality still requires validation |
| Multiple generations and selection | Produce 2–3 variants and let the author pick, ignore, revise or keep alternate drafts | **Low–medium prototype** | Reuses ordinary provider calls and prevents silent overwrite |
| Default rules UI and custom rule entry | Display frozen default pack as initially enabled; turn rules off/on; add author rules; preview what's active | **Low–medium UI prototype; medium–high credible enforcement** | Core Vellistry product direction; affects generation request semantics; default source packaging is still an evidence gate |
| Prompt/context preview | Let user inspect the effective instructions and relevant story facts used for a selected AI request | **Medium** | Plotdrive and AI Dungeon show precedents; important trust and debuggability feature |
| Story Bible basics | Manual characters, locations, objects, notes, with explicit inclusion in selected generation | **Medium** | Existing Novelcrafter, Sudowrite, NovelAI; advanced automatic mention tracking and state history are harder |
| Model choice and BYOK | Configure provider credentials, select models, estimate costs, control calls | **Medium–high for secure production** | Novelcrafter shows market precedent; account credentials, encryption, pricing, abuse protection remain nontrivial |
| Scoped inheritance and rule conflicts | Workspace/book/scene or other scopes, exceptions, change history, omit disabled rules safely | **Medium–high** | Differentiating experience; cannot guarantee obedience; requires extensive test cases |
| Deep long-form continuity | Correct temporal knowledge, contradictory canon, plot obligations and consequence tracking across many chapters | **High** | Core quality promise; sensitive to false alarms, retrieval and author trust |
| Print-grade editing and publication | Precise rich text, DOCX round trips, EPUB, print PDF, pagination and layouts | **High** | Must not confuse 'plain export button' with professional typesetting |
| Native editable covers and external MCP interoperability | Independent text/art layers, compliant commercial assets, print wraps; remote tool access with author authorization | **High** | Separate capability and policy investigations; never a prerequisite for basic AI drafting |

## What to reuse in the product experience vs what must not be copied blindly

**Reuse patterns, not proprietary implementations:** Familiar 'Continue', 'Rewrite selected', 'Expand', 'Brainstorm', 'Summarize', 'Chat with my book', variant selection, simple story cards, outline boards, writing goals, chapter management and clear save indicators. These exist in today's fiction-writing tools; the problem becomes effective UX, trustworthy context and fidelity rather than inventing the underlying concept.

**Protect the user's intended distinction:** Defaults are supplied out of the box; UI makes them obvious; user can disable/remove them from active context, restore them and write new rules. That effective set should affect each relevant generation and editing request. Display what was passed to the model. Do not pretend that prompt inclusion proves model compliance.

**Avoid apparent shortcuts:** A story-bible field is not long-range continuity; a generated cover is not an editable design studio; plain PDF export is not print-ready typesetting; 'our AI has memory' does not establish accurate temporal character knowledge. A fancy rule-toggle interface that never affects actual generation fails the owner's stated expectation.

**Avoid false exclusivity claims:** Novelcrafter already supports custom prompts/BYOK and Plotdrive custom AI tools and context preview; AI Dungeon provides AI Instructions and context visibility. Investigate whether an integrated, optional, genre-sensitive default pack and better application semantics deliver tangible benefits over these incumbents.

## Proposed comparison trials (research activities, not architecture decisions)

1. **One-scene baseline:** Same character setup and scene beat, generate two continuations through each candidate flow; record number of clicks, editing friction, time, cost, desired artistic outcome and ability to reject.
2. **Rule-governance test:** A global quality guideline must be disabled for one user while a new story-specific directive is enabled. Inspect actual instructions sent and final prose to distinguish *applied configuration* from *model adherence*.
3. **Context fidelity test:** At chapters 1, 6 and 15, ask questions about a secret learned by some but not all characters; check lore selection and time-aware consistency.
4. **Voice-preservation test:** Compare a human-authored paragraph, 'rewrite' suggestions and editor preferences across several genres; human judges flag homogenization and useful variation.
5. **Onboarding test:** Start from a braindump, organize character notes, outline the first three scenes and begin drafting. Measure whether the interface works without building complex prompts.
6. **Cost test:** Measure consumption across 10 rewrites, 10 continuations, 3 large context audits and a chapter-creation workflow. Separate *subscription* costs from *provider API* charges; do not estimate costs from anecdotes.
7. **Trust test:** Disable AI entirely, edit and export safely; connect/disconnect a model; inspect active rules and proposal diffs; verify that disabled rules no longer appear as active instructions.

## Suggested research emphasis, NOT an approved MVP

- **Inspect first:** Novelcrafter (Codex + custom prompts + BYOK); Sudowrite (guided Story Bible + common actions); Plotdrive (custom actions + inspectable prompts); NovelAI and AI Dungeon (author notes/context controls).
- **Inspect for a real book editor:** Reedsy Studio, Dabble and LivingWriter (non-AI author experience, navigation, writing goals, planning and export). Squibler offers a contrasting high-automation framing.
- **Relatively approachable usability patterns:** selection-level rewrite, continue/brainstorm, variant cards, basic chapter/scene hierarchy, word count/goal displays, simple outline cards and a rule-toggle UI *prototype*.
- **Do not understate hard parts:** secure multi-provider BYOK, reliable cross-book canon, rich editor fidelity, no-silent-override rule semantics, print-grade output, standalone layered covers and full external-MCP access.
- **Do not freeze feature priorities:** Interview writers, prototype candidate interactions, and validate actual usage before selecting MVP scope.

## Competitor/customer evidence ledger

### Official product pages

- **O01 — Novelcrafter custom prompt types:** https://www.novelcrafter.com/help/docs/prompts/prompt-types
- **O02 — Novelcrafter Codex:** https://www.novelcrafter.com/features/codex
- **O03 — Novelcrafter OpenRouter support:** https://www.novelcrafter.com/help/docs/ai-connections/openrouter
- **O04 — Sudowrite Story Bible:** https://docs.sudowrite.com/using-sudowrite/1ow1qkGqof9rtcyGnrWUBS/what-is-story-bible/jmWepHcQdJetNrE991fjJC
- **O05 — Sudowrite feature index:** https://feedback.sudowrite.com/en/help/collections/5442133-features
- **O06 — Plotdrive official features:** https://www.plotdrive.com/features
- **O07 — NovelAI Story Settings:** https://docs.novelai.net/en/text/editor/storysettings/
- **O08 — NovelAI Lorebook:** https://docs.novelai.net/en/text/lorebook/
- **O09 — Squibler book writing software:** https://www.squibler.io/book-writing-software/
- **O10 — LivingWriter AI features:** https://livingwriter.com/en/ai-features
- **O11 — AI Dungeon Plot Essentials:** https://help.aidungeon.com/faq/plot-essentials
- **O12 — Reedsy Studio:** https://reedsy.com/studio/
- **O13 — Dabble Writer overview:** https://www.dabblewriter.com/docs/getting-started/what-is-dabble

### Community observations (sample discussions)

- **C01 — Sudowrite vs Novelcrafter user anecdote, 2026-04-05:** https://www.reddit.com/r/WritingWithAI/comments/1sczcs4/sudowrite_is_better_than_novelcrafter/
- **C02 — Memory and prompt pain points, 2026-01-12:** https://www.reddit.com/r/WritingWithAI/comments/1qaxcjk/for_those_that_use_ai_tools_think_sudowrite/
- **C03 — Cost discussion, 2025-02-04:** https://www.reddit.com/r/WritingWithAI/comments/1ihjo22/sudowrite_iskinda_expensive/
- **C04 — Cost discussion, 2026-08-18:** https://www.reddit.com/r/WritingWithAI/comments/1vrx7be/ive_hit_a_frustrating_dilemma/
- **C05 — Long novel context complaint, 2026-08-10:** https://www.reddit.com/r/WritingWithAI/comments/1vkqlz2/how_the_heck_do_you_write_a_longer_novel_with_ai/
- **C06 — Plotdrive and Novelcrafter user comparison, 2025-03-20:** https://www.reddit.com/r/WritingWithAI/comments/1jfsgw2/plotdrive_vs_novelcrafter_vs_sudowrite/

## Questions left unresolved for R02/R03

- Which author's daily priority is strongest: quality of story continuation, trustworthy long context, intuitive prompts, professional editing, cost predictability or fast outline setup?
- Does activating a high-quality default guidance pack improve evaluated outputs, or merely increase tokens and restrictive style effects?
- What fraction of test users want defaults enabled, and how many immediately customize or disable them?
- How should rule scope, overrides and context inspection work without creating a complex technical prompt-builder?
- What licenses/rights govern any templates, generated assets or third-party workflows considered for reuse?
- What features are genuinely faster to implement once the editor and provider choices have been evaluated?
- Do potential paying writers find Vellistry sufficiently differentiated from Novelcrafter, Sudowrite or Plotdrive, and for what measurable outcome?

**No application architecture, technology stack, repository source tree, development timeline, provider, budget or pricing is approved by this scan.**
