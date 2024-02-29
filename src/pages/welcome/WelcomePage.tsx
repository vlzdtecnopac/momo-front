import logo from "../../assets/logo.svg";
import tabletIcon from "../../assets/icons/tablet.svg";
import kioskIcon from "../../assets/icons/kiosko.svg";
import Card from "../../components/Card/Card";
import "./WelcomePage.scss";
import { Link } from "react-router-dom";

function WelcomePage() {
  return (
    <div className="component-welcome">
      <div className="logo-container">
        {" "}
        <img
          className="logo"
          src={logo}
          alt="momo-logo"
        />
      </div>
      <div className="text-container">
        <div className="text">
          <h2 className="big-text">¡Bienvenid@!</h2>
          <p className="small-text">
            Antes de comenzar, <br /> Espera que se emparejen <br /> tus
            dispositivos.
          </p>
        </div>
      </div>

      <div className="kds-loader-container">
        <div className="kds-loader">
          <div className="store-card">
            <Card
              icon={tabletIcon}
              text="KDS
      "
              subText="Tienda 1"
              state="Conectado"
            />
          </div>
          <div className="loader"></div>
          <div className="card-group">
            <Card
              icon={kioskIcon}
              text="KIOSKO"
              subText="Tienda 1"
              state="Conectado"
            />
            <Card
              icon={kioskIcon}
              text="KIOSKO"
              subText="Tienda 1"
              state="Conectado"
            />
            <Card
              icon={kioskIcon}
              text="KIOSKO
      "
              subText="Tienda 1"
              state="Conectado"
            />{" "}
            <Card
              icon={kioskIcon}
              text="KIOSKO
    "
              subText="Tienda 1"
              state="Conectado"
            />{" "}
            <Card
              icon={kioskIcon}
              text="KIOSKO
  "
              subText="Tienda 1"
              state="Conectado"
            />{" "}
            <Card
              icon={kioskIcon}
              text="KIOSKO"
              subText="Tienda 1"
              state="Conectado"
            />{" "}
            <Card
              icon={kioskIcon}
              text="KIOSKO"
              subText="Tienda 1"
              state="Conectado"
            />{" "}
            <Card
              icon={kioskIcon}
              text="KIOSKO"
              subText="Tienda 1"
              state="Conectado"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
