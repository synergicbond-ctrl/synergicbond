import Navbar from "@/components/Navbar";
import AboutVision from "@/components/AboutVision";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About & Mission — SYNERGIC BOND",
  description: "Engineering the future of chemistry education for NEET, JEE, Olympiad and GATE.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white">
      <Navbar />
      <AboutVision />
      <Footer />
    </main>
  );
}
