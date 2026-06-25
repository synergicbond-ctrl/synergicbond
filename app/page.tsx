import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen flex flex-col">
      {/* Sticky Header Navigation */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">⚛️ SYNERGIC BOND</h1>
          </div>
          <div className="hidden gap-8 text-sm md:flex">
            <Link href="/" className="hover:text-white/70 transition">Home</Link>
            <Link href="/jee" className="hover:text-white/70 transition">JEE</Link>
            <Link href="/neet" className="hover:text-white/70 transition">NEET</Link>
            <Link href="/olympiads" className="hover:text-white/70 transition">Olympiads</Link>
            <Link href="/resources" className="hover:text-white/70 transition">Resources</Link>
            <Link href="/donate" className="hover:text-white/70 transition">Donate</Link>
          </div>
        </div>
      </nav>

      {/* Hero Banner Section (min-h-[85vh], py-20, px-6) */}
      <section className="min-h-[85vh] flex items-center justify-center px-6 py-20 w-full">
        <div className="max-w-6xl mx-auto text-center w-full">
          <p className="uppercase tracking-[0.4em] text-white/40 mb-6 text-xs font-normal">SYNERGIC BOND</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
            The Chemistry<br />Operating System
          </h1>
          <p className="mt-8 text-xl text-white/70 font-normal tracking-wide">Search • Learn • Practice • Master</p>
          <p className="mt-3 text-lg text-white/50 font-normal tracking-wide">One platform for NEET, JEE, GATE & InChO</p>
          
          <div className="mt-12 flex justify-center gap-4 flex-wrap">
            <Link className="px-8 py-4 bg-white text-black rounded-2xl font-semibold hover:scale-105 transition duration-300 text-sm cursor-pointer" href="/chapter/atomic-structure">
              🚀 Start Learning
            </Link>
            <Link className="px-8 py-4 border border-white/20 rounded-2xl hover:bg-white/10 transition duration-300 text-sm text-white cursor-pointer" href="/vault">
              🧪 Explore Vault
            </Link>
          </div>

          {/* Exam Matrix Grid (gap-5) */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-5">
            <div className="border border-white/10 rounded-2xl p-5">
              <h3 className="text-2xl font-bold mb-2">🟢 NEET</h3>
              <p className="text-white/50 text-sm font-normal">NCERT-focused preparation</p>
            </div>
            <div className="border border-white/10 rounded-2xl p-5">
              <h3 className="text-2xl font-bold mb-2">🟡 JEE</h3>
              <p className="text-white/50 text-sm font-normal">Advanced problem solving</p>
            </div>
            <div className="border border-white/10 rounded-2xl p-5">
              <h3 className="text-2xl font-bold mb-2">🟠 GATE</h3>
              <p className="text-white/50 text-sm font-normal">Deep theoretical chemistry</p>
            </div>
            <div className="border border-white/10 rounded-2xl p-5">
              <h3 className="text-2xl font-bold mb-2">🔴 InChO</h3>
              <p className="text-white/50 text-sm font-normal">Olympiad-level mastery</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Chemistry Engine Input (px-6, mt-10) */}
      <div className="px-6 mt-10 max-w-4xl mx-auto w-full mb-16">
        <div className="p-6 border border-white/10 rounded-xl bg-white/5">
          <h2 className="text-xl font-bold mb-4 tracking-tight">AI Chemistry Engine</h2>
          <div className="flex gap-2">
            <input className="flex-1 p-2 bg-white/5 border border-white/10 rounded text-white text-sm outline-none placeholder:text-white/30" placeholder="Search chemistry topic..." />
            <button className="px-4 py-2 bg-white text-black rounded text-sm font-semibold cursor-pointer">Search</button>
          </div>
        </div>
      </div>

      {/* Analytics Resource Tiers (py-16, gap-6) */}
      <section className="py-16 border-t border-white/10 w-full bg-black">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-7xl mx-auto px-6">
          <div>
            <h3 className="text-3xl font-bold tracking-tight">10K+</h3>
            <p className="text-white/60 text-sm mt-1">Resources</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold tracking-tight">500+</h3>
            <p className="text-white/60 text-sm mt-1">JEE Topics</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold tracking-tight">200+</h3>
            <p className="text-white/60 text-sm mt-1">Olympiad Problems</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold tracking-tight">24/7</h3>
            <p className="text-white/60 text-sm mt-1">Learning Access</p>
          </div>
        </div>
      </section>

      {/* JEE System Section (py-20, px-6, gap-6) */}
      <section className="py-20 border-t border-white/10 w-full bg-black">
        <section className="max-w-6xl mx-auto px-6 w-full">
          <h2 className="text-3xl font-bold tracking-tight">JEE CHEMISTRY</h2>
          <p className="text-white/60 mt-2 text-sm">Structured Chemistry preparation for JEE Main & Advanced</p>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div className="p-6 border border-white/10 rounded-xl">
              <h3 className="text-xl font-semibold">Organic Chemistry</h3>
              <p className="text-white/60 mt-2 text-sm">Mechanisms • Reactions • Named reactions</p>
            </div>
            <div className="p-6 border border-white/10 rounded-xl">
              <h3 className="text-xl font-semibold">Physical Chemistry</h3>
              <p className="text-white/60 mt-2 text-sm">Thermodynamics • Equilibrium • Kinetics</p>
            </div>
            <div className="p-6 border border-white/10 rounded-xl">
              <h3 className="text-xl font-semibold">Inorganic Chemistry</h3>
              <p className="text-white/60 mt-2 text-sm">Periodic Table • Bonding • Coordination compounds</p>
            </div>
          </div>
        </section>
      </section>

      {/* NEET System Section */}
      <section className="py-20 border-t border-white/10 w-full bg-black">
        <section className="max-w-6xl mx-auto px-6 w-full">
          <h2 className="text-3xl font-bold tracking-tight">NEET CHEMISTRY</h2>
          <p className="text-white/60 mt-2 text-sm">NCERT-based Chemistry preparation for NEET</p>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div className="p-6 border border-white/10 rounded-xl">
              <h3 className="text-xl font-semibold">Physical Chemistry</h3>
              <p className="text-white/60 mt-2 text-sm">Thermodynamics • Equilibrium • Electrochemistry</p>
            </div>
            <div className="p-6 border border-white/10 rounded-xl">
              <h3 className="text-xl font-semibold">Organic Chemistry</h3>
              <p className="text-white/60 mt-2 text-sm">Reactions • Biomolecules • Polymers</p>
            </div>
            <div className="p-6 border border-white/10 rounded-xl">
              <h3 className="text-xl font-semibold">Inorganic Chemistry</h3>
              <p className="text-white/60 mt-2 text-sm">Coordination • Periodic Table • Bonding</p>
            </div>
          </div>
        </section>
      </section>

      {/* Olympiad System Section */}
      <section className="py-20 border-t border-white/10 w-full bg-black">
        <section className="max-w-6xl mx-auto px-6 w-full">
          <h2 className="text-3xl font-bold tracking-tight">Olympiad CHEMISTRY</h2>
          <p className="text-white/60 mt-2 text-sm">International chemistry competition preparation system</p>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div className="p-6 border border-white/10 rounded-xl">
              <h3 className="text-xl font-semibold">INChO</h3>
              <p className="text-white/60 mt-2 text-sm">Indian National Chemistry Olympiad</p>
            </div>
            <div className="p-6 border border-white/10 rounded-xl">
              <h3 className="text-xl font-semibold">IChO</h3>
              <p className="text-white/60 mt-2 text-sm">International Chemistry Olympiad</p>
            </div>
            <div className="p-6 border border-white/10 rounded-xl">
              <h3 className="text-xl font-semibold">USNCO</h3>
              <p className="text-white/60 mt-2 text-sm">US National Chemistry Olympiad</p>
            </div>
          </div>
        </section>
      </section>

      {/* Resource Vault Section (py-28, px-8, gap-8) */}
      <section className="py-20 border-t border-white/10 w-full bg-black">
        <section className="mx-auto max-w-7xl px-8 py-28 w-full">
          <div className="mb-16">
            <h2 className="mb-4 text-5xl font-bold tracking-tight">📚 Resource Vault</h2>
            <p className="text-lg text-gray-400">Everything a chemistry student needs in one place.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="mb-4 text-2xl font-bold tracking-tight">📄 Papers</h3>
              <p className="text-gray-400 text-sm">JEE, NEET, NSEC, INChO, IChO</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="mb-4 text-2xl font-bold tracking-tight">📘 Books</h3>
              <p className="text-gray-400 text-sm">Physical, Organic and Inorganic Chemistry</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="mb-4 text-2xl font-bold tracking-tight">📝 Notes</h3>
              <p className="text-gray-400 text-sm">Chapter-wise revision notes</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="mb-4 text-2xl font-bold tracking-tight">📋 Assignments</h3>
              <p className="text-gray-400 text-sm">NCERT, JEE, Olympiad levels</p>
            </div>
          </div>
        </section>
      </section>

      {/* Footer System Label */}
      <section className="py-20 border-t border-white/10 text-center text-white/40 w-full bg-black text-xs tracking-[0.05em]">
        SYNERGIC BOND — Chemistry Learning OS (AI Powered)
      </section>
    </main>
  );
}
