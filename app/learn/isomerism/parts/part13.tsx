import Link from "next/link";
import { BlockMath } from "@/components/math/react-katex";

// ─────────────────────────────────────────────────────────────────────────────
// Optical Isomerism source · pages 36–58 · Part 13
// Full source audit of a 23-page handwritten unit: racemic mixtures,
// diastereomers, meso compounds (extensive worked galleries), resolution,
// racemisation, enantiomeric excess, systematic chiral-centre counting,
// axial chirality, allenes, spiranes, biphenyl atropisomerism, terphenyls,
// hemispiranes, N/P/S chirality (pyramidal inversion), rigid bridgeheads
// and helicenes.
// ─────────────────────────────────────────────────────────────────────────────

const H = "H";

function FischerPair({ top, bottom, left1, right1, left2, right2, label1, label2 }: {
  top: string; bottom: string; left1: string; right1: string; left2: string; right2: string; label1: string; label2: string;
}) {
  const col = (cx: number, l: string, r: string, label: string) => (
    <g key={cx}>
      <line x1={cx} y1="15" x2={cx} y2="140" stroke="currentColor" strokeWidth="2.6" />
      <line x1={cx - 55} y1="77" x2={cx + 55} y2="77" stroke="currentColor" strokeWidth="2.6" />
      <text x={cx} y="5" textAnchor="middle" fontSize="14">{top}</text>
      <text x={cx} y="163" textAnchor="middle" fontSize="14">{bottom}</text>
      <text x={cx - 65} y="82" textAnchor="end" fontSize="14">{l}</text>
      <text x={cx + 65} y="82" fontSize="14">{r}</text>
      <text x={cx} y="185" textAnchor="middle" fontSize="12.5" fill="#67e8f9">{label}</text>
    </g>
  );
  return (
    <svg fill="currentColor" viewBox="0 0 340 195" className="min-w-[300px] w-full text-slate-100" role="img" aria-label={`Fischer projection pair ${label1} and ${label2}`}>
      {col(90, left1, right1, label1)}
      {col(250, left2, right2, label2)}
    </svg>
  );
}

/** Compact meso/no-meso gallery card — a small correctly-connected schematic
 *  plus the source verdict, used across the several worked-example banks. */
function VerdictCard({ children, verdict, note }: { children: React.ReactNode; verdict: "yes" | "no"; note: string }) {
  return (
    <div className="flex flex-col items-center rounded-xl border border-white/10 bg-[#050b16] p-3">
      <div className="h-24 w-full">{children}</div>
      <span className={`mt-2 text-xs font-black ${verdict === "yes" ? "text-emerald-300" : "text-rose-300"}`}>{verdict === "yes" ? "✓" : "✗"} {note}</span>
    </div>
  );
}

function RingSVG({ n, subs }: { n: 3 | 4 | 5 | 6; subs: { angle: number; label: string }[] }) {
  const pts = Array.from({ length: n }, (_, i) => {
    const a = (i / n) * 2 * Math.PI - Math.PI / 2;
    return { x: 50 + Math.cos(a) * 26, y: 40 + Math.sin(a) * 26 };
  });
  return (
    <svg fill="currentColor" viewBox="0 0 100 90" className="h-full w-full text-slate-200">
      <path d={`M ${pts.map((p) => `${p.x} ${p.y}`).join(" L ")} Z`} fill="none" stroke="currentColor" strokeWidth="1.8" />
      {subs.map((s, i) => {
        const a = (s.angle * Math.PI) / 180;
        const x0 = 50 + Math.cos(a) * 26, y0 = 40 + Math.sin(a) * 26;
        const x1 = 50 + Math.cos(a) * 40, y1 = 40 + Math.sin(a) * 40;
        return <g key={i}><line x1={x0} y1={y0} x2={x1} y2={y1} stroke="currentColor" strokeWidth="1.6" /><text x={x1 + (Math.cos(a) > 0 ? 2 : -2)} y={y1 + 3} fontSize="9" textAnchor={Math.cos(a) > 0 ? "start" : "end"}>{s.label}</text></g>;
      })}
    </svg>
  );
}

function AlleneOrbital({ odd }: { odd: boolean }) {
  return (
    <svg fill="currentColor" viewBox="0 0 260 110" className="h-auto w-full text-slate-100" role="img" aria-label={odd ? "Allene with odd number of cumulated double bonds shows geometrical isomerism" : "Allene with even number of cumulated double bonds shows optical isomerism"}>
      <line x1="20" y1="55" x2="240" y2="55" stroke="currentColor" strokeWidth="2" />
      {(odd ? [40, 100, 160, 220] : [40, 130, 220]).map((x, i, arr) => (
        <g key={x}>
          {i < arr.length - 1 && <circle cx={(x + arr[i + 1]) / 2} cy="55" r="14" fill="none" stroke={i % 2 === 0 ? "#67e8f9" : "#c4b5fd"} strokeWidth="1.6" strokeDasharray="3 3" />}
        </g>
      ))}
      <line x1="20" y1="15" x2="20" y2="95" stroke="#c4b5fd" strokeWidth="1.6" strokeDasharray="4 3" />
      <line x1="240" y1={odd ? 15 : 95} x2="240" y2={odd ? 95 : 15} stroke="#c4b5fd" strokeWidth="1.6" strokeDasharray="4 3" />
      <text x="130" y="100" textAnchor="middle" fontSize="12" fill="#94a3b8">terminal planes {odd ? "coincide → G.I." : "perpendicular → O.I."}</text>
    </svg>
  );
}

