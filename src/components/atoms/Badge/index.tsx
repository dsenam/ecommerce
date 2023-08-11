import { BadgeContainerStyled } from "./styles";

interface BadgeProps {
  itemCount: number;
}

const Badge = ({ itemCount }: BadgeProps) => {
  return (
    <BadgeContainerStyled>
      <span>{itemCount}</span>
    </BadgeContainerStyled>
  );
};

export default Badge;
