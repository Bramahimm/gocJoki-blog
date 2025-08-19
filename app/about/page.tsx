import { Users, Award, Clock, Shield, Target, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700">
      <main className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Tentang JokiGoC
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Platform terpercaya untuk jasa joki tugas dan template berkualitas
              tinggi
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div className="bg-dark-800/50 backdrop-blur-sm rounded-xl p-8 border border-dark-700">
              <div className="w-16 h-16 bg-primary-500/20 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary-400" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Misi Kami</h2>
              <p className="text-gray-300 leading-relaxed">
                Memberikan solusi cepat dan berkualitas untuk kebutuhan akademis
                dan bisnis, membantu pelajar, mahasiswa, dan profesional
                mencapai tujuan mereka dengan efisien dan hasil yang memuaskan.
              </p>
            </div>

            <div className="bg-dark-800/50 backdrop-blur-sm rounded-xl p-8 border border-dark-700">
              <div className="w-16 h-16 bg-primary-500/20 rounded-lg flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-primary-400" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Visi Kami</h2>
              <p className="text-gray-300 leading-relaxed">
                Menjadi platform terdepan dalam penyediaan jasa joki dan
                template, dikenal karena kualitas, kecepatan, dan kepercayaan
                pelanggan, serta berkontribusi pada kemajuan pendidikan dan
                bisnis di Indonesia.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Nilai-Nilai Kami
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-dark-800/50 backdrop-blur-sm rounded-xl p-6 border border-dark-700 text-center">
                <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Shield className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Kepercayaan
                </h3>
                <p className="text-gray-400 text-sm">
                  Menjaga kepercayaan pelanggan dengan hasil berkualitas dan
                  kerahasiaan data
                </p>
              </div>

              <div className="bg-dark-800/50 backdrop-blur-sm rounded-xl p-6 border border-dark-700 text-center">
                <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Clock className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Ketepatan Waktu
                </h3>
                <p className="text-gray-400 text-sm">
                  Menyelesaikan pekerjaan sesuai deadline yang telah disepakati
                </p>
              </div>

              <div className="bg-dark-800/50 backdrop-blur-sm rounded-xl p-6 border border-dark-700 text-center">
                <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Heart className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Pelayanan Prima
                </h3>
                <p className="text-gray-400 text-sm">
                  Memberikan pelayanan terbaik dengan komunikasi yang responsif
                </p>
              </div>
            </div>
          </div>

          {/* Team */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Tim Kami
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-dark-800/50 backdrop-blur-sm rounded-xl p-6 border border-dark-700 text-center">
                <div className="w-24 h-24 bg-dark-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Tim Development
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Spesialis dalam pengembangan website, aplikasi mobile, dan
                  sistem
                </p>
                <div className="text-xs text-gray-500">
                  <p>• Full-stack Development</p>
                  <p>• Mobile App Development</p>
                  <p>• UI/UX Design</p>
                </div>
              </div>

              <div className="bg-dark-800/50 backdrop-blur-sm rounded-xl p-6 border border-dark-700 text-center">
                <div className="w-24 h-24 bg-dark-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Tim Akademik
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Ahli dalam berbagai bidang studi dan penulisan akademik
                </p>
                <div className="text-xs text-gray-500">
                  <p>• IT & Programming</p>
                  <p>• Business & Management</p>
                  <p>• Research & Writing</p>
                </div>
              </div>

              <div className="bg-dark-800/50 backdrop-blur-sm rounded-xl p-6 border border-dark-700 text-center">
                <div className="w-24 h-24 bg-dark-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Tim Support
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Customer service yang siap membantu 24/7
                </p>
                <div className="text-xs text-gray-500">
                  <p>• WhatsApp Support</p>
                  <p>• Email Support</p>
                  <p>• Live Chat</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Pencapaian Kami
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-400 mb-2">
                  500+
                </div>
                <div className="text-gray-300">Proyek Selesai</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-400 mb-2">
                  1000+
                </div>
                <div className="text-gray-300">Pelanggan Puas</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-400 mb-2">
                  50+
                </div>
                <div className="text-gray-300">Template Tersedia</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-400 mb-2">
                  24/7
                </div>
                <div className="text-gray-300">Support Tersedia</div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Siap Bekerja Sama?
            </h2>
            <p className="text-gray-300 mb-6">
              Mari diskusikan kebutuhan Anda dan kami akan memberikan solusi
              terbaik
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors">
                Hubungi Kami
              </a>
              <a
                href="/order"
                className="inline-flex items-center justify-center px-6 py-3 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors">
                Mulai Pesanan
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
