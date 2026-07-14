"use client";

import React from "react";

const V = {
  page: "#071522",
  panel: "#10263a",
  panel2: "#16314a",
  line: "#315675",
  text: "#f5f9ff",
  dim: "#c9d9e7",
  gold: "#ffd166",
  cyan: "#69ddff",
  metal: "#8fc7ff",
  metalloid: "#f2ad78",
  nonmetal: "#bce59e",
  noble: "#f3a2c2",
  lanthanoid: "#efd0b5",
  actinoid: "#dcb0d5",
};

function Frame({
  title,
  caption,
  children,
}: {
  title: string;
  caption: string;
  children: React.ReactNode;
}) {
  return (
    <figure
      style={{
        margin: 0,
        padding: "clamp(14px, 2vw, 22px)",
        border: `1px solid ${V.line}`,
        borderRadius: 22,
        background: `linear-gradient(145deg, ${V.panel2}, ${V.panel})`,
        boxShadow: "0 18px 42px rgba(0,0,0,.20)",
      }}
    >
      <h3
        style={{
          margin: "0 0 8px",
          color: V.text,
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontSize: "clamp(1.35rem, 2.6vw, 2rem)",
        }}
      >
        {title}
      </h3>
      {children}
      <figcaption style={{ marginTop: 12, color: V.dim, fontSize: ".98rem", lineHeight: 1.65 }}>
        {caption}
      </figcaption>
    </figure>
  );
}

