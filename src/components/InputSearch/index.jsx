import Button from "../Button";
import { StyledInputContainer } from "./style";

const InputSearch = ({ setFilteredProducts, products }) => {
  const handleSearchInput = (event) => {
    const search = event.target.value;
    const filterProducts = products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(filterProducts);
  };

  return (
    <StyledInputContainer className="inputSearch">
      <input
        type="text"
        onChange={handleSearchInput}
        placeholder="Digitar Pesquisa"
      />
      <Button children={"Pesquisar"} type={"medium"} />
    </StyledInputContainer>
  );
};

export default InputSearch;
