import Link from "next/link";
import { HashedWedge, SolidWedge } from "../components/ChemistryDiagram";

const svgClass = "h-auto w-full text-slate-100";
type Face = "solid" | "hash";
type Substituent = "Me" | "Et";
type RingCase = { upper: Face; upperGroup: Substituent; lower: Face; lowerGroup: Substituent; lowerPosition: "left" | "right" };

function FaceBond({ face, from, to }: { face: Face; from: { x: number; y: number }; to: { x: number; y: number } }) {
  return face === "solid" ? <SolidWedge from={from} to={to} width={8}/> : <HashedWedge from={from} to={to} width={8}/>;
}

function EthylTail({ from, end, labelX, labelY }: { from: { x: number; y: number }; end: { x: number; y: number }; labelX: number; labelY: number }) {
  return <><line x1={from.x} y1={from.y} x2={end.x} y2={end.y} stroke="currentColor" strokeWidth="2"/><text x={labelX} y={labelY} fontSize="15">CH₃</text></>;
}

function Five({ n }: { n: number }) {
  const cases: Record<number, RingCase> = {
    166: { upper: "hash", upperGroup: "Me", lower: "solid", lowerGroup: "Et", lowerPosition: "right" },
    167: { upper: "solid", upperGroup: "Et", lower: "solid", lowerGroup: "Me", lowerPosition: "left" },
    168: { upper: "solid", upperGroup: "Et", lower: "solid", lowerGroup: "Et", lowerPosition: "left" },
    169: { upper: "solid", upperGroup: "Et", lower: "solid", lowerGroup: "Me", lowerPosition: "left" },
    170: { upper: "solid", upperGroup: "Et", lower: "hash", lowerGroup: "Et", lowerPosition: "left" },
    171: { upper: "hash", upperGroup: "Et", lower: "hash", lowerGroup: "Et", lowerPosition: "left" },
    172: { upper: "hash", upperGroup: "Et", lower: "solid", lowerGroup: "Me", lowerPosition: "left" },
  };
  if (n === 173) return <svg fill="currentColor" viewBox="0 0 205 145" className={svgClass} role="img" aria-label="source 173 gem-dimethyl cyclopentane"><path d="M53 100 39 61 77 32 115 60 102 100Z" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round"/><line x1="77" y1="32" x2="43" y2="13" stroke="currentColor" strokeWidth="2"/><text x="5" y="18" fontSize="15">H₃C</text><HashedWedge from={{ x: 77, y: 32 }} to={{ x: 117, y: 21 }} width={8}/><text x="121" y="25" fontSize="15">CH₃</text></svg>;
  const c = cases[n];
  const upperFrom = { x: 108, y: 53 }, upperTo = { x: 142, y: 39 };
  const lowerFrom = c.lowerPosition === "right" ? { x: 94, y: 94 } : { x: 45, y: 94 };
  const lowerTo = c.lowerPosition === "right" ? { x: 126, y: 113 } : { x: 18, y: 113 };
  return <svg fill="currentColor" viewBox="0 0 210 155" className={svgClass} role="img" aria-label={`source cyclopentane face structure ${n}`}><path d="M45 94 32 53 69 26 108 53 94 94Z" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round"/><FaceBond face={c.upper} from={upperFrom} to={upperTo}/>{c.upperGroup === "Et" ? <EthylTail from={upperTo} end={{ x: 166, y: 19 }} labelX={168} labelY={23}/> : <text x="144" y="43" fontSize="15">CH₃</text>}<FaceBond face={c.lower} from={lowerFrom} to={lowerTo}/>{c.lowerGroup === "Et" ? <EthylTail from={lowerTo} end={c.lowerPosition === "right" ? { x: 156, y: 99 } : { x: 7, y: 139 }} labelX={c.lowerPosition === "right" ? 158 : 0} labelY={c.lowerPosition === "right" ? 104 : 146}/> : <text x={c.lowerPosition === "right" ? 128 : 0} y="120" fontSize="15">{c.lowerPosition === "right" ? "CH₃" : "H₃C"}</text>}</svg>;
}

