import type { ReactNode } from "react";

/* ------------------------------------------------------------------ *
 *  s-Block question-bank figures.
 *
 *  Clean, original schematic reconstructions of the standard Group-2
 *  structures referenced by the Alkaline Earth Metals assignments
 *  (Section H of "s Block Assignment-2" and Section D of the 80Q set).
 *  Every figure shows only well-established, textbook structural facts —
 *  connectivity, bridging atoms, coordination number, charge and the
 *  labels carried by the source schematics. Nothing here is traced from
 *  a copyrighted figure; the node-and-edge style follows the assignment's
 *  own original artwork.
 * ------------------------------------------------------------------ */

const BE = "#3fd0ee"; // cyan  — metal centre
const O = "#ff7a6b"; // coral — oxygen
const N = "#2fd9a6"; // teal  — nitrogen
const H = "#f5b93c"; // gold  — hydrogen
const CL = "#f5b93c"; // gold  — chlorine
const C = "#a98cff"; // violet — carbon
const LINE = "#6f7f96";
const INK = "#dde5f0";
const FAINT = "#9fb0c4";

function Atom({ x, y, label, fill, r = 15 }: { x: number; y: number; label: string; fill: string; r?: number }) {
  return (
    <g>
      <circle cx={x} cy={y} r={r} fill={fill} fillOpacity={0.16} stroke={fill} strokeWidth={1.6} />
      <text x={x} y={y} textAnchor="middle" dominantBaseline="central" fontSize={12} fontWeight={700} fill={INK}>
        {label}
      </text>
    </g>
  );
}

function Bond({ x1, y1, x2, y2, stroke = LINE, dash }: { x1: number; y1: number; x2: number; y2: number; stroke?: string; dash?: boolean }) {
  return <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={stroke} strokeWidth={1.7} strokeDasharray={dash ? "5 4" : undefined} />;
}

function Cap({ children }: { children: ReactNode }) {
  return (
    <p className="mt-2 text-center text-[12.5px] leading-snug" style={{ color: FAINT }}>
      {children}
    </p>
  );
}

function Frame({ title, viewBox, children, caption }: { title: string; viewBox: string; children: ReactNode; caption: ReactNode }) {
  return (
    <figure className="mx-auto my-6 max-w-[560px] overflow-hidden rounded-xl border" style={{ borderColor: "rgba(63,208,238,0.22)", background: "#07111d" }}>
      <figcaption className="px-4 pt-3 text-[13px] font-black" style={{ color: BE }}>
        {title}
      </figcaption>
      <div className="overflow-x-auto px-3 pb-2">
        <svg viewBox={viewBox} className="mx-auto block h-auto w-full" style={{ maxWidth: 520 }} role="img" aria-label={title}>
          {children}
        </svg>
      </div>
      <div className="px-4 pb-3">
        <Cap>{caption}</Cap>
      </div>
    </figure>
  );
}

