import "./Tabs.scss";
import React, { useEffect, useState } from "react";
import OrderCard from "../OrderCard/OrderCard";

function Tabs() {
  const [options, setOptions] = useState([
    {
      text: "Pedidos completados",
      icon: "flag",
      active: false,
    },
    {
      text: "Pedidos en proceso",
      icon: "bell",
      active: false,
    },
    {
      text: "Pedidos entrantes",
      icon: "clock",
      active: true,
    },
  ]);

  const changeActivate = (index: number) => {
    const updatedOptions = options.map((option, i) => ({
      ...option,
      active: i == index ? true : false,
    }));
    setOptions(updatedOptions);
  };

  return (
    <>
      <div className="tabs">
        <ul>
          {options.map((tab, index: number) => (
            <li
              className={tab.active ? "active" : ""}
              key={index}
              onClick={() => changeActivate(index)}
            >
              <div className={`tab-button ${tab.active ? "active" : ""}`}>
                <i
                  className={`icon ${tab.active ? "active" : ""} ${tab.icon}`}
                />
                <br />
                <span className={`${tab.active ? "active" : ""}`}>
                  {tab.text}
                </span>
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
