import { axiosRequest } from "../api";

export interface iDataRegister {
  email: string;
  password: string;
  name: string;
  bio: string;
  contact: string;
  course_module: string;
}

export async function apiRegisterUser(dataRegister: iDataRegister) {
  await axiosRequest.post(`/users`, dataRegister);
}
