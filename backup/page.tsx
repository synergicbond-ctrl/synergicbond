import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import JeeSection from "../components/JeeSection";
import NeetSection from "../components/NeetSection";
import OlympiadSection from "../components/OlympiadSection";
import ResourcesSection from "../components/ResourcesSection";
import ChemSearch from "@/components/ChemSearch";

export default function Home() {
  return (
    <main className="bg-black text-white">

      <section className="min-h-screen flex flex-col">
        <Navbar />
        <Hero />
        <ChemSearch />
      </section>

      <section className="py-16 border-t border-white/10">
        <Stats />
      </section>

      <section className="py-20 border-t border-white/10">
        <JeeSection />
      </section>

      <section className="py-20 border-t border-white/10">
        <NeetSection />
      </section>

      <section className="py-20 border-t border-white/10">
        <OlympiadSection />
      </section>

      <section className="py-20 border-t border-white/10">
        <ResourcesSection />
      </section>

      <section className="py-20 border-t border-white/10 text-center text-white/40">
        SYNERGIC BOND — Chemistry Operating System (ChemOS)
      </section>

    </main>
  );
}