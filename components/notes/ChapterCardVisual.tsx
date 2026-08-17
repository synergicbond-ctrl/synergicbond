import type { ReactNode } from "react";

type VisualProps = { chapterId: string; title: string };

// Semantic chemistry palette — design-system content tokens
const B  = "#37c8f4";   // --chem-bond    (teal)
const G  = "#e3b341";   // --chem-energy  (gold / --accent)
const P  = "#b376ff";   // --chem-orbital (purple)
const E  = "#50dc7b";   // --chem-rule    (green)
const R  = "#ff775d";   // --chem-trap    (coral)
const DIM = "rgba(246,239,223,0.22)";
const BG  = "#07100f";

export default function ChapterCardVisual({ chapterId, title }: VisualProps) {
  const id = chapterId.toLowerCase();
  let drawing: ReactNode;

  // ── ATOMIC STRUCTURE ────────────────────────────────────────────
  if (id.includes("atomic")) {
    drawing = <>
      <circle cx="80" cy="44" r="9" fill={G} opacity="0.92" />
      <ellipse cx="80" cy="44" rx="30" ry="10" fill="none" stroke={B}  strokeWidth="1.8" />
      <circle  cx="110" cy="44" r="4" fill={B} />
      <ellipse cx="80" cy="44" rx="50" ry="18" fill="none" stroke={P}  strokeWidth="1.8" transform="rotate(-40 80 44)" />
      <circle  cx="42"  cy="28" r="4" fill={P} />
      <ellipse cx="80" cy="44" rx="64" ry="22" fill="none" stroke={E}  strokeWidth="1.5" transform="rotate(55 80 44)" />
      <circle  cx="122" cy="70" r="3.5" fill={E} />
    </>;

  // ── MOLE CONCEPT / STOICHIOMETRY ────────────────────────────────
  } else if (id.includes("mole") || id.includes("stoichiometry")) {
    drawing = <>
      <text x="16" y="44" fill={B} fontSize="22" fontWeight="700">2H₂</text>
      <text x="68" y="44" fill={DIM} fontSize="18" opacity="0.6">+</text>
      <text x="86" y="44" fill={P} fontSize="22" fontWeight="700">O₂</text>
      <path d="M130 40h18m-7-6 7 6-7 6" stroke={G} strokeWidth="2.2" fill="none" strokeLinecap="round" />
      <line x1="16" y1="54" x2="144" y2="54" stroke={DIM} strokeWidth="0.8" opacity="0.5" />
      <text x="36" y="70" fill={E} fontSize="15" fontWeight="600">2H₂O</text>
    </>;

  // ── REDOX ────────────────────────────────────────────────────────
  } else if (id.includes("redox")) {
    drawing = <>
      <text x="18" y="35" fill={R} fontSize="15" fontWeight="700">Ox</text>
      <text x="18" y="49" fill={R} fontSize="10">−e⁻</text>
      <text x="114" y="35" fill={E} fontSize="15" fontWeight="700">Red</text>
      <text x="114" y="49" fill={E} fontSize="10">+e⁻</text>
      {/* e⁻ top arrow */}
      <path d="M50 28h68" stroke={B} strokeWidth="2" strokeDasharray="5 3" />
      <path d="M112 24l6 4-6 4" fill={B} />
      <text x="74" y="24" fill={B} fontSize="10">e⁻</text>
      {/* ion bottom arrow */}
      <path d="M118 62H50" stroke={G} strokeWidth="2" />
      <path d="M56 58l-6 4 6 4" fill={G} />
      {/* divider */}
      <line x1="80" y1="16" x2="80" y2="78" stroke={DIM} strokeWidth="1" strokeDasharray="4 3" />
    </>;

  // ── CHEMICAL EQUILIBRIUM ─────────────────────────────────────────
  } else if (id.includes("equilibrium")) {
    drawing = <>
      <text x="10" y="42" fill={B} fontSize="18" fontWeight="700">A+B</text>
      <path d="M82 32h44m-9-6 9 6" stroke={G} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M126 52H82m9-6-9 6" stroke={P} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <text x="132" y="44" fill={E} fontSize="18" fontWeight="700">C</text>
      <text x="88" y="26" fill={G} fontSize="9">forward</text>
      <text x="92" y="64" fill={P} fontSize="9">reverse</text>
      <text x="22" y="78" fill={DIM} fontSize="8.5">Le Chatelier's Principle</text>
    </>;

  // ── THERMODYNAMICS ───────────────────────────────────────────────
  } else if (id.includes("thermo")) {
    drawing = <>
      <line x1="20" y1="76" x2="150" y2="76" stroke={DIM} strokeWidth="1" />
      <line x1="20" y1="76" x2="20" y2="14" stroke={DIM} strokeWidth="1" />
      {/* Reactant level */}
      <line x1="20" y1="62" x2="42" y2="62" stroke={B} strokeWidth="2.5" strokeLinecap="round" />
      {/* Activation peak */}
      <path d="M42 62 Q66 14 80 14 Q94 14 118 62" fill="none" stroke={R} strokeWidth="2.5" strokeLinecap="round" />
      {/* Product level */}
      <line x1="118" y1="62" x2="148" y2="70" stroke={E} strokeWidth="2.5" strokeLinecap="round" />
      {/* Ea label */}
      <line x1="80" y1="14" x2="80" y2="62" stroke={G} strokeWidth="1" strokeDasharray="3 3" />
      <text x="82" y="18" fill={G} fontSize="10">Eₐ</text>
      <text x="128" y="60" fill={E} fontSize="9">ΔH</text>
    </>;

  // ── ELECTROCHEMISTRY ─────────────────────────────────────────────
  } else if (id.includes("electro")) {
    drawing = <>
      <rect x="18" y="22" width="32" height="46" rx="3" fill="none" stroke={P} strokeWidth="2" />
      <rect x="110" y="22" width="32" height="46" rx="3" fill="none" stroke={B} strokeWidth="2" />
      <line x1="34" y1="10" x2="34" y2="46" stroke={P} strokeWidth="3" strokeLinecap="round" />
      <line x1="126" y1="10" x2="126" y2="46" stroke={B} strokeWidth="3" strokeLinecap="round" />
      <path d="M34 10h92" stroke={G} strokeWidth="2" />
      <path d="M84 6l6 4-6 4" fill={G} />
      <text x="78" y="8" fill={G} fontSize="9">e⁻</text>
      <rect x="63" y="44" width="34" height="8" rx="4" fill={DIM} stroke="rgba(246,239,223,0.3)" strokeWidth="1" />
      <text x="24" y="80" fill={P} fontSize="11" fontWeight="600">Zn</text>
      <text x="118" y="80" fill={B} fontSize="11" fontWeight="600">Cu</text>
    </>;

  // ── KINETICS ────────────────────────────────────────────────────
  } else if (id.includes("kinetics")) {
    drawing = <>
      <line x1="20" y1="78" x2="150" y2="78" stroke={DIM} strokeWidth="1" />
      <line x1="20" y1="78" x2="20" y2="14" stroke={DIM} strokeWidth="1" />
      <path d="M28 18 Q46 22 66 38 Q90 56 140 72" fill="none" stroke={R} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M28 32 L140 78" fill="none" stroke={G} strokeWidth="1.5" strokeDasharray="5 3" opacity="0.7" />
      <text x="22" y="14" fill={DIM} fontSize="8">[A]</text>
      <text x="142" y="84" fill={DIM} fontSize="8">t</text>
      <text x="50" y="20" fill={R} fontSize="9">1st order</text>
      <text x="90" y="52" fill={G} fontSize="9">zero order</text>
    </>;

  // ── SOLUTIONS ────────────────────────────────────────────────────
  } else if (id.includes("solution") || id.includes("concentration")) {
    drawing = <>
      {/* Beaker */}
      <path d="M40 18h48v50l12 10H28l12-10V18Z" fill="none" stroke={B} strokeWidth="2" strokeLinejoin="round" />
      {/* Liquid level */}
      <path d="M32 58h52" stroke={B} strokeWidth="10" opacity="0.12" />
      {/* Solute dots */}
      {([[54,52,G],[72,60,P],[84,54,E],[60,64,B],[78,70,R],[68,46,G]] as [number,number,string][]).map(([cx,cy,c],i) => (
        <circle key={i} cx={cx} cy={cy} r="3.2" fill={c} opacity="0.9" />
      ))}
      <text x="46" y="14" fill={DIM} fontSize="9">M = n / V</text>
    </>;

  // ── STATES OF MATTER / GASES ─────────────────────────────────────
  } else if (id.includes("state") || id.includes("gas")) {
    drawing = <>
      <rect x="20" y="18" width="120" height="58" rx="3" fill="none" stroke={DIM} strokeWidth="1.5" />
      {([[48,34,14,-8,B],[88,28,-12,6,G],[128,40,-10,-12,P],[38,60,12,10,E],[82,56,10,-14,B],[122,64,-14,6,G]] as [number,number,number,number,string][]).map(([cx,cy,vx,vy,c],i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="6" fill={c} opacity="0.85" />
          <line x1={cx} y1={cy} x2={cx+vx} y2={cy+vy} stroke="rgba(246,239,223,0.25)" strokeWidth="1.5" />
        </g>
      ))}
      <text x="52" y="86" fill={G} fontSize="11" fontWeight="600">PV = nRT</text>
    </>;

  // ── SOLID STATE ──────────────────────────────────────────────────
  } else if (id.includes("solid")) {
    const corners: [number,number,string][] = [[34,22,B],[80,22,B],[126,22,B],[34,58,G],[80,58,G],[126,58,G]];
    const face: [number,number,string][]    = [[57,40,E],[103,40,E],[57,76,E],[103,76,E]];
    drawing = <>
      {corners.map(([cx,cy,c],i) => <g key={i}><circle cx={cx} cy={cy} r="10" fill={BG} stroke={c} strokeWidth="2" /><circle cx={cx} cy={cy} r="3.5" fill={c} /></g>)}
      {face.map(([cx,cy,c],i)    => <g key={i}><circle cx={cx} cy={cy} r="7"  fill={BG} stroke={c} strokeWidth="2" /><circle cx={cx} cy={cy} r="2.5" fill={c} /></g>)}
      <line x1="34" y1="22" x2="126" y2="22" stroke={DIM} strokeWidth="1" />
      <line x1="34" y1="58" x2="126" y2="58" stroke={DIM} strokeWidth="1" />
      <line x1="34" y1="22" x2="34"  y2="58" stroke={DIM} strokeWidth="1" />
      <line x1="80" y1="22" x2="80"  y2="58" stroke={DIM} strokeWidth="1" />
      <line x1="126" y1="22" x2="126" y2="58" stroke={DIM} strokeWidth="1" />
    </>;

  // ── HYDROCARBONS ─────────────────────────────────────────────────
  } else if (id.includes("hydrocarbon")) {
    drawing = <>
      {/* Benzene hex */}
      <path d="M64 20L78 28L78 44L64 52L50 44L50 28Z" fill="none" stroke={G} strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="64" cy="36" r="9" fill="none" stroke={G} strokeWidth="1.2" opacity="0.55" />
      {/* Alkane chain */}
      <path d="M78 36L96 26L114 36L132 26L148 36" fill="none" stroke={B} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <text x="44" y="68" fill={G} fontSize="10">Aromatic</text>
      <text x="104" y="68" fill={B} fontSize="10">Alkane</text>
    </>;

  // ── HALOALKANES / HALOARENES ─────────────────────────────────────
  } else if (id.includes("halo")) {
    drawing = <>
      <text x="18" y="46" fill={DIM} fontSize="16" fontWeight="600">R</text>
      <line x1="34" y1="42" x2="56" y2="42" stroke={DIM} strokeWidth="2.5" />
      <circle cx="66" cy="42" r="12" fill={BG} stroke={B} strokeWidth="2.2" />
      <text x="61" y="47" fill={B} fontSize="13" fontWeight="700">C</text>
      <line x1="78" y1="42" x2="100" y2="42" stroke={B} strokeWidth="2.5" />
      <circle cx="112" cy="42" r="12" fill={BG} stroke={R} strokeWidth="2.5" />
      <text x="107" y="47" fill={R} fontSize="13" fontWeight="700">X</text>
      {/* Nu attack */}
      <text x="18" y="68" fill={E} fontSize="12">Nu:</text>
      <path d="M36 65Q54 55 62 50" fill="none" stroke={E} strokeWidth="1.5" strokeDasharray="4 3" />
      <path d="M58 48l4 3-4 2" fill={E} />
      {/* LG departs */}
      <path d="M124 50Q138 60 148 68" fill="none" stroke={G} strokeWidth="1.5" strokeDasharray="4 3" />
      <text x="138" y="78" fill={G} fontSize="10">LG</text>
    </>;

  // ── GENERAL ORGANIC CHEMISTRY (GOC) ──────────────────────────────
  } else if (id.includes("goc") || id.includes("general-organic") || id.includes("general_organic")) {
    drawing = <>
      <text x="14" y="42" fill={B} fontSize="16" fontWeight="700">C=O</text>
      <text x="14" y="56" fill={P} fontSize="10">δ⁻ on O</text>
      {/* Double-headed resonance arrow */}
      <path d="M62 38h28m-7-5 7 5-7 5" stroke={G} strokeWidth="2.2" fill="none" strokeLinecap="round" />
      <path d="M90 50H62m7-5-7 5 7 5" stroke={G} strokeWidth="2.2" fill="none" strokeLinecap="round" />
      <text x="96" y="42" fill={R} fontSize="16" fontWeight="700">C⁺–O</text>
      <text x="96" y="56" fill={G} fontSize="10">δ⁺ on C</text>
      <text x="24" y="76" fill={DIM} fontSize="8.5">Resonance · Inductive · Hyperconj.</text>
    </>;

  // ── ISOMERISM / STEREOCHEMISTRY ─────────────────────────────────
  } else if (id.includes("isomer") || id.includes("stereo")) {
    drawing = <>
      <line x1="80" y1="14" x2="80" y2="80" stroke={DIM} strokeWidth="1" strokeDasharray="4 3" />
      {/* Left chiral centre */}
      <circle cx="46" cy="44" r="10" fill={BG} stroke={B} strokeWidth="2" />
      <text x="41" y="49" fill={B} fontSize="11">C*</text>
      <line x1="46" y1="34" x2="32" y2="20" stroke={B} strokeWidth="2" />
      <line x1="46" y1="34" x2="22" y2="40" stroke={B} strokeWidth="2" />
      <path d="M46 54L22 68" stroke={P} strokeWidth="4.5" opacity="0.7" strokeLinecap="round" />
      {/* Right chiral centre (mirror) */}
      <circle cx="114" cy="44" r="10" fill={BG} stroke={E} strokeWidth="2" />
      <text x="109" y="49" fill={E} fontSize="11">C*</text>
      <line x1="114" y1="34" x2="128" y2="20" stroke={E} strokeWidth="2" />
      <line x1="114" y1="34" x2="138" y2="40" stroke={E} strokeWidth="2" />
      <path d="M114 54L138 68" stroke={R} strokeWidth="4.5" opacity="0.7" strokeLinecap="round" />
      <text x="68" y="86" fill={DIM} fontSize="8">Enantiomers</text>
    </>;

  // ── CARBONYLS (aldehyde · ketone · carboxylic acid) ──────────────
  } else if (id.includes("aldehyde") || id.includes("ketone") || id.includes("carbonyl") || id.includes("carbony")) {
    drawing = <>
      <text x="18" y="42" fill={DIM} fontSize="14" fontWeight="600">R</text>
      <line x1="30" y1="38" x2="54" y2="38" stroke={DIM} strokeWidth="2.5" />
      <circle cx="66" cy="38" r="12" fill={BG} stroke={B} strokeWidth="2" />
      <text x="62" y="43" fill={B} fontSize="13" fontWeight="700">C</text>
      {/* C=O double bond */}
      <line x1="78" y1="33" x2="100" y2="33" stroke={R} strokeWidth="2.5" />
      <line x1="78" y1="43" x2="100" y2="43" stroke={R} strokeWidth="1.8" opacity="0.7" />
      <circle cx="112" cy="38" r="12" fill={BG} stroke={R} strokeWidth="2.5" />
      <text x="108" y="43" fill={R} fontSize="13" fontWeight="700">O</text>
      {/* Nucleophile */}
      <text x="104" y="72" fill={E} fontSize="13">Nu:⁻</text>
      <path d="M112 68Q104 58 100 46" fill="none" stroke={E} strokeWidth="1.5" strokeDasharray="4 3" />
      <path d="M100 48l-1 4 3-1" fill={E} />
    </>;

  // ── ALCOHOLS · PHENOLS · ETHERS ──────────────────────────────────
  } else if (id.includes("alcohol") || id.includes("phenol") || id.includes("ether")) {
    drawing = <>
      {/* Phenol ring */}
      <path d="M52 20L64 27L64 41L52 48L40 41L40 27Z" fill="none" stroke={G} strokeWidth="2.2" strokeLinejoin="round" />
      <circle cx="52" cy="34" r="7" fill="none" stroke={G} strokeWidth="1" opacity="0.55" />
      {/* –OH */}
      <line x1="64" y1="34" x2="88" y2="34" stroke={B} strokeWidth="2.5" />
      <circle cx="98" cy="34" r="12" fill={BG} stroke={B} strokeWidth="2.5" />
      <text x="93" y="39" fill={B} fontSize="13" fontWeight="700">O</text>
      <line x1="110" y1="34" x2="126" y2="34" stroke={B} strokeWidth="2.5" />
      <text x="128" y="39" fill={DIM} fontSize="14">H</text>
      {/* Lone pairs */}
      <text x="96" y="24" fill={P} fontSize="11">··</text>
      <text x="96" y="50" fill={P} fontSize="11">··</text>
      <text x="38" y="68" fill={DIM} fontSize="8.5">pKa(phenol) ≈ 10</text>
    </>;

  // ── AMINES ───────────────────────────────────────────────────────
  } else if (id.includes("amine")) {
    drawing = <>
      <circle cx="80" cy="46" r="14" fill={BG} stroke={B} strokeWidth="2.5" />
      <text x="74" y="51" fill={B} fontSize="16" fontWeight="700">N</text>
      <line x1="80" y1="32" x2="58" y2="14" stroke={G} strokeWidth="2.5" />
      <circle cx="54" cy="11" r="6" fill={BG} stroke={G} strokeWidth="2" />
      <line x1="80" y1="32" x2="102" y2="14" stroke={G} strokeWidth="2.5" />
      <circle cx="106" cy="11" r="6" fill={BG} stroke={G} strokeWidth="2" />
      <line x1="80" y1="60" x2="80" y2="78" stroke={G} strokeWidth="2.5" />
      <text x="76" y="84" fill={G} fontSize="12">H</text>
      {/* Lone pair */}
      <text x="90" y="37" fill={P} fontSize="12">:·</text>
      <text x="44" y="72" fill={DIM} fontSize="8.5">Basicity ∝ electron density</text>
    </>;

  // ── BIOMOLECULES ─────────────────────────────────────────────────
  } else if (id.includes("biomolecule")) {
    drawing = <>
      {/* Double helix strands */}
      <path d="M44 14Q62 28 44 46Q26 64 44 80" fill="none" stroke={B} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M116 14Q98 28 116 46Q134 64 116 80" fill="none" stroke={G} strokeWidth="2.5" strokeLinecap="round" />
      {/* Base pair rungs */}
      {([22, 36, 50, 64, 78] as number[]).map((y, i) => (
        <line key={i} x1="46" y1={y} x2="114" y2={y} stroke={P} strokeWidth="1.8" opacity="0.65" />
      ))}
      <text x="50" y="88" fill={DIM} fontSize="8.5">Amino acids · DNA · Sugars</text>
    </>;

  // ── POLYMERS ─────────────────────────────────────────────────────
  } else if (id.includes("polymer")) {
    drawing = <>
      <path d="M22 28L22 58L28 58M22 28L28 28" fill="none" stroke={DIM} strokeWidth="2" strokeLinecap="round" />
      <path d="M94 28L100 28L100 58L94 58" fill="none" stroke={DIM} strokeWidth="2" strokeLinecap="round" />
      <circle cx="46" cy="43" r="10" fill={BG} stroke={B} strokeWidth="2.2" />
      <text x="37" y="48" fill={B} fontSize="10" fontWeight="600">CH₂</text>
      <line x1="56" y1="43" x2="68" y2="43" stroke={DIM} strokeWidth="2.5" />
      <circle cx="80" cy="43" r="10" fill={BG} stroke={G} strokeWidth="2.2" />
      <text x="71" y="48" fill={G} fontSize="10" fontWeight="600">CH₂</text>
      <text x="102" y="58" fill={DIM} fontSize="15" fontWeight="700">n</text>
      <circle cx="120" cy="43" r="2.5" fill={P} />
      <circle cx="128" cy="43" r="2.5" fill={P} />
      <circle cx="136" cy="43" r="2.5" fill={P} />
      <text x="38" y="72" fill={DIM} fontSize="8.5">Repeating structural unit</text>
    </>;

  // ── PERIODIC TABLE ────────────────────────────────────────────────
  } else if (id.includes("periodic")) {
    const colors = [B, G, P, E, R, B];
    drawing = <>
      {colors.map((c, col) =>
        ([0, 1, 2] as number[]).map(row => (
          <rect key={`${col}-${row}`}
            x={20 + col * 22} y={18 + row * 20}
            width="17" height="15" rx="2"
            fill={BG} stroke={c} strokeWidth="1.8"
            opacity={0.45 + row * 0.2}
          />
        ))
      )}
      {/* d-block band */}
      <rect x="20" y="78" width="132" height="8" rx="2" fill={G} opacity="0.18" />
      <text x="62" y="84" fill={G} fontSize="8">d-block transition metals</text>
      {/* EN trend arrow */}
      <path d="M158 18v60m-4-5 4 5-4 5" stroke={R} strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </>;

  // ── CHEMICAL BONDING ─────────────────────────────────────────────
  } else if (id.includes("bonding")) {
    drawing = <>
      <circle cx="80" cy="44" r="12" fill={BG} stroke={G} strokeWidth="2.5" />
      <text x="72" y="49" fill={G} fontSize="12" fontWeight="700">sp³</text>
      <line x1="71" y1="35" x2="48" y2="20" stroke={B} strokeWidth="2.5" />
      <circle cx="44" cy="17" r="8" fill={BG} stroke={B} strokeWidth="2" />
      <line x1="89" y1="35" x2="112" y2="20" stroke={B} strokeWidth="2.5" />
      <circle cx="116" cy="17" r="8" fill={BG} stroke={B} strokeWidth="2" />
      <line x1="71" y1="53" x2="48" y2="68" stroke={P} strokeWidth="2.5" />
      <circle cx="44" cy="71" r="8" fill={BG} stroke={P} strokeWidth="2" />
      <line x1="89" y1="53" x2="112" y2="68" stroke={P} strokeWidth="2.5" />
      <circle cx="116" cy="71" r="8" fill={BG} stroke={P} strokeWidth="2" />
      <text x="50" y="84" fill={DIM} fontSize="8.5">σ bonds · VSEPR · MO theory</text>
    </>;

  // ── COORDINATION COMPOUNDS ────────────────────────────────────────
  } else if (id.includes("coordination")) {
    const ligands: [number, number, string][] = [
      [80, 16, B], [80, 72, B],
      [46, 44, P], [114, 44, P],
      [56, 22, E], [104, 66, E],
    ];
    drawing = <>
      <circle cx="80" cy="44" r="13" fill={BG} stroke={G} strokeWidth="2.5" />
      <text x="73" y="49" fill={G} fontSize="13" fontWeight="700">M</text>
      {ligands.map(([x, y, c], i) => (
        <g key={i}>
          <line x1="80" y1="44" x2={x} y2={y} stroke={c} strokeWidth="1.8" opacity="0.75" />
          <circle cx={x} cy={y} r="8" fill={BG} stroke={c} strokeWidth="1.8" />
          <text x={x - 4} y={y + 4} fill={c} fontSize="8.5">L</text>
        </g>
      ))}
      <text x="50" y="86" fill={DIM} fontSize="8.5">Octahedral complex [ML₆]</text>
    </>;

  // ── P-BLOCK ELEMENTS ─────────────────────────────────────────────
  } else if (id.includes("p-block")) {
    drawing = <>
      <circle cx="36" cy="38" r="20" fill={BG} stroke={B} strokeWidth="2.2" />
      <text x="26" y="44" fill={B} fontSize="18" fontWeight="700">N</text>
      <circle cx="80" cy="38" r="20" fill={BG} stroke={G} strokeWidth="2.2" />
      <text x="70" y="44" fill={G} fontSize="18" fontWeight="700">Si</text>
      <circle cx="124" cy="38" r="20" fill={BG} stroke={P} strokeWidth="2.2" />
      <text x="112" y="44" fill={P} fontSize="18" fontWeight="700">Cl</text>
      <path d="M16 66h128m-8-5 8 5-8 5" stroke={R} strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <text x="44" y="80" fill={R} fontSize="8.5">Electronegativity →</text>
    </>;

  // ── D-BLOCK / F-BLOCK ─────────────────────────────────────────────
  } else if (id.includes("d-and-f") || id.includes("f-block") || id.includes("d-block") || id.includes("transition")) {
    const orbColors = [B, G, P, E, R];
    drawing = <>
      {([0,1,2,3,4] as number[]).map(i => {
        const a = (i * 36 * Math.PI) / 180;
        const cx = 80 + 34 * Math.cos(a);
        const cy = 44 + 34 * Math.sin(a);
        return <ellipse key={i} cx={cx} cy={cy} rx="15" ry="8"
          transform={`rotate(${i*36} ${cx} ${cy})`}
          fill={BG} stroke={orbColors[i]} strokeWidth="2" opacity="0.88" />;
      })}
      <circle cx="80" cy="44" r="5" fill={G} />
      <text x="44" y="84" fill={DIM} fontSize="8.5">Variable oxidation states</text>
    </>;

  // ── HYDROGEN ─────────────────────────────────────────────────────
  } else if (id.includes("hydrogen")) {
    drawing = <>
      <circle cx="52" cy="44" r="20" fill={BG} stroke={B} strokeWidth="2.5" />
      <text x="41" y="50" fill={B} fontSize="20" fontWeight="700">H</text>
      <line x1="72" y1="40" x2="88" y2="40" stroke={G} strokeWidth="2.8" />
      <line x1="72" y1="48" x2="88" y2="48" stroke={G} strokeWidth="1.5" opacity="0.45" />
      <circle cx="108" cy="44" r="20" fill={BG} stroke={B} strokeWidth="2.5" />
      <text x="97" y="50" fill={B} fontSize="20" fontWeight="700">H</text>
      <text x="62" y="30" fill={P} fontSize="9">e⁻</text>
      <text x="54" y="74" fill={DIM} fontSize="8.5">σ bond  ·  436 kJ mol⁻¹</text>
    </>;

  // ── S-BLOCK ELEMENTS ─────────────────────────────────────────────
  } else if (id.includes("s-block")) {
    drawing = <>
      <rect x="18" y="16" width="48" height="60" rx="4" fill={BG} stroke={G} strokeWidth="2" />
      <text x="24" y="38" fill={G} fontSize="17" fontWeight="700">Li</text>
      <text x="24" y="56" fill={G} fontSize="17" fontWeight="700">Na</text>
      <text x="30" y="70" fill={DIM} fontSize="9">Group 1</text>
      <rect x="94" y="16" width="48" height="60" rx="4" fill={BG} stroke={B} strokeWidth="2" />
      <text x="98" y="38" fill={B} fontSize="17" fontWeight="700">Mg</text>
      <text x="100" y="56" fill={B} fontSize="17" fontWeight="700">Ca</text>
      <text x="106" y="70" fill={DIM} fontSize="9">Group 2</text>
      <line x1="80" y1="22" x2="80" y2="70" stroke={DIM} strokeWidth="1" strokeDasharray="4 3" />
    </>;

  // ── METALLURGY ────────────────────────────────────────────────────
  } else if (id.includes("metallurgy")) {
    drawing = <>
      <path d="M44 70L56 28L104 28L116 70Z" fill="none" stroke={G} strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M62 28Q68 14 74 20Q72 10 80 14Q88 10 86 20Q92 14 98 28" fill="none" stroke={R} strokeWidth="2.5" strokeLinecap="round" />
      <text x="22" y="24" fill={DIM} fontSize="10">Ore</text>
      <path d="M38 28L52 28" stroke={DIM} strokeWidth="1.5" />
      <path d="M80 70L80 80L102 80" stroke={B} strokeWidth="2.2" fill="none" />
      <path d="M96 76l6 4-6 4" fill={B} />
      <text x="106" y="83" fill={B} fontSize="10">Metal</text>
      <text x="70" y="54" fill={P} fontSize="11">CO</text>
    </>;

  // ── SALT ANALYSIS / QUALITATIVE ───────────────────────────────────
  } else if (id.includes("qualitative") || id.includes("salt")) {
    drawing = <>
      {([[30,B,"Cation"],[80,G,"Anion"],[130,P,"Confirm"]] as [number,string,string][]).map(([x,c,label]) => (
        <g key={label}>
          <path d={`M${x-12} 18 v42 q0 13 12 13 q12 0 12-13 V18`} fill="none" stroke={c} strokeWidth="2.2" />
          <path d={`M${x-12} 48 q0 13 12 13 q12 0 12-13`} fill={c} opacity="0.25" />
          <text x={x - 14} y="80" fill={c} fontSize="8.5">{label}</text>
        </g>
      ))}
    </>;

  // ── CHEMISTRY IN EVERYDAY LIFE ────────────────────────────────────
  } else if (id.includes("everyday") || id.includes("daily-life")) {
    drawing = <>
      {/* Pill */}
      <rect x="16" y="30" width="38" height="20" rx="10" fill="none" stroke={B} strokeWidth="2.2" />
      <line x1="35" y1="30" x2="35" y2="50" stroke={B} strokeWidth="1.5" />
      <text x="18" y="62" fill={DIM} fontSize="8.5">Drug</text>
      {/* Soap bubble */}
      <circle cx="88" cy="40" r="20" fill="none" stroke={G} strokeWidth="2.2" />
      <circle cx="96" cy="32" r="5" fill="none" stroke={G} strokeWidth="1" opacity="0.45" />
      <text x="76" y="70" fill={DIM} fontSize="8.5">Detergent</text>
      {/* Dye */}
      <text x="118" y="36" fill={P} fontSize="13" fontWeight="700">N=N</text>
      <text x="122" y="52" fill={R} fontSize="10">Azo</text>
      <text x="116" y="64" fill={DIM} fontSize="8.5">Dye</text>
    </>;

  // ── ENVIRONMENTAL CHEMISTRY ────────────────────────────────────────
  } else if (id.includes("environment")) {
    drawing = <>
      <circle cx="80" cy="46" r="28" fill="none" stroke={E} strokeWidth="2.2" />
      <circle cx="80" cy="46" r="34" fill="none" stroke={B} strokeWidth="1.5" opacity="0.45" strokeDasharray="6 4" />
      <path d="M80 18Q98 22 108 46" fill="none" stroke={R} strokeWidth="2" strokeDasharray="5 3" />
      <path d="M80 18Q62 22 52 46" fill="none" stroke={R} strokeWidth="2" strokeDasharray="5 3" />
      <text x="42" y="28" fill={R} fontSize="11" fontWeight="700">CO₂</text>
      <text x="104" y="18" fill={B} fontSize="10">O₃</text>
      <text x="34" y="80" fill={E} fontSize="8.5">Greenhouse · Ozone · Acid rain</text>
    </>;

  // ── DEFAULT ────────────────────────────────────────────────────────
  } else {
    drawing = <>
      <path d="M24 58L48 28L72 58L96 28L120 58L144 28" fill="none" stroke={B} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {([[48,28,G],[72,58,P],[96,28,E],[120,58,R]] as [number,number,string][]).map(([cx,cy,c],i) => (
        <circle key={i} cx={cx} cy={cy} r="5.5" fill={BG} stroke={c} strokeWidth="2" />
      ))}
      <text x="40" y="80" fill={DIM} fontSize="10">{title.slice(0, 24)}</text>
    </>;
  }

  return (
    <figure aria-hidden className="mb-4 overflow-hidden pb-3" style={{ borderBottom: "1px solid var(--border)" }}>
      <svg viewBox="0 0 160 92" className="h-[88px] w-full" role="presentation">
        <rect x="1" y="1" width="158" height="90" rx="6"
          fill={BG}
          stroke="rgba(246,239,223,0.07)"
          strokeWidth="1"
        />
        {drawing}
      </svg>
    </figure>
  );
}
