import { useId, type ReactNode } from "react";

function VisualFrame({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mx-auto my-6 max-w-[600px] overflow-hidden rounded-lg border border-cyan-300/15 bg-[#07111d] shadow-xl shadow-black/25">
      <div className="border-b border-white/[.07] bg-[linear-gradient(100deg,rgba(34,211,238,.12),rgba(139,92,246,.10),rgba(251,191,36,.08))] px-4 py-3 sm:px-5">
        <p className="text-[10px] font-black uppercase tracking-[.2em] text-cyan-300">{eyebrow}</p>
        <h2 className="mt-1 text-base font-black text-white sm:text-lg">{title}</h2>
      </div>
      <div className="overflow-x-auto p-3 sm:p-4">{children}</div>
    </section>
  );
}

function PositionVisual() {
  const g1 = ["Li", "Na", "K", "Rb", "Cs", "Fr"];
  const g2 = ["Be", "Mg", "Ca", "Sr", "Ba", "Ra"];
  return (
    <VisualFrame eyebrow="Periodic architecture" title="Two columns, two valence patterns">
      <svg viewBox="0 0 920 430" className="mx-auto block h-auto w-full max-w-[540px]" role="img" aria-label="S-block Groups 1 and 2 in a dark periodic table visual">
        <defs>
          <linearGradient id="posBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#071827" />
            <stop offset="100%" stopColor="#120b24" />
          </linearGradient>
          <linearGradient id="g1Fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity=".55" />
            <stop offset="100%" stopColor="#0891b2" stopOpacity=".18" />
          </linearGradient>
          <linearGradient id="g2Fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#a78bfa" stopOpacity=".55" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity=".18" />
          </linearGradient>
        </defs>
        <rect x="8" y="8" width="904" height="414" rx="28" fill="url(#posBg)" stroke="#20354a" />
        <text x="72" y="54" fill="#67e8f9" fontSize="18" fontWeight="800">GROUP 1 · ns¹ · M⁺</text>
        <text x="242" y="54" fill="#c4b5fd" fontSize="18" fontWeight="800">GROUP 2 · ns² · M²⁺</text>
        {g1.map((symbol, index) => {
          const y = 74 + index * 53;
          return (
            <g key={symbol}>
              <rect x="70" y={y} width="120" height="42" rx="10" fill="url(#g1Fill)" stroke="#22d3ee" strokeOpacity=".6" />
              <text x="130" y={y + 28} textAnchor="middle" fill="#ecfeff" fontSize="20" fontWeight="900">{symbol}</text>
            </g>
          );
        })}
        {g2.map((symbol, index) => {
          const y = 74 + index * 53;
          return (
            <g key={symbol}>
              <rect x="240" y={y} width="120" height="42" rx="10" fill="url(#g2Fill)" stroke="#a78bfa" strokeOpacity=".6" />
              <text x="300" y={y + 28} textAnchor="middle" fill="#f5f3ff" fontSize="20" fontWeight="900">{symbol}</text>
            </g>
          );
        })}
        <path d="M404 106 H858 M404 159 H858 M404 212 H858 M404 265 H858 M404 318 H858 M404 371 H858" stroke="#334155" strokeWidth="1.5" />
        <path d="M404 78 V392 M466 78 V392 M528 78 V392 M590 78 V392 M652 78 V392 M714 78 V392 M776 78 V392 M838 78 V392" stroke="#26384b" strokeWidth="1.5" />
        <text x="630" y="160" textAnchor="middle" fill="#94a3b8" fontSize="24" fontWeight="700">d-block</text>
        <text x="760" y="318" textAnchor="middle" fill="#64748b" fontSize="20">p-block continues →</text>
        <path d="M130 402 C245 370 316 370 428 402" fill="none" stroke="#fbbf24" strokeWidth="3" strokeDasharray="8 7" />
        <text x="279" y="414" textAnchor="middle" fill="#fde68a" fontSize="14" fontWeight="800">Li–Mg diagonal link</text>
      </svg>
    </VisualFrame>
  );
}

function TrendVisual() {
  const rows = [
    ["Atomic radius", "↑", "new shell"],
    ["Ionisation enthalpy", "↓", "shielding + distance"],
    ["Hydration magnitude", "↓", "charge density falls"],
    ["Electropositive character", "↑", "electron loss easier"],
    ["Oxide basicity", "↑", "M–O bond more ionic"],
  ];
  return (
    <VisualFrame eyebrow="Trend engine" title="What changes on descending an s-block group">
      <div className="grid gap-3 lg:grid-cols-[1fr_.85fr]">
        <svg viewBox="0 0 620 430" className="mx-auto block h-auto w-full max-w-[540px] rounded-lg bg-[#050b13]" role="img" aria-label="Trend ladder down an s-block group">
          <defs>
            <linearGradient id="trendArrow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
          <line x1="86" y1="76" x2="86" y2="362" stroke="url(#trendArrow)" strokeWidth="12" strokeLinecap="round" />
          <path d="M64 334 L86 370 L108 334" fill="#8b5cf6" />
          {["n = 2", "n = 3", "n = 4", "n = 5", "n = 6"].map((label, index) => (
            <g key={label}>
              <circle cx="86" cy={82 + index * 65} r={16 + index * 3} fill="#0f2537" stroke={index < 2 ? "#22d3ee" : "#a78bfa"} strokeWidth="3" />
              <text x="134" y={88 + index * 65} fill="#cbd5e1" fontSize="18" fontWeight="800">{label}</text>
            </g>
          ))}
          <text x="282" y="70" fill="#e2e8f0" fontSize="21" fontWeight="900">More shells</text>
          <text x="282" y="108" fill="#94a3b8" fontSize="17">larger atom and ion</text>
          <text x="282" y="178" fill="#e2e8f0" fontSize="21" fontWeight="900">Weaker attraction</text>
          <text x="282" y="216" fill="#94a3b8" fontSize="17">lower first IE</text>
          <text x="282" y="286" fill="#e2e8f0" fontSize="21" fontWeight="900">Lower charge density</text>
          <text x="282" y="324" fill="#94a3b8" fontSize="17">weaker hydration/polarisation</text>
        </svg>
        <div className="overflow-hidden rounded-lg border border-white/10 bg-[#08101b]">
          {rows.map(([property, direction, reason], index) => (
            <div key={property} className={`grid grid-cols-[1fr_44px] gap-3 px-4 py-3 ${index ? "border-t border-white/[.07]" : ""}`}>
              <div>
                <p className="font-extrabold text-slate-100">{property}</p>
                <p className="mt-1 text-xs leading-5 text-slate-400">{reason}</p>
              </div>
              <span className={`flex h-10 w-10 items-center justify-center rounded-xl text-2xl font-black ${direction === "↑" ? "bg-cyan-400/10 text-cyan-300" : "bg-violet-400/10 text-violet-300"}`}>{direction}</span>
            </div>
          ))}
        </div>
      </div>
    </VisualFrame>
  );
}

function EnergyCycleVisual() {
  return (
    <VisualFrame eyebrow="Thermochemical logic" title="Why lithium wins in aqueous reducing power">
      <svg viewBox="0 0 920 420" className="mx-auto block h-auto w-full max-w-[540px]" role="img" aria-label="Atomisation ionisation hydration cycle for lithium">
        <defs>
          <marker id="energyArrow" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
            <path d="M0 0 L0 6 L8 3 Z" fill="#67e8f9" />
          </marker>
          <linearGradient id="energyBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#071522" />
            <stop offset="100%" stopColor="#11102a" />
          </linearGradient>
        </defs>
        <rect x="8" y="8" width="904" height="404" rx="28" fill="url(#energyBg)" stroke="#24364a" />
        {[
          [58, 162, 178, 86, "Li(s)", "metal"],
          [270, 108, 178, 86, "Li(g)", "atom"],
          [482, 54, 178, 86, "Li⁺(g) + e⁻", "ionisation"],
          [694, 250, 178, 86, "Li⁺(aq) + e⁻", "hydrated ion"],
        ].map(([x, y, w, h, title, sub]) => (
          <g key={String(title)}>
            <rect x={Number(x)} y={Number(y)} width={Number(w)} height={Number(h)} rx="18" fill="#0f2234" stroke={title === "Li⁺(aq) + e⁻" ? "#fbbf24" : "#38bdf8"} strokeWidth="2.5" />
            <text x={Number(x) + Number(w) / 2} y={Number(y) + 38} textAnchor="middle" fill="#f8fafc" fontSize="23" fontWeight="900">{title}</text>
            <text x={Number(x) + Number(w) / 2} y={Number(y) + 65} textAnchor="middle" fill="#94a3b8" fontSize="15">{sub}</text>
          </g>
        ))}
        <path d="M236 166 L270 146" stroke="#67e8f9" strokeWidth="4" markerEnd="url(#energyArrow)" />
        <text x="250" y="126" fill="#cbd5e1" fontSize="15" textAnchor="middle">atomisation</text>
        <path d="M448 106 L482 94" stroke="#67e8f9" strokeWidth="4" markerEnd="url(#energyArrow)" />
        <text x="466" y="70" fill="#cbd5e1" fontSize="15" textAnchor="middle">IE₁</text>
        <path d="M660 124 C716 140 736 192 748 246" fill="none" stroke="#fbbf24" strokeWidth="6" markerEnd="url(#energyArrow)" />
        <text x="760" y="170" fill="#fde68a" fontSize="18" fontWeight="900">very large</text>
        <text x="760" y="194" fill="#fde68a" fontSize="18" fontWeight="900">hydration gain</text>
        <text x="86" y="334" fill="#94a3b8" fontSize="17">Gas-phase electron loss alone favours the heavier metals.</text>
        <text x="86" y="370" fill="#e2e8f0" fontSize="19" fontWeight="800">Aqueous E° includes hydration — tiny Li⁺ changes the winner.</text>
      </svg>
    </VisualFrame>
  );
}

function FlameVisual() {
  const bars = [
    { x: 100, label: "Cs", nm: "455.5", fill: "#60a5fa" },
    { x: 245, label: "Na", nm: "589.2", fill: "#fde047" },
    { x: 390, label: "Li", nm: "670.8", fill: "#fb7185" },
    { x: 535, label: "K", nm: "766.5", fill: "#c084fc" },
    { x: 680, label: "Rb", nm: "780.0", fill: "#f472b6" },
  ];
  return (
    <VisualFrame eyebrow="Emission fingerprint" title="Flame lines are energy gaps made visible">
      <svg viewBox="0 0 900 390" className="mx-auto block h-auto w-full max-w-[540px]" role="img" aria-label="Emission wavelengths for alkali metals">
        <rect x="8" y="8" width="884" height="374" rx="26" fill="#03070d" stroke="#233247" />
        <line x1="74" y1="290" x2="832" y2="290" stroke="#64748b" strokeWidth="3" />
        <text x="76" y="330" fill="#94a3b8" fontSize="16">shorter wavelength · higher photon energy</text>
        <text x="612" y="330" fill="#94a3b8" fontSize="16">longer wavelength</text>
        {bars.map((bar, index) => (
          <g key={bar.label}>
            <rect x={bar.x} y={80 + (index % 2) * 24} width="14" height={210 - (index % 2) * 24} rx="7" fill={bar.fill} />
            <circle cx={bar.x + 7} cy={78 + (index % 2) * 24} r="18" fill={bar.fill} fillOpacity=".18" />
            <text x={bar.x + 7} y="52" textAnchor="middle" fill="#f8fafc" fontSize="22" fontWeight="900">{bar.label}</text>
            <text x={bar.x + 7} y="360" textAnchor="middle" fill={bar.fill} fontSize="17" fontWeight="800">{bar.nm} nm</text>
          </g>
        ))}
        <rect x="210" y="178" width="102" height="62" rx="14" fill="#1e3a8a" fillOpacity=".36" stroke="#60a5fa" />
        <text x="261" y="203" textAnchor="middle" fill="#bfdbfe" fontSize="14" fontWeight="800">cobalt glass</text>
        <text x="261" y="224" textAnchor="middle" fill="#93c5fd" fontSize="13">suppresses Na</text>
      </svg>
    </VisualFrame>
  );
}

function ChargeDensityVisual() {
  const items = [
    { x: 80, r: 30, label: "Be²⁺", charge: "2+", tone: "#f472b6" },
    { x: 240, r: 38, label: "Li⁺", charge: "+", tone: "#a78bfa" },
    { x: 420, r: 48, label: "Mg²⁺", charge: "2+", tone: "#22d3ee" },
    { x: 630, r: 66, label: "Ba²⁺", charge: "2+", tone: "#34d399" },
  ];
  return (
    <VisualFrame eyebrow="First-member anomalies" title="Charge packed into a small radius changes everything">
      <svg viewBox="0 0 900 390" className="mx-auto block h-auto w-full max-w-[540px]" role="img" aria-label="Charge density comparison of s-block ions">
        <rect x="8" y="8" width="884" height="374" rx="26" fill="#07101a" stroke="#24374b" />
        {items.map((item) => (
          <g key={item.label}>
            <circle cx={item.x + 70} cy="170" r={item.r} fill={item.tone} fillOpacity=".16" stroke={item.tone} strokeWidth="4" />
            <text x={item.x + 70} y="178" textAnchor="middle" fill="#f8fafc" fontSize={item.r < 36 ? 15 : 18} fontWeight="900">{item.charge}</text>
            <text x={item.x + 70} y="270" textAnchor="middle" fill={item.tone} fontSize="22" fontWeight="900">{item.label}</text>
          </g>
        ))}
        <text x="94" y="60" fill="#f8fafc" fontSize="20" fontWeight="900">High charge density</text>
        <text x="94" y="88" fill="#94a3b8" fontSize="16">hydration · polarisation · covalency · hydrolysis</text>
        <path d="M172 316 H748" stroke="#64748b" strokeWidth="3" />
        <path d="M730 302 L758 316 L730 330" fill="none" stroke="#64748b" strokeWidth="3" />
        <text x="460" y="352" textAnchor="middle" fill="#94a3b8" fontSize="17">charge density generally falls as ionic radius grows →</text>
      </svg>
    </VisualFrame>
  );
}

function OxygenSpeciesVisual() {
  const species = [
    { x: 55, title: "Oxide", formula: "O²⁻", os: "−2", magnetic: "diamagnetic", tone: "#22d3ee" },
    { x: 315, title: "Peroxide", formula: "O₂²⁻", os: "−1", magnetic: "diamagnetic", tone: "#a78bfa" },
    { x: 575, title: "Superoxide", formula: "O₂⁻", os: "−½", magnetic: "paramagnetic", tone: "#fbbf24" },
  ];
  return (
    <VisualFrame eyebrow="Oxygen-species decoder" title="Li → oxide, Na → peroxide, K/Rb/Cs → superoxide">
      <svg viewBox="0 0 900 430" className="mx-auto block h-auto w-full max-w-[540px]" role="img" aria-label="Oxide peroxide and superoxide comparison">
        <rect x="8" y="8" width="884" height="414" rx="26" fill="#06101a" stroke="#24364a" />
        {species.map((item) => (
          <g key={item.title}>
            <rect x={item.x} y="62" width="225" height="272" rx="24" fill={item.tone} fillOpacity=".08" stroke={item.tone} strokeOpacity=".55" />
            <text x={item.x + 112} y="104" textAnchor="middle" fill={item.tone} fontSize="20" fontWeight="900">{item.title}</text>
            <text x={item.x + 112} y="166" textAnchor="middle" fill="#f8fafc" fontSize="38" fontWeight="900">{item.formula}</text>
            <text x={item.x + 112} y="216" textAnchor="middle" fill="#cbd5e1" fontSize="17">O oxidation state {item.os}</text>
            <text x={item.x + 112} y="258" textAnchor="middle" fill="#cbd5e1" fontSize="17">{item.magnetic}</text>
            {item.title !== "Oxide" ? (
              <g>
                <circle cx={item.x + 83} cy="300" r="16" fill="none" stroke={item.tone} strokeWidth="3" />
                <circle cx={item.x + 141} cy="300" r="16" fill="none" stroke={item.tone} strokeWidth="3" />
                <line x1={item.x + 99} y1="300" x2={item.x + 125} y2="300" stroke={item.tone} strokeWidth={item.title === "Peroxide" ? 3 : 5} />
              </g>
            ) : null}
          </g>
        ))}
        <text x="450" y="382" textAnchor="middle" fill="#94a3b8" fontSize="17">larger, more diffuse oxygen anion needs a larger cation for lattice stabilisation</text>
      </svg>
    </VisualFrame>
  );
}

function ReactionAtlasVisual() {
  const nodes = [
    ["O₂", 450, 44, "#22d3ee"],
    ["H₂O", 738, 130, "#60a5fa"],
    ["H₂", 760, 300, "#a78bfa"],
    ["N₂", 450, 352, "#f472b6"],
    ["X₂", 142, 300, "#34d399"],
    ["acid", 118, 130, "#fbbf24"],
  ] as const;
  return (
    <VisualFrame eyebrow="Reaction atlas" title="One metal centre, six high-frequency reaction paths">
      <svg viewBox="0 0 900 430" className="mx-auto block h-auto w-full max-w-[540px]" role="img" aria-label="Reaction atlas for s-block metals">
        <rect x="8" y="8" width="884" height="414" rx="26" fill="#06101a" stroke="#24364a" />
        <circle cx="450" cy="210" r="82" fill="#0e7490" fillOpacity=".24" stroke="#22d3ee" strokeWidth="4" />
        <text x="450" y="202" textAnchor="middle" fill="#f8fafc" fontSize="31" fontWeight="900">s-block</text>
        <text x="450" y="237" textAnchor="middle" fill="#a5f3fc" fontSize="19">metal M</text>
        {nodes.map(([label, x, y, tone]) => (
          <g key={label}>
            <line x1="450" y1="210" x2={x} y2={y} stroke={tone} strokeWidth="3" strokeDasharray="8 7" />
            <circle cx={x} cy={y} r="50" fill={tone} fillOpacity=".12" stroke={tone} strokeWidth="3" />
            <text x={x} y={y + 8} textAnchor="middle" fill="#f8fafc" fontSize="22" fontWeight="900">{label}</text>
          </g>
        ))}
        <text x="450" y="408" textAnchor="middle" fill="#94a3b8" fontSize="16">always attach conditions: cold water, steam, excess oxygen, heat, dilute acid</text>
      </svg>
    </VisualFrame>
  );
}

function SolvatedElectronVisual() {
  const gradientId = useId();
  const ammonia = [
    [250, 100], [315, 82], [380, 112], [220, 170], [410, 176], [250, 246], [330, 270], [410, 246],
  ] as const;
  return (
    <VisualFrame eyebrow="Liquid ammonia" title="The blue colour belongs to a solvated electron">
      <svg viewBox="0 0 900 420" className="mx-auto block h-auto w-full max-w-[540px]" role="img" aria-label="Solvated electron cavity in liquid ammonia">
        <defs>
          <radialGradient id={gradientId}>
            <stop offset="0%" stopColor="#dbeafe" />
            <stop offset="22%" stopColor="#60a5fa" stopOpacity=".95" />
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect x="8" y="8" width="884" height="404" rx="26" fill="#050b16" stroke="#24364a" />
        <circle cx="325" cy="180" r="112" fill={`url(#${gradientId})`} />
        <circle cx="325" cy="180" r="24" fill="#e0f2fe" />
        <text x="325" y="188" textAnchor="middle" fill="#1e3a8a" fontSize="26" fontWeight="900">e⁻</text>
        {ammonia.map(([x, y]) => (
          <g key={`${x}-${y}`}>
            <circle cx={x} cy={y} r="24" fill="#172554" stroke="#818cf8" strokeWidth="2.5" />
            <text x={x} y={y + 6} textAnchor="middle" fill="#e0e7ff" fontSize="15" fontWeight="800">NH₃</text>
            <line x1={x} y1={y} x2="325" y2="180" stroke="#60a5fa" strokeOpacity=".35" strokeWidth="2" />
          </g>
        ))}
        <text x="570" y="86" fill="#93c5fd" fontSize="25" fontWeight="900">dilute solution</text>
        <text x="570" y="124" fill="#cbd5e1" fontSize="18">deep blue</text>
        <text x="570" y="158" fill="#cbd5e1" fontSize="18">paramagnetic</text>
        <text x="570" y="192" fill="#cbd5e1" fontSize="18">strongly reducing</text>
        <text x="570" y="258" fill="#fbbf24" fontSize="25" fontWeight="900">concentrated</text>
        <text x="570" y="296" fill="#cbd5e1" fontSize="18">bronze · metal-like</text>
        <text x="570" y="330" fill="#cbd5e1" fontSize="18">higher conductivity</text>
      </svg>
    </VisualFrame>
  );
}

function BeCl2Visual() {
  return (
    <VisualFrame eyebrow="Phase-dependent structure" title="BeCl₂ is not “always linear”">
      <svg viewBox="0 0 920 420" className="mx-auto block h-auto w-full max-w-[540px]" role="img" aria-label="Solid polymer dimer and monomer structures of beryllium chloride">
        <rect x="8" y="8" width="904" height="404" rx="26" fill="#06101a" stroke="#24364a" />
        <text x="160" y="54" textAnchor="middle" fill="#22d3ee" fontSize="20" fontWeight="900">SOLID · POLYMER</text>
        {[0, 1, 2].map((index) => {
          const x = 78 + index * 92;
          return (
            <g key={index}>
              <circle cx={x} cy="160" r="23" fill="#0e7490" stroke="#67e8f9" strokeWidth="2" />
              <text x={x} y="167" textAnchor="middle" fill="#ecfeff" fontSize="16" fontWeight="900">Be</text>
              <circle cx={x + 46} cy="112" r="19" fill="#365314" stroke="#a3e635" />
              <circle cx={x + 46} cy="208" r="19" fill="#365314" stroke="#a3e635" />
              <text x={x + 46} y="118" textAnchor="middle" fill="#ecfccb" fontSize="13" fontWeight="900">Cl</text>
              <text x={x + 46} y="214" textAnchor="middle" fill="#ecfccb" fontSize="13" fontWeight="900">Cl</text>
              <line x1={x + 22} y1="150" x2={x + 30} y2="126" stroke="#a3e635" strokeWidth="3" />
              <line x1={x + 22} y1="170" x2={x + 30} y2="194" stroke="#a3e635" strokeWidth="3" />
              {index < 2 ? (
                <>
                  <line x1={x + 62} y1="112" x2={x + 72} y2="148" stroke="#a3e635" strokeWidth="3" />
                  <line x1={x + 62} y1="208" x2={x + 72} y2="172" stroke="#a3e635" strokeWidth="3" />
                </>
              ) : null}
            </g>
          );
        })}
        <text x="505" y="54" textAnchor="middle" fill="#a78bfa" fontSize="20" fontWeight="900">VAPOUR · DIMER</text>
        <circle cx="452" cy="160" r="23" fill="#4c1d95" stroke="#c4b5fd" strokeWidth="2" />
        <circle cx="558" cy="160" r="23" fill="#4c1d95" stroke="#c4b5fd" strokeWidth="2" />
        <text x="452" y="167" textAnchor="middle" fill="#f5f3ff" fontSize="16" fontWeight="900">Be</text>
        <text x="558" y="167" textAnchor="middle" fill="#f5f3ff" fontSize="16" fontWeight="900">Be</text>
        {[112, 208].map((y) => (
          <g key={y}>
            <circle cx="505" cy={y} r="19" fill="#365314" stroke="#a3e635" />
            <text x="505" y={y + 6} textAnchor="middle" fill="#ecfccb" fontSize="13" fontWeight="900">Cl</text>
            <line x1="470" y1="150" x2="490" y2={y < 160 ? 125 : 195} stroke="#a3e635" strokeWidth="3" />
            <line x1="540" y1="150" x2="520" y2={y < 160 ? 125 : 195} stroke="#a3e635" strokeWidth="3" />
          </g>
        ))}
        <text x="758" y="54" textAnchor="middle" fill="#fbbf24" fontSize="20" fontWeight="900">HOT VAPOUR · MONOMER</text>
        <circle cx="758" cy="160" r="24" fill="#78350f" stroke="#fbbf24" strokeWidth="2" />
        <text x="758" y="167" textAnchor="middle" fill="#fffbeb" fontSize="16" fontWeight="900">Be</text>
        <circle cx="672" cy="160" r="20" fill="#365314" stroke="#a3e635" />
        <circle cx="844" cy="160" r="20" fill="#365314" stroke="#a3e635" />
        <text x="672" y="166" textAnchor="middle" fill="#ecfccb" fontSize="13" fontWeight="900">Cl</text>
        <text x="844" y="166" textAnchor="middle" fill="#ecfccb" fontSize="13" fontWeight="900">Cl</text>
        <line x1="692" y1="160" x2="734" y2="160" stroke="#fbbf24" strokeWidth="4" />
        <line x1="782" y1="160" x2="824" y2="160" stroke="#fbbf24" strokeWidth="4" />
        <text x="460" y="340" textAnchor="middle" fill="#94a3b8" fontSize="17">solid chain → associated dimer → linear monomer as temperature rises</text>
      </svg>
    </VisualFrame>
  );
}

function SolubilityVisual() {
  return (
    <VisualFrame eyebrow="Opposing solubility trends" title="Hydroxides rise; sulphates fall">
      <svg viewBox="0 0 900 420" className="mx-auto block h-auto w-full max-w-[540px]" role="img" aria-label="Opposite solubility trends of Group 2 hydroxides and sulphates">
        <rect x="8" y="8" width="884" height="404" rx="26" fill="#06101a" stroke="#24364a" />
        <line x1="92" y1="330" x2="824" y2="330" stroke="#64748b" strokeWidth="3" />
        <line x1="92" y1="330" x2="92" y2="70" stroke="#64748b" strokeWidth="3" />
        {["Mg", "Ca", "Sr", "Ba"].map((label, index) => {
          const x = 160 + index * 190;
          return (
            <g key={label}>
              <line x1={x} y1="330" x2={x} y2="340" stroke="#94a3b8" strokeWidth="2" />
              <text x={x} y="370" textAnchor="middle" fill="#cbd5e1" fontSize="18" fontWeight="800">{label}</text>
            </g>
          );
        })}
        <path d="M160 290 C330 250 520 168 730 95" fill="none" stroke="#22d3ee" strokeWidth="7" />
        <path d="M160 105 C330 140 520 228 730 292" fill="none" stroke="#f472b6" strokeWidth="7" />
        <text x="610" y="112" fill="#67e8f9" fontSize="20" fontWeight="900">M(OH)₂ solubility ↑</text>
        <text x="590" y="276" fill="#f9a8d4" fontSize="20" fontWeight="900">MSO₄ solubility ↓</text>
        <text x="102" y="54" fill="#94a3b8" fontSize="16">relative solubility</text>
      </svg>
    </VisualFrame>
  );
}

function ProcessVisual() {
  const boxes = [
    [58, 122, 170, 74, "Brine", "NaCl(aq)", "#22d3ee"],
    [282, 62, 190, 74, "Chlor–alkali", "NaOH + Cl₂ + H₂", "#a78bfa"],
    [282, 182, 190, 74, "Solvay tower", "NaHCO₃↓", "#fbbf24"],
    [526, 182, 170, 74, "Calcination", "Na₂CO₃", "#34d399"],
    [526, 62, 170, 74, "Down's cell", "Na + Cl₂", "#f472b6"],
    [744, 122, 120, 74, "Uses", "glass · soap", "#60a5fa"],
  ] as const;
  return (
    <VisualFrame eyebrow="Sodium industry" title="One feedstock, three industrial pathways">
      <svg viewBox="0 0 920 380" className="mx-auto block h-auto w-full max-w-[540px]" role="img" aria-label="Industrial pathways from sodium chloride">
        <defs>
          <marker id="processArrow" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
            <path d="M0 0 L0 6 L8 3 Z" fill="#94a3b8" />
          </marker>
        </defs>
        <rect x="8" y="8" width="904" height="364" rx="26" fill="#06101a" stroke="#24364a" />
        {boxes.map(([x, y, w, h, title, sub, tone]) => (
          <g key={String(title)}>
            <rect x={x} y={y} width={w} height={h} rx="18" fill={tone} fillOpacity=".1" stroke={tone} strokeOpacity=".7" />
            <text x={x + w / 2} y={y + 30} textAnchor="middle" fill="#f8fafc" fontSize="18" fontWeight="900">{title}</text>
            <text x={x + w / 2} y={y + 55} textAnchor="middle" fill="#cbd5e1" fontSize="14">{sub}</text>
          </g>
        ))}
        <path d="M228 146 C250 118 262 100 282 98" fill="none" stroke="#94a3b8" strokeWidth="3" markerEnd="url(#processArrow)" />
        <path d="M228 170 C250 194 262 214 282 218" fill="none" stroke="#94a3b8" strokeWidth="3" markerEnd="url(#processArrow)" />
        <path d="M472 218 H526" stroke="#94a3b8" strokeWidth="3" markerEnd="url(#processArrow)" />
        <path d="M228 146 C360 20 474 30 526 86" fill="none" stroke="#94a3b8" strokeWidth="3" markerEnd="url(#processArrow)" />
        <path d="M696 218 C724 202 728 178 744 164" fill="none" stroke="#94a3b8" strokeWidth="3" markerEnd="url(#processArrow)" />
        <text x="460" y="326" textAnchor="middle" fill="#94a3b8" fontSize="16">aqueous brine ≠ molten salt · separation principle decides the product</text>
      </svg>
    </VisualFrame>
  );
}

function LimeCycleVisual() {
  return (
    <VisualFrame eyebrow="Calcium reaction loop" title="Limestone → quicklime → slaked lime → limestone">
      <svg viewBox="0 0 900 420" className="mx-auto block h-auto w-full max-w-[540px]" role="img" aria-label="Calcium carbonate lime cycle">
        <defs>
          <marker id="limeArrow" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
            <path d="M0 0 L0 6 L8 3 Z" fill="#67e8f9" />
          </marker>
        </defs>
        <rect x="8" y="8" width="884" height="404" rx="26" fill="#06101a" stroke="#24364a" />
        {[
          [450, 82, "CaCO₃", "limestone", "#fbbf24"],
          [690, 245, "CaO", "quicklime", "#f472b6"],
          [210, 245, "Ca(OH)₂", "slaked lime", "#22d3ee"],
        ].map(([x, y, formula, name, tone]) => (
          <g key={String(formula)}>
            <circle cx={Number(x)} cy={Number(y)} r="78" fill={String(tone)} fillOpacity=".1" stroke={String(tone)} strokeWidth="4" />
            <text x={Number(x)} y={Number(y) - 4} textAnchor="middle" fill="#f8fafc" fontSize="27" fontWeight="900">{formula}</text>
            <text x={Number(x)} y={Number(y) + 30} textAnchor="middle" fill="#cbd5e1" fontSize="16">{name}</text>
          </g>
        ))}
        <path d="M514 128 C592 160 638 192 659 215" fill="none" stroke="#67e8f9" strokeWidth="4" markerEnd="url(#limeArrow)" />
        <text x="616" y="150" fill="#cbd5e1" fontSize="16">Δ, −CO₂</text>
        <path d="M612 270 C500 334 390 334 286 270" fill="none" stroke="#67e8f9" strokeWidth="4" markerEnd="url(#limeArrow)" />
        <text x="450" y="350" textAnchor="middle" fill="#cbd5e1" fontSize="16">+ H₂O · slaking · exothermic</text>
        <path d="M240 178 C270 126 336 98 370 91" fill="none" stroke="#67e8f9" strokeWidth="4" markerEnd="url(#limeArrow)" />
        <text x="282" y="120" fill="#cbd5e1" fontSize="16">+ CO₂</text>
      </svg>
    </VisualFrame>
  );
}

function PlasterVisual() {
  return (
    <VisualFrame eyebrow="Controlled hydration" title="Plaster works because dehydration is deliberately incomplete">
      <svg viewBox="0 0 920 400" className="mx-auto block h-auto w-full max-w-[540px]" role="img" aria-label="Gypsum plaster of Paris hydration cycle and cement gypsum role">
        <rect x="8" y="8" width="904" height="384" rx="26" fill="#06101a" stroke="#24364a" />
        <rect x="54" y="106" width="240" height="126" rx="24" fill="#22d3ee" fillOpacity=".08" stroke="#22d3ee" />
        <text x="174" y="148" textAnchor="middle" fill="#e0f2fe" fontSize="24" fontWeight="900">Gypsum</text>
        <text x="174" y="186" textAnchor="middle" fill="#cbd5e1" fontSize="20">CaSO₄·2H₂O</text>
        <rect x="340" y="106" width="240" height="126" rx="24" fill="#a78bfa" fillOpacity=".08" stroke="#a78bfa" />
        <text x="460" y="148" textAnchor="middle" fill="#f5f3ff" fontSize="24" fontWeight="900">Plaster of Paris</text>
        <text x="460" y="186" textAnchor="middle" fill="#cbd5e1" fontSize="20">CaSO₄·½H₂O</text>
        <rect x="626" y="106" width="240" height="126" rx="24" fill="#fbbf24" fillOpacity=".08" stroke="#fbbf24" />
        <text x="746" y="148" textAnchor="middle" fill="#fffbeb" fontSize="24" fontWeight="900">Dead burnt</text>
        <text x="746" y="186" textAnchor="middle" fill="#cbd5e1" fontSize="20">anhydrous CaSO₄</text>
        <path d="M294 142 H340" stroke="#94a3b8" strokeWidth="4" />
        <path d="M326 132 L340 142 L326 152" fill="none" stroke="#94a3b8" strokeWidth="4" />
        <text x="317" y="114" textAnchor="middle" fill="#67e8f9" fontSize="15">393 K</text>
        <path d="M580 142 H626" stroke="#94a3b8" strokeWidth="4" />
        <path d="M612 132 L626 142 L612 152" fill="none" stroke="#94a3b8" strokeWidth="4" />
        <text x="603" y="114" textAnchor="middle" fill="#fbbf24" fontSize="15">overheat</text>
        <path d="M415 232 C365 292 290 294 220 234" fill="none" stroke="#22d3ee" strokeWidth="4" />
        <path d="M230 244 L218 234 L235 232" fill="none" stroke="#22d3ee" strokeWidth="4" />
        <text x="316" y="292" textAnchor="middle" fill="#67e8f9" fontSize="16">+ water · sets as gypsum crystals</text>
        <text x="746" y="300" textAnchor="middle" fill="#fde68a" fontSize="16">poor setting ability</text>
        <text x="460" y="354" textAnchor="middle" fill="#94a3b8" fontSize="16">In cement, 2–3% gypsum slows aluminate hydration and prevents flash setting.</text>
      </svg>
    </VisualFrame>
  );
}

function HardnessVisual() {
  const methods = [
    ["Boiling", "temporary only", "#22d3ee"],
    ["Lime", "HCO₃⁻ precipitation", "#a78bfa"],
    ["Washing soda", "CO₃²⁻ precipitation", "#fbbf24"],
    ["Zeolite", "Ca/Mg ↔ Na exchange", "#34d399"],
    ["Ion exchange", "deionisation", "#f472b6"],
  ] as const;
  return (
    <VisualFrame eyebrow="Water treatment" title="Methods for removing hardness">
      <div className="grid gap-3 md:grid-cols-5">
        {methods.map(([title, sub, tone], index) => (
          <div key={title} className="relative overflow-hidden rounded-lg border border-white/10 bg-[#08111c] p-4">
            <span className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-black text-[#020617]" style={{ background: tone }}>{index + 1}</span>
            <h3 className="mt-4 font-black text-white">{title}</h3>
            <p className="mt-2 text-xs leading-5 text-slate-400">{sub}</p>
          </div>
        ))}
      </div>
    </VisualFrame>
  );
}

function BiologyVisual() {
  return (
    <VisualFrame eyebrow="Ionic geography of a cell" title="Na⁺ outside, K⁺ inside; Mg²⁺ and Ca²⁺ do specialised work">
      <svg viewBox="0 0 920 420" className="mx-auto block h-auto w-full max-w-[540px]" role="img" aria-label="Biological distribution of sodium potassium magnesium and calcium">
        <rect x="8" y="8" width="904" height="404" rx="26" fill="#06101a" stroke="#24364a" />
        <ellipse cx="460" cy="214" rx="250" ry="145" fill="#0f172a" stroke="#60a5fa" strokeWidth="5" />
        <ellipse cx="460" cy="214" rx="220" ry="118" fill="#0b1320" stroke="#1e3a8a" strokeWidth="2" strokeDasharray="8 7" />
        {([[110, 100], [120, 220], [155, 320], [790, 92], [808, 220], [760, 332]] as const).map(([x, y], i) => (
          <g key={`na${i}`}>
            <circle cx={x} cy={y} r="26" fill="#22d3ee" fillOpacity=".2" stroke="#22d3ee" />
            <text x={x} y={y + 6} textAnchor="middle" fill="#cffafe" fontSize="15" fontWeight="900">Na⁺</text>
          </g>
        ))}
        {([[340, 150], [430, 118], [540, 158], [380, 278], [520, 286], [600, 230]] as const).map(([x, y], i) => (
          <g key={`k${i}`}>
            <circle cx={x} cy={y} r="25" fill="#a78bfa" fillOpacity=".2" stroke="#a78bfa" />
            <text x={x} y={y + 6} textAnchor="middle" fill="#ede9fe" fontSize="15" fontWeight="900">K⁺</text>
          </g>
        ))}
        <circle cx="450" cy="210" r="36" fill="#34d399" fillOpacity=".15" stroke="#34d399" />
        <text x="450" y="216" textAnchor="middle" fill="#d1fae5" fontSize="15" fontWeight="900">Mg²⁺</text>
        <circle cx="640" cy="128" r="34" fill="#fbbf24" fillOpacity=".15" stroke="#fbbf24" />
        <text x="640" y="134" textAnchor="middle" fill="#fef3c7" fontSize="15" fontWeight="900">Ca²⁺</text>
        <text x="458" y="386" textAnchor="middle" fill="#94a3b8" fontSize="16">3 Na⁺ out · 2 K⁺ in per ATPase cycle</text>
      </svg>
    </VisualFrame>
  );
}

function TrapVisual() {
  const cards = [
    ["Cs", "easiest gas-phase electron loss"],
    ["Li", "strongest aqueous reducing agent"],
    ["OH⁻", "Group 2 solubility rises"],
    ["SO₄²⁻", "Group 2 solubility falls"],
    ["KO₂", "paramagnetic superoxide"],
    ["Na₂O₂", "diamagnetic peroxide"],
  ];
  return (
    <VisualFrame eyebrow="Final trap wall" title="Pairs JEE Advanced deliberately makes students confuse">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map(([top, bottom], index) => (
          <div key={top} className="rounded-lg border border-white/10 bg-[linear-gradient(135deg,rgba(34,211,238,.08),rgba(139,92,246,.07))] p-5">
            <p className={`text-2xl font-black ${index % 2 ? "text-violet-200" : "text-cyan-200"}`}>{top}</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">{bottom}</p>
          </div>
        ))}
      </div>
    </VisualFrame>
  );
}

// ── New visuals (added for the premium rebuild) ─────────────────────────────

function DiagonalMapVisual() {
  const cells = [
    { x: 90, y: 70, label: "Li", tone: "#22d3ee" },
    { x: 300, y: 70, label: "Be", tone: "#a78bfa" },
    { x: 90, y: 220, label: "Na", tone: "#64748b" },
    { x: 300, y: 220, label: "Mg", tone: "#22d3ee" },
    { x: 510, y: 220, label: "Al", tone: "#a78bfa" },
  ] as const;
  return (
    <VisualFrame eyebrow="Why “diagonal”" title="One step right, one step down: charge density converges">
      <svg viewBox="0 0 900 340" className="mx-auto block h-auto w-full max-w-[540px]" role="img" aria-label="Periodic-table diagonal relationship map for lithium magnesium beryllium and aluminium">
        <rect x="8" y="8" width="884" height="324" rx="26" fill="#06101a" stroke="#24364a" />
        <text x="450" y="46" textAnchor="middle" fill="#94a3b8" fontSize="16">Period 2 (top row) · Period 3 (bottom row)</text>
        {cells.map((c) => (
          <g key={c.label}>
            <rect x={c.x} y={c.y} width="120" height="70" rx="14" fill={c.tone} fillOpacity=".12" stroke={c.tone} strokeWidth="3" />
            <text x={c.x + 60} y={c.y + 44} textAnchor="middle" fill="#f8fafc" fontSize="28" fontWeight="900">{c.label}</text>
          </g>
        ))}
        <path d="M170 120 L300 220" fill="none" stroke="#fbbf24" strokeWidth="4" strokeDasharray="9 6" />
        <path d="M290 206 L300 220 L280 224" fill="none" stroke="#fbbf24" strokeWidth="4" />
        <path d="M380 120 L510 220" fill="none" stroke="#fbbf24" strokeWidth="4" strokeDasharray="9 6" />
        <path d="M500 206 L510 220 L490 224" fill="none" stroke="#fbbf24" strokeWidth="4" />
        <text x="196" y="184" fill="#fde68a" fontSize="15" fontWeight="800">Li–Mg</text>
        <text x="406" y="184" fill="#fde68a" fontSize="15" fontWeight="800">Be–Al</text>
        <text x="450" y="300" textAnchor="middle" fill="#cbd5e1" fontSize="16">+1 nuclear charge (right) is offset by +1 shell (down) → similar charge/radius</text>
      </svg>
    </VisualFrame>
  );
}

function CarbideVisual() {
  return (
    <VisualFrame eyebrow="Hydrolysis identifies the carbide" title="Methanide gives methane; acetylide gives ethyne">
      <svg viewBox="0 0 900 360" className="mx-auto block h-auto w-full max-w-[540px]" role="img" aria-label="Comparison of methanide and acetylide carbide hydrolysis">
        <rect x="8" y="8" width="884" height="344" rx="26" fill="#06101a" stroke="#24364a" />
        <rect x="50" y="60" width="360" height="240" rx="22" fill="#22d3ee" fillOpacity=".07" stroke="#22d3ee" strokeOpacity=".6" />
        <text x="230" y="100" textAnchor="middle" fill="#67e8f9" fontSize="19" fontWeight="900">METHANIDE</text>
        <text x="230" y="148" textAnchor="middle" fill="#f8fafc" fontSize="30" fontWeight="900">Be₂C</text>
        <text x="230" y="184" textAnchor="middle" fill="#cbd5e1" fontSize="16">formal C⁴⁻, isolated carbon</text>
        <text x="230" y="230" textAnchor="middle" fill="#a5f3fc" fontSize="18">+ 4H₂O →</text>
        <text x="230" y="266" textAnchor="middle" fill="#f8fafc" fontSize="22" fontWeight="900">2Be(OH)₂ + CH₄</text>
        <rect x="490" y="60" width="360" height="240" rx="22" fill="#a78bfa" fillOpacity=".07" stroke="#a78bfa" strokeOpacity=".6" />
        <text x="670" y="100" textAnchor="middle" fill="#c4b5fd" fontSize="19" fontWeight="900">ACETYLIDE</text>
        <text x="670" y="148" textAnchor="middle" fill="#f8fafc" fontSize="30" fontWeight="900">CaC₂</text>
        <text x="670" y="184" textAnchor="middle" fill="#cbd5e1" fontSize="16">C₂²⁻, a C≡C unit</text>
        <text x="670" y="230" textAnchor="middle" fill="#ddd6fe" fontSize="18">+ 2H₂O →</text>
        <text x="670" y="266" textAnchor="middle" fill="#f8fafc" fontSize="22" fontWeight="900">Ca(OH)₂ + C₂H₂</text>
        <text x="450" y="330" textAnchor="middle" fill="#94a3b8" fontSize="15">gas evolved on hydrolysis is the diagnostic test for carbide class</text>
      </svg>
    </VisualFrame>
  );
}

function HydrideFamilyVisual() {
  const families = [
    { x: 40, title: "Saline (ionic)", examples: "NaH, CaH₂", note: "H⁻ present · strong base + reducing agent", tone: "#22d3ee" },
    { x: 330, title: "Covalent", examples: "BeH₂, MgH₂", note: "polymeric, bridging H · indirect preparation", tone: "#a78bfa" },
    { x: 620, title: "Complex", examples: "LiAlH₄, NaBH₄", note: "hydride-donor reagents for organic reduction", tone: "#fbbf24" },
  ] as const;
  return (
    <VisualFrame eyebrow="Three hydride families" title="Same H⁻ role, three very different structures">
      <svg viewBox="0 0 900 320" className="mx-auto block h-auto w-full max-w-[540px]" role="img" aria-label="Comparison of saline covalent and complex metal hydrides">
        <rect x="8" y="8" width="884" height="304" rx="26" fill="#06101a" stroke="#24364a" />
        {families.map((f) => (
          <g key={f.title}>
            <rect x={f.x} y="50" width="240" height="200" rx="20" fill={f.tone} fillOpacity=".08" stroke={f.tone} strokeOpacity=".6" />
            <text x={f.x + 120} y="88" textAnchor="middle" fill={f.tone} fontSize="18" fontWeight="900">{f.title}</text>
            <text x={f.x + 120} y="130" textAnchor="middle" fill="#f8fafc" fontSize="22" fontWeight="900">{f.examples}</text>
            <foreignObject x={f.x + 14} y="150" width="212" height="90">
              <div style={{ color: "#cbd5e1", fontSize: 13.5, lineHeight: 1.5, textAlign: "center", fontFamily: "sans-serif" }}>{f.note}</div>
            </foreignObject>
          </g>
        ))}
        <text x="450" y="288" textAnchor="middle" fill="#94a3b8" fontSize="15">stability of saline hydrides: LiH &gt; NaH &gt; KH &gt; RbH &gt; CsH</text>
      </svg>
    </VisualFrame>
  );
}

function HalideLatticeVisual() {
  return (
    <VisualFrame eyebrow="Two packing choices" title="6:6 rock-salt versus 8:8 caesium-chloride coordination">
      <svg viewBox="0 0 900 360" className="mx-auto block h-auto w-full max-w-[540px]" role="img" aria-label="NaCl type and CsCl type crystal lattice coordination comparison">
        <rect x="8" y="8" width="884" height="344" rx="26" fill="#06101a" stroke="#24364a" />
        <text x="230" y="50" textAnchor="middle" fill="#67e8f9" fontSize="19" fontWeight="900">NaCl TYPE · 6:6</text>
        {[0, 1, 2].map((row) =>
          [0, 1, 2].map((col) => {
            const isNa = (row + col) % 2 === 0;
            const x = 110 + col * 80;
            const y = 90 + row * 80;
            return (
              <circle key={`${row}-${col}`} cx={x} cy={y} r={isNa ? 16 : 22} fill={isNa ? "#0e7490" : "#365314"} stroke={isNa ? "#67e8f9" : "#a3e635"} strokeWidth="2" fillOpacity=".85" />
            );
          }),
        )}
        <text x="230" y="330" textAnchor="middle" fill="#94a3b8" fontSize="15">each ion octahedrally surrounded by 6 counter-ions</text>
        <line x1="450" y1="40" x2="450" y2="320" stroke="#233247" strokeWidth="2" />
        <text x="670" y="50" textAnchor="middle" fill="#c4b5fd" fontSize="19" fontWeight="900">CsCl TYPE · 8:8</text>
        <rect x="590" y="90" width="160" height="160" fill="none" stroke="#475569" strokeWidth="2" />
        {[[590, 90], [750, 90], [590, 250], [750, 250]].map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="18" fill="#365314" stroke="#a3e635" strokeWidth="2" />
        ))}
        <circle cx="670" cy="170" r="24" fill="#4c1d95" stroke="#c4b5fd" strokeWidth="2.5" />
        <text x="670" y="330" textAnchor="middle" fill="#94a3b8" fontSize="15">cation body-centred in a cube of 8 counter-ions</text>
      </svg>
    </VisualFrame>
  );
}

