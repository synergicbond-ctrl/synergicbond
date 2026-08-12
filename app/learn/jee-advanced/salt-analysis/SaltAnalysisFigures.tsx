type FigureData = {
  src: string;
  alt: string;
  caption: string;
};

const figures: Record<string, FigureData> = {
  "acid-radical-map": {
    src: "/images/salt-analysis/acid-radical-map.webp",
    alt: "Classification map dividing acid radicals into volatile and solution-based analytical classes",
    caption: "Acid-radical strategy: first decide whether the diagnostic signal is a volatile product or a solution reaction.",
  },
  "flame-emission-spectrum": {
    src: "/images/salt-analysis/flame-emission-spectrum.webp",
    alt: "Dark-background flame test spectrum for sodium, potassium, calcium, strontium, barium and copper",
    caption: "Flame-emission atlas: characteristic colours are screening clues and must be supported by a confirmatory test.",
  },
  "metal-sulfide-spectrum": {
    src: "/images/salt-analysis/metal-sulfide-spectrum.webp",
    alt: "Test tubes showing characteristic black, yellow, orange, buff and white metal sulphide precipitates",
    caption: "Metal-sulphide colour spectrum across Groups II and IV.",
  },
  "copper-cadmium-separation": {
    src: "/images/salt-analysis/copper-cadmium-separation.webp",
    alt: "Flow diagram for separating copper from cadmium by cyanide complexation followed by hydrogen sulphide",
    caption: "Cu-Cd separation: differential complex stability controls which sulphide can precipitate.",
  },
  "chromate-dichromate-redox": {
    src: "/images/salt-analysis/chromate-dichromate-redox.webp",
    alt: "Chromate-dichromate pH equilibrium and peroxide test diagram",
    caption: "Chromate chemistry combines acid-base colour change with a distinct peroxide redox confirmation.",
  },
  "silver-nitrate-matrix": {
    src: "/images/salt-analysis/silver-nitrate-matrix.webp",
    alt: "Silver nitrate precipitate colour and ammonia-solubility comparison for chloride, bromide, iodide and chromate",
    caption: "Silver-nitrate matrix: precipitate colour plus ammonia solubility gives the useful analytical distinction.",
  },
  "halide-layer-test": {
    src: "/images/salt-analysis/halide-layer-test.webp",
    alt: "Organic-layer test showing orange bromine and violet iodine layers",
    caption: "Halide layer test: oxidation liberates Br2 or I2, and extraction concentrates its characteristic colour.",
  },
  "brown-ring-phenomenon": {
    src: "/images/salt-analysis/brown-ring-phenomenon.webp",
    alt: "Brown-ring nitrate test at the aqueous solution and concentrated sulphuric acid interface",
    caption: "Brown-ring test: NO is trapped as a nitrosyl-iron complex at the liquid interface.",
  },
  "solubility-funnel": {
    src: "/images/salt-analysis/solubility-funnel.webp",
    alt: "Funnel model dividing salts into universally soluble, conditionally soluble and generally insoluble classes",
    caption: "A conceptual solubility funnel: absolute rules are few; conditional behaviour and named exceptions dominate analysis.",
  },
  "solubility-decision-tree-a": {
    src: "/images/salt-analysis/solubility-decision-tree-a.webp",
    alt: "First half of a decision tree for nitrate, alkali, ammonium, halide, acetate and formate solubility",
    caption: "Solubility decision tree, stage 1: universal soluble ions, then halide and organic-anion exceptions.",
  },
  "solubility-decision-tree-b": {
    src: "/images/salt-analysis/solubility-decision-tree-b.webp",
    alt: "Second half of a decision tree for sulphate, carbonate, phosphate, chromate and sulphide solubility",
    caption: "Solubility decision tree, stage 2: sulphate exceptions and the generally insoluble high-charge anions.",
  },
  "interfering-radicals-sabotage": {
    src: "/images/salt-analysis/interfering-radicals-sabotage.webp",
    alt: "Comparison of normal Group III precipitation with false precipitation caused by interfering acid radicals",
    caption: "Why interfering radicals must be removed before Group III: otherwise a clean separation becomes a false-positive mixture.",
  },
  "soda-extract-pipeline": {
    src: "/images/salt-analysis/soda-extract-pipeline.webp",
    alt: "Dark neon process diagram for preparing and neutralising sodium carbonate extract",
    caption: "Soda-extract pipeline: boil, filter, acidify cautiously and remove carbon dioxide before diagnostic testing.",
  },
  "borax-bead-cross-section": {
    src: "/images/salt-analysis/borax-bead-cross-section.webp",
    alt: "Borax bead cross-section with oxidising and reducing zones and diagnostic colours",
    caption: "Borax bead test: flame zone, oxidation state and observation temperature all affect the colour.",
  },
  "cation-separation-waterfall": {
    src: "/images/salt-analysis/cation-separation-waterfall.webp",
    alt: "Cascading cation group separation from Group I through Group VI",
    caption: "The cation waterfall: every precipitate is filtered before the next selective reagent reaches the filtrate.",
  },
  "common-ion-balance": {
    src: "/images/salt-analysis/common-ion-balance.webp",
    alt: "Balance analogy comparing hydrogen ion control in Group II and ammonium ion control in Group III",
    caption: "Two common-ion controls: H+ regulates sulphide concentration; NH4+ regulates hydroxide concentration.",
  },
  "amphoterism-vs-complexation": {
    src: "/images/salt-analysis/amphoterism-vs-complexation.webp",
    alt: "Parallel decision trees comparing dissolution in excess sodium hydroxide and excess ammonia",
    caption: "Do not confuse amphoterism with ammine-complex formation: NaOH and NH3 probe different chemistry.",
  },
  "precision-confirmatory-tests": {
    src: "/images/salt-analysis/precision-confirmatory-tests.webp",
    alt: "Confirmatory-test panel for iron, nickel and bismuth ions",
    caption: "Specific confirmations for Fe2+/Fe3+, Ni2+ and Bi3+ with their characteristic products.",
  },
  "master-analytical-algorithm": {
    src: "/images/salt-analysis/master-analytical-algorithm.webp",
    alt: "Master salt-analysis algorithm connecting soda extract, acid-radical tests and cation group separation",
    caption: "Complete analytical architecture: parallel anion and cation evidence converges on one molecular identity.",
  },
};

export function SaltAnalysisFigure({ id }: { id: string }) {
  const figure = figures[id];
  if (!figure) return null;

  return (
    <figure className="my-7 overflow-hidden rounded-2xl border border-cyan-300/25 bg-[#030a14] shadow-[0_0_34px_rgba(34,211,238,0.10)]">
      <img
        src={figure.src}
        alt={figure.alt}
        width={1376}
        height={738}
        loading="lazy"
        decoding="async"
        className="h-auto w-full"
      />
      <figcaption className="border-t border-cyan-300/15 px-4 py-3 text-center text-sm leading-6 text-[var(--text-body)]">
        {figure.caption}
      </figcaption>
    </figure>
  );
}
