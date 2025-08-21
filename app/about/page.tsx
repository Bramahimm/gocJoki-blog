import Header from "./components/Header";
import MissionVision from "./components/MissionVision";
import Values from "./components/ValuesGoc";
import Team from "./components/TeamGoc";
import Stats from "./components/StatsGoc";
import CTA from "./components/CTA";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700">
      <main className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <Header />
        <MissionVision />
        <Values />
        <Team />
        <Stats />
        <CTA />
      </main>
    </div>
  );
}
