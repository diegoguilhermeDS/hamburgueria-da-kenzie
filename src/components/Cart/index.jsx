import React from "react";
import { useContext } from "react";
import { CartContext } from "../../providers/Cart/cartContext";
import { StyledText } from "../../styles/typography";
import CartEmpty from "../CartEmpty";
import CartProducts from "../CartProducts";
import CartTotal from "../CartTotal";
import { StyledAside } from "./style";

const Cart = () => {
  const { currentSale } = useContext(CartContext);

  return (
    <StyledAside>
      <section>
        <StyledText tag="h3" fontWeight={700} fontSize="3" colorText="white">
          Carrinho de compras
        </StyledText>
      </section>
      <section className="containerListCart">
        <ul>
          {currentSale.length > 0 ? (
            currentSale
              .sort((a, b) => (a.name > b.name ? 1 : -1))
              .map((product, index) => (
                <CartProducts product={product} key={index} />
              ))
          ) : (
            <CartEmpty />
          )}
        </ul>
        {currentSale.length > 0 && <div className="line"></div>}
        {currentSale.length > 0 && <CartTotal />}
      </section>
    </StyledAside>
  );
};

export default Cart;
