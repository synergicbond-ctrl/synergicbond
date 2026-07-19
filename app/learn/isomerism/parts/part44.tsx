import Link from "next/link";
import { HashedWedge, SolidWedge } from "../components/ChemistryDiagram";

const svgClass = "h-auto w-full text-slate-100";

/** A Kekulé hexagon preserves the actual bond pattern printed in the source. */
function Phenyl({ x, y, r = 28 }: { x: number; y: number; r?: number }) {
  const points = [[x, y-r], [x+24, y-r/2], [x+24, y+r/2], [x, y+r], [x-24, y+r/2], [x-24, y-r/2]];
  const p = points.map((point) => point.join(" ")).join(" ");
  return <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"><polygon points={p}/><line x1={x+4} y1={y-r+5} x2={x+20} y2={y-r/2+5}/><line x1={x+19} y1={y+r/2-5} x2={x+3} y2={y+r-5}/><line x1={x-20} y1={y+r/2-5} x2={x-20} y2={y-r/2+5}/></g>;
}

function Heteroaryl({ n }: { n: 153 | 154 }) {
  return <svg viewBox="0 0 170 130" className={svgClass} role="img" aria-label={`source heteroarene ${n}`}><Phenyl x={85} y={65}/>{n === 153 ? <text x="77" y="98" fontSize="17">N</text> : <><text x="102" y="54" fontSize="17">N</text><text x="77" y="98" fontSize="17">N</text></>}</svg>;
}

function FusedTerpene() {
  return <svg viewBox="0 0 330 240" className={svgClass} role="img" aria-label="source fused terpene 155 with four defined methyl wedges"><g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round">
    <path d="M44 115 70 95 99 113 130 94 160 112 160 149 130 168 99 150 70 172 44 154Z"/>
    <path d="M160 112 191 94 221 112 221 149 191 168 160 149"/>
    <path d="M130 168 160 149 191 168 191 205 160 224 130 205Z"/>
    <line x1="130" y1="94" x2="130" y2="149"/><line x1="136" y1="96" x2="136" y2="147" strokeWidth="1.25"/>
    <line x1="160" y1="112" x2="187" y2="128"/><line x1="160" y1="118" x2="184" y2="132" strokeWidth="1.25"/>
    <line x1="160" y1="149" x2="188" y2="132"/><line x1="163" y1="154" x2="190" y2="138" strokeWidth="1.25"/>
  </g><SolidWedge from={{ x: 44, y: 115 }} to={{ x: 13, y: 98 }} width={9}/><text x="0" y="96" fontSize="16">H₃C</text><SolidWedge from={{ x: 191, y: 94 }} to={{ x: 191, y: 61 }} width={9}/><text x="179" y="54" fontSize="16">CH₃</text><SolidWedge from={{ x: 221, y: 112 }} to={{ x: 253, y: 94 }} width={9}/><text x="254" y="98" fontSize="16">CH₃</text><SolidWedge from={{ x: 191, y: 205 }} to={{ x: 221, y: 220 }} width={9}/><text x="223" y="227" fontSize="16">CH₃</text></svg>;
}

function Dinitrile() {
  return <svg viewBox="0 0 205 145" className={svgClass} role="img" aria-label="source ortho-benzenedicarbonitrile 156"><Phenyl x={85} y={72}/><g fill="none" stroke="currentColor"><line x1="109" y1="58" x2="154" y2="30" strokeWidth="2"/><line x1="112" y1="64" x2="157" y2="36" strokeWidth="1.35"/><line x1="106" y1="52" x2="151" y2="24" strokeWidth="1.35"/><line x1="109" y1="86" x2="154" y2="114" strokeWidth="2"/><line x1="112" y1="80" x2="157" y2="108" strokeWidth="1.35"/><line x1="106" y1="92" x2="151" y2="120" strokeWidth="1.35"/></g><text x="160" y="35" fontSize="16">N</text><text x="160" y="120" fontSize="16">N</text></svg>;
}

