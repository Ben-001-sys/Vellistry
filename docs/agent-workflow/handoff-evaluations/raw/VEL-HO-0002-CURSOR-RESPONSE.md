## Task reconstruction

**VEL-TASK-0001** is an audit of first-pass manuscript-editor research traceability, packaged as **VEL-CP-0001** (type `context-pack`, status `prepared`, version `0.1.0`, created `2026-10-08`, prepared by ChatGPT Stage 3 pilot). The pinned revision is Git commit `d14261ce6bab2aea6550454f089c48859eb0a3ee`. The pack also records `task_blob_sha` `3c2bd7001ea96a36909e36731b96911348de2e71`.

**Objective.** Audit the existing first-pass extraction of author intent for non-AI editor value, rich-text needs, reuse of an open-source engine, and commercial licensing checks. Identify what current repository records do and do not evidence, without selecting an editor framework.

**In scope.** INT-09 through INT-12 in the SRC-001 draft extraction; the current proposed requirements register and original-source availability; separating owner-authored intent from assistant-proposed technology advice.

**Excluded.** Approving a product MVP, architecture, or editor selection; independently checking an unarchived original source; verifying current vendor licensing or external product details.

**Allowed actions.** Read, analyze, and propose.

**Owner approval required before:** changing accepted product requirements or ADRs; merging pull requests; any production or secrets operations.

**Acceptance criteria recorded in the pack.** Identify INT-09 through INT-12 and their relationship to candidate VEL-REQ-002; separate the first-pass extraction from independently verified original author wording; do not select a framework, elevate a proposed requirement, or claim external source verification.

**Provenance limits recorded in the pack.** The body is a readable rendering of pinned Git blobs. Exact raw bytes are described as recoverable from the recorded commit and blob SHAs. Draft research is not accepted requirements. Mention of an upload is not independent verification of that upload. Known gap **SRC-001**: original uploaded blueprint bytes are not yet archived or retrievable inside the Git repo.

## Sources and authority

| Path | Role | Blob SHA | Status |
|---|---|---|---|
| `PROJECT-CONSTITUTION.md` | governing-policy | `61f79c4dcb47bd99291c16490e8c00692e2ab23b` | accepted |
| `SOURCE-OF-TRUTH.md` | governing-policy | `fedc984f2ec3c1660dd39a7c0e6aeaccce345d9f` | accepted |
| `docs/research/SOURCE-REGISTER.md` | source-inventory | `376fb41a79de25115514ff7c18ea3f8cbccfdd27` | draft |
| `docs/research/R01-SRC001-USER-INTENT-EXTRACTION.md` | draft-research | `e7ed49b94de6a9463efa8e327e90fc9f4a4e0064` | draft |
| `docs/requirements/REQUIREMENTS.md` | proposed-requirements | `92cbed4f904606f46d20dac3d79457b9ba260e06` | draft |

Accepted governance outranks the draft research and the proposed requirements seed. `SOURCE-OF-TRUTH.md` treats Git as the engineering authority and treats agents as analysis tools, not an independent source of architectural authority. It also separates verified evidence, accepted requirement, approved decision, implemented, and tested.

**What this review used.** The task instruction in `PROMPT.md` and the rendered pack `VEL-CP-0001.md` only.

**What this review did not independently verify.** The commit `d14261ce6bab2aea6550454f089c48859eb0a3ee`; any blob SHA, including `task_blob_sha` `3c2bd7001ea96a36909e36731b96911348de2e71`; the SHA-256 values in the source register; the original upload `AI Writing App Blueprint.md` (recorded SHA-256 `9b2840cd65310802f9495c426ea8820ece4635d7f1ee503a3e055e30bfe2be24`, repository snapshot `Pending`); that line 5 of that file contains the quoted phrases; current vendor licenses; Google Docs or other external product behavior; any prior ChatGPT, Cursor, or Codex conversation. No other repository file was opened, and no code was executed.

## Findings

### FACT

The draft extraction `docs/research/R01-SRC001-USER-INTENT-EXTRACTION.md` (`e7ed49b94de6a9463efa8e327e90fc9f4a4e0064`, status `draft`, record id `VEL-RES-R01-SRC001-INTENT-001`) labels itself **source-derived candidates, not accepted product requirements**. It says the 28 rows were taken only from the `## User` passage of `AI Writing App Blueprint.md`, line 5, and that the snippets anchor points inside that long line. It says `INT-` IDs are extraction-local IDs, not reserved `VEL-REQ-` IDs. It says no assistant-written blueprint recommendation is promoted there as a user request, and that no architecture, editor engine, AI provider, hosting, database, directory tree, launch priority, or implementation date is selected by the extraction.

The four in-scope rows, as rendered:

