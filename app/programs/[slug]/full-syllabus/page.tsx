import Link from "next/link";
import { notFound } from "next/navigation";
import { getProgram, PROGRAMS } from "@/lib/programs";
import { getProgramSyllabus, HUB_SYLLABUS_MAP, BRANCH_LABELS } from "@/lib/programSyllabus";
import FullSyllabusDashboard from "@/components/dashboard/FullSyllabusDashboard";
import { requireProgramEntitlement } from "@/lib/auth/guards";

// ─────────────────────────────────────────────────────────────────────────────
// /programs/[slug]/full-syllabus — the program Full Syllabus Dashboard
// Supports all entrance and olympiad tracks: NEET, JEE Main, JEE Advanced, Olympiad.
// Strictly program isolated with 0 cross-program content leakage.
// ─────────────────────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return PROGRAMS.map(({ slug }) => ({ slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProgram(slug);
  return p ? { title: `${p.name} Chemistry — Full Syllabus Dashboard` } : {};
}

export default async function ProgramFullSyllabusPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) notFound();
  // This dashboard contains the enrolled programme's complete chapter plan;
  // the catalogue hub remains browsable, but the dashboard itself is not a
  // preview and must verify the exact entitlement server-side.
  await requireProgramEntitlement(slug, `/programs/${slug}/full-syllabus`);

  // Retrieve official verified syllabus units for this program
  const syllabusKeys = HUB_SYLLABUS_MAP[slug] || [];
  const allUnits = syllabusKeys.flatMap((key) => {
    const syl = getProgramSyllabus(key);
    return syl ? syl.units.map((u) => ({
      id: u.id,
      name: u.title,
      unit: u.branch,
      category: BRANCH_LABELS[u.branch] || u.branch,
    })) : [];
  });

  return (
    <FullSyllabusDashboard
      programKey={slug}
      programName={`${program.name} Chemistry`}
      programType={slug === "olympiad" ? "olympiad" : "entrance"}
      classLevel="All"
      chapters={allUnits}
      backUrl={`/programs/${slug}`}
      backLabel={`Back to ${program.name} Hub`}
    />
  );
}
