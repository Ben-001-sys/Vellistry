---
id: VEL-RES-R04-20261008-001
type: product-scope-research
status: proposal-for-owner-review
created_at: 2026-10-08
updated_at: 2026-10-08
author: project-research
version: 0.1.0
sources:
  - "PRE-DEVELOPMENT-RESEARCH-REGISTER.md — R04.01–R04.08"
  - "docs/research/R01-SRC001-USER-INTENT-EXTRACTION.md — INT-01–INT-28"
  - "docs/requirements/PRODUCT-DIRECTION-FROZEN-DEFAULT-GUIDANCE-2026-10-08.md"
  - "docs/requirements/REQUIREMENTS.md — VEL-REQ-001–008 (proposed seed only)"
  - "docs/research/R03-AI-FICTION-APPS-COMPETITIVE-SCAN-2026-10-08.md"
  - "docs/research/R06-002-SYNTHETIC-RULE-CONTRACT-RESULTS.md"
  - "https://github.com/Ben-001-sys/Vellistry/pull/6 — ADR-0003 owner-approved Tiptap 3 choice, pending merge at research time"
  - "https://github.com/Ben-001-sys/Vellistry/pull/7 — R05 isolated editor spike"
related_research:
  - R01
  - R02
  - R03
  - R04
  - R05
  - R06
  - R07
  - R08
  - R10
  - R11
  - R12
  - R13
  - R14
  - R15
  - R16
  - R18
  - R21
related_adrs:
  - ADR-0003
related_requirements:
  - VEL-REQ-001
  - VEL-REQ-002
  - VEL-REQ-003
  - VEL-REQ-004
  - VEL-REQ-005
  - VEL-REQ-006
  - VEL-REQ-007
  - VEL-REQ-008
---

# R04 — Vellistry first usable release: three scope options and a provisional recommendation

**Decision status: NOT APPROVED.** This is a bounded interpretation of owner-directed product intent and an experiment plan, not a final roadmap, PRD, promised feature set, implementation architecture or release date.

## 1. What the original owner source actually establishes

The initial user-authored direction (extracted without promoting assistant ideas into requirements in [R01-SRC001](R01-SRC001-USER-INTENT-EXTRACTION.md)) establishes **product goals**, not release timing:

| Source-derived intent | Anchor | Scope consequence (analyst interpretation, not quoted requirement) |
|---|---|---|
| Fiction and book writing primarily | INT-07 | Prioritize book/chapter writing tasks over arbitrary generic writing templates. |
| Conventional writing software must retain its edge even without AI | INT-09, INT-10, INT-28 | An AI-off authoring path needs to be genuinely useful and safe. |
| Research an existing commercially usable editing foundation | INT-11–12; owner-approved ADR-0003 | Adopt Tiptap 3 / ProseMirror for the editor foundation, while testing production usability and licensing. |
| Author enters ideas and directs model generation | INT-03–06 | Give priority to a discoverable rule UI and familiar selected-text/continuation actions over invention of new generation concepts. |
| Provider choice, BYOK and separately MCP | INT-13–15 | Preserve those as distinct product opportunities; neither an API provider nor an MCP host is selected. |
| Formats, typography, publishing and physical printing | INT-16, INT-18–19, INT-26 | Treat export and book production as substantive scope, not an implicit by-product of editor choice. |
| Cover design especially matters, with multiple non-generic options and real edits | INT-20–25 | Do **not** write covers out of the product concept; decide release sequence based on actual author priority and tool/licensing evidence. |
| Maintain source fidelity and avoid generic novelty or missing basics | INT-02, INT-27–28 | Define traceable must-haves, hypotheses and explicit omissions instead of a long speculative feature count. |

Subsequent **owner-directed** decision: the **existing fiction-writing guidance stays frozen, enabled by default for a new user, author-controllable, restorable and extensible with custom rules**. Disabled creative instructions must not be covertly included in the effective model request. Rule application does not guarantee model obedience or high prose quality. [Source](../requirements/PRODUCT-DIRECTION-FROZEN-DEFAULT-GUIDANCE-2026-10-08.md).

