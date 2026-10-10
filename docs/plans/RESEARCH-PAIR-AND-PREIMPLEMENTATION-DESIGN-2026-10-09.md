---
id: VEL-PLAN-RESEARCH-DESIGN-FIRST-20261009-001
type: delivery-sequencing-plan
status: owner-directed
created_at: 2026-10-09
updated_at: 2026-10-10
owner: project_owner
author: project-research
version: 1.0.1
sources:
  - "Fiction Writing Project, 2026-10-09. Owner: 'we are going to be doing the research in two at a time we have to finishes the neccessary reseaches before we begin and also before we beginnwe are going to have design UI usign figma make, lovable, etc'. Original chat permalink not archived."
  - "PRE-DEVELOPMENT-RESEARCH-REGISTER.md (R01–R22)"
  - "docs/research/MVP-READINESS-GATES-AND-ARCHITECTURE-DECISION-QUESTIONS-2026-10-09.md (G01–G10)"
  - "docs/requirements/MVP-SCOPE-DECISION-2026-10-09.md (eight owner-approved MVP areas)"
  - "https://github.com/Ben-001-sys/Vellistry/pull/28 (existing implementation scaffold)"
  - "https://github.com/Ben-001-sys/Vellistry/pull/29 (K2A security experiment)"
related_research:
  - R01
  - R02
  - R03
  - R05
  - R06
  - R07
  - R08
  - R10
  - R11
  - R14
  - R15
  - R16
  - R18
  - R19
  - R21
related_adrs:
  - ADR-0003
  - ADR-0004
  - ADR-0006
related_requirements:
  - VEL-PRODUCT-SCOPE-20261009-001
---

# Vellistry — Two research tracks at a time, UI design before implementation

## Integration annotation — 2026-10-10

