import React from "react";
import { ContainerHeader } from "../../styles/Container";
import InputSearch from "../InputSearch";
import Logo from "../Logo";
import ButtonCart from "./buttonsNavigate/ButtonCart";
import ButtonSearch from "./buttonsNavigate/ButtonSearch";
import ButtonSingOut from "./buttonsNavigate/ButtonSingOut";
import { StyledHeader } from "./style";

const Header = () => {
  return (
    <StyledHeader className="header">
      <ContainerHeader>
        <Logo />
        <div className="containerNavigate">
          <InputSearch />
          <ButtonSearch />
          <ButtonCart />
          <ButtonSingOut />
        </div>
      </ContainerHeader>
    </StyledHeader>
  );
};

export default Header;
