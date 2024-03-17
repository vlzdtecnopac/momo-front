
import imgLogin from "./../../assets/logo.svg";
import Login from "../../components/Login/Login";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const navigate = useNavigate();
  useEffect(()=> {
    navigate("/dashboard");
  }, [])
  return (
    <div>
      <Login img={imgLogin} />
    </div>
  );
};
export default LoginPage;
