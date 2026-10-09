---
id: VEL-RES-R05-20261008-001
type: research-finding
status: draft
created_at: 2026-10-08
updated_at: 2026-10-08
author: project-research
version: 0.1.0
sources:
  - "SRC-001 — author's research request for a commercially usable editor and Google-Docs-like functionality"
  - "Vellistry PROJECT.md and PRE-DEVELOPMENT-RESEARCH-REGISTER.md"
  - "Official documentation and upstream license pages linked below, accessed 2026-10-08"
related_research:
  - R05
  - R11
  - R12
  - R14
  - R16
related_decisions: []
---

# R05 — Fiction manuscript editor: license and feature feasibility scan

**Research status: FIRST-PASS OFFICIAL DOCUMENTATION STUDY; NO EDITOR SELECTED, LICENSE CLEARED, OR EDITOR BUILT.**
**As-of:** 2026-10-08.

## 1. Owner's requirements versus implementation suggestions

**User-source direction:** Vellistry should be a real, substantial authoring/editor application independently of AI; support rich editing and formatting of long-form book manuscripts, with Google Docs as a *quality/interaction reference*, not an exact licensed clone. Study a mature editor rather than rebuilding every editor primitive. Search for free/commercially usable software. Publishing/export and print-ready layout matter too.

**NOT owner-approved:** Tiptap, ProseMirror, Lexical, Slate, CKEditor, TinyMCE, Plate, a React framework, server runtime, collaboration engine, editor document schema, or any particular DOCX/EPUB/PDF converter. Vendor source claims and licenses are candidates requiring package-level and deployment-context review.

## 2. Critical distinction: editor engine ≠ full word processor ≠ book formatter

A rich-text editor controls typing, selections, structure, decorations, undo, paste and sometimes tables. That does **not** automatically provide:
- Reliable round-trip fidelity for DOCX files with styles, footnotes, comments, images, page numbers, headers and section breaks.
- Correct EPUB 3 output with semantic reflow, metadata, navigation, accessibility and retailer compatibility.
- Print-ready paginated PDF with trim size, margins/gutter, bleed, running headers, orphan/widow control, embedded fonts and print distributor compliance.
- Versioned AI rewrite proposals that preserve selections, marks, links, paragraphs, undo history and author-approved text.

Reedsy Studio's official book-formatting product offers EPUB and print PDF exports and print trim sizing, which is evidence of actual author expectations—not a free source library Vellistry is entitled to copy. Reference: https://reedsy.com/studio/format-a-book/ and https://reedsy.com/studio/.

## 3. Candidate license / feature comparison

