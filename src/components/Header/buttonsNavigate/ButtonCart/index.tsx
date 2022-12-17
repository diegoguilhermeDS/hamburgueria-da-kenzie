import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../../../../providers/Cart/cartContext";
import { StyledButtonCart } from "./style";

const ButtonCart = () => {
  const { currentSale, handleShowModal } = useContext(CartContext);
  
  return (
    <StyledButtonCart onClick={handleShowModal}>
      <FaShoppingCart />
      <span>{currentSale.length}</span>
    </StyledButtonCart>
  );
};

export default ButtonCart;