// ── AEM (Alkaline Earth Metals) figure reproductions ────────────────────────

function BeH2PolymerVisual() {
  const units = [0, 1, 2];
  return (
    <VisualFrame eyebrow="Electron-deficient bridging" title="Polymeric BeH₂ — a chain of Be–H–Be 3c–2e bonds">
      <svg viewBox="0 0 920 360" className="mx-auto block h-auto w-full max-w-[540px]" role="img" aria-label="Polymeric beryllium hydride chain with bridging hydrogen atoms">
        <rect x="8" y="8" width="904" height="344" rx="26" fill="#06101a" stroke="#24364a" />
        <text x="460" y="52" textAnchor="middle" fill="#94a3b8" fontSize="15">chain continues both directions →</text>
        {units.map((index) => {
          const x = 150 + index * 210;
          return (
            <g key={index}>
              <circle cx={x} cy="190" r="26" fill="#0e7490" stroke="#67e8f9" strokeWidth="2.5" />
              <text x={x} y="198" textAnchor="middle" fill="#ecfeff" fontSize="18" fontWeight="900">Be</text>
              {index < units.length - 1 ? (
                <>
                  <circle cx={x + 105} cy="118" r="18" fill="#365314" stroke="#a3e635" strokeWidth="2" />
                  <text x={x + 105} y="124" textAnchor="middle" fill="#ecfccb" fontSize="14" fontWeight="900">H</text>
                  <circle cx={x + 105} cy="262" r="18" fill="#365314" stroke="#a3e635" strokeWidth="2" />
                  <text x={x + 105} y="268" textAnchor="middle" fill="#ecfccb" fontSize="14" fontWeight="900">H</text>
                  <line x1={x + 22} y1="180" x2={x + 90} y2="126" stroke="#a3e635" strokeWidth="3" />
                  <line x1={x + 120} y1="126" x2={x + 188} y2="180" stroke="#a3e635" strokeWidth="3" />
                  <line x1={x + 22} y1="200" x2={x + 90} y2="254" stroke="#a3e635" strokeWidth="3" />
                  <line x1={x + 120} y1="254" x2={x + 188} y2="200" stroke="#a3e635" strokeWidth="3" />
                </>
              ) : null}
            </g>
          );
        })}
        <text x="120" y="88" fill="#64748b" fontSize="22" fontWeight="900">···</text>
        <text x="820" y="88" fill="#64748b" fontSize="22" fontWeight="900">···</text>
        <rect x="238" y="292" width="444" height="42" rx="12" fill="#fbbf24" fillOpacity=".1" stroke="#fbbf24" strokeOpacity=".6" />
        <text x="460" y="318" textAnchor="middle" fill="#fde68a" fontSize="15" fontWeight="800">each Be–H–Be bridge: one electron pair shared over 3 atoms (3-centre–2-electron bond)</text>
      </svg>
    </VisualFrame>
  );
}

