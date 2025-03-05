'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Palette, 
  Upload, 
  Wand2, 
  Shirt, 
  BookOpen, 
  Package, 
  ArrowRight,
  FileImage,
  Sparkles
} from 'lucide-react'

export default function CustomPage() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-white dark:bg-ravion-dark">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-5"></div>
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Create Your <span className="text-ravion-primary">Custom Design</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
              Transform your ideas into reality with our easy-to-use design tools. Start by selecting a product category below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  onClick={() => setSelectedProduct(category.id)}
                  className={`w-full h-full p-8 rounded-2xl transition-all duration-300 ${
                    selectedProduct === category.id
                      ? 'bg-ravion-primary text-white shadow-glow'
                      : 'bg-white dark:bg-gray-800 hover:shadow-xl'
                  }`}
                >
                  <category.icon className={`h-12 w-12 mb-4 ${
                    selectedProduct === category.id ? 'text-white' : 'text-ravion-primary'
                  }`} />
                  <h3 className="text-xl font-display font-semibold mb-3">{category.title}</h3>
                  <p className={`mb-4 ${
                    selectedProduct === category.id ? 'text-white/90' : 'text-gray-600 dark:text-gray-400'
                  }`}>{category.description}</p>
                  <div className="text-sm font-medium">
                    Starting from ₹{category.startingPrice}
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 dark:text-gray-400">Simple steps to bring your design to life</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-soft">
                  <div className="absolute -top-4 left-8 bg-ravion-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <step.icon className="h-10 w-10 text-ravion-primary mb-4" />
                  <h3 className="text-xl font-display font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-ravion-primary" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-ravion-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-display font-bold">Ready to Start Creating?</h2>
              <p className="text-xl text-gray-300">
                Get started with your custom design journey today and bring your vision to life.
              </p>
              <div className="flex justify-center gap-4">
                <Link
                  href={selectedProduct ? `/design/${selectedProduct}` : '#'}
                  className={`
                    px-8 py-3 rounded-lg font-medium transition-all
                    ${selectedProduct
                      ? 'bg-ravion-primary text-white hover:bg-ravion-primary/90 hover:scale-105'
                      : 'bg-gray-600 cursor-not-allowed'
                    }
                  `}
                >
                  Start Designing
                </Link>
                <Link
                  href="/inspiration"
                  className="px-8 py-3 bg-white text-ravion-dark rounded-lg font-medium hover:bg-gray-100 transition-all hover:scale-105"
                >
                  View Examples
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

const productCategories = [
  {
    id: 'apparel',
    title: 'Custom Apparel',
    description: 'T-shirts, hoodies, jerseys, and more with your unique designs',
    icon: Shirt,
    startingPrice: 599
  },
  {
    id: 'stationery',
    title: 'Stationery',
    description: 'Notebooks, planners, and office supplies with custom branding',
    icon: BookOpen,
    startingPrice: 299
  },
  {
    id: 'packaging',
    title: 'Custom Packaging',
    description: 'Bags, boxes, and packaging solutions for your brand',
    icon: Package,
    startingPrice: 399
  }
]

const steps = [
  {
    title: 'Choose Product',
    description: 'Select from our wide range of customizable products',
    icon: Palette
  },
  {
    title: 'Upload Design',
    description: 'Upload your artwork or create using our design tool',
    icon: FileImage
  },
  {
    title: 'Preview & Order',
    description: 'Review your design and place your order',
    icon: Sparkles
  }
] 