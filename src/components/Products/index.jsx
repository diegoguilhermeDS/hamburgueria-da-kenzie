import React from "react";
import Button from "../Button";

const Products = ({ product, currentSale, setCurrentSale, products }) => {
  const { name, category, price, id, img } = product;

  const handleAddToCart = (event) => {
    const findProduct = products.find((prod) => prod.id === +event.target.id);
    if (currentSale.includes(findProduct)) {
      findProduct.amount += 1;
      setCurrentSale(currentSale)
    } else {
      setCurrentSale([...currentSale, findProduct]);
    }
  };

  return (
    <li id={id}>
      <img src={img} alt={`imagem do ${name}`} />
      <div>
        <h3>{name}</h3>
        <small>{category}</small>
        <span>{`R$ ${price.toFixed(2).replace(".", ",")}`}</span>
        <Button id={id} children={"Adicionar"} handle={handleAddToCart} />
      </div>
    </li>
  );
};

export default Products;
