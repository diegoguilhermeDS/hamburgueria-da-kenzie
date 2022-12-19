import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import MessageError from "../MessageErrorInput";
import { StyledFieldset } from "./style";

interface iInput {
  typeInput: "text" | "password" | "email";
  id?: string;
  label: string;
  register: UseFormRegisterReturn;
  error?: string;
}

const Input = ({ typeInput, id, label, register, error }: iInput) => {
  return (
    <StyledFieldset errorValidate={error ? true : false}>
      <input type={typeInput} {...register} placeholder=" " />
      <label htmlFor={id && id} className="labelInput">
        {label}
      </label>
      <MessageError>{error}</MessageError>
    </StyledFieldset>
  );
};

export default Input;
