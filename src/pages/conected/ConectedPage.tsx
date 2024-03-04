import "./ConectedPage.scss";
import { useEffect } from "react";
import { motion } from "framer-motion";

import logo from "../../assets/logo.svg";
import checkIcon from "../../assets/icons/check.svg";

function ConectedPage() {
  useEffect(() => {
    setTimeout(() => (location.href = "./dashboard"), 2000);
  }, []);

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
            <img
              className="check"
              src={checkIcon}
              alt="check-icon"
            />
          </motion.div>
          <h2 className="text">
            <span className="space">6 kioskos Conectados.</span> <br />
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
}
export default ConectedPage;