function BeCl2StructureCompactVisual() {
  return (
    <VisualFrame eyebrow="Cl-bridged network" title="BeCl₂ bridging: lone-pair donation, not a 3c–2e bond">
      <svg viewBox="0 0 900 260" className="mx-auto block h-auto w-full max-w-[540px]" role="img" aria-label="Beryllium chloride bridging bond detail">
        <rect x="8" y="8" width="884" height="244" rx="22" fill="#06101a" stroke="#24364a" />
        <circle cx="300" cy="130" r="24" fill="#0e7490" stroke="#67e8f9" strokeWidth="2.5" />
        <text x="300" y="138" textAnchor="middle" fill="#ecfeff" fontSize="17" fontWeight="900">Be</text>
        <circle cx="450" cy="80" r="20" fill="#365314" stroke="#a3e635" strokeWidth="2" />
        <text x="450" y="87" textAnchor="middle" fill="#ecfccb" fontSize="14" fontWeight="900">Cl</text>
        <circle cx="600" cy="130" r="24" fill="#0e7490" stroke="#67e8f9" strokeWidth="2.5" />
        <text x="600" y="138" textAnchor="middle" fill="#ecfeff" fontSize="17" fontWeight="900">Be</text>
        <line x1="320" y1="118" x2="432" y2="88" stroke="#a3e635" strokeWidth="4" />
        <line x1="468" y1="88" x2="580" y2="118" stroke="#a3e635" strokeWidth="3" strokeDasharray="6 5" />
        <text x="360" y="96" fill="#a3e635" fontSize="13" fontWeight="800">normal covalent</text>
        <text x="560" y="70" fill="#fbbf24" fontSize="13" fontWeight="800">dative (lone-pair)</text>
        <text x="450" y="200" textAnchor="middle" fill="#94a3b8" fontSize="15">one Cl bridges two Be: one bond ordinary, one a coordinate (dative) bond — not a delocalised 3c–2e bond</text>
      </svg>
    </VisualFrame>
  );
}

