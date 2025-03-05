import { UseFormRegister, FieldErrors } from 'react-hook-form'
import { ShippingAddress } from '@/types/checkout'

interface ShippingFormProps {
  register: UseFormRegister<ShippingAddress>
  errors: FieldErrors<ShippingAddress>
  onSubmit: (e: React.FormEvent) => void
}

export default function ShippingForm({ register, errors, onSubmit }: ShippingFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-6">Shipping Information</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">
              First Name
            </label>
            <input
              {...register('firstName', { required: 'First name is required' })}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-ravion-primary"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
            )}
          </div>
          
          {/* Add more form fields for lastName, email, phone, address, etc. */}
        </div>

        <button
          type="submit"
          className="w-full mt-6 bg-ravion-primary text-white py-3 rounded-lg hover:bg-ravion-primary/90"
        >
          Continue to Delivery
        </button>
      </div>
    </form>
  )
} 