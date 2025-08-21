import { Target, Award } from "lucide-react";

export default function MissionVision() {
  return (
    <div className="grid lg:grid-cols-2 gap-12 mb-20">
      <div className="bg-dark-800/50 backdrop-blur-sm rounded-xl p-8 border border-dark-700">
        <div className="w-16 h-16 bg-primary-500/20 rounded-lg flex items-center justify-center mb-6">
          <Target className="w-8 h-8 text-primary-400" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-4">Misi Kami</h2>
        <p className="text-gray-300 leading-relaxed">
          Memberikan solusi cepat dan berkualitas untuk kebutuhan akademis dan
          bisnis, membantu pelajar, mahasiswa, dan profesional mencapai tujuan
          mereka dengan efisien dan hasil yang memuaskan.
        </p>
      </div>

      <div className="bg-dark-800/50 backdrop-blur-sm rounded-xl p-8 border border-dark-700">
        <div className="w-16 h-16 bg-primary-500/20 rounded-lg flex items-center justify-center mb-6">
          <Award className="w-8 h-8 text-primary-400" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-4">Visi Kami</h2>
        <p className="text-gray-300 leading-relaxed">
          Menjadi platform terdepan dalam penyediaan jasa joki dan template,
          dikenal karena kualitas, kecepatan, dan kepercayaan pelanggan, serta
          berkontribusi pada kemajuan pendidikan dan bisnis di Indonesia.
        </p>
      </div>
    </div>
  );
}
