import * as yup from "yup";

export const schemaLogin = yup.object().shape({
    email: yup.string().required("O campo e-mail é obrigatório").email("E-mail inválido"),
    password: yup.string().required("O campo senha é obrigatório")
});
