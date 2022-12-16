import { useContext } from "react";
import { UserContext } from "../../providers/userContext";
import Button from "../Button";
import { StyledInputContainer } from "./style";
import {FaSearch} from "react-icons/fa"
import { useSearch } from "../../providers/SearchContext";

const InputSearch = () => {
  const { handleSearchProduct } = useContext(UserContext);
  const {displayInput, noneInput} = useSearch()


  return (
    <StyledInputContainer className="inputSearch" display={displayInput}>
      <input
        type="text"
        onChange={handleSearchProduct}
        placeholder="Digitar Pesquisa"
      />
      <Button children={<FaSearch/>} type={"medium"} handle={noneInput}/>
    </StyledInputContainer>
  );
};

export default InputSearch;
