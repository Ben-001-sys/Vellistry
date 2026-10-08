---
id: VEL-CP-0001
title: 'Context for VEL-TASK-0001: Verify initial manuscript-editor research requirement traceability'
type: context-pack
status: prepared
created_at: '2026-10-08'
version: 0.1.0
task_id: VEL-TASK-0001
base_commit: d14261ce6bab2aea6550454f089c48859eb0a3ee
inputs:
- path: PROJECT-CONSTITUTION.md
  role: governing-policy
  git_blob_sha: 61f79c4dcb47bd99291c16490e8c00692e2ab23b
  source_status: accepted
- path: SOURCE-OF-TRUTH.md
  role: governing-policy
  git_blob_sha: fedc984f2ec3c1660dd39a7c0e6aeaccce345d9f
  source_status: accepted
- path: docs/research/SOURCE-REGISTER.md
  role: source-inventory
  git_blob_sha: 376fb41a79de25115514ff7c18ea3f8cbccfdd27
  source_status: draft
- path: docs/research/R01-SRC001-USER-INTENT-EXTRACTION.md
  role: draft-research
  git_blob_sha: e7ed49b94de6a9463efa8e327e90fc9f4a4e0064
  source_status: draft
- path: docs/requirements/REQUIREMENTS.md
  role: proposed-requirements
  git_blob_sha: 92cbed4f904606f46d20dac3d79457b9ba260e06
  source_status: draft
source_gaps:
- id: SRC-001
  limitation: Original uploaded blueprint bytes not yet archived/retrievable inside the Git repo.
prepared_by: ChatGPT Stage 3 pilot
---
# VEL-CP-0001 — Verify initial manuscript-editor research requirement traceability

## Objective
Audit the existing first-pass extraction of author intent for non-AI editor value, rich-text needs, reuse of an open-source engine, and commercial licensing checks. Identify what is and is not evidenced in current repository records without selecting an editor framework.

## Scope
**In:** INT-09 through INT-12 as listed in SRC-001's draft extraction; Current proposed requirements register and original-source availability; Separate owner-authored intent from assistant-proposed technology advice
**Out:** Approving a product MVP, architecture, or editor selection; Independent checking of an unarchived original source; Verifying current vendor licensing or external product details

## Evidence and authority constraints
The text below is a readable rendering of pinned Git blobs; exact raw bytes remain recoverable from the recorded commit/blob SHAs. Recorded source statuses remain in force: draft research is not accepted requirements. Original unarchived uploads are not independently verified merely by being mentioned.

**Known source gaps:**
- SRC-001: Original uploaded blueprint bytes not yet archived/retrievable inside the Git repo.

## Permissions and acceptance
**Allowed:** read, analyze, propose
**Owner approval required:** Changing accepted product requirements or ADRs; Merging pull requests; Any production or secrets operations
**Acceptance criteria:**
- Identify four intent IDs INT-09 through INT-12 and their relationship to candidate VEL-REQ-002
- Separate first-pass extraction from independently verified original author wording
- Do not select a framework, elevate a proposed requirement, or claim external source verification

## Deliverables
- Evidence and gap assessment, preserving draft/accepted status
- ExecutionBundle with exact Git references and proposals for follow-up

## Pinned source snapshots
Git commit: `d14261ce6bab2aea6550454f089c48859eb0a3ee`. Read source statuses independently from task intent.

### `PROJECT-CONSTITUTION.md` @ `61f79c4dcb47bd99291c16490e8c00692e2ab23b`

~~~~~~markdown
---
id: VEL-GOV-001
type: governance
status: accepted
created_at: 2026-10-08
updated_at: 2026-10-08
owner: project_owner
version: 0.1.1
evidence:
  - "User approval of the Git-plus-app knowledge approach, 2026-10-08; conversation reference pending archival."
related_adrs:
  - ADR-0001
  - ADR-0002
---

# Vellistry Project Constitution

