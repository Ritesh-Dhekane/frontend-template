export type ProductCategory = 'apparel' | 'stationery' | 'packaging' | 'student'
export type ProductSubCategory = 'tshirts' | 'hoodies' | 'caps' | 'notebooks' | 'planners' | 'boxes' | 'bags'

export interface Product {
  id: string
  name: string
  description: string
  price: number
  images: string[]
  category: string
  subCategory?: string
  details?: string[]
  customizable?: boolean
  minOrder?: number
  colors?: string[]
  sizes?: string[]
  inStock?: boolean
  rating?: number
  reviews?: number
} 