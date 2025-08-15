"use client";

import Button from "@/components/Button";
import { Mail, Phone, MapPin } from "lucide-react";
import { useContactForm } from "./hooks/useContactForm";

export default function ContactInfo() {
  const { openWhatsApp } = useContactForm();

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Informasi Kontak</h2>
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5 text-primary-400" />
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">WhatsApp</h3>
              <p className="text-gray-400">081270934893</p>
              <Button
                variant="outline"
                size="sm"
                onClick={openWhatsApp}
                className="mt-2">
                Chat WhatsApp
              </Button>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5 text-primary-400" />
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Email</h3>
              <p className="text-gray-400">bramahimsa123@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-primary-400" />
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Lokasi</h3>
              <p className="text-gray-400">Indonesia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
