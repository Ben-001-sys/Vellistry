---
id: VEL-RES-OPTIONB-WAVE05-R19-R06-20261010-001
title: Single-pass fiction output quality, rule adherence and BYOK model evaluation boundary
type: research-evidence-and-decision-options
status: bounded-synthetic-protocol-executed-live-model-blocked
created_at: 2026-10-10
updated_at: 2026-10-10
author: project-research
version: 1.0.0
sources:
  - docs/research/PAIR-05-SYNTHETIC-RULES-REVERSIBLE-EDIT-2026-10-09.md
  - docs/research/experiments/pair05_synthetic_rules.py
  - docs/research/experiments/pair04_offline_provider_protocol.py
  - docs/history/2026-10-10-owner-waves-01-03-recommendations-accepted.md
  - docs/history/2026-10-10-owner-byok-free-or-paid-clarification.md
  - https://developers.openai.com/api/docs/guides/evals
  - https://genai.owasp.org/llmrisk2023-24/llm01-24-prompt-injection/
  - https://genai.owasp.org/llmrisk/llm052025-improper-output-handling/
related_research: [R19, R06, R08, R21]
---

# Option B Wave 5, Track 1 — one-pass model-quality and guidance evaluation

## Authority and evidence discipline

On 2026-10-10 the owner instructed a **single pass** over AI quality and fiction-rule adherence, then a **concrete final MVP choice** with no repeated research or approval questions. Source and prior experiment content were reviewed from the connected repository. Public evaluation and prompt-security guidance was verified against official documentation. No real unpublished manuscripts, provider secrets or paid endpoints were accessed.

**Actual external model inference: BLOCKED / NOT RUN.** No user BYOK credential, local model weights or authorized operational integration was available in this session. ChatGPT drafting this document is not evidence of an authenticated Vellistry/OpenRouter/OpenAI/Anthropic/Google API run, independent blinded scoring, replayable provider settings, latency, token bill or fiction quality on that provider. **No false model-performance score is reported.**

## Existing verified evidence, distinct from model output