function Be4OCluster({
  ligand,
  formula,
  tone,
}: {
  ligand: string;
  formula: string;
  tone: string;
}) {
  const top = { x: 450, y: 80 };
  const left = { x: 270, y: 250 };
  const right = { x: 630, y: 250 };
  const bottom = { x: 450, y: 380 };
  const center = { x: 450, y: 250 };
  const edges: [typeof top, typeof top][] = [
    [top, left],
    [top, right],
    [top, bottom],
    [left, right],
    [left, bottom],
    [right, bottom],
  ];
  return (
    <VisualFrame eyebrow="Be₄O-core cluster" title={`${formula} — tetrahedral Be₄ core, six bridging ligands`}>
      <svg viewBox="0 0 900 460" className="mx-auto block h-auto w-full max-w-[540px]" role="img" aria-label={`${formula} structural diagram with central oxide and four beryllium atoms`}>
        <rect x="8" y="8" width="884" height="444" rx="26" fill="#06101a" stroke="#24364a" />
        <text x="450" y="48" textAnchor="middle" fill={tone} fontSize="20" fontWeight="900">{formula}</text>
        {edges.map(([a, b], index) => {
          const mx = (a.x + b.x) / 2;
          const my = (a.y + b.y) / 2;
          return (
            <g key={index}>
              <line x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke={tone} strokeWidth="2.5" strokeOpacity=".85" />
              <rect x={mx - 34} y={my - 12} width="68" height="20" rx="6" fill="#06101a" stroke={tone} strokeOpacity=".5" />
              <text x={mx} y={my + 3} textAnchor="middle" fill={tone} fontSize="10.5" fontWeight="800">{ligand}</text>
            </g>
          );
        })}
        <circle cx={center.x} cy={center.y} r="20" fill="#f472b6" fillOpacity=".22" stroke="#f472b6" strokeWidth="2.5" />
        <text x={center.x} y={center.y + 6} textAnchor="middle" fill="#fce7f3" fontSize="14" fontWeight="900">O²⁻</text>
        {[
          { p: top, label: "Be" },
          { p: left, label: "Be" },
          { p: right, label: "Be" },
          { p: bottom, label: "Be" },
        ].map(({ p, label }, index) => (
          <g key={index}>
            <circle cx={p.x} cy={p.y} r="26" fill="#0e7490" stroke="#67e8f9" strokeWidth="3" />
            <text x={p.x} y={p.y + 7} textAnchor="middle" fill="#ecfeff" fontSize="18" fontWeight="900">{label}</text>
          </g>
        ))}
        <text x="450" y="430" textAnchor="middle" fill="#94a3b8" fontSize="15">
          central O²⁻ bonded to all 4 Be; each of the 6 Be–Be edges is spanned by one bridging {ligand} group
        </text>
      </svg>
    </VisualFrame>
  );
}

