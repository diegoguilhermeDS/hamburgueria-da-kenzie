import React from "react";

export interface iSearchProviderProps {
  children: React.ReactNode;
}

export interface iSearchContext {
  displayInput: string,
  showInput: () => void,
  noneInput: () => void,
}
