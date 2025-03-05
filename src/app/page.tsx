'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Palette, Sparkles, Users, Zap } from 'lucide-react'
import { placeholderImages } from '@/data/placeholderImages'

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-ravion-dark via-ravion-dark/95 to-ravion-primary/20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-dot-pattern opacity-5"></div>
        </div>
        
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white space-y-6"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
                Where <span className="text-ravion-primary">Creativity</span> Meets Custom Design
              </h1>
              <p className="text-xl text-gray-300">
                Transform your ideas into stunning custom merchandise. From apparel to stationery, 
                make your mark with unique designs.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/products"
                  className="bg-ravion-primary text-white px-8 py-3 rounded-lg hover:bg-ravion-primary/90 transition-all hover:scale-105"
                >
                  Explore Products
                </Link>
                <Link 
                  href="/custom"
                  className="bg-white text-ravion-dark px-8 py-3 rounded-lg hover:bg-gray-100 transition-all hover:scale-105"
                >
                  Start Designing
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[500px] hidden lg:block"
            >
              <Image
                src={placeholderImages.hero}
                alt="Product Collage"
                fill
                className="object-contain animate-float"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 bg-white dark:bg-ravion-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-display font-bold mb-4">Featured Categories</h2>
            <p className="text-gray-600 dark:text-gray-400">Discover our most popular customization options</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link 
                  href={category.href}
                  className="group block bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-64">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-ravion-primary">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {category.description}
                    </p>
                    <div className="flex items-center text-ravion-primary font-medium">
                      <span>Explore</span>
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-ravion-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold mb-4">Why Choose Us</h2>
            <p className="text-gray-600 dark:text-gray-400">Experience the perfect blend of quality and creativity</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-soft hover:shadow-lg transition-all"
              >
                <feature.icon className="h-12 w-12 text-ravion-primary mb-4" />
                <h3 className="text-xl font-display font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const categories = [
  {
    title: 'Custom Apparel',
    description: 'T-shirts, hoodies, and more with your unique designs',
    image: placeholderImages.apparel,
    href: '/products?category=apparel'
  },
  {
    title: 'Stationery',
    description: 'Personalized notebooks, planners, and office supplies',
    image: placeholderImages.stationery,
    href: '/products?category=stationery'
  },
  {
    title: 'Team Gear',
    description: 'Custom uniforms and merchandise for your team',
    image: placeholderImages.team,
    href: '/products?category=team'
  },
  {
    title: 'Business Solutions',
    description: 'Corporate branding and promotional materials',
    image: placeholderImages.business,
    href: '/business'
  }
]

const features = [
  {
    icon: Palette,
    title: 'Custom Design',
    description: 'Create unique designs with our easy-to-use design tools'
  },
  {
    icon: Sparkles,
    title: 'Premium Quality',
    description: 'High-quality materials and printing techniques'
  },
  {
    icon: Zap,
    title: 'Fast Turnaround',
    description: 'Quick production and delivery times'
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: '24/7 customer service and design assistance'
  }
]
