'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Check, ArrowRight, Building2, Users, Palette, Package } from 'lucide-react'

type PlanId = 'starter' | 'growth' | 'enterprise'

interface Plan {
  id: PlanId
  name: string
  price: number
  description: string
  features: string[]
}

const plans: Plan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: 999,
    description: 'Perfect for small businesses just getting started',
    features: [
      'Up to 100 products',
      'Basic analytics',
      'Email support',
      'Custom domain',
      'SSL certificate'
    ]
  },
  {
    id: 'growth',
    name: 'Growth',
    price: 2499,
    description: 'For growing businesses with more needs',
    features: [
      'Up to 1000 products',
      'Advanced analytics',
      'Priority support',
      'Custom domain',
      'SSL certificate',
      'API access',
      'Multiple users'
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 4999,
    description: 'For large businesses with custom requirements',
    features: [
      'Unlimited products',
      'Enterprise analytics',
      '24/7 support',
      'Custom domain',
      'SSL certificate',
      'API access',
      'Unlimited users',
      'Custom integrations',
      'Dedicated account manager'
    ]
  }
]

export default function BusinessPage() {
  const [selectedPlan, setSelectedPlan] = useState<PlanId>('starter')

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-display font-bold mb-4">
          Choose Your Plan
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Select the perfect plan for your business needs. All plans include our core features.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-soft"
          >
            <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {plan.description}
            </p>
            <p className="text-3xl font-bold mb-6">
              ₹{plan.price}
              <span className="text-base font-normal text-gray-600 dark:text-gray-400">
                /month
              </span>
            </p>

            <ul className="space-y-3 mb-6">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => setSelectedPlan(plan.id)}
              className={`w-full py-2 rounded-lg border ${
                selectedPlan === plan.id
                  ? 'bg-ravion-primary text-white'
                  : 'border-ravion-primary text-ravion-primary hover:bg-ravion-primary/10'
              } transition-colors`}
            >
              {selectedPlan === plan.id ? 'Selected' : 'Select Plan'}
            </button>
          </div>
        ))}
      </div>

      {selectedPlan && (
        <div className="text-center mt-12">
          <Link
            href="/checkout"
            className="inline-block bg-ravion-primary text-white px-8 py-3 rounded-lg hover:bg-ravion-primary/90 transition-colors"
          >
            Continue with {plans.find(p => p.id === selectedPlan)?.name} Plan
          </Link>
        </div>
      )}
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