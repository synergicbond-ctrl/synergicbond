import { notFound } from "next/navigation";
import Link from "next/link";
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
};

export function generateStaticParams() {
  return Object.keys(loaders).map((part) => ({ part }));
}

export default async function MetallurgyPartPage({ params }: { params: Promise<{ part: string }> }) {
  const { part } = await params;
  const loader = loaders[part];
  if (!loader) notFound();
  const { default: content } = await loader();
  const n = Number(part.replace("part-", ""));
  return (
    <main className="metallurgy-shell">
      <nav className="part-nav"><Link href="/notes/metallurgy">← Metallurgy</Link><span>Part {n} of 8</span></nav>
      <MetallurgyMarkdown content={content} />
      <nav className="part-nav bottom">
        {n > 1 ? <Link href={`/notes/metallurgy/part-${n - 1}`}>← Previous</Link> : <span />}
        {n < 8 ? <Link href={`/notes/metallurgy/part-${n + 1}`}>Next →</Link> : <Link href="/notes/metallurgy">Chapter Hub →</Link>}
      </nav>
    </main>
  );
}
