---
id: VEL-PLAN-04-TEST-SECURITY-20261011-001
title: PLAN-04 — integrated testing, threat model, data recovery and release-risk strategy
type: proposed-validation-and-security-contract
status: proposed-planning-only
created_at: 2026-10-11
updated_at: 2026-10-11
owner: project_owner
version: 0.1.0
sources:
  - docs/requirements/MVP-USER-JOURNEYS-AND-ACCEPTANCE-2026-10-09.md
  - docs/specs/VEL-SPEC-001-CHAPTER-SAVE-CONTRACT.md
  - docs/research/K2B-SESSION-AND-MANUSCRIPT-EXPOSURE-2026-10-09.md
  - docs/research/OPTION-B-WAVE03-R15-K2B-MANUSCRIPT-PRIVACY-2026-10-10.md
  - docs/research/OPTION-B-WAVE06-R18-RELIABILITY-RECOVERY-2026-10-10.md
  - docs/research/OPTION-B-WAVE02-R11-DOCX-AND-PORTABLE-RESTORE-2026-10-10.md
  - docs/research/OPTION-B-WAVE04-R08-R21-PROVIDER-PRIVACY-COST-2026-10-10.md
  - docs/plans/VEL-PLAN-02-ARCHITECTURE-DATA-CONTRACTS-2026-10-11.md
---

# PLAN-04 — Test, security, reliability, backup, privacy and release evidence

## 1. What is a test and what is only evidence planning?

All `ACC-M1-01..M8-05`, `NEG-01..` and JRN-001..011 have their status **NOT_RUN for the future integrated MVP unless current exact application execution proves otherwise**. Repo historical research/CI reports document their original code SHA and bounded fixture, not a current production/security PASS. The Make owner's live walkthrough is externally reported synthetic test evidence; Lovable findings were code-inspected, not live functional tests. This PLAN-04 creates no CI run and no real data/pilot authorization.

**Evidence tiers:**
- `DOC_SPEC`: accepted/proposed written expectation, no execution.
- `STATIC_SOURCE`: inspected committed source with exact SHA; code presence != behavior.
- `SYNTHETIC_RESEARCH`: bounded prior test of isolated algorithm/fixture; never promote as application PASS.
- `LOCAL_INTEGRATION`: actual signed-in disposable Supabase/Postgres + Nest/Next interactions at exact commit.
- `BROWSER_E2E`: actual browser actions on built app, with source code/revision/browser identified.
- `AT_HUMAN`: genuine keyboard/IME/screen reader and consenting author observations (include platform, no invented participants).
- `PILOT_OPERATIONS`: protected private deployment, isolated real-author consent, clean restore and incident verification.
Use `PASS`, `FAIL`, `BLOCKED`, `NOT_RUN` per case. Record exact command, exit/result, fixtures, actor, environment, SHA, and reproducible expected/actual.

## 2. Cross-layer test levels and future commands

| Layer | Planned tests | Primary owners | Scope/limits |
|---|---|---|---|
| Unit/contract | validator/owner bounds, Tiptap serialization/marks, state machines, rule selector, story-time resolution, import conversion, consent/selection and idempotency | Cursor feature slice | pure fixtures, no backend PASS |
| API/contract | Next BFF 401/503, Nest Auth/RLS, input schemas, 400/409/404/429 mappings, authorization probes, error redaction | feature backend PR | real signed in local disposable Auth when required |
| DB/integration | Auth/DB/Storage as applicable, Alice/Bob cross-owner, SQL transactional CAS, concurrent save, retry/revision receipts, source provenance, backup manifest/restore | data/integration PR | live disposable local Supabase; no production services |
| Browser E2E | Library, chapter changes, manual Tiptap editing, offline/reopen, session switch, fact review, Rule toggle, AI proposal lifecycle, export/delete confirmation | each UI PR and VAL-001 | Chromium first, explicit other agreed browsers later |
| Adversarial/security | direct PostgREST with logged-out still-valid JWT, guessed nested IDs, BFF cache/session, stolen link, payload/ZIP, provider prompt injection | security review | no real unpublished manuscripts |
| Accessibility/human | keyboard-only, focus, screen reader, IME composition, RTL, narrow/mobile/tablet, consenting story task studies | validation stage | automated axe-type tools are not a substitute for actual AT |
| Recovery/ops | lost ACK, two tabs, local draft, DB/Storage/Auth clean restore, migration rollback, incident drill | validation/pilot | exact synthetic fixture and actual restoration proof |

