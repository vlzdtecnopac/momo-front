import React, { useState } from "react";
import OrderCard, { State } from "../../OrderCard/OrderCard";
import OrderCardTwo from "../../OrderCard/OrderCard copy";
import { useDesignStore } from "../../../store/design.store";

import "./OrderTabs.scss";

function OrderTabs() {
  const { typeColumns, typeTypography } = useDesignStore();
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
                <span
                  className={`span ${
                    tab.active ? "active" : ""
                  } span-tab ${typeTypography}-text`}
                >
                  {tab.text}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="content-tab">
        {(() => {
          if (typeColumns == 1) {
            return (
              <div className="columns-stacked">
                <article>
                  <OrderCard state={State.initial} />
                </article>
                <article>
                  <OrderCard state={State.initial} />
                </article>
                <article>
                  <OrderCardTwo state={State.completed} />
                </article>
                <article>
                  <OrderCard state={State.completed} />
                </article>
                <article>
                  <OrderCardTwo state={State.pending} />
                </article>
                <article>
                  <OrderCard state={State.initial} />
                </article>
                <article>
                  <OrderCard state={State.initial} />
                </article>
                <article>
                  <OrderCardTwo state={State.pending} />
                </article>
                <article>
                  <OrderCard state={State.completed} />
                </article>
              </div>
            );
          } else {
            return (
              <div
                className={`${
                  typeColumns == 0
                    ? "grid-equalHeight grid-4_lg-4_md-3_sm-1_xs-1"
                    : "grid-basic-flex"
                } `}
              >
                <div className="col">
                  <OrderCard state={State.initial} />
                </div>
                <div className="col">
                  <OrderCard state={State.pending} />
                </div>
                <div className="col">
                  <OrderCardTwo state={State.completed} />
                </div>
                <div className="col">
                  <OrderCard state={State.completed} />
                </div>
                <div className="col">
                  <OrderCard state={State.completed} />
                </div>
              </div>
            );
          }
        })()}
      </div>
    </>
  );
}

export default OrderTabs;
