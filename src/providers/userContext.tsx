import { AxiosError } from "axios";
import { FocusEvent, useEffect, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { notify } from "../components/Toast";
import { api } from "../services/api";
import { getProducts } from "../services/getProducts";
import { login } from "../services/login";
import { register } from "../services/register";
import { CartProvider } from "./Cart/cartContext";
import { SearchProvider } from "./SearchContext";
import {
  iDataLogin,
  iDataRegister,
  iPorduct,
  iUserContext,
  iUserProviderProps,
} from "./userContextTypes";

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iUserProviderProps) => {
  const [products, setProducts] = useState([] as iPorduct[]);
  const [filteredProducts, setFilteredProducts] = useState([] as iPorduct[]);
  const [loadingBtn, setLoadingBtn] = useState(false);
  const [loadingPage, setLoadingPage] = useState(true);

  useEffect(() => {
    async function load() {
      const token = localStorage.getItem("@TokenBurguer");

      if (token) {
        try {
          api.defaults.headers.common.authorization = `Bearer ${token}`;
          const products = await getProducts();
          setProducts(products);
          const newProduct = [...(products as iPorduct[])];
          newProduct.map((prod) => (prod.amount = 1));
          setFilteredProducts(newProduct);
        } catch (error) {
          localStorage.removeItem("@TokenBurguer");
        }
      }

      setLoadingPage(false);
    }

    load();
  }, []);

  const navigate = useNavigate();
  const handleLogin = async (data: iDataLogin) => {
    try {
      setLoadingBtn(true);
      const response = await login(data);

      notify("Login efetuado com sucesso", "sucess");

      api.defaults.headers.common.authorization = `Bearer ${response.accessToken}`;
      localStorage.setItem("@TokenBurguer", response.accessToken);

      const products = await getProducts();
      setProducts(products);
      const newProduct = [...(products as iPorduct[])];
      newProduct.map((prod) => (prod.amount = 1));
      setFilteredProducts(newProduct);

      navigate("/home");
    } catch (error) {
      const errorCurrency = error as AxiosError<string>;
      notify(
        `${
          errorCurrency.response?.data === "Incorrect password"
            ? "Senha incorreta"
            : "Não foi possível encontrar o usuário"
        }`,
        "error"
      );
    } finally {
      setLoadingBtn(false);
    }
  };

  const handleRegister = async (data: iDataRegister) => {
    try {
      setLoadingBtn(true);

      delete data.confirmPassword;
      const response = await register(data);
      if (response) {
        notify("Cadastro efetuado com sucesso", "sucess");
        navigate("/");
      }
    } catch (error) {
      notify("E-mail já existe", "error");
    } finally {
      setLoadingBtn(false);
    }
  };

  const handleSearchProduct = (event: FocusEvent<HTMLInputElement>) => {
    const findProduct = event.target.value;
    const filterProducts = products.filter((product: iPorduct) =>
      product.name.toLowerCase().includes(findProduct.toLowerCase())
    );
    setFilteredProducts(filterProducts);
  };

  return (
    <UserContext.Provider
      value={{
        products,
        filteredProducts,
        handleSearchProduct,
        setProducts,
        handleLogin,
        handleRegister,
        loadingBtn,
        loadingPage,
      }}
    >
      <CartProvider>
        <SearchProvider>{children}</SearchProvider>
      </CartProvider>
    </UserContext.Provider>
  );
};