Before running future commands, inspect root `package.json`: presently `pnpm check`, `pnpm build`, `pnpm dev:web`, `pnpm dev:api` and Supabase CLI scripts exist, **but a root `pnpm test` command is not declared**. Feature PRs must explicitly create/invoke focused tests without fabricating a nonexistent root runner. Destructive `pnpm supabase:reset` requires a verified disposable DB and separate owner permission. Existing Docker/port status is NOT CHECKED in the planning phase.

## 3. Threat model and per-feature safeguards

| ID | Threat / observed source basis | Required control / future negative test | Gate |
|---|---|---|---|
| SEC-01 | **Known** signed-out, unexpired JWT may still read private books via direct PostgREST despite client sign-out | Test old token direct PostgREST after local/global sign-out, blocked/restricted sensitive routes or honest TTL policy; explicit owner security decision, no false immediate revocation | Critical before private manuscripts |
| SEC-02 | UI state of Writer A displayed under Writer B in synthetic Make profiles/facts; current library client can retain prior results on errors | Partition/clear client caches and late promises on identity change; A→B→A across books, profiles, facts, rules, proposals, local drafts | IMP-001 and each new feature |
| SEC-03 | Guessed book/chapter/profile/fact/revision IDs | Nest owner & book check plus direct PostgREST/Storage policy; no unauthorized data leak on 404/403 | Every data PR |
| SEC-04 | Service-role used for normal author requests | Keep author JWT and RLS for routine author query; privileged operations only explicitly constrained and never browser-exposed | Every DB/API PR |
| SEC-05 | SSR cookie/session mismatch or caching | Verify `getUser`, refresh/cookie behavior, no-store private responses, CSRF, tab switching and prefetch under two accounts | IMP-001 and pilot |
| SEC-06 | BYOK key, manuscript prose or prompt logged/exported | session-only masked key; no URL/localStorage/DB/backups/analytics; scrub request/exception logs; transport TLS | IMP-007 + pilot |
| SEC-07 | External model receives more content than author approved | exact preview of excerpt, approved book canon, relevant enabled rules; explicit recipient/route/cost consent; no default provider or hidden fallback | IMP-007 |
| SEC-08 | Imported malicious DOCX, HTML, source prompt injection or ZIP traversal | parse bounded supported subset, sanitization/size/path checks, original preservation, treat prose and extraction as *data* not developer instructions | IMP-004/007 |
| SEC-09 | Stale generation overwrites manual edit or shifts range | server CAS + exact revision/range/source anchor; reject stale, cross-paragraph, orphan `-1`, wrong book/persona | IMP-007/008 |
| SEC-10 | Author-approved canon silently mutated from generated text | independent fact review, exact quote, separate source/decision, story-time; source-reversal state after Undo | IMP-005/008 |
| SEC-11 | False Saved or accidental loss under network interruption | immutable server receipts and idempotency, uncertainty after lost ACK, local candidate recovery and compare/keep-both | IMP-003b |
| SEC-12 | Export/backups/deletion leaks or retains content secretly | scoped manifest and clean restore, private Storage links/expiry, tested deletion with honest backup retention | IMP-004 + pilot |
| SEC-13 | Unsafe retry generates duplicate provider charges or unlimited server proxy | bounded rate/usage gate, recipient/cost display, no auto-retry, explicit failure state | IMP-007 |
| SEC-14 | Accessible UI mislabels status or loses keyboard focus | real keyboard, AT, IME and viewport checks for writing, save, fact review, rules, consent, export and error states | Each UI slice + VAL-001 |

**The signed-out JWT issue is a prior bounded local research finding, not invented by this planning document, and not production penetration-test evidence.** Current architecture has both Nest bearer checks and direct PostgREST access path; risk must be evaluated at the correct boundary rather than assuming Nest guard solves direct grants.

## 4. Durable manuscript loss/recovery matrix

