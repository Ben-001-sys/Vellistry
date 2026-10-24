---
id: VEL-IMP002-LOCAL-WORKSPACE-0047
title: Local-only Book Workspace implementation and verification
type: implementation-report
status: proposed-for-review
created_at: 2026-10-24
updated_at: 2026-10-24
owner: project_owner
version: 0.1.0
---

# IMP002 bounded local workspace

## FACT: authority and implementation

The owner separately authorized this exact code slice after PR110 integration,
recorded in Issue108 comment6383802475. Base main is
`18c770ff6fce7401f7529667a37d7fb523cc55d9`; post-main40090741803 SUCCESS and exact
reviewed/merged tree314df6ff61f0f63f50770baab1871d8413f2a73d verified. This is ordinary
owner-governed development, not the expired remediation delegation. Task0047 and
its validated immutable CP0047 were committed before feature edits.

The implemented contract/controller supports owned-book opening, chapter
list/create/rename/reorder, stable IDs, separate planning notes, local versions,
operation receipts, explicit unknown-result reconciliation and author/book-scoped
drafts. Pre/post async identity checks and generation guards hide unverified or
foreign state. The test adapter independently validates ownership, chapter membership,
exact permutations, expected versions and replay identity. It stores only invented
in-memory fixtures; accepted prose/revision markers stay associated with stable IDs.

The reusable organizer provides labelled native controls, keyboard chapter actions,
live status, focus management, scoped rename/notes drafts and an explicit synthetic
session-only confirmation banner. It needs no AI key or new Auth integration. The
verified-identity callback is injected using the existing Auth verification boundary;
no new login system, credential or service-role client exists.

There is **no production workspace route**, Library navigation change, API, SQL,
grant/RLS/migration, direct database write, dependency/lockfile or workflow change.
The synthetic page is in tests only. Actual browser rendering uses a transient
wrapper in a second owned checkout, loopback3105, with no copied configuration.

## FACT: verification and corrections

- Corrected feature source389fd0905c94b814e1cdce8641e3d38446c38b28:37 focused
  workspace cases PASS; typecheck PASS. Earlier sourcea0b896a passed35workspace,
  67Library,23preflight, build and typecheck. Final build/governance evidence is
  collected separately at the later report/source commit in EB0047.
- Chromium155.0.8059.85 on Windows executed33 assertions at corrected source389fd09:
  13 happy/keyboard/semantics cases,15 isolation/uncertainty/conflict cases and5
  rename/focus/caret regressions. All PASS. Complete invoked Playwright code and
  returned results are preserved under evidence/VEL-IMP002-0047. No external
  origin was requested by the fixture. Human screen-reader/AT and author study
  are NOT_RUN; the390px test is bounded overflow evidence, not mobile certification.
- Before/after regressions are preserved: at228e850a2252b2f53e0e0317a28af419dc944cef,
  35tests had33PASS/2FAIL for the opaque chapter-ID/book-note key collision and
  denied-receipt concealment. Corrected bya0b896a. At78db297a45372ac4356b963ac76a121359321892,
  37tests had35PASS/2FAIL for verified-readback form preservation and scoped rename
  drafts. Corrected by389fd09. A real browser check at the earlier source also
  demonstrated focus loss after notes acknowledgement; corrected focus/caret
  assertion passes. The speculative rename leak was not observed in that earlier
  browser sample; no such observation is fabricated.
- Initial33test development run had32PASS/1FAIL because assignment to a frozen
  object did not throw in that runner mode. Reflect.set plus unchanged-value
  assertion correctly verifies immutability; it was a test assumption, not an
  unfrozen-state defect. A Python console encoding error after that subprocess
  did not erase its failing log. Initial context generation exceeded its size cap;
  bounded exact excerpts fixed it. An invalid undispatched pack failed doubled-CR
  source capture; transport normalization preceded regeneration/validation/commit.
  No dispatched ContextPack or validator was rewritten.
- Initial browser404 was a Next private-folder naming issue, corrected only by
  the encoded disposable folder while retaining the approved URL. Old/new browser
  evidence and source identities are explicit. No production route was introduced.

## INTERPRETATION and persistence limits

This is working local controller/component code, not completed hosted IMP002 or
JRN001. Synthetic identity/ownership and receipts model the boundary; they are not
production authentication, RLS enforcement or durable accepted revisions. Memory
and unconfirmed drafts disappear when the test session restarts. The UI says so.

Future protected chapter mutation/reorder, planning-note storage, concurrency and
accepted-manuscript/revision invariants require a separately reviewed persistence
contract and appropriate disposable integration tests. Existing direct author
chapter/revision writes remain revoked. Hosted target access, actual migrations,
two-author hosted acceptance and retained-JWT/private-pilot decisions are separately
controlled. The held metadata inventory did not block this authorized local slice.

## PROPOSAL: review and owner decision

Review exact source, test adapter boundaries, draft/unknown handling and scope
evidence; use the existing governing CI without weakening any check. The new
workspace script ran locally; current CI runs existing application/security/recovery
and governance checks but does not separately invoke that new script. Automatic
workspace-suite CI integration would require a separate scoped permission, since
this task excludes workflow changes. Do not label the new suite as a CI execution.

EB0047 and the per-PR manifest bind actual source/test identities. Distinct source
review and passing ready-state CI are required before the owner's separate feature
merge decision. Broad G_DESIGN/G_CODE, pilot/release gates and ordinary owner merge
rules remain unchanged. No automatic feature merge is authorized.
