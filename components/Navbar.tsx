import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            ⚛️ SYNERGIC BOND
          </h1>
        </div>

        <div className="hidden gap-8 text-sm md:flex">
          <Link href="/" className="hover:text-white/70 transition">
            Home
          </Link>

          <Link href="/jee" className="hover:text-white/70 transition">
            JEE
          </Link>

          <Link href="/neet" className="hover:text-white/70 transition">
            NEET
          </Link>

          <Link href="/olympiads" className="hover:text-white/70 transition">
            Olympiads
          </Link>

          <Link href="/resources" className="hover:text-white/70 transition">
            Resources
          </Link>

          <Link href="/donate" className="hover:text-white/70 transition">
            Donate
          </Link>
        </div>
      </div>
    </nav>
  );
}