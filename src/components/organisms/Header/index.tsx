import { Button } from "../../atoms/Button";
import MaisTodosLogo from "../../../assets/logo-mais-todos.webp";
import { HeaderStyled } from "./styles";
import IconButton from "../../atoms/IconButton";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/routes.constants";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderStyled>
      <img src={MaisTodosLogo} alt="Mais Todos Logo" width={150} />

      <div>
        <>
          <Button primary label="Criar Produto" />
          <IconButton onClick={() => navigate(ROUTES.CREATE_PRODUCT)} />
        </>
      </div>
    </HeaderStyled>
  );
};
