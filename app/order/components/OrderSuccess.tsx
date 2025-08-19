export default function OrderSuccess({ orderCode }: { orderCode: string }) {
  return (
    <div className="bg-green-500/20 border border-green-500/50 rounded-xl p-6 mb-8 text-center">
      <p className="text-green-400 mb-4">
        Pesanan berhasil diproses. Kode Order:{" "}
        <strong className="text-white">{orderCode}</strong>
      </p>
    </div>
  );
}