The owner has also **explicitly selected Tiptap major version 3 / ProseMirror as the editor foundation** (ADR-0003 in [PR #6](https://github.com/Ben-001-sys/Vellistry/pull/6)). The implementation has not been approved beyond that foundation.

**Important:** the source does **not** say "covers must ship at launch," "BYOK is mandatory in version 1," "AI generation must be free," "all 130 rules must be included in every prompt," "Google Docs functionality must be copied feature-for-feature," or "use Next.js/Postgres." Those would be unsupported additions unless separately decided.

## 2. Definitions: prototype, pilot and initial market release

- **Technical prototype:** Tests one bounded mechanism or screen with disposable synthetic writing. May have no account, storage service, provider API or export. **Not** a usable writing product.
- **Writer-facing pilot:** A coherent, protected end-to-end workflow that a consenting trial author can perform on a real but noncritical/test manuscript, with clear limits, exit/backup and error handling. Not automatically commercially launched.
- **Initial public MVP/release:** A product people can safely trust for actual ongoing writing. Requires decided storage/privacy, durable saves and recovery, data export, account/security, operational support, license compliance and an evidenced author-facing scope. **No current prototype proves those obligations.**

Research explicitly distinguishes the first *integrated pilot* from the eventual *commercial first release*. Do not use "MVP" to conceal missing save/recovery/privacy and real-writer validity.

## 3. Three candidate product boundaries (none yet accepted)

| Candidate | Initial experience | Advantages | Major risks / evidence absent | Owner decision needed |
|---|---|---|---|---|
| **A — Conventional author editor first** | Book + chapters/scenes; comfortable formatting/navigation; durable save/reopen; basic text or Markdown export; non-AI drafting. | Strongest AI-off credibility, isolates editor reliability and data integrity before costly model work. | Does not yet validate signature Rules Studio; may resemble existing authoring tools without a differentiator. | Is this a *pilot milestone* only or the intended first public product? |
| **B — Editor + controlled AI writing pilot** **(recommended for comparative evaluation)** | Everything in A, **plus** a visible Rules Studio (preserved defaults plus personal custom rules), preview of active request, one familiar continue/rewrite action, and author review/accept/reject; minimal author-approved story facts for that scene; explicit provenance. | Tests distinctive promise and core author control together; avoids prematurely building every creative subsystem. | Frozen default pack has unresolved archival/AR mapping; provider/model pricing/privacy unchosen; story continuity needs realistic evidence; extra complexity may distract from the writing flow. | Should this define the initial integrated pilot, once source-pack and security gates are cleared? |
| **C — End-to-end book studio** | B plus full Story Bible, series timelines, multi-model/BYOK/MCP, rich DOCX/EPUB/PDF formatting and editable cover studio at first release. | Broader alignment with all long-term user interests. | Integrates many untested domains; licensing, performance, rights, security and cost risks accumulate; likely prevents clear diagnosis of failure and makes a "finished" claim harder to substantiate. | Is there observed market evidence that all components must launch together? None yet. |

**Provisional research recommendation:** Choose **A as the first internal engineering reliability milestone** and **B as the first integrated writer-facing pilot hypothesis**, after external author validation and the critical gates below. Preserve C as a **later product-completeness direction**, with the prominent cover and professional publishing requests still actively researched rather than silently discarded. This is a *sequencing proposal*; it is **not approval to cut covers/publishing from the product** or to choose an architecture.

## 4. Candidate B: proposed thin vertical author journey (not an approved feature list)

1. **Create/open a book** with a title and at least two navigable chapters or scenes.
2. **Write without AI** using the selected Tiptap foundation: plain/rich prose, headings, paragraph formatting, selection, keyboard behavior, undo, basic navigation and word counts; verify no unintended data loss.
3. **Save, reopen, export a portable safety copy** before performing irreversible operations. Candidate early format: plain text and/or Markdown; whether DOCX is *required* from day one is an unresolved user-validation question, **not a decision to exclude Word forever**.
4. **Review and control creative guidance**: view frozen defaults when certifiably packaged, toggle eligible rules, restore without changing source, and create/enable/disable at least one custom writing rule.
5. **Preview the effective AI request** for a selected, small scene. Separate author rules, actual story text, and verified author-entered facts; disclose omissions/conflicts.
6. **Invoke one familiar AI action** (continue or rewrite) on a defined passage using a *later approved* provider/integration. No hidden second action and no paid API committed by this proposal.
7. **Review a suggested change** without overwriting the author's current text. Accept/reject/undo should work even when the author edits while waiting; stale suggestions must not silently apply.
8. **Return to ordinary writing**, including with AI switched off. Preserve export/restore path and make failure states comprehensible.

A controlled **simulation** can test steps 1–5/7–8 before choosing a provider. **A real integration** can be claimed only after vendor choice, consent, privacy, cost caps and model evaluation. Never label fake generation or synthetic rules as verified real defaults.

## 5. Candidate feature priorities and proposed alternatives

| Feature group | A internal milestone | B integrated pilot | Production/other milestone | Evidence class |
|---|---|---|---|---|
| Book/chapter creation, navigation, rich-text, selection, keyboard and undo | Required hypothesis | Required hypothesis | Must be stable in public release | INT-07/09/10, ADR-0003 + analyst acceptance |
| Save/reopen, crash/data-loss recovery | Test local/disposable save first | Verifiable pilot persistence and recoverability | Production reliability/security gates | R04/R05/R15 additions; no storage chosen |
| Basic portable export | Test TXT/Markdown | Make trial authors' work retrievable | Formal DOCX and project portability still to decide | INT-18, R11 research; format choice unapproved |
| Frozen writing-quality defaults | Not needed for editor-only milestone | **Owner direction requires default-on once certifiably packaged** | Frozen pack source/identity gate | Owner-directed product behavior |
| Custom rules, per-book applicability, preview | Simulated UX may be tested | Strong candidate to validate | Hierarchy, presets, profile conflicts open | INT-05–06 and R06 research |
| One AI continue/rewrite operation, author approve | Not needed for editor-only milestone | Core differentiator hypothesis | Wider tools/model choice later | INT-03–04 + R03 patterns |
| Minimal author-confirmed scene facts | Optional notes | Restrained truth/POV test without automatic canon database | Long-range Story Bible and knowledge timelines later pending evidence | VEL-REQ-005/R07 |
| BYOK and model selection | Not needed | Possible pilot alternative, **not automatically required** | Distinct R08 research before commitment | INT-03/13; cost and privacy undecided |
| MCP interoperability | No | No unless trial evidence warrants | Permissioned external integration research | INT-14 and R09 |
| DOCX/EPUB/print-ready PDF book composition | Out of internal prototype | Still research; no production-format promise | R11/R12 validated publication workflow | INT-18–19/26 |
| Multiple cover concepts, editable design and image generation | Do not implement in editor spike | **Preserve as a visible research priority and test author demand** | Cover product/release boundary requires explicit owner approval | **INT-20–25**; not optional in strategic vision by default |
| Collaboration, subscriptions, complex automation | No | No absent trial needs | Separate research gates | R17/R18/R21; not approved |

**Alternatives to deferral:** If observed target authors demand immediate DOCX round-trip to participate, prioritize minimal verified Word workflow before real AI. If cover creation is essential to a validated first-purchase decision, reassess pilot B and research a narrower, genuinely editable cover experience; do not simply remove it for convenience. If no authors want configuration, test guided presets/onboarding instead of assuming 130 manual toggles are usable.

## 6. Risks, dependencies and blocking gates

| Gate | Needed before | Verified now? | What must be obtained |
|---|---|---|---|
| R01 exact frozen default pack / AR collisions | Claiming installed authentic default guidance | **NO** | Source provenance and owner-reviewed non-destructive packaging; preserve variants without rewriting |
| R02 interviews and observed author workflows | Selecting first public MVP confidently | **NO** | Representative novelist/serial/editor/non-AI perspectives, consented task observations, priority evidence |
| R05 real browser author experience | Declaring Tiptap editor usable for real book writing | **PARTIAL** | Actual browser typing, paste/undo, IME, accessibility, long chapters and loss/recovery tests |
| R06 instruction/quality effectiveness | Claiming configurable creative guidance improves prose | **PARTIAL: synthetic inclusion only** | Real model comparisons C0–C3, source-verified pack, blind ratings/intent criteria |
| R07 minimal POV/canon isolation | Advertising story-aware AI/continuity | **NO** | Explicit author facts, knowledge-boundary fixtures and false-positive assessment |
| R08 provider/BYOK cost and rights | Adding paid/real generation to a pilot | **NO** | Provider/version selection, API key threat model, retention, capped spending, failure recovery |
| R15 manuscript privacy and durability | Inviting users to put unpublished books in a persistent hosted system | **NO** | Data ownership, access policy, backups, deletion/export, incident and loss recovery |
| R11/12 document portability & printer specs | Marketing professional publishing/export | **NO** | Actual export validation and publishing-spec conformance |
| R13 cover/editor rights & author workflow | Advertising a built-in cover creator | **NO** | Editable design, source/license constraints, rights and author trials |
| R21 business feasibility | Commercial launch and pricing promises | **NO** | Feature costs and user willingness to pay, subscriptions vs BYOK calculations |
| R18 architecture comparison | Full platform stack decision | **NO** | Evidence-based technical constraints from user study and scoped pilot |

Research evidence already available: R03 vendor/community scan (nonrepresentative), R06 12-pass synthetic request contract (not model quality), and R05 seven-pass Tiptap 3 jsdom spike (not browser UX). Neither proves author preference, production readiness or commercial viability.

## 7. Source-driven non-negotiables vs hypotheses

**Confirmed owner direction (protect in all options):**
- Fiction/book writing primary; conventional editor useful with all AI off.
- Frozen historical guidance source preserved; defaults initially enabled in the *intended* author-facing guidance experience and individually controllable/customizable.
- Explicit author choice over suggestions and creative exceptions.
- Selected editing foundation is Tiptap 3/ProseMirror, **not a commitment to other architecture**.
- Book covers, visual design and print preparation are important product interests, not erased by a research sequencing proposal.
- Provider APIs and MCP are **distinct**; no speculative claim of compatibility.

**Hypotheses requiring owner review and writer evidence:**
- B's feature boundary and whether DOCX is necessary for earliest external trial.
- Number of chapters, sample material, initial scope granularity, and one vs multiple AI actions.
- Which story facts are needed in an early context preview.
- Who the primary first author segment is (novelists versus serial writers versus indie author-publishers).
- Research-gate thresholds, trial sizes and performance targets.
- Any pricing, onboarding, collaboration, export, cover-editor or model-vendor launch sequence.

## 8. Decision required and proposed review language

**Review question 1:** Is **A → B** an acceptable *research and pilot-sequencing direction*, without authorizing a product MVP or dropping the rest of the vision?  
**Review question 2:** Which author segment must the first outside pilot serve, and what minimum export/backup format would make it usable?  
**Review question 3:** Must a **cover design** or **editable DOCX workflow** appear in the first publicly usable release, or should those proceed on parallel research tracks to a later explicitly decided milestone?

**If approved:** record a named **product-scope decision** (not an architecture stack inference) and a first-pilot acceptance plan with dates/evidence; update requirements and current state.  
**If not approved:** preserve competing options and revise from author evidence; do not silently mark B the final MVP.

**No provider, architecture, database, publishing converter, cover engine, exact instruction taxonomy package or first public release scope is approved by this report.**
