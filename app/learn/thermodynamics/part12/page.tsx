import type { Metadata } from "next";
import Link from "next/link";
import ThermodynamicsPart12 from "../parts/ThermodynamicsPart12";

export const metadata: Metadata = { title: "Thermodynamics Part 12 | Synergic Bond", description: "Thermodynamics Part 12: visual theory, derivations, examples, and solutions." };

export default function ThermodynamicsPart12Page() {
  return <><ThermodynamicsPart12 /><nav aria-label="Thermodynamics course navigation" className="border-t border-white/10 bg-[#020617] px-5 py-8 text-slate-100"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3"><Link href="/learn/thermodynamics/part11" className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 font-bold text-slate-200 transition hover:bg-white/[0.08]">← Part 11</Link><Link href="/learn/thermodynamics" className="text-sm font-bold text-cyan-200 hover:text-cyan-100">Thermodynamics course</Link><Link href="/learn/thermodynamics/part13" className="rounded-xl border border-cyan-400/25 bg-cyan-400/[0.07] px-4 py-3 font-bold text-cyan-100 transition hover:bg-cyan-400/[0.14]">Part 13 →</Link></div></nav></>;
}
