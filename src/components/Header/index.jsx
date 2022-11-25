import React from "react";
import InputSearch from "../InputSearch";
import Logo from "../Logo";

const Header = ({ setFilteredProducts, products }) => {
  return (
    <header className="header">
      <Logo />
      <InputSearch
        setFilteredProducts={setFilteredProducts}
        products={products}
      />
    </header>
  );
};

export default Header;