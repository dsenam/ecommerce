import  Button  from "../../components/atoms/Button";
import List from "../../components/atoms/List";
import Span from "../../components/atoms/Span";
import ListItem from "../../components/molecules/ListItem";
import { Layout } from "../../components/organisms/Layout";
import { ROUTES } from "../../constants/routes.constants";
import { useCheckoutStore } from "../../hooks/stores/useCheckout";
import {
  formatStripeLineItems,
  getStripe,
} from "../../services/stripe.service";
import { errorToast } from "../../utils/toasts.utils";

export const Checkout = () => {
  const { checkoutProducts, removeProduct } = useCheckoutStore();
  const url = window.location.origin;

  async function handleCheckout() {
    const stripe = await getStripe();
    const lineItems = formatStripeLineItems(checkoutProducts);

    if (stripe) {
      const { error } = await stripe.redirectToCheckout({
        lineItems,
        mode: "payment",
        successUrl: `${url}${ROUTES.PAYMENT_FEEDBACK}?checkout=success`,
        cancelUrl: `${url}${ROUTES.PAYMENT_FEEDBACK}?checkout=error`,
      });

      errorToast(error.message as string);
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
