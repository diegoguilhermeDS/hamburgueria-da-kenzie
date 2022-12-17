import { useEffect, useState } from "react";
import { createContext } from "react";
import { api } from "../services/api";
import { CartProvider } from "./Cart/cartContext";
import { SearchProvider } from "./SearchContext";
import { iPorduct, iUserContext, iUserProviderProps } from "./userContextTypes";

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iUserProviderProps) => {
  const [products, setProducts] = useState([] as iPorduct[]);
  const [filteredProducts, setFilteredProducts] = useState([] as iPorduct[]);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await api.get("");
        setProducts(response.data);
        response.data.map((dat: iPorduct) => (dat.amount = 1));
        setFilteredProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    getProducts();
  }, []);

  const handleSearchProduct = (event: any) => {
    const findProduct = event.target.value;
    const filterProducts = products.filter((product: iPorduct) =>
      product.name.toLowerCase().includes(findProduct.toLowerCase())
    );
    setFilteredProducts(filterProducts);
  };

  return (
    <UserContext.Provider
      value={{ products, filteredProducts, handleSearchProduct, setProducts }}
    >
      <CartProvider>
        <SearchProvider>{children}</SearchProvider>
      </CartProvider>
    </UserContext.Provider>
  );
};


