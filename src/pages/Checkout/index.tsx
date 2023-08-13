import { Button } from "../../components/atoms/Button";
import List from "../../components/atoms/List";
import Span from "../../components/atoms/Span";
import ListItem from "../../components/molecules/ListItem";
import { Layout } from "../../components/organisms/Layout";
import { useCheckoutStore } from "../../hooks/stores/useCheckout";
import { getStripe } from "../../services/stripe.service";
import { errorToast } from "../../utils/toasts.utils";

export const Checkout = () => {
  const { checkoutProducts, removeProduct } = useCheckoutStore();

  async function handleCheckout() {
    const stripe = await getStripe();
    if(stripe) {
      const { error } = await stripe.redirectToCheckout({
        lineItems: [
          {
            price: "price_1Ne5B6JapstRzgRuflPJwSaX",
            quantity: 1,
          },
        ],
        mode: "payment",
        successUrl: `http://localhost:3000/success`,
        cancelUrl: `http://localhost:3000/cancel`,
        customerEmail: "customer@email.com",
      });
      
      errorToast(error.message as string)
    }
    
  }

  return (
    <Layout title="Checkout">
      <List>
        {checkoutProducts ? (
          checkoutProducts.map((product) => (
            <ListItem
              handleDelete={() => removeProduct(product.id)}
              imageSrc={product.data.imageSrc}
              key={product.id}
              quantity={product.quantity}
              name={product.data.title}
            />
          ))
        ) : (
          <Span label="Não há produtos no seu carrinho" />
        )}
      </List>

      <Button
        onClick={handleCheckout}
        type="submit"
        primary
        label="Finalizar Compra"
      />
    </Layout>
  );

};
