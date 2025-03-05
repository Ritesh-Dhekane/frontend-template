'use client'

import Image from 'next/image'
import Link from 'next/link'
import { 
  GraduationCap, 
  Users, 
  Percent, 
  Sparkles,
  ShoppingBag,
  Palette,
  Share2
} from 'lucide-react'

export default function StudentPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-ravion-dark/90 to-transparent z-10" />
        <div className="absolute inset-0">
          <Image
            src="/images/student-hero.jpg"
            alt="Students collaborating"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-2xl text-white">
            <span className="inline-block bg-ravion-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
              Student Exclusive
            </span>
            <h1 className="text-5xl font-bold mb-6">
              Express Your Campus Style
            </h1>
            <p className="text-xl mb-8">
              Get 20% off on all products with your student ID. Create custom designs 
              that make you stand out on campus.
            </p>
            <div className="flex space-x-4">
              <Link 
                href="/products?category=student"
                className="bg-ravion-primary text-white px-8 py-3 rounded-lg hover:bg-ravion-primary/90"
              >
                Shop Now
              </Link>
              <Link 
                href="#verify"
                className="bg-white text-ravion-dark px-8 py-3 rounded-lg hover:bg-gray-100"
              >
                Verify Student Status
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Ravion Student?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div 
                key={benefit.title}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-ravion-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="text-ravion-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Among Students</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link 
                key={category.title}
                href={category.link}
                className="group relative h-64 rounded-lg overflow-hidden"
              >
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                    <p className="text-sm text-gray-200">{category.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Student Ambassador Program */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-ravion-primary/10 text-ravion-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
              Join Our Community
            </span>
            <h2 className="text-3xl font-bold mb-6">Become a Campus Ambassador</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Represent Ravion Studios on your campus, earn rewards, and get exclusive access 
              to new products and special events.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {ambassadorPerks.map((perk) => (
                <div key={perk.title} className="p-4">
                  <perk.icon className="text-ravion-primary mx-auto mb-4" size={32} />
                  <h3 className="font-semibold mb-2">{perk.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{perk.description}</p>
                </div>
              ))}
            </div>
            <Link
              href="/ambassador-program"
              className="inline-flex items-center space-x-2 bg-ravion-primary text-white px-8 py-3 rounded-lg hover:bg-ravion-primary/90"
            >
              <span>Apply Now</span>
              <GraduationCap size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Student Verification */}
      <section id="verify" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Verify Your Student Status</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">School Email</label>
                <input
                  type="email"
                  placeholder="your.email@university.edu"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-ravion-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Student ID</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-ravion-primary"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-ravion-primary text-white py-3 rounded-lg hover:bg-ravion-primary/90"
              >
                Verify & Get 20% Off
              </button>
              <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                Your student discount will be automatically applied to all future purchases
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

const benefits = [
  {
    icon: Percent,
    title: '20% Student Discount',
    description: 'Exclusive discount for verified students on all products and customizations.'
  },
  {
    icon: Users,
    title: 'Group Orders',
    description: 'Special rates for club merchandise and team uniforms.'
  },
  {
    icon: Sparkles,
    title: 'Express Delivery',
    description: 'Fast shipping to your campus address or dorm.'
  }
]

const categories = [
  {
    title: 'Class Essentials',
    description: 'Notebooks, planners, and stationery with your personal touch',
    image: '/images/student-essentials.jpg',
    link: '/products?category=stationery'
  },
  {
    title: 'Club Merchandise',
    description: 'Custom apparel for your university clubs and organizations',
    image: '/images/club-merch.jpg',
    link: '/products?category=apparel'
  },
  {
    title: 'Dorm Decor',
    description: 'Personalized posters, wall art, and room accessories',
    image: '/images/dorm-decor.jpg',
    link: '/products?category=decor'
  }
]

const ambassadorPerks = [
  {
    icon: ShoppingBag,
    title: 'Free Products',
    description: 'Monthly allowance for Ravion products'
  },
  {
    icon: Palette,
    title: 'Design Input',
    description: 'Help shape new product designs'
  },
  {
    icon: Share2,
    title: 'Commission',
    description: 'Earn from referrals and sales'
  }
] 