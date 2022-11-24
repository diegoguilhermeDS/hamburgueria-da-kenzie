import React from "react";
import CartEmpty from "../CartEmpty";
import CartProducts from "../CartProducts";
import CartTotal from "../CartTotal";

const Cart = ({ currentSale, setCurrentSale }) => {
  return (
    <aside>
      <section>
        <h3>Carrinho de compras</h3>
      </section>
      <section>
        <ul>
          {currentSale.length > 0 ? (
            currentSale.map((product, index) => (
              <CartProducts
                product={product}
                currentSale={currentSale}
                setCurrentSale={setCurrentSale}
                index={index}
                key={index}
              />
            ))
          ) : (
            <CartEmpty />
          )}

          {currentSale.length > 0 && (
            <CartTotal
              currentSale={currentSale}
              setCurrentSale={setCurrentSale}
            />
          )}
        </ul>
      </section>
    </aside>
  );
};

export default Cart;
