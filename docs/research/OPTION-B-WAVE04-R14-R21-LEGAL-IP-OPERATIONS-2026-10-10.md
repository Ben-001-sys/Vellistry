---
id: VEL-RES-OPTIONB-WAVE04-R14-R21-20261010-001
title: One-pass author intellectual-property, Ghana privacy, software licensing and operations risk review
type: legal-and-operational-evidence
status: completed-official-source-review-not-legal-attestation
created_at: 2026-10-10
updated_at: 2026-10-10
author: project-research
version: 1.0.0
sources:
  - docs/research/PAIR-06-LEGAL-OPS-RESTORE-2026-10-09.md
  - docs/research/PAIR-06-LEGAL-OPERATING-RISK-REGISTER.json
  - docs/decisions/ADR-0004-free-calibre-document-conversion-and-portable-recovery.md
  - docs/history/2026-10-10-owner-waves-01-03-recommendations-accepted.md
  - https://dataprotection.org.gh/
  - https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/application-gdpr_en
  - https://www.copyright.gov/newsnet/2025/1060.html
  - https://github.com/kovidgoyal/calibre/blob/master/COPYRIGHT
  - https://www.gnu.org/licenses/gpl-faq.en.html
  - https://github.com/ueberdosis/tiptap
  - https://github.com/ollama/ollama/blob/master/LICENSE
  - https://supabase.com/docs/guides/platform/backups
  - https://supabase.com/pricing
related_research: [R14, R21, R18, R11]
related_adrs: [ADR-0004, ADR-0007]
---

# Option B Wave 4, Track B — One-pass legal, rights, licensing and operational evidence

**This is a documented research risk assessment, not legal advice, a compliance certificate, company registration, or a legal opinion for any specific contracting entity.** Neither Vellistry's actual operator legal entity, registered jurisdictions, clients' countries, external provider agreements, deployment region, package lockfile SBOM, technical data-flow audit nor counsel approval was supplied/verified. Public primary-source evidence was reviewed on **2026-10-10**. Legal obligations depend on actual business and processing facts; no invented registration status or fee.

## 1. Writer copyright, content provenance and contractual rights

