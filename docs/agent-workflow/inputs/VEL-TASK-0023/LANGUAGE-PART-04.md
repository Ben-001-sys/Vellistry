- [ADR-0003 editor](https://github.com/Ben-001-sys/Vellistry/blob/main/docs/decisions/ADR-0003-use-tiptap-3-prosemirror-for-manuscript-editor.md), [ADR-0004 import/backup](https://github.com/Ben-001-sys/Vellistry/blob/main/docs/decisions/ADR-0004-free-calibre-document-conversion-and-portable-recovery.md), [ADR-0006 stack](https://github.com/Ben-001-sys/Vellistry/blob/main/docs/decisions/ADR-0006-next-nest-supabase-implementation-foundation.md), [ADR-0007 source integrity](https://github.com/Ben-001-sys/Vellistry/blob/main/docs/decisions/ADR-0007-immutable-compact-expanded-guidance-sources.md), [ADR-0008 agent roles](https://github.com/Ben-001-sys/Vellistry/blob/main/docs/decisions/ADR-0008-codex-primary-agentic-implementation-workflow.md).
- [Wave 5 bounded AI decision](https://github.com/Ben-001-sys/Vellistry/blob/main/docs/plans/OPTION-B-WAVE05-MVP-FINAL-DECISION-2026-10-10.md).
- [AI Writing App Blueprint](https://docs.google.com/document/d/10Pbsw5w0jNpthSL3_cnuOw2WiiUrtTBqmPUgWyPm18k/edit) — consolidated source-grounded ideas and historical decisions, but not proof of app implementation. Original local Markdown source archives preserve details.

### 19.2 Competitor terminology researched (official documentation)

| Product/source | Observed patterns | Vellistry decision impact |
|---|---|---|
| [Novelcrafter Codex](https://www.novelcrafter.com/help/docs/codex/the-codex), [Codex types](https://www.novelcrafter.com/help/docs/codex/codex-types), [Write interface](https://www.novelcrafter.com/help/docs/write/the-write-interface) | Codex, Characters, Locations, Subplots, Write, scenes, chapters, manuscript | Familiar object labels; *Codex* is proprietary terminology, not mandatory here |
| [Novelcrafter prompt preview](https://www.novelcrafter.com/help/docs/prompts/prompt-preview), [prompt types](https://www.novelcrafter.com/help/docs/prompts/prompt-types) | Preview, custom prompts, text replacements, scene work | Transparent context preview is already a market precedent, not a claim of Vellistry uniqueness |
| [Sudowrite Story Bible](https://docs.sudowrite.com/using-sudowrite/1ow1qkGqof9rtcyGnrWUBS/what-is-story-bible/jmWepHcQdJetNrE991fjJC), [Characters](https://docs.sudowrite.com/using-sudowrite/1ow1qkGqof9rtcyGnrWUBS/characters/a7tdE1ZB8KvAwMD3Mopwpd) | Story Bible, Characters, Character cards, Generate, Rewrite, Outline | Keep simple writer actions while distinguishing generated suggestions and approved state |
| [Dabble manuscript/story separation](https://www.dabblewriter.com/docs/planning-story-notes/how-dabble-organizes-your-story), [Plot Grid](https://www.dabblewriter.com/docs/planning-story-notes/plot-grid-overview) | Manuscript vs Plots vs Characters/Notebook; plot lines vs plot points | Separate published prose, planning and reference content clearly |
| [Reedsy Studio](https://reedsy.com/studio/) | Plan, Draft, Edit, Format, tracked changes, Export, EPUB, print-ready PDF | Conventional phases are clear; don't imply deferred pro publishing exists in MVP |
| [Scrivener overview](https://www.literatureandlatte.com/scrivener/overview) | Manuscript organization, research, composition | Familiar writing tasks matter more than novel branding for every control |
| [NovelAI Lorebook documentation](https://docs.novelai.net/en/text/lorebook/) | Entries and context activation | Context terminology useful in advanced help, not general nav |

These are **documentation-level observations**, not full hands-on usability tests or endorsement of competitor wording. Competitor labels never override author-approved terminology.

### 19.3 UX/content and accessibility guidance

- [Microsoft Writing Style Guide](https://learn.microsoft.com/style-guide/) — clear, direct product writing; [formatting UI instructions](https://learn.microsoft.com/style-guide/procedures-instructions/formatting-text-in-instructions).
- [GOV.UK button guidance](https://design-system.service.gov.uk/components/button/) — verb/action labels, sentence case and explicit destructive actions.
- [GOV.UK error messages](https://design-system.service.gov.uk/components/error-message/) — describe problem and next step without technical jargon.
- [GOV.UK headings](https://design-system.service.gov.uk/styles/headings/) — sentence case and sensible hierarchy.
- [W3C WAI labels](https://www.w3.org/WAI/tutorials/forms/labels/) — explicit control naming.
- [W3C WAI form instructions](https://www.w3.org/WAI/tutorials/forms/instructions/) — placeholders do not substitute for visible labels.
- [WCAG 2.2 understanding error identification](https://www.w3.org/WAI/WCAG22/Understanding/error-identification) — identify the affected field and problem in text.

### 19.4 Research limitations and confidence

- Direct repository read: **high confidence** for source-level current copy, routes, enums and governance at the stated SHA. This is **not** a live user browser test.
- Figma Make/secondary prototypes: **reported or source-audited historical design evidence**, not independent interactive reevaluation on 2026-10-17. Direct Figma MCP metadata requests for the canonical Design file on 2026-10-17 were blocked by the connected account's Starter-plan tool-call limit; no new screen content was independently retrieved. The repository's Figma handoff, node references and prior walkthrough report were used instead.
- Competitors: **current official docs** checked, not logged-in account walkthroughs; products can change and are not direct user-research validation.
- Actual author vocabulary preference: **not validated** through interviews or task-based naming experiments; `PROPOSED_LABEL` changes require that review where important.
- Runtime hosted Supabase configuration, chapter save, real BYOK costs and AI output: **not verified** by this terminology audit.
- Scope/approval remains governed by accepted project decisions; this candidate does not change the accepted product boundary or authorize code execution.
