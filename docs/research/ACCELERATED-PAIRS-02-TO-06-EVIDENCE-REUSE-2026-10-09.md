---
id: VEL-RES-ACCEL-REMAINING-PAIRS-20261009-001
type: research-reuse-and-gates
status: research-index-not-pair-activation
created_at: 2026-10-09
updated_at: 2026-10-09
author: project-research
version: 0.1.0
sources:
  - "docs/plans/RESEARCH-PAIR-AND-PREIMPLEMENTATION-DESIGN-2026-10-09.md"
  - "docs/decisions/ADR-0004-free-calibre-document-conversion-and-portable-recovery.md"
  - "docs/research/R07-LIVE-STORY-PROFILES-CONCEPT-MODEL-2026-10-09.md"
  - "docs/research/R06-RULE-APPLICATION-EVALUATION-PROTOCOL.md"
  - "docs/research/R18-FICTION-MEMORY-AND-STACK-REASSESSMENT-2026-10-09.md"
  - "docs/reports/R18-BROWSER-WRITING-AND-DRAFT-RECOVERY-2026-10-09.md"
related_research:
  - R02
  - R03
  - R05
  - R06
  - R07
  - R08
  - R10
  - R11
  - R14
  - R16
  - R18
  - R19
  - R21
related_adrs:
  - ADR-0003
  - ADR-0004
  - ADR-0006
---

# Acceleration ledger — evidence reuse for the remaining research pairs

**Purpose:** Make later pairs faster through existing evidence without activating third or fourth concurrent tracks. Pair 02 (R02/R03 and R05/R16) is the **only new active pair** after the owner's 2026-10-09 bounded decision to proceed beyond Pair 01 research. This is a planning index, not a completed research report for Pair 03–06, no new waivers and no revision of the original six-pair plan.

## Status interpretation

- **EXISTING PASS**: exactly scoped historical experiment actually executed, with linked CI. Never broaden it into overall feature viability.
- **DESIGN/TECH SELECTED**: recorded owner-level technology direction, not demonstrated production implementation.
- **PROPOSAL**: sourced argument or test protocol, no equivalent runtime evidence.
- **OPEN / NOT RUN**: release-relevant question remains. Cannot mark pair PASS.
- **DEFERRED BY OWNER**: only if a specific scoped owner statement says to move on; does not grant security/privacy or release approval.

## Pair 02 — ACTIVE

**A R02/R03:** Nine-vendor market scan [R03 existing](R03-AI-FICTION-APPS-COMPETITIVE-SCAN-2026-10-08.md); original eleven author journeys [MVP acceptance](../requirements/MVP-USER-JOURNEYS-AND-ACCEPTANCE-2026-10-09.md); current Novelcrafter prompt types and Reedsy free editor vendor evidence. **Missing:** real writers completing workflow tasks and firsthand side-by-side competitor trials. Do not invent them.

