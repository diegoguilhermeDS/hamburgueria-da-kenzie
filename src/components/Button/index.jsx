import React from "react";
import { StyledButton } from "./style";

const Button = ({ children, handle, id, type, typeColor }) => {
  return (
    <StyledButton id={id} onClick={handle} type={type} typeColor={typeColor}>
      {children}
    </StyledButton>
  );
};

export default Button;
