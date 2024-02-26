import React, { useState } from "react";
import "./SideBar.scss";
// import orderIcon from "../../assets/icons/orders.svg";
// import inventoryIcon from "../../assets/icons/inventory.svg";
// import alertIcon from "../../assets/icons/alert.svg";
// import configIcon from "../../assets/icons/config.svg";
import logoutIcon from "../../assets/icons/logout.svg";

function SideBar() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  const sidebarListNav = [
    { icon: "orders-icon", name: "orders" },
    { icon: "inventory-icon", name: "inventory" },
    { icon: "alert-icon", name: "alert" },
    { icon: "config-icon", name: "config" },
  ];

  return (
    <>
      <ul className="options__menu">
        {sidebarListNav.map((item, index) => (
          <li
            className="option"
            onClick={() => handleOptionClick(item.name)}
            key={index}
          >
            <i className={`icon ${item.icon}`}></i>
          </li>
        ))}
      </ul>
      <a
        href="#"
        className="logout"
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
    </>
  );
}

export default SideBar;
