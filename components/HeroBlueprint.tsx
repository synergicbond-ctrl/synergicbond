"use client";

interface HeroBlueprintProps {
  title: string;
  subtitle: string;
  height?: "sm" | "md" | "lg";
}

export default function HeroBlueprint({
  title,
  subtitle,
  height = "md"
}: HeroBlueprintProps) {
  const heightClass = {
    sm: "h-64",
    md: "h-80",
    lg: "h-96"
  }[height];

  return (
    <div
      className={`${heightClass} rounded-3xl overflow-hidden relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700 shadow-lg`}
      style={{
        backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E)')"
      }}
    >
      <div className="absolute inset-0 flex flex-col justify-center items-center p-6 md:p-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight max-w-3xl">
          {title}
        </h1>
        <p className="text-base md:text-lg text-slate-300 max-w-2xl">
          {subtitle}
        </p>
      </div>

      {/* Blueprint grid accent */}
      <div className="absolute bottom-0 right-0 opacity-10">
        <svg width="200" height="200" viewBox="0 0 200 200" className="text-indigo-400">
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="200" height="200" fill="url(%23grid)" />
        </svg>
      </div>
    </div>
  );
}
