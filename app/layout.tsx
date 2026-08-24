import "@/app/globals.css";
import type { Metadata } from "next";
import { Source_Serif_4, Inter_Tight, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeContext";
import { LanguageProvider } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import GlobalEnhancements from "@/components/GlobalEnhancements";

// Three families, three jobs — see the typography block in globals.css.
// Self-hosted at build time by next/font, so no external font requests and
// no layout shift from a late-arriving stylesheet.
// All three are variable fonts, so weight is left unpinned to keep the full
// axis range. Source Serif also opts into the optical-size axis, which is what
// makes `font-optical-sizing: auto` actually do something at display sizes.
const fontDisplay = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-display",
});

const fontSans = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

const siteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://synergicbond.vercel.app");

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "SYNERGIC BOND — Chemistry OS",
    template: "%s | SYNERGIC BOND",
  },
  description: "The Chemistry Operating System for NEET, JEE, Olympiad and GATE. AI-powered, expert-built.",
  applicationName: "SYNERGIC BOND",
  icons: {
    icon: [{ url: "/synergic-bond-mark.svg", type: "image/svg+xml" }],
    shortcut: "/synergic-bond-mark.svg",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SYNERGIC BOND — Chemistry OS",
    description: "The Chemistry Operating System for NEET, JEE, Olympiad and GATE. AI-powered, expert-built.",
    url: "/",
    siteName: "SYNERGIC BOND",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SYNERGIC BOND — Chemistry OS",
    description: "The Chemistry Operating System for NEET, JEE, Olympiad and GATE. AI-powered, expert-built.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`h-full overflow-x-hidden dark ${fontDisplay.variable} ${fontSans.variable} ${fontMono.variable}`}
      suppressHydrationWarning
    >
      {/* Typography enforced globally via globals.css, driven by the
          --font-display / --font-sans / --font-mono variables above. */}
      <body className="min-h-screen overflow-x-hidden bg-[var(--background)] text-[var(--foreground)] flex flex-col m-0 p-0 w-full antialiased">
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            {children}
            <GlobalEnhancements />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
