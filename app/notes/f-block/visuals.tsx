import type { ReactNode } from "react";

function Frame({ title, caption, children }: { title: string; caption: string; children: ReactNode }) {
  return (
    <figure className="overflow-hidden rounded-3xl border border-fuchsia-300/15 bg-[#080d19] shadow-2xl shadow-black/25">
      <div className="border-b border-white/10 px-5 py-4 sm:px-7">
        <p className="text-[11px] font-black uppercase tracking-[.18em] text-fuchsia-300">F-block visual atlas</p>
        <h3 className="mt-1 text-xl font-black text-white sm:text-2xl">{title}</h3>
      </div>
      <div className="overflow-x-auto p-4 sm:p-6">{children}</div>
      <figcaption className="border-t border-white/10 px-5 py-3 text-sm leading-6 text-slate-400 sm:px-7">{caption}</figcaption>
    </figure>
  );
}

function PositionVisual() {
  const lanthanoids = ["Ce","Pr","Nd","Pm","Sm","Eu","Gd","Tb","Dy","Ho","Er","Tm","Yb","Lu"];
  const actinoids = ["Th","Pa","U","Np","Pu","Am","Cm","Bk","Cf","Es","Fm","Md","No","Lr"];
  return (
    <Frame title="The two inner-transition rows" caption="The detached rows are inserted into Periods 6 and 7. The differentiating electron enters 4f for lanthanoids and 5f for actinoids.">
      <svg viewBox="0 0 1080 430" className="min-w-[820px] w-full" role="img" aria-label="Periodic placement of lanthanoids and actinoids">
        <rect width="1080" height="430" rx="28" fill="#070d18"/>
        <text x="540" y="42" textAnchor="middle" fill="#f6efff" fontSize="25" fontWeight="800">Inner-transition architecture</text>
        <rect x="92" y="78" width="896" height="70" rx="18" fill="#102032" stroke="#31516d"/>
        <text x="145" y="119" fill="#93a9ba" fontSize="18" fontWeight="800">Period 6</text>
        <rect x="270" y="91" width="88" height="44" rx="10" fill="#183247" stroke="#57d4ec"/>
        <text x="314" y="119" textAnchor="middle" fill="#e8fbff" fontWeight="800">Ba</text>
        <path d="M365 113 H470" stroke="#d66cff" strokeWidth="4" markerEnd="url(#farr)"/>
        <rect x="478" y="91" width="88" height="44" rx="10" fill="#4b1d60" stroke="#e879f9"/>
        <text x="522" y="119" textAnchor="middle" fill="#ffeaff" fontWeight="800">4f row</text>
        <path d="M574 113 H680" stroke="#d66cff" strokeWidth="4" markerEnd="url(#farr)"/>
        <rect x="688" y="91" width="88" height="44" rx="10" fill="#173b4c" stroke="#57d4ec"/>
        <text x="732" y="119" textAnchor="middle" fill="#e8fbff" fontWeight="800">Hf</text>
        <text x="870" y="119" textAnchor="middle" fill="#93a9ba" fontSize="15">regular 5d sequence</text>

        <rect x="92" y="167" width="896" height="70" rx="18" fill="#102032" stroke="#31516d"/>
        <text x="145" y="208" fill="#93a9ba" fontSize="18" fontWeight="800">Period 7</text>
        <rect x="270" y="180" width="88" height="44" rx="10" fill="#183247" stroke="#57d4ec"/>
        <text x="314" y="208" textAnchor="middle" fill="#e8fbff" fontWeight="800">Ra</text>
        <path d="M365 202 H470" stroke="#d66cff" strokeWidth="4" markerEnd="url(#farr)"/>
        <rect x="478" y="180" width="88" height="44" rx="10" fill="#4b1d60" stroke="#e879f9"/>
        <text x="522" y="208" textAnchor="middle" fill="#ffeaff" fontWeight="800">5f row</text>
        <path d="M574 202 H680" stroke="#d66cff" strokeWidth="4" markerEnd="url(#farr)"/>
        <rect x="688" y="180" width="88" height="44" rx="10" fill="#173b4c" stroke="#57d4ec"/>
        <text x="732" y="208" textAnchor="middle" fill="#e8fbff" fontWeight="800">Rf</text>
        <text x="870" y="208" textAnchor="middle" fill="#93a9ba" fontSize="15">regular 6d sequence</text>

        <g transform="translate(66 282)">
          {lanthanoids.map((el, i) => (
            <g key={el} transform={`translate(${i * 68} 0)`}>
              <rect width="58" height="52" rx="10" fill="#4b1d60" stroke="#e879f9"/>
              <text x="29" y="32" textAnchor="middle" fill="#ffeaff" fontSize="16" fontWeight="800">{el}</text>
            </g>
          ))}
          {actinoids.map((el, i) => (
            <g key={el} transform={`translate(${i * 68} 68)`}>
              <rect width="58" height="52" rx="10" fill="#123d4d" stroke="#57d4ec"/>
              <text x="29" y="32" textAnchor="middle" fill="#e8fbff" fontSize="16" fontWeight="800">{el}</text>
            </g>
          ))}
        </g>
        <defs><marker id="farr" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#d66cff"/></marker></defs>
      </svg>
    </Frame>
  );
}

