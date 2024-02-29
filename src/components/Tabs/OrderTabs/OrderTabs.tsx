import "./OrderTabs.scss";
import React, { useState } from "react";
import OrderCard, { State } from "../../OrderCard/OrderCard";

function OrderTabs() {
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
      <div className="order-tabs">
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
                <span className={`span ${tab.active ? "active" : ""}`}>
                  {tab.text}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="content-tab">
        <div className="grid-equalHeight grid-4_lg-4_md-3_sm-1_xs-1">
          <div className="col">
            <OrderCard state={State.initial} />
          </div>
          <div className="col">
            <OrderCard state={State.pending} />
          </div>
          <div className="col">
            <OrderCard state={State.completed} />
          </div>
          <div className="col">
            <OrderCard state={State.completed} />
          </div>
          <div className="col">
            <OrderCard state={State.completed} />
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderTabs;