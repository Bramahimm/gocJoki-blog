'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import { BarChart3, Package, Users, DollarSign, TrendingUp, Eye, Edit, Trash2 } from 'lucide-react'

interface Order {
  id: number
  orderCode: string
  customerName: string
  orderType: string
  status: 'pending' | 'processing' | 'completed' | 'cancelled'
  amount: number
  createdAt: string
}

interface Template {
  id: number
  name: string
  category: string
  price: number
  status: 'active' | 'inactive'
  downloads: number
}

const mockOrders: Order[] = [
  {
    id: 1,
    orderCode: 'JGC001',
    customerName: 'Ahmad Fadillah',
    orderType: 'Website Development',
    status: 'processing',
    amount: 1500000,
    createdAt: '2024-01-15'
  },
  {
    id: 2,
    orderCode: 'JGC002',
    customerName: 'Sarah Putri',
    orderType: 'Template Purchase',
    status: 'completed',
    amount: 250000,
    createdAt: '2024-01-14'
  },
  {
    id: 3,
    orderCode: 'JGC003',
    customerName: 'Budi Santoso',
    orderType: 'Mobile App',
    status: 'pending',
    amount: 3000000,
    createdAt: '2024-01-13'
  }
]

const mockTemplates: Template[] = [
  {
    id: 1,
    name: 'Landing Page Modern',
    category: 'Website',
    price: 150000,
    status: 'active',
    downloads: 1250
  },
  {
    id: 2,
    name: 'Dashboard Admin Pro',
    category: 'Dashboard',
    price: 250000,
    status: 'active',
    downloads: 890
  },
  {
    id: 3,
    name: 'E-commerce Template',
    category: 'E-commerce',
    price: 300000,
    status: 'inactive',
    downloads: 650
  }
]

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'orders' | 'templates'>('dashboard')

  const stats = {
    totalOrders: 156,
    totalRevenue: 25000000,
    totalTemplates: 45,
    activeUsers: 89
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(amount)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50'
      case 'processing':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/50'
      case 'completed':
        return 'bg-green-500/20 text-green-400 border-green-500/50'
      case 'cancelled':
        return 'bg-red-500/20 text-red-400 border-red-500/50'
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/50'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending':
        return 'Menunggu'
      case 'processing':
        return 'Diproses'
      case 'completed':
        return 'Selesai'
      case 'cancelled':
        return 'Dibatalkan'
      default:
        return status
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700">
      <Navigation siteName="Admin Dashboard" />

      <main className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Dashboard Admin</h1>
            <p className="text-gray-400">Kelola pesanan, template, dan monitor performa bisnis</p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex space-x-1 bg-dark-800 rounded-lg p-1 mb-8">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${activeTab === 'dashboard'
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-400 hover:text-white'
                }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => setActiveTab('orders')}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${activeTab === 'orders'
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-400 hover:text-white'
                }`}
            >
              Pesanan
            </button>
            <button
              onClick={() => setActiveTab('templates')}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${activeTab === 'templates'
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-400 hover:text-white'
                }`}
            >
              Template
            </button>
          </div>

          {/* Dashboard Tab */}
          {activeTab === 'dashboard' && (
            <div className="space-y-8">
              {/* Stats Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-dark-800/50 backdrop-blur-sm rounded-xl p-6 border border-dark-700">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Total Pesanan</p>
                      <p className="text-2xl font-bold text-white">{stats.totalOrders}</p>
                    </div>
                    <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center">
                      <Package className="w-6 h-6 text-primary-400" />
                    </div>
                  </div>
                </div>

                <div className="bg-dark-800/50 backdrop-blur-sm rounded-xl p-6 border border-dark-700">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Total Pendapatan</p>
                      <p className="text-2xl font-bold text-white">{formatCurrency(stats.totalRevenue)}</p>
                    </div>
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-green-400" />
                    </div>
                  </div>
                </div>

                <div className="bg-dark-800/50 backdrop-blur-sm rounded-xl p-6 border border-dark-700">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Total Template</p>
                      <p className="text-2xl font-bold text-white">{stats.totalTemplates}</p>
                    </div>
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-blue-400" />
                    </div>
                  </div>
                </div>

                <div className="bg-dark-800/50 backdrop-blur-sm rounded-xl p-6 border border-dark-700">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Pengguna Aktif</p>
                      <p className="text-2xl font-bold text-white">{stats.activeUsers}</p>
                    </div>
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-purple-400" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Orders */}
              <div className="bg-dark-800/50 backdrop-blur-sm rounded-xl border border-dark-700">
                <div className="p-6 border-b border-dark-700">
                  <h2 className="text-xl font-semibold text-white">Pesanan Terbaru</h2>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {mockOrders.slice(0, 5).map((order) => (
                      <div key={order.id} className="flex items-center justify-between p-4 bg-dark-700/50 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center">
                            <span className="text-primary-400 font-semibold text-sm">#{order.orderCode}</span>
                          </div>
                          <div>
                            <p className="text-white font-medium">{order.customerName}</p>
                            <p className="text-gray-400 text-sm">{order.orderType}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(order.status)}`}>
                            {getStatusText(order.status)}
                          </span>
                          <span className="text-white font-medium">{formatCurrency(order.amount)}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Orders Tab */}
          {activeTab === 'orders' && (
            <div className="bg-dark-800/50 backdrop-blur-sm rounded-xl border border-dark-700">
              <div className="p-6 border-b border-dark-700">
                <h2 className="text-xl font-semibold text-white">Kelola Pesanan</h2>
              </div>
              <div className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-dark-700">
                        <th className="text-left py-3 px-4 text-gray-400 font-medium">Kode Order</th>
                        <th className="text-left py-3 px-4 text-gray-400 font-medium">Pelanggan</th>
                        <th className="text-left py-3 px-4 text-gray-400 font-medium">Jenis</th>
                        <th className="text-left py-3 px-4 text-gray-400 font-medium">Status</th>
                        <th className="text-left py-3 px-4 text-gray-400 font-medium">Jumlah</th>
                        <th className="text-left py-3 px-4 text-gray-400 font-medium">Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockOrders.map((order) => (
                        <tr key={order.id} className="border-b border-dark-700/50">
                          <td className="py-3 px-4 text-white font-medium">#{order.orderCode}</td>
                          <td className="py-3 px-4 text-white">{order.customerName}</td>
                          <td className="py-3 px-4 text-gray-400">{order.orderType}</td>
                          <td className="py-3 px-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(order.status)}`}>
                              {getStatusText(order.status)}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-white font-medium">{formatCurrency(order.amount)}</td>
                          <td className="py-3 px-4">
                            <div className="flex space-x-2">
                              <button className="p-2 text-blue-400 hover:text-blue-300 transition-colors">
                                <Eye className="w-4 h-4" />
                              </button>
                              <button className="p-2 text-yellow-400 hover:text-yellow-300 transition-colors">
                                <Edit className="w-4 h-4" />
                              </button>
                              <button className="p-2 text-red-400 hover:text-red-300 transition-colors">
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Templates Tab */}
          {activeTab === 'templates' && (
            <div className="bg-dark-800/50 backdrop-blur-sm rounded-xl border border-dark-700">
              <div className="p-6 border-b border-dark-700">
                <h2 className="text-xl font-semibold text-white">Kelola Template</h2>
              </div>
              <div className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-dark-700">
                        <th className="text-left py-3 px-4 text-gray-400 font-medium">Nama</th>
                        <th className="text-left py-3 px-4 text-gray-400 font-medium">Kategori</th>
                        <th className="text-left py-3 px-4 text-gray-400 font-medium">Harga</th>
                        <th className="text-left py-3 px-4 text-gray-400 font-medium">Status</th>
                        <th className="text-left py-3 px-4 text-gray-400 font-medium">Downloads</th>
                        <th className="text-left py-3 px-4 text-gray-400 font-medium">Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockTemplates.map((template) => (
                        <tr key={template.id} className="border-b border-dark-700/50">
                          <td className="py-3 px-4 text-white font-medium">{template.name}</td>
                          <td className="py-3 px-4 text-gray-400">{template.category}</td>
                          <td className="py-3 px-4 text-white font-medium">{formatCurrency(template.price)}</td>
                          <td className="py-3 px-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium border ${template.status === 'active'
                                ? 'bg-green-500/20 text-green-400 border-green-500/50'
                                : 'bg-red-500/20 text-red-400 border-red-500/50'
                              }`}>
                              {template.status === 'active' ? 'Aktif' : 'Tidak Aktif'}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-gray-400">{template.downloads}</td>
                          <td className="py-3 px-4">
                            <div className="flex space-x-2">
                              <button className="p-2 text-blue-400 hover:text-blue-300 transition-colors">
                                <Eye className="w-4 h-4" />
                              </button>
                              <button className="p-2 text-yellow-400 hover:text-yellow-300 transition-colors">
                                <Edit className="w-4 h-4" />
                              </button>
                              <button className="p-2 text-red-400 hover:text-red-300 transition-colors">
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
