import "./Tabs.scss";

import flagIcon from "../../assets/icons/flag.svg";
import bellIcon from "../../assets/icons/bell.svg";
import clockIcon from "../../assets/icons/clock.svg";
import OrderCard from "../OrderCard/OrderCard";
function Tabs() {
  return (
    <div className="tabs">
      <input
        type="radio"
        id="tab1"
        name="tab-control"
        defaultChecked
      />
      <input
        type="radio"
        id="tab2"
        name="tab-control"
      />
      <input
        type="radio"
        id="tab3"
        name="tab-control"
      />

      <ul>
        <li title="completed">
          <label
            htmlFor="tab1"
            role="button"
          >
            <img
              src={flagIcon}
              alt="flagIcon"
            />
            <br />
            <span>Pedidos Completados</span>
          </label>
        </li>
        <li title="proccess">
          <label
            htmlFor="tab2"
            role="button"
          >
            <img
              src={bellIcon}
              alt="bellIcon"
            />
            <br />
            <span>Pedidos en Proceso</span>
          </label>
        </li>
        <li title="incoming">
          <label
            htmlFor="tab3"
            role="button"
          >
            <img
              src={clockIcon}
              alt="clockICon"
            />
            <br />
            <span>Pedidos Entrantes</span>
          </label>
        </li>{" "}
      </ul>
      <div className="slider">
        <div className="indicator"></div>
      </div>
      <div className="content">
        <section>
          <OrderCard />
        </section>
        <section>
          <OrderCard />
        </section>
        <section>
          <OrderCard />
        </section>
      </div>
    </div>
  );
}
export default Tabs;
