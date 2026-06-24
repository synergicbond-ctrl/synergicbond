import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-[85vh] flex items-center justify-center px-6 py-20">

      <div className="max-w-6xl mx-auto text-center">

        <p className="uppercase tracking-[0.4em] text-white/40 mb-6">

          SYNERGIC BOND

        </p>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">

          The Chemistry
          <br />

          Operating System

        </h1>

        <p className="mt-8 text-xl text-white/70">

          Search • Learn • Practice • Master

        </p>

        <p className="mt-3 text-lg text-white/50">

          One platform for NEET, JEE, GATE & InChO

        </p>

        <div className="mt-12 flex justify-center gap-4 flex-wrap">

          <Link
            href="/dashboard"
            className="px-8 py-4 bg-white text-black rounded-2xl font-semibold hover:scale-105 transition duration-300"
          >

            🚀 Start Learning

          </Link>

          <Link
            href="/vault"
            className="px-8 py-4 border border-white/20 rounded-2xl hover:bg-white/10 transition duration-300"
          >

            🧪 Explore Vault

          </Link>

        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-5">

          <div className="border border-white/10 rounded-2xl p-5">

            <h3 className="text-2xl font-bold mb-2">

              🟢 NEET

            </h3>

            <p className="text-white/50 text-sm">

              NCERT-focused preparation

            </p>

          </div>

          <div className="border border-white/10 rounded-2xl p-5">

            <h3 className="text-2xl font-bold mb-2">

              🟡 JEE

            </h3>

            <p className="text-white/50 text-sm">

              Advanced problem solving

            </p>

          </div>

          <div className="border border-white/10 rounded-2xl p-5">

            <h3 className="text-2xl font-bold mb-2">

              🟠 GATE

            </h3>

            <p className="text-white/50 text-sm">

              Deep theoretical chemistry

            </p>

          </div>

          <div className="border border-white/10 rounded-2xl p-5">

            <h3 className="text-2xl font-bold mb-2">

              🔴 InChO

            </h3>

            <p className="text-white/50 text-sm">

              Olympiad-level mastery

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}