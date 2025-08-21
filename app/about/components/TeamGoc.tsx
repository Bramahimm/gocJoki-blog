import { Users } from "lucide-react";

export default function Team() {
  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-white text-center mb-12">
        Tim Kami
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Tim Development */}
        <div className="bg-dark-800/50 backdrop-blur-sm rounded-xl p-6 border border-dark-700 text-center">
          <div className="w-24 h-24 bg-dark-600 rounded-full mx-auto mb-4 flex items-center justify-center">
            <Users className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Tim Development</h3>
          <p className="text-gray-400 text-sm mb-4">
            Spesialis dalam pengembangan website, aplikasi mobile, dan sistem
          </p>
          <div className="text-xs text-gray-500">
            <p>• Full-stack Development</p>
            <p>• Mobile App Development</p>
            <p>• UI/UX Design</p>
          </div>
        </div>

        {/* Tim Akademik */}
        <div className="bg-dark-800/50 backdrop-blur-sm rounded-xl p-6 border border-dark-700 text-center">
          <div className="w-24 h-24 bg-dark-600 rounded-full mx-auto mb-4 flex items-center justify-center">
            <Users className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Tim Akademik</h3>
          <p className="text-gray-400 text-sm mb-4">
            Ahli dalam berbagai bidang studi dan penulisan akademik
          </p>
          <div className="text-xs text-gray-500">
            <p>• IT & Programming</p>
            <p>• Business & Management</p>
            <p>• Research & Writing</p>
          </div>
        </div>

        {/* Tim Support */}
        <div className="bg-dark-800/50 backdrop-blur-sm rounded-xl p-6 border border-dark-700 text-center">
          <div className="w-24 h-24 bg-dark-600 rounded-full mx-auto mb-4 flex items-center justify-center">
            <Users className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Tim Support</h3>
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
  );
}
