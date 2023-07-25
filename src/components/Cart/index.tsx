import React from "react";
import { useContext } from "react";
import { CartContext } from "../../providers/Cart/cartContext";
import { StyledText } from "../../styles/typography";
import CartEmpty from "../CartEmpty";
import CartProducts from "../CartProducts";
import CartTotal from "../CartTotal";
import { StyledContainerModalCart, StyledModalCart } from "./style";
import { MdOutlineClose } from "react-icons/md";

const Cart = () => {
  const { currentSale, animationModal, handleNoneModal } =
    useContext(CartContext);

  return (
    <StyledContainerModalCart>
      <StyledModalCart statusModal={animationModal}>
        <section>
          <StyledText tag="h3" fontWeight={700} fontSize="3" colorText="white">
            Carrinho de compras
          </StyledText>
          <button onClick={handleNoneModal}>
            <MdOutlineClose />
          </button>
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
      </StyledModalCart>
    </StyledContainerModalCart>
  );
};

export default Cart;
