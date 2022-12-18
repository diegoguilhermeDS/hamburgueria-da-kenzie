import { api } from "./api";

interface iRoot {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export const getProducts = async () => {
  const { data } = await api.get<iRoot[]>("/products");

  return data;
};
