import React, { useState } from "react";
import "./SideBar.scss";
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
          <li className="option"   onClick={() => handleOptionClick(item.name)} key={index}>
            <i className={`icon ${item.icon}`}></i>
          </li>
        ))}
      </ul>
      <a
        href="#"
        className="logout"
        onClick={() => handleOptionClick("logout")}
      >
            <i className="logout-icon"></i>
      </a>
    </>
  );
}

export default SideBar;
