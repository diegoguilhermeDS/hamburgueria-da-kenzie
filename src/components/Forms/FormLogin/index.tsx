import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { StyledText } from "../../../styles/typography";
import { schemaLogin } from "../../../validations/schemaLogin";
import Button from "../../Button";
import Input from "../../Inputs/InputBase";
import { StyledFormLogin } from "./style";
import { UserContext } from "../../../providers/userContext";
import { FaSpinner } from "react-icons/fa";
import { iDataLogin } from "../../../providers/userContextTypes";


const FormLogin = () => {
  const {handleLogin, loadingBtn} = useContext(UserContext);

  const { register, handleSubmit, formState: {errors, isDirty, isValid} } = useForm<iDataLogin>({
    mode: "onBlur",
    resolver: yupResolver(schemaLogin),
  });

    
  return (
    <StyledFormLogin onSubmit={handleSubmit(handleLogin)} noValidate={true} autoComplete="off">
      <StyledText tag="h2" fontSize="3" fontWeight={700}>
        Login
      </StyledText>
      <Input
        label="E-mail"
        typeInput="email"
        register={register("email")}
        error={errors?.email && errors.email.message}
      />
      <Input
        label="Senha"
        typeInput="password"
        register={register("password")}
        error={errors?.password && errors.password.message}
      />
      <Button
        children={!loadingBtn ? "Logar" : <FaSpinner />}
        typeBtn="medium"
        type="submit"
        disabled={!isDirty || !isValid}
      />
      <StyledText tag="small" fontSize="6" colorText="grey-50" className="smallInfor">
        Crie sua conta para saborear muitas delícias e matar sua fome!
      </StyledText>
      <Link to={"/register"}>Cadastrar</Link>
    </StyledFormLogin>
  );
};

export default FormLogin;
