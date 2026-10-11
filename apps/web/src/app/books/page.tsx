"use client";
import Link from "next/link";
import {useEffect,useRef,useState,type FormEvent} from "react";
import {
  applyCreate,
  applyLoad,
  beginLoad,
  initialLibraryState,
  libraryRegion,
  type LibraryState,
} from "@/lib/library/book-library-state";
import {EXPECTED_USER_HEADER} from "@/lib/library/book-create-document";
import {getBrowserSupabase} from "@/lib/supabase/browser";

async function readOwnerKey(): Promise<string | null> {
  const {data:{user}} = await getBrowserSupabase().auth.getUser();
  return user?.id ?? null;
}

export default function Books(){
  const [model,setModel] = useState<LibraryState>(initialLibraryState);
  const [title,setTitle] = useState("");
  const modelRef = useRef(model);
  const generationRef = useRef(0);
  const ownerRef = useRef<string | null>(null);
  const loadAbortRef = useRef<AbortController | null>(null);
  const createAbortRef = useRef<AbortController | null>(null);
  modelRef.current = model;

  function commit(next: LibraryState){
    modelRef.current = next;
    setModel(next);
  }

  function startLoad(ownerKey: string | null){
    loadAbortRef.current?.abort();
    if (ownerRef.current !== ownerKey) createAbortRef.current?.abort();
    const controller = new AbortController();
    loadAbortRef.current = controller;
    const generation = generationRef.current + 1;
    generationRef.current = generation;
    ownerRef.current = ownerKey;
    const loading = beginLoad(modelRef.current, ownerKey, generation);
    commit(loading);
    if (ownerKey === null) {
      commit(applyLoad(loading, generation, null, {kind:"unauthorized"}));
      return;
    }
    void runLoad(ownerKey, generation, controller);
  }

  async function runLoad(ownerKey: string, generation: number, controller: AbortController){
    try {
      const response = await fetch("/api/books", {cache:"no-store", signal:controller.signal});
      if (controller.signal.aborted || generationRef.current !== generation || ownerRef.current !== ownerKey) return;
      if (response.status === 401) {
        commit(applyLoad(modelRef.current, generation, ownerKey, {kind:"unauthorized"}));
        return;
      }
      if (!response.ok) {
        commit(applyLoad(modelRef.current, generation, ownerKey, {kind:"error"}));
        return;
      }
      const payload: unknown = await response.json();
      const liveOwner = await readOwnerKey();
      if (controller.signal.aborted || generationRef.current !== generation || liveOwner !== ownerKey) return;
      commit(applyLoad(modelRef.current, generation, ownerKey, {kind:"ok", books:payload}));
    } catch {
      if (controller.signal.aborted || generationRef.current !== generation) return;
      commit(applyLoad(modelRef.current, generation, ownerKey, {kind:"error"}));
    }
  }

  async function reloadFromSession(){
    try {
      startLoad(await readOwnerKey());
    } catch {
      const generation = generationRef.current + 1;
      generationRef.current = generation;
      ownerRef.current = null;
      const loading = beginLoad(modelRef.current, null, generation);
      commit(applyLoad(loading, generation, null, {kind:"error"}));
    }
  }

  useEffect(() => {
    let active = true;
    let supabase: ReturnType<typeof getBrowserSupabase>;
    try {
      supabase = getBrowserSupabase();
    } catch {
      const generation = generationRef.current + 1;
      generationRef.current = generation;
      const loading = beginLoad(modelRef.current, null, generation);
      commit(applyLoad(loading, generation, null, {kind:"error"}));
      return;
    }
    const {data:{subscription}} = supabase.auth.onAuthStateChange((event, session) => {
      if (!active) return;
      const nextOwner = session?.user?.id ?? null;
      if (event === "TOKEN_REFRESHED" && nextOwner === ownerRef.current) return;
      if (event === "USER_UPDATED" && nextOwner === ownerRef.current) return;
      startLoad(nextOwner);
    });
    return () => {
      active = false;
      subscription.unsubscribe();
      loadAbortRef.current?.abort();
      createAbortRef.current?.abort();
    };
  }, []);

  async function create(event: FormEvent){
    event.preventDefault();
    const trimmed = title.trim();
    if (!trimmed) return;
    let ownerKey: string | null;
    try {
      ownerKey = await readOwnerKey();
    } catch {
      ownerKey = null;
    }
    if (ownerKey !== ownerRef.current) {
      startLoad(ownerKey);
      return;
    }
    const opened = requestCreate(modelRef.current, ownerKey);
    if (!opened.ok || !ownerKey) return;
    const generation = opened.state.createGeneration;
    if (generation === null) return;
    commit(opened.state);
    const controller = new AbortController();
    createAbortRef.current?.abort();
    createAbortRef.current = controller;
    try {
      const response = await fetch("/api/books", {
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          [EXPECTED_USER_HEADER]:ownerKey,
        },
        body:JSON.stringify({title:trimmed}),
        cache:"no-store",
        signal:controller.signal,
      });
      if (controller.signal.aborted || generation === null) return;
      const liveOwner = await readOwnerKey();
      if (generationRef.current !== generation || liveOwner !== ownerKey) {
        if (liveOwner !== ownerKey) startLoad(liveOwner);
        return;
      }
      if (response.status === 401) {
        commit(applyCreate(modelRef.current, generation, ownerKey, "unauthorized"));
        return;
      }
      if (response.status === 409) {
        commit(applyCreate(modelRef.current, generation, ownerKey, "session_changed"));
        return;
      }
      if (!response.ok) {
        commit(applyCreate(modelRef.current, generation, ownerKey, "error"));
        return;
      }
      setTitle("");
      commit(applyCreate(modelRef.current, generation, ownerKey, "ok"));
      startLoad(ownerKey);
    } catch {
      if (controller.signal.aborted || generation === null) return;
      if (generationRef.current !== generation || ownerRef.current !== ownerKey) return;
      commit(applyCreate(modelRef.current, generation, ownerKey, "error"));
    }
  }

  async function signOut(){
    loadAbortRef.current?.abort();
    createAbortRef.current?.abort();
    startLoad(null);
    try {
      await getBrowserSupabase().auth.signOut();
    } catch {
      // The list is already cleared. Leave for the sign-in page either way.
    }
    window.location.assign("/login");
  }

  const region = libraryRegion(model);
  return <main className="mx-auto max-w-3xl p-8 space-y-5" aria-busy={region.phase === "loading"}>
    <header className="flex items-center justify-between gap-4">
      <h1 className="text-3xl font-semibold">Your books</h1>
      <Link href="/">Home</Link>
    </header>
    <form onSubmit={(event) => {void create(event);}} className="flex gap-3">
      <label className="grow" htmlFor="new-book-title">New book title
        <input id="new-book-title" className="mt-1 block w-full rounded border p-2" maxLength={120}
          value={title} onChange={(event) => setTitle(event.target.value)} required disabled={!region.canCreate}/>
      </label>
      <button type="submit" disabled={!region.canCreate} className="self-end rounded border px-4 py-2">Create</button>
    </form>
    <p role="status" aria-live="polite">{region.status}</p>
    {region.emptyCopy ? <p>{region.emptyCopy}</p> : null}
    {region.showSignIn ? <Link href="/login">Sign in</Link> : null}
    {region.books.length > 0 ? <ul aria-label="Your books" className="space-y-2">
      {region.books.map((book) => <li key={book.id} className="rounded border p-3">{book.title}</li>)}
    </ul> : null}
    <div className="flex gap-4">
      {region.showRefresh ? <button type="button" className="underline" onClick={() => {void reloadFromSession();}}>Refresh</button> : null}
      {region.showRetry ? <button type="button" className="underline" onClick={() => {void reloadFromSession();}}>Try again</button> : null}
      <button type="button" className="underline" onClick={() => {void signOut();}}>Sign out</button>
    </div>
  </main>;
}
