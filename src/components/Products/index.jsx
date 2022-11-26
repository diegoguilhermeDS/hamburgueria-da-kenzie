import React from "react";
import { StyledText } from "../../styles/typography";
import Button from "../Button";
import { StyledProduct } from "./style";

const Products = ({ product, currentSale, setCurrentSale, products }) => {
  const { name, category, price, id, img } = product;

  const handleAddToCart = (event) => {
    const findProduct = products.find((prod) => prod.id === +event.target.id);
    if (currentSale.includes(findProduct)) {
      const listFilterCurrencyProduct = currentSale.filter((sale) => sale !== findProduct)
      findProduct.amount += 1;
      setCurrentSale([...listFilterCurrencyProduct, findProduct])
    } else {
      setCurrentSale([...currentSale, findProduct]);
    }
  };

  return (
    <StyledProduct id={id}>
      <img src={img} alt={`imagem do ${name}`} />
      <div>
        <StyledText tag="h2" fontWeight={700} fontSize="3">{name}</StyledText>
        <StyledText tag="span" colorText={"grey-50"} fontSize="6">{category}</StyledText>
        <StyledText tag="span" fontWeight={600} colorText={"brand"} fontSize="5">{`R$ ${price.toFixed(2).replace(".", ",")}`}</StyledText>
        <Button id={id} children={"Adicionar"} handle={handleAddToCart} />
      </div>
    </StyledProduct>
  );
};

export default Products;
