import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required("Obrigatório")
    .min(3, "O nome deve ter no mínimo 3 letras"),
  email: yup
    .string()
    .required("Obrigatório")
    .email("Deve ser um e-mail válido"),
  password: yup
    .string()
    .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
    .matches(/[a-z]/, "Deve conter ao menos 1 letra minúscula")
    .matches(/[(\d)]/, "Deve conter ao menos 1 número")
    .matches(/[!@#$%*()~^]/, "Deve conter ao menos 1 caracter especial")
    .min(8, "Deve ter no mínimo 8 caracteres")
    .max(16, "Deve ter no máximo 16 caractéres"),
  password_conf: yup
    .string()
    .oneOf([yup.ref("password")], "As senhas não são iguais"),
  bio: yup.string().min(10, "A bio deve ter no mínimo 10 caracteres"),
  contact: yup.string().min(5, "Deve ter no mínimo 5 caracteres"),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required("Obrigatório")
    .email("Deve ser um e-mail válido"),
  password: yup.string().min(8, "Deve ter no mínimo 8 caracteres"),
});

export const newTechSchema = yup.object().shape({
  title: yup
    .string()
    .required("Obrigatório")
    .min(3, "Deve ter no mínimo 3 caracteres"),
  status: yup.string().required("Obrigatório"),
});
