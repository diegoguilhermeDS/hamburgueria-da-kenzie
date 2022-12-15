import React from "react";
import { useContext } from "react";
import { CartContext } from "../../providers/Cart/cartContext";
import { StyledText } from "../../styles/typography";
import { StyledCartProduct } from "./style";

const CartProducts = ({ product }) => {
  const { name, category, id, img, amount } = product;
  const {handleRemoveToCart} = useContext(CartContext)

  return (
    <StyledCartProduct id={id}>
      <div className="containerProduct">
        <div className="containerImageProduct">
          <img src={img} alt={`imagem do ${name}`} />
        </div>
        <div className="infoProduct">
          <StyledText tag="h3" fontWeight={700} fontSize="3">
            {name}
          </StyledText>
          <StyledText tag="span" fontSize="6" colorText="grey-50">
            {category}
          </StyledText>
        </div>
      </div>
      <div className="containerButtoRemove">
        <button id={id} onClick={handleRemoveToCart}>
          Remover
        </button>
        {amount > 1 ? (
          <StyledText tag="span" fontSize="6" colorText="grey-50">
            {amount}x
          </StyledText>
        ) : (
          <></>
        )}
      </div>
    </StyledCartProduct>
  );
};

export default CartProducts;
