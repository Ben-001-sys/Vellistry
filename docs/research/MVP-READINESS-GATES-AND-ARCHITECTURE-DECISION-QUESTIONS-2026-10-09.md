---
id: VEL-RES-MVP-READINESS-20261009-001
type: research-readiness-plan
status: proposed-not-executed
created_at: 2026-10-09
updated_at: 2026-10-09
author: project-research
version: 0.1.0
sources:
  - "docs/requirements/MVP-SCOPE-DECISION-2026-10-09.md (PR #10)"
  - "docs/requirements/MVP-FEATURE-HORIZON-MAP-2026-10-09.md (PR #10)"
  - "docs/requirements/MVP-USER-JOURNEYS-AND-ACCEPTANCE-2026-10-09.md"
  - "PRE-DEVELOPMENT-RESEARCH-REGISTER.md (R01–R22)"
  - "docs/research/R06-RULE-APPLICATION-EVALUATION-PROTOCOL.md"
  - "docs/research/R04-FIRST-PILOT-AUTHOR-TRIAL-AND-ACCEPTANCE-PLAN-2026-10-08.md (PR #8)"
  - "https://github.com/Ben-001-sys/Vellistry/pull/7 (Tiptap real-package simulated-DOM evidence)"
related_research:
  - R01
  - R02
  - R04
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
related_requirements:
  - VEL-PRODUCT-SCOPE-20261009-001
  - VEL-MVP-ACCEPTANCE-20261009-001
---

# Vellistry MVP readiness — research dependency map and architecture comparison questions

**Status: RESEARCH WORK PLAN, NOT AN ARCHITECTURE DECISION.** The eight-area MVP and Tiptap 3 editor foundation are accepted; the specific service framework, storage, credentials, model provider, export/conversion, deployment and pricing remain undecided. Research workstreams can run in parallel, but product safety gates cannot be waived by management preference.

## 1. Definition of 'ready'

Separate four readiness claims:
1. **Scope-approved:** YES — product target of eight areas and deferral of native Cover Studio/professional publication; dated owner assent. This alone does not establish implementation feasibility.
2. **Prototype-ready:** YES for *isolated, synthetic, nonproduction experiments*, within bounded source/secret/privacy constraints. This is not an authorization to ingest external author manuscripts or spend real provider credits.
3. **Architecture-decision-ready:** PARTIAL — candidate patterns can be compared, but user/browser/trust/economics and source constraints still need evidence. No stack ADR should be accepted solely from familiarity.
4. **Public-release-ready:** NO — durable storage, authentic frozen pack, real author usability, live model response safety, profile review, DOCX fidelity and privacy/security tests remain unverified.

## 2. Research gates, their dependencies and required evidence

