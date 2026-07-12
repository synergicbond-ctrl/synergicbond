import React from "react";

type Derivation = {
  title: string;
  intro: string;
  steps: string[];
  result: string;
  conditions: string;
};

type WorkedExample = { title: string; question: string; solution: string };

type PartData = {
  title: string;
  derivations: Derivation[];
  examples: WorkedExample[];
  graph: [string, string, string, string, string];
};

const DATA: Record<number, PartData> = {
  "1": {
    "title": "Thermodynamic system, boundary and energy accounting",
    "derivations": [
      {
        "title": "Energy conservation for system plus surroundings",
        "intro": "Choose the system and surroundings together as an isolated universe. Energy may cross the system boundary, but it cannot cross the outer universe boundary.",
        "steps": [
          "ΔEuniv = ΔEsys + ΔEsurr",
          "For an isolated universe, Quniv = 0 and Wuniv = 0.",
          "Therefore ΔEuniv = 0.",
          "Hence ΔEsys = −ΔEsurr."
        ],
        "result": "Every energy gain of the system is an equal energy loss of the surroundings, and vice versa.",
        "conditions": "The outer composite must include every interacting body and field."
      },
      {
        "title": "Closed, open and isolated balance from boundary terms",
        "intro": "Classify a system by asking which extensive quantities cross the boundary.",
        "steps": [
          "Closed system: dm = 0, but δQ and δW may be non-zero.",
          "Open system: dm ≠ 0 and matter carries enthalpy, kinetic energy and potential energy across the control surface.",
          "Isolated system: dm = 0, δQ = 0 and δW = 0.",
          "For an isolated system, ΔE = 0 although energy may redistribute internally."
        ],
        "result": "The classification is a statement about the selected boundary, not an intrinsic label attached forever to the material.",
        "conditions": "State the boundary and observation interval before classifying."
      },
      {
        "title": "State specification and independent variables",
        "intro": "A simple compressible equilibrium state is fixed by a sufficient set of independent properties.",
        "steps": [
          "For a one-component, one-phase simple compressible system, an equation of state links P, V, T and n.",
          "With n fixed, only two of P, V and T are independent.",
          "For an ideal gas, PV = nRT.",
          "Thus specifying any two of P, V and T determines the third."
        ],
        "result": "A thermodynamic state is not a process history; it is a complete set of equilibrium property values.",
        "conditions": "Additional composition or field variables are required for mixtures, reactions, surfaces, electrical systems or magnetic systems."
      }
    ],
    "examples": [
      {
        "title": "Boundary classification",
        "question": "A sealed rigid steel vessel is heated electrically. Classify it and identify energy transfers.",
        "solution": "It is closed because no matter crosses. It is rigid, so PV boundary work is zero. Electrical work enters and internal energy rises; heat transfer depends on insulation."
      },
      {
        "title": "Composite universe",
        "question": "A hot metal block loses 2.4 kJ to water inside an insulated container. What is the water energy change?",
        "solution": "The insulated composite has ΔEuniv = 0, so ΔEwater = +2.4 kJ if no other energy mode is present."
      }
    ],
    "graph": [
      "Boundary accounting",
      "energy transferred",
      "system energy",
      "Heat/work enter",
      "Heat/work leave"
    ]
  },
  "2": {
    "title": "Phase, components and scaling of thermodynamic properties",
    "derivations": [
      {
        "title": "Scaling test for extensive and intensive properties",
        "intro": "Duplicate an equilibrium system without changing temperature, pressure or composition.",
        "steps": [
          "Let the original amount be n and property be X(n).",
          "For two non-interacting identical copies, X(2n) = 2X(n) for an extensive property.",
          "More generally, X(λn) = λX(n).",
          "An intensive property Y obeys Y(λn) = Y(n)."
        ],
        "result": "Mass, volume, internal energy, entropy and Gibbs energy are extensive; temperature, pressure and density are intensive.",
        "conditions": "The copies must be independent and in the same thermodynamic state."
      },
      {
        "title": "Why a ratio of extensive quantities can be intensive",
        "intro": "Take two extensive quantities X and Z that scale linearly with system size.",
        "steps": [
          "X(λn) = λX(n)",
          "Z(λn) = λZ(n)",
          "X(λn)/Z(λn) = λX(n)/[λZ(n)]",
          "Therefore X/Z is unchanged by scaling."
        ],
        "result": "Density m/V, molar volume V/n and specific energy U/m are intensive.",
        "conditions": "Both numerator and denominator must scale with the same degree."
      },
      {
        "title": "Gibbs phase rule",
        "intro": "Count independently variable intensive coordinates after equilibrium constraints are imposed.",
        "steps": [
          "For C components in P phases, each phase needs C−1 independent composition variables plus T and P.",
          "Initial variables = P(C−1)+2.",
          "Chemical equilibrium requires equality of each component chemical potential between phases, giving C(P−1) independent constraints.",
          "F = P(C−1)+2−C(P−1) = C−P+2."
        ],
        "result": "F = C − P + 2 for a non-reacting system with only temperature and pressure as external variables.",
        "conditions": "Subtract additional independent reaction constraints or add additional fields when present."
      }
    ],
    "examples": [
      {
        "title": "Scaling classification",
        "question": "A sample is doubled at the same T, P and composition. U doubles but U/n does not. Classify both.",
        "solution": "U is extensive because it doubles. U/n is molar internal energy and is intensive."
      },
      {
        "title": "Phase rule",
        "question": "Find the degrees of freedom for liquid water in equilibrium with its vapour.",
        "solution": "C = 1 and P = 2, so F = 1. Choosing temperature fixes the equilibrium pressure."
      }
    ],
    "graph": [
      "Property scaling",
      "amount of substance",
      "property value",
      "Extensive X ∝ n",
      "Intensive Y = constant"
    ]
  },
  "3": {
    "title": "State functions, exact differentials and path functions",
    "derivations": [
      {
        "title": "Exactness criterion for a two-variable differential",
        "intro": "Let a proposed differential be dF = M(x,y)dx + N(x,y)dy.",
        "steps": [
          "If F exists, M = (∂F/∂x)y and N = (∂F/∂y)x.",
          "Differentiate M with respect to y: (∂M/∂y)x = ∂²F/∂y∂x.",
          "Differentiate N with respect to x: (∂N/∂x)y = ∂²F/∂x∂y.",
          "For continuous second derivatives, the mixed derivatives are equal."
        ],
        "result": "A necessary local exactness test is (∂M/∂y)x = (∂N/∂x)y. In a simply connected domain it is also sufficient.",
        "conditions": "M and N must be continuously differentiable and the domain must not contain excluded singularities."
      },
      {
        "title": "Endpoint independence and cyclic integral",
        "intro": "Integrate an exact differential between equilibrium states A and B.",
        "steps": [
          "∫A→B dF = F(B) − F(A)",
          "The value depends only on endpoints.",
          "For a closed cycle A→B→A, ∮dF = F(A)−F(A) = 0.",
          "Heat and work generally satisfy ∮δq ≠ 0 and ∮δw ≠ 0."
        ],
        "result": "Zero cyclic integral is the operational signature of a state function.",
        "conditions": "The cycle must return to the same complete thermodynamic state."
      },
      {
        "title": "Recovering a state function from its differential",
        "intro": "Suppose dF = (2xy + 3)dx + (x² + 4y)dy.",
        "steps": [
          "M = 2xy+3 and N = x²+4y.",
          "∂M/∂y = 2x and ∂N/∂x = 2x, so the form is exact.",
          "Integrate M with respect to x: F = x²y + 3x + g(y).",
          "Differentiate: ∂F/∂y = x² + g′(y) = x² + 4y, so g′(y)=4y and g(y)=2y²+C."
        ],
        "result": "F(x,y) = x²y + 3x + 2y² + C.",
        "conditions": "Any additive constant is thermodynamically irrelevant to property differences."
      }
    ],
    "examples": [
      {
        "title": "Exactness test",
        "question": "Is Mdx+Ndy exact for M=3x²y and N=x³+2y?",
        "solution": "∂M/∂y=3x² and ∂N/∂x=3x², so it is exact on a simply connected domain."
      },
      {
        "title": "Path dependence",
        "question": "Why can two P–V paths between the same states have different work?",
        "solution": "Work is −∫Pext dV. Different paths assign different pressures at the same intermediate volumes, so the enclosed areas differ although ΔU is identical."
      }
    ],
    "graph": [
      "Two paths between the same states",
      "volume V",
      "pressure P",
      "Path A",
      "Path B"
    ]
  },
  "4": {
    "title": "Processes, equilibrium, quasi-static motion and reversibility",
    "derivations": [
      {
        "title": "Mechanical entropy generation from a finite pressure difference",
        "intro": "A piston moves because the system pressure differs from the external pressure.",
        "steps": [
          "Reversible boundary work is δwrev = −Psys dV.",
          "Actual work is δw = −Pext dV.",
          "Lost work magnitude = (Psys−Pext)dV for expansion.",
          "At environmental temperature T0, the lost work is T0 dSgen."
        ],
        "result": "dSgen = (Psys−Pext)dV/T0 ≥ 0 for an irreversible expansion.",
        "conditions": "The compact lost-work form uses a specified reference temperature and neglects other dissipation modes."
      },
      {
        "title": "Thermal entropy generation across a finite temperature difference",
        "intro": "Let heat δQ flow from a hot reservoir Th to a cold reservoir Tc.",
        "steps": [
          "ΔShot = −δQ/Th",
          "ΔScold = +δQ/Tc",
          "ΔSuniv = δQ(1/Tc − 1/Th)",
          "Because Th>Tc, ΔSuniv>0."
        ],
        "result": "Heat transfer is reversible only in the limit Th−Tc → 0.",
        "conditions": "Reservoir temperatures remain effectively constant during the transfer."
      },
      {
        "title": "Equilibrium requirements",
        "intro": "A macroscopic equilibrium state must have no unbalanced driving force.",
        "steps": [
          "Thermal equilibrium: uniform temperature and no net heat flow.",
          "Mechanical equilibrium: no unbalanced pressure or stress gradient.",
          "Chemical equilibrium: reaction Gibbs energy is zero for every independent reaction.",
          "Phase equilibrium: chemical potential of each component is equal across coexisting phases."
        ],
        "result": "Thermodynamic equilibrium requires simultaneous thermal, mechanical, chemical and phase equilibrium as applicable.",
        "conditions": "External fields may create equilibrium gradients, for example hydrostatic pressure variation."
      }
    ],
    "examples": [
      {
        "title": "Slow but irreversible",
        "question": "A piston moves very slowly while rubbing against the cylinder. Is the path reversible?",
        "solution": "No. Quasi-static motion can still generate entropy through friction."
      },
      {
        "title": "Finite-temperature transfer",
        "question": "Find ΔSuniv when 600 J flows from 400 K to 300 K.",
        "solution": "ΔSuniv=600(1/300−1/400)=0.500 J K⁻¹."
      }
    ],
    "graph": [
      "Driving-force limit",
      "process progress",
      "driving force",
      "Finite-gradient real path",
      "Reversible limit"
    ]
  },
  "5": {
    "title": "Response coefficients and complete partial-derivative relations",
    "derivations": [
      {
        "title": "Coefficient of isobaric thermal expansion",
        "intro": "Treat volume as a state function V(T,P). Its total differential is the starting point.",
        "steps": [
          "dV = (∂V/∂T)P dT + (∂V/∂P)T dP",
          "At constant pressure, dP = 0, so dV = (∂V/∂T)P dT.",
          "Define α = (1/V)(∂V/∂T)P.",
          "Therefore dV/V = α dT.",
          "Integrate: ln(V2/V1)=∫T1→T2 α(T,P)dT.",
          "For constant α, V2=V1 exp[α(T2−T1)].",
          "If |αΔT|≪1, exp(αΔT)≈1+αΔT, so ΔV≈αV1ΔT."
        ],
        "result": "Exact constant-α form: V2=V1e^(αΔT); small-change form: ΔV/V1≈αΔT.",
        "conditions": "The linear approximation requires |αΔT| much smaller than one."
      },
      {
        "title": "Isothermal compressibility and pressure response",
        "intro": "At constant temperature, pressure changes the volume.",
        "steps": [
          "At dT=0, dV=(∂V/∂P)T dP.",
          "Define κT=−(1/V)(∂V/∂P)T so κT is positive for ordinary matter.",
          "Thus dV/V=−κT dP.",
          "For constant κT, ln(V2/V1)=−κT(P2−P1).",
          "Therefore V2=V1 exp[−κTΔP]≈V1(1−κTΔP) for small κTΔP."
        ],
        "result": "A positive pressure increment normally causes a negative fractional volume change.",
        "conditions": "Near phase transitions κT may become very large; the constant-coefficient approximation may fail."
      },
      {
        "title": "Combined differential and thermal-pressure coefficient",
        "intro": "Insert the coefficient definitions into the total differential of V(T,P).",
        "steps": [
          "(∂V/∂T)P = αV",
          "(∂V/∂P)T = −κTV",
          "dV/V = αdT − κT dP",
          "At constant volume, dV=0, so αdT=κT dP.",
          "Therefore (∂P/∂T)V = α/κT."
        ],
        "result": "dV/V = αdT − κT dP and (∂P/∂T)V = α/κT.",
        "conditions": "Single-phase equilibrium region; coefficients are evaluated at the local state."
      },
      {
        "title": "Ideal-gas response coefficients",
        "intro": "Use V=nRT/P for fixed n.",
        "steps": [
          "At constant P, (∂V/∂T)P=nR/P=V/T, hence α=1/T.",
          "At constant T, (∂V/∂P)T=−nRT/P²=−V/P, hence κT=1/P.",
          "Then α/κT=(1/T)/(1/P)=P/T.",
          "Directly from P=nRT/V, (∂P/∂T)V=nR/V=P/T."
        ],
        "result": "For an ideal gas: α=1/T, κT=1/P and (∂P/∂T)V=P/T.",
        "conditions": "Fixed amount of ideal gas."
      }
    ],
    "examples": [
      {
        "title": "Finite thermal expansion",
        "question": "A liquid has α=8.0×10⁻⁴ K⁻¹ and V1=2.00 L. Estimate V2 after a 25 K rise.",
        "solution": "αΔT=0.020. Linear form gives V2≈2.00(1.020)=2.040 L; exponential form gives 2.0404 L."
      },
      {
        "title": "Combined T and P change",
        "question": "For α=3.0×10⁻⁴ K⁻¹, κT=4.0×10⁻¹⁰ Pa⁻¹, ΔT=20 K and ΔP=5 MPa, find ΔV/V.",
        "solution": "ΔV/V≈αΔT−κTΔP=0.006−0.002=0.004, a 0.4% increase."
      },
      {
        "title": "Thermal-pressure coefficient",
        "question": "At a state α=2.5×10⁻⁴ K⁻¹ and κT=5.0×10⁻¹⁰ Pa⁻¹. Find (∂P/∂T)V.",
        "solution": "α/κT=5.0×10⁵ Pa K⁻¹=0.50 MPa K⁻¹."
      }
    ],
    "graph": [
      "Response at fixed pressure and fixed temperature",
      "temperature or pressure change",
      "fractional volume change",
      "Heating at constant P",
      "Compression at constant T"
    ]
  },
  "6": {
    "title": "Internal energy, ideal gases and intermolecular forces",
    "derivations": [
      {
        "title": "Fundamental differential for internal energy",
        "intro": "For a closed simple compressible system with reversible PV work, combine the First and Second Laws.",
        "steps": [
          "First Law: dU=δq+δw.",
          "For a reversible change, δqrev=T dS.",
          "Reversible PV work in chemistry sign convention: δwrev=−P dV.",
          "Therefore dU=T dS−P dV."
        ],
        "result": "dU = T dS − P dV for fixed composition.",
        "conditions": "Add Σμi dni and other generalized work terms when composition or fields change."
      },
      {
        "title": "Volume dependence of U at constant temperature",
        "intro": "Express dS as a function of T and V and use a Maxwell relation.",
        "steps": [
          "dU=T dS−P dV.",
          "At constant T, (∂U/∂V)T = T(∂S/∂V)T − P.",
          "From dA=−S dT−P dV, the Maxwell relation is (∂S/∂V)T=(∂P/∂T)V.",
          "Hence (∂U/∂V)T=T(∂P/∂T)V−P."
        ],
        "result": "(∂U/∂V)T = T(∂P/∂T)V − P.",
        "conditions": "Single-phase equilibrium and differentiable equation of state."
      },
      {
        "title": "Joule law for an ideal gas",
        "intro": "Insert the ideal-gas equation into the volume derivative.",
        "steps": [
          "For an ideal gas, P=nRT/V.",
          "(∂P/∂T)V=nR/V=P/T.",
          "T(∂P/∂T)V−P=T(P/T)−P=0.",
          "Therefore (∂U/∂V)T=0 and U=U(T) for fixed composition."
        ],
        "result": "Ideal-gas internal energy depends only on temperature.",
        "conditions": "The gas must obey the ideal equation of state and have fixed composition."
      },
      {
        "title": "van der Waals gas volume dependence",
        "intro": "For one mole, P=RT/(V−b)−a/V².",
        "steps": [
          "(∂P/∂T)V=R/(V−b).",
          "T(∂P/∂T)V−P=TR/(V−b)−[RT/(V−b)−a/V²].",
          "Therefore (∂U/∂V)T=a/V².",
          "Integrating at fixed T: U(T,V)=f(T)−a/V."
        ],
        "result": "Attractive interactions make U increase as a van der Waals gas expands isothermally.",
        "conditions": "Classical van der Waals model; one mole."
      }
    ],
    "examples": [
      {
        "title": "Ideal-gas heating",
        "question": "Two moles of a monatomic ideal gas are heated by 40 K. Find ΔU.",
        "solution": "CV,m=3R/2, so ΔU=nCV,mΔT=2(3R/2)(40)=997.7 J."
      },
      {
        "title": "van der Waals isothermal expansion",
        "question": "One mole expands from V1 to V2 at fixed T. Find ΔU for the van der Waals model.",
        "solution": "ΔU=∫V1→V2 a/V² dV=a(1/V1−1/V2), positive for expansion."
      }
    ],
    "graph": [
      "Internal energy dependence",
      "temperature or volume",
      "internal energy U",
      "Ideal gas U(T)",
      "Real gas interaction contribution"
    ]
  },
  "7": {
    "title": "Pressure–volume work and generalized work modes",
    "derivations": [
      {
        "title": "Piston derivation of pressure–volume work",
        "intro": "A piston of area A moves an infinitesimal distance dx against external pressure Pext.",
        "steps": [
          "External force on the piston is Fext=PextA.",
          "Work done by the system on surroundings is δwby=Fext dx=PextA dx.",
          "The volume change is dV=A dx.",
          "Thus δwby=Pext dV.",
          "Chemistry convention records work on the system: δw=−Pext dV."
        ],
        "result": "δw = −Pext dV. Expansion gives w<0; compression gives w>0.",
        "conditions": "Uniform external pressure at the moving boundary; sign convention explicitly stated."
      },
      {
        "title": "Reversible ideal-gas work",
        "intro": "For a reversible isothermal change, Pext differs infinitesimally from the gas pressure.",
        "steps": [
          "Pext≈P=nRT/V.",
          "wrev=−∫V1→V2 P dV.",
          "wrev=−nRT∫V1→V2 dV/V.",
          "wrev=−nRT ln(V2/V1)."
        ],
        "result": "Reversible expansion gives the maximum magnitude of work obtainable between fixed isothermal ideal-gas endpoints.",
        "conditions": "Ideal gas, constant T, reversible path."
      },
      {
        "title": "Constant external pressure work",
        "intro": "When Pext is constant, it leaves the integral.",
        "steps": [
          "w=−∫V1→V2 Pext dV",
          "w=−Pext(V2−V1)",
          "For free expansion Pext=0.",
          "Therefore wfree=0."
        ],
        "result": "The actual boundary work depends on external resistance, not only on the gas equation of state.",
        "conditions": "Pext constant over the displacement."
      },
      {
        "title": "Generalized force–displacement pairs",
        "intro": "Many work modes share the same mathematical structure.",
        "steps": [
          "Electrical work: δw=φ dq.",
          "Surface work: δw=γ dA.",
          "Elastic work: δw=F dx.",
          "Shaft work: δw=τ dθ."
        ],
        "result": "Each work mode pairs a generalized force with its conjugate displacement.",
        "conditions": "The sign must be defined consistently for work on or by the system."
      }
    ],
    "examples": [
      {
        "title": "Constant-pressure expansion",
        "question": "A gas expands from 2.0 L to 7.0 L against 1.50 bar. Find w.",
        "solution": "w=−PextΔV=−1.50×5.0 L bar=−7.50 L bar=−750 J."
      },
      {
        "title": "Reversible isothermal work",
        "question": "One mole expands reversibly at 300 K from 5.0 L to 10.0 L.",
        "solution": "w=−RT ln2=−1.73 kJ."
      }
    ],
    "graph": [
      "Area interpretation of PV work",
      "volume V",
      "external pressure",
      "Reversible path",
      "One-step path"
    ]
  },
  "8": {
    "title": "Zeroth Law, First Law and complete energy balances",
    "derivations": [
      {
        "title": "Zeroth-Law basis of temperature",
        "intro": "Thermal equilibrium behaves as a transitive relation.",
        "steps": [
          "If A is in thermal equilibrium with C, there is no net heat flow between A and C.",
          "If B is also in thermal equilibrium with C, B has the same empirical temperature as C.",
          "Therefore A and B have the same temperature.",
          "This permits C to serve as a thermometer."
        ],
        "result": "Temperature is the property that is equal in thermal equilibrium.",
        "conditions": "The systems must be allowed to exchange heat without other changes obscuring equilibrium."
      },
      {
        "title": "First-Law balance for a closed system",
        "intro": "Separate changes in stored energy from transfers across the boundary.",
        "steps": [
          "Total energy E=U+KE+PE.",
          "ΔE=q+w in chemistry sign convention.",
          "Therefore ΔU+ΔKE+ΔPE=q+w.",
          "If macroscopic kinetic and potential changes are negligible, ΔU=q+w."
        ],
        "result": "The First Law is an accounting identity; it does not predict spontaneity.",
        "conditions": "Closed system; include every work mode in w."
      },
      {
        "title": "Enthalpy and constant-pressure heat",
        "intro": "For PV work only, define H=U+PV.",
        "steps": [
          "dH=dU+P dV+V dP.",
          "At constant pressure, dP=0.",
          "With only PV work, dU=δq−P dV.",
          "Thus dH=δqP."
        ],
        "result": "At constant pressure with only PV work, qP=ΔH.",
        "conditions": "Closed system, constant external pressure equal to system pressure for the differential derivation, negligible non-PV work."
      },
      {
        "title": "Steady-flow energy equation",
        "intro": "Matter crossing a control surface carries flow work within its enthalpy.",
        "steps": [
          "Per unit mass, stored flow energy is h+v²/2+gz.",
          "At steady state, accumulation is zero.",
          "q−ws=Δh+Δ(v²/2)+gΔz.",
          "For an adiabatic turbine with negligible kinetic and potential changes, ws=h1−h2."
        ],
        "result": "Flow devices are naturally analysed with enthalpy rather than internal energy alone.",
        "conditions": "Steady one-inlet, one-outlet form; signs stated for shaft work by the control volume."
      }
    ],
    "examples": [
      {
        "title": "Rigid vessel heating",
        "question": "A rigid closed vessel receives 800 J electrical work and loses 150 J heat. Find ΔU.",
        "solution": "q=−150 J, w=+800 J, so ΔU=650 J."
      },
      {
        "title": "Constant-pressure reaction",
        "question": "A reaction at constant pressure absorbs 12 kJ with only PV work. Find ΔH.",
        "solution": "ΔH=qP=+12 kJ."
      }
    ],
    "graph": [
      "Energy accounting",
      "energy transfer mode",
      "stored-energy change",
      "Heat contribution",
      "Work contribution"
    ]
  },
  "9": {
    "title": "Isothermal ideal-gas processes",
    "derivations": [
      {
        "title": "Energy balance for an isothermal ideal gas",
        "intro": "Ideal-gas internal energy depends only on temperature.",
        "steps": [
          "dU=nCV,m dT.",
          "For an isothermal process, dT=0.",
          "Therefore ΔU=0.",
          "First Law gives q=−w."
        ],
        "result": "Any work done by an isothermal ideal gas must be supplied as equal heat input.",
        "conditions": "Fixed-composition ideal gas."
      },
      {
        "title": "Reversible isothermal work and heat",
        "intro": "Use the reversible pressure P=nRT/V.",
        "steps": [
          "wrev=−∫V1→V2(nRT/V)dV",
          "wrev=−nRT ln(V2/V1)",
          "Because ΔU=0, qrev=+nRT ln(V2/V1).",
          "Entropy change is ΔS=qrev/T=nR ln(V2/V1)."
        ],
        "result": "Expansion has wrev<0, qrev>0 and ΔS>0.",
        "conditions": "Reversible, ideal gas, constant temperature."
      },
      {
        "title": "One-step irreversible expansion",
        "intro": "Let the gas expand against constant Pext.",
        "steps": [
          "w=−Pext(V2−V1).",
          "ΔU=0 for the isothermal ideal gas.",
          "Therefore q=Pext(V2−V1).",
          "System entropy remains ΔSsys=nR ln(V2/V1), independent of path."
        ],
        "result": "The irreversible path gives less work magnitude than the reversible path between the same endpoints.",
        "conditions": "The temperature is held constant by heat exchange with a reservoir."
      },
      {
        "title": "Multistep approach to reversibility",
        "intro": "Divide the pressure drop into many small steps.",
        "steps": [
          "For each step i, wi=−Pext,i(Vi+1−Vi).",
          "The total is a Riemann sum.",
          "As the number of steps tends to infinity and each pressure difference tends to zero, Σwi→−∫P dV.",
          "The limiting work is the reversible result."
        ],
        "result": "Reversibility is the infinite-step limit of vanishing driving force.",
        "conditions": "No friction or other dissipation."
      }
    ],
    "examples": [
      {
        "title": "Reversible expansion",
        "question": "Two moles expand reversibly at 298 K from 4 L to 12 L. Find w and q.",
        "solution": "w=−2RT ln3=−5.44 kJ and q=+5.44 kJ."
      },
      {
        "title": "Free expansion",
        "question": "An ideal gas expands into vacuum in an insulated vessel. Find q, w, ΔU and ΔT.",
        "solution": "q=0 and w=0, so ΔU=0. For an ideal gas U=U(T), hence ΔT=0."
      }
    ],
    "graph": [
      "Isothermal expansion paths",
      "volume V",
      "pressure P",
      "Reversible isotherm",
      "Constant Pext"
    ]
  },
  "10": {
    "title": "Adiabatic processes and Poisson relations",
    "derivations": [
      {
        "title": "Reversible adiabatic temperature–volume relation",
        "intro": "For a reversible adiabatic ideal-gas change, q=0 and δw=−P dV.",
        "steps": [
          "dU=nCV,m dT=−P dV.",
          "Use P=nRT/V.",
          "nCV,m dT=−nRT dV/V.",
          "CV,m dT/T=−R dV/V.",
          "Integrate: CV,m ln(T2/T1)=−R ln(V2/V1).",
          "Since R/CV,m=γ−1, TV^(γ−1)=constant."
        ],
        "result": "T1V1^(γ−1)=T2V2^(γ−1).",
        "conditions": "Ideal gas, reversible adiabatic path, constant heat capacities for the power-law form."
      },
      {
        "title": "Pressure–volume Poisson relation",
        "intro": "Combine TV^(γ−1)=constant with PV=nRT.",
        "steps": [
          "T=PV/(nR).",
          "Substitute into TV^(γ−1)=constant.",
          "[PV/(nR)]V^(γ−1)=constant.",
          "Therefore PV^γ=constant."
        ],
        "result": "P1V1^γ=P2V2^γ.",
        "conditions": "Same assumptions as the previous derivation."
      },
      {
        "title": "Adiabatic work",
        "intro": "Use ΔU=w because q=0.",
        "steps": [
          "w=ΔU=nCV,m(T2−T1).",
          "Using PV^γ=constant, integrate w=−∫P dV.",
          "w=−K∫V1→V2 V^(−γ)dV.",
          "w=(P2V2−P1V1)/(γ−1)."
        ],
        "result": "w=nCV,m(T2−T1)=(P2V2−P1V1)/(γ−1).",
        "conditions": "Chemistry sign convention; reversible ideal-gas adiabat."
      },
      {
        "title": "Why an irreversible adiabat need not be isentropic",
        "intro": "Use the entropy balance for a closed system.",
        "steps": [
          "ΔSsys=∫δq/Tb+Sgen.",
          "Adiabatic means δq=0.",
          "Thus ΔSsys=Sgen.",
          "For a reversible adiabat Sgen=0; for an irreversible adiabat Sgen>0."
        ],
        "result": "Adiabatic and isentropic are equivalent only for a reversible closed-system path.",
        "conditions": "No mass transfer."
      }
    ],
    "examples": [
      {
        "title": "Adiabatic expansion temperature",
        "question": "A diatomic ideal gas expands reversibly from 10 L and 400 K to 20 L. Take γ=1.40. Find T2.",
        "solution": "T2=T1(V1/V2)^(γ−1)=400(0.5)^0.4=303 K."
      },
      {
        "title": "Adiabatic free expansion",
        "question": "An ideal gas expands into vacuum in an insulated vessel. Is ΔS zero?",
        "solution": "No. q=0 and w=0 give ΔU=0 and ΔT=0, but ΔS=nR ln(V2/V1)>0 because the process is irreversible."
      }
    ],
    "graph": [
      "Isothermal and adiabatic curves",
      "volume V",
      "pressure P",
      "Isothermal",
      "Reversible adiabatic"
    ]
  },
  "11": {
    "title": "Polytropic ideal-gas processes",
    "derivations": [
      {
        "title": "Temperature–volume relation for PV^x=constant",
        "intro": "Let PV^x=K and use the ideal-gas equation.",
        "steps": [
          "P=K/V^x.",
          "PV=nRT gives KV^(1−x)=nRT.",
          "Therefore TV^(x−1)=K/(nR)=constant.",
          "Thus T2/T1=(V1/V2)^(x−1)."
        ],
        "result": "TV^(x−1)=constant.",
        "conditions": "Fixed amount of ideal gas following the specified polytropic path."
      },
      {
        "title": "Polytropic work",
        "intro": "Integrate the path pressure.",
        "steps": [
          "w=−∫V1→V2 K V^(−x)dV.",
          "For x≠1, ∫V^(−x)dV=V^(1−x)/(1−x).",
          "w=−K[V2^(1−x)−V1^(1−x)]/(1−x).",
          "Since KV^(1−x)=PV, w=(P2V2−P1V1)/(x−1)."
        ],
        "result": "w=(P2V2−P1V1)/(x−1), while x→1 gives w=−nRT ln(V2/V1).",
        "conditions": "x constant over the path."
      },
      {
        "title": "Heat transfer and effective heat capacity",
        "intro": "Apply the First Law with ΔU=nCV,mΔT.",
        "steps": [
          "q=ΔU−w.",
          "Use w=nR(T2−T1)/(x−1).",
          "q=nCV,mΔT−nRΔT/(x−1).",
          "Therefore q=nCxΔT, where Cx=CV,m−R/(x−1)."
        ],
        "result": "The path heat capacity depends on the polytropic exponent.",
        "conditions": "Ideal gas with constant CV,m."
      },
      {
        "title": "Important limiting exponents",
        "intro": "Insert special x values.",
        "steps": [
          "x=0: P=constant, isobaric.",
          "x=1: PV=constant, isothermal ideal gas.",
          "x=γ: reversible adiabatic.",
          "x→∞: V≈constant, isochoric limit."
        ],
        "result": "One exponent continuously connects the familiar ideal-gas processes.",
        "conditions": "The named identifications assume ideal-gas behaviour."
      }
    ],
    "examples": [
      {
        "title": "Polytropic work",
        "question": "One mole changes from 300 K to 360 K along x=1.30. Find w.",
        "solution": "w=nRΔT/(x−1)=8.314×60/0.30=1.66 kJ, positive for this compression/heating path."
      },
      {
        "title": "Effective heat capacity",
        "question": "For a monatomic ideal gas and x=2, find Cx.",
        "solution": "CV=3R/2, so Cx=3R/2−R=R/2."
      }
    ],
    "graph": [
      "Polytropic family",
      "volume V",
      "pressure P",
      "Lower exponent",
      "Higher exponent"
    ]
  },
  "12": {
    "title": "Thermodynamic cycles, loop work and efficiency",
    "derivations": [
      {
        "title": "First-Law closure of a cycle",
        "intro": "A cycle returns to the initial complete state.",
        "steps": [
          "Because U is a state function, ΔUcycle=0.",
          "First Law: ΔUcycle=qcycle+wcycle.",
          "Therefore qcycle=−wcycle.",
          "A heat engine has net work by the system, so chemistry-sign wcycle<0 and qcycle>0."
        ],
        "result": "The net heat absorbed equals the net work delivered in magnitude.",
        "conditions": "Include every heat and work interaction over the complete cycle."
      },
      {
        "title": "PV loop area",
        "intro": "Boundary work is the line integral around the loop.",
        "steps": [
          "wcycle=−∮Pext dV.",
          "On expansion dV>0; on compression dV<0.",
          "The algebraic integral equals the oriented enclosed area.",
          "Clockwise loop: ∮P dV>0, so chemistry-sign wcycle<0."
        ],
        "result": "Clockwise PV cycle delivers net work; anticlockwise cycle requires net work input.",
        "conditions": "The plotted pressure must represent the boundary pressure used in work calculation."
      },
      {
        "title": "Rectangular cycle",
        "intro": "For pressures PH>PL and volumes VH>VL.",
        "steps": [
          "Expansion work at PH: w1=−PH(VH−VL).",
          "Compression work at PL: w3=+PL(VH−VL).",
          "Isochoric legs have zero PV work.",
          "wcycle=−(PH−PL)(VH−VL)."
        ],
        "result": "Work magnitude equals rectangle area (PH−PL)(VH−VL).",
        "conditions": "Clockwise orientation and constant-pressure horizontal legs."
      },
      {
        "title": "Thermal efficiency",
        "intro": "Define efficiency as desired work output divided by heat input.",
        "steps": [
          "Wout=QH−QC in positive-magnitude engine notation.",
          "η=Wout/QH.",
          "η=1−QC/QH.",
          "Because QC>0 for any cyclic heat engine, η<1."
        ],
        "result": "Efficiency depends on both heat input and unavoidable heat rejection.",
        "conditions": "QH and QC are positive magnitudes."
      }
    ],
    "examples": [
      {
        "title": "Rectangular loop",
        "question": "A clockwise rectangle spans 2–5 L and 1–4 bar. Find net chemistry-sign work.",
        "solution": "Area=(3 bar)(3 L)=9 L bar=900 J, so wcycle=−900 J."
      },
      {
        "title": "Engine efficiency",
        "question": "An engine absorbs 800 J and rejects 500 J per cycle.",
        "solution": "Wout=300 J and η=300/800=0.375=37.5%."
      }
    ],
    "graph": [
      "Clockwise cycle area",
      "volume V",
      "pressure P",
      "Expansion branch",
      "Compression branch"
    ]
  },
  "13": {
    "title": "Second Law, spontaneity and equilibrium",
    "derivations": [
      {
        "title": "Entropy criterion for spontaneous change",
        "intro": "Treat system plus surroundings as an isolated universe.",
        "steps": [
          "ΔSuniv=ΔSsys+ΔSsurr.",
          "The Second Law requires ΔSuniv≥0.",
          "ΔSuniv>0 for a spontaneous irreversible change.",
          "ΔSuniv=0 at equilibrium or for a reversible limiting change."
        ],
        "result": "Spontaneity is governed by total entropy production, not by system entropy alone.",
        "conditions": "The universe boundary must include all entropy transfers."
      },
      {
        "title": "Clausius inequality",
        "intro": "Compare an arbitrary cycle with reversible heat exchanges.",
        "steps": [
          "For a reversible cycle, ∮δqrev/T=0.",
          "Irreversibility generates entropy Sgen>0.",
          "For the same cycle, ∮δq/T=−Sgen.",
          "Therefore ∮δq/T≤0."
        ],
        "result": "Equality holds only for a reversible cycle.",
        "conditions": "T is the boundary temperature at which heat crosses."
      },
      {
        "title": "Why exothermicity is insufficient",
        "intro": "At constant T and P, use ΔG=ΔH−TΔS.",
        "steps": [
          "An exothermic reaction has ΔH<0.",
          "If ΔS is strongly negative, −TΔS is positive and may dominate.",
          "Then ΔG can become positive at high temperature.",
          "Conversely an endothermic reaction with positive ΔS can be spontaneous at high temperature."
        ],
        "result": "The signs of both ΔH and ΔS, together with T, determine spontaneity at constant T and P.",
        "conditions": "ΔH and ΔS are approximately temperature independent over the interval used."
      }
    ],
    "examples": [
      {
        "title": "Entropy test",
        "question": "A process gives ΔSsys=−20 J K⁻¹ and ΔSsurr=+27 J K⁻¹.",
        "solution": "ΔSuniv=+7 J K⁻¹, so the process is spontaneous and irreversible."
      },
      {
        "title": "Temperature threshold",
        "question": "ΔH=−40 kJ mol⁻¹ and ΔS=−100 J mol⁻¹ K⁻¹. Find the crossover temperature.",
        "solution": "ΔG=0 at T=ΔH/ΔS=400 K. The reaction is favoured below 400 K."
      }
    ],
    "graph": [
      "Direction criterion",
      "reaction progress",
      "thermodynamic potential",
      "Spontaneous descent",
      "Equilibrium minimum"
    ]
  },
  "14": {
    "title": "Carnot cycle and the maximum heat-engine efficiency",
    "derivations": [
      {
        "title": "Entropy relation for a reversible Carnot cycle",
        "intro": "The working substance returns to its initial state, so its total entropy change is zero.",
        "steps": [
          "During the hot isotherm, ΔS1=QH/TH.",
          "During the cold isotherm, ΔS3=−QC/TC.",
          "Reversible adiabatic legs have ΔS=0.",
          "Thus QH/TH−QC/TC=0.",
          "Therefore QC/QH=TC/TH."
        ],
        "result": "For a reversible Carnot cycle, QH/TH=QC/TC.",
        "conditions": "QH and QC are positive magnitudes and reservoirs remain at constant temperatures."
      },
      {
        "title": "Carnot efficiency",
        "intro": "Use η=1−QC/QH.",
        "steps": [
          "QC/QH=TC/TH.",
          "Substitute into η=1−QC/QH.",
          "ηCarnot=1−TC/TH.",
          "Because TC>0 K, ηCarnot<1."
        ],
        "result": "ηmax=1−TC/TH.",
        "conditions": "Absolute temperatures and reversible operation."
      },
      {
        "title": "Ideal-gas Carnot consistency",
        "intro": "On each reversible isotherm, heat equals nRT times a logarithmic volume ratio.",
        "steps": [
          "QH=nRTH ln(V2/V1).",
          "QC=nRTC ln(V3/V4).",
          "Adiabatic relations give V2/V1=V3/V4.",
          "Hence QC/QH=TC/TH."
        ],
        "result": "The ideal-gas geometry reproduces the universal Carnot result.",
        "conditions": "Ideal-gas working substance and reversible steps."
      },
      {
        "title": "Carnot theorem",
        "intro": "Assume an engine more efficient than a reversible engine between the same reservoirs.",
        "steps": [
          "Use the hypothetical superior engine to drive the reversible engine backward.",
          "Choose sizes so their work transfers cancel.",
          "The composite would move heat from cold to hot with no external work, or convert heat from one reservoir completely into work.",
          "That violates the Second Law."
        ],
        "result": "No engine between two reservoirs can exceed the reversible Carnot efficiency.",
        "conditions": "Both engines operate cyclically between the same reservoir temperatures."
      }
    ],
    "examples": [
      {
        "title": "Carnot efficiency",
        "question": "Find ηmax for TH=600 K and TC=300 K.",
        "solution": "η=1−300/600=0.50."
      },
      {
        "title": "Required hot temperature",
        "question": "A Carnot engine rejects heat at 300 K and must reach 60% efficiency. Find TH.",
        "solution": "0.60=1−300/TH, so TH=750 K."
      }
    ],
    "graph": [
      "Carnot efficiency ceiling",
      "cold-to-hot temperature ratio",
      "maximum efficiency",
      "η=1−TC/TH",
      "Real engine below ceiling"
    ]
  },
  "15": {
    "title": "Refrigerators, heat pumps and coefficient of performance",
    "derivations": [
      {
        "title": "Energy balance for a reversed cycle",
        "intro": "Use positive magnitudes for heat and work.",
        "steps": [
          "The device absorbs QC from the cold space.",
          "Work Win is supplied.",
          "It rejects QH to the hot surroundings.",
          "First Law over a cycle: QH=QC+Win."
        ],
        "result": "Win=QH−QC.",
        "conditions": "Steady cyclic operation."
      },
      {
        "title": "Refrigerator COP",
        "intro": "Desired effect is heat removed from the cold region.",
        "steps": [
          "COPR=QC/Win.",
          "For a reversible device, QC/QH=TC/TH.",
          "Win=QH−QC.",
          "Divide by QC: Win/QC=TH/TC−1=(TH−TC)/TC.",
          "Therefore COPR=TC/(TH−TC)."
        ],
        "result": "COPR,Carnot=TC/(TH−TC).",
        "conditions": "Absolute temperatures and reversible operation."
      },
      {
        "title": "Heat-pump COP and relation to refrigerator COP",
        "intro": "Desired effect is heat delivered to the hot region.",
        "steps": [
          "COPHP=QH/Win.",
          "QH=QC+Win.",
          "COPHP=QC/Win+1.",
          "Therefore COPHP=COPR+1=TH/(TH−TC)."
        ],
        "result": "COPHP is exactly one greater than COPR for the same device.",
        "conditions": "Same cycle and magnitude convention."
      },
      {
        "title": "Effect of temperature lift",
        "intro": "Let ΔT=TH−TC.",
        "steps": [
          "COPR=TC/ΔT.",
          "For fixed TC, increasing ΔT decreases COP.",
          "As ΔT→0, reversible COP tends to infinity.",
          "Real COP remains finite because finite heat-exchanger temperature differences and friction create entropy."
        ],
        "result": "Reducing temperature lift is the strongest thermodynamic route to better refrigeration performance.",
        "conditions": "Carnot expression is an upper bound, not a real-device prediction."
      }
    ],
    "examples": [
      {
        "title": "Refrigerator work",
        "question": "A refrigerator removes 900 J with COP=3.0. Find work and rejected heat.",
        "solution": "Win=900/3=300 J; QH=900+300=1200 J."
      },
      {
        "title": "Carnot COP",
        "question": "Find COPR between 270 K and 300 K.",
        "solution": "COPR=270/(30)=9.0."
      }
    ],
    "graph": [
      "COP versus temperature lift",
      "temperature lift TH−TC",
      "coefficient of performance",
      "Carnot refrigerator",
      "Real refrigerator"
    ]
  },
  "16": {
    "title": "Entropy as a state function and microscopic multiplicity",
    "derivations": [
      {
        "title": "Entropy from the Clausius equality",
        "intro": "For a reversible cycle, the integrating factor 1/T converts heat into an exact differential.",
        "steps": [
          "Clausius equality: ∮δqrev/T=0.",
          "A differential with zero cyclic integral is exact.",
          "Define dS=δqrev/T.",
          "For states 1 and 2, ΔS=∫1→2 δqrev/T along any reversible path."
        ],
        "result": "Entropy is a state function even when the actual process is irreversible.",
        "conditions": "Use a reversible comparison path between the same equilibrium endpoints."
      },
      {
        "title": "Boltzmann relation",
        "intro": "Let W be the number of microstates compatible with a macrostate.",
        "steps": [
          "For independent systems A and B, WAB=WA WB.",
          "Entropy must be additive: SAB=SA+SB.",
          "The logarithm converts multiplication into addition: ln(WA WB)=lnWA+lnWB.",
          "Therefore S=kB lnW plus an additive constant."
        ],
        "result": "S=kB lnW.",
        "conditions": "W is the thermodynamic multiplicity defined with a consistent counting convention."
      },
      {
        "title": "Ideal-gas isothermal entropy change",
        "intro": "Evaluate the entropy change along a reversible isothermal path.",
        "steps": [
          "dS=δqrev/T.",
          "For an ideal gas at constant T, δqrev=P dV=nRT dV/V.",
          "Thus dS=nR dV/V.",
          "Integrate: ΔS=nR ln(V2/V1)."
        ],
        "result": "Expansion increases ideal-gas entropy because more translational states become accessible.",
        "conditions": "Fixed-composition ideal gas and reversible evaluation path."
      },
      {
        "title": "Entropy units and molar form",
        "intro": "Use dimensional analysis on dS=δqrev/T.",
        "steps": [
          "Heat has units joule.",
          "Temperature has units kelvin.",
          "Therefore entropy has units J K⁻¹.",
          "Molar entropy has units J mol⁻¹ K⁻¹."
        ],
        "result": "Entropy is extensive; molar entropy is intensive.",
        "conditions": "Use absolute temperature."
      }
    ],
    "examples": [
      {
        "title": "Multiplicity ratio",
        "question": "A macrostate has 1000 times as many microstates as another. Find ΔS for one microscopic system.",
        "solution": "ΔS=kB ln1000=3kB ln10=9.54×10⁻²³ J K⁻¹."
      },
      {
        "title": "Ideal-gas expansion",
        "question": "One mole expands isothermally from V to 4V. Find ΔS.",
        "solution": "ΔS=R ln4=11.53 J mol⁻¹ K⁻¹."
      }
    ],
    "graph": [
      "Entropy and multiplicity",
      "multiplicity W",
      "entropy S",
      "S=k ln W",
      "Linear comparison"
    ]
  },
  "17": {
    "title": "Entropy transfer, entropy generation and irreversibility",
    "derivations": [
      {
        "title": "Closed-system entropy balance",
        "intro": "Separate entropy carried with heat from entropy created internally.",
        "steps": [
          "dSsys=δQ/Tb+dSgen.",
          "Tb is the boundary temperature at the location of heat transfer.",
          "dSgen≥0 by the Second Law.",
          "For a reversible process dSgen=0."
        ],
        "result": "Entropy can cross a boundary; entropy generation cannot cross and is never negative.",
        "conditions": "Closed-system differential balance."
      },
      {
        "title": "Entropy generation in heat conduction",
        "intro": "Transfer heat Q from Th to Tc with Th>Tc.",
        "steps": [
          "ΔShot=−Q/Th.",
          "ΔScold=+Q/Tc.",
          "Sgen=ΔSuniv=Q(1/Tc−1/Th).",
          "The expression is positive."
        ],
        "result": "A finite temperature difference is intrinsically irreversible.",
        "conditions": "Reservoir temperatures remain constant."
      },
      {
        "title": "Free expansion entropy generation",
        "intro": "An ideal gas expands into vacuum in an insulated container.",
        "steps": [
          "q=0 and w=0, so ΔU=0.",
          "For an ideal gas, ΔT=0.",
          "State-function change: ΔSsys=nR ln(V2/V1).",
          "Because no entropy crosses with heat, Sgen=ΔSsys."
        ],
        "result": "Sgen=nR ln(V2/V1)>0.",
        "conditions": "Ideal gas, rigid insulated outer container."
      },
      {
        "title": "Clausius inequality from entropy balance",
        "intro": "Integrate the entropy balance around a cycle.",
        "steps": [
          "Over a cycle, ΔSsys=0.",
          "0=∮δQ/Tb+Sgen,cycle.",
          "Thus ∮δQ/Tb=−Sgen,cycle.",
          "Since Sgen,cycle≥0, ∮δQ/Tb≤0."
        ],
        "result": "The cyclic heat integral is zero only for a reversible cycle.",
        "conditions": "All heat interactions are included with their boundary temperatures."
      }
    ],
    "examples": [
      {
        "title": "Finite heat transfer",
        "question": "1000 J moves from 500 K to 300 K. Find entropy generation.",
        "solution": "Sgen=1000(1/300−1/500)=1.333 J K⁻¹."
      },
      {
        "title": "Adiabatic irreversible compression",
        "question": "An insulated gas is compressed with friction. What is the sign of ΔS?",
        "solution": "Positive, because ΔS=Sgen and friction produces entropy."
      }
    ],
    "graph": [
      "Entropy balance",
      "process progress",
      "entropy",
      "Entropy transfer",
      "Entropy generation"
    ]
  },
  "18": {
    "title": "Entropy of phase transitions and chemical reactions",
    "derivations": [
      {
        "title": "Entropy change of a reversible phase transition",
        "intro": "At the equilibrium transition temperature, the two phases coexist and the transition can proceed reversibly.",
        "steps": [
          "dS=δqrev/Ttr.",
          "At constant pressure, reversible transition heat is ΔHtr.",
          "Temperature remains Ttr during the first-order transition.",
          "Therefore ΔStr=ΔHtr/Ttr."
        ],
        "result": "ΔSfus=ΔHfus/Tfus and ΔSvap=ΔHvap/Tb.",
        "conditions": "Transition occurs reversibly at the equilibrium transition temperature and pressure."
      },
      {
        "title": "Reaction entropy from standard molar entropies",
        "intro": "Entropy is extensive and additive over stoichiometric amounts.",
        "steps": [
          "Write the balanced reaction Σνi Ai=0 with products νi>0 and reactants νi<0.",
          "Total product entropy is Σproducts νiS°i.",
          "Total reactant entropy is Σreactants |νi|S°i.",
          "Subtract to obtain ΔrS°=ΣiνiS°i."
        ],
        "result": "ΔrS°=ΣνiS°i, with physical states and stoichiometric coefficients included.",
        "conditions": "All values refer to the same temperature and standard-state convention."
      },
      {
        "title": "Trouton-type estimate",
        "intro": "For many non-associated liquids, molar entropy of vaporisation near the normal boiling point is similar.",
        "steps": [
          "ΔSvap≈constant for a homologous class.",
          "Then ΔHvap≈TbΔSvap.",
          "A higher normal boiling point generally implies larger ΔHvap within the class.",
          "Strong hydrogen bonding, association and unusual symmetry create exceptions."
        ],
        "result": "Trouton’s rule is an empirical estimate, not a universal law.",
        "conditions": "Use only for suitable non-associated liquids near their normal boiling points."
      },
      {
        "title": "van der Waals gas entropy change",
        "intro": "Use the Maxwell relation (∂S/∂V)T=(∂P/∂T)V.",
        "steps": [
          "For one mole, P=RT/(V−b)−a/V².",
          "(∂P/∂T)V=R/(V−b).",
          "At fixed T, dS=R dV/(V−b).",
          "Integrate: ΔS=R ln[(V2−b)/(V1−b)]."
        ],
        "result": "The excluded-volume correction replaces V by V−b in the isothermal entropy expression.",
        "conditions": "One-mole van der Waals model and isothermal endpoints."
      }
    ],
    "examples": [
      {
        "title": "Fusion entropy",
        "question": "A substance melts at 350 K with ΔHfus=8.75 kJ mol⁻¹.",
        "solution": "ΔSfus=8750/350=25.0 J mol⁻¹ K⁻¹."
      },
      {
        "title": "Reaction entropy",
        "question": "For A(g)+2B(g)→C(g), S° values are 200, 150 and 250 J mol⁻¹ K⁻¹.",
        "solution": "ΔrS°=250−[200+2(150)]=−250 J mol⁻¹ K⁻¹."
      }
    ],
    "graph": [
      "Entropy through a phase transition",
      "temperature T",
      "entropy S",
      "Heating within phase",
      "Transition jump"
    ]
  },
  "19": {
    "title": "Ideal-gas entropy equations and variable heat capacities",
    "derivations": [
      {
        "title": "Temperature–volume form",
        "intro": "Start from dS=δqrev/T and the First Law for a reversible ideal gas.",
        "steps": [
          "δqrev=dU+P dV.",
          "dU=nCV,m dT and P=nRT/V.",
          "dS=nCV,m dT/T+nR dV/V.",
          "Integrate: ΔS=n∫T1→T2 CV,m(T)dT/T+nR ln(V2/V1)."
        ],
        "result": "For constant CV,m, ΔS=nCV,m ln(T2/T1)+nR ln(V2/V1).",
        "conditions": "Fixed-composition ideal gas."
      },
      {
        "title": "Temperature–pressure form",
        "intro": "Use V=nRT/P, so dV/V=dT/T−dP/P.",
        "steps": [
          "Insert dV/V into dS=nCV,m dT/T+nR dV/V.",
          "dS=n(CV,m+R)dT/T−nR dP/P.",
          "Since CP,m=CV,m+R, dS=nCP,m dT/T−nR dP/P.",
          "Integrate between endpoints."
        ],
        "result": "ΔS=n∫CP,m(T)dT/T−nR ln(P2/P1).",
        "conditions": "Ideal gas."
      },
      {
        "title": "Polynomial heat-capacity integration",
        "intro": "Let CP,m=a+bT+cT².",
        "steps": [
          "CP,m/T=a/T+b+cT.",
          "Integrate from T1 to T2.",
          "∫a dT/T=a ln(T2/T1).",
          "∫b dT=b(T2−T1).",
          "∫cT dT=(c/2)(T2²−T1²)."
        ],
        "result": "ΔS at constant pressure is n[a ln(T2/T1)+bΔT+(c/2)(T2²−T1²)].",
        "conditions": "The polynomial fit is valid over the chosen temperature interval."
      },
      {
        "title": "Reversible adiabatic condition from entropy",
        "intro": "Set the ideal-gas entropy change to zero.",
        "steps": [
          "0=nCV,m ln(T2/T1)+nR ln(V2/V1).",
          "Divide by nCV,m.",
          "ln(T2/T1)=−(R/CV,m)ln(V2/V1).",
          "Exponentiate to obtain TV^(γ−1)=constant."
        ],
        "result": "The Poisson relation is exactly the zero-entropy-change condition for a reversible ideal-gas adiabat.",
        "conditions": "Constant heat capacities for constant γ."
      }
    ],
    "examples": [
      {
        "title": "Combined endpoint change",
        "question": "One mole of monatomic ideal gas changes from 300 K, 10 L to 450 K, 15 L. Find ΔS.",
        "solution": "ΔS=(3R/2)ln(1.5)+Rln(1.5)=(5R/2)ln1.5=8.43 J K⁻¹."
      },
      {
        "title": "Isobaric heating",
        "question": "Two moles with CP,m=29.1 J mol⁻¹ K⁻¹ are heated from 300 to 500 K at constant P.",
        "solution": "ΔS=nCP,m ln(500/300)=29.7 J K⁻¹."
      }
    ],
    "graph": [
      "Ideal-gas entropy surface",
      "temperature T",
      "entropy S",
      "Constant volume",
      "Constant pressure"
    ]
  },
  "20": {
    "title": "Entropy of mixing and thermal equilibration",
    "derivations": [
      {
        "title": "Ideal-gas entropy of mixing",
        "intro": "Before mixing, each gas occupies its own volume; after removing partitions, each expands into the total volume.",
        "steps": [
          "For component i, ΔSi=niR ln(Vtotal/Vi).",
          "At equal initial and final T and P, Vi/ Vtotal=ni/ntotal=xi.",
          "Thus Vtotal/Vi=1/xi.",
          "ΔSmix=−RΣni ln xi."
        ],
        "result": "ΔSmix=−RΣni lnxi>0 for distinct ideal gases.",
        "conditions": "Ideal gases, same initial T and P, no reaction."
      },
      {
        "title": "Gibbs energy of ideal mixing",
        "intro": "Ideal mixing has no enthalpy change.",
        "steps": [
          "ΔHmix=0.",
          "ΔGmix=ΔHmix−TΔSmix.",
          "Substitute ΔSmix=−RΣni lnxi.",
          "ΔGmix=RTΣni lnxi."
        ],
        "result": "ΔGmix<0 because 0<xi<1 and lnxi<0.",
        "conditions": "Ideal mixture at constant T and P."
      },
      {
        "title": "Maximum binary mixing entropy",
        "intro": "For one mole, ΔSmix=−R[x ln x+(1−x)ln(1−x)].",
        "steps": [
          "Differentiate with respect to x.",
          "d(ΔSmix/R)/dx=−lnx+ln(1−x).",
          "Set equal to zero: x=1−x.",
          "Therefore x=1/2.",
          "Second derivative is negative at x=1/2."
        ],
        "result": "Maximum molar entropy of binary ideal mixing is Rln2 at equimolar composition.",
        "conditions": "Fixed total amount and two distinct species."
      },
      {
        "title": "Final temperature in adiabatic thermal contact",
        "intro": "Two bodies exchange heat inside an insulated composite.",
        "steps": [
          "Energy conservation: m1c1(Tf−T1)+m2c2(Tf−T2)=0.",
          "Solve: Tf=(m1c1T1+m2c2T2)/(m1c1+m2c2).",
          "Entropy change: ΔS=m1c1 ln(Tf/T1)+m2c2 ln(Tf/T2).",
          "The total is positive unless T1=T2."
        ],
        "result": "Thermal equilibration conserves energy but generates entropy.",
        "conditions": "Constant heat capacities and no phase change."
      }
    ],
    "examples": [
      {
        "title": "Binary mixing",
        "question": "Mix 1 mol A with 3 mol B ideally. Find ΔSmix.",
        "solution": "−R[ln0.25+3ln0.75]=18.7 J K⁻¹."
      },
      {
        "title": "Thermal contact",
        "question": "Equal heat capacities at 300 K and 500 K are placed in thermal contact adiabatically.",
        "solution": "Tf=400 K; ΔS=C[ln(400/300)+ln(400/500)]=C ln(16/15)>0."
      }
    ],
    "graph": [
      "Binary entropy of mixing",
      "mole fraction x",
      "molar mixing entropy",
      "−R[xlnx+(1−x)ln(1−x)]",
      "Maximum at x=0.5"
    ]
  },
  "21": {
    "title": "Absolute entropy, reaction direction and Gibbs energy",
    "derivations": [
      {
        "title": "Surroundings entropy at constant temperature and pressure",
        "intro": "A large reservoir supplies or absorbs reaction heat without changing temperature.",
        "steps": [
          "At constant pressure, qsys=ΔHsys.",
          "The surroundings receive qsurr=−ΔHsys.",
          "ΔSsurr=qsurr/T.",
          "Therefore ΔSsurr=−ΔHsys/T."
        ],
        "result": "Exothermic reactions increase surroundings entropy; endothermic reactions decrease it.",
        "conditions": "Reservoir temperature constant and only PV work."
      },
      {
        "title": "Gibbs criterion from universe entropy",
        "intro": "Combine system and surroundings entropy at fixed T and P.",
        "steps": [
          "ΔSuniv=ΔSsys−ΔHsys/T.",
          "Multiply by −T: −TΔSuniv=ΔHsys−TΔSsys.",
          "Define ΔG=ΔH−TΔS.",
          "Therefore ΔG=−TΔSuniv."
        ],
        "result": "At fixed T and P: ΔG<0 spontaneous, ΔG=0 equilibrium, ΔG>0 non-spontaneous in the forward direction.",
        "conditions": "Closed system with only PV work and constant reservoir T and P."
      },
      {
        "title": "Temperature dependence of spontaneity",
        "intro": "Assume ΔH and ΔS are approximately constant.",
        "steps": [
          "ΔG(T)=ΔH−TΔS.",
          "Set ΔG=0 at the crossover.",
          "T*=ΔH/ΔS when the ratio is positive.",
          "Analyse signs of ΔH and ΔS to identify low- or high-temperature favourability."
        ],
        "result": "The crossover temperature is meaningful only when ΔH and ΔS have the same sign.",
        "conditions": "No phase change and weak temperature dependence of ΔH and ΔS."
      },
      {
        "title": "Standard reaction entropy",
        "intro": "Use absolute standard molar entropies.",
        "steps": [
          "Write the balanced reaction.",
          "Multiply each S° by its stoichiometric coefficient.",
          "Sum products and subtract reactants.",
          "ΔrS°=ΣνiS°i."
        ],
        "result": "Physical states are essential because their standard entropies differ greatly.",
        "conditions": "All data at the same temperature."
      }
    ],
    "examples": [
      {
        "title": "Gibbs direction",
        "question": "At 298 K, ΔH=25 kJ mol⁻¹ and ΔS=120 J mol⁻¹ K⁻¹.",
        "solution": "ΔG=25−298(0.120)=−10.8 kJ mol⁻¹, so the forward reaction is spontaneous."
      },
      {
        "title": "Low-temperature reaction",
        "question": "ΔH=−30 kJ mol⁻¹ and ΔS=−75 J mol⁻¹ K⁻¹.",
        "solution": "T*=400 K; ΔG<0 below 400 K."
      }
    ],
    "graph": [
      "Gibbs energy versus temperature",
      "temperature T",
      "reaction Gibbs energy ΔG",
      "ΔS>0 slope",
      "ΔS<0 slope"
    ]
  },
  "22": {
    "title": "Third Law, absolute entropy and residual disorder",
    "derivations": [
      {
        "title": "Absolute entropy from heat-capacity integration",
        "intro": "Begin with a perfect crystal at zero kelvin.",
        "steps": [
          "Third-Law reference: S(0)=0 for a pure perfect crystal with a unique ground state.",
          "Within one phase, dS=Cp dT/T at constant pressure.",
          "Integrate each phase interval.",
          "At each reversible first-order transition add ΔHtr/Ttr.",
          "Therefore S(T)=∫0→T Cp/T dT+ΣΔHtr/Ttr."
        ],
        "result": "Absolute entropy is built by a staircase of heat-capacity areas and transition jumps.",
        "conditions": "Use equilibrium heat capacities and include every transition."
      },
      {
        "title": "Debye low-temperature contribution",
        "intro": "For a non-metallic crystal at low temperature, Cp≈aT³.",
        "steps": [
          "S(T)=∫0→T Cp/T dT.",
          "Cp/T=aT².",
          "Integrate: S(T)=aT³/3.",
          "Thus S tends smoothly to zero as T³."
        ],
        "result": "The T³ law prevents divergence of the Third-Law entropy integral.",
        "conditions": "Temperature well below the Debye temperature and electronic contributions negligible."
      },
      {
        "title": "Residual entropy",
        "intro": "Suppose W0 equivalent configurations remain frozen at zero kelvin.",
        "steps": [
          "Multiplicity per particle is W0.",
          "For N particles, total multiplicity is W0^N.",
          "Sres=kB ln(W0^N)=NkB lnW0.",
          "Per mole, Sres=R lnW0."
        ],
        "result": "Frozen orientational disorder produces non-zero residual entropy.",
        "conditions": "Configurations are genuinely degenerate and kinetically trapped."
      },
      {
        "title": "Graphical entropy evaluation",
        "intro": "Plot Cp/T against T.",
        "steps": [
          "The area under Cp/T from T1 to T2 equals the entropy gained within the phase.",
          "A latent-heat transition contributes a finite jump ΔHtr/Ttr not represented by ordinary Cp away from the transition.",
          "Sum all areas and jumps.",
          "The final value is independent of the reversible route if equilibrium data are consistent."
        ],
        "result": "Absolute entropy is a measurable calorimetric state function.",
        "conditions": "Accurate extrapolation to 0 K and complete transition data."
      }
    ],
    "examples": [
      {
        "title": "Low-temperature entropy",
        "question": "Cp=0.012T³ J mol⁻¹ K⁻¹ below 10 K. Find S(10 K).",
        "solution": "S=aT³/3=0.012(1000)/3=4.0 J mol⁻¹ K⁻¹."
      },
      {
        "title": "Residual entropy",
        "question": "Each molecule has two frozen orientations.",
        "solution": "Sres=Rln2=5.76 J mol⁻¹ K⁻¹."
      }
    ],
    "graph": [
      "Third-Law entropy staircase",
      "temperature T",
      "absolute entropy S",
      "Heat-capacity rise",
      "Transition jump"
    ]
  },
  "23": {
    "title": "Entropy corrections with temperature, pressure and microstates",
    "derivations": [
      {
        "title": "Temperature correction of reaction entropy",
        "intro": "Differentiate the standard reaction entropy with temperature.",
        "steps": [
          "For each species, dS°/dT=Cp°/T.",
          "Apply stoichiometric summation.",
          "d(ΔrS°)/dT=ΔrCp°/T.",
          "Integrate: ΔrS°(T2)=ΔrS°(T1)+∫T1→T2 ΔrCp°(T)dT/T."
        ],
        "result": "For constant ΔrCp°, ΔrS°(T2)=ΔrS°(T1)+ΔrCp°ln(T2/T1).",
        "conditions": "No standard-state phase changes within the interval."
      },
      {
        "title": "Pressure correction for an ideal gas",
        "intro": "At constant temperature, use the ideal-gas entropy differential.",
        "steps": [
          "dS=−nR dP/P at constant T.",
          "Integrate from P1 to P2.",
          "ΔS=−nR ln(P2/P1).",
          "Compression raises pressure and lowers entropy."
        ],
        "result": "Isothermal ideal-gas entropy decreases logarithmically with pressure.",
        "conditions": "Ideal gas and fixed composition."
      },
      {
        "title": "Explicit microstate counting",
        "intro": "Distribute N distinguishable objects among cells with occupancies ni.",
        "steps": [
          "Multiplicity W=N!/Πni!.",
          "Boltzmann entropy S=kB lnW.",
          "For large numbers, Stirling approximation lnN!≈NlnN−N.",
          "The maximum W occurs near the most uniform allowed distribution."
        ],
        "result": "Macroscopic equilibrium corresponds overwhelmingly to the largest multiplicity.",
        "conditions": "The counting model must specify distinguishability and constraints."
      },
      {
        "title": "Helmholtz bridge at fixed temperature and volume",
        "intro": "For an isolated composite containing a system in a heat reservoir, convert entropy production into a system potential.",
        "steps": [
          "At fixed T,V, ΔSsurr=−qsys/T.",
          "With only non-expansion work absent and fixed V, qsys=ΔUsys.",
          "ΔSuniv=ΔSsys−ΔUsys/T.",
          "−TΔSuniv=ΔU−TΔS=ΔA."
        ],
        "result": "At fixed T and V, spontaneous change gives ΔA<0.",
        "conditions": "Closed system, constant reservoir temperature, fixed volume."
      }
    ],
    "examples": [
      {
        "title": "Reaction entropy correction",
        "question": "ΔrS°(300 K)=−40 J mol⁻¹ K⁻¹ and constant ΔrCp°=20 J mol⁻¹ K⁻¹. Find at 600 K.",
        "solution": "ΔrS°=−40+20ln2=−26.1 J mol⁻¹ K⁻¹."
      },
      {
        "title": "Pressure entropy",
        "question": "One mole is compressed isothermally from 1 bar to 10 bar.",
        "solution": "ΔS=−Rln10=−19.15 J mol⁻¹ K⁻¹."
      }
    ],
    "graph": [
      "Entropy correction",
      "temperature or pressure",
      "entropy change",
      "Temperature correction",
      "Pressure correction"
    ]
  },
  "24": {
    "title": "Helmholtz and Gibbs free energies as Legendre transforms",
    "derivations": [
      {
        "title": "Helmholtz differential",
        "intro": "Define A=U−TS and differentiate.",
        "steps": [
          "dA=dU−T dS−S dT.",
          "For fixed composition, dU=T dS−P dV.",
          "Substitute: dA=−S dT−P dV.",
          "Therefore S=−(∂A/∂T)V and P=−(∂A/∂V)T."
        ],
        "result": "Natural variables of A are T and V.",
        "conditions": "Simple compressible system, fixed composition."
      },
      {
        "title": "Gibbs differential",
        "intro": "Define G=H−TS=U+PV−TS.",
        "steps": [
          "dG=dU+P dV+V dP−T dS−S dT.",
          "Insert dU=T dS−P dV.",
          "Cancel T dS and P dV terms.",
          "dG=−S dT+V dP."
        ],
        "result": "Natural variables of G are T and P.",
        "conditions": "Fixed composition; add Σμi dni for composition changes."
      },
      {
        "title": "Spontaneity criteria",
        "intro": "Relate each potential to universe entropy under its natural constraints.",
        "steps": [
          "At fixed T,V: ΔA=−TΔSuniv.",
          "Therefore ΔA≤0, with equality at equilibrium.",
          "At fixed T,P: ΔG=−TΔSuniv.",
          "Therefore ΔG≤0, with equality at equilibrium."
        ],
        "result": "Choose the potential whose natural variables match the imposed constraints.",
        "conditions": "Closed system and only the relevant mechanical work assumptions."
      },
      {
        "title": "Maximum work statements",
        "intro": "Separate PV work from useful non-PV work.",
        "steps": [
          "At fixed T,V, −ΔA equals maximum total work by the system.",
          "At fixed T,P, −ΔG equals maximum non-PV work by the system.",
          "Any irreversibility reduces obtainable work by T0Sgen.",
          "Equality requires a reversible process."
        ],
        "result": "Free-energy decreases measure work potential, not stored heat.",
        "conditions": "Specified environmental T and P and consistent sign convention."
      }
    ],
    "examples": [
      {
        "title": "Natural potential",
        "question": "Which potential governs spontaneous change in a rigid vessel held at constant temperature?",
        "solution": "Helmholtz energy A; equilibrium is its minimum at fixed T,V."
      },
      {
        "title": "Maximum electrical work",
        "question": "A cell reaction has ΔG=−150 kJ mol⁻¹. What is the maximum electrical work by the cell?",
        "solution": "150 kJ mol⁻¹ under reversible constant-T,P operation."
      }
    ],
    "graph": [
      "Free-energy minimum",
      "reaction coordinate ξ",
      "free energy",
      "Helmholtz/Gibbs profile",
      "Equilibrium minimum"
    ]
  },
  "25": {
    "title": "Gibbs energy, maximum useful work and driving force",
    "derivations": [
      {
        "title": "Maximum non-expansion work at constant T and P",
        "intro": "Start from the First and Second Laws and split work into PV and non-PV parts.",
        "steps": [
          "dU=δq+δwPV+δwnonPV.",
          "For a reversible process, δqrev=T dS and δwPV,rev=−P dV.",
          "Thus δwnonPV,rev=dU−T dS+P dV.",
          "At constant T and P, dG=dU+P dV−T dS.",
          "Therefore δwnonPV,rev=dG for work on the system."
        ],
        "result": "Maximum non-PV work by the system is −ΔG; maximum non-PV work on the system is ΔG.",
        "conditions": "Reversible process, constant T and P, chemistry sign convention."
      },
      {
        "title": "Gibbs driving force along a reaction coordinate",
        "intro": "Let ξ measure reaction progress at fixed T and P.",
        "steps": [
          "dG=(∂G/∂ξ)T,P dξ.",
          "Define reaction Gibbs energy ΔrG=(∂G/∂ξ)T,P.",
          "If ΔrG<0, increasing ξ lowers G and forward reaction is favoured.",
          "If ΔrG>0, decreasing ξ lowers G and reverse reaction is favoured.",
          "At equilibrium ΔrG=0 and stable curvature is positive."
        ],
        "result": "The sign of ΔrG gives the instantaneous reaction direction.",
        "conditions": "Other independent reaction coordinates held fixed."
      },
      {
        "title": "Temperature crossover from ΔG=ΔH−TΔS",
        "intro": "For approximately constant ΔH and ΔS, solve the linear temperature dependence.",
        "steps": [
          "ΔG(T)=ΔH−TΔS.",
          "At crossover, ΔG=0.",
          "T*=ΔH/ΔS.",
          "A physically positive T* exists when ΔH and ΔS have the same sign."
        ],
        "result": "ΔH<0,ΔS<0 favours low T; ΔH>0,ΔS>0 favours high T.",
        "conditions": "No phase transition and modest heat-capacity variation."
      },
      {
        "title": "Ideal-gas Gibbs change at constant temperature",
        "intro": "Use dG=VdP at constant T.",
        "steps": [
          "For n moles ideal gas, V=nRT/P.",
          "dG=nRT dP/P.",
          "Integrate from P1 to P2.",
          "ΔG=nRT ln(P2/P1)."
        ],
        "result": "Isothermal compression raises ideal-gas Gibbs energy.",
        "conditions": "Pure ideal gas and fixed amount."
      }
    ],
    "examples": [
      {
        "title": "Useful work",
        "question": "A reaction has ΔG=−92 kJ mol⁻¹. Find maximum non-PV work by the system.",
        "solution": "92 kJ mol⁻¹."
      },
      {
        "title": "Crossover temperature",
        "question": "ΔH=18 kJ mol⁻¹ and ΔS=60 J mol⁻¹ K⁻¹.",
        "solution": "T*=300 K; forward reaction is favoured above 300 K."
      },
      {
        "title": "Isothermal compression",
        "question": "One mole ideal gas is compressed from 1 bar to 5 bar at 298 K.",
        "solution": "ΔG=RTln5=3.99 kJ mol⁻¹."
      }
    ],
    "graph": [
      "Gibbs driving-force landscape",
      "reaction coordinate ξ",
      "Gibbs energy G",
      "Forward region",
      "Equilibrium minimum"
    ]
  },
  "26": {
    "title": "Pressure and temperature dependence of Gibbs energy",
    "derivations": [
      {
        "title": "Fundamental Gibbs differential with composition",
        "intro": "Differentiate G for a multicomponent system.",
        "steps": [
          "Fundamental relation: dU=T dS−P dV+Σμi dni.",
          "G=U+PV−TS.",
          "Differentiate and substitute dU.",
          "dG=−S dT+V dP+Σμi dni."
        ],
        "result": "At fixed composition, dG=−S dT+V dP.",
        "conditions": "Single equilibrium phase; additional field terms may be required."
      },
      {
        "title": "Pressure integration",
        "intro": "At constant T and composition, dG=VdP.",
        "steps": [
          "General form: G(P2)−G(P1)=∫P1→P2 V(T,P)dP.",
          "For an incompressible condensed phase, V≈constant.",
          "Then ΔG≈V(P2−P1).",
          "For an ideal gas, V=nRT/P and ΔG=nRTln(P2/P1)."
        ],
        "result": "Pressure strongly affects gases and only weakly affects ordinary condensed phases.",
        "conditions": "Use the correct molar or total volume consistently."
      },
      {
        "title": "Temperature slope and curvature",
        "intro": "At constant pressure, dG=−S dT.",
        "steps": [
          "(∂G/∂T)P=−S.",
          "Differentiate again: (∂²G/∂T²)P=−(∂S/∂T)P.",
          "Since (∂S/∂T)P=Cp/T.",
          "Therefore (∂²G/∂T²)P=−Cp/T<0 for stable matter."
        ],
        "result": "G decreases with T and is concave downward at constant pressure.",
        "conditions": "Positive heat capacity and stable equilibrium."
      },
      {
        "title": "Gibbs–Helmholtz equation",
        "intro": "Start with G/T and differentiate at constant pressure.",
        "steps": [
          "d(G/T)/dT=(T(∂G/∂T)P−G)/T².",
          "Use (∂G/∂T)P=−S.",
          "Numerator=−TS−G=−(G+TS)=−H.",
          "Thus [∂(G/T)/∂T]P=−H/T²."
        ],
        "result": "For a reaction, [∂(ΔrG°/T)/∂T]P=−ΔrH°/T².",
        "conditions": "Fixed composition for the pure-property form; standard reaction states for reaction form."
      }
    ],
    "examples": [
      {
        "title": "Condensed-phase pressure effect",
        "question": "A liquid has Vm=18 cm³ mol⁻¹. Estimate ΔGm for a 100 MPa pressure increase.",
        "solution": "ΔG≈VmΔP=18×10⁻⁶×10⁸=1.8 kJ mol⁻¹."
      },
      {
        "title": "Entropy from slope",
        "question": "At fixed pressure, Gm decreases 20 J mol⁻¹ when T rises 0.10 K.",
        "solution": "Sm=−(∂G/∂T)P≈200 J mol⁻¹ K⁻¹."
      }
    ],
    "graph": [
      "Gibbs energy with T and P",
      "temperature or pressure",
      "Gibbs energy G",
      "G versus T",
      "G versus P"
    ]
  },
  "27": {
    "title": "Chemical potential, ideal gases and standard states",
    "derivations": [
      {
        "title": "Chemical potential as a partial molar Gibbs energy",
        "intro": "Allow composition to vary in dG.",
        "steps": [
          "dG=−S dT+V dP+Σμi dni.",
          "At constant T,P and all nj≠i, μi=(∂G/∂ni)T,P,nj.",
          "Because G is extensive, Euler’s theorem gives G=Σniμi.",
          "The chemical potential is the Gibbs energy cost of adding matter infinitesimally."
        ],
        "result": "μi is the partial molar Gibbs energy.",
        "conditions": "Homogeneous equilibrium phase and differentiable extensive G."
      },
      {
        "title": "Ideal-gas chemical potential",
        "intro": "For a pure ideal gas, dμ=Vm dP at constant T.",
        "steps": [
          "Vm=RT/P.",
          "dμ=RT dP/P.",
          "Integrate from standard pressure P° to P.",
          "μ(T,P)=μ°(T)+RTln(P/P°)."
        ],
        "result": "The logarithm uses the dimensionless activity a=P/P°.",
        "conditions": "Ideal gas."
      },
      {
        "title": "Ideal-gas component in a mixture",
        "intro": "Component i behaves as an ideal gas at its partial pressure Pi.",
        "steps": [
          "Pi=yiP.",
          "μi=μi°+RTln(Pi/P°).",
          "Therefore μi=μi°+RTln(yiP/P°).",
          "At fixed total P, dilution lowers μi through RTlnyi."
        ],
        "result": "Chemical potential is lowered by mixing.",
        "conditions": "Ideal-gas mixture."
      },
      {
        "title": "Pure condensed-phase pressure correction",
        "intro": "For a pure liquid or solid at fixed T, dμ=Vm dP.",
        "steps": [
          "Integrate μ(P)=μ(P°)+∫P°→P Vm dP.",
          "If Vm is nearly constant, μ≈μ°+Vm(P−P°).",
          "The activity of the pure standard condensed phase is assigned one.",
          "Its contribution therefore disappears from an equilibrium quotient."
        ],
        "result": "Pressure correction of condensed-phase μ is usually small but not always negligible at very high pressure.",
        "conditions": "No phase change and weak compressibility."
      }
    ],
    "examples": [
      {
        "title": "Gas chemical potential shift",
        "question": "Find μ−μ° for an ideal gas at 0.10 bar and 298 K with P°=1 bar.",
        "solution": "RTln0.10=−5.71 kJ mol⁻¹."
      },
      {
        "title": "Mixture component",
        "question": "At 1 bar total pressure, yi=0.20. Find mixing contribution RTlnyi at 300 K.",
        "solution": "8.314×300ln0.20=−4.01 kJ mol⁻¹."
      }
    ],
    "graph": [
      "Chemical potential of an ideal gas",
      "pressure P",
      "chemical potential μ",
      "μ°+RTln(P/P°)",
      "Standard-state level"
    ]
  },
  "28": {
    "title": "Gibbs energy of mixing, chemical potentials and Raoult’s law",
    "derivations": [
      {
        "title": "Gibbs energy of ideal-gas mixing",
        "intro": "Compare separated pure gases at the final total pressure with the mixed state.",
        "steps": [
          "After mixing, component i has partial pressure Pi=yiP.",
          "μi(mix)=μi°+RTln(yiP/P°).",
          "Before mixing at pressure P, μi(pure)=μi°+RTln(P/P°).",
          "Difference per mole i is RTlnyi.",
          "Therefore ΔGmix=RTΣni ln yi."
        ],
        "result": "ΔGmix<0 for genuine mixing of distinct ideal gases.",
        "conditions": "Ideal gases, constant T and P."
      },
      {
        "title": "Entropy and enthalpy of ideal mixing",
        "intro": "Use the temperature derivative or direct expansion argument.",
        "steps": [
          "ΔGmix=RTΣni lnxi.",
          "For ideal mixing, ΔHmix=0.",
          "ΔSmix=(ΔHmix−ΔGmix)/T.",
          "Therefore ΔSmix=−RΣni lnxi."
        ],
        "result": "Ideal mixing is driven entirely by configurational entropy.",
        "conditions": "Ideal solution or ideal-gas mixture under the corresponding standard-state convention."
      },
      {
        "title": "Raoult’s law from chemical-potential equality",
        "intro": "At vapour–liquid equilibrium, solvent chemical potentials are equal.",
        "steps": [
          "Ideal liquid: μi(l)=μi*(l)+RTlnxi.",
          "Ideal vapour: μi(g)=μi°(g)+RTln(Pi/P°).",
          "For pure solvent equilibrium at the same T: μi*(l)=μi°(g)+RTln(Pi*/P°).",
          "Subtract the pure relation from the solution relation.",
          "RTlnxi=RTln(Pi/Pi*), hence Pi=xiPi*."
        ],
        "result": "Raoult’s law follows from the entropy lowering of liquid chemical potential.",
        "conditions": "Ideal liquid solution and ideal vapour."
      },
      {
        "title": "Gibbs–Duhem relation",
        "intro": "Differentiate Euler’s relation G=Σniμi.",
        "steps": [
          "dG=Σμi dni+Σni dμi.",
          "Fundamental differential at constant T,P is dG=Σμi dni.",
          "Subtract the two expressions.",
          "Σni dμi=0, or Σxi dμi=0."
        ],
        "result": "Chemical potentials in a mixture cannot vary independently.",
        "conditions": "Constant T and P."
      }
    ],
    "examples": [
      {
        "title": "Ideal mixing Gibbs energy",
        "question": "Mix 1 mol A and 1 mol B at 298 K.",
        "solution": "ΔGmix=2RTln0.5=−3.44 kJ."
      },
      {
        "title": "Raoult pressure",
        "question": "A solvent has x=0.75 and pure vapour pressure 120 mmHg.",
        "solution": "P=0.75×120=90 mmHg."
      },
      {
        "title": "Vapour composition",
        "question": "xA=0.30, PA*=200 mmHg, PB*=80 mmHg. Find yA.",
        "solution": "PA=60, PB=56, P=116 mmHg; yA=60/116=0.517."
      }
    ],
    "graph": [
      "Ideal mixing free energy",
      "mole fraction x",
      "molar ΔGmix",
      "RT[xlnx+(1−x)ln(1−x)]",
      "Minimum near x=0.5"
    ]
  },
  "29": {
    "title": "Reaction Gibbs energy, reaction quotient and equilibrium constant",
    "derivations": [
      {
        "title": "Reaction Gibbs energy from chemical potentials",
        "intro": "For reaction progress dξ, dni=νi dξ.",
        "steps": [
          "At constant T,P, dG=Σμi dni.",
          "Substitute dni=νi dξ.",
          "dG=(Σνiμi)dξ.",
          "Define ΔrG=Σνiμi=(∂G/∂ξ)T,P."
        ],
        "result": "The sign of ΔrG gives the direction of spontaneous reaction progress.",
        "conditions": "One independent reaction coordinate or others held fixed."
      },
      {
        "title": "Derivation of ΔrG=ΔrG°+RTlnQ",
        "intro": "Write each chemical potential in activity form.",
        "steps": [
          "μi=μi°+RTlnai.",
          "ΔrG=Σνiμi.",
          "ΔrG=Σνiμi°+RTΣνi lnai.",
          "Define ΔrG°=Σνiμi° and Q=Πai^νi.",
          "Since Σνi lnai=lnQ, ΔrG=ΔrG°+RTlnQ."
        ],
        "result": "Current composition enters only through the dimensionless reaction quotient Q.",
        "conditions": "Activities must match the chosen standard states."
      },
      {
        "title": "Equilibrium relation between ΔrG° and K",
        "intro": "At equilibrium, ΔrG=0 and Q=K.",
        "steps": [
          "0=ΔrG°+RTlnK.",
          "Rearrange: ΔrG°=−RTlnK.",
          "Therefore K=exp(−ΔrG°/RT).",
          "Also ΔrG=RTln(Q/K)."
        ],
        "result": "Q<K drives forward reaction; Q>K drives reverse reaction.",
        "conditions": "Thermodynamic equilibrium at fixed T."
      },
      {
        "title": "Kp–Kc relation for ideal gases",
        "intro": "Use ai=Pi/P° and Pi=ciRT for each gas.",
        "steps": [
          "Kp=Π(Pi/P°)^νi.",
          "Substitute Pi=ciRT.",
          "Kp=Π(ci/c°)^νi × [(RTc°)/P°]^Δν.",
          "With compatible textbook concentration conventions, Kp=Kc(RT)^Δngas."
        ],
        "result": "The dimensional-looking shortcut depends on the standard-state convention; thermodynamic K itself is dimensionless.",
        "conditions": "Ideal gases and consistent definitions of Kp and Kc."
      }
    ],
    "examples": [
      {
        "title": "Direction test",
        "question": "At a state Q=0.020 and K=50.",
        "solution": "Q/K=4×10⁻⁴, so ΔrG=RTln(Q/K)<0 and forward reaction is favoured."
      },
      {
        "title": "Equilibrium constant",
        "question": "At 298 K, ΔrG°=−17.1 kJ mol⁻¹.",
        "solution": "lnK=17100/(RT)=6.90, so K≈9.9×10²."
      },
      {
        "title": "Heterogeneous quotient",
        "question": "Write Q for CaCO3(s)⇌CaO(s)+CO2(g).",
        "solution": "Pure solids have activity one, so Q=PCO2/P°."
      }
    ],
    "graph": [
      "Reaction direction from Q and K",
      "ln(Q/K)",
      "reaction Gibbs energy ΔrG",
      "Forward region",
      "Reverse region"
    ]
  },
  "30": {
    "title": "van’t Hoff equation, phase equilibrium and stability",
    "derivations": [
      {
        "title": "Differential van’t Hoff equation",
        "intro": "Combine ΔrG°=−RTlnK with the Gibbs–Helmholtz equation.",
        "steps": [
          "ΔrG°/T=−RlnK.",
          "Differentiate at constant pressure: ∂(ΔrG°/T)/∂T=−R dlnK/dT.",
          "Gibbs–Helmholtz gives the left side as −ΔrH°/T².",
          "Therefore dlnK/dT=ΔrH°/(RT²)."
        ],
        "result": "Endothermic reactions generally have K increasing with T; exothermic reactions have K decreasing with T.",
        "conditions": "Standard states fixed; ΔrH° evaluated at the temperature."
      },
      {
        "title": "Integrated van’t Hoff equation",
        "intro": "Assume ΔrH° is constant over the interval.",
        "steps": [
          "Integrate dlnK=ΔrH° dT/(RT²).",
          "∫T1→T2 dT/T²=−1/T2+1/T1.",
          "ln(K2/K1)=−ΔrH°/R(1/T2−1/T1).",
          "A plot of lnK versus 1/T has slope −ΔrH°/R."
        ],
        "result": "Two-temperature van’t Hoff equation follows from constant reaction enthalpy.",
        "conditions": "ΔrCp° small enough that ΔrH° is effectively constant."
      },
      {
        "title": "Clapeyron equation",
        "intro": "At phase coexistence, chemical potentials of phases α and β remain equal along the boundary.",
        "steps": [
          "dμα=−S̄α dT+V̄α dP.",
          "dμβ=−S̄β dT+V̄β dP.",
          "Set dμα=dμβ.",
          "(V̄β−V̄α)dP=(S̄β−S̄α)dT.",
          "Use ΔStr=ΔHtr/T."
        ],
        "result": "dP/dT=ΔHtr/(TΔVtr).",
        "conditions": "Equilibrium coexistence line of a first-order transition."
      },
      {
        "title": "Clausius–Clapeyron approximation",
        "intro": "For liquid–vapour equilibrium, vapour volume dominates and vapour is ideal.",
        "steps": [
          "ΔVvap≈Vg=RT/P per mole.",
          "Insert into Clapeyron: dP/dT=ΔHvap P/(RT²).",
          "Divide by P: dlnP/dT=ΔHvap/(RT²).",
          "For constant ΔHvap, ln(P2/P1)=−ΔHvap/R(1/T2−1/T1)."
        ],
        "result": "Vapour pressure rises exponentially with temperature.",
        "conditions": "Ideal vapour, negligible liquid molar volume, constant ΔHvap over the interval."
      },
      {
        "title": "Stability versus kinetics",
        "intro": "Thermodynamic stability concerns potential minima; kinetics concerns barriers.",
        "steps": [
          "At equilibrium along coordinate ξ, (∂G/∂ξ)T,P=0.",
          "Stable equilibrium requires (∂²G/∂ξ²)T,P>0.",
          "A metastable state is a local minimum separated by an activation barrier.",
          "A catalyst lowers the barrier but leaves reactant and product G values and K unchanged."
        ],
        "result": "Thermodynamics predicts direction and equilibrium; kinetics predicts rate.",
        "conditions": "Specified T, P and composition constraints."
      }
    ],
    "examples": [
      {
        "title": "van’t Hoff calculation",
        "question": "K1=4.0 at 300 K and ΔrH°=20 kJ mol⁻¹. Estimate K2 at 350 K.",
        "solution": "ln(K2/4)=−20000/8.314(1/350−1/300)=1.145, so K2≈12.6."
      },
      {
        "title": "Vapour-pressure enthalpy",
        "question": "A plot of lnP versus 1/T has slope −4800 K. Find ΔHvap.",
        "solution": "ΔHvap=−R×slope=39.9 kJ mol⁻¹."
      },
      {
        "title": "Phase-boundary sign",
        "question": "Water has ΔVfus<0. What is the sign of dP/dT for melting?",
        "solution": "ΔHfus>0 and T>0, so the Clapeyron slope is negative."
      }
    ],
    "graph": [
      "Equilibrium temperature dependence",
      "inverse temperature 1/T",
      "ln K or ln P",
      "van’t Hoff line",
      "Clausius–Clapeyron line"
    ]
  }
};

