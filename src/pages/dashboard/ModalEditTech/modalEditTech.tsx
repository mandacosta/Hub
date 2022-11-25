import React, { useContext } from "react";
import { TechContext } from "../../../contexts/TechContext";
import { StyledModal } from "./styleModalEditTech";
import { useForm } from "react-hook-form";
import { iTechResponse } from "../../../services/techServices/newTech";

export const ModalEditTech = () => {
  const { setIsEditTechActive, selectedTech, editTech, deleteTech } =
    useContext(TechContext);

  const { register, handleSubmit } = useForm<iTechResponse>();

  function onSubmit(data: iTechResponse) {
    if (selectedTech) {
      const { id } = selectedTech;
      editTech(id, data);
    }
  }

  function onClickDelete() {
    if (selectedTech) {
      deleteTech(selectedTech?.id);
    }
  }

  return (
    <StyledModal>
      <section>
        <div>
          <span className="headline bold">Tecnologias Detalhes</span>
          <button onClick={() => setIsEditTechActive(false)}>x</button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="headline" htmlFor="">
            Nome do projeto
          </label>
          <input
            className="input_default"
            type="text"
            value={selectedTech?.title}
            disabled
          />
          <label className="headline" htmlFor="">
            Status
          </label>
          <select className="input_default" {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <div className="div-btn">
            <button type="submit" className="btn primary headline bold">
              Salvar Alterações
            </button>
            <p
              className="btn tertiary headline bold"
              onClick={() => onClickDelete()}
            >
              Excluir
            </p>
          </div>
        </form>
      </section>
    </StyledModal>
  );
};
