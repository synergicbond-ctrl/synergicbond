"use client";

import React from "react";

const C = {
  dark: "#071522",
  border: "#355876",
  text: "#f7fbff",
  muted: "#d2deea",
  paper: "#f7f5ef",
  paper2: "#eef0e7",
  ink: "#202020",
  blue: "#446dc2",
  orange: "#e97818",
  cyan: "#139ccc",
  pink: "#efd8e5",
  green: "#dce9cb",
  grey: "#d7d8e4",
};

function FigureShell({
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
        margin: "18px 0 24px",
        padding: "clamp(14px, 2vw, 22px)",
        border: `1px solid ${C.border}`,
        borderRadius: 22,
        background: "linear-gradient(145deg, #17334d, #10263a)",
        boxShadow: "0 18px 42px rgba(0,0,0,.20)",
      }}
    >
      <h3
        style={{
          margin: "0 0 8px",
          color: C.text,
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontSize: "clamp(1.35rem, 2.6vw, 2rem)",
        }}
      >
        {title}
      </h3>

      {children}

      <figcaption
        style={{
          marginTop: 12,
          color: C.muted,
          fontSize: ".98rem",
          lineHeight: 1.65,
        }}
      >
        {caption}
      </figcaption>
    </figure>
  );
}

type MendeleevCell = {
  lines: string[];
  tone?: "pink" | "green";
};

const MENDELEEV_ROWS: MendeleevCell[][] = [
  [
    { lines: ["Helium", "He", "4.0"], tone: "pink" },
    { lines: ["Hydrogen", "H", "1.008"], tone: "green" },
    { lines: ["–"], tone: "pink" },
    { lines: ["–"], tone: "green" },
    { lines: ["–"], tone: "pink" },
    { lines: ["–"], tone: "green" },
    { lines: ["–"], tone: "pink" },
    { lines: ["–"], tone: "green" },
    { lines: ["–"], tone: "pink" },
  ],
  [
    { lines: ["Neon", "Ne", "19.9"], tone: "pink" },
    { lines: ["Lithium", "Li", "7.03"], tone: "green" },
    { lines: ["Beryllium", "Be", "9.1"], tone: "pink" },
    { lines: ["Boron", "B", "11.0"], tone: "green" },
    { lines: ["Carbon", "C", "12.0"], tone: "pink" },
    { lines: ["Nitrogen", "N", "14.04"], tone: "green" },
    { lines: ["Oxygen", "O", "16.00"], tone: "pink" },
    { lines: ["Fluorine", "F", "19.0"], tone: "green" },
    { lines: ["–"], tone: "pink" },
  ],
  [
    { lines: ["Argon", "Ar", "38"], tone: "pink" },
    { lines: ["Sodium", "Na", "23.5"], tone: "green" },
    { lines: ["Magnesium", "Mg", "24.3"], tone: "pink" },
    { lines: ["Aluminium", "Al", "27.0"], tone: "green" },
    { lines: ["Silicon", "Si", "28.4"], tone: "pink" },
    { lines: ["Phosphorus", "P", "31.0"], tone: "green" },
    { lines: ["Sulphur", "S", "32.06"], tone: "pink" },
    { lines: ["Chlorine", "Cl", "35.45"], tone: "green" },
    { lines: ["–"], tone: "pink" },
  ],
  [
    { lines: ["–"], tone: "pink" },
    { lines: ["Potassium", "K  39.1", "Copper", "Cu  63.6"], tone: "green" },
    { lines: ["Calcium", "Ca  40.1", "Zinc", "Zn  65.4"], tone: "pink" },
    { lines: ["Scandium", "Sc  44.1", "Gallium", "Ga  70.0"], tone: "green" },
    { lines: ["Titanium", "Ti  48.1", "Germanium", "Ge  72.3"], tone: "pink" },
    { lines: ["Vanadium", "V  51.4", "Arsenic", "As  75"], tone: "green" },
    { lines: ["Chromium", "Cr  52.1", "Selenium", "Se  79"], tone: "pink" },
    { lines: ["Manganese", "Mn  55.0", "Bromine", "Br  79.95"], tone: "green" },
    { lines: ["Iron   Cobalt   Nickel", "Fe     Co      Ni", "55.9   59      59"], tone: "pink" },
  ],
  [
    { lines: ["Krypton", "Kr", "81.8"], tone: "pink" },
    { lines: ["Rubidium", "Rb  85.4", "Silver", "Ag  107.9"], tone: "green" },
    { lines: ["Strontium", "Sr  87.6", "Cadmium", "Cd  112.4"], tone: "pink" },
    { lines: ["Yttrium", "Y  89.0", "Indium", "In  114.0"], tone: "green" },
    { lines: ["Zirconium", "Zr  90.6", "Tin", "Sn  119.0"], tone: "pink" },
    { lines: ["Niobium", "Nb  94.0", "Antimony", "Sb  120.0"], tone: "green" },
    { lines: ["Molybdenum", "Mo  96.0", "Tellurium", "Te  127.6"], tone: "pink" },
    { lines: ["–", "Iodine", "I  126.9"], tone: "green" },
    { lines: ["Ruthenium  Rhodium  Palladium", "Ru        Rh       Pd", "101.7     103.0    106.5"], tone: "pink" },
  ],
  [
    { lines: ["Xenon", "Xe", "128"], tone: "pink" },
    { lines: ["Caesium", "Cs  132.9", "Gold", "Au  197.2"], tone: "green" },
    { lines: ["Barium", "Ba  137.4", "Mercury", "Hg  200.0"], tone: "pink" },
    { lines: ["Lanthanum", "La  139", "Thallium", "Tl  204.1"], tone: "green" },
    { lines: ["Cerium", "Ce  140", "Lead", "Pb  206.9"], tone: "pink" },
    { lines: ["–", "Bismuth", "Bi  208"], tone: "green" },
    { lines: ["–"], tone: "pink" },
    { lines: ["–"], tone: "green" },
    { lines: ["Osmium  Iridium  Platinum", "Os      Ir       Pt", "191     193      194.9"], tone: "pink" },
  ],
  [
    { lines: ["–"], tone: "pink" },
    { lines: ["–"], tone: "green" },
    { lines: ["Radium", "Ra", "224"], tone: "pink" },
    { lines: ["–"], tone: "green" },
    { lines: ["Thorium", "Th", "232"], tone: "pink" },
    { lines: ["–"], tone: "green" },
    { lines: ["Uranium", "U", "239"], tone: "pink" },
    { lines: ["–"], tone: "green" },
    { lines: ["–"], tone: "pink" },
  ],
];

