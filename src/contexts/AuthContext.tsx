import React, { ReactNode, useEffect, useState } from "react";
import { createContext } from "react";
import { axiosRequest } from "../services/api";
import { toast, ToastPosition, Theme } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {
  apiLoginUser,
  iUserLogin,
  iDataLogin,
} from "../services/userServices/loginUser";
import {
  apiRegisterUser,
  iDataRegister,
} from "../services/userServices/registerUser";
import { iDataError, iError } from "../services/interfaceAxiosError";
import { authToken } from "../services/userServices/authToken";
import axios from "axios";

interface iAuthContext {
  registerUser: (data: iDataRegister) => Promise<void>;
  loginUser: (data: iDataLogin) => Promise<void>;
  user: iUserLogin | null;
  setUser: React.Dispatch<React.SetStateAction<iUserLogin | null>>;
  loadingAuth: boolean;
  loading: boolean;
  toastStyle: iToast;
}

export interface iToast {
  position: ToastPosition;
  autoClose: number;
  hideProgressBar: boolean;
  closeOnClick: boolean;
  pauseOnHover: boolean;
  draggable: boolean;
  progress: undefined;
  theme: Theme | undefined;
}

interface iAuthProps {
  children: ReactNode;
}

export const AuthContext = createContext<iAuthContext>({} as iAuthContext);

export const AuthProvider = ({ children }: iAuthProps) => {
  const [user, setUser] = useState<iUserLogin | null>(null);
  const [loading, setLoading] = useState(false);
  const [loadingAuth, setLoadingAuth] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@kenzieHub: token");

      if (token) {
        try {
          const userInfo = await authToken(token);

          setUser(userInfo);
        } catch (error) {
          localStorage.removeItem("@kenzieHub: token");
          const err = error as iError;
          console.log(err);
        }
      }
      setLoadingAuth(false);
    }

    loadUser();
  }, []);

  const toastStyle: iToast = {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  };

  async function registerUser(data: iDataRegister) {
    setLoading(true);
    try {
      await apiRegisterUser(data);

      navigate("/");

      toast.success("Cadastro realizado com sucesso!", toastStyle);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const { message }: iDataError = error.response?.data;
        toast.error(`Algo deu errado: ${message}`, toastStyle);
      }
    } finally {
      setLoading(false);
    }
  }

  async function loginUser(data: iDataLogin) {
    setLoading(true);
    try {
      const { user: userResponse, token } = await apiLoginUser(data);

      axiosRequest.defaults.headers.authorization = `Bearer ${token}`;

      setUser(userResponse);

      localStorage.setItem("@kenzieHub: token", token);

      const userName = userResponse.name.split(" ").join("_");
      const module = userResponse.course_module;

      navigate(`/dashboard/${userName}/${module}`, { replace: true });

      toast.success("Login realizado com sucesso!", toastStyle);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const { message }: iDataError = error.response?.data;
        toast.error(`Algo deu errado: ${message}`, toastStyle);
      }
    } finally {
      setLoading(false);
    }
  }

  const globalValues: iAuthContext = {
    registerUser: registerUser,
    loginUser: loginUser,
    user: user,
    setUser: setUser,
    loadingAuth,
    loading,
    toastStyle,
  };

  return (
    <AuthContext.Provider value={globalValues}>{children}</AuthContext.Provider>
  );
};
