import Link from "next/link";
import { HashedWedge, SolidWedge } from "../components/ChemistryDiagram";

// ─────────────────────────────────────────────────────────────────────────────
// Optical Isomerism source · page 118 · items (204)–(226)
// Every item below is an individual transcription of the printed structure —
// no shared generic skeletons. Chiral classification follows the printed
// page-119 answer key: 204–209, 211, 212, 215, 218 are chiral.
// Items 210–216 are judged AS THE DRAWN ROTAMER (conformational chirality).
// Item 224 shows a bold C–C bond in the source — NOT a charge.
// ─────────────────────────────────────────────────────────────────────────────

type Pair = { up: string; down: string };

/** Haworth-style pyranose exactly as printed: C5 top-left, ring O top-right,
 *  anomeric C1 right, thick front rim C4–C3–C2–C1. Each call passes the full
 *  literal substituent pattern of one printed item. */
function Pyranose({ c5, c4, c3, c2, c1, c5Arm, c1Arm, label }: {
  c5: Pair; c4: Pair; c3: Pair; c2: Pair; c1: Pair;
  /** CH₂OH arm on C5 (items 204–206). */ c5Arm?: boolean;
  /** CH₂OH arm on the anomeric C1 (items 208–209). */ c1Arm?: boolean;
  label: string;
}) {
  const C5 = { x: 148, y: 100 }, C1 = { x: 306, y: 152 }, C2 = { x: 246, y: 210 }, C3 = { x: 140, y: 210 }, C4 = { x: 70, y: 152 };
  return (
    <svg viewBox="0 0 392 300" className="h-auto w-full text-slate-100" role="img" aria-label={label}>
      <g fill="none" stroke="currentColor" strokeWidth="2">
        <line x1={C4.x} y1={C4.y} x2={C5.x} y2={C5.y} />
        <line x1={C5.x} y1={C5.y} x2={242} y2={97} />
        <line x1={268} y1={101} x2={C1.x} y2={C1.y} />
      </g>
      <path d={`M ${C4.x} ${C4.y} L ${C3.x} ${C3.y} L ${C2.x} ${C2.y} L ${C1.x} ${C1.y}`} fill="none" stroke="currentColor" strokeWidth="8" strokeLinejoin="round" strokeLinecap="round" />
      <text x="255" y="102" fontSize="17">O</text>
      {/* C5 substituents */}
      {c5Arm ? (
        <g>
          <path d={`M ${C5.x} ${C5.y} L 172 64 L 210 48`} fill="none" stroke="currentColor" strokeWidth="2" />
          <text x="214" y="52" fontSize="15">OH</text>
        </g>
      ) : (
        <g>
          <line x1={C5.x} y1={C5.y} x2={C5.x} y2={64} stroke="currentColor" strokeWidth="2" />
          <text x={C5.x - 5} y="56" fontSize="14">{c5.up}</text>
        </g>
      )}
      <line x1={C5.x} y1={C5.y} x2={C5.x} y2={134} stroke="currentColor" strokeWidth="2" />
      <text x={C5.x - 5} y="150" fontSize="14">{c5.down}</text>
      {/* C4 */}
      <line x1={C4.x} y1={C4.y} x2={C4.x} y2={116} stroke="currentColor" strokeWidth="2" />
      <text x={C4.x - 6} y="108" fontSize="14">{c4.up}</text>
      <line x1={C4.x} y1={C4.y} x2={52} y2={190} stroke="currentColor" strokeWidth="2" />
      <text x={c4.down === "HO" ? 26 : 44} y="206" fontSize="14">{c4.down}</text>
      {/* C3 */}
      <line x1={C3.x} y1={C3.y} x2={C3.x} y2={176} stroke="currentColor" strokeWidth="2" />
      <text x={C3.x - (c3.up === "OH" ? 12 : 5)} y="168" fontSize="14">{c3.up}</text>
      <line x1={C3.x} y1={C3.y} x2={C3.x} y2={246} stroke="currentColor" strokeWidth="2" />
      <text x={C3.x - (c3.down === "OH" ? 12 : 5)} y="264" fontSize="14">{c3.down}</text>
      {/* C2 */}
      <line x1={C2.x} y1={C2.y} x2={C2.x} y2={176} stroke="currentColor" strokeWidth="2" />
      <text x={C2.x - (c2.up === "OH" ? 12 : 5)} y="168" fontSize="14">{c2.up}</text>
      <line x1={C2.x} y1={C2.y} x2={C2.x} y2={246} stroke="currentColor" strokeWidth="2" />
      <text x={C2.x - (c2.down === "OH" ? 12 : 5)} y="264" fontSize="14">{c2.down}</text>
      {/* C1 (anomeric) */}
      {c1Arm ? (
        <g>
          <path d={`M ${C1.x} ${C1.y} L 332 118 L 362 102`} fill="none" stroke="currentColor" strokeWidth="2" />
          <text x="336" y="94" fontSize="15">OH</text>
        </g>
      ) : (
        <g>
          <line x1={C1.x} y1={C1.y} x2={C1.x} y2={116} stroke="currentColor" strokeWidth="2" />
          <text x={C1.x - 5} y="108" fontSize="14">{c1.up}</text>
        </g>
      )}
      <line x1={C1.x} y1={C1.y} x2={324} y2={192} stroke="currentColor" strokeWidth="2" />
      <text x="330" y="208" fontSize="14">{c1.down}</text>
    </svg>
  );
}

