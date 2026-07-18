import Link from "next/link";

type Molecule = "malonate" | "acetone" | "acetoacetate" | "acetylacetone" | "dibenzoyl";

const names: Record<Molecule, string> = { malonate: "diethyl malonate", acetone: "acetone", acetoacetate: "methyl acetoacetate", acetylacetone: "acetylacetone", dibenzoyl: "dibenzoylmethane" };

function CarbonylFramework({ molecule }: { molecule: Molecule }) {
  const b = { stroke: "currentColor", strokeWidth: 2.6, fill: "none", strokeLinecap: "round" as const };
  const double = (x: number, y: number, x2: number, y2: number) => <><path d={`M${x} ${y - 3}L${x2} ${y2 - 3}`} {...b}/><path d={`M${x} ${y + 3}L${x2} ${y2 + 3}`} {...b}/></>;
  const tx = (x: number, y: number, s: string) => <text x={x} y={y} fontSize="14" textAnchor="middle" fill="currentColor">{s}</text>;
  const labels: Record<Molecule, [string, string, string]> = {
    malonate: ["EtO", "OEt", "CH₂"], acetone: ["CH₃", "CH₃", ""], acetoacetate: ["CH₃", "OCH₃", "CH₂"], acetylacetone: ["CH₃", "CH₃", "CH₂"], dibenzoyl: ["Ph", "Ph", "CH₂"],
  };
  const [left, right, middle] = labels[molecule];
  if (molecule === "acetone") return <svg viewBox="0 0 250 135" className="h-auto w-full" role="img" aria-label="acetone structure"><path d="M36 100L110 62L184 100" {...b}/>{double(110, 62, 110, 20)}{tx(20,108,left)}{tx(110,70,"C")}{tx(110,16,"O")}{tx(204,108,right)}</svg>;
  return <svg viewBox="0 0 300 135" className="h-auto w-full" role="img" aria-label={`${names[molecule]} structure`}><path d="M24 100L78 62L132 100L186 62L240 100" {...b}/>{double(78,62,78,20)}{double(186,62,186,20)}{tx(10,108,left)}{tx(78,70,"C")}{tx(78,16,"O")}{tx(132,108,middle)}{tx(186,70,"C")}{tx(186,16,"O")}{tx(260,108,right)}</svg>;
}

const pairs = [
  { id: "(a)", a: "malonate" as Molecule, b: "acetone" as Molecule, answer: "Diethyl malonate", reason: "Two ester carbonyl groups make its α-hydrogen much more acidic and stabilise the enol/enolate by delocalisation." },
  { id: "(b)", a: "malonate" as Molecule, b: "acetoacetate" as Molecule, answer: "Methyl acetoacetate", reason: "A keto ester enolises more than the diester because its enol is better stabilised while the ester lone-pair donation makes its carbonyl less strongly enolising." },
  { id: "(c)", a: "acetylacetone" as Molecule, b: "acetoacetate" as Molecule, answer: "Acetylacetone", reason: "Its chelated enol is additionally stabilised by a six-membered intramolecular O–H···O hydrogen bond." },
  { id: "(d)", a: "acetylacetone" as Molecule, b: "dibenzoyl" as Molecule, answer: "Dibenzoylmethane", reason: "The phenyl-substituted 1,3-diketone gains extended conjugation in its enol form." },
];

export default function IsomerismPart63() { return <main className="min-h-screen bg-[#08111f] px-4 py-8 text-white sm:px-6 sm:py-12"><article className="mx-auto max-w-6xl"><Link href="/learn/isomerism" className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100">Isomerism</Link><header className="mt-6 rounded-3xl border border-cyan-300/15 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,.18),_transparent_35%),linear-gradient(135deg,rgba(34,211,238,.08),rgba(2,6,23,.7),rgba(139,92,246,.1))] p-6 sm:p-9"><p className="text-xs font-black uppercase tracking-[.24em] text-cyan-200">Isomerism source · page 54 · Part 63</p><h1 className="mt-3 text-3xl font-black sm:text-5xl">Enol content: source comparison bank II</h1><p className="mt-3 text-sm leading-7 text-slate-300">Source question: <i>In each pair which will have higher enol content?</i> Compare α-H acidity, conjugation and chelation rather than counting carbonyl groups mechanically.</p></header><section className="mt-7 grid gap-4 md:grid-cols-2">{pairs.map((pair) => <article key={pair.id} className="rounded-2xl border border-white/10 bg-white/[.035] p-4"><h2 className="font-black text-cyan-100">{pair.id} {names[pair.a]} and {names[pair.b]}</h2><div className="mt-3 grid items-center gap-3 grid-cols-[1fr_auto_1fr]"><CarbonylFramework molecule={pair.a}/><span className="text-cyan-200">vs</span><CarbonylFramework molecule={pair.b}/></div><ol className="mt-3 list-decimal space-y-1 pl-5 text-sm leading-6 text-slate-300"><li>Locate the α-methylene and compare carbonyl stabilisation of the enol/enolate.</li><li>Then include conjugation and intramolecular hydrogen bonding.</li><li><b>Higher enol content:</b> {pair.answer}. {pair.reason}</li></ol></article>)}</section><aside className="mt-6 rounded-2xl border border-amber-300/25 bg-amber-300/[.07] p-5 text-sm leading-7 text-amber-50"><b>Common error:</b> ester resonance changes the comparison; do not assume every molecule with two carbonyl groups has the same enol content.</aside><nav className="mt-8 flex justify-between border-t border-white/10 pt-6"><Link href="/learn/isomerism/62" className="rounded-xl border border-white/15 px-4 py-3 text-sm font-bold text-slate-200">← 62</Link><Link href="/learn/isomerism" className="rounded-xl border border-cyan-300/30 bg-cyan-300/10 px-4 py-3 text-sm font-bold text-cyan-100">Chapter overview</Link></nav></article></main>; }
