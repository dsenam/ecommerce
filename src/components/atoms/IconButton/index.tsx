import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IconButtonStyled } from "./style";

interface IconButtonProps {
  onClick: () => void
}

const IconButton = ({ onClick }: IconButtonProps) => {
  return (
    <IconButtonStyled onClick={onClick}>
      <FaShoppingCart />
    </IconButtonStyled>
  );
};

export default IconButton;
