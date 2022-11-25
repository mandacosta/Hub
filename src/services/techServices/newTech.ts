import { axiosRequest } from "../api";

export interface iTechData {
  title: string;
  status: string;
}

export interface iTechResponse {
  id: string;
  status: string;
  title: string;
}

export async function apiRegisterNewTech(
  newTechData: iTechData
): Promise<iTechResponse> {
  const { data: newTechResponse } = await axiosRequest.post<iTechResponse>(
    "/users/techs",
    newTechData
  );

  return newTechResponse;
}
