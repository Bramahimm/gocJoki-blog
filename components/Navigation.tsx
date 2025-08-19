"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

interface NavigationProps {
  siteName?: string;
}

export default function Navigation({ siteName = "GocJoki" }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-dark-800/80 backdrop-blur-sm border-b border-dark-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg overflow-hidden">
              <Image
                src="/gocLogo.png" 
                alt="Logo"
                width={32}
                height={32}
                className="object-cover"
              />
            </div>
            <span className="text-white font-semibold text-xl">{siteName}</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/#jasa"
              className="text-gray-300 hover:text-white transition-colors">
              Jasa
            </Link>
            <Link
              href="/#templates"
              className="text-gray-300 hover:text-white transition-colors">
              Template
            </Link>
            <Link
              href="/#portofolio"
              className="text-gray-300 hover:text-white transition-colors">
              Portofolio
            </Link>
            <Link
              href="/order"
              className="text-gray-300 hover:text-white transition-colors">
              Order
            </Link>
            <Link
              href="/contact"
              className="text-gray-300 hover:text-white transition-colors">
              Kontak
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white transition-colors">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-dark-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/#jasa"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}>
                Jasa
              </Link>
              <Link
                href="/#templates"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}>
                Template
              </Link>
              <Link
                href="/#portofolio"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}>
                Portofolio
              </Link>
              <Link
                href="/order"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}>
                Order
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}>
                Kontak
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
