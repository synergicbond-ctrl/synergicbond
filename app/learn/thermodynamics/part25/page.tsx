import type { Metadata } from "next";
import Link from "next/link";
import ThermodynamicsPart25 from "../parts/ThermodynamicsPart25";

export const metadata: Metadata = { title: "Thermodynamics Part 25 | Synergic Bond", description: "Thermodynamics Part 25: visual theory, derivations, examples, and solutions." };

export default function ThermodynamicsPart25Page() {
  return <><ThermodynamicsPart25 /><nav aria-label="Thermodynamics course navigation" className="border-t border-white/10 bg-[#020617] px-5 py-8 text-slate-100"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3"><Link href="/learn/thermodynamics/part24" className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 font-bold text-slate-200 transition hover:bg-white/[0.08]">← Part 24</Link><Link href="/learn/thermodynamics" className="text-sm font-bold text-cyan-200 hover:text-cyan-100">Thermodynamics course</Link><Link href="/learn/thermodynamics/part26" className="rounded-xl border border-cyan-400/25 bg-cyan-400/[0.07] px-4 py-3 font-bold text-cyan-100 transition hover:bg-cyan-400/[0.14]">Part 26 →</Link></div></nav></>;
}
