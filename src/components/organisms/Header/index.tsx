
import MaisTodosLogo from "../../../assets/logo-mais-todos.webp";
import { HeaderStyled } from "./styles";
import IconButton from "../../atoms/IconButton";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/routes.constants";
import Badge from "../../atoms/Badge";
import { useCart } from "../../../hooks/stores/useCart";

export const Header = () => {
  const { items } = useCart();
  const navigate = useNavigate();
  return (
    <HeaderStyled>
      <img src={MaisTodosLogo} alt="Mais Todos Logo" width={150} />

    <div>
      <Badge itemCount={items} />
      <IconButton onClick={() => navigate(ROUTES.CREATE_PRODUCT)} />
      </div>
    </HeaderStyled>
  );
};
