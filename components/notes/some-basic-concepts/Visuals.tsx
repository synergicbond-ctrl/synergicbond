
import styles from "./chemistry.module.css";

export function TransformationVisual() {
  return (
    <div className={styles.visualGrid3} aria-label="Everyday chemical transformations">
      <article className={styles.visualCard}>
        <svg viewBox="0 0 280 150" role="img" aria-label="Milk changes to curd">
          <defs>
            <linearGradient id="milk" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#f8fbff" />
              <stop offset="1" stopColor="#9de8ff" />
            </linearGradient>
          </defs>
          <path d="M42 28h54l-5 86H47z" fill="url(#milk)" stroke="#78e9ff" strokeWidth="2" />
          <path d="M47 72h44l-2 42H49z" fill="#8cdfff" opacity=".7" />
          <path d="M126 74h52" stroke="#a98cff" strokeWidth="8" strokeLinecap="round" />
          <path d="m168 58 20 16-20 16" fill="none" stroke="#a98cff" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
          <ellipse cx="226" cy="86" rx="42" ry="31" fill="#fff3c4" stroke="#ffd166" strokeWidth="3" />
          <path d="M203 82c18-18 37-10 48 3" fill="none" stroke="#e6b94f" strokeWidth="3" />
          <circle cx="239" cy="81" r="4" fill="#e6b94f" />
        </svg>
        <h3>Milk → curd</h3>
        <p>Microbial conversion changes composition, acidity and texture.</p>
      </article>
      <article className={styles.visualCard}>
        <svg viewBox="0 0 280 150" role="img" aria-label="Sugar ferments into vinegar">
          <circle cx="68" cy="76" r="42" fill="#f2c94c" stroke="#ffd166" strokeWidth="3" />
          <circle cx="56" cy="62" r="8" fill="#fff5b2" />
          <circle cx="85" cy="85" r="6" fill="#fff5b2" />
          <path d="M126 74h44" stroke="#a98cff" strokeWidth="8" strokeLinecap="round" />
          <path d="m160 58 20 16-20 16" fill="none" stroke="#a98cff" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M206 34h34v18l18 17v50h-70V69l18-17z" fill="#d38c18" stroke="#ffb347" strokeWidth="3" />
          <path d="M196 84h52" stroke="#ffd166" strokeWidth="2" opacity=".7" />
        </svg>
        <h3>Sugar → vinegar</h3>
        <p>Fermentation reorganises organic molecules over time.</p>
      </article>
      <article className={styles.visualCard}>
        <svg viewBox="0 0 280 150" role="img" aria-label="Iron rusts">
          <rect x="42" y="53" width="72" height="50" rx="11" fill="#91a6c4" stroke="#c4d4e8" strokeWidth="3" />
          <circle cx="62" cy="67" r="8" fill="#5f7391" />
          <path d="M139 76h42" stroke="#a98cff" strokeWidth="8" strokeLinecap="round" />
          <path d="m171 60 20 16-20 16" fill="none" stroke="#a98cff" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="206" y="44" width="54" height="68" fill="#b63d13" stroke="#ff7849" strokeWidth="3" />
          <circle cx="225" cy="65" r="10" fill="#ff5c12" />
          <circle cx="244" cy="90" r="12" fill="#d7491d" />
          <circle cx="214" cy="99" r="7" fill="#8f2e15" />
        </svg>
        <h3>Iron → rust</h3>
        <p>Iron reacts slowly with oxygen and moisture to form hydrated oxides.</p>
      </article>
    </div>
  );
}

