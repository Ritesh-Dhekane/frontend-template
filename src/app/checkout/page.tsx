'use client'

import { useEffect, useState } from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { getStripe } from '@/config/stripe'
import { useCart } from '@/hooks/useCart'
import PaymentForm from './PaymentForm'
import UPIPayment from './UPIPayment'
import OrderSummary from './OrderSummary'

export default function CheckoutPage() {
  const { total } = useCart()
  const [clientSecret, setClientSecret] = useState('')
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'upi'>('upi')

  useEffect(() => {
    if (paymentMethod === 'card') {
      fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: total }),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret))
    }
  }, [total, paymentMethod])

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-display font-bold mb-8">Checkout</h1>

      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          {/* Payment Method Selection */}
          <div className="flex space-x-4 mb-6">
            <button
              onClick={() => setPaymentMethod('upi')}
              className={`flex-1 py-3 px-4 rounded-lg border-2 transition-colors ${
                paymentMethod === 'upi'
                  ? 'border-ravion-primary bg-ravion-primary/10'
                  : 'border-gray-200 hover:border-ravion-primary'
              }`}
            >
              Pay with UPI
            </button>
            <button
              onClick={() => setPaymentMethod('card')}
              className={`flex-1 py-3 px-4 rounded-lg border-2 transition-colors ${
                paymentMethod === 'card'
                  ? 'border-ravion-primary bg-ravion-primary/10'
                  : 'border-gray-200 hover:border-ravion-primary'
              }`}
            >
              Pay with Card
            </button>
          </div>

          {/* Payment Forms */}
          {paymentMethod === 'upi' ? (
            <UPIPayment />
          ) : (
            clientSecret && (
              <Elements stripe={getStripe()} options={{ clientSecret }}>
                <PaymentForm />
              </Elements>
            )
          )}
        </div>

        <OrderSummary />
      </div>
    </div>
  )
} 