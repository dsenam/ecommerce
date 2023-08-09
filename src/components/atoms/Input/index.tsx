import  { DetailedHTMLProps, InputHTMLAttributes } from "react";

import { InputStyled } from "./style";

const Input = ({
  ...rest
}: DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) => {
  return <InputStyled {...rest} />;
};

export default Input;
