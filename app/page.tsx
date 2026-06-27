import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import KnowledgeVault from "@/components/KnowledgeVault";
import AIChemistryEngine from "@/components/AIChemistryEngine";
import Stats from "@/components/Stats";
import JeeSection from "@/components/JeeSection";
import NeetSection from "@/components/NeetSection";
import OlympiadSection from "@/components/OlympiadSection";
import ResourcesSection from "@/components/ResourcesSection";
import ExamCenter from "@/components/ExamCenter";
import ReferenceBooks from "@/components/ReferenceBooks";
import Testimonials from "@/components/Testimonials";
import AboutVision from "@/components/AboutVision";
import Donation from "@/components/Donation";
import FAQ from "@/components/FAQ";
import ContactFeedback from "@/components/ContactFeedback";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white">
      <Navbar />

      <Hero />

      <section className="py-20">
        <KnowledgeVault />
      </section>

      <section className="border-t border-white/[0.06] py-16">
        <Stats />
      </section>

      <section className="border-t border-white/[0.06] py-20">
        <JeeSection />
      </section>

      <section className="border-t border-white/[0.06] py-20">
        <NeetSection />
      </section>

      <section className="border-t border-white/[0.06] py-20">
        <OlympiadSection />
      </section>

      <section className="border-t border-white/[0.06] py-20">
        <ResourcesSection />
      </section>

      <section className="border-t border-white/[0.06] py-20">
        <ExamCenter />
      </section>

      <section className="border-t border-white/[0.06] py-20">
        <ReferenceBooks />
      </section>

      <section className="border-t border-white/[0.06] py-20">
        <Testimonials />
      </section>

      <AboutVision />

      <section className="border-t border-white/[0.06] py-20">
        <Donation />
      </section>

      <section className="border-t border-white/[0.06]">
        <FAQ />
      </section>

      <section className="border-t border-white/[0.06]">
        <ContactFeedback />
      </section>

      <Footer />
    </main>
  );
}
