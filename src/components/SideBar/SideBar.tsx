import React, { useState } from "react";
import "./SideBar.scss";
import orderIcon from "../../assets/icons/orders.svg";
import inventoryIcon from "../../assets/icons/inventory.svg";
import alertIcon from "../../assets/icons/alert.svg";
import configIcon from "../../assets/icons/config.svg";
import logoutIcon from "../../assets/icons/logout.svg";

function SideBar() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  return (
      <div className="options__menu">
        <a
          href="#"
          className={selectedOption === "orders" ? "selected" : ""}
          onClick={() => handleOptionClick("orders")}
        >
          <div className="option">
            <img
              className={selectedOption === "option-icon" ? "selected" : ""}
              src={orderIcon}
              alt="Order Icon"
            />
          </div>
        </a>

        <a
          href="#"
          className={selectedOption === "inventory" ? "selected" : ""}
          onClick={() => handleOptionClick("inventory")}
        >
          <div className="option">
            <img
              className=""
              src={inventoryIcon}
              alt="Inventory Icon"
            />
          </div>
        </a>

        <a
          href="#"
          className={selectedOption === "alert" ? "selected" : ""}
          onClick={() => handleOptionClick("alert")}
        >
          <div className="option">
            <img
              className=""
              src={alertIcon}
              alt="Alert Icon"
            />
          </div>
        </a>

        <a
          href="#"
          className={selectedOption === "config" ? "selected" : ""}
          onClick={() => handleOptionClick("config")}
        >
          <div className="option">
            <img
              className=""
              src={configIcon}
              alt="Config Icon"
            />
          </div>
        </a>

        <a
          href="#"
          className={selectedOption === "logout" ? "selected" : ""}
          onClick={() => handleOptionClick("logout")}
        >
          <div className="down">
            <div className="option">
              <img
                className=""
                src={logoutIcon}
              />
            </div>
          </div>
        </a>
      </div>
  );
}

export default SideBar;
