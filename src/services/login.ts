import { iDataLogin } from "../providers/userContextTypes"
import { api } from "./api"

interface iRoot {
    accessToken: string
    user: iUser
  }
  
export interface iUser {
    email: string
    name: string
    id: number
  }

export const login = async (body: iDataLogin) => {
    const {data} = await api.post<iRoot>("/login", body)

    return data
}