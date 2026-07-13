"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";

type Block = "s" | "p" | "d" | "f";
type BasicElement = { z: number; symbol: string; name: string };
type ElementRecord = BasicElement & { period: number; group: number; row: number; col: number; block: Block; family: string; state: string; valencePattern: string; studyCue: string; };

const ELEMENT_BASICS: BasicElement[] = [
  { z: 1, symbol: "H", name: "Hydrogen" },
  { z: 2, symbol: "He", name: "Helium" },
  { z: 3, symbol: "Li", name: "Lithium" },
  { z: 4, symbol: "Be", name: "Beryllium" },
  { z: 5, symbol: "B", name: "Boron" },
  { z: 6, symbol: "C", name: "Carbon" },
  { z: 7, symbol: "N", name: "Nitrogen" },
  { z: 8, symbol: "O", name: "Oxygen" },
  { z: 9, symbol: "F", name: "Fluorine" },
  { z: 10, symbol: "Ne", name: "Neon" },
  { z: 11, symbol: "Na", name: "Sodium" },
  { z: 12, symbol: "Mg", name: "Magnesium" },
  { z: 13, symbol: "Al", name: "Aluminium" },
  { z: 14, symbol: "Si", name: "Silicon" },
  { z: 15, symbol: "P", name: "Phosphorus" },
  { z: 16, symbol: "S", name: "Sulfur" },
  { z: 17, symbol: "Cl", name: "Chlorine" },
  { z: 18, symbol: "Ar", name: "Argon" },
  { z: 19, symbol: "K", name: "Potassium" },
  { z: 20, symbol: "Ca", name: "Calcium" },
  { z: 21, symbol: "Sc", name: "Scandium" },
  { z: 22, symbol: "Ti", name: "Titanium" },
  { z: 23, symbol: "V", name: "Vanadium" },
  { z: 24, symbol: "Cr", name: "Chromium" },
  { z: 25, symbol: "Mn", name: "Manganese" },
  { z: 26, symbol: "Fe", name: "Iron" },
  { z: 27, symbol: "Co", name: "Cobalt" },
  { z: 28, symbol: "Ni", name: "Nickel" },
  { z: 29, symbol: "Cu", name: "Copper" },
  { z: 30, symbol: "Zn", name: "Zinc" },
  { z: 31, symbol: "Ga", name: "Gallium" },
  { z: 32, symbol: "Ge", name: "Germanium" },
  { z: 33, symbol: "As", name: "Arsenic" },
  { z: 34, symbol: "Se", name: "Selenium" },
  { z: 35, symbol: "Br", name: "Bromine" },
  { z: 36, symbol: "Kr", name: "Krypton" },
  { z: 37, symbol: "Rb", name: "Rubidium" },
  { z: 38, symbol: "Sr", name: "Strontium" },
  { z: 39, symbol: "Y", name: "Yttrium" },
  { z: 40, symbol: "Zr", name: "Zirconium" },
  { z: 41, symbol: "Nb", name: "Niobium" },
  { z: 42, symbol: "Mo", name: "Molybdenum" },
  { z: 43, symbol: "Tc", name: "Technetium" },
  { z: 44, symbol: "Ru", name: "Ruthenium" },
  { z: 45, symbol: "Rh", name: "Rhodium" },
  { z: 46, symbol: "Pd", name: "Palladium" },
  { z: 47, symbol: "Ag", name: "Silver" },
  { z: 48, symbol: "Cd", name: "Cadmium" },
  { z: 49, symbol: "In", name: "Indium" },
  { z: 50, symbol: "Sn", name: "Tin" },
  { z: 51, symbol: "Sb", name: "Antimony" },
  { z: 52, symbol: "Te", name: "Tellurium" },
  { z: 53, symbol: "I", name: "Iodine" },
  { z: 54, symbol: "Xe", name: "Xenon" },
  { z: 55, symbol: "Cs", name: "Caesium" },
  { z: 56, symbol: "Ba", name: "Barium" },
  { z: 57, symbol: "La", name: "Lanthanum" },
  { z: 58, symbol: "Ce", name: "Cerium" },
  { z: 59, symbol: "Pr", name: "Praseodymium" },
  { z: 60, symbol: "Nd", name: "Neodymium" },
  { z: 61, symbol: "Pm", name: "Promethium" },
  { z: 62, symbol: "Sm", name: "Samarium" },
  { z: 63, symbol: "Eu", name: "Europium" },
  { z: 64, symbol: "Gd", name: "Gadolinium" },
  { z: 65, symbol: "Tb", name: "Terbium" },
  { z: 66, symbol: "Dy", name: "Dysprosium" },
  { z: 67, symbol: "Ho", name: "Holmium" },
  { z: 68, symbol: "Er", name: "Erbium" },
  { z: 69, symbol: "Tm", name: "Thulium" },
  { z: 70, symbol: "Yb", name: "Ytterbium" },
  { z: 71, symbol: "Lu", name: "Lutetium" },
  { z: 72, symbol: "Hf", name: "Hafnium" },
  { z: 73, symbol: "Ta", name: "Tantalum" },
  { z: 74, symbol: "W", name: "Tungsten" },
  { z: 75, symbol: "Re", name: "Rhenium" },
  { z: 76, symbol: "Os", name: "Osmium" },
  { z: 77, symbol: "Ir", name: "Iridium" },
  { z: 78, symbol: "Pt", name: "Platinum" },
  { z: 79, symbol: "Au", name: "Gold" },
  { z: 80, symbol: "Hg", name: "Mercury" },
  { z: 81, symbol: "Tl", name: "Thallium" },
  { z: 82, symbol: "Pb", name: "Lead" },
  { z: 83, symbol: "Bi", name: "Bismuth" },
  { z: 84, symbol: "Po", name: "Polonium" },
  { z: 85, symbol: "At", name: "Astatine" },
  { z: 86, symbol: "Rn", name: "Radon" },
  { z: 87, symbol: "Fr", name: "Francium" },
  { z: 88, symbol: "Ra", name: "Radium" },
  { z: 89, symbol: "Ac", name: "Actinium" },
  { z: 90, symbol: "Th", name: "Thorium" },
  { z: 91, symbol: "Pa", name: "Protactinium" },
  { z: 92, symbol: "U", name: "Uranium" },
  { z: 93, symbol: "Np", name: "Neptunium" },
  { z: 94, symbol: "Pu", name: "Plutonium" },
  { z: 95, symbol: "Am", name: "Americium" },
  { z: 96, symbol: "Cm", name: "Curium" },
  { z: 97, symbol: "Bk", name: "Berkelium" },
  { z: 98, symbol: "Cf", name: "Californium" },
  { z: 99, symbol: "Es", name: "Einsteinium" },
  { z: 100, symbol: "Fm", name: "Fermium" },
  { z: 101, symbol: "Md", name: "Mendelevium" },
  { z: 102, symbol: "No", name: "Nobelium" },
  { z: 103, symbol: "Lr", name: "Lawrencium" },
  { z: 104, symbol: "Rf", name: "Rutherfordium" },
  { z: 105, symbol: "Db", name: "Dubnium" },
  { z: 106, symbol: "Sg", name: "Seaborgium" },
  { z: 107, symbol: "Bh", name: "Bohrium" },
  { z: 108, symbol: "Hs", name: "Hassium" },
  { z: 109, symbol: "Mt", name: "Meitnerium" },
  { z: 110, symbol: "Ds", name: "Darmstadtium" },
  { z: 111, symbol: "Rg", name: "Roentgenium" },
  { z: 112, symbol: "Cn", name: "Copernicium" },
  { z: 113, symbol: "Nh", name: "Nihonium" },
  { z: 114, symbol: "Fl", name: "Flerovium" },
  { z: 115, symbol: "Mc", name: "Moscovium" },
  { z: 116, symbol: "Lv", name: "Livermorium" },
  { z: 117, symbol: "Ts", name: "Tennessine" },
  { z: 118, symbol: "Og", name: "Oganesson" },
];

