import type { ReactNode } from "react";

function Frame({ title, caption, children }: { title: string; caption: string; children: ReactNode }) {
  return (
    <figure className="overflow-hidden rounded-lg border border-violet-300/15 bg-[#080d19] shadow-2xl shadow-black/25">
      <div className="border-b border-white/10 px-5 py-4 sm:px-7">
        <p className="text-[11px] font-black uppercase tracking-[.18em] text-violet-300">P-block visual atlas</p>
        <h3 className="mt-1 text-xl font-black text-white sm:text-2xl">{title}</h3>
      </div>
      <div className="overflow-x-auto p-4 sm:p-6">{children}</div>
      <figcaption className="border-t border-white/10 px-5 py-3 text-sm leading-6 text-slate-400 sm:px-7">{caption}</figcaption>
    </figure>
  );
}

// --- geometry helpers ------------------------------------------------------
function polar(cx: number, cy: number, r: number, deg: number) {
  const rad = ((deg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

type Ligand = { label: string; angleDeg: number; dist?: number; lone?: boolean };

/** Generic central-atom VSEPR shape: central atom with labelled ligands and lone-pair lobes
 * placed at explicit angles around it. Coordinates are computed, not copied from any source. */
function VseprShape({
  cx = 300,
  cy = 210,
  centralLabel,
  ligands,
  geometryLabel,
  angleLabel,
  color = "#57d4ec",
}: {
  cx?: number;
  cy?: number;
  centralLabel: string;
  ligands: Ligand[];
  geometryLabel: string;
  angleLabel?: string;
  color?: string;
}) {
  // Place the geometry/angle captions clear of the drawn structure instead of at a
  // fixed cy+70/cy+90, which sat on top of downward ligand atoms and lone-pair lobes.
  // Measure the real vertical extent of every ligand (atom circles r=22; lone-pair
  // ellipses are drawn at the midpoint with ry=12 plus an "lp" text at the tip), then
  // caption below the structure when the 320-tall card has room, otherwise above it.
  const CARD_H = 320;
  const extents = ligands.map((l) => {
    const p = polar(cx, cy, l.dist ?? 120, l.angleDeg);
    return l.lone
      ? { bottom: Math.max((cy + p.y) / 2 + 14, p.y + 8), top: Math.min((cy + p.y) / 2 - 14, p.y - 14) }
      : { bottom: p.y + 24, top: p.y - 24 };
  });
  const bottomMost = Math.max(cy + 30, ...extents.map((e) => e.bottom));
  const topMost = Math.min(cy - 30, ...extents.map((e) => e.top));
  const fitsBelow = bottomMost + 44 <= CARD_H - 6;
  const geomY = fitsBelow ? bottomMost + 24 : Math.max(topMost - 24, 18);
  const angleY = fitsBelow ? geomY + 18 : Math.max(geomY - 18, 16);

  return (
    <g>
      {ligands.map((l, i) => {
        const p = polar(cx, cy, l.dist ?? 120, l.angleDeg);
        if (l.lone) {
          return (
            <g key={i}>
              <ellipse cx={(cx + p.x) / 2} cy={(cy + p.y) / 2} rx="20" ry="12"
                transform={`rotate(${l.angleDeg} ${(cx + p.x) / 2} ${(cy + p.y) / 2})`}
                fill="#fde68a33" stroke="#fde68a" strokeWidth="2" strokeDasharray="4 3" />
              <text x={p.x} y={p.y} textAnchor="middle" fill="#fde68a" fontSize="12" fontWeight="800">lp</text>
            </g>
          );
        }
        return (
          <g key={i}>
            <line x1={cx} y1={cy} x2={p.x} y2={p.y} stroke={color} strokeWidth="4" />
            <circle cx={p.x} cy={p.y} r="22" fill="#122232" stroke={color} strokeWidth="2.5" />
            <text x={p.x} y={p.y + 5} textAnchor="middle" fill="#eaf7fb" fontSize="15" fontWeight="800">{l.label}</text>
          </g>
        );
      })}
      <circle cx={cx} cy={cy} r="26" fill="#3a2059" stroke="#e879f9" strokeWidth="3" />
      <text x={cx} y={cy + 6} textAnchor="middle" fill="#ffeaff" fontSize="16" fontWeight="900">{centralLabel}</text>
      <text x={cx} y={geomY} textAnchor="middle" fill="#c9d6df" fontSize="14" fontWeight="800">{geometryLabel}</text>
      {angleLabel ? <text x={cx} y={angleY} textAnchor="middle" fill="#8fa4b4" fontSize="12.5">{angleLabel}</text> : null}
    </g>
  );
}

function ShapeCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-lg border border-white/10 bg-[#0c1725] p-3">
      <svg viewBox="0 0 600 320" className="w-full">
        <rect width="600" height="320" rx="20" fill="#0a1220" />
        {children}
      </svg>
      <p className="mt-1 text-center text-xs font-bold text-slate-400">{title}</p>
    </div>
  );
}

// ============================================================================
// PART 1 — P-block map, trends & first-element anomaly
// ============================================================================
function Part1Visual() {
  const groups = [
    { g: "13", el: "B · Al · Ga · In · Tl" },
    { g: "14", el: "C · Si · Ge · Sn · Pb" },
    { g: "15", el: "N · P · As · Sb · Bi" },
    { g: "16", el: "O · S · Se · Te · Po" },
    { g: "17", el: "F · Cl · Br · I · At" },
    { g: "18", el: "He · Ne · Ar · Kr · Xe · Rn" },
  ];
  return (
    <Frame title="The six groups of the p-block" caption="Groups 13–18 fill the p-subshell (np¹ to np⁶). The first member of every group (B, C, N, O, F, He/Ne) is anomalous: small size, no d-orbitals, high electronegativity and a tendency to multiple bonding that heavier congeners lack.">
      <svg viewBox="0 0 1040 440" className="min-w-[780px] w-full" role="img" aria-label="P-block groups 13 to 18 overview">
        <rect width="1040" height="440" rx="28" fill="#070d18" />
        <text x="520" y="42" textAnchor="middle" fill="#f6efff" fontSize="24" fontWeight="800">np¹ → np⁶ across Groups 13–18</text>
        {groups.map((row, i) => {
          const y = 70 + i * 50;
          return (
            <g key={row.g}>
              <rect x="70" y={y} width="900" height="40" rx="10" fill={i % 2 === 0 ? "#101d2d" : "#0c1725"} stroke="#24405c" />
              <rect x="80" y={y + 6} width="70" height="28" rx="8" fill="#4b1d60" stroke="#e879f9" />
              <text x="115" y={y + 25} textAnchor="middle" fill="#ffeaff" fontSize="14" fontWeight="900">{row.g}</text>
              <text x="450" y={y + 25} textAnchor="middle" fill="#d7e2ea" fontSize="14.5" fontWeight="700">{row.el}</text>
            </g>
          );
        })}
        {/* Sits BELOW the six group rows (last row spans y 320-360); at y=336 it overlapped Group 18. */}
        <rect x="150" y="382" width="740" height="34" rx="10" fill="#422052" stroke="#e879f9" />
        <text x="520" y="405" textAnchor="middle" fill="#fff0ff" fontSize="13.5" fontWeight="800">First-member anomaly: small size + no vacant d-orbitals + higher electronegativity + pπ–pπ bonding</text>
      </svg>
    </Frame>
  );
}

// ============================================================================
// ============================================================================
function Part4Visual() {
  const rows = [
    { el: "C", stable: "+4 only" },
    { el: "Si", stable: "+4 dominant" },
    { el: "Ge", stable: "+4 > +2" },
    { el: "Sn", stable: "+2 ≈ +4 (Sn²⁺ reducing)" },
    { el: "Pb", stable: "+2 dominant (Pb⁴⁺ oxidising)" },
  ];
  return (
    <Frame title="The inert-pair effect down Group 14" caption="Poor shielding by filled (n−1)d / f orbitals lets the ns² pair resist ionisation for heavier members, so the lower oxidation state (+2) becomes increasingly stable relative to the group state (+4) going down the group.">
      <svg viewBox="0 0 1000 340" className="min-w-[720px] w-full" role="img" aria-label="Inert pair effect down group 14">
        <rect width="1000" height="340" rx="24" fill="#070d18" />
        <text x="500" y="40" textAnchor="middle" fill="#f6efff" fontSize="22" fontWeight="800">+2 stability increases down the group</text>
        {rows.map((r, i) => {
          const y = 70 + i * 48;
          const width = 120 + i * 130;
          return (
            <g key={r.el}>
              <rect x="90" y={y} width="60" height="34" rx="8" fill="#4b1d60" stroke="#e879f9" />
              <text x="120" y={y + 23} textAnchor="middle" fill="#ffeaff" fontSize="15" fontWeight="900">{r.el}</text>
              <rect x="170" y={y + 3} width={width} height="28" rx="8" fill="#173247" stroke="#57d4ec" />
              <text x={185} y={y + 22} fill="#eaf7fb" fontSize="12.5" fontWeight="700">{r.stable}</text>
            </g>
          );
        })}
        <text x="500" y="320" textAnchor="middle" fill="#c9d6df" fontSize="13" fontWeight="700">Consequence: SnCl₂ is reducing, PbO₂ is a strong oxidiser — classic JEE redox pair</text>
      </svg>
    </Frame>
  );
}

// ============================================================================
// PART 5 — Allotropes, carbon oxides & silicon materials
// ============================================================================
function Part5Visual() {
  return (
    <Frame title="Diamond vs graphite — bonding decides the properties" caption="Diamond: every carbon is sp³, tetrahedrally bonded to 4 neighbours in a rigid 3-D network — hardest known natural substance, non-conductor. Graphite: sp² carbon in flat hexagonal sheets, one delocalised electron per atom gives conductivity; weak van der Waals forces between sheets give it lubricant properties.">
      <div className="grid gap-4 sm:grid-cols-2">
        <ShapeCard title="Diamond — sp³ 3-D tetrahedral network">
          <g transform="translate(300,170)" stroke="#57d4ec" strokeWidth="2.5">
            {[[0, -70], [-70, 20], [70, 20], [0, 90]].map(([x, y], i) => (
              <line key={i} x1="0" y1="0" x2={x} y2={y} />
            ))}
            <circle cx="0" cy="0" r="14" fill="#173247" stroke="#57d4ec" />
            {[[0, -70], [-70, 20], [70, 20], [0, 90]].map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="12" fill="#122232" stroke="#57d4ec" />
            ))}
          </g>
        </ShapeCard>
        <ShapeCard title="Graphite — sp² hexagonal sheets, weak interlayer forces">
          <g transform="translate(230,150)">
            {[0, 1].map((layer) => (
              <g key={layer} transform={`translate(${layer * 30},${layer * 55})`} opacity={layer === 0 ? 1 : 0.55}>
                {[0, 1, 2].map((c) => (
                  <polygon key={c} points="30,0 60,17 60,51 30,68 0,51 0,17" transform={`translate(${c * 60},0)`}
                    fill="none" stroke="#e879f9" strokeWidth="2.2" />
                ))}
              </g>
            ))}
            {/* Caption sits clear below the stacked sheets — at y=120 it previously ran straight
                through the second hexagon layer. */}
            <path d="M -10 90 L 20 145" stroke="#fde68a" strokeWidth="2" strokeDasharray="3 3" markerEnd="url(#gap)" />
            <text x="30" y="185" fill="#fde68a" fontSize="11.5" fontWeight="700">weak van der Waals gap → layers slide</text>
          </g>
        </ShapeCard>
      </div>
    </Frame>
  );
}

