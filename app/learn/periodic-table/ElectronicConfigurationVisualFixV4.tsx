"use client";

import React from "react";

const C = {
  bg: "#091725",
  panel: "#142a3f",
  panel2: "#1a334b",
  border: "#35546f",
  text: "#f7fbff",
  dim: "#d6e4ef",
  cyan: "#69ddff",
  blue: "#8fc7ff",
  gold: "#ffd166",
  green: "#8ce3c6",
  coral: "#ff9a7a",
  mono: "'SFMono-Regular', Consolas, monospace",
  sans: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
};

function BoxRow({ boxes }: { boxes: string[] }) {
  return (
    <span style={{ display: "inline-flex", gap: 4, verticalAlign: "middle" }}>
      {boxes.map((value, index) => (
        <span
          key={`${value}-${index}`}
          style={{
            width: 42,
            height: 42,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            border: `1px solid ${C.coral}`,
            borderRadius: 8,
            background: "#102237",
            color: C.text,
            fontSize: "1rem",
            fontWeight: 850,
          }}
        >
          {value || " "}
        </span>
      ))}
    </span>
  );
}

export function MadelungGuideV4() {
  const nodes = [
    ["1s", 126, 70],
    ["2s", 126, 140], ["2p", 286, 140],
    ["3s", 126, 210], ["3p", 286, 210], ["3d", 446, 210],
    ["4s", 126, 280], ["4p", 286, 280], ["4d", 446, 280], ["4f", 606, 280],
    ["5s", 126, 350], ["5p", 286, 350], ["5d", 446, 350], ["5f", 606, 350],
    ["6s", 126, 420], ["6p", 286, 420], ["6d", 446, 420],
    ["7s", 126, 490], ["7p", 286, 490],
  ] as const;

  const diagonals = [
    "M196 28 L66 112",
    "M196 98 L66 182",
    "M356 98 L66 252",
    "M356 168 L66 322",
    "M516 168 L66 392",
    "M516 238 L66 462",
    "M676 238 L66 532",
    "M676 308 L226 532",
  ];

  const sequence = [
    "1s", "2s", "2p", "3s", "3p", "4s", "3d", "4p", "5s",
    "4d", "5p", "6s", "4f", "5d", "6p", "7s", "5f", "6d", "7p",
  ];

  return (
    <figure style={{ margin: "18px 0" }}>
      <h3
        style={{
          margin: "0 0 7px",
          color: C.text,
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontSize: "clamp(1.3rem, 2.4vw, 1.72rem)",
        }}
      >
        Madelung diagonal guide
      </h3>

      <p style={{ color: C.dim, fontSize: "1.04rem", lineHeight: 1.7, margin: "0 0 12px" }}>
        Follow each cyan arrow from its upper-right end toward the lower-left arrowhead. The arrows remain behind the orbital circles, so every label stays fully visible.
      </p>

      <div
        style={{
          width: "min(100%, 850px)",
          margin: "0 auto",
          overflowX: "auto",
          border: `1px solid ${C.border}`,
          borderRadius: 18,
          background: C.panel,
          padding: 12,
        }}
      >
        <svg
          role="img"
          aria-label="Clear Madelung diagonal orbital-filling guide"
          viewBox="0 0 740 560"
          style={{
            display: "block",
            width: "100%",
            minWidth: 620,
            height: "auto",
            pointerEvents: "none",
          }}
        >
          <defs>
            <marker
              id="madArrowV4"
              viewBox="0 0 12 12"
              refX="10"
              refY="6"
              markerWidth="9"
              markerHeight="9"
              orient="auto"
            >
              <path d="M0 0 L12 6 L0 12 z" fill={C.cyan} />
            </marker>
          </defs>

          {diagonals.map((pathValue) => (
            <path
              key={pathValue}
              d={pathValue}
              fill="none"
              stroke={C.cyan}
              strokeWidth="3.6"
              strokeLinecap="round"
              markerEnd="url(#madArrowV4)"
              opacity="0.92"
            />
          ))}

          {nodes.map(([label, x, y]) => (
            <g key={label}>
              <circle
                cx={x}
                cy={y}
                r="29"
                fill={C.bg}
                stroke={C.blue}
                strokeWidth="3.6"
              />
              <text
                x={x}
                y={y + 8}
                textAnchor="middle"
                fill="#ffffff"
                fontFamily={C.sans}
                fontSize="22"
                fontWeight="900"
              >
                {label}
              </text>
            </g>
          ))}
        </svg>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px 9px",
          marginTop: 13,
          padding: "13px 15px",
          border: `1px solid ${C.gold}`,
          borderRadius: 13,
          background: "rgba(255,209,102,.08)",
        }}
      >
        {sequence.map((orbital, index) => (
          <React.Fragment key={orbital}>
            <span
              style={{
                color: C.gold,
                fontFamily: C.mono,
                fontSize: "clamp(.96rem, 1.7vw, 1.1rem)",
                fontWeight: 850,
              }}
            >
              {orbital}
            </span>
            {index < sequence.length - 1 ? (
              <span style={{ color: C.cyan, fontWeight: 900 }}>→</span>
            ) : null}
          </React.Fragment>
        ))}
      </div>

      <figcaption style={{ color: C.dim, fontSize: ".97rem", lineHeight: 1.62, marginTop: 10 }}>
        This is a practical build-up guide, not a universal fixed orbital-energy ranking for every atom, ion or excited state.
      </figcaption>
    </figure>
  );
}

