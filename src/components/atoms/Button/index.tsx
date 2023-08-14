import { ButtonStyled } from "./style";

interface ButtonProps {
  primary?: boolean;
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit'
}

const Button = ({
  primary = false,
  label,
  type= 'button',
  ...props
}: ButtonProps) => {
  return (
    <ButtonStyled $primary={primary} type={type} {...props}>
      {label}
    </ButtonStyled>
  );
};

export default Button
