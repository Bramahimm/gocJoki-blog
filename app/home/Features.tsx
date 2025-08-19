// components/home/Features.tsx
import { Zap, Target, Puzzle } from "lucide-react";

const features = [
  {
    icon: <Zap className="h-8 w-8 text-primary-400" />,
    title: "Pengerjaan Cepat",
    description:
      "Deadline mepet? Tenang, kami siap selesaikan tepat waktu tanpa kompromi kualitas.",
  },
  {
    icon: <Target className="h-8 w-8 text-primary-400" />,
    title: "Hasil Presisi",
    description:
      "Setiap detail dikerjakan dengan teliti agar hasil sesuai kebutuhanmu.",
  },
  {
    icon: <Puzzle className="h-8 w-8 text-primary-400" />,
    title: "Solusi Lengkap",
    description:
      "Dari tugas, proyek, hingga desain template — semua dalam satu tempat.",
  },
];

export default function Features() {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-dark-800 rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition-transform">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
