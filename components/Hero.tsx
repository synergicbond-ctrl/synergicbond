"use client";
import Link from "next/link";
import dynamic from "next/dynamic";

import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";

import HeroSearch from "@/components/home/HeroSearch";
import ExamGrid from "@/components/home/ExamGrid";

const MoleculeHero = dynamic(() => import("@/components/MoleculeHero"), { ssr: false });

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
        <div className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center py-24 text-center">

          <Badge>
            AI POWERED CHEMISTRY PLATFORM
          </Badge>

          {/* Molecule Animation — accent above headline */}
          <div className="mt-6 w-full max-w-sm">
            <MoleculeHero />
          </div>

          {/* Big headline — the centerpiece */}
          <h1 className="mt-6 text-5xl font-black leading-[0.95] tracking-[-0.04em] md:text-7xl xl:text-8xl">
            The Chemistry
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent">
              Operating System
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-xl text-white/70">
            Search • Learn • Practice • Master
          </p>

          <p className="mt-3 text-white/50">
            Built for NEET • JEE • Olympiad • GATE
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