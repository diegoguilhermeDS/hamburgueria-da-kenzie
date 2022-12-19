import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { StyledText } from "../../../styles/typography";
import Button from "../../Button";
import Input from "../../Inputs/InputBase";
import { StyledFormLogin } from "./style";
import { UserContext } from "../../../providers/userContext";
import { FaSpinner } from "react-icons/fa";
import { schemaRegister } from "../../../validations/schemaRegister";
import { iDataRegister } from "../../../providers/userContextTypes";


const FormRegister = () => {
  const {handleRegister, loadingBtn} = useContext(UserContext);

  const { register, handleSubmit, formState: {errors, isDirty, isValid} } = useForm<iDataRegister>({
    mode: "onBlur",
    resolver: yupResolver(schemaRegister),
  });

    
  return (
    <StyledFormLogin onSubmit={handleSubmit(handleRegister)} noValidate={true} autoComplete="off">
      <div className="containerHeaderFormRegister">
        <StyledText tag="h2" fontSize="3" fontWeight={700}>
          Cadastro
        </StyledText>
        <Link to={"/"}>Retornar para o login</Link>
      </div>
      <Input
        label="Nome"
        typeInput="text"
        register={register("name")}
        error={errors?.name && errors.name.message}
      />
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
      <Input
        label="Confirmar Senha"
        typeInput="password"
        register={register("confirmPassword")}
        error={errors?.confirmPassword && errors.confirmPassword.message}
      />
      <Button
        children={!loadingBtn ? "Cadastrar" : <FaSpinner />}
        typeBtn="medium"
        type="submit"
        disabled={!isDirty || !isValid}
      />
    </StyledFormLogin>
  );
};

export default FormRegister;
