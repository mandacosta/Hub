import React, { useContext } from "react";
import { StyledMainContainer } from "../../styles/login_register_main";
import { StyledSection } from "./style";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Loading } from "../components/loading";
import { loginSchema } from "../../validations/validations";
import { AuthContext } from "../../contexts/AuthContext";

interface iUserLogin {
  email: string;
  password: string;
}

export const Login = () => {
  const { loading, loginUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm<iUserLogin>({
    mode: "onChange",
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (rawData: iUserLogin) => {
    loginUser(rawData);
  };

  return (
    <StyledMainContainer>
      <Loading loading={`${loading}`} />
      <StyledSection>
        <h1 className="title">Kenzie Hub</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="title two">Login</h2>
          <label className="headline bold" htmlFor="email">
            Email
          </label>
          <input
            className="input_default"
            id="email"
            type="email"
            placeholder="Digite seu email..."
            {...register("email")}
          />
          <label className="headline bold" htmlFor="password">
            Senha
          </label>
          <input
            className="input_default"
            id="password"
            type="password"
            placeholder="Digite sua senha..."
            {...register("password")}
          />
          <button
            type="submit"
            className="btn primary title three"
            disabled={!isDirty || !isValid}
          >
            Entrar
          </button>
          <div>
            <span className="headline">Ainda não possui uma conta?</span>
            <Link to={"/register"} className="btn tertiary headline">
              Cadastre-se
            </Link>
          </div>
        </form>
      </StyledSection>
    </StyledMainContainer>
  );
};
