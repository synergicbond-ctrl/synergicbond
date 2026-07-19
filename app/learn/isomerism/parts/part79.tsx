import Link from "next/link";

type CumulatedCase = { chain: string; result: "Shows GI" | "No GI"; reason: string };

const cumulatedCases: CumulatedCase[] = [
  { chain: "a,b-C=C=C=C-a,b", result: "Shows GI", reason: "Three cumulated double bonds leave the terminal substituent planes coplanar; a and b are different at both ends." },
  { chain: "a,b-C=C=C=C=C-a,b", result: "No GI", reason: "Four cumulated double bonds place the terminal substituent planes perpendicular." },
  { chain: "a,b-C=C=C=C=C=C-a,b", result: "Shows GI", reason: "Five cumulated double bonds again give coplanar terminal substituent planes." },
  { chain: "O=C=C=O", result: "No GI", reason: "Even parity alone is not enough: each terminal oxygen has identical lone-pair environments, not two distinguishable terminal groups." },
  { chain: "a,b-C=C=C=S=O", result: "Shows GI", reason: "The source example has an odd cumulated sequence with distinguishable terminal substituents." },
];

function CumulatedStructure({ chain, active }: { chain: string; active: boolean }) {
  const segments = chain.includes("=C=C=C=C=C=") ? 5 : chain.includes("=C=C=C=C=") ? 4 : 3;
  const start = 65;
  const spacing = 38;
  const end = start + segments * spacing;
  return <svg fill="currentColor" viewBox="0 0 310 145" className="mt-3 w-full" role="img" aria-label={chain}>
    {Array.from({ length: segments }, (_, index) => <g key={index}><path d={`M${start + index * spacing} 65H${start + (index + 1) * spacing} 65`} stroke="#67e8f9" strokeWidth="2.5" /><path d={`M${start + index * spacing} 71H${start + (index + 1) * spacing} 71`} stroke="#67e8f9" strokeWidth="2.5" /></g>)}
    <path d={`M${start} 68L30 35M${start} 68L30 105M${end} 68L${end + 35} 35M${end} 68L${end + 35} 105`} stroke="currentColor" strokeWidth="2.5" fill="none" />
    <text x="19" y="33" fontSize="15">{chain.startsWith("O") ? "O" : "a"}</text><text x="19" y="117" fontSize="15">{chain.startsWith("O") ? "O" : "b"}</text>
    <text x={end + 40} y="33" fontSize="15">{chain.endsWith("O") ? "O" : "a"}</text><text x={end + 40} y="117" fontSize="15">{chain.endsWith("O") ? "O" : "b"}</text>
    <text x="155" y="135" textAnchor="middle" fill={active ? "#86efac" : "#fda4af"} fontSize="14" fontWeight="700">{active ? "coplanar terminal relationship" : "perpendicular / identical-terminal restriction"}</text>
  </svg>;
}

type SpiraneCase = { rings: number; label: string; result: "Shows GI" | "No GI"; substituents: boolean; reason: string };
const spiraneCases: SpiraneCase[] = [
  { rings: 4, label: "even number of linked rings", result: "No GI", substituents: true, reason: "The terminal planes are perpendicular for the even member of the source set." },
  { rings: 5, label: "odd number of linked rings", result: "Shows GI", substituents: true, reason: "The terminal planes are coplanar; a/b are distinguishable on each end." },
  { rings: 4, label: "identical terminal environments", result: "No GI", substituents: false, reason: "No geometrical pair exists when a terminal end has equivalent substituents." },
  { rings: 4, label: "F/Cl substituted spirane", result: "Shows GI", substituents: true, reason: "Different terminal F and Cl groups make the coplanar comparison distinguishable in the source example." },
  { rings: 3, label: "terminally bridged odd spirane", result: "Shows GI", substituents: false, reason: "The source marks this odd-membered bridged case as geometrically distinct despite no a/b labels." },
  { rings: 5, label: "terminally bridged even-path case", result: "No GI", substituents: false, reason: "The terminal relationship does not produce a distinguishable same-side/opposite-side pair." },
  { rings: 5, label: "heteroatom-containing spirane", result: "Shows GI", substituents: true, reason: "The source includes oxygen-, imino- and ammonium-containing spiranes: heteroatom identity can make terminal environments different." },
];