1. **Preserve authorship and intent.** Support writers' decisions, distinctive voices, stylistic irregularities, and deliberate exceptions; avoid indiscriminate generic polishing.
2. **Preserve original sources.** Research summaries do not replace underlying documents; record provenance and distinguish direct quotations, supported findings, inference, and proposals.
3. **Separate evidence from decisions.** AI recommendations and research candidates never become authoritative simply by being recorded.
4. **Require traceability.** Requirements, ADRs, historical events, research records, and experiments receive stable IDs and linked sources or explicit evidence gaps.
5. **Require metadata for decisions and history.** Use YAML front matter, timestamps/date precision, lifecycle states, author/approval attribution, relationships, and supersession links.
6. **Maintain current state.** Update CURRENT-STATE.md whenever a task materially changes agreed progress, decisions, blockers, or next steps.
7. **Use controlled knowledge promotion.** Read authoritative context; submit proposed changes with evidence; verify and approve before marking accepted.
8. **Retain history.** Correct errors through traceable revisions or new corrective events; do not erase prior decisions or rewrite an event as though it never happened.
9. **Remain vendor-neutral.** Models, tools, and orchestrators should be replaceable where practical; document genuine constraints and trade-offs.
10. **Use least-privilege agent access.** Keep secrets out of Git, isolate sensitive/runtime author data, review consequential actions, and require human approval for high-impact changes.
11. **Keep systems proportionate.** Begin with Git/Markdown, lightweight templates, and repeatable manual research; add automated context assembly, durable workflows, and additional stores only if tests justify them.
12. **Version code and knowledge together where appropriate.** Application and its engineering knowledge belong in one repository, while user manuscripts and runtime personal information require separate application storage.

## Status hierarchy
Accepted and effective decisions take precedence over proposals. Superseding decisions must explicitly reference what they replace. Research notes are evidence, not approval.

## Solo-maintainer review policy
Vellistry currently has one human contributor: the project owner. The owner may review and merge their own pull requests after appropriate inspection and required automated checks. A separate human reviewer is **not** a standing requirement during this phase. AI-agent review may provide independent analysis but is advisory, not another human approval. For consequential architecture, security, or production changes, the owner's explicit approval remains required. Revisit the policy when collaborators join. See HIS-20261008-002.

## Change control
Propose amendments in version control with rationale and evidence. Material changes require owner approval, an updated changelog/history event, and a corresponding CURRENT-STATE update.
~~~~~~

### `SOURCE-OF-TRUTH.md` @ `fedc984f2ec3c1660dd39a7c0e6aeaccce345d9f`

~~~~~~markdown
---
id: VEL-GOV-002
type: governance
status: accepted
created_at: 2026-10-08
updated_at: 2026-10-08
owner: project_owner
version: 0.1.1
related_adrs:
  - ADR-0001
  - ADR-0002
---

# Source of Truth and Knowledge Ownership

## Engineering authority
- **Git repository:** canonical engineering documents, code, accepted project decisions, research evidence references, specifications, and change history.
- **CURRENT-STATE.md:** compact, current working status; not a substitute for full evidence.
- **ADRs:** accepted or proposed technical and knowledge-governance decisions, with rationale, alternatives, approval and supersession lineage.
- **Source register:** where original research came from and where an immutable/retrievable copy can be found.
- **Git history and pull requests:** revision provenance; do not substitute automatically for semantic record metadata.
- **ChatGPT and other agents:** analysis and proposal tools, not an independent source of architectural authority.

## Separate runtime authority
Future authors' manuscripts, story canon, application settings, credentials, and stored assets belong in purpose-selected runtime storage, not automatically in the Git engineering knowledge base. No runtime architecture has been selected.

## Five knowledge layers
1. Authoritative accepted project and implementation knowledge.
2. Current verified implementation/research state.
3. Historical rationale, experiments, rejected/superseded alternatives.
4. Temporary task-local agent context and unapproved hypotheses.
5. Evidence, provenance, authorship, validity, confidence, and traceability.

## Read → Propose → Review → Commit
1. Read the relevant accepted records and source citations.
2. Clearly label new assumptions, findings, recommendations, and uncertainties.
3. Review source fidelity and factual verification independently.
4. Promote material changes only after owner approval; update linked records and current state.
5. When superseding an ADR, preserve the older file and connect both sides of the lineage.

## PR review and sole owner authority
At present the project has a single human contributor. The owner performs self-review and makes the final merge/acceptance decision. A distinct human PR approval is not required. Automated CI and optional AI-agent reviews provide evidence and feedback; agents do not have approval authority. For significant changes, document the owner's review and decision in the PR or associated provenance record. GitHub does not count self-review as a separate approving reviewer; this workflow must not assume otherwise. If branch-protection settings require other human approvals, review the protection policy rather than fabricate reviewers. See HIS-20261008-002.

