"use client";
import {useState,type FormEvent} from "react";
import Link from "next/link";
import {getBrowserSupabase} from "@/lib/supabase/browser";

export default function Login(){
 const [email,setEmail]=useState("");
 const [password,setPassword]=useState("");
 const [status,setStatus]=useState("");
 const [pending,setPending]=useState(false);
 async function submit(mode:"signin"|"signup"){
  if(!email.trim()||password.length<6){setStatus("Enter a valid email and a password of at least six characters.");return;}
  setPending(true);setStatus("");
  try{
   const auth=getBrowserSupabase().auth;
   const {error}=mode==="signin"
    ? await auth.signInWithPassword({email,password})
    : await auth.signUp({email,password});
   if(error)throw new Error(error.message);
   if(mode==="signin")window.location.assign("/books");
   else setStatus("Account requested. Check your email if confirmation is enabled.");
  }catch(err){setStatus(err instanceof Error?err.message:"Sign-in failed");}
  finally{setPending(false);}
 }
 return <main className="mx-auto max-w-md p-8 space-y-5">
  <h1 className="text-2xl font-semibold">Sign in to Vellistry</h1>
  <form className="space-y-4" onSubmit={(e:FormEvent)=>{e.preventDefault();void submit("signin");}}>
   <label className="block">Email
    <input className="mt-1 block w-full rounded border p-2" type="email" autoComplete="email" required value={email} onChange={e=>setEmail(e.target.value)}/>
   </label>
   <label className="block">Password
    <input className="mt-1 block w-full rounded border p-2" type="password" autoComplete="current-password" minLength={6} required value={password} onChange={e=>setPassword(e.target.value)}/>
   </label>
   <div className="flex gap-3">
    <button className="rounded bg-black px-4 py-2 text-white disabled:opacity-50" type="submit" disabled={pending}>Sign in</button>
    <button className="rounded border px-4 py-2 disabled:opacity-50" type="button" disabled={pending}
      onClick={()=>{void submit("signup");}}>Create account</button>
   </div>
  </form>
  <p aria-live="polite" role="status">{status}</p>
  <Link href="/">Back to home</Link>
 </main>;
}
