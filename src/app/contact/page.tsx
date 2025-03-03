'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const WHATSAPP_NUMBER = '+919322527567'
  const EMAIL = 'reetish.1410@gmail.com'

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `Name: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  const handleEmail = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = `Contact Form Submission from ${formData.name}`
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AMessage: ${formData.message}`
    const mailtoUrl = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${body}`
    window.location.href = mailtoUrl
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Have questions? We'd love to hear from you. Send us a message and we'll
              respond as soon as possible.
            </p>
            <div className="space-y-4">
              <p className="flex items-center text-gray-600 dark:text-gray-400">
                <span className="mr-2">📍</span> 123 Template Street, City, Country
              </p>
              <p className="flex items-center text-gray-600 dark:text-gray-400">
                <span className="mr-2">📧</span> {EMAIL}
              </p>
              <p className="flex items-center text-gray-600 dark:text-gray-400">
                <span className="mr-2">📱</span> {WHATSAPP_NUMBER}
              </p>
            </div>
          </div>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-1.5 border rounded-md focus:ring-1 focus:ring-primary-100 dark:bg-gray-800 dark:border-gray-700 text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-1.5 border rounded-md focus:ring-1 focus:ring-primary-100 dark:bg-gray-800 dark:border-gray-700 text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="w-full px-3 py-1.5 border rounded-md focus:ring-1 focus:ring-primary-100 dark:bg-gray-800 dark:border-gray-700 text-sm"
                required
              />
            </div>
            <div className="flex space-x-3 justify-end mt-2">
              <button
                onClick={handleWhatsApp}
                className="px-4 py-1.5 bg-green-500 hover:bg-green-600 text-white text-sm rounded-md transition-colors flex items-center space-x-1"
              >
                <span className="text-xs">📱</span>
                <span>WhatsApp</span>
              </button>
              <button
                onClick={handleEmail}
                className="px-4 py-1.5 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded-md transition-colors flex items-center space-x-1"
              >
                <span className="text-xs">📧</span>
                <span>Email</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
} 