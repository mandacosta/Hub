import React, { useContext } from "react";
import { Header } from "../components/header";
import { ModalEditTech } from "./ModalEditTech/modalEditTech";
import { ModalNewTech } from "./ModalNewTech/modalNewTech";
import { StyledMain, StyledSection } from "./style";
import { TechList } from "./TechList/techList";
import { AuthContext } from "../../contexts/AuthContext";
import { TechContext } from "../../contexts/TechContext";
import { Loading } from "../components/loading/index";

export const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const { isAddTechActive, setIsAddTechActive, isEditTechActive, loadingTech } =
    useContext(TechContext);

  return (
    <>
      <Loading loading={`${loadingTech}`} />

      <StyledMain>
        {isAddTechActive ? <ModalNewTech /> : <></>}
        {isEditTechActive ? <ModalEditTech /> : <></>}

        <Header user={user?.name} module={user?.course_module}></Header>
        <StyledSection>
          <h3>
            <span className="title two">Tecnologias</span>
            <button
              className="btn-secondary"
              onClick={() => setIsAddTechActive(true)}
            >
              +
            </button>
          </h3>
          <TechList></TechList>
        </StyledSection>
      </StyledMain>
    </>
  );
};