function ContractionVisual() {
  const points = [0,1,2,3,4,5,6,7,8,9,10,11,12,13];
  return (
    <Frame title="Lanthanoid contraction drives the chemistry" caption="Poor 4f shielding allows effective nuclear charge to rise. The gradual radius decrease explains weaker hydroxide basicity, stronger complexing and the Zr–Hf size similarity.">
      <svg viewBox="0 0 1080 430" className="min-w-[820px] w-full" role="img" aria-label="Lanthanoid contraction trend and consequences">
        <rect width="1080" height="430" rx="28" fill="#070d18"/>
        <text x="330" y="42" textAnchor="middle" fill="#f6efff" fontSize="24" fontWeight="800">Radius of Ln³⁺ decreases</text>
        <path d="M90 105 H590 V335 H90 Z" fill="#0c1725" stroke="#29455e"/>
        <path d="M125 135 C240 165,355 205,555 300" fill="none" stroke="#e879f9" strokeWidth="6"/>
        {points.map((p) => {
          const x = 125 + p * 33;
          const y = 135 + p * 12.7;
          return <circle key={p} cx={x} cy={y} r="5.5" fill="#f5d0fe"/>;
        })}
        <text x="115" y="365" fill="#91a9bc" fontSize="15">La³⁺</text>
        <text x="535" y="365" fill="#91a9bc" fontSize="15">Lu³⁺</text>
        <text x="54" y="200" fill="#91a9bc" fontSize="14" transform="rotate(-90 54 200)">ionic radius</text>

        <g transform="translate(650 75)">
          {[
            ["Poor 4f shielding", "#4b1d60", "#e879f9"],
            ["Zeff increases", "#27314e", "#a78bfa"],
            ["Charge density rises", "#15384b", "#57d4ec"],
            ["Basicity falls", "#4a3420", "#f5bd55"],
          ].map(([label, fill, stroke], i) => (
            <g key={label} transform={`translate(0 ${i * 78})`}>
              <rect width="330" height="56" rx="14" fill={fill} stroke={stroke}/>
              <text x="165" y="35" textAnchor="middle" fill="#f8fafc" fontSize="17" fontWeight="800">{label}</text>
              {i < 3 && <path d="M165 57 V74" stroke="#70879a" strokeWidth="3"/>}
            </g>
          ))}
        </g>
      </svg>
    </Frame>
  );
}