export function HistoricalTimeline() {
  const items = [
    ["1000 BCE", "Metallurgy & glass", "Harappan pottery, gypsum cement, faience and metal alloys."],
    ["600 BCE", "Paramānu theory", "Acharya Kanda described indivisible particles, motion and unseen combining forces."],
    ["Classical era", "Texts & medicines", "Salt extraction, alkalies, dyes, fermentation and bhasma preparation."],
    ["c. 800 CE", "Nagarjuna", "Rasratnakar, mercury chemistry, furnaces and metallurgical methods."],
    ["Medieval period", "Chakrapani", "Early soap synthesis using plant alkalies and oils."],
    ["Modern era", "Quantitative chemistry", "Measurement, atomic theory and controlled laboratory methods."],
  ];
  return (
    <ol className={styles.timeline}>
      {items.map(([year, title, description], index) => (
        <li key={title} className={styles.timelineItem}>
          <span className={styles.timelineIndex}>{String(index + 1).padStart(2, "0")}</span>
          <div>
            <span className={styles.timelineYear}>{year}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

function ParticleBox({ kind }: { kind: "solid" | "liquid" | "gas" }) {
  const solid = [[40,38],[82,38],[124,38],[40,78],[82,78],[124,78],[40,118],[82,118],[124,118]];
  const liquid = [[42,55],[85,42],[126,62],[60,88],[105,94],[142,112],[35,126],[82,132],[121,128]];
  const gas = [[32,34],[150,38],[95,74],[45,122],[145,132]];
  const points = kind === "solid" ? solid : kind === "liquid" ? liquid : gas;
  return (
    <svg viewBox="0 0 180 160" role="img" aria-label={`${kind} particle model`}>
      <rect x="2" y="2" width="176" height="156" rx="20" fill="#071126" stroke="#234565" />
      {points.map(([x,y], i) => <circle key={i} cx={x} cy={y} r="10" fill="url(#particleGradient)" />)}
      <defs>
        <radialGradient id="particleGradient">
          <stop offset="0" stopColor="#dffaff" />
          <stop offset=".55" stopColor="#5ee7ff" />
          <stop offset="1" stopColor="#8b5cf6" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export function ParticleStatesVisual() {
  return (
    <>
      <div className={styles.visualGrid3}>
        <article className={styles.visualCard}><ParticleBox kind="solid" /><h3>Solid</h3><p>Very close, orderly particles; vibration about fixed positions.</p></article>
        <article className={styles.visualCard}><ParticleBox kind="liquid" /><h3>Liquid</h3><p>Close, disordered particles that slide past one another.</p></article>
        <article className={styles.visualCard}><ParticleBox kind="gas" /><h3>Gas</h3><p>Widely separated particles with rapid unrestricted motion.</p></article>
      </div>
      <div className={styles.phaseMap} aria-label="Phase transitions">
        <span>Solid</span><b>melting →<br />← freezing</b><span>Liquid</span><b>vaporisation →<br />← condensation</b><span>Gas</span>
      </div>
    </>
  );
}

export function MatterTree() {
  return (
    <div className={styles.tree} aria-label="Classification of matter">
      <div className={styles.treeRoot}>Matter<small>has mass and occupies space</small></div>
      <div className={styles.treeBranches}>
        <div className={styles.treeBranch}>
          <h3>Mixtures</h3><p>Variable composition</p>
          <div className={styles.treeLeaves}><span>Homogeneous</span><span>Heterogeneous</span></div>
        </div>
        <div className={styles.treeBranch}>
          <h3>Pure substances</h3><p>Fixed composition</p>
          <div className={styles.treeLeaves}><span>Elements</span><span>Compounds</span></div>
        </div>
      </div>
    </div>
  );
}

function Atom({ x, y, label, fill }: { x:number; y:number; label:string; fill:string }) {
  return <g><circle cx={x} cy={y} r="31" fill={fill} /><circle cx={x-8} cy={y-10} r="10" fill="rgba(255,255,255,.28)" /><text x={x} y={y+7} textAnchor="middle" className={styles.svgAtomLabel}>{label}</text></g>;
}

export function MoleculeGallery() {
  return (
    <div className={styles.moleculeGrid}>
      <article><svg viewBox="0 0 230 130"><line x1="70" y1="65" x2="160" y2="65" stroke="#b7c7db" strokeWidth="6" /><Atom x={65} y={65} label="H" fill="#65ddf7" /><Atom x={165} y={65} label="H" fill="#65ddf7" /></svg><b>H₂</b><span>Element molecule</span></article>
      <article><svg viewBox="0 0 230 130"><line x1="70" y1="58" x2="160" y2="58" stroke="#b7c7db" strokeWidth="4" /><line x1="70" y1="72" x2="160" y2="72" stroke="#b7c7db" strokeWidth="4" /><Atom x={65} y={65} label="O" fill="#ff6b8a" /><Atom x={165} y={65} label="O" fill="#ff6b8a" /></svg><b>O₂</b><span>Element molecule</span></article>
      <article><svg viewBox="0 0 230 130"><line x1="65" y1="74" x2="112" y2="58" stroke="#b7c7db" strokeWidth="5" /><line x1="165" y1="74" x2="118" y2="58" stroke="#b7c7db" strokeWidth="5" /><Atom x={58} y={82} label="H" fill="#65ddf7" /><Atom x={115} y={55} label="O" fill="#ff6b8a" /><Atom x={172} y={82} label="H" fill="#65ddf7" /></svg><b>H₂O</b><span>Bent compound molecule</span></article>
      <article><svg viewBox="0 0 230 130"><line x1="55" y1="58" x2="112" y2="58" stroke="#b7c7db" strokeWidth="4" /><line x1="55" y1="72" x2="112" y2="72" stroke="#b7c7db" strokeWidth="4" /><line x1="118" y1="58" x2="175" y2="58" stroke="#b7c7db" strokeWidth="4" /><line x1="118" y1="72" x2="175" y2="72" stroke="#b7c7db" strokeWidth="4" /><Atom x={48} y={65} label="O" fill="#ff6b8a" /><Atom x={115} y={65} label="C" fill="#ffc857" /><Atom x={182} y={65} label="O" fill="#ff6b8a" /></svg><b>CO₂</b><span>Linear compound molecule</span></article>
    </div>
  );
}

export function MeasurementWorkbench() {
  return (
    <div className={styles.workbenchGrid}>
      <article className={styles.blueprintPanel}>
        <h3>Analytical balance — labelled working parts</h3>
        <svg viewBox="0 0 700 440" role="img" aria-label="Labelled analytical balance">
          <defs><linearGradient id="beam" x1="0" x2="1"><stop stopColor="#5ee7ff"/><stop offset="1" stopColor="#a98cff"/></linearGradient></defs>
          <rect x="180" y="110" width="340" height="20" rx="10" fill="url(#beam)" opacity=".9"/>
          <circle cx="350" cy="120" r="36" fill="#0b1732" stroke="#ffd166" strokeWidth="8"/>
          <rect x="430" y="90" width="56" height="18" rx="8" fill="#a98cff"/>
          <rect x="385" y="88" width="18" height="65" rx="8" fill="#ffd166"/>
          <line x1="240" y1="130" x2="205" y2="252" stroke="#b7c7db" strokeWidth="7"/>
          <line x1="460" y1="130" x2="495" y2="252" stroke="#b7c7db" strokeWidth="7"/>
          <path d="M150 252h110q-8 62-55 62t-55-62z" fill="#0f6e8d" stroke="#5ee7ff" strokeWidth="4"/>
          <path d="M440 252h110q-8 62-55 62t-55-62z" fill="#0f6e8d" stroke="#5ee7ff" strokeWidth="4"/>
          <line x1="350" y1="156" x2="350" y2="258" stroke="#ffd166" strokeWidth="6"/>
          <polygon points="350,275 338,248 362,248" fill="#ffd166"/>
          <path d="M325 215h50l25 150h-100z" fill="#101f43" stroke="#a98cff" strokeWidth="4"/>
          <rect x="145" y="365" width="410" height="28" rx="14" fill="#17325b" stroke="#5ee7ff" strokeWidth="3"/>
          <circle cx="195" cy="379" r="20" fill="#25395c" stroke="#ffd166" strokeWidth="3"/>
          <rect x="420" y="270" width="45" height="25" rx="8" fill="#ff9f1c"/>
          <rect x="470" y="300" width="45" height="25" rx="8" fill="#37d4ee"/>
          {[
            ["Beam",120,90,220,115],["Rider carrier",510,64,458,95],["Rider knob",610,145,485,104],
            ["Pointer + scale",70,210,350,210],["Pan",55,315,175,274],["Pan release",585,292,460,282],
            ["Beam release",575,340,490,312],["Levelling screw",30,410,177,379]
          ].map(([label,tx,ty,x2,y2]) => <g key={String(label)}><line x1={Number(tx)+60} y1={Number(ty)-8} x2={Number(x2)} y2={Number(y2)} stroke="#9fb7d1" strokeWidth="2"/><circle cx={Number(x2)} cy={Number(y2)} r="6" fill="#5ee7ff"/><text x={Number(tx)} y={Number(ty)} className={styles.svgLabel}>{label}</text></g>)}
        </svg>
      </article>
      <article className={styles.blueprintPanel}>
        <h3>Volume equivalence — see the scale</h3>
        <svg viewBox="0 0 700 440" role="img" aria-label="One cubic decimetre equals one litre">
          <defs>
            <linearGradient id="cubeFront" x1="0" x2="1"><stop stopColor="#13344f"/><stop offset="1" stopColor="#16234b"/></linearGradient>
            <linearGradient id="cubeTop" x1="0" x2="1"><stop stopColor="#154c61"/><stop offset="1" stopColor="#213c78"/></linearGradient>
          </defs>
          <polygon points="120,110 410,70 560,160 265,205" fill="url(#cubeTop)" stroke="#5ee7ff" strokeWidth="4"/>
          <polygon points="120,110 265,205 265,385 120,295" fill="#10384d" stroke="#5ee7ff" strokeWidth="4"/>
          <polygon points="265,205 560,160 560,340 265,385" fill="url(#cubeFront)" stroke="#a98cff" strokeWidth="4"/>
          {[1,2,3,4,5,6,7,8,9].map(i => <line key={`v${i}`} x1={265+i*29.5} y1={205-i*4.5} x2={265+i*29.5} y2={385-i*4.5} stroke="#415893" strokeWidth="1.5"/>)}
          {[1,2,3,4,5,6,7,8,9].map(i => <line key={`h${i}`} x1={265} y1={205+i*18} x2={560} y2={160+i*18} stroke="#415893" strokeWidth="1.5"/>)}
          <polygon points="265,367 294.5,362.5 294.5,380.5 265,385" fill="#ffd166" stroke="#fff1a8" strokeWidth="2"/>
          <line x1="120" y1="410" x2="560" y2="410" stroke="#ffd166" strokeWidth="3"/>
          <line x1="120" y1="400" x2="120" y2="420" stroke="#ffd166" strokeWidth="3"/>
          <line x1="560" y1="400" x2="560" y2="420" stroke="#ffd166" strokeWidth="3"/>
          <text x="340" y="435" textAnchor="middle" className={styles.svgGoldLabel}>10 cm = 1 dm</text>
          <line x1="585" y1="160" x2="585" y2="340" stroke="#ffd166" strokeWidth="3"/>
          <text x="612" y="255" transform="rotate(90 612 255)" textAnchor="middle" className={styles.svgGoldLabel}>10 cm</text>
          <line x1="300" y1="350" x2="410" y2="325" stroke="#ffd166" strokeWidth="2"/>
          <text x="416" y="325" className={styles.svgLabel}>highlighted cell = 1 cm³ = 1 mL</text>
          <rect x="115" y="22" width="450" height="42" rx="18" fill="#071126" stroke="#234565"/>
          <text x="340" y="49" textAnchor="middle" className={styles.svgEquation}>1 dm³ = 1000 cm³ = 1 L = 1000 mL</text>
        </svg>
      </article>
    </div>
  );
}

export function AccuracyTargets() {
  const sets = [
    ["Accurate + precise", [[50,50],[53,48],[48,53],[51,47]]],
    ["Accurate, less precise", [[35,40],[67,61],[45,66],[61,35]]],
    ["Precise, not accurate", [[25,25],[28,27],[22,28],[27,22]]],
    ["Neither", [[20,75],[75,20],[70,70],[25,25]]],
  ] as const;
  return (
    <div className={styles.targetGrid}>
      {sets.map(([label, pts]) => (
        <article key={label}>
          <svg viewBox="0 0 100 100" role="img" aria-label={label}>
            {[42,30,18].map(r => <circle key={r} cx="50" cy="50" r={r} fill="none" stroke="#597495" strokeWidth="1.6" />)}
            <circle cx="50" cy="50" r="6" fill="#ffd166"/>
            {pts.map(([x,y],i) => <circle key={i} cx={x} cy={y} r="4.5" fill="#5ee7ff" stroke="#d8fbff" strokeWidth="1"/>)}
          </svg>
          <b>{label}</b>
        </article>
      ))}
    </div>
  );
}

export function MoleBridge() {
  return (
    <div className={styles.moleBridge} aria-label="Mole bridge from particles to measurable mass">
      <div><span className={styles.bridgeSphere}>1</span><b>One particle</b><small>atom, molecule, ion</small></div>
      <strong>× 6.02214076 × 10²³</strong>
      <div><span className={styles.bridgeSphere}>mol</span><b>One mole</b><small>Avogadro count</small></div>
      <strong>× molar mass</strong>
      <div><span className={styles.bridgeSphere}>g</span><b>Measurable mass</b><small>laboratory scale</small></div>
    </div>
  );
}

export function LimitingReagentVisual() {
  return (
    <div className={styles.limitingVisual}>
      <div><h3>Reactants</h3><div className={styles.particleRow}>{[1,2,3,4,5].map(i=><span key={`a${i}`} className={styles.particleA}>A</span>)}{[1,2,3].map(i=><span key={`b${i}`} className={styles.particleB}>B₂</span>)}</div></div>
      <div className={styles.reactionArrow}>A + B₂ → AB₂</div>
      <div><h3>Products</h3><div className={styles.particleRow}>{[1,2,3].map(i=><span key={`p${i}`} className={styles.productParticle}>AB₂</span>)}{[1,2].map(i=><span key={`e${i}`} className={styles.excessParticle}>A</span>)}</div><p><b>B₂ is limiting:</b> it is consumed first; two A particles remain.</p></div>
    </div>
  );
}

export function ConcentrationMap() {
  return (
    <div className={styles.concentrationMap}>
      <div className={styles.mapCenter}>Solution concentration</div>
      <div><b>Mass %</b><span>mass solute ÷ mass solution</span><small>temperature independent</small></div>
      <div><b>Mole fraction</b><span>moles component ÷ total moles</span><small>dimensionless</small></div>
      <div><b>Molarity</b><span>moles solute ÷ litres solution</span><small>temperature dependent</small></div>
      <div><b>Molality</b><span>moles solute ÷ kg solvent</span><small>temperature independent</small></div>
    </div>
  );
}