function BiphenylOrtho({ ortho }: { ortho: boolean }) {
  return (
    <svg fill="currentColor" viewBox="0 0 260 140" className="h-auto w-full text-slate-100" role="img" aria-label={ortho ? "Biphenyl with bulky ortho substituents restricting rotation" : "Biphenyl with free rotation about the single bond"}>
      <circle cx="80" cy="70" r="42" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="180" cy="70" r="42" fill="none" stroke="currentColor" strokeWidth="2" transform={ortho ? "rotate(90 180 70)" : undefined} />
      <line x1="122" y1="70" x2="138" y2="70" stroke="currentColor" strokeWidth="2.4" />
      {ortho && <>
        <text x="55" y="35" fontSize="13">A</text><text x="55" y="112" fontSize="13">B</text>
        <text x="205" y="45" fontSize="13">A</text><text x="205" y="102" fontSize="13">B</text>
      </>}
      <text x="130" y="130" textAnchor="middle" fontSize="12" fill="#67e8f9">{ortho ? "rings forced perpendicular → chiral axis" : "coplanar, freely rotating → achiral"}</text>
    </svg>
  );
}

function AmineInversion() {
  return (
    <svg fill="currentColor" viewBox="0 0 480 160" className="min-w-[420px] w-full text-slate-100" role="img" aria-label="Amine pyramidal inversion through a planar sp2 transition state">
      {[60, 240, 420].map((cx, i) => (
        <g key={cx}>
          <path d={i === 1 ? `M ${cx - 30} 100 L ${cx + 30} 100 L ${cx} 100` : `M ${cx} 40 L ${cx - 30} 100 L ${cx + 30} 100 Z`} fill="none" stroke="currentColor" strokeWidth="2" />
          {i !== 1 && <ellipse cx={cx} cy="25" rx="7" ry="10" fill="none" stroke="currentColor" strokeWidth="1.6" />}
          {i === 1 && <ellipse cx={cx} cy="100" rx="7" ry="10" fill="none" stroke="currentColor" strokeWidth="1.6" />}
          <text x={cx - 40} y="105" fontSize="12">R₁</text><text x={cx + 32} y="105" fontSize="12">R₃</text><text x={cx} y="122" textAnchor="middle" fontSize="12">R₂</text>
        </g>
      ))}
      <text x="150" y="100" fontSize="22">⇌</text><text x="330" y="100" fontSize="22">⇌</text>
      <text x="240" y="140" textAnchor="middle" fontSize="12" fill="#67e8f9">sp²-hybridised planar transition state</text>
      <text x="240" y="155" textAnchor="middle" fontSize="11.5" fill="#94a3b8">mirror images interconvert too fast to resolve</text>
    </svg>
  );
}

function BridgeheadCage() {
  const V = [{ x: 60, y: 30 }, { x: 160, y: 30 }, { x: 60, y: 110 }, { x: 160, y: 110 }, { x: 30, y: 60 }, { x: 130, y: 60 }, { x: 30, y: 140 }, { x: 130, y: 140 }];
  const edges: [number, number][] = [[0, 1], [0, 4], [1, 5], [4, 6], [5, 7], [6, 7], [2, 3], [2, 6], [3, 7], [0, 2], [1, 3], [4, 5]];
  const labels: [number, string][] = [[0, "F"], [1, "Cl"], [4, "I"], [5, "Br"], [6, "D"], [7, "OH"], [2, ""], [3, "T"]];
  return (
    <svg fill="currentColor" viewBox="0 0 220 180" className="h-auto w-full text-slate-100" role="img" aria-label="Rigid bicyclic cage with eight different bridgehead substituents F Cl I Br T D OH">
      {edges.map(([a, b], i) => <line key={i} x1={V[a].x} y1={V[a].y} x2={V[b].x} y2={V[b].y} stroke="currentColor" strokeWidth="1.6" />)}
      {V.map((p, i) => <circle key={i} cx={p.x} cy={p.y} r="3" fill="#c4b5fd" />)}
      {labels.map(([i, l]) => l && <text key={i} x={V[i].x + (V[i].x < 90 ? -8 : 6)} y={V[i].y - 4} fontSize="12" textAnchor={V[i].x < 90 ? "end" : "start"}>{l}</text>)}
    </svg>
  );
}

