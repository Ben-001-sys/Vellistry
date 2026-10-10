---
id: VEL-RES-OPTIONB-WAVE04-R08-R21-20261010-001
title: One-pass optional AI vendor privacy, BYOK, cost and zero-mandatory-paid feasibility
type: research-evidence-and-decision-options
status: completed-official-source-review-live-inference-not-run
created_at: 2026-10-10
updated_at: 2026-10-10
author: project-research
version: 1.0.0
sources:
  - docs/research/PAIR-04-OFFLINE-PROVIDER-CORPUS-2026-10-09.md
  - docs/research/OPTION-B-WAVE03-R15-K2B-MANUSCRIPT-PRIVACY-2026-10-10.md
  - https://ai.google.dev/gemini-api/terms
  - https://ai.google.dev/gemini-api/docs/pricing
  - https://console.groq.com/docs/your-data
  - https://console.groq.com/docs/rate-limits
  - https://openrouter.ai/privacy/
  - https://openrouter.ai/docs/guides/privacy/provider-logging
  - https://docs.ollama.com/api/introduction
  - https://developers.cloudflare.com/workers-ai/platform/pricing/
  - https://supabase.com/pricing
related_research: [R08, R21, R19]
---

# Option B Wave 4, Track A — privacy-first, no-mandatory-paid optional AI provider research

**Authority:** One consolidated research pass requested by the owner. Research outcome **not** permission to use unapproved real manuscripts, obtain API keys, conduct paid inference, enable AI by default or select a vendor on behalf of all authors. Official public policy review performed on **2026-10-10**, where available; API service access, local model throughput, actual Ghana account enrollment, provider data-retention controls and model-quality claims are **NOT RUN**. Exact terms, quotas and region rules must be rechecked for deployment, not treated as fixed contractual rights.

## Evaluated candidates and exact provider-policy distinctions

