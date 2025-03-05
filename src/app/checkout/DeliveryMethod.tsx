import { ShippingMethod } from '@/types/checkout'
import { Check } from 'lucide-react'

interface DeliveryMethodProps {
  methods: ShippingMethod[]
  selected: ShippingMethod
  onSelect: (method: ShippingMethod) => void
}

export default function DeliveryMethod({
  methods,
  selected,
  onSelect,
}: DeliveryMethodProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-6">Choose Delivery Method</h2>
      
      <div className="space-y-4">
        {methods.map((method) => (
          <button
            key={method.id}
            onClick={() => onSelect(method)}
            className={`w-full flex items-center justify-between p-4 rounded-lg border ${
              selected.id === method.id
                ? 'border-ravion-primary bg-ravion-primary/5'
                : 'border-gray-200 hover:border-ravion-primary'
            }`}
          >
            <div>
              <h3 className="font-medium">{method.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {method.estimatedDays}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="font-semibold">${method.price.toFixed(2)}</span>
              {selected.id === method.id && (
                <Check className="text-ravion-primary" size={20} />
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  )
} 