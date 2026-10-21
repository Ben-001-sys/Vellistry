---
id: VEL-SRC-REGISTER-001
type: source-register
status: draft
created_at: 2026-10-08
updated_at: 2026-10-20
version: 0.1.1
---

# Research Source Register

Historical initialization recorded these four attachments and their SHA-256 hashes on 2026-10-08. Task0038 now preserves the exact original transport ZIP containing SRC-001, SRC-002 and SRC-003 at source commit `8858c6cecff58ff515b3572110e1656d474c641e`. Each member matches its historical fingerprint and the separately recovered export. SRC-004 remains unavailable in the bounded search described below. Earlier reports and ContextPacks correctly retain their historical missing-archive statements; they are not rewritten. Archival proves byte identity, not factual accuracy, current external citations or approval of research proposals.

| ID | Exact uploaded filename | SHA-256 | Initial classification | Repository snapshot |
|---|---|---|---|---|
| SRC-001 | `AI Writing App Blueprint.md` | `9b2840cd65310802f9495c426ea8820ece4635d7f1ee503a3e055e30bfe2be24` | Product concept, research and technology candidates | [Exact original ZIP](../agent-workflow/inputs/VEL-TASK-0038/original-research-export.zip); [member manifest](../agent-workflow/inputs/VEL-TASK-0038/SOURCE-MANIFEST.json) |
| SRC-002 | `Research AI Writing Problems.md` | `f011fd1e65de076f5f35bda18625dced3627a26968a3a48c9d05700d46355aeb` | Community/problem research | [Exact original ZIP](../agent-workflow/inputs/VEL-TASK-0038/original-research-export.zip); [member manifest](../agent-workflow/inputs/VEL-TASK-0038/SOURCE-MANIFEST.json) |
| SRC-003 | `Branch · Research AI Writing Problems.md` | `fda917550811ccf44fe2fa7993d14a0f4f64d6dde5299d0c5b078865c4f0f965` | Expanded research, writing guidance, taxonomy | [Exact original ZIP](../agent-workflow/inputs/VEL-TASK-0038/original-research-export.zip); [member manifest](../agent-workflow/inputs/VEL-TASK-0038/SOURCE-MANIFEST.json) |
| SRC-004 | `Getting Better With Agentic Coding - Copy.zip` | `ff1c2bd398833fd4d1a4b8b05440589ce8d941a224cea3b05bf302b9293a03b8` | Agentic-coding governance and workflow research | Original ZIP missing; historical fingerprint retained |

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

## Current archival evidence and limits

The original `chatgpt-exported-chats-md-3.zip` is 351,996 bytes, SHA-256 `7832d584f62e0c159e38d9d85f9da9bb84f721b74404091482dd217fc12af65b`. It contains exactly the three named Markdown members, with no content normalization or reconstruction. It is a transport grouping, not a new research source. Source framing and authorship inside the originals remain intact.

SRC-004 was not found by a recursive filename search of the authorized Downloads location or member-name inspection of the four relevant export/document ZIPs recorded in [the search gap](../agent-workflow/inputs/VEL-TASK-0038/SOURCE-GAPS.md). This bounded search does not establish universal absence. Recover the exact original 176,660-byte ZIP matching the recorded hash before closing this gap; do not substitute a related export or reconstructed ZIP.

The offline verifier and its actual tests are reported in VEL-EB-0038. A separate fresh implementation handoff is limited to this verifier and does not establish the historical Issue18 LevelB evaluation or general agent reliability.

## Outstanding archival work
- Recover and preserve exact SRC-004 through an authorized source; no private manuscripts or credentials belong in this archive.
- Keep historical reports and source fingerprints; three recovered sources do not make the four-source migration complete.
- Assign section/line citations to individual requirements and decisions.
- Review prior external web links from research before treating them as current verified evidence.