function Special({ n }: { n: number }) {
  if (n >= 166 && n <= 173) return <Five n={n}/>;
  if (n === 174) return <svg fill="currentColor" viewBox="0 0 185 130" className={svgClass} role="img" aria-label="source 174 dimethyl cyclopentadiene"><path d="M53 91 42 57 75 35 111 57 99 91Z" fill="none" stroke="currentColor" strokeWidth="2.1"/><line x1="47" y1="59" x2="57" y2="87" stroke="currentColor" strokeWidth="1.35"/><line x1="106" y1="59" x2="96" y2="87" stroke="currentColor" strokeWidth="1.35"/><line x1="42" y1="57" x2="13" y2="51" stroke="currentColor" strokeWidth="2"/><text x="0" y="53" fontSize="15">H₃C</text><line x1="111" y1="57" x2="143" y2="51" stroke="currentColor" strokeWidth="2"/><text x="145" y="55" fontSize="15">CH₃</text></svg>;
  if (n === 175) return <svg fill="currentColor" viewBox="0 0 235 140" className={svgClass} role="img" aria-label="source 175 two cyclopentene systems linked by an exocyclic double bond"><path d="M30 95 19 61 51 40 83 57 73 94Z" fill="none" stroke="currentColor" strokeWidth="2.1"/><line x1="24" y1="63" x2="34" y2="91" stroke="currentColor" strokeWidth="1.35"/><line x1="83" y1="57" x2="123" y2="45" stroke="currentColor" strokeWidth="2.1"/><line x1="80" y1="63" x2="120" y2="51" stroke="currentColor" strokeWidth="1.35"/><path d="M123 45 153 31 184 48 194 82 162 105 133 82Z" fill="none" stroke="currentColor" strokeWidth="2.1"/><line x1="184" y1="53" x2="190" y2="78" stroke="currentColor" strokeWidth="1.35"/></svg>;
  if (n === 176) return <svg fill="currentColor" viewBox="0 0 205 140" className={svgClass} role="img" aria-label="source 176 fused cyclopentane-cyclopentene"><path d="M37 91 28 55 58 33 89 54 81 91Z M89 54 120 54 137 88 108 108 81 91Z" fill="none" stroke="currentColor" strokeWidth="2.1"/><line x1="89" y1="54" x2="81" y2="91" stroke="currentColor" strokeWidth="1.35"/></svg>;
  return null;
}
type F = {n:number; top:"CHO"|"CO₂H"|"CH₂OH"; bottom:"CHO"|"CO₂H"|"CH₂OH"; rows:("L"|"R")[]};
const fs:F[]=[{n:177,top:"CHO",bottom:"CH₂OH",rows:["R","R"]},{n:178,top:"CHO",bottom:"CH₂OH",rows:["L","R"]},{n:179,top:"CH₂OH",bottom:"CO₂H",rows:["R","R","R"]},{n:180,top:"CH₂OH",bottom:"CO₂H",rows:["L","R","R"]},{n:181,top:"CHO",bottom:"CH₂OH",rows:["R","R","R","R"]},{n:182,top:"CHO",bottom:"CH₂OH",rows:["L","L","L","R"]},{n:183,top:"CHO",bottom:"CH₂OH",rows:["R","L","L","R"]},{n:184,top:"CHO",bottom:"CH₂OH",rows:["R","L","R","R"]},{n:185,top:"CHO",bottom:"CH₂OH",rows:["R","L","R","R"]},{n:186,top:"CHO",bottom:"CH₂OH",rows:["R","R","L","R"]}];
function Terminal({value,x,y,up=false}:{value:string;x:number;y:number;up?:boolean}){return <text x={x} y={y+(up?-2:8)} textAnchor="middle" fontSize="12">{value}</text>}
function Fischer({f}:{f:F}){const start=36,step=25;const last=start+(f.rows.length-1)*step;return <svg fill="currentColor" viewBox="0 0 160 180" className="h-auto w-full text-slate-100" role="img" aria-label={`Fischer projection ${f.n}`}><Terminal value={f.top} x={80} y={17}/><line x1="80" y1="24" x2="80" y2={last+16} stroke="currentColor" strokeWidth="2"/>{f.rows.map((s,i)=>{const y=start+i*step;return <g key={y}><line x1="43" y1={y} x2="117" y2={y} stroke="currentColor" strokeWidth="2"/><text x="34" y={y+5} textAnchor="end" fontSize="12">{s==="L"?"HO":"H"}</text><text x="126" y={y+5} fontSize="12">{s==="L"?"H":"OH"}</text></g>})}<Terminal value={f.bottom} x={80} y={last+34}/></svg>}
const ringChecks: Record<number, string> = {
  166: "Me is back and Et is front at adjacent source ring vertices; retain that trans face relationship.",
  167: "The front ethyl and front methyl are on the same ring face (cis).",
  168: "Both ethyl branches are solid wedges: the two labelled substituents are cis.",
  169: "This second cis Me/Et case is retained separately exactly as printed; it is not merged with 167.",
  170: "Et is front at one labelled carbon and back at the other: trans.",
  171: "Both ethyl branches are back (hashed): cis, opposite to its all-front counterpart.",
  172: "Et is back while Me is front: trans. The unequal groups preclude a meso shortcut.",
  173: "The same ring carbon bears a plain ethyl branch and a hashed Me branch; the two ring paths must be compared before a chirality claim.",
  174: "Both double bonds are explicitly in the five-membered diene; no wedge/dash information is supplied.",
  175: "The two five-membered unsaturated rings are joined through the printed exocyclic C=C bond, not a fused six-membered framework.",
  176: "The source is a fused five/five system; the shared bond is the drawn alkene bond.",
};

