import React, { FocusEvent, useContext } from "react";
import { createContext, useState } from "react";
import { UserContext } from "../userContext";
import { iPorduct } from "../userContextTypes";
import { iCartContext, iCartProviderProps } from "./types";

export const CartContext = createContext({} as iCartContext);

export const CartProvider = ({ children }: iCartProviderProps) => {
  const { products, setProducts } = useContext(UserContext);

  const [currentSale, setCurrentSale] = useState([] as iPorduct[]);
  const [showModal, setShowModal] = useState(false);
  const [animationModal, setAnimationModal] = useState(false);

  const handleAddToCart = (event: FocusEvent<HTMLInputElement>) => {
    const findProduct = products.find(
      (prod: iPorduct) => prod.id === +event.target.id
    );

    if (
      findProduct &&
      currentSale.find((prod) => prod.id === findProduct?.id) !== undefined
    ) {
      const listFilterCurrencyProduct = currentSale.filter(
        (sale) => sale.id !== findProduct.id
      );
      findProduct?.amount
        ? (findProduct.amount += 1)
        : setCurrentSale([...listFilterCurrencyProduct, findProduct]);
      localStorage.setItem(
        "@CartBurguer",
        JSON.stringify([...listFilterCurrencyProduct, findProduct])
      );
    } else {
      findProduct && setCurrentSale([...currentSale, findProduct]);
      localStorage.setItem(
        "@CartBurguer",
        JSON.stringify([...currentSale, findProduct])
      );
    }
  };

  const handleRemoveToCart = (event: FocusEvent<HTMLInputElement>) => {
    const filterProductRemove = currentSale.filter((prod: iPorduct) => {
      return prod.id !== +event.target.id;
    });
    setCurrentSale(filterProductRemove);
    const findProduct = currentSale.find(
      (prod: iPorduct) => prod.id === +event.target.id
    );

    if (findProduct?.amount && findProduct.amount > 1) {
      findProduct.amount = 1;
      const listFilterCurrencyProduct = products.filter(
        (sale) => sale !== findProduct
      );
      setProducts([...listFilterCurrencyProduct, findProduct]);
    }

    localStorage.setItem("@CartBurguer", JSON.stringify(filterProductRemove));
  };

  const handleAddAmount = (event: FocusEvent<HTMLInputElement>) => {
    const findProduct = products.find((prod) => prod.id === +event.target.id);
    if (findProduct && currentSale.includes(findProduct)) {
      const listFilterCurrencyProduct = currentSale.filter(
        (sale) => sale.id !== findProduct.id
      );
      findProduct?.amount && findProduct.amount++;
      setCurrentSale([...listFilterCurrencyProduct, findProduct]);
      localStorage.setItem(
        "@CartBurguer",
        JSON.stringify([...listFilterCurrencyProduct, findProduct])
      );
    }
  };

  const handleRemoveAmount = (event: FocusEvent<HTMLInputElement>) => {
    const findProduct = currentSale.find(
      (prod: iPorduct) => prod.id === +event.target.id
    );

    if (findProduct?.amount && findProduct.amount > 1) {
      findProduct.amount -= 1;
      const listFilterCurrencyProduct = currentSale.filter(
        (sale) => sale !== findProduct
      );
      setCurrentSale([...listFilterCurrencyProduct, findProduct]);
      localStorage.setItem(
        "@CartBurguer",
        JSON.stringify([...listFilterCurrencyProduct, findProduct])
      );
    } else {
      const filterProductRemove = currentSale.filter((prod: iPorduct) => {
        return prod.id !== +event.target.id;
      });
      setCurrentSale(filterProductRemove);
      localStorage.setItem("@CartBurguer", JSON.stringify(filterProductRemove));
    }
  };

  const handleRemoveAllToCart = () => {
    products.map((prod) => (prod.amount = 1));
    setCurrentSale([]);
  };

  const handleShowModal = () => {
    setShowModal(true);
    setAnimationModal(true);
  };

  const handleNoneModal = () => {
    setAnimationModal(false);
    setTimeout(() => {
      setShowModal(false);
    }, 1500);
  };

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
        animationModal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