/* ---- Be4O core: basic beryllium acetate / nitrate ------------------ */
function Be4OCore({ kind }: { kind: "acetate" | "nitrate" }) {
  // 2-D projection of the Be4 tetrahedron: one Be up, two Be mid, one Be low.
  const beTop = [210, 34], beL = [70, 150], beR = [350, 150], beLow = [210, 250];
  const oC = [210, 150];
  const boxes: [number, number][] = [
    [130, 92], [292, 92], [210, 116],
    [210, 186], [130, 216], [292, 216],
  ];
  return (
    <Frame
      title={`Be₄(μ₄-O)(μ-${kind === "acetate" ? "O₂CCH₃" : "O₂NO"})₆ — basic beryllium ${kind}`}
      viewBox="0 0 420 290"
      caption={
        <>
          Four Be at the vertices of a tetrahedron; the central <span style={{ color: O }}>μ₄-O</span> contacts <b>all four</b> Be
          (red bonds). Each of the <b>six</b> labelled boxes is one complete μ₂-{kind} bridge spanning a Be–Be edge.
        </>
      }
    >
      {/* Be–Be edges */}
      <Bond x1={beTop[0]} y1={beTop[1]} x2={beL[0]} y2={beL[1]} />
      <Bond x1={beTop[0]} y1={beTop[1]} x2={beR[0]} y2={beR[1]} />
      <Bond x1={beL[0]} y1={beL[1]} x2={beR[0]} y2={beR[1]} />
      <Bond x1={beTop[0]} y1={beTop[1]} x2={beLow[0]} y2={beLow[1]} dash />
      <Bond x1={beL[0]} y1={beL[1]} x2={beLow[0]} y2={beLow[1]} dash />
      <Bond x1={beR[0]} y1={beR[1]} x2={beLow[0]} y2={beLow[1]} dash />
      {/* μ4-O to each Be */}
      {[beTop, beL, beR, beLow].map((p, i) => (
        <Bond key={i} x1={oC[0]} y1={oC[1]} x2={p[0]} y2={p[1]} stroke={O} />
      ))}
      {boxes.map(([x, y], i) => (
        <g key={i}>
          <rect x={x - 42} y={y - 11} width={84} height={22} rx={4} fill="#0c1826" stroke={C} strokeWidth={1.2} />
          <text x={x} y={y} textAnchor="middle" dominantBaseline="central" fontSize={10.5} fill={INK}>
            {kind === "acetate" ? "O–C(CH₃)–O" : "O–N(=O)–O"}
          </text>
        </g>
      ))}
      <Atom x={beTop[0]} y={beTop[1]} label="Be" fill={BE} />
      <Atom x={beL[0]} y={beL[1]} label="Be" fill={BE} />
      <Atom x={beR[0]} y={beR[1]} label="Be" fill={BE} />
      <Atom x={beLow[0]} y={beLow[1]} label="Be" fill={BE} />
      <Atom x={oC[0]} y={oC[1]} label="μ₄-O" fill={O} r={17} />
    </Frame>
  );
}

/* ---- single edge-bridge detail ------------------------------------ */
function Be4OBridges() {
  return (
    <Frame
      title="Edge-bridge connectivity in the Be₄O clusters"
      viewBox="0 0 460 190"
      caption={<>Six such μ₂ bridges occupy the six edges of the same tetrahedral Be₄(μ₄-O) core.</>}
    >
      <text x={115} y={20} textAnchor="middle" fontSize={11} fill={FAINT}>acetate bridge</text>
      <text x={345} y={20} textAnchor="middle" fontSize={11} fill={FAINT}>nitrate bridge</text>
      {/* acetate: Be–O–C(CH3)–O–Be */}
      <Bond x1={30} y1={95} x2={70} y2={95} />
      <Bond x1={70} y1={95} x2={115} y2={95} />
      <Bond x1={115} y1={95} x2={160} y2={95} />
      <Bond x1={160} y1={95} x2={200} y2={95} />
      <Bond x1={115} y1={95} x2={115} y2={55} stroke={C} />
      <Atom x={30} y={95} label="Be" fill={BE} r={13} />
      <Atom x={70} y={95} label="O" fill={O} r={12} />
      <Atom x={115} y={95} label="C" fill={C} r={12} />
      <Atom x={160} y={95} label="O" fill={O} r={12} />
      <Atom x={200} y={95} label="Be" fill={BE} r={13} />
      <text x={115} y={45} textAnchor="middle" fontSize={11} fontWeight={700} fill={H}>CH₃</text>
      <text x={115} y={140} textAnchor="middle" fontSize={11} fill={INK}>Be–O–C(CH₃)–O–Be</text>
      {/* nitrate: Be–O–N(=O)–O–Be */}
      <Bond x1={255} y1={95} x2={295} y2={95} />
      <Bond x1={295} y1={95} x2={340} y2={95} />
      <Bond x1={340} y1={95} x2={385} y2={95} />
      <Bond x1={385} y1={95} x2={425} y2={95} />
      <Bond x1={340} y1={95} x2={340} y2={55} stroke={O} />
      <Atom x={255} y={95} label="Be" fill={BE} r={13} />
      <Atom x={295} y={95} label="O" fill={O} r={12} />
      <Atom x={340} y={95} label="N" fill={N} r={12} />
      <Atom x={385} y={95} label="O" fill={O} r={12} />
      <Atom x={425} y={95} label="Be" fill={BE} r={13} />
      <text x={340} y={45} textAnchor="middle" fontSize={11} fontWeight={700} fill={O}>=O</text>
      <text x={340} y={140} textAnchor="middle" fontSize={11} fill={INK}>Be–O–N(=O)–O–Be</text>
    </Frame>
  );
}

