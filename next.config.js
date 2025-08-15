/** @type {import('next').NextConfig} */
const nextConfig = {
  // Mode ketat React untuk membantu debugging
  reactStrictMode: true,

  // Konfigurasi domain gambar yang diizinkan
  images: {
    domains: ['localhost'], // Tambah domain lain jika perlu
    formats: ['image/avif', 'image/webp'], // Optimasi format gambar
  },
}

module.exports = nextConfig
