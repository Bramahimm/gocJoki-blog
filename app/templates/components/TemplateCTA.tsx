import Button from "@/components/Button";

export default function TemplateCTA() {
  return (
    <div className="text-center mt-16">
      <h2 className="text-2xl font-bold text-white mb-4">
        Tidak menemukan yang cocok?
      </h2>
      <p className="text-gray-300 mb-6">
        Kami bisa membuat template custom sesuai kebutuhan Anda
      </p>
      <Button href="/order" size="lg">
        Pesan Template Custom
      </Button>
    </div>
  );
}