/* ---- polymeric BeH2 --------------------------------------------- */
function BeH2Chain() {
  const bex = [40, 130, 220, 310, 400];
  const y = 95;
  return (
    <Frame
      title="Solid BeH₂ — fragment of the extended electron-deficient network"
      viewBox="0 0 440 170"
      caption={<>Every Be–H–Be bridge is a <b>3-centre–2-electron</b> bond; each interior Be is four-coordinate. The chain is not a set of ordinary 2-centre Be–H bonds and not a free H⁻ lattice.</>}
    >
      {bex.slice(0, -1).map((x, i) => {
        const nx = bex[i + 1];
        const mid = (x + nx) / 2;
        return (
          <g key={i}>
            <Bond x1={x} y1={y} x2={mid} y2={y - 34} stroke={LINE} />
            <Bond x1={mid} y1={y - 34} x2={nx} y2={y} stroke={LINE} />
            <Bond x1={x} y1={y} x2={mid} y2={y + 34} stroke={LINE} />
            <Bond x1={mid} y1={y + 34} x2={nx} y2={y} stroke={LINE} />
            <Atom x={mid} y={y - 34} label="H" fill={H} r={12} />
            <Atom x={mid} y={y + 34} label="H" fill={H} r={12} />
          </g>
        );
      })}
      {bex.map((x, i) => (
        <Atom key={i} x={x} y={y} label="Be" fill={BE} />
      ))}
      <text x={16} y={y + 4} fontSize={16} fill={FAINT}>…</text>
      <text x={420} y={y + 4} fontSize={16} fill={FAINT}>…</text>
    </Frame>
  );
}

