import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledHeader } from "./style";

interface iHeaderProps {
  user: string | undefined;
  module: string | undefined;
}

export const Header = ({ user, module }: iHeaderProps) => {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("@kenzieHub: token");
    navigate("/");
  };
  return (
    <StyledHeader>
      <div className="top">
        <nav>
          <h1 className="title">Kenzie Hub</h1>
          <button onClick={logOut} className="btn-secondary headline bold">
            Sair
          </button>
        </nav>
      </div>
      <div className="bottom">
        <section>
          <h2 className="title one">Olá, {user}</h2>
          <span className="headline">{module}</span>
        </section>
      </div>
    </StyledHeader>
  );
};
