import { motion } from "framer-motion";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useShoppingStore } from "../../store/shopping.store";
import { useDesignStore } from "../../store/design.store";
import { SocketContext } from "../../context/SocketContext";
import { KioskoInterface } from "../../interfaces/kiosko.interface";
import Card from "../../components/Card/Card";
import { LoaderPage } from "../../includes/loader/Loader";
import { useEmployeeStore } from "../../store/employee.store";
import { tokenHeader } from "../../helpers/token-header.helper";

import "./WelcomePage.scss";

import logo from "../../assets/logo.svg";
import tabletIcon from "../../assets/icons/tablet.svg";
import kioskIcon from "../../assets/icons/kiosko.svg";

function WelcomePage() {
  const { typeTypography } = useDesignStore();
  const { data, fetchData } = useShoppingStore();
  const { dataEmployee, fetchEmployeeData } = useEmployeeStore();
  const [kioskos, setKioskos] = useState<KioskoInterface[]>();
  const [loader, setIsLoading] = useState<Boolean>(true);

  const { socket } = useContext(SocketContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (loader) {
      const fetchDataOnMount = async () => {
        const employeeId = localStorage.getItem("employee-id");
        if (employeeId) {
          await fetchEmployeeData(employeeId);
          await fetchData(dataEmployee[0]?.shopping_id);
          socket.emit("kiosko-socket", {
            shopping_id: dataEmployee[0]?.shopping_id,
          });
          await axios.put(
            `${
              import.meta.env.VITE_API_URL
            }/shopping/open/${dataEmployee[0]?.shopping_id}`,
            {},
            { headers: tokenHeader }
          );
          setIsLoading(false);
          setTimeout(() => navigate("/success"), 4000);
        }
      };
      fetchDataOnMount();
    }
  }, [loader, data, dataEmployee]);

  useEffect(() => {
    socket.on("kiosko-socket", (data: KioskoInterface[]) => setKioskos(data));
  }, [socket]);

  return (
    <>
      {loader ? <LoaderPage /> : ""}
      {(() => {
        if (localStorage.getItem("token-momo")) {
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
                  <img className="logo" src={logo} alt="momo-logo" />
                </motion.div>
              </div>
              <div className="text-container">
                <div className="text">
                  <h2 className={`big-text ${typeTypography}-text`}>
                    ¡Bienvenid@!
                  </h2>
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
                    {data.map((item: any, i: number) => (
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
                        <Card
                          key={i}
                          icon={tabletIcon}
                          text={item.name_shopping}
                          subText={`No. ${item.no_shooping}`}
                          state={true}
                        />
                      </motion.div>
                    ))}
                  </div>
                  {data && !loader ? <div className="loader"></div> : ""}
                  <div className="card-group">
                    {kioskos?.map((_, index: number) => {
                      index = kioskos.length - 1 - index;
                      return (
                        <motion.div
                        className="box"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.8,
                          delay: 0.5,
                          ease: [0, 0.71, 0.2, 1.01]
                        }}
                      >
                        <Card
                          key={kioskos[index].id}
                          icon={kioskIcon}
                          text={kioskos[index].nombre}
                          subText={kioskos[index]?.name_shopping}
                          state={kioskos[index].state}
                        />
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        } else {
          navigate("/");
        }
      })()}
    </>
  );
}

export default WelcomePage;
