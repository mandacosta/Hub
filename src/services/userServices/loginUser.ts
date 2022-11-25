import { axiosRequest } from "../api";

export interface iDataLogin {
  email: string;
  password: string;
}

interface iTechs {
  id: string;
  title: string;
  status: string;
}

interface iWorks {
  id: string;
  title: string;
  description: string;
  deploy_url: string;
}

export interface iUserLogin {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  techs: iTechs[];
  works: iWorks[];
}

interface iLoginResponse {
  user: iUserLogin;
  token: string;
}

export async function apiLoginUser(
  dataLogin: iDataLogin
): Promise<iLoginResponse> {
  const { data } = await axiosRequest.post<iLoginResponse>(
    `/sessions`,
    dataLogin
  );
  return data;
}
