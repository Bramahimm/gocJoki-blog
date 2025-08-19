// components/home/Services.tsx
import Button from "@/components/Button";

const services = [
  {
    title: "Jasa Joki Tugas IT",
    description:
      "Dari coding, debugging, hingga laporan — kami kerjakan dengan standar tinggi.",
    link: "/order",
  },
  {
    title: "Jasa Joki Non-IT",
    description:
      "Tugas umum, presentasi, atau dokumen — selesai dengan rapi dan cepat.",
    link: "/order",
  },
  {
    title: "Pembuatan Template",
    description:
      "Website, desain, hingga dokumen siap pakai untuk kebutuhan instan.",
    link: "/#templates",
  },
];

export default function Services() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-12">Layanan Kami</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-dark-800 rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <Button size="sm" href={service.link}>
                Selengkapnya
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
