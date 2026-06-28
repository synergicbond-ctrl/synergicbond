import "@/app/globals.css";
import { ThemeProvider } from "@/components/ThemeContext";
import { LanguageProvider } from "@/lib/i18n";

export const metadata = {
  title: "SYNERGIC BOND — Chemistry OS",
  description: "The Chemistry Operating System for NEET, JEE, Olympiad and GATE. AI-powered, expert-built.",
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
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}