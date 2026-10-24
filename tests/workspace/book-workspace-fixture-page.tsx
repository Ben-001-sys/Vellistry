"use client";
/** TEST ONLY: copied to a transient route in the disposable browser checkout. */
import {useEffect, useRef, useState} from "react";
import {BookWorkspaceOrganizer} from "@/components/workspace/book-workspace-organizer";
import {createWorkspaceSession} from "@/lib/workspace/book-workspace-session";
import {createSyntheticWorkspace} from "../fixtures/book-workspace-synthetic";

export default function WorkspaceFixture() {
  const actor = useRef<string | null>("author-a");
  const [identity, setIdentity] = useState("Author A");
  const failed = useRef(false);
  const [adapter] = useState(createSyntheticWorkspace);
  const [session] = useState(() => createWorkspaceSession({port: adapter.port,
    readOwner: async () => { if (failed.current) throw new Error("Synthetic identity failure"); return actor.current; }}));
  useEffect(() => { void session.openBook("book-a"); }, [session]);
  function switchActor(id: string | null, name: string) {
    failed.current = false; actor.current = id; setIdentity(name); void session.openBook("book-a");
  }
  return <main className="mx-auto max-w-4xl space-y-5 p-6">
    <h1 className="text-2xl">Synthetic workspace browser fixture</h1>
    <p>No real account or database connection. Current synthetic identity: {identity}.</p>
    <nav aria-label="Synthetic fixture controls" className="flex flex-wrap gap-2">
      <button onClick={() => switchActor("author-a", "Author A")}>Use Author A</button>
      <button onClick={() => switchActor("author-b", "Author B")}>Use Author B</button>
      <button onClick={() => switchActor(null, "Signed out")}>Use signed-out identity</button>
      <button onClick={() => { failed.current = true; void session.refresh(); }}>Fail identity verification</button>
      <button onClick={() => { void session.openBook("book-a"); }}>Open A book</button>
      <button onClick={() => { void session.openBook("book-b"); }}>Open B book</button>
      <button onClick={() => { void session.openBook("book-empty"); }}>Open empty book</button>
      <button onClick={() => adapter.fault("lost-reply")}>Lose next acknowledgement</button>
      <button onClick={() => adapter.fault("unknown-before-commit")}>Make next result unknown</button>
      <button onClick={() => adapter.pauseNext()}>Pause next change</button>
      <button onClick={() => adapter.release()}>Release paused change</button>
      <button onClick={() => adapter.externalChange("author-a", "book-a")}>Change A book elsewhere</button>
    </nav>
    <BookWorkspaceOrganizer session={session}/>
  </main>;
}
