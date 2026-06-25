import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AIChemistryEngine from "@/components/AIChemistryEngine";
import Stats from "@/components/Stats";
import JeeSection from "@/components/JeeSection";
import NeetSection from "@/components/NeetSection";
import OlympiadSection from "@/components/OlympiadSection";
import ResourcesSection from "@/components/ResourcesSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen flex flex-col">
      <Navbar />

      <Hero />

      <div className="px-6 mt-10 max-w-4xl mx-auto w-full mb-16">
        <AIChemistryEngine />
      </div>

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

      <section className="border-t border-white/10">
        <ResourcesSection />
      </section>

      <Footer />
    </main>
  );
}