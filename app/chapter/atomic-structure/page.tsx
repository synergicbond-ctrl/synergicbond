export default function Home() {
  return (
    <main className="bg-black text-white">
      <section className="min-h-screen flex flex-col">
        {/* Navigation Bar */}
        <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">⚛️ SYNERGIC BOND</h1>
            </div>
            <div className="hidden gap-8 text-sm md:flex">
              <a href="#">Home</a>
              <a href="#">JEE</a>
              <a href="#">NEET</a>
              <a href="#">Olympiads</a>
              <a href="#">Resources</a>
              <a href="#">Donate</a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="min-h-[85vh] flex items-center justify-center px-6 py-20">
          <div className="max-w-6xl mx-auto text-center">
            <p className="uppercase tracking-[0.4em] text-white/40 mb-6">SYNERGIC BOND</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              The Chemistry<br />Operating System
            </h1>
            <p className="mt-8 text-xl text-white/70">Search • Learn • Practice • Master</p>
            <p className="mt-3 text-lg text-white/50">One platform for NEET, JEE, GATE & InChO</p>
            
            <div className="mt-12 flex justify-center gap-4 flex-wrap">
              <a className="px-8 py-4 bg-white text-black rounded-2xl font-semibold hover:scale-105 transition duration-300 cursor-pointer" href="/dashboard">
                🚀 Start Learning
              </a>
              <a className="px-8 py-4 border border-white/20 rounded-2xl hover:bg-white/10 transition duration-300 cursor-pointer" href="/vault">
                🧪 Explore Vault
              </a>
            </div>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-5">
              <div className="border border-white/10 rounded-2xl p-5">
                <h3 className="text-2xl font-bold mb-2">🟢 NEET</h3>
                <p className="text-white/50 text-sm">NCERT-focused preparation</p>
              </div>
              <div className="border border-white/10 rounded-2xl p-5">
                <h3 className="text-2xl font-bold mb-2">🟡 JEE</h3>
                <p className="text-white/50 text-sm">Advanced problem solving</p>
              </div>
              <div className="border border-white/10 rounded-2xl p-5">
                <h3 className="text-2xl font-bold mb-2">🟠 GATE</h3>
                <p className="text-white/50 text-sm">Deep theoretical chemistry</p>
              </div>
              <div className="border border-white/10 rounded-2xl p-5">
                <h3 className="text-2xl font-bold mb-2">🔴 InChO</h3>
                <p className="text-white/50 text-sm">Olympiad-level mastery</p>
              </div>
            </div>
          </div>
        </section>

        {/* AI Chemistry Engine */}
        <div className="px-6 mt-10">
          <div className="p-6 border border-white/10 rounded-xl">
            <h2 className="text-xl font-bold mb-4">AI Chemistry Engine</h2>
            <div className="flex gap-2">
              <input className="flex-1 p-2 bg-white/5 border border-white/10 rounded text-white outline-none" placeholder="Search chemistry topic..." />
              <button className="px-4 py-2 bg-white text-black rounded cursor-pointer">Search</button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-t border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <h3 className="text-3xl font-bold">10K+</h3>
            <p className="text-white/60 text-sm">Resources</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">500+</h3>
            <p className="text-white/60 text-sm">JEE Topics</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">200+</h3>
            <p className="text-white/60 text-sm">Olympiad Problems</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">24/7</h3>
            <p className="text-white/60 text-sm">Learning Access</p>
          </div>
        </div>
      </section>

      {/* JEE Section */}
      <section className="py-20 border-t border-white/10">
        <section className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold">JEE CHEMISTRY</h2>
          <p className="text-white/60 mt-2">Structured Chemistry preparation for JEE Main & Advanced</p>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div className="p-6 border border-white/10 rounded-xl">
              <h3 className="text-xl font-semibold">Organic Chemistry</h3>
              <p className="text-white/60 mt-2">Mechanisms • Reactions • Named reactions</p>
            </div>
            <div className="p-6 border border-white/10 rounded-xl">
              <h3 className="text-xl font-semibold">Physical Chemistry</h3>
              <p className="text-white/60 mt-2">Thermodynamics • Equilibrium • Kinetics</p>
            </div>
            <div className="p-6 border border-white/10 rounded-xl">
              <h3 className="text-xl font-semibold">Inorganic Chemistry</h3>
              <p className="text-white/60 mt-2">Periodic Table • Bonding • Coordination compounds</p>
            </div>
          </div>
        </section>
      </section>

      {/* NEET Section */}
      <section className="py-20 border-t border-white/10">
        <section className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold">NEET CHEMISTRY</h2>
          <p className="text-white/60 mt-2">NCERT-based Chemistry preparation for NEET</p>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div className="p-6 border border-white/10 rounded-xl">
              <h3 className="text-xl font-semibold">Physical Chemistry</h3>
              <p className="text-white/60 mt-2">Thermodynamics • Equilibrium • Electrochemistry</p>
            </div>
            <div className="p-6 border border-white/10 rounded-xl">
              <h3 className="text-xl font-semibold">Organic Chemistry</h3>
              <p className="text-white/60 mt-2">Reactions • Biomolecules • Polymers</p>
            </div>
            <div className="p-6 border border-white/10 rounded-xl">
              <h3 className="text-xl font-semibold">Inorganic Chemistry</h3>
              <p className="text-white/60 mt-2">Coordination • Periodic Table • Bonding</p>
            </div>
          </div>
        </section>
      </section>

      {/* Olympiad Section */}
      <section className="py-20 border-t border-white/10">
        <section className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold">Olympiad CHEMISTRY</h2>
          <p className="text-white/60 mt-2">International chemistry competition preparation system</p>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div className="p-6 border border-white/10 rounded-xl">
              <h3 className="text-xl font-semibold">INChO</h3>
              <p className="text-white/60 mt-2">Indian National Chemistry Olympiad</p>
            </div>
            <div className="p-6 border border-white/10 rounded-xl">
              <h3 className="text-xl font-semibold">IChO</h3>
              <p className="text-white/60 mt-2">International Chemistry Olympiad</p>
            </div>
            <div className="p-6 border border-white/10 rounded-xl">
              <h3 className="text-xl font-semibold">USNCO</h3>
              <p className="text-white/60 mt-2">US National Chemistry Olympiad</p>
            </div>
          </div>
        </section>
      </section>

      {/* Resource Vault */}
      <section className="py-20 border-t border-white/10">
        <section className="mx-auto max-w-7xl px-8 py-28">
          <div className="mb-16">
            <h2 className="mb-4 text-5xl font-bold">📚 Resource Vault</h2>
            <p className="text-lg text-gray-400">Everything a chemistry student needs in one place.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="mb-4 text-2xl font-bold">📄 Papers</h3>
              <p className="text-gray-400">JEE, NEET, NSEC, INChO, IChO</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="mb-4 text-2xl font-bold">📘 Books</h3>
              <p className="text-gray-400">Physical, Organic and Inorganic Chemistry</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="mb-4 text-2xl font-bold">📝 Notes</h3>
              <p className="text-gray-400">Chapter-wise revision notes</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="mb-4 text-2xl font-bold">📋 Assignments</h3>
              <p className="text-gray-400">NCERT, JEE, Olympiad levels</p>
            </div>
          </div>
        </section>
      </section>

      {/* Footer */}
      <section className="py-20 border-t border-white/10 text-center text-white/40">
        SYNERGIC BOND — Chemistry Learning OS (AI Powered)
      </section>
    </main>
  );
}
