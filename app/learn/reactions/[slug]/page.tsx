"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Star, Bookmark, Share2, Loader2, FlaskConical, Brain } from "lucide-react";
import MoleculeLogo from "@/components/MoleculeLogo";
import { HIGH_YIELD } from "@/lib/nameReactions";
import { reactionFromSlug, reactionSlug } from "@/lib/reactionSlug";
import type { Mechanism } from "@/lib/mechanismSchema";
import ReactionDashboard from "@/components/mechanism/ReactionDashboard";
import FlowMap from "@/components/mechanism/FlowMap";
import MechanismSteps from "@/components/mechanism/MechanismSteps";
import JeeQuickView from "@/components/mechanism/JeeQuickView";
import StereoCard from "@/components/mechanism/StereoCard";
import ExamplesEngine from "@/components/mechanism/ExamplesEngine";
import RelatedReactions from "@/components/mechanism/RelatedReactions";
import PracticeDrawer from "@/components/mechanism/PracticeDrawer";
import QuizDrawer from "@/components/mechanism/QuizDrawer";
import { getReactionGraph } from "@/lib/chemistry/graph";
import { highYieldReactions } from "@/lib/chemistry/reactions";

const THEME = {
  chip: "bg-purple-500/15 text-purple-200 border-purple-400/30",
  glow: "shadow-[0_0_60px_-15px_rgba(168,85,247,0.5)]",
  grad: "from-purple-500/15 to-fuchsia-500/5",
  border: "border-purple-400/20",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-6">
      <h2 className="mb-2.5 text-sm font-black uppercase tracking-wider text-white/45">{title}</h2>
      {children}
    </section>
  );
}

