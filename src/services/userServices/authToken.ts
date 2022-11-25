import { axiosRequest } from "../api";
import { iUserLogin } from "./loginUser";

export async function authToken(token: string): Promise<iUserLogin> {
  axiosRequest.defaults.headers.authorization = `Bearer ${token}`;

  const { data } = await axiosRequest.get<iUserLogin>("/profile");

  return data;
}
