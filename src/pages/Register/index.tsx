import { motion } from "framer-motion";
import React from "react";
import FormRegister from "../../components/Forms/FormRegister";
import { StyledRegisterPage } from "./style";

const imgDescription = require("../../assets/img/description.png");
const detailsLayout = require("../../assets/img/ellipses.png");
const logoImg = require("../../assets/img/Logo-m.png");

const RegisterPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <StyledRegisterPage>
        <div className="containerRegister">
          <section className="sectionSlogan">
            <img src={logoImg} alt="imagem da Logo" />
            <img src={imgDescription} alt="imagem da descrição" />
            <img src={detailsLayout} alt="imagem de detalhes do layout" />
          </section>
          <section className="sectionFormRegister">
            <FormRegister />
          </section>
        </div>
      </StyledRegisterPage>
    </motion.div>
  );
};

export default RegisterPage;
