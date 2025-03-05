'use client'

import { useState } from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'

interface PaymentFormProps {
  total: number
}

export default function PaymentForm({ total }: PaymentFormProps) {
  const stripe = useStripe()
  const elements = useElements()
  const [error, setError] = useState<string | null>(null)
  const [processing, setProcessing] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!stripe || !elements) return

    setProcessing(true)
    
    // Here you would typically:
    // 1. Create a payment intent on your server
    // 2. Confirm the payment with Stripe
    // 3. Handle the result
    // 4. Redirect to success/failure page

    setProcessing(false)
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-6">Payment Information</h2>
      
      <div className="mb-6">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
          className="p-4 border rounded-lg"
        />
        {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
      </div>

      <button
        type="submit"
        disabled={!stripe || processing}
        className="w-full bg-ravion-primary text-white py-3 rounded-lg hover:bg-ravion-primary/90 disabled:opacity-50"
      >
        {processing ? 'Processing...' : `Pay $${total.toFixed(2)}`}
      </button>
    </form>
  )
} 