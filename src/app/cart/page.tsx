'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Trash2, Minus, Plus, ArrowRight } from 'lucide-react'
import { useCartStore } from '@/store/cartStore'

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotal } = useCartStore()
  const [isUpdating, setIsUpdating] = useState(false)

  const handleQuantityChange = async (itemId: string, newQuantity: number) => {
    setIsUpdating(true)
    // In a real app, you might want to check stock availability here
    updateQuantity(itemId, Math.max(1, newQuantity))
    setIsUpdating(false)
  }

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center space-x-2 bg-ravion-primary text-white px-6 py-3 rounded-lg hover:bg-ravion-primary/90"
          >
            <span>Start Shopping</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm"
            >
              <div className="relative w-24 h-24">
                {item.customization ? (
                  <Image
                    src={item.customization.design}
                    alt={item.product.name}
                    fill
                    className="object-cover rounded-md"
                  />
                ) : (
                  <Image
                    src={item.product.images[0]}
                    alt={item.product.name}
                    fill
                    className="object-cover rounded-md"
                  />
                )}
              </div>

              <div className="flex-1">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-semibold">{item.product.name}</h3>
                    {item.customization && (
                      <span className="text-sm text-ravion-primary">Customized</span>
                    )}
                    <div className="text-sm text-gray-600 dark:text-gray-400 space-x-2">
                      {item.color && <span>Color: {item.color}</span>}
                      {item.size && <span>Size: {item.size}</span>}
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-gray-400 hover:text-red-500"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      disabled={isUpdating}
                      className="p-1 rounded-md border hover:border-ravion-primary disabled:opacity-50"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      disabled={isUpdating}
                      className="p-1 rounded-md border hover:border-ravion-primary disabled:opacity-50"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <span className="font-semibold">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm h-fit">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          
          <div className="space-y-2 mb-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${getTotal().toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600 dark:text-gray-400">
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>
          </div>

          <div className="border-t pt-4 mb-6">
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>${getTotal().toFixed(2)}</span>
            </div>
          </div>

          <Link
            href="/checkout"
            className="block w-full bg-ravion-primary text-white text-center py-3 rounded-lg hover:bg-ravion-primary/90"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  )
} 