import React from "react";
import Products from "../Products";
import { StyledProductsList } from "./style";

const ProductsList = ({ products, currentSale, setCurrentSale }) => {
  return (
    <StyledProductsList>
      {products.map((product) => (
        <Products
          product={product}
          products={products}
          currentSale={currentSale}
          setCurrentSale={setCurrentSale}
          key={product.name}
        />
      ))}
    </StyledProductsList>
  );
};

export default ProductsList;