## Metadata and history
See [docs/governance/RECORD-SCHEMAS.md](docs/governance/RECORD-SCHEMAS.md). All ADR and historical-event records require YAML front matter and meaningful content.

## No silent conflation
The terms *verified evidence*, *accepted requirement*, *approved decision*, *implemented*, and *tested* are different. Never mark one as another without supporting evidence.
~~~~~~

### `docs/research/SOURCE-REGISTER.md` @ `376fb41a79de25115514ff7c18ea3f8cbccfdd27`

~~~~~~markdown
---
id: VEL-SRC-REGISTER-001
type: source-register
status: draft
created_at: 2026-10-08
updated_at: 2026-10-08
version: 0.1.0
---

# Research Source Register

These four materials are available as conversation/project attachments at initialization. Their SHA-256 hashes below were computed from the uploaded files on 2026-10-08. **Their original full contents have not yet been committed to this Git repository.** Preserve this distinction: a hash and filename are an inventory record, not a working retrieval link.

| ID | Exact uploaded filename | SHA-256 | Initial classification | Repository snapshot |
|---|---|---|---|---|
| SRC-001 | `AI Writing App Blueprint.md` | `9b2840cd65310802f9495c426ea8820ece4635d7f1ee503a3e055e30bfe2be24` | Product concept, research and technology candidates | Pending |
| SRC-002 | `Research AI Writing Problems.md` | `f011fd1e65de076f5f35bda18625dced3627a26968a3a48c9d05700d46355aeb` | Community/problem research | Pending |
| SRC-003 | `Branch · Research AI Writing Problems.md` | `fda917550811ccf44fe2fa7993d14a0f4f64d6dde5299d0c5b078865c4f0f965` | Expanded research, writing guidance, taxonomy | Pending |
| SRC-004 | `Getting Better With Agentic Coding - Copy.zip` | `ff1c2bd398833fd4d1a4b8b05440589ce8d941a224cea3b05bf302b9293a03b8` | Agentic-coding governance and workflow research | Pending |

## SRC-004 contents (nine Markdown documents)
1. `AGENTIC_CODING_PROJECT_SOURCE_DECISIONS.md`
2. `Architecture Recommendation Research.md`
3. `Architecture Research Summary.md`
4. `Architecture Review Conclusion.md`
5. `Database Strategy Comparison.md`
6. `Rank AI Assistants.md`
7. `Research and Architecture Recommendation.md`
8. `Top 10 Coding AI.md`
9. `Upgrade options for coding.md`

## Provenance requirements
For each extracted finding, store its source ID and preferably an exact heading, line range, stable archived location, or source excerpt reference. Separate:
- **Original-source statement** (what was said);
- **Research assessment** (whether it remains supported);
- **Requirement or decision** (what the project has actually accepted).

## Outstanding archival work
- Decide appropriate Git representation of large source files; archive originals or provide immutable storage references without leaking private material.
- Add stable retrieval links/commit references before claiming source migration complete.
- Assign section/line citations to individual requirements and decisions.
- Review prior external web links from research before treating them as current verified evidence.
~~~~~~

### `docs/research/R01-SRC001-USER-INTENT-EXTRACTION.md` @ `e7ed49b94de6a9463efa8e327e90fc9f4a4e0064`

~~~~~~markdown
---
id: VEL-RES-R01-SRC001-INTENT-001
type: source-extraction
status: draft
created_at: 2026-10-08
updated_at: 2026-10-08
owner: project_owner
version: 0.1.0
sources:
  - SRC-001
related_research:
  - R01.06
  - R04
---

# SRC-001 — First-pass extraction of user-authored product intent

**Status: SOURCE-DERIVED CANDIDATES, NOT ACCEPTED PRODUCT REQUIREMENTS.**
**Method:** Extracted only from the `## User` passage of `AI Writing App Blueprint.md`, line 5 of the preserved Markdown file. This source is a conversational/voice-style paragraph; text snippets anchor the point inside that long line, rather than falsely claiming a narrower line range. No assistant-written blueprint recommendation is promoted here as a user request.

