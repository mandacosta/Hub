import { axiosRequest } from "../api";

interface ideleteTechParam {
  id: string;
  token: string | null;
}

export async function apiDeleteTech({
  id,
  token,
}: ideleteTechParam): Promise<void> {
  axiosRequest.defaults.headers.authorization = `Bearer ${token}`;
  await axiosRequest.delete(`/users/techs/${id}`);
}