function OxidationVisual() {
  return (
    <Frame title="Actinoid oxidation-state landscape" caption="Early actinoids use 5f, 6d and 7s electrons and reach high oxidation states. Later members increasingly stabilise the +3 state as 5f orbitals contract.">
      <svg viewBox="0 0 1080 430" className="min-w-[820px] w-full" role="img" aria-label="Actinoid oxidation states">
        <rect width="1080" height="430" rx="28" fill="#070d18"/>
        <text x="540" y="44" textAnchor="middle" fill="#f6efff" fontSize="24" fontWeight="800">Accessible oxidation states</text>
        {["+7","+6","+5","+4","+3","+2"].map((state, i) => (
          <g key={state}>
            <line x1="115" y1={90+i*50} x2="1000" y2={90+i*50} stroke="#203548"/>
            <text x="72" y={97+i*50} fill="#a9bdcc" fontSize="16" fontWeight="800">{state}</text>
          </g>
        ))}
        {[
          ["Th",[3]],["Pa",[2,3]],["U",[1,2,3,4]],["Np",[0,1,2,3,4]],["Pu",[0,1,2,3,4]],["Am",[2,3,4]],["Cm",[3,4]],["Bk",[2,3]],["Cf",[3,4]],["Es",[3]],["Fm",[3]],["Md",[3,5]],["No",[3,5]],["Lr",[3]]
        ].map(([el, levels], idx) => {
          const x = 135 + idx*63;
          return (
            <g key={String(el)}>
              <text x={x} y="397" textAnchor="middle" fill="#d8e4ed" fontSize="15" fontWeight="800">{String(el)}</text>
              {(levels as number[]).map((lev) => <circle key={lev} cx={x} cy={90+lev*50} r="10" fill={lev===3 ? "#e879f9" : "#57d4ec"} stroke="#f8fafc" strokeWidth="1.5"/>)}
            </g>
          );
        })}
        <rect x="120" y="330" width="560" height="34" rx="10" fill="#15384b" opacity=".9"/>
        <text x="400" y="352" textAnchor="middle" fill="#dff9ff" fontSize="14" fontWeight="700">wide range early in the series</text>
        <rect x="720" y="330" width="280" height="34" rx="10" fill="#4b1d60" opacity=".9"/>
        <text x="860" y="352" textAnchor="middle" fill="#ffeaff" fontSize="14" fontWeight="700">+3 dominates later</text>
      </svg>
    </Frame>
  );
}

function ComparisonVisual() {
  const rows = [
    ["Orbital", "4f buried", "5f more extended"],
    ["Main state", "+3", "+3 plus higher states"],
    ["Bonding", "mostly ionic", "more covalent"],
    ["Spectra", "sharp, weak ligand effect", "stronger ligand effect"],
    ["Radioactivity", "mostly stable isotopes", "all radioactive"],
  ];
  return (
    <Frame title="Lanthanoids and actinoids at one glance" caption="Use orbital extension and shielding as the master explanation. Most comparative properties follow from the greater availability of 5f electrons.">
      <svg viewBox="0 0 1080 430" className="min-w-[820px] w-full" role="img" aria-label="Comparison of lanthanoids and actinoids">
        <rect width="1080" height="430" rx="28" fill="#070d18"/>
        <text x="540" y="42" textAnchor="middle" fill="#f6efff" fontSize="24" fontWeight="800">Master comparison</text>
        <rect x="80" y="70" width="920" height="54" rx="14" fill="#18273a"/>
        <text x="230" y="103" textAnchor="middle" fill="#9db2c2" fontSize="17" fontWeight="800">Property</text>
        <text x="530" y="103" textAnchor="middle" fill="#f5d0fe" fontSize="18" fontWeight="900">Lanthanoids</text>
        <text x="820" y="103" textAnchor="middle" fill="#b7f3ff" fontSize="18" fontWeight="900">Actinoids</text>
        {rows.map((row, i) => {
          const y = 137 + i*55;
          return (
            <g key={row[0]}>
              <rect x="80" y={y} width="920" height="46" rx="10" fill={i%2===0 ? "#0c1725" : "#101d2d"} stroke="#1f3447"/>
              <text x="230" y={y+29} textAnchor="middle" fill="#d7e2ea" fontSize="16" fontWeight="800">{row[0]}</text>
              <text x="530" y={y+29} textAnchor="middle" fill="#f3d6fa" fontSize="15">{row[1]}</text>
              <text x="820" y={y+29} textAnchor="middle" fill="#d8f8ff" fontSize="15">{row[2]}</text>
            </g>
          );
        })}
        <rect x="225" y="366" width="630" height="42" rx="12" fill="#422052" stroke="#e879f9"/>
        <text x="540" y="392" textAnchor="middle" fill="#fff0ff" fontSize="15" fontWeight="800">Master cause: 5f orbitals participate in bonding more than 4f orbitals</text>
      </svg>
    </Frame>
  );
}

export function FBlockVisual({ part }: { part: number }) {
  if (part === 1) return <PositionVisual />;
  if (part === 2) return <ContractionVisual />;
  if (part === 3) return <OxidationVisual />;
  return <ComparisonVisual />;
}
