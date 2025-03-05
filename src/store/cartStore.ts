import { create } from 'zustand'
import { Product } from '@/types/product'

export interface CartItem {
  id: string
  product: Product
  quantity: number
  color?: string
  size?: string
  customization?: {
    design: string // Base64 image of the design
    elements: any[] // Customization elements
  }
}

interface CartStore {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (itemId: string) => void
  updateQuantity: (itemId: string, quantity: number) => void
  clearCart: () => void
  getTotal: () => number
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  
  addItem: (item) => {
    set((state) => {
      const existingItem = state.items.find((i) => 
        i.id === item.id && 
        i.color === item.color && 
        i.size === item.size &&
        !i.customization // Only merge if not customized
      )

      if (existingItem) {
        return {
          items: state.items.map((i) =>
            i.id === existingItem.id
              ? { ...i, quantity: i.quantity + item.quantity }
              : i
          ),
        }
      }

      return { items: [...state.items, item] }
    })
  },

  removeItem: (itemId) => {
    set((state) => ({
      items: state.items.filter((i) => i.id !== itemId),
    }))
  },

  updateQuantity: (itemId, quantity) => {
    set((state) => ({
      items: state.items.map((item) =>
        item.id === itemId ? { ...item, quantity } : item
      ),
    }))
  },

  clearCart: () => {
    set({ items: [] })
  },

  getTotal: () => {
    const state = get()
    return state.items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    )
  },
})) 