'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Button from '@/components/Button'
import { Search, Filter, Eye, Download, Star } from 'lucide-react'

interface Template {
  id: number
  name: string
  description: string
  category: string
  price: number
  rating: number
  downloads: number
  image: string
  tags: string[]
}

const mockTemplates: Template[] = [
  {
    id: 1,
    name: 'Landing Page Modern',
    description: 'Landing page responsif dengan desain modern dan clean UI',
    category: 'Website',
    price: 150000,
    rating: 4.8,
    downloads: 1250,
    image: '/api/placeholder/400/300',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive']
  },
  {
    id: 2,
    name: 'Dashboard Admin Pro',
    description: 'Dashboard admin lengkap dengan fitur CRUD dan grafik',
    category: 'Dashboard',
    price: 250000,
    rating: 4.9,
    downloads: 890,
    image: '/api/placeholder/400/300',
    tags: ['React', 'TypeScript', 'Tailwind', 'Chart.js']
  },
  {
    id: 3,
    name: 'E-commerce Template',
    description: 'Template toko online dengan fitur keranjang dan checkout',
    category: 'E-commerce',
    price: 300000,
    rating: 4.7,
    downloads: 650,
    image: '/api/placeholder/400/300',
    tags: ['Vue.js', 'Node.js', 'MongoDB', 'Stripe']
  },
  {
    id: 4,
    name: 'Mobile App UI Kit',
    description: 'UI Kit lengkap untuk aplikasi mobile dengan 50+ komponen',
    category: 'Mobile',
    price: 180000,
    rating: 4.6,
    downloads: 420,
    image: '/api/placeholder/400/300',
    tags: ['Figma', 'Sketch', 'Adobe XD', 'iOS/Android']
  },
  {
    id: 5,
    name: 'Portfolio Website',
    description: 'Website portfolio profesional dengan animasi smooth',
    category: 'Portfolio',
    price: 120000,
    rating: 4.5,
    downloads: 780,
    image: '/api/placeholder/400/300',
    tags: ['HTML5', 'CSS3', 'GSAP', 'Parallax']
  },
  {
    id: 6,
    name: 'Blog Template',
    description: 'Template blog dengan sistem CMS dan SEO friendly',
    category: 'Blog',
    price: 200000,
    rating: 4.4,
    downloads: 320,
    image: '/api/placeholder/400/300',
    tags: ['WordPress', 'PHP', 'MySQL', 'SEO']
  }
]

const categories = ['Semua', 'Website', 'Dashboard', 'E-commerce', 'Mobile', 'Portfolio', 'Blog']

export default function TemplatesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Semua')
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating' | 'downloads'>('name')

  const filteredTemplates = mockTemplates
    .filter(template => {
      const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        template.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        template.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))

      const matchesCategory = selectedCategory === 'Semua' || template.category === selectedCategory

      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price - b.price
        case 'rating':
          return b.rating - a.rating
        case 'downloads':
          return b.downloads - a.downloads
        default:
          return a.name.localeCompare(b.name)
      }
    })

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700">
      <Navigation />

      <main className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6">Katalog Template</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Pilih dari berbagai template berkualitas tinggi yang siap digunakan untuk proyek Anda
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-12 space-y-6">
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Cari template..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-dark-800 border border-dark-600 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:border-primary-500 focus:outline-none"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${selectedCategory === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-dark-800 text-gray-300 hover:bg-dark-700'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Sort Options */}
            <div className="flex justify-center items-center space-x-4">
              <span className="text-gray-400">Urutkan berdasarkan:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-dark-800 border border-dark-600 rounded-lg px-3 py-2 text-white focus:border-primary-500 focus:outline-none"
              >
                <option value="name">Nama</option>
                <option value="price">Harga</option>
                <option value="rating">Rating</option>
                <option value="downloads">Downloads</option>
              </select>
            </div>
          </div>

          {/* Templates Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTemplates.map((template) => (
              <div key={template.id} className="bg-dark-800/50 backdrop-blur-sm rounded-xl border border-dark-700 hover:border-primary-500/50 transition-all duration-300 hover:transform hover:scale-105">
                {/* Template Image */}
                <div className="relative">
                  <div className="w-full h-48 bg-dark-700 rounded-t-xl flex items-center justify-center">
                    <div className="text-gray-400 text-center">
                      <div className="w-16 h-16 bg-dark-600 rounded-lg mx-auto mb-2"></div>
                      <p className="text-sm">Preview Image</p>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="bg-primary-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                      {template.category}
                    </span>
                  </div>
                </div>

                {/* Template Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{template.name}</h3>
                  <p className="text-gray-400 mb-4 line-clamp-2">{template.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {template.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="bg-dark-700 text-gray-300 text-xs px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-gray-300 text-sm">{template.rating}</span>
                    </div>
                    <span className="text-gray-400 text-sm">{template.downloads} downloads</span>
                  </div>

                  {/* Price and Actions */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary-400">
                      {formatPrice(template.price)}
                    </span>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-1" />
                        Preview
                      </Button>
                      <Button size="sm">
                        <Download className="w-4 h-4 mr-1" />
                        Beli
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredTemplates.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">Tidak ada template yang ditemukan.</p>
            </div>
          )}

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h2 className="text-2xl font-bold text-white mb-4">Tidak menemukan yang cocok?</h2>
            <p className="text-gray-300 mb-6">Kami bisa membuat template custom sesuai kebutuhan Anda</p>
            <Button href="/order" size="lg">
              Pesan Template Custom
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
