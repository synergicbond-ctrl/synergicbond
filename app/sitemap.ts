import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://synergicbond.vercel.app";

const routes = [
  "/",
  "/about",
  "/pricing",
  "/formula-cards",
  "/name-reactions",
  "/periodic-table",
  "/periodic-trends",
  "/salt-colors",
  "/important-orders",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date("2026-06-30"),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
