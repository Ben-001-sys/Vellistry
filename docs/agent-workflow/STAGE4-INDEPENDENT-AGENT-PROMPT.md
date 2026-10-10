# Vellistry Stage 4 — Independent execution prompt

You are a **separate AI coding/research agent** executing a bounded Vellistry task. You have been given exactly two operator-supplied files:

1. `VEL-CP-0002.md` — Git-pinned ContextPack, including authoritative and **proposed** source snapshots, objective, permissions and known gaps.
2. `PROMPT.md` — these execution instructions.

Treat these two files as the **only pre-supplied project context**. Do not consult earlier chats, external websites, a pre-existing Vellistry repository, other project documentation, agent memories, or an earlier ExecutionBundle. Start a **new empty chat/session and empty workspace**. You may create fresh Python files of your own to perform the experiment, but no file from a previous Vellistry run may be loaded.

## Assignment

Read all of `VEL-CP-0002.md`, respecting its **pinned source statuses**. Independently reconstruct `VEL-TASK-0002`: a bounded, synthetic, implementation-neutral chapter create/edit/save/reopen contract derived from the owner-approved M1/M2/M3/M8 *product scope* and the **proposed** `VEL-SPEC-001` detailed scenarios. The original source must determine your allowed actions and boundaries; do not silently accept a new runtime stack.

Produce a **small standalone, deterministic synthetic test model** for as many of `SC-001` through `SC-007` as the two files genuinely support. Test observable save acknowledgment, lost-before-commit and lost-after-commit outcomes, stale revision collisions, synthetic cross-author read/write denial and cross-book chapter isolation. `SC-002` rich-text support may be represented by inert document-shaped fixture data; it **cannot** be counted as a real Tiptap browser/accessibility test. Treat `SC-008` as an evidence/approval governance check, not a testable production feature.

You may use Python standard library in this fresh workspace, without GitHub checkout or dependencies. Actually run the tests if your environment supports execution; otherwise clearly mark them **NOT RUN** and report executable commands for the operator. **Never invent a passing test, commit hash, GitHub URL, RLS result, security certification or external approval.**

Do not create or select a production framework, database, authentication vendor, API service, manuscript schema, paid AI provider, or deployment. Use only invented story prose and synthetic actors; do not request or transmit user manuscripts, passwords, tokens or external network calls.

## Required return artifact

Return a single report named `VEL-EB-0002-INDEPENDENT.md` with:

- **Agent identity:** tool/provider, exact displayed model, effort/settings if available, fresh-session assertion, and what files or additional context were available. If unknown, say unknown. A self-report cannot independently certify isolation.
- **Pinned inputs:** `VEL-TASK-0002`, `VEL-CP-0002`, `VEL-SPEC-001`, exact `base_commit` quoted from pack, and which input statuses are accepted vs proposed.
- **FACT:** files you actually created; individual commands you executed; exact observed exit/result; test counts and failing cases. Separate executable tests from theoretical tests.
- **Scenario matrix:** explicit `SC-001` to `SC-008`, each marked `PASS (synthetic)`, `FAIL (synthetic)`, `PARTIAL`, or `NOT TESTED` with file/test names and observed evidence. All **actual product acceptance** remains `NOT TESTED`.
- **INTERPRETATION:** supported implications only, including ambiguity after lost acknowledgment.
- **PROPOSAL:** necessary follow-up production/browser/security tests, open source gaps, and *owner-only* decisions.
- **Reproduction:** complete source for any newly authored Python model/test file in fenced code blocks **or** attach the exact runnable files; include Python version if available and SHA-256 of generated files if computed.
- **Approval boundary:** explicitly state no owner acceptance, product release gate, real authentication/RLS, durable storage or application framework decision was established.

Use the headings `## Agent identity`, `## Pinned sources and authority`, `## FACT`, `## Scenario matrix`, `## INTERPRETATION`, `## PROPOSAL`, `## Reproduction`, and `## Approval gates`.

**Do not mark the Stage 3 historical Cursor fixture or this Stage 4 workflow accepted.** The operator will separately archive and check your raw output, run the submitted code if possible, and seek owner review. Be explicit about anything you cannot test.
