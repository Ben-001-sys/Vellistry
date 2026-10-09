---
id: VEL-RES-R01-20261009-001
type: source-integrity-audit
status: verified-source-structure-packaging-unresolved
created_at: 2026-10-09
updated_at: 2026-10-09
author: project-research
version: 0.1.0
sources:
  - "SRC-001 — AI Writing App Blueprint.md, directly uploaded local copy"
  - "SRC-002 — Research AI Writing Problems.md, directly uploaded local copy"
  - "SRC-003 — Branch · Research AI Writing Problems.md, directly uploaded local copy"
  - "chatgpt-exported-chats-md-3.zip, directly uploaded local archive"
  - "docs/requirements/PRODUCT-DIRECTION-FROZEN-DEFAULT-GUIDANCE-2026-10-08.md"
related_research:
  - R01
  - R04
  - R06
related_requirements:
  - VEL-REQ-001
  - VEL-REQ-006
---

# R01 — Source integrity, taxonomy heading audit and unresolved variants

**Evidence date:** 2026-10-09. **Status:** SOURCE HASH AND STRUCTURE VERIFIED from uploaded local files; **the authoritative installable default-rule package is NOT certified or approved**. The original source Markdown and ZIP were read **without altering bytes**. This analysis does not rewrite, merge, rename, assign priority to, or canonize any fiction lens.

## 1. Verified local source fingerprints (SHA-256 of complete raw files)

| Source / file | Bytes | SHA-256 | Relationship |
|---|---:|---|---|
| `AI Writing App Blueprint.md` | 30,455 | `9b2840cd65310802f9495c426ea8820ece4635d7f1ee503a3e055e30bfe2be24` | SRC-001 copy |
| `Research AI Writing Problems.md` | 65,926 | `f011fd1e65de076f5f35bda18625dced3627a26968a3a48c9d05700d46355aeb` | SRC-002 copy |
| `Branch · Research AI Writing Problems.md` | 986,553 | `fda917550811ccf44fe2fa7993d14a0f4f64d6dde5299d0c5b078865c4f0f965` | SRC-003 historical expanded/conversation research |
| `chatgpt-exported-chats-md-3.zip` | 351,996 | `7832d584f62e0c159e38d9d85f9da9bb84f721b74404091482dd217fc12af65b` | ZIP includes exactly these 3 named Markdown records |

**Verification performed:** A byte comparison between each ZIP member and its standalone Markdown copy was **TRUE for all 3 members**; the ZIP-member SHA-256 matched the standalone file. Additionally, the three automatically mounted alternate copies `AI Writing App Blueprint(1).md`, `(2).md`, `(3).md` had the same SHA-256 as `AI Writing App Blueprint.md`; they are duplicate mounts, not new source versions. The SRC-003 fingerprint matches the one previously recorded in the frozen-default owner-direction file, validating *identity of this uploaded export*, not the authority of any particular internal taxonomy variant.

**Evidence limits:** The external archive, original timestamps, preceding research conversations and the separate historical **20-section/42-requirement** artifact have **not** independently been recovered from their original origin. Existence of a matching uploaded ZIP is not Git archival of all raw source bytes. Do not imply that an immutable repo archive or a certified rule-pack release already exists. The original files remain user-provided source materials; only fingerprints and selected heading comparisons are copied into this report.

## 2. Exact short and expanded entry counts

Using strict original heading matching for `### XX-## — Title` in the compact taxonomy and `# XX-## — Title` or `## XX-## — Title` in the detailed expansion, the uploaded SRC-003 contains:

- **Compact taxonomy:** 130 ID-tagged headings: **10 entries each** for NI, PR, DS, EM, DG, CH, PV, RS, SC, PC, PL, CT, AR.
- **Detailed expansion:** 130 matching ID-tagged headings: **10 entries each** for the same 13 domains.
- **ID coverage:** All 130 compact codes have a corresponding expanded code; no short-only or expanded-only codes when heading levels are parsed appropriately (NI expanded sections use `##` while the other expanded domains use `#`).
- **Title comparison:** 117/130 headings have exactly matching case-insensitive title strings. **13** have different strings: **10 AR** entries, plus **DS-09**, **PV-05**, and **PV-10**.
- DS-09 differs by source-title lettercase only in part and is not necessarily a meaning change; PV-05 uses hyphen/en-dash style; PV-10 and all ten AR titles need careful author/source interpretation. A textual difference is **not proof of incompatible creative meaning**.

**Caution on regex:** A parser looking only for `# XX-##` would misleadingly report **120**, because NI expanded uses `##`. This report explicitly corrected that parser coverage before stating the verified 130/130 structural result.

## 3. AR variant comparison — preserve both labels verbatim

| ID | Compact taxonomy title and original line | Detailed expansion title and original line | Status |
|---|---|---|---|
| AR-01 | `Emergent theme` — L2326 | `THEME THROUGH EMBODIMENT` — L18179 | Different wording; no selection |
| AR-02 | `Thematic restraint` — L2329 | `THEMATIC MULTIPLICITY` — L18289 | Different wording; no selection |
| AR-03 | `Symbolic accumulation` — L2332 | `SYMBOLIC RESTRAINT` — L18373 | Different wording; no selection |
| AR-04 | `Moral complexity` — L2335 | `MOTIF EVOLUTION` — L18455 | Different wording; no selection |
| AR-05 | `Genre intelligence` — L2338 | `GENRE-PROMISE AWARENESS` — L18539 | Different wording; no selection |
| AR-06 | `Work-specific obsessions` — L2341 | `CONVENTION WITH SPECIFICITY` — L18630 | Different wording; no selection |
| AR-07 | `Authorial attention` — L2344 | `AESTHETIC COHERENCE` — L18718 | Different wording; no selection |
| AR-08 | `Productive eccentricity` — L2347 | `IDIOSYNCRASY PRESERVATION` — L18821 | Different wording; no selection |
| AR-09 | `Homogenization resistance` — L2350 | `INTENTIONAL OMISSION & UNRESOLVED SPACE` — L18915 | Different wording; no selection |
| AR-10 | `Artistic coherence` — L2353 | `WORK-SPECIFIC ARTISTIC IDENTITY` — L19008 | Different wording; no selection |

