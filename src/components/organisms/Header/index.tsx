
import MaisTodosLogo from "../../../assets/logo-mais-todos.webp";
import { HeaderStyled } from "./styles";
import IconButton from "../../atoms/IconButton";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/routes.constants";
import Badge from "../../atoms/Badge";
import { useCheckoutStore } from "../../../hooks/stores/useCheckout";


export const Header = () => {
  const {  checkoutProducts } = useCheckoutStore();
  const navigate = useNavigate();
  return (
    <HeaderStyled>
      <img onClick={() => navigate(ROUTES.HOME)} src={MaisTodosLogo} alt="Mais Todos Logo" width={150} />

    <div>
      <Badge itemCount={checkoutProducts.length} />
      <IconButton onClick={() => navigate(ROUTES.CHECKOUT)} />
      </div>
    </HeaderStyled>
  );
};