| ID | Source-derived intent | Phrase attributed to SRC-001 line 5 | Theme |
|---|---|---|---|
| INT-09 | Conventional writing software remains useful independently of AI | “shouldn't lose the edge of normal writing software” | Editor-first value |
| INT-10 | Substantial rich-text formatting and editing comparable in kind to Google Docs | “for example Google Docs, you see they are formatting and editing” | Rich text requirements |
| INT-11 | Research a mature editor project rather than rebuilding the entire editing engine | “Research whatever open-source project allows us” | Build-vs-buy investigation |
| INT-12 | Check whether chosen editing technology is free for commercial use, with current licensing evidence | “should be free, for commercial use” | Licensing constraint |

Those phrases are first-pass extraction anchors. They are not independently verified original author wording. The source register (`376fb41a79de25115514ff7c18ea3f8cbccfdd27`, status `draft`) says SRC-001’s original full contents have not been committed, and that a hash and filename are an inventory record, not a retrieval link.

`docs/requirements/REQUIREMENTS.md` (`92cbed4f904606f46d20dac3d79457b9ba260e06`, status `draft`, record id `VEL-REQ-REGISTER-001`) is a seed, not an approved MVP. **VEL-REQ-002** is the single row **“Advanced conventional rich-text/manuscript editing,”** status **proposed**, source **SRC-001**. That register does not name INT-09, INT-10, INT-11, or INT-12. It says each future requirement still needs exact source passage references, verification, prioritization, and acceptance criteria.

The same extraction leaves these points open: Google Docs is a comparison and quality aspiration, not a defined control list; the open-source and commercial-use wording is a constraint to investigate, not approval of Tiptap, ProseMirror, Lexical, a specific license, or any stack; no MVP scope is approved.

Accepted constitution rules that apply here: preserve original sources and separate quotation, finding, inference, and proposal; AI recommendations do not become authoritative by being recorded; requirements need stable IDs and linked sources or explicit gaps; promotion happens only after verification and approval; remain vendor-neutral.

### INTERPRETATION

VEL-REQ-002 is a compact proposed seed that can be *associated with* this cluster. It is not a completed trace from those four extraction IDs, and it does not absorb them equally.

- **INT-10** is the closest content match. “Advanced … rich-text” echoes the Google Docs formatting-and-editing aspiration. The seed drops the comparator and does not record which formatting behaviors were meant.
- **INT-09** supports the word “conventional”: usefulness that does not depend on AI. The seed title does not state that independence.
- **INT-11** is a research direction about reusing a mature open-source editor. It is adjacent to how a later editor capability might be built. It is not itself the requirement “advanced manuscript editing,” and the extraction forbids reading it as an engine selection.
- **INT-12** is a licensing check on whatever technology is later chosen. VEL-REQ-002 does not state a commercial-use constraint.

The register’s own next step says a source-pass extraction should replace this compact seed. The draft extraction is that first pass, and it still calls for de-duplication, owner confirmation, and testable acceptance criteria before promotion. Linking INT-09–INT-12 to VEL-REQ-002 is therefore a candidate relationship inside draft records, not closed traceability and not an accepted requirement.

### PROPOSAL

Leave VEL-REQ-002 at **proposed**. Do not select an editor, license, or stack. If the owner later replaces the seed, keep four separate traces: non-AI editor value (INT-09), rich-text aspiration (INT-10), open-source engine research (INT-11), and commercial-use licensing evidence (INT-12). Cite the archived SRC-001 passage, not only the extraction table.

## Unknowns

- Whether line 5 of the unarchived blueprint actually contains those four phrases, and what the surrounding sentence says.
- Whether the rendered blobs match commit `d14261ce6bab2aea6550454f089c48859eb0a3ee`.
- Which concrete editing behaviors “Google Docs-like” and “the edge of normal writing software” include.
- Which open-source project, if any, satisfies INT-11 and INT-12. That check is out of scope until the original source is archived, and current vendor licenses were not reviewed.
- Owner confirmation, priority, and acceptance criteria for any of these items. None are recorded as accepted.

## Tests actually performed

Read `PROMPT.md` and the rendered pack `VEL-CP-0001.md`. Compared the four extraction rows with the VEL-REQ-002 seed row and with the recorded source statuses and SRC-001 gap.

No Git commands, blob retrieval, hash checks, code execution, editor evaluation, license lookup, or other repository files. No project files were changed.

## Recommended next action

Archive the original SRC-001 bytes, or store an immutable retrieval reference, then re-read the `## User` passage and confirm or correct the INT-09–INT-12 anchors before anyone proposes promoting VEL-REQ-002. Until that owner-approved promotion, the governing status remains: accepted constitution and source-of-truth documents stand; the extraction and the requirements seed stay draft; VEL-REQ-002 stays proposed.

**Pending owner approval:** archival of SRC-001, any change to accepted requirements or ADRs, and any merge.