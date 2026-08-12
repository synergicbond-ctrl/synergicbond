import React from "react";

type EnrichItem = {
  title: string;
  body: string;
  connection?: string;
};

const partEnrichment: Record<number, { heading: string; items: EnrichItem[] }> = {
  1: {
    heading: "System and Boundary — Extended Connections",
    items: [
      {
        title: "Biological cells as open thermodynamic systems",
        body: "A living cell continuously exchanges both matter (nutrients, waste) and energy (ATP, heat) with its surroundings. It operates far from thermodynamic equilibrium and maintains order through sustained energy input — a classic open system in a steady state.",
        connection: "Connects to: non-equilibrium thermodynamics, Prigogine's dissipative structures.",
      },
      {
        title: "Universe as the ultimate isolated system",
        body: "The observable universe is the largest isolated system known. Its total energy and total entropy are constants with respect to any internal process. All spontaneous processes inside the universe increase its total entropy.",
        connection: "Connects to: cosmological arrow of time, heat death of the universe.",
      },
      {
        title: "Practical adiabatic boundary: the Dewar flask",
        body: "A Dewar (thermos) uses evacuated double walls to minimise conduction and convection, and silvered surfaces to minimise radiation. No boundary is perfectly adiabatic, but modern calorimeters achieve heat leaks below 0.01 J h⁻¹.",
        connection: "Connects to: calorimetry, Part 11.",
      },
    ],
  },
  2: {
    heading: "State Functions and Properties — Deeper Insights",
    items: [
      {
        title: "Why path functions cannot appear in equilibrium thermodynamics",
        body: "Equilibrium states are described by state functions only. Path functions (q, w) are defined only for a process, not a state. Thermodynamics tables list U, H, S, G — never accumulated heat or work.",
        connection: "Connects to: First Law, Second Law state-function definitions.",
      },
      {
        title: "Molar volume as a bridge between extensive and intensive",
        body: "Volume V is extensive. Molar volume Vm = V/n is intensive. This ratio operation converts any extensive property to an intensive one. The ideal-gas law PVm = RT is entirely in intensive variables.",
        connection: "Connects to: equations of state, Part 3.",
      },
      {
        title: "Internal energy of a van der Waals gas",
        body: "For a real gas obeying (P + a/Vm²)(Vm − b) = RT, (∂U/∂V)_T = a/Vm². The internal pressure a/Vm² represents attractive intermolecular forces. For an ideal gas, a = 0 and (∂U/∂V)_T = 0.",
        connection: "Connects to: Joule expansion, Part 6.",
      },
    ],
  },
  3: {
    heading: "Thermodynamic Processes — Extended Applications",
    items: [
      {
        title: "Reversible work is the theoretical maximum and minimum",
        body: "For expansion: |w_rev| > |w_irrev| — a reversible engine does the most work. For compression: |w_rev| < |w_irrev| — a reversible compressor requires the least work. Irreversibility always moves toward the unfavourable direction.",
        connection: "Connects to: second law, Carnot efficiency, Part 14–15.",
      },
      {
        title: "Adiabatic processes in atmospheric science",
        body: "Rising air in the troposphere expands adiabatically and cools at the dry adiabatic lapse rate (≈9.8 K km⁻¹). When it cools below the dew point, condensation releases latent heat, reducing the rate to the saturated lapse rate (≈5–6 K km⁻¹).",
        connection: "Connects to: Cp, Cv, adiabatic index γ.",
      },
      {
        title: "Free expansion: the purest test of the ideal-gas model",
        body: "In Joule's free expansion, a gas expands into a vacuum (w = 0, q = 0, ΔU = 0). For a real gas, ΔT ≠ 0 because intermolecular potential energy changes. For an ideal gas, ΔT = 0 exactly.",
        connection: "Connects to: Joule coefficient, Joule–Thomson, Part 25.",
      },
    ],
  },
  4: {
    heading: "Zeroth Law and Equilibrium — Wider Context",
    items: [
      {
        title: "Empirical temperature scales and the thermodynamic scale",
        body: "The Celsius, Fahrenheit, Rankine, and ideal-gas scales are all empirical. Kelvin's absolute thermodynamic scale, defined via Carnot efficiency η = 1 − T_c/T_h, is independent of working substance. The 2019 SI redefinition fixed k_B = 1.380649 × 10⁻²³ J K⁻¹, making T a quantity defined through k_B.",
        connection: "Connects to: Carnot cycle, Part 14.",
      },
      {
        title: "Phase equilibrium as an example of thermal equilibrium",
        body: "At the melting point, solid and liquid coexist at the same temperature and pressure. This is a special case of thermal and mechanical equilibrium between two phases — an application of the Zeroth Law extended to phase boundaries.",
        connection: "Connects to: Clapeyron equation, Part 30.",
      },
    ],
  },
  5: {
    heading: "Mathematical Background — Thermodynamic Applications",
    items: [
      {
        title: "Why the cyclic relation has a minus sign",
        body: "For functions f(x,y,z) = 0, the cyclic identity (∂x/∂y)_z · (∂y/∂z)_x · (∂z/∂x)_y = −1 is counterintuitive. The minus sign arises because each partial derivative is taken holding a different variable constant. It appears repeatedly in Maxwell relations and in (∂Cp/∂P)_T.",
        connection: "Connects to: Maxwell relations, Part 21 and 25.",
      },
      {
        title: "Legendre transform as the tool for changing natural variables",
        body: "H = U + PV replaces V with P as the natural variable. G = U + PV − TS replaces both V and S with P and T. Each Legendre transform repackages the same physics with a more convenient independent variable set for laboratory conditions.",
        connection: "Connects to: fundamental equations, Part 25.",
      },
    ],
  },
  6: {
    heading: "First Law — Deeper Connections",
    items: [
      {
        title: "Einstein's E = mc² as the extended First Law",
        body: "The First Law ΔE = q + w is a special case of the relativistic energy conservation E = mc². In chemical reactions, the mass equivalent of ΔU is negligible (~10⁻¹² g per kJ), but in nuclear reactions it is measurable.",
        connection: "Connects to: nuclear thermochemistry.",
      },
      {
        title: "Sign convention comparison: physics vs chemistry",
        body: "Physics convention: w > 0 for work done BY the system (w = +PΔV for expansion). Chemistry convention: w > 0 for work done ON the system (w = −PΔV for expansion, w = −P_ext ΔV). Always state which convention is used.",
        connection: "Connects to: all subsequent energy calculations.",
      },
    ],
  },
  7: {
    heading: "Work and Enthalpy — Extended Insights",
    items: [
      {
        title: "Enthalpy as 'heat content' — a historical misconception",
        body: "H is sometimes called 'heat content' because q_p = ΔH. However, H is a state function while heat is a path function. The equality holds only at constant pressure. Calling H 'heat content' is misleading in general.",
        connection: "Connects to: First Law, state functions.",
      },
      {
        title: "Flow work and enthalpy in open systems",
        body: "In a flow process (turbine, compressor, nozzle), the 'flow work' done to push fluid across the boundary is PV per mole. The total energy carried by flowing fluid is U + PV = H. This is why enthalpy is the natural energy variable for open-system steady-state devices.",
        connection: "Connects to: chemical engineering thermodynamics.",
      },
    ],
  },
  8: {
    heading: "Hess's Law and ΔH–ΔU — Practical Applications",
    items: [
      {
        title: "Measuring ΔH_comb precisely by bomb calorimetry",
        body: "A bomb calorimeter measures ΔU_comb at constant V. Converting to ΔH requires ΔH = ΔU + Δn_g RT. For benzoic acid combustion (C₇H₆O₂ + 15/2 O₂ → 7CO₂ + 3H₂O), Δn_g = 7 − 15/2 = −1/2, so ΔH = ΔU − ½RT.",
        connection: "Connects to: calorimetry, Part 11.",
      },
      {
        title: "Enthalpy of dissolution from Hess cycles",
        body: "ΔH_sol(NaCl) can be estimated from the Born–Haber cycle: ΔH_lattice + ΔH_hydration(Na⁺) + ΔH_hydration(Cl⁻). The small positive ΔH_sol(NaCl) ≈ +3.9 kJ mol⁻¹ reflects near-cancellation of large lattice and hydration enthalpies.",
        connection: "Connects to: Born–Haber cycle, Part 9.",
      },
    ],
  },
  9: {
    heading: "Bond Enthalpy and Ionic Lattice — Extended Understanding",
    items: [
      {
        title: "Why mean bond enthalpies are averages",
        body: "The C–H bond enthalpy in CH₄ (413 kJ mol⁻¹) differs from that in C₂H₆ or benzene because the electronic environment changes with molecular structure. Tabulated mean bond enthalpies average over many compounds; they give estimates, not exact ΔH values.",
        connection: "Connects to: molecular orbital theory, chemical bonding.",
      },
      {
        title: "Madelung constant and the Kapustinskii equation",
        body: "The lattice enthalpy magnitude is approximately U_L ≈ A M z⁺z⁻ e²/(4πε₀r₀), where A is the Avogadro number, M is the Madelung constant (1.748 for NaCl), and r₀ is the interionic distance. Kapustinskii simplified this as U_L ≈ 1.2 × 10⁵ ν |z⁺z⁻| / (r⁺ + r⁻) kJ mol⁻¹.",
        connection: "Connects to: ionic bonding, crystal structure.",
      },
    ],
  },
  10: {
    heading: "Heat Capacities and Kirchhoff — Deeper Analysis",
    items: [
      {
        title: "Ratio γ = Cp/Cv and speed of sound",
        body: "The speed of sound in an ideal gas is c = √(γRT/M). For air (γ ≈ 1.4, M = 29 g mol⁻¹) at 298 K: c = √(1.4 × 8.314 × 298/0.029) = 346 m s⁻¹. Adiabatic compressibility, not isothermal, governs sound propagation.",
        connection: "Connects to: adiabatic processes, Part 3.",
      },
      {
        title: "Equipartition theorem and Cv for polyatomic gases",
        body: "Each quadratic energy mode contributes ½R to Cv,m. Monatomic: 3 translational → Cv,m = 3/2 R. Diatomic: 3 trans + 2 rot → 5/2 R. Polyatomic nonlinear: 3 trans + 3 rot → 3R (minimum, vibrational modes frozen at room T). At high T, vibrational modes activate, raising Cv,m.",
        connection: "Connects to: statistical mechanics, equipartition.",
      },
    ],
  },
  11: {
    heading: "Calorimetry — Experimental Insights",
    items: [
      {
        title: "Adiabatic vs isothermal calorimetry",
        body: "Adiabatic calorimeters (e.g., bomb calorimeters) measure temperature rise; isothermal calorimeters measure the heat needed to maintain constant temperature. Isothermal titration calorimetry (ITC) measures binding enthalpies in biochemical interactions.",
        connection: "Connects to: Hess's law, heat capacities.",
      },
      {
        title: "Accuracy limits in calorimetry",
        body: "Heat leaks, stirring work, and wire ignition energy must be corrected. Modern bomb calorimeters achieve uncertainties of ±0.01% in ΔU_comb. The heat of combustion of benzoic acid (−3226.7 kJ mol⁻¹) is the international calorimetric standard.",
        connection: "Connects to: thermochemical tables, Part 12.",
      },
    ],
  },
  12: {
    heading: "Standard Enthalpy Changes — Reference Connections",
    items: [
      {
        title: "Why elements in standard states have ΔH°_f = 0",
        body: "The convention assigns zero formation enthalpy to the most stable allotrope of each element at 298 K and 1 bar. Diamond has ΔH°_f = +1.9 kJ mol⁻¹ relative to graphite. This is a convention, not a physical claim that elements have zero energy.",
        connection: "Connects to: standard Gibbs energy, Part 24.",
      },
      {
        title: "Combustion enthalpies and food energy",
        body: "Calorific values: carbohydrates ≈ 17 kJ g⁻¹, fats ≈ 37 kJ g⁻¹, proteins ≈ 17 kJ g⁻¹. These are ΔH_comb values, available from thermochemical tables. Body metabolism is less efficient than complete combustion due to entropy production in biochemical pathways.",
        connection: "Connects to: Hess's law, calorimetry.",
      },
    ],
  },
  13: {
    heading: "Entropy and Disorder — Conceptual Deepening",
    items: [
      {
        title: "Entropy is not simply 'disorder'",
        body: "The common description of entropy as 'disorder' is helpful but imprecise. Formally, entropy measures the logarithm of the number of accessible microstates. A crystal of ice has lower S than liquid water — but ice is not always 'more ordered' in an everyday sense. The more precise description is 'dispersal of energy over available microstates'.",
        connection: "Connects to: Third Law, statistical mechanics.",
      },
      {
        title: "Maxwell's demon and the information-entropy connection",
        body: "Maxwell imagined a tiny demon controlling a trapdoor between two gas chambers, allowing fast molecules to pass one way and slow molecules the other — apparently violating the Second Law. Resolution: the demon must erase its memory, which costs at least k_B T ln 2 of entropy per bit (Landauer's principle). Information is physical.",
        connection: "Connects to: Second Law, statistical mechanics.",
      },
    ],
  },
  14: {
    heading: "Carnot Cycle — Extended Analysis",
    items: [
      {
        title: "Why no real engine achieves Carnot efficiency",
        body: "Real engines suffer from: (1) friction between moving parts generating heat; (2) heat leaks across finite temperature gradients; (3) combustion producing entropy; (4) finite-time operation requiring finite temperature differences. Efficiency is always η_real < η_Carnot = 1 − T_c/T_h.",
        connection: "Connects to: Second Law, irreversibility.",
      },
      {
        title: "Refrigerator coefficient of performance",
        body: "A Carnot refrigerator has COP = Q_c/W = T_c/(T_h − T_c). For a domestic refrigerator with T_c = 5°C = 278 K and T_h = 25°C = 298 K: COP_max = 278/20 = 13.9. Real refrigerators achieve COP ≈ 2–4.",
        connection: "Connects to: heat pumps, Clausius statement.",
      },
    ],
  },
  15: {
    heading: "Second Law Statements — Unified View",
    items: [
      {
        title: "Entropy and the arrow of time",
        body: "The Second Law's ΔS_univ ≥ 0 defines the thermodynamic arrow of time: processes proceed in the direction of increasing universal entropy. Microscopic physical laws are time-reversal symmetric; irreversibility emerges from the astronomically large number of degrees of freedom in macroscopic systems.",
        connection: "Connects to: statistical mechanics, cosmology.",
      },
      {
        title: "Entropy production in irreversible processes",
        body: "The entropy production σ = dS_total/dt ≥ 0 for any real process. In an irreversible heat transfer ΔQ from T_h to T_c < T_h: σ = ΔQ(1/T_c − 1/T_h) > 0. Zero entropy production → reversible limit.",
        connection: "Connects to: Clausius inequality, Part 16.",
      },
    ],
  },
  16: {
    heading: "Clausius Inequality — Mathematical Foundations",
    items: [
      {
        title: "Integration of Clausius inequality: defining entropy",
        body: "The Clausius inequality ∮ δq/T ≤ 0 shows that δq_rev/T is an exact differential. By defining dS = δq_rev/T, we construct a state function. For any irreversible process between states 1 and 2: ΔS_system > ∫δq_irrev/T, so the entropy produced exceeds the entropy transferred.",
        connection: "Connects to: entropy, Second Law, state functions.",
      },
    ],
  },
  17: [
    {
      heading: "Entropy Changes — Practical Examples",
      items: [
        {
          title: "Trouton's rule",
          body: "For many non-associating liquids, ΔS_vap ≈ 85 J mol⁻¹ K⁻¹ at the normal boiling point (Trouton's rule). This implies ΔH_vap ≈ 85 T_b. Water deviates significantly (ΔS_vap ≈ 109 J mol⁻¹ K⁻¹) because of extensive hydrogen bonding in the liquid.",
          connection: "Connects to: Clausius–Clapeyron, Part 30.",
        },
      ],
    },
  ][0],
  18: {
    heading: "Entropy of Mixing and Phase Transitions",
    items: [
      {
        title: "Why entropy of mixing drives miscibility",
        body: "For ideal gases or ideal solutions, ΔG_mix = ΔH_mix − TΔS_mix = 0 − TΔS_mix < 0 always (since ΔH_mix = 0 for ideal mixing). The purely entropic driving force makes all ideal mixtures spontaneously miscible at any composition.",
        connection: "Connects to: Gibbs energy of mixing, Part 28.",
      },
      {
        title: "Entropy of a first-order phase transition",
        body: "At a first-order transition (melting, boiling), the entropy jumps discontinuously by ΔS_tr = ΔH_tr/T_tr. For water freezing at 273 K: ΔS_fus = 6010/273 = 22.0 J mol⁻¹ K⁻¹. The slope of the G vs T plot changes discontinuously by this amount.",
        connection: "Connects to: Gibbs energy, Clapeyron equation.",
      },
    ],
  },
  19: {
    heading: "Third Law — Historical and Practical Significance",
    items: [
      {
        title: "Historical development of the Third Law",
        body: "Nernst (1906) postulated that ΔS → 0 as T → 0 from measurements of galvanic cells at low temperatures. Planck (1911) strengthened this to S → 0 for perfect crystals. The Third Law explains why absolute entropies can be assigned — unlike enthalpy, where only differences ΔH can be measured.",
        connection: "Connects to: Third Law entropy, Part 20.",
      },
      {
        title: "Residual entropy in practice",
        body: "Carbon monoxide (CO) has residual entropy S₀ ≈ R ln 2 = 5.76 J mol⁻¹ K⁻¹ because CO and OC orientations are nearly equal in energy in the crystal. Calorimetric S°_m(CO) ≈ 193.5 J mol⁻¹K⁻¹ vs spectroscopic 197.7 J mol⁻¹K⁻¹ — the 4.2 J mol⁻¹K⁻¹ difference is the residual entropy.",
        connection: "Connects to: microstates, Boltzmann equation.",
      },
    ],
  },
  20: {
    heading: "Absolute Entropy — Measurement and Application",
    items: [
      {
        title: "Calorimetric vs spectroscopic entropy",
        body: "Calorimetric entropy integrates Cp/T from 0 K to 298 K. Spectroscopic entropy calculates S from molecular partition functions (statistical mechanics). Agreement within ≈0.1 J mol⁻¹K⁻¹ validates both approaches. Discrepancies signal residual entropy.",
        connection: "Connects to: Third Law, statistical mechanics.",
      },
      {
        title: "Standard molar entropies in biochemistry",
        body: "Hydrolysis of ATP at pH 7 has a large negative ΔG° (≈−30 kJ mol⁻¹) partly because the entropy of the products (ADP + Pᵢ + H⁺ + H₂O rearrangement) exceeds that of ATP. Thermodynamics of biological reactions uses the same formalism with biochemical standard states.",
        connection: "Connects to: Gibbs energy, equilibrium.",
      },
    ],
  },
  21: {
    heading: "Free Energy — Experimental Connections",
    items: [
      {
        title: "Electrochemical cells and ΔG",
        body: "For an electrochemical cell: ΔG = −nFE_cell where F = 96485 C mol⁻¹ (Faraday constant) and E_cell is the cell potential. Maximum electrical work delivered reversibly equals −ΔG. This connects thermodynamics directly to measurable voltages.",
        connection: "Connects to: Nernst equation, electrochemistry.",
      },
      {
        title: "Rubber elasticity as a Helmholtz energy example",
        body: "A stretched rubber band at constant T and V has ΔA > 0 (work done on rubber). When released isothermally, it returns work. The restoring force is entropy-driven: stretching reduces conformational microstates. Helmholtz energy A = U − TS is the appropriate free energy for constant-V elastic work.",
        connection: "Connects to: Helmholtz energy, Parts 24–25.",
      },
    ],
  },
  22: {
    heading: "Maxwell Relations — Practical Consequences",
    items: [
      {
        title: "(∂P/∂T)_V = (∂S/∂V)_T — the pressure coefficient",
        body: "This Maxwell relation from dA connects the pressure coefficient (measurable) to the entropy change with volume. For ideal gas: (∂P/∂T)_V = nR/V > 0. For a real gas, this allows calculation of entropy from P–V–T data without calorimetry.",
        connection: "Connects to: equations of state, internal pressure.",
      },
      {
        title: "Joule–Thomson as a Maxwell relation application",
        body: "Using the Maxwell relation (∂H/∂P)_T = V − T(∂V/∂T)_P and μ_JT = (∂T/∂P)_H, the Joule–Thomson coefficient can be computed from volumetric data alone. For van der Waals gas: μ_JT = (2a/RT − b)/Cp,m at moderate pressures.",
        connection: "Connects to: Joule–Thomson, Part 25.",
      },
    ],
  },
  23: {
    heading: "Third-Law Numerics and Microstate Counting",
    items: [
      {
        title: "Consistency check for Third-Law entropy from spectroscopy",
        body: "For the five-step calculation yielding S°_m(350 K) = 202.14 J mol⁻¹K⁻¹, the equivalent spectroscopic value would come from molecular partition functions. Agreement between calorimetric and spectroscopic entropies within ±0.5 J mol⁻¹K⁻¹ confirms the Third Law.",
        connection: "Connects to: statistical mechanics, partition functions.",
      },
    ],
  },
  24: {
    heading: "Helmholtz and Gibbs Energy — Applications Beyond Chemistry",
    items: [
      {
        title: "Gibbs energy and biological membranes",
        body: "Ion transport across a membrane against a concentration gradient (e.g., Na⁺/K⁺ pump) requires ΔG > 0 input. The pump couples this non-spontaneous step to ATP hydrolysis (ΔG_ATP < 0) so that the combined ΔG < 0. Gibbs energy is the universal criterion for all constant-T, P processes.",
        connection: "Connects to: chemical potential, equilibrium.",
      },
    ],
  },
  26: {
    heading: "G vs T and G vs P — Phase Equilibria Consequences",
    items: [
      {
        title: "Phase stability from G–T diagrams: allotropes",
        body: "Graphite and diamond are both forms of carbon. At 25°C and 1 bar, G_m(graphite) < G_m(diamond), so graphite is thermodynamically stable. At very high pressures, the G vs P line for diamond (with larger molar volume decrease) crosses that of graphite, making diamond stable — the basis of industrial diamond synthesis.",
        connection: "Connects to: Clapeyron equation, phase diagrams.",
      },
    ],
  },
  27: {
    heading: "Chemical Potential — Physical Intuition",
    items: [
      {
        title: "Chemical potential as the driving force for transport",
        body: "Matter spontaneously flows from high chemical potential to low chemical potential, exactly as heat flows from high to low temperature. Osmosis, diffusion, phase changes, and chemical reactions all proceed in the direction of decreasing total chemical potential. μ is the analogue of temperature for matter.",
        connection: "Connects to: osmotic pressure, phase equilibrium.",
      },
    ],
  },
  28: {
    heading: "Ideal Mixing and Real Solutions",
    items: [
      {
        title: "Deviations from Raoult's law: Henry's law",
        body: "At high dilution (x_solute → 0), Raoult's law fails for the solute; instead, Henry's law holds: P_solute = k_H x_solute where k_H (Henry's constant) differs from P*_solute. The reason is that at infinite dilution, each solute molecule is surrounded entirely by solvent molecules — a very different environment from pure solute.",
        connection: "Connects to: activity coefficients, non-ideal solutions.",
      },
    ],
  },
  29: {
    heading: "Equilibrium Constants — Broader Connections",
    items: [
      {
        title: "Simultaneous equilibria and coupled reactions",
        body: "In biochemistry, two reactions can be coupled so that an unfavourable reaction (K < 1) is driven by a favourable one (K ≫ 1). The overall K = K₁ × K₂. If K₂ is large enough that K_overall > 1, the combined process is spontaneous. This is how ATP hydrolysis drives biosynthesis.",
        connection: "Connects to: ΔrG° = −RT ln K, chemical potential.",
      },
    ],
  },
  30: {
    heading: "van't Hoff and Phase Equilibrium — Final Connections",
    items: [
      {
        title: "Le Chatelier's principle quantified by van't Hoff",
        body: "Le Chatelier (qualitative): raising T shifts equilibrium to absorb heat (endothermic direction). van't Hoff (quantitative): d ln K/dT = ΔrH°/(RT²). For ΔrH° > 0 (endothermic), d ln K/dT > 0 → K increases with T. For ΔrH° < 0 (exothermic), K decreases with T. This allows calculation of K at any temperature if K₁, T₁ and ΔrH° are known.",
        connection: "Connects to: equilibrium, Gibbs energy.",
      },
      {
        title: "Triple point as the only fixed equilibrium T and P",
        body: "At the triple point, all three coexistence lines of the phase diagram intersect. For water, T_tp = 273.16 K and P_tp = 611.7 Pa. The triple point is used to define the Kelvin in the pre-2019 SI. Unlike the melting point (which shifts with pressure), the triple point is invariant.",
        connection: "Connects to: Clapeyron equation, phase diagrams.",
      },
    ],
  },
};

type EnrichData = { heading: string; items: EnrichItem[] };

function EnrichmentCard({ item }: { item: EnrichItem }) {
  return (
    <article className="rounded-2xl border border-sky-400/20 bg-sky-400/[0.04] p-5">
      <h3 className="font-black text-sky-200">{item.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{item.body}</p>
      {item.connection ? (
        <p className="mt-3 text-xs text-slate-500">
          <span className="font-black text-sky-400/70">Connects → </span>
          {item.connection}
        </p>
      ) : null}
    </article>
  );
}

export default function ThermodynamicsIntegratedEnrichment({ part }: { part: number }) {
  const data: EnrichData | undefined = partEnrichment[part];
  if (!data) return null;

  return (
    <section className="bg-[#020617] pb-14 pt-2">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="rounded-[2rem] border border-sky-400/20 bg-slate-950/80 p-5 shadow-2xl shadow-black/20 md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-sky-300">
            Integrated Enrichment
          </p>
          <h2 className="mt-2 text-2xl font-black tracking-tight text-white md:text-3xl">
            {data.heading}
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
            Extended connections, applications and deeper insights for advanced understanding.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {data.items.map((item, i) => (
              <EnrichmentCard key={i} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
