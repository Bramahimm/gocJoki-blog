'use client'

import { useState } from 'react'
import { validateEmail } from '@/lib/utils'

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export function useContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [errors, setErrors] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const validateForm = (): boolean => {
    const newErrors: string[] = []

    if (!formData.name.trim()) newErrors.push('Nama wajib diisi')
    if (!formData.email.trim()) {
      newErrors.push('Email wajib diisi')
    } else if (!validateEmail(formData.email)) {
      newErrors.push('Format email tidak valid')
    }
    if (!formData.subject.trim()) newErrors.push('Subjek wajib diisi')
    if (!formData.message.trim()) newErrors.push('Pesan wajib diisi')

    setErrors(newErrors)
    return newErrors.length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return
    setIsSubmitting(true)

    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSuccess(true)
      setErrors([])
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch {
      setErrors(['Gagal mengirim pesan. Silakan coba lagi.'])
    } finally {
      setIsSubmitting(false)
    }
  }

  const openWhatsApp = () => {
    const message = 'Halo!, saya ingin bertanya tentang layanan JokiGoC'
    const waUrl = `https://wa.me/088706560821?text=${encodeURIComponent(message)}`
    window.open(waUrl, '_blank')
  }

  return {
    formData,
    errors,
    isSubmitting,
    success,
    handleInputChange,
    handleSubmit,
    openWhatsApp
  }
}
