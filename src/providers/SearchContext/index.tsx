import { useContext } from "react";
import { createContext, useState } from "react";
import { iSearchContext, iSearchProviderProps } from "./types";

const SearchContext = createContext({} as iSearchContext);

export const SearchProvider = ({ children }: iSearchProviderProps) => {
  const [displayInput, setDisplayInput] = useState("none");

  const showInput = () => {
    setDisplayInput("flex");
  };

  const noneInput = () => {
    setDisplayInput("none");
  };

  return (
    <SearchContext.Provider value={{ displayInput, showInput, noneInput }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