| Scenario | Expected observable behavior | Future evidence |
|---|---|---|
| Commit acknowledged | Saved only after committed revision id/hash returned and reopen matches | DB transaction + browser reopen |
| Save request fails before commit | Dirty/local candidate retained, explicit retry/error, no new accepted revision | injected transport failure |
| Server commits but ACK is dropped | UI shows UNKNOWN (not failed/not saved); retry/idempotency/receipt lookup detects actual accepted revision | controllable proxy failure |
| Two tabs edit same base revision | exactly one winning CAS, other visible conflict/compare; never silently overwrite | two real browser tabs + DB records |
| Duplicate idempotency key | identical replay returns original receipt; different payload same key rejects | SQL/API repeat tests |
| App reload/offline | local candidate reappears for correct account/book/chapter; user compares to server | browser reload, offline devtools |
| Navigation while dirty | no implicit discard; draft/recovery choice | click chapter and route away |
| Account change on shared device | local draft retention/deletion policy applied visibly; no foreign user draft shown | A→B→A fixture |
| Undo accepted AI then later human edit | refuse destructive undo or show reconciliation; no later prose loss | CAS+history test |
| Full project restore | Auth+DB+Storage references and source/profile/rule state reconstructed within declared scope | isolated clean restore exercise |

“Zero known data loss” means **no failure in actually executed defined cases**; it is not a guarantee that no bug can ever exist.

## 5. Portability and provider-risk acceptance

**DOCX/TXT:** research found a real Calibre DOCX→EPUB→DOCX round trip lost Heading styles (0 of 3 survived) despite preserving text. A separate bounded direct-semantic-DOCX research path preserved tested headings/marks but was *not integrated*. Select supported feature matrix (paragraphs, Heading1–3, bold/italic/strikethrough, basic lists, Unicode, empty paragraphs as negotiated); characterize Word metadata, comments, tables, page layout and RTL as unsupported or further-tested—not falsely guaranteed. Import non-destructively with visible loss report before commit.

**Backup:** a saved exported archive is **not** a demonstrated backup until clean restore. Versioned manifest should declare included accepted revisions/chapters, manual approved Story Profiles, rule preferences/author-created rules, schema version, hashes, storage/linked objects and excluded secrets. Test corruption/tampering, too-large ZIP, collision, foreign ownership and clean account reconstruction. Deletion/retention must account for local drafts, provider records, exported copies, backups and Storage links. A clean Auth+DB+Storage *operational* restore is distinct from author book ZIP restore; both must be tested before pilot.

**Provider:** selected OpenRouter-first user BYOK free or paid does **not** mean every downstream route has the same retention/terms/cost/region. Prior policy review was 2026-10-10; re-verify actual route, model availability, ZDR/logging policy, rights, Ghana account, cost limits before enabling real inference. No real manuscript or paid inference authorized in planning. If privacy policy cannot be met, keep provider route disabled without affecting manual writing.

## 6. Privacy, legal and author validation gates

Proposed stages:
- **Local feature PR:** synthetic fixtures only, exact unit/integration/browser tests for included functionality and negative owner cases.
- **Integrated internal candidate:** all M1–M8 and JRN-001..011 runnable; unresolved critical issues logged; full restore and no false save/canon/instruction leak.
- **G_PRIVATE_PILOT:** verified private-path auth/session/Storage exposure, real key/provider terms, author consent and privacy notice, retention/deletion and clean operational restore, reasonable rollback/incident runbook. Explicit owner gate.
- **Pilot evidence:** consenting real fiction authors perform meaningful writing/edit/canon/rules/export tasks in protected environment; observe actual confusion/failures; no invented participants, sample sizes, benchmark scores or unapproved target numbers.
- **G_RELEASE:** resolved critical privacy/data-loss/false-save/auto-canon defects, actual JRN passes, accessibility and author evidence, managed hosting/security/legal/backup operations, explicit owner approval.

## 7. Planning quality exits

- [x] Threat ledger including direct-PostgREST and key/source leak paths.
- [x] Real/no-run evidence taxonomy and source-specific test levels.
- [x] Recovery/lost ACK/two-tab, author-account, provenance and rule selector negative matrices.
- [x] DOCX/backup/privacy/provider gate and user validation expectations.
- [ ] Actual integrated tests: NOT_RUN (not permitted while planning).
- [ ] Provider contract/legal/security decisions: still pending, intentionally assigned to relevant slice/pilot.
- [ ] Real manuscript trial: NOT AUTHORIZED.

PLAN-04 is **planning-complete as a proposed test/security blueprint**, not security certification, privacy-law legal advice or owner acceptance of all policy trade-offs.
