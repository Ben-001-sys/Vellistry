---
id: VEL-RES-PAIR04-20261009-001
type: bounded-research
status: experimental-not-provider-validated
created_at: 2026-10-09
updated_at: 2026-10-09
sources:
  - "docs/plans/RESEARCH-PAIR-AND-PREIMPLEMENTATION-DESIGN-2026-10-09.md"
  - "docs/research/independent-alternatives/pairs-04-05/VELLISTRY_PAIRS_04_05_INDEPENDENT_ALTERNATIVES_2026-10-09.md"
related_research: [R08, R19, R21]
---

# Pair 04 — R08/R21 provider feasibility and R19 controlled writing corpus

**Authority:** Owner asked to check current repository/branches/PRs, then continue Pairs 04 and 05. Pursue Pair 04 as two active research tracks *before* activating Pair 05. The independent alternative handoff is [draft PR #39](https://github.com/Ben-001-sys/Vellistry/pull/39), **not merged or independently certified** at research start. This branch is intentionally stacked on that handoff, and should not be treated as canonical or merged in isolation. The existing source pack, editor, and production scaffold are not changed.

## Track A: R08/R21 — verified public information vs unverified feasibility

| Candidate | Verified vendor documentation, checked 2026-10-09 | Restriction or next experiment |
|---|---|---|
| AI OFF | Accepted M2 authoring is independent of provider integration | Required baseline: typing, saving and export with no key, independent of optional AI |
| Ollama local | Official [Ollama API](https://docs.ollama.com/api/introduction) and [OpenAI compatibility](https://docs.ollama.com/openai) document local model serving/compatible requests | No local 3–8B model load/performance, GPU/RAM, context-quality or model-weight license measurements yet. Local API needs origin/network isolation and author opt-in |
| GroqCloud free | [Rate limits](https://console.groq.com/docs/rate-limits) are organization/model-specific and can reject at 429; [Your Data](https://console.groq.com/docs/your-data) says inference inputs/outputs normally not retained, limited circumstances up to 30 days, with ZDR controls | Free account and model availability in Ghana/author geography, consent, live 401/429, latency, actual quality and ZDR status not tested. No credentials provided |
| Gemini API free | [Official pricing](https://ai.google.dev/gemini-api/docs/pricing) labels some free requests **used to improve products: Yes**, unlike paid rows **No** | Do not transmit unpublished manuscripts on that tier without separate informed owner/privacy decision. No real API use |
| OpenRouter | [Provider directory](https://openrouter.ai/providers/) and [guardrails](https://openrouter.ai/docs/guides/features/guardrails/overview) show downstream-specific training/retention policies and spending/provider filters | Intermediary routing, per-route retention and free-model quota remain variable; no zero-risk BYOK/privacy claim |
| Cloudflare Workers AI | [Official pricing](https://developers.cloudflare.com/workers-ai/platform/pricing/) explains free allocation with model-dependent costs | Platform/operator account is not automatically author-owned BYOK; free allocation is not public product zero-opex |

**Finding, not final provider decision:** AI-OFF is mandatory; local opt-in inference and a direct single-provider free BYOK experiment are the most constrained candidates. Do **not** select Groq/Ollama as the product provider without a real trial and owner review. An optional provider can be **stubbed for request-policy tests** without making an actual inference call or choosing a paid plan. The zero-mandatory-paid-services constraint remains binding; free inference is not a promise of free hosting, electricity or unlimited production capacity.

### Executable research-only boundary

[Offline request-policy experiment](experiments/pair04_offline_provider_protocol.py) and [its tests](experiments/test_pair04_offline_provider.py) check: explicit selected manuscript, pinned provider/model, consent + privacy review, zero spending cap, context-character budget, no unapproved facts or unrelated book, cancellation, 401/403/429/timeout/partial stream/refusal/malformed response and no automatic manuscript mutation. Redacted diagnostic metadata excludes author text. **These are simulated events, not proof that any provider works or that token/cost estimates are accurate.** The code contains no HTTP request or credentials. It intentionally rejects remote transfer without explicit policy and consent.

### R08 unresolved criteria

- Real provider/free quota availability, model/region eligibility and terms tested from an authorized account.
- Honest provider consent, retention, data-use, key lifecycle and failed-request handling in a real app.
- Streaming cancellation, rate limiting, output-length ceiling, timeouts and observed account-level cost caps on actual provider.
- Actual fiction quality versus AI-OFF baseline; local inference feasibility on representative hardware.
- Author choice required if no acceptable *free* provider meets quality/privacy bar; do not silently substitute paid service.

## Track B: R19 — source-labelled quality evaluation, not invented results

Reuse the original **14-case multi-genre** synthetic corpus and **15 reversible-edit specifications** from independent draft #39, preserving IDs and no invented outputs. Run the imported structural validator separately from [Pair 04 corpus integrity assertions](experiments/test_pair04_offline_provider.py).

**Evaluation controls for future live model test:**
1. Freeze exact corpus content hashes, selected model/version, sampling parameters and request context in an evidence ledger.
2. Keep three states separate: actual model output, invariant/continuity scoring, and *independent human ratings*.
3. Source-grounded failure categories: POV secret leak, injury/power violation, unsupported early reveal, chronology misuse, cross-book contamination, voice homogenization, unwanted moral explanation, stale-text replacement or intentional exception suppression.
4. Compare no-rules C0 versus rules-on C1, custom C2 and disabled/exception C3 **only when R01 source mapping is approved**. Until then label instructions as **SYNTHETIC**.
5. Blind human review with "none acceptable" option; report disagreement rather than forcing consensus. Do not infer creative quality from source corpus metadata alone.

**Actual status:** Corpus STRUCTURE VALIDATION tested; 14 model outputs, blind human scores, full-length novel comparisons, provider spend, and quality efficacy remain **NOT RUN**. This document does not produce any invented model answer or participant result.

## Gate and sequencing

- Pair 04 can reach a **bounded research checkpoint** after exact-head CI for the offline protocol and owner-visible provider alternatives, while retaining real provider/privacy/creative-quality decisions as explicit blockers.
- Pair 05 R06 and R10 remain queued until this checkpoint is documented. Creating its evaluation fixtures does not certify frozen guidance.
- Design-first requirement and no production feature merge/deploy remain unchanged.


## Executed offline verification — 2026-10-09

**Exact tested research commit:** e1582a614f52fd63a2d0abe85cbb18931bdebd58. [GitHub Actions #38005616031](https://github.com/Ben-001-sys/Vellistry/actions/runs/38005616031) reported **SUCCESS**: imported independent fixture validator passed for **14 synthetic fiction cases and 15 reversible-edit specifications**; new R08/R19 tests passed **14/14**. This is an executable *offline policy/structure* pass only. **No** API/network connection, model generation, inferred adherence, human ratings, BYOK key issuance or usage payment occurred. No provider approved.
