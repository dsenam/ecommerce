import { Stripe, loadStripe } from "@stripe/stripe-js";
import { CheckoutProduct } from "../hooks/stores/useCheckout";

let stripePromise: Promise<Stripe | null>;
export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);
  }
  return stripePromise;
};

export const formatStripeLineItems = (arrProducts: CheckoutProduct[]) => {
  const stripeLineItems = arrProducts.map((product: CheckoutProduct) => {
    const { data, quantity } = product;
    return {
      price: data.stripe_id,
      quantity,
    };
  });

  return stripeLineItems;
};
