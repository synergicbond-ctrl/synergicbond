import { devOnly } from "../../guard";
import ConformerLabel from "./ConformerLabel";
export default function Page() {
  devOnly();
  return (
    <main style={{ maxWidth: 1100, margin: "16px auto", padding: "0 16px" }}>
      <h1>Stereochemistry Studio (live studio, embedded)</h1>
      <ConformerLabel frameId="studio" />
      <iframe id="studio" src="/stereochemistry-studio.html" title="Stereochemistry Studio" style={{ width: "100%", height: "80vh", border: "1px solid #e5e7eb", borderRadius: 8 }} />
    </main>
  );
}
