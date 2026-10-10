---
id: VEL-PLAN-DESIGN-ENTRY-20261010-001
title: Owner decision — strict pre-design research before UI prototypes
type: design-entry-decision-brief
status: accepted
created_at: 2026-10-10
updated_at: 2026-10-10
owner: project_owner
version: 1.0.0
source_refs:
  - docs/research/SIX-PAIR-RESEARCH-TO-DESIGN-GATE-2026-10-09.md
  - docs/plans/RESEARCH-PAIR-AND-PREIMPLEMENTATION-DESIGN-2026-10-09.md
  - docs/requirements/MVP-SCOPE-DECISION-2026-10-09.md
  - docs/requirements/MVP-USER-JOURNEYS-AND-ACCEPTANCE-2026-10-09.md
  - docs/history/2026-10-10-owner-option-b-predesign-selected.md
related_adrs:
  - ADR-0003
  - ADR-0004
  - ADR-0006
  - ADR-0007
approved_by: project_owner
decision_at: 2026-10-10
---

# Vellistry — Option B accepted: complete research before any prototypes

## Accepted owner decision

All six research pairs and the initial app foundation are represented by merged pull requests. [PR #43](https://github.com/Ben-001-sys/Vellistry/pull/43) **merged on 2026-10-10**, restoring 21 previously missing Pair 04/05 and K2 research files to `main`, verified at merge `e7f1c82ced0a4e8b3196aaa7e5b874b41afc4523`. Its exact-head combined app/research and disposable K2 security checks passed. Substantive author research, approved source mapping, production manuscript privacy, DOCX fidelity and operating/legal decisions are still open. **Owner selected Option B: finish outstanding pre-design research and owner-critical decisions BEFORE any prototypes.** The design-entry hold and prohibition on new feature implementation/deployment remain in force.

This is an **accepted owner process decision**, independently recorded in [Option B owner decision](../history/2026-10-10-owner-option-b-predesign-selected.md). It authorizes research rather than design or implementation; no Figma design or third-party account has been created by this document.


**Post-merge reconciliation (2026-10-10):** Repository integration is no longer a prerequisite to this choice; [PR #43](https://github.com/Ben-001-sys/Vellistry/pull/43) merged and its verified research sources are present in `main`. **Option B explicitly SELECTED** in the owner's 2026-10-10 instruction. PR #43's merge did not select an option; the subsequent direct owner message did.

## Previously presented options (Option B selected)

| Option | Meaning | Trade-off |
|---|---|---|
| **A — Bounded concept-design gate** *(not selected)* | Begin synthetic-data navigation/interaction studies and two distinct Figma Make/Lovable explorations; consolidate editable Figma Design, then test with real writers and seek owner design approval. Product feature implementation still held. | Enables design learning without waiting for every release-only gate; risks speculative flows if early writer interviews are missing |
| **B — Strict pre-design completion** *(SELECTED 2026-10-10)* | Complete real-writer discovery and all owner-critical research choices before any interactive concept prototype. | Highest research certainty but longer interval without usability feedback |
| **C — Owner-authorized alternate sequencing** | Explicitly amend the two-at-a-time/design-first governing plan with reasons, scope and safeguards. | Requires an actual new owner instruction and traceable revision; cannot be inferred from merges |

## Superseded Option A conditional guardrails (not currently authorized)

- Author-owned writing with AI OFF is a fully visible, usable journey, not a disabled state.
- Build at least two different UI explorations using **only invented story excerpts and fake accounts**; canonical, editable source of truth must become Figma Design, not an unreviewed Lovable/Figma Make export.
- Prototype the accepted M1–M8 surfaces with notes/chapters, Tiptap-like writing interactions, honest unsaved/saved/conflict/recovery status, live visible author-maintained profiles, **provisional** rules, optional consented Continue/Rewrite, proposal review/undo, file exchange and privacy settings.
- Labels for rules, DOCX, model availability and security must disclose **unresolved behavior**. No placeholder should claim a certified frozen default pack, perfect conversion fidelity, or fully effective logout.
- Test actual users' core tasks including AI-off writing, keyboard workflows, chapter recovery, rule scope, profile proposal acceptance, rejecting AI edits, account switching and privacy understanding. Capture genuine observations and accessibility failures; do not fabricate them.
- Respect the owner-selected Next.js + NestJS + Supabase direction; any prototype-created backend/schema is exploratory only and not an architecture change.
- Do not incur paid credits or transmit real unpublished source manuscripts, keys, author accounts or private guidance archives to design-generation services without separate permission.

## Parallel, non-waived blockers

Unresolved work that must be pursued as **strict pre-design research or owner decision-making, with no prototypes**:
1. Final review of R01 full source mapping and exact default-on rule policy before operational Rules Studio instructions.
2. Integrated restricted private manuscript access, live-session/logout semantics, Next SSR, browser draft/account switching, storage and export boundaries.
3. Correct basic DOCX style/fidelity strategy and verified complete independent restore.
4. Actual allowed AI-provider privacy/terms, model quality, request-preview and human blinded evaluations, with no mandatory paid services.
5. Legal/IP, custody and operations decisions including Ghana privacy requirements, hosting quotas, backups and retention.

These cannot be silently marked PASS by design approval; the earliest relevant implementation/release gate in the [research decision brief](../research/SIX-PAIR-RESEARCH-TO-DESIGN-GATE-2026-10-09.md) still applies.

## Option B research directions

Continue pre-design work using the [six-wave maximum-two-track closeout plan](OPTION-B-PREDESIGN-RESEARCH-CLOSEOUT-2026-10-10.md). Initially activate R02/R03 actual author discovery and R01 full-body guidance mapping review. Later research tracks, including editor accessibility, DOCX fidelity, manuscript-security design, provider/cost/quality and legal/backup policy, remain queued in dependency order. Do not fabricate participants, model evaluations, owner mapping approvals or production tests.

## Owner approval record — Option B

- **Selected option:** B — strict pre-design research and owner-critical decisions before prototypes
- **Owner evidence:** "I choose Vellistry design-entry Option B: complete outstanding pre-design research and owner-critical decisions before prototypes." (owner's 2026-10-10 conversation instruction; no repository-stored chat permalink)
- **Date/time:** 2026-10-10 (clock time not captured)
- **Permitted design tools / workspace:** None for prototypes; Figma Make/Lovable/Figma Design work remains on hold
- **Allowed data:** invented fiction for reproducible experiments and appropriately consented real-author research feedback; no real unpublished manuscripts uploaded to external providers
- **Exit criteria:** owner-reviewed pre-design research closeout, source-backed critical decisions and new explicit owner decision before any design exploration
- **Design authorization:** NOT GIVEN; prototypes and Figma/Lovable work remain prohibited until separate approval
- **Implementation authorization:** NOT GIVEN; production migration, deployment, external manuscript transfer and paid services not authorized

This document is accepted **because of the explicit owner Option B statement**, not because CI passed or a PR merged. The separate [accepted decision](../history/2026-10-10-owner-option-b-predesign-selected.md) and [two-track pre-design plan](OPTION-B-PREDESIGN-RESEARCH-CLOSEOUT-2026-10-10.md) are the governing sources. A later design approval must be a NEW owner decision.

## Later superseding owner-delegated Wave 6 stage choice — 2026-10-10

The **original Option B selection recorded above remains historically true**. On 2026-10-10, after directing a single-pass Wave 6 closeout, the owner expressly delegated: **“continue to the next stage and land on a final decision in one response, choose this is just an MVP for now.”** The assistant's subsequent bounded choice was recorded as [HIS-20261010-004](../history/2026-10-10-owner-delegated-mvp-design-entry.md), supported by [G10 closeout](../research/OPTION-B-WAVE06-G10-FINAL-CLOSEOUT-MVP-DESIGN-ENTRY-2026-10-10.md). **The owner did not literally write the specific phrase 'I approve Option A'; the owner delegated selecting the next MVP stage**. Do not misquote this as verbatim owner Figma authorization.

**Current permitted stage following six-wave bounded closeout:** synthetic-only **two distinct UI/UX concept directions** using invented fiction and fake accounts, ultimately consolidated into **editable Figma Design**; real consenting author observation after prototypes and before final design signoff. This is a **bounded reopening of the formerly unselected Option A design scope** under the later delegated decision. It does not require rerunning Waves 1–6 or falsely marking missing real-user/real-model/production checks PASS.

**Implementation, live beta and release remain NOT AUTHORIZED.** Owner must separately approve the actual final design and later engineering plan. Real private manuscripts, original private rule bodies, live model API keys, paid provider/design services and customer identity are prohibited in exploratory design tools. The previous Option B hold survives for production feature code, deployment and privacy/legal/recovery release gates.
