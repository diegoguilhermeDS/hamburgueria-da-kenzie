import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormLogin from "../../components/Forms/FormLogin";
import { api } from "../../services/api";
import { getProducts } from "../../services/getProducts";
import { StyledLoginPage } from "./style";
import { motion } from "framer-motion";

const imgDescription = require("../../assets/img/description.png");
const detailsLayout = require("../../assets/img/ellipses.png");
const logoImg = require("../../assets/img/Logo-m.png");

const LoginPage = () => {
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    async function redirectLogin() {
      const token = localStorage.getItem("@TokenBurguer");

      if (token) {
        try {
          api.defaults.headers.common.authorization = `Bearer ${token}`;
          const products = await getProducts();
          navigate("/home");
        } catch (error) {
          console.log(error);
        }
      }

      setLoading(false);
    }

    redirectLogin();
  }, [navigate]);

  if (loading) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <StyledLoginPage>
        <div className="containerLogin">
          <section className="sectionSlogan">
            <img src={logoImg} alt="imagem da Logo" />
            <img src={imgDescription} alt="imagem da descrição" />
            <img src={detailsLayout} alt="imagem de detalhes do layout" />
          </section>
          <section className="sectionFormLogin">
            <FormLogin />
          </section>
        </div>
      </StyledLoginPage>
    </motion.div>
  );
};

export default LoginPage;
