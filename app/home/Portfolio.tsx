// components/home/Portfolio.tsx
export default function Portfolio() {
  const items = [
    { title: "Website Company Profile", category: "Web" },
    { title: "Template Presentasi Profesional", category: "Design" },
    { title: "Aplikasi Mobile Sederhana", category: "App" },
  ];

  return (
    <section id="portfolio" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Portofolio
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-dark-800 rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400">{item.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
