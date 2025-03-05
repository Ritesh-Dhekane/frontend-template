'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Heart, Share2 } from 'lucide-react'
import { Product } from '@/types/product'

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === params.id)
  const [selectedColor, setSelectedColor] = useState(product?.colors[0])
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0])
  const [quantity, setQuantity] = useState(product?.minOrder || 1)

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center space-x-2 text-sm mb-8">
        <Link href="/products" className="hover:text-ravion-primary">
          Products
        </Link>
        <ChevronRight size={16} />
        <Link 
          href={`/products?category=${product.category}`}
          className="hover:text-ravion-primary capitalize"
        >
          {product.category}
        </Link>
        <ChevronRight size={16} />
        <span className="text-gray-500">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
          {/* More images would go here */}
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-ravion-primary">
                ${product.price.toFixed(2)}
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <span>⭐</span>
              <span>{product.rating}</span>
              <span className="text-gray-500">({product.reviews} reviews)</span>
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-400 mb-8">
            {product.description}
          </p>

          {product.colors.length > 0 && (
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Color</h3>
              <div className="flex space-x-2">
                {product.colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border-2 ${
                      selectedColor === color
                        ? 'border-ravion-primary'
                        : 'border-transparent'
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          )}

          {product.sizes && (
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Size</h3>
              <div className="flex space-x-2">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-10 h-10 rounded-lg border ${
                      selectedSize === size
                        ? 'border-ravion-primary bg-ravion-primary text-white'
                        : 'border-gray-200 hover:border-ravion-primary'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="mb-8">
            <h3 className="font-semibold mb-3">Quantity</h3>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setQuantity(Math.max(product.minOrder, quantity - 1))}
                className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center"
              >
                -
              </button>
              <span className="w-12 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex space-x-4">
            <button className="flex-1 bg-ravion-primary text-white py-3 rounded-lg hover:bg-ravion-primary/90">
              Add to Cart
            </button>
            {product.customizable && (
              <Link
                href={`/custom/${product.id}`}
                className="flex-1 bg-ravion-secondary text-white py-3 rounded-lg hover:bg-ravion-secondary/90 text-center"
              >
                Customize
              </Link>
            )}
            <button className="w-12 h-12 flex items-center justify-center border border-gray-200 rounded-lg hover:border-ravion-primary">
              <Heart size={20} />
            </button>
            <button className="w-12 h-12 flex items-center justify-center border border-gray-200 rounded-lg hover:border-ravion-primary">
              <Share2 size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// This would typically come from an API or database
const products: Product[] = [
  // Same sample products as before
] 