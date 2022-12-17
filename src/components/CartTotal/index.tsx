import React from "react";
import { useContext } from "react";
import { CartContext } from "../../providers/Cart/cartContext";
import { StyledText } from "../../styles/typography";
import Button from "../Button";
import { StyledTotal } from "./style";

const CartTotal = () => {
  const { currentSale, handleRemoveAllToCart } = useContext(CartContext);

  const valueCart = currentSale.map((sale) => {
    const newSale = sale.amount && sale.price * sale.amount;
    return newSale;
  });
  const valueTotal = valueCart.reduce(
    (oldValue, currencyValue) => oldValue && currencyValue ? oldValue + currencyValue :
    0
  );

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
          R$ {valueTotal?.toFixed(2).replace(".", ",")}
        </StyledText>
      </div>
      <Button
        children={"Remover todos"}
        handle={handleRemoveAllToCart}
        typeColor="default"
        typeBtn={"grey"}
      />
    </StyledTotal>
  );
};

export default CartTotal;
