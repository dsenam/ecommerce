import "./header.css";
import { Button } from "../../atoms/Button";
import MaisTodosLogo from "../../../assets/logo-mais-todos.webp";
import { HeaderStyled } from "./styles";

export const Header = () => (
  <HeaderStyled>
    <img src={MaisTodosLogo} alt="Mais Todos Logo" width={150} />

    <div>
      <>
        <Button primary label="Adicionar Produto" />
        <Button label="Sign up" />
      </>
    </div>
  </HeaderStyled>
);
