"use client";

import type { CSSProperties, ReactNode } from "react";

const C = {
  page: "#071725",
  panel: "#0c2234",
  panel2: "#102a40",
  line: "#294b68",
  text: "#eaf2f8",
  muted: "#afc2d1",
  cyan: "#58d6f3",
  gold: "#f5c652",
  coral: "#ff8d72",
  mint: "#7ce0b8",
  violet: "#c9a8ff",
};

function Sup({ children }: { children: ReactNode }) {
  return <sup style={{ fontSize: "0.72em", lineHeight: 0 }}>{children}</sup>;
}

function Sub({ children }: { children: ReactNode }) {
  return <sub style={{ fontSize: "0.72em", lineHeight: 0 }}>{children}</sub>;
}

function Formula({ children, label }: { children: ReactNode; label?: string }) {
  return (
    <span aria-label={label} style={styles.formula}>
      {children}
    </span>
  );
}

function SectionTitle({ number, children }: { number: number; children: ReactNode }) {
  return (
    <h2 style={styles.sectionTitle}>
      <span style={styles.sectionNumber}>{number}</span>
      <span>{children}</span>
    </h2>
  );
}

function SubTitle({ children }: { children: ReactNode }) {
  return <h3 style={styles.subTitle}>{children}</h3>;
}

function Callout({ title, children, tone = "cyan" }: { title: string; children: ReactNode; tone?: "cyan" | "gold" | "coral" | "mint" }) {
  const accent = tone === "gold" ? C.gold : tone === "coral" ? C.coral : tone === "mint" ? C.mint : C.cyan;
  return (
    <aside style={{ ...styles.callout, borderLeftColor: accent }}>
      <strong style={{ ...styles.calloutTitle, color: accent }}>{title}</strong>
      <div>{children}</div>
    </aside>
  );
}

