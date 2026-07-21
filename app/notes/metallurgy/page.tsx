import Link from "next/link";
import "./metallurgy.css";

const parts = [
  ["part-1", "Foundations & Concentration of Ores", "Minerals, ores, gangue, beneficiation, gravity, magnetic separation and froth flotation"],
  ["part-2", "Thermal Treatment, Reduction & Early Refining", "Calcination, roasting, flux/slag, reduction routes, thermite, electro/hydrometallurgy and poling"],
  ["part-3", "Refining, Ellingham, Silver & Gold", "Liquation, distillation, zone/vapour refining, electrorefining, Ellingham diagram, cyanide and Parkes processes"],
  ["part-4", "Extraction of Tin & Magnesium", "Cassiterite concentration/smelting, MgCl₂ preparation, Dow seawater route and fused-salt electrolysis"],
  ["part-5", "Extraction & Refining of Aluminium", "Bauxite purification, Bayer/Hall/Serpek routes, Hall–Héroult electrolysis and Hoopes refining"],
  ["part-6", "Extraction of Pb, Cu & Zn", "Galena, chalcopyrite and zinc ores; roasting, smelting, self-reduction, Bessemerisation and refining"],
  ["part-7", "Iron, Steel & Heat Treatment", "Blast furnace, pig iron, steel-making, alloy additions, annealing, quenching, tempering and case hardening"],
  ["part-8", "Source Appendix: Reaction Chemistry", "All meaningful supplementary material from source pages 72–81 retained and scientifically corrected"],
] as const;

export const metadata = {
  title: "Metallurgy — Complete JEE Notes",
  description: "Complete JEE Main and Advanced metallurgy notes rebuilt from the full source with corrected chemistry and original diagrams.",
};

export default function MetallurgyPage() {
  return (
    <main className="metallurgy-shell">
      <section className="metallurgy-hero">
        <p className="eyebrow">INORGANIC CHEMISTRY · JEE MAIN + ADVANCED</p>
        <h1>Metallurgy</h1>
        <p>Complete extraction-of-metals notes: principles → concentration → reduction → refining → metal-specific flows.</p>
      </section>
      <section className="part-grid">
        {parts.map(([slug, title, description], i) => (
          <Link key={slug} href={`/notes/metallurgy/${slug}`} className="part-card">
            <span>{String(i + 1).padStart(2, "0")}</span>
            <div><h2>{title}</h2><p>{description}</p></div>
          </Link>
        ))}
      </section>
    </main>
  );
}
