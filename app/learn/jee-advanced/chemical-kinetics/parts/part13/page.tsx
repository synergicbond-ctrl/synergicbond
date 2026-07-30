"use client";

import { PartShell, ChapterSection, ConceptCard, DataTable, ExamTrap, K, KB, WorkedExample } from "../../chemical-kinetics-shared";

export default function ChemicalKineticsPart13() {
  return (
    <PartShell
      part={13}
      title={"Mechanisms, RDS and Steady State"}
      description={"Elementary steps, intermediates, rate-determining steps, pre-equilibrium and steady-state approximation."}
    >
<ChapterSection
            id="mechanism"
            index="14"
            eyebrow="From steps to rate law"
            title="Reaction mechanisms, rate-determining steps and approximations"
            intro={<>A proposed mechanism must reproduce the overall equation, avoid impossible elementary events, generate the observed rate law after intermediates are eliminated, and agree with independent chemical evidence.</>}
          >
            <div className="grid gap-5 xl:grid-cols-3">
              <ConceptCard title="Elementary-step law" tone="cyan">
                <p>For an elementary step, the rate-law exponents equal the numbers of reacting entities in that step.</p>
                <KB>{String.raw`A+2B\xrightarrow{k}I\quad\Rightarrow\quad r=k[A][B]^2`}</KB>
              </ConceptCard>
              <ConceptCard title="Intermediate" tone="violet">
                <p>Formed in one step and consumed in a later step; absent from the net equation. It should not remain in the final rate law unless its concentration is independently controlled and measured.</p>
              </ConceptCard>
              <ConceptCard title="Catalyst" tone="amber">
                <p>Consumed in an early step and regenerated later; absent from the net equation but allowed in the rate law because its concentration can be experimentally varied.</p>
              </ConceptCard>
            </div>
            <ConceptCard title="Mechanism audit checklist" tone="emerald">
              <ol className="list-decimal space-y-2 pl-5">
                <li>Add all steps and cancel intermediates/catalysts to recover the balanced overall equation.</li>
                <li>Write the rate law of each elementary step from its molecularity.</li>
                <li>Identify whether a fast pre-equilibrium or steady-state treatment is justified.</li>
                <li>Eliminate every unmeasured intermediate.</li>
                <li>Compare the predicted law, kinetic isotope effects, product distribution and activation parameters with experiment.</li>
              </ol>
            </ConceptCard>
            <div className="grid gap-5 xl:grid-cols-2">
              <ConceptCard title="Rate-determining-step approximation" tone="rose">
                <p>If one step is much slower than every other dynamically relevant step, it may control flux. However, the slow step’s raw elementary law may contain an intermediate and must then be combined with earlier fast steps.</p>
                <ExamTrap>The overall order need not equal the molecularity of the slow step after the intermediate is eliminated.</ExamTrap>
              </ConceptCard>
              <ConceptCard title="Pre-equilibrium approximation" tone="cyan">
                <p>If an early reversible step equilibrates much faster than the subsequent product-forming step,</p>
                <KB>{String.raw`K=\frac{[I]}{[A][B]}\quad\Rightarrow\quad[I]=K[A][B]`}</KB>
                <p>Substitute this relation into the slow-step rate law.</p>
              </ConceptCard>
              <ConceptCard title="Steady-state approximation" tone="violet">
                <p>For a reactive intermediate I present at low, nearly constant concentration after a brief induction period,</p>
                <KB>{String.raw`\frac{d[I]}{dt}\approx0\quad\Rightarrow\quad \text{rate of formation}\approx\text{rate of consumption}`}</KB>
                <p>This does not imply equilibrium; the forward flux through the mechanism can be substantial.</p>
              </ConceptCard>
              <ConceptCard title="Quasi-equilibrium versus steady state" tone="amber">
                <p>Pre-equilibrium equates the forward and reverse rates of one reversible step. Steady state balances all formation and removal routes of an intermediate. They are different approximations and may predict different laws.</p>
              </ConceptCard>
            </div>
            <ConceptCard title="Chain reactions" tone="navy">
              <p>A chain mechanism contains initiation, propagation and termination. Reactive radicals or atoms are chain carriers.</p>
              <DataTable headers={["Stage", "Function", "Generic step"]} rows={[
                ["Initiation", "create carriers", <K key="chain-initiation">{String.raw`M\rightarrow2R^\bullet`}</K>],
                ["Propagation", "consume one carrier and create another", <K key="chain-propagation">{String.raw`R^\bullet+A\rightarrow P+S^\bullet`}</K>],
                ["Branching", "one carrier creates several", <K key="chain-branching">{String.raw`R^\bullet+A\rightarrow2R^\bullet+P`}</K>],
                ["Termination", "remove carriers", <K key="chain-termination">{String.raw`2R^\bullet\rightarrow R_2`}</K>],
              ]}/>
              <p>Applying steady state to the carrier often produces fractional orders, such as a square-root dependence when bimolecular termination balances first-order initiation.</p>
            </ConceptCard>
            <WorkedExample
              number={23}
              title="Fast pre-equilibrium followed by a slow step"
              concept="Eliminate an intermediate using an equilibrium relation."
              question={<>A mechanism is proposed:</>}
              solution={<>
                <KB>{String.raw`A+B\ \mathop{\rightleftharpoons}^{k_1}_{k_{-1}}\ I\quad\text{fast}`}</KB>
                <KB>{String.raw`I+B\xrightarrow{k_2}P\quad\text{slow}`}</KB>
                <p>The slow-step rate is <K>{String.raw`r=k_2[I][B]`}</K>. From the fast equilibrium,</p>
                <KB>{String.raw`K_1=\frac{k_1}{k_{-1}}=\frac{[I]}{[A][B]}\quad\Rightarrow\quad[I]=K_1[A][B]`}</KB>
                <p>Substitution gives</p>
                <KB>{String.raw`r=k_2K_1[A][B]^2=\frac{k_1k_2}{k_{-1}}[A][B]^2`}</KB>
                <p>The mechanism predicts first order in A, second order in B and overall third order, although the slow elementary step itself is only bimolecular.</p>
              </>}
              answer={<><K>{String.raw`r=(k_1k_2/k_{-1})[A][B]^2`}</K>.</>}
            />
            <WorkedExample
              number={24}
              title="Steady-state intermediate"
              concept="Derive a saturating composite rate law."
              question={<>For the mechanism <K>{String.raw`A\xrightarrow{k_1}I`}</K>, <K>{String.raw`I\xrightarrow{k_{-1}}A`}</K>, and <K>{String.raw`I+B\xrightarrow{k_2}P`}</K>, derive the product rate using steady state for I.</>}
              solution={<>
                <p>Write the intermediate balance:</p>
                <KB>{String.raw`\frac{d[I]}{dt}=k_1[A]-k_{-1}[I]-k_2[I][B]\approx0`}</KB>
                <KB>{String.raw`[I]=\frac{k_1[A]}{k_{-1}+k_2[B]}`}</KB>
                <p>Product forms in the last step:</p>
                <KB>{String.raw`r_P=k_2[I][B]=\frac{k_1k_2[A][B]}{k_{-1}+k_2[B]}`}</KB>
                <p>At low B, <K>{String.raw`r\approx(k_1k_2/k_{-1})[A][B]`}</K>. At high B, <K>{String.raw`r\approx k_1[A]`}</K>, independent of B.</p>
              </>}
              answer={<><K>{String.raw`r_P=\dfrac{k_1k_2[A][B]}{k_{-1}+k_2[B]}`}</K>; first order in B at low B and zero order in B at high B.</>}
            />
            <WorkedExample
              number={25}
              title="Square-root law from radical steady state"
              concept="Initiation balanced by bimolecular termination."
              question={<>Radicals are generated at rate <K>{String.raw`2k_i[I]`}</K>, consumed by termination <K>{String.raw`2R^\bullet\xrightarrow{k_t}`}</K>, and form product through <K>{String.raw`R^\bullet+A\xrightarrow{k_p}P`}</K>. Derive the product rate.</>}
              solution={<>
                <p>With the conventional termination event rate <K>{String.raw`k_t[R^\bullet]^2`}</K>, two radicals disappear per event:</p>
                <KB>{String.raw`\frac{d[R^\bullet]}{dt}=2k_i[I]-2k_t[R^\bullet]^2\approx0`}</KB>
                <KB>{String.raw`[R^\bullet]=\left(\frac{k_i[I]}{k_t}\right)^{1/2}`}</KB>
                <p>Therefore</p>
                <KB>{String.raw`r_P=k_p[A][R^\bullet]=k_p\left(\frac{k_i}{k_t}\right)^{1/2}[A][I]^{1/2}`}</KB>
              </>}
              answer={<>First order in A and half order in initiator I: <K>{String.raw`r_P=k_p(k_i/k_t)^{1/2}[A][I]^{1/2}`}</K>.</>}
            />
          </ChapterSection>
    </PartShell>
  );
}