function Be4OAcetateVisual() {
  return <Be4OCluster ligand="μ-OAc" formula="Be₄O(CH₃COO)₆" tone="#a78bfa" />;
}

function Be4ONitrateVisual() {
  return <Be4OCluster ligand="μ-NO₃" formula="Be₄O(NO₃)₆" tone="#fbbf24" />;
}

function EdtaChelationVisual() {
  const nPos = [
    [330, 130],
    [570, 130],
  ] as const;
  const oPos = [
    [255, 330],
    [395, 355],
    [505, 355],
    [645, 330],
  ] as const;
  return (
    <VisualFrame eyebrow="Hexadentate chelation" title="[Ca(EDTA)]²⁻ — 5 five-membered chelate rings">
      <svg viewBox="0 0 900 500" className="mx-auto block h-auto w-full max-w-[540px]" role="img" aria-label="EDTA chelating calcium ion with two nitrogen and four oxygen donors">
        <rect x="8" y="8" width="884" height="404" rx="26" fill="#06101a" stroke="#24364a" />
        <circle cx="450" cy="230" r="34" fill="#fbbf24" fillOpacity=".2" stroke="#fbbf24" strokeWidth="3" />
        <text x="450" y="238" textAnchor="middle" fill="#fef3c7" fontSize="18" fontWeight="900">Ca²⁺</text>
        <line x1={nPos[0][0]} y1={nPos[0][1]} x2={nPos[1][0]} y2={nPos[1][1]} stroke="#a78bfa" strokeWidth="3" strokeDasharray="7 6" />
        <text x="450" y="118" textAnchor="middle" fill="#c4b5fd" fontSize="13">ethylenediamine backbone</text>
        {nPos.map(([x, y], index) => (
          <g key={`n${index}`}>
            <line x1={x} y1={y} x2="450" y2="230" stroke="#a78bfa" strokeWidth="3" />
            <circle cx={x} cy={y} r="22" fill="#4c1d95" stroke="#c4b5fd" strokeWidth="2.5" />
            <text x={x} y={y + 6} textAnchor="middle" fill="#f5f3ff" fontSize="15" fontWeight="900">N</text>
          </g>
        ))}
        {oPos.map(([x, y], index) => (
          <g key={`o${index}`}>
            <line x1={x} y1={y} x2="450" y2="230" stroke="#22d3ee" strokeWidth="3" />
            <circle cx={x} cy={y} r="20" fill="#0e7490" stroke="#67e8f9" strokeWidth="2.5" />
            <text x={x} y={y + 6} textAnchor="middle" fill="#ecfeff" fontSize="14" fontWeight="900">O</text>
          </g>
        ))}
        <text x="450" y="386" textAnchor="middle" fill="#94a3b8" fontSize="15">2 N (backbone) + 4 O (acetate arms) → six-coordinate, octahedral, 5 chelate rings</text>
      </svg>
      <div className="mt-3 overflow-hidden rounded-lg border border-white/10 bg-[#08111c] p-4">
        <p className="text-xs leading-6 text-slate-400">
          Free ligand skeleton: two central N atoms joined by –CH₂CH₂–, each N carrying two –CH₂COOH (or –CH₂COO⁻ when
          bound) arms — the four acetate arms supply the 4 O donors above, and the N–C–C–N backbone plus each five-membered
          N–C–C–O ring is what gives 5 five-membered chelate rings once all six donor atoms bind the same metal ion.
        </p>
      </div>
    </VisualFrame>
  );
}

function CrownEtherVisual() {
  const n = 6;
  const R = 130;
  const cx = 450;
  const cy = 220;
  const points = Array.from({ length: n }, (_, index) => {
    const angle = (Math.PI * 2 * index) / n - Math.PI / 2;
    return { x: cx + R * Math.cos(angle), y: cy + R * Math.sin(angle) };
  });
  return (
    <VisualFrame eyebrow="Macrocyclic ligand" title="18-crown-6 — six ether oxygens face the ring centre">
      <svg viewBox="0 0 900 420" className="mx-auto block h-auto w-full max-w-[540px]" role="img" aria-label="18-crown-6 macrocyclic ether coordinating a Group 2 cation">
        <rect x="8" y="8" width="884" height="384" rx="26" fill="#06101a" stroke="#24364a" />
        {points.map((p, index) => {
          const next = points[(index + 1) % n];
          const mx = (p.x + next.x) / 2;
          const my = (p.y + next.y) / 2;
          return (
            <g key={`edge${index}`}>
              <line x1={p.x} y1={p.y} x2={mx} y2={my} stroke="#a3e635" strokeWidth="3" />
              <line x1={mx} y1={my} x2={next.x} y2={next.y} stroke="#a3e635" strokeWidth="3" />
              <text x={mx} y={my - (my > cy ? -18 : 10)} textAnchor="middle" fill="#bef264" fontSize="11">CH₂CH₂</text>
            </g>
          );
        })}
        <circle cx={cx} cy={cy} r="30" fill="#fbbf24" fillOpacity=".18" stroke="#fbbf24" strokeWidth="3" strokeDasharray="5 4" />
        <text x={cx} y={cy + 6} textAnchor="middle" fill="#fef3c7" fontSize="15" fontWeight="900">M²⁺</text>
        {points.map((p, index) => (
          <g key={`o${index}`}>
            <circle cx={p.x} cy={p.y} r="18" fill="#365314" stroke="#a3e635" strokeWidth="2.5" />
            <text x={p.x} y={p.y + 5} textAnchor="middle" fill="#ecfccb" fontSize="13" fontWeight="900">O</text>
          </g>
        ))}
        <text x="450" y="380" textAnchor="middle" fill="#94a3b8" fontSize="15">six –CH₂CH₂–O– units close into a ring; the cavity ion–dipole binds a cation of matching size</text>
      </svg>
    </VisualFrame>
  );
}

