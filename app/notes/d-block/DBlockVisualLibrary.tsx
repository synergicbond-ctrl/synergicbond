type VisualAsset = {
  src: string;
  title: string;
  caption: string;
  width: number;
  height: number;
};

const visualGroups: Array<{ title: string; images: VisualAsset[] }> = [
  {
    title: "Master maps and overviews",
    images: [
      { src: "/notes/d-block/visuals/metallurgy-master-visual-notes-dashboard.webp", title: "Metallurgy Master Visual Notes", caption: "A visual dashboard connecting extraction, d-block behaviour, colour, magnetism, lanthanoid effects and industrial catalysis.", width: 1672, height: 941 },
      { src: "/notes/d-block/visuals/d-block-elements-a-visual-guide.webp", title: "D-Block Master Visual Atlas", caption: "A chapter-wide visual map of position, configuration, oxidation states, colour, magnetism, complexes and catalysis.", width: 1448, height: 1086 },
      { src: "/notes/d-block/visuals/d-block-elements-chemistry-infographic.webp", title: "D-Block Chemistry Overview", caption: "A broad visual overview of transition-element chemistry and the patterns linking structure to properties.", width: 1448, height: 1086 },
      { src: "/notes/d-block/visuals/chemistry-of-d-block-elements-and-catalysis.webp", title: "D-Block Complexes and Catalysis", caption: "A combined visual reference for coordination chemistry, complex formation and catalytic behaviour.", width: 1448, height: 1086 },
      { src: "/notes/d-block/visuals/d-block-visual-asset-library.webp", title: "D-Block Visual Asset Library", caption: "A compact index of the major visual themes used across the chapter.", width: 991, height: 1400 }
    ],
  },
  {
    title: "Electronic configuration and classification",
    images: [
      { src: "/notes/d-block/visuals/d-block-elements-electronic-configuration-breakdo.webp", title: "Electronic Configuration Breakdown", caption: "Expected and observed configurations, orbital filling and common anomalies.", width: 1448, height: 1086 },
      { src: "/notes/d-block/visuals/electron-configurations-and-orbital-anomalies.webp", title: "Electronic Configuration and Orbital Anomalies", caption: "A detailed comparison of Aufbau expectations, actual ground states and electron-removal order.", width: 1448, height: 1086 },
      { src: "/notes/d-block/visuals/cu-ag-au-transition-metals-explained.webp", title: "Cu, Ag and Au as Transition Metals", caption: "Why filled d10 ground states do not prevent coinage metals from qualifying as transition elements.", width: 1672, height: 941 },
      { src: "/notes/d-block/visuals/the-coinage-metals-paradox-explained.webp", title: "The Coinage Metals Paradox", caption: "A compact comparison of Cu, Ag and Au with Group 12 elements.", width: 1672, height: 941 },
      { src: "/notes/d-block/visuals/trends-in-d-block-elements-explained.webp", title: "Trends in D-Block Elements", caption: "A visual summary of the major periodic trends that influence transition-metal chemistry.", width: 1448, height: 1086 }
    ],
  },
  {
    title: "Atomic size, lanthanoid contraction and density",
    images: [
      { src: "/notes/d-block/visuals/lanthanide-contraction-explained-visually.webp", title: "Mechanics of Lanthanoid Contraction", caption: "A stepwise explanation of rising effective nuclear charge and inward contraction.", width: 1774, height: 887 },
      { src: "/notes/d-block/visuals/lanthanoid-contraction-infographic-in-neon-style.webp", title: "Lanthanoid Contraction: The Leaky Shield", caption: "A complete dark-theme visual of poor 4f shielding, contraction and 4d–5d similarity.", width: 1672, height: 941 },
      { src: "/notes/d-block/visuals/the-leaky-shield-in-lanthanoids.webp", title: "The Leaky Shield", caption: "A focused atomic picture of weak 4f shielding.", width: 1145, height: 1374 },
      { src: "/notes/d-block/visuals/the-causal-chain-subatomic-to-macroscopic.webp", title: "From Subatomic to Macroscopic", caption: "The chain from diffuse 4f orbitals to contraction, reduced volume and very high density.", width: 1774, height: 887 },
      { src: "/notes/d-block/visuals/density-profile-of-the-3d-series.webp", title: "Density Profile of the 3d Series", caption: "A bar-chart view of the general rise in density across the first transition series.", width: 1774, height: 887 },
      { src: "/notes/d-block/visuals/density-trends-in-the-d-block.webp", title: "Density in the D-Block", caption: "A combined visual linking contraction, packing and heavyweight 5d metals.", width: 1672, height: 941 },
      { src: "/notes/d-block/visuals/the-heavyweight-champions-of-the-periodic-table.webp", title: "The Heavyweight Champions", caption: "A striking comparison of osmium and iridium as extremely dense elements.", width: 1774, height: 887 }
    ],
  },
  {
    title: "Energetics, electrode potentials and anomalies",
    images: [
      { src: "/notes/d-block/visuals/ionization-energies-in-the-3d-series.webp", title: "Ionisation Energies in the 3d Series", caption: "A visual summary of first, second and third ionisation-energy patterns.", width: 1672, height: 941 },
      { src: "/notes/d-block/visuals/energetic-jumps-and-subshell-stability.webp", title: "Energetic Jumps and Stable Subshells", caption: "Why d5 and d10 stability produces unusually large energetic jumps.", width: 1672, height: 941 },
      { src: "/notes/d-block/visuals/electrode-potentials-across-the-3d-series.webp", title: "Standard Electrode Potentials", caption: "The E°(M2+/M) pattern across the 3d series.", width: 1672, height: 941 },
      { src: "/notes/d-block/visuals/redox-potentials-across-the-3d-series.webp", title: "Redox Potentials and Exceptions", caption: "A second visual treatment of redox trends and the role of competing thermochemical terms.", width: 1672, height: 941 },
      { src: "/notes/d-block/visuals/explaining-reactive-anomalies-in-metals.webp", title: "Explaining Reactive Anomalies", caption: "Focused reasoning for Mn, Ni and Zn deviations.", width: 1672, height: 941 },
      { src: "/notes/d-block/visuals/manganese-and-technetium-anomalies-infographic.webp", title: "Manganese and Technetium Anomalies", caption: "A comparative visual for the Mn–Tc melting-point anomaly.", width: 1672, height: 941 },
      { src: "/notes/d-block/visuals/the-mn-tc-anomaly-explained.webp", title: "The Mn–Tc Anomaly", caption: "A refined visual explaining anomalous melting behaviour and lattice effects.", width: 1672, height: 941 },
      { src: "/notes/d-block/visuals/d-block-elements-oxidation-states-and-stability.webp", title: "Oxidation States and Stability", caption: "A full visual map of oxidation-state patterns and stability across the d-block.", width: 1448, height: 1086 }
    ],
  },
  {
    title: "Colour, magnetism and ligand field",
    images: [
      { src: "/notes/d-block/visuals/colour-and-magnetism-in-d-block-complexes.webp", title: "Colour and Magnetism in D-Block Complexes", caption: "Orbital splitting, d–d transitions, charge transfer and spin-only magnetic moments.", width: 1672, height: 941 },
      { src: "/notes/d-block/visuals/colour-and-magnetism-of-transition-metals.webp", title: "Colour and Magnetism of Transition Metals", caption: "A visual gallery of ion colours and magnetic behaviour.", width: 1448, height: 1086 },
      { src: "/notes/d-block/visuals/d-block-elements-colour-and-magnetism.webp", title: "D-Block Colour and Magnetism", caption: "A chapter-part visual combining spectra, splitting and magnetic trends.", width: 1448, height: 1086 },
      { src: "/notes/d-block/visuals/ligand-field-theory-and-observed-colour.webp", title: "Ligands, Splitting and Colour", caption: "How ligand strength, geometry and energy gaps control observed colour.", width: 1672, height: 941 },
      { src: "/notes/d-block/visuals/ligands-and-color-transitions-diagram.webp", title: "Ligands and Colour Signatures", caption: "Colour changes in representative nickel complexes.", width: 1672, height: 941 }
    ],
  },
  {
    title: "Catalysis and industrial applications",
    images: [
      { src: "/notes/d-block/visuals/why-transition-metals-speed-up-reactions.webp", title: "Why Transition Metals Are Good Catalysts", caption: "Variable oxidation states, intermediate formation and surface adsorption.", width: 1672, height: 941 },
      { src: "/notes/d-block/visuals/introduction-to-catalysis-pathways-infographic.webp", title: "Two Distinct Catalytic Pathways", caption: "Chemical redox catalysis compared with physical surface catalysis.", width: 1672, height: 941 },
      { src: "/notes/d-block/visuals/industrial-catalyst-map-design.webp", title: "Industrial Catalyst Map: Specialised Reagents", caption: "Specialised catalytic and reagent applications.", width: 1672, height: 941 },
      { src: "/notes/d-block/visuals/industrial-catalyst-map-infographic.webp", title: "Industrial Catalyst Map: Polymers and Synthetics", caption: "Representative catalysts used in polymer and synthetic chemistry.", width: 1672, height: 941 },
      { src: "/notes/d-block/visuals/industrial-catalyst-map-infographic-design.webp", title: "Industrial Catalyst Map of the D-Block", caption: "A consolidated map of major d-block catalysts and uses.", width: 1672, height: 941 },
      { src: "/notes/d-block/visuals/industrial-catalyst-oxidation-heavyweights.webp", title: "Industrial Catalysts: Oxidation Heavyweights", caption: "V2O5, Pt/Rh and MnO2 in large-scale oxidation chemistry.", width: 1672, height: 941 },
      { src: "/notes/d-block/visuals/industrial-catalyst-reduction-hydrogenation.webp", title: "Industrial Catalysts: Reduction and Hydrogenation", caption: "Fe, Ni, Pd and Pt catalysts in reduction and hydrogenation.", width: 1672, height: 941 }
    ],
  },
  {
    title: "Chromium, manganese and compound chemistry",
    images: [
      { src: "/notes/d-block/visuals/chromium-and-manganese-reaction-atlas.webp", title: "Chromium and Manganese Reaction Atlas", caption: "Ore-to-oxidant flows, colour changes, pH control and medium-dependent products.", width: 1448, height: 1086 },
      { src: "/notes/d-block/visuals/chromium-chemistry-from-ore-to-oxidation.webp", title: "Chromium Chemistry", caption: "Chromite processing, chromate–dichromate equilibrium and oxidising behaviour.", width: 1448, height: 1086 },
      { src: "/notes/d-block/visuals/manganese-chemistry-oxidation-states-and-reaction.webp", title: "Manganese Chemistry", caption: "Pyrolusite, manganate, permanganate and medium-dependent reduction.", width: 1448, height: 1086 },
      { src: "/notes/d-block/visuals/d-block-elements-compounds-and-reactions-study.webp", title: "Compounds and Reaction Study", caption: "A visual study sheet for important d-block compounds and transformations.", width: 1448, height: 1086 },
      { src: "/notes/d-block/visuals/d-block-elements-alloys-and-compounds.webp", title: "Alloys, Interstitials and Compounds", caption: "A visual guide to alloys, interstitial compounds and solid-state behaviour.", width: 1448, height: 1086 }
    ],
  }
];

