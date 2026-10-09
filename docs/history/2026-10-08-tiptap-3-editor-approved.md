---
id: HIS-20261008-005
title: Owner selected Tiptap 3 and ProseMirror for Vellistry manuscript editor
type: historical-event
status: recorded
occurred_on: 2026-10-08
recorded_on: 2026-10-08
time_precision: day
created_at: 2026-10-08
updated_at: 2026-10-08
author: project-research
actor: project_owner
version: 1.0.1
sources:
  - "Fiction Writing Project conversation, 2026-10-08; direct reply to editor recommendation; durable conversation URL pending"
evidence:
  - "Assistant recommended Tiptap 3, built on ProseMirror as a proposed editor choice and explained what the combination means."
  - "The project owner replied: 'okay, we are using it'."
  - "Decision scope preserved by ADR-0003; owner did not select paid Tiptap services or the overall application stack."
related_adrs:
  - ADR-0003
related_requirements:
  - VEL-REQ-001
related_events: []
corrects: []
corrected_by: []
commit_refs: []
---

# Historical event — Tiptap 3 selected as manuscript editor foundation

## Event

On **2026-10-08**, following the assistant's recommendation of **Tiptap 3, built on ProseMirror** and a subsequent explanation, the Vellistry project owner explicitly accepted the editor choice with the message **“okay, we are using it.”**

## Prior state and resulting state

**Prior:** The R05 comparative editor and licensing study treated ProseMirror, Tiptap, Lexical, Slate, CKEditor 5 and other engines as unselected candidates.

**Result:** Tiptap major version 3, using ProseMirror as its underlying editing technology, became the **owner-approved manuscript editor foundation**. The rest of the Vellistry technology stack, professional book export/pagination choices and paid vendor feature licensing remain undecided.

## Evidence and provenance

- **Primary approval content available in project conversation:** Owner message quoted above, after the specific editor recommendation and explanation.
- **Original conversation permalink:** not archived. This record does not claim to provide a durable source transcript or authenticated GitHub approval comment.
- **Decision record:** [ADR-0003](../decisions/ADR-0003-use-tiptap-3-prosemirror-for-manuscript-editor.md).
- **Event precision:** day. No precise timestamp is invented.

## Interpretation

The choice is authoritative **as a decision**, not evidence of built functionality, installed dependencies or validated manuscript behavior. The historical R05 study should not be rewritten as though the earlier comparison had already selected an editor.

## Follow-up or correction links

- Use ADR-0003 and CURRENT-STATE.md as the current decision and status references.
- Preserve independent feature/license/long-form performance trials and publish their results before claiming the editor is production-ready.
- If the selected foundation changes, preserve this event and create a separate, dated superseding decision.

**Record ID reconciliation (2026-10-09):** This draft originally reused `HIS-20261008-004`, but that stable ID already identifies the separately merged Stage 3 agent handoff record. The Tiptap owner-decision event now uses unique `HIS-20261008-005`; the original date, actor, decision substance and source evidence remain unchanged. No pre-existing Stage 3 history entry was renumbered.
