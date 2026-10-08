---
id: VEL-EXP-R06-002
type: research-experiment-report
status: validated-synthetic-only
created_at: 2026-10-08
updated_at: 2026-10-08
author: project-research
version: 0.1.0
sources:
  - "docs/requirements/PRODUCT-DIRECTION-FROZEN-DEFAULT-GUIDANCE-2026-10-08.md"
  - "docs/research/experiments/r06_synthetic_request_simulator.py"
related_research:
  - R06
  - R08
  - R10
related_experiments:
  - VEL-EXP-R06-001
---

# R06-002 — Synthetic request-resolution contract (not real model quality)

## Scope and truth boundary

This is an **independently executable, synthetic Python research example**, not Vellistry application code or a selected rule-engine architecture. The three `SIM-*` default instructions are **invented example strings**, not translations of or changes to the frozen fiction-writing system. The fiction-rule source package remains unverified for deployable import; all AR source-title conflicts remain preserved.

The purpose is to isolate what can be tested without purchasing API calls or building the real app: whether a hypothetical effective-request assembler faithfully implements visible enable/disable actions, author-specific scope, and basic canon separation.

## Method

- Executable fixture: [r06_synthetic_request_simulator.py](experiments/r06_synthetic_request_simulator.py).
- Run: `python docs/research/experiments/r06_synthetic_request_simulator.py`.
- Uses standard-library `dataclasses` and `unittest`; no AI service, manuscript upload, network calls, external credentials, framework, persistent datastore, or model is invoked.
- The sandbox deliberately **rejects opaque previously carried model contexts** instead of claiming it has removed stale rules from history or caches.
- Twelve assertions compare actual serialized effective-request strings and selection/inclusion IDs; all story/canon data is fictional.

## Twelve covered assertions

| Check | Evidence sought |
|---|---|
| Fresh project starts with synthetic defaults enabled | All three `SIM-*` identifiers present in request |
| Disable one default | Disabled identifier/instruction absent from serialized effective request |
| Add enabled author rule | Custom instruction present in active request |
| Disable custom rule | Disabled author instruction absent |
| Restore a default | Previously excluded instruction returns on next request |
| Limit rule to Book A | The Book A-only rule absent in Book B |
| Intentional literary refrain | A specific author exception is active when broad restriction is excluded |
| Disable creative rules but retain factual canon | Injury fact remains separate from fiction guidance |
| No canon leakage across books | Book A secret omitted from Book B request |
| Opaque provider history | A request using unverified inherited context fails closed |
| Action-specific audit | Timeline audit guidance omitted from 'continue' but included in 'audit' |
| Rule-ID collision | Duplicate identifier is rejected, not silently overwritten |

## Initial local outcome

The initial equivalent two-module local experiment completed **12/12 passing assertions** on 2026-10-08 (Python `unittest`). The committed script is written as a self-contained reproduction of that same test design and will be re-verified by the linked GitHub Actions workflow [R06 synthetic research contract](../../.github/workflows/r06-synthetic-research.yml) on PR #3. **CI outcome must be checked on the exact PR head**; no claim of that outcome is made until the workflow finishes.

## What is NOT proven

- Whether the real frozen 13-domain guidance pack can be packaged/imported without ID collisions or author approval.
- Whether any actual language model follows prompts or produces better fiction with them.
- Whether prior provider conversation state, hidden caches, embeddings, summaries, memory, prompt injection and permissions can be cleared or isolated in production.
- Whether the proposed UI is understandable to writers, whether defaults are a better experience than model-native controls, or how much it costs to use.
- Whether an actual application can achieve secure multi-tenant storage, live previews, cross-provider uniformity or correct long-form canon.
- Whether the sample Python selection algorithm should be used in the final product. **It must not be imported as an approved production architecture.**

## Follow-up

1. Verify the exact committed script under CI and attach the successful or failed log and commit SHA to this report in a later update.
2. Prepare 6 versioned synthetic scene fixtures from R06-001; link explicit (not invented) original guidance once its source-pack provenance is approved.
3. Set a small owner-approved model-testing budget and two candidate provider/model snapshots.
4. Evaluate output under C0–C3 blind comparison. Separate application prompt inclusion from model adherence and human prose quality.
5. Independently conduct R05 editor import/export/licensing trials. Do not select an editor based solely on license notices.

**Status: small contract simulation tested locally; full R06 quality evaluation remains NOT EXECUTED.**