type NewmanBond = { angle: number; label?: string; cPr?: boolean; tick?: boolean };
const pol = (angle: number, radius: number, cx = 130, cy = 122) => ({ x: cx + Math.cos((angle * Math.PI) / 180) * radius, y: cy + Math.sin((angle * Math.PI) / 180) * radius });

/** Newman frame with per-bond literal data (front from the dot, rear from the
 *  circle edge). Cyclopropyl termini and CH₃ tick stubs render as printed. */
function Newman({ front, rear, label }: { front: NewmanBond[]; rear: NewmanBond[]; label: string }) {
  const tri = (angle: number, start: number) => {
    const p = pol(angle, start); const a = pol(angle, start + 30, p.x, p.y); const b = { x: p.x + Math.cos(((angle + 32) * Math.PI) / 180) * 30, y: p.y + Math.sin(((angle + 32) * Math.PI) / 180) * 30 };
    return <path d={`M ${p.x} ${p.y} L ${a.x} ${a.y} L ${b.x} ${b.y} Z`} fill="none" stroke="currentColor" strokeWidth="2" />;
  };
  const tick = (angle: number, radius: number) => {
    const p = pol(angle, radius); const q1 = { x: p.x + Math.cos(((angle + 115) * Math.PI) / 180) * 8, y: p.y + Math.sin(((angle + 115) * Math.PI) / 180) * 8 };
    return <line x1={p.x} y1={p.y} x2={q1.x} y2={q1.y} stroke="currentColor" strokeWidth="2" />;
  };
  return (
    <svg viewBox="0 0 260 250" className="h-auto w-full text-slate-100" role="img" aria-label={label}>
      <circle cx="130" cy="122" r="50" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="130" cy="122" r="4" fill="currentColor" />
      {rear.map((bond, i) => {
        const a = pol(bond.angle, 50); const b = pol(bond.angle, bond.cPr ? 78 : 84); const t = pol(bond.angle, 101);
        return <g key={`r${i}`}><line x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="currentColor" strokeWidth="2" />{bond.label && <text x={t.x} y={t.y + 5} textAnchor="middle" fontSize="14">{bond.label}</text>}{bond.cPr && tri(bond.angle, 78)}{bond.tick && tick(bond.angle, 84)}</g>;
      })}
      {front.map((bond, i) => {
        const b = pol(bond.angle, bond.cPr ? 72 : 76); const t = pol(bond.angle, 95);
        return <g key={`f${i}`}><line x1={130} y1={122} x2={b.x} y2={b.y} stroke="currentColor" strokeWidth="2.6" />{bond.label && <text x={t.x} y={t.y + 5} textAnchor="middle" fontSize="14">{bond.label}</text>}{bond.cPr && tri(bond.angle, 72)}{bond.tick && tick(bond.angle, 76)}</g>;
      })}
    </svg>
  );
}

