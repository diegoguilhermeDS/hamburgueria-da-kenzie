import React from "react";
import Button from "../Button";

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
    <section>
      <div>
        <span>Total</span>
        <span>R$ {valueTotal.toFixed(2).replace(".", ",")}</span>
      </div>
      <Button children={"Remover todos"} handle={handleRemoveAllToCart} />
    </section>
  );
};

export default CartTotal;
