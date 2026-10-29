"use client";
/** TEST ONLY. Mount only in an owned transient loopback route, never a production app route. */
import React, {useCallback, useEffect, useRef, useState} from "react";
import {BookWorkspaceOrganizer} from "../../apps/web/src/components/workspace/book-workspace-organizer";
import {ManuscriptWorkspace} from "../../apps/web/src/components/editor/manuscript-editor";
import {createWorkspaceSession, type WorkspaceSession} from "../../apps/web/src/lib/workspace/book-workspace-session";
import {createSyntheticWorkspace} from "../fixtures/book-workspace-synthetic";

export default function EditorFixture() {
  const actor = useRef<string | null>("author-a");
  const fail = useRef(false);
  const readOwner = useCallback(async () => { if (fail.current) throw new Error("Synthetic verification failure"); return actor.current; }, []);
  const [adapter] = useState(createSyntheticWorkspace);
  const [workspace, setWorkspace] = useState<WorkspaceSession | null>(null);
  useEffect(() => {
    const current = createWorkspaceSession({port: adapter.port, readOwner}); setWorkspace(current);
    void current.openBook("book-a"); return () => current.dispose();
  }, [adapter, readOwner]);
  if (!workspace) return <main>Preparing synthetic workspace...</main>;
  return <main className="mx-auto max-w-7xl space-y-4 p-4">
    <h1 className="text-2xl">Synthetic manual editor preview</h1>
    <p>No real accounts, credentials, server persistence or AI calls. Text exists only in this preview session.</p>
    <nav aria-label="Synthetic fixture controls" className="flex flex-wrap gap-2">
      <button onClick={() => {actor.current = "author-a"; fail.current = false; void workspace.openBook("book-a");}}>Use Author A</button>
      <button onClick={() => {actor.current = "author-b"; fail.current = false; void workspace.openBook("book-b");}}>Use Author B</button>
      <button onClick={() => {actor.current = null; void workspace.refresh();}}>Use signed-out identity</button>
      <button onClick={() => {fail.current = true; void workspace.refresh();}}>Fail identity verification</button>
      <button onClick={() => adapter.fault("unknown-before-commit")}>Make next result unknown</button>
      <button onClick={() => { void workspace.checkOutcome(); }}>Check synthetic result</button>
    </nav>
    <div className="grid min-w-0 gap-5 lg:grid-cols-[minmax(18rem,1fr)_minmax(0,2fr)]">
      <BookWorkspaceOrganizer session={workspace}/>
      <ManuscriptWorkspace workspace={workspace} readOwner={readOwner}/>
    </div>
  </main>;
}
