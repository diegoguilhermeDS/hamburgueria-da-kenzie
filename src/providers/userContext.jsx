import { useEffect, useState } from "react";
import { createContext } from "react";
import { api } from "../services/api";
import { CartProvider } from "./Cart/cartContext";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await api.get("");
        setProducts(response.data);
        response.data.map((dat) => (dat.amount = 1));
        setFilteredProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    getProducts();
  }, []);

  const handleSearchProduct = (event) => {
    const findProduct = event.target.value;
    const filterProducts = products.filter((product) =>
      product.name.toLowerCase().includes(findProduct.toLowerCase())
    );
    setFilteredProducts(filterProducts);
  };

  return (
    <UserContext.Provider
      value={{ products, filteredProducts, handleSearchProduct }}
    >
      <CartProvider>{children}</CartProvider>
    </UserContext.Provider>
  );
};

/* export const user = () => useContext(UserContext); */
