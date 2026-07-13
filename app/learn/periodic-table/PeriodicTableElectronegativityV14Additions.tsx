"use client";

import React, { useMemo } from "react";
import * as katex from "katex";

const C = {
  bg: "#07131f",
  panel: "#0d2030",
  panel2: "#12283b",
  border: "#294a65",
  text: "#f2f7fb",
  dim: "#c8d6e2",
  faint: "#8da4b7",
  cyan: "#63d5ea",
  gold: "#f3c45e",
  mint: "#81dfbc",
  coral: "#f09174",
  violet: "#c8a9ea",
  blue: "#8bbcf0",
  red: "#ff8a8a",
  green: "#92e6a8",
  serif: "Georgia, 'Iowan Old Style', 'Times New Roman', serif",
  sans: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif",
  mono: "'SFMono-Regular', Consolas, 'Liberation Mono', monospace",
};

function MathX({ tex, display = true }: { tex: string; display?: boolean }) {
  const html = useMemo(
    () =>
      katex.renderToString(tex, {
        throwOnError: false,
        displayMode: display,
        output: "htmlAndMathml",
        strict: "warn",
        trust: false,
      }),
    [tex, display],
  );

  return (
    <span
      style={{
        display: display ? "block" : "inline",
        maxWidth: "100%",
        overflowX: display ? "auto" : "visible",
        overflowY: "hidden",
        padding: display ? "8px 0" : 0,
      }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function SectionHeading({
  number,
  title,
  lead,
  accent = C.gold,
}: {
  number: string;
  title: string;
  lead: string;
  accent?: string;
}) {
  return (
    <header style={{ margin: "50px 0 24px" }}>
      <div
        style={{
          color: accent,
          fontFamily: C.mono,
          fontWeight: 950,
          letterSpacing: ".12em",
          fontSize: 13,
          textTransform: "uppercase",
          marginBottom: 9,
        }}
      >
        {number}
      </div>
      <h2
        style={{
          margin: 0,
          color: C.text,
          fontFamily: C.serif,
          fontSize: "clamp(2rem, 4vw, 3.45rem)",
          lineHeight: 1.08,
          letterSpacing: "-.035em",
        }}
      >
        {title}
      </h2>
      <p
        style={{
          margin: "14px 0 0",
          maxWidth: "86ch",
          color: C.dim,
          fontFamily: C.sans,
          fontSize: "clamp(1rem, 1.5vw, 1.18rem)",
          lineHeight: 1.8,
        }}
      >
        {lead}
      </p>
    </header>
  );
}

function DetailCard({
  number,
  title,
  rule,
  accent,
  children,
}: {
  number: string;
  title: string;
  rule: string;
  accent: string;
  children: React.ReactNode;
}) {
  return (
    <section
      style={{
        border: `1px solid ${accent}66`,
        borderTop: `4px solid ${accent}`,
        borderLeft: `7px solid ${accent}`,
        borderRadius: 26,
        padding: "clamp(22px, 3vw, 38px)",
        background: `linear-gradient(145deg, ${accent}14 0%, ${C.panel2} 25%, ${C.panel} 100%)`,
        boxShadow: "0 20px 54px rgba(0,0,0,.25)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: 16,
          marginBottom: 16,
        }}
      >
        <div
          style={{
            width: 46,
            height: 46,
            borderRadius: 15,
            display: "grid",
            placeItems: "center",
            flex: "0 0 auto",
            color: C.bg,
            background: accent,
            fontFamily: C.mono,
            fontWeight: 950,
          }}
        >
          {number}
        </div>
        <div>
          <h3
            style={{
              margin: 0,
              fontFamily: C.serif,
              fontSize: "clamp(1.45rem, 2.4vw, 2.15rem)",
              lineHeight: 1.14,
              color: C.text,
            }}
          >
            {title}
          </h3>
          <p
            style={{
              margin: "9px 0 0",
              color: accent,
              fontFamily: C.sans,
              fontWeight: 900,
              fontSize: "clamp(1rem, 1.3vw, 1.12rem)",
              lineHeight: 1.55,
            }}
          >
            {rule}
          </p>
        </div>
      </div>
      {children}
    </section>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        margin: "0 0 15px",
        maxWidth: "88ch",
        color: C.dim,
        fontFamily: C.sans,
        fontSize: "clamp(1rem, 1.35vw, 1.14rem)",
        lineHeight: 1.82,
      }}
    >
      {children}
    </p>
  );
}

function Label({
  children,
  color = C.mint,
}: {
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <strong style={{ color, fontWeight: 950 }}>
      {children}
    </strong>
  );
}

function ExampleList({ items }: { items: React.ReactNode[] }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "minmax(0, 1fr)",
        gap: 10,
        marginTop: 18,
      }}
    >
      {items.map((item, index) => (
        <div
          key={index}
          style={{
            border: `1px solid ${C.border}`,
            borderRadius: 16,
            padding: "14px 16px",
            background: "rgba(7,19,31,.48)",
            color: C.dim,
            fontFamily: C.sans,
            fontSize: "clamp(.98rem, 1.25vw, 1.08rem)",
            lineHeight: 1.7,
          }}
        >
          <span style={{ color: C.gold, fontWeight: 950 }}>
            Example {index + 1}.{" "}
          </span>
          {item}
        </div>
      ))}
    </div>
  );
}

