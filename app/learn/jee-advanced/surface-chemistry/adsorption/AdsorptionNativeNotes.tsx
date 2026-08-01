"use client";

import type { ReactNode } from "react";
import {
  Card,
  DataTable,
  Example,
  FormulaCard,
  K,
  KB,
  Key,
  Section,
  SurfaceVisual,
  Trap,
} from "../surface-chemistry-shared";

const SF_PRO_STACK =
  '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif';

function Accent({ children, tone = "cyan" }: { children: ReactNode; tone?: "cyan" | "amber" | "violet" | "emerald" | "rose" }) {
  const tones = {
    cyan: "text-cyan-300",
    amber: "text-amber-300",
    violet: "text-violet-300",
    emerald: "text-emerald-300",
    rose: "text-rose-300",
  };
  return <span className={`font-semibold ${tones[tone]}`}>{children}</span>;
}

function Prose({ children }: { children: ReactNode }) {
  return <div className="space-y-3 text-[15px] leading-7 text-slate-300 sm:text-base sm:leading-8">{children}</div>;
}

function BulletList({ children }: { children: ReactNode }) {
  return <ul className="space-y-2 pl-5 text-[15px] leading-7 text-slate-300 marker:text-cyan-300 sm:text-base">{children}</ul>;
}

function NativeVisual({ mode, caption }: { mode: Parameters<typeof SurfaceVisual>[0]["mode"]; caption: string }) {
  return (
    <figure className="overflow-hidden rounded-3xl border border-white/10 bg-[#071326] p-2 sm:p-4">
      <div className="overflow-x-auto">
        <SurfaceVisual mode={mode} />
      </div>
      <figcaption className="border-t border-white/10 px-3 py-3 text-center text-sm leading-6 text-slate-400">
        {caption}
      </figcaption>
    </figure>
  );
}

function AuditBadge({ children, tone }: { children: ReactNode; tone: "emerald" | "cyan" | "violet" | "amber" }) {
  const styles = {
    emerald: "border-emerald-400/25 bg-emerald-400/[.07] text-emerald-200",
    cyan: "border-cyan-400/25 bg-cyan-400/[.07] text-cyan-200",
    violet: "border-violet-400/25 bg-violet-400/[.07] text-violet-200",
    amber: "border-amber-400/25 bg-amber-400/[.07] text-amber-200",
  };
  return <div className={`rounded-2xl border px-4 py-3 text-sm font-semibold ${styles[tone]}`}>{children}</div>;
}

function CheckQuestion({ number, question, answer }: { number: number; question: ReactNode; answer: ReactNode }) {
  return (
    <details className="group rounded-2xl border border-white/10 bg-white/[.025] p-4 open:bg-white/[.04]">
      <summary className="cursor-pointer list-none text-[15px] font-medium leading-7 text-slate-100">
        <span className="mr-3 inline-grid h-7 w-7 place-items-center rounded-lg bg-violet-400/10 text-sm font-bold text-violet-200">
          {number}
        </span>
        {question}
        <span className="ml-2 text-xs font-bold uppercase tracking-[.13em] text-cyan-300 group-open:hidden">Show answer</span>
      </summary>
      <div className="mt-4 border-t border-white/10 pt-4 text-[15px] leading-7 text-emerald-200">{answer}</div>
    </details>
  );
}

