import Link from "next/link";

type BiphenylItem = { n: number; active: boolean; leftTop?: string; leftBottom?: string; rightTop?: string; rightBottom?: string; leftN?: boolean; rightN?: boolean; rightNOuter?: boolean; bridge?: "top" | "bottom" | "both"; label?: string; note: string };

function Benzene({ x, y, n = false, nOuter = false }: { x: number; y: number; n?: boolean; nOuter?: boolean }) {
  const p = [[x,y-35],[x+31,y-17],[x+31,y+17],[x,y+35],[x-31,y+17],[x-31,y-17]];
  const pts = p.map((point) => point.join(",")).join(" ");
  const inner = (a: number, b: number) => { const [x1,y1]=p[a]; const [x2,y2]=p[b]; const mx=(x1+x2)/2, my=(y1+y2)/2; return <line key={`${a}-${b}`} x1={x1+(mx-x1)*.18} y1={y1+(my-y1)*.18} x2={x2+(mx-x2)*.18} y2={y2+(my-y2)*.18} stroke="currentColor" strokeWidth="2"/>; };
  return <g><polygon points={pts} fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/>{inner(0,1)}{inner(2,3)}{inner(4,5)}{n && <text x={nOuter ? x+17 : x-27} y={y-13} fontSize="14" fontWeight="800">N</text>}</g>;
}
function Biaryl({ item }: { item: BiphenylItem }) {
  const label = (value: string | undefined, x: number, y: number) => value ? <text x={x} y={y} textAnchor="middle" fontSize="12" fontWeight="800">{value}</text> : null;
  const bridgePath = item.bridge === "top" ? "M64 49 85 25 111 25 140 48 169 25 195 25 216 49" : item.bridge === "bottom" ? "M64 101 85 125 111 125 140 102 169 125 195 125 216 101" : "M64 49 85 25 111 25 140 48 169 25 195 25 216 49 M64 101 85 125 111 125 140 102 169 125 195 125 216 101";
  return <svg fill="currentColor" viewBox="0 0 280 158" className="h-auto w-full text-slate-100" role="img" aria-label={`item ${item.n}: ${item.active ? "optically active" : "optically inactive"} biaryl structure`}><Benzene x={90} y={75} n={item.leftN}/><Benzene x={190} y={75} n={item.rightN} nOuter={item.rightNOuter}/><line x1="121" y1="75" x2="159" y2="75" stroke="currentColor" strokeWidth="4"/>{label(item.leftTop,65,22)}{label(item.leftBottom,65,142)}{label(item.rightTop,215,22)}{label(item.rightBottom,215,142)}{item.bridge && <path d={bridgePath} fill="none" stroke="#c4b5fd" strokeWidth="3" strokeLinejoin="round"/>}{item.label && <text x="140" y="151" textAnchor="middle" fontSize="11" fill="#c4b5fd">{item.label}</text>}</svg>;
}
function Terphenyl({ item }: { item: BiphenylItem }) {
  const label = (value: string | undefined, x: number, y: number) => value ? <text x={x} y={y} textAnchor="middle" fontSize="12" fontWeight="800">{value}</text> : null;
  return <svg fill="currentColor" viewBox="0 0 280 150" className="h-auto w-full text-slate-100" role="img" aria-label={`item ${item.n}: substituted terphenyl or heteroaryl system`}><Benzene x={140} y={76}/><Benzene x={58} y={76} n={item.leftN}/><Benzene x={222} y={76} n={item.rightN} nOuter={item.rightNOuter}/><line x1="89" y1="76" x2="109" y2="76" stroke="currentColor" strokeWidth="3"/><line x1="171" y1="76" x2="191" y2="76" stroke="currentColor" strokeWidth="3"/>{label(item.leftTop,42,20)}{label(item.leftBottom,42,143)}{label(item.rightTop,238,20)}{label(item.rightBottom,238,143)}{item.n >= 17 && item.n <= 21 && <><text x="113" y="28" fontSize="11" fontWeight="800">Me</text><text x="167" y="28" fontSize="11" fontWeight="800">Me</text><text x="113" y="141" fontSize="11" fontWeight="800">Me</text><text x="167" y="141" fontSize="11" fontWeight="800">Me</text></>}{item.n === 22 && <><text x="130" y="27" fontSize="12" fontWeight="800">Cl</text><text x="145" y="27" fontSize="12" fontWeight="800">Cl</text><text x="130" y="142" fontSize="12" fontWeight="800">Br</text><text x="145" y="142" fontSize="12" fontWeight="800">Br</text></>}</svg>;
}
type ArylSubstituent = { position: number; label?: string };

