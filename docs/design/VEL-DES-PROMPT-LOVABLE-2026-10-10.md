---
id: VEL-DES-LOVABLE-PROMPT-20261010-001
title: Lovable — Vellistry isolated synthetic frontend interaction experiment
type: external-prototype-prompt
status: prepared-not-sent
created_at: 2026-10-10
updated_at: 2026-10-10
owner: project_owner
version: 0.1.0
---

# Lovable prompt — independent Vellistry synthetic design experiment

**Status: prompt prepared, Lovable not connected or run in this project at the time of writing.** A Lovable app was discoverable in ChatGPT but requires explicit user connection. Use **only this curated prompt** in a new isolated Lovable project (rather than forwarding all private GitHub/project history). In Lovable, do not connect GitHub to the private Vellistry production repository, accept database provisioning, deploy/publish or add integrations without separate approval.

The goal is a **prototype independent of Figma Make**, measured against the exact same synthetic fixture and 11 journeys. Reference [existing non-approved Figma concepts](https://www.figma.com/design/krXupCfSLUnOQxEOjIlp9U), but do not depend on unrestricted Figma access. A screenshot of an explicitly synthetic screen may be supplied by the owner if useful.

## Copy the following between BEGIN and END into a fresh Lovable project

### BEGIN LOVABLE TASK

Create **Vellistry UX Lab — synthetic fiction author prototype**. It is **NOT the Vellistry production application**. Build an isolated **interactive frontend-only prototype** to evaluate writer journeys and failure-state clarity.

## Design direction

- Calm, editorial writing-first workspace with legible manuscript column, understated forest-green/neutral accents, chapter navigator, context inspector and an optional richer Story Workspace.
- Desktop primary with adaptive 900px and 390px layouts. At narrow widths, chapter/context panels become focus-managed drawers.
- Fiction writing must be possible with **AI OFF and without any API key**; optional AI is not a required onboarding step.
- Make the design notably clearer in workflow and state communication than a generic project management dashboard.
- Show author profiles and threads without taking over the writing surface. Approval of facts is a separate workflow.
- Use editable, accessible buttons, real keyboard navigation and descriptive control names where possible; no claims of tested screen-reader/IME support.

## Strict experiment sandbox

**DO NOT** provision or connect Supabase, Lovable Cloud DB, external APIs, a backend, live authentication, storage buckets, email, GitHub repo sync, payments, deployment, model inference, analytics or telemetry, or a public website. **No real data ingestion.** No real manuscript, API key, session token, confidential source guidance body or other secrets. If any suggested integration appears, decline or omit it.

Implement state using local **in-memory component state only** and predefined fixtures. Do not persist user content to network or browser storage. Add a persistent-on-screen "SYNTHETIC UX DEMO • Not securely saved or authenticated" note; avoid representing mock data as durable server truth. If reload resets all data, document that. Name the project "Vellistry UX Lab", never claim to have deployed the real product.

This is permission to produce **throwaway frontend prototype code in Lovable's isolated project only**, not authorization to touch the genuine Vellistry Next 16/Nest 11/Supabase/Tiptap 3 codebase. No product migration. No public publish.

## Synthetic fiction fixture

- Book: **The Glass Orchard**; selected chapter **7 — The Borrowed Name**.
- Characters: **Mira Vale** (gate lock was replaced, identity of replacer unknown), **Rowan** (withheld answer), **Elias** (missing eleven days).
- Open story threads: **Where is Elias?** and **Who replaced the orchard lock?**.
- Original rewrite span: "Mira stopped at the gate, a little afraid, because someone had changed the lock."
- Fixed fake rewrite: "Mira stopped at the gate. The lock was new. She could see scratches on the brass."
- Profile candidate: "The lock at the orchard gate was replaced." Source quotation: "Someone had replaced the lock." Do not infer WHO replaced it.
- Synthetic base revision 11; synthetic "server" revision 12. No actual DB exists.
- Fake account personas Writer A / Writer B only; never invite real account registration.

## Build interactive flows corresponding to these eleven journeys

1. **VEL-JRN-001**: Empty/seeded library, create/reopen a synthetic book, chapter navigation, add/reorder fake chapters without mixing text.
2. **VEL-JRN-002**: AI-OFF manuscript editor with basic rich text headings/emphasis/list, keyboard shortcuts if feasible, undo/redo, simple search and independent chapter draft state. A light in-memory editor suffices; do not claim full production Tiptap compliance.
3. **VEL-JRN-003**: Confirmed vs pending/unsaved/offline simulated save state; local draft vs mock accepted server revision comparison; lost-acknowledgment uncertainty; non-destructive conflict choice; simulated TXT/DOCX loss warnings, book backup/export confirmation. No real DOCX/restore fidelity claim.
4. **VEL-JRN-004**: Manual create/edit of character profiles and story threads; approved manual author notes distinguishable from suggestions.
5. **VEL-JRN-005**: Source-linked fact suggestion review, Approve/Edit/Dismiss, story-time label, missing/stale evidence warning; no background canon mutation.
6. **VEL-JRN-006**: Simplified Rules Studio with illustrative rule names (not proprietary original source bodies), toggle, book scope/override and effective-guidance preview. Display product intent "134 controls: 130 expanded defaults ON, 4 distinct compact extras OFF" as a label only; do not pretend to contain all source records.
7. **VEL-JRN-007**: Optional author-owned OpenRouter BYOK UX, free or paid keys, a masked placeholder-only field (reject realistic secrets), curated-route mock selector, exact preview of recipient, excerpt, relevant enabled rules, and cost/privacy warning; demo Continue must use a fixed fake response.
8. **VEL-JRN-008**: Rewrite exactly one contiguous selected span within one paragraph, show original/alternative, Accept/Reject and **simulated** revision-backed undo. Multiblock selection should show restriction instead of silently applying.
9. **VEL-JRN-009**: After explicitly accepting fictional AI prose, present a NEW independent profile fact suggestion, not an automatically updated character state.
10. **VEL-JRN-010**: Simulate pending AI response and in-place author edit; mark older result stale and disable Accept; visible prompt to start a new preview. Continue manual editing unaffected.
11. **VEL-JRN-011**: Simulated account context switching with isolated toy fixture data, honest export/deletion confirmation and disclaimer. Include exact security disclaimer: "In the intended research architecture, sign-out may not immediately revoke an already issued unexpired access token." Do not assert the demo proves security.

## Critical state distinctions

Visible and separately controllable statuses: `unsaved`, `saving`, `mock confirmed`, `offline/local recovery`, `unknown after lost acknowledgment`, `revision conflict`. Any displayed "Saved" label must be clearly **simulation**. Avoid overwriting the synthetic accepted "server" revision without explicit user action.

AI: `OFF → preview consent → pending → fabricated proposal → explicit accept/reject OR stale/cancelled/error`; accepting a generated paragraph must never silently mutate canonical profiles. Undo after later intervening edits should require a conflict resolution path rather than erasing them.

Security: no network calls; no secret storage; no real manuscript data. Do not claim real user isolation or live logout revocation from a UI simulation.

## Output

Generate a navigable prototype with clear screen names:
Library; Book/Chapter Editor; Story Workspace; Rules Studio; Optional AI Setup/Consent; Continue/Rewrite Proposal Review; Save Recovery; Revisions; Export/Backup; Privacy/Delete. Modal/drawer patterns may be used where appropriate.

Offer a single visible demo-state switcher to trigger synthetic failure modes. Provide a compact developer-visible table mapping each journey to its actually implemented interactions and explicitly list anything missing.

Keep code modular/legible **within this prototype project**. Avoid generated autonomous agent features, full Cover Studio, professional EPUB/print, live collaboration, new AI operations, subscriptions and speculative features.

The intended deliverable is a private working design experiment suitable for human testing and comparison against the Figma Make prototype. **DO NOT publish or sync to production GitHub.**

### END LOVABLE TASK

## Refinement prompts — use only after examining actual output

**1. Honest save and source revision**

"Keep the synthetic-only, no network/no backend limits. Implement a visible local-vs-accepted revision comparison and a lost ACK state that says 'Checking whether the last save completed', not Saved. Prevent accidental overwrite on simulated account or chapter switching. Provide keyboard and narrow-screen treatments."

**2. Writer autonomy / consent**

"Strengthen manual writing with AI OFF. In Optional AI, preview exact outgoing text and only relevant enabled demo rules, with a prominent synthetic warning. Restrict AI to Continue and one-contiguous-span-in-one-paragraph Rewrite. Fixed text proposals only, no API calls. Add invalid selection, stale response, explicit Accept/Reject, and separately approved story facts."

**3. Evidence inventory**

"Return the implemented and unimplemented navigation paths by VEL-JRN-001..011. State what the demo cannot prove (security, persistence, manuscript privacy, real provider quality, backup/restore, DOCX semantics, live a11y). Do not self-certify any research or acceptance gate."

## After running

Capture actual Lovable project URL, observed code scope, whether external services were provisioned, screenshots, state failures and evidence of manual AI-OFF editing. If Lovable proposes enabling Supabase, cloud DB, Google auth, publishing, or a GitHub production sync, **decline** and document the limitation. An isolated prototype is an investigation, not the accepted software architecture. See [controlled experiment](VEL-DES-001-DUAL-PROTOTYPE-EXPERIMENT-2026-10-10.md).