| Candidate | Official primary-source licensing evidence | Editing capabilities / relevant trade-off | Publishing/export caveat | Classification |
|---|---|---|---|---|
| **ProseMirror (underlying toolkit)** | Individual core packages such as `prosemirror-state` and `prosemirror-collab` use **MIT**. https://github.com/ProseMirror/prosemirror-state/blob/master/LICENSE and https://github.com/ProseMirror/prosemirror-collab/blob/master/LICENSE | Very flexible structured document/state toolkit. Substantial app UI, editing behaviors, chapter/navigation and production hardening remain to be supplied or sourced. | A rich-document schema is not itself a certified DOCX/EPUB/PDF pipeline. | PERMISSIVE CORE; packages and extras separately audited. |
| **Tiptap Editor Core (ProseMirror-based)** | Open-source editor is **MIT**, with separate paid Pro features: https://github.com/ueberdosis/tiptap and https://github.com/ueberdosis/tiptap-docs/blob/main/src/content/editor/getting-started/overview.mdx | Headless extension-based editor, flexible menus and editor integrations. Strong candidate for a prototype, **not selected**. | **Pages** is a Team-plan Pro package; **Conversion** is a subscription Pro package; DOCX/PDF export extensions are separately gated. https://tiptap.dev/docs/pages/getting-started/overview and https://tiptap.dev/docs/conversion/getting-started/overview | PERMISSIVE CORE / PAID DOCUMENT SERVICES. |
| **Lexical** | Upstream project states **MIT**: https://github.com/facebook/lexical | Rich-text, tables, lists, history, plugins, JSON/Markdown/HTML serialization, accessibility and Yjs collaboration patterns documented; still requires app-specific UX and validation. | Native serialization must not be confused with faithful DOCX/EPUB/print exports. | PERMISSIVE FRAMEWORK / EXPORT PIPELINE OPEN. |
| **Slate** | Upstream project states **MIT**: https://github.com/ianstormtaylor/slate | React-centered, deeply customizable editor toolkit with plugin-based behaviors. Investigate selection/IME stability and long-document editor ergonomics in a trial. | No complete book-production pipeline evidenced merely by editor-core license. | PERMISSIVE FRAMEWORK / TRIAL NEEDED. |
| **Plate (Slate-related editing framework)** | Monorepo root declares `MIT`: https://github.com/udecode/plate/blob/main/package.json | Potentially useful assembled editor patterns, but root license is not proof that every copied component or third-party package is identically licensed. | Validate individual installed package versions and paid offerings; do not confuse the visual demo with tested DOCX/PDF output. | SOURCE/LICENSE AUDIT NEEDED. |
| **CKEditor 5** | Official dual license **GPL 2+ or commercial**, with commercial and premium distinctions: https://ckeditor.com/docs/ckeditor5/latest/getting-started/licensing/license-and-legal.html and https://ckeditor.com/legal/ckeditor-licensing-options/ | Mature document editor feature ecosystem; may reduce work for office-like UI, depending on budget and integration. | Premium Word import/export, PDF export, pagination and some collaboration features can require paid licensing/services. A free commercial CDN tier exists with usage/feature limits, not unrestricted commercial self-hosting. https://ckeditor.com/docs/ckeditor5/latest/getting-started/licensing/license-key-and-activation.html | COMMERCIAL LICENSE REVIEW GATE. |
| **TinyMCE 8** | Official docs say **GPL 2+ or commercial** and require a license key for self-hosting; **commercial self-hosting requires an additional commercial key-manager addon**. https://www.tiny.cloud/docs/tinymce/latest/license-key/ | Familiar rich-text UI and plugins; the fit for very long novels and compositional revision needs hands-on testing. | Dedicated export/import services and premium plugins are not automatically included in a free editor. | COMMERCIAL LICENSE REVIEW GATE. |

**Important nuance:** GPL software may be usable in commercial projects under applicable obligations, but it is **not equivalent** to permission to embed it in any closed-source commercial SaaS without considering distribution, server-side use, license conditions and the vendor's specific terms. No legal determination is made here. Conversely, MIT core licensing does not automatically cover commercial Pro extensions, SaaS conversion services or all dependencies.

## 4. Official Tiptap and CKEditor capability boundaries observed

- Tiptap's **Pages** product is labeled a subscription **Team-plan** beta and covers visual pages, headers/footers, margins, breaks and zoom. This does not mean open-source Tiptap alone provides that full workflow. https://tiptap.dev/docs/pages/getting-started/overview.
- Tiptap's **Conversion** feature is separately subscription-gated and advertises DOCX/Markdown import plus DOCX/PDF/ODT/EPUB/Markdown export. ConvertKit/schema extensions and conversion fidelity limitations matter; some target formats pass through DOCX before conversion. https://tiptap.dev/docs/conversion/getting-started/overview and https://tiptap.dev/docs/conversion/getting-started/feature-support-matrix.
- Tiptap's Pro DOCX extension can be used client-side or server-side; its PDF export documentation describes its cloud conversion service, entitlement requirements and limitations (including differences between PDF and Word rendering). https://tiptap.dev/docs/conversion/export/docx/editor-extension and https://tiptap.dev/docs/conversion/export/pdf/editor-extension.
- CKEditor 5's official license page enumerates Word/PDF conversion, collaboration and other premium features separately. Word export is documented as sending HTML/styles to a conversion service. Pagination has its own feature restrictions and known limitations for matching imported Word pages. https://ckeditor.com/docs/ckeditor5/latest/features/converters/export-word.html and https://ckeditor.com/docs/ckeditor5/latest/features/pagination/pagination.html.
- Current deployment limits/prices/feature bundles can change; verify an actual quoted plan and its applicable commercial terms before implementing any candidate.

## 5. Proposed Vellistry editor acceptance trial — compare evidence, do not choose yet

