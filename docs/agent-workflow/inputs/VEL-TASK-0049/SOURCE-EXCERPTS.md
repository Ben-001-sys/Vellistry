# Exact existing foundation sources

Git source a9e7c48bc7198f6f23f7be5bb77ad54f1f27e2e4; PLAN02 is proposed, not SQL approval.

## docs/decisions/ADR-0006-next-nest-supabase-implementation-foundation.md

```text
---
id: ADR-0006
title: Implement Vellistry using Next.js web, NestJS API and Supabase foundation
type: architecture-decision
status: accepted
created_at: 2026-10-09
updated_at: 2026-10-09
decided_at: 2026-10-09
author: project-research
approved_by: project_owner
version: 1.0.0
sources:
  - "2026-10-09 Fiction Writing Project conversation: assistant proposed Next.js + NestJS + Supabase as preferred candidate; owner replied 'agreed', then directed completing planning by 10:30 and beginning implementation. Original conversation permalink pending."
  - "https://github.com/Ben-001-sys/Vellistry/pull/23 — shared Next/Nest manuscript contract, 30 passing API assertions and both frontend builds."
  - "https://github.com/Ben-001-sys/Vellistry/pull/25 — draft, eight passing Chromium editor and draft-recovery checks."
  - "https://github.com/Ben-001-sys/Vellistry/pull/22 — merged, PostgreSQL FTS vs vector benchmark."
  - "https://supabase.com/docs/guides/local-development"
  - "https://supabase.com/docs/guides/auth/jwts"
evidence:
  - "Owner's 'agreed' unambiguously answered the proposal to proceed with the Next.js + NestJS + Supabase preferred architecture, with validation still required."
  - "Owner then directed a 10:30 implementation-planning cutoff and beginning implementation."
  - "Evidence from the framework and story-memory experiments supports feasibility, not production security, reliability or superiority."
  - "Approval does not decide managed versus self-hosted Supabase production deployment, complete account security, job engine, AI model, or a paid service."
related_requirements:
  - VEL-PRODUCT-SCOPE-20261009-001
  - VEL-PRODUCT-CONSTRAINT-20261009-001
related_features: []
related_contracts: []
related_adrs:
  - ADR-0001
  - ADR-0003
  - ADR-0004
  - ADR-0005
supersedes: []
superseded_by: []
implementation_refs:
  - apps/web/
  - apps/api/
  - supabase/
  - docs/plans/MVP-ENGINEERING-IMPLEMENTATION-KICKOFF-2026-10-09.md
---

# ADR-0006 — Next.js + NestJS + Supabase implementation baseline

## Context and problem statement

Vellistry's eight MVP feature areas were approved before choosing the full application stack. R18's 23 synthetic JS memory checks, 12 PostgreSQL checks, 140k-word retrieval comparison, 30 Next/Nest HTTP checks and eight Chromium authoring/recovery tests established bounded feasibility. Those tests did **not** prove production readiness or a decisive framework performance advantage. The author now authorizes beginning development, with planning completed by 22:30 Ghana time on 2026-10-09.

## Decision

**Accept the following as the implementation baseline, not an irrevocable forever stack:** a TypeScript/pnpm workspace holding **Next.js 16 / React 19** for author-facing UI and **NestJS 11** for protected application API and domain modules. Keep the author writing experience on **Tiptap 3** with PostgreSQL-acknowledged chapter revisions and best-effort local Dexie recovery.

Use **Supabase Auth** as the only user sign-in authority; **Supabase PostgreSQL** as the durable relational store with per-author/book Row Level Security; and optional private Supabase Storage for authorized import/export files when that surface is implemented. **No Better Auth alongside Supabase Auth**.

Start with **Supabase CLI local development**, no production credentials and no paid service. Managed Supabase Free versus properly self-hosted production Supabase/PostgreSQL is still open. Do not make cloud deployment a condition for offline/no-paid development. The Nest API must validate Supabase access credentials before serving author data, use RLS-scoped non-service database calls, never accept client-supplied owner IDs as authority and never expose privileged keys to browsers. Next.js is frontend/BFF, not an unguarded duplicate backend.

For Story Memory, retain author-approved temporal canon events and PostgreSQL full-text retrieval as the initial memory system. pgvector/embeddings are **optional** after realistic fiction-quality evidence. Background execution is a separate worker boundary, with specific provider (Graphile Worker versus Supabase Queues) **undecided**. Generative AI remains optional, consented and provider-neutral; no paid model required or secretly selected.

## Alternatives considered

1. **Next.js alone + Supabase**: fewer deployables and valid tested authoring contracts; less explicit backend isolation as the Story Memory, review, and conversion engine expands.
2. **React/Vite + NestJS + Supabase**: valid and tested; a separate frontend/router pattern rather than the owner's chosen Next.js.
3. **Next.js + NestJS + independently managed PostgreSQL/Auth**: potentially leaner runtime; requires more authentication and infrastructure work than requested now.
4. **Microservices with Redis/vector SaaS**: adds overhead and unnecessary paid-service exposure for MVP.

## Rationale

NestJS module boundaries suit protected book/chapter operations, canon review and future AI orchestration, while Next.js supports an integrated author-facing web UI. Supabase provides local Auth and PostgreSQL development, private storage and RLS. Earlier tests proved basic manuscript semantics on both transports. No measured speed superiority is claimed.

## Consequences and trade-offs

- Two runtime applications (+ eventual worker) require separate builds, API contracts, origin/cookie trust design, and operational monitoring.
- Supabase Free hosted quotas/inactivity and manuscript backup risk mean production hosting must be explicitly reviewed before public use.
- Local Supabase development requires a Docker-compatible runtime and must never be exposed as a production service.
- RLS and verified JWT/user sessions must be tested across two actual users. Server secret/service keys must not bypass author isolation.
- Maintain one writing source of truth: accepted revisioned Tiptap JSON in PostgreSQL. IndexedDB is temporary recovery, not an authority on accepted content.
- User's no-paid-service mandate remains binding. Compute/storage and maintenance may still incur real costs.

## Evidence and verification limits

Approval is documented by the two owner messages in the source conversation, not an invented URL. The architecture approval is specific to **beginning MVP implementation**. It does not authorize production deployment, published auth/security claims, a paid service, real-manuscript test data, or merging unrelated draft PRs. PR #17 contains an **earlier proposed Next-only modular-monolith ADR-0005**; that unmerged proposal is not an accepted architecture. This ADR is a distinct owner-directed selection, not an undocumented rewrite of ADR-0005.

Official references: [Supabase local development](https://supabase.com/docs/guides/local-development), [Supabase JWT verification](https://supabase.com/docs/guides/auth/jwts) and [NestJS guards](https://docs.nestjs.com/guards).

## Implementation status

**Implementation authorized and initial scaffolding in progress, not production ready.** First testable slice: local auth token -> NestJS guard -> RLS-scoped book list/create -> Next.js user interface. Later: chapters, revisioned Tiptap editing, draft recovery, profiles, author approval and retrieval. See implementation kickoff plan. All integration test outcomes must be separately recorded and observed before being called complete.

```