// ============================================================================
// PART 6 — Silicates, zeolites & silicones
// ============================================================================
/** One SiO4 tetrahedron seen end-on: shaded triangle, Si at the centroid, O at the corners. */
function siTetra(cx: number, cy: number, s: number, up: boolean, key: string) {
  const d = up
    ? `M${cx} ${cy - s} L${cx - s * 0.9} ${cy + s * 0.55} L${cx + s * 0.9} ${cy + s * 0.55} Z`
    : `M${cx} ${cy + s} L${cx - s * 0.9} ${cy - s * 0.55} L${cx + s * 0.9} ${cy - s * 0.55} Z`;
  const corners = up
    ? [[cx, cy - s], [cx - s * 0.9, cy + s * 0.55], [cx + s * 0.9, cy + s * 0.55]]
    : [[cx, cy + s], [cx - s * 0.9, cy - s * 0.55], [cx + s * 0.9, cy - s * 0.55]];
  return (
    <g key={key}>
      <path d={d} fill="#173247" stroke="#57d4ec" strokeWidth="2" opacity={0.92} />
      <circle cx={cx} cy={cy + (up ? s * 0.05 : -s * 0.05)} r={3.4} fill="#e879f9" />
      {corners.map(([ox, oy], k) => (
        <circle key={k} cx={ox} cy={oy} r={3.6} fill="#0a1220" stroke="#9fd8ee" strokeWidth={1.6} />
      ))}
    </g>
  );
}

