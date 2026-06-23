import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";

import JeeSection from "../components/JeeSection";
import NeetSection from "../components/NeetSection";
import OlympiadSection from "../components/OlympiadSection";
import ResourcesSection from "../components/ResourcesSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">

      <Navbar />

      <Hero />

      <Stats />

      <JeeSection />

      <NeetSection />

      <OlympiadSection />

      <ResourcesSection />

    </main>
  );
}