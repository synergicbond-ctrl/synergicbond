import Link from "next/link";

type XY = { x: number; y: number };

function Bond({ from, to, width = 2.2 }: { from: XY; to: XY; width?: number }) {
  return <line x1={from.x} y1={from.y} x2={to.x} y2={to.y} stroke="currentColor" strokeWidth={width} strokeLinecap="round" />;
}

function NewmanCase({ number, front, rear, rotation = 0 }: { number: 90 | 91 | 92; front: [string, string, string]; rear: [string, string, string]; rotation?: number }) {
  const point = (angle: number, radius: number) => ({ x: 105 + radius * Math.cos((angle * Math.PI) / 180), y: 75 + radius * Math.sin((angle * Math.PI) / 180) });
  const frontAngles = [-90, 30, 150];
  const rearAngles = frontAngles.map((angle) => angle + 60 + rotation);
  return <svg viewBox="0 0 210 150" className="h-auto w-full text-slate-100" role="img" aria-label={`Newman projection ${number}`}>
    <circle cx="105" cy="75" r="31" fill="none" stroke="currentColor" strokeWidth="2" />
    {rearAngles.map((angle, index) => { const end = point(angle, 55); return <g key={`r${angle}`}><Bond from={point(angle, 31)} to={end} /><text x={end.x + (end.x < 105 ? -4 : 4)} y={end.y + 5} textAnchor={end.x < 90 ? "end" : "start"} fontSize="13">{rear[index]}</text></g>; })}
    {frontAngles.map((angle, index) => { const end = point(angle, 47); return <g key={`f${angle}`}><Bond from={{ x: 105, y: 75 }} to={end} width={2.6} /><text x={end.x + (end.x < 105 ? -4 : 4)} y={end.y + 5} textAnchor={end.x < 90 ? "end" : "start"} fontSize="13" fontWeight="700">{front[index]}</text></g>; })}
    <circle cx="105" cy="75" r="4" fill="currentColor" />
  </svg>;
}

type FischerData = { number: number; top: "CO₂H" | "CHO"; bottom: "CO₂H" | "CHO"; rows: ("OH" | "H")[] };
const fischers: FischerData[] = [
  { number: 93, top: "CO₂H", bottom: "CO₂H", rows: ["H", "OH", "H"] },
  { number: 94, top: "CHO", bottom: "CHO", rows: ["OH", "OH", "H"] },
  { number: 95, top: "CHO", bottom: "CHO", rows: ["OH", "H", "H", "H"] },
  { number: 96, top: "CHO", bottom: "CHO", rows: ["H", "H", "H", "H"] },
  { number: 97, top: "CHO", bottom: "CHO", rows: ["OH", "H", "OH", "H"] },
  { number: 98, top: "CHO", bottom: "CHO", rows: ["OH", "H", "OH", "H"] },
];

function Aldehyde({ x, y, flip = false }: { x: number; y: number; flip?: boolean }) {
  const dy = flip ? -1 : 1;
  return <g><Bond from={{ x, y }} to={{ x, y: y + 18 * dy }} /><Bond from={{ x: x + 3, y }} to={{ x: x + 3, y: y + 18 * dy }} width={1.5} /><text x={x + 8} y={y + 12 * dy} fontSize="13">O</text></g>;
}

function Carboxyl({ x, y, flip = false }: { x: number; y: number; flip?: boolean }) {
  const dy = flip ? -1 : 1;
  return <g><text x={x - 24} y={y + 5 * dy} fontSize="12">HO</text><Bond from={{ x: x - 2, y }} to={{ x: x + 12, y }} /><Bond from={{ x: x + 12, y }} to={{ x: x + 12, y: y + 17 * dy }} /><Bond from={{ x: x + 15, y }} to={{ x: x + 15, y: y + 17 * dy }} width={1.4} /><text x={x + 20} y={y + 12 * dy} fontSize="12">O</text></g>;
}

