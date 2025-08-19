"use client";

import { Send } from "lucide-react";
import Button from "@/components/Button";
import { useContactForm } from "../hooks/useContactForm";
import Alert from "@/components/Alert";

export default function ContactForm() {
  const {
    formData,
    errors,
    success,
    isSubmitting,
    handleInputChange,
    handleSubmit,
  } = useContactForm();

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">Kirim Pesan</h2>

      {success && (
        <Alert type="success">
          Pesan berhasil dikirim! Kami akan segera menghubungi Anda.
        </Alert>
      )}

      {errors.length > 0 && <Alert type="error" errors={errors} />}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-gray-300 font-semibold mb-2">
            Nama Lengkap
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full bg-dark-800 border border-dark-600 rounded-lg px-4 py-3 text-white focus:border-primary-500 focus:outline-none"
            required
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
            className="w-full bg-dark-800 border border-dark-600 rounded-lg px-4 py-3 text-white focus:border-primary-500 focus:outline-none"
            required
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-gray-300 font-semibold mb-2">
            Subjek
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            className="w-full bg-dark-800 border border-dark-600 rounded-lg px-4 py-3 text-white focus:border-primary-500 focus:outline-none"
            required
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-gray-300 font-semibold mb-2">
            Pesan
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleInputChange}
            className="w-full bg-dark-800 border border-dark-600 rounded-lg px-4 py-3 text-white focus:border-primary-500 focus:outline-none resize-none"
            required
          />
        </div>

        <Button type="submit" disabled={isSubmitting} className="w-full">
          <Send className="w-4 h-4 mr-2" />
          {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
        </Button>
      </form>
    </div>
  );
}
