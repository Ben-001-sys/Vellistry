---
id: VEL-DES-FIGMA-MAKE-PROMPT-20261010-001
title: Figma Make — Vellistry synthetic interactive writer UX prompt
type: external-prototype-prompt
status: prepared-not-sent
created_at: 2026-10-10
updated_at: 2026-10-10
owner: project_owner
version: 0.1.0
---

# Figma Make prompt — synthetic interactive Vellistry author workspace

**Status: prepared; not submitted to Figma Make.** Use a **new private Make file**. Attach or Send to Make the existing editable Figma synthetic [Direction A writing-first](https://www.figma.com/design/krXupCfSLUnOQxEOjIlp9U?node-id=1-2) and consult [Direction B story-workspace-first](https://www.figma.com/design/krXupCfSLUnOQxEOjIlp9U?node-id=1-3), with the other unified candidate frames as interaction references. These designs are proposals, not approved production assets. If Starter plan prevents attaching/sending, use only this prompt and record that limitation.

## Copy the following between BEGIN and END into Figma Make

### BEGIN FIGMA MAKE TASK

Build an **interactive, private, frontend-only, synthetic prototype** of **Vellistry**, a desktop-primary fiction-author writing application. This is exclusively a **UX concept experiment**. Do not build, publish, deploy, authenticate, or connect a real application.

**Source layout:** The attached Figma screen uses a calm writing-first manuscript area, a chapter navigation rail, and an optional contextual panel; the second attached concept has a richer story workspace with character and plot-thread cards. Preserve their useful visual language while making the manuscript editor the primary daily task, and expose deeper story context via a separate easily reached Story Workspace. Compare rather than blindly copy every element. Colors/typography are provisional, not a finalized brand.

**Non-negotiable containment**:
- NO Supabase, database, real auth, backend, emails, GitHub sync, external model/provider API, telemetry, payment, uploads, production endpoints, production secrets, manuscript storage, public publishing, or network requests for user content.
- Use only **invented local fixture data and ephemeral in-memory state**; state may reset when reloaded. Mark controls/actions as "Demo — simulated" when they would otherwise imply actual server persistence, export fidelity, credential protection or AI inference.
- Never ask for or accept real API keys. Provide a deliberately nonfunctional BYOK UX illustration with masked placeholder and no calls/storage. A sample string is visibly a placeholder, not a live credential.
- No real private manuscript, original confidential writing-rule text or actual author account. Use the invented story below.
- Do not claim AI originality/quality, instant token invalidation, secure multi-user isolation, durable backup, RPO/RTO, or production readiness.

**Invented fixture**:
Book *The Glass Orchard*; chapter 7 *The Borrowed Name*. Mira Vale sees a changed orchard-gate lock but does not know who replaced it. Rowan withholds information. Elias has been missing for eleven days. Threads: *Where is Elias?* and *Who replaced the orchard lock?* Fake local draft base revision 11 and fake accepted server revision 12 for conflict demonstration.

**Build these linked prototype flows** (working clickable states, not merely separate pictures):
1. **Library → book → chapter → no-AI editor**: author can choose a book, navigate chapters and type a fictional line; include basic toolbar/word count, readable column and clear save-status simulation. No AI setup required.
2. **Story Workspace**: character/thread cards and manual profile edits using synthetic data; show approved facts separately from proposed facts; clear navigation back to editor without losing in-memory editor text.
3. **Recovery**: explicit controls to simulate unsaved/saving/confirmed, offline, lost acknowledgment and two-revision conflict. Local candidate must never silently overwrite "server" fixture. Compare and deliberate keep-both/reconcile/decline choices.
4. **Rules Studio**: show a demonstrative representative set of rule rows, not fictional replicas of the confidential 260-source pack. Display the accepted catalog policy in abstract form — 134 logical controls, 130 expanded-primary defaults ON, four independent compact extras OFF — without pretending the whole catalog's source text is present. Toggle one synthetic book-scoped rule and preview ONLY enabled relevant mock guidance for the next action.
5. **Optional AI**: AI OFF by default. Show author-owned free OR paid BYOK setup, consent preview, explicit recipient/selected excerpt/effective rules/cost caveat. Do NOT connect a real model. Demonstrate only two actions: **Continue** at author-selected insertion point, and **Rewrite one contiguous text span inside a single paragraph**. Generate fixed fabricated plain-text proposal. User must review and Accept/Reject; accept changes only the local **simulated** accepted revision.
6. **Stale result + canon**: allow author to edit selected text while a fake AI request is pending, then reveal that stale proposal cannot be accepted. After a non-stale fake prose acceptance, show an independent source-linked character fact candidate; approving prose does not approve canon.
7. **Privacy/portability**: show abstract export TXT/DOCX warning and backup/delete confirmation designs, without claiming actual data interchange or restore; account-switch and sign-out screens should correctly acknowledge direct PostgREST JWT revocation remains unresolved in intended architecture.

**Required safety cues**:
- Save states must visually separate locally buffered unsaved data, pending save, server-confirmed mock receipt, uncertain lost ACK and true version conflict. Label simulation explicitly.
- Profile proposal ≠ author-approved canon. Prose proposal ≠ accepted chapter. Accept/undo must show what would be persisted in a real system, but this prototype does not persist to Supabase.
- AI results are plain text only, not HTML or automatic edits. Reject is non-destructive.
- Switching account/book contexts must never display another fixture's recovery content.

**Responsive and accessibility**: desktop 1440px layout as first checkpoint; 900px and 390px variants using chapter/profile drawers; manual editor remains primary, no horizontal scrolling, keyboard focus visibility, semantic controls, named editor, descriptive errors and color-independent statuses. Do not assert real IME/screen-reader compliance without device testing.

**Delivery**: Create working navigation between the seven flows above and a small in-prototype "Demo controls / simulated states" panel. Include an obvious "Synthetic prototype — no real saving, authentication or AI" label, but keep writer UI itself realistic. Report which interactions you actually implemented versus mocked/unfinished. Do not publish. Do not silently expand into Cover Studio, EPUB publishing, collaboration, autonomous authoring, hosted backend or subscription billing.

### END FIGMA MAKE TASK

## Follow-up prompts (only after actual first output review)

**Second pass — error/recovery first**

"Keep all existing synthetic frontend-only restrictions. Add a distinct lost-save-acknowledgment state ('Checking last save status') and a clear compare workflow between local base revision 11 and accepted server revision 12. Do not show 'Saved' until the simulated confirmed receipt state. Add clear focus order and accessible status text. Do not create backend/network persistence."

**Third pass — author agency**

"Keep only Continue and one-paragraph-span Rewrite. Add selection invalid-state guidance, source-changed-while-generation-pending protection, no auto-insert of proposal, explicit Accept and Reject, persisted-undo *simulation only*, and separate acceptance of any new profile fact. Ensure manual writing, rules and profiles remain usable with AI OFF. Do not add real model access."

**Fourth pass — handoff inspection**

"List every clickable path implemented; provide a screen/state table for VEL-JRN-001..011 marking working simulated state, incomplete, and untested. Explain what cannot be inferred from the prototype (security, persistence, DOCX, real model quality, legal, accessibility). Do not publish or integrate code into production."

## Review protocol

Record resulting **actual** Make file link, attachment method, screenshot/interaction evidence and genuine changes from attached candidate. Use `NOT_RUN` for untested journeys. If tool usage/AI credits are exhausted, stop and record `BLOCKED`; do not buy upgrades or publish as workaround. This prompt does not itself create a Figma Make prototype.
