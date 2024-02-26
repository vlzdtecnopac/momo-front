import "./Tabs.scss";
import React, { useState } from "react";
import flagIcon from "../../assets/icons/flag.svg";
import bellIcon from "../../assets/icons/bell.svg";
import clockIcon from "../../assets/icons/clock.svg";
import OrderCard from "../OrderCard/OrderCard";

const tabOptions = [
  {
    text: "Pedidos completados",
    icon: flagIcon,
    active: true,
  },
  {
    text: "Pedidos en proceso",
    icon: bellIcon,
    active: false,
  },
  {
    text: "Pedidos entrantes",
    icon: clockIcon,
    active: false,
  },
];

function Tabs() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="tabs">
        <ul>
          {tabOptions.map((tab, index) => (
            <li
              key={index}
              className={tab.active ? "active" : ""}
            >
              <div
                className={`tab-button ${tab.active ? "active" : ""}`}
                onClick={() => setIsActive(true)}
              >
                <img
                  src={tab.icon}
                  alt="icon"
                />
                <br />
                <span className="active">{tab.text}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="content-tab">
        <OrderCard />
      </div>
    </>
  );
}

export default Tabs;
