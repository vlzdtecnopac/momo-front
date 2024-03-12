import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";

import "./Login.scss";
import LoginForm from "../LoginForm/LoginForm";
import imgLogin from "../../assets/login-img.jpg";
import logoMomo from "../../assets/logo.svg";
import { useDesignStore } from "../../store/design.store";

interface LoginProps {
  img: string;
}

const Login: React.FC<LoginProps> = () => {

  const { typeTypography } = useDesignStore();

  return (
    <div className="component-login">
      <div className="sidebar-left">
        <img
          className="image"
          src={imgLogin}
          alt="img"
        />
      </div>
      <div className="column-right">
        <div className="center-container">
          <div className="container">
            <motion.div
              className="box"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <img
                className="logo-business"
                src={logoMomo}
                alt="logo-momo"
              />
            </motion.div>
            <div className="text">
              <h2 className="h2">Iniciar sesión en KDS</h2>
              <p className="parrafo-subtitulo">Digita tu correo electrónico y contraseña</p>
            </div>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
