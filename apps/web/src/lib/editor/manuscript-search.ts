import {Extension} from "@tiptap/core";
import type {Node as ProseMirrorNode} from "@tiptap/pm/model";
import {Plugin, PluginKey} from "@tiptap/pm/state";
import {Decoration, DecorationSet} from "@tiptap/pm/view";

export type Match = Readonly<{from: number; to: number}>;
export type SearchState = Readonly<{query: string; matches: readonly Match[]}>;
export const manuscriptSearchKey = new PluginKey<SearchState>("vellistry-manuscript-search");
/** Literal, case-insensitive UTF-16 positions, across marks but never across textblocks. */
export function manuscriptMatches(doc: ProseMirrorNode, query: string): readonly Match[] {
  if (!query || query.length > 200) return [];
  const pattern = new RegExp(query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "giu");
  const matches: Match[] = [];
  doc.descendants((node, position) => {
    if (!node.isTextblock) return;
    const text = node.textBetween(0, node.content.size, "", "\n");
    for (const match of text.matchAll(pattern)) matches.push({from: position + 1 + match.index!, to: position + 1 + match.index! + match[0].length});
    return false;
  });
  return matches;
}
export function manuscriptWordCount(doc: ProseMirrorNode): number {
  const text = doc.textBetween(0, doc.content.size, "\n", "\n");
  return [...new Intl.Segmenter("en", {granularity: "word"}).segment(text)].filter(s => s.isWordLike).length;
}
export const ManuscriptSearch = Extension.create({
  name: "vellistryManuscriptSearch",
  addProseMirrorPlugins() {
    return [new Plugin<SearchState>({
      key: manuscriptSearchKey,
      state: {
        init: () => ({query: "", matches: []}),
        apply(transaction, previous) {
          const meta: unknown = transaction.getMeta(manuscriptSearchKey);
          const query = typeof meta === "string" && meta.length <= 200 ? meta : previous.query;
          return transaction.docChanged || query !== previous.query ? {query, matches: manuscriptMatches(transaction.doc, query)} : previous;
        },
      },
      props: {decorations(state) {
        const search = manuscriptSearchKey.getState(state);
        return DecorationSet.create(state.doc, (search?.matches ?? []).map(m => Decoration.inline(m.from, m.to,
          {class: "manuscript-search-match", style: "background-color:#ffe08a;color:#17202a"})));
      }},
    })];
  },
});
