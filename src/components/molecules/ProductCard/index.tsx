import { ContainerProductStyled } from "./styles";
import Span from "../../atoms/Span";
import Button  from "../../atoms/Button";
import { Link } from "react-router-dom";


interface ProductCardProps {
  imageSrc: string;
  title: string;
  price: string;
  handleProduct: () => void
  productId: string
}

const ProductCard = ({ imageSrc, title, price, handleProduct,productId }: ProductCardProps) => {
 
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
      <Link to={`edit-product/${productId}`}>Editar produto</Link>
     
    </ContainerProductStyled>
  );
};

export default ProductCard;