function RingFive({ n }: { n: 161 | 162 | 163 | 164 | 165 }) {
  const upperHashed = n === 163;
  const lowerPlain = n === 162;
  const lowerHashed = n === 165;
  const ethyl = n === 164 || n === 165;
  return <svg viewBox="0 0 190 135" className={svgClass} role="img" aria-label={`source cyclopentane face structure ${n}`}><path d="M42 88 28 46 65 19 105 47 91 88Z" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round"/>{upperHashed ? <HashedWedge from={{ x: 105, y: 47 }} to={{ x: 139, y: 34 }} width={8}/> : <SolidWedge from={{ x: 105, y: 47 }} to={{ x: 139, y: 34 }} width={8}/>}<text x="141" y="38" fontSize="15">CH₃</text>{lowerPlain ? <line x1="91" y1="88" x2="122" y2="106" stroke="currentColor" strokeWidth="2"/> : lowerHashed ? <HashedWedge from={{ x: 91, y: 88 }} to={{ x: 122, y: 106 }} width={8}/> : <SolidWedge from={{ x: 91, y: 88 }} to={{ x: 122, y: 106 }} width={8}/>} {ethyl ? <><line x1="122" y1="106" x2="151" y2="94" stroke="currentColor" strokeWidth="2"/><text x="153" y="99" fontSize="15">CH₃</text></> : <text x="124" y="113" fontSize="15">CH₃</text>}</svg>;
}

function FixedCyclopentane() {
  return <svg viewBox="0 0 285 200" className={svgClass} role="img" aria-label="source 157 cyclopentane with two solid-wedge n-propyl substituents"><path d="M111 30 151 59 137 105 89 105 75 59Z" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round"/><SolidWedge from={{ x: 89, y: 105 }} to={{ x: 45, y: 133 }} width={10}/><path d="M45 133 58 167 34 191" fill="none" stroke="currentColor" strokeWidth="2.2"/><text x="3" y="199" fontSize="17">H₃C</text><SolidWedge from={{ x: 137, y: 105 }} to={{ x: 162, y: 140 }} width={10}/><path d="M162 140 207 150 219 187 251 199" fill="none" stroke="currentColor" strokeWidth="2.2"/><text x="252" y="204" fontSize="17">CH₃</text></svg>;
}

function Nitro({ x, y }: { x: number; y: number }) {
  return <g><line x1={x} y1={y} x2={x+18} y2={y+13} stroke="currentColor" strokeWidth="2"/><text x={x+21} y={y+20} fontSize="15">N⁺</text><text x={x+41} y={y+8} fontSize="14">O</text><text x={x+41} y={y+32} fontSize="14">O⁻</text></g>;
}

function CrowdedBiaryl({ n }: { n: 158 | 159 }) {
  if (n === 159) return <svg viewBox="0 0 250 225" className={svgClass} role="img" aria-label="source 159 ortho-cyano ortho-nitro biphenyl"><Phenyl x={128} y={61}/><Phenyl x={128} y={153}/><line x1="128" y1="89" x2="128" y2="125" stroke="currentColor" strokeWidth="2.4"/><g fill="none" stroke="currentColor"><line x1="104" y1="139" x2="63" y2="116" strokeWidth="2"/><line x1="100" y1="144" x2="59" y2="121" strokeWidth="1.3"/><line x1="108" y1="134" x2="67" y2="111" strokeWidth="1.3"/></g><text x="35" y="119" fontSize="16">N</text><Nitro x={152} y={76}/></svg>;
  return <svg viewBox="0 0 300 250" className={svgClass} role="img" aria-label="source 158 crowded nitro sulfonic-acid biaryl"><Phenyl x={150} y={63}/><Phenyl x={150} y={170}/><line x1="150" y1="91" x2="150" y2="142" stroke="currentColor" strokeWidth="2.4"/><line x1="126" y1="77" x2="83" y2="102" stroke="currentColor" strokeWidth="2"/><text x="42" y="104" fontSize="15">S</text><text x="25" y="92" fontSize="14">O</text><text x="25" y="120" fontSize="14">HO</text><line x1="42" y1="97" x2="31" y2="84" stroke="currentColor" strokeWidth="1.6"/><line x1="43" y1="105" x2="31" y2="118" stroke="currentColor" strokeWidth="1.6"/><Nitro x={174} y={76}/><path d="M150 113 108 141 74 137" fill="none" stroke="currentColor" strokeWidth="2"/><line x1="108" y1="141" x2="78" y2="164" stroke="currentColor" strokeWidth="1.3"/><text x="34" y="172" fontSize="16">H₃C</text><path d="M150 113 191 137 217 125 251 132" fill="none" stroke="currentColor" strokeWidth="2"/><text x="254" y="137" fontSize="16">CH₃</text></svg>;
}