The AR short headings are in the compact taxonomy immediately after the `# DOMAIN 13 — THEME, SYMBOLISM, GENRE & ARTISTIC IDENTITY` marker. The expanded titles are in a later domain-expansion section of the **same exported conversation**. Their exact identity-code reuse means an `AR-05` toggle or saved rule ID could ambiguously refer to two different historical descriptions if version/source is not part of identity. This is a **data and UX compatibility risk**, not a mandate to override one source with the other.

### Other three divergent titles

| ID | Compact title / line | Expanded title / line | Initial review |
|---|---|---|---|
| DS-09 | `Generic-body-language awareness` — L2010 | `GENERIC BODY-LANGUAGE AWARENESS` — L5076 | Lettercase, not proven conceptual conflict |
| PV-05 | `Narrator-character separation` — L2134 | `NARRATOR–CHARACTER SEPARATION` — L10086 | Punctuation/hyphen vs en dash |
| PV-10 | `Metafictional leakage awareness` — L2149 | `METAFICTIONAL KNOWLEDGE LEAKAGE` — L10482 | Wording change potentially semantically relevant; requires content-based comparison |

## 4. Non-destructive packaging alternatives for owner review

**Option P1 — Dual source-namespace / full provenance (strongest preservation, proposed).**
Keep the 130 compact titles and 130 expanded entries as **distinct immutable source records** (for example `short:AR-05` and `expanded:AR-05`, each with original file fingerprint and source line range). Present ambiguities to the owner and only publish a resolved **user-facing rule ID** when they approve its default source/meaning. Benefits: never silently rewrites archive; costs: a conflict-aware UI and explicit rule-source version mapping.

**Option P2 — Expanded as operational text, compact as original descriptive index (requires approval).**
Use the expanded 130 bodies to operate guidance and expose compact titles as historical index; show mismatch warnings and preserve dual identity/version. Benefits: developed operational instructions; risks: could misrepresent a mismatched AR title as referring to the expanded semantic content. **Do not select this automatically.**

**Option P3 — Compact as operational minimum, expansion optional annex (requires approval).**
Treat concise compact list as active default titles; expanded bodies visible only as a separate historical reference where inconsistent. Benefits: human-readable default list; risks: loses the depth that the user wanted from the expanded guidance. **Do not select this automatically.**

**Option P4 — Defer ambiguous rule activation until owner review; enable verified noncolliding rules only (requires approval if represented as the genuine full default).**
This preserves sources and avoids pretending that an uncertain mapping is settled, but may conflict with the owner's requirement that the full original default system be initially enabled. **Do not silently roll out a partial default under the “complete original guidance” label.**

**No option approved** in this research turn. The owner's earlier instruction is specifically to freeze all historical guidance and not silently reconcile conflicting AR variants.

## 5. Recommended source-inventory data contract to test, not a production schema

For each original rule/lens reference:
- `source_file_sha256`; `source_member` (where archived); `variant` (`compact` or `expanded`);
- original `code`, `raw_title`, `line_start`, `line_end`, `verbatim_text_hash`;
- `packaging_decision_id`, `display_label`, `enabled_default`, `conflict_group`;
- immutable original source separately from each author's mutable active rule configuration.

Use a composite identity **source + variant + code**, not just `AR-05`, until an owner-approved mapping is established. That prevents silent collisions when rule toggles, snapshots and generated-request provenance reference the same printed code.

## 6. Verified now versus still blocked

| Question | Status | Actual evidence or blocker |
|---|---|---|
| Do standalone source files match ZIP members? | **VERIFIED** | Byte-for-byte equality, complete SHA-256 hashes above |
| Can 13×10 compact and expanded IDs be counted? | **VERIFIED** | 130/130 ID coverage with NI `##` heading normalization |
| Are AR headings consistent across forms? | **NO** | 10/10 AR titles differ |
| Can we safely claim all 130 default rules can already be installed as one consistent pack? | **NO** | Need owner-approved packaging/version mapping and body equivalence/meaning checks |
| Does uploaded archive prove lost 42-requirement artifact? | **NO** | That separately referenced artifact remains unrecovered |
| Are source bytes already immutably archived into Git main? | **NOT VERIFIED** | This report preserves fingerprints, not all source bytes |
| Have we modified any original creative text? | **NO** | Only read original uploaded files; report contains heading excerpts as evidence |
| Has the owner selected P1/P2/P3/P4? | **NO** | Explicit approval still required |

## Next bounded research

1. **Archive the raw source files** to an owner-reviewed private/appropriate immutable location with hash verification and ensure no personal secrets/user-private records are inadvertently published. An archive migration is distinct from this read-only verification.
2. **Compare actual body content** for all 13 title mismatches and record exact semantic differences without overwriting either form; source headings alone cannot determine compatibility.
3. Prepare a short owner decision with side-by-side sample AR titles and P1/P2/P3/P4; do **not** use a title-normalization script to erase distinctions.
4. Only after accepted packaging, create immutable effective-rule IDs/configuration and run R06 enabled/disabled tests with the *actual* preserved pack.

**Conclusion:** The source identity and 130/130 structure are now verified from the uploaded data. **The deployable default pack is still blocked** by unresolved packaging authority and meaning, not by the absence of a 130-lens list.