/** Pointy-top cyclohexadiene ring: doubles and substituents passed literally. */
function Diene({ subs, doubles, tall, label }: {
  subs: { vertex: number; label: string; bond: "wedge" | "hash" | "plain"; dir: "up" | "down" | "left" | "right" | "upright" | "upleft" | "downleft" }[];
  doubles: [number, number][];
  tall?: boolean;
  label: string;
}) {
  const V = tall
    ? [{ x: 120, y: 30 }, { x: 178, y: 70 }, { x: 178, y: 152 }, { x: 120, y: 192 }, { x: 62, y: 152 }, { x: 62, y: 70 }]
    : [{ x: 120, y: 38 }, { x: 187, y: 78 }, { x: 187, y: 158 }, { x: 120, y: 198 }, { x: 53, y: 158 }, { x: 53, y: 78 }];
  const dirVec: Record<string, { x: number; y: number; ax: number; ay: number }> = {
    up: { x: 0, y: -34, ax: 0, ay: -8 }, down: { x: 0, y: 34, ax: 0, ay: 16 },
    left: { x: -34, y: 0, ax: -8, ay: 5 }, right: { x: 34, y: 0, ax: 8, ay: 5 },
    upright: { x: 27, y: -22, ax: 6, ay: -4 }, upleft: { x: -27, y: -22, ax: -8, ay: -4 }, downleft: { x: -27, y: 22, ax: -8, ay: 14 },
  };
  const inner = (a: { x: number; y: number }, b: { x: number; y: number }) => {
    const cx = 120, cy = tall ? 111 : 118; const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
    const f = 0.16; const off = { x: (cx - mx) * f, y: (cy - my) * f };
    const shrink = (p: { x: number; y: number }) => ({ x: p.x + (mx - p.x) * 0.22 + off.x, y: p.y + (my - p.y) * 0.22 + off.y });
    const s1 = shrink(a), s2 = shrink(b);
    return <line x1={s1.x} y1={s1.y} x2={s2.x} y2={s2.y} stroke="currentColor" strokeWidth="2" />;
  };
  return (
    <svg viewBox="-40 0 320 250" className="h-auto w-full text-slate-100" role="img" aria-label={label}>
      <path d={`M ${V.map((p) => `${p.x} ${p.y}`).join(" L ")} Z`} fill="none" stroke="currentColor" strokeWidth="2.2" />
      {doubles.map(([a, b], i) => <g key={i}>{inner(V[a], V[b])}</g>)}
      {subs.map((sub, i) => {
        const v = V[sub.vertex]; const d = dirVec[sub.dir]; const end = { x: v.x + d.x, y: v.y + d.y };
        const leftSide = sub.dir.includes("left");
        return (
          <g key={`s${i}`}>
            {sub.bond === "wedge" ? <SolidWedge from={v} to={end} width={9} /> : sub.bond === "hash" ? <HashedWedge from={v} to={end} width={9} /> : <line x1={v.x} y1={v.y} x2={end.x} y2={end.y} stroke="currentColor" strokeWidth="2.2" />}
            <text x={end.x + d.ax + (leftSide ? -30 : -8)} y={end.y + d.ay} fontSize="15">{sub.label}</text>
          </g>
        );
      })}
    </svg>
  );
}

/** (224) 3-ethylpentane exactly as printed: three ethyl arms + H at C3, one
 *  C–C bond printed BOLD as a distractor — no charge in the source. */
