import React from "react";
import { ContainerHeader } from "../../styles/Container";
import InputSearch from "../InputSearch";
import Logo from "../Logo";
import { StyledHeader } from "./style";

const Header = ({ setFilteredProducts, products }) => {
  return (
    <StyledHeader className="header">
      <ContainerHeader>
        <Logo />
        <InputSearch
          setFilteredProducts={setFilteredProducts}
          products={products}
        />
      </ContainerHeader>
    </StyledHeader>
  );
};

export default Header;