export default function AdsorptionNativeNotes() {
  return (
    <main
      className="adsorption-native-page min-h-screen bg-[#050914] text-slate-100"
      style={{ fontFamily: SF_PRO_STACK }}
    >
      <style>{`
        @media print {
          .adsorption-native-page { background: #ffffff !important; color: #111827 !important; }
          .adsorption-native-page nav,
          .adsorption-native-page footer { display: none !important; }
          .adsorption-native-page,
          .adsorption-native-page * {
            color: #111827 !important;
            background-color: transparent !important;
            box-shadow: none !important;
            border-color: #d1d5db !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .adsorption-native-page section,
          .adsorption-native-page article,
          .adsorption-native-page figure,
          .adsorption-native-page details { break-inside: avoid; }
        }
      `}</style>
      <div className="mx-auto max-w-[1280px] px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <header className="relative overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,.15),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,.14),transparent_38%),linear-gradient(145deg,#071326,#050914)] p-6 sm:p-10 lg:p-14">
          <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] [background-size:28px_28px]" />
          <div className="relative">
            <p className="text-xs font-black uppercase tracking-[.24em] text-cyan-300">Surface Chemistry · JEE Advanced</p>
            <h1 className="mt-4 max-w-5xl text-4xl font-black tracking-[-.05em] text-white sm:text-6xl lg:text-7xl">
              Adsorption
            </h1>
            <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-300 sm:text-xl">
              A verified, native-textbook edition covering the active interface, physisorption, chemisorption,
              molecular-orbital interactions, isotherms, kinetics, experiments, applications and the adsorption
              basis of heterogeneous catalysis.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <AuditBadge tone="emerald">Verified numerical solutions</AuditBadge>
              <AuditBadge tone="cyan">KaTeX equations and chemical notation</AuditBadge>
              <AuditBadge tone="violet">Original dark SVG visuals</AuditBadge>
              <AuditBadge tone="amber">SF Pro system typography</AuditBadge>
            </div>
          </div>
        </header>

        <nav className="sticky top-20 z-30 mt-6 overflow-x-auto rounded-2xl border border-white/10 bg-[#07101f]/95 p-2 shadow-2xl backdrop-blur-xl print:hidden">
          <div className="flex min-w-max gap-2 text-sm font-semibold">
            {[
              ["Foundations", "foundations"],
              ["Types & MOT", "types"],
              ["Isotherms", "isotherms"],
              ["Kinetics", "kinetics"],
              ["Catalysis", "catalysis"],
              ["Formula Vault", "formula-vault"],
              ["Solved Examples", "solved-examples"],
              ["Exam Practice", "exam-practice"],
            ].map(([label, id]) => (
              <a key={id} href={`#${id}`} className="rounded-xl px-4 py-2 text-slate-300 transition hover:bg-cyan-300/10 hover:text-cyan-200">
                {label}
              </a>
            ))}
          </div>
        </nav>

        <div id="foundations">
          <Section
            index="01"
            eyebrow="The active interface"
            title="Why surfaces behave differently"
            intro={
              <>
                Adsorption begins with a simple structural fact: atoms and molecules at a boundary are not surrounded
                in the same way as particles in the bulk. The incomplete coordination leaves a region of higher free
                energy and creates a thermodynamic drive to retain foreign species.
              </>
            }
          >
            <NativeVisual
              mode="interface"
              caption="Bulk attractions are nearly balanced; a surface particle experiences a residual inward force and possesses higher surface free energy."
            />

            <div className="grid gap-6 lg:grid-cols-2">
              <Card title="Surface free energy" tone="amber" label="Foundation">
                <Prose>
                  <p>
                    Creating additional area requires work. For a reversible increase in surface area at constant
                    temperature and composition:
                  </p>
                  <KB>{String.raw`dG = \gamma\,dA`}</KB>
                  <p>
                    Here <K>{String.raw`\gamma`}</K> is the surface free energy per unit area. For a liquid under the
                    same conditions, it is numerically equal to surface tension.
                  </p>
                </Prose>
              </Card>

              <Card title="Surface versus interface" tone="cyan" label="Terminology">
                <BulletList>
                  <li><Accent>Surface</Accent> commonly means a condensed-phase boundary against gas or vacuum.</li>
                  <li><Accent tone="violet">Interface</Accent> is the general boundary between any two phases.</li>
                  <li>Two completely miscible gases do not maintain a persistent interface.</li>
                  <li>Adsorption specifically requires enrichment or depletion of a species at that boundary.</li>
                </BulletList>
              </Card>
            </div>

            <Trap>
              Surface tension and capillary action are surface phenomena, but they are not automatically adsorption.
              Adsorption requires interfacial accumulation or depletion of another species.
            </Trap>

            <Card title="Specific surface area and the power of subdivision" tone="violet">
              <div className="grid gap-6 lg:grid-cols-2">
                <Prose>
                  <p>For a cube of edge length <K>L</K> and density <K>{String.raw`\rho`}</K>:</p>
                  <KB>{String.raw`a_s=\frac{A}{m}=\frac{6}{\rho L}`}</KB>
                  <p>For non-porous spheres of radius <K>r</K> and diameter <K>d=2r</K>:</p>
                  <KB>{String.raw`a_s=\frac{3}{\rho r}=\frac{6}{\rho d}`}</KB>
                  <p>
                    Smaller particles expose more external area per unit mass. Microporosity adds internal walls and
                    can raise accessible area far beyond the geometric value.
                  </p>
                </Prose>
                <NativeVisual mode="surface-area" caption="Subdivision and porosity increase the number of accessible adsorption sites per unit mass." />
              </div>
            </Card>

            <NativeVisual
              mode="sorption"
              caption="Adsorption enriches a surface; absorption distributes a species through the bulk; sorption includes both when they cannot be separated experimentally."
            />

            <DataTable
              headers={["Term", "Precise meaning", "Illustration"]}
              rows={[
                [<b key="a">Adsorption</b>, "Enrichment of a species at an interface relative to the adjoining bulk", <span key="a2"><K>{String.raw`\mathrm{NH_3}`}</K> on charcoal; dye on activated carbon</span>],
                [<b key="b">Absorption</b>, "Distribution throughout the bulk of another phase", <span key="b2"><K>{String.raw`\mathrm{NH_3}`}</K> dissolving in water</span>],
                [<b key="c">Sorption</b>, "Adsorption and absorption occurring together or inseparably", "Vapour first adsorbs on a polymer and then diffuses inward"],
                [<b key="d">Desorption</b>, "Departure of the adsorbed species from the interface", "Heating silica gel to remove retained water"],
                [<b key="e">Occlusion</b>, "Mechanical trapping inside a growing solid", "Gas trapped in a precipitate lattice"],
              ]}
            />

            <div className="grid gap-6 lg:grid-cols-2">
              <FormulaCard
                title="Thermodynamic condition"
                note="For the conventional signed enthalpy of adsorption, exothermic adsorption has a negative enthalpy change."
              >
                <KB>{String.raw`\Delta G_{\mathrm{ads}}=\Delta H_{\mathrm{ads}}-T\Delta S_{\mathrm{ads}}`}</KB>
              </FormulaCard>
              <Card title="Sign analysis" tone="emerald">
                <BulletList>
                  <li>Attractive interactions usually make <K>{String.raw`\Delta H_{\mathrm{ads}}<0`}</K>.</li>
                  <li>Loss of translational and rotational freedom usually makes <K>{String.raw`\Delta S_{\mathrm{ads}}<0`}</K>.</li>
                  <li>Spontaneous adsorption requires <K>{String.raw`\Delta G_{\mathrm{ads}}<0`}</K>.</li>
                  <li>Raising temperature generally opposes equilibrium physisorption because <K>{String.raw`-T\Delta S_{\mathrm{ads}}`}</K> becomes more positive.</li>
                </BulletList>
              </Card>
            </div>

            <Card title="Quantitative measurement by pressure drop" tone="cyan">
              <Prose>
                <p>
                  In a rigid vessel of free volume <K>V</K> at temperature <K>T</K>, a pressure fall from
                  <K>{String.raw`P_i`}</K> to <K>{String.raw`P_f`}</K> corresponds to moles removed from the gas phase,
                  provided leakage, reaction and condensation are excluded:
                </p>
                <KB>{String.raw`n_{\mathrm{ads}}=\frac{(P_i-P_f)V}{RT}`}</KB>
              </Prose>
            </Card>
          </Section>
        </div>

        <div id="types">
          <Section
            index="02"
            eyebrow="Nature of the interaction"
            title="Physisorption, chemisorption and the molecular-orbital picture"
            intro={
              <>
                The terms physisorption and chemisorption describe limiting interaction regimes. Real systems may pass
                through a weak precursor state before forming a stronger surface bond.
              </>
            }
          >
            <DataTable
              headers={["Property", "Physisorption", "Chemisorption"]}
              rows={[
                ["Dominant interaction", "Dispersion, dipole interaction or hydrogen bonding", "Covalent, ionic or metallic surface bond"],
                ["Typical enthalpy magnitude", <K key="p1">{String.raw`20\text{–}40\ \mathrm{kJ\,mol^{-1}}`}</K>, <K key="c1">{String.raw`80\text{–}240\ \mathrm{kJ\,mol^{-1}}`}</K>],
                ["Specificity", "Usually low", "High; depends on orbital symmetry, surface face and electronic structure"],
                ["Activation barrier", "Usually small", "May be appreciable, especially for dissociative adsorption"],
                ["Layering", "Multilayers are possible", "Reactive sites normally support one chemically bonded layer"],
                ["Reversibility", "Often high", "System-dependent; not universally irreversible"],
                ["Temperature trend", "Equilibrium amount usually falls as temperature rises", "Observed amount may first rise as activation becomes possible, then fall as desorption dominates"],
              ]}
            />

            <NativeVisual
              mode="potential"
              caption="A weak precursor well can lie at larger separation, while a deeper chemisorption well may be reached only after crossing an activation barrier."
            />

            <Key>
              A deeper potential well indicates stronger thermodynamic binding. It does not guarantee a faster observed
              rate, because accessibility depends on the activation barrier and transport to the surface.
            </Key>

            <Card title="Activated and dissociative chemisorption" tone="amber">
              <Prose>
                <p>Hydrogen adsorption on many transition-metal surfaces is dissociative:</p>
                <KB>{String.raw`\mathrm{H_2(g)}+2*\rightleftharpoons 2\mathrm{H}*`}</KB>
                <p>
                  Each hydrogen atom occupies a separate site. A one-site Langmuir expression cannot be applied without
                  modifying the site balance; the equilibrium coverage commonly contains a square-root pressure term.
                </p>
              </Prose>
            </Card>

            <NativeVisual
              mode="orbitals"
              caption="Chemisorption is strengthened by symmetry-allowed mixing between adsorbate orbitals and occupied or vacant states of the solid."
            />

            <div className="grid gap-6 lg:grid-cols-2">
              <Card title="Donation and back-donation" tone="violet" label="MOT enrichment">
                <BulletList>
                  <li><Accent tone="cyan">Donation:</Accent> an occupied adsorbate orbital transfers density into a vacant metal state.</li>
                  <li><Accent tone="violet">Back-donation:</Accent> occupied metal states transfer density into an adsorbate antibonding orbital.</li>
                  <li>Back-donation can strengthen the metal–adsorbate bond while weakening an internal bond such as <K>{String.raw`\mathrm{C-O}`}</K>, <K>{String.raw`\mathrm{H-H}`}</K> or <K>{String.raw`\mathrm{N\equiv N}`}</K>.</li>
                  <li>Excessive population of metal–adsorbate antibonding combinations can weaken adsorption despite good spatial overlap.</li>
                </BulletList>
              </Card>
              <NativeVisual mode="backbonding" caption="The synergic donation/back-donation model explains strong CO binding and weakening of the internal C–O bond on transition-metal surfaces." />
            </div>

            <Card title="Classic surface-bonding cases" tone="cyan">
              <BulletList>
                <li><K>{String.raw`\mathrm{H_2/Ni}`}</K>: donation into vacant metal states and back-donation into <K>{String.raw`\sigma^*_{\mathrm{H-H}}`}</K> promote dissociation.</li>
                <li><K>{String.raw`\mathrm{CO}`}</K> on transition metals: <K>{String.raw`5\sigma`}</K> donation and <K>{String.raw`d\pi\rightarrow2\pi^*`}</K> back-donation act together.</li>
                <li><K>{String.raw`\mathrm{N_2/Fe}`}</K>: electron transfer into antibonding orbitals weakens the triple bond during Haber-process activation.</li>
                <li><K>{String.raw`\mathrm{O_2}`}</K> on metals: charge transfer can produce superoxo-, peroxo- or dissociated oxygen species depending on surface and coverage.</li>
              </BulletList>
            </Card>

            <Card title="Factors controlling adsorption" tone="slate">
              <DataTable
                headers={["Factor", "Physical meaning", "Typical consequence"]}
                rows={[
                  ["Nature of adsorbate", "Polarisability, critical temperature, dipole moment, orbital energy and symmetry", "Easily liquefiable gases are usually physisorbed more strongly"],
                  ["Nature of surface", "Composition, oxidation state, crystal face, steps, kinks and vacancies", "Different faces may show different affinity and catalytic activity"],
                  ["Specific area and porosity", "Number and accessibility of sites", "Grinding raises external area; pore blockage lowers measured capacity"],
                  ["Pressure", "Collision frequency and chemical potential", "Coverage rises and approaches saturation in finite-site models"],
                  ["Temperature", "Equilibrium and activation effects act simultaneously", "Physisorption falls with temperature; activated chemisorption can show a maximum"],
                  ["Impurities", "Competitive adsorption and site poisoning", <span key="imp"><K>{String.raw`\mathrm{H_2O}`}</K>, sulfur and <K>{String.raw`\mathrm{CO}`}</K> may block active sites</span>],
                ]}
              />
            </Card>

            <Trap>
              Do not write “chemisorption always increases with temperature.” Heating can increase the rate of activated
              adsorption, but equilibrium coverage eventually falls when desorption becomes dominant.
            </Trap>

            <Card title="Correct order for physical adsorption on non-polar carbon" tone="emerald">
              <KB>{String.raw`\mathrm{H_2<N_2<CO_2<SO_2}`}</KB>
              <Prose>
                <p>
                  The trend follows increasing ease of liquefaction and polarisability. Representative critical
                  temperatures are approximately <K>{String.raw`33.2\ \mathrm{K}`}</K> for <K>{String.raw`\mathrm{H_2}`}</K>,
                  <K>{String.raw`126.2\ \mathrm{K}`}</K> for <K>{String.raw`\mathrm{N_2}`}</K>,
                  <K>{String.raw`304.1\ \mathrm{K}`}</K> for <K>{String.raw`\mathrm{CO_2}`}</K> and
                  <K>{String.raw`430.34\ \mathrm{K}`}</K> for <K>{String.raw`\mathrm{SO_2}`}</K>.
                </p>
              </Prose>
            </Card>
          </Section>
        </div>

        <div id="isotherms">
          <Section
            index="03"
            eyebrow="Equilibrium models"
            title="Isotherms, isobars, isosteres and surface thermodynamics"
            intro={
              <>
                An adsorption curve is meaningful only when the quantity held constant is identified. The equilibrium
                pressure or concentration must be used—not the initial value before the adsorbent was introduced.
              </>
            }
          >
            <DataTable
              headers={["Curve", "Quantity held constant", "What is plotted", "Primary use"]}
              rows={[
                ["Isotherm", "Temperature", <span key="i"><K>{String.raw`q`}</K> or <K>{String.raw`\theta`}</K> versus <K>P</K> or <K>C</K></span>, "Capacity and model fitting"],
                ["Isobar", "Pressure", <span key="b"><K>q</K> versus <K>T</K></span>, "Temperature response; activated versus physical adsorption"],
                ["Isostere", "Coverage or amount adsorbed", <span key="s"><K>P</K> versus <K>T</K></span>, "Isosteric heat of adsorption"],
              ]}
            />

            <NativeVisual mode="isotherms" caption="Freundlich is empirical over a limited range; Langmuir approaches a true finite monolayer capacity." />

            <Card title="Freundlich adsorption isotherm" tone="amber" label="Empirical model">
              <Prose>
                <p>For adsorption from a gas:</p>
                <KB>{String.raw`\frac{x}{m}=kP^{1/n}`}</KB>
                <KB>{String.raw`\log\!\left(\frac{x}{m}\right)=\log k+\frac{1}{n}\log P`}</KB>
                <p>
                  A plot of <K>{String.raw`\log(x/m)`}</K> versus <K>{String.raw`\log P`}</K> is linear with slope
                  <K>{String.raw`1/n`}</K> and intercept <K>{String.raw`\log k`}</K>. For favourable adsorption in the
                  usual empirical region, <K>{String.raw`0<1/n<1`}</K>.
                </p>
              </Prose>
              <Trap>
                The fitted exponent <K>{String.raw`1/n`}</K> is constant for a given fit. Statements such as “at high
                pressure <K>{String.raw`1/n\to0`}</K>” describe limiting behaviour, not a pressure-dependent fitted exponent.
              </Trap>
            </Card>

            <Card title="Langmuir isotherm from the site balance" tone="cyan" label="Finite-site model">
              <BulletList>
                <li>Fixed number of equivalent sites.</li>
                <li>Each site holds at most one adsorbate particle.</li>
                <li>Adsorption energy is independent of coverage.</li>
                <li>No lateral interaction among adsorbates.</li>
                <li>Dynamic equilibrium exists between adsorption and desorption.</li>
              </BulletList>
              <div className="mt-5 grid gap-5 lg:grid-cols-2">
                <FormulaCard title="Elementary rates">
                  <KB>{String.raw`r_a=k_aP(1-\theta),\qquad r_d=k_d\theta`}</KB>
                </FormulaCard>
                <FormulaCard title="Coverage and amount">
                  <KB>{String.raw`\theta=\frac{KP}{1+KP},\qquad q=\frac{q_mKP}{1+KP}`}</KB>
                </FormulaCard>
              </div>
              <Prose>
                <p>Here <K>{String.raw`K=k_a/k_d`}</K> measures affinity and <K>{String.raw`q_m`}</K> is the monolayer capacity.</p>
              </Prose>
            </Card>

            <DataTable
              headers={["Regime", "Simplification", "Interpretation"]}
              rows={[
                [<K key="l">{String.raw`KP\ll1`}</K>, <K key="l2">{String.raw`q\approx q_mKP`}</K>, "Amount adsorbed is first-order in pressure"],
                [<K key="h">{String.raw`KP\gg1`}</K>, <K key="h2">{String.raw`q\approx q_m`}</K>, "Surface capacity is saturated and q becomes pressure-independent"],
              ]}
            />

            <Trap>
              “Zero-order at high pressure” applies only to the pressure dependence of the adsorption amount—or to a
              rate law derived from saturated coverage. It is not automatically a statement about every catalytic reaction.
            </Trap>

            <FormulaCard title="Useful Langmuir linear forms">
              <KB>{String.raw`\frac{P}{q}=\frac{1}{q_mK}+\frac{P}{q_m}`}</KB>
              <KB>{String.raw`\frac{1}{q}=\frac{1}{q_m}+\frac{1}{q_mKP}`}</KB>
            </FormulaCard>

            <Card title="BET multilayer theory" tone="violet" label="Enrichment">
              <Prose>
                <p>
                  BET extends monolayer reasoning to successive physical layers. The first layer has a characteristic
                  adsorption enthalpy; higher layers behave increasingly like condensed adsorbate.
                </p>
                <KB>{String.raw`\frac{P}{n(P_0-P)}=\frac{1}{n_mC}+\frac{C-1}{n_mC}\frac{P}{P_0}`}</KB>
                <p>
                  <K>{String.raw`P_0`}</K> is the saturation vapour pressure, <K>{String.raw`n_m`}</K> the monolayer amount
                  and <K>C</K> an energy parameter. BET area is probe-accessible area and need not equal external geometric area.
                </p>
              </Prose>
            </Card>

            <Card title="Adsorption isostere and isosteric enthalpy" tone="emerald">
              <Prose>
                <p>At constant coverage:</p>
                <KB>{String.raw`\ln\!\left(\frac{P_2}{P_1}\right)=\frac{\Delta H_{\mathrm{ads}}}{R}\left(\frac{1}{T_2}-\frac{1}{T_1}\right)`}</KB>
                <p>
                  Because <K>{String.raw`\Delta H_{\mathrm{ads}}<0`}</K>, a higher pressure is required at higher temperature
                  to maintain the same coverage. The positive heat magnitude is often written
                  <K>{String.raw`q_{\mathrm{st}}=-\Delta H_{\mathrm{ads}}`}</K>.
                </p>
              </Prose>
            </Card>
          </Section>
        </div>

        <div id="kinetics">
          <Section
            index="04"
            eyebrow="Rates and experiments"
            title="Adsorption kinetics, residence time and practical measurements"
            intro={
              <>
                Equilibrium describes the final coverage. Kinetics determines how quickly that state is reached and
                whether transport, pore diffusion, surface attachment or desorption controls the observed process.
              </>
            }
          >
            <div className="grid gap-6 lg:grid-cols-2">
              <FormulaCard title="Adsorption and desorption rates">
                <KB>{String.raw`r_a=k_aP(1-\theta),\qquad r_d=k_d\theta`}</KB>
              </FormulaCard>
              <FormulaCard title="Mean surface residence time">
                <KB>{String.raw`k_d=A\exp\!\left(-\frac{E_d}{RT}\right)`}</KB>
                <KB>{String.raw`\tau=\frac{1}{k_d}=A^{-1}\exp\!\left(\frac{E_d}{RT}\right)`}</KB>
              </FormulaCard>
            </div>

            <Key>
              Strong binding increases residence time exponentially. A reactant must remain long enough to react, but a
              product that remains too long blocks the surface.
            </Key>

            <DataTable
              headers={["Possible control", "Physical origin", "Diagnostic observation"]}
              rows={[
                ["External mass transfer", "Slow transport through the boundary layer", "Rate changes strongly with stirring or gas flow"],
                ["Pore diffusion", "Slow movement through narrow pores", "Large particles appear less effective; crushing raises the observed rate"],
                ["Surface attachment", "Activation barrier for chemisorption", "Strong Arrhenius temperature dependence"],
                ["Surface reaction", "Bond-making or bond-breaking on occupied sites", "Rate follows a coverage-derived kinetic law"],
                ["Desorption", "Product binds too strongly", "Product inhibition and site blocking"],
              ]}
            />

            <Card title="Activation of adsorbents" tone="amber">
              <BulletList>
                <li><Accent tone="amber">Thermal:</Accent> heating under vacuum or inert gas removes water and volatile material; excessive heating may sinter pores.</li>
                <li><Accent tone="cyan">Chemical:</Accent> controlled oxidation, reduction or dehydration creates porosity and functional groups.</li>
                <li><Accent tone="violet">Mechanical:</Accent> grinding increases external area but does not automatically create internal microporosity.</li>
              </BulletList>
            </Card>

            <DataTable
              headers={["Adsorbent", "Key feature", "Typical use"]}
              rows={[
                ["Activated carbon", "Broad pore-size distribution and varied surface chemistry", "Organic vapour, colour, taste and impurity removal"],
                ["Silica gel or alumina", "Polar oxide surfaces", "Drying, humidity control and chromatography"],
                ["Zeolites", "Crystalline molecular-size channels", "Size-selective adsorption and catalysis"],
              ]}
            />

            <Card title="Adsorption from solution" tone="cyan">
              <Prose>
                <p>
                  If a solution of initial concentration <K>{String.raw`C_0`}</K> reaches equilibrium concentration
                  <K>{String.raw`C_e`}</K> after contact with mass <K>m</K> of adsorbent:
                </p>
                <KB>{String.raw`x=(C_0-C_e)V,\qquad q=\frac{x}{m}=\frac{(C_0-C_e)V}{m}`}</KB>
                <p>
                  Use <K>{String.raw`C_e`}</K> in an equilibrium isotherm. Equal solution volumes and equal adsorbent masses
                  should be equilibrated, separated and analysed consistently.
                </p>
              </Prose>
            </Card>

            <Card title="Major applications" tone="slate">
              <DataTable
                headers={["Application", "Adsorption principle", "Practical note"]}
                rows={[
                  ["High vacuum", "Residual gas retained by cooled or activated adsorbents after rough pumping", "Provides ultra-high vacuum stages"],
                  ["Gas masks", "Activated carbon and impregnated adsorbents retain toxic vapours", "Selection depends on contaminant chemistry"],
                  ["Humidity control", "Silica gel and alumina retain water vapour", "Regenerable drying agents"],
                  ["Decolourisation", "Activated carbon retains coloured organic impurities", "Sugar refining and solution purification"],
                  ["Heterogeneous catalysis", "Reactants adsorb and are activated at surface sites", <span key="cat"><K>{String.raw`\mathrm{NH_3}`}</K> synthesis, contact process and hydrogenation</span>],
                  ["Froth flotation", "Collectors adsorb selectively and render ore particles hydrophobic", "Separates valuable mineral from gangue"],
                  ["Adsorption indicators", "Dyes adsorb on precipitate surfaces near the end point", "Fajans-type precipitation titrations"],
                  ["Chromatography", "Different adsorption strengths cause different retention", "Stronger adsorption usually means slower elution"],
                  ["Activated-carbon antidotal use", "Toxins are retained in the gastrointestinal tract", "A medically supervised adsorption application; not a claim that all drugs kill pathogens by surface adsorption"],
                ]}
              />
            </Card>
          </Section>
        </div>

        <div id="catalysis">
          <Section
            index="05"
            eyebrow="Adsorption-linked catalysis"
            title="How a solid surface changes a reaction pathway"
            intro={
              <>
                A catalyst provides an alternative mechanism whose highest barrier is lower than that of the uncatalysed
                pathway. It does not change the reaction Gibbs energy, the equilibrium constant or the equilibrium composition.
              </>
            }
          >
            <NativeVisual
              mode="catalyst"
              caption="A heterogeneous catalytic cycle requires diffusion, adsorption, activation, surface reaction, desorption and transport of products away from the surface."
            />

            <Trap>
              A catalyst does not lower the activation energy of the original uncatalysed path. It creates a different
              pathway with a lower maximum barrier.
            </Trap>

            <div className="grid gap-6 lg:grid-cols-2">
              <Card title="Sabatier principle" tone="amber">
                <Prose>
                  <p>
                    Binding must be strong enough to activate the reactant but weak enough for products to desorb. The
                    strongest adsorbent is rarely the best catalyst.
                  </p>
                </Prose>
              </Card>
              <Card title="Promoters, poisons and supports" tone="violet">
                <BulletList>
                  <li><Accent tone="emerald">Promoter:</Accent> improves activity, selectivity or stability but may be inactive alone.</li>
                  <li><Accent tone="rose">Poison:</Accent> occupies active sites preferentially and lowers catalytic performance.</li>
                  <li><Accent tone="cyan">Support:</Accent> disperses the active phase, increases area and can modify heat transfer, acidity or electronic structure.</li>
                </BulletList>
              </Card>
            </div>

            <DataTable
              headers={["Mechanism", "Surface event", "Characteristic rate idea"]}
              rows={[
                ["Langmuir–Hinshelwood", "Both reacting species adsorb before reacting", "Rate often contains products of two coverages and a competitive adsorption denominator"],
                ["Eley–Rideal", "A gas-phase species strikes an adsorbed partner", "Rate contains gas pressure multiplied by the coverage of the adsorbed partner"],
                ["Mars–van Krevelen", "A lattice atom of the catalyst participates and is later regenerated", "Useful for many oxidation catalysts"],
              ]}
            />

            <NativeVisual mode="enzyme" caption="Shape-selective zeolite catalysis and enzyme catalysis both rely on a restricted environment that favours particular substrates and transition states." />
          </Section>
        </div>

        <div id="formula-vault">
          <Section
            index="06"
            eyebrow="Revision architecture"
            title="Formula vault and graph-reading checklist"
            intro={<>Every relation below is written with correct subscripts, superscripts and units. The limiting assumptions must accompany the formula.</>}
          >
            <DataTable
              headers={["Topic", "Verified relation", "Use"]}
              rows={[
                ["Pressure-drop uptake", <K key="f1">{String.raw`n_{\mathrm{ads}}=(P_i-P_f)V/(RT)`}</K>, "Rigid vessel; no leakage, reaction or condensation"],
                ["Freundlich", <K key="f2">{String.raw`q=kP^{1/n}`}</K>, "Empirical intermediate range"],
                ["Langmuir coverage", <K key="f3">{String.raw`\theta=KP/(1+KP)`}</K>, "Finite equivalent sites"],
                ["Langmuir amount", <K key="f4">{String.raw`q=q_mKP/(1+KP)`}</K>, "Monolayer capacity"],
                ["BET linear form", <K key="f5">{String.raw`P/[n(P_0-P)]=1/(n_mC)+[(C-1)/(n_mC)](P/P_0)`}</K>, "Multilayer area determination"],
                ["Residence time", <K key="f6">{String.raw`\tau=A^{-1}\exp(E_d/RT)`}</K>, "Mean time before desorption"],
                ["Isostere", <K key="f7">{String.raw`\ln(P_2/P_1)=(\Delta H_{\mathrm{ads}}/R)(1/T_2-1/T_1)`}</K>, "Constant coverage"],
                ["Sphere area", <K key="f8">{String.raw`a_s=3/(\rho r)=6/(\rho d)`}</K>, "Non-porous uniform spheres"],
                ["Monolayer area", <K key="f9">{String.raw`S=n_mN_Aa/m`}</K>, "Area from known molecular cross-section"],
                ["Solution uptake", <K key="f10">{String.raw`q=(C_0-C_e)V/m`}</K>, "Use equilibrium concentration"],
              ]}
            />

            <div className="grid gap-6 lg:grid-cols-2">
              <Card title="Graph-reading checklist" tone="cyan">
                <BulletList>
                  <li><K>{String.raw`q`}</K> versus <K>P</K> plateau: finite Langmuir capacity.</li>
                  <li><K>{String.raw`\log q`}</K> versus <K>{String.raw`\log P`}</K> linear: Freundlich regime; slope <K>{String.raw`1/n`}</K>.</li>
                  <li><K>{String.raw`P/q`}</K> versus <K>P</K> linear: slope <K>{String.raw`1/q_m`}</K>, intercept <K>{String.raw`1/(q_mK)`}</K>.</li>
                  <li><K>q</K> versus <K>T</K> maximum: activated adsorption competing with desorption.</li>
                  <li><K>{String.raw`\ln P`}</K> versus <K>{String.raw`1/T`}</K> at fixed coverage: isostere.</li>
                </BulletList>
              </Card>
              <Card title="Common exam pitfalls" tone="rose">
                <BulletList>
                  <li>Using <K>{String.raw`C_0`}</K> instead of <K>{String.raw`C_e`}</K> in a solution isotherm.</li>
                  <li>Forgetting the physical range <K>{String.raw`0<1/n<1`}</K> for favourable Freundlich adsorption.</li>
                  <li>Applying one-site Langmuir directly to dissociative adsorption.</li>
                  <li>Confusing BET probe-accessible area with geometric external area.</li>
                  <li>Quoting the signed enthalpy of adsorption as positive.</li>
                  <li>Equating a large equilibrium constant with a fast rate.</li>
                  <li>Claiming that a catalyst changes <K>{String.raw`\Delta G^\circ`}</K> or the equilibrium composition.</li>
                </BulletList>
              </Card>
            </div>
          </Section>
        </div>

        <div id="solved-examples">
          <Section
            index="07"
            eyebrow="Verified calculations"
            title="Worked examples with corrected answers"
            intro={<>The numerical values below were recalculated independently. Intermediate rounding is delayed until the final line.</>}
          >
            <Example
              number={1}
              title="Pressure drop in a rigid vessel"
              question={<>A <K>{String.raw`2.00\ \mathrm{L}`}</K> vessel at <K>{String.raw`300\ \mathrm{K}`}</K> contains <K>{String.raw`\mathrm{CO_2}`}</K> at <K>{String.raw`5.00\ \mathrm{bar}`}</K>. After adding <K>{String.raw`4.00\ \mathrm{g}`}</K> activated carbon, pressure becomes <K>{String.raw`4.50\ \mathrm{bar}`}</K>. Find uptake per gram.</>}
              solution={<><KB>{String.raw`n_{\mathrm{ads}}=\frac{(5.00-4.50)(2.00)}{(0.08314)(300)}=0.04009\ \mathrm{mol}`}</KB><KB>{String.raw`q=\frac{0.04009}{4.00}=1.002\times10^{-2}\ \mathrm{mol\,g^{-1}}`}</KB></>}
              answer={<K>{String.raw`1.00\times10^{-2}\ \mathrm{mol\,g^{-1}}`}</K>}
            />

            <Example
              number={2}
              title="Surface area from a nitrogen monolayer"
              question={<>A <K>{String.raw`2.50\ \mathrm{g}`}</K> sample adsorbs <K>{String.raw`8.00\ \mathrm{mmol}`}</K> of <K>{String.raw`\mathrm{N_2}`}</K> as a complete monolayer. Molecular cross-section is <K>{String.raw`0.162\ \mathrm{nm^2}`}</K>. Find specific area.</>}
              solution={<KB>{String.raw`S=\frac{(8.00\times10^{-3})(6.022\times10^{23})(0.162\times10^{-18})}{2.50}=3.12\times10^2\ \mathrm{m^2\,g^{-1}}`}</KB>}
              answer={<K>{String.raw`312\ \mathrm{m^2\,g^{-1}}`}</K>}
            />

            <Example
              number={3}
              title="Freundlich constants from a log–log plot"
              question={<>The slope of <K>{String.raw`\log q`}</K> versus <K>{String.raw`\log P`}</K> is <K>0.40</K> and the intercept is <K>0.60</K>. Find <K>n</K> and <K>k</K>.</>}
              solution={<><KB>{String.raw`\frac{1}{n}=0.40\Rightarrow n=2.50`}</KB><KB>{String.raw`\log k=0.60\Rightarrow k=10^{0.60}=3.981`}</KB></>}
              answer={<><K>{String.raw`n=2.50`}</K>, <K>{String.raw`k=3.98`}</K></>}
            />

            <Example
              number={4}
              title="Langmuir constants from a linear plot"
              question={<>A plot of <K>{String.raw`P/q`}</K> versus <K>P</K> has slope <K>{String.raw`0.050\ \mathrm{g\,mmol^{-1}}`}</K> and intercept <K>{String.raw`0.020\ \mathrm{bar\,g\,mmol^{-1}}`}</K>. Find <K>{String.raw`q_m`}</K> and <K>K</K>.</>}
              solution={<><KB>{String.raw`q_m=\frac{1}{0.050}=20.0\ \mathrm{mmol\,g^{-1}}`}</KB><KB>{String.raw`K=\frac{1}{q_m\times\text{intercept}}=\frac{1}{(20.0)(0.020)}=2.50\ \mathrm{bar^{-1}}`}</KB></>}
              answer={<><K>{String.raw`q_m=20.0\ \mathrm{mmol\,g^{-1}}`}</K>, <K>{String.raw`K=2.50\ \mathrm{bar^{-1}}`}</K></>}
            />

            <Example
              number={5}
              title="Correct isosteric enthalpy"
              question={<>At the same coverage, <K>{String.raw`P_1=1.00\ \mathrm{bar}`}</K> at <K>{String.raw`T_1=300\ \mathrm{K}`}</K> and <K>{String.raw`P_2=2.50\ \mathrm{bar}`}</K> at <K>{String.raw`T_2=330\ \mathrm{K}`}</K>. Find <K>{String.raw`\Delta H_{\mathrm{ads}}`}</K>.</>}
              solution={<KB>{String.raw`\Delta H_{\mathrm{ads}}=\frac{(8.314)\ln(2.50)}{(1/330)-(1/300)}=-2.514\times10^4\ \mathrm{J\,mol^{-1}}`}</KB>}
              answer={<K>{String.raw`\Delta H_{\mathrm{ads}}=-25.14\ \mathrm{kJ\,mol^{-1}}`}</K>}
            />

            <Example
              number={6}
              title="Residence time"
              question={<>For <K>{String.raw`A=1.0\times10^{13}\ \mathrm{s^{-1}}`}</K>, <K>{String.raw`E_d=100\ \mathrm{kJ\,mol^{-1}}`}</K> and <K>{String.raw`T=500\ \mathrm{K}`}</K>, estimate <K>{String.raw`\tau`}</K>.</>}
              solution={<KB>{String.raw`\tau=10^{-13}\exp\!\left(\frac{100000}{(8.314)(500)}\right)=2.80\times10^{-3}\ \mathrm{s}`}</KB>}
              answer={<K>{String.raw`2.80\ \mathrm{ms}`}</K>}
            />

            <Example
              number={7}
              title="Adsorption from solution"
              question={<>A <K>{String.raw`1.00\ \mathrm{g}`}</K> carbon sample is shaken with <K>{String.raw`250\ \mathrm{mL}`}</K> of a <K>{String.raw`0.080\ \mathrm{mol\,L^{-1}}`}</K> dye solution. The equilibrium concentration is <K>{String.raw`0.020\ \mathrm{mol\,L^{-1}}`}</K>. Find uptake.</>}
              solution={<KB>{String.raw`q=\frac{(0.080-0.020)(0.250)}{1.00}=0.0150\ \mathrm{mol\,g^{-1}}`}</KB>}
              answer={<K>{String.raw`1.50\times10^{-2}\ \mathrm{mol\,g^{-1}}`}</K>}
            />

            <Example
              number={8}
              title="Correct monolayer-area exponent"
              question={<>A monolayer contains <K>{String.raw`6.0\times10^{21}`}</K> molecules and covers <K>{String.raw`1.5\times10^2\ \mathrm{m^2}`}</K>. If the area per molecule is <K>{String.raw`P\times10^{-23}\ \mathrm{m^2}`}</K>, find <K>P</K>.</>}
              solution={<><KB>{String.raw`a=\frac{1.5\times10^2}{6.0\times10^{21}}=2.5\times10^{-20}\ \mathrm{m^2}`}</KB><KB>{String.raw`2.5\times10^{-20}=2500\times10^{-23}`}</KB></>}
              answer={<K>{String.raw`P=2500`}</K>}
            />

            <Example
              number={9}
              title="Freundlich prediction without premature rounding"
              question={<>An adsorbent gives <K>{String.raw`q=4\ \mathrm{mg\,g^{-1}}`}</K> at <K>{String.raw`C=10\ \mathrm{mg\,L^{-1}}`}</K> and <K>{String.raw`q=10\ \mathrm{mg\,g^{-1}}`}</K> at <K>{String.raw`C=16\ \mathrm{mg\,L^{-1}}`}</K>. Predict <K>q</K> at <K>{String.raw`C=20\ \mathrm{mg\,L^{-1}}`}</K>.</>}
              solution={<><KB>{String.raw`\frac{1}{n}=\frac{\ln(10/4)}{\ln(16/10)}=1.9496`}</KB><KB>{String.raw`q=4\left(\frac{20}{10}\right)^{1.9496}=15.45\ \mathrm{mg\,g^{-1}}`}</KB><p className="text-amber-200">The fitted exponent exceeds unity, so the data are algebraically usable but lie outside the usual favourable Freundlich range.</p></>}
              answer={<K>{String.raw`15.45\ \mathrm{mg\,g^{-1}}`}</K>}
            />

            <Example
              number={10}
              title="Methane Freundlich prediction"
              question={<>An adsorbent takes up <K>{String.raw`10.0\ \mathrm{mL}`}</K> of methane at <K>{String.raw`100\ \mathrm{mmHg}`}</K> and <K>{String.raw`15.0\ \mathrm{mL}`}</K> at <K>{String.raw`200\ \mathrm{mmHg}`}</K>. Assuming a Freundlich relation, find the uptake at <K>{String.raw`300\ \mathrm{mmHg}`}</K>.</>}
              solution={<><KB>{String.raw`\frac{1}{n}=\frac{\ln(15.0/10.0)}{\ln(200/100)}=0.58496`}</KB><KB>{String.raw`V_3=10.0\left(\frac{300}{100}\right)^{0.58496}=19.02\ \mathrm{mL}`}</KB></>}
              answer={<K>{String.raw`V_3=19.02\ \mathrm{mL}`}</K>}
            />

            <Example
              number={11}
              title="Pressure-drop uptake with correct rounding"
              question={<>A <K>{String.raw`2.00\ \mathrm{L}`}</K> vessel at <K>{String.raw`300\ \mathrm{K}`}</K> falls from <K>{String.raw`1.20\ \mathrm{bar}`}</K> to <K>{String.raw`0.92\ \mathrm{bar}`}</K> after adding <K>{String.raw`4.00\ \mathrm{g}`}</K> adsorbent. Find the amount adsorbed per gram.</>}
              solution={<><KB>{String.raw`n_{\mathrm{ads}}=\frac{(1.20-0.92)(2.00)}{(0.08314)(300)}=2.245\times10^{-2}\ \mathrm{mol}`}</KB><KB>{String.raw`\frac{n_{\mathrm{ads}}}{m}=\frac{2.245\times10^{-2}}{4.00}=5.61\times10^{-3}\ \mathrm{mol\,g^{-1}}`}</KB></>}
              answer={<K>{String.raw`5.61\times10^{-3}\ \mathrm{mol\,g^{-1}}`}</K>}
            />
          </Section>
        </div>

        <div id="exam-practice">
          <Section
            index="08"
            eyebrow="JEE Main · JEE Advanced · NEET"
            title="Concept checks and corrected examination practice"
            intro={<>Open each item only after committing to an answer. The questions avoid internally inconsistent data wherever a physical Freundlich interpretation is intended.</>}
          >
            <div className="grid gap-3 lg:grid-cols-2">
              <CheckQuestion number={1} question={<>Why are powdered solids usually better adsorbents than large crystals of the same mass?</>} answer={<>They have a larger external specific surface area and therefore expose more accessible sites.</>} />
              <CheckQuestion number={2} question={<>Which is normally favoured at low temperature: physisorption or activated chemisorption?</>} answer={<>Equilibrium physisorption is favoured at low temperature; activated chemisorption may be kinetically inaccessible until moderate heating.</>} />
              <CheckQuestion number={3} question={<>What does the slope of a <K>{String.raw`\log q`}</K> versus <K>{String.raw`\log P`}</K> Freundlich plot equal?</>} answer={<K>{String.raw`1/n`}</K>} />
              <CheckQuestion number={4} question={<>What does the intercept of a <K>{String.raw`P/q`}</K> versus <K>P</K> Langmuir plot equal?</>} answer={<K>{String.raw`1/(q_mK)`}</K>} />
              <CheckQuestion number={5} question={<>Why does the Langmuir amount approach a plateau at high pressure?</>} answer={<>The finite population of adsorption sites becomes essentially occupied, so <K>{String.raw`q\to q_m`}</K>.</>} />
              <CheckQuestion number={6} question={<>Why can a strongly adsorbed product slow a catalytic reaction?</>} answer={<>It occupies sites for a long time, causing product inhibition or site blocking.</>} />
              <CheckQuestion number={7} question={<>Does a catalyst change <K>{String.raw`\Delta G^\circ`}</K> or the equilibrium constant?</>} answer={<>No. It changes the pathway and rates of forward and reverse reactions, not equilibrium thermodynamics.</>} />
              <CheckQuestion number={8} question={<>What is the correct sign of the conventional adsorption enthalpy for an exothermic process?</>} answer={<K>{String.raw`\Delta H_{\mathrm{ads}}<0`}</K>} />
              <CheckQuestion number={9} question={<>Arrange <K>{String.raw`\mathrm{H_2,N_2,CO_2,SO_2}`}</K> in increasing physical adsorption on non-polar carbon.</>} answer={<K>{String.raw`\mathrm{H_2<N_2<CO_2<SO_2}`}</K>} />
              <CheckQuestion number={10} question={<>Why can BET area exceed the external geometric area by orders of magnitude?</>} answer={<>The probe molecule accesses internal pore walls as well as the external surface.</>} />
              <CheckQuestion number={11} question={<>For <K>{String.raw`K=4\ \mathrm{bar^{-1}}`}</K>, find the pressure at which <K>{String.raw`\theta=0.75`}</K>.</>} answer={<><KB>{String.raw`0.75=\frac{4P}{1+4P}\Rightarrow P=0.75\ \mathrm{bar}`}</KB></>} />
              <CheckQuestion number={12} question={<>A <K>{String.raw`0.40\ \mathrm{g}`}</K> sample takes up <K>{String.raw`0.80\ \mathrm{mmol}`}</K> in a monolayer; molecular area is <K>{String.raw`0.162\ \mathrm{nm^2}`}</K>. Find specific area.</>} answer={<><KB>{String.raw`S=\frac{(0.80\times10^{-3})(6.022\times10^{23})(0.162\times10^{-18})}{0.40}=195\ \mathrm{m^2\,g^{-1}}`}</KB></>} />
              <CheckQuestion number={13} question={<>At fixed coverage, pressure rises from <K>{String.raw`0.25\ \mathrm{bar}`}</K> at <K>{String.raw`280\ \mathrm{K}`}</K> to <K>{String.raw`0.90\ \mathrm{bar}`}</K> at <K>{String.raw`320\ \mathrm{K}`}</K>. Find <K>{String.raw`\Delta H_{\mathrm{ads}}`}</K>.</>} answer={<><KB>{String.raw`\Delta H_{\mathrm{ads}}=\frac{(8.314)\ln(0.90/0.25)}{(1/320)-(1/280)}=-23.86\ \mathrm{kJ\,mol^{-1}}`}</KB></>} />
              <CheckQuestion number={14} question={<>Which form of adsorption commonly allows multilayers?</>} answer={<>Physisorption, because later layers can be retained by intermolecular forces similar to condensation.</>} />
              <CheckQuestion number={15} question={<>Why is a one-site Langmuir equation inadequate for dissociative <K>{String.raw`\mathrm{H_2}`}</K> adsorption?</>} answer={<>One gas molecule produces two adsorbed atoms and consumes two sites; the site balance and pressure dependence change.</>} />
              <CheckQuestion number={16} question={<>A higher chromatographic adsorption constant generally causes faster or slower elution?</>} answer={<>Slower elution, because stronger retention increases the residence time on the stationary phase.</>} />
              <CheckQuestion number={17} question={<>What is the finite resource in adsorption, colloid stability and heterogeneous catalysis, respectively?</>} answer={<>Accessible sites, interfacial electrostatic/solvation stability, and active centres.</>} />
              <CheckQuestion number={18} question={<>Why should “chemisorption is irreversible” not be written as a universal statement?</>} answer={<>Some chemisorbed states desorb reversibly under suitable temperature, pressure or electrochemical conditions; reversibility is system-dependent.</>} />
            </div>
          </Section>
        </div>

        <footer className="mt-10 rounded-3xl border border-emerald-400/20 bg-emerald-400/[.05] p-6 text-center sm:p-8">
          <p className="text-xs font-black uppercase tracking-[.22em] text-emerald-300">Verified native edition</p>
          <p className="mt-3 text-lg font-semibold text-white">No raster page screenshots · no light-background figures · no external watermark</p>
          <p className="mt-2 text-sm leading-6 text-slate-400">All equations are native KaTeX, tables are responsive HTML, and visuals are original dark SVG components.</p>
        </footer>
      </div>
    </main>
  );
}
