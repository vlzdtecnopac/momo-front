import React, { useState } from "react";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import TakeoutBadge from "../TakeoutBadge/TakeoutBadge";
import moment from "moment";

import "./OrderCard.scss";
import { useDesignStore } from "../../store/design.store";

export enum State {
  initial = "initial",
  pending = "pending",
  completed = "completed",
}

interface Props {
  state: State;
}

const OrderCard: React.FC<Props> = (props) => {
  const id_input = "id_" + uuidv4();
  const [globalID, setGlobalID] = useState<any>(null);
  const [timeOrder, setTimeOrder] = useState<string>("00:00:00");

  const [start, setStart] = useState<boolean>(false);

  function formatoDosDigitos(numero: number) {
    return numero < 10 ? "0" + numero : "" + numero;
  }

  const tick = () => {
    const now = moment();
    const h = now.format("h");
    const m = now.minutes();
    const s = now.seconds();

    setTimeOrder(`${h}:${formatoDosDigitos(m)}:${formatoDosDigitos(s)}`);

    // Llamada recursiva para el próximo frame
    setGlobalID(requestAnimationFrame(tick));
  };

  const startOrder = () => {
    // Inicia el ciclo de animación
    setGlobalID(requestAnimationFrame(tick));
    setStart(true);
  };

  const cancelOrder = () => {
    cancelAnimationFrame(globalID);
    setStart(false);
    setGlobalID(null);
  };
  const { typeTypography } = useDesignStore();

  return (
    <div className={`state_${props.state}`}>
      <div className="order-card">
        <div className="client_info">
          <div className="left">
            <h2 className={`client_name ${typeTypography}-text`}>Laura</h2>
            <TakeoutBadge />
          </div>
          <div className="right">
            <motion.span
              key={Number(start)}
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
              {timeOrder}
            </motion.span>
            <p className={`order_id ${typeTypography}-text`}>ID #12356</p>
          </div>
        </div>
        <div className="order_info">
          <div className="item">
            <div className="grid-2_xs-1">
              <div className="col-10">
                <h2 className={`item_name ${typeTypography}-text`}>
                  Macadamia Black Tea Soda
                </h2>
              </div>
              <div className="col-2 center-col">
                <form>
                  <span className="opcion-radio">
                    <input
                      type="radio"
                      onChange={() => startOrder()}
                      id={id_input}
                      name="check_process"
                    />
                    <label htmlFor={id_input}></label>
                  </span>
                </form>
              </div>
            </div>
          </div>
          <hr />
          <ul className="details">
            <li className={`${typeTypography}-text`}>Chico</li>
            <li className={`${typeTypography}-text`}>Regular</li>
            <li className={`${typeTypography}-text`}>Sin tapa</li>
          </ul>
          <hr />
          <div className="button">
            <button
              onClick={() => cancelOrder()}
              className={`order-button ${typeTypography}-text`}
            >
              Completar Orden
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderCard;
