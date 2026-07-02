import HomeHero from "@/components/HomeHero";
import WhatIsSynergicBond from "@/components/home/WhatIsSynergicBond";
import ControlCenter from "@/components/ControlCenter";
import { fetchControlCenterProgress } from "@/lib/controlCenterData";
import KnowledgeVault from "@/components/KnowledgeVault";
import Stats from "@/components/Stats";
import JeeSection from "@/components/JeeSection";
import NeetSection from "@/components/NeetSection";
import OlympiadSection from "@/components/OlympiadSection";
import ResourcesSection from "@/components/ResourcesSection";
import ExamCenter from "@/components/ExamCenter";
import InternationalRoadmap from "@/components/InternationalRoadmap";
import ReferenceBooks from "@/components/ReferenceBooks";
import Testimonials from "@/components/Testimonials";
import NewsSidebar from "@/components/NewsSidebar";
import Donation from "@/components/Donation";
import FAQ from "@/components/FAQ";
import ContactFeedback from "@/components/ContactFeedback";
import Footer from "@/components/Footer";

export default async function Home() {
  const progress = await fetchControlCenterProgress();

  return (
    <main className="min-h-screen bg-[#0B0F19] text-white">

      <HomeHero />

      <WhatIsSynergicBond />

      <ControlCenter progress={progress} />

      <section className="py-10">
        <KnowledgeVault />
      </section>

      <section className="border-t border-white/[0.06] py-10">
        <Stats />
      </section>

      <section className="border-t border-white/[0.06] py-10">
        <JeeSection />
      </section>

      <section className="border-t border-white/[0.06] py-10">
        <NeetSection />
      </section>

      <section className="border-t border-white/[0.06] py-10">
        <OlympiadSection />
      </section>

      <section className="border-t border-white/[0.06] py-10">
        <ResourcesSection />
      </section>

      <section className="border-t border-white/[0.06] py-10">
        <ExamCenter />
      </section>

      <section className="border-t border-white/[0.06] py-10">
        <InternationalRoadmap />
      </section>

      <section className="border-t border-white/[0.06] py-10">
        <ReferenceBooks />
      </section>

      {/* Latest Operations Hub — news/blogs sidebar layout */}
      <section className="border-t border-white/[0.06] py-10">
        <div className="mx-auto max-w-7xl px-6 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          <div className="rounded-3xl bg-[#111827] border border-white/[0.06] p-8 flex flex-col justify-center">
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-300 mb-3">Stay Ahead</p>
            <h2 className="text-3xl font-black text-white mb-3">Never Miss an Exam Update</h2>
            <p className="text-white/70 text-sm leading-relaxed">
              Registration windows, syllabus changes, and high-yield strategy blogs — tracked live in the Operations Hub. Bookmark this page so you&apos;re always a step ahead of every deadline.
            </p>
          </div>
          <NewsSidebar />
        </div>
      </section>

      <section className="border-t border-white/[0.06] py-10">
        <Testimonials />
      </section>

      <section className="border-t border-white/[0.06] py-10">
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
