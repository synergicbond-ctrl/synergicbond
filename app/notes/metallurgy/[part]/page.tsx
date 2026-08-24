import { notFound, redirect } from "next/navigation";
import { AppShell } from "@/components/AppShell";
import MetallurgyMarkdown from "../MetallurgyMarkdown";

const loaders: Record<string, () => Promise<{ default: string }>> = {
  "part-1": () => import("../parts/part01"),
  "part-2": () => import("../parts/part02"),
  "part-3": () => import("../parts/part03"),
  "part-4": () => import("../parts/part04"),
  "part-5": () => import("../parts/part05"),
  "part-6": () => import("../parts/part06"),
  "part-7": () => import("../parts/part07"),
  "part-8": () => import("../parts/part08"),
  "part-9": () => import("../parts/part09"),
  "part-10": () => import("../parts/part10"),
  "part-11": () => import("../parts/part11"),
  "part-12": () => import("../parts/part12"),
  "part-13": () => import("../parts/part13"),
  "part-14": () => import("../parts/part14"),
  "part-15": () => import("../parts/part15"),
  "part-17": () => import("../parts/part17")
};

const activeParts = [
  "part-1", "part-2", "part-3", "part-4", "part-5", "part-6",
  "part-7", "part-8", "part-9", "part-10", "part-11", "part-12",
  "part-13", "part-14", "part-15", "part-17"
] as const;

export function generateStaticParams() {
  return activeParts.map((part) => ({ part }));
}

export default async function MetallurgyPartPage({
  params
}: {
  params: Promise<{ part: string }>;
}) {
  const { part } = await params;
  if (part === "part-16") redirect("/notes/metallurgy/part-15");
  if (part === "part-18") redirect("/notes/metallurgy/part-17");

  const loader = loaders[part];
  if (!loader) notFound();

  const { default: content } = await loader();
  const index = activeParts.indexOf(part as (typeof activeParts)[number]);
  const number = Number(part.replace("part-", ""));
  const previous = index > 0 ? activeParts[index - 1] : null;
  const next = index >= 0 && index < activeParts.length - 1 ? activeParts[index + 1] : null;

  return (
    <AppShell
      discipline="Inorganic Chemistry · JEE Advanced"
      chapterTitle="Metallurgy"
      chapterSlug="metallurgy"
      description="Comprehensive metallurgy notes covering concentration, extraction, reduction, refining, iron, steel and reaction chemistry."
      free={false}
      lessonNumber={`Part ${number}`}
      hubRef={{ href: "/notes/metallurgy", label: "Chapter hub" }}
      prevRef={previous ? { href: `/notes/metallurgy/${previous}`, label: "Previous" } : undefined}
      nextRef={next ? { href: `/notes/metallurgy/${next}`, label: "Next" } : undefined}
    >
      <div className="mx-auto max-w-3xl">
        <MetallurgyMarkdown content={content} />
      </div>
    </AppShell>
  );
}
