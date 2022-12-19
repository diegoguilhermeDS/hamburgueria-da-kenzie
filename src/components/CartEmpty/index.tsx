import React from "react";
import { StyledText } from "../../styles/typography";
import { StyleCartEmpty } from "./style";

const CartEmpty = () => {
  return (
    <StyleCartEmpty>
      <StyledText tag="h3" fontWeight={700} fontSize="3">
        Sua sacola está vazia
      </StyledText>
      <StyledText tag="span" fontSize="5" colorText="grey-50">
        Adicione itens
      </StyledText>
    </StyleCartEmpty>
  );
};

export default CartEmpty;
