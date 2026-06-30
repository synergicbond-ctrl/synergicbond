"use client";

import { useState } from "react";

const QUICK_COMPOUNDS = ["H2O", "NaCl", "H2SO4", "Glucose", "Benzene", "NH3", "CO2", "Ethanol", "Aspirin", "Caffeine"];

type MoleculeData = {
  name?: string;
  commonName?: string;
  formula?: string;
  molecularWeight?: string;
  structure?: string;
  pubchemCID?: string | number | null;
  appearance?: string;
  properties?: {
    meltingPoint?: string;
    boilingPoint?: string;
    density?: string;
    solubility?: string;
    state?: string;
  };
  uses?: string[];
  examRelevance?: {
    chapters?: string[];
    importantFacts?: string[];
  };
  funFact?: string;
};

export default function MoleculePage() {
  const [compound, setCompound] = useState("");
  const [data, setData] = useState<MoleculeData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSearch(name?: string) {
    const query = name || compound;
    if (!query.trim()) return;
    setLoading(true);
    setData(null);
    setError("");
    try {
      const res = await fetch("/api/molecule", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ compound: query }),
      });
      const result = await res.json();
      if (result.error) setError(result.error);
      else setData(result);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Failed to load molecule.");
    } finally {
      setLoading(false);
    }
  }

  const pubchemUrl = data?.pubchemCID
    ? `https://pubchem.ncbi.nlm.nih.gov/compound/${data.pubchemCID}`
    : null;

  return (
    <main className="min-h-screen bg-black text-white px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight">🧬 Molecule Explorer</h1>
          <p className="mt-2 text-white/60">Type any compound → get full properties, exam facts, and 3D structure</p>
        </div>

        {/* Search */}
        <div className="flex gap-3 mb-4">
          <input value={compound} onChange={(e) => setCompound(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder="Enter compound name or formula (e.g. Benzene, H2SO4)"
            className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 focus:outline-none focus:border-cyan-500" />
          <button onClick={() => handleSearch()}
            className="rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 font-bold text-black">
            {loading ? "..." : "Explore"}
          </button>
        </div>

        {/* Quick picks */}
        <div className="flex flex-wrap gap-2 mb-8">
          {QUICK_COMPOUNDS.map((c) => (
            <button key={c} onClick={() => { setCompound(c); handleSearch(c); }}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/70 hover:bg-cyan-500/20 hover:text-cyan-300 transition">
              {c}
            </button>
          ))}
        </div>

        {error && <p className="text-red-400 mb-4">{error}</p>}

        {loading && (
          <div className="text-center py-20 text-white/40">
            <div className="text-5xl mb-4 animate-pulse">⚗️</div>
            <p>Analyzing molecule...</p>
          </div>
        )}

        {data && (
          <div className="space-y-6">
            {/* Header */}
            <div className="rounded-2xl border border-cyan-500/20 bg-cyan-950/20 p-6">
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div>
                  <h2 className="text-3xl font-bold text-cyan-300">{data.formula}</h2>
                  <p className="text-xl text-white mt-1">{data.commonName}</p>
                  <p className="text-white/50 text-sm mt-1">{data.name}</p>
                </div>
                <div className="text-right">
                  <p className="text-white/40 text-xs">Molecular Weight</p>
                  <p className="text-2xl font-bold">{data.molecularWeight}</p>
                  <p className="text-white/40 text-xs mt-2">State at RT</p>
                  <p className="text-white capitalize">{data.properties?.state}</p>
                </div>
              </div>
              {pubchemUrl && (
                <a href={pubchemUrl} target="_blank" rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-xl bg-blue-600/20 border border-blue-500/30 px-4 py-2 text-sm text-blue-300 hover:bg-blue-600/30 transition">
                  🔬 View 3D Structure on PubChem →
                </a>
              )}
            </div>

            {/* Properties */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { label: "Melting Point", value: data.properties?.meltingPoint },
                { label: "Boiling Point", value: data.properties?.boilingPoint },
                { label: "Density", value: data.properties?.density },
                { label: "Solubility in Water", value: data.properties?.solubility },
                { label: "Appearance", value: data.appearance },
                { label: "SMILES", value: data.structure, mono: true },
              ].map(({ label, value, mono }) => (
                <div key={label} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-xs text-white/40 mb-1">{label}</p>
                  <p className={`text-white ${mono ? "font-mono text-xs break-all" : "font-semibold"}`}>{value || "—"}</p>
                </div>
              ))}
            </div>

            {/* Uses */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="font-bold text-lg mb-3">🏭 Uses & Applications</h3>
              <div className="flex flex-wrap gap-2">
                {data.uses?.map((use: string, i: number) => (
                  <span key={i} className="rounded-full bg-white/10 px-3 py-1 text-sm">{use}</span>
                ))}
              </div>
            </div>

            {/* Exam Relevance */}
            <div className="rounded-2xl border border-yellow-500/20 bg-yellow-950/20 p-6">
              <h3 className="font-bold text-lg mb-4 text-yellow-300">🎯 Exam Relevance</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-xs text-white/40 mb-2">Chapters</p>
                  {data.examRelevance?.chapters?.map((c: string, i: number) => (
                    <p key={i} className="text-white/80 text-sm">• {c}</p>
                  ))}
                </div>
                <div>
                  <p className="text-xs text-white/40 mb-2">Important Facts</p>
                  {data.examRelevance?.importantFacts?.map((f: string, i: number) => (
                    <p key={i} className="text-white/80 text-sm">• {f}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* Fun fact */}
            <div className="rounded-2xl border border-purple-500/20 bg-purple-950/20 p-4">
              <p className="text-purple-300 font-semibold">💡 Fun Fact</p>
              <p className="text-white/80 mt-1">{data.funFact}</p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
