'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Filter, SlidersHorizontal, Star, ChevronDown } from 'lucide-react'
import { Product, ProductCategory } from '@/types/product'
import { products } from '@/data/products'

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>('all')
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'rating'>('rating')
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000])
  const [showFilters, setShowFilters] = useState(false)

  const filteredProducts = useMemo(() => {
    return products
      .filter(product => 
        (selectedCategory === 'all' || product.category === selectedCategory) &&
        product.price >= priceRange[0] && 
        product.price <= priceRange[1]
      )
      .sort((a: Product, b: Product) => {
        switch (sortBy) {
          case 'price-asc':
            return a.price - b.price
          case 'price-desc':
            return b.price - a.price
          case 'rating':
            const ratingA = a.rating ?? 0
            const ratingB = b.rating ?? 0
            return ratingB - ratingA
          default:
            return 0
        }
      })
  }, [selectedCategory, sortBy, priceRange])

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      {/* Header */}
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-4xl font-display font-bold">Our Products</h1>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="md:hidden flex items-center space-x-2 text-ravion-primary"
        >
          <Filter size={20} />
          <span>Filters</span>
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters - Desktop */}
        <div className={`
          md:w-64 space-y-6
          ${showFilters ? 'block' : 'hidden md:block'}
        `}>
          <div>
            <h3 className="font-semibold mb-3">Categories</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value as ProductCategory | 'all')}
                  className={`block w-full text-left px-3 py-2 rounded-lg ${
                    selectedCategory === category.value
                      ? 'bg-ravion-primary text-white'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Price Range</h3>
            <div className="flex items-center space-x-4">
              <input
                type="range"
                min="0"
                max="1000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full"
              />
              <span className="text-sm">${priceRange[1]}</span>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          {/* Sort Options */}
          <div className="flex justify-end mb-6">
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                className="appearance-none bg-white dark:bg-gray-800 border rounded-lg px-4 py-2 pr-10"
              >
                <option value="rating">Most Popular</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
              <ChevronDown size={20} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <Link 
                key={product.id}
                href={`/products/${product.id}`}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-72">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.customizable && (
                    <span className="absolute top-3 right-3 bg-ravion-primary text-white text-sm px-3 py-1 rounded-full shadow-lg animate-scale-in">
                      Customizable
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-ravion-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-display font-bold text-lg">
                      {formatPrice(product.price)}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star size={18} className="text-yellow-400 fill-current" />
                      <span className="font-medium">{product.rating}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const categories = [
  { label: 'All Products', value: 'all' },
  { label: 'Apparel', value: 'apparel' },
  { label: 'Stationery', value: 'stationery' },
  { label: 'Packaging', value: 'packaging' },
  { label: 'Student Essentials', value: 'student' },
] 