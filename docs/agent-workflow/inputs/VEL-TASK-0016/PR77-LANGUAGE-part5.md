| **Medium** | `apps/web/src/lib/library/book-library-state.ts` | **Please sign in to see your books.** | **Sign in to see your books.** | High: exact string; concise style proposal |
| **Medium** | `apps/web/src/lib/library/book-library-state.ts` | **Unable to load books. Try again.** | **Couldn't load your books. Try again.** | High: exact string; style proposal, not functional defect |
| **Medium** | `apps/web/src/app/books/page.tsx` | **Home** from book library | **Back to home** or context-verified destination label; do not rename blindly | High: exact route/text; moderate UX effect |
| **Medium** | `apps/web/src/app/login/page.tsx` | Sign-in and account-creation controls share one password field with `autoComplete="current-password"` | Clarify any create-account vs sign-in guidance after checking actual auth implementation; separate UX states if approved | High: actual code; input-behavior issue adjacent to copy |
| **Medium** | Design: PLAN-03, DES-002 | **Story Workspace**, **Story Profiles**, **Story Bible**, **Storyline/Thread** | Keep profiles as approved capability; Story Workspace as proposed shell; resolve primary label for thread vs storyline with author feedback | High: terms observed, approval boundaries distinct |
| **Medium** | Wave 5 vs ADR-0007 | “134 logical aliases”, “130 expanded defaults ON” vs unresolved source mapping/certification | Never advertise fully active certified defaults until approval/reproducible mapping evidence | High: document discrepancy; pending validation |
| **Low** | `apps/web/src/lib/library/book-library-state.ts` | `Loading your books...`, `Signing out...` | Typography polish to **Loading your books…**, **Signing out…** | High: exact source; low impact |
| **Low** | `/` homepage | **This is the first implementation foundation, not a public release.** | Keep on development environment; remove/rewrite only under separate production-launch task | High: accurate internal environment disclaimer |
| **Positive** | `/books` and `/login` | **Your books**, **Sign in**, **Create account**, **Sign out** | Retain; familiar and unambiguous | High: exact source |
| **Positive** | `LIBRARY_COPY.createUnknown` and `.createAbsent` | Explicit uncertainty and duplicate risk | Preserve semantic caution through any shorter language | High: correctness-positive current code |
| **Positive** | `book-library-state.ts` phases | Loading / empty / populated / error / unauthorized separated | Maintain separate view states; don't show empty while loading/error | High: actual implementation |

**Severity meaning:** Critical = a misleading action or status could cause incorrect/destructive author decisions; High = major trust/semantic or task confusion; Medium = discoverability/clarity; Low = polish. Planned missing terminology isn't a live deployed defect. Some high findings describe an implementation requirement rather than a current author-visible failure.

## 18. Unresolved decisions — do not silently settle

