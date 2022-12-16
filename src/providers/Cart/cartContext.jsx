import { useContext } from "react";
import { createContext, useState } from "react";
import { UserContext } from "../userContext";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const { products, setProducts } = useContext(UserContext);
  const [currentSale, setCurrentSale] = useState([]);
  const [showModal, setShowModal] = useState(false)
  const [animationModal, setAnimationModal] = useState(false)

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
    const filterProductRemove = currentSale.filter((prod) => {
      return prod.id !== +event.target.id;
    });
    setCurrentSale(filterProductRemove);
    const findProduct = currentSale.find(
      (prod) => prod.id === +event.target.id
    );

    if (findProduct.amount > 1) {
      findProduct.amount = 1;
      const listFilterCurrencyProduct = products.filter(
        (sale) => sale !== findProduct
      );
      setProducts([...listFilterCurrencyProduct, findProduct]);
    } 
  }

  const handleAddAmount = (event) => {
    const findProduct = products.find((prod) => prod.id === +event.target.id);
    if (currentSale.includes(findProduct)) {
      const listFilterCurrencyProduct = currentSale.filter(
        (sale) => sale !== findProduct
      );
      findProduct.amount += 1;
      setCurrentSale([...listFilterCurrencyProduct, findProduct]);
    }
  }

  const handleRemoveAmount = (event) => {
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

  const handleShowModal = () => {
    setShowModal(true)
    setAnimationModal(true)
  }

  const handleNoneModal = () => {
    setAnimationModal(false)
    setTimeout(() => {
      setShowModal(false)
    }, 1500)
  }

  return (
    <CartContext.Provider
      value={{
        currentSale,
        handleAddToCart,
        handleRemoveToCart,
        handleRemoveAllToCart,
        handleAddAmount,
        handleRemoveAmount,
        showModal,
        handleShowModal,
        handleNoneModal,
        animationModal
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
