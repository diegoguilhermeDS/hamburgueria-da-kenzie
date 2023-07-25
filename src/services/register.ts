import { iDataRegister } from "../providers/userContextTypes";
import { api } from "./api";

interface iRoot {
  accessToken: string;
  user: iUser;
}

export interface iUser {
  email: string;
  name: string;
  id: number;
}

export const register = async (body: iDataRegister) => {
  const { data } = await api.post<iRoot>("/users", body);

  return data;
};