export function MendeleevNCERTTableV3() {
  const groups = ["0", "I", "II", "III", "IV", "V", "VI", "VII", "VIII"];
  const series = ["1", "2", "3", "4–5", "6–7", "8–11", "12"];
  const oxides = ["R", "R₂O", "RO", "R₂O₃", "RO₂", "R₂O₅", "RO₃", "R₂O₇", "RO₄"];
  const hydrides = ["", "RH", "RH₂", "RH₃", "RH₄", "RH₃", "RH₂", "RH", ""];

  return (
    <FigureShell
      title="Mendeleev’s Periodic Table published earlier"
      caption="Original NCERT-style reconstruction of the short-form table: groups 0–VIII, series, and the characteristic higher oxide and gaseous hydride formulae."
    >
      <p style={{ color: C.muted, lineHeight: 1.68, margin: "0 0 12px" }}>
        Mendeleev arranged elements mainly by increasing atomic weight while preserving chemical similarity, valency and recurring compound formulae.
      </p>

      <div style={{ overflowX: "auto" }}>
        <div
          style={{
            minWidth: 1120,
            background: C.paper,
            borderRadius: 18,
            padding: 18,
            color: C.ink,
          }}
        >
          <div
            style={{
              textAlign: "center",
              color: C.cyan,
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontWeight: 800,
              fontSize: 23,
              marginBottom: 10,
            }}
          >
            PERIODIC SYSTEM OF THE ELEMENTS IN GROUPS AND SERIES
          </div>

          <table
            style={{
              width: "100%",
              tableLayout: "fixed",
              borderCollapse: "collapse",
              fontFamily: "Georgia, 'Times New Roman', serif",
            }}
          >
            <thead>
              <tr>
                <th
                  rowSpan={2}
                  style={{
                    width: 74,
                    border: "1.5px solid #222",
                    background: C.grey,
                    padding: 6,
                    fontSize: 14,
                  }}
                >
                  SERIES
                </th>
                <th
                  colSpan={9}
                  style={{
                    border: "1.5px solid #222",
                    background: C.grey,
                    padding: 4,
                    fontSize: 15,
                  }}
                >
                  GROUPS OF ELEMENTS
                </th>
              </tr>
              <tr>
                {groups.map((group) => (
                  <th
                    key={group}
                    style={{
                      border: "1.5px solid #222",
                      background: C.grey,
                      padding: 4,
                      fontSize: 14,
                    }}
                  >
                    {group}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {MENDELEEV_ROWS.map((row, rowIndex) => (
                <tr key={`series-${rowIndex}`}>
                  <th
                    style={{
                      border: "1.5px solid #222",
                      background: C.green,
                      padding: 6,
                      fontSize: 15,
                    }}
                  >
                    {series[rowIndex]}
                  </th>

                  {row.map((cell, cellIndex) => (
                    <td
                      key={`cell-${rowIndex}-${cellIndex}`}
                      style={{
                        height: rowIndex >= 3 && rowIndex <= 5 ? 116 : 88,
                        border: "1.5px solid #222",
                        background: cell.tone === "green" ? C.green : C.pink,
                        padding: "6px 4px",
                        textAlign: "center",
                        verticalAlign: "middle",
                      }}
                    >
                      {cell.lines.map((line, lineIndex) => (
                        <div
                          key={`${line}-${lineIndex}`}
                          style={{
                            fontSize:
                              line.length > 30
                                ? 10
                                : line.length > 19
                                  ? 11
                                  : lineIndex === 0
                                    ? 13
                                    : 12,
                            lineHeight: 1.25,
                            fontWeight: lineIndex === 0 ? 600 : 500,
                            whiteSpace: "pre-wrap",
                          }}
                        >
                          {line}
                        </div>
                      ))}
                    </td>
                  ))}
                </tr>
              ))}

              <tr>
                <th
                  style={{
                    border: "1.5px solid #222",
                    background: C.green,
                    padding: 5,
                  }}
                />
                {oxides.map((oxide, index) => (
                  <td
                    key={oxide}
                    style={{
                      height: 70,
                      border: "1.5px solid #222",
                      background: index % 2 ? C.pink : C.green,
                      textAlign: "center",
                      verticalAlign: "middle",
                      fontSize: 15,
                      fontWeight: 600,
                    }}
                  >
                    <div>{oxide}</div>
                    <div style={{ marginTop: 10 }}>{hydrides[index]}</div>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>

          <div
            style={{
              textAlign: "center",
              marginTop: 8,
              color: "#333",
              fontSize: 13,
              fontWeight: 700,
            }}
          >
            HIGHER SALINE OXIDES · HIGHER GASEOUS HYDROGEN COMPOUNDS
          </div>
        </div>
      </div>
    </FigureShell>
  );
}

const MEYER_DATA = [
  ["Li", 7.0, 15.2], ["Be", 9.1, 7.0], ["B", 11.0, 4.7], ["C", 12.0, 5.4],
  ["N", 14.0, 16.5], ["O", 16.0, 12.8], ["F", 19.0, 16.5], ["Ne", 20.2, 18.0],
  ["Na", 23.0, 26.5], ["Mg", 24.3, 14.0], ["Al", 27.0, 10.0], ["Si", 28.1, 12.1],
  ["P", 31.0, 17.0], ["S", 32.1, 15.5], ["Cl", 35.5, 18.7], ["Ar", 39.9, 26.8],
  ["K", 39.1, 47.5], ["Ca", 40.1, 28.0], ["Ti", 47.9, 13.7], ["V", 50.9, 11.5],
  ["Cr", 52.0, 9.5], ["Fe", 55.8, 7.7], ["Ni", 58.7, 6.6], ["Co", 58.9, 7.1],
  ["Cu", 63.5, 7.1], ["Zn", 65.4, 9.2], ["Ga", 69.7, 11.8], ["Ge", 72.6, 13.6],
  ["As", 74.9, 13.1], ["Se", 79.0, 16.5], ["Br", 79.9, 23.5], ["Kr", 83.8, 27.1],
  ["Rb", 85.5, 55.9], ["Sr", 87.6, 33.7], ["Y", 88.9, 24.8], ["Zr", 91.2, 14.1],
  ["Nb", 92.9, 10.8], ["Mo", 95.9, 9.4], ["Ru", 101.1, 8.3], ["Rh", 102.9, 8.3],
  ["Pd", 106.4, 8.9], ["Ag", 107.9, 10.3], ["Cd", 112.4, 13.0], ["In", 114.8, 15.7],
  ["Sn", 118.7, 16.3], ["Sb", 121.8, 18.4], ["Te", 127.6, 20.5], ["I", 126.9, 25.7],
  ["Xe", 131.3, 37.3], ["Cs", 132.9, 70.0], ["Ba", 137.3, 39.0], ["La", 138.9, 22.5],
] as const;

export function LotharMeyerNCERTCurveV3() {
  const width = 1200;
  const height = 610;
  const left = 112;
  const right = 36;
  const top = 62;
  const bottom = 76;
  const maxX = 145;
  const maxY = 75;

  const mapX = (value: number) =>
    left + (value / maxX) * (width - left - right);

  const mapY = (value: number) =>
    top + (1 - value / maxY) * (height - top - bottom);

  const linePath = MEYER_DATA.map(
    (entry, index) =>
      `${index === 0 ? "M" : "L"} ${mapX(entry[1]).toFixed(2)} ${mapY(entry[2]).toFixed(2)}`,
  ).join(" ");

  const labelAbove = new Set([
    "Li", "N", "F", "Ne", "Na", "P", "Ar", "K", "Br", "Kr", "Rb", "Sr",
    "As", "Se", "In", "Sb", "Te", "I", "Xe", "Cs",
  ]);

  return (
    <FigureShell
      title="Lothar Meyer’s Curve"
      caption="Original NCERT-style reconstruction of atomic volume against atomic weight, with labelled elements, alkali-metal maxima and transition-region minima."
    >
      <p style={{ color: C.muted, lineHeight: 1.68, margin: "0 0 12px" }}>
        The repeating wave pattern shows that atomic volume is periodic rather than monotonic. Alkali metals lie near major maxima, while many transition metals occupy broad minima.
      </p>

      <div style={{ overflowX: "auto" }}>
        <svg
          role="img"
          aria-label="NCERT-style Lothar Meyer atomic-volume curve"
          viewBox={`0 0 ${width} ${height}`}
          style={{
            display: "block",
            width: "100%",
            minWidth: 1020,
            height: "auto",
          }}
        >
          <rect x="0" y="0" width={width} height={height} fill="#f0edb9" rx="24" />

          <text
            x={width / 2}
            y="42"
            textAnchor="middle"
            fill="#d36d22"
            fontSize="31"
            fontWeight="800"
          >
            Lothar Meyer’s Curve
          </text>

          {[20, 40, 60, 80, 100, 120, 140].map((value) => (
            <g key={`x-${value}`}>
              <line
                x1={mapX(value)}
                y1={height - bottom}
                x2={mapX(value)}
                y2={height - bottom + 8}
                stroke="#7bb0bd"
                strokeWidth="2"
              />
              <text
                x={mapX(value)}
                y={height - 42}
                textAnchor="middle"
                fill={C.ink}
                fontSize="14"
              >
                {value}
              </text>
            </g>
          ))}

          {[10, 20, 30, 40, 50, 60, 70].map((value) => (
            <g key={`y-${value}`}>
              <line
                x1={left - 8}
                y1={mapY(value)}
                x2={left}
                y2={mapY(value)}
                stroke="#7bb0bd"
                strokeWidth="2"
              />
              <text
                x={left - 14}
                y={mapY(value) + 5}
                textAnchor="end"
                fill={C.ink}
                fontSize="14"
              >
                {value}
              </text>
            </g>
          ))}

          <line
            x1={left}
            y1={height - bottom}
            x2={width - right}
            y2={height - bottom}
            stroke="#7bb0bd"
            strokeWidth="2.4"
          />
          <line
            x1={left}
            y1={height - bottom}
            x2={left}
            y2={top}
            stroke="#7bb0bd"
            strokeWidth="2.4"
          />

          <path
            d={linePath}
            fill="none"
            stroke={C.blue}
            strokeWidth="3.3"
            strokeLinejoin="round"
            strokeLinecap="round"
          />

          {MEYER_DATA.map(([symbol, xValue, yValue], index) => {
            const x = mapX(xValue);
            const y = mapY(yValue);
            const dy = labelAbove.has(symbol) ? -11 : 18;
            const dx =
              symbol === "Ar" ? -8 :
              symbol === "K" ? 10 :
              symbol === "Ni" ? -9 :
              symbol === "Co" ? 9 :
              symbol === "Br" ? -7 :
              symbol === "Kr" ? 8 :
              symbol === "Te" ? -8 :
              symbol === "I" ? 8 :
              0;

            return (
              <g key={`${symbol}-${index}`}>
                <circle cx={x} cy={y} r="4.2" fill={C.orange} />
                <text
                  x={x + dx}
                  y={y + dy}
                  textAnchor="middle"
                  fill={C.ink}
                  fontSize="12"
                  fontWeight="700"
                >
                  {symbol}
                </text>
              </g>
            );
          })}

          <text
            x="32"
            y={height / 2}
            transform={`rotate(-90 32 ${height / 2})`}
            textAnchor="middle"
            fill="#d36d22"
            fontSize="22"
            fontWeight="800"
          >
            Atomic Volume (cm³)
          </text>

          <text
            x={width / 2}
            y={height - 10}
            textAnchor="middle"
            fill="#d36d22"
            fontSize="22"
            fontWeight="800"
          >
            Atomic Weight
          </text>
        </svg>
      </div>
    </FigureShell>
  );
}