/* ---- BeCl2 phase structures ------------------------------------- */
function BeCl2Phases() {
  return (
    <Frame
      title="BeCl₂ — coordination change with phase"
      viewBox="0 0 480 210"
      caption={
        <>
          <b>Solid</b>: edge-sharing BeCl₄ tetrahedra, interior Be CN 4, all Cl μ₂-bridging.&nbsp;
          <b>Vapour (Be₂Cl₄)</b>: each Be CN 3, two bridging + one terminal Cl.&nbsp;
          <b>Hot vapour</b>: linear monomer, Be CN 2.
        </>
      }
    >
      {/* solid chain */}
      <text x={95} y={18} textAnchor="middle" fontSize={10.5} fill={FAINT}>solid: chain</text>
      {[[45, 110], [110, 110], [175, 110]].map(([x, y], i, a) => i < a.length - 1 && (
        <g key={i}>
          <Bond x1={x} y1={y} x2={(x + a[i + 1][0]) / 2} y2={y - 30} stroke={LINE} />
          <Bond x1={(x + a[i + 1][0]) / 2} y1={y - 30} x2={a[i + 1][0]} y2={y} stroke={LINE} />
          <Bond x1={x} y1={y} x2={(x + a[i + 1][0]) / 2} y2={y + 30} stroke={LINE} />
          <Bond x1={(x + a[i + 1][0]) / 2} y1={y + 30} x2={a[i + 1][0]} y2={y} stroke={LINE} />
          <Atom x={(x + a[i + 1][0]) / 2} y={y - 30} label="Cl" fill={CL} r={11} />
          <Atom x={(x + a[i + 1][0]) / 2} y={y + 30} label="Cl" fill={CL} r={11} />
        </g>
      ))}
      {[45, 110, 175].map((x, i) => <Atom key={i} x={x} y={110} label="Be" fill={BE} r={13} />)}
      <text x={26} y={114} fontSize={13} fill={FAINT}>…</text>
      <text x={188} y={114} fontSize={13} fill={FAINT}>…</text>
      {/* dimer */}
      <text x={290} y={18} textAnchor="middle" fontSize={10.5} fill={FAINT}>vapour: Be₂Cl₄</text>
      <Bond x1={255} y1={65} x2={290} y2={95} stroke={LINE} />
      <Bond x1={290} y1={95} x2={325} y2={65} stroke={LINE} />
      <Bond x1={255} y1={155} x2={290} y2={95} stroke={LINE} />
      <Bond x1={290} y1={95} x2={325} y2={155} stroke={LINE} />
      <Bond x1={255} y1={65} x2={325} y2={65} stroke={LINE} />
      <Bond x1={255} y1={155} x2={325} y2={155} stroke={LINE} />
      <Bond x1={225} y1={110} x2={255} y2={110} stroke={LINE} />
      <Bond x1={325} y1={110} x2={355} y2={110} stroke={LINE} />
      <Atom x={255} y={110} label="Be" fill={BE} r={13} />
      <Atom x={325} y={110} label="Be" fill={BE} r={13} />
      <Atom x={290} y={65} label="Cl" fill={CL} r={11} />
      <Atom x={290} y={155} label="Cl" fill={CL} r={11} />
      <Atom x={222} y={110} label="Cl" fill={CL} r={11} />
      <Atom x={358} y={110} label="Cl" fill={CL} r={11} />
      {/* monomer */}
      <text x={430} y={18} textAnchor="middle" fontSize={10.5} fill={FAINT}>hot: monomer</text>
      <Bond x1={400} y1={110} x2={430} y2={110} stroke={LINE} />
      <Bond x1={430} y1={110} x2={460} y2={110} stroke={LINE} />
      <Atom x={400} y={110} label="Cl" fill={CL} r={11} />
      <Atom x={430} y={110} label="Be" fill={BE} r={13} />
      <Atom x={460} y={110} label="Cl" fill={CL} r={11} />
    </Frame>
  );
}

/* ---- [Be(ox)2]2- ---------------------------------------------- */
function BeOx2() {
  return (
    <Frame
      title="[Be(ox)₂]²⁻ — two bidentate oxalates, two five-membered chelate rings"
      viewBox="0 0 420 220"
      caption={<>Be coordination number 4, tetrahedral O-donor set; each oxalate closes one five-membered chelate ring. Overall charge 2−.</>}
    >
      {[[-1, "L"], [1, "R"]].map(([s, tag]) => {
        const dir = s as number;
        const cA = [210 + dir * 55, 78];
        const cB = [210 + dir * 55, 142];
        const oA1 = [210 + dir * 12, 90];
        const oA2 = [210 + dir * 110, 60];
        const oB1 = [210 + dir * 12, 130];
        const oB2 = [210 + dir * 110, 160];
        return (
          <g key={tag as string}>
            <Bond x1={210} y1={110} x2={oA1[0]} y2={oA1[1]} stroke={BE} />
            <Bond x1={210} y1={110} x2={oB1[0]} y2={oB1[1]} stroke={BE} />
            <Bond x1={oA1[0]} y1={oA1[1]} x2={cA[0]} y2={cA[1]} stroke={LINE} />
            <Bond x1={oB1[0]} y1={oB1[1]} x2={cB[0]} y2={cB[1]} stroke={LINE} />
            <Bond x1={cA[0]} y1={cA[1]} x2={cB[0]} y2={cB[1]} stroke={LINE} />
            <Bond x1={cA[0]} y1={cA[1]} x2={oA2[0]} y2={oA2[1]} stroke={O} />
            <Bond x1={cB[0]} y1={cB[1]} x2={oB2[0]} y2={oB2[1]} stroke={O} />
            <Atom x={cA[0]} y={cA[1]} label="C" fill={C} r={11} />
            <Atom x={cB[0]} y={cB[1]} label="C" fill={C} r={11} />
            <Atom x={oA1[0]} y={oA1[1]} label="O" fill={O} r={10} />
            <Atom x={oB1[0]} y={oB1[1]} label="O" fill={O} r={10} />
            <Atom x={oA2[0]} y={oA2[1]} label="O" fill={O} r={10} />
            <Atom x={oB2[0]} y={oB2[1]} label="O" fill={O} r={10} />
          </g>
        );
      })}
      <Atom x={210} y={110} label="Be" fill={BE} r={16} />
    </Frame>
  );
}