export function ExchangeCountingGuideV4() {
  const rows = [
    {
      configuration: "3d⁴",
      boxes: ["↑", "↑", "↑", "↑", ""],
      up: 4,
      down: 0,
      pairs: 0,
      result: "C(4,2) + C(0,2) = 6",
    },
    {
      configuration: "3d⁷",
      boxes: ["↑↓", "↑↓", "↑", "↑", "↑"],
      up: 5,
      down: 2,
      pairs: 2,
      result: "C(5,2) + C(2,2) = 10 + 1 = 11",
    },
    {
      configuration: "3d⁸",
      boxes: ["↑↓", "↑↓", "↑↓", "↑", "↑"],
      up: 5,
      down: 3,
      pairs: 3,
      result: "C(5,2) + C(3,2) = 10 + 3 = 13",
    },
  ];

  return (
    <section style={{ marginTop: 22 }}>
      <h3 style={{ color: C.text, fontFamily: "Georgia, 'Times New Roman', serif", fontSize: "1.55rem", margin: "0 0 10px" }}>
        Pairing and exchange counting
      </h3>

      <p style={{ color: C.dim, fontSize: "1.04rem", lineHeight: 1.72, margin: "0 0 14px" }}>
        <strong style={{ color: C.text }}>Pairing count</strong> is simply the number of orbital boxes containing two electrons, ↑↓.
      </p>

      <div
        style={{
          border: `1px solid ${C.border}`,
          borderLeft: `4px solid ${C.green}`,
          borderRadius: 14,
          background: C.panel2,
          padding: "15px 17px",
          color: C.text,
          fontSize: "1.04rem",
          lineHeight: 1.7,
          marginBottom: 16,
        }}
      >
        <strong>Npair = number of doubly occupied orbital boxes.</strong>
      </div>

      <h4 style={{ color: C.cyan, fontSize: "1.22rem", margin: "18px 0 8px" }}>
        What does exchange counting mean?
      </h4>

      <p style={{ color: C.dim, fontSize: "1.04rem", lineHeight: 1.72 }}>
        An exchange pair is one possible pair of electrons having the <strong style={{ color: C.text }}>same spin direction</strong> within the same degenerate subshell. No electrons are literally being moved or swapped in this counting method.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 245px), 1fr))",
          gap: 12,
          margin: "15px 0",
        }}
      >
        {[
          ["1 · Draw the Hund pattern", "Fill separate orbitals with parallel spins before pairing."],
          ["2 · Count ↑ and ↓ electrons", "Let n↑ be the number of upward-spin electrons and n↓ the number of downward-spin electrons."],
          ["3 · Form same-spin pairs", "Among n electrons of one spin, the number of distinct pairs is C(n,2) = n(n − 1)/2."],
        ].map(([title, body]) => (
          <div
            key={title}
            style={{
              minHeight: 138,
              border: `1px solid ${C.border}`,
              borderTop: `3px solid ${C.cyan}`,
              borderRadius: 14,
              background: C.panel2,
              padding: 15,
            }}
          >
            <strong style={{ color: C.text, display: "block", marginBottom: 7 }}>{title}</strong>
            <span style={{ color: C.dim, lineHeight: 1.65 }}>{body}</span>
          </div>
        ))}
      </div>

      <div
        style={{
          border: `1px solid ${C.gold}`,
          borderRadius: 14,
          background: "rgba(255,209,102,.08)",
          padding: "16px",
          color: C.text,
          textAlign: "center",
          fontFamily: C.mono,
          fontSize: "clamp(1rem, 2vw, 1.18rem)",
          fontWeight: 800,
          lineHeight: 1.8,
          margin: "15px 0 18px",
        }}
      >
        Nex = C(n↑, 2) + C(n↓, 2)
        <br />
        = n↑(n↑ − 1)/2 + n↓(n↓ − 1)/2
      </div>

      <div style={{ overflowX: "auto", border: `1px solid ${C.border}`, borderRadius: 16 }}>
        <table style={{ width: "100%", minWidth: 920, borderCollapse: "collapse", color: C.text }}>
          <thead>
            <tr style={{ background: "#213b57" }}>
              {["Configuration", "Hund pattern", "n↑", "n↓", "Npair", "Exchange count"].map((heading) => (
                <th
                  key={heading}
                  style={{
                    padding: "14px 13px",
                    textAlign: "left",
                    color: C.gold,
                    borderBottom: `1px solid ${C.border}`,
                  }}
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={row.configuration} style={{ background: index % 2 ? "#142940" : "#102338" }}>
                <td style={{ padding: 13, borderBottom: `1px solid ${C.border}`, fontWeight: 850 }}>{row.configuration}</td>
                <td style={{ padding: 13, borderBottom: `1px solid ${C.border}` }}><BoxRow boxes={row.boxes} /></td>
                <td style={{ padding: 13, borderBottom: `1px solid ${C.border}` }}>{row.up}</td>
                <td style={{ padding: 13, borderBottom: `1px solid ${C.border}` }}>{row.down}</td>
                <td style={{ padding: 13, borderBottom: `1px solid ${C.border}` }}>{row.pairs}</td>
                <td style={{ padding: 13, borderBottom: `1px solid ${C.border}`, color: C.dim }}>{row.result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <aside
        style={{
          marginTop: 16,
          borderLeft: `4px solid ${C.coral}`,
          borderRadius: 14,
          background: "rgba(255,154,122,.08)",
          padding: "15px 17px",
          color: C.dim,
          fontSize: "1.02rem",
          lineHeight: 1.7,
        }}
      >
        <strong style={{ color: C.coral }}>Interpretation limit:</strong> Nex is a transparent counting tool for qualitative exchange stabilisation. It is not a complete total-energy equation and cannot alone prove every observed ground-state configuration.
      </aside>
    </section>
  );
}