function OrderBox({
  title,
  order,
  note,
  accent = C.cyan,
}: {
  title: string;
  order: string;
  note: string;
  accent?: string;
}) {
  return (
    <div
      style={{
        border: `1px solid ${accent}55`,
        borderRadius: 18,
        padding: "16px 18px",
        background: `${accent}0d`,
      }}
    >
      <div
        style={{
          color: accent,
          fontWeight: 950,
          fontFamily: C.sans,
          marginBottom: 7,
        }}
      >
        {title}
      </div>
      <div
        style={{
          color: C.text,
          fontFamily: C.mono,
          fontWeight: 850,
          lineHeight: 1.65,
          overflowWrap: "anywhere",
        }}
      >
        {order}
      </div>
      <div
        style={{
          marginTop: 8,
          color: C.dim,
          fontFamily: C.sans,
          lineHeight: 1.65,
        }}
      >
        {note}
      </div>
    </div>
  );
}

function Warning({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        marginTop: 18,
        padding: "16px 18px",
        borderLeft: `5px solid ${C.coral}`,
        borderRadius: 14,
        background: `${C.coral}12`,
        color: C.dim,
        fontFamily: C.sans,
        lineHeight: 1.75,
      }}
    >
      <strong style={{ color: C.coral }}>Important limit: </strong>
      {children}
    </div>
  );
}

