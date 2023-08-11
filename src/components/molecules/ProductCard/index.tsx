import { ContainerProductStyled } from "./styles";
import Span from "../../atoms/Span";
import { Button } from "../../atoms/Button";
import { useCart } from "../../../hooks/stores/useCart";

interface ProductCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const ProductCard = ({ imageSrc, title, description }: ProductCardProps) => {
  const { addToCart } = useCart();
  return (
    <ContainerProductStyled>
      <img src={imageSrc} alt={title} />
      <h3>{title}</h3>
      <Span label={description} />
      <div>
        <Button
          primary
          label="Adicionar ao carrinho"
          onClick={() => addToCart()}
        />
      </div>
    </ContainerProductStyled>
  );
};

export default ProductCard;