/** A horizontal aromatic ring used for the source's crowded heteroaryl series. */
function FlatAryl({ x, y, nitrogens = [], substituents = [] }: { x: number; y: number; nitrogens?: number[]; substituents?: ArylSubstituent[] }) {
  const p = [[x - 27, y - 35], [x + 27, y - 35], [x + 45, y], [x + 27, y + 35], [x - 27, y + 35], [x - 45, y]];
  const points = p.map((point) => point.join(",")).join(" ");
  const innerBond = (a: number, b: number) => {
    const [x1, y1] = p[a]; const [x2, y2] = p[b];
    const mx = (x1 + x2) / 2; const my = (y1 + y2) / 2;
    return <line key={`${a}-${b}`} x1={x1 + (mx - x1) * .2} y1={y1 + (my - y1) * .2} x2={x2 + (mx - x2) * .2} y2={y2 + (my - y2) * .2} stroke="currentColor" strokeWidth="2" />;
  };
  return <g>
    <polygon points={points} fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
    {innerBond(0, 1)}{innerBond(2, 3)}{innerBond(4, 5)}
    {substituents.map(({ position, label }) => {
      const [sx, sy] = p[position]; const vx = sx - x; const vy = sy - y; const magnitude = Math.hypot(vx, vy);
      const ex = sx + vx / magnitude * 22; const ey = sy + vy / magnitude * 22;
      return <g key={`${position}-${label ?? "Me"}`}><line x1={sx} y1={sy} x2={ex} y2={ey} stroke="currentColor" strokeWidth="2.5" />{label && <text x={ex + (vx === 0 ? 0 : Math.sign(vx) * 3)} y={ey + (vy < 0 ? -4 : vy > 0 ? 12 : 5)} textAnchor={vx === 0 ? "middle" : vx < 0 ? "end" : "start"} fontSize="13" fontWeight="800">{label}</text>}</g>;
    })}
    {nitrogens.map((position) => { const [nx, ny] = p[position]; return <text key={position} x={nx} y={ny + 5} textAnchor="middle" fontSize="15" fontWeight="900" fill="#f8fafc">N</text>; })}
  </g>;
}

/** Source items 18–21: every nitrogen is placed at its actual ring vertex. */
function CrowdedHeteroAryl({ n }: { n: 18 | 19 | 20 | 21 }) {
  const nitrogenVertices: Record<18 | 19 | 20 | 21, [number[], number[]]> = {
    18: [[5], [1]],
    19: [[5, 4], [1]],
    20: [[5], [2]],
    21: [[5], [3]],
  };
  const [leftN, rightN] = nitrogenVertices[n];
  return <svg fill="currentColor" viewBox="0 0 300 154" className="h-auto w-full text-slate-100" role="img" aria-label={`item ${n}: source-matched crowded heteroaryl system`}>
    <FlatAryl x={150} y={77} substituents={[{ position: 0 }, { position: 1 }, { position: 3 }, { position: 4 }]} />
    <FlatAryl x={64} y={77} nitrogens={leftN} substituents={[{ position: 1 }, { position: 3 }]} />
    <FlatAryl x={236} y={77} nitrogens={rightN} substituents={[{ position: 0 }, { position: 4 }]} />
    <line x1="109" y1="77" x2="105" y2="77" stroke="currentColor" strokeWidth="3" />
    <line x1="195" y1="77" x2="191" y2="77" stroke="currentColor" strokeWidth="3" />
  </svg>;
}

