'use client'

import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { useCartStore } from '@/store/cartStore'

export default function CartIndicator() {
  const items = useCartStore((state) => state.items)
  const itemCount = items.reduce((total, item) => total + item.quantity, 0)

  return (
    <Link href="/cart" className="relative">
      <ShoppingCart className="h-6 w-6" />
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-ravion-primary text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </Link>
  )
} 