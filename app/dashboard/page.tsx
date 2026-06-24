import Hero from "@/components/Hero";
import ChemSearch from "@/components/ChemSearch";
import Stats from "@/components/Stats";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <Hero />

      <section className="border-t border-white/10 py-20">

        <div className="max-w-6xl mx-auto px-6">

          <ChemSearch />

        </div>

      </section>

      <section className="border-t border-white/10 py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14">

            🚀 What can you do here?

          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="border border-white/10 rounded-2xl p-6">

              <h3 className="text-2xl font-bold mb-3">

                🔍 Search

              </h3>

              <p className="text-white/60">

                Instantly find any chemistry topic.

              </p>

            </div>

            <div className="border border-white/10 rounded-2xl p-6">

              <h3 className="text-2xl font-bold mb-3">

                🧠 Learn

              </h3>

              <p className="text-white/60">

                Study concepts for NEET, JEE, GATE and InChO.

              </p>

            </div>

            <div className="border border-white/10 rounded-2xl p-6">

              <h3 className="text-2xl font-bold mb-3">

                📚 Practice

              </h3>

              <p className="text-white/60">

                Solve PYQs and revise quickly.

              </p>

            </div>

            <div className="border border-white/10 rounded-2xl p-6">

              <h3 className="text-2xl font-bold mb-3">

                🏆 Master

              </h3>

              <p className="text-white/60">

                Build long-term chemistry mastery.

              </p>

            </div>

          </div>

        </div>

      </section>

      <section className="border-t border-white/10 py-20">

        <div className="max-w-6xl mx-auto px-6">

          <Stats />

        </div>

      </section>

      <footer className="border-t border-white/10 py-12 text-center text-white/40">

        SYNERGIC BOND — Chemistry Operating System

      </footer>

    </main>
  );
}