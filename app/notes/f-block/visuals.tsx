import Image from "next/image";

type FBlockVisualDef = {
  id: string;
  part: number;
  src: string;
  title: string;
  caption: string;
  alt: string;
};

export const F_BLOCK_VISUALS: FBlockVisualDef[] = [
  { id: "master-overview", part: 1, src: "/images/f-block/00-f-block-master-overview.webp", title: "The F-block at one glance", caption: "A concept-first map linking periodic position, inner-orbital filling, lanthanoid contraction, oxidation states and applications.", alt: "Dark scientific overview of the central concepts in F-block chemistry" },
  { id: "periodic-placement", part: 1, src: "/images/f-block/01-f-block-periodic-placement.webp", title: "Where the two series belong", caption: "The detached rows are continuations of periods 6 and 7; their placement keeps the 18-column table compact without changing atomic-number order.", alt: "Periodic table placement of lanthanoids and actinoids with insertion points" },
  { id: "configuration-property", part: 1, src: "/images/f-block/02-configuration-to-property.webp", title: "Configuration controls property", caption: "Follow the differentiating f electron from orbital occupation to oxidation state, colour, magnetism and bonding.", alt: "Flow map from 4f and 5f configurations to F-block chemical properties" },
  { id: "aufbau", part: 1, src: "/images/f-block/03-aufbau-filling-and-exceptions.webp", title: "Aufbau filling and verified exceptions", caption: "Near-degenerate f, d and s levels create irregular neutral-atom configurations; ion configurations must be written after removing outer electrons first.", alt: "Electronic configuration anchors for lanthanoids and actinoids including modern lawrencium convention" },
  { id: "shielding", part: 1, src: "/images/f-block/04-4f-5f-radial-shielding.webp", title: "Why 4f and 5f chemistry differs", caption: "The more buried 4f shell is weakly ligand-sensitive, whereas the more radially extended 5f shell participates more readily in bonding.", alt: "Radial shielding comparison between 4f and 5f orbitals" },

  { id: "contraction", part: 2, src: "/images/f-block/05-lanthanoid-contraction.webp", title: "Lanthanoid contraction", caption: "Poor 4f shielding lets effective nuclear charge rise from La to Lu, gradually shrinking atoms and especially Ln³⁺ ions.", alt: "Scientific illustration explaining lanthanoid contraction across the series" },
  { id: "contraction-consequences", part: 2, src: "/images/f-block/06-contraction-consequences.webp", title: "Contraction is a cause, not an isolated fact", caption: "Increasing charge density explains decreasing hydroxide basicity, stronger hydration and complex formation, difficult separation and Zr–Hf similarity.", alt: "Cause and consequence map for lanthanoid contraction" },
  { id: "lanthanoid-oxidation", part: 2, src: "/images/f-block/07-lanthanoid-oxidation-state-map.webp", title: "Lanthanoid oxidation-state map", caption: "+3 dominates. Selected +2 and +4 states are favoured by f⁰, f⁷ or f¹⁴ counts, but lattice, hydration and redox energies decide real stability.", alt: "Oxidation-state map for lanthanoids from lanthanum to lutetium" },
  { id: "exceptions", part: 2, src: "/images/f-block/09-f0-f7-f14-exceptions.webp", title: "The f⁰–f⁷–f¹⁴ stability anchors", caption: "Ce⁴⁺, Eu²⁺, Tb⁴⁺ and Yb²⁺ become easier to remember when they are derived from empty, half-filled or filled f shells.", alt: "F-block stability exceptions derived from f0 f7 and f14 configurations" },
  { id: "lanthanoid-colour", part: 2, src: "/images/f-block/10-lanthanoid-colour-mechanism.webp", title: "Colour of lanthanoid ions", caption: "Shielded 4f–4f transitions are usually weak and sharp; f⁰ and f¹⁴ ions are normally colourless unless charge transfer or another chromophore intervenes.", alt: "Energy-level explanation of lanthanoid ion colours" },
  { id: "lanthanoid-magnetism", part: 2, src: "/images/f-block/11-lanthanoid-magnetism.webp", title: "Magnetism across Ln³⁺", caption: "The unpaired-electron count rises to Gd³⁺ and then falls, but quantitative moments generally require L–S–J coupling because orbital angular momentum is not quenched.", alt: "Bar chart of unpaired electrons for trivalent lanthanoid ions" },
  { id: "hydroxide-basicity", part: 2, src: "/images/f-block/17-hydroxide-basicity-trend.webp", title: "Why hydroxide basicity decreases", caption: "As Ln³⁺ becomes smaller, polarising power and Ln–O interaction increase, so ionic character and basicity decrease from La(OH)₃ to Lu(OH)₃.", alt: "Decreasing basicity trend of lanthanoid hydroxides" },

  { id: "actinoid-oxidation", part: 3, src: "/images/f-block/08-actinoid-oxidation-state-matrix.webp", title: "Actinoid oxidation-state landscape", caption: "Early actinoids access high oxidation states using comparable 5f, 6d and 7s energies; the +3 state dominates increasingly toward the later members.", alt: "Matrix of important actinoid oxidation states" },
  { id: "actinoid-colour-magnetism", part: 3, src: "/images/f-block/12-actinoid-colour-and-magnetism.webp", title: "Actinoid colour and magnetism", caption: "5f transitions are more environment-sensitive than 4f transitions; spin–orbit coupling and covalency make simple spin-only predictions unreliable.", alt: "Mechanism map for colour and magnetism of actinoid ions" },
  { id: "actinyl", part: 3, src: "/images/f-block/13-actinyl-ion-structures.webp", title: "Linear actinyl ions", caption: "UO₂²⁺, NpO₂⁺ and PuO₂²⁺ share a strong approximately linear O–An–O unit, while ligands commonly bind in an equatorial plane.", alt: "Structures of uranyl neptunyl and plutonyl ions" },
  { id: "comparison", part: 3, src: "/images/f-block/14-lanthanoids-vs-actinoids.webp", title: "Lanthanoids versus actinoids", caption: "The greater radial reach of 5f orbitals is the master reason for broader oxidation states, stronger covalency and greater complex formation among actinoids.", alt: "Detailed comparison of lanthanoids and actinoids" },
  { id: "reactions", part: 3, src: "/images/f-block/16-important-compounds-and-reactions.webp", title: "High-value compounds and balanced reactions", caption: "A compact, medium-aware reaction board covering normal lanthanoid products, Ce(IV) redox, ceria oxygen storage and uranium oxide reduction.", alt: "Balanced important reactions and compounds of F-block elements" },
  { id: "complex-formation", part: 3, src: "/images/f-block/18-complex-formation.webp", title: "Complex formation: hard-ion logic", caption: "Ln³⁺ ions prefer hard oxygen donors and often high coordination numbers; actinoids add stronger covalency and actinyl-specific equatorial coordination.", alt: "Comparison of complex formation by lanthanoids and actinoids" },

  { id: "separation", part: 4, src: "/images/f-block/15-lanthanoid-separation.webp", title: "Why separation is difficult—and how it works", caption: "Near-identical +3 chemistry makes simple precipitation weakly selective; repeated ion exchange or solvent extraction amplifies small size and complex-stability differences.", alt: "Lanthanoid separation by ion exchange and solvent extraction" },
  { id: "applications", part: 4, src: "/images/f-block/19-f-block-applications.webp", title: "Applications tied to electronic structure", caption: "Magnets, phosphors, lasers, catalysts, MRI contrast chemistry and nuclear-energy materials all follow from f-electron magnetism, spectra, redox and radioactivity.", alt: "Real applications of lanthanoids and actinoids" },
  { id: "jee-traps", part: 4, src: "/images/f-block/20-jee-exception-trap-map.webp", title: "JEE Advanced exception and trap map", caption: "A decision tree for the statements most often confused: d-block placement, colourless ions, magnetic formulae, contraction consequences and oxidation-state stability.", alt: "JEE Advanced decision tree for F-block exceptions and common traps" },
];

