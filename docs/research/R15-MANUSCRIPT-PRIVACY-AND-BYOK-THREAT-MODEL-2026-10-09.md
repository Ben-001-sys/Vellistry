---
id: VEL-RES-R15-20261009-001
type: security-research-threat-model
status: preliminary-controls-proposed-not-implemented
created_at: 2026-10-09
updated_at: 2026-10-09
author: project-research
version: 0.1.0
sources:
  - "docs/requirements/MVP-SCOPE-DECISION-2026-10-09.md — owner-approved eight-area MVP (PR #10)"
  - "docs/requirements/MVP-USER-JOURNEYS-AND-ACCEPTANCE-2026-10-09.md (PR #11)"
  - "OWASP ASVS v5.0.0 — https://github.com/OWASP/ASVS/blob/master/5.0/en/0x22-V13-Configuration.md"
  - "OWASP ASVS v5.0.0 — https://github.com/OWASP/ASVS/blob/master/5.0/docs_en/OWASP_Application_Security_Verification_Standard_5.0.0_en.xml"
  - "OWASP Authorization Cheat Sheet — https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html"
  - "OWASP Secrets Management Cheat Sheet — https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html"
  - "OWASP LLM Top 10 for 2025 — https://genai.owasp.org/llm-top-10/"
related_research:
  - R08
  - R10
  - R11
  - R14
  - R15
  - R18
  - R19
related_requirements:
  - VEL-PRODUCT-SCOPE-20261009-001
  - VEL-MVP-ACCEPTANCE-20261009-001
---

# R15 — Preliminary threat model for private fiction manuscripts and optional BYOK

**Status: THREAT MODEL AND EVIDENCE CHECKLIST; NO APP OR SECURITY CONTROL IMPLEMENTED OR PENETRATION-TESTED.**

The accepted product target includes private author accounts, unpublished manuscripts, chapter history, Story Bible facts and editable live profiles, frozen/default and custom writing rules, portable exports, and **optional provider API keys**. These data types carry distinct confidentiality, integrity and availability risks. This research identifies protection requirements **without** selecting an authentication vendor, encryption provider, data store, CDN, job runner, database, LLM host or regulatory compliance regime.

## Primary authority and research limits