## apps/api/src/modules/auth/supabase-auth.service.ts

```text
import {Injectable,ServiceUnavailableException,UnauthorizedException} from "@nestjs/common";
import {createClient,SupabaseClient} from "@supabase/supabase-js";

/**
 * A real Supabase Auth server verifies the access token. No trust in x-user-id.
 * Auth server calls are intentionally required per protected request in this first slice.
 * Do not initialize admin/service-role clients for author-facing requests.
 */
@Injectable()
export class SupabaseAuthService{
 private readonly url=process.env.SUPABASE_URL;
 private readonly publishableKey=process.env.SUPABASE_PUBLISHABLE_KEY;

 private config(){
  if(!this.url||!this.publishableKey)throw new ServiceUnavailableException("Supabase not configured");
  return {url:this.url,key:this.publishableKey};
 }
 publicClient():SupabaseClient{
  const {url,key}=this.config();
  return createClient(url,key,{auth:{persistSession:false,autoRefreshToken:false}});
 }
 async verify(token:string):Promise<{id:string}>{
  if(!token||token.length>8192)throw new UnauthorizedException();
  const {data,error}=await this.publicClient().auth.getUser(token);
  if(error||!data.user?.id)throw new UnauthorizedException();
  return {id:data.user.id};
 }
 forUser(token:string):SupabaseClient{
  const {url,key}=this.config();
  return createClient(url,key,{
   global:{headers:{Authorization:"Bearer "+token}},
   auth:{persistSession:false,autoRefreshToken:false}
  });
 }
}

```

## apps/api/src/modules/auth/supabase-auth.guard.ts

