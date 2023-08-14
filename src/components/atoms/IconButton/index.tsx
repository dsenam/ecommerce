import { FaShoppingCart } from "react-icons/fa";
import { IconButtonStyled } from "./style";

interface IconButtonProps {
  onClick: () => void;
}

const IconButton = ({ onClick }: IconButtonProps) => {
  
  return (
    <>
      <IconButtonStyled data-testid="icon-button" onClick={onClick}>
        <FaShoppingCart />
      </IconButtonStyled>
    </>
  );
};

export default IconButton;
