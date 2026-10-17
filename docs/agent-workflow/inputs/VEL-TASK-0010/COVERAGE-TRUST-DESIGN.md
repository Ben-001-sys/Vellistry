# VEL-GOV-003 pre-implementation coverage and trust design

FACT: main f371448538dafa92faebbef9bcda2a36c6ca1fa9; live PRs65/66/68/59 unchanged. Direct owner dispatch to Codex authorizes Issue73 only. Comment6226100456 is coordinator-relayed continuation, not independently owner-authored/authenticated. Original44-item checklist and earlier approval permalinks remain gaps.

| Surface | Required check / trust limit |
|---|---|
| Application, SQL/auth, tests, CI/tools, instructions/approval contracts, unknown paths | Qualifying; require unique task, immutable pack committed before operative edits, matching bundle, source/head evidence, exact whole diff allowlist. Renames treated delete+add. |
| Narrow docs/reports research/index triage | Inert .md/.txt/.rst under docs/reports or docs/research; root CURRENT-STATE factual checkpoint only is not a grant to change authority. Effective policy/ADRs/instructions and unknown paths never auto exempt. |
| Authorization | Pinned task extension: URL, source provenance, phase, expiration, executor and path allowlist. Missing/expired/superseded or contradictory evidence fails. URL/account strings do not authenticate human identity; owner independently checks source before merge. |
| Pinned scope | Existing generator/verifier and task blob/source pins. Live task may advance lifecycle only; scope extension requires new unique task/pack. No phaseA task reuse for phaseB. |
| Provenance | Explicit per-commit declared executor/origin; preserved inherited/cherry-pick origin records. No Git author identity inference. Reject contradictory ChatGPT implementation labeled Codex; honest adopted ChatGPT origin allowed. Cannot detect a coordinated false declaration cryptographically. |
| Exact code/head | Bundle references immutable implementation source commit; all operative blobs must still match actual event HEAD. Subsequent report/manifest-only commit declares its current-head provenance without impossible self-hash. CI prints exact HEAD; final external ledger appends actual run evidence. |
| Review/owner | Pending review can pass structural evidence, never owner acceptance. Claimed accepted/exception approval requires base-anchored owner record and explicit scope. No agent self-promotion; no mandatory second human. |
| Checker/workflow/test self-edits | Load verifier + existing pack verifier from PR base via Git blobs, evaluate candidate data without executing it. Required source presence, exact workflow-step contracts and candidate regression existence checked by base. Own initial PR has no verifier on base: explicit one-baseline bootstrap with declared provisional trust, owner adoption required. No privileged pull_request_target. |
| Main/manual/legacy | Main after merge checks introduced range; manual feature compares origin/main. Unchanged historical main does not demand retroactive task recertification. Existing legacy PRs must gain fresh tasks; original origins preserved. |
| Gate/cost | Same automatic workflow; cheap compliance in governance and independently at final gate; draft remains red advisory, ready/full retain security/recovery and original manual workflows. Required missing/failed compliance cannot be masked by green security. |

Non-overridable exclusions for this repository-only policy: no hosted/production/private manuscript/paid/admin/merge actions. SQL paths require an additional explicit migration approval record; task reassignment never grants sensitive operations. No new orchestrator/MCP, CI duplication or owner settings changes.

Tests: real disposable Git fixtures for missing task/pack, source/pack mutations, wrong base, scope/phase expansion, SQL/CI/app restrictions, expiry/supersession, owner spoofing, fake/mixed executor, adoption origins, missing EB/source/head evidence, NOT_STARTED/NOT_RUN/BLOCKED, docs exemption, malformed metadata, events draft/ready/full/main, add/delete/rename, deleted tests/checker/workflow bypass, base code execution provenance, bootstrap and final gate missing evidence. Existing security tests remain untouched.

PROPOSAL: exact required-check/protected review enforcement depends on owner repository settings; do not change them. YAML/CI cannot fully prevent hostile workflow edits or establish actual LLM identity. Owner must review self-editing controls and any exception; independent ChatGPT review remains pending.
