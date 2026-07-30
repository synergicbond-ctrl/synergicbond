import type { SolutionPart } from "./types";

export const part03: SolutionPart = {
  "number": 3,
  "slug": "03-raoults-law-and-ideal-solutions",
  "shortTitle": "Raoult’s Law & Ideality",
  "title": "Dalton’s Law, Raoult’s Law and Ideal Solutions",
  "subtitle": "From molecular evaporation–condensation balance to total pressure, vapour composition and thermodynamic conditions for ideal mixing.",
  "sourcePages": "9–12",
  "objectives": [
    "Combine Dalton’s and Raoult’s laws.",
    "Calculate partial and total vapour pressures.",
    "Relate liquid composition x to vapour composition y.",
    "State all thermodynamic conditions for ideal solutions.",
    "Explain entropy-driven spontaneous mixing."
  ],
  "blocks": [
    {
      "kind": "theory",
      "title": "Dalton’s law above a liquid mixture",
      "paragraphs": [
        "When several volatile components coexist in the vapour phase, the total pressure is the sum of their partial pressures. The partial pressure of a component also equals its vapour mole fraction multiplied by total pressure.",
        "Dalton’s law describes the gas phase. It does not by itself tell us how the liquid composition controls each partial pressure; that connection is supplied by Raoult’s law for an ideal liquid solution."
      ],
      "equations": [
        "P = Σpᵢ",
        "pᵢ = yᵢP"
      ],
      "sourcePages": "9"
    },
    {
      "kind": "derivation",
      "title": "Raoult’s law from molecular evaporation and condensation rates",
      "steps": [
        "For component A, the number of A molecules available at the liquid surface is proportional to x_A, so its evaporation rate is r_e=k_ex_A.",
        "The condensation rate is proportional to the partial pressure of A: r_c=k_cp_A.",
        "At equilibrium k_ex_A=k_cp_A, hence p_A=(k_e/k_c)x_A.",
        "For pure A, x_A=1 and p_A=p_A°. Therefore k_e/k_c=p_A°."
      ],
      "result": "p_A = x_Ap_A°",
      "assumptions": [
        "Liquid is ideal over the composition range.",
        "Vapour behaves ideally.",
        "Temperature is fixed.",
        "No reaction or association changes the molecular identity."
      ],
      "sourcePages": "9–11",
      "visual": "raoult"
    },
    {
      "kind": "theory",
      "title": "Binary ideal-solution equations",
      "paragraphs": [
        "For a binary mixture A–B, each component obeys Raoult’s law. Adding the partial pressures gives a linear total-pressure equation in liquid composition.",
        "If B is more volatile, p_B°>p_A°. The vapour becomes richer in B than the liquid, so y_B>x_B except at pure-component endpoints."
      ],
      "equations": [
        "p_A=x_Ap_A° ; p_B=x_Bp_B°",
        "P=x_Ap_A°+x_Bp_B° = p_A° + x_B(p_B°−p_A°)",
        "y_A=x_Ap_A°/P ; y_B=x_Bp_B°/P",
        "y_B/y_A = (x_B/x_A)(p_B°/p_A°)"
      ],
      "sourcePages": "9–10"
    },
    {
      "kind": "example",
      "number": "3.1",
      "title": "Total pressure and vapour composition",
      "question": "An ideal liquid contains 2.5 mol A and 4.0 mol B. At the temperature used, p_A°=320 torr and p_B°=180 torr. Calculate p_A, p_B, P, y_A and y_B.",
      "steps": [
        "x_A=2.5/6.5=0.3846 and x_B=0.6154.",
        "p_A=0.3846×320=123.1 torr.",
        "p_B=0.6154×180=110.8 torr.",
        "P=233.8 torr.",
        "y_A=123.1/233.8=0.5265 and y_B=0.4735."
      ],
      "answer": "p_A=123.1 torr, p_B=110.8 torr, P=233.8 torr, y_A=0.5265.",
      "sourcePages": "9–10",
      "transformation": "Moles and pure vapour pressures changed from the source."
    },
    {
      "kind": "example",
      "number": "3.2",
      "title": "Recover pure vapour pressures from two mixtures",
      "question": "Four moles A and two moles B form an ideal solution with P=58 kPa. After adding 3 mol B, P becomes 70 kPa. Find p_A° and p_B°.",
      "steps": [
        "First mixture: (4/6)p_A°+(2/6)p_B°=58, so 2p_A°+p_B°=174.",
        "Second mixture: (4/9)p_A°+(5/9)p_B°=70, so 4p_A°+5p_B°=630.",
        "From p_B°=174−2p_A°, substitute into the second equation.",
        "4p_A°+5(174−2p_A°)=630 ⇒ p_A°=40 kPa.",
        "Then p_B°=94 kPa."
      ],
      "answer": "p_A°=40 kPa and p_B°=94 kPa.",
      "sourcePages": "15–17",
      "transformation": "Uses the same two-measurement reconstruction idea with new amounts and pressures."
    },
    {
      "kind": "example",
      "number": "3.3",
      "title": "Use x, y and P to identify pure-component pressures",
      "question": "At equilibrium, x_A=0.52, y_A=0.34 and P=75 kPa. Assuming ideality, calculate p_A° and p_B°.",
      "steps": [
        "p_A=y_AP=0.34×75=25.5 kPa.",
        "p_A°=p_A/x_A=25.5/0.52=49.04 kPa.",
        "p_B=(1−0.34)×75=49.5 kPa and x_B=0.48.",
        "p_B°=49.5/0.48=103.13 kPa."
      ],
      "answer": "p_A°=49.0 kPa and p_B°=103.1 kPa.",
      "sourcePages": "17–19",
      "transformation": "Composition and pressure changed; solution remains descriptive."
    },
    {
      "kind": "theory",
      "title": "Definition and conditions of an ideal solution",
      "paragraphs": [
        "An ideal solution obeys Raoult’s law for every volatile component over the entire composition range at a fixed temperature. Molecularly, replacing an A neighbour by B changes the interaction energy negligibly.",
        "Because A–A, B–B and A–B attractions are approximately equivalent, mixing neither absorbs nor releases heat and causes no volume change. Nevertheless, mixing is spontaneous because configurational entropy increases."
      ],
      "bullets": [
        "A–A ≈ B–B ≈ A–B interactions.",
        "ΔH_mix=0.",
        "ΔV_mix=0.",
        "ΔU_mix≈0 for condensed phases at ordinary pressure.",
        "ΔS_mix>0 for mixing distinct components.",
        "ΔG_mix=−TΔS_mix<0."
      ],
      "sourcePages": "11–12"
    },
    {
      "kind": "derivation",
      "title": "Entropy and free energy of ideal mixing",
      "steps": [
        "For n_A and n_B moles, random mixing increases the number of molecular arrangements.",
        "The ideal entropy of mixing is obtained from combinatorial statistics or integration of chemical potentials.",
        "Since ΔH_mix=0 for an ideal solution, the Gibbs-energy change is controlled entirely by the entropy term."
      ],
      "result": "ΔS_mix = −R(n_A ln x_A + n_B ln x_B);  ΔG_mix = RT(n_A ln x_A + n_B ln x_B) < 0",
      "assumptions": [
        "Components are distinguishable.",
        "Solution is ideal.",
        "Temperature and pressure are constant."
      ],
      "sourcePages": "11–12"
    },
    {
      "kind": "table",
      "title": "Near-ideal liquid pairs and why they behave well",
      "headers": [
        "Pair",
        "Reason for near-ideality",
        "Caution"
      ],
      "rows": [
        [
          "Benzene + toluene",
          "Similar size, shape and dispersion forces",
          "Small real deviations can still occur."
        ],
        [
          "n-Hexane + n-heptane",
          "Homologous non-polar molecules",
          "Best at moderate temperatures."
        ],
        [
          "CCl₄ + SiCl₄",
          "Similar tetrahedral, non-polar molecules",
          "Chemical stability must be maintained."
        ],
        [
          "Methanol + ethanol",
          "Related hydrogen-bonding liquids",
          "Not perfectly ideal over all compositions."
        ]
      ],
      "sourcePages": "11–12"
    },
    {
      "kind": "reference",
      "title": "Partial molar quantities in an ideal solution",
      "paragraphs": [
        "The chemical potential of component i in an ideal liquid solution is μᵢ=μᵢ*+RT ln xᵢ. The logarithmic term is the origin of entropy of mixing and the driving force for diffusion from high chemical potential to low chemical potential.",
        "Even though total enthalpy and volume of mixing vanish, partial molar Gibbs energies change strongly with composition. Ideality therefore does not mean that nothing thermodynamic happens; it means excess properties vanish."
      ],
      "equations": [
        "μᵢ = μᵢ* + RT ln xᵢ",
        "Gᴱ=Hᴱ=Vᴱ=0 for an ideal solution"
      ],
      "sourceLabel": "Supplemental depth from standard solution thermodynamics."
    },
    {
      "kind": "reference",
      "title": "Standard states behind Raoult’s law",
      "paragraphs": [
        "Raoult’s law uses the pure liquid at the same temperature and pressure as the standard state for each component. As xᵢ approaches one, many real solutions approach pᵢ=xᵢpᵢ° even when they are nonideal at intermediate composition.",
        "At infinite dilution the solute does not generally approach the Raoult standard state. Its limiting behaviour is often described by Henry’s law. Thus the same component may obey Raoult behaviour near purity and Henry behaviour near infinite dilution.",
        "Recognising the standard state prevents the mistaken belief that Henry’s law and Raoult’s law are competing formulas. They describe different limiting references."
      ],
      "sourceLabel": "Supplemental expansion synthesised from Atkins, Monk, Mortimer, Petrucci, Zumdahl and advanced coaching-level physical chemistry."
    },
    {
      "kind": "reference",
      "title": "Ideal mixing and statistical mechanics",
      "paragraphs": [
        "The entropy of ideal mixing arises because labelled molecules can occupy many more arrangements after partitions are removed. The logarithmic expression follows from Boltzmann’s relation S=k ln W and Stirling’s approximation for factorials.",
        "The entropy increase remains even when the molecules have the same size and interaction energy, provided they are distinguishable chemical species. If they become physically identical, the entropy of mixing must vanish; this is the Gibbs paradox.",
        "For JEE work, the important result is that ideal mixing can be spontaneous despite ΔHmix=0. The negative Gibbs energy comes entirely from −TΔSmix."
      ],
      "sourceLabel": "Supplemental expansion synthesised from Atkins, Monk, Mortimer, Petrucci, Zumdahl and advanced coaching-level physical chemistry."
    },
    {
      "kind": "reference",
      "title": "Partial molar quantities",
      "paragraphs": [
        "A partial molar property is the change in a total extensive property when an infinitesimal amount of one component is added at fixed temperature, pressure and amounts of all other components. Chemical potential is the partial molar Gibbs energy.",
        "In an ideal solution, partial molar enthalpy and volume equal their pure-component values, while partial molar Gibbs energy includes RT ln xᵢ. This composition term governs diffusion and phase equilibrium.",
        "Although detailed partial-molar calculations are beyond many exam questions, the concept explains why total properties can be non-linear functions of composition even when some excess properties vanish."
      ],
      "sourceLabel": "Supplemental expansion synthesised from Atkins, Monk, Mortimer, Petrucci, Zumdahl and advanced coaching-level physical chemistry."
    },
    {
      "kind": "trap",
      "title": "Ideal does not mean equal liquid and vapour compositions",
      "paragraphs": [
        "Liquid and vapour compositions are equal only when p_A°=p_B° or at pure-component limits. In a normal ideal binary with unequal pure vapour pressures, the vapour is enriched in the more volatile component."
      ],
      "equations": [
        "y_B/x_B = p_B°/P"
      ],
      "sourcePages": "9–12"
    }
  ]
};
