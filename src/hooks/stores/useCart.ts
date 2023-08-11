import { create } from 'zustand'

type Store = {
  items: number
  addToCart: () => void
}

export const useCart = create<Store>()((set) => ({
  items: 0,
  addToCart: () => set((state) => ({ items: state.items + 1 })),
}))
