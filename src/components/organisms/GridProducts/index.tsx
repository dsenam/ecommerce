import { useGetProducts } from "../../../hooks/requests/useProduct";
import GridContainer from "../../atoms/GridContainer";
import Spinner from "../../atoms/Spinner";
import ProductCard from "../../molecules/ProductCard";

const GridProducts = () => {
  const { data, isLoading } = useGetProducts();

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
        />
      ))}
    </GridContainer>
  );
};

export default GridProducts;