/** Draws the real connectivity for each silicate class inside a 110-wide slot. */
function silicateGlyph(shares: number) {
  const S = 17;
  if (shares === 0) return <g>{siTetra(55, 48, S, true, "o0")}</g>;              // isolated
  if (shares === 1) return <g>{siTetra(35, 48, S, true, "p0")}{siTetra(75, 48, S, true, "p1")}</g>; // corner-linked pair
  if (shares === 2) return <g>{[0, 1, 2, 3].map((k) => siTetra(16 + k * 26, 48, S * 0.86, k % 2 === 0, `c${k}`))}</g>; // infinite chain
  if (shares === 3)                                                              // sheet: 2 rows
    return <g>{[0, 1].flatMap((r) => [0, 1, 2, 3].map((k) => siTetra(16 + k * 26 + (r % 2 ? 13 : 0), 32 + r * 32, S * 0.72, k % 2 === 0, `s${r}${k}`)))}</g>;
  return <g>{[0, 1, 2].flatMap((r) => [0, 1, 2, 3].map((k) => siTetra(14 + k * 26 + (r % 2 ? 13 : 0), 24 + r * 26, S * 0.6, (r + k) % 2 === 0, `f${r}${k}`)))}</g>; // 3-D framework
}

function Part6Visual() {
  const forms = [
    { n: "Ortho-silicate", shared: "0 O shared", ex: "SiO₄⁴⁻ (isolated tetrahedron)", shares: 0 },
    { n: "Pyro-silicate", shared: "1 O shared", ex: "Si₂O₇⁶⁻", shares: 1 },
    { n: "Chain (pyroxene)", shared: "2 O shared", ex: "(SiO₃²⁻)ₙ", shares: 2 },
    { n: "Sheet (mica, talc)", shared: "3 O shared", ex: "(Si₂O₅²⁻)ₙ", shares: 3 },
    { n: "3-D framework", shared: "4 O shared", ex: "quartz, feldspar, zeolite", shares: 4 },
  ];
  return (
    <Frame title="The SiO₄ tetrahedron — one building block, five structures" caption="Every silicate is built from corner-sharing SiO₄ tetrahedra. The number of oxygen atoms shared between adjacent tetrahedra (0 → 4) determines whether you get an isolated ion, a chain, a sheet, or a rigid 3-D framework like quartz or a zeolite.">
      <svg viewBox="0 0 1040 380" className="min-w-[760px] w-full" role="img" aria-label="Silicate structural progression">
        <rect width="1040" height="380" rx="24" fill="#070d18" />
        {forms.map((f, i) => {
          const x = 60 + i * 190;
          return (
            <g key={f.n} transform={`translate(${x},70)`}>
              {/* Each class is drawn with its ACTUAL corner-sharing connectivity — a shaded
                  triangle is one SiO4 tetrahedron seen end-on (apex dot = Si, open circles = the
                  shared/terminal O corners). Previously all five classes reused one identical
                  pentagon, which is neither a tetrahedron nor distinguishable between classes. */}
              {silicateGlyph(f.shares)}
              <text x="55" y="140" textAnchor="middle" fill="#eaf7fb" fontSize="12.5" fontWeight="800">{f.n}</text>
              <text x="55" y="160" textAnchor="middle" fill="#fde68a" fontSize="11.5" fontWeight="700">{f.shared}</text>
              <text x="55" y="180" textAnchor="middle" fill="#8fa4b4" fontSize="10.5">{f.ex}</text>
              {i < forms.length - 1 ? <path d="M 115 45 H 165" stroke="#d66cff" strokeWidth="3" markerEnd="url(#parr)" /> : null}
            </g>
          );
        })}
        <defs><marker id="parr" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#d66cff" /></marker></defs>
        <text x="520" y="340" textAnchor="middle" fill="#c9d6df" fontSize="13" fontWeight="700">Silicones (R₂SiO)ₙ: same Si–O backbone, organic R groups replace some oxygens — synthetic, water-repellent</text>
      </svg>
    </Frame>
  );
}

// ============================================================================
// PART 7 — Group 15: nitrogen, ammonia & nitrogen oxides
// ============================================================================
function Part7Visual() {
  return (
    <Frame title="NH₃: pyramidal, and why N is different from P onward" caption="Nitrogen's small size and absent d-orbitals let it form strong pπ–pπ bonds (N≡N, N=O) that heavier Group 15 elements cannot — they instead rely on pπ–dπ or catenated single-bond structures.">
      <div className="grid gap-4 sm:grid-cols-2">
        <ShapeCard title="NH₃ — trigonal pyramidal, one lone pair">
          <VseprShape cx={300} cy={175} centralLabel="N" color="#57d4ec" geometryLabel="Trigonal pyramidal (AX₃E)" angleLabel="∠H–N–H ≈ 107°"
            ligands={[
              { label: "H", angleDeg: 200, dist: 105 }, { label: "H", angleDeg: 320, dist: 105 }, { label: "H", angleDeg: 90, dist: 70 },
              { label: "", angleDeg: 0, dist: 95, lone: true },
            ]} />
        </ShapeCard>
        <ShapeCard title="N₂ — triple bond (pπ–pπ), no analogue for P₂ under normal conditions">
          <g transform="translate(300,170)">
            <circle cx="-70" cy="0" r="26" fill="#3a2059" stroke="#e879f9" strokeWidth="3" />
            <circle cx="70" cy="0" r="26" fill="#3a2059" stroke="#e879f9" strokeWidth="3" />
            <text x="-70" y="6" textAnchor="middle" fill="#ffeaff" fontSize="16" fontWeight="900">N</text>
            <text x="70" y="6" textAnchor="middle" fill="#ffeaff" fontSize="16" fontWeight="900">N</text>
            {[-8, 0, 8].map((dy) => <line key={dy} x1="-44" y1={dy} x2="44" y2={dy} stroke="#57d4ec" strokeWidth="3.5" />)}
            <text x="0" y="60" textAnchor="middle" fill="#c9d6df" fontSize="12.5" fontWeight="700">N≡N bond energy ≈ 946 kJ/mol — extremely inert</text>
          </g>
        </ShapeCard>
      </div>
    </Frame>
  );
}

