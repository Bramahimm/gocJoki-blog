'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Button from '@/components/Button'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { validateEmail } from '@/lib/utils'

interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [errors, setErrors] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const validateForm = (): boolean => {
    const newErrors: string[] = []
    
    if (!formData.name.trim()) {
      newErrors.push('Nama wajib diisi')
    }
    
    if (!formData.email.trim()) {
      newErrors.push('Email wajib diisi')
    } else if (!validateEmail(formData.email)) {
      newErrors.push('Format email tidak valid')
    }
    
    if (!formData.subject.trim()) {
      newErrors.push('Subjek wajib diisi')
    }
    
    if (!formData.message.trim()) {
      newErrors.push('Pesan wajib diisi')
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
      
      setSuccess(true)
      setErrors([])
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      setErrors(['Gagal mengirim pesan. Silakan coba lagi.'])
    } finally {
      setIsSubmitting(false)
    }
  }

  const openWhatsApp = () => {
    const message = 'Halo Admin, saya ingin bertanya tentang layanan JokiGoC'
    const waUrl = `https://wa.me/081270934893?text=${encodeURIComponent(message)}`
    window.open(waUrl, '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700">
      <Navigation />
      
      <main className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6">Hubungi Kami</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ada pertanyaan atau ingin berkonsultasi? Jangan ragu untuk menghubungi kami.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
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
                        className="mt-2"
                      >
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
                      <p className="text-gray-400">admin@jokigoc.com</p>
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

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Jam Operasional</h3>
                <div className="space-y-2 text-gray-400">
                  <p>Senin - Jumat: 08:00 - 22:00 WIB</p>
                  <p>Sabtu - Minggu: 09:00 - 21:00 WIB</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Kirim Pesan</h2>
              
              {success && (
                <div className="bg-green-500/20 border border-green-500/50 rounded-xl p-6 mb-6 text-center">
                  <p className="text-green-400">
                    Pesan berhasil dikirim! Kami akan segera menghubungi Anda.
                  </p>
                </div>
              )}

              {errors.length > 0 && (
                <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-6 mb-6">
                  <ul className="text-red-400 space-y-1">
                    {errors.map((error, index) => (
                      <li key={index}>• {error}</li>
                    ))}
                  </ul>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 font-semibold mb-2">
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
                  <label htmlFor="email" className="block text-gray-300 font-semibold mb-2">
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
                  <label htmlFor="subject" className="block text-gray-300 font-semibold mb-2">
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
                  <label htmlFor="message" className="block text-gray-300 font-semibold mb-2">
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

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
