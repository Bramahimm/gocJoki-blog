export default function OrderErrors({ errors }: { errors: string[] }) {
  return (
    <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-6 mb-8">
      <ul className="text-red-400 space-y-1">
        {errors.map((error, index) => (
          <li key={index}>• {error}</li>
        ))}
      </ul>
    </div>
  );
}
