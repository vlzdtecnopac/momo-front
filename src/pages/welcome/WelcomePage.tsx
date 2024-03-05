import { motion } from "framer-motion";
import logo from "../../assets/logo.svg";
import tabletIcon from "../../assets/icons/tablet.svg";
import kioskIcon from "../../assets/icons/kiosko.svg";
import Card from "../../components/Card/Card";
import "./WelcomePage.scss";
import React, { useState } from "react";
import { useDesignStore } from "../../store/design.store";

function WelcomePage() {
  
  const { typeTypography } = useDesignStore();

  return (
    <div className="component-welcome">
      <div className="logo-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
        >
          <img
            className="logo"
            src={logo}
            alt="momo-logo"
          />
        </motion.div>
      </div>
      <div className="text-container">
        <div className="text">
          <h2 className={`big-text ${typeTypography}-text`}>¡Bienvenid@!</h2>
          <p className={`sub-text ${typeTypography}-text`}>
            Antes de comenzar, <br />
            Espera que se emparejen <br />
            tus dispositivos.
          </p>
        </div>
      </div>
      <div className="kds-loader-container">
        <div className="kds-loader">
          <div className="store-card">
            <Card
              icon={tabletIcon}
              text="KDS"
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
