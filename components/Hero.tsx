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

        <div className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center py-24 text-center">

          <Badge>
            AI POWERED CHEMISTRY PLATFORM
          </Badge>

          <h1 className="mt-8 text-5xl font-black leading-tight tracking-tight md:text-7xl xl:text-8xl">
            The Chemistry
            <br />
            Operating System
          </h1>

          <p className="mt-8 max-w-3xl text-xl text-white/70">
            Search • Learn • Practice • Master
          </p>

          <p className="mt-4 text-white/50">
            Built for NEET • JEE • Olympiad • GATE
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <Link
              href="/dashboard"
              className="rounded-2xl bg-white px-8 py-4 font-semibold text-black transition hover:scale-105"
            >
              🚀 Start Learning
            </Link>

            <Link
              href="/vault"
              className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 transition hover:bg-white/10"
            >
              🧪 Explore Vault
            </Link>

          </div>

          <HeroSearch />

          <ExamGrid />

        </div>

      </Container>

    </section>
  );
}