function Item224() {
  return (
    <svg viewBox="0 0 300 175" className="h-auto w-full text-slate-100" role="img" aria-label="3-ethylpentane with a bold bond distractor, as printed">
      <g fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round">
        <path d="M52 118 88 138 124 110" />
        <path d="M162 138 198 118" />
        <path d="M124 110 132 70 102 48" />
      </g>
      <SolidWedge from={{ x: 124, y: 110 }} to={{ x: 162, y: 138 }} width={10} />
      <text x="14" y="122" fontSize="16">H₃C</text>
      <text x="202" y="122" fontSize="16">CH₃</text>
      <text x="64" y="46" fontSize="16">H₃C</text>
    </svg>
  );
}

/** (225) 3-ethylhexane exactly as printed: propyl up, two ethyl arms, H at C3. */
function Item225() {
  return (
    <svg viewBox="0 0 300 210" className="h-auto w-full text-slate-100" role="img" aria-label="3-ethylhexane, as printed">
      <g fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round">
        <path d="M56 160 92 178 128 152 164 178 200 154" />
        <path d="M128 152 142 112 122 74 138 38" />
      </g>
      <text x="18" y="164" fontSize="16">H₃C</text>
      <text x="204" y="158" fontSize="16">CH₃</text>
      <text x="126" y="28" fontSize="16">CH₃</text>
    </svg>
  );
}

/** (226) 5-chlorocyclopenta-1,3-diene: wedge Cl on the single sp³ carbon. */
function Item226() {
  return (
    <svg viewBox="0 0 200 190" className="h-auto w-full text-slate-100" role="img" aria-label="5-chlorocyclopenta-1,3-diene, as printed">
      <path d="M100 48 148 88 129 148 71 148 52 88 Z" fill="none" stroke="currentColor" strokeWidth="2.2" />
      <line x1="60" y1="92" x2="76" y2="141" stroke="currentColor" strokeWidth="2" />
      <line x1="140" y1="92" x2="124" y2="141" stroke="currentColor" strokeWidth="2" />
      <SolidWedge from={{ x: 100, y: 48 }} to={{ x: 100, y: 18 }} width={9} />
      <text x="92" y="14" fontSize="15">Cl</text>
    </svg>
  );
}

const H = "H";
interface Item { n: number; title: string; note: string; art: React.ReactNode }

