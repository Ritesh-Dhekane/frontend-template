'use client'

import Link from 'next/link'
import { useTheme } from '@/contexts/ThemeContext'

export default function Header() {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-xl font-bold">
              Frontend Template
            </Link>
            <nav className="hidden md:flex space-x-4">
              <Link href="/about" className="hover:text-primary-100">
                About
              </Link>
              <Link href="/contact" className="hover:text-primary-100">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isDarkMode ? '🌞' : '🌙'}
            </button>
            <Link
              href="/login"
              className="px-4 py-2 rounded-lg bg-primary-50 hover:bg-primary-100"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
} 