type VisualAsset = {
  src: string;
  title: string;
  caption: string;
};

type FlowRule = {
  part: number;
  keywords: string[];
  images: VisualAsset[];
};

const V = (src: string, title: string, caption: string): VisualAsset => ({ src, title, caption });

const FLOW_RULES: FlowRule[] = [
  { part: 1, keywords: ["definition", "classification", "d-block", "transition element"], images: [
    V("/notes/d-block/visuals/d-block-elements-electronic-configuration-breakdo.webp", "Definition, classification and configuration", "Position of the d-block, transition-element test, four series and principal configuration anomalies."),
    V("/notes/d-block/visuals/d-block-elements-a-visual-guide.webp", "D-block master overview", "Chapter-wide map connecting position, configuration, oxidation states, colour, magnetism, complexes and catalysis.")
  ]},
  { part: 1, keywords: ["configuration", "aufbau", "orbital", "electron removal", "4s"], images: [
    V("/notes/d-block/visuals/electron-configurations-and-orbital-anomalies.webp", "Electronic configuration and orbital anomalies", "Expected and observed configurations of Cr, Cu, Pd, Pt and Au, together with 4s/3d energy ordering."),
    V("/notes/d-block/visuals/trends-in-d-block-elements-explained.webp", "Orbital-energy trends", "Effective nuclear charge, shielding, exchange energy and electron–electron repulsion behind anomalous configurations.")
  ]},
  { part: 1, keywords: ["coinage", "cu", "ag", "au", "group 11", "zn", "cd", "hg"], images: [
    V("/notes/d-block/visuals/cu-ag-au-transition-metals-explained.webp", "Cu, Ag and Au as transition metals", "Why accessible ions with incomplete d subshells satisfy the transition-element definition."),
    V("/notes/d-block/visuals/the-coinage-metals-paradox-explained.webp", "The coinage-metals paradox", "Filled d10 atoms compared with incompletely filled d subshells in common oxidation states.")
  ]},

  { part: 2, keywords: ["radius", "atomic size", "ionic size", "contraction across"], images: [
    V("/notes/d-block/visuals/trends-in-d-block-elements-explained.webp", "Atomic-size trends", "The balance between rising nuclear charge, imperfect d shielding and electron repulsion.")
  ]},
  { part: 2, keywords: ["lanthanoid", "lanthanide", "4d", "5d", "zr", "hf"], images: [
    V("/notes/d-block/visuals/lanthanide-contraction-explained-visually.webp", "Mechanics of lanthanoid contraction", "Poor 4f shielding raises effective nuclear charge and pulls outer 5d/6s electrons inward."),
    V("/notes/d-block/visuals/lanthanoid-contraction-infographic-in-neon-style.webp", "Lanthanoid contraction: the leaky shield", "Consequences include 4d–5d size similarity, especially Zr–Hf, and unexpectedly compact 5d atoms."),
    V("/notes/d-block/visuals/the-leaky-shield-in-lanthanoids.webp", "The leaky shield", "Focused view of diffuse 4f electrons and weak screening.")
  ]},
  { part: 2, keywords: ["density", "osmium", "iridium", "atomic volume"], images: [
    V("/notes/d-block/visuals/the-causal-chain-subatomic-to-macroscopic.webp", "From subatomic shielding to macroscopic density", "Poor shielding, contraction, reduced atomic volume and high density in one causal chain."),
    V("/notes/d-block/visuals/density-profile-of-the-3d-series.webp", "Density profile of the 3d series", "General rise from Sc towards Cu followed by the Zn drop."),
    V("/notes/d-block/visuals/density-trends-in-the-d-block.webp", "Density in the d-block", "Contraction and packing linked to the exceptionally high densities of 5d metals."),
    V("/notes/d-block/visuals/the-heavyweight-champions-of-the-periodic-table.webp", "The heavyweight champions", "Osmium and iridium near the maximum elemental density.")
  ]},

  { part: 3, keywords: ["melting", "boiling", "atomisation", "metallic bonding", "cohesive"], images: [
    V("/notes/d-block/visuals/manganese-and-technetium-anomalies-infographic.webp", "Manganese and technetium anomalies", "Unexpected melting-point dips associated with atypical structures and reduced effective metal–metal overlap."),
    V("/notes/d-block/visuals/the-mn-tc-anomaly-explained.webp", "The Mn–Tc anomaly", "Refined visual explanation of the lattice contribution to anomalous melting behaviour.")
  ]},
  { part: 3, keywords: ["ionisation", "ionization", "successive", "energetic jump", "d5", "d10"], images: [
    V("/notes/d-block/visuals/ionization-energies-in-the-3d-series.webp", "Ionisation energies in the 3d series", "First, second and third ionisation-energy patterns across the row."),
    V("/notes/d-block/visuals/energetic-jumps-and-subshell-stability.webp", "Energetic jumps and stable subshells", "Large energy costs when further ionisation breaks especially stable d5 or d10 configurations.")
  ]},
  { part: 3, keywords: ["electrode", "potential", "e°", "reactivity", "hydration"], images: [
    V("/notes/d-block/visuals/electrode-potentials-across-the-3d-series.webp", "Standard electrode potentials", "E°(M2+/M) across the 3d series."),
    V("/notes/d-block/visuals/redox-potentials-across-the-3d-series.webp", "Redox potentials and competing terms", "Atomisation, ionisation and hydration contributions behind the observed trend."),
    V("/notes/d-block/visuals/explaining-reactive-anomalies-in-metals.webp", "Reactive anomalies", "Focused explanation of the Mn, Ni and Zn deviations.")
  ]},

  { part: 4, keywords: ["oxidation state", "variable oxidation", "stability", "highest oxidation"], images: [
    V("/notes/d-block/visuals/d-block-elements-oxidation-states-and-stability.webp", "Oxidation states and stability", "Element-wise oxidation-state map and the factors stabilising low and high states."),
    V("/notes/d-block/visuals/d-block-elements-chemistry-infographic.webp", "Transition-element chemistry map", "Links between electron count, oxidation state, bonding and observed chemistry.")
  ]},

  { part: 5, keywords: ["complex", "coordination", "ligand", "formation"], images: [
    V("/notes/d-block/visuals/chemistry-of-d-block-elements-and-catalysis.webp", "Complex formation and catalysis", "Charge density, ligand donation, coordination geometry and catalytic behaviour."),
    V("/notes/d-block/visuals/ligand-field-theory-and-observed-colour.webp", "Ligand field and observed colour", "How ligand identity and geometry modify d-orbital splitting.")
  ]},
  { part: 5, keywords: ["catalyst", "catalysis", "surface", "adsorption", "industrial"], images: [
    V("/notes/d-block/visuals/why-transition-metals-speed-up-reactions.webp", "Why transition metals are good catalysts", "Variable oxidation states, unstable intermediates and adsorption on metal surfaces."),
    V("/notes/d-block/visuals/introduction-to-catalysis-pathways-infographic.webp", "Two catalytic pathways", "Chemical redox cycling contrasted with physical surface adsorption."),
    V("/notes/d-block/visuals/industrial-catalyst-map-infographic-design.webp", "Industrial catalyst map", "Consolidated map of important transition-metal catalysts and processes."),
    V("/notes/d-block/visuals/industrial-catalyst-oxidation-heavyweights.webp", "Oxidation catalysts", "V2O5, Pt/Rh and MnO2 in large-scale oxidation chemistry."),
    V("/notes/d-block/visuals/industrial-catalyst-reduction-hydrogenation.webp", "Reduction and hydrogenation catalysts", "Fe, Ni, Pd and Pt in ammonia synthesis, hydrogenation and reduction."),
    V("/notes/d-block/visuals/industrial-catalyst-map-infographic.webp", "Polymers and synthetics", "Ti, Cu, V and Ni catalysts in polymer and synthetic chemistry."),
    V("/notes/d-block/visuals/industrial-catalyst-map-design.webp", "Specialised reagents and halogen chemistry", "Representative d-block reagents and catalytic systems.")
  ]},

  { part: 6, keywords: ["colour", "color", "d-d", "charge transfer", "ligand field"], images: [
    V("/notes/d-block/visuals/colour-and-magnetism-of-transition-metals.webp", "Colour and magnetism of transition metals", "Representative colours, octahedral splitting and the origin of absorption."),
    V("/notes/d-block/visuals/colour-and-magnetism-in-d-block-complexes.webp", "Colour and magnetism in d-block complexes", "d–d transitions, charge-transfer transitions and spin-only magnetic moments."),
    V("/notes/d-block/visuals/ligands-and-color-transitions-diagram.webp", "Ligands and colour signatures", "Ligand-dependent colours of representative nickel complexes."),
    V("/notes/d-block/visuals/ligand-field-theory-and-observed-colour.webp", "Ligands, splitting and colour", "Changing ligand strength changes Δ and therefore the absorbed wavelength.")
  ]},
  { part: 6, keywords: ["magnetic", "paramagnetic", "diamagnetic", "ferromagnetic", "moment"], images: [
    V("/notes/d-block/visuals/d-block-elements-colour-and-magnetism.webp", "Magnetic behaviour across the d-block", "Unpaired electrons, spin-only moment, paramagnetism, diamagnetism and ferromagnetism.")
  ]},

  { part: 7, keywords: ["alloy", "interstitial", "non-stoichiometric", "nonstoichiometric", "lattice", "solid"], images: [
    V("/notes/d-block/visuals/d-block-elements-alloys-and-compounds.webp", "Alloys, interstitial compounds and solid-state behaviour", "Substitutional alloys, interstitial occupation and non-stoichiometric compounds.")
  ]},

  { part: 8, keywords: ["chromium", "chromate", "dichromate", "chromite"], images: [
    V("/notes/d-block/visuals/chromium-chemistry-from-ore-to-oxidation.webp", "Chromium chemistry", "Chromite processing, chromate–dichromate equilibrium and oxidising behaviour."),
    V("/notes/d-block/visuals/chromium-and-manganese-reaction-atlas.webp", "Chromium reaction flow", "Ore-to-oxidant conversion, pH-controlled equilibrium and oxidation-state colour changes.")
  ]},

  { part: 9, keywords: ["manganese", "manganate", "permanganate", "pyrolusite"], images: [
    V("/notes/d-block/visuals/manganese-chemistry-oxidation-states-and-reaction.webp", "Manganese chemistry", "Pyrolusite, manganate, permanganate and medium-dependent reduction products."),
    V("/notes/d-block/visuals/chromium-and-manganese-reaction-atlas.webp", "Manganese reaction flow", "Preparation, oxidation states, colours and medium control.")
  ]},

  { part: 10, keywords: ["silver", "zinc", "copper", "iron", "compound", "salt", "precipitate"], images: [
    V("/notes/d-block/visuals/d-block-elements-compounds-and-reactions-study.webp", "Important compounds and reactions", "Visual study sheet for key silver, zinc, copper and iron compounds."),
    V("/notes/d-block/visuals/cu-ag-au-transition-metals-explained.webp", "Coinage-metal chemistry", "Accessible oxidation states and incomplete d subshells in Cu, Ag and Au.")
  ]},
];

