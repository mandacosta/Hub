import React, { useContext } from "react";
import { StyledModal } from "./styleModalNewTech";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { newTechSchema } from "../../../validations/validations";
import { TechContext } from "../../../contexts/TechContext";
import { iTechData } from "../../../services/techServices/newTech";

export const ModalNewTech = () => {
  const { setIsAddTechActive, registerNewTech } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm<iTechData>({
    mode: "onChange",
    resolver: yupResolver(newTechSchema),
  });

  const onSubmit = (rawData: iTechData) => {
    registerNewTech(rawData);
  };

  return (
    <StyledModal>
      <section>
        <div>
          <span className="headline bold">Cadastrar Tecnologia</span>{" "}
          <button onClick={() => setIsAddTechActive(false)}>x</button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="headline" htmlFor="">
            Nome
          </label>
          <input className="input_default" type="text" {...register("title")} />
          <label className="headline" htmlFor="">
            Selecionar status
          </label>
          <select className="input_default" {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <button
            type="submit"
            className="btn primary"
            disabled={!isDirty || !isValid}
          >
            Cadastrar Tecnologia
          </button>
        </form>
      </section>
    </StyledModal>
  );
};