**External industry guidance (current, vendor-neutral):**
- [OWASP ASVS 5.0 configuration controls](https://github.com/OWASP/ASVS/blob/master/5.0/en/0x22-V13-Configuration.md) address secure backend communication, secret management (V13.3), least privilege, and information leakage. The broader ASVS 5.0 source defines data protection controls, including V14.1–V14.2.
- [OWASP Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html) requires **deny-by-default** and checking permissions **for every request**, not only when a book is first opened. Random object IDs do not replace authorization.
- [OWASP Secrets Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html) describes centralized secret protection, least privilege, rotation/revocation, and avoiding logging plaintext credentials.
- [OWASP LLM Top 10:2025](https://genai.owasp.org/llm-top-10/) documents prompt injection, sensitive information disclosure, improper output handling, excessive agency, and unbounded consumption among relevant AI-app risks.

**What these sources do NOT decide:** Whether Vellistry must use PostgreSQL RLS, Keycloak, Next.js, any hosted KMS/auth provider, end-to-end encryption, private on-device LLMs, or one specific provider's data handling. Those depend on architecture, budget, provider terms and user consent. This document is **not a legal compliance certification**, nor a general OWASP security audit of a deployed system.

## 1. Protected assets and owners

| Asset | Value / data classification proposal | Appropriate authorized action | Important restriction |
|---|---|---|---|
| Account credentials / sessions | Authentication secrets | Authenticate account | Never store plaintext passwords or expose usable sessions to other authors |
| User-owned unpublished manuscripts and chapter versions | **High confidentiality, high integrity** | User-authorized read/write, private backups and export | Never query another author's book by guessed ID; no analytics/prose logging without explicit scope |
| Story Bible/character identities, storylines, time-scoped canon | **High integrity, private** | Author edit and explicit profile approval | Unaccepted AI draft/inference is not canon |
| Frozen default creative source package | Shared immutable product-source reference | Controlled release/version use | Do not rewrite or silently resolve source collisions; not a user's mutable setting |
| Per-author custom rules and applicability | Private creative preferences / project metadata | Owner-only rule edit / explicit sharing later | Never leak rules across users or books |
| BYOK provider API secrets | **Critical secret** | Author adds/rotates/revokes; authorized generation uses it | Never render it in logs, exports, request URLs or another user's app session |
| AI request snapshots and prompts | Private manuscript excerpts + preferences | Authorized provider transmission after consent | Avoid full-book transmission for one paragraph task; retention must be disclosed |
| Candidate AI edits and profile changes | Untrusted/temporary suggestions | Review, accept or dismiss | Cannot independently grant writes to accepted prose or canon |
| DOCX/TXT import documents | Untrusted external file/data | Parse in constrained environment | No executable content, unsafe HTML, arbitrary remote fetch or hidden trust escalation |
| Portable backups and exports | Potentially complete confidential project | User-initiated download/restore/deletion | Avoid public object URLs or indefinite signed-link lifetimes |
| Recovery and operational logs | Often sensitive technical/usage metadata | Diagnostics with strict visibility | Do not log full manuscript payloads, keys or effective prompts by default |

## 2. Trust boundaries (conceptual, not deployment architecture)

```text
Author browser
  | authenticated requests, user actions, explicitly approved AI consent
  v
Vellistry application trust boundary
  | verify principal + book ownership FOR EACH nested read/write/export/job
  | freeze rules as trusted data; validate user-configured active rules and scope
  | version accepted manuscript; proposals and canon remain separate
  | protect and redact sensitive logs
  +----> private manuscript/profile/rule/backup stores (technology TBD)
  +----> secret-handling boundary for per-user BYOK credentials (TBD)
  +----> optional approved model provider (explicit text-transfer/cost disclosure)
             |  provider retention/processing governed by verified terms, TBD
Untrusted imported documents, pasted HTML, generation output, model content,
references and third-party integrations NEVER become privileged instructions.
```

**Server-only owner checks** must protect every read/export, proposal, profile update, background job, autosave and restore action. **Editor UI hiding** is not an access control. An AI-generated action or book ID in a request is **not itself authorization**.

## 3. Specific Vellistry risks and required verification scenarios

| ID | Threat and impact | Proposed control / design invariant | Negative verification fixture |
|---|---|---|---|
| **SEC-01** | Horizontal access to someone else's book or chapter | Deny by default, principal-to-resource authorization **on every operation** | Author A guesses author B's chapter ID and tries GET, PATCH, DELETE |
| **SEC-02** | Nested cross-account data leakage | Authorize child through owning parent and user; no trust in client-supplied owner ID | Mix B's scene ID under A's book ID; return no B content |
| **SEC-03** | Story-memory cross-book spill | Scope profile facts, rules, summaries, cached results and retrieval by authenticated book identity | Same-named character in unrelated books must not share state |
| **SEC-04** | Manuscript loss during concurrent save or crash | Version checks, durable acknowledgement, idempotent operations, recoverable edit state | Two writes reordered; network drop; reload; no false saved indication |
| **SEC-05** | AI suggestion overwrites newer author prose | Source revision binding and conflict-safe explicit accept | Delayed rewrite returned after paragraph restructure cannot overwrite |
| **SEC-06** | Unaccepted candidate becomes canonical character fact | Separate proposed/approved entity status with author decision and provenance | Rejected AI scene says character died; accepted canon unchanged |
| **SEC-07** | Unauthorized BYOK key disclosure | Dedicated secret handling and least privilege; never log, export or return raw key in routine UI | Inspect logs, backups, API responses and browser storage under normal operations |
| **SEC-08** | API key persists after revoke or is used for someone else's request | Authenticated key ownership, revocation and bounded job credential lifecycle | Revoke key during queued generation; no new requests with revoked credential |
| **SEC-09** | Private unpublished story sent to a provider without consent | Explicit task/provider transfer consent, scoped context, disclosure and opt-out | AI-off author draft causes **zero external model calls** |
| **SEC-10** | Imported text or model output becomes a malicious instruction | Treat all untrusted prose as data; validate/escape output; no model-issued trusted write capability | DOCX contains `ignore system policy` or HTML script; no privileged action |
| **SEC-11** | Sensitive prompt/rules/content persist in telemetry | Data minimization, redacted logs/traces, documented retention | Trigger provider error; response log has no manuscript/secret payload |
| **SEC-12** | Export or backup link publicly accessible | Authenticated authorization and short-lived/tightly scoped download access, appropriate caching | Reuse share/download URL from another session/account: denied |
| **SEC-13** | Deletion/export fails to account for replicas or backups | Defined data-class-specific retention, deletion semantics and restoration limits | Delete account; inspect primary/history/export and backup policy evidence |
| **SEC-14** | Provider rate/cost runaway or unsafe retries | Budget, per-author limits, cancellation/idempotency and bounded retries | Timeout or repeated click does not generate duplicate expensive calls |
| **SEC-15** | CSRF/session abuse and token leakage | Secure session management and anti-CSRF policy appropriate to selected auth | Simulate forged state-changing request and inspect browser exposure |
| **SEC-16** | Untrusted plugin/MCP gains unintended manuscript rights | No MCP in MVP; eventual connector must be scoped and explicitly authorized | Attempt external assistant write without approved author action, deny |
| **SEC-17** | Format import strips meaning without warning | Explicit supported-format schema and loss-report before destructive conversion | DOCX with unsupported mark, comments/table; original input remains recoverable |

These are proposed verification scenarios and protective requirements, **NOT passing test results or a selected database schema**.

## 4. Minimal data lifecycle decisions still required

| Question | Candidate alternatives | Owner/engineering gate |
|---|---|---|
| Where is authoritative manuscript storage? | Server-authoritative versioned save, local-first/offline sync, hybrid | Compare conflict/recovery and threat exposure before ADR |
| Who can decrypt a user's manuscript? | Service-readable encrypted-at-rest, user-held keys with restricted features, other reviewed design | Trade off backup/search/AI extraction and recovery, do not claim E2EE unless proven |
| How are BYOK keys stored? | Vault/KMS-managed server encryption vs other reviewed mode | Threat model and vendor/provider terms, never client build env or Git |
| What is the model transmission boundary? | User-initiated scoped passages plus approved story/rules context | Must display provider/cost/consent; no full-manuscript transmission by default |
| What is recoverability? | Chosen tested backup policy and restore objectives | RPO/RTO, restore tests, orphan cleanup, loss recovery disclosure |
| What are retention/deletion promises? | Class-specific durations and backups restoration policy | Legal/product owner review before public promises |
| How are job permissions enforced after user changes access? | Authorization at enqueue **and** execution/commit, with revocation checks | Verify queued work after key/account deletion or role change |
| Are private analytics used? | Off/minimal metadata vs explicit opt-in analytics | Consent, data classification and redaction decisions |

The MVP does not include real-time collaboration or full MCP; avoid expanding the threat model into blanket permission for either.

## 5. Evidence gates and prioritization

**Critical before inviting real external authors to upload private books:**
1. An actual authenticated, deny-by-default **per-resource authorization test suite** passing for book/chapter/profile/rules/suggestion/export/restore flows.
2. Real persistence with truthful save, crash recovery, backups, versioning and a tested restore path.
3. Documented server and client handling for secret keys, credential revocation, untrusted imports, log redaction and external model consent.
4. Explicit privacy/data retention terms consistent with actual provider capabilities; verify every promise.
5. Reproduce SEC-01..17 negative scenarios on the actual selected architecture, then commission independent review proportional to risk.

**Can proceed in research with synthetic data:** build a browser manuscript demo without auth (local-only/disposable, clearly nonproduction); compare security designs on paper; test mock provider/rule processing, never with real unpublished text; run fake-user isolation against an isolated test backend once chosen.

## 6. Initial conclusion — not a vendor choice

The highest-risk Vellistry failure would be an author trusting the app with unpublished fiction that becomes publicly readable, accidentally overwritten, silently altered by AI, or transmitted without authorization. The fundamental testable properties are therefore **explicit identity and ownership at every data boundary, truthful durable saves, strict separation of manuscript/proposal/canon, protected BYOK secrets and informed external-processing consent**.

**No existing Vellistry implementation has yet demonstrated these protections.** OWASP references support general principles; the precise implementation and legal/regulatory regime require separate verified decisions.