/* ---- coordination donor maps ---------------------------------- */
function DonorMaps() {
  return (
    <Frame
      title="Coordination donor maps — chlorophyll Mg and EDTA"
      viewBox="0 0 460 210"
      caption={
        <>
          <b>Chlorophyll</b>: Mg bound by <b>four</b> porphyrin ring N donors.&nbsp;
          <b>EDTA</b>: hexadentate — <b>2 amine N + 4 carboxylate O⁻</b> donors, forming a 1:1 metal chelate with Ca²⁺/Mg²⁺.
        </>
      }
    >
      <text x={110} y={18} textAnchor="middle" fontSize={11} fill={FAINT}>chlorophyll Mg core</text>
      <polygon points="110,30 175,70 175,150 110,185 45,150 45,70" fill="none" stroke={O} strokeWidth={1.4} />
      <Bond x1={110} y1={110} x2={110} y2={62} stroke={N} />
      <Bond x1={110} y1={110} x2={110} y2={158} stroke={N} />
      <Bond x1={110} y1={110} x2={62} y2={110} stroke={N} />
      <Bond x1={110} y1={110} x2={158} y2={110} stroke={N} />
      <Atom x={110} y={62} label="N" fill={N} r={11} />
      <Atom x={110} y={158} label="N" fill={N} r={11} />
      <Atom x={62} y={110} label="N" fill={N} r={11} />
      <Atom x={158} y={110} label="N" fill={N} r={11} />
      <Atom x={110} y={110} label="Mg" fill={BE} r={15} />
      <line x1={230} y1={30} x2={230} y2={185} stroke={LINE} strokeWidth={1} />
      <text x={350} y={18} textAnchor="middle" fontSize={11} fill={FAINT}>EDTA donor set</text>
      <Bond x1={310} y1={110} x2={390} y2={110} stroke={LINE} />
      <Bond x1={310} y1={110} x2={280} y2={70} stroke={LINE} />
      <Bond x1={310} y1={110} x2={280} y2={150} stroke={LINE} />
      <Bond x1={390} y1={110} x2={420} y2={70} stroke={LINE} />
      <Bond x1={390} y1={110} x2={420} y2={150} stroke={LINE} />
      <Atom x={310} y={110} label="N" fill={N} r={12} />
      <Atom x={390} y={110} label="N" fill={N} r={12} />
      <Atom x={280} y={70} label="O⁻" fill={O} r={11} />
      <Atom x={280} y={150} label="O⁻" fill={O} r={11} />
      <Atom x={420} y={70} label="O⁻" fill={O} r={11} />
      <Atom x={420} y={150} label="O⁻" fill={O} r={11} />
    </Frame>
  );
}

const FIGURES: Record<string, () => ReactNode> = {
  "be4o-acetate": () => <Be4OCore kind="acetate" />,
  "be4o-nitrate": () => <Be4OCore kind="nitrate" />,
  "be4o-bridges": () => <Be4OBridges />,
  "beh2-chain": () => <BeH2Chain />,
  "becl2-phases": () => <BeCl2Phases />,
  "be-ox2": () => <BeOx2 />,
  "donor-maps": () => <DonorMaps />,
};

export function sBlockQbFigure(key: string): ReactNode {
  const f = FIGURES[key];
  return f ? f() : null;
}
