// B.Sc. Chemistry Year 1, Semester I, Paper C-2 (Physical Chemistry I),
// Unit 1: Mathematical Concepts for Chemistry.
// Directly-authored content blocks, same block model as the other University
// Chemistry and JEE Advanced chapters. This unit is deliberately NOT the
// kinetic theory of gases — the existing JEE Advanced Gaseous State chapter
// already derives the Maxwell-Boltzmann distribution, kinetic pressure and
// effusion at genuine rigour, and duplicating it would violate the "audit
// before creating" rule. Mathematical Concepts is a standard UGC Semester I
// Physical Chemistry unit with no equivalent anywhere else in the repo: the
// calculus, series and probability tools a chemistry student needs before
// thermodynamics, kinetics and statistical mechanics can be built rigorously
// rather than just applied by rule.

export type MathConceptsBlockKind =
  | "major"
  | "section"
  | "subheading"
  | "callout"
  | "bullets"
  | "numbered"
  | "table"
  | "formula"
  | "paragraph";

export type MathConceptsBlock = {
  kind: MathConceptsBlockKind;
  text?: string;
  items?: string[];
  headers?: string[];
  rows?: string[][];
  formulaLabel?: string;
};

const sections = [
  "Functions and Their Chemical Meaning",
  "Differentiation: Rates, Slopes and Extrema",
  "Partial Derivatives and State Functions",
  "Integration and Its Chemical Applications",
  "Series Expansions",
  "Permutations, Combinations and Elementary Probability",
  "Errors, Significant Figures and Propagation of Uncertainty",
];

export const mathConceptsChapterMap: string[] = [...sections];

function major(n: number): MathConceptsBlock {
  return { kind: "major", text: `Section ${n} - ${sections[n - 1]}` };
}
function sub(text: string): MathConceptsBlock {
  return { kind: "subheading", text };
}
function p(text: string): MathConceptsBlock {
  return { kind: "paragraph", text };
}
function callout(label: string, text: string): MathConceptsBlock {
  return { kind: "callout", text: `${label}: ${text}` };
}
function bullets(items: string[]): MathConceptsBlock {
  return { kind: "bullets", items };
}
function table(headers: string[], rows: string[][]): MathConceptsBlock {
  return { kind: "table", headers, rows };
}
function formula(text: string, formulaLabel?: string): MathConceptsBlock {
  return { kind: "formula", text, formulaLabel };
}

