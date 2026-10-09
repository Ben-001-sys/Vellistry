---
id: VEL-PROJECT-001
type: project-definition
status: draft
created_at: 2026-10-08
updated_at: 2026-10-08
owner: project_owner
version: 0.1.1
sources:
  - SRC-001
  - SRC-002
  - SRC-003
---

# Vellistry — Project Definition

## Working identity
Vellistry is the working name for a proposed author-controlled fiction writing, editing, design, and publishing application with optional AI assistance.

## Product intent
The application should be useful as a conventional manuscript editor even without AI, while enabling writers to guide AI through visual, scoped instructions and supporting the long-term continuity of novels and series.

## Research themes
- Author-focused rich-text and manuscript editing.
- Visual AI instruction/rule configuration, with scoped application and contextual rather than rigid stylistic guidance.
- User-controlled AI provider/API connectivity and separately specified MCP interoperability.
- Character, canon, continuity, plot, and story-state support.
- Authorial-voice preservation and quality assessment.
- Book layout, covers, export, and print/publishing workflows.
- Usability, legal licensing, costs, security, privacy, and portability.

## Scope and boundaries
Fiction and book-writing workflows are the primary focus. Other writing use cases may be evaluated, but are not automatically in scope.

**Accepted manuscript editor foundation:** Tiptap 3 built on ProseMirror ([ADR-0003](docs/decisions/ADR-0003-use-tiptap-3-prosemirror-for-manuscript-editor.md)). The open-source editor core is the selected technology; this approval does not extend to Tiptap's paid pagination/conversion offerings. The broader **Next.js + NestJS + Supabase** implementation baseline was subsequently authorized by the owner and is separately proposed for repository integration in PR #28 (ADR-0006). This editor ADR does not itself approve that stack or its production deployment. Publishing/export platform, AI provider, and paid features remain separate decisions.

## Governance
The engineering knowledge base will be versioned in the same Git repository as the future app. The user's manuscript data, credentials, and runtime settings will not automatically be committed to this repository.

See [PROJECT-CONSTITUTION.md](PROJECT-CONSTITUTION.md), [SOURCE-OF-TRUTH.md](SOURCE-OF-TRUTH.md), and [CURRENT-STATE.md](CURRENT-STATE.md).
