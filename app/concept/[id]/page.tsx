import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";

import JeeSection from "@/components/JeeSection";
import NeetSection from "@/components/NeetSection";
import OlympiadSection from "@/components/OlympiadSection";
import ResourcesSection from "@/components/ResourcesSection";

import AIChemistryEngine from "@/components/AIChemistryEngine";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO + AI */}
      <section className="flex flex-col gap-6">
        <Hero />

        {/* 🧠 AI CHEMISTRY ENGINE (MAIN FEATURE) */}
        <div className="px-6">
          <AIChemistryEngine />
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 border-t border-white/10">
        <Stats />
      </section>

      {/* JEE */}
      <section className="py-20 border-t border-white/10 px-6">
        <JeeSection />
      </section>

      {/* NEET */}
      <section className="py-20 border-t border-white/10 px-6">
        <NeetSection />
      </section>

      {/* OLYMPIAD */}
      <section className="py-20 border-t border-white/10 px-6">
        <OlympiadSection />
      </section>

      {/* RESOURCES */}
      <section className="py-20 border-t border-white/10 px-6">
        <ResourcesSection />
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-white/10 text-center text-white/40">
        SYNERGIC BOND — AI Chemistry Learning OS
      </footer>

    </main>
  );
}