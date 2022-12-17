import React from "react";

export interface iUserProviderProps {
  children: React.ReactNode;
}

export interface iPorduct {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
  amount?: number | undefined
}

export interface iUserContext {
  products: iPorduct[];
  filteredProducts: iPorduct[];
  handleSearchProduct: (event: any) => void;
  setProducts: React.Dispatch<React.SetStateAction<iPorduct[]>>;
}
