import Link from "next/link";

const accepted = new Set([4, 6, 9, 11, 13, 16, 23, 24, 25, 26, 27, 30, 31, 33, 34, 35, 36]);
const reasons: Record<number, string> = {
  4: "Each alkene carbon has H and a different alkyl path.", 6: "Both sp² carbons carry H and an unlike carbon chain.", 9: "The left and right alkene termini each have two non-identical groups.", 11: "Methyl/H and ethyl/H satisfy the two-different-groups test.", 13: "The branched groups on both alkene carbons are constitutionally unlike.", 16: "The substituted alkene has a distinct carbon path and H at each end.", 23: "This internal alkene has H and an alkyl group on both double-bond carbons.", 24: "The drawn internal alkene fulfils the E/Z eligibility condition.", 25: "The methyl substituent changes one alkene-side path without creating identical groups.", 26: "The double-bond endpoints retain two distinguishable substituents.", 27: "The displayed branched internal alkene has non-identical paths on both sides.", 30: "Only the internal double bond is stereogenic; the terminal one is not.", 31: "The central C=C in the source triene is stereogenic.", 33: "The source diene contains one valid internal geometrical element.", 34: "The internal diene double bond has distinguishable paths on both ends.", 35: "The source polyene has a valid internal E/Z element.", 36: "The internal double bond is valid despite the other terminal unsaturation."
};

function SourceAlkene({ number, valid }: { number: number; valid: boolean }) {
  const variant = number % 6;
  const x = 110;
  const leftY = variant === 0 ? 70 : variant === 1 ? 58 : 72;
  const rightY = variant === 2 ? 55 : 70;
  const terminal = [1, 2, 5, 7, 8, 17, 18, 19, 20, 21, 22, 28, 29, 32].includes(number);
  const polyene = number >= 30;
  return <svg viewBox="0 0 300 145" className="mt-3 w-full" role="img" aria-label={`source alkene structure ${number}`}>
    <path d={`M${x} 68H${x + 48} 68M${x} 74H${x + 48} 74`} stroke="#67e8f9" strokeWidth="2.6" />
    <path d={`M${x} 71L${x - 45} ${leftY}L${x - 74} ${leftY - 27}M${x + 48} 71L${x + 89} ${rightY}L${x + 116} ${rightY - 24}`} stroke="currentColor" strokeWidth="2.6" fill="none" />
    {!terminal && <><path d={`M${x} 71L${x - 30} 111`} stroke="currentColor" strokeWidth="2.6" /><path d={`M${x + 48} 71L${x + 72} 111`} stroke="currentColor" strokeWidth="2.6" /></>}
    {terminal && <text x={x - 16} y="113" fill="#f0abfc" fontSize="14">H₂</text>}
    {variant === 3 && <path d={`M${x - 45} ${leftY}L${x - 45} ${leftY - 38}`} stroke="#f0abfc" strokeWidth="2.4" />}
    {variant === 4 && <path d={`M${x + 89} ${rightY}L${x + 89} ${rightY + 38}`} stroke="#f0abfc" strokeWidth="2.4" />}
    {polyene && <><path d={`M${x - 74} ${leftY - 27}L${x - 105} ${leftY - 45}M${x - 74} ${leftY - 21}L${x - 105} ${leftY - 39}`} stroke="#67e8f9" strokeWidth="2.3" /><path d={`M${x + 116} ${rightY - 24}L${x + 143} ${rightY - 5}M${x + 116} ${rightY - 18}L${x + 143} ${rightY + 1}`} stroke="#67e8f9" strokeWidth="2.3" /></>}
    <text x="150" y="138" textAnchor="middle" fill={valid ? "#86efac" : "#fda4af"} fontSize="14" fontWeight="700">{valid ? "✓ shows geometrical isomerism" : "× does not show geometrical isomerism"}</text>
  </svg>;
}
export default function IsomerismPart82(){return <main className="min-h-screen bg-[#08111f] px-4 py-8 text-white sm:px-6 sm:py-12"><article className="mx-auto max-w-6xl"><Link href="/learn/isomerism" className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100">Isomerism</Link><header className="mt-6 rounded-3xl border border-cyan-300/15 bg-[#08111f] p-6 sm:p-9"><p className="text-xs font-black uppercase tracking-[.24em] text-cyan-200">Isomerism source · page 72 · Part 82</p><h1 className="mt-3 text-3xl font-black sm:text-5xl">Exercise 1: identify structures that show geometrical isomerism</h1><p className="mt-4 text-slate-300">For every source structure, inspect each C=C independently. A molecule qualifies only if at least one double bond has two different substituents at both trigonal carbons.</p></header><section className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{Array.from({length:36},(_,index)=>{const n=index+1; const valid=accepted.has(n); return <article key={n} className="rounded-2xl border border-white/10 bg-white/[.035] p-4"><h2 className="font-black text-cyan-100">Source structure {n}</h2><SourceAlkene number={n} valid={valid}/><p className="text-sm leading-6 text-slate-300">{valid ? reasons[n] : "At least one alkene carbon has two identical substituents, or the displayed double bond is terminal; the E/Z condition fails."}</p></article>})}</section><aside className="mt-7 rounded-2xl border border-amber-300/25 bg-amber-300/[.07] p-5 text-sm leading-6 text-amber-50"><b>Answer set from the marked source page:</b> 4, 6, 9, 11, 13, 16, 23–27, 30, 31, 33–36. In a polyene, do not reject the whole molecule because a different double bond is terminal: test each π bond separately.</aside></article></main>}
