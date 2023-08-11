import { create } from "zustand";
import { IGetProducts } from "../requests/useProduct";

interface CheckoutState {
  checkoutProducts: CkeckoutProduct[];
  addProduct: (product: IGetProducts) => void;
  removeProduct: (id: string) => void;
}

interface CkeckoutProduct extends IGetProducts {
  quantity: number
}

export const useCheckoutStore = create<CheckoutState>((set) => ({
  checkoutProducts: [],

  addProduct: (product: IGetProducts) => {
    set((state) => {
      const existingProductIndex = state.checkoutProducts.findIndex(
        (item) => item.id === product.id
      );
  
      if (existingProductIndex !== -1) {
        // Produto já está no carrinho, incrementar quantidade
        const updatedProducts = [...state.checkoutProducts];
        updatedProducts[existingProductIndex].quantity += 1;
        return {
          checkoutProducts: updatedProducts,
        };
      } else {
        // Produto não está no carrinho, adicionar normalmente
        return {
          checkoutProducts: [...state.checkoutProducts, { ...product, quantity: 1 }],
        };
      }
    });
  },
  removeProduct: (id) => {
    set((state) => ({
      checkoutProducts: state.checkoutProducts.filter(
        (checkoutProducts) => checkoutProducts.id !== id
      ),
    }));
  },
}));
