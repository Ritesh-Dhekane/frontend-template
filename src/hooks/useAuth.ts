import { create } from 'zustand'
// import { auth } from '@/config/firebase'
import { User } from 'firebase/auth'

interface AuthStore {
  user: User | null
  loading: boolean
  setUser: (user: User | null) => void
  setLoading: (loading: boolean) => void
}

export const useAuth = create<AuthStore>((set) => ({
  user: null,
  loading: true,
  setUser: (user) => set({ user }),
  setLoading: (loading) => set({ loading }),
}))

// export const initializeAuth = () => {
//   auth.onAuthStateChanged((user) => {
//     useAuth.getState().setUser(user)
//     useAuth.getState().setLoading(false)
//   })
// } 