function scoreRule(rule: FlowRule, haystack: string) {
  return rule.keywords.reduce((score, keyword) => score + (haystack.includes(keyword) ? 1 : 0), 0);
}

export function DBlockInlineVisuals({
  part,
  pageId,
  label,
  markdown,
}: {
  part: number;
  pageId: string;
  label: string;
  markdown: string;
}) {
  const haystack = `${pageId} ${label} ${markdown}`.toLowerCase();
  const candidates = FLOW_RULES
    .filter((rule) => rule.part === part)
    .map((rule) => ({ rule, score: scoreRule(rule, haystack) }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score);

  if (candidates.length === 0) return null;

  const seen = new Set<string>();
  const images = candidates
    .flatMap(({ rule }) => rule.images)
    .filter((image) => {
      if (seen.has(image.src)) return false;
      seen.add(image.src);
      return true;
    })
    .slice(0, 3);

  if (!images.length) return null;

  return (
    <div className="my-9 grid gap-5 md:grid-cols-2">
      {images.map((image, index) => (
        <figure
          key={image.src}
          className={
            index === 0 && images.length % 2 === 1
              ? "overflow-hidden rounded-3xl border border-cyan-400/20 bg-[#050b14] md:col-span-2"
              : "overflow-hidden rounded-3xl border border-cyan-400/20 bg-[#050b14]"
          }
        >
          <div className="flex min-h-[260px] items-center justify-center bg-black/30 p-2 sm:min-h-[340px]">
            <img
              src={image.src}
              alt={image.title}
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
              className="h-auto max-h-[760px] w-full object-contain"
            />
          </div>
          <figcaption className="border-t border-white/10 px-5 py-4">
            <h4 className="text-lg font-black text-white">{image.title}</h4>
            <p className="mt-2 text-sm leading-6 text-slate-400">{image.caption}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