function Oligophenyl() {
  return <svg viewBox="0 0 170 350" className={svgClass} role="img" aria-label="source linear para-quinquephenyl 160">{[42, 108, 174, 240, 306].map((y, index) => <g key={y}><Phenyl x={85} y={y}/>{index < 4 && <line x1="85" y1={y+28} x2="85" y2={y+38} stroke="currentColor" strokeWidth="2.2"/>}</g>)}</svg>;
}

function Structural({ n }: { n: number }) {
  if (n === 157) return <FixedCyclopentane/>;
  if (n === 158 || n === 159) return <CrowdedBiaryl n={n}/>;
  if (n === 160) return <Oligophenyl/>;
  return <RingFive n={n as 161 | 162 | 163 | 164 | 165}/>;
}
const checks: Record<number, string> = {
  153: "Planar pyridine has the molecular plane as a mirror plane: achiral.",
  154: "The diazine remains planar; its ring plane is a mirror plane: achiral.",
  155: "The four displayed solid wedges fix a nonsymmetric fused framework; its mirror image is a distinct stereoisomer.",
  156: "The aromatic plane and the identical ortho-C≡N groups give an achiral structure.",
  157: "The two identical n-propyl substituents are cis (both solid wedges); the symmetry-related R,S arrangement is meso/achiral.",
  158: "The crowded, differently substituted biaryl has distinguishable ortho paths; restricted rotation gives an atropisomeric axis.",
  159: "The ortho-C≡N/ortho-NO₂ biaryl has two distinguishable ring paths; its hindered axis is stereogenic.",
  160: "The para-linked oligophenyl has no configurationally stable stereogenic axis under ordinary rotation: achiral.",
  161: "The cis dimethyl face pattern has identical substituents and a symmetry-related R,S form: achiral (meso).",
  162: "The lower methyl is an ordinary source bond, not a wedge/dash. Do not assign an unprinted second ring face.",
  163: "Opposite methyl faces give the trans 1,2-dimethyl relationship; the R,R/S,S pair is enantiomeric.",
  164: "Both substituents are on the drawn front face, but Me and Et remove the internal symmetry: a chiral cis pair.",
  165: "Me is front and Et is back; unequal substituents remove any meso symmetry: a chiral trans pair.",
};

export default function IsomerismPart44() {
  const items = Array.from({ length: 13 }, (_, index) => index + 153);
  return <main className="min-h-screen bg-[#08111f] px-4 py-8 text-white sm:px-6 sm:py-12"><article className="mx-auto max-w-6xl"><Link href="/learn/isomerism" className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100">Isomerism</Link><header className="mt-6 rounded-3xl border border-cyan-300/15 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,.18),_transparent_35%),linear-gradient(135deg,rgba(34,211,238,.08),rgba(2,6,23,.7),rgba(139,92,246,.1))] p-6 sm:p-9"><p className="text-xs font-black uppercase tracking-[.24em] text-cyan-200">Optical Isomerism source · page 115 · Part 44</p><h1 className="mt-3 text-3xl font-black sm:text-5xl">Heteroaryl, rigid-system and ring-face exercise</h1><p className="mt-3 text-sm leading-7 text-slate-300">Source items 153–165 are retained as separate molecular graphs. The audit below identifies the actual symmetry element or stereogenic element for each drawing; it does not substitute a name for a structure.</p></header><section className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{items.map((n) => <article key={n} className="rounded-2xl border border-white/10 bg-white/[.035] p-4"><b>Source structure {n}</b>{n === 153 || n === 154 ? <Heteroaryl n={n}/> : n === 155 ? <FusedTerpene/> : n === 156 ? <Dinitrile/> : <Structural n={n}/>}<p className="mt-3 text-sm leading-6 text-slate-300">{checks[n]}</p></article>)}</section><nav className="mt-8 flex justify-between border-t border-white/10 pt-6"><Link href="/learn/isomerism/43" className="rounded-xl border border-white/15 px-4 py-3 text-sm font-bold text-slate-200">← 43</Link><Link href="/learn/isomerism/45" className="rounded-xl border border-white/15 px-4 py-3 text-sm font-bold text-slate-200">45 →</Link></nav></article></main>;
}
