import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const staticRoot = join(process.cwd(), ".next", "static");

function filesUnder(dir) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? filesUnder(path) : [path];
  });
}

// These are intentionally distinctive paid lesson strings. A match in a
// public static chunk would mean a client boundary regressed and bypassed the
// server entitlement layout before it could authorize the RSC payload.
const PROTECTED_PHRASES = [
  "Everything you will ever study in chemistry",
  "Dalton's Atomic Theory",
  "Atoms bond for one reason",
];

const staticFiles = filesUnder(staticRoot).filter((path) => /\.(?:js|map)$/.test(path));
const leaks = [];

for (const path of staticFiles) {
  const content = readFileSync(path, "utf8");
  for (const phrase of PROTECTED_PHRASES) {
    if (content.includes(phrase)) leaks.push({ path, phrase });
  }
}

if (leaks.length > 0) {
  throw new Error(
    `Protected lesson prose appeared in public static assets:\n${leaks.map(({ path, phrase }) => `- ${phrase} in ${path}`).join("\n")}`,
  );
}

console.log(`Verified ${PROTECTED_PHRASES.length} protected lesson sentinels are absent from ${staticFiles.length} public static assets.`);