function VisualCard({ visual, priority = false }: { visual: FBlockVisualDef; priority?: boolean }) {
  return (
    <figure className="group overflow-hidden rounded-lg border border-fuchsia-300/15 bg-[#080d19] shadow-2xl shadow-black/25">
      <div className="border-b border-white/10 px-5 py-4 sm:px-7">
        <p className="text-[11px] font-black uppercase tracking-[.18em] text-fuchsia-300">F-block visual atlas</p>
        <h3 className="mt-1 text-xl font-black text-white sm:text-2xl">{visual.title}</h3>
      </div>
      <div className="relative aspect-video overflow-hidden bg-[#07111d]">
        <Image
          src={visual.src}
          alt={visual.alt}
          fill
          priority={priority}
          sizes="(max-width: 1024px) 100vw, 1100px"
          className="object-contain transition-transform duration-500 group-hover:scale-[1.01]"
        />
      </div>
      <figcaption className="border-t border-white/10 px-5 py-3 text-sm leading-6 text-slate-400 sm:px-7">{visual.caption}</figcaption>
    </figure>
  );
}

export function FBlockVisual({ part, heroOnly = false }: { part: number; heroOnly?: boolean }) {
  const visuals = F_BLOCK_VISUALS.filter((visual) => visual.part === part);
  const shown = heroOnly ? visuals.slice(0, 1) : visuals;

  return (
    <section aria-label={`F-block part ${part} visual atlas`} className="space-y-5">
      {shown.map((visual, index) => <VisualCard key={visual.id} visual={visual} priority={part === 1 && index === 0} />)}
    </section>
  );
}
