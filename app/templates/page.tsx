"use client";

import { useState } from "react";
import TemplateCard from "./components/TemplateCard";
import TemplateFilters from "./components/TemplateFilters";
import TemplateCTA from "./components/TemplateCTA";
import { mockTemplates, categories } from "./data/mockTemplates";
import { Template } from "./types/template";

export default function TemplatesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [sortBy, setSortBy] = useState<string>("name");

  const filteredTemplates = mockTemplates
    .filter((template) => {
      const matchesSearch =
        template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        template.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        template.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesCategory =
        selectedCategory === "Semua" || template.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price":
          return a.price - b.price;
        case "rating":
          return b.rating - a.rating;
        case "downloads":
          return b.downloads - a.downloads;
        default:
          return a.name.localeCompare(b.name);
      }
    });

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700">
      <main className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Katalog Template
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Pilih dari berbagai template berkualitas tinggi yang siap
              digunakan untuk proyek Anda
            </p>
          </div>

          {/* Filters */}
          <TemplateFilters
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            sortBy={sortBy}
            setSortBy={setSortBy}
            categories={categories}
          />

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTemplates.map((template: Template) => (
              <TemplateCard
                key={template.id}
                template={template}
                formatPrice={formatPrice}
              />
            ))}
          </div>

          {filteredTemplates.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">
                Tidak ada template yang ditemukan.
              </p>
            </div>
          )}

          <TemplateCTA />
        </div>
      </main>
    </div>
  );
}
