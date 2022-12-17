import React from "react";
import { useContext } from "react";
import { CartContext } from "../../providers/Cart/cartContext";
import { StyledText } from "../../styles/typography";
import { StyledCartProduct } from "./style";
import { iPorduct } from "../../providers/userContextTypes";

const trash: string = require("../../assets/img/trash.png")

interface iCartProductsProps {
  product: iPorduct,
}

const CartProducts = ({ product }: iCartProductsProps) => {
  const { name, id, img, amount } = product;
  const { handleRemoveToCart, handleAddAmount, handleRemoveAmount } = useContext(CartContext);

  return (
    <StyledCartProduct id={id + ""}>
      <div className="containerProduct">
        <div className="containerImageProduct">
          <img src={img} alt={`imagem do ${name}`} />
        </div>
        <div className="infoProduct">
          <StyledText tag="h3" fontWeight={700} fontSize="3">
            {name}
          </StyledText>
          <div className="containerAmount">
            <button className="btnAmount" id={id + ""} onClick={handleRemoveAmount}>-</button>
            <div className="containerSpanAmount">
              <StyledText tag="span" fontSize="6" colorText="grey-50">
                {amount}
              </StyledText>
            </div>
            <button className="btnAmount" id={id + ""} onClick={handleAddAmount}>+</button>
          </div>
        </div>
      </div>
      <div className="containerButtoRemove">
        <button className="btnTrash" id={id + ""} onClick={handleRemoveToCart}>
          <img src={trash} alt="icone da lixeira" id={id + ""} />
        </button>
      </div>
    </StyledCartProduct>
  );
};

export default CartProducts;
