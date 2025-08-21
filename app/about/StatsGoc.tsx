export default function Stats() {
  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-white text-center mb-12">
        Pencapaian Kami
      </h2>
      <div className="grid md:grid-cols-4 gap-8">
        <div className="text-center">
          <div className="text-4xl font-bold text-primary-400 mb-2">500+</div>
          <div className="text-gray-300">Proyek Selesai</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-primary-400 mb-2">1000+</div>
          <div className="text-gray-300">Pelanggan Puas</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-primary-400 mb-2">50+</div>
          <div className="text-gray-300">Template Tersedia</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-primary-400 mb-2">24/7</div>
          <div className="text-gray-300">Support Tersedia</div>
        </div>
      </div>
    </div>
  );
}
