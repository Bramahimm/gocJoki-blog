import Button from "@/components/Button";

export default function HeroSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-purple-600/20 rounded-full blur-3xl"></div>
      <div className="relative max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
          Solusi Cepat Joki & Template Profesional
        </h1> 
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto animate-slide-up">
          Butuh proyek IT, tugas Non-IT, atau template siap pakai? Kami bantu
          dari ide sampai jadi, dengan kualitas profesional dan proses cepat.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up">
          <Button size="lg" href="/templates">
            Lihat Template
          </Button>
          <Button variant="secondary" size="lg" href="/order">
            Pesan Jasa
          </Button>
        </div>
      </div>
    </section>
  );
}
