import { ButtonStyled } from "./style";

interface ButtonProps {
  primary?: boolean;
  label: string;
  onClick?: () => void;
}

export const Button = ({
  primary = false,
  label,
  ...props
}: ButtonProps) => {
  return (
    <ButtonStyled $primary={primary} type="button"  {...props}>
      {label}
    </ButtonStyled>
  );
};
