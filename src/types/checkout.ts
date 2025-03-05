export interface ShippingAddress {
  firstName: string
  lastName: string
  email: string
  phone: string
  address1: string
  address2?: string
  city: string
  state: string
  postalCode: string
  country: string
}

export interface ShippingMethod {
  id: string
  name: string
  price: number
  estimatedDays: string
}

export interface PaymentIntent {
  clientSecret: string
  amount: number
} 