| ID | Domain | Current verified evidence | Blocking question / next deliverable | Necessary before |
|---|---|---|---|---|
| **G01** | R01 — frozen default source | Owner explicitly froze guidance, 13 domains and 130 identified lenses; disputes around AR shorthand/expanded variants remain | Immutable source inventory with hashes and side-by-side discrepancies; owner selects a **non-destructive packaging rule** before claiming authentic defaults | Authentic M5 default rules and M6 request composition |
| **G02** | R02 — target-author use | Source-backed owner intent and preliminary competitor/customer-comment review; no new direct interviews verified for this MVP | Observe proposed 11 journeys with representative authors; capture baseline pain, import/export demands, reaction to profile review and rule visibility | Final UX, initial public usability thresholds |
| **G03** | R05/R16 — editor in browser | Seven real Tiptap 3 / jsdom CI smoke cases passed, **not** keyboard/IME/paste in real browser | Browser instrumentation on long chapters, text selection mapping, save interruption, copy/paste/IME, accessibility and latency on target machines | Reliable M2/M3/M7 implementation readiness |
| **G04** | R07 — live profile truth | Owner-requested visible evolving character/storyline profiles with author control; no extractor or accuracy evaluation | Synthetic story-time fixtures, manual edits, accepted-vs-rejected AI draft scenarios; extraction precision/false positives; review burden and retcon impact | M4 automated suggestions, safe AI context |
| **G05** | R06 — rule request and prose | Twelve synthetic inclusion/exclusion tests passed; no real-model prose improvement proven | Certify source, inspect complete effective request, run bounded model comparison with blinded author preference; record violations/limits | Reliable M5/M6 claims and author controls |
| **G06** | R08/R21 — provider, BYOK and costs | BYOK requested as product interest; vendor/provider selection and actual costs not decided | Compare at least candidate providers' terms/data handling/model quality, API-key threat models, usage limits, budget and failure tests; explicit owner choice | M6 production connector and pricing/usage promises |
| **G07** | R11 — manuscript portability | Tiptap JSON serialize tested narrowly in jsdom, not DOCX conversion | Evaluate common DOCX/TXT import/export fixtures and an actual project backup/restore round-trip, disclose unavoidable style loss | M3 release claim and author switching viability |
| **G08** | R14/R15 — privacy & durability | User scope requires private unpublished manuscripts; no accepted production auth/storage design | Threat model, cross-account isolation, authorization matrix, encryption/secrets design, backup/restore, consent/retention and deletion rehearsal | Hosted external author trials and public product |
| **G09** | R18 — application architecture | Only Tiptap 3 / ProseMirror editor foundation approved | Compare storage/document granularity, offline/concurrent save strategy, AI request boundaries, job lifecycle, domain model and deployment economics; owner ADRs later | Full application-stack implementation |
| **G10** | R19 — acceptance and operations | 37 proposed acceptance checks and ten negative scenarios; none executed | Test fixtures and reproducible CI, real browser author trial reports, release thresholds, incident/recovery playbook, regression and a demonstrated full author journey | Any public MVP release claim |

**Research sequencing recommendation:** immediately begin **G01 source packaging** and **G08 data-trust boundary** while developing **G03 isolated browser editor experiments** and designing **G04 live profile review fixtures**. Launch **G02 author study** as soon as a consent-safe click-through or noncritical editor workflow is available; interviews can begin immediately without an app. Run G05 real-model tests only after G01/G06 data/privacy gates. Investigate G07 document conversion early because basic DOCX portability is inside MVP; do not defer its feasibility until launch week.

## 3. Proposed dependency order, not an implementation schedule

```text
Accepted eight-area scope
├─ G01 frozen source audit ────────────> G05 authentic rules + model assessment
│                                      └─ G06 authorized provider/cost ──> M5/M6 pilot readiness
├─ G03 Tiptap real-browser validation ─> document structure & save experiments
│                                      ├─ G07 DOCX/backup verification
│                                      └─ M7 selection-safe suggestion application
├─ G04 profile/time/authority fixtures ─> M4 manual + candidate profile tests
│                                      └─ G05/G06 controlled context requests
├─ G08 manuscript privacy and storage threat model
│    └─ authenticated pilot / any real private author content
├─ G02 author discovery and observed tasks ─> UX and useful acceptance thresholds
└─ G09 architecture comparisons + G10 end-to-end tests ─> owner-reviewed engineering ADRs
                                              └─ public release only after all blockers closed
```

No mandatory order among independent research spikes is implied. **Do not claim that a test passing in a mock resolves model quality, real-browser performance, privacy or a production data-retention obligation.**

## 4. Architecture decisions needing experiments — no choices made here

