import { useContext } from "react";
import { UserContext } from "../../providers/userContext";
import Button from "../Button";
import { StyledInputContainer } from "./style";

const InputSearch = () => {
  const { handleSearchProduct } = useContext(UserContext);

  return (
    <StyledInputContainer className="inputSearch">
      <input
        type="text"
        onChange={handleSearchProduct}
        placeholder="Digitar Pesquisa"
      />
      <Button children={"Pesquisar"} type={"medium"} />
    </StyledInputContainer>
  );
};

export default InputSearch;