function ChlorophyllMgVisual() {
  const rings = [
    { angle: -90, label: "N" },
    { angle: 0, label: "N" },
    { angle: 90, label: "N" },
    { angle: 180, label: "N" },
  ];
  const cx = 450;
  const cy = 220;
  const R = 110;
  return (
    <VisualFrame eyebrow="Photosynthetic pigment" title="Chlorophyll a — Mg²⁺ in a chlorin (porphyrin-type) N₄ macrocycle">
      <svg viewBox="0 0 900 460" className="mx-auto block h-auto w-full max-w-[540px]" role="img" aria-label="Chlorophyll magnesium coordinated by four pyrrole nitrogens">
        <rect x="8" y="8" width="884" height="404" rx="26" fill="#06101a" stroke="#24364a" />
        <circle cx={cx} cy={cy} r="170" fill="none" stroke="#34d399" strokeOpacity=".35" strokeWidth="3" strokeDasharray="10 8" />
        <circle cx={cx} cy={cy} r="32" fill="#34d399" fillOpacity=".2" stroke="#34d399" strokeWidth="3" />
        <text x={cx} y={cy + 7} textAnchor="middle" fill="#d1fae5" fontSize="17" fontWeight="900">Mg</text>
        {rings.map(({ angle, label }, index) => {
          const rad = (angle * Math.PI) / 180;
          const nx = cx + 75 * Math.cos(rad);
          const ny = cy + 75 * Math.sin(rad);
          const ringx = cx + R * Math.cos(rad);
          const ringy = cy + R * Math.sin(rad);
          return (
            <g key={index}>
              <line x1={cx} y1={cy} x2={nx} y2={ny} stroke="#a3e635" strokeWidth="3" />
              <circle cx={nx} cy={ny} r="15" fill="#365314" stroke="#a3e635" strokeWidth="2" />
              <text x={nx} y={ny + 5} textAnchor="middle" fill="#ecfccb" fontSize="12" fontWeight="900">{label}</text>
              <circle cx={ringx} cy={ringy} r="34" fill="none" stroke="#4d7c0f" strokeOpacity=".6" strokeWidth="2.5" />
            </g>
          );
        })}
        <text x="150" y="70" textAnchor="middle" fill="#cbd5e1" fontSize="14">CH₃</text>
        <text x="750" y="70" textAnchor="middle" fill="#cbd5e1" fontSize="14">CH₃</text>
        <text x="118" y="228" textAnchor="middle" fill="#cbd5e1" fontSize="14">CH=CH₂</text>
        <text x="782" y="228" textAnchor="middle" fill="#cbd5e1" fontSize="14">C₂H₅</text>
        <text x="150" y="380" textAnchor="middle" fill="#cbd5e1" fontSize="13">CH₂–CH₂–CO₂–phytol</text>
        <text x="750" y="380" textAnchor="middle" fill="#cbd5e1" fontSize="14">CO₂CH₃</text>
        <text x="450" y="60" textAnchor="middle" fill="#94a3b8" fontSize="14">structural schematic — Mg–N₄ core plus principal ring substituents</text>
      </svg>
    </VisualFrame>
  );
}

function GrignardCenterVisual() {
  return (
    <VisualFrame eyebrow="Solvated organometallic centre" title="Tetrahedral Mg in solid Grignard reagents">
      <svg viewBox="0 0 900 340" className="mx-auto block h-auto w-full max-w-[540px]" role="img" aria-label="Representative ether-solvated tetrahedral Grignard magnesium centre">
        <rect x="8" y="8" width="884" height="304" rx="26" fill="#06101a" stroke="#24364a" />
        <circle cx="450" cy="170" r="30" fill="#0e7490" fillOpacity=".22" stroke="#67e8f9" strokeWidth="3" />
        <text x="450" y="178" textAnchor="middle" fill="#ecfeff" fontSize="18" fontWeight="900">Mg</text>
        {[
          { x: 450, y: 62, label: "R", tone: "#a3e635" },
          { x: 300, y: 170, label: "X", tone: "#f472b6" },
          { x: 600, y: 170, label: "OEt₂", tone: "#fbbf24" },
          { x: 450, y: 278, label: "OEt₂", tone: "#fbbf24" },
        ].map((item, index) => (
          <g key={index}>
            <line x1="450" y1="170" x2={item.x} y2={item.y} stroke={item.tone} strokeWidth="3.5" />
            <rect x={item.x - 42} y={item.y - 18} width="84" height="36" rx="10" fill="#0b1524" stroke={item.tone} strokeWidth="2" />
            <text x={item.x} y={item.y + 6} textAnchor="middle" fill="#f8fafc" fontSize="16" fontWeight="900">{item.label}</text>
          </g>
        ))}
        <text x="450" y="300" textAnchor="middle" fill="#94a3b8" fontSize="15">representative centre R–Mg(X)(OEt₂)₂ · organic group + halide + two ether O donors</text>
      </svg>
    </VisualFrame>
  );
}

function PidgeonProcessVisual() {
  return (
    <VisualFrame eyebrow="Mg from dolomite" title="Pidgeon process — calcined dolomite reduced by ferrosilicon">
      <svg viewBox="0 0 900 320" className="mx-auto block h-auto w-full max-w-[540px]" role="img" aria-label="Pidgeon process for magnesium extraction from dolomite">
        <defs>
          <marker id="pidgeonArrow" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
            <path d="M0 0 L0 6 L8 3 Z" fill="#67e8f9" />
          </marker>
        </defs>
        <rect x="8" y="8" width="884" height="304" rx="26" fill="#06101a" stroke="#24364a" />
        <rect x="50" y="110" width="220" height="90" rx="18" fill="#22d3ee" fillOpacity=".08" stroke="#22d3ee" />
        <text x="160" y="148" textAnchor="middle" fill="#e0f2fe" fontSize="17" fontWeight="900">CaCO₃·MgCO₃</text>
        <text x="160" y="172" textAnchor="middle" fill="#cbd5e1" fontSize="14">dolomite</text>
        <path d="M270 155 H345" stroke="#67e8f9" strokeWidth="3.5" markerEnd="url(#pidgeonArrow)" />
        <text x="307" y="140" textAnchor="middle" fill="#67e8f9" fontSize="13" fontWeight="800">calcination</text>
        <rect x="350" y="110" width="200" height="90" rx="18" fill="#a78bfa" fillOpacity=".08" stroke="#a78bfa" />
        <text x="450" y="148" textAnchor="middle" fill="#f5f3ff" fontSize="17" fontWeight="900">CaO·MgO</text>
        <text x="450" y="172" textAnchor="middle" fill="#cbd5e1" fontSize="14">+ 2CO₂ ↑</text>
        <path d="M550 155 H625" stroke="#fbbf24" strokeWidth="3.5" markerEnd="url(#pidgeonArrow)" />
        <text x="587" y="128" textAnchor="middle" fill="#fbbf24" fontSize="13" fontWeight="800">+ Si</text>
        <text x="587" y="146" textAnchor="middle" fill="#fbbf24" fontSize="12">1150 °C, reduced pressure</text>
        <rect x="630" y="90" width="120" height="70" rx="16" fill="#fbbf24" fillOpacity=".12" stroke="#fbbf24" />
        <text x="690" y="130" textAnchor="middle" fill="#fef3c7" fontSize="17" fontWeight="900">Mg(g)</text>
        <rect x="630" y="170" width="220" height="70" rx="16" fill="#34d399" fillOpacity=".1" stroke="#34d399" />
        <text x="740" y="210" textAnchor="middle" fill="#d1fae5" fontSize="17" fontWeight="900">Ca₂SiO₄</text>
        <text x="450" y="270" textAnchor="middle" fill="#cbd5e1" fontSize="16">2(CaO·MgO) + Si → 2Mg(g) + Ca₂SiO₄</text>
        <text x="450" y="292" textAnchor="middle" fill="#94a3b8" fontSize="14">Mg vapour is condensed and collected; the silicate slag is discarded</text>
      </svg>
    </VisualFrame>
  );
}

function DowProcessVisual() {
  return (
    <VisualFrame eyebrow="Mg from seawater / brine" title="Dow processes — two routes to MgCl₂ feedstock for electrolysis">
      <svg viewBox="0 0 920 420" className="mx-auto block h-auto w-full max-w-[540px]" role="img" aria-label="Dow sea water and Dow natural brine processes for magnesium extraction">
        <defs>
          <marker id="dowArrow" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
            <path d="M0 0 L0 6 L8 3 Z" fill="#94a3b8" />
          </marker>
        </defs>
        <rect x="8" y="8" width="904" height="404" rx="26" fill="#06101a" stroke="#24364a" />
        <text x="240" y="50" textAnchor="middle" fill="#67e8f9" fontSize="18" fontWeight="900">SEA WATER PROCESS</text>
        <rect x="60" y="72" width="180" height="64" rx="14" fill="#22d3ee" fillOpacity=".08" stroke="#22d3ee" />
        <text x="150" y="98" textAnchor="middle" fill="#e0f2fe" fontSize="14" fontWeight="800">Seawater</text>
        <text x="150" y="118" textAnchor="middle" fill="#cbd5e1" fontSize="12">≈0.13% Mg²⁺</text>
        <path d="M150 136 V166" stroke="#94a3b8" strokeWidth="3" markerEnd="url(#dowArrow)" />
        <text x="150" y="152" textAnchor="middle" fill="#cbd5e1" fontSize="11">+ Ca(OH)₂</text>
        <rect x="60" y="170" width="180" height="64" rx="14" fill="#a78bfa" fillOpacity=".08" stroke="#a78bfa" />
        <text x="150" y="198" textAnchor="middle" fill="#f5f3ff" fontSize="14" fontWeight="800">Mg(OH)₂ ↓</text>
        <text x="150" y="218" textAnchor="middle" fill="#cbd5e1" fontSize="12">+ CaCl₂ filtrate</text>
        <path d="M150 234 V264" stroke="#94a3b8" strokeWidth="3" markerEnd="url(#dowArrow)" />
        <text x="150" y="250" textAnchor="middle" fill="#cbd5e1" fontSize="11">+ 2HCl</text>
        <rect x="60" y="268" width="180" height="64" rx="14" fill="#fbbf24" fillOpacity=".1" stroke="#fbbf24" />
        <text x="150" y="296" textAnchor="middle" fill="#fef3c7" fontSize="14" fontWeight="800">MgCl₂</text>
        <text x="150" y="316" textAnchor="middle" fill="#cbd5e1" fontSize="12">+ 2H₂O</text>

        <line x1="330" y1="60" x2="330" y2="360" stroke="#233247" strokeWidth="2" />

        <text x="670" y="50" textAnchor="middle" fill="#c4b5fd" fontSize="18" fontWeight="900">NATURAL BRINE PROCESS</text>
        <rect x="420" y="72" width="200" height="64" rx="14" fill="#22d3ee" fillOpacity=".08" stroke="#22d3ee" />
        <text x="520" y="98" textAnchor="middle" fill="#e0f2fe" fontSize="14" fontWeight="800">CaO·MgO + HCl</text>
        <text x="520" y="118" textAnchor="middle" fill="#cbd5e1" fontSize="12">calcined dolomite</text>
        <path d="M520 136 V166" stroke="#94a3b8" strokeWidth="3" markerEnd="url(#dowArrow)" />
        <rect x="420" y="170" width="200" height="64" rx="14" fill="#a78bfa" fillOpacity=".08" stroke="#a78bfa" />
        <text x="520" y="198" textAnchor="middle" fill="#f5f3ff" fontSize="14" fontWeight="800">CaCl₂ / MgCl₂ (aq)</text>
        <path d="M520 234 V264" stroke="#94a3b8" strokeWidth="3" markerEnd="url(#dowArrow)" />
        <text x="520" y="250" textAnchor="middle" fill="#cbd5e1" fontSize="11">+ CaO·MgO + 2CO₂</text>
        <rect x="420" y="268" width="200" height="64" rx="14" fill="#fbbf24" fillOpacity=".1" stroke="#fbbf24" />
        <text x="520" y="290" textAnchor="middle" fill="#fef3c7" fontSize="14" fontWeight="800">2MgCl₂ (pure)</text>
        <text x="520" y="310" textAnchor="middle" fill="#cbd5e1" fontSize="12">+ 2CaCO₃ ↓</text>

        <path d="M240 302 C280 302 300 302 330 320" fill="none" stroke="#34d399" strokeWidth="3" />
        <path d="M620 302 C650 302 660 310 700 320" fill="none" stroke="#34d399" strokeWidth="3" />
        <rect x="330" y="330" width="290" height="66" rx="16" fill="#34d399" fillOpacity=".12" stroke="#34d399" strokeWidth="2.5" />
        <text x="475" y="360" textAnchor="middle" fill="#d1fae5" fontSize="16" fontWeight="900">electrolysis of fused MgCl₂</text>
        <text x="475" y="382" textAnchor="middle" fill="#a7f3d0" fontSize="14">Mg (cathode) + Cl₂ (anode)</text>
      </svg>
    </VisualFrame>
  );
}

