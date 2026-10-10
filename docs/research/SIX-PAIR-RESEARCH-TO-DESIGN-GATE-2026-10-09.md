---
id: VEL-RES-SIX-PAIR-DESIGN-GATE-20261010-001
title: Research integration and design-entry decision checkpoint
type: research-decision-brief
status: proposed-owner-review
created_at: 2026-10-09
updated_at: 2026-10-10
owner: project_owner
version: 0.2.2
source_refs:
  - docs/plans/RESEARCH-PAIR-AND-PREIMPLEMENTATION-DESIGN-2026-10-09.md
  - docs/requirements/MVP-SCOPE-DECISION-2026-10-09.md
  - docs/decisions/ADR-0007-immutable-compact-expanded-guidance-sources.md
  - docs/research/PAIR-01-ACCELERATED-CLOSEOUT-BRIEF-2026-10-09.md
  - docs/research/PAIR-02-ACCELERATED-AUTHOR-EDITOR-EVIDENCE-2026-10-09.md
  - docs/research/PAIR-03-ACCELERATED-PORTABILITY-PROFILES-2026-10-09.md
  - docs/research/PAIR-04-OFFLINE-PROVIDER-CORPUS-2026-10-09.md
  - docs/research/PAIR-05-SYNTHETIC-RULES-REVERSIBLE-EDIT-2026-10-09.md
  - docs/research/PAIR-06-LEGAL-OPS-RESTORE-2026-10-09.md
  - docs/history/2026-10-10-owner-option-b-predesign-selected.md
  - docs/plans/OPTION-B-PREDESIGN-RESEARCH-CLOSEOUT-2026-10-10.md
---

# Vellistry — Six-pair research integration and design-entry review

