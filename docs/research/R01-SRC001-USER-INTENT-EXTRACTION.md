---
id: VEL-RES-R01-SRC001-INTENT-001
type: source-extraction
status: draft
created_at: 2026-10-08
updated_at: 2026-10-08
owner: project_owner
version: 0.1.0
sources:
  - SRC-001
related_research:
  - R01.06
  - R04
---

# SRC-001 — First-pass extraction of user-authored product intent

**Status: SOURCE-DERIVED CANDIDATES, NOT ACCEPTED PRODUCT REQUIREMENTS.**
**Method:** Extracted only from the `## User` passage of `AI Writing App Blueprint.md`, line 5 of the preserved Markdown file. This source is a conversational/voice-style paragraph; text snippets anchor the point inside that long line, rather than falsely claiming a narrower line range. No assistant-written blueprint recommendation is promoted here as a user request.

**Count:** 28 individual intent or research-direction statements. They may overlap and still need de-duplication, owner confirmation, prioritization and testable acceptance criteria. IDs `INT-01` etc. are **extraction local IDs**, not reserved `VEL-REQ-` requirements.

| Extraction ID | Source-derived intent / open question | Exact user phrase (SRC-001 line 5) | Investigation theme |
|---|---|---|---|
| INT-01 | Treat the idea as a software/site/app product, not merely a novel-specific chat workflow. | “turning this into a software or a site or an app” | Product form exploration |
| INT-02 | Organize every idea while retaining minor and easily missed details. | “do not lose track of any, even the tiniest detail” | Research capture / provenance |
| INT-03 | Investigate choosing between AI models inside the writing experience. | “being able to choose a model” | Model choice |
| INT-04 | Support writer-provided ideas and AI-assisted writing, subject to user control. | “use the model to write, give it ideas” | AI-author collaboration |
| INT-05 | Allow users to create writing guidance and model instructions via a visual UI. | “being able to set these type of rules with UI” | Rules Studio |
| INT-06 | Study rules that operate on individual books and across multiple projects. | “scope it to a book. We can scope it to all your projects” | Rules scope |
| INT-07 | Keep book/fiction writing as the primary product focus. | “mainly for book writing” | Audience and scope |
| INT-08 | Research adjacent writing workflows without prematurely dismissing applicable use cases. | “if it falls under any of the other type of jobs” | Potential adjacent scope |
| INT-09 | Ensure conventional writing software remains useful independently of AI. | “shouldn't lose the edge of normal writing software” | Editor-first value |
| INT-10 | Investigate substantial rich-text formatting and editing comparable in kind to Google Docs. | “for example Google Docs, you see they are formatting and editing” | Rich text requirements |
| INT-11 | Research a mature editor project rather than rebuilding the entire editing engine. | “Research whatever open-source project allows us” | Build-vs-buy investigation |
| INT-12 | Check whether chosen editing technology is free for commercial use, with current licensing evidence. | “should be free, for commercial use” | Licensing constraint |
| INT-13 | Explore bring-your-own provider API keys as an AI access method. | “the writer yourself, to input API keys” | Provider access |
| INT-14 | Separately research MCP connections with compatible external AI assistants; availability and interpretation require verification. | “being able to set up an MCP connection” | Assistant interoperability |
| INT-15 | Preserve the named AI-host examples as ambiguous raw input until their names and capabilities are verified. | “ChatGPT, ChatGPT Cloud, and DeepSeek” | Provider names / clarification |
| INT-16 | Investigate writer-used publishing templates and tools, including which features users actually value. | “research with templates, tools, and that writers normally use” | Writer ecosystem research |
| INT-17 | Assess free/open options and eventual costs for third-party functionality. | “Can we get them for free?” | Economic feasibility |
| INT-18 | Support or investigate different book display/output formats, using PDF as a named example. | “different formats in which the book can be displayed” | Output formats |
| INT-19 | Research book page layouts, visual arrangement and typography beyond raw text. | “the way they design their pages” | Book composition |
| INT-20 | Treat book-cover design as a particularly important capability to research. | “The book cover, the book cover. The book cover especially.” | Covers |
| INT-21 | Explore AI-generated cover assets or directions without requiring AI to produce the whole final design. | “the AI being able to generate this one” | AI imagery |
| INT-22 | Investigate comparing multiple cover directions and previews, rather than presenting only one result. | “list different options, like preview” | Cover iteration |
| INT-23 | Investigate real editing tools for independently improving a cover, rather than one flattened AI result. | “using proper editing software” | Editable design |
| INT-24 | Research Canva + MCP as a possible workflow, subject to terms and capability verification. | “using Canva with, yes, MCP” | Integration exploration |
| INT-25 | Avoid generic, interchangeable-looking book covers, particularly for web fiction. | “You don't want any generic” | Design quality |
| INT-26 | Study physical manuscript printing and finished print-book production requirements. | “the printability of the book after it's written” | Printing |
| INT-27 | Propose useful non-obvious features rather than accumulating generic extras. | “great or good ideas... don't let them be generic” | Innovation discipline |
| INT-28 | Do not omit ordinary features when they are necessary for a credible writing product. | “if it's normal that is vital” | Baseline essentials |

## Scope ambiguities that must remain open

1. **What counts as Google Docs-like editing?** The source names Google Docs as a *comparison and quality aspiration*. It does not define an exact list of formatting controls, real-time collaboration, print layout, track changes, or proprietary behavior.
2. **'ChatGPT Cloud' in the transcript.** This may be a voice-transcription ambiguity. Do not silently replace it with 'Claude' or invent a particular host API. Research provider names and actual integrations before treating compatibility as confirmed.
3. **Rules hierarchy.** The user asks for book and all-project scopes. The more detailed workspace/series/chapter/scene inheritance model described later is assistant-proposed until independently validated or approved.
4. **Open-source wording.** The user seeks commercially usable free/open software for the editor. This is a constraint to investigate, *not an approval* of Tiptap, ProseMirror, Lexical, a specific license, or any implementation stack.
5. **Cover generation versus editing.** The source demands variants and proper editing. A flattened generated image alone would not meet the aspiration, but the exact editor features and legal rights remain research questions.
6. **'Other jobs'.** Adjacent writing use cases are to be noted and researched; this does not establish that every non-fiction writing product is in initial launch scope.
7. **Vital ordinary features.** Preserve essential baseline writer functionality while distinguishing high-value differentiators. No MVP scope is approved.
8. **Cost.** The speaker wants costs researched and rationalized later; no billing model, pricing, provider, or budget has been selected.
9. **API and MCP.** Both are explicitly named as desired avenues of assistance. Their distinction and implementable capability depend on external current technical verification.
10. **Source ambiguity and speech pattern.** Preserve the original paragraph verbatim separately; the table is a normalized research decomposition, not replacement text.

## Suggested review and promotion process

For each extracted item, connect the existing compact `VEL-REQ-` seed if appropriate, mark confirmed intent versus inferred behavior, interview representative authors, define a verifiable outcome, and obtain owner approval before promoting to accepted requirements. Treat any assistant-generated '42 requirements' outside the user passage as a separate proposed inventory until its standalone source can be recovered.

**No architecture, editor engine, AI provider, hosting, database, repository directory tree, feature launch priority or implementation date is selected by this extraction.**
