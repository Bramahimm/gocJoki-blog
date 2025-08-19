import { useState } from "react";
import { OrderForm } from "../types/order";
import { validateEmail, validatePhone, generateOrderCode } from "@/lib/utils";

export function useOrderForm() {
  const [formData, setFormData] = useState<OrderForm>({
    orderType: "service",
    customerName: "",
    email: "",
    phone: "",
    notes: "",
    preferred: "wa",
  });

  const [errors, setErrors] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [orderCode, setOrderCode] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, attachment: e.target.files![0] }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: string[] = [];
    if (!formData.customerName.trim()) newErrors.push("Nama wajib diisi");
    if (!formData.phone.trim() && !formData.email.trim())
      newErrors.push("Isi minimal salah satu kontak (WA atau Email)");
    if (formData.email && !validateEmail(formData.email))
      newErrors.push("Format email tidak valid");
    if (formData.phone && !validatePhone(formData.phone))
      newErrors.push("Format nomor WhatsApp tidak valid");

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const code = generateOrderCode();
      setOrderCode(code);
      setSuccess(true);
      setErrors([]);

      const message = `
              *Halo Admin*, saya ingin melakukan pemesanan:

              *Kode Order:* ${code}
              *Jenis Pesanan:* ${
                formData.orderType === "service" ? "Jasa" : "Template"
              }
              *Nama:* ${formData.customerName}
              *WhatsApp:* ${formData.phone || "-"}
              *Email:* ${formData.email || "-"}
              *Detail Pesanan:* ${formData.notes || "-"}
              *Preferensi Komunikasi:* ${formData.preferred.toUpperCase()}

              Terima kasih.
              `;
      const waUrl = `https://wa.me/6288706560821?text=${encodeURIComponent(
        message
      )}`;
      window.open(waUrl, "_blank");

      setFormData({
        orderType: "service",
        customerName: "",
        email: "",
        phone: "",
        notes: "",
        preferred: "wa",
      });
    } catch {
      setErrors(["Gagal mengirim pesanan. Silakan coba lagi."]);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    errors,
    success,
    orderCode,
    isSubmitting,
    handleInputChange,
    handleFileChange,
    handleSubmit,
  };
}
