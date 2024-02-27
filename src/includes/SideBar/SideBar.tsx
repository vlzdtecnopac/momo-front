import React, { useState } from "react";
import "./SideBar.scss";
import { Link } from "react-router-dom";

function SideBar() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  const sidebarListNav = [
    { icon: "orders-icon", name: "orders", router: "#"  },
    { icon: "inventory-icon", name: "inventory", router: "/inventory-page" },
    { icon: "alert-icon", name: "alert",  router: "/alerts-page" },
    { icon: "config-icon", name: "config", router: "#" },
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
                 <Link to=""><i className={`icon ${item.icon}`}></i></Link>
          </li>
        ))}
      </ul>
      <Link
        to="#"
        className="logout"
        onClick={() => handleOptionClick("logout")}
      >
            <i className="logout-icon"></i>
      </Link>
    </>
  );
}

export default SideBar;