const ITEMS: Item[] = [
  { n: 204, title: "Aldopyranose I", note: "Chiral — five stereogenic ring carbons (C1–C5) with the printed up/down pattern; no internal mirror plane or centre of symmetry survives.", art: <Pyranose label="printed aldopyranose 204" c5Arm c5={{ up: "", down: H }} c4={{ up: H, down: "HO" }} c3={{ up: "OH", down: H }} c2={{ up: H, down: "OH" }} c1={{ up: H, down: "OH" }} /> },
  { n: 205, title: "Aldopyranose II (C2/C3/C4 pattern inverted)", note: "Chiral — the epimeric pattern relative to (204) is still devoid of any improper symmetry element.", art: <Pyranose label="printed aldopyranose 205" c5Arm c5={{ up: "", down: H }} c4={{ up: "HO", down: H }} c3={{ up: H, down: "OH" }} c2={{ up: "OH", down: H }} c1={{ up: H, down: "OH" }} /> },
  { n: 206, title: "Aldopyranose III (printed with the same pattern as 205)", note: "Chiral — as printed the substitution repeats item (205); multiple stereocentres, no σ or i.", art: <Pyranose label="printed aldopyranose 206" c5Arm c5={{ up: "", down: H }} c4={{ up: "HO", down: H }} c3={{ up: H, down: "OH" }} c2={{ up: "OH", down: H }} c1={{ up: H, down: "OH" }} /> },
  { n: 207, title: "Pentopyranose (no CH₂OH arm)", note: "Chiral — four stereogenic carbons (C1–C4); C5 is a plain CH₂ yet the ring pattern still has no internal mirror.", art: <Pyranose label="printed pentopyranose 207" c5={{ up: H, down: H }} c4={{ up: H, down: "HO" }} c3={{ up: "OH", down: H }} c2={{ up: "OH", down: H }} c1={{ up: H, down: "OH" }} /> },
  { n: 208, title: "Ketopyranose I (CH₂OH on the anomeric carbon)", note: "Chiral — the anomeric carbon carries CH₂OH and OH (two different arms); with C2–C4 also stereogenic no improper element exists.", art: <Pyranose label="printed ketopyranose 208" c1Arm c5={{ up: H, down: H }} c4={{ up: H, down: "HO" }} c3={{ up: "OH", down: H }} c2={{ up: H, down: "OH" }} c1={{ up: "", down: "OH" }} /> },
  { n: 209, title: "Ketopyranose II (C2/C3 pattern inverted)", note: "Chiral — same skeleton as (208) with C2/C3 exchanged; still no mirror plane.", art: <Pyranose label="printed ketopyranose 209" c1Arm c5={{ up: H, down: H }} c4={{ up: H, down: "HO" }} c3={{ up: H, down: "OH" }} c2={{ up: "OH", down: H }} c1={{ up: "", down: "OH" }} /> },
  { n: 210, title: "Butane — anti Newman", note: "Not chiral as drawn — the anti rotamer (CH₃/CH₃ dihedral 180°) has a centre of inversion at the C2–C3 midpoint.", art: <Newman label="printed anti-butane Newman 210" front={[{ angle: -105, label: "CH₃" }, { angle: 15, label: H }, { angle: 135, label: H }]} rear={[{ angle: -45, label: H }, { angle: 75, label: "CH₃" }, { angle: 195, label: H }]} /> },
  { n: 211, title: "1-Bromopropane — skewed Newman", note: "Chiral as drawn — the gauche rotamer (Br/CH₃ ≈ 60°) has neither a mirror plane nor a centre: conformational (transient) chirality, exactly what the printed key marks.", art: <Newman label="printed skewed 1-bromopropane Newman 211" front={[{ angle: -105, label: "Br" }, { angle: 15, label: H }, { angle: 135, label: H }]} rear={[{ angle: -45, label: H }, { angle: 75, label: H }, { angle: 195, label: "CH₃" }]} /> },
  { n: 212, title: "1-Chloropropane — eclipsed Newman", note: "Chiral as drawn — the eclipsed rotamer pairs CH₃/H (top) and H/Cl (right): the skewed set of eclipsing partners removes every σ plane.", art: <Newman label="printed eclipsed 1-chloropropane Newman 212" front={[{ angle: -90, label: "CH₃" }, { angle: 30, label: H }, { angle: 150, label: H }]} rear={[{ angle: -77, label: H }, { angle: 43, label: "Cl" }, { angle: 163, label: H }]} /> },
  { n: 213, title: "Fully eclipsed skeleton (unlabelled, as printed)", note: "Not chiral — every front bond eclipses an identical rear bond, so the plane containing each eclipsed pair is a mirror plane.", art: <Newman label="printed fully eclipsed skeleton 213" front={[{ angle: -105 }, { angle: 15 }, { angle: 135 }]} rear={[{ angle: -93 }, { angle: 27 }, { angle: 147 }]} /> },
  { n: 214, title: "Eclipsed ethane", note: "Not chiral — eclipsed ethane is D₃ₕ: three σᵥ planes and an S₃ axis.", art: <Newman label="printed eclipsed ethane Newman 214" front={[{ angle: -90, label: H }, { angle: 30, label: H }, { angle: 150, label: H }]} rear={[{ angle: -78, label: H }, { angle: 42, label: H }, { angle: 162, label: H }]} /> },
  { n: 215, title: "2,3-Dicyclopropyl-2,3-dimethylbutane — gauche", note: "Chiral as drawn — the two cyclopropyl groups sit gauche (≈60°); with methyl stubs at the remaining positions the rotamer keeps only proper rotations.", art: <Newman label="printed gauche dicyclopropyl Newman 215" front={[{ angle: -120 }, { angle: 120 }, { angle: 0, cPr: true }]} rear={[{ angle: -60 }, { angle: 180 }, { angle: 60, cPr: true }]} /> },
  { n: 216, title: "Staggered hexasubstituted ethane (methyl stubs as printed)", note: "Not chiral — the perfectly staggered symmetric rotamer possesses an S₆ improper axis.", art: <Newman label="printed staggered hexamethylethane Newman 216" front={[{ angle: -105, tick: true }, { angle: 15, tick: true }, { angle: 135, tick: true }]} rear={[{ angle: -45, tick: true }, { angle: 75, tick: true }, { angle: 195, tick: true }]} /> },
  { n: 217, title: "cis-5,6-Dimethylcyclohexa-1,3-diene", note: "Not chiral — both CH₃ wedges point to the same face: a mirror plane passes between the two identical sp³ carbons.", art: <Diene label="printed cis-5,6-dimethylcyclohexa-1,3-diene 217" doubles={[[2, 3], [4, 5]]} subs={[{ vertex: 0, label: "CH₃", bond: "wedge", dir: "up" }, { vertex: 1, label: "CH₃", bond: "wedge", dir: "upright" }]} /> },
  { n: 218, title: "trans-5,6-Dimethylcyclohexa-1,3-diene", note: "Chiral — wedge + hash on adjacent sp³ carbons: only a C₂ axis survives, and a proper axis never destroys chirality.", art: <Diene label="printed trans-5,6-dimethylcyclohexa-1,3-diene 218" doubles={[[2, 3], [4, 5]]} subs={[{ vertex: 0, label: "CH₃", bond: "wedge", dir: "up" }, { vertex: 1, label: "CH₃", bond: "hash", dir: "upright" }]} /> },
  { n: 219, title: "cis-3,6-Dimethylcyclohexa-1,4-diene", note: "Not chiral — the two wedge methyls on the para sp³ carbons lie in a common σᵥ plane through both carbons.", art: <Diene tall label="printed cis-3,6-dimethylcyclohexa-1,4-diene 219" doubles={[[1, 2], [4, 5]]} subs={[{ vertex: 0, label: "CH₃", bond: "wedge", dir: "up" }, { vertex: 3, label: "H₃C", bond: "wedge", dir: "down" }]} /> },
  { n: 220, title: "1,2,3,4-Tetramethylcyclohexa-1,3-diene", note: "Not chiral — all four methyls sit on sp² alkene carbons: there is no stereocentre anywhere in the molecule.", art: <Diene label="printed tetramethylcyclohexadiene 220" doubles={[[5, 4], [3, 2]]} subs={[{ vertex: 5, label: "H₃C", bond: "plain", dir: "upleft" }, { vertex: 4, label: "H₃C", bond: "plain", dir: "downleft" }, { vertex: 3, label: "H₃C", bond: "plain", dir: "down" }, { vertex: 2, label: "CH₃", bond: "plain", dir: "right" }]} /> },
  { n: 221, title: "Trimethylcyclohexa-1,3-diene", note: "Not chiral — every methyl is on an sp² carbon of the conjugated diene; no sp³ stereocentre exists.", art: <Diene label="printed trimethylcyclohexadiene 221" doubles={[[5, 4], [3, 2]]} subs={[{ vertex: 5, label: "H₃C", bond: "plain", dir: "upleft" }, { vertex: 3, label: "H₃C", bond: "plain", dir: "down" }, { vertex: 2, label: "CH₃", bond: "plain", dir: "right" }]} /> },
  { n: 222, title: "1,4-Dimethylcyclohexa-1,3-diene", note: "Not chiral — both methyls are on alkene carbons; the CH₂–CH₂ bridge carries no stereochemistry.", art: <Diene label="printed 1,4-dimethylcyclohexa-1,3-diene 222" doubles={[[5, 4], [3, 2]]} subs={[{ vertex: 5, label: "H₃C", bond: "plain", dir: "upleft" }, { vertex: 2, label: "CH₃", bond: "plain", dir: "right" }]} /> },
  { n: 223, title: "trans-3,6-Dimethylcyclohexa-1,4-diene", note: "Not chiral — wedge (top) + hash (bottom) across the 1,4-diene creates a centre of inversion i, an improper element, so the molecule is achiral despite having no σ plane.", art: <Diene tall label="printed trans-3,6-dimethylcyclohexa-1,4-diene 223" doubles={[[1, 2], [4, 5]]} subs={[{ vertex: 0, label: "CH₃", bond: "wedge", dir: "up" }, { vertex: 3, label: "H₃C", bond: "hash", dir: "down" }]} /> },
  { n: 224, title: "3-Ethylpentane — bold-bond distractor", note: "Not chiral — C-3 carries H and three identical ethyl arms. The thick printed bond is emphasis only: it is neither a charge nor a stereocentre.", art: <Item224 /> },
  { n: 225, title: "3-Ethylhexane", note: "Not chiral — C-3 bears H, a propyl arm and two identical ethyl arms; two identical substituents rule out a stereocentre.", art: <Item225 /> },
  { n: 226, title: "5-Chlorocyclopenta-1,3-diene", note: "Not chiral — the σ plane through C5–Cl bisects the symmetric diene ring, reflecting each half onto the other.", art: <Item226 /> },
];

