# Exact current language excerpts
Source 326f5e4c385644f864348d008c46c1aa54c7b616; full blob in SOURCE-MAP. Sections below preserve current proposal metadata and all pending question rows.

---
id: VEL-LANG-001
title: Vellistry Product Language, Terminology, and UX Content Standard
type: product-language-standard
status: proposed-owner-review
version: 1.0.1-candidate
created_at: 2026-10-17
updated_at: 2026-10-19
owner: project_owner
repository: Ben-001-sys/Vellistry
baseline_main_sha: f371448538dafa92faebbef9bcda2a36c6ca1fa9
scope: user-facing product language; not programming-language rules
approval_required: true
related_adrs: [ADR-0003, ADR-0004, ADR-0006, ADR-0007, ADR-0008]
related_journeys: [VEL-JRN-001, VEL-JRN-002, VEL-JRN-003, VEL-JRN-004, VEL-JRN-005, VEL-JRN-006, VEL-JRN-007, VEL-JRN-008, VEL-JRN-009, VEL-JRN-010, VEL-JRN-011]
---

# LANGUAGE.md — Vellistry product language and terminology

> **Adoption status:** Complete, implementation-ready **proposed language contract**, not an already approved owner decision. On explicit owner approval and repository integration, the `APPROVED_CONCEPT` terms below express already approved product meaning, and owner-approved `PROPOSED_LABEL` entries become the effective UI vocabulary. Before approval, do not retroactively relabel proposals as accepted or silently update application code. The file may guide reviews as a candidate immediately, but its presence alone does not change product scope, technical contracts, or owner authorization.

## 0. Quick reference for product designers, writers, and coding agents

1. **The author is in control.** Do not imply the application or AI independently authors, accepts, publishes, or establishes story truth.
2. **Use familiar writing words.** Prefer **book**, **chapter**, **manuscript**, **character**, **story thread**, and **writing rule** in general explanations; reserve **Story Profiles** and **Rules Studio** for the named Vellistry surfaces.
3. **Never collapse these boundaries:** manuscript / outline / notes; draft / saved revision; AI suggestion / accepted prose; suggested fact / approved story fact; AI prose acceptance / fact approval; local recovery / confirmed online save; exported document / full book backup.
4. **Actions name their effect:** **Create book**, **Add chapter**, **Continue writing**, **Rewrite selection**, **Accept suggestion**, **Reject suggestion**, **Approve fact**, **Dismiss suggestion**, **Download manuscript**, **Download book backup**, **Sign out**. Display-name choices identified as `PROPOSED_LABEL` need owner review before deployment.
5. **Status is evidence, not decoration.** Never display **Saved** without a server durability acknowledgement or **Saved on this device** without confirmed local persistence. A lost acknowledgement is **Save status unknown**, not necessarily **Save failed** or **Conflict**.
6. **AI is optional.** Never require an AI key for ordinary book writing, manual Story Profiles, rule editing, or supported export. Do not imply AI is free or that Vellistry pays provider bills.
7. **Current shipping boundary:** live implementation is login and a basic book library. Described chapter/editor/rules/AI UI is mainly approved product scope plus proposed UX, not verified deployed behavior.
8. **No silent renaming of technology:** labels here do not authorize changes to routes, SQL columns, RPCs, auth tokens, IDs, model/provider routing, source guidance files, or migration history.
9. **On an undefined or disputed term:** reuse a known semantic term where it fits exactly; otherwise add a proposed entry and request the owner's decision. Never invent another competing name.
10. **Check the exact affected screen and state** before using an example from this document. Example copy is a template conditioned on the specified behavior, never evidence that a feature works.

## 1. Purpose, authority, and applicability

### 1.1 What this file governs

This standard covers visible navigation, feature and page names, menus, breadcrumbs, tab names, buttons, form fields, helper text, tooltips, search and filters, confirmation dialogs, errors, empty states, saving and AI progress, notices, accessibility names, onboarding, author-visible revision provenance, export and privacy language, and future localized content. It also defines the semantic boundaries agents must preserve when writing content.

It **does not** standardize TypeScript/Python style, rename internal API or database artifacts, choose visual styling, decide new backend behaviors, authorize subscriptions, certify third-party rights, or approve extra MVP features. UI wording must follow tested behavior and accessibility requirements.

### 1.2 Authority and precedence

Apply authority in this order:

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
| `LANG-P15` | **Whether the proposed LANGUAGE.md itself is effective:** `LANGUAGE.md` is present on merged main `fca0d96fd071f1165e3e16658d821a3d36a20293` via PR #80 (rechecked 2026-10-19); metadata remains `proposed-owner-review`. Repository presence is not owner approval of all15 decisions. | Adopt after owner review; keep `status: proposed-owner-review` meanwhile. | Owner approval and scoped documented repo integration. |

