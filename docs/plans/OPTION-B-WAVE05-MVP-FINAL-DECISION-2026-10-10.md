---
id: VEL-DECISION-WAVE05-MVP-20261010-001
title: Final MVP scope choice — two optional BYOK AI actions and revision-safe author control
type: owner-directed-product-scope-decision
status: selected-for-mvp-design-specification-not-implemented
created_at: 2026-10-10
updated_at: 2026-10-10
owner: project_owner
version: 1.0.0
sources:
  - "Owner 2026-10-10 message: complete both Wave 5 tracks in one response, move on and choose final MVP decision"
  - docs/history/2026-10-10-owner-byok-free-or-paid-clarification.md
  - docs/history/2026-10-10-owner-waves-01-03-recommendations-accepted.md
  - docs/research/OPTION-B-WAVE05-R19-R06-AI-QUALITY-AND-RULES-2026-10-10.md
  - docs/research/OPTION-B-WAVE05-R10-REVERSIBLE-AUTHOR-EDIT-2026-10-10.md
related_research: [R06, R10, R19, R21]
---

# One-pass final decision — Vellistry AI-and-edit MVP

## Decision authority and scope

The owner requested: **'these are only going to be done once, no back and forth again do all the research you will need in one response and that is we continue to the next stage and land on a final decision in one response, choose this is just an MVP for now.'** The following is the assistant's **single scoped MVP selection under that delegation**, rather than an invented prior owner endorsement of a specific provider, a design-entry approval or production sign-off.

**Selected MVP behavior:** Vellistry is **manual-first and author-controlled**, with precisely **two optional AI text actions**: **Continue** a chapter at an insertion point and **Rewrite** one contiguous selected span. The user must explicitly generate and explicitly **Accept** or **Reject** a visible suggestion; if no AI key is connected, writing, Story Profiles, rules, chapter save and export remain available. Generated Story Profile facts are never accepted automatically.

### Binding product behavior chosen for MVP

| Dimension | Chosen MVP decision | Out of scope or condition |
|---|---|---|
| Provider and model menu | First adapter: **OpenRouter**, exposing a small curated/pinned list of supported actual downstream models/providers; architecture leaves room for other direct providers later | No mandatory default model, automatic router fallback or promise every model exists in every country; real provider policy check required before enabled route |
| Billing/key | **User BYOK**, credentials may be **free OR paid**; user pays own provider's bill | Vellistry pays no API charges, no free-only ban, no integrated platform subscription/billing |
| Key custody | **Session-only in-memory masked API key**; HTTPS transport to Nest inference proxy on user-initiated action; never store raw key in database, LocalStorage or analytics in MVP | Author must reenter after reload/session end; do not misrepresent server/proxy as unable to view plaintext key on each authorized inference request |
| Consent and request | Exact chosen excerpt and approved book-specific context, selected effective rules, provider/model, costs/limits/recipient disclosed before author-invoked generation | No silent entire-book upload, hidden cross-book context, unreviewed external fallback |
| Rules | Owner-approved **134 logical aliases**, 130 expanded catalog defaults ON, four compact extras OFF; only **task-relevant enabled subset** reaches request | Never inject 130 full expanded pages on every request; author overrides win and remain visible |
| AI outputs | **Plain-text review-only**; original-vs-proposal diff, errors/cancel leave accepted manuscript untouched | No HTML execution, auto-overwrite, autonomous novel writing, model edit tools or high-confidence quality claims |
| Revision acceptance | **Server-transactional chapter CAS** on actor/book/chapter/revision/document/selection; idempotent acceptance; immutable before/after snapshots | Reject stale, wrong-owner, incomplete-stream and repeated conflicting decisions; no silent rebase |
| Undo | History-backed **compensating new revision** after reload, only if accepted proposal is still latest; else require explicit conflict recovery | Do not let undo erase later author edits; no unlimited arbitrary inverse transforms |
| Rich text boundaries | Tiptap 3 manual editor; AI **Rewrite one contiguous text span within one paragraph**; Continue inserts at an author-selected point | Multi-block rich-mark AI transforms, automatic chapter restructure and collaborative editing deferred |
| Canon | Story Profiles manual-first; optional AI suggestions require distinct source-linked factual approval | Accepting prose never updates canon by itself |
| Scope of quality | No invented quality scores. Output is labeled a draft suggestion; route-level synthetic smoke before enabled real-model release | External real model and human scores **NOT RUN**, cannot promise voice preservation/hallucination-free result |

## Core MVP functionality retained

The earlier owner-approved eight MVP product areas stay intact: 1) author account/login, 2) library/books/chapters/notes, 3) manual editor/save/recovery, 4) characters/threads/Story Profiles, 5) rule preferences, 6) optional Continue/Rewrite, 7) explicit edit accept/reject/undo, and 8) import/export/backup/privacy. **This Wave 5 decision narrows AI functionality, not the rest of the accepted product scope.**

## Evidence-based rationale

- Pair05 R10 prior actual Tiptap research checks covered select/reject/accept/stale and rich mark preservation, but not database CAS.
- New locally executed research sample: **18/18** reversible state-machine contract tests pass, including idempotency, simulated two-tab staleness and compensating undo; **12/12** synthetic grading protocol tests pass, showing **one false acceptance** of narrator voice drift among six deliberately incorrect examples.
- Neither local fixture is a product integration or a real-model literary benchmark. No real user BYOK provider account or vetted model endpoint was used. Therefore Vellistry must make no provider superiority or measurable fiction-quality claim.
- A single router-based integration with explicit downstream endpoint pinning is a pragmatic first **MVP integration target**, not a guarantee of ZDR or suitability for every manuscript. If a route cannot meet verified privacy requirements, it stays disabled rather than silently failing over.

## Nonnegotiable checks before enabling features in an actual released MVP

Backend authenticated CAS/idempotent revision/undo transactions against live Supabase; two-tab and Alice/Bob browser tests; Tiptap rich selection and correct plain-text insertion; local/offline save and recovered drafts; real provider/model pinned synthetic-context smoke using an authorized BYOK key, 401/429/timeout/cancel behavior; key redaction and logout/account switch; no cross-book context; author-visible request/response review; production private manuscript/session/Storage/export protections; legal/hosting/backup release gates. **No test or law is marked passed by selecting the scope.**

## Continuation under existing Option B

Wave 5 is **closed as one bounded research/decision pass**: Track R19/R06 live inference **BLOCKED**, R10 simulation **PASS (local contract only)**. The user directed progression: **Wave 6 R18 operator/recovery readiness + final research-to-design closeout synthesis** is next and is the only active research wave. The established **Option B restriction on Figma/Lovable prototypes and new feature implementation/deployment is NOT lifted** by this decision. Wave 6 produces final gate evidence; any design-entry approval requires a separate explicit owner instruction.
