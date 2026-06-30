import "@/app/globals.css";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeContext";
import { LanguageProvider } from "@/lib/i18n";
import Navbar from "@/components/Navbar";

const siteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://synergicbond.vercel.app");

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "SYNERGIC BOND — Chemistry OS",
    template: "%s | SYNERGIC BOND",
  },
  description: "The Chemistry Operating System for NEET, JEE, Olympiad and GATE. AI-powered, expert-built.",
  applicationName: "SYNERGIC BOND",
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
      className="h-full dark"
      suppressHydrationWarning
    >
      {/* Typography enforced globally via globals.css → SF Pro / -apple-system / BlinkMacSystemFont */}
      <body className="min-h-screen bg-[#0B0F19] text-white flex flex-col m-0 p-0 w-full antialiased">
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            {children}
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