function HelixPair() {
  const helix = (cx: number, sense: 1 | -1) => {
    const turns = Array.from({ length: 5 }, (_, i) => 20 + i * 26);
    return (
      <g key={cx}>
        <line x1={cx} y1="10" x2={cx} y2="150" stroke="#f472b6" strokeWidth="1.4" strokeDasharray="3 3" />
        {turns.map((y, i) => <ellipse key={i} cx={cx} cy={y} rx={26} ry={12} fill="none" stroke="#67e8f9" strokeWidth="2" transform={sense === 1 ? undefined : `scale(-1,1) translate(${-2 * cx},0)`} />)}
      </g>
    );
  };
  return (
    <svg fill="currentColor" viewBox="0 0 220 170" className="h-auto w-full text-slate-100" role="img" aria-label="Right handed and left handed helices as non-superimposable mirror images">
      {helix(60, 1)}
      <line x1="110" y1="0" x2="110" y2="170" stroke="currentColor" strokeWidth="10" strokeDasharray="1 6" opacity="0.5" />
      {helix(160, -1)}
      <text x="60" y="165" textAnchor="middle" fontSize="11" fill="#94a3b8">P-helix</text>
      <text x="160" y="165" textAnchor="middle" fontSize="11" fill="#94a3b8">M-helix</text>
    </svg>
  );
}

