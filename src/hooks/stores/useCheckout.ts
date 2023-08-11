import { create } from "zustand";
import { IGetProducts } from "../requests/useProduct";

interface CheckoutState {
  checkoutProducts: IGetProducts[];
  addProduct: (product: IGetProducts) => void;
  removeProduct: (id: string) => void;
  quantitiyItems: number
  addQuantity: () => void
}

export const useCheckoutStore = create<CheckoutState>((set) => ({
  checkoutProducts: [],
  quantitiyItems: 0,
  addProduct: (product: IGetProducts) => {
    set((state) => ({
        checkoutProducts: [...state.checkoutProducts, product],
    }));
  },
  removeProduct: (id) => {
    set((state) => ({
        checkoutProducts: state.checkoutProducts.filter((checkoutProducts) => checkoutProducts.id !== id),
    }));
  },
  addQuantity: () => set((state) => ({ quantitiyItems: state.quantitiyItems + 1 })),
}));