function SpiraneStructure({ item }: { item: SpiraneCase }) {
  const start = 42;
  const width = 42;
  const points = Array.from({ length: item.rings }, (_, i) => {
    const x = start + i * width;
    return <path key={i} d={`M${x} 72L${x + width / 2} 45L${x + width} 72L${x + width / 2} 99Z`} fill="none" stroke="currentColor" strokeWidth="2.5" />;
  });
  const right = start + item.rings * width;
  return <svg fill="currentColor" viewBox="0 0 300 150" className="mt-3 w-full" role="img" aria-label={item.label}>
    {points}
    {item.substituents && <><path d={`M${start} 72L18 40M${start} 72L18 105M${right} 72L${right + 24} 40M${right} 72L${right + 24} 105`} stroke="#f0abfc" strokeWidth="2.5" /><text x="5" y="39" fill="#f0abfc">a</text><text x="5" y="118" fill="#f0abfc">b</text><text x={right + 27} y="39" fill="#f0abfc">a</text><text x={right + 27} y="118" fill="#f0abfc">b</text></>}
    {item.label.includes("F/Cl") && <><text x="5" y="39" fill="#f0abfc">F</text><text x={right + 27} y="39" fill="#f0abfc">Cl</text></>}
    {item.label.includes("hetero") && <><text x="82" y="43" fill="#f0abfc">O</text><text x="170" y="105" fill="#f0abfc">NH</text></>}
    <text x="150" y="138" textAnchor="middle" fill={item.result === "Shows GI" ? "#86efac" : "#fda4af"} fontSize="14" fontWeight="700">{item.result}</text>
  </svg>;
}

export default function IsomerismPart79() {
  return <main className="min-h-screen bg-[#08111f] px-4 py-8 text-white sm:px-6 sm:py-12"><article className="mx-auto max-w-6xl"><Link href="/learn/isomerism" className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100">Isomerism</Link><header className="mt-6 rounded-3xl border border-cyan-300/15 bg-[#08111f] p-6 sm:p-9"><p className="text-xs font-black uppercase tracking-[.24em] text-cyan-200">Isomerism source · page 69 · Part 79</p><h1 className="mt-3 text-3xl font-black sm:text-5xl">Higher cumulenes and spiranes: source decision bank</h1><p className="mt-4 max-w-3xl text-slate-300">This page extends the cumulene parity rule to the individual source chains, then applies the same terminal-plane test to the source’s spirane set. Every marked decision needs both a suitable plane relationship and non-equivalent terminal groups.</p></header><section className="mt-7"><h2 className="text-2xl font-black text-cyan-100">A. Higher cumulenes</h2><div className="mt-4 grid gap-4 md:grid-cols-2">{cumulatedCases.map(item => <article key={item.chain} className="rounded-2xl border border-white/10 bg-white/[.035] p-5"><h3 className="font-bold text-white">{item.chain}</h3><CumulatedStructure chain={item.chain} active={item.result === "Shows GI"} /><p className={item.result === "Shows GI" ? "text-sm font-bold text-emerald-300" : "text-sm font-bold text-rose-300"}>{item.result}</p><p className="mt-2 text-sm leading-6 text-slate-300">{item.reason}</p></article>)}</div></section><section className="mt-9"><h2 className="text-2xl font-black text-cyan-100">B. Geometrical isomerism in spiranes</h2><p className="mt-2 text-sm leading-6 text-slate-300">At the spiro junction, successive ring planes alternate. Trace from one terminal ring to the other; then test whether the terminal substituents are distinguishable. The following cards preserve the individual accept/reject patterns on the source page.</p><div className="mt-4 grid gap-4 md:grid-cols-2">{spiraneCases.map((item, index) => <article key={`${item.label}-${index}`} className="rounded-2xl border border-white/10 bg-white/[.035] p-5"><h3 className="font-bold text-white">{item.label}</h3><SpiraneStructure item={item} /><p className="text-sm leading-6 text-slate-300"><b className={item.result === "Shows GI" ? "text-emerald-300" : "text-rose-300"}>{item.result}.</b> {item.reason}</p></article>)}</div></section><aside className="mt-7 rounded-2xl border border-amber-300/25 bg-amber-300/[.07] p-5 text-sm leading-6 text-amber-50"><b>Examination check:</b> do not apply only an odd/even shortcut. First confirm that the terminal groups or paths can be compared as two different alternatives. An even/odd plane relationship cannot create E/Z-style isomerism by itself.</aside></article></main>;
}