/** Source item 22, including the paired NO₂/Me and Cl/Br substitution pattern. */
function HalogenArylItem() {
  return <svg fill="currentColor" viewBox="0 0 300 164" className="h-auto w-full text-slate-100" role="img" aria-label="item 22: source-matched nitro methyl and halogen crowded terphenyl">
    <FlatAryl x={150} y={82} substituents={[{ position: 0, label: "Cl" }, { position: 1, label: "Cl" }, { position: 3, label: "Br" }, { position: 4, label: "Br" }]} />
    <FlatAryl x={64} y={82} substituents={[{ position: 1, label: "NO₂" }, { position: 3 }]} />
    <FlatAryl x={236} y={82} substituents={[{ position: 0 }, { position: 4, label: "NO₂" }]} />
    <line x1="109" y1="82" x2="105" y2="82" stroke="currentColor" strokeWidth="3" />
    <line x1="195" y1="82" x2="191" y2="82" stroke="currentColor" strokeWidth="3" />
  </svg>;
}

/** Source item 23: a methyl-substituted cyclopropylidene allene, not a generic cage. */
function ConstrainedAllene() {
  return <svg fill="currentColor" viewBox="0 0 280 150" className="h-auto w-full text-slate-100" role="img" aria-label="item 23 methyl-substituted cyclopropylidene allene with stereogenic axis">
    <path d="M96 36V93L145 65Z" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinejoin="round" />
    <line x1="145" y1="59" x2="202" y2="59" stroke="currentColor" strokeWidth="3" />
    <line x1="145" y1="71" x2="202" y2="71" stroke="currentColor" strokeWidth="3" />
    <line x1="96" y1="93" x2="70" y2="133" stroke="currentColor" strokeWidth="3" />
  </svg>;
}
function FusedAryl({ n }: { n: 14 | 15 | 16 }) {
  const bridge = n === 14 ? "M121 75 107 111 132 139 162 139 176 104" : n === 15 ? "M121 75 112 111 140 137 168 111 159 75" : "M121 75 111 108 140 136 169 108 159 75";
  const label = n === 14 ? "source three-atom lower bridge" : n === 15 ? "source fluorene-type fused five-member ring" : "source fused indane-type lower ring";
  return <svg fill="currentColor" viewBox="0 0 280 160" className="h-auto w-full text-slate-100" role="img" aria-label={`item ${n} ${label}`}><Benzene x={90} y={75}/><Benzene x={190} y={75}/><line x1="121" y1="75" x2="159" y2="75" stroke="currentColor" strokeWidth="4"/><path d={bridge} fill="none" stroke="#c4b5fd" strokeWidth="3.5" strokeLinejoin="round"/><text x="140" y="154" textAnchor="middle" fontSize="12" fill="#c4b5fd">{label}</text></svg>;
}
function Cage({ n, kind }: { n: number; kind: "star" | "polycycle" }) {
  return <svg fill="currentColor" viewBox="0 0 280 150" className="h-auto w-full text-slate-100" role="img" aria-label={`item ${n} ${kind} structure`}><path d={kind === "star" ? "M76 75 140 38 204 75 140 112Z M108 20v110 M172 20v110 M76 75 140 20 204 75 140 130 76 75 M76 75 140 130 204 75 140 20" : "M109 39 140 20 171 39 194 70 171 111 140 130 109 111 86 70Z M109 39 82 20 60 37 76 69 86 70 M171 39 198 20 220 37 204 69 194 70 M109 111 82 130 60 113 76 71 86 70 M171 111 198 130 220 113 204 71 194 70"} fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/><text x="45" y="138" fontSize="18" fill="#67e8f9">{n}</text></svg>;
}

