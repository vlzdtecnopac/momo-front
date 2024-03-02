import React, {useState}  from "react";
import { v4 as uuidv4 } from "uuid";
import TakeoutBadge from "../TakeoutBadge/TakeoutBadge";
import "./OrderCard.scss";

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
  const [timeOrder, setTimeOrder] =  useState<string>("00:00:00");

  function formatoDosDigitos(numero: number) {
    return numero < 10 ? "0" + numero : "" + numero;
  }

  const tick = () => {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();


    setTimeOrder(`${h}:${formatoDosDigitos(m)}:${formatoDosDigitos(s)}`);
  
    // Llamada recursiva para el próximo frame
    setGlobalID(requestAnimationFrame(tick));
  };
  
  


  const startOrder = () => {
     // Inicia el ciclo de animación
     setGlobalID(requestAnimationFrame(tick));
  }

  const cancelOrder = () => {
    cancelAnimationFrame(globalID);
    setGlobalID(null);
  }


  return (
    <div className={`state_${props.state}`}>
      <div className="order-card">
        <div className="client_info">
          <div className="left">
            <h2>Laura</h2>
            <TakeoutBadge />
          </div>
          <div className="right">
            <span>{timeOrder}</span>
            <p>ID #12356</p>
          </div>
        </div>
        <div className="order_info">
          <div className="item_name">
            <div className="grid-2_xs-1">
              <div className="col-9">
                <h2>Macadamia Black Tea Soda</h2>
              </div>
              <div className="col-3 center-col">
                <form>
                  <span className="opcion-radio">
                    <input type="radio" onChange={()=>startOrder()} id={id_input} name="check_process" />
                    <label htmlFor={id_input}></label>
                  </span>
                </form>
              </div>
            </div>
          </div>
          <hr />
          <div className="details">
            <h3>Chico</h3>
            <h3>Regular</h3>
            <h3>Menos Azucar</h3>
            <h3>Sin tapa</h3>
          </div>
          <hr />
          <div className="button">
            <button onClick={()=>cancelOrder()} className="order-button">Completar Orden</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderCard;