function CyanamideNetworkVisual() {
  return (
    <VisualFrame eyebrow="Nitrogen-fixation chemistry" title="Calcium cyanamide — full reaction network">
      <svg viewBox="0 0 920 720" className="mx-auto block h-auto w-full max-w-[540px]" role="img" aria-label="Calcium cyanamide full reaction network from CaC2 to melamine resins">
        <defs>
          <marker id="cyanArrow" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
            <path d="M0 0 L0 6 L8 3 Z" fill="#67e8f9" />
          </marker>
        </defs>
        <rect x="8" y="8" width="904" height="704" rx="26" fill="#06101a" stroke="#24364a" />

        <rect x="370" y="30" width="180" height="60" rx="14" fill="#22d3ee" fillOpacity=".1" stroke="#22d3ee" />
        <text x="460" y="66" textAnchor="middle" fill="#e0f2fe" fontSize="18" fontWeight="900">CaC₂</text>
        <path d="M460 90 V128" stroke="#67e8f9" strokeWidth="3" markerEnd="url(#cyanArrow)" />
        <text x="460" y="110" textAnchor="middle" fill="#67e8f9" fontSize="12" fontWeight="800">+ N₂, 1100 °C, electric furnace</text>

        <rect x="370" y="132" width="180" height="60" rx="14" fill="#a78bfa" fillOpacity=".12" stroke="#a78bfa" strokeWidth="2.5" />
        <text x="460" y="168" textAnchor="middle" fill="#f5f3ff" fontSize="18" fontWeight="900">CaNCN + C</text>

        <path d="M370 175 C260 195 210 210 200 235" fill="none" stroke="#34d399" strokeWidth="3" markerEnd="url(#cyanArrow)" />
        <text x="150" y="212" textAnchor="middle" fill="#a7f3d0" fontSize="12" fontWeight="800">+ 5H₂O</text>
        <rect x="60" y="238" width="260" height="64" rx="14" fill="#34d399" fillOpacity=".1" stroke="#34d399" />
        <text x="190" y="266" textAnchor="middle" fill="#d1fae5" fontSize="15" fontWeight="900">CaCO₃ + 2NH₄OH</text>
        <text x="190" y="288" textAnchor="middle" fill="#a7f3d0" fontSize="12">slow-release fertilizer (soil hydrolysis)</text>

        <path d="M460 192 C460 210 460 216 460 235" fill="none" stroke="#fbbf24" strokeWidth="3" markerEnd="url(#cyanArrow)" />
        <text x="510" y="216" textAnchor="middle" fill="#fde68a" fontSize="12" fontWeight="800">+ H₂SO₄ or (+CO₂+H₂O)</text>
        <rect x="360" y="238" width="200" height="64" rx="14" fill="#fbbf24" fillOpacity=".1" stroke="#fbbf24" />
        <text x="460" y="266" textAnchor="middle" fill="#fef3c7" fontSize="16" fontWeight="900">H₂NCN</text>
        <text x="460" y="288" textAnchor="middle" fill="#fde68a" fontSize="12">cyanamide (+ CaSO₄ or CaCO₃)</text>

        <path d="M400 302 C330 330 290 350 260 372" fill="none" stroke="#f472b6" strokeWidth="3" markerEnd="url(#cyanArrow)" />
        <text x="290" y="340" textAnchor="middle" fill="#fbcfe8" fontSize="11" fontWeight="800">+H₂O, pH&lt;2 or &gt;12</text>
        <rect x="120" y="376" width="180" height="56" rx="14" fill="#f472b6" fillOpacity=".1" stroke="#f472b6" />
        <text x="210" y="410" textAnchor="middle" fill="#fce7f3" fontSize="15" fontWeight="900">urea</text>

        <path d="M460 302 V360" fill="none" stroke="#60a5fa" strokeWidth="3" markerEnd="url(#cyanArrow)" />
        <text x="510" y="336" textAnchor="middle" fill="#bfdbfe" fontSize="11" fontWeight="800">+ H₂S</text>
        <rect x="370" y="364" width="180" height="56" rx="14" fill="#60a5fa" fillOpacity=".1" stroke="#60a5fa" />
        <text x="460" y="398" textAnchor="middle" fill="#dbeafe" fontSize="15" fontWeight="900">thiourea</text>

        <path d="M520 302 C580 330 620 350 650 372" fill="none" stroke="#c4b5fd" strokeWidth="3" markerEnd="url(#cyanArrow)" />
        <text x="628" y="340" textAnchor="middle" fill="#e9d5ff" fontSize="11" fontWeight="800">pH 7–9</text>
        <rect x="600" y="376" width="220" height="56" rx="14" fill="#c4b5fd" fillOpacity=".12" stroke="#a78bfa" />
        <text x="710" y="410" textAnchor="middle" fill="#f5f3ff" fontSize="15" fontWeight="900">dicyandiamide</text>

        <path d="M710 432 V470" fill="none" stroke="#a78bfa" strokeWidth="3" markerEnd="url(#cyanArrow)" />
        <text x="770" y="454" textAnchor="middle" fill="#e9d5ff" fontSize="11" fontWeight="800">pyrolysis</text>

        {(() => {
          // 1,3,5-triazine ring: N and C(NH2) MUST alternate around the hexagon
          // (even vertex index = ring N, odd vertex index = ring C bearing -NH2).
          // A prior version placed three N labels on three *consecutive* vertices,
          // which is not a valid 1,3,5-triazine — fixed here to alternate N/C.
          const mcx = 710;
          const mcy = 492;
          const R = 46;
          const labelR = 1.56 * R;
          const verts = Array.from({ length: 6 }, (_, i) => {
            const angle = (Math.PI / 180) * (-90 + i * 60);
            return {
              x: mcx + R * Math.cos(angle),
              y: mcy + R * Math.sin(angle),
              lx: mcx + labelR * Math.cos(angle),
              ly: mcy + labelR * Math.sin(angle),
              isN: i % 2 === 0,
            };
          });
          return (
            <g>
              <polygon
                points={verts.map((v) => `${v.x},${v.y}`).join(" ")}
                fill="none"
                stroke="#fbbf24"
                strokeWidth="3"
              />
              {verts.map((v, i) => {
                const next = verts[(i + 1) % 6];
                if (i % 2 !== 0) return null;
                // inner parallel line on alternating ring bonds = Kekulé double bond
                const mx = (v.x + next.x) / 2;
                const my = (v.y + next.y) / 2;
                const dx = mcx - mx;
                const dy = mcy - my;
                const len = Math.hypot(dx, dy) || 1;
                const ox = (dx / len) * 6;
                const oy = (dy / len) * 6;
                return (
                  <line
                    key={`dbl${i}`}
                    x1={v.x + ox}
                    y1={v.y + oy}
                    x2={next.x + ox}
                    y2={next.y + oy}
                    stroke="#fbbf24"
                    strokeWidth="2"
                  />
                );
              })}
              {verts.map((v, i) => (
                <g key={i}>
                  {v.isN ? (
                    <text x={v.x} y={v.y + 4} textAnchor="middle" fill="#fde68a" fontSize="13" fontWeight="800">
                      N
                    </text>
                  ) : (
                    <>
                      <line x1={v.x} y1={v.y} x2={v.lx} y2={v.ly} stroke="#f472b6" strokeWidth="2" />
                      <text x={v.lx} y={v.ly + (v.ly > mcy ? 14 : -8)} textAnchor="middle" fill="#fbcfe8" fontSize="12" fontWeight="700">
                        NH₂
                      </text>
                    </>
                  )}
                </g>
              ))}
            </g>
          );
        })()}
        <text x="710" y="600" textAnchor="middle" fill="#fef3c7" fontSize="14" fontWeight="800">melamine</text>
        <text x="710" y="620" textAnchor="middle" fill="#94a3b8" fontSize="12">2,4,6-triamino-1,3,5-triazine</text>

        <path d="M710 632 V664" fill="none" stroke="#67e8f9" strokeWidth="3" markerEnd="url(#cyanArrow)" />
        <text x="780" y="650" textAnchor="middle" fill="#a5f3fc" fontSize="11" fontWeight="800">+ HCHO</text>
        <rect x="580" y="668" width="260" height="44" rx="12" fill="#22d3ee" fillOpacity=".1" stroke="#22d3ee" />
        <text x="710" y="696" textAnchor="middle" fill="#e0f2fe" fontSize="14" fontWeight="900">melamine–formaldehyde resins</text>
      </svg>
    </VisualFrame>
  );
}

