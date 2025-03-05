'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useCart } from '@/hooks/useCart'
import { formatPrice } from '@/utils/formatPrice'
import { getProductById } from '@/data/products'
import { notFound } from 'next/navigation'
import { Minus, Plus, ShoppingCart } from 'lucide-react'
import { toast } from 'react-hot-toast'

export default function CustomProductPage({ params }: { params: { productId: string } }) {
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState<string>('')
  const [selectedSize, setSelectedSize] = useState<string>('')
  const { addItem } = useCart()

  const product = getProductById(params.productId)

  if (!product) {
    notFound()
  }

  const handleAddToCart = () => {
    if (product.colors && !selectedColor) {
      toast.error('Please select a color')
      return
    }

    if (product.sizes && !selectedSize) {
      toast.error('Please select a size')
      return
    }

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity,
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

          {/* Color Selection */}
          {product.colors && product.colors.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold mb-4">Product Color</h2>
              <div className="flex flex-wrap gap-2">
                {product.colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-lg border-2 transition-colors ${
                      selectedColor === color
                        ? 'border-ravion-primary bg-ravion-primary/10'
                        : 'border-gray-200 hover:border-ravion-primary'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Size Selection */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold mb-4">Size</h2>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-lg border-2 transition-colors ${
                      selectedSize === size
                        ? 'border-ravion-primary bg-ravion-primary/10'
                        : 'border-gray-200 hover:border-ravion-primary'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity and Add to Cart */}
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
        </motion.div>
      </div>
    </div>
  )
}