const MAIN_ROWS: Array<Array<string | null>> = [
  ["H", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "He"],
  ["Li", "Be", null, null, null, null, null, null, null, null, null, null, "B", "C", "N", "O", "F", "Ne"],
  ["Na", "Mg", null, null, null, null, null, null, null, null, null, null, "Al", "Si", "P", "S", "Cl", "Ar"],
  ["K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr"],
  ["Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe"],
  ["Cs", "Ba", "La", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn"],
  ["Fr", "Ra", "Ac", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og"],
];

const INNER_ROWS = [
  ["Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu"],
  ["Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr"],
] as const;

const GAS = new Set<string>(["H", "He", "N", "O", "F", "Ne", "Cl", "Ar", "Kr", "Xe", "Rn"]);
const LIQUID = new Set<string>(["Br", "Hg"]);
const ALKALI = new Set<string>(["Li", "Na", "K", "Rb", "Cs", "Fr"]);
const ALKALINE = new Set<string>(["Be", "Mg", "Ca", "Sr", "Ba", "Ra"]);
const HALOGEN = new Set<string>(["F", "Cl", "Br", "I", "At", "Ts"]);
const NOBLE = new Set<string>(["He", "Ne", "Ar", "Kr", "Xe", "Rn", "Og"]);
const METALLOID = new Set<string>(["B", "Si", "Ge", "As", "Sb", "Te"]);
const REACTIVE_NONMETAL = new Set<string>(["H", "C", "N", "O", "P", "S", "Se"]);
const POST_TRANSITION = new Set<string>(["Al", "Ga", "In", "Tl", "Sn", "Pb", "Bi", "Po", "Nh", "Fl", "Mc", "Lv"]);
const LANTHANOID = new Set<string>(["La", ...INNER_ROWS[0]]);
const ACTINOID = new Set<string>(["Ac", ...INNER_ROWS[1]]);

const BLOCK_COLORS: Record<Block, string> = {
  s: "#7fb2e5",
  p: "#e8896b",
  d: "#7fd9b8",
  f: "#c9a4e0",
};

function getBlock(symbol: string, group: number, isInner: boolean): Block {
  if (isInner || symbol === "La" || symbol === "Ac") return "f";
  if (symbol === "He" || group <= 2) return "s";
  if (group >= 13) return "p";
  return "d";
}

function getFamily(symbol: string, group: number, block: Block): string {
  if (symbol === "H") return "Reactive non-metal";
  if (ALKALI.has(symbol)) return "Alkali metal";
  if (ALKALINE.has(symbol)) return "Alkaline-earth metal";
  if (HALOGEN.has(symbol)) return "Halogen";
  if (NOBLE.has(symbol)) return "Noble gas";
  if (LANTHANOID.has(symbol)) return "Lanthanoid";
  if (ACTINOID.has(symbol)) return "Actinoid";
  if (METALLOID.has(symbol)) return "Metalloid";
  if (REACTIVE_NONMETAL.has(symbol)) return "Reactive non-metal";
  if (POST_TRANSITION.has(symbol)) return "Post-transition metal";
  if (block === "d" || (group >= 3 && group <= 12)) return "Transition metal";
  return "Metal";
}

function getState(symbol: string, z: number): string {
  if (z >= 104) return "Not firmly established";
  if (GAS.has(symbol)) return "Gas";
  if (LIQUID.has(symbol)) return "Liquid";
  return "Solid";
}

function getValencePattern(symbol: string, period: number, group: number, block: Block): string {
  if (symbol === "H") return "1s¹";
  if (symbol === "He") return "1s²";
  if (block === "s") return group === 1 ? `ns¹ (n = ${period})` : `ns² (n = ${period})`;
  if (block === "p") return `ns²np${group - 12} (general group pattern)`;
  if (block === "d") return `(n−1)d¹–¹⁰ ns⁰–² (general transition-series pattern)`;
  return `(n−2)f¹–¹⁴ (n−1)d⁰–¹ ns² (general inner-transition pattern)`;
}

function getStudyCue(family: string, block: Block, group: number): string {
  if (family === "Alkali metal") return "One outer s electron; metallic character and reducing tendency are prominent.";
  if (family === "Alkaline-earth metal") return "Two outer s electrons; +2 is the characteristic simple-ion oxidation state.";
  if (family === "Halogen") return "One electron short of a noble-gas shell; electron attraction and oxidising tendency are central trends.";
  if (family === "Noble gas") return "Closed valence shell; very low ordinary chemical reactivity.";
  if (family === "Lanthanoid") return "4f-series chemistry is dominated by +3 ions and lanthanoid contraction.";
  if (family === "Actinoid") return "5f, 6d and 7s levels are close; radioactivity and variable oxidation states are important.";
  if (block === "d") return "Partly filled d levels support variable oxidation states, coloured ions, magnetism and catalysis.";
  if (family === "Metalloid") return "Intermediate metallic/non-metallic behaviour; bonding and conductivity depend strongly on structure.";
  if (group >= 13 && group <= 16) return "Across the p block, increasing effective nuclear charge strengthens non-metallic character.";
  return "Use its period, group and block together to predict size, ionisation and bonding behaviour.";
}

function buildElements(): ElementRecord[] {
  const positions = new Map<string, { period: number; group: number; row: number; col: number; inner: boolean }>();

  MAIN_ROWS.forEach((row, rowIndex) => {
    row.forEach((symbol, colIndex) => {
      if (symbol) positions.set(symbol, { period: rowIndex + 1, group: colIndex + 1, row: rowIndex + 1, col: colIndex + 1, inner: false });
    });
  });

  INNER_ROWS.forEach((row, innerIndex) => {
    row.forEach((symbol, index) => {
      positions.set(symbol, { period: innerIndex === 0 ? 6 : 7, group: 3, row: innerIndex + 9, col: index + 4, inner: true });
    });
  });

  return ELEMENT_BASICS.map((basic) => {
    const pos = positions.get(basic.symbol);
    if (!pos) throw new Error(`Missing periodic-table position for ${basic.symbol}`);
    const block = getBlock(basic.symbol, pos.group, pos.inner);
    const family = getFamily(basic.symbol, pos.group, block);
    return {
      ...basic,
      period: pos.period,
      group: pos.group,
      row: pos.row,
      col: pos.col,
      block,
      family,
      state: getState(basic.symbol, basic.z),
      valencePattern: getValencePattern(basic.symbol, pos.period, pos.group, block),
      studyCue: getStudyCue(family, block, pos.group),
    };
  });
}

const ELEMENTS = buildElements();
function ElementDialog({ element, onClose }: { element: ElementRecord; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const accent = BLOCK_COLORS[element.block];

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    closeRef.current?.focus();
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return createPortal(
    <div
      className="pt16Backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="pt16Dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="pt16-dialog-title"
        aria-describedby="pt16-dialog-description"
        style={{ borderColor: `${accent}88` }}
      >
        <header className="pt16DialogHeader">
          <div className="pt16HeroSymbol" style={{ borderColor: accent, color: accent }}>
            <small>{element.z}</small>
            <strong>{element.symbol}</strong>
          </div>
          <div>
            <div className="pt16Eyebrow">Element details</div>
            <h3 id="pt16-dialog-title">{element.name}</h3>
            <p id="pt16-dialog-description">Position, classification and configuration cue</p>
          </div>
          <button ref={closeRef} type="button" className="pt16Close" onClick={onClose} aria-label="Close element details">
            ×
          </button>
        </header>

        <div className="pt16Facts">
          <div><span>Atomic number</span><strong>{element.z}</strong></div>
          <div><span>Period</span><strong>{element.period}</strong></div>
          <div><span>Group</span><strong>{element.group}</strong></div>
          <div><span>Block</span><strong style={{ color: accent }}>{element.block}-block</strong></div>
          <div><span>Family</span><strong>{element.family}</strong></div>
          <div><span>Standard state</span><strong>{element.state}</strong></div>
        </div>

        <div className="pt16DetailBlock">
          <span>General valence pattern</span>
          <strong>{element.valencePattern}</strong>
          <p>This is a position-based pattern. Measured ground-state configurations can contain special cases, especially in the d and f blocks.</p>
        </div>

        <div className="pt16DetailBlock pt16Cue" style={{ borderLeftColor: accent }}>
          <span>Study cue</span>
          <p>{element.studyCue}</p>
        </div>

        <footer className="pt16DialogFooter">
          Click outside this panel or press <kbd>Esc</kbd> to close.
        </footer>
      </section>
    </div>,
    document.body,
  );
}

export function InteractivePeriodicTableV16() {
  const [selectedZ, setSelectedZ] = useState<number | null>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);
  const selected = useMemo(() => ELEMENTS.find((element) => element.z === selectedZ) ?? null, [selectedZ]);


  useEffect(() => {
    if (!selected) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selected]);

  const closeDialog = () => {
    setSelectedZ(null);
    window.setTimeout(() => lastTriggerRef.current?.focus(), 0);
  };

  return (
    <section className="pt16Shell" data-ui-version="interactive-periodic-table-v16" aria-label="Interactive modern periodic table">
      <div className="pt16Toolbar">
        <div>
          <strong>Interactive periodic table</strong>
          <span>Tap or click any element to open its details.</span>
        </div>
        <div className="pt16Hint" aria-hidden="true">Swipe horizontally on small screens →</div>
      </div>

      <div className="pt16Scroller" tabIndex={0} aria-label="Scrollable periodic table">
        <div className="pt16Grid">
          <div className="pt16SeriesLabel" style={{ gridColumn: "1 / span 3", gridRow: 9 }}>Lanthanoids</div>
          <div className="pt16SeriesLabel" style={{ gridColumn: "1 / span 3", gridRow: 10 }}>Actinoids</div>

          {ELEMENTS.map((element) => {
            const accent = BLOCK_COLORS[element.block];
            return (
              <button
                key={element.z}
                type="button"
                className="pt16Cell"
                data-element-symbol={element.symbol}
                style={{
                  gridColumn: element.col,
                  gridRow: element.row,
                  borderColor: accent,
                  color: accent,
                }}
                aria-label={`${element.name}, atomic number ${element.z}. Open details.`}
                onClick={(event) => {
                  lastTriggerRef.current = event.currentTarget;
                  setSelectedZ(element.z);
                }}
              >
                <span className="pt16AtomicNumber">{element.z}</span>
                <span className="pt16Symbol">{element.symbol}</span>
                <span className="pt16CellName">{element.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="pt16Legend" aria-label="Periodic-table block legend">
        {(["s", "p", "d", "f"] as Block[]).map((block) => (
          <span key={block}>
            <i style={{ borderColor: BLOCK_COLORS[block], background: `${BLOCK_COLORS[block]}16` }} />
            {block}-block
          </span>
        ))}
      </div>

      {selected ? <ElementDialog element={selected} onClose={closeDialog} /> : null}

      <style jsx>{`
        .pt16Shell {
          width: min(1260px, calc(100vw - 36px));
          position: relative;
          left: 50%;
          transform: translateX(-50%);
          margin: 18px 0 28px;
          border: 1px solid rgba(95, 212, 234, 0.22);
          border-radius: 22px;
          background: linear-gradient(145deg, rgba(18, 34, 50, 0.94), rgba(9, 23, 36, 0.98));
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.24);
          overflow: hidden;
        }

        .pt16Toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 16px 18px;
          border-bottom: 1px solid rgba(95, 212, 234, 0.16);
        }

        .pt16Toolbar > div:first-child {
          display: grid;
          gap: 3px;
        }

        .pt16Toolbar strong {
          color: #eef3f8;
          font-size: 15px;
          letter-spacing: 0.01em;
        }

        .pt16Toolbar span,
        .pt16Hint {
          color: #91a9bc;
          font-size: 12px;
        }

        .pt16Scroller {
          overflow-x: auto;
          overscroll-behavior-inline: contain;
          scrollbar-color: rgba(95, 212, 234, 0.45) transparent;
          scrollbar-width: thin;
          padding: 18px;
        }

        .pt16Scroller:focus-visible {
          outline: 2px solid #5fd4ea;
          outline-offset: -3px;
        }

        .pt16Grid {
          display: grid;
          grid-template-columns: repeat(18, minmax(57px, 1fr));
          grid-template-rows: repeat(7, 68px) 26px repeat(2, 68px);
          gap: 5px;
          min-width: 1120px;
        }

        .pt16Cell {
          position: relative;
          display: grid;
          place-items: center;
          align-content: center;
          min-width: 0;
          padding: 10px 4px 5px;
          border: 1.5px solid;
          border-radius: 9px;
          background: rgba(10, 22, 34, 0.64);
          cursor: pointer;
          transition: transform 150ms ease, background 150ms ease, box-shadow 150ms ease;
          font: inherit;
        }

        .pt16Cell:hover {
          transform: translateY(-3px) scale(1.035);
          background: rgba(255, 255, 255, 0.075);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.3);
          z-index: 2;
        }

        .pt16Cell:focus-visible {
          outline: 3px solid #ffffff;
          outline-offset: 2px;
          z-index: 3;
        }

        .pt16AtomicNumber {
          position: absolute;
          top: 4px;
          left: 5px;
          font-size: 9px;
          opacity: 0.72;
          line-height: 1;
        }

        .pt16Symbol {
          font-size: 17px;
          font-weight: 850;
          line-height: 1;
        }

        .pt16CellName {
          width: 100%;
          margin-top: 5px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: #c3d1dd;
          font-size: 7.5px;
          line-height: 1;
        }

        .pt16SeriesLabel {
          display: flex;
          align-items: center;
          padding-left: 10px;
          color: #91a9bc;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .pt16Legend {
          display: flex;
          flex-wrap: wrap;
          gap: 12px 22px;
          padding: 0 18px 18px;
          color: #c3d1dd;
          font-size: 12px;
        }

        .pt16Legend span {
          display: inline-flex;
          align-items: center;
          gap: 7px;
        }

        .pt16Legend i {
          width: 15px;
          height: 15px;
          border: 2px solid;
          border-radius: 4px;
        }

        @media (max-width: 760px) {
          .pt16Shell {
            width: calc(100vw - 16px);
            border-radius: 16px;
            margin-top: 14px;
          }

          .pt16Toolbar {
            align-items: flex-start;
            padding: 13px;
          }

          .pt16Hint {
            max-width: 105px;
            text-align: right;
          }

          .pt16Scroller {
            padding: 12px;
          }

          .pt16Grid {
            grid-template-columns: repeat(18, 53px);
            grid-template-rows: repeat(7, 62px) 22px repeat(2, 62px);
            min-width: 1039px;
            gap: 4px;
          }

          .pt16Symbol { font-size: 16px; }
          .pt16CellName { display: none; }
          .pt16Legend { padding: 0 13px 14px; }
        }
      `}</style>

      <style jsx global>{`
        .pt16Backdrop {
          position: fixed;
          inset: 0;
          z-index: 10000;
          display: grid;
          place-items: center;
          padding: 18px;
          background: rgba(3, 10, 18, 0.78);
          backdrop-filter: blur(8px);
          animation: pt16Fade 150ms ease-out;
        }

        .pt16Dialog {
          width: min(620px, 100%);
          max-height: min(760px, calc(100vh - 36px));
          overflow: auto;
          border: 1px solid;
          border-radius: 22px;
          background: linear-gradient(160deg, #15283a, #0b1825 72%);
          color: #eef3f8;
          box-shadow: 0 35px 100px rgba(0, 0, 0, 0.58);
          animation: pt16Rise 180ms ease-out;
        }

        .pt16DialogHeader {
          display: grid;
          grid-template-columns: 82px 1fr auto;
          gap: 16px;
          align-items: center;
          padding: 22px;
          border-bottom: 1px solid rgba(145, 169, 188, 0.18);
        }

        .pt16HeroSymbol {
          position: relative;
          display: grid;
          place-items: center;
          width: 78px;
          height: 78px;
          border: 2px solid;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.035);
        }

        .pt16HeroSymbol small {
          position: absolute;
          top: 7px;
          left: 8px;
          font-size: 11px;
          opacity: 0.75;
        }

        .pt16HeroSymbol strong {
          font-size: 32px;
          line-height: 1;
        }

        .pt16Eyebrow {
          margin-bottom: 4px;
          color: #7fd9b8;
          font-size: 11px;
          font-weight: 850;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .pt16Dialog h3 {
          margin: 0;
          font-size: clamp(25px, 5vw, 34px);
          line-height: 1.05;
          font-family: Georgia, "Times New Roman", serif;
        }

        .pt16DialogHeader p {
          margin: 7px 0 0;
          color: #91a9bc;
          font-size: 13px;
        }

        .pt16Close {
          align-self: start;
          width: 40px;
          height: 40px;
          border: 1px solid rgba(195, 209, 221, 0.28);
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.04);
          color: #eef3f8;
          cursor: pointer;
          font-size: 25px;
          line-height: 1;
        }

        .pt16Close:hover,
        .pt16Close:focus-visible {
          background: rgba(232, 137, 107, 0.16);
          outline: 2px solid #e8896b;
          outline-offset: 2px;
        }

        .pt16Facts {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 10px;
          padding: 18px 22px 6px;
        }

        .pt16Facts > div {
          display: grid;
          gap: 6px;
          min-height: 72px;
          padding: 12px;
          border: 1px solid rgba(145, 169, 188, 0.16);
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.025);
        }

        .pt16Facts span,
        .pt16DetailBlock > span {
          color: #91a9bc;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .pt16Facts strong {
          align-self: end;
          color: #eef3f8;
          font-size: 14px;
        }

        .pt16DetailBlock {
          margin: 12px 22px;
          padding: 15px 16px;
          border: 1px solid rgba(145, 169, 188, 0.16);
          border-radius: 13px;
          background: rgba(255, 255, 255, 0.025);
        }

        .pt16DetailBlock strong {
          display: block;
          margin: 8px 0 6px;
          color: #5fd4ea;
          font-family: "SFMono-Regular", Consolas, monospace;
          font-size: 15px;
          overflow-wrap: anywhere;
        }

        .pt16DetailBlock p {
          margin: 6px 0 0;
          color: #c3d1dd;
          font-size: 14px;
          line-height: 1.65;
        }

        .pt16Cue {
          border-left: 4px solid;
        }

        .pt16DialogFooter {
          padding: 8px 22px 20px;
          color: #91a9bc;
          font-size: 12px;
          text-align: center;
        }

        .pt16DialogFooter kbd {
          padding: 2px 6px;
          border: 1px solid rgba(195, 209, 221, 0.35);
          border-radius: 5px;
          background: rgba(255, 255, 255, 0.05);
          color: #eef3f8;
        }

        @keyframes pt16Fade { from { opacity: 0; } to { opacity: 1; } }
        @keyframes pt16Rise { from { opacity: 0; transform: translateY(12px) scale(0.985); } to { opacity: 1; transform: none; } }

        @media (max-width: 620px) {
          .pt16Backdrop {
            align-items: end;
            padding: 8px;
          }

          .pt16Dialog {
            width: 100%;
            max-height: 88vh;
            border-radius: 20px 20px 12px 12px;
          }

          .pt16DialogHeader {
            grid-template-columns: 68px 1fr auto;
            gap: 12px;
            padding: 16px;
          }

          .pt16HeroSymbol {
            width: 64px;
            height: 64px;
            border-radius: 15px;
          }

          .pt16HeroSymbol strong { font-size: 27px; }
          .pt16Facts { grid-template-columns: repeat(2, minmax(0, 1fr)); padding: 14px 14px 4px; }
          .pt16DetailBlock { margin: 10px 14px; }
          .pt16DialogFooter { padding-inline: 14px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .pt16Backdrop,
          .pt16Dialog { animation: none; }
          .pt16Cell { transition: none; }
        }
      `}</style>
    </section>
  );
}
