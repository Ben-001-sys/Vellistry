---
id: VEL-GOV-003
type: governance-schema
status: accepted
created_at: 2026-10-08
updated_at: 2026-10-08
version: 0.1.0
related_adrs:
  - ADR-0002
---

# Record Schemas and Metadata Policy

All Architecture Decision Records (ADRs) and historical event records **must** contain YAML front matter bounded by `---` markers. These fields are indexed by external tools, code search, and future context compilation; do not rely on headings alone.

## General metadata conventions
- Permanent identifiers: ADR-0001, HIS-20261008-001, VEL-REQ-001, etc.; never recycle IDs.
- Use ISO 8601 dates, e.g. `2026-10-08`, when only the day is known. Use UTC timestamps with `Z` when accurate event times are known. Never fabricate precision.
- Use lowercase lifecycle states and explicit `null` when data is genuinely unknown.
- Links may be relative repository paths or stable external URLs; for temporary conversation sources, include a descriptive reference and mark the archival link pending.
- Distinguish `author` (record writer), `approved_by` (decision authority), and `actor` (subject who performed a historical action).
- `evidence` describes what supports a statement. `sources` identifies original material. Neither is optional as a *field*, though a known evidence gap may be represented by `[]` and explained.
- Preserve the old record when superseded; create a new ADR and set bidirectional `supersedes`/`superseded_by` links where applicable.
- Change `updated_at`, `version`, and add a history event for material corrections. Git commit history is complementary evidence.
- Include the Git commit/PR reference when known. It can initially be null and added later.

## ADR front matter — required
```yaml
---
id: ADR-0000
title: Example decision
type: architecture-decision
status: proposed # proposed | accepted | rejected | deprecated | superseded
created_at: 2026-10-08
updated_at: 2026-10-08
decided_at: null
author: project_owner
approved_by: null
version: 0.1.0
sources: []
evidence: []
related_requirements: []
related_features: []
related_contracts: []
related_adrs: []
supersedes: []
superseded_by: []
implementation_refs: []
---
```

Required ADR body sections:
1. Context and problem statement
2. Decision
3. Alternatives considered
4. Rationale
5. Consequences and trade-offs
6. Evidence and verification limits
7. Implementation status (independent of decision status)

Accepted status requires the approving role/person and dated decision evidence. **Acceptance does not imply implementation.**

## Historical event front matter — required
```yaml
---
id: HIS-YYYYMMDD-001
title: Example historical event
type: historical-event
status: recorded # recorded | corrected | retracted
occurred_on: 2026-10-08
recorded_on: 2026-10-08
time_precision: day # day | exact
created_at: 2026-10-08
updated_at: 2026-10-08
author: project_owner
actor: project_owner
version: 0.1.0
sources: []
evidence: []
related_adrs: []
related_requirements: []
related_events: []
corrects: []
corrected_by: []
commit_refs: []
---
```

Required history body sections:
1. Event — what happened, not speculation
2. Prior state and resulting state
3. Evidence and provenance
4. Interpretation (clearly separate from verified fact)
5. Follow-up or correction links

Historical event records are not mutable diaries: preserve the original record and append correction/clarification events when appropriate. Do not overwrite past events to match today's understanding.

## Additional records
Requirements, experiments, source registers, ContextPacks, and ExecutionBundles use their own lightweight schemas. Link them with stable IDs and appropriate evidence.

## Review checklist
- Stable unique ID and allowed type/status?
- Dates are accurate and no invented timestamps?
- Actor, author and approver distinguished?
- Source and evidence links grounded or explicitly pending?
- Related records / supersession links valid?
- Decision status and implementation status not conflated?
- History corrections additive and traceable?