const sourceChiral = new Set([204, 205, 206, 207, 208, 209, 211, 212, 215, 218]);

export default function IsomerismPart47() {
  return (
    <main className="min-h-screen bg-[#08111f] px-4 py-8 text-white sm:px-6 sm:py-12">
      <article className="mx-auto max-w-6xl">
        <Link href="/learn/isomerism" className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100">Isomerism</Link>
        <header className="mt-6 rounded-3xl border border-cyan-300/15 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,.18),_transparent_35%),linear-gradient(135deg,rgba(34,211,238,.08),rgba(2,6,23,.7),rgba(139,92,246,.1))] p-6 sm:p-9">
          <p className="text-xs font-black uppercase tracking-[.24em] text-cyan-200">Optical Isomerism source · page 118 · items 204–226</p>
          <h1 className="mt-3 text-3xl font-black sm:text-5xl">Chirality exercise: pyranoses, Newman rotamers and constrained rings</h1>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            Every printed structure is transcribed individually: six pyranose rings (204–209), seven Newman items
            (210–216), seven substituted cyclohexadienes (217–223) and three skeletal cases (224–226). The printed
            answer key marks 204–209, 211, 212, 215 and 218 as chiral.
          </p>
          <p className="mt-3 rounded-xl border border-violet-300/20 bg-violet-300/[.06] px-4 py-3 text-sm leading-6 text-violet-100">
            The Newman items 210–216 are judged <b>as the drawn rotamer</b>: a frozen conformation is chiral when it has
            no σ plane, no centre i and no Sₙ axis — even if bond rotation would interconvert the mirror forms.
          </p>
        </header>
        <section className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item) => (
            <article key={item.n} className="flex flex-col rounded-2xl border border-white/10 bg-white/[.035] p-4">
              <div className="flex items-start justify-between gap-2">
                <b className="text-sm leading-5">({item.n}) {item.title}</b>
                <span className={sourceChiral.has(item.n) ? "shrink-0 rounded-full bg-emerald-300/15 px-2 py-1 text-xs font-bold text-emerald-200" : "shrink-0 rounded-full bg-slate-400/10 px-2 py-1 text-xs font-bold text-slate-300"}>
                  {sourceChiral.has(item.n) ? "Chiral" : "Not chiral"}
                </span>
              </div>
              <div className="mt-2">{item.art}</div>
              <p className="mt-auto pt-2 text-sm leading-6 text-slate-300">{item.note}</p>
            </article>
          ))}
        </section>
        <nav className="mt-8 flex justify-between border-t border-white/10 pt-6">
          <Link href="/learn/isomerism/40" className="rounded-xl border border-white/15 px-4 py-3 text-sm font-bold text-slate-200">← Part 40 hub</Link>
          <Link href="/learn/isomerism" className="rounded-xl border border-white/15 px-4 py-3 text-sm font-bold text-slate-200">All parts</Link>
        </nav>
      </article>
    </main>
  );
}
