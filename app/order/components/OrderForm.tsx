"use client";

import Button from "@/components/Button";
import { useOrderForm } from "../hooks/useOrderForms";
import OrderSuccess from "./OrderSuccess";
import OrderErrors from "./OrderErrors";

export default function OrderForm() {
  const {
    formData,
    errors,
    success,
    orderCode,
    isSubmitting,
    handleInputChange,
    handleFileChange,
    handleSubmit,
  } = useOrderForm();

  return (
    <>
      {success && <OrderSuccess orderCode={orderCode} />}
      {errors.length > 0 && <OrderErrors errors={errors} />}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Order Type */}
        <div>
          <label
            htmlFor="orderType"
            className="block text-gray-300 font-semibold mb-2">
            Jenis Pesanan
          </label>
          <select
            id="orderType"
            name="orderType"
            value={formData.orderType}
            onChange={handleInputChange}
            className="w-full bg-dark-800 border border-dark-600 rounded-lg px-4 py-3 text-white"
            required>
            <option value="service">Jasa (IT / Non-IT)</option>
            <option value="template">Template</option>
          </select>
        </div>

        {/* Nama */}
        <div>
          <label
            htmlFor="customerName"
            className="block text-gray-300 font-semibold mb-2">
            Nama
          </label>
          <input
            type="text"
            id="customerName"
            name="customerName"
            value={formData.customerName}
            onChange={handleInputChange}
            className="w-full bg-dark-800 border border-dark-600 rounded-lg px-4 py-3 text-white"
            required
          />
        </div>

        {/* Kontak */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="phone"
              className="block text-gray-300 font-semibold mb-2">
              WhatsApp
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+62"
              className="w-full bg-dark-800 border border-dark-600 rounded-lg px-4 py-3 text-white"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-300 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="joki123@gmail.com"
              className="w-full bg-dark-800 border border-dark-600 rounded-lg px-4 py-3 text-white"
            />
          </div>
        </div>

        {/* Notes */}
        <div>
          <label
            htmlFor="notes"
            className="block text-gray-300 font-semibold mb-2">
            Detail Pesanan
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={5}
            value={formData.notes}
            onChange={handleInputChange}
            placeholder="Jelaskan kebutuhan Anda..."
            className="w-full bg-dark-800 border border-dark-600 rounded-lg px-4 py-3 text-white resize-none"
          />
        </div>

        {/* File */}
        <div>
          <label
            htmlFor="attachment"
            className="block text-gray-300 font-semibold mb-2">
            Lampiran (opsional)
          </label>
          <input
            type="file"
            id="attachment"
            name="attachment"
            onChange={handleFileChange}
            accept=".jpg,.jpeg,.png,.pdf,.zip,.rar"
            className="w-full bg-dark-800 border border-dark-600 rounded-lg px-4 py-3 text-white"
          />
        </div>

        {/* Preferensi */}
        <div>
          <label
            htmlFor="preferred"
            className="block text-gray-300 font-semibold mb-2">
            Preferensi Komunikasi
          </label>
          <select
            id="preferred"
            name="preferred"
            value={formData.preferred}
            onChange={handleInputChange}
            className="w-full bg-dark-800 border border-dark-600 rounded-lg px-4 py-3 text-white">
            <option value="wa">WhatsApp</option>
            <option value="email">Email</option>
          </select>
        </div>

        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? "Mengirim..." : "Kirim Pesanan"}
        </Button>
      </form>
    </>
  );
}
