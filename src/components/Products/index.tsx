import React from "react";
import { useContext } from "react";
import { CartContext } from "../../providers/Cart/cartContext";
import { iPorduct } from "../../providers/userContextTypes";
import { StyledText } from "../../styles/typography";
import Button from "../Button";
import { StyledProduct } from "./style";

interface iProductsProps {
  product: iPorduct;
}

const Products = ({ product }: iProductsProps) => {
  const { name, category, price, id, img } = product;
  const { handleAddToCart } = useContext(CartContext);

  return (
    <StyledProduct id={id + ""}>
      <img src={img} alt={`imagem do ${name}`} />
      <div>
        <StyledText tag="h2" fontWeight={700} fontSize="3">
          {name}
        </StyledText>
        <StyledText tag="span" colorText={"grey-50"} fontSize="6">
          {category}
        </StyledText>
        <StyledText
          tag="span"
          fontWeight={600}
          colorText={"brand"}
          fontSize="5"
        >{`R$ ${price.toFixed(2).replace(".", ",")}`}</StyledText>
        <Button id={id + ""} children={"Adicionar"} handle={handleAddToCart} />
      </div>
    </StyledProduct>
  );
};

export default Products;
