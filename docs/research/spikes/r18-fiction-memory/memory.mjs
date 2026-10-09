/**
 * R18 synthetic, pure-memory-context proof. NOT a production implementation.
 * No database, model call, HTTP, file IO, or dependency imports.
 */
export class MemoryError extends Error {
  constructor(code, message) { super(message); this.name = 'MemoryError'; this.code = code; }
}

function words(text) {
  return new Set(String(text).toLocaleLowerCase('en').match(/[\p{L}\p{N}]+/gu) ?? []);
}

export function assembleMemoryContext(state, request) {
  const { userId, bookId, sceneId, revisionId, povEntityId = null, query = '', maxEvidence = 4 } = request;
  if (!userId || !bookId || !sceneId || !revisionId) throw new MemoryError('BAD_REQUEST', 'Missing scope');
  if (!Number.isSafeInteger(maxEvidence) || maxEvidence < 0 || maxEvidence > 30) throw new MemoryError('BAD_REQUEST', 'Invalid evidence limit');
  const book = state.books.find(b => b.id === bookId);
  // Never distinguish missing and forbidden books to the requester.
  if (!book || book.ownerId !== userId) throw new MemoryError('BOOK_NOT_ACCESSIBLE', 'Book unavailable');
  const scene = state.scenes.find(s => s.bookId === bookId && s.id === sceneId);
  if (!scene) throw new MemoryError('SCENE_NOT_ACCESSIBLE', 'Scene unavailable');
  const chapter = state.chapters.find(c => c.bookId === bookId && c.id === scene.chapterId);
  if (!chapter) throw new MemoryError('INTEGRITY_ERROR', 'Scene chapter missing');
  if (chapter.currentRevisionId !== revisionId) throw new MemoryError('STALE_SOURCE_REVISION', 'Refresh manuscript before composing context');
  if (povEntityId && !state.entities.some(e => e.bookId === bookId && e.id === povEntityId && e.kind === 'character')) {
    throw new MemoryError('POV_NOT_ACCESSIBLE', 'POV character unavailable');
  }

  const warnings = [];
  const asOf = scene.storyTime;
  if (asOf == null) warnings.push('UNKNOWN_STORY_TIME');
  const currentRevisions = new Map(state.chapters.filter(c => c.bookId === bookId).map(c => [c.id, c.currentRevisionId]));
  const entities = new Map(state.entities.filter(e => e.bookId === bookId).map(e => [e.id, e]));
  const allowedSource = source => {
    if (!source) return true; // explicitly manual canon, not a model-derived citation
    if (source.bookId !== bookId) return false;
    return currentRevisions.get(source.chapterId) === source.revisionId;
  };
  const allowedPOV = event => {
    if (!povEntityId) return true;
    // No inferred knowledge from narrative order or presence in a scene.
    const acquired = event.knownBy?.find(k => k.entityId === povEntityId);
    return Boolean(acquired && asOf !== null && acquired.at <= asOf);
  };
  const allowedTime = event => asOf !== null && event.effectiveAt !== null && event.effectiveAt <= asOf;

  const approved = [];
  for (const event of state.events) {
    if (event.bookId !== bookId || event.status !== 'approved' || event.epistemic !== 'objective') continue;
    if (!entities.has(event.entityId)) continue;
    if (!allowedTime(event)) { warnings.push('TIME_EXCLUDED'); continue; }
    if (!allowedSource(event.source)) { warnings.push('STALE_FACT_EXCLUDED'); continue; }
    if (!allowedPOV(event)) { warnings.push('POV_EXCLUDED'); continue; }
    approved.push(event);
  }
  approved.sort((a,b) => a.effectiveAt - b.effectiveAt || a.sequence - b.sequence);
  const projection = new Map();
  for (const event of approved) projection.set(event.entityId + '\u001f' + event.attribute, event);
  const canon = [...projection.values()].sort((a,b) => a.entityId.localeCompare(b.entityId) || a.attribute.localeCompare(b.attribute))
    .map(event => ({entityId:event.entityId, attribute:event.attribute, value:event.value, eventId:event.id, source:event.source ?? null, effectiveAt:event.effectiveAt}));

  const queryTerms = words(query);
  const evidence = state.chunks.filter(c => {
    if (c.bookId !== bookId || currentRevisions.get(c.chapterId) !== c.revisionId) return false;
    if (c.status !== 'current') return false;
    if (asOf === null || c.storyTime === null || c.storyTime > asOf) return false;
    if (povEntityId && !c.knownTo?.some(k => k.entityId === povEntityId && k.at <= asOf)) return false;
    return true;
  }).map(c => {
    const terms = words(c.text);
    const score = [...queryTerms].reduce((n,t) => n + Number(terms.has(t)),0);
    return {...c,score};
  }).filter(c => c.score > 0)
    .sort((a,b) => b.score - a.score || a.storyTime - b.storyTime || a.id.localeCompare(b.id))
    .slice(0,maxEvidence)
    .map(c => ({chunkId:c.id,chapterId:c.chapterId,revisionId:c.revisionId,text:c.text,score:c.score,storyTime:c.storyTime}));

  const rules = state.rules.filter(r => r.bookId === bookId && r.enabled && (r.action === 'all' || r.action === request.action))
    .map(r => ({id:r.id,text:r.text}));
  return { bookId,sceneId,revisionId,asOf, povEntityId, canon, evidence, rules, warnings:[...new Set(warnings)].sort(),
    // Candidate AI proposals are intentionally NOT consulted by this function.
    status:'context-preview-only', remoteCalls:0 };
}