// ============================================================================
// PART 8 — Nitrides, ammonia & nitric acid
// ============================================================================
function Part8Visual() {
  return (
    <Frame title="HNO₃ structure — the resonance that explains its oxidising power" caption="Nitric acid's N is sp² with one N=O, one N–O(H), and one N→O (dative), with resonance delocalising charge over both terminal oxygens — this is why dilute and concentrated HNO₃ act as oxidising, not just acidic, reagents.">
      <ShapeCard title="HNO₃ — trigonal planar N, resonance-delocalised terminal O's">
        <g transform="translate(300,175)">
          <circle cx="0" cy="0" r="24" fill="#3a2059" stroke="#e879f9" strokeWidth="3" />
          <text y="6" textAnchor="middle" fill="#ffeaff" fontSize="15" fontWeight="900">N</text>
          <line x1="0" y1="-22" x2="0" y2="-80" stroke="#57d4ec" strokeWidth="3.5" />
          <circle cx="0" cy="-92" r="18" fill="#122232" stroke="#57d4ec" strokeWidth="2" />
          <text x="0" y="-87" textAnchor="middle" fill="#eaf7fb" fontSize="12.5" fontWeight="800">O</text>
          {[-1, 1].map((s) => (
            <g key={s}>
              <line x1="0" y1="0" x2={s * 95} y2="60" stroke="#57d4ec" strokeWidth="3.5" strokeDasharray={s > 0 ? undefined : "1 0"} />
              <circle cx={s * 95} cy="60" r="18" fill="#122232" stroke="#57d4ec" strokeWidth="2" />
              <text x={s * 95} y="65" textAnchor="middle" fill="#eaf7fb" fontSize="12.5" fontWeight="800">O{s > 0 ? "H" : ""}</text>
            </g>
          ))}
          <text x="0" y="120" textAnchor="middle" fill="#fde68a" fontSize="12" fontWeight="700">charge delocalised over the two right-hand oxygens (resonance)</text>
        </g>
      </ShapeCard>
    </Frame>
  );
}

// ============================================================================
// PART 9 — Nitrogen oxides, P allotropes & chlorides
// ============================================================================
function Part9Visual() {
  return (
    <Frame title="White phosphorus P₄ and PCl₅'s two faces" caption="P₄ is a strained tetrahedron (60° bond angles, far from the ideal 109.5°) — this strain is exactly why white phosphorus is so reactive. PCl₅ is trigonal bipyramidal as a gas but ionises to [PCl₄]⁺[PCl₆]⁻ in the solid state.">
      <div className="grid gap-4 sm:grid-cols-2">
        <ShapeCard title="P₄ — tetrahedral, strained 60° P–P–P angles">
          <g transform="translate(300,180)">
            {[[0, -80], [-80, 46], [80, 46]].map(([x, y], i) => (
              <line key={i} x1="0" y1="-10" x2={x} y2={y} stroke="#57d4ec" strokeWidth="3" />
            ))}
            <line x1="-80" y1="46" x2="80" y2="46" stroke="#57d4ec" strokeWidth="3" />
            <line x1="0" y1="-80" x2="-80" y2="46" stroke="#57d4ec" strokeWidth="3" strokeOpacity="0.5" />
            <line x1="0" y1="-80" x2="80" y2="46" stroke="#57d4ec" strokeWidth="3" strokeOpacity="0.5" />
            {[[0, -10], [0, -80], [-80, 46], [80, 46]].map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="17" fill="#3a2059" stroke="#e879f9" strokeWidth="2.5" />
            ))}
            {[[0, -10], [0, -80], [-80, 46], [80, 46]].map(([x, y], i) => (
              <text key={i} x={x} y={y + 5} textAnchor="middle" fill="#ffeaff" fontSize="12.5" fontWeight="900">P</text>
            ))}
            <text x="0" y="115" textAnchor="middle" fill="#fde68a" fontSize="12">∠P–P–P = 60° (vs ideal 109.5°) → highly reactive</text>
          </g>
        </ShapeCard>
        <ShapeCard title="PCl₅: gas (trigonal bipyramidal) vs solid (ionic)">
          <VseprShape cx={220} cy={175} centralLabel="P" geometryLabel="gas: TBP" angleLabel="ax 180° / eq 120°"
            ligands={[
              { label: "Cl", angleDeg: 0, dist: 60 }, { label: "Cl", angleDeg: 120, dist: 95 },
              { label: "Cl", angleDeg: 240, dist: 95 }, { label: "Cl", angleDeg: 90, dist: 95 }, { label: "Cl", angleDeg: 270, dist: 95 },
            ]} />
          <text x="440" y="90" textAnchor="middle" fill="#8fa4b4" fontSize="12" fontWeight="800">solid:</text>
          <text x="440" y="110" textAnchor="middle" fill="#eaf7fb" fontSize="13" fontWeight="800">[PCl₄]⁺ tetrahedral</text>
          <text x="440" y="130" textAnchor="middle" fill="#eaf7fb" fontSize="13" fontWeight="800">[PCl₆]⁻ octahedral</text>
        </ShapeCard>
      </div>
    </Frame>
  );
}

