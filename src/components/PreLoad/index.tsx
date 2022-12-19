import React, { useEffect } from "react";
import { StyledPreLoad } from "./styled";

const img: string = require("../../assets/img/BurguerKenzie.png");
const burguer: string = require("../../assets/img/hambuguer.png");

interface iPreLoadProps {
  setPreloadState: React.Dispatch<React.SetStateAction<boolean>>;
}

const PreLoad = ({ setPreloadState }: iPreLoadProps) => {
  useEffect(() => {
    setTimeout(() => {
      setPreloadState(false);
      localStorage.setItem("@darkMode", JSON.stringify(false));
    }, 2000);
  }, [setPreloadState]);

  return (
    <StyledPreLoad>
      <img className="burguerImg" src={burguer} alt="imagem do hamburguer" />
      <img className="logoImg" src={img} alt="imagem da logo" />
    </StyledPreLoad>
  );
};

export default PreLoad;
