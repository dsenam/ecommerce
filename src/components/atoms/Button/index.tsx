import { ButtonStyled } from "./style";

interface ButtonProps {
  primary?: boolean;
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit'
  disabled?: boolean

}

const Button = ({
  primary = false,
  label,
  type= 'button',
  disabled,
  ...props
  
}: ButtonProps) => {
  return (
    <ButtonStyled disabled={disabled} $primary={primary} type={type} {...props}>
      {label}
    </ButtonStyled>
  );
};

export default Button
