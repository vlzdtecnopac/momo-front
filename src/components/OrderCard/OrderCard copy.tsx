import React from "react";
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

const OrderCardTwo: React.FC<Props> = (props) => {
  const id_input = "id_" + uuidv4();
  return (
    <div className={`state_${props.state}`}>
      <div className="order-card">
        <div className="client_info">
          <div className="left">
            <h2>Laura</h2>
            <TakeoutBadge />
          </div>
          <div className="right">
            <span>00:00:00</span>
            <p>ID #12356</p>
          </div>
        </div>
        <div className="order_info">
          <section>
          <div className="item_name">
          <div className="grid-2_xs-2">
              <div className="col-9">
                <h2>Macadamia Black Tea Soda</h2>
              </div>
              <div className="col-3 center-col">
                <form>
                  <span className="opcion-radio">
                    <input type="radio" id={id_input} name="check_process" />
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
          </section>
          <hr/>
          <section>
          <div className="item_name">
          <div className="grid-2_xs-1">
              <div className="col-9">
                <h2>Macadamia Black Tea Soda</h2>
              </div>
              <div className="col-3 center-col">
                <form>
                  <span className="opcion-radio">
                    <input type="radio" id={id_input} name="check_process" />
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
          </section>
          <hr />
          <div className="button">
          <button className="order-button">Completar Orden</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderCardTwo;
