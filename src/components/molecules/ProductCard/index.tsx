import { ContainerProductStyled } from "./styles";
import Span from "../../atoms/Span";
import Button  from "../../atoms/Button";


interface ProductCardProps {
  imageSrc: string;
  title: string;
  price: string;
  handleProduct: () => void
}

const ProductCard = ({ imageSrc, title, price, handleProduct }: ProductCardProps) => {
 
  return (
    <ContainerProductStyled>
      <img src={imageSrc} alt={title} />
      <h3>{title}</h3>
      <Span label={price} />
      <div>
        <Button
          primary
          label="Adicionar ao carrinho"
          onClick={handleProduct}
        />
      </div>
    </ContainerProductStyled>
  );
};

export default ProductCard;
