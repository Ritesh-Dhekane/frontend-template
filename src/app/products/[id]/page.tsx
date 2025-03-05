'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useCart } from '@/hooks/useCart'
import { formatPrice } from '@/utils/formatPrice'
import { Minus, Plus, ShoppingCart } from 'lucide-react'
import { getProductById } from '@/data/products'
import { notFound } from 'next/navigation'
import { toast } from 'react-hot-toast'

export default function ProductPage({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()
  
  const product = getProductById(params.id)
  
  if (!product) {
    notFound()
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity
    })
    
    toast.success('Added to cart!', {
      position: 'bottom-right',
      duration: 2000,
    })
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100"
          >
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover"
            />
          </motion.div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.slice(1).map((image, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-lg overflow-hidden bg-gray-100"
              >
                <Image
                  src={image}
                  alt={`${product.name} view ${index + 2}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <div>
            <h1 className="text-4xl font-display font-bold mb-2">{product.name}</h1>
            <p className="text-2xl text-ravion-primary font-semibold">
              {formatPrice(product.price)}
            </p>
          </div>

          <div className="prose dark:prose-invert">
            <p>{product.description}</p>
          </div>

          {/* Product Options */}
          {product.colors && (
            <div className="space-y-2">
              <h3 className="font-medium">Colors</h3>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <div
                    key={color}
                    className="px-3 py-1 border rounded-md text-sm capitalize"
                  >
                    {color}
                  </div>
                ))}
              </div>
            </div>
          )}

          {product.sizes && (
            <div className="space-y-2">
              <h3 className="font-medium">Sizes</h3>
              <div className="flex gap-2">
                {product.sizes.map((size) => (
                  <div
                    key={size}
                    className="px-3 py-1 border rounded-md text-sm"
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <Minus className="h-5 w-5" />
              </button>
              <span className="text-xl font-medium">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <Plus className="h-5 w-5" />
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full flex items-center justify-center space-x-2 bg-ravion-primary text-white px-6 py-3 rounded-lg hover:bg-ravion-primary/90 transition-colors"
            >
              <ShoppingCart className="h-5 w-5" />
              <span>Add to Cart</span>
            </button>
          </div>

          {/* Product Details */}
          {product.details && (
            <div className="border-t pt-6 space-y-4">
              <h2 className="text-xl font-semibold">Product Details</h2>
              <ul className="space-y-2">
                {product.details.map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <span className="h-2 w-2 mt-2 rounded-full bg-ravion-primary mr-2" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Additional Info */}
          {(product.rating || product.reviews) && (
            <div className="border-t pt-4 flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
              {product.rating && (
                <div>Rating: {product.rating} / 5</div>
              )}
              {product.reviews && (
                <div>{product.reviews} Reviews</div>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
} 