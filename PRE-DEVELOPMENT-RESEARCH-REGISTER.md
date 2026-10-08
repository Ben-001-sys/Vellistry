# Vellistry — Pre-Development Research Register

**Status:** RESEARCH BACKLOG / NOT YET APPROVED
**Project:** Fiction Writing App (working product name: Vellistry)
**Prepared:** October 8, 2026
**Primary reference:** [FIction writing App — Google Doc](https://docs.google.com/document/d/10Pbsw5w0jNpthSL3_cnuOw2WiiUrtTBqmPUgWyPm18k/edit)

## Scope and decision boundary

This records **questions to research**, not results, implemented features, finalized requirements, a development plan, a technology stack, a repository structure, or approved architecture. Earlier documents contain provisional architectural examples and recommendations; none is adopted by this register. Avoid choosing a database, framework, editor, MCP topology, hosting model, project folders, or deployment approach until options are researched and approved.

**Source basis:** Existing Google Doc Parts I–IX; the supplied *AI Writing App Blueprint* conversation export; prior long-form reader-problem and fiction-system research documented in the Google Doc. Items necessary to responsibly investigate the resulting product (security, licensing, user validation, financial feasibility, legal risk) are additions to the research agenda, **not claims verified by those sources**.

**How to track:** All items start as OPEN / NEEDS RESEARCH. Record a dated research note, real evidence (official documentation, user interview, benchmark, test or expert review), alternatives, risk, expected cost, constraints, conclusion, and explicit approval status before treating a proposed choice as decided. Update changed third-party policies at decision time.

**Priority gates:** G0 = before committing to product scope or architecture; G1 = before implementing or promising the associated feature; G2 = optional/later-stage opportunity investigation. G1/G2 research may proceed in parallel, but should not block basic problem discovery or safe exploratory prototypes.

**Owner/stack/timeline:** Not assigned or finalized.

## Research inventory

## R01 — Source audit and research provenance

**Research gate:** G0 — Before committing to product scope or architecture  
**Status:** OPEN / NEEDS RESEARCH

- [ ] **R01.01** Inventory every original fiction-guidance document, source conversation, archive, and project artifact; distinguish duplicates from unique sources.
- [ ] **R01.02** Reconcile the earlier archive gaps: standalone Domain 1, Domain 13, separately numbered post-draft module, and unusually short Story Bible PDF; verify contents before assuming a missing concept.
- [ ] **R01.03** Compare the 13-domain/130-lens index, 40 principles, full long-form manuals, and Google Doc synthesis for missing or abbreviated information.
- [ ] **R01.04** Recover or independently verify the previously referenced 20-section/42-requirement research blueprint; do not treat its download link as an audited standalone source until obtained.
- [ ] **R01.05** Record a source citation, version, authority, and confidence for each proposed requirement and industry/legal assertion.
- [ ] **R01.06** Separate author-confirmed needs, observed reader complaints, hypotheses, technology recommendations, and unverified third-party claims.
- [ ] **R01.07** Define how later research updates supersede earlier findings without erasing original wording or the history of decisions.

**Expected research output:** Audited source inventory, gap log, evidence ledger and requirements traceability baseline.

## R02 — Authors, segments and real workflows

**Research gate:** G0 — Before committing to product scope or architecture  
**Status:** OPEN / NEEDS RESEARCH

- [ ] **R02.01** Interview/observe novelists, serial/web-fiction authors, indie publishers, editors, and authors who do not use AI; distinguish needs rather than assuming one universal user.
- [ ] **R02.02** Study how writers move from idea to outline, worldbuilding, drafting, revision, beta feedback, formatting, covers, print, and release.
- [ ] **R02.03** Map daily writing in Google Docs, Word, Scrivener, Reedsy Studio, and other tools; identify indispensable editing interactions.
- [ ] **R02.04** Validate pain points with long novels, series, fragmented story canon, extensive revisions, project rules, and context loss.
- [ ] **R02.05** Test whether writers will actually configure a visual Rules Studio and how much setup is acceptable before drafting.
- [ ] **R02.06** Understand authors' privacy, ownership, AI-disclosure, genre expectations, and reluctance to entrust unpublished manuscripts to a service.
- [ ] **R02.07** Identify primary platform, device, connectivity, accessibility, region, language, and payment constraints; include emerging-market use cases.

**Expected research output:** User segments, journey maps, prioritized jobs-to-be-done, and cited interview findings.

## R03 — Competitors, gaps and positioning

**Research gate:** G0 — Before committing to product scope or architecture  
**Status:** OPEN / NEEDS RESEARCH

- [ ] **R03.01** Compare general document editors, specialist novel-writing tools, AI-writing assistants, story databases, formatting tools, and cover products using current hands-on trials.
- [ ] **R03.02** Include Google Docs, Microsoft Word, Scrivener, Reedsy Studio, Atticus, Vellum, Novelcrafter, Sudowrite, Dabble, Plottr and other relevant competitors as candidates for investigation—not assumed equivalents.
- [ ] **R03.03** Benchmark editing depth, manuscript navigation, revisions, autosave, import/export, rules customization, persistent context, model choice, pricing and lock-in.
- [ ] **R03.04** Review community reports and user complaints in Reddit, Royal Road, Kindle/KDP and serial-fiction communities; mark anecdote versus independent confirmation.
- [ ] **R03.05** Determine whether a commercial product already provides author-configurable scoped rules, reliable knowledge boundaries, and full word processing in one experience.
- [ ] **R03.06** Test meaningful differentiation without claiming novel features are unique until a competitor check supports it.
- [ ] **R03.07** Investigate conversion barriers, willingness to pay, migration expectations, and the strength of a non-AI editing value proposition.

**Expected research output:** Current feature-by-feature competitor matrix and a defensible positioning hypothesis.

## R04 — Product boundaries, MVP and acceptance criteria

**Research gate:** G0 — Before committing to product scope or architecture  
**Status:** OPEN / NEEDS RESEARCH

- [ ] **R04.01** Identify which capabilities are true author needs versus interesting but optional additions; do not treat every brainstormed feature as a commitment.
- [ ] **R04.02** Define the smallest credible author experience that remains valuable with AI disabled.
- [ ] **R04.03** Determine which rules, continuity, AI suggestions, book composition, and cover activities must work together in an initial test versus being researched for later.
- [ ] **R04.04** Specify out-of-scope features, assumptions, dependencies, and manual alternatives to avoid feature-count bloat.
- [ ] **R04.05** Rank opportunities by author value, severity of pain point, measurable reliability, operating cost and integration risk.
- [ ] **R04.06** Design small user trials to test the proposed first milestone of manuscript editing plus Rules Studio against alternatives before approving sequencing.
- [ ] **R04.07** Set observable acceptance criteria for manuscript preservation, writer control, continuity correctness, export validity, trust and ease of use.
- [ ] **R04.08** Identify the explicit approval gate that will convert research findings into a product requirement and later an architecture decision.

**Expected research output:** Validated opportunity map, scope options and measurable product acceptance gates.

**Research checkpoint — 2026-10-08 (PARTIAL, NOT APPROVED):** [R04 candidate A/B/C scope comparison](docs/research/R04-FIRST-USABLE-RELEASE-SCOPE-OPTIONS-2026-10-08.md) and [R04 author-trial/acceptance protocol](docs/research/R04-FIRST-PILOT-AUTHOR-TRIAL-AND-ACCEPTANCE-PLAN-2026-10-08.md) have been drafted from source-derived owner intent, existing editor/rules research and clearly marked analyst hypotheses. Twelve proposed author tasks and a provisional editor-only → controlled-AI-pilot sequence are documented; **no user trials occurred and no MVP/feature sequence has been approved**. Preserve all eight R04 questions as open until owner decision and actual acceptance evidence.


## R05 — Professional manuscript editor and authoring UX

**Research gate:** G0 — Before committing to product scope or architecture  
**Status:** OPEN / NEEDS RESEARCH

- [ ] **R05.01** Hands-on prototype commercially usable rich-text editor candidates including Tiptap, ProseMirror, Lexical, BlockNote, CKEditor 5 and ONLYOFFICE; compare against real novel-editing tasks.
- [ ] **R05.02** Verify current licenses, extension-by-extension entitlements, trademark notices, source obligations, recurring fees and redistribution terms.
- [ ] **R05.03** Test typography, styles, headings, indents, spacing, lists, alignment, breaks, tables/footnotes where needed, and keyboard shortcuts.
- [ ] **R05.04** Test chapter/scene navigation, selection behavior, search/replace, long-document performance, large copy/paste, IME, and undo/redo.
- [ ] **R05.05** Test autosave, offline interruption, conflict restoration, crashes, revision comparisons, comments and tracked edits without data loss.
- [ ] **R05.06** Investigate writing view versus fixed-page print-layout view, page breaks, pagination, facing pages, headers, footers and widow/orphan control.
- [ ] **R05.07** Evaluate access to plain text, semantic structured document data and clean DOCX/EPUB/PDF outputs; do not conflate editor rendering with print typesetting.
- [ ] **R05.08** Check desktop, mobile/tablet, accessibility, screen readers, focus mode, and author-preferred shortcuts with representative users.
- [ ] **R05.09** Prototype use of author-specific annotations and AI proposed edits without corrupting rich-text structure or selection positions.

**Expected research output:** Editor proof-of-concepts, commercial license matrix and task-based decision report.

## R06 — Visual Rules Studio and instruction governance

**Research gate:** G0 — Before committing to product scope or architecture  
**Status:** OPEN / NEEDS RESEARCH

- [ ] **R06.01** Verify which of the 130 lenses, 40 principles and author-specific rules should be represented as reusable, optional guidance rather than hard prohibitions.
- [ ] **R06.02** Research intuitive rule editing: title, purpose, scope, examples, triggers, severity, exceptions, priority, enable/disable and history.
- [ ] **R06.03** Test workspace/series/book/chapter/scene rule inheritance and conflict resolution with clear previews of the effective instructions.
- [ ] **R06.04** Distinguish writing guidance from approved canon facts, story-state updates, editorial warnings and binding author requests.
- [ ] **R06.05** Investigate rule profiles, bulk changes, importing/exporting rules, and how sample passages can demonstrate intended effects.
- [ ] **R06.06** Assess model-dependent compliance and how to report uncertain compliance without falsely claiming the AI obeyed every rule.
- [ ] **R06.07** Determine when rule retrieval should be selective so giant prompt lists do not dilute current chapter context.
- [ ] **R06.08** Test writer override, deliberate exceptions, false positives, historical rule versions and no-silent-enforcement safeguards.

**Expected research output:** Rule UX prototype, rules taxonomy mapping, conflict examples and test cases.

## R07 — Story Bible, canon, memory and long-form consistency

**Research gate:** G0 — Before committing to product scope or architecture  
**Status:** OPEN / NEEDS RESEARCH

- [ ] **R07.01** Model competing concepts—accepted manuscript truth, planned future possibilities, uncertain narrator beliefs, hypotheses and retcons—without prematurely approving a database schema.
- [ ] **R07.02** Evaluate character baseline identity versus changing physical/emotional state and learned knowledge with source and time boundaries.
- [ ] **R07.03** Study relationship memory, obligations, social networks, secondary cast autonomy and story-specific language changes.
- [ ] **R07.04** Test timeline, geography, object/inventory state, injuries, numerical quantities, world rules, physical consequences and scene-to-scene continuity.
- [ ] **R07.05** Investigate separate chapter/scene state, open narrative threads, promised setups/payoffs, subplot independence, causality and delayed consequences.
- [ ] **R07.06** Compare manual ledgers, structured records, contextual retrieval, full-text search, semantic search and provenance links for correctness, speed and cost.
- [ ] **R07.07** Design writer approval for newly inferred facts and revision-impact analysis; draft suggestions must not silently become canon.
- [ ] **R07.08** Test contradictory sources, narrator unreliability, mistaken memories, ambiguity, explicit author retcons and fiction-specific exceptions.
- [ ] **R07.09** Study short-, middle-, and long-range anti-repetition audits while avoiding generic AI-tell detection and style homogenization.
- [ ] **R07.10** Measure continuity precision/recall, false positive fatigue and writer trust on actual long manuscripts.

**Expected research output:** Story-intelligence concept model, annotated manuscript tests and continuity evaluation set.

## R08 — AI providers, BYOK and model interoperability

**Research gate:** G1 — Before implementing or promising the associated capability  
**Status:** OPEN / NEEDS RESEARCH

- [ ] **R08.01** Verify current API availability, pricing, terms, context limits, capabilities and rate limits for relevant providers, including OpenAI, Anthropic and DeepSeek.
- [ ] **R08.02** Distinguish consumer chat subscriptions, API billing, tool calling and any model-host restrictions; do not promise subscription reuse.
- [ ] **R08.03** Test how user-supplied API keys can be safely added, tested, rotated, removed and billed without leaking credentials.
- [ ] **R08.04** Benchmark outline planning, chapter continuation, selective rewriting, editorial audit and large-context retrieval across models.
- [ ] **R08.05** Research model selection UX, estimated versus actual usage, provider fallback, streaming, latency, structured output and failures.
- [ ] **R08.06** Investigate rights and data-use defaults per provider, geographical availability, retention, safety filters and content ownership.
- [ ] **R08.07** Evaluate cost safeguards, user budgets, confirmation for large operations, caching and token-efficient context construction.
- [ ] **R08.08** Measure whether distinct models respect rule scopes, POV limits, authorized changes and consistent narrative state.

**Expected research output:** Provider capability/licensing matrix, BYOK threat model and representative model benchmarks.

## R09 — MCP, external assistants and third-party tools

**Research gate:** G1 — Before implementing or promising the associated capability  
**Status:** OPEN / NEEDS RESEARCH

- [ ] **R09.01** Verify current MCP support in ChatGPT, Claude and any other targeted host by plan, connection type, tool permission and deployment requirements.
- [ ] **R09.02** Investigate MCP client versus MCP server roles and how they differ from calling a provider's model API.
- [ ] **R09.03** Identify genuinely useful manuscript tools for read, search, chapter context, candidate patch, proposed canon change and audit without enabling silent edits.
- [ ] **R09.04** Test OAuth or other supported authentication, per-user/project authorization, token lifetime, revocation and least-privilege capabilities.
- [ ] **R09.05** Evaluate prompt-injection, tool-output trust, resource leakage, cross-book and cross-tenant isolation, and unauthorized write risks.
- [ ] **R09.06** Confirm whether image/design/publishing integrations, including Canva MCP, can legally support the desired use cases and commercial competitive boundaries.
- [ ] **R09.07** Test permissions, host UX, auditability, rate limits, network costs, failures and portability with real hosts rather than architectural assumptions.
- [ ] **R09.08** Define clear human-approval semantics for any external assistant changing text, metadata, rules or continuity.

**Expected research output:** MCP feasibility matrix, permission model hypotheses and proof-of-concept outcomes.

## R10 — AI edit proposals, reversibility and provenance

**Research gate:** G1 — Before implementing or promising the associated capability  
**Status:** OPEN / NEEDS RESEARCH

- [ ] **R10.01** Evaluate inline selection edits versus alternative chapter drafts, multi-choice suggestions, margin comments and whole-book analysis.
- [ ] **R10.02** Study robust rich-text diffs, semantic changes, formatting preservation and proposals that refer to stale manuscript revisions.
- [ ] **R10.03** Test explicit accept/reject/undo, branch comparison, version rollback and dependency warnings before changing future canon.
- [ ] **R10.04** Determine what provenance a writer actually wants: model/version, prompt intent, effective rules, cited facts, cost, approval and reviewer.
- [ ] **R10.05** Investigate how to protect deliberate voice, ambiguity, POV boundaries and legitimate artistic exceptions from overcorrection.
- [ ] **R10.06** Test behavior when overlapping model suggestions conflict or when an AI request is interrupted and retried.
- [ ] **R10.07** Distinguish automated quality flags from verified factual contradictions and avoid misleading AI-authorship scoring.
- [ ] **R10.08** Define audit retention, privacy and how authors export or remove AI usage metadata.

**Expected research output:** Reviewed editing interaction prototypes and change-safety test cases.

## R11 — Manuscript import, migration and portability

**Research gate:** G1 — Before implementing or promising the associated capability  
**Status:** OPEN / NEEDS RESEARCH

- [ ] **R11.01** Survey import fidelity for DOCX, plain text, Markdown, HTML, EPUB where lawful/appropriate, and existing author archives.
- [ ] **R11.02** Investigate conversion of manuscript structure into series/book/part/chapter/scene without destroying headings, footnotes, comments or intentional formatting.
- [ ] **R11.03** Design review of imported Story Bible, rule sets, ledgers, long-form fiction manuals and source-provenance records.
- [ ] **R11.04** Test malformed files, duplicate and contradictory facts, missing referenced pages, partial ZIP archives and unreadable character encodings.
- [ ] **R11.05** Evaluate export of a complete portable author project—manuscript, structure, canon, rules, history and design assets—without vendor lock-in.
- [ ] **R11.06** Study round-trip fidelity (import → edit → export → reopen), backup/restore and forward migration across future app versions.
- [ ] **R11.07** Identify copyright and consent boundaries for importing third-party or purchased materials.
- [ ] **R11.08** Decide what import/export guarantees can actually be delivered at the product's first public release.

**Expected research output:** Import/export test corpus, fidelity scorecard and data-portability requirements.

## R12 — Book composition, ebook formats and print production

**Research gate:** G1 — Before implementing or promising the associated capability  
**Status:** OPEN / NEEDS RESEARCH

- [ ] **R12.01** Research output needs for reflowable EPUB 3, web serial/HTML, reader PDF, submission DOCX and production print PDF.
- [ ] **R12.02** Compare professional formatter and ebook production tools; identify freely usable libraries with current commercial rights.
- [ ] **R12.03** Study typography, metadata, table of contents, chapter openings, front/back matter, hyperlinks and accessibility semantics by format.
- [ ] **R12.04** Research page size/trim, margins, gutters, bleed, font embedding, widow/orphan management, running headers, page numbers and printer-specific requirements.
- [ ] **R12.05** Reverify Amazon KDP and other intended print/distribution vendors' latest specs, including covers, spine widths, resolution and template constraints.
- [ ] **R12.06** Test sample books for EPUB validation, print preflight, correct font embedding, image quality and reader-device compatibility.
- [ ] **R12.07** Investigate preview parity versus exported outputs and how to communicate unavoidable differences between reflowable and fixed-layout products.
- [ ] **R12.08** Study pagination and design change impact when text revisions alter page count, TOCs, running heads and cover spine width.
- [ ] **R12.09** Identify whether ISBN, metadata, pricing, copyright and submission workflows are in product scope or only guidance.

**Expected research output:** Format-specific requirements, sample export comparison and validation checklist.

## R13 — Cover design, image assets and originality

**Research gate:** G1 — Before implementing or promising the associated capability  
**Status:** OPEN / NEEDS RESEARCH

- [ ] **R13.01** Interview authors/designers about layered editing, multiple directions, typography, image control, crop, color and layout workflows.
- [ ] **R13.02** Compare commercially usable 2D/canvas libraries such as Konva and Fabric.js, including export, performance, object layers and licensing.
- [ ] **R13.03** Research editable front cover, spine, back cover, barcode-safe areas, trim, bleed, paper stock and printer calculation needs.
- [ ] **R13.04** Evaluate text/font licensing, commercial image generation rights, asset provenance, stock licensing and whether outputs may be redistributed.
- [ ] **R13.05** Test generated cover originality, genre fit, thumbnail legibility and professional typography without claiming perfect plagiarism detection.
- [ ] **R13.06** Assess image-provider cost and how editing layers remain separate when AI generates or revises artwork.
- [ ] **R13.07** Verify Canva or other external design integration agreements, including MCP use restrictions for competing design tools.
- [ ] **R13.08** Study accessibility, print color management, export resolution, design template rights and trademark/logo usage.

**Expected research output:** Design editor feasibility prototypes, rights matrix and sample cover quality assessments.

## R14 — Legal, copyright, disclosure and publishing policy

**Research gate:** G0 — Before committing to product scope or architecture  
**Status:** OPEN / NEEDS RESEARCH

- [ ] **R14.01** Research authorship, AI-generated/AI-assisted content treatment and copyright uncertainty across intended jurisdictions.
- [ ] **R14.02** Review publication-platform AI disclosure, generative content, plagiarism, spam and quality policies for target marketplaces and web-serial platforms.
- [ ] **R14.03** Check current rules for software license obligations, open-source redistribution, editor extensions, fonts, icons, design assets and datasets.
- [ ] **R14.04** Assess user manuscripts as confidential intellectual property; clarify contractual ownership and terms for AI-assisted edits and stored project materials.
- [ ] **R14.05** Investigate whether training on user manuscripts could occur under each selected external provider's terms and how to obtain informed consent.
- [ ] **R14.06** Review privacy, data localization, age/children implications and applicable Ghana/international data-protection obligations based on target users.
- [ ] **R14.07** Examine regulated payments, subscription taxes, refunds, consumer rights, billing and cross-border trade only once commercial geography is set.
- [ ] **R14.08** Evaluate trademark clearance, confusingly similar brands, advertising claims and any promises about AI detection or publication compliance.
- [ ] **R14.09** Identify legal review needs and keep legal claims dated and sourced; the checklist itself is not legal advice.

**Expected research output:** Jurisdiction-specific legal risk register and external counsel questions.

## R15 — Privacy, security and manuscript trust

**Research gate:** G0 — Before committing to product scope or architecture  
**Status:** OPEN / NEEDS RESEARCH

- [ ] **R15.01** Threat-model unpublished manuscripts, series canon, private prompts, API keys, design assets and editor revision history.
- [ ] **R15.02** Research authentication, permissions, collaborator invitations and cross-user/project isolation against unauthorized read or write.
- [ ] **R15.03** Evaluate encryption at rest/in transit, key management, secret masking, revocation, backup encryption and incident response requirements.
- [ ] **R15.04** Define author expectations about data retention, deletion, account export, third-party model disclosure and subprocessors.
- [ ] **R15.05** Investigate malicious prompt injection from imported documents, retrieved web content and connected MCP tools.
- [ ] **R15.06** Research safe rich-text handling, uploads, media/image parsing, file scanning, XSS, content-security policies and sandboxing for previews.
- [ ] **R15.07** Evaluate abuse prevention, spending limits, rate limiting and protecting authors from unexpected BYOK or platform-billed charges.
- [ ] **R15.08** Test loss and recovery scenarios: sync conflict, device failure, offline changes, failed export, version restore and accidental deletion.
- [ ] **R15.09** Decide which actions must be logged for audit and support without storing private prose or credentials unnecessarily.

**Expected research output:** Threat model, trust requirements, risk-ranked security backlog and recovery acceptance tests.

## R16 — Accessibility, reading comfort and device behavior

**Research gate:** G1 — Before implementing or promising the associated capability  
**Status:** OPEN / NEEDS RESEARCH

- [ ] **R16.01** Research inclusive editor controls for keyboard-only users, screen readers, visible focus, zoom and accessible rich-text semantics.
- [ ] **R16.02** Test dark/light reading themes, serif/sans choices, line width, spacing, contrast and long-writing ergonomics.
- [ ] **R16.03** Check whether serious authors need desktop-first editing, tablet writing, mobile revision or all three; test rather than assume.
- [ ] **R16.04** Investigate localization, language tools, multilingual typography, input methods and right-to-left or non-Latin script requirements.
- [ ] **R16.05** Test offline and intermittent-connectivity scenarios, mobile data costs and low-spec devices.
- [ ] **R16.06** Define loading/progress/error feedback for long AI, import, save and export operations.
- [ ] **R16.07** Investigate distraction-free workflows and cognitive load of layered rules, alerts and multiple AI suggestions.
- [ ] **R16.08** Define accessibility evaluation standards and representative user trials.

**Expected research output:** Accessibility and usability test plan with device/connectivity coverage.

## R17 — Collaboration, editorial feedback and author roles

**Research gate:** G2 — Validate as a later-stage opportunity; not a precondition for a first prototype  
**Status:** OPEN / NEEDS RESEARCH

- [ ] **R17.01** Assess whether authors actually need simultaneous editing, beta-reader access, editor review, or simple comment-only sharing.
- [ ] **R17.02** Test comments, suggestions, tracked changes, reviewer attribution and approval boundaries around accepted manuscript text.
- [ ] **R17.03** Investigate collaborator permission levels and differences between manuscript read, canon edit, rules edit, cover edit and publication export.
- [ ] **R17.04** Evaluate merge/conflict behavior for simultaneous changes and high-stakes canonical facts.
- [ ] **R17.05** Study editorial handoff expectations for DOCX export, external proofreaders and professional book designers.
- [ ] **R17.06** Clarify team/workspace billing, ownership of shared books and collaborator removal effects.
- [ ] **R17.07** Determine which collaboration tasks can be postponed without undermining product trust.

**Expected research output:** Validated collaboration use cases and permission acceptance criteria.

## R18 — Architecture alternatives and technical feasibility — research only

**Research gate:** G0 — Before committing to product scope or architecture  
**Status:** OPEN / NEEDS RESEARCH

- [ ] **R18.01** Identify measurable constraints and decision criteria before discussing frameworks, languages, data stores, hosting or deployment.
- [ ] **R18.02** Compare architectural approaches for browser-based editing, persistence, rich-text document versions and background processing with small prototypes.
- [ ] **R18.03** Evaluate structured story state versus search/retrieval approaches and what should be authoritative; avoid approving database or schema from a proposed sketch.
- [ ] **R18.04** Investigate long-manuscript performance, incremental saves, transaction boundaries, content consistency and migration evolution.
- [ ] **R18.05** Research viable AI integration patterns, long-running audits, external tool permissions and publishing pipelines without preselecting service boundaries.
- [ ] **R18.06** Test operational constraints including preview generation, image storage, print rendering, rate limits and provider failures.
- [ ] **R18.07** Assess build-versus-buy and commercial licensing for every substantial library, extension, formatting engine and editor component.
- [ ] **R18.08** Compare development complexity, accessibility, community health, maintenance burden, portability and hosting costs for credible options.
- [ ] **R18.09** Document architectural decisions only after measured trade-offs and explicit project approval; this section commits to no tech stack, services, folders or repository layout.

**Expected research output:** Architecture option studies and prototype evidence, expressly pending decisions.

## R19 — Evaluation, test corpus and release quality

**Research gate:** G1 — Before implementing or promising the associated capability  
**Status:** OPEN / NEEDS RESEARCH

- [ ] **R19.01** Construct consented sample stories in multiple genres, voices, narrative POVs, lengths and series configurations; do not use unauthorized proprietary datasets.
- [ ] **R19.02** Build tests for rules scope precedence, legitimate exceptions, author-approved retcons, and behavior across competing models.
- [ ] **R19.03** Test false-positive and false-negative behavior for viewpoint knowledge, timelines, injuries, objects, relationship histories and unresolved threads.
- [ ] **R19.04** Measure anti-repetition, dialog naturalness, emotional progression and voice-preservation checks with human editors rather than unsupported AI-tell labels.
- [ ] **R19.05** Benchmark editor durability over long manuscripts, repeated revisions, imports, copy/paste, crashes and offline recovery.
- [ ] **R19.06** Test all targeted output formats and print profiles using independent validators and visual proofing.
- [ ] **R19.07** Verify that unauthorized integrations cannot silently alter text or access another project.
- [ ] **R19.08** Define pass/fail release gates, issue severity, reproducible bug examples and versioned evaluation reports.

**Expected research output:** Evaluation corpus, benchmark definitions, acceptance plan and safety test scenarios.

## R20 — Brand, domain, identity and distribution channels

**Research gate:** G0 — Before committing to product scope or architecture  
**Status:** OPEN / NEEDS RESEARCH

- [ ] **R20.01** Keep Vellistry provisional while running exact, phonetic and visually similar trademark searches in intended regions.
- [ ] **R20.02** Check WIPO, relevant national trademark offices, Ghana company/name requirements and suitable software/service trademark classes.
- [ ] **R20.03** Confirm availability and ongoing cost of vellistry.com, vellistry.app, vellistry.studio, vellistry.ai and usevellistry.com.
- [ ] **R20.04** Check social handles, app-store names, search collisions, pronunciation, typo risk and international meaning.
- [ ] **R20.05** User-test preferred tagline ('Every story, unmistakably yours.') and alternative voice/copy; do not claim exclusivity without clearance.
- [ ] **R20.06** Validate palette, typography, logo concept, contrast, brand accessibility, and the difference between writing software and a publishing house.
- [ ] **R20.07** Research early acquisition channels, writer communities, creator partnerships and how to demonstrate value without overpromising AI capabilities.

**Expected research output:** Brand-clearance evidence, positioning findings and an explicit naming decision.

## R21 — Pricing, operations, sustainability and project governance

**Research gate:** G0 — Before committing to product scope or architecture  
**Status:** OPEN / NEEDS RESEARCH

- [ ] **R21.01** Estimate costs for the minimum credible experience: storage, backups, previews, large exports, model calls, design generation, outbound integrations and support.
- [ ] **R21.02** Research user willingness to pay for no-AI writing features versus BYOK AI and platform-billed services.
- [ ] **R21.03** Compare free, subscription, usage-based and hybrid models; quantify exposure to expensive full-manuscript analysis.
- [ ] **R21.04** Assess staffing, maintenance, dependency risk, support burden, uptime, incident response and funding constraints.
- [ ] **R21.05** Plan research deliverables, scope approval, decision ownership and evidence expiry without choosing development architecture yet.
- [ ] **R21.06** Define success signals for private alpha, measurable UX/continuity improvements, and what would justify paid launch.
- [ ] **R21.07** Establish change-control: recommendations are not binding decisions; each accepted decision needs owner, date, supporting evidence, alternatives and reversibility.

**Expected research output:** Cost scenarios, feasibility gate, research owner map and future decision process.

## R22 — High-value differentiators and future opportunities

**Research gate:** G2 — Validate as a later-stage opportunity; not a precondition for a first prototype  
**Status:** OPEN / NEEDS RESEARCH

- [ ] **R22.01** Research whether narrative-debt trackers help writers maintain unresolved questions and promised payoffs in practical workflows.
- [ ] **R22.02** Test a character-knowledge firewall that flags anachronistic knowledge without confusing omniscience, inference or unreliable narrators.
- [ ] **R22.03** Explore scene-function and multi-scale repetition analysis versus normal structural variation and artistic repetition.
- [ ] **R22.04** Study authorial-voice protection that compares edits without locking authors into old habits or suppressing useful revision.
- [ ] **R22.05** Investigate publication change-impact warnings, causal graphs, timeline views, alternate chapter branches and contextual provenance views.
- [ ] **R22.06** Evaluate cross-series canon reuse, long-range artistic-identity audits and individualized guidance profiles.
- [ ] **R22.07** Assess feature cost, false-alarm burden, explainability and willingness to use before promising them as launch features.

**Expected research output:** Differentiator experiment proposals prioritized by evidence, not feature count.

## Recommended research order, without locking implementation

1. **Inventory and validate the real problem:** R01, R02, R03, R04. Preserve archival facts and validate users' actual workflows and pain points.
2. **Prove the defining product interactions:** R05, R06, R07, R09, R10. Use limited evidence-gathering prototypes; no architectural adoption is implied.
3. **Clear critical trust, rights, and feasibility risks:** R14, R15, R18, R20, R21. Record unverified and jurisdiction-specific points.
4. **Research remaining feature dependencies before committing them:** R08, R11, R12, R13, R16, R17, R19.
5. **Keep optional differentiators provisional:** R22 until user evidence justifies them.

## Minimum approval packet before full development

- Verified source inventory, gap resolution plan, and requirements provenance.
- Evidence-backed target users, competitive gaps and measurable project goals.
- Prioritized scope candidates, explicit exclusions and product acceptance tests.
- Trial results for an author-grade editor and visual rule configuration; relevant licenses checked.
- High-level story-state, AI/MCP, export and security feasibility/risk evidence sufficient to identify major blockers.
- Viable cost and operating envelope, current legal and publication compliance risks, brand clearance plan.
- Written list of unresolved choices and explicit owner approval before an architecture/stack or milestone plan is finalized.

## Evidence entry template

- **ID / question:**
- **Status:** OPEN | IN RESEARCH | EVIDENCE COLLECTED | DECISION PROPOSED | APPROVED | DEFERRED | BLOCKED
- **Research owner and review date:**
- **Claim or hypothesis / why it matters:**
- **Evidence + sources (with check date):**
- **Options compared / user testing / reproducible experiment:**
- **License/policy/cost/security constraints:**
- **Conclusion and uncertainties:**
- **Recommendation (not yet a decision):**
- **Approver, approved decision and rationale (only when explicitly approved):**

## Explicit non-decisions

No technology stack, architecture, framework, database, model provider, editor engine, print engine, data schema, licensing model, payment provider, deployment provider, repository layout, folder tree, developer workflow, or launch sequence has been settled. Initial findings in the source blueprint are candidates for evaluation only. No code has been generated and no feature has been promised by this register.
