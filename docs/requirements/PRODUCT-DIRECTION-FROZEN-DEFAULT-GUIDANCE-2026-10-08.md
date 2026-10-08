---
id: VEL-PRODUCT-DIRECTION-20261008-001
type: product-direction
status: user-directed
created_at: 2026-10-08
updated_at: 2026-10-08
owner: project_owner
version: 0.1.0
sources:
  - "Owner clarification in Fiction Writing Project conversation, 2026-10-08; stable transcript permalink pending archival"
  - SRC-003
  - SRC-001
related_research:
  - R01.03
  - R06
  - R08
  - R10
related_requirements:
  - VEL-REQ-001
  - VEL-REQ-006
approved_by: project_owner
---

# Product direction — freeze existing fiction guidance as default, under author control

## Authority and decision status

**OWNER-DIRECTED PRODUCT BEHAVIOR.** On 2026-10-08 the user instructed the project to **freeze the previously developed fiction guidance system as the application’s default writing-quality guidance**, not continue modifying the underlying creative framework, and make that guidance **enabled by default but controllable by users through the existing proposed Rules Studio**.

This is an explicit **product intent / interaction requirement**, not an architectural decision, implemented feature, settled data model, confirmed model compliance guarantee, or approval of a revised 130-lens taxonomy. The exact text of the user’s request should be archived as durable approval evidence; this record is a faithful operational interpretation for subsequent design research.

## What is frozen

- Preserve the **existing fiction-writing guidance as it currently exists** in its source materials, including its 13 domains, 130 identified guidance lenses, governing principles, operational writing/audit instructions, the important valid artistic exceptions, and any historical source variants.
- In particular **do not silently rewrite, delete, rename or renumber the AR domain**, merge short/expanded definitions, or impose the proposed R01-A reconciliation. Its analysis remains a record of known source drift, not a request to alter the default creative system.
- The validated source archive is not yet fully checked in: SRC-003's research register SHA-256 is `fda917550811ccf44fe2fa7993d14a0f4f64d6dde5299d0c5b078865c4f0f965`. This identifier pins the **available conversation export**, not an independently recovered historic fiction-system ZIP or a canonical packaged rule release.
- The **exact deployable default-rule package is not yet certified** while short/expanded code-title collisions remain. Preserve *as-is* source and the owner's freeze direction; any later non-destructive packaging decision requires explicit review. Do not reinterpret “freeze” as authorization to select either conflicting list silently.
- Subsequent research may test *how the app uses rules*, not change the actual frozen guidance content without a separate owner instruction.

## What end users should control

1. New users receive the Vellistry default fiction guidance **enabled initially**; they are not required to manually recreate its rules.
2. They can view which default rules are active, and **disable, exclude/remove from their active configuration**, or restore them.
3. They can add their own rules and, consistent with earlier product intent, explore book-level and workspace-level scopes; finer inheritance and conflict semantics remain research questions.
4. Users can enable/disable their custom rules and choose when or where guidance is applied.
5. Removing a default rule from one user's *active rules* must not delete the frozen source from other users or prevent restoration.
6. **Disabled rules must not be secretly passed to the model as active instructions**, including through a leftover preset, remembered context, a hidden system prompt, or stale cache. If a disabled rule's *idea* overlaps another enabled rule, disclose that overlap rather than claiming the idea is entirely absent.
7. Authors retain control over the resulting text and can accept, reject or revise suggestions; the frozen system is **guidance**, not absolute stylistic prohibitions.
8. The app’s ordinary writing and editing must remain useful with all AI help turned off.

## Research acceptance scenarios — proposals for testing, not implementation

- **Default-on test:** A fresh project starts with the frozen guidance active; the UI shows this rather than hiding it.
- **Toggle test:** Disable a default rhetorical-repetition rule, preview effective instructions, generate relevant text; its particular text must not be included as an active instruction.
- **Custom-rule test:** Add “Keep combat descriptions concise and physically grounded,” enable it and verify the effective generation request changes.
- **Conflict test:** A default preference for restrained repetition competes with the user's intentional liturgical repetition. The UI explains the conflict/exception and follows the user's applicable explicit choice.
- **Re-enable/reset test:** Restore defaults without mutating the frozen underlying source material.
- **Scoping test:** Book-level exceptions should not unexpectedly change unrelated books; inheritance granularity still to be established.
- **Audit trace test:** A proposed AI edit is traceable to the rules active during the request, and the user can reject it.
- **Compliance test:** Compare multiple models and examples. Distinguish rules *included in prompts* from rules the model *actually follows*. Never guarantee deterministic obedience solely through prompting.

## Practical research boundary

An illustrative future effective-configuration concept is:

`active guidance = enabled frozen defaults + enabled author additions + applicable overrides/exclusions`

This is a **behavioral model for evaluation**, not a chosen implementation design, schema, precedence engine or network architecture. Investigate usability, clarity, selective context usage, prompt conflicts, model variance, reproducibility and cost before selecting mechanics.

## Open details (NOT approved)

- Exactly which historical fiction-system source file will become the installable frozen default pack; how short/expanded AR collisions will be exposed without re-authoring.
- Default enablement at workspace, project or book creation; inheritance/override semantics and ability to turn entire packs off.
- How “take out” appears in the UX (exclude from active project versus user-level remove), reset and version updates.
- How conflicts are presented and how individual user instructions, story canon and broad guidance interact.
- How to ensure disabled instructions leave provider-side context and external assistant sessions.
- How to evaluate genuinely higher writing quality without suppressing style and genre differences.

**Explicit non-decisions:** no model, API gateway, MCP architecture, framework, backend, database, app source layout, editor engine, subscription, pricing or implementation timeline chosen.
