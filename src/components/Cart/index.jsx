import React from "react";
import { StyledText } from "../../styles/typography";
import CartEmpty from "../CartEmpty";
import CartProducts from "../CartProducts";
import CartTotal from "../CartTotal";
import { StyledAside } from "./style";

const Cart = ({ currentSale, setCurrentSale }) => {
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
                <CartProducts
                  product={product}
                  currentSale={currentSale}
                  setCurrentSale={setCurrentSale}
                  key={index}
                />
              ))
          ) : (
            <CartEmpty />
          )}
        </ul>
        {currentSale.length > 0 && <div className="line"></div>}
        {currentSale.length > 0 && (
          <CartTotal
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
          />
        )}
      </section>
    </StyledAside>
  );
};

export default Cart;
