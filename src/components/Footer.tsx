'use client'

import Link from 'next/link'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-ravion-dark text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Logo & Social */}
          <div className="flex items-center space-x-6">
            <Link href="/" className="font-righteous text-xl">
              Ravion Studios
            </Link>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-ravion-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="hover:text-ravion-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="hover:text-ravion-primary transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-400">
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
            <Link href="/shipping" className="hover:text-white">Shipping</Link>
            <Link href="/returns" className="hover:text-white">Returns</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} Ravion Studios
          </div>
        </div>
      </div>
    </footer>
  )
} 