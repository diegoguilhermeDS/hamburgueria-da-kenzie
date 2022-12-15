import { useContext } from "react";
import { createContext, useState } from "react";
import { UserContext } from "../userContext";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [currentSale, setCurrentSale] = useState([]);
  const { products } = useContext(UserContext);

  const handleAddToCart = (event) => {
    const findProduct = products.find((prod) => prod.id === +event.target.id);
    if (currentSale.includes(findProduct)) {
      const listFilterCurrencyProduct = currentSale.filter(
        (sale) => sale !== findProduct
      );
      findProduct.amount += 1;
      setCurrentSale([...listFilterCurrencyProduct, findProduct]);
    } else {
      setCurrentSale([...currentSale, findProduct]);
    }
  };

  const handleRemoveToCart = (event) => {
    const findProduct = currentSale.find(
      (prod) => prod.id === +event.target.id
    );

    if (findProduct.amount > 1) {
      findProduct.amount -= 1;
      const listFilterCurrencyProduct = currentSale.filter(
        (sale) => sale !== findProduct
      );
      setCurrentSale([...listFilterCurrencyProduct, findProduct]);
    } else {
      const filterProductRemove = currentSale.filter((prod) => {
        return prod.id !== +event.target.id;
      });
      setCurrentSale(filterProductRemove);
    }
  };

  const handleRemoveAllToCart = () => {
    setCurrentSale([]);
  };

  return (
    <CartContext.Provider
      value={{
        currentSale,
        handleAddToCart,
        handleRemoveToCart,
        handleRemoveAllToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
