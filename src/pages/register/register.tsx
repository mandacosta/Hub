import { Link } from "react-router-dom";
import { StyledMainContainer } from "../../styles/login_register_main";
import { StyledSection } from "./style";
import { useForm } from "react-hook-form";
import { registerSchema } from "../../validations/validations";
import { yupResolver } from "@hookform/resolvers/yup";
import { Loading } from "../components/loading";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

interface iUserRegister {
  name: string;
  email: string;
  password: string;
  password_conf?: string;
  bio: string;
  contact: string;
  course_module: string;
}

export const Register = () => {
  const { registerUser, loading } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<iUserRegister>({
    mode: "onChange",
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (rawData: iUserRegister) => {
    const { name, email, password, bio, contact, course_module } = rawData;

    const registerData = {
      name: name,
      email: email,
      password: password,
      bio: bio,
      contact: contact,
      course_module: course_module,
    };

    registerUser(registerData);
  };

  return (
    <StyledMainContainer>
      <Loading loading={`${loading}`} />
      <StyledSection>
        <div>
          <h1 className="title">Kenzie Hub</h1>
          <Link to={"/"} className="btn-secondary headline bold">
            Voltar
          </Link>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h2 className="title one">Crie sua conta</h2>
            <span className="headline">Rápido e grátis, vamos nessa</span>
          </div>
          <label className="headline bold" htmlFor="name">
            <span>Nome</span>{" "}
            <span>{errors.name ? `${errors.name.message}` : ``}</span>
          </label>
          <input
            className="input_default"
            id="name"
            type="text"
            placeholder="Digite aqui seu nome..."
            {...register("name")}
          />

          <label className="headline bold" htmlFor="email">
            <span>Email</span>{" "}
            <span>{errors.email ? `${errors.email.message}` : ``}</span>
          </label>
          <input
            className="input_default"
            id="email"
            placeholder="Digite seu email..."
            {...register("email")}
          />

          <label className="headline bold" htmlFor="password">
            <span>Senha</span>{" "}
            <span>{errors.password ? `${errors.password.message}` : ``}</span>
          </label>
          <input
            className="input_default"
            id="password"
            type="password"
            placeholder="Digite aqui sua senha..."
            {...register("password")}
          />

          <label className="headline bold" htmlFor="password_conf">
            <span>Confirmar senha</span>{" "}
            <span>
              {errors.password_conf ? `${errors.password_conf.message}` : ``}
            </span>
          </label>
          <input
            className="input_default"
            id="password_conf"
            type="password"
            placeholder="Digite novamente sua senha..."
            {...register("password_conf")}
          />

          <label className="headline bold" htmlFor="bio">
            <span>Bio</span>{" "}
            <span>{errors.bio ? `${errors.bio.message}` : ``}</span>
          </label>
          <input
            className="input_default"
            id="bio"
            type="text"
            placeholder="Fale sobre você..."
            {...register("bio")}
          />

          <label className="headline bold" htmlFor="contact">
            <span>Contato</span>{" "}
            <span>{errors.contact ? `${errors.contact.message}` : ``}</span>
          </label>
          <input
            className="input_default"
            id="contact"
            type="text"
            placeholder="Opção de contato"
            {...register("contact")}
          />

          <label className="headline bold" htmlFor="modulo">
            <span>Selecione o módulo</span>
          </label>
          <select
            className="input_default"
            id="modulo"
            {...register("course_module")}
          >
            <option value="Front-end: M1">Front-end: M1</option>
            <option value="Front-end: M2">Front-end: M2</option>
            <option value="Front-end: M3">Front-end: M3</option>
            <option value="Back-end: M4">Back-end: M4</option>
            <option value="Back-end: M5">Back-end: M5</option>
            <option value="FullStack: M6">FullStack: M6</option>
          </select>
          <button
            className="btn primary title three"
            type="submit"
            disabled={!isDirty || !isValid}
          >
            Cadastrar
          </button>
        </form>
      </StyledSection>
    </StyledMainContainer>
  );
};
