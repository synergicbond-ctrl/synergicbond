export interface FormulaDetail {
  title: string;
  expression: string;
  meaning: string;
  units: string;
  derivation: string;
  shortcut: string;
  commonMistakes: string;
  pyqContext: string;
}

export const masterFormulas: Record<string, FormulaDetail[]> = {
  "atomic-structure": [
    {
      title: "Bohr Radius of Hydrogen-like Species",
      expression: "r_n = 0.529 \\times \\frac{n^2}{Z} \\text{ Å}",
      meaning: "Distance of the electron from the nucleus in the nth orbit.",
      units: "Ångström (Å)",
      derivation: "Equating electrostatic force of attraction with centrifugal force, incorporating angular momentum quantization condition (mvr = nh/2π).",
      shortcut: "r_n \\propto n^2 / Z$. For H atom ($Z=1$), $r_1 = 0.529 Å$, $r_2 = 2.116 Å$, $r_3 = 4.761 Å$.",
      commonMistakes: "Forgetting to divide by atomic number Z for multi-electron hydrogenic ions like He+ or Li2+.",
      pyqContext: "Used extensively to determine atomic dimension ratios in various excited states."
    },
    {
      title: "Velocity of Electron in Bohr Orbit",
      expression: "v = 2.188 \\times 10^6 \\times \\frac{Z}{n} \\text{ m/s}",
      meaning: "Speed of an electron revolving in the nth stationary orbit.",
      units: "Meters per second (m/s)",
      derivation: "Derived directly by substituting radius expression into angular momentum quantization equation.",
      shortcut: "v \\propto Z / n$. Velocity decreases as principal quantum number $n$ increases.",
      commonMistakes: "Multiplying factors incorrectly by powers of 10 during numerical calculation.",
      pyqContext: "Asked in context of relativistic effects for very high Z elements."
    },
    {
      title: "Total Energy of Electron",
      expression: "E_n = -13.6 \\times \\frac{Z^2}{n^2} \\text{ eV/atom}",
      meaning: "Sum of kinetic and potential energy of an electron in nth orbit.",
      units: "Electron Volts (eV)",
      derivation: "Kinetic energy equals $|E|$, Potential energy equals $2 \\times E$, Total energy $E = KE + PE = -13.6 Z^2/n^2$.",
      shortcut: "$E_n \\propto Z^2 / n^2$. Note that Potential Energy = $2 \\times E_n$ and Kinetic Energy = $-E_n$.",
      commonMistakes: "Missing the negative sign, which signifies that the electron is bound to the nucleus.",
      pyqContext: "Foundation for ionization energy and photon absorption/emission calculations."
    },
    {
      title: "de Broglie Wavelength",
      expression: "\\lambda = \\frac{h}{p} = \\frac{h}{mv} = \\frac{h}{\\sqrt{2mK}}",
      meaning: "Wavelength associated with a moving material particle (wave nature).",
      units: "Meters (m)",
      derivation: "Combining Planck’s Planck’s energy equation (E = hc/λ) and Einstein’s mass-energy equivalence (E = mc^2).",
      shortcut: "For an electron accelerated through potential V: $\\lambda = \\frac{12.27}{\\sqrt{V}} Å$.",
      commonMistakes: "Using mass of a photon instead of mass of a particle (e.g., electron, proton, alpha particle) in calculations.",
      pyqContext: "Frequent numericals on comparing wavelengths of protons vs deuterons vs electrons."
    },
    {
      title: "Heisenberg's Uncertainty Principle",
      expression: "\\Delta x \\cdot \\Delta p \\ge \\frac{h}{4\\pi} \\text{ or } \\Delta x \\cdot \\Delta v \\ge \\frac{h}{4\\pi m}",
      meaning: "Impossibility of simultaneously measuring both position and momentum of a microscopic particle.",
      units: "kg m²/s",
      derivation: "Wave packet analysis of microscopic particles.",
      shortcut: "Minimum uncertainty $\\Delta x \\cdot \\Delta v = \\frac{h}{4\\pi m}$.",
      commonMistakes: "Using $h/\\pi$ or $h/2\\pi$ instead of $h/4\\pi$ in minimum uncertainty equations.",
      pyqContext: "Conceptual evaluations differentiating macro-world mechanics from micro-world mechanics."
    },
    {
      title: "Rydberg Equation for Spectral Lines",
      expression: "\\bar{\\nu} = \\frac{1}{\\lambda} = R_H \\cdot Z^2 \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)",
      meaning: "Wavenumber/wavelength of emitted or absorbed radiation during electronic transitions.",
      units: "cm⁻¹",
      derivation: "Difference in energy levels divided by Planck's constant ($E_2 - E_1 = hc/\\lambda$).",
      shortcut: "$R_H \\approx 109,677 \\text{ cm}^{-1}$ or $1.097 \\times 10^7 \\text{ m}^{-1}$. For H atom, $\\bar{\\nu} = R_H (1/n_1^2 - 1/n_2^2)$.",
      commonMistakes: "Forgetting to square the principal quantum numbers ($n_1^2$ and $n_2^2$) in the denominator.",
      pyqContext: "Calculation of maximum/minimum wavelengths in Lyman, Balmer, Paschen, Brackett, and Pfund series."
    }
  ],

  "mole-concept": [
    {
      title: "Mole–Mass–Number Relationship",
      expression: "n = \\frac{m}{M} = \\frac{N}{N_A}",
      meaning: "Moles = mass ÷ molar mass = particles ÷ Avogadro's number.",
      units: "mol",
      derivation: "Avogadro's number defines one mole as 6.022 × 10²³ entities.",
      shortcut: "At STP: 1 mol of any ideal gas = 22.4 L.",
      commonMistakes: "Using 22.4 L at non-STP conditions.",
      pyqContext: "Mole ratio calculations in stoichiometry."
    },
    {
      title: "Molarity",
      expression: "M = \\frac{n_{\\text{solute}}}{V_{\\text{solution (L)}}}",
      meaning: "Moles of solute per litre of solution.",
      units: "mol/L",
      derivation: "Direct definition of concentration.",
      shortcut: "Dilution: M₁V₁ = M₂V₂.",
      commonMistakes: "Dividing by volume of solvent instead of solution.",
      pyqContext: "Preparation and dilution of standard solutions."
    }
  ],

  "chemical-equilibrium": [
    {
      title: "Equilibrium Constant Kc",
      expression: "K_c = \\frac{[C]^c[D]^d}{[A]^a[B]^b}",
      meaning: "Ratio of product to reactant concentrations at equilibrium.",
      units: "Dimensionless (concentration ratio)",
      derivation: "Law of mass action applied at equilibrium.",
      shortcut: "K_p = K_c(RT)^{\\Delta n} where Δn = moles gaseous products − reactants.",
      commonMistakes: "Including pure solids and liquids in the expression.",
      pyqContext: "Predicting reaction direction from Q vs K."
    },
    {
      title: "pH and pOH",
      expression: "\\text{pH} = -\\log[H^+]; \\quad \\text{pH} + \\text{pOH} = 14 \\text{ (at 25°C)}",
      meaning: "Logarithmic measure of hydrogen ion concentration.",
      units: "Dimensionless",
      derivation: "Kw = [H⁺][OH⁻] = 10⁻¹⁴ at 25°C.",
      shortcut: "Strong acid: pH = −log C. Weak acid: pH = ½(pKa − log C).",
      commonMistakes: "pH + pOH = 14 only at 25°C, not at other temperatures.",
      pyqContext: "pH calculations of buffers, weak acids, salt hydrolysis."
    },
    {
      title: "Henderson–Hasselbalch Equation",
      expression: "\\text{pH} = \\text{p}K_a + \\log\\frac{[\\text{Salt}]}{[\\text{Acid}]}",
      meaning: "pH of a buffer solution.",
      units: "Dimensionless",
      derivation: "Derived from Ka expression for weak acid equilibrium.",
      shortcut: "At half-equivalence point: pH = pKa.",
      commonMistakes: "Inverting the salt/acid ratio.",
      pyqContext: "Buffer pH problems and titration curves."
    }
  ],

  "thermodynamics": [
    {
      title: "First Law of Thermodynamics",
      expression: "\\Delta U = q + w; \\quad w = -P_{\\text{ext}}\\Delta V",
      meaning: "Change in internal energy = heat added + work done on system.",
      units: "J or kJ",
      derivation: "Conservation of energy applied to thermodynamic systems.",
      shortcut: "At const. V: ΔU = qᵥ. At const. P: ΔH = qₚ.",
      commonMistakes: "Sign: work done ON system is +ve; done BY system is −ve.",
      pyqContext: "Work in isothermal reversible expansion of ideal gas."
    },
    {
      title: "Gibbs Free Energy",
      expression: "\\Delta G = \\Delta H - T\\Delta S; \\quad \\Delta G^\\circ = -RT\\ln K",
      meaning: "Criterion for spontaneity; links thermodynamics to equilibrium.",
      units: "kJ/mol",
      derivation: "Combined first and second laws at constant T and P.",
      shortcut: "ΔG < 0: spontaneous; > 0: non-spontaneous; = 0: equilibrium.",
      commonMistakes: "Forgetting to convert T to Kelvin.",
      pyqContext: "Spontaneity predictions and equilibrium constant from ΔG°."
    }
  ],

  "electrochemistry": [
    {
      title: "Nernst Equation",
      expression: "E = E^\\circ - \\frac{0.0592}{n}\\log Q \\text{ (at 298 K)}",
      meaning: "Cell potential at non-standard concentrations.",
      units: "Volts (V)",
      derivation: "ΔG = ΔG° + RT ln Q, combined with ΔG = −nFE.",
      shortcut: "At equilibrium: E = 0, so log K = nE°/0.0592.",
      commonMistakes: "Using ln instead of log₁₀ with the 0.0592 factor.",
      pyqContext: "Concentration cells and equilibrium constant from cell potential."
    },
    {
      title: "Faraday's First Law",
      expression: "m = \\frac{I \\cdot t \\cdot M}{n \\cdot F}",
      meaning: "Mass deposited/dissolved in electrolysis.",
      units: "grams",
      derivation: "Charge = current × time; 1 mole of electrons = 96500 C.",
      shortcut: "1 F = 96500 C deposits 1 equivalent weight of substance.",
      commonMistakes: "Using molar mass M instead of equivalent mass (M/n).",
      pyqContext: "Electrolysis numericals and electroplating calculations."
    }
  ],

  "chemical-kinetics": [
    {
      title: "First Order Integrated Rate Law",
      expression: "k = \\frac{2.303}{t}\\log\\frac{[A]_0}{[A]_t}; \\quad t_{1/2} = \\frac{0.693}{k}",
      meaning: "Rate constant and half-life for first order reactions.",
      units: "s⁻¹",
      derivation: "Integration of −d[A]/dt = k[A] from t=0 to t.",
      shortcut: "t₁/₂ is constant and independent of initial concentration.",
      commonMistakes: "Using natural log (ln) instead of log₁₀ with the 2.303 factor.",
      pyqContext: "Radioactive decay, hydrolysis, decomposition reactions."
    },
    {
      title: "Arrhenius Equation",
      expression: "\\ln\\frac{k_2}{k_1} = \\frac{E_a}{R}\\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right)",
      meaning: "Temperature dependence of rate constant.",
      units: "Ea in J/mol, k in s⁻¹",
      derivation: "k = Ae^(−Ea/RT); taking ratio at two temperatures.",
      shortcut: "~10°C rise ≈ doubles rate for Ea ≈ 50 kJ/mol.",
      commonMistakes: "Not converting Ea to J when R = 8.314 J/mol·K.",
      pyqContext: "Activation energy from rate constants at two temperatures."
    }
  ],

  "solutions": [
    {
      title: "Boiling Point Elevation",
      expression: "\\Delta T_b = K_b \\cdot m \\cdot i",
      meaning: "Rise in boiling point due to non-volatile solute.",
      units: "K",
      derivation: "Colligative property proportional to solute mole fraction.",
      shortcut: "Kb(water) = 0.52 K·kg/mol. Multiply by i for electrolytes.",
      commonMistakes: "Forgetting van't Hoff factor i for ionic solutes.",
      pyqContext: "Molar mass determination by ebullioscopy."
    },
    {
      title: "Osmotic Pressure",
      expression: "\\pi = iCRT",
      meaning: "Pressure required to stop osmosis through semi-permeable membrane.",
      units: "atm or Pa",
      derivation: "Analogous to ideal gas law for dilute solutions.",
      shortcut: "Use R = 0.0821 L·atm/mol·K for π in atm.",
      commonMistakes: "Using wrong R value or omitting i for electrolytes.",
      pyqContext: "Isotonic solutions, RBC osmosis, molar mass by osmometry."
    }
  ]
};
