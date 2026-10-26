import Link from "next/link";
import { devOnly } from "../guard";
export default function Page() {
  devOnly();
  return (
    <main style={{ maxWidth: 760, margin: "32px auto", padding: "0 16px", fontFamily: "system-ui" }}>
      <h1>Organic pilots (development only)</h1>
      <ul>
        <li><Link href="/dev-pilots/organic/goc">Pilot A — GOC inductive effect</Link></li>
        <li><Link href="/dev-pilots/organic/carbonyl">Pilot C — Carbonyl questions</Link></li>
        <li><Link href="/dev-pilots/organic/stereo">Pilot B — Stereochemistry Studio</Link></li>
      </ul>
    </main>
  );
}
