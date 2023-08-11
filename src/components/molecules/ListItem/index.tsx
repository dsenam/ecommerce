import Span from "../../atoms/Span";
import { ListItemStyled } from "./styles";
import { FaTrash } from "react-icons/fa";

interface ListItemProps {
  quantity: number;
  name: string;
  imageSrc: string;
  handleDelete: () => void
  
}

const ListItem = ({ name,  imageSrc, handleDelete, quantity }: ListItemProps) => {
  return (
    <ListItemStyled>
      <div>
        <h2>{name}</h2>
        
        <img src={imageSrc} alt="Imagem do produto" />

        <Span label={`Quantidade: ${quantity}`} />

        
      </div>

      

      <span onClick={handleDelete}>
        <FaTrash />
        </span>
    </ListItemStyled>
  );
};

export default ListItem;