export default function IsomerismPart13() {
  return (
    <main className="min-h-screen bg-[#08111f] px-4 py-8 text-white sm:px-6 sm:py-12">
      <article className="mx-auto max-w-6xl">
        <Link href="/learn/isomerism" className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100">Isomerism</Link>
        <header className="mt-6 rounded-3xl border border-cyan-300/15 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,.18),_transparent_35%),linear-gradient(135deg,rgba(34,211,238,.08),rgba(2,6,23,.7),rgba(139,92,246,.1))] p-6 sm:p-9">
          <p className="text-xs font-black uppercase tracking-[.24em] text-cyan-200">Optical Isomerism source · pages 36–58 · Part 13</p>
          <h1 className="mt-3 text-3xl font-black sm:text-5xl">Racemates, meso forms and special chirality</h1>
        </header>

        <section className="mt-7 space-y-6">
          <section className="rounded-2xl border border-white/10 bg-white/[.035] p-5">
            <h2 className="text-xl font-black text-cyan-200">Racemic mixture</h2>
            <p className="mt-2 text-sm leading-7 text-slate-300">An equimolar mixture of a pair of enantiomers is known as a racemic mixture, racemic modification or racemate. Racemic mixtures are optically inactive due to external compensation of the two components, and are designated by the prefix dl, ±, RS or rac-.</p>
            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-6 text-slate-300">
              <li>Racemic mixtures can be resolved into their component enantiomers.</li>
              <li>They melt above, below or at the same temperature as the enantiomers.</li>
              <li>In the vapour or liquid phase, racemic mixtures show physical properties (b.p., density, refractive index) identical to those of a pure enantiomer.</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[.035] p-5">
            <h2 className="text-xl font-black text-cyan-200">Diastereomers</h2>
            <p className="mt-2 text-sm leading-7 text-slate-300">Stereoisomers that are <b className="text-white">not</b> mirror images of each other are known as diastereomers. They may or may not be optically active, and have different physical properties (m.p., b.p., density, solubility, refractive index, etc.) though similar — not identical — chemical properties; their reaction rates differ with chiral as well as achiral reagents and solvents. Because their physical properties differ, diastereomers can easily be separated by fractional distillation, fractional crystallisation and chromatography.</p>
            <div className="mt-4 overflow-x-auto rounded-xl border border-cyan-300/20 bg-[#050b16] p-3">
              <FischerPair top="COOH" bottom="COOH" left1={H} right1="OH" left2={H} right2="OH" label1="one diastereomer" label2="another diastereomer" />
            </div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[.035] p-5">
            <h2 className="text-xl font-black text-cyan-200">Meso form</h2>
            <p className="mt-2 text-sm leading-7 text-slate-300">Optical isomers which have a chiral carbon but are optically inactive due to the presence of symmetry are known as meso compounds. α<sub>obs</sub> = 0 due to <b className="text-white">internal</b> compensation.</p>
            <div className="mt-4 overflow-x-auto rounded-xl border border-cyan-300/20 bg-[#050b16] p-3">
              <FischerPair top="COOH" bottom="COOH" left1={H} right1="OH" left2={H} right2="OH" label1="meso (internal mirror)" label2="same molecule, rotated" />
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-300">A meso compound&apos;s internal plane of symmetry can be tested directly on the Fischer projection, or on a triangular/diamond skeleton with paired substituents (e.g. 1,3-dichloro-2-bromocyclopropane-type Cl/Cl/Br patterns), or on ring systems with a vertical mirror line.</p>

            <h3 className="mt-5 text-sm font-black uppercase tracking-wide text-slate-300">Worked meso / no-meso gallery</h3>
            <div className="mt-3 grid grid-cols-3 gap-3 sm:grid-cols-4">
              <VerdictCard verdict="no" note="no chiral C, no meso"><RingSVG n={4} subs={[{ angle: -135, label: "Cl" }, { angle: -45, label: "Cl" }, { angle: 135, label: "Br" }, { angle: 45, label: "Br" }]} /></VerdictCard>
              <VerdictCard verdict="no" note="no chiral C, no meso"><RingSVG n={4} subs={[{ angle: -135, label: H }, { angle: -45, label: H }, { angle: 135, label: H }, { angle: 45, label: H }]} /></VerdictCard>
              <VerdictCard verdict="yes" note="meso (THF ring)"><RingSVG n={5} subs={[{ angle: -110, label: "•" }, { angle: -70, label: "•" }]} /></VerdictCard>
              <VerdictCard verdict="yes" note="meso (Fischer)"><FischerPair top="COOH" bottom="OH" left1={H} right1="OH" left2="HOOC" right2={H} label1="" label2="" /></VerdictCard>
              <VerdictCard verdict="yes" note="meso (1,3-dioxane)"><RingSVG n={6} subs={[{ angle: -90, label: "•" }]} /></VerdictCard>
              <VerdictCard verdict="no" note="no meso (F/F/Cl/Cl)"><RingSVG n={4} subs={[{ angle: -135, label: "Cl" }, { angle: -45, label: H }, { angle: 45, label: "Cl" }, { angle: 135, label: H }]} /></VerdictCard>
              <VerdictCard verdict="yes" note="meso (1,3,5-cyclohexane)"><RingSVG n={6} subs={[{ angle: -90, label: "Cl" }, { angle: 30, label: "Br" }, { angle: 150, label: "Br" }]} /></VerdictCard>
              <VerdictCard verdict="yes" note="meso (cyclopentane)"><RingSVG n={5} subs={[{ angle: -90, label: "Cl" }, { angle: 18, label: "Br" }, { angle: 162, label: "Br" }]} /></VerdictCard>
            </div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[.035] p-5">
            <h2 className="text-xl font-black text-cyan-200">Resolution and racemisation</h2>
            <p className="text-sm leading-7 text-slate-300"><b className="text-white">Resolution</b> — the process of separation of a racemic mixture into its constituent enantiomers.</p>
            <p className="mt-2 text-sm font-bold text-slate-200">Methods of resolution:</p>
            <ol className="list-decimal space-y-1 pl-5 text-sm leading-6 text-slate-300"><li>Mechanical separation</li><li>Biochemical method</li><li>Chemical method</li></ol>
            <p className="mt-3 text-sm leading-7 text-slate-300"><b className="text-white">Racemisation</b> — the process of conversion of an optically active compound into the racemic mixture.</p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[.035] p-5">
            <h2 className="text-xl font-black text-cyan-200">Enantiomeric excess / optical purity</h2>
            <BlockMath math="\\%\\,EE=\\frac{\\text{observed specific rotation}}{\\text{specific rotation of pure enantiomer}}\\times100=\\frac{\\%d-\\%l}{\\%d+\\%l}=\\frac{M_d-M_l}{M_d+M_l}=\\frac{n_d-n_l}{n_d+n_l}=\\frac{W_d-W_l}{W_d+W_l}" />
            <p className="text-xs text-slate-400">M = molarity, n = moles, W = mass.</p>
            <BlockMath math="\\alpha_{mix}=(x_d-x_l)\\,\\alpha_d\\ \\text{(d in excess)}\\qquad \\alpha_{mix}=(x_d-x_l)\\,\\alpha_l\\ \\text{(l in excess)}" />
            <p className="mt-3 text-sm leading-7 text-slate-300">Worked example — optically active compound A: d-form α = +20°, l-form α = −20°.</p>
            <div className="mt-3 overflow-x-auto rounded-xl border border-white/10">
              <table className="min-w-full border-collapse text-left text-sm">
                <thead className="bg-cyan-500/10 text-cyan-100"><tr><th className="border-b border-white/10 px-3 py-1.5 font-black">%d</th><th className="border-b border-white/10 px-3 py-1.5 font-black">%l</th><th className="border-b border-white/10 px-3 py-1.5 font-black">EE</th><th className="border-b border-white/10 px-3 py-1.5 font-black">Impurity</th><th className="border-b border-white/10 px-3 py-1.5 font-black">(α)mix</th></tr></thead>
                <tbody className="text-slate-300">
                  {[[100,0,100,0,"+20°"],[90,10,80,20,"+16°"],[80,20,60,40,"+12°"],[70,30,40,60,"+8°"],[60,40,20,80,"+4°"],[50,50,0,100,"0°"],[40,60,20,80,"−4°"],[30,70,40,60,"−8°"],[20,80,60,40,"−12°"],[10,90,80,20,"−16°"],[0,100,100,0,"−20°"]].map((row) => (
                    <tr key={row[0] as number}><td className="border-b border-white/[.06] px-3 py-1">{row[0]}</td><td className="border-b border-white/[.06] px-3 py-1">{row[1]}</td><td className="border-b border-white/[.06] px-3 py-1">{row[2]}</td><td className="border-b border-white/[.06] px-3 py-1">{row[3]}</td><td className="border-b border-white/[.06] px-3 py-1">{row[4]}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[.035] p-5">
            <h2 className="text-xl font-black text-cyan-200">Optical isomerism in a compound with only one chiral carbon</h2>
            <ul className="list-disc space-y-1.5 pl-5 text-sm leading-6 text-slate-300">
              <li>They are always optically active.</li>
              <li>There is no meso form.</li>
              <li>Total optical isomers = 2.</li>
              <li>Pair of enantiomers = 1.</li>
            </ul>
            <p className="mt-3 text-sm leading-6 text-slate-300">Example: lactic acid.</p>
            <div className="mt-3 overflow-x-auto rounded-xl border border-cyan-300/20 bg-[#050b16] p-3">
              <FischerPair top="COOH" bottom="CH₃" left1={H} right1="OH" left2="HO" right2={H} label1="(−) lactic acid" label2="(+) lactic acid" />
            </div>
            <p className="mt-2 text-center text-xs text-slate-400">I, II — enantiomers</p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[.035] p-5">
            <h2 className="text-xl font-black text-cyan-200">Smallest optically active alkane and isomer counting</h2>
            <p className="text-sm leading-7 text-slate-300">3-methylhexane (CH₃CH₂CH₂–C*H(CH₂CH₃)–CH₃, equivalently drawn as the isopropyl/ethyl/methyl/H tetrahedral centre) is the smallest optically active alkane. Alkanes need a minimum of 7 carbons to show optical isomerism (M.F. C₇H₁₆, mm = 100).</p>
            <p className="mt-2 text-sm leading-7 text-slate-300">The total number of optical isomers among alkane derivatives of molecular mass 100 is 4. Compare butan-2-ol (chiral centre present, optically active, two optical isomers) with butan-1-ol (no chiral centre, optically inactive); 2-chlorobutane and 3-methylpent-1-ene each similarly give two optical isomers, while a symmetric branch pattern must be checked carefully for a hidden chiral centre before concluding it is achiral.</p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[.035] p-5">
            <h2 className="text-xl font-black text-cyan-200">Optical isomerism in compounds with two or more chiral centres</h2>
            <h3 className="mt-2 text-sm font-black uppercase tracking-wide text-slate-300">(a) Two identical chiral centres — tartaric acid</h3>
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-[#050b16] p-3"><FischerPair top="COOH" bottom="COOH" left1={H} right1="OH" left2={H} right2="OH" label1="p" label2="" /><p className="mt-1 text-center text-xs text-cyan-300">p — meso-tartaric acid</p></div>
              <div className="rounded-xl border border-white/10 bg-[#050b16] p-3"><FischerPair top="COOH" bottom="COOH" left1="HO" right1={H} left2={H} right2="OH" label1="q" label2="" /></div>
              <div className="rounded-xl border border-white/10 bg-[#050b16] p-3"><FischerPair top="COOH" bottom="COOH" left1={H} right1="OH" left2="HO" right2={H} label1="r" label2="" /></div>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-300">Total optical isomers = 3 · optically active = 2 (q, r) · optically inactive (meso) = 1 (p). p,q = diastereomers · p,r = diastereomers · q,r = enantiomers.</p>

            <h3 className="mt-5 text-sm font-black uppercase tracking-wide text-slate-300">(b) Two different chiral centres</h3>
            <p className="mt-1 text-sm leading-6 text-slate-300">With substituents COOH / OH / OH / CH₃ across two non-identical carbons (four Fischer arrangements p, q, r, s): p,q = enantiomers · r,s = enantiomers · p,r = diastereomers · q,s = diastereomers.</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">Total optical isomers = 4 · optically active = 4 · optically inactive = 0 · pairs of enantiomers = 2. Two non-identical stereocentres generally give four active stereoisomers in two enantiomeric pairs and no meso form; two identical stereocentres give three stereoisomers — two active plus one meso.</p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[.035] p-5">
            <h2 className="text-xl font-black text-cyan-200">Optical activity in the absence of a chiral carbon</h2>
            <p className="text-sm leading-7 text-slate-300"><b className="text-white">Axial chirality</b> arises from the non-planar arrangement of four groups in pairs about a chiral axis. A chiral axis is a line in a chiral molecule about which a set of four groups is held in a non-planar arrangement, resulting in a non-superimposable mirror image (contrast a chiral <i>centre</i>, a point).</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">A further element of chirality — helicity — is treated later in this part.</p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[.035] p-5">
            <h2 className="text-xl font-black text-cyan-200">Stereochemistry of allenes</h2>
            <p className="text-sm leading-7 text-slate-300">For a cumulated system a₂C=C=Cb₂ … with terminal groups a, b: consecutive sp/sp² carbons rotate the terminal substituent planes by 90° per cumulated double bond.</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-cyan-300/20 bg-[#050b16] p-3"><AlleneOrbital odd={false} /><p className="mt-2 text-center text-sm text-cyan-200">Even number of double bonds (e.g. C=C=C)</p><p className="text-center text-xs text-slate-400">terminal planes perpendicular → does NOT show G.I., DOES show O.I. (if a≠b at both ends)</p></div>
              <div className="rounded-xl border border-violet-300/20 bg-[#050b16] p-3"><AlleneOrbital odd /><p className="mt-2 text-center text-sm text-violet-200">Odd number of double bonds (e.g. C=C=C=C)</p><p className="text-center text-xs text-slate-400">terminal planes coincide → DOES show G.I., does NOT show O.I.</p></div>
            </div>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              <p className="rounded-lg bg-white/[.04] p-2.5 text-xs text-slate-300">Odd number of π-bonds: O.I. ✗ · G.I. ✓</p>
              <p className="rounded-lg bg-white/[.04] p-2.5 text-xs text-slate-300">Even number of π-bonds: O.I. ✓ · G.I. ✗</p>
            </div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[.035] p-5">
            <h2 className="text-xl font-black text-cyan-200">Stereochemistry of spiranes</h2>
            <p className="text-sm leading-7 text-slate-300">The common (spiro) carbon is sp³-hybridised, so the two valencies to one ring are perpendicular to the two valencies to the other ring — the two rings of a spirane are perpendicular to each other. A spirane with a≠b on one ring and A≠B on the other (POS✗, COS✗) is optically active.</p>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <VerdictCard verdict="yes" note="a≠b both ends: chiral"><RingSVG n={4} subs={[{ angle: -135, label: "a" }, { angle: -45, label: "b" }]} /></VerdictCard>
              <VerdictCard verdict="no" note="identical ends: POS"><RingSVG n={4} subs={[]} /></VerdictCard>
              <VerdictCard verdict="no" note="identical ends: POS"><RingSVG n={4} subs={[]} /></VerdictCard>
              <VerdictCard verdict="no" note="F/F symmetric: POS"><RingSVG n={4} subs={[{ angle: -135, label: "F" }, { angle: -45, label: "F" }]} /></VerdictCard>
              <VerdictCard verdict="no" note="terminal a: POS"><RingSVG n={4} subs={[{ angle: -90, label: "a" }]} /></VerdictCard>
              <VerdictCard verdict="yes" note="asymmetric chain: chiral"><RingSVG n={4} subs={[{ angle: -135, label: "a" }, { angle: -45, label: "b" }]} /></VerdictCard>
              <VerdictCard verdict="yes" note="N/O spiro heterocycle: chiral"><RingSVG n={4} subs={[{ angle: -100, label: "NH" }, { angle: -60, label: "O" }]} /></VerdictCard>
              <VerdictCard verdict="yes" note="imide-spiro cage: chiral"><RingSVG n={4} subs={[{ angle: -90, label: "C" }]} /></VerdictCard>
            </div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[.035] p-5">
            <h2 className="text-xl font-black text-cyan-200">Stereochemistry of biphenyls: atropisomerism</h2>
            <p className="text-sm leading-7 text-slate-300">The two rings of biphenyl rotate freely about the central C–C bond. If large substituents occupy the ortho positions, they interfere mechanically as obstacles and restrict free rotation — the two rings become forced perpendicular to each other, and the molecule becomes chiral (its mirror image is non-superimposable), showing optical activity. If rotation is only partially restricted, the molecule is not fully coplanar and may still show (temperature-dependent) optical activity. <b className="text-white">Atropisomerism</b> is this phenomenon of stereoisomerism due to restricted rotation.</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-[#050b16] p-3"><BiphenylOrtho ortho={false} /></div>
              <div className="rounded-xl border border-cyan-300/20 bg-[#050b16] p-3"><BiphenylOrtho ortho /></div>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-300">Classic examples: 6,6′-difluoro-2,2′-biphenyldicarboxylic acid and 6,6′-dinitro-2,2′-biphenyldicarboxylic acid are resolvable atropisomers; bridged analogues such as a 6,6′-bis(O–(CH₂)ₘ–O) tether can also lock a chiral, resolvable conformation.</p>
            <p className="mt-3 text-sm leading-7 text-slate-300">For small ortho substituents (a = OH, F, Cl, CH₃, COOH, NO₂) rotation is not restricted enough — optical activity is <b className="text-white">not</b> isolable (OAI = ✗) because the enantiomers interconvert too fast at room temperature. Bulkier or differently-shaped ortho groups (e.g. a = SO₃H) do restrict rotation enough for the atropisomers to be isolated (OAI = ✓). Restricting rotation with an ortho acetyl/ester pair, a fused dinitro-naphthalene bridge, or a −(CH₂)ₙ− bridge with n ≥ 2 across the 8,8′ positions of a binaphthyl likewise locks resolvable atropisomers. Numerous literature examples — resolved biphenyl-, binaphthyl- and heterocyclic-analogue diacids, disulfonic acids, dithiols and quaternary ammonium/arsonium salts — are catalogued in the source as worked exercises in applying this ortho-bulk rule.</p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[.035] p-5">
            <h2 className="text-xl font-black text-cyan-200">Terphenyls: POS / COS worked gallery</h2>
            <p className="text-sm leading-7 text-slate-300">For an o,o′,o″,o‴-tetrasubstituted terphenyl (rings A–B–C), optical activity requires the absence of both a plane of symmetry (POS) and an axis of symmetry (COS) across the whole molecule — not just each biaryl bond in isolation.</p>
            <div className="mt-3 grid grid-cols-2 gap-2 text-xs sm:grid-cols-4">
              <div className="rounded-lg border border-white/10 bg-white/[.03] p-2">unsubstituted terphenyl — <span className="text-cyan-300">POS ✓</span> (achiral)</div>
              <div className="rounded-lg border border-white/10 bg-white/[.03] p-2">symmetric o-methyl both rings — <span className="text-cyan-300">POS ✓</span> (achiral)</div>
              <div className="rounded-lg border border-white/10 bg-white/[.03] p-2">Cl/F symmetric pattern — <span className="text-cyan-300">POS ✓</span> (achiral)</div>
              <div className="rounded-lg border border-white/10 bg-white/[.03] p-2">I/I/F/Cl asymmetric pattern — <span className="text-cyan-300">COS ✓</span> (achiral, C₂ axis)</div>
              <div className="rounded-lg border border-white/10 bg-white/[.03] p-2">Cl/I/F/HS/I/Br/F fully unsymmetric — <span className="text-rose-300">POS ✗ COS ✗</span> (chiral)</div>
              <div className="rounded-lg border border-white/10 bg-white/[.03] p-2">F/Br/F/Cl/I mixed pattern — <span className="text-cyan-300">POS ✓</span> (achiral)</div>
              <div className="rounded-lg border border-white/10 bg-white/[.03] p-2">Cl/Cl/SH/Cl/F/NH₂/Br/F fully unsymmetric — <span className="text-rose-300">POS ✗ COS ✗</span> (chiral)</div>
            </div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[.035] p-5">
            <h2 className="text-xl font-black text-cyan-200">Optical isomerism in hemispiranes / alkylidenecyclohexanes (ring + π)</h2>
            <p className="text-sm leading-7 text-slate-300">A ring carrying an exocyclic C=C at each end (alkylidene termini) is chiral when the two substituents on <i>each</i> terminal alkene carbon are different — the same a≠b logic as allenes, now applied across a ring rather than a cumulated chain.</p>
            <div className="mt-3 grid grid-cols-3 gap-3 sm:grid-cols-5">
              <VerdictCard verdict="yes" note="H/CH₃ both ends"><RingSVG n={6} subs={[{ angle: -90, label: H }, { angle: 90, label: H }]} /></VerdictCard>
              <VerdictCard verdict="no" note="H/H one end symmetric"><RingSVG n={6} subs={[]} /></VerdictCard>
              <VerdictCard verdict="no" note="I/H vs D/H — one end symmetric elsewhere"><RingSVG n={6} subs={[{ angle: -90, label: "I" }]} /></VerdictCard>
              <VerdictCard verdict="no" note="terminal CH=CH₂ symmetric"><RingSVG n={6} subs={[{ angle: 90, label: "N" }]} /></VerdictCard>
              <VerdictCard verdict="no" note="both termini =CH₂"><RingSVG n={6} subs={[]} /></VerdictCard>
              <VerdictCard verdict="yes" note="CH₃/H both ends, asymmetric"><RingSVG n={6} subs={[{ angle: -90, label: H }, { angle: 90, label: "Me" }]} /></VerdictCard>
              <VerdictCard verdict="yes" note="cyclopropane I/F termini"><RingSVG n={3} subs={[{ angle: -90, label: "I" }, { angle: 150, label: "F" }]} /></VerdictCard>
              <VerdictCard verdict="yes" note="spiro-dioxetane"><RingSVG n={4} subs={[{ angle: -135, label: "O" }, { angle: -45, label: "O" }]} /></VerdictCard>
              <VerdictCard verdict="yes" note="COOH/H terminus"><RingSVG n={6} subs={[{ angle: -90, label: H }, { angle: 90, label: "COOH" }]} /></VerdictCard>
            </div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[.035] p-5">
            <h2 className="text-xl font-black text-cyan-200">Optical activity at nitrogen, phosphorus and sulphur</h2>
            <p className="text-sm leading-7 text-slate-300">A pyramidal amine NR₁R₂R₃ (with a lone pair) has R₁≠R₂≠R₃, so POS✗ and COS✗ — it is genuinely chiral at nitrogen — yet it is <b className="text-white">optically inactive</b> in practice.</p>
            <h3 className="mt-3 text-sm font-black text-slate-200">Amine inversion / umbrella flipping / pyramidal inversion</h3>
            <div className="mt-3 overflow-x-auto rounded-xl border border-cyan-300/20 bg-[#050b16] p-3"><AmineInversion /></div>
            <p className="mt-3 text-sm leading-7 text-slate-300">The nitrogen rapidly inverts through a planar sp²-hybridised transition state, so the two mirror-image pyramids interconvert far faster than they could be separated — the enantiomers are simply not resolvable, even though each instantaneous pyramid is chiral.</p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-6 text-slate-300">
              <li>An open-chain tertiary amine with three different groups inverts freely — not resolvable.</li>
              <li>An N–H aziridine (3-membered ring) with a plane of symmetry through N still inverts — not resolvable when a mirror plane survives each pyramid.</li>
              <li>An unsymmetrically N,C-substituted aziridine or azetidine, or a bridgehead amine where inversion is geometrically blocked, <i>can</i> be resolvable.</li>
              <li><b className="text-white">Quaternary ammonium salts</b> R₁R₂R₃R₄N⁺ have no lone pair to inflect through — they cannot invert, so genuinely chiral quaternary ammonium, N-oxide and related salts (e.g. naphthalene-fused or bridged bis-benzylamine macrocycles) <i>are</i> resolvable.</li>
            </ul>
            <h3 className="mt-4 text-sm font-black text-slate-200">Phosphorus and sulphur: inversion is suppressed</h3>
            <p className="mt-2 text-sm leading-7 text-slate-300">Umbrella flipping is not applicable to compounds of P, S, As (third period onwards) under ordinary conditions, because the inversion barrier is much higher for these larger, heavier atoms. Consequently, chiral phosphine oxides (P=O), phosphine sulfides (P=S), phosphine selenides (P=Se), and quaternary phosphonium salts (P⁺) — as well as chiral sulfonium salts (S⁺) — <b className="text-white">are</b> configurationally stable and resolvable, unlike their nitrogen analogues.</p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[.035] p-5">
            <h2 className="text-xl font-black text-cyan-200">Rigid bridgehead / cage systems</h2>
            <p className="text-sm leading-7 text-slate-300">In a rigid bicyclic (bridgehead) framework, four different substituents held by the cage&apos;s geometry — even without a classical single tetrahedral stereocentre — still produce two non-superimposable, resolvable optical isomers. Camphor-type bicyclo[2.2.1] cages and substituted bicyclo[2.2.2]octanes are classic examples (camphor itself, and a bridged bicyclic ketone from JEE 2015).</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-cyan-300/20 bg-[#050b16] p-3"><BridgeheadCage /><p className="mt-1 text-center text-xs text-slate-400">rigid cage, eight different bridgehead groups (F, Cl, I, Br, T, D, OH, H) → two optical isomers</p></div>
              <div className="flex flex-col justify-center rounded-xl border border-white/10 bg-white/[.03] p-4 text-sm leading-6 text-slate-300"><p><b className="text-white">Camphor</b> and the JEE-2015 bridged-bicyclic ketone both give two resolvable optical isomers despite having no single carbon bonded to four different substituents in the classical sense — the rigidity of the whole cage supplies the chirality.</p></div>
            </div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[.035] p-5">
            <h2 className="text-xl font-black text-cyan-200">Optical activity due to helicity</h2>
            <p className="text-sm leading-7 text-slate-300">A helix and its mirror image are non-superimposable — right-handed (P) and left-handed (M) helices are genuine enantiomers, a third distinct source of chirality alongside point (chiral-carbon) and axial chirality. Ortho-fused polycyclic aromatics that cannot lie flat because of steric clash at their bay region — e.g. hexahelicene, six angularly-fused rings forming a helical ribbon — twist into a helical shape and are consequently optically active, even though no individual atom is a classical stereocentre.</p>
            <div className="mt-4 overflow-x-auto rounded-xl border border-cyan-300/20 bg-[#050b16] p-3"><HelixPair /></div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[.035] p-5">
            <h2 className="text-xl font-black text-cyan-200">Optical activity without a chiral carbon — summary</h2>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-300">
              <li>Allenes with a≠b at both termini and an even number of cumulated double bonds.</li>
              <li>Spiro systems with a≠b on both perpendicular rings.</li>
              <li>Ortho-substituted biphenyls (atropisomerism) when rotation is sufficiently restricted.</li>
              <li>Hemispiranes / alkylidenecycloalkanes with a≠b at both alkylidene termini.</li>
              <li>Quaternary ammonium/phosphonium and tertiary phosphine/sulfonium centres that cannot pyramidally invert.</li>
              <li>Rigid bridgehead (cage) systems whose geometry alone prevents superimposition on the mirror image.</li>
              <li>Helical systems (helicenes) where steric clash forces a non-planar, non-superimposable helix.</li>
            </ul>
          </section>
        </section>

        <nav className="mt-8 flex justify-between border-t border-white/10 pt-6">
          <Link href="/learn/isomerism/12" className="rounded-xl border border-white/15 px-4 py-3 text-sm font-bold text-slate-200">← 12</Link>
          <Link href="/learn/isomerism/14" className="rounded-xl border border-cyan-300/30 bg-cyan-300/10 px-4 py-3 text-sm font-bold text-cyan-100">14 →</Link>
        </nav>
      </article>
    </main>
  );
}