function RelationGraph({ part, graph }: { part: number; graph: PartData["graph"] }) {
  const [title, xLabel, yLabel, curveA, curveB] = graph;
  const id = `thermo-derivation-${part}`;
  const variants = [
    ["M90 430 C245 355 350 240 560 150 C725 80 845 115 1040 55", "M90 460 C275 425 410 360 560 315 C735 265 875 215 1040 165"],
    ["M90 440 C280 395 390 335 540 245 C700 150 865 95 1040 80", "M90 150 C300 175 475 240 625 310 C790 385 920 420 1040 445"],
    ["M90 440 C255 330 400 300 550 220 C710 135 860 120 1040 70", "M90 430 C300 425 470 400 650 350 C820 305 930 240 1040 170"],
  ];
  const [pathA, pathB] = variants[part % variants.length];
  return (
    <figure className="my-6 min-w-0 border-y border-white/10 py-5">
      <svg viewBox="0 0 1120 560" role="img" aria-labelledby={`${id}-title ${id}-desc`} className="h-auto w-full max-w-5xl">
        <title id={`${id}-title`}>{title}</title>
        <desc id={`${id}-desc`}>Original thermodynamic relation graph comparing {curveA} and {curveB}.</desc>
        <rect width="1120" height="560" rx="28" fill="#020617" />
        <line x1="90" y1="470" x2="1055" y2="470" stroke="#64748b" strokeWidth="3" />
        <line x1="90" y1="470" x2="90" y2="55" stroke="#64748b" strokeWidth="3" />
        <path d={pathA} fill="none" stroke="#22d3ee" strokeWidth="8" />
        <path d={pathB} fill="none" stroke="#fbbf24" strokeWidth="7" strokeDasharray="16 11" />
        <text x="570" y="530" fill="#cbd5e1" fontSize="23" textAnchor="middle">{xLabel}</text>
        <text x="28" y="270" fill="#cbd5e1" fontSize="23" textAnchor="middle" transform="rotate(-90 28 270)">{yLabel}</text>
        <circle cx="760" cy="82" r="7" fill="#22d3ee" />
        <text x="778" y="90" fill="#a5f3fc" fontSize="19">{curveA}</text>
        <circle cx="760" cy="118" r="7" fill="#fbbf24" />
        <text x="778" y="126" fill="#fde68a" fontSize="19">{curveB}</text>
      </svg>
      <figcaption className="mt-2 text-sm leading-6 text-slate-400">{title}. The curves are schematic; equations and validity conditions determine the quantitative result.</figcaption>
    </figure>
  );
}

