export interface iError {
  name: string;
  response: iReponseError;
}

interface iReponseError {
  data: iDataError;
  status: number;
}

export interface iDataError {
  message: string;
}