// ============================================================================
// PART 10 — Phosphorus oxoacids (the big basicity-counting one)
// ============================================================================
function Part10Visual() {
  const acids = [
    { name: "H₃PO₂", full: "Hypophosphorous acid", poh: 1, ph: 2, basicity: "Monobasic" },
    { name: "H₃PO₃", full: "Phosphorous acid", poh: 2, ph: 1, basicity: "Dibasic" },
    { name: "H₃PO₄", full: "Phosphoric acid", poh: 3, ph: 0, basicity: "Tribasic" },
  ];
  return (
    <Frame title="Phosphorus oxoacids — basicity = number of P–OH groups" caption="Only the H attached through oxygen (P–OH) is ionisable; H attached directly to P (P–H) never ionises. Counting P–OH bonds directly gives the basicity — the single highest-yield fact in this topic.">
      <div className="grid gap-3 sm:grid-cols-3">
        {acids.map((a) => (
          <ShapeCard key={a.name} title={`${a.name} — ${a.full}`}>
            <g transform="translate(300,150)">
              <circle cx="0" cy="0" r="22" fill="#3a2059" stroke="#e879f9" strokeWidth="3" />
              <text y="6" textAnchor="middle" fill="#ffeaff" fontSize="14" fontWeight="900">P</text>
              {/* P=O always present */}
              <line x1="0" y1="-20" x2="0" y2="-70" stroke="#57d4ec" strokeWidth="3" />
              <circle cx="0" cy="-82" r="15" fill="#122232" stroke="#57d4ec" strokeWidth="2" />
              <text y="-77" x="0" textAnchor="middle" fill="#eaf7fb" fontSize="11" fontWeight="800">O</text>
              {Array.from({ length: a.poh }).map((_, i) => {
                const ang = 40 + i * 45;
                const p = polar(0, 0, 78, ang);
                return (
                  <g key={`oh${i}`}>
                    <line x1="0" y1="0" x2={p.x} y2={p.y} stroke="#57d4ec" strokeWidth="3" />
                    <circle cx={p.x} cy={p.y} r="16" fill="#122232" stroke="#57d4ec" strokeWidth="2" />
                    <text x={p.x} y={p.y + 4} textAnchor="middle" fill="#eaf7fb" fontSize="10.5" fontWeight="800">OH</text>
                  </g>
                );
              })}
              {Array.from({ length: a.ph }).map((_, i) => {
                const ang = 220 + i * 50;
                const p = polar(0, 0, 78, ang);
                return (
                  <g key={`h${i}`}>
                    <line x1="0" y1="0" x2={p.x} y2={p.y} stroke="#fde68a" strokeWidth="3" />
                    <circle cx={p.x} cy={p.y} r="14" fill="#211235" stroke="#fde68a" strokeWidth="2" />
                    <text x={p.x} y={p.y + 4} textAnchor="middle" fill="#fde68a" fontSize="10.5" fontWeight="800">H</text>
                  </g>
                );
              })}
              <text y="115" textAnchor="middle" fill="#c9d6df" fontSize="12.5" fontWeight="800">{a.poh} × P–OH, {a.ph} × P–H</text>
              <text y="135" textAnchor="middle" fill="#fde68a" fontSize="13" fontWeight="900">{a.basicity}</text>
            </g>
          </ShapeCard>
        ))}
      </div>
    </Frame>
  );
}

// ============================================================================
// PART 11 — Group 16: oxygen, ozone & sulphur
// ============================================================================
function Part11Visual() {
  return (
    <Frame title="Ozone's bent shape and resonance" caption="O₃ is bent (~117°, AX₂E1 at the central O) with the extra electron pair delocalised across both terminal oxygens by resonance — the two O–O bonds are identical and intermediate between single and double.">
      <ShapeCard title="O₃ — bent, resonance hybrid of two Lewis structures">
        <g transform="translate(300,170)">
          <VseprShape cx={0} cy={0} centralLabel="O" geometryLabel="" angleLabel=""
            ligands={[{ label: "O", angleDeg: 235, dist: 95 }, { label: "O", angleDeg: 305, dist: 95 }, { label: "", angleDeg: 90, dist: 70, lone: true }]} />
          <text y="90" textAnchor="middle" fill="#c9d6df" fontSize="12.5" fontWeight="700">∠O–O–O ≈ 117°, bond order 1.5 on each side</text>
        </g>
      </ShapeCard>
    </Frame>
  );
}

// ============================================================================
// PART 12 — Oxygen chemistry & sulphur allotropes
// ============================================================================
function Part12Visual() {
  return (
    <Frame title="S₈ — the puckered crown" caption="Both rhombic (α) and monoclinic (β) sulphur are built from the same S₈ ring, puckered into a crown shape to relieve angle strain. The two allotropes differ only in how these S₈ crowns pack together in the crystal.">
      <ShapeCard title="S₈ ring — crown conformation, ∠S–S–S ≈ 105°">
        {/* A crown is puckered PERPENDICULAR to the ring plane, so the eight atoms sit on a
            perspective ellipse with alternate atoms lifted/dropped in z (drawn as ±y offset).
            Varying the in-plane radius instead would only draw a flat star, which is what this
            figure previously did while its own caption promised a puckered crown. */}
        <g transform="translate(300,165)">
          {(() => {
            const RX = 140, RY = 54, LIFT = 20;
            const pt = (i: number) => {
              const a = (i * 45 - 90) * Math.PI / 180;
              return { x: RX * Math.cos(a), y: RY * Math.sin(a) + (i % 2 === 0 ? -LIFT : LIFT) };
            };
            const pts = Array.from({ length: 8 }, (_, i) => pt(i));
            return (
              <>
                {pts.map((p, i) => {
                  const q = pts[(i + 1) % 8];
                  return <line key={`b${i}`} x1={p.x} y1={p.y} x2={q.x} y2={q.y} stroke="#57d4ec" strokeWidth="2.8" strokeLinecap="round" />;
                })}
                {pts.map((p, i) => (
                  <g key={`a${i}`}>
                    <circle cx={p.x} cy={p.y} r="15" fill="#3a2059" stroke="#e879f9" strokeWidth="2.5" />
                    <text x={p.x} y={p.y + 4} textAnchor="middle" fill="#ffeaff" fontSize="10.5" fontWeight="900">S</text>
                  </g>
                ))}
                <text x={0} y={-104} textAnchor="middle" fill="#fde68a" fontSize="11">alternate atoms lie above / below the mean ring plane</text>
              </>
            );
          })()}
          <text y="118" textAnchor="middle" fill="#c9d6df" fontSize="12.5" fontWeight="700">Same S₈ crown in both rhombic and monoclinic sulphur</text>
        </g>
      </ShapeCard>
    </Frame>
  );
}

