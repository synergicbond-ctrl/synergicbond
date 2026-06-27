"use client";
import Link from "next/link";

import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";

import HeroSearch from "@/components/home/HeroSearch";
import ExamGrid from "@/components/home/ExamGrid";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black">

      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-20 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[180px]" />
        <div className="absolute bottom-0 left-0 h-[450px] w-[450px] rounded-full bg-sky-500/5 blur-[180px]" />
      </div>

      <Container>
        <div className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center py-16 text-center">

          <Badge>
            AI POWERED CHEMISTRY PLATFORM
          </Badge>

          {/* SYNERGIC BOND brand name — largest, leads the hero (cyan→purple) */}
          <p className="mt-6 text-6xl md:text-8xl font-black tracking-[0.08em] bg-gradient-to-r from-[#00F5D4] via-[#00BBF9] to-[#9B5DE5] bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(0,245,212,0.18)]">
            SYNERGIC BOND
          </p>

          {/* Headline — supporting, a notch smaller than the brand */}
          <h1 className="mt-4 text-4xl font-black leading-[0.95] tracking-[-0.04em] md:text-6xl">
            The Chemistry
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent">
              Operating System
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-xl text-white/70">
            Search • Learn • Practice • Master
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-5">
            <Link
              href="/dashboard"
              className="rounded-2xl bg-gradient-to-r from-cyan-400 to-sky-500 px-8 py-4 font-semibold text-black shadow-lg shadow-cyan-500/20 transition duration-300 hover:-translate-y-1"
            >
              Start Learning →
            </Link>
            <Link
              href="/vault"
              className="rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.06]"
            >
              Explore Vault →
            </Link>
          </div>

          <HeroSearch />
          <ExamGrid />

        </div>
      </Container>

    </section>
  );
}