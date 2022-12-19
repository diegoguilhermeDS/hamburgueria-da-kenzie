import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { StyledButtonSingOut } from "./style";

const ButtonSingOut = () => {

  const navigate = useNavigate()

  const handleSingOut = () => {
    toast("Obrigado por nos visitar, volte sempre!", {
      position: toast.POSITION.TOP_RIGHT,
      theme: "light",
      autoClose: 2000,
      icon: "🍔",
    });
    localStorage.removeItem("@TokenBurguer")
    navigate("/")
  }

  return (
    <StyledButtonSingOut onClick={handleSingOut}>
      <FaSignOutAlt />
    </StyledButtonSingOut>
  );
};

export default ButtonSingOut;
