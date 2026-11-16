"use client";

import { ChapterSection, ConceptCard, ExamTrap, FigureFrame, IntegratedSourcePages, K, KB, PartShell, ReferenceExpansion, SaltEffectFigure, WorkedExample } from "../../chemical-kinetics-shared";

export default function ChemicalKineticsPart10() {
  return (
    <PartShell part={10} title={"Advanced Derivations I — Composite Rate Laws"} description={"Olympiad-level derivations and nontrivial applications built directly into the source sequence."}>
      <ChapterSection
            id="advanced"
            index="16"
            eyebrow="Beyond the core syllabus"
            title="Solvent effects, kinetic salt effect, isotope effects and photochemical kinetics"
            intro={<>The source notes extend into topics that sharpen mechanism reasoning. These ideas are presented as advanced enrichment: they are useful for difficult JEE-style inference even when the full formalism lies beyond the standard syllabus.</>}
          >
            <div className="grid gap-5 xl:grid-cols-2">
              <ConceptCard title="Solvent polarity and ionic transition states" tone="cyan">
                <p>A solvent changes the relative stabilisation of reactants and the transition-state region. A more polar medium accelerates a reaction when the transition state is more charge-separated than the reactants, and can slow it when charge is destroyed.</p>
                <p>Specific solvation, hydrogen bonding and viscosity can be as important as bulk dielectric constant.</p>
              </ConceptCard>
              <ConceptCard title="Diffusion-controlled reactions" tone="violet">
                <p>When reaction after encounter is nearly certain, the observed rate is limited by how fast species diffuse together. In liquids, increasing viscosity usually lowers the diffusion-controlled rate constant.</p>
                <p>The observed constant can be viewed as competition among diffusion into contact, chemical conversion and separation.</p>
              </ConceptCard>
            </div>
            <div className="grid gap-5 xl:grid-cols-2">
              <ConceptCard title="Lindemann–Hinshelwood unimolecular kinetics" tone="amber">
                <p>A gas-phase molecule may first acquire energy by collision and then decompose:</p>
                <KB>{String.raw`A+M\ \mathop{\rightleftharpoons}^{k_1}_{k_{-1}}\ A^*+M,\qquad A^*\xrightarrow{k_2}P`}</KB>
                <p>Steady state for <K>{String.raw`A^*`}</K> gives</p>
                <KB>{String.raw`r=\frac{k_1k_2[A][M]}{k_{-1}[M]+k_2}`}</KB>
                <p>At low pressure the reaction is second order, <K>{String.raw`r\propto[A][M]`}</K>; at high pressure it becomes first order in A. This explains pressure-dependent “unimolecular” kinetics.</p>
              </ConceptCard>
              <ConceptCard title="Relaxation experiments" tone="emerald">
                <p>A temperature jump, pressure jump or electric-field jump rapidly displaces an equilibrium. The return to equilibrium is followed spectroscopically or electrically.</p>
                <p>For a simple first-order reversible system, the perturbation decays as <K>{String.raw`e^{-(k_f+k_b)t}`}</K>. A pressure jump is useful only when the reaction has a nonzero volume change or pressure-dependent equilibrium.</p>
              </ConceptCard>
              <ConceptCard title="Autocatalysis and sigmoidal growth" tone="violet">
                <p>For <K>{String.raw`A\rightarrow P`}</K> with <K>{String.raw`r=k[A][P]`}</K>, product promotes further product formation. With <K>{String.raw`[A]+[P]=C`}</K>,</p>
                <KB>{String.raw`\frac{d[P]}{dt}=k[P](C-[P])`}</KB>
                <p>The integrated profile is logistic and has an induction period, a maximum rate at <K>{String.raw`[P]=C/2`}</K>, and a final plateau.</p>
              </ConceptCard>
              <ConceptCard title="Polymerisation kinetics" tone="rose">
                <p>Chain polymerisation separates initiation, propagation, chain transfer and termination. Radical steady state commonly gives <K>{String.raw`r_p\propto[M][I]^{1/2}`}</K>.</p>
                <p>Increasing initiator concentration usually raises polymerisation rate but lowers average chain length because more chains are started. Step-growth polymerisation follows functional-group conversion rather than radical-chain kinetics.</p>
              </ConceptCard>
            </div>
            <FigureFrame title="Primary kinetic salt effect in dilute aqueous solution" caption={<>Like-charged reactants are usually accelerated by increasing ionic strength; oppositely charged reactants are retarded. The limiting straight-line form applies only at low ionic strength.</>}>
              <SaltEffectFigure />
            </FigureFrame>
            <ConceptCard title="Brønsted–Bjerrum limiting relation" tone="amber">
              <KB>{String.raw`\log_{10}\left(\frac{k}{k^0}\right)\approx1.02\,z_Az_B\sqrt I\qquad(25^\circ\mathrm C,\ dilute\ water)`}</KB>
              <p><K>{String.raw`I=\tfrac12\sum_i c_iz_i^2`}</K> is ionic strength. The sign of <K>{String.raw`z_Az_B`}</K> predicts the initial slope.</p>
              <ExamTrap>A neutral reactant gives no primary salt effect in this limiting model, but secondary salt and activity effects can still occur.</ExamTrap>
            </ConceptCard>
            <div className="grid gap-5 xl:grid-cols-2">
              <ConceptCard title="Kinetic isotope effect" tone="emerald">
                <p>Replacing a light isotope by a heavier one changes vibrational zero-point energies and sometimes tunnelling probability. A large primary H/D isotope effect suggests that an X–H bond is substantially changed in or before the rate-controlling transition-state region.</p>
                <p>A small isotope effect does not prove the bond is uninvolved; masking by another slow step is possible.</p>
              </ConceptCard>
              <ConceptCard title="Quantum tunnelling" tone="rose">
                <p>Light particles can cross a barrier with energy below its classical height. Tunnelling can produce unusually weak temperature dependence, curved Arrhenius plots and enhanced H/D isotope effects.</p>
              </ConceptCard>
            </div>
            <div className="grid gap-5 xl:grid-cols-2">
              <ConceptCard title="Photochemical primary step" tone="cyan">
                <p>Absorption creates an electronically excited species:</p>
                <KB>{String.raw`A+h\nu\rightarrow A^*`}</KB>
                <p>Excited states may fluoresce, undergo nonradiative decay, transfer energy/electrons, dissociate or react. Light absorption, not thermal collision alone, creates the reactive state.</p>
              </ConceptCard>
              <ConceptCard title="Quantum yield" tone="violet">
                <KB>{String.raw`\Phi=\frac{\text{number of specified events}}{\text{number of photons absorbed}}`}</KB>
                <p><K>{String.raw`\Phi>1`}</K> is possible in a chain reaction; <K>{String.raw`\Phi<1`}</K> occurs when competing deactivation wastes excited states.</p>
              </ConceptCard>
            </div>
            <ConceptCard title="Excited-state lifetime and quenching" tone="amber">
              <p>For intrinsic first-order decay k₀ and bimolecular quencher Q,</p>
              <KB>{String.raw`-\frac{d[A^*]}{dt}=(k_0+k_q[Q])[A^*]`}</KB>
              <KB>{String.raw`\frac{\tau_0}{\tau}=1+k_q\tau_0[Q]`}</KB>
              <p>The Stern–Volmer slope is <K>{String.raw`k_q\tau_0`}</K>.</p>
            </ConceptCard>
            <ConceptCard title="Electron-transfer kinetics" tone="navy">
              <p>Long-range electron transfer can depend strongly on donor–acceptor distance, reorganisation of the surroundings and reaction free energy. A compact qualitative form is</p>
              <KB>{String.raw`k_{ET}\propto e^{-\beta r}\exp\left[-\frac{(\lambda+\Delta G^\circ)^2}{4\lambda RT}\right]`}</KB>
              <p>The exponential distance term reflects electronic coupling; λ is the reorganisation energy. This is enrichment, not a formula to deploy without the assumptions of the model.</p>
            </ConceptCard>
            <WorkedExample
              number={29}
              title="Primary kinetic salt effect"
              concept="Use ionic strength and reactant charges in the dilute limiting law."
              question={<>A reaction between ions of charges +2 and −1 has <K>{String.raw`k^0=4.0\times10^{-3}\ \mathrm{L\,mol^{-1}\,s^{-1}}`}</K>. Estimate k at ionic strength 0.010 M at 25 °C.</>}
              solution={<>
                <p>Here <K>{String.raw`z_Az_B=(+2)(-1)=-2`}</K> and <K>{String.raw`\sqrt I=0.100`}</K>.</p>
                <KB>{String.raw`\log_{10}(k/k^0)=1.02(-2)(0.100)=-0.204`}</KB>
                <KB>{String.raw`k/k^0=10^{-0.204}=0.625`}</KB>
                <KB>{String.raw`k=(0.625)(4.0\times10^{-3})=2.50\times10^{-3}\ \mathrm{L\,mol^{-1}\,s^{-1}}`}</KB>
              </>}
              answer={<><K>{String.raw`k\approx2.5\times10^{-3}\ \mathrm{L\,mol^{-1}\,s^{-1}}`}</K>; ionic strength retards this oppositely charged pair.</>}
            />
            <WorkedExample
              number={30}
              title="Isotope effect as a mechanistic probe"
              concept="Compare competing mechanisms rather than treating KIE as a magic label."
              question={<>A reaction gives <K>{String.raw`k_H/k_D=6.8`}</K> when an X–H bond is replaced by X–D, but only <K>{String.raw`1.15`}</K> when a remote C–H bond is labelled. What is the strongest kinetic inference?</>}
              solution={<>
                <p>The large effect of 6.8 is characteristic of a primary isotope effect: the labelled X–H bond is substantially broken, formed or strongly weakened in the rate-controlling transition-state region.</p>
                <p>The remote label gives only a small secondary effect, consistent with modest changes in hybridisation or vibrational environment.</p>
                <p>This supports, but does not uniquely prove, a mechanism in which X–H transfer contributes to the kinetic bottleneck.</p>
              </>}
              answer={<>X–H bond reorganisation is involved in or before the rate-controlling transition-state region; the remote C–H bond is not directly broken.</>}
            />
            <WorkedExample
              number={31}
              title="Stern–Volmer quenching"
              concept="Extract a bimolecular quenching constant from lifetime data."
              question={<>An excited state has lifetime <K>{String.raw`\tau_0=40.0\ \mathrm{ns}`}</K> without quencher and <K>{String.raw`\tau=10.0\ \mathrm{ns}`}</K> at [Q] = 0.050 M. Find kq.</>}
              solution={<>
                <KB>{String.raw`\frac{\tau_0}{\tau}=4.00=1+k_q\tau_0[Q]`}</KB>
                <KB>{String.raw`k_q=\frac{3.00}{(40.0\times10^{-9})(0.050)}=1.50\times10^9\ \mathrm{L\,mol^{-1}\,s^{-1}}`}</KB>
              </>}
              answer={<><K>{String.raw`k_q=1.50\times10^9\ \mathrm{L\,mol^{-1}\,s^{-1}}`}</K>.</>}
            />
          </ChapterSection>
      <ReferenceExpansion sheets={[32]} />
      <IntegratedSourcePages start={126} end={138} />
    </PartShell>
  );
}
