---
id: VEL-RES-P01-ACCEL-CLOSEOUT-20261009-001
type: research-decision-brief
status: proposed-owner-review
created_at: 2026-10-09
updated_at: 2026-10-09
author: project-research
version: 0.1.0
sources:
  - "docs/plans/RESEARCH-PAIR-AND-PREIMPLEMENTATION-DESIGN-2026-10-09.md"
  - "docs/decisions/ADR-0007-immutable-compact-expanded-guidance-sources.md"
  - "docs/research/R01-CONFLICT-MAPPING-REVIEW-2026-10-09.md"
  - "docs/research/R01-PAIR-01-OWNER-RULE-PACK-2026-10-09.md"
  - "https://github.com/Ben-001-sys/Vellistry/pull/32"
related_research:
  - R01
  - R15
related_adrs:
  - ADR-0007
  - ADR-0006
---

# Pair 01 — Accelerated closeout and owner decision brief

**Scope:** Existing active research tracks only — R01 (immutable writing guidance) and R15/K2B (manuscript and session privacy). This is a consolidation of prior evidence and a minimal remaining test plan, **not** a third research track, an implementation change, a new owner decision, or an authorization to bypass research/design gates.

**Process authority:** [Two-at-a-time and design-first plan](../plans/RESEARCH-PAIR-AND-PREIMPLEMENTATION-DESIGN-2026-10-09.md). No new production features, merge or deployment before approved research and UI/UX design gates.

## 1. Facts already established — do not rerun without a specific defect

