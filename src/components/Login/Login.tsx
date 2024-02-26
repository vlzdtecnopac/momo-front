import React from "react";
import "./Login.scss";
import LoginForm from "../LoginForm/LoginForm";
import imgLogin from "../../assets/login-img.jpg";
import logoMomo from "../../assets/logo.svg";

interface LoginProps {
  img: string;
}

const Login: React.FC<LoginProps> = (props) => {
  const { img } = props;

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
            <img
              className="logo-business"
              src={logoMomo}
              alt="logo-momo"
            />
            <div className="text">
              <h2>Iniciar sesión en KDS</h2>
              <p>Digita tu correo electrónico y contraseña</p>
            </div>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
