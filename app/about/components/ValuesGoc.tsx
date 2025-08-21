import { Shield, Clock, Heart } from "lucide-react";

export default function Values() {
  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-white text-center mb-12">
        Nilai-Nilai Kami
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-dark-800/50 backdrop-blur-sm rounded-xl p-6 border border-dark-700 text-center">
          <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
            <Shield className="w-6 h-6 text-primary-400" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Kepercayaan</h3>
          <p className="text-gray-400 text-sm">
            Menjaga kepercayaan pelanggan dengan hasil berkualitas dan
            kerahasiaan data
          </p>
        </div>

        <div className="bg-dark-800/50 backdrop-blur-sm rounded-xl p-6 border border-dark-700 text-center">
          <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
            <Clock className="w-6 h-6 text-primary-400" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Ketepatan Waktu</h3>
          <p className="text-gray-400 text-sm">
            Menyelesaikan pekerjaan sesuai deadline yang telah disepakati
          </p>
        </div>

        <div className="bg-dark-800/50 backdrop-blur-sm rounded-xl p-6 border border-dark-700 text-center">
          <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
            <Heart className="w-6 h-6 text-primary-400" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Pelayanan Prima</h3>
          <p className="text-gray-400 text-sm">
            Memberikan pelayanan terbaik dengan komunikasi yang responsif
          </p>
        </div>
      </div>
    </div>
  );
}
