import React from "react";
import { StyledText } from "../../styles/typography";
import Button from "../Button";
import { StyledTotal } from "./style";

const CartTotal = ({ currentSale, setCurrentSale }) => {
  const valueCart = currentSale.map((sale) => {
    const newSale = sale.price * sale.amount;
    return newSale;
  });
  const valueTotal = valueCart.reduce(
    (oldValue, currencyValue) => oldValue + currencyValue,
    0
  );
  const handleRemoveAllToCart = () => {
    setCurrentSale([]);
  };

  return (
    <StyledTotal>
      <div>
        <StyledText tag="span" fontWeight={600} fontSize="5">
          Total
        </StyledText>
        <StyledText
          tag="span"
          fontWeight={600}
          fontSize="5"
          colorText="grey-50"
        >
          R$ {valueTotal.toFixed(2).replace(".", ",")}
        </StyledText>
      </div>
      <Button
        children={"Remover todos"}
        handle={handleRemoveAllToCart}
        typeColor="default"
      />
    </StyledTotal>
  );
};

export default CartTotal;
