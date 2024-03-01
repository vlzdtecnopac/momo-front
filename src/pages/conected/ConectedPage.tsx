import "./ConectedPage.scss";
import logo from "../../assets/logo.svg";
import checkIcon from "../../assets/icons/check.svg";
import { useEffect } from "react";
function ConectedPage() {

  useEffect(()=>{
    setTimeout(()=> location.href="./dashboard", 2000)
  },[])

  return (
    <div className="success_fully">
      <div className="container">
        <div className="center">
          <img
            className="logo"
            src={logo}
            alt="logo"
          />
          <h2 className="success">Felicidades</h2>
          <img
            className="check"
            src={checkIcon}
            alt="check-icon"
          />
          <h2 className="text">
            <span className="space">6 kioskos Conectados.</span> <br />
            <span className="light-text">
              {" "}
              Estamos listos para brindar la mejor experiencia en
            </span>{" "}
            <br />
            MOMO.
          </h2>
        </div>
      </div>
    </div>
  );
}
export default ConectedPage;
