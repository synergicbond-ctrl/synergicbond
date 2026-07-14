"use client";

import React from "react";

const T = {
  bg: "#081521",
  panel: "#10263a",
  panel2: "#17334d",
  line: "#355876",
  text: "#f5f9ff",
  dim: "#d3dfeb",
  cyan: "#74dcff",
  gold: "#ffd166",
  mint: "#a9e8c2",
};

function SectionFrame({
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
        border: "1px solid " + T.line,
        borderRadius: 22,
        background: "linear-gradient(145deg, " + T.panel2 + ", " + T.panel + ")",
        boxShadow: "0 18px 42px rgba(0,0,0,.20)",
      }}
    >
      <h3
        style={{
          margin: "0 0 8px",
          color: T.text,
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
          color: T.dim,
          fontSize: ".98rem",
          lineHeight: 1.65,
        }}
      >
        {caption}
      </figcaption>
    </figure>
  );
}

function MendeleevNCERTTable() {
  const groups = ["0", "I", "II", "III", "IV", "V", "VI", "VII", "VIII"];

  const rows = [
    ["Helium\nHe\n4.0", "Hydrogen\nH\n1.008", "-", "-", "-", "-", "-", "-", "-"],
    ["Neon\nNe\n19.9", "Lithium\nLi\n7.03", "Beryllium\nBe\n9.1", "Boron\nB\n11.0", "Carbon\nC\n12.0", "Nitrogen\nN\n14.04", "Oxygen\nO\n16.00", "Fluorine\nF\n19.0", "-"],
    ["Argon\nAr\n38", "Sodium\nNa\n23.5", "Magnesium\nMg\n24.3", "Aluminium\nAl\n27.0", "Silicon\nSi\n28.4", "Phosphorus\nP\n31.0", "Sulphur\nS\n32.06", "Chlorine\nCl\n35.45", "-"],
    ["Krypton\nKr\n81.8", "Potassium\nK\n39.1\nCopper\nCu\n63.6", "Calcium\nCa\n40.1\nZinc\nZn\n65.4", "Scandium\nSc\n44.1\nGallium\nGa\n70.0", "Titanium\nTi\n48.1\nGermanium\nGe\n72.3", "Vanadium\nV\n51.4\nArsenic\nAs\n75", "Chromium\nCr\n52.1\nSelenium\nSe\n79", "Manganese\nMn\n55.0\nBromine\nBr\n79.95", "Iron\nFe\n55.9   Cobalt\nCo\n59   Nickel\nNi\n59   (Cu)"],
    ["Xenon\nXe\n128", "Rubidium\nRb\n85.4\nSilver\nAg\n107.9", "Strontium\nSr\n87.6\nCadmium\nCd\n112.4", "Yttrium\nY\n89.0\nIndium\nIn\n114.0", "Zirconium\nZr\n90.6\nTin\nSn\n119.0", "Niobium\nNb\n94.0\nAntimony\nSb\n120.0", "Molybdenum\nMo\n96.0\nTellurium\nTe\n127.6", "-\nIodine\nI\n126.9", "Ruthenium\nRu\n101.7   Rhodium\nRh\n103.0   Palladium\nPd\n106.5   (Ag)"],
    ["-", "Caesium\nCs\n132.9\nGold\nAu\n197.2", "Barium\nBa\n137.4\nMercury\nHg\n200.0", "Lanthanum\nLa\n139\nThallium\nTl\n204.1", "Cerium\nCe\n140\nLead\nPb\n206.9", "-\nBismuth\nBi\n208", "-", "-", "Osmium\nOs\n191   Iridium\nIr\n193   Platinum\nPt\n194.9   (Au)"],
    ["-", "-", "Radium\nRa\n224", "-", "Thorium\nTh\n232", "-", "Uranium\nU\n239", "-", "-"],
  ];

  const seriesNumbers = ["1", "2", "3", "4-5", "6-7", "8-11", "12"];
  const oxides = ["R", "R₂O", "RO", "R₂O₃", "RO₂", "R₂O₅", "RO₃", "R₂O₇", "RO₄"];
  const hydrides = ["", "RH", "RH₂", "RH₃", "RH₄", "RH₃", "RH₂", "RH", ""];

  return (
    <SectionFrame
      title="Mendeleev’s periodic table published earlier"
      caption="NCERT-style reconstruction of the short-form Mendeleev table showing groups, series, and the characteristic oxide / gaseous hydride pattern used to emphasise periodicity in properties."
    >
      <p style={{ color: T.dim, lineHeight: 1.68, margin: "0 0 12px" }}>
        This figure is included in the NCERT discussion of the development of the periodic table. It arranges elements into groups and series, and reflects the historical classification based mainly on relative atomic mass and recurring chemical properties.
      </p>

      <div style={{ overflowX: "auto" }}>
        <svg
          role="img"
          aria-label="NCERT-style Mendeleev periodic table"
          viewBox="0 0 1260 860"
          style={{ display: "block", width: "100%", minWidth: 1080, height: "auto" }}
        >
          <text x="630" y="34" textAnchor="middle" fill={T.cyan} fontSize="26" fontWeight="800">
            PERIODIC SYSTEM OF THE ELEMENTS IN GROUPS AND SERIES
          </text>

          <rect x="24" y="72" width="78" height="42" fill="#d3d3df" stroke="#21394e" strokeWidth="1.4" />
          <text x="63" y="99" textAnchor="middle" fill="#172532" fontSize="15" fontWeight="800">
            SERIES
          </text>

          <rect x="102" y="72" width="1128" height="22" fill="#d8d8e6" stroke="#21394e" strokeWidth="1.4" />
          <text x="666" y="88" textAnchor="middle" fill="#172532" fontSize="16" fontWeight="800">
            GROUPS OF ELEMENTS
          </text>

          {groups.map((g, i) => {
            const x = 102 + i * 125.33;
            return (
              <g key={g}>
                <rect x={x} y="94" width="125.33" height="22" fill="#d8d8e6" stroke="#21394e" strokeWidth="1.4" />
                <text x={x + 62.665} y="109" textAnchor="middle" fill="#172532" fontSize="15" fontWeight="800">
                  {g}
                </text>
              </g>
            );
          })}

          {rows.map((row, r) => {
            const y = 116 + r * 92;
            return (
              <g key={"r-" + r}>
                <rect x="24" y={y} width="78" height="92" fill="#d8e6c7" stroke="#21394e" strokeWidth="1.4" />
                <text x="63" y={y + 52} textAnchor="middle" fill="#172532" fontSize="17" fontWeight="800">
                  {seriesNumbers[r]}
                </text>

                {row.map((cell, c) => {
                  const x = 102 + c * 125.33;
                  const fill = c % 2 === 0 ? "#f1dbe7" : "#dfead0";
                  const lines = cell.split("\n");
                  return (
                    <g key={"c-" + r + "-" + c}>
                      <rect x={x} y={y} width="125.33" height="92" fill={fill} stroke="#21394e" strokeWidth="1.4" />
                      {lines.map((line, idx) => (
                        <text
                          key={"t-" + idx}
                          x={x + 62.665}
                          y={y + 18 + idx * 18}
                          textAnchor="middle"
                          fill="#222"
                          fontSize={line.length > 24 ? "11.5" : "13.5"}
                          fontWeight={idx === 0 ? "600" : "500"}
                        >
                          {line}
                        </text>
                      ))}
                    </g>
                  );
                })}
              </g>
            );
          })}

          <rect x="24" y="760" width="78" height="76" fill="#d8e6c7" stroke="#21394e" strokeWidth="1.4" />

          <text x="673" y="782" textAnchor="middle" fill="#f2f2f2" fontSize="14" fontWeight="700">
            HIGHER SALINE OXIDES
          </text>
          <text x="673" y="819" textAnchor="middle" fill="#f2f2f2" fontSize="14" fontWeight="700">
            HIGHER GASEOUS HYDROGEN COMPOUNDS
          </text>

          {oxides.map((value, i) => {
            const x = 102 + i * 125.33;
            return (
              <g key={"oxide-" + i}>
                <rect x={x} y="760" width="125.33" height="76" fill={i % 2 === 0 ? "#d8e6c7" : "#f1dbe7"} stroke="#21394e" strokeWidth="1.4" />
                <text x={x + 62.665} y="792" textAnchor="middle" fill="#222" fontSize="16" fontWeight="700">
                  {value}
                </text>
                <text x={x + 62.665} y="827" textAnchor="middle" fill="#222" fontSize="16" fontWeight="700">
                  {hydrides[i]}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </SectionFrame>
  );
}

function LotharMeyerNCERTCurve() {
  const data = [
    ["Li", 7, 15], ["Be", 9, 7], ["B", 11, 5], ["C", 12, 8], ["N", 14, 16], ["O", 16, 13], ["F", 19, 16], ["Ne", 20, 18],
    ["Na", 23, 26], ["Mg", 24, 17], ["Al", 27, 11], ["Si", 28, 14], ["P", 31, 19], ["S", 32, 15], ["Cl", 35.5, 19], ["Ar", 40, 26],
    ["K", 39.1, 47], ["Ca", 40.1, 28], ["Ti", 48.1, 14], ["V", 51.4, 12], ["Cr", 52.1, 10], ["Fe", 55.9, 8.5], ["Ni", 58.7, 7.5], ["Co", 59, 7.8],
    ["Cu", 63.6, 8.5], ["Zn", 65.4, 9.8], ["Ga", 70, 11], ["Ge", 72.3, 12.5], ["As", 75, 13.2], ["Se", 79, 13.5],
    ["Br", 79.95, 25.5], ["Kr", 83.8, 30.5], ["Rb", 85.4, 56], ["Sr", 87.6, 33], ["Y", 89, 24.5], ["Zr", 90.6, 15.5], ["Nb", 94, 11.3], ["Mo", 96, 9.2], ["Rh", 103, 7.2], ["Pd", 106.5, 8.2], ["Ag", 107.9, 12], ["Cd", 112.4, 18.5], ["In", 114.8, 20.5], ["Sn", 119, 25], ["Sb", 121.8, 29.5], ["Te", 127.6, 35], ["I", 126.9, 41], ["Xe", 131.3, 66], ["Ba", 137.4, 39]
  ] as const;

  const width = 1180;
  const height = 600;
  const left = 100;
  const right = 34;
  const top = 34;
  const bottom = 76;
  const plotW = width - left - right;
  const plotH = height - top - bottom;

  const maxX = 140;
  const maxY = 75;

  const mapX = (x: number) => left + (x / maxX) * plotW;
  const mapY = (y: number) => top + (1 - y / maxY) * plotH;

  const path = data
    .map((p, i) => (i === 0 ? "M " : " L ") + mapX(p[1]).toFixed(2) + " " + mapY(p[2]).toFixed(2))
    .join("");

  const labels = new Set(["Li","Na","K","Rb","Xe","Ba","Be","B","C","N","O","F","Ne","Mg","Al","Si","P","S","Cl","Ar","Ca","Ti","V","Cr","Fe","Ni","Co","Cu","Zn","Ga","Ge","As","Se","Br","Kr","Sr","Y","Zr","Nb","Mo","Rh","Pd","Ag","Cd","In","Sn","Sb","Te","I"]);

  return (
    <SectionFrame
      title="Lothar Meyer’s Curve"
      caption="NCERT-style reconstruction of Lothar Meyer’s atomic-volume curve, showing periodic recurrence in physical properties when atomic volume is plotted against atomic weight."
    >
      <p style={{ color: T.dim, lineHeight: 1.68, margin: "0 0 12px" }}>
        This curve is the historical evidence discussed alongside Mendeleev’s work. Peaks occur prominently for alkali metals, while troughs appear in the transition region, demonstrating periodicity in a physical property.
      </p>

      <div style={{ overflowX: "auto" }}>
        <svg
          role="img"
          aria-label="NCERT-style Lothar Meyer curve"
          viewBox={"0 0 " + width + " " + height}
          style={{ display: "block", width: "100%", minWidth: 980, height: "auto" }}
        >
          <rect x="0" y="0" width={width} height={height} fill="#ece8b8" rx="24" />
          <text x={width / 2} y="42" textAnchor="middle" fill="#cf7b2f" fontSize="28" fontWeight="800">
            Lothar Meyer’s Curve
          </text>

          {[10,20,40,60,80,100,120,140].map((x) => (
            <text key={"x-"+x} x={mapX(x)} y={height - 28} textAnchor="middle" fill="#8c6a1c" fontSize="14">
              {x}
            </text>
          ))}

          {[10,20,30,40,50,60,70].map((y) => (
            <text key={"y-"+y} x={left - 14} y={mapY(y) + 5} textAnchor="end" fill="#8c6a1c" fontSize="14">
              {y}
            </text>
          ))}

          <line x1={left} y1={height - bottom} x2={width - right} y2={height - bottom} stroke="#95b9c7" strokeWidth="2.5" />
          <line x1={left} y1={height - bottom} x2={left} y2={top + 20} stroke="#95b9c7" strokeWidth="2.5" />

          <path d={path} fill="none" stroke="#476bc3" strokeWidth="3.5" strokeLinejoin="round" strokeLinecap="round" />

          {data.map((p) => (
            <g key={p[0]}>
              <circle cx={mapX(p[1])} cy={mapY(p[2])} r="3.9" fill="#e98518" />
              {labels.has(p[0]) ? (
                <text
                  x={mapX(p[1])}
                  y={mapY(p[2]) - 9}
                  textAnchor="middle"
                  fill="#1f1f1f"
                  fontSize={p[0].length > 2 ? "10.5" : "12"}
                  fontWeight="700"
                >
                  {p[0]}
                </text>
              ) : null}
            </g>
          ))}

          <text x="26" y={height / 2} transform={"rotate(-90 26 " + height / 2 + ")"} textAnchor="middle" fill="#cf7b2f" fontSize="22" fontWeight="800">
            Atomic Volume (cm³)
          </text>

          <text x={width / 2} y={height - 8} textAnchor="middle" fill="#cf7b2f" fontSize="22" fontWeight="800">
            Atomic Weight
          </text>
        </svg>
      </div>
    </SectionFrame>
  );
}

export default function PeriodicityNCERTHistoryFigures() {
  return (
    <section
      style={{
        width: "100%",
        margin: "0 0 28px",
        padding: "clamp(16px, 3vw, 28px)",
        border: "1px solid " + T.line,
        borderRadius: 26,
        background: "linear-gradient(180deg, " + T.bg + ", #0b1d2d)",
        color: T.text,
      }}
    >
      <div
        style={{
          color: T.gold,
          fontSize: ".82rem",
          fontWeight: 900,
          letterSpacing: ".12em",
          textTransform: "uppercase",
        }}
      >
        NCERT historical visuals
      </div>

      <h2
        style={{
          margin: "9px 0 8px",
          color: T.text,
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontSize: "clamp(1.9rem, 4vw, 3rem)",
        }}
      >
        Mendeleev periodic table and Lothar Meyer curve
      </h2>

      <p
        style={{
          maxWidth: 980,
          margin: "0 0 22px",
          color: T.dim,
          fontSize: "clamp(1rem, 1.4vw, 1.1rem)",
          lineHeight: 1.72,
        }}
      >
        These two figures are inserted in NCERT-style form only, without modifying unrelated sections.
      </p>

      <div style={{ display: "grid", gap: 24 }}>
        <MendeleevNCERTTable />
        <LotharMeyerNCERTCurve />
      </div>
    </section>
  );
}
