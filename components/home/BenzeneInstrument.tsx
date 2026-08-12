import styles from "./BenzeneInstrument.module.css";

const carbonAtoms = [
  { id: "C1", x: 260, y: 140 },
  { id: "C2", x: 363.9, y: 200 },
  { id: "C3", x: 363.9, y: 320 },
  { id: "C4", x: 260, y: 380 },
  { id: "C5", x: 156.1, y: 320 },
  { id: "C6", x: 156.1, y: 200 },
] as const;

const hydrogenAtoms = [
  { id: "H1", x: 260, y: 56 },
  { id: "H2", x: 436.7, y: 158 },
  { id: "H3", x: 436.7, y: 362 },
  { id: "H4", x: 260, y: 464 },
  { id: "H5", x: 83.3, y: 362 },
  { id: "H6", x: 83.3, y: 158 },
] as const;

const ringPoints = carbonAtoms.map(({ x, y }) => `${x},${y}`).join(" ");

const facts = [
  {
    label: "Mean C–C bond",
    value: "1.397",
    unit: "Å",
    note: "representative",
    tone: styles.bondFact,
  },
  {
    label: "C–H bond",
    value: "1.09",
    unit: "Å",
    tone: styles.hydrogenFact,
  },
  {
    label: "Bond angle",
    value: "120",
    unit: "°",
    tone: styles.geometryFact,
  },
  {
    label: "Carbon hybridisation",
    value: "sp²",
    unit: "",
    tone: styles.hybridFact,
  },
  {
    label: "Delocalised π electrons",
    value: "6",
    unit: "e⁻",
    tone: styles.orbitalFact,
  },
] as const;

export default function BenzeneInstrument() {
  return (
    <section
      className={styles.instrument}
      aria-labelledby="benzene-instrument-title"
    >
      <figure className={styles.figure}>
        <header className={styles.figureHeader}>
          <div>
            <p className={styles.kicker}>Molecular reference / 01</p>
            <h2 className={styles.title} id="benzene-instrument-title">
              Benzene <span>C₆H₆</span>
            </h2>
          </div>
          <p className={styles.status}>
            <span aria-hidden="true" />
            Verified structure
          </p>
        </header>

        <div className={styles.diagram}>
          <svg
            className={styles.molecule}
            viewBox="0 0 520 520"
            role="img"
            aria-labelledby="benzene-diagram-title benzene-diagram-description"
          >
            <title id="benzene-diagram-title">
              Structural model of benzene, C₆H₆
            </title>
            <desc id="benzene-diagram-description">
              Six sp²-hybridised carbon atoms form a planar regular hexagonal
              ring. Each carbon is bonded to one hydrogen. The circle inside the
              ring represents six delocalised pi electrons.
            </desc>

            <g aria-hidden="true">
              {carbonAtoms.map((carbon, index) => {
                const hydrogen = hydrogenAtoms[index];

                return (
                  <line
                    key={`bond-${carbon.id}-${hydrogen.id}`}
                    className={styles.hydrogenBond}
                    x1={carbon.x}
                    y1={carbon.y}
                    x2={hydrogen.x}
                    y2={hydrogen.y}
                  />
                );
              })}

              <polygon className={styles.carbonRing} points={ringPoints} />
              <circle
                className={styles.aromaticCircle}
                cx="260"
                cy="260"
                r="67"
              />

              {carbonAtoms.map((atom) => (
                <g key={atom.id}>
                  <circle
                    className={styles.carbonAtom}
                    cx={atom.x}
                    cy={atom.y}
                    r="20"
                  />
                  <text
                    className={styles.carbonLabel}
                    x={atom.x}
                    y={atom.y}
                    textAnchor="middle"
                    dominantBaseline="central"
                  >
                    C
                  </text>
                </g>
              ))}

              {hydrogenAtoms.map((atom) => (
                <g key={atom.id}>
                  <circle
                    className={styles.hydrogenAtom}
                    cx={atom.x}
                    cy={atom.y}
                    r="15"
                  />
                  <text
                    className={styles.hydrogenLabel}
                    x={atom.x}
                    y={atom.y}
                    textAnchor="middle"
                    dominantBaseline="central"
                  >
                    H
                  </text>
                </g>
              ))}
            </g>
          </svg>
        </div>

        <figcaption className={styles.caption}>
          Planar aromatic ring · six equivalent C–C bonds · one hydrogen
          per carbon
        </figcaption>
      </figure>

      <aside
        className={styles.factPanel}
        aria-labelledby="benzene-facts-title"
      >
        <header className={styles.factHeader}>
          <p>Calibrated reference</p>
          <h3 id="benzene-facts-title">Key molecular facts</h3>
        </header>

        <dl className={styles.factList}>
          {facts.map((fact) => (
            <div className={`${styles.fact} ${fact.tone}`} key={fact.label}>
              <dt>
                {fact.label}
                {"note" in fact ? <small>{fact.note}</small> : null}
              </dt>
              <dd>
                {fact.value}
                {fact.unit ? <span>{fact.unit}</span> : null}
              </dd>
            </div>
          ))}
        </dl>

        <p className={styles.factNote}>
          Bond distances are representative educational values; measured values
          can vary slightly with phase and method.
        </p>
      </aside>
    </section>
  );
}
