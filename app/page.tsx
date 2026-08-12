import type { ReactNode } from "react";
import HomeHero from "@/components/HomeHero";
import WhatIsSynergicBond from "@/components/home/WhatIsSynergicBond";
import ControlCenter from "@/components/ControlCenter";
import FloatingCTAs from "@/components/home/FloatingCTAs";
import { fetchControlCenterProgress } from "@/lib/controlCenterData";
import KnowledgeVault from "@/components/KnowledgeVault";
import Stats from "@/components/Stats";
import JeeSection from "@/components/JeeSection";
import NeetSection from "@/components/NeetSection";
import OlympiadSection from "@/components/OlympiadSection";
import ResourcesSection from "@/components/ResourcesSection";
import ExamCenter from "@/components/ExamCenter";
import InternationalRoadmap from "@/components/InternationalRoadmap";
import Testimonials from "@/components/Testimonials";
import NewsSidebar from "@/components/NewsSidebar";
import Donation from "@/components/Donation";
import FAQ from "@/components/FAQ";
import ContactFeedback from "@/components/ContactFeedback";
import Footer from "@/components/Footer";
import styles from "./HomeMulticolour.module.css";

/**
 * One rhythm for the whole page. The previous layout repeated an identical
 * `py-24 border-t` band fifteen times, which flattened everything into an
 * undifferentiated scroll; here weight varies and a mono label names each
 * region, so the page reads as a structured document rather than a stack.
 */
function Band({
  label,
  children,
  size = "md",
  divide = true,
  tone = "cyan",
}: {
  label?: string;
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  divide?: boolean;
  tone?: "cyan" | "gold" | "violet" | "green" | "coral";
}) {
  const pad =
    size === "lg" ? "py-24 md:py-32" : size === "sm" ? "py-12 md:py-16" : "py-16 md:py-24";

  return (
    <section
      className={`${styles.band} ${styles[`tone${tone[0].toUpperCase()}${tone.slice(1)}`]} ${pad}`}
      style={divide ? { borderTop: "1px solid color-mix(in srgb, var(--home-tone) 38%, var(--border))" } : undefined}
    >
      {label ? (
        <div className={`${styles.bandHeader} mx-auto mb-12 max-w-[1400px] px-6`}>
          <div className="flex items-center gap-3">
            <span
              aria-hidden
              className="h-[5px] w-[5px] shrink-0 rotate-45"
              style={{ background: "var(--home-tone)" }}
            />
            <span className="font-data text-[11px] uppercase tracking-[0.2em]">
              {label}
            </span>
            <span
              aria-hidden
              className="h-px flex-1"
              style={{ background: "color-mix(in srgb, var(--home-tone) 42%, var(--border))" }}
            />
          </div>
        </div>
      ) : null}
      {children}
    </section>
  );
}

export default async function Home() {
  const progress = await fetchControlCenterProgress();

  return (
    <main className={`${styles.home} min-h-screen overflow-x-hidden bg-[var(--background)] text-[var(--foreground)] antialiased`}>
      <HomeHero />

      <Band divide={false} tone="cyan">
        <WhatIsSynergicBond />
      </Band>

      <Band tone="violet">
        <ControlCenter progress={progress} />
      </Band>

      <Band tone="gold">
        <KnowledgeVault />
      </Band>

      <Band size="sm" tone="green">
        <Stats />
      </Band>

      {/* Programs — the four exam tracks read as one region rather than four
          interchangeable bands, separated internally by hairlines. */}
      <Band label="Programs" size="lg" tone="coral">
        <div className="space-y-20 md:space-y-28">
          <JeeSection />
          <div className="mx-auto max-w-[1400px] px-6">
            <div style={{ borderTop: "1px solid var(--border)" }} />
          </div>
          <NeetSection />
          <div className="mx-auto max-w-[1400px] px-6">
            <div style={{ borderTop: "1px solid var(--border)" }} />
          </div>
          <OlympiadSection />
          <div className="mx-auto max-w-[1400px] px-6">
            <div style={{ borderTop: "1px solid var(--border)" }} />
          </div>
          <InternationalRoadmap />
        </div>
      </Band>

      <Band label="Resources" tone="cyan">
        <ResourcesSection />
      </Band>

      <Band label="Exam centre" tone="violet">
        <ExamCenter />
      </Band>

      <Band label="Operations hub" tone="gold">
        <div className="mx-auto grid max-w-[1400px] gap-8 px-6 lg:grid-cols-[1.6fr_1fr]">
          <div
            className="flex flex-col justify-center rounded-[var(--radius)] p-8"
            style={{
              border: "1px solid var(--border)",
              background: "var(--surface)",
            }}
          >
            <span className="font-data text-[11px] uppercase tracking-[0.2em] text-[var(--text-muted)]">
              Stay ahead
            </span>
            <h2 className="font-display mt-3 text-[30px] font-semibold leading-tight tracking-[-0.02em] text-[var(--foreground)]">
              Never miss an exam update
            </h2>
            <p className="mt-3 max-w-[var(--measure)] text-[15px] leading-relaxed text-[var(--text-body)]">
              Registration windows, syllabus changes, and high-yield strategy
              blogs — tracked live in the Operations Hub. Bookmark this page so
              you&apos;re always a step ahead of every deadline.
            </p>
          </div>
          <NewsSidebar />
        </div>
      </Band>

      <Band label="Students" tone="coral">
        <Testimonials />
      </Band>

      <Band size="sm" tone="green">
        <Donation />
      </Band>

      <Band label="Questions" size="sm" tone="violet">
        <FAQ />
      </Band>

      <Band size="sm" tone="cyan">
        <ContactFeedback />
      </Band>

      <FloatingCTAs />
      <Footer />
    </main>
  );
}