**B R05/R16:** Tiptap 3 selected ADR-0003. [PR #7](https://github.com/Ben-001-sys/Vellistry/pull/7) 7/7 jsdom, [PR #12](https://github.com/Ben-001-sys/Vellistry/pull/12) 7/7 Chromium; [PR #25](https://github.com/Ben-001-sys/Vellistry/pull/25) 8/8 browser recovery; [PR #23](https://github.com/Ben-001-sys/Vellistry/pull/23) Next/Nest 15/15 HTTP. Pair 02 adds heading/bold keyboard persistence and save status/keyboard activation regression. **Missing:** manual screen-reader/IME/RTL/Word paste/large author manuscript and actual writer observations. Do not call these PASS from old tests.

## Pair 03 — QUEUED, not activated

**A R11 document portability and recovery**
- **Reused selected technology:** [ADR-0004](../decisions/ADR-0004-free-calibre-document-conversion-and-portable-recovery.md): free Calibre ebook-convert + native UTF-8 TXT + Tiptap JSON authoritative representation + JSZip portable manifest; EPUBCheck reserved for future EPUB validation. This is an accepted technology direction and no-paid-service constraint, not verified fidelity.
- **Shortest next experiment:** one fixture pack: (a) three chapters with dialogue, emoji, accents, heading/italic/bold and scene breaks round-trip DOCX via pinned Calibre; (b) native TXT exact newline/BOM policy; (c) two-book JSZip full backup/restore with approved vs proposed character facts, rules and revision metadata, checksum comparison; (d) corrupt ZIP and oversized DOCX fail closed.
- **Required evidence:** original and resulting text/semantic node counts, format warnings, exact tool versions and licenses, clean-environment restored project, readable independent DOCX. Do not claim EPUB/print publication in MVP.

**B R07 character/storyline temporal profile state**
- **Reused verified work:** [R07 research](R07-LIVE-STORY-PROFILES-CONCEPT-MODEL-2026-10-09.md) already includes **20/20 passing synthetic deterministic canon approval/knowledge-time tests** at [CI #37919046053](https://github.com/Ben-001-sys/Vellistry/actions/runs/37919046053). R18 temporal/PostgreSQL synthetic security/search experiments in [PR #20](https://github.com/Ben-001-sys/Vellistry/pull/20) are additional evidence.
- **Shortest next experiment:** sample three chapters deliberately including flashback/late-learned secret, uncertain narrator and deleted source passage; annotate 10–20 true candidate profile changes and expected abstentions independently; run a **no-model deterministic proposal/review** path first and quantify approved/nonapproved state isolation. Model extraction is gated on Pair 04 provider choices.
- **Required evidence:** event-time/scene-time distinction, exact revision/source references, stale candidate rejection, manual AI-off editing, author-directed acceptance. Do not claim natural-language extraction accuracy from deterministic tests.

## Pair 04 — QUEUED, not activated

**A R08/R21 zero-mandatory-paid AI/provider feasibility**
- **Constraint:** Owner barred paid services for current project/MVP. Optional M6 Continue/Rewrite (one evaluated BYOK model) may conflict with paid-token APIs; cannot silently choose a paid provider. R08 needs an explicit owner-reviewed reconciliation if zero-cost quality is inadequate.
- **Shortest experiment:** compare available local/legitimately free text-generation APIs, local CPU/GPU viability and terms; measure compatible schema, retention/consent, free limits, key storage, timeout/retry and safety ceilings using invented text. Avoid exposing secrets or publishing real manuscripts. No paid inference without specific cost approval.
- **Evidence required:** current primary-source licensing/terms and measured output latency and quality on the actual available hardware. No guaranteed zero-opex inference.

**B R19 generation/continuity evaluation corpus**
- **Reused findings:** R18 [PR #22](https://github.com/Ben-001-sys/Vellistry/pull/22) already benchmarked 140,678-word synthetic retrieval corpus for FTS/local embedding/hybrid, but that is **retrieval accuracy**, not creative-writing quality.
- **Shortest experiment:** a compact independently authored multi-genre fiction fixture with labeled POV secret boundaries, contradictions, non-linear time, accepted/rejected passages, and stylistically unusual prose; fixed Continue/Rewrite instructions; scoring for source recall, canon violations, author voice and unwanted normalization. Freeze labels and source revisions before using any model.
- **Evidence required:** blinded author ratings if available, reproducible samples, number of comparisons, disagreement/abstention, output provenance and consistent evaluation conditions. No market-preference claim without real respondents.

## Pair 05 — QUEUED, not activated

**A R06 effective creative rules**
- **Reused work:** [R06 benchmark protocol](R06-RULE-APPLICATION-EVALUATION-PROTOCOL.md) already defines comparisons and 18 assertions, not run against a model. [PR #33](https://github.com/Ben-001-sys/Vellistry/pull/33) proposed 134 separate operational controls, **not owner-approved as the active default pack**.
- **Hard gate:** exact source-variant mapping and enabled/disabled/default state must be owner-approved, or label purely invented fixtures as synthetic and **do not** claim authentic 130-lens behavior.
- **Shortest first trial:** dependency-free deterministic effective-context exclusion: when book rule disabled, no wording/source enters provider request; chapter override and artistic exception don't leak to other scopes. Model quality trials wait on provider/corpus decisions.

**B R10 reversible AI patches**
- **Reused work:** PR #7 synthetic Tiptap stale-suggestion and undo safety, [PR #25](https://github.com/Ben-001-sys/Vellistry/pull/25) two-tab stale server 409 recovery, and [PR #35](https://github.com/Ben-001-sys/Vellistry/pull/35) draft deterministic save-contract tests. They are not a real rich-text tracked rewrite engine.
- **Shortest experiment:** synthetic selection+revision-provenance replacement, edits while generation pending, accept/reject/undo, stale mismatch, rich bold/heading retention and separate profile proposal gating in real browser. Prefer a small fixture, not an early full diff-review product.

## Pair 06 — QUEUED, not activated

**A R14/R21 legal, IP and operating model**
- **Reused rules:** zero paid services, license and source provenance choices, selected free Calibre/JSZip/Tiptap. They do **not** answer GPL distribution compliance, author manuscript ownership policy, external model training/retention, data deletion timeline, emergency backup access or hosting cost.
- **Shortest research:** dated license audit for shipping binary/container versus SaaS, third-party terms/cost disclosure, privacy dataflow for author text and keys, explicit retention/deletion/backup obligations; get legal review for jurisdiction-specific publication claims. No false “free to operate” claim.

**B R18 operations and disaster recovery**
- **Reused tests:** [PR #23](https://github.com/Ben-001-sys/Vellistry/pull/23) real PostgreSQL HTTP save contracts, [PR #25](https://github.com/Ben-001-sys/Vellistry/pull/25) Dexie interrupted save/browser replay and stale revision handling, [PR #34](https://github.com/Ben-001-sys/Vellistry/pull/34) Auth session rows, [PR #36](https://github.com/Ben-001-sys/Vellistry/pull/36) restricted temporary Nest private-book gateway.
- **Shortest research:** decide actual chapter-save transaction boundary, trusted role/grants, idempotency, revision compare-and-swap and error retries; prove clean restore, logged-in profile security, disaster recovery and operational monitoring in local disposable stack. Include failure injections; never promote the temporary gateway fixture as shipping backend.

## Research completion and future design transition

An acceptance record for any pair must include exact evidence, outcome, remaining risk and any owner-approved deferral. We can prepare Figma-ready task inventories while doing Pair 02, but **do not start new production implementation or claim that all six pairs passed**. Full UI/UX design (Figma Make/Lovable exploration, consolidated canonical Figma Design and user walkthrough) still requires research-closeout decision per the [owner-directed process](../plans/RESEARCH-PAIR-AND-PREIMPLEMENTATION-DESIGN-2026-10-09.md).

**Now active:** Pair 02 only. **Prepared but not active:** Pairs 03, 04, 05, 06. **Earlier carry-forward:** Pair 01 release risks remain open.
