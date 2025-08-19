// components/home/TemplatesHighlight.tsx
import Button from "@/components/Button";

export default function TemplatesHighlight() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-dark-800/60">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Template Siap Pakai
        </h2>
        <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
          Pilih dari berbagai template premium untuk website, presentasi, dan
          dokumen.
        </p>
        <Button size="lg" href="/#templates">
          Lihat Semua Template
        </Button>
      </div>
    </section>
  );
}