function DataTable({ headers, rows, caption }: { headers: string[]; rows: ReactNode[][]; caption?: string }) {
  return (
    <div style={styles.tableWrap}>
      <table style={styles.table}>
        {caption ? <caption style={styles.caption}>{caption}</caption> : null}
        <thead>
          <tr>{headers.map((header) => <th key={header} style={styles.th}>{header}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => <td key={cellIndex} style={styles.td}>{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function MeyerCurve() {
  return (
    <figure style={styles.figure}>
      <svg viewBox="0 0 900 380" role="img" aria-labelledby="meyer-title meyer-desc" style={styles.svg}>
        <title id="meyer-title">Schematic of Lothar Meyer&apos;s atomic-volume curve</title>
        <desc id="meyer-desc">Atomic volume shows repeating peaks at alkali metals, descending regions at alkaline-earth metals, broad minima through transition metals, and rising regions toward halogens.</desc>
        <defs>
          <linearGradient id="meyerStroke" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor={C.gold} />
            <stop offset="0.55" stopColor={C.mint} />
            <stop offset="1" stopColor={C.cyan} />
          </linearGradient>
        </defs>
        <line x1="70" y1="315" x2="850" y2="315" stroke="#88a6bc" strokeWidth="2" />
        <line x1="70" y1="45" x2="70" y2="315" stroke="#88a6bc" strokeWidth="2" />
        {[115, 180, 245, 310].map((y) => <line key={y} x1="70" y1={y} x2="850" y2={y} stroke="#26445c" strokeWidth="1" strokeDasharray="6 8" />)}
        <path d="M90 80 C125 115 130 205 175 230 C235 270 285 290 340 286 C410 282 475 270 535 238 C585 210 625 155 670 118 C710 90 735 62 760 75 C785 92 800 175 835 225" fill="none" stroke="url(#meyerStroke)" strokeWidth="6" strokeLinecap="round" />
        {[[90,80],[175,230],[340,286],[535,238],[670,118],[760,75],[835,225]].map(([x,y], index) => <circle key={index} cx={x} cy={y} r="7" fill={index === 0 || index === 5 ? C.cyan : C.text} stroke={C.page} strokeWidth="3" />)}
        <text x="82" y="58" fill={C.gold} fontSize="18" fontWeight="700">alkali-metal peak</text>
        <text x="142" y="260" fill={C.muted} fontSize="16">alkaline-earth descent</text>
        <text x="300" y="350" fill={C.mint} fontSize="18" fontWeight="700">transition-metal minimum</text>
        <text x="600" y="92" fill={C.violet} fontSize="16">halogen-side rise</text>
        <text x="755" y="52" fill={C.cyan} fontSize="18" fontWeight="700">next alkali peak</text>
        <text x="382" y="372" fill={C.muted} fontSize="17">increasing relative atomic mass</text>
        <text x="20" y="220" fill={C.muted} fontSize="17" transform="rotate(-90 20 220)">atomic volume, Vₘ</text>
      </svg>
      <figcaption style={styles.figcaption}>A scientifically faithful schematic: periodicity is the recurring shape, not any single idealised numerical curve.</figcaption>
    </figure>
  );
}

function MoseleyGraph() {
  return (
    <figure style={styles.figure}>
      <svg viewBox="0 0 760 350" role="img" aria-labelledby="moseley-title moseley-desc" style={styles.svg}>
        <title id="moseley-title">Moseley relation between square root of X-ray frequency and atomic number</title>
        <desc id="moseley-desc">A straight line demonstrates that square root of characteristic X-ray frequency is proportional to atomic number minus a screening constant.</desc>
        <line x1="85" y1="290" x2="700" y2="290" stroke="#91aabd" strokeWidth="2" />
        <line x1="85" y1="45" x2="85" y2="290" stroke="#91aabd" strokeWidth="2" />
        <line x1="120" y1="260" x2="660" y2="75" stroke={C.gold} strokeWidth="5" strokeLinecap="round" />
        {[0,1,2,3,4,5,6,7,8,9].map((i) => {
          const x = 130 + i * 56;
          const y = 257 - i * 19;
          return <circle key={i} cx={x} cy={y} r="7" fill={C.cyan} stroke={C.page} strokeWidth="3" />;
        })}
        <text x="455" y="70" fill={C.gold} fontSize="25" fontWeight="700">√ν = a(Z − b)</text>
        <text x="300" y="330" fill={C.muted} fontSize="18">atomic number, Z</text>
        <text x="30" y="205" fill={C.muted} fontSize="18" transform="rotate(-90 30 205)">√ν</text>
      </svg>
      <figcaption style={styles.figcaption}>For one characteristic X-ray series, plotting √ν against Z gives a straight line.</figcaption>
    </figure>
  );
}

function WorkedProblem({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section style={styles.problem}>
      <h4 style={styles.problemTitle}>{title}</h4>
      <div>{children}</div>
    </section>
  );
}

export default function PeriodicHistoryClean() {
  return (
    <article data-notes-version="periodic-history-clean-v1" style={styles.page}>
      <header style={styles.hero}>
        <p style={styles.eyebrow}>History, periodic law and modern architecture</p>
        <h1 style={styles.title}>Classification of Elements and Periodicity in Properties</h1>
        <p style={styles.lead}>One verified, non-repetitive sequence from the need for classification to the quantum-mechanical structure of the long-form periodic table.</p>
      </header>

      <SectionTitle number={1}>Why classification became necessary</SectionTitle>
      <p>In 1800 only about 31 elements were known; by 1865 the number had risen to 63, and the modern table contains 118 named elements. Studying every element and its compounds as isolated facts became impractical. Classification was therefore developed to compress a large body of chemistry into a small number of recurring principles.</p>
      <Callout title="Requirements of a successful classification" tone="mint">
        <ol style={styles.list}>
          <li>Place chemically similar elements together without forcing unrelated elements into the same family.</li>
          <li>Display gradual and recurring trends in properties.</li>
          <li>Provide a place for every known element while allowing gaps for undiscovered elements.</li>
          <li>Explain the recurrence and permit reliable prediction of unknown properties.</li>
        </ol>
      </Callout>
      <p><strong>Periodicity</strong> is the recurrence of similar physical and chemical properties at regular intervals when elements are arranged by increasing atomic number. The microscopic reason is the recurrence of analogous valence-shell electronic configurations.</p>

      <WorkedProblem title="Solved Problem 1 — Why classify elements if every element already has a unique atomic number?">
        <p><strong>Step 1:</strong> Atomic number identifies an individual element, but identification alone does not reveal relationships.</p>
        <p><strong>Step 2:</strong> Elements with analogous valence configurations show related oxidation states, bonding, oxide character and reactivity.</p>
        <p><strong>Step 3:</strong> A periodic classification turns 118 separate descriptions into families and trends.</p>
        <p><strong>Conclusion:</strong> Atomic number answers “which element?”, whereas classification answers “how will it behave and why?”.</p>
      </WorkedProblem>

      <SectionTitle number={2}>Early attempts at classification</SectionTitle>
      <DataTable
        caption="Chronology of the principal pre-periodic and early periodic schemes"
        headers={["Date", "Scientist", "Central idea", "Why it was insufficient"]}
        rows={[
          ["1789", "Antoine Lavoisier", "Listed 33 simple substances and distinguished broad classes including metals and non-metals.", "The categories were descriptive and too broad; metalloids and family-level periodicity were not resolved."],
          ["1815–1816", "William Prout", "Proposed that atomic weights were integral multiples of hydrogen's atomic weight.", "Improved measurements and isotopic abundances showed that ordinary atomic weights need not be integers."],
          ["1817; extended in 1829", "J. W. Döbereiner", "Grouped chemically similar elements into triads.", "Only a limited fraction of the known elements fitted convincing triads."],
          ["1850", "M. Pettenkofer", "Noted integral-multiple differences, often near multiples of eight, among some related atomic weights.", "An empirical pattern, not a universal classification law."],
          ["1862", "A.-É. B. de Chancourtois", "Arranged elements on the telluric screw, a helical atomic-weight sequence.", "The cylindrical scheme was difficult to read, worked poorly for many heavier elements and was poorly communicated."],
          ["1864–1865", "J. A. R. Newlands", "Law of Octaves: analogous behaviour recurred at the eighth element.", "The law worked mainly through calcium, used paired positions and left no reliable gaps."],
        ]}
      />

      <SubTitle>Döbereiner&apos;s law of triads</SubTitle>
      <p>For three chemically related elements arranged in increasing atomic mass, if their masses are <Formula>x</Formula>, <Formula>y</Formula> and <Formula>z</Formula>, the middle value is approximately:</p>
      <div style={styles.displayFormula}><Formula label="y approximately equals x plus z divided by two">y ≈ (x + z)/2</Formula></div>
      <DataTable
        headers={["Triad", "Approximate atomic masses", "Arithmetic-mean test", "Chemical relationship"]}
        rows={[
          ["Li, Na, K", "7, 23, 39", <Formula key="a">(7 + 39)/2 = 23</Formula>, "Alkali metals; analogous +1 chemistry"],
          ["Ca, Sr, Ba", "40, 88, 137", <Formula key="b">(40 + 137)/2 = 88.5 ≈ 88</Formula>, "Alkaline-earth metals; analogous +2 chemistry"],
          ["Cl, Br, I", "35.5, 80, 127", <Formula key="c">(35.5 + 127)/2 = 81.25 ≈ 80</Formula>, "Halogens; analogous −1 chemistry"],
          ["S, Se, Te", "32, 79, 127.6", <Formula key="d">(32 + 127.6)/2 = 79.8 ≈ 79</Formula>, "Chalcogens; analogous hydrides and oxides"],
          ["P, As, Sb", "31, 74.9, 121.8", <Formula key="e">(31 + 121.8)/2 = 76.4 ≈ 74.9</Formula>, "Pnictogen family resemblance; numerical fit is approximate"],
        ]}
      />
      <Callout title="Important distinction" tone="gold"><p>The original triad criterion used <strong>atomic masses</strong> and chemical similarity. Equal spacing of atomic numbers, such as Li (3), Na (11), K (19), is a modern recognition shortcut—not Döbereiner&apos;s original law.</p></Callout>

      <WorkedProblem title="Solved Problem 2 — Test 40, 88 and 137 for a triad">
        <p><strong>Step 1:</strong> Take the mean of the first and third masses.</p>
        <div style={styles.displayFormula}><Formula>(40 + 137)/2 = 88.5</Formula></div>
        <p><strong>Step 2:</strong> Compare with the middle mass: <Formula>88.5 ≈ 88</Formula>.</p>
        <p><strong>Step 3:</strong> The chemically similar set is Ca–Sr–Ba.</p>
        <p><strong>Answer:</strong> Yes, the set approximately satisfies the triad rule.</p>
      </WorkedProblem>

      <SubTitle>Pettenkofer&apos;s integral-multiple observation</SubTitle>
      <p>For the old approximate masses Li = 7, Na = 23 and K = 39:</p>
      <div style={styles.displayFormula}><Formula>23 − 7 = 16 = 2 × 8; 39 − 23 = 16 = 2 × 8</Formula></div>
      <p>The numerical regularity was suggestive, but many families did not obey one common difference; therefore it could not serve as a universal law.</p>

      <SubTitle>de Chancourtois&apos; telluric screw</SubTitle>
      <p>Elements were written in increasing atomic-weight order along a helix on a cylinder whose circumference represented approximately 16 mass units. Elements lying above one another often had related properties. This was the first explicit geometrical display of periodic recurrence, but the geology-style cylindrical diagram, inconsistent alignment of heavier elements and unclear original presentation limited its influence.</p>

      <SubTitle>Newlands&apos; law of octaves</SubTitle>
      <p>Newlands arranged the known elements in increasing atomic weight and stated that an element resembled the eighth element following it, analogous to repetition of a musical note after seven intervening notes.</p>
      <DataTable
        caption="The experimentally convincing light-element portion of Newlands' octave sequence"
        headers={["Position", "1", "2", "3", "4", "5", "6", "7", "8"]}
        rows={[
          ["Elements", "Li", "Be", "B", "C", "N", "O", "F", "Na"],
          ["Old atomic weights", "7", "9", "11", "12", "14", "16", "19", "23"],
          ["Next octave", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "K"],
          ["Old atomic weights", "23", "24", "27", "28–29", "31", "32", "35.5", "39"],
        ]}
      />
      <p>Newlands attempted to accommodate all then-known elements from hydrogen to thorium in eight groups of seven. The extended arrangement required paired entries such as Co/Ni and Pt/Ir, and mixed some transition metals with halogens. The historically important point is not that the entire 56-element arrangement was chemically correct—it was not—but that Newlands demonstrated a recurring interval and treated the list as one ordered system.</p>
      <Callout title="Merits and limitations of the octave scheme" tone="coral">
        <ul style={styles.list}>
          <li><strong>Merit:</strong> first clear numerical statement of periodic recurrence across an ordered element list.</li>
          <li><strong>Merit:</strong> correctly linked Li with Na, Be with Mg, B with Al and F with Cl.</li>
          <li><strong>Limitation:</strong> reliable mainly through Ca because transition elements interrupt an eight-member repetition.</li>
          <li><strong>Limitation:</strong> no systematic vacant positions for future discoveries.</li>
          <li><strong>Limitation:</strong> paired slots and forced groupings placed unlike elements together and separated some related elements.</li>
          <li><strong>Limitation:</strong> noble gases were unknown; their later insertion changed simple counting.</li>
        </ul>
      </Callout>

      <SectionTitle number={3}>Lothar Meyer&apos;s atomic-volume curve</SectionTitle>
      <p>Meyer showed periodicity in a measurable physical property by plotting atomic volume against atomic weight. For a condensed element, the molar or atomic volume is approximated by:</p>
      <div style={styles.displayFormula}><Formula label="V sub m equals M divided by rho">V<Sub>m</Sub> = M/ρ</Formula></div>
      <p>Here <Formula>V<Sub>m</Sub></Formula> is molar volume, <Formula>M</Formula> is molar mass and <Formula>ρ</Formula> is density. Consistent units give <Formula>V<Sub>m</Sub></Formula> in cm<Sup>3</Sup> mol<Sup>−1</Sup>.</p>
      <MeyerCurve />
      <DataTable
        headers={["Curve region", "Typical elements", "Interpretation"]}
        rows={[
          ["Large peaks", "Li, Na, K, Rb, Cs", "Alkali metals have large molar volumes and one loosely held valence electron."],
          ["Descending branch", "Be, Mg, Ca, Sr, Ba", "Alkaline-earth metals are smaller than the neighbouring alkali metals."],
          ["Broad minima", "Transition-metal regions", "Increasing cohesive bonding and relatively compact atomic volumes."],
          ["Rising branch", "toward F, Cl, Br, I", "Volume rises again before the next alkali-metal peak."],
        ]}
      />
      <p>The curve proved that periodicity extends beyond valency and compound formulas to physical properties. Its weakness was practical: different properties produced different curves, and a graph was less useful than a table for chemical classification and prediction.</p>

      <SectionTitle number={4}>Mendeleev&apos;s periodic law and predictive table</SectionTitle>
      <Callout title="Mendeleev's periodic law" tone="gold"><p><strong>The physical and chemical properties of the elements are periodic functions of their atomic weights.</strong></p></Callout>
      <p>Mendeleev arranged elements mainly by increasing atomic weight but treated chemical resemblance, valency and the formulas of oxides and hydrides as stronger evidence whenever mass order conflicted with chemistry. His 1869 table and its 1871 refinement transformed classification from pattern recognition into a predictive scientific system.</p>

      <SubTitle>Valency architecture of the short-form table</SubTitle>
      <DataTable
        headers={["Historical group", "Representative highest oxide", "Typical covalent hydride", "Maximum positive valency pattern"]}
        rows={[
          ["I", <span key="i">R<Sub>2</Sub>O</span>, "RH", "+1"],
          ["II", "RO", <span key="ii">RH<Sub>2</Sub></span>, "+2"],
          ["III", <span key="iii">R<Sub>2</Sub>O<Sub>3</Sub></span>, <span key="h3">RH<Sub>3</Sub></span>, "+3"],
          ["IV", <span key="iv">RO<Sub>2</Sub></span>, <span key="h4">RH<Sub>4</Sub></span>, "+4"],
          ["V", <span key="v">R<Sub>2</Sub>O<Sub>5</Sub></span>, <span key="vh">RH<Sub>3</Sub></span>, "+5"],
          ["VI", <span key="vi">RO<Sub>3</Sub></span>, <span key="vih">RH<Sub>2</Sub></span>, "+6"],
          ["VII", <span key="vii">R<Sub>2</Sub>O<Sub>7</Sub></span>, "RH", "+7"],
          ["VIII", "variable", "not represented by one simple formula", "three transition-metal columns"],
        ]}
      />
      <DataTable
        caption="Complete classic Group VIII triads in the short-form arrangement"
        headers={["First transition series", "Second transition series", "Third transition series"]}
        rows={[["Fe, Co, Ni", "Ru, Rh, Pd", "Os, Ir, Pt"]]}
      />

      <SubTitle>Major achievements</SubTitle>
      <ol style={styles.list}>
        <li><strong>Systematic families:</strong> chemically similar elements were placed together, making comparison practical.</li>
        <li><strong>Deliberate gaps:</strong> empty positions were retained instead of forcing a known element into an unsuitable family.</li>
        <li><strong>Testable predictions:</strong> atomic mass, density, valency and formulas of compounds of missing elements were forecast.</li>
        <li><strong>Correction of data:</strong> doubtful atomic masses and valencies were reconsidered when they contradicted periodic position.</li>
        <li><strong>Chemical priority:</strong> mass order was reversed where chemical relationships demanded it.</li>
        <li><strong>Noble gases:</strong> after their discovery, a new zero group could be added without destroying the table.</li>
      </ol>

      <DataTable
        caption="The three classic successful predictions that established Mendeleev's reputation"
        headers={["Mendeleev's name", "Element discovered", "Discovery year", "Key confirmation"]}
        rows={[
          ["Eka-aluminium", "Gallium (Ga)", "1875", "Trivalent chemistry, low melting point and density close to prediction"],
          ["Eka-boron", "Scandium (Sc)", "1879", <span key="sc">Trivalent oxide Sc<Sub>2</Sub>O<Sub>3</Sub> and mass near the predicted region</span>],
          ["Eka-silicon", "Germanium (Ge)", "1886", <span key="ge">Tetravalent oxide GeO<Sub>2</Sub>, chloride GeCl<Sub>4</Sub> and density close to prediction</span>],
        ]}
      />
      <p>Technetium, discovered in 1937, is often connected retrospectively with an “eka-manganese” vacancy, but it should be discussed separately from the classic three direct confirmations above.</p>

      <SubTitle>Worked comparison: eka-silicon and germanium</SubTitle>
      <DataTable
        headers={["Property", "Mendeleev's eka-silicon prediction", "Germanium observed"]}
        rows={[
          ["Atomic mass", "about 72", "72.6 historically; modern standard value about 72.63"],
          ["Density", <span key="d1">about 5.5 g cm<Sup>−3</Sup></span>, <span key="d2">about 5.3–5.4 g cm<Sup>−3</Sup></span>],
          ["Oxide", <span key="o1">EsO<Sub>2</Sub></span>, <span key="o2">GeO<Sub>2</Sub></span>],
          ["Chloride", <span key="c1">EsCl<Sub>4</Sub>, volatile liquid</span>, <span key="c2">GeCl<Sub>4</Sub>, volatile liquid, b.p. ≈ 84 °C</span>],
          ["Chemical type", "metalloid-like element below silicon", "metalloid with semiconductor behaviour"],
        ]}
      />

      <WorkedProblem title="Solved Problem 3 — How Mendeleev corrected beryllium's atomic mass">
        <p>The relation used was <Formula>atomic mass = equivalent mass × valency</Formula>. Beryllium&apos;s equivalent mass was about 4.5.</p>
        <p><strong>Incorrect trivalent assumption:</strong> <Formula>4.5 × 3 = 13.5</Formula>, which did not fit the chemically appropriate position.</p>
        <p><strong>Divalent assignment:</strong> <Formula>4.5 × 2 = 9.0</Formula>, placing Be between Li and B and matching its oxide BeO.</p>
        <p><strong>Conclusion:</strong> periodic placement supported valency 2 and an atomic mass near 9.</p>
      </WorkedProblem>

      <SubTitle>Limitations of the mass-based table</SubTitle>
      <DataTable
        headers={["Limitation", "Why it arose", "Modern resolution"]}
        rows={[
          ["Hydrogen's uncertain position", <span key="h">H has 1s<Sup>1</Sup>, forms H<Sup>+</Sup> like group 1 and H<Sup>−</Sup> like group 17.</span>, "Hydrogen is retained as a special case because no single placement captures all its chemistry."],
          ["No logical place for isotopes", "Isotopes have different masses but nearly identical chemistry.", "All isotopes share one atomic number and therefore one position."],
          ["Anomalous mass pairs", "Strict mass order conflicted with chemical families.", "Atomic-number order gives Ar–K, Co–Ni and Te–I correctly."],
          ["Similar elements separated", "The A/B subgroup arrangement did not express every relationship cleanly.", "The 18-group long form places homologues in continuous columns."],
          ["Dissimilar elements together", <span key="coin">Alkali metals and coinage metals appeared under historical Group I despite very different reactivity.</span>, "Electronic blocks and IUPAC groups separate groups 1 and 11."],
          ["No mechanism for periodicity", "Atomic structure was unknown.", "Recurring valence configurations provide the mechanism."],
        ]}
      />
      <DataTable
        caption="Anomalous atomic-mass pairs resolved by atomic number"
        headers={["Pair", "Relative atomic masses", "Correct atomic-number order", "Reason"]}
        rows={[
          ["Ar, K", "Ar 39.948 > K 39.098", "Z(Ar) = 18 < Z(K) = 19", "A noble gas must precede the next alkali metal."],
          ["Co, Ni", "Co 58.933 > Ni 58.693", "Z(Co) = 27 < Z(Ni) = 28", "Atomic number preserves transition-series order."],
          ["Te, I", "Te 127.60 > I 126.904", "Z(Te) = 52 < Z(I) = 53", "Chalcogen Te correctly precedes halogen I."],
        ]}
      />

      <SectionTitle number={5}>Moseley and the modern periodic law</SectionTitle>
      <p>In 1913 Henry Moseley measured characteristic X-ray frequencies from different elemental targets. For a given X-ray series he obtained a linear relation:</p>
      <div style={styles.displayFormula}><Formula label="square root of nu equals a times Z minus b">√ν = a(Z − b)</Formula></div>
      <p><Formula>ν</Formula> is the characteristic X-ray frequency, <Formula>Z</Formula> is atomic number, <Formula>a</Formula> is a proportionality constant and <Formula>b</Formula> is a screening constant for the series. The decisive result was that <Formula>√ν</Formula> varied smoothly with <Formula>Z</Formula>, not with atomic mass.</p>
      <MoseleyGraph />
      <Callout title="Modern periodic law" tone="cyan"><p><strong>The physical and chemical properties of elements are periodic functions of their atomic numbers.</strong></p></Callout>
      <p>Atomic number is fundamental because it fixes nuclear charge and, for a neutral atom, the number of electrons. Electron arrangement then determines valence-shell structure and chemistry:</p>
      <div style={styles.flow}>Z → nuclear charge → electronic configuration → valence shell → chemical properties</div>

      <WorkedProblem title="Solved Problem 4 — Resolve the argon–potassium anomaly">
        <p><strong>Mass comparison:</strong> <Formula>A(Ar) = 39.948 &gt; A(K) = 39.098</Formula>, apparently suggesting K should come first.</p>
        <p><strong>Atomic-number comparison:</strong> <Formula>Z(Ar) = 18 &lt; Z(K) = 19</Formula>.</p>
        <p><strong>Chemical check:</strong> Ar closes period 3 as a noble gas; K begins period 4 as an alkali metal.</p>
        <p><strong>Conclusion:</strong> atomic-number order Ar → K is correct even though atomic masses are reversed.</p>
      </WorkedProblem>

      <SectionTitle number={6}>Cause of periodicity</SectionTitle>
      <p>Successive elements differ by one proton and, in a neutral atom, one electron. Electrons enter orbitals according to orbital-energy order. When an analogous valence-shell configuration reappears, related chemistry reappears. Thus periodicity is a consequence of recurring electronic configuration—not merely a numerical coincidence.</p>
      <DataTable
        headers={["Family", "Recurring outer configuration", "Immediate chemical consequence"]}
        rows={[
          ["Group 1", <span key="g1">ns<Sup>1</Sup></span>, <span key="g1c">easy loss of one electron; common +1 state</span>],
          ["Group 2", <span key="g2">ns<Sup>2</Sup></span>, <span key="g2c">common +2 state</span>],
          ["Group 13", <span key="g13">ns<Sup>2</Sup>np<Sup>1</Sup></span>, "three valence electrons; common +3 state, with heavier-element inert-pair effects"],
          ["Group 14", <span key="g14">ns<Sup>2</Sup>np<Sup>2</Sup></span>, "tetravalency and +4/−4 patterns"],
          ["Group 15", <span key="g15">ns<Sup>2</Sup>np<Sup>3</Sup></span>, "half-filled p subshell; common −3, +3 and +5 patterns"],
          ["Group 16", <span key="g16">ns<Sup>2</Sup>np<Sup>4</Sup></span>, "two electrons short of a noble-gas configuration"],
          ["Group 17", <span key="g17">ns<Sup>2</Sup>np<Sup>5</Sup></span>, "one electron short; common −1 state"],
          ["Group 18", <span key="g18">ns<Sup>2</Sup>np<Sup>6</Sup>; He = 1s<Sup>2</Sup></span>, "closed shell and very high resistance to electron removal"],
        ]}
      />
      <p>For example, Li: 1s<Sup>2</Sup>2s<Sup>1</Sup>, Na: [Ne]3s<Sup>1</Sup> and K: [Ar]4s<Sup>1</Sup> share the terminal pattern <Formula>ns<Sup>1</Sup></Formula>. Their shared outer configuration explains analogous +1 chemistry.</p>

      <SectionTitle number={7}>Modern long-form periodic table</SectionTitle>
      <p>The long-form table arranges elements by increasing atomic number into seven periods and eighteen IUPAC groups. The block is determined by the subshell receiving the differentiating electron. The separated lanthanoid and actinoid rows are displayed below only to keep the table compact; structurally they belong inside periods 6 and 7.</p>
      <DataTable
        headers={["Block", "General differentiating configuration", "Position", "Maximum width"]}
        rows={[
          ["s block", <span key="s">ns<Sup>1–2</Sup></span>, "Groups 1–2; He is electronically s-block but placed in group 18 by chemistry", "2 columns"],
          ["p block", <span key="p">ns<Sup>2</Sup>np<Sup>1–6</Sup></span>, "Groups 13–18", "6 columns"],
          ["d block", <span key="d">(n − 1)d<Sup>1–10</Sup>ns<Sup>0–2</Sup></span>, "Groups 3–12", "10 columns"],
          ["f block", <span key="f">(n − 2)f<Sup>1–14</Sup>(n − 1)d<Sup>0–1</Sup>ns<Sup>2</Sup></span>, "Lanthanoids and actinoids within periods 6 and 7", "14 columns"],
        ]}
      />

      <SubTitle>Shell capacity and period length are related but not identical rules</SubTitle>
      <p>For shell principal quantum number <Formula>n</Formula>, the number of orbitals is <Formula>n<Sup>2</Sup></Formula>, so the maximum electron capacity is:</p>
      <div style={styles.displayFormula}><Formula label="maximum electrons in shell n equals two n squared">N<Sub>max</Sub> = 2n<Sup>2</Sup></Formula></div>
      <p>However, actual period lengths follow the subshells filled between successive noble gases. Because orbital energies interleave, period 3 contains only 3s and 3p—not 3d. Therefore the period-length sequence is derived from the filling blocks below.</p>
      <DataTable
        headers={["Period", "Principal shell begins", "Subshells filled across the period", "Length", "Classification"]}
        rows={[
          ["1", "n = 1", <span key="p1">1s<Sup>1–2</Sup></span>, "2", "shortest"],
          ["2", "n = 2", <span key="p2">2s<Sup>1–2</Sup>, 2p<Sup>1–6</Sup></span>, "2 + 6 = 8", "short"],
          ["3", "n = 3", <span key="p3">3s<Sup>1–2</Sup>, 3p<Sup>1–6</Sup></span>, "2 + 6 = 8", "short"],
          ["4", "n = 4", <span key="p4">4s<Sup>1–2</Sup>, 3d<Sup>1–10</Sup>, 4p<Sup>1–6</Sup></span>, "2 + 10 + 6 = 18", "long"],
          ["5", "n = 5", <span key="p5">5s<Sup>1–2</Sup>, 4d<Sup>1–10</Sup>, 5p<Sup>1–6</Sup></span>, "18", "long"],
          ["6", "n = 6", <span key="p6">6s<Sup>1–2</Sup>, 4f<Sup>1–14</Sup>, 5d<Sup>1–10</Sup>, 6p<Sup>1–6</Sup></span>, "2 + 14 + 10 + 6 = 32", "very long"],
          ["7", "n = 7", <span key="p7">7s<Sup>1–2</Sup>, 5f<Sup>1–14</Sup>, 6d<Sup>1–10</Sup>, 7p<Sup>1–6</Sup></span>, "32", "very long; presently complete through Og"],
        ]}
      />

      <WorkedProblem title="Solved Problem 5 — Why can period 6 contain 32 elements?">
        <p><strong>Step 1:</strong> Period 6 begins with filling 6s: capacity 2.</p>
        <p><strong>Step 2:</strong> Then 4f fills: 7 orbitals × 2 electrons = 14.</p>
        <p><strong>Step 3:</strong> Then 5d fills: 5 orbitals × 2 = 10.</p>
        <p><strong>Step 4:</strong> Finally 6p fills: 3 orbitals × 2 = 6.</p>
        <div style={styles.displayFormula}><Formula>2 + 14 + 10 + 6 = 32</Formula></div>
        <p><strong>Answer:</strong> The sixth period has 32 positions.</p>
      </WorkedProblem>

      <WorkedProblem title="Solved Problem 6 — Locate Z = 114">
        <p>The element is flerovium, Fl. Its valence configuration ends in <Formula>7s<Sup>2</Sup>7p<Sup>2</Sup></Formula>.</p>
        <p><strong>Period:</strong> highest valence-shell principal number is 7.</p>
        <p><strong>Block:</strong> differentiating electron enters p.</p>
        <p><strong>Group:</strong> p-block group = 10 + valence electrons = 10 + 4 = 14.</p>
        <p><strong>Answer:</strong> period 7, group 14, p block.</p>
      </WorkedProblem>

      <WorkedProblem title="Solved Problem 7 — Third-period group-17 element">
        <p>Group 17 has valence pattern <Formula>ns<Sup>2</Sup>np<Sup>5</Sup></Formula>. For period 3, <Formula>n = 3</Formula>, so the configuration is [Ne]3s<Sup>2</Sup>3p<Sup>5</Sup>.</p>
        <p>This is chlorine, <strong>Z = 17</strong>.</p>
      </WorkedProblem>

      <WorkedProblem title="Solved Problem 8 — Why does the d-block magnetic-moment graph rise and then fall?">
        <p>For many high-spin free ions, the spin-only magnetic moment is:</p>
        <div style={styles.displayFormula}><Formula label="mu equals square root of n times n plus two Bohr magnetons">μ = √[n(n + 2)] BM</Formula></div>
        <p><Formula>n</Formula> is the number of unpaired electrons. Across a d series, unpaired electrons generally increase from d<Sup>1</Sup> to d<Sup>5</Sup>, then decrease from d<Sup>6</Sup> to d<Sup>10</Sup> as pairing begins.</p>
        <DataTable headers={["Configuration", "Unpaired electrons", "Spin-only μ / BM"]} rows={[
          [<span key="d0">d<Sup>0</Sup> or d<Sup>10</Sup></span>, "0", "0"],
          [<span key="d1">d<Sup>1</Sup> or d<Sup>9</Sup></span>, "1", "√3 ≈ 1.73"],
          [<span key="d2">d<Sup>2</Sup> or d<Sup>8</Sup></span>, "2", "√8 ≈ 2.83"],
          [<span key="d3">d<Sup>3</Sup> or high-spin d<Sup>7</Sup></span>, "3", "√15 ≈ 3.87"],
          [<span key="d4">d<Sup>4</Sup> or high-spin d<Sup>6</Sup></span>, "4", "√24 ≈ 4.90"],
          [<span key="d5">high-spin d<Sup>5</Sup></span>, "5", "√35 ≈ 5.92"],
        ]} />
        <p><strong>Conclusion:</strong> the correct idealised graph is a rise to a maximum near d<Sup>5</Sup> followed by a fall toward d<Sup>10</Sup>. Exact experimental moments can deviate because of ligand field, spin state and orbital contributions.</p>
      </WorkedProblem>

      <Callout title="Final synthesis" tone="mint">
        <p>The historical sequence is cumulative: early schemes detected fragments of order; Meyer demonstrated physical periodicity; Mendeleev built a predictive chemical system; Moseley supplied the correct ordering variable; quantum mechanics explained the recurrence through valence configurations.</p>
      </Callout>
    </article>
  );
}

const styles: Record<string, CSSProperties> = {
  page: {
    width: "100%",
    color: C.text,
    background: C.page,
    fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    lineHeight: 1.72,
    fontSize: "1rem",
    padding: "clamp(18px, 3vw, 38px)",
    borderRadius: 24,
    boxSizing: "border-box",
  },
  hero: {
    padding: "clamp(22px, 4vw, 48px)",
    border: `1px solid ${C.line}`,
    borderRadius: 24,
    background: `linear-gradient(145deg, ${C.panel2}, ${C.panel})`,
    marginBottom: 34,
  },
  eyebrow: {
    color: C.gold,
    textTransform: "uppercase",
    letterSpacing: "0.14em",
    fontWeight: 800,
    margin: 0,
  },
  title: {
    fontFamily: "Georgia, 'Times New Roman', serif",
    fontSize: "clamp(2rem, 5vw, 4rem)",
    lineHeight: 1.05,
    margin: "12px 0 16px",
  },
  lead: {
    color: C.muted,
    fontSize: "clamp(1rem, 2vw, 1.22rem)",
    maxWidth: 920,
    margin: 0,
  },
  sectionTitle: {
    display: "flex",
    alignItems: "center",
    gap: 14,
    fontFamily: "Georgia, 'Times New Roman', serif",
    fontSize: "clamp(1.65rem, 3vw, 2.55rem)",
    lineHeight: 1.18,
    color: C.gold,
    paddingBottom: 12,
    borderBottom: `2px solid ${C.line}`,
    margin: "44px 0 22px",
  },
  sectionNumber: {
    display: "inline-grid",
    placeItems: "center",
    minWidth: 42,
    height: 42,
    borderRadius: 14,
    color: C.page,
    background: C.gold,
    fontFamily: "Inter, sans-serif",
    fontSize: "1.12rem",
    fontWeight: 900,
  },
  subTitle: {
    fontFamily: "Georgia, 'Times New Roman', serif",
    color: C.cyan,
    fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
    margin: "30px 0 10px",
  },
  callout: {
    margin: "22px 0",
    padding: "16px 20px",
    borderLeft: "4px solid",
    background: C.panel,
    borderRadius: "0 16px 16px 0",
  },
  calloutTitle: {
    display: "block",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    marginBottom: 6,
  },
  list: {
    margin: "8px 0",
    paddingLeft: 24,
  },
  formula: {
    fontFamily: "Cambria Math, STIX Two Math, Georgia, serif",
    whiteSpace: "nowrap",
    color: "#ffffff",
  },
  displayFormula: {
    margin: "18px 0",
    padding: "15px 18px",
    textAlign: "center",
    fontSize: "clamp(1.25rem, 3vw, 1.9rem)",
    background: C.panel,
    border: `1px solid ${C.line}`,
    borderRadius: 16,
    overflowX: "auto",
  },
  tableWrap: {
    width: "100%",
    overflowX: "auto",
    margin: "20px 0 28px",
    border: `1px solid ${C.line}`,
    borderRadius: 16,
  },
  table: {
    width: "100%",
    minWidth: 680,
    borderCollapse: "collapse",
    background: C.panel,
  },
  caption: {
    textAlign: "left",
    color: C.gold,
    fontWeight: 800,
    padding: "14px 16px",
    background: C.panel2,
  },
  th: {
    padding: "13px 15px",
    textAlign: "left",
    color: C.gold,
    background: C.panel2,
    borderBottom: `2px solid ${C.gold}`,
    verticalAlign: "top",
  },
  td: {
    padding: "13px 15px",
    color: C.text,
    borderBottom: `1px solid ${C.line}`,
    verticalAlign: "top",
  },
  figure: {
    margin: "24px 0 30px",
    border: `1px solid ${C.line}`,
    borderRadius: 20,
    background: C.panel,
    padding: "14px",
    overflow: "hidden",
  },
  svg: {
    width: "100%",
    height: "auto",
    display: "block",
  },
  figcaption: {
    color: C.muted,
    padding: "8px 8px 2px",
  },
  problem: {
    margin: "24px 0",
    padding: "18px 20px",
    border: `1px solid ${C.line}`,
    borderTop: `3px solid ${C.violet}`,
    borderRadius: 16,
    background: C.panel,
  },
  problemTitle: {
    color: C.violet,
    fontSize: "1.14rem",
    margin: "0 0 10px",
  },
  flow: {
    padding: "16px",
    textAlign: "center",
    color: C.cyan,
    fontWeight: 800,
    letterSpacing: "0.02em",
    background: C.panel2,
    borderRadius: 14,
    margin: "18px 0",
  },
};
