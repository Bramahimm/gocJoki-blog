"use client";

import Button from "@/components/Button";
import { Search } from "lucide-react";

interface Props {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
  sortBy: string;
  setSortBy: (value: string) => void;
  categories: string[];
}

// CTA Component
export function TemplateCTA() {
  return (
    <div className="text-center mt-16">
      <h2 className="text-2xl font-bold text-white mb-4">
        Tidak menemukan yang cocok?
      </h2>
      <p className="text-gray-300 mb-6">
        Kami bisa membuat template custom sesuai kebutuhan Anda
      </p>
      <Button href="/order" size="lg">
        Pesan Template Custom
      </Button>
    </div>
  );
}

// Filters Component
export default function TemplateFilters({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  sortBy,
  setSortBy,
  categories,
}: Props) {
  return (
    <div className="mb-12 space-y-6">
      {/* Search Input */}
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

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedCategory === category
                ? "bg-primary-600 text-white"
                : "bg-dark-800 text-gray-300 hover:bg-dark-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Sort By */}
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
  );
}