- Pair 05 existing exact-head CI: **12/12** offline synthetic rule-context/inheritance tests; **10/10** actual research Tiptap proposal safety checks. Tested disabled rule exclusion, book/chapter/scene scope, author exceptions, context hash invalidation, reject/accept/stale, and format integrity. Neither suite included real provider responses.
- Pair 04 research preflight checks reviewed provider identity, consent, preview, bound and failure-handling without network or keys. Its historical assumption of **zero paid API allowance** is **superseded** by [the owner's free-or-paid user-funded BYOK clarification](../history/2026-10-10-owner-byok-free-or-paid-clarification.md).
- Wave 1 owner-approved guidance direction: keep **260 original immutable records** and **134 operational aliases**, with 130 expanded-primary catalog defaults ON and four additional compact AR controls OFF. This is a **library default**. The model request must include only the explicitly relevant active subset and author exceptions, never claim it has sent every enabled rule.

## Executed NEW synthetic grading-protocol research

A **local disposable Python test package** using entirely invented Mara/Elias/courier passages was executed in this session and provided to the owner as `vellistry_wave05_single_pass_research_fixture.zip` (SHA256 **98579f6bf9ac4d8b659723503faa878af49343c97ce846283e2176aea67adf63**). It is a **private chat artifact, not committed to GitHub**, so GitHub CI cannot certify those local file bytes. It contains the grader, 12 hand-authored candidates, reproducible tests, selected context preview and exact JSON classification results.

| Measurement | Actual synthetic result | Interpretation |
|---|---:|---|
| Handwritten candidate/output cases | **12** | Six deliberately compliant and six deliberately noncompliant cases; NOT model-generated prose |
| Simple-string-guard true accepts | **6** | All six constructed positives satisfy chosen exact substrings |
| Simple-string-guard false accepts | **1** | Narrator-voice drift escaped because searching for first-person `I` also matched the character in `iron` |
| Correctly rejected constructed failures | **5** | Named-character introduction, injury-hand contradiction, forbidden wording, loss of core reference and injected string return |
| Missed constructed positives | **0** | The deliberately straightforward positives do not estimate real author style quality |
| Local grading protocol unit tests | **12/12 passed** | Protocol consistency and consent/free-or-paid BYOK handling, not literary model performance |

**No inference should be drawn from the synthetic 6/1/5/0 counts about provider precision or recall.** Exact phrase matching is not a reliable detector of narrator voice, prose cadence, artistic restraint, character intent, literary themes or coherent scene movement. The missed viewpoint case is an explicit negative research finding. Model eval guidance calls for representative tasks, stable criteria and independent human judgements; OWASP warns that external/novel text must be treated as untrusted and no model response should be trusted as an executable edit.

## Minimal reproducible real-model trial protocol (documented, NOT RUN)

1. Once an author supplies a **legitimate free OR paid BYOK API key**, evaluate every **enabled** provider/model route independently, pinning provider, exact model, version when published, prompt revision, actual downstream endpoint, sampling parameters and consent/privacy state. Never substitute a fake output if the key/model is unavailable.
2. Use synthetic unpublished-for-study fiction only, first-person and third-person voice contrasting cases, 6 canonical Story Profile facts with temporal boundaries, explicit rule on/off override cases, refusal/prompt-injection contamination cases, and both **Rewrite selection** and **Continue at insertion point** tasks. For each candidate, log metadata/hash and human-redacted relevant rubrics, not whole manuscript.
3. Run baseline task with no relevant guidance (C0), approved source-only subset (C1), scope override and author exceptions (C2), and approved canon/context plus rules (C3) for comparable inputs. Never claim all 134 long-form controls are delivered; show exact included IDs.
4. Blind at least two independent consenting fiction readers when truly available, scoring **voice consistency**, **canon accuracy**, **coherence**, **author instruction adherence**, **rule-on/off obeyed**, **unjustified inventions**, **repetition/pacing** and **edit usefulness** on an anchored 1–5 rubric with explicit failure reason. No recruited judges were available in the current pass, so **HUMAN QUALITY NOT RUN**.
5. Fail closed on off-book context, unapproved canon, prompt-injection instructions embedded in manuscript, accidental credential/log inclusion, unavailable paid/free key, rate limit and provider fallback. Such deterministic preflight controls are **not** a replacement for human quality evaluation.

## Final MVP recommendation from R19/R06

**Make no quantitative quality guarantee.** Ship an **experimental, clearly optional** AI assistant with only two author-initiated operations: **Continue** from selected chapter context and **Rewrite a selected contiguous prose span**. Model output is **review-only plain text**; no direct book database write, no automatic canon acceptance and no hidden whole-book context. The interface labels generation as a draft suggestion, permits reject/accept after visible original/alternative comparison, and preserves human-written text unless explicit acceptance passes a revision-safe server check.

**MVP provider choice** for specification: **one OpenRouter BYOK adapter** exposing a small curated set of pinned user-selectable model/provider routes whose real availability and data terms are checked before enabling each route. A user's API key may be free or paid. Do not promise any free usage, training privacy, ZDR or prices based only on router branding. Do not silently switch downstream model/provider. No paid API credit is supplied by Vellistry. Add direct-provider adapters or local Ollama later if needed; keep interface provider-agnostic.

**MVP credential decision:** Explicit in-session API-key entry for the selected route; mask and keep key only in memory until page/session ends, transmit to the Vellistry server solely over HTTPS for user-initiated inference; avoid persistent browser storage, database storage or logs for V1. Be transparent that both Vellistry server and downstream chosen provider process the selected content. Clearing in-memory credentials at logout/account switch must not erase manuscript drafts.

**Release enablement condition (not a new research loop):** Each selectable real route must have one successful authenticated synthetic-context smoke request, accurate terms/recipient disclosure, error/cancellation handling, no cross-author context, and security review. If those are blocked, keep the route disabled and keep manual core available; do not guess scores or ship a dummy result as real AI.

**One-pass status:** Wave 5 Track 1 source-based evaluation and protocol research **COMPLETE**, real provider inference/human scoring **NOT RUN/BLOCKED**. Minimal MVP capability/route policy chosen as owner-delegated scope decision, NOT a production launch credential or completed quality validation. Continue with Wave 6 research/operational synthesis without reopening the Wave 5 comparison.
