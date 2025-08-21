import Header from "./Header";
import MissionVision from "./MissionVision";
import Values from "./ValuesGoc";
import Team from "./TeamGoc";
import Stats from "./StatsGoc";
import CTA from "./CTA";

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
