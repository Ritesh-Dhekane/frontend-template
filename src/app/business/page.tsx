'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Check, ArrowRight, Building2, Users, Palette, Package } from 'lucide-react'

export default function BusinessPage() {
  const [selectedPlan, setSelectedPlan] = useState<'starter'|'growth'|'enterprise'>('growth')

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-ravion-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Custom Branding Solutions for Your Business
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Transform your brand identity with custom merchandise, packaging, and stationery. 
              From startups to enterprises, we help businesses make their mark.
            </p>
            <div className="flex space-x-4">
              <Link 
                href="#contact"
                className="bg-ravion-primary text-white px-8 py-3 rounded-lg hover:bg-ravion-primary/90"
              >
                Get Started
              </Link>
              <Link 
                href="#pricing"
                className="bg-white text-ravion-dark px-8 py-3 rounded-lg hover:bg-gray-100"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Business Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div 
                key={service.title}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm"
              >
                <div className="w-12 h-12 bg-ravion-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="text-ravion-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Business Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan) => (
              <div 
                key={plan.name}
                className={`
                  relative bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm border-2
                  ${selectedPlan === plan.id 
                    ? 'border-ravion-primary' 
                    : 'border-transparent'
                  }
                `}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-ravion-primary text-white text-sm px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">${plan.price}</span>
                  <span className="text-gray-600 dark:text-gray-400">/month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-2">
                      <Check size={16} className="text-ravion-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`w-full py-2 rounded-lg border ${
                    selectedPlan === plan.id
                      ? 'bg-ravion-primary text-white'
                      : 'border-ravion-primary text-ravion-primary hover:bg-ravion-primary hover:text-white'
                  }`}
                >
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Company Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-ravion-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Contact Person</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-ravion-primary"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-ravion-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-ravion-primary"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-ravion-primary text-white py-3 rounded-lg hover:bg-ravion-primary/90"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

const services = [
  {
    icon: Building2,
    title: 'Corporate Branding',
    description: 'Complete branding solutions including custom apparel, stationery, and promotional materials.'
  },
  {
    icon: Users,
    title: 'Team Uniforms',
    description: 'High-quality custom uniforms for your team with consistent branding and comfort.'
  },
  {
    icon: Palette,
    title: 'Design Services',
    description: 'Professional design team to help create unique and impactful branded merchandise.'
  },
  {
    icon: Package,
    title: 'Bulk Orders',
    description: 'Competitive pricing for bulk orders with quick turnaround times.'
  }
]

const pricingPlans = [
  {
    id: 'starter',
    name: 'Starter',
    price: 299,
    features: [
      'Up to 100 custom items/month',
      'Basic design support',
      '2 revisions per design',
      'Standard shipping',
      'Online ordering portal'
    ]
  },
  {
    id: 'growth',
    name: 'Growth',
    price: 599,
    popular: true,
    features: [
      'Up to 500 custom items/month',
      'Priority design support',
      'Unlimited revisions',
      'Express shipping',
      'Dedicated account manager'
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 999,
    features: [
      'Unlimited custom items',
      'Premium design team',
      'White-glove service',
      'Global shipping',
      'API integration'
    ]
  }
] 