**Count:** 28 individual intent or research-direction statements. They may overlap and still need de-duplication, owner confirmation, prioritization and testable acceptance criteria. IDs `INT-01` etc. are **extraction local IDs**, not reserved `VEL-REQ-` requirements.

| Extraction ID | Source-derived intent / open question | Exact user phrase (SRC-001 line 5) | Investigation theme |
|---|---|---|---|
| INT-01 | Treat the idea as a software/site/app product, not merely a novel-specific chat workflow. | “turning this into a software or a site or an app” | Product form exploration |
| INT-02 | Organize every idea while retaining minor and easily missed details. | “do not lose track of any, even the tiniest detail” | Research capture / provenance |
| INT-03 | Investigate choosing between AI models inside the writing experience. | “being able to choose a model” | Model choice |
| INT-04 | Support writer-provided ideas and AI-assisted writing, subject to user control. | “use the model to write, give it ideas” | AI-author collaboration |
| INT-05 | Allow users to create writing guidance and model instructions via a visual UI. | “being able to set these type of rules with UI” | Rules Studio |
| INT-06 | Study rules that operate on individual books and across multiple projects. | “scope it to a book. We can scope it to all your projects” | Rules scope |
| INT-07 | Keep book/fiction writing as the primary product focus. | “mainly for book writing” | Audience and scope |
| INT-08 | Research adjacent writing workflows without prematurely dismissing applicable use cases. | “if it falls under any of the other type of jobs” | Potential adjacent scope |
| INT-09 | Ensure conventional writing software remains useful independently of AI. | “shouldn't lose the edge of normal writing software” | Editor-first value |
| INT-10 | Investigate substantial rich-text formatting and editing comparable in kind to Google Docs. | “for example Google Docs, you see they are formatting and editing” | Rich text requirements |
| INT-11 | Research a mature editor project rather than rebuilding the entire editing engine. | “Research whatever open-source project allows us” | Build-vs-buy investigation |
| INT-12 | Check whether chosen editing technology is free for commercial use, with current licensing evidence. | “should be free, for commercial use” | Licensing constraint |
| INT-13 | Explore bring-your-own provider API keys as an AI access method. | “the writer yourself, to input API keys” | Provider access |
| INT-14 | Separately research MCP connections with compatible external AI assistants; availability and interpretation require verification. | “being able to set up an MCP connection” | Assistant interoperability |
| INT-15 | Preserve the named AI-host examples as ambiguous raw input until their names and capabilities are verified. | “ChatGPT, ChatGPT Cloud, and DeepSeek” | Provider names / clarification |
| INT-16 | Investigate writer-used publishing templates and tools, including which features users actually value. | “research with templates, tools, and that writers normally use” | Writer ecosystem research |
| INT-17 | Assess free/open options and eventual costs for third-party functionality. | “Can we get them for free?” | Economic feasibility |
| INT-18 | Support or investigate different book display/output formats, using PDF as a named example. | “different formats in which the book can be displayed” | Output formats |
| INT-19 | Research book page layouts, visual arrangement and typography beyond raw text. | “the way they design their pages” | Book composition |
| INT-20 | Treat book-cover design as a particularly important capability to research. | “The book cover, the book cover. The book cover especially.” | Covers |
| INT-21 | Explore AI-generated cover assets or directions without requiring AI to produce the whole final design. | “the AI being able to generate this one” | AI imagery |
| INT-22 | Investigate comparing multiple cover directions and previews, rather than presenting only one result. | “list different options, like preview” | Cover iteration |
| INT-23 | Investigate real editing tools for independently improving a cover, rather than one flattened AI result. | “using proper editing software” | Editable design |
| INT-24 | Research Canva + MCP as a possible workflow, subject to terms and capability verification. | “using Canva with, yes, MCP” | Integration exploration |
| INT-25 | Avoid generic, interchangeable-looking book covers, particularly for web fiction. | “You don't want any generic” | Design quality |
| INT-26 | Study physical manuscript printing and finished print-book production requirements. | “the printability of the book after it's written” | Printing |
| INT-27 | Propose useful non-obvious features rather than accumulating generic extras. | “don't let them be generic ideas” | Innovation discipline |
| INT-28 | Do not omit ordinary features when they are necessary for a credible writing product. | “if it's normal that is vital” | Baseline essentials |

## Scope ambiguities that must remain open

1. **What counts as Google Docs-like editing?** The source names Google Docs as a *comparison and quality aspiration*. It does not define an exact list of formatting controls, real-time collaboration, print layout, track changes, or proprietary behavior.
2. **'ChatGPT Cloud' in the transcript.** This may be a voice-transcription ambiguity. Do not silently replace it with 'Claude' or invent a particular host API. Research provider names and actual integrations before treating compatibility as confirmed.
3. **Rules hierarchy.** The user asks for book and all-project scopes. The more detailed workspace/series/chapter/scene inheritance model described later is assistant-proposed until independently validated or approved.
4. **Open-source wording.** The user seeks commercially usable free/open software for the editor. This is a constraint to investigate, *not an approval* of Tiptap, ProseMirror, Lexical, a specific license, or any implementation stack.
5. **Cover generation versus editing.** The source demands variants and proper editing. A flattened generated image alone would not meet the aspiration, but the exact editor features and legal rights remain research questions.
6. **'Other jobs'.** Adjacent writing use cases are to be noted and researched; this does not establish that every non-fiction writing product is in initial launch scope.
7. **Vital ordinary features.** Preserve essential baseline writer functionality while distinguishing high-value differentiators. No MVP scope is approved.
8. **Cost.** The speaker wants costs researched and rationalized later; no billing model, pricing, provider, or budget has been selected.
9. **API and MCP.** Both are explicitly named as desired avenues of assistance. Their distinction and implementable capability depend on external current technical verification.
10. **Source ambiguity and speech pattern.** Preserve the original paragraph verbatim separately; the table is a normalized research decomposition, not replacement text.

## Suggested review and promotion process

For each extracted item, connect the existing compact `VEL-REQ-` seed if appropriate, mark confirmed intent versus inferred behavior, interview representative authors, define a verifiable outcome, and obtain owner approval before promoting to accepted requirements. Treat any assistant-generated '42 requirements' outside the user passage as a separate proposed inventory until its standalone source can be recovered.

**No architecture, editor engine, AI provider, hosting, database, repository directory tree, feature launch priority or implementation date is selected by this extraction.**
~~~~~~

### `docs/requirements/REQUIREMENTS.md` @ `92cbed4f904606f46d20dac3d79457b9ba260e06`

~~~~~~markdown
---
id: VEL-REQ-REGISTER-001
type: requirements-register
status: draft
created_at: 2026-10-08
updated_at: 2026-10-08
version: 0.1.0
sources:
  - SRC-001
  - SRC-002
  - SRC-003
---

# Vellistry Requirements Register — Seed Only

**Warning:** These entries are an initial seed from existing research, not an exhaustive extraction and not an approved MVP. All entries below are **proposed** and require precise source passage references, verification, prioritization, and acceptance criteria.

| ID | Candidate requirement | Status | Source |
|---|---|---|---|
| VEL-REQ-001 | Visual configuration of scoped AI writing guidance/rules | proposed | SRC-001 |
| VEL-REQ-002 | Advanced conventional rich-text/manuscript editing | proposed | SRC-001 |
| VEL-REQ-003 | Optional provider API-key integrations and model choice | proposed | SRC-001 |
| VEL-REQ-004 | Separately designed MCP-based tool interoperability | proposed | SRC-001 |
| VEL-REQ-005 | Persistent story/character/canon/continuity support | proposed | SRC-001, SRC-003 |
| VEL-REQ-006 | Author-controlled writing quality guidance preserving intent and deliberate stylistic exceptions | proposed | SRC-002, SRC-003 |
| VEL-REQ-007 | Book cover, book layout, export and print preparation capabilities | proposed | SRC-001 |
| VEL-REQ-008 | Portable project records including relevant writing rules/story state | proposed | SRC-001 |

## Requirement process
Each future requirement record must capture: ID, title, exact source references, description, priority, status, acceptance criteria, dependencies, related decisions, related features/contracts, and evidence of approval.

## Next step
Source-pass extraction should replace this compact seed with individual, traceable requirements. If the owner changes scope, preserve the change and its rationale.
~~~~~~

## Execution reporting
Return an ExecutionBundle with FACT / INTERPRETATION / PROPOSAL sections, tests actually performed, changes, evidence gaps, and pending owner approval.