const factorCards = [
  {
    title: "Atomic radius",
    rule: "Smaller bonded atom generally has higher electronegativity.",
    accent: C.cyan,
    body: (
      <>
        <P>
          <Label>Why:</Label> the shared electron pair lies closer to a small
          nucleus, so electrostatic attraction is stronger. Radius is often the
          clearest first explanation for a group trend.
        </P>
        <ExampleList
          items={[
            <>F &gt; Cl &gt; Br &gt; I because atomic size increases down Group 17.</>,
            <>Li &gt; Na &gt; K &gt; Rb &gt; Cs for the same reason.</>,
            <>Across Period 2, decreasing radius supports Li &lt; Be &lt; B &lt; C &lt; N &lt; O &lt; F.</>,
          ]}
        />
      </>
    ),
  },
  {
    title: "Effective nuclear charge, Zₑff",
    rule: "Greater net nuclear pull raises electronegativity.",
    accent: C.gold,
    body: (
      <>
        <P>
          <Label>Why:</Label> the bonding electrons feel the nuclear charge
          remaining after shielding is considered. Across a representative
          period, nuclear charge rises while the added electrons enter the same
          main shell; shielding does not cancel the extra proton completely.
        </P>
        <ExampleList
          items={[
            <>C is more electronegative than B; O is more electronegative than N.</>,
            <>Halogens are usually the most electronegative bonded atoms in their periods.</>,
            <>Alkali metals are usually the least electronegative bonded atoms in their periods.</>,
          ]}
        />
      </>
    ),
  },
  {
    title: "Shielding and orbital penetration",
    rule: "Greater shielding lowers the pull; poor d/f shielding creates irregular trends.",
    accent: C.mint,
    body: (
      <>
        <P>
          <Label>Why:</Label> inner electrons screen the nucleus. For orbitals
          of the same shell, penetration is approximately s &gt; p &gt; d &gt;
          f. Poor shielding by d and f electrons allows Zₑff to rise more than a
          simple shell-count argument predicts.
        </P>
        <ExampleList
          items={[
            <>χ(Ga) is slightly greater than χ(Al) because the filled 3d shell shields poorly.</>,
            <>Ge and Pb can be more electronegative than a smooth down-group decrease predicts.</>,
            <>Post-lanthanoid elements are affected by 4f contraction and, for very heavy atoms, relativistic effects.</>,
          ]}
        />
      </>
    ),
  },
  {
    title: "Charge and oxidation state",
    rule: "Positive charge raises effective electronegativity; negative charge lowers it.",
    accent: C.coral,
    body: (
      <>
        <MathX tex="\chi(X^{+})>\chi(X)>\chi(X^{-})" />
        <P>
          <Label>Why:</Label> positive charge contracts the electron cloud and
          reduces electron-electron repulsion. A negative centre has a more
          expanded cloud and resists attracting still more electron density.
        </P>
        <ExampleList
          items={[
            <>The same element is usually more electron-withdrawing in a higher positive oxidation state.</>,
            <>Fe₂O₃ is more acidic than FeO; SO₃ is more acidic than SO₂.</>,
            <>The electronegativity assigned to As in AsF₅ need not equal that in AsF₃.</>,
          ]}
        />
      </>
    ),
  },
  {
    title: "Hybridisation and percentage s-character",
    rule: "More s-character means a more electronegative hybrid orbital.",
    accent: C.violet,
    body: (
      <>
        <MathX tex="\chi_{\mathrm C}(sp)>\chi_{\mathrm C}(sp^2)>\chi_{\mathrm C}(sp^3)" />
        <P>
          <Label>Why:</Label> an s orbital penetrates closer to the nucleus than
          a p orbital. Useful approximate carbon values are 3.3 for sp, 2.8 for
          sp² and 2.5 for sp³.
        </P>
        <ExampleList
          items={[
            <>Acidity: HC≡CH &gt; H₂C=CH₂ &gt; CH₃CH₃.</>,
            <>An sp-hybridised carbon holds its electrons more tightly than an sp³ carbon.</>,
            <>A lone pair in an orbital with greater s-character is held more tightly and is generally less available for donation.</>,
          ]}
        />
      </>
    ),
  },
  {
    title: "Substituent and inductive environment",
    rule: "Electron-withdrawing neighbours raise positive character; electron-releasing groups lower it.",
    accent: C.blue,
    body: (
      <>
        <P>
          <Label>Why:</Label> electronegativity is not an isolated-atom constant
          in every molecule. The attached atoms, formal charge, resonance and
          local geometry alter the actual electron distribution.
        </P>
        <ExampleList
          items={[
            <>CF₃ is strongly electron-withdrawing because three F atoms pull electron density away from carbon.</>,
            <>Carbon bonded to F is more electron-poor than carbon bonded to I.</>,
            <>Alkyl groups can behave as electron-releasing groups even when their tabulated group electronegativity is close to that of H.</>,
          ]}
        />
      </>
    ),
  },
  {
    title: "Bond order, coordination and local structure",
    rule: "The orbital used and the electron density around the centre change the effective pull.",
    accent: C.green,
    body: (
      <>
        <P>
          <Label>Why:</Label> multiple bonding, resonance, coordination number
          and geometry redistribute electron density. A numerical
          electronegativity value must therefore be used with the chemical
          environment for which it was defined.
        </P>
        <ExampleList
          items={[
            <>Carbon in CO₂, CO and CH₄ does not have an identical bonding environment.</>,
            <>The same central atom may show different bond polarity in different oxidation states.</>,
            <>Pauling values predict trends, but bond strength and resonance can reverse a simple one-factor expectation.</>,
          ]}
        />
      </>
    ),
  },
  {
    title: "d/f contraction and relativistic effects",
    rule: "Heavy-atom orbital contraction can oppose an ordinary down-group decrease.",
    accent: C.red,
    body: (
      <>
        <P>
          <Label>Why:</Label> d and f electrons shield poorly. In heavy atoms,
          relativistic contraction stabilises outer s and p orbitals, while d
          and f orbitals can expand. These effects alter size, ionisation energy
          and bonded electronegativity together.
        </P>
        <ExampleList
          items={[
            <>Pb is not simply a much less electronegative version of Sn.</>,
            <>Au has unusually high electronegativity and electron affinity for a metal.</>,
            <>The 6s pair of Hg is strongly stabilised, contributing to several unusual mercury properties.</>,
          ]}
        />
      </>
    ),
  },
];