function readReactionBookmarks(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const saved = JSON.parse(localStorage.getItem("sb_reaction_bookmarks") || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function getReactionLanguage(): string {
  return (typeof window !== "undefined" && localStorage.getItem("sb_lang")) || "english";
}

function readCachedMechanism(slug: string): Mechanism | null {
  if (typeof window === "undefined") return null;
  try {
    const cached = localStorage.getItem(`sb_mech_${slug}_${getReactionLanguage()}`);
    return cached ? JSON.parse(cached) : null;
  } catch {
    return null;
  }
}

export default function ReactionLessonPage() {
  const params = useParams();
  const router = useRouter();
  const slug = String(params?.slug || "");
  const name = reactionFromSlug(slug);
  const [initialMechanism] = useState<Mechanism | null>(() => (name ? readCachedMechanism(slug) : null));

  const [mech, setMech] = useState<Mechanism | null>(initialMechanism);
  const [loading, setLoading] = useState(() => !!name && !initialMechanism);
  const [error, setError] = useState(false);
  const [bookmarks, setBookmarks] = useState<string[]>(readReactionBookmarks);
  const [copied, setCopied] = useState(false);
  const [practiceOpen, setPracticeOpen] = useState(false);
  const [quizOpen, setQuizOpen] = useState(false);

  const highYield = !!name && HIGH_YIELD.has(name);
  const bookmarked = bookmarks.includes(slug);
  const graphReaction = highYieldReactions.find((reaction) => reactionSlug(reaction.name) === slug);
  const reactionGraph = graphReaction ? getReactionGraph(graphReaction.id) : null;

  useEffect(() => {
    if (!name) return;
    const language = getReactionLanguage();
    const cacheKey = `sb_mech_${slug}_${language}`;

    let active = true;
    (async () => {
      try {
        const res = await fetch("/api/reaction", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ reaction: name, slug, language }),
        });
        const data = await res.json().catch(() => null);
        if (!active) return;
        if (res.ok && data?.mechanism) {
          setMech(data.mechanism);
          setError(false);
          try { localStorage.setItem(cacheKey, JSON.stringify(data.mechanism)); } catch {}
        } else {
          setMech((m) => { if (!m) setError(true); return m; });
        }
      } catch {
        if (active) setMech((m) => { if (!m) setError(true); return m; });
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => { active = false; };
  }, [name, slug]);

  function toggleBookmark() {
    try {
      const saved = readReactionBookmarks();
      const next = saved.includes(slug) ? saved.filter((s) => s !== slug) : [...saved, slug];
      localStorage.setItem("sb_reaction_bookmarks", JSON.stringify(next));
      setBookmarks(next);
    } catch {}
  }
  async function share() {
    const url = typeof window !== "undefined" ? window.location.href : "";
    try {
      if (navigator.share) await navigator.share({ title: name || "Reaction", url });
      else { await navigator.clipboard.writeText(url); setCopied(true); setTimeout(() => setCopied(false), 1500); }
    } catch {}
  }

  if (!name) {
    return (
      <main className="min-h-screen bg-[#0B0F19] text-white">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <p className="text-white/60">Reaction not found.</p>
          <Link href="/name-reactions" className="mt-4 inline-block rounded-xl border border-white/10 px-4 py-2 text-sm text-cyan-300 hover:bg-white/5">← Back to Name Reactions</Link>
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
            <MoleculeLogo size={26} /><span className="hidden text-sm font-black tracking-tight sm:inline">SYNERGIC BOND</span>
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
        {/* Hero */}
        <div className={`rounded-3xl border ${THEME.border} bg-gradient-to-br ${THEME.grad} ${THEME.glow} p-5 sm:p-6`}>
          <span className={`inline-block rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${THEME.chip}`}>Named Reaction</span>
          <h1 className="mt-2 flex items-start gap-2 text-2xl font-black sm:text-3xl"><span>⚗️</span> {name}</h1>
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
            <button onClick={() => setPracticeOpen(true)} disabled={!mech} className="flex items-center gap-1.5 rounded-xl bg-white/[0.06] px-3.5 py-2 text-sm font-semibold text-white/80 transition hover:bg-white/10 disabled:opacity-40">
              <FlaskConical className="h-4 w-4" /> Practice
            </button>
            <button onClick={() => setQuizOpen(true)} disabled={!mech} className="flex items-center gap-1.5 rounded-xl bg-white/[0.06] px-3.5 py-2 text-sm font-semibold text-white/80 transition hover:bg-white/10 disabled:opacity-40">
              <Brain className="h-4 w-4" /> Quiz
            </button>
          </div>
        </div>

        {/* States */}
        {!mech && loading && (
          <div className="flex flex-col items-center justify-center gap-3 py-20 text-white/50">
            <Loader2 className="h-6 w-6 animate-spin text-purple-400" />
            <span className="text-sm">Building the reaction dashboard…</span>
          </div>
        )}
        {!mech && !loading && error && (
          <div className="mt-6 rounded-2xl border border-white/[0.08] bg-[#111827] p-6 text-center text-white/60">
            ⚠️ This reaction isn’t ready yet. Please try again in a few moments.
          </div>
        )}

        {/* Content (typed sections) */}
        {mech && (
          <>
            <Section title="Reaction Dashboard"><ReactionDashboard d={mech.dashboard} /></Section>
            {reactionGraph && (
              <Section title="Knowledge Graph">
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-4">
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
                    {[
                      ["Reagents", reactionGraph.reagents.length],
                      ["Exceptions", reactionGraph.exceptions.length],
                      ["Orders", reactionGraph.orders.length],
                      ["PYQs", reactionGraph.pyqs.length],
                      ["NCERT", reactionGraph.ncertLinks.length],
                    ].map(([label, count]) => (
                      <div key={label} className="rounded-xl bg-black/20 p-3">
                        <p className="text-[10px] font-black uppercase tracking-wider text-white/35">{label}</p>
                        <p className="mt-1 text-lg font-black text-white">{count}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {reactionGraph.reagents.slice(0, 4).map((node) => (
                      <span key={node.id} className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-2.5 py-1 text-xs text-cyan-200">
                        {node.label}
                      </span>
                    ))}
                    {reactionGraph.exceptions.slice(0, 3).map((node) => (
                      <span key={node.id} className="rounded-full border border-amber-400/20 bg-amber-500/10 px-2.5 py-1 text-xs text-amber-200">
                        {node.label}
                      </span>
                    ))}
                    {reactionGraph.pyqs.slice(0, 3).map((pyq) => (
                      <span key={pyq.id} className="rounded-full border border-indigo-400/20 bg-indigo-500/10 px-2.5 py-1 text-xs text-indigo-200">
                        {pyq.year}
                      </span>
                    ))}
                    {reactionGraph.ncertLinks.slice(0, 2).map((link) => (
                      <span key={`${link.entityId}-${link.ncertReference.topic}`} className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-2.5 py-1 text-xs text-emerald-200">
                        {link.ncertReference.chapter}
                      </span>
                    ))}
                  </div>
                </div>
              </Section>
            )}
            {mech.flowMap.length > 0 && <Section title="Reaction Flow Map"><FlowMap nodes={mech.flowMap} /></Section>}
            <Section title="Mechanism"><MechanismSteps steps={mech.steps} /></Section>
            <Section title="JEE Quick View"><JeeQuickView q={mech.quickView} /></Section>
            <Section title="Stereochemistry"><StereoCard s={mech.stereochemistry} /></Section>
            {mech.examples.length > 0 && <Section title="Examples"><ExamplesEngine examples={mech.examples} /></Section>}
            {mech.relatedReactions.length > 0 && <Section title="Related Reactions"><RelatedReactions items={mech.relatedReactions} /></Section>}
          </>
        )}
      </div>

      {mech && (
        <>
          <PracticeDrawer open={practiceOpen} onClose={() => setPracticeOpen(false)} name={name} examples={mech.examples} />
          <QuizDrawer open={quizOpen} onClose={() => setQuizOpen(false)} name={name} examples={mech.examples} />
        </>
      )}
    </main>
  );
}
