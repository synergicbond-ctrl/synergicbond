"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

interface ChapterRoute {
  prefix: string;
  family: string;
  title: string;
}

interface TopicLink {
  href: string;
  label: string;
}

const CHAPTER_ROUTES: ChapterRoute[] = [
  { prefix: "/learn/jee-advanced/chemical-bonding/formal-charges", family: "JEE Inorganic Chemistry", title: "Formal Charges" },
  { prefix: "/learn/jee-advanced/chemical-bonding/dipole-moment", family: "JEE Inorganic Chemistry", title: "Dipole Moment" },
  { prefix: "/learn/jee-advanced/chemical-bonding/bridge-bonding", family: "JEE Inorganic Chemistry", title: "Bridge Bonding" },
  { prefix: "/learn/jee-advanced/environmental-chemistry", family: "JEE Inorganic Chemistry", title: "Environmental Chemistry" },
  { prefix: "/learn/jee-advanced/salt-analysis", family: "JEE Inorganic Chemistry", title: "Principles of Qualitative Analysis" },
  { prefix: "/learn/jee-advanced/polymers", family: "JEE Organic Chemistry", title: "Polymers" },

  { prefix: "/learn/atomic-structure", family: "JEE Physical Chemistry", title: "Atomic Structure" },
  { prefix: "/learn/chemical-bonding", family: "JEE Inorganic Chemistry", title: "Chemical Bonding and Molecular Structure" },
  { prefix: "/learn/thermodynamics", family: "JEE Physical Chemistry", title: "Chemical Thermodynamics" },
  { prefix: "/learn/chemical-equilibrium", family: "JEE Physical Chemistry", title: "Chemical and Ionic Equilibrium" },
  { prefix: "/learn/solid-state", family: "JEE Physical Chemistry", title: "Solid State" },
  { prefix: "/learn/periodic-table", family: "JEE Inorganic Chemistry", title: "Classification of Elements and Periodicity in Properties" },
  { prefix: "/learn/isomerism", family: "JEE Organic Chemistry", title: "Isomerism" },

  { prefix: "/notes/mole-concept", family: "JEE Physical Chemistry", title: "Mole Concept" },
  { prefix: "/notes/stoichiometry", family: "JEE Physical Chemistry", title: "Stoichiometry" },
  { prefix: "/notes/concentration-terms", family: "JEE Physical Chemistry", title: "Concentration Terms" },
  { prefix: "/notes/eudiometry", family: "JEE Physical Chemistry", title: "Eudiometry" },
  { prefix: "/notes/redox-reactions", family: "JEE Physical Chemistry", title: "Redox Reactions" },
  { prefix: "/notes/electrochemistry", family: "JEE Physical Chemistry", title: "Electrochemistry" },

  { prefix: "/notes/hydrogen", family: "JEE Inorganic Chemistry", title: "Hydrogen and Its Compounds" },
  { prefix: "/learn/jee-advanced/inorganic-chemistry/s-block", family: "JEE Inorganic Chemistry", title: "S-Block Elements" },
  { prefix: "/notes/p-block", family: "JEE Inorganic Chemistry", title: "P-Block Elements" },
  { prefix: "/notes/d-block", family: "JEE Inorganic Chemistry", title: "D- and F-Block Elements" },
  { prefix: "/notes/metallurgy", family: "JEE Inorganic Chemistry", title: "Isolation of Metals" },
].sort((a, b) => b.prefix.length - a.prefix.length);

const BLOCKED_LABELS =
  /^(home|learn|notes|chapter notes|back|previous|next|open|view|support|practice|tests|revision|progress|ai tools)$/i;

function cleanLabel(value: string): string {
  return value
    .replace(/\s+/g, " ")
    .replace(/^[\d.\s·|—–-]+/, "")
    .replace(/\s*(→|←|↓|›|»)\s*$/, "")
    .trim();
}

