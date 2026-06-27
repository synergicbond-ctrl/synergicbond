import Link from "next/link";

export default function RevisionPage() {
  const revisionModules = [
    {
      type: "5min",
      title: "5-Minute High-Yield Blitz",
      description: "Rapid review of critical physical anomalies, organic name reactions, and inorganic exceptions.",
      time: "5 min",
      color: "bg-indigo-50 border-indigo-100 text-indigo-900"
    },
    {
      type: "examDay",
      title: "One-Day-Before-Exam Refresher",
      description: "Comprehensive formula review and reaction pathways consolidation for complete exam confidence.",
      time: "45 min",
      color: "bg-amber-50 border-amber-100 text-amber-900"
    },
    {
      type: "formula",
      title: "Formula & Constants Recall",
      description: "Drill on exact expressions, variables, units, and common numeric traps.",
      time: "10 min",
      color: "bg-emerald-50 border-emerald-100 text-emerald-900"
    },
    {
      type: "reaction",
      title: "Name Reactions & Mechanisms",
      description: "Review organic transformation conditions, intermediates, and inorganic exceptions.",
      time: "10 min",
      color: "bg-rose-50 border-rose-100 text-rose-900"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 p-6 md:p-12 max-w-7xl mx-auto space-y-10">
      
      {/* Header */}
      <header>
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">Revision Engine</h1>
        <p className="text-slate-600 mt-1">Targeted, high-yield revision sessions to retain concepts and patch weak spots.</p>
      </header>

      {/* Revision Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {revisionModules.map((module, idx) => (
          <div key={idx} className={`p-6 rounded-2xl border ${module.color} flex flex-col justify-between h-48 shadow-sm`}>
            <div>
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold">{module.title}</h3>
                <span className="text-xs font-black px-2 py-0.5 rounded bg-white/60 backdrop-blur-sm">
                  {module.time}
                </span>
              </div>
              <p className="text-sm mt-2 opacity-90">{module.description}</p>
            </div>
            
            <Link 
              href={`/revision/${module.type}`} 
              className="mt-4 w-full py-3 bg-white hover:bg-slate-50 text-slate-800 font-bold text-center rounded-xl transition shadow-sm"
            >
              Start Session
            </Link>
          </div>
        ))}
      </div>

      {/* Weak Topic Custom Search */}
      <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Drill a Custom Weak Topic</h2>
        <p className="text-sm text-slate-600 mb-4">Enter a specific concept, reaction, or formula that needs targeted practice.</p>
        <form action="/revision/weakTopic" method="GET" className="flex gap-4">
          <input 
            type="text" 
            name="topic" 
            placeholder="e.g. SN1 vs SN2, Buffer solutions, CFT splitting..." 
            className="flex-1 p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            required
          />
          <button type="submit" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition">
            Generate Session
          </button>
        </form>
      </section>

    </div>
  );
}
