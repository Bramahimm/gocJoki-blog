"use client";

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

      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedCategory === category
                ? "bg-primary-600 text-white"
                : "bg-dark-800 text-gray-300 hover:bg-dark-700"
            }`}>
            {category}
          </button>
        ))}
      </div>

      <div className="flex justify-center items-center space-x-4">
        <span className="text-gray-400">Urutkan berdasarkan:</span>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as any)}
          className="bg-dark-800 border border-dark-600 rounded-lg px-3 py-2 text-white focus:border-primary-500 focus:outline-none">
          <option value="name">Nama</option>
          <option value="price">Harga</option>
          <option value="rating">Rating</option>
          <option value="downloads">Downloads</option>
        </select>
      </div>
    </div>
  );
}
