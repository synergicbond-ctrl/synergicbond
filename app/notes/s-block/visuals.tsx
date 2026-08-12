import type { ReactNode } from "react";

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
    <section className="overflow-hidden rounded-3xl border border-cyan-300/15 bg-[#07111d] shadow-2xl shadow-black/30">
      <div className="border-b border-white/[.07] bg-[linear-gradient(100deg,rgba(34,211,238,.12),rgba(139,92,246,.10),rgba(251,191,36,.08))] px-5 py-4 sm:px-7">
        <p className="text-[10px] font-black uppercase tracking-[.22em] text-cyan-300">{eyebrow}</p>
        <h2 className="mt-1 text-xl font-black text-white sm:text-2xl">{title}</h2>
      </div>
      <div className="p-3 sm:p-5">{children}</div>
    </section>
  );
}

function PositionVisual() {
  const g1 = ["Li", "Na", "K", "Rb", "Cs", "Fr"];
  const g2 = ["Be", "Mg", "Ca", "Sr", "Ba", "Ra"];
  return (
    <VisualFrame eyebrow="Visual 01 · periodic architecture" title="Two columns, two valence patterns">
      <svg viewBox="0 0 920 430" className="h-auto w-full" role="img" aria-label="S-block Groups 1 and 2 in a dark periodic table visual">
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
    <VisualFrame eyebrow="Visual 02 · trend engine" title="What changes on descending an s-block group">
      <div className="grid gap-3 lg:grid-cols-[1fr_.85fr]">
        <svg viewBox="0 0 620 430" className="h-auto w-full rounded-2xl bg-[#050b13]" role="img" aria-label="Trend ladder down an s-block group">
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
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#08101b]">
          {rows.map(([property, direction, reason], index) => (
            <div key={property} className={`grid grid-cols-[1fr_44px] gap-3 px-4 py-3 ${index ? "border-t border-white/[.07]" : ""}`}>
              <div>
                <p className="font-extrabold text-slate-100">{property}</p>
                <p className="mt-1 text-xs leading-5 text-[var(--text-muted)]">{reason}</p>
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
    <VisualFrame eyebrow="Visual 03 · thermochemical logic" title="Why lithium wins in aqueous reducing power">
      <svg viewBox="0 0 920 420" className="h-auto w-full" role="img" aria-label="Atomisation ionisation hydration cycle for lithium">
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
    <VisualFrame eyebrow="Visual 04 · emission fingerprint" title="Flame lines are energy gaps made visible">
      <svg viewBox="0 0 900 390" className="h-auto w-full" role="img" aria-label="Emission wavelengths for alkali metals">
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
    <VisualFrame eyebrow="Visual 05 · first-member anomalies" title="Charge packed into a small radius changes everything">
      <svg viewBox="0 0 900 390" className="h-auto w-full" role="img" aria-label="Charge density comparison of s-block ions">
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
    <VisualFrame eyebrow="Visual 06 · oxygen-species decoder" title="Li → oxide, Na → peroxide, K/Rb/Cs → superoxide">
      <svg viewBox="0 0 900 430" className="h-auto w-full" role="img" aria-label="Oxide peroxide and superoxide comparison">
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
    <VisualFrame eyebrow="Visual 07 · reaction atlas" title="One metal centre, six high-frequency reaction paths">
      <svg viewBox="0 0 900 430" className="h-auto w-full" role="img" aria-label="Reaction atlas for s-block metals">
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
  const ammonia = [
    [250, 100], [315, 82], [380, 112], [220, 170], [410, 176], [250, 246], [330, 270], [410, 246],
  ] as const;
  return (
    <VisualFrame eyebrow="Visual 08 · liquid ammonia" title="The blue colour belongs to a solvated electron">
      <svg viewBox="0 0 900 420" className="h-auto w-full" role="img" aria-label="Solvated electron cavity in liquid ammonia">
        <defs>
          <radialGradient id="electronGlow">
            <stop offset="0%" stopColor="#dbeafe" />
            <stop offset="22%" stopColor="#60a5fa" stopOpacity=".95" />
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect x="8" y="8" width="884" height="404" rx="26" fill="#050b16" stroke="#24364a" />
        <circle cx="325" cy="180" r="112" fill="url(#electronGlow)" />
        <circle cx="325" cy="180" r="24" fill="#e0f2fe" />
        <text x="325" y="188" textAnchor="middle" fill="#1e3a8a" fontSize="26" fontWeight="900">e⁻</text>
        {ammonia.map(([x, y], index) => (
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
    <VisualFrame eyebrow="Visual 09 · phase-dependent structure" title="BeCl₂ is not “always linear”">
      <svg viewBox="0 0 920 420" className="h-auto w-full" role="img" aria-label="Solid polymer dimer and monomer structures of beryllium chloride">
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
    <VisualFrame eyebrow="Visual 10 · opposing solubility trends" title="Hydroxides rise; sulphates fall">
      <svg viewBox="0 0 900 420" className="h-auto w-full" role="img" aria-label="Opposite solubility trends of Group 2 hydroxides and sulphates">
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
    <VisualFrame eyebrow="Visual 11 · sodium industry" title="One feedstock, three industrial pathways">
      <svg viewBox="0 0 920 380" className="h-auto w-full" role="img" aria-label="Industrial pathways from sodium chloride">
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
    <VisualFrame eyebrow="Visual 12 · calcium reaction loop" title="Limestone → quicklime → slaked lime → limestone">
      <svg viewBox="0 0 900 420" className="h-auto w-full" role="img" aria-label="Calcium carbonate lime cycle">
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
    <VisualFrame eyebrow="Visual 13 · controlled hydration" title="Plaster works because dehydration is deliberately incomplete">
      <svg viewBox="0 0 920 400" className="h-auto w-full" role="img" aria-label="Gypsum plaster of Paris hydration cycle and cement gypsum role">
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
    <VisualFrame eyebrow="Visual 14 · water treatment" title="Choose the method from the ion that causes hardness">
      <div className="grid gap-3 md:grid-cols-5">
        {methods.map(([title, sub, tone], index) => (
          <div key={title} className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#08111c] p-4">
            <span className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-black text-[#020617]" style={{ background: tone }}>{index + 1}</span>
            <h3 className="mt-4 font-black text-white">{title}</h3>
            <p className="mt-2 text-xs leading-5 text-[var(--text-muted)]">{sub}</p>
          </div>
        ))}
      </div>
    </VisualFrame>
  );
}

function BiologyVisual() {
  return (
    <VisualFrame eyebrow="Visual 15 · ionic geography of a cell" title="Na⁺ outside, K⁺ inside; Mg²⁺ and Ca²⁺ do specialised work">
      <svg viewBox="0 0 920 420" className="h-auto w-full" role="img" aria-label="Biological distribution of sodium potassium magnesium and calcium">
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
    <VisualFrame eyebrow="Visual 16 · final trap wall" title="Pairs JEE Advanced deliberately makes students confuse">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map(([top, bottom], index) => (
          <div key={top} className="rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(34,211,238,.08),rgba(139,92,246,.07))] p-5">
            <p className={`text-2xl font-black ${index % 2 ? "text-violet-200" : "text-cyan-200"}`}>{top}</p>
            <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">{bottom}</p>
          </div>
        ))}
      </div>
    </VisualFrame>
  );
}

export function SBlockVisual({ part }: { part: number }) {
  if (part <= 2) return <PositionVisual />;
  if (part <= 5) return <TrendVisual />;
  if (part <= 7) return <EnergyCycleVisual />;
  if (part === 8) return <FlameVisual />;
  if (part <= 12) return <ChargeDensityVisual />;
  if (part === 13) return <OxygenSpeciesVisual />;
  if (part <= 16) return <ReactionAtlasVisual />;
  if (part === 17) return <SolvatedElectronVisual />;
  if (part === 18) return <BeCl2Visual />;
  if (part <= 21) return <SolubilityVisual />;
  if (part <= 24) return <ProcessVisual />;
  if (part === 25) return <LimeCycleVisual />;
  if (part === 26) return <PlasterVisual />;
  if (part === 27) return <HardnessVisual />;
  if (part === 28) return <BiologyVisual />;
  return <TrapVisual />;
}