| ID | Question and evidence | Recommended next decision | Approval condition |
|---|---|---|---|
| `LANG-P01` | **Is the working product name Vellistry fully cleared?** Current brand in UI and repo; earlier market/name review was provisional. | Retain Vellistry in existing build; do not claim registered mark. | Owner legal/trademark/domain check before commercial brand claim. |
| `LANG-P02` | **Which exact source-version mapping becomes installable default guidance?** ADR-0007 freezes compact+expanded variants, while Wave 5 specifies 134 logical aliases provisionally. | No public numeric “130/134 active” claim until certified mapping. | Owner approves versioned map and R01 validation. |
| `LANG-P03` | **Should story navigation be “Story Workspace”, “Story Profiles” or “Story Bible”?** Profile functionality accepted; design shell proposed; competitors commonly use Story Bible/Codex. | **Story Workspace** as shell and **Story Profiles** for relevant records; do not merge into Story Bible yet. | Owner UX naming decision plus real-author task tests. |
| `LANG-P04` | **Storyline vs story thread:** approved MVP says Characters + Storylines/Threads, drafts vary. | **Story threads** for recurring plotline records; allow storyline in help. | Author testing, schema/interaction clarification and owner sign-off. |
| `LANG-P05` | **Chapter vs scene as editing unit:** approved initial DB stores chapters; long-term vision includes scenes. | Keep **chapter** authoritative in current app. | Separate scoped scene model and design/owner approval. |
| `LANG-P06` | **“Create book” unknown-save retry:** current `Save again anyway` can create duplicate; guard semantics deliberate. | **Check your books** first; add warned **Create book again** confirmation if supported. | Reviewed UX flow, tests for unknown ACK and duplicate prevention. |
| `LANG-P07` | **Sign-up result:** current copy says confirmation email *if enabled*; hosted Auth setting unverified. | Use precise verified confirmation copy per configuration. | Hosted auth state and email confirmation test. |
| `LANG-P08` | **What should AI settings promise about connection persistence?** Wave 5 selected session-only key; runtime not built. | **Use your own API key**; disclose session-only behavior, possible provider cost, actual recipient. | Authorized implementation and route/privacy/cost tests. |
| `LANG-P09` | **How will “Undo” differ between editor keyboard undo and committed AI revision undo?** Revision transaction design selected; product UI not built. | **Undo** for immediate text edit; **Undo accepted change** for persisted reviewed AI edit if supported. | UI and transactional history implementation/approval. |
| `LANG-P10` | **Which save/recovery statuses are guaranteed?** Current book-create status is not chapter autosave; save CAS planned. | Keep explicit **Unsaved**, **Saving**, **Saved**, **Save status unknown**, **Conflict**, **Recovered draft** conditioned on evidence. | Browser/database/local-recovery acceptance tests. |
| `LANG-P11` | **What is included/retained on export, restore, deletion?** ADR-0004 defines target archive; no complete converter/restore verified. | Distinguish **Download manuscript** vs **Download book backup**. | Fidelity, restore, retention, privacy and consent evidence. |
| `LANG-P12` | **Locale, English variant and translation strategy?** Current `<html lang="en">`; no localization system selected. | Use clear source English and locale-aware formatting; defer dialect/translation default. | Audience research, accessibility/IME tests, owner decision. |
| `LANG-P13` | **What are the canonical account and nested-book settings screen labels/routes?** Current only `/`, `/login`, `/books`. | **Account settings**, **AI settings**, **Export and backup** as proposed labels. | Approved navigation design and actual routes. |
| `LANG-P14` | **Which model/provider route statuses and cost figures may be displayed?** OpenRouter first adapter chosen; live real-model acceptance not completed. | Unavailable when not verified; label monetary values as estimates with units. | Real provider route/privacy/usage tests and approval. |
| `LANG-P15` | **Whether the proposed LANGUAGE.md itself is effective:** no `LANGUAGE.md` on verified default branch. | Adopt after owner review; keep `status: proposed-owner-review` meanwhile. | Owner approval and scoped documented repo integration. |

## 19. Research and evidence references

### 19.1 First-party canonical and source-specific evidence

- [Vellistry repository](https://github.com/Ben-001-sys/Vellistry) — current application, tests, governance and research.
- [`PROJECT-CONSTITUTION.md`](https://github.com/Ben-001-sys/Vellistry/blob/main/PROJECT-CONSTITUTION.md) — author intent, provenance, ownership and source precedence.
- [`SOURCE-OF-TRUTH.md`](https://github.com/Ben-001-sys/Vellistry/blob/main/SOURCE-OF-TRUTH.md) — repo versus runtime data authority.
- [`AGENTS.md`](https://github.com/Ben-001-sys/Vellistry/blob/main/AGENTS.md) — implementation role boundaries and review process.
- [`CURRENT-STATE.md`](https://github.com/Ben-001-sys/Vellistry/blob/main/CURRENT-STATE.md) — dated status, not always real-time; confirm live branch/PR state.
- [Approved eight-area MVP](https://github.com/Ben-001-sys/Vellistry/blob/main/docs/requirements/MVP-SCOPE-DECISION-2026-10-09.md).
- [Eleven author journeys and acceptance candidates](https://github.com/Ben-001-sys/Vellistry/blob/main/docs/requirements/MVP-USER-JOURNEYS-AND-ACCEPTANCE-2026-10-09.md).
- [PLAN-03 candidate navigation and screen states](https://github.com/Ben-001-sys/Vellistry/blob/main/docs/plans/VEL-PLAN-03-UX-NAVIGATION-STATES-2026-10-11.md).
- [Figma Make reported walkthrough](https://github.com/Ben-001-sys/Vellistry/blob/main/docs/design/VEL-DES-004-MAKE-LIVE-WALKTHROUGH-2026-10-11.md) — externally reported, not reexecuted as part of this audit.
- [Figma editable design reference](https://www.figma.com/design/krXupCfSLUnOQxEOjIlp9U) — canonical design artifact cited by project; static frames do not prove functioning UI.
- [Current library UI](https://github.com/Ben-001-sys/Vellistry/blob/main/apps/web/src/app/books/page.tsx), [copy/state definitions](https://github.com/Ben-001-sys/Vellistry/blob/main/apps/web/src/lib/library/book-library-state.ts), [login UI](https://github.com/Ben-001-sys/Vellistry/blob/main/apps/web/src/app/login/page.tsx), [book BFF/API errors](https://github.com/Ben-001-sys/Vellistry/blob/main/apps/web/src/app/api/books/route.ts), [Nest controller](https://github.com/Ben-001-sys/Vellistry/blob/main/apps/api/src/modules/books/books.controller.ts).
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