| Decision ID | Question | Candidate patterns to compare (not approved) | Falsifiable evidence needed |
|---|---|---|---|
| **ARCH-Q01** | Manuscript unit | Single whole-book Tiptap doc vs **chapter-scoped documents** vs mixed content model | Large-book/browser typing, chapter switch correctness, bounded saves, undo scope, cross-chapter operations, document repair |
| **ARCH-Q02** | Author persistence and offline | Hosted authoritative saves vs device-first offline replica + sync vs explicit local/export workflow | Recovery after network loss, real multi-device collision, privacy/backup cost, end-user expectations |
| **ARCH-Q03** | Editor manuscript representation | Versioned Tiptap JSON as editing representation plus portable normalized interchange vs HTML/Markdown canonical storage | Roundtrip formatting fidelity, migrations, content validation, unsupported node detection, portability |
| **ARCH-Q04** | Character/storyline truth | Flat current profile plus provenance records vs event/versioned story-time state vs mixed baseline/current/event timeline | Retcons, causality and time scope tests, author edit burden, explainability, consistent future-context lookup |
| **ARCH-Q05** | Live extraction cadence | On-demand analyze vs chapter/scene-save review vs ongoing paragraph debounce | Accuracy, irrelevant suggestion frequency, privacy, token cost, perceived writing interruption |
| **ARCH-Q06** | Safe text suggestions | Whole-doc change guard vs ProseMirror transaction mapping/marks vs durable revision-based patch with conflict review | Long-running request while author edits/undoes/reformats, overlapping proposals, wrong-range mutation rates |
| **ARCH-Q07** | AI request processing | Direct server-managed request/stream vs durable queued jobs for long requests, separated from interactive editor | Cancellation semantics, retries/idempotency, timeout handling, secrets exposure, late-result safety and unit costs |
| **ARCH-Q08** | Provider abstraction and keys | Single evaluated BYOK connector with portable internal interface vs immediate full provider routing layer | First release costs/terms, proven provider behavior, key storage/rotation, unnecessary complexity risk |
| **ARCH-Q09** | App backend and data boundaries | Integrated application server vs dedicated API/service components; structured relational records vs document-heavy persistence | Domain access control, recovery/backup, rules isolation, profile versioning, deployment/maintenance burden |
| **ARCH-Q10** | DOCX/TXT project portability | Separate interchange pipeline and internal writer model vs tightly coupled editor-specific conversion service | Actual DOCX fixtures, export/import tests, licensing/paid extension scope, data-loss warnings |
| **ARCH-Q11** | Authentication/authorization | Managed auth provider vs self-hosted framework; account/book access policy through all API/background actions | Cross-account denial matrix, vendor lock-in, breach response, cost, compliance |
| **ARCH-Q12** | Hosting and operations | Hosted application/platform environment vs dedicated service/infra, subject to chosen architecture | Backup RPO/RTO targets, operating cost, available team competence, security patching, audit/reporting |

**Leading research hypothesis, NOT recommendation for approval:** Start with a **chapter-sized editor transaction boundary and explicit user-reviewed profile changes**, because those align with the accepted product journey and may bound failure/cost. Compare experimentally against alternative granularities before accepting an ADR. Do not infer PostgreSQL/Next.js/NestJS, Tiptap commercial packages, a vector DB or any AI-provider service from this table.

### Architecture controls regardless of the eventual stack

The MVP concept must keep separate identities for:
- authenticated user and authorized book,
- book → ordered chapters and optional notes,
- accepted versioned prose,
- story entity/profile baseline and story-time state,
- proposal/evidence/source reference and approval status,
- frozen default rule archive vs each author's active personal configuration,
- an effective model-request snapshot separate from the manuscript or secret key,
- AI suggestion/result with source version and accepted/rejected state,
- portable export/backup manifest with declared fidelity.

These are **conceptual data and trust boundaries**, not a database schema, classes, API endpoints, object storage layout or accepted ADR.

## 5. Suggested first three implementation *research* slices

### Slice S0 — independent writing (no real AI, no private manuscript accounts)

- Synthetic 2–3 chapter fixture in a real browser; Tiptap with formatting/undo, chapter navigation and simple nonproduction save simulation.
- Manually editable Character + Storyline profiles in the interface without a model. Prove the profile UI's usability, not automated detection.
- Save/export small synthetic data to TXT/structured backup; log unsupported DOCX assumptions rather than pretending DOCX exists.
- Test negative scenarios for fake save acknowledgements, chapter confusion and undo.
- **Evidence:** browser test recordings/results and fixture/version; all `ACC-M1/M2` and relevant `ACC-M4` marked observed vs not run. Prototype data is disposable.

