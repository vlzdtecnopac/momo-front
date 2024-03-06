import React from "react";
import { motion } from "framer-motion";
import coffee from "../../assets/coffee-momo.png";
import "./CongratsModal.scss";
import { useDesignStore } from "../../store/design.store";

interface CongratsModalProps {
  actionKey: React.Key;
}

const CongratsModal: React.FC<CongratsModalProps> = ({ actionKey }) => {
  const { typeTypography } = useDesignStore();

  return (
    <div className="congrats-success">
      <div className="shadow-effect"></div>
      <motion.div
        key={actionKey}
        className="congrats"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.5,
          ease: [0, 0.55, 0.2, 1.01],
        }}
      >
        <div className="congrats-container">
          <img
            className="congrats-img"
            src={coffee}
            alt="momo-coffee"
          />
          <h2 className={`congrat ${typeTypography}-text`}>¡Felicidades!</h2>
          <p className={`congrat-text ${typeTypography}-text`}>
            Tus cambios se han guardado exitosamente.
          </p>
        </div>
      </motion.div>
    </div>
  );
};
export default CongratsModal;