function MendeleevTable() {
  const groups = ["0", "I", "II", "III", "IV", "V", "VI", "VII", "VIII"];
  const rows = [
    ["—", "H", "—", "—", "—", "—", "—", "—", "—"],
    ["He", "Li", "Be", "B", "C", "N", "O", "F", "—"],
    ["Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "—"],
    ["Ar", "K · Cu", "Ca · Zn", "Sc · Ga", "Ti · Ge", "V · As", "Cr · Se", "Mn · Br", "Fe · Co · Ni"],
    ["Kr", "Rb · Ag", "Sr · Cd", "Y · In", "Zr · Sn", "Nb · Sb", "Mo · Te", "— · I", "Ru · Rh · Pd"],
    ["Xe", "Cs · Au", "Ba · Hg", "La · Tl", "Ce · Pb", "— · Bi", "—", "—", "Os · Ir · Pt"],
    ["—", "—", "Ra", "—", "Th", "—", "U", "—", "—"],
  ];
  const oxides = ["R", "R₂O", "RO", "R₂O₃", "RO₂", "R₂O₅", "RO₃", "R₂O₇", "RO₄"];

  return (
    <Frame
      title="Mendeleev’s periodic table — groups and series"
      caption="Original teaching reconstruction showing chemical families, characteristic oxide patterns and the short-form group architecture."
    >
      <p style={{ color: V.dim, lineHeight: 1.65, margin: "0 0 12px" }}>
        Mendeleev used increasing relative atomic mass as the main guide but gave chemical similarity priority when strict mass order conflicted with family behaviour.
      </p>
      <div style={{ overflowX: "auto" }}>
        <svg
          role="img"
          aria-label="Mendeleev periodic table arranged in groups and series"
          viewBox="0 0 1180 610"
          style={{ display: "block", width: "100%", minWidth: 920, height: "auto" }}
        >
          <text x="590" y="34" textAnchor="middle" fill={V.cyan} fontSize="25" fontWeight="850">
            PERIODIC SYSTEM OF THE ELEMENTS IN GROUPS AND SERIES
          </text>

          <rect x="18" y="62" width="92" height="54" fill="#d6dcec" stroke="#20384f" />
          <text x="64" y="94" textAnchor="middle" fill="#172532" fontSize="17" fontWeight="850">SERIES</text>

          <rect x="110" y="62" width="1044" height="27" fill="#d6dcec" stroke="#20384f" />
          <text x="632" y="82" textAnchor="middle" fill="#172532" fontSize="17" fontWeight="850">
            GROUPS OF ELEMENTS
          </text>

          {groups.map((group, index) => {
            const x = 110 + index * 116;
            return (
              <g key={group}>
                <rect x={x} y="89" width="116" height="27" fill="#cbd3e5" stroke="#20384f" />
                <text x={x + 58} y="108" textAnchor="middle" fill="#172532" fontSize="16" fontWeight="850">
                  {group}
                </text>
              </g>
            );
          })}

          {rows.map((row, rowIndex) => {
            const y = 116 + rowIndex * 61;
            return (
              <g key={rowIndex}>
                <rect x="18" y={y} width="92" height="61" fill="#d7e8c8" stroke="#20384f" />
                <text x="64" y={y + 36} textAnchor="middle" fill="#172532" fontSize="18" fontWeight="800">
                  {rowIndex + 1}
                </text>

                {row.map((cell, cellIndex) => {
                  const x = 110 + cellIndex * 116;
                  const fill = cellIndex % 2 === 0 ? "#f0d8e7" : "#d9e9c9";
                  return (
                    <g key={`${rowIndex}-${cellIndex}`}>
                      <rect x={x} y={y} width="116" height="61" fill={fill} stroke="#20384f" />
                      <text
                        x={x + 58}
                        y={y + 36}
                        textAnchor="middle"
                        fill="#172532"
                        fontSize={cell.length > 10 ? "13" : "16"}
                        fontWeight="750"
                      >
                        {cell}
                      </text>
                    </g>
                  );
                })}
              </g>
            );
          })}

          <rect x="18" y="543" width="92" height="48" fill="#d7e8c8" stroke="#20384f" />
          {oxides.map((oxide, index) => {
            const x = 110 + index * 116;
            return (
              <g key={oxide}>
                <rect x={x} y="543" width="116" height="48" fill="#d7e8c8" stroke="#20384f" />
                <text x={x + 58} y="573" textAnchor="middle" fill="#172532" fontSize="16" fontWeight="750">
                  {oxide}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </Frame>
  );
}

function MeyerCurve() {
  const values = [
    ["Li", 17], ["Be", 8], ["B", 5], ["C", 7], ["N", 15], ["O", 12], ["F", 17], ["Ne", 20],
    ["Na", 28], ["Mg", 17], ["Al", 11], ["Si", 13], ["P", 19], ["S", 16], ["Cl", 20], ["Ar", 28],
    ["K", 49], ["Ca", 29], ["Sc", 18], ["Ti", 14], ["V", 11], ["Cr", 9], ["Mn", 8], ["Fe", 7],
    ["Co", 8], ["Ni", 8], ["Cu", 9], ["Zn", 11], ["Ga", 13], ["Ge", 14], ["As", 15], ["Se", 17],
    ["Br", 26], ["Kr", 31], ["Rb", 58], ["Sr", 33], ["Y", 24], ["Zr", 16], ["Nb", 11], ["Mo", 9],
    ["Ru", 8], ["Rh", 8], ["Pd", 9], ["Ag", 12], ["Cd", 15], ["In", 18], ["Sn", 21], ["Sb", 25],
    ["Te", 30], ["I", 36], ["Xe", 42], ["Cs", 70], ["Ba", 39],
  ] as const;

  const width = 1120;
  const height = 510;
  const left = 70;
  const right = 28;
  const top = 32;
  const bottom = 64;
  const plotWidth = width - left - right;
  const plotHeight = height - top - bottom;
  const maximum = 75;

  const points = values.map(([symbol, value], index) => ({
    symbol,
    value,
    x: left + (index / (values.length - 1)) * plotWidth,
    y: top + (1 - value / maximum) * plotHeight,
  }));

  const path = points
    .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x.toFixed(2)} ${point.y.toFixed(2)}`)
    .join(" ");

  const important = new Set(["Li", "Na", "K", "Rb", "Cs", "Ne", "Ar", "Kr", "Xe", "Ca", "Sr", "Ba"]);

  return (
    <Frame
      title="Lothar Meyer’s atomic-volume curve"
      caption="Recurring peaks near alkali metals and lower values through transition regions visually demonstrate periodic recurrence."
    >
      <p style={{ color: V.dim, lineHeight: 1.65, margin: "0 0 12px" }}>
        Meyer plotted atomic volume against relative atomic mass. Similar families appeared in comparable positions in successive waves, independently supporting periodic classification.
      </p>

      <div style={{ overflowX: "auto" }}>
        <svg
          role="img"
          aria-label="Lothar Meyer curve showing periodic variation of atomic volume"
          viewBox={`0 0 ${width} ${height}`}
          style={{ display: "block", width: "100%", minWidth: 900, height: "auto" }}
        >
          <defs>
            <linearGradient id="meyerCurveV4" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffb347" />
              <stop offset="45%" stopColor={V.cyan} />
              <stop offset="100%" stopColor="#d9a7ff" />
            </linearGradient>
          </defs>

          {[0, 15, 30, 45, 60, 75].map((value) => {
            const y = top + (1 - value / maximum) * plotHeight;
            return (
              <g key={value}>
                <line x1={left} y1={y} x2={width - right} y2={y} stroke={V.line} strokeDasharray="6 6" />
                <text x={left - 11} y={y + 5} textAnchor="end" fill={V.dim} fontSize="14">{value}</text>
              </g>
            );
          })}

          <line x1={left} y1={height - bottom} x2={width - right} y2={height - bottom} stroke={V.text} strokeWidth="2.2" />
          <line x1={left} y1={height - bottom} x2={left} y2={top} stroke={V.text} strokeWidth="2.2" />

          <path
            d={path}
            fill="none"
            stroke="url(#meyerCurveV4)"
            strokeWidth="4.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          />

          {points.map((point) => (
            <g key={point.symbol}>
              <circle
                cx={point.x}
                cy={point.y}
                r={important.has(point.symbol) ? 5.4 : 3.7}
                fill={important.has(point.symbol) ? V.gold : V.cyan}
                stroke={V.page}
                strokeWidth="1.5"
              />
              {important.has(point.symbol) ? (
                <text
                  x={point.x}
                  y={point.y - 11}
                  textAnchor="middle"
                  fill={V.text}
                  fontSize="14"
                  fontWeight="850"
                >
                  {point.symbol}
                </text>
              ) : null}
            </g>
          ))}

          <text x={(left + width - right) / 2} y={height - 17} textAnchor="middle" fill={V.text} fontSize="16" fontWeight="800">
            Increasing relative atomic mass
          </text>
          <text
            x="20"
            y={(top + height - bottom) / 2}
            transform={`rotate(-90 20 ${(top + height - bottom) / 2})`}
            textAnchor="middle"
            fill={V.text}
            fontSize="16"
            fontWeight="800"
          >
            Relative atomic volume
          </text>
        </svg>
      </div>
    </Frame>
  );
}

function ModernCategoryTable() {
  const periods = [
    ["H", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "He"],
    ["Li", "Be", "", "", "", "", "", "", "", "", "", "", "B", "C", "N", "O", "F", "Ne"],
    ["Na", "Mg", "", "", "", "", "", "", "", "", "", "", "Al", "Si", "P", "S", "Cl", "Ar"],
    ["K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr"],
    ["Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe"],
    ["Cs", "Ba", "La", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn"],
    ["Fr", "Ra", "Ac", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og"],
  ];

  const lanthanoids = ["Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu"];
  const actinoids = ["Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr"];

  const noble = new Set(["He", "Ne", "Ar", "Kr", "Xe", "Rn", "Og"]);
  const metalloid = new Set(["B", "Si", "Ge", "As", "Sb", "Te", "Po"]);
  const nonmetal = new Set(["H", "C", "N", "O", "F", "P", "S", "Se", "Cl", "Br", "I", "At", "Ts"]);
  const lanthanoid = new Set(["La", ...lanthanoids]);
  const actinoid = new Set(["Ac", ...actinoids]);

  const colour = (symbol: string) => {
    if (noble.has(symbol)) return V.noble;
    if (lanthanoid.has(symbol)) return V.lanthanoid;
    if (actinoid.has(symbol)) return V.actinoid;
    if (metalloid.has(symbol)) return V.metalloid;
    if (nonmetal.has(symbol)) return V.nonmetal;
    return V.metal;
  };

  const legend = [
    ["Metals", V.metal],
    ["Metalloids", V.metalloid],
    ["Non-metals", V.nonmetal],
    ["Noble gases", V.noble],
    ["Lanthanoids", V.lanthanoid],
    ["Actinoids", V.actinoid],
  ];

  return (
    <Frame
      title="Modern periodic table — category colour map"
      caption="Colours separate metals, metalloids, non-metals, noble gases, lanthanoids and actinoids while preserving the modern 18-group structure."
    >
      <div style={{ display: "flex", flexWrap: "wrap", gap: 9, marginBottom: 13 }}>
        {legend.map(([label, colourValue]) => (
          <span
            key={label}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "7px 11px",
              border: `1px solid ${V.line}`,
              borderRadius: 999,
              color: V.text,
              background: V.page,
              fontSize: ".92rem",
              fontWeight: 750,
            }}
          >
            <span
              style={{
                width: 17,
                height: 17,
                borderRadius: 4,
                background: colourValue,
                border: "1px solid #485966",
              }}
            />
            {label}
          </span>
        ))}
      </div>

      <div style={{ overflowX: "auto" }}>
        <svg
          role="img"
          aria-label="Modern periodic table coloured by element category"
          viewBox="0 0 1160 660"
          style={{ display: "block", width: "100%", minWidth: 980, height: "auto" }}
        >
          {Array.from({ length: 18 }, (_, index) => (
            <text key={index} x={73 + index * 58} y="24" textAnchor="middle" fill={V.text} fontSize="15" fontWeight="850">
              {index + 1}
            </text>
          ))}

          {periods.map((period, row) =>
            period.map((symbol, column) => {
              if (!symbol) return null;
              const x = 45 + column * 58;
              const y = 42 + row * 58;
              return (
                <g key={`${row}-${column}-${symbol}`}>
                  <rect x={x} y={y} width="53" height="52" rx="7" fill={colour(symbol)} stroke="#455968" strokeWidth="1.2" />
                  <text x={x + 26.5} y={y + 32} textAnchor="middle" fill="#172532" fontSize="20" fontWeight="850">
                    {symbol}
                  </text>
                </g>
              );
            }),
          )}

          {periods.map((_, index) => (
            <text key={`period-${index}`} x="24" y={75 + index * 58} textAnchor="middle" fill={V.text} fontSize="15" fontWeight="850">
              {index + 1}
            </text>
          ))}

          <text x="60" y="500" fill={V.text} fontSize="17" fontWeight="850">Lanthanoids</text>
          {lanthanoids.map((symbol, index) => {
            const x = 240 + index * 58;
            const y = 468;
            return (
              <g key={symbol}>
                <rect x={x} y={y} width="53" height="52" rx="7" fill={V.lanthanoid} stroke="#455968" />
                <text x={x + 26.5} y={y + 32} textAnchor="middle" fill="#172532" fontSize="19" fontWeight="850">
                  {symbol}
                </text>
              </g>
            );
          })}

          <text x="74" y="558" fill={V.text} fontSize="17" fontWeight="850">Actinoids</text>
          {actinoids.map((symbol, index) => {
            const x = 240 + index * 58;
            const y = 526;
            return (
              <g key={symbol}>
                <rect x={x} y={y} width="53" height="52" rx="7" fill={V.actinoid} stroke="#455968" />
                <text x={x + 26.5} y={y + 32} textAnchor="middle" fill="#172532" fontSize="19" fontWeight="850">
                  {symbol}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </Frame>
  );
}

export default function PeriodicityHistoryVisualsV4() {
  return (
    <section
      style={{
        width: "100%",
        margin: "0 0 30px",
        padding: "clamp(16px, 3vw, 30px)",
        border: `1px solid ${V.line}`,
        borderRadius: 26,
        background: `linear-gradient(180deg, ${V.page}, #0a1b2a)`,
        color: V.text,
      }}
    >
      <div style={{ color: V.gold, fontSize: ".82rem", fontWeight: 900, letterSpacing: ".12em", textTransform: "uppercase" }}>
        Historical and structural visuals
      </div>
      <h2
        style={{
          margin: "9px 0 8px",
          color: V.text,
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontSize: "clamp(1.9rem, 4vw, 3rem)",
        }}
      >
        Mendeleev, Lothar Meyer and the Modern Periodic Table
      </h2>
      <p style={{ maxWidth: 980, margin: "0 0 22px", color: V.dim, fontSize: "clamp(1rem, 1.4vw, 1.1rem)", lineHeight: 1.72 }}>
        Full-width original diagrams replace tiny reference-image reproductions and remain readable on desktop, tablet and mobile screens.
      </p>
      <div style={{ display: "grid", gap: 24 }}>
        <MendeleevTable />
        <MeyerCurve />
        <ModernCategoryTable />
      </div>
    </section>
  );
}
