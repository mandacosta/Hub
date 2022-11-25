import React, { useState, useContext, useEffect, ReactNode } from "react";
import { createContext } from "react";
import { AuthContext } from "./AuthContext";
import { toast } from "react-toastify";
import {
  iTechData,
  iTechResponse,
  apiRegisterNewTech,
} from "../services/techServices/newTech";
import { iDataError } from "../services/interfaceAxiosError";
import { apiEditTech } from "../services/techServices/editTech";
import { apiDeleteTech } from "../services/techServices/deleteTech";
import axios from "axios";

interface iTechProviderProps {
  children: ReactNode;
}

interface iTechContext {
  techList: iTechResponse[];
  setTechList: React.Dispatch<React.SetStateAction<iTechResponse[]>>;
  selectedTech: iTechResponse | null;
  setSelectedTech: React.Dispatch<React.SetStateAction<iTechResponse | null>>;
  isAddTechActive: boolean;
  setIsAddTechActive: React.Dispatch<React.SetStateAction<boolean>>;
  isEditTechActive: boolean;
  setIsEditTechActive: React.Dispatch<React.SetStateAction<boolean>>;
  registerNewTech: (data: iTechData) => Promise<void>;
  editTech: (id: string, data: iTechData) => Promise<void>;
  deleteTech: (id: string) => Promise<void>;
  loadingTech: boolean;
}

export const TechContext = createContext<iTechContext>({} as iTechContext);

export const TechProvider = ({ children }: iTechProviderProps) => {
  const [isAddTechActive, setIsAddTechActive] = useState(false);
  const [isEditTechActive, setIsEditTechActive] = useState(false);
  const [loadingTech, setLoadingTech] = useState(false);
  const [techList, setTechList] = useState<iTechResponse[]>([]);
  const [selectedTech, setSelectedTech] = useState<iTechResponse | null>(null);
  const { user, toastStyle } = useContext(AuthContext);

  useEffect(() => {
    user ? setTechList(user.techs) : setTechList([]);
  }, [user]);

  async function registerNewTech(data: iTechData) {
    setIsAddTechActive(false);
    setLoadingTech(true);
    try {
      const newTech = await apiRegisterNewTech(data);

      setTechList((previousList) => {
        return [...previousList, newTech];
      });

      toast.success("Tecnologia cadastrada", toastStyle);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const { message }: iDataError = error.response?.data;
        toast.error(`Algo deu errado: ${message}`, toastStyle);
      }
    } finally {
      setLoadingTech(false);
    }
  }

  async function editTech(id: string, data: iTechData) {
    const token = localStorage.getItem("@kenzieHub: token");

    setIsEditTechActive(false);
    setLoadingTech(true);
    try {
      await apiEditTech({ id, data, token });

      setTechList((previousList) => {
        const modifiedList = previousList.map((tech) => {
          if (tech.id === id) {
            return { ...tech, status: data.status };
          } else {
            return tech;
          }
        });

        return modifiedList;
      });

      toast.success(`${selectedTech?.title}: status atualizado !`, toastStyle);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const { message }: iDataError = error.response?.data;
        toast.error(`Algo deu errado: ${message}`, toastStyle);
      }
    } finally {
      setLoadingTech(false);
    }
  }

  async function deleteTech(id: string) {
    const token = localStorage.getItem("@kenzieHub: token");
    setIsEditTechActive(false);
    setLoadingTech(true);

    const newTechList = techList.filter((tech) => {
      return tech.id !== id;
    });

    try {
      await apiDeleteTech({ id, token });

      setTechList(newTechList);

      toast.success("Tecnologia removida", toastStyle);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const { message }: iDataError = error.response?.data;
        toast.error(`Algo deu errado: ${message}`, toastStyle);
      }
    } finally {
      setLoadingTech(false);
    }
  }

  const globalValues: iTechContext = {
    techList: techList,
    setTechList: setTechList,
    selectedTech: selectedTech,
    setSelectedTech: setSelectedTech,
    isAddTechActive: isAddTechActive,
    setIsAddTechActive: setIsAddTechActive,
    isEditTechActive: isEditTechActive,
    setIsEditTechActive: setIsEditTechActive,
    registerNewTech: registerNewTech,
    editTech: editTech,
    deleteTech: deleteTech,
    loadingTech: loadingTech,
  };

  return (
    <TechContext.Provider value={globalValues}>{children}</TechContext.Provider>
  );
};
