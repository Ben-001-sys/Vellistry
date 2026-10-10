"use client";
import Link from "next/link";
import {useEffect,useState,type FormEvent} from "react";
import {getBrowserSupabase} from "@/lib/supabase/browser";

type Book={id:string;title:string;created_at:string;updated_at:string};
export default function Books(){
 const [books,setBooks]=useState<Book[]>([]);
 const [title,setTitle]=useState("");
 const [status,setStatus]=useState("Loading your books...");
 const [pending,setPending]=useState(false);
 async function load(){
  try{
   const response=await fetch("/api/books",{cache:"no-store"});
   if(response.status===401){setStatus("Please sign in to see your books.");return;}
   if(!response.ok)throw new Error("Books are unavailable");
   const data=await response.json() as Book[];
   setBooks(data);setStatus(data.length?"":"No books yet. Create your first book.");
  }catch{setStatus("Unable to load books. Check your local Supabase and API services.");}
 }
 useEffect(()=>{void load();},[]);
 async function create(event:FormEvent){
  event.preventDefault();
  if(!title.trim()||pending)return;
  setPending(true);
  try{
   const response=await fetch("/api/books",{method:"POST",
    headers:{"Content-Type":"application/json"},body:JSON.stringify({title:title.trim()})});
   if(!response.ok)throw new Error("Unable to create book");
   setTitle("");await load();
  }catch{setStatus("Could not save this book. Your title remains in the field.");}
  finally{setPending(false);}
 }
 return <main className="mx-auto max-w-3xl p-8 space-y-5">
  <header className="flex items-center justify-between">
   <h1 className="text-3xl font-semibold">Your books</h1>
   <Link href="/">Home</Link>
  </header>
  <form onSubmit={create} className="flex gap-3">
   <label className="grow">New book title
    <input className="mt-1 block w-full rounded border p-2" maxLength={120}
      value={title} onChange={event=>setTitle(event.target.value)} required/>
   </label>
   <button type="submit" disabled={pending} className="self-end rounded border px-4 py-2">Create</button>
  </form>
  <p role="status" aria-live="polite">{status}</p>
  <ul className="space-y-2">
   {books.map(book=><li key={book.id} className="rounded border p-3">{book.title}</li>)}
  </ul>
  <button className="underline" onClick={async()=>{await getBrowserSupabase().auth.signOut();window.location.assign("/login");}}>
   Sign out
  </button>
 </main>;
}