// ============================================================================
// PART 13 — Sulphur oxoacids & redox logic
// ============================================================================
function Part13Visual() {
  const acids = [
    { n: "H₂SO₃", note: "sulphurous, S: +4" },
    { n: "H₂S₂O₃", note: "thiosulphuric, one O replaced by S" },
    { n: "H₂SO₅", note: "peroxomonosulphuric, one peroxo O–O" },
    { n: "H₂S₂O₇", note: "oleum (pyrosulphuric), S–O–S bridge" },
    { n: "H₂S₂O₈", note: "peroxodisulphuric, –O–O– bridge" },
  ];
  return (
    <Frame title="Naming sulphur oxoacids by what replaces what" caption="Build every sulphur oxoacid from H₂SO₄ by one substitution: swap an O for S (thio-), add a peroxo –O–O– link (peroxo-), or bridge two S centres through O (pyro-) or O–O (peroxodi-).">
      <svg viewBox="0 0 1040 300" className="min-w-[760px] w-full" role="img" aria-label="Sulphur oxoacid family">
        <rect width="1040" height="300" rx="24" fill="#070d18" />
        <text x="520" y="40" textAnchor="middle" fill="#f6efff" fontSize="21" fontWeight="800">Base: H₂SO₄ (tetrahedral S, 2 S=O, 2 S–OH)</text>
        {acids.map((a, i) => {
          const x = 60 + i * 190;
          return (
            <g key={a.n} transform={`translate(${x},90)`}>
              <rect width="160" height="70" rx="14" fill="#173247" stroke="#57d4ec" strokeWidth="2" />
              <text x="80" y="30" textAnchor="middle" fill="#eaf7fb" fontSize="16" fontWeight="900">{a.n}</text>
              <text x="80" y="52" textAnchor="middle" fill="#8fa4b4" fontSize="10.5">{a.note}</text>
            </g>
          );
        })}
      </svg>
    </Frame>
  );
}

// ============================================================================
// PART 14 — SO2, H2SO4, contact process
// ============================================================================
function Part14Visual() {
  return (
    <Frame title="SO₂ bent, SO₃ planar — and how the Contact Process links them" caption="SO₂ (AX₂E1, bent ~119°) is catalytically oxidised to SO₃ (AX₃, trigonal planar) over V₂O₅, then absorbed in H₂SO₄ to form oleum, which is diluted to concentrated sulphuric acid.">
      <div className="grid gap-4 sm:grid-cols-2">
        <ShapeCard title="SO₂ — bent, one lone pair on S">
          <VseprShape cx={300} cy={175} centralLabel="S" geometryLabel="Bent (AX₂E)" angleLabel="≈ 119°"
            ligands={[{ label: "O", angleDeg: 220, dist: 95 }, { label: "O", angleDeg: 320, dist: 95 }, { label: "", angleDeg: 90, dist: 70, lone: true }]} />
        </ShapeCard>
        <ShapeCard title="SO₃ (monomer) — trigonal planar, no lone pair on S">
          <VseprShape cx={300} cy={175} centralLabel="S" geometryLabel="Trigonal planar (AX₃)" angleLabel="120°"
            ligands={[{ label: "O", angleDeg: 0 }, { label: "O", angleDeg: 120 }, { label: "O", angleDeg: 240 }]} />
        </ShapeCard>
      </div>
      <svg viewBox="0 0 1000 90" className="mt-4 min-w-[720px] w-full">
        <text x="500" y="45" textAnchor="middle" fill="#c9d6df" fontSize="14" fontWeight="800">
          S (burn) → SO₂ —[V₂O₅, 720 K, 2 atm]→ SO₃ —[conc. H₂SO₄]→ Oleum (H₂S₂O₇) —[dilute]→ H₂SO₄
        </text>
      </svg>
    </Frame>
  );
}

// ============================================================================
// PART 15 — Group 17: halogens & interhalogens (overview)
// ============================================================================
function Part15Visual() {
  const rows = [
    { formula: "XX′", example: "ClF, BrCl, ICl", shape: "Linear (diatomic)" },
    { formula: "XX′₃", example: "ClF₃, BrF₃, ICl₃", shape: "T-shaped (AX₃E₂)" },
    { formula: "XX′₅", example: "ClF₅, BrF₅, IF₅", shape: "Square pyramidal (AX₅E₁)" },
    { formula: "XX′₇", example: "IF₇", shape: "Pentagonal bipyramidal (AX₇E₀)" },
  ];
  return (
    <Frame title="Interhalogens: one rule for every formula" caption="In every interhalogen the larger, less electronegative halogen is the central atom. VSEPR on the central atom's electron pairs (bond pairs + lone pairs) predicts the shape directly from the formula — no memorisation needed.">
      <svg viewBox="0 0 1000 300" className="min-w-[720px] w-full" role="img" aria-label="Interhalogen formula to shape map">
        <rect width="1000" height="300" rx="24" fill="#070d18" />
        <rect x="60" y="55" width="880" height="50" rx="14" fill="#18273a" />
        <text x="150" y="86" textAnchor="middle" fill="#9db2c2" fontSize="15" fontWeight="800">Formula</text>
        <text x="420" y="86" textAnchor="middle" fill="#9db2c2" fontSize="15" fontWeight="800">Examples</text>
        <text x="740" y="86" textAnchor="middle" fill="#9db2c2" fontSize="15" fontWeight="800">Shape (VSEPR)</text>
        {rows.map((r, i) => {
          const y = 118 + i * 44;
          return (
            <g key={r.formula}>
              <rect x="60" y={y} width="880" height="38" rx="10" fill={i % 2 === 0 ? "#0c1725" : "#101d2d"} stroke="#1f3447" />
              <text x="150" y={y + 25} textAnchor="middle" fill="#f5d0fe" fontSize="16" fontWeight="900">{r.formula}</text>
              <text x="420" y={y + 25} textAnchor="middle" fill="#d7e2ea" fontSize="14">{r.example}</text>
              <text x="740" y={y + 25} textAnchor="middle" fill="#b7f3ff" fontSize="14" fontWeight="700">{r.shape}</text>
            </g>
          );
        })}
      </svg>
    </Frame>
  );
}

