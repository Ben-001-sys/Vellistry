---
id: HIS-20261010-003
title: Owner clarifies user-funded BYOK access across free and paid AI models
type: historical-event
status: recorded
occurred_on: 2026-10-10
recorded_on: 2026-10-10
time_precision: day
created_at: 2026-10-10
updated_at: 2026-10-10
author: project-research
actor: project_owner
version: 1.0.0
sources:
  - "Fiction Writing Project conversation, 2026-10-10: owner explicitly clarifies Vellistry supplies selectable AI model options and a place for users to enter their own API key, without restricting those keys to free or paid tiers. No conversation permalink archived."
  - "docs/research/OPTION-B-WAVE04-R08-R21-PROVIDER-PRIVACY-COST-2026-10-10.md"
  - "docs/requirements/PRODUCT-CONSTRAINT-NO-PAID-SERVICES-2026-10-09.md"
evidence:
  - "Exact owner wording: And also remember we are providing the AI models, we are providing a place where they place the AI API key so we don't care whether the API key they was a paid or free"
  - "User-owned BYOK free or paid eligibility is independent from Vellistry's no-mandatory-paid-services requirement for core AI-off functionality."
related_adrs: []
related_requirements:
  - VEL-PRODUCT-CONSTRAINT-20261009-001
related_events:
  - HIS-20261010-001
  - HIS-20261010-002
corrects: []
corrected_by: []
commit_refs: []
---

# Owner clarification — curated model choices and user-supplied API keys

## Owner's instruction

> And also remember we are providing the AI models, we are providing a place where they place the AI API key so we don't care whether the API key they was a paid or free

**Interpreted product requirement:** Vellistry presents supported AI model/provider choices and an API-key entry/configuration interface. Each writer supplies a credential for the chosen provider, using either the provider's **free** or **paid** plan. Vellistry does not reject a working key based on whether it is attached to free or paid billing. The user—not Vellistry's operator—is responsible for the account/provider's usage charges and contract, unless a separate future commercial agreement explicitly changes that relationship.

**This means Vellistry supplies selectable integration options, not that it owns the underlying model, guarantees free model access, or hosts every model.** Model compatibility, availability, context limit, region, rate limits and terms are independent of key price tier. The same model can have different limits or processing policies by account/plan.

## Requirements that this clarification changes

- The earlier research preference for only free cloud APIs or a local Ollama-first path is **not a product exclusion**. Local inference can remain an option, but supported paid provider models are equally eligible for the model menu where integrations are technically and legally appropriate.
- The earlier research phrase 'zero spending cap' or 'do not allow a fee-bearing provider' applies to **Vellistry spending its own funds without authorization**, not a ban on the user's separately billed provider key. Do not automatically impose a zero-dollar limit on all user-owned AI requests.
- Model/provider picker and BYOK entry must be linked: show connection status and model availability, allow replacing/removing a key, and handle invalid/expired credentials, 401/403, 429, network failure and unsupported model without modifying a manuscript.
- API keys are secrets. Protect credentials in a reviewed storage/transport design, mask in interface, never expose in logs, Git, analytics or other users' sessions, and provide disconnect/revoke guidance. Do not assume that BYOK prevents provider or Vellistry processing of selected text.
- Privacy notices/consent, manuscript-context preview, explicit author-initiated AI calls, user control of generated prose and Story Profile canon, and no hidden fallback remain required **regardless of whether the user's API key is paid or free**. Pricing notices can clarify that provider billing is external, but Vellistry should not require a specific free-tier plan.

## Boundaries unchanged

- **No mandatory paid service for the core application:** Writers may create books, write manually, save/export and manage their own story notes without any AI API credential. This constraint does not mean that a writer cannot voluntarily use a paid API with their own account.
- No Vellistry-funded credits, paid service purchase, universal provider selection, actual credential handling implementation, production inference, legal/privacy certification or product deployment is authorized by the owner's clarification.
- The original Option B research-before-prototype gate remains. This decision updates the **research/product requirements and Wave 5 evaluation scope only**. It does not authorize new Figma, Lovable, production coding or deployment.

**Current status:** Accepted owner product clarification, recorded as source-traced history; feature unimplemented. Future Wave 5 model evaluation should cover supported free AND paid user-supplied credentials where lawfully available, with honest BLOCKED status if credentials cannot be provided without violating current project constraints.