const biaryls: BiphenylItem[] = [
  {n:3,active:false,leftTop:"Me",leftBottom:"Me",rightTop:"Me",rightBottom:"Me",note:"The identical ortho methyl environments leave an internal symmetry relationship; the axis is not stereogenic."},
  {n:4,active:true,leftTop:"Cl",leftBottom:"Br",rightTop:"Cl",rightBottom:"Br",note:"On both rings, the two ortho paths are Cl versus Br. Restricted rotation therefore gives non-superimposable axial forms."},
  {n:5,active:false,leftTop:"Cl",leftBottom:"Cl",rightTop:"Br",rightBottom:"Br",note:"Each ring has two equivalent ortho paths (Cl/Cl or Br/Br), so the locked conformation is still achiral."},
  {n:6,active:false,leftTop:"F",leftBottom:"F",rightTop:"F",rightBottom:"F",note:"All four ortho substituents are equivalent; no stereogenic biaryl axis results."},
  {n:7,active:true,leftTop:"COOH",leftBottom:"Me",rightTop:"Me",rightBottom:"COOH",note:"COOH and Me distinguish both terminal ring paths and steric crowding restricts the bond rotation."},
  {n:8,active:true,leftTop:"NO₂",leftBottom:"Me",rightTop:"Me",rightBottom:"NO₂",note:"The non-equivalent NO₂/Me ortho paths give a stereogenic axis when the aryl bond is locked."},
  {n:9,active:false,leftTop:"Me",leftBottom:"Me",rightTop:"Me",rightBottom:"Me",note:"The repeated methyl pattern supplies equivalent paths and removes axial chirality."},
  {n:10,active:true,leftTop:"CN",leftBottom:"CN",rightTop:"Me",rightBottom:"Me",note:"The two ring types are differentiated at the axis: cyano-substituted paths are not equivalent to methyl-substituted paths."},
  {n:11,active:false,leftTop:"Me",leftBottom:"Me",rightTop:"Me",rightBottom:"Me",note:"Despite ortho crowding, the displayed substitution pattern retains an internal symmetry element."},
  {n:12,active:true,leftTop:"Me",leftBottom:"Me",rightTop:"Me",rightBottom:"Me",leftN:true,rightN:true,rightNOuter:true,note:"The source places the right-ring nitrogen at the outer ortho position. The two ring nitrogens make the terminal paths non-equivalent, so the locked axis is chiral."},
  {n:13,active:false,note:"Unsubstituted biphenyl rotates freely under ordinary conditions, so no isolable axial enantiomers are present."},
  {n:14,active:true,bridge:"bottom",label:"ortho bridge locks the biaryl axis",note:"The bridge prevents the aryl rings from becoming coplanar and leaves a handed locked arrangement."},
  {n:15,active:true,bridge:"bottom",label:"bridged biaryl: rotation is locked",note:"The bridged framework locks a non-superimposable aryl arrangement; it is not merely a fast rotamer."},
  {n:16,active:false,bridge:"bottom",note:"A bridge restricts motion, but the displayed bridged framework has an improper symmetry element and is achiral."},
  {n:17,active:false,leftTop:"Me",leftBottom:"Me",rightTop:"Me",rightBottom:"Me",label:"symmetry removes chirality",note:"The symmetric three-ring substitution pattern has equivalent halves, cancelling any apparent twist."},
  {n:18,active:false,leftTop:"Me",leftBottom:"Me",rightTop:"Me",rightBottom:"Me",leftN:true,rightN:true,rightNOuter:true,note:"The source has matched outer-ortho nitrogen positions; its central and terminal methyl pattern retains an internal symmetry relationship."},
  {n:19,active:false,leftTop:"Me",leftBottom:"Me",rightTop:"Me",rightBottom:"Me",leftN:true,rightN:true,note:"The left diazine has two source-positioned nitrogens while the right pyridine has one; the displayed whole framework nevertheless has an improper symmetry relationship and is inactive."},
  {n:20,active:false,leftTop:"Me",leftBottom:"Me",rightTop:"Me",rightBottom:"Me",leftN:true,rightN:true,note:"The source places the left and right pyridine nitrogens at opposite outer vertices; this matched arrangement is optically inactive."},
  {n:21,active:false,leftTop:"Me",leftBottom:"Me",rightTop:"Me",rightBottom:"Me",leftN:true,rightN:true,note:"The source’s upper-left/lower-right nitrogen pair remains symmetry-related, so no persistent handed axis exists."},
  {n:22,active:false,leftTop:"NO₂",leftBottom:"Me",rightTop:"Me",rightBottom:"NO₂",label:"symmetry-equivalent substitution",note:"The paired nitro/methyl and halogen pattern is internally matched, giving an achiral overall framework."},
];

