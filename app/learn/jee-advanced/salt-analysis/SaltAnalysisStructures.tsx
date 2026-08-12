type StructureId =
  | "thiosulfate"
  | "tetrathionate"
  | "chromate-dichromate"
  | "permanganate"
  | "brown-ring"
  | "ni-dmg"
  | "nitroprusside";

const line = {
  stroke: "#67e8f9",
  strokeWidth: 2.5,
  strokeLinecap: "round" as const,
};

const atom = "fill-slate-950 stroke-slate-500";
const label = "fill-slate-100 text-[15px] font-semibold";
const oxygen = "fill-rose-300 text-[15px] font-bold";
const metal = "fill-amber-300 text-[15px] font-bold";

function Frame({
  title,
  children,
  viewBox = "0 0 560 220",
}: {
  title: string;
  children: React.ReactNode;
  viewBox?: string;
}) {
  return (
    <figure className="my-6 overflow-hidden rounded-2xl border border-cyan-400/20 bg-slate-950/80 p-4">
      <svg
        viewBox={viewBox}
        role="img"
        aria-label={title}
        className="mx-auto h-auto w-full max-w-3xl"
      >
        {children}
      </svg>
      <figcaption className="mt-2 text-center text-sm text-slate-400">
        {title}
      </figcaption>
    </figure>
  );
}

function Thiosulfate() {
  return (
    <Frame title="Thiosulphate ion: one terminal sulphur and three oxygens around central sulphur">
      <line x1="280" y1="105" x2="155" y2="105" {...line} />
      <line x1="285" y1="100" x2="285" y2="35" {...line} />
      <line x1="275" y1="100" x2="275" y2="35" {...line} />
      <line x1="285" y1="112" x2="370" y2="165" {...line} />
      <line x1="275" y1="112" x2="190" y2="165" {...line} />
      <circle cx="280" cy="105" r="28" className={atom} />
      <text x="280" y="111" textAnchor="middle" className={label}>S</text>
      <text x="128" y="111" textAnchor="middle" className="fill-yellow-300 text-[16px] font-bold">S⁻</text>
      <text x="280" y="24" textAnchor="middle" className={oxygen}>O</text>
      <text x="392" y="183" textAnchor="middle" className={oxygen}>O⁻</text>
      <text x="168" y="183" textAnchor="middle" className={oxygen}>O⁻</text>
      <text x="465" y="45" className="fill-slate-400 text-[13px]">Overall: [S₂O₃]²⁻</text>
    </Frame>
  );
}

function Tetrathionate() {
  return (
    <Frame title="Tetrathionate ion: two thiosulphate-derived ends joined by an S-S bond">
      <line x1="170" y1="110" x2="245" y2="110" {...line} />
      <line x1="245" y1="110" x2="315" y2="110" {...line} />
      <line x1="315" y1="110" x2="390" y2="110" {...line} />
      <line x1="160" y1="98" x2="115" y2="50" {...line} />
      <line x1="172" y1="95" x2="135" y2="42" {...line} />
      <line x1="160" y1="122" x2="115" y2="170" {...line} />
      <line x1="400" y1="98" x2="445" y2="50" {...line} />
      <line x1="388" y1="95" x2="425" y2="42" {...line} />
      <line x1="400" y1="122" x2="445" y2="170" {...line} />
      {[170, 245, 315, 390].map((x) => (
        <circle key={x} cx={x} cy="110" r="22" className={atom} />
      ))}
      {[170, 245, 315, 390].map((x) => (
        <text key={`t-${x}`} x={x} y="116" textAnchor="middle" className={label}>S</text>
      ))}
      <text x="118" y="35" className={oxygen}>O</text>
      <text x="90" y="190" className={oxygen}>O⁻</text>
      <text x="422" y="35" className={oxygen}>O</text>
      <text x="443" y="190" className={oxygen}>O⁻</text>
      <text x="220" y="155" className="fill-cyan-300 text-[13px]">new S-S bond</text>
      <text x="442" y="65" className="fill-slate-400 text-[13px]">[S₄O₆]²⁻</text>
    </Frame>
  );
}

function ChromateDichromate() {
  return (
    <Frame title="Chromate tetrahedron and corner-shared dichromate tetrahedra" viewBox="0 0 700 260">
      <text x="105" y="28" className="fill-cyan-200 text-[16px] font-semibold">CrO₄²⁻</text>
      <polygon points="150,50 75,185 225,185" fill="#0f172a" stroke="#67e8f9" strokeWidth="2" />
      <line x1="150" y1="115" x2="150" y2="50" {...line} />
      <line x1="150" y1="115" x2="75" y2="185" {...line} />
      <line x1="150" y1="115" x2="225" y2="185" {...line} />
      <circle cx="150" cy="115" r="25" className={atom} />
      <text x="150" y="121" textAnchor="middle" className={metal}>Cr</text>
      <text x="145" y="44" className={oxygen}>O</text>
      <text x="55" y="205" className={oxygen}>O</text>
      <text x="226" y="205" className={oxygen}>O</text>

      <text x="425" y="28" className="fill-cyan-200 text-[16px] font-semibold">Cr₂O₇²⁻</text>
      <polygon points="405,62 330,205 475,205" fill="#0f172a" stroke="#67e8f9" strokeWidth="2" />
      <polygon points="545,62 475,205 620,205" fill="#0f172a" stroke="#67e8f9" strokeWidth="2" />
      <circle cx="405" cy="132" r="24" className={atom} />
      <circle cx="545" cy="132" r="24" className={atom} />
      <circle cx="475" cy="190" r="18" className={atom} />
      <text x="405" y="138" textAnchor="middle" className={metal}>Cr</text>
      <text x="545" y="138" textAnchor="middle" className={metal}>Cr</text>
      <text x="475" y="196" textAnchor="middle" className={oxygen}>O</text>
      <text x="440" y="238" className="fill-slate-400 text-[13px]">shared bridging oxygen</text>
    </Frame>
  );
}

