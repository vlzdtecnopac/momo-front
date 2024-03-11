import { motion } from "framer-motion";
import logo from "../../assets/logo.svg";
import tabletIcon from "../../assets/icons/tablet.svg";
import kioskIcon from "../../assets/icons/kiosko.svg";
import Card from "../../components/Card/Card";
import "./WelcomePage.scss";
import React, { useContext, useEffect, useState } from "react";
import { useDesignStore } from "../../store/design.store";
import { SocketContext } from "../../context/SocketContext";
import { KioskoInterface } from "../../interfaces/kiosko.interface";

function WelcomePage() {
  const { socket } = useContext(SocketContext);
  const [kioskos, setKioskos] = useState<KioskoInterface[]>();  
  const { typeTypography } = useDesignStore();

  useEffect(() => {
    socket.on("kiosko-socket", (data: KioskoInterface[]) => setKioskos(data));
  }, [socket]);
  

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
          <p className={`sub-text ${typeTypography}-text`} style={{marginTop: '15px'}}>
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
              state={true}
            />
          </div>
          <div className="loader"></div>
          <div className="card-group">
          {kioskos?.map((_, index: number) => {
              index = kioskos.length - 1 - index;
              return (
                <Card
                icon={kioskIcon}
                text={kioskos[index].nombre}
                subText={kioskos[index].name_shopping}
                state={kioskos[index].state}
              />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
