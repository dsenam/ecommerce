import { IGetProducts, useGetProducts } from "../../../hooks/requests/useProduct";
import { useCheckoutStore } from "../../../hooks/stores/useCheckout";
import GridContainer from "../../atoms/GridContainer";
import Spinner from "../../atoms/Spinner";
import ProductCard from "../../molecules/ProductCard";

const GridProducts = () => {
  const { data, isLoading } = useGetProducts();

  const {  addProduct } = useCheckoutStore();

  const handleCart = (product: IGetProducts) => {
    
    
    addProduct(product);
  };

  if (isLoading) {
    return <Spinner />;
  }

  
  return (
    <GridContainer>
      {data?.map((product) => (
        <ProductCard
          key={product.id}
          imageSrc={product.data.imageSrc}
          title={product.data.title}
          description={product.data.description}
          handleProduct={() => handleCart(product)}
        />
      ))}
    </GridContainer>
  );
};

export default GridProducts;