| Test ID | Author workflow | What should be measured | Initial scope |
|---|---|---|---|
| E05-01 | Open, navigate and write a 100k-word novel with chapters and scenes | Responsiveness, typing latency, selection stability, load and search performance | Framework trial |
| E05-02 | Rich formatting incl. headings, emphasis, indents, scenes, ornaments, quotes, lists, links | Formatting persistence over save/load, undo, clipboard | Framework trial |
| E05-03 | Paste mixed formatting from Microsoft Word and Google Docs | Lost styles, malformed paragraphs, invalid nodes, sanitization | Framework trial |
| E05-04 | Import DOCX containing section breaks, comments, footnotes, images | Loss report and round-trip semantic/visual fidelity | Conversion investigation |
| E05-05 | Export editable DOCX, then re-import and compare | Semantics and styles, notes, comments, expected exceptions | Conversion investigation |
| E05-06 | Export EPUB 3 and validate with EPUBCheck, screen reader/navigation sample | Document structure, TOC, typography adaptability, warnings | Publishing investigation |
| E05-07 | Export a print interior PDF with trim/gutter/headers and inspect against a POD spec | Pagination, embedded fonts, print dimensions and consistency | Publishing investigation |
| E05-08 | Apply/reject an AI suggested rewrite across text with italic/bold/comments | No silent overwrite, correct range mapping, history/undo and diff behavior | R10 editor integration |
| E05-09 | Refresh/reopen during offline or interrupted writes | Recovery, conflict UI and content-loss rate | R16/storage separate |
| E05-10 | Keyboard-only and screen-reader editing with common commands | Accessibility barriers, focus, announcements, selection and zoom | R16 usability |
| E05-11 | Move, merge and split chapters with cross-referenced notes | Accurate structure, heading navigation and context links | Long-form UX |
| E05-12 | Evaluate commercial redistribution/SaaS scenario for every plugin | Package/version license, premium dependencies, service terms and actual cost | Legal/commercial gate |

### Fair comparison method

- Start with **two or three representative candidates** only after the owner approves a bounded technical *trial*, not a stack decision. Tiptap, Lexical and CKEditor form a plausible *example* contrast (permissive headless core, another extensible engine, and feature-rich commercial solution); do not treat this as a selected shortlist.
- Use identical fixture manuscripts (including extreme chapter lengths, Unicode, mixed punctuation, tables, inline images, and footnotes). Never claim a full novel is supported after testing a short sample.
- Separate **free/core feature**, **extension cost**, **external service cost**, **build effort**, and **publishing quality** instead of scoring one 'best' vendor label.
- Quantify actual app integration tasks and performance, not only demos or market popularity. Log browser versions and fixture hashes.
- Judge import/export independently of editing: authors need usable manuscripts and stable typography, but one engine can pair with multiple unchosen conversion approaches.

## 6. Open blockers and non-decisions

1. Whether Vellistry will be proprietary/commercial SaaS, open source or mixed licensing; necessary for final GPL/commercial analysis.
2. Exactly which editorial features are launch-critical versus later professional/publishing features (track changes, live collaboration, footnotes, citation, comments, page layout).
3. Imported Word file rights and author privacy/security expectations for conversion services.
4. Large-document performance and fidelity remain **unbenchmarked**.
5. Open-source EPUB/print layout pipeline feasibility and font embedding/licensing remain **unverified** in this study.
6. Publishing-provider production constraints and retailer compatibility need separate R12 source-backed investigation.
7. Model-assisted text proposals (R10) require editor selection/range mapping evidence but no selection is approved.
8. Exact Tiptap/TinyMCE/CKEditor plan pricing and license covenants must be reconfirmed for any intended deployment.

## 7. Verdict

- **Research-complete for initial documented license categorization**, not proof of commercial clearance or professional capability.
- **Good candidates for further experiments:** permissively licensed underlying editor frameworks and commercial feature-rich editors can both be evaluated. No preferred stack selected.
- **Highest-risk shortcut:** promising Google Docs-quality editing *and* print-ready EPUB/PDF/DOCX from a free rich-text engine without separate, validated document-production work.
- **Next bounded task:** obtain a test harness with 100k-word synthetic manuscript fixtures and representative DOCX examples, then compare editing, selection preservation and export outcomes with consistent metrics. Any paid subscriptions or proprietary data require owner approval.

**NO IMPLEMENTATION FRAMEWORK, EDITOR ENGINE, PUBLISHING CONVERTER, MODEL PROVIDER, DATABASE, HOSTING, COMMERCIAL LICENSE, OR MVP FEATURE SET SELECTED.**
