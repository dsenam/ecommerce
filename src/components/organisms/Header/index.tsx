import { Button } from "../../atoms/Button";
import MaisTodosLogo from "../../../assets/logo-mais-todos.webp";
import { HeaderStyled } from "./styles";
import IconButton from "../../atoms/IconButton";

export const Header = () => (
  <HeaderStyled>
    <img src={MaisTodosLogo} alt="Mais Todos Logo" width={150} />

    <div>
      <>
        <Button primary label="Adicionar Produto" />
        <IconButton onClick={() => {}} />
      </>
    </div>
  </HeaderStyled>
);
