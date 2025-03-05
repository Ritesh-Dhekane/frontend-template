'use client'

import { useState } from 'react'
import QRCode from 'react-qr-code'
import { useCart } from '@/hooks/useCart'
import { formatPrice } from '@/utils/formatPrice'
import { Copy, CheckCircle2 } from 'lucide-react'
import { toast } from 'react-hot-toast'

export default function UPIPayment() {
  const { total } = useCart()
  const [copied, setCopied] = useState(false)
  const upiId = 'krishnadhaval@upi'
  
  // Generate UPI payment URL
  const upiUrl = `upi://pay?pa=${upiId}&pn=Ravion%20Studios&am=${total}&cu=INR`

  const handleCopyUPI = () => {
    navigator.clipboard.writeText(upiId)
    setCopied(true)
    toast.success('UPI ID copied!')
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-soft">
      <h2 className="text-xl font-semibold mb-4">Pay via UPI</h2>
      
      <div className="flex flex-col items-center space-y-4">
        <div className="bg-white p-4 rounded-lg">
          <QRCode 
            value={upiUrl}
            size={200}
            level="H"
          />
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400">
          Scan with any UPI app to pay {formatPrice(total)}
        </p>

        <div className="flex items-center space-x-2">
          <code className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded">
            {upiId}
          </code>
          <button
            onClick={handleCopyUPI}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            title="Copy UPI ID"
          >
            {copied ? (
              <CheckCircle2 className="w-5 h-5 text-green-500" />
            ) : (
              <Copy className="w-5 h-5" />
            )}
          </button>
        </div>

        <div className="text-sm text-gray-500 dark:text-gray-400">
          <p>1. Open your UPI app</p>
          <p>2. Scan the QR code or paste UPI ID</p>
          <p>3. Enter amount: {formatPrice(total)}</p>
          <p>4. Complete the payment</p>
        </div>
      </div>
    </div>
  )
} 