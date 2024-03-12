import React, { useContext } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";

import { SocketContext } from "../../context/SocketContext";
import { useDesignStore } from "../../store/design.store";
import "./LoginForm.scss";

function LoginForm() {
  const navigate = useNavigate();
  const { socket } = useContext(SocketContext);
  const SignupSchema = Yup.object().shape({
    email: Yup.string().email("El correo no es valido.").required("El correo es requerido."),
    password: Yup.string()
      .min(4, "La contreseña se encuentra corta")
      .max(10, "Lacontraseña se encuentra larga")
      .required("Ingresa la contraseña"),
  });

  return (
    <div className="component-login-form">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={SignupSchema}
        onSubmit={async (values) => {
          try{
            let resp = await axios.post("http://localhost:3000/users/employee/login", values);
            if(resp.data){
              if(!resp.data.state){
                  alert("Usuario Inactivo");
                  return;
              }
              localStorage.setItem("token-momo", resp.data.token);
              localStorage.setItem("store-momo", resp.data.shopping_id);
              socket.emit("kiosko-socket", {shopping_id: resp.data.shopping_id});
              navigate("/welcome");
            }
          }catch(e){
            console.log(e);
          }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form
            onSubmit={handleSubmit}
            className="login-form"
            autoComplete="off"
            noValidate
          >
            <div className="form-group">
              <input
                placeholder="Correo Electronico"
                type="email"
                id="email"
                name="email"
                className="input"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <i className="icon icon-email"></i>
            </div>
            {(() => {
              if (errors.email && touched.email) {
                return <div className="alert-error">{errors.email}</div>;
              }
            })()}
            <div className="form-group">
              <input
                placeholder="Contraseña"
                type="password"
                id="password"
                name="password"
                className="input"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <i className="icon icon-password"></i>
            </div>
            {(() => {
              if (errors.password && touched.password) {
                return <div className="alert-error">{errors.password}</div>;
              }
            })()}
            <div className="button-container">
              <button type="submit" className="login-buttom">
                Ingresar
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default LoginForm;
