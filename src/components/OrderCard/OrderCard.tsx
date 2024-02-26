import CompleteOrderButton from "../CompleteOrderButton/CompleteOrderButton";
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
  const randomNum = Math.random();
  const id_input = "id_" + randomNum.toString(16).substr(2);
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
          <div className="item_name">
            <h2>Macadamia Black Tea Soda</h2>
            <form>
              <span className="opcion-radio">
                <input type="radio" id={id_input} name="check_process"  />
                <label htmlFor={id_input}></label>
              </span>
            </form>
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
            <CompleteOrderButton />
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderCard;