function uniqueTopics(items: TopicLink[]): TopicLink[] {
  const seen = new Set<string>();
  return items.filter((item) => {
    const key = `${item.href}::${item.label.toLowerCase()}`;
    if (!item.label || BLOCKED_LABELS.test(item.label) || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function routeMatches(href: string, prefix: string): boolean {
  try {
    const url = new URL(href, window.location.origin);
    return url.pathname.startsWith(prefix) || (url.pathname === window.location.pathname && Boolean(url.hash));
  } catch {
    return false;
  }
}

function topicsFromExistingNavigation(prefix: string): {
  topics: TopicLink[];
  source: HTMLElement | null;
} {
  const preferred = Array.from(
    document.querySelectorAll<HTMLElement>(
      ".sbnTabs, nav[aria-label*='chapter' i], nav[aria-label*='lesson' i], nav[aria-label*='section' i], [data-chapter-navigation]"
    )
  );

  const generic = Array.from(document.querySelectorAll<HTMLElement>("nav, [role='navigation']"));
  const candidates = [...preferred, ...generic.filter((item) => !preferred.includes(item))];

  let bestTopics: TopicLink[] = [];
  let bestSource: HTMLElement | null = null;

  for (const candidate of candidates) {
    const anchors = Array.from(candidate.querySelectorAll<HTMLAnchorElement>("a[href]"));
    const topics = uniqueTopics(
      anchors
        .filter((anchor) => routeMatches(anchor.href, prefix))
        .map((anchor) => ({
          href: `${new URL(anchor.href, window.location.origin).pathname}${new URL(anchor.href, window.location.origin).hash}`,
          label: cleanLabel(anchor.textContent ?? ""),
        }))
    );

    if (topics.length > bestTopics.length) {
      bestTopics = topics;
      bestSource = candidate;
    }
  }

  return {
    topics: bestTopics.length >= 2 ? bestTopics : [],
    source: bestTopics.length >= 2 ? bestSource : null,
  };
}

function topicsFromHeadings(): TopicLink[] {
  const headings = Array.from(
    document.querySelectorAll<HTMLElement>(
      "main h2, main h3, main section[id] > h2:first-child, article h2, article h3"
    )
  );

  const topics: TopicLink[] = [];
  let generated = 0;

  for (const heading of headings) {
    const label = cleanLabel(heading.textContent ?? "");
    if (!label || label.length < 3 || label.length > 90 || BLOCKED_LABELS.test(label)) continue;

    let id = heading.id || heading.closest<HTMLElement>("section[id]")?.id || "";
    if (!id) {
      generated += 1;
      id = `chapter-topic-${generated}`;
      heading.id = id;
    }

    topics.push({ href: `#${id}`, label });
    if (topics.length >= 30) break;
  }

  return uniqueTopics(topics);
}

export default function UniversalChapterNavigator() {
  const pathname = usePathname();
  const route = useMemo(
    () => CHAPTER_ROUTES.find((item) => pathname.startsWith(item.prefix)),
    [pathname]
  );
  const [topics, setTopics] = useState<TopicLink[]>([]);
  const [hash, setHash] = useState("");
  const activeRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    if (!route) return;

    let hiddenSource: HTMLElement | null = null;
    let observer: MutationObserver | null = null;
    let timer = 0;

    const collect = () => {
      const extracted = topicsFromExistingNavigation(route.prefix);
      const nextTopics = extracted.topics.length > 0 ? extracted.topics : topicsFromHeadings();

      if (extracted.source) {
        extracted.source.dataset.sbnSourceNavigation = "true";
        hiddenSource = extracted.source;
      }

      document.documentElement.classList.add("sbn-universal-chapter-active");
      setTopics(nextTopics);
      setHash(window.location.hash);
    };

    collect();
    timer = window.setTimeout(collect, 350);

    observer = new MutationObserver(() => {
      if (topics.length === 0) collect();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    const updateHash = () => setHash(window.location.hash);
    window.addEventListener("hashchange", updateHash);

    return () => {
      window.clearTimeout(timer);
      observer?.disconnect();
      window.removeEventListener("hashchange", updateHash);
      document.documentElement.classList.remove("sbn-universal-chapter-active");
      if (hiddenSource) delete hiddenSource.dataset.sbnSourceNavigation;
    };
  }, [route, pathname]);

  useEffect(() => {
    activeRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [pathname, hash, topics.length]);

  if (!route) return null;

  const isActive = (href: string) => {
    if (href.startsWith("#")) return hash === href;
    const [targetPath, targetHash = ""] = href.split("#");
    if (targetHash) return pathname === targetPath && hash === `#${targetHash}`;
    return pathname === targetPath;
  };

  return (
    <>
      <style jsx global>{`
        :root {
          --sbn-nav-bg: #0a1622;
          --sbn-nav-surface: #122232;
          --sbn-nav-surface-2: #182b3e;
          --sbn-nav-border: #24405c;
          --sbn-nav-text: #eef3f8;
          --sbn-nav-dim: #c3d1dd;
          --sbn-nav-faint: #91a9bc;
          --sbn-nav-gold: #e8b84b;
          --sbn-nav-cyan: #5fd4ea;
          --sbn-sf: -apple-system, BlinkMacSystemFont, "SF Pro Display",
            "SF Pro Text", "Helvetica Neue", Arial, system-ui, sans-serif;
        }

        .sbn-universal-chapter-active .sbnHeader,
        .sbn-universal-chapter-active [data-sbn-source-navigation="true"] {
          display: none !important;
        }

        .sbnUniversalNav {
          position: sticky;
          top: 0;
          z-index: 45;
          width: 100%;
          border-bottom: 1px solid var(--sbn-nav-border);
          background:
            radial-gradient(circle at 92% 0%, rgba(232, 184, 75, 0.08), transparent 27%),
            linear-gradient(180deg, rgba(18, 34, 50, 0.985), rgba(10, 22, 34, 0.985));
          color: var(--sbn-nav-text);
          font-family: var(--sbn-sf);
          box-shadow: 0 14px 36px rgba(0, 0, 0, 0.22);
          backdrop-filter: blur(18px);
        }

        .sbnUniversalInner {
          width: 100%;
          max-width: 1560px;
          margin: 0 auto;
          padding: 18px clamp(14px, 2.4vw, 34px) 16px;
        }

        .sbnUniversalHeading {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 18px;
          margin-bottom: 15px;
        }

        .sbnUniversalFamily {
          color: var(--sbn-nav-text);
          font-size: clamp(1.35rem, 2.5vw, 2.15rem);
          font-weight: 900;
          letter-spacing: -0.035em;
          line-height: 1.05;
        }

        .sbnUniversalTitle {
          margin-top: 7px;
          color: var(--sbn-nav-cyan);
          font-size: clamp(0.95rem, 1.45vw, 1.16rem);
          font-weight: 850;
          line-height: 1.3;
        }

        .sbnUniversalTag {
          flex: 0 0 auto;
          color: var(--sbn-nav-gold);
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.17em;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .sbnUniversalTopics {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
          align-items: stretch;
        }

        .sbnUniversalTopic {
          display: flex;
          min-height: 48px;
          align-items: center;
          border: 1px solid var(--sbn-nav-border);
          border-left: 5px solid var(--sbn-nav-cyan);
          border-radius: 15px;
          padding: 10px 16px;
          background: linear-gradient(145deg, rgba(18, 34, 50, 0.96), rgba(10, 22, 34, 0.96));
          color: var(--sbn-nav-dim);
          font-size: clamp(0.79rem, 1vw, 0.94rem);
          font-weight: 780;
          line-height: 1.25;
          text-decoration: none;
          transition:
            transform 160ms ease,
            border-color 160ms ease,
            background 160ms ease,
            color 160ms ease,
            box-shadow 160ms ease;
          scroll-snap-align: center;
        }

        .sbnUniversalTopic:hover {
          transform: translateY(-2px);
          border-color: var(--sbn-nav-cyan);
          color: var(--sbn-nav-text);
          background: var(--sbn-nav-surface-2);
          box-shadow: 0 9px 24px rgba(95, 212, 234, 0.1);
        }

        .sbnUniversalTopicActive {
          border-color: var(--sbn-nav-gold);
          border-left-color: var(--sbn-nav-gold);
          background: linear-gradient(145deg, rgba(232, 184, 75, 0.18), rgba(18, 34, 50, 0.96));
          color: var(--sbn-nav-gold);
          font-weight: 900;
          box-shadow: 0 9px 26px rgba(232, 184, 75, 0.13);
        }

        .sbnUniversalEmpty {
          color: var(--sbn-nav-faint);
          font-size: 12px;
          font-weight: 700;
        }

        @media (max-width: 900px) {
          .sbnUniversalNav {
            position: sticky;
          }

          .sbnUniversalInner {
            padding: 14px 13px 11px;
          }

          .sbnUniversalHeading {
            margin-bottom: 11px;
          }

          .sbnUniversalTag {
            display: none;
          }

          .sbnUniversalTopics {
            flex-wrap: nowrap;
            gap: 8px;
            overflow-x: auto;
            padding: 1px 2px 7px;
            scroll-snap-type: x proximity;
            scrollbar-width: thin;
            -webkit-overflow-scrolling: touch;
          }

          .sbnUniversalTopic {
            flex: 0 0 auto;
            min-height: 44px;
            max-width: 82vw;
            white-space: nowrap;
            padding: 9px 13px;
          }
        }

        @media (max-width: 560px) {
          .sbnUniversalFamily {
            font-size: 1.25rem;
          }

          .sbnUniversalTitle {
            margin-top: 5px;
            font-size: 0.9rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .sbnUniversalTopic {
            transition: none;
          }
        }
      `}</style>

      <header className="sbnUniversalNav" aria-label={`${route.title} chapter navigation`}>
        <div className="sbnUniversalInner">
          <div className="sbnUniversalHeading">
            <div>
              <div className="sbnUniversalFamily">{route.family}</div>
              <div className="sbnUniversalTitle">{route.title}</div>
            </div>
            <div className="sbnUniversalTag">Top chapter navigation</div>
          </div>

          <nav className="sbnUniversalTopics" aria-label={`${route.title} topics`}>
            {topics.length > 0 ? (
              topics.map((topic) => {
                const active = isActive(topic.href);
                return (
                  <Link
                    key={`${topic.href}-${topic.label}`}
                    ref={active ? activeRef : undefined}
                    href={topic.href}
                    aria-current={active ? "page" : undefined}
                    className={`sbnUniversalTopic${active ? " sbnUniversalTopicActive" : ""}`}
                  >
                    {topic.label}
                  </Link>
                );
              })
            ) : (
              <span className="sbnUniversalEmpty">Chapter topics are loading…</span>
            )}
          </nav>
        </div>
      </header>
    </>
  );
}
