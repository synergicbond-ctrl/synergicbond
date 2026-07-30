"use client";

import { PartShell, ChapterSection, ConceptCard, DataTable, ExamTrap, FormulaCard, K, KB, WorkedExample } from "../../chemical-kinetics-shared";

export default function ChemicalKineticsPart04() {
  return (
    <PartShell
      part={4}
      title={"Rate Law, Order and Molecularity"}
      description={"Experimental rate laws, rate constants, units, order, pseudo-order behaviour and molecularity."}
    >
<ChapterSection
            id="rate-law"
            index="05"
            eyebrow="Empirical dependence"
            title="Rate law, order, molecularity and rate-constant units"
            intro={<>The rate law is the mathematical statement that reproduces measured composition–rate data under specified conditions. Its exponents are empirical unless the expression belongs to a known elementary step.</>}
          >
            <div className="grid gap-5 xl:grid-cols-2">
              <FormulaCard title="General differential rate law">
                <KB>{String.raw`r=k[A]^\alpha[B]^\beta[C]^\gamma`}</KB>
                <KB>{String.raw`n=\alpha+\beta+\gamma`}</KB>
              </FormulaCard>
              <FormulaCard title="General unit of k" note={<>Here concentration is measured in mol L⁻¹ and time in seconds.</>}>
                <KB>{String.raw`[k]=(\mathrm{mol\,L^{-1}})^{1-n}\,\mathrm{s^{-1}}`}</KB>
                <KB>{String.raw`[k]=\mathrm{L^{\,n-1}\,mol^{\,1-n}\,s^{-1}}`}</KB>
              </FormulaCard>
            </div>
            <DataTable
              headers={["Overall order n", "Illustrative rate law", "Unit of k"]}
              rows={[
                [0, <K key="order-0-law">{String.raw`r=k`}</K>, <K key="order-0-unit">{String.raw`\mathrm{mol\,L^{-1}\,s^{-1}}`}</K>],
                [1, <K key="order-1-law">{String.raw`r=k[A]`}</K>, <K key="order-1-unit">{String.raw`\mathrm{s^{-1}}`}</K>],
                [2, <K key="order-2-law">{String.raw`r=k[A]^2`}</K>, <K key="order-2-unit">{String.raw`\mathrm{L\,mol^{-1}\,s^{-1}}`}</K>],
                [3, <K key="order-3-law">{String.raw`r=k[A]^2[B]`}</K>, <K key="order-3-unit">{String.raw`\mathrm{L^2\,mol^{-2}\,s^{-1}}`}</K>],
                [<K key="order-half-value">{String.raw`1/2`}</K>, <K key="order-half-law">{String.raw`r=k[A]^{1/2}`}</K>, <K key="order-half-unit">{String.raw`\mathrm{mol^{1/2}\,L^{-1/2}\,s^{-1}}`}</K>],
              ]}
            />
            <div className="grid gap-5 xl:grid-cols-2">
              <ConceptCard title="Reaction order" tone="cyan">
                <p>The order with respect to a species is its exponent in the experimentally valid rate law. Overall order is the algebraic sum of the exponents.</p>
                <p>Order may be zero, positive, negative, integral or fractional, and may change when the dominant mechanism changes.</p>
              </ConceptCard>
              <ConceptCard title="Molecularity" tone="violet">
                <p>Molecularity counts the reacting entities in one elementary event. It is defined only for an elementary step and is a positive integer.</p>
                <p>Unimolecular and bimolecular events are common. Genuine termolecular events are rare because three-body encounters with suitable energy and orientation are improbable.</p>
              </ConceptCard>
            </div>
            <DataTable
              headers={["Feature", "Order", "Molecularity"]}
              rows={[
                ["Applies to", "experimental rate law", "one elementary step"],
                ["Allowed values", "zero, fractional, negative or integer", "positive integer"],
                ["How obtained", "experiment or derived mechanism", "count reactant entities in the step"],
                ["Relation to stoichiometry", "generally independent", "equals elementary-step reactant coefficients"],
              ]}
            />
            <div className="grid gap-5 xl:grid-cols-2">
              <ConceptCard title="Pseudo-order kinetics" tone="amber">
                <p>If B is in such large excess that its concentration is effectively constant,</p>
                <KB>{String.raw`r=k[A][B]^m=k_{\mathrm{obs}}[A],\qquad k_{\mathrm{obs}}=k[B]^m`}</KB>
                <p>The observed first-order constant contains the fixed concentration and therefore changes when that concentration changes.</p>
              </ConceptCard>
              <ConceptCard title="Complex and non-power laws" tone="rose">
                <p>Not every mechanism produces a simple monomial. Saturation, inhibition, autocatalysis and competing pathways can give rational or composite expressions.</p>
                <KB>{String.raw`r=\frac{kK[A]}{1+K[A]}\qquad\text{or}\qquad r=\frac{k[A][B]}{1+K[B]}`}</KB>
                <ExamTrap>For such expressions, quoting one global “order” may be meaningless. Use limiting orders at low or high concentration.</ExamTrap>
              </ConceptCard>
            </div>
            <WorkedExample
              number={3}
              title="Rate law from initial-rate data"
              concept="Determine individual orders without assuming stoichiometric exponents."
              question={<>For a reaction between A and B, the initial data are:</>}
              solution={<>
                <DataTable headers={["Run", "[A]₀ / M", "[B]₀ / M", "r₀ / M s⁻¹"]} rows={[
                  [1, "0.120", "0.080", <K key="r1-rate">{String.raw`1.44\times10^{-4}`}</K>],
                  [2, "0.240", "0.080", <K key="r2-rate">{String.raw`2.88\times10^{-4}`}</K>],
                  [3, "0.120", "0.320", <K key="r3-rate">{String.raw`5.76\times10^{-4}`}</K>],
                ]}/>
                <p>Assume <K>{String.raw`r=k[A]^\alpha[B]^\beta`}</K>. Compare runs 1 and 2: A doubles while B is fixed, and rate doubles.</p>
                <KB>{String.raw`2=2^\alpha\Rightarrow\alpha=1`}</KB>
                <p>Compare runs 1 and 3: B increases fourfold while A is fixed, and rate increases fourfold.</p>
                <KB>{String.raw`4=4^\beta\Rightarrow\beta=1`}</KB>
                <p>Thus <K>{String.raw`r=k[A][B]`}</K>. Use run 1:</p>
                <KB>{String.raw`k=\frac{1.44\times10^{-4}}{(0.120)(0.080)}=1.50\times10^{-2}\ \mathrm{L\,mol^{-1}\,s^{-1}}`}</KB>
              </>}
              answer={<>First order in A, first order in B, overall second order; <K>{String.raw`k=1.50\times10^{-2}\ \mathrm{L\,mol^{-1}\,s^{-1}}`}</K>.</>}
            />
            <WorkedExample
              number={4}
              difficulty="JEE Main+"
              title="Unit of a fractional-order rate constant"
              concept="Dimensional analysis of k."
              question={<>A reaction obeys <K>{String.raw`r=k[A]^{3/2}[B]^{-1/2}`}</K>. State the overall order and the SI-style concentration unit of k when rate is in mol L⁻¹ s⁻¹.</>}
              solution={<>
                <p>The overall order is the algebraic sum:</p>
                <KB>{String.raw`n=\frac32-\frac12=1`}</KB>
                <p>For any first-order law, the concentration dimensions cancel from k:</p>
                <KB>{String.raw`[k]=(\mathrm{mol\,L^{-1}})^{1-1}\mathrm{s^{-1}}=\mathrm{s^{-1}}`}</KB>
                <p>The negative half-order means increasing B suppresses the rate under the stated conditions; it does not make the overall order negative.</p>
              </>}
              answer={<>Overall order <K>{String.raw`1`}</K>; <K>{String.raw`[k]=\mathrm{s^{-1}}`}</K>.</>}
            />
          </ChapterSection>
    </PartShell>
  );
}