- **Recommended Terms principle:** Writers retain whatever copyright and other rights they independently hold in original manuscripts, chapter revisions, characters, notes, story facts, reusable custom guidance and editorial arrangements. Vellistry receives only the **limited, purpose-bound, revocable where feasible, nonexclusive technical license** necessary to store/sync/process on the user's instruction, subject to unavoidable deletion/backup retention disclosures. The language is a proposed contract requirement, **not yet operative Terms of Service**, and must be legally reviewed.
- **No forced model-training license:** Do not claim the user grants Vellistry or all providers the right to train models on unpublished text merely by writing. Every third-party excerpt transfer must have a clear recipient, lawful basis and privacy disclosure, with AI optional/off; provider-specific input/output rights and training rights may still be separately governed by the user's chosen provider terms.
- **Imported material:** A manuscript file uploaded by a user is not necessarily owned/licensed by that user. Establish representations/rights to import, DMCA-like or local notice/takedown support where required, content moderation and due-process handling. Do not scrape or populate vendor demos with copyrighted fiction without a license.
- **Guidance corpus ownership:** ADR-0007 preserves 260 source records and their original hashes, but preservation is **not proof of a redistribution license** to ship the complete content publicly. Verify authorship, licenses, derivative permissions, copyright and possible third-party passages before public bundling.
- **AI-assisted literary copyright:** [US Copyright Office January 2025 report](https://www.copyright.gov/newsnet/2025/1060.html) says human-selected expressive elements matter; prompts alone do not automatically establish copyright in output. That is **US agency interpretation** and not a representation of Ghana Act 690, worldwide ownership, or conclusive result for any individual book. Recommend transparent human editorial control and provenance, with jurisdictional qualified review for market-specific claims.
- **Output rights and liability:** Providers may contractually disclaim uniqueness, attach conditions or train on unpaid input. An application promise that all AI output is exclusive, infringement-free or universally copyrightable would be unsupported. Keep export/edit rights clear and avoid transferring user manuscript ownership to Vellistry as a condition of using ordinary writing tools.

## 2. Ghana privacy and international trigger matrix

| Area | What the primary source actually says | What Vellistry must determine before public collection |
|---|---|---|
| Ghana Act 843 | [Ghana Data Protection Commission official site](https://dataprotection.org.gh/) identifies itself as regulator under Data Protection Act, 2012 (Act 843) and says controllers and processors must register; describes accountability, purpose, lawful basis, openness, security safeguards and participation | Identify controller/processor roles of Vellistry, host and optional providers; confirm entity-specific registration, lawful basis, fee, compliance obligations with DPC or Ghana legal adviser, **before live Ghana user processing** |
| Sensitive manuscript-derived data | A story can contain real identifiable characters/people, emails, private notes, or sensitive personal data even if primarily fiction | Complete a per-data-category inventory and map purpose/visibility, access, consent, recipients, logging and deletion; don't automatically treat manuscripts as nonpersonal |
| Author rights and transparency | DPC guidance emphasizes openness, quality, participation and safeguards | Author-readable notices and accessible rights workflow for account/prose/profile/export/erasure; define exceptions and backup lag explicitly |
| EU audience | [European Commission GDPR territorial guide](https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/application-gdpr_en) says non-EU organizations can fall under GDPR if they offer goods/services to people in EU or monitor EU behavior, even when free | Confirm whether EU writers are targeted/monitored; determine lawful basis, international transfers, processor agreements and representative/DPO/DPIA requirements when actually applicable |
| UK/other countries | Applicable national data protection regimes may extend to offered services, monitoring and transfers | Resolve actual launch markets and seek local review; a Ghana location does not establish exemption from other users' privacy law |
| Transfers to remote AI providers | Groq states US GCP data location where retained; OpenRouter's downstream providers differ; Gemini free may use content for development | Map controller/processor roles, data-transfer regions, DPA/SCC or other lawful mechanism and notices before permitting manuscript sending; no provider blanket claim |
| Breach/incident | Different laws have distinct triggers and reporting windows; obligations depend on affected data and jurisdictions | Own incident response, breach handling, logs without manuscript excerpts, notice recipients/timing reviewed by adviser; no universal 72-hour/other deadline asserted |

## 3. Open-source license and distribution review

| Component | Upstream evidence and present known direction | Release/distribution obligation or explicit blocker |
|---|---|---|
| **Calibre** | [Upstream COPYRIGHT](https://github.com/kovidgoyal/calibre/blob/master/COPYRIGHT) identifies main code as GPL-3 and bundled pieces under various terms; ADR-0004 selects separately invoked command-line research route | **License counsel/SBOM needed** for packaged Calibre binaries, notices, corresponding source and modifications. Separation into a separate process may affect derivative analysis; [FSF GPL FAQ](https://www.gnu.org/licenses/gpl-faq.en.html) says process boundaries are fact-specific, and containers do not automatically eliminate copyleft duties. An unmodified service-side invocation is not the same as distributing a derivative binary, but final facts must be reviewed |
| **Next.js / NestJS** | Upstream repositories and Pair06 risk registry record MIT for respective framework | Preserve notices when distributed; exact installed versions, plugins, transitive dependencies and possible separate licenses **not lockfile-audited in Wave 4** |
| **Tiptap 3 editor core** | [Upstream editor repo](https://github.com/ueberdosis/tiptap) describes MIT editor core alongside separately commercial offerings | Confirm exact installed extensions, paid/cloud modules and model features against lockfile; **do not use Tiptap documentation site's software license** as blanket permission for all products |
| **JSZip / python-docx / Pandoc** | Earlier risk register records JSZip MIT/GPL choice; Wave2 used python-docx and Pandoc *only as research tools* | No decision to ship Python DOCX stack. Confirm exact package/OS/font licenses and notices only if incorporated or distributed |
| **Ollama** | [Ollama runtime MIT](https://github.com/ollama/ollama/blob/master/LICENSE) | Distinct model weights may have separate commercial/redistribution terms; obtain exact model and quantization provenance and notices before bundling any model |
| **Generated documents** | Manuscript author's own text and Vellistry format conversion | Copyright of text/illustrations/fonts does not become free/public-domain merely because a converter or open-source editor outputs the file |

**SBOM/compliance verdict:** No complete version-locked dependency/license export or exact Calibre/container distribution scenario was provided or executed. **License conformance is NOT VERIFIED**. Required release artifact: reproducible lockfile SBOM with version, origin, license, chosen dual-license branch, bundled fonts/weights, attribution and lawyer-reviewed shipping scenario. Do not claim proprietary code must automatically be GPL nor that a container absolves license duties.

## 4. Real-world operations, free tier and restore responsibility

Official [Supabase pricing](https://supabase.com/pricing) currently lists **500 MB DB/project**, **1 GB Storage**, **5 GB egress**, **50,000 MAU** and a project pause after a week of inactivity. It offers only community support on Free, with two active free projects under the listed conditions. These quotas/terms can change and are not a SLA or unlimited commercial hosting commitment.

[Supabase backup guidance](https://supabase.com/docs/guides/platform/backups) explicitly reserves managed daily backup for **Pro/Team/Enterprise** and recommends **Free-project Supabase CLI db dump plus independently managed off-site backups**. Project/DB dump alone does not necessarily recover Auth-managed signing keys/secret config, Storage objects, remote signed files, environment, email deliverability, outside provider consent/keys, third-party logs or locally unsynced drafts.

**Responsibility matrix (proposed, not operationally assigned to actual staff):**

| Data/control plane | Minimum operator-owned task | Why prior research is insufficient |
|---|---|---|
| Postgres DB: books, chapters, revisions, fact approvals, audit | Versioned dump schedule, encryption, independent remote custody, checksum, clean restore and revision/policy verification | Pair06 tested a synthetic PostgreSQL16 dump/restore, not full app Auth/RLS real disaster recovery |
| Supabase Auth and secrets | Auth schema and permitted user/session restore procedure, secure key escrow/rotation, SMTP and identity rebind policies | Auth identities, sessions, signing secrets and email confirmation were not fully restored in the test |
| File Storage and exports | Private object inventory, object revisions and encrypted object backup, restore permissions, signed URL expiry and invalidation | SQL backup won't include object contents managed outside PostgreSQL |
| Local drafts | Define user-device choice, logout/account change/erasure, export personal draft copy and shared-device disclosure | Server cannot guarantee remote purge of offline cached unsynced text |
| Retention/privacy | Policy for account content, backups, logs, crash reports and provider payloads; documented deletion lag and appeal exceptions | No complete deletion execution/receipt or international DPA established |
| Availability | Uptime monitoring, Free project pausing response, rate limits, abuse controls, email sending quota, operator escalation, status page and risk communication | No free provider guarantees 24/7 public access |
| Vendor/third-party | Maintain processor map, version/region/terms change log, credential revoke and incident contacts | Router/provider/default settings may change independently |

**Unapproved numeric targets:** A recovery point objective (RPO) is the acceptable maximum data loss; a recovery time objective (RTO) is the acceptable service interruption. The owner **has not selected numerical RPO/RTO**, incident response staffing, backup frequency, encrypted offsite destination or deletion retention periods. A daily snapshot can at best mean losing changes since that snapshot in certain failures and does not provide guaranteed 24-hour loss bound without observed successful operations. Do not assert one.

## 5. Contract and privacy notice drafting checklist (not adopted Terms)

Prepare clauses and data inventory covering: author rights and processing scope; AI-OFF independent product; actor/provider/region consent and human-review disclosure; no undisclosed training; service providers/subprocessors; account creation, cookies, security, age requirements and jurisdiction; moderation/content rights; export, version retention, manual editor/recovery, accepted-versus-pending canon; device-stored draft privacy; third-party key storage; breach notifications and law-enforcement requests; deletion/backup/provider retention; billing Free-capacity pause; contact and rights redress; legal venue and dispute resolution. **Do not invent or publish a finished binding ToS/privacy notice without actual operator legal entity and counsel review.**

## 6. Provisional pre-design decisions to carry into Wave 5

- **Accepted from owner Waves1–3:** writer ownership direction, manual author control, draft survival, strict privacy/canon semantics and no mandatory paid services; they remain product requirements but not contractual text.
- **Recommended default privacy:** No unpublished manuscript leaves Vellistry to free cloud API without separate explicit author action, a provider privacy assessment and lawful processing/transfer basis. No implicit model-training permission. Maintain author rights and original source provenance.
- **Recommended license discipline:** Keep Calibre as separate bounded conversion worker in design proposal, but **flag GPL distribution review before shipping** and ensure alternative strict DOCX path under Wave2 loss policy; no off-the-shelf commercial blanket claim.
- **Recommended launch condition:** Establish actual legal operator, Ghana DPC applicability/registration and broader market law review, data inventory/notice, version-locked SBOM, tested Auth+DB+Storage+keys restore and staffed incident/retention plan before collecting real customer manuscripts.
- **Unresolved owner choices:** actual service territory, provider, host/data region, legal controller, acceptable ongoing nonzero operating expenditure (if any), registration/counsel costs, backup RPO/RTO and retention. This one-pass report does NOT silently choose a jurisdiction, vendor, spend, or SLA.

**Evidence disposition:** Official-source legal/ops risk research **COMPLETE AS ONE PASS**; actual compliance, legal advice, registration, dependency SBOM, backups on live deployment and agreements **NOT VERIFIED / NEED OWNER-AND-EXPERT REVIEW**. Move **research-only Wave 5** to R19/R06 authentic model quality and R10 reversible editing validation, with all contract and operational gates preserved. No Figma/Lovable prototypes, production feature development, real manuscript provider uploads, paid services or public deployment authorized.