// ============================================================================
// PART 16 — Chlorine, HCl & oxyacids
// ============================================================================
function Part16Visual() {
  const acids = [
    { n: "HOCl", state: "+1", name: "Hypochlorous" },
    { n: "HOClO", state: "+3", name: "Chlorous" },
    { n: "HOClO₂", state: "+5", name: "Chloric" },
    { n: "HOClO₃", state: "+7", name: "Perchloric" },
  ];
  return (
    <Frame title="Chlorine oxoacids: adding O = raising oxidation state" caption="Each extra Cl=O added to the HOCl core raises chlorine's oxidation state by 2 and increases acid strength (more O atoms stabilise the conjugate base by delocalising negative charge) — HClO₄ is the strongest of the four.">
      {/* 290 not 260: the acid-name / oxidation-state labels sit at absolute y up to 264. */}
      <svg viewBox="0 0 1000 290" className="min-w-[720px] w-full">
        <rect width="1000" height="260" rx="24" fill="#070d18" />
        {acids.map((a, i) => {
          const x = 90 + i * 220;
          return (
            <g key={a.n} transform={`translate(${x},60)`}>
              <circle cx="0" cy="60" r="20" fill="#3a2059" stroke="#e879f9" strokeWidth="2.5" />
              <text x="0" y="66" textAnchor="middle" fill="#ffeaff" fontSize="13" fontWeight="900">Cl</text>
              <line x1="0" y1="40" x2="0" y2="0" stroke="#57d4ec" strokeWidth="3" />
              <circle cx="0" cy="-12" r="14" fill="#122232" stroke="#57d4ec" strokeWidth="2" />
              <text x="0" y="-7" textAnchor="middle" fill="#eaf7fb" fontSize="10.5" fontWeight="800">OH</text>
              {i >= 1 && <><line x1="20" y1="50" x2="55" y2="30" stroke="#57d4ec" strokeWidth="3" /><circle cx="62" cy="24" r="13" fill="#122232" stroke="#57d4ec" strokeWidth="2" /><text x="62" y="28" textAnchor="middle" fill="#eaf7fb" fontSize="10" fontWeight="800">O</text></>}
              {i >= 2 && <><line x1="-20" y1="50" x2="-55" y2="30" stroke="#57d4ec" strokeWidth="3" /><circle cx="-62" cy="24" r="13" fill="#122232" stroke="#57d4ec" strokeWidth="2" /><text x="-62" y="28" textAnchor="middle" fill="#eaf7fb" fontSize="10" fontWeight="800">O</text></>}
              {i >= 3 && <><line x1="0" y1="80" x2="0" y2="115" stroke="#57d4ec" strokeWidth="3" /><circle cx="0" cy="128" r="13" fill="#122232" stroke="#57d4ec" strokeWidth="2" /><text x="0" y="132" textAnchor="middle" fill="#eaf7fb" fontSize="10" fontWeight="800">O</text></>}
              <text x="0" y="170" textAnchor="middle" fill="#eaf7fb" fontSize="13.5" fontWeight="900">{a.n}</text>
              <text x="0" y="188" textAnchor="middle" fill="#fde68a" fontSize="11.5" fontWeight="700">Cl: {a.state}</text>
              <text x="0" y="204" textAnchor="middle" fill="#8fa4b4" fontSize="10.5">{a.name}</text>
            </g>
          );
        })}
      </svg>
    </Frame>
  );
}

// ============================================================================
// PART 17 — Interhalogens: shapes & hydrolysis (the big VSEPR one)
// ============================================================================
function Part17Visual() {
  return (
    <Frame title="ClF₃, BrF₅, IF₇ — the three interhalogen shapes examiners always ask" caption="T-shaped, square pyramidal and pentagonal bipyramidal are drawn straight from VSEPR: count bond pairs + lone pairs on the central halogen, place lone pairs to minimise 90° repulsions, and the shape follows.">
      <div className="grid gap-4 sm:grid-cols-3">
        <ShapeCard title="ClF₃ — T-shaped (AX₃E₂)">
          <VseprShape cx={300} cy={175} centralLabel="Cl" geometryLabel="T-shaped" angleLabel="∠F–Cl–F ≈ 87.5°"
            ligands={[
              { label: "F", angleDeg: 0, dist: 95 }, { label: "F", angleDeg: 180, dist: 95 }, { label: "F", angleDeg: 270, dist: 95 },
              { label: "", angleDeg: 90, dist: 70, lone: true }, { label: "", angleDeg: 45, dist: 90, lone: true },
            ]} />
        </ShapeCard>
        <ShapeCard title="BrF₅ — square pyramidal (AX₅E₁)">
          <VseprShape cx={300} cy={190} centralLabel="Br" geometryLabel="Square pyramidal" angleLabel="basal ∠ ≈ 84.8°"
            ligands={[
              { label: "F", angleDeg: 0, dist: 90 }, { label: "F", angleDeg: 90, dist: 90 }, { label: "F", angleDeg: 180, dist: 90 }, { label: "F", angleDeg: 270, dist: 90 },
              { label: "F", angleDeg: 90, dist: 40 },
              { label: "", angleDeg: 270, dist: 55, lone: true },
            ]} />
        </ShapeCard>
        <ShapeCard title="IF₇ — pentagonal bipyramidal (AX₇E₀)">
          <VseprShape cx={300} cy={190} centralLabel="I" geometryLabel="Pentagonal bipyramidal" angleLabel="no lone pair"
            ligands={[
              { label: "F", angleDeg: 90, dist: 90 }, { label: "F", angleDeg: 270, dist: 90 },
              { label: "F", angleDeg: 0, dist: 85 }, { label: "F", angleDeg: 72, dist: 85 }, { label: "F", angleDeg: 144, dist: 85 },
              { label: "F", angleDeg: 216, dist: 85 }, { label: "F", angleDeg: 288, dist: 85 },
            ]} />
        </ShapeCard>
      </div>
    </Frame>
  );
}

// ============================================================================
// PART 18 — Group 18: noble gases & xenon (basic shapes)
// ============================================================================
function Part18Visual() {
  return (
    <Frame title="XeF₂ and XeF₄ — the first two xenon shapes" caption="XeF₂ (AX₂E₃) is linear with 3 equatorial lone pairs — isoelectronic with I₃⁻. XeF₄ (AX₄E₂) is square planar with the 2 lone pairs axial, minimising 90° lone-pair/lone-pair repulsion.">
      <div className="grid gap-4 sm:grid-cols-2">
        <ShapeCard title="XeF₂ — linear (AX₂E₃)">
          <VseprShape cx={300} cy={175} centralLabel="Xe" geometryLabel="Linear" angleLabel="180°"
            ligands={[
              { label: "F", angleDeg: 90, dist: 100 }, { label: "F", angleDeg: 270, dist: 100 },
              { label: "", angleDeg: 0, dist: 70, lone: true }, { label: "", angleDeg: 150, dist: 70, lone: true }, { label: "", angleDeg: 210, dist: 70, lone: true },
            ]} />
        </ShapeCard>
        <ShapeCard title="XeF₄ — square planar (AX₄E₂)">
          <VseprShape cx={300} cy={175} centralLabel="Xe" geometryLabel="Square planar" angleLabel="90°, lone pairs axial (trans)"
            ligands={[
              { label: "F", angleDeg: 0, dist: 100 }, { label: "F", angleDeg: 90, dist: 100 }, { label: "F", angleDeg: 180, dist: 100 }, { label: "F", angleDeg: 270, dist: 100 },
              { label: "", angleDeg: 45, dist: 50, lone: true }, { label: "", angleDeg: 225, dist: 50, lone: true },
            ]} />
        </ShapeCard>
      </div>
    </Frame>
  );
}