function Fischer({ item }: { item: FischerData }) {
  const ys = item.rows.map((_, index) => 52 + index * 30);
  const terminalBottom = ys.at(-1)! + 30;
  return <svg viewBox="0 0 180 205" className="h-auto w-full text-slate-100" role="img" aria-label={`Fischer projection ${item.number}`}>
    {item.top === "CHO" ? <Aldehyde x={90} y={14} /> : <Carboxyl x={78} y={18} />}
    <Bond from={{ x: 90, y: item.top === "CHO" ? 32 : 35 }} to={{ x: 90, y: 52 }} />
    {ys.map((y, index) => <g key={y}><Bond from={{ x: 90, y }} to={{ x: 90, y: y + 30 }} /><Bond from={{ x: 57, y }} to={{ x: 123, y }} /><text x="47" y={y + 5} textAnchor="end" fontSize="13">{item.rows[index] === "OH" ? "HO" : "H"}</text><text x="133" y={y + 5} fontSize="13">{item.rows[index] === "OH" ? "H" : "OH"}</text></g>)}
    {item.bottom === "CHO" ? <Aldehyde x={90} y={terminalBottom + 18} flip /> : <Carboxyl x={78} y={terminalBottom + 18} flip />}
  </svg>;
}

function AromaticRing({ cx, cy }: { cx: number; cy: number }) {
  const points = [-90, -30, 30, 90, 150, 210].map((a) => `${cx + 28 * Math.cos(a * Math.PI / 180)},${cy + 28 * Math.sin(a * Math.PI / 180)}`).join(" ");
  return <g fill="none" stroke="currentColor" strokeWidth="2"><polygon points={points} />{[[ -90, -30 ], [30, 90], [150, 210]].map(([a,b]) => <Bond key={a} from={{x:cx+23*Math.cos(a*Math.PI/180),y:cy+23*Math.sin(a*Math.PI/180)}} to={{x:cx+23*Math.cos(b*Math.PI/180),y:cy+23*Math.sin(b*Math.PI/180)}} width={1.4}/>)}</g>;
}

function Atropisomer({ number }: { number: 99 | 100 | 101 }) {
  if(number===101)return <svg viewBox="0 0 320 155" className="h-auto w-full text-slate-100" role="img" aria-label="source hindered terphenyl 101 with nitro group"><AromaticRing cx={56} cy={80}/><AromaticRing cx={160} cy={80}/><AromaticRing cx={264} cy={80}/><Bond from={{x:80,y:68}} to={{x:136,y:92}} width={3}/><Bond from={{x:184,y:68}} to={{x:240,y:92}} width={3}/><text x="76" y="42" fontSize="13">Cl</text><text x="74" y="129" fontSize="13">Br</text><text x="132" y="40" fontSize="13">Cl</text><text x="136" y="132" fontSize="13">Br</text><Bond from={{x:78,y:57}} to={{x:80,y:45}}/><Bond from={{x:78,y:102}} to={{x:80,y:120}}/><Bond from={{x:139,y:55}} to={{x:134,y:43}}/><Bond from={{x:139,y:104}} to={{x:139,y:121}}/><Bond from={{x:288,y:80}} to={{x:308,y:80}}/><text x="307" y="84" fontSize="17">N</text><text x="317" y="68" fontSize="12">O</text><text x="317" y="100" fontSize="12">O</text><text x="316" y="82" fontSize="13">+</text><text x="316" y="111" fontSize="12">−</text></svg>;
  const leftTop = number === 100 ? "Cl" : "Cl";
  const rightTop = number === 100 ? "Br" : "Cl";
  const leftBottom = number === 100 ? "Cl" : "Br";
  const rightBottom = number === 100 ? "Br" : "Br";
  return <svg viewBox="0 0 260 155" className="h-auto w-full text-slate-100" role="img" aria-label={`hindered biaryl ${number}`}>
    <AromaticRing cx={78} cy={80} /><AromaticRing cx={182} cy={80} /><Bond from={{x:102,y:68}} to={{x:158,y:92}} width={3}/>
    <text x="98" y="42" fontSize="13">{leftTop}</text><text x="151" y="40" fontSize="13">{rightTop}</text><text x="96" y="129" fontSize="13">{leftBottom}</text><text x="157" y="132" fontSize="13">{rightBottom}</text>
    <Bond from={{x:99,y:57}} to={{x:101,y:45}} /><Bond from={{x:160,y:55}} to={{x:155,y:43}} /><Bond from={{x:99,y:102}} to={{x:101,y:120}} /><Bond from={{x:160,y:104}} to={{x:160,y:121}} />
  </svg>;
}

