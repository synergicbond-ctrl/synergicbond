import type { Metadata } from "next";
import Link from "next/link";
import ThermodynamicsPart03 from "../../thermodynamics-local-review/_components/ThermodynamicsPart03LocalhostReview";

export const metadata: Metadata = { title: "Thermodynamics Part 03 | Synergic Bond", description: "Thermodynamics Part 03: visual theory, derivations, examples, and solutions." };

export default function ThermodynamicsPart03Page() {
  return <><ThermodynamicsPart03 /><nav aria-label="Thermodynamics course navigation" className="border-t border-white/10 bg-[#020617] px-5 py-8 text-slate-100"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3"><Link href="/learn/thermodynamics/part02" className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 font-bold text-slate-200 transition hover:bg-white/[0.08]">← Part 02</Link><Link href="/learn/thermodynamics" className="text-sm font-bold text-cyan-200 hover:text-cyan-100">Thermodynamics course</Link><Link href="/learn/thermodynamics/part04" className="rounded-xl border border-cyan-400/25 bg-cyan-400/[0.07] px-4 py-3 font-bold text-cyan-100 transition hover:bg-cyan-400/[0.14]">Part 04 →</Link></div></nav></>;
}
