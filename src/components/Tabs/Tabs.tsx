import "./Tabs.scss";

import flagIcon from "../../assets/icons/flag.svg";
import OrderCard from "../OrderCard/OrderCard";

function Tabs() {
  return (
    <>
      <div className="tabs">
        <ul>
          <li>
            <div className="tab-button">
              <img src={flagIcon} alt="flagIcon" />
              <br />
              <span>Pedidos Completados</span>
            </div>
          </li>
          <li className="active">
            <div className="tab-button active">
              <img src={flagIcon} alt="flagIcon" />
              <br />
              <span>Pedidos Completados</span>
            </div>
          </li>
        </ul>
      </div>
      <div className="content-tab">
        <OrderCard />
      </div>
    </>
  );
}
export default Tabs;
