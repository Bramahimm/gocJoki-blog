import OrderForm from "./components/OrderForm";

export default function OrderPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700">
      <main className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
            Form Pemesanan
          </h1>
          <OrderForm />
        </div>
      </main>
    </div>
  );
}
