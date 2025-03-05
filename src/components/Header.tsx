'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from '@/contexts/ThemeContext'
import { ShoppingCart, Menu, X, Sun, Moon } from 'lucide-react'
import CartIndicator from './CartIndicator'

export default function Header() {
  const { isDarkMode, toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-ravion-dark/80 backdrop-blur-md shadow-soft'
          : 'bg-white dark:bg-ravion-dark'
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 group"
          >
            <div className="w-8 h-8 bg-ravion-primary rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform">
              <span className="font-righteous text-xl text-white">R</span>
            </div>
            <span className="font-righteous text-2xl bg-gradient-to-r from-ravion-primary to-ravion-teal bg-clip-text text-transparent">
              Ravion Studios
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-ravion-primary" />
              )}
            </button>
            
            <CartIndicator />

            <Link
              href="/login"
              className="hidden md:flex items-center px-4 py-2 bg-ravion-primary/10 text-ravion-primary rounded-lg hover:bg-ravion-primary hover:text-white transition-colors"
            >
              Login
            </Link>

            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-slide-up">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/login"
                className="px-4 py-2 bg-ravion-primary text-white rounded-lg hover:bg-ravion-primary/90 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

const navLinks = [
  { href: '/products', label: 'Products' },
  { href: '/custom', label: 'Customize' },
  { href: '/business', label: 'For Business' },
  { href: '/student', label: 'Student Zone' },
] 