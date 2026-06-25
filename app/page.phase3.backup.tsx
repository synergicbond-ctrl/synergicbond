import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HeroSearch from "@/components/home/HeroSearch";

import AIChemistryEngine from "@/components/AIChemistryEngine";
import Stats from "@/components/Stats";
import JeeSection from "@/components/JeeSection";
import NeetSection from "@/components/NeetSection";
import OlympiadSection from "@/components/OlympiadSection";
import ResourcesSection from "@/components/ResourcesSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <Hero />

      <HeroSearch />

      <section className="mx-auto w-full max-w-7xl px-6 py-12">
        <AIChemistryEngine />
      </section>

      <section className="border-t border-white/10 py-16">
        <Stats />
      </section>

      <section className="border-t border-white/10 py-20">
        <JeeSection />
      </section>

      <section className="border-t border-white/10 py-20">
        <NeetSection />
      </section>

      <section className="border-t border-white/10 py-20">
        <OlympiadSection />
      </section>

      <section className="border-t border-white/10 py-20">
        <ResourcesSection />
      </section>

      <Footer />

    </main>
  );
}