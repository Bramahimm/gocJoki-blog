export default function CTA() {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-white mb-4">Siap Bekerja Sama?</h2>
      <p className="text-gray-300 mb-6">
        Mari diskusikan kebutuhan Anda dan kami akan memberikan solusi terbaik
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="/contact"
          className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
        >
          Hubungi Kami
        </a>
        <a
          href="/order"
          className="inline-flex items-center justify-center px-6 py-3 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors"
        >
          Mulai Pesanan
        </a>
      </div>
    </div>
  );
}
