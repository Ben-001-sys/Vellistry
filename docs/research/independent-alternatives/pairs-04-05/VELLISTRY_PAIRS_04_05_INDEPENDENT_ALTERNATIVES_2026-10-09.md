# Vellistry — Research Pairs 04 and 05: Independent Alternatives Review

**Prepared:** 2026-10-09  
**Track:** Branched independent alternative research; canonical owner decisions remain with the original chat.  
**Status:** `RESEARCH-ONLY / ALTERNATIVES-ASSESSED / EXPERIMENTS-NOT-RUN`.  
**Repository:** [Ben-001-sys/Vellistry](https://github.com/Ben-001-sys/Vellistry)  
**Provenance:** Canonical [research sequencing](https://github.com/Ben-001-sys/Vellistry/blob/main/docs/plans/RESEARCH-PAIR-AND-PREIMPLEMENTATION-DESIGN-2026-10-09.md), [research register](https://github.com/Ben-001-sys/Vellistry/blob/main/PRE-DEVELOPMENT-RESEARCH-REGISTER.md), [approved MVP](https://github.com/Ben-001-sys/Vellistry/blob/main/docs/requirements/MVP-SCOPE-DECISION-2026-10-09.md), [R06 protocol](https://github.com/Ben-001-sys/Vellistry/blob/main/docs/research/R06-RULE-APPLICATION-EVALUATION-PROTOCOL.md), and current official product documentation listed below.

## Executive conclusion

Pair 04 covers **R08/R21** optional AI provider/BYOK feasibility and **R19** a reproducible authoring/model evaluation corpus. Pair 05 covers **R06** rules applied to actual model requests and **R10** reversible AI manuscript suggestions. They are **queued**, not the active research pair under the canonical two-track-at-a-time policy. This branch is performing an independent *desk review and synthetic fixture preparation*, not opening four primary tracks, completing gates, authorizing spend, or implementing production features. No GitHub changes, remote model inference, genuine manuscripts, credentials, paid inference, real Tiptap-browser experiments or owner approvals occurred.

**Key alternatives worth forwarding:**
1. R08: Free remote inference may be useful for synthetic research, but privacy terms matter more than the price tag. Consider a narrowly evaluated direct-provider free-tier pilot (e.g. Groq) or **explicit user-operated local inference** (Ollama) alongside—not instead of—the original team's single-provider BYOK plan. Do not use free-tier Google Gemini for unpublished author text by default: official pricing says free-tier content is used to improve products.
2. R19: A **small, adversarial, versioned synthetic benchmark** can test rule overrides, POV leakage, long-range continuity and editing without inventing author preferences. It must be paired with real blind human ratings and real editor tests later. Fourteen synthetic fiction cases and 15 R10 safety cases are included.
3. R06: Compare a selective, provenance-pinned **task-specific guidance assembler** with an all-active-lenses approach. This reduces context cost and relevance dilution, but could silently omit important guidance unless the author sees and approves the effective request. Compare against the approved R01 pack only after mapping certification.
4. R10: A **proposal card outside the document + revision/CAS guarded accept** may be sufficient for the solo-author MVP and free to build. It is safer than auto-replacing selection. ProseMirror mapping can later permit advanced nonconflicting rebases, but never treat offset mapping alone as permission to overwrite newer prose.

## Part 1 — Pair 04, track A: R08/R21 provider and BYOK alternatives

### Scope and acceptance criterion from canonical research plan

Explore no-*mandatory*-paid realistic model connector options, current provider terms/privacy and model-handling controls, local inference feasibility, author key lifecycle, output token/cost ceilings, streaming, cancellation and failure behavior. The MVP explicitly aims for **one evaluated BYOK provider**, not full model routing, platform-billed credits or external MCP integration. No consumer ChatGPT/Claude subscription should be assumed to pay for API use. No owner-approved paid inference exists.

### Official-source observations as of this report

| Candidate | What official documentation supports | Unresolved risk | Research suitability |
|---|---|---|---|
| **Google Gemini API free tier** | Some models have free inputs/outputs; the pricing table labels free-tier inputs as **used to improve Google's products**, versus paid tier 'No'. Free model access/limits vary. [Gemini pricing](https://ai.google.dev/gemini-api/docs/pricing), [rate limits](https://ai.google.dev/gemini-api/docs/rate-limits). | Real unpublished manuscript transfer, model-specific access limits and account/geography; cannot assume privacy parity with paid service. | Synthetic fixtures only absent informed author/provider review; **not a privacy-safe default**. |
| **GroqCloud free** | Free-plan model-specific RPM/RPD/TPM/TPD quotas (official docs list e.g. 8k TPM / 200k TPD for particular models) and 429 behavior. Groq states routine inference content is not retained by default but permits narrowly described reliability/abuse retention up to 30 days, with data-control options. [Groq limits](https://console.groq.com/docs/rate-limits), [your data](https://console.groq.com/docs/your-data). | Selected actual model quality, terms/commercial eligibility, rate-limit exposure, regional availability and individual account controls. Non-retention by default is **not** zero disclosure. | Good **candidate for consent-safe synthetic comparison**; not yet selected for Vellistry's MVP. |
| **OpenRouter free models** | Offers model/provider aggregation; free endpoints are rate-limited and limits/keys are account-aware. Underlying providers have **different data training and retention policies**, and free/paid routing filters differ. [Limits](https://openrouter.ai/docs/api_reference/limits), [provider logging](https://openrouter.ai/docs/guides/privacy/provider-logging). | Extra intermediary, provider substitution and policy variance, limited free quota; zero-logging claims must be checked per route and account. | Useful for interoperability **comparison**, weak choice for a first single-provider confidential manuscript path without pinned routing. |
| **Cloudflare Workers AI free allocation** | Free plan provides **10,000 neurons/day**, more only on Paid; some newer models require a paid billing method. [Official pricing](https://developers.cloudflare.com/workers-ai/platform/pricing/). | Not a writer-owned universal BYOK provider; author does not necessarily hold an independent provider billing account, compute caps need per-model translation, Cloudflare integration and platform ownership. | Bounded research alternative, not a direct substitute for user-supplied provider keys. |
| **Ollama local inference** | Local API at `localhost:11434/api`, OpenAI-compatible local endpoint, **no local API key**; Ollama runtime MIT-licensed. [API](https://github.com/ollama/ollama/blob/main/docs/api/introduction.mdx), [license](https://github.com/ollama/ollama/blob/main/LICENSE). | Local engine MIT **does not grant rights for every model's weights**; RAM/CPU/GPU and context constraints; user must install/run software; local endpoint should not be exposed to internet or arbitrary websites. | Strong opt-in privacy/offline **alternative** to remote AI, but not proven usable for long-fiction generation on typical laptops. |
| **No provider connected (AI-off)** | Accepted MVP M2/M3 requires fully functional writing and exports without model key. | Provides no Continue/Rewrite quality evidence. | Mandatory baseline for product value and degradation tests. |

**Cost language:** free allocation is not a sustainable production budget. Document provider-side quotas, per-request token usage, any free-account restrictions, local electricity/hardware/network costs, and zero-cost fallback. Avoid a silent upgrade to a billed plan. A client-side local inference pathway entails install/support complexity even though cloud token cost is zero. Model licenses must be checked individually, not inferred from Ollama's runtime MIT license.

### BYOK handling alternatives — threat/UX comparison

**B1 — Per-request author key without storage.** Author pastes provider key for one session/request, server forwards from memory then discards it. Minimal durable secrets but repeated entry, browser/XSS and transit risks, accidental logs; a write-only form and no echo are essential. Session memory must truly be cleared.

**B2 — Short-lived encrypted server-side credential.** Store encrypted per-user key with audited access, separate encryption key and rotation, avoid raw key in client and logs. Convenient, but riskier breach consequences and heavier key lifecycle. Evaluate only with R15 session/security ownership decisions.

**B3 — Local-only provider on author's machine.** No vendor key and no remote manuscript transmission if verified; requires installed model and endpoint isolation, and browser-to-local threat review. Cloud-rendered Vellistry front-end calling `localhost` introduces localhost/CSRF/CORS exposure; a signed local companion design would require separate research.

**B4 — Aggregator key via OpenRouter.** One endpoint simplifies provider switching, but adds policy/cost routing complexity and cannot be deemed model-equivalent. Not necessary for the approved first single-provider connector.

**B5 — Platform-paid shared credential.** Excluded by the no-paid-services and MVP boundaries. Do not use provider credentials from a researcher's subscription as implicit product budget.

#### R08 evaluation controls (proposed, not measured)

- For any remote request: visible disclosure of which chapter excerpts, active rules and approved profile facts are sent; explicit author consent; never send all books by default.
- Model IDs/versions, endpoint/provider identity and privacy routing pinned per trial; record actual settings, streaming/failure and context errors.
- `max_input_tokens`, `max_output_tokens`, `request_timeout`, request-specific total budget and **local daily total** caps. Reject before sending when estimated cap exceeded, reconcile actual usage after completion. Estimation can be wrong; never promise exact cost before provider reports billing.
- Streaming 429, mid-stream network loss, 401 invalid key, 403 blocked account, exhausted free tier, provider safety refusal, JSON/schema failures, cancel/retry and user disable while in flight.
- No API keys in browser storage, git, persisted manuscript backups, URLs, network error logs, serialized prompt snapshots or screen recordings.
- Report **quality and confidentiality separately**. A model whose outputs read well could still be disqualified by the chosen privacy promise.

### Discriminating tests for original chat

- **R08-A:** Google free versus paid data-use terms are not equivalent. Document this difference before any author-data trial.
- **R08-B:** Use synthetic `VL4-01..14` to test Groq/local/OpenRouter candidate only if current free eligibility and owner consent allow. Capture actual quotas, model availability and data controls; no fabricated model responses.
- **R08-C:** Compare 350–500-word continuations for POV/physical continuity and selected-text rewrites for voice rather than choosing on generic chat benchmarks.
- **R08-D:** Measure runtime on low-resource Windows laptop and a common desktop, with real model/version, memory consumption, time-to-first-token and output speed. No local inference measurements were made here.
- **R08-E:** Fake/stub provider response handling is enough to develop UI and failure states while staying within zero-cost policy; it cannot establish model quality.

**Pair 04 R08/R21 status:** External official-provider documentation reviewed; operational license suitability, privacy decisions, free-tier eligibility and live inference quality **NOT_RUN / OWNER REVIEW**.

## Part 2 — Pair 04, track B: R19 alternative evaluation corpus

### Corpus strategy comparison

| Strategy | Benefit | Failure mode | Finding |
|---|---|---|---|
| Public novels scraped from web | Cheap volume, long contexts | Rights, consent, genre/model-training contamination, cannot guarantee author-provenance | **Not recommended** for initial research corpus. |
| AI-generated sample stories without labels | Fast to create | Circular self-rating and uncontrolled baseline, hidden quality assumptions | Insufficient for claims about literary quality. |
| **Original synthetic multi-genre cases** | Private, reproducible, low legal/data risk; clear facts and deliberate exceptions | Artificial, short; may fail to represent real long-form author constraints | **Prepared in this branch**; enough for safety and method design, not user-quality validation. |
| Opt-in real-author texts + blinded reviewers | Validates actual value and author intent | Recruiting and privacy/withdrawal handling, slower | Required later; **no real participants were recruited or studied**. |
| Adversarial long-horizon handcrafted state | Good for episodic facts and chronology with exact ground truth | Unrealistic if only symbolic prompts; should include prose and multiple author interpretations | Prepared limited synthetic case; long-running 60-chapter test still NOT_RUN. |

### Delivered datasets

- `R19_SYNTHETIC_FICTION_CORPUS_v0.1.jsonl`: **14 fully original synthetic prompts** across 14 genre labels; five rewrites, nine continuations, first/second/third/omniscient viewpoint cases, nonlinear and long-horizon prompts, POV knowledge, injuries, story economy, power consistency and author-intentional exceptions. Each includes approved-fact ground truth, story setup, sample source excerpt, author goal and *expected human checks*, but **no invented model responses or author scores**.
- `R10_REVERSIBLE_EDIT_CASES_v0.1.jsonl`: **15 editing/control test specifications** for stale proposals, marks, splits, overlapping suggestions, cancellation, idempotence, XSS, partial streams, cross-book leakage and independent profile approval, all marked `NOT_RUN`.
- `validate_fixtures.py`: deterministic local validation of required corpus fields, record uniqueness, varied genres/POVs, rewrite and continuation counts, declared exceptions, empty model-rating slots, and safety test identities. **Validating the fixture is not validating an editor, model or quality hypothesis.**

### Proposed experimental scoring, clearly not an owner-approved threshold

For blind output comparisons, use at least **two independent human judges**, ideally including someone who actually writes or edits in the represented genres. Conceal provider/condition labels, rotate presentation order, record disagreement and keep the right to say “none is good.” Use a 1–5 *anchored* score for:

1. Canon/physical/temporal consistency (fail if known crucial fact is contradicted).
2. POV and character-knowledge discipline (critically fail if hidden facts are exposed).
3. Author-intended voice and **legitimate exception** retention.
4. Specificity, causal scene progression and nonrepetition of scene function.
5. Dialogue individuality and subtext where applicable.
6. Clarity/readability and formatting fidelity where applicable.
7. Author's explicit task fulfillment and acceptability of edit.

Report **critical invariant failure counts**, blind pairwise preference, median/dispersion by dimension, adherence to author's constraints and review duration; do not compress into one unsupported AI-authorship score. An LLM judge can supplement error triage, not substitute for blind writers. When two human judges disagree, record both and invite discussion rather than inventing a gold label.

### Sampling feasibility versus no-paid constraint

The existing R06 protocol proposes four minimum variants, C0–C3, with 3 generations per cell initially. Applied to six cases, that is **72 outputs per model** before any provider-family replication; at two model families **144 outputs**. The full 14-case corpus at that design would be **168 outputs per model**. This is a request-count illustration, **not an approved spend or promise that free quotas allow it**. Run deterministic stub/preview tests at zero model cost first, and obtain owner authorization or use only documented free quota for the subset actually executed. Record `NOT_RUN` rather than invent scores.

### Confidence limits

The corpus can uncover *controlled consistency* problems, but no short synthetic pack establishes quality for 100-chapter fiction or author willingness to use the Rules Studio. It cannot satisfy the canonical R19 release-quality gate without real model outputs, human ratings, real editor/save tests, and consent-safe author discovery. R19's DOCX, accessibility, crash/recovery and production isolation obligations also remain owned by their respective research pairs.

**Pair 04 R19 status:** Original fixture set created; fixture structure PASS; human and actual model evaluations **NOT_RUN**.

## Part 3 — Pair 05, track A: R06 alternatives to applying default guidance

### Fixed prerequisites

- The owner accepted original-source preservation ADR-0007: 130 printed codes and **260 immutable compact/expanded records**. The active/default rule pack requires additional approved source mapping.
- The approved MVP has simplified Rules Studio with genuine initially active defaults after certification, book/workspace custom preferences, disabled-rule exclusion and deliberate author exceptions.
- The repo's [R06 protocol](https://github.com/Ben-001-sys/Vellistry/blob/main/docs/research/R06-RULE-APPLICATION-EVALUATION-PROTOCOL.md) explicitly separates deterministic request correctness, model output quality and author-perceived usability, with baseline configurations C0–C3 and optional C4. Its eighteen proposed assertions are **not passed model tests**.
- Any experiment before R01 certification uses **SIMULATED GUIDANCE**, never mislabels a source pack or silently resolves AR-04/AR-09.

### Alternative prompt/request assembly models

| Alternative | What is included in each request | Potential benefit | Principal risk | Research conclusion |
|---|---|---|---|---|
| **G1 — whole active long-form lens pack** | Every active expanded lens plus complete manuscript context | Simple mental model, maximal visible coverage | Context bloat, contradictory advice, relative signal dilution, more tokens, model misses relevant facts | Good negative-control baseline, unsuitable automatic default. |
| **G2 — compact universal constitution + task-relevant lenses** | Approved short principles always; ranked subset matching action, POV/genre and explicit author overrides | Lower token load, greater task relevance, faster response | Retrieval may omit an important active lens; stale templates may reintroduce disabled guidance | Best experiment to compare with original selective-context direction; require complete preview and exclusion tests. |
| **G3 — domain packs per author preference** | Relevant domain's approved lenses chosen via UI | Understandable browsing, deterministic domain selection | Coarse domain controls mask granular exceptions; user expects one disabled code to stay disabled | Potential navigation UX, not substitute for per-lens resolution. |
| **G4 — two-pass generation + critic against all enabled lenses** | One writer request, then independent model review of output against guidance | May discover local mistakes without bloating generation prompt | Doubles calls/latency, critic invents problems and can erase voice; violates no-paid cost comfort | Reserve for explicit optional audit, not default MVP. |
| **G5 — author-only rules, default off** | Only custom rules | Pure author control, low system intrusion | Contradicts approved M5 initial certified defaults and loses generic baseline | Include as test C4, not automatic product policy. |
| **G6 — static approved pack per book/version, no opaque provider-thread memory** | Each request includes explicit source/version snapshot, never inherited hidden previous provider conversation | Strong audit and disabled-rule exclusion | Repeats context every call; requires token budgeting | Valuable cross-cutting safety boundary even under other approaches. |

### Mandatory deterministic controls regardless of approach

1. Resolve immutable identity (`source hash`, `compact/expanded`, printed code) through the **owner-approved versioned map**; reject bare ambiguous codes.
2. Resolve per-book/workspace author enabled/disabled/exception status deterministically, plus current action and story-time. **Disabled creative rules must be absent** from the entire effective request; don't accidentally copy them into a generic prefix or cached memory.
3. Keep approved canon and character knowledge distinct from optional stylistic lenses. Turning a writing suggestion off must not delete story fact constraints.
4. Log the request's chosen lenses, excluded IDs, reason for retrieval, total estimated token budget, dropped context, active author override, provider/version and source revision (not secrets or manuscript text in ordinary observability logs).
5. Clearly preview truncation; never imply all active rules fit when only a subset is sent. Do not silently downgrade a selected author-specific instruction or crucial POV limit.
6. Exact same author material across C0/C1/C2/C3, with one controlled variable per comparison. Model output is a statistical observation, not a deterministic result.
7. Protect deliberate fragmentation, thematic ambiguity, genre conventions and purposeful repetition; no blanket ban or AI-generated-text detection claims.

### A high-information R06 experiment with the delivered corpus

Use `VL4-06` (dialect), `VL4-08` (satirical triplets), `VL4-04` (POV secret), `VL4-05` (power rule), `VL4-11` (moral ambiguity) and `VL4-13` (delayed payoff). For each compare source-approved C0/C1/C2/C3, then `G1` vs `G2`, recording rule-ID inclusion/exclusion, context tokens, model failures, author-voice success and blind preference. Use disabled-rule and exception **negative cases** before any model call. Two-layer comparisons should not mix variables casually: separate the *prompt-composition* difference from the *author toggle* difference in the experimental design.

**Pair 05 R06 status:** Protocol/alternatives reviewed; current R01 source mapping gate not certified for a default pack; no model completions or independent human ratings performed in this branch. Not PASS.

## Part 4 — Pair 05, track B: R10 alternatives for reversible rich-text edits

### Official editor/runtime facts

- Tiptap's [`insertContentAt`](https://tiptap.dev/docs/editor/api/commands/content/insert-content-at) can replace a precise position range with schema-parsed HTML or JSON. It **does not** itself establish that the old range is still the author's intended selection when an asynchronous response returns.
- ProseMirror [transforms, steps and position mapping](https://github.com/ProseMirror/prosemirror-transform/blob/master/src/README.md) provide position remapping/invertibility, but position mapping alone cannot prove that underlying meaning/marks are unchanged.
- Tiptap's [`Undo/Redo`](https://tiptap.dev/docs/editor/extensions/functionality/undo-redo) extension is available in the editor stack; an in-memory undo is **not** equivalent to persisted rollback after a save or browser crash.
- Tiptap's [Tracked Changes](https://tiptap.dev/docs/editor/extensions/functionality/tracked-changes) is a **paid, experimental add-on**, not available to assume under Vellistry's no-paid-services scope. Do not promise its production-ready behavior or license.

### Alternative author review patterns

| Alternative | Accept workflow | Benefit | Limitation / adversarial case | Finding |
|---|---|---|---|---|
| **E1 — copy-only side-by-side proposal** | Writer manually copies chosen result into manuscript | Safest possible no-auto-write boundary and low technology risk | Slow and error-prone; formatting and long selection tedious | Suitable research fallback/AI-off friendly, weak polished MVP experience. |
| **E2 — external proposal card, exact selected-range CAS** | Capture chapter revision, selected node range, structural slice hash + proposed Tiptap JSON; accept only after explicit author action and server version check | Simple, free core primitives, auditable | Conservative: changing even unrelated prose can invalidate proposal; requires re-review | Strong low-complexity MVP candidate if real-browser and server tests pass. |
| **E3 — mapped ProseMirror Step proposal with CAS** | Capture original content/selection and all subsequent steps; map range, prove selected slice unmodified, authorize atomic accept | Can accept proposals despite safe unrelated edits | Complex mapping across splits/joins/marks; mapping history may be missing on other devices; offset success is not semantic success | Valuable later optimization, not required for first MVP. |
| **E4 — separate chapter branch + compare/merge** | Suggestion stored in detached alternative chapter revision; manual choose/hunk approval | Robust long-form alternative writing; no live mutation | Bigger diff/rebase surface, genre prose changes hard to line-diff, more author review burden | Appropriate for full-scene rewrite, not only selection rewrite. |
| **E5 — paid built-in tracked changes** | Extension does accepted/rejected marks inside doc | Convenient UX and established APIs | Paid + alpha; violates no-paid boundary; source license and package not authorized | Not a current approved option. |
| **E6 — plain-text `search.replace()`** | Find original string and replace first match | Trivially easy demo | Multiple occurrences, selection drift, marks loss, wrong chapter overwrite | **Reject as unsafe** for accepted novel text. |

### Reversible edit invariants (proposed)

A proposal must include at least:

- `proposal_id` and request/idempotency key;
- authenticated `author_id`, `book_id`, `chapter_id`, `source_revision_id`/ETag;
- structural selected-range fingerprint incorporating **text, marks, node type, attrs**, not only visible text, plus context anchors;
- proposed schema-validated Tiptap content and any new embedded assets (untrusted HTML never directly trusted);
- prompt intent, source rule mapping/version, selected guidance IDs, contextual canon IDs and model/provider version (nonsecret provenance);
- review/accept/reject state and expiry;
- separately owned `profile_candidate_ids` (not implicitly accepted).

A **safe accept** requires authenticated owner authorization, current chapter and accepted source revision/ETag match (or independently proved rebase), valid schema and target slice, atomic persisted revision, then a single intentionally undoable editor transaction. Editing while pending, changing bold/italic marks in range, paragraph splitting, selecting another book, duplicate accept, or 429 mid-stream must **never** silently promote a proposal. Rejection must not alter the accepted manuscript or canon. Undo after a successful server save must produce an **authorized new revision** (or explicitly governed restore) — otherwise the UI can visually undo without durable storage agreeing.

### R10 test focus

The included `R10_REVERSIBLE_EDIT_CASES_v0.1.jsonl` has 15 negative/positive cases: exact unmodified range, target edited, unrelated edits, formatting-only mutation, split paragraph, overlap, canceled request, reject, separate profile review, double accept, malicious HTML, persistent undo, cross-book isolation, partial stream, unaccepted profile candidates. Every case is marked `NOT_RUN`, and no assertion is made that ProseMirror/Tiptap passes it.

**Minimal actual experiment for canonical developers:** in a real browser with open-source Tiptap 3, insert a marked passage, select text, simulate async AI result; edit the same selection (including marks), a different paragraph, and split the target; use real transaction `mapping`, try to accept and ensure CAS blocks or intentionally safe rebase; save/restore and inspect JSON/marks; repeat with two accounts/projects and concurrent proposals. Record old/new node JSON hash and actual server revision. Keep model completely stubbed for these deterministic safety tests.

**Pair 05 R10 status:** Real editor feasibility supported by documented primitives; no actual editor acceptance, CAS persistence, crash/undo, or browser selection test was executed in this branch. Not PASS.

## 5. Cross-pair dependencies, what should be handed back, and what should not

| Dependency | Why it matters | Required handoff |
|---|---|---|
| Pair 01 R01 before R06 | Real defaults require certified frozen active mappings; bare `AR-04` remains ambiguous | Exact approved pack version and source hashes before claiming R06 C1/C2/C3 are authentic. |
| Pair 01 R15/K2B before R08 real author data | Keys, manuscripts, sessions and signed URLs require explicit privacy policy and proven route protection | Author-consent and secrets transport decision; synthetic-only testing meanwhile. |
| Pair 02 R05/R16 before R10 browser UI approval | Real Tiptap selection, IME/marks/keyboard behaviors need observed evidence | Browser editor baseline and accessible keyboard flows. |
| Pair 03 R07 before profile candidates in R10 | Accepted canon and speculative model output must remain separate | Profile evidence/retcon and author approval contract. |
| Pair 04 R08 before R06 real-model comparison | Provider/version/terms/credit exposure not decided | Reproducible bounded model selection/consent with failure logging. |
| Pair 04 R19 before Pair 05 blind quality claims | Without fixtures and protocol, results are anecdotal | Synthetic fixtures, blind review rubric, scoring identities and versioned outcomes. |

### Proposed disposition of alternatives (NOT owner decisions)

- **Keep for direct comparison:** R08 Groq synthetic free-tier, Ollama locally operated models, and Gemini free-tier *only with strictly synthetic material*; R19 synthetic discriminative corpus plus real consented author eval later; R06 task-relevant deterministic selection versus all-active pack; R10 exact-range CAS proposal cards versus step-map rebase and manual copy.
- **Avoid silently adopting:** free provider as confidential-author default; aggregator fallback that changes data use/provider/model without disclosure; AI quality scored by an LLM alone; entire 130 long rules in every request; plain-text string replacement; paid Tiptap Tracked Changes as core MVP dependency.
- **Do not override:** original chat's provider security/mapping decisions, accepted eight-part MVP, research-pair sequencing, independent design approval, no-paid-services and no-silent-canon rules.

## 6. Evidence-status register

| Result | Classification | Status |
|---|---|---|
| Existing R06 protocol has C0–C3 comparisons and 18 proposed assertions | Repository-sourced | VERIFIED FROM REPO; **test not run** |
| 14 synthetic fiction and 15 AI-edit cases created | Generated research fixture | CREATED; structure validation PASS |
| Gemini free-tier data improvement and free models | Vendor official documentation | DOCUMENTED; individual account terms/access unverified |
| Groq free quotas, retention exceptions | Vendor official documentation | DOCUMENTED; no account/model benchmark |
| OpenRouter provider routing/privacy variability | Vendor official documentation | DOCUMENTED; no account/routing test |
| Ollama local API and engine MIT license | Vendor/repo documentation | DOCUMENTED; model weights and local performance untested |
| Cloudflare free allocation | Vendor official documentation | DOCUMENTED; no deployed Workers experiments |
| Tiptap selected range insertion, PM mapping, paid Tracked Changes | Vendor/open-source documentation | DOCUMENTED; no integration experiment |
| Human literary preference scores and model output adherence | Requires participants and inference | **NOT_RUN** |
| Source-certified, deployed Vellistry default guidance and reversible edits | Requires original branch decisions and actual app tests | **BLOCKED / NOT_RUN** |

## 7. Official sources and canonical Vellistry files

### Canonical repository
- [Research pair sequencing](https://github.com/Ben-001-sys/Vellistry/blob/main/docs/plans/RESEARCH-PAIR-AND-PREIMPLEMENTATION-DESIGN-2026-10-09.md)
- [Pre-development research register](https://github.com/Ben-001-sys/Vellistry/blob/main/PRE-DEVELOPMENT-RESEARCH-REGISTER.md)
- [MVP scope decision](https://github.com/Ben-001-sys/Vellistry/blob/main/docs/requirements/MVP-SCOPE-DECISION-2026-10-09.md)
- [R06 rule-application protocol](https://github.com/Ben-001-sys/Vellistry/blob/main/docs/research/R06-RULE-APPLICATION-EVALUATION-PROTOCOL.md)
- [R01 conflicts](https://github.com/Ben-001-sys/Vellistry/blob/main/docs/research/R01-CONFLICT-MAPPING-REVIEW-2026-10-09.md)
- [ADR-0007 source preservation](https://github.com/Ben-001-sys/Vellistry/blob/main/docs/decisions/ADR-0007-immutable-compact-expanded-guidance-sources.md)

### Vendor/open-source primary references
- [Google Gemini API pricing and data use](https://ai.google.dev/gemini-api/docs/pricing)
- [Google Gemini limits](https://ai.google.dev/gemini-api/docs/rate-limits)
- [Groq free tier/rate limits](https://console.groq.com/docs/rate-limits)
- [Groq customer-data policy](https://console.groq.com/docs/your-data)
- [OpenRouter limits](https://openrouter.ai/docs/api_reference/limits)
- [OpenRouter provider logging/routing](https://openrouter.ai/docs/guides/privacy/provider-logging)
- [Cloudflare Workers AI pricing](https://developers.cloudflare.com/workers-ai/platform/pricing/)
- [Ollama local API](https://github.com/ollama/ollama/blob/main/docs/api/introduction.mdx)
- [Ollama MIT license](https://github.com/ollama/ollama/blob/main/LICENSE)
- [Tiptap insertContentAt command](https://tiptap.dev/docs/editor/api/commands/content/insert-content-at)
- [ProseMirror transform/StepMap documentation source](https://github.com/ProseMirror/prosemirror-transform/blob/master/src/README.md)
- [Tiptap Undo/Redo](https://tiptap.dev/docs/editor/extensions/functionality/undo-redo)
- [Tiptap Tracked Changes is paid/alpha](https://tiptap.dev/docs/editor/extensions/functionality/tracked-changes)

### Verification and privacy statement
Only **fixture-structure validation** was executed by this alternative branch. No proprietary novel text, real author user data, production credentials or project-specific sources were uploaded to model providers. No code or documents were written to the GitHub repository. This report is not an acceptance record, not a completed research gate, not a security audit and not an authorization to change the canonical plan.
