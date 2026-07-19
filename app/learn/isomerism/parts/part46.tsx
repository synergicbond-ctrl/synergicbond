import Link from "next/link";
import { SolidWedge } from "../components/ChemistryDiagram";

const svgClass = "h-auto w-full text-slate-100";
type Side = "L" | "R";

function Fischer({ n }: { n: number }) {
  const patterns: Record<number, Side[]> = { 187: ["L", "R", "L", "R"], 188: ["R", "L", "L", "R"], 189: ["R", "R"], 190: ["L", "R"] };
  const rows = patterns[n];
  const ketose = n === 189 || n === 190;
  const rowStart = ketose ? 64 : 47;
  const last = rowStart + (rows.length - 1) * 25;
  return <svg fill="currentColor" viewBox="0 0 165 190" className={svgClass} role="img" aria-label={`source Fischer projection ${n}`}>
    {ketose ? <><text x="82" y="17" textAnchor="middle" fontSize="13">CH₂OH</text><line x1="82" y1="23" x2="82" y2={last + 22} stroke="currentColor" strokeWidth="2"/><line x1="82" y1="38" x2="110" y2="38" stroke="currentColor" strokeWidth="2"/><line x1="82" y1="43" x2="110" y2="43" stroke="currentColor" strokeWidth="1.2"/><text x="115" y="46" fontSize="14">O</text></> : <><line x1="82" y1="34" x2="82" y2={last + 22} stroke="currentColor" strokeWidth="2"/><line x1="82" y1="34" x2="109" y2="18" stroke="currentColor" strokeWidth="2"/><line x1="86" y1="38" x2="113" y2="22" stroke="currentColor" strokeWidth="1.2"/><text x="116" y="22" fontSize="14">O</text></>}
    {rows.map((side, index) => { const y = rowStart + index * 25; return <g key={y}><line x1="46" y1={y} x2="118" y2={y} stroke="currentColor" strokeWidth="2"/><text x="39" y={y + 5} textAnchor="end" fontSize="13">{side === "L" ? "HO" : "H"}</text><text x="125" y={y + 5} fontSize="13">{side === "L" ? "H" : "OH"}</text></g>; })}
    <line x1="82" y1={last} x2="82" y2={last + 22} stroke="currentColor" strokeWidth="2"/><text x="82" y={last + 40} textAnchor="middle" fontSize="13">CH₂OH</text>
  </svg>;
}

function Phenyl({ x, y }: { x: number; y: number }) {
  return <g fill="none" stroke="currentColor" strokeWidth="2"><path d={`M${x} ${y-28} ${x+24} ${y-14} ${x+24} ${y+14} ${x} ${y+28} ${x-24} ${y+14} ${x-24} ${y-14}Z`}/><line x1={x+4} y1={y-22} x2={x+20} y2={y-12} strokeWidth="1.25"/><line x1={x+19} y1={y+12} x2={x+3} y2={y+22} strokeWidth="1.25"/><line x1={x-19} y1={y+12} x2={x-19} y2={y-12} strokeWidth="1.25"/></g>;
}

function Newman({ n }: { n: 195 | 196 | 198 }) {
  const labelled = n === 198;
  return <svg fill="currentColor" viewBox="0 0 170 145" className={svgClass} role="img" aria-label={`source Newman projection ${n}`}><circle cx="85" cy="73" r="30" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="85" cy="73" r="3.5" fill="currentColor"/><g fill="none" stroke="currentColor" strokeWidth="2"><line x1="85" y1="73" x2="35" y2="15"/><line x1="85" y1="73" x2="145" y2="72"/><line x1="85" y1="73" x2="40" y2="130"/><line x1="63" y1="53" x2="47" y2="24"/><line x1="115" y1="54" x2="132" y2="28"/><line x1="105" y1="97" x2="126" y2="123"/></g>{labelled && <><text x="19" y="16" fontSize="14">H</text><text x="148" y="76" fontSize="14">H</text><text x="29" y="139" fontSize="14">H</text><text x="34" y="26" fontSize="14">H</text><text x="134" y="30" fontSize="14">H</text><text x="128" y="132" fontSize="14">H</text></>}</svg>;
}

function CyclopropylRing({ n }: { n: 199 | 200 | 201 }) {
  const sites = n === 199 ? [{ x: 122, y: 53, tx: 151, ty: 31 }, { x: 122, y: 91, tx: 151, ty: 113 }] : n === 200 ? [{ x: 122, y: 53, tx: 151, ty: 31 }, { x: 86, y: 111, tx: 86, ty: 145 }] : [{ x: 50, y: 53, tx: 25, ty: 31 }, { x: 122, y: 53, tx: 151, ty: 31 }, { x: 86, y: 111, tx: 86, ty: 145 }];
  return <svg fill="currentColor" viewBox="0 0 195 165" className={svgClass} role="img" aria-label={`source ${n} cyclohexane with cyclopropyl solid-wedge branches`}><path d="M50 53 86 32 122 53 122 91 86 111 50 91Z" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round"/>{sites.map((site, index) => <g key={`${site.x}-${site.y}`}><SolidWedge from={{ x: site.x, y: site.y }} to={{ x: site.tx, y: site.ty }} width={8}/><path d={`M${site.tx-13} ${site.ty+15} ${site.tx} ${site.ty-15} ${site.tx+13} ${site.ty+15}Z`} fill="none" stroke="currentColor" strokeWidth="1.8"/></g>)}</svg>;
}

