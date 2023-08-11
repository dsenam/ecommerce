import { Button } from "../../components/atoms/Button";
import List from "../../components/atoms/List";
import Span from "../../components/atoms/Span";
import ListItem from "../../components/molecules/ListItem";
import { Layout } from "../../components/organisms/Layout";
import { useCheckoutStore } from "../../hooks/stores/useCheckout";

export const Checkout = () => {
    const {checkoutProducts, removeProduct} = useCheckoutStore()
  return (
    <Layout title="Checkout">
      <List>
      {checkoutProducts ? checkoutProducts.map((product) => (
        <ListItem handleDelete={() => removeProduct(product.id)} imageSrc={product.data.imageSrc} key={product.id} quantity={product.quantity} name={product.data.title}/>
      )) : <Span label="Não há produtos no seu carrinho" />}
      </List>

      <Button primary label="Finalizar Compra"/>
    </Layout>
  );
};
