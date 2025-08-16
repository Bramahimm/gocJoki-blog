import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import { Zap, Target, Puzzle } from "lucide-react";
import { Analytics } from "@vercel/analytics/next"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700">
      <Navigation />
      <Analytics />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-purple-600/20 rounded-full blur-3xl"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
              Solusi Cepat Joki & Template Profesional
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto animate-slide-up">
              Butuh proyek IT, tugas Non-IT, atau template siap pakai? Kami
              bantu dari ide sampai jadi, dengan kualitas profesional dan proses
              cepat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up">
              <Button size="lg" href="/#templates">
                Lihat Template
              </Button>
              <Button variant="secondary" size="lg" href="/order">
                Pesan Jasa
              </Button>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-dark-800/50 backdrop-blur-sm rounded-xl p-6 border border-dark-700 animate-fade-in">
                <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Zap className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Respons Cepat
                </h3>
                <p className="text-gray-400">
                  Support WhatsApp dan progress terpantau.
                </p>
              </div>
              <div className="bg-dark-800/50 backdrop-blur-sm rounded-xl p-6 border border-dark-700 animate-fade-in">
                <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Target className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Profesional
                </h3>
                <p className="text-gray-400">
                  Hasil rapi, clean code, dan performa optimal.
                </p>
              </div>
              <div className="bg-dark-800/50 backdrop-blur-sm rounded-xl p-6 border border-dark-700 animate-fade-in">
                <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Puzzle className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Template Siap Pakai
                </h3>
                <p className="text-gray-400">
                  Pilih, preview, langsung gunakan atau modifikasi.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="jasa" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
              Kategori Jasa
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-dark-800/50 backdrop-blur-sm rounded-xl p-6 border border-dark-700 hover:border-primary-500/50 transition-colors">
                <span className="inline-block bg-primary-500/20 text-primary-400 text-xs font-medium px-2.5 py-0.5 rounded-full mb-4">
                  IT
                </span>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Template & Desain
                </h3>
                <p className="text-gray-400">
                  UI Kit, landing page, presentasi premium.
                </p>
              </div>
              <div className="bg-dark-800/50 backdrop-blur-sm rounded-xl p-6 border border-dark-700 hover:border-primary-500/50 transition-colors">
                <span className="inline-block bg-primary-500/20 text-primary-400 text-xs font-medium px-2.5 py-0.5 rounded-full mb-4">
                  IT
                </span>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Pembuatan Website
                </h3>
                <p className="text-gray-400">
                  Company profile, e-commerce, custom system.
                </p>
              </div>
              <div className="bg-dark-800/50 backdrop-blur-sm rounded-xl p-6 border border-dark-700 hover:border-primary-500/50 transition-colors">
                <span className="inline-block bg-primary-500/20 text-primary-400 text-xs font-medium px-2.5 py-0.5 rounded-full mb-4">
                  IT
                </span>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Pembuatan Mobile Apps
                </h3>
                <p className="text-gray-400">
                  Android/iOS hybrid, performa ringan.
                </p>
              </div>
              <div className="bg-dark-800/50 backdrop-blur-sm rounded-xl p-6 border border-dark-700 hover:border-primary-500/50 transition-colors">
                <span className="inline-block bg-primary-500/20 text-primary-400 text-xs font-medium px-2.5 py-0.5 rounded-full mb-4">
                  IT
                </span>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Joki Tugas IT
                </h3>
                <p className="text-gray-400">
                  Algoritma, web, database, laporan teknis.
                </p>
              </div>
              <div className="bg-dark-800/50 backdrop-blur-sm rounded-xl p-6 border border-dark-700 hover:border-primary-500/50 transition-colors">
                <span className="inline-block bg-green-500/20 text-green-400 text-xs font-medium px-2.5 py-0.5 rounded-full mb-4">
                  Non-IT
                </span>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Joki Sekolah/Kuliah
                </h3>
                <p className="text-gray-400">
                  Esai, rangkuman, penelitian ringan.
                </p>
              </div>
              <div className="bg-dark-800/50 backdrop-blur-sm rounded-xl p-6 border border-dark-700 hover:border-primary-500/50 transition-colors">
                <span className="inline-block bg-green-500/20 text-green-400 text-xs font-medium px-2.5 py-0.5 rounded-full mb-4">
                  Non-IT
                </span>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Pengetikan & Penerjemahan
                </h3>
                <p className="text-gray-400">
                  Rapid typing, translate ID-EN/EN-ID.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Templates Section */}
        <section
          id="templates"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-800/30">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Template Unggulan
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Jelajahi katalog lengkap di halaman template.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" href="/templates">
                Buka Katalog Template
              </Button>
              <Button variant="secondary" size="lg" href="/order">
                Minta Kustom
              </Button>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portofolio" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
              Portofolio
            </h2>
            <p className="text-xl text-gray-300 text-center mb-12">
              Contoh hasil pekerjaan terbaik kami.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-dark-800/50 backdrop-blur-sm rounded-xl p-6 border border-dark-700">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Website Toko
                </h3>
                <p className="text-gray-400">
                  Masih dalam proses pengembangan😃.
                </p>
              </div>
              <div className="bg-dark-800/50 backdrop-blur-sm rounded-xl p-6 border border-dark-700">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Aplikasi Mobile
                </h3>
                <p className="text-gray-400">
                  Masih dalam proses pengembangan😃
                </p>
              </div>
              <div className="bg-dark-800/50 backdrop-blur-sm rounded-xl p-6 border border-dark-700">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Template Presentasi
                </h3>
                <p className="text-gray-400">
                  Masih dalam proses pengembangan😃
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