```text
import {CanActivate,ExecutionContext,Injectable,UnauthorizedException} from "@nestjs/common";
import {SupabaseAuthService} from "./supabase-auth.service";

export type AuthenticatedRequest={headers:{authorization?:string};author:{id:string};accessToken:string};

@Injectable()
export class SupabaseAuthGuard implements CanActivate{
 constructor(private readonly auth:SupabaseAuthService){}
 async canActivate(context:ExecutionContext){
  const req=context.switchToHttp().getRequest<AuthenticatedRequest>();
  const header=req.headers.authorization??"";
  const match=/^Bearer ([A-Za-z0-9_\-.]+)$/.exec(header);
  if(!match)throw new UnauthorizedException();
  const author=await this.auth.verify(match[1]);
  req.author=author;
  req.accessToken=match[1];
  return true;
 }
}

```

## apps/api/src/modules/books/books.service.ts

```text
import {Injectable,InternalServerErrorException} from "@nestjs/common";
import {SupabaseAuthService} from "../auth/supabase-auth.service";
import {bookInsertPayload} from "./book-create-input";
@Injectable()
export class BooksService{
 constructor(private readonly auth:SupabaseAuthService){}
 async list(token:string){
  const {data,error}=await this.auth.forUser(token).from("books")
    .select("id,title,created_at,updated_at").order("created_at",{ascending:false});
  if(error)throw new InternalServerErrorException("Unable to load books");
  return data??[];
 }
 async create(token:string,title:string){
  // owner_id is assigned by DEFAULT auth.uid() in the database; never from the client.
  const {data,error}=await this.auth.forUser(token).from("books")
    .insert(bookInsertPayload(title)).select("id,title,created_at,updated_at").single();
  if(error)throw new InternalServerErrorException("Unable to create book");
  return data;
 }
}

```

## apps/web/src/app/api/books/route.ts

```text
import {NextRequest,NextResponse} from "next/server";
import {decideBookPost,EXPECTED_USER_HEADER,forwardTransportFailure} from "@/lib/library/book-create-document";
import {getServerSupabase} from "@/lib/supabase/server";
import {verifiedBookAccess} from "@/lib/library/owner-from-auth";

export const dynamic="force-dynamic";
export const runtime="nodejs";

function privateJson(body: {error: string}, status: number){
 return NextResponse.json(body,{status,headers:{"Cache-Control":"no-store"}});
}

/**
 * BFF forwards only a verified Supabase user access token.
 * Nest independently validates it against Supabase Auth for every request.
 * Book creates forward a title only, and only when the browser's expected user
 * still matches that verified session.
 * A failure after that forward is an unknown acknowledgement, not a definite
 * save failure. Authentication, validation, and session mismatch stay definite.
 */
async function forward(req:NextRequest,method:"GET"|"POST"){
 let attemptedUpstream=false;
 try{
  const supabase=await getServerSupabase();
  const access=await verifiedBookAccess(supabase.auth);
  if(!access)return privateJson({error:"unauthenticated"},401);
  const base=process.env.VELLISTRY_API_BASE_URL;
  if(!base)return privateJson({error:"api_not_configured"},503);
  const target=new URL("/v1/books",base);
  let content:string|undefined;
  if(method==="POST"){
   const decision=decideBookPost({
    sessionUserId:access.ownerKey,
    expectedUserId:req.headers.get(EXPECTED_USER_HEADER),
    rawBody:await req.text(),
   });
   switch(decision.action){
    case "reject":
     return privateJson({error:decision.error},decision.status);
    case "forward":
     content=decision.document;
     break;
    default:{
     const unreachable:never=decision;
     void unreachable;
     return privateJson({error:"service_unavailable"},503);
    }
   }
   attemptedUpstream=true;
  }
  const upstream=await fetch(target,{
   method,headers:{"Authorization":"Bearer "+access.accessToken,"Content-Type":"application/json"},
   body:content,cache:"no-store"
  });
  if(upstream.status===401)return privateJson({error:"unauthenticated"},401);
  let payload="";
  try{
   payload=await upstream.text();
  }catch{
   return new NextResponse(null,{status:upstream.status,headers:{"Cache-Control":"no-store"}});
  }
  return new NextResponse(payload,{status:upstream.status,headers:{"Content-Type":"application/json","Cache-Control":"no-store"}});
 }catch{
  const failure=forwardTransportFailure(attemptedUpstream);
  return privateJson({error:failure.error},failure.status);
 }
}
export async function GET(req:NextRequest){return forward(req,"GET");}
export async function POST(req:NextRequest){return forward(req,"POST");}

```

