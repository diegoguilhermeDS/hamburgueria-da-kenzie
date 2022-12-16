import { useContext } from "react";
import { createContext, useState } from "react";

const SearchContext = createContext({});

export const SearchProvider = ({ children }) => {
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