export const mathConceptsBlocks: MathConceptsBlock[] = [
  // ── Section 1 ─────────────────────────────────────────────────────────────
  major(1),
  p("Physical chemistry is built almost entirely out of functions relating one measurable quantity to another — pressure as a function of volume at constant temperature, rate as a function of concentration, absorbance as a function of wavelength. Recognising which mathematical family a chemical relationship belongs to is often the fastest route to predicting its behaviour without re-deriving it from scratch."),
  table(
    ["Function type", "General form", "Chemistry example"],
    [
      ["Linear", "y = mx + c", "Beer-Lambert law: A = epsilon * c * l (absorbance vs concentration)"],
      ["Power", "y = kx^n", "Rate law: rate = k[A]^n"],
      ["Exponential decay", "y = y0 * e^(-kt)", "First-order kinetics: [A] = [A]0 * e^(-kt); radioactive decay"],
      ["Exponential (Arrhenius)", "y = A * e^(-Ea/RT)", "Rate constant vs temperature"],
      ["Reciprocal / hyperbolic", "y = k/x", "Boyle's law: P = k/V at constant T"],
      ["Logarithmic", "y = a * ln(x) + b", "pH = -log10[H+]; entropy S = k ln(W)"],
    ]
  ),
  callout("Key idea", "A relationship does not have to be plotted as raw y vs x to be useful. Linearising a non-linear relationship — taking logarithms of an exponential decay, or plotting 1/[A] against t for a second-order reaction — turns a curve into a straight line whose slope and intercept can be read off directly. This single trick underlies most graphical methods in physical chemistry, from determining rate-law order to extracting activation energy from an Arrhenius plot."),

  // ── Section 2 ─────────────────────────────────────────────────────────────
  major(2),
  p("The derivative dy/dx is the instantaneous rate of change of y with respect to x — geometrically, the slope of the tangent to the curve at a point. In chemistry this is rarely an abstract slope; it is almost always a rate."),
  table(
    ["Derivative", "Chemical meaning"],
    [
      ["d[A]/dt", "Instantaneous rate of change of concentration — the definition of reaction rate."],
      ["dG/dn (constant T, P)", "Chemical potential, mu — the rate of change of Gibbs energy with amount of substance."],
      ["dP/dV (constant T)", "Compressibility of a gas — how sharply pressure responds to a volume change."],
      ["d(ln k)/d(1/T)", "Slope of an Arrhenius plot, equal to -Ea/R."],
    ]
  ),
  sub("Standard rules"),
  formula("\\dfrac{d}{dx}(x^n) = nx^{n-1} \\qquad \\dfrac{d}{dx}(e^{kx}) = ke^{kx} \\qquad \\dfrac{d}{dx}(\\ln x) = \\dfrac{1}{x}"),
  formula("\\dfrac{d}{dx}(uv) = u\\dfrac{dv}{dx} + v\\dfrac{du}{dx} \\qquad \\dfrac{d}{dx}\\!\\left(\\dfrac{u}{v}\\right) = \\dfrac{v\\frac{du}{dx} - u\\frac{dv}{dx}}{v^2}", "product and quotient rules"),
  sub("Maxima, minima and points of inflection"),
  p("At a maximum or minimum, dy/dx = 0. The second derivative distinguishes which: d2y/dx2 < 0 at a maximum (the slope is decreasing through zero), d2y/dx2 > 0 at a minimum, and d2y/dx2 = 0 at a point of inflection (where curvature itself changes sign)."),
  callout("JEE-to-university bridge", "This is exactly the mathematics behind finding the critical point of a van der Waals gas: the critical point is where the P-V isotherm has both dP/dV = 0 AND d2P/dV2 = 0 simultaneously — a horizontal inflection, not merely a horizontal tangent. Locating it requires solving both conditions together, which is precisely a second-derivative extremum problem applied to a real physical isotherm."),

  // ── Section 3 ─────────────────────────────────────────────────────────────
  major(3),
  p("Most thermodynamic quantities depend on more than one variable at once — internal energy U depends on both volume V and temperature T, for instance. A partial derivative, written with a curly d, measures the rate of change with respect to one variable while every other variable is held fixed."),
  formula("\\left(\\dfrac{\\partial U}{\\partial V}\\right)_T"),
  p("This reads: the rate of change of U with respect to V, at constant T. The subscript is not optional decoration — it states exactly which variables are being held fixed, and changing which variable is held constant genuinely changes the value of the derivative for a real substance."),
  sub("The total differential"),
  p("For a state function z that depends on two variables x and y, the total change dz produced by simultaneous small changes dx and dy is:"),
  formula("dz = \\left(\\dfrac{\\partial z}{\\partial x}\\right)_y dx + \\left(\\dfrac{\\partial z}{\\partial y}\\right)_x dy"),
  p("Applied to internal energy U(V, T), this gives dU = (dU/dV)_T dV + (dU/dT)_V dT — the first term is related to the internal pressure, the second is exactly CV dT (the heat capacity at constant volume). This single equation is the starting point from which the first law of thermodynamics is developed rigorously in the Physical Chemistry sequence that follows this unit."),
  sub("Exact differentials and state functions"),
  p("A differential dz = M dx + N dy is exact if and only if the mixed second partial derivatives are equal:"),
  formula("\\left(\\dfrac{\\partial M}{\\partial y}\\right)_x = \\left(\\dfrac{\\partial N}{\\partial x}\\right)_y"),
  callout("Key idea", "This single test (called the Euler reciprocity relation, or the condition for an exact differential) is the rigorous mathematical reason a state function like U, H, S, G or A has a value that depends only on the current state, not on the path taken to reach it — while work and heat, which fail this test, are path-dependent and are not state functions. The whole distinction between 'state function' and 'path function' that runs through thermodynamics has this one equation as its formal foundation."),

  // ── Section 4 ─────────────────────────────────────────────────────────────
  major(4),
  p("Integration is the inverse operation to differentiation, and in chemistry it is most often used to find a total quantity (work done, total heat, total probability) from a known rate or density, or to solve a differential rate law for concentration as an explicit function of time."),
  formula("\\int x^n\\,dx = \\dfrac{x^{n+1}}{n+1} + C \\qquad \\int e^{kx}\\,dx = \\dfrac{1}{k}e^{kx} + C \\qquad \\int \\dfrac{1}{x}\\,dx = \\ln|x| + C"),
  sub("Worked example: integrating a first-order rate law"),
  p("A first-order reaction obeys -d[A]/dt = k[A]. Separating variables and integrating between t = 0 (concentration [A]0) and time t (concentration [A]):"),
  formula("-\\int_{[A]_0}^{[A]} \\dfrac{d[A]}{[A]} = k\\int_0^t dt \\quad\\Rightarrow\\quad \\ln\\dfrac{[A]_0}{[A]} = kt \\quad\\Rightarrow\\quad [A] = [A]_0\\,e^{-kt}"),
  p("This is the standard integrated first-order rate law, derived directly from the differential rate law rather than quoted — the same method (separate variables, integrate both sides between the correct limits) solves the second-order case (integral of d[A]/[A]^2) and generates the corresponding 1/[A] = 1/[A]0 + kt relationship used to identify reaction order graphically."),
  sub("Definite integrals and physical work"),
  p("Reversible pressure-volume work is defined as an integral because pressure generally changes continuously as volume changes:"),
  formula("w = -\\int_{V_1}^{V_2} P\\,dV"),
  p("For an ideal gas at constant temperature, P = nRT/V, so the integral becomes w = -nRT * ln(V2/V1) — a result that cannot be obtained from w = -P*deltaV (valid only when P is constant) and is one of the first places a Physical Chemistry course requires the student to integrate rather than simply substitute."),

  // ── Section 5 ─────────────────────────────────────────────────────────────
  major(5),
  p("A series expansion writes a function as an infinite sum of simpler terms, and truncating that sum after a few terms gives a controlled, quantifiable approximation — the basis of nearly every 'to first order' or 'to a good approximation' statement made later in physical chemistry."),
  formula("f(x) = f(a) + f'(a)(x-a) + \\dfrac{f''(a)}{2!}(x-a)^2 + \\dfrac{f'''(a)}{3!}(x-a)^3 + \\cdots", "Taylor series about x = a"),
  p("A Maclaurin series is the special case a = 0. Two expansions recur constantly in physical chemistry:"),
  formula("e^x = 1 + x + \\dfrac{x^2}{2!} + \\dfrac{x^3}{3!} + \\cdots \\qquad \\ln(1+x) = x - \\dfrac{x^2}{2} + \\dfrac{x^3}{3} - \\cdots \\quad (|x| < 1)"),
  callout("Key idea", "The virial equation of state, P V = RT (1 + B/V + C/V^2 + ...), is literally a Taylor-style series expansion of the real-gas compressibility factor Z in powers of 1/V, truncated at however many terms are needed for the required accuracy. Recognising it as a series (not a separately memorised formula) is what makes it possible to connect the second virial coefficient B directly to the van der Waals constants by expanding the van der Waals equation itself as a series in 1/V and matching terms."),

  // ── Section 6 ─────────────────────────────────────────────────────────────
  major(6),
  p("Counting arrangements underlies statistical thermodynamics directly — entropy in the statistical (Boltzmann) sense is a count of the number of microscopic arrangements consistent with a given macroscopic state, and that count is a permutations-and-combinations problem."),
  table(
    ["Concept", "Formula", "Meaning"],
    [
      ["Permutations", "nPr = n!/(n-r)!", "Number of ORDERED arrangements of r objects chosen from n distinguishable objects."],
      ["Combinations", "nCr = n!/[r!(n-r)!]", "Number of UNORDERED selections of r objects from n distinguishable objects."],
      ["Distinguishable arrangements", "W = N!/(n1! n2! n3! ...)", "Number of ways to distribute N distinguishable objects into groups of sizes n1, n2, n3, ... — the direct precursor to the Boltzmann entropy formula."],
    ]
  ),
  formula("S = k_B \\ln W", "Boltzmann entropy, where W is the multiplicity (Section 6 formula above) of the macrostate"),
  sub("Elementary probability"),
  bullets([
    "For independent events A and B, P(A and B) = P(A) x P(B) — used directly when computing the probability that several independent quantum states are simultaneously occupied.",
    "For mutually exclusive events, P(A or B) = P(A) + P(B).",
    "A probability distribution must sum (discrete case) or integrate (continuous case) to exactly 1 over all possible outcomes — the same normalisation condition that fixes the prefactor of the Maxwell-Boltzmann speed distribution in the Gaseous State chapter.",
  ]),

  // ── Section 7 ─────────────────────────────────────────────────────────────
  major(7),
  p("Every measured quantity in a chemistry laboratory carries some uncertainty, and calculations built from several measured quantities must propagate that uncertainty correctly rather than reporting a false precision."),
  sub("Significant figures in calculations"),
  bullets([
    "Addition and subtraction: the result is rounded to the same number of decimal places as the least precise value being added or subtracted.",
    "Multiplication and division: the result is rounded to the same number of significant figures as the value with the fewest significant figures.",
    "Exact numbers (defined constants, counted whole objects) do not limit significant figures at all.",
  ]),
  sub("Propagation of uncertainty"),
  p("For a quantity z computed from measured quantities x and y, each with an independent random uncertainty (delta x, delta y), the propagated uncertainty depends on how z depends on x and y:"),
  formula("z = x + y \\ \\text{or}\\ z = x - y \\ \\Rightarrow\\ \\delta z = \\sqrt{(\\delta x)^2 + (\\delta y)^2}"),
  formula("z = xy \\ \\text{or}\\ z = x/y \\ \\Rightarrow\\ \\dfrac{\\delta z}{z} = \\sqrt{\\left(\\dfrac{\\delta x}{x}\\right)^2 + \\left(\\dfrac{\\delta y}{y}\\right)^2}"),
  callout("Warning / limitation", "These propagation formulas assume the uncertainties in x and y are independent and random. If two measured quantities share a common systematic error (the same miscalibrated instrument used for both), the errors do not add in quadrature this way, and a more careful covariance treatment is required — a distinction worth remembering before applying the formula automatically in a laboratory report."),
];