| Option | Official-source finding | Confidential manuscript suitability | Real-world cost and availability | Recommendation/status |
|---|---|---|---|---|
| **AI OFF** (required) | Existing accepted product requirement: manual writing, saving, profiles and export are independent of any inference | No third-party prose transmission from AI actions | Inference cost **0**; ordinary storage, hosting, backup and support still may cost | **Required baseline**. Keep independent of API keys, quotas or provider selection |
| **Ollama local** | [Official API](https://docs.ollama.com/api/introduction) documents local service and compatible clients; Ollama engine MIT, **individual model weights have their own licenses** | Best data-boundary candidate **if runtime and models truly stay local** and telemetry/remote optional functions are explicitly disabled; loopback server must not be exposed | No mandatory hosted inference bill but needs capable RAM/GPU/CPU, local installation, disk space, electricity, time and each installed model's permitted uses. Device test **NOT RUN** | **Prefer first opt-in privacy-sensitive path**, subject to owner-device performance, distribution-license and network test |
| **GroqCloud free developer plan** | [Your Data](https://console.groq.com/docs/your-data) states inference payloads normally not retained; transient reliability/abuse logs possible up to 30 days unless ZDR toggled; metadata always stored; [rate limits](https://console.groq.com/docs/rate-limits) vary by model/account, 429 on exceed | **Potentially acceptable only after explicit owner/author opt-in and verified ZDR/settings and regional/legal terms**; remote prose still processed by Groq (US GCP location as disclosed) | Free model access is quota-limited and mutable; account may be unavailable in some regions; Ghana signup and free model were **not tested** | **Conditional remote BYOK research candidate**; not default and not confidentiality guarantee |
| **Gemini API unpaid quota** | [Additional Terms effective 2026-03-23](https://ai.google.dev/gemini-api/terms) explicitly permit unpaid inputs/outputs to improve Google's products, human review, and say do not submit sensitive/confidential data; free availability and region vary. Those terms also state API clients available in EEA/Switzerland/UK must use Paid Services | **Do not send unpublished confidential prose or sensitive author data on unpaid API by default**; no consent checkbox can silently convert a privacy risk into model-quality or confidentiality evidence | Free quotas exist but no guaranteed production capacity; certain regions/users barred or subject to paid-services limitation | **Exclude confidential-manuscript use on free tier**; allow only fabricated/nonconfidential testing if terms permit |
| **OpenRouter** | [Privacy policy](https://openrouter.ai/privacy/) says prompts go to chosen/routed model provider; provider training/retention practices differ. [Provider logging](https://openrouter.ai/docs/guides/privacy/provider-logging) documents endpoint/policy-specific restrictions, including free-vs-paid training flags; [ZDR explanation](https://openrouter.ai/blog/insights/zero-data-retention/) says even ZDR still transmits content for processing | Must pin downstream **provider + model + endpoint + retention/ZDR + training behavior** on every request, prohibit unreviewed fallback and account setting drift; intermediary adds a processor/recipient | Free models/limits and routing may change; generic 'OpenRouter' connection does not ensure a zero-price zero-training route | **Conditional advanced BYOK**, not the MVP's default private route |
| **Cloudflare Workers AI** | [Pricing updated 2026-10-01](https://developers.cloudflare.com/workers-ai/platform/pricing/) reports **10,000 neurons/day free**, excess requires Workers Paid; some models require paid method | Operator/server can handle requests, but inference is remote processing; need Cloudflare terms/DPA, region and model-by-model policies | Free allocation shared across workload; exhausted daily quota fails, not an author-funded unlimited entitlement | **Optional operator-hosted experiment**, not genuinely BYOK by default and not a guaranteed free public feature |

### Key distinctions (do not conflate)

- **Free** means price under a quota, not available globally, not a promise of stability, not unlimited usage, and not license to process unpublished copyrighted material with zero privacy review.
- **BYOK** means an individual owner provides their own provider credential. It does **not** automatically prevent Vellistry's server, intermediary, provider or model-adapter logs from processing the manuscript or storing metadata.
- **Zero data retention** is a specific contractual/technical statement about prompt/output persistence, **not on-device processing**, and may be qualified by security, legal, account features and logs. Model provider and router can have independent policies.
- **Local Ollama** is only local if bound to a trustworthy loopback/local address and no cloud fallback, accidental port forwarding or external client telemetry; model-weight copyright and license permissions differ from Ollama MIT runtime.
- **No mandatory paid services** is an owner project constraint. It does **not** mean guaranteed free public hosting, infinite storage, required registration fees, email, security review, offsite backups or electricity.

## Proposed privacy / consent protocol for future design specification

1. **Default:** manual writing; AI action toggle OFF; no key and no account required to write, save, export or manually edit Story Profiles.
2. **Explicit action:** user chooses Rewrite or Continue and a pinned model/provider. Show exact selected scene/chapter excerpt, author-approved Story Profiles, operational guidance actually included (never all 130 merely because library-enabled), approximate tokens, data recipient and processing region, price/usage bounds, provider data retention/training terms and request timestamp. No hidden whole-book/context cross-book inclusion.
3. **Separate knowledge:** Do not treat unapproved canon proposals, deleted chapters, rejected generated content or another author's guidance as shareable request context. Log only necessary request metadata by default, with manuscript content redacted.
4. **Credential handling:** Prefer credential remaining on user device only for direct browser-local provider calls *if provider permits secure browser use*; otherwise short-lived server-side key vault referencing a provider/account after explicit authorization. Never embed keys in public NEXT_PUBLIC variables, local logs, analytics, URLs, build artifacts or Git. Do not imply that localStorage/IndexedDB provides secure key protection against XSS; an appropriate secret handling model remains an implementation decision.
5. **Budget and availability:** Enforce zero paid-upgrade automation, maximum context/output tokens and action limits, per-user cancellation, no hidden fallback to fee-bearing provider, no retry storms after 429/401/403, no surprise use of paid tools. On offline/unsupported/rate-limited provider, return a non-destructive error and keep manual editor usable.
6. **No silent mutation:** Inference output always enters a proposed edit state with accept/reject; changing prose does not promote Story Profiles facts. Account switch/logout cancels in-flight requests, invalidates UI associations and avoids content logging.
7. **Withdraw and delete:** Disconnect provider, invalidate stored key handles and cached request states. Disclosure must explain provider-side deletion may not be guaranteed or immediate, and locally retained backups/export files are separate.

## Indicative demand and no-mandatory-paid feasibility (assumptions, NOT vendor rate quotes)

Choose a hypothetical user completing **20 optional AI actions per day**, each with **1,500 input and 500 output tokens**, for **30 days**. That is **600 requests / 900,000 input / 300,000 output tokens per author per month**. For 100 equally active authors: **60,000 requests/month**, **90,000,000 input**, **30,000,000 output**, averaging **2,000 requests/day**. These are arithmetic load scenarios only. Not all models can accept the chosen prompt size; a real Vellistry scene/approved-canon prompt may be materially larger. Actual provider free quota and model quality must be measured in the author's region before promising this volume.

Supabase [Free plan](https://supabase.com/pricing) currently advertises **500 MB database**, **1 GB file storage**, **5 GB egress**, and pauses projects after one week of inactivity. The project can store merely **100 books x 2 MB/book x five independent revisions = ~1,000 MB (decimal)** before overhead, indexes, uploads or backups; if held in PostgreSQL, that exceeds its 500 MB free database allowance. Such numbers are deliberately hypothetical and cannot establish real storage footprints. [Free projects lack managed daily backups](https://supabase.com/docs/guides/platform/backups); offline project archives and operator-owned encrypted offsite DB dumps/restore are separate requirements.

**Feasibility envelope:** A local-only personal prototype can theoretically have **zero provider request fee**, but public 24/7 multi-author SaaS hosting, SMTP delivery, abuse protection, backups, registration and disaster recovery cannot honestly be guaranteed at zero cost by these sources. **No auto-upgrade/no required paywall** is a clear product policy; if capacities are exhausted, degrade gracefully and inform authors rather than silently charge them.

## One-pass provider decision disposition

**RECOMMENDED pre-design requirements (owner confirmation not implied):** AI-OFF always; local Ollama is the *first privacy-focused optional capability path* subject to performance/model licensing; remote API use is separate, explicit per-action consent and own-account BYOK, with Groq ZDR a candidate **only after account and location verification**. Exclude Gemini unpaid confidential-work use; OpenRouter routing and Cloudflare costs remain conditional secondary alternatives. No vendor is selected as universal default provider. Prompt model choice, real 401/429 streaming failure and real prose/canon quality are deferred to **Wave 5** where lawful keys and evaluations exist.

**Already accepted from Waves 1–3:** author retains control, AI itself OFF/optional, no canon auto-accept, private manuscript and reviewed context only. This report is a research-only provider boundary; no new approved commercial agreement or model service.

**Wave progression:** do not reopen this provider comparison through repeated research chats. The limited official-source question has been addressed. Keep real account availability, model EULA, paid plan/region, production DPA, privacy toggle and latency **NOT RUN**, and move **Wave 5 R19/R06 real model quality and R10 reversible edits** as the next research-only two-track wave.