export default function ThermodynamicsCompleteDerivations({ part }: { part: number }) {
  const data = DATA[part];
  if (!data) return null;
  return (
    <section className="border-y border-cyan-300/20 py-8" data-complete-derivations={part}>
      <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300">Complete theory and derivations</p>
      <h2 className="mt-2 text-3xl font-black tracking-tight text-white md:text-4xl">{data.title}</h2>
      <p className="mt-3 max-w-5xl leading-7 text-slate-300">Every relation below is developed from its assumptions through intermediate mathematics to the final usable result.</p>
      <RelationGraph part={part} graph={data.graph} />
      <div className="space-y-8">
        {data.derivations.map((derivation, index) => (
          <article key={derivation.title} className="border-b border-white/10 pb-7 last:border-b-0">
            <h3 className="text-xl font-black text-white">{index + 1}. {derivation.title}</h3>
            <p className="mt-2 leading-7 text-slate-300">{derivation.intro}</p>
            <div className="mt-3 space-y-1.5 border-l-2 border-cyan-400/40 pl-4 font-mono text-[15px] leading-7 text-slate-100">
              {derivation.steps.map((step) => <p key={step}>{step}</p>)}
            </div>
            <p className="mt-3 leading-7 text-emerald-200"><strong>Result:</strong> {derivation.result}</p>
            <p className="mt-1 leading-7 text-amber-100"><strong>Validity:</strong> {derivation.conditions}</p>
          </article>
        ))}
      </div>
      <div className="mt-8 border-t border-white/10 pt-6">
        <h3 className="text-2xl font-black text-white">Complete worked examples</h3>
        <div className="mt-4 space-y-6">
          {data.examples.map((example, index) => (
            <article key={example.title} className="border-b border-white/10 pb-5 last:border-b-0">
              <h4 className="font-black text-white">Example {index + 1} — {example.title}</h4>
              <p className="mt-2 leading-7 text-slate-300">{example.question}</p>
              <p className="mt-2 leading-7 text-emerald-200"><strong>Solution:</strong> {example.solution}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
