import { motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import { useShoppingStore } from "../../store/shopping.store";
import { useDesignStore } from "../../store/design.store";
import { SocketContext } from "../../context/SocketContext";
import { KioskoInterface } from "../../interfaces/kiosko.interface";
import Card from "../../components/Card/Card";
import "./WelcomePage.scss";

import logo from "../../assets/logo.svg";
import tabletIcon from "../../assets/icons/tablet.svg";
import kioskIcon from "../../assets/icons/kiosko.svg";
import { LoaderPage } from "../../includes/loader/Loader";
import { Link, useNavigate } from "react-router-dom";

function WelcomePage() {
  const { typeTypography } = useDesignStore();
  const { data, fetchData } = useShoppingStore();
  const [kioskos, setKioskos] = useState<KioskoInterface[]>();
  const [loader, setLoader] = useState<Boolean>();

  const { socket } = useContext(SocketContext);

  const navigate = useNavigate();

  useEffect(() => {
    setLoader(true);
    fetchData(localStorage.getItem("store-momo")!).then((resp) => {
      if (resp) {
        socket.emit("kiosko-socket", {
          shopping_id: localStorage.getItem("store-momo")!,
        });
        setLoader(false);
      }
    });
  }, []);

  useEffect(() => {
    socket.on("kiosko-socket", (data: KioskoInterface[]) => setKioskos(data));
  }, [socket]);

  const handleVerifyKiosko = () => {
    navigate("/success")
  }

  return (
    <>
      {loader ? <LoaderPage /> : ""}
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
            <img className="logo" src={logo} alt="momo-logo" />
          </motion.div>
        </div>
        <div className="text-container">
          <div className="text">
            <h2 className={`big-text ${typeTypography}-text`}>¡Bienvenid@!</h2>
            <p
              className={`sub-text ${typeTypography}-text`}
              style={{ marginTop: "15px" }}
            >
              Antes de comenzar, <br />
              Espera que se emparejen <br />
              tus dispositivos.
            </p>
          </div>
        </div>
        <div className="kds-loader-container">
          <div className="kds-loader">
            <div className="store-card">
              {data?.map((item: any, i: number) => (
                <Card
                  key={i}
                  icon={tabletIcon}
                  text={item.name_shopping}
                  subText={`No. ${item.no_shooping}`}
                  state={true}
                />
              ))}
            </div>
            <div className="loader"></div>
            <div className="card-group">
              {kioskos?.map((_, index: number) => {
                index = kioskos.length - 1 - index;
                return (
                  <div key={kioskos[index].id} onClick={()=>handleVerifyKiosko()}>
                    <Card
                      key={kioskos[index].id}
                      icon={kioskIcon}
                      text={kioskos[index].nombre}
                      subText={kioskos[index].name_shopping}
                      state={kioskos[index].state}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WelcomePage;