function Haworth({ n }: { n: 197 | 202 | 203 }) {
  const is203 = n === 203;
  return <svg fill="currentColor" viewBox="0 0 250 190" className={svgClass} role="img" aria-label={`source Haworth carbohydrate ${n}`}><path d="M55 119 87 80 159 80 190 119 155 148 87 148Z" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M55 119 87 148 155 148 190 119" fill="none" stroke="currentColor" strokeWidth="7" strokeLinejoin="round"/><text x="163" y="85" fontSize="18">O</text><line x1="87" y1="80" x2="87" y2="43" stroke="currentColor" strokeWidth="2"/><text x="78" y="35" fontSize="15">CH₂OH</text><line x1="55" y1="119" x2="30" y2="101" stroke="currentColor" strokeWidth="2"/><text x="4" y="101" fontSize="15">HO</text><line x1="87" y1="148" x2="87" y2="173" stroke="currentColor" strokeWidth="2"/><text x="77" y="188" fontSize="15">OH</text><line x1="125" y1="148" x2="125" y2="174" stroke="currentColor" strokeWidth="2"/><text x="116" y="188" fontSize="15">{is203 ? "H" : "OH"}</text><line x1="155" y1="148" x2="155" y2="173" stroke="currentColor" strokeWidth="2"/><text x="145" y="188" fontSize="15">{is203 ? "OH" : "H"}</text><line x1="190" y1="119" x2="211" y2="140" stroke="currentColor" strokeWidth="2"/><text x="213" y="148" fontSize="15">OH</text><text x="72" y="70" fontSize="14">H</text><text x="114" y="72" fontSize="14">H</text><text x="181" y="107" fontSize="14">H</text></svg>;
}

