---
id: VEL-DES-WRITER-VALIDATION-20261010-001
title: Vellistry moderated fiction-writer usability validation plan
type: proposed-design-validation-protocol
status: proposed-not-executed
created_at: 2026-10-10
updated_at: 2026-10-10
owner: project_owner
version: 0.1.0
sources:
  - docs/requirements/MVP-USER-JOURNEYS-AND-ACCEPTANCE-2026-10-09.md
  - docs/research/OPTION-B-WAVE06-G10-FINAL-CLOSEOUT-MVP-DESIGN-ENTRY-2026-10-10.md
  - docs/history/2026-10-10-owner-delegated-mvp-design-entry.md
---

# Vellistry — writer validation study plan (DRAFT / NOT RUN)

## Objective and permission limits

Find out whether fiction writers can reliably discover and understand Vellistry's writing-first workspace, Story Profiles, Rules Studio, optional two-action AI, save/recovery and separate canon approval. Compare A writing-first and B story-workspace-first without leading participants. The existing Figma file contains static synthetic screens; no functioning product, AI calls, transactionally saved drafts, native screen-reader observations or genuine writer sessions are claimed.

**Approved to plan:** private synthetic design and preparation for genuine consented participant testing. **Not authorized by this document:** uploading a real manuscript, using a real provider API key, recruiting or contacting people without appropriate approval, paid services, product feature code or public release. A clickable Figma prototype must be assembled and independently inspected before claiming interactive task evidence.

## Participants, consent and data hygiene

**Proposed recruiting target for owner review:** a small, varied set of consenting fiction writers (for example, five initially) including some who do not currently use AI tools and some working on complex, continuity-heavy narratives; selection and target count are not owner-approved facts. Prefer diversity in manuscript length and comfort with web editors. Keep participant contact/consent in a separately access-controlled system, not GitHub; use pseudonymous IDs `W01`, `W02`, etc. No invented participant results.

Before observation, tell participants:
- This is an incomplete synthetic prototype, not a functioning private manuscript service or real saving mechanism.
- Use only invented sample text or their own **non-sensitive, purpose-created** disposable sentences. Never request unpublished/private manuscripts, credentials or actual API keys.
- Figma interactions, mock saves and mock AI outputs do not imply storage or generation; there is no real AI connection in the study.
- Participation and recording are optional; ask explicit consent for whichever observation/recording is proposed and provide stop/withdrawal route. Apply appropriate notice, retention and access restrictions.
- Any participant quotation included in a public or repository report must be separately consented to and stripped of identifiers.

**Required operator artifact before live recruitment:** approved participant information and consent language, approved observation method, artifact retention/access policy, tested interactive Figma prototype, and final study script reviewed by the owner. Design can progress without any paid subscription; work around tool-call quotas rather than silently subscribing.

## Study preparation checklist (proposed)

- [ ] Figma scenario interactions are wired and keyboard/mouse reachable; no control is merely decorative in the task under test.
- [ ] Include both A and B concept entry points, randomize order to reduce first-impression bias; compare concept priorities before promoting a canonical design.
- [ ] Synthetic same-book characters, timeline and chapter fixtures are internally consistent; distinguish known facts from speculative claims.
- [ ] Prepare predefined offline, save conflict, stale AI, cancelled proposal and private-access simulation conditions. Label each simulation clearly.
- [ ] Use a facilitator with non-leading prompts; separate task success observations from subjective preference.
- [ ] Prepare traceable `VEL-JRN-001..011` evidence forms, keyboard accessibility checklist and incident log.
- [ ] Define decision thresholds **with the owner** before tests; do not invent numerical acceptance standards from a small sample.
- [ ] Obtain consent as described above and do not put personally identifying recordings in Git.

## Scripted scenario modules

Present tasks as goals, not instructions specifying which control to click. Record the first place the participant looks, detours, assistance and comprehension. Data is synthetic.

| Task | Participant prompt (synthetic) | Journey IDs | Observe and record |
|---|---|---|---|
| T01 | “Start `The Glass Orchard`, add another chapter, then return to the earlier one and find your original writing.” | 001 | Discover library/chapters, understand status before navigation, chapter identity and order |
| T02 | “Write a short scene without connecting any AI tool; add a heading, italic phrase and undo an edit.” | 002 | Editor discoverability, manual control, keyboard reachability, no-key pressure |
| T03 | “A connection was interrupted before you closed the window. Reopen and decide which version to keep.” | 003 | Understand local vs server accepted, not trusting false Saved, safe recovery choice |
| T04 | “Create Mira as a character and record what she knows, then add a separate unresolved plot thread.” | 004 | Profile creation, book/story-time context, distinguish notes from prose |
| T05 | “Review a suggested fact about the orchard gate: decide what the evidence really supports.” | 005 | Locate source quote, decline unsupported assertion, separate canon approval |
| T06 | “Disable a creative rule for this book, inspect what will be sent, then restore it.” | 006 | Toggle/scope clarity, active/inactive distinction, request-preview understanding |
| T07 | “Without sending private prose, inspect how to add your own free or paid API key and what a Continue request would transmit.” | 007 | Optional BYOK, model recipient, cost/privacy/consent, manual writing remains possible |
| T08 | “Select part of a single paragraph, compare a Rewrite suggestion, reject it; then inspect how acceptance and undo would work.” | 008 | Text selection boundary, original/proposal comparison, not-autoinsert, undo mental model |
| T09 | “Imagine you accepted a rewritten scene with a new claim. Decide whether that claim should become established character knowledge.” | 009 | Distinct manuscript vs canon decision, source revision and story time |
| T10 | “Edit the selected sentence while an AI request is still pending; now the old suggestion arrives.” | 010 | Detect stale source, avoid unintended Accept, recover focus and continue writing |
| T11 | “Switch to a second test account and find what data is accessible. Inspect export and delete confirmations.” | 011 | Scope expectations, privacy copy, local recovery isolation, limitations of prototype |

