'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useCartStore } from '@/store/cartStore'
import { ShippingAddress, ShippingMethod } from '@/types/checkout'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import CheckoutSteps from './CheckoutSteps'
import ShippingForm from './ShippingForm'
import DeliveryMethod from './DeliveryMethod'
import PaymentForm from './PaymentForm'
import OrderSummary from './OrderSummary'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY!)

const shippingMethods: ShippingMethod[] = [
  {
    id: 'standard',
    name: 'Standard Shipping',
    price: 5.99,
    estimatedDays: '5-7 business days'
  },
  {
    id: 'express',
    name: 'Express Shipping',
    price: 15.99,
    estimatedDays: '2-3 business days'
  },
  {
    id: 'overnight',
    name: 'Overnight Shipping',
    price: 29.99,
    estimatedDays: 'Next business day'
  }
]

export default function CheckoutPage() {
  const [step, setStep] = useState(1)
  const [selectedShipping, setSelectedShipping] = useState<ShippingMethod>(shippingMethods[0])
  const { items, getTotal } = useCartStore()
  const { register, handleSubmit, formState: { errors } } = useForm<ShippingAddress>()

  const subtotal = getTotal()
  const tax = subtotal * 0.1 // 10% tax
  const total = subtotal + selectedShipping.price + tax

  const handleShippingSubmit = (data: ShippingAddress) => {
    // Save shipping data and move to next step
    setStep(2)
  }

  const handleShippingMethodSelect = (method: ShippingMethod) => {
    setSelectedShipping(method)
    setStep(3)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <CheckoutSteps currentStep={step} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2">
          {step === 1 && (
            <ShippingForm 
              register={register}
              errors={errors}
              onSubmit={handleSubmit(handleShippingSubmit)}
            />
          )}

          {step === 2 && (
            <DeliveryMethod
              methods={shippingMethods}
              selected={selectedShipping}
              onSelect={handleShippingMethodSelect}
            />
          )}

          {step === 3 && (
            <Elements stripe={stripePromise}>
              <PaymentForm total={total} />
            </Elements>
          )}
        </div>

        <OrderSummary
          items={items}
          subtotal={subtotal}
          shipping={selectedShipping.price}
          tax={tax}
          total={total}
        />
      </div>
    </div>
  )
} 