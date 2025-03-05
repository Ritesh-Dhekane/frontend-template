'use client'

import { useCart } from '@/hooks/useCart'
import { formatPrice } from '@/utils/formatPrice'

export default function OrderSummary() {
  const { items, total } = useCart()

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-soft">
      <h2 className="text-xl font-display font-semibold mb-4">Order Summary</h2>
      
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between">
            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Qty: {item.quantity}
              </p>
            </div>
            <p className="font-medium">{formatPrice(item.price * item.quantity)}</p>
          </div>
        ))}

        <div className="border-t pt-4 mt-4">
          <div className="flex justify-between mb-2">
            <p>Subtotal</p>
            <p>{formatPrice(total)}</p>
          </div>
          <div className="flex justify-between mb-2">
            <p>Shipping</p>
            <p>{formatPrice(0)}</p>
          </div>
          <div className="flex justify-between font-semibold text-lg">
            <p>Total</p>
            <p>{formatPrice(total)}</p>
          </div>
        </div>
      </div>
    </div>
  )
} 