function EdtaFreeLigandVisual() {
  // Free EDTA acid: central –CH2CH2– backbone joining two N atoms, each N
  // bearing two –CH2COOH arms (four carboxyl groups total). This is the
  // standalone ligand, drawn free (not bound to a metal) — kept as its own
  // figure, separate from the [Ca(EDTA)]²⁻ chelate figure above.
  const n1 = { x: 330, y: 250 };
  const n2 = { x: 570, y: 250 };
  type Arm = { ch2: { x: number; y: number }; c: { x: number; y: number }; o: { x: number; y: number }; oh: { x: number; y: number } };
  const arms: Arm[] = [
    { ch2: { x: 265, y: 190 }, c: { x: 195, y: 150 }, o: { x: 135, y: 108 }, oh: { x: 135, y: 178 } },
    { ch2: { x: 265, y: 310 }, c: { x: 195, y: 350 }, o: { x: 135, y: 392 }, oh: { x: 135, y: 322 } },
    { ch2: { x: 635, y: 190 }, c: { x: 705, y: 150 }, o: { x: 765, y: 108 }, oh: { x: 765, y: 178 } },
    { ch2: { x: 635, y: 310 }, c: { x: 705, y: 350 }, o: { x: 765, y: 392 }, oh: { x: 765, y: 322 } },
  ];
  const nFor = [n1, n1, n2, n2];
  return (
    <VisualFrame eyebrow="Free ligand (not a metal complex)" title="EDTA — ethylenediaminetetraacetic acid">
      <svg viewBox="0 0 900 440" className="mx-auto block h-auto w-full max-w-[540px]" role="img" aria-label="Free EDTA ligand structure showing two amine nitrogens joined by an ethylenediamine backbone, each bearing two carboxymethyl arms">
        <rect x="8" y="8" width="884" height="424" rx="26" fill="#06101a" stroke="#24364a" />
        {/* ethylenediamine backbone */}
        <line x1={n1.x} y1={n1.y} x2="400" y2="210" stroke="#a3e635" strokeWidth="3" />
        <line x1="400" y1="210" x2="500" y2="210" stroke="#a3e635" strokeWidth="3" />
        <line x1="500" y1="210" x2={n2.x} y2={n2.y} stroke="#a3e635" strokeWidth="3" />
        <text x="450" y="192" textAnchor="middle" fill="#bef264" fontSize="13">–CH₂CH₂–</text>
        {/* four carboxymethyl arms */}
        {arms.map((arm, index) => {
          const n = nFor[index];
          return (
            <g key={index}>
              <line x1={n.x} y1={n.y} x2={arm.ch2.x} y2={arm.ch2.y} stroke="#a3e635" strokeWidth="3" />
              <line x1={arm.ch2.x} y1={arm.ch2.y} x2={arm.c.x} y2={arm.c.y} stroke="#a3e635" strokeWidth="3" />
              {/* C=O double bond */}
              <line x1={arm.c.x} y1={arm.c.y} x2={arm.o.x} y2={arm.o.y} stroke="#67e8f9" strokeWidth="3" />
              <line
                x1={arm.c.x - (arm.c.y - arm.o.y > 0 ? 6 : -6)}
                y1={arm.c.y + (arm.c.x - arm.o.x > 0 ? 6 : -6)}
                x2={arm.o.x - (arm.c.y - arm.o.y > 0 ? 6 : -6)}
                y2={arm.o.y + (arm.c.x - arm.o.x > 0 ? 6 : -6)}
                stroke="#67e8f9"
                strokeWidth="3"
              />
              <text x={arm.o.x} y={arm.o.y - 8} textAnchor="middle" fill="#a5f3fc" fontSize="16" fontWeight="900">O</text>
              {/* C–OH single bond */}
              <line x1={arm.c.x} y1={arm.c.y} x2={arm.oh.x} y2={arm.oh.y} stroke="#fbbf24" strokeWidth="3" />
              <text x={arm.oh.x - 14} y={arm.oh.y + 5} textAnchor="middle" fill="#fde68a" fontSize="15" fontWeight="800">OH</text>
            </g>
          );
        })}
        <circle cx={n1.x} cy={n1.y} r="20" fill="#4c1d95" stroke="#c4b5fd" strokeWidth="2.5" />
        <text x={n1.x} y={n1.y + 6} textAnchor="middle" fill="#f5f3ff" fontSize="15" fontWeight="900">N</text>
        <circle cx={n2.x} cy={n2.y} r="20" fill="#4c1d95" stroke="#c4b5fd" strokeWidth="2.5" />
        <text x={n2.x} y={n2.y + 6} textAnchor="middle" fill="#f5f3ff" fontSize="15" fontWeight="900">N</text>
        <text x="450" y="424" textAnchor="middle" fill="#94a3b8" fontSize="15">two N donors + four –CH₂COOH arms — the free acid; coordinates as [–CH₂COO⁻] once bound to a metal</text>
      </svg>
    </VisualFrame>
  );
}

function BeHydrateVisual() {
  const be = { x: 450, y: 220 };
  const ligands = [
    { x: 280, y: 120, bond: "plain" as const },
    { x: 620, y: 120, bond: "plain" as const },
    { x: 280, y: 340, bond: "wedge" as const },
    { x: 620, y: 340, bond: "dash" as const },
  ];
  return (
    <VisualFrame eyebrow="Tetrahedral hydration complex" title="[Be(H₂O)₄]²⁺ — coordination number 4">
      <svg viewBox="0 0 900 420" className="mx-auto block h-auto w-full max-w-[540px]" role="img" aria-label="Tetrahedral hydrated beryllium ion with four water ligands and overall 2 plus charge">
        <rect x="8" y="8" width="884" height="384" rx="26" fill="#06101a" stroke="#24364a" />
        {ligands.map((lig, index) => {
          if (lig.bond === "plain") {
            return <line key={index} x1={be.x} y1={be.y} x2={lig.x} y2={lig.y} stroke="#67e8f9" strokeWidth="3" />;
          }
          if (lig.bond === "wedge") {
            const dx = lig.x - be.x;
            const dy = lig.y - be.y;
            const len = Math.hypot(dx, dy);
            const px = (-dy / len) * 10;
            const py = (dx / len) * 10;
            return (
              <polygon
                key={index}
                points={`${be.x},${be.y} ${lig.x + px},${lig.y + py} ${lig.x - px},${lig.y - py}`}
                fill="#67e8f9"
              />
            );
          }
          // dashed wedge
          const steps = 6;
          const segs = Array.from({ length: steps }, (_, i) => {
            const t0 = i / steps;
            const t1 = (i + 0.55) / steps;
            const x1 = be.x + (lig.x - be.x) * t0;
            const y1 = be.y + (lig.y - be.y) * t0;
            const x2 = be.x + (lig.x - be.x) * t1;
            const y2 = be.y + (lig.y - be.y) * t1;
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#67e8f9" strokeWidth={2 + i * 0.6} />;
          });
          return <g key={index}>{segs}</g>;
        })}
        {ligands.map((lig, index) => (
          <text key={index} x={lig.x} y={lig.y + (lig.y < be.y ? -12 : 26)} textAnchor="middle" fill="#e0f2fe" fontSize="22" fontWeight="900">
            H₂O
          </text>
        ))}
        <circle cx={be.x} cy={be.y} r="30" fill="#f472b6" fillOpacity=".2" stroke="#f472b6" strokeWidth="3" />
        <text x={be.x} y={be.y + 8} textAnchor="middle" fill="#fce7f3" fontSize="19" fontWeight="900">Be²⁺</text>
        <text x="450" y="392" textAnchor="middle" fill="#94a3b8" fontSize="15">four O donors point toward Be; tetrahedral geometry; overall ion charge 2+</text>
      </svg>
    </VisualFrame>
  );
}

function BeOxalateVisual() {
  const be = { x: 450, y: 200 };
  const left = {
    topC: { x: 250, y: 130 },
    topO: { x: 190, y: 90 },
    topODonor: { x: 340, y: 130 },
    bottomC: { x: 250, y: 270 },
    bottomO: { x: 190, y: 310 },
    bottomODonor: { x: 340, y: 270 },
  };
  const right = {
    topC: { x: 650, y: 130 },
    topO: { x: 710, y: 90 },
    topODonor: { x: 560, y: 130 },
    bottomC: { x: 650, y: 270 },
    bottomO: { x: 710, y: 310 },
    bottomODonor: { x: 560, y: 270 },
  };
  const oxalate = (o: typeof left) => (
    <>
      <line x1={o.topC.x} y1={o.topC.y} x2={o.bottomC.x} y2={o.bottomC.y} stroke="#a3e635" strokeWidth="3" />
      <line x1={o.topC.x} y1={o.topC.y} x2={o.topO.x} y2={o.topO.y} stroke="#67e8f9" strokeWidth="3" />
      <line x1={o.topC.x - 5} y1={o.topC.y + 7} x2={o.topO.x - 5} y2={o.topO.y + 7} stroke="#67e8f9" strokeWidth="3" />
      <text x={o.topO.x} y={o.topO.y - 8} textAnchor="middle" fill="#a5f3fc" fontSize="17" fontWeight="900">O</text>
      <line x1={o.topC.x} y1={o.topC.y} x2={o.topODonor.x} y2={o.topODonor.y} stroke="#a3e635" strokeWidth="3" />
      <circle cx={o.topODonor.x} cy={o.topODonor.y} r="16" fill="#365314" stroke="#a3e635" strokeWidth="2" />
      <text x={o.topODonor.x} y={o.topODonor.y + 5} textAnchor="middle" fill="#ecfccb" fontSize="13" fontWeight="900">O</text>
      <line x1={o.bottomC.x} y1={o.bottomC.y} x2={o.bottomO.x} y2={o.bottomO.y} stroke="#67e8f9" strokeWidth="3" />
      <line x1={o.bottomC.x - 5} y1={o.bottomC.y - 7} x2={o.bottomO.x - 5} y2={o.bottomO.y - 7} stroke="#67e8f9" strokeWidth="3" />
      <text x={o.bottomO.x} y={o.bottomO.y + 20} textAnchor="middle" fill="#a5f3fc" fontSize="17" fontWeight="900">O</text>
      <line x1={o.bottomC.x} y1={o.bottomC.y} x2={o.bottomODonor.x} y2={o.bottomODonor.y} stroke="#a3e635" strokeWidth="3" />
      <circle cx={o.bottomODonor.x} cy={o.bottomODonor.y} r="16" fill="#365314" stroke="#a3e635" strokeWidth="2" />
      <text x={o.bottomODonor.x} y={o.bottomODonor.y + 5} textAnchor="middle" fill="#ecfccb" fontSize="13" fontWeight="900">O</text>
    </>
  );
  return (
    <VisualFrame eyebrow="Tetrahedral bis-chelate" title="[Be(ox)₂]²⁻ — bis(oxalato)beryllate">
      <svg viewBox="0 0 900 400" className="mx-auto block h-auto w-full max-w-[540px]" role="img" aria-label="Beryllium coordinated by two bidentate oxalate ligands through four oxygen donors, overall 2 minus charge">
        <rect x="8" y="8" width="884" height="384" rx="26" fill="#06101a" stroke="#24364a" />
        {oxalate(left)}
        {oxalate(right)}
        <line x1={left.topODonor.x} y1={left.topODonor.y} x2={be.x} y2={be.y} stroke="#67e8f9" strokeWidth="3" />
        <line x1={left.bottomODonor.x} y1={left.bottomODonor.y} x2={be.x} y2={be.y} stroke="#67e8f9" strokeWidth="3" />
        <line x1={right.topODonor.x} y1={right.topODonor.y} x2={be.x} y2={be.y} stroke="#67e8f9" strokeWidth="3" />
        <line x1={right.bottomODonor.x} y1={right.bottomODonor.y} x2={be.x} y2={be.y} stroke="#67e8f9" strokeWidth="3" />
        <circle cx={be.x} cy={be.y} r="24" fill="#0e7490" fillOpacity=".3" stroke="#67e8f9" strokeWidth="3" />
        <text x={be.x} y={be.y + 6} textAnchor="middle" fill="#ecfeff" fontSize="17" fontWeight="900">Be</text>
        <text x="450" y="380" textAnchor="middle" fill="#94a3b8" fontSize="15">two bidentate oxalate ligands close two five-membered chelate rings on Be; overall ion charge 2−</text>
      </svg>
    </VisualFrame>
  );
}

const VISUALS: Record<string, () => ReactNode> = {
  position: PositionVisual,
  trends: TrendVisual,
  "energy-cycle": EnergyCycleVisual,
  flame: FlameVisual,
  "charge-density": ChargeDensityVisual,
  "oxygen-species": OxygenSpeciesVisual,
  "reaction-atlas": ReactionAtlasVisual,
  "solvated-electron": SolvatedElectronVisual,
  becl2: BeCl2Visual,
  solubility: SolubilityVisual,
  process: ProcessVisual,
  "lime-cycle": LimeCycleVisual,
  plaster: PlasterVisual,
  hardness: HardnessVisual,
  biology: BiologyVisual,
  trap: TrapVisual,
  "diagonal-map": DiagonalMapVisual,
  carbide: CarbideVisual,
  "hydride-family": HydrideFamilyVisual,
  "halide-lattice": HalideLatticeVisual,
  "beh2-polymer": BeH2PolymerVisual,
  "becl2-bridge-detail": BeCl2StructureCompactVisual,
  "be4o-acetate": Be4OAcetateVisual,
  "be4o-nitrate": Be4ONitrateVisual,
  "edta-chelation": EdtaChelationVisual,
  "edta-free-ligand": EdtaFreeLigandVisual,
  "crown-ether": CrownEtherVisual,
  "be-hydrate": BeHydrateVisual,
  "be-oxalate": BeOxalateVisual,
  "chlorophyll-mg": ChlorophyllMgVisual,
  "grignard-center": GrignardCenterVisual,
  "pidgeon-process": PidgeonProcessVisual,
  "dow-process": DowProcessVisual,
  "cyanamide-network": CyanamideNetworkVisual,
};

export function SBlockVisual({ id }: { id: string }) {
  const Component = VISUALS[id];
  return Component ? <Component /> : null;
}