function FischerSequence({ rows }: { rows: F["rows"] }) {
  return <span>{rows.map((side) => side === "R" ? "OH right" : "OH left").join(" · ")}</span>;
}

export default function IsomerismPart45() {
  const rings = Array.from({ length: 11 }, (_, index) => index + 166);
  return <main className="min-h-screen bg-[#08111f] px-4 py-8 text-white sm:px-6 sm:py-12"><article className="mx-auto max-w-6xl"><Link href="/learn/isomerism" className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100">Isomerism</Link><header className="mt-6 rounded-3xl border border-cyan-300/15 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,.18),_transparent_35%),linear-gradient(135deg,rgba(34,211,238,.08),rgba(2,6,23,.7),rgba(139,92,246,.1))] p-6 sm:p-9"><p className="text-xs font-black uppercase tracking-[.24em] text-cyan-200">Optical Isomerism source · page 116 · Part 45</p><h1 className="mt-3 text-3xl font-black sm:text-5xl">Ring-face and Fischer-projection exercise</h1><p className="mt-3 text-sm leading-7 text-slate-300">Items 166–176 preserve the printed ring faces and unsaturation. Items 177–186 retain all ten source Fischer projections: every horizontal arm is forward and every vertical bond is away.</p></header><section className="mt-7"><h2 className="text-xl font-black text-cyan-100">Constrained cyclic structures (166–176)</h2><div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{rings.map((n) => <article key={n} className="rounded-2xl border border-white/10 bg-white/[.035] p-4"><b>Source structure {n}</b><Special n={n}/><p className="mt-3 text-sm leading-6 text-slate-300">{ringChecks[n]}</p></article>)}</div></section><section className="mt-9"><h2 className="text-xl font-black text-cyan-100">Fischer-projection set (177–186)</h2><p className="mt-2 text-sm text-slate-300">The left/right OH sequence is a part of each question, not decoration. It is given below each complete projection to make an independent configuration check possible.</p><div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">{fs.map((f) => <article key={f.n} className="rounded-2xl border border-white/10 bg-white/[.035] p-4"><b>Source Fischer {f.n}</b><Fischer f={f}/><p className="text-xs leading-5 text-slate-300"><FischerSequence rows={f.rows}/></p></article>)}</div></section><nav className="mt-8 flex justify-between border-t border-white/10 pt-6"><Link href="/learn/isomerism/44" className="rounded-xl border border-white/15 px-4 py-3 text-sm font-bold text-slate-200">← 44</Link><Link href="/learn/isomerism/46" className="rounded-xl border border-white/15 px-4 py-3 text-sm font-bold text-slate-200">46 →</Link></nav></article></main>;
}
