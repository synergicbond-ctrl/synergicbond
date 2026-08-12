"use client";

interface Property {
  category: string;
  physical: string;
  chemical: string;
}

export default function PhysicalVsChemicalComparison() {
  const properties: Property[] = [
    {
      category: "Reversibility",
      physical: "Can undo it (melt ice → refreeze)",
      chemical: "Hard or impossible to reverse (burn paper)"
    },
    {
      category: "Identity",
      physical: "Substance stays the same",
      chemical: "New substance created"
    },
    {
      category: "Energy",
      physical: "Usually small energy changes",
      chemical: "Large energy release/absorption"
    },
    {
      category: "Examples",
      physical: "Melting, dissolving, cutting, freezing",
      chemical: "Burning, rusting, digestion, cooking"
    },
    {
      category: "Test",
      physical: "No new color, smell, or gas released",
      chemical: "New color, odor, gas, or heat change"
    }
  ];

  return (
    <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-sm space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">
          Physical vs. Chemical Properties
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Key distinctions every chemist must know
        </p>
      </div>

      {/* Desktop table */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-slate-300 dark:border-slate-600">
              <th className="text-left p-3 font-bold text-slate-900 dark:text-white">Property</th>
              <th className="text-left p-3 font-bold text-green-700 dark:text-green-300">⚖️ Physical</th>
              <th className="text-left p-3 font-bold text-red-700 dark:text-red-300">🔥 Chemical</th>
            </tr>
          </thead>
          <tbody className="space-y-2">
            {properties.map((prop, idx) => (
              <tr key={idx} className="border-b border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800">
                <td className="p-3 font-semibold text-slate-900 dark:text-slate-100">{prop.category}</td>
                <td className="p-3 text-slate-700 dark:text-slate-300 bg-green-50 dark:bg-green-950 rounded-lg">
                  {prop.physical}
                </td>
                <td className="p-3 text-slate-700 dark:text-slate-300 bg-red-50 dark:bg-red-950 rounded-lg">
                  {prop.chemical}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="sm:hidden space-y-4">
        {properties.map((prop, idx) => (
          <div key={idx} className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700">
            <div className="bg-slate-100 dark:bg-slate-800 p-3">
              <p className="font-bold text-slate-900 dark:text-white">{prop.category}</p>
            </div>
            <div className="grid grid-cols-2 gap-2 p-3">
              <div className="bg-green-50 dark:bg-green-950 p-3 rounded-lg">
                <p className="text-xs font-bold text-green-700 dark:text-green-300 mb-1">⚖️ Physical</p>
                <p className="text-xs text-slate-700 dark:text-slate-300">{prop.physical}</p>
              </div>
              <div className="bg-red-50 dark:bg-red-950 p-3 rounded-lg">
                <p className="text-xs font-bold text-red-700 dark:text-red-300 mb-1">🔥 Chemical</p>
                <p className="text-xs text-slate-700 dark:text-slate-300">{prop.chemical}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Key insight */}
      <div className="bg-indigo-50 dark:bg-indigo-950 border border-indigo-200 dark:border-indigo-800 p-4 rounded-xl">
        <p className="text-sm text-indigo-800 dark:text-indigo-200">
          <span className="font-bold">✨ The Key Test:</span> If you can&apos;t easily undo it or if something brand new is created, it&apos;s likely <span className="font-bold">chemical</span>.
        </p>
      </div>
    </div>
  );
}