export function ElectronegativityFactorsApplicationsV14() {
  return (
    <section
      data-visual-version="periodicity-top-nav-v14"
      style={{
        maxWidth: 1540,
        margin: "0 auto",
        padding: "0 clamp(14px, 3vw, 42px) 70px",
        color: C.text,
      }}
    >
      <SectionHeading
        number="DETAILED EXPANSION · V14"
        title="Factors affecting electronegativity"
        lead="Each factor is separated into a full-width study card. First identify the comparison, then decide which factor dominates. Do not apply a memorised arrow without checking charge, orbital and chemical environment."
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr)",
          gap: 24,
        }}
      >
        {factorCards.map((card, index) => (
          <DetailCard
            key={card.title}
            number={String(index + 1)}
            title={card.title}
            rule={card.rule}
            accent={card.accent}
          >
            {card.body}
          </DetailCard>
        ))}
      </div>

      <div
        style={{
          marginTop: 26,
          padding: "20px 22px",
          borderRadius: 20,
          border: `1px solid ${C.gold}66`,
          background: `linear-gradient(135deg, ${C.gold}15, ${C.panel})`,
          color: C.dim,
          fontFamily: C.sans,
          fontSize: "clamp(1rem, 1.35vw, 1.16rem)",
          lineHeight: 1.78,
        }}
      >
        <strong style={{ color: C.gold }}>Master memory line:</strong> SMALL
        radius + STRONG Zₑff + POSITIVE charge + MORE s-character + LOW
        shielding + ELECTRON-WITHDRAWING neighbours usually means higher χ.
        Always ask which factor is strongest in the stated species.
      </div>

      <SectionHeading
        number="PERIODIC VARIATION"
        title="How electronegativity changes in the periodic table"
        lead="These are the dominant trends, not rigid straight lines. Transition series, post-transition elements, heavy atoms and unusual oxidation states produce important deviations."
        accent={C.cyan}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr)",
          gap: 14,
        }}
      >
        <OrderBox
          title="Across a representative period"
          order="Electronegativity generally increases from left to right."
          note="Zₑff rises and radius falls. Period 2: Li < Be < B < C < N < O < F. Period 3: Na < Mg < Al < Si < P < S < Cl."
          accent={C.cyan}
        />
        <OrderBox
          title="Down a representative group"
          order="Electronegativity generally decreases."
          note="The valence shell moves farther from the nucleus and shielding increases. Halogens: F > Cl > Br > I. Alkali metals: Li > Na > K ≈ Rb > Cs."
          accent={C.gold}
        />
        <OrderBox
          title="d-block and f-block"
          order="The change is slower and less regular than in the s- and p-block."
          note="Across a transition row the rise is gentle, with local dips related to electronic configuration. Lanthanoid values cover a narrow range because 4f electrons are deeply seated."
          accent={C.mint}
        />
        <OrderBox
          title="Noble gases"
          order="Do not write: electronegativity of every noble gas is zero."
          note="For an unbonded noble-gas atom, ordinary bond electronegativity has no direct meaning. Theoretical values can be calculated, and xenon has meaningful electronegativity in its compounds."
          accent={C.coral}
        />
      </div>

      <SectionHeading
        number="CHEMICAL APPLICATIONS"
        title="What electronegativity helps us predict"
        lead="Electronegativity is useful because it connects periodic position with bond polarity, oxide character, oxyacid strength, hybridisation, naming, reaction sites and partial ionic character."
        accent={C.mint}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr)",
          gap: 24,
        }}
      >
        <DetailCard
          number="1"
          title="Bond polarity and percentage ionic character"
          rule="Greater Δχ generally gives greater charge separation, but no ordinary bond becomes perfectly ionic by a sharp cut-off."
          accent={C.cyan}
        >
          <MathX tex="\%\ \text{ionic character}\approx16|\Delta\chi|+3.5(\Delta\chi)^2" />
          <MathX tex="\%\ \text{ionic character}\approx100\left(1-e^{-0.25(\Delta\chi)^2}\right)" />
          <P>
            The first expression is the modified Hanny–Smyth classroom
            estimate; the second is Pauling’s exponential estimate. They are
            approximate models and need not give identical percentages.
          </P>
          <ExampleList
            items={[
              <>H–Cl is polar covalent because Cl attracts the shared pair more strongly than H.</>,
              <>Na–Cl has much greater ionic character than H–Cl because its Δχ is much larger.</>,
              <>HF has the most polar H–X bond in the series HF, HCl, HBr, HI, although aqueous acid strength follows the reverse order because H–X bond strength dominates.</>,
            ]}
          />
        </DetailCard>

        <DetailCard
          number="2"
          title="Acidic, basic and amphoteric character of oxides"
          rule="Across a period, oxides usually change from ionic/basic to amphoteric to covalent/acidic."
          accent={C.gold}
        >
          <P>
            As the central atom becomes more electronegative, the M–O bond
            becomes less ionic and the oxide is less willing to produce OH⁻.
            Covalent oxides of non-metals commonly form acids or react with
            bases.
          </P>
          <div style={{ display: "grid", gap: 12, marginTop: 18 }}>
            <OrderBox
              title="Period 2"
              order="Li₂O < BeO < B₂O₃ < CO₂ < N₂O₅"
              note="Basic → amphoteric → acidic."
              accent={C.gold}
            />
            <OrderBox
              title="Period 3"
              order="Na₂O < MgO < Al₂O₃ < SiO₂ < P₄O₁₀ < SO₃ < Cl₂O₇"
              note="Na₂O and MgO are basic, Al₂O₃ is amphoteric, while the later oxides are acidic."
              accent={C.cyan}
            />
            <OrderBox
              title="Nitrogen oxides"
              order="N₂O, NO (neutral) < N₂O₃ < NO₂/N₂O₄ < N₂O₅"
              note="Higher oxidation state generally produces greater acidic character."
              accent={C.mint}
            />
            <OrderBox
              title="Same element"
              order="CO < CO₂; SO₂ < SO₃; FeO < Fe₂O₃"
              note="A higher oxidation state usually makes the central atom more electron-withdrawing and the oxide more acidic."
              accent={C.coral}
            />
          </div>
          <P>
            <Label color={C.violet}>Common amphoteric oxides:</Label> BeO,
            Al₂O₃, ZnO, SnO, SnO₂, PbO and PbO₂. Their corresponding hydroxides
            are also commonly amphoteric where stable.
          </P>
          <MathX tex="\mathrm{Al_2O_3+6H^+\rightarrow2Al^{3+}+3H_2O}" />
          <MathX tex="\mathrm{Al_2O_3+2OH^-+3H_2O\rightarrow2[Al(OH)_4]^-}" />
          <Warning>
            Electronegativity is one factor. Structure, lattice energy,
            oxidation state, bond strength and solvation also affect oxide
            behaviour.
          </Warning>
        </DetailCard>

        <DetailCard
          number="3"
          title="Strength of oxyacids"
          rule="More electron withdrawal from the O–H bond usually increases acidity when structures are comparable."
          accent={C.mint}
        >
          <P>
            Electron-withdrawing oxygen atoms stabilise the conjugate base and
            increase O–H bond polarity. Compare acids only after checking the
            number of ionisable O–H groups, resonance and structure.
          </P>
          <div style={{ display: "grid", gap: 12, marginTop: 18 }}>
            <OrderBox
              title="Chlorine oxyacids"
              order="HClO < HClO₂ < HClO₃ < HClO₄"
              note="More terminal oxygen atoms and a higher oxidation state stabilise the conjugate base."
              accent={C.cyan}
            />
            <OrderBox
              title="Nitrogen and sulfur"
              order="HNO₂ < HNO₃; H₂SO₃ < H₂SO₄"
              note="The higher oxidation-state acid is stronger in each comparable pair."
              accent={C.gold}
            />
            <OrderBox
              title="Phosphorus oxyacids"
              order="H₃PO₂ > H₃PO₃ > H₃PO₄ for first dissociation"
              note="Do not rank them only by phosphorus oxidation state. Their structures and numbers of P–OH bonds differ."
              accent={C.coral}
            />
            <OrderBox
              title="Same oxidation state, different central atom"
              order="H₃PO₄ is slightly stronger than H₃AsO₄ in the usual first-dissociation comparison."
              note="Central-atom electronegativity and bond structure both contribute."
              accent={C.violet}
            />
          </div>
        </DetailCard>

        <DetailCard
          number="4"
          title="Will A–O–H behave mainly as an acid or a base?"
          rule="Compare the polarity of A–O with the polarity of O–H as a first guide."
          accent={C.coral}
        >
          <MathX tex="|\chi_O-\chi_A|>|\chi_O-\chi_H|\Rightarrow A-O\ \text{is more ionic; OH^- formation is favoured}" />
          <MathX tex="|\chi_O-\chi_H|>|\chi_O-\chi_A|\Rightarrow O-H\ \text{proton release is favoured}" />
          <P>
            For CsOH, using χ(O) ≈ 3.5, χ(Cs) ≈ 0.7 and χ(H) ≈ 2.1:
          </P>
          <MathX tex="|\chi_O-\chi_{Cs}|=2.8>|\chi_O-\chi_H|=1.4" />
          <P>
            Therefore Cs–O is highly ionic and CsOH behaves as a strong base.
            For HOCl:
          </P>
          <MathX tex="|\chi_O-\chi_H|=1.4>|\chi_O-\chi_{Cl}|\approx0.3" />
          <P>
            O–H cleavage is favoured, so HOCl behaves as an acid.
          </P>
          <ExampleList
            items={[
              <>NaOH and KOH follow the same basic pattern as CsOH.</>,
              <>HOCl, HNO₃ and H₂SO₄ release H⁺ because their structures stabilise the remaining oxyanion.</>,
              <>Al(OH)₃ and Be(OH)₂ are amphoteric, showing why this simple comparison is a guide rather than a complete theory.</>,
            ]}
          />
        </DetailCard>

        <DetailCard
          number="5"
          title="Metallic and non-metallic character"
          rule="Low electronegativity supports electropositive metallic behaviour; high electronegativity supports non-metallic behaviour."
          accent={C.blue}
        >
          <P>
            Metals lose or share electron density relatively easily. Non-metals
            attract shared electron density more strongly. Therefore metallic
            character increases toward the lower-left of the periodic table,
            while non-metallic character increases toward the upper-right.
          </P>
          <ExampleList
            items={[
              <>Cs is more metallic than Li; Li is more metallic than Be.</>,
              <>F is more non-metallic than O, and O is more non-metallic than N.</>,
              <>Across Period 3, the change from Na and Mg to P, S and Cl parallels the rise in electronegativity.</>,
            ]}
          />
        </DetailCard>

        <DetailCard
          number="6"
          title="Hydrogen bonding"
          rule="A strongly electronegative atom makes attached H more δ⁺, strengthening the electrostatic contribution."
          accent={C.violet}
        >
          <P>
            O–H, N–H and F–H are common donor bonds. A hydrogen bond also needs
            a suitable acceptor lone pair and favourable geometry, so
            electronegativity alone does not determine the final strength.
          </P>
          <ExampleList
            items={[
              <>Water forms an extended hydrogen-bond network.</>,
              <>HF forms strong hydrogen bonds, but its H–F covalent bond is also exceptionally strong.</>,
              <>Ammonia hydrogen-bonds less strongly than water because N is less electronegative than O and has different geometry.</>,
            ]}
          />
        </DetailCard>

        <DetailCard
          number="7"
          title="Hybridisation, acidity and basicity"
          rule="Greater s-character increases carbon electronegativity and stabilises negative charge closer to the nucleus."
          accent={C.green}
        >
          <MathX tex="\chi_C(sp)>\chi_C(sp^2)>\chi_C(sp^3)" />
          <MathX tex="\mathrm{HC{\equiv}CH>H_2C{=}CH_2>CH_3CH_3\quad(acidity)}" />
          <P>
            For nitrogen bases, a lone pair held in an orbital with greater
            s-character is less available for donation. Resonance can be even
            more important: the amide lone pair is delocalised and therefore
            much less basic than an amine lone pair.
          </P>
          <ExampleList
            items={[
              <>Terminal alkynes are more acidic than alkenes and alkanes.</>,
              <>A nitrile nitrogen holds its lone pair tightly and is a weak base.</>,
              <>Aniline is less basic than an aliphatic amine because its lone pair is delocalised into the benzene ring.</>,
            ]}
          />
        </DetailCard>

        <DetailCard
          number="8"
          title="Oxidation number and compound naming"
          rule="For oxidation-number bookkeeping, assign a bonding pair to the more electronegative atom."
          accent={C.red}
        >
          <P>
            This rule is formal bookkeeping; it does not mean the bond is fully
            ionic. It helps determine oxidation states and the electropositive
            or electronegative partner in binary covalent names.
          </P>
          <ExampleList
            items={[
              <>In HCl, H is assigned +1 and Cl −1.</>,
              <>OF₂ is oxygen difluoride: F is more electronegative, so O has oxidation state +2.</>,
              <>ICl is iodine monochloride: Cl is more electronegative than I.</>,
              <>In CH₄, carbon is assigned −4 and each H is +1 because C is more electronegative than H.</>,
            ]}
          />
        </DetailCard>

        <DetailCard
          number="9"
          title="Bond-length correction"
          rule="Electronegativity difference can shorten a heteronuclear bond relative to a simple sum of covalent radii."
          accent={C.cyan}
        >
          <MathX tex="r_{A-B}=r_A+r_B-c|\chi_A-\chi_B|" />
          <P>
            This is the Schomaker–Stevenson idea. Greater polarity increases
            electrostatic attraction between partial charges and can pull the
            bonded nuclei closer. The empirical constant depends on the radius
            convention and units.
          </P>
        </DetailCard>

        <DetailCard
          number="10"
          title="Group electronegativity and inductive effect"
          rule="A whole group can act as one electron-pulling or electron-pushing unit."
          accent={C.gold}
        >
          <P>
            Group electronegativity depends on the constituent atoms and on how
            easily the group spreads charge. Therefore inherent
            electronegativity alone does not completely determine the
            inductive effect.
          </P>
          <ExampleList
            items={[
              <>CF₃ is strongly −I because F atoms pull electron density from the attached carbon.</>,
              <>Alkyl groups are commonly +I even though a tabulated group electronegativity may be close to H.</>,
              <>NO₂, CN and carbonyl-containing groups are strongly electron-withdrawing in many structures.</>,
            ]}
          />
        </DetailCard>

        <DetailCard
          number="11"
          title="Preferred site of nucleophilic attack"
          rule="A nucleophile attacks a sufficiently positive and accessible centre with a suitable accepting orbital."
          accent={C.mint}
        >
          <P>
            Electronegativity helps locate partial positive charge, but
            polarisability, orbital energy, steric access and leaving-group
            ability also matter.
          </P>
          <ExampleList
            items={[
              <>In CH₃I, nucleophilic substitution occurs mainly at carbon.</>,
              <>In a carbonyl compound, the C=O bond is polarised Cδ⁺–Oδ⁻, so nucleophiles attack carbon.</>,
              <>Strongly electron-withdrawing F atoms in CF₃I can create unusual charge distribution; a one-line electronegativity argument is not sufficient by itself.</>,
            ]}
          />
        </DetailCard>

        <DetailCard
          number="12"
          title="What electronegativity cannot decide alone"
          rule="Use it as a powerful organising idea, not as a universal single-factor law."
          accent={C.coral}
        >
          <ExampleList
            items={[
              <>Aqueous acid strength of HX depends strongly on H–X bond strength and solvation, not only bond polarity.</>,
              <>Melting point depends on structure, packing and cohesive forces.</>,
              <>Electron affinity is an isolated gaseous-atom energy change; it is not the same quantity as electronegativity.</>,
              <>Noble-gas bond electronegativity has no ordinary meaning when no bond exists.</>,
              <>Oxide and oxyacid orders can change when structure, resonance or the number of ionisable O–H groups changes.</>,
            ]}
          />
        </DetailCard>
      </div>
    </section>
  );
}

export default ElectronegativityFactorsApplicationsV14;