## docs/plans/VEL-PLAN-02-ARCHITECTURE-DATA-CONTRACTS-2026-10-11.md

```text
## 2. Domain boundaries and ownership model

```text
Supabase Author identity (auth.users)
  ├── author preferences / optional BYOK *session-only* client state
  └── books [existing; owner_id=auth.uid()]
       ├── chapters [existing; book_id, stable UUID, position]
       │    ├── chapter_revisions [existing; accepted JSON history]
       │    ├── planning_notes [proposed]
       │    └── local_draft recovery [client only; not canonical]
       ├── character_profiles / storyline_profiles [proposed manual entities]
       │    └── approved_fact_events + source_refs [proposed author-approved canon]
       ├── candidate_fact_events + review_decisions [proposed, never auto-canon]
       ├── rule_scope_overrides + author_rules [proposed; immutable source pack separate]
       ├── ai_requests + proposal_decisions + undo_links [proposed]
       └── import/export/backup manifests [proposed short-lived scoped records]
```

Every record containing sensitive manuscript, profile, fact, rules/preferences, prompt context, backup metadata or decision must prove the **authenticated owner AND book membership**, not merely accept a book UUID from the caller. The original schema has `books`, `chapters`, `chapter_revisions`; SQL migrations explicitly **revoke direct authenticated chapter/revision writes** until protected atomic RPC. Keep this safety property. No new DML migration during planning.

| Bounded entity | Minimum proposed fields / relation | Authority and invariant |
|---|---|---|
| `books` **existing** | `id`, `owner_id`, `title`, timestamps | owner comes from Auth/DB, not submitted JSON |
| `chapters` **existing** | `id`, `book_id`, `title`, `position`, `current_revision`, `accepted_document` | stable ID independent of order; nested owner permission |
| `chapter_revisions` **existing** | `book_id`, `chapter_id`, `revision`, `document`, timestamp | append-only accepted sequence; not autosave queue |
| Planning note **proposed** | `book_id`, optional `chapter_id`, body, changed_at | distinct from accepted manuscript and chapter revision |
| Profile **proposed** | character/thread kind, `book_id`, manual fields, approved baseline, updated_at | author's manual state; no model needed |
| Canonical fact event **proposed** | fact subject/predicate/value, approved author decision, applicable story-time interval, provenance | only separately author-approved; uncertain facts explicitly typed |
| Fact candidate **proposed** | `book_id`, source chapter + accepted revision, **exact quote** and location, narrative scene time, proposed fact, pending/edit/dismiss/approve or stale | a candidate never becomes canon by accepting AI prose |
| Rule origin/alias **proposed package** | immutable origin ID/compact or expanded variant/body hash + 134 logical aliases version | real private corpus must not be hallucinated or committed without permission |
| Rule preference **proposed** | inherited/overridden enabled flag, author rule version, scope `workspace|book`, exception reason | disable excludes rule from actual effective request |
| AI request & proposal **proposed** | actor, book/chapter, base revision, selection anchor, effective rules version, provider/model route, state, limited proposed plain text, consent evidence | unaccepted text is never accepted manuscript |
| Proposal decision **proposed** | accept/reject/edit, idempotency key, before/after accepted revision, author/time | CAS commit only; reject leaves source byte-equivalent |
| Export/backup manifest **proposed** | book owner, format, schema version, contents hashes, declared omissions, scoped Storage object reference if any | no raw BYOK keys; clean restore to authorized target proves backup |

**Index proposals:** owner+created_at for owned book listing; book+chapter position uniqueness with explicit reorder concurrency strategy; book+profile/fact status/story-time and chapter revision indices; scoped idempotency-key lookup unique per actor/action; storage object isolation. Actual index/query/explain performance measurements remain undone.

## 3. Boundary responsibility and proposed interfaces

| Component | Owns | Must not |
|---|---|---|
| Next web / Tiptap | controlled editor state, navigation, draft recovery candidate UX, full request-consent preview, local-only key lifecycle, accessible controls | report Saved without committed receipt; render another account's cached state; send prose invisibly |
| Next BFF | attach verified session to owned request; no-store and safe SSR/cookie/session handling | treat `getSession` alone as authority; embed tokens or prose in cache |
| Nest API | bearer validation, authorize resource, input schema, validated state transitions, effective context and optional AI proxy | trust `owner_id` in request; service-role shortcut; log raw manuscript/BYOK |
| Postgres RPC/RLS | atomic accepted revision CAS + immutable history/idempotent receipts, referential integrity and owner scope | allow direct client-initiated unversioned chapter UPDATE/DELETE |
| Local browser drafts | account/book/chapter/base-revision recovery candidates | override accepted revision silently; expose to next account on shared device |
| Private Storage (future) | short-lived authorized import/export/backup objects and expiry/retention | public manuscript buckets; promise signed URLs instantly expire on logout |
| AI adapter (future) | bounded OpenRouter downstream pinned model, consent, explicit author key, cost/rate limiting | hidden fallback, model output as committed canon, provider key persistence |

## 4. API/RPC contract candidates by delivery slice

These are **planning shapes only**, not endpoints currently implemented.

| Stage | Candidate request/interface | Expected result and safety envelope |
|---|---|---|
| IMP-001 | Existing `GET/POST /v1/books` + BFF `/api/books`; proposed owned `GET/PATCH/DELETE /v1/books/:id` | minimal allowed fields; 401/403/404 well-defined; no-store; 400 title validation; owner-only |
| IMP-002 | Proposed `GET/POST /v1/books/:bookId/chapters`, `PATCH .../:chapterId`, reorder transaction, notes | nest-chapter checks; stable ID; 409 conflicting reorder; non-destructive delete+confirmation |
| IMP-003 | `saveChapter({bookId,chapterId,expectedRevision,idempotencyKey,document,documentSchemaVersion})` | committed revision receipt `acceptedRevisionId,revisionNumber,documentHash,savedAt`; explicit `CONFLICT|DENIED|INVALID|UNAVAILABLE|UNKNOWN_TO_CLIENT` handling; exact schema/SQL decision pending |
| IMP-003 | Proposed `GET acceptedChapter + history`, draft recovery local state | server accepted vs local candidate separately represented; never optimistic Saved |
| IMP-005 | Proposed profile CRUD and candidate review endpoints | manual create/edit; candidate evidence linked to **accepted source revision** and **story time**; approve independently |
| IMP-006 | Proposed `GET /rules/catalog`, `PUT /rules/preferences`, effective preview | version-pinned certified source; account/book inherited scopes; no disabled rule |
| IMP-004 | Proposed import/export preparation, versioned backup manifest, restore/delete confirm | authorized streams, bounded size, loss report, clean restore and revocable scoped objects |
| IMP-007 | Proposed `POST /v1/ai/proposals` with author-controlled Continue/Rewrite | explicit excerpt/recipient/rules/cost consent; session-only BYOK supplied for that request; proposed plain text only |
| IMP-008 | Proposed `POST /v1/ai/proposals/:id/accept|reject`; undo with expected latest revision | transactional CAS; idempotent accept; compensating undo; proposal facts separate |

**HTTP 401 vs 403 vs 404:** choose a consistent resource-existence policy for guessed cross-owner IDs (often 404 externally to avoid enumeration), document it before tests; do not silently infer REST status from this blueprint. Use `409` only for genuine detected stale state and include safe expected/current revision metadata without leaking foreign manuscript. `Unknown after lost ACK` is **a client observation**, not proof DB rejected the commit. Request retries must produce same receipt when identical and never double-append.

### Chapter save atomicity and failure table

| Case | Required contract |
|---|---|
| Correct actor/book/chapter & `expectedRevision` | validate Tiptap JSON, commit accepted revision and advance current pointer in a **single transaction**, receipt only on durable success |
| Wrong actor/book/chapter | deny without data contents or accepted mutation; direct PostgREST also blocked |
| Stale expected revision / second tab | no overwrite, explicit recoverable conflict and current-version reference |
| Same idempotency key, identical payload and accepted outcome | same receipt, no duplicate revision |
| Same key but changed source/payload | explicit idempotency mismatch; no new write |
| Network drops after actual DB commit before reply | client marks **UNKNOWN**, resolves by server receipt lookup/replay, never “Saved” without confirmation |
| Invalid editor JSON / unsupported marks | predictable validation, preserve candidate and previous committed revision |
| Compensating Undo after intervening manual edits | refuse destructive inverse; author sees compare/reconcile |

**Order/revision coupling:** chapter reorder is not a manuscript-save update; do not tie identity to position. Valid accepted Tiptap schema/version changes require explicit migration/compatibility and historical document read support.


```
