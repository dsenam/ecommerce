import { ContainerProductStyled } from "./styles";
import Span from "../../atoms/Span";
import { Button } from "../../atoms/Button";

interface ProductCardProps {
    imageSrc: string
    title: string
    description: string
}

const ProductCard = ({ imageSrc, title, description }: ProductCardProps) => {
  return (
    <ContainerProductStyled>
      <img src={imageSrc} alt={title}  />
      <h3>{title}</h3>
      <Span label={description} />
      <div>
      <Button primary label="Comprar" onClick={() => alert('Alou')} />
      </div>
    </ContainerProductStyled>
  );
};

export default ProductCard;