export default function IsomerismPart41() {
  const newmans = [
    { number: 90 as const, front: ["CH₃", "H", "H"] as [string, string, string], rear: ["CH₃", "H", "H"] as [string, string, string] },
    { number: 91 as const, front: ["CH₃", "H", "H"] as [string, string, string], rear: ["H", "CH₃", "H"] as [string, string, string] },
    { number: 92 as const, front: ["CH₃", "H", "H"] as [string, string, string], rear: ["H", "H", "CH₃"] as [string, string, string] },
  ];
  return <main className="min-h-screen bg-[#08111f] px-4 py-8 text-white sm:px-6 sm:py-12"><article className="mx-auto max-w-6xl"><Link href="/learn/isomerism" className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100">Isomerism</Link><header className="mt-6 rounded-3xl border border-cyan-300/15 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,.18),_transparent_35%),linear-gradient(135deg,rgba(34,211,238,.08),rgba(2,6,23,.7),rgba(139,92,246,.1))] p-6 sm:p-9"><p className="text-xs font-black uppercase tracking-[.24em] text-cyan-200">Optical Isomerism source · page 112 · Part 41</p><h1 className="mt-3 text-3xl font-black sm:text-5xl">Projection and atropisomerism exercise</h1><p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">The source continues its numbered structure-only exercise with Newman projections (90–92), Fischer projections (93–98), and three hindered biaryls (99–101). Each original structure is rendered separately rather than collapsed into a generic symmetry example.</p></header><section className="mt-7"><h2 className="text-xl font-black text-cyan-100">Newman projections (90–92)</h2><p className="mt-2 text-sm leading-7 text-slate-300">Read the centre as the front carbon and the circle as the rear carbon. Determine chirality from the complete three-dimensional molecule, not from an isolated staggered drawing.</p><div className="mt-4 grid gap-5 md:grid-cols-3">{newmans.map((item) => <article key={item.number} className="rounded-2xl border border-white/10 bg-white/[.035] p-4"><b>{item.number}</b><NewmanCase {...item} /><p className="text-sm text-slate-300">Keep front and rear substituent assignments fixed during any Newman-to-sawhorse conversion.</p></article>)}</div></section><section className="mt-9"><h2 className="text-xl font-black text-cyan-100">Fischer-projection set (93–98)</h2><p className="mt-2 text-sm leading-7 text-slate-300">Horizontal bonds project forward and the vertical chain projects away. Compare the sequence of left/right hydroxyl groups and then test for an internal symmetry element; do not decide solely from the number of crossings.</p><div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{fischers.map((item) => <article key={item.number} className="rounded-2xl border border-white/10 bg-white/[.035] p-4"><b>{item.number}</b><Fischer item={item} /><p className="text-sm text-slate-300">Assign each stereocentre in the displayed orientation before pairing a structure with its mirror image.</p></article>)}</div></section><section className="mt-9"><h2 className="text-xl font-black text-cyan-100">Hindered biaryls (99–101)</h2><p className="mt-2 text-sm leading-7 text-slate-300">The ortho halogens restrict rotation around the biaryl bond. First check whether the two aromatic-ring paths at each end are constitutionally different; only then can the twisted axis be stereogenic.</p><div className="mt-4 grid gap-5 md:grid-cols-3">{([99,100,101] as const).map((number) => <article key={number} className="rounded-2xl border border-white/10 bg-white/[.035] p-4"><b>{number}</b><Atropisomer number={number} /><p className="text-sm text-slate-300">Examination point: restricted rotation alone is insufficient; the two paths at both termini of the axis must be distinguishable.</p></article>)}</div></section><nav className="mt-8 flex justify-between border-t border-white/10 pt-6"><Link href="/learn/isomerism/40" className="rounded-xl border border-white/15 px-4 py-3 text-sm font-bold text-slate-200">← 40</Link><Link href="/learn/isomerism" className="rounded-xl border border-cyan-300/30 bg-cyan-300/10 px-4 py-3 text-sm font-bold text-cyan-100">Chapter overview</Link></nav></article></main>;
}