**Original policy remains owner-directed.** Six research-pair PRs have been merged into `main`, together with implementation scaffold [#28](https://github.com/Ben-001-sys/Vellistry/pull/28) and the stacked experimental security PRs [#29](https://github.com/Ben-001-sys/Vellistry/pull/29), [#32](https://github.com/Ben-001-sys/Vellistry/pull/32), [#34](https://github.com/Ben-001-sys/Vellistry/pull/34) and [#36](https://github.com/Ben-001-sys/Vellistry/pull/36). This **does not** retrospectively prove research acceptance, authorize implementation, or imply a Figma design was approved. The scaffold merges diverged from the earlier no-implementation-merge hold; record the variance without rewriting history.

**The six-pair table below is the historical starting sequence, not current PR state.** Latest merge facts, open research questions, design-vs-implementation-vs-release classification and the owner-ready proposal are in [Six-pair design gate](../research/SIX-PAIR-RESEARCH-TO-DESIGN-GATE-2026-10-09.md) and [Design-entry decision brief](DESIGN-ENTRY-DECISION-2026-10-10.md). Until a new owner decision is recorded, the **design-first feature-implementation hold continues**. No concept design, live model use, deployment or research-deferral approval is inferred from this annotation.

## Latest owner instruction and precedence

The owner directed research to proceed **two workstreams at a time**, completion of **necessary** preimplementation research **before proceeding**, and a **separate UI/UX design phase using Figma Make, Lovable and related tools before implementing the full application**.

This **supersedes the earlier instruction to move directly from initial planning into feature implementation by 22:30 on 2026-10-09**. The prior deadline is historical and does **not** authorize overriding the newly required research and design gates. Do not invent a new completion date. The owner's previously selected **Next.js + NestJS + Supabase** stack and the approved eight-area MVP remain in force; only execution order changes.

**No new product feature implementation, production data migration, merge/promotion of implementation-only code, or deployment until the research gate and owner-reviewed design gate pass.** Documentation, test-fixture experiments, mock UI/UX prototypes, technical feasibility demonstrations and CI corrections remain permitted as research evidence. At the time of this 2026-10-09 directive, scaffold PR #28 and K2 experiment PR #29 were unmerged. They were merged 2026-10-10 in a process variance, and their code/builds still do not count as completion of research or design.

## Exactly two active primary workstreams

- At any given time, **maximum two** primary research records are `ACTIVE`, one for each workstream. A pair is an execution unit; finish its required outputs, evidence, blockers and owner decisions before opening the next pair.
- A workstream may group strongly dependent registry IDs (e.g. R05+R16 as one editor/UX study) but must name **one deliverable and one acceptance check**; this is still one of the two.
- Each research record carries: source/provenance, central question, hypothesis, experiment/protocol, actual artifacts/results, licensing/cost/privacy analysis where relevant, limitations, status (`PASS`, `FAIL`, `BLOCKED`, `NOT_RUN`), required decision and owner approval if applicable.
- If one track fails, document evidence and retry or explicitly obtain an owner-approved waiver; **do not silently mark it passed** or start a third.
- A PR may be draft for research. Passing a CI workflow does not imply author acceptance, product security or release readiness. Do not merge production implementation work as a shortcut.

## Necessary research batches — two at a time

| Pair | Track A | Track B | What must be complete to close the pair | Starting state |
|---|---|---|---|---|
| **01 — active** | **R01: source certification.** Preserve 13 domains/130 lenses, compact/expanded variants, title/body collisions (especially AR-04/AR-09); propose immutable versioned mapping and obtain owner decision before calling rule defaults authentic. | **R15/K2B: session and manuscript privacy.** Extend actual K2A two-user Auth/RLS proof with Next SSR cookie refresh, logout/expired JWT behavior across Nest and direct PostgREST, storage RLS, CSRF, local draft account switching, retention/deletion and backup trust model. | Owner-approved non-destructive source packaging, exact-source manifest, and a tested session/access model with documented unresolved release controls. | **ACTIVE; neither complete** |
| **02 — queued** | **R02/R03: actual author workflows and market alternatives.** Verify 11 author journeys and desired interactions through external evidence, structured author discovery and comparator walkthroughs; do not fabricate participants. | **R05/R16: manuscript editor and accessibility.** Real browser full supported marks/blocks, keyboard/IME/paste/undo/search, long-chapter performance, responsiveness, screen-reader navigation, accessibility and lossless save/reload boundaries. | Document author workflows and actionable navigation/UI requirements; measure editor tradeoffs and failure modes under representative synthetic content. | QUEUED |
| **03 — queued** | **R11: portability and recoverability.** Real Calibre DOCX/TXT round-trip fixtures and complete portable JSZip archive restore with formatting-loss disclosures, malformed file/sandbox tests and independent backup recovery. | **R07: temporal profiles and Story Memory.** Manual character/thread profiles, POV/time/retcon/evidence acceptance contract, actual extraction candidate accuracy against human-labeled synthetic fiction, stale-source and rejection safety. | Format-fidelity and backup results; profile/canon review design and quantified error cases; both author-owned and AI-off. | QUEUED |
| **04 — queued** | **R08/R21: optional provider/BYOK evaluation.** Select realistic no-mandatory-paid connector options, current terms/retention/privacy, local inference feasibility, key lifecycle, token/cost ceilings, streaming/failures. No paid inference before owner authorizes expense. | **R19: authoring and model evaluation corpus.** Reproducible multi-genre, POV, chronology, long-manuscript and rewrite benchmark with explicitly labeled evidence, failure criteria and human-preference protocol. | Provider and test fixture choices are grounded enough to evaluate actual quality without disclosing manuscripts or incurring unapproved charges. | QUEUED |
| **05 — queued** | **R06: real guidance behavior.** Apply the R01-approved frozen rule package with active/disabled/exceptions, inspect effective request, run model experiments on labeled prose and compare literary quality rather than banning stylistic patterns. | **R10: reversible AI edits.** Selection-safe Tiptap patch/diff/proposal application, formatting preservation, source-version CAS, stale-response conflict, independently reviewed profile deltas and undo. | Rule provenance and exclusion pass, observed author-quality evidence, and reproducible tests proving AI suggestions cannot silently replace accepted text or canon. | QUEUED |
| **06 — queued** | **R14/R21: legal, IP, privacy policy and operating economics.** Ownership/disclosure/provider terms, license redistribution/Calibre compatibility, Supabase hosting/free-tier limits, recovery and retention, incident responsibilities, nonpaid-service operating plan. | **R18: remaining operational design.** Chapter save RPC transaction boundaries, authenticated workers, job retries/cancellation/idempotency, database migrations, backup disaster-recovery RPO/RTO, deployment path and monitoring. | Decisions and risk register sufficient to design credible flows and implement without inventing backend promises. | QUEUED |

### Research that can be deferred

R09 MCP, R12 professional EPUB/print composition, R13 full Cover Studio, R17 collaboration, and exploratory portions of R20/R22 do **not** block initial writing-focused implementation. R20 **basic Vellistry name clearance** still gates public branding, not private UI concept design. Post-MVP items remain inventoried, not deleted.

## Research closeout and gate into UI/UX

Only after all six mandatory pairs are **completed with source evidence**, or an explicitly recorded owner-approved deferral that does not undermine the eight MVP areas, may the project move into its dedicated UI/UX phase. Required handoff artifacts:

1. Updated requirements and MVP acceptance criteria traceable to R01–R22 and actual evidence.
2. Decision register resolving materially blocking rule-pack, auth, portability, model/BYOK and data-retention choices.
3. User journey map, information architecture, screen/state inventory, success/error/empty/recovery examples.
4. Design constraints and UX evidence: text-ownership, author control, writing without AI, accessibility, focus mode, privacy.
5. Experimental vs verified status per claim; no untested converter/AI capability is silently presented as ready.

Discovery interviews can occur before mockups; **usability of a real interactive prototype must be assessed during the design gate**, not falsely claimed complete from interviews alone. Design-stage tests are a required continuation of validation, not a loophole allowing product implementation.

## Dedicated UI/UX design phase (before implementation)

**Canonical editable source of truth: Figma Design.** Use Figma Make and Lovable as *exploration and interactive prototype tools*, not as automatically production-ready code, a substitute for canonical editable design layers, or an implicit second application stack.

1. Define low-fidelity app IA and flows (desktop authoring first; responsive/mobile review).
2. Compare **at least two distinct UI directions** in Figma Make and/or Lovable using synthetic story excerpts and fake accounts only. The tools support functional prototypes, but plan/seat/credit limits must be verified before invoking paid features.
3. Consolidate selected direction into a **Figma Design** file with editable components, tokens, typography, spacing, semantic states and accessibility annotations.
4. Prototype eight approved MVP areas: auth/onboarding; books/chapters/notes; non-AI editor and dirty/saved/conflict indicators; characters/threads and evidence/review; rules studio; optional Continue/Rewrite; accept/reject rich-text diff; import/export/backup/privacy settings.
5. Run actual walkthroughs and scenario tests covering: new author with AI off, normal writing, reconnect/reload recovery, concurrent/stale save, rule toggle, profile review, AI failure and explicit suggestion rejection.
6. Compare mock and prototype outcomes against source-backed requirements; document tradeoffs, omissions, design decisions and unresolved accessibility issues.
7. Owner reviews and **explicitly approves design system and core flows** before engineering begins implementation against them.

If Figma Make or Lovable proposes alternate auth/database/AI infrastructure, **do not silently adopt it**. The approved product architecture remains Next.js + NestJS + Supabase; code exports and generated prototypes require architectural and security review. Never upload genuine unpublished author manuscripts, private credentials, or confidential source archives to a third-party design-generation service by default.

## Engineering gate (after UI approval)

- Turn accepted Figma components and interaction contracts into versioned implementation tasks.
- Update the existing Next/Nest/Supabase scaffold rather than throwing away verified work.
- Required first vertical flow remains actual author sign-in -> authorized book/chapter -> transactionally revisioned save -> clear save/recovery state -> import/export.
- Continue feature-level research tests during implementation only where the accepted gate explicitly allows them; defer no critical blockers without owner's decision.

## Supersession and status integrity

This sequencing supersedes the **implementation start timing** in `docs/plans/MVP-ENGINEERING-IMPLEMENTATION-KICKOFF-2026-10-09.md` in draft PR #28. It does **not** revoke ADR-0006 stack selection or discard existing code. Update that PR's review notes to pause implementation, and treat this document as the current source for project phase ordering after owner approval. No claim is made that Batch 01 or any later batch has passed merely because the plan is written.

## Historical immediate next action (2026-10-09)

**Research Pair 01 — R01 frozen source package and R15/K2B complete Auth/session access model.** This was the starting instruction at the time of the plan. Its bounded findings and the later five research pairs are now merged; **the present next action** is the review of the [six-pair research/design checkpoint](../research/SIX-PAIR-RESEARCH-TO-DESIGN-GATE-2026-10-09.md), combined-main checks and a *new explicit owner design-entry decision*. Unresolved R01 source mapping and private manuscript security are not waived.
