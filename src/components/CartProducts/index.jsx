import React from "react";
import Button from "../Button";

const CartProducts = ({ product, currentSale, setCurrentSale }) => {
  const { name, category, id, img, amount } = product;

  const handleRemoveToCart = (event) => {
    const findProduct = currentSale.find(
      (prod) => prod.id === +event.target.id
    );

    if (findProduct.amount > 1) {
      findProduct.amount -= 1;
    } else {
      const filterProductRemove = currentSale.filter((prod) => {
        return prod.id !== +event.target.id;
      });
      setCurrentSale(filterProductRemove);
    }

    console.log(findProduct.amount);
  };

  return (
    <li id={id}>
      <div>
        <img src={img} alt={`imagem do ${name}`} />
        <div>
          <h4>{name}</h4>
          <span>{category}</span>
        </div>
      </div>
      <div>
        <Button id={id} handle={handleRemoveToCart}>
          Remover
        </Button>
        {/* {amount > 1 ? <span>{amount}x</span> : <></>} */}
        <span>{amount}x</span>
      </div>
    </li>
  );
};

export default CartProducts;