Tasks T07 and T11 are **mock flow/usability tasks**, not authorization penetration tests, actual account separation tests, legal compliance or real API transfer. During private testing, never let participants use actual credentials or data.

## Facilitation and study sequencing

1. **Pre-task:** explain prototype limitations, obtain documented consent, collect only necessary non-sensitive background and accessibility needs.
2. **Unprompted orientation:** show A or B first in a balanced order. Ask what the participant believes the screen is for and where they would start writing.
3. **Core manual-first task:** T01–T03; the core value of the tool must not rely on AI.
4. **Story workflow:** T04–T06; assess confusion between suggested and author-approved facts/rules.
5. **Optional AI + reversible edits:** T07–T10 using labelled fabricated outputs, with no real request.
6. **Privacy and portability:** T11, including accurate limitations of sign-out in the architecture.
7. **Concept comparison:** show other concept, ask task-dependent preference; avoid asking only `Which is prettier?`.
8. **Wrap and factual debrief:** confirm simulated behavior vs product facts, ask about unclear labels, collect feedback with consent, and allow withdrawal.

**Recording template for each attempt:**
`participant_id (pseudonymous), consent_reference (restricted), version + Figma node URL, device/browser, scenario ID, started/completed, unassisted_success (yes/no/partial), help_given, wrong turns, observed time (if measured), error/confusion, verbatim remark with consent, accessibility observation, severity, proposed fix, repeat-test link`.

**Evidence status enumeration:** `NOT_RUN`, `PASS`, `FAIL`, `BLOCKED`; a Figma concept screenshot alone is `NOT_RUN` for interactive journeys. Report both negative and positive examples, dates and actual evidence; do not turn a hypothetical model task into a real API benchmark.

## Review rubric (interpretation is separate from facts)

Evaluate across:
- **Manual-first value**: participants locate a writing path without model signup and keep writing under provider failure.
- **Save truth and agency**: correctly distinguish confirmed server save, local recovery, unknown result and conflict; avoid destructive choice.
- **Writing focus**: can stay in prose without a distracting graph or sidebar; easy entry into Story Profiles when needed.
- **Canon correctness**: manuscript accept/reject and factual canon accept/dismiss remain separate; confidence and provenance are clear.
- **Rule semantics**: active, disabled, book exceptions and exact relevance of rules to an AI request are understood.
- **Provider consent and cost**: user can identify recipient, text, route, approximate cost/limits, and key status before choosing to send.
- **Accessibility and resilience**: focus, visible names, error announcement, keyboard reach, zoom and reading comfort are observed.

Do not invent target task times, SUS scores, sample significance or zero-error success without actual owners agreeing thresholds and measuring them. Escalate qualitative high-severity failures even if average scores appear positive. No single metric can approve privacy or data durability.

## Design revisions and approval sequence

After each actual session:
1. Save **sanitized** observations separate from interpretation. Use trace IDs, not participant real names in Git.
2. Rank severe confusion about save/canon/privacy over cosmetic preferences; propose a change linked to specific evidence.
3. Apply the change to the *unapproved* Figma design, capture before/after node links and rerun relevant tasks.
4. Consolidate an author-validation report with what happened, remaining failures and untested assumptions.
5. Present final editable canonical Figma with critical states and responsive/keyboard review to the owner.
6. Ask for an explicit **G_DESIGN** decision grounded in approved evidence. Passing the research script is not implicit approval. After G_DESIGN, prepare specifications and request **G_CODE separately**.

## Out-of-scope security/product tests still required later

Do not conflate prototype observations with: unexpired signed-out JWT direct PostgREST access; authenticated RLS/account isolation; real Tiptap save CAS/idempotency; recoverability and encrypted Auth+DB+Storage restore; native IME/RTL/screen-reader accuracy; real provider literary quality and legal/region terms; DOCX round-trip fidelity; actual data deletion and retention; or private-pilot/public-release gate approval. These require independent implementation/release evidence.

## Completion state at drafting

`PREPARATION DOCUMENTED; ACTUAL WRITER STUDY NOT RUN; CONSENT NOT OBTAINED; INTERACTIVE PROTOTYPE NOT VERIFIED; DESIGN NOT APPROVED.` The two synthetic concepts and four unified static frames are linked in [UX handoff](VEL-DES-001-002-UX-HANDOFF-2026-10-10.md); actual coverage deficits are tracked in [journey matrix](VEL-DES-002-JOURNEY-AND-STATE-MATRIX-2026-10-10.md).
