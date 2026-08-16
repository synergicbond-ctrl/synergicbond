import { redirect } from "next/navigation";
import { findYear } from "@/lib/university/curriculum";

// Semesters don't have their own distinct view yet — the Year page already
// lists every semester's papers. This route exists so a bookmarked or typed
// /university-chemistry/[year]/[semester] URL lands somewhere real instead
// of 404ing, by sending the reader to the right anchor on the Year page.
export default async function UniversitySemesterPage({
  params,
}: {
  params: Promise<{ year: string; semester: string }>;
}) {
  const { year: yearSlug, semester: semesterSlug } = await params;
  const year = findYear(yearSlug);
  const semester = year?.semesters.find((s) => s.slug === semesterSlug);
  redirect(`/university-chemistry/${yearSlug}${semester ? `#${semesterSlug}` : ""}`);
}
