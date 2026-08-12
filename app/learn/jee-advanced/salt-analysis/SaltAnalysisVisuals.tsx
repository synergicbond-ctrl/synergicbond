import { useId } from "react";

type VisualId =
  | "cation-groups"
  | "anion-gas-flow"
  | "sulfide-ph-graph"
  | "flame-colors"
  | "group-i-separation"
  | "group-iii-separation"
  | "group-v-separation"
  | "test-family-map";

type Tone = "cyan" | "violet" | "amber" | "emerald" | "rose";

const palette: Record<Tone, string> = {
  cyan: "#22d3ee",
  violet: "#a78bfa",
  amber: "#fbbf24",
  emerald: "#34d399",
  rose: "#fb7185",
};

const cyan = palette.cyan;
const slate = "#e2e8f0";
const muted = "#94a3b8";

function Frame({
  title,
  children,
  viewBox = "0 0 900 520",
}: {
  title: string;
  children: React.ReactNode;
  viewBox?: string;
}) {
  const rawId = useId().replace(/:/g, "");
  const arrowId = `sa-arrow-${rawId}`;
  const glowId = `sa-glow-${rawId}`;
  const gridId = `sa-grid-${rawId}`;
  const ambientId = `sa-ambient-${rawId}`;

  return (
    <figure
      className="group my-7 overflow-hidden rounded-2xl border border-cyan-300/30 bg-[#030a14] p-3 shadow-[0_0_36px_rgba(34,211,238,0.10)] sm:p-4"
      style={{ "--sa-arrow": `url(#${arrowId})`, "--sa-glow": `url(#${glowId})` } as React.CSSProperties}
    >
      <svg viewBox={viewBox} role="img" aria-label={title} className="h-auto w-full">
        <defs>
          <marker id={arrowId} markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
            <path d="M0,0 L0,6 L9,3 z" fill={cyan} />
          </marker>
          <filter id={glowId} x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <pattern id={gridId} width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M32 0H0V32" fill="none" stroke="#1e3a5f" strokeWidth="1" opacity=".34" />
          </pattern>
          <radialGradient id={ambientId} cx="50%" cy="32%" r="72%">
            <stop offset="0%" stopColor="#0e7490" stopOpacity=".20" />
            <stop offset="58%" stopColor="#312e81" stopOpacity=".10" />
            <stop offset="100%" stopColor="#020617" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" rx="18" fill={`url(#${ambientId})`} />
        <rect width="100%" height="100%" rx="18" fill={`url(#${gridId})`} />
        <path d="M20 22 H210" stroke={cyan} strokeWidth="3" opacity=".9" filter={`url(#${glowId})`} />
        {children}
      </svg>
      <figcaption className="mt-2 text-center text-sm font-medium tracking-wide text-slate-300">{title}</figcaption>
    </figure>
  );
}

function Node({
  x, y, w, title, subtitle, accent = false, tone = "cyan",
}: {
  x: number; y: number; w: number; title: string; subtitle?: string; accent?: boolean; tone?: Tone;
}) {
  const colour = palette[tone];
  return (
    <g style={{ filter: accent ? "var(--sa-glow)" : undefined }}>
      <rect x={x} y={y} width={w} height="66" rx="13"
        fill={accent ? `${colour}24` : "#081426"} stroke={accent ? colour : `${colour}88`} strokeWidth={accent ? "2.5" : "1.4"} />
      <circle cx={x + 16} cy={y + 16} r={accent ? "5" : "3.5"} fill={colour} />
      <text x={x + w / 2} y={y + 27} textAnchor="middle" fill={slate} fontSize="15" fontWeight="600">{title}</text>
      {subtitle && <text x={x + w / 2} y={y + 49} textAnchor="middle" fill={muted} fontSize="12">{subtitle}</text>}
    </g>
  );
}

function Arrow({ x1, y1, x2, y2, tone = "cyan" }: { x1: number; y1: number; x2: number; y2: number; tone?: Tone }) {
  return <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={palette[tone]} strokeWidth="2.4" markerEnd="var(--sa-arrow)" opacity=".92" />;
}

function LinearFlow({
  title,
  steps,
}: {
  title: string;
  steps: Array<[string, string, Tone?]>;
}) {
  return (
    <Frame title={title} viewBox={`0 0 900 ${steps.length * 85 + 35}`}>
      {steps.map(([heading, sub, tone = "cyan"], i) => (
        <g key={heading}>
          <Node x={245} y={20 + i * 85} w={410} title={heading} subtitle={sub} accent={i === 0 || i === steps.length - 1} tone={tone} />
          {i < steps.length - 1 && <Arrow x1={450} y1={86 + i * 85} x2={450} y2={103 + i * 85} tone={tone} />}
        </g>
      ))}
    </Frame>
  );
}