| Track | Evidence | Narrow claim permitted | Still not proved |
|---|---|---|---|
| R01 original source | Exact uploaded raw SHA-256 fda917550811ccf44fe2fa7993d14a0f4f64d6dde5299d0c5b078865c4f0f965; read-only source audit, R01 reports | 13 domains, 130 printed codes, 130 compact + 130 expanded headings, 260 distinct source identities, 13 differing headings | Full semantic equivalence, author-approved operational mapping or deployable frozen pack |
| R01 preservation | [ADR-0007](../decisions/ADR-0007-immutable-compact-expanded-guidance-sources.md) | Owner approved preserving both immutable source variants with composite source-hash/variant/code identity | Active defaults or conflict decisions |
| K2A identity isolation | [PR #29](https://github.com/Ben-001-sys/Vellistry/pull/29), local Supabase CI | 17/17 real local account/RLS groups passed | Overall production security |
| K2B local signout | [PR #32](https://github.com/Ben-001-sys/Vellistry/pull/32), [CI #37993494329](https://github.com/Ben-001-sys/Vellistry/actions/runs/37993494329) | Old signed-out Alice JWT still read **one Alice book** via direct PostgREST; Nest rejected with 401; Bob was isolated | Global immediate revocation, SSR refresh and browser/storage cleanup |
| K2B SQL grant boundary | [PR #32](https://github.com/Ben-001-sys/Vellistry/pull/32), [CI #37995206203](https://github.com/Ben-001-sys/Vellistry/actions/runs/37995206203) | Revoking direct chapter/revision SELECT denied direct reads without breaking Nest books; revoking all books grants also **broke current Nest** (500) | Working Nest-only design or safe production grant migration |

**Additional local read-only verification in the 2026-10-09 acceleration session:** the three original uploaded Markdown SHA-256 hashes matched the R01 source-integrity audit, including the Branch source hash above. No source content modified and no new runtime security tests claimed.

## 2. R01 — one batch decision rather than 130 ad hoc conversations

### Already approved
P1: preserve every compact and expanded record independently, without silently merging, renaming, overwriting or deleting either one. Keep author toggles separate from frozen source records. Never infer active meaning from a bare printed code.

### R01-D1 — Research direction APPROVED; final mapping NOT APPROVED
**Recommend a distinct-meaning, versioned mapping policy** that retains both immutable records and lets the owner select exactly which source-backed instructions form the operational defaults. In particular, AR-04 compact (moral complexity) vs expanded (motif evolution) and AR-09 compact (homogenization resistance) vs expanded (intentional omission/unresolved space) should be treated as **different possible creative controls**, not aliases. AR-02 and AR-06 also differ in emphasis.

The mapping policy should explicitly provide:
1. Stable independent identities using original-source SHA + compact/expanded + printed code.
2. A human-readable reviewed alias *separate* from each source identity; where two meanings are independently desired, issue distinct versioned operational aliases rather than quietly overriding one with the other.
3. A **single owner-reviewed batch mapping** for all 130 printed codes, with exceptional rows separately highlighted; approval metadata and source identifiers must be complete.
4. A source-body comparison before claiming equivalent operational meaning for the 117 title-matching pairs: title agreement alone is not body equivalence.
5. Fail-closed resolution when the selected active record, its owner approval, or its source hash is missing; the effective AI context must list the exact mapped variant IDs.

**Alternative for owner consideration:** choose compact-only or expanded-only active meanings in a fully explicit reviewed mapping, while preserving the other variant as an immutable archived record. This has less mapping complexity but risks excluding material creative controls. Neither variant wins automatically.

**Immediate deliverable after the owner chooses:** a versioned R01 mapping manifest, a source-faithful default-pack candidate, and tests asserting 260 preserved identities, correct variant resolution, zero ambiguous code fallbacks, disabled-rule exclusion, and reversible configuration. Current prototype taxonomy.json is **not** a certified pack and must not be promoted.

### R01 remaining acceptance gate
- Source pairs fully preserved with hashes/locations: **PASS for original structural audit; product integration not done**.
- Specific conflict meanings and whole-pack active mapping: **OWNER DECISION NEEDED**.
- Frozen operational pack + effective-instruction tests: **NOT RUN / BLOCKED ON MAPPING**.

## 3. R15/K2B — choose the security contract, then run only its missing tests

### Measured risk
A previously issued valid JWT retained access to its owner's book through direct PostgREST after local signout. This is **same-author revoked-session residual access**, not observed cross-author leakage. Nest's fresh Auth check denied the request. Blind SQL revocation breaks the current Nest books route and must **not** be used as a production patch.

### K2B-D1 — Research/testing direction APPROVED; final security policy NOT APPROVED
**Recommend evaluating S3 (server-mediated access to private manuscript tables through Nest) together with a high-sensitivity active-session check (S2 semantics) on manuscript reads/writes.** This is a security target, not evidence of a working implementation.

Target user promise, subject to test: signout revokes access to unpublished manuscript content across **all** supported paths, including stale browser tokens. That requires server-only, least-privilege database transport with audited author scoping, and removal of any direct author Data API path to private manuscript rows. Storage permissions, export and cached/local copies remain separate boundaries.

**Lower-complexity alternative S1:** short, disclosed JWT validity window and clear local signout with refresh-token revocation; accepted old access tokens may work until expiration. This is a product/security tradeoff requiring explicit owner approval. Do not promise immediate revocation if S1 is selected.

**Blocking integration issue:** Nest currently uses bearer-scoped PostgREST for books. Changing grants without first introducing and proving a trusted restricted server database route yields HTTP 500. Research-only SQL revocations from PR #32 must not be copied to production.

### Minimum missing verification matrix (synthetic accounts, no paid service)

| ID | Required experiment | Pass evidence |
|---|---|---|
| K2B-SSR | Real Next.js 16 Proxy / SSR cookie-refresh lifecycle, expiring credentials, request/response cookie sync, multiple tabs | Valid refresh works; revoked or invalid session fails safely; no authenticated HTML cached for another author |
| K2B-PRIVATE | Restricted Nest server transport + private manuscript grants, before/after direct Data API probes | Authorized book/chapter API works; direct PostgREST manuscript reads denied; zero cross-author access, no service-role browser secret, and no SQL context leakage |
| K2B-REVOKE | After logout use the **old JWT** on every supported content path; also check second legitimate session and expiry | Results match explicitly approved S1 or S2/S3 contract, not an assumed universal 401 |
| K2B-STORAGE | Author-private objects under real local Storage RLS (if MVP uses Storage); downloaded URLs and revocation behavior | Bob cannot read Alice files; old session behaves per contract; no public-leak URL |
| K2B-CLIENT | Real browser account switch, logout, IndexedDB/draft isolation, interrupted-save recovery | No Alice content displayed or submitted in Bob session; unsynced work is preserved/recovered through a documented safe policy |
| K2B-BOUNDARY | CSRF, cookie attributes, SSR cache, backup/restore, account deletion and retention | Written threat-case assertions plus runtime checks for relevant content paths; limitations explicitly documented |

**Do not merge a security architecture based only on S3 being preferable in theory.** Actual tests against integrated Nest/Supabase are mandatory. Existing K2A/K2B CI stays as reusable regression evidence.

## 4. Pair 01 closure rule

Close this pair only when (a) R01 active mapping is **explicitly owner-approved** and source-pack tests are verified, and (b) the chosen session/data-access contract has measured pass/fail results for the MVP-relevant cases above, documented risks, and required owner decisions. Genuine unresolved hazards must be fixed or explicitly waived with rationale; merely passing a build does not close a research gate.

After Pair 01, start Pair 02 under the same two-track limit. Requirements and UI flow observations can be organized from existing evidence now, but dedicated Figma/Lovable design and new feature implementation still follow the approved research-and-design sequence.

## 5. Immediate owner choices — concise

- **R01-D1:** Prefer the recommended distinct-meaning/versioned mapping policy, or explicitly choose a compact-first or expanded-first operational mapping. **Preservation P1 is already approved and is not being reopened.**
- **K2B-D1:** Prefer tested strict post-logout manuscript denial via Nest-only private access and session checks, or permit bounded old-JWT validity (S1) with explicit disclosure.

**Owner approval of the two research directions is recorded below.** Final guidance mappings, actual server security architecture, migrations and deployment remain unapproved. No deployments, paid services, model calls, or manuscript content transfers are authorized by this brief.


## 6. Owner-approved accelerated research directions — 2026-10-09

Owner explicitly instructed (direct Fiction Writing Project conversation, permalink not archived): "For Vellistry Research Pair 1: R01 direction: Approve developing the distinct-meaning, versioned mapping proposal, with final active mappings reserved for separate owner approval. Security direction: Approve researching and testing strict logout protection with Nest-only private manuscript access and session validation, without authorizing deployment. Continue the approved research only, in the existing repository."

**Scope of this approval:** Proceed with an R01 proposal/review tool and bounded K2B security design/experiments on a research branch. Not authorization to activate even one final mapping, approve a production security architecture, change production DB grants, merge application code, or deploy.

Research deliverables:
- [Metadata-only R01 review generator](../../scripts/r01_review_packet.py), with [synthetic mapping boundary tests](../../tests/test_r01_review_packet.py). It parses the original privately held source via the established R01 manifest audit and emits 130 unresolved decisions, preserving 260 independently identified source records. The local raw-source run and seven unit tests passed; the original source text and generated review packet are **not committed**.
- [K2B strict-logout live-test contract](K2B-STRICT-LOGOUT-RESEARCH-CONTRACT-2026-10-09.md). This documents a staged test plan and measured baseline, not a completed Nest-only implementation or passing new runtime test.

Parallel comparison work in another conversation/branch is independent; do not import its conclusions without reviewing the actual evidence and any owner decisions.
