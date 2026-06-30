import type { MetadataRoute } from "next";

// PHASE 1: keep the hero (Snap & Solve) + verified-reference pages crawlable;
// disallow the hidden/non-core routes so search engines don't index scaffolds.
const HIDDEN_PATHS = [
  "/quiz", "/exam", "/assignment", "/daily-challenge", "/pyq",
  "/tutor", "/doubt-solver", "/handwritten-notes", "/lab", "/molecule",
  "/notes", "/library", "/study-tools", "/reagents", "/reaction-predictor",
  "/properties", "/redox-reactions", "/solubility", "/vault", "/revision",
  "/study-plan", "/activity", "/exam-predictor", "/achievements", "/leaderboard",
  "/live", "/neet", "/jee", "/olympiad", "/olympiads", "/gate", "/exam-center",
  "/teachers", "/coach", "/chapter", "/concept", "/search", "/upload",
  "/donate", "/control-center", "/debug",
];

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://synergicbond.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: HIDDEN_PATHS,
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
