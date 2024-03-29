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
  amount?: number | undefined;
}

export interface iUserContext {
  products: iPorduct[];
  filteredProducts: iPorduct[];
  handleSearchProduct: (event: any) => void;
  setProducts: React.Dispatch<React.SetStateAction<iPorduct[]>>;
  handleLogin: (data: iDataLogin) => void;
  handleRegister: (data: iDataRegister) => void;
  loadingBtn: boolean;
  loadingPage: boolean;
}

export interface iDataLogin {
  email: string;
  password: string;
}

export interface iDataRegister {
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
}