export function DBlockVisualLibrary() {
  const imageCount = visualGroups.reduce((total, group) => total + group.images.length, 0);

  return (
    <section
      id="visual-atlas"
      className="mx-auto mt-10 max-w-[1500px] rounded-[2rem] border border-cyan-400/20 bg-[#050b14] px-4 py-8 text-slate-100 shadow-[0_30px_110px_rgba(0,0,0,0.42)] sm:px-7 lg:px-10"
    >
      <header className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_32%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.12),transparent_30%),linear-gradient(135deg,#07111f,#0a1525_52%,#0a1020)] px-5 py-8 sm:px-8">
        <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">
          Complete D-block visual library
        </p>
        <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-5xl">
          D-Block Visual Notes Library
        </h2>
        <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300 sm:text-base">
          {imageCount} original dark-theme visuals arranged by concept. Open each collection to study
          configurations, periodic trends, redox energetics, colour, magnetism, catalysis, chromium,
          manganese and industrial applications.
        </p>
        <p className="mt-3 max-w-4xl text-xs leading-6 text-slate-500">
          The written notes and balanced equations remain the authoritative chemistry reference; these
          graphics are visual summaries for faster recall.
        </p>
      </header>

      <div className="mt-7 space-y-5">
        {visualGroups.map((group, groupIndex) => (
          <details
            key={group.title}
            open={groupIndex === 0}
            className="group overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#071321]"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 sm:px-7">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
                  Collection {String(groupIndex + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-1 text-xl font-black text-white sm:text-2xl">{group.title}</h3>
              </div>
              <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-xs font-black text-cyan-200">
                {group.images.length} visuals
              </span>
            </summary>

            <div className="grid gap-5 border-t border-white/10 p-4 sm:p-6 lg:grid-cols-2">
              {group.images.map((image, imageIndex) => (
                <figure
                  key={image.src}
                  className={
                    imageIndex === 0 && groupIndex === 0
                      ? "overflow-hidden rounded-[1.35rem] border border-cyan-300/20 bg-[#030812] lg:col-span-2"
                      : "overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#030812]"
                  }
                >
                  <div className="relative aspect-video overflow-hidden bg-[#02060c]">
                    <img
                      src={image.src}
                      alt={image.title}
                      width={image.width}
                      height={image.height}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-contain transition duration-500 hover:scale-[1.015]"
                    />
                  </div>
                  <figcaption className="border-t border-white/10 px-4 py-4 sm:px-5">
                    <h4 className="font-black text-white">{image.title}</h4>
                    <p className="mt-1.5 text-sm leading-6 text-slate-400">{image.caption}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}


const partVisuals: Record<number, VisualAsset[]> = {
  1: [
    { src: "/notes/d-block/visuals/d-block-elements-a-visual-guide.webp", title: "D-Block Master Visual Atlas", caption: "Chapter overview: classification, properties, colour, magnetism, complexes and catalysis.", width: 1448, height: 1086 },
    { src: "/notes/d-block/visuals/d-block-elements-electronic-configuration-breakdo.webp", title: "Electronic Configuration Breakdown", caption: "Expected and observed configurations with orbital filling and anomalies.", width: 1448, height: 1086 },
    { src: "/notes/d-block/visuals/electron-configurations-and-orbital-anomalies.webp", title: "Orbital Anomalies", caption: "Cr, Cu, Pd, Pt and Au: actual configurations and electron-removal order.", width: 1448, height: 1086 },
    { src: "/notes/d-block/visuals/cu-ag-au-transition-metals-explained.webp", title: "Cu, Ag and Au as Transition Metals", caption: "Why common ions with incomplete d subshells satisfy the transition-element definition.", width: 1672, height: 941 },
    { src: "/notes/d-block/visuals/the-coinage-metals-paradox-explained.webp", title: "The Coinage Metals Paradox", caption: "Filled d10 atoms versus incompletely filled d orbitals in accessible ions.", width: 1672, height: 941 },
  ],
  2: [
    { src: "/notes/d-block/visuals/lanthanide-contraction-explained-visually.webp", title: "Mechanics of Lanthanoid Contraction", caption: "Poor 4f shielding and the rise in effective nuclear charge.", width: 1774, height: 887 },
    { src: "/notes/d-block/visuals/lanthanoid-contraction-infographic-in-neon-style.webp", title: "Lanthanoid Contraction: The Leaky Shield", caption: "Contraction, 4d–5d similarity and density consequences.", width: 1672, height: 941 },
    { src: "/notes/d-block/visuals/the-leaky-shield-in-lanthanoids.webp", title: "The Leaky Shield", caption: "Focused visual of weak 4f shielding.", width: 1145, height: 1374 },
    { src: "/notes/d-block/visuals/the-causal-chain-subatomic-to-macroscopic.webp", title: "From Subatomic to Macroscopic", caption: "Poor shielding to reduced volume and high density.", width: 1774, height: 887 },
    { src: "/notes/d-block/visuals/density-profile-of-the-3d-series.webp", title: "Density Profile of the 3d Series", caption: "General rise in density from Sc toward Cu, followed by Zn.", width: 1774, height: 887 },
    { src: "/notes/d-block/visuals/density-trends-in-the-d-block.webp", title: "Density in the D-Block", caption: "Contraction, packing and heavyweight 5d metals.", width: 1672, height: 941 },
    { src: "/notes/d-block/visuals/the-heavyweight-champions-of-the-periodic-table.webp", title: "The Heavyweight Champions", caption: "Osmium and iridium as exceptionally dense elements.", width: 1774, height: 887 },
  ],
  3: [
    { src: "/notes/d-block/visuals/ionization-energies-in-the-3d-series.webp", title: "Ionisation Energies in the 3d Series", caption: "First, second and third ionisation-energy patterns.", width: 1672, height: 941 },
    { src: "/notes/d-block/visuals/energetic-jumps-and-subshell-stability.webp", title: "Energetic Jumps and Stable Subshells", caption: "Why d5 and d10 configurations resist further ionisation.", width: 1672, height: 941 },
    { src: "/notes/d-block/visuals/manganese-and-technetium-anomalies-infographic.webp", title: "Manganese and Technetium Anomalies", caption: "Comparative visual for the Mn–Tc melting-point anomaly.", width: 1672, height: 941 },
    { src: "/notes/d-block/visuals/the-mn-tc-anomaly-explained.webp", title: "The Mn–Tc Anomaly", caption: "Lattice effects and anomalous melting behaviour.", width: 1672, height: 941 },
    { src: "/notes/d-block/visuals/trends-in-d-block-elements-explained.webp", title: "Trends in D-Block Elements", caption: "A broad visual summary of periodic trends.", width: 1448, height: 1086 },
  ],
  4: [
    { src: "/notes/d-block/visuals/d-block-elements-oxidation-states-and-stability.webp", title: "Oxidation States and Stability", caption: "Element-wise oxidation-state patterns and stability.", width: 1448, height: 1086 },
    { src: "/notes/d-block/visuals/electrode-potentials-across-the-3d-series.webp", title: "Standard Electrode Potentials", caption: "E°(M2+/M) trend across the first transition series.", width: 1672, height: 941 },
    { src: "/notes/d-block/visuals/redox-potentials-across-the-3d-series.webp", title: "Redox Potentials and Exceptions", caption: "Thermochemical competition behind the observed trend.", width: 1672, height: 941 },
    { src: "/notes/d-block/visuals/explaining-reactive-anomalies-in-metals.webp", title: "Explaining Reactive Anomalies", caption: "Mn, Ni and Zn deviations and their electronic origins.", width: 1672, height: 941 },
  ],
  5: [
    { src: "/notes/d-block/visuals/why-transition-metals-speed-up-reactions.webp", title: "Why Transition Metals Are Good Catalysts", caption: "Variable oxidation states, intermediates and surface adsorption.", width: 1672, height: 941 },
    { src: "/notes/d-block/visuals/introduction-to-catalysis-pathways-infographic.webp", title: "Two Distinct Catalytic Pathways", caption: "Chemical redox catalysis and physical surface catalysis.", width: 1672, height: 941 },
    { src: "/notes/d-block/visuals/industrial-catalyst-map-infographic-design.webp", title: "Industrial Catalyst Map of the D-Block", caption: "Major transition-metal catalysts and industrial uses.", width: 1672, height: 941 },
    { src: "/notes/d-block/visuals/industrial-catalyst-map-infographic.webp", title: "Polymers and Synthetics", caption: "Catalysts in polymer and synthetic chemistry.", width: 1672, height: 941 },
    { src: "/notes/d-block/visuals/industrial-catalyst-oxidation-heavyweights.webp", title: "Oxidation Heavyweights", caption: "V2O5, Pt/Rh and MnO2 in industrial oxidation.", width: 1672, height: 941 },
    { src: "/notes/d-block/visuals/industrial-catalyst-reduction-hydrogenation.webp", title: "Reduction and Hydrogenation", caption: "Fe, Ni, Pd and Pt catalysts.", width: 1672, height: 941 },
    { src: "/notes/d-block/visuals/industrial-catalyst-map-design.webp", title: "Specialised Reagents and Halogens", caption: "Specialised transition-metal reagent and catalyst applications.", width: 1672, height: 941 },
  ],
  6: [
    { src: "/notes/d-block/visuals/colour-and-magnetism-in-d-block-complexes.webp", title: "Colour and Magnetism in D-Block Complexes", caption: "Orbital splitting, d–d transitions, charge transfer and magnetic moments.", width: 1672, height: 941 },
    { src: "/notes/d-block/visuals/colour-and-magnetism-of-transition-metals.webp", title: "Colour and Magnetism of Transition Metals", caption: "Representative colours and magnetic behaviour.", width: 1448, height: 1086 },
    { src: "/notes/d-block/visuals/d-block-elements-colour-and-magnetism.webp", title: "D-Block Colour and Magnetism", caption: "Spectra, splitting and magnetic trends.", width: 1448, height: 1086 },
    { src: "/notes/d-block/visuals/ligand-field-theory-and-observed-colour.webp", title: "Ligands, Splitting and Colour", caption: "How ligand strength and geometry alter colour.", width: 1672, height: 941 },
    { src: "/notes/d-block/visuals/ligands-and-color-transitions-diagram.webp", title: "Ligands and Colour Signatures", caption: "Representative nickel-complex colour changes.", width: 1672, height: 941 },
  ],
  7: [
    { src: "/notes/d-block/visuals/d-block-elements-alloys-and-compounds.webp", title: "Alloys, Interstitials and Compounds", caption: "Solid-state behaviour, interstitial phases and alloy formation.", width: 1448, height: 1086 },
    { src: "/notes/d-block/visuals/d-block-elements-chemistry-infographic.webp", title: "D-Block Chemistry Overview", caption: "A visual overview linking structure to bulk properties.", width: 1448, height: 1086 },
  ],
  8: [
    { src: "/notes/d-block/visuals/chromium-chemistry-from-ore-to-oxidation.webp", title: "Chromium Chemistry", caption: "Chromite processing, chromate–dichromate equilibrium and oxidation.", width: 1448, height: 1086 },
    { src: "/notes/d-block/visuals/chromium-and-manganese-reaction-atlas.webp", title: "Chromium and Manganese Reaction Atlas", caption: "Ore-to-oxidant flows, pH control and colour changes.", width: 1448, height: 1086 },
  ],
  9: [
    { src: "/notes/d-block/visuals/manganese-chemistry-oxidation-states-and-reaction.webp", title: "Manganese Chemistry", caption: "Pyrolusite, manganate, permanganate and medium-dependent reduction.", width: 1448, height: 1086 },
    { src: "/notes/d-block/visuals/chromium-and-manganese-reaction-atlas.webp", title: "Chromium and Manganese Reaction Atlas", caption: "Permanganate pathways and medium control.", width: 1448, height: 1086 },
  ],
  10: [
    { src: "/notes/d-block/visuals/d-block-elements-compounds-and-reactions-study.webp", title: "Compounds and Reaction Study", caption: "Important d-block compounds and transformations.", width: 1448, height: 1086 },
    { src: "/notes/d-block/visuals/chemistry-of-d-block-elements-and-catalysis.webp", title: "Complexes and Catalysis", caption: "Coordination chemistry and catalytic roles of transition metals.", width: 1448, height: 1086 },
    { src: "/notes/d-block/visuals/cu-ag-au-transition-metals-explained.webp", title: "Cu, Ag and Au", caption: "Coinage-metal configurations, ions and transition character.", width: 1672, height: 941 },
  ],
};

export function DBlockPartVisuals({ part }: { part: number }) {
  const images = partVisuals[part] ?? [];
  if (!images.length) return null;
  return (
    <section className="mt-10 rounded-[2rem] border border-cyan-400/20 bg-[#050b14] p-4 shadow-[0_30px_100px_rgba(0,0,0,0.35)] sm:p-7">
      <div className="mb-5">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300">Visual learning library</p>
        <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">Part {part} visual atlas</h2>
        <p className="mt-2 text-sm leading-6 text-slate-400">Existing generated D-block visuals placed with the matching theory. Use them for concept recall; verify numerical and reaction details against the written notes.</p>
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
        {images.map((image, index) => (
          <figure key={`${image.src}-${index}`} className={index === 0 ? "overflow-hidden rounded-2xl border border-cyan-300/20 bg-[#02060c] lg:col-span-2" : "overflow-hidden rounded-2xl border border-white/10 bg-[#02060c]"}>
            <div className="relative aspect-video overflow-hidden"><img src={image.src} alt={image.title} width={image.width} height={image.height} loading="lazy" decoding="async" className="h-full w-full object-contain" /></div>
            <figcaption className="border-t border-white/10 px-4 py-4"><h3 className="font-black text-white">{image.title}</h3><p className="mt-1.5 text-sm leading-6 text-slate-400">{image.caption}</p></figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