**Verified post-recovery `main` at `e7f1c82ced0a4e8b3196aaa7e5b874b41afc4523` on 2026-10-10** ([PR #43](https://github.com/Ben-001-sys/Vellistry/pull/43) merged). The preceding `b4c3f2748b2bfdd52f4a90a14ea4d620d902cee7` was the earlier, pre-repair checkout on which the missing-files diagnosis was made.

**Research closeout: OPEN. Owner design-entry decision: OPTION B ACCEPTED (strict pre-design research before prototypes).** All six research pairs have merged pull-request records. The previously missing **21** K2 and Pair 04/05 research files were recovered from original stacked branch source in [merged PR #43](https://github.com/Ben-001-sys/Vellistry/pull/43) and are now verified present on `main`. **Seven exact-head PR #43 workflows passed**, including the combined checkout and local Supabase K2 test. These findings do **not** mean completing every research acceptance criterion, certify production manuscript security, waive owner decisions, or authorize feature implementation, paid services, real manuscript upload, design production, or public release. The owner-directed [research → editable Figma design → explicit design approval → implementation plan](../plans/RESEARCH-PAIR-AND-PREIMPLEMENTATION-DESIGN-2026-10-09.md) remains in force.

## Integration facts and still-unresolved findings

| Pair | Merged PR evidence (restored where necessary by PR #43) | Verified narrow outcome | Important unresolved evidence / decision |
|---|---|---|---|
| **01 — Source guidance and privacy** | [#31](https://github.com/Ben-001-sys/Vellistry/pull/31), [#33](https://github.com/Ben-001-sys/Vellistry/pull/33), [#29](https://github.com/Ben-001-sys/Vellistry/pull/29), [#32](https://github.com/Ben-001-sys/Vellistry/pull/32), [#34](https://github.com/Ben-001-sys/Vellistry/pull/34), [#36](https://github.com/Ben-001-sys/Vellistry/pull/36) merged | **260 immutable source variants**, R01 P1 preservation approved; disposable Supabase Auth/RLS and restricted Nest/session tests run | **134-control mapping is only proposed**; active defaults not approved; Next SSR, storage, browser account-switch/local drafts, deletion/backup and production-integrated restricted manuscript routes remain incomplete |
| **02 — Writer workflows and editor accessibility** | [#37](https://github.com/Ben-001-sys/Vellistry/pull/37) merged | Chromium **12/12**, Next HTTP **17/17** and Nest HTTP **17/17** on cited research heads, with rich-format save/keyboard checks | No actual author interviews or full assistive technology/IME/large-manuscript usability trial; research fixture is not the shipping editor |
| **03 — Portability and evolving profiles** | [#38](https://github.com/Ben-001-sys/Vellistry/pull/38) merged | Backup/TXT **10/10**, added temporal-profile **8/8** plus prior **20/20** checks; Calibre 7.6.0 text survived sample round-trip | DOCX Heading styles **3 input → 0 returned**; real integrated restore, long-fidelity cases and author-reviewed extraction accuracy remain open |
| **04 — Provider consent and fiction corpus** | [#39](https://github.com/Ben-001-sys/Vellistry/pull/39), [#40](https://github.com/Ben-001-sys/Vellistry/pull/40) merged | **14/14** offline provider/consent checks; 14 synthetic corpus cases and 15 reversible-edit specs structurally validated | **No live inference or human scoring**, no approved provider/free-tier privacy model, consent/credential lifecycle or measured quality/cost |
| **05 — Rules and reversible AI edits** | [#41](https://github.com/Ben-001-sys/Vellistry/pull/41) merged | **12/12** synthetic rule-scope/exclusion tests and **10/10** actual Tiptap headless proposal tests | No certified active R01 pack, live literary adherence or model eval, persistent revision-safe acceptance/undo or author usability evidence |
| **06 — Legal, operations and durable save** | [#42](https://github.com/Ben-001-sys/Vellistry/pull/42) merged | **8/8** risk-register assertions; **12/12** disposable PostgreSQL 16 CAS/idempotency/clean-restore tests | No legal clearance, production auth binding, encrypted/off-site backup or selected RPO/RTO, hosting budget, retention, terms/consent or real app recovery evidence |

**Evidence boundary:** Original pair-specific successes belong to their cited historical PR heads. The repaired **PR #43 exact head** passed [combined baseline #38009740500](https://github.com/Ben-001-sys/Vellistry/actions/runs/38009740500), [local Supabase K2 #38009740468](https://github.com/Ben-001-sys/Vellistry/actions/runs/38009740468), and five other workflows. Source presence is now verified on merged `main`; these tests do **not** establish a production-integrated application, separate post-merge-main rerun, actual writer usability, law compliance, or real model behavior.

## Gate classification: design versus implementation versus release

| Gate | When it is required | Current disposition |
|---|---|---|
| Author jobs-to-be-done, 11 journey scripts, critical editor states | **Before design** as a source-backed brief; validate real author outcomes during discovery/prototype usability | Source-grounded scripts exist; **real participants NOT VERIFIED**. Recruit or obtain owner-approved, scoped deferral for initial *concept only* work; never fabricate research |
| R01 rule definitions and active mapping | **Before genuine default rule behavior/implementation and AI use** | P1 immutable variants accepted; exact 130/134 control activation unresolved; **design may show clearly labeled non-operational example rule controls** if authorized |
| Private manuscript security and session boundary (K2B) | **Before implementation of production-facing private manuscript paths** and mandatory before public release | Disposable tests support potential restricted Nest route; **production auth/SSR/storage/revocation NOT certified**; design must show account-switch/privacy/recovery states without claiming security |
| DOCX conversion loss | **Before promising faithful DOCX import/export or accepting M3 interchange** | Loss observed; design may prototype explicit fidelity warnings; actual strategy/test gate remains |
| Real provider inference, model quality, privacy/terms and paid-service policy | **Before real optional AI integration or transmitting manuscripts** | Offline simulations only; design may prototype AI OFF, consent, request preview and failure/reject with synthetic prose |
| Real writer/accessibility trials | **During design validation, before owner approves core flows**; stronger accessibility gate again before release | 11 planned journeys; no verified author observations or complete screen-reader/IME trial |
| Legal/IP, hosted services, backup targets, deletion and recovery | **Before public release**; choose any irreversible architecture/security commitments earlier | 15-item review registry and PostgreSQL mock recovery exist; legal/operational owner decisions remain |
| Canonical editable Figma Design with two UI exploration directions | **Before feature implementation**, under the owner's design-first instruction | **NOT STARTED / NOT APPROVED** as of this checkpoint |
| Stage 3/4 agent handoff closeout | Workflow-quality work can continue independently; cannot be used as product security evidence | [#18](https://github.com/Ben-001-sys/Vellistry/issues/18) and [#27](https://github.com/Ben-001-sys/Vellistry/issues/27) remain open; no invented Level B/Stage 4 owner signoff |

## Recorded process discrepancy — preserve chronology, do not rewrite history

The original owner-directed design-first plan prohibited merging/promoting implementation-only code until research and design gates passed. Nevertheless, on **2026-10-10** [PR #28](https://github.com/Ben-001-sys/Vellistry/pull/28) (initial Next.js/NestJS/Supabase scaffold) and K2 research descendants were merged into `main` before a canonical Figma design had been accepted. This is a **process variance**, not evidence that a design gate passed or that an owner rescinded it. Preserve the merged source and commit history, do not forcibly revert useful research, but **hold new feature implementation and deployments** pending explicit owner design approval or separately documented change in sequencing.

## Previous design-only recommendation (superseded by Option B)

**Historical recommendation, NOT selected:** Authorize a **design-only** phase for synthetic manuscripts, after reviewing the above research gaps and explicitly recording which incomplete *research-for-design* evidence is accepted as a risk for exploratory prototyping. This would permit low-fidelity IA, two visibly different prototype directions (Figma Make and/or Lovable), editable Figma Design components and measured author walkthroughs. It would **not**:
- certify the 134 proposed R01 controls or switch on authentic active rules;
- grant product implementation or production deployment permission;
- waive real manuscript access controls, provider privacy, DOCX fidelity, license review or author-data backup/recovery;
- imply research interviews or usability trials already happened;
- approve paid plans, confidential source uploads or using actual unpublished author text.

## Owner decision checklist — Option B recorded; remaining approvals pending

- [x] **Design-entry decision:** **Option B selected** directly by the owner on 2026-10-10: complete outstanding pre-design research and owner-critical decisions **before prototypes**. [Accepted decision](../history/2026-10-10-owner-option-b-predesign-selected.md). **No design or implementation authorization**.
- [ ] **Writer evidence:** collect actual, consented author discovery and no-prototype workflow observations before any Figma/Lovable prototyping; do not fabricate trials or replace them with vendor claims.
- [ ] **Rule mapping:** approve/revise/reject an exact owner-reviewed operational source mapping; never equate approving P1 with approving 134 active controls.
- [ ] **Security posture:** agree on required live logout/session semantics for private manuscript operations and whether experimental Nest-only tests warrant implementation-stage design.
- [ ] **M3 portability:** choose a non-silent formatting-loss strategy for DOCX handling.
- [ ] **AI provider/evaluation:** decide allowed real-provider tests, data-use/retention and zero-expense limits before any live author-text transfer.
- [ ] **Operations/legal:** review rights, licenses, cross-border/privacy, backup custody/retention, hosting costs and initial recovery targets before release.

**Only the Option B selection is checked.** The other owner decisions remain open; the active research plan is [Option B pre-design closeout](../plans/OPTION-B-PREDESIGN-RESEARCH-CLOSEOUT-2026-10-10.md). Complete its evidence/decision packet, then request a **new** owner design-entry approval. CI success or PR merge does not open the design gate.
