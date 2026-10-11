"use client";
import Link from "next/link";
import {useEffect,useState} from "react";
import {libraryRegion} from "@/lib/library/book-library-state";
import {EXPECTED_USER_HEADER} from "@/lib/library/book-create-document";
import {createLibrarySession,type LibrarySession,type LibrarySessionSnapshot} from "@/lib/library/book-library-session";
import {getBrowserSupabase} from "@/lib/supabase/browser";

function createPageSession(): LibrarySession {
  return createLibrarySession({
    fetchBooks: (signal) => fetch("/api/books", {cache:"no-store", signal}),
    createBook: (title, ownerKey, signal) => fetch("/api/books", {
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        [EXPECTED_USER_HEADER]:ownerKey,
      },
      body:JSON.stringify({title}),
      cache:"no-store",
      signal,
    }),
    readOwner: async () => {
      const {data:{user}} = await getBrowserSupabase().auth.getUser();
      return user?.id ?? null;
    },
    signOut: async () => {
      const {error} = await getBrowserSupabase().auth.signOut();
      return {error:error != null};
    },
    goToLogin: () => { window.location.assign("/login"); },
  });
}

export default function Books(){
  const [session] = useState(createPageSession);
  const [snap,setSnap] = useState<LibrarySessionSnapshot>(() => session.snapshot());

  useEffect(() => session.subscribe(setSnap), [session]);

  useEffect(() => {
    let supabase: ReturnType<typeof getBrowserSupabase>;
    try {
      supabase = getBrowserSupabase();
    } catch {
      session.failConfiguration();
      return;
    }
    const detach = session.attachAuth((notify) => {
      const {data:{subscription}} = supabase.auth.onAuthStateChange((event, authSession) => {
        notify(event, authSession?.user?.id ?? null);
      });
      return () => {
        subscription.unsubscribe();
        session.dispose();
      };
    });
    return detach;
  }, [session]);

  const region = libraryRegion(snap.model);
  return <main className="mx-auto max-w-3xl p-8 space-y-5" aria-busy={region.phase === "loading"}>
    <header className="flex items-center justify-between gap-4">
      <h1 className="text-3xl font-semibold">Your books</h1>
      <Link href="/">Home</Link>
    </header>
    <form onSubmit={(event) => { event.preventDefault(); void session.submitCreate(); }} className="flex gap-3">
      <label className="grow" htmlFor="new-book-title">New book title
        <input id="new-book-title" className="mt-1 block w-full rounded border p-2" maxLength={120}
          value={snap.draftTitle} onChange={(event) => session.setDraftTitle(event.target.value)} required disabled={!region.canCreate}/>
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
      {region.showRefresh ? <button type="button" className="underline" onClick={() => { void session.refresh(); }}>Refresh</button> : null}
      {region.showRetry ? <button type="button" className="underline" onClick={() => { void session.refresh(); }}>Try again</button> : null}
      {region.showRiskRetry ? <button type="button" className="underline" onClick={() => { void session.retryUncertainCreate(); }}>Save again anyway</button> : null}
      <button type="button" className="underline" onClick={() => { void session.signOut(); }}>Sign out</button>
    </div>
  </main>;
}
