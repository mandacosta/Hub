import React, { useContext } from "react";
import { StyledList } from "./styleTechList";
import trashBin from "./trashbin.svg";
import { TechContext } from "../../../contexts/TechContext";
import { iTechResponse } from "../../../services/techServices/newTech";

export const TechList = () => {
  const { techList, setSelectedTech, setIsEditTechActive, deleteTech } =
    useContext(TechContext);

  function handleOpenEditTechModal(tech: iTechResponse) {
    setIsEditTechActive(true);
    setSelectedTech(tech);
  }

  return (
    <StyledList>
      {techList.map((tech) => {
        return (
          <li key={tech.id}>
            <span
              className="title three"
              onClick={() => handleOpenEditTechModal(tech)}
            >
              {tech.title}
            </span>
            <div>
              <span className="headline">{tech.status}</span>
              <button>
                <img
                  src={trashBin}
                  alt="lixeira"
                  onClick={() => deleteTech(tech.id)}
                />
              </button>
            </div>
          </li>
        );
      })}
    </StyledList>
  );
};
