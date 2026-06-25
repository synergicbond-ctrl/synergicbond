export const physical = [
  {
    id: "atomic-structure",
    title: "Atomic Structure",
    category: "physical",
    difficulty: 4,
    estimatedHours: 6,
    exams: ["NEET", "JEE MAIN", "JEE ADVANCED"],
    pyqTags: ["Bohr Model", "De Broglie Wavelength", "Heisenberg Uncertainty", "Quantum Numbers"],
    concepts: [
      {
        id: "subatomic-particles",
        title: "Subatomic Particles & Discovery",
        description: "Fundamental particles (electrons, protons, neutrons), their charge-to-mass ratios, and Millikan's oil drop experiment.",
        animations: [
          "Electron charge quantification via e/m ratio.",
          "Quantized nature of electric charge verified."
        ]
      },
      {
        id: "bohr-model",
        title: "Bohr's Model for Hydrogen Atom",
        description: "Postulates of Bohr model, stationary orbits, radius, velocity, and energy derivations for hydrogen-like species.",
        animations: [
          "Electron jumping between quantized orbits emitting/absorbing photons.",
          "Stationary non-radiating orbit visualization."
        ]
      },
      {
        id: "quantum-mechanical",
        title: "Quantum Mechanical Model",
        description: "Dual nature of matter (de Broglie), Heisenberg's uncertainty principle, Schrödinger wave equation, and quantum numbers.",
        animations: [
          "Wave-particle duality interference pattern.",
          "Probability density clouds (orbitals) mapping."
        ]
      }
    ]
  }
];

export const masterFormulas: Record<string, any[]> = {
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
      derivation: "Combining Planck’s energy equation (E = hc/λ) and Einstein’s mass-energy equivalence (E = mc^2).",
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
  ]
};

export const masterReactions: any[] = [];

export const highYieldNotes: any[] = [
  {
    chapterId: "atomic-structure",
    title: "Bohr Model Limitations",
    content: "Bohr's model applies strictly to single-electron species (Hydrogen, He+, Li2+, Be3+). It fails to explain multi-electron spectra (Zeeman and Stark effects), and contradicts Heisenberg's Uncertainty Principle by assuming fixed, well-defined circular orbits."
  },
  {
    chapterId: "atomic-structure",
    title: "Quantum Number Constraints",
    content: "Principal quantum number (n) = 1, 2, 3... Azimuthal (l) = 0 to (n-1). Magnetic (m) = -l to +l. Spin (s) = +1/2, -1/2. Total orbitals in shell = n². Maximum electrons in shell = 2n². Number of subshells in nth shell = n."
  },
  {
    chapterId: "atomic-structure",
    title: "Nodes Calculation Formulas",
    content: "Radial nodes = n - l - 1. Angular nodes = l. Total nodes = n - 1. A node is a region of zero probability of finding an electron."
  }
];
