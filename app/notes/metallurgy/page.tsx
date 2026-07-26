import Link from "next/link";
import "./metallurgy.css";

const parts = [
  { number: 1, slug: "part-1", title: "Foundations, Ores, Gangue & Physical Concentration", description: "Mineral, ore, gangue, gravity separation and magnetic separation" },
  { number: 2, slug: "part-2", title: "Froth Flotation, Activators, Depressants & Leaching", description: "Surface chemistry, selective flotation and hydrometallurgy" },
  { number: 3, slug: "part-3", title: "Ore Formula Bank, Calcination, Roasting & Sintering", description: "Important ores, thermal conversion and agglomeration" },
  { number: 4, slug: "part-4", title: "Carbon/CO Reduction, Flux–Slag, Self-Reduction & Thermite", description: "Smelting, slag chemistry, self-reduction and aluminothermy" },
  { number: 5, slug: "part-5", title: "Hydrometallurgy & Electrometallurgical Reduction", description: "Cementation, electrowinning and fused-salt electrolysis" },
  { number: 6, slug: "part-6", title: "Complete Refining Toolkit", description: "Liquation, distillation, poling, zone, vapour-phase and electrolytic refining" },
  { number: 7, slug: "part-7", title: "Ellingham Diagram", description: "Oxide stability, slopes, intersections, reduction criteria and limitations" },
  { number: 8, slug: "part-8", title: "Silver, Gold, Cyanide Leaching & Parkes Process", description: "Cyanide extraction, displacement and desilverisation" },
  { number: 9, slug: "part-9", title: "Extraction & Refining of Tin", description: "Cassiterite concentration, smelting and purification" },
  { number: 10, slug: "part-10", title: "Extraction of Magnesium", description: "Carnallite, seawater route and fused magnesium chloride electrolysis" },
  { number: 11, slug: "part-11", title: "Aluminium — Bauxite to High-Purity Metal", description: "Bayer, Serpek, Hall–Héroult and Hoopes processes" },
  { number: 12, slug: "part-12", title: "Lead — Galena to Refined Pb", description: "Flotation, roasting, reduction and refining" },
  { number: 13, slug: "part-13", title: "Copper — Chalcopyrite to Pure Cu", description: "Matte, converter, blister copper, poling and electrorefining" },
  { number: 14, slug: "part-14", title: "Zinc — Sphalerite to Pure Zn", description: "Selective flotation, roasting, reduction and condensation" },
  { number: 15, slug: "part-15", title: "Iron Extraction, Steelmaking & Heat Treatment", description: "Blast furnace, pig iron, steelmaking, alloys and heat treatment" },
  { number: 17, slug: "part-17", title: "Reaction Chemistry, Redox & Nitric Acid", description: "Precipitation, sulphur, disproportionation, nitric acid and passivation" }
] as const;

export const metadata = {
  title: "Metallurgy — JEE Advanced Notes",
  description: "Comprehensive metallurgy notes covering concentration, extraction, reduction, refining, iron, steel and reaction chemistry."
};

export default function MetallurgyPage() {
  return (
    <main className="metallurgy-shell">
      <section className="metallurgy-hero">
        <p className="eyebrow">INORGANIC CHEMISTRY · JEE ADVANCED</p>
        <h1>Metallurgy</h1>
        <img
          className="metallurgy-cover-art"
          src="/notes/metallurgy/reference/metallurgy-hero-dark-v4-r20260726-cachefix.webp"
          alt="Extractive metallurgy elemental blueprint"
        />
      </section>
      <section className="part-grid">
        {parts.map(({ number, slug, title, description }) => (
          <Link key={slug} href={`/notes/metallurgy/${slug}`} className="part-card">
            <span>{String(number).padStart(2, "0")}</span>
            <div><h2>{title}</h2><p>{description}</p></div>
          </Link>
        ))}
      </section>
    </main>
  );
}