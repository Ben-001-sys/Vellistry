---
id: VEL-PLAN-DESIGN-ENTRY-20261010-001
title: Owner decision request for research-to-UI-design handoff
type: design-entry-decision-brief
status: proposed-owner-review
created_at: 2026-10-10
updated_at: 2026-10-10
owner: project_owner
version: 0.1.0
source_refs:
  - docs/research/SIX-PAIR-RESEARCH-TO-DESIGN-GATE-2026-10-09.md
  - docs/plans/RESEARCH-PAIR-AND-PREIMPLEMENTATION-DESIGN-2026-10-09.md
  - docs/requirements/MVP-SCOPE-DECISION-2026-10-09.md
  - docs/requirements/MVP-USER-JOURNEYS-AND-ACCEPTANCE-2026-10-09.md
related_adrs:
  - ADR-0003
  - ADR-0004
  - ADR-0006
  - ADR-0007
approved_by: null
decision_at: null
---

# Vellistry — design-entry decision requested (not yet granted)

## Decision to make

Six paired-research PRs are marked merged. File integrity checks found missing Pair 04/05 and K2 research artifacts in the checked `main` tree; [PR #43](https://github.com/Ben-001-sys/Vellistry/pull/43) is restoring them, pending CI and merge. Some substantive user, source-mapping, privacy, import-fidelity and legal/operational questions remain. Does the owner allow **design-only exploratory work** now, while preserving the existing prohibition on new feature implementation and production deployment until design review?

This record documents a **decision request**, not a decision. No checkbox is preselected; no Figma design or third-party account has been created by this document.

## Options and recommendation

| Option | Meaning | Trade-off |
|---|---|---|
| **A — Bounded concept-design gate** *(recommended for review)* | Begin synthetic-data navigation/interaction studies and two distinct Figma Make/Lovable explorations; consolidate editable Figma Design, then test with real writers and seek owner design approval. Product feature implementation still held. | Enables design learning without waiting for every release-only gate; risks speculative flows if early writer interviews are missing |
| **B — Strict pre-design completion** | Complete real-writer discovery and all owner-critical research choices before any interactive concept prototype. | Highest research certainty but longer interval without usability feedback |
| **C — Owner-authorized alternate sequencing** | Explicitly amend the two-at-a-time/design-first governing plan with reasons, scope and safeguards. | Requires an actual new owner instruction and traceable revision; cannot be inferred from merges |

## Guardrails if Option A is later approved

- Author-owned writing with AI OFF is a fully visible, usable journey, not a disabled state.
- Build at least two different UI explorations using **only invented story excerpts and fake accounts**; canonical, editable source of truth must become Figma Design, not an unreviewed Lovable/Figma Make export.
- Prototype the accepted M1–M8 surfaces with notes/chapters, Tiptap-like writing interactions, honest unsaved/saved/conflict/recovery status, live visible author-maintained profiles, **provisional** rules, optional consented Continue/Rewrite, proposal review/undo, file exchange and privacy settings.
- Labels for rules, DOCX, model availability and security must disclose **unresolved behavior**. No placeholder should claim a certified frozen default pack, perfect conversion fidelity, or fully effective logout.
- Test actual users' core tasks including AI-off writing, keyboard workflows, chapter recovery, rule scope, profile proposal acceptance, rejecting AI edits, account switching and privacy understanding. Capture genuine observations and accessibility failures; do not fabricate them.
- Respect the owner-selected Next.js + NestJS + Supabase direction; any prototype-created backend/schema is exploratory only and not an architecture change.
- Do not incur paid credits or transmit real unpublished source manuscripts, keys, author accounts or private guidance archives to design-generation services without separate permission.

## Parallel, non-waived blockers

Unresolved work that may continue as *research or owner decision-making* while design is explored:
1. Final review of R01 full source mapping and exact default-on rule policy before operational Rules Studio instructions.
2. Integrated restricted private manuscript access, live-session/logout semantics, Next SSR, browser draft/account switching, storage and export boundaries.
3. Correct basic DOCX style/fidelity strategy and verified complete independent restore.
4. Actual allowed AI-provider privacy/terms, model quality, request-preview and human blinded evaluations, with no mandatory paid services.
5. Legal/IP, custody and operations decisions including Ghana privacy requirements, hosting quotas, backups and retention.

These cannot be silently marked PASS by design approval; the earliest relevant implementation/release gate in the [research decision brief](../research/SIX-PAIR-RESEARCH-TO-DESIGN-GATE-2026-10-09.md) still applies.

## Approval record (complete only after owner decision)

- **Selected option:** PENDING
- **Owner evidence:** PENDING
- **Date/time:** PENDING
- **Permitted design tools / workspace:** PENDING
- **Allowed data:** synthetic-only unless separately authorized
- **Exit criteria:** editable Figma Design, scenario walkthrough evidence, owner-approved core flows and resolved critical design defects
- **Implementation authorization:** NOT GIVEN by this brief

After an actual owner decision, create a separate accepted history/decision record with its exact wording; update `CURRENT-STATE.md`. Do not turn this proposed brief's status into `accepted` based on a passing CI run or PR merge.
