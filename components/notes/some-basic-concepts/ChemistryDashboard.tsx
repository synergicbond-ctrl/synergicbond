
import type { ReactNode } from "react";
import styles from "./chemistry.module.css";
import {
  accuracyRows,
  concentrationRows,
  exercises,
  glasswareRows,
  isotopeRows,
  lawRows,
  propertyRows,
  sectionLinks,
  siBaseRows,
  siDefinitionRows,
  siPrefixRows,
  significantFigureRows,
  stateRows,
  stoichiometryRows,
  type DataColumn,
  type DataRow,
} from "./content";
import { Math } from "./Math";
import {
  AccuracyTargets,
  ConcentrationMap,
  HistoricalTimeline,
  LimitingReagentVisual,
  MatterTree,
  MeasurementWorkbench,
  MoleBridge,
  MoleculeGallery,
  ParticleStatesVisual,
  TransformationVisual,
} from "./Visuals";

function DataTable({ caption, columns, rows }: { caption: string; columns: DataColumn[]; rows: DataRow[] }) {
  return (
    <div className={styles.tableShell}>
      <table>
        <caption>{caption}</caption>
        <thead><tr>{columns.map(column => <th key={column.key} scope="col">{column.label}</th>)}</tr></thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={`${caption}-${index}`}>{columns.map((column, columnIndex) => columnIndex === 0
              ? <th key={column.key} scope="row">{row[column.key]}</th>
              : <td key={column.key}>{row[column.key]}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <header className={styles.sectionHeading}>
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      <p>{children}</p>
    </header>
  );
}

function Callout({ tone = "cyan", label, children }: { tone?: "cyan" | "amber" | "purple" | "danger"; label: string; children?: ReactNode }) {
  return <aside className={`${styles.callout} ${styles[`callout_${tone}`]}`}><b>{label}</b><div>{children}</div></aside>;
}

function FormulaBlock({ children, latex }: { children?: ReactNode; latex?: string }) {
  return <div className={styles.formulaBlock}>{latex ? <Math latex={latex} block /> : children}</div>;
}

function TopicCheck({ title, items }: { title: string; items: Array<{ q: string; a: string }> }) {
  return (
    <div className={styles.topicCheck}>
      <div><span>Quick check</span><h3>{title}</h3></div>
      <div className={styles.quickGrid}>
        {items.map((item, index) => (
          <details key={item.q}>
            <summary><span>{String(index + 1).padStart(2, "0")}</span>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}

function ExerciseLibrary() {
  return (
    <div className={styles.exerciseGrid}>
      {exercises.map(exercise => (
        <details key={exercise.id} className={styles.exercise}>
          <summary>
            <span>Q {exercise.id}</span>
            <div><b>{exercise.title}</b><small>{exercise.prompt}</small></div>
            <i aria-hidden="true">+</i>
          </summary>
          <div className={styles.exerciseBody}>
            <h4>Step-by-step solution</h4>
            <ol>{exercise.steps.map(step => <li key={step}>{step}</li>)}</ol>
            <div className={styles.answerStrip}><b>Answer</b><span>{exercise.answer}</span></div>
          </div>
        </details>
      ))}
    </div>
  );
}

export function ChemistryDashboard() {
  return (
    <main className={styles.page}>
      <div className={styles.gridBackdrop} aria-hidden="true" />
      <header className={styles.hero}>
        <div className={styles.heroCopy}>
          <span className={styles.badge}>Class 11 • Board Chemistry</span>
          <h1>Some Basic Concepts<br />of <em>Chemistry</em></h1>
          <p>Particles, units, chemical laws and stoichiometric relationships presented as one connected quantitative system.</p>
          <div className={styles.heroActions}>
            <a href="#history">Begin visual chapter</a>
            <a href="#practice" className={styles.secondaryAction}>Open practice library</a>
          </div>
          <div className={styles.stats}>
            <div><b>8</b><span>dashboard modules</span></div>
            <div><b>15+</b><span>embedded visuals</span></div>
            <div><b>36</b><span>worked exercises</span></div>
          </div>
        </div>
        <div className={styles.heroGraphic}>
          <div className={`${styles.orbit} ${styles.orbitA}`}><span /></div>
          <div className={`${styles.orbit} ${styles.orbitB}`}><span /></div>
          <div className={`${styles.orbit} ${styles.orbitC}`}><span /></div>
          <div className={styles.nucleus}>Cu</div>
          <div className={styles.heroBridge}><span>particle</span><b>›</b><span>mole</span><b>›</b><span>mass</span></div>
        </div>
      </header>

      <nav className={styles.stickyNav} aria-label="Chapter topics">
        {sectionLinks.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}
      </nav>

      <section id="history" className={styles.section}>
        <SectionHeading eyebrow="Foundations & history" title="Chemistry as a transformation science">
          Chemistry explains what substances are made of, how their particles are arranged and why one substance becomes another.
        </SectionHeading>
        <TransformationVisual />
        <div className={styles.split}>
          <HistoricalTimeline />
          <div className={styles.stack}>
            <Callout tone="amber" label="Board answer">Chemistry is the branch of science concerned with the composition, structure, properties and transformations of matter.</Callout>
            <Callout tone="purple" label="Acharya Kanda • 600 BCE">The Paramānu concept described eternal, spherical, supersensible particles that combine through unseen forces—an early atomistic framework.</Callout>
            <Callout label="Pioneers">Nagarjuna’s Rasratnakar developed mercury chemistry and metallurgy. Chakrapani described early soap preparation using oils and plant-derived alkalies.</Callout>
            <Callout tone="amber" label="Ajanta resin chemistry">Plant extracts, bark, fruits and natural resins formed durable protective coatings on wall paintings.</Callout>
          </div>
        </div>
        <TopicCheck title="Foundations checkpoint" items={[
          { q: "What is Rasayan Shastra?", a: "A practical Indian chemical tradition spanning metallurgy, medicine, dyes, glass, fermentation and allied processes." },
          { q: "State two ideas in Kanda’s Paramānu theory.", a: "Paramānu were indivisible and imperceptible; they were eternal, spherical, mobile and capable of combination." },
          { q: "Name one contribution of Nagarjuna.", a: "Rasratnakar describes mercury compounds and metallurgical extraction techniques." },
        ]} />
      </section>

      <section id="matter" className={styles.section}>
        <SectionHeading eyebrow="Matter architecture" title="From particle behaviour to classification">
          Arrangement, motion and intermolecular attraction explain the observable properties of solids, liquids and gases.
        </SectionHeading>
        <ParticleStatesVisual />
        <DataTable caption="Particle-level comparison of physical states" columns={[
          {key:"property",label:"Property"},{key:"solid",label:"Solid"},{key:"liquid",label:"Liquid"},{key:"gas",label:"Gas"}
        ]} rows={stateRows} />
        <MatterTree />
        <MoleculeGallery />
        <DataTable caption="Physical and chemical properties" columns={[
          {key:"basis",label:"Basis"},{key:"physical",label:"Physical property"},{key:"chemical",label:"Chemical property"}
        ]} rows={propertyRows} />
        <div className={styles.twoCards}>
          <Callout label="Glucose case study"><span>C₆H₁₂O₆ has carbon, hydrogen and oxygen in a fixed atomic ratio. It cannot be separated by physical methods.</span></Callout>
          <Callout tone="amber" label="Emergent properties"><span>Hydrogen burns and oxygen supports combustion, yet their compound H₂O is a liquid used to extinguish fire.</span></Callout>
        </div>
        <TopicCheck title="Matter checkpoint" items={[
          { q: "Why does a gas fill its container?", a: "Its particles are far apart and move rapidly in all directions." },
          { q: "Classify air.", a: "Air is a homogeneous mixture." },
          { q: "Why is NaCl described by formula mass rather than molecular mass?", a: "Solid NaCl forms an extended ionic lattice and does not contain discrete NaCl molecules." },
        ]} />
      </section>

      <section id="measurement" className={styles.section}>
        <SectionHeading eyebrow="Measurement laboratory" title="Every number needs a trustworthy unit">
          A measurement combines a numerical value with a unit. Precision depends on the instrument, calibration and method.
        </SectionHeading>
        <DataTable caption="Seven SI base quantities" columns={[
          {key:"quantity",label:"Quantity"},{key:"symbol",label:"Symbol"},{key:"unit",label:"SI unit"},{key:"unitSymbol",label:"Unit symbol"}
        ]} rows={siBaseRows} />
        <DataTable caption="Modern physical definitions of SI units" columns={[
          {key:"unit",label:"Unit"},{key:"symbol",label:"Symbol"},{key:"definition",label:"Definition"}
        ]} rows={siDefinitionRows} />
        <DataTable caption="Prefixes used in the SI system" columns={[
          {key:"multiple1",label:"Multiple"},{key:"prefix1",label:"Prefix"},{key:"symbol1",label:"Symbol"},
          {key:"multiple2",label:"Multiple"},{key:"prefix2",label:"Prefix"},{key:"symbol2",label:"Symbol"}
        ]} rows={siPrefixRows} />
        <MeasurementWorkbench />
        <DataTable caption="Volumetric glassware comparison" columns={[
          {key:"apparatus",label:"Apparatus"},{key:"use",label:"Primary use"},{key:"precision",label:"Precision"},{key:"boardNote",label:"Board note"}
        ]} rows={glasswareRows} />
        <div className={styles.formulaGrid}>
          <FormulaBlock latex="\rho = \frac{m}{V}" />
          <FormulaBlock latex="K = {}^{\circ}\mathrm{C} + 273.15" />
          <FormulaBlock latex="{}^{\circ}\mathrm{F} = \left(\frac{9}{5}\times{}^{\circ}\mathrm{C}\right)+32" />
        </div>
        <Callout tone="danger" label="Common mistake">Mass is the amount of matter and remains constant. Weight is a gravitational force and may change with location.</Callout>
        <TopicCheck title="Measurement checkpoint" items={[
          { q: "Why is a volumetric flask more suitable than a cylinder for preparing a standard solution?", a: "It is calibrated to contain one exact volume at the marked temperature." },
          { q: "Convert 25 °C to kelvin.", a: "25 + 273.15 = 298.15 K." },
          { q: "Write the relation between litre and cubic decimetre.", a: "1 L = 1 dm³." },
        ]} />
      </section>

      <section id="numbers" className={styles.section}>
        <SectionHeading eyebrow="Reliable numbers" title="Scientific notation, significant figures and uncertainty">
          Good chemistry is not only calculating a number—it is reporting that number honestly.
        </SectionHeading>
        <div className={styles.notationGrid}>
          <div><strong>232.508</strong><span>decimal moves left</span><b>2.32508 × 10²</b></div>
          <div><strong>0.00016</strong><span>decimal moves right</span><b>1.6 × 10⁻⁴</b></div>
        </div>
        <DataTable caption="Core significant-figure rules" columns={[
          {key:"rule",label:"Rule"},{key:"example",label:"Example"},{key:"result",label:"Significant figures"}
        ]} rows={significantFigureRows} />
        <AccuracyTargets />
        <DataTable caption="Accuracy and precision data • accepted value 2.00 g" columns={[
          {key:"student",label:"Student"},{key:"r1",label:"Reading 1"},{key:"r2",label:"Reading 2"},{key:"average",label:"Average"},{key:"interpretation",label:"Interpretation"}
        ]} rows={accuracyRows} />
        <div className={styles.twoCards}>
          <Callout label="Addition / subtraction">Report the result to the same number of decimal places as the least precise term.</Callout>
          <Callout tone="purple" label="Multiplication / division">Report the result with the same number of significant figures as the least precise factor.</Callout>
        </div>
        <div className={styles.solvedExample}>
          <span>Verified subtraction workflow</span>
          <FormulaBlock latex="(2.5\times10^{-2})-(4.8\times10^{-3})" />
          <FormulaBlock latex="=(2.50\times10^{-2})-(0.48\times10^{-2})" />
          <FormulaBlock latex="=(2.50-0.48)\times10^{-2}" />
          <FormulaBlock latex="=2.02\times10^{-2}" />
        </div>
        <TopicCheck title="Reliable-numbers checkpoint" items={[
          { q: "How many significant figures are in 0.00450?", a: "Three; leading zeros do not count, but the trailing zero after the decimal does." },
          { q: "What does accuracy measure?", a: "Closeness to the accepted or true value." },
          { q: "Why must exponents match before addition in scientific notation?", a: "Only coefficients representing the same power of ten can be added directly." },
        ]} />
      </section>

      <section id="laws" className={styles.section}>
        <SectionHeading eyebrow="Reaction logic" title="The five laws that made chemistry quantitative">
          Repeated mass and volume patterns showed that matter combines according to strict numerical rules.
        </SectionHeading>
        <DataTable caption="Five laws of chemical combination" columns={[
          {key:"law",label:"Law"},{key:"scientist",label:"Scientist"},{key:"statement",label:"Statement"},{key:"example",label:"Representative example"}
        ]} rows={lawRows} />
        <div className={styles.lawVisuals}>
          <div><b>Conservation</b><span>12 g + 32 g</span><strong>44 g</strong></div>
          <div><b>Definite proportions</b><span>H₂O</span><strong>H:O = 1:8</strong></div>
          <div><b>Multiple proportions</b><span>H₂O / H₂O₂</span><strong>16:32 = 1:2</strong></div>
          <div><b>Gas volumes</b><span>2 H₂ + 1 O₂</span><strong>2 H₂O(g)</strong></div>
          <div><b>Avogadro</b><span>equal V, same T and P</span><strong>equal molecule count</strong></div>
        </div>
        <Callout tone="amber" label="Historical bridge">Dalton initially rejected the idea that identical atoms could form diatomic molecules. Cannizzaro’s 1860 Karlsruhe clarification helped establish Avogadro’s interpretation.</Callout>
        <TopicCheck title="Reaction-laws checkpoint" items={[
          { q: "Which law is illustrated by H₂O and H₂O₂?", a: "Law of Multiple Proportions." },
          { q: "State Gay-Lussac’s law.", a: "At the same temperature and pressure, reacting gas volumes and gaseous product volumes are in simple whole-number ratios." },
          { q: "Why does mass remain constant in a closed reaction?", a: "Atoms are rearranged but neither created nor destroyed." },
        ]} />
      </section>

      <section id="mole" className={styles.section}>
        <SectionHeading eyebrow="Mole bridge & stoichiometry" title="Connect particles to measurable laboratory quantities">
          The mole links microscopic entities to grams, litres and experimentally useful amounts.
        </SectionHeading>
        <MoleBridge />
        <div className={styles.formulaGrid}>
          <FormulaBlock latex="1\,\mathrm{mol}=6.02214076\times10^{23}\,\mathrm{entities}" />
          <FormulaBlock latex="1\,\mathrm{u}=1.66054\times10^{-24}\,\mathrm{g}" />
          <FormulaBlock latex="n=\frac{m}{M}" />
        </div>
        <DataTable caption="Carbon isotope profile and average atomic mass" columns={[
          {key:"isotope",label:"Isotope"},{key:"abundance",label:"Natural abundance"},{key:"mass",label:"Isotopic mass"},{key:"contribution",label:"Weighted contribution"}
        ]} rows={isotopeRows} />
        <div className={styles.pipeline}>
          {["Mass %","Moles","Simplest ratio","Empirical formula","n = molar mass ÷ empirical mass","Molecular formula"].map((item,index)=><div key={item}><span>{String(index+1).padStart(2,"0")}</span><b>{item}</b></div>)}
        </div>
        <div className={styles.reactionBanner}>CH₄ + 2O₂ → CO₂ + 2H₂O</div>
        <DataTable caption="Methane combustion interpreted at four scales" columns={[
          {key:"scale",label:"Scale"},{key:"methane",label:"CH₄"},{key:"oxygen",label:"O₂"},{key:"carbonDioxide",label:"CO₂"},{key:"water",label:"H₂O"}
        ]} rows={stoichiometryRows} />
        <LimitingReagentVisual />
        <Callout label="Formula mass">NaCl forms a three-dimensional ionic lattice. Formula mass = 23.0 u + 35.5 u = 58.5 u.</Callout>
        <TopicCheck title="Mole & stoichiometry checkpoint" items={[
          { q: "How many molecules are present in 0.50 mol H₂O?", a: "0.50 × 6.02214076 × 10²³ = 3.011 × 10²³ molecules." },
          { q: "What determines maximum product yield?", a: "The limiting reagent." },
          { q: "Why is average atomic mass usually non-integral?", a: "It is a weighted mean of isotopic masses according to natural abundance." },
        ]} />
      </section>

      <section id="solutions" className={styles.section}>
        <SectionHeading eyebrow="Solutions dashboard" title="Choose the concentration scale that matches the measurement">
          Concentration expressions differ mainly in the denominator and whether temperature changes the measured quantity.
        </SectionHeading>
        <ConcentrationMap />
        <DataTable caption="Concentration terms compared" columns={[
          {key:"term",label:"Term"},{key:"formula",label:"Formula"},{key:"denominator",label:"Denominator"},{key:"unit",label:"Unit"},{key:"temperature",label:"Temperature effect"}
        ]} rows={concentrationRows} />
        <div className={styles.formulaGrid}>
          <FormulaBlock latex="M_1V_1=M_2V_2" />
          <FormulaBlock latex="x_A+x_B=1" />
          <FormulaBlock latex="\text{mass \%}=\frac{m_{\text{solute}}}{m_{\text{solution}}}\times100" />
        </div>
        <TopicCheck title="Solutions checkpoint" items={[
          { q: "Which concentration term changes with temperature?", a: "Molarity, because solution volume changes with temperature." },
          { q: "What is the unit of molality?", a: "mol kg⁻¹." },
          { q: "A 2.0 M stock is diluted from 25 mL to 100 mL. Find final molarity.", a: "M₂ = M₁V₁/V₂ = 2.0 × 25/100 = 0.50 M." },
        ]} />
      </section>

      <section id="practice" className={styles.section}>
        <SectionHeading eyebrow="Comprehensive practice library" title="36 canonical problems with step-by-step solutions">
          Open any problem to reveal the method, chemical equations, unit conversions and final board-ready result.
        </SectionHeading>
        <ExerciseLibrary />
      </section>

      <footer className={styles.footer}>
        <b>Synergic Bond • Chemistry OS</b>
        <span>Class 11 Board Chemistry • Visual, quantitative and exam-ready</span>
      </footer>
    </main>
  );
}
