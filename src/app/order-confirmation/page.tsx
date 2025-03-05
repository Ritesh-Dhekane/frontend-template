'use client'

import Link from 'next/link'
import { CheckCircle } from 'lucide-react'

export default function OrderConfirmationPage() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center">
      <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
      <h1 className="text-3xl font-display font-bold mb-2">Order Confirmed!</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8 text-center max-w-md">
        Thank you for your purchase. We'll send you an email with your order details shortly.
      </p>
      <Link
        href="/products"
        className="bg-ravion-primary text-white px-6 py-3 rounded-lg hover:bg-ravion-primary/90 transition-colors"
      >
        Continue Shopping
      </Link>
    </div>
  )
} 