import fs from "node:fs";
import path from "node:path";
import Script from "next/script";
import { devOnly } from "../../guard";
import manifest from "./manifest.json";

type Anim = { type: string; sign?: string; label?: string; chain?: string };

/** The topic manifest declares which animations belong to the section; the page renders them from data. */
export default function Page() {
  devOnly();
  const fragment = fs.readFileSync(path.join(process.cwd(), "app/dev-pilots/organic/goc/fragment.html"), "utf8");
  const anims = (manifest as { animations?: Anim[] }).animations ?? [];
  return (
    <main style={{ maxWidth: 860, margin: "24px auto", padding: "0 16px", color: "#111" }}>
      {/* Pilot content is our own generated markup, served only in development */}
      <div dangerouslySetInnerHTML={{ __html: fragment }} />
      {anims.map((a, i) => (
        <div key={i} className="sb-anim" data-type={a.type} data-sign={a.sign} data-label={a.label} data-chain={a.chain} />
      ))}
      <Script src="/dev-pilots/sb-anim.js" strategy="afterInteractive" />
    </main>
  );
}