function Card({ children, n, active, note }: { children: React.ReactNode; n: number; active: boolean; note: string }) { return <article className="rounded-2xl border border-white/10 bg-white/[.035] p-3"><div className="flex items-start justify-between gap-2"><span className="rounded bg-slate-700 px-2 py-1 text-xs font-black">{n}</span><span className={active ? "rounded-full bg-emerald-400/15 px-2 py-1 text-xs font-black text-emerald-200" : "rounded-full bg-rose-400/15 px-2 py-1 text-xs font-black text-rose-200"}>{active ? "optically active" : "inactive"}</span></div>{children}<p className="mt-2 border-t border-white/10 pt-2 text-xs leading-5 text-slate-300">{note}</p></article> }

export default function IsomerismPart30() {
  return <main className="min-h-screen bg-[#08111f] px-4 py-8 text-white sm:px-6 sm:py-12"><article className="mx-auto max-w-7xl">
    <Link href="/learn/isomerism" className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100">Isomerism</Link>
    <header className="mt-6 rounded-3xl border border-cyan-300/15 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,.18),_transparent_35%),linear-gradient(135deg,rgba(34,211,238,.08),rgba(2,6,23,.7),rgba(139,92,246,.1))] p-6 sm:p-9"><p className="text-xs font-black uppercase tracking-[.24em] text-cyan-200">Optical Isomerism source · page 105 · Part 30</p><h1 className="mt-3 text-3xl font-black sm:text-5xl">Identify optically active compounds</h1><p className="mt-3 max-w-4xl text-sm leading-7 text-slate-300">The source worksheet tests axial chirality, symmetry and conformational stability. Each numbered source structure below is independently retained; a check means active and a cross means inactive.</p></header>
    <section className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-3"><Card n={1} active={false} note="The crossed cage has an improper symmetry element; it is achiral."><Cage n={1} kind="star"/></Card><Card n={2} active={false} note="The symmetric polycyclic framework is superimposable on its mirror image."><Cage n={2} kind="polycycle"/></Card>{biaryls.map((item) => <Card key={item.n} n={item.n} active={item.active} note={item.note}>{item.n >= 18 && item.n <= 21 ? <CrowdedHeteroAryl n={item.n as 18 | 19 | 20 | 21}/> : item.n === 22 ? <HalogenArylItem/> : item.n >= 17 ? <Terphenyl item={item}/> : item.n >= 14 ? <FusedAryl n={item.n as 14 | 15 | 16}/> : <Biaryl item={item}/>}</Card>)}<Card n={23} active={true} note="The methyl-substituted cyclopropylidene allene has a stereogenic axis because its terminal substituent planes are locked and non-superimposable."><ConstrainedAllene/></Card></section>
    <aside className="mt-6 rounded-2xl border border-amber-300/25 bg-amber-300/[.07] p-5 text-sm leading-7 text-amber-50"><strong>Examination point:</strong> bulky ortho groups alone are not a sufficient test. Check both persistence of the restricted conformation and the absence of a plane, centre or other improper symmetry element.</aside>
    <nav className="mt-8 flex justify-between border-t border-white/10 pt-6"><Link href="/learn/isomerism/29" className="rounded-xl border border-white/15 px-4 py-3 text-sm font-bold text-slate-200">← 29</Link><Link href="/learn/isomerism" className="rounded-xl border border-cyan-300/30 bg-cyan-300/10 px-4 py-3 text-sm font-bold text-cyan-100">Chapter overview</Link></nav>
  </article></main>;
}
