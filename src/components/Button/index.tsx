import React from "react";
import { StyledButton } from "./style";

interface iButtonProps {
  children: React.ReactNode, 
  type?: "button" | "submit" | "reset" | undefined,
  handle?: (event: any) => void, 
  id?: string | undefined, 
  typeBtn?: string, 
  typeColor?: string,
  disabled?: boolean
}

const Button = ({ children, handle, id, typeBtn, typeColor, type, disabled }: iButtonProps) => {
  return (
    <StyledButton id={id} type={type} onClick={handle} typeBtn={typeBtn} typeColor={typeColor} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
