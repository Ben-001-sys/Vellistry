import Link from "next/link";
export default function Home(){
 return <main className="mx-auto max-w-3xl p-8 space-y-5">
  <h1 className="text-3xl font-semibold">Vellistry</h1>
  <p>Write and organize your fiction. AI is optional.</p>
  <p>This is the first implementation foundation, not a public release.</p>
  <nav className="flex gap-5">
   <Link href="/login">Sign in</Link>
   <Link href="/books">Your books</Link>
  </nav>
 </main>;
}
