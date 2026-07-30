"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

const chapterHref = "/learn/jee-advanced/environmental-chemistry";
const totalParts = 15;

function partHref(part: number) {
  return `${chapterHref}/parts/part${String(part).padStart(2, "0")}`;
}

function CompactPartNavigation({ part }: { part: number }) {
  const backHref = part > 1 ? partHref(part - 1) : chapterHref;
  const nextHref = part < totalParts ? partHref(part + 1) : chapterHref;

  return (
    <nav
      aria-label="Environmental Chemistry part navigation"
      className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.035] px-3 py-2 shadow-lg shadow-black/10"
    >
      <Link
        href={backHref}
        className="inline-flex min-h-9 items-center gap-2 rounded-lg border border-cyan-300/20 bg-cyan-400/[0.07] px-3 text-xs font-bold text-cyan-100 transition hover:border-cyan-300/40 hover:bg-cyan-400/[0.12]"
      >
        <span aria-hidden="true">←</span>
        <span>Back</span>
      </Link>

      <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
        {part} / {totalParts}
      </span>

      <Link
        href={nextHref}
        className="inline-flex min-h-9 items-center gap-2 rounded-lg border border-violet-300/20 bg-violet-400/[0.07] px-3 text-xs font-bold text-violet-100 transition hover:border-violet-300/40 hover:bg-violet-400/[0.12]"
      >
        <span>Next</span>
        <span aria-hidden="true">→</span>
      </Link>
    </nav>
  );
}

export default function EnvironmentalChemistryLayout({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();
  const match = pathname.match(/\/parts\/part(\d{2})\/?$/);
  const part = match ? Number(match[1]) : null;

  if (!part || part < 1 || part > totalParts) {
    return children;
  }

  return (
    <div className="min-h-screen bg-[#06101d]">
      <div className="px-4 pt-4 sm:px-6 lg:px-8">
        <CompactPartNavigation part={part} />
      </div>

      {children}

      <div className="px-4 pb-8 sm:px-6 lg:px-8">
        <CompactPartNavigation part={part} />
      </div>
    </div>
  );
}
