'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Button from '@/components/Button'
import { validateEmail, validatePhone, generateOrderCode } from '@/lib/utils'

interface OrderForm {
  orderType: 'service' | 'template'
  customerName: string
  email: string
  phone: string
  notes: string
  preferred: 'wa' | 'email'
  attachment?: File
}

export default function OrderPage() {
  const [formData, setFormData] = useState<OrderForm>({
    orderType: 'service',
    customerName: '',
    email: '',
    phone: '',
    notes: '',
    preferred: 'wa'
  })
  
  const [errors, setErrors] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [orderCode, setOrderCode] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, attachment: e.target.files![0] }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: string[] = []
    
    if (!formData.customerName.trim()) {
      newErrors.push('Nama wajib diisi')
    }
    
    if (!formData.phone.trim() && !formData.email.trim()) {
      newErrors.push('Isi minimal salah satu kontak (WA atau Email)')
    }
    
    if (formData.email && !validateEmail(formData.email)) {
      newErrors.push('Format email tidak valid')
    }
    
    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.push('Format nomor WhatsApp tidak valid')
    }
    
    if (formData.attachment && formData.attachment.size > 5 * 1024 * 1024) {
      newErrors.push('Ukuran file maksimal 5MB')
    }
    
    setErrors(newErrors)
    return newErrors.length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const code = generateOrderCode()
      setOrderCode(code)
      setSuccess(true)
      setErrors([])
      
      // Reset form
      setFormData({
        orderType: 'service',
        customerName: '',
        email: '',
        phone: '',
        notes: '',
        preferred: 'wa'
      })
    } catch (error) {
      setErrors(['Gagal mengirim pesanan. Silakan coba lagi.'])
    } finally {
      setIsSubmitting(false)
    }
  }

  const openWhatsApp = () => {
    const message = `Halo Admin, saya barusan membuat pesanan dengan kode: ${orderCode}`
    const waUrl = `https://wa.me/081270934893?text=${encodeURIComponent(message)}`
    window.open(waUrl, '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700">
      <Navigation />
      
      <main className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">Form Pemesanan</h1>

          {success && (
            <div className="bg-green-500/20 border border-green-500/50 rounded-xl p-6 mb-8 text-center">
              <p className="text-green-400 mb-4">
                Pesanan berhasil dikirim. Kode Order: <strong className="text-white">{orderCode}</strong>
              </p>
              <Button onClick={openWhatsApp}>
                Chat Admin
              </Button>
            </div>
          )}

          {errors.length > 0 && (
            <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-6 mb-8">
              <ul className="text-red-400 space-y-1">
                {errors.map((error, index) => (
                  <li key={index}>• {error}</li>
                ))}
              </ul>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="orderType" className="block text-gray-300 font-semibold mb-2">
                Jenis Pesanan
              </label>
              <select
                id="orderType"
                name="orderType"
                value={formData.orderType}
                onChange={handleInputChange}
                className="w-full bg-dark-800 border border-dark-600 rounded-lg px-4 py-3 text-white focus:border-primary-500 focus:outline-none"
                required
              >
                <option value="service">Jasa (IT / Non-IT)</option>
                <option value="template">Template</option>
              </select>
            </div>

            <div>
              <label htmlFor="customerName" className="block text-gray-300 font-semibold mb-2">
                Nama
              </label>
              <input
                type="text"
                id="customerName"
                name="customerName"
                value={formData.customerName}
                onChange={handleInputChange}
                className="w-full bg-dark-800 border border-dark-600 rounded-lg px-4 py-3 text-white focus:border-primary-500 focus:outline-none"
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="block text-gray-300 font-semibold mb-2">
                  WhatsApp
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="62xxxxxxxxxx"
                  className="w-full bg-dark-800 border border-dark-600 rounded-lg px-4 py-3 text-white focus:border-primary-500 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="email@domain.com"
                  className="w-full bg-dark-800 border border-dark-600 rounded-lg px-4 py-3 text-white focus:border-primary-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label htmlFor="notes" className="block text-gray-300 font-semibold mb-2">
                Detail Pesanan
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={5}
                value={formData.notes}
                onChange={handleInputChange}
                placeholder="Jelaskan kebutuhan Anda..."
                className="w-full bg-dark-800 border border-dark-600 rounded-lg px-4 py-3 text-white focus:border-primary-500 focus:outline-none resize-none"
              />
            </div>

            <div>
              <label htmlFor="attachment" className="block text-gray-300 font-semibold mb-2">
                Lampiran (opsional)
              </label>
              <input
                type="file"
                id="attachment"
                name="attachment"
                onChange={handleFileChange}
                accept=".jpg,.jpeg,.png,.pdf,.zip,.rar"
                className="w-full bg-dark-800 border border-dark-600 rounded-lg px-4 py-3 text-white focus:border-primary-500 focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary-600 file:text-white hover:file:bg-primary-700"
              />
            </div>

            <div>
              <label htmlFor="preferred" className="block text-gray-300 font-semibold mb-2">
                Preferensi Komunikasi
              </label>
              <select
                id="preferred"
                name="preferred"
                value={formData.preferred}
                onChange={handleInputChange}
                className="w-full bg-dark-800 border border-dark-600 rounded-lg px-4 py-3 text-white focus:border-primary-500 focus:outline-none"
              >
                <option value="wa">WhatsApp</option>
                <option value="email">Email</option>
              </select>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full"
            >
              {isSubmitting ? 'Mengirim...' : 'Kirim Pesanan'}
            </Button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  )
}
