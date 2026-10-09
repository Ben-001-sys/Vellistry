---
id: VEL-PRODUCT-CONSTRAINT-20261009-001
type: product-direction
status: owner-directed
created_at: 2026-10-09
updated_at: 2026-10-09
owner: project_owner
version: 0.1.0
sources:
  - "Owner's direct Fiction Writing Project instruction on 2026-10-09: 'in this project right now and mvp we are not going to using any paying service'"
  - "Owner's direct follow-up: research free tools and open-source alternatives for DOCX/TXT, possible EPUB, import/export and manuscript recovery"
related_research:
  - R05
  - R08
  - R11
  - R15
  - R21
related_requirements:
  - VEL-PRODUCT-SCOPE-20261009-001
---

# Owner direction — no paid services during current Vellistry project/MVP research and implementation

**Direct current instruction, 2026-10-09.** The project owner explicitly rules out **paid services** for the project at this stage and the initial MVP. In response to R11 the owner directs research toward **free and open-source tools** supporting manuscript DOCX/TXT import/export, possibly EPUB/other formats, and manuscript recovery.

## Operational interpretation for R11 (not a new implementation ADR)

- **IN BOUNDS to research and trial:** freely obtainable/open-source packages, self-hostable conversion binaries, standards-based file exchange, built-in browser APIs, and locally generated versioned backup archives, provided licensing, security and fidelity gates are satisfied.
- **OUT OF BOUNDS for current R11 MVP:** Tiptap Pro DOCX/Conversion subscriptions, paid conversion SaaS, proprietary paid extension suites, usage-priced document API calls, and introducing a trial that depends on a credit card or paid entitlement.
- **Still a choice, not preapproved:** Mammoth, docx.js, Pandoc, LibreOffice, EPUBCheck, JSZip, file schema, on-device vs self-hosted processing, package versions, deployment, hosting and data-storage architecture.
- **No false zero-cost claim:** free/open-source *software licensing* does not make hosting, CPU, disk storage, security maintenance, bandwidth or personnel time free. Use existing lawful compute where possible; infrastructure budgets remain a separate unresolved decision.
- **Other feature implications:** Previously accepted M6 used the wording 'one evaluated BYOK provider'. If a BYOK path requires paid API credits, it conflicts with this newer no-paid-services instruction. **Flag R08/M6 for a separate owner-reviewed zero-paid feasibility/scope reconciliation**; do not silently select or deploy a model/provider, charge users or rewrite the accepted eight-area scope in an R11 document.
- **EPUB scope:** research and reusable format-engine capability are allowed. Professional EPUB publishing/print production remain explicitly **post-MVP** under the accepted scope, unless the owner separately expands it. Basic optional EPUB exchange can be investigated without claiming it is an approved release gate.

No primary research source, frozen guidance or approved manuscript editor choice has been altered. This record captures the owner's stated budget/service direction, not a finding that all desired features are now feasible for no cost.