### Slice S1 — author-control and candidate updates, with simulated AI

- Synthetic rule pack only until G01 actual guidance source certification; real UI toggles and effective-request preview.
- Simulate asynchronous candidate manuscript rewrites and profile updates. Manual accept/reject, stale changes and undo are exercised; no provider connection.
- Explicitly label fake outputs and rules as simulations, never demonstrate them as real author guidance compliance.
- **Evidence:** negative test matrix `NEG-02/03/04/05` with reproducible recorded results.

### Slice S2 — authentic integrated pilot, only after gates

- Add independently owner-approved model and credential/consent design, source-verified frozen rules, context discipline, controlled Continue/Rewrite and source-linked candidate profile extraction.
- Add production-quality account/book storage, recovery, explicit backups, basic real DOCX fixtures and security/accessibility tests.
- **Evidence:** full `VEL-JRN-001..011` task execution on recorded build; external author feedback and closed critical incidents.
- This is a *pilot proposal*, not a command to deploy services or allow private manuscripts before security review.

## 6. First concrete research tickets to prepare (proposed, not opened)

| Ticket key | Bounded deliverable | Acceptance evidence | Blocking data |
|---|---|---|---|
| **RDY-01** | Immutable inventory of SRC-003 fiction guidance variants, AR discrepancies and no-change packaging alternatives | Source hashes, exact verbatim titles, unresolved alternatives, owner decision question | Access to authoritative original source |
| **RDY-02** | Tiptap real-browser trial for synthetic multi-chapter writing, selection/IME/undo and big chapter behavior | Browser, OS, library version, scripted actions, measured latency, screenshots/logs | Test runtime; no model/provider selection |
| **RDY-03** | Manual live Story Profiles interaction prototype and story-time fixture tests | Create/edit/restore character + storyline state and evidence links with AI off | R07 scope consent; no backend architecture needed |
| **RDY-04** | Author manuscript threat model for initial trial and eventual hosted app | Actors, assets, attack vectors, data lifetimes, privacy/consent/backup review | R15 author-owned private text treatment |
| **RDY-05** | DOCX/TXT author portability compatibility matrix | Known-supported styles, loss warnings, round-trip fixture report | R11 conversion research |
| **RDY-06** | First prospective author interviews with representative tasks | Consent-safe notes, task outcomes, baseline tool requirements | Recruit actual users; do not fabricate findings |
| **RDY-07** | Architecture experiment/decision shortlist after RDY-01–06 evidence | Option scoring and owner-requested ADRs, no premature framework choice | Inputs across trust/editor/profile/export |
| **RDY-08** | Deterministic source-rule applicability and request snapshot experiment | Rule on/off/exception trace, simulated vs authentic pack separation | R01 source gate |
| **RDY-09** | One provider BYOK model/terms/quality/cost evaluation | Costed synthetic scenes, retention/security analysis and owner selection recommendation | R08 + R15; secrets never in Git |

**Proposed immediate start:** RDY-01 and RDY-04 in parallel; RDY-02 and RDY-03 as isolated synthetic UI tests. We should not build a full backend before those tests clarify document identity, profile authority, recovery and privacy responsibilities.

## 7. Review and promotion rules

- Each gate must have exact result artifacts and a **PASS/FAIL/BLOCKED/NOT_RUN** state with reproducible test method.
- Decisions should be recorded individually, with the owner explicitly confirming chosen scope/architecture; no defaults invented from their unrelated project history.
- Keep the **396-item** approved MVP-horizon map intact unless new explicit scope change is approved.
- All still-selected full Cover Studio/EPUB/print research stays in the roadmap, but it is *not* an initial MVP implementation blocker.
- Never call this readme a 'completed architecture' or a verified data model; it is a prioritized research plan.