// ============================================================================
// PART 19 — Xenon fluorides, oxides & hydrolysis
// ============================================================================
function Part19Visual() {
  return (
    <Frame title="XeF₆, XeOF₄, XeO₃ — the three that trip people up" caption="XeF₆ (AX₆E₁) is a distorted octahedron whose lone pair never sits still (fluxional). XeOF₄ (AX₅E₁) is square pyramidal with O at the apex. XeO₃ (AX₃E₁) is pyramidal, isostructural with NH₃ and XeF₃⁺.">
      <div className="grid gap-4 sm:grid-cols-3">
        <ShapeCard title="XeF₆ — distorted octahedral (AX₆E₁)">
          <VseprShape cx={300} cy={190} centralLabel="Xe" geometryLabel="Distorted octahedral" angleLabel="fluxional lone pair"
            ligands={[
              { label: "F", angleDeg: 0, dist: 90 }, { label: "F", angleDeg: 60, dist: 90 }, { label: "F", angleDeg: 120, dist: 90 },
              { label: "F", angleDeg: 180, dist: 90 }, { label: "F", angleDeg: 240, dist: 90 }, { label: "F", angleDeg: 300, dist: 90 },
              { label: "", angleDeg: 90, dist: 45, lone: true },
            ]} />
        </ShapeCard>
        <ShapeCard title="XeOF₄ — square pyramidal (AX₅E₁), O at apex">
          <VseprShape cx={300} cy={190} centralLabel="Xe" geometryLabel="Square pyramidal" angleLabel="O apical, lone pair opposite O"
            ligands={[
              { label: "F", angleDeg: 0, dist: 90 }, { label: "F", angleDeg: 90, dist: 90 }, { label: "F", angleDeg: 180, dist: 90 }, { label: "F", angleDeg: 270, dist: 90 },
              { label: "O", angleDeg: 90, dist: 40 },
              { label: "", angleDeg: 270, dist: 55, lone: true },
            ]} />
        </ShapeCard>
        <ShapeCard title="XeO₃ — pyramidal (AX₃E₁)">
          <VseprShape cx={300} cy={175} centralLabel="Xe" geometryLabel="Trigonal pyramidal" angleLabel="isostructural with NH₃"
            ligands={[
              { label: "O", angleDeg: 200, dist: 100 }, { label: "O", angleDeg: 320, dist: 100 }, { label: "O", angleDeg: 90, dist: 70 },
              { label: "", angleDeg: 0, dist: 90, lone: true },
            ]} />
        </ShapeCard>
      </div>
    </Frame>
  );
}

// ============================================================================
// PART 20 — JEE Advanced synthesis & revision
// ============================================================================
function Part20Visual() {
  const rows = [
    ["Group 13", "electron-deficient, Lewis acidic", "BF₃, B₂H₆, Al₂Cl₆"],
    ["Group 14", "inert-pair effect grows down group", "Sn²⁺ reducing, Pb⁴⁺ oxidising"],
    ["Group 15", "N: pπ–pπ only; P onward: pπ–dπ / catenation", "N₂ vs P₄"],
    ["Group 16", "catenation strongest at S; oxoacid family from H₂SO₄", "S₈, oleum"],
    ["Group 17", "central-atom VSEPR gives every interhalogen shape", "ClF₃, BrF₅, IF₇"],
    ["Group 18", "Xe compounds only with F/O; shape by VSEPR again", "XeF₂ → XeO₃"],
  ];
  return (
    <Frame title="P-block master synthesis" caption="Every group's chemistry reduces to one governing idea. Walking into the exam with these six one-liners recovers most structural and reactivity questions even under time pressure.">
      <svg viewBox="0 0 1080 420" className="min-w-[820px] w-full" role="img" aria-label="P-block master comparison table">
        <rect width="1080" height="420" rx="28" fill="#070d18" />
        <rect x="60" y="50" width="960" height="48" rx="14" fill="#18273a" />
        <text x="160" y="80" textAnchor="middle" fill="#9db2c2" fontSize="14" fontWeight="800">Group</text>
        <text x="500" y="80" textAnchor="middle" fill="#9db2c2" fontSize="14" fontWeight="800">Governing idea</text>
        <text x="880" y="80" textAnchor="middle" fill="#9db2c2" fontSize="14" fontWeight="800">Signature example</text>
        {rows.map((row, i) => {
          const y = 108 + i * 50;
          return (
            <g key={row[0]}>
              <rect x="60" y={y} width="960" height="42" rx="10" fill={i % 2 === 0 ? "#0c1725" : "#101d2d"} stroke="#1f3447" />
              <text x="160" y={y + 27} textAnchor="middle" fill="#f5d0fe" fontSize="15" fontWeight="900">{row[0]}</text>
              <text x="500" y={y + 27} textAnchor="middle" fill="#d7e2ea" fontSize="13" fontWeight="700">{row[1]}</text>
              <text x="880" y={y + 27} textAnchor="middle" fill="#b7f3ff" fontSize="13.5" fontWeight="800">{row[2]}</text>
            </g>
          );
        })}
      </svg>
    </Frame>
  );
}

// ============================================================================
export function PBlockVisual({ part }: { part: number }) {
  switch (part) {
    case 1: return <Part1Visual />;
    case 2: return null; // Group 13 now renders the Boron Family master notes
    case 3: return null;
    case 4: return <Part4Visual />;
    case 5: return <Part5Visual />;
    case 6: return <Part6Visual />;
    case 7: return <Part7Visual />;
    case 8: return <Part8Visual />;
    case 9: return <Part9Visual />;
    case 10: return <Part10Visual />;
    case 11: return <Part11Visual />;
    case 12: return <Part12Visual />;
    case 13: return <Part13Visual />;
    case 14: return <Part14Visual />;
    case 15: return <Part15Visual />;
    case 16: return <Part16Visual />;
    case 17: return <Part17Visual />;
    case 18: return <Part18Visual />;
    case 19: return <Part19Visual />;
    case 20: return <Part20Visual />;
    default: return null;
  }
}
