import Link from "next/link";
import { reactionSlug } from "@/lib/reactionSlug";

export default function RelatedReactions({ items }: { items: string[] }) {
  if (!items.length) return null;
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((r) => (
        <Link
          key={r}
          href={`/learn/reactions/${reactionSlug(r)}`}
          className="rounded-xl border border-white/[0.08] bg-[#111827] px-3 py-2 text-[13px] text-white/80 transition hover:border-purple-400/30 hover:text-white"
        >
          {r} →
        </Link>
      ))}
    </div>
  );
}
