import type { SolutionPart } from "./types";

export const part07: SolutionPart = {
  "number": 7,
  "slug": "07-pxy-diagrams-and-lever-rule",
  "shortTitle": "P–x–y & Lever Rule",
  "title": "Pressure–Composition Diagrams and the Lever Rule",
  "subtitle": "Construction of bubble and dew curves, phase-field identification, tie lines and quantitative phase fractions.",
  "sourcePages": "28–32",
  "objectives": [
    "Construct an ideal P–x–y diagram.",
    "Distinguish bubble and dew curves.",
    "Locate one-phase and two-phase regions.",
    "Use tie lines and the lever rule.",
    "Relate diagram geometry to algebraic equilibrium equations."
  ],
  "blocks": [
    {
      "kind": "theory",
      "title": "Bubble curve on a P–x diagram",
      "paragraphs": [
        "At fixed temperature, the bubble pressure is a linear function of liquid composition for an ideal binary. Each point on the curve represents a liquid of composition x that is just beginning to boil.",
        "If B is more volatile than A, the pure-B endpoint lies at the higher pressure. Above the bubble curve, pressure is high enough to keep the system entirely liquid."
      ],
      "equations": [
        "P_bubble=x_Ap_A°+(1−x_A)p_B°"
      ],
      "sourcePages": "28–31"
    },
    {
      "kind": "derivation",
      "title": "Dew curve expressed in vapour composition",
      "steps": [
        "At the dew point, xᵢ=yᵢP/pᵢ°.",
        "Apply Σxᵢ=1.",
        "For a binary mixture, solve for P as a harmonic-type composition expression."
      ],
      "result": "P_dew = 1 / (y_A/p_A° + y_B/p_B°)",
      "assumptions": [
        "Ideal liquid and vapour.",
        "Fixed temperature."
      ],
      "sourcePages": "29–31",
      "visual": "phase-envelope"
    },
    {
      "kind": "theory",
      "title": "Reading the combined P–x–y envelope",
      "paragraphs": [
        "The upper curve is the bubble curve and the lower curve is the dew curve when pressure is plotted vertically at fixed temperature. Above the upper curve the system is liquid; below the lower curve it is vapour; between the curves both phases coexist.",
        "A horizontal tie line at the chosen pressure intersects the bubble curve at liquid composition x and the dew curve at vapour composition y. These endpoints are connected by equilibrium, not by an arbitrary interpolation."
      ],
      "sourcePages": "29–32"
    },
    {
      "kind": "example",
      "number": "7.1",
      "title": "Coordinates of a tie line",
      "question": "At a temperature where p_A°=40 kPa and p_B°=100 kPa, a system is held at P=70 kPa. Determine equilibrium liquid and vapour compositions.",
      "steps": [
        "Bubble relation: 70=x_A(40)+(1−x_A)(100).",
        "x_A=(100−70)/(100−40)=0.500.",
        "y_A=x_Ap_A°/P=0.500×40/70=0.2857.",
        "Thus x_B=0.500 and y_B=0.7143."
      ],
      "answer": "Tie-line endpoints are x_A=0.500 and y_A=0.2857.",
      "sourcePages": "29–31",
      "transformation": "Pure pressures and system pressure changed."
    },
    {
      "kind": "example",
      "number": "7.2",
      "title": "Phase fractions from a diagram",
      "question": "At the conditions of Question 7.1, the overall composition is z_A=0.38 and the total amount is 8.0 mol. Find phase fractions and moles.",
      "steps": [
        "V/n=(z−x)/(y−x)=(0.38−0.50)/(0.2857−0.50)=0.560.",
        "L/n=0.440.",
        "V=8.0×0.560=4.48 mol and L=3.52 mol."
      ],
      "answer": "56.0% vapour and 44.0% liquid; V=4.48 mol and L=3.52 mol.",
      "sourcePages": "31–32",
      "transformation": "Overall composition and total amount changed."
    },
    {
      "kind": "example",
      "number": "7.3",
      "title": "Determine whether a state is single phase",
      "question": "At the temperature of Question 7.1, a closed mixture has z_A=0.65. Classify its phase at P=55 kPa, 70 kPa and 85 kPa.",
      "steps": [
        "For z_A=0.65, bubble pressure=0.65×40+0.35×100=61 kPa.",
        "Dew pressure=1/(0.65/40+0.35/100)=50.63 kPa.",
        "At 55 kPa the pressure lies between dew and bubble pressures, so two phases coexist.",
        "At 70 and 85 kPa pressure exceeds bubble pressure, so the system is liquid."
      ],
      "answer": "55 kPa: liquid+vapour; 70 kPa and 85 kPa: liquid.",
      "sourcePages": "28–32",
      "transformation": "Converted diagram-region interpretation into a numerical classification question."
    },
    {
      "kind": "derivation",
      "title": "Lever rule from component balance",
      "steps": [
        "Let total moles n=L+V.",
        "Component-A balance is nz=Lx+Vy.",
        "Replace L by n−V and rearrange.",
        "Divide by n."
      ],
      "result": "V/n=(z−x)/(y−x); L/n=(y−z)/(y−x)",
      "assumptions": [
        "Closed system.",
        "Only two equilibrium phases.",
        "Compositions are mole fractions of the same component."
      ],
      "sourcePages": "31–32"
    },
    {
      "kind": "reference",
      "title": "Geometric meaning of the lever rule",
      "paragraphs": [
        "The overall-composition point is the centre of mass of the two endpoint compositions weighted by phase amounts. Consequently, the phase amount is proportional to the length of the tie-line arm opposite that phase.",
        "This is a general result used in liquid–vapour, liquid–liquid and solid–liquid phase diagrams."
      ],
      "sourceLabel": "Supplemental phase-diagram interpretation."
    },
    {
      "kind": "reference",
      "title": "Tie lines and equilibrium endpoints",
      "paragraphs": [
        "A tie line joins compositions of phases that coexist at one temperature and pressure. Every overall composition between its endpoints separates into those same phase compositions but in different amounts.",
        "Moving the overall composition along a fixed tie line changes only L/V, not x or y. Changing pressure or temperature moves the tie line itself and changes equilibrium compositions.",
        "This distinction is essential when reading diagrams: the overall point is not another equilibrium phase composition."
      ],
      "sourceLabel": "Supplemental expansion synthesised from Atkins, Monk, Mortimer, Petrucci, Zumdahl and advanced coaching-level physical chemistry."
    },
    {
      "kind": "reference",
      "title": "Graph construction from equations",
      "paragraphs": [
        "For an ideal binary at fixed temperature, calculate bubble pressure directly for a grid of x values. For each bubble point, calculate y=xp_A°/P and plot the same pressure against y to generate the dew curve.",
        "The endpoints of both curves coincide at pure components. Any plotted curve that fails to meet the pure vapour pressures at x or y equal to zero and one is inconsistent.",
        "Constructing a small table is often safer than relying on memory about curvature."
      ],
      "sourceLabel": "Supplemental expansion synthesised from Atkins, Monk, Mortimer, Petrucci, Zumdahl and advanced coaching-level physical chemistry."
    },
    {
      "kind": "reference",
      "title": "Phase-diagram consistency checks",
      "paragraphs": [
        "The more volatile component must be enriched in the vapour. Therefore, at any tie line, its y must exceed its x. If a calculated result violates this, the component labels or pressure ordering were likely reversed.",
        "The overall composition must lie between the two phase compositions. Lever-rule fractions must be between zero and one and sum to one.",
        "These physical checks catch sign errors that algebra alone may not reveal."
      ],
      "sourceLabel": "Supplemental expansion synthesised from Atkins, Monk, Mortimer, Petrucci, Zumdahl and advanced coaching-level physical chemistry."
    },
    {
      "kind": "trap",
      "title": "Curve order changes between P–x–y and T–x–y diagrams",
      "paragraphs": [
        "At fixed temperature, the bubble curve is the upper pressure boundary. At fixed pressure, the bubble curve is the lower temperature boundary. Memorising 'upper' or 'lower' without stating the diagram type causes errors."
      ],
      "sourcePages": "29–32"
    }
  ]
};
