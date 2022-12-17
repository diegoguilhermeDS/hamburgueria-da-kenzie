import React from "react";
import { StyledButton } from "./style";

interface iButtonProps {
  children: React.ReactNode, 
  handle: (event: any) => void, 
  id?: string | undefined, 
  typeBtn?: string, 
  typeColor?: string
}

const Button = ({ children, handle, id, typeBtn, typeColor }: iButtonProps) => {
  return (
    <StyledButton id={id} onClick={handle} typeBtn={typeBtn} typeColor={typeColor}>
      {children}
    </StyledButton>
  );
};

export default Button;
