import React from "react";
import { ContainerHeader } from "../../styles/Container";
import InputSearch from "../InputSearch";
import Logo from "../Logo";
import { StyledHeader } from "./style";

const Header = () => {
  return (
    <StyledHeader className="header">
      <ContainerHeader>
        <Logo />
        <InputSearch />
      </ContainerHeader>
    </StyledHeader>
  );
};

export default Header;
