"use client";

import { Eye, Download, Star } from "lucide-react";
import Button from "@/components/Button";
import { Template } from "../types/template";

interface Props {
  template: Template;
  formatPrice: (price: number) => string;
}

export default function TemplateCard({ template, formatPrice }: Props) {
  return (
    <div className="bg-dark-800/50 backdrop-blur-sm rounded-xl border border-dark-700 hover:border-primary-500/50 transition-all duration-300 hover:transform hover:scale-105">
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

      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">
          {template.name}
        </h3>
        <p className="text-gray-400 mb-4 line-clamp-2">
          {template.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {template.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="bg-dark-700 text-gray-300 text-xs px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-gray-300 text-sm">{template.rating}</span>
          </div>
          <span className="text-gray-400 text-sm">
            {template.downloads} downloads
          </span>
        </div>

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
  );
}
