"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Star, Bookmark, Share2, Sparkles, Loader2, ChevronDown, FlaskConical, Brain } from "lucide-react";
import MoleculeLogo from "@/components/MoleculeLogo";
import { HIGH_YIELD } from "@/lib/nameReactions";
import { reactionFromSlug, reactionSlug } from "@/lib/reactionSlug";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

const UNAVAILABLE = "⚠️ Explanation temporarily unavailable. Please try again in a few moments.";

// Named Reactions theme = purple (color-coded learning system).
const THEME = {
  label: "Named Reaction",
  ring: "ring-purple-400/30",
  text: "text-purple-300",
  chip: "bg-purple-500/15 text-purple-200 border-purple-400/30",
  glow: "shadow-[0_0_60px_-15px_rgba(168,85,247,0.5)]",
  grad: "from-purple-500/15 to-fuchsia-500/5",
  border: "border-purple-400/20",
};

interface Section {
  title: string;
  body: string;
}

// Split the generated markdown ("## title" + "### N. Heading" blocks) into
// individual sections so each renders as its own collapsible card.
function parseSections(md: string): Section[] {
  const chunks = md.split(/\n(?=###\s)/);
  const out: Section[] = [];
  for (const chunk of chunks) {
    const m = chunk.match(/^###\s+(.*)/);
    if (!m) continue;
    const title = m[1].replace(/^\d+\.\s*/, "").trim();
    const body = chunk.slice(chunk.indexOf("\n") + 1).trim();
    if (title) out.push({ title, body });
  }
  return out;
}

const remarkPlugins = [remarkGfm, remarkMath];
const rehypePlugins = [rehypeKatex];

const proseClass =
  "prose-invert text-sm leading-relaxed text-white/80 [&_h2]:hidden [&_strong]:text-white [&_ol]:my-2 [&_ol]:list-decimal [&_ol]:pl-5 [&_ul]:my-2 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:my-1 [&_p]:my-2 [&_hr]:my-3 [&_hr]:border-white/10 [&_code]:rounded [&_code]:bg-white/10 [&_code]:px-1 [&_code]:py-0.5 [&_table]:my-3 [&_table]:w-full [&_table]:block [&_table]:overflow-x-auto [&_table]:text-xs [&_table]:border-collapse [&_th]:border [&_th]:border-white/10 [&_th]:bg-white/[0.05] [&_th]:px-2 [&_th]:py-1.5 [&_th]:text-left [&_th]:text-purple-200 [&_td]:border [&_td]:border-white/10 [&_td]:px-2 [&_td]:py-1.5 [&_td]:align-top";

function AccordionCard({ section, defaultOpen }: { section: Section; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div className={`rounded-2xl border ${THEME.border} bg-[#111827] overflow-hidden`}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left transition hover:bg-white/[0.03]"
      >
        <span className="text-sm font-black text-white">{section.title}</span>
        <ChevronDown className={`h-4 w-4 shrink-0 text-white/40 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="border-t border-white/[0.06] px-4 py-3.5">
          <div className={proseClass}>
            <ReactMarkdown remarkPlugins={remarkPlugins} rehypePlugins={rehypePlugins}>{section.body}</ReactMarkdown>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ReactionLessonPage() {
  const params = useParams();
  const router = useRouter();
  const slug = String(params?.slug || "");
  const name = reactionFromSlug(slug);

  const [explanation, setExplanation] = useState("");
  const [loading, setLoading] = useState(true);
  const [bookmarked, setBookmarked] = useState(false);
  const [copied, setCopied] = useState(false);

  const highYield = !!name && HIGH_YIELD.has(name);

  useEffect(() => {
    if (!name) return;
    try {
      const saved = JSON.parse(localStorage.getItem("sb_reaction_bookmarks") || "[]");
      setBookmarked(Array.isArray(saved) && saved.includes(slug));
    } catch {}
  }, [name, slug]);

  useEffect(() => {
    if (!name) {
      setLoading(false);
      return;
    }
    let active = true;
    setLoading(true);
    setExplanation("");
    (async () => {
      try {
        const language = typeof window !== "undefined" ? localStorage.getItem("sb_lang") || "english" : "english";
        const res = await fetch("/api/reaction", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ reaction: name, language }),
        });
        const data = await res.json().catch(() => null);
        if (active) setExplanation((res.ok && data?.explanation) || UNAVAILABLE);
      } catch {
        if (active) setExplanation(UNAVAILABLE);
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, [name]);

  const sections = useMemo(() => parseSections(explanation), [explanation]);

  function toggleBookmark() {
    try {
      const saved: string[] = JSON.parse(localStorage.getItem("sb_reaction_bookmarks") || "[]");
      const next = saved.includes(slug) ? saved.filter((s) => s !== slug) : [...saved, slug];
      localStorage.setItem("sb_reaction_bookmarks", JSON.stringify(next));
      setBookmarked(next.includes(slug));
    } catch {}
  }

  async function share() {
    const url = typeof window !== "undefined" ? window.location.href : "";
    try {
      if (navigator.share) await navigator.share({ title: name || "Reaction", url });
      else {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }
    } catch {}
  }

  if (!name) {
    return (
      <main className="min-h-screen bg-[#0B0F19] text-white">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <p className="text-white/60">Reaction not found.</p>
          <Link href="/name-reactions" className="mt-4 inline-block rounded-xl border border-white/10 px-4 py-2 text-sm text-cyan-300 hover:bg-white/5">
            ← Back to Name Reactions
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0B0F19] text-white">
      {/* Sticky learning header */}
      <div className="sticky top-0 z-40 border-b border-white/[0.07] bg-[#0B0F19]/90 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-4 py-2.5">
          <button onClick={() => router.back()} className="flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-sm text-white/70 transition hover:bg-white/5 hover:text-white">
            <ArrowLeft className="h-4 w-4" /> <span className="hidden sm:inline">Back</span>
          </button>
          <Link href="/" className="flex items-center gap-2" aria-label="Home">
            <MoleculeLogo size={26} />
            <span className="hidden text-sm font-black tracking-tight sm:inline">SYNERGIC BOND</span>
          </Link>
          <div className="flex items-center gap-1">
            <button onClick={toggleBookmark} aria-label="Bookmark" className={`rounded-lg p-2 transition hover:bg-white/5 ${bookmarked ? "text-amber-400" : "text-white/60 hover:text-white"}`}>
              <Bookmark className={`h-4 w-4 ${bookmarked ? "fill-amber-400" : ""}`} />
            </button>
            <button onClick={share} aria-label="Share" className="relative rounded-lg p-2 text-white/60 transition hover:bg-white/5 hover:text-white">
              <Share2 className="h-4 w-4" />
              {copied && <span className="absolute -bottom-7 right-0 rounded bg-white/10 px-2 py-0.5 text-[10px] text-white/80">Copied</span>}
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-5 sm:px-6">
        {/* Hero banner */}
        <div className={`rounded-3xl border ${THEME.border} bg-gradient-to-br ${THEME.grad} ${THEME.glow} p-5 sm:p-6`}>
          <span className={`inline-block rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${THEME.chip}`}>
            {THEME.label}
          </span>
          <h1 className="mt-2 flex items-start gap-2 text-2xl font-black sm:text-3xl">
            <span>⚗️</span> {name}
          </h1>
          {highYield && (
            <div className="mt-2 flex items-center gap-1 text-amber-400">
              {Array.from({ length: 4 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-amber-400" />)}
              <span className="ml-1 text-xs font-semibold text-amber-300/90">High-yield · NEET / JEE</span>
            </div>
          )}
          <div className="mt-4 flex flex-wrap gap-2">
            <button onClick={toggleBookmark} className={`flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-sm font-semibold transition ${bookmarked ? "bg-amber-500/20 text-amber-200 ring-1 ring-amber-400/40" : "bg-white/[0.06] text-white/80 hover:bg-white/10"}`}>
              <Bookmark className={`h-4 w-4 ${bookmarked ? "fill-amber-300" : ""}`} /> {bookmarked ? "Saved" : "Save"}
            </button>
            <Link href="/quiz" className="flex items-center gap-1.5 rounded-xl bg-white/[0.06] px-3.5 py-2 text-sm font-semibold text-white/80 transition hover:bg-white/10">
              <FlaskConical className="h-4 w-4" /> Practice
            </Link>
            <Link href="/quiz" className="flex items-center gap-1.5 rounded-xl bg-white/[0.06] px-3.5 py-2 text-sm font-semibold text-white/80 transition hover:bg-white/10">
              <Brain className="h-4 w-4" /> Quiz
            </Link>
          </div>
        </div>

        {/* Content */}
        {loading ? (
          <div className="flex flex-col items-center justify-center gap-3 py-20 text-white/50">
            <Loader2 className="h-6 w-6 animate-spin text-purple-400" />
            <span className="text-sm">Generating the full reaction note…</span>
          </div>
        ) : sections.length > 0 ? (
          <div className="mt-5 space-y-2.5">
            {sections.map((s, i) => (
              <AccordionCard key={s.title + i} section={s} defaultOpen={i === 0} />
            ))}
          </div>
        ) : (
          <div className="mt-5 rounded-2xl border border-white/[0.08] bg-[#111827] p-5">
            <div className="mb-2 flex items-center gap-2 text-purple-300">
              <Sparkles className="h-4 w-4" /> <span className="text-sm font-bold">{name}</span>
            </div>
            <div className={proseClass}>
              <ReactMarkdown remarkPlugins={remarkPlugins} rehypePlugins={rehypePlugins}>{explanation}</ReactMarkdown>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
