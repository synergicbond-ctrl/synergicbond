"use client";

import { Atom, Target, Flame } from "lucide-react";

interface DashboardHeaderProps {
  studentName: string;
}

export function DashboardHeader({
  studentName,
}: DashboardHeaderProps) {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">

      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-300">
            Chemistry Operating System
          </p>

          <h1 className="mt-4 text-4xl font-black md:text-5xl">
            Mission Control
          </h1>

          <p className="mt-3 text-white/60">
            Welcome back, {studentName}
          </p>

          <p className="mt-2 text-white/40">
            {today}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">

          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <Atom className="mb-3 h-6 w-6 text-cyan-300" />
            <p className="text-xs uppercase tracking-wider text-white/50">
              Learning Mode
            </p>
            <p className="mt-2 font-semibold text-white">
              Deep Study
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <Target className="mb-3 h-6 w-6 text-cyan-300" />
            <p className="text-xs uppercase tracking-wider text-white/50">
              Daily Goal
            </p>
            <p className="mt-2 font-semibold text-white">
              Complete 1 Chapter
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <Flame className="mb-3 h-6 w-6 text-orange-400" />
            <p className="text-xs uppercase tracking-wider text-white/50">
              Focus
            </p>
            <p className="mt-2 font-semibold text-white">
              Stay Consistent
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