function Permanganate() {
  return (
    <Frame title="Tetrahedral manganate/permanganate oxoanion">
      <polygon points="280,35 145,185 415,185" fill="#0f172a" stroke="#a78bfa" strokeWidth="2.5" />
      <line x1="280" y1="115" x2="280" y2="35" {...line} />
      <line x1="280" y1="115" x2="145" y2="185" {...line} />
      <line x1="280" y1="115" x2="415" y2="185" {...line} />
      <circle cx="280" cy="115" r="30" className={atom} />
      <text x="280" y="122" textAnchor="middle" className={metal}>Mn</text>
      <text x="270" y="28" className={oxygen}>O</text>
      <text x="120" y="207" className={oxygen}>O</text>
      <text x="420" y="207" className={oxygen}>O</text>
      <text x="350" y="68" className={oxygen}>O</text>
      <text x="40" y="45" className="fill-purple-300 text-[14px]">MnO₄⁻: purple</text>
      <text x="40" y="70" className="fill-emerald-300 text-[14px]">MnO₄²⁻: green</text>
    </Frame>
  );
}

function BrownRing() {
  return (
    <Frame title="Pentaaquanitrosyliron complex responsible for the brown ring">
      <circle cx="280" cy="110" r="34" className={atom} />
      <text x="280" y="117" textAnchor="middle" className={metal}>Fe</text>
      {[
        [280, 28], [190, 62], [370, 62], [190, 160], [370, 160],
      ].map(([x, y], i) => (
        <g key={i}>
          <line x1="280" y1="110" x2={x} y2={y} {...line} />
          <text x={x} y={y} textAnchor="middle" className="fill-cyan-200 text-[13px]">H₂O</text>
        </g>
      ))}
      <line x1="280" y1="110" x2="280" y2="190" {...line} />
      <text x="280" y="209" textAnchor="middle" className="fill-rose-300 text-[16px] font-bold">N≡O</text>
      <text x="425" y="105" className="fill-amber-200 text-[14px]">[Fe(H₂O)₅(NO)]²⁺</text>
    </Frame>
  );
}

function NiDmg() {
  return (
    <Frame title="Square-planar nickel dimethylglyoxime chelate" viewBox="0 0 650 280">
      <rect x="245" y="85" width="160" height="120" rx="14" fill="#0f172a" stroke="#fb7185" strokeWidth="2.5" />
      <circle cx="325" cy="145" r="32" className={atom} />
      <text x="325" y="153" textAnchor="middle" className={metal}>Ni²⁺</text>
      {[[255, 105], [395, 105], [255, 185], [395, 185]].map(([x, y], i) => (
        <g key={i}>
          <line x1="325" y1="145" x2={x} y2={y} {...line} />
          <text x={x} y={y} textAnchor="middle" className="fill-cyan-200 text-[15px] font-bold">N</text>
        </g>
      ))}
      <text x="50" y="88" className="fill-slate-200 text-[14px]">CH₃-C(=N-O⁻)-</text>
      <text x="50" y="112" className="fill-slate-200 text-[14px]">C(=N-OH)-CH₃</text>
      <text x="430" y="88" className="fill-slate-200 text-[14px]">two bidentate</text>
      <text x="430" y="112" className="fill-slate-200 text-[14px]">DMG ligands</text>
      <line x1="258" y1="75" x2="392" y2="75" stroke="#fbbf24" strokeWidth="2" strokeDasharray="6 4" />
      <line x1="258" y1="215" x2="392" y2="215" stroke="#fbbf24" strokeWidth="2" strokeDasharray="6 4" />
      <text x="220" y="250" className="fill-slate-400 text-[13px]">intramolecular O-H···O hydrogen bonding</text>
    </Frame>
  );
}

function Nitroprusside() {
  return (
    <Frame title="Simplified thionitroprusside formation">
      <circle cx="220" cy="110" r="34" className={atom} />
      <text x="220" y="117" textAnchor="middle" className={metal}>Fe</text>
      {[45, 85, 135, 175, 215].map((y, i) => (
        <g key={i}>
          <line x1="220" y1="110" x2="115" y2={y} {...line} />
          <text x="75" y={y + 5} className="fill-cyan-200 text-[13px]">C≡N</text>
        </g>
      ))}
      <line x1="220" y1="110" x2="350" y2="110" {...line} />
      <text x="365" y="116" className="fill-rose-300 text-[16px] font-bold">N(O)-S⁻</text>
      <text x="320" y="58" className="fill-purple-300 text-[14px]">violet in alkaline medium</text>
      <text x="320" y="168" className="fill-slate-400 text-[13px]">[Fe(CN)₅NOS]⁴⁻ (simplified)</text>
    </Frame>
  );
}

export function SaltAnalysisStructure({ id }: { id: string }) {
  switch (id as StructureId) {
    case "thiosulfate": return <Thiosulfate />;
    case "tetrathionate": return <Tetrathionate />;
    case "chromate-dichromate": return <ChromateDichromate />;
    case "permanganate": return <Permanganate />;
    case "brown-ring": return <BrownRing />;
    case "ni-dmg": return <NiDmg />;
    case "nitroprusside": return <Nitroprusside />;
    default: return null;
  }
}
