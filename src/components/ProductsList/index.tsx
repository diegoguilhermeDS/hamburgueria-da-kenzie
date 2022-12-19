import React from "react";
import { useContext } from "react";
import { UserContext } from "../../providers/userContext";
import Products from "../Products";
import { StyledProductsList } from "./style";

const ProductsList = () => {
  const { filteredProducts } = useContext(UserContext);

  return (
    <StyledProductsList>
      {filteredProducts.map((product) => (
        <Products product={product} key={product.name} />
      ))}
    </StyledProductsList>
  );
};

export default ProductsList;
