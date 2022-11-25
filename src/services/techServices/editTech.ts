import { axiosRequest } from "../api";

export interface iTechData {
  title: string;
  status: string;
}

interface editTechParam {
  id: string;
  data: iTechData;
  token: string | null;
}

export async function apiEditTech({
  id,
  data,
  token,
}: editTechParam): Promise<void> {
  axiosRequest.defaults.headers.authorization = `Bearer ${token}`;
  await axiosRequest.put(`/users/techs/${id}`, data);
}