function Complex({ n }: { n: number }) {
  if (n === 191) return <svg fill="currentColor" viewBox="0 0 180 155" className={svgClass} role="img" aria-label="source phenyl cyclopentadiene 191"><Phenyl x={90} y={43}/><line x1="90" y1="71" x2="90" y2="91" stroke="currentColor" strokeWidth="2"/><path d="M62 119 55 92 82 77 109 92 102 119Z" fill="none" stroke="currentColor" strokeWidth="2.1"/><line x1="58" y1="95" x2="66" y2="116" strokeWidth="1.3"/><line x1="105" y1="95" x2="98" y2="116" strokeWidth="1.3"/></svg>;
  if (n === 192) return <svg fill="currentColor" viewBox="0 0 195 150" className={svgClass} role="img" aria-label="source 192 carbonyl fused nitrogen heterocycle"><path d="M46 96 46 58 78 40 110 58 110 96 78 114Z M110 58 141 72 151 103 121 119 110 96" fill="none" stroke="currentColor" strokeWidth="2"/><line x1="78" y1="40" x2="78" y2="16" stroke="currentColor" strokeWidth="2"/><line x1="83" y1="40" x2="83" y2="16" stroke="currentColor" strokeWidth="1.2"/><text x="77" y="14" fontSize="16">O</text><text x="20" y="65" fontSize="15">HN</text><text x="57" y="107" fontSize="15">N</text><text x="117" y="70" fontSize="15">HN</text><text x="125" y="111" fontSize="15">N</text></svg>;
  if (n === 193) return <svg fill="currentColor" viewBox="0 0 205 155" className={svgClass} role="img" aria-label="source 193 amino carbonyl fused nitrogen heterocycle"><path d="M45 91 45 55 76 38 108 55 108 92 77 110Z M108 55 139 72 139 108 108 125 108 92" fill="none" stroke="currentColor" strokeWidth="2"/><line x1="108" y1="55" x2="108" y2="23" stroke="currentColor" strokeWidth="2"/><line x1="113" y1="55" x2="113" y2="23" stroke="currentColor" strokeWidth="1.2"/><text x="106" y="20" fontSize="16">O</text><text x="31" y="60" fontSize="15">N</text><text x="54" y="109" fontSize="15">NH</text><text x="90" y="114" fontSize="15">N</text><text x="126" y="80" fontSize="15">NH</text><text x="144" y="119" fontSize="15">NH₂</text></svg>;
  if (n === 194) return <svg fill="currentColor" viewBox="0 0 300 205" className={svgClass} role="img" aria-label="source 194 rigid central ring with four cyclopentyl and two methyl front-face branches"><path d="M116 70 151 51 185 70 185 113 151 133 116 113Z" fill="none" stroke="currentColor" strokeWidth="2.2"/><SolidWedge from={{ x: 151, y: 51 }} to={{ x: 151, y: 23 }} width={9}/><text x="132" y="21" fontSize="16">H₃C</text><SolidWedge from={{ x: 151, y: 133 }} to={{ x: 151, y: 162 }} width={9}/><text x="151" y="178" fontSize="16">CH₃</text>{[[116,70,79,49],[185,70,222,49],[116,113,79,135],[185,113,222,135]].map(([x,y,tx,ty], index) => <g key={index}><SolidWedge from={{ x, y }} to={{ x: tx, y: ty }} width={9}/><path d={`M${tx-29} ${ty} ${tx-15} ${ty-27} ${tx+16} ${ty-21} ${tx+26} ${ty+11} ${tx-4} ${ty+26}Z`} fill="none" stroke="currentColor" strokeWidth="2"/></g>)}</svg>;
  if (n === 195 || n === 196 || n === 198) return <Newman n={n as 195 | 196 | 198}/>;
  if (n >= 199 && n <= 201) return <CyclopropylRing n={n as 199 | 200 | 201}/>;
  return <Haworth n={n as 197 | 202 | 203}/>;
}
const checks: Record<number, string> = {
  187: "OH sequence from top to bottom: left, right, left, right. Horizontal bonds are toward the viewer.",
  188: "OH sequence from top to bottom: right, left, left, right. This is a different Fischer molecular graph from 187.",
  189: "A ketose: the carbonyl is C-2, not a terminal aldehyde. Both displayed OH groups are on the right.",
  190: "A ketose with the source OH sequence left then right; retain the C-2 carbonyl and terminal CH₂OH groups.",
  191: "The phenyl ring is bonded to the cyclopentadiene carbon; both five-membered double bonds are explicit.",
  192: "The carbonyl and every printed N/HN atom belong to the fused heterocycle; do not collapse it to a six-membered ring.",
  193: "The source contains the distinct carbonyl, NH and exocyclic NH₂ pattern shown in the fused heterocycle.",
  194: "All four cyclopentyl branches and both methyl groups are solid wedges in the fixed rigid framework.",
  195: "Read this as a Newman view: centre = front carbon; circle = rear carbon; all six bonds are retained.",
  196: "The six unlabelled bonds are a separate Newman arrangement and must not be replaced by a generic conformation icon.",
  197: "The Haworth ring has its bold front edge and every OH/H direction retained as printed.",
  198: "This is the fully labelled H/H Newman; each carbon bears three hydrogens.",
  199: "Two cyclopropyl groups leave adjacent right-hand cyclohexane vertices on solid wedges.",
  200: "The solid-wedge cyclopropyl groups are at the upper-right and bottom source vertices.",
  201: "All three source cyclopropyl substituents are solid wedges; their vertex positions differ from 199 and 200.",
  202: "The heavy front-edge Haworth bond is retained; its OH/H placement differs from 203.",
  203: "The heavy front-edge Haworth bond is retained; compare its lower OH/H orientation with 202 rather than treating them as duplicates.",
};

export default function IsomerismPart46() {
  const items = Array.from({ length: 17 }, (_, index) => index + 187);
  return <main className="min-h-screen bg-[#08111f] px-4 py-8 text-white sm:px-6 sm:py-12"><article className="mx-auto max-w-6xl"><Link href="/learn/isomerism" className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100">Isomerism</Link><header className="mt-6 rounded-3xl border border-cyan-300/15 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,.18),_transparent_35%),linear-gradient(135deg,rgba(34,211,238,.08),rgba(2,6,23,.7),rgba(139,92,246,.1))] p-6 sm:p-9"><p className="text-xs font-black uppercase tracking-[.24em] text-cyan-200">Optical Isomerism source · page 117 · Part 46</p><h1 className="mt-3 text-3xl font-black sm:text-5xl">Fischer, framework and projection exercise</h1><p className="mt-3 text-sm leading-7 text-slate-300">All 17 source items remain independent: four Fischers, heterocycles, a rigid polycycle, Newman projections, cyclopropyl-substituted cyclohexanes and Haworth structures.</p></header><section className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{items.map((n) => <article key={n} className="rounded-2xl border border-white/10 bg-white/[.035] p-4"><b>Source structure {n}</b>{n <= 190 ? <Fischer n={n}/> : <Complex n={n}/>}<p className="mt-3 text-sm leading-6 text-slate-300">{checks[n]}</p></article>)}</section><nav className="mt-8 flex justify-between border-t border-white/10 pt-6"><Link href="/learn/isomerism/45" className="rounded-xl border border-white/15 px-4 py-3 text-sm font-bold text-slate-200">← 45</Link><Link href="/learn/isomerism/47" className="rounded-xl border border-white/15 px-4 py-3 text-sm font-bold text-slate-200">47 →</Link></nav></article></main>;
}
