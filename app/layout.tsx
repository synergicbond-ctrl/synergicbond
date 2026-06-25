import "@/app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SYNERGIC BOND",
  description: "Chemistry Operating System (ChemOS)",
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
      <body
        className={`${inter.className} min-h-screen bg-black text-white flex flex-col m-0 p-0 w-full`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}