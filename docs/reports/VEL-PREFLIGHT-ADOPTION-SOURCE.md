# Selective preflight adoption — 2026-10-19

FACT: Task/CP0020 committed before adopting the two exact PR68 helper/test blobs. ChatGPT originally authored PR65 preflight; Codex PR68 added unchecked runtime-override protection. Current adoption preserves those original contributions; Codex implements integration only. Exact origin SHA/blob/hash/history are in inputs0020/SOURCE-MAP.json. This is not relabelled original Codex implementation.

Current package scripts are preserved with test:hosted-preflight and check:hosted-config additions. CI already runs the focused test source when present; no workflow change. Only synthetic fixture tests are executed. Do not run check:hosted-config on owner env files under this task. No SQL, app/browser, env example, cloud or settings change. Configuration consistency is not connected Auth/RLS/hosted acceptance.

INTERPRETATION: this activates previously absent preflight negative coverage and supports selective supersession planning. PR65/68 remain open until reviewed successor adoption and remaining source decisions; no closure/merge claimed.

PROPOSAL: actual focused tests, library/typecheck/build, exact-head fullCI and independent review; owner decides integration. Env examples remain outside this task because effective validator rejects .env-prefixed paths; no validator weakening or SQL adoption. Real hosted operations remain OWNER_DECISION_PENDING.