function CationGroups() {
  const rows = [
    ["0 — NaOH + heat", "NH₄⁺ → NH₃", "amber"],
    ["I — dilute HCl", "Ag⁺, Pb²⁺, Hg₂²⁺ as chlorides", "cyan"],
    ["II — H₂S in acid", "Cu subgroup + As subgroup sulphides", "rose"],
    ["III — NH₄Cl/NH₄OH", "Fe³⁺, Al³⁺, Cr³⁺ hydroxides", "violet"],
    ["IV — H₂S in base", "Ni²⁺, Co²⁺, Mn²⁺, Zn²⁺ sulphides", "emerald"],
    ["V — (NH₄)₂CO₃", "Ba²⁺, Sr²⁺, Ca²⁺ carbonates", "amber"],
    ["VI — individual tests", "Mg²⁺, Na⁺, K⁺", "cyan"],
  ] as Array<[string, string, Tone]>;
  return <LinearFlow title="Classical cation group-separation staircase" steps={rows} />;
}

function GroupI() {
  return <LinearFlow title="Group I separation: heat, ammonia, then acid" steps={[
    ["AgCl + PbCl₂ + Hg₂Cl₂", "white mixed precipitate", "cyan"],
    ["Extract with hot water", "PbCl₂ enters hot filtrate", "amber"],
    ["Treat residue with NH₃", "AgCl dissolves; Hg₂Cl₂ becomes black", "violet"],
    ["Acidify silver filtrate", "white AgCl reappears", "emerald"],
  ]} />;
}

function GroupIII() {
  return <LinearFlow title="Group III separation by amphoterism and oxidation" steps={[
    ["Fe(OH)₃ + Al(OH)₃ + Cr(OH)₃", "brown + white + grey-green", "rose"],
    ["Add excess NaOH", "Fe(OH)₃ remains; Al and Cr dissolve", "violet"],
    ["Oxidise alkaline filtrate with H₂O₂", "Cr(III) → yellow chromate", "amber"],
    ["Controlled acidification", "Al(OH)₃ reprecipitates", "emerald"],
  ]} />;
}

function GroupV() {
  return <LinearFlow title="Ba-Sr-Ca sequential separation" steps={[
    ["Ba²⁺ + Sr²⁺ + Ca²⁺", "dissolved Group V carbonates", "cyan"],
    ["Chromate in acetic acid", "yellow BaCrO₄", "amber"],
    ["Filter; add sulphate", "white SrSO₄", "violet"],
    ["Filter; add oxalate", "white CaC₂O₄", "emerald"],
  ]} />;
}

function AnionGasFlow() {
  const items = [
    ["Odourless; limewater milky", "CO₃²⁻ / HCO₃⁻"],
    ["SO₂; oxidant discharged", "SO₃²⁻ / HSO₃⁻"],
    ["Rotten eggs; Pb paper black", "S²⁻"],
    ["SO₂ + sulphur turbidity", "S₂O₃²⁻"],
    ["Brown fumes; KI-starch blue", "NO₂⁻"],
  ];
  return (
    <Frame title="Dilute-acid gas test: observation-to-anion map">
      <Node x={330} y={20} w={240} title="Unknown + dilute acid" subtitle="observe gas and residue" accent />
      {items.map((item, i) => {
        const x = 20 + i * 176;
        const tones: Tone[] = ["cyan", "violet", "rose", "amber", "emerald"];
        return (
          <g key={item[0]}>
            <circle cx={x + 80} cy={185 - (i % 2) * 13} r={5 + (i % 3)} fill={palette[tones[i]]} opacity=".7" style={{ filter: "var(--sa-glow)" }} />
            <Arrow x1={450} y1={86} x2={x + 80} y2={215} tone={tones[i]} />
            <Node x={x} y={220} w={160} title={item[0]} subtitle={item[1]} tone={tones[i]} />
          </g>
        );
      })}
      <text x="450" y="405" textAnchor="middle" fill={muted} fontSize="14">Confirm with a second independent reaction.</text>
    </Frame>
  );
}

function SulfideGraph() {
  return (
    <Frame title="pH control of sulphide concentration and group precipitation">
      <defs>
        <linearGradient id="sa-ph-area" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor={palette.rose} stopOpacity=".12" />
          <stop offset="52%" stopColor={palette.cyan} stopOpacity=".20" />
          <stop offset="100%" stopColor={palette.emerald} stopOpacity=".34" />
        </linearGradient>
      </defs>
      <rect x="100" y="45" width="700" height="350" rx="16" fill="url(#sa-ph-area)" stroke="#2563eb" strokeOpacity=".55" />
      <line x1="140" y1="355" x2="760" y2="355" stroke={muted} strokeWidth="2" />
      <line x1="140" y1="355" x2="140" y2="90" stroke={muted} strokeWidth="2" />
      <path d="M145 342 C300 338 430 305 525 220 S670 90 750 65 L750 355 L145 355Z" fill="url(#sa-ph-area)" opacity=".7" />
      <path d="M145 342 C300 338 430 305 525 220 S670 90 750 65" fill="none" stroke={cyan} strokeWidth="5" style={{ filter: "var(--sa-glow)" }} />
      {[["245", "330", "rose"], ["610", "195", "emerald"]].map(([x, y, tone]) =>
        <g key={x}>
          <circle cx={x} cy={y} r="12" fill={palette[tone as Tone]} opacity=".18" />
          <circle cx={x} cy={y} r="5" fill={palette[tone as Tone]} style={{ filter: "var(--sa-glow)" }} />
        </g>
      )}
      <text x="450" y="440" textAnchor="middle" fill={slate} fontSize="16">Increasing pH →</text>
      <text x="55" y="260" transform="rotate(-90 55 260)" fill={slate} fontSize="16">Available [S²⁻] (log scale)</text>
      <text x="180" y="120" fill="#fda4af" fontSize="15" fontWeight="600">Acidic H₂S</text>
      <text x="180" y="148" fill={muted} fontSize="13">Group II only</text>
      <text x="575" y="120" fill="#6ee7b7" fontSize="15" fontWeight="600">Ammoniacal H₂S</text>
      <text x="575" y="148" fill={muted} fontSize="13">Group IV also precipitates</text>
      <text x="245" y="312" textAnchor="middle" fill={slate} fontSize="13">CuS/CdS threshold</text>
      <text x="610" y="177" textAnchor="middle" fill={slate} fontSize="13">ZnS/MnS threshold</text>
      <text x="290" y="485" fill={muted} fontSize="13">[S²⁻] ∝ Kₐ₁Kₐ₂[H₂S] / [H⁺]²</text>
    </Frame>
  );
}

function Flames() {
  const data = [
    ["Li⁺", "Carmine", "#fb7185"], ["Na⁺", "Golden", "#fbbf24"],
    ["K⁺", "Lilac", "#c4b5fd"], ["Ca²⁺", "Brick", "#f97316"],
    ["Sr²⁺", "Crimson", "#e11d48"], ["Ba²⁺", "Apple green", "#84cc16"],
    ["Cu²⁺", "Blue-green", "#2dd4bf"],
  ];
  return (
    <Frame title="Flame-test colour strip and cobalt-glass clue" viewBox="0 0 900 360">
      {data.map((d, i) => {
        const x = 55 + i * 118;
        return (
          <g key={d[0]}>
            <ellipse cx={x + 40} cy="244" rx="29" ry="8" fill={d[2]} opacity=".24" style={{ filter: "var(--sa-glow)" }} />
            <path d={`M${x + 40} 245 C${x} 205 ${x + 15} 145 ${x + 40} 80 C${x + 75} 155 ${x + 75} 215 ${x + 40} 245Z`} fill={d[2]} fillOpacity=".94" style={{ filter: "var(--sa-glow)" }} />
            <path d={`M${x + 40} 225 C${x + 24} 200 ${x + 31} 165 ${x + 40} 137 C${x + 53} 174 ${x + 54} 204 ${x + 40} 225Z`} fill="#f8fafc" fillOpacity=".72" />
            <text x={x + 40} y="282" textAnchor="middle" fill={slate} fontSize="15" fontWeight="600">{d[0]}</text>
            <text x={x + 40} y="307" textAnchor="middle" fill={muted} fontSize="12">{d[1]}</text>
          </g>
        );
      })}
      <text x="450" y="340" textAnchor="middle" fill="#c7d2fe" fontSize="13">Cobalt glass suppresses sodium yellow and reveals potassium.</text>
    </Frame>
  );
}

function TestMap() {
  return (
    <Frame title="Reliable identification uses independent chemical principles">
      <circle cx="450" cy="238" r="165" fill="none" stroke={palette.violet} strokeWidth="1.5" strokeDasharray="7 10" opacity=".38" />
      <Node x={20} y={205} w={160} title="Preliminary clue" subtitle="colour, heat, gas" tone="amber" />
      <Arrow x1={180} y1={238} x2={250} y2={238} />
      <Node x={260} y={70} w={180} title="Precipitation" subtitle="Ksp + ionic product" tone="cyan" />
      <Node x={260} y={205} w={180} title="Complexation" subtitle="NH₃, SCN⁻, ligands" tone="violet" />
      <Node x={260} y={340} w={180} title="Redox" subtitle="colour, gas, oxidation state" tone="rose" />
      <Arrow x1={440} y1={103} x2={555} y2={238} tone="cyan" />
      <Arrow x1={440} y1={238} x2={555} y2={238} tone="violet" />
      <Arrow x1={440} y1={373} x2={555} y2={238} tone="rose" />
      <Node x={560} y={200} w={200} title="Independent confirmation" subtitle="a second chemical principle" accent tone="emerald" />
      <Arrow x1={760} y1={233} x2={805} y2={233} />
      <Node x={810} y={200} w={80} title="Report" subtitle="ion" tone="amber" />
    </Frame>
  );
}

export function SaltAnalysisVisual({ id }: { id: string }) {
  switch (id as VisualId) {
    case "cation-groups": return <CationGroups />;
    case "anion-gas-flow": return <AnionGasFlow />;
    case "sulfide-ph-graph": return <SulfideGraph />;
    case "flame-colors": return <Flames />;
    case "group-i-separation": return <GroupI />;
    case "group-iii-separation": return <GroupIII />;
    case "group-v-separation": return <GroupV />;
    case "test-family-map": return <TestMap />;
    default: return null;
  }
}
