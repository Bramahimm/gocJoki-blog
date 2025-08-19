// app/page.tsx
import { Analytics } from "@vercel/analytics/next";
import Features from "./home/Features";
import HeroSection from "./home/HeroSection";
import Services from "./home/Services";
import TemplatesHighlight from "./home/TemplateHighlight";
import Portfolio from "./home/Portfolio";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700">
      <Analytics />
      <main>
        <HeroSection />
        <Features />
        <Services />
        <TemplatesHighlight />
      </main>
    </div>
  );
}
