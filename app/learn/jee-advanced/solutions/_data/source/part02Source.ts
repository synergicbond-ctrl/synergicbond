import type { NoteBlock } from "../types";

export const part02Source: NoteBlock[] = [
  {
    "kind": "theory",
    "title": "Nature of the gas and the liquid controls gas solubility",
    "paragraphs": [
      "Gas solubility depends first on the intermolecular compatibility of gas and solvent. A gas that can interact strongly with a liquid is generally more soluble than a weakly interacting gas of similar size. Polar or hydrogen-bonding gases are often far more soluble in polar liquids than noble gases, although chemical reaction with the solvent must be distinguished from mere physical dissolution.",
      "The source notebook illustrates this with qualitative orders. In water, very weakly interacting gases show low solubility, whereas gases such as ammonia are much more soluble because of strong attraction and reaction-like hydration. For hydrogen chloride, water dissolves far more gas than ethanol, and ethanol more than benzene, because solvent polarity and hydrogen-bonding ability decrease in that order."
    ],
    "bullets": [
      "Like dissolves like is a useful first guide, not an exact law.",
      "Compare gases in the same solvent at the same temperature and pressure.",
      "Chemical ionisation, as for HCl in water, lies outside the simplest Henry-law treatment."
    ],
    "sourcePages": "Page 3"
  },
  {
    "kind": "theory",
    "title": "Pressure increases the amount of gas dissolved",
    "paragraphs": [
      "A gas above a liquid exists in dynamic equilibrium with dissolved gas. Increasing the external gas pressure increases the number of gas molecules striking the liquid surface per unit time. The escaping fraction at fixed temperature remains governed by the liquid state, so equilibrium shifts toward a larger dissolved amount.",
      "The source piston sketch compares two pressures and shows that a fixed percentage compression produces a larger final pressure when the initial pressure is larger. The important molecular conclusion is that the number of dissolved gas molecules increases in direct proportion to the gas partial pressure while the dilute-solution approximation remains valid.",
      "Only the partial pressure of the particular gas matters in a mixture. Total pressure can be used only after multiplying by the gas-phase mole fraction to obtain that partial pressure."
    ],
    "sourcePages": "Page 4",
    "visual": "henry"
  },
  {
    "kind": "derivation",
    "title": "Henry’s law in mole-fraction form",
    "introduction": "At constant temperature, equilibrium between a dilute dissolved gas and the gas above the solution gives a linear relation between partial pressure and dissolved mole fraction.",
    "steps": [
      "Let p be the equilibrium partial pressure of gas X and x_X its mole fraction in the liquid.",
      "For a sufficiently dilute solution, the chemical potential of dissolved X varies as ln x_X, while that of an ideal gas varies as ln p.",
      "Equating the two chemical potentials at fixed temperature gives p/x_X = constant.",
      "Define that constant as K_H for the specified gas–solvent pair and temperature."
    ],
    "result": "p_X = K_H x_X",
    "assumptions": [
      "Dilute dissolved gas.",
      "Gas phase close to ideal.",
      "No strong association, dissociation or chemical reaction in the solvent.",
      "K_H refers to a specified definition and unit convention."
    ],
    "sourcePages": "Pages 4–5",
    "visual": "henry"
  },
  {
    "kind": "theory",
    "title": "Meaning and temperature dependence of the Henry constant",
    "paragraphs": [
      "For the convention p = K_Hx, a larger K_H means a smaller solubility at a given pressure because x = p/K_H. K_H depends on the gas, the solvent and temperature. Values from different unit conventions must never be mixed.",
      "Dissolution of a gas in a liquid is usually exothermic because attractive contacts are formed and the gas loses translational freedom. Raising temperature therefore usually decreases gas solubility and increases K_H. The source notes express the temperature dependence through a van’t Hoff-type relation involving the enthalpy of solution.",
      "The practical consequences include loss of dissolved oxygen from warm water and escape of carbon dioxide from a warm aerated drink."
    ],
    "equations": [
      "ln(K₂/K₁) = (ΔH_sol/R)(1/T₁ − 1/T₂) for a consistent equilibrium-constant convention",
      "K_H increases with T when solubility decreases with T"
    ],
    "sourcePages": "Pages 5–6"
  },
  {
    "kind": "theory",
    "title": "Limitations of Henry’s law",
    "paragraphs": [
      "The linear p–x graph is most reliable at low dissolved concentration, low to moderate gas pressure and temperatures well above the condensation region of the gas. At high pressure or high solubility, gas nonideality, solvent restructuring and finite-concentration effects bend the graph.",
      "The law is not directly applicable when the gas ionises, reacts, associates or dissociates in solution. Hydrogen chloride in water, ammonia in acidic water and carbon dioxide in strongly alkaline solution require chemical-equilibrium treatment in addition to physical dissolution.",
      "A gas that is only sparingly soluble usually gives the cleanest Henry-law behaviour because the liquid remains close to the pure solvent standard state."
    ],
    "sourcePages": "Pages 5–6"
  },
  {
    "kind": "theory",
    "title": "Single-gas dissolution calculation retained from the notes",
    "paragraphs": [
      "The source calculation asks for the mass of nitrogen dissolved in a large mass of water at specified pressure and K_H. The essential bookkeeping is to write x_N2 = n_N2/(n_N2+n_water), set p_N2 = K_Hx_N2, and solve for n_N2 without prematurely neglecting it unless the problem clearly permits the dilute approximation.",
      "For large solvent amount and very small gas solubility, n_N2 is negligible compared with n_water, so x_N2 ≈ n_N2/n_water. Multiplying the resulting moles by molar mass gives dissolved mass. Solved Question 2.1 rebuilds this exact structure with altered data."
    ],
    "equations": [
      "p_N2 = K_H,N2 × n_N2/(n_N2+n_water)",
      "For n_N2 ≪ n_water: n_N2 ≈ (p_N2/K_H,N2)n_water"
    ],
    "sourcePages": "Pages 6–7"
  },
  {
    "kind": "theory",
    "title": "Dissolution from a gas mixture",
    "paragraphs": [
      "When air-like gas containing oxygen and nitrogen is above water, each gas obeys its own Henry relation using its own partial pressure. The dissolved molar ratio is therefore not the same as the gas-phase molar ratio unless the two Henry constants are equal.",
      "For gas-phase mole fractions y_O2 and y_N2 at total pressure P, p_O2 = y_O2P and p_N2 = y_N2P. Hence n_O2/n_N2 is approximately (y_O2/K_H,O2)/(y_N2/K_H,N2) for a common large solvent amount. The more soluble gas is enriched in the dissolved phase.",
      "The source then converts the dissolved amount to mass and imagines collecting all dissolved gases in a vessel at elevated temperature. Dalton’s law and the ideal-gas equation give the collection pressure. Solved Questions 2.2 and 2.3 retain these linked tasks with new numbers."
    ],
    "equations": [
      "n_O2/n_N2 ≈ (p_O2/K_H,O2)/(p_N2/K_H,N2)",
      "P_collected = (n_O2+n_N2)RT/V"
    ],
    "sourcePages": "Pages 7–8"
  },
  {
    "kind": "derivation",
    "title": "Why the recovered gas volume can be independent of dissolution pressure",
    "introduction": "The source proves a useful Henry-law result for a fixed large volume of liquid at fixed temperature.",
    "steps": [
      "For a very dilute solution, p = K_H n_gas/n_liquid.",
      "The dissolved moles are n_gas = (p/K_H)n_liquid.",
      "If the gas is released and measured at the same pressure p and temperature T, its volume is V_gas = n_gasRT/p.",
      "Substitution cancels p, leaving a volume determined by solvent amount, temperature and K_H."
    ],
    "result": "V_gas = n_liquid RT/K_H",
    "assumptions": [
      "Large excess of liquid so n_liquid is effectively constant.",
      "Dilute Henry-law region.",
      "Recovered gas measured at the same pressure used for dissolution."
    ],
    "sourcePages": "Page 8"
  },
  {
    "kind": "theory",
    "title": "Scaling examples for pressure and solvent amount",
    "paragraphs": [
      "The source uses a quick proportionality check: if pressure is multiplied by four at fixed solvent mass and temperature, the dissolved amount is multiplied by four. If solvent mass is multiplied by four at fixed pressure, the dissolved amount is also multiplied by four because the number of solvent moles in the denominator is four times larger.",
      "These proportionalities are safe only in the dilute region. They are excellent consistency checks after a detailed calculation: double pressure doubles dissolved moles, while double solvent amount doubles dissolved moles."
    ],
    "sourcePages": "Page 9"
  }
];
