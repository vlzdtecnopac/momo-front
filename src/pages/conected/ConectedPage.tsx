import "./ConectedPage.scss";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import logo from "../../assets/logo.svg";
import checkIcon from "../../assets/icons/check.svg";
import { useDesignStore } from "../../store/design.store";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useShoppingStore } from "../../store/shopping.store";
import { useEmployeeStore } from "../../store/employee.store";
import { tokenHeader } from "../../helpers/token-header.helper";

function ConectedPage() {
  const navigate = useNavigate();
  const { data } = useShoppingStore();
  const [count, setCount] = useState<number>(0);
  const { typeTypography } = useDesignStore();
  const [loader, setIsLoading] = useState<Boolean>(false);

  useEffect(() => {
    if (!loader) {
      setIsLoading(true);
      consultNumberKiosko();
    }
  }, [loader]);

  const consultNumberKiosko = async () => {
    const response = await axios.get(
      `http://localhost:3000/kioskos/?shopping_id=${data[0]?.shopping_id}&state=true`,
      { headers: tokenHeader }
    );
    setCount(response.data.length);
    setTimeout(() => navigate("/dashboard"), 4000);
  };

  return (
    <>
      {(() => {
        if (localStorage.getItem("token-momo")) {
          return (
            <div className="success_fully">
              <div className="container">
                <div className="center">
                  <img className="logo" src={logo} alt="logo" />
                  <h2 className={`success ${typeTypography}-text`}>
                    Felicidades
                  </h2>
                  <motion.div
                    className="box"
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
                    <img className="check" src={checkIcon} alt="check-icon" />
                  </motion.div>
                  <h2 className={`text ${typeTypography}-text`}>
                    <span className="space">{count} kioskos Conectados.</span>{" "}
                    <br />
                    <span className="light-text">
                      Estamos listos para brindar la mejor experiencia en
                    </span>
                    <br />
                    MOMO.
                  </h2>
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
export default ConectedPage;
