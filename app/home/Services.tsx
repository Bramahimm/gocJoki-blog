// components/home/Services.tsx
import Button from "@/components/Button";

const services = [
  {
    title: "Pembuatan Website Portfolio",
    description:
      "Buat website portfolio profesional untuk menampilkan karya, CV, dan profil Anda secara elegan.",
    link: "/order",
  },
  {
    title: "Pembuatan Undangan Online",
    description:
      "Undangan digital interaktif dengan desain menarik, bisa dibagikan lewat link atau QR code.",
    link: "/templates",
  },
  {
    title: "Pembuatan PPT Presentasi",
    description:
      "Presentasi yang informatif dengan desain visual modern, cocok untuk kuliah, kerja, maupun seminar.",
    link: "/templates",
  },
  {
    title: "Pembuatan Tugas Umum",
    description:
      "Bantuan pengerjaan tugas sekolah atau kuliah dengan hasil rapi, cepat, dan sesuai kebutuhan.",
    link: "/templates",
  },
  {
    title: "Pembuatan Laporan Kuliah",
    description:
      "Laporan praktikum, penelitian, atau proyek kuliah dikerjakan dengan format akademik yang benar.",
    link: "/order",
  },
  {
    title: "Pembuatan Template CV Ats",
    description:
      "Desain CV ramah ATS (Applicant Tracking System) agar mudah terbaca oleh HR dan lolos screening.",
    link: "/templates",
  },
  {
    title: "Pembuatan Makalah",
    description:
      "Makalah ilmiah dengan struktur teratur, referensi sesuai, dan penulisan yang rapi.",
    link: "/templates",
  },
  {
    title: "Pembuatan Jurnal",
    description:
      "Jurnal akademik sesuai kaidah penulisan ilmiah, lengkap dengan sitasi dan daftar pustaka.",
    link: "/templates",
  },
  {
    title: "Pembuatan Poster",
    description:
      "Poster informatif dan estetis untuk acara, promosi, maupun presentasi dengan desain profesional.",
    link: "/templates",
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
