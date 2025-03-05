'use client'

import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300)
    }
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      className={`
        fixed bottom-8 right-8 p-3 rounded-full bg-ravion-primary text-white
        shadow-lg hover:bg-ravion-primary/90 transition-all duration-300
        ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
      `}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-6 w-6" />
    </